import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/pages/MainPage.vue';
import FavoritePage from '@/pages/FavoritePage';

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/favorite',
    component: FavoritePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
