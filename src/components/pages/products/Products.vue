<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

import BaseLayout from '$components/templates/BaseLayout.vue'

import Title from '$components/atoms/Title.vue'
import Button from '$components/atoms/Button.vue'
import Para from '$components/atoms/Para.vue'

import TableDataProduct from '$components/moleculs/Table/TableData/Products.vue'
import Paginate from '$components/moleculs/Paginate.vue'
import PageAction from '$components/organisms/PageAction.vue'

import SortAscendingIcon from '$assets/icons/SortAscending.vue'
import FunnelIcon from '$assets/icons/Funnel.vue'
import PlusIcon from '$assets/icons/Plus.vue'
import CheckIcon from '$assets/icons/Check.vue'

import Product1 from '$assets/images/product-1.png'
import Product2 from '$assets/images/product-2.png'
import Product3 from '$assets/images/product-3.png'
import Product4 from '$assets/images/product-4.png'
import Product5 from '$assets/images/product-5.png'

const products = ref([
  {
    id: '0',
    image: Product1,
    name: 'UA Storm Armour Down 2\.0 Jacket',
    category: 'outer',
    status: 'active',
    stock: 401,
    spent: '$178'
  },
  {
    id: '1',
    image: Product2,
    name: 'T-Shirt Oversize Cielo Basil',
    category: 'jacket',
    status: 'scheduled',
    stock: 738,
    spent: '$178'
  },
  {
    id: '2',
    image: Product3,
    name: 'T-Shirt Thompson Black',
    category: 'shirt',
    status: 'active',
    stock: 432,
    spent: '$139'
  },
  {
    id: '2',
    image: Product4,
    name: 'Oversize Yucatan Glacier Lake',
    category: 'pants',
    status: 'draft',
    stock: 53,
    spent: '$99'
  },
  {
    id: '4',
    image: Product5,
    name: 'T-Shirt Project Summer Black',
    category: 'shirt',
    status: 'active',
    stock: 32,
    spent: '$178'
  }
])

let enabled = ref(false)
</script>

<template>
  <BaseLayout title="Products">
    <div class="relative mb-8 flex w-full items-center justify-between">
      <Title variant="base"> List Products </Title>
      <div class="flex items-center gap-3">
        <Button
          variant="default"
          size="md"
          type="background"
          :icon="true"
          icon-flow="right"
        >
          <template #icon>
            <SortAscendingIcon />
          </template>
          Sort
        </Button>

        <Button
          variant="default"
          size="md"
          type="background"
          :icon="true"
          icon-flow="right"
        >
          <template #icon>
            <FunnelIcon />
          </template>
          Filters
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
            <PlusIcon class="stroke-white" />
          </template>
          Add Product
        </Button>
      </div>
    </div>

    <!-- Table -->
    <div class="mb-6 overflow-x-auto">
      <table class="w-full table-auto">
        <!-- Table header -->
        <thead
          class="rounded-lg bg-[#fafafa] text-xs font-semibold uppercase text-netral-50"
        >
          <tr>
            <th class="w-5 py-5 pl-3 pr-6 text-left">
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
            <th class="w-[270px] py-5 text-left">
              <Para size="md" variant="semibold"> Product </Para>
            </th>
            <th class="w-[140px] py-5 text-left">
              <Para size="md" variant="semibold"> Category </Para>
            </th>
            <th class="w-[120px] py-5 text-left">
              <Para size="md" variant="semibold"> Status </Para>
            </th>
            <th class="w-16 py-5 text-left">
              <Para size="md" variant="semibold"> Stock </Para>
            </th>
            <th class="w-[120px] py-5 text-left">
              <Para size="md" variant="semibold"> Price </Para>
            </th>
            <th class="w-[100px] py-5 text-left">
              <Para size="md" variant="semibold"> Action </Para>
            </th>
          </tr>
        </thead>
        <tbody class="w-full capitalize">
          <TableDataProduct
            v-for="{
              id,
              category,
              name,
              image,
              spent,
              status,
              stock
            } in products"
            :key="id"
            :name="name"
            :category="category"
            :image="image"
            :spent="spent"
            :status="status"
            :stock="stock"
          />
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <Paginate />

    <template #extend>
      <PageAction :isEnabled="enabled" variant="error" />
    </template>
  </BaseLayout>
</template>
