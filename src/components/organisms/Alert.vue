<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'

import Para from '$components/atoms/Para.vue'
import Button from '$components/atoms/Button.vue'

import CloseXIcon from '$assets/icons/CloseXIcon.vue'
import { ref } from 'vue'
import Message from './Message.vue'

interface Alert {
  variant?: 'error' | 'warning' | 'success'
  title: string
  description: string
  isOpen?: any
  closeModal?: any
}

const {
  isOpen,
  variant = 'error',
  title,
  description,
  closeModal
} = defineProps<Alert>()

let toast = ref(false)

function showToast() {
  // Close modal first
  closeModal()

  // Showing toast after 2s
  setTimeout(() => {
    toast.value = true
  }, 1500)
}

function closeToast() {
  toast.value = false
}
</script>

<template>
  <div class="alertBase">
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="alert">
        <TransitionChild
          as="template"
          enter="duration-150 ease-in"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-150 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="alert-overlay" />
        </TransitionChild>

        <div class="alert_card-wrapper">
          <div class="alert_card-center">
            <TransitionChild
              as="template"
              enter="duration-150 ease-in"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-150 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel class="alert_card">
                <DialogTitle class="alert_heading">
                  <div class="alert_title">
                    <div
                      class="alert_title-bg"
                      :class="{
                        error: variant === 'error',
                        warning: variant === 'warning'
                      }"
                    />
                    <Para size="xl" variant="semibold">{{ title }}</Para>
                  </div>

                  <CloseXIcon
                    @click="closeModal"
                    class="h-6 w-6 cursor-pointer stroke-netral-60"
                  />
                </DialogTitle>

                <Para size="lg" variant="regular" class="mb-10">
                  {{ description }}
                </Para>

                <div class="alert_cta">
                  <div class="alert_cta-default">
                    <button
                      @click="closeModal"
                      class="w-full font-semibold leading-tight text-netral-50"
                    >
                      Cancel
                    </button>
                  </div>

                  <div class="alert_cta-error">
                    <Button
                      v-if="variant === 'error'"
                      variant="error"
                      size="md"
                      btn-type="button"
                      type="background"
                      :on-click="showToast"
                    >
                      Delete
                    </Button>

                    <Button
                      v-if="variant === 'warning'"
                      variant="warning"
                      size="md"
                      btn-type="button"
                      type="background"
                      :on-click="showToast"
                    >
                      Draft
                    </Button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>

  <div v-if="toast" class="relative">
    <Message
      v-if="variant === 'error'"
      variant="error"
      title="Category has been deleted"
      description="Category which already deleted can not be recovered."
      :toast="toast"
      :close-toast="closeToast"
    />
    <Message
      v-if="variant === 'warning'"
      variant="warning"
      title="Category has been drafted"
      description="Don't worry, you can access drafted categories"
      :toast="toast"
      :close-toast="closeToast"
    />
  </div>
</template>

<style lang="postcss">
.alert {
  @apply relative z-[9999];

  &-overlay {
    @apply fixed inset-0 bg-black bg-opacity-25;
  }

  &_card {
    @apply w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all;

    &-wrapper {
      @apply fixed inset-0 overflow-y-auto;
    }

    &-center {
      @apply -mt-12 flex min-h-full items-center justify-center p-4 text-center;
    }
  }

  &_heading {
    @apply flex flex-row items-start justify-between;
  }

  &_title {
    @apply mb-6 flex gap-3;

    &-bg {
      @apply h-6 w-2 rounded-full;

      &.error {
        @apply bg-error-main;
      }

      &.warning {
        @apply bg-warning-main;
      }

      &.success {
        @apply bg-success-main;
      }
    }
  }

  &_cta {
    @apply flex w-full items-center justify-end gap-8;
  }
}
</style>
