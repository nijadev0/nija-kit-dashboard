<script setup lang="ts">
import Para from '$components/atoms/Para.vue';

const {variant} = defineProps<{variant?: string | 'primary' | 'outline' | 'base'}>();
</script>
<template>
    <button class="pagination" :class="{primary :variant === 'primary', base :variant === 'base', outline :variant === 'outline'}">
        <Para size="md" variant="medium" class="w-8 text-center border-none outline-none">
            <slot />
        </Para>
    </button>
</template>

<style lang="postcss">
.pagination {
    @apply py-1.5 rounded-[10px] border border-transparent outline-none;

    &.primary {
        @apply bg-primary-main text-netral-10;
    }

    &.base {
        @apply bg-netral-10 text-netral-60;
    }

    &.outline {
        @apply border border-netral-30 bg-netral-10 text-netral-60;
    }
}
</style>