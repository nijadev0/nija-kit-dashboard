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
import Alert from '$components/organisms/Alert.vue'

import UploadSimpleIcon from '$assets/icons/UploadSimple.vue'
import ChecksIcon from '$assets/icons/Checks.vue'
import PercentIcon from '$assets/icons/Percent.vue'

const isOpen = ref(false)

const closeModal = () => {
  isOpen.value = false
}
</script>

<template>
  <BaseLayout title="Categories">
    <Title variant="base"> Add Category </Title>

    <Divider variant="addProducts" />

    <!-- Product Name: Input -->
    <div class="flex items-start justify-between">
      <div class="max-w-[280px]">
        <Para size="lg" variant="semibold" class="mb-2"> Category Name </Para>
        <Para size="md" variant="regular" class="text-netral-50">
          Do not exceed 20 characters when entering the product name.
        </Para>
      </div>

      <div class="w-full max-w-[720px]">
        <Input variety="text" label="Enter product name" />
      </div>
    </div>

    <Divider variant="addProducts" />

    <!-- Description: TextArea -->
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

    <!-- Status: Toggle -->
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

    <!-- Upload Image : Button -->
    <div class="flex items-start justify-between">
      <div class="max-w-[280px]">
        <Para size="lg" variant="semibold" class="mb-2"> Thumbnail </Para>
        <Para size="md" variant="regular" class="text-netral-50">
          Lorem ipsum dolor sit amet consectetur. Sed quam semper nibh fermentum
          quis pretium tristique.
        </Para>
      </div>

      <div
        class="flex w-full max-w-[720px] items-center justify-start gap-[26px]"
      >
        <div
          class="flex h-[216px] w-[500px] flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-netral-30 p-4 pt-4"
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
      <!-- Action -->
      <div class="relative">
        <div class="pageAction">
          <div class="pageAction_status">
            <ChecksIcon />
            <span class="pageAction_status-text"> Last saved </span>
            <span class="text-sm font-semibold leading-[1.43] text-netral-80">
              Nov 9, 2022 &mdash; 05.09 PM
            </span>
          </div>

          <div class="pageAction_cta">
            <Button type="background" variant="base" size="md">Cancel</Button>

            <Alert
              variant="error"
              :isOpen="isOpen"
              :closeModal="closeModal"
              title="Delete Product"
              description="Are you sure to delete your product? You won't get your data back once it deleted"
            />

            <Button
              btn-type="link"
              type="background"
              variant="primary"
              size="md"
              href="/variants"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>
