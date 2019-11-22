let menus = [
  {
    title: 'HTML',
    children: [],
  },
  {
    title: 'CSS',
    children: [
      // 'specification',
      //  'html-style'
    ],
  },
  {
    title: 'JavaScript',
    children: [
      // 'array'
    ],
  },
  {
    title: 'Vue',
    children: [
      // 'code-style'
    ],
  },
  {
    title: 'React',
    children: [],
  },
  {
    title: 'Angular',
    children: [],
  },
  {
    title: 'Node',
    children: [
      'install',
      'commands',
      'publish',
      'verdaccio',
      'problems',
      'packages',
    ],
  },
  {
    title: 'Others',
    children: [
      // 'git-commands'
    ],
  },
];

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
        return (child = menu.title + '/' + child);
      });

      return Object.assign({}, menu, { children });
    });

    return menus_;
  }
}

module.exports = new Sidebar();
