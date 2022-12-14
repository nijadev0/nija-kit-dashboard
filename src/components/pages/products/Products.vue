<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

import BaseLayout from '$components/templates/BaseLayout.vue'

import Title from '$components/atoms/Title.vue'
import Button from '$components/atoms/Button.vue'
import Para from '$components/atoms/Para.vue'

import Paginate from '$components/moleculs/Paginate.vue'
import PageAction from '$components/organisms/PageAction.vue'

import SortAscendingIcon from '$assets/icons/SortAscending.vue'
import FunnelIcon from '$assets/icons/Funnel.vue'
import PlusIcon from '$assets/icons/Plus.vue'
import CheckIcon from '$assets/icons/Check.vue'

import Product1 from '$assets/images/product-5.png'
import Product2 from '$assets/images/product-1.png'
import Product3 from '$assets/images/product-2.png'
import Product4 from '$assets/images/product-3.png'
import Product5 from '$assets/images/product-4.png'
import Checkbox from '$components/atoms/Checkbox.vue'
import Badge from '$components/atoms/Badge.vue'

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
    name: 'Windproof Handbell Oversized Long Coat',
    category: 'Outer',
    status: 'scheduled',
    stock: 738,
    spent: '$178'
  },
  {
    id: '2',
    image: Product3,
    name: "Women's Stripe Sweater",
    category: 'shirt',
    status: 'active',
    stock: 432,
    spent: '$139'
  },
  {
    id: '2',
    image: Product4,
    name: "Women's Turtleneck Sweater",
    category: 'pants',
    status: 'draft',
    stock: 53,
    spent: '$99'
  },
  {
    id: '4',
    image: Product5,
    name: 'One Set - Casual Hoodie with Buttons for Tooddler',
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
    <div
      class="Products relative mb-8 flex w-full items-center justify-between"
    >
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
        <!-- Table Head -->
        <thead class="tableHead w-full">
          <tr
            class="flex w-full items-center justify-between gap-10 rounded-lg bg-[#fafafa] py-4 px-3 uppercase"
          >
            <!-- Checkbox -->
            <th class="checkbox w-full max-w-[20px] pr-6 text-left">
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

            <th class="w-full min-w-[270px] text-left">
              <Para class="text-[#A0A8B0]" variant="semibold" size="md">
                Product
              </Para>
            </th>

            <th class="w-full min-w-[140px] text-left">
              <Para class="text-[#A0A8B0]" variant="semibold" size="md">
                Category
              </Para>
            </th>

            <th class="w-full min-w-[120px] text-left">
              <Para class="text-[#A0A8B0]" variant="semibold" size="md">
                Status
              </Para>
            </th>

            <th class="w-full min-w-[64px] text-left">
              <Para class="text-[#A0A8B0]" variant="semibold" size="md">
                Stock
              </Para>
            </th>

            <th class="w-full min-w-[120px] text-left">
              <Para class="text-[#A0A8B0]" variant="semibold" size="md">
                Price
              </Para>
            </th>

            <th class="w-full max-w-[100px] text-left">
              <Para class="text-[#A0A8B0]" variant="semibold" size="md">
                Action
              </Para>
            </th>
          </tr>
        </thead>

        <!-- Table Data -->
        <tbody class="tableData w-full">
          <div v-for="item in products">
            <tr
              class="flex w-full items-center justify-between gap-10 border-b border-netral-30 py-[26px] px-3"
            >
              <td class="checkbox w-full max-w-[20px] pr-6">
                <Checkbox />
              </td>

              <td class="w-full min-w-[270px]">
                <div class="flex max-w-[270px] items-center gap-3">
                  <img
                    class="max-h-[90px] max-w-[90px]"
                    :src="item.image"
                    alt="Product 1"
                  />
                  <Para size="lg" variant="semibold" class="text-netral-80">
                    {{ item.name }}
                  </Para>
                </div>
              </td>

              <td class="w-full min-w-[140px] text-left">
                <Para size="lg" variant="semibold" class="capitalize">
                  {{ item.category }}
                </Para>
              </td>

              <td class="w-full min-w-[120px]">
                <Badge v-if="item.status === 'active'" variant="success">
                  {{ item.status }}
                </Badge>
                <Badge v-if="item.status === 'scheduled'" variant="info">
                  {{ item.status }}
                </Badge>
                <Badge v-if="item.status === 'draft'" variant="warning">
                  {{ item.status }}
                </Badge>
              </td>

              <td class="w-full min-w-[64px]">
                <Para size="lg" variant="semibold"> {{ item.stock }} </Para>
              </td>

              <td class="w-full min-w-[120px]">
                <Para size="lg" variant="semibold"> {{ item.spent }} </Para>
              </td>

              <td class="w-full max-w-[100px]">
                <button
                  @click="$router.push('/products/detail')"
                  class="font-bold text-primary-main"
                >
                  Detail
                </button>
              </td>
            </tr>
          </div>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <Paginate />

    <template #extend>
      <PageAction
        :isEnabled="enabled"
        label-primary="Delete"
        label-secondary="Draft"
        variant="error"
      />
    </template>
  </BaseLayout>
</template>
