<script setup lang="ts">
import BaseLayout from '$components/templates/BaseLayout.vue'

import Title from '$components/atoms/Title.vue'
import Button from '$components/atoms/Button.vue'

import PencilIcon from '$assets/icons/Pencil.vue'
import AvatarDefault from '$assets/icons/AvatarDefault.vue'
import Heading from '$components/atoms/Heading.vue'
import Para from '$components/atoms/Para.vue'
import Status from '$components/atoms/Badge.vue'
</script>
<template>
  <BaseLayout title="Buyers" page>
    <!-- Heading -->
    <div class="mb-7 flex items-start justify-between">
      <Title variant="base"> Detail Buyers </Title>
      <Button
        variant="primary"
        type="background"
        size="md"
        icon
        btn-type="link"
        href="/buyers/update"
      >
        <template #icon>
          <PencilIcon class="h-4 w-4 stroke-white stroke-[1.25px]" />
        </template>
        Edit
      </Button>
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
      <section>
        <!-- Table -->
        <div class="mb-6 overflow-x-auto">
          <table class="w-full table-auto">
            <!-- Table header -->
            <thead
              class="rounded-lg bg-[#fafafa] text-xs font-semibold uppercase text-netral-50"
            >
              <tr>
                <th class="w-px whitespace-nowrap py-5 pl-4 pr-24 text-left">
                  <Para size="md" variant="semibold"> Transaction ID </Para>
                </th>
                <th class="py-5 text-left">
                  <Para size="md" variant="semibold"> Purchased Item</Para>
                </th>
                <th class="py-5 pr-4 text-left">
                  <Para size="md" variant="semibold"> Amount </Para>
                </th>
                <th class="py-5 text-left">
                  <Para size="md" variant="semibold"> Status </Para>
                </th>
                <th class="py-5 text-left">
                  <Para size="md" variant="semibold"> Total Price </Para>
                </th>
                <th class="py-5 text-left">
                  <Para size="md" variant="semibold"> Transaction Date</Para>
                </th>
              </tr>
            </thead>
            <tbody class="w-full capitalize">
              <tr>
                <td class="w-px py-5 pl-4 pr-6">653518</td>
                <td class="py-5">Lego Star'War edition</td>
                <td class="py-5 pr-4">2</td>
                <td class="py-5">
                  <Status variant="success">Successful</Status>
                </td>
                <td class="py-5">May 6, 2012</td>
                <td class="py-5">
                  <button class="font-semibold text-primary-main">
                    Detail
                  </button>
                </td>
              </tr>

              <tr>
                <td class="w-px py-5 pl-4 pr-6">653518</td>
                <td class="py-5">Lego Star'War edition</td>
                <td class="py-5 pr-4">2</td>
                <td class="py-5">
                  <Status variant="success">Successful</Status>
                </td>
                <td class="py-5">May 6, 2012</td>
                <td class="py-5">
                  <button class="font-semibold text-primary-main">
                    Detail
                  </button>
                </td>
              </tr>

              <tr>
                <td class="w-px py-5 pl-4 pr-6">653518</td>
                <td class="py-5">Lego Star'War edition</td>
                <td class="py-5 pr-4">2</td>
                <td class="py-5">
                  <Status variant="success">Successful</Status>
                </td>
                <td class="py-5">May 6, 2012</td>
                <td class="py-5">
                  <button class="font-semibold text-primary-main">
                    Detail
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </template>
  </BaseLayout>
</template>
