import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import Volume from "./views/Volume.vue";
import VolumeRef from "./views/VolumeRef.vue";
import Weight from "./views/Weight.vue";
import WeightRef from "./views/WeightRef.vue";
import Game from "./views/Game.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/volume", component: Volume },
  { path: "/volume-ref", component: VolumeRef },
  { path: "/weight", component: Weight },
  { path: "/weight-ref", component: WeightRef },
  { path: "/game", component: Game },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
