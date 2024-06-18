import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const activeMenuBtn = ref('home')

  return { activeMenuBtn }
})
