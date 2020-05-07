const Menu = require('./config.menu');

// console.log(Menu.getContents())

module.exports = {
    // 显示 h1, h2
    sidebarDepth: 2,
    // 关联git仓库
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
                { text: '技术笔记', items: Menu.getNavs() },
                { text: '关于我', link: 'https://laiweijian.com' },
            ],
            sidebar: {
                '/docs/': Menu.getContents(),
            },
        },
    },
};
