---
sidebarDepth: 1
---

# 好用的 npm 包

## [Axios](http://www.axios-js.com/)

::: tip
易用、简洁且高效的 http 库
:::

## [Eslint](http://eslint.cn/)

::: tip
基于AST的模式检测器，用作代码错误、风格检测工具
:::

## [moment](http://momentjs.cn/)

::: tip
JavaScript 日期处理类库
:::

## [pre-commit](https://github.com/observing/pre-commit)

::: tip
git的预提交钩子安装程序, 一般用来检测代码是否符合规范。若不符合则阻止提交。
:::

### 安装

```bash
npm install --save-dev pre-commit
```

### 使用

在 <code>package.json</code> 中配置：

```json
"scripts": {
  "lint": "eslint ."
},
"pre-commit": "lint"
```

在执行 <code>git commit</code> 命令的时候就会检测所有代码是否符合 [Eslint 规则](https://eslint.org/)， 若不符合则会提示并且不能提交代码。

## [nodemon](https://github.com/remy/nodemon)

::: tip
通过在检测到目录中的文件更改时自动重新启动节点应用程序来帮助开发基于 <code>node.js</code> 的应用程序
:::

### 安装

```bash
npm install --save-dev nodemon
```

### 使用

在 <code>package.json</code> 中配置：

```json
"scripts": {
  "dev": "nodemon ./index.js --exec babel-node"
}
 ```

