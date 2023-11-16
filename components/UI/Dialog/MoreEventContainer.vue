<template>
  <v-card class="bg-gray-50 rounded-lg pa-4 d-flex flex-column w-100 elevation-0 mt-16">
    <p class="text-body-1 mb-4 font-weight-bold">更多{{ props.event }}</p>
    <div class="d-flex ga-4">
      <slot></slot>
    </div>
  </v-card>
</template>

<script lang="ts" setup>
type Props = {
  event: string
}
const props = defineProps<Props>()
</script>
