<script setup lang="ts">
import Checks from '$assets/icons/Checks.vue'

interface TestPageAction {
  enabled: boolean
}

let { enabled } = defineProps<TestPageAction>()
</script>
<template>
  <div
    v-if="enabled"
    class="fixed bottom-0 left-0 flex w-full items-center justify-between bg-slate-100 p-5"
  >
    <Checks class="h-6 w-6" />

    <button class="bg-primary-main p-4 text-white">Sembuniyikan</button>
  </div>
</template>
