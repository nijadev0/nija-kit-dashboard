<script setup lang="ts">
import { ref } from 'vue';
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';

const plan = ref('startup');

const { label } = defineProps<{label?: string;}>()
</script>

<template>
  <RadioGroup class="radio" v-model="plan">
    <RadioGroupOption
      v-slot="{ checked }"
      value="startup"
      class="radio_option"
    >
      <div
        class="radio_box"
        :class="checked ? 'border-netral-60' : 'border-primary-border'"
      >
        <div
          class="radio_box-active"
          :class="checked ? 'opacity-100' : 'opacity-0'"
        ></div>
      </div>
      <span>{{ label }}</span>
    </RadioGroupOption>
  </RadioGroup>
</template>

<style lang="postcss">
.radio {
  @apply flex items-center gap-6;

  &_option {
    @apply flex items-center gap-2 cursor-pointer outline-none;
  }

  &_box {
    @apply w-5 h-5 border rounded-full p-1 transition-all duration-300 ease-in-out outline-none;
  
    &-active {
      @apply outline-none w-full h-full bg-primary-main rounded-full transition-all duration-300 ease-in-out;
    }
  }
}
</style>
