<template>
  <div class="app-wrapper pt-36">
    <div class="flex justify-center">
      <img
        v-if="accountType === 'patient'"
        class="h-56"
        src="../../assets/image/auth/sign_up_patient.svg"
        alt="Фоновая заставка"
      />
      <img
        v-else
        src="../../assets/image/auth/sign_up_doctor.svg"
        class="h-56"
        alt="Фоновая заставка"
      />
    </div>
    <h1 class="mt-8 font-bold text-lg text-center text-cyan-900">Регистрация</h1>
    <div class="flex justify-center">
      <form class="flex flex-col justify-center max-w-72 gap-4" @submit.prevent>
        <div class="mt-8">
          <div class="font-bold text-sm text-black flex gap-10">
            <button
              class="flex-1 w-full py-4 bg-cyan-100 rounded-lg"
              :class="{
                'bg-white border border-cyan-700 text-cyan-700': accountType === 'patient'
              }"
              @click="accountType = 'patient'"
            >
              Пациент
            </button>
            <button
              class="flex-1 w-full py-4 bg-cyan-100 rounded-lg"
              :class="{ 'bg-white border border-cyan-700 text-cyan-700': accountType === 'doctor' }"
              @click="accountType = 'doctor'"
            >
              Врач
            </button>
          </div>
        </div>
        <input
          class="px-4 h-12 bg-cyan-100 rounded-lg"
          type="text"
          placeholder="Имя"
          v-model="name"
        />
        <input
          class="px-4 h-12 bg-cyan-100 rounded-lg"
          type="text"
          placeholder="Адрес эл. почты"
          v-model="email"
        />
        <input
          v-maska
          class="px-4 h-12 bg-cyan-100 rounded-lg"
          type="text"
          data-maska="+ 7 (###)-###-##-##"
          placeholder="+ 7 (____)-______-____-____"
          v-model="number"
        />
        <p class="font-light text-xs">
          Нажимая кнопку “Продолжить” я принимаю
          <a class="underline cursor-pointer">Пользовательское соглашение</a> и даю согласие на
          <a class="underline cursor-pointer">обработку персональных данных</a>
        </p>
        <button
          class="flex justify-center items-center rounded-full font-bold text-xl text-white bg-cyan-700 py-4"
        >
          Продолжить
        </button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useSignUpStore } from '@/stores/auth/sign-up'
import { vMaska } from 'maska'

const signUpStore = useSignUpStore()
const { accountType, name, email, number } = storeToRefs(signUpStore)
</script>
<style lang="scss" scoped></style>
