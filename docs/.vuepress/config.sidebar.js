let menus = [
  {
    title: 'CSS',
    collapsable: false,
    children: [
      'specification',
      'html-style'
    ],
  },
  {
    title: 'Vue',
    collapsable: false,
    children: [
      'code-style',
    ],
  },
  {
    title: 'Node',
    collapsable: false,
    children: [
      'install',
      'verdaccio',
      'commands',
      'problems',
      'publish',
      'packages'
    ],
  },
  {
    title: 'Others',
    collapsable: false,
    children: [
      'git-commands',
    ],
  }
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
