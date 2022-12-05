<script setup lang="ts">
import { ref } from 'vue'
import { Switch, TransitionRoot, TransitionChild } from '@headlessui/vue'

import BaseLayout from '$components/templates/BaseLayout.vue'

import Title from '$components/atoms/Title.vue'
import Button from '$components/atoms/Button.vue'
import Para from '$components/atoms/Para.vue'
import Pagination from '$components/atoms/Pagination.vue'

import TableDataProduct from '$components/moleculs/TableData/Products.vue'

import Alert from '$components/organisms/Alert.vue'

import SortAscendingIcon from '$assets/icons/SortAscending.vue'
import FunnelIcon from '$assets/icons/Funnel.vue'
import PlusIcon from '$assets/icons/Plus.vue'
import ChecksIcon from '$assets/icons/Checks.vue'
import CheckIcon from '$assets/icons/Check.vue'
import CaretLeftIcon from '$assets/icons/CaretLeft.vue'
import CaretRightIcon from '$assets/icons/CaretRight.vue'

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

const enabled = ref(true)
const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}

function openModal() {
  isOpen.value = true
}
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
            <PlusIcon />
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
    <div class="flex w-full items-center justify-between">
      <Para size="md" variant="medium" class="text-netral-50">Page 1 of 2</Para>
      <div>
        <Pagination variant="base">
          <CaretLeftIcon />
        </Pagination>
        <Pagination variant="primary">1</Pagination>
        <Pagination variant="base">2</Pagination>
        <Pagination variant="base">3</Pagination>
        <Pagination variant="base">4</Pagination>
        <Pagination variant="base">5</Pagination>
        <Pagination variant="base">...</Pagination>
        <Pagination variant="base">10</Pagination>
        <Pagination variant="base">
          <CaretRightIcon />
        </Pagination>
      </div>
    </div>

    <template #extend>
      <!-- Action -->
      <div class="relative">
        <TransitionRoot appear :show="enabled" as="template">
          <TransitionChild
            as="template"
            enter="duration-300 ease-in"
            enter-from="-bottom-40 opacity-0"
            enter-to="bottom-0 opacity-100"
            leave="duration-300 ease-out"
            leave-from="opacity-100 bottom-0"
            leave-to="opacity-0 -bottom-80"
          >
            <div class="pageAction">
              <div class="pageAction_status">
                <ChecksIcon />
                <span class="pageAction_status-text">
                  2 products selected
                </span>
              </div>

              <div class="pageAction_cta">
                <Button
                  btn-type="button"
                  type="outline"
                  variant="primary"
                  size="md"
                >
                  Draft
                </Button>

                <Alert
                  variant="error"
                  :isOpen="isOpen"
                  :closeModal="closeModal"
                  title="Delete Product"
                  description="Are you sure to delete your product? You won't get your data back once it deleted"
                />

                <Button
                  type="background"
                  btnType="button"
                  variant="error"
                  size="md"
                  @todo-click="openModal"
                >
                  Delete
                </Button>
              </div>
            </div>
          </TransitionChild>
        </TransitionRoot>
      </div>
    </template>
  </BaseLayout>
</template>

<style lang="postcss">
.pageAction {
  @apply relative flex items-center justify-between rounded-[10px] border border-netral-30 bg-white px-6 py-4 shadow-extend;

  &_status {
    @apply flex items-center gap-2;

    &-text {
      @apply text-base font-semibold text-netral-50;
    }
  }

  &_cta {
    @apply flex items-center gap-2;
  }
}

.checkbox {
  @apply flex items-center gap-2 outline-none;

  &-wrapper {
    @apply relative flex h-5 w-5 items-center justify-between gap-2.5 rounded-md border outline-none;

    &.active {
      @apply border-primary-border bg-primary-main;
    }

    &.default {
      @apply border-netral-60;
    }
  }

  &-icon {
    @apply absolute z-10 h-full w-full;
  }

  &-text {
    @apply text-netral-100;
  }
}
</style>
