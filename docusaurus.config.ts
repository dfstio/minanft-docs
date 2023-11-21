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
    locales: ['en','it'],
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
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://lib.minanft.io',
          label: 'API',
          position: 'left',
        },
        {
          href: 'https://github.com/dfstio/minanft-lib',
          label: 'GitHub',
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
              label: 'Tutorial',
              to: '/docs/intro',
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
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/dfstio',
            },
            {
              label: 'Created by',
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
