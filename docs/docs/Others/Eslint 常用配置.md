# Eslint 常用配置

官方文档：[https://cn.eslint.org/](https://cn.eslint.org/)


## rules

rules 的表达式为：

```js
rules: {
    "规则名": ['规则值', '规则配置']
}
```

规则值：

```
0 或者 "off"    // 关闭该规则
1 或者 "warn"   // 在打开的规则作为警告提示
2 或者 "error"  // 把打开的规则作为错误提示
```

所有的规则默认都是禁用的。在配置文件中，使用 <code>"extends": "eslint:recommended"</code> 来启用推荐的规则，报告一些常见的问题。

##### 推荐规则

```js
rules: {
    'for-direction': 'error',               // 强制 for 循环中更新子句的计数器朝着正确的方向移动
    'getter-return': 'error',               // 强制 getter 函数中出现 return 语句
    'no-async-promise-executor': 'error',   // 禁止使用异步函数作为 Promise executor
    'no-compare-neg-zero': 'error',         // 禁止与 -0 进行比较
    'no-cond-assign': 'error',              // 禁止在条件语句中出现赋值操作符
    'no-constant-condition': 'error',       // 禁止在条件中使用常量表达式
    'no-control-regex': 'error',            // 禁止在正则表达式中使用控制字符
    'no-debugger': 'error',                 // 禁用 debugger
    'no-dupe-args': 'error',                // 禁止 function 定义中出现重名参数
    'no-dupe-keys': 'error',                // 禁止对象字面量中出现重复的 key
    'no-duplicate-case': 'error',           // 禁止出现重复的 case 标签
    'no-empty': 'error',                    // 禁止出现空语句块
    'no-empty-character-class': 'error',    // 禁止在正则表达式中出现空字符集
    'no-ex-assign': 'error',                // 禁止对 catch 子句的参数重新赋值
    'no-extra-boolean-cast': 'error',       // 禁止不必要的布尔转换
    'no-extra-semi': 'error',               // 禁止不必要的分号
    'no-func-assign': 'error',              // 禁止对 function 声明重新赋值
    'no-inner-declarations': 'error',       // 禁止在嵌套的块中出现变量声明或 function 声明
    'no-invalid-regexp': 'error',           // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-irregular-whitespace': 'error',     // 禁止不规则的空白
    'no-misleading-character-class': 'error',    //不允许在字符类语法中出现由多个代码点组成的字符
    'no-obj-calls': 'error',                // 禁止把全局对象作为函数调用
    'no-prototype-builtins': 'error',       // 禁止直接调用 Object.prototypes 的内置属性
    'no-regex-spaces': 'error',             // 禁止正则表达式字面量中出现多个空格
    'no-sparse-arrays': 'error',            // 禁用稀疏数组
    'no-unexpected-multiline': 'error',     // 禁止出现令人困惑的多行表达式
    'no-unreachable': 'error',              // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unsafe-finally': 'error',           // 禁止在 finally 语句块中出现控制流语句
    'no-unsafe-negation': 'error',          // 禁止对关系运算符的左操作数使用否定操作符
    'require-atomic-updates': 'error',      // 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
    'use-isnan': 'error',                   // 要求调用 isNaN() 检查 NaN 
    'valid-typeof': 'error',                // 强制 typeof 表达式与有效的字符串进行比较
    'no-case-declarations': 'error',        // 不允许在 case 子句中使用词法声明
    'no-empty-pattern': 'error',            // 禁止使用空解构模式
    'no-fallthrough': 'error',              // 禁止 case 语句落空
    'no-global-assign': 'error',            // 禁止对原生对象或只读的全局对象进行赋值
    'no-octal': 'error',                    // 禁用八进制字面量
    'no-redeclare': 'error',                // 禁止多次声明同一变量
    'no-self-assign': 'error',              // 禁止自我赋值
    'no-unused-labels': 'error',            // 禁用出现未使用过的标
    'no-useless-catch': 'error',            // 禁止不必要的 catch 子句
    'no-useless-escape': 'error',           // 禁用不必要的转义字符
    'no-with': 'error',                     // 禁用 with 语句
    'no-delete-var': 'error',               // 禁止删除变量
    'no-shadow-restricted-names': 'error',  // 禁止将标识符定义为受限的名字
    'no-undef': 'error',                    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-unused-vars': 'error',              // 禁止出现未使用过的变量
    'no-mixed-spaces-and-tabs': 'error',    // 禁止空格和 tab 的混合缩进
    'constructor-super': 'error',           // 要求在构造函数中有 super() 的调用
    'no-class-assign': 'error',             // 禁止修改类声明的变量
    'no-const-assign': 'error',             // 禁止修改 const 声明的变量
    'no-dupe-class-members': 'error',       // 禁止类成员中出现重复的名称
    'no-new-symbol': 'error',               // 禁止 Symbolnew 操作符和 new 一起使用
    'no-this-before-super': 'error',        // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'require-yield': 'error'                // 要求 generator 函数内有 yield
}
```

## 个人常用 ESLint 配置

```js
module.exports = {
    // 当你想对一个项目的不同部分的使用不同配置，或当你希望别人能够直接使用 ESLint，而无需记住要在配置文件中传递什么时可以配置该属性
    root: true, 
    
    parserOptions: {
        parser: 'babel-eslint'
    },
    
    env: {
        browser: true,
    },
    
    extends: ['plugin:vue/essential', 'standard'],
    
    // 全局变量， 添加后不会报该变量 undefined 的错误
    globals: {  
        moment: true,
        Vue: true
    },
    
    // 规则
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn'
        
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn'
        
        // 允许空行， 但最多不超过两行
        'no-multiple-empty-lines': ['error', { 'max': 2 }]
        
        // 不强制使用 === 和 !==
        eqeqeq: 'off',    
        
        // 强制使用单引号
        quotes: [
            'error',
            'single',   // 强制使用单引号
            { 
                avoidEscape: true,  // 只要字符串中包含了一个其它引号，否则需要转义
                allowTemplateLiterals: true     // 允许字符串使用反勾号 ``
            }
        ],
        
        // 函数括号前强制空格
        'space-before-function-paren': ['error', 'always'],   
    }
}
```