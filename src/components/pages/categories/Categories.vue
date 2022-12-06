<script setup lang="ts">
import { ref } from 'vue'
import { TabGroup, TabList, TabPanels, TabPanel, Tab } from '@headlessui/vue'

import BaseLayout from '$components/templates/BaseLayout.vue'

import Title from '$components/atoms/Title.vue'
import Button from '$components/atoms/Button.vue'
import Para from '$components/atoms/Para.vue'
import Checkbox from '$components/atoms/Checkbox.vue'
import Pagination from '$components/atoms/Pagination.vue'
import Status from '$components/atoms/Badge.vue'

import Alert from '$components/organisms/Alert.vue'

import SortAscendingIcon from '$assets/icons/SortAscending.vue'
import FunnelIcon from '$assets/icons/Funnel.vue'
import PlusIcon from '$assets/icons/Plus.vue'
import SquaresFourIcon from '$assets/icons/SquaresFour.vue'
import ListIcon from '$assets/icons/List.vue'
import CaretLeftIcon from '$assets/icons/CaretLeft.vue'
import CaretRightIcon from '$assets/icons/CaretRight.vue'
import ChecksIcon from '$assets/icons/Checks.vue'

import Categories1 from '$assets/images/categories-1.png'

import Product1 from '$assets/images/product-1.png'
import Product2 from '$assets/images/product-2.png'
import Product3 from '$assets/images/product-3.png'
import Product4 from '$assets/images/product-4.png'
import Product5 from '$assets/images/product-5.png'
import Paginate from '$components/moleculs/Paginate.vue'

const categories = [
  {
    image: Categories1,
    name: 'Outer',
    desc: 'Lorem ipsum dolor sit amet consectetur. Aenean leo senectus vulputate sed purus.'
  },
  {
    image: Categories1,
    name: 'Outer',
    desc: 'Lorem ipsum dolor sit amet consectetur. Aenean leo senectus vulputate sed purus.'
  },
  {
    image: Categories1,
    name: 'Outer',
    desc: 'Lorem ipsum dolor sit amet consectetur. Aenean leo senectus vulputate sed purus.'
  },
  {
    image: Categories1,
    name: 'Outer',
    desc: 'Lorem ipsum dolor sit amet consectetur. Aenean leo senectus vulputate sed purus.'
  },
  {
    image: Categories1,
    name: 'Outer',
    desc: 'Lorem ipsum dolor sit amet consectetur. Aenean leo senectus vulputate sed purus.'
  },
  {
    image: Categories1,
    name: 'Outer',
    desc: 'Lorem ipsum dolor sit amet consectetur. Aenean leo senectus vulputate sed purus.'
  },
  {
    image: Categories1,
    name: 'Outer',
    desc: 'Lorem ipsum dolor sit amet consectetur. Aenean leo senectus vulputate sed purus.'
  },
  {
    image: Categories1,
    name: 'Outer',
    desc: 'Lorem ipsum dolor sit amet consectetur. Aenean leo senectus vulputate sed purus.'
  },
  {
    image: Categories1,
    name: 'Outer',
    desc: 'Lorem ipsum dolor sit amet consectetur. Aenean leo senectus vulputate sed purus.'
  },
  {
    image: Categories1,
    name: 'Outer',
    desc: 'Lorem ipsum dolor sit amet consectetur. Aenean leo senectus vulputate sed purus.'
  },
  {
    image: Categories1,
    name: 'Outer',
    desc: 'Lorem ipsum dolor sit amet consectetur. Aenean leo senectus vulputate sed purus.'
  },
  {
    image: Categories1,
    name: 'Outer',
    desc: 'Lorem ipsum dolor sit amet consectetur. Aenean leo senectus vulputate sed purus.'
  }
]

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

const enabled = ref(false)
const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}

function openModal() {
  isOpen.value = true
}
</script>

<template>
  <BaseLayout title="Categories">
    <div class="categories">
      <TabGroup :default-index="0">
        <div class="categories_heading">
          <Title variant="base"> List Products </Title>

          <div class="categories_heading-cta">
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
              class="leading-4"
            >
              <template #icon>
                <FunnelIcon />
              </template>
              Filters
            </Button>

            <Button
              href="/categories/add"
              variant="primary"
              size="md"
              type="background"
              :icon="true"
              icon-flow="left"
            >
              <template #icon>
                <PlusIcon />
              </template>
              Add Category
            </Button>

            <TabList class="flex items-center gap-2">
              <Tab
                class="rounded-[10px] border border-netral-30 stroke-netral-90 p-3 outline-0 focus-visible:outline-none ui-selected:border ui-selected:border-transparent ui-selected:bg-primary-surface ui-selected:stroke-primary-main"
              >
                <SquaresFourIcon class="h-6 w-6 stroke-inherit" />
              </Tab>
              <Tab
                class="rounded-[10px] border border-netral-30 stroke-netral-90 p-3 outline-0 focus-visible:outline-none ui-selected:border ui-selected:border-transparent ui-selected:bg-primary-surface ui-selected:stroke-primary-main"
              >
                <ListIcon class="h-6 w-6 stroke-inherit" />
              </Tab>
            </TabList>
          </div>
        </div>

        <TabPanels>
          <TabPanel>
            <div class="categories_card">
              <div
                v-for="({ image, name, desc }, index) in categories"
                :key="'category-' + index"
                class="relative h-full w-full min-w-[257px] bg-white"
              >
                <div class="absolute left-3 top-3 z-10">
                  <Checkbox />
                </div>
                <div
                  class="relative flex h-[180px] w-full justify-center rounded-[10px] bg-[#FAFAFA] py-5"
                >
                  <img :src="image" alt="category image 1" />
                </div>
                <Para
                  size="xl"
                  variant="semibold"
                  class="my-1.5 text-netral-100"
                >
                  {{ name }}
                </Para>
                <Para size="md" variant="regular" class="text-netral-50">
                  {{ desc }}
                </Para>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <!-- Table -->
            <div class="mb-6 overflow-x-auto">
              <table class="w-full table-auto">
                <!-- Table header -->
                <thead
                  class="w-full rounded-lg bg-[#fafafa] text-xs font-semibold uppercase text-netral-50"
                >
                  <tr class="w-full">
                    <th class="w-px py-5 pl-3 pr-6 text-left">
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
                    <th class="py-5 text-left">
                      <Para size="md" variant="semibold"> Product </Para>
                    </th>
                    <th class="py-5 text-left">
                      <Para size="md" variant="semibold"> Description </Para>
                    </th>
                    <th class="py-5 text-left">
                      <Para size="md" variant="semibold"> Status </Para>
                    </th>
                    <th class="py-5 text-left">
                      <Para size="md" variant="semibold"> Action </Para>
                    </th>
                  </tr>
                </thead>
                <tbody class="w-full capitalize">
                  <tr class="tableData">
                    <td class="py-5 pl-3 pr-6 text-left">
                      <Checkbox />
                    </td>
                    <td class="py-5 text-left">
                      <div class="flex items-center gap-3">
                        <div class="max-h-[86px] max-w-[86px]">
                          <img :src="Categories1" alt="category 1" />
                        </div>
                        <Para
                          size="lg"
                          variant="semibold"
                          class="max-w-[160px]"
                        >
                          Outer
                        </Para>
                      </div>
                    </td>

                    <td class="py-5 text-left">
                      <Para
                        size="lg"
                        variant="regular"
                        class="max-w-[280px] text-netral-80"
                      >
                        Lorem ipsum dolor sit amet consectetur. Eleifend arcu
                        molestie ac orci sit velit ipsum interdum convallis.
                      </Para>
                    </td>

                    <td class="py-5 text-left">
                      <Status variant="success">Mantep</Status>
                    </td>

                    <td class="py-5 text-left">
                      <button class="font-semibold text-primary-main">
                        Detail
                      </button>
                    </td>
                  </tr>
                  <tr class="tableData">
                    <td class="py-5 pl-3 pr-6 text-left">
                      <Checkbox />
                    </td>
                    <td class="py-5 text-left">
                      <div class="flex items-center gap-3">
                        <div class="max-h-[86px] max-w-[86px]">
                          <img :src="Categories1" alt="category 1" />
                        </div>
                        <Para
                          size="lg"
                          variant="semibold"
                          class="max-w-[160px]"
                        >
                          Outer
                        </Para>
                      </div>
                    </td>

                    <td class="py-5 text-left">
                      <Para
                        size="lg"
                        variant="regular"
                        class="max-w-[280px] text-netral-80"
                      >
                        Lorem ipsum dolor sit amet consectetur. Eleifend arcu
                        molestie ac orci sit velit ipsum interdum convallis.
                      </Para>
                    </td>

                    <td class="py-5 text-left">
                      <Status variant="success">Mantep</Status>
                    </td>

                    <td class="py-5 text-left">
                      <button class="font-semibold text-primary-main">
                        Detail
                      </button>
                    </td>
                  </tr>
                  <tr class="tableData">
                    <td class="py-5 pl-3 pr-6 text-left">
                      <Checkbox />
                    </td>
                    <td class="py-5 text-left">
                      <div class="flex items-center gap-3">
                        <div class="max-h-[86px] max-w-[86px]">
                          <img :src="Categories1" alt="category 1" />
                        </div>
                        <Para
                          size="lg"
                          variant="semibold"
                          class="max-w-[160px]"
                        >
                          Outer
                        </Para>
                      </div>
                    </td>

                    <td class="py-5 text-left">
                      <Para
                        size="lg"
                        variant="regular"
                        class="max-w-[280px] text-netral-80"
                      >
                        Lorem ipsum dolor sit amet consectetur. Eleifend arcu
                        molestie ac orci sit velit ipsum interdum convallis.
                      </Para>
                    </td>

                    <td class="py-5 text-left">
                      <Status variant="success">Mantep</Status>
                    </td>

                    <td class="py-5 text-left">
                      <button class="font-semibold text-primary-main">
                        Detail
                      </button>
                    </td>
                  </tr>
                  <tr class="tableData">
                    <td class="py-5 pl-3 pr-6 text-left">
                      <Checkbox />
                    </td>
                    <td class="py-5 text-left">
                      <div class="flex items-center gap-3">
                        <div class="max-h-[86px] max-w-[86px]">
                          <img :src="Categories1" alt="category 1" />
                        </div>
                        <Para
                          size="lg"
                          variant="semibold"
                          class="max-w-[160px]"
                        >
                          Outer
                        </Para>
                      </div>
                    </td>

                    <td class="py-5 text-left">
                      <Para
                        size="lg"
                        variant="regular"
                        class="max-w-[280px] text-netral-80"
                      >
                        Lorem ipsum dolor sit amet consectetur. Eleifend arcu
                        molestie ac orci sit velit ipsum interdum convallis.
                      </Para>
                    </td>

                    <td class="py-5 text-left">
                      <Status variant="success">Mantep</Status>
                    </td>

                    <td class="py-5 text-left">
                      <button class="font-semibold text-primary-main">
                        Detail
                      </button>
                    </td>
                  </tr>
                  <tr class="tableData">
                    <td class="py-5 pl-3 pr-6 text-left">
                      <Checkbox />
                    </td>
                    <td class="py-5 text-left">
                      <div class="flex items-center gap-3">
                        <div class="max-h-[86px] max-w-[86px]">
                          <img :src="Categories1" alt="category 1" />
                        </div>
                        <Para
                          size="lg"
                          variant="semibold"
                          class="max-w-[160px]"
                        >
                          Outer
                        </Para>
                      </div>
                    </td>

                    <td class="py-5 text-left">
                      <Para
                        size="lg"
                        variant="regular"
                        class="max-w-[280px] text-netral-80"
                      >
                        Lorem ipsum dolor sit amet consectetur. Eleifend arcu
                        molestie ac orci sit velit ipsum interdum convallis.
                      </Para>
                    </td>

                    <td class="py-5 text-left">
                      <Status variant="success">Mantep</Status>
                    </td>

                    <td class="py-5 text-left">
                      <button class="font-semibold text-primary-main">
                        Detail
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>

      <!-- Pagination -->
      <Paginate />
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
                <span class="pageAction_status-text"> Last Saved </span>
                <span
                  class="text-sm font-semibold leading-[1.43] text-netral-80"
                >
                  Nov 9, 2022 &mdash; 05.09 PM
                </span>
              </div>

              <div class="pageAction_cta">
                <Button type="outline" variant="warning" size="md">
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
                  btnType="button"
                  type="background"
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
.categories {
  &_heading {
    @apply relative mb-8 flex w-full items-center justify-between;

    &-cta {
      @apply flex items-center gap-3;
    }
  }

  &_card {
    @apply mb-8 grid grid-cols-4 gap-5;
  }
}
</style>
