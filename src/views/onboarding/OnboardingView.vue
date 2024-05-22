<template>
  <div class="app-wrapper header-padding">
    <!-- <button
      class="w-36 h-8 bg-cyan-600 rounded-md text-white flex items-center justify-between p-1.5 cursor-pointer ml-5 mb-6"
    >
      <span class="ml-3">Регион</span>
      <IconExpandRight class="size-5" />
    </button> -->
    <OnboardingSlider :slides="slides" class="pt-10">
      <template #default="{ slide }">
        <div class="flex flex-col px-5">
          <img :src="slide.image" height="200" class="h-60 mb-4" />
          <div class="bg-cyan-100 py-10 px-6 rounded-xl">
            <h1 class="text-center font-bold mb-3">{{ slide.title }}</h1>
            <ul class="list-disc px-6 space-y-4">
              <li v-for="item in slide.descriptionList" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </template>
    </OnboardingSlider>
    <div class="flex flex-col px-5 mt-12 gap-5">
      <router-link
        to="/signup"
        class="bg-cyan-700 rounded-4xl text-white flex justify-center items-center py-5 font-bold"
      >
        Регистрация
      </router-link>
      <router-link
        class="bg-cyan-700 rounded-4xl text-white flex justify-center items-center py-4 font-bold"
        to="/signin"
      >
        Войти
      </router-link>
    </div>
  </div>
</template>
<script setup>
// import IconExpandRight from '@/assets/icon/expand_right.vue'
import OnboardingSlider from '@/components/onboarding/OnboardingSlider.vue'
import { ref } from 'vue'

const slides = ref([
  {
    id: 1,
    image: './src/assets/image/onboarding/slide-1.svg',
    title: 'С заботой о детях',
    descriptionList: [
      'Обучающий мультфильм “Иду к стоматологу”',
      'Социальные истории посещения стоматолога',
      'Обучающая игра-тренажер похода к врачу'
    ]
  },
  {
    id: 2,
    image: './src/assets/image/onboarding/slide-2.svg',
    title: 'В помощь родителям',
    descriptionList: [
      'Запись на встречи-экскурсии в стоматологию',
      'Чек-лист сформированности навыка похода к врачу',
      'Рекомендации'
    ]
  },
  {
    id: 3,
    image: './src/assets/image/onboarding/slide-3.svg',
    title: 'Ресурсы для врачей',
    descriptionList: [
      'Рекомендации по организации осмотра и лечения',
      'Доступ к подробной информации об индивидуальных особенностях ребенка',
      'Анкета и чек-лист ребенка'
    ]
  }
])
</script>
