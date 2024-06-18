<template>
  <div class="app-wrapper pt-36">
    <div class="flex justify-center">
      <img src="../../assets/image/auth/sign_in.svg" class="h-56" alt="Фоновая заставка" />
    </div>
    <h1 class="mt-4 font-bold text-lg text-center text-cyan-900">Авторизация</h1>
    <div class="flex justify-center mt-12">
      <form class="flex flex-col justify-center w-full px-8 gap-4" @submit.prevent>
        <input
          v-maska
          class="px-4 h-12 bg-cyan-100 rounded-lg"
          type="text"
          data-maska="+ 7 (###)-###-##-##"
          placeholder="+ 7 (____)-______-____-____"
          v-model="number"
        />
        <input
          class="px-4 h-12 bg-cyan-100 rounded-lg"
          type="password"
          placeholder="Пароль"
          v-model="password"
        />
        <button
          class="mt-4 flex justify-center items-center rounded-full font-bold text-xl text-white bg-cyan-700 py-4"
        >
          Войти
        </button>
        <p class="text-sm">
          Нет аккаунта?
          <RouterLink to="/signup" class="font-semibold text-cyan-700"
            >Зарегистрироваться</RouterLink
          >
        </p>
      </form>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useSignInStore } from '@/stores/auth/sign-in'
import { vMaska } from 'maska'

const signInStore = useSignInStore()
const { number, password } = storeToRefs(signInStore)
</script>
<style lang="scss" scoped></style>
