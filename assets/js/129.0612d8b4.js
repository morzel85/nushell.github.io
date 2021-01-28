(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{527:function(s,t,a){"use strict";a.r(t);var e=a(42),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Trim leading and following whitespace from text data")]),s._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"    Hello world"')]),s._v("\n    Hello world\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"    Hello world"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" trim\nHello world\n")])])]),a("p",[s._v("Trim can also be passed a list or table of text, for which it will trim each item individually.\nIt will fail if any element in the list or table is not of type String.")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" greetings.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" to json\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"  hi  "')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"  hello  "')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"  wassup  "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" greetings.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" trim "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" to json\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hi"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wassup"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" cargo search shells --limit "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" lines "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" parse "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{crate_name} = {version} #{description}"')]),s._v("\n━━━┯━━━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ crate_name         │ version                     │ description")]),s._v("\n───┼────────────────────┼─────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ shells             │ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.2.0"')]),s._v("                     │  Sugar-coating "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" invoking shell commands directly from Rust.\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ ion-shell          │ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0"')]),s._v("                     │  The Ion Shell\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ shell-words        │ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.1.0"')]),s._v("                     │  Process "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" line according to parsing rules of UNIX shell\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ nu                 │ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.5.0"')]),s._v("                     │  A shell "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the GitHub era\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │ dotenv-shell       │ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.1"')]),s._v("                     │  Launch a new shell "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("or another program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" with your loaded dotenv\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │ shell_completion   │ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.1"')]),s._v("                     │  Write shell completion scripts "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" pure Rust\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" │ shell-hist         │ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.2.0"')]),s._v("                     │  A CLI tool "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" inspecting shell "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" │ tokei              │ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.0.1"')]),s._v("                    │  A utility that allows you to count code, quickly.\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" │ rash-shell         │ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.1.0"')]),s._v("                     │  A bourne-compatible shell inspired by dash\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" │ rust_keylock_shell │ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.10.0"')]),s._v("                    │  Shell access to the rust-keylock. rust-keylock is a password manager with goals\n   │                    │                             │ to be Secure, …\n━━━┷━━━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" cargo search shells --limit "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" lines "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" parse "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{crate_name} = {version} #{description}"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" trim\n━━━┯━━━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ crate_name         │ version  │ description")]),s._v("\n───┼────────────────────┼──────────┼──────────────────────────────────────────────────────────────────────────────────\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ shells             │ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.2.0"')]),s._v("  │  Sugar-coating "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" invoking shell commands directly from Rust.\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ ion-shell          │ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0"')]),s._v("  │  The Ion Shell\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ shell-words        │ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.1.0"')]),s._v("  │  Process "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" line according to parsing rules of UNIX shell\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ nu                 │ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.5.0"')]),s._v("  │  A shell "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the GitHub era\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │ dotenv-shell       │ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.1"')]),s._v("  │  Launch a new shell "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("or another program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" with your loaded dotenv\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │ shell_completion   │ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.1"')]),s._v("  │  Write shell completion scripts "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" pure Rust\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" │ shell-hist         │ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.2.0"')]),s._v("  │  A CLI tool "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" inspecting shell "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" │ tokei              │ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.0.1"')]),s._v(" │  A utility that allows you to count code, quickly.\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" │ rash-shell         │ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.1.0"')]),s._v("  │  A bourne-compatible shell inspired by dash\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" │ rust_keylock_shell │ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.10.0"')]),s._v(" │  Shell access to the rust-keylock. rust-keylock is a password manager with goals\n   │                    │          │ to be Secure, …\n━━━┷━━━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);