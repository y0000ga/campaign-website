<template>
  <div>
    <v-app-bar v-if="!uiStore.isLoading" :elevation="0" class="py-4 px-3" style="background-color: transparent">
      <div class="w-100 d-flex justify-space-between align-center py-2 px-3 rounded-xl"
        style="background: rgba(255, 255, 255, 0.8);cursor: pointer">
        <NuxtLink to="/" @click="handleScrollTop" class="d-flex align-center">
          <v-img class="mr-2" :width="52" :height="43" :src="logo"></v-img>
          <h4 class="text-h4 text-primary">{{ LEGISLATOR.name }} {{ LEGISLATOR.englishName }}</h4>
        </NuxtLink>
        <top-nav></top-nav>
        <div class="d-flex"><v-btn class="rounded-pill px-0 actions" style="height:60px;width: 48px" variant="text"
            v-for="item in SOCIAL.slice(0, 3)"><v-icon style="font-size:28px" :color="item.color"
              :icon="'mdi-' + item.icon" :class="item.class || ''"></v-icon></v-btn>
        </div>
      </div>
    </v-app-bar>

      <v-container v-if="!uiStore.isLoading" class="target align-end pa-0 mr-4 d-flex flex-column" style="width:fit-content">
        <v-btn
             @click="handleScrollTop"
            class="ma-2"
            color="primary"
            icon="mdi-arrow-up"
          ></v-btn>

          <v-btn
          @click="handleDonateDialog"
            class="ma-2"
            color="text-primary"
            icon="mdi-currency-usd"
          ></v-btn></v-container>
    <v-container fluid class="main pa-0">
      <slot />
      <base-footer v-if="!uiStore.isLoading"></base-footer>
    </v-container>
    <bottom-nav v-if="!uiStore.isLoading"></bottom-nav>
  </div>
</template>

<script setup lang="ts" >
import { LEGISLATOR, SOCIAL } from '@/utils/constant'
import logo from '@/assets/image/logo.svg'
import TopNav from '~/layouts/Nav/TopNav.vue';
import BottomNav from '~/layouts/Nav/BottomNav.vue';
import BaseFooter from './BaseFooter.vue';
import useUiStore from '~/stores/ui';
import { useHomeStore } from '~/stores/home';
import { handleScrollTop } from '~/utils/helper';

const uiStore = useUiStore()
const homeStore = useHomeStore()
const marginTop = computed(() => uiStore.isLoading ? '0px' : '100px')

const handleDonateDialog = () => {
  homeStore.handleActiveDialog(Dialog.DONATE)
}

</script>
<style scoped lang="scss">
.target {
  position: fixed;
  right: 0px;
  bottom: 15px;
  z-index: 2;
}

.main {
  margin-top: v-bind(marginTop)
}

@media (max-width:1280px) {
  .target {
    bottom: 75px
  }
}


@media(max-width:600px) {
  .actions {
    display: none;
  }
}
</style>