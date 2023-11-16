<template>
  <v-col :class="['d-flex flex-column align-center justify-center ga-8', isDesktop ? '' : 'h-100']">
    <h3 class="text-h3">
      <slot></slot>
    </h3><v-img :src="donate_finish" :width="187" style="max-height:166px"></v-img><base-button style="width: 187px"
      theme="gray" @click="handleClose">關閉</base-button>
  </v-col>
</template>

<script lang="ts" setup>
import donate_finish from '~/assets/image/donate_finish.svg'
import { useResponsive, Device } from '~/utils/hooks/useResponsive';
import { useHomeStore } from '~/stores/home';
import BaseButton from '../BaseButton.vue';
const homeStore = useHomeStore()
const { device } = useResponsive()
const isDesktop = computed(() => device.value === Device.Desktop)
const handleClose = () => {
  homeStore.handleActiveDialog(Dialog.NULL)
}
</script>