---
sidebarDepth: 1
---

# a

::: tip
anchor(锚)，在网页中一般用来定义一个超链接或锚点、邮箱，调用电话API接口、以及协议限定符等。
:::

## 属性

### href

规定链接指向的页面的URL。

### download

规定被下载文件的文件名称。

### rel

规定当前文档与被链接文档之间的关系。

### type

规定被链接文档的的 MIME 类型。

### target

规定在何处打开链接文档。

- _blank: 在新窗口中打开被链接文档；
- _parent：在父框架集中打开被链接文档；
- _self： 默认。在相同的框架中打开被链接文档；
- _top：在整个窗口中打开被链接文档；
- framename：在指定的框架中打开被链接文档。

---

## 常用方式

### 超链接

```html
<a href="https://www.baidu.com/">百度</a> 
```

### 锚点

```html
<body>
    <!-- 给div一个id -->
    <div id="head" style="width:100px;height:50px;background-color:red"></div>
    <div style="width:100px;height:50px;background-color:black"></div>
    <!-- 根据id回到顶部 -->
    <a href="#head">回到页面顶部</a> 
</body>
```

### 邮箱

```html
<a href="mailto:1426282929@qq.com">1426282929@qq.com</a>
```

### 电话

```html
<a href="tel:13266419102">13266419102</a>
```

### 协议限定符

此功能可以在点击链接时强制执行 JavaScript 代码。

```html
<a href="javascript:alert(123);">点击alert</a>
```