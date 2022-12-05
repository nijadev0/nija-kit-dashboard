<script setup lang="ts">
interface Heading {
  variant?: 'bold' | 'semibold' | 'medium' | 'regular'
  size?: 'xl' | 'lg' | 'md' | 'sm'
}

const { variant, size } = defineProps<Heading>()
</script>

<template>
  <h3
    class="heading"
    :class="{
      xl: size === 'xl',
      lg: size === 'lg',
      md: size === 'md',
      sm: size === 'sm',
      bold: variant === 'bold',
      semibold: variant === 'semibold',
      medium: variant === 'medium',
      regular: variant === 'regular'
    }"
  >
    <slot />
  </h3>
</template>

<style lang="postcss">
.heading {
  @apply text-netral-100;

  &.xl {
    @apply text-[4rem] leading-[1.33];
  }

  &.lg {
    @apply text-[46px] leading-[1.33];
  }

  &.md {
    @apply text-4xl leading-[1.22];
  }

  &.sm {
    @apply text-2xl leading-[1.25];
  }

  &.bold {
    @apply font-bold;
  }

  &.semibold {
    @apply font-semibold;
  }

  &.medium {
    @apply font-medium;
  }

  &.regular {
    @apply font-normal;
  }
}
</style>
