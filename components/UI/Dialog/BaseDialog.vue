<template>
  <v-row justify="center">
    <v-dialog v-model="isActive" :width="props.isDesktop ? '95%' : undefined" style="max-width: 1440px"
      :fullscreen="props.isDesktop ? false : true" :scrim="props.isDesktop ? true : false"
      @close="homeStore.handleActiveDialog(Dialog.NULL)" :attach="true">
      <v-card class="rounded-xl pa-4" style="height:836px">
        <v-card-title class="d-flex align-center justify-space-between pa-0">
          <h4 class="text-h5" style="font-weight: 700;">{{ title }}</h4><v-icon
            @click="homeStore.handleActiveDialog(Dialog.NULL)" icon="mdi-close-circle"
            :style="{ 'font-size': props.isDesktop ? '32px' : '24px' }"></v-icon>
        </v-card-title>
        <v-card-text :class="['pa-0', props.isDesktop ? 'mt-6' : 'mt-2']">
          <service-content :isDesktop="props.isDesktop"
            v-if="homeStore.activeDialog.type === Dialog.SERVICE"></service-content>
          <donate-content :isDesktop="props.isDesktop"
            v-if="homeStore.activeDialog.type === Dialog.DONATE"></donate-content>
          <activity-content :isDesktop="props.isDesktop"
            v-if="homeStore.activeDialog.type === Dialog.ACTIVITY"></activity-content>
          <policy-content :isDesktop="props.isDesktop"
            v-if="homeStore.activeDialog.type === Dialog.POLICY"></policy-content>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts" setup>
import { useHomeStore } from '~/stores/home';
import ServiceContent from './ServiceContent.vue';
import DonateContent from './DonateContent.vue';
import ActivityContent from './ActivityContent.vue';
import PolicyContent from './PolicyContent.vue';
import { DIALOG_TITLE } from '~/utils/constant';
const homeStore = useHomeStore()
const isActive = computed(() => { return homeStore.activeDialog.type !== Dialog.NULL })
const props = defineProps({
  isDesktop: {
    type: Boolean,
    required: true
  }
})


const title = computed(() => {
  return DIALOG_TITLE[`${homeStore.activeDialog.type as keyof typeof DIALOG_TITLE}`]
})
</script>