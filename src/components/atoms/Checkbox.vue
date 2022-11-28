<script setup lang="ts">
import { ref, watch } from 'vue';
import { Switch } from '@headlessui/vue';

import CheckIcon from '$assets/icons/Check.vue';

interface Checkbox {
  text?: string;
}

const enabled = ref(false);
const { text } = defineProps<Checkbox>();
</script>

<template>
  <Switch v-model="enabled" class="checkbox">
    <div class="checkbox-wrapper" :class="enabled ? 'active' : 'default'">
      <CheckIcon class="checkbox-icon" :class="enabled ? 'block' : 'hidden'" />
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
