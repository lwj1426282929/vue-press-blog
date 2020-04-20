<template>
    <div>123</div>
</template>

<script>
class Stack {
    #dataStore

    constructor (arr = []) {
        this.#dataStore = arr;
    }

    // 入栈
    push (item) {
        this.#dataStore.push(item);
    }

    // 出栈
    pop () {
        this.#dataStore.pop();
    }

    // 栈顶元素
    peek () {
        return this.#dataStore[this.#dataStore.length - 1]
    }

    // 清空栈
    clear () {
        this.#dataStore = []
    }

    // 站内元素
    value () {
        return [...this.#dataStore];
    }

    // 栈长度
    length () {
        return this.#dataStore.length
    }

    // 判断是否为空
    isEmpty () {
        return !this.#dataStore.length
    }
}
export default {
    name: 'test',

    created () {
        let arr = [10, 7, 9, 11, 22, 33, 4, 2, 0, 1000];
    },

    methods: {
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
    }
}
</script>