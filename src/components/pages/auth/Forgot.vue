<script setup lang="ts">
import AuthLayout from '$components/templates/AuthLayout.vue'

import Heading from '$components/atoms/Heading.vue'
import Para from '$components/atoms/Para.vue'

import PasswordBanner from '$assets/images/password-banner.png'
import CaretLeft from '$assets/icons/CaretLeft.vue'
import Input from '$components/moleculs/Input.vue'
</script>

<template>
  <AuthLayout :image="PasswordBanner">
    <div class="container mx-auto px-20 py-16">
      <!-- Logo -->

      <div class="mb-[136px] flex items-center gap-4">
        <button class="flex items-center gap-2">
          <CaretLeft class="stroke-netral-100 stroke-2" />
          <Para variant="semibold" size="xl"> Back </Para>
        </button>
        <!-- <div class="flex items-center gap-4">
          <NijaKit />
          <Para size="xl" variant="semibold"> Nija Kit Dashboard </Para>
        </div> -->
      </div>
      <!-- Heading -->
      <div class="mb-8">
        <Heading variant="bold" size="md" class="mb-3">
          Forgot password?
        </Heading>
        <Para size="lg" variant="regular" class="text-netral-50">
          No worries, we’ll send you reset instruction.
        </Para>
      </div>

      <form class="flex w-full flex-col items-start gap-10">
        <div class="flex w-full flex-col gap-1.5">
          <label class="text-sm font-semibold" for="email">Email</label>
          <Input label="Enter your email" />
        </div>

        <button
          class="w-full rounded-[10px] bg-primary-main py-4 font-semibold leading-none text-white"
        >
          Reset password
        </button>
      </form>
    </div>
  </AuthLayout>
</template>
