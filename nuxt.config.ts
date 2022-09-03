import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  // 自動インポートを無効にしたい場合
  // imports: {
  //   autoImport: false
  // }
});
