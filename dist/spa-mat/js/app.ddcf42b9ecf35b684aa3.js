webpackJsonp([7],{0:function(e,n,t){e.exports=t("nplA")},"0cru":function(e,n){},"3Puz":function(e,n){},"5BSS":function(e,n){},CgWt:function(e,n,t){"use strict";var o=t("7109"),i={openURL:o.A,getUUID:function(){var e=this.$q.localStorage.get.item("uuid");null==e&&(e=Object(o.B)()),this.$store.commit("settings/setUUID",e)},reset:function(){this.$q.localStorage.clear(),window.location="/"},sendSettings:function(e,n){console.log("sending"),this.settings[e]=n,alert(this.settings[e])}},r=t("XyMi"),s=Object(r.a)(i,void 0,void 0,!1,null,null,null);s.options.__file="src/components/common.vue";n.a=s.exports},GhBQ:function(e,n){},KSNH:function(e,n){},N12Q:function(e,n){},R58i:function(e,n){},nplA:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={};t.d(o,"Mutator",function(){return P}),t.d(o,"fullScreen",function(){return L}),t.d(o,"setUUID",function(){return O});var i=t("Dd8w"),r=t.n(i),s=(t("30VO"),t("L4dm"),t("trlb"),t("3Puz"),t("N12Q"),t("/5sW")),u=t("7109"),a=t("fZjL"),l=t.n(a),c=t("BO1k"),f=t.n(c),p=t("CgWt"),d={name:"App",watch:{"$q.fullscreen.isActive":function(e){e?this.$store.commit("settings/fullScreen","true"):this.$store.commit("settings/fullScreen","false")}},mounted:function(){this.getUUID=p.a.getUUID,this.$nextTick(function(){var e=this,n=this.$q.localStorage.get.all();console.info(n);var t=!0,o=!1,i=void 0;try{for(var r,s=f()(l()(n));!(t=(r=s.next()).done);t=!0){var u=r.value;this.$store.commit("settings/Mutator",[u,n[u]]),"fullscreen"===u&&"true"===n[u]&&function(){var n=e;setTimeout(function(){n.$q.fullscreen.request(),n=null},50)}()}}catch(e){o=!0,i=e}finally{try{!t&&s.return&&s.return()}finally{if(o)throw i}}this.getUUID()})},methods:{}},h=function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},g=[];h._withStripped=!0;var m=t("XyMi"),v=!1;var b=function(e){v||t("0cru")},S=Object(m.a)(d,h,g,!1,b,null,null);S.options.__file="src/App.vue";var Q=S.exports,w=t("/ocq"),y=[{path:"/",component:function(){return t.e(1).then(t.bind(null,"lfHO"))},children:[{path:"",component:function(){return t.e(0).then(t.bind(null,"CmAY"))}},{path:"/settings",component:function(){return t.e(3).then(t.bind(null,"dkEd"))}},{path:"/main",component:function(){return t.e(4).then(t.bind(null,"gk7G"))}}]},{path:"/details",component:function(){return t.e(1).then(t.bind(null,"lfHO"))},children:[{path:"/",component:function(){return t.e(2).then(t.bind(null,"KBJM"))}},{path:"",component:function(){return t.e(0).then(t.bind(null,"CmAY"))}},{path:"",component:function(){return t.e(0).then(t.bind(null,"CmAY"))}},{path:"",component:function(){return t.e(0).then(t.bind(null,"CmAY"))}}]},{path:"*",component:function(){return t.e(5).then(t.bind(null,"c5Mg"))}}];s.a.use(w.a);var U=new w.a({mode:"history",base:"/",scrollBehavior:function(){return{y:0}},routes:y}),A=t("NYxO"),I=t("5BSS"),P=function(e,n){e.preferences[n[0]]=n[1],u.c.set(n[0],n[1])},L=function(e,n){e.fullscreen=n,u.c.set("fullscreen",n)},O=function(e,n){e.uuid=n,u.c.set("uuid",n)},B=t("GhBQ"),C={namespaced:!0,state:{loaded:!1,uuid:"unregistered",fullscreen:!1,api:"v1",preferences:{shutter:"1/60",iso:"400",hdr:"+3",guides:"off",colour:"Pre+3",fps:"24",wb:"3200K",ip:"127.0.0.1",port:"7070"}},getters:I,actions:B,mutations:o};s.a.use(A.a);var $=new A.a.Store({modules:{settings:C}});var _=$,D=t("TXmL"),q={en:{}},M={en:{lang:{language:"Language",native:"English",english:"English",german:"German"},actions:{failed:"failed",success:"success",loading:"Loading",save:"Save",set:"Set",unset:"Unset",reset:"Reset",close:"Close",select:"Select",toggle:"Toggle",preset:"Preset",presets:"Presets",show:"Show",hide:"Hide",on:"On",off:"Off",debug:"Debugger",ping:"Ping"},system:{ip:"Camera IP Address",api:"API",port:"Port",uuid:"UUID",custom_value:"Custom Value",set_and_close:"Set & Close",preferences:"Preferences",fullscreen:"Full Screen",shutter:"Shutter",guides:"Guides",hdr:"HDR",stops:"stops",colour:"Colour",iso:"ISO",fps:"FPS",wb:"WB",menu:"Menu"}}},T=t("mtWM"),x=t.n(T);s.a.config.productionTip=!1,s.a.use(u.z,{components:{QLayout:u.m,QLayoutHeader:u.o,QLayoutDrawer:u.n,QPageContainer:u.s,QPage:u.r,QToolbar:u.u,QToolbarTitle:u.v,QBtn:u.f,QBtnGroup:u.g,QIcon:u.h,QList:u.p,QInput:u.i,QListHeader:u.q,QItem:u.j,QItemMain:u.k,QItemSide:u.l,QAjaxBar:u.e,QScrollObservable:u.t},directives:{Ripple:u.w,TouchPan:u.x,TouchSwipe:u.y},plugins:{Notify:u.d,AppVisibility:u.b,AppFullscreen:u.a,LocalStorage:u.c}});var k=r()({el:"#q-app",router:U,store:_},Q),j=[];j.push(function(e){var n=e.app,t=e.store;e.Vue.use(D.a),n.i18n=new D.a({locale:t.state.locale,fallbackLocale:"en",messages:q})}),j.push(function(e){var n=e.app;e.store;e.Vue.use(D.a),n.i18n=new D.a({locale:"en",fallbackLocale:"en",messages:M})}),j.push(function(e){e.Vue.prototype.$axios=x.a}),j.forEach(function(e){return e({app:k,router:U,store:_,Vue:s.a})}),new s.a(k)}},[0]);