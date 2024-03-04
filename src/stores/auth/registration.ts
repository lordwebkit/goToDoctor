import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useRegistrationStore = defineStore('registration', () => {
  const lastName = ref()
  const lastNameErr = ref()
  const name = ref()
  const nameErr = ref()
  const secondName = ref()
  const secondNameErr = ref()
  const email = ref()
  const emailErr = ref()
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
    const fullActive =
      activeTab.value === 'patient'
        ? birthday.value && gender.value
        : specialization.value && clinic.value

    if (fullName && fullPassword && fullActive && email.value) {
      return true
    }

    return false
  })

  const checkForm = () => {
    checkFormEmptyField()
  }

  const checkFormEmptyField = () => {
    let empty = false

    if (!lastName.value.length) {
      lastNameErr.value = 'Обязательное поле'
      empty = true
    }
    if (!name.value.length) {
      nameErr.value = 'Обязательное поле'
      empty = true
    }

    if (!secondName.value.length) {
      secondNameErr.value = 'Обязательное поле'
      empty = true
    }

    if (!email.value.length) {
      emailErr.value = 'Обязательное поле'
      empty = true
    }
    if (!password.value.length) {
      passwordErr.value = 'Обязательное поле'
      empty = true
    }

    if (!rePassword.value.length) {
      lastNameErr.value = 'Обязательное поле'
      empty = true
    }

    if (activeTab.value === 'patient') {
      if (!email.value.length) {
        lastNameErr.value = 'Обязательное поле'
        empty = true
      }
    } else {
    }

    return empty
  }

  return {
    lastName,
    name,
    secondName,
    email,
    password,
    rePassword,
    birthday,
    gender,
    specialization,
    clinic,
    activeTab,
    availed,
    checkForm
  }
})
