const fs = require('fs');
const path = require('path');

const getContents = path_ => {
  let contents = [];
  let files = fs.readdirSync(path.join(__dirname, path_));
  files.forEach(item => {
    if(item !== 'README.md') {
      let children = [];
      let files_ = fs.readdirSync(path.join(__dirname, path_ + '/' + item));
      files_.forEach(file => {
        if(file !== 'README.md') {
          children.push(file.replace('.md', ''));
        }
      });
      contents.push({ title: item, children });
    }
  });
  return contents;
};

let menus = getContents('../docs');

class Sidebar {
  getMenus(name) {
    if (name) {
      let item = menus.find(item => {
        return item.title === name;
      });
      let menu = Object.assign({}, item, { collapsable: false });
      return [menu];
    }

    let menus_ = menus.map(menu => {
      let children = menu.children.map(child => {
        return (child =
          menu.title === '其他'
            ? 'Others'.replace(' ', '') + '/' + child
            : menu.title.replace(' ', '') + '/' + child);
      });

      return Object.assign({}, menu, { children });
    });

    return menus_;
  }
}

module.exports = new Sidebar();
