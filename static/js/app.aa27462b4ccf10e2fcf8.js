webpackJsonp([0],[,,,,function(t,e,n){"use strict";var s=n(2),r=n(63),i=n(39),a=n.n(i),o=n(41),u=n.n(o),c=n(38),l=n.n(c),p=n(40),d=n.n(p);s.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"Index",component:a.a},{path:"/tool",name:"Tool",component:u.a},{path:"/forum",name:"Forum",component:l.a},{path:"/shop",name:"Shop",component:d.a}]})},function(t,e,n){function s(t){n(33)}var r=n(0)(n(10),n(60),s,null,null);t.exports=r.exports},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=n(3),n(23)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var n in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(n)&&t.options[n]&&(e=!0,t.defaultSwiperClasses[n]=t.options[n]);var r=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(r):r()}};this.options.notNextTick?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(44),r=n.n(s),i=n(45),a=n.n(i);e.default={name:"app",components:{"footer-bar":r.a,"header-bar":a.a}}},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(43),r=n.n(s),i=n(42),a=n.n(i);e.default={name:"Index",components:{"swiper-bar":r.a,"list-main":a.a}}},function(t,e){},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"IndexMain",data:function(){return{List:[]}},methods:{getData:function(){var t=this,e="";switch(this.$route.path){case"/":e="./static/json/news.json";break;case"/how":e="./static/json/hs_how.json";break;case"/dl":e="./static/json/DL_link.json";break;case"/ow":e="./static/json/ow.json"}this.$http.get(e).then(function(e){t.List=e.body.bannerlist})}},mounted:function(){this.getData()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1);n.n(s);e.default={components:{swiper:s.swiper,swiperSlide:s.swiperSlide},data:function(){return{wid:.618*window.innerWidth,swiperOption:{autoplay:3e3,mousewheelControl:!0,loop:!0,autoplayDisableOnInteraction:!1,pagination:".swiper-pagination",paginationClickable:!0},swiperSlides:["../../../static/img/hs_how1.jpg","../../../static/img/hs_how2.jpg","../../../static/img/swiper_2.jpg"]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"footer",data:function(){return{footerList:[{path:"/",title:"资讯"},{path:"/tool",title:"工具"},{path:"/forum",title:"论坛"},{path:"/shop",title:"商城"}]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(48),r=n.n(s),i=n(46),a=n.n(i),o=n(47),u=n.n(o);e.default={name:"Header",components:{"user-bar":r.a,"header-main":u.a,"header-btn":a.a}}},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{headerList:[{Href:"/sub",title:"订阅"},{Href:"/",title:"资讯"}],ulWidth:0}},methods:{getData:function(){var t=this;this.$http.get("./static/json/list.json").then(function(e){t.headerList=t.headerList.concat(e.body.list)}).then(function(){this.ulWidth=65*this.headerList.length+"px"})}},mounted:function(){this.getData()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"user",data:function(){return{userKG:!1,user:[],bgImg:"",userList:[{txt:"我的播放列表",Href:"/"},{txt:"消息&通知",Href:"/"},{txt:"我的收藏",Href:"/"},{txt:"草稿箱",Href:"/"},{txt:"任务中心",Href:"/"},{txt:"设置",Href:"/"}],functionKey:["切至夜间模式","切至3/4G无图"]}},methods:{userK:function(){this.userKG=!this.userKG},getData:function(){var t=this;this.$http.get("./static/json/user.json").then(function(e){t.user=e.body.user})}},mounted:function(){this.getData()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),r=n(5),i=n.n(r),a=n(4),o=n(6),u=n(7),c=n(1);n.n(c);s.a.use(o.a),s.a.use(u.a);var l=new u.a.Store({state:{list:[],txt:"233"}});s.a.config.productionTip=!1,new s.a({el:"#app",store:l,router:a.a,template:"<App/>",components:{App:i.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){var s=n(0)(n(8),n(55),null,null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(n(9),n(57),null,null,null);t.exports=s.exports},function(t,e,n){function s(t){n(31)}var r=n(0)(n(11),n(58),s,null,null);t.exports=r.exports},function(t,e,n){function s(t){n(29)}var r=n(0)(n(12),n(54),s,null,null);t.exports=r.exports},function(t,e,n){function s(t){n(25)}var r=n(0)(n(13),n(50),s,null,null);t.exports=r.exports},function(t,e,n){function s(t){n(27)}var r=n(0)(n(14),n(52),s,null,null);t.exports=r.exports},function(t,e,n){function s(t){n(26)}var r=n(0)(n(15),n(51),s,null,null);t.exports=r.exports},function(t,e,n){function s(t){n(30)}var r=n(0)(n(16),n(56),s,"data-v-4582d1cc",null);t.exports=r.exports},function(t,e,n){function s(t){n(35)}var r=n(0)(n(17),n(62),s,"data-v-a0a58ce0",null);t.exports=r.exports},function(t,e,n){function s(t){n(32)}var r=n(0)(n(18),n(59),s,"data-v-5e40c4fc",null);t.exports=r.exports},function(t,e,n){function s(t){n(28)}var r=n(0)(n(19),n(53),s,"data-v-2d2a9e02",null);t.exports=r.exports},function(t,e,n){function s(t){n(24)}var r=n(0)(n(20),n(49),s,"data-v-06c6cafa",null);t.exports=r.exports},function(t,e,n){function s(t){n(34)}var r=n(0)(n(21),n(61),s,"data-v-9d27b4b0",null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"headerMain"},[n("div",{directives:[{name:"show",rawName:"v-show",value:"/"===t.$route.path,expression:"$route.path==='/'"}],staticClass:"indexMain"},[n("ul",{style:{width:t.ulWidth}},t._l(t.headerList,function(e,s){return n("li",[n("router-link",{class:{active:t.$route.path===e.Href},attrs:{to:e.Href}},[t._v("\r\n\t\t\t\t\t"+t._s(e.title)+"\r\n\t\t\t\t")])],1)}))]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"/tool"===t.$route.path,expression:"$route.path==='/tool'"}],staticClass:"headerMain"},[t._v("\r\n\t\t我的工具\r\n\t")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"/forum"===t.$route.path,expression:"$route.path==='/forum'"}],staticClass:"headerMain"},[t._v("\r\n\t\t论坛列表\r\n\t")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"/shop"===t.$route.path,expression:"$route.path==='/shop'"}],staticClass:"headerMain"},[t._v("\r\n\t\t商城\r\n\t")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\r\n\t商店\r\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.List,function(e){return n("li",{staticClass:"indexList"},[n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"imgBox"},[n("img",{attrs:{src:e.src}})]),t._v(" "),n("div",{staticClass:"ListMain"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"List_M"},["/"==t.$route.path?n("span",[t._v("\r\n\t\t\t\t\t\t"+t._s(e.Class)+" \r\n\t\t\t\t\t")]):t._e(),t._v(" "),parseInt(new Date(new Date-e.time)/1e3/60/60/24)>0?n("span",{staticClass:"lei"},[t._v("  \r\n\t\t\t\t\t\t"+t._s(new Date(new Date-e.time).getMonth()+1)+"月"+t._s(new Date(new Date-e.time).getDate())+"日\r\n\t\t\t\t\t")]):parseInt(new Date(new Date-e.time)/1e3/60/60%24)>0?n("span",{staticClass:"lei"},[t._v("   \r\n\t\t\t\t\t\t"+t._s(parseInt(new Date(new Date-e.time)/1e3/60/60%24))+"小时前\r\n\t\t\t\t\t")]):parseInt(new Date(new Date-e.time)/1e3/60%60)>0?n("span",{staticClass:"lei"},[t._v(" \r\n\t\t\t\t\t\t"+t._s(parseInt(new Date(new Date-e.time)/1e3/60%60))+"分钟前\r\n\t\t\t\t\t")]):t._e(),t._v(" "),n("span",{staticClass:"IM_num"},[t._v(t._s(e.com_num))])])])])],1)}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\r\n\t工具\r\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:"/"===t.$route.path||"/forum"===t.$route.path,expression:"$route.path === '/' || $route.path === '/forum'"}],staticClass:"search"},[n("router-link",{class:["btn","btnSearch"],attrs:{to:"/"}})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"/tool"===t.$route.path,expression:"$route.path === '/tool'"}]},[n("router-link",{staticClass:"font16 toolMore",attrs:{to:"/"}},[n("span",[t._v("管理")])])],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"/shop"===t.$route.path,expression:"$route.path === '/shop'"}],staticClass:"shopBtn"},[n("router-link",{class:["btn","btnOrder"],attrs:{to:"/"}}),t._v(" "),n("router-link",{class:["btn","btnShop"],attrs:{to:"/"}})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("swiper-bar"),t._v(" "),n("list-main")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swiper",{attrs:{options:t.swiperOption}},[t._l(t.swiperSlides,function(e){return n("swiper-slide",{style:{height:t.wid+"px"}},[n("img",{attrs:{src:e}}),t._v(" "),n("div",{staticClass:"swiperTxt"},[t._v(t._s(e))])])}),t._v(" "),n("div",{staticClass:"swiper-pagination",slot:"pagination"})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),n("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\r\n\t论坛\r\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("user-bar"),t._v(" "),n("header-main",{staticClass:"h-m"}),t._v(" "),n("header-btn",{staticClass:"a"})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header-bar"),t._v(" "),n("router-view"),t._v(" "),n("footer-bar")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"userBtn"},on:{click:t.userK}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.userKG,expression:"userKG"}],attrs:{id:"userBox"},on:{click:t.userK}},[n("div",{staticClass:"userB",on:{click:function(t){t.stopPropagation()}}},[t._l(t.user,function(e){return n("router-link",{staticClass:"userLink",attrs:{to:"/"}},[n("img",{attrs:{src:e.userImage}}),t._v(" "),n("div",[n("h2",{staticClass:"font18 colorFFF"},[t._v("\r\n\t\t\t\t\t\t"+t._s(e.userName)+"\r\n\t\t\t\t\t")]),t._v(" "),n("p",{staticClass:"colorFFF"},[t._v("\r\n\t\t\t\t\t\t营火："+t._s(e.userMoney)+"\r\n\t\t\t\t\t")])]),t._v(" "),n("div",{staticClass:"lv colorFFF"},[t._v("\r\n\t\t\t\t\tLv"+t._s(e.userLV)+"\r\n\t\t\t\t")])])}),t._v(" "),n("div",[n("ul",{staticClass:"userUl"},t._l(t.userList,function(e,s){return n("li",[n("router-link",{class:["userList"+s,"userList"],attrs:{to:e.Href}},[t._v("\r\n\t\t\t\t\t\t\t"+t._s(e.txt)+"\r\n\t\t\t\t\t\t")])],1)})),t._v(" "),n("ul",t._l(t.functionKey,function(e,s){return n("li",[n("a",{class:["userList"+(s+6),"userList"]},[t._v("\r\n\t\t\t\t\t\t\t"+t._s(e)+"\r\n\t\t\t\t\t\t")])])}))])],2)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("ul",t._l(t.footerList,function(e,s){return n("li",{class:["foot-icon-"+(s+1),{active:t.$route.path===e.path}]},[n("router-link",{staticClass:"font12",attrs:{to:e.path}},[t._v("\r\n\t\t\t"+t._s(e.title)+"\r\n\t\t")])],1)}))])},staticRenderFns:[]}},,,,function(t,e){}],[22]);
//# sourceMappingURL=app.aa27462b4ccf10e2fcf8.js.map