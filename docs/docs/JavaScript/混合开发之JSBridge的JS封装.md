---
sidebarDepth: 0
---

# 混合开发之 JSBridge 的 JS 封装

```js
export const setupWebViewJavascriptBridge = callback => {
  let u = navigator.userAgent;
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

  // Android 环境
  if (!isiOS) {
    if (window.WebViewJavascriptBridge) {
      callback(WebViewJavascriptBridge);
    } else {
      document.addEventListener('WebViewJavascriptBridgeReady', () => { 
        callback(WebViewJavascriptBridge); 
      }, false);
    }
  } 
  // iOS 环境
  else {
    if (window.WebViewJavascriptBridge) {
      return callback(window.WebViewJavascriptBridge);
    }
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback);
    }
    window.WVJBCallbacks = [callback];
    let WVJBIframe = document.createElement("iframe");
    WVJBIframe.style.display = "none";
    WVJBIframe.src = "wvjbscheme://__BRIDGE_LOADED__";
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(() => {
      document.documentElement.removeChild(WVJBIframe);
    }, 0);
  }
};
```

## 使用方式

```js
import { setupWebViewJavascriptBridge } from './setupWebViewJavascriptBridge';

/* 
  js 调 APP
  第1个参数为方法名， 该方法名必须在 APP 注册；
  第2个参数为js需要传递给 APP 的数据；
  第3个参数为回调函数，函数内隐含 APP 返回的数据。
*/
setupWebViewJavascriptBridge( bridge => {
  bridge.callHandler('eventName', params, response => {

  });
});

/* 
  APP 调 js
  第1个参数为方法名， 该方法名必须在 APP 注册；
  第2个参数为回调函数，函数内隐含APP需要传递给 js 的参数， js 接收到数据后可以 callback 对应数据给 APP
*/
setupWebViewJavascriptBridge( bridge => {
  bridge.registerHandler('eventName', (request, callback) => {

  });
});
```

**相关文章**

- <a href="#" class="link-active">混合开发之JSBridge的JS封装</a>
- [混合开发之解决iOS webview加载H5页面点击2次会上移问题](./混合开发之解决iOS-webview加载H5页面点击2次会上移问题.md)