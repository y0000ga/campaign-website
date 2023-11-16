<template>
  <event-container>
    <template v-slot:left>
      <img :src="policies.main?.imgSrc" class="rounded-lg w-100" :style="{ 'aspect-ratio': '507/400' }" />
      <p :class="['mt-4', 'mb-2', isDesktop ? 'text-caption' : 'text-body-1']">{{ policies.main?.title.join("") }}
      </p>
      <div class="d-flex align-center ga-2 ">
        <p>分享</p><v-btn class="rounded-pill px-0 bg-white" style="height:32px;min-width:32px" variant="text"
          v-for="item in SOCIAL"><v-icon style="font-size:24px" :color="item.color" :icon="'mdi-' + item.icon"
            :class="item.class || ''"></v-icon></v-btn>
      </div>
    </template>
    <template v-slot:right>
      <h4 class="text-primary text-h4 mb-10">{{ policies.main?.title.join("") }}</h4>
      <div v-for="item in policies.main?.list" class="mb-6">
        <h5 class="text-h5 mb-2">{{ item.title }}</h5>
        <p>{{ item.content }}</p>
      </div>
      <more-event-container event="政策議題">
        <sub-event-card v-for="policy in policies.other" :key="policy.id" :img-src="policy.imgSrc"
          :title="policy.title.join('')" @handle-select="handleSelectItem(policy.id)"></sub-event-card>
      </more-event-container>
    </template>
  </event-container>
</template>

<script setup lang="ts">
import { useHomeStore } from '~/stores/home';
import { POLICY } from '~/utils/constant';
import { useResponsive, Device } from '~/utils/hooks/useResponsive';
import EventContainer from '../EventContainer.vue';
import MoreEventContainer from '../MoreEventContainer.vue';
import SubEventCard from '../SubEventCard.vue';

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