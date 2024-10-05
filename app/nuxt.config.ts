// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@pinia/nuxt'],
  hooks: {
    'pages:extend'(routes) {
      routes.push({
        name: 'top',
        path: '/',
        file: '@/pages/top.vue',
      });
    },
  },
});
