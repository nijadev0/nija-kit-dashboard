<script setup lang="ts">
interface Button {
  variant?: string | 'base' | 'primary' | 'error' | 'disabled' | 'disabledBase';
  size?: string | 'big' | 'medium' | 'small';
  type?: string | 'background' | 'outline';
}

const {
  variant = 'primary',
  size = 'big',
  type = 'background',
} = defineProps<Button>();
</script>

<template>
  <button
    v-if="type === 'background'"
    class="btn"
    :class="{
      base: variant === 'base',
      primary: variant === 'primary',
      error: variant === 'error',
      disabled: variant === 'disabled',
      disabledBase: variant === 'disabledBase',
      bigFont: size === 'big' || 'medium',
      smallFont: size === 'small',
      bigPadding: size === 'big',
      mediumPadding: size === 'medium',
      smallPadding: size === 'small',
    }"
  >
    <div
      :class="{
        'w-4 h-4': size === 'big' || size === 'medium',
        'w-3 h-3': size === 'small',
      }"
    >
      <svg
        class="w-full h-full stroke-inherit"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
    </div>

    <span>
      <slot />
    </span>
  </button>

  <button
    v-else
    class="btn outline"
    :class="{
      primary: variant === 'primary',
      error: variant === 'error',
      disabled: variant === 'disabled',
      disabledBase: variant === 'disabledBase',
      bigFont: size === 'big' || 'medium',
      smallFont: size === 'small',
      bigPadding: size === 'big',
      mediumPadding: size === 'medium',
      smallPadding: size === 'small',
    }"
  >
    <div
      :class="{
        'w-4 h-4': size === 'big' || size === 'medium',
        'w-3 h-3': size === 'small',
      }"
    >
      <svg
        class="w-full h-full stroke-inherit"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
    </div>
    <slot />
  </button>
</template>

<style lang="postcss">
.btn {
  @apply font-semibold flex items-center justify-center gap-4 rounded-[10px] outline-none border-2 border-transparent;

  &.base {
    @apply bg-netral-10 text-primary-main stroke-primary-main hover:text-primary-hover hover:stroke-primary-hover active:text-primary-pressed active:stroke-primary-pressed active:border-2 active:border-primary-surface;
  }

  &.primary {
    @apply bg-primary-main text-netral-10 stroke-netral-10 hover:bg-primary-hover active:bg-primary-pressed active:border-2 active:border-primary-border;
  }

  &.error {
    @apply bg-error-main text-netral-10 stroke-netral-10 hover:bg-error-hover active:bg-error-pressed active:border-error-border;
  }

  &.disabled {
    @apply bg-netral-30 text-netral-100 stroke-netral-100 pointer-events-none cursor-default;
  }

  &.disabledBase {
    @apply bg-netral-10 text-netral-50 stroke-netral-50 pointer-events-none cursor-default;
  }

  &.bigFont,
  &.mediumFont {
    @apply text-base;
  }

  &.smallFont {
    @apply text-sm;
  }

  &.bigPadding {
    @apply py-[13px] px-4;
  }

  &.mediumPadding {
    @apply py-[9px] px-3.5;
  }

  &.smallPadding {
    @apply py-1.5 px-3;
  }

  &.outline {
    @apply font-semibold flex items-center justify-center gap-4 rounded-[10px] outline-none;

    &.primary {
      @apply bg-netral-10 text-primary-main stroke-primary-main border border-primary-main hover:bg-primary-surface active:border-primary-border active:border-2 active:bg-primary-surface;
    }

    &.error {
      @apply bg-netral-10 text-error-main stroke-error-main border border-error-main hover:bg-error-surface active:border-error-border active:border-2 active:bg-error-surface;
    }

    &.disabled {
      @apply bg-netral-30 text-netral-100 stroke-netral-100 pointer-events-none cursor-default;
    }

    &.disabledBase {
      @apply bg-netral-10 text-netral-50 stroke-netral-50 pointer-events-none cursor-default;
    }
  }
}
</style>
