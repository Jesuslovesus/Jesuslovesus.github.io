webpackJsonp([1],{"/T0L":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){return e&&e.__esModule?e:{default:e}}(n("I95x"));t.default={name:"",data:function(){return{isFullscreen:!1,titleMsg:"全屏模式"}},components:{},mounted:function(){},methods:{screenFullClick:function(e){return s.default.enabled||this.$message({message:"浏览器不支持",type:"warning"}),s.default.toggle(),this.isFullscreen?(s.default.exit(),this.isFullscreen=!1,this.titleMsg="全屏模式"):(s.default.request(),this.isFullscreen=!0,this.titleMsg="退出全屏"),e}}}},"4azK":function(e,t,n){"use strict";var s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[{mx:("mx"===e.innerSize.level||2===e.isCollapseFixed)&&1!==e.isCollapseFixed,m:("m"===e.innerSize.level||1===e.isCollapseFixed)&&2!==e.isCollapseFixed,sm:"sm"===e.innerSize.level},"app-wrapper"]},["sm"!==e.innerSize.level?n("header",{staticClass:"left-box"},[n("nav-left",{staticClass:"left-nav",attrs:{isCollapse:e.isCollapse}})],1):n("div",{staticClass:"fixed-nav"}),e._v(" "),n("article",{staticClass:"content-wrap"},[n("nav",{staticClass:"top-box"},[n("span",{on:{click:e.closeNav}},[e._v("点击折叠"+e._s(e.isCollapse))]),e._v(" "),n("div",{staticClass:"set-right-box flex-vertical-center"},[n("router-link",{attrs:{to:"/addnation"}},[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.addNation}},[e._v("添加/修改 民族"),n("i",{staticClass:"el-icon-arrow-right el-icon--right"})])],1)],1)]),e._v(" "),n("div",{staticClass:"content-box"},[n("router-view")],1)])])},staticRenderFns:[]};t.a=s},"4iBi":function(e,t){},"6KEw":function(e,t){},"8keP":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{isCollapse:{type:Boolean,default:!0}},data:function(){return{}},methods:{}}},DI44:function(e,t){},I95x:function(e,t){!function(){"use strict";var t="undefined"!=typeof window&&void 0!==window.document?window.document:{},n=void 0!==e&&e.exports,s="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,l=function(){for(var e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],s=0,l=n.length,i={};s<l;s++)if((e=n[s])&&e[1]in t){for(s=0;s<e.length;s++)i[n[0][s]]=e[s];return i}return!1}(),i={change:l.fullscreenchange,error:l.fullscreenerror},r={request:function(e){var n=l.requestFullscreen;e=e||t.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?e[n]():e[n](s&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){t[l.exitFullscreen]()},toggle:function(e){this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,n){var s=i[e];s&&t.addEventListener(s,n,!1)},off:function(e,n){var s=i[e];s&&t.removeEventListener(s,n,!1)},raw:l};l?(Object.defineProperties(r,{isFullscreen:{get:function(){return Boolean(t[l.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[l.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(t[l.fullscreenEnabled])}}}),n?e.exports=r:window.screenfull=r):n?e.exports=!1:window.screenfull=!1}()},JIl4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){return e&&e.__esModule?e:{default:e}}(n("Dd8w")),l=n("NYxO"),i=n("qAvC");t.default={name:"layout",computed:(0,s.default)({},(0,l.mapGetters)(["innerSize"])),mounted:function(){"mx"===this.innerSize.level&&(this.isCollapse=!1),"m"===this.innerSize.level&&(this.isCollapse=!0)},data:function(){return{isCollapseFixed:0,isCollapse:!1,closeLeftNav:!1,closeTopNav:!1}},watch:{innerSize:{handler:function(e){if(0===this.isCollapseFixed)switch(e.level){case"mx":this.isCollapse=!1;break;case"m":this.isCollapse=!0}},deep:!0}},components:{AppMain:i.AppMain,HeaderTop:i.HeaderTop,NavLeft:i.NavLeft},methods:{closeNav:function(){if(this.isCollapse)return this.isCollapse=!1,void(this.isCollapseFixed=2);this.isCollapse=!0,this.isCollapseFixed=1},addNation:function(){this.isCollapse=!0,this.isCollapseFixed=1}}}},Mp8B:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("/T0L"),l=n.n(s);for(var i in s)"default"!==i&&function(e){n.d(t,e,function(){return s[e]})}(i);var r=n("hh0R"),a=function(e){n("6KEw")},u=n("VU/8")(l.a,r.a,!1,a,"data-v-4601e8a4",null);t.default=u.exports},MrlG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("8keP"),l=n.n(s);for(var i in s)"default"!==i&&function(e){n.d(t,e,function(){return s[e]})}(i);var r=n("q8JC"),a=function(e){n("afzL"),n("4iBi")},u=n("VU/8")(l.a,r.a,!1,a,"data-v-27a6a00c",null);t.default=u.exports},NQk7:function(e,t,n){"use strict";var s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header-wrap"},[t("div",{staticClass:"left"}),this._v(" "),t("div",{staticClass:"right"}),this._v(" "),t("div",{staticClass:"screen-full-icon"},[t("screenfull")],1)])},staticRenderFns:[]};t.a=s},T27R:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("gcwe"),l=n.n(s);for(var i in s)"default"!==i&&function(e){n.d(t,e,function(){return s[e]})}(i);var r=n("NQk7"),a=function(e){n("mjY9")},u=n("VU/8")(l.a,r.a,!1,a,"data-v-4299538c",null);t.default=u.exports},ZRrO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("JIl4"),l=n.n(s);for(var i in s)"default"!==i&&function(e){n.d(t,e,function(){return s[e]})}(i);var r=n("4azK"),a=function(e){n("DI44")},u=n("VU/8")(l.a,r.a,!1,a,"data-v-41b596f0",null);t.default=u.exports},afzL:function(e,t){},gcwe:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){return e&&e.__esModule?e:{default:e}}(n("Mp8B"));t.default={name:"",data:function(){return{}},components:{screenfull:s.default},mounted:function(){},methods:{}}},hh0R:function(e,t,n){"use strict";var s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"screen-full-box"},[n("i",{staticClass:" el-icon-rank",attrs:{title:e.titleMsg},on:{click:function(t){e.screenFullClick(!1)}}})])},staticRenderFns:[]};t.a=s},mjY9:function(e,t){},q8JC:function(e,t,n){"use strict";var s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"nav-left-wrap"},[t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:this.isCollapse}},[t("el-submenu",{attrs:{index:"1"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-location"}),this._v(" "),t("span",{attrs:{slot:"title"},slot:"title"},[this._v("导航一")])]),this._v(" "),t("el-menu-item-group",[t("span",{attrs:{slot:"title"},slot:"title"},[this._v("分组一")]),this._v(" "),t("el-menu-item",{attrs:{index:"1-1"}},[this._v("选项1")]),this._v(" "),t("el-menu-item",{attrs:{index:"1-2"}},[this._v("选项2")])],1),this._v(" "),t("el-menu-item-group",{attrs:{title:"分组2"}},[t("el-menu-item",{attrs:{index:"1-3"}},[this._v("选项3")])],1),this._v(" "),t("el-submenu",{attrs:{index:"1-4"}},[t("span",{attrs:{slot:"title"},slot:"title"},[this._v("选项4")]),this._v(" "),t("el-menu-item",{attrs:{index:"1-4-1"}},[this._v("选项1")])],1)],2),this._v(" "),t("el-menu-item",{attrs:{index:"2"}},[t("i",{staticClass:"el-icon-menu"}),this._v(" "),t("span",{attrs:{slot:"title"},slot:"title"},[this._v("导航二")])]),this._v(" "),t("el-menu-item",{attrs:{index:"3",disabled:""}},[t("i",{staticClass:"el-icon-document"}),this._v(" "),t("span",{attrs:{slot:"title"},slot:"title"},[this._v("导航三")])]),this._v(" "),t("el-menu-item",{attrs:{index:"4"}},[t("i",{staticClass:"el-icon-setting"}),this._v(" "),t("span",{attrs:{slot:"title"},slot:"title"},[this._v("导航四")])])],1)],1)},staticRenderFns:[]};t.a=s},qAvC:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n("T27R");Object.defineProperty(t,"HeaderTop",{enumerable:!0,get:function(){return s(l).default}});var i=n("MrlG");Object.defineProperty(t,"NavLeft",{enumerable:!0,get:function(){return s(i).default}})}});