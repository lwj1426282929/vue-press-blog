# input

为基于 Web 的表单创建交互式控件，以便接受来自用户的数据; 可以使用各种类型的输入数据和控件小部件，具体取决于设备和 `user agent`。

## type

| type           | 说明                                                                  | 例子                            |
| :------------- | :-------------------------------------------------------------------- | :------------------------------ |
| text           | 默认，单行文本输入框                                                  | <input type="text" />           |
| number         | 数字输入框，在安卓上抬起的键盘是纯数字键盘，在 ios 上键盘第一排为数字 | <input type="number" />         |
| email          | email 输入框，在移动端上抬起的键盘会有`@`、`.`等键                    | <input type="email" />          |
| url            | url 输入框，在移动端上抬起的键盘会有`.`、`/`、`.com`等键              | <input type="url" />            |
| tel            | 电话号码输入框，移动端抬起的键盘为纯数字和 `+`、`*`、`#`等键          | <input type="tel" />            |
| password       | 密码输入框                                                            | <input type="password" />       |
| search         | 搜索输入框，在抬起的键盘上会将换行替换为搜索文本，且有清除图标        | <input type="search" />         |
| date           | 日期选择控件,在移动端以滚轮形式选择（具体看操作系统）                 | <input type="date" />           |
| datetime-local | 日期选择控件, 不包括时区，在移动端以滚轮形式选择（具体看操作系统）    | <input type="datetime-local" /> |
| month          | 年月选择控件                                                          | <input type="month" />          |
| week           | 周选择控件                                                            | <input type="week" />           |
| time           | 时间选择控件                                                          | <input type="time" />           |
| file           | 文件上传控件                                                          | <input type="file" />           |
| color          | 颜色选择控件                                                          | <input type="color" />          |
| button         | 按钮                                                                  | <input type="button" />         |
| submit         | 提交按钮                                                              | <input type="submit" />         |
| image          | 带图片的提交按钮                                                      | <input type="image" />          |
| checkbox       | 复选框                                                                | <input type="checkbox" />       |
| radio          | 单选按钮                                                              | <input type="radio" />          |
| reset          | 重置按钮                                                              | <input type="reset" />          |
| range          | 范围控件                                                              | <input type="range" />          |

## 属性

## 样式

具体请参考[input样式](/docs/css/input.html)

## 移动端输入框键盘显示搜索文本

要想输入框聚焦后抬起的键盘显示搜索文本，需要将 input 的`type`属性设为`search`。但是 iOS 下仍然会显示`enter`文本。

**解决方案：**

用`form`标签将 input 包裹，并阻止表单默认提交。

```html
<form action="#" οnsubmit="return false">
    <input type="search" />
    <input style="display: none;" />
</form>
```

## 移动端输入框键盘为纯数字

将 type 设置为 number,在安卓下面为纯数字键，但在 ios 下只有第一排才是数字，可以结合 pattern 匹配 value 的模式
Android 下将 input 的 type 设为`number`即可，但是在 iOS 下抬起的键盘仍有其他键，只是第一排为数字键。

**解决方案：**

type 配合`pattern`属性一起使用：

```html
<input type="number" pattern="\d*" />
```
