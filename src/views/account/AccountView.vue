<template>
  <div>
    <AccountDoctor v-if="userType === 'doctor'" />
    <AccountPatientFamily v-else />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import AccountDoctor from '@/components/account/AccountDoctor.vue'
import AccountPatientFamily from '@/components/account/AccountPatientFamily.vue';

const userType = ref('patient')
</script>
<style lang="scss" scoped></style>
