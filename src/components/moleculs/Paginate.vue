<script setup lang="ts">
import Para from '$components/atoms/Para.vue'
import Pagination from '$components/atoms/Pagination.vue'

import CaretLeftIcon from '$assets/icons/CaretLeft.vue'
import CaretRightIcon from '$assets/icons/CaretRight.vue'
</script>
<template>
  <div class="flex w-full items-center justify-between">
    <Para size="md" variant="medium" class="text-netral-50">Page 1 of 2</Para>
    <div>
      <Pagination variant="base">
        <CaretLeftIcon />
      </Pagination>
      <Pagination variant="primary">1</Pagination>
      <Pagination variant="base">2</Pagination>
      <Pagination variant="base">3</Pagination>
      <Pagination variant="base">4</Pagination>
      <Pagination variant="base">5</Pagination>
      <Pagination variant="base">...</Pagination>
      <Pagination variant="base">10</Pagination>
      <Pagination variant="base">
        <CaretRightIcon />
      </Pagination>
    </div>
  </div>
</template>
