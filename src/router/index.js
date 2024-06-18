import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

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
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/auth/AuthSignInView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/auth/AuthSignUpView.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('@/views/account/AccountView.vue')
  },
  {
    path: '/palette',
    name: 'palette',
    component: () => import('@/views/SystemPalette.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// TODO: Дописать данный guard, сейчас он не пускает на логин и регистрацию

// // Глобальный guard
// router.beforeEach((to, from, next) => {
//   const user = localStorage.getItem('user')

//   if (!user && to.name !== 'onboarding') {
//     // Если пользователя нет в localStorage и он не пытается попасть на страницу онбординга,
//     // перенаправляем его на страницу онбординга
//     next({ name: 'onboarding' })
//   } else if (user && to.name === 'onboarding') {
//     // Если пользователь есть в localStorage и он пытается попасть на страницу онбординга,
//     // перенаправляем его на главную страницу
//     next({ name: 'home' })
//   } else {
//     // В противном случае, разрешаем переход на запрашиваемую страницу
//     next()
//   }
// })

export default router

