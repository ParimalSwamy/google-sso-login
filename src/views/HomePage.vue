<template>
  <div class="home-page">
    <h2>Welcome, you are logged in!</h2>
    <button @click="logout" class="logout-btn">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      if (localStorage.getItem('loginMethod') === 'google') {
        // Revoke Google token if available
        const token = localStorage.getItem('googleToken');
        if (token) {
          await fetch(`https://accounts.google.com/o/oauth2/revoke?token=${token}`);
          localStorage.removeItem('googleToken');
        }
        if (window.google && window.google.accounts && window.google.accounts.id) {
          window.google.accounts.id.disableAutoSelect();
        }
      }
      localStorage.removeItem('loginMethod');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.home-page {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.logout-btn {
  margin-top: 24px;
  padding: 10px 24px;
  background: #4285f4;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
}
.logout-btn:hover {
  background: #326ac0;
}
</style>