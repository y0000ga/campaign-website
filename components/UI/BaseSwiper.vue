<template>
  <swiper :navigation="customNavigation" :effect="'coverflow'" :spaceBetween="0" :grabCursor="true" :centeredSlides="true"
    :slidesPerView="'auto'" :pagination="customPagination" :modules="modules" :loop="true" class="mySwiper">
    <swiper-slide v-for="policy in  [...POLICY, ...POLICY]   " :key="policy.id" class="bg-white d-flex">
      <v-img :src="policy.imgSrc" width="428px" class="ga-6" />
      <v-container class="pa-0 ml-lg-8 d-flex flex-column justify-center">
        <v-chip variant="text" class="w-fit" :style="{ 'background-color': policy.color }">
          {{ policy.subTitle }}
        </v-chip>
        <h4 class="text-h4 mt-4 mb-10">{{ policy.title[0] }}<br />{{ policy.title[1]
        }}</h4>
        <base-button title="查看" theme="primary" icon="mdi-arrow-right" @click="activateDialog(policy.id)"></base-button>
      </v-container></swiper-slide>
    <div class="actions mt-3">
      <div class="swiper-button-prev"><v-btn class="ma-2" variant="outlined" icon="mdi-arrow-left"></v-btn></div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"><v-btn class="ma-2" variant="outlined" icon="mdi-arrow-right"></v-btn></div>
    </div>



  </swiper>
</template>
<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules'
import { POLICY } from '~/utils/constant'
import BaseButton from '~/components/UI/BaseButton.vue';
import { useHomeStore } from '~/stores/home'


export default {
  components: {
    Swiper,
    SwiperSlide,
    BaseButton
  },
  setup() {
    const homeStore = useHomeStore()
    const activateDialog = (id: string) => {
      homeStore.handleActiveDialog(Dialog.POLICY, id)
    }
    const customPagination = {
      el: '.swiper-pagination',
      renderBullet: (index: number, className: string) => {
        return `<span class="${className} mx-2  bg-primary" style="width:12px;height:12px" key={${index}} value={${index}}></span>`
      }
    }

    const customNavigation = {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }

    return {
      modules: [Pagination, Navigation],
      customPagination,
      activateDialog,
      customNavigation
    }
  },
}
</script>

<style scoped lang="scss">
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
  transform: scale(0.9);

  &.swiper-slide-active {
    transform: scale(1);
  }

  img {
    display: block;
    width: 100%;
  }
}

.swiper-pagination {
  width: fit-content;
  position: static;
  display: flex;
  align-items: center;
}

.actions {
  display: flex;
  justify-content: center;
}


.swiper-button-next,
.swiper-button-prev {
  position: static;
  display: block;
  width: fit-content;
  height: fit-content;
  margin-top: 0px;

  .v-btn--variant-outlined {
    border: none;
    background-color: white;
    color: #DA7D4A
  }

  &::after {
    content: "";
    display: none;
  }
}



@media(max-width: 960px) {

  .swiper-slide {
    width: 311px;
    height: 508px;
    display: flex;
    flex-direction: column;
  }
}
</style>
