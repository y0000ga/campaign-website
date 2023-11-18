<template>
  <swiper :navigation="customNavigation" effect="coverflow" :spaceBetween="0" :grabCursor="true" :centeredSlides="true"
    :slidesPerView="'auto'" :pagination="customPagination" :modules="modules" :loop="true" class="w-100 my-13">
    <swiper-slide v-for="policy in  [...POLICY, ...POLICY]"   :key="policy.id" class="pa-8 bg-white d-flex rounded-xl overflow-hidden">
      <v-img :src="policy.imgSrc" width="428px"/>
      <v-container class="pa-0 d-flex flex-column justify-center">
        <v-chip variant="text" class="w-fit" :style="{ 'background-color': policy.color }">
          {{ policy.subTitle }}
        </v-chip>
        <h4 class="text-h4 mt-4 mb-10">{{ policy.title[0] }}<br />{{ policy.title[1]
        }}</h4>
        <base-button theme="primary" icon="mdi-arrow-right" @click="activateDialog(policy.id)">查看</base-button>
      </v-container></swiper-slide>
    <div class="d-flex justify-center mt-3">
      <div v-for="action in ['button-prev', 'pagination', 'button-next']" :class="[`swiper-${action} mt-0`]">
        <v-btn v-if="action.includes('button')" class="ma-2" variant="outlined"
          :icon="`mdi-arrow-${action.includes('prev') ? 'left' : 'right'}`"></v-btn>
      </div>
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
.swiper-slide {
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  width: 792px;
  height: 403px;
  transform: scale(0.9);

  &.swiper-slide-active {
    transform: scale(1);
  }

  .v-container {
    margin-left: 32px;
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


.swiper-button-next,
.swiper-button-prev {
  position: static;
  display: block;
  width: fit-content;
  height: fit-content;

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
    .v-container {
      margin-left: 0px;
    }
  }
}
</style>
