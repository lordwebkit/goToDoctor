<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import { useOnboardingStore } from '@/stores/auth/onboarding'

const store = useOnboardingStore()

store.fetchBanners()
</script>

<template>
  <swiper
    v-if="store.banners"
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true
    }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }"
    :modules="[Autoplay, Pagination]"
    class="swiper"
  >
    <swiper-slide class="swiper__slide banner" v-for="banner in store.banners" :key="banner">
      <img class="banner__img" :src="`/src/assets/img/onboarding/${banner.img}.svg`" alt="" />
      <p class="banner__title">{{ banner.title }}</p>
      <p class="banner__description">{{ banner.description }}</p>
    </swiper-slide>
  </swiper>
</template>

<style scoped lang="scss">
.swiper {
  width: 100%;
  height: 740px;

  @media (max-width: 485px) {
    height: 690px;
  }
}

.banner {
  text-align: center;

  &__img {
    width: 100%;
  }

  &__title {
    font-size: 20px;
    font-weight: 600;
  }
}
</style>
