<script lang="ts" setup>
interface Tag {
  label: string | undefined
  active: boolean | undefined
  color: string | undefined
}

const { label, active, color } = defineProps<Tag>()
</script>

<template>
  <div v-if="active" class="absolute top-1/2 -left-1 z-10 -translate-y-1/2">
    <div
      class="min-w-20 flex h-8 items-center gap-2 rounded-md bg-[#F4F5F6] py-1.5 px-2"
    >
      <div class="h-5 w-5 rounded-sm" :class="color" />
      <span> {{ label }} </span>
    </div>
  </div>
</template>
