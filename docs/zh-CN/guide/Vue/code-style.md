# 如何写一手漂亮的 Vue

:::tip
本文主要从一些编码习惯和风格上对 [Vue](https://cn.vuejs.org/) 编码进行一些规范，具体请参考 [Vue 风格指南](https://cn.vuejs.org/v2/style-guide/)。
:::

## 空行

为了便于阅读， 应在 template 中的模块之间、或多行属性或函数之间适当空行。但单处空行数不宜过多。

```html
<template>
    <!--大的template模块之间应空行-->
    <module-a />

    <module-b />
    
    <module-c />
</template>
```

```js
{
    attr_1: {           // 属性过大应空行
        ...
    },
    
    attr_2: ''
}

function funA () {}

function funB () {}         // 多个函数之间应适当空行
```

推荐单处空行数不超过两行，可以启用 [Eslint](http://eslint.cn/) 并配置规则。在 <code>.eslintrc</code> 或 <code>.eslintrc.js</code> 文件中配置如下：

```js
// eslint 规则
rules: {
  "no-multiple-empty-lines": [1, { "max": 2 }], //空行最多不能超过2行
}
```

## 命名

### 文件/文件夹命名

推荐使用 <code>kebab-case</code> , 因为在每个文件夹下有 <code>index.vue</code> 或 <code>index.js</code> 时更容易查找，而且可以有效避免大小写敏感问题。

::: tip
例如： MyComponent.vue 和 myComponent.vue 在 Linux 系统上是两个不同的文件， 但在 Windows 上因为系统对大小写不敏感， 会被认为是同一个文件。
:::

```
components-item/
  |- my-component.vue         # kebab-case 可以避免系统大小写敏感问题
```

### 紧密耦合的组件

#### 和父组件紧密耦合的子组件应该以父组件名作为前缀命名。

如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。或者通过不通的文件夹关联在一起。

```
components/
  |- todo-list/
    |- index.vue
    |- todo-list-button.vue
    |- todo-list-select.vue
```

#### 组件名中的单词顺序

组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。

```
components/
  |- search-button-clear.vue
  |- search-button-run.vue
  |- search-input-query.vue
  |- search-input-exclude-glob.vue
  |- settings-checkbox-terms.vue
  |- settings-checkbox-launch-on-startup.vue
```

#### 组件名应倾向于完整单词

组件名应该倾向于完整单词而不是缩写。不常用的缩写尤其应该避免。

### 变量

变量命名应遵循 JavaScript 命名规范，应使用 <code>camelCase</code> 或 <code>snake_case</code>。

:::tip
<code>snake_case</code> 的可读性要比 <code>camelCase</code> 强一些。
:::

### 函数名

函数名应采用 <code>camelCase</code> , 若有前缀， 前缀应为动词， 如：
| 动词 | 含义 | 返回值 |
| :- | :- | :- |
| can | 判断是否可执行某个动作(权限) | true：可执行；false：不可执行 |
| has/contain/include | 判断是否含有某个值| true：含有此值；false：不含有此值 |
| is | 判断是否为某个值 | true：为某个值；false：不为某个值 |
| get | 获取某个值 | 返回预期值 |
| set | 设置某个值 | 无返回值、返回是否设置成功或者返回链式对象 |
| load | 加载某些数据 | 无返回值或者返回是否加载完成的结果 |

## template

### 元素自闭合

在单文件组件、字符串模板和 [JSX](https://cn.vuejs.org/v2/guide/render-function.html#JSX) 中没有内容的组件应该是自闭合的。自闭合组件表示它们不仅没有内容，而且刻意没有内容。

```html
<my-component />
```

### 多特性元素

多个特性的元素应该分多行撰写，每个特性一行。

在 JavaScript 中，用多行分隔对象的多个属性是很常见的最佳实践，因为这样更易读。模板和 [JSX](https://cn.vuejs.org/v2/guide/render-function.html#JSX) 值得我们做相同的考虑。

如果使用 <code>vscode</code> 书写代码，可以使用 [vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) 插件格式化 [Vue](https://cn.vuejs.org/) 代码， 在 <code>setting.json</code> 中设置如下：

```js
"vetur.format.defaultFormatter.html": "js-beautify-html",

"vetur.format.defaultFormatterOptions": {
    "wrap_attributes": "force-aligned"          // 属性强制折行对齐, auto为一行展示
}
```

效果如下：

```html
<my-component
  v-show="showTemplate"
  v-model="componentSelectedData"
  change-on-select
  :color="color"
  @select="select"
/>
```

### 元素特性顺序

元素 (包括组件) 的特性应该有统一的顺序。尽管顺序并不能影响代码的实际运行效果， 但为了在开发过程中保持统一的风格， 应尽量保持顺序的一致， 便于代码的维护和阅读。

- 按照指令、属性、事件名来排序，指令放在最前， 属性在指令后面， 事件名在最后。
- 指令、属性和事件名内部按照字段长短排序， 字段越长越靠后。
- 布尔值为 true 的属性可以简写为属性名， 放在其他属性之前。

```html
<my-component
  v-show="showTemplate"
  v-model="componentSelectedData"
  change-on-select
  :color="color"
  @select="select"
/>
```

### 元素特性大小写

元素的特性应采用 <code>kebab-case</code> 。 即在 template 中不应出现大写字符， 因为 HTML 会忽略大小写.

### 指令

|  指令  | 缩写 |
| :----: | :--: |
| v-bind |  :   |
|  v-on  |  @   |
| v-slot |  #   |

::: tip
在项目中代码应尽量保持一致， 如果使用了缩写， 则在项目其他地方也应尽量保持缩写形式。
:::

#### <code>key</code> 必须配合 <code>v-for</code> 使用。

在组件上总是必须用 <code>key</code> 配合 <code>v-for</code>，以便维护内部组件及其子树的状态。

```html
<card v-for="(card, index) in cards" :key="index" />
```

#### 避免 <code>v-if</code> 和 <code>v-for</code> 用在一起

当 [Vue](https://cn.vuejs.org/) 处理指令时，<code>v-for</code> 比 <code>v-if</code> 具有更高的优先级, 所以 <code>v-for</code> 和 <code>v-if</code> 是可以在一起使用的。但是这样会造成不必要的消耗， 只要有一项变了， 哪怕是不需要展示的， Vue 也会重新遍历整个数组， 重新计算渲染。所以一般要自己手动过滤出需要显示的数据再遍历展示。

```html
<card v-for="(card, index) in cards" :key="index" />
```

```js
computed: {
  cards () {
    return this.data.filter((item) => {
      return item.show
    })
  }
}
```

#### 在一组 <code>v-if</code> / <code>v-else-if</code> / <code>v-else</code> 中使用 <code>key</code>

如果是一组判断 <code>v-if</code> 、 <code>v-else</code> ； 或者 <code>v-if</code> 、 <code>v-else-if</code> 、 <code>v-else</code> ， 并且它们的元素类型相同， 最好使用 <code>key</code> 。

```html
<div v-if="showTemplate" key="show" />

<div v-else key="hide" />
```

## script

### 实例顺序

```js
export default {
  // 组件属性
  name: '',

  // 组件外部依赖
  components: {},
  props: {},

  // 组件内部属性
  data: {},
  computed: {},

  // 监听属性
  watch: {},

  // 生命周期
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},

  // 方法
  methods: {},
};
```

### Props

[Prop 定义](https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E9%AA%8C%E8%AF%81) 应该尽量详细。至少需要指定其类型。

细致的 [Prop 定义](https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E9%AA%8C%E8%AF%81) 有两个好处：

- 它们写明了组件的 API，所以很容易看懂组件的用法；
- 在开发环境下，如果向一个组件提供格式不正确的 prop ， [Vue](https://cn.vuejs.org/) 将会告警，以帮助你捕获潜在的错误来源。

Props 在定义时应使用 <code>camelCase</code> 在 <code>template</code> 中传值时应使用 <code>kebab-case</code> . template 中的布尔为 true 的属性可以省略 </code>ture</code> .

```html
<el-form inline></el-form>
<!-- 等同于<el-form :inline="true"></el-form> -->
```

### 组件通信

#### 单向数据流

数据流应是单项的， 即父组件应通过 prop 向子组件传递消息，子组件不能修改 prop (引用属性除外)， 而应该通过 <code>$emit</code> 向父组件发送一个事件，父组件接收该事件后作出相应操作。

::: tip
emit 的事件名应使用 <code>kebab-case</code> 。
:::

```js
this.$emit('change-on-select', value)
```
```html
<my-component @change-on-celect="handleChangeOnSelect" />
```

#### 使用引用属性

如果传递的 prop 是一个引用， 即对象或数组， 那么子组件可以对数组或者对象里面的属性进行更改， 数据会同步到父组件， 无需 <code>emit</code> ， 因为 prop 传递的是一个引用， 引用其实并没有变化。但是要谨慎使用， 容易造成数据混乱， 不符合单向数据流原则。

#### vuex

应该优先通过 [Vuex](https://vuex.vuejs.org/zh/) 管理全局状态，而不是通过 <code>this.$root</code> 或一个全局事件总线。

## style

### 为组件样式设置作用域

对于应用来说，顶级 App 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的。

为了避免和其他组件的样式冲突， 需要设置作用域， 一般在 style 标签里直接加 <code>scoped</code> 属性即可。

```html
<style lang="less" scoped>
</style>
```

但是， 有些 class 类名是全局中的， 设置了 <code>scoped</code> 属性后并不能改变外面的全局样式， 这时可以：

- 去掉 <code>scoped</code> 属性， 但是为了避免和其他样式冲突， 需要在 template 里加一个 class 包裹该元素， 在 style 中使用包裹的类名作用于目标元素。推荐在一开始的根元素就添加class

```html
<template>
 <div class="my-conponent-container"></div>
</template>

<style lang="less">
.my-conponent-container {
  .el-table__header{}
}
</style>
```

- 使用 <code>deep</code> , 但是不推荐这种用法。

```html
<style lang="less" scoped>
.my-conponent-container {
  /deep/ .el-table__header {}
}
</style>
```

或者使用 <code>css module</code>。但是项目必须安装使用 [css-loader](https://github.com/webpack-contrib/css-loader) 。

```html
<style lang="less" module>
</style>
```

### 尽量使用类选择器

在样式中，类选择器比元素选择器更好，因为大量使用元素选择器是很慢的。 特别是在 <code>scoped</code> 样式中。

为了给样式设置作用域，Vue 会为元素添加一个独一无二的特性，例如 <code>data-v-f3f3eg9</code>。然后修改选择器，使得在匹配选择器的元素中，只有带这个特性才会真正生效 (比如 <code>button[data-v-f3f3eg9]</code> )。

问题在于大量的元素和特性组合的选择器 (比如 <code>button[data-v-f3f3eg9]</code> ) 会比类和特性组合的选择器慢，所以应该尽可能选用类选择器。