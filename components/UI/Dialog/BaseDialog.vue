<template>
  <v-row justify="center">
    <v-dialog scrollable v-model="isActive" :width="props.isDesktop ? '100%' : undefined" style="max-width: 1440px"
      :fullscreen="props.isDesktop ? false : true" :scrim="props.isDesktop ? true : false"
      @close="homeStore.handleActiveDialog(Dialog.NULL)" :attach="true" transition="dialog-bottom-transition">
      <v-card :class="['rounded-xl', props.isDesktop ? 'pt-6 px-12 pb-12' : 'pa-4']" style="height:95%;box-shadow: none;">
        <v-card-title class="d-flex align-center justify-space-between pa-0">
          <h4 class="text-h5" style="font-weight: 700;">{{ title }}</h4><v-icon
            @click="homeStore.handleActiveDialog(Dialog.NULL)" icon="mdi-close-circle"
            :style="{ 'font-size': props.isDesktop ? '32px' : '24px' }"></v-icon>
        </v-card-title>
        <v-card-text :class="['pa-0', props.isDesktop ? 'mt-4' : 'mt-2']" ref="contentRef">
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
import ServiceContent from '~/components/UI/Dialog/ServiceContent.vue';
import DonateContent from '~/components/UI/Dialog/DonateContent.vue';
import ActivityContent from '~/components/UI/Dialog/ActivityContent.vue';
import PolicyContent from '~/components/UI/Dialog/PolicyContent.vue';
import { DIALOG_TITLE } from '~/utils/constant';
import { ref, watch } from 'vue';

const homeStore = useHomeStore()
const contentRef = ref<HTMLDivElement & { $el: HTMLDivElement } | null>(null)
const isActive = computed(() => { return homeStore.activeDialog.type !== Dialog.NULL })
const props = defineProps({
  isDesktop: {
    type: Boolean,
    required: true
  }
})

watch(() => [homeStore.activeDialog.id, homeStore.activeDialog.type, contentRef.value], () => {
  if (homeStore.activeDialog.id && (homeStore.activeDialog.type === Dialog.ACTIVITY || homeStore.activeDialog.type === Dialog.POLICY) && contentRef.value) {
    contentRef.value.$el.scrollTop = 0
  }
})


const title = computed(() => {
  return DIALOG_TITLE[`${homeStore.activeDialog.type as keyof typeof DIALOG_TITLE}`]
})

</script>

<style lang="scss" scoped>
.v-card-text{
  scroll-behavior: smooth;
}
</style>