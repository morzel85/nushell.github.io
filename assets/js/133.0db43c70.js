(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{531:function(s,e,a){"use strict";a.r(e);var n=a(42),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("This command filters the content of a table based on a condition passed as a parameter, which must be a boolean expression making use of any of the table columns. Other commands such as "),a("code",[s._v("ls")]),s._v(" are capable of feeding "),a("code",[s._v("where")]),s._v(" with their output through pipelines.")]),s._v(" "),a("p",[s._v("Where has two general forms:")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("where <column_name> <comparison> <value>")])]),s._v(" "),a("li",[a("code",[s._v("where <column_name>")])])]),s._v(" "),a("h2",{attrs:{id:"where-with-comparison"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-with-comparison"}},[s._v("#")]),s._v(" Where with comparison")]),s._v(" "),a("p",[s._v("In the first form, "),a("code",[s._v("where")]),s._v(" is passed a column name that the filter will run against. Next, is the operator used to compare this column to its value. The following operators are supported:")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("<")]),s._v(" (less than)")]),s._v(" "),a("li",[a("code",[s._v("<=")]),s._v(" (less than or equal)")]),s._v(" "),a("li",[a("code",[s._v(">")]),s._v(" (greater than)")]),s._v(" "),a("li",[a("code",[s._v(">=")]),s._v(" (greater than or equal)")]),s._v(" "),a("li",[a("code",[s._v("!=")]),s._v(" (not equal)")]),s._v(" "),a("li",[a("code",[s._v("==")]),s._v(" (equal)")])]),s._v(" "),a("p",[s._v("Strings have two additional operators:")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("=~")]),s._v(" (fuzzy match to allow)")]),s._v(" "),a("li",[a("code",[s._v("!~")]),s._v(" (fuzzy match to not allow)")])]),s._v(" "),a("p",[s._v("Dates can also be compared using the duration types. For example, "),a("code",[s._v("where accessed > 2w")]),s._v(" will check the date in accessed to see if it's greater than 2 weeks ago. Durations currently allow these abbreviations:")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("1s")]),s._v(" (one second)")]),s._v(" "),a("li",[a("code",[s._v("1m")]),s._v(" (one minute)")]),s._v(" "),a("li",[a("code",[s._v("1h")]),s._v(" (one hour)")]),s._v(" "),a("li",[a("code",[s._v("1d")]),s._v(" (one day)")]),s._v(" "),a("li",[a("code",[s._v("1w")]),s._v(" (one week)")]),s._v(" "),a("li",[a("code",[s._v("1M")]),s._v(" (one month)")]),s._v(" "),a("li",[a("code",[s._v("1y")]),s._v(" (one year)")])]),s._v(" "),a("h2",{attrs:{id:"boolean-check"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boolean-check"}},[s._v("#")]),s._v(" Boolean check")]),s._v(" "),a("p",[s._v("Where with the form "),a("code",[s._v("| where readonly")]),s._v(" is used to check boolean values. For example, the command "),a("code",[s._v("ls --long | where readonly")]),s._v(" will list only those files that are readonly.")]),s._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("input-command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 4kb\n───┬────────────┬──────┬──────────┬─────────────\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ name       │ type │ size     │ modified")]),s._v("\n───┼────────────┼──────┼──────────┼─────────────\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ Cargo.lock │ File │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("113.3")]),s._v(" KB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v(" mins ago\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ Cargo.toml │ File │   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.6")]),s._v(" KB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v(" mins ago\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ README.md  │ File │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15.8")]),s._v(" KB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" mins ago\n───┴────────────┴──────┴──────────┴─────────────\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where cpu "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n───┬───────┬──────────────────┬─────────┬────────┬──────────┬─────────\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ pid   │ name             │ status  │ cpu    │ mem      │ virtual")]),s._v("\n───┼───────┼──────────────────┼─────────┼────────┼──────────┼─────────\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17917")]),s._v(" │ nu_plugin_core_p │ Running │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.1678")]),s._v(" │   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.1")]),s._v(" MB │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.8")]),s._v(" GB\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14717")]),s._v(" │ Discord Helper "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" │ Running │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.6842")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("371.9")]),s._v(" MB │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.0")]),s._v(" GB\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14713")]),s._v(" │ Discord Helper   │ Running │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2099")]),s._v(" │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27.8")]),s._v(" MB │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.8")]),s._v(" GB\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14710")]),s._v(" │ Discord          │ Running │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0883")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("105.4")]),s._v(" MB │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.0")]),s._v(" GB\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9643")]),s._v(" │ Terminal         │ Running │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.0313")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("266.4")]),s._v(" MB │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.6")]),s._v(" GB\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7864")]),s._v(" │ Microsoft.Python │ Running │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9828")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("340.9")]),s._v(" MB │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.0")]),s._v(" GB\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24402")]),s._v(" │ Code Helper "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Ren │ Running │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0644")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("337.3")]),s._v(" MB │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.4")]),s._v(" GB\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24401")]),s._v(" │ Code Helper "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Ren │ Running │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0031")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("593.5")]),s._v(" MB │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.6")]),s._v(" GB\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" │   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("519")]),s._v(" │ EmojiFunctionRow │ Running │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2063")]),s._v(" │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52.7")]),s._v(" MB │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.5")]),s._v(" GB\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" │   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("376")]),s._v(" │ CommCenter       │ Running │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1620")]),s._v(" │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30.0")]),s._v(" MB │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.5")]),s._v(" GB\n───┴───────┴──────────────────┴─────────┴────────┴──────────┴─────────\n\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where accessed "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1w\n───┬────────────────────┬──────┬────────┬──────────┬───────────┬─────────────┬───────┬──────────┬──────────────┬─────────────┬─────────────\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ name               │ type │ target │ readonly │ mode      │ uid         │ group │ size     │ created      │ accessed    │ modified")]),s._v("\n───┼────────────────────┼──────┼────────┼──────────┼───────────┼─────────────┼───────┼──────────┼──────────────┼─────────────┼─────────────\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ CODE_OF_CONDUCT.md │ File │        │ No       │ rw-r--r-- │ josephlyons │ staff │   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.4")]),s._v(" KB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(" mins ago  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(" secs ago │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(" mins ago\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ CONTRIBUTING.md    │ File │        │ No       │ rw-r--r-- │ josephlyons │ staff │   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.3")]),s._v(" KB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(" mins ago  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" mins ago  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" mins ago\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ Cargo.lock         │ File │        │ No       │ rw-r--r-- │ josephlyons │ staff │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("113.3")]),s._v(" KB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(" mins ago  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(" mins ago │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(" mins ago\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ Cargo.toml         │ File │        │ No       │ rw-r--r-- │ josephlyons │ staff │   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.6")]),s._v(" KB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(" mins ago  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(" mins ago │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(" mins ago\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │ README.md          │ File │        │ No       │ rw-r--r-- │ josephlyons │ staff │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15.8")]),s._v(" KB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(" mins ago  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" min ago   │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" min ago\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │ TODO.md            │ File │        │ No       │ rw-r--r-- │ josephlyons │ staff │      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" B │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(" mins ago  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(" mins ago │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(" mins ago\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" │ crates             │ Dir  │        │ No       │ rwxr-xr-x │ josephlyons │ staff │    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("704")]),s._v(" B │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" months ago │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(" mins ago │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(" mins ago\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" │ docs               │ Dir  │        │ No       │ rwxr-xr-x │ josephlyons │ staff │    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192")]),s._v(" B │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" months ago │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(" mins ago │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(" mins ago\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" │ src                │ Dir  │        │ No       │ rwxr-xr-x │ josephlyons │ staff │    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v(" B │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" months ago │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" day ago   │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" day ago\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" │ target             │ Dir  │        │ No       │ rwxr-xr-x │ josephlyons │ staff │    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("160")]),s._v(" B │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago   │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago\n───┴────────────────────┴──────┴────────┴──────────┴───────────┴─────────────┴───────┴──────────┴──────────────┴─────────────┴─────────────\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yml"')]),s._v("\n──────────┬─────────────\n name     │ .gitpod.yml\n "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v("     │ File\n size     │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("866")]),s._v(" B\n modified │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" month ago\n──────────┴─────────────\n")])])])])}),[],!1,null,null,null);e.default=t.exports}}]);