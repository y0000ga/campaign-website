import useUiStore from '~/stores/ui'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const uiStore = useUiStore()
  uiStore.handleLoading(true)
})