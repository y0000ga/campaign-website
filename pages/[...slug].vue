<template>
  沒這個頁面
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

onBeforeMount(() => {
  router.push("/")
})

</script>