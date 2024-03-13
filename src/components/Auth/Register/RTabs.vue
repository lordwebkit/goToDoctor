<script lang="ts" setup>
import { RegistrationTab } from '@/enums/registrationTab'
import { useRegistrationStore } from '@/stores/auth/registration'

const store = useRegistrationStore()
</script>
<template>
  <div class="register__tabs tabs">
    <button
      class="tabs__btn tabs__patient"
      :class="{ 'tabs__btn--active': store.registration.activeTab === RegistrationTab.Patient }"
      @click="() => (store.registration.activeTab = RegistrationTab.Patient)"
    >
      Пациент
    </button>
    <button
      class="tabs__btn tabs__doctor"
      :class="{ 'tabs__btn--active': store.registration.activeTab === RegistrationTab.Doctor }"
      @click="() => (store.registration.activeTab = RegistrationTab.Doctor)"
    >
      Врач
    </button>
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  display: flex;
  margin-top: 12px;
  margin-bottom: 12px;

  &__btn {
    flex: 1;
    display: flex;
    justify-content: center;
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-bottom: 2px solid gray;
    background-color: transparent;
    padding-top: 12px;
    padding-bottom: 12px;
    transition: all 0.2s ease-out;
    cursor: pointer;

    &--active {
      border-bottom: 2px solid var(--gd-c-green);
      color: var(--gd-c-green);
    }
  }
}
</style>
