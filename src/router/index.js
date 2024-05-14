import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/onboarding',
    name: 'onboarding',
    component: () => import('../views/onboarding/OnboardingView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Глобальный guard
router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('user')

  if (!user && to.name !== 'onboarding') {
    // Если пользователя нет в localStorage и он не пытается попасть на страницу онбординга,
    // перенаправляем его на страницу онбординга
    next({ name: 'onboarding' })
  } else if (user && to.name === 'onboarding') {
    // Если пользователь есть в localStorage и он пытается попасть на страницу онбординга,
    // перенаправляем его на главную страницу
    next({ name: 'home' })
  } else {
    // В противном случае, разрешаем переход на запрашиваемую страницу
    next()
  }
})

export default router

