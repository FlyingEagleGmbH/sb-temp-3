export default defineNuxtConfig({
  components: true,
  app: {
    head: {
      title: process.env.APP_TITLE,
      meta: [
        // { name: 'description', content: `` },
        // { name: 'g-site-verification', content: process.env.GSITEVERIFICATION },
        { name: 'keywords', content: "schädlingsbekämpfung, kammerjäger, wespenbekämpfer, bettwanzenbekämpfung, kammerjäger mäuse" }
      ]
    }
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/scss/styles.scss'
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          addtionalData: ['@import "@/assets/scss/styles.scss";', '@import "@/assets/scss/variables.scss";']
        }
      }
    }
  },
  modules: ['@nuxt/image'],
  // modules: ['nuxt-simple-sitemap'],
  // nitro: {
  //  prerender: {
  //    crawlLinks: true,
  //    routes: ['/']
  //  },
  // },
  runtimeConfig: {
    public: {
      TITLE: process.env.APP_TITLE,
      // CITY: process.env.APP_CITY,
      MAIL: process.env.APP_MAIL,
      PHONE: process.env.APP_PHONE,
      // URL: process.env.APP_URL,
      GRECAPTCHAPUBKEY: process.env.GRECAPTCHAPUBKEY,
    },
    MAILHOST: process.env.MAILHOST,
    MAILPORT: process.env.MAILPORT,
    MAILUSER: process.env.MAILUSER,
    MAILPASSWORD: process.env.MAILPASSWORD,
    CONTACTMAIL: process.env.CONTACTMAIL,
    GRECAPTCHASECRETKEY: process.env.GRECAPTCHASECRETKEY
  }
})
