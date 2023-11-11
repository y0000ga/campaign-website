<template>
  <v-bottom-navigation class="d-lg-none d-md-flex bottomNav" style="height: 68px">
    <v-btn :value="link.title" v-for="link in NAV" :key="link.title">
      <v-img :src="link.activeIcon" :width="24" :height="24" class="mb-1"></v-img>
      <NuxtLink :to="link.route">
        {{ link.title }}
      </NuxtLink>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup lang="ts" >
import { NAV } from '@/utils/constant'
</script>

<style scoped lang="scss">
.bottomNav{
  .v-btn{
    width:20%;
font-size: 10px;
  }
}
</style>