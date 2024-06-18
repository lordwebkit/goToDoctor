<template>
  <div class="account-doctor flex flex-col">
    <div class="header w-full h-48 z-10 absolute top-0 left-0"></div>
    <div class="pt-24 pb-16 bg-cyan-800 flex-shrink-0 translate-y-9">
      <div class="flex justify-center w-full">
        <label class="flex size-36 bg-white rounded-full">
          <input class="hidden" type="file" accept=".jpg, .jpeg, .png" />
        </label>
      </div>
    </div>
    <div class="flex bg-white flex-grow-0 rounded-4xl p-8 relative">
      <div class="flex flex-col w-full gap-4">
        <input class="px-4 h-12 bg-cyan-100 rounded-lg" type="text" placeholder="Иванов" />
        <input class="px-4 h-12 bg-cyan-100 rounded-lg" type="text" placeholder="Иван" />
        <input class="px-4 h-12 bg-cyan-100 rounded-lg" type="text" placeholder="Иванович" />
        <input class="px-4 h-12 bg-cyan-100 rounded-lg" type="text" placeholder="ivanov@mail.ru" />
        <input
          class="px-4 h-12 bg-cyan-100 rounded-lg"
          type="text"
          placeholder="+7(903)-465-37-26"
        />
        <input
          class="px-4 h-12 bg-cyan-100 rounded-lg"
          type="text"
          placeholder='ГБУ РО "ЦГБ им. Н.А. Семашко"'
        />
        <input class="px-4 h-12 bg-cyan-100 rounded-lg" type="text" placeholder="неврологической" />
        <input class="px-4 h-12 bg-cyan-100 rounded-lg" type="text" placeholder="невролог" />
        <p class="font-semibold">График работы</p>
        <div class="flex gap-5 text-sm text-cyan-700">
          <label
            v-for="(day, index) in daysOfWeek"
            class="px-2 py-1 rounded-md shadow"
            :class="{ 'bg-cyan-700 text-white': workDaysOfWeek.includes(index) }"
            :key="day"
          >
            {{ day }}
            <input class="hidden" type="checkbox" v-model="workDaysOfWeek" :value="index" />
          </label>
        </div>
        <div class="flex justify-around">
          <label class="flex items-center gap-4">
            с
            <input class="px-2 py-1 rounded-md shadow" type="time" v-model="startWorkTime" />
          </label>
          <label class="flex items-center gap-4">
            до
            <input class="px-2 py-1 rounded-md shadow" type="time" v-model="endWorkTime" />
          </label>
        </div>
        <button class="py-4 px-4 border border-cyan-700 rounded-4xl flex items-center mt-2">
          <DocumentSharp class="shrink-0" />
          <p class="font-semibold text-cyan-700">
            Методические рекомендации для врачей-стоматологов
          </p>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import DocumentSharp from '@/assets/icon/document_sharp.vue'
const daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'cб', 'вс']
const workDaysOfWeek = ref([])
const startWorkTime = ref([])
const endWorkTime = ref([])
</script>
<style lang="scss" scoped>
.header {
  background: url('./src/assets/image/main_header_bg.png') no-repeat;
}
</style>
