# Object

## methods

### assign

将所有`可枚举属性`的值从一个或多个源对象复制到目标对象并返回目标对象。

::: block #3d7e9a 语法
_Object.assign(target, ...sources)_

- target：目标对象；
- sources：源对象。

:::

如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。

::: tip 提示
`Object.assign` 方法只会拷贝源对象自身的并且可枚举的属性到目标对象。该方法使用源对象的`Get`和目标对象的`Set`，所以它会调用相关 `getter` 和 `setter`。因此，它分配属性，而不仅仅是复制或定义新的属性。如果合并源包含 `getter`，这可能使其不适合将新属性合并到原型中。为了将属性定义（包括其可枚举性）复制到原型，应使用 `Object.getOwnPropertyDescriptor()`和 `Object.defineProperty()` 。

`String` 类型和 `Symbol` 类型的属性都会被拷贝。
:::

```js
const obj1 = { a: 1, b: 2 }
const obj2 = { a: 3, c: 4 }
const obj3 = Object.assign({}, obj1, obj2) // { a: 3, b: 2, c: 4 }
const obj4 = Object.assign(obj1, obj2) // { a: 3, b: 2, c: 4 }  obj1 = { a: 3, b: 2, c: 4 }
```

### create

创建一个新对象,使用现有的对象来提供新创建的对象的`__proto__`。

::: block #3d7e9a 语法
_Object.create(proto，[propertiesObject])_

- proto：新创建对象的原型对象；
- propertiesObject：可选。需要传入一个对象，该对象的属性类型参照 Object.defineProperties()的第二个参数。如果该参数被指定且不为 undefined，该传入对象的自有可枚举属性(即其自身定义的属性，而不是其原型链上的枚举属性)将为新创建的对象添加指定的属性值和对应的属性描述符。
:::

### defineProperties

### defineProperty

### values

### keys

### entries

### setPrototypeOf

### seal

### preventExtensions

### isSealed

### isFrozen

### isExtensible

### is

### getPrototypeOf

### getOwnPropertySymbols

### getOwnPropertyNames

### getOwnPropertyDescriptors

### getOwnPropertyDescriptor

### fromEntries

### freeze
