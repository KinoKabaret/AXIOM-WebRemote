webpackJsonp([3],{"9pMd":function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},dkEd:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("CgWt"),i={name:"settings",data:function(){return{debug:!1}},mounted:function(){this.openURL=s.a.openURL,this.getUUID=s.a.getUUID,this.reset=s.a.reset,this.defaultSettings=s.a.defaultSettings},methods:{ping:function(){console.log("AXIOS CALL HERE")}}},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("q-layout",[e("div",{attrs:{id:"menu-page"}},[e("div",{staticClass:"header"},[e("div",{staticClass:"layout-padding",staticStyle:{margin:"60px","z-index":"10"}},[e("q-btn-group",{staticClass:"fixed-top-left",staticStyle:{margin:"13px 0 0 -2px",border:"none!important"},attrs:{outline:""}},[e("q-btn",{staticClass:"bg-primary",attrs:{outline:""},on:{click:function(n){t.debug=!t.debug}}},[e("q-item-main",{directives:[{name:"show",rawName:"v-show",value:t.debug,expression:"debug"}],domProps:{innerHTML:t._s(t.$t("actions.hide")+" "+t.$t("actions.debug"))}}),t._v(" "),e("q-item-main",{directives:[{name:"show",rawName:"v-show",value:!t.debug,expression:"!debug"}],domProps:{innerHTML:t._s(t.$t("actions.show")+" "+t.$t("actions.debug"))}})],1),t._v(" "),e("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.debug,expression:"debug"}],staticClass:"bg-primary",attrs:{outline:"",label:t.$t("actions.reset")},on:{click:function(n){t.reset()}}}),t._v(" "),e("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.debug,expression:"debug"}],staticClass:"bg-primary",attrs:{outline:"",label:t.$t("actions.ping")},on:{click:function(n){t.ping()}}}),t._v(" "),e("q-btn",{staticClass:"bg-primary",attrs:{outline:"",round:""},on:{click:function(n){t.$q.fullscreen.toggle()}}},[e("q-icon",{directives:[{name:"show",rawName:"v-show",value:t.$q.fullscreen.isActive,expression:"$q.fullscreen.isActive"}],staticClass:"fa fa-fw fa-compress fa-lg"}),t._v(" "),e("q-icon",{directives:[{name:"show",rawName:"v-show",value:!t.$q.fullscreen.isActive,expression:"!$q.fullscreen.isActive"}],staticClass:"fa fa-fw fa-expand fa-lg"})],1)],1)],1)]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"row-option",attrs:{id:"Test1SwitchBtn"}},[e("div",{staticClass:"row-option-label"},[t._v("Test1")]),t._v(" "),e("div",{staticClass:"row-option-option"},[e("input",{attrs:{type:"checkbox",id:"Test1Switch"}}),t._v(" "),e("label",{staticClass:"toggle",attrs:{for:"Test1Switch"}},[t._v("Test1")])])])]),t._v(" "),e("div",{staticClass:"footer"},[e("div",{staticClass:"menuBottom"},[e("div",{staticClass:"menuButton roundedTop",attrs:{id:"MenuBtnClose"},on:{click:function(n){t.$router.push("/Main")}}},[e("div",{staticClass:"buttonCaption"},[t._v(t._s(t.$t("actions.close")))])]),t._v(" "),e("div",{staticClass:"menuButton"}),t._v(" "),e("div",{staticClass:"menuButton"}),t._v(" "),e("div",{staticClass:"menuButton"})])])]),t._v(" "),e("small",{directives:[{name:"show",rawName:"v-show",value:t.debug,expression:"debug"}],staticClass:"fixed-top-right text-right",staticStyle:{width:"100%"}},[t._v(t._s(t.$store.state.settings.uuid)),e("br"),t._v(t._s(t.$store.state.settings.preferences.ip)+":"+t._s(t.$store.state.settings.preferences.port))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.debug,expression:"debug"}],staticStyle:{position:"absolute",top:"0",bottom:"0",right:"0",margin:"0 0 0 30%",width:"50%"}},[e("div",{staticClass:"scroll"},t._l(t.$store.state.settings.preferences,function(n,s){return e("div",{key:s,staticStyle:{background:"#ededed",padding:"1em"}},[e("q-input",{directives:[{name:"show",rawName:"v-show",value:"uuid"!=s,expression:"index != 'uuid'"}],staticStyle:{"font-size":"1.2em"},attrs:{value:n,type:"text","float-label":t.$t("system."+s)},on:{change:function(n){t.$store.commit("settings/Mutator",[s,n])}}})],1)}))])])},o=[];a._withStripped=!0;var r=e("XyMi"),c=!1;var l=function(t){c||e("t1Hy")},u=Object(r.a)(i,a,o,!1,l,null,null);u.options.__file="src/pages/settings.vue";n.default=u.exports},t1Hy:function(t,n,e){var s=e("9pMd");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e("rjj0").default)("583056e6",s,!1,{})}});