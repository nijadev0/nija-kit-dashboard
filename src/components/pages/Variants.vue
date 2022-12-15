<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

import BaseLayout from '$components/templates/BaseLayout.vue'

import Title from '$components/atoms/Title.vue'
import Button from '$components/atoms/Button.vue'
import Para from '$components/atoms/Para.vue'

import PageAction from '$components/organisms/PageAction.vue'
import Message from '$components/organisms/Message.vue'
import UploadList from '$components/organisms/UploadList.vue'
import UploadEmpty from '$components/organisms/UploadEmpty.vue'

import PlusIcon from '$assets/icons/Plus.vue'
import Toggle from '$components/atoms/Toggle.vue'
import Input from '$components/moleculs/Input.vue'
import Select from '$components/moleculs/Select.vue'

import Product1 from '$assets/images/product-1.png'
import Checkbox from '$components/atoms/Checkbox.vue'
import Check from '$assets/icons/Check.vue'
import Alert from '$components/organisms/Alert.vue'

const colors = [
  { id: 1, name: 'Select', color: 'bg-[#A0A8B0]', unavailable: true },
  { id: 2, name: 'Grey', color: 'bg-[#A0A8B0]', unavailable: false },
  { id: 3, name: 'Cream', color: 'bg-[#DCD5C3]', unavailable: false },
  { id: 4, name: 'Pink', color: 'bg-[#EBC0BA]', unavailable: false },
  { id: 5, name: 'Brown', color: 'bg-[#DAD5C4]', unavailable: false }
]

const sizes = [
  { id: 1, name: 'Select', unavailable: true },
  { id: 2, name: 'XS', unavailable: false },
  { id: 3, name: 'SM', unavailable: false },
  { id: 4, name: 'M', unavailable: false },
  { id: 5, name: 'L', unavailable: false },
  { id: 5, name: 'XL', unavailable: false }
]

const isOpenUploadOne = ref(false)
const isOpenUploadTwo = ref(false)
const isOpenAlertDelete = ref(false)
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
  isOpenUploadOne.value = false
}

const openModalUpload = () => {
  isOpenUploadOne.value = true
}

const closeModalUploadSecond = () => {
  isOpenUploadTwo.value = false
}

const openModalUploadSecond = () => {
  closeModalUpload()
  isOpenUploadTwo.value = true
}

const openAlertDelete = () => {
  isOpenAlertDelete.value = true
}

const closeAlertDelete = () => {
  isOpenAlertDelete.value = false
}
</script>

<template>
  <BaseLayout title="Variants">
    <UploadEmpty
      title="Upload variant image"
      :is-open="isOpenUploadOne"
      :close-modal="closeModalUpload"
      :next-modal="openModalUploadSecond"
    />
    <UploadList
      title="Upload variant image"
      :is-open="isOpenUploadTwo"
      :close-modal="closeModalUploadSecond"
      :open-toast="openToast"
    />

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
        <Button
          btn-type="button"
          :on-click="openAlertDelete"
          v-if="enabled"
          variant="error"
          size="md"
          type="outline"
        >
          Delete Variant
        </Button>

        <Button
          btn-type="button"
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

    <div class="mb-6 overflow-x-visible">
      <table class="w-full table-auto">
        <!-- Table Head -->
        <thead class="tableHead w-full">
          <tr
            class="flex w-full items-center justify-between gap-8 rounded-lg bg-[#fafafa] py-4 px-3 uppercase"
          >
            <!-- Checkbox -->
            <th class="checkbox w-full max-w-[20px] pr-6 text-left">
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

            <!-- Image -->
            <th class="w-full max-w-[90px] text-left">
              <Para class="text-[#A0A8B0]" variant="semibold" size="md">
                Image
              </Para>
            </th>

            <th class="w-full min-w-[140px] text-left">
              <Para class="text-[#A0A8B0]" variant="semibold" size="md">
                Color
              </Para>
            </th>

            <th class="w-full min-w-[140px] text-left">
              <Para class="text-[#A0A8B0]" variant="semibold" size="md">
                Size
              </Para>
            </th>

            <th class="w-full min-w-[140px] text-left">
              <Para class="text-[#A0A8B0]" variant="semibold" size="md">
                Stock
              </Para>
            </th>

            <th class="w-full min-w-[140px] text-left">
              <Para class="text-[#A0A8B0]" variant="semibold" size="md">
                SKU
              </Para>
            </th>

            <th class="w-full max-w-[70px] text-left">
              <Para class="text-[#A0A8B0]" variant="semibold" size="md">
                Status
              </Para>
            </th>

            <th class="w-full max-w-[112px] text-left">
              <Para class="text-[#A0A8B0]" variant="semibold" size="md">
                Action
              </Para>
            </th>
          </tr>
        </thead>

        <!-- Table Data -->
        <tbody class="tableData w-full">
          <div v-for="item in [1, 2, 3, 4]">
            <tr
              class="flex items-center justify-between gap-8 border-b border-netral-30 py-[26px] px-3"
            >
              <td class="checkbox w-full max-w-[20px] pr-6">
                <Checkbox />
              </td>

              <td class="h-full max-h-[90px] w-full max-w-[90px]">
                <img class="max-w-[90px]" :src="Product1" alt="Product 1" />
              </td>

              <td class="w-full min-w-[140px]">
                <Select :data="colors" isColor label-tag="Halo Bosque" />
              </td>

              <td class="w-full min-w-[140px]">
                <Select :data="sizes" />
              </td>

              <td class="w-full min-w-[140px]">
                <Input label="000" variety="number" />
              </td>

              <td class="w-full min-w-[140px]">
                <Input label="000" variety="number" />
              </td>

              <td class="w-full max-w-[70px]">
                <Toggle />
              </td>

              <td class="w-full max-w-[112px]">
                <div class="flex items-center gap-2.5">
                  <!-- @click="openModal" -->
                  <Button
                    btn-type="button"
                    type="outline"
                    variant="primary"
                    size="md"
                    :on-click="openModalUpload"
                  >
                    Add Image
                  </Button>
                </div>
              </td>
            </tr>
          </div>
        </tbody>
      </table>
    </div>

    <template #extend>
      <!-- Action -->
      <PageAction
        :is-enabled="enabled"
        variant="primary"
        hide-secondary
        label-primary="Save"
        label-secondary="Discard"
      />

      <!-- Alert for Delete -->

      <Alert
        variant="error"
        :isOpen="isOpenAlertDelete"
        :closeModal="closeAlertDelete"
        title="Delete Product"
        description="Are you sure to delete your product? You won't get your data back once it deleted"
      />
    </template>
  </BaseLayout>
</template>
