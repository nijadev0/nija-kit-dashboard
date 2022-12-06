<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

import BaseLayout from '$components/templates/BaseLayout.vue'
import Heading from '$components/atoms/Heading.vue'
import TestPageAction from '$components/templates/TestPageAction.vue'

const enabled = ref(false)
</script>

<template>
  <BaseLayout title="Sandbox">
    <div class="relative min-h-screen">
      <!-- Heading -->
      <Heading variant="semibold" size="xl" class="mb-4">
        Switch Page Action
      </Heading>

      <!-- Switch -->
      <Switch
        v-model="enabled"
        :class="enabled ? 'bg-primary-main' : 'bg-netral-40'"
        class="relative inline-flex h-6 w-11 items-center rounded-full"
      >
        <span class="sr-only">Enable notifications</span>
        <span
          :class="enabled ? 'translate-x-6' : 'translate-x-1'"
          class="inline-block h-4 w-4 transform rounded-full bg-white transition"
        />
      </Switch>

      <!-- Page Action -->
      <TestPageAction :enabled="enabled" />
    </div>
  </BaseLayout>
</template>
