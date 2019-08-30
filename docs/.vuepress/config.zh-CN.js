module.exports = {
  selectText: '选择语言',
  lang: 'zh-CN',
  label: '简体中文',
  editLinkText: '在GitHub上编辑此页',
  lastUpdated: '上次更新',
  repo: 'https://github.com/lwj1426282929/vue-press-blog.git',

    editLinks: true,
  nav: [
    { text: '首页', link: '/zh-CN/' },
    { text: '博客', link: '/zh-CN/guide/' },
  ],
  sidebar: {
    '/zh-CN/guide/': [
      {
        title: 'Vue',
        collapsable: false,
        children: [
          'vue/optimizeVue',
          'vue/optimizeVue copy'
        ],
      },
    ],
  },
};
