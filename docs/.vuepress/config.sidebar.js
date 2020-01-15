let menus = [
  {
    title: 'HTML',
    children: [
      'meta',
      'a'
    ],
  },
  {
    title: 'CSS',
    children: [],
  },
  {
    title: 'JavaScript',
    children: [
      '常用的JS技巧',
      'JavaScript数据类型之Array',
      '混合开发之JSBridge的JS封装',
      '混合开发之解决iOS-webview加载H5页面点击2次会上移问题',
      '移动开发之解决click事件延迟300ms问题'
    ],
  },
  {
    title: 'Vue',
    children: [
        'v-if与v-show的区别'
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
      'Linux下安装Node.js',
      'npm常用命令',
      'npm发布属于自己的依赖包',
      'npm私库搭建',
      'npm常见问题',
      '好用的npm依赖包',
    ],
  },
  {
    title: '其他',
    children: [
      'Eslint常用配置',
      'Markdown代码块支持高亮的语言',
      '常用的正则表达式',
      'ElementUI--日期选择器时间选择范围限制',
      '工具篇之Chrome插件',
      '工具篇之VS Code插件'
    ],
  },
  // {
  //   title: 'English Essay',
  //   children: [
  //     'essay-1',
  //     'essay-2',
  //     'essay-3',
  //     'essay-4',
  //     'essay-5',
  //     'essay-6',
  //     'essay-7',
  //     'essay-8',
  //     'essay-9',
  //   ],
  // },
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
        return (child =  menu.title === '其他' ? 'Others'.replace(' ', '') + '/' + child : menu.title.replace(' ', '') + '/' + child);
      });

      return Object.assign({}, menu, { children });
    });

    return menus_;
  }
}

module.exports = new Sidebar();
