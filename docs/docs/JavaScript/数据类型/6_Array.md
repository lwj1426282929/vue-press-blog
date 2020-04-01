# Array

## Methods

### indexOf

::: message #3d7e9a 语法
_array.indexOf(element[, fromIndex])_
:::

返回指定元素在数组中`第一次`出现的索引， 没有则返回`-1`。

-   fromIndex：从此位置开始正向查找。默认为 0。若 fromIndex &ge; 数组的长度，则不会查找；若为负数，则将其视为从数组末尾向前的偏移（查找顺序不变），即-1 代表从最后一个元素开始往后查找，-2 表示从倒数第二个元素开始往后查找...，若为负数且其绝对值&ge;数组的长度，则整个数组都会查找。

```js
let arr = [1, 2, 3];
arr.indexOf(2); // 1
arr.indexOf(2, 1); // 1
arr.indexOf(2, 2); // -1
arr.indexOf(2, 3); // -1
arr.indexOf(2, -1); // -1
arr.indexOf(2, -2); // 1
arr.indexOf(2, -3); // 1
arr.indexOf(2, -4); // 1
```

::: tip
`indexOf`使用`===`进行判断 element 与数组中包含的元素之间的关系。
:::

_Polyfill_

`indexOf`在`ECMA-262`标准的第 5 版中被加入，但并非所有的浏览器都支持该方法。我们可以加入以下代码使其在没有本地支持的情况下依然能够使用`indexOf`方法：

```js
if (!array.prototype.indexOf) {
    array.prototype.indexOf = function(searchElement, fromIndex) {
        var k;
        if (this == null) throw new TypeError('"this" is null or not defined');

        var O = Object(this);
        var len = O.length >>> 0;

        if (len === 0) return -1;

        var n = +fromIndex || 0;

        if (Math.abs(n) === Infinity) n = 0;
        if (n >= len) return -1;

        k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        while (k < len) {
            if (k in O && O[k] === searchElement) return k;
            k++;
        }

        return -1;
    };
}
```

### lastIndexOf

::: message #3d7e9a 语法
_array.lastIndexOf(element[, fromIndex])_
:::

返回指定元素在数组中`最后一次`出现的索引，没有则返回`-1`。

-   fromIndex：从此位置开始逆向查找。默认为数组的长度-1。若 fromIndex &ge; 数组的长度-1，则整个数组都会被查找；若为负值，则将其视为从数组末尾向前的偏移，即-1 代表从最后一个元素开始往前查找，-2 代表从倒数第二个元素开始往前查找...，若为负数且其绝对值 &gt; 数组的长度，则不会查找，返回-1。

```js
let arr = [1, 2, 3];
arr.lastIndexOf(2); // 1
arr.lastIndexOf(2, 1); // 1
arr.lastIndexOf(2, 2); // 1
arr.lastIndexOf(2, 3); // 1
arr.lastIndexOf(2, -1); // 1
arr.lastIndexOf(2, -2); // 1
arr.lastIndexOf(2, -3); // -1
arr.lastIndexOf(2, -4); // -1
```

::: tip
`lastIndexOf`使用`===`进行判断 element 与数组中包含的元素之间的关系。
:::

_Polyfill_

和`indexOf`一样，`lastIndexOf`也是`ECMA-262`标准的第 5 版中被加入，但并非所有的浏览器都支持该方法。我们可以加入以下代码使其在没有本地支持的情况下依然能够使用`lastIndexOf`方法：

```js
if (!array.prototype.lastIndexOf) {
    array.prototype.lastIndexOf = function(searchElement /*, fromIndex*/) {
        'use strict';

        if (this === void 0 || this === null) throw new TypeError();

        var n,
            k,
            t = Object(this),
            len = t.length >>> 0;

        if (len === 0) return -1;

        n = len - 1;

        if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n != n) {
                n = 0;
            } else if (n != 0 && n != 1 / 0 && n != -(1 / 0)) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }

        k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n);

        for (k; k >= 0; k--) {
            if (k in t && t[k] === searchElement) return k;
        }

        return -1;
    };
}
```

### find

::: message #3d7e9a 语法
_array.find(callback[, thisArg])_
:::

返回`第一个`满足匹配函数的元素，否则返回`undefined`。

-   callback：在数组每一项上执行的函数，接收 3 个参数：

    -   element：当前遍历到的的元素；
    -   index: 当前遍历到的元素的索引；
    -   array：数组本身。

-   thisArg: 执行回调时的`this`对象。

在第一次调用 callback 函数时会确定元素的索引范围，因此在`find`方法开始执行之后添加到数组的新元素将不会被 callback 函数访问到。如果数组中一个尚未被 callback 函数访问到的元素的值被 callback 函数所改变，那么当 callback 函数访问到它时，它的值是将是根据它在数组中的索引所访问到的当前值。被删除的元素仍旧会被访问到，但是其值已经是`undefined`了。

```js
let arr = [
    { name: 'a', age: 18 },
    { name: 'b', age: 22 },
];
let person = arr.find(item => {
    return item.age > 20;
}); // { name: 'b', age: 22 }
```

### findIndex

::: message #3d7e9a 语法
_array.findIndex(callback[, thisArg])_
:::

返回数组中满足匹配函数的第一个元素的索引，否则返回`-1`。

-   callback：在数组每一项上执行的函数，接收 3 个参数：

    -   element：当前遍历到的的元素；
    -   index: 当前遍历到的元素的索引；
    -   array：数组本身。

-   thisArg: 执行回调时的`this`对象。

在第一次调用 callback 函数时会确定元素的索引范围，因此在 `findIndex` 方法开始执行之后添加到数组的新元素将不会被 callback 函数访问到。如果数组中一个尚未被 callback 函数访问到的元素的值被 callback 函数所改变，那么当 callback 函数访问到它时，它的值是将是根据它在数组中的索引所访问到的当前值。被删除的元素仍然会被访问到。

```js
let arr = [
    { name: 'a', age: 18 },
    { name: 'b', age: 22 },
];
let index = arr.findIndex(item => {
    return item.age > 20;
}); // 1
```

### includes

::: message #3d7e9a 语法
_array.includes(valueToFind[, fromIndex])_
:::

判断数组是否包含指定值，包含返回`true`，否则返回`false`。

-   fromIndex： 从 fromIndex 索引处开始查找，默认为 0。若为负值，则将其视为从数组末尾向前的偏移，即-1 代表从最后一个元素开始往后查找，-2 代表从倒数第二个元素开始往后查找...。若 fromIndex 为正且 &ge; 数组长度，或为负数时其绝对值大于数组长度，则数组不会搜索， 返回`false`。

```js
let arr = [1, 2, 3];
arr.includes(2); // true
arr.includes(2, 2); // false
```

::: tip
`includes`是一个通用方法。它不要求 this 值是数组对象，所以它可以被用于其他类型的对象 (比如类数组对象)。
:::

### forEach

::: message #3d7e9a 语法
_array.forEach(callback(currentValue [, index [, array]])[, thisArg])_
:::

遍历数组，对数组的每个元素执行一次给定的函数。

-   callback：为数组中每个元素执行的函数，该函数接收三个参数：
    -   currentValue： 当前遍历的元素；
    -   index：当前遍历的索引；
    -   array：当前数组。
-   thisArg： 执行回调时的`this`对象。

```js
let arr = [1, 2, 3];
arr.forEach(item => {
    item++;
});
console.log(arr); // [1, 2, 3]
```

::: tip

-   `forEach`遍历的范围在第一次调用 callback 前就会确定。
-   `forEach`被调用时，不会改变原数组，也就是调用它的数组（尽管 callback 函数在被调用时可能会改变原数组）。
-   除了抛出异常以外，没有办法中止或跳出`forEach`循环。若要提前终止循环，可以使用：
    -   简单`for`循环；
    -   `for...of`；
    -   `for...in`；
    -   [every](#every)；
    -   [some](#some)；
    -   [find](#find)；
    -   [findIndex](#findindex)。
-   如果使用 `promise` 或 `async` 函数作为`forEach`等类似方法的 callback 参数，最好对造成的执行顺序影响多加考虑，否则容易出现错误。

:::

### map

::: message #3d7e9a 语法
_array.map(callback(currentValue [, index [, array]])[, thisArg])_
:::

返回一个新数组，新数组的每一个元素都是原数组对应元素执行函数后的结果。

-   callback：生成新数组元素的函数，使用三个参数：
    -   currentValue： 当前遍历的元素；
    -   index: 当前遍历的索引；
    -   array：当前数组。
-   thisArg： 执行回调时的`this`对象。

```js
let arr = [1, 2, 3];
let arr_ = arr.forEach(item => {
    item++;
});
console.log(arr_); // [2, 3, 4]
```

### every

::: message #3d7e9a 语法
_array.every(callback[, thisArg])_
:::

判断数组的每一项元素是否都通过指定函数，是返回`true`，否则返回`false`。

-   callback：用来测试每个元素的函数，返回值为`boolean`类型，对数组中的每个元素使用该函数，如果对于所有元素该函数返回`true`，则该方法返回`true`， 否则返回`false`。它可以接收三个参数：
    -   element：当前遍历的元素；
    -   index：当前遍历的索引；
    -   array：调用`every`的数组。
-   thisArg：执行 callback 时使用的 this 值。

`every`遍历的元素范围在第一次调用 callback 之前就已确定了。在调用`every`之后添加到数组中的元素不会被 callback 访问到。如果数组中存在的元素被更改，则他们传入 callback 的值是`every`访问到他们那一刻的值。那些被删除的元素或从来未被赋值的元素将不会被访问到。

`every`方法为数组中的每个元素执行一次 callback 函数，直到它找到一个会使 callback 返回 [falsy](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy) 的元素。如果发现了一个这样的元素，`every`方法将会立即返回`false`。否则，callback 为每一个元素返回`true`，`every`就会返回`true`。callback 只会为那些已经被赋值的索引调用。不会为那些被删除或从未被赋值的索引调用。

```js
let arr = [12, 5, 8, 130, 44];
arr.every(item => {
    return item > 10;
}); // false
```

::: tip

-   空数组在任何情况下都会返回`true`。（这种情况属于[无条件正确](https://en.wikipedia.org/wiki/Vacuous_truth)：正因为一个空集合没有元素，所以它其中的所有元素都符合给定的条件。）
-   `every`不会改变原数组。

:::

### some

::: message #3d7e9a 语法
_array.some(callback[, thisArg])_
:::

判断数组中是否至少有一项元素通过指定函数，是返回`true`，否则返回`false`。

-   callback：用来测试每个元素的函数，返回值为`boolean`类型，对数组中的每个元素使用该函数，如果对于某一元素该函数返回`true`，则该方法返回 `true`，若都返回`false`， 则返回`false`。它可以接收三个参数：
    -   element：当前遍历的元素；
    -   index：当前遍历的索引；
    -   array：调用`every`的数组。
-   thisArg：执行 callback 时使用的 this 值。

`some`遍历的元素的范围在第一次调用 callback. 前就已经确定了。在调用`some`后被添加到数组中的值不会被 callback 访问到。如果数组中存在且还未被访问到的元素被 callback 改变了，则其传递给 callback 的值是`some`访问到它那一刻的值。已经被删除的元素不会被访问到。

`some`为数组中的每一个元素执行一次 callback 函数，直到找到一个使得 callback 返回一个真值。如果找到了这样一个值，`some`将会立即返回`true`。否则，`some`返回`false`。callback 只会在那些有值的索引上被调用，不会在那些被删除或从来未被赋值的索引上调用。

```js
let arr = [12, 5, 8, 130, 44];
arr.some(item => {
    return item > 10;
}); // true
```

::: tip

-   空数组在任何情况下都会返回`false`。
-   `some`被调用时不会改变数组。

:::

### reduce

::: message #3d7e9a 语法
_array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])_
:::

对数组中的每个元素执行一个累计器函数(从左到右执行)，返回一个汇总结果。

-   callback：累计器函数，包括四个参数：
    -   accumulator：累计器累计回调的返回值，即上一次回调时返回的累计值；
    -   currentValue：当前遍历的元素；
    -   index：当前遍历的索引，若提供了`initialValue`，则初始值为 0，否则初始值为 1；
    -   array：调用`reduce`的数组。
-   initialValue：第一次调用 callback 函数时的第一个参数的值，若没有提供，则为数组中的第一个元素。

```js
let arr = [1, 2, 3, 4];
arr.reduce((sum, item) => {
    return sum + item;
}); // 10
```

::: tip

-   如果没有提供`initialValue`，`reduce`会从索引 1 的地方开始执行 callback 方法，跳过第一个索引。如果提供`initialValue`，从索引 0 开始。
-   如果是空数组且没有提供`initialValue`，则在运行时会抛出`Uncaught TypeError: Reduce of empty array with no initial value`错误；
-   如果数组仅有一个元素（无论位置如何）并且没有提供`initialValue`， 或者有提供`initialValue`但是数组为空，那么此唯一值将被返回并且 callback 不会被执行。
-   建议最好提供`initialValue`，这样更为安全，以便在数组为空或者不为空时每一项元素都能通过累计器函数。
-   `reduce`不会改变原数组。

:::

### reduceRight

::: message #3d7e9a 语法
_array.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])_
:::

对数组中的每个元素执行一个累计器函数(从右到左执行)，返回一个汇总结果。

-   callback：累计器函数，包括四个参数：
    -   accumulator：累计器累计回调的返回值，即上一次回调时返回的累计值；
    -   currentValue：当前遍历的元素；
    -   index：当前遍历的索引，若提供了`initialValue`，则初始值为 0，否则初始值为 1；
    -   array：调用`reduce`的数组。
-   initialValue：第一次调用 callback 函数时的第一个参数的值，若没有提供，则为数组中的第一个元素。

```js
let arr = [1, 2, 3, 4];
arr.reduceRight((sum, item) => {
    return sum + item;
}); // 10
```

::: tip

-   如果没有提供`initialValue`，`reduceRight`会从索引 1 的地方开始执行 callback 方法，跳过第一个索引。如果提供`initialValue`，从索引 0 开始。
-   如果是空数组且没有提供`initialValue`，则在运行时会抛出`Uncaught TypeError: Reduce of empty array with no initial value`错误；
-   如果数组仅有一个元素（无论位置如何）并且没有提供`initialValue`， 或者有提供`initialValue`但是数组为空，那么此唯一值将被返回并且 callback 不会被执行。
-   建议最好提供`initialValue`，这样更为安全，以便在数组为空或者不为空时每一项元素都能通过累计器函数。
-   `reduceRight`不会改变原数组。

:::

### filter

::: message #3d7e9a 语法
_array.filter(callback(element[, index[, array]])[, thisArg])_
:::

遍历数组元素，返回一个由所有满足过滤条件的元素所组成的新数组，如果没有元素满足过滤条件，则返回空数组。

-   callback：过滤函数，返回值为 blloean 类型， true 为 满足过滤条件， false 不满足。包括三个参数：
    -   element：当前遍历的元素；
    -   index：当前遍历的索引；
    -   array：调用`filter`的数组
-   thisArg：执行回调时的`this`对象。

`filter`遍历的元素范围在第一次调用 callback 之前就已经确定了。在调用 `filter` 之后被添加到数组中的元素不会被`filter`遍历到。如果已经存在的元素被改变了，则他们传入 callback 的值是`filter`遍历到它们那一刻的值。被删除或从来未被赋值的元素不会被遍历到。

```js
let arr = [1, 2, 3, 4];
arr.filter(item => {
    return item > 2;
}); // [3, 4]
```

::: tip
`filter`不会改变原数组，返回过滤后的新数组。
:::

### push

::: message #3d7e9a 语法
_array.push(element1, ..., elementN)_
:::

-   elementN：要追加进数组的元素。

将一个或多个元素添加到数组的末尾，并返回该数组的新长度。

```js
let arr = [];
arr.push(1, 2, 3); // 3; arr = [1, 2, 3]
```

### pop

::: message #3d7e9a 语法
_array.pop()_
:::

删除数组`最后一个`元素，返回被删除的元素。如果为空数组，则返回`undefined`。

```js
let arr = [1, 2, 3];
arr.pop(); // 3; arr = [1, 2]
```

### shift

::: message #3d7e9a 语法
_array.shift()_
:::

从数组中删除`第一个`元素，并返回该元素的值。如果为空数组，则返回`undefined`。

```js
let arr = [1, 2, 3, 4];
arr.shift(); // 1; arr = [2, 3, 4]
```

### unshift

将一个或多个元素添加到数组的开头，并返回该数组的新长度。

::: message #3d7e9a 语法
_array.unshift(element1, ..., elementN)_
:::

-   elementN：要添加到数组开头的元素。

```js
let arr = [1, 2, 3];
arr.unshift(-1, -2); // 5; arr = [-1, -2, 1, 2, 3]
```

### slice

::: message #3d7e9a 语法
_array.slice([begin[, end]])_
:::

返回从原数组中提取（`浅拷贝`）下来的子数组（包含开始位置，但不包含结束位置），原数组不改变。

-   begin：拷贝的开始位置， 默认为 0。若值大于原数组长度， 返回空数组；若为负数，则代表从数组的倒数第几位开始拷贝。
-   end： 拷贝的结束位置，默认为数组的长度值。若该参数为负数，则代表从数组的倒数第几位结束拷贝。若大于原数组的长度，则会一直拷贝到原数组末尾。

```js
let arr = [1, 2, 3, 4, 5, 6];
arr.slice(); // [1, 2, 3, 4, 5, 6]
arr.slice(1, 4); // [2, 3, 4]
arr.slice(-3, -2); // [4]
arr.slice(-3, -4); // []
```

### splice

::: message #3d7e9a 语法
_array.splice(start[, deleteCount[, item1[, item2[, ...]]]])_
:::

删除或替换现有元素或者原地添加新的元素来修改数组，返回由被删除元素组成的数组，若不删除，则返回空数组。

-   start：开始修改的位置，默认为 0。若该参数大于数组长度，则在数组末尾添加内容。如果为负值且绝对值小于原数组长度则代表从数组的倒数第几位开始修改，若为负值且绝对值大于或等于数组长度，则从数组起始位置开始修改。修改时包含 start 位置。
-   deleteCount：整数，表示要移除的数组元素的个数。如果 deleteCount 大于 start 之后的元素的总数，则从 start 后面的元素都将被删除（含第 start 位）。若 deleteCount 被省略，则数组从 start 位置开始以及后面的元素都会被删除。如果 deleteCount 是 0 或者负数，则添加元素。
-   itemN：要添加进数组的元素,从 start 位置开始。如果不指定，则`splice`将只删除数组元素。

```js
// 删除元素
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.splice(8, 2); // [9, 10]; arr = [1, 2, 3, 4, 5, 6, 7, 8]
arr.splice(7, 0, [9, 10]); // [1, 2, 3, 4, 5, 6, 7, [9, 10], 8];
```

### concat

::: message #3d7e9a 语法
_array.concat(value1[, value2[, ...[, valueN]]])_
:::

合并两个或多个数组（或元素）。此方法不会更改现有数组，而是返回一个新数组（`浅拷贝`）。

-   valueN：要合并的数组或元素。

```js
let arr_1 = [1, 2, 3, 4, 5];
let arr_2 = [6, 7, 8];
arr_1.concat(999, arr_2); // [1, 2, 3, 4, 5, 999, 6, 7, 8]; arr_1 = [1, 2, 3, 4, 5]
```

### join

::: message #3d7e9a 语法
_array.join([separator])_
:::

将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个元素，那么将返回该元素而不使用分隔符。

-   separator：指定一个字符串来分隔数组的每个元素。默认为`,`，若 separator 为空字符串（`''`或`""`），则所有元素之间没有任何字符。

```js
let arr = [1, 2, 3, 4];
arr.join('-'); // 1-2-3-4
```

::: tip
若数组元素为`undefined`或`null`，则会被转化为空字符串。
:::

### sort

::: message #3d7e9a 语法
_array.sort([sortFunction])_
:::

-   sortFunction：用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的 Unicode 位点进行排序。接收两个参数：
    -   firstEl：第一个用于比较的元素。
    -   secondEl：第二个用于比较的元素。

如果指明了 compareFunction ，那么数组会按照调用该函数的返回值排序。即 firstEl 和 secondEl 是两个将要被比较的元素：

-   compareFunction(a, b) > 0：a 排在 b 之前；
-   compareFunction(a, b) > 0：a、b 位置不确定（具体是否会交换得看浏览器如何解析）；
-   compareFunction(a, b) <> 0：b 排在 a 之前。
-   compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 100];
arr.sort(); // [1, 10, 100, 2, 20, 3, 30, 4, 40, 5, 6, 7, 8, 9]
arr.sort((a, b) => a - b); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 100]
```

### reverse

::: message #3d7e9a 语法
_array.reverse()_
:::

将原数组里面的元素顺序颠倒并返回。

```js
let arr = [1, 2, 3, 4];
arr.reverse(); // [4, 3, 2, 1]
```
