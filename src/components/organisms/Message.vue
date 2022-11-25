<script setup lang="ts">
import Para from '../atoms/Para.vue';
import TrashIcon from '../../assets/icons/Trash.vue';
import CloseXIcon from '../../assets/icons/CloseXIcon.vue';
import CheckCircleIcon from '../../assets/icons/CheckCircle.vue'

interface Message {
    variant?: string | 'error' | 'success';
    title?: string;
    description?: string;
}

const { variant = 'error', title, description } = defineProps<Message>(); 
</script>

<template>
    <section class="message" :class="{'error': variant === 'error', 'success': variant === 'success'}">
        <TrashIcon v-if="variant === 'error'" />
        <CheckCircleIcon v-if="variant === 'success'" />

        <div class="message_content">
            <Para size="lg" variant="medium" class="mb-3">
                {{ title }}
            </Para>
            <Para size="md" variant="regular">
                {{ description }}
            </Para>
        </div>

        <CloseXIcon />
    </section>
</template>

<style lang="postcss">
.message {
    @apply fixed top-24 right-8 rounded-[10px] bg-white text-netral-80 shadow-message p-7 border-l flex items-start gap-3;

    &.error {
        @apply border-error-border;
    }

    &.success {
        @apply border-success-border;
    }

    &_content {
        @apply max-w-[260px] mr-4;
    }
}
</style>