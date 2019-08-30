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
    // 多语言支持
    locales: {
      '/': require('./config.en'),
      '/zh-CN/': require('./config.zh-CN')
    },
  },
};
