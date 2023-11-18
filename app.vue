<template>
  <v-app>
    <v-theme-provider>
      <NuxtLayout name="default">
        <loading-indicator v-if="uiStore.isLoading"></loading-indicator>
        <NuxtPage v-else />
      </NuxtLayout>
    </v-theme-provider>
  </v-app>
</template>

<script setup lang="ts">
import LoadingIndicator from './layouts/LoadingIndicator.vue';
import useUiStore from './stores/ui';
const uiStore = useUiStore()
setTimeout(() => {
  uiStore.handleLoading(false)
}, 2000)
</script>