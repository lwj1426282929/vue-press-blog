(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{385:function(s,a,t){"use strict";t.r(a);var r=t(5),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux-之常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-之常用命令","aria-hidden":"true"}},[s._v("#")]),s._v(" Linux 之常用命令")]),s._v(" "),t("p",[s._v("改变当前目录")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[s._v("查看当前目录下文件以及文件夹")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])])]),t("p",[s._v("远程连接")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[s._v("上传本地文件至远程")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" root@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ip"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[s._v("从远程下载文件至本地")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" root@ip:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("local_dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("（本地目录）\n")])])]),t("p",[s._v("上传整个目录至远程")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("local_dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" root@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ip"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[s._v("从远程下载整个目录")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r root@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ip"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("local_dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[s._v("打包文件")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仅打包，不压缩")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -cvf /home/www/images.tar /home/www/images\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打包后，以 gzip 压缩")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zcvf /home/www/images.tar.gz /home/www/images\n")])])]),t("p",[s._v("解压文件至指定目录")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf /source/kernel.tgz -C /source/ linux-2.6.29\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);