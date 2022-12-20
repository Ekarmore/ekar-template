export default defineNuxtConfig({
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' },
  // },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image-edge',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: [
    '@unocss/reset/tailwind.css',
    '@/globalStyle.css',
  ],
  // colorMode: {
  //   classSuffix: '',
  // },
  build: {
    transpile: ['gsap'],
  },
  routeRules: {
    '/Turpan': { ssr: false },
  },
})
