<script setup lang="ts">
const { active } = defineProps<{ active: boolean }>()
</script>
<template>
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="active"
  >
    <path
      d="M21.8699 12.4008V17.3798C21.8699 20.1398 19.6299 22.3798 16.8699 22.3798H8.12988C5.36988 22.3798 3.12988 20.1398 3.12988 17.3798V12.3996C3.88988 13.2196 4.82989 13.4997 5.99989 13.4997C7.25989 13.4997 8.73989 13.2097 9.49989 12.1997C10.1799 13.2097 11.2099 13.4997 12.4999 13.4997C13.7799 13.4997 14.8099 13.1997 15.4999 12.1997C16.2699 13.1897 17.7599 13.4997 18.9999 13.4997C20.2099 13.4997 21.1199 13.2708 21.8699 12.4008Z"
      fill="var(--color-btn-primary)"
    />
    <path
      d="M22.8598 8.27L22.5698 5.5C22.1498 2.48 20.7798 1.25 17.8498 1.25H14.0098L14.7498 8.75C14.7598 8.85 14.7698 8.96 14.7698 9.15C14.8298 9.67 14.9898 10.15 15.2298 10.58C15.9498 11.9 17.3498 12.75 18.8098 12.75C20.1398 12.75 21.3398 12.16 22.0898 11.12C22.6898 10.32 22.9598 9.31 22.8598 8.27Z"
      fill="var(--color-btn-primary)"
    />
    <path
      d="M7.08965 1.25C4.14965 1.25 2.78965 2.48 2.35965 5.53L2.08965 8.28C1.98965 9.35 2.27965 10.39 2.90965 11.2C3.66965 12.19 4.83965 12.75 6.13965 12.75C7.59965 12.75 8.99965 11.9 9.70965 10.6C9.96965 10.15 10.1396 9.63 10.1896 9.09L10.9697 1.26H7.08965V1.25Z"
      fill="var(--color-btn-primary)"
    />
    <path
      d="M15.4903 1.25H9.49034L8.75034 8.61C8.69034 9.29 8.79034 9.93 9.04034 10.51C9.62034 11.87 10.9803 12.75 12.5003 12.75C14.0403 12.75 15.3703 11.89 15.9703 10.52C16.1503 10.09 16.2603 9.59 16.2703 9.08V8.89L15.4903 1.25Z"
      fill="white"
    />
    <path
      d="M11.8501 16.6602C10.5801 16.7902 9.62012 17.8702 9.62012 19.1502V22.3802H15.3701V19.5002C15.3801 17.4102 14.1501 16.4202 11.8501 16.6602Z"
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
      d="M3.00977 11.2202V15.7102C3.00977 20.2002 4.80977 22.0002 9.29977 22.0002H14.6898C19.1798 22.0002 20.9798 20.2002 20.9798 15.7102V11.2202"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.0005 12C13.8305 12 15.1805 10.51 15.0005 8.68L14.3405 2H9.67048L9.00048 8.68C8.82048 10.51 10.1705 12 12.0005 12Z"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.3098 12C20.3298 12 21.8098 10.36 21.6098 8.35L21.3298 5.6C20.9698 3 19.9698 2 17.3498 2H14.2998L14.9998 9.01C15.1698 10.66 16.6598 12 18.3098 12Z"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.64037 12C7.29037 12 8.78037 10.66 8.94037 9.01L9.16037 6.8L9.64037 2H6.59037C3.97037 2 2.97037 3 2.61037 5.6L2.34037 8.35C2.14037 10.36 3.62037 12 5.64037 12Z"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<style lang="scss" scoped></style>
