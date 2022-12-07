<script setup lang="ts">
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Switch,
  Dialog,
  DialogTitle,
  DialogPanel
} from '@headlessui/vue'

import BaseLayout from '$components/templates/BaseLayout.vue'

import Title from '$components/atoms/Title.vue'
import Button from '$components/atoms/Button.vue'
import Para from '$components/atoms/Para.vue'
import Checkbox from '$components/atoms/Checkbox.vue'
import Select from '$components/moleculs/Select.vue'

import Input from '$components/moleculs/Input.vue'

import PlusIcon from '$assets/icons/Plus.vue'
import UploadSimple from '$assets/icons/UploadSimple.vue'
import Toggle from '$components/atoms/Toggle.vue'

import Trash from '$assets/icons/Trash.vue'
import Pencil from '$assets/icons/Pencil.vue'
import CloseXIcon from '$assets/icons/CloseXIcon.vue'
import PageAction from '$components/organisms/PageAction.vue'

import Check from '$assets/icons/Check.vue'

import UploadPhoto1 from '$assets/images/upload-photo-1.png'
import UploadPhoto2 from '$assets/images/upload-photo-2.png'
import UploadPhoto3 from '$assets/images/upload-photo-3.png'
import Message from '$components/organisms/Message.vue'

const colors = [
  { id: 1, name: 'Select', unavailable: true },
  { id: 2, name: 'Grey', unavailable: false },
  { id: 3, name: 'Cream', unavailable: false },
  { id: 4, name: 'Pink', unavailable: false },
  { id: 5, name: 'Brown', unavailable: false }
]

const sizes = [
  { id: 1, name: 'Select', unavailable: true },
  { id: 2, name: 'XS', unavailable: false },
  { id: 3, name: 'SM', unavailable: false },
  { id: 4, name: 'M', unavailable: false },
  { id: 5, name: 'L', unavailable: false },
  { id: 5, name: 'XL', unavailable: false }
]

const isOpen = ref(false)
const isOpenUploadTwo = ref(false)
const enabled = ref(false)
let toast = ref(false)

const openToast = () => {
  closeModalUploadSecond()
  toast.value = true
}

const closeToast = () => {
  toast.value = false
}

const closeModalUpload = () => {
  isOpen.value = false
}

const openModalUpload = () => {
  isOpen.value = true
}

const closeModalUploadSecond = () => {
  isOpenUploadTwo.value = false
}

const openModalUploadSecond = () => {
  closeModalUpload()
  isOpenUploadTwo.value = true
}
</script>

<template>
  <BaseLayout title="Variants">
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModalUpload" class="relative z-50">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-[960px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="div"
                  class="mb-6 flex items-center justify-between stroke-netral-100"
                >
                  <Title variant="base">Upload variant image</Title>
                  <CloseXIcon
                    @close="closeModalUpload"
                    class="h-6 w-6 cursor-pointer stroke-netral-80 stroke-2"
                  />
                </DialogTitle>

                <div class="flex w-full items-center justify-center">
                  <label
                    for="dropzone-file"
                    class="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-netral-30 bg-gray-50"
                  >
                    <div
                      class="flex flex-col items-center justify-center pt-5 pb-6"
                    >
                      <svg
                        aria-hidden="true"
                        class="mb-3 h-10 w-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p class="mb-2 text-sm text-gray-500">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                  </label>
                </div>

                <div class="mt-4 flex justify-end gap-3">
                  <Button
                    variant="base"
                    :on-click="closeModalUpload"
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
                    :on-click="openModalUploadSecond"
                  >
                    Save
                  </Button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <TransitionRoot appear :show="isOpenUploadTwo" as="template">
      <Dialog as="div" @close="closeModalUploadSecond" class="relative z-50">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-[960px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="div"
                  class="mb-6 flex items-center justify-between stroke-netral-100"
                >
                  <Title variant="base">Upload variant image</Title>
                  <CloseXIcon
                    @close="closeModalUploadSecond"
                    class="h-6 w-6 cursor-pointer stroke-netral-80 stroke-2"
                  />
                </DialogTitle>

                <div class="flex w-full items-center justify-center">
                  <label
                    for="dropzone-file"
                    class="flex h-96 w-full cursor-pointer gap-4 rounded-lg border-2 border-dashed border-netral-30 bg-gray-50 p-6"
                  >
                    <div class="relative h-40 w-40 rounded-[10px]">
                      <img
                        :src="UploadPhoto1"
                        class="h-full w-full object-cover"
                      />

                      <div
                        class="absolute bottom-2.5 right-2.5 flex items-center gap-1.5"
                      >
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="40"
                            height="40"
                            rx="8"
                            fill="white"
                            fill-opacity="0.5"
                          />
                          <path
                            d="M24.5156 17.3486H29.0156V12.8486"
                            stroke="#3B4453"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.1641 14.1664C14.9301 13.4003 15.8396 12.7926 16.8406 12.378C17.8415 11.9634 18.9143 11.75 19.9977 11.75C21.0811 11.75 22.1539 11.9634 23.1548 12.378C24.1558 12.7926 25.0652 13.4003 25.8313 14.1664L29.0133 17.3484"
                            stroke="#3B4453"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M15.4844 22.6514H10.9844V27.1514"
                            stroke="#3B4453"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M25.8336 25.8333C25.0675 26.5994 24.1581 27.2071 23.1571 27.6217C22.1562 28.0363 21.0834 28.2497 20 28.2497C18.9166 28.2497 17.8438 28.0363 16.8428 27.6217C15.8419 27.2071 14.9324 26.5994 14.1664 25.8333L10.9844 22.6514"
                            stroke="#3B4453"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="40"
                            height="40"
                            rx="8"
                            fill="white"
                            fill-opacity="0.5"
                          />
                          <path
                            d="M28.25 13.25L11.75 13.25"
                            stroke="#FF5630"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M17.75 17.75V23.75"
                            stroke="#FF5630"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M22.25 17.75V23.75"
                            stroke="#FF5630"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M26.75 13.25V27.5C26.75 27.6989 26.671 27.8897 26.5303 28.0303C26.3897 28.171 26.1989 28.25 26 28.25H14C13.8011 28.25 13.6103 28.171 13.4697 28.0303C13.329 27.8897 13.25 27.6989 13.25 27.5V13.25"
                            stroke="#FF5630"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23.75 13.25V11.75C23.75 11.3522 23.592 10.9706 23.3107 10.6893C23.0294 10.408 22.6478 10.25 22.25 10.25H17.75C17.3522 10.25 16.9706 10.408 16.6893 10.6893C16.408 10.9706 16.25 11.3522 16.25 11.75V13.25"
                            stroke="#FF5630"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <div class="relative h-40 w-40 rounded-[10px]">
                      <img
                        :src="UploadPhoto2"
                        class="h-full w-full object-cover"
                      />

                      <div
                        class="absolute bottom-2.5 right-2.5 flex items-center gap-1.5"
                      >
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="40"
                            height="40"
                            rx="8"
                            fill="white"
                            fill-opacity="0.5"
                          />
                          <path
                            d="M24.5156 17.3486H29.0156V12.8486"
                            stroke="#3B4453"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.1641 14.1664C14.9301 13.4003 15.8396 12.7926 16.8406 12.378C17.8415 11.9634 18.9143 11.75 19.9977 11.75C21.0811 11.75 22.1539 11.9634 23.1548 12.378C24.1558 12.7926 25.0652 13.4003 25.8313 14.1664L29.0133 17.3484"
                            stroke="#3B4453"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M15.4844 22.6514H10.9844V27.1514"
                            stroke="#3B4453"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M25.8336 25.8333C25.0675 26.5994 24.1581 27.2071 23.1571 27.6217C22.1562 28.0363 21.0834 28.2497 20 28.2497C18.9166 28.2497 17.8438 28.0363 16.8428 27.6217C15.8419 27.2071 14.9324 26.5994 14.1664 25.8333L10.9844 22.6514"
                            stroke="#3B4453"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="40"
                            height="40"
                            rx="8"
                            fill="white"
                            fill-opacity="0.5"
                          />
                          <path
                            d="M28.25 13.25L11.75 13.25"
                            stroke="#FF5630"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M17.75 17.75V23.75"
                            stroke="#FF5630"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M22.25 17.75V23.75"
                            stroke="#FF5630"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M26.75 13.25V27.5C26.75 27.6989 26.671 27.8897 26.5303 28.0303C26.3897 28.171 26.1989 28.25 26 28.25H14C13.8011 28.25 13.6103 28.171 13.4697 28.0303C13.329 27.8897 13.25 27.6989 13.25 27.5V13.25"
                            stroke="#FF5630"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23.75 13.25V11.75C23.75 11.3522 23.592 10.9706 23.3107 10.6893C23.0294 10.408 22.6478 10.25 22.25 10.25H17.75C17.3522 10.25 16.9706 10.408 16.6893 10.6893C16.408 10.9706 16.25 11.3522 16.25 11.75V13.25"
                            stroke="#FF5630"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <div class="relative h-40 w-40 rounded-[10px]">
                      <img
                        :src="UploadPhoto3"
                        class="h-full w-full object-cover"
                      />

                      <div
                        class="absolute bottom-2.5 right-2.5 flex items-center gap-1.5"
                      >
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="40"
                            height="40"
                            rx="8"
                            fill="white"
                            fill-opacity="0.5"
                          />
                          <path
                            d="M24.5156 17.3486H29.0156V12.8486"
                            stroke="#3B4453"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.1641 14.1664C14.9301 13.4003 15.8396 12.7926 16.8406 12.378C17.8415 11.9634 18.9143 11.75 19.9977 11.75C21.0811 11.75 22.1539 11.9634 23.1548 12.378C24.1558 12.7926 25.0652 13.4003 25.8313 14.1664L29.0133 17.3484"
                            stroke="#3B4453"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M15.4844 22.6514H10.9844V27.1514"
                            stroke="#3B4453"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M25.8336 25.8333C25.0675 26.5994 24.1581 27.2071 23.1571 27.6217C22.1562 28.0363 21.0834 28.2497 20 28.2497C18.9166 28.2497 17.8438 28.0363 16.8428 27.6217C15.8419 27.2071 14.9324 26.5994 14.1664 25.8333L10.9844 22.6514"
                            stroke="#3B4453"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="40"
                            height="40"
                            rx="8"
                            fill="white"
                            fill-opacity="0.5"
                          />
                          <path
                            d="M28.25 13.25L11.75 13.25"
                            stroke="#FF5630"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M17.75 17.75V23.75"
                            stroke="#FF5630"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M22.25 17.75V23.75"
                            stroke="#FF5630"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M26.75 13.25V27.5C26.75 27.6989 26.671 27.8897 26.5303 28.0303C26.3897 28.171 26.1989 28.25 26 28.25H14C13.8011 28.25 13.6103 28.171 13.4697 28.0303C13.329 27.8897 13.25 27.6989 13.25 27.5V13.25"
                            stroke="#FF5630"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23.75 13.25V11.75C23.75 11.3522 23.592 10.9706 23.3107 10.6893C23.0294 10.408 22.6478 10.25 22.25 10.25H17.75C17.3522 10.25 16.9706 10.408 16.6893 10.6893C16.408 10.9706 16.25 11.3522 16.25 11.75V13.25"
                            stroke="#FF5630"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <div
                      class="relative flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-[10px] border-2 border-dashed border-netral-30"
                    >
                      <PlusIcon class="h-5 w-5 stroke-netral-50 stroke-1" />

                      <Para
                        variant="regular"
                        size="md"
                        class="w-20 text-center text-netral-50"
                      >
                        Add more images
                      </Para>
                    </div>
                  </label>
                </div>

                <div class="mt-4 flex justify-end gap-3">
                  <Button
                    variant="base"
                    :on-click="closeModalUploadSecond"
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
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <div v-if="toast" class="relative">
      <Message
        variant="success"
        title="Image has been uploaded"
        description="Lorem ipsum dolor sit amet consectetur. Orci nec leo risus turpis."
        :toast="toast"
        :close-toast="closeToast"
      />
    </div>
    <div class="relative mb-8 flex w-full items-center justify-between">
      <Title variant="base"> Variant </Title>

      <div class="flex items-center gap-3">
        <Button variant="error" size="md" type="outline">
          Delete Variant
        </Button>

        <Button
          variant="primary"
          size="md"
          type="background"
          :icon="true"
          icon-flow="left"
        >
          <template #icon>
            <PlusIcon />
          </template>
          Add Variant
        </Button>
      </div>
    </div>

    <div class="mb-6 overflow-x-auto">
      <table class="w-full table-auto">
        <!-- Table header -->
        <thead
          class="rounded-lg bg-[#fafafa] text-xs font-semibold uppercase text-netral-50"
        >
          <tr>
            <th class="w-px py-5 pl-3 pr-6 text-left">
              <Switch v-model="enabled" class="checkbox">
                <div
                  class="checkbox-wrapper"
                  :class="enabled ? 'active' : 'default'"
                >
                  <Check
                    class="checkbox-icon"
                    :class="enabled ? 'block' : 'hidden'"
                  />
                </div>
              </Switch>
            </th>

            <th class="py-5 px-4 text-left">
              <Para size="md" variant="semibold"> Image </Para>
            </th>

            <th class="max-w-[140px] py-5 px-4 text-left">
              <Para size="md" variant="semibold"> Color </Para>
            </th>

            <th class="max-w-[140px] py-5 px-4 text-left">
              <Para size="md" variant="semibold"> Size </Para>
            </th>

            <th class="max-w-[140px] py-5 px-4 text-left">
              <Para size="md" variant="semibold"> Stock </Para>
            </th>

            <th class="max-w-[140px] py-5 px-4 text-left">
              <Para size="md" variant="semibold"> Sku </Para>
            </th>

            <th class="py-5 px-4 text-left">
              <Para size="md" variant="semibold"> Status </Para>
            </th>

            <th class="py-5 px-4 text-left">
              <Para size="md" variant="semibold"> Action </Para>
            </th>
          </tr>
        </thead>

        <tbody class="w-full capitalize">
          <tr class="tableData">
            <td class="py-5 pl-3 pr-6 text-left">
              <Checkbox />
            </td>

            <td class="py-5 px-4 text-left">
              <button
                @click="openModalUpload"
                class="flex cursor-pointer items-center gap-3"
              >
                <div
                  class="pointer-events-none flex h-full flex-col items-center justify-center gap-2 rounded-[10px] bg-netral-20 stroke-netral-50 px-3 py-6"
                >
                  <UploadSimple class="h-5 w-5 stroke-inherit stroke-2" />
                  <Para
                    variant="medium"
                    size="sm"
                    class="whitespace-nowrap text-primary-main"
                  >
                    Add Image
                  </Para>
                </div>
              </button>
            </td>

            <td class="max-w-[140px] py-5 px-4 text-left">
              <Select :data="colors" />
            </td>
            <td class="max-w-[140px] py-5 px-4 text-left">
              <Select :data="sizes" />
            </td>

            <td class="max-w-[140px] py-5 px-4 text-left">
              <Input label="000" variety="number" />
            </td>

            <td class="max-w-[140px] py-5 px-4 text-left">
              <Input label="000" variety="number" />
            </td>

            <td class="py-5 px-4 text-left">
              <Toggle />
            </td>

            <td class="py-5 px-4 text-left">
              <div class="flex items-center gap-2.5">
                <Button type="outline" variant="error" size="md">
                  <Trash class="h-4 w-4" />
                </Button>
                <Button type="outline" variant="primary" size="md">
                  <Pencil class="h-4 w-4 stroke-primary-main" />
                </Button>
              </div>
            </td>
          </tr>
          <tr class="tableData">
            <td class="py-5 pl-3 pr-6 text-left">
              <Checkbox />
            </td>

            <td class="py-5 px-4 text-left">
              <button class="relative flex cursor-pointer items-center gap-3">
                <div
                  class="pointer-events-none flex h-full flex-col items-center justify-center gap-2 rounded-[10px] bg-netral-20 stroke-netral-50 px-3 py-6"
                >
                  <UploadSimple class="h-5 w-5 stroke-inherit stroke-2" />
                  <Para
                    variant="medium"
                    size="sm"
                    class="whitespace-nowrap text-primary-main"
                  >
                    Add Image
                  </Para>
                </div>
              </button>
            </td>

            <td class="max-w-[140px] py-5 px-4 text-left">
              <Select :data="colors" />
            </td>
            <td class="max-w-[140px] py-5 px-4 text-left">
              <Select :data="sizes" />
            </td>

            <td class="max-w-[140px] py-5 px-4 text-left">
              <Input label="000" variety="number" />
            </td>

            <td class="max-w-[140px] py-5 px-4 text-left">
              <Input label="000" variety="number" />
            </td>

            <td class="py-5 px-4 text-left">
              <Toggle />
            </td>

            <td class="py-5 px-4 text-left">
              <div class="flex items-center gap-2.5">
                <Button type="outline" variant="error" size="md">
                  <Trash class="h-4 w-4" />
                </Button>
                <Button type="outline" variant="primary" size="md">
                  <Pencil class="h-4 w-4 stroke-primary-main" />
                </Button>
              </div>
            </td>
          </tr>
          <tr class="tableData">
            <td class="py-5 pl-3 pr-6 text-left">
              <Checkbox />
            </td>

            <td class="py-5 px-4 text-left">
              <button class="flex cursor-pointer items-center gap-3">
                <div
                  class="pointer-events-none flex h-full flex-col items-center justify-center gap-2 rounded-[10px] bg-netral-20 stroke-netral-50 px-3 py-6"
                >
                  <UploadSimple class="h-5 w-5 stroke-inherit stroke-2" />
                  <Para
                    variant="medium"
                    size="sm"
                    class="whitespace-nowrap text-primary-main"
                  >
                    Add Image
                  </Para>
                </div>
              </button>
            </td>

            <td class="max-w-[140px] py-5 px-4 text-left">
              <Select :data="colors" />
            </td>
            <td class="max-w-[140px] py-5 px-4 text-left">
              <Select :data="sizes" />
            </td>

            <td class="max-w-[140px] py-5 px-4 text-left">
              <Input label="000" variety="number" />
            </td>

            <td class="max-w-[140px] py-5 px-4 text-left">
              <Input label="000" variety="number" />
            </td>

            <td class="py-5 px-4 text-left">
              <Toggle />
            </td>

            <td class="py-5 px-4 text-left">
              <div class="flex items-center gap-2.5">
                <Button type="outline" variant="error" size="md">
                  <Trash class="h-4 w-4" />
                </Button>
                <Button type="outline" variant="primary" size="md">
                  <Pencil class="h-4 w-4 stroke-primary-main" />
                </Button>
              </div>
            </td>
          </tr>
          <tr class="tableData">
            <td class="py-5 pl-3 pr-6 text-left">
              <Checkbox />
            </td>

            <td class="py-5 px-4 text-left">
              <button class="flex cursor-pointer items-center gap-3">
                <div
                  class="pointer-events-none flex h-full flex-col items-center justify-center gap-2 rounded-[10px] bg-netral-20 stroke-netral-50 px-3 py-6"
                >
                  <UploadSimple class="h-5 w-5 stroke-inherit stroke-2" />
                  <Para
                    variant="medium"
                    size="sm"
                    class="whitespace-nowrap text-primary-main"
                  >
                    Add Image
                  </Para>
                </div>
              </button>
            </td>

            <td class="max-w-[140px] py-5 px-4 text-left">
              <Select :data="colors" />
            </td>

            <td class="max-w-[140px] py-5 px-4 text-left">
              <Select :data="sizes" />
            </td>

            <td class="max-w-[140px] py-5 px-4 text-left">
              <Input label="000" variety="number" />
            </td>

            <td class="max-w-[140px] py-5 px-4 text-left">
              <Input label="000" variety="number" />
            </td>

            <td class="py-5 px-4 text-left">
              <Toggle />
            </td>

            <td class="py-5 px-4 text-left">
              <div class="flex items-center gap-2.5">
                <Button type="outline" variant="error" size="md">
                  <Trash class="h-4 w-4" />
                </Button>
                <Button type="outline" variant="primary" size="md">
                  <Pencil class="h-4 w-4 stroke-primary-main" />
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #extend>
      <!-- Action -->
      <PageAction :is-enabled="enabled" />
    </template>
  </BaseLayout>
</template>

<style lang="postcss"></style>
