module.exports = {
  selectText: 'Languages',
  lang: 'en-US',
  label: 'English',
  lastUpdated: 'Last Updated',
  nav: [{ text: 'home', link: '/' }, { text: 'blog', link: '/guide/' }],
  sidebar: {
    '/guide/': [
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
}