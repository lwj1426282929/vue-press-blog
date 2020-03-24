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
        let Sta = new Stack([1, 2, 3, 4, 5, 6])
        Sta.push(7)
        console.log(Sta.value());
        Sta.pop()
        console.log(Sta.value());
        console.log(Sta.peek());
    }
}
</script>