<script setup lang="ts">
import { ref } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption
} from '@headlessui/vue'

import Tag from '$components/atoms/Tag.vue'
import CaretDownIcon from '$assets/icons/CaretDown.vue'

interface Data {
  id?: number
  name?: string
  color?: string
  unavailable?: boolean
}
interface Select {
  isColor?: boolean
  data: Data[]
}

const { data } = defineProps<Select>()

const dataModel = ref(data[0])
</script>

<template>
  <!-- Default - Select -->
  <Listbox v-model="dataModel">
    <div class="relative w-full">
      <ListboxButton class="select_button">
        <div class="select_button-text relative">
          <Tag
            v-if="isColor"
            :active="isColor"
            :color="dataModel.color"
            :label="dataModel.name"
          />
          <span> {{ dataModel.name }} </span>
        </div>

        <CaretDownIcon class="h-5 w-5 stroke-netral-100 stroke-2" />
      </ListboxButton>

      <ListboxOptions class="select_wrapper">
        <ListboxOption
          v-for="item in data"
          :key="item.id"
          :value="item"
          :disabled="item.id === 1"
          class="select-option relative"
        >
          <Tag :active="isColor" :color="item.color" :label="item.name" />
          <span>
            {{ item.name }}
          </span>
        </ListboxOption>
      </ListboxOptions>
    </div>
  </Listbox>
</template>

<style lang="postcss">
.select {
  @apply relative flex w-full items-center justify-between rounded-lg border border-netral-30 p-3.5 outline-none focus:border focus:border-primary-main;

  &_button {
    @apply flex w-full items-center justify-between rounded-[10px] border border-netral-30 p-3.5;
  }

  &_wrapper {
    @apply absolute top-14 left-0 z-30 w-full rounded-br-[10px] rounded-bl-[10px] border-x border-b border-netral-30 bg-white px-3.5 shadow-lg;
  }

  &-option {
    @apply flex cursor-pointer items-center justify-between whitespace-nowrap rounded-[10px] bg-white p-3.5 ui-active:bg-netral-20/50 ui-active:text-netral-90 ui-not-active:bg-white ui-not-active:text-black ui-disabled:cursor-default;
  }
}
</style>
