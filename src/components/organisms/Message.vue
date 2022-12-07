<script setup lang="ts">
import { onMounted } from 'vue'
import { TransitionChild, TransitionRoot } from '@headlessui/vue'

import Para from '$components/atoms/Para.vue'

import TrashIcon from '$assets/icons/Trash.vue'
import CloseXIcon from '$assets/icons/CloseXIcon.vue'
import CheckCircleIcon from '$assets/icons/CheckCircle.vue'

interface Message {
  variant?: 'error' | 'success'
  title?: string
  description?: string
  toast: boolean
  closeToast: any
}

const {
  variant = 'error',
  title,
  description,
  toast,
  closeToast
} = defineProps<Message>()

onMounted(() => {
  setTimeout(() => {
    closeToast()
  }, 2000)
})
</script>

<template>
  <TransitionRoot appear :show="toast" as="template">
    <TransitionChild
      as="template"
      enter="duration-300 ease-in"
      enter-from="opacity-0 scale-95 -right-80"
      enter-to="opacity-100 scale-100 right-0"
      leave="duration-500 ease-out"
      leave-from="opacity-100 scale-100 right-0"
      leave-to="scale-95 -right-80 opacity-0"
    >
      <section
        class="message"
        :class="{ error: variant === 'error', success: variant === 'success' }"
      >
        <TrashIcon v-if="variant === 'error'" />
        <CheckCircleIcon v-if="variant === 'success'" />

        <div class="message_content">
          <Para size="lg" variant="medium" class="mb-3">
            {{ title }}
          </Para>
          <Para size="md" variant="regular">
            {{ description }}
          </Para>
        </div>

        <CloseXIcon
          @click="closeToast"
          class="h-6 w-6 cursor-pointer stroke-netral-50"
        />
      </section>
    </TransitionChild>
  </TransitionRoot>
</template>

<style lang="postcss">
.message {
  @apply fixed top-24 right-8 z-50 flex items-start gap-3 rounded-[10px] border-l bg-white p-7 text-netral-80 shadow-message;

  &.error {
    @apply border-error-border;
  }

  &.success {
    @apply border-success-border;
  }

  &_content {
    @apply mr-4 max-w-[260px];
  }
}
</style>
