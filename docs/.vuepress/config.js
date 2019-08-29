const sidebar = require('./config/sidebar');
const nav = require('./config/nav');

module.exports = {
  port: 80,

  // 部署站点的基础路径
  // base: '/blog/',

  // 网站标题
  title: 'blog | 赖维健',

  description: '赖维健的博客',

  // 网站描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  head: [['link', { rel: 'icon', href: '/img/favicon.png' }]],

  // 仓库地址
  repo: 'https://github.com/lwj1426282929/vue-press-blog.git',

  // 缓存已访问过的页面内容，用于离线访问
  serviceWorker: true,

  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      label: 'English',
    },
    '/zh-CN/': {
      lang: 'zh-CN',
      label: '简体中文',
    },
  },

  themeConfig: {
    // 导航栏
    // nav,
    // 侧边栏
    // sidebar,
    sidebarDepth: 2,
    lastUpdated: '上次更新',
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        nav: [{ text: 'home', link: '/' }, { text: 'blog', link: '/guide/' }],
        sidebar: {
          '/guide/': [
            {
              title: 'Vue',
              collapsable: false,
              children: [
                ['/guide/vue/优化Vue项目.md', '优化Vue项目'],
                ['/guide/vue/Vue编码规范.md', 'Vue编码规范'],
              ],
            },
          ],
        },
      },
      '/zh-CN/': {
        selectText: '语言',
        label: '简体中文',
        editLinkText: '在GitHub上编辑此页',
        nav: [
          { text: '首页', link: '/zh-CN/' },
          { text: '博客', link: '/zh-CN/guide/' },
        ],
        sidebar: {
          '/zh-CN/guide/': [
            {
              title: 'Vue',
              collapsable: false,
              children: [
                ['/zh-CN/guide/vue/优化Vue项目.md', '优化Vue项目'],
                ['/zh-CN/guide/vue/Vue编码规范.md', 'Vue编码规范'],
              ],
            },
          ],
        },
      },
    },
  },

  // locales: {
  //   // 英文文档
  //   '/guide/': {
  //     lang: 'English',
  //     title: 'blog',
  //     description: '',
  //     nav: [{ text: 'home', link: '/' }, { text: 'blog', link: '/guide/' }],
  //     sidebar: {
  //       '/guide/': [
  //         {
  //           title: 'JavaScript',
  //           collapsable: false,
  //           children: [['/guide/js/js常用技巧.md', 'js常用技巧']],
  //         },
  //         {
  //           title: 'ES6',
  //           collapsable: false,
  //           children: [],
  //         },
  //       ],
  //     },
  //   },
  //   // 中文文档
  //   '/zh-CN/guide/': {
  //     lang: 'zh-CN',
  //     title: '博客',
  //     description: '',
  //     nav,
  //     sidebar,
  //   },
  // },

  // themeConfig: {
  //   sidebar,
  //   locales: {
  //     '/guide/': {
  //       selectText: 'Languages',
  //       label: 'English',
  //       editLinkText: 'Edit this page on GitHub',
  //       serviceWorker: {
  //         updatePopup: {
  //           message: 'New content is available.',
  //           buttonText: 'Refresh',
  //         },
  //       },
  //       nav: [
  //         { text: 'home', link: '/' },
  //         { text: 'blog', link: '/guide/' },
  //         {
  //           text: 'language',
  //           items: [
  //             { text: 'English', link: '/guide/' },
  //             { text: '简体中文', link: '/zh-CN/guide/' },
  //           ],
  //         },
  //         { text: 'GitHub', link: 'https://github.com/lwj1426282929' },
  //       ],
  //       sidebar: {
  //         '/guide/vue/': [
  //           {
  //             title: 'Vue',
  //             collapsable: false,
  //             children: [
  //               {
  //                 collapsable: false,
  //                 children: [['/guide/vue/优化Vue项目.md', '优化Vue项目']],
  //               },
  //               ['/guide/vue/Vue编码规范.md', 'Vue编码规范'],
  //             ],
  //           },
  //         ],
  //         '/guide/': [
  //           {
  //             title: 'JavaScript',
  //             collapsable: false,
  //             children: [['/guide/js/js常用技巧.md', 'js常用技巧']],
  //           },
  //           {
  //             title: 'ES6',
  //             collapsable: false,
  //             children: [],
  //           },
  //           {
  //             title: 'Vue',
  //             collapsable: false,
  //             children: [
  //               ['/guide/vue/优化Vue项目.md', '优化Vue项目'],
  //               ['/guide/vue/Vue编码规范.md', 'Vue编码规范'],
  //             ],
  //           },
  //           {
  //             title: 'Angular',
  //             collapsable: false,
  //             children: [],
  //           },
  //           {
  //             title: 'React',
  //             collapsable: false,
  //             children: [],
  //           },
  //           {
  //             title: 'TypeScript',
  //             collapsable: false,
  //             children: [],
  //           },
  //           {
  //             title: 'Node',
  //             collapsable: false,
  //             children: [],
  //           },
  //           {
  //             title: '其他',
  //             collapsable: false,
  //             children: [],
  //           },
  //         ],
  //       },
  //     },
  //     '/zh-CN/': {
  //       selectText: '选择语言',
  //       label: '英语',
  //       editLinkText: '在GitHub上编辑此页',
  //       nav: [
  //         { text: '首页', link: '/' },
  //         { text: '博客', link: '/zh-CN/guide/' },
  //         {
  //           text: '语言',
  //           items: [
  //             { text: 'English', link: '/guide/' },
  //             { text: '简体中文', link: '/zh-CN/guide/' },
  //           ],
  //         },
  //         { text: 'GitHub', link: 'https://github.com/lwj1426282929' },
  //       ],
  //       sidebar: {
  //         '/zh-CN/guide/vue/': [
  //           {
  //             title: 'Vue',
  //             collapsable: false,
  //             children: [
  //               {
  //                 collapsable: false,
  //                 children: [['/zh-CN/guide/vue/优化Vue项目.md', '优化Vue项目']],
  //               },
  //               ['/zh-CN/guide/vue/Vue编码规范.md', 'Vue编码规范'],
  //             ],
  //           },
  //         ],
  //         '/zh-CN/guide/': [
  //           {
  //             title: 'Vue',
  //             collapsable: false,
  //             children: [
  //               ['/zh-CN/guide/vue/优化Vue项目.md', '优化Vue项目'],
  //               ['/zh-CN/guide/vue/Vue编码规范.md', 'Vue编码规范'],
  //             ],
  //           },
  //         ],
  //       },
  //     },
  //   },
  // },
};
