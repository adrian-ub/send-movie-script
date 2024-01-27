import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import lunaria from "@lunariajs/starlight";

export const locales = {
  en: { label: "English", lang: "en" },
  es: { label: "Español", lang: "es" },
};
const site = "https://send-movie-script.adrianub.dev/";

export default defineConfig({
  site,
  trailingSlash: "always",
  integrations: [
    starlight({
      title: "Send Movie Script",
      lastUpdated: true,
      defaultLocale: "en",
      locales,
      editLink: {
        baseUrl: "https://github.com/adrian-ub/send-movie-script/edit/main",
      },
      social: {
        github: "https://github.com/adrian-ub/send-movie-script",
      },
      sidebar: [
        {
          label: "Guides",
          translations: {
            es: "Guías",
          },
          items: [
            {
              label: "How to work",
              link: "/guides/how-to-work/",
              translations: { es: "Cómo funciona" },
            },
          ],
        },
        {
          label: "Movies",
          translations: {
            es: "Películas",
          },
          autogenerate: {
            directory: "movies",
          },
        },
      ],
      plugins: [
        // All options are optional, values shown are the defaults.
        lunaria({
          // A relative path to your Lunaria configuration file.
          configPath: "./lunaria.config.json",
          // The desired route to render the Lunaria dashboard.
          route: "/lunaria",
          // Option to enables syncing the Lunaria configuration file
          // with Starlight's configuration whenever you run
          // `astro build`, populating the Lunaria config's `defaultLocale`,
          // `locales`, and `files` fields automatically.
          sync: false,
        }),
      ],
      components: {
        MarkdownContent: "./src/components/MarkdownContent.astro",
      },
      customCss: ["./src/assets/theme.css", "./src/assets/landing.css"],
    }),
  ],
});
