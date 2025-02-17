import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

export default defineConfig({
  site: "https://ajaybajad.vercel.app/",

  integrations: [sitemap(), robotsTxt({
    sitemap: [
      "https://ajaybajad.vercel.app/sitemap-index.xml",
      "https://ajaybajad.vercel.app/sitemap-0.xml",
    ],
  }), solidJs(), UnoCSS({ injectReset: true }), icon(), svelte(), react()],
});