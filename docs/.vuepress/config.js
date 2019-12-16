const Sidebar = require('./config.sidebar');

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
          { text: '笔记', link: '/docs/' },
          {
            text: '技术笔记',
            items: [
              { text: 'HTML', link: '/docs/HTML/' },
              { text: 'CSS', link: '/docs/CSS/' },
              { text: 'JavaScript', link: '/docs/JavaScript/' },
              { text: 'Vue', link: '/docs/Vue/' },
              { text: 'React', link: '/docs/React/' },
              { text: 'Angular', link: '/docs/Angular/' },
              { text: 'Node', link: '/docs/Node/' },
              { text: '其他', link: '/docs/Others/' },
            ],
          },
          { text: '关于我', link: 'http://144.34.173.6/' },
        ],
        sidebar: {
          '/docs/HTML/': Sidebar.getMenus('HTML'),
          '/docs/CSS/': Sidebar.getMenus('CSS'),
          '/docs/JavaScript/': Sidebar.getMenus('JavaScript'),
          '/docs/Vue/': Sidebar.getMenus('Vue'),
          '/docs/React/': Sidebar.getMenus('React'),
          '/docs/Angular/': Sidebar.getMenus('Angular'),
          '/docs/Node/': Sidebar.getMenus('Node'),
          '/docs/Others/': Sidebar.getMenus('其他'),
          '/docs/EnglishEssay/': Sidebar.getMenus('English Essay'),
          '/docs/': Sidebar.getMenus(),
        },
      },
    },
  },

  // 插件
  plugins: [['@vuepress/back-to-top', true]],
};
