# npm 常用命令

> [npm](https://docs.npmjs.com/) 的全称是 <code>Node Package Manager</code>，是随同 [Node.js](http://nodejs.cn/) 一起安装的包管理和分发工具，
它很方便让 <code>JavaScript</code> 开发者下载、安装、上传以及管理已经安装的包。

## 安装模块

```bash
npm install [<@scope>/]<name>@<version range>... [-S|--save|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [--dry-run]

npm i               
npm install                         # 根据项目中的 package.json 安装依赖

npm install <pkg> 
npm install <pkg> --S 
npm install <pkg> --save            # 安装模块到项目中并添加到 package.json 的 dependencies , 默认安装最新版本

npm install <pkg> -D
npm install <pkg> --save-dev        # 安装模块到项目中并添加到 package.json 的 devDependencies

npm install <pkg> -O
npm install <pkg> --save-optional   # 安装模块到项目中并添加到 package.json 的 optionalDependencies

npm install <pkg> -E 
npm install <pkg> --save-exact      # 精确安装模块的版本，不会有 ^ 出现

npm install <pkg> -g
npm install <pkg> -global           # 安装全局模块

npm install <pkg>[@<version>]       # 安装模块的具体版本
```

## 更新模块

```bash
npm update [-g] [<pkg>...]

npm update              # 更新项目中的所有模块至最新版本

npm update <pkg>        # 更新具体模块至最新版本

npm update -g           # 更新所有全局模块至最新版本

npm update <pkg> -g     # 更新具体全局模块至最新版本
```

## 卸载模块

```bash
npm uninstall [<@scope>/]<pkg>[@<version>]... [-S|--save|-D|--save-dev|-O|--save-optional]

npm uninstall                           # 卸载项目中的所有模块

npm uninstall <pkg> 
npm uninstall <pkg> --S 
npm uninstall <pkg> --save              # 卸载项目中的 dependencies 中的模块

npm uninstall <pkg> -D
npm uninstall <pkg> --save-dev          # 卸载项目中的 devDependencies 中的模块

npm uninstall <pkg> -O
npm uninstall <pkg> --save-optional     # 卸载项目中的 optionalDependencies 中的模块

npm uninstall <pkg> -g
npm uninstall <pkg> -global             # 卸载全局模块
```

## 镜像

```bash
npm config get registry                                     # 查看当前镜像

npm config set registry http://www.npmjs.org                # 切换至官方镜像

npm config set registry https://registry.npm.taobao.org     # 切换成淘宝镜像
```

## npm 用户

```bash
npm adduser         # 注册用户

npm login           # 登录

npm whoami          # 查看当前登录用户

npm logout          # 退出登录
```

## 发布模块

```bash
npm publish                                 # 发布模块

npm unpublish --force                       # 删除已发布的模块， 2分钟内有效

npm deprecate <pkg>[@<version>] <message>   # 弃用模块
```

## 模块缓存

```bash
npm cache add <pkg>[@<version>]     # 添加模块缓存

npm cache ls                        # 查看模块缓存

npm cache clean                     # 清除模块缓存
```

## 其他常用命令

1. 生成 <code>package.json</code>

```bash
npm init
```

2. 查看安装的模块

```bash
npm ls
```

3. 检查模块是否已经过时

```bash
npm outdated
```

4. 查看包的安装路径

```bash
npm root [-g]
```

5. 切换淘宝镜像

```bash
# 临时使用
npm --registry https://registry.npm.taobao.org install <packageName>

# 持久使用(推荐)
npm config set registry https://registry.npm.taobao.org

# 通过cnpm使用
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

6. 下载包时， 可以看到所有的http请求

```bash
npm config set loglevel=http
```

7. 查看模块的版本

```bash
npm version
```

8. <code>npm</code> 安装出错时

使用 <code>https</code> 协议而不是 </code>git</code> 协议， 再重新安装

```bash
git config --global url."https://".insteadOf git://
npm i
```

或者关闭 <code>ssl</code> ， 清除缓存， 再重新安装
    
```bash
npm cache clean --force
git config --global http.sslverify "false" 
npm cache clear
npm i
```