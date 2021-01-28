(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{571:function(e,t,a){"use strict";a.r(t);var r=a(42),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),a("p",[e._v("To get the most out of nu,\nit is important to setup your path and env for easy access.\nThere are other ways to view these values and variables,\nhowever setting up your nu configuration will make it much easier as these are supported cross-platform.")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"configure-your-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-your-path"}},[e._v("#")]),e._v(" Configure your path")]),e._v(" "),a("p",[a("code",[e._v("config set path $nu.path")])]),e._v(" "),a("p",[e._v("Output")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("━━━━━━━━━━━━━━━━━━\n path\n──────────────────\n [table: 91 rows]\n━━━━━━━━━━━━━━━━━━\n")])])]),a("hr"),e._v(" "),a("h3",{attrs:{id:"configure-your-environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-your-environment-variables"}},[e._v("#")]),e._v(" Configure your environment variables")]),e._v(" "),a("p",[a("code",[e._v("config set env $nu.env")])]),e._v(" "),a("p",[e._v("Output")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━\n path             │ env\n──────────────────┼────────────────\n [table: 91 rows] │ [table: 1 row]\n━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━\n")])])]),a("hr"),e._v(" "),a("h3",{attrs:{id:"how-to-list-your-paths"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-list-your-paths"}},[e._v("#")]),e._v(" How to list your paths")]),e._v(" "),a("p",[a("code",[e._v("echo $nu.path")])]),e._v(" "),a("p",[e._v("or")]),e._v(" "),a("p",[a("code",[e._v("config | get path")])]),e._v(" "),a("p",[e._v("Output")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n #  │ <value>\n────┼──────────────────────────────────────────────────────────────────────\n  0 │ C:\\Program Files (x86)\\Microsoft SQL Server\\140\\Tools\\Binn\\\n  1 │ C:\\Program Files\\Microsoft SQL Server\\140\\Tools\\Binn\\\n  2 │ C:\\Program Files\\Microsoft SQL Server\\140\\DTS\\Binn\\\n  3 │ C:\\Program Files (x86)\\Microsoft SQL Server\\150\\DTS\\Binn\\\n  4 │ C:\\Program Files\\erl10.3\\bin\n  5 │ C:\\Program Files (x86)\\Elixir\\bin\n  4 │ C:\\Program Files\\MongoDB\\Server\\4.0\\bin\n  5 │ C:\\Users\\nu_shell\\.cargo\\bin\n  6 │ C:\\Program Files\\PostgreSQL\\9.6\\bin\n  7 │ C:\\Program Files\\PostgreSQL\\9.6\\lib\n  8 │ C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\\n  9 │ C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common\n 10 │ C:\\Program Files\\Common Files\\Microsoft Shared\\Windows Live\n 11 │ C:\\Program Files (x86)\\Common Files\\Microsoft Shared\\Windows Live\n 12 │ C:\\Windows\\system32\n 13 │ C:\\Windows\n 14 │ C:\\Windows\\System32\\Wbem\n 15 │ C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\\n━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n")])])]),a("hr"),e._v(" "),a("h3",{attrs:{id:"how-to-list-your-environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-list-your-environment-variables"}},[e._v("#")]),e._v(" How to list your environment variables")]),e._v(" "),a("p",[a("code",[e._v("echo $nu.env | pivot")])]),e._v(" "),a("p",[e._v("or")]),e._v(" "),a("p",[a("code",[e._v("config | get env | pivot")])]),e._v(" "),a("p",[e._v("Output")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n #  │ Column0                         │ Column1\n────┼─────────────────────────────────┼──────────────────────────────────────────────────────────\n  0 │ =::                             │ ::\\\n  1 │ ALLUSERSPROFILE                 │ C:\\ProgramData\n  2 │ APPDATA                         │ C:\\Users\\nu_shell\\AppData\\Roaming\n  3 │ CLASSPATH                       │ .;C:\\Program Files (x86)\\Java\\jre6\\lib\\ext\\QTJava.zip\n  4 │ COLUMNS                         │ 80\n  5 │ COMPUTERNAME                    │ nu_shell\n  6 │ ChocolateyInstall               │ C:\\ProgramData\\chocolatey\n  7 │ ChocolateyLastPathUpdate        │ Sun Oct  8 16:37:30 2017\n━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n")])])]),a("hr"),e._v(" "),a("h3",{attrs:{id:"how-to-get-a-single-environment-variable-s-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-a-single-environment-variable-s-value"}},[e._v("#")]),e._v(" How to get a single environment variable's value")]),e._v(" "),a("p",[a("code",[e._v("config | get env.APPDATA")])]),e._v(" "),a("p",[e._v("or")]),e._v(" "),a("p",[a("code",[e._v("config | get env | select APPDATA")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n APPDATA\n───────────────────────────────────\n C:\\Users\\nu_shell\\AppData\\Roaming\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);