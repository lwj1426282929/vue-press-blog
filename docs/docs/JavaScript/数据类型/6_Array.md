# Array

## Methods

### indexOf

**_Array.indexOf(element[, fromIndex])_**

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

**_Polyfill_**

`indexOf`在`ECMA-262`标准的第 5 版中被加入，但并非所有的浏览器都支持该方法。我们可以加入以下代码使其在没有本地支持的情况下依然能够使用`indexOf`方法：

```js
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(searchElement, fromIndex) {
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

**_Array.lastIndexOf(element[, fromIndex])_**

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

**_Polyfill_**

和`indexOf`一样，`lastIndexOf`也是`ECMA-262`标准的第 5 版中被加入，但并非所有的浏览器都支持该方法。我们可以加入以下代码使其在没有本地支持的情况下依然能够使用`lastIndexOf`方法：

```js
if (!Array.prototype.lastIndexOf) {
    Array.prototype.lastIndexOf = function(searchElement /*, fromIndex*/) {
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

**_Array.find(callback[, thisArg])_**

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

**_Array.findIndex(callback[, thisArg])_**

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

**_Array.includes(valueToFind[, fromIndex])_**

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

**_Array.forEach(callback(currentValue [, index [, array]])[, thisArg])_**

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

**_Array.map(callback(currentValue [, index [, array]])[, thisArg])_**

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

**_Array.every(callback[, thisArg])_**

判断数组的每一项元素是否都通过指定函数，是返回`true`，否则返回`false`。

-   callback：用来测试每个元素的函数，它可以接收三个参数：
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

**_Array.some(callback[, thisArg])_**

判断数组中是否至少有一项元素通过指定函数，是返回`true`，否则返回`false`。

-   callback：用来测试每个元素的函数，它可以接收三个参数：
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

<!-- ### toString

返回一个表示数组及其元素的字符串。

```js
let arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"
``` -->

<!-- ### values

返回一个新的`Array Iterator`对象，该对象包含数组每个索引的值。

```js
let arr = ['a', 'b', 'c'];
let iterator = arr.values();
for (let value of iterator) {
    console.log(value);
}
// a
// b
// c
``` -->

<!-- ### of

返回一个新的`Array`实例。

### join()

返回由数组元素以特定形式（默认 <code>,</code>）拼接成的一个字符串。

### concat()

合并多个数组， 返回一个 <code>新数组</code> 。

### push()

```js
let arr = [];
arr.push(1, 2, 3); // [1, 2, 3]
```

往数组末尾中添加元素，可以一次添加多个。

### pop()

每次删除数组最后一个元素，返回被删除的元素。

### shift()

删除数组的第一个元素， 返回被删除的元素。

### unshift()

往数组起始位置添加元素, 可以一次添加多个。

### splice()

```js
let arr = [1, 2, 3, 4];
arr.splice(0, 2); // [1, 2]  arr = [3, 4]
arr.splice(1, 0, [4, 5, 6]); // []  arr = [3, [4, 5, 6], 4]
```

删除或者添加元素，返回被删除的元素组成的数组， 添加元素时返回空数组。参数：起始位置， 需要删除的元素的个数（添加元素时为 0），需要添加的元素。

### reverse()

对数组进行翻转，返回翻转后的数组。

### sort()

对数组进行排序， 默认按照字典顺序(即基数排序根据数组内元素首字母进行排序)进行排序, 对数字类型的元素可能不太友好。

### forEach()

```js
let arr = [1, 2, 3, 4, 5];
arr.forEach((item, index) => {
    /* do something */
});
```

遍历数组， 可以修改数组元素。

### map()

```js
let arr = [1, 2, 3, 4];
arr.map(item => {
    return item + 1;
}); // [2, 3, 4, 5]  arr = [1, 2, 3, 4]
```

与 forEach()类似， 但是 map 会返回一个新数组， 原数组不变（不能修改数组元素）, 新数组元素时原数组元素调用函数返回的结果。

### filter()

```js
let arr = [1, 2, 3, 4, 5];
arr.filter(item => {
    return item % 2 == 0;
}); // [2, 4]  arr = [1, 2, 3, 4, 5]
```

接收一个返回值为 Boolean 类型的函数， 返回一个新数组， 新数组中的元素均为原数组中每一项元素调用该函数返回为 true 的元素。

### every()

```js
let arr = [1, 2, 3, 4, 5];
arr.every(item => {
    return item % 2 == 0;
}); // false
```

遍历数组，接收一个返回值为 Boolean 类型的函数，对数组中的每个元素使用该函数，如果对于所有元素该函数返回 true，则该方法返回 true， 否则返回 false。

### some()

与 every 类似， 接收一个返回值为 Boolean 类型的函数，对数组中的每个元素使用该函数，如果对于某一元素该函数返回 true，则该方法返回 true，若都返回 false， 则返回 false。

### reduce()

接收一个函数，返回一个值， 该方法从一个累加值开始， 不断对累加值 he 数组中的后续元素调用该函数，最后返回累加值。

### reduceRight()

与 reduce 一致， 但是顺序是从右至左执行。

## 数组去重

<code>for</code> 循环删除重复元素

```js
// for循环删除后面重复的速度最快，可用倒序计算可加快速度
let uniqueArray = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        let item = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            item === arr[j] && (arr.splice(j, 1), j--);
        }
    }
    return arr;
};
```

通过对象属性方式过滤重复元素，如果有重复属性， 说明元素重复。

```js
// 判断对象属性
let uniqueArray = arr => {
    let v,
        r = [],
        o = {};
    for (let i = 0; (v = arr[i]) !== undefined; i++) {
        !o[v] && (r.push(v), (o[v] = true));
    }
    return r;
};
```

通过 <code>Array.filter()</code> 过滤重复元素。

```js
// 数组过滤重复项filter
let uniqueArray = arr => {
    return arr.filter((elem, pos, self) => {
        // 如果没有重复项，返回true
        return self.indexOf(elem, pos + 1) === -1;
    });
};
```

通过 ES6 的 <code>Set</code> 数据结构过滤数组重复项。

```js
let uniqueArray = Array.from(new Set(arr));
```

## 数组排序

### sort()

```js
// 默认按照字符编码进行排序
arr.sort();

// 根据比较函数进行排序
arr.sort((a, b) => {
    return b.number - a.number;
});
```

### 冒泡排序

两两比较顺序,如果顺序错误则交换位置。

```js
function bubbleSort(arr) {
    let i = arr.length - 1,
        j;

    for (; i >= 0; i--) {
        for (j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = [arr[j + 1], (arr[j + 1] = arr[j])][0];
            }
        }
    }

    return arr;
}
```

### 选择排序

在未排序的序列中找到最大（小）的元素与第 1 个元素交换，在剩余元素中继续找最大（小）的元素与第 2 个元素交换，以此类推，直到排序完毕。

```js
function selectionSort(arr) {
    let i = arr.length - 1,
        j,
        buffer,
        special;

    // 采用倒序，提高查找性能
    for (; i >= 0; i--) {
        special = i;
        buffer = arr[i];

        for (j = i - 1; j >= 0; j--) {
            // 正序与倒序取决于这里的判断,max or min
            if (buffer < arr[j]) {
                // 当前的最值位置
                special = j;
                buffer = arr[j];
            }
        }

        // 最值与当前位置的值交换位置
        arr[special] = [arr[i], (arr[i] = buffer)][0];

        return arr;
    }
}
```

### 插入排序

1.从第二位（当前元素）开始从后向前查找

2.若新元素（当前元素的前面）大于当前元素，将新元素移到下一位置

3.重复 2，直到在有序区找到大于或等于新元素的位置

4.将当前元素插到上面找到的位置

5.重复 2~4

```js
function insertionSort(arr) {
    let len = arr.length,
        i = 1,
        j,
        buffer;

    for (; i < len; i++) {
        buffer = arr[i];

        // 在当前元素从后向前遍历,
        // 一旦找到比当前元素大的就进行“元素加位”
        for (j = i - 1; j >= 0 && arr[j] > buffer; j--) {
            arr[j + 1] = arr[j];
        }

        //找到的位置替换为当前元素，比它大的在上面已经“加位”了
        arr[j + 1] = buffer;
    }

    return arr;
}
``` -->
