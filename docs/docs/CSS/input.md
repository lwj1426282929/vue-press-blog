# input

## 去掉背景色

```css
input {
    background: none;
}
```

## 去掉聚焦后的蓝色边框

```css
input {
    outline: none;
}
```

## 去掉 type=search 自带的清除图标

```css
input[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
}
```

## placeholder 样式

```css
input::-webkit-input-placeholder {
}
```

## 光标颜色

```css
input {
    /* 光标颜色和输入的文本颜色一起改变 */
    color: red;

    /* 只改变光标颜色，不改变输入文本颜色 */
    caret-color: red;
}
```
