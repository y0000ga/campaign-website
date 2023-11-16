<template>
  <v-row v-if="props.type === 'sub'" class="ma-0 d-flex ga-4 " style="max-height: 134px;">
    <v-img :src="props.imgSrc" cover class="subImg rounded-lg" />
    <v-col class="pa-0 w-50 h-100">
      <p class="text-caption text-text-secondary">{{ props.date }}</p>
      <h6 class="my-2 text-h6 text-text-primary cursor-pointer" @click="handleActivityDialog(props.id)">{{
        props.title }}</h6>
      <p class="text-body-1 text-text-primary multi overflow-hidden">{{ props.content }}</p>
    </v-col>
  </v-row>
  <v-container v-if="props.type === 'main'" class="pa-0">
    <v-img class="w-100" :src="props.imgSrc" /><v-col class="d-flex flex-column mt-4 ga-2 ">
      <p class="text-caption text-text-secondary">{{ props.date }}</p>
      <p class="text-h5 text-text-primary cursor-pointer" @click="handleActivityDialog(props.id)">{{
        props.title }}</p>
      <p class="text-body-1">{{ props.content }}</p>
    </v-col>
  </v-container>
</template>

<script lang="ts" setup>
import { useHomeStore, Dialog } from '~/stores/home';

interface Props {
  imgSrc: string,
  date: string,
  title: string,
  content: string,
  id: string,
  type: 'sub' | 'main'
}

const props = defineProps<Props>()
const homeStore = useHomeStore()
const handleActivityDialog = (id: string) => {
  homeStore.handleActiveDialog(Dialog.ACTIVITY, id)
}
</script>