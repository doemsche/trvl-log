// import daisyui from "daisyui";
import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "22024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
  ],
  eslint: {
    config: {
      standalone: false, // <---
    },
  },
  // tailwindcss: {
  //   config: {
  //     plugins: [daisyui],
  //   },
  // },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],
});
