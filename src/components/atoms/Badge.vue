<script setup lang="ts">
import Para from '$components/atoms/Para.vue';

interface Status {
  variant?:
    | string
    | 'success'
    | 'warning'
    | 'info'
    | 'critical'
    | 'neutral';
}

const { variant } = defineProps<Status>();
</script>

<template>
  <div
    class="badge"
    :class="{
      'success': variant === 'success',
      'warning': variant === 'warning',
      'info': variant === 'info',
      'critical': variant === 'critical',
      'neutral': variant === 'neutral',
    }"
  >
    <Para size="md" variant="medium">
      <slot />
    </Para>
  </div>
</template>

<style lang="postcss">
.badge {
  @apply py-1 px-2 capitalize rounded-full w-max;

  &.success {
    @apply text-success-main bg-success-surface/50;
  }

  &.warning {
    @apply text-warning-main bg-warning-surface/50;
  }

  &.info {
    @apply text-info-main bg-info-surface/50;
  }

  &.critical {
    @apply text-error-main bg-error-surface/50;
  }

  &.neutral {
    @apply text-netral-80 bg-netral-30;
  }
}
</style>
