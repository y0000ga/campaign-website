import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const customLightTheme = {
  dark: false,
  colors: {
    "gradient-primary": "#E5793B",
    "gradient-secondary": "#FF4185",
    "primary": "#DA7D4A",
    "text-primary": "#334155",
    "text-secondary": "#94A3B8",
    "background-primary": '#FDFCFB',
    "background-secondary": "#F7ECE1",
    "gray-50": "#F8FAFC",
    "gray-100": "#F1F5F9",
    "gray-200": "#E2E8F0",
    "gray-300": "#CBD5E1",
    "gray-500": "#64748B",
    "gray-600": "#475569",
    "gray-800": "#1E293B",
    "gray-900": "#0F172A",
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'customLightTheme',
      themes: {
        customLightTheme
      }
    },
    icons: {
      defaultSet: 'mdi',
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
