const menus = [
  {
    title: 'HTML & H5',
    collapsable: false,
    children: [],
  },
  {
    title: 'CSS & CSS3',
    collapsable: false,
    children: [],
  },
  {
    title: 'JavaScript',
    collapsable: false,
    children: [],
  },
  {
    title: 'ES6',
    collapsable: false,
    children: [],
  },
  {
    title: 'Vue',
    collapsable: false,
    children: [
      'Vue/encoding-specification'
    ],
  },
  {
    title: 'Angular',
    collapsable: false,
    children: [],
  },
  {
    title: 'React',
    collapsable: false,
    children: [],
  },
  {
    title: 'Node',
    collapsable: false,
    children: [],
  },
  {
    title: 'Git',
    collapsable: false,
    children: [],
  },
  {
    title: 'Others',
    collapsable: false,
    children: [],
  },
];

class Sidebar {
  getMenus(name) {
    if (name) {
      let menu = menus.find(item => {
        return item.title === name;
      });
      let children = menu.children.map(item => {
        return item.replace(name + '/', '')
      });
      return [{ ...menu, children }];
    }
    return menus;
  }
}

module.exports = new Sidebar();
