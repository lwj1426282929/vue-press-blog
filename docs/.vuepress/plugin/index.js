const path = require('path');
const Menu = require('../config.menu');

module.exports = (options, ctx) => {
    return {
        clientRootMixin: path.resolve(__dirname, './mixin.js'),

        extendPageData($page) {
            let path_ = $page.path.match(/\/(\S*)\//);
            if (path_) {
                console.log(decodeURI(path_[0]))
                let contents = Menu.getContents('../../docs' + decodeURI(path_[0]));
                $page.contents = contents;
            }
        }
    };
};
