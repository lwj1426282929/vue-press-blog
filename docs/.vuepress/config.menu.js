const fs = require('fs');
const path = require('path');

class Menu {
  // 动态生成目录树(含完整路径)
  getContents(path_ = '../docs') {
    const findFilesByPath = (path_, content = []) => {
      let files = fs.readdirSync(path.join(__dirname, path_));
      files.forEach(file => {
        let subPath = path_ + '/' + file;
        let stat = fs.lstatSync(path.join(__dirname, subPath));
        let isDirectory = stat.isDirectory();
        if (isDirectory) {
          let children = findFilesByPath(subPath);
          content.push({
            title: file,
            children,
            _path: subPath.replace('../docs/', ''),
          });
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
    let contents = this.getContents();
    let navs = [];
    contents.forEach(content => {
      navs.push({ text: content.title, link: '/docs/' + content._path + '/' });
    });
    return navs;
  }
}

module.exports = new Menu();
