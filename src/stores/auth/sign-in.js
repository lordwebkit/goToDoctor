import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSignInStore = defineStore('signIn', () => {
  const number = ref('')
  const password = ref('')

  return { number, password }
})
