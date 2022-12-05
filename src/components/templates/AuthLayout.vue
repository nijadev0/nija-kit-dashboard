<script setup lang="ts">
const { image } = defineProps<{ image?: string }>()
</script>

<template>
  <div class="grid grid-cols-12 gap-5">
    <!-- Photo -->
    <div class="relative col-span-7">
      <div class="sticky inset-0 z-10 h-screen">
        <img
          class="h-full w-full object-cover object-center"
          :src="image"
          alt="Login Banner"
        />
      </div>
    </div>

    <!-- Content -->
    <div class="relative col-span-5">
      <slot />
    </div>
  </div>
</template>
