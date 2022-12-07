<script setup lang="ts">
import { ref } from 'vue'

import BaseLayout from '$components/templates/BaseLayout.vue'

import Para from '$components/atoms/Para.vue'
import Title from '$components/atoms/Title.vue'
import Toggle from '$components/atoms/Toggle.vue'
import Button from '$components/atoms/Button.vue'
import Divider from '$components/atoms/Divider.vue'

import Input from '$components/moleculs/Input.vue'
import TextArea from '$components/moleculs/TextArea.vue'
import Select from '$components/moleculs/Select.vue'

import UploadSimpleIcon from '$assets/icons/UploadSimple.vue'
import ChecksIcon from '$assets/icons/Checks.vue'
import PercentIcon from '$assets/icons/Percent.vue'
import PageAction from '$components/organisms/PageAction.vue'

const categories = [
  { id: 1, name: 'Select Category', unavailable: true },
  { id: 2, name: 'T-Shirt', unavailable: false },
  { id: 3, name: 'Unisex', unavailable: false },
  { id: 4, name: 'Jacket', unavailable: false },
  { id: 5, name: 'Jeans', unavailable: false }
]
const genders = [
  { id: 1, name: 'Select Genders', unavailable: true },
  { id: 2, name: 'Male', unavailable: true },
  { id: 3, name: 'Female', unavailable: true }
]

let isEnabled = ref(true)
</script>

<template>
  <BaseLayout title="Products">
    <Title variant="base"> Product Information </Title>
    <Divider variant="addProducts" />
    <div class="flex items-start justify-between">
      <div class="max-w-[280px]">
        <Para size="lg" variant="semibold" class="mb-2"> Product Name </Para>
        <Para size="md" variant="regular" class="text-netral-50">
          Do not exceed 20 characters when entering the product name.
        </Para>
      </div>

      <div class="w-full max-w-[720px]">
        <Input variety="text" label="Enter product name" />
      </div>
    </div>

    <Divider variant="addProducts" />

    <div class="flex items-start justify-between">
      <div class="max-w-[280px]">
        <Para size="lg" variant="semibold" class="mb-2"> Description </Para>
        <Para size="md" variant="regular" class="text-netral-50">
          Lorem ipsum dolor sit amet consectetur. Sed quam semper nibh
          fermentum.
        </Para>
      </div>

      <TextArea class="max-w-[720px]" label="Description" />
    </div>

    <Divider variant="addProducts" />

    <div class="flex items-start justify-between">
      <div class="max-w-[280px]">
        <Para size="lg" variant="semibold" class="mb-2"> Category </Para>
        <Para size="md" variant="regular" class="text-netral-50">
          Lorem ipsum dolor sit amet consectetur. Sed quam semper nibh
          fermentum.
        </Para>
      </div>

      <div class="w-full max-w-[720px]">
        <Select :data="categories" />
      </div>
    </div>

    <Divider variant="addProducts" />

    <div class="flex items-start justify-between">
      <div class="max-w-[280px]">
        <Para size="lg" variant="semibold" class="mb-2"> Gender </Para>
        <Para size="md" variant="regular" class="text-netral-50">
          Lorem ipsum dolor sit amet consectetur. Sed quam semper nibh fermentum
          quis pretium tristique.
        </Para>
      </div>
      <div class="w-full max-w-[720px]">
        <Select :data="genders" />
      </div>
    </div>

    <Divider variant="addProducts" />

    <div class="flex items-start justify-between">
      <div class="max-w-[280px]">
        <Para size="lg" variant="semibold" class="mb-2"> Weight </Para>
        <Para size="md" variant="regular" class="text-netral-50">
          Lorem ipsum dolor sit amet consectetur. Sed quam semper nibh fermentum
          quis pretium tristique.
        </Para>
      </div>

      <div class="w-full max-w-[720px]">
        <Input label="000" variety="number" icon variant="weight" />
      </div>
    </div>

    <Divider variant="addProducts" />

    <div class="flex items-start justify-between">
      <div class="max-w-[280px]">
        <Para size="lg" variant="semibold" class="mb-2"> Status </Para>
        <Para size="md" variant="regular" class="text-netral-50">
          Lorem ipsum dolor sit amet consectetur. Sed quam semper nibh fermentum
          quis pretium tristique.
        </Para>
      </div>
      <div class="w-full max-w-[720px]">
        <Toggle />
      </div>
    </div>

    <Divider variant="addProducts" />

    <div class="flex items-start justify-between">
      <div class="max-w-[280px]">
        <Para size="lg" variant="semibold" class="mb-2"> Photo Product </Para>
        <Para size="md" variant="regular" class="text-netral-50">
          Lorem ipsum dolor sit amet consectetur. Sed quam semper nibh fermentum
          quis pretium tristique.
        </Para>
      </div>

      <div class="flex items-center gap-[26px]">
        <div
          class="flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-netral-30"
        >
          <UploadSimpleIcon
            class="max-h-[2rem] max-w-[2rem] stroke-netral-40 stroke-2"
          />
          <Button type="background" variant="primary" size="sm">
            Add Image
          </Button>
          <Para
            size="sm"
            variant="regular"
            class="max-w-[118px] text-center capitalize text-netral-50"
          >
            or drop image to upload
          </Para>
        </div>

        <div
          class="flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-netral-30"
        >
          <UploadSimpleIcon
            class="max-h-[2rem] max-w-[2rem] stroke-netral-40 stroke-2"
          />
          <Button type="background" variant="primary" size="sm">
            Add Image
          </Button>
          <Para
            size="sm"
            variant="regular"
            class="max-w-[118px] text-center capitalize text-netral-50"
            >or drop image to upload</Para
          >
        </div>
        <div
          class="flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-netral-30"
        >
          <UploadSimpleIcon
            class="max-h-[2rem] max-w-[2rem] stroke-netral-40 stroke-2"
          />
          <Button type="background" variant="primary" size="sm">
            Add Image
          </Button>
          <Para
            size="sm"
            variant="regular"
            class="max-w-[118px] text-center capitalize text-netral-50"
            >or drop image to upload</Para
          >
        </div>
        <div
          class="flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-netral-30"
        >
          <UploadSimpleIcon
            class="max-h-[2rem] max-w-[2rem] stroke-netral-40 stroke-2"
          />
          <Button type="background" variant="primary" size="sm">
            Add Image
          </Button>
          <Para
            size="sm"
            variant="regular"
            class="max-w-[118px] text-center capitalize text-netral-50"
            >or drop image to upload</Para
          >
        </div>
      </div>
    </div>

    <template #layout>
      <section class="min-h-[428px] w-full rounded-[10px] bg-white p-6">
        <Title variant="base"> Price </Title>

        <Divider variant="addProducts" />

        <div class="flex items-start justify-between">
          <div class="max-w-[280px]">
            <Para size="lg" variant="semibold" class="mb-2"> Price </Para>
          </div>

          <div class="w-full max-w-[720px]">
            <Input label="Rp. 0,-" icon variant="price" />
          </div>
        </div>

        <Divider variant="addProducts" />

        <div class="flex items-start justify-between">
          <div class="max-w-[280px]">
            <Para size="lg" variant="semibold" class="mb-2">
              Discount Type
            </Para>
            <Para size="md" variant="regular" class="text-netral-50">
              Lorem ipsum dolor sit amet consectetur. Sed quam semper nibh
              fermentum.
            </Para>
          </div>
        </div>

        <Divider variant="addProducts" />

        <div class="flex items-start justify-between">
          <div class="max-w-[280px]">
            <Para size="lg" variant="semibold" class="mb-2"> Price </Para>
            <Para size="md" variant="regular" class="text-netral-50">
              Lorem ipsum dolor sit amet consectetur. Sed quam semper nibh
              fermentum quis pretium tristique.
            </Para>
          </div>

          <div class="relative w-full max-w-[720px]">
            <input
              class="w-full rounded-lg border border-netral-30 p-3.5 pl-12 shadow-input outline-none focus-within:border focus-within:border-primary-main"
              placeholder="Enter nominal discount"
            />
            <div
              class="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md bg-netral-20 text-center text-netral-80"
            >
              <PercentIcon />
            </div>
          </div>
        </div>
      </section>
    </template>

    <template #extend>
      <PageAction :is-enabled="isEnabled" variant="primary" href="/variants" />
    </template>
  </BaseLayout>
</template>
