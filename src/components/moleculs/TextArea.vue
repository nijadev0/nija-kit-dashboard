<script setup lang="ts">
interface TextArea {
  className?: string
  label?: string
}

const { className, label } = defineProps<TextArea>()
</script>

<template>
  <!-- Default - Text Area -->
  <textarea
    rows="6"
    class="textarea"
    :class="className"
    type="text"
    :placeholder="label"
  />
</template>

<style lang="postcss">
.textarea {
  @apply outline-none shadow-input p-3.5 border border-netral-30 rounded-lg w-full
         
  focus-within:border focus-within:border-primary-main;
}
</style>
