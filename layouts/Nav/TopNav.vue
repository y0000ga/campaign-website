<template>
  <nav class="d-md-none d-lg-flex top-nav justify-space-between w-50 pa-2">
    <NuxtLink v-for="link in NAV" :to="link.route" class="text-text-primary text-subtitle-1" active-class="bg-red">
      {{ link.title }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts" >
import { NAV } from '@/utils/constant'
</script>

<style scoped lang="scss">
.top-nav {
  max-width: 558px;
}

@media (max-width: 1280px) {
  .top-nav{
    display: none;
  }
}
</style>