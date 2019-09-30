# Git 常用命令

## 创建本地仓库

```sh
git init
```

## 拉取远程仓库

```sh
git clone <url>
```

## 拉取远程代码

```sh
git fetch     # 拉取远程代码， 但不会自动合并

git pull      # 拉取远程代码并且自动合并代码
```

## 查看分支

```sh
git branch        # 查看所有分支
git branch -v     # 查看所有分支的最后一次提交
```

## 切换分支

```sh
git checkout <branch_name>        # 切换到已有分支
git checkout -b <branch_name>     # 切换并创建新的分支
```

## 删除本地分支

```sh
git branch -d <branch_name>
```

## 删除远程分支

```sh
git push origin :<branch_name>

git push origin --delete <branch_name>
```

## 提交代码

```sh
git add .
git commit -m <message>
git push
```

## 比较两个分支代码

```sh
git diff origin/<branch_name> origin/<branch_name> --stat
```

## 回滚版本

```sh
git reset --hard  <version>     # 回滚到指定版本
git push -f

git revert HEAD                 # 撤销最近的一次提交
```

## 解决冲突

```sh{6}
git fetch origin
git checkout <source_branch>
git pull
git checkout <target_branch>
git pull
git merge --no-diff <source_branch>
git commit -m <message>
git push
```

## 创建tag

```sh
git tag -a <version> <message>
```

## 特殊符号

<code>^</code> 代表父提交,当一个提交有多个父提交时,可以通过在 <code>^</code> 后面跟上一个数字,表示第几个父提交: <code>^</code> 相当于<code>^1</code>.

<code>~ &lt;n&gt;</code> 相当于连续的 n 个 <code>^</code> .

## git pull vs git fetch

![image](/img/git_pull_vs_git_fetct.png)

## 