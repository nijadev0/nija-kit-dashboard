<script setup lang="ts">
import { ref } from 'vue'
import Avatar from '$components/atoms/Avatar.vue'
import Para from '$components/atoms/Para.vue'

import AvatarPhoto from '$assets/images/avatar.png'
import MagnifyingGlass from '$assets/icons/MagnifyingGlass.vue'
import CaretDown from '$assets/icons/CaretDown.vue'
import BellSimple from '$assets/icons/BellSimple.vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import CloseXIcon from '$assets/icons/CloseXIcon.vue'

let isActive = ref(false)
</script>

<template>
  <section class="navbar">
    <div class="navbar_search">
      <MagnifyingGlass />

      <input
        type="text"
        class="navbar_search-input"
        placeholder="What are you looking for?"
      />
    </div>

    <div class="navbar_profile relative">
      <Popover class="relative">
        <PopoverButton class="navbar_notif" @click="isActive = true">
          <span class="navbar_notif-counter">9</span>
          <BellSimple />
        </PopoverButton>

        <PopoverPanel
          class="absolute top-8 right-0 z-10 w-80 rounded-2xl border border-netral-30 bg-white"
          style="
            filter: drop-shadow(0px 3px 5px rgba(47, 47, 47, 0.2))
              drop-shadow(0px 0px 1px rgba(47, 47, 47, 0.2));
          "
        >
          <div
            class="flex h-full w-full items-center justify-between border-b border-netral-30 py-6 px-4"
          >
            <Para variant="medium" size="xl"> Notifications </Para>
            <CloseXIcon
              class="h-full max-h-[1rem] w-full max-w-[1rem] stroke-netral-50 stroke-[1.6]"
            />
          </div>

          <div class="flex h-full w-full flex-col">
            <a
              href="/analytics"
              class="relative flex items-start gap-4 border-b border-netral-30 bg-white p-4"
            >
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-surface"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.25 6.75H3.75C3.33579 6.75 3 7.08579 3 7.5V19.5C3 19.9142 3.33579 20.25 3.75 20.25H20.25C20.6642 20.25 21 19.9142 21 19.5V7.5C21 7.08579 20.6642 6.75 20.25 6.75Z"
                    stroke="#5E59FF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 9.75V6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75V9.75"
                    stroke="#5E59FF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div>
                <span class="text-lg font-medium"> New Order </span>
                <p class="max-w-[230px] truncate text-sm text-netral-50">
                  Lorem ipsum dolor sit amet consectetur.
                </p>

                <span class="text-xs font-medium tracking-wide text-netral-60">
                  1h ago
                </span>
              </div>
              <svg
                class="absolute top-4 right-4 h-2 w-2"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#5E59FF" />
              </svg>
            </a>
            <a
              href="/analytics"
              class="relative flex items-start gap-4 border-b border-netral-30 bg-white p-4"
            >
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-surface"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.25 6.75H3.75C3.33579 6.75 3 7.08579 3 7.5V19.5C3 19.9142 3.33579 20.25 3.75 20.25H20.25C20.6642 20.25 21 19.9142 21 19.5V7.5C21 7.08579 20.6642 6.75 20.25 6.75Z"
                    stroke="#5E59FF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 9.75V6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75V9.75"
                    stroke="#5E59FF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div>
                <span class="text-lg font-medium"> New Order </span>
                <p class="max-w-[230px] truncate text-sm text-netral-50">
                  Lorem ipsum dolor sit amet consectetur.
                </p>

                <span class="text-xs font-medium tracking-wide text-netral-60">
                  1h ago
                </span>
              </div>
              <svg
                class="absolute top-4 right-4 h-2 w-2"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#5E59FF" />
              </svg>
            </a>

            <a
              href="/analytics"
              class="relative flex items-start gap-4 border-b border-netral-30 bg-white p-4"
            >
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-surface"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.25 6.75H3.75C3.33579 6.75 3 7.08579 3 7.5V19.5C3 19.9142 3.33579 20.25 3.75 20.25H20.25C20.6642 20.25 21 19.9142 21 19.5V7.5C21 7.08579 20.6642 6.75 20.25 6.75Z"
                    stroke="#5E59FF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 9.75V6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75V9.75"
                    stroke="#5E59FF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div>
                <span class="text-lg font-medium"> New Order </span>
                <p class="max-w-[230px] truncate text-sm text-netral-50">
                  Lorem ipsum dolor sit amet consectetur.
                </p>

                <span class="text-xs font-medium tracking-wide text-netral-60">
                  1h ago
                </span>
              </div>
              <svg
                class="absolute top-4 right-4 h-2 w-2"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#5E59FF" />
              </svg>
            </a>

            <a
              href="/analytics"
              class="relative flex items-start gap-4 border-b border-netral-30 bg-white p-4"
            >
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-surface"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.25 6.75H3.75C3.33579 6.75 3 7.08579 3 7.5V19.5C3 19.9142 3.33579 20.25 3.75 20.25H20.25C20.6642 20.25 21 19.9142 21 19.5V7.5C21 7.08579 20.6642 6.75 20.25 6.75Z"
                    stroke="#5E59FF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 9.75V6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75V9.75"
                    stroke="#5E59FF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div>
                <span class="text-lg font-medium"> New Order </span>
                <p class="max-w-[230px] truncate text-sm text-netral-50">
                  Lorem ipsum dolor sit amet consectetur.
                </p>

                <span class="text-xs font-medium tracking-wide text-netral-60">
                  1h ago
                </span>
              </div>
              <svg
                class="absolute top-4 right-4 h-2 w-2"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#5E59FF" />
              </svg>
            </a>

            <a
              href="/analytics"
              class="relative flex items-end justify-end gap-4 rounded-b-2xl bg-white px-6 py-4 font-semibold text-primary-main"
            >
              View all Notifications
            </a>
          </div>
        </PopoverPanel>
      </Popover>

      <div class="navbar_profile-divider"></div>

      <Avatar size="medium" :src="AvatarPhoto" alt="Icon avatar" />

      <div class="navbar_profile-user">
        <Para variant="semibold" size="md"> Marvin McKinney </Para>
        <Para variant="regular" size="sm" class="text-netral-50">
          Super Admin
        </Para>
      </div>
      <CaretDown class="stroke-netral-50 stroke-2" />
    </div>
  </section>
</template>

<style lang="postcss">
.navbar {
  @apply flex items-center justify-between py-3.5 px-8;

  &_search {
    @apply relative max-w-sm;

    &-input {
      @apply h-full w-full rounded-lg border-2 border-transparent bg-netral-20 py-2.5 pl-12 pr-4 focus-within:border-2 focus-within:border-primary-border focus-within:outline-none focus:outline-0 focus:outline-primary-border;
    }
  }

  &_profile {
    @apply relative flex items-center gap-2;

    &-divider {
      @apply mx-3 h-10 w-px bg-netral-30;
    }

    &-user {
      @apply mr-7 flex flex-col items-start gap-1;
    }
  }

  &_notif {
    @apply relative;

    &-counter {
      @apply absolute -top-1 right-0 h-4 w-4 rounded-full bg-primary-main text-center text-[10px] font-semibold text-netral-10;
    }
  }
}
</style>
