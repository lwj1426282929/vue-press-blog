let menus = [
  {
    title: 'HTML',
    children: [
      'meta',
      'anchor'
    ],
  },
  {
    title: 'CSS',
    children: [],
  },
  {
    title: 'JavaScript',
    children: [],
  },
  {
    title: 'Vue',
    children: [],
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
    title: '其他',
    children: [],
  },
  {
    title: 'English Essay',
    children: [
      'essay-1',
      'essay-2',
      'essay-3',
      'essay-4',
      'essay-5',
      'essay-6',
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
        return (child = menu.title.replace(' ', '') + '/' + child);
      });

      return Object.assign({}, menu, { children });
    });

    return menus_;
  }
}

module.exports = new Sidebar();
