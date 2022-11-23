<script setup lang="ts">
import { ref } from 'vue';
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue';

const plan = ref('startup');
</script>

<template>
  <RadioGroup class="flex items-center gap-6" v-model="plan">
    <RadioGroupOption
      v-slot="{ checked }"
      value="startup"
      class="flex items-center gap-2 cursor-pointer outline-none"
    >
      <div
        class="w-5 h-5 border rounded-full p-1 transition-all duration-300 ease-in-out outline-none"
        :class="checked ? 'border-netral-60' : 'border-primary-border'"
      >
        <div
          class="outline-none w-full h-full bg-primary-main rounded-full transition-all duration-300 ease-in-out"
          :class="checked ? 'opacity-100' : 'opacity-0'"
        ></div>
      </div>
      <span>Startup</span>
    </RadioGroupOption>

    <RadioGroupOption
      v-slot="{ checked }"
      value="business"
      class="flex items-center gap-2 cursor-pointer outline-none"
    >
      <div
        class="w-5 h-5 border rounded-full p-1 transition-all duration-300 ease-in-out outline-none"
        :class="checked ? 'border-netral-60' : 'border-primary-border'"
      >
        <div
          class="outline-none w-full h-full bg-primary-main rounded-full transition-all duration-300 ease-in-out"
          :class="checked ? 'opacity-100' : 'opacity-0'"
        ></div>
      </div>
      <span>Business</span>
    </RadioGroupOption>
  </RadioGroup>
</template>
