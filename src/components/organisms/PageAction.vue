<script setup lang="ts">
import { ref } from 'vue'

import Button from '$components/atoms/Button.vue'
import Alert from '$components/organisms/Alert.vue'
import Message from '$components/organisms/Message.vue'

import ChecksIcon from '$assets/icons/Checks.vue'
import { TransitionChild, TransitionRoot } from '@headlessui/vue'

interface PageAction {
  variant?: 'primary' | 'error'
  isEnabled: boolean
  isOpen?: boolean
  hideSecondary?: boolean
  href?: string
  labelPrimary?: string
  labelSecondary?: string
}

let {
  isEnabled,
  variant = 'error',
  href,
  labelPrimary,
  labelSecondary,
  hideSecondary = false
} = defineProps<PageAction>()

let isOpenLeft = ref(false)
let isOpenRight = ref(false)
let isOpenSave = ref(false)

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

const openToast = () => {
  isOpenSave.value = true
}

const closeToast = () => {
  isOpenSave.value = false
}
</script>

<template>
  <!-- PageAction -->
  <TransitionRoot appear :show="isEnabled" as="div">
    <TransitionChild
      as="div"
      enter="duration-300 ease-in-out"
      enter-from="opacity-0 scale-95 -bottom-80"
      enter-to="opacity-100 scale-100 bottom-0"
      leave="duration-500 ease-in-out"
      leave-from="opacity-100 scale-100 bottom-0"
      leave-to="scale-95 -bottom-80 opacity-0"
    >
      <div
        v-if="isEnabled"
        class="PageAction relative flex items-center justify-between rounded-[10px] border border-netral-30 bg-white px-6 py-4 shadow-extend"
      >
        <div class="flex items-center gap-2">
          <ChecksIcon />
          <span class="flex items-center gap-1 font-semibold text-netral-50">
            {{
              labelPrimary === 'Delete'
                ? '2 products selected'
                : 'Last Saved Nov 9, 2022-17.09'
            }}
          </span>
        </div>

        <div class="flex items-center gap-2">
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

          <!-- Saved Sweet Alert -->
          <Message
            v-if="isOpenSave"
            variant="success"
            title="Saved successfully"
            description="You can now continue to do anything you want"
            :toast="isOpenSave"
            :closeToast="closeToast"
          />

          <Button
            v-if="
              hideSecondary === false &&
              labelSecondary !== 'Discard' &&
              labelSecondary !== 'Back'
            "
            btnType="button"
            type="outline"
            variant="primary"
            size="md"
            :onClick="openModalLeft"
          >
            {{ labelSecondary }}
          </Button>

          <button
            class="p-3 font-semibold text-primary-main"
            v-if="
              labelSecondary === 'Discard' ||
              labelSecondary === 'Back' ||
              labelSecondary === 'Cancel'
            "
            @click="$router.go(-1)"
          >
            {{
              (labelSecondary === 'Discard' && 'Discard') ||
              (labelSecondary === 'Back' && 'Back') ||
              (labelSecondary === 'Cancel' && 'Cancel')
            }}
          </button>

          <Button
            v-if="variant === 'error'"
            type="background"
            btnType="button"
            variant="error"
            size="md"
            :onClick="openModalRight"
          >
            {{ labelPrimary ?? 'Draft' }}
          </Button>

          <Button
            v-if="variant === 'primary' && labelPrimary !== 'Save'"
            :href="href"
            type="background"
            btnType="link"
            variant="primary"
            size="md"
          >
            {{ labelPrimary ?? 'Next' }}
          </Button>

          <Button
            v-if="variant === 'primary' && labelPrimary === 'Save'"
            :on-click="openToast"
            type="background"
            btnType="button"
            variant="primary"
            size="md"
          >
            {{ labelPrimary ?? 'Next' }}
          </Button>
        </div>
      </div>
    </TransitionChild>
  </TransitionRoot>
</template>
