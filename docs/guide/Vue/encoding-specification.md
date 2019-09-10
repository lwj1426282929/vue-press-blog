# Encoding Specification of Vue

## File/Folder Naming

### Single File Components

Pfz personally recommend <code>kebab-case</code> style, because of the superiority that it's easier be found when index.vue or index.js has been created in each folder. Also it can avoid problems in case-insensitive file systems.

Officials say single-file components should be named after <code>PascalCase</code>, That is, it always begins with a capital word ( <code>PascalCase</code> ). This is most friendly for code editor auto-completion because this way makes it as consistent as possible to reference components in JS(X) and templates.

However, mixing file naming can sometimes cause problems with case-insensitive file systems. This is why horizontal join naming ( <code>kebab-case</code> ) is also entirely desirable.

::: tip
Example:  Base.vue is different from base.vue on Linux, but the same on Windows.
:::

Folder names recommend <code>kebab-case</code> or <code>PascalCase</code> style are similar to files.

```
components/
  |- MyComponent.vue      # PascalCase Official recommendation

components/
  |- my-component.vue     # kebab-case I recommend this method to avoid problems with case-sensitive system 

components/
  |- myComponent.vue      # camelCase not recommend

components/
  |- mycomponent.vue      # extremely not recommended
```

### Tightly Coupled Component

#### Child components that are tightly coupled with their parent should include the parent component name as a prefix.

If a component only makes sense in the context of a single parent component, that relationship should be evident in its name. Since editors typically organize files alphabetically, this also keeps these related files next to each other.

```
components/
  |- todo-list/
    |- index.vue
    |- todo-list-button.vue
    |- todo-list-item.vue
```

## Order of words in component names

Component names should start with the highest-level (often most general) words and end with descriptive modifying words.

```
components/
  |- search-button-clear.vue
  |- search-button-run.vue
  |- search-input-query.vue
  |- search-input-exclude-glob.vue
  |- settings-checkbox-terms.vue
  |- settings-checkbox-launch-on-startup.vue
```

## Component names should prefer full words over abbreviations.

Component names should prefer full words over abbreviations. Uncommon abbreviations, in particular, should always be avoided.

## Component name casing in JS/JSX

Component names in JS/JSX should always be <code>PascalCase</code>, but it should be <code>kebab-case</code> in other scenes , and that it it just only be <code>kebab-case</code> in DOM.

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


## Element Order in Compnent

A Component is make up of template 、 script & style, a component has one or more style element, but has only one template or javascript at most. there is orderd by template 、script 、style scoped 、style.

```html
<template></template>

<script></script>

<style scoped></style>

<style></style>
```

### Component/instance options order

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

## Empty Line

There is should have empty lines between modules in template 、Multi-line properties and functions for ease of reading. But numbers of empty lines not be too much.

```html
<template>

    <!--Between Multi-line template modules shuold be empty-->
    <module-a />

    <module-b />
    
    <module-c />
</template>
```

```js
{
    attr_1: {           // Multi-line properties
        ...
    },
    
    attr_2: ''
}

function funA () {}

function funB () {}         // between functions
```

The number of each empty lines should not more than 2, we can set it up by [eslint](http://eslint.cn/) at <code>.eslintrc</code> or <code>.eslintrc.js</code>, for example:

```js
// eslint rules
rules: {
  "no-multiple-empty-lines": [1, { "max": 2 }], // multiple-empty-lines
}
```

## Element

### Self-close Element

Empty element should be self-close in single-file components 、string template and JSX.

Components that self-close communicate that they not only have no content, but are meant to have no content.
Unfortunately, HTML doesn’t allow custom elements to be self-closing - only official “void” elements.

### Multi-attribute elements

Elements with multiple attributes should span multiple lines, with one attribute per line.

In JavaScript, splitting objects with multiple properties over multiple lines is widely considered a good convention, because it’s much easier to read. Our templates and JSX deserve the same consideration.

if you encoding by vscode, you can format your code by <code>vetur</code> plugin, the setting as following:

```js
"vetur.format.defaultFormatter.html": "js-beautify-html",

"vetur.format.defaultFormatterOptions": {
  "wrap_attributes": "force-aligned"          // attributes is forced aligned by fold line, auto is means aligned in one line
}
```

### Element attribute order

The attributes of elements (including components) should be ordered consistently. Although the order does not affect the actual running effect of the code, in order to maintain a uniform style during the development process, the order should be kept as consistent as possible to facilitate the maintenance and reading of the code.

- Sort by instruction, attribute, event name;
- Instructions, attributes, and event names are sorted internally by field length, and the longer the field, the later;
- An attribute with a boolean value of true can be abbreviated as the attribute name and placed before other attributes.

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

## Prop

### Prop Name Casing

Prop names should always use <code>camelCase</code> during declaration, but <code>kebab-case</code> in templates and JSX.

### Prop Define

The Prop definition should be as detailed as possible. At least you need to specify its type.

A detailed prop definition has two benefits:
- They specify the API of the component, so it's easy to understand the usage of the component;
- In a development environment, if you provide a malformed prop to a component, Vue will alert you to capture the source of the potential error.

## Directive

### Directive shorthands

| directive name | shorthands |
| :-: | :-: |
| v-bind | : |
| v-on | @ |
| v-slot | # |

::: tip
The code should be as consistent as possible in the project. If directive shorthands are used, the directive shorthands should be kept as much as possible elsewhere in the project.
:::

### Pay attention to use directive shorthands

#### keyed the <code>v-for</code>

<code>key</code> with <code>v-for</code> is always required on components, in order to maintain internal component state down the subtree. 

```html
<card v-for="(card, index) in cards"
      :key="index" />
```

#### Avoid <code>v-if</code> with <code>v-for</code>

When Vue processes directives, <code>v-for</code> has a higher priority than <code>v-if</code>, so we can use <code>v-for</code> with <code>v-if</code> actually.

But it will cause unnecessary consumption to do like that, As long as one has changed, even if it doesn't need to be render, Vue will traverse the entire array again. So, in general, you have to manually filter out the data you want to display and then re-render the computed data.

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

#### <code>v-if</code> / <code>v-else-if</code> / <code>v-else</code> with <code>key</code>

It’s usually best to use key with <code>v-if</code> + <code>v-else</code>, if they are the same element type (e.g. both \<div> elements).

```html
<div v-if="showTemplate" 
     key="show" />

<div v-else 
     key="hide" />
```

## Communication between Components

### One-Way Data Flow

The data stream should be One-Way, that is the parent component should pass the message to the child component via prop, and the child component can read but cannot modify the prop. Also the child component can dispatch a event-name by <code>$emit</code> and then the parent component can response the message after accepted the signal emited by the child component.

::: tip
emit event-name should be <code>kebab-case</code> .
:::

```js
this.$emit('change-on-select', value)
```
```html
<my-component @change-on-celect="handleChangeOnSelect" />
```

### use reference type prop

if the prop is a reference, that it is a array or a object, Then the child component can change the properties in the array or object, and the data will be synchronized to the parent component not to emit. because the prop is a reference, the pointer to true data is not change. However this way should be use carefully because it is easy to cause data confusion, also it does not meet the one-way data flow principle.

### vuex

Vuex should be preferred for global state management, instead of this.$root or a global event bus.

## Style

### Component style scoping

For applications, styles in a top-level App component and in layout components may be global, but all other components should always be scoped.

In order to avoid conflicts with other components, you need to set the scope. Generally, you can add the <code>scoped</code> property directly to the style tag.

```html
<style lang="less" scoped>
  /* ... */
</style>
```

但是， 有些 class 类名是全局中的， 设置了 <code>scoped</code> 属性后并不能改变外面的全局样式， 这时可以：

However, some class-name is global, it is not use to set style in the scoped style tag, in this condition, we can:

- remove <code>scoped</code>, but in order to avoid conflicts with other components' style. we need to add a class name to the target container element. it's better to add root-class name to root element.

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

- use <code>deep</code> , but you'd better do not like this。

```html
<style lang="less" scoped>
.my-conponent-container {
  /deep/ .el-table__header {
    /* ... */
  }
}
</style>
```
We can also use <code>css module</code> if our application is installed <code>css-loader</code> .

```html
<style lang="less" module>
    /* ... */
</style>
```

### Try to use the class selector

Prefer class selectors over element selectors in scoped styles, because large numbers of element selectors are slow.

To scope styles, Vue adds a unique attribute to component elements, such as data-v-f3f3eg9. Then selectors are modified so that only matching elements with this attribute are selected (e.g. button[data-v-f3f3eg9]).

The problem is that large numbers of element-attribute selectors (e.g. button[data-v-f3f3eg9]) will be considerably slower than class-attribute selectors (e.g. .btn-close[data-v-f3f3eg9]), so class selectors should be preferred whenever possible.