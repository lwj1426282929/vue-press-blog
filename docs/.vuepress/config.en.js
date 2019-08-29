module.exports = {
  selectText: 'Languages',
  lang: 'en-US',
  label: 'English',
  editLinkText: 'Edit this page on GitHub',
  lastUpdated: 'Last Updated',
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
      {
        title: 'React',
        collapsable: false,
        children: [
          ['/guide/vue/优化Vue项目.md', '优化Vue项目'],
          ['/guide/vue/Vue编码规范.md', 'Vue编码规范'],
        ],
      }
    ],
  },
};
