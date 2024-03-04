<template>
  <div>
    <h2>{{ props.error.statusCode }}</h2>
    <p>{{ props.error.message }}</p>
    <NuxtLink to="/">回首頁</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
})
</script>
