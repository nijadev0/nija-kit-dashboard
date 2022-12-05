<script setup lang="ts">
interface Divider {
  variant?: string | 'addProducts'
}

const { variant = 'addProducts' } = defineProps<Divider>()
</script>

<template>
  <div class="divider" />
</template>

<style lang="postcss">
.divider {
  @apply my-7 w-full h-px bg-netral-20;
}
</style>
