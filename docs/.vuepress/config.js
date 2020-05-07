const head = require('./config/config.head');
const themeConfig = require('./config/config.theme');
const plugins = require('./config/config.plugin');

module.exports = {
    port: 80,
    base: '/note/',
    head,
    serviceWorker: true,
    cache: true,
    locales: {
        '/': {
            title: '笔记',
        },
    },
    themeConfig,
    plugins,
};
