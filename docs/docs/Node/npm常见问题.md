---
sidebarDepth: 0
---

# npm 常见问题

## 1. npm 下载包失败

### solution 1:

删除 `node_modules` 文件夹 重新执行 `npm install `.

### solution 2:

查看镜像是否有问题， 建议使用淘宝镜像

```bash
npm config set registry https://registry.npm.taobao.org
```

### solution 3:

若是以上两种办法均不行， 可以清空 npm 缓存， 再下载

```bash
npm cache clean --force
```

---

## 2. node 升级后，node-sass 报错

::: tip
node 升级后， 启动项目时报 `node-sass` 错误:  
Node Sass could not find a binding for your current environment: Windows 64-bit with Node.js 8.x
:::

### solution:

```bash
npm rebuild node-sass
```

---
