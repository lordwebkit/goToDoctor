import { computed, reactive, ref } from 'vue'
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

interface Registration {
  lastName: string
  name: string
  secondName: string
  phone: string
  email: string
  password: string
  passwordErr: string
  rePassword: string
  activeTab: RegistrationTab
  birthday: string
  citiesList: City[] | null
  city: string
  specialization: string
  clinicsList: Clinic[] | null
  clinic: string
}

export const useRegistrationStore = defineStore('registration', () => {
  const registration = reactive<Registration>({
    lastName: '',
    name: '',
    secondName: '',
    phone: '',
    email: '',
    password: '',
    passwordErr: '',
    rePassword: '',
    activeTab: RegistrationTab.Patient,
    birthday: '',
    citiesList: null,
    city: '',
    specialization: '',
    clinicsList: null,
    clinic: ''
  })

  const registrationError = ref('')

  const canAddNewUser = computed<boolean>(() => {
    const fullName = Boolean(registration.lastName && registration.name && registration.secondName)
    const fullPassword = Boolean(registration.password && registration.rePassword)
    const fullContact = Boolean(registration.email && registration.phone)

    let fullActive: boolean
    if (registration.activeTab === RegistrationTab.Patient) {
      fullActive = Boolean(registration.birthday && registration.city)
    } else {
      fullActive = Boolean(registration.specialization && registration.clinic)
    }

    const requiredField = fullName && fullPassword && fullContact && fullActive
    const error = !registration.passwordErr && !registrationError.value

    if (requiredField && error) {
      return true
    }

    return false
  })

  const reqGetAllCities = async (): Promise<void> => {
    try {
      const { data } = await axios.get(getAllCitiesUrl)
      registration.citiesList = data
      registration.city = data[0].id
    } catch (e) {
      console.error(e)
    }
  }

  const reqGetAllClinics = async (): Promise<void> => {
    try {
      const { data } = await axios.get(getAllClinicsUrl)
      registration.clinicsList = data
      registration.clinic = data[0].id
    } catch (e) {
      console.error(e)
    }
  }

  const reqAddNewUser = async (): Promise<void> => {
    const formData = new FormData()

    formData.append('email', registration.email)
    formData.append('name', registration.name)
    formData.append('last_name', registration.lastName)
    formData.append('phone', registration.phone)
    formData.append('password', registration.password)

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
    if (registration.password !== registration.rePassword) {
      registration.passwordErr = 'Пароли не совпадают'
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
    registration,
    canAddNewUser,
    registrationError,
    reqGetAllCities,
    reqGetAllClinics,
    addNewUser
  }
})
