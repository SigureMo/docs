(window.webpackJsonp=window.webpackJsonp||[]).push([[22,25,41,52,53],{248:function(t,s,e){},254:function(t,s,e){},266:function(t,s,e){"use strict";e(248)},270:function(t,s,e){"use strict";e.r(s);e(266);var a=e(5),c=Object(a.a)({},(function(){var t=this._self._c;return t("button",{staticClass:"vt-switch",attrs:{type:"button"}},[t("span",{staticClass:"vt-switch-check"},[this.$slots.default?t("span",{staticClass:"vt-switch-icon"},[this._t("default")],2):this._e()])])}),[],!1,null,null,null);s.default=c.exports},271:function(t,s,e){"use strict";e.r(s);var a=e(5),c=Object(a.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"}}),this._v(" "),t("path",{attrs:{d:"M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"}}),this._v(" "),t("path",{attrs:{d:"M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"}}),this._v(" "),t("path",{attrs:{d:"M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"}}),this._v(" "),t("path",{attrs:{d:"M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"}}),this._v(" "),t("path",{attrs:{d:"M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"}}),this._v(" "),t("path",{attrs:{d:"M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"}}),this._v(" "),t("path",{attrs:{d:"M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"}}),this._v(" "),t("path",{attrs:{d:"M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"}})])}),[],!1,null,null,null);s.default=c.exports},272:function(t,s,e){"use strict";e.r(s);var a=e(5),c=Object(a.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"}})])}),[],!1,null,null,null);s.default=c.exports},281:function(t,s,e){"use strict";e(254)},282:function(t,s,e){},298:function(t,s,e){"use strict";e.r(s);var a=e(270),c=e(271),r=e(272);var n={components:{VTSwitch:a.default,VTIconSun:c.default,VTIconMoon:r.default},data:()=>({isDark:!1}),created(){"undefined"!=typeof window&&(this.userPreference=localStorage.getItem("--pia-theme-appearance--")||"auto",this.query=window.matchMedia("(prefers-color-scheme: dark)"),this.isDark="auto"===this.userPreference?this.query.matches:"dark"===this.userPreference,this.query.onchange=t=>{"auto"===this.userPreference&&this.setClass(this.isDark=t.matches)},this.setClass(this.isDark))},methods:{setClass(t){console.log("dark",t);document.documentElement.classList[t?"add":"remove"]("dark")},toggle(){this.setClass(this.isDark=!this.isDark),localStorage.setItem("--pia-theme-appearance--",this.userPreference=this.isDark?this.query.matches?"auto":"dark":this.query.matches?"light":"auto")}}},i=(e(281),e(5)),l=Object(i.a)(n,(function(){var t=this,s=t._self._c;return s("VTSwitch",{staticClass:"vt-switch-appearance",attrs:{"aria-label":"toggle dark mode"},nativeOn:{click:function(s){return t.toggle.apply(null,arguments)}}},[s("VTIconSun",{staticClass:"vt-switch-appearance-sun"}),t._v(" "),s("VTIconMoon",{staticClass:"vt-switch-appearance-moon"})],1)}),[],!1,null,null,null);s.default=l.exports},313:function(t,s,e){"use strict";e(282)},338:function(t,s,e){"use strict";e.r(s);var a={components:{VTSwitchAppearance:e(298).default}},c=(e(313),e(5)),r=Object(c.a)(a,(function(){var t=this._self._c;return t("div",{staticClass:"VPNavBarAppearance"},[t("VTSwitchAppearance")],1)}),[],!1,null,"3cf7bb91",null);s.default=r.exports}}]);