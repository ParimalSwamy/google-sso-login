<template>
  <div>
    <p>Authenticating with Google...</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const router = useRouter();

onMounted(async () => {
  const code = route.query.code;

  if (!code) {
    console.error('No auth code found in URL');
    return;
  }

  try {
    // Send code to your backend to exchange for tokens
    const response = await axios.post('http://localhost:8080/api/google-auth', { code });

    // Handle response (e.g., store token, redirect)
    console.log('Login successful:', response.data);
    this.$router.push('/home');// or wherever you want to go next
  } catch (error) {
    console.error('Google SSO failed:', error);
  }
});
</script>
