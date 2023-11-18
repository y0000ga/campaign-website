<template>
  <div ref="lottieBox"></div>
</template>

<script lang="ts" setup>
import lottie from "lottie-web"
import { onMounted, ref } from "vue"

interface TProps {
  src?: object,
  path?: string
  loop?: boolean,
  autoplay?: boolean,
}

const props = withDefaults(defineProps<TProps>(), {
  src: () => ({}),
  path: "",
  loop: true,
  autoplay: true
})


const lottieBox = ref(null)
onMounted(() => {
  if (lottieBox.value) {
  lottie.loadAnimation({
      container: lottieBox.value,
      renderer: "svg", 
      loop: props.loop, 
      autoplay: props.autoplay, 
      path: props.path,
      animationData: Object.keys(props.src).length == 0 ? "" : props.src,//本地路径，优先级更高
    })
  }
})
</script>