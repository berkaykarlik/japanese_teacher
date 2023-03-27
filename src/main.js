import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import { createRouter, createWebHashHistory } from 'vue-router';
import Recognize from '@/components/Recognize.vue';
import Tables from '@/components/Tables.vue';


const routes = [
    { path: '/', redirect: '/recognize'},
    { path: '/recognize', component: Recognize},
    { path: '/tables', component: Tables },
  ]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

createApp(App).use(router).mount('#app')

