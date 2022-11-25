<script setup lang="ts">
import Para from './Para.vue';

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
    class="badge py-1 px-2 capitalize rounded-full w-max"
    :class="{
      'text-success-main bg-success-surface/50': variant === 'success',
      'text-warning-main bg-warning-surface/50': variant === 'warning',
      'text-info-main bg-info-surface/50': variant === 'info',
      'text-error-main bg-error-surface/50': variant === 'critical',
      'text-netral-80 bg-netral-30': variant === 'neutral',
    }"
  >
    <Para size="md" variant="medium">
      <slot />
    </Para>
  </div>
</template>

<style lang="postcss"></style>
