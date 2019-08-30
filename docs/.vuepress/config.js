module.exports = {
  // 端口， 默认8080
  port: 80,

  // 部署站点的基础路径
  base: '/blog/',

  // 网站描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  head: [['link', { rel: 'icon', href: '/logo.JPG' }]],

  // 仓库地址
  repo: 'https://github.com/lwj1426282929/vue-press-blog.git',

  // 多语言支持
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Blog Jay',
      description: 'blog site of Jay',
    },
    '/zh-CN/': {
      lang: 'zh-CN',
      title: '博客',
      description: '赖维健的个人博客',
    },
  },

  // 主题配置
  themeConfig: {
    editLinks: true,

    // 多语言支持
    locales: {
      '/': {
        selectText: 'Languages',
        lang: 'en-US',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [{ text: 'home', link: '/' }, { text: 'blog', link: '/guide/' }],
        sidebar: {
          '/zh-CN/guide/': [
            {
              title: 'Vue',
              collapsable: false,
              children: [['vue/optimizeVue', '123']],
            },
          ],
        },
      },
      '/zh-CN/': {
        selectText: '选择语言',
        lang: 'zh-CN',
        label: '简体中文',
        editLinkText: '在GitHub上编辑此页',
        nav: [
          { text: '首页', link: '/zh-CN/' },
          { text: '博客', link: '/zh-CN/guide/' },
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Vue',
              collapsable: false,
              children: [['vue/optimizeVue', '123']],
            },
          ],
        },
      },
    },
  },
};

function getGuideSidebar(groupA, groupB) {
  return [
    {
      title: 'Vue',
      collapsable: false,
      children: [['js/123', '123']],
    },
    {
      title: 'React',
      collapsable: false,
      children: [
        ['vue/optimizeVue', '优化Vue项目'],
        ['vue/Vue编码规范', 'Vue编码规范'],
      ],
    },
  ];
}
