# 常用的 JS 技巧

#### 数组过滤唯一值

ES6 引入了 Set 对象和延展（spread）语法…，我们可以用它们来创建一个只包含唯一值的数组。

```js
const array = [1, 1, 2, 3, 5, 5, 1]
const uniqueArray = [...new Set(array)]
console.log(uniqueArray) // Result: [1, 2, 3, 5]
```

该方法支持包含原始类型的数组：undefined、null、boolean、string 和 number。

#### 在循环中缓存数组长度

在 for 循环时， 我们一般这样写：

```js
for (let i = 0; i < array.length; i++) {
 console.log(i);
}
```

使用这种写法 for 循环的每次迭代都会重复计算数组长度。有时候我们知道这个数组在循环过程中长度不会发生改变了， 可以先将数组的长度赋值给一个变量。

```js
let len = arr.length
for (let i = 0; i < len; i++) {
    console.log(i)
}
```

或者这样写：

```js
for (let i = 0, length = array.length; i < length; i++) {
    console.log(i)
}
```

#### 短路求值

使用三元运算符可以很快地写出条件语句，例如：

```js
x > 100 ? 'Above 100' : 'Below 100';
x > 100 ? (x > 200 ? 'Above 200' : 'Between 100-200') : 'Below 100';
```

但有时候三元运算符仍然很复杂，我们可以使用逻辑运算符 && 和||来替代，让代码更简洁一些。

```js
return (foo || []).length
```

#### 转换成布尔值

在 JavaScript 中，除了 0、“”、null、undefined、NaN 和 false 是假值之外，其他的都是真值。

我们可以使用 ! 来切换 true 和 false。

```js
const isTrue = !0
const isFalse = !1
const alsoFalse = !!0
console.log(true)           // Result: true
console.log(typeof true)    // Result: "boolean"
```

#### 转换成字符串

要快速将数字转换成字符串，我们可以使用 + 运算符，然后在后面跟上一个空字符串。

```js
const val = 1 + ''
console.log(val)            // Result: "1"
console.log(typeof val)     // Result: "string"
```

#### 转换成数字

要把字符串转成数字，也可以使用 + 运算符。

```js
let int = '15'
int = +int
console.log(int)            // Result: 15
console.log(typeof int)     // Result: "number"
```

也可以使用这种方式将布尔值转成数字，例如：

```js
console.log(+true)       // Return: 1
console.log(+false)      // Return: 0
```

在某些情况下，+ 运算符会被解析成连接操作，而不是加法操作。对于这种情况，可以使用两个波浪号：~~。

一个波浪号表示按位取反操作，例如，~15 等于 -16。
两个波浪号~~表示去反再取反， 即自己。

```js
const int = ~~'15'
console.log(int)            // Result: 15
console.log(typeof int)     // Result: "number"
```

#### 快速幂运算

从 ES7 开始，可以使用 ** 进行幂运算，比使用 Math.power(2,3) 要快得多。

```js
console.log(2 ** 3)  // Result: 8
```

在 ES7 之前，可以使用位左移运算符 << 来表示以 2 为底的幂运算：

```js
// 以下表达式是等效的:
Math.pow(2, n)
2 << (n - 1)
2**n
```

#### 快速取整

我们可以使用 Math.floor()、Math.ceil() 或 Math.round() 将浮点数转换成整数，但有另一种更快的方式，即使用位或运算符 |。

```js
console.log(23.9 | 0) // Result: 23
console.log(-23.9 | 0) // Result: -23
```

| 的实际行为取决于操作数是正数还是负数，所以在使用这个运算符时要确保你知道操作数是正是负。

如果 n 是正数，那么 n|0 向下取整，否则就是向上取整。它会移除小数部分，也可以使用~~ 达到同样的效果。

#### 自动类绑定

在 ES6 中，我们可以使用箭头进行隐式绑定，这样可以为类的构造器省下一些代码，并跟一些重复出现的表达式说再见，比如 this.myMethod = this.myMethod.bind(this)。

#### 截取数组

如果你想从一个数组尾部移除某些元素，可以使用一种比 splice() 更快的方法。

例如，如果你知道初始数组的大小，可以像下面这样重新定义它的 length 属性：

```js
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
array.length = 4
console.log(array)   // Result: [0, 1, 2, 3]
```

这显然是一种更简洁的解决方案。不过，我发现 slice() 的运行速度更快，所以，如果你更看重速度，可以像下面这样：

```js
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
array = array.slice(0, 4)
console.log(array) // Result: [0, 1, 2, 3]
```

#### 获取数组最后的元素

数组的 slice() 方法可以接受负整数，并从数组的尾部开始获取元素。

```js
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array.slice(-1))        // Result: [9]
console.log(array.slice(-2))        // Result: [8, 9]
console.log(array.slice(-3))        // Result: [7, 8, 9]
```

#### 格式化 JSON

stringify() 方法可以接受两个额外的参数，一个是函数（形参为 replacer），用于过滤要显示的 JSON，另一个是空格个数（形参为 space）。
space 可以是一个整数，表示空格的个数，也可以是一个字符串（比如’ ’表示制表符），这样得到的 JSON 更容易阅读。

```js
console.log(JSON.stringify({ alpha: 'A', beta: 'B' }, null, '   '))
// Result:
// '{
//  "alpha": A,
//  "beta": B
// }'
```
