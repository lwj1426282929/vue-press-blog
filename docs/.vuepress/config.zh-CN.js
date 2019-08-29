module.exports = {
  title: '博客',
  selectText: '语言',
  label: '简体中文',
  editLinkText: '在GitHub上编辑此页',
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
          ['/zh-CN/guide/vue/优化Vue项目.md', '优化Vue项目'],
          ['/zh-CN/guide/vue/Vue编码规范.md', 'Vue编码规范'],
        ],
      },
    ],
  },
};
