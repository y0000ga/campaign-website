<template>
  <nav class="d-md-none d-lg-flex top-nav justify-space-between w-50 pa-2">
        <a v-for="link in NAV"
        @click="handleScroll(link.block)"
          :class="['text-subtitle-1']">
          <v-hover><template v-slot:default="{ isHovering, props }">
           <p v-bind="props" :class="isHovering? 'text-primary':'text-text-primary'" >{{ link.title }}</p>
          </template></v-hover>
        </a>


  </nav>
</template>

<script setup lang="ts" >
import { NAV } from '@/utils/constant'

const handleScroll = (id: string) => {
  const container = document.getElementById(id)
  container?.scrollIntoView({ behavior: 'smooth' })
}

</script>

<style scoped lang="scss">
nav {
  max-width: 558px;
}

@media (max-width: 1280px) {
  nav {
    display: none;
  }
}
</style>