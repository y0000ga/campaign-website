<template>
  <v-container :class="['pa-0 d-flex h-100 w-100 ', isDesktop ? 'ga-4 flex-row' : 'ga-2 flex-column']"
    style="min-width:100%;">
    <slot></slot>
  </v-container>
</template>


<script lang="ts" setup>
import { useResponsive, Device } from '~/utils/hooks/useResponsive';
const { device } = useResponsive()
const isDesktop = computed(() => device.value === Device.Desktop)
</script>