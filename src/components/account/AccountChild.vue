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
        <div class="flex justify-between px-2 font-semibold text-lg text-gray-400">
          <button
            :class="{ 'text-cyan-700': selectedMember === 'profile' }"
            @click="$emit('change', 'profile')"
          >
            Профиль
          </button>
          <button
            :class="{ 'text-cyan-700': selectedMember === 'child' }"
            @click="$emit('change', 'child')"
          >
            Дети
          </button>
        </div>
        <input class="px-4 h-12 bg-cyan-100 rounded-lg" type="text" placeholder="Иванов" />
        <input class="px-4 h-12 bg-cyan-100 rounded-lg" type="text" placeholder="Иван" />
        <input class="px-4 h-12 bg-cyan-100 rounded-lg" type="text" placeholder="Иванович" />
        <input class="px-4 h-12 bg-cyan-100 rounded-lg" type="text" placeholder="ivanov@mail.ru" />
        <input
          class="px-4 h-12 bg-cyan-100 rounded-lg"
          type="text"
          placeholder="+7(903)-465-37-26"
        />
        <input class="px-4 h-12 bg-cyan-100 rounded-lg" type="text" placeholder="Дата рождения" />
        <p class="font-semibold">Пол</p>
        <div class="flex items-center gap-2">
          <label class="flex items-center gap-1">
            <input type="checkbox" />
            <span>Жен.</span>
          </label>
          <label class="flex items-center gap-1">
            <input type="checkbox" />
            <span>Муж.</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps(['selectedMember'])

</script>
<style lang="scss" scoped>
.header {
  background: url('./src/assets/image/main_header_bg.png') no-repeat;
}
</style>
