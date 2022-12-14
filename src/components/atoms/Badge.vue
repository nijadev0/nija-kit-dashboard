<script setup lang="ts">
import Para from '$components/atoms/Para.vue'

interface Status {
  variant?: 'success' | 'warning' | 'info' | 'critical' | 'neutral'
}

const { variant } = defineProps<Status>()
</script>

<template>
  <div
    class="badge"
    :class="{
      success: variant === 'success',
      warning: variant === 'warning',
      info: variant === 'info',
      critical: variant === 'critical',
      neutral: variant === 'neutral'
    }"
  >
    <Para size="md" variant="medium">
      <slot />
    </Para>
  </div>
</template>

<style lang="postcss">
.badge {
  @apply w-max rounded-full py-1 px-4 capitalize;

  &.success {
    @apply bg-success-surface/50 text-success-main;
  }

  &.warning {
    @apply bg-warning-surface/50 text-warning-main;
  }

  &.info {
    @apply bg-info-surface/50 text-info-main;
  }

  &.critical {
    @apply bg-error-surface/50 text-error-main;
  }

  &.neutral {
    @apply bg-netral-30 text-netral-80;
  }
}
</style>
