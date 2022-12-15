<script setup lang="ts">
import BaseLayout from '$components/templates/BaseLayout.vue'

import Para from '$components/atoms/Para.vue'
import Paginate from '$components/moleculs/Paginate.vue'
import Button from '$components/atoms/Button.vue'
import SortAscending from '$assets/icons/SortAscending.vue'
import Title from '$components/atoms/Title.vue'
import Funnel from '$assets/icons/Funnel.vue'

const buyersData = [
  {
    name: 'Samanta Legend',
    email: 'samanta@mail.com',
    phoneNumber: '(307) 555-0133',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486 ',
    lastTransaction: 'May 31, 2015'
  },
  {
    name: 'Jenny Wilson',
    email: 'jenny@mail.com',
    phoneNumber: '(205) 555-0100',
    address: '2715 Ash Dr. San Jose, South Dakota 83475',
    lastTransaction: 'October 25, 2019'
  },
  {
    name: 'Ronald Richards',
    email: 'rrichards@mail.com',
    phoneNumber: '(207) 555-0119',
    address: '8502 Preston Rd. Inglewood, Maine 98380',
    lastTransaction: 'May 20, 2015'
  },
  {
    name: 'Annette Black',
    email: 'blackann@mail.com',
    phoneNumber: '(252) 555-0126',
    address: '6391 Elgin St. Celina, Delaware 10299',
    lastTransaction: 'August 24, 2013'
  },
  {
    name: 'Kristin Watson',
    email: 'kristinw@mail.com',
    phoneNumber: '(217) 555-0113',
    address: '8502 Preston Rd. Inglewood, Maine 98380',
    lastTransaction: 'September 9, 2013'
  },
  {
    name: 'Jacob Jones',
    email: 'jjones2@mail.com',
    phoneNumber: '(702) 555-0122',
    address: '3891 Ranchview Dr. Richardson, California 62639',
    lastTransaction: 'August 2, 2013'
  }
]
</script>

<template>
  <BaseLayout title="List Buyers">
    <div class="relative mb-8 flex w-full items-center justify-between">
      <Title variant="base"> Buyers </Title>

      <div class="flex items-center gap-3">
        <Button
          variant="default"
          size="md"
          type="background"
          :icon="true"
          icon-flow="right"
        >
          <template #icon>
            <SortAscending />
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
            <Funnel />
          </template>
          Filters
        </Button>
      </div>
    </div>

    <section>
      <!-- Table -->
      <div class="mb-6 overflow-x-auto">
        <table class="w-full">
          <!-- Table header -->
          <thead class="tableHead w-full">
            <tr
              class="flex w-full items-center justify-between gap-11 rounded-lg bg-[#fafafa] py-4 px-3 text-xs font-semibold uppercase text-netral-50"
            >
              <th class="w-full max-w-[180px] pl-4 pr-6 text-left">
                <Para size="md" variant="semibold"> Name </Para>
              </th>
              <th class="w-full max-w-[160px] text-left">
                <Para size="md" variant="semibold"> Email address </Para>
              </th>
              <th class="w-full max-w-[140px] text-left">
                <Para size="md" variant="semibold"> Phone Number </Para>
              </th>
              <th class="w-full max-w-[150px] text-left">
                <Para size="md" variant="semibold"> Complete address </Para>
              </th>
              <th class="w-full max-w-[140px] text-left">
                <Para size="md" variant="semibold"> Last Transaction </Para>
              </th>
              <th class="w-full max-w-[72px] text-left">
                <Para size="md" variant="semibold"> Action </Para>
              </th>
            </tr>
          </thead>

          <tbody class="w-full capitalize">
            <tr
              v-for="item in buyersData"
              class="flex items-center justify-between gap-11 border-b py-5"
            >
              <td class="w-full max-w-[180px] pl-4 pr-6 text-left">
                {{ item.name }}
              </td>
              <td class="w-full max-w-[160px] text-left">
                {{ item.email }}
              </td>
              <td class="w-full max-w-[140px] text-left">
                {{ item.phoneNumber }}
              </td>
              <td class="w-full max-w-[150px] text-left">
                {{ item.address }}
              </td>
              <td class="w-full max-w-[140px] text-left">
                {{ item.lastTransaction }}
              </td>
              <td class="w-full max-w-[72px] text-left">
                <button
                  @click="$router.push('/buyers/detail')"
                  class="text-left font-semibold text-primary-main"
                >
                  Detail
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Pagination -->
    <Paginate />
  </BaseLayout>
</template>
