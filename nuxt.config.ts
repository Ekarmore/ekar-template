export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
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
  // routeRules: {
  //   '/': { ssr: false },
  //   '/About': { ssr: false },
  //   '/Unnoticed': { ssr: false },
  //   '/AnotherLandscape': { ssr: false },
  //   '/NeverKnowhowmuchiloveyou': { ssr: false },
  // },
})
