<script setup lang="ts">
import CircleIcon from '$assets/icons/Circle.vue'

interface Button {
  variant?:
    | 'base'
    | 'default'
    | 'primary'
    | 'error'
    | 'warning'
    | 'disabled'
    | 'disabledBase'
  size?: 'lg' | 'md' | 'sm'
  type?: 'background' | 'outline'
  icon?: boolean
  iconOnly?: boolean
  typeIconOnly?: 'backgroundIcon' | 'outlineIcon'
  iconFlow?: 'left' | 'right'
  href?: string
  onClick?: any
  btnType?: 'button' | 'link'
}

const {
  variant = 'primary',
  size = 'lg',
  type = 'background',
  icon = false,
  iconOnly,
  typeIconOnly,
  iconFlow = 'left',
  href,
  onClick,
  btnType = 'link'
} = defineProps<Button>()
</script>

<template>
  <!-- Button - Label & Icon toLink -->
  <a
    v-if="type === 'background' && btnType !== 'button'"
    @click="$router.push(`${href}`)"
    class="btn"
    :class="{
      base: variant === 'base',
      primary: variant === 'primary',
      default: variant === 'default',
      error: variant === 'error',
      warning: variant === 'warning',
      disabled: variant === 'disabled',
      disabledBase: variant === 'disabledBase',
      lgFont: size === 'lg' || 'md',
      smFont: size === 'sm',
      lgPadding: size === 'lg',
      mdPadding: size === 'md',
      smPadding: size === 'sm',
      right: iconFlow === 'right',
      left: iconFlow === 'left'
    }"
  >
    <div
      v-if="icon"
      :class="{
        'h-4 w-4': size === 'lg' || size === 'md',
        'h-3 w-3': size === 'sm'
      }"
    >
      <slot name="icon">
        <CircleIcon />
      </slot>
    </div>

    <slot />
  </a>

  <!-- Button - Label & Icon withClick -->
  <button
    v-if="type === 'background' && btnType === 'button'"
    @click="onClick"
    :href="href"
    class="btn"
    :class="{
      base: variant === 'base',
      primary: variant === 'primary',
      default: variant === 'default',
      error: variant === 'error',
      warning: variant === 'warning',
      disabled: variant === 'disabled',
      disabledBase: variant === 'disabledBase',
      lgFont: size === 'lg' || 'md',
      smFont: size === 'sm',
      lgPadding: size === 'lg',
      mdPadding: size === 'md',
      smPadding: size === 'sm',
      right: iconFlow === 'right',
      left: iconFlow === 'left'
    }"
  >
    <div
      v-if="icon"
      :class="{
        'h-4 w-4': size === 'lg' || size === 'md',
        'h-3 w-3': size === 'sm'
      }"
    >
      <slot name="icon">
        <CircleIcon />
      </slot>
    </div>

    <slot />
  </button>

  <!-- Button - Label & Icon -->
  <button
    v-if="type === 'outline'"
    @click="onClick"
    class="btn outline"
    :class="{
      primary: variant === 'primary',
      default: variant === 'default',
      error: variant === 'error',
      warning: variant === 'warning',
      disabled: variant === 'disabled',
      disabledBase: variant === 'disabledBase',
      lgFont: size === 'lg' || 'md',
      smFont: size === 'sm',
      lgPadding: size === 'lg',
      mdPadding: size === 'md',
      smPadding: size === 'sm',
      right: iconFlow === 'right',
      left: iconFlow === 'left'
    }"
  >
    <div
      v-if="icon"
      :class="{
        'h-4 w-4': size === 'lg' || size === 'md',
        'h-3 w-3': size === 'sm'
      }"
    >
      <slot name="icon">
        <CircleIcon />
      </slot>
    </div>

    <slot />
  </button>

  <!-- Button - Icon -->
  <button
    v-if="icon && iconOnly"
    class="btn iconOnly"
    :class="{
      backgroundIcon: typeIconOnly === 'backgroundIcon',
      outlineIcon: typeIconOnly === 'outlineIcon'
    }"
  >
    <slot name="iconOnly" />
  </button>
</template>

<style lang="postcss">
.btn {
  @apply flex cursor-pointer items-center justify-center gap-3 whitespace-nowrap rounded-[10px] border-2 border-transparent font-semibold outline-none transition-colors duration-300 ease-in-out;

  &.left {
    @apply flex-row;
  }

  &.right {
    @apply flex-row-reverse;
  }

  &.iconOnly {
    @apply flex items-center justify-center rounded-[10px] p-3;

    &.backgroundIcon {
      @apply bg-primary-surface;
    }

    &.outlineIcon {
      @apply border border-netral-30;
    }
  }

  &.base {
    @apply bg-netral-10 stroke-primary-main text-primary-main 
    
    hover:stroke-primary-hover hover:text-primary-hover 
    
    active:border-2 active:border-primary-surface active:stroke-primary-pressed active:text-primary-pressed;
  }

  &.primary {
    @apply bg-primary-main stroke-netral-10 text-netral-10 
    
    hover:bg-primary-hover 
    
    active:border-2 active:border-primary-border active:bg-primary-pressed;
  }

  &.default {
    @apply bg-netral-20 stroke-netral-100 text-netral-100 
    
    hover:bg-netral-30 
    
    active:border-2 active:border-primary-main/30 active:bg-netral-40;
  }

  &.error {
    @apply bg-error-main stroke-netral-10 text-netral-10 
    
    hover:bg-error-hover 
    
    active:border-error-border active:bg-error-pressed;
  }

  &.warning {
    @apply bg-warning-main stroke-netral-10 text-netral-10 
    
    hover:bg-warning-hover 
    
    active:border-warning-border active:bg-warning-pressed;
  }

  &.disabled {
    @apply pointer-events-none cursor-default bg-netral-30 stroke-netral-100 text-netral-100;
  }

  &.disabledBase {
    @apply pointer-events-none cursor-default bg-netral-10 stroke-netral-50 text-netral-50;
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
    @apply flex items-center justify-center gap-4 rounded-[10px] font-semibold outline-none;

    &.primary {
      @apply border border-primary-main bg-netral-10 stroke-primary-main text-primary-main hover:bg-primary-surface active:border-2 active:border-primary-border active:bg-primary-surface;
    }

    &.error {
      @apply border border-error-main bg-netral-10 stroke-error-main text-error-main hover:bg-error-surface active:border-2 active:border-error-border active:bg-error-surface;
    }

    &.warning {
      @apply bg-netral-10 stroke-warning-main text-warning-main hover:bg-warning-surface active:border-2 active:border-warning-border active:bg-warning-surface;
    }

    &.disabled {
      @apply pointer-events-none cursor-default bg-netral-30 stroke-netral-100 text-netral-100;
    }

    &.disabledBase {
      @apply pointer-events-none cursor-default bg-netral-10 stroke-netral-50 text-netral-50;
    }
  }
}
</style>
