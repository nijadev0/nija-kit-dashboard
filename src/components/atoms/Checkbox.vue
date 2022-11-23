<script setup lang="ts">
import { ref } from 'vue';
import { Switch } from '@headlessui/vue';

interface Checkbox {
  text?: string;
}

const enabled = ref(false);
const { text } = defineProps<Checkbox>();
</script>

<template>
  <Switch v-model="enabled" class="checkbox">
    <div class="checkbox-wrapper" :class="enabled ? 'active' : 'default'">
      <svg
        class="checkbox-icon"
        :class="enabled ? 'block' : 'hidden'"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.875 5.62537L8.125 14.375L3.75 10.0004"
          stroke="white"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <span class="checkbox-text"> {{ text }} </span>
  </Switch>
</template>

<style lang="postcss">
.checkbox {
  @apply flex items-center gap-2 outline-none;

  &-wrapper {
    @apply relative flex w-5 h-5 items-center gap-2.5 rounded-md border justify-between outline-none;

    &.active {
      @apply bg-primary-main border-primary-border;
    }

    &.default {
      @apply border-netral-60;
    }
  }

  &-icon {
    @apply absolute w-full h-full z-10;
  }

  &-text {
    @apply text-netral-100;
  }
}
</style>
