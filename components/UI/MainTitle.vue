<template>
  <div class="d-flex flex-column align-center">
    <v-chip class="text-h6 text-white bg-text-primary">{{ props.englishTitle }}</v-chip>
    <h1 class="font-weight-regular styled-gradient text-mantou">{{ props.title }}</h1>
  </div>
</template>

<script setup lang="ts">
interface Props {
  englishTitle: string,
  title: string
}
const props = defineProps<Props>()
</script>

<style scoped lang="scss">
.v-chip {
  height: 40px;
  width: fit-content;
  border-radius: 8px;
}

h1 {
  font-size: 64px;
}

@media(max-width: 768px) {
  h1 {
    font-size: 52px;
  }
}
</style>