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
import PageAction from '$components/organisms/PageAction.vue'

const isOpen = ref(false)

const closeModal = () => {
  isOpen.value = false
}

const isEnabled = ref(true)
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
          Set a description on category to detail your category and better
          visibility
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
          Set a status for category to determine whether your category is
          displayed or not
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
          Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image
          files are accepted. Recommended minimum width 1080px X 1080px, with a
          max size of 5MB
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

    <template #extend>
      <!-- Action -->
      <!-- <PageAction
        variant="primary"
        :is-enabled="true"
        hide-secondary
        label-primary="Save"
        label-secondary="Cancel"
      /> -->
      <PageAction
        :is-enabled="isEnabled"
        variant="primary"
        label-primary="Save"
        label-secondary="Discard"
        :hide-secondary="false"
      />
    </template>
  </BaseLayout>
</template>
