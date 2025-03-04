// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/icon", "@nuxt/content", "@nuxt/image", "@nuxtjs/apollo"],

  content: {
    highlight: {
      theme: 'rose-pine-dawn',
      preload: ['shell']
    }
  },

  runtimeConfig: {
    githubToken: '',
    public: {
      baseURL: '',
    },
  },

  apollo: {
    clients: {
      default: {
        tokenName: 'github-token',
        httpEndpoint: 'https://api.github.com/graphql',
      }
    }
  },

  compatibilityDate: '2025-01-26'
})