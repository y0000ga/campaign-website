<template>
  <v-container class="d-flex justify-center align-start px-26 bg-background-secondary max-w-full">
    <v-row class="d-flex flex-column  ga-4">
      <div class="d-flex align-center">
        <v-chip class="font-weight-black footer text-white rounded-pill d-flex justify-center mr-3">3</v-chip>
        <h3 class="text-h3 text-primary">{{ LEGISLATOR.name }} {{ LEGISLATOR.englishName }}</h3>
      </div>
      <div class="d-flex  ga-4"><v-btn class="rounded-pill px-0 bg-white" style="height:48px;min-width:48px"
          variant="text" v-for="item in SOCIAL.slice(0, 3)"><v-icon style="font-size:28px" :color="item.color"
            :icon="'mdi-' + item.icon" :class="item.class || ''"></v-icon></v-btn>
      </div>
      <p class="text-caption">© 2023 喵立翰 Miao Li-Han 版權所有</p>
    </v-row>
    <v-row class="d-flex flex-column  ga-4">
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
.v-row {
  margin: 0px;
  max-width: 35%
}

.v-chip {
  background: linear-gradient(90deg, #E6793B 1.54%, #FF4185 97.86%);
  line-height: 48px;
  width: 32px;
  height: 32px;
  font-size: 21px
}


@media(max-width:1120px) {
  .v-container {
    flex-direction: column;

    .v-row {
      margin: 12px 24px;
      max-width: 100%;
    }
  }

  .v-application .px-26 {
    padding: 104px 0px 172px 0px
  }
}
</style>