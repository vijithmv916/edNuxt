// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
<<<<<<< HEAD
  ssr: true,
  app:{
    baseURL: '/edNuxt/'
  }
=======
  nitro: {
    preset: 'github-pages'
  },
>>>>>>> 3585c51d6aeef77db3b0d070238fde0937c3f8a3
})
