<script setup lang="ts">
import { useRegistrationStore } from '@/stores/auth/registration'
import GSelect from '@/components/Global/GSelect.vue'

const store = useRegistrationStore()

const select = (id: string) => {
  store.city = id
}

store.reqGetAllCities()
</script>
<template>
  <form class="form">
    <label class="form__label">
      <p class="form__title">Дата рождения</p>
      <input
        class="form__input"
        type="date"
        placeholder="Введите вашу дату рождения"
        v-model="store.birthday"
      />
    </label>
    <label class="form__label">
      <p class="form__title">Город</p>
      <GSelect :list="store.citiesList" :selected="store.city" @select="select" />
    </label>
  </form>
</template>
<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
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
