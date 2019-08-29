const sidebar = require('./config/sidebar')
const nav = require('./config/nav')

module.exports = {
  port: 80,

  // 部署站点的基础路径
  base: '/blog/',

  // 网站标题
  title: 'blog | 赖维健',
  description: '赖维健的博客',

  // 网站描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
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
