import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Menu from '../views/Menu.vue';
import TheoEnigma1 from '../views/Enigmas/Theory/TheoEnigma1.vue';
import TheoEnigma2 from '../views/Enigmas/Theory/TheoEnigma2.vue';
import TheoEnigma3 from '../views/Enigmas/Theory/TheoEnigma3.vue';
import Enigma1 from '../views/Enigmas/Enigma1.vue';
import Enigma2 from '../views/Enigmas/Enigma2.vue';
import Enigma3 from '../views/Enigmas/Enigma3.vue';
import Success from '../views/Success.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
  { path: '/theoryEnigma1', component: TheoEnigma1 },
  { path: '/theoryEnigma2', component: TheoEnigma2 },
  { path: '/theoryEnigma3', component: TheoEnigma3 },
  { path: '/enigma1', component: Enigma1 },
  { path: '/enigma2', component: Enigma2 },
  { path: '/enigma3', component: Enigma3 },
  { path: '/success', component: Success}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;