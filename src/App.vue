<script setup lang="ts">
import Button from './components/atoms/Button.vue';
import Heading from './components/atoms/Heading.vue';
import Para from './components/atoms/Para.vue';
import Toggle from './components/atoms/Toggle.vue';
import Radio from './components/atoms/Radio.vue';
import Checkbox from './components/atoms/Checkbox.vue';
import Status from './components/atoms/Status.vue';
import Sidebar from './components/atoms/Sidebar.vue';

import HouseSimpleIcon from './assets/icons/HouseSimple.vue';
import UsersIcon from './assets/icons/Users.vue';
import PackageIcon from './assets/icons/Package.vue';
import ReceiptIcon from './assets/icons/Receipt.vue';
import TagIcon from './assets/icons/Tag.vue';
import AppWindowIcon from './assets/icons/AppWindow.vue';
import StorefrontIcon from './assets/icons/Storefront.vue';
import UserCircleIcon from './assets/icons/UserCircle.vue';
import GearSixIcon from './assets/icons/GearSix.vue';
</script>

<template>
  <div
    class="min-h-screen w-screen text-netral-100 bg-netral-10 container mx-auto"
  >
    <!-- Button -->
    <section class="button">
      <div class="bg-netral-100 py-20 px-24 text-white">
        <h1 class="text-5xl font-semibold">Button</h1>
      </div>

      <div class="py-16 flex flex-row items-start gap-14">
        <div class="primary flex flex-col items-start gap-7">
          <Button variant="primary" size="big" type="background">
            Halo Penk
          </Button>
          <Button variant="primary" size="medium" type="background">
            Halo Penk
          </Button>
          <Button variant="primary" size="small" type="background">
            Halo Penk
          </Button>
          <Button variant="disabled" size="big" type="background">
            Halo Penk
          </Button>
        </div>

        <div class="base flex flex-col items-start gap-7">
          <Button variant="primary" size="big" type="outline">
            Halo Penk
          </Button>
          <Button variant="primary" size="medium" type="outline">
            Halo Penk
          </Button>
          <Button variant="primary" size="small" type="outline">
            Halo Penk
          </Button>

          <Button variant="disabled" size="big" type="background">
            Halo Penk
          </Button>
        </div>

        <div class="base flex flex-col items-start gap-7">
          <Button variant="base" size="big" type="background">
            Halo Penk
          </Button>
          <Button variant="base" size="medium" type="background">
            Halo Penk
          </Button>
          <Button variant="base" size="small" type="background">
            Halo Penk
          </Button>

          <Button variant="disabledBase" size="big" type="background">
            Halo Penk
          </Button>
        </div>

        <div class="error flex flex-col items-start gap-7">
          <Button variant="error" size="big" type="background">
            Halo Penk
          </Button>
          <Button variant="error" size="medium" type="background">
            Halo Penk
          </Button>
          <Button variant="error" size="small" type="background">
            Halo Penk
          </Button>

          <Button variant="disabled" size="big" type="background">
            Halo Penk
          </Button>
        </div>

        <div class="error flex flex-col items-start gap-7">
          <Button variant="error" size="big" type="outline"> Halo Penk </Button>
          <Button variant="error" size="medium" type="outline">
            Halo Penk
          </Button>
          <Button variant="error" size="small" type="outline">
            Halo Penk
          </Button>

          <Button variant="disabled" size="big" type="background">
            Halo Penk
          </Button>
        </div>
      </div>
    </section>

    <!-- Heading -->
    <section class="heading">
      <div class="bg-netral-100 py-20 px-24 text-white">
        <h1 class="text-5xl font-semibold">Heading</h1>
      </div>
      <div class="py-16 flex flex-row items-start gap-14">
        <Heading size="xl" variant="bold"> Heading XL Bold </Heading>
        <Heading size="xl" variant="semibold"> Heading XL Semibold </Heading>
        <Heading size="xl" variant="medium"> Heading XL Medium </Heading>
        <Heading size="xl" variant="regular"> Heading XL Regular </Heading>
      </div>

      <div class="py-16 flex flex-row items-start gap-14">
        <Heading size="lg" variant="bold"> Heading LG Bold </Heading>
        <Heading size="lg" variant="semibold"> Heading LG Semibold </Heading>
        <Heading size="lg" variant="medium"> Heading LG Medium </Heading>
        <Heading size="lg" variant="regular"> Heading LG Regular </Heading>
      </div>

      <div class="py-16 flex flex-row items-start gap-14">
        <Heading size="md" variant="bold"> Heading MD Bold </Heading>
        <Heading size="md" variant="semibold"> Heading MD Semibold </Heading>
        <Heading size="md" variant="medium"> Heading MD Medium </Heading>
        <Heading size="md" variant="regular"> Heading MD Regular </Heading>
      </div>

      <div class="py-16 flex flex-row items-start gap-14">
        <Heading size="sm" variant="bold"> Heading SM Bold </Heading>
        <Heading size="sm" variant="semibold"> Heading SM Semibold </Heading>
        <Heading size="sm" variant="medium"> Heading SM Medium </Heading>
        <Heading size="sm" variant="regular"> Heading SM Regular </Heading>
      </div>
    </section>

    <hr />

    <!-- Para -->
    <section class="Para">
      <div class="bg-netral-100 py-20 px-24 text-white">
        <h1 class="text-5xl font-semibold">Paragraph</h1>
      </div>
      <div class="py-16 flex flex-row items-start gap-14">
        <Para size="xxl" variant="bold"> Para XXL Bold </Para>
        <Para size="xxl" variant="semibold"> Para XXL Semibold </Para>
        <Para size="xxl" variant="medium"> Para XXL Medium </Para>
        <Para size="xxl" variant="regular"> Para XXL Regular </Para>
      </div>

      <div class="py-16 flex flex-row items-start gap-14">
        <Para size="xl" variant="bold"> Para XL Bold </Para>
        <Para size="xl" variant="semibold"> Para XL Semibold </Para>
        <Para size="xl" variant="medium"> Para XL Medium </Para>
        <Para size="xl" variant="regular"> Para XL Regular </Para>
      </div>

      <div class="py-16 flex flex-row items-start gap-14">
        <Para size="lg" variant="bold"> Para LG Bold </Para>
        <Para size="lg" variant="semibold"> Para LG Semibold </Para>
        <Para size="lg" variant="medium"> Para LG Medium </Para>
        <Para size="lg" variant="regular"> Para LG Regular </Para>
      </div>

      <div class="py-16 flex flex-row items-start gap-14">
        <Para size="md" variant="bold"> Para MD Bold </Para>
        <Para size="md" variant="semibold"> Para MD Semibold </Para>
        <Para size="md" variant="medium"> Para MD Medium </Para>
        <Para size="md" variant="regular"> Para MD Regular </Para>
      </div>

      <div class="py-16 flex flex-row items-start gap-14">
        <Para size="sm" variant="bold"> Para SM Bold </Para>
        <Para size="sm" variant="semibold"> Para SM Semibold </Para>
        <Para size="sm" variant="medium"> Para SM Medium </Para>
        <Para size="sm" variant="regular"> Para SM Regular </Para>
      </div>
    </section>

    <!-- Toggle -->
    <section class="py-16 flex flex-col items-start gap-10">
      <div class="bg-netral-100 py-20 px-24 text-white w-full">
        <h1 class="text-5xl font-semibold">Forms</h1>
      </div>
      <div class="py-16 flex items-center gap-10">
        <Toggle />
        <Radio />
        <Checkbox text="Nasi Kucing" />
        <Checkbox text="Gorengan" />
      </div>
    </section>

    <!-- Status -->
    <section class="py-16 flex items-center gap-10">
      <Status variant="success" />
      <Status variant="warning" />
      <Status variant="informational" />
      <Status variant="critical" />
      <Status variant="neutral" />
    </section>

    <!-- Sidebar -->
    <section class="py-16 flex flex-col items-start gap-10 w-full">
      <div class="bg-netral-100 py-20 px-24 text-white w-full">
        <h1 class="text-5xl font-semibold">Sidebar</h1>
      </div>

      <div
        class="flex flex-col items-center gap-10 w-full max-w-[240px] bg-netral-20 justify-center"
      >
        <div class="flex flex-col items-start gap-3 py-8">
          <Sidebar variant="main">
            <HouseSimpleIcon class="stroke-inherit stroke-2" />
            Dashboard
          </Sidebar>
          <Sidebar variant="main" :expand="true">
            <UsersIcon class="stroke-inherit stroke-2" />
            Customers
          </Sidebar>
          <Sidebar variant="main" :expand="true">
            <PackageIcon class="stroke-inherit stroke-2" />
            Products
          </Sidebar>
          <Sidebar variant="main" :expand="true">
            <ReceiptIcon class="stroke-inherit stroke-2" />
            Transaction
          </Sidebar>

          <Sidebar variant="main">
            <TagIcon class="stroke-inherit stroke-2" />
            Flash Sale
          </Sidebar>

          <Sidebar variant="main">
            <AppWindowIcon class="stroke-inherit" />
            Banner
          </Sidebar>

          <Sidebar variant="main">
            <StorefrontIcon class="stroke-inherit stroke-2" />
            Outlet
          </Sidebar>

          <Sidebar variant="main">
            <UserCircleIcon class="stroke-inherit stroke-2" />
            User Role
          </Sidebar>
          <Sidebar variant="main">
            <GearSixIcon class="stroke-inherit stroke-2" />
            Settings
          </Sidebar>
        </div>
      </div>
    </section>
  </div>
</template>
