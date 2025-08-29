// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
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

  themes: [
  ],

  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    [
      require.resolve('@docusaurus/plugin-content-docs'),
      {
        id: 'ebook',
        path: 'ebook',
        routeBasePath: 'ebook',
        sidebarPath: require.resolve('./sidebarsEbook.js'),
        beforeDefaultRemarkPlugins: [
            [require('@renatonagliati/remark-auto-glossary'), { yamlFile: 'glossary.yaml' }],
          ],
      },
    ],
    [
      require.resolve('@docusaurus/plugin-content-docs'),
      {
        id: 'terminology',
        path: 'terminology',
        routeBasePath: 'terminology',
        sidebarPath: require.resolve('./sidebarsTerm.js'),
        beforeDefaultRemarkPlugins: [
            [require('@renatonagliati/remark-auto-glossary'), { yamlFile: 'glossary.yaml' }],
          ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
           beforeDefaultRemarkPlugins: [
            [require('@renatonagliati/remark-auto-glossary'), { yamlFile: 'glossary.yaml' }],
          ],
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      zoom: {
        selector: '.markdown img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          // 可选：medium-zoom 的其他配置项
        }
      },
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'bookSidebar',
            position: 'right',
            label: 'Reading Notes',
          },
          {
            type: 'docSidebar',
            sidebarId: 'ebookSidebar',
            position: 'right',
            label: 'App Journal',
            docsPluginId: 'ebook',
          },
          {
            type: 'docSidebar',
            sidebarId: 'termSidebar',
            position: 'right',
            label: 'Terminology',
            docsPluginId: 'terminology',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Reading Notes',
                to: '/docs/intro',
              },
              {
                label: 'App Journal',
                to: '/ebook/intro',
              },
              {
                label: 'Terminology',
                to: '/terminology/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
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
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} KJUU. All Rights Reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
