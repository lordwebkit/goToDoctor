<script setup lang="ts">
import { useRouter } from 'vue-router'
import IconBack from '@/assets/icons/IconBack.vue'

const props = defineProps(['title', 'back'])
const { back = true } = props

const router = useRouter()
</script>
<template>
  <header class="header">
    <div class="header__inner">
      <IconBack @click="() => router.go(-1)" v-if="back" />
      <p class="header__title">{{ props.title }}</p>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header {
  &__inner {
    display: flex;
    align-items: center;
    height: 40px;
  }

  &__title {
    font-size: 20px;
    font-weight: 600;
    flex: 1;
    display: flex;
    justify-content: center;
    padding-right: 24px;

    &--only {
      padding-right: 0;
    }
  }

  &__decor {
    width: 24px;
    height: 24px;
  }
}
</style>
