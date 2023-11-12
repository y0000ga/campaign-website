<template>
      <v-container class="d-flex justify-center flex-column px-26 align-center ga-4 bottomIntro">
        <v-row class="slogan">
          <h1 class="styled-gradient text-mantou" style="font-size: 64px;">台灣的明天</h1>
          <h1 class="styled-gradient text-mantou" style="font-size: 64px;">喵先鋪路</h1>
        </v-row>
        <v-row class="d-flex justify-center align-center">
          <v-card class="d-flex align-center px-4 py-3 shadow-md">
            <v-chip class="number text-white rounded-pill d-flex justify-center mr-3">3</v-chip>
            <h3 class="text-h1 text-primary">{{ LEGISLATOR.name }} {{ LEGISLATOR.englishName }}</h3>
          </v-card>
        </v-row>
      </v-container>
</template>

<script setup lang="ts">
import { LEGISLATOR } from '~/utils/constant';
</script>


<style scoped lang="scss">

.v-chip.number {
  background: linear-gradient(90deg, #E6793B 1.54%, #FF4185 97.86%);
  font-size: 32px;
  font-weight: 900;
  line-height: 48px;
  width: 50px;
  height: 50px;
}

.bottomIntro {
  .slogan {
    display: flex;
    gap: 12px;
  }
}

@media(max-width:760px) {
  .bottomIntro {
  .slogan {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:0px
  }
}
}

@media(max-width:600px){
  .bottomIntro{
    .text-h1{
          font-size: 1.75rem !important;
    font-weight: 700;
    line-height: 2.125rem;
    letter-spacing: 0em !important;
    }
  }
}
</style>