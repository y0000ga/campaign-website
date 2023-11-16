<template>
  <v-bottom-navigation class="d-lg-none d-md-flex bottomNav" style="height: 68px">
    <v-btn :value="link.title" v-for="link in NAV" :key="link.title" class="pa-0" style="min-width: unset"
      @click="handleScroll(link.block)">
      <v-img :src="link.icon" :width="24" :height="24" class="mb-1"></v-img>
      <p>
        {{ link.title }}
      </p>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup lang="ts" >
import { NAV } from '@/utils/constant'

const handleScroll = (id: string) => {
  const container = document.getElementById(id)
  container?.scrollIntoView({ behavior: 'smooth' })
}

</script>

<style scoped lang="scss">
.bottomNav {
  .v-btn {
    width: 20%;
    font-size: 10px;
  }
}
</style>