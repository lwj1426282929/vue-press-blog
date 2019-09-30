# CSS 书写规范

## 属性顺序

1. 位置属性(<code>position</code> , <code>top</code> , <code>right</code> , <code>z-index</code> , <code>display</code> , <code>float</code> 等)；
2. 大小(<code>width</code> , <code>height</code> , <code>margin</code>, <code>padding</code>);
3. 文字系列(<code>font</code> , <code>line-height</code> , <code>letter-spacing</code> , <code>color</code> , <code>text-align</code> 等);
4. 边框背景(<code>background</code> , <code>border</code> 等);
5. 其他(<code>animation</code> , <code>transition</code> 等)。

属性顺序一般不做要求。但最好是一类的属性尽量放在一块， 比如宽高位置 、颜色背景 、<code>margin</code> 、 <code>padding</code> 等。

```css
.box {
  position: relative;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  
  width: 200px;
  height: 100px;
  margin: 0;
  padding: 0;
  
  color: #999；
  line-height: 18px;
  font-size: 16px;
  text-align: center;
  
  border: 1px solid red;
  background； none;
}
```

## 尽量使用CSS缩写属性

<code>CSS</code> 有些属性是可以缩写的，比如 <code>padding</code> , <code>margin</code> , <code>font</code> 等等，这样精简代码同时又能提高用户的阅读体验。

```css
.box {
  margin: 0 auto;
  padding: 10px 20px 30px 40px;
  font: 14px serif;
}
```

## 16进制颜色代码缩写

## 不要随意使用 id 选择器

## 类名尽量不要缩写

## 为选择器添加状态前缀

有时候可以给选择器添加一个表示状态的前缀，让语义更明了。比如 <code>.is-active</code> , <code>.is-selected</code> 。

## 常用的 CSS 命名规则

```
/* 布局类 */
头部：header
页面主体：main
内容：container、content
页面外围控制整体佈局宽度：wrapper
左右中：left right center
尾部：footer

/* 功能类 */
导航：nav、nav-bar
子导航：subnav
侧栏：sidebar
栏目：column
登录条：loginbar
标志：logo
广告：banner
热点：hot
新闻：news
下载：download
菜单：menu
子菜单：submenu
搜索：search
友情链接：link
版权：copyright
滚动：scroll
内容：content
标签：tags
文章列表：list
提示信息：msg
小技巧：tips
栏目标题：title
加入：joinus
指南：guide
服务：service
注册：regsiter
状态：status
投票：vote
合作伙伴：partner
摘要: summary
功能区：shop
按钮：btn
标签页：tab
图标: icon
注释：note
指南：guild

/* 状态类 */
当前的: current
上一个：prev
下一个：next

/* 注意事项 */
1.一律小写;
2.尽量用英文;
3.不加下划线;
4.尽量不缩写，除非一看就明白的单词。
```

## CSS 样式表文件命名

- 主要的 index.css main.css
- 基本共用 base.css
- 重置样式 reset.css
- 布局、版面 layout.css
- 主题 themes.css
- 专栏 columns.css
- 文字 font.css
- 表单 forms.css
- 表格 table.css
- 补丁 mend.css
- 打印 print.css