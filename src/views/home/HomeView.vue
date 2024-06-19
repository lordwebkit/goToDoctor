<template>
  <main class="app-wrapper pt-[100px]">
    <div class="flex items-center justify-between px-5 mb-3">
      <div class="flex items-center gap-2">
        <img
          class="shrink-0"
          src="../../assets/icon/user.png"
          width="40"
          height="40"
          alt="Иконка ребенка"
        />
        <p class="font-medium text-sm">Здравствуйте, Иван Иванов</p>
      </div>
      <span>
        <img
          src="../../assets/icon/home/notification.svg"
          width="29"
          height="29"
          alt="Иконка уведомлений"
        />
      </span>
    </div>
    <div class="">
      <p class="text-cyan-900 font-bold mb-2 px-5">Предложения наших партнеров</p>
      <ul class="flex overflow-auto px-5 pb-2 gap-3">
        <li class="pl-8 pr-3 py-4 relative bg-gradient-to-r from-cyan-700 to-[#00585C] rounded-xl">
          <div class="flex w-[75vw] gap-3 text-white">
            <div class="flex flex-col flex-1 items-start">
              <h3 class="font-medium text-lg mb-2">Акции</h3>
              <p class="text-xs mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, s</p>
              <button class="bg-white text-cyan-700 px-6 py-1 text-xs font-medium rounded-lg">
                Перейти
              </button>
            </div>
            <div class="flex justify-center items-center w-20">
              <img
                class=""
                src="../../assets/image/home/offer.png"
                alt="Мальчик с смарфоном"
                width="87"
                height="87"
              />
            </div>
          </div>
        </li>
        <li class="pl-8 pr-3 py-4 relative bg-gradient-to-r from-cyan-700 to-[#00585C] rounded-xl">
          <div class="flex w-[75vw] gap-3 text-white">
            <div class="flex flex-col flex-1 items-start">
              <h3 class="font-medium text-lg mb-2">Акции</h3>
              <p class="text-xs mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, s</p>
              <button class="bg-white text-cyan-700 px-6 py-1 text-xs font-medium rounded-lg">
                Перейти
              </button>
            </div>
            <div class="flex justify-center items-center w-20">
              <img
                class=""
                src="../../assets/image/home/offer.png"
                alt="Мальчик с смарфоном"
                width="87"
                height="87"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>
<script setup></script>
