<script setup lang="ts">
import BaseLayout from '$components/templates/BaseLayout.vue'

import Heading from '$components/atoms/Heading.vue'
import Para from '$components/atoms/Para.vue'
import Button from '$components/atoms/Button.vue'

import NotFoundIll from '$assets/images/illustration-2.webp'
</script>

<template>
  <BaseLayout title="Nija Dashboard UI Kit">
    <div class="flex h-full min-h-screen flex-col items-center justify-center">
      <div class="-mt-56 flex h-full flex-col items-center justify-center">
        <Heading size="md" variant="semibold" class="mb-8"
          >Hello, Nija Visitors!</Heading
        >

        <img
          class="mb-8 w-[28rem] rounded-[10px]"
          :src="NotFoundIll"
          alt="Not Found Visitor"
        />

        <Para
          size="xl"
          variant="medium"
          class="mb-8 max-w-3xl text-center text-netral-60"
        >
          I know it's not like what you hope at all &mdash; because this
          dashboard is on progress, so for this page, please wait for several
          weeks later ya
        </Para>

        <Button href="/" type="background" variant="primary" size="lg">
          Back to home
        </Button>
      </div>
    </div>
  </BaseLayout>
</template>
