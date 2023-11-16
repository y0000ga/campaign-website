<template>
  <v-col :id="props.block"
    :class="['rounded-xl d-flex justify-space-between flex-column', 'actionCard', props.dialogId === Dialog.DONATE ? 'bg-primary' : 'bg-text-primary']">
    <p class="text-mantou title">{{ props.title }}</p>
    <p style="font-size: 20px;height:60px">{{ props.content }}</p>
    <v-row class="d-flex align-center justify-space-between" style="height: fit-content">
      <base-button icon="mdi-arrow-right" theme="white" @click="activateDialog">{{ props.button }}</base-button>
      <v-img :src="props.imgSrc"
        :style="{ 'max-width': props.dialogId === Dialog.DONATE ? '224px' : '256px', aspectRatio: '1/1' }" /></v-row>
  </v-col>
</template>

<script setup lang="ts">
import BaseButton from '~/components/UI/BaseButton.vue';
import { useHomeStore, Dialog } from '~/stores/home';

interface Props {
  dialogId: Dialog,
  title: string,
  content: string,
  imgSrc: string,
  button: string,
  block: string
}

const homeStore = useHomeStore()
const props = defineProps<Props>()

const activateDialog = () => {
  homeStore.handleActiveDialog(props.dialogId)
}

</script>

<style scoped lang="scss">
.actionCard {
  padding: 96px;
}

.title {
  font-size: 52px
}

@media(max-width:1190px) {
  .actionCard {
    padding: 40px 24px
  }

  .v-row {
    margin: 0px
  }
}

@media(max-width:860px) {
  .title {
    font-size: 40px;
  }
}

@media(max-width:550px) {
  .v-img {
    height: 96px !important;
    margin: 0px -30px;
  }
}
</style>