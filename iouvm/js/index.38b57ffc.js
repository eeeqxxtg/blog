(function(t){function e(e){for(var r,c,i=e[0],s=e[1],u=e[2],l=0,f=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);h&&h(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={index:0},a=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"578cdb30"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(t);var u=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var h=u;a.push([1,"chunk-vendors"]),n()})({1:function(t,e,n){t.exports=n("cd49")},"5c48":function(t,e,n){},"7c55":function(t,e,n){"use strict";var r=n("5c48"),o=n.n(r);o.a},9291:function(t,e,n){},a8c3:function(t,e,n){"use strict";var r=n("9291"),o=n.n(r);o.a},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},a=[],c=(n("7c55"),n("2877")),i={},s=Object(c["a"])(i,o,a,!1,null,null,null),u=s.exports,l=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"CLY IOU VM"}})],1)},f=[],p=n("d225"),d=n("308d"),v=n("6bb5"),g=n("4e2b"),b=n("9ab4"),m=n("60a3"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),n("div",{staticClass:"svg-container"},[n("svg",{staticClass:"canvas-svg",attrs:{width:"100%",height:"100%",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:t.qPath,fill:"none",stroke:"rgba(0, 215, 251, 1)","stroke-width":t.qLineWidth}}),n("path",{attrs:{d:t.heartPath,fill:"none",stroke:"rgba(255, 0, 0, 1)","stroke-width":"4"}})])])])},j=[],O=n("b0b4"),y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return function(e){var n=Math.sqrt(3.3),r=n*(2*e-1),o=Math.pow(Math.abs(r),2/3),a=.9*Math.sqrt(3.3-r*r)*Math.sin(Math.PI*r*t);return.25*(o+a+1.5)}},k=function(t){function e(){var t;return Object(p["a"])(this,e),t=Object(d["a"])(this,Object(v["a"])(e).apply(this,arguments)),t.svgWidth=1024,t.svgHeight=1024,t.qLineWidth=2,t}return Object(g["a"])(e,t),Object(O["a"])(e,[{key:"qPath",get:function(){var t=0,e=this.qLineWidth/2,n=[];return n.push("M".concat(t," ").concat(e)),n.push("L".concat(this.svgWidth-t," ").concat(e)),n.push("M".concat(this.svgWidth," ").concat(t)),n.push("L".concat(this.svgWidth," ").concat(this.svgHeight-t)),n.push("M".concat(this.svgWidth-t," ").concat(this.svgHeight-e)),n.push("L".concat(t," ").concat(this.svgHeight-e)),n.push("M".concat(0," ",this.svgHeight-t)),n.push("L".concat(0," ",t)),n.join(" ")}},{key:"heartPath",get:function(){for(var t=[],e=this.svgWidth,n=this.svgHeight,r=function(t){return(1-y()(t))*n},o=0;o<e;o++){var a=o/e;0===o?t.push("M".concat(o," ").concat(r(a))):t.push("L".concat(o," ").concat(r(a)))}return t.join(" ")}}]),e}(m["c"]);Object(b["a"])([Object(m["b"])()],k.prototype,"msg",void 0),k=Object(b["a"])([m["a"]],k);var _=k,M=_,P=(n("a8c3"),Object(c["a"])(M,w,j,!1,null,"c41adc38",null)),x=P.exports,L=function(t){function e(){return Object(p["a"])(this,e),Object(d["a"])(this,Object(v["a"])(e).apply(this,arguments))}return Object(g["a"])(e,t),e}(m["c"]);L=Object(b["a"])([Object(m["a"])({components:{HelloWorld:x}})],L);var W=L,q=W,H=Object(c["a"])(q,h,f,!1,null,null,null),C=H.exports;r["a"].use(l["a"]);var E=new l["a"]({mode:"hash",base:"",routes:[{path:"/",name:"home",component:C},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),S=n("2f62");r["a"].use(S["a"]);var A=new S["a"].Store({state:{},mutations:{},actions:{}}),T=n("9483");Object(T["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["a"].config.productionTip=!1,new r["a"]({router:E,store:A,render:function(t){return t(u)}}).$mount("#app")}});
//# sourceMappingURL=index.38b57ffc.js.map