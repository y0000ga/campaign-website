<template>
  <div>
    <home-intro></home-intro>
    <v-container class="pa-0">
      <v-row class="d-flex justify-center align-end">
        <v-img :aspect-ratio="723 / 404" :src="mainBg" class="absolute mainBg" />
        <v-img :aspect-ratio="420 / 537" :src="main" class="mainImg" />
      </v-row>
    </v-container>
    <marquee :content="PROMOTION.join('')"></marquee>
    <v-container class="max-w-full bg-background-secondary d-flex justify-center">
      <v-card class="rounded-xl d-flex shadow-md about" variant="elevated">
        <v-container class="w-50 d-flex align-center flex-column px-10 justify-center">
          <main-title english-title="ADVOCATE" :title="ADVOCATE"></main-title>
          <h3 class="text-h3 my-8">我堅信 ! 藉由推動更完善的<span class="text-primary">貓咪福利</span>和相關政策，更是間接地投資於<span
              class="text-primary">{{ TAIWAN_FUTURE }}</span>。</h3>
          <p class="text-subtitle-1">{{ ADVOCATE_CONTENT }}</p>
        </v-container>
        <v-img cover :src="advocate" />
      </v-card>
    </v-container>
    <v-container class="d-flex justify-center align-center flex-column mainBlock"><main-title
        english-title="LATEST EVENTS" title="最新活動"></main-title>
      <v-card class="d-flex mt-10 ga-6 max-w-primary activity" variant="flat">
        <v-container class="pa-0"><v-img class="w-100" :src="ACTIVITY[0].imgSrc" /><v-col
            class="d-flex flex-column mt-4 ga-2">
            <p class="text-caption text-text-secondary">{{ ACTIVITY[0].date }}</p>
            <p class="text-h5 text-text-primary">{{ ACTIVITY[0].title }}</p>
            <p class="text-body-1">{{ ACTIVITY[0].content }}</p>
          </v-col></v-container>
        <v-container class="pa-0 d-flex flex-column relative ga-7">
          <v-row class="ma-0 d-flex ga-4" style="max-height: 134px;" v-for="activity in ACTIVITY">
            <v-img :src="activity.imgSrc" cover class="subImg rounded-lg" />
            <v-col class="pa-0" style="width:50%;height:100%">
              <p class="text-caption text-text-secondary">{{ activity.date }}</p>
              <h6 class="my-2 text-h6 text-text-primary">{{ activity.title }}</h6>
              <p class="text-body-1 text-text-primary multi">{{ activity.content }}</p>
            </v-col>
          </v-row>
          <base-button title="查看更多" icon="mdi-arrow-right" theme="gray"></base-button>
        </v-container>
      </v-card>
    </v-container>
    <v-container
      class="d-flex justify-center align-center flex-column px-26 bg-background-secondary max-w-full "><main-title
        english-title="POLICY ISSUES" title="政策議題"></main-title><base-swiper></base-swiper></v-container>
    <v-container class="d-flex justify-center  px-26 ga-6 mainBlock actions">
      <base-action-card v-for="item in ACTION" :id="item.id" :title="item.title" :content="item.content"
        :imgSrc="item.imgSrc" :button="item.button"></base-action-card>

    </v-container>
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
<base-footer></base-footer>
  </div>
</template>

<script setup lang="ts">
import { LEGISLATOR, PROMOTION, ADVOCATE, TAIWAN_FUTURE, ADVOCATE_CONTENT, ACTIVITY, ACTION, SOCIAL } from '~/utils/constant';
import main from '~/assets/image/main.svg'
import mainBg from '~/assets/image/main-bg.svg'
import Marquee from '~/components/UI/Marquee.vue';
import advocate from '~/assets/image/advocate.svg'
import BaseButton from '~/components/UI/BaseButton.vue';
import homeIntro from '~/components/Home/Intro.vue'
import MainTitle from '~/components/UI/MainTitle.vue';
import BaseSwiper from '~/components/UI/BaseSwiper.vue';
import BaseActionCard from '~/components/UI/BaseActionCard.vue';
import BaseFooter from '~/layouts/BaseFooter.vue';
</script>

<style setup lang="scss" scoped>
.multi {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

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

.v-chip.number {
  background: linear-gradient(90deg, #E6793B 1.54%, #FF4185 97.86%);
  font-size: 32px;
  font-weight: 900;
  line-height: 48px;
  width: 50px;
  height: 50px;
}

.max-w-primary {
  max-width: 1320px;
}

.subImg {
  max-width: 201px;
}

.v-container.max-w-full{
  padding:104px 0px;
}

.bottomIntro {
  .slogan {
    display: flex;
    gap: 12px;
  }
}

.v-application .px-26{
  padding:104px 0px !important
}



@media(max-width:1280px){
  .v-application .px-26{
    padding: 64px 0px 132px 0px !important;
  }
}

@media(max-width: 960px) {
  .v-container.max-w-full{
  padding:64px 16px;
}
  .subImg {
    max-width: 109px;
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

  .v-application .px-26{
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

  .subImg {
    max-width: 109px;
  }
  .bottomIntro {
  .slogan {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:0px
  }
}

.actions{
  display: flex;
  flex-direction: column;
  .v-img{
    width:135px;
    height:126px;
    border:solid 1px;
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
