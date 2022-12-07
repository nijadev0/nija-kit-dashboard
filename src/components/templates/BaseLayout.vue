<script setup lang="ts">
import Heading from '$components/atoms/Heading.vue'

import Sidebar from '$components/organisms/Sidebar.vue'
import Navbar from '$components/organisms/Navbar.vue'

interface BaseLayout {
  title: string
  page?: boolean
  full?: boolean
}

const { title, page = false, full = true } = defineProps<BaseLayout>()
</script>

<template>
  <div class="nijakit">
    <slot name="teleport" />

    <section class="nijakit-sidebar">
      <Sidebar />
    </section>

    <div class="nijakit-main">
      <section class="nijakit-navbar">
        <Navbar />
      </section>

      <section class="nijakit-wrapper">
        <main class="nijakit-container">
          <Heading size="sm" variant="semibold">
            {{ title }}
          </Heading>

          <div
            class="nijakit-content"
            :class="{ 'nijakit-isFull': full === true }"
          >
            <slot />
          </div>

          <div v-if="page" class="nijakit-content">
            <slot name="page" />
          </div>

          <div class="nijakit-layout">
            <slot name="layout" />
          </div>

          <div class="nijakit-extend">
            <slot name="extend" />
          </div>
        </main>
      </section>
    </div>
  </div>
</template>

<style lang="postcss">
.nijakit {
  @apply relative flex h-full w-full items-start justify-start;

  &-sidebar {
    @apply sticky top-0 left-0 right-auto h-screen;
  }

  &-main {
    @apply relative w-full;
  }

  &-layout {
    @apply w-full;
  }

  &-navbar {
    @apply sticky top-0 z-50 bg-netral-10 shadow-sm;
  }

  &-wrapper {
    @apply relative min-h-screen bg-netral-20 p-8;
  }

  &-container {
    @apply container relative mx-auto flex flex-col items-start gap-6;
  }

  &-extend {
    @apply container sticky bottom-6 left-0 z-10 mx-auto;
  }

  &-content {
    @apply h-full w-full rounded-[10px] bg-netral-10 p-6;
  }
  &-isFull {
    @apply min-h-[calc(100vh-12.5rem)];
  }
}
</style>
