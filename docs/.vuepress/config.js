const Sidebar = require('./config.sidebar');

module.exports = {
  // 端口， 默认8080
  port: 80,

  // 部署站点的基础路径
  base: '/blog/',

  // 网站描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  head: [['link', { rel: 'icon', href: '/logo.JPG' }]],

  // 仓库地址
  repo: 'https://github.com/lwj1426282929/vue-press-blog.git',

  // 离线访问
  serviceWorker: true,

  // 多语言支持
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '博客',
      description: '赖维健的个人博客',
    },
    '/en-US/': {
      lang: 'en-US',
      title: 'Blog Jay',
      description: 'blog site of Jay',
    },
  },

  // 主题配置
  themeConfig: {
    sidebarDepth: 2, // 显示 h1, h2, h3
    repo: 'https://github.com/lwj1426282929/vue-press-blog.git',
    locales: {
      '/': {
        selectText: '选择语言',
        lang: 'zh-CN',
        label: '简体中文',
        lastUpdated: '上次更新',
        nav: [
          { text: '首页', link: '/' },
          { text: '博客', link: '/guide/' },
        ],
        sidebar: {
          '/guide/HTML/': Sidebar.getMenus('HTML'),
          '/guide/CSS/': Sidebar.getMenus('CSS'),
          '/guide/JavaScript/': Sidebar.getMenus('JavaScript'),
          '/guide/Vue/': Sidebar.getMenus('Vue'),
          '/guide/React/': Sidebar.getMenus('React'),
          '/guide/Angular/': Sidebar.getMenus('Angular'),
          '/guide/Node/': Sidebar.getMenus('Node'),
          '/guide/Others/': Sidebar.getMenus('Others'),
          '/guide/': Sidebar.getMenus(),
        },
      },
      '/en-US/': {
        selectText: 'Languages',
        lang: 'en-US',
        label: 'English',
        lastUpdated: 'Last Updated',
        nav: [
          { text: 'home', link: '/en-US/' },
          { text: 'blog', link: '/en-US/guide/' },
        ],
        sidebar: {
          '/en-US/guide/HTML/': Sidebar.getMenus('HTML'),
          '/en-US/guide/CSS/': Sidebar.getMenus('CSS'),
          '/en-US/guide/JavaScript/': Sidebar.getMenus('JavaScript'),
          '/en-US/guide/Vue/': Sidebar.getMenus('Vue'),
          '/en-US/guide/React/': Sidebar.getMenus('React'),
          '/en-US/guide/Angular/': Sidebar.getMenus('Angular'),
          '/en-US/guide/Node/': Sidebar.getMenus('Node'),
          '/en-US/guide/Others/': Sidebar.getMenus('Others'),
          '/en-US/guide/': Sidebar.getMenus(),
        },
      },
    },
  },

  // 插件
  plugins: [['@vuepress/back-to-top', true]],
};
