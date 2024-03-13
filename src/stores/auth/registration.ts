import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { RegistrationTab } from '@/enums/registrationTab'
import axios from 'axios'

const addNewUserUrl = 'https://idykvrachy.ru/api/user/addNewUser'
const getAllCitiesUrl = 'https://idykvrachy.ru/api/service/getAllCities'
const getAllClinicsUrl = 'https://idykvrachy.ru/api/service/getAllClinics'

interface City {
  id: string
  name_ru: string
  type_code: string
}
interface Clinic {
  id: string
  name: string
}

export const useRegistrationStore = defineStore('registration', () => {
  const lastName = ref('')
  const name = ref('')
  const secondName = ref('')
  const phone = ref('')
  const email = ref('')
  const password = ref('')
  const passwordErr = ref('')
  const rePassword = ref('')

  const activeTab = ref(RegistrationTab.Patient)

  const birthday = ref('')
  const citiesList = ref<City[] | undefined>()
  const city = ref('')

  const specialization = ref()
  const clinicsList = ref<Clinic[] | undefined>()
  const clinic = ref('')

  const registrationError = ref('')

  const canAddNewUser = computed<boolean>(() => {
    const fullName = Boolean(lastName.value && name.value && secondName.value)
    const fullPassword = Boolean(password.value && rePassword.value)
    const fullContact = Boolean(email.value && phone.value)

    let fullActive: boolean
    if (activeTab.value === RegistrationTab.Patient) {
      fullActive = Boolean(birthday.value && city.value)
    } else {
      fullActive = Boolean(specialization.value && clinic.value)
    }

    const requiredField = fullName && fullPassword && fullContact && fullActive
    const error = !passwordErr.value && !registrationError.value

    if (requiredField && error) {
      return true
    }

    return false
  })

  const reqGetAllCities = async (): Promise<void> => {
    try {
      const { data } = await axios.get(getAllCitiesUrl)
      citiesList.value = data
      city.value = data[0].id
    } catch (e) {
      console.error(e)
    }
  }

  const reqGetAllClinics = async (): Promise<void> => {
    try {
      const { data } = await axios.get(getAllClinicsUrl)
      clinicsList.value = data
      clinic.value = data[0].id
    } catch (e) {
      console.error(e)
    }
  }

  const reqAddNewUser = async (): Promise<void> => {
    const formData = new FormData()

    formData.append('email', email.value)
    formData.append('name', name.value)
    formData.append('last_name', lastName.value)
    formData.append('phone', phone.value)
    formData.append('password', password.value)

    try {
      const { data } = await axios.post(addNewUserUrl, formData)
      if (data.success === false) {
        registrationError.value = data.error
      }
    } catch (e) {
      console.error(e)
    }
  }

  const checkForm = (): boolean => {
    if (password.value !== rePassword.value) {
      passwordErr.value = 'Пароли не совпадают'
      return false
    }

    return true
  }

  const addNewUser = async () => {
    if (checkForm()) {
      const response = await reqAddNewUser()
      console.log(response)
    }
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
    specialization,
    activeTab,
    canAddNewUser,
    citiesList,
    city,
    clinicsList,
    clinic,
    registrationError,
    reqGetAllCities,
    reqGetAllClinics,
    addNewUser
  }
})
