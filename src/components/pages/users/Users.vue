<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

import BaseLayoutVue from '$components/templates/BaseLayout.vue'

import Title from '$components/atoms/Title.vue'
import Para from '$components/atoms/Para.vue'
import Button from '$components/atoms/Button.vue'
import Checkbox from '$components/atoms/Checkbox.vue'

import SortAscendingIcon from '$assets/icons/SortAscending.vue'
import FunnelIcon from '$assets/icons/Funnel.vue'
import CheckIcon from '$assets/icons/Check.vue'

const enabled = ref(true)
</script>

<template>
  <BaseLayoutVue title="Halo Customers" full>
    <div class="relative mb-8 flex w-full items-center justify-between">
      <Title variant="base"> Customers </Title>

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
      </div>
    </div>

    <section>
      <!-- Table -->
      <div class="mb-6 overflow-x-auto">
        <table class="w-full table-auto">
          <!-- Table header -->
          <thead
            class="rounded-lg bg-[#fafafa] text-xs font-semibold uppercase text-netral-50"
          >
            <tr>
              <th class="py-5 pl-3 pr-6 text-left">
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
                <Para size="md" variant="semibold"> Name </Para>
              </th>
              <th class="py-5 text-left">
                <Para size="md" variant="semibold"> Email address </Para>
              </th>
              <th class="py-5 pr-4 text-left">
                <Para size="md" variant="semibold"> Complete address </Para>
              </th>
              <th class="py-5 text-left">
                <Para size="md" variant="semibold"> Create at </Para>
              </th>
              <th class="py-5 text-left">
                <Para size="md" variant="semibold"> Last activity </Para>
              </th>
              <th class="py-5 text-left">
                <Para size="md" variant="semibold"> Action </Para>
              </th>
            </tr>
          </thead>
          <tbody class="w-full capitalize">
            <tr class="border-b">
              <td class="w-5 py-5 pl-3 pr-6 text-left"><Checkbox /></td>
              <td class="w-[160px]">Samanta Legend</td>
              <td class="w-[160px]">samanta@mail.com</td>
              <td class="w-[150px] py-5 pr-4">
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </td>
              <td class="w-[100px]">Orange</td>
              <td class="w-[120px]">May 6, 2012</td>
              <td class="w-[60px]">
                <button
                  @click="$router.push('/users/detail')"
                  class="font-semibold text-primary-main"
                >
                  Detail
                </button>
              </td>
            </tr>

            <tr class="border-b">
              <td class="w-5 py-5 pl-3 pr-6 text-left"><Checkbox /></td>
              <td class="py-5">Samanta Legend</td>
              <td class="py-5">samanta@mail.com</td>
              <td class="w-[150px] py-5 pr-4">
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </td>
              <td class="py-5">Orange</td>
              <td class="py-5">May 6, 2012</td>
              <td class="py-5">
                <button
                  @click="$router.push('/users/detail')"
                  class="font-semibold text-primary-main"
                >
                  Detail
                </button>
              </td>
            </tr>

            <tr class="border-b">
              <td class="w-5 py-5 pl-3 pr-6 text-left"><Checkbox /></td>
              <td class="py-5">Samanta Legend</td>
              <td class="py-5">samanta@mail.com</td>
              <td class="w-[150px] py-5 pr-4">
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </td>
              <td class="py-5">Orange</td>
              <td class="py-5">May 6, 2012</td>
              <td class="py-5">
                <button
                  @click="$router.push('/users/detail')"
                  class="font-semibold text-primary-main"
                >
                  Detail
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </BaseLayoutVue>
</template>
