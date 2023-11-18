<template>
  <v-container class="d-flex justify-center flex-column  ga-4 mb-6">
    <v-row class="flex-center sloganContainer" data-aos="fade-up" data-aos-duration="500">
      <h1 v-for="item in SLOGAN" class="styled-gradient text-mantou slogan">{{ item }}</h1>
    </v-row>
    <v-row class="flex-center  ga-4 sloganContainer" data-aos-duration="500" data-aos-delay="500" data-aos="fade-up">
      <v-chip class="text-h3 text-white bg-text-primary title rounded-a-4" size="x-large" data-aos->2024 立委參選人</v-chip>
      <v-card class="d-flex align-center px-4 py-3 shadow-md">
        <v-chip class="number text-white rounded-pill d-flex justify-center mr-3 font-weight-black">3</v-chip>
        <h1 class="text-h1 text-primary">{{ LEGISLATOR.name }} {{ LEGISLATOR.englishName }}</h1>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { LEGISLATOR, SLOGAN } from '~/utils/constant';
</script>

<style scoped setup lang="scss">
.v-container {
  padding: 96px 0px 16px 0px
}

.title {
  height: 66px;
}

.sloganContainer {
  flex-direction: row;
}

.slogan {
  font-family: mantou-sans !important;
  font-size: 6rem;
  line-height: 101px;
  letter-spacing: 2px;
  margin: 0px 16px;
}

.number {
  background: linear-gradient(90deg, #E6793B 1.54%, #FF4185 97.86%);
  font-size: 26.5px;
  width: 50px;
  height: 50px
}

@media(max-width:1280px) {
  .sloganContainer {
    flex-direction: column;
  }
}


@media (max-width: 768px) {
  .v-container {
    padding: 32px 0px 16px 0px
  }

  .slogan {
    font-size: 52px;
    margin: -20px 0px
  }

  .title {
    height: 54px
  }

  .text-h1 {
    // text-h1 become text-h3
    font-size: 1.75rem !important;
    line-height: 2.125rem;
  }
}
</style>
