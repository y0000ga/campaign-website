import { ref } from "vue"

export const useCounter = (final: number) => {
  const current = ref(0)
  const unit = Math.ceil(final/8)

  const timerId = setInterval(() => {
    if (final - current.value > unit) {
      current.value = current.value + unit
    } else {
      current.value = final
    }

  }, 100)

  if (current.value > final) {
    clearInterval(timerId)
  }

  return current
}