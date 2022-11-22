<script setup lang="ts">
import Button from './components/atoms/Button.vue';
import Heading from './components/atoms/Heading.vue';
</script>

<template>
  <div
    class="min-h-screen w-screen text-netral-100 bg-netral-10 container mx-auto"
  >
    <div class="button">
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
    </div>

    <div class="heading">
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
    </div>
  </div>
</template>
