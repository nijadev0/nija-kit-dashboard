<script setup lang="ts">
import BaseLayout from '$components/templates/BaseLayout.vue';

import Heading from '$components/atoms/Heading.vue';
import Para from '$components/atoms/Para.vue';
import Button from '$components/atoms/Button.vue';

import WelcomeIll from '$assets/images/illustration-1.webp';
</script>

<template>
    <BaseLayout title="Nija Dashboard UI Kit">
        <div class="min-h-screen h-full flex flex-col justify-center items-center">
            <div class="-mt-56 flex flex-col justify-center items-center h-full">
                <Heading size="md" variant="semibold" class="mb-8">Hello, Nija Visitors!</Heading>
    
                <img class="w-[28rem] rounded-[10px] mb-8" :src="WelcomeIll" alt="Welcome Visitor" />
    
                <Para size="xl" variant="base" class="text-netral-60 text-center max-w-3xl mb-8">
                    We are currently working on this template. This template contains several base style for our internal Dashboard UI kit.
                    If you found any error, unmatching styles, or any other that feels like not okay, dont worry to send feedback in our Discord, Thank You.
                </Para>
    
                <Button type="background" variant="primary" size="lg">
                    <a target="_blank" href="https://discord.com/channels/907632044375425065/907632044840980486">
                        Send your message
                    </a>
                </Button>
            </div>
        </div>
    </BaseLayout>
</template>