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

const enabled = ref(false)

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

const openModal = () => {
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}

const isOpenModalUpload = ref(false)

const openModalUpload = () => {
  isOpen.value = true
}

const closeModalUpload = () => {
  isOpen.value = false
}
</script>

<template>
  <BaseLayout title="Variants">
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-50">
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
                  class="mb-6 stroke-netral-100 flex items-center justify-between"
                >
                  <Title variant="base">Upload variant image</Title>
                  <CloseXIcon
                    @close="closeModal"
                    class="w-6 h-6 stroke-2 stroke-netral-80 cursor-pointer"
                  />
                </DialogTitle>

                <div class="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:border-gray-500"
                  >
                    <div
                      class="flex flex-col items-center justify-center pt-5 pb-6"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-10 h-10 mb-3 text-gray-400"
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
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <div class="mb-8 flex items-center justify-between w-full relative">
      <Title variant="base"> Variant </Title>

      <div class="flex items-center gap-3">
        <Button variant="error" size="md" type="outline">
          Delete Variant
        </Button>

        <Button
          href="/products/add"
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

    <div class="overflow-x-auto mb-6">
      <table class="table-auto w-full">
        <!-- Table header -->
        <thead
          class="text-xs bg-[#fafafa] text-netral-50 rounded-lg font-semibold uppercase"
        >
          <tr>
            <th class="py-5 text-left w-px pl-3 pr-6">
              <Switch v-model="enabled" class="checkbox">
                <div
                  class="checkbox-wrapper"
                  :class="enabled ? 'active' : 'default'"
                >
                  <CheckIcon
                    class="checkbox-icon"
                    :class="enabled ? 'block' : 'hidden'"
                  />
                </div>
              </Switch>
            </th>

            <th class="py-5 px-4 text-left">
              <Para size="md" variant="semibold"> Image </Para>
            </th>

            <th class="py-5 px-4 max-w-[140px] text-left">
              <Para size="md" variant="semibold"> Color </Para>
            </th>

            <th class="py-5 px-4 max-w-[140px] text-left">
              <Para size="md" variant="semibold"> Size </Para>
            </th>

            <th class="py-5 px-4 max-w-[140px] text-left">
              <Para size="md" variant="semibold"> Stock </Para>
            </th>

            <th class="py-5 px-4 max-w-[140px] text-left">
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

        <tr class="tableData">
          <td class="pl-3 pr-6 py-5 text-left">
            <Checkbox />
          </td>

          <td class="py-5 px-4 text-left">
            <button
              @click="openModalUpload"
              class="flex items-center gap-3 cursor-pointer"
            >
              <div
                class="pointer-events-none flex flex-col gap-2 rounded-[10px] px-3 py-6 items-center justify-center stroke-netral-50 h-full bg-netral-20"
              >
                <UploadSimple class="w-5 h-5 stroke-2 stroke-inherit" />
                <Para
                  variant="medium"
                  size="sm"
                  class="text-primary-main whitespace-nowrap"
                >
                  Add Image
                </Para>
              </div>
            </button>
          </td>

          <td class="py-5 px-4 max-w-[140px] text-left">
            <Select :data="colors" />
          </td>
          <td class="py-5 px-4 max-w-[140px] text-left">
            <Select :data="sizes" />
          </td>

          <td class="py-5 px-4 max-w-[140px] text-left">
            <Input label="000" variety="number" />
          </td>

          <td class="py-5 px-4 max-w-[140px] text-left">
            <Input label="000" variety="number" />
          </td>

          <td class="py-5 px-4 text-left">
            <Toggle />
          </td>

          <td class="py-5 px-4 text-left">
            <div class="flex items-center gap-2.5">
              <Button type="outline" variant="error" size="md">
                <Trash class="w-4 h-4" />
              </Button>
              <Button type="outline" variant="primary" size="md">
                <Pencil class="w-4 h-4" />
              </Button>
            </div>
          </td>
        </tr>
        <tr class="tableData">
          <td class="pl-3 pr-6 py-5 text-left">
            <Checkbox />
          </td>

          <td class="py-5 px-4 text-left">
            <button class="relative flex items-center gap-3 cursor-pointer">
              <div
                class="pointer-events-none flex flex-col gap-2 rounded-[10px] px-3 py-6 items-center justify-center stroke-netral-50 h-full bg-netral-20"
              >
                <UploadSimple class="w-5 h-5 stroke-2 stroke-inherit" />
                <Para
                  variant="medium"
                  size="sm"
                  class="text-primary-main whitespace-nowrap"
                >
                  Add Image
                </Para>
              </div>
            </button>
          </td>

          <td class="py-5 px-4 max-w-[140px] text-left">
            <Select :data="colors" />
          </td>
          <td class="py-5 px-4 max-w-[140px] text-left">
            <Select :data="sizes" />
          </td>

          <td class="py-5 px-4 max-w-[140px] text-left">
            <Input label="000" variety="number" />
          </td>

          <td class="py-5 px-4 max-w-[140px] text-left">
            <Input label="000" variety="number" />
          </td>

          <td class="py-5 px-4 text-left">
            <Toggle />
          </td>

          <td class="py-5 px-4 text-left">
            <div class="flex items-center gap-2.5">
              <Button type="outline" variant="error" size="md">
                <Trash class="w-4 h-4" />
              </Button>
              <Button type="outline" variant="primary" size="md">
                <Pencil class="w-4 h-4" />
              </Button>
            </div>
          </td>
        </tr>
        <tr class="tableData">
          <td class="pl-3 pr-6 py-5 text-left">
            <Checkbox />
          </td>

          <td class="py-5 px-4 text-left">
            <button class="flex items-center gap-3 cursor-pointer">
              <div
                class="pointer-events-none flex flex-col gap-2 rounded-[10px] px-3 py-6 items-center justify-center stroke-netral-50 h-full bg-netral-20"
              >
                <UploadSimple class="w-5 h-5 stroke-2 stroke-inherit" />
                <Para
                  variant="medium"
                  size="sm"
                  class="text-primary-main whitespace-nowrap"
                >
                  Add Image
                </Para>
              </div>
            </button>
          </td>

          <td class="py-5 px-4 max-w-[140px] text-left">
            <Select :data="colors" />
          </td>
          <td class="py-5 px-4 max-w-[140px] text-left">
            <Select :data="sizes" />
          </td>

          <td class="py-5 px-4 max-w-[140px] text-left">
            <Input label="000" variety="number" />
          </td>

          <td class="py-5 px-4 max-w-[140px] text-left">
            <Input label="000" variety="number" />
          </td>

          <td class="py-5 px-4 text-left">
            <Toggle />
          </td>

          <td class="py-5 px-4 text-left">
            <div class="flex items-center gap-2.5">
              <Button type="outline" variant="error" size="md">
                <Trash class="w-4 h-4" />
              </Button>
              <Button type="outline" variant="primary" size="md">
                <Pencil class="w-4 h-4" />
              </Button>
            </div>
          </td>
        </tr>
        <tr class="tableData">
          <td class="pl-3 pr-6 py-5 text-left">
            <Checkbox />
          </td>

          <td class="py-5 px-4 text-left">
            <button class="flex items-center gap-3 cursor-pointer">
              <div
                class="pointer-events-none flex flex-col gap-2 rounded-[10px] px-3 py-6 items-center justify-center stroke-netral-50 h-full bg-netral-20"
              >
                <UploadSimple class="w-5 h-5 stroke-2 stroke-inherit" />
                <Para
                  variant="medium"
                  size="sm"
                  class="text-primary-main whitespace-nowrap"
                >
                  Add Image
                </Para>
              </div>
            </button>
          </td>

          <td class="py-5 px-4 max-w-[140px] text-left">
            <Select :data="colors" />
          </td>

          <td class="py-5 px-4 max-w-[140px] text-left">
            <Select :data="sizes" />
          </td>

          <td class="py-5 px-4 max-w-[140px] text-left">
            <Input label="000" variety="number" />
          </td>

          <td class="py-5 px-4 max-w-[140px] text-left">
            <Input label="000" variety="number" />
          </td>

          <td class="py-5 px-4 text-left">
            <Toggle />
          </td>

          <td class="py-5 px-4 text-left">
            <div class="flex items-center gap-2.5">
              <Button type="outline" variant="error" size="md">
                <Trash class="w-4 h-4" />
              </Button>
              <Button type="outline" variant="primary" size="md">
                <Pencil class="w-4 h-4" />
              </Button>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <template #extend>
      <!-- Action -->
      <div class="relative">
        <div class="pageAction">
          <div class="pageAction_status">
            <ChecksIcon />
            <span class="pageAction_status-text"> Last saved </span>
            <span class="text-sm font-semibold text-netral-80 leading-[1.43]">
              Nov 9, 2022 &mdash; 05.09 PM
            </span>
          </div>

          <div class="pageAction_cta">
            <Button type="background" variant="base" size="md">Back</Button>

            <Alert
              variant="error"
              :isOpen="isOpen"
              :closeModal="closeModal"
              title="Delete Product"
              description="Are you sure to delete your product? You won't get your data back once it deleted"
            />

            <Button
              btn-type="button"
              type="background"
              variant="primary"
              size="md"
              :todo-click="openModal"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<style lang="postcss"></style>
