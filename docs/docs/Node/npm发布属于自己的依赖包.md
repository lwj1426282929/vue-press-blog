# npm 发布包

## 发布到 npm

**step 1: 准备好npm包**

准备好一个项目工程, <code>package.json</code> 具体参考文档 [package.json](http://javascript.ruanyifeng.com/nodejs/packagejson.html#toc0)

**step 2: 确保当前镜像是否为 npm 官方镜像**

```bash
# 查看当前镜像
npm get registry    

# 若不是npm官方镜像则需要设置
npm config set registry https://registry.npmjs.org/
```

**step 3: 注册用户**

如果之前没有用户， 需要注册， 注册过了的可以直接登录
```bash
# 添加镜像用户， 需要 username 、password 以及 email
npm adduser
```

**step 4: 登录**

```bash
npm login
```
**step 5: 发布**

```bash
# 发布
npm publish
```

发布成功后就可以在 [npmjs.com](https://www.npmjs.com/) 中查到了， npm 的包名就是 <code>package.json</code> 中的 <code>name</code> 值。

**step 6: 更新版本**

若 npm 包需要更新， 需要将 <code>package.json</code> 中的 <code>version</code> 升级， 然后执行第 5 步即可。

**step 7: 撤销发布**

为了不影响其他已经使用了该包的人, npm 官方镜像支持在2分钟内删除已发布的包， 2分钟后不能删除, 只能弃用该包， 即弃用版本及之后版本不再维护，也不能使用， 但是之前的版本不受影响。其他人在安装该包时会有启用警告出现。

```bash
# 撤销发布（2分钟内该命令有效）
npm unpublish <packageName>

# 弃用， 之后版本不能再维护更新， 之前的版本不受影响，并向尝试安装它的所有人提供弃用警告
npm deprecate <pkg>[@<version>] <message>
```

## 发布到私库

私库与官方镜像没有区别， 只是将镜像地址换成私库地址而已。为了确保的确使用的是私库地址， 最好在命令后面加上镜像地址 <code>--registry url </code>。

**step 1: 准备好npm包**

**step 2: 确保当前镜像是否为 npm 私库镜像**

**step 3: 注册用户**

[Verdaccio](https://verdaccio.org/zh-CN/) 只支持命令行方式注册。

```bash
# 添加镜像用户， 需要 username 、password 以及 email
npm adduser --registry <url>
```

**step 4: 登录**

```bash
# 需要确认username 、password 以及 email
npm login --registry <url>
```

**step 5: 发布**

```bash
npm publish --registry <url>
```

**step 6: 更新版本**

**step 7: 撤销发布**

[Verdaccio](https://verdaccio.org/zh-CN/)  没有2分钟后不能删除包的限制， 所以我们可以使用 <code>npm unpublish pkg --force --registry url</code> 来删除已经发布的包， 也可以使用 <code>npm deprecate pkg @version message --registry url</code> 来弃用包。

```bash
# 删除包
npm unpublish <pkg> --force --registry <url>

# 弃用包
npm deprecate <pkg> --registry <url>
```