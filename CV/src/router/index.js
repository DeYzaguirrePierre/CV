import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/competences',
      name: 'competences',
      component: () => import('@/views/CompetencesView.vue')
    },
    {
      path: '/projets',
      name: 'projets',
      component: () => import('@/views/ProjetsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue')
    }
   ]
})

export default router
