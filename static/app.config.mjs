
import { updateAppConfig } from '#app'
import { defuFn } from 'C:/Users/shius/Desktop/campaign-website/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "341df935-efe6-44bf-9649-271e4982ca1a"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
