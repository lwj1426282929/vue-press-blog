# vue-router

## 前端路由模式

### hash

使用 URL 的 hash 来模拟一个完整的 URL，当 URL 改变时，页面不会重新加载。该模式支持所有浏览器，在浏览器中默认使用该模式。

当 `#`后面的

hash 模式的原理是监听 hash 值的改变

````js
window.addEventListener(
  supportsPushState ? 'popstate' : 'hashchange',
  function () {
    var current = this$1.current;
    if (!ensureSlash()) {
      return
    }
    this$1.transitionTo(getHash(), function (route) {
      if (supportsScroll) {
        handleScroll(this$1.router, route, current, true);
      }
      if (!supportsPushState) {
        replaceHash(route.fullPath);
      }
    });
  }
);
```

### history

### abstract
````
