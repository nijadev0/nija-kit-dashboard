<script lang="ts" setup>
import UploadPhoto1 from '$assets/images/upload-photo-1.png'
import UploadPhoto2 from '$assets/images/upload-photo-2.png'
import UploadPhoto3 from '$assets/images/upload-photo-3.png'
import ArrowClockWise from '$assets/icons/ArrowClockWise.vue'
import Trash from '$assets/icons/Trash.vue'
import Plus from '$assets/icons/Plus.vue'

const uploadImages = [UploadPhoto1, UploadPhoto2, UploadPhoto3]
</script>

<template>
  <div class="flex w-full flex-wrap items-center justify-center">
    <label
      for="dropzone-file"
      class="flex h-96 w-full flex-wrap gap-4 rounded-lg border-2 border-dashed border-netral-30 bg-gray-50 p-6"
    >
      <div
        v-for="image in uploadImages"
        class="relative h-40 w-40 rounded-[10px]"
      >
        <img :src="image" class="h-full w-full object-cover" />

        <div class="absolute bottom-2.5 right-2.5 flex items-center gap-1.5">
          <div class="rounded-lg bg-white/50 p-2">
            <ArrowClockWise class="h-5 w-5 stroke-netral-80 stroke-2" />
          </div>
          <div class="rounded-lg bg-white/50 p-2">
            <Trash class="h-5 w-5 stroke-error-main stroke-2" />
          </div>
        </div>
      </div>
      <div
        class="relative flex h-40 w-40 cursor-pointer flex-col items-center justify-center gap-2 rounded-[10px] border-2 border-dashed border-[#E5E7EB] transition-colors duration-300 ease-in-out hover:bg-netral-20"
      >
        <Plus class="h-6 w-6 stroke-[#A0A8B0]" />
        <span class="max-w-[101px] text-center text-sm text-[#A0A8B0]">
          Add more images
        </span>
      </div>
    </label>
  </div>
</template>
