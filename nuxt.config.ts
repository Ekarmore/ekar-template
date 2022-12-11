export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page' },
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  // colorMode: {
  //   classSuffix: '',
  // },
  build: {
    transpile: ['gsap'],
  },
})
