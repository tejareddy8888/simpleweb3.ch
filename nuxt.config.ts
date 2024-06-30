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
    githubToken: process.env.E_GITHUB_TOKEN
  },
  apollo: {
    clients: {
      default: {
        tokenName: 'github-token',
        httpEndpoint: 'https://api.github.com/graphql',
      }
    }
  }
})