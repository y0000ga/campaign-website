<template>
  <v-card :class="['bg-transparent elevation-0', isDesktop && 'w-50']"
    :style="{ ...isDesktop && { 'max-width': '244px' } }">
    <img :src="props.imgSrc" class="rounded-lg w-100"
      :style="{ ...isDesktop && { height: '134px' }, aspectRatio: '244 / 134', objectFit: 'cover' }" />
    <p class="text-body-1 mt-3 text-text-primary cursor-pointer" @click="handleSelect">{{
      props.title }}</p>
  </v-card>
</template>

<script lang="ts" setup>
import { useResponsive, Device } from '~/composables/useResponsive';

interface Props {
  imgSrc: string,
  title: string,
}

interface Emit {
  (event: 'handleSelect'): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emit>()

const { device } = useResponsive()
const isDesktop = computed(() => device.value === Device.Desktop)

const handleSelect = () => {
  emit('handleSelect')
}

</script>