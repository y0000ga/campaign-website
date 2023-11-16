import { onMounted, onUnmounted, ref } from "vue";

export enum Device {
  Desktop = 'Desktop',
  Tablet = 'Tablet',
  Mobile = 'Mobile'
}

export const useResponsive = () => {
  const device = ref(Device.Desktop)

  const handleWindowWidth = (event: Event) => {
    const window = event.target as Window
    device.value = window.innerWidth > 1200 ? Device.Desktop : Device.Tablet
  }
  onMounted(() => {
    device.value = window.innerWidth > 1200 ? Device.Desktop : Device.Tablet
    window.addEventListener("resize", handleWindowWidth)
  })

  onUnmounted(() => {
    window.removeEventListener("resize", handleWindowWidth)
  })
  return {
    device,
  }
}