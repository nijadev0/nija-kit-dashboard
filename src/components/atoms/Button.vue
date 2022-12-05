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
  todoClick?: any
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
  todoClick,
  btnType = 'link'
} = defineProps<Button>()
</script>

<template>
  <a
    @click="href && $router.push(`${href}`)"
    v-if="type === 'background' && btnType !== 'button'"
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
        'w-4 h-4': size === 'lg' || size === 'md',
        'w-3 h-3': size === 'sm'
      }"
    >
      <slot name="icon">
        <CircleIcon />
      </slot>
    </div>

    <slot />
  </a>

  <button
    v-if="type === 'background' && btnType === 'button'"
    class="btn"
    @click="$emit('todo-click', 'todoClick')"
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
        'w-4 h-4': size === 'lg' || size === 'md',
        'w-3 h-3': size === 'sm'
      }"
    >
      <slot name="icon">
        <CircleIcon />
      </slot>
    </div>

    <slot />
  </button>

  <button
    v-if="type === 'outline'"
    @click="todoClick"
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
        'w-4 h-4': size === 'lg' || size === 'md',
        'w-3 h-3': size === 'sm'
      }"
    >
      <slot name="icon">
        <CircleIcon />
      </slot>
    </div>

    <slot />
  </button>

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
  @apply cursor-pointer font-semibold flex items-center justify-center gap-3 rounded-[10px] outline-none border-2 border-transparent whitespace-nowrap transition-colors ease-in-out duration-300;

  &.left {
    @apply flex-row;
  }

  &.right {
    @apply flex-row-reverse;
  }

  &.iconOnly {
    @apply p-3 rounded-[10px] flex items-center justify-center;

    &.backgroundIcon {
      @apply bg-primary-surface;
    }

    &.outlineIcon {
      @apply border border-netral-30;
    }
  }

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

  &.warning {
    @apply bg-warning-main text-netral-10 stroke-netral-10 
    
    hover:bg-warning-hover 
    
    active:bg-warning-pressed active:border-warning-border;
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

    &.warning {
      @apply bg-netral-10 text-warning-main stroke-warning-main hover:bg-warning-surface active:border-warning-border active:border-2 active:bg-warning-surface;
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
