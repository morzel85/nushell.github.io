(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{460:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Check for empty values. Pass the column names to check emptiness. Optionally pass a block as the last parameter if setting contents to empty columns is wanted.")]),s._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),a("p",[s._v("Check if a value is empty")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" empty?\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])])]),a("p",[s._v("Given the following meals")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("meal size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("arepa small"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("taco "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n═══╦═══════╦═══════\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ║ meal  ║ size")]),s._v("\n═══╬═══════╬═══════\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" ║ arepa ║ small\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" ║ taco  ║\n═══╩═══════╩═══════\n")])])]),a("p",[s._v("Show the empty contents")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("meal size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("arepa small"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("taco "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" empty? meal size\n═══╦══════╦══════\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ║ meal ║ size")]),s._v("\n═══╬══════╬══════\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" ║ No   ║ No\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" ║ No   ║ Yes\n═══╩══════╩══════\n")])])]),a("p",[s._v("Let's assume we have a report of totals per day. For simplicity we show just for three days "),a("code",[s._v("2020/04/16")]),s._v(", "),a("code",[s._v("2020/07/10")]),s._v(", and "),a("code",[s._v("2020/11/16")]),s._v(". Like so")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/04/16 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/07/10 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/11/16"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n═══╦════════════╦════════════╦════════════\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ║ 2020/04/16 ║ 2020/07/10 ║ 2020/11/16")]),s._v("\n═══╬════════════╬════════════╬════════════\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" ║            ║         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(" ║         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),s._v("\n═══╩════════════╩════════════╩════════════\n")])])]),a("p",[s._v("In the future, the report now has many totals logged per day. In this example, we have 1 total for the day "),a("code",[s._v("2020/07/10")]),s._v(" and "),a("code",[s._v("2020/11/16")]),s._v(" like so")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/04/16 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/07/10 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/11/16"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n═══╦════════════╦════════════════╦════════════════\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ║ 2020/04/16 ║ 2020/07/10     ║ 2020/11/16")]),s._v("\n═══╬════════════╬════════════════╬════════════════\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" ║            ║ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ║ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n═══╩════════════╩════════════════╩════════════════\n")])])]),a("p",[s._v("We want to add two totals (numbers "),a("code",[s._v("33")]),s._v(" and "),a("code",[s._v("37")]),s._v(") for the day "),a("code",[s._v("2020/04/16")])]),s._v(" "),a("p",[s._v("Set a table with two numbers for the empty column")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/04/16 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/07/10 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/11/16"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" empty? "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/04/16 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n═══╦════════════════╦════════════════╦════════════════\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ║ 2020/04/16     ║ 2020/07/10     ║ 2020/11/16")]),s._v("\n═══╬════════════════╬════════════════╬════════════════\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" ║ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ║ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ║ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n═══╩════════════════╩════════════════╩════════════════\n")])])]),a("p",[s._v("Checking all the numbers")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/04/16 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/07/10 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/11/16"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" empty? "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/04/16 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" pivot _ totals "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get totals\n═══╦════\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" ║ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" ║ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" ║ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" ║ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),s._v("\n═══╩════\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);