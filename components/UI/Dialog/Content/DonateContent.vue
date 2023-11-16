<template>
  <action-container>
    <div
      :class="['d-flex justify-space-between align-center bg-background-secondary rounded-xl pa-4 ma-0', isDesktop ? 'flex-column' : 'flex-row']"
      :style="{ ...isDesktop ? { width: '60%' } : { height: '163px' } }">
      <v-col class="pa-0" :style="{ width: isDesktop ? '100%' : 'fit-content' }">
        <h6 :class="['text-primary font-weight-bold', isDesktop ? 'text-h1' : 'text-h6']"
          :style="{ 'line-height': isDesktop ? '60px' : '24px' }">
          您的小筆捐款<br />
          是每隻毛孩未來的大大動力！</h6>
        <p :class="[isDesktop ? 'text-body-1' : 'text-caption', 'mt-4']">目前小額贊助總金額</p>
        <h5 :class="[isDesktop ? 'text-h2' : 'text-h5']">987,655,873</h5>
      </v-col>
      <v-img :src="donate"
        :style="{ 'width': isDesktop ? undefined : '98px', 'min-width': isDesktop ? '348px' : '98px', 'height': isDesktop ? '348px' : '95px', 'max-width': isDesktop ? undefined : '98px' }"></v-img>
    </div>
    <v-col class="pa-0" v-if="!isDonated">
      <h5 :class="['text-h5', isDesktop ? 'mb-6' : 'my-6']">捐款方案</h5>
      <div variant="outlined" v-for="plan in DONATE_PLAN" :key="plan.id"
        :class="['mb-4', 'py-6', 'px-4', 'plan', (isDesktop && plan.id !== 'd4') ? 'd-flex justify-space-between' : '']"
        :style="{ 'cursor': 'pointer', 'border': selectedPlan.id === plan.id ? '2px solid #DA7D4A' : undefined }"
        @click="handleSelectPlan(plan.id)">
        <h5 class="text-primary text-h5 d-flex align-center"
          :style="{ 'min-width': isDesktop ? 'fit-content' : undefined }">{{ plan.title }}
        </h5>
        <v-input v-if="plan.id === 'd4'" class="bg-gray-1 rounded-lg mt-2 py-4 pl-4 pr-3" :hide-details="true"><template
            v-slot:prepend>NT$</template><input placeholder="輸入金額" type="number" min="1" class="w-100" style="border:none"
            oninput="validity.valid||(value='');" :hide-details="true" v-model="customMoney" /></v-input>
        <div v-else :class="['pa-0 d-flex  ga-4', isDesktop ? '' : 'mt-2']">
          <v-row :class="['ma-0', ' pa-0', ' align-center ']">
            <p class="text-body-1 mr-2">NT$</p>
            <h4 class="text-h4">{{ moneyTrans(plan.amount) }}</h4>
          </v-row>
          <v-row class="ma-0 pa-0 align-center justify-end text-gray-5" style="width:140px">已有{{ moneyTrans(plan.count)
          }}人贊助</v-row>
        </div>
      </div>
      <base-button theme="primary" :fullWidth="true" :disabled="selectedPlan.id && selectedPlan.amount ? false : true"
        @click="handleDonate">前往捐款</base-button>
    </v-col>
    <thank-block v-else>感謝捐款</thank-block>
  </action-container>
</template>

<script lang="ts" setup>
import donate from '~/assets/image/donate.svg'
import BaseButton from '~/components/UI/BaseButton.vue';
import { moneyTrans } from '~/utils/helper';
import { DONATE_PLAN } from '~/utils/constant'
import ThankBlock from '~/components/UI/Dialog/ThankBlock.vue'
import { useResponsive, Device } from '~/utils/hooks/useResponsive';
import ActionContainer from '~/components/UI/Dialog/ActionContainer.vue';

const { device } = useResponsive()
const isDesktop = computed(() => device.value === Device.Desktop)
const selectedPlan = reactive({ id: "", title: "", amount: 0, count: 0 })
const customMoney = ref(null)
const isDonated = ref(false)

const handleSelectPlan = (planId: string) => {
  if (planId !== 'd4') {
    const existedPlan = DONATE_PLAN.find(plan => plan.id === planId)
    if (!existedPlan) return
    selectedPlan.id = planId
    selectedPlan.title = existedPlan.title
    selectedPlan.amount = existedPlan.amount
    selectedPlan.count = existedPlan.count
  } else {
    selectedPlan.id = planId
    selectedPlan.title = '自訂贊助金額'
  }
}
const handleDonate = () => {
  if (selectedPlan.id && selectedPlan.amount) {
    isDonated.value = true
  }
}
watch(() => [selectedPlan.id, customMoney.value], () => {
  if (selectedPlan.id === 'd4' && customMoney.value !== null) {
    selectedPlan.amount = customMoney.value
  }
})
</script>

<style scoped lang="scss">
.plan {
  border: 2px solid #E2E8F0;
  border-radius: 16px;
}

input {
  all: unset;
}
</style>