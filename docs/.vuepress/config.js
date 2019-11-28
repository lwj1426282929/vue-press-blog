const Sidebar = require('./config.sidebar');

module.exports = {
  // 端口， 默认8080
  port: 80,

  // 部署站点的基础路径
  base: '/note/',

  // 网站描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  head: [['link', { rel: 'icon', href: '/logo.JPG' }]],

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
          { text: '笔记', link: '/guide/' },
          {
            text: '技术笔记',
            items: [
              { text: 'HTML', link: '/guide/HTML/' },
              { text: 'CSS', link: '/guide/CSS/' },
              { text: 'JavaScript', link: '/guide/JavaScript/' },
              { text: 'Vue', link: '/guide/Vue/' },
              { text: 'React', link: '/guide/React/' },
              { text: 'Angular', link: '/guide/Angular/' },
              { text: 'Node', link: '/guide/Node/' },
              { text: '其他', link: '/guide/Others/' },
            ],
          },
          { text: '关于我', link: 'http://144.34.173.6/' },
        ],
        sidebar: {
          '/guide/HTML/': Sidebar.getMenus('HTML'),
          '/guide/CSS/': Sidebar.getMenus('CSS'),
          '/guide/JavaScript/': Sidebar.getMenus('JavaScript'),
          '/guide/Vue/': Sidebar.getMenus('Vue'),
          '/guide/React/': Sidebar.getMenus('React'),
          '/guide/Angular/': Sidebar.getMenus('Angular'),
          '/guide/Node/': Sidebar.getMenus('Node'),
          '/guide/Others/': Sidebar.getMenus('其他'),
          '/guide/English-essay/': Sidebar.getMenus('English Essay'),
          '/guide/': Sidebar.getMenus(),
        },
      },
    },
  },

  // 插件
  plugins: [['@vuepress/back-to-top', true]],
};
