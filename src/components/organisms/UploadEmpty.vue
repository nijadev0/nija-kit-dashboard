<script setup lang="ts">
import { Dialog, DialogTitle, DialogPanel } from '@headlessui/vue'
import Title from '$components/atoms/Title.vue'

import Uploading from '$assets/icons/Uploading.vue'
import CloseXIcon from '$assets/icons/CloseXIcon.vue'
import Button from '$components/atoms/Button.vue'

interface UploadEmpty {
  isOpen: any
  closeModal: any
  nextModal: any
  title: any
}

const { isOpen, closeModal, nextModal, title } = defineProps<UploadEmpty>()
</script>

<template>
  <Dialog as="div" :open="isOpen" @close="closeModal" class="relative z-50">
    <div class="fixed inset-0 bg-black bg-opacity-25" />

    <div class="fixed inset-0">
      <div class="flex min-h-full items-center justify-center p-4 text-center">
        <DialogPanel
          class="w-full max-w-[960px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
        >
          <DialogTitle
            as="div"
            class="mb-6 flex items-center justify-between stroke-netral-100"
          >
            <Title variant="base">
              {{ title }}
            </Title>

            <CloseXIcon
              @close="closeModal"
              class="h-6 w-6 cursor-pointer stroke-netral-80 stroke-2"
            />
          </DialogTitle>

          <div class="flex w-full items-center justify-center">
            <label
              for="dropzone-file"
              class="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-netral-30 bg-gray-50"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <Uploading class="h-16 w-16 stroke-netral-60" />
                <p class="my-3 text-sm text-netral-50">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-netral-50">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
            </label>
          </div>

          <div class="mt-4 flex justify-end gap-3">
            <Button
              variant="base"
              :on-click="closeModal"
              size="md"
              type="outline"
              btn-type="button"
            >
              Discard
            </Button>
            <Button
              btn-type="button"
              variant="primary"
              size="md"
              type="background"
              :on-click="nextModal"
            >
              Save
            </Button>
          </div>
        </DialogPanel>
      </div>
    </div>
  </Dialog>
</template>
