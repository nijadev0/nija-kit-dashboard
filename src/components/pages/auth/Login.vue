<script setup lang="ts">
import { ref } from 'vue'

import AuthLayout from '$components/templates/AuthLayout.vue'

import Heading from '$components/atoms/Heading.vue'
import Para from '$components/atoms/Para.vue'
import Checkbox from '$components/atoms/Checkbox.vue'

import Input from '$components/moleculs/Input.vue'

import NijaKit from '$assets/icons/NijaKit.vue'
import EyeSlash from '$assets/icons/EyeSlash.vue'
import Eye from '$assets/icons/Eye.vue'

import LoginBanner from '$assets/images/login-banner.png'

let showPassword = ref(false)
let inputType = ref('password')
</script>

<template>
  <AuthLayout :image="LoginBanner">
    <div class="container mx-auto px-20 py-16">
      <!-- Logo -->
      <div class="mb-20 flex items-center gap-4">
        <NijaKit />
        <Para size="xl" variant="semibold"> Nija Kit Dashboard </Para>
      </div>
      <!-- Heading -->
      <div class="mb-8">
        <Heading variant="bold" size="md" class="mb-3"> Hi, There! </Heading>
        <Para size="xl" variant="medium">
          Welcome back to e-commerce dashboard
        </Para>
      </div>

      <form class="mb-4 flex w-full flex-col items-start gap-6">
        <div class="relative flex w-full flex-col gap-1.5">
          <label class="text-sm font-semibold" for="email">Email</label>
          <div class="relative">
            <input
              class="w-full rounded-md bg-netral-20 p-3.5 text-base"
              type="email"
              name="email"
              placeholder="samanta@gmail.com"
            />
          </div>
        </div>

        <div class="flex w-full flex-col gap-1.5">
          <label class="text-sm font-semibold" for="password">Password</label>
          <div class="relative">
            <input
              class="w-full rounded-md bg-netral-20 p-3.5 text-base"
              :type="inputType"
              name="password"
              placeholder="•••••••••"
            />
            <EyeSlash
              @click=";(showPassword = false), (inputType = 'password')"
              class="absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer"
              :class="{
                hidden: showPassword === false,
                block: showPassword === true
              }"
            />
            <Eye
              @click=";(showPassword = true), (inputType = 'text')"
              class="absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer"
              :class="{
                hidden: showPassword === true,
                block: showPassword === false
              }"
            />
          </div>
        </div>

        <div class="flex w-full items-center justify-between">
          <!-- Checkbox -->
          <div class="flex items-center gap-1.5">
            <Checkbox />
            <span> Remember Me </span>
          </div>

          <button class="text-right font-semibold underline underline-offset-2">
            Forgot Password
          </button>
        </div>

        <button
          class="w-full rounded-[10px] bg-primary-main py-4 font-semibold leading-none text-white"
        >
          Log in
        </button>
      </form>
    </div>
  </AuthLayout>
</template>
