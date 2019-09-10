# Vue编码规范

## 文件/文件夹命名

### 单文件组件

个人推荐 <code>kebab-case</code> , 因为在每个文件夹下有 index.vue 或 index.js 时更容易查找, 而且可以有效避免大小写敏感问题。

官方认为单文件组件应以 <code>PascalCase</code> 方式命名，即始终是单词大写开头(大驼峰)。单词大写开头对于代码编辑器的自动补全最为友好，因为这使得我们在 JS(X)和模板中引用组件的方式尽可能一致。

然而，混用文件命名方式有的时候会导致大小写不敏感的文件系统的问题，这也是横线连接命名 ( <code>kebab-case</code> ) 同样完全可取的原因。

::: tip
例如： Base.vue 和 base.vue 在 Linux 系统上是两个不同的文件， 但在 windows 上因为大小写不敏感， 会被认为是同一个文件。
:::

文件夹与文件类似， 推荐使用 <code>kebab-case</code> 或 <code>PascalCase</code> 。

```
components/
  |- MyComponent.vue          # PascalCase 官方推荐写法

components/
  |- my-component.vue         # kebab-case 个人更推荐该写法, 可以避免系统大小写敏感问题

components/
  |- myComponent.vue          # camelCase 不推荐

components/
  |- mycomponent.vue          # 极不推荐
```

### 紧密耦合的组件

#### 和父组件紧密耦合的子组件应该以父组件名作为前缀命名。

如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。或者通过不通的文件夹关联在一起。

```
components/
  |- todo-list/
    |- index.vue
    |- todo-list-button.vue
    |- todo-list-item.vue
```

## 组件名中的单词顺序

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

## 组件名应倾向于完整单词

组件名应该倾向于完整单词而不是缩写。不常用的缩写尤其应该避免。

## 在模板中使用组件

在 JS/[JSX](https://cn.vuejs.org/v2/guide/render-function.html#JSX) 中使用 <code>PascalCase</code>， 但是在其他地方比如 template 中使用 <code>kebab-case</code>，在 DOM 中只能使用 <code>kebab-case</code> 。

```html
<my-component />
```

```js
import MyComponent from '@/components/my-component'

export default {
  components: {
    MyComponent
  }
}
```


## 组件内部顺序

组件由 template 、 script 、 style 组成。可以有多个 style 。顺序按 template 、script 、style scoped 、style 排序。

```html
<template></template>

<script></script>

<style scoped></style>

<style></style>
```

### 组件/实例顺序

```js
export default {
  name: '',
  
  components: {},
  
  props: {},
  
  data () {},
  
  beforeCreate () {},
  
  created () {},
  
  beforeMount () {},
  
  mounted () {},
  
  methods: {},
  
  beforeUpdate () {},
  
  updated () {},
  
  activated () {},
  
  deactivated () {},
  
  beforeDestroy () {},
  
  destroyed () {},
  
  watch: {}
}
```

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

推荐单处空行数不超过两行，可以通过 [eslint](http://eslint.cn/) 设置。在 <code>.eslintrc</code> 或 <code>.eslintrc.js</code> 文件中配置如下：

```js
// eslint 规则
rules: {
  "no-multiple-empty-lines": [1, { "max": 2 }], //空行最多不能超过2行
}
```

## 元素

### 自闭合

在单文件组件、字符串模板和 [JSX](https://cn.vuejs.org/v2/guide/render-function.html#JSX) 中没有内容的组件应该是自闭合的。

自闭合组件表示它们不仅没有内容，而且刻意没有内容。但是 HTML 并不支持自闭合的自定义元素。

### 多特性元素

多个特性的元素应该分多行撰写，每个特性一行。

在 JavaScript 中，用多行分隔对象的多个属性是很常见的最佳实践，因为这样更易读。模板和 [JSX](https://cn.vuejs.org/v2/guide/render-function.html#JSX) 值得我们做相同的考虑。

如果使用 <code>vscode</code>, 可以使用 [vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) 插件格式化 Vue 代码， 设置如下：

```js
"vetur.format.defaultFormatter.html": "js-beautify-html",

"vetur.format.defaultFormatterOptions": {
    "wrap_attributes": "force-aligned"          // 属性强制折行对齐, auto为一行展示
}
```

### 元素特性顺序

元素 (包括组件) 的特性应该有统一的顺序。尽管顺序并不能影响代码的实际运行效果， 但为了在开发过程中保持统一的风格， 应尽量保持顺序的一致， 便于代码的维护和阅读。

- 按照指令、属性、事件名来排序，指令放在最前， 属性在指令后面， 事件名在最后。
- 指令、属性和事件名内部按照字段长短排序， 字段越长越靠后。
- 布尔值为true的属性可以简写为属性名， 放在其他属性之前。

```html
<my-component v-show="showTemplate"
              v-model="componentSelectedData"
              change-on-select 
              :color="color"
              @select="select" />
```

```js
props: {
  changeOnSelect: {
    type: Boolean,
    default: false
  }，
  
  color: {
    type: String,
    required: true,
    default: 'red'
    validator: (val) => {
      let colors = ['red', 'yellow', 'orange', 'green', 'black']
      if(colors.indexOf(val) > -1) return val
      return 'red'
    }
  }
}
```

## 组件属性 Prop

### Prop 大小写

在组件内申明 Prop 的时候， 其命名应该始终使用 <code>camelCase</code>，而在模板和 [JSX](https://cn.vuejs.org/v2/guide/render-function.html#JSX) 中应该始终使用 <code>kebab-case</code>。

### Prop 定义

[Prop 定义](https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E9%AA%8C%E8%AF%81) 应该尽量详细。至少需要指定其类型。

细致的 [Prop 定义](https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E9%AA%8C%E8%AF%81) 有两个好处：
- 它们写明了组件的 API，所以很容易看懂组件的用法；
- 在开发环境下，如果向一个组件提供格式不正确的 prop ， Vue 将会告警，以帮助你捕获潜在的错误来源。

## 指令

### 缩写

| 指令 | 缩写 |
| :-: | :-: |
| v-bind | : |
| v-on | @ |
| v-slot | # |

::: tip
在项目中代码应尽量保持一致， 如果使用了缩写， 则在项目其他地方也应尽量保持缩写形式。
:::

### 指令使用注意

#### <code>key</code> 必须配合 <code>v-for</code> 使用。

在组件上总是必须用 <code>key</code> 配合 <code>v-for</code>，以便维护内部组件及其子树的状态。

```html
<card v-for="(card, index) in cards"
      :key="index" />
```

#### 避免 <code>v-if</code> 和 <code>v-for</code> 用在一起

当 Vue 处理指令时，<code>v-for</code> 比 <code>v-if</code> 具有更高的优先级, 所以 <code>v-for</code> 和 <code>v-if</code> 是可以在一起使用的。

但是这样会造成不必要的消耗， 只要有一项变了， 哪怕是不需要展示的， Vue 也会重新遍历整个数组， 重新计算渲染。所以一般要自己手动过滤出需要显示的数据再遍历展示。

```html
<card v-for="(card, index) in cards"
      :key="index" />
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
<div v-if="showTemplate" 
     key="show" />

<div v-else 
     key="hide" />
```

## 组件通信

### 单向数据流

数据流应是单项的， 即父组件应通过 prop 向子组件传递消息，子组件不能修改 prop ， 而应该通过 <code>$emit</code> 向父组件发送一个事件，父组件接收该事件后作出相应操作。

::: tip
emit 的事件名应使用 <code>kebab-case</code>
:::

```js
this.$emit('change-on-select', value)
```
```html
<my-component @change-on-celect="handleChangeOnSelect" />
```

### 使用引用属性

如果传递的 prop 是一个引用， 即对象或数组， 那么子组件可以对数组或者对象里面的属性进行更改， 数据会同步到父组件， 无需 emit， 因为 prop 传递的是一个引用， 引用其实并没有变化。但是要谨慎使用， 容易造成数据混乱， 不符合单向数据流原则。

### vuex

应该优先通过 [Vuex](https://vuex.vuejs.org/zh/) 管理全局状态，而不是通过 <code>this.$root</code> 或一个全局事件总线。

## style 样式

### 为组件样式设置作用域

对于应用来说，顶级 App 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的。

为了避免和其他组件的样式冲突， 需要设置作用域， 一般在 style 标签里直接加 <code>scoped</code> 属性即可。

```html
<style lang="less" scoped>
  /* ... */
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
  /* ... */
}
</style>
```

- 使用 <code>deep</code> , 但是不推荐这种用法。

```html
<style lang="less" scoped>
.my-conponent-container {
  /deep/ .el-table__header {
    /* ... */
  }
}
</style>
```

或者使用 <code>css module</code>。但是项目必须安装使用 [css-loader](https://github.com/webpack-contrib/css-loader) 。

```html
<style lang="less" module>
    /* ... */
</style>
```

### 尽量使用类选择器

在样式中，类选择器比元素选择器更好，因为大量使用元素选择器是很慢的。 特别是在 <code>scoped</code> 样式中。

为了给样式设置作用域，Vue 会为元素添加一个独一无二的特性，例如 <code>data-v-f3f3eg9</code>。然后修改选择器，使得在匹配选择器的元素中，只有带这个特性才会真正生效 (比如 <code>button[data-v-f3f3eg9]</code> )。

问题在于大量的元素和特性组合的选择器 (比如 <code>button[data-v-f3f3eg9]</code> ) 会比类和特性组合的选择器慢，所以应该尽可能选用类选择器。