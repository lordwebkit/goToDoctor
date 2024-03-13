import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', () => {
  const email = ref()
  const password = ref()

  const availed = computed(() => {
    if (password.value && email.value) {
      return true
    }

    return false
  })

  const sendLoginData = () => {
    
  }

  return {
    email,
    password,
    availed
  }
})
