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

interface Alert {
  variant?: 'error' | 'warning'
  title: string
  description: string
  isOpen?: boolean
  closeModal?: any
}

const { isOpen, variant = 'error', title, description } = defineProps<Alert>()
</script>

<template>
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
                <CloseXIcon @click="closeModal" class="cursor-pointer" />
              </DialogTitle>

              <Para size="lg" variant="regular" class="mb-10">
                {{ description }}
              </Para>

              <div class="alert_cta">
                <div class="alert_cta-default">
                  <button @click="closeModal" class="w-full text-netral-50">
                    Cancel
                  </button>
                </div>

                <div class="alert_cta-error">
                  <button>Delete</button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
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
      @apply flex min-h-full items-center justify-center p-4 text-center -mt-12;
    }
  }

  &_heading {
    @apply flex flex-row items-start justify-between;
  }

  &_title {
    @apply flex gap-3 mb-6;

    &-bg {
      @apply w-2 h-6 rounded-full;

      &.error {
        @apply bg-error-main;
      }

      &.warning {
        @apply bg-warning-main;
      }
    }
  }

  &_cta {
    @apply w-full flex items-center justify-end gap-8;
  }
}
</style>
