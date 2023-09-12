export default defineNuxtConfig({
  modules: [
    "nuxt-icon",
    ["@nuxtjs/google-fonts", { families: { Roboto: true } }],
  ],
  css: ["normalize.css"],
  devtools: { enabled: true }
})
