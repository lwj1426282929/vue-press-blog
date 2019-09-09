# vscode 常用插件

## 语法检查

### Eslint

检查 JS 语法

### Tslint

检查 TS 语法

## 代码格式化

### Prettier

格式化代码, 需要在 <code>setting.json</code> 中配置：

```json
{
  "prettier.singleQuote": true, // 强制单引号
  "prettier.trailingComma": "all",
  "prettier.eslintIntegration": true,
  "prettier.semi": true // 自动补全js分号
}
```

### vue-beautify2

格式化 Vue 代码。

### Vetur

高亮格式化 Vue 代码。在 <code>setting.json</code> 中配置：

```json
{
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatterOptions": {
    "wrap_attributes": "force-aligned", // 属性强制折行对齐
    "js-beautify-html": {
      "wrap_attributes": "force-aligned"
      // "wrap_attributes": "auto"
    }
  },
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatter.ts": "vscode-typescript"
}
```

## 代码提示、自动化

### Auto Close Tag

自动关闭标签。

![image](https://github.com/formulahendry/vscode-auto-close-tag/raw/master/images/close-tag.gif)

### Auto Rename Tag

自动同步修改标签

![image](https://github.com/formulahendry/vscode-auto-rename-tag/raw/master/images/usage.gif)

### Class autocomplete for HTML

智能提示 HTML class =“”属性

![image](https://github.com/AESSoft/vscode-class-autocomplete-for-html/raw/master/images/demo.gif)

### HTML CSS support

css 属性名、属性提示

### IntelliSense for CSS class names in HTML

根据工作空间或通过 link 元素引用的外部文件中的定义为 HTML 类属性提供 CSS 类名补全。

### Image Preview

图片预览

### SVG Viewer

SVG 预览

### npm Intellisense

自动安装项目中用到的依赖包

### Path Intellisense

自动补全文件路径和文件名

### Indenticator

突出显示代码缩进

![image](https://github.com/SirTori/indenticator/raw/master/img/demo.gif)

### Bracket Pair Colorizer

颜色识别匹配括号

![image](https://github.com/CoenraadS/BracketPair/raw/develop/images/forceUniqueOpeningColorDisabled.png)
![image](https://github.com/CoenraadS/BracketPair/raw/develop/images/forceUniqueOpeningColorEnabled.png)
![image](https://github.com/CoenraadS/BracketPair/raw/develop/images/forceIterationColorCycleEnabled.png)
![image](https://github.com/CoenraadS/BracketPair/raw/develop/images/consecutiveExample.png)
![image](https://github.com/CoenraadS/BracketPair/raw/develop/images/independentExample.png)

### Chinese (Simplified) Language Pack for Visual Studio Code

中文（简体）语言包

### vscode-fileheader

添加文件头部注释, 需要在 <code>setting.json</code> 中设置作者、最近更新日期等信息：

```json
{
  "fileheader.Author": "赖维健",
  "fileheader.LastModifiedBy": "赖维健"
}
```

![image](/img/fileheader.jpg)
