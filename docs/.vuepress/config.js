const en = require('./config.en')
const zh_cn = require('./config.zh-CN')

module.exports = {
  // 端口， 默认8080
  port: 80,

  // 部署站点的基础路径
  base: '/blog/',

  // 
  description: '赖维健的博客',

  // 网站描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  head: [['link', { rel: 'icon', href: '/img/favicon.png' }]],

  // 仓库地址
  repo: 'https://github.com/lwj1426282929/vue-press-blog.git',

  // 缓存已访问过的页面内容，用于离线访问
  serviceWorker: true,

  // 选择语言
  locales: {
    '/': {
      lang: 'en-US',
      label: 'English',
    },
    '/zh-CN/': {
      lang: 'zh-CN',
      label: '简体中文',
    },
  },

  // 主题配置
  themeConfig: {
    sidebarDepth: 2,
    lastUpdated: '上次更新',
    locales: {
      '/': en,
      '/zh-CN/': zh_cn,
    },
  }
};
