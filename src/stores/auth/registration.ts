import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRegistrationStore = defineStore('registration', () => {
  const lastname = ref()
  const name = ref()
  const secondname = ref()
  const email = ref()
  const password = ref()
  const repassword = ref()
  const activeTab = ref('patient')
  const birthday = ref()
  const gender = ref()
  const specialization = ref()
  const clinic = ref()

  return {
    lastname,
    name,
    secondname,
    email,
    password,
    repassword,
    birthday,
    gender,
    specialization,
    clinic,
    activeTab
  }
})
