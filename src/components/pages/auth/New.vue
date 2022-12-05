<script setup lang="ts">
import { ref } from 'vue'

import AuthLayout from '$components/templates/AuthLayout.vue'

import PasswordBanner from '$assets/images/password-banner.png'
import Heading from '$components/atoms/Heading.vue'
import Para from '$components/atoms/Para.vue'
import Input from '$components/moleculs/Input.vue'
import Checkbox from '$components/atoms/Checkbox.vue'
import NijaKit from '$assets/icons/NijaKit.vue'
import Eye from '$assets/icons/Eye.vue'
import EyeSlash from '$assets/icons/EyeSlash.vue'

let showPassword = ref(false)
let inputType = ref('password')
</script>

<template>
  <AuthLayout :image="PasswordBanner">
    <div class="container mx-auto px-20 py-16">
      <!-- Logo -->
      <div class="mb-20 flex items-center gap-4">
        <NijaKit />
        <Para size="xl" variant="semibold"> Nija Kit Dashboard </Para>
      </div>
      <!-- Heading -->
      <div class="mb-8">
        <Heading variant="bold" size="md" class="mb-3">
          Set new password
        </Heading>
        <Para size="xl" variant="regular" class="w-[500px] text-netral-50">
          Your new password must be different to previously used passwords.
        </Para>
      </div>

      <form class="flex w-full flex-col items-start gap-6">
        <div class="flex w-full flex-col gap-1.5">
          <label class="text-sm font-semibold" for="new-password">
            Password
          </label>
          <div class="relative">
            <input
              class="w-full rounded-md bg-netral-20 p-3.5 text-base"
              :type="inputType"
              name="password"
              placeholder="New password"
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

        <div class="mb-4 flex w-full flex-col gap-1.5">
          <label class="text-sm font-semibold" for="new-password">
            Confirm Password
          </label>
          <div class="relative">
            <input
              class="w-full rounded-md bg-netral-20 p-3.5 text-base"
              :type="inputType"
              name="password"
              placeholder="Confirm new password"
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

        <button
          @click="$router.push('/password/reseted')"
          class="w-full rounded-[10px] bg-primary-main py-4 font-semibold leading-none text-white"
        >
          Reset Password
        </button>
      </form>
    </div>
  </AuthLayout>
</template>
