(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{249:function(n,a,t){},315:function(n,a,t){"use strict";var s=t(249);t.n(s).a},363:function(n,a,t){"use strict";t.r(a);var s={data:function(){return{animate:""}},methods:{clickButton:function(){var n=this;this.animate="animate",setTimeout((function(){n.animate=""}),700)}}},i=(t(315),t(5)),r=Object(i.a)(s,(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"按钮特效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按钮特效","aria-hidden":"true"}},[n._v("#")]),n._v(" 按钮特效")]),n._v(" "),t("h2",{attrs:{id:"气泡点击效果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#气泡点击效果","aria-hidden":"true"}},[n._v("#")]),n._v(" 气泡点击效果")]),n._v(" "),t("code-block",{attrs:{description:"",scrollViewSelector:"html"}},[t("span",{attrs:{slot:"description"},slot:"description"}),n._v(" "),t("template",{slot:"code"},[t("pre",[t("code",{staticClass:"html xml hljs "},[t("span",{staticClass:"hljs-tag"},[n._v("<"),t("span",{staticClass:"hljs-name"},[n._v("template")]),n._v(">")]),n._v("\n    "),t("span",{staticClass:"hljs-tag"},[n._v("<"),t("span",{staticClass:"hljs-name"},[n._v("button")]),n._v(" "),t("span",{staticClass:"hljs-attr"},[n._v(":class")]),n._v("="),t("span",{staticClass:"hljs-string"},[n._v("\"['btn-bubbly', animate]\"")]),n._v(" @"),t("span",{staticClass:"hljs-attr"},[n._v("click")]),n._v("="),t("span",{staticClass:"hljs-string"},[n._v('"clickButton"')]),n._v(">")]),n._v("Click me!"),t("span",{staticClass:"hljs-tag"},[n._v("</"),t("span",{staticClass:"hljs-name"},[n._v("button")]),n._v(">")]),n._v("\n"),t("span",{staticClass:"hljs-tag"},[n._v("</"),t("span",{staticClass:"hljs-name"},[n._v("template")]),n._v(">")]),n._v("\n\n"),t("span",{staticClass:"hljs-tag"},[n._v("<"),t("span",{staticClass:"hljs-name"},[n._v("script")]),n._v(">")]),t("span",{staticClass:"javascript"},[n._v("\n"),t("span",{staticClass:"hljs-keyword"},[n._v("export")]),n._v(" "),t("span",{staticClass:"hljs-keyword"},[n._v("default")]),n._v(" {\n    data() {\n        "),t("span",{staticClass:"hljs-keyword"},[n._v("return")]),n._v(" {\n            "),t("span",{staticClass:"hljs-attr"},[n._v("animate")]),n._v(": "),t("span",{staticClass:"hljs-string"},[n._v("''")]),n._v("\n        }\n    },\n\n    "),t("span",{staticClass:"hljs-attr"},[n._v("methods")]),n._v(": {\n        clickButton() {\n            "),t("span",{staticClass:"hljs-keyword"},[n._v("this")]),n._v(".animate = "),t("span",{staticClass:"hljs-string"},[n._v("'animate'")]),n._v("\n            setTimeout("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[n._v("()")]),n._v(" =>")]),n._v(" {\n                "),t("span",{staticClass:"hljs-keyword"},[n._v("this")]),n._v(".animate = "),t("span",{staticClass:"hljs-string"},[n._v("''")]),n._v("\n            }, "),t("span",{staticClass:"hljs-number"},[n._v("700")]),n._v(")\n        }\n    }\n}\n")]),t("span",{staticClass:"hljs-tag"},[n._v("</"),t("span",{staticClass:"hljs-name"},[n._v("script")]),n._v(">")]),n._v("\n\n"),t("span",{staticClass:"hljs-tag"},[n._v("<"),t("span",{staticClass:"hljs-name"},[n._v("style")]),n._v(" "),t("span",{staticClass:"hljs-attr"},[n._v("lang")]),n._v("="),t("span",{staticClass:"hljs-string"},[n._v('"scss"')]),n._v(" "),t("span",{staticClass:"hljs-attr"},[n._v("scoped")]),n._v(">")]),n._v("\n$fuschia: #ff0081;\n$button-bg: $fuschia;\n$button-text-color: #fff;\n$baby-blue: #f8faff;\n\n.btn-bubbly {\n  font-family: 'Helvetica', 'Arial', sans-serif;\n  display: inline-block;\n  font-size: 1em;\n  padding: 1em 2em;\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: $button-bg;\n  color: $button-text-color;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  transform: translateX(0);\n  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;\n  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);\n\n  &:focus {\n    outline: 0;\n  }\n\n  &::before, &::after{\n    position: absolute;\n    content: '';\n    display: block;\n    width: 140%;\n    height: 100%;\n    left: -20%;\n    z-index: -1000;\n    transition: all ease-in-out 0.5s;\n    background-repeat: no-repeat;\n  }\n\n  &::before{\n    display: none;\n    top: -75%;\n    background-image:  \n        radial-gradient(circle, $button-bg 20%, transparent 20%),\n        radial-gradient(circle,  transparent 20%, $button-bg 20%, transparent 30%),\n        radial-gradient(circle, $button-bg 20%, transparent 20%), \n        radial-gradient(circle, $button-bg 20%, transparent 20%),\n        radial-gradient(circle,  transparent 10%, $button-bg 15%, transparent 20%),\n        radial-gradient(circle, $button-bg 20%, transparent 20%),\n        radial-gradient(circle, $button-bg 20%, transparent 20%),\n        radial-gradient(circle, $button-bg 20%, transparent 20%),\n        radial-gradient(circle, $button-bg 20%, transparent 20%);\n    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;\n  }\n\n  &::after{\n    display: none;\n    bottom: -75%;\n    background-image:  \n        radial-gradient(circle, $button-bg 20%, transparent 20%), \n        radial-gradient(circle, $button-bg 20%, transparent 20%),\n        radial-gradient(circle,  transparent 10%, $button-bg 15%, transparent 20%),\n        radial-gradient(circle, $button-bg 20%, transparent 20%),\n        radial-gradient(circle, $button-bg 20%, transparent 20%),\n        radial-gradient(circle, $button-bg 20%, transparent 20%),\n        radial-gradient(circle, $button-bg 20%, transparent 20%);\n  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;\n  }\n\n  &:active{\n    transform: scale(0.9);\n    background-color: darken($button-bg, 5%);\n    box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);\n  }\n\n  &.animate{\n    &::before{\n      display: block;\n      animation: topBubbles ease-in-out 0.75s forwards;\n    }\n\n    &::after{\n      display: block;\n      animation: bottomBubbles ease-in-out 0.75s forwards;\n    }\n  }\n}\n\n@keyframes topBubbles {\n  0%{\n    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;\n  }\n    50% {\n      background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;}\n 100% {\n    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;\n  background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;\n  }\n}\n\n@keyframes bottomBubbles {\n  0% {\n    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;\n  }\n  50% {\n    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;}\n 100% {\n    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;\n    background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;\n }\n}\n"),t("span",{staticClass:"hljs-tag"},[n._v("</"),t("span",{staticClass:"hljs-name"},[n._v("style")]),n._v(">")]),n._v("\n")])])]),n._v(" "),[[t("button",{class:["btn-bubbly",n.animate],on:{click:n.clickButton}},[n._v("Click me!")])]]],2)],1)}),[],!1,null,"8bd1fc02",null);a.default=r.exports}}]);