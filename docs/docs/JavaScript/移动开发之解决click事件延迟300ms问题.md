---
sidebarDepth: 0
---

# 移动开发之解决 click 事件延迟 300ms 问题

大多数基于触摸的浏览器设备，在点击时都会有个 300ms 的事件触发等待时间, 浏览器以此来判断是单击还是双击事件。这就导致有些时候本应单击的事件但是由于用户频繁的点击操作使之不触发， 频繁点击下来就给用户造成一种卡顿的现象。

解决办法：

## 禁用缩放 （chrome 和 firefox）

在 chrome 和 firefox 的移动版本中，如果禁用了页面缩放，那么着 300ms 的延迟就会自动消失。

```html
<meta name="viewport" content="width=device-width, user-scalable=no">
```

或

```html
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
```

但是这一方案在 safari 上并不起作用，还会降低有视觉或运动障碍用户的可访问性。

## 设置 viewport 的 device-width （chrome 32+）

在 chrome 32+ 中，如果设置了 <code>viewport</code> 的宽度小于或等于物理设备的宽度，那么也会达到禁用缩放的效果。

```html
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=3">
```

## 使用指针事件 （IE10+）

微软已经针对触摸问题发布了具体的规范，例如：在你滚屏的时候 <code>pointerup</code> 事件并不会被触发。

这有一个非标准的 CSS 触摸 <code>action</code> 属性，它允许你移除特定元素或整个文档的触发延迟，而无需禁用缩放：

```css
a, button, .myelements {
  -ms-touch-action: manipulation; /* IE10  */
  touch-action: manipulation;     /* IE11+ */
}
```

## 使用fastclick.js

<code>FastClick</code> 是 FT Labs 专门为解决移动端浏览器 300 毫秒点击延迟问题所开发的一个轻量级的库。简而言之，<code>FastClick</code> 在检测到 touchend 事件的时候，会通过 DOM 自定义事件立即触发一个模拟 click 事件，并把浏览器在 300 毫秒之后真正触发的 click 事件阻止掉。

```js
import FastClick from 'fastclick';

// 修复点击300ms延迟
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);
  }, false);
}
```

但是引入 <code>FastClick</code> 后会造成输入框、文本框无法聚焦的情况， 需要多次点击或双击才能聚焦， 弹出键盘：

```js
// 修复因引入FastClick导致输入框不能聚焦问题
FastClick.prototype.focus = function (targetElement) {
  targetElement.selectionStart = targetElement.selectionEnd = targetElement.value.length;
  targetElement.focus();
};
```