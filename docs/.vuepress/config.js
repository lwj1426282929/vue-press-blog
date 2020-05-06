const Menu = require('./config.menu');
const md = require('markdown-it')();
const CodeDocPlugin = require('./plugin/demo-code');
const contents = require('./plugin/contents')

module.exports = {
    port: 80,
    base: '/note/', // 部署站点的基础路径
    // 网站描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        [
            'meta',
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        ],
        [
            'link',
            {
                rel: 'apple-touch-icon',
                href: '/icons/apple-touch-icon-152x152.png',
            },
        ],
        [
            'link',
            {
                rel: 'mask-icon',
                href: '/icons/safari-pinned-tab.svg',
                color: '#3eaf7c',
            },
        ],
        [
            'meta',
            {
                name: 'msapplication-TileImage',
                content: '/icons/msapplication-icon-144x144.png',
            },
        ],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ],
    serviceWorker: true, // 离线访问
    cache: true,
    locales: {
        '/': {
            title: '笔记',
        },
    },
    themeConfig: {
        sidebarDepth: 2, // 显示 h1, h2
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
        globalLayout: './components/Layout.vue',
    },
    // 插件
    plugins: [
        // pwa
        ['@vuepress/pwa'],
        // 返回顶部
        ['@vuepress/back-to-top', true],
        // 预览图片
        ['@vuepress/medium-zoom'],
        [CodeDocPlugin, {}],
        [contents],
        // 数学公式
        ['@codeciting/vuepress-plugin-math'],
        // 复制代码
        [
            'one-click-copy',
            {
                copySelector: [
                    'div[class*="language-"] pre',
                    'div[class*="aside-code"] aside',
                    'div[class*="code-block__inner-code"]',
                    '.copy-container'
                ],
                copyMessage: '复制成功',
                duration: 1000
            },
        ],
        // 自定义容器
        [
            'container',
            {
                type: 'message',
                render: (tokens, idx) => {
                    const m = tokens[idx].info.trim().match(/^message\s*(.*)$/);
                    if (tokens[idx].nesting === 1) {
                        const description = m && m.length > 1 ? m[1] : '';
                        const borderColor =
                            description.split(' ')[0] || '#1989fa';
                        const title = description.split(' ')[1] || '';
                        const content =
                            tokens[idx + 1].type === 'fence'
                                ? tokens[idx + 1].content
                                : '';
                        return `<div class="custom-block tip" style="border-color: ${borderColor};">
                                    ${
                                        title
                                            ? `<p class="custom-block-title">${title}</p>`
                                            : ''
                                    }
                                    <p>${content}</p>
                                `;
                    }
                    return '</div>';
                },
            },
        ],
    ],
};
