(window.webpackJsonp=window.webpackJsonp||[]).push([[467],{952:function(e,a,s){"use strict";s.r(a);var t=s(35),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"help"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#help"}},[e._v("#")]),e._v(" Help")]),e._v(" "),s("p",[e._v("A good way to become familiar with all that nu has to offer is by utilizing the "),s("code",[e._v("help")]),e._v(" command.")]),e._v(" "),s("h3",{attrs:{id:"how-to-see-all-supported-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-see-all-supported-commands"}},[e._v("#")]),e._v(" How to see all supported commands:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),e._v(" commands "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" where is_custom "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$false")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" first "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" drop "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("column")]),e._v("\n")])])]),s("p",[e._v("Output")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("───┬───────────────┬────────────┬───────────┬───────────┬────────────────────────────────────────────────────────────────\n # │     name      │  category  │ is_plugin │ is_custom │                             usage\n───┼───────────────┼────────────┼───────────┼───────────┼────────────────────────────────────────────────────────────────\n 0 │ alias         │ core       │ false     │ false     │ Alias a command (with optional flags) to a new name\n 1 │ all?          │ filters    │ false     │ false     │ Test if every element of the input matches a predicate.\n 2 │ ansi          │ platform   │ false     │ false     │ Output ANSI codes to change color.\n 3 │ ansi gradient │ platform   │ false     │ false     │ draw text with a provided start and end code making a gradient\n 4 │ ansi strip    │ platform   │ false     │ false     │ strip ansi escape sequences from string\n 5 │ any?          │ filters    │ false     │ false     │ Tests if any element of the input matches a predicate.\n 6 │ append        │ filters    │ false     │ false     │ Append a row to the table.\n 7 │ benchmark     │ system     │ false     │ false     │ Time the running time of a block\n 8 │ build-string  │ strings    │ false     │ false     │ Create a string from the arguments.\n 9 │ cal           │ generators │ false     │ false     │ Display a calendar.\n───┴───────────────┴────────────┴───────────┴───────────┴────────────────────────────────────────────────────────────────\n")])])]),s("hr"),e._v(" "),s("h3",{attrs:{id:"specific-information-on-a-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specific-information-on-a-command"}},[e._v("#")]),e._v(" Specific information on a command")]),e._v(" "),s("p",[e._v("To find more specific information on a command, use "),s("code",[e._v("help <COMMAND>")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),e._v(" fetch\n")])])]),s("p",[e._v("Output")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Fetch the contents from a URL (HTTP GET operation).\n\nUsage:\n  > fetch {flags} <URL>\n\nFlags:\n  -h, --help\n      Display this help message\n  -u, --user <Any>\n      the username when authenticating\n  -p, --password <Any>\n      the password when authenticating\n  -t, --timeout <Int>\n      timeout period in seconds\n  -H, --headers <Any>\n      custom headers you want to add\n  -r, --raw\n      fetch contents as text rather than a table\n\nParameters:\n  URL: the URL to fetch the contents from\n\nExamples:\n  Fetch content from url.com\n  > fetch url.com\n\n  Fetch content from url.com, with username and password\n  > fetch -u myuser -p mypass url.com\n\n  Fetch content from url.com, with custom header\n  > fetch -H [my-header-key my-header-value] url.com\n")])])]),s("hr"),e._v(" "),s("h3",{attrs:{id:"specific-information-on-a-command-subcommand"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specific-information-on-a-command-subcommand"}},[e._v("#")]),e._v(" Specific information on a command subcommand")]),e._v(" "),s("p",[e._v("To find more specific information on a command subcommand, use "),s("code",[e._v("help <COMMAND> <SUBCOMMAND>")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),e._v(" str reverse\n")])])]),s("p",[e._v("Output")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("outputs the reversals of the strings in the pipeline\n\nUsage:\n  > str reverse ...(rest)\n\nFlags:\n  -h, --help\n      Display this help message\n\nParameters:\n  ...rest: optionally reverse text by column paths\n\nExamples:\n  Return the reversals of multiple strings\n  > 'Nushell' | str reverse\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);