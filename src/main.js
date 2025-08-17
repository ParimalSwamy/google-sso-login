import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import GoogleLogin from 'vue3-google-login';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(GoogleLogin, {
  clientId: '888829544623-qavdqv00glacf6knjhgb13tlimqaks1t.apps.googleusercontent.com'
});

app.mount('#app');