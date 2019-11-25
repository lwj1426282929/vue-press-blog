# Install Node.js on The Linux OS

:::tip
Ignore the Windows OS directly download installation package installation.
:::

**OS**

<code> CentOs 7 </code>  x86_64 bbr

**Install Dependencies**

```sh
yum install gcc openssl-devel gcc-c++ compat-gcc-34 compat-gcc-34-c++
```

**Download and unzip the node.js installation file**

```sh
cd /usr/src
wget https://npm.taobao.org/mirrors/node/v8.2.1/node-v8.2.1-linux-x86.tar.gz
tar -zxf node-v8.2.1-linux-x86.tar.gz
```

**Configure environment variables**

```sh
vim /etc/profile
```

Add the following to the file:

```
export NODE_HOME=/usr/src/node-v8.2.1-linux-x86
export PATH=$PATH:$NODE_HOME/bin
export NODE_PATH=$NODE_HOME/lib/node_modules
```
![image](/img/node_install.png)

**Refresh the configuration after saving the file**

```sh
source  /etc/profile
```

**Check if the installation is successful**

```sh
node -v
npm -v
```

**Result Version**

![image](/img/node_version.jpg)