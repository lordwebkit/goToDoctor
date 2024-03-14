<script setup lang="ts">
const { active } = defineProps<{ active: boolean }>()
</script>
<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="active"
  >
    <path
      d="M20.0402 6.82018L14.2802 2.79018C12.7102 1.69018 10.3002 1.75018 8.79023 2.92018L3.78023 6.83018C2.78023 7.61018 1.99023 9.21018 1.99023 10.4702V17.3702C1.99023 19.9202 4.06023 22.0002 6.61023 22.0002H17.3902C19.9402 22.0002 22.0102 19.9302 22.0102 17.3802V10.6002C22.0102 9.25018 21.1402 7.59018 20.0402 6.82018Z"
      fill="var(--color-btn-primary)"
    />
    <path
      d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"
      fill="white"
    />
  </svg>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-else
  >
    <path
      d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 17.99V14.99"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<style lang="scss" scoped></style>
