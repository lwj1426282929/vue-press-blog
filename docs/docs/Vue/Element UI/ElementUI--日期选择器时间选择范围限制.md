---
sidebarDepth: 0
---

# Element UI--日期选择器时间选择范围限制

:::tip
使用`picker-options`的`disabledDate`属性来限制可选择的日期。`disabledDate`接受一个函数，参数为日历中的每一个日期对象，通过与指定日期进行比较返回一个布尔值，true 代表禁用，不能选择。
:::

## 单个组件

1. 选择今天及今天以后的日期

```js
data(){
    return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7
          }
        }
    }
}
```

2. 选择今天以后的日期（不能选择当天）

```js
data (){
    return {
        pickerOptions: {
            disabledDate(time) {
                return time.getTime() < Date.now()
            }
        }
   }
}
```

3. 选择今天及今天以前的日期

```js
data(){
    return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now() - 8.64e6
          }
        }
    }
}
```

4. 选择今天以前的日期（不能选择当天）

```js
data (){
   return {
       pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now() - 24 * 60 * 60 * 1000
          }
        }
   }
}
```

5. 选择三个月之前到今天的日期

```js
data (){
   return {
       pickerOptions: {
          disabledDate(time) {
            const startDate = moment().subtract(3, 'month')
            return time.getTime() < moment(startDate).valueOf() || time.getTime() > Date.now()
          }
        },
   }
}
```

6. 选择三个月前到今天的日期（不能选择当天）

```js
data (){
   return {
       pickerOptions: {
          disabledDate(time) {
            const startDate = moment().subtract(3, 'month')
            return time.getTime() < moment(startDate).valueOf() || time.getTime() > Date.now() - 8.64e7
          }
        },
   }
}
```

7. 选择今天到三个月后的日期

```js
data (){
   return {
       pickerOptions: {
          disabledDate(time) {
            const endDate = moment().add(3, 'month')
            return time.getTime() < Date.now() - 8.64e7 || time.getTime() > moment(endDate).valueOf()
          }
        },
   }
}
```

8. 选择今天到三个月后的日期（不能选择当天）

```js
data (){
   return {
       pickerOptions: {
          disabledDate(time) {
            const endDate = moment().add(3, 'month')
          return time.getTime() < Date.now() || time.getTime() > moment(endDate).valueOf()
          }
        },
   }
}
```

## 两个组件

:::demo
<template>
  <div>
    <el-date-picker v-model="value1" type="date" ref="date-picker-1" placeholder="请选择开始日期" :picker-options="pickerOptions1" @change="change1"></el-date-picker>
    <el-date-picker v-model="value2" type="date" ref="date-picker-2" placeholder="请选择结束日期" :picker-options="pickerOptions2" @change="change2"></el-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    let this_ = this
    return {
      value1: '',
      value2: '',
      pickerOptions1: {
        disabledDate(time){
          if(this_.value2) return time.getTime() > new Date(this_.value2).getTime()
        }
      },
      pickerOptions2: {
        disabledDate(time){
          if(this_.value1) return time.getTime() < new Date(this_.value1).getTime()
        }
      }
    }
  },
  methods: {
    // 选中开始日期
    change1() {
      if(!this.value2) this.$refs['date-picker-2'].focus()
    },

    // 选中结束日期
    change2() {
      if(!this.value1) this.$refs['date-picker-1'].focus()
    }
  }
}
</script>
:::

