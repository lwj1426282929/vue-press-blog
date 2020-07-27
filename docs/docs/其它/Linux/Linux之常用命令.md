# Linux 之常用命令

改变当前目录

```sh
cd <path>
```

查看当前目录下文件以及文件夹

```sh
ls
```

远程连接

```sh
 ssh [-p <port>] <user>@<remote>
```

上传本地文件至远程

```sh
scp <file> root@<ip>:<path>
```

从远程下载文件至本地

```sh
scp root@ip:<file> <local_dir>（本地目录）
```

上传整个目录至远程

```sh
scp -r <local_dir> root@<ip>:<path>
```

从远程下载整个目录

```sh
scp -r root@<ip>:<path> <local_dir>
```

打包文件

```sh
# 仅打包，不压缩
tar -cvf /home/www/images.tar /home/www/images
# 打包后，以 gzip 压缩
tar -zcvf /home/www/images.tar.gz /home/www/images
```

解压文件至指定目录

```sh
tar zxvf /source/kernel.tgz -C /source/ linux-2.6.29
```
