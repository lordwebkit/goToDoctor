<script setup lang="ts">
import { defineEmits } from 'vue'

interface Item {
  id: string
  name?: string
  name_ru?: string
  type_code?: string
}

const { list, selected } = defineProps<{ list: Item[] | null; selected: string }>()
const emit = defineEmits(['select'])

const handleSelect = (e: Event) => {
  emit('select', (e.target as HTMLSelectElement).value)
}
</script>
<template>
  <label class="form__label">
    <select class="form__select" @change="handleSelect">
      <option v-for="item in list" :value="item.id" :key="item.id" :selected="item.id === selected">
        {{ item.name_ru ?? item.name }}
      </option>
    </select>
  </label>
</template>
<style lang="scss" scoped>
.form {
  &__select {
    display: block;
    font-size: 16px;
    font-family: 'Inter';
    line-height: 1.3;
    padding: 0.6em 1.4em 0.5em 0.8em;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #e6e6e6;
    border-radius: 6px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
    background-repeat: no-repeat, repeat;
    background-position:
      right 0.7em top 50%,
      0 0;
    background-size:
      0.65em auto,
      100%;

    &::-ms-expand {
      display: none;
    }

    &:hover {
      border-color: #888;
    }

    &:focus {
      border-color: #aaa;
      box-shadow: 0 0 1px 2px #000;
      box-shadow: 0 0 0 2px -moz-mac-focusring;
      color: #222;
      outline: none;
    }

    & option {
      font-weight: normal;
    }
  }
}

*[dir='rtl'] .select-css,
:root:lang(ar) .select-css,
:root:lang(iw) .select-css {
  background-position:
    left 0.7em top 50%,
    0 0;
  padding: 0.6em 0.8em 0.5em 1.4em;
}
</style>
