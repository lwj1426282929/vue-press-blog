# 页面呈现、重绘、回流

1. 呈现流程

浏览器把获取到的`HTML`代码解析成一个`DOM`树，`HTML`中的每个`tag`都是`DOM`树的 1 个节点，包括 `display:none` 隐藏的元素，还有 js 动态添加的元素；
，根节点就是 `document` 对象（`html tag`）。

浏览器把所有样式（主要包括 css 和浏览器的样式设置）解析成样式结构体。在解析过程中会去掉浏览器不能识别的样式，比如 IE 会去掉`-moz`开头的样式，Firefox 会去掉`_`开头的样式；

`DOM tree`和样式结构体结合后构建呈现树（`render tree`）。`render tree`中每个 node 都有自己的 style，而`render tree`不包含隐藏的节点（比如 display:none 的节点，还有 head 节点），这些节点不会用于呈现，也不影响呈现，所以就不会包含在`render tree`中。（visibility:hidden 隐藏的元素还会包含在 render tree 中，因为会影响布局（layout），会占有空间。根据`CSS2`的标准，`render tree`中的每个节点都称为`box`（Box dimensions），`box`的所有属性：width,height,margin,padding,left,top,border 等；

render tree 构建完毕后，浏览器根据 render tree 来绘制页面。

2. 重绘与回流

当 render tree 中的一些元素的外观、风格等不会影响布局的属性改变，比如 bachground-color，这就称为重绘。

当 render tree 中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构（建重新布局）。这就称为回流。每个页面至少需要一次回流，就是在页面第一次加载的时候。

## 浏览器缓存机制

![](https://upload-images.jianshu.io/upload_images/3174701-de3d6e025582103a?imageMogr2/auto-orient/strip|imageView2/2/format/webp)

## new 一个对象的过程

1. 创建一个新对象，如：var person = {}；
2. 将新对象的`_proto_`属性指向构造函数的原型对象；
3. 将构造函数的作用域赋值给新对象（所以 `this` 指向新对象）；
4. 执行构造函数内部的代码，将属性添加给新对象中的 `this` 对象；
5. 返回新对象。

## 类和构造函数的区别？如何编写代码实现构造函数不用 new 关键字会报错？

通常我们所谓的类就是用 new 来构造实例的普通函数。
通常实例化一个构造函数的时候，里面的 this 是指向被实例化的实例的。

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}
```

但有的时候我们想直接执行函数来进行实例化，而不是用 new。这个时候构造函数里面的 this 指向便不再是被实例化的实例了，就变成了 Ins 函数的接受者全局变量 window，严格模式下则会直接抛出错误。
通常的解决方案是判断 this 是否是构造函数的实例，若是则继续执行，若不是则进行 new 的操作。

```js
function Person(name, age) {
    if (!this instanceof Person) {
        return new Person(name, age);
    }
    this.name = name;
    this.age = age;
}
```

在构造函数参数个数固定的情况下这种方案是可行的。这种方式的一个缺点是它需要额外的函数调用，因此代价有点高。
在进行构造函数实例化的时候，如果构造函数内部没有明确 return 语句返回值，那么该构造函数会自动的构造一个实例对象返回，但是如果我们明确返回了非简单数据类型（简单数据类型还是会自动构造实例对象返回）的对象的话，构造函数实例化的时候返回的就是该对象。如此，我们可以构造如下的通用情况下的构造函数：

```js
function Person(name, age) {
    var self = this instanceof Person ? this : Object.create(Person.prototype);

    self.name = name;
    self.age = age;

    return self;
}
```

## 闭包

能够读取其他函数内部变量的函数

闭包的用途：可以读取函数内部的变量，并且让这些变量的值始终保持在内存中。

