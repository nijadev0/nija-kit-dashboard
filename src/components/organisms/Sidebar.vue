<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

import Heading from '$components/atoms/Heading.vue'
import SideMenu from '$components/moleculs/SideMenu.vue'

import HouseSimpleIcon from '$assets/icons/HouseSimple.vue'
import UsersIcon from '$assets/icons/Users.vue'
import PackageIcon from '$assets/icons/Package.vue'
import ReceiptIcon from '$assets/icons/Receipt.vue'
import TagIcon from '$assets/icons/Tag.vue'
import AppWindowIcon from '$assets/icons/AppWindow.vue'
import StorefrontIcon from '$assets/icons/Storefront.vue'
import UserCircleIcon from '$assets/icons/UserCircle.vue'
import GearSixIcon from '$assets/icons/GearSix.vue'
import NijaKit from '$assets/icons/NijaKit.vue'
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar_wrapper">
      <div class="sidebar_brand">
        <NijaKit />
        <Heading size="sm" variant="semibold"> Nija Kit </Heading>
      </div>

      <SideMenu href="/" variant="main">
        <HouseSimpleIcon class="stroke-inherit stroke-2" />
        Dashboard
      </SideMenu>

      <Disclosure>
        <DisclosureButton>
          <SideMenu variant="main" :expand="true">
            <UsersIcon class="stroke-inherit stroke-2" />
            Customers
          </SideMenu>
        </DisclosureButton>

        <DisclosurePanel class="sidebar_avatar">
          <div class="sidebar_avatar-divider" />

          <DisclosureButton>
            <SideMenu href="/users" variant="sub"> Users </SideMenu>
          </DisclosureButton>

          <DisclosureButton>
            <SideMenu href="/buyers" variant="sub"> Buyers </SideMenu>
          </DisclosureButton>
        </DisclosurePanel>
      </Disclosure>

      <Disclosure>
        <DisclosureButton>
          <SideMenu variant="main" :expand="true">
            <PackageIcon class="stroke-inherit stroke-2" />
            Products
          </SideMenu>
        </DisclosureButton>

        <DisclosurePanel class="sidebar_avatar">
          <div class="sidebar_avatar-divider" />

          <DisclosureButton>
            <SideMenu href="/products" variant="sub"> List Products </SideMenu>
          </DisclosureButton>

          <DisclosureButton>
            <SideMenu href="/categories" variant="sub"> Categories </SideMenu>
          </DisclosureButton>
        </DisclosurePanel>
      </Disclosure>

      <Disclosure>
        <DisclosureButton>
          <SideMenu variant="main" :expand="true">
            <ReceiptIcon class="stroke-inherit stroke-2" />
            Transaction
          </SideMenu>
        </DisclosureButton>

        <DisclosurePanel class="sidebar_avatar">
          <div class="sidebar_avatar-divider" />

          <DisclosureButton>
            <SideMenu href="/transactions/manage" variant="sub">
              Manage Transaction
            </SideMenu>
          </DisclosureButton>

          <DisclosureButton>
            <SideMenu href="/transactions/refund" variant="sub">
              Manage Refund
            </SideMenu>
          </DisclosureButton>
        </DisclosurePanel>
      </Disclosure>
      <!-- <SideMenu variant="main" :expand="true">
        <ReceiptIcon class="stroke-inherit stroke-2" />
        Transaction
      </SideMenu> -->

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
  @apply flex h-screen w-full max-w-[15rem] 
    
    flex-col items-center justify-start gap-10 border-r
    
    border-netral-20 bg-netral-10 px-6;

  &_wrapper {
    @apply flex w-full flex-col items-start gap-3 py-8;
  }

  &_brand {
    @apply mb-6 flex items-center gap-3 px-2;
  }

  &_avatar {
    @apply relative flex w-full flex-col items-end gap-3;

    &-divider {
      @apply absolute inset-0 left-6 h-full w-0.5 bg-netral-30;
    }
  }
}

button[data-headlessui-state='open'] .sideMenu.main {
  @apply stroke-primary-main text-primary-main;
}
</style>
