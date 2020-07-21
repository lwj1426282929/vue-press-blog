---
sidebarDepth: 1
---

# 常见的 CSS 重置样式

## 腾讯

```css
body,
ol,
ul,
h1,
h2,
h3,
h4,
h5,
h6,
p,
th,
td,
dl,
dd,
form,
fieldset,
legend,
input,
textarea,
select {
  margin: 0;
  padding: 0;
}
body {
  font: 12px '宋体', 'Arial Narrow', HELVETICA;
  background: #fff;
  -webkit-text-size-adjust: 100%;
}
a {
  color: #172c45;
  text-decoration: none;
}
a:hover {
  color: #cd0200;
  text-decoration: underline;
}
em {
  font-style: normal;
}
li {
  list-style: none;
}
img {
  border: 0;
  vertical-align: middle;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
p {
  word-wrap: break-word;
}
```

## 淘宝

```css
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
}
body,
button,
input,
select,
textarea {
  font: 12px/1.5tahoma, arial, \5b8b\4f53;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
address,
cite,
dfn,
em,
var {
  font-style: normal;
}
code,
kbd,
pre,
samp {
  font-family: couriernew, courier, monospace;
}
small {
  font-size: 12px;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
sup {
  vertical-align: text-top;
}
sub {
  vertical-align: text-bottom;
}
legend {
  color: #000;
}
fieldset,
img {
  border: 0;
}
button,
input,
select,
textarea {
  font-size: 100%;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
```

## 百度

```css
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
}
html {
  color: #000;
  overflow-y: scroll;
  overflow: -moz-scrollbars-vertical;
}
body,
button,
input,
select,
textarea {
  font-size: 12px;
  font-family: arial, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', '宋体',
    \5b8b\4f53, Tahoma, Arial, Helvetica, STHeiti;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
em {
  font-style: normal;
}
small {
  font-size: 12px;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
legend {
  color: #000;
}
fieldset,
img {
  border: 0;
}
button,
input,
select,
textarea {
  font-size: 100%;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
img {
  -ms-interpolation-mode: bicubic;
}
textarea {
  resize: vertical;
}
.left {
  float: left;
}
.right {
  float: right;
}
.overflow {
  overflow: hidden;
}
.hide {
  display: none;
}
.block {
  display: block;
}
.inline {
  display: inline;
}
.error {
  color: #f00;
  font-size: 12px;
}
label,
button {
  cursor: pointer;
}
.clearfix:after {
  content: '\20';
  display: block;
  height: 0;
  clear: both;
}
.clearfix {
  zoom: 1;
}
.clear {
  clear: both;
  height: 0;
  line-height: 0;
  font-size: 0;
  visibility: hidden;
  overflow: hidden;
}
.wordwrap {
  word-break: break-all;
  word-wrap: break-word;
}
pre.wordwrap {
  white-space: pre-wrap;
}
body {
  text-align: center;
}
body,
form {
  position: relative;
}
td {
  text-align: left;
}
img {
  border: 0;
}
```

## 新浪

```css
/* 初始化CSS */
html,
body,
ul,
li,
ol,
dl,
dd,
dt,
p,
h1,
h2,
h3,
h4,
h5,
h6,
form,
fieldset,
legend,
img {
  margin: 0;
  padding: 0;
}
fieldset,
img {
  border: none;
}
img {
  display: block;
}
address,
caption,
cite,
code,
dfn,
th,
var {
  font-style: normal;
  font-weight: normal;
}
ul,
ol {
  list-style: none;
}
input {
  padding-top: 0;
  padding-bottom: 0;
  font-family: 'SimSun', '宋体';
}
input::-moz-focus-inner {
  border: none;
  padding: 0;
}
select,
input {
  vertical-align: middle;
}
select,
input,
textarea {
  font-size: 12px;
  margin: 0;
}
input[type='text'],
input[type='password'],
textarea {
  outline-style: none;
  -webkit-appearance: none;
}
textarea {
  resize: none;
}
table {
  border-collapse: collapse;
}
body {
  color: #333;
  padding: 5px 0;
  font: 12px/20px 'SimSun', '宋体', 'Arial Narrow', HELVETICA;
  background: #fff; /* overflow-y:scroll;*/
}
.clearfix:after {
  content: '.';
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
.clearfix {
  zoom: 1;
}
.clearit {
  clear: both;
  height: 0;
  font-size: 0;
  overflow: hidden;
}
a {
  color: #666;
  text-decoration: none;
}
a:visited {
  color: #666;
}
a:hover,
a:active,
a:focus {
  color: #ff8400;
  text-decoration: underline;
}
```

## 网易

```css
html {
  overflow-y: scroll;
}
body {
  margin: 0;
  padding: 0;
  font: 12px/1.5 \5b8b\4f53, Arial, sans-serif; /*background:#ffffff;*/
}
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
textarea,
blockquote,
p {
  padding: 0;
  margin: 0;
}
table,
td,
tr,
th {
  font-size: 12px;
}
ol,
ul {
  list-style: none;
}
li {
  list-style-type: none;
}
img {
  vertical-align: top;
  border: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: normal;
}
address,
cite,
code,
em,
th,
i {
  font-weight: normal;
  font-style: normal;
}
.hx a,
.hx em,
.fB {
  font-weight: bold;
}
.clearfix {
  *zoom: 1;
}
.clearfix:after {
  display: block;
  overflow: hidden;
  clear: both;
  height: 0;
  visibility: hidden;
  content: '.';
}
a {
  color: #252525;
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  color: #ba2636;
  text-decoration: underline;
}
a:active {
  color: #ba2636;
}
```

## 搜狐

```css
/* 全局CSS定义 */
body {
  font-family: '\5B8B\4F53', 'Arial Narrow', HELVETICA;
  text-align: center;
  margin: 0 auto;
  padding: 0;
  background: #fff;
  font-size: 12px;
  color: #333;
}
body > div {
  text-align: center;
  margin-right: auto;
  margin-left: auto;
}
div,
form,
ul,
ol,
li,
span,
p {
  margin: 0;
  padding: 0;
  border: 0;
}
img,
a img {
  border: 0;
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-weight: normal;
}
ul,
ol,
li {
  list-style: none;
}
table,
td,
input {
  font-size: 12px;
  padding: 0;
}
/* 默认链接颜色 */
a {
  outline-style: none;
  color: #333;
  text-decoration: none;
}
a:hover {
  color: #c00;
  text-decoration: underline;
}

/*清除链接虚框*/
/*a,area {blr:expression(this.onFocus=this.blur()) }  for IE 
:focus {-moz-outline-style: none; }  for Firefox   
*/
```

## 优酷

```css
@charset "utf-8";
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
nav,
section {
  display: block;
}
audio,
canvas,
video {
  display: inline-block;
  *display: inline;
  *zoom: 1;
}
audio:not([controls]) {
  display: none;
}
html {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
a:focus {
  outline: thin dotted #333;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
a:hover,
a:active {
  outline: 0;
}
figure {
  padding: 0;
  margin: 0;
}
sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
img {
  vertical-align: middle;
  border: 0;
  -ms-interpolation-mode: bicubic;
}
button,
input,
select,
textarea {
  margin: 0;
  font-size: 100%;
  vertical-align: middle;
}
button,
input {
  *overflow: visible;
  line-height: normal;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  padding: 0;
  border: 0;
}
button,
input[type='button'],
input[type='reset'],
input[type='submit'] {
  -webkit-appearance: button;
  cursor: pointer;
}
input[type='search'] {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-appearance: textfield;
}
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
textarea {
  overflow: auto;
  vertical-align: top;
}
ol,
ul,
dl {
  list-style: none;
}
body,
p,
ol,
ul,
dl {
  padding: 0;
  margin: 0;
}
a:link,
a:visited {
  text-decoration: none;
  color: #555;
}
a:hover {
  color: #c31;
}
a.white {
  color: #fff;
}
a.blue {
  color: #3399e0;
}
```

## 美团

```css
blockquote,
body,
code,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
input,
legend,
li,
ol,
p,
pre,
td,
textarea,
th,
ul {
  margin: 0;
  padding: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
fieldset,
img {
  border: 0;
}
address,
caption,
cite,
code,
dfn,
em,
var {
  font-style: normal;
  font-weight: 400;
}
li {
  list-style: none;
}
caption,
th {
  text-align: left;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
q:after,
q:before {
  content: '';
}
abbr,
acronym {
  border: 0;
  font-variant: normal;
}
sup {
  vertical-align: text-top;
}
sub {
  vertical-align: text-bottom;
}
input,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  *font-size: 100%;
  font-weight: inherit;
}
legend {
  color: #333;
}
html {
  background-color: #eee;
}
body {
  font: 400 14px/1.5 'Hiragino Sans GB', 'WenQuanYi Micro Hei', tahoma, sans-serif;
  color: #666;
  background-color: #fff;
}
a {
  color: #2bb8aa;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Hiragino Sans GB', ' Microsoft YaHei', 'WenQuanYi Micro Hei',
    arial, sans-serif;
  color: #333;
  -webkit-font-smoothing: antialiased;
}
input[type='password'] {
  font-family: arial, sans-serif;
}
```
