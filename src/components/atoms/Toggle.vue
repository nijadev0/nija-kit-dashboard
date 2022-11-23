<script setup lang="ts">
import { ref } from 'vue';
import { Switch } from '@headlessui/vue';

const enabled = ref(false);
</script>

<template>
  <Switch
    v-model="enabled"
    :class="
      enabled ? 'bg-primary-main flex-row' : 'bg-netral-40 flex-row-reverse'
    "
    class="relative flex max-h-[32px] max-w-[64px] p-1 items-center gap-2.5 rounded-full justify-between outline-none"
  >
    <svg
      v-if="enabled === true"
      :class="enabled ? 'ml-1' : 'ml-0'"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 4.50031L6.5 11.5L3 8.00031"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <svg
      v-else
      :class="enabled ? 'mr-0' : 'mr-1'"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 3.5L3.5 12.5"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 12.5L3.5 3.5"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <span class="sr-only">Enable notifications</span>
    <span
      :class="enabled ? 'translate-x-0' : 'translate-x-0'"
      class="inline-block h-6 w-6 transform rounded-full bg-white transition"
    />
  </Switch>
</template>
