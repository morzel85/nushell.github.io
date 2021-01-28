(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{526:function(e,s,t){"use strict";t.r(s);var a=t(42),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Create one or more files in the current or an already existent directory.\nIt has no effect on existing files.\nUnlike GNU touch, the access time and the modified time are not updated.")]),e._v(" "),t("p",[t("code",[e._v("-h")]),e._v(", "),t("code",[e._v("--help")]),e._v("\nDisplay help message.")]),e._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("p",[e._v("Create a file in an empty folder. Then touch the file and list files again to observe that the modified time has not been updated.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("touch")]),e._v(" file.ext"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n──────────┬─────────────\n name     │ file.ext\n "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("type")]),e._v("     │ File\n size     │ "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" B\n modified │ "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" secs ago\n──────────┴─────────────\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("touch")]),e._v(" file.ext"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n──────────┬───────────\n name     │ file.ext\n "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("type")]),e._v("     │ File\n size     │ "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" B\n modified │ "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" secs ago\n──────────┴───────────\n")])])]),t("p",[e._v("Create a file within an already existent folder.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("dir")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("touch")]),e._v(" dir/file.ext"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("dir")]),e._v("\n──────────┬───────────\n name     │ dir/file.ext\n "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("type")]),e._v("     │ File\n size     │ "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" B\n modified │ "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" secs ago\n──────────┴───────────\n")])])]),t("p",[e._v("Create three files at oince")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("touch")]),e._v(" a b c\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n────┬────────────────────┬──────┬──────────┬──────────────\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  │        name        │ type │   size   │   modified")]),e._v("\n────┼────────────────────┼──────┼──────────┼──────────────\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" │ a                  │ File │      "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" sec ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" │ b                  │ File │      "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" sec ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" │ c                  │ File │      "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" sec ago\n────┴────────────────────┴──────┴──────────┴──────────────\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);