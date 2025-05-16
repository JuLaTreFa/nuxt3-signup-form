// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
  ],
  ssr: false, // enable client-side only rendering
  devtools: { enabled: true },
  css: ['@provetcloud/css', '~/assets/css/reset.css'],
  compatibilityDate: '2024-11-01',
  vite: {
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.includes('-'),
        },
      },
    },
  },
  typescript: {
    typeCheck: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
