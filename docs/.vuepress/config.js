const sidebar = require('./js/sidebar')
const nav = require('./js/nav')

module.exports = {
  port: 80,
  base: '/blog/',
  title: '个人主页',
  description: '赖维健的博客',
  head: [['link', { rel: 'icon', href: '/img/favicon.png' }]],

  // 仓库地址
  repo: 'https://github.com/lwj1426282929/vue-press-blog.git',

  // 缓存已访问过的页面内容，用于离线访问
  serviceWorker: true,

  themeConfig: {
    // 导航栏
    nav,
    // 侧边栏
    sidebar,
    sidebarDepth: 2,
  },
};
