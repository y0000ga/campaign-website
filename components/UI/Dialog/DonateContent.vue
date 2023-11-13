<template>
  <v-container
    :class="['pa-0', 'd-flex', props.isDesktop ? 'flex-row' : 'flex-column', 'h-100', 'w-100', props.isDesktop ? 'ga-4' : 'ga-2']"
    style="min-width:100%;">
    <div
      :class="['d-flex', props.isDesktop ? 'flex-column' : 'flex-row', 'justify-space-between', 'align-center', 'bg-background-secondary', 'rounded-xl', 'pa-4', 'ma-0']"
      :style="{ 'height': props.isDesktop ? '' : '163px', 'width': props.isDesktop ? '60%' : '' }">
      <v-col class="pa-0" :style="{ width: props.isDesktop ? '100%' : 'fit-content' }">
        <h6 :class="['text-primary', props.isDesktop ? 'text-h1' : 'text-h6']"
          :style="{ 'font-weight': '700', 'line-height': props.isDesktop ? '60px' : '24px' }">
          您的小筆捐款<br />
          是每隻毛孩未來的大大動力！</h6>
        <p :class="[props.isDesktop ? 'text-body-1' : 'text-caption', 'mt-4']">目前小額贊助總金額</p>
        <h5 :class="[props.isDesktop ? 'text-h2' : 'text-h5']">987,655,873</h5>
      </v-col>
      <v-img :src="donate"
        :style="{ 'width': props.isDesktop ? '' : '98px', 'min-width': props.isDesktop ? '348px' : '98px', 'height': props.isDesktop ? '348px' : '95px', 'max-width': props.isDesktop ? '' : '98px' }"></v-img>
    </div>
    <v-col class="pa-0" v-if="!isDonated" :style="{ 'max-width': props.isDesktop ? '' : '' }">
      <h5 :class="['text-h5', props.isDesktop ? 'mb-6' : 'my-6']">捐款方案</h5>
      <div variant="outlined" v-for="plan in DONATE_PLAN" :key="plan.id"
        :class="['mb-4', 'py-6', 'px-4', 'plan', (props.isDesktop && plan.id !== 'd4') ? 'd-flex justify-space-between' : '']"
        :style="{ 'cursor': 'pointer', 'border': selectedPlan.id === plan.id ? '2px solid #DA7D4A' : '' }"
        @click="handleSelectPlan(plan.id)">
        <h5 class="text-primary text-h5 d-flex align-center"
          :style="{ 'min-width': props.isDesktop ? 'fit-content' : '' }">{{ plan.title }}
        </h5>
        <v-input v-if="plan.id === 'd4'" class="bg-gray-1 rounded-lg mt-2 py-4 pl-4 pr-3" :hide-details="true"><template
            v-slot:prepend>NT$</template><input placeholder="輸入金額" type="number" min="1" class="w-100" style="border:none"
            oninput="validity.valid||(value='');" :hide-details="true" v-model="customMoney" /></v-input>
        <div v-else :class="['pa-0', 'd-flex', props.isDesktop ? '' : 'mt-2', 'ga-4']">
          <v-row :class="['ma-0', ' pa-0', ' align-center ']">
            <p class="text-body-1 mr-2">NT$</p>
            <h4 class="text-h4">{{ moneyTrans(plan.amount) }}</h4>
          </v-row>
          <v-row class="ma-0 pa-0 align-center justify-end text-gray-5" style="width:140px">已有{{ moneyTrans(plan.count)
          }}人贊助</v-row>
        </div>
      </div>
      <base-button title="前往捐款" theme="primary" :fullWidth="true"
        :disabled="selectedPlan.id && selectedPlan.amount ? false : true" @click="handleDonate"></base-button>
    </v-col>
    <v-col v-else class="d-flex flex-column align-center h-100 justify-center ga-8">
      <h3 class="text-h3">感謝您的捐款</h3><v-img :src="donate_finish" :width="187"
        style="max-height:166px"></v-img><base-button style="width: 187px" title="關閉" theme="gray"
        @click="homeStore.handleActiveDialog(Dialog.NULL)"></base-button>
    </v-col>
  </v-container>
</template>

<script lang="ts" setup>
import donate from '~/assets/image/donate.svg'
import BaseButton from '~/components/UI/BaseButton.vue';
import { moneyTrans } from '~/utils/helper';
import { DONATE_PLAN } from '~/utils/constant'
import donate_finish from '~/assets/image/donate_finish.svg'
import { useHomeStore, Dialog } from '~/stores/home';

const homeStore = useHomeStore()

const props = defineProps({
  isDesktop: {
    type: Boolean,
    required: true
  }
})

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