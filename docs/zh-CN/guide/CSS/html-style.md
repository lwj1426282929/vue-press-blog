# 常用 HTML 样式

## a

### a 链接状态

- <code>link</code> 未访问状态
- <code>visited</code> 已访问状态
- <code>hover</code> 鼠标悬浮状态
- <code>active</code> 激活状态，即鼠标按下时的状态

### 样式顺序

- a:hover 放置在 a:link 与 a:visited 之后
- a:active 放置在 a:hover 之后

```
// a:link 与 a:visited 可以互换， 但最好 a:link 放在最前面
a:link  a:visited   a:hover    a:active
```

## button

### button 状态

- 普通状态
- <code>hover</code> 鼠标悬停状态
- <code>active</code> 点击状态
- <code>focus</code> 取得焦点状态

### 普通状态

```css
.btn {
  background: #4CAF50;
  border: 0 none;
  text-align: center;
}
```

### hover 状态

```css
.btn:hover {
  background: #4CAF68;
}
```

### active 点击状态

该状态在点击后样式恢复为普通状态。
```css
/* 改样式在点击时会按下， 点击后弹起 */
.btn:active {
  position: relative;
  top: 4px;
  box-shadow: inset 0 3px 5px 0 rgba(0, 0, 0, .2);
  outline: 0;
}
```

### focus 取得焦点状态

该状态下的样式在点击后仍会起作用，不会恢复成普通状态。
```css
/* 改样式在点击时会按下， 点击后不弹起 */
.btn:focus {
  position: relative;
  top: 4px;
  box-shadow: inset 0 3px 5px 0 rgba(0, 0, 0, .2);
  outline: 0;
}
```

### 禁用按钮

```css
.btn.disabled {
  opacity: 0.6;
  cursor: not-allowed; /* 禁用 */
}
```