<template>
  <svg
    @click="$emit('close')"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.75 5.25L5.25 18.75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.75 18.75L5.25 5.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
