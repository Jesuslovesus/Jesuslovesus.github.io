webpackJsonp([1],{"+QKU":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("sQE8"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var c=n("tHPH"),a=function(t){n("oBhc"),n("tJn5")},s=n("VU/8")(o.a,c.a,!1,a,"data-v-33d6619e",null);e.default=s.exports},"2C0Q":function(t,e){},"6v2H":function(t,e){},"79iA":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("ssLC"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var c=n("Cp7k"),a=function(t){n("6v2H")},s=n("VU/8")(o.a,c.a,!1,a,"data-v-2c384ad2",null);e.default=s.exports},"8Vnz":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",data:function(){return{}},components:{},mounted:function(){}}},ALYN:function(t,e){},CBCW:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",data:function(){return{}},components:{},mounted:function(){}}},Cp7k:function(t,e,n){"use strict";var i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n  help 文档\n  "),e("p",[this._v("\n    选择上方的按钮进行下一步操作\n  ")])])}]};e.a=i},E4rJ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("8Vnz"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var c=n("Hixu"),a=function(t){n("ALYN")},s=n("VU/8")(o.a,c.a,!1,a,"data-v-67f87b1c",null);e.default=s.exports},Hixu:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"edit-pro"},[this._v("\n  edit-pro\n")])},staticRenderFns:[]};e.a=i},bK0X:function(t,e){},dOoz:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"add-min"},[this._v("\n  add-min\n")])},staticRenderFns:[]};e.a=i},gm1o:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",data:function(){return{}},components:{},mounted:function(){}}},izrt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("CBCW"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var c=n("dOoz"),a=function(t){n("2C0Q")},s=n("VU/8")(o.a,c.a,!1,a,"data-v-6d2c6afe",null);e.default=s.exports},"nRm/":function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"edit-min"},[this._v("\n  edit-min\n")])},staticRenderFns:[]};e.a=i},oBhc:function(t,e){},qKFO:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("gm1o"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var c=n("nRm/"),a=function(t){n("bK0X")},s=n("VU/8")(o.a,c.a,!1,a,"data-v-a317ff18",null);e.default=s.exports},qpiB:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n("izrt");Object.defineProperty(e,"addMin",{enumerable:!0,get:function(){return i(o).default}});var r=n("qKFO");Object.defineProperty(e,"editMin",{enumerable:!0,get:function(){return i(r).default}});var c=n("E4rJ");Object.defineProperty(e,"editPro",{enumerable:!0,get:function(){return i(c).default}});var a=n("79iA");Object.defineProperty(e,"help",{enumerable:!0,get:function(){return i(a).default}})},sQE8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("NYxO");var i=n("Z+cC"),o=n("qpiB");e.default={name:"layout",computed:{},mounted:function(){},data:function(){return{compileContent:!0,compileType:"",step:1,chooseType:"0",choosepage:["help","addMin","editMin","editPro"]}},components:{screenfull:i.screenfull,help:o.help,addMin:o.addMin,editMin:o.editMin,editPro:o.editPro},methods:{chooseBtn:function(t){this.setActiveItem(t),this.chooseType=t},setActiveItem:function(t){this.$refs.carousel.setActiveItem(t)}}}},ssLC:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",data:function(){return{}},components:{},mounted:function(){}}},tHPH:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"add-wrapper"},[n("article",{staticClass:"content-wrap"},[n("nav",{staticClass:"top-box"},[n("div",{staticClass:"set-left-box flex-vertical-center"},[n("router-link",{attrs:{to:"/place"}},[n("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("首页")])],1),t._v(" "),n("router-link",{attrs:{to:"/controlCenter"}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"进入控制中心",placement:"bottom"}},[n("el-button",{attrs:{size:"mini",type:"warning",icon:"el-icon-setting"}})],1)],1)],1),t._v(" "),n("div",{staticClass:"set-right-box flex-vertical-center"},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"帮助",placement:"bottom"}},[n("el-button",{attrs:{size:"mini",type:"warning",icon:"el-icon-question",circle:""},on:{click:function(e){t.setActiveItem("0")}}})],1),t._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"bottom"}},[n("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""}})],1),t._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"保存",placement:"bottom"}},[n("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-document",circle:""}})],1),t._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"发布",placement:"bottom"}},[n("el-button",{attrs:{size:"mini",type:"success",icon:"el-icon-upload",circle:""}})],1),t._v(" "),n("div",{staticClass:"screen-box"},[n("screenfull")],1)],1)]),t._v(" "),n("div",{staticClass:"content-box"},[1===t.step?n("div",{staticClass:"choose-box"},[n("p",[n("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(e){t.chooseBtn("1")}}},[t._v("添加新的少数民族")]),t._v(" "),n("el-button",{attrs:{type:"warning",icon:"el-icon-edit"},on:{click:function(e){t.chooseBtn("2")}}},[t._v("修改已有少数民族")]),t._v(" "),n("el-button",{attrs:{type:"success",icon:"el-icon-edit"},on:{click:function(e){t.chooseBtn("3")}}},[t._v("完善省份信息")])],1),t._v(" "),n("div",[n("el-carousel",{ref:"carousel",attrs:{autoplay:!1,arrow:"never","indicator-position":"none"}},t._l(t.choosepage,function(t,e){return n("el-carousel-item",{key:t,attrs:{name:e.toString()}},[n(t,{tag:"component"})],1)}))],1)]):t._e()])])])},staticRenderFns:[]};e.a=i},tJn5:function(t,e){}});