<script setup lang="ts">
import GHeader from '@/components/Global/GHeader.vue'
import IconLogo from '@/assets/icons/IconLogo.vue'
import RForm from '@/components/Auth/Register/RForm.vue'
import RTabs from '@/components/Auth/Register/RTabs.vue'
import RPatientFields from '@/components/Auth/Register/RPatientFields.vue'
import RDoctorFields from '@/components/Auth/Register/RDoctorFields.vue'
import { useRegistrationStore } from '@/stores/auth/registration'

const store = useRegistrationStore()
</script>
<template>
  <div class="register">
    <div class="register__inner container">
      <GHeader :title="'Регистрация'" />
      <div class="register__logo">
        <IconLogo class="register__icon" />
      </div>
      <RForm />
      <div class="register__additional">
        <RTabs />
        <RPatientFields v-if="store.activeTab === 'patient'" />
        <RDoctorFields v-if="store.activeTab === 'doctor'" />
      </div>
      <button
        class="register__send"
        :class="{ 'register__send--avail': store.availed }"
        :disabled="!store.availed"
        @click="store.sendProfile"
      >
        Зарегистрироваться
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.register {
  padding-bottom: 20px;

  &__logo {
    display: flex;
    justify-content: center;
    margin: 15px 0;
  }

  &__icon {
    max-width: 500px;
  }

  &__additional {
    margin-top: 20px;
  }

  &__send {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 60px;
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 600;
    border-radius: 6px;
    border: none;
    padding: 12px;
    color: gray;
    background-color: var(--color-btn-border);

    @media (min-width: 600px) {
      cursor: pointer;
    }

    &--avail {
      background-color: var(--color-btn-primary);
      color: var(--gd-c-white);
    }
  }
}
</style>
