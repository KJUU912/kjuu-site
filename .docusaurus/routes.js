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
    path: '/econ/qi-quan',
    component: ComponentCreator('/econ/qi-quan', 'd31'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b23'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '928'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '74b'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', 'b24'),
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
                path: '/docs/小岛经济学/',
                component: ComponentCreator('/docs/小岛经济学/', 'b89'),
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
                path: '/docs/小岛经济学/第二章',
                component: ComponentCreator('/docs/小岛经济学/第二章', '0f0'),
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
                path: '/docs/小岛经济学/第六章',
                component: ComponentCreator('/docs/小岛经济学/第六章', 'b63'),
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
                path: '/docs/小岛经济学/第十二章',
                component: ComponentCreator('/docs/小岛经济学/第十二章', '097'),
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
                path: '/docs/小岛经济学/第五章',
                component: ComponentCreator('/docs/小岛经济学/第五章', '5cd'),
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
                path: '/docs/小岛经济学/后记',
                component: ComponentCreator('/docs/小岛经济学/后记', 'd9b'),
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
                path: '/docs/小岛经济学/十九章',
                component: ComponentCreator('/docs/小岛经济学/十九章', 'c2e'),
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
                path: '/docs/小岛经济学/十四章',
                component: ComponentCreator('/docs/小岛经济学/十四章', '44a'),
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
                path: '/docs/营销心理战/',
                component: ComponentCreator('/docs/营销心理战/', 'c36'),
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ebook',
    component: ComponentCreator('/ebook', '4e2'),
    routes: [
      {
        path: '/ebook',
        component: ComponentCreator('/ebook', 'b48'),
        routes: [
          {
            path: '/ebook',
            component: ComponentCreator('/ebook', '1ff'),
            routes: [
              {
                path: '/ebook/模版+素材/word模版',
                component: ComponentCreator('/ebook/模版+素材/word模版', 'b30'),
                exact: true,
                sidebar: "ebookSidebar"
              },
              {
                path: '/ebook/Adobe Illustrator/画曲线的三种方法',
                component: ComponentCreator('/ebook/Adobe Illustrator/画曲线的三种方法', 'e0f'),
                exact: true,
                sidebar: "ebookSidebar"
              },
              {
                path: '/ebook/Adobe Illustrator/临摹线条图示例',
                component: ComponentCreator('/ebook/Adobe Illustrator/临摹线条图示例', '281'),
                exact: true,
                sidebar: "ebookSidebar"
              },
              {
                path: '/ebook/Adobe Illustrator/图标转矢量图',
                component: ComponentCreator('/ebook/Adobe Illustrator/图标转矢量图', '84d'),
                exact: true,
                sidebar: "ebookSidebar"
              },
              {
                path: '/ebook/Adobe Illustrator/图像上色',
                component: ComponentCreator('/ebook/Adobe Illustrator/图像上色', '265'),
                exact: true,
                sidebar: "ebookSidebar"
              },
              {
                path: '/ebook/Affinity Designer 2/临摹线条图示例',
                component: ComponentCreator('/ebook/Affinity Designer 2/临摹线条图示例', 'f75'),
                exact: true,
                sidebar: "ebookSidebar"
              },
              {
                path: '/ebook/Affinity Designer 2/图像上色',
                component: ComponentCreator('/ebook/Affinity Designer 2/图像上色', 'bdc'),
                exact: true,
                sidebar: "ebookSidebar"
              },
              {
                path: '/ebook/AI应用/ChatPDF',
                component: ComponentCreator('/ebook/AI应用/ChatPDF', 'df9'),
                exact: true,
                sidebar: "ebookSidebar"
              },
              {
                path: '/ebook/category/模版素材',
                component: ComponentCreator('/ebook/category/模版素材', '31e'),
                exact: true,
                sidebar: "ebookSidebar"
              },
              {
                path: '/ebook/category/adobe-illustrator-学习笔记',
                component: ComponentCreator('/ebook/category/adobe-illustrator-学习笔记', 'e9a'),
                exact: true,
                sidebar: "ebookSidebar"
              },
              {
                path: '/ebook/category/affinity-designer-2-学习笔记',
                component: ComponentCreator('/ebook/category/affinity-designer-2-学习笔记', '1e7'),
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
    component: ComponentCreator('/terminology', 'eb9'),
    routes: [
      {
        path: '/terminology',
        component: ComponentCreator('/terminology', 'cfb'),
        routes: [
          {
            path: '/terminology',
            component: ComponentCreator('/terminology', '756'),
            routes: [
              {
                path: '/terminology/econ/',
                component: ComponentCreator('/terminology/econ/', '4f7'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/econ/期权',
                component: ComponentCreator('/terminology/econ/期权', '0f3'),
                exact: true,
                sidebar: "termSidebar"
              },
              {
                path: '/terminology/econ/债券',
                component: ComponentCreator('/terminology/econ/债券', 'd77'),
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
