# Array 之常用方法

## 查找元素、判断是否包含某元素

- **indexOf**
- **lastIndexOf**
- **find**
- **findIndex**
- **includes**

**indexOf、find、findIndex、includes 性能比较**

```js
const arr = new Array(10000)
const el = 9999
arr.forEach((item, index) => {
  item = index
})

console.time('indexOf')
arr.indexOf(el)
console.timeEnd('indexOf') // 0.010009765625 ms

console.time('find')
arr.find((item) => {
  item === el
})
console.timeEnd('find') //  0.289794921875 ms

console.time('findIndex')
arr.findIndex((item) => {
  item === el
})
console.timeEnd('findIndex') // 0.37109375 ms

console.time('includes')
arr.includes(el)
console.timeEnd('includes') // 0.01318359375 ms
```

**性能：**`indexOf > includes > find > findIndex`

## 遍历

详见[Array 之遍历](./1_Array之遍历)。

## 添加元素

- **push**
- **unshift**
- **splice**

```js
let arr = [1, 2, 3, 4]
arr.splice(2, 0, 5) // [1, 2, 5, 3, 4];
```

- **concat**

## 删除元素

- **pop**
- **shift**
- **splice**

## 改变位置

- **sort**
- **reverse**

## 其它

- **isArray**
- **slice**:返回从原数组中提取 `（浅拷贝）` 下来的子数组（包含开始位置，但不包含结束位置），原数组不改变。
- **join**
- **copyWithin**:浅拷贝数组的一部分到该数组的另一位置（覆盖），并返回改变后的数组。

```js
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
arr.copyWithin(0, 3, 5) // ['d', 'e', 'c', 'd', 'e', 'f', 'g']
```

- **fill**：用一个固定值填充一个数组中从起始索引到终止索引内的全部元素但不包括终止索引。返回修改后的数组。

```js
let arr = [1, 2, 3, 4, 5, 6, 7]
arr.fill(6, 2, 4) // [1, 2, 6, 6, 5, 6, 7]
```
