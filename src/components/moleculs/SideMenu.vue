<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type {_RouterLinkI} from 'vue-router';

import CaretDownIcon from '$assets/icons/CaretDown.vue';

interface Sidebar {
  variant?: string | 'main' | 'sub';
  expand?: boolean;
  label?: string;
  href?: string;
}

const { variant, expand, href } = defineProps<Sidebar>();
</script>

<template>
  <RouterLink v-if="!expand" active-class="active" :to="`${href}`"
    class="sideMenu"
    :class="{
      'main': variant === 'main',
      'sub': variant === 'sub',
      'active': variant === 'active'
    }"

  >
    <div class="sideMenu_wrapper">
      <!-- Icon -->
      <slot />

      <!-- Label -->
      {{ label }}
    </div>
    
  </RouterLink>

  <button class="sideMenu" 
    :class="{
      'main': variant === 'main',
      'sub': variant === 'sub',
      'active': variant === 'active'
    }"
    v-if="expand"
  >
    <div class="sideMenu_wrapper">
      <slot />
      {{ label }}
    </div>
    <CaretDownIcon class="stroke-2 stroke-inherit ui-open:rotate-180 transition ease-in-out duration-300" />
  </button>
</template>

<style lang="postcss">
.sideMenu {
  @apply cursor-pointer p-3 text-netral-50 bg-netral-10 
  
  rounded-[10px] flex items-center justify-between stroke-netral-50 fill-netral-50 
  
  hover:bg-netral-20 active:fill-primary-main active:stroke-primary-main active:text-primary-main 
  
  transition-all duration-300 ease-in-out;

  &[data-headlessui-state="open"] {
    @apply bg-red-500;
  }

  &.main {
    @apply min-w-[12rem];
  }

  &.sub {
    @apply min-w-[9.6875rem];
  }

  &_wrapper {
    @apply flex font-semibold items-center gap-3 stroke-inherit text-sm;
  }
}

.active {
  @apply stroke-primary-main fill-primary-main text-primary-main bg-netral-20;
}
</style>