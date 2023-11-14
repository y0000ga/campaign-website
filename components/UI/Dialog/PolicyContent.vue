<template>
  <div :class="['d-flex', props.isDesktop ? 'flex-row' : 'flex-column', 'ga-8','h-100']" >
    <div :class="['d-flex', 'flex-column', 'text-text-primary', 'text-body-1','h-100']"
      :style="{ width: props.isDesktop ? '40%' : '',position: props.isDesktop ? 'sticky':undefined,top:'0px'}"><img :src="policies.main?.imgSrc" class="rounded-lg"
        :style="{ 'width': '100%', 'aspect-ratio': '507/400' }" />
      <p :class="['mt-4', 'mb-2', props.isDesktop ? 'text-caption' : 'text-body-1']">{{ policies.main?.title.join("") }}
      </p>
      <div class="d-flex align-center ga-2">
        <p>分享</p><v-btn class="rounded-pill px-0 bg-white" style="height:32px;min-width:32px" variant="text"
          v-for="item in SOCIAL"><v-icon style="font-size:24px" :color="item.color" :icon="'mdi-' + item.icon"
            :class="item.class || ''"></v-icon></v-btn>
      </div>
    </div>
    <div :style="{ width: props.isDesktop ? '60%' : '' }" >

        <h4 class="text-primary text-h4 mb-10">{{ policies.main?.title.join("") }}</h4>
        <div v-for="item in policies.main?.list" class="mb-6">
          <h5 class="text-h5 mb-2">{{ item.title }}</h5>
          <p>{{ item.content }}</p>
        </div>
        <v-card class="bg-gray-50 rounded-lg pa-4 d-flex flex-column w-100" style="margin-top:88px;box-shadow: none">
          <p class="text-body-1 mb-4" style="font-weight: 600;">更多政策議題</p>
          <div class="d-flex ga-4"><v-card class="bg-transparent" :style="{ 'box-shadow': 'none', 'max-width': props.isDesktop ? '244px' : '' }"
              v-for="policy in policies.other">
              <img :src="policy.imgSrc" class="rounded-lg w-100"
                :style="{ height: props.isDesktop ? '134px' : undefined, objectFit: props.isDesktop ? 'cover' : undefined }" />
              <p class="text-body-1 mt-3 text-text-primary cursor-pointer" @click="handleSelectItem(policy.id)" >{{ policy.title.join("") }}</p>
            </v-card>
          </div>
        </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHomeStore } from '~/stores/home';
import { POLICY } from '~/utils/constant';
const homeStore = useHomeStore()
const props = defineProps({
  isDesktop: {
    type: Boolean,
    required: true
  }
})
const policies = computed(() => {
  return { main: POLICY.find(policy => policy.id === homeStore.activeDialog.id), other: POLICY.filter(policy => policy.id !== homeStore.activeDialog.id) }
})

const handleSelectItem = (id:string) => {
  homeStore.handleActiveDialog(Dialog.POLICY, id)
}


</script>