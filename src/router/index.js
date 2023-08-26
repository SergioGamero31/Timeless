import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/men',
      name: 'men',
      component: () => import('../views/MenView.vue')
    },
    {
      path: '/women',
      name: 'women',
      component: () => import('../views/WomenView.vue')
    }
  ]
})

export default router