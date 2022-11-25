<script setup lang="ts">
import Avatar from '../atoms/Avatar.vue';
import Para from '../atoms/Para.vue';

import AvatarPhoto from '../../assets/images/avatar.png';
import MagnifyingGlass from '../../assets/icons/MagnifyingGlass.vue';
import CaretDown from '../../assets/icons/CaretDown.vue';
import BellSimple from '../../assets/icons/BellSimple.vue';

</script>

<template>
    <section class="navbar">
        <div class="navbar_search">
            <MagnifyingGlass />

            <input type="text" class="navbar_search-input" placeholder="What are you looking for?">
        </div>

        <div class="navbar_profile">
            <div class="navbar_notif">
                <span class="navbar_notif-counter">9</span>
                <BellSimple />
            </div>

            <div class="navbar_profile-divider"></div>
        
            <Avatar size="medium" :src="AvatarPhoto" alt="Icon avatar"/>
        
            <div class="navbar_profile-user">
                <Para variant="semibold" size="md">
                    Marvin McKinney
                </Para>
                <Para variant="regular" size="sm" class="text-netral-50">
                    Super Admin
                </Para>
            </div>
            <CaretDown />
        </div>
    </section>
</template>

<style lang="postcss">
.navbar {
    @apply py-3.5 flex items-center justify-between container mx-auto;
    
    &_search {
        @apply max-w-sm relative;
    
        &-input {
            @apply py-2.5 pl-12 pr-4 w-full bg-netral-20 rounded-lg h-full focus:outline-0 focus-within:outline-none focus:outline-primary-border border-2 border-transparent focus-within:border-2 focus-within:border-primary-border;
        }
    }

    &_profile {
        @apply relative flex items-center gap-2;
    
        &-divider {
            @apply w-px h-10 bg-netral-30 mx-3;
        }

        &-user {
            @apply flex flex-col gap-1 items-start mr-7;
        }
    }

    &_notif {
        @apply relative;

        &-counter {
            @apply text-[10px] font-semibold rounded-full text-center text-netral-10 bg-primary-main w-4 h-4 absolute -top-1 right-0;
        }
    }
}

</style>