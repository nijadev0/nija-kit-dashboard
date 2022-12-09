<script lang="ts" setup>
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import UploadImage from '$components/moleculs/UploadImage.vue'
import Button from '$components/atoms/Button.vue'
import Title from '$components/atoms/Title.vue'
import CloseXIcon from '$assets/icons/CloseXIcon.vue'

interface UploadList {
  isOpen: any
  closeModal: any
  openToast: any
  title: string
}

const { isOpen, closeModal, openToast } = defineProps<UploadList>()
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

          <UploadImage />

          <div class="mt-4 flex justify-end gap-3">
            <Button
              variant="base"
              :on-click="closeModal"
              size="md"
              type="outline"
            >
              Discard
            </Button>
            <Button
              variant="primary"
              size="md"
              type="background"
              btn-type="button"
              :on-click="openToast"
            >
              Save
            </Button>
          </div>
        </DialogPanel>
      </div>
    </div>
  </Dialog>
</template>
