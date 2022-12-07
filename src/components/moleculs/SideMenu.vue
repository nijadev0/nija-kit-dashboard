<script setup lang="ts">
import CaretDownIcon from '$assets/icons/CaretDown.vue'

interface Sidebar {
  variant?: string | 'main' | 'sub'
  expand?: boolean
  label?: string
  href?: string
}

const { variant, expand, href } = defineProps<Sidebar>()

// let routes = ref(useRouter().currentRoute.value.path.toString())
</script>

<template>
  <router-link
    v-if="!expand"
    :to="`${href}`"
    active-class="active"
    class="sideMenu"
    :class="{
      main: variant === 'main',
      sub: variant === 'sub',
      active: variant === 'active',
      activeOn: variant === ''
    }"
  >
    <div class="sideMenu_wrapper">
      <!-- Icon -->
      <slot />

      <!-- Label -->
      {{ label }}
    </div>
  </router-link>

  <button
    v-if="expand"
    class="sideMenu"
    :class="{
      main: variant === 'main',
      sub: variant === 'sub',
      active: variant === 'active'
    }"
  >
    <div class="sideMenu_wrapper">
      <slot />
      {{ label }}
    </div>

    <CaretDownIcon
      class="stroke-inherit stroke-2 transition duration-300 ease-in-out ui-open:rotate-180"
    />
  </button>
</template>

<style lang="postcss">
.sideMenu {
  @apply flex cursor-pointer items-center 
  
  justify-between rounded-[10px] bg-netral-10 fill-netral-50 stroke-netral-50 p-3 
  
  text-netral-50 transition-all duration-300 ease-in-out hover:bg-netral-20
  
  active:fill-primary-main active:stroke-primary-main active:text-primary-main;

  &[data-headlessui-state='open'] {
    @apply bg-red-500;
  }

  &.main {
    @apply min-w-[12rem];
  }

  &.sub {
    @apply min-w-[9.6875rem];
  }

  &_wrapper {
    @apply flex items-center gap-3 stroke-inherit text-sm font-semibold;
  }
}

.active {
  @apply bg-netral-20 fill-primary-main stroke-primary-main text-primary-main;
}
</style>
