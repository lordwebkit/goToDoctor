import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter(to, from, next) {
        const profile = localStorage.getItem('profile')

        if (profile) {
          const profileToken = JSON.parse(profile)
          if (profileToken) next()
        } else {
          next({ name: 'onboarding' })
        }
      }
    },
    {
      path: '/onboarding',
      name: 'onboarding',
      component: () => import('@/views/Auth/OnboardingView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Auth/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Auth/RegisterView.vue')
    }
  ]
})

export default router
