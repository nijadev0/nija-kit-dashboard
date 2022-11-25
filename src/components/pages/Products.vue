<script setup lang="ts">
import { ref } from 'vue';

import BaseLayout from '../templates/BaseLayout.vue';

import Title from '../atoms/Title.vue';
import Button from '../atoms/Button.vue';
import Para from '../atoms/Para.vue';

import ProductsTableItem from '../moleculs/ProductsTableItem.vue'

import SortAscendingIcon from '../../assets/icons/SortAscending.vue';
import FunnelIcon from '../../assets/icons/Funnel.vue';
import PlusIcon from '../../assets/icons/Plus.vue';
import Checkbox from '../atoms/Checkbox.vue';

import Product1 from '../../assets/images/product-1.png'; 
import Product2 from '../../assets/images/product-2.png'; 
import Product3 from '../../assets/images/product-3.png'; 
import Product4 from '../../assets/images/product-4.png'; 
import Product5 from '../../assets/images/product-5.png'; 

const products = ref([
      {
        id: '0',
        image: Product1,
        name: 'T-Men\'s UA Storm Armour Down 2\.0 Jacket',
        category: 'outer',
        status: 'active',
        stock: 401,
        spent: '$178',
      },
      {
        id: '1',
        image: Product2,
        name: 'T-Men\'s UA Storm Armour Down 2\.0 Jacket',
        category: 'outer',
        status: 'scheduled',
        stock: 738,
        spent: '$178',
      },
      {
        id: '2',
        image: Product3,
        name: 'T-Men\'s UA Storm Armour Down 2\.0 Jacket',
        category: 'shirt',
        status: 'active',
        stock: 432,
        spent: '$178',
      },
      {
        id: '3',
        image: Product4,
        name: 'T-Men\'s UA Storm Armour Down 2\.0 Jacket',
        category: 'sweater',
        status: 'draft',
        stock: 0,
        spent: '$178',
      },
      {
        id: '4',
        image: Product5,
        name: 'T-Men\'s UA Storm Armour Down 2\.0 Jacket',
        category: 'outer',
        status: 'active',
        stock: 334,
        spent: '$178',
      }
    ])
</script>

<template>
    <BaseLayout title="Products">
        <div class="mb-8 flex items-center justify-between w-full">
            <Title variant="base">
                List Products
            </Title>


            <div class="flex items-center gap-3">
                <Button variant="default" size="md" type="background">
                    <template #icon>
                        <SortAscendingIcon />
                    </template>
                    Sort
                </Button>
    
                <Button variant="default" size="md" type="background">
                    <template #icon>
                        <FunnelIcon />
                    </template>
                    Filters
                </Button>
    
                <Button variant="primary" size="md" type="background">
                    <template #icon>
                        <PlusIcon />
                    </template>
                    Add Product
                </Button>
            </div>
        </div>  
        
        <!-- Table -->
        <div class="overflow-x-auto">
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
                <tbody class="text-sm divide-y divide-slate-200 w-full capitalize">
                    <ProductsTableItem 
                        v-for="{ id, category, name, image, spent, status, stock } in products" 
                        :key="id" :name="name" :category="category" 
                        :image="image" :spent="spent" :status="status" :stock="stock" 
                    />
                </tbody>
            </table>
        </div>
    </BaseLayout>
</template>