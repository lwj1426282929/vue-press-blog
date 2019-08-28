module.exports = {
  base: '/blog/',
  title: '个人主页', 
  description: '赖维健的博客',
  head: [
      ['link', { rel: 'icon', href: '/img/favicon.png' }]
  ],

  repo:'https://github.com/lwj1426282929/vue-press-blog.git'

  /* 缓存已访问过的页面内容，用于离线访问 */
  serviceWorker: true,
  

  themeConfig : {
    nav : [
        { text: '个人主页', link: 'https://www.baidu.com' },
        { text: '接口字段定义', link: '/api' },
        { text: '附录：错误码', link: '/error' },
        { text: '错误码', link: '/error' },
    ],
    sidebar: {
      '/': [
        "/", //指的是根目录的md文件 也就是 README.md 里面的内容
         "apiword", //  根目录创建 apiword.md文件
         "error" //根目录创建 error.md文件
      ]
    },
    sidebarDepth : 2
  }
}