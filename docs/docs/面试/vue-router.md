# vue-router

## 前端路由模式

### hash

使用 URL 的 hash 来模拟一个完整的 URL，当 URL 改变时，页面不会重新加载。该模式支持所有浏览器，在浏览器中默认使用该模式。

hash 模式的原理是监听 hash 值的改变，当 `#`后面的 hash 值改变后，页面不会重新向服务器发送求情，同时发生变化的 URL 浏览器都会记录，所以页面状态和 URL 可以关联起来。后来人们称之为`前端路由`，成为了单页应用标配。

```js
var HashHistory = /*@__PURE__*/ (function(History) {
    function HashHistory(router, base, fallback) {
        History.call(this, router, base);
        // check history fallback deeplinking
        if (fallback && checkFallback(this.base)) {
            return;
        }
        ensureSlash();
    }

    if (History) HashHistory.__proto__ = History;
    HashHistory.prototype = Object.create(History && History.prototype);
    HashHistory.prototype.constructor = HashHistory;

    // this is delayed until the app mounts
    // to avoid the hashchange listener being fired too early
    HashHistory.prototype.setupListeners = function setupListeners() {
        var this$1 = this;

        var router = this.router;
        var expectScroll = router.options.scrollBehavior;
        var supportsScroll = supportsPushState && expectScroll;

        if (supportsScroll) {
            setupScroll();
        }

        window.addEventListener(
            supportsPushState ? 'popstate' : 'hashchange',
            function() {
                var current = this$1.current;
                if (!ensureSlash()) {
                    return;
                }
                this$1.transitionTo(getHash(), function(route) {
                    if (supportsScroll) {
                        handleScroll(this$1.router, route, current, true);
                    }
                    if (!supportsPushState) {
                        replaceHash(route.fullPath);
                    }
                });
            },
        );
    };

    HashHistory.prototype.push = function push(location, onComplete, onAbort) {
        var this$1 = this;

        var ref = this;
        var fromRoute = ref.current;
        this.transitionTo(
            location,
            function(route) {
                pushHash(route.fullPath);
                handleScroll(this$1.router, route, fromRoute, false);
                onComplete && onComplete(route);
            },
            onAbort,
        );
    };

    HashHistory.prototype.replace = function replace(
        location,
        onComplete,
        onAbort,
    ) {
        var this$1 = this;

        var ref = this;
        var fromRoute = ref.current;
        this.transitionTo(
            location,
            function(route) {
                replaceHash(route.fullPath);
                handleScroll(this$1.router, route, fromRoute, false);
                onComplete && onComplete(route);
            },
            onAbort,
        );
    };

    HashHistory.prototype.go = function go(n) {
        window.history.go(n);
    };

    HashHistory.prototype.ensureURL = function ensureURL(push) {
        var current = this.current.fullPath;
        if (getHash() !== current) {
            push ? pushHash(current) : replaceHash(current);
        }
    };

    HashHistory.prototype.getCurrentLocation = function getCurrentLocation() {
        return getHash();
    };

    return HashHistory;
})(History);
```

### history

依赖于 `Html5` 的 `history API`, 对 URL 进行了美化，去掉了前面的`#`，使 URL 看上去像正常的 URL，当 URL 前进/后退时通过 pushstate 把页面的状态保存在 state 对象中，当页面的 url 再变回这个 url 时，可以通过 event.state 取到这个 state 对象，从而可以对页面状态进行还原。

但是该模式下刷新页面时由于没有 hash 值，浏览器会向服务器请求完整的 URL，如果服务端没有设置相应响应或者对应资源，就会报 404 的错误。所以必须配合服务器进行配置，在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

```js
var HTML5History = /*@__PURE__*/ (function(History) {
    function HTML5History(router, base) {
        var this$1 = this;

        History.call(this, router, base);

        var expectScroll = router.options.scrollBehavior;
        var supportsScroll = supportsPushState && expectScroll;

        if (supportsScroll) {
            setupScroll();
        }

        var initLocation = getLocation(this.base);
        window.addEventListener('popstate', function(e) {
            var current = this$1.current;

            // Avoiding first `popstate` event dispatched in some browsers but first
            // history route not updated since async guard at the same time.
            var location = getLocation(this$1.base);
            if (this$1.current === START && location === initLocation) {
                return;
            }

            this$1.transitionTo(location, function(route) {
                if (supportsScroll) {
                    handleScroll(router, route, current, true);
                }
            });
        });
    }

    if (History) HTML5History.__proto__ = History;
    HTML5History.prototype = Object.create(History && History.prototype);
    HTML5History.prototype.constructor = HTML5History;

    HTML5History.prototype.go = function go(n) {
        window.history.go(n);
    };

    HTML5History.prototype.push = function push(location, onComplete, onAbort) {
        var this$1 = this;

        var ref = this;
        var fromRoute = ref.current;
        this.transitionTo(
            location,
            function(route) {
                pushState(cleanPath(this$1.base + route.fullPath));
                handleScroll(this$1.router, route, fromRoute, false);
                onComplete && onComplete(route);
            },
            onAbort,
        );
    };

    HTML5History.prototype.replace = function replace(
        location,
        onComplete,
        onAbort,
    ) {
        var this$1 = this;

        var ref = this;
        var fromRoute = ref.current;
        this.transitionTo(
            location,
            function(route) {
                replaceState(cleanPath(this$1.base + route.fullPath));
                handleScroll(this$1.router, route, fromRoute, false);
                onComplete && onComplete(route);
            },
            onAbort,
        );
    };

    HTML5History.prototype.ensureURL = function ensureURL(push) {
        if (getLocation(this.base) !== this.current.fullPath) {
            var current = cleanPath(this.base + this.current.fullPath);
            push ? pushState(current) : replaceState(current);
        }
    };

    HTML5History.prototype.getCurrentLocation = function getCurrentLocation() {
        return getLocation(this.base);
    };

    return HTML5History;
})(History);
```

### abstract

适用于所有 JavaScript 环境，例如服务器端使用 Node.js。如果没有浏览器 API，路由器将自动被强制进入此模式。

```js
var AbstractHistory = /*@__PURE__*/ (function(History) {
    function AbstractHistory(router, base) {
        History.call(this, router, base);
        this.stack = [];
        this.index = -1;
    }

    if (History) AbstractHistory.__proto__ = History;
    AbstractHistory.prototype = Object.create(History && History.prototype);
    AbstractHistory.prototype.constructor = AbstractHistory;

    AbstractHistory.prototype.push = function push(
        location,
        onComplete,
        onAbort,
    ) {
        var this$1 = this;

        this.transitionTo(
            location,
            function(route) {
                this$1.stack = this$1.stack
                    .slice(0, this$1.index + 1)
                    .concat(route);
                this$1.index++;
                onComplete && onComplete(route);
            },
            onAbort,
        );
    };

    AbstractHistory.prototype.replace = function replace(
        location,
        onComplete,
        onAbort,
    ) {
        var this$1 = this;

        this.transitionTo(
            location,
            function(route) {
                this$1.stack = this$1.stack
                    .slice(0, this$1.index)
                    .concat(route);
                onComplete && onComplete(route);
            },
            onAbort,
        );
    };

    AbstractHistory.prototype.go = function go(n) {
        var this$1 = this;

        var targetIndex = this.index + n;
        if (targetIndex < 0 || targetIndex >= this.stack.length) {
            return;
        }
        var route = this.stack[targetIndex];
        this.confirmTransition(
            route,
            function() {
                this$1.index = targetIndex;
                this$1.updateRoute(route);
            },
            function(err) {
                if (isExtendedError(NavigationDuplicated, err)) {
                    this$1.index = targetIndex;
                }
            },
        );
    };

    AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation() {
        var current = this.stack[this.stack.length - 1];
        return current ? current.fullPath : '/';
    };

    AbstractHistory.prototype.ensureURL = function ensureURL() {
        // noop
    };

    return AbstractHistory;
})(History);
```

### History API

#### length

返回一个整数，该整数表示会话历史中元素的数目，包括当前加载的页。例如，在一个新的选项卡加载的一个页面中，这个属性返回 1。

#### state

返回一个表示历史堆栈顶部的状态的值。这是一种可以不必等待 popstate 事件而查看状态而的方式。

#### back

与用户点击浏览器回退按钮的效果相同。back()方法会在会话历史记录中向后移动一页。如果没有上一页，则此方法调用不执行任何操作。

```js
window.history.back();
```

#### forward

与用户点击浏览器前进按钮的效果相同，在会话历史中向前移动一页。它与使用 delta 参数为 1 时调用 history.go(delta)的效果相同。

```js
window.history.forward();
```

#### go

go()方法从会话历史记录中加载特定页面。你可以使用它在历史记录中前后移动，具体取决于 delta 参数的值。

```js
// back
window.history.go(-1);

// forward
window.history.go(1);
```

#### pushState

新建并激活一个历史记录。

::: block #3d7e9a
_window.history.pushState(state, title[, URL])_
:::

::: tip
pushState() 绝对不会触发 hashchange 事件，即使新的 URL 与旧的 URL 仅哈希不同也是如此。
:::

#### replaceState

修改当前历史记录，更新状态对象 state 或者当前历史记录的 URL。

::: block #3d7e9a
_window.history.replaceState(state, title[, URL])_
:::

#### popstate 事件

当活动历史记录条目更改时，将触发 popstate 事件。实现 history 路由拦截，监听页面返回事件。
