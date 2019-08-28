module.exports = {
  title: '个人主页', 
  description: '赖维健的博客',
  head: [
      ['link', { rel: 'icon', href: '/img/favicon.png' }]
  ],
  themeConfig : {
    nav : [
        { text: '接口定义', link: '/apiword' },
        { text: '接口字段定义', link: '/api' },
        { text: '附录：错误码', link: '/error' }
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