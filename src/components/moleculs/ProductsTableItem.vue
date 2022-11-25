<script setup lang="ts">
import Checkbox from '../atoms/Checkbox.vue';
import Para from '../atoms/Para.vue';
import Status from '../atoms/Status.vue';

interface ProductItem {
    image: string,
    name: string
    category: string
    status: string
    stock: number,
    spent: string,
}

const {image, name, category, status, stock, spent} = defineProps<ProductItem>()

</script>

<template>
    <tr>
        <td class="py-5 pl-3 w-5">
            <Checkbox />
        </td>
        <td class="py-5 w-[270px]">
            <div class="flex gap-3">
                <img class="rounded-[10px] w-[86px] h-[86px]" :src="image" :alt="name">
                <div v-if="!image" class="bg-primary-main rounded-[10px] w-20 h-20" />
                <Para size="lg" variant="semibold" class="max-w-[170px]">{{ name }}</Para>
            </div>
        </td>
        
        <td class="py-5 w-[140px]">
            <Para size="lg" variant="semibold">
                {{ category }}
            </Para>
        </td>

        <td class="py-5 w-[120px]">
            <Status v-if="status === 'active'" variant="success">{{ status }}</Status>
            <Status v-if="status === 'scheduled'" variant="info">{{ status }}</Status>
        <Status v-if="status === 'draft'" variant="warning">{{ status }}</Status>
        </td>

        <td class="py-5 w-16">
            <Para size="lg" variant="semibold">
                {{ stock }}
            </Para>
        </td>


        <td class="py-5 w-[120px]">
            <Para size="lg" variant="semibold">
                {{ spent }}
            </Para>
        </td>

        <td class="py-5 w-[100px]">
            <button class="text-primary-main font-semibold">
                Detail
            </button>
        </td>
    </tr>  
</template>

<style lang="postcss">
</style>
