<template>
  <template>
    <div>
      <v-app-bar :elevation="0" class="py-4 px-6" style="background-color: transparent;">
        <div class="w-100 d-flex justify-space-between align-center py-4 px-6 rounded-xl" style="background: rgba(255, 255, 255, 0.8)">
          <div class="d-flex align-center">
            <v-img class="mr-2" :width="52" :height="43" :src="logo"></v-img>
            <h4 class="text-h4 text-primary">{{ LEGISLATOR.name }} {{ LEGISLATOR.englishName }}</h4>
          </div>
          <nav>
            <NuxtLink v-for="link in NAV" :to="link.route" class="text-text-primary text-subtitle-1 mx-6 my-2"
              active-class="bg-red">
              {{ link.title }}
            </NuxtLink>
          </nav>
          <div class="d-flex ga-4"><v-btn class="rounded-pill px-0" style="height:48px;min-width:48px" variant="text" v-for="item in SOCIAL" ><v-icon style="font-size:28px" :color="item.color"
                :icon="'mdi-' + item.icon" :class="item.class || ''"></v-icon></v-btn>
          </div>
        </div>

      </v-app-bar>
      <v-container fluid class="main">
        <slot />
      </v-container>

    </div>
  </template>
</template>

<script setup lang="ts" >
import { LEGISLATOR, NAV, SOCIAL } from '@/utils/constant'
import logo from '@/assets/image/logo.svg'
</script>
<style scoped lang="scss">
a {
  text-decoration: none;
}

.main {
  margin-top: 100px;
  padding: 0px
}

.ga-4 {
  gap: 16px
}
</style>