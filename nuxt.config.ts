export default defineNuxtConfig({
  target: 'static',
  experimental: {
    payloadExtraction: false
  },
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify', '@pinia/nuxt',],
  build: {
    transpile: ['vuetify'],
  },
  css: ["@/assets/scss/style.scss"],
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxtjs/robots', ],
  robots: {
    Disallow: "",
  },
  devtools: { enabled: true },
  typescript: {
    typeCheck: {
      eslint: {
        files: './src/**/*.{ts,js,vue}'
      }
    },
  },
  app: {
    head: {
      title: "喵立翰 | 台灣的明天 喵先鋪路",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: "width=device-width,initial-scale=1.0,minimum-scale=1,maximum-scale=1,user-scalable=no" },
        {
          name: 'description',
          content: '台灣的明天 喵先鋪路'
        },
        { hid: "keywords", name: "keywords", content: "台灣的明天 喵先鋪路" },
        { name: "og:title", content: "競選官網" },
        { name: "og:description", content: "台灣的明天 喵先鋪路" },
        { name: "og:image", content: "" },
        { name: "og:url", content: "" }, {
          name: "og:type",content:"website"
        }
      ],
      link: [
        {rel:'icon',type:'image/svg',href:'/logo.svg'}
      ]
    },
    baseURL: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/campaign-website/' : '/',
    buildAssetsDir: '/static/'
  },
  components: true,
  imports: {
    dirs: ['stores']
  }
})