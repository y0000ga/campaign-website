const config = {
  buildModules: ['@nuxt/typescript-build', "'@nuxtjs/vuetify'"],
  build: {
    transpile: ['vuetify'],
  },
  css: ["@/assets/scss/style.scss"],
  modules: ["@pinia/nuxt", '@nuxtjs/robots',],
  robots: {
    UserAgent: "*",
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
          content: '好棒的網站'
        },
        { hid: "keywords", name: "keywords", content: "很棒的候選人, 改善市政" },
        { name: "og:title", content: "競選官網" },
        { name: "og:description", content: "好棒的網站" },
        { name: "og:image", content: "" },
        { name: "og:url", content: "" }, {
          name: "og:type",content:"website"
        }
      ],
      link: [
        {rel:'icon',type:'image/x-icon',href:'/assets/image/logo.svg'}
      ]
    }
  }
}

export default config