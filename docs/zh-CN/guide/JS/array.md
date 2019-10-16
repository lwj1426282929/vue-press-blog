# JS 数据结构之数组

## methods

### 1. indexOf()

```js
const arr = [1, 1, 2, 3, 4]
const index = arr.indexOf(1)  // 0
```

返回元素在数组中<code>第一次出现的索引</code>， 没有返回 <code>-1</code> 。


### 2. toString()

```js
const arr = [1, 2, 3, 4]
const str = arr.toString()  // "1, 2, 3, 4"
```

将数组元素拼接成以 <code>,</code> 分隔的字符串。

### 3.  join()

```js
const arr = [1, 2, 3, 4, 5]
const str = arr.join()  // '1,2,3,4,5'
const str_1 = arr.join('-')  // '1-2-3-4-5'
```

将数组元素以特定形式拼接成字符串。

### 4. concat()

```js
const arr_0 = [1, 2, 3]
const arr_1 = [1, 2, 3]
const arr_2 = [1, 2, 3]
const arr = arr_0.concat(arr_1, arr_2)  // [1, 2, 3, 1, 2, 3, 1, 2, 3]
```

合并多个数组， 并返回一个 <code>新数组</code> 。

### 5. push()

```js
const arr = []
arr.push(1, 2, 3)  // [1, 2, 3]
```

往数组末尾中添加元素，可以 <code>一次添加多个</code> 。

### 6. pop()

```js
const arr = [1, 2, 3]
arr.pop()  // [1, 2]
```

删除数组的最后一个元素， 返回 <code>被删除的元素</code> 。

### 7. shift()

```js
const arr = [1, 2, 3, 4]
arr.shift()  // [2, 3, 4]
```

删除数组的第一个元素， 返回 <code>被删除的元素</code> 。

### 8. unshift()

```js
let arr = [1, 2, 3]
arr.unshift(4, 5, 6)  // [4, 5, 6, 1, 2, 3]
```

往数组起始位置添加元素, 可以 <code>一次添加多个</code> 。

### 9. [splice()]()

```js
const arr = [1, 2, 3, 4]
arr.splice(0, 2)  // [1, 2]  arr = [3, 4]
arr.splice(1, 0, [4, 5, 6])  // []  arr = [3, [4, 5, 6], 4]
```

删除或者添加元素，返回 <code>被删除的元素组成的数组， 添加元素时返回空数组 </code>。参数：起始位置， 需要删除的元素的个数（添加元素时为0），需要添加的元素。

### 10. reverse()

```js
const arr = [1, 2, 3, 4, 5]
arr.reverse()  // [5, 4, 3, 2, 1]
```

对数组进行翻转，返回 <code>翻转后的数组</code> 。

### 11. [sort()]()

```js
const arr = ['d', 'a', 'b', 'c']
arr.sort()  // ['a', 'b', 'c', 'd']
```

对数组进行排序， 默认按照字典顺序(即根据 unicode 编码)进行排序, 对数字类型的元素可能不太友好。

```js
let arr = [5, 3, 9, 0, 1]
arr.sort((num1, num2) => {
  return num1 - num2
})  // [0, 1, 3, 5]
```

自定义排序方法。

### 12. [forEach()]()

```js
let arr = [1, 2, 3, 4, 5]
arr.forEach((item, index) => {
  /* do something */
})
```

遍历数组， 如果对数组元素进行了赋值操作会改变数组本身。

### 13. every()

```js
const arr = [1, 2, 3, 4, 5]
arr.every(item => {
  return item % 2 == 0
})  // false
```

遍历数组，接收一个返回值为 Boolean 类型的函数，对数组中的每个元素使用该函数，如果对于所有元素该函数返回 true ，则该方法返回 true ， 否则返回 false 。

### 14. some()

```js
const arr = [1, 2, 3, 4, 5]
arr.some(item => {
return item % 2 == 0
})  // true
```

与 every() 类似， 接收一个返回值为 Boolean 类型的函数，对数组中的每个元素使用该函数，如果对于某一元素该函数返回 true ，则该方法返回 true ，若都返回 false ， 则返回 false 。

### 15. reduce()

```js
let arr = [1, 2, 3, 4, 5]
arr.reduce((sum, item) => {
  return sum + item
})  // 15
```

接收一个函数，返回一个值， 该方法从一个累加值开始， 不断对累加值和数组中的后续元素调用该函数，最后返回累加值。


### 16. reduceRight()

```js
const arr = ['hello', 'word']
arr.reduceRight((str, item) => {
  return str + '' + item
})  // 'word  hello'
```

与 reduce() 一致， 但是顺序是从右至左执行。

### 17. [map()]()

```js
const arr = [1, 2, 3, 4]
const arr_ = arr.map(item => {
  return item + 1
})  // [2, 3, 4, 5]  arr = [1, 2, 3, 4]
```

与 forEach() 类似， 但是 map() 会返回一个 <code>新数组</code>， 原数组不变, 新数组元素时原数组元素调用函数返回的结果。

### 18. [filter()]()

```js
const arr = [1, 2, 3, 4, 5]
arr.filter(item => {
return item % 2 == 0
})  // [2, 4]  arr = [1, 2, 3, 4, 5]
```

接收一个返回值为 Boolean 类型的函数， 返回一个 <code>新数组</code> ， 新数组中的元素均为原数组中每一项元素调用该函数返回为 true 的元素。