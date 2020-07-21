# 常用的 git 命令

为当前分支创建 tag

```sh
git tag -a v1.0.0 -m "version 1.0.0"
```

将 v1.0.0 tag 提交到 git 服务器

```sh
git push origin v1.0.0
```

将本地所有 tag 一次性提交到 git 服务器

```sh
git push origin --tags
```
