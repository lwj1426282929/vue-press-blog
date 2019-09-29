# 好用的 npm 工具包

## [Eslint](https://eslint.org/)

> 基于AST的模式检测器，用作代码错误、风格检测工具



## [moment](http://momentjs.cn/)

> JavaScript 日期处理类库



## [pre-commit](https://github.com/observing/pre-commit)

> git的预提交钩子安装程序, 一般用来检测代码是否符合规范。若不符合则不提交。

##### 安装

```bash
npm install --save-dev pre-commit
```

##### 使用

在 package.json 中配置：

```json
"scripts": {
    "lint": "eslint ."
},
"pre-commit": "lint"
```

在执行 git commit 命令的时候就会检测所有代码是否符合eslint规范， 若不符合则会提示并且不能提交代码。



## [nodemon](https://github.com/remy/nodemon)

> 通过在检测到目录中的文件更改时自动重新启动节点应用程序来帮助开发基于node.js的应用程序

##### 安装

```bash
npm install --save-dev nodemon
```

##### 使用

在package.json 中配置：

```json
"scripts": {
    "dev": "nodemon ./index.js --exec babel-node"
 }
 ```