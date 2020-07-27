# Git 之常用命令

将本地项目关联 GitHub 远程仓库

```sh
git remote add origin git remote add origin git@github.com:lwj1426282929/vue-press-blog.git
git push -u origin master
```

为当前分支创建 tag

```sh
git tag -a v1.0.0 -m "version 1.0.0"
```

将 v1.0.0 tag 提交到 Git 服务器

```sh
git push origin v1.0.0
```

将本地所有 tag 一次性提交到 Git 服务器

```sh
git push origin --tags
```

回滚到某一节点

```sh
# 本地回滚到指定节点
git reset --hard <version>

# 强行推送至远程
git push -f
```
