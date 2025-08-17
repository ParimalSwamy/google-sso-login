<template>
  <div class="login-page">
    <div class="login-card">
      <h1 class="login-title">Welcome Back</h1>
      <Login @login="handleLogin" />
      <div class="divider">
        <span>or</span>
      </div>
      <div class="google-sso">
        <GoogleLogin
          :client-id="googleClientId"
          :callback="onGoogleSuccess"
          :on-error="onGoogleError"
        >
          <template #default>
            <button class="google-btn">
              <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" class="google-icon" />
              Sign in with Google
            </button>
          </template>
        </GoogleLogin>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue';
import { loginUser } from '@/logic/customLogin.js';
import { handleGoogleSSO } from '@/logic/googleTokenExchange.js';

export default {
  components: {
    Login,
  },
  data() {
    return {
      googleClientId: '888829544623-qavdqv00glacf6knjhgb13tlimqaks1t.apps.googleusercontent.com',
    };
  },
  methods: {
    async handleLogin(credentials) {
      try {
        const response = await loginUser(credentials);
        // Handle successful login (e.g., redirect or show a success message)
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
    async onGoogleSuccess(response) {
      console.log('Google SSO Success:', response);
      const result = await handleGoogleSSO(response.code? response.code : '');
      if (result.success) {
        console.log('Session Token:', result.sessionToken);
        console.log('User Info:', result.user);
        
        // Save login method and token
        localStorage.setItem('loginMethod', 'google');
        localStorage.setItem('googleToken', result.sessionToken);
      } else {
        console.error('SSO Error:', result.error);
      }
      
    },
    onGoogleError(error) {
      console.error('Google SSO Error:', error);
    },
  },
};
</script>

<style scoped>
.login-page {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%);
}

.login-card {
  background: #fff;
  padding: 2.5rem 2rem 2rem 2rem;
  border-radius: 18px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 340px;
}

.login-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #2c3e50;
  letter-spacing: 1px;
}

/* Add spacing between form fields inside Login.vue */
.login-card form > div {
  margin-bottom: 18px;
}

.login-card form button,
.login-card form .error {
  margin-top: 10px;
}

.divider {
  margin: 24px 0 16px 0;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #eee;
  line-height: 0.1em;
  position: relative;
}
.divider span {
  background: #fff;
  padding: 0 14px;
  color: #888;
  font-size: 15px;
  position: relative;
  top: 10px;
}

.google-sso {
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.google-btn {
  display: flex;
  align-items: center;
  background: #fff;
  border: 1.5px solid #4285f4;
  color: #4285f4;
  padding: 10px 28px;
  border-radius: 6px;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(66, 133, 244, 0.08);
  outline: none;
}
.google-btn:hover {
  background: #4285f4;
  color: #fff;
  box-shadow: 0 4px 16px rgba(66, 133, 244, 0.15);
}
.google-icon {
  width: 22px;
  height: 22px;
  margin-right: 12px;
}
</style>