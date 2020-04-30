# button-tab 组件封装

```vue
<template>
    <button-tab v-model="value">
        <button-tab-item value="1">1</button-tab-item>
        <button-tab-item value="2">2</button-tab-item>
        <button-tab-item value="3">3</button-tab-item>
        <button-tab-item value="4">4</button-tab-item>
    </button-tab>
</template>

<script>
export default {
    data(){
        return {
            value: '1'
        }
    }
}

</script>
```

:::demo
<template>
    <button-tab v-model="value">
        <button-tab-item value="1">1</button-tab-item>
        <button-tab-item value="2">2</button-tab-item>
        <button-tab-item value="3">3</button-tab-item>
        <button-tab-item value="4">4</button-tab-item>
    </button-tab>
</template>

<script>
export default {
    data(){
        return {
            value: '1'
        }
    }
}

</script>

:::

## button-tab

### 属性

| 参数               | 说明                                                   | 类型                    | 默认值                    |
| :----------------- | :----------------------------------------------------- | :---------------------- | :------------------------ |
| value / v-model    | 绑定值，在多选模式下为数组                             | string / number / array | -                         |
| multiple           | 是否开启多选模式                                       | boolean                 | false                     |
| flex               | 在布局只有一行的情况下设置该属性可以开启`flex`布局     | boolean                 | true                      |
| height             | 元素高度                                               | number / string         | 34                        |
| gutter             | 在布局只有一行的情况下可以通过该属性设置元素之间的间距 | number / string         | 0                         |
| defaultColor       | 默认字体颜色                                           | string                  | <color color="#999999" /> |
| activeColor        | 选中时字体颜色                                         | string                  | <color color="#FFFFFF" /> |
| defaultBgColor     | 默认背景颜色                                           | string                  | <color color="#FFFFFF" /> |
| activeBgColor      | 选中时背景颜色                                         | string                  | <color color="#2482FC" /> |
| defaultBorderColor | 默认边框颜色                                           | string                  | <color color="#2482FC" /> |
| activeBorderColor  | 选中时边框颜色                                         | string                  | <color color="#2482FC" /> |

### 事件

| 事件名     | 说明                     | 回调参数              |
| :--------- | :----------------------- | :-------------------- |
| item-click | 当选项被点击时触发的事件 | 当前点击项的 value 值 |

## button-tab-item

### 属性

| 参数  |    说明    |      类型       | 默认值 |
| :---: | :--------: | :-------------: | :----: |
| value |  选项的值  | string / number |   -    |
| width | 选项的宽度 |     string      |   -    |
