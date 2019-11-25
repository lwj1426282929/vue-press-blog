# NPM Publish 

## Publish Modules to NPM Official Registry

**step 1: Prepare A NPM Package**

Build a projrt, <code>package.json</code> options can reference document [package.json](https://docs.npmjs.com/files/package.json)

**step 2: Ensure that the current registry is the official NPM registry**

```bash
# chek the current registry
npm get registry    

# it needs to be set whileurrent registry is not the official NPM registry
npm config set registry https://registry.npmjs.org/
```

**step 3: Register**

It is need to register if there is no this user, Those who have registered can log in directly
```bash
# add user， it's need username 、password and email
npm adduser
```

**step 4: Login**

```bash
npm login
```
**step 5: Publih**

```bash
# publish
npm publish
```
you can find it out in [npmjs.com](https://www.npmjs.com/) after publih succeed, the <code>name</code> of module is the name of <code>package.json</code> in your project.

**step 6: Update**

若 npm 包需要更新， 需要将 <code>package.json</code> 中的 <code>version</code> 升级， 然后执行第 5 步即可。

**step 7: Unpublish**

In order not to affect other people who have already used the module, NPM official register supports deleting the published package within 2 minutes. After 2 minutes, it cannot be deleted, but only the module can be deprecated. The deprecated version and later versions are no longer maintained or used, but the previous version is not affected.Others will have an enable warning when installing the package.

```bash
# unpublish（works within two minutes）
npm unpublish <packageName>

# deprecate， Later versions can no longer be maintained and updated, previous versions are unaffected, and deprecation warnings are provided to anyone trying to install it
npm deprecate <pkg>[@<version>] <message>
```

## Pubish to Verdaccio

Verdaccio is the same as the official NPM register, just the register address change into Verdaccio address. To ensure that you are indeed using Verdaccio address, it is a good idea to follow the command with the register address <code>--registry url </code>.

**step 1: Prepare A NPM Package**

**step 2: Ensure that the current registry is the Verdaccio registry**

**step 3: Register**

[Verdaccio](https://verdaccio.org) only command-line registration is supported.

```bash
# It is need to register if there is no this user, Those who have registered can log in directly
npm adduser --registry <url>
```

**step 4: Login**

```bash
# it's need to confirm username 、password and email
npm login --registry <url>
```

**step 5: Publish**

```bash
npm publish --registry <url>
```

**step 6: Update**

**step 7: Deprecate**

[Verdaccio](https://verdaccio.org) has no limitation that packages cannot be deleted after 2 minutes, so we can use <code>npm unpublish pkg --force --registry url</code> to delete packages that have been published, or use <code>npm deprecate pkg @version message --registry url</code> to deprecate packages.

```bash
# unpublish
npm unpublish <pkg> --force --registry <url>

# deprecate
npm deprecate <pkg> --registry <url>
```