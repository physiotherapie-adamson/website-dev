export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: "100..900",
          "JetBrains Mono": "100..900",
        },
      },
    ],
    "nuxt-icon",
  ],
  devtools: { enabled: true },
});
