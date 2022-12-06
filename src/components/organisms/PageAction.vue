<script setup lang="ts">
import { ref } from 'vue'

import Button from '$components/atoms/Button.vue'
import Alert from '$components/organisms/Alert.vue'

import ChecksIcon from '$assets/icons/Checks.vue'

interface PageAction {
  isEnabled: boolean
  isOpen?: boolean
}

let { isEnabled } = defineProps<PageAction>()

let isOpen = ref(false)

const openModal = () => {
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}
</script>

<template>
  <!-- Action -->
  <div v-if="isEnabled" class="relative">
    <div class="pageAction">
      <div class="pageAction_status">
        <ChecksIcon />
        <span class="pageAction_status-text"> 2 products selected </span>
      </div>

      <div class="pageAction_cta">
        <Button btnType="button" type="outline" variant="primary" size="md">
          Draft
        </Button>

        <Alert
          variant="error"
          :isOpen="isOpen"
          :closeModal="closeModal"
          title="Delete Product"
          description="Are you sure to delete your product? You won't get your data back once it deleted"
        />

        <Button
          type="background"
          btnType="button"
          variant="error"
          size="md"
          :onClick="openModal"
        >
          Delete
        </Button>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.pageAction {
  @apply relative flex items-center justify-between rounded-[10px] border border-netral-30 bg-white px-6 py-4 shadow-extend;

  &_status {
    @apply flex items-center gap-2;

    &-text {
      @apply text-base font-semibold text-netral-50;
    }
  }

  &_cta {
    @apply flex items-center gap-2;
  }
}

.checkbox {
  @apply flex items-center gap-2 outline-none;

  &-wrapper {
    @apply relative flex h-5 w-5 items-center justify-between gap-2.5 rounded-md border outline-none;

    &.active {
      @apply border-primary-border bg-primary-main;
    }

    &.default {
      @apply border-netral-60;
    }
  }

  &-icon {
    @apply absolute z-10 h-full w-full;
  }

  &-text {
    @apply text-netral-100;
  }
}
</style>
