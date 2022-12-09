<script lang="ts" setup>
import Button from '$components/atoms/Button.vue'
import Checkbox from '$components/atoms/Checkbox.vue'
import Para from '$components/atoms/Para.vue'
import Toggle from '$components/atoms/Toggle.vue'
import Input from '$components/moleculs/Input.vue'
import Select from '$components/moleculs/Select.vue'

import UploadSimple from '$assets/icons/UploadSimple.vue'

interface VariantsTableData {
  openModal: any | undefined
  colors: any | undefined | null
  sizes: any | undefined | null
}

const { openModal, colors, sizes } = defineProps<VariantsTableData>()
</script>

<template>
  <tr class="VariantsTableData w-full">
    <td class="py-5 pl-3 pr-6 text-left">
      <Checkbox />
    </td>

    <td class="py-5 px-4 text-left">
      <button @click="openModal" class="flex cursor-pointer items-center gap-3">
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

    <td class="min-w-[140px] py-5 px-4 text-left">
      <Select :data="colors" isColor label-tag="Halo Bosque" />
    </td>
    <td class="min-w-[140px] py-5 px-4 text-left">
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
        <Button
          btn-type="button"
          @click="openModal"
          type="outline"
          variant="primary"
          size="md"
        >
          Add image
        </Button>
      </div>
    </td>
  </tr>
</template>
