(function(e){function t(t){for(var n,a,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==s[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},s={app:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-a1e5f720":"283b50bb"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-a1e5f720":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-a1e5f720":"24c9192f"}[e]+".css",s=c.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===s))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===n||u===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],f.parentNode.removeChild(f),r(o)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=s[e]=[t,r]}));t.push(n[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}s[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"26c8":function(e,t,r){"use strict";r("b981")},5452:function(e,t,r){"use strict";r("af35")},"555f":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loader-container"},[r("svg",{staticClass:"loader",attrs:{width:"136",height:"136",viewBox:"0 0 136 136",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.61919 93.5527C8.61916 93.5527 8.61915 93.5528 8.61916 93.5528C16.6047 114.349 40.1963 124.589 61.2823 116.493C82.3683 108.396 93.0431 84.9977 85.0576 64.2014C85.0576 64.2014 85.0575 64.2014 85.0575 64.2014L82.257 65.2768C82.257 65.2768 82.257 65.2768 82.257 65.2768C89.6318 84.4829 79.7899 106.172 60.2069 113.692C40.6238 121.212 18.7947 111.683 11.4198 92.4774C11.4198 92.4774 11.4197 92.4773 11.4197 92.4774L8.61919 93.5527Z",fill:"#FA2828","fill-opacity":"0.98"}}),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M23.4107 44.3217C22.6232 43.7303 22.4633 42.6077 23.0837 41.8426C39.2531 21.9011 68.6844 18.4111 89.673 34.1727C110.662 49.9342 115.516 79.1714 100.874 100.26C100.312 101.069 99.1895 101.228 98.4019 100.637C97.6143 100.045 97.4599 98.9277 98.0191 98.1169C111.449 78.6456 106.987 51.6349 87.5312 37.0248C68.0758 22.4146 40.8919 25.66 25.9375 43.9867C25.3148 44.7498 24.1983 44.9132 23.4107 44.3217Z",fill:"black"}})])])},a=[],s=(r("a071"),r("2877")),o={},i=Object(s["a"])(o,n,a,!1,null,null,null);t["a"]=i.exports},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view")],1)},s=[],o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("h1",{staticClass:"header__title"},[e._v("#movienow")])])}],c=(r("5452"),r("2877")),l={},u=Object(c["a"])(l,o,i,!1,null,null,null),d=u.exports,f={name:"App",components:{Header:d}},p=f,h=(r("5c0b"),Object(c["a"])(p,a,s,!1,null,null,null)),v=h.exports,m=(r("d3b7"),r("4af9")),_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h2",{staticClass:"title"},[e._v("Фильмы")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],staticClass:"radio",attrs:{id:"filteredByName",type:"radio",name:"filteredByName",value:"filteredByName"},domProps:{checked:e._q(e.filter,"filteredByName")},on:{change:function(t){e.filter="filteredByName"}}}),r("label",{staticClass:"label",attrs:{for:"filteredByName"}},[e._v("Отсортировать по названию")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],staticClass:"radio",attrs:{id:"filteredByYear",type:"radio",name:"filteredByYear",value:"filteredByYear"},domProps:{checked:e._q(e.filter,"filteredByYear")},on:{change:function(t){e.filter="filteredByYear"}}}),r("label",{staticClass:"label",attrs:{for:"filteredByYear"}},[e._v("Отсортировать по году")]),r("hr",{staticClass:"line"}),e.loading?r("Loader"):e._e(),"filteredByName"===e.filter?r("div",e._l(e.sortByName,(function(e){return r("Card",{key:e.id,attrs:{post:e,isBoxShadow:!0}})})),1):"filteredByYear"===e.filter?r("div",e._l(e.sortByYear,(function(e){return r("Card",{key:e.id,attrs:{post:e,isBoxShadow:!0}})})),1):r("div",e._l(e.allPosts,(function(e){return r("Card",{key:e.id,attrs:{post:e,isBoxShadow:!0}})})),1)],1)},g=[],y=(r("96cf"),r("1da1")),b=r("5530"),C=r("2f62"),w=r("ae8d"),x=r("555f"),B={data:function(){return{loading:!0,filter:"all",errored:!1}},computed:Object(b["a"])({},Object(C["c"])(["allPosts","sortByName","sortByYear"])),created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:Object(b["a"])(Object(b["a"])({},Object(C["b"])(["fetchPosts"])),{},{fetchData:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:setTimeout((function(){e.fetchPosts(),e.loading=!1}),1e3);case 1:case"end":return t.stop()}}),t)})))()}}),components:{Card:w["a"],Loader:x["a"]}},k=B,H=(r("26c8"),Object(c["a"])(k,_,g,!1,null,"6153c7d5",null)),j=H.exports;n["a"].use(m["a"]);var O=new m["a"]({mode:"history",routes:[{path:"/",component:j},{path:"/film/:id",name:"film",component:function(){return r.e("chunk-a1e5f720").then(r.bind(null,"4ac4"))}}]}),V=(r("7db0"),{state:{posts:[]},actions:{fetchPosts:function(e){return Object(y["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://floating-sierra-20135.herokuapp.com/api/movies");case 3:return r=t.sent,t.next=6,r.json();case 6:n=t.sent,a=n.data,e.commit("updatePosts",a),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log("Ошибка",t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},fetchPostById:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function r(){var n,a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("https://floating-sierra-20135.herokuapp.com/api/movie/"+t);case 3:return n=r.sent,r.next=6,n.json();case 6:a=r.sent,s=a.data,e.commit("updatePosts",s),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](0),console.log("Ошибка",r.t0.message);case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()}},mutations:{updatePosts:function(e,t){e.posts=t}},getters:{allPosts:function(e){return e.posts},sortByYear:function(e){return e.posts.sort((function(e,t){return e.year-t.year}))},sortByName:function(e){return e.posts.sort((function(e,t){var r=e.title.toLowerCase(),n=t.title.toLowerCase();return r<n?-1:r>n?1:0}))},getById:function(e){return function(t){return e.posts.find((function(e){return e.id===t}))}}}});n["a"].use(C["a"]);var P=new C["a"].Store({modules:{post:V}});n["a"].config.productionTip=!1,new n["a"]({store:P,router:O,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"9c0c":function(e,t,r){},a071:function(e,t,r){"use strict";r("c25f")},ae8d:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card",class:{boxshadow:e.isBoxShadow}},[r("div",{staticClass:"card__img-container"},[r("img",{staticClass:"card__img",attrs:{src:e.post.poster,alt:"Постер фильма"}})]),r("div",{staticClass:"card__text-container"},[r("router-link",{staticClass:"card__title",attrs:{to:{name:"film",params:{id:e.post.id}}}},[e._v(" "+e._s(e.post.title)+" ")]),null!==e.post.collapse.duration?r("div",{staticClass:"card__rectangle"},[r("p",{staticClass:"card__rectangle-text"},[e._v(e._s(e.post.collapse.duration[0]))]),r("svg",{staticClass:"card__rectangle-icon",attrs:{width:"16",height:"18",viewBox:"0 0 16 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M14 0V2H12V0H4V2H2V0H0V18H2V16H4V18H12V16H14V18H16V0H14ZM4 14H2V12H4V14ZM4 10H2V8H4V10ZM4 6H2V4H4V6ZM10 16H6V2H10V16ZM14 14H12V12H14V14ZM14 10H12V8H14V10ZM14 6H12V4H14V6Z",fill:"#FA2828","fill-opacity":"0.98"}})])]):e._e(),r("p",{staticClass:"card__subtitle"},[e._v(" "+e._s(e.post.year)+", "),e._l(e.post.genres,(function(t,n){return r("span",{key:n,staticClass:"card__subtitle"},[e._v(" "+e._s(t)+" "),n+1<e.post.genres.length?r("span",[e._v(", ")]):e._e()])}))],2),null!==e.post.directors?r("p",{staticClass:"card__subtitle"},[e._v(" Режиссёр: "),e._l(e.post.directors,(function(t,n){return r("span",{key:n,staticClass:"card__subtitle"},[e._v(" "+e._s(t)+" "),n+1<e.post.directors.length?r("span",[e._v(", ")]):e._e()])}))],2):e._e(),r("div",[null!==e.post.actors?r("p",{staticClass:"card__subtitle"},[e._v(" Актёры: "),e._l(e.post.actors,(function(t,n){return r("span",{key:n,staticClass:"card__text"},[e._v(" "+e._s(t)+" "),n+1<e.post.actors.length?r("span",[e._v(", ")]):e._e()])}))],2):e._e()]),null!==e.post.description?r("p",[e._v(e._s(e.post.description))]):e._e(),r("p",{staticClass:"card__text"})],1)])},a=[],s={props:{isBoxShadow:{type:Boolean,required:!0},post:{required:!0}}},o=s,i=(r("e60d"),r("2877")),c=Object(i["a"])(o,n,a,!1,null,null,null);t["a"]=c.exports},af35:function(e,t,r){},b981:function(e,t,r){},c25f:function(e,t,r){},e60d:function(e,t,r){"use strict";r("e9ec")},e9ec:function(e,t,r){}});
//# sourceMappingURL=app.f55200ca.js.map