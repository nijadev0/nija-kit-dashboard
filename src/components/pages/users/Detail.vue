<script lang="ts" setup>
import { ref } from 'vue'

import BaseLayout from '$components//templates/BaseLayout.vue'

import Title from '$components/atoms/Title.vue'

import CaretDown from '$assets/icons/CaretDown.vue'
import PageAction from '$components/organisms/PageAction.vue'

const isEnabled = ref(true)
</script>

<template>
  <BaseLayout title="Detail User" :full="true">
    <Title variant="base" class="mb-8"> User </Title>

    <form class="grid grid-cols-2 gap-x-5 gap-y-8">
      <div class="w-full">
        <label class="font-semibold" for="name"> Name </label>
        <input
          name="name"
          class="mt-1.5 w-full rounded-[10px] border border-netral-30 bg-netral-10 p-3.5 shadow-input"
          type="text"
          placeholder="Your name"
        />
      </div>
      <div class="w-full">
        <label class="font-semibold" for="name"> Email address </label>
        <input
          name="name"
          class="mt-1.5 w-full rounded-[10px] border border-netral-30 bg-netral-10 p-3.5 shadow-input"
          type="text"
          placeholder="Your email address"
        />
      </div>

      <div class="w-full">
        <label class="font-semibold" for="name"> Phone number </label>
        <div class="relative">
          <div
            class="absolute top-1/2 left-2 z-10 flex w-fit -translate-y-1/2 items-center gap-2"
          >
            <div
              class="flex w-fit items-center gap-1 rounded-md bg-netral-20 py-1.5 px-1.5"
            >
              <span class="font-bold text-netral-80">+62</span>
              <CaretDown class="stroke-netral-80" />
            </div>
            <div class="relative h-6 w-0.5 bg-netral-20" />
          </div>

          <input
            name="name"
            class="relative w-full rounded-[10px] border border-netral-30 bg-netral-10 p-3.5 pl-24 shadow-input"
            type="text"
            placeholder="Complete address"
          />
        </div>
      </div>

      <div class="relative w-full">
        <label class="font-semibold" for="name"> Complete address </label>
        <input
          name="name"
          class="mt-1.5 w-full rounded-[10px] border border-netral-30 bg-netral-10 p-3.5 shadow-input"
          type="text"
          placeholder="Your complete address"
        />
      </div>
    </form>

    <template #extend>
      <!-- Action -->
      <PageAction :is-enabled="isEnabled" />
    </template>
  </BaseLayout>
</template>
