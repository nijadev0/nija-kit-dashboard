<script setup lang="ts">
import { ref } from 'vue'
import {
  TabGroup,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Switch
} from '@headlessui/vue'

import BaseLayout from '$components/templates/BaseLayout.vue'

import Title from '$components/atoms/Title.vue'
import Button from '$components/atoms/Button.vue'
import Para from '$components/atoms/Para.vue'
import Checkbox from '$components/atoms/Checkbox.vue'
import Status from '$components/atoms/Badge.vue'
import PageAction from '$components/organisms/PageAction.vue'
import Paginate from '$components/moleculs/Paginate.vue'

import SortAscendingIcon from '$assets/icons/SortAscending.vue'
import FunnelIcon from '$assets/icons/Funnel.vue'
import PlusIcon from '$assets/icons/Plus.vue'
import SquaresFourIcon from '$assets/icons/SquaresFour.vue'
import ListIcon from '$assets/icons/List.vue'
import ArrowRight from '$assets/icons/ArrowRight.vue'
import Check from '$assets/icons/Check.vue'

import Categories1Tshirt from '$assets/images/categories-1-tshirt.png'
import Categories2Outer from '$assets/images/categories-2-outer.png'
import Categories3Bag from '$assets/images/categories-3-bag.png'
import Categories4Accessories from '$assets/images/categories-4-accessories.png'
import Categories5Shirt from '$assets/images/categories-5-shirt.png'

import Badge from '$components/atoms/Badge.vue'

const categories = [
  {
    image: Categories1Tshirt,
    name: 'T-shirt',
    desc: 'Discover easy and casual t-shirt for women and men with variety of colors, pattern and comfy materials.',
    status: 'active'
  },
  {
    image: Categories2Outer,
    name: 'Outer',
    desc: 'Discovery a variety of outers to keep yourself warm with stylish and comfortable ways.',
    status: 'draft'
  },
  {
    image: Categories3Bag,
    name: 'Bag',
    desc: 'Discover a variety of bags that are suitable for men, women and children in all situations.',
    status: 'active'
  },
  {
    image: Categories4Accessories,
    name: 'Accessories',
    desc: 'Complete your outfit with accessories - whether jewelry, hat, sunglasses, belt or scarf. To do so, you can rely on the latest trends and the classics.',
    status: 'draft'
  },
  {
    image: Categories5Shirt,
    name: 'Shirt',
    desc: 'Find most elegant and comfortable shirt from casual to formal wear.',
    status: 'active'
  }
]

const enabled = ref(false)
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
                <PlusIcon class="stroke-white" />
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
          <!-- Card -->
          <TabPanel>
            <RouterLink to="/" class="categories_card">
              <div
                v-for="({ image, name, desc }, index) in categories"
                :key="'category-' + index"
                class="relative h-full w-full min-w-[258px] bg-white"
              >
                <div class="absolute left-3 top-3 z-10">
                  <div v-if="index === 0">
                    <Switch v-model="enabled" class="checkbox">
                      <div
                        class="checkbox-wrapper"
                        :class="enabled ? 'active' : 'default'"
                      >
                        <Check
                          class="checkbox-icon"
                          :class="enabled ? 'block' : 'hidden'"
                        />
                      </div>
                    </Switch>
                  </div>

                  <div v-else>
                    <Checkbox />
                  </div>
                </div>
                <div
                  class="relative flex h-[180px] w-full justify-center rounded-[10px] bg-[#FAFAFA] py-5 transition-all duration-500 ease-in-out"
                >
                  <div
                    class="absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-[10px] bg-transparent opacity-0 transition-colors duration-500 ease-in-out hover:bg-netral-80/40 hover:opacity-100"
                  >
                    <button
                      class="flex items-center justify-center gap-2 rounded-lg border-[1.5px] border-white/60 stroke-white/60 p-2 text-white/90 duration-500"
                    >
                      <span class="font-bold"> Detail </span>
                      <ArrowRight />
                    </button>
                  </div>
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
            </RouterLink>
          </TabPanel>

          <!-- List -->
          <TabPanel class="w-full">
            <!-- Table -->
            <div class="mb-6 overflow-x-auto">
              <table class="w-full table-auto">
                <!-- Table Head -->
                <thead class="tableHead w-full">
                  <tr
                    class="flex w-full items-center justify-between gap-24 rounded-lg bg-[#fafafa] py-4 px-3 uppercase"
                  >
                    <!-- Checkbox -->
                    <th class="w-full max-w-[260px]">
                      <tr class="flex items-start gap-8">
                        <th class="checkbox max-w-[20px] pr-6 text-left">
                          <Switch v-model="enabled" class="checkbox">
                            <div
                              class="checkbox-wrapper"
                              :class="enabled ? 'active' : 'default'"
                            >
                              <Check
                                class="checkbox-icon"
                                :class="enabled ? 'block' : 'hidden'"
                              />
                            </div>
                          </Switch>
                        </th>

                        <th class="w-full max-w-[220px] text-left">
                          <Para
                            class="text-[#A0A8B0]"
                            variant="semibold"
                            size="md"
                          >
                            Category
                          </Para>
                        </th>
                      </tr>
                    </th>

                    <th class="w-full max-w-[280px] text-left">
                      <Para class="text-[#A0A8B0]" variant="semibold" size="md">
                        Description
                      </Para>
                    </th>

                    <th class="w-full max-w-[142px] text-left">
                      <Para class="text-[#A0A8B0]" variant="semibold" size="md">
                        Status
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
                  <tr
                    v-for="item in categories"
                    class="flex w-full items-center justify-between border-b border-netral-30 py-[26px] px-3"
                  >
                    <td class="w-full max-w-[260px]">
                      <tr class="flex items-start gap-8">
                        <td class="checkbox max-w-[20px] pr-6">
                          <Checkbox />
                        </td>

                        <td class="w-full max-w-[220px] text-left">
                          <div
                            class="flex w-full items-center justify-start gap-4"
                          >
                            <img
                              class="max-h-[90px] w-[90px] rounded-lg"
                              :src="item.image"
                            />
                            <Para
                              size="lg"
                              variant="semibold"
                              class="text-netral-80"
                            >
                              {{ item.name }}
                            </Para>
                          </div>
                        </td>
                      </tr>
                    </td>

                    <td class="w-full max-w-[280px] text-left">
                      <Para size="lg" variant="regular">
                        {{ item.desc }}
                      </Para>
                    </td>

                    <td class="w-full max-w-[142px]">
                      <Badge v-if="item.status === 'active'" variant="success">
                        {{ item.status }}
                      </Badge>
                      <Badge v-if="item.status === 'draft'" variant="warning">
                        {{ item.status }}
                      </Badge>
                    </td>

                    <td class="w-full max-w-[100px]">
                      <button
                        @click="$router.push('/users/detail')"
                        class="font-bold text-primary-main"
                      >
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
      <PageAction
        :isEnabled="enabled"
        variant="error"
        label-primary="Delete"
        label-secondary="Draft"
      />
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
    @apply mb-8 grid auto-cols-min grid-flow-row grid-cols-4 gap-5;
  }
}
</style>
