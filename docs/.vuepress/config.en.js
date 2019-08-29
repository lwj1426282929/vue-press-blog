module.exports = {
  selectText: 'Languages',
  editLinkText: 'Edit this page on GitHub',
  nav: [{ text: 'home', link: '/' }, { text: 'blog', link: '/guide/' }],
  sidebar: {
    '/guide/': [
      {
        title: 'Vue',
        collapsable: false,
        children: [
          ['/guide/vue/优化Vue项目.md', '优化Vue项目'],
          ['/guide/vue/Vue编码规范.md', 'Vue编码规范'],
        ],
      },
    ],
  },
};
