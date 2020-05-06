# button-tab 组件封装

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

| 参数                              | 说明                                                   | 类型                    | 默认值                       |
| :-------------------------------- | :----------------------------------------------------- | :---------------------- | :--------------------------- |
| value / v-model                   | 绑定值，在多选模式下为数组                             | string / number / array | <div style="width: 60pt;"/>- |
| <copy>multiple</copy>             | 是否开启多选模式                                       | boolean                 | false                        |
| <copy>flex</copy>                 | 在布局只有一行的情况下设置该属性可以开启`flex`布局     | boolean                 | true                         |
| <copy>height</copy>               | 元素高度                                               | number / string         | 34                           |
| <copy>gutter</copy>               | 在布局只有一行的情况下可以通过该属性设置元素之间的间距 | number / string         | 0                            |
| <copy>default-color</copy>        | 默认字体颜色                                           | string                  | <color color="#999999" />    |
| <copy>active-color</copy>         | 选中时字体颜色                                         | string                  | <color color="#FFFFFF" />    |
| <copy>default-bg-color</copy>     | 默认背景颜色                                           | string                  | <color color="#FFFFFF" />    |
| <copy>active-bg-color</copy>      | 选中时背景颜色                                         | string                  | <color color="#2482FC" />    |
| <copy>default-border-color</copy> | 默认边框颜色                                           | string                  | <color color="#2482FC" />    |
| <copy>active-border-color</copy>  | 选中时边框颜色                                         | string                  | <color color="#2482FC" />    |

### 事件

| 事件名                  | 说明                     | 回调参数                |
| :---------------------- | :----------------------- | :---------------------- |
| <copy>item-click</copy> | 当选项被点击时触发的事件 | 当前点击项的 `value` 值 |

## button-tab-item

### 属性

|        参数        |    说明    |      类型       | 默认值 |
| :----------------: | :--------: | :-------------: | :----: |
| <copy>value</copy> |  选项的值  | string / number |   -    |
| <copy>width</copy> | 选项的宽度 |     string      |   -    |
