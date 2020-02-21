# JavaScript 数据类型之 Array

## Methods

### indexOf()

返回 str 在数组中 <code>第一次</code> 出现的索引， 没有返回 <code>-1</code> 。

### toString()

返回字符串。

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
```
