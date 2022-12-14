<script setup lang="ts">
import Checkbox from '$components/atoms/Checkbox.vue'
import Para from '$components/atoms/Para.vue'
import Status from '$components/atoms/Badge.vue'

interface ProductItem {
  image: string
  name: string
  category: string
  status: string
  stock: number
  spent: string
}

const { image, name, category, status, stock, spent } =
  defineProps<ProductItem>()
</script>

<template>
  <tr class="tableData">
    <td class="tableData_col1">
      <Checkbox />
    </td>
    <td class="tableData_col2">
      <div class="tableData_product">
        <img class="tableData_product-photo" :src="image" :alt="name" />
        <div v-if="!image" class="tableData_product-default" />
        <Para size="lg" variant="semibold" class="max-w-[170px]">
          {{ name }}
        </Para>
      </div>
    </td>

    <td class="tableData_col3">
      <Para size="lg" variant="semibold">
        {{ category }}
      </Para>
    </td>

    <td class="tableData_col4">
      <Status v-if="status === 'active'" variant="success">{{ status }}</Status>
      <Status v-if="status === 'scheduled'" variant="info">{{ status }}</Status>
      <Status v-if="status === 'draft'" variant="warning">{{ status }}</Status>
    </td>

    <td class="tableData_col5">
      <Para size="lg" variant="semibold">
        {{ stock }}
      </Para>
    </td>

    <td class="tableData_col6">
      <Para size="lg" variant="semibold">
        {{ spent }}
      </Para>
    </td>

    <td class="tableData_col7">
      <button
        @click="$router.push('/products/detail')"
        class="font-semibold text-primary-main"
      >
        Detail
      </button>
    </td>
  </tr>
</template>

<style lang="postcss">
.tableData {
  @apply border-b border-netral-30;

  &_col1 {
    @apply w-5 py-5 pl-3;
  }

  &_col2 {
    @apply w-[16.875rem] py-5;
  }

  &_col3 {
    @apply w-[8.75rem] py-5;
  }

  &_col4 {
    @apply w-[7.5rem] py-5;
  }

  &_col5 {
    @apply w-16 py-5;
  }

  &_col6 {
    @apply w-[7.5rem] py-5;
  }

  &_col7 {
    @apply w-24 py-5;
  }

  &_product {
    @apply flex items-center gap-3;

    &-photo {
      @apply h-[5.375rem] w-[5.375rem] rounded-[10px];
    }

    &-default {
      @apply h-20 w-20 rounded-[10px] bg-primary-main;
    }
  }
}
</style>
