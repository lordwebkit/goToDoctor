<script setup lang="ts">
const props = defineProps(['isClose'])
</script>
<template>
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.isClose"
  >
    <path
      d="M12.1083 8.00592L7.89166 12.2226C7.35 11.6809 7.01666 10.9393 7.01666 10.1143C7.01666 8.46425 8.35 7.13092 10 7.13092C10.825 7.13092 11.5667 7.46425 12.1083 8.00592Z"
      stroke="#999999"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.85 4.9226C13.3917 3.8226 11.725 3.2226 9.99999 3.2226C7.05832 3.2226 4.31666 4.95593 2.40833 7.95593C1.65833 9.13093 1.65833 11.1059 2.40833 12.2809C3.06666 13.3143 3.83332 14.2059 4.66666 14.9226"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.01666 16.3893C7.96666 16.7893 8.975 17.0059 10 17.0059C12.9417 17.0059 15.6833 15.2726 17.5917 12.2726C18.3417 11.0976 18.3417 9.12259 17.5917 7.94759C17.3167 7.51426 17.0167 7.10593 16.7083 6.7226"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.925 10.6976C12.7083 11.8726 11.75 12.8309 10.575 13.0476"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.89166 12.2226L1.66666 18.4476"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.3333 1.78093L12.1083 8.00593"
      stroke="#666666"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-else
  >
    <path class="st0" d="M7.1,11.1C6.9,10.3,7,9.5,7.4,8.8c0.8-1.4,2.6-1.9,4.1-1.1" />
    <path class="st0" d="M13,9.4c0.4,1.6-0.5,3.2-2.1,3.7c-0.8,0.2-1.6,0.1-2.3-0.3" />
    <path
      class="st0"
      d="M14.9,4.9c-1.5-1.1-3.1-1.7-4.9-1.7C7.1,3.2,4.3,5,2.4,8c-0.8,1.2-0.8,3.1,0,4.3c0.7,1,1.4,1.9,2.3,2.6"
    />
    <path
      class="st0"
      d="M7,16.4C8,16.8,9,17,10,17c2.9,0,5.7-1.7,7.6-4.7c0.8-1.2,0.8-3.2,0-4.3c-0.3-0.4-0.6-0.8-0.9-1.2"
    />
    <path class="st0" d="M3,16.9" />
    <path class="st0" d="M12.1,8" />
  </svg>
</template>
<style type="text/css" scoped>
.st0 {
  fill: none;
  stroke: #666666;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
