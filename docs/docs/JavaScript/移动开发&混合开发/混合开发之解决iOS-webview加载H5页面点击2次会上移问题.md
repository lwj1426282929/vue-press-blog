# 混合开发之解决 iOS webview 加载 H5 页面点击 2 次会上移问题

::: tip
在 iOS webview 嵌入 H5 页面的开发的时候， 在 H5 页面双击 2 次页面会向上移动一段距离， 然后滑不下来。
:::

解决方案：

监听 `touchend` 事件， 记录时间， 通过判断两次手指离开屏幕的时间差来阻止双击事件， 如果时间差过短（< 500ms） 则阻止第二次手指移开屏幕的行为。

```js
(function() {
  var agent = navigator.userAgent.toLowerCase();
  var iLastTouch = null; //缓存上一次tap的时间
  if (agent.indexOf('iphone') >= 0 || agent.indexOf('ipad') >= 0) {
    //检测是否是ios
    document.body.addEventListener(
      'touchend',
      function(event) {
        var iNow = new Date().getTime();
        iLastTouch =
          iLastTouch || iNow + 1 /** 第一次时将iLastTouch设为当前时间+1 */;
        var delta = iNow - iLastTouch;
        if (delta < 500 && delta > 0) {
          // 需要判断浏览器是否支持禁用和是否已经禁用
          if (event.cancelable && !event.defaultPrevented) {
            event.preventDefault();
          }
          return false;
        }
        iLastTouch = iNow;
      },
      false,
    );
  }
})();
```
