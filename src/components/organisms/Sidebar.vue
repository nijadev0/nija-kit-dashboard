<script setup lang="ts">
import Heading from '../atoms/Heading.vue';
import SideMenu from '../atoms/SideMenu.vue';

import HouseSimpleIcon from '../../assets/icons/HouseSimple.vue';
import UsersIcon from '../../assets/icons/Users.vue';
import PackageIcon from '../../assets/icons/Package.vue';
import ReceiptIcon from '../../assets/icons/Receipt.vue';
import TagIcon from '../../assets/icons/Tag.vue';
import AppWindowIcon from '../../assets/icons/AppWindow.vue';
import StorefrontIcon from '../../assets/icons/Storefront.vue';
import UserCircleIcon from '../../assets/icons/UserCircle.vue';
import GearSixIcon from '../../assets/icons/GearSix.vue';
import NijaKit from '../../assets/icons/NijaKit.vue';
</script>

<template>
    <aside class="sidebar">
        <div class="sidebar_wrapper">
            <div class="sidebar_brand">
                <NijaKit />
                <Heading size="sm" variant="semibold">
                    Nija Kit
                </Heading>
            </div>

            <SideMenu href="" variant="main">
                <HouseSimpleIcon class="stroke-inherit stroke-2" />
                Dashboard
            </SideMenu>
            <SideMenu href="customers" variant="main" :expand="true">
                <UsersIcon class="stroke-inherit stroke-2" />
                Customers
            </SideMenu>
            <SideMenu href="products" variant="main" :expand="true">
                <PackageIcon class="stroke-inherit stroke-2" />
                Products
            </SideMenu>
            <SideMenu variant="main" :expand="true">
                <ReceiptIcon class="stroke-inherit stroke-2" />
                Transaction
            </SideMenu>

            <div class="sidebar_avatar">
                <div class="sidebar_avatar-divider"></div>
                <SideMenu variant="sub">
                    Sub Menu Test 1
                </SideMenu>

                <SideMenu variant="sub">
                    Sub Menu Test 2
                </SideMenu>


                <SideMenu variant="sub">
                    Sub Menu Test 2
                </SideMenu>
            </div>

            <SideMenu variant="main">
                <TagIcon class="stroke-inherit stroke-2" />
                Flash Sale
            </SideMenu>

            <SideMenu variant="main">
                <AppWindowIcon class="stroke-inherit" />
                Banner
            </SideMenu>

            <SideMenu variant="main">
                <StorefrontIcon class="stroke-inherit stroke-2" />
                Outlet
            </SideMenu>

            <SideMenu variant="main">
                <UserCircleIcon class="stroke-inherit stroke-2" />
                User Role
            </SideMenu>

            <SideMenu variant="main">
                <GearSixIcon class="stroke-inherit stroke-2" />
                Settings
            </SideMenu>
        </div>
    </aside>
</template>

<style lang="postcss">
.sidebar {
    @apply px-6 h-screen w-full max-w-[15rem] 
    
    flex flex-col justify-start items-center gap-10 
    
    bg-netral-10 border-r border-netral-20;

    &_wrapper {
        @apply flex flex-col items-start gap-3 py-8 w-full;
    }
    
    &_brand {
        @apply px-2 flex items-center gap-3 mb-6;
    }

    &_avatar {
        @apply flex flex-col items-end w-full gap-4 relative;

        &-divider {
            @apply w-0.5 h-full bg-netral-30 absolute inset-0 left-6;
        }
    }
}
</style>