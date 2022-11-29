<script setup lang="ts">
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'

import BaseLayout from '$components/templates/BaseLayout.vue';

import Para from '$components/atoms/Para.vue';
import Title from '$components/atoms/Title.vue';
import Toggle from '$components/atoms/Toggle.vue';
import Button from '$components/atoms/Button.vue';

import UploadSimpleIcon from '$assets/icons/UploadSimple.vue';
import CaretDownIcon from '$assets/icons/CaretDown.vue';
import CurrencyDollarIcon from '$assets/icons/CurrencyDollar.vue';
import ChecksIcon from '$assets/icons/Checks.vue';
import PercentIcon from '$assets/icons/Percent.vue';

const people = [
    { id: 1, name: 'Select Category', unavailable: true },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
]
const selectedPerson = ref(people[0])
const enabled = ref(false);
const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}

function openModal() {
  isOpen.value = true
}
</script>

<template>
    <BaseLayout title="Products">
        <Title variant="base">
            Product Information
        </Title>
        <div class="my-7 w-full h-px bg-netral-20" />
        <div class="flex items-start justify-between">
            <div class="max-w-[280px]">
                <Para size="lg" variant="semibold" class="mb-2">
                    Product Name
                </Para>
                <Para size="md" variant="regular" class="text-netral-50">
                    Do not exceed 20 characters when entering the product name.
                </Para>
            </div>
        
            <input class="outline-none shadow-input focus-within:border focus-within:border-primary-main p-3.5 border border-netral-30 rounded-lg max-w-[720px] w-full" type="text" placeholder="Enter product name"/>
        </div>
        <div class="my-7 w-full h-px bg-netral-20" />
        <div class="flex items-start justify-between">
            <div class="max-w-[280px]">
                <Para size="lg" variant="semibold" class="mb-2">
                    Description
                </Para>
                <Para size="md" variant="regular" class="text-netral-50">
                    Lorem ipsum dolor sit amet consectetur. Sed quam semper nibh fermentum.
                </Para>
            </div>
        
            <textarea rows="6" class="shadow-input outline-none focus-within:border focus-within:border-primary-main p-3.5 border border-netral-30 rounded-lg max-w-[720px] w-full" type="text" placeholder="Description"/>
        </div>
        <div class="my-7 w-full h-px bg-netral-20" />
        <div class="flex items-start justify-between">
            <div class="max-w-[280px]">
                <Para size="lg" variant="semibold" class="mb-2">
                    Category
                </Para>
                <Para size="md" variant="regular" class="text-netral-50">
                    Lorem ipsum dolor sit amet consectetur. Sed quam semper nibh fermentum.
                </Para>
            </div>
        
            <Listbox v-model="selectedPerson">
                <div class="max-w-[720px] w-full">
                    <ListboxButton :class="selectedPerson.unavailable ? 'text-netral-50 stroke-netral-50': 'text-netral-80 stroke-netral-80'" class="flex items-center justify-between p-3.5 border border-netral-30 rounded-lg w-full">
                        <span>
                            {{ selectedPerson.name }}
                        </span>
                        <CaretDownIcon class="stroke-2 stroke-inherit w-5 h-5"/>
                    </ListboxButton>
                    <ListboxOptions class="w-full">
                        <ListboxOption
                            v-for="person in people"
                            :key="person.id"
                            :value="person"
                            :disabled="person.unavailable"
                        >
                            {{ person.name }}
                        </ListboxOption>
                    </ListboxOptions>
                </div>
            </Listbox>
        </div>

        <div class="my-7 w-full h-px bg-netral-20" />

        <div class="flex items-start justify-between">
            <div class="max-w-[280px]">
                <Para size="lg" variant="semibold" class="mb-2">
                    Gender
                </Para>
                <Para size="md" variant="regular" class="text-netral-50">
                    Lorem ipsum dolor sit amet consectetur. Sed quam semper nibh fermentum quis pretium tristique.                </Para>
            </div>
        
            <Listbox v-model="selectedPerson">
                <div class="max-w-[720px] w-full">
                    <ListboxButton :class="selectedPerson.unavailable ? 'text-netral-50 stroke-netral-50': 'text-netral-80 stroke-netral-80'" class="flex items-center justify-between p-3.5 border border-netral-30 rounded-lg w-full">
                        <span>
                            {{ selectedPerson.name }}
                        </span>
                        <CaretDownIcon class="stroke-2 stroke-inherit w-5 h-5"/>
                    </ListboxButton>
                    <ListboxOptions class="w-full">
                        <ListboxOption
                            v-for="person in people"
                            :key="person.id"
                            :value="person"
                            :disabled="person.unavailable"
                        >
                            {{ person.name }}
                        </ListboxOption>
                    </ListboxOptions>
                </div>
            </Listbox>
        </div>

        <div class="my-7 w-full h-px bg-netral-20" />

        <div class="flex items-start justify-between">
            <div class="max-w-[280px]">
                <Para size="lg" variant="semibold" class="mb-2">
                    Product Name
                </Para>
                <Para size="md" variant="regular" class="text-netral-50">
                    Lorem ipsum dolor sit amet consectetur. Sed quam semper nibh fermentum quis pretium tristique.
                </Para>
            </div>
        
            <div class="relative w-full max-w-[720px]">
                <input class="outline-none shadow-input focus-within:border focus-within:border-primary-main p-3.5 border border-netral-30 rounded-lg w-full" type="number" placeholder="Enter product name"/>
                <div class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-netral-20 text-center text-netral-80 rounded-md">
                    g
                </div>
            </div>
        </div>

        <div class="my-7 w-full h-px bg-netral-20" />

        <div class="flex items-start justify-between">
            <div class="max-w-[280px]">
                <Para size="lg" variant="semibold" class="mb-2">
                    Status
                </Para>
                <Para size="md" variant="regular" class="text-netral-50">
                    Lorem ipsum dolor sit amet consectetur. Sed quam semper nibh fermentum quis pretium tristique.
                </Para>
            </div>
            <Toggle />
        </div>

        <div class="my-7 w-full h-px bg-netral-20" />

        <div class="flex items-start justify-between">
            <div class="max-w-[280px]">
                <Para size="lg" variant="semibold" class="mb-2">
                    Status
                </Para>
                <Para size="md" variant="regular" class="text-netral-50">
                    Lorem ipsum dolor sit amet consectetur. Sed quam semper nibh fermentum quis pretium tristique.
                </Para>
            </div>

            <div class="flex items-center gap-[26px]">
                <div class="flex flex-col items-center justify-center gap-2 w-40 h-40 border-2 border-dashed border-netral-30 rounded-xl">
                    <UploadSimpleIcon />
                    <Button type="background" variant="primary" size="sm">
                        Add Image
                    </Button>
                    <Para size="sm" variant="regular" class="text-netral-50 max-w-[118px] text-center">or drop image to upload</Para>
                </div>
                <div class="flex flex-col items-center justify-center gap-2 w-40 h-40 border-2 border-dashed border-netral-30 rounded-xl">
                    <UploadSimpleIcon />
                    <Button type="background" variant="primary" size="sm">
                        Add Image
                    </Button>
                    <Para size="sm" variant="regular" class="text-netral-50 max-w-[118px] text-center">or drop image to upload</Para>
                </div>
                <div class="flex flex-col items-center justify-center gap-2 w-40 h-40 border-2 border-dashed border-netral-30 rounded-xl">
                    <UploadSimpleIcon />
                    <Button type="background" variant="primary" size="sm">
                        Add Image
                    </Button>
                    <Para size="sm" variant="regular" class="text-netral-50 max-w-[118px] text-center">or drop image to upload</Para>
                </div>
                <div class="flex flex-col items-center justify-center gap-2 w-40 h-40 border-2 border-dashed border-netral-30 rounded-xl">
                    <UploadSimpleIcon />
                    <Button type="background" variant="primary" size="sm">
                        Add Image
                    </Button>
                    <Para size="sm" variant="regular" class="text-netral-50 max-w-[118px] text-center">or drop image to upload</Para>
                </div>
            </div>
        </div>

        <template #layout>
            <section class="min-h-[428px] rounded-3xl bg-white w-full p-6">
                <Title variant="base">
                    Price
                </Title>

                <div class="my-7 w-full h-px bg-netral-20" />
                
                <div class="flex items-start justify-between">
                    <div class="max-w-[280px]">
                        <Para size="lg" variant="semibold" class="mb-2">
                            Price
                        </Para>
                    </div>
                    
                    <div class="relative w-full max-w-[720px]">
                        <input class="outline-none shadow-input focus-within:border focus-within:border-primary-main p-3.5 pl-12 border border-netral-30 rounded-lg w-full" placeholder="Rp. 0,-"/>
                        <div class="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-netral-20 text-center text-netral-80 rounded-md flex justify-center items-center">
                            <CurrencyDollarIcon />
                        </div>
                    </div>
                </div>

                <div class="my-7 w-full h-px bg-netral-20" />

                <div class="flex items-start justify-between">
                    <div class="max-w-[280px]">
                        <Para size="lg" variant="semibold" class="mb-2">
                            Discount Type
                        </Para>
                        <Para size="md" variant="regular" class="text-netral-50">
                            Lorem ipsum dolor sit amet consectetur. Sed quam semper nibh fermentum.
                        </Para>
                    </div>
                
                    <Listbox v-model="selectedPerson">
                        <div class="max-w-[720px] w-full">
                            <ListboxButton :class="selectedPerson.unavailable ? 'text-netral-50 stroke-netral-50': 'text-netral-80 stroke-netral-80'" class="flex items-center justify-between p-3.5 border border-netral-30 rounded-lg w-full">
                                <span>
                                    {{ selectedPerson.name }}
                                </span>
                                <CaretDownIcon class="stroke-2 stroke-inherit w-5 h-5"/>
                            </ListboxButton>
                            <ListboxOptions class="w-full">
                                <ListboxOption
                                    v-for="person in people"
                                    :key="person.id"
                                    :value="person"
                                    :disabled="person.unavailable"
                                >
                                    {{ person.name }}
                                </ListboxOption>
                            </ListboxOptions>
                        </div>
                    </Listbox>
                </div>

                <div class="my-7 w-full h-px bg-netral-20" />
                
                <div class="flex items-start justify-between">
                    <div class="max-w-[280px]">
                        <Para size="lg" variant="semibold" class="mb-2">
                            Price
                        </Para>
                        <Para size="md" variant="regular" class="text-netral-50">
                            Lorem ipsum dolor sit amet consectetur. Sed quam semper nibh fermentum quis pretium tristique.
                        </Para>
                    </div>
                    
                    <div class="relative w-full max-w-[720px]">
                        <input class="outline-none shadow-input focus-within:border focus-within:border-primary-main p-3.5 pl-12 border border-netral-30 rounded-lg w-full" placeholder="Enter nominal discount"/>
                        <div class="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-netral-20 text-center text-netral-80 rounded-md flex justify-center items-center">
                            <PercentIcon />
                        </div>
                    </div>
                </div>
            </section>
        </template>

        <template #extend>
            <!-- Action -->
            <div class="relative">
                <TransitionRoot appear :show="enabled" as="template">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-in"
                        enter-from="-bottom-40 opacity-0"
                        enter-to="bottom-0 opacity-100"
                        leave="duration-300 ease-out"
                        leave-from="opacity-100 bottom-0"
                        leave-to="opacity-0 -bottom-80"
                    >
                        <div class="pageAction">
                            <div class="pageAction_status">
                                <ChecksIcon />
                                <span class="pageAction_status-text">
                                    Last saved
                                </span>
                                <span class="text-sm font-semibold text-netral-80 leading-[1.43]">Nov 9, 2022-17.09</span>
                            </div>

                            <div class="pageAction_cta">
                                <Button type="background" variant="base" size="md">Draft</Button>
                            
                                <Alert variant="error" 
                                    :isOpen="isOpen"
                                    :closeModal="closeModal"
                                    title="Delete Product" 
                                    description="Are you sure to delete your product? You won't get your data back once it deleted"
                                />

                                <Button type="background" variant="primary" size="md" @click="openModal">Next</Button>
                            </div>
                        </div>
                    </TransitionChild>
                </TransitionRoot>
            </div>
        </template>
    </BaseLayout>
</template>