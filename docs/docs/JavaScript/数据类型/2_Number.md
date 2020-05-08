# Number

## methods

### isFinite

判断参数是否有穷。

::: block #3d7e9a 语法
_Number.isFinite(value)_

-   value: 需要检测的数字。

:::

```js
Number.isFinite(0); // true
Number.isFinite('0'); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite(NaN); // false
```

::: tip 提示
`Number.isFinite` 不会进行数据类型隐式转换，所以只有 `Number` 类型且有穷才返回 true。而全局的`isFinite`会隐式地将一个非 `Number` 类型的值转为 `Number` 再去判断。
:::

**Polyfill**

```js
Number.isFinite =
    Number.isFinite ||
    function(value) {
        return typeof value === 'number' && isFinite(value);
    };
```

### isInteger

判断参数是否为整数。

::: block #3d7e9a 语法
_Number.isInteger(value)_

-   value: 需要检测的数字。

:::

```js
Number.isInteger(0); // true
Number.isInteger('0'); // false
Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false
Number.isInteger(NaN); // false
```

:::tip 提示
`Number.isInteger` 不会进行数据类型隐式转换。
:::

**Polyfill**

```js
Number.isInteger =
    Number.isInteger ||
    function(value) {
        return (
            typeof value === 'number' &&
            isInteger(value) &&
            Math.floor(value) === value
        );
    };
```

### isNaN

判断参数是否为 `NaN`。

::: block #3d7e9a 语法
_Number.isNaN(value)_

-   value: 要判断的数值

:::

```js
Number.isNaN(0); // false
Number.isNaN('0'); // false
Number.isNaN(Infinity); // false
Number.isNaN(-Infinity); // false
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true
```

:::tip 提示
`Number.isNaN` 不会进行数据类型隐式转换，只有为 `Number` 类型且为 `NaN` 时才会返回 true。
:::

**Polyfill**

```js
Number.isNaN =
    Number.isNaN ||
    function(value) {
        return typeof value === 'number' && isNaN(value);
    };
```

### isSafeInteger

判断参数是否为一个安全整数。

::: block #3d7e9a 语法
_Number.isSafeInteger(value)_

-   value: 要判断的数值。

:::

::: tip 安全整数

-   可以准确地表示为一个 `IEEE-754` 双精度数字;
-   其 `IEEE-754` 表示不能是舍入任何其他整数以适应 `IEEE-754` 表示的结果。

安全整数范围为 <code>-(2<sup>53</sup> - 1)</code> 到 <code>2<sup>53</sup> - 1</code> 之间的整数，包含 <code>-(2<sup>53</sup> - 1)</code> 和<code>2<sup>53</sup> - 1</code>。
:::

```js
Number.isSafeInteger(0); // true
Number.isSafeInteger('0'); // false
Number.isSafeInteger(Infinity); // false
Number.isSafeInteger(-Infinity); // false
Number.isSafeInteger(NaN); // false
Number.isSafeInteger(Number.NaN); // false
Number.isSafeInteger(0 / 0); // false
Number.isSafeInteger(Math.pow(2, 53)); // false
Number.isSafeInteger(-Math.pow(2, 53)); // false
Number.isSafeInteger(Math.pow(2, 53) - 1); // true
Number.isSafeInteger(-(Math.pow(2, 53) - 1)); // true
```

**Polyfill**

```js
Number.isSafeInteger =
    Number.isSafeInteger ||
    function(value) {
        return (
            Number.isInteger(value) &&
            Math.abs(value) <= Number.MAX_SAFE_INTEGER
        );
    };
```

### parseFloat

把给定字符串解析成浮点数并返回，如果无法被解析成浮点数，则返回`NaN`。

::: block #3d7e9a 语法
_Number.parseFloat(value)_

-   value: 需要解析的值。

:::

### parseInt

依据指定基数，把字符串解析成整数并返回。如果无法解析成整数，则返回`NaN`。

::: block #3d7e9a 语法
_Number.parseInt(value[, radix])_

-   value: 需要解析的值
-   radix: 基数，取值范围为[2, 36]

:::

```js
Number.parseInt(123); // 123
Number.parseInt('123'); // 123
Number.parseInt(123.45); // 123
Number.parseInt('123.45'); // 123
Number.parseInt(''); // NaN
Number.parseInt('abc'); // NaN
Number.parseInt('123', 1); // NaN
Number.parseInt('123', 2); // 1
Number.parseInt('123', 3); // 5
Number.parseInt('123', 4); // 27
Number.parseInt('123', 5); // 38
Number.parseInt('123', 36); // 1371
Number.parseInt('123', 37); // NaN
```

**Polyfill**

```js
Number.parseInt = Number.parseInt || parseInt;
```

### toExponential

以指数表示法返回该数值字符串表示形式。

::: block #3d7e9a 语法
_number.toExponential([, digits])_

-   digits: 一个整数，用来指定小数点后有几位数字。默认情况下用尽可能多的位数来显示数字。

:::

```js
let number = 100.12345;
number.toExponential(); // 1.0012345e+2
number.toExponential(2); // 1.00e+2
```

### toFixed

使用定点表示法来格式化一个数值。

::: block #3d7e9a 语法
_number.toFixed([digits])_

-   digits: 小数点后数字的个数,取值范围[0, 20], 默认为 0。

:::

```js
let number = 123.5463;
number.toFixed(); // 124
number.toFixed(1); // 123.5
number.toFixed(2); // 123.55
```

:::tip 提示
`toFixed`进行格式化数值时通过对需要保留的小数位后一位进行四舍五入计算。
:::

### toLocaleString

返回这个数字在特定语言环境下的表示字符串。

::: block #3d7e9a 语法
_number.toLocaleString([locales [, options]])_

-   locales: 缩写语言代码；
-   options： 属性配置对象。

:::

### toPrecision

以指定的精度返回该数值对象的字符串表示。

::: block #3d7e9a 语法
_number.toPrecision([, precision])_

-   precision: 用来指定有效数个数的整数。

:::

```js
let number = 123.4567;

number.toPrecision(); //123.4567
number.toPrecision(5); //123.46
```

::: tip 提示
`toPrecision`在指定进度后面一位进行四舍五入对该值进行取舍。
:::

### toString

返回指定 `Number` 对象的字符串表示形式。

::: block #3d7e9a 语法
_number.toString([, radix])_

-   radix: 指定要用于数字到字符串的转换的基数(从 2 到 36)。如果未指定 radix 参数，则默认值为 10。

:::

```js
let number = 123.456;
number.toString(); // '123.456'
```

### valueOf

返回一个被 `Number` 对象包装的原始值。

::: block #3d7e9a 语法
_number.valueOf()_

:::

:::tip 提示
该方法通常是由 JavaScript 引擎在内部隐式调用的，而不是由用户在代码中显式调用的。
:::
