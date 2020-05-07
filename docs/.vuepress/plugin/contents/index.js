const path = require('path');
const Menu = require('../../config/config.menu');

module.exports = (options, ctx) => {
    return {
        extendPageData($page) {
            const path_ = $page.path.match(/^\/(\S*)\/$/);
            if (path_) {
                let pathStr = path_[0].substring(0, path_[0].length - 1)
                let contents = Menu.getContents('../../../docs' + decodeURI(pathStr));
                $page.contents = contents;
            }
        }
    };
};
