<template>
  <template>
    <div>
      <v-app-bar :elevation="0" class="py-4 px-6 ma-4" style="background-color: transparent">
        <div class="w-100 d-flex justify-space-between align-center py-4 px-6 rounded-xl"
          style="background: rgba(255, 255, 255, 0.8)">

          <NuxtLink to="/" class="d-flex align-center">
            <v-img class="mr-2" :width="52" :height="43" :src="logo"></v-img>
            <h4 class="text-h4 text-primary">{{ LEGISLATOR.name }} {{ LEGISLATOR.englishName }}</h4>
          </NuxtLink>
          <top-nav></top-nav>
          <div class="d-flex"><v-btn class="rounded-pill px-0 actions" style="height:60px;width: 48px" variant="text"
              v-for="item in SOCIAL"><v-icon style="font-size:28px" :color="item.color" :icon="'mdi-' + item.icon"
                :class="item.class || ''"></v-icon></v-btn>
          </div>
        </div>
      </v-app-bar>
      <v-container fluid class="main">
        <slot />
      </v-container>
      <bottom-nav></bottom-nav>
    </div>
  </template>
</template>

<script setup lang="ts" >
import { LEGISLATOR, SOCIAL } from '@/utils/constant'
import logo from '@/assets/image/logo.svg'
import TopNav from '~/layouts/Nav/TopNav.vue';
import BottomNav from '~/layouts/Nav/BottomNav.vue';
</script>
<style scoped lang="scss">
.main {
  margin-top: 100px;
  padding: 0px
}

@media(max-width:600px){
  .actions{
    display: none;
  }
}

</style>