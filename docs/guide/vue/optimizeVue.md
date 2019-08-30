# 优化 Vue 项目 英文

#### 兼容性

Vue 是可以兼容到 IE9 的， 但并不是说我们写一个项目打包后就可以在 IE9 上直接兼容， 是需要用工具进行代码转换的。将一些 ES6、ES7 的语法进行转译。可以使用 babel-polyfill。
使用时直接在 main.js 中直接引入即可。

```js
import 'babel-polyfill'
```

但是这样引入的话，在打包的时候，包可能会比较大，会影响到前端页面的打开速度，所以又出现了一种按需转译的用法，即当我们需要用到转译代码的时候，会替我们转译，并不是一次转译所有的代码。

首先下载的是一个@babel/polyfill的包，这个包的话也是一个翻译代码的作用，但是可以进行配置来实现按需加载。

```bash
npm i @babel/polyfill -D
```

然后需要在babel.config.js中进行按需加载的配置:

```js
presets: [
    '@vue/app',
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'entry'
      }
    ]
]
```

注意这个@babel/preset-env是一个有关环境变量的包，这个包在你使用vue脚手架3.0创建项目时就会自带这个包了，所以是不需要下载的，最后在main.js中引入我们之前下载的包就可以了。

```js
import '@babel/polyfill'
```

这样打包后的文件明显要比之前体积小， 但是打出来的主文件要比之前大很多，即首页加载速度过慢。所以需要按需加载组件。

#### 按需加载组件

```bash
npm i babel-plugin-import -D
```

下载 babel-plugin-import 插件， 然后需要在babel.config.js中进行如下配置：

```js
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

然后在 main.js 文件中就不能全局使用 element-ui 了。

```js
import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```