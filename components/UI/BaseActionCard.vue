<template>
  <v-col :class="['rounded-xl', 'actionCard', props.id === 'donate' ? 'bg-primary' : 'bg-text-primary']">
          <p class="text-mantou title" >{{ props.title }}</p>
          <p style="font-size: 20px;" class="pt-4 pb-6">{{ props.content }}</p>
          <v-row class="d-flex align-center justify-space-between" style="height: fit-content"><base-button :title="props.button"
              icon="mdi-arrow-right" theme="white"></base-button><v-img :src="props.imgSrc"
              :style="{ 'max-width': props.id === 'donate' ? '224px' : '256px',aspectRatio:'1/1' }" /></v-row>
        </v-col>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue';
const props = defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  imgSrc: { type: String, required: true },
  button:{type:String,required:true}
  
})
</script>

<style scoped lang="scss">
.actionCard{
  padding: 96px;
}

.title{
  font-size:52px
}

@media(max-width:1190px){
  .actionCard{
    padding: 40px 24px
  }
  .v-row{
    margin:0px
  }
}

@media(max-width:860px){
  .title{
    font-size: 40px;
  }
}

@media(max-width:550px){
  .v-img{
    height: 96px !important;
    margin:0px -30px;
  }
}

</style>