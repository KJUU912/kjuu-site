import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'bf8'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/changelog',
    component: ComponentCreator('/blog/tags/changelog', '83c'),
    exact: true
  },
  {
    path: '/blog/update 919',
    component: ComponentCreator('/blog/update 919', 'a2d'),
    exact: true
  },
  {
    path: '/blog/update 921',
    component: ComponentCreator('/blog/update 921', 'df0'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '73c'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '98a'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'fa9'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', 'b24'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'cda'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/一本书读懂财报/',
                component: ComponentCreator('/docs/一本书读懂财报/', 'd0e'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/一本书读懂财报/1',
                component: ComponentCreator('/docs/一本书读懂财报/1', 'b93'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/一本书读懂财报/2',
                component: ComponentCreator('/docs/一本书读懂财报/2', '42c'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/一本书读懂财报/3',
                component: ComponentCreator('/docs/一本书读懂财报/3', 'a2a'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/',
                component: ComponentCreator('/docs/大模型浪潮/', 'e86'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第一章/1',
                component: ComponentCreator('/docs/大模型浪潮/第一章/1', 'f9c'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第一章/2',
                component: ComponentCreator('/docs/大模型浪潮/第一章/2', 'ed0'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第一章/3',
                component: ComponentCreator('/docs/大模型浪潮/第一章/3', 'f90'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第一章/4',
                component: ComponentCreator('/docs/大模型浪潮/第一章/4', 'a37'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第一章/5',
                component: ComponentCreator('/docs/大模型浪潮/第一章/5', '383'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第三章/1',
                component: ComponentCreator('/docs/大模型浪潮/第三章/1', 'd57'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第三章/2',
                component: ComponentCreator('/docs/大模型浪潮/第三章/2', '63d'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第三章/3',
                component: ComponentCreator('/docs/大模型浪潮/第三章/3', '181'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第三章/4',
                component: ComponentCreator('/docs/大模型浪潮/第三章/4', 'a8a'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第二章/1',
                component: ComponentCreator('/docs/大模型浪潮/第二章/1', '078'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第二章/2',
                component: ComponentCreator('/docs/大模型浪潮/第二章/2', 'e97'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第二章/3',
                component: ComponentCreator('/docs/大模型浪潮/第二章/3', '19e'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第二章/4',
                component: ComponentCreator('/docs/大模型浪潮/第二章/4', '424'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第二章/5',
                component: ComponentCreator('/docs/大模型浪潮/第二章/5', 'ba4'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第二章/6',
                component: ComponentCreator('/docs/大模型浪潮/第二章/6', '471'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第二章/7',
                component: ComponentCreator('/docs/大模型浪潮/第二章/7', '6dd'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第二章/8',
                component: ComponentCreator('/docs/大模型浪潮/第二章/8', '443'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第五章/1',
                component: ComponentCreator('/docs/大模型浪潮/第五章/1', 'a67'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第五章/2',
                component: ComponentCreator('/docs/大模型浪潮/第五章/2', '72f'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第五章/3',
                component: ComponentCreator('/docs/大模型浪潮/第五章/3', '15a'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第五章/4',
                component: ComponentCreator('/docs/大模型浪潮/第五章/4', '147'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第五章/5',
                component: ComponentCreator('/docs/大模型浪潮/第五章/5', 'bef'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第五章/6',
                component: ComponentCreator('/docs/大模型浪潮/第五章/6', '3ac'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第五章/7',
                component: ComponentCreator('/docs/大模型浪潮/第五章/7', 'bda'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第六章/1',
                component: ComponentCreator('/docs/大模型浪潮/第六章/1', '56d'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第六章/2',
                component: ComponentCreator('/docs/大模型浪潮/第六章/2', 'b88'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第六章/3',
                component: ComponentCreator('/docs/大模型浪潮/第六章/3', '28a'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第六章/4',
                component: ComponentCreator('/docs/大模型浪潮/第六章/4', 'bc5'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第四章/1',
                component: ComponentCreator('/docs/大模型浪潮/第四章/1', '9a2'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第四章/2',
                component: ComponentCreator('/docs/大模型浪潮/第四章/2', 'aed'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第四章/3',
                component: ComponentCreator('/docs/大模型浪潮/第四章/3', 'd5b'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/大模型浪潮/第四章/4',
                component: ComponentCreator('/docs/大模型浪潮/第四章/4', '31e'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/客户说/',
                component: ComponentCreator('/docs/客户说/', 'b9b'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/客户说/1',
                component: ComponentCreator('/docs/客户说/1', '1aa'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/客户说/2',
                component: ComponentCreator('/docs/客户说/2', 'dea'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/客户说/3',
                component: ComponentCreator('/docs/客户说/3', '73d'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/客户说/4',
                component: ComponentCreator('/docs/客户说/4', 'ea4'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/客户说/5',
                component: ComponentCreator('/docs/客户说/5', '7f8'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/客户说/6',
                component: ComponentCreator('/docs/客户说/6', '339'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/客户说/7',
                component: ComponentCreator('/docs/客户说/7', 'afe'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/客户说/8',
                component: ComponentCreator('/docs/客户说/8', 'acb'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/小岛经济学/',
                component: ComponentCreator('/docs/小岛经济学/', 'b89'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/小岛经济学/十七章',
                component: ComponentCreator('/docs/小岛经济学/十七章', '1d2'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/小岛经济学/十三章',
                component: ComponentCreator('/docs/小岛经济学/十三章', '230'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/小岛经济学/十九章',
                component: ComponentCreator('/docs/小岛经济学/十九章', 'c2e'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/小岛经济学/十五章',
                component: ComponentCreator('/docs/小岛经济学/十五章', 'bf2'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/小岛经济学/十八章',
                component: ComponentCreator('/docs/小岛经济学/十八章', '516'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/小岛经济学/十六章',
                component: ComponentCreator('/docs/小岛经济学/十六章', '11f'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/小岛经济学/十四章',
                component: ComponentCreator('/docs/小岛经济学/十四章', '44a'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/小岛经济学/后记',
                component: ComponentCreator('/docs/小岛经济学/后记', 'd9b'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/小岛经济学/第一章',
                component: ComponentCreator('/docs/小岛经济学/第一章', '24e'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/小岛经济学/第七章',
                component: ComponentCreator('/docs/小岛经济学/第七章', '203'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/小岛经济学/第三章',
                component: ComponentCreator('/docs/小岛经济学/第三章', 'b23'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/小岛经济学/第九章',
                component: ComponentCreator('/docs/小岛经济学/第九章', '6b5'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/小岛经济学/第二章',
                component: ComponentCreator('/docs/小岛经济学/第二章', '0f0'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/小岛经济学/第五章',
                component: ComponentCreator('/docs/小岛经济学/第五章', '5cd'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/小岛经济学/第八章',
                component: ComponentCreator('/docs/小岛经济学/第八章', 'df7'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/小岛经济学/第六章',
                component: ComponentCreator('/docs/小岛经济学/第六章', 'b63'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/小岛经济学/第十一章',
                component: ComponentCreator('/docs/小岛经济学/第十一章', 'c64'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/小岛经济学/第十二章',
                component: ComponentCreator('/docs/小岛经济学/第十二章', '097'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/小岛经济学/第十章',
                component: ComponentCreator('/docs/小岛经济学/第十章', '7b4'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/小岛经济学/第四章',
                component: ComponentCreator('/docs/小岛经济学/第四章', '697'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/成瘾的深渊/',
                component: ComponentCreator('/docs/成瘾的深渊/', '996'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/成瘾的深渊/1',
                component: ComponentCreator('/docs/成瘾的深渊/1', 'a7c'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/成瘾的深渊/10',
                component: ComponentCreator('/docs/成瘾的深渊/10', '8be'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/成瘾的深渊/11',
                component: ComponentCreator('/docs/成瘾的深渊/11', '372'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/成瘾的深渊/2',
                component: ComponentCreator('/docs/成瘾的深渊/2', '871'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/成瘾的深渊/3',
                component: ComponentCreator('/docs/成瘾的深渊/3', '5e1'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/成瘾的深渊/4',
                component: ComponentCreator('/docs/成瘾的深渊/4', '900'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/成瘾的深渊/5',
                component: ComponentCreator('/docs/成瘾的深渊/5', 'e59'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/成瘾的深渊/6',
                component: ComponentCreator('/docs/成瘾的深渊/6', '24d'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/成瘾的深渊/7',
                component: ComponentCreator('/docs/成瘾的深渊/7', 'c6b'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/成瘾的深渊/8',
                component: ComponentCreator('/docs/成瘾的深渊/8', '25c'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/成瘾的深渊/9',
                component: ComponentCreator('/docs/成瘾的深渊/9', '1e3'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/我们为什么要睡觉/',
                component: ComponentCreator('/docs/我们为什么要睡觉/', 'd55'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/我们为什么要睡觉/1',
                component: ComponentCreator('/docs/我们为什么要睡觉/1', '688'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/我们为什么要睡觉/2',
                component: ComponentCreator('/docs/我们为什么要睡觉/2', '6a9'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/我们为什么要睡觉/3',
                component: ComponentCreator('/docs/我们为什么要睡觉/3', 'e5a'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/我们为什么要睡觉/4',
                component: ComponentCreator('/docs/我们为什么要睡觉/4', '58e'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/止损/',
                component: ComponentCreator('/docs/止损/', '3f4'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/止损/1',
                component: ComponentCreator('/docs/止损/1', '0c4'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/止损/10',
                component: ComponentCreator('/docs/止损/10', '576'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/止损/2',
                component: ComponentCreator('/docs/止损/2', '7c3'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/止损/3',
                component: ComponentCreator('/docs/止损/3', 'bb3'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/止损/4',
                component: ComponentCreator('/docs/止损/4', 'a2f'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/止损/5',
                component: ComponentCreator('/docs/止损/5', 'cea'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/止损/6',
                component: ComponentCreator('/docs/止损/6', '353'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/止损/7',
                component: ComponentCreator('/docs/止损/7', '208'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/止损/8',
                component: ComponentCreator('/docs/止损/8', 'ffb'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/止损/9',
                component: ComponentCreator('/docs/止损/9', '41f'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/泡沫逃生/',
                component: ComponentCreator('/docs/泡沫逃生/', '5c1'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/泡沫逃生/1',
                component: ComponentCreator('/docs/泡沫逃生/1', 'b98'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/泡沫逃生/2',
                component: ComponentCreator('/docs/泡沫逃生/2', 'a85'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/',
                component: ComponentCreator('/docs/营销心理战/', 'c36'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第一章/1',
                component: ComponentCreator('/docs/营销心理战/第一章/1', '89f'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第一章/2',
                component: ComponentCreator('/docs/营销心理战/第一章/2', '26b'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第一章/3',
                component: ComponentCreator('/docs/营销心理战/第一章/3', '4c8'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第一章/4',
                component: ComponentCreator('/docs/营销心理战/第一章/4', 'dcf'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第一章/5',
                component: ComponentCreator('/docs/营销心理战/第一章/5', 'cb2'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第一章/6',
                component: ComponentCreator('/docs/营销心理战/第一章/6', 'f6d'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第三章/1',
                component: ComponentCreator('/docs/营销心理战/第三章/1', 'd32'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第三章/2',
                component: ComponentCreator('/docs/营销心理战/第三章/2', 'ccb'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第三章/3',
                component: ComponentCreator('/docs/营销心理战/第三章/3', '1d4'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第三章/4',
                component: ComponentCreator('/docs/营销心理战/第三章/4', 'f10'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第三章/5',
                component: ComponentCreator('/docs/营销心理战/第三章/5', 'fa3'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第三章/6',
                component: ComponentCreator('/docs/营销心理战/第三章/6', '864'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第二章/1',
                component: ComponentCreator('/docs/营销心理战/第二章/1', '78e'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第二章/2',
                component: ComponentCreator('/docs/营销心理战/第二章/2', 'ab0'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第二章/3',
                component: ComponentCreator('/docs/营销心理战/第二章/3', 'c8d'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第二章/4',
                component: ComponentCreator('/docs/营销心理战/第二章/4', '9c4'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第二章/5',
                component: ComponentCreator('/docs/营销心理战/第二章/5', '2bf'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第二章/6',
                component: ComponentCreator('/docs/营销心理战/第二章/6', 'f30'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第五章/1',
                component: ComponentCreator('/docs/营销心理战/第五章/1', 'c26'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第五章/2',
                component: ComponentCreator('/docs/营销心理战/第五章/2', 'd79'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第五章/3',
                component: ComponentCreator('/docs/营销心理战/第五章/3', '205'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第五章/4',
                component: ComponentCreator('/docs/营销心理战/第五章/4', '1ff'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第五章/5',
                component: ComponentCreator('/docs/营销心理战/第五章/5', '1cc'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第五章/6',
                component: ComponentCreator('/docs/营销心理战/第五章/6', '72a'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第六章/1',
                component: ComponentCreator('/docs/营销心理战/第六章/1', 'fe5'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第六章/2',
                component: ComponentCreator('/docs/营销心理战/第六章/2', '0a1'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第六章/3',
                component: ComponentCreator('/docs/营销心理战/第六章/3', 'b4c'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第六章/4',
                component: ComponentCreator('/docs/营销心理战/第六章/4', '665'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第六章/5',
                component: ComponentCreator('/docs/营销心理战/第六章/5', 'df5'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第六章/6',
                component: ComponentCreator('/docs/营销心理战/第六章/6', 'd39'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第四章/1',
                component: ComponentCreator('/docs/营销心理战/第四章/1', '400'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第四章/2',
                component: ComponentCreator('/docs/营销心理战/第四章/2', '88b'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第四章/3',
                component: ComponentCreator('/docs/营销心理战/第四章/3', '7f3'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第四章/4',
                component: ComponentCreator('/docs/营销心理战/第四章/4', 'b7c'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第四章/5',
                component: ComponentCreator('/docs/营销心理战/第四章/5', '09c'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/营销心理战/第四章/6',
                component: ComponentCreator('/docs/营销心理战/第四章/6', '81b'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/革新男性气质/',
                component: ComponentCreator('/docs/革新男性气质/', '87d'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/革新男性气质/1',
                component: ComponentCreator('/docs/革新男性气质/1', '331'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/革新男性气质/10',
                component: ComponentCreator('/docs/革新男性气质/10', '666'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/革新男性气质/11',
                component: ComponentCreator('/docs/革新男性气质/11', '581'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/革新男性气质/12',
                component: ComponentCreator('/docs/革新男性气质/12', '4fc'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/革新男性气质/13',
                component: ComponentCreator('/docs/革新男性气质/13', '869'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/革新男性气质/14',
                component: ComponentCreator('/docs/革新男性气质/14', '584'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/革新男性气质/15',
                component: ComponentCreator('/docs/革新男性气质/15', 'd46'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/革新男性气质/2',
                component: ComponentCreator('/docs/革新男性气质/2', '50b'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/革新男性气质/3',
                component: ComponentCreator('/docs/革新男性气质/3', '7c5'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/革新男性气质/4',
                component: ComponentCreator('/docs/革新男性气质/4', '1f4'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/革新男性气质/5',
                component: ComponentCreator('/docs/革新男性气质/5', '324'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/革新男性气质/6',
                component: ComponentCreator('/docs/革新男性气质/6', '9c5'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/革新男性气质/7',
                component: ComponentCreator('/docs/革新男性气质/7', 'a14'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/革新男性气质/8',
                component: ComponentCreator('/docs/革新男性气质/8', '9c2'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/革新男性气质/9',
                component: ComponentCreator('/docs/革新男性气质/9', '115'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/鞋狗/',
                component: ComponentCreator('/docs/鞋狗/', '4f6'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/鞋狗/10',
                component: ComponentCreator('/docs/鞋狗/10', '426'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/鞋狗/11',
                component: ComponentCreator('/docs/鞋狗/11', 'c5a'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/鞋狗/12',
                component: ComponentCreator('/docs/鞋狗/12', '3a5'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/鞋狗/13',
                component: ComponentCreator('/docs/鞋狗/13', '4aa'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/鞋狗/14',
                component: ComponentCreator('/docs/鞋狗/14', '81f'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/鞋狗/15',
                component: ComponentCreator('/docs/鞋狗/15', '0a0'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/鞋狗/16',
                component: ComponentCreator('/docs/鞋狗/16', '1a5'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/鞋狗/17',
                component: ComponentCreator('/docs/鞋狗/17', 'ae4'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/鞋狗/18',
                component: ComponentCreator('/docs/鞋狗/18', '3fe'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/鞋狗/19',
                component: ComponentCreator('/docs/鞋狗/19', '308'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/鞋狗/2',
                component: ComponentCreator('/docs/鞋狗/2', '226'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/鞋狗/20',
                component: ComponentCreator('/docs/鞋狗/20', 'ccc'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/鞋狗/21',
                component: ComponentCreator('/docs/鞋狗/21', 'a5f'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/鞋狗/22',
                component: ComponentCreator('/docs/鞋狗/22', '660'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/鞋狗/3',
                component: ComponentCreator('/docs/鞋狗/3', 'dfa'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/鞋狗/4',
                component: ComponentCreator('/docs/鞋狗/4', 'abf'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/鞋狗/5',
                component: ComponentCreator('/docs/鞋狗/5', '1d6'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/鞋狗/6',
                component: ComponentCreator('/docs/鞋狗/6', '72b'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/鞋狗/7',
                component: ComponentCreator('/docs/鞋狗/7', 'f84'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/鞋狗/8',
                component: ComponentCreator('/docs/鞋狗/8', 'c04'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/鞋狗/9',
                component: ComponentCreator('/docs/鞋狗/9', '749'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/魔鬼经济学1/',
                component: ComponentCreator('/docs/魔鬼经济学1/', '99c'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/魔鬼经济学1/1',
                component: ComponentCreator('/docs/魔鬼经济学1/1', 'ce5'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/魔鬼经济学1/2',
                component: ComponentCreator('/docs/魔鬼经济学1/2', 'eda'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/魔鬼经济学1/3',
                component: ComponentCreator('/docs/魔鬼经济学1/3', '5aa'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/魔鬼经济学1/4',
                component: ComponentCreator('/docs/魔鬼经济学1/4', '5c3'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/docs/魔鬼经济学1/5',
                component: ComponentCreator('/docs/魔鬼经济学1/5', '659'),
                exact: true,
                sidebar: "bookSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ebook',
    component: ComponentCreator('/ebook', '422'),
    routes: [
      {
        path: '/ebook',
        component: ComponentCreator('/ebook', '14f'),
        routes: [
          {
            path: '/ebook',
            component: ComponentCreator('/ebook', '39c'),
            routes: [
              {
                path: '/ebook/ChatPDF',
                component: ComponentCreator('/ebook/ChatPDF', 'ade'),
                exact: true,
                sidebar: "ebookSidebar"
              },
              {
                path: '/ebook/Flourish',
                component: ComponentCreator('/ebook/Flourish', '433'),
                exact: true,
                sidebar: "ebookSidebar"
              },
              {
                path: '/ebook/intro',
                component: ComponentCreator('/ebook/intro', 'bad'),
                exact: true,
                sidebar: "ebookSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/terminology',
    component: ComponentCreator('/terminology', '07f'),
    routes: [
      {
        path: '/terminology',
        component: ComponentCreator('/terminology', '564'),
        routes: [
          {
            path: '/terminology',
            component: ComponentCreator('/terminology', '921'),
            routes: [
              {
                path: '/terminology/cryptology/',
                component: ComponentCreator('/terminology/cryptology/', '740'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/cryptology/AES',
                component: ComponentCreator('/terminology/cryptology/AES', '38c'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/cryptology/DES',
                component: ComponentCreator('/terminology/cryptology/DES', '919'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/cryptology/Enigma',
                component: ComponentCreator('/terminology/cryptology/Enigma', '98d'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/cryptology/一次性密码本',
                component: ComponentCreator('/terminology/cryptology/一次性密码本', '654'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/cryptology/伪随机数生成器',
                component: ComponentCreator('/terminology/cryptology/伪随机数生成器', '3f1'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/cryptology/凯撒密码',
                component: ComponentCreator('/terminology/cryptology/凯撒密码', 'bea'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/cryptology/分组算法',
                component: ComponentCreator('/terminology/cryptology/分组算法', '1cc'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/cryptology/哈希函数',
                component: ComponentCreator('/terminology/cryptology/哈希函数', '2cf'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/cryptology/密码与信息安全常识',
                component: ComponentCreator('/terminology/cryptology/密码与信息安全常识', 'a5e'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/cryptology/密钥, 对称密码, 非对称密码',
                component: ComponentCreator('/terminology/cryptology/密钥, 对称密码, 非对称密码', '704'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/cryptology/密钥空间',
                component: ComponentCreator('/terminology/cryptology/密钥空间', 'e50'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/cryptology/数字签名',
                component: ComponentCreator('/terminology/cryptology/数字签名', 'd00'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/cryptology/明文, 密文, 加密, 解密, 算法',
                component: ComponentCreator('/terminology/cryptology/明文, 密文, 加密, 解密, 算法', '9e9'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/cryptology/消息, 发送者, 接收者, 窃听者',
                component: ComponentCreator('/terminology/cryptology/消息, 发送者, 接收者, 窃听者', 'e64'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/cryptology/消息验证码',
                component: ComponentCreator('/terminology/cryptology/消息验证码', '2a2'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/cryptology/穷举搜索',
                component: ComponentCreator('/terminology/cryptology/穷举搜索', '796'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/cryptology/简单替换密码',
                component: ComponentCreator('/terminology/cryptology/简单替换密码', '444'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/cryptology/编码, 比特序列, 编码规则, 进制',
                component: ComponentCreator('/terminology/cryptology/编码, 比特序列, 编码规则, 进制', 'b66'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/cryptology/量子密码',
                component: ComponentCreator('/terminology/cryptology/量子密码', '4f2'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/cryptology/隐写术',
                component: ComponentCreator('/terminology/cryptology/隐写术', '1a5'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/econ/',
                component: ComponentCreator('/terminology/econ/', '4f7'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/econ/Commodity',
                component: ComponentCreator('/terminology/econ/Commodity', 'a2d'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/econ/ROI',
                component: ComponentCreator('/terminology/econ/ROI', '037'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/econ/期权',
                component: ComponentCreator('/terminology/econ/期权', '996'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/intro',
                component: ComponentCreator('/terminology/intro', 'c8a'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/product/',
                component: ComponentCreator('/terminology/product/', '5ea'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/product/SKU',
                component: ComponentCreator('/terminology/product/SKU', '60f'),
                exact: true,
                sidebar: "termSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
