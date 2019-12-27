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
      '常用的 JS 技巧',
      'JavaScript 数据类型之Array'
    ],
  },
  {
    title: 'Vue',
    children: [
        'v-if 与 v-show 的区别'
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
      'Linux 下安装 Node.js',
      'npm 常用命令',
      'npm 发布属于自己的依赖包',
      'npm 私库搭建',
      'npm 常见问题',
      '好用的 npm 依赖包',
    ],
  },
  {
    title: '其他',
    children: [
      'Eslint 常用配置',
      'Markdown代码块支持高亮的语言',
      '好用的 vscode 插件',
      'iOS webview加载H5页面点击2次会上移问题',
      '常用的正则表达式',
      '【ElementUI】日期选择器时间选择范围限制'
    ],
  },
//   {
//     title: 'English Essay',
//     children: [
//       'essay-1',
//       'essay-2',
//       'essay-3',
//       'essay-4',
//       'essay-5',
//       'essay-6',
//       'essay-7',
//       'essay-8',
//       'essay-9',
//     ],
//   },
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
