(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a73e19ea"],{"267e":function(e,n,t){"use strict";var o=t("a3c8"),c=t.n(o);c.a},a3c8:function(e,n,t){},b533:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-container",{staticClass:"index-page"},[t("a",{attrs:{href:"https://github.com/login/oauth/authorize?client_id=a4eb7d2fb8aba4164cbb"}},[e._v("点击登录")])])},c=[],a=(t("cadf"),t("551c"),t("097d"),t("1336")),u={name:"index",data:function(){return{isCollapse:!0,project_list:[]}},created:function(){console.log(this.$route),console.log(this.$route.query,code),Object(a["c"])("TrumanGu").then(function(e){console.log(e)}).catch(function(e){console.log(e)}),Object(a["getProject"])("TrumanGu","TrumanGu").then(function(e){})},watch:{$route:{handler:function(e,n){console.log(e)},deep:!0}}},i=u,l=(t("267e"),t("2877")),r=Object(l["a"])(i,o,c,!1,null,null,null);r.options.__file="index.vue";n["default"]=r.exports}}]);