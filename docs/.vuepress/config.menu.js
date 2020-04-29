const fs = require('fs');
const path = require('path');
class Menu {
    // 动态生成目录树(含完整路径)
    getContents(path_ = '../docs') {
        const findFilesByPath = (path_, content = []) => {
            let files = fs.readdirSync(path.join(__dirname, path_));

            // 排序
            files.sort((a, b) => {
                let subPath_a = path_ + '/' + a;
                let subPath_b = path_ + '/' + b;
                let stat_a = fs.lstatSync(path.join(__dirname, subPath_a));
                let stat_b = fs.lstatSync(path.join(__dirname, subPath_b));

                if(!(stat_a.isDirectory() ^ stat_b.isDirectory())) {
                    let m = a.split('_')[0]
                    let n = b.split('_')[0]
                    return m - n
                }

                return stat_a.isDirectory() - stat_b.isDirectory()
            });

            // 遍历文件路径
            files.forEach((file) => {
                let subPath = path_ + '/' + file
                let stat = fs.lstatSync(path.join(__dirname, subPath))
                let isDirectory = stat.isDirectory()
                if (isDirectory) {
                    if (file !== 'img') {
                        let children = findFilesByPath(subPath)
                        content.push({
                            title: file,
                            children,
                            _path: subPath.replace('../docs/', ''),
                        });
                    }
                } else if (file !== 'README.md') {
                    content.push(subPath.replace('../docs/', ''));
                }
            });

            return content;
        };

        return findFilesByPath(path_);
    }

    // 动态生成Nav
    getNavs() {
        let navs = []
        let contents = this.getContents()
        contents.forEach((content) => {
            navs.push({
                text: content.title,
                link: '/docs/' + content._path + '/',
            })
        })

        return navs
    }
}

module.exports = new Menu();
