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
    component: ComponentCreator('/blog', '450'),
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
    path: '/blog/authors/kejia',
    component: ComponentCreator('/blog/authors/kejia', 'fa1'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '4d4'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'b97'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f9d'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '114'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'cb5'),
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ebook',
    component: ComponentCreator('/ebook', '22c'),
    routes: [
      {
        path: '/ebook',
        component: ComponentCreator('/ebook', 'f57'),
        routes: [
          {
            path: '/ebook',
            component: ComponentCreator('/ebook', '946'),
            routes: [
              {
                path: '/ebook/AI应用/ChatPDF',
                component: ComponentCreator('/ebook/AI应用/ChatPDF', 'df9'),
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
    component: ComponentCreator('/terminology', '4ab'),
    routes: [
      {
        path: '/terminology',
        component: ComponentCreator('/terminology', '4ef'),
        routes: [
          {
            path: '/terminology',
            component: ComponentCreator('/terminology', '230'),
            routes: [
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
