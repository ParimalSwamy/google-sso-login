// const axios = require('axios');
import axios from 'axios'
import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
// const jwt = require('jsonwebtoken');
// const jwtDecode = require('jwt-decode');

const GOOGLE_TOKEN_ENDPOINT = 'https://oauth2.googleapis.com/token';
const CLIENT_ID = '888829544623-qavdqv00glacf6knjhgb13tlimqaks1t.apps.googleusercontent.com';
const CLIENT_SECRET = '';
const REDIRECT_URI = 'http://localhost:8080/login/auth/callback';
const LOCAL_SECRET = ''; // for signing local JWT

export async function handleGoogleSSO(authCode) {
  try {
    // Step 1: Exchange code for tokens
    const tokenResponse = await axios.post(GOOGLE_TOKEN_ENDPOINT, null, {
      params: {
        code: authCode,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code'
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const { id_token, access_token } = tokenResponse.data;

    // Step 2: Decode ID token to get user info
    const userInfo = jwtDecode(id_token);

    // Step 3: Create local session token
    const sessionToken = jwt.sign(
      {
        email: userInfo.email,
        name: userInfo.name,
        picture: userInfo.picture,
        sub: userInfo.sub
      },
      LOCAL_SECRET,
      { expiresIn: '1h' }
    );

    // Step 4: Return session token (or set cookie if using Express)
    return {
      success: true,
      sessionToken,
      user: userInfo
    };
  } catch (error) {
    console.error('Google SSO failed:',  error.response && error.response.data ? error.response.data : error.message);

    return { success: false, error: error.message };
  }
}


