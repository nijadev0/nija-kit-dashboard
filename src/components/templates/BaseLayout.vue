<script setup lang="ts">
import Heading from '../../components/atoms/Heading.vue';

import Sidebar from '../../components/organisms/Sidebar.vue';
import Navbar from '../../components/organisms/Navbar.vue';

const { title } = defineProps<{title: string}>()
</script>

<template>
  <div class="nijakit">
    <section class="nijakit-sidebar">
      <Sidebar />
    </section>

    <div class="nijakit-main">
      <section class="nijakit-navbar">
        <Navbar />
      </section>

      <section class="nijakit-wrapper">
        <main class="nijakit-container">
          <Heading size="sm" variant="semibold" class="mb-6">
            {{ title }}
          </Heading>

          <div class="nijakit-content">
            <slot></slot>
          </div>
        </main>
      </section>
    </div>
  </div>
</template>

<style lang="postcss">
.nijakit {
  @apply relative flex items-start w-full h-full justify-start;

  &-sidebar {
    @apply sticky top-0 left-0 right-auto h-screen; 
  }

  &-main {
    @apply relative w-full;
  }

  &-navbar {
    @apply sticky top-0 z-50 bg-netral-10 shadow-sm;
  }

  &-wrapper {
    @apply min-h-screen bg-netral-20 p-8;
  }

  &-container {
    @apply container mx-auto;
  }

  &-content {
    @apply w-full bg-netral-10 h-full min-h-screen rounded-3xl p-6;
  }
}
</style>