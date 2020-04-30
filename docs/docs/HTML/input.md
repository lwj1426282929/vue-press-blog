# input

为基于 Web 的表单创建交互式控件，以便接受来自用户的数据; 可以使用各种类型的输入数据和控件小部件，具体取决于设备和 `user agent`。

## 属性

| 属性           | type                             | 描述                                                 |
| :------------- | :------------------------------- | :--------------------------------------------------- |
| `type`         | 所有                             | 控件类型，详见[type](#type)                          |
| `value`        | 所有                             | 控件值                                               |
| `name`         | 所有                             | 控件名字，以 name:value 键值对的形式随表单一起提交   |
| `disabled`     | 所有                             | 是否禁用该控件                                       |
| `autofocus`    | 所有                             | 自动聚焦该控件                                       |
| `autocomplete` | 所有                             | 自动填充                                             |
| form           | 所有                             | 将该控件和一个 form 元素联系在一起                   |
| `required`     |                                  | 是否必填                                             |
| `readonly`     |                                  | 只读，不可编辑                                       |
| list           |                                  | 自动填充选项的\<datalist\>的 id 值                   |
| `checked`      | radio, checkbox                  | 是否选中                                             |
| `accept`       | file                             | 用于规定文件上传控件中期望的文件类型                 |
| `capture`      | file                             | 文件上传控件中媒体拍摄的方式                         |
| `multiple`     | file, email                      | 是否允许多个值                                       |
| alt            | image                            | \<img\>的 alt 属性                                   |
| width          | image                            | \<img\>的 width 属性                                 |
| height         | image                            | \<img\>的 height 属性                                |
| src            | image                            | \<img\>的 src 属性                                   |
| formaction     | image, submit                    | 用于提交表单的 URL                                   |
| formenctype    | image, submit                    | 表单数据集的编码方式，用于表单提交                   |
| formmethod     | image, submit                    | 用于表单提交的 HTTP 方法                             |
| formnovalidate | image, submit                    | 提交表单时绕过对表单控件的验证                       |
| formtarget     | image, submit                    | 表单提交的浏览上下文                                 |
| dirname        | text, search                     | 表单区域的一个名字，用于在提交表单时发送元素的方向性 |
| `min`          | number                           | 最小值                                               |
| `max`          | number                           | 最大值                                               |
| `step`         | number                           | 有效的递增值                                         |
| placeholder    | password, search, tel, text, url | 当表单控件为空时，控件中显示的内容                   |
| `minlength`    | password, search, tel, text, url | value 的最小长度（最少字符数目）                     |
| `maxlength`    | password, search, tel, text, url | value 的最大长度（最多字符数目）                     |
| size           | password, email, tel, text       | 控件大小                                             |
| `pattern`      | password, tel, text              | 匹配有效 value 的模式（pattern）                     |

:::tip disabled 和 readonly 的区别

1. disabled 针对所有的表单元素都有效，readonly 只针对 input 和 textarea 生效；
2. 都能够使该控件的值不可编辑，但 disabled 还能禁用该控件，使 form 表单提交时不提交该控件的值。
   :::

## type

| type           | 说明                                                                  | 例子                            |
| :------------- | :-------------------------------------------------------------------- | :------------------------------ |
| `text`         | 默认，单行文本输入框                                                  | <input type="text" />           |
| `number`       | 数字输入框，在安卓上抬起的键盘是纯数字键盘，在 ios 上键盘第一排为数字 | <input type="number" />         |
| `email`        | email 输入框，在移动端上抬起的键盘会有`@`、`.`等键                    | <input type="email" />          |
| `url`          | url 输入框，在移动端上抬起的键盘会有`.`、`/`、`.com`等键              | <input type="url" />            |
| `tel`          | 电话号码输入框，移动端抬起的键盘为纯数字和 `+`、`*`、`#`等键          | <input type="tel" />            |
| `password`     | 密码输入框                                                            | <input type="password" />       |
| `search`       | 搜索输入框，在抬起的键盘上会将换行替换为搜索文本，且有清除图标        | <input type="search" />         |
| date           | 日期选择控件,在移动端以滚轮形式选择（具体看操作系统）                 | <input type="date" />           |
| datetime-local | 日期选择控件, 不包括时区，在移动端以滚轮形式选择（具体看操作系统）    | <input type="datetime-local" /> |
| month          | 年月选择控件                                                          | <input type="month" />          |
| week           | 周选择控件                                                            | <input type="week" />           |
| time           | 时间选择控件                                                          | <input type="time" />           |
| `file`         | 文件上传控件                                                          | <input type="file" />           |
| color          | 颜色选择控件                                                          | <input type="color" />          |
| button         | 按钮                                                                  | <input type="button" />         |
| submit         | 提交按钮                                                              | <input type="submit" />         |
| image          | 带图片的提交按钮                                                      | <input type="image" />          |
| `checkbox`     | 复选框                                                                | <input type="checkbox" />       |
| `radio`        | 单选按钮                                                              | <input type="radio" />          |
| reset          | 重置按钮                                                              | <input type="reset" />          |
| range          | 范围控件                                                              | <input type="range" />          |

## 样式

具体请参考[input 样式](/docs/css/input.html)

## 移动端输入框键盘显示搜索文本

要想输入框聚焦后抬起的键盘显示搜索文本，需要将 input 的`type`属性设为`search`。但是 iOS 下仍然会显示`enter`文本。

**解决方案：**

用`form`标签将 input 包裹，并阻止表单默认提交。

```html
<form action="#" οnsubmit="return false">
    <input type="search" />
    <input type="hidden" />
</form>
```

::: tip 阻止表单默认提交

1. 将 form 的 action 属性置为<code>&nbsp;</code>或者`#`,同时 onsubmit 事件`return false`。
2. 在 form 表单内不使用 `type=submit` 的 input。在 form 最后添加一个`type=hidden`的 input。
   :::

## 移动端输入框键盘为纯数字

将 type 设置为 number,在安卓下面为纯数字键，但在 ios 下只有第一排才是数字，可以结合 pattern 匹配 value 的模式
Android 下将 input 的 type 设为`number`即可，但是在 iOS 下抬起的键盘仍有其他键，只是第一排为数字键。

**解决方案：**

type 配合`pattern`属性一起使用：

```html
<input type="number" pattern="\d*" />
```
