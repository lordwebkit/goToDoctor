<!-- src/components/EmblaCarousel.vue -->
<template>
  <div class="embla">
    <div class="embla__viewport" ref="viewport">
      <div class="embla__container">
        <div class="embla__slide" v-for="slide in slides" :key="slide.id">
          <slot :slide="slide">{{ slide.content }}</slot>
        </div>
      </div>
    </div>
    <div class="embla__dots">
      <button
        v-for="index in slides.length"
        :key="index"
        :class="{ 'is-selected': selectedIndex === index - 1 }"
        @click="scrollTo(index - 1)"
        class="embla__dot"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, toRefs } from 'vue';
import EmblaCarousel from 'embla-carousel';

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
});

const { slides } = toRefs(props);
const viewport = ref(null);
const selectedIndex = ref(0);
let embla = null;

const scrollTo = (index) => {
  if (embla) embla.scrollTo(index);
};

const updateSelectedIndex = () => {
  if (embla) selectedIndex.value = embla.selectedScrollSnap();
};

onMounted(() => {
  embla = EmblaCarousel(viewport.value, { loop: true });
  embla.on('select', updateSelectedIndex);
  updateSelectedIndex();
});

onUnmounted(() => {
  if (embla) embla.destroy();
});
</script>

<style>
.embla {
  overflow: hidden;
  position: relative;
}
.embla__viewport {
  overflow: hidden;
  width: 100%;
}
.embla__container {
  display: flex;
}
.embla__slide {
  position: relative;
  flex: 0 0 100%;
}
.embla__dots {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
.embla__dot {
  width: 7px;
  height: 7px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 2px;
  border: none;
  cursor: pointer;
}
.embla__dot.is-selected {
  background-color: #00B9C2;
}
</style>
