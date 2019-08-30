module.exports = {
  selectText: '选择语言',
  lang: 'zh-CN',
  label: '简体中文',
  editLinkText: '在GitHub上编辑此页',
  lastUpdated: '上次更新',
  nav: [
    { text: '首页', link: '/zh-CN/' },
    { text: '博客', link: '/zh-CN/guide/' },
  ],
  sidebar: {
    '/zh-CN/guide/': [
      {
        title: 'HTML & H5',
        collapsable: false,
        children: []
      },
      {
        title: 'CSS & CSS3',
        collapsable: false,
        children: []
      },
      {
        title: 'JavaScript',
        collapsable: false,
        children: []
      },
      {
        title: 'ES6',
        collapsable: false,
        children: []
      },
      {
        title: 'Vue',
        collapsable: false,
        children: [
          'vue/optimizeVue'
        ],
      },
      {
        title: 'Angular',
        collapsable: false,
        children: []
      },
      {
        title: 'React',
        collapsable: false,
        children: []
      },
      {
        title: 'Node',
        collapsable: false,
        children: []
      },
      {
        title: 'Git',
        collapsable: false,
        children: []
      },
      {
        title: '其他',
        collapsable: false,
        children: []
      },
    ],
  },
};
