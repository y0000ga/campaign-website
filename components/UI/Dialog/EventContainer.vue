<template>
  <div :class="['d-flex ga-8 h-100', isDesktop ? 'flex-row' : 'flex-column']">
    <div class="d-flex flex-column text-text-primary text-body-1"
      :style="{ ...isDesktop && { width: '40%', position: 'sticky' }, height: '100%', top: '0px' }">
      <slot name="left"></slot>
    </div>
    <div class="h-100" :style="{ width: isDesktop ? '60%' : '' }">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useResponsive, Device } from '~/composables/useResponsive';
const { device } = useResponsive()
const isDesktop = computed(() => device.value === Device.Desktop)
</script>