(function(e){function t(t){for(var r,c,u=t[0],i=t[1],p=t[2],l=0,d=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(d.length)d.shift()();return a.push.apply(a,p||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"6e181f97","chunk-2d22bd05":"b17a53c1"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e);var p=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],p=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=p;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],c={name:"Models"},u=c,i=n("2877"),p=Object(i["a"])(u,o,a,!1,null,null,null),l=p.exports,s=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(s["a"]);var d=[{path:"/",redirect:{name:"Home"}},{path:"/Home",name:"Home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/Work",name:"Work",component:function(){return n.e("chunk-2d22bd05").then(n.bind(null,"f126"))}}],f=new s["a"]({routes:d,mode:"history"}),m=f,h=n("a925"),v=n("5898"),g=n.n(v);n("c1c3");r["a"].use(g.a),r["a"].use(h["a"]);var b=new h["a"]({locale:localStorage.getItem("nowLanguageID")||"zh-TW",messages:{"zh-TW":n("cf32"),"en-US":n("d500")}});r["a"].config.productionTip=!1,new r["a"]({router:m,i18n:b,gFunction:g.a,render:function(e){return e(l)}}).$mount("#app")},5898:function(e,t,n){n("4d63"),n("ac1f"),n("25f0"),n("5319"),n("99af"),n("4d90"),t.install=function(e){e.prototype.ConsoleLog=function(e){var t=!0;t&&console.log(e)},e.prototype.GetParameterByName=function(e,t){t||(t=window.location.href);var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),r=n.exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null},e.prototype.ExportExcel=function(e){var t,n='<head><meta charset="UTF-8" /></head><table border="2px"><tr>',r=0,o=document.getElementById(e);for(r=0;r<o.rows.length;r++)n=n+o.rows[r].innerHTML+"</tr>";return n+="</table>",n=n.replace(/<A[^>]*>|<\/A>/g,""),n=n.replace(/<img[^>]*>/gi,""),n=n.replace(/<input[^>]*>|<\/input>/gi,""),t=window.open("data:application/vnd.ms-excel,"+encodeURIComponent(n)),t},e.prototype.SecondToTime=function(e){var t=parseInt(e/3600)+"",n=parseInt(e%3600/60)+"",r=e%60+"";return"".concat(t.padStart(2,"0"),":").concat(n.padStart(2,"0"),":").concat(r.padStart(2,"0"))},e.prototype.TestEmail=function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)},e.prototype.TestPassword=function(e){var t=/^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{6,12}$/;return t.test(e)},e.prototype.DeepCopy=function(e){return JSON.parse(JSON.stringify(e))}}},c1c3:function(e,t,n){},cf32:function(e,t){e.exports={Home:"首頁"}},d500:function(e,t){e.exports={Home:"Home"}}});
//# sourceMappingURL=app.34db295d.js.map