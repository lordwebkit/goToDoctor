<script setup lang="ts"></script>
<template>
  <div class="form__gender gender">
    <p class="form__title">Пол</p>
    <div class="gender__content">
      <label class="form__radio radio">
        <input class="radio__input" type="radio" name="option" value="man" />
        <span class="radio-btn radio__btn"></span>
        Мужской
      </label>
      <label class="form__radio radio">
        <input class="radio__input" type="radio" name="option" value="woman" />
        <span class="radio-btn radio__btn"></span>
        Женский
      </label>
    </div>
  </div>
</template>
<style lang="scss" scoped>
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
</style>
