import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import HomePage from '../views/HomePage.vue';
import AuthCallback from '../views/AuthCallback.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/login/auth/callback',name: 'AuthCallback',component: AuthCallback},
  { path: '/home', name: 'Home', component: HomePage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;