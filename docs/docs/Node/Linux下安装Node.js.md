# Linux 下安装 Node.js

**系统环境**

<code>CentOs 7 x86_64 bbr</code>  

**安装依赖**

```sh
yum install gcc openssl-devel gcc-c++ compat-gcc-34 compat-gcc-34-c++
```

**下载 Node.js 安装文件并解压**

```sh
cd /usr/src
wget https://npm.taobao.org/mirrors/node/v8.2.1/node-v8.2.1-linux-x86.tar.gz
tar -zxf node-v8.2.1-linux-x86.tar.gz
```

**配置环境变量**

```sh
vim /etc/profile
```

在文件中添加以下内容：

```
export NODE_HOME=/usr/src/node-v8.2.1-linux-x86
export PATH=$PATH:$NODE_HOME/bin
export NODE_PATH=$NODE_HOME/lib/node_modules
```

![image](/note/img/node_install.png)

**保存文件后刷新配置**

```sh
source  /etc/profile
```

**检查是否安装成功**

```sh
node -v
npm -v
```

**安装结果**

![image](/note/img/node_version.jpg)