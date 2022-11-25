<script setup lang="ts">
interface Button {
  variant?: string | 'base' | 'default' | 'primary' | 'error' | 'disabled' | 'disabledBase';
  size?: string | 'lg' | 'md' | 'sm';
  type?: string | 'background' | 'outline';
}

const {
  variant = 'primary',
  size = 'lg',
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
      default: variant === 'default',
      error: variant === 'error',
      disabled: variant === 'disabled',
      disabledBase: variant === 'disabledBase',
      lgFont: size === 'lg' || 'md',
      smFont: size === 'sm',
      lgPadding: size === 'lg',
      mdPadding: size === 'md',
      smPadding: size === 'sm',
    }"
  >
    <div
      :class="{
        'w-4 h-4': size === 'lg' || size === 'md',
        'w-3 h-3': size === 'sm',
      }"
    >
    <slot name="icon">
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
    </slot>  
    </div>

    <slot />
  </button>

  <button
    v-else
    class="btn outline"
    :class="{
      primary: variant === 'primary',
      default: variant === 'default',
      error: variant === 'error',
      disabled: variant === 'disabled',
      disabledBase: variant === 'disabledBase',
      lgFont: size === 'lg' || 'md',
      smFont: size === 'sm',
      lgPadding: size === 'lg',
      mdPadding: size === 'md',
      smPadding: size === 'sm',
    }"
  >
    <div
      :class="{
        'w-4 h-4': size === 'lg' || size === 'md',
        'w-3 h-3': size === 'sm',
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
  @apply font-semibold flex items-center justify-center gap-3 rounded-[10px] outline-none border-2 border-transparent whitespace-nowrap;

  &.base {
    @apply bg-netral-10 text-primary-main stroke-primary-main 
    
    hover:text-primary-hover hover:stroke-primary-hover 
    
    active:text-primary-pressed active:stroke-primary-pressed active:border-2 active:border-primary-surface;
  }

  &.primary {
    @apply bg-primary-main text-netral-10 stroke-netral-10 
    
    hover:bg-primary-hover 
    
    active:bg-primary-pressed active:border-2 active:border-primary-border;
  }

  &.default {
    @apply bg-netral-20 text-netral-100 stroke-netral-100 
    
    hover:bg-netral-30 
    
    active:bg-netral-40 active:border-2 active:border-primary-main/30;
  }

  &.error {
    @apply bg-error-main text-netral-10 stroke-netral-10 
    
    hover:bg-error-hover 
    
    active:bg-error-pressed active:border-error-border;
  }

  &.disabled {
    @apply bg-netral-30 text-netral-100 stroke-netral-100 pointer-events-none cursor-default;
  }

  &.disabledBase {
    @apply bg-netral-10 text-netral-50 stroke-netral-50 pointer-events-none cursor-default;
  }

  &.lgFont,
  &.mdFont {
    @apply text-base;
  }

  &.smFont {
    @apply text-sm;
  }

  &.lgPadding {
    @apply p-4;
  }

  &.mdPadding {
    @apply p-3;
  }

  &.smPadding {
    @apply p-2;
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
