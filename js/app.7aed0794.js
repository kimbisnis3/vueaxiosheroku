(function(t){function e(e){for(var r,a,u=e[0],c=e[1],s=e[2],l=0,p=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function u(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0015615f":"7d5f6a7a","chunk-17f56798":"4684e11c","chunk-2d21b364":"1f4083e4","chunk-2d22d746":"0306491c","chunk-6c27a6d4":"a6b5f5b4","chunk-28606661":"d8a7ef75","chunk-2d2086b7":"ab80dbdc"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0015615f":1,"chunk-17f56798":1,"chunk-6c27a6d4":1,"chunk-28606661":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-0015615f":"527573be","chunk-17f56798":"b25ecccc","chunk-2d21b364":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-6c27a6d4":"e5a04aaf","chunk-28606661":"384a6ab7","chunk-2d2086b7":"31d6cfe0"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return e()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){s=p[u],l=s.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(t);var p=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Main")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("Drawer"),n("Appbar"),n("v-main",[n("router-view")],1),n("Footer")],1)},u=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:"",color:"blue darken-3",dark:""}},[n("v-app-bar-nav-icon",{on:{click:t.draw}}),n("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[n("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.appname))])]),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:t.logout}},[n("v-icon",[t._v("mdi-box")])],1),t.isLoading?n("v-progress-circular",{attrs:{indeterminate:"",color:"amber"}}):t._e()],1)},s=[],l={name:"Appbar",computed:{counter:function(){return this.$store.getters.getCounter},appname:function(){return this.$store.getters.appname},isLoading:function(){return this.$store.getters.isLoading}},mounted:function(){},methods:{draw:function(){this.$store.commit("sidebaract")},logout:function(){var t=this;this.$store.dispatch("authLogout").then((function(){t.$router.push("/login")}))}}},p=l,d=n("2877"),f=n("6544"),m=n.n(f),h=n("40dc"),v=n("5bc1"),b=n("8336"),g=n("132d"),k=n("490a"),y=n("2fa4"),w=n("2a7f"),_=Object(d["a"])(p,c,s,!1,null,null,null),L=_.exports;m()(_,{VAppBar:h["a"],VAppBarNavIcon:v["a"],VBtn:b["a"],VIcon:g["a"],VProgressCircular:k["a"],VSpacer:y["a"],VToolbarTitle:w["a"]});var V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{dark:"",value:t.sideopen,app:"",clipped:t.$vuetify.breakpoint.lgAndUp}},[n("v-list",{attrs:{dense:""}},t._l(t.menu,(function(e){return n("v-list-item",{key:e.nama,attrs:{"router-link":"",to:e.url}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.nama))])],1)],1)})),1)],1)},C=[],x={name:"Drawer",props:{source:String},data:function(){return{drawer:null,result:null,menu:[{nama:"Home",url:"/",icon:"mdi-home"},{nama:"Table",url:"/table",icon:"mdi-table"},{nama:"List Item",url:"/listpage",icon:"mdi-box"}]}},computed:{sideopen:function(){return this.$store.getters.sidebaropen}}},$=x,A=n("8860"),j=n("da13"),O=n("1800"),S=n("5d23"),E=n("f774"),P=Object(d["a"])($,V,C,!1,null,null,null),T=P.exports;m()(P,{VIcon:g["a"],VList:A["a"],VListItem:j["a"],VListItemAction:O["a"],VListItemContent:S["a"],VListItemTitle:S["b"],VNavigationDrawer:E["a"]});var I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{color:"blue darken-3",app:""}},[n("span",{staticClass:"white--text"},[t._v("© "+t._s((new Date).getFullYear()))])])},M=[],D={name:"Footer"},N=D,B=n("553a"),F=Object(d["a"])(N,I,M,!1,null,null,null),H=F.exports;m()(F,{VFooter:B["a"]});var U={name:"Main",components:{Appbar:L,Drawer:T,Footer:H}},q=U,J=n("7496"),K=n("f6c4"),R=Object(d["a"])(q,i,u,!1,null,null,null),Y=R.exports;m()(R,{VApp:J["a"],VMain:K["a"]});var z={name:"App",components:{Main:Y},data:function(){return{}}},G=z,Q=Object(d["a"])(G,a,o,!1,null,null,null),W=Q.exports;m()(Q,{VApp:J["a"]});n("d3b7");var X=n("8c4f"),Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",t._l(t.result,(function(e){return n("v-col",{key:e.id,attrs:{sm:"3"}},[n("v-card",{attrs:{"max-width":"200","router-link":"",to:"home/"+e.id}},[n("v-img",{staticClass:"white--text align-end",attrs:{src:e.thumbnailUrl}}),n("v-card-subtitle",{staticClass:"pb-0"},[t._v(t._s(e.title))])],1)],1)})),1),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-btn",{attrs:{large:"",color:"primary"},on:{click:function(e){return t.loadmore()}}},[t._v("Load More")])],1)],1)},tt=[],et={name:"Home",props:{source:String},data:function(){return{result:null,initlimit:10,plus:10}},methods:{getdata:function(){var t=this;this.isLoading(!0);var e="https://jsonplaceholder.typicode.com/photos?_limit=".concat(this.initlimit);this.$axios.get(e).then((function(e){t.result=e.data,t.isLoading(!1)}))},loadmore:function(){this.initlimit=this.initlimit+this.plus,this.getdata()},isLoading:function(t){this.$store.commit("isLoading",t)}},mounted:function(){this.getdata()}},nt=et,rt=n("b0af"),at=n("99d9"),ot=n("62ad"),it=n("a523"),ut=n("adda"),ct=n("0fd9"),st=Object(d["a"])(nt,Z,tt,!1,null,null,null),lt=st.exports;m()(st,{VBtn:b["a"],VCard:rt["a"],VCardSubtitle:at["b"],VCol:ot["a"],VContainer:it["a"],VImg:ut["a"],VRow:ct["a"]}),r["a"].use(X["a"]);var pt=[{path:"/",name:"Home",component:lt},{path:"/login",name:"Login",component:function(){return Promise.all([n.e("chunk-6c27a6d4"),n.e("chunk-2d2086b7")]).then(n.bind(null,"a55b"))}},{path:"/home/:id",name:"HomeDetails",component:function(){return n.e("chunk-2d21b364").then(n.bind(null,"bf8b"))}},{path:"/crud",name:"Crud",component:function(){return Promise.all([n.e("chunk-6c27a6d4"),n.e("chunk-28606661")]).then(n.bind(null,"f527"))}},{path:"/Table",name:"Table",component:function(){return n.e("chunk-17f56798").then(n.bind(null,"3f0e"))}},{path:"/listpage",name:"List Item",component:function(){return n.e("chunk-0015615f").then(n.bind(null,"f3f6"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}],dt=new X["a"]({routes:pt}),ft=dt,mt=n("2f62"),ht=n("bc3a"),vt=n.n(ht),bt=n("a7fe"),gt=n.n(bt);r["a"].use(mt["a"]),r["a"].use(gt.a,vt.a);var kt=new mt["a"].Store({state:{count:1,sideopen:!0,appname:"Application Name",listitem:[],isLoading:!1,token:localStorage.getItem("user-token")||"",status:"",resulthttp:null},getters:{isAuth:function(t){return!!t.token},authStatus:function(t){return t.status},resulthttp:function(t){return t.resulthttp},isLoading:function(t){return t.isLoading},appname:function(t){return t.appname},listitem:function(t){return t.listitem},getCounter:function(t){return t.count},sidebaropen:function(t){return t.sideopen}},mutations:{isLoading:function(t,e){t.isLoading=e},appname:function(t,e){t.appname=e},addlist:function(t,e){t.listitem.push(e)},increment:function(t){t.count++},sidebaract:function(t){t.sideopen=0==t.sideopen},resulthttp:function(t,e){t.resulthttp=e}},actions:{authLogout:function(){return new Promise((function(t){localStorage.removeItem("usertoken"),t()}))},getdata:function(t){var e=t.commit,n="http://localhost/epapp/crud/getall?limit=10";vt.a.get(n).then((function(t){e("resulthttp",t)}))}},modules:{}}),yt=n("f309");r["a"].use(yt["a"]);var wt=new yt["a"]({}),_t={yesoke:function(t){console.log(t)}},Lt={install:function(){r["a"].helpers=_t,r["a"].prototype.$helpers=_t}};r["a"].use(Lt),r["a"].use(gt.a,vt.a),r["a"].prototype.$axios=vt.a,r["a"].prototype.$themeColor="success",r["a"].config.productionTip=!1,new r["a"]({router:ft,store:kt,vuetify:wt,render:function(t){return t(W)}}).$mount("#app")}});
//# sourceMappingURL=app.7aed0794.js.map