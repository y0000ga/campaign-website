<template>
  <div :class="['d-flex  ga-8 h-100', isDesktop ? 'flex-row' : 'flex-column']">
    <div :class="['d-flex', 'flex-column', 'text-text-primary', 'text-body-1', 'h-100']"
      :style="{ width: isDesktop ? '40%' : '', position: isDesktop ? 'sticky' : undefined, top: '0px' }"><img
        :src="policies.main?.imgSrc" class="rounded-lg w-100" :style="{'aspect-ratio': '507/400' }" />
      <p :class="['mt-4', 'mb-2', isDesktop ? 'text-caption' : 'text-body-1']">{{ policies.main?.title.join("") }}
      </p>
      <div class="d-flex align-center ga-2 ">
        <p>分享</p><v-btn class="rounded-pill px-0 bg-white" style="height:32px;min-width:32px" variant="text"
          v-for="item in SOCIAL"><v-icon style="font-size:24px" :color="item.color" :icon="'mdi-' + item.icon"
            :class="item.class || ''"></v-icon></v-btn>
      </div>
    </div>
    <div :style="{ width: isDesktop ? '60%' : '' }">

      <h4 class="text-primary text-h4 mb-10">{{ policies.main?.title.join("") }}</h4>
      <div v-for="item in policies.main?.list" class="mb-6">
        <h5 class="text-h5 mb-2">{{ item.title }}</h5>
        <p>{{ item.content }}</p>
      </div>
      <v-card class="bg-gray-50 rounded-lg pa-4 d-flex flex-column w-100 elevation-0" style="margin-top:88px">
        <p class="text-body-1 mb-4 font-weight-bold">更多政策議題</p>
        <div class="d-flex  ga-4"><v-card class="bg-transparent elevation-0"
            :style="{ 'max-width': isDesktop ? '244px' : '' }" v-for="policy in policies.other">
            <img :src="policy.imgSrc" class="rounded-lg w-100"
              :style="{ height: isDesktop ? '134px' : undefined, objectFit: isDesktop ? 'cover' : undefined }" />
            <p class="text-body-1 mt-3 text-text-primary cursor-pointer" @click="handleSelectItem(policy.id)">{{
              policy.title.join("") }}</p>
          </v-card>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHomeStore } from '~/stores/home';
import { POLICY } from '~/utils/constant';
import { useResponsive, Device } from '~/utils/hooks/useResponsive';

const { device } = useResponsive()
const isDesktop = computed(() => device.value === Device.Desktop)

const homeStore = useHomeStore()

const policies = computed(() => {
  return { main: POLICY.find(policy => policy.id === homeStore.activeDialog.id), other: POLICY.filter(policy => policy.id !== homeStore.activeDialog.id) }
})

const handleSelectItem = (id: string) => {
  homeStore.handleActiveDialog(Dialog.POLICY, id)
}


</script>