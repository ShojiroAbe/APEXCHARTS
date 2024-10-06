// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@pinia/nuxt'],
  css: ['@/assets/scss/main.scss'],
  hooks: {
    'pages:extend'(routes) {
      routes.push({
        name: 'top',
        path: '/',
        file: '@/pages/top.vue',
      });
    },
  },
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
  nitro: {
    rollupConfig: {
      output: {
        entryFileNames: 'main.js',
        chunkFileNames: 'main.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'main.css';
          }
          return assetInfo.name || '[name][extname]';
        },
      },
    },
  },
});
