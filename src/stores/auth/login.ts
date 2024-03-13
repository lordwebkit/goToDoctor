import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const getAuthTokenUrl = 'https://idykvrachy.ru/api/user/getAuthToken'

export const useLoginStore = defineStore('login', () => {
  const login = reactive({
    email: '',
    password: ''
  })

  const loginError = ref('')

  const availed = computed(() => {
    if (login.password && login.email && !loginError.value) {
      return true
    }

    return false
  })

  const reqGetAuthToken = async () => {
    const formData = new FormData()

    formData.append('email', login.email)
    formData.append('password', login.password)
    try {
      const { data } = await axios.post(getAuthTokenUrl, formData)
      if (data.success === false) {
        loginError.value = data.error
      }
    } catch (e) {
      console.error(e)
    }
  }

  return {
    login,
    availed,
    loginError,
    reqGetAuthToken
  }
})
