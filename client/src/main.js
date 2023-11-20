import { createApp } from 'vue';
import { Quasar } from 'quasar';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './lib/router';

import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css';
import 'quasar/src/css/index.sass';
import './assets/index.css';

const app = createApp(App);

app.use(Quasar, { plugins: {} });
app.use(router);
app.use(createPinia());

app.mount('#app');
