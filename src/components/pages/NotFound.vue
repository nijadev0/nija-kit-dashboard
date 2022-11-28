<script setup lang="ts">
import BaseLayout from '$components/templates/BaseLayout.vue';

import Heading from '$components/atoms/Heading.vue';
import Para from '$components/atoms/Para.vue';
import Button from '$components/atoms/Button.vue';

import NotFoundIll from '$assets/images/illustration-2.webp';
</script>

<template>
    <BaseLayout title="Nija Dashboard UI Kit">
        <div class="min-h-screen h-full flex flex-col justify-center items-center">
            <div class="-mt-56 flex flex-col justify-center items-center h-full">
                <Heading size="md" variant="semibold" class="mb-8">Hello, Nija Visitors!</Heading>
    
                <img class="w-[28rem] rounded-[10px] mb-8" :src="NotFoundIll" alt="Not Found Visitor" />
    
                <Para size="xl" variant="base" class="text-netral-60 text-center max-w-3xl mb-8">
                    I know it's not like what you hope at all &mdash; because this dashboard is on progress, so for this page, please wait for several weeks later ya
                </Para>
    
                <Button href="/" type="background" variant="primary" size="lg">
                    Back to home
                </Button>
            </div>
        </div>
    </BaseLayout>
</template>