<script setup lang="ts">
import CurrencyDollarIcon from '$assets/icons/CurrencyDollar.vue'

interface Input {
  variety?: 'text' | 'number' | 'email' | 'password'
  label: string
  icon?: boolean
  variant?: 'weight' | 'price'
  className?: string
}

const {
  variant = 'weight',
  variety = 'text',
  label,
  icon = false
} = defineProps<Input>()
</script>

<template>
  <!-- Default -->
  <!-- Default - Input -->
  <input v-if="!icon" class="input" :type="variety" :placeholder="label" />

  <div class="inputIcon" v-if="icon">
    <input
      class="inputIcon-input"
      :class="variant === 'price' && 'pl-12'"
      :type="variety"
      :placeholder="label"
    />
    <div
      class="inputIcon-icon"
      :class="
        (variant === 'weight' && 'right-2') || (variant === 'price' && 'left-2')
      "
    >
      <span v-if="variant === 'weight'"> g </span>
      <CurrencyDollarIcon v-if="variant === 'price'" />
    </div>
  </div>
</template>

<style lang="postcss">
.input {
  @apply w-full rounded-lg border border-netral-30 p-3.5 shadow-input outline-none
         
  focus-visible:border focus-visible:border-primary-main focus-visible:outline-0;
}

.inputIcon {
  @apply relative w-full;

  &-input {
    @apply w-full rounded-lg border border-netral-30 p-3.5 shadow-input outline-none focus-within:border focus-within:border-primary-main;
  }

  &-icon {
    @apply absolute top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md bg-netral-20 text-center text-netral-80;
  }
}
</style>
