<script lang="ts" setup>
import Button from '$components/atoms/Button.vue'
import Checkbox from '$components/atoms/Checkbox.vue'
import Toggle from '$components/atoms/Toggle.vue'
import Input from '$components/moleculs/Input.vue'
import Select from '$components/moleculs/Select.vue'

interface VariantsTableData {
  openModal: any | undefined
  colors: any | undefined | null
  sizes: any | undefined | null
}

const { openModal, colors, sizes } = defineProps<VariantsTableData>()
</script>

<template>
  <tr class="VariantsTableData w-full">
    <td class="max-w-[20px] py-5 pl-3 pr-6 text-left">
      <Checkbox />
    </td>

    <td class="max-w-[90px] py-5 px-4 text-left">
      <button @click="openModal" class="flex cursor-pointer items-center gap-3">
        <div
          class="pointer-events-none flex min-h-[86px] min-w-[86px] flex-col items-center justify-center gap-2 rounded-[10px] bg-netral-20 stroke-netral-50 px-3 py-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            class="fill-netral-40"
            viewBox="0 0 256 256"
          >
            <circle cx="100" cy="92" r="12"></circle>
            <path
              d="M208,32H48A16,16,0,0,0,32,48V176h0v32a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-28.7,80a16.1,16.1,0,0,0-22.6,0L112,156.7,91.3,136a16.1,16.1,0,0,0-22.6,0L48,156.7V48H208v92.7Z"
            ></path>
          </svg>
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

    <td class="min-w-[70px] py-5 px-4 text-left">
      <Toggle />
    </td>

    <td class="max-w-[112px] py-5 px-4 text-left">
      <div class="flex items-center gap-2.5">
        <Button
          btn-type="button"
          @click="openModal"
          type="outline"
          variant="primary"
          size="md"
        >
          Add Image
        </Button>
      </div>
    </td>
  </tr>
</template>
