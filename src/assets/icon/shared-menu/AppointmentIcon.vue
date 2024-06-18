<template>
  <span>
    <svg width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M33.9049 1.18896H11.7192C8.99637 1.18896 6.78906 3.24603 6.78906 5.78356V35.6484C6.78906 38.1859 8.99637 40.243 11.7192 40.243H33.9049C36.6278 40.243 38.8351 38.1859 38.8351 35.6484V5.78356C38.8351 3.24603 36.6278 1.18896 33.9049 1.18896Z"
        :stroke="active ? '#00B9C2' : '#A3A3A3'"
        stroke-width="2"
      />
      <path
        d="M28.9752 14.9725V10.3779M1.85938 12.6752H11.7197M1.85938 21.8644H11.7197M1.85938 31.0536H11.7197"
        :stroke="active ? '#00B9C2' : '#A3A3A3'"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  </span>
</template>
<script setup>
defineProps(['active'])
</script>
<style lang="scss" scoped></style>
