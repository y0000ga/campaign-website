import { defineStore } from "pinia";

const useUiStore = defineStore("uiStore", () => {
  const isLoading = ref(true)
  const handleLoading = (value: boolean) => {
    isLoading.value = value
  }
  return {isLoading,handleLoading}
} );

export default useUiStore;
