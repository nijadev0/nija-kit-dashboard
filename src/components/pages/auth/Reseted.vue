<script setup lang="ts">
import AuthLayout from '$components/templates/AuthLayout.vue'

import Heading from '$components/atoms/Heading.vue'
import Para from '$components/atoms/Para.vue'

import PasswordBanner from '$assets/images/password-banner.png'
import CaretLeft from '$assets/icons/CaretLeft.vue'
import CheckCirclePurple from '$assets/icons/CheckCirclePurple.vue'
</script>

<template>
  <AuthLayout :image="PasswordBanner">
    <div class="container mx-auto px-20 py-16">
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

      <div class="flex flex-col items-center justify-center text-center">
        <CheckCirclePurple class="mb-6" />
        <Heading variant="bold" size="md" class="mb-3 max-w-[428px]">
          Password reset was successful
        </Heading>
        <Para
          size="lg"
          variant="regular"
          class="mb-10 max-w-[428px] text-netral-50"
        >
          Your password has been successfully reset. Click bellow to log in
          magically.
        </Para>
        <button
          @click="$router.push('/account/login')"
          class="w-full max-w-[428px] rounded-[10px] bg-primary-main py-4 font-semibold leading-none text-white"
        >
          Login
        </button>
      </div>
    </div>
  </AuthLayout>
</template>
