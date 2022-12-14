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
import PageAction from '$components/organisms/PageAction.vue'

const enabled = ref(false)
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
        <table class="w-full">
          <!-- Table Head -->
          <thead class="tableHead w-full">
            <tr
              class="flex w-full items-center justify-between gap-11 rounded-lg bg-[#fafafa] py-4 px-3 uppercase"
            >
              <!-- Checkbox -->
              <th class="checkbox w-px pr-6 text-left">
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

              <th class="w-full text-left">
                <Para class="text-[#A0A8B0]" variant="semibold" size="md">
                  Name
                </Para>
              </th>

              <th class="w-full text-left">
                <Para class="text-[#A0A8B0]" variant="semibold" size="md">
                  Email Adress
                </Para>
              </th>

              <th class="w-full text-left">
                <Para class="text-[#A0A8B0]" variant="semibold" size="md">
                  Complete Address
                </Para>
              </th>

              <th class="w-full text-left">
                <Para class="text-[#A0A8B0]" variant="semibold" size="md">
                  Created At
                </Para>
              </th>

              <th class="w-full text-left">
                <Para class="text-[#A0A8B0]" variant="semibold" size="md">
                  Last Activity
                </Para>
              </th>

              <th class="w-full text-left">
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
                class="flex w-full items-center justify-between gap-11 border-b border-netral-30 py-[26px] px-3"
              >
                <td class="checkbox w-px pr-6">
                  <Checkbox />
                </td>

                <td class="w-full text-left">
                  <Para size="lg" variant="medium" class="text-netral-80">
                    Samanta Legend
                  </Para>
                </td>

                <td class="w-full text-left">
                  <Para size="lg" variant="medium"> samanta@mail.com </Para>
                </td>

                <td class="w-full">
                  <Para size="lg" variant="medium">
                    2972 Westheimer Rd. Santa Ana, Illinois 85486
                  </Para>
                </td>

                <td class="w-full">
                  <Para size="lg" variant="medium"> Orange </Para>
                </td>

                <td class="w-full text-left">
                  <Para size="lg" variant="medium"> May 6, 2012 </Para>
                </td>

                <td class="w-full">
                  <button
                    @click="$router.push('/users/detail')"
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
    </section>

    <template #extend>
      <PageAction
        :isEnabled="enabled"
        variant="error"
        label-primary="Delete"
        hideSecondary
      />
    </template>
  </BaseLayoutVue>
</template>
