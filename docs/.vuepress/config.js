const Menu = require('./config.menu');

module.exports = {
  // 端口， 默认8080
  port: 80,

  // 部署站点的基础路径
  base: '/note/',

  // 网站描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  head: [['link', { rel: 'icon', href: '/logo.png' }]],

  // 离线访问
  serviceWorker: true,

  locales: {
    '/': {
      title: '笔记',
    },
  },

  // 主题配置
  themeConfig: {
    sidebarDepth: 1, // 显示 h1, h2
    repo: 'https://github.com/lwj1426282929/vue-press-blog.git',
    locales: {
      '/': {
        selectText: '选择语言',
        lang: 'zh-CN',
        label: '简体中文',
        lastUpdated: '上次更新',
        nav: [
          { text: '首页', link: '/' },
          { text: '笔记', link: '/docs/' },
          { text: '技术笔记', items: Menu.getNavs() },
          { text: '关于我', link: 'http://144.34.173.6/' },
        ],
        sidebar: {
          '/docs/': Menu.getContents()
        }
      },
    },
  },

  // 插件
  plugins: [['@vuepress/back-to-top', true]],
};
