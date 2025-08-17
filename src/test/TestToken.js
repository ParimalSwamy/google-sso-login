// import axios from 'axios';

const axios = require('axios');
const GOOGLE_TOKEN_ENDPOINT = 'https://oauth2.googleapis.com/token';
const CLIENT_ID = '888829544623-qavdqv00glacf6knjhgb13tlimqaks1t.apps.googleusercontent.com';
const CLIENT_SECRET = '';
const REDIRECT_URI = 'http://localhost:8080/login/auth/callback';
const LOCAL_SECRET = ''; // for signing local JWT

axios.post(GOOGLE_TOKEN_ENDPOINT, new URLSearchParams({
  code: "YOUR_AUTH_CODE",
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
  redirect_uri: REDIRECT_URI,
  grant_type: 'authorization_code'
}), {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/json',
    'Accept': 'application/json'
  },
  decompress: true // optional, axios handles this by default
})
.then(response => {
  console.log('Tokens:', response.data);
})
.catch(error => {
  if (error.response) {
    console.error('Token exchange failed:', error.response.data);
  } else {
    console.error('Unexpected error:', error.message);
  }
});

