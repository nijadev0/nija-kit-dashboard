<script lang="ts" setup>
import Button from '$components/atoms/Button.vue'
import Para from '$components/atoms/Para.vue'
import BaseLayout from '$components/templates/BaseLayout.vue'
</script>
<template>
  <BaseLayout title="Products" full>
    <div class="flex items-center justify-center">
      <div class="flex max-w-[640px] flex-col items-center gap-6 pt-24">
        <div class="h-80 w-80 rounded-[10px] bg-netral-30" />
        <Para variant="regular" size="lg" class="text-center text-netral-80">
          Product variety refers to the number and range of products
          (differentiated by specifications) offered by sellers. And also
          product variety is beneficial for consumers because they can choose
          from a variety of alternatives.
        </Para>

        <Button
          variant="primary"
          size="lg"
          type="background"
          btn-type="link"
          href="/variants"
          class="px-8"
        >
          Add Variant
        </Button>
      </div>
    </div>
  </BaseLayout>
</template>
