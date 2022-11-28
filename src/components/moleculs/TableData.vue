<script setup lang="ts">
import Checkbox from '$components/atoms/Checkbox.vue';
import Para from '$components/atoms/Para.vue';
import Status from '$components/atoms/Badge.vue';

interface ProductItem {
    image: string,
    name: string
    category: string
    status: string
    stock: number,
    spent: string,
}

const { image, name, category, status, stock, spent } = defineProps<ProductItem>()
</script>

<template>
    <tr class="tableData">
        <td class="tableData_col1">
            <Checkbox />
        </td>
        <td class="tableData_col2">
            <div class="tableData_product">
                <img class="tableData_product-photo" :src="image" :alt="name">
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
            <button class="text-primary-main font-semibold">
                Detail
            </button>
        </td>
    </tr>  
</template>

<style lang="postcss">
.tableData {
    @apply border-b border-netral-30;

    &_col1 {
        @apply py-5 pl-3 w-5;
    }

    &_col2 {
        @apply py-5 w-[16.875rem];
    }

    &_col3 {
        @apply py-5 w-[8.75rem];
    }

    &_col4 {
        @apply py-5 w-[7.5rem];
    }

    &_col5 {
        @apply py-5 w-16;
    }

    &_col6 {
        @apply py-5 w-[7.5rem];
    }

    &_col7 {
        @apply py-5 w-24;
    }

    &_product {
        @apply flex items-center gap-3;

        &-photo {
            @apply rounded-[10px] w-[5.375rem] h-[5.375rem];
        }

        &-default {
            @apply bg-primary-main rounded-[10px] w-20 h-20;
        }
    }
}    

</style>
