# Chrome 无法调用 preventDefault 阻止 touch 事件解决办法

::: tip
<code>Chorme56+</code> 开始为了让页面滚动变得更为流畅，在 window、document 和 body 上注册的 <code>touchstart</code> 和 <code>touchmove</code> 事件处理函数，会默认为是 <code>passive: true</code> 。浏览器忽略默认事件的 <code>preventDefault()</code> , 此时如果手动阻止控制台会报警告：
:::

![image](/note/img/preventDefault.png)

## 解决办法

我的谷歌浏览器版本为 <code>80.0.3970.5 (正式版本) (64 位)</code> 。
![Chrome-version](/note/img/Chrome-version.png)

<code>event.cancelable</code> 浏览器默认行为是否可以被禁用;

<code>event.defaultPrevented</code> 浏览器默认行为是否已经被禁用。

该版本的浏览器下 <code>touchmove</code> 事件的 cancelable 为 true, defaultPrevented 为 false。表示该事件可以被禁用，但是默认行为未被禁用。所以可以通过判断来确定时候阻止默认行为：

```js
if (e.cancelable && !e.defaultPrevented) {
  e.preventDefault();
}
```

<hr>

有些网页上说通过设置禁用触摸事件元素的 css 属性 <code>touch-action: none</code>，然后用 js 获取该元素真实 DOM 元素添加事件处理也可以达到效果：

```js
const ele = document.getElementById('app');
ele.addEventListener(
  'touchmove',
  e => {
    e.preventDefault();
    e.stopPropagation();
  },
  { passive: false },
);
```
