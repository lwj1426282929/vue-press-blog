# Blog

个人文章分享，采用 <code>vuepress</code>。

## 项目结构

```
.
├─ docs                 # markdown文件以及配置
│  ├─ README.md
│  └─ .vuepress         # 站点相关文件
│     └─ config.js      # 站点配置文件
└─ package.json
```

具体请参考官方说明：[vuepress基本配置](https://vuepress.vuejs.org/zh/guide/basic-config.html)

## 项目配置

```js
module.exports = {
  ...,
  // 部署站点的基础路径
  base: '/blog/',

  // 多语言支持
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Blog Jay',
      description: 'blog site of Jay'
    },
    '/zh-CN/': {
      lang: 'zh-CN',
      title: '博客',
      description: '赖维健的个人博客',
    },
  },

  // 主题配置
  themeConfig: {
    sidebarDepth: 2, // 显示 h1, h2, h3
    repo: 'https://github.com/lwj1426282929/vue-press-blog.git',
    locales: {
      '/': {
        selectText: 'Languages',
        lang: 'en-US',
        label: 'English',
        nav: [{ text: 'home', link: '/' }, { text: 'blog', link: '/guide/' }],
        sidebar: {  // 路由分组
          '/guide/Vue/': Sidebar.getMenus('Vue'),
          '/guide/JavaScript/': Sidebar.getMenus('JavaScript'),
          '/guide/Other/': Sidebar.getMenus('Other'),
          '/guide/': Sidebar.getMenus(),
        },
      },
      '/zh-CN/': {
        selectText: '选择语言',
        lang: 'zh-CN',
        label: '简体中文',
        nav: [
          { text: '首页', link: '/zh-CN/' },
          { text: '博客', link: '/zh-CN/guide/' },
        ],
        sidebar: {
          '/zh-CN/guide/Vue/': Sidebar.getMenus('Vue'),
          '/zh-CN/guide/JavaScript/': Sidebar.getMenus('JavaScript'),
          '/zh-CN/guide/Other/': Sidebar.getMenus('Other'),
          '/zh-CN/guide/': Sidebar.getMenus(),
        },
      },
    },
  },
  ...
}
```

## 项目运行

```bash
npm run docs:dev
```

## 项目部署

```bash
npm run docs:build
```

nginx 配置：

```nginx
# 博客
location /blog {
    alias    /home/blog/dist ;
    index  index.html index.htm;      
}	

# 个人网页
location / {
    root   /home/ele/dist;
    index  index.html index.htm;
}
```