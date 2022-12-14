<script lang="ts" setup>
import Checkbox from '$components/atoms/Checkbox.vue'
import Para from '$components/atoms/Para.vue'
import BaseLayout from '$components/templates/BaseLayout.vue'

import Product1 from '$assets/images/product-1.png'
import Select from '$components/moleculs/Select.vue'
import Input from '$components/moleculs/Input.vue'
import Button from '$components/atoms/Button.vue'
import Toggle from '$components/atoms/Toggle.vue'

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
</script>

<template>
  <BaseLayout title="Sandbox">
    <div class="overflow-x-auto">
      <table class="w-full table-auto">
        <!-- Table Head -->
        <thead class="tableHead w-full">
          <tr
            class="flex w-full items-center justify-between gap-8 rounded-lg bg-[#fafafa] py-4 px-3 uppercase"
          >
            <!-- Checkbox -->
            <th class="checkbox w-full max-w-[20px] pr-6 text-left">
              <Checkbox />
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
  </BaseLayout>
</template>
