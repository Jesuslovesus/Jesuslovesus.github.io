webpackJsonp([14],{"+BTi":function(t,e){},"/T0L":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(n("I95x"));e.default={name:"",data:function(){return{isFullscreen:!1,titleMsg:"全屏模式"}},components:{},mounted:function(){},methods:{screenFullClick:function(t){return i.default.enabled||this.$message({message:"浏览器不支持",type:"warning"}),i.default.toggle(),this.isFullscreen?(i.default.exit(),this.isFullscreen=!1,this.titleMsg="全屏模式"):(i.default.request(),this.isFullscreen=!0,this.titleMsg="退出全屏"),t}}}},"/bpg":function(t,e){},"19nU":function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(n("//Fk")),o=i(n("bOdI")),r=n("r7Dr"),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n("5reh")),s=n("P/nR"),l={state:{routerPermision:[]},mutations:(0,o.default)({},u.PERM_ROUTER_PERMISSION,function(t,e){console.log("过滤后的网站页面的路由：",e),t.routerPermision=e}),actions:{Perm_GetMenuPermission:function(t,e){var n=t.commit;return new a.default(function(t){var e=(r.asyncRouterMap,s.menuList);n(u.PERM_ROUTER_PERMISSION,e),t(e)})}}};e.default=l},"2rGO":function(t,e){},"3QU7":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("b79V"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var r=n("TdNO"),u=function(t){n("TG86")},s=n("VU/8")(a.a,r.a,!1,u,null,null);e.default=s.exports},"5reh":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.APP_GET_USER_INFO="APP/APP_GET_USER_INFO",e.APP_GET_FUND_FIRM="APP/APP_GET_FUND_FIRM",e.APP_MENU_STATE="APP/APP_MENU_STATE",e.APP_MENU_BTN_COLOR="APP/APP_MENU_BTN_COLOR",e.APP_ASSISTANT_MENU="APP/APP_ASSISTANT_MENU",e.APP_LOGIN_BOX="APP/APP_LOGIN_BOX",e.APP_INNER_SIZE="APP/APP_INNER_SIZE",e.APP_INDEX_MENU_STATE="APP/APP_INDEX_MENU_STATE",e.PERM_ROUTER_PERMISSION="PERMISSION/PERM_ROUTER_PERMISSION",e.ACTIVE_PLACE="PLACE/ACTIVE_PLACE",e.PLACE_LIST="PLACE/PLACE_LIST",e.MINORITY_LIST="PLACE/MINORITY_LIST",e.MINORITY_LIST_ALL="PLACE/MINORITY_LIST_ALL",e.MINORITY_CONTENT="PLACE/MINORITY_CONTENT"},"617o":function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=i(n("7+uW")),o=i(n("6uNU"));a.default.directive("clickoutside",o.default)},"6f/g":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("i8VI"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var r=n("EQrU"),u=function(t){n("Eybu")},s=n("VU/8")(a.a,r.a,!1,u,"data-v-adcd9fb6",null);e.default=s.exports},"6uNU":function(t,e,n){"use strict";function i(t,e,n){return function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!(n&&n.context&&i.target&&a.target)||t.contains(i.target)||t.contains(a.target)||t===i.target||n.context.popperElm&&(n.context.popperElm.contains(i.target)||n.context.popperElm.contains(a.target))||(e.expression&&t[u].methodName&&n.context[t[u].methodName]?n.context[t[u].methodName]():t[u].bindingFn&&t[u].bindingFn())}}Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(n("7+uW")),o=n("iLGn"),r=[],u="@@clickoutsideContext",s=void 0,l=0;!a.default.prototype.$isServer&&(0,o.on)(document,"mousedown",function(t){return s=t}),!a.default.prototype.$isServer&&(0,o.on)(document,"mouseup",function(t){r.forEach(function(e){return e[u].documentHandler(t,s)})}),e.default={bind:function(t,e,n){r.push(t);var a=l++;t[u]={id:a,documentHandler:i(t,e,n),methodName:e.expression,bindingFn:e.value}},update:function(t,e,n){t[u].documentHandler=i(t,e,n),t[u].methodName=e.expression,t[u].bindingFn=e.value},unbind:function(t){for(var e=r.length,n=0;n<e;n++)if(r[n][u].id===t[u].id){r.splice(n,1);break}delete t[u]}}},"83rF":function(t,e){},"8Jly":function(t,e){},Av78:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:{mview:this.menuState},attrs:{id:"app"}},[this.anidisplay?e("div",{ref:"loadingBox",staticClass:"loading flex-vertical-center"},[e("div",{ref:"loadingText"},[this._m(0),this._v(" "),this._m(1)])]):e("login"),this._v(" "),e("router-view",{staticClass:"view-wrap"})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n          你们要过去得为业的那地"),e("br"),this._v("\n          乃是有山有谷、雨水滋润之地，"),e("br"),this._v("\n          是耶和华—你 神所眷顾的；"),e("br"),this._v("\n          从岁首到年终，"),e("br"),this._v("\n          耶和华—你 神的眼目时常看顾那地。\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("i",[this._v("申命记 11:11-12")])])}]};e.a=i},CIfD:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(n("Dd8w")),a=n("NYxO"),o=n("5reh");e.default={props:{listData:{type:Array,default:[]},type:{type:String,default:"layout"}},computed:(0,i.default)({},(0,a.mapGetters)(["userInfo"])),name:"",data:function(){return{path:["index","addnation"]}},components:{},mounted:function(){},methods:{router:function(t){return this.path.includes(t)?"/"+t:"/"+this.type+"/"+t},menuClick:function(){this.$store.commit(o.APP_INDEX_MENU_STATE,!1)},login:function(){this.$store.commit(o.APP_LOGIN_BOX,!0)},logout:function(){}}}},EQrU:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:[{"open-menu":this.menuState},"app-wrapper"]},[e("transition",{attrs:{name:"fade"}},[this.menuState?e("div",{staticClass:"menu-box"},[e("menu-list",{attrs:{listData:this.menuPermission}})],1):this._e()]),this._v(" "),this.menuState?this._e():e("header",{staticClass:"header-top"},[e("header-top",{attrs:{title:["menu"]}})],1),this._v(" "),e("transition",{attrs:{name:"fade"}},[this.assistantMenu?e("div",{staticClass:"assistant-menu-box"},[e("assistant-menu",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:this.outSideClick,expression:"outSideClick"}],attrs:{listData:this.minorityList}}),this._v(" "),e("div",{staticClass:"assistant-menu-mask",on:{click:this.minClickBtn}})],1):this._e()]),this._v(" "),e("div",{class:[{"mx-view":"mx"===this.innerSize.level},"view-box"]},[e("router-view"),this._v(" "),this.menuState?e("div",{staticClass:"mask",on:{click:this.viewClick}}):this._e()],1)],1)},staticRenderFns:[]};e.a=i},Eybu:function(t,e){},FdUo:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(n("mvHQ")),o=i(n("//Fk")),r=i(n("S6IE")),u=function(t,e,n){r.default.ajax({url:t.url,type:t.type||"GET",data:t.data,dataType:"json",contentType:"application/json",beforeSend:function(){},success:function(t){e(t)},error:function(t){n&&n(t.responseJSON.message)},complete:function(){}})};e.default={GET:function(t){return new o.default(function(e,n){t.type="GET",u(t,function(t){e(t)},function(t){n(t)})})},POST:function(t){return new o.default(function(e,n){t.type="POST",t.data=(0,a.default)(t.data),u(t,function(t){e(t)},function(t){n(t)})})},PUT:function(t){return new o.default(function(e,n){t.type="PUT",t.data=(0,a.default)(t.data),u(t,function(t){e(t)},function(t){n(t)})})},DELETE:function(t){return new o.default(function(e,n){t.type="DELETE",t.data=(0,a.default)(t.data),u(t,function(t){e(t)},function(t){n(t)})})}}},G3Og:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-wrap flex-vertical-center"},[t.title.includes("login")?n("div",{staticClass:"login-btn flex-vertical-center"},[n("i",{staticClass:"iconfont icon-yonghu",on:{click:t.loginClick}})]):t._e(),t._v(" "),t.title.includes("search")?n("div",{staticClass:"menu-btn flex-vertical-center"},[n("i",{staticClass:"el-icon-search",on:{click:function(e){t.menuClick("search")}}})]):t._e(),t._v(" "),t.title.includes("menu")?n("div",{staticClass:"menu-btn flex-vertical-center"},[n("i",{staticClass:"el-icon-more menu",style:{color:t.menuBtnColor},on:{click:function(e){t.menuClick("menu")}}})]):t._e()])},staticRenderFns:[]};e.a=i},GXEp:function(t,e){},Ggsn:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{path:"/controlCenter",redirect:"/controlCenter/details",meta:{title:"控制中心"},name:"controlCenter",component:function(t){n.e(3).then(function(){var e=[n("ZRrO")];t.apply(null,e)}.bind(this)).catch(n.oe)},hidden:!0,children:[{path:"details",meta:{title:"网站概况"},name:"",component:function(t){n.e(9).then(function(){var e=[n("d3GD")];t.apply(null,e)}.bind(this)).catch(n.oe)},hidden:!0}]},{path:"/addnation",meta:{title:"添加少数民族/省份"},name:"addnation",component:function(t){n.e(1).then(function(){var e=[n("+QKU")];t.apply(null,e)}.bind(this)).catch(n.oe)},hidden:!0}]},IcnI:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(n("7+uW")),o=i(n("NYxO")),r=(i(n("sax8")),i(n("WSTi"))),u=i(n("UjVw")),s=i(n("19nU")),l=i(n("nsav")),c=i(n("e64o"));a.default.use(o.default);e.default=new o.default.Store({modules:{app:r.default,permission:s.default,place:l.default,addnation:c.default},getters:u.default,strict:!1,plugins:[]})},Iegn:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"assistant-menu-wrap"},[n("p",[t._v("已录入"+t._s(t.numbers)+"个少数民族")]),t._v(" "),n("el-menu",t._l(t.listData,function(e,i){return n("el-menu-item",{key:i,attrs:{index:e.id.toString()},on:{click:function(n){t.menuClick(e)}}},[n("span",[t._v(t._s(e.label)+t._s(e.id))]),t._v("\n      》占比-----人口1\n    ")])}))],1)},staticRenderFns:[]};e.a=i},JaHG:function(t,e,n){"use strict";var i=function(t){return t&&t.__esModule?t:{default:t}}(n("mvHQ"));e.searchfiler=function(t,e,n,a,o){var r=o;if(r||(r="#f56c6c"),!(n.length<1)){var u=JSON.parse((0,i.default)(n)),s=u;return function(t){return t?t.replace(/(^\s*)|\s*$/g,""):""}(e)&&(s=[],u.map(function(n){var o=[];a.map(function(a){if(n[a]&&"{}"!==(0,i.default)(n[a])&&n[a].toString().indexOf(e)>-1){var u=new RegExp(e);n[a+"Origin"]=n[a],t&&(n[a]=n[a].toString().replace(u,'<strong class="search-strong" style="color:'+r+';">'+e+"</strong>")),o.push(n)}}),o.length>0&&s.push(o[o.length-1])})),s}},e.isWeChat=function(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)}},"K/Pj":function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-wrap"},[n("p",[n("i",{staticClass:"el-icon-close",on:{click:t.menuClick}})]),t._v(" "),n("div",{staticClass:"menu-list-flex"},[n("el-menu",{attrs:{router:!0}},t._l(t.listData,function(e,i){return n("div",{key:i,staticClass:"menu-box",on:{click:function(n){t.menuClick(e.path)}}},[n("el-menu-item",{attrs:{index:t.router(e.path)}},[n("i",{class:e.icon}),t._v(" "),n("span",[t._v(t._s(e.value))])])],1)}))],1)])},staticRenderFns:[]};e.a=i},Kf1c:function(t,e,n){(t.exports=n("FZ+f")(void 0)).push([t.i,'/* CSS Document */\nhtml,\nbody,\ndiv,\nspan,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\nabbr,\naddress,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\nsamp,\nsmall,\nstrong,\nsub,\nsup,\nvar,\nb,\ni,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n  outline-style: none;\n  /*FF*/\n}\nbody {\n  line-height: 1;\n}\nli {\n  list-style-type: none;\n}\na {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\na:hover,\na:focus {\n  text-decoration: none;\n  outline-style: none;\n  /*FF*/\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput,\nselect {\n  vertical-align: middle;\n}\n/*css为clearfix，清除浮动*/\n.clearfix::before,\n.clearfix::after {\n  content: "";\n  height: 0;\n  line-height: 0;\n  display: block;\n  visibility: hidden;\n  clear: both;\n}\n.clearfix:after {\n  clear: both;\n}\n.clearfix {\n  *zoom: 1;\n  /*IE/7/6*/\n}\nbody,\nhtml {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  font-size: 12px;\n}\nbody {\n  background-color: #ffffff;\n}\n.border-wrap div {\n  box-sizing: border-box;\n}\n.flex-vertical-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 50px;\n  height: 60px;\n  z-index: 10;\n}\n.title-text-one {\n  font-size: 40px;\n  color: #ffffff;\n  padding: 16px 0 0 24px;\n  text-shadow: 2px 2px 5px #333333;\n}\n.con-wrap-text {\n  padding: 0 18px 0px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.con-wrap-text .con-list-box {\n  width: 100%;\n}\n.con-wrap-text .con-list-box h3 {\n  font-size: 26px;\n  line-height: 65px;\n}\n.con-wrap-text .con-list-box .intro-one {\n  color: #303133;\n  width: 100%;\n  box-sizing: border-box;\n  padding-bottom: 20px;\n  font-size: 18px;\n  text-indent: 36px;\n  line-height: 32px;\n}\n.a-content-wrap {\n  padding: 0px 18px;\n  background-color: #ffffff;\n  color: #303133;\n}\n.a-content-title {\n  line-height: 65px;\n  font-size: 26px;\n}\n.a-content-text {\n  font-size: 18px;\n  line-height: 30px;\n  text-indent: 36px;\n}\n.bottom-end {\n  text-align: center;\n  padding: 42px 0 10px;\n  font-size: 12px;\n  color: #C0C4CC;\n}\n#app.mview {\n  height: 100%;\n  overflow: hidden;\n}\n#app.mview .app-wrapper {\n  height: 100%;\n}\n#app.mview .view-box {\n  height: 100%;\n  overflow: hidden;\n}\n.ing {\n  font-size: 30px;\n}\n.ingH {\n  height: 1000px;\n  width: 100%;\n}\n.test {\n  width: 100%;\n  height: 1000px;\n}\n::-webkit-scrollbar {\n  width: 6px;\n  height: 4px;\n  background-color: #F5F5F5;\n}\n::-webkit-scrollbar:hover {\n  width: 10px;\n  height: 4px;\n  background-color: #F5F5F5;\n}\n::-webkit-scrollbar-track {\n  background: transparent;\n}\n::-webkit-scrollbar-thumb {\n  border-radius: 20px;\n  background-color: rgba(144, 146, 152, 0.2);\n}\n::-webkit-scrollbar-thumb:hover {\n  background-color: rgba(144, 146, 152, 0.4);\n}\n.mx-view {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n',""])},LPi1:function(t,e){},LmHb:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"screen-full-box"},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.titleMsg,placement:"bottom"}},[n("i",{staticClass:" el-icon-rank",on:{click:function(e){t.screenFullClick(!1)}}})])],1)},staticRenderFns:[]};e.a=i},M93x:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("xJD8"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var r=n("Av78"),u=function(t){n("n8hh"),n("Yi0w")},s=n("VU/8")(a.a,r.a,!1,u,"data-v-ff590044",null);e.default=s.exports},MaKR:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n("5reh"));e.default={props:{listData:{type:Array,default:[]},type:{type:String,default:"layout"}},computed:{},name:"",data:function(){return{path:["index","addnation"],noClose:["addnation","pray"]}},components:{},mounted:function(){},methods:{router:function(t){return this.path.includes(t)?"/"+t:"/"+this.type+"/"+t},menuClick:function(t){this.noClose.includes(t)||this.$store.commit(i.APP_MENU_STATE,!1)}}}},Mf0D:function(t,e){},Mp8B:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("/T0L"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var r=n("LmHb"),u=function(t){n("zA5B")},s=n("VU/8")(a.a,r.a,!1,u,"data-v-210460e0",null);e.default=s.exports},NHnr:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}i(n("cwe7"));var a=i(n("2X9z")),o=(i(n("2rGO")),i(n("nu7/"))),r=(i(n("hXTu")),i(n("y7os"))),u=(i(n("vBcO")),i(n("ARSI"))),s=(i(n("RWjY")),i(n("aMwW"))),l=(i(n("X+ky")),i(n("HJMx"))),c=(i(n("Yq4J")),i(n("qubY"))),d=(i(n("V5v9")),i(n("D8db"))),f=(i(n("/bpg")),i(n("ACGT"))),p=(i(n("Mf0D")),i(n("exT9"))),m=(i(n("bwiK")),i(n("SExR"))),h=(i(n("GXEp")),i(n("mtrD")));n("+BTi");var v=i(n("7+uW")),_=i(n("M93x")),b=i(n("IcnI"));n("617o");var g=i(n("Y81h"));n("UVIz");var y=i(n("/ocq")),P=i(n("/IwO")),x=n("r7Dr");n("fMnk"),v.default.use(h.default),v.default.use(m.default),v.default.use(p.default),v.default.use(f.default),v.default.use(d.default),v.default.use(c.default),v.default.use(l.default),v.default.use(s.default),v.default.use(u.default),v.default.use(r.default),v.default.use(o.default.directive),v.default.prototype.$loading=o.default.service,v.default.prototype.$message=a.default,v.default.use(P.default),P.default.initAMapApiLoader({key:"f51a4baee81a9f0f817c52dbb32b892b",v:"1.4.4"}),v.default.use(y.default),v.default.config.productionTip=!1;var M=[];M=x.indexRouterMap;var E=new y.default({routes:M});E.addRoutes(x.asyncRouterMap),E.beforeEach(function(t,e,n){if(g.default.start(),window.document.title=t.meta.title,"/index"===t.fullPath||"/"===t.fullPath||"login"===t.fullPath)n();else{if(-1!==t.path.indexOf("/controlCenter"))return n(),void g.default.done();if(-1!==t.path.indexOf("/addnation")||-1!==t.path.indexOf("/pray")||-1!==t.path.indexOf("/set"))return n(),void g.default.done();b.default.getters.placeList.length?(n(),g.default.done()):n({path:"/index"})}}),E.afterEach(function(){g.default.done()}),window.duyangsir=new v.default({router:E,store:b.default,template:"<App/>",components:{App:_.default}}).$mount("#app")},"P/nR":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.indexMenuData=[{value:"Minoritys",label:"少数民族",path:"minoritys",icon:"el-icon-search"},{value:"About",label:"关于",path:"about",icon:"el-icon-tickets"},{value:"AddNation",label:"添加民族",path:"addnation",icon:"el-icon-circle-plus-outline"}],e.menuList=[{value:"Place",label:"推荐地区",path:"index",icon:"el-icon-location-outline"},{value:"Minoritys",label:"少数民族",path:"minoritys",icon:"el-icon-search"},{value:"Pray",label:"祷告",path:"pray",icon:"el-icon-star-off"},{value:"About",label:"关于",path:"about",icon:"el-icon-tickets"},{value:"AddNation",label:"添加民族",path:"addnation",icon:"el-icon-circle-plus-outline"},{value:"Set",label:"设置",path:"set",icon:"el-icon-setting"}],e.aboutData=[{title:"本站",content:"更快速便捷一站式了解少数民族"},{title:"更新",content:"2018.08.03 -"},{title:"加入我们",content:"文章数据整理，交互体验等"},{title:"初期版本可能存在很多bug，后期将会持续优化",content:""}]},RWjY:function(t,e){},"T+/8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("m1D0"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var r=n("zQyP"),u=function(t){n("lV75")},s=n("VU/8")(a.a,r.a,!1,u,"data-v-78fa13cb",null);e.default=s.exports},TG86:function(t,e){},TdNO:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:[{"map-fill":this.fillState},"amap-page-container"]},[e("i",{staticClass:"fill el-icon-rank",on:{click:this.fillClick}}),this._v(" "),e("el-amap",{ref:"map",staticClass:"amap-demo",attrs:{vid:"amapDemo","amap-manager":this.AMapManager,center:this.center,zoom:this.zoom,plugin:this.plugin,events:this.events}})],1)},staticRenderFns:[]};e.a=i},TzAY:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={self:"self",login:"/bread/v1/login",getProvincesList:"/bread/v1/provinces",getProvincesDetails:"/bread/v1/provinces/",getMinorityListAll:"/bread/v1/nations",getMinorityList:"/bread/v1/nations/"}},UKOL:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-menu-wrap"},[n("p",[n("i",{staticClass:"el-icon-close",on:{click:t.menuClick}})]),t._v(" "),n("div",{staticClass:"menu-list-flex"},[n("el-menu",{attrs:{router:!0}},[t.userInfo?t._e():n("el-menu-item",{staticClass:"login",attrs:{index:""},on:{click:t.login}},[n("i",{staticClass:"iconfont icon-yonghu"}),t._v(" "),n("span",[t._v("Login")])]),t._v(" "),t.userInfo?t._e():n("hr"),t._v(" "),t._l(t.listData,function(e,i){return n("div",{key:i,staticClass:"menu-box",on:{click:t.menuClick}},[n("el-menu-item",{attrs:{index:t.router(e.path)}},[n("i",{class:e.icon}),t._v(" "),n("span",[t._v(t._s(e.value))])])],1)}),t._v(" "),t.userInfo?t._e():n("hr"),t._v(" "),t.userInfo?t._e():n("el-menu-item",{staticClass:"login",attrs:{index:""},on:{click:t.logout}},[n("i",{staticClass:"iconfont icon-logout"}),t._v(" "),n("span",[t._v("Logout")])])],2)],1),t._v(" "),n("p",[t._v("©2018 Into Minority")])])},staticRenderFns:[]};e.a=i},UVIz:function(t,e){},UjVw:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={userInfo:function(t){return t.app.userInfo},fundFirm:function(t){return t.app.fundFirm},menuState:function(t){return t.app.menuState},indexMenuState:function(t){return t.app.indexMenuState},indexMenuList:function(t){return t.app.indexMenuList},aboutPageData:function(t){return t.app.aboutPageData},menuBtnColor:function(t){return t.app.menuBtnColor},assistantMenu:function(t){return t.app.assistantMenu},loginBox:function(t){return t.app.loginBox},innerSize:function(t){return t.app.innerSize},menuPermission:function(t){return t.permission.routerPermision}}},V5v9:function(t,e){},WSTi:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a,o=i(n("//Fk")),r=i(n("bOdI")),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n("5reh")),s=n("P/nR"),l={state:{userInfo:null,fundFirm:null,menuState:!1,indexMenuState:!1,menuBtnColor:"#DCDFE6",aboutPageData:s.aboutData,assistantMenu:!1,loginBox:!1,indexMenuList:s.indexMenuData,innerSize:{width:0,height:0,level:"mx"},goPage:""},mutations:(a={},(0,r.default)(a,u.APP_GET_USER_INFO,function(t,e){t.userInfo=e}),(0,r.default)(a,u.APP_GET_FUND_FIRM,function(t,e){t.fundFirm=e}),(0,r.default)(a,u.APP_MENU_STATE,function(t,e){if(e)return t.assistantMenu=!1,void(t.menuState=e);t.menuState=e}),(0,r.default)(a,u.APP_INDEX_MENU_STATE,function(t,e){t.indexMenuState=e}),(0,r.default)(a,u.APP_MENU_BTN_COLOR,function(t,e){t.menuBtnColor=e}),(0,r.default)(a,u.APP_ASSISTANT_MENU,function(t,e){t.menuState=!1,t.assistantMenu=e}),(0,r.default)(a,u.APP_LOGIN_BOX,function(t,e){t.loginBox=e}),(0,r.default)(a,u.APP_INNER_SIZE,function(t,e){t.innerSize.width=e.width,t.innerSize.height=e.height,e.width>1100?t.innerSize.level="mx":e.width>900?t.innerSize.level="m":e.width<760&&(t.innerSize.level="sm")}),a),actions:{App_GetUserInfo:function(t){var e=t.commit;return new o.default(function(t){var n={name:"小黑",id:"123"};e(u.APP_GET_USER_INFO,n),t(n)})},App_GetFundFirm:function(t){var e=t.dispatch,n=t.commit;return new o.default(function(t){var i=[{team:1,id:1},{team:2,id:2}];n(u.APP_GET_FUND_FIRM,i),e("Perm_GetMenuPermission",i).then(function(e){t(e)})})}}};e.default=l},"X+ky":function(t,e){},Yi0w:function(t,e){},Yq4J:function(t,e){},"Z+cC":function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n("bVKK");Object.defineProperty(e,"IndexMenu",{enumerable:!0,get:function(){return i(a).default}});var o=n("aN4g");Object.defineProperty(e,"assistantMenu",{enumerable:!0,get:function(){return i(o).default}});var r=n("sL6p");Object.defineProperty(e,"menuList",{enumerable:!0,get:function(){return i(r).default}});var u=n("3QU7");Object.defineProperty(e,"Map",{enumerable:!0,get:function(){return i(u).default}});var s=n("hxP8");Object.defineProperty(e,"HeaderTop",{enumerable:!0,get:function(){return i(s).default}});var l=n("o7hc");Object.defineProperty(e,"appMenu",{enumerable:!0,get:function(){return i(l).default}});var c=n("Mp8B");Object.defineProperty(e,"screenfull",{enumerable:!0,get:function(){return i(c).default}})},aN4g:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("jvy0"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var r=n("Iegn"),u=function(t){n("8Jly")},s=n("VU/8")(a.a,r.a,!1,u,"data-v-b69be882",null);e.default=s.exports},b79V:function(t,e,n){"use strict";var i=n("/IwO");t.exports={props:{placeData:{type:Object,default:{lat:"25.033098",lng:"103.238336",zoom:5}}},data:function(){return{fillState:!1,AMapManager:i.AMapManager,zoom:this.placeData.zoom,center:[this.placeData.lng,this.placeData.lat],events:{},plugin:["ToolBar",{pName:"MapType",defaultType:0,events:{init:function(t){console.log(t)}}}]}},methods:{fillClick:function(){this.fillState=!this.fillState}}}},bVKK:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("CIfD"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var r=n("UKOL"),u=function(t){n("sPEn")},s=n("VU/8")(a.a,r.a,!1,u,"data-v-7bbca181",null);e.default=s.exports},bwiK:function(t,e){},cwe7:function(t,e){},e64o:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={state:{},getters:{},mutations:{},actions:{}}},fMnk:function(t,e,n){var i=n("Kf1c");"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0};a.transform=void 0;n("MTIv")(i,a);i.locals&&(t.exports=i.locals)},"h/N8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(n("Dd8w")),a=n("NYxO"),o=n("5reh");e.default={props:{title:{type:Array,default:["menu"]},login:{type:Boolean,default:!1},types:{type:Boolean,default:!0}},name:"",computed:(0,i.default)({},(0,a.mapGetters)(["menuBtnColor"])),data:function(){return{}},components:{},mounted:function(){},methods:{menuClick:function(t){if("menu"===t)return this.types?void this.$store.commit(o.APP_MENU_STATE,!0):void this.$store.commit(o.APP_INDEX_MENU_STATE,!0);this.$router.push({path:"/layout/minoritys"})},loginClick:function(){this.$store.commit(o.APP_LOGIN_BOX,!0)}}}},hXTu:function(t,e){},hxP8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("h/N8"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var r=n("G3Og"),u=function(t){n("LPi1")},s=n("VU/8")(a.a,r.a,!1,u,"data-v-59dfb288",null);e.default=s.exports},i8VI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Z+cC");e.default={name:"layout",extends:i.appMenu}},iLGn:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}function o(t,e,n){if(t&&e)if("object"===(void 0===e?"undefined":(0,r.default)(e)))for(var i in e)e.hasOwnProperty(i)&&o(t,i,e[i]);else"opacity"===(e=f(e))&&c<9?t.style.filter=isNaN(n)?"":"alpha(opacity="+100*n+")":t.style[e]=n}Object.defineProperty(e,"__esModule",{value:!0}),e.getStyle=e.once=e.off=e.on=void 0;var r=i(n("pFYg"));e.hasClass=a,e.addClass=function(t,e){if(t){for(var n=t.className,i=(e||"").split(" "),o=0,r=i.length;o<r;o++){var u=i[o];u&&(t.classList?t.classList.add(u):a(t,u)||(n+=" "+u))}t.classList||(t.className=n)}},e.removeClass=function(t,e){if(t&&e){for(var n=e.split(" "),i=" "+t.className+" ",o=0,r=n.length;o<r;o++){var u=n[o];u&&(t.classList?t.classList.remove(u):a(t,u)&&(i=i.replace(" "+u+" "," ")))}t.classList||(t.className=d(i))}},e.setStyle=o;var u=i(n("7+uW")).default.prototype.$isServer,s=/([\:\-\_]+(.))/g,l=/^moz([A-Z])/,c=u?0:Number(document.documentMode),d=function(t){return(t||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},f=function(t){return t.replace(s,function(t,e,n,i){return i?n.toUpperCase():n}).replace(l,"Moz$1")},p=e.on=!u&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},m=e.off=!u&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)};e.once=function(t,e,n){p(t,e,function i(){n&&n.apply(this,arguments),m(t,e,i)})},e.getStyle=c<9?function(t,e){if(!u){if(!t||!e)return null;"float"===(e=f(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!u){if(!t||!e)return null;"float"===(e=f(e))&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}}},jvy0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n("5reh"));e.default={props:["listData"],computed:{numbers:function(){return this.listData.length}},name:"",data:function(){return{}},components:{},mounted:function(){},methods:{menuClick:function(t){document.documentElement.scrollTop=0,this.$store.dispatch("Get_minorityContent",t.id),this.$store.commit(i.APP_ASSISTANT_MENU,!1),this.$router.push({path:"/layout/minority"})}}}},lV75:function(t,e){},m1D0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(n("Dd8w")),a=n("NYxO"),o=n("5reh");e.default={name:"",data:function(){return{username:"",password:""}},computed:(0,i.default)({},(0,a.mapGetters)(["loginBox"])),components:{},mounted:function(){},methods:{close:function(){this.$store.commit(o.APP_LOGIN_BOX,!1)},login:function(){},register:function(){this.$message({showClose:!0,message:"暂未开放",type:"warning",center:!0})}}}},n8hh:function(t,e){},nsav:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a,o=i(n("//Fk")),r=i(n("bOdI")),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n("5reh")),s=i(n("TzAY")),l=n("vQ9I"),c=(a={},(0,r.default)(a,u.PLACE_LIST,function(t,e){t.placeList=e,t.placeListShow=[],e.map(function(e){e.show&&t.placeListShow.push(e)})}),(0,r.default)(a,u.ACTIVE_PLACE,function(t,e){t.activePlace=e}),(0,r.default)(a,u.MINORITY_LIST_ALL,function(t,e){t.minorityListAll=e}),(0,r.default)(a,u.MINORITY_LIST,function(t,e){t.minorityList=e}),(0,r.default)(a,u.MINORITY_CONTENT,function(t,e){t.minorityContent=e}),a),d={Get_Place:function(t){var e=t.commit;return new o.default(function(t){(0,l.getLinkData)({url:s.default.getProvincesList}).then(function(n){e(u.PLACE_LIST,n),t(n)})})},Get_activePlace:function(t,e){var n=t.commit;return new o.default(function(t){(0,l.getLinkData)({url:""+s.default.getProvincesDetails+e}).then(function(e){n(u.ACTIVE_PLACE,e),n(u.MINORITY_LIST,e.nations),t(e)})})},Get_minorityList:function(t,e){var n=t.commit;return new o.default(function(t){(0,l.getLinkData)({url:""+s.default.getProvincesDetails+e+"/nations"}).then(function(e){n(u.MINORITY_CONTENT,e),t(e)})})},Get_minorityListAll:function(t){var e=t.commit;return new o.default(function(t){(0,l.getLinkData)({url:s.default.getMinorityListAll}).then(function(n){e(u.MINORITY_LIST_ALL,n),t(n)})})},Get_minorityContent:function(t,e){var n=t.commit;return new o.default(function(t){(0,l.getLinkData)({url:""+s.default.getMinorityList+e}).then(function(e){n(u.MINORITY_CONTENT,e),t(e)})})}};e.default={state:{activePlace:{},placeList:[],placeListShow:[],placeListIndexShow:[],minorityList:[],minorityListAll:[],minorityContent:null},getters:{placeList:function(t){return t.placeList},placeListShow:function(t){return t.placeListShow},placeListIndexShow:function(t){return t.placeListIndexShow},activePlace:function(t){return t.activePlace},minorityList:function(t){return t.minorityList},minorityListAll:function(t){return t.minorityListAll},minorityContent:function(t){return t.minorityContent}},mutations:c,actions:d}},o7hc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(n("Dd8w")),a=n("NYxO"),o=n("Z+cC"),r=n("5reh");e.default={computed:(0,i.default)({},(0,a.mapGetters)(["menuState","menuPermission","minorityList","assistantMenu","innerSize"])),data:function(){return{}},mounted:function(){this.$store.dispatch("App_GetFundFirm")},components:{menuList:o.menuList,HeaderTop:o.HeaderTop,assistantMenu:o.assistantMenu},methods:{viewClick:function(){this.menuState&&this.$store.commit(r.APP_MENU_STATE,!1)},outSideClick:function(){this.$store.commit(r.APP_ASSISTANT_MENU,!1)},minClickBtn:function(){this.$store.commit(r.APP_ASSISTANT_MENU,!1)}}}},r7Dr:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.asyncRouterMap=e.indexRouterMap=void 0;var a=i(n("Ggsn")),o=[{path:"/layout",component:i(n("6f/g")).default,name:"layout-place",hidden:!0,children:[{path:"today",meta:{title:"Into Minority"},component:function(t){Promise.all([n.e(5),n.e(0)]).then(function(){var e=[n("EVST")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"today",hidden:!0},{path:"place",meta:{title:"展页"},name:"place",component:function(t){Promise.all([n.e(7),n.e(0)]).then(function(){var e=[n("GKf8")];t.apply(null,e)}.bind(this)).catch(n.oe)},hidden:!0},{path:"minority",meta:{title:"详情"},name:"minority",component:function(t){n.e(2).then(function(){var e=[n("RirU")];t.apply(null,e)}.bind(this)).catch(n.oe)},hidden:!0},{path:"minorityPC",meta:{title:"详情"},name:"minority",component:function(t){n.e(12).then(function(){var e=[n("z8ev")];t.apply(null,e)}.bind(this)).catch(n.oe)},hidden:!0},{path:"about",meta:{title:"关于"},name:"about",component:function(t){n.e(10).then(function(){var e=[n("oF1k")];t.apply(null,e)}.bind(this)).catch(n.oe)},hidden:!0},{path:"minoritys",meta:{title:"minoritys"},name:"minoritys",component:function(t){n.e(4).then(function(){var e=[n("bKVN")];t.apply(null,e)}.bind(this)).catch(n.oe)},hidden:!0},{path:"pray",meta:{title:"Pray"},name:"pray",component:function(t){n.e(6).then(function(){var e=[n("UXLw")];t.apply(null,e)}.bind(this)).catch(n.oe)},hidden:!0}]},{path:"/index",alias:"/",meta:{title:"Into Minority"},component:function(t){Promise.all([n.e(8),n.e(0)]).then(function(){var e=[n("JXTs")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"index",hidden:!0},{path:"*",redirect:"/404",name:"not_founds",hidden:!0},{path:"/404",name:"not_found",component:function(t){n.e(11).then(function(){var e=[n("VdfP")];t.apply(null,e)}.bind(this)).catch(n.oe)},hidden:!0}];e.indexRouterMap=o=o.concat(a.default),e.indexRouterMap=o,e.asyncRouterMap=[]},sL6p:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("MaKR"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var r=n("K/Pj"),u=function(t){n("83rF")},s=n("VU/8")(a.a,r.a,!1,u,"data-v-67078866",null);e.default=s.exports},sPEn:function(t,e){},vBcO:function(t,e){},vQ9I:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function a(){return new o.default(function(t,e){return e()})}Object.defineProperty(e,"__esModule",{value:!0});var o=i(n("//Fk"));e.doRequest=function(t,e,n){return r.default[e]({showError:!n||void 0==n.showError||n.showError,data:n&&void 0!=n.data?n.data:{},url:t,error:!(!n||!n.error)&&n.error})},e.doReauest=function(t,e,n){return r.default[e]({url:t,data:n&&void 0!==n.data?n.data:{}})},e.getLinkData=function(t){return r.default.GET(function(t){return t}(t))},e.postLinkData=function(t){return r.default.POST(t)},e.putLinkData=function(t){return t.object._links[t.func]?r.default.PUT(t):a()},e.delLinkData=function(t){return t.object._links[t.func]?r.default.DELETE(t):a()};var r=i(n("FdUo"))},xJD8:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(n("Dd8w")),o=n("NYxO"),r=n("iLGn"),u=n("JaHG"),s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n("5reh")),l=i(n("T+/8"));e.default={name:"app",computed:(0,a.default)({},(0,o.mapGetters)(["menuState"])),data:function(){return{anidisplay:!0}},mounted:function(){var t=this;this.$store.commit(s.APP_INNER_SIZE,{width:window.innerWidth,height:window.innerHeight}),window.onresize=function(){t.$store.commit(s.APP_INNER_SIZE,{width:window.innerWidth,height:window.innerHeight})},(0,u.isWeChat)()&&this.$message({showClose:!0,message:"请使用手机浏览器体验更佳",duration:5e3,type:"warning"}),this.$nextTick(function(){(0,r.addClass)(t.$refs.loadingBox,"loading-box-ani"),(0,r.addClass)(t.$refs.loadingText,"loading-ani"),t.$refs.loadingText.addEventListener("animationend",function(){t.anidisplay=!1})})},methods:{},components:{login:l.default}}},zA5B:function(t,e){},zQyP:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:"登录 获取更多操作",visible:t.loginBox,width:"80%"},on:{close:t.close}},[n("el-input",{attrs:{placeholder:"用户名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("el-input",{attrs:{placeholder:"密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("p",[n("el-button",{attrs:{size:"medium",type:"primary"},on:{click:t.login}},[t._v("登 录")]),t._v(" "),n("el-button",{attrs:{size:"medium",type:"success"},on:{click:t.register}},[t._v("注 册")])],1)],1)},staticRenderFns:[]};e.a=i}},["NHnr"]);