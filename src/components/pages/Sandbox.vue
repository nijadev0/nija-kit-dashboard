<script setup lang="ts">
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

import BaseLayout from '$components/templates/BaseLayout.vue';
import Button from '$components/atoms/Button.vue';
import SideMenu from '$components/moleculs/SideMenu.vue';

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}

function openModal() {
  isOpen.value = true
}

</script>

<template>
    <BaseLayout title="Ini Sandbox">
        <Disclosure>
            <DisclosureButton class="py-2">
                <SideMenu variant="main" :expand="true">
                    <PackageIcon class="stroke-inherit stroke-2" />
                    Products
                </SideMenu>
            </DisclosureButton>
            <DisclosurePanel class="text-gray-500">
                <SideMenu href="/products">
                    Halo
                </SideMenu>
            </DisclosurePanel>
        </Disclosure>

    </BaseLayout>
</template>