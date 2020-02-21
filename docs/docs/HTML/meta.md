---
sidebarDepth: 1
---

# meta

[[toc]]

::: tip
meta 标签提供关于 HTML 文档的元数据。它不会显示在页面上，但是对于机器是可读的。可用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 web 服务。该标签一共有 name、http-equiv、content、scheme 和 charset 属性
:::

## name

供浏览器进行解析，对于一些浏览器兼容性问题，name 属性是最常用的

## http-equiv

添加 http 头部内容，对一些自定义的或者需要额外添加的 http 头部内容需要发送到浏览器中，可以使用该属性。

## content

对 name 或 http-equiv 属性进行补充说明

## scheme

定义用于翻译 content 属性值的格式。HTML5 不支持该属性

## charset

HTML5 新属性，代替了 scheme，使字符集的定义更加容易

## 常用 meta 标签

### 1. charset

charset 是声明文档使用的字符编码，用以解决乱码问题，在 <code>head</code> 中位于第一行。

```html
<!-- HTML4 -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<!-- HTML5 -->
<meta charset="utf-8" />
```

### 2. 禁止百度转码

百度会自动对网页进行转码，该标签可以禁止百度自动转码

```html
<meta http-equiv="Cache-Control" content="no-siteapp" />
```

### 3. SEO 优化

```html
<!-- 页面关键词 keywords -->
<meta name="keywords" content="" />

<!-- 页面描述内容 description -->
<meta name="description" content="" />

<!-- 定义网页作者 author -->
<meta name="author" content="" />

<!-- 定义网页搜索引擎索引方式，
     robots指所有搜索引擎，也可以特指某一搜索引擎如Googlebot、Baiduspide等，
     content有index，follow,noindex,nofollow,none,all。
     index: 允许搜索引擎抓取这个页面
     follow: 允许搜索引擎沿着该页面上的链接继续抓取 -->
<meta name="robots" content="index, follow" />
```

### 4. viewport

viewport 主要是影响移动端页面布局

```html
<!-- width viewport的宽度(数值/device-width)
     height viewport的高度(数值/device-height)
     initial-scale 初始缩放比例
     maximum-scale 最大缩放比例
     minimum-scale 最小缩放比例
     user-scalable 是否允许用户缩放(yes/no) -->
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
/>
```

### 5. Microsoft Internet Explorer

```html
<!-- 优先使用ie最新版本 -->
<meta http-equiv="x-ua-compatible" content="ie=edge" />

<!-- 是否开启cleartype显示效果 -->
<meta http-equiv="cleartype" content="on" />

<meta name="skype_toolbar" content="skype_toolbar_parser_compatible" />

<!-- Pinned Site -->
<!-- IE 10 / Windows 8 -->
<meta name="msapplication-TileImage" content="pinned-tile-144.png" />
<meta name="msapplication-TileColor" content="#009900" />

<!-- IE 11 / Windows 9.1 -->
<meta name="msapplication-config" content="ieconfig.xml" />
```

### 6. Google Chrome

```html
<!-- 优先使用最新的chrome版本 -->
<meta http-equiv="X-UA-Compatible" content="chrome=1" />

<!-- 禁止Google自动翻译 -->
<meta name="google" value="notranslate" />
```

### 7. 360 浏览器

```html
<!-- 选择使用的浏览器解析内核 -->
<meta name="renderer" content="webkit|ie-comp|ie-stand" />
```

### 8. UC 手机浏览器

```html
<!-- 将屏幕锁定在特定的方向 -->
<meta name="screen-orientation" content="landscape/portrait" />

<!-- 全屏显示页面 -->
<meta name="full-screen" content="yes" />

<!-- 强制图片显示，即使是"text mode" -->
<meta name="imagemode" content="force" />

<!-- 应用模式，默认将全屏，禁止长按菜单，禁止手势，标准排版，强制图片显示。 -->
<meta name="browsermode" content="application" />

<!-- 禁止夜间模式显示 -->
<meta name="nightmode" content="disable" />

<!-- 使用适屏模式显示 -->
<meta name="layoutmode" content="fitscreen" />

<!-- 当页面有太多文字时禁止缩放 -->
<meta name="wap-font-scale" content="no" />
```

### 9. QQ 手机浏览器

```html
<!-- 锁定屏幕在特定方向 -->
<meta name="x5-orientation" content="landscape/portrait" />

<!-- 全屏显示 -->
<meta name="x5-fullscreen" content="true" />

<!-- 页面将以应用模式显示 -->
<meta name="x5-page-mode" content="app" />
```

### 10. Apple iOS

```html
<!-- 添加智能 App 广告条 Smart App Banner（iOS 6+ Safari） -->
<meta
  name="apple-itunes-app"
  content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL"
/>

<!-- 禁止自动探测并格式化手机号码、邮箱 -->
<meta name="format-detection" content="telephone=no, email=no" />

<!-- 添加到主屏 -->
<meta name="apple-mobile-web-app-capable" content="yes" />

<!-- 设置状态栏的背景颜色,只有在 “apple-mobile-web-app-capable” content=”yes” 时生效 -->
<meta name="apple-mobile-web-app-status-bar-style" content="black" />

<!-- 添加到主屏后的标题 -->
<meta name="apple-mobile-web-app-title" content="App Title" />
```

### 11. Google Android

```html
<!-- 添加到主屏 -->
<meta name="theme-color" content="#E64545" />
<meta name="mobile-web-app-capable" content="yes" />
```

### 12. APP Links

```html
<!-- iOS -->
<meta property="al:ios:url" content="applinks://docs" />
<meta property="al:ios:app_store_id" content="12345" />
<meta property="al:ios:app_name" content="App Links" />

<!-- Android -->
<meta property="al:android:url" content="applinks://docs" />
<meta property="al:android:app_name" content="App Links" />
<meta property="al:android:package" content="org.applinks" />

<!-- Web Fallback -->
<meta property="al:web:url" content="http://applinks.org/documentation" />
```

### 13. 定义每个多少秒刷新一次页面

```html
<meta http-equiv="refresh" content="30" />
```

### 14. 启用 360 浏览器的极速模式(webkit)

```html
<meta name="renderer" content="webkit" />
```

### 15. 针对手持设备优化，主要是针对一些老的不识别 viewport 的浏览器，比如黑莓

```html
<meta name="HandheldFriendly" content="true" />
```

### 16. 微软的老式浏览器

```html
<meta name="MobileOptimized" content="320" />
```

### 17. windows phone 点击无高光

```html
<meta name="msapplication-tap-highlight" content="no" />
```
