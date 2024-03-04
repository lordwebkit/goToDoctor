<script setup lang="ts">
import { useRegistrationStore } from '@/stores/auth/registration'

const store = useRegistrationStore()
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
    <div class="form__gender gender">
      <p class="form__title">Пол</p>
      <div class="gender__content">
        <label class="form__radio radio">
          <input
            class="radio__input"
            type="radio"
            name="option"
            value="man"
            v-model="store.gender"
          />
          <span class="radio-btn radio__btn"></span>
          Мужской
        </label>
        <label class="form__radio radio">
          <input
            class="radio__input"
            type="radio"
            name="option"
            value="woman"
            v-model="store.gender"
          />
          <span class="radio-btn radio__btn"></span>
          Женский
        </label>
      </div>
    </div>
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

.radio {
  display: inline-block;
  position: relative;
  padding-left: 35px;

  @media (min-width: 600px) {
    cursor: pointer;
  }
  font-size: 16px;

  &__input {
    position: absolute;
    opacity: 0;
    @media (min-width: 600px) {
      cursor: pointer;
    }

    &:checked ~ .radio__btn {
      background-color: var(--gd-c-green);
    }

    &:checked ~ .radio__btn::after {
      display: block;
    }
  }

  &__btn {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 50%;

    &::after {
      content: '';
      position: absolute;
      display: none;

      top: 6px;
      left: 6px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
    }
  }
}

.gender {
  &__content {
    display: flex;
    gap: 20px;
  }
}
</style>
