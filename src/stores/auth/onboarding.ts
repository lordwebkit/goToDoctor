import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useOnboardingStore = defineStore('onboarding', () => {
  const banners = ref()
  async function fetchBanners() {
    try {
      setTimeout(() => {
        const response = [
          {
            img: 'time',
            title: 'Больше никаких пропусков приема лекарств',
            description:
              'Получайте уведомления всякий раз, когда вам нужно будет принимать лекарства.'
          },
          {
            img: 'delivery',
            title: 'Получите свои лекарства в несколько кликов',
            description:
              'Независимо от того, приобретаете ли вы бесплатное лекарство или выписанное по рецепту, мы доставим его вам.'
          },
          {
            img: 'medicine',
            title: 'Не беспокойтесь о злоупотреблении лекарствами',
            description:
              'Бесплатный доступ к различным статьям, связанным с лекарствами, написанным экспертами'
          },
          {
            img: 'user',
            title: 'Одно приложение, несколько пользователей',
            description: 'Помогайте следить за тем, как ваша семья принимает лекарства'
          }
        ]
        banners.value = response
      }, 600)
    } catch (e) {
      console.error(e)
    }
  }

  return { banners, fetchBanners }
})
