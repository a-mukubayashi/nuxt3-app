import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "src/",
  typescript: {
    shim: false,
    strict: true,
  },
  // 自動インポートを無効にしたい場合
  // imports: {
  //   autoImport: false
  // }
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/global/_colors.scss" as *;',
        },
      },
    },
  },
});
