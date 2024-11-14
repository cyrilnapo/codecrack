import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Menu from '../views/Menu.vue';
import Enigma1 from '../views/Enigmas/Enigma1.vue';
import Enigma2 from '../views/Enigmas/Enigma2.vue';
import Enigma3 from '../views/Enigmas/Enigma3.vue';
import Enigma4 from '../views/Enigmas/Enigma4.vue';
import Enigma5 from '../views/Enigmas/Enigma5.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
  { path: '/enigma1', component: Enigma1 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;