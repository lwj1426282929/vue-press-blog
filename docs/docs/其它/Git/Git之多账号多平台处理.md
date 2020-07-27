# Git 多秘钥处理

1. 创建秘钥

```sh
   ssh-keygen -t rsa -C "1426282929@qq.com" -f ~/.ssh/id_rsa_github
   ssh-keygen -t rsa -C "lwj1994@zto.com" -f ~/.ssh/id_rsa_zto
```

2. 添加秘钥

```sh
   ssh-add ~/.ssh/id_rsa_github
   ssh-add ~/.ssh/id_rsa_zto
```

如果执行 `ssh-add` 时提示`Could not open a connection to your authentication agent`，
可执行： `ssh-agent bash` 再执行添加的命令

3. 查看私钥列表：

```sh
ssh-add -l
```

4. 删除私钥列表：

```sh
ssh-add -D
```

5. 若 `.ssh` 目录(就是私钥所在的文件夹)下无 `config` 文件，那么创建

```sh
touch config
```

config 文件：

```
# zto
Host git.ztosys.com
HostName git.ztosys.com
PreferredAuthentications publickey
IdentityFile C:/Users/shzto/.ssh/id_rsa_zto

# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile C:/Users/shzto/.ssh/id_rsa_github
```

参数说明

```
# 配置文件参数

# Host : Host 可以看作是一个你要识别的模式，对识别的模式，进行配置对应的的主机名和 ssh 文件（可以直接填写 ip 地址）

# HostName : 要登录主机的主机名（建议与 Host 一致）

# User : 登录名（如 gitlab 的 username）

# IdentityFile : 指明上面 User 对应的 identityFile 路径

# Port: 端口号（如果不是默认 22 号端口则需要指定）
```

6、测试

```sh
ssh -T git@github.com
```
