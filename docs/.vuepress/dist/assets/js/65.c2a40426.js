(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{387:function(v,e,t){"use strict";t.r(e);var o=t(5),s=Object(o.a)({},(function(){var v=this,e=v.$createElement,t=v._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"v-if-与-v-show-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-if-与-v-show-的区别","aria-hidden":"true"}},[v._v("#")]),v._v(" v-if 与 v-show 的区别")]),v._v(" "),t("p",[v._v("原文链接："),t("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/conditional.html#v-if-vs-v-show",target:"_blank",rel:"noopener noreferrer"}},[v._v("v-if vs v-show"),t("OutboundLink")],1)]),v._v(" "),t("p",[t("code",[v._v("v-if")]),v._v(" 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。")]),v._v(" "),t("p",[t("code",[v._v("v-if")]),v._v(" 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。")]),v._v(" "),t("p",[v._v("相比之下，"),t("code",[v._v("v-show")]),v._v(" 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。")]),v._v(" "),t("p",[v._v("一般来说，"),t("code",[v._v("v-if")]),v._v(" 有更高的切换开销，而 "),t("code",[v._v("v-show")]),v._v(" 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 "),t("code",[v._v("v-show")]),v._v(" 较好；如果在运行时条件很少改变，则使用 "),t("code",[v._v("v-if")]),v._v(" 较好。")])])}),[],!1,null,null,null);e.default=s.exports}}]);