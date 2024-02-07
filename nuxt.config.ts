// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    shim: false,
    strict: true,
  },
  runtimeConfig: {
    apiSecret: "",
    public: {
      apiBase: "/api",
    },
  },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@kevinmarrec/nuxt-pwa",
    "@vueuse/nuxt",
  ],
  pwa: {
    workbox: {
      enabled: false,
    },
  },

  target: 'static',


  router: {
    base: '/nuxt3-admin-deploy/'// 프로젝트 이름에 맞게 수정
  },
  generate: {
    dir: 'dist/nuxt3-admin-deploy'
  }

});
