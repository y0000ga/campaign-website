<template>
    <v-container class="d-flex justify-center align-center"><lottie-element :src="loadingJson" class="w-50 h-50"></lottie-element></v-container>
</template>

<script setup lang="ts">
import LottieElement from '~/components/UI/LottieElement.vue';
import loadingJson from '~/assets/lottie/loading.json'
</script>

<style lang='scss' scoped>
.v-container {
    height: 100vh;
    width: 100vw;
}
</style>
