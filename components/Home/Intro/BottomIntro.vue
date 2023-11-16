<template>
  <v-container class="d-flex justify-center flex-column px-26 align-center ga-4">
    <v-row class="slogan">
      <h1 v-for="item in SLOGAN" class="styled-gradient text-mantou" style="font-size: 64px;">{{ item }}</h1>
    </v-row>
    <v-row class="flex-center">
      <v-card class="d-flex align-center px-4 py-3 shadow-md">
        <v-chip class="text-white rounded-pill d-flex justify-center mr-3 font-weight-black">3</v-chip>
        <h3 class="text-h1 text-primary">{{ LEGISLATOR.name }} {{ LEGISLATOR.englishName }}</h3>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { LEGISLATOR, SLOGAN } from '~/utils/constant';
</script>


<style scoped lang="scss">
.v-chip {
  background: linear-gradient(90deg, #E6793B 1.54%, #FF4185 97.86%);
  font-size: 32px;
  line-height: 48px;
  width: 50px;
  height: 50px;
}


.slogan {
  display: flex;
  gap: 12px;
}

@media(max-width:765px) {
  .slogan {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px
  }
}

@media(max-width:600px) {
  .text-h1 {
    font-size: 1.75rem !important;
    font-weight: 700;
    line-height: 2.125rem;
    letter-spacing: 0em !important;
  }
}
</style>