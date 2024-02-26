<script setup lang="ts">
import OBanner from '@/components/Auth/Onboarding/OBanner.vue'
import type { RouterLink } from 'vue-router'
</script>
<template>
  <div class="onboarding">
    <div class="container onboarding__inner">
      <div class="onboarding__banner">
        <OBanner />
      </div>
      <div class="onboarding__nav nav">
        <router-link to="/register" class="nav__link nav__signup">
          Зарегистрироваться!
        </router-link>
        <router-link to="/login" class="nav__link nav__login">У меня есть аккаунт</router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.onboarding {
  &__inner {
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 65px;
    padding-top: 8px;
  }

  &__banner {
    width: 550px;
    margin: 0 auto;

    @media (max-width: 550px) {
      width: 100%;
    }
  }
}

.nav {
  display: flex;
  flex-direction: column;
  width: 550px;
  gap: 10px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;

  @media (max-width: 550px) {
    width: 100%;
  }

  &__link {
    font-weight: 600;
    background-color: var(--color-btn);
    border: 1px solid var(--color-btn-border);
    border-radius: 6px;
    padding: 12px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    color: var(--color-text);
    text-decoration: none;
  }

  &__signup {
    background-color: var(--color-btn-primary);
    border: 1px solid var(--color-btn-primary);
    color: var(--color-btn-primary-text);
  }
}
</style>
