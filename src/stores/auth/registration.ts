import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useRegistrationStore = defineStore('registration', () => {
  const lastName = ref()
  const name = ref()
  const secondName = ref()
  const phone = ref()
  const email = ref()
  const password = ref()
  const passwordErr = ref()
  const rePassword = ref()
  const activeTab = ref('patient')
  const birthday = ref()
  const gender = ref()
  const specialization = ref()
  const clinic = ref()

  const availed = computed(() => {
    const fullName = lastName.value && name.value && secondName.value
    const fullPassword = password.value && rePassword.value
    const fullContact = email.value && phone.value
    const fullActive =
      activeTab.value === 'patient'
        ? birthday.value && gender.value
        : specialization.value && clinic.value

    const requiredField = fullName && fullPassword && fullActive && fullContact
    const error = !passwordErr.value

    if (requiredField && error) {
      return true
    }

    return false
  })

  const checkPassword = () => {
    if (password.value !== rePassword.value) {
      passwordErr.value = 'Пароли не совпадают'
    }
  }

  const sendProfile = async () => {
    checkPassword()
  }

  return {
    lastName,
    name,
    secondName,
    phone,
    email,
    password,
    passwordErr,
    rePassword,
    birthday,
    gender,
    specialization,
    clinic,
    activeTab,
    availed,
    sendProfile
  }
})
