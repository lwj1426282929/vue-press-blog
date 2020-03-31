const Menu = require('./config.menu');

module.exports = {
    port: 80,
    base: '/note/', // 部署站点的基础路径
    // 网站描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
    head: [['link', { rel: 'icon', href: '/logo.png' }], []],
    serviceWorker: false, // 离线访问
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
    // 插件
    plugins: [
        // 返回顶部
        ['@vuepress/back-to-top', true],
        // 预览图片
        ['@vuepress/medium-zoom'],
        // 复制代码
        ['one-click-copy', { copyMessage: '复制代码成功' }],
        // 数学公式
        ['@codeciting/vuepress-plugin-math'],
        // 自定义demo-code容器
        [
            'container',
            {
                type: 'demo',
                render: (tokens, idx) => {
                    const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
                    if (tokens[idx].nesting === 1) {
                        const description = m && m.length > 1 ? m[1] : '';
                        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
                        return `<demo-code>
                                    <div slot="meta">${content}</div>
                                    ${ description ? `<div class="description">${ md.render(description) }</div>` : '' }
                                `;
                    }
                    return '</demo-code>';
                },
            },
        ]
    ],
};
