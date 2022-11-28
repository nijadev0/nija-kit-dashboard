<script setup lang="ts">
import { ref } from 'vue';

import BaseLayout from '$components/templates/BaseLayout.vue';

import Title from '$components/atoms/Title.vue';
import Button from '$components/atoms/Button.vue';
import Para from '$components/atoms/Para.vue';
import Checkbox from '$components/atoms/Checkbox.vue';
import Pagination from '$components/atoms/Pagination.vue';

import ProductsTableItem from '$components/moleculs/TableData.vue'

// import Alert from '$components/organisms/Alert.vue';
// import Message from '$components/organisms/Message.vue';

import SortAscendingIcon from '$assets/icons/SortAscending.vue';
import FunnelIcon from '$assets/icons/Funnel.vue';
import PlusIcon from '$assets/icons/Plus.vue';
import ChecksIcon from '$assets/icons/Check.vue';
import CaretLeftIcon from '$assets/icons/CaretLeft.vue';
import CaretRightIcon from '$assets/icons/CaretRight.vue';

import Product1 from '$assets/images/product-1.png'; 
import Product2 from '$assets/images/product-2.png'; 
import Product3 from '$assets/images/product-3.png'; 
import Product4 from '$assets/images/product-4.png'; 
import Product5 from '$assets/images/product-5.png'; 

const products = ref([
      {
        id: '0',
        image: Product1,
        name: 'UA Storm Armour Down 2\.0 Jacket',
        category: 'outer',
        status: 'active',
        stock: 401,
        spent: '$178',
      },
      {
        id: '1',
        image: Product2,
        name: 'T-Shirt Oversize Cielo Basil',
        category: 'jacket',
        status: 'scheduled',
        stock: 738,
        spent: '$178',
      },
      {
        id: '2',
        image: Product3,
        name: 'T-Shirt Thompson Black',
        category: 'shirt',
        status: 'active',
        stock: 432,
        spent: '$139',
      },
      {
        id: '2',
        image: Product4,
        name: 'Oversize Yucatan Glacier Lake',
        category: 'pants',
        status: 'draft',
        stock: 53,
        spent: '$99',
      },
      {
        id: '4',
        image: Product5,
        name: 'T-Shirt Project Summer Black',
        category: 'shirt',
        status: 'active',
        stock: 32,
        spent: '$178',
      }
    ])
</script>

<template>
    <BaseLayout title="Products">
        <div class="mb-8 flex items-center justify-between w-full relative">
            <!-- <Message variant="error" 
                     title="Product has been deleted" 
                     description="Lorem ipsum dolor sit amet consectetur. Orci nec leo risus turpis." /> -->

            <!-- <Alert variant="error" 
                   title="Delete Product" 
                   description="Lorem ipsum dolor sit amet consectetur. Orci nec leo risus turpis accumsan laoreet quam magnis eget. Velit morbi mattis in mi faucibus elementum tortor." /> -->

            <Title variant="base">
                List Products
            </Title>


            <div class="flex items-center gap-3">
                <Button variant="default" size="md" type="background" :icon="true" icon-flow="right">
                    <template #icon>
                        <SortAscendingIcon />
                    </template>
                    Sort
                </Button>
    
                <Button variant="default" size="md" type="background" :icon="true" icon-flow="right">
                    <template #icon>
                        <FunnelIcon />
                    </template>
                    Filters
                </Button>
    
                <Button variant="primary" size="md" type="background" :icon="true" icon-flow="left">
                    <template #icon>
                        <PlusIcon />
                    </template>
                    Add Product
                </Button>
            </div>
        </div>  
        
        <!-- Table -->
        <div class="overflow-x-auto mb-6">
            <table class="table-auto w-full">
                <!-- Table header -->
                <thead class="text-xs bg-[#fafafa] text-netral-50 rounded-lg font-semibold uppercase">
                    <tr>
                        <th class="py-5 text-left w-5 pl-3 pr-6">
                            <Checkbox />
                        </th>
                        <th class="py-5 text-left w-[270px]">
                            <Para size="md" variant="semibold">
                                Product
                            </Para>
                        </th>
                        <th class="py-5 text-left w-[140px]">
                            <Para size="md" variant="semibold">
                                Category
                            </Para>
                        </th>
                        <th class="py-5 text-left w-[120px]">
                            <Para size="md" variant="semibold">
                                Status
                            </Para>
                        </th>
                        <th class="py-5 text-left w-16">
                            <Para size="md" variant="semibold">
                                Stock
                            </Para>
                        </th>
                        <th class="py-5 text-left w-[120px]">
                            <Para size="md" variant="semibold">
                                Price
                            </Para>
                        </th>
                        <th class="py-5 text-left w-[100px]">
                            <Para size="md" variant="semibold">
                                Action
                            </Para>
                        </th>
                    </tr>
                </thead>
                <tbody class="w-full capitalize">
                    <ProductsTableItem 
                        v-for="{ id, category, name, image, spent, status, stock } in products" 
                        :key="id" :name="name" :category="category" 
                        :image="image" :spent="spent" :status="status" :stock="stock" 
                    />
                </tbody>
            </table>
        </div>

        <!-- Pagination -->
        <div class="w-full flex items-center justify-between">
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

        <template #extend>
            <!-- Action -->
            <div class="pageAction">
                <div class="pageAction_status">
                    <ChecksIcon />
                    <span class="pageAction_status-text">
                        2 products selected
                    </span>
                </div>
                <div class="pageAction_cta">
                    <Button type="outline" variant="primary" size="md">Draft</Button>
                    <Button type="background" variant="error" size="md">Delete</Button>
                </div>
            </div>
        </template>
    </BaseLayout>
</template>

<style lang="postcss">
.pageAction {
    @apply bg-white rounded-[10px] px-6 py-4 flex items-center justify-between shadow-extend border border-netral-30;

    &_status {
        @apply flex items-center gap-2;

        &-text {
            @apply font-semibold text-base text-netral-50;
        }
    }

    &_cta {
        @apply flex items-center gap-3;
    }
}
</style>