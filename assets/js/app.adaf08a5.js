(function(e){function t(t){for(var r,c,a=t[0],u=t[1],i=t[2],s=0,b=[];s<a.length;s++)c=a[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(b.length)b.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(l.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},l=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="./";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var d=u;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("f2bf"),o={class:"app"},l=Object(r["d"])("h1",null,"Cotação",-1),c={class:"inputs"},a=Object(r["d"])("p",null,"Valor a investir",-1),u=Object(r["d"])("br",null,null,-1),i=Object(r["d"])("p",null,"Cotação atual",-1),d={class:"botoes"},s={key:0,class:"resultado"},b=Object(r["d"])("h3",null,"Você pode adquirir:",-1);function p(e,t,n,p,f,j){var O=Object(r["j"])("InputNumber"),h=Object(r["j"])("Button");return Object(r["g"])(),Object(r["b"])("div",o,[l,Object(r["d"])("div",c,[a,Object(r["d"])(O,{modelValue:e.reais,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.reais=t}),mode:"currency",currency:"BRL",locale:"pt-BR"},null,8,["modelValue"]),u,i,Object(r["d"])(O,{modelValue:e.cotacao,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.cotacao=t}),mode:"currency",currency:"BRL",locale:"pt-BR"},null,8,["modelValue"])]),Object(r["d"])("div",d,[Object(r["d"])(h,{label:"Calcular",class:"p-button-rounded",onClick:t[3]||(t[3]=function(e){return j.calcular()})}),e.dolar?(Object(r["g"])(),Object(r["b"])(h,{key:0,label:"Limpar",class:"p-button-danger p-button-rounded",onClick:t[4]||(t[4]=function(e){return j.limpar()})})):Object(r["c"])("",!0)]),e.dolar?(Object(r["g"])(),Object(r["b"])("div",s,[b,Object(r["d"])("h2",null,"U$ "+Object(r["l"])(e.dolar),1)])):Object(r["c"])("",!0)])}n("b680");var f={data:function(){return{reais:null,cotacao:null,dolar:null}},methods:{calcular:function(){null==this.reais||null==this.cotacao?alert("Digite os valores nos campos abaixo"):this.dolar=(this.reais/this.cotacao).toFixed(2)},limpar:function(){this.dolar=null,this.reais=null,this.cotacao=null}}};n("63bd");f.render=p;var j=f,O=n("9319"),h=n("3822"),v=n("bb57"),m=(n("098b"),n("e1ae"),Object(r["a"])(j));m.use(O["a"]),m.component("InputNumber",h["a"]),m.component("Button",v["a"]),m.mount("#app")},"63bd":function(e,t,n){"use strict";n("e1cf")},e1cf:function(e,t,n){}});
//# sourceMappingURL=app.adaf08a5.js.map