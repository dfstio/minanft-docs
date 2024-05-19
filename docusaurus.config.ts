import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import path from "node:path";

const config: Config = {
  title: "MinaNFT",
  tagline: "Proof of NFT",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.minanft.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "DFST", // Usually your GitHub org/user name.
  projectName: "MinaNFT", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    [
      "docusaurus-plugin-typedoc-api",
      {
        projectRoot: path.join(__dirname, "../minanft-lib"),
        packages: ["."],
        banner:
          "Start building your own Mina NFTs today with the minanft library!",
        typedocOptions: {
          excludeExternals: true,
        },
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        googleTagManager: {
          containerId: "G-7VMTL8FVEL", //'GTM-WZ4G3MFW',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    algolia: {
      // The application ID provided by Algolia
      appId: "FNFWWBB84O",

      // Public API key: it is safe to commit it
      apiKey: "cdf9253dbedbc7121d9204aed33c1e39", //'1f8f5474095e765135d334904b12fe61',

      indexName: "minanft",
      externalUrlRegex: "https://docs.minanft.io/coverage/",

      // Optional: see doc section below
      contextualSearch: false,

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: "search",

      //... other Algolia params
    },
    navbar: {
      title: "MinaNFT",
      logo: {
        alt: "MinaNFT Logo",
        src: "img/minanft.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        //{to: '/blog', label: 'Blog', position: 'left'},
        /*
        {
          href: 'https://lib.minanft.io',
          label: 'API',
          position: 'left',
        },
        */
        {
          to: "api",
          label: "API Reference",
          position: "left",
        },
        {
          href: "https://docs.minanft.io/coverage",
          label: "Coverage",
          position: "left",
        },
        {
          href: "https://t.me/minanft_bot?start",
          label: "@MinaNFT_bot",
          position: "right",
        },
        {
          href: "https://github.com/dfstio/minanft-lib",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://www.npmjs.com/package/minanft",
          label: "NPM",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Illustrated Tutorial",
              to: "/",
            },
            {
              label: "API Reference",
              to: "api",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/j8XpQ3pr",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/minanft_io",
            },
          ],
        },
        {
          title: "DFST",

          items: [
            /*
            {
              label: 'Blog',
              to: '/blog',
            },
            */
            {
              label: "GitHub",
              href: "https://github.com/dfstio",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/dfst_io",
            },
            {
              label: "dfst.io",
              href: "https://dfst.io",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DFST. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
