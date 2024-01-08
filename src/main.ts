import './assets/main.css';
import '@/utils/string'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia';

import { createApp } from 'vue'
import Router from '@/router';
import App from '@/App.vue'

createApp(App)
  .use(ElementPlus)
  .use(createPinia())
  .use(Router)
  .mount('#app')