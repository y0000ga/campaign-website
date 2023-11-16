<template>
  <v-btn variant="flat" plain :class="['baseButton', 'rounded-pill', 'pa-0', props.fullWidth ? 'w-100' : '']">
    <p :class="[props.fullWidth ? '' : 'text-h6', 'my-5', 'ml-6', props.icon ? 'mr-2' : 'mr-6', props.theme === 'primary' ? 'text-white' : 'text-text-primary']"
      :style="{ 'fontWeight': props.fullWidth ? '600' : '' }">
      <slot></slot></p>
    <v-icon v-if="props.icon" :icon="props.icon"
      :class="['mr-4', props.theme === 'primary' ? 'text-white' : 'text-text-primary']" style="font-size: 24px;"></v-icon>
  </v-btn>
</template>

<script setup lang="ts">
type TTheme = "primary" | "white" | "gray"
interface Props {
  icon?: string,
  theme: TTheme,
  fullWidth?: boolean
}

const props = defineProps<Props>()

const color = computed(() => props.theme === 'primary' ? "#DA7D4A" : props.theme === "gray" ? "#F1F5F9" : "#ffffff"
)
</script>

<style scoped lang="scss">
.v-btn--variant-tonal .v-btn__underlay {
  background: white;

}

.v-btn.baseButton {
  width: fit-content;
  height: fit-content;
  background-color: v-bind(color) !important;
  cursor: url('~/assets/image/cursor.svg'), auto;

  .v-btn__underlay {
    background: none;
  }
}
</style>