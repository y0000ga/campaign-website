<template>
  <v-container class="d-flex justify-center align-start px-26 bg-background-secondary max-w-full footer">
    <v-row class="d-flex flex-column ga-4">
      <div class="d-flex align-center">
        <v-chip class="number footer text-white rounded-pill d-flex justify-center mr-3">3</v-chip>
        <h3 class="text-h3 text-primary">{{ LEGISLATOR.name }} {{ LEGISLATOR.englishName }}</h3>
      </div>
      <div class="d-flex ga-4"><v-btn class="rounded-pill px-0 bg-white" style="height:48px;min-width:48px" variant="text"
          v-for="item in SOCIAL"><v-icon style="font-size:28px" :color="item.color" :icon="'mdi-' + item.icon"
            :class="item.class || ''"></v-icon></v-btn>
      </div>
      <p class="text-caption">© 2023 喵立翰 Miao Li-Han 版權所有</p>
    </v-row>
    <v-row class="d-flex flex-column ga-4">
      <h4 class="text-h4">競選總部</h4>
      <p class="text-body-1">
        辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓
        <br />
        電話：(02) 888-5678
        <br />
        電子郵件地址：meowoffice@linmeow.tw
      </p>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { LEGISLATOR } from '~/utils/constant';
</script>

<style scoped lang="scss">
.footer{
    .v-row{
      margin:0px;
      max-width:35%
    }
  }

  .v-chip.number {
  background: linear-gradient(90deg, #E6793B 1.54%, #FF4185 97.86%);
  font-size: 32px;
  font-weight: 900;
  line-height: 48px;
  width: 50px;
  height: 50px;

  &.footer {
    width: 32px;
    height: 32px;
    font-size: 21px
  }
}


@media(max-width:1120px){
  .footer{
    flex-direction: column;

    .v-row{
      margin: 12px 24px;
      max-width: 100%;
    }
  }
}
</style>