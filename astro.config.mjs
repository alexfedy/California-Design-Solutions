import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
// import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

export default defineConfig({
  site: "https://cdsbuilder.com",
  integrations: [
    react(),
    tailwind(),
    // image({
    //   serviceEntryPoint: "@astrojs/image/sharp",
    // }),
    mdx(),
    sitemap(),
    partytown({
      config: {
        debug: false, // Set to false in production
        forward: ["dataLayer.push", "gtag"],
        // Add this to resolve proxy issues
        resolveUrl: (url) => {
          // Don't proxy googletagmanager.com
          if (url.hostname.includes("googletagmanager.com")) {
            return new URL(url);
          }
          return url;
        },
      },
    }),
  ],
});
