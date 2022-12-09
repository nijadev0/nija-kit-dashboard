<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

import BaseLayout from '$components/templates/BaseLayout.vue'

import Title from '$components/atoms/Title.vue'
import Button from '$components/atoms/Button.vue'
import Para from '$components/atoms/Para.vue'

import Variants from '$components/moleculs/Table/TableData/Variants.vue'

import PageAction from '$components/organisms/PageAction.vue'
import Message from '$components/organisms/Message.vue'
import UploadList from '$components/organisms/UploadList.vue'
import UploadEmpty from '$components/organisms/UploadEmpty.vue'

import PlusIcon from '$assets/icons/Plus.vue'
import Check from '$assets/icons/Check.vue'

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

    <div class="mb-6">
      <table class="w-full table-auto">
        <thead
          class="VariantsTableHead rounded-lg bg-[#fafafa] text-xs font-semibold uppercase text-netral-50"
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
          <Variants
            v-for="item in [1, 2, 3, 4, 5]"
            :open-modal="openModalUpload"
            :colors="colors"
            :sizes="sizes"
          />
        </tbody>
      </table>
    </div>
    <template #extend>
      <!-- Action -->
      <PageAction :is-enabled="enabled" />
    </template>
  </BaseLayout>
</template>
