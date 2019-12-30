---
sidebarDepth: 0
---

# ElementUI--日期选择器时间选择范围限制

:::tip
官方文档中使用<code>picker-options</code>属性来限制可选择的日期。
:::

## 单个组件

1. 设置选择今天以及今天之后的日期

```js
data(){
    return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        }
    }
}
```

2. 设置选择今天以及今天以前的日期

```js
data(){
    return {
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() > Date.now() - 8.64e6
          }
        }
    }
}
```

3. 设置选择今天之后的日期（不能选择当天）

```js
data (){
    return {
        pickerOptions0: {
            disabledDate(time) {
                return time.getTime() < Date.now();
            }
        }
   }     
} 
```

4. 设置选择今天之前的日期（不能选择当天）

```js
data (){
   return {
       pickerOptions0: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        }
   }     
}    
```

5. 设置选择三个月之前到今天的日期

```js
data (){
   return {
       pickerOptions0: {
          disabledDate(time) {
            let curDate = (new Date()).getTime();
            let three = 90 * 24 * 3600 * 1000;
            let threeMonths = curDate - three;
            return time.getTime() > Date.now() || time.getTime() < threeMonths;;
          }
        },  
   }     
} 
```

6. 设置选择xx-xx之间的日期

```js
data (){
   return {
       pickerOptions0: {
          disabledDate(time) {
            let startDate = moment(start);
            let three = 90 * 24 * 3600 * 1000;
            let threeMonths = curDate - three;
            return time.getTime() > Date.now() || time.getTime() < threeMonths;
          }
        },  
   }     
} 
```

7. 设置选择xx-xx之间的日期（不能选择临界时间）
8. 设置选择xx-xx之外的时间
9. 设置选择xx-xx之外的时间（不能选择临界时间）

## 两个组件

针对选择范围(type="daterange")的日期筛选，类似于单个输入框的情况，直接使用参数time进行判断。

```html
<el-date-picker
       v-model="value1"
       type="date"
       placeholder="开始日期"
       :picker-options="pickerOptions0">
</el-date-picker>
<el-date-picker
       v-model="value2"
       type="date"
       placeholder="结束日期"
       :picker-options="pickerOptions1">
</el-date-picker>
```

```js
data(){
    return {
         pickerOptions0: {
                disabledDate: (time) => {
                    if (this.value2 != "") {
                        return time.getTime() > Date.now() || time.getTime() > this.value2;
                    } else {
                        return time.getTime() > Date.now();
                    }

                }
            },
            pickerOptions1: {
                disabledDate: (time) => {
                    return time.getTime() < this.value1 || time.getTime() > Date.now();
                }
            },
    }      
}       
```