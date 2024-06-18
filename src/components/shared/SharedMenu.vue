<template>
  <div class="">
    <nav class="flex justify-around list-none fixed w-full bottom-0 pb-1">
      <li class="flex flex-col justify-center items-center flex-1 gap-1">
        <HomeIcon :active="activeMenuBtn === 'home'" />
        <p>Главная</p>
      </li>
      <li class="flex flex-col justify-center items-center flex-1 gap-1">
        <AppointmentIcon :active="activeMenuBtn === 'appointment'" />
        <p>Запись</p>
      </li>
      <li class="flex flex-col justify-center items-center flex-1 gap-1">
        <PreparationIcon :active="activeMenuBtn === 'preparation'" />
        <p>Подготовка</p>
      </li>
      <li class="flex flex-col justify-center items-center flex-1 gap-1">
        <MedicalCardIcon :active="activeMenuBtn === 'medicalCard'" />
        <p>Медкарта</p>
      </li>
    </nav>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import AppointmentIcon from '../../assets/icon/shared-menu/AppointmentIcon.vue'
import HomeIcon from '../../assets/icon/shared-menu/HomeIcon.vue'
import MedicalCardIcon from '../../assets/icon/shared-menu/MedicalCardIcon.vue'
import PreparationIcon from '../../assets/icon/shared-menu/PreparationIcon.vue'

import { useMenuStore } from '@/stores/menu.js'
const menuStore = useMenuStore()
const { activeMenuBtn } = storeToRefs(menuStore)
</script>
