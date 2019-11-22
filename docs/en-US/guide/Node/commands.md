# Commonly Used Commands Of NPM

:::tip
The full name of [npm](https://docs.npmjs.com/about-npm/) is <code>Node Package Manager</code>. It is a Package management and distribution tool that is installed with [Node.js](https://nodejs.org/en/).
:::

## Install Modules

```bash
npm install [<@scope>/]<name>@<version range>... [-S|--save|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [--dry-run]

npm i               
npm install                         # Install dependencies based on package.json in the project

npm install <pkg> 
npm install <pkg> --S 
npm install <pkg> --save            # Install modules to projects and add them to pack.json dependencies, which install the latest version by default

npm install <pkg> -D
npm install <pkg> --save-dev        # Install modules to projects and add them to devDependencies of package.json

npm install <pkg> -O
npm install <pkg> --save-optional   # Install modules to projects and add them to optionalDependencies of package.json

npm install <pkg> -E 
npm install <pkg> --save-exact      # Install the exact version of the module, no ^ appears

npm install <pkg> -g
npm install <pkg> -global           # Install global module

npm install <pkg>[@<version>]       # Install the specific version of the module
```

## Update Modules

```bash
npm update [-g] [<pkg>...]

npm update              # Update all modules in the project to the latest version

npm update <pkg>        # Update specific modules to the latest version

npm update -g           # Update all global modules to the latest version

npm update <pkg> -g     # Update specific global modules to the latest version
```

## Uninstall Modules

```bash
npm uninstall [<@scope>/]<pkg>[@<version>]... [-S|--save|-D|--save-dev|-O|--save-optional]

npm uninstall                           # Uninstall all modules in the project

npm uninstall <pkg> 
npm uninstall <pkg> --S 
npm uninstall <pkg> --save              # Uninstall modules in dependencies from project

npm uninstall <pkg> -D
npm uninstall <pkg> --save-dev          # Uninstall modules in devDependencies from project

npm uninstall <pkg> -O
npm uninstall <pkg> --save-optional     # Uninstall modules in optionalDependencies from project

npm uninstall <pkg> -g
npm uninstall <pkg> -global             # Uninstall global module
```

## Registry

```bash
npm config get registry                                     # View current registry

npm config set registry http://www.npmjs.org                # Switch to official registry

npm config set registry https://registry.npm.taobao.org     # Switch to Taobao registry
```

## NPM Users

```bash
npm adduser         # Add user

npm login           # Login

npm whoami          # View current user

npm logout          # Logout
```

## Publish Module

```bash
npm publish                                 # Publish module

npm unpublish --force                       # Delete the published module, effective in 2 minutes

npm deprecate <pkg>[@<version>] <message>   # Deprecated module
```

## NPM Cache

```bash
npm cache add <pkg>[@<version>]     # Add npm cache

npm cache ls                        # View npm cache

npm cache clean                     # Clean npm cache
```

## Other Common Commands

1. Create <code>package.json</code>

```bash
npm init
```

2. View the installed module

```bash
npm ls
```

3. Check if the module is outdated

```bash
npm outdated
```

4. View the package installation path

```bash
npm root [-g]
```

5. Switch to Taobao registry

```bash
# temporary use
npm --registry https://registry.npm.taobao.org install <packageName>

# permanent use(recommended)
npm config set registry https://registry.npm.taobao.org

# use by cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

6. Checkout all the HTTP requests while downloading the package

```bash
npm config set loglevel=http
```

7. View the version of the module

```bash
npm version
```

8. <code>NPM</code> Installation error

Use <code>https</code> instead of <code>git</code> and reinstall

```bash
git config --global url."https://".insteadOf git://
npm i
```

Or close <code>ssl</code>, clear the cache, and reinstall
    
```bash
npm cache clean --force
git config --global http.sslverify "false" 
npm cache clear
npm i
```