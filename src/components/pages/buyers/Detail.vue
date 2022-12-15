<script setup lang="ts">
import BaseLayout from '$components/templates/BaseLayout.vue'

import Title from '$components/atoms/Title.vue'
import Heading from '$components/atoms/Heading.vue'
import Para from '$components/atoms/Para.vue'
import Badge from '$components/atoms/Badge.vue'

import AvatarDefault from '$assets/icons/AvatarDefault.vue'

const detailsUser = [
  {
    id: 653518,
    nameItem: "Lego Star'War edition'",
    amount: 2,
    status: 'successful',
    price: '$782.01',
    date: '02 Jan 2022. 16.00'
  },
  {
    id: 267400,
    nameItem: 'Heimer Miller Sofa (Mint Condition)',
    amount: 4,
    status: 'successful',
    price: '$169.43',
    date: '02 jan 2022. 16.00'
  },
  {
    id: 653528,
    nameItem: "Coach Tabby 26 for sale'",
    amount: 3,
    status: 'refund',
    price: '$328.85',
    date: '02 Jan 2022. 16.00'
  },
  {
    id: 558612,
    nameItem: 'Tablet Coaching 32 for sale',
    amount: 1,
    status: 'successful',
    price: '$105.55',
    date: '02 Jan 2022. 16.00'
  },
  {
    id: 267400,
    nameItem: 'Heimer Miller Sofa (Mint Condition)',
    amount: 3,
    status: 'wishlist',
    price: '$739.65',
    date: '02 Jan 2022. 16.00'
  },
  {
    id: 653518,
    nameItem: "Klemer Sofa Muller (German Player)'",
    amount: 2,
    status: 'refund',
    price: '$396.84',
    date: '02 Jan 2022. 16.00'
  }
]
</script>

<template>
  <BaseLayout title="Buyers" page>
    <!-- Heading -->
    <div class="mb-7 flex items-start justify-between">
      <Title variant="base"> Detail Buyers </Title>
    </div>

    <!-- Buyers Info -->
    <div class="flex w-full flex-row items-center gap-5">
      <AvatarDefault />

      <div class="-mb-2 flex w-full flex-col justify-between gap-4">
        <Heading variant="semibold" size="sm">Samanta Legend</Heading>

        <div class="flex flex-row items-start">
          <div class="flex w-72 flex-col gap-1.5">
            <Para variant="semibold" size="md" class="uppercase text-netral-50">
              Email Address
            </Para>

            <Para variant="medium" size="md"> Lego Star'War edition </Para>
          </div>

          <div class="flex w-72 flex-col gap-1.5">
            <Para variant="semibold" size="md" class="uppercase text-netral-50">
              Phone Number
            </Para>

            <Para variant="medium" size="md"> (307) 555-0133 </Para>
          </div>

          <div class="flex w-72 flex-col gap-1.5">
            <Para variant="semibold" size="md" class="uppercase text-netral-50">
              Address
            </Para>

            <Para variant="medium" size="md">
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </Para>
          </div>
        </div>
      </div>
    </div>

    <template #page>
      <Title variant="base" class="mb-8"> Transaction History </Title>
      <!-- Table -->

      <div class="mb-6 w-full overflow-x-auto">
        <table class="w-full">
          <!-- Table Head -->
          <thead class="tableHead w-full">
            <tr
              class="flex w-full items-center justify-between gap-14 rounded-lg bg-[#fafafa] py-4 px-3 uppercase"
            >
              <th class="w-full max-w-[140px] text-left">
                <Para class="text-[#A0A8B0]" variant="medium" size="md">
                  Transaction ID
                </Para>
              </th>

              <th class="w-full text-left">
                <Para class="text-[#A0A8B0]" variant="medium" size="md">
                  Purchased Item
                </Para>
              </th>

              <th class="min-w-[80px] text-left">
                <Para class="text-[#A0A8B0]" variant="medium" size="md">
                  Amount
                </Para>
              </th>

              <th class="w-full text-left">
                <Para class="text-[#A0A8B0]" variant="medium" size="md">
                  Status
                </Para>
              </th>

              <th class="w-full text-left">
                <Para class="text-[#A0A8B0]" variant="medium" size="md">
                  Total Price
                </Para>
              </th>

              <th class="w-full text-left">
                <Para class="text-[#A0A8B0]" variant="medium" size="md">
                  Transaction Date
                </Para>
              </th>
            </tr>
          </thead>

          <!-- Table Data -->
          <tbody class="tableData w-full">
            <tr
              v-for="item in detailsUser"
              class="flex w-full items-center justify-between gap-14 border-b border-netral-30 py-[26px] px-3 text-netral-80"
            >
              <td class="w-full max-w-[140px]">
                <Para size="lg" variant="medium"> {{ item.id }} </Para>
              </td>

              <td class="w-full max-w-[280px] text-left">
                <Para size="lg" variant="medium">
                  {{ item.nameItem }}
                </Para>
              </td>

              <td class="min-w-[80px] text-left">
                <Para size="lg" variant="medium">{{ item.amount }}</Para>
              </td>

              <td class="w-full">
                <Badge v-if="item.status === 'successful'" variant="success">
                  {{ item.status }}
                </Badge>
                <Badge v-if="item.status === 'wishlist'" variant="warning">
                  {{ item.status }}
                </Badge>
                <Badge v-if="item.status === 'refund'" variant="critical">
                  {{ item.status }}
                </Badge>
              </td>

              <td class="w-full text-left">
                <Para size="lg" variant="medium"> {{ item.price }} </Para>
              </td>

              <td class="w-full">
                <Para size="lg" variant="medium"> {{ item.date }} </Para>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </BaseLayout>
</template>
