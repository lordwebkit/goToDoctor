<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { menuTab } from '@/enums/menuTab'
import IconHome from '@/assets/icons/IconHome.vue'
import IconProfile from '@/assets/icons/IconProfile.vue'
import IconAppointment from '@/assets/icons/IconAppointment.vue'
import IconPrepared from '@/assets/icons/IconPrepared.vue'
import IconLogo from '@/assets/icons/IconLogo.vue'

const route = useRoute()
const activeTab = computed<menuTab | null>(() => {
  if (route.fullPath === '/' && route.name === 'home') {
    return menuTab.Home
  } else if (route.fullPath.includes('/appointment')) {
    return menuTab.Appointment
  } else if (route.fullPath.includes('/preparing')) {
    return menuTab.Appointment
  } else if (route.fullPath.includes('/profile')) {
    return menuTab.Appointment
  }
  return null
})
</script>
<template>
  <div class="menu">
    <div class="menu__inner container">
      <router-link :to="'/'"><IconLogo class="menu__logo" /></router-link>
      <nav class="menu__nav">
        <ul class="menu__list">
          <router-link :to="'/'" class="menu__link">
            <li class="menu__item menu-item">
              <IconHome :active="activeTab === menuTab.Home" />
              <p
                class="menu-item__title"
                :class="{ 'menu-item__title--active': activeTab === menuTab.Home }"
              >
                Главная
              </p>
            </li>
          </router-link>
          <router-link :to="'/'" class="menu__link">
            <li class="menu__item menu-item">
              <IconAppointment :active="activeTab === menuTab.Appointment" />
              <p
                class="menu-item__title"
                :class="{ 'menu-item__title--active': activeTab === menuTab.Appointment }"
              >
                Запись
              </p>
            </li>
          </router-link>
          <router-link :to="'/'" class="menu__link">
            <li class="menu__item menu-item">
              <IconPrepared :active="activeTab === menuTab.Prepared" />
              <p
                class="menu-item__title"
                :class="{ 'menu-item__title--active': activeTab === menuTab.Prepared }"
              >
                Подготовка
              </p>
            </li>
          </router-link>
          <router-link :to="'/'" class="menu__link">
            <li class="menu__item menu-item">
              <IconProfile :active="activeTab === menuTab.Profile" />
              <p
                class="menu-item__title"
                :class="{ 'menu-item__title--active': activeTab === menuTab.Profile }"
              >
                Профиль
              </p>
            </li>
          </router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1;

  @media (max-width: 600px) {
    bottom: 0;
    top: auto;
  }

  &__inner {
    background-color: var(--color-background);
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 410px) {
      padding: 0;
    }
  }

  &__logo {
    width: 100px;

    @media (max-width: 600px) {
      display: none;
    }
  }

  &__list {
    display: flex;
    gap: 15px;

    @media (max-width: 600px) {
      width: 100%;
      justify-content: space-around;
    }

    @media (max-width: 410px) {
      justify-content: space-between;
      gap: 0;
    }
  }

  &__nav {
    @media (max-width: 600px) {
      display: flex;
      width: 100%;
    }
  }

  &__link {
    color: #000;
    text-decoration: none;
  }
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 8px 12px 0;
  }

  &__title {
    &--active {
      color: var(--color-btn-primary);
    }
  }
}
</style>
