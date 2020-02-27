const Menu = require('./config.menu');

module.exports = {
  port: 80, // 端口， 默认8080
  base: '/note/', // 部署站点的基础路径
  head: [['link', { rel: 'icon', href: '/logo.png' }]], // 网站描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  serviceWorker: true, // 离线访问
  locales: {
    '/': {
      title: '笔记',
    },
  },
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
          '/docs/': Menu.getContents(),
        },
      },
    },
  },
  plugins: [['@vuepress/back-to-top', true]], // 插件
};
