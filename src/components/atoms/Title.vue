<script setup lang="ts">
import Para from './Para.vue'

interface Title {
  variant?: 'base' | 'critical' | 'warning' | 'success' | 'info'
}

const { variant = 'base' } = defineProps<Title>()
</script>

<template>
  <div class="title">
    <div
      class="title_icon"
      :class="{
        base: variant === 'base',
        critical: variant === 'critical',
        warning: variant === 'warning',
        success: variant === 'success',
        info: variant === 'info'
      }"
    ></div>

    <Para size="xxl" variant="semibold">
      <slot />
    </Para>
  </div>
</template>

<style lang="postcss">
.title {
  @apply flex flex-row items-end gap-3;

  &_icon {
    @apply h-6 w-2 rounded-full;

    &.base {
      @apply bg-netral-100;
    }

    &.critical {
      @apply bg-error-main;
    }

    &.warning {
      @apply bg-warning-main;
    }

    &.success {
      @apply bg-success-main;
    }

    &.info {
      @apply bg-primary-main;
    }
  }
}
</style>
