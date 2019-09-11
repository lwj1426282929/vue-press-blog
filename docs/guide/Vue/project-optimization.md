# Optimize The Vue Project

## Compatibility

Vue is compatible with IE9, but it does not mean that we can build a project and it can be directly compatible with IE9. It needs to be compiled by tools. We can compile ES6、ES7 with [babel-polyfill](https://babeljs.io/docs/en/6.26.3/babel-polyfill). It can be directly imported in <code>main.js</code> when you use it.

```js
import 'babel-polyfill'
```

However, the dist folder was build by procject that imported it like that would be larger than usual, it might affect the opening speed of the page. So there is an on-demand translation usage. That is, when we need to use the translation code, we will translate it for us, not all the code.

Firstly, we need install [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill/) package into devDependencies, it used to compiled codes but can be configured to achieve on-demand loading.

```bash
npm i @babel/polyfill -D
```
Then you need to do the on-demand loading configuration in <code>babel.config.js</code> :

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
:::tip
[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) is a package for environment variables. It will be included when you create a project using [vue-cli 3.0](https://cli.vuejs.org/) , So, we don't need to install this package before building the project, just import it in <code>main.js</code>.
:::

```js
import '@babel/polyfill'
```

The packaged file is obviously smaller than the previous one, but the main file is much larger than before, that is, the home page loading speed is too slow. So you need to load the components as needed.

## Load components on demand

Take [element-ui](https://element.eleme.cn/#/en-US) as an example:

```bash
npm i babel-plugin-import -D
```
Config as follows in <code>babel.config.js</code> after Install package [babel-plugin-import](https://github.com/ant-design/babel-plugin-import).

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
If we do it like this, then the [element-ui](https://element.eleme.cn/#/en-US) is not be allow to use as global in <code>main.js</code>.

```js
import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* or code it like this
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```