<template>
  <div class="app-wrapper p-5 pt-44">
    <div class="flex justify-between px-2 font-semibold text-lg text-gray-400">
      <button
        :class="{ 'text-cyan-700': selectedMember === 'profile' }"
        @click="$emit('change', 'profile')"
      >
        Профиль
      </button>
      <button
        :class="{ 'text-cyan-700': selectedMember === 'children' }"
        @click="$emit('change', 'children')"
      >
        Дети
      </button>
    </div>
    <ul class="mt-6 mb-11">
      <li v-for="child in children" :key="child.id" @click="$emit('change', 'child')">
        <div class="bg-cyan-150 flex flex-col gap-3 py-9 px-4 rounded-xl">
          <div class="flex gap-5">
            <img
              class="shrink-0"
              src="../../assets/icon/user.png"
              width="48"
              height="48"
              alt="Иконка ребенка"
            />
            <div class="flex flex-col justify-between">
              <p class="font-semibold text-lg text-cyan-700">{{ child.name }}</p>
              <p class="text-sm">{{ child.birthDay }}</p>
            </div>
          </div>
          <div class="flex justify-between">
            <button
              class="bg-cyan-700 text-white text-sm py-2 px-4 rounded-lg font-medium"
              @click="(e) => e.stopPropagation()"
            >
              удалить
            </button>
            <button
              class="bg-cyan-700 text-white text-sm py-2 px-4 rounded-lg font-medium"
              @click="(e) => e.stopPropagation()"
            >
              редактировать
            </button>
          </div>
        </div>
      </li>
    </ul>
    <button
      class="w-full py-3 font-medium text-cyan-700 border-cyan-700 rounded-full border text-lg"
    >
      Добавить ребенка +
    </button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
defineProps(['selectedMember'])
const children = ref([
  {
    id: 1,
    name: 'Пономаренко Вячеслав',
    birthDay: '25.06.2010'
  }
])
</script>
<style lang="scss" scoped></style>
