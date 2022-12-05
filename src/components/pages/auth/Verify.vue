<script setup lang="ts">
import AuthLayout from '$components/templates/AuthLayout.vue'

import Heading from '$components/atoms/Heading.vue'
import Para from '$components/atoms/Para.vue'

import PasswordBanner from '$assets/images/password-banner.png'
import CaretLeft from '$assets/icons/CaretLeft.vue'
</script>

<template>
  <AuthLayout :image="PasswordBanner">
    <div class="container mx-auto px-20 py-16">
      <!-- Logo -->
      <div class="mb-20 flex items-center gap-4">
        <button class="flex items-center gap-2">
          <CaretLeft class="stroke-netral-100 stroke-2" />
          <Para variant="semibold" size="xl"> Back </Para>
        </button>
      </div>

      <!-- Heading -->
      <div class="mb-[146px]">
        <div>
          <Heading variant="bold" size="md" class="mb-3">
            Verify your email
          </Heading>
          <Para size="lg" variant="regular" class="text-netral-50">
            Hi Samanta! Use the link below to verify your email.
          </Para>
        </div>
      </div>

      <button
        @click="$router.push('/password/new')"
        class="mb-8 w-full rounded-[10px] bg-primary-main py-4 font-semibold leading-none text-white"
      >
        Verify email
      </button>

      <div class="flex w-full items-center justify-center gap-2 text-center">
        <Para variant="regular" size="lg"> Didn't receive the email? </Para>
        <Para variant="bold" size="lg" class="underline">
          Click to resend
        </Para>
      </div>
    </div>
  </AuthLayout>
</template>
