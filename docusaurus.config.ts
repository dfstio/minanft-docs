import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import path from 'node:path';

const config: Config = {
  title: 'MinaNFT',
  tagline: 'Empower Your Identity, Secure Your Story – with MinaNFT',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.minanft.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      'docusaurus-plugin-typedoc-api',
      {
        projectRoot: path.join(__dirname, '../minanft-lib'),
        packages: ['.'],
      },
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',       },
        blog: {
          showReadingTime: true,       },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    algolia: {
      // The application ID provided by Algolia
      appId: 'FNFWWBB84O',

      // Public API key: it is safe to commit it
      apiKey: '1f8f5474095e765135d334904b12fe61',

      indexName: 'minanft',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
    navbar: {
      title: 'MinaNFT',
      logo: {
        alt: 'MinaNFT Logo',
        src: 'img/minanft.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        //{to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://lib.minanft.io',
          label: 'API',
          position: 'left',
        },
        {
          href: 'https://docs.minanft.io/coverage',
          label: 'Coverage',
          position: 'left',
        },
        {
          href: 'https://t.me/minanft_bot?start',
          label: '@MinaNFT_bot',
          position: 'right',
        },
        {
          href: 'https://github.com/dfstio/minanft-lib',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.npmjs.com/package/minanft',
          label: 'NPM',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Illustrated Tutorial',
              to: '/docs/intro',
            },
            {
              label: 'Create NFT',
              to: '/docs/category/create-nft',
            },
            {
              label: 'API Reference',
              href: 'https://lib.minanft.io',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/CVc9yz8K',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/minanft_io',
            },
          ],
        },
        {
          title: 'DFST',
          items: [
            /*
            {
              label: 'Blog',
              to: '/blog',
            },
            */
            {
              label: 'GitHub',
              href: 'https://github.com/dfstio',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/dfst_io',
            },
            {
              label: 'dfst.io',
              href: 'https://dfst.io',
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
