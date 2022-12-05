<script setup lang="ts">
import BaseLayout from '$components/templates/BaseLayout.vue'
import Pagination from '$components/atoms/Pagination.vue'
</script>

<template>
  <BaseLayout title="Detail Buyers">
    <section>
      <!-- Table -->
      <div class="mb-6 overflow-x-auto">
        <table class="w-full table-auto">
          <!-- Table header -->
          <thead
            class="rounded-lg bg-[#fafafa] text-xs font-semibold uppercase text-netral-50"
          >
            <tr>
              <th class="py-5 pl-4 pr-6 text-left">
                <Para size="md" variant="semibold"> Name </Para>
              </th>
              <th class="py-5 text-left">
                <Para size="md" variant="semibold"> Email address </Para>
              </th>
              <th class="py-5 pr-4 text-left">
                <Para size="md" variant="semibold"> Phone Number </Para>
              </th>
              <th class="py-5 text-left">
                <Para size="md" variant="semibold"> Complete address </Para>
              </th>
              <th class="py-5 text-left">
                <Para size="md" variant="semibold"> Last Transaction </Para>
              </th>
              <th class="py-5 text-left">
                <Para size="md" variant="semibold"> Action </Para>
              </th>
            </tr>
          </thead>
          <tbody class="w-full capitalize">
            <tr class="border-b">
              <td class="py-5 pl-4 pr-6 text-left">Jenny Wilson</td>
              <td class="py-5 text-left">jenny@mail.com</td>
              <td class="py-5 text-left">(205) 555-0100</td>
              <td class="max-w-[150px] py-5 text-left">
                2715 Ash Dr. San Jose, South Dakota 83475
              </td>
              <td class="py-5 text-left">October 25, 2019</td>
              <td class="py-5 text-left">
                <button
                  @click="$router.push('/buyers/detail')"
                  class="font-semibold text-primary-main"
                >
                  Detail
                </button>
              </td>
            </tr>

            <tr class="border-b">
              <td class="py-5 pl-4 pr-6 text-left">Jenny Wilson</td>
              <td class="py-5 text-left">jenny@mail.com</td>
              <td class="py-5 text-left">(205) 555-0100</td>
              <td class="max-w-[150px] py-5 text-left">
                2715 Ash Dr. San Jose, South Dakota 83475
              </td>
              <td class="py-5 text-left">October 25, 2019</td>
              <td class="py-5 text-left">
                <button
                  @click="$router.push('/buyers/detail')"
                  class="font-semibold text-primary-main"
                >
                  Detail
                </button>
              </td>
            </tr>

            <tr class="border-b">
              <td class="py-5 pl-4 pr-6 text-left">Jenny Wilson</td>
              <td class="py-5 text-left">jenny@mail.com</td>
              <td class="py-5 text-left">(205) 555-0100</td>
              <td class="max-w-[150px] py-5 text-left">
                2715 Ash Dr. San Jose, South Dakota 83475
              </td>
              <td class="py-5 text-left">October 25, 2019</td>
              <td class="py-5 text-left">
                <button
                  @click="$router.push('/buyers/detail')"
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
  </BaseLayout>
</template>
