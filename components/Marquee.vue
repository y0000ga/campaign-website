<template>
  <div class="marquee w-100 text-mantou text-white bg-primary">
    <div class="wrapper">
      <p class="content">
        {{ props.content }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  content: {
    type: String,
    required: true
  }
})
</script>

<style setup lang="scss">
.marquee {
  position: relative;
  height: 96px;
  font-size: 64px;
}

.marquee .wrapper {
  animation: wrapper 10s linear infinite;
}

.marquee .content {
  position: absolute;
  white-space: nowrap;
  transform: translateX(0);
  animation: content 10s linear infinite;
}

@keyframes wrapper {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes content {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>