<script setup lang="ts">
import { vMaska } from 'maska'
import { computed, ref } from 'vue'
import { useRegistrationStore } from '@/stores/auth/registration'
import IconEye from '@/assets/icons/IconEye.vue'

const passwordHide = ref(true)
const passwordType = computed(() => (passwordHide.value ? 'password' : 'text'))

const store = useRegistrationStore()
</script>
<template>
  <form class="form">
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
      <IconEye class="form__eye" :isClose="passwordHide" @click="passwordHide = !passwordHide" />
      <input
        class="form__input"
        :type="passwordType"
        placeholder="Введите ваш пароль"
        v-model="store.password"
      />
    </label>
  </form>
</template>
<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__label {
    position: relative;
  }

  &__eye {
    position: absolute;
    bottom: 8px;
    right: 8px;
  }

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

  &__error {
    color: var(--color-error);
    font-size: 12px;
  }
}
</style>
