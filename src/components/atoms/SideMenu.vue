<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type {_RouterLinkI} from 'vue-router'

interface Sidebar {
  variant?: string | 'main' | 'sub';
  expand?: boolean;
  label?: string;
  // href?: ComponentProps<_RouterLinkI>;
  href?: string;
}

const { variant, expand, href } = defineProps<Sidebar>();
</script>

<template>
  <RouterLink active-class="active" :to="'/' + href"
    class="cursor-pointer p-3 text-netral-50 bg-netral-10 hover:bg-netral-20 rounded-[10px] flex itemscenter justify-between stroke-netral-50 fill-netral-50 active:fill-primary-main active:stroke-primary-main active:text-primary-main"
    :class="{
      'min-w-[192px]': variant === 'main',
      'min-w-[155px]': variant === 'sub',
    }"

  >
    <div class="flex font-semibold items-center gap-3 stroke-inherit text-sm">
      <slot />
      <!-- Icon -->
      {{ label }}
      <!-- Label -->
    </div>
    <!-- Expand -->
    <svg
      v-if="expand === true"
      class="stroke-inherit stroke-2"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5 9L12 16.5L4.5 9"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </RouterLink>
</template>
