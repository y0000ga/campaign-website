<template>
  <v-container class="d-flex justify-center flex-column title ga-4 mb-6">
    <v-row class="d-flex justify-center">
      <h1 class="styled-gradient text-mantou slogan">台灣的明天 喵先鋪路</h1>
    </v-row>
    <v-row class="d-flex justify-center align-center ga-4">
      <v-chip class="text-h3 text-white bg-text-primary title border-radius-16" size="x-large">2024 立委參選人</v-chip>
      <v-card class="d-flex align-center px-4 py-3 box-shadow-primary">
        <v-chip class="number text-white rounded-pill d-flex justify-center mr-3">3</v-chip>
        <h1 class="text-h1 text-primary">{{ LEGISLATOR.name }} {{ LEGISLATOR.englishName }}</h1>
      </v-card>
    </v-row>
  </v-container>
  <v-container class="pa-0">
    <v-row class="d-flex justify-center align-end mt-2">
      <v-img :width="723" :height="404" :src="mainBg" class="background" />
      <v-img :width="420" :height="537" :src="main" />
    </v-row>
  </v-container>
  <marquee :content="PROMOTION.join('')"></marquee>
  <v-container class="maxWidth100 bg-background-secondary d-flex justify-center px-104">
    <v-card class="content rounded-xl d-flex flex-row box-shadow-primary" variant="elevated">
      <v-container class="w-50 d-flex align-center flex-column px-10 justify-center">
        <main-title english-title="ADVOCATE" :title="ADVOCATE"></main-title>
        <h3 class="text-h3 my-8">我堅信 ! 藉由推動更完善的<span class="text-primary">貓咪福利</span>和相關政策，更是間接地投資於<span
            class="text-primary">{{ TAIWAN_FUTURE }}</span>。</h3>
        <p class="text-subtitle-1">{{ ADVOCATE_CONTENT }}</p>
      </v-container>
      <v-img class="h-100" :src="advocate" />
    </v-card>
  </v-container>
  <v-container class="d-flex justify-center align-center flex-column px-104"><main-title english-title="LATEST EVENTS"
      title="最新活動"></main-title>
    <v-card class="d-flex flex-row mt-10 ga-6 maxWidth-1320" variant="flat">
      <v-container class="pa-0"><v-img class="w-100" :src="ACTIVITY[0].imgSrc" /><v-col
          class="d-flex flex-column mt-4 ga-2">
          <p class="text-caption text-text-secondary">{{ ACTIVITY[0].date }}</p>
          <p class="text-h5 text-text-primary">{{ ACTIVITY[0].title }}</p>
          <p class="text-body-1">{{ ACTIVITY[0].content }}</p>
        </v-col></v-container>
      <v-container class="pa-0 d-flex flex-column" style="position:relative;gap:28px">
        <v-row class="ma-0 d-flex ga-4" v-for="activity in ACTIVITY">
          <v-col class="pa-0" style="width: 201px;max-width: 201px;"><v-img :src="activity.imgSrc" /></v-col>
          <v-col class="pa-0">
            <p class="text-caption text-text-secondary">{{ activity.date }}</p>
            <h6 class="my-2 text-h6 text-text-primary">{{ activity.title }}</h6>
            <p class="text-body-1 text-text-primary">{{ activity.content }}</p>
          </v-col>
        </v-row>
        <base-button title="查看更多" icon="mdi-arrow-right" theme="gray"></base-button>
      </v-container>
    </v-card>
  </v-container>
  <v-container
    class="d-flex justify-center align-center flex-column px-104 bg-background-secondary maxWidth100 "><main-title
      english-title="POLICY ISSUES" title="政策議題"></main-title><base-swiper></base-swiper></v-container>
  <v-container class="d-flex justify-center  px-104 ga-6 maxWidth-1320" style="width:1320px">
    <v-col :class="['rounded-xl', 'w-50', 'pa-24', item.id === 'donate' ? 'bg-primary' : 'bg-text-primary']"
      style="height:596px" v-for="item in ACTION">
      <p class="text-mantou" style="font-size:52px">{{ item.title }}</p>
      <p style="font-size: 20px;" class="pt-4 pb-6">{{ item.content }}</p>
      <v-row class="d-flex align-center justify-space-between" style="height: 241px;"><base-button :title="item.button"
          icon="mdi-arrow-right" theme="white"></base-button><v-img :src="item.imgSrc"
          :style="{ 'max-width': item.id === 'donate' ? '224px' : '256px' }" /></v-row>
    </v-col>
  </v-container>
  <v-container class="d-flex justify-center flex-column px-104 align-center ga-4">
    <h1 class="styled-gradient text-mantou" style="font-size: 64px;">台灣的明天 喵先鋪路</h1>
    <v-row class="d-flex justify-center align-center">
      <v-card class="d-flex align-center px-4 py-3 box-shadow-primary">
        <v-chip class="number text-white rounded-pill d-flex justify-center mr-3">3</v-chip>
        <h3 class="text-h1 text-primary">{{ LEGISLATOR.name }} {{ LEGISLATOR.englishName }}</h3>
      </v-card>
    </v-row>
  </v-container>
  <v-container class="d-flex justify-center align-start px-104 bg-background-secondary maxWidth100">
    <v-row class="ma-0 d-flex flex-column ga-4" style="max-width:676px">
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
    <v-row class="ma-0 d-flex flex-column ga-4" style=" max-width:676px">
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
import { LEGISLATOR, PROMOTION, ADVOCATE, TAIWAN_FUTURE, ADVOCATE_CONTENT, ACTIVITY, ACTION, SOCIAL } from '~/utils/constant';
import main from '~/assets/image/main.svg'
import mainBg from '~/assets/image/main-bg.svg'
import Marquee from '~/components/Marquee.vue';
import advocate from '~/assets/image/advocate.svg'
import BaseButton from '~/components/BaseButton.vue';



</script>

<style setup lang="scss">
.slogan {
  font-family: mantou-sans !important;
  font-size: 6rem;
  line-height: 101px;
  letter-spacing: 2px;
}

.v-container.title {
  padding: 96px 0px 16px 0px
}


.v-chip.title {
  height: 66px;
}

.border-radius-16 {
  border-radius: 16px;
}

.border-radius-8 {
  border-radius: 8px;
}

.pa-24 {
  padding: 96px
}


.ga-4 {
  gap: 16px
}

.ga-2 {
  gap: 8px
}

.ga-6 {
  gap: 24px
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


.box-shadow-primary {
  box-shadow: 0px 4px 12px 0px #A3B4CB33;
}


.v-img.background {
  position: absolute
}

.maxWidth100 {
  max-width: 100%;
}

.maxWidth-1320 {
  max-width: 1320px;
}

.px-104 {
  padding: 104px 0px
}
</style>