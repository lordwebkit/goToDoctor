<script setup lang="ts">
import { useRegistrationStore } from '@/stores/auth/registration'

const store = useRegistrationStore()
</script>
<template>
  <form class="form">
    <label class="form__label">
      <p class="form__title">Фамилия</p>
      <input
        class="form__input"
        type="text"
        placeholder="Введите вашу фамилию"
        v-model="store.lastName"
      />
    </label>
    <label class="form__label">
      <p class="form__title">Имя</p>
      <input class="form__input" type="text" placeholder="Введите ваше имя" v-model="store.name" />
    </label>
    <label class="form__label">
      <p class="form__title">Отчество</p>
      <input
        class="form__input"
        type="text"
        placeholder="Введите ваше отчество"
        v-model="store.secondName"
      />
    </label>
    <label class="form__label">
      <p class="form__title">Электронная почта</p>
      <input
        class="form__input"
        type="email"
        placeholder="Введите ваш email"
        v-model="store.email"
      />
    </label>
    <label class="form__label">
      <p class="form__title">Пароль</p>
      <input
        class="form__input"
        type="password"
        placeholder="Введите ваш пароль"
        v-model="store.password"
      />
    </label>
    <label class="form__label">
      <p class="form__title">Подтвердите пароль</p>
      <input
        class="form__input"
        type="password"
        placeholder="Введите ваш пароль еще раз"
        v-model="store.rePassword"
      />
    </label>
  </form>
</template>
<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__title {
    font-weight: 600;
  }

  &__input {
    font-family: 'Inter';
    font-size: 16px;
    background-color: #ffffff;
    border: 1px solid #e6e6e6;
    padding: 8px 12px;
    width: 100%;
    border-radius: 6px;
  }
}
</style>
