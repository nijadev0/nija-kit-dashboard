<script setup lang="ts">
import Para from '$components/atoms/Para.vue';
import Button from '$components/atoms/Button.vue';

import CloseXIcon from '$assets/icons/CloseXIcon.vue'

interface Alert {
    variant?: string | 'error' | 'warning';
    title: string;
    description: string;
}

const { variant = 'error', title, description } = defineProps<Alert>()
</script>

<template>
    <section class="alert">
        <div class="alert_card">
            <div class="alert_heading">
                <div class="alert_title">
                    <div class="alert_title-bg" :class="{ 'error': variant === 'error', 'warning': variant === 'warning'}" />
                    <Para size="xl" variant="semibold">{{ title }}</Para>
                </div>
                <CloseXIcon />
            </div>

            <Para size="lg" variant="regular" class="mb-10">
                {{ description }}
            </Para>

            <div class="alert_cta">
                <div class="alert_cta-default">
                    <Button variant="default" size="lg" class="w-full text-netral-50">Cancel</Button>
                </div>
                <div class="alert_cta-error">
                    <Button variant="error" type="background" size="lg" class="w-full">Delete</Button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="postcss">
.alert {
    @apply fixed z-[9999] w-full h-full inset-0 bg-black/50 hidden;

    &_card {
        @apply bg-white max-w-[37.5rem] w-full absolute shadow-message top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-[10px];
    }

    &_heading {
        @apply flex items-start justify-between;
    }

    &_title {
        @apply flex gap-3 mb-6;

        &-bg {
            @apply w-2 h-6 rounded-full;

            &.error {
                @apply bg-error-main;
            }

            &.warning {
                @apply bg-warning-main;
            }
        }
    }

    &_cta {
        @apply w-full flex items-center justify-end gap-3;
    
        &-default {
            @apply w-[136px] text-netral-50;
        }

        &-error {
            @apply w-[144px];
        }
    }
}
</style>