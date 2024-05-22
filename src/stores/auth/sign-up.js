import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSignUpStore = defineStore('signUp', () => {
  const accountType = ref('patient')
  const name = ref('')
  const email = ref('')
  const number = ref('')

  return { accountType, name, email, number }
})
