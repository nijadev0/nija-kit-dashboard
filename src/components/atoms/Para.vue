<script setup lang="ts">
interface Para {
  variant?: string | 'bold' | 'semibold' | 'medium' | 'regular';
  size?: string | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
}

const { variant, size } = defineProps<Para>();
</script>

<template>
  <p
    class="para"
    :class="{
      xxl: size === 'xxl',
      xl: size === 'xl',
      lg: size === 'lg',
      md: size === 'md',
      sm: size === 'sm',
      xs: size === 'xs',
      bold: variant === 'bold',
      semibold: variant === 'semibold',
      medium: variant === 'medium',
      regular: variant === 'regular',
    }"
  >
    <slot />
  </p>
</template>

<style lang="postcss">
.para {
  @apply break-words;

  &.xxl {
    @apply text-xl leading-[1.4];
  }

  &.xl {
    @apply text-lg leading-[1.33];
  }

  &.lg {
    @apply text-base leading-[1.38];
  }

  &.md {
    @apply text-sm leading-[1.43];
  }

  &.sm {
    @apply text-xs leading-[1.33];
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
