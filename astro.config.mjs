import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://sorrirodonto.com.br",
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: "pt-BR",
        locales: { "pt-BR": "" },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["images.unsplash.com"],
  },
});