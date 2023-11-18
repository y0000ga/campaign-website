<template>
  <div>
    <top-intro></top-intro>
    <v-container class="pa-0">
      <v-row class="d-flex justify-center align-end" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1000">
        <v-img :aspect-ratio="723 / 404" :src="mainBg" class="absolute mainBg" />
        <v-img :aspect-ratio="420 / 537" :src="main" class="mainImg" />
      </v-row>
    </v-container>
    <marquee>{{ PROMOTION.join('') }}</marquee>
    <v-container :class="fullContainerClass" id="advocate">
      <v-card class="rounded-xl d-flex shadow-md about" variant="elevated" data-aos="zoom-in" data-aos-duration="500"
        data-aos-anchor-placement="center-bottom">
        <v-container class="w-50 d-flex align-center flex-column px-10 justify-center">
          <main-title english-title="ADVOCATE" :title="ADVOCATE"></main-title>
          <h3 class="text-h3 my-8">我堅信 ! 藉由推動更完善的<span class="text-primary">貓咪福利</span>和相關政策，更是間接地投資於<span
              class="text-primary">{{ TAIWAN_FUTURE }}</span>。</h3>
          <p class="text-subtitle-1">{{ ADVOCATE_CONTENT }}</p>
        </v-container>
        <v-img cover :src="advocate" />
      </v-card>
    </v-container>
    <v-container class="flex-center flex-column mainBlock" id="activity"><main-title data-aos="zoom-in"
         data-aos-duration="500" data-aos-anchor-placement="center-bottom" english-title="LATEST EVENTS"
        title="最新活動"></main-title>
      <v-card class="d-flex mt-10 ga-6 max-w-primary activity" variant="flat">
        <activity-card data-aos="fade-right" data-aos-duration="500"
          data-aos-anchor-placement="center-bottom" type="main" :img-src="ACTIVITY[0].imgSrc" :date="ACTIVITY[0].date"
          :id="ACTIVITY[0].id" :title="ACTIVITY[0].title" :content="ACTIVITY[0].content"></activity-card>
        <v-container class="pa-0 d-flex flex-column relative ga-7" data-aos="fade-left"
          data-aos-anchor-placement="center-bottom" data-aos-duration="500">
          <activity-card v-for="activity in ACTIVITY" type="sub" :key="activity.id" :img-src="activity.imgSrc"
            :date="activity.date" :title="activity.title" :content="activity.content" :id="activity.id"></activity-card>
          <base-button icon="mdi-arrow-right" theme="gray">查看更多</base-button>
        </v-container>
      </v-card>
    </v-container>
    <v-container :class="fullContainerClass" id="policy"><main-title data-aos="zoom-in"
        data-aos-anchor-placement="center-bottom" data-aos-duration="250" english-title="POLICY ISSUES"
        title="政策議題"></main-title><base-swiper data-aos="fade-left" data-aos-anchor-placement="center-bottom"
        data-aos-duration="500"></base-swiper></v-container>
    <v-container class="d-flex justify-center ga-6 mainBlock actions">
      <base-action-card :block="item.block" :dialog-id="item.id" v-for="(item,index) in ACTION" :data-aos="index=== 0 ?'fade-right':'fade-left'"
        data-aos-duration="500" data-aos-anchor-placement="center-bottom" :title="item.title" :content="item.content"
        :imgSrc="item.imgSrc" :button="item.button" :class="item.block"></base-action-card>
    </v-container>
    <bottom-intro data-aos="zoom-in" data-aos-duration="500" data-aos-anchor-placement="center-bottom"></bottom-intro>
    <base-dialog></base-dialog>
  </div>
</template>

<script setup lang="ts">
import { PROMOTION, ADVOCATE, TAIWAN_FUTURE, ADVOCATE_CONTENT, ACTIVITY, ACTION } from '~/utils/constant';
import main from '~/assets/image/main.svg'
import mainBg from '~/assets/image/main-bg.svg'
import Marquee from '~/components/UI/Marquee.vue';
import advocate from '~/assets/image/advocate.svg'
import BaseButton from '~/components/UI/BaseButton.vue';
import TopIntro from '~/components/Home/Intro/TopIntro.vue'
import MainTitle from '~/components/UI/MainTitle.vue';
import BaseSwiper from '~/components/UI/BaseSwiper.vue';
import BaseActionCard from '~/components/UI/BaseActionCard.vue';
import BottomIntro from '~/components/Home/Intro/BottomIntro.vue';
import BaseDialog from '~/components/UI/Dialog/BaseDialog.vue';
import ActivityCard from '~/components/Home/Activity/ActivityCard.vue';
import { handleScrollTop } from '~/utils/helper'
import AOS from 'aos';

const fullContainerClass = "max-w-full bg-background-secondary flex-column flex-center"

const nuxtApp = useNuxtApp()


onMounted(() => AOS.init());

nuxtApp.hook("page:finish", () => {
  handleScrollTop()
})
</script>

<style setup lang="scss" scoped>
.mainBlock {
  padding: 104px 0px;
  max-width: 1320px;
  width: 87%
}

.mainImg {
  height: 537px
}

.mainBg {
  width: 723px
}

.max-w-primary {
  max-width: 1320px;
}

.v-container.max-w-full {
  padding: 104px 0px;
}

.v-application .px-26 {
  padding: 104px 0px !important
}

@media(max-width:1280px) {
  .v-application .px-26 {
    padding: 64px 0px 132px 0px !important;
  }
}

@media(max-width: 960px) {
  .v-container.max-w-full {
    padding: 64px 16px;
  }

  .mainBlock {
    padding: 64px 0px;

    .activity {
      flex-direction: column;
    }
  }

  .about {
    flex-direction: column;

    .w-50 {
      width: 100% !important
    }

    .text-h3 {
      font-size: 1.5rem !important;
      font-weight: 700;
      line-height: 2.25rem;
      letter-spacing: 0em !important;
    }

    .text-subtitle-1 {
      font-size: 1rem !important;
      font-weight: 400;
      line-height: 1.5rem;
      letter-spacing: 0em !important;
    }
  }

  .v-application .px-26 {
    padding: 64px 0px 132px 0px !important;
  }

}


@media(max-width:760px) {
  .mainImg {
    height: 254px
  }

  .mainBg {
    width: 343px;
  }

  .actions {
    display: flex;
    flex-direction: column;

    .v-img {
      width: 135px;
      height: 126px;
    }
  }
}
</style>
