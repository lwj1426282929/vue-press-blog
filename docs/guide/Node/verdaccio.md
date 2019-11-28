# npm 私库搭建

::: tip
<code>npm</code> 是随同的 [Node.js](http://nodejs.cn/) 一起安装的包管理工具，能够解决 [Node.js](http://nodejs.cn/) 代码部署上的很多问题，主要应用于以下场景：
1. 允许用户从 npm 服务器下载别人编写的第三方包到本地使用；
2. 允许用户从 npm 服务器下载并安装别人编写的命令行程序到本地使用；
3. 允许用户将自己编写的包或命令行程序上传到 npm 服务器供别人使用。

在开发过程中，开发人员为了方便代码的迭代与维护，将公共、通用代码抽离出来形成基础组件、插件放至 npm 库供不同项目使用，丰富公司的开发内容，也为整个开发行业贡献自己的力量。但在某些场景中，不宜将组件、插件包放至公共场合。而是通过搭建 npm 私库，将代码放至私有库中，使用 npm 私库主要由以下几点优势：

1. 统一管理，公司内部开发的私有包，统一管理，方便开发和使用；
2. 安全性，由于公司内部开发的模块和一些内容并不希望其他无关人员能够看到，但是又希望内部能方便使用；
3. 加速,自己搭建 npm 服务器，本身可以自带常用package的缓存，而 npm 的速度有些感人，自建的服务器会缓存下载过的包，能节省时间。
:::

## [Sinopia](https://github.com/rlidwka/sinopia)

一个用来做 npm 的 <code>registry</code> 的私有 + 缓存镜像的开源组件，拥有零配置的本地 npm 注册表。 不必安装和复制整个 CouchDB 数据库。

[Sinopia](https://github.com/rlidwka/sinopia) 保留了自己的小型数据库，如果那里不存在包，它会询问 [npmjs.org](https://npmjs.org)。它只保留你使用的那些包。但是 [Sinopia](https://github.com/rlidwka/sinopia) 不能下载以 <code>@</code> 开头的 npm 包， 并且作者已经不再维护。

## [Verdaccio](https://verdaccio.org/zh-CN/)

[Verdaccio](https://verdaccio.org/zh-CN/) 是 [Sinopia](https://github.com/rlidwka/sinopia) 的一种新的 <code>web</code> <code>React</code> 端的实现形式，并且目前一直在维护中。 是 [Sinopia](https://github.com/rlidwka/sinopia) 的一个分支。

### Verdaccio 安装

```bash
npm install --global verdaccio
```

如果在安装过程中报 <code>grywarn</code> 的权限错的话，那么需要加上 <code>--unsafe-perm</code> 。

![image](/img/verdaccio_install.png)

### Verdaccio 启动

安装完成后，就可以在命令行中 输入 <code>verdaccio</code> 命令运行。

```sh
verdaccio
```

![image](/img/verdaccio_start.png)

### 配置远程访问

[Verdaccio](https://verdaccio.org/zh-CN/) 默认是 <code>localhost:4873</code> ，只能本地访问， 需要修改配置文件：

```sh
vi /root/.config/verdaccio/config.yaml
```

在文件中添加以下内容：
```
listen: 0.0.0.0:4873
```

## [pm2](http://pm2.keymetrics.io/)

verdaccio 命令只能临时启动，远程连接一旦关闭或者结束该命令 verdaccio 进程就会关闭。需要借助进程管理工具进行管理。常见的有 [pm2](http://pm2.keymetrics.io/)。

```sh
# 全局安装pm2
npm install -g pm2 

# 使用pm2启动verdaccio
pm2 start which verdaccio 
```

![image](/img/pm2_install.png)

```sh
# 停止verdaccio服务
pm2 stop which verdaccio 

# 查看进程管理日志
pm2 show verdaccio 
```

## [nrm](https://github.com/Pana/nrm)

[nrm](https://github.com/Pana/nrm) 是一个 npm 源管理器，允许你快速地在 npm 源间切换。

```sh
# 全局安装nrm
npm install -g nrm 
```

```sh
# 添加镜像别名
nrm add verdaccio http://154.211.2.124:4873
```

![image](/img/nrm.png)

```sh
## 查看全部镜像源
nrm ls
```
![image](/img/nrm_ls.png)

```sh
# 切换镜像
nrm use verdaccio 
```