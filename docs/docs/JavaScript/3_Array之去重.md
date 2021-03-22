# Array 之去重

## 双重 for 循环

使用两重 for 循环进行比较，如果后面的元素与前面的元素相同，则删除。

```js
let arr = [1, 2, 3, 4, 3, 2, 5]

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] === arr[i]) arr.splice(j, 1)
  }
} // arr = [1, 2, 3, 4]
```

::: tip
该方法使用两重 for 循环，时间复杂度为 <code>$O(n^2)$</code>。耗时较久，且不能过滤重复的`NaN`、`Object`。
:::

## for 循环配合 indexOf

新建一个数组，循环遍历原数组中的元素，如果元素在新数组中已存在，则新数组不添加该元素，否则添加之。

```js
let arr = [1, 2, 3, 4, 3, 2]
let uniq = []
let len = arr.length

for (let i = 0; i < len; i++) {
  if (uniq.indexOf(arr[i]) !== -1) uniq.push(arr[i])
} // uniq = [1, 2, 3, 4]
```

或者判断数组下标，若果元素在数组中的第一次出现的位置不是其在数组中的下标，则说明该元素重复。

```js
let arr = [1, 2, 3, 4, 3, 2]
let uniq = []
let len = arr.length

for (let i = 0; i < len; i++) {
  if (arr.indexOf(arr[i]) === i) uniq.push(arr[i])
} // uniq = [1, 2, 3, 4]
```

::: tip
该方法可以过滤掉重复的`NaN`，但是不能过滤重复的`Object`。
:::

## for 循环配合 includes

与`for`循环配合`indexOf`类似，循环遍历原数组，如果新数组中`includes`原数组元素，则跳过，否则新数组添加之。

```js
let arr = [1, 2, 3, 4, 3, 2]
let uniq = []
let len = arr.length

for (let i = 0; i < len; i++) {
  if (!uniq.includes(arr[i])) uniq.push(arr[i])
} // uniq = [1, 2, 3, 4]
```

::: tip
该方法可以过滤掉重复的`NaN`，但是不能过滤重复的`Object`。
:::

## 利用对象键值进行去重

新建对象，遍历数组，将元素值置为对象的键名，再重新将键名遍历回数组

```js
let arr = [1, 2, 3, 4, 3, 2]
let len = arr.length
let obj = {}

for (let i = 0; i < len; i++) {
  obj[arr[i]] = i
}
let uniq = Object.keys(obj) // [1, 2, 3, 4]
```

::: tip

- 由于`Object.keys()`会返回一个表示给定对象的所有可枚举属性的字符串数组,因此原数组里面的所有元素都会转换成字符串，如果之前类型不同但是转换成字符串之后相同则会被认为是相同的属性而被过滤掉。
- `Object.keys()`会把空数组转换成空字符串返回。所以原数组如果同时存在空数组和空字符串，循环在前面的一个会被过滤掉。
- 所有的对象都会返回`[object Object]`，因此所有的对象（包括空对象）都会被当成重复的元素过滤掉。

:::

## 排序后相邻比较

先将数组排序，排序后元素与相邻元素进行比较，如果相同则删除之。

```js
let arr = [1, 2, 3, 4, 3, 2]
arr.sort()

for (let i = 1; i < arr.length; i++) {
  if (arr[i] === arr[i - 1]) arr.splice(i, 1)
} // [1, 2, 3, 4]
```

或者在排序后配合`reduce`/`reduceRight`进行相邻比较，返回一个新的累计值：

```js
let arr = [1, 2, 3, 4, 3, 2]
arr.sort()

arr.reduce((uniq, item) => {
  if (!uniq.length || uniq[uniq.length - 1] !== item) uniq.push(item)
  return uniq
}, []) // [1, 2, 3, 4]
```

```js
let arr = [1, 2, 3, 4, 3, 2]
arr.sort()

arr.reduceRight((uniq, item) => {
  if (!uniq.length || uniq[uniq.length - 1] !== item) uniq.push(item)
  return uniq
}, []) // [4, 3, 2, 1]
```

::: tip
不能过滤重复的`NaN`、`Object`。
:::

## 利用 Set 数据结构的特性去重

因为`Set`集合里的所有的元素都是唯一的。而且`NaN`在`Set`中会被认为是相同的值，所以可以利用`Set`先对数组里面的元素进行去重，再将 Set 转换成数组:

```js
let arr = Array.from(new Set([1, 2, 3, 4, 3, 2])) // [1, 2, 3, 4]
```

::: tip
不能过滤重复的`Object`。
:::
