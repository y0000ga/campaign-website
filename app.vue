<template>
  <v-app>
    <v-theme-provider>
      <NuxtLayout :name="layout">
        <NuxtPage />
      </NuxtLayout>
    </v-theme-provider>
  </v-app>
</template>

<script setup lang="ts">
const layout = "default";
</script>