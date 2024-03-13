<script setup lang="ts">
import GSelect from '@/components/Global/GSelect.vue'
import { useRegistrationStore } from '@/stores/auth/registration'

const store = useRegistrationStore()

const select = (id: string) => {
  store.clinic = id
}

store.reqGetAllClinics()
</script>
<template>
  <form class="form">
    <label class="form__label">
      <p class="form__title">Специализация</p>
      <input class="form__input" type="text" placeholder="Введите вашу специализация" />
    </label>
    <GSelect :list="store.clinicsList" :selected="store.clinic" @select="select" />
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
