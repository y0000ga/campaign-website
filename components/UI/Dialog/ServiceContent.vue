<template>
  <v-container :class="['pa-0 d-flex h-100 w-100 ', isDesktop ? 'flex-row ga-2' : 'flex-column ga-4']"
    style="min-width:100%;">
    <div
      :class="['d-flex rounded-xl ma-0', isDesktop ? 'flex-column align-end overflow-hidden' : 'flex-row justify-space-between']"
      :style="{ 'height': isDesktop ? '100%' : '147px', 'width': isDesktop ? '60%' : '', backgroundColor: '#E3F8FF' }">
      <v-col class="pa-0 pl-5 pt-5" :style="{ width: isDesktop ? '100%' : 'fit-content' }">
        <h6 :class="['text-text-primary', isDesktop ? 'text-h1' : 'text-h6', 'font-weight-bold']"
          :style="{ 'line-height': isDesktop ? '60px' : '24px' }">
          分享您的想法<br />
          一同將我們的未來<br v-if="!isDesktop" />打造更美好！
        </h6>
      </v-col>
      <v-img :src="isDesktop ? mail_man_desktop : mail_man"
        :style="{ 'width': isDesktop ? '731px' : '195px', 'min-width': isDesktop ? '731px' : '195px', 'height': isDesktop ? '480px' : '147px', 'max-height': isDesktop ? '480px' : '', 'max-width': isDesktop ? '100%' : '195px' }"></v-img>
    </div>
    <v-col class="pa-0" v-if="!isFinished">
      <h5 class="text-h5">您的姓名</h5>
      <v-input class="bg-gray-1 rounded-lg mt-2 mb-6 py-4 pl-4 pr-3" :error-messages="[mail.name.error]"
        :hide-details="mail.name.error ? 'auto' : true"><input v-model="mail.name.value" type="text" placeholder="輸入內容"
          class="w-100" style="border:none" /></v-input>
      <h5 class="text-h5">Email</h5>
      <v-input class="bg-gray-1 rounded-lg mt-2 mb-6 py-4 pl-4 pr-3" :error-messages="[mail.email.error]"
        :hide-details="mail.email.error ? 'auto' : true"><input v-model="mail.email.value" type='email'
          placeholder="email" class="w-100" style="border:none" /></v-input>
      <h5 class="text-h5">手機</h5>
      <v-input class="bg-gray-1 rounded-lg mt-2 mb-6 py-4 pl-4 pr-3" :error-messages="[mail.tel.error]"
        :hide-details="mail.tel.error ? 'auto' : true"><input v-model="mail.tel.value" type="tel" placeholder="手機號碼"
          class="w-100" style="border:none" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /></v-input>
      <h5 class="text-h5">您的建言</h5>
      <v-input class="bg-gray-1 rounded-lg mt-2 mb-6 py-4 pl-4 pr-3" :error-messages="[mail.advice.error]"
        :hide-details="mail.advice.error ? 'auto' : true"><textarea v-model="mail.advice.value" placeholder="輸入內容"
          class="w-100" style="all:unset" rows="4"></textarea></v-input>

      <base-button theme="primary" :fullWidth="true" :disabled="false" @click="handleMail">送出意見</base-button>
    </v-col>
    <v-col v-else :class="['d-flex  flex-column align-center justify-center ga-8', isDesktop ? '' : 'h-100']">
      <h3 class="text-h3">感謝您的意見</h3><v-img :src="donate_finish" :width="187"
        style="max-height:166px"></v-img><base-button style="width: 187px" title="關閉" theme="gray"
        @click="homeStore.handleActiveDialog(Dialog.NULL)"></base-button>
    </v-col>
  </v-container>
</template>

<script lang="ts" setup>
import BaseButton from '~/components/UI/BaseButton.vue';
import donate_finish from '~/assets/image/donate_finish.svg'
import { useHomeStore, Dialog } from '~/stores/home';
import mail_man from '~/assets/image/mail_man.svg'
import mail_man_desktop from '~/assets/image/mail_man_desktop.svg'
import { useResponsive, Device } from '~/utils/hooks/useResponsive';

const homeStore = useHomeStore()
const isFinished = ref(false)
const { device } = useResponsive()
const isDesktop = computed(() => device.value === Device.Desktop)

type TMail = {
  advice: string,
  tel: string,
  name: string,
  email: string
}

const mail = reactive({
  name: {
    value: "",
    error: ""
  },
  email: {
    value: "",
    error: ""
  },
  tel: {
    value: "",
    error: ""
  },
  advice: {
    value: "",
    error: ""
  },
})

const validation = ({ advice, tel, name, email }: TMail) => {
  const isAdviceEmpty = advice.length === 0
  const isTelEmpty = tel.length === 0
  const isNameEmpty = name.length === 0
  const isEmailEmpty = email.length === 0
  const isTelValid = tel.match(/09\d{2}(\d{6}|-\d{3}-\d{3})/g)
  const isEmailValid = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
  if (!isAdviceEmpty && !isTelEmpty && !isNameEmpty && !isEmailEmpty && isTelValid && isEmailValid) {
    return true
  } else {
    if (isAdviceEmpty) {
      mail.advice.error = '內容不得為空'
    } else {
      mail.advice.error = ''
    }
    if (isTelEmpty) {
      mail.tel.error = '內容不得為空'
    } else {
      mail.tel.error = ''
    }
    if (isNameEmpty) {
      mail.name.error = '內容不得為空'
    } else {
      mail.name.error = ''
    }
    if (isEmailEmpty) {
      mail.email.error = '內容不得為空'
    } else {
      mail.email.error = ''
    }
    if (!isTelValid) {
      mail.tel.error = '手機號碼格式錯誤'
    } else {
      mail.tel.error = ''
    }
    if (!isEmailValid) {
      mail.email.error = 'Email 格式錯誤'
    } else {
      mail.email.error = ''
    }
    return false
  }
}

const handleMail = () => {
  const content = { name: mail.name.value, email: mail.email.value, tel: mail.tel.value, advice: mail.advice.value }
  const isMailValid = validation(content)
  if (isMailValid) {
    isFinished.value = true
  }
}

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