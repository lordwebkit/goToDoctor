<template>
  <div>
    <AccountPatient
      v-if="selectedMember === 'profile'"
      @change="(e) => (selectedMember = e)"
      :selectedMember="selectedMember"
    />
    <AccountChild
      v-else-if="selectedMember === 'child'"
      @change="(e) => (selectedMember = e)"
      :selectedMember="selectedMember"
    />
    <AccountChildren
      v-else-if="selectedMember === 'children'"
      @change="(e) => (selectedMember = e)"
      :selectedMember="selectedMember"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import AccountChild from './AccountChild.vue'
import AccountChildren from './AccountChildren.vue'
import AccountPatient from './AccountPatient.vue'

const selectedMember = ref('children')
</script>
<style lang="scss" scoped></style>
