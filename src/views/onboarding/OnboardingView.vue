<template>
  <div class="header-padding px-5">
    <button
      class="w-36 h-8 bg-cyan-600 rounded-md text-white flex items-center justify-between p-1.5 cursor-pointer"
    >
      <span class="ml-3">Регион</span>
      <IconExpandRight class="size-5" />
    </button>
    <OnboardingSlider />
  </div>
</template>
<script setup>
import IconExpandRight from '@/assets/icon/expand_right.vue'
import OnboardingSlider from '@/components/onboarding/OnboardingSlider.vue'
</script>
<style lang="scss" scoped></style>
