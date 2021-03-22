# Array 之遍历

## forEach

- `forEach` 遍历的范围在第一次调用 callback 前就会确定；
- `forEach` 被调用时，不会改变原数组；
- 除了抛出异常以外，没有办法中止或跳出 `forEach` 循环；
- 如果使用 `promise` 或 `async` 函数作为 `forEach` 等类似方法的 callback 参数，最好对造成的执行顺序影响多加考虑，否则容易出现错误。

## map

`map`会返回一个新数组，新数组的每一个元素都是原数组对应元素执行函数后的结果。

## reduce

对数组中的每个元素执行一个累计器函数(从左到右执行)，返回一个汇总结果。

- 如果没有提供初始值，`reduce` 会从索引 `1` 的地方开始执行 callback 方法，跳过第一个索引。如果提供初始值，从索引 `0` 开始。
- 如果是空数组且没有提供初始值，则在运行时会抛出 `Uncaught TypeError: Reduce of empty array with no initial value` 错误；
- 如果数组仅有一个元素（无论位置如何）并且没有提供初始值， 或者有提供初始值但是数组为空，那么此唯一值将被返回并且 callback 不会被执行。
- 所以建议最好提供初始值，这样更为安全，以便在数组为空或者不为空时每一项元素都能通过累计器函数。
- `reduce` 不会改变原数组。

## reduceRight

和 `reduce` 一样，只不过顺序从右到左执行。

## flat

按照指定深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回，并不改变原数组。在扁平化过程中，`flat` 会移除数组中的空项，但是不会移除 `undefined`、`null`。

```js
let arr = [1, 2, , undefined, null, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
arr.flat() // [1, 2, undefined, null, 3, 4, [5, 6, [7, 8, [9, 10]]]]
arr.flat(2) // [1, 2, undefined, null, 3, 4, 5, 6, [7, 8, [9, 10]]]
arr.flat(Infinity) // [1, 2, undefined, null, 3, 4, 5, 6, 7, 8, 9, 10]
```

## flatMap

返回一个新数组，该数组每一项都是原数组元素执行回调函数的结果，并且结构深度为 `1`。
该方法与深度为 1 的 `flat` 作用几乎相同，但 `flatMap` 通常在合并成一种方法的效率稍微高一些， 而且 `flapMap` 可以用于过滤一些元素。

```js
let arr = [1, 2, 3, 4]
arr.flatMap((item) => {
  return [item * 2]
}) // [2, 4, 6, 8]; arr = [1, 2, 3, 4]

arr.flatMap((item) => {
  if (item > 2) return item
  return []
}) // [3, 4]
```

## filter

遍历数组元素，返回一个由所有满足过滤条件的元素所组成的新数组，如果没有元素满足过滤条件，则返回空数组。

```js
let arr = [1, 2, 3, 4]
arr.filter((item) => {
  return item > 2
}) // [3, 4]
```

## every

判断数组的每一项元素是否都通过指定函数，是返回 true，否则返回 false。

## some

判断数组中是否至少有一项元素通过指定函数，是返回 true，否则返回 false。

## forEach、for、for...of、for...in 的性能比较

```js
const arr = new Array(10000)
const len = arr.length

console.time('forEach')
arr.forEach((item) => {})
console.timeEnd('forEach') // 0.028076171875 ms

console.time('for')
for (let i = 0; i < len; i++) {}
console.timeEnd('for') // 0.15283203125 ms

console.time('for...of')
for (let item of arr) {
}
console.timeEnd('for...of') // 0.60302734375 ms

console.time('for...in')
for (let i in arr) {
}
console.timeEnd('for...in') // 0.068115234375 ms
```

::: tip 注意
以上时间因执行平台不同或其他原因可能会有所差异。
:::

在性能上： `forEach > for...in > for > for...of`
