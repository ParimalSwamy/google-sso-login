<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin" class="login-form">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit" class="login-btn">Login</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import { login } from '../logic/customLogin';

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async handleLogin() {
      try {
        this.$router.push({ name: 'Home' }); // Redirect to home or another page after login
      } catch (error) {
        // Handle error
      }
    }
  }
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-form .form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
}

.login-form label {
  margin-bottom: 6px;
  font-weight: 500;
  color: #2c3e50;
}

.login-form input {
  padding: 10px 12px;
  border: 1px solid #bfc9d9;
  border-radius: 4px;
  font-size: 15px;
  outline: none;
  transition: border 0.2s;
}

.login-form input:focus {
  border: 1.5px solid #4285f4;
}

.login-btn {
  width: 100%;
  padding: 10px 0;
  background: #4285f4;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.2s;
}

.login-btn:hover {
  background: #326ac0;
}

.error {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>