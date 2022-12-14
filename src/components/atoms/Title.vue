<script setup lang="ts">
import Para from './Para.vue'

interface Title {
  variant?: 'base' | 'critical' | 'warning' | 'success' | 'info'
}

const { variant = 'base' } = defineProps<Title>()
</script>

<template>
  <!-- Title -->
  <div class="Title flex flex-row items-end gap-3">
    <div
      class="h-6 w-2 rounded-full"
      :class="{
        'bg-netral-100': variant === 'base',
        'bg-error-main': variant === 'critical',
        'bg-warning-main': variant === 'warning',
        'bg-success-main': variant === 'success',
        'bg-primary-main': variant === 'info'
      }"
    />

    <Para size="xxl" variant="semibold">
      <slot />
    </Para>
  </div>
</template>
