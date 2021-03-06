## 冒泡排序

:::tip
冒泡排序，类似于水中冒泡，较大的数沉下去，较小的数慢慢冒起来，假设从小到大，即为较大的数慢慢往后排，较小的数慢慢往前排。
直观表达，每一趟遍历，将一个最大的数移到序列末尾。即每一趟将最大的数排到末尾。
:::

1. 比较相邻元素，若前一个比后者大，则交换位置；
2. 第一趟第一个数与第二个数比较、交换，随后第二个与第三个比较交换，直到最后一个，此时，最后一位为最大的数；
3. 第二趟将第二大的数移动至倒数第二位；
4. ...
5. 第 n-1 趟将第 n-1 大的数移动至倒数第 n-1 位， 排序结束

```js
// 使用中间变量交换位置
bubbleSort (arr) {
    let temp
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr;
}
```

```js
// 使用位运算交换位置
bubbleSort (arr) {
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                arr[i] = arr[i] ^ arr[j]
                arr[j] = arr[j] ^ arr[i]
                arr[i] = arr[i] ^ arr[j]
            }
        }
    }
    return arr;
}
```

冒泡排序一共需要 `n-1` 趟

时间复杂度：<code>$O(n^2)$</code>

空间复杂度：<code>$O(n)$</code>

## 快速排序

```js
quickSort (arr) {
    // 当数组长度为1或为空时，结束排序
    if(arr.length <= 1) return arr

    // 确定基准值，并从原数组中删除该基准值
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr.splice(pivotIndex, 1)[0]

    // 确定左右数组
    let left = [], right = []

    // 遍历数组，若小于基准值，则放左边数组，否则放右边数组
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    // 递归调用左右子数组
    return [...quickSort(left), pivot, ...quickSort(right)]
}
```

## 希尔排序

## 堆排序

## 计数排序

## 归并排序
