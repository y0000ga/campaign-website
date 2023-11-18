<template>
  <event-container>
    <template v-slot:left>
      <img :src="activities.main?.imgSrc" class="rounded-lg w-100"
        :style="{ 'object-fit': 'cover', 'aspect-ratio': '343/251' }" />
      <p :class="['mt-4 mb-2', isDesktop ? 'text-caption' : 'text-body-1']">{{ activities.main?.title }}
      </p>
      <div class="d-flex align-center ga-2">
        <p>分享</p><v-btn class="rounded-pill px-0 bg-white" style="height:32px;min-width:32px" variant="text"
          v-for="item in SOCIAL"><v-icon style="font-size:24px" :color="item.color" :icon="'mdi-' + item.icon"
            :class="item.class || ''"></v-icon></v-btn>
      </div>
    </template>
    <template v-slot:right>
      <h4 class="text-primary text-h4 mb-2">{{ activities.main?.title }}</h4>
      <p class="text-text-caption mb-10">{{ activities.main?.date }}</p>
      <p class="text-text-body-1 text-text-primary mb-6">{{ activities.main?.content }}</p>
      <p class="text-text-body-1 text-text-primary mb-6" v-for="sub in activities.main?.subContent">{{ sub }}</p>
      <more-event-container event="最新活動">
        <sub-event-card v-for="activity in activities.other" :key="activity.id" :img-src="activity.imgSrc"
          :title="activity.title" @handle-select="handleSelectActivity(activity.id)"></sub-event-card>
      </more-event-container>
    </template>
  </event-container>
</template>

<script setup lang="ts">
import { useHomeStore } from '~/stores/home';
import { ACTIVITY } from '~/utils/constant';
import { useResponsive, Device } from '~/composables/useResponsive';
import EventContainer from '../EventContainer.vue';
import MoreEventContainer from '../MoreEventContainer.vue';
import SubEventCard from '../SubEventCard.vue';

const { device } = useResponsive()
const isDesktop = computed(() => device.value === Device.Desktop)
const homeStore = useHomeStore()
const activities = computed(() => {
  return { main: ACTIVITY.find(activity => activity.id === homeStore.activeDialog.id), other: ACTIVITY.filter(activity => activity.id !== homeStore.activeDialog.id) }
})

const handleSelectActivity = (id: string) => {
  homeStore.handleActiveDialog(Dialog.ACTIVITY, id)
}
</script>