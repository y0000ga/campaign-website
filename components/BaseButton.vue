<template>
  <v-btn variant="tonal" plain class="baseButton rounded-pill pa-0">
    <h6 :class="['text-h6', 'my-5', 'ml-6', 'mr-2', props.theme === 'primary' ? 'text-white' : 'text-text-primary']">{{
      props.title }}</h6>
    <v-icon :icon="props.icon" :class="['mr-4', props.theme === 'primary' ? 'text-white' : 'text-text-primary']"
      style="font-size: 24px;"></v-icon>
  </v-btn>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

type TTheme = "primary" | "white" | "gray"

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  theme: {
    type: String as PropType<TTheme>,
    required: true
  }
})

const color = computed(() => props.theme === 'primary' ? "#DA7D4A" : props.theme === "gray" ? "#F1F5F9" : "#ffffff"
)
</script>

<style scope lang="scss">
.v-btn.baseButton {
  width: fit-content;
  height: fit-content;
  background-color: v-bind(color) !important;

  .v-btn__underlay {
    background: none;
  }
}
</style>