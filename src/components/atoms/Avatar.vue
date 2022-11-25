<script setup lang="ts">
interface Avatar {
    size?: string | 'big' | 'medium' |'small';
    src: string;
    alt: string;
}

const { size, src, alt } = defineProps<Avatar>()
</script>

<template>
    <div 
    class="avatar"
    :class="{small: size === 'small', medium: size === 'medium', big: size === 'big'}">
        <img class="image" :src="src" :alt="alt"/>
    </div>
</template>

<style lang="postcss">
    .avatar {
        @apply rounded-full relative overflow-hidden bg-red-500;
        
        &.small {
            @apply w-8 h-8 max-w-[32px] max-h-[32px];
        }

        &.medium {
            @apply w-10 h-10 max-w-[40px] max-h-[40px];
        }

        &.big {
            @apply w-12 h-12 max-w-[48px] max-h-[48px];
        }

        &.image {
            @apply w-full h-full object-cover;
        }
    }
</style>