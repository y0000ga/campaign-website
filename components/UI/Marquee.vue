<template>
  <div class="marquee w-100 text-mantou text-white bg-primary">
    <div class="wrapper">
      <p class="d-flex align-center">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<style scoped setup lang="scss">
.marquee {
  position: relative;
  height: 96px;
  font-size: 64px;

  .wrapper {
    animation: wrapper 10s linear infinite;
  }

  p {
    height: 96px;
    position: absolute;
    white-space: nowrap;
    transform: translateX(0);
    animation: content 10s linear infinite;
  }
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

@media(max-width:768px) {
  .marquee {
    height: 62px;
    font-size: 40px;
    p {
      height: 62px
    }
  }
}
</style>