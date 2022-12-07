<script setup lang="ts">
import { ref } from 'vue'
import { TransitionChild, TransitionRoot } from '@headlessui/vue'

import Button from '$components/atoms/Button.vue'
import Alert from '$components/organisms/Alert.vue'

import ChecksIcon from '$assets/icons/Checks.vue'

interface PageAction {
  variant?: 'primary' | 'error'
  isEnabled: boolean
  isOpen?: boolean
  href?: string
}

let { isEnabled, variant = 'error', href } = defineProps<PageAction>()

let isOpenLeft = ref(false)
let isOpenRight = ref(false)

const openModalLeft = () => {
  isOpenLeft.value = true
}
const openModalRight = () => {
  isOpenRight.value = true
}
const closeModalLeft = () => {
  isOpenLeft.value = false
}

const closeModalRight = () => {
  isOpenRight.value = false
}
</script>

<template>
  <!-- Action -->
  <div v-if="isEnabled" class="relative">
    <TransitionRoot appear :show="isEnabled" as="template">
      <TransitionChild
        as="template"
        enter="duration-300 ease-in-out"
        enter-from="opacity-0 scale-95 -bottom-80"
        enter-to="opacity-100 scale-100 bottom-0"
        leave="duration-500 ease-in-out"
        leave-from="opacity-100 scale-100 bottom-0"
        leave-to="scale-95 -bottom-80 opacity-0"
      >
        <div class="pageAction">
          <div class="pageAction_status">
            <ChecksIcon />
            <span class="pageAction_status-text"> 2 products selected </span>
          </div>

          <div class="pageAction_cta">
            <Button
              btnType="button"
              type="outline"
              variant="primary"
              size="md"
              :onClick="openModalLeft"
            >
              Draft
            </Button>

            <Alert
              variant="warning"
              :isOpen="isOpenLeft"
              :closeModal="closeModalLeft"
              title="Draft Product"
              description="Are you sure want to draft this product?"
            />

            <Alert
              variant="error"
              :isOpen="isOpenRight"
              :closeModal="closeModalRight"
              title="Delete Product"
              description="Are you sure to delete your product? You won't get your data back once it deleted"
            />

            <Button
              v-if="variant === 'error'"
              type="background"
              btnType="button"
              variant="error"
              size="md"
              :onClick="openModalRight"
            >
              Delete
            </Button>

            <Button
              v-if="variant === 'primary'"
              :href="href"
              type="background"
              btnType="link"
              variant="primary"
              size="md"
            >
              Next
            </Button>
          </div>
        </div>
      </TransitionChild>
    </TransitionRoot>
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
    @apply flex items-center gap-1;
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
