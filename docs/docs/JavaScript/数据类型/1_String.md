# String

## methods

### fromCharCode

返回由指定的`UTF-16`代码单元序列创建的字符串。

::: block #3d7e9a 语法
_String.fromCharCode([num1[, num2[, ...[, numN]]]])_

-   num1, ..., numN: 一系列字符串。

:::

```js
String.fromCharCode(65, 66, 67); // 'ABC'
String.fromCharCode(0x2014); // '-'
```

### fromCodePoint

使用指定的 `Unicode` 编码位置创建的字符串。

::: block #3d7e9a 语法
_String.fromCodePoint([num1[, num2[, ...[, numN]]]])_

-   num1, ..., numN: 一串 `Unicode` 编码位置。

:::

```js
String.fromCodePoint(65, 66, 67); // 'ABC'
String.fromCodePoint(0x2014); // '-'
```

### charAt

返回字符串中指定索引处的字符。若该索引小于 0 或大于字符串长度 - 1，则返回空字符串。

::: block #3d7e9a 语法
_string.charAt(index)_

-   index: 索引值，默认为 0。

:::

```js
let str = 'abcdef';
str.charAt(-1); // ''
str.charAt(0); // 'a'
str.charAt(7); // ''
```

### charCodeAt

返回 0 到 65535 之间的整数，表示给定索引处的 `UTF-16` code。如果索引超出范围，返回`NaN`。

::: block #3d7e9a 语法
_string.charCodeAt(index)_

-   index: 索引值，默认为 0。

:::

```js
let str = 'abcdef';
str.charCodeAt(-1); // NaN
str.charCodeAt(0); // 97
str.charCodeAt(7); // NaN
```

### codePointAt

返回 一个 `Unicode` 编码点值的非负整数。若索引超出范围，返回 `undefined`。

::: block #3d7e9a 语法
_string.codePointAt(index)_

-   index: 索引值，默认为 0。

:::

### concat

将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回， 不影响原字符串。

::: block #3d7e9a 语法
_string.concat(str1[,str2[, ...[, strN]]])_

-   ste1, str2, ..., strN: 和原字符串连接的多个字符串。

:::

```js
let str = 'abc';
str.concat('def', 'ght', '1234'); // 'abcdefght1234', str = 'abc'
```

:::warning 提示
强烈建议使用连接符`+`替代该方法。
:::

### endsWith

判断当前字符串是否是以另外一个给定的子字符串结尾。

::: block #3d7e9a 语法
_string.endsWith(str[, length])_

-   str: 要搜索的子字符串；
-   length: 作为当前字符串的长度，默认当前字符串长度。

:::

```js
let str = 'abcdefg';
str.endsWith('efg'); // true
str.endsWith('efg', 7); // true
str.endsWith('efg', 6); // false
str.endsWith('ef', 6); // true
```

**Polyfill**

```js
String.prototype.endsWith =
    String.prototype.endsWith ||
    function(str, length) {
        length = length || this.length;
        return this.substring(length - str.length, length) === str;
    };
```

### includes

判断一个字符串是否包含在另一个字符串中。

::: block #3d7e9a 语法
_string.includes(str[, position])_

-   str：要搜索的子字符串；
-   position：从当前字符串的哪个索引位置开始搜寻子字符串，默认值为 0。

:::

```js
let str = 'abcdef';
str.includes('bc'); // true
str.includes('bc', 2); // false
```

```js
String.prototype.includes =
    String.prototype.includes ||
    function(str, position) {
        position = typeof position === 'number' ? position : 0;
        if (str.length + position > this.length) return false;
        return this.indexOf(str, position) !== -1;
    };
```

### indexOf

返回给定值在当前字符串中`第一次`出现的索引。若没找到返回`-1`。

::: block #3d7e9a 语法
_string.indexOf(str[, position])_

-   str：要搜索的子字符串；
-   position：从当前字符串的哪个索引位置开始搜寻子字符串，默认值为 0。

:::

```js
let str = 'abcdef';

str.indexOf('d'); // 3
str.indexOf(''); // 0
str.indexOf('', 3); // 3
str.indexOf('', 10); // 6
```

### lastIndexOf

返回给定值在当前字符串中`最后一次`出现的索引。若没找到返回`-1`。

::: block #3d7e9a 语法
_string.lastIndexOf(str[, position])_

-   str：要搜索的子字符串；
-   position：从当前字符串的哪个索引位置开始搜寻子字符串，默认值为 0。

:::

```js
let str = 'abcddef';

str.lastIndexOf('d'); // 4
str.lastIndexOf(''); // 7
str.lastIndexOf('', 3); // 3
str.lastIndexOf('', 10); // 7
```

### localeCompare

返回一个数字来指示一个参考字符串是否在排序顺序前面或之后或与给定字符串相同。

::: block #3d7e9a 语法
_string.localeCompare(str[, locales[, options]])_

-   str：用来比较的字符串；
-   locales：语言字符串；
-   options：属性对象。

:::

如果引用字符存在于比较字符之前则为负数; 如果引用字符存在于比较字符之后则为正数; 相等的时候返回 0 .

```js
let str = 'abc';
str.localeCompare('a'); // 1
str.localeCompare('efg'); // -1
str.localeCompare('abc'); // 0
```

### match

检索返回一个字符串匹配正则表达式的的结果。

::: block #3d7e9a 语法
_string.match(regexp)_

-   regexp：正则表达式。

:::

当参数为空，返回的是一个包含空字符串的数组`['']`。

当参数是一个字符串或一个数字，它会使用 new RegExp(obj) 来隐式转换成一个 `RegExp`。如果它是一个有正号的正数，RegExp() 方法将忽略正号。

```js
let str =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzNaNnumber65Infinity-Infinity';
str.match(/[A-E]/gi); // ["A", "B", "C", "D", "E", "a", "b", "c", "d", "e", "a", "b", "e"]
str.match('number'); // ["number", index: 55, input: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzNaNnumber65Infinity-Infinity", groups: undefined]
str.match(NaN); // ["NaN", index: 52, input: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzNaNnumber65Infinity-Infinity", groups: undefined]
str.match(+65); // ["65", index: 61, input: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzNaNnumber65Infinity-Infinity", groups: undefined]
```

### matchAll

返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。

::: block #3d7e9a 语法
_string.matchAll(regexp)_

-   regexp：正则表达式。

:::

```js
let str = 'test1test2';
let arr = [...str.matchAll(/t(e)(st(\d?))/g)]; // [["test1", "e", "st1", "1", index: 0, input: "test1test2", groups: undefined], ["test2", "e", "st2", "2", index: 5, input: "test1test2", groups: undefined]]
```

### normalize

按照指定的一种 Unicode 正规形式将当前字符串正规化。

::: block #3d7e9a 语法
_string.normalize([form])_

-   form：`Unicode` 正规形式('NFC', 'NFD', 'NFKC', 'NFKD')。

:::

```js
let string = '\u00F1';
string.normalize(); // "ñ"
string.normalize('NFC'); // "ñ"
string.normalize('NFD'); // "ñ"
string.normalize('NFKC'); // "ñ"
string.normalize('NFKD'); // "ñ"
```
