(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{218:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("This section includes specific settings for each hosting panel that Imunify360 supports. It is important to follow these instructions to setup Imunify360 plugin properly.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("ul",[e("li",[e("p",[t._v("Find the official cPanel documentation on the link: "),e("a",{attrs:{href:"https://documentation.cpanel.net/display/EA4/Apache+Module%3A+ModSecurity#ApacheModule:ModSecurity-InstallModSecHowtoinstalloruninstallmod_security2",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://documentation.cpanel.net/display/EA4/Apache+Module%3A+ModSecurity#ApacheModule:ModSecurity-InstallModSecHowtoinstalloruninstallmod_security2"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[t._v("Find the official Plesk documentation on the link: "),e("a",{attrs:{href:"https://docs.plesk.com/en-US/onyx/administrator-guide/server-administration/web-application-firewall-modsecurity.73383/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.plesk.com/en-US/onyx/administrator-guide/server-administration/web-application-firewall-modsecurity.73383/"),e("OutboundLink")],1)])])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),e("p",[t._v("It is not recommended to use firewalld and Plesk Firewall simultaneously, because Plesk does not fully support such configuration. We recommend to disable firewalld by running the command on the server:")]),t._v(" "),t._m(20),t._v(" "),e("p",[t._v("Read more about the problem at Plesk Help Center in this "),e("a",{attrs:{href:"https://support.plesk.com/hc/en-us/articles/115000905285-Plesk-Firewall-and-firewalld",target:"_blank",rel:"noopener noreferrer"}},[t._v("thread"),e("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),e("p",[t._v("To check, if Imunify360 ruleset is installed, run the following as root:")]),t._v(" "),t._m(25),t._v(" "),e("p",[t._v("If the output does not contain imunify360, for example:")]),t._v(" "),t._m(26),t._v(" "),e("p",[t._v("Then remove existing ruleset and install Imunify360 one:")]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"hosting-panels-firewall-rulesets-specific-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hosting-panels-firewall-rulesets-specific-settings","aria-hidden":"true"}},[this._v("#")]),this._v(" Hosting Panels Firewall Rulesets Specific Settings")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[e("span",{staticClass:"notranslate"},[t._v("mod_security")]),t._v(", the important software for Imunify360, is not installed automatically during Imunify360 installation process. Without "),e("span",{staticClass:"notranslate"},[t._v("mod_security")]),t._v(", Imunify360 will lack the following features:")]),t._v(" "),e("ul",[e("li",[t._v("Web application firewall")]),t._v(" "),e("li",[t._v("Malware scanning of files uploaded using web")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",{staticClass:"notranslate"},[this._v("Mod_security")]),this._v(" installation process is specific for different panels:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("Important!")]),t._v(" "),e("p",[t._v("If "),e("span",{staticClass:"notranslate"},[t._v("mod_security")]),t._v(" is installed after Imunify360, it is important to execute the following command to add "),e("span",{staticClass:"notranslate"},[t._v("mod_security")]),t._v(" ruleset to Imunify360:")]),t._v(" "),e("p",[t._v("For cPanel/Plesk:")]),t._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("imunify360-agent install-vendors\n")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If "),s("span",{staticClass:"notranslate"},[this._v("mod_security")]),this._v(" is installed before Imunify360, the rules will be installed automatically.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),s("p",[this._v("If Imunify360 installer detects any existing ruleset, it installs only minimal set of its rules. So, you need to disable all third-party rulesets prior to Imunify360 installation to get the full ruleset installed automatically.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"cpanel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpanel","aria-hidden":"true"}},[this._v("#")]),this._v(" cPanel")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("It is possible to enable "),s("span",{staticClass:"notranslate"},[this._v("Service Status")]),this._v(" checker for Imunify360. To do so, perform the following steps:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",[e("li",[e("p",[t._v("Go to "),e("span",{staticClass:"notranslate"},[e("em",[t._v("Service Configuration")])]),t._v(" and choose "),e("span",{staticClass:"notranslate"},[e("em",[t._v("Service Manager")])]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("In "),e("span",{staticClass:"notranslate"},[e("em",[t._v("Additional Services")])]),t._v(" section tick "),e("span",{staticClass:"notranslate"},[e("code",[t._v("imunify360-agent")])]),t._v(" and "),e("span",{staticClass:"notranslate"},[e("code",[t._v("imunify360-captcha")])]),t._v(" checkboxes.")])]),t._v(" "),e("li",[e("p",[t._v("Click "),e("span",{staticClass:"notranslate"},[e("em",[t._v("Save")])]),t._v(" and wait until cPanel enables the "),e("span",{staticClass:"notranslate"},[t._v("Service Status")]),t._v(" checker for Imunify360.")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/images/cpanel_set01_zoom83.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If succeeded, the status of Imunify360 service will be displayed at "),s("span",{staticClass:"notranslate"},[this._v("Service Status")]),this._v(" section of "),s("span",{staticClass:"notranslate"},[this._v("Server Status")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/images/cpanel_set02.jpg",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"modsecurity-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modsecurity-settings","aria-hidden":"true"}},[this._v("#")]),this._v(" ModSecurity Settings")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Recommended "),s("span",{staticClass:"notranslate"},[this._v("mod_security")]),this._v(" settings are:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("span",{staticClass:"notranslate"},[this._v("Audit Log Level – Only log noteworthy transactions")])]),this._v(" "),s("li",[s("span",{staticClass:"notranslate"},[this._v("Connections Engine – Do not process the rules")])]),this._v(" "),s("li",[s("span",{staticClass:"notranslate"},[this._v("Rules Engine – Process the rules")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/images/modsecuritysettings.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("It’s also recommended to disable any third-party "),s("span",{staticClass:"notranslate"},[this._v("mod_security")]),this._v(" vendors except Imunify360 ruleset (especially "),s("strong",[this._v("OWASP")]),this._v(" and "),s("strong",[this._v("Comodo")]),this._v(" ). These rulesets can cause large number of false-positives and duplicate Imunify360 ruleset.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To do so, go to "),s("span",{staticClass:"notranslate"},[this._v("ModSecurity Vendors")]),this._v(" section of cPanel main menu, and switch to "),s("span",{staticClass:"notranslate"},[s("code",[this._v("Off")])]),this._v(" all enabled vendors except Imunify360 ruleset.\nIf there is no Imunify360 ruleset installed, run "),s("span",{staticClass:"notranslate"},[s("code",[this._v("imunify360-agent install-vendors")])]),this._v(" command.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/images/whmmodsecurityvendors_zoom70.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"plesk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plesk","aria-hidden":"true"}},[this._v("#")]),this._v(" Plesk")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("systemctl disable firewalld\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"modsecurity-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modsecurity-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" ModSecurity Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("span",{staticClass:"notranslate"},[this._v("Web application firewall mode – On")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/images/modsecurityconfigurationpleskonyx.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If any "),s("span",{staticClass:"notranslate"},[this._v("mod_security")]),this._v(" ruleset was installed during Imunify360 installation, Imunify360 will not install its own ruleset, because Plesk supports only one ruleset at once.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# plesk sbin modsecurity_ctl -L --enabled")]),this._v("\nimunify360-full-apache\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# plesk sbin modsecurity_ctl -L --enabled")]),this._v("\ntortix\n")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# plesk sbin modsecurity_ctl --disable-all-rules --ruleset tortix")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# plesk sbin modsecurity_ctl --uninstall --ruleset tortix")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# plesk sbin modsecurity_ctl -L --enabled")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# imunify360-agent install-vendors")]),t._v("\nINFO    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("+ 3785ms"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                         defence360agent.simple_rpc"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("Executing "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'install-vendors'")]),t._v(","),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", params: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nINFO    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("+ 8781ms"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   defence360agent.subsys.panels.plesk.mod_security"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("Successfully installed vendor "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'imunify360-full-apache'")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("\nINFO    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("+ 8782ms"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                  defence360agent.subsys.web_server"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("Performing web_server graceful restart\nOK\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# plesk sbin modsecurity_ctl -L --enabled")]),t._v("\nimunify360-full-apache\n")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("Please make sure that "),e("span",{staticClass:"notranslate"},[e("em",[t._v("Update rule sets")])]),t._v(" option is disabled in your Plesk "),e("span",{staticClass:"notranslate"},[e("em",[t._v("Web Application Firewall")])]),t._v(" interface on the "),e("span",{staticClass:"notranslate"},[e("em",[t._v("Settings")])]),t._v(" tab.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),s("p",[this._v("Note that in the current version of Plesk, "),s("span",{staticClass:"notranslate"},[s("em",[this._v("Update rule sets")])]),this._v(" option is available if one of the "),s("span",{staticClass:"notranslate"},[s("em",[this._v("Atomic Basic ModSecurity/Advanced ModSecurity Rules by Atomicorp/Comodo ModSecurity")])]),this._v(" Rule Set is enabled.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"directadmin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#directadmin","aria-hidden":"true"}},[this._v("#")]),this._v(" DirectAdmin")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("During installation on DirectAdmin, Imunify360 will try to install "),s("span",{staticClass:"notranslate"},[this._v("mod_security")]),this._v(" automatically using custombuild 2.0.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),s("p",[this._v("Automatic installation of Imunify360 ruleset is only supported with custombuild 2.0.")])])}],!1,null,null,null);s.default=n.exports}}]);