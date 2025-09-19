import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome',
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
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
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
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
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
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
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
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
        blogSidebarTitle: "What's New", // 修改侧边栏标题
      },
      theme: {
        customCss: './src/css/custom.css',
      },
    }),
  ],
],


  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
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
            label: 'Concept Atlas',
            docsPluginId: 'terminology',
          },
          {to: '/blog', label: 'What\'s New', position: 'right'},
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
