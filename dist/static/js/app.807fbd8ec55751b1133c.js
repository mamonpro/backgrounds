webpackJsonp([0],{"2q3H":function(e,i){},FqER:function(e,i){},NHnr:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=t("7+uW"),n={name:"App",data:function(){return{night:!1}},beforeMount:function(){this.night=this.loadMode()},methods:{loadMode:function(){if(localStorage.getItem("night"))return"true"===localStorage.getItem("night")},switchMode:function(){this.night=!this.night,localStorage.setItem("night",this.night)}}},l={render:function(){var e=this.$createElement,i=this._self._c||e;return i("div",{staticClass:"app",class:{__night:this.night},attrs:{id:"app"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"switch",on:{click:this.switchMode}},[i("div",{staticClass:"switch__icon"},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewbox:"0 0 48 48"}},[i("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[i("rect",{attrs:{width:"48",height:"48"}}),i("path",{attrs:{stroke:"#000000","stroke-width":"2",d:"M19.4673411,11.2326905 C15.0544059,13.3111479 12,17.7988766 12,23 C12,30.1797017 17.8202983,36 25,36 C30.20282,36 34.6917798,32.9436011 36.7693427,28.5283399 C32.2227119,30.5208702 26.4945368,29.4674838 22.5123344,25.4852814 C18.5314216,21.5043685 17.4774282,15.7786137 19.4673411,11.2326905 Z","stroke-linecap":"round","stroke-linejoin":"round"}})])])])]),i("router-view")],1)])},staticRenderFns:[]};var o=t("VU/8")(n,l,!1,function(e){t("FqER")},null,null).exports,a=t("/ocq"),d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,i=this._self._c||e;return i("header",{staticClass:"head"},[i("div",{staticClass:"head__inner"},[i("h6",{staticClass:"head__name"},[this._v("bgrnds")]),i("h1",{staticClass:"head__title"},[this._v("Beautiful"),i("br"),this._v("backgrounds"),i("br"),this._v("for your iPhone.")])])])}]};var r=t("VU/8")(null,d,!1,function(e){t("vThP")},"data-v-438d2d86",null).exports,c={data:function(){return{index:1,perPage:9,element:null}},computed:{images:function(){return{show:this.$store.state.images.slice(0,this.perPage*this.index),all:this.$store.state.images.length}}},methods:{source:function(e){return"/static/background/"+e},initScroll:function(){this.element=document.querySelector(".list__load"),window.addEventListener("scroll",this.handleScroll)},handleScroll:function(){this.isEnd(this.element)&&(this.index=this.index+1)},isEnd:function(e){var i=e.getBoundingClientRect(),t=document.documentElement;return i.bottom<=(window.innerHeight||t.clientHeight)}}},u={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("div",{staticClass:"list"},e._l(e.images.show,function(i,s){return t("div",{key:s,staticClass:"item list__item"},[t("a",{staticClass:"item__link",attrs:{href:"/view/"+i.id}},[t("img",{staticClass:"item__img",attrs:{src:e.source(i.url)}})])])})),t("div",{staticClass:"list__load"},[e.images.show.length!=e.images.all?t("div",{staticClass:"list__btn",on:{click:function(i){e.index=e.index+1,e.initScroll()}}},[e._v("Show More")]):t("div",{staticClass:"list__empty"},[e._v("That's all, folks!")])])])},staticRenderFns:[]};var h={components:{HeadComponent:r,ListComponent:t("VU/8")(c,u,!1,function(e){t("sajp")},null,null).exports}},w={render:function(){var e=this.$createElement,i=this._self._c||e;return i("div",{staticClass:"page"},[i("head-component"),i("list-component")],1)},staticRenderFns:[]};var g=t("VU/8")(h,w,!1,function(e){t("fj3w")},null,null).exports,v={components:{HeadComponent:r},data:function(){return{id:this.$route.params.id,image:this.$store.getters.getImageById(1)}},mounted:function(){console.log(this.image)}},p={render:function(){var e=this.$createElement,i=this._self._c||e;return i("div",{staticClass:"page"},[i("head-component"),i("div",{staticClass:"view"},[this._m(0),i("div",{staticClass:"view__info",staticStyle:{color:"white"}},[this._v(this._s(this.image))])])],1)},staticRenderFns:[function(){var e=this.$createElement,i=this._self._c||e;return i("div",{staticClass:"view__thumb"},[i("img",{staticClass:"item__img"})])}]};var m=t("VU/8")(v,p,!1,function(e){t("2q3H")},null,null).exports;s.a.use(a.a);var _=new a.a({mode:"history",routes:[{path:"/",name:"Index",component:g},{path:"/view/:id",name:"View",component:m}]}),f=t("NYxO");s.a.use(f.a);var k=new f.a.Store({state:{images:[{id:1,likes:10,view:1230,downloads:482,url:"1.jpeg"},{id:2,likes:10,view:1230,downloads:482,url:"2.jpeg"},{id:3,likes:10,view:1230,downloads:482,url:"3.jpeg"},{id:4,likes:10,view:1230,downloads:482,url:"4.jpeg"},{id:5,likes:10,view:1230,downloads:482,url:"5.jpeg"},{id:6,likes:10,view:1230,downloads:482,url:"6.jpeg"},{id:7,likes:10,view:1230,downloads:482,url:"7.jpeg"},{id:8,likes:10,view:1230,downloads:482,url:"8.jpeg"},{id:9,likes:10,view:1230,downloads:482,url:"9.jpeg"},{id:10,likes:10,view:1230,downloads:482,url:"10.jpeg"},{id:11,likes:10,view:1230,downloads:482,url:"11.jpeg"},{id:12,likes:10,view:1230,downloads:482,url:"12.jpeg"},{id:13,likes:10,view:1230,downloads:482,url:"13.jpeg"},{id:14,likes:10,view:1230,downloads:482,url:"14.jpeg"},{id:15,likes:10,view:1230,downloads:482,url:"15.jpeg"},{id:16,likes:10,view:1230,downloads:482,url:"16.jpeg"},{id:17,likes:10,view:1230,downloads:482,url:"17.jpeg"},{id:18,likes:10,view:1230,downloads:482,url:"18.jpeg"},{id:19,likes:10,view:1230,downloads:482,url:"19.jpeg"},{id:20,likes:10,view:1230,downloads:482,url:"20.jpeg"},{id:21,likes:10,view:1230,downloads:482,url:"21.jpeg"},{id:22,likes:10,view:1230,downloads:482,url:"22.jpeg"},{id:23,likes:10,view:1230,downloads:482,url:"23.jpeg"},{id:24,likes:10,view:1230,downloads:482,url:"24.jpeg"},{id:25,likes:10,view:1230,downloads:482,url:"25.jpeg"},{id:26,likes:10,view:1230,downloads:482,url:"26.jpeg"},{id:27,likes:10,view:1230,downloads:482,url:"27.jpeg"},{id:28,likes:10,view:1230,downloads:482,url:"28.jpeg"},{id:29,likes:10,view:1230,downloads:482,url:"29.jpeg"},{id:30,likes:10,view:1230,downloads:482,url:"30.jpeg"}]},getters:{getImageById:function(e){return function(i){return e.images.find(function(e){return e.id===i})}}}});s.a.config.productionTip=!1,new s.a({el:"#app",store:k,router:_,components:{App:o},template:"<App/>"})},fj3w:function(e,i){},sajp:function(e,i){},vThP:function(e,i){}},["NHnr"]);
//# sourceMappingURL=app.807fbd8ec55751b1133c.js.map