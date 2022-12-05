<script setup lang="ts">
import { ref } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption
} from '@headlessui/vue'

import CaretDownIcon from '$assets/icons/CaretDown.vue'

interface Data {
  id: number
  name: string
  unavailable: boolean
}

const { data } = defineProps<{ data: Data[] }>()

const dataModel = ref(data[0])
</script>

<template>
  <!-- Default - Select -->
  <Listbox v-model="dataModel">
    <div class="relative w-full">
      <ListboxButton class="select_button">
        <span class="select_button-text">
          {{ dataModel.name }}
        </span>

        <CaretDownIcon class="w-5 h-5 stroke-netral-100 stroke-2" />
      </ListboxButton>

      <ListboxOptions class="select_wrapper">
        <ListboxOption
          v-for="item in data"
          :key="item.id"
          :value="item"
          :disabled="item.id === 1"
          class="select-option"
        >
          {{ item.name }}
        </ListboxOption>
      </ListboxOptions>
    </div>
  </Listbox>
</template>

<style lang="postcss">
.select {
  @apply flex items-center justify-between p-3.5 border border-netral-30 outline-none rounded-lg focus:border focus:border-primary-main w-full;

  &_button {
    @apply flex items-center justify-between p-3.5 border border-netral-30 w-full rounded-[10px];
  }

  &_wrapper {
    @apply absolute top-14 bg-white left-0 z-10 w-full border-x border-b rounded-br-[10px] rounded-bl-[10px] border-netral-30;
  }

  &-option {
    @apply p-3.5 cursor-pointer whitespace-nowrap ui-active:bg-netral-20/50 ui-active:text-netral-90 rounded-[10px] ui-not-active:bg-white ui-not-active:text-black ui-disabled:cursor-default flex items-center justify-between;
  }
}
</style>
