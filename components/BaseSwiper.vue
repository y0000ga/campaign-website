<template>
  <swiper :effect="'coverflow'" :spaceBetween="0" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :pagination="customPagination" :modules="modules" :loop="true" class="mySwiper">
    <swiper-slide v-for="policy in    [...POLICY,...POLICY]   " :key="policy.title" class="bg-white d-flex">
      <v-img :src="policy.imgSrc" width="428px" style="border-radius: 24px;" />
      <v-container class="pa-0 ml-8 d-flex flex-column justify-center">
        <v-chip variant="text" :style="{ 'background-color': policy.color, 'width': 'fit-content' }">
          {{ policy.subTitle }}
        </v-chip>
        <h4 class="text-h4 mt-4 mb-10">{{ policy.title[0] }}<br />{{ policy.title[1]
        }}</h4>
        <base-button title="查看" theme="primary" icon="mdi-arrow-right"></base-button>
      </v-container></swiper-slide>
    <div class="swiper-pagination"></div>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import 'swiper/css/pagination'
import {  Pagination } from 'swiper/modules'
import { POLICY } from '~/utils/constant'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const customPagination = {
      el: '.swiper-pagination',
      renderBullet: (index, className) => {
        return `<span class="${className} mx-2 bg-primary" style="width:12px;height:12px" key={${index}} value={${index}}></span>`
      }
    }
    return {
      modules: [ Pagination],
      customPagination
    }
  },
}
</script>

<style scope lang="scss">
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  width: 792px;
  height: 403px;
  padding: 32px;
  border-radius: 32px;
  overflow: hidden;
}

.swiper-slide {
  transform: scale(0.9);
  &.swiper-slide-active{
    transform: scale(1);
  }
}


.swiper-slide img {
  display: block;
  width: 100%;
}

.swiper-pagination {
  bottom: var(--swiper-pagination-bottom, 8px);
  top: var(--swiper-pagination-top, auto);
  left: 0;
  width: 100%;
}
</style>
