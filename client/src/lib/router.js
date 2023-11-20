import { createRouter, createWebHistory } from 'vue-router';

import HomeRoutes from '@/modules/home/router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    ...HomeRoutes,

    { path: '/', redirect: '/home' },
    // { path: '/:pathMatch(.*)*', redirect: '/error' },
  ],
});

export default router;
