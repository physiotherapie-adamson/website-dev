export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: true,
          "JetBrains Mono": true,
        },
      },
    ],
    "shadcn-nuxt",
    "nuxt-icon",
  ],
  devtools: { enabled: true },
});
