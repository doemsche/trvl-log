// import daisyui from "daisyui";
import tailwindcss from "@tailwindcss/vite";

import "./app/lib/env";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "22024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxtjs/color-mode"],
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
  colorMode: {
    dataValue: "theme",
  },
});
