webpackJsonp([0],{"+p4F":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:["data"],name:"",data:function(){return{}},components:{},mounted:function(){},methods:{bgImg:function(t){try{return e("Kfnb")("./"+t+".jpg")}catch(t){return e("SXtf")}}}}},"+x8n":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"",data:function(){return{}},components:{},mounted:function(){}}},"/+Jn":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("hGVh"),r=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);var i=e("JtNo"),u=function(t){e("ljla")},s=e("VU/8")(r.a,i.a,!1,u,"data-v-e99e40e2",null);n.default=s.exports},"6S6o":function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var r=a(e("Dd8w")),o=e("NYxO"),i=a(e("/+Jn")),u=a(e("7yc6")),s=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.default=t,n}(e("5reh"));n.default={name:"",computed:(0,r.default)({},(0,o.mapGetters)(["minorityContent"])),data:function(){return{statusType:"first",tabPosition:"top"}},components:{allContent:i.default,listContent:u.default},mounted:function(){this.$store.commit(s.APP_MENU_BTN_COLOR,"#303133"),document.title=this.minorityContent.name},methods:{setStatus:function(t,n){}},destroyed:function(){this.$store.commit(s.APP_MENU_BTN_COLOR,"#ffffff")}}},"79Mv":function(t,n){},"7yc6":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("Q0B5"),r=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);var i=e("L4v7"),u=function(t){e("fBuY")},s=e("VU/8")(r.a,i.a,!1,u,"data-v-45e98f43",null);n.default=s.exports},8506:function(t,n,e){t.exports=e.p+"static/img/religion.4aee01c.jpg"},JtNo:function(t,n,e){"use strict";var a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  "+this._s(this.data)+"\n")])},staticRenderFns:[]};n.a=a},Kfnb:function(t,n,e){function a(t){return e(r(t))}function r(t){var n=o[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}var o={"./foods.jpg":"SXtf","./history.jpg":"ZrWy","./religion.jpg":"8506"};a.keys=function(){return Object.keys(o)},a.resolve=r,t.exports=a,a.id="Kfnb"},L4v7:function(t,n,e){"use strict";var a={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"content-wrap"},[n(this.statusType,{tag:"component",attrs:{data:this.data.content}})],1)},staticRenderFns:[]};n.a=a},"P+zO":function(t,n,e){"use strict";var a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"minority-content-wrap"},[e("el-tabs",{attrs:{"tab-position":t.tabPosition},on:{"tab-click":t.setStatus},model:{value:t.statusType,callback:function(n){t.statusType=n},expression:"statusType"}},[e("el-tab-pane",{attrs:{label:"概 览",name:"first"}},[e("all-content",{attrs:{data:t.minorityContent}})],1),t._v(" "),e("el-tab-pane",{attrs:{label:"分 类",name:"second"}},[e("list-content",{attrs:{data:t.minorityContent}})],1)],1)],1)},staticRenderFns:[]};n.a=a},Q0B5:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var r=a(e("xXy3")),o=a(e("trRb"));n.default={props:["data"],name:"",data:function(){return{statusType:"listBox"}},components:{listBox:r.default,listContent:o.default},mounted:function(){},methods:{}}},SXtf:function(t,n,e){t.exports=e.p+"static/img/foods.4aee01c.jpg"},Xk9h:function(t,n,e){"use strict";var a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  5\n")])},staticRenderFns:[]};n.a=a},YVzU:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("6S6o"),r=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);var i=e("P+zO"),u=function(t){e("h4mi"),e("lZFC")},s=e("VU/8")(r.a,i.a,!1,u,"data-v-076c7103",null);n.default=s.exports},ZrWy:function(t,n,e){t.exports=e.p+"static/img/history.4aee01c.jpg"},fBuY:function(t,n){},h4mi:function(t,n){},hGVh:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:["data"],name:"",data:function(){return{}},components:{},mounted:function(){}}},jfgJ:function(t,n,e){"use strict";var a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"list-box"},t._l(t.data,function(n,a){return e("div",{key:a,staticClass:"list-child"},[e("ul",[e("li",{style:{"background-image":"url("+t.bgImg(n.value)+")"}}),t._v(" "),e("li",[e("div",[e("p",[t._v(t._s(n.name))]),t._v(" "),e("p",[t._v(t._s(n.value))])])])])])}))},staticRenderFns:[]};n.a=a},lZFC:function(t,n){},ljla:function(t,n){},pTBG:function(t,n){},trRb:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("+x8n"),r=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);var i=e("Xk9h"),u=function(t){e("pTBG")},s=e("VU/8")(r.a,i.a,!1,u,"data-v-5ba88bf3",null);n.default=s.exports},xXy3:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("+p4F"),r=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);var i=e("jfgJ"),u=function(t){e("79Mv")},s=e("VU/8")(r.a,i.a,!1,u,"data-v-091d59fe",null);n.default=s.exports}});