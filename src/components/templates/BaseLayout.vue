<script setup lang="ts">
import Heading from '../../components/atoms/Heading.vue';

import Sidebar from '../../components/organisms/Sidebar.vue';
import Navbar from '../../components/organisms/Navbar.vue';

const { title } = defineProps<{title: string}>()
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

          <div class="nijakit-content">
            <slot />
          </div>

          <div class="nijakit-layout">
            <slot name="layout" />
          </div>

          <div class="nijakit-extend">
            <slot name="extend"/>
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

  &-layout {
    @apply w-full;
  }

  &-navbar {
    @apply sticky top-0 z-50 bg-netral-10 shadow-sm;
  }

  &-wrapper {
    @apply min-h-screen bg-netral-20 p-8;
  }

  &-container {
    @apply container mx-auto flex flex-col items-start gap-6 relative;
  }

  &-extend {
    @apply container mx-auto sticky z-10 bottom-6 left-0;
  }

  &-content {
    @apply w-full bg-netral-10 h-full rounded-3xl p-6;
  }
}
</style>