(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e4b406a2"],{"2c50":function(t,e,n){},"609e":function(t,e,n){"use strict";n.r(e);var c={name:"d2-contextmenu-list",props:{menulist:{type:Array,default:function(){return[]}}},methods:{rowClick:function(t){for(var e=t.target;!e.dataset.value;)e=e.parentNode;this.$emit("rowClick",e.dataset.value)}}},i=(n("f0b8"),n("2877")),o=function(t){t.options.__source="src/layout/header-aside/components/contextmenu/components/contentmenuList/index.vue"},a=Object(i.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d2-contentmenu-list",on:{click:e.rowClick}},e._l(e.menulist,function(t){return n("div",{key:t.value,staticClass:"d2-contentmenu-item",attrs:{"data-value":t.value,flex:"cross:center main:center"}},[t.icon?n("d2-icon",{attrs:{name:t.icon}}):e._e(),n("div",{staticClass:"d2-contentmenu-item-title",attrs:{"flex-box":"1"}},[e._v("\n      "+e._s(t.title)+"\n    ")])],1)}),0)},[],!1,null,null,null);"function"==typeof o&&o(a);e.default=a.exports},f0b8:function(t,e,n){"use strict";var c=n("2c50");n.n(c).a}}]);