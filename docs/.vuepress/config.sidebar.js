let menus = [
  // {
  //   title: 'HTML & H5',
  //   collapsable: false,
  //   children: [],
  // },
  // {
  //   title: 'CSS & CSS3',
  //   collapsable: false,
  //   children: [],
  // },
  // {
  //   title: 'JavaScript',
  //   collapsable: false,
  //   children: [
  //     'JavaScript/common-skills',
  //   ],
  // },
  // {
  //   title: 'ES6',
  //   collapsable: false,
  //   children: [],
  // },
  {
    title: 'Vue',
    collapsable: false,
    children: [
      'code-style',
    ],
  },
  // {
  //   title: 'Angular',
  //   collapsable: false,
  //   children: [],
  // },
  // {
  //   title: 'React',
  //   collapsable: false,
  //   children: [],
  // },
  // {
  //   title: 'Node',
  //   collapsable: false,
  //   children: [],
  // },
  // {
  //   title: 'Git',
  //   collapsable: false,
  //   children: [],
  // },
  // {
  //   title: 'Other',
  //   collapsable: false,
  //   children: [
  //     'Other/eslint-config',
  //     'Other/vscode-plugin'
  //   ],
  // },
];

class Sidebar {
  getMenus(name) {
    if (name) {
      let menu = menus.find(item => {
        return item.title === name;
      });
      return [menu];
    }

    let menus_ = menus.map(menu => {
      let children = menu.children.map(child => {
        return child = menu.title + '/' + child
      })

      return Object.assign({}, menu, { children })
    })

    return menus_;
  }
}

module.exports = new Sidebar();
