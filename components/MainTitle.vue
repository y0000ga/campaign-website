<template>
  <v-chip class="text-h6 text-white bg-text-primary">{{ props.englishTitle }}</v-chip>
  <h1 class="styled-gradient text-mantou title">{{ props.title }}</h1>
</template>

<script setup lang="ts">
const props = defineProps({
  englishTitle: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

</script>

<style scoped lang="scss">
.v-chip {
  height: 40px;
  width: fit-content;
  border-radius: 8px;
}

.title {
  font-size: 64px;
  font-weight: 400;
}
</style>