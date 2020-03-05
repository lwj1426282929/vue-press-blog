const Menu = require('./config.menu');
var md = require('markdown-it')();

module.exports = {
    port: 80,
    // 部署站点的基础路径
    base: '/note/',
    // 网站描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        []
    ],
    // 离线访问
    serviceWorker: false,

    cache: false,
    locales: {
        '/': {
            title: '笔记',
        },
    },
    themeConfig: {
        sidebarDepth: 1, // 显示 h1, h2
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
                    { text: '关于我', link: 'http://144.34.173.6/' },
                ],
                sidebar: {
                    '/docs/': Menu.getContents(),
                },
            },
        },
    },
    plugins: [
        // 插件
        ['@vuepress/back-to-top', true],
        ['@vuepress/medium-zoom'],
        ['one-click-copy', { copyMessage: '复制代码成功' }],
        [
            'vuepress-plugin-container',
            {
                type: 'test',
                render: (tokens, idx) => {
                    const m = tokens[idx].info.trim().match(/^test\s*(.*)$/);
                    if (tokens[idx].nesting === 1) {
                        const description = m && m.length > 1 ? m[1] : '';
                        const description_ = description ? md.render(description) : ''
                        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
                        return `<test>
                                    <div slot="meta">${content}</div>
                                    <div>${description ? `<div>${md.render(description)}</div>` : ''}</div>
                                `
                    }
                    return '</test>';
                },
            },
        ],
    ],
};
