import{r as u,e as i,_ as c}from"./index-13de64b0.js";import{P as l}from"./index-dbd3cd39.js";var f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};const v=f;var m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};const D=m;var g=function(t,o){return u.createElement(i,c({},t,{ref:o,icon:v}))};const b=u.forwardRef(g);var p=function(t,o){return u.createElement(i,c({},t,{ref:o,icon:l}))};const z=u.forwardRef(p);var s,h=new Uint8Array(16);function y(){if(!s&&(s=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!s))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(h)}const x=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function O(e){return typeof e=="string"&&x.test(e)}var n=[];for(var d=0;d<256;++d)n.push((d+256).toString(16).substr(1));function E(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=(n[e[t+0]]+n[e[t+1]]+n[e[t+2]]+n[e[t+3]]+"-"+n[e[t+4]]+n[e[t+5]]+"-"+n[e[t+6]]+n[e[t+7]]+"-"+n[e[t+8]]+n[e[t+9]]+"-"+n[e[t+10]]+n[e[t+11]]+n[e[t+12]]+n[e[t+13]]+n[e[t+14]]+n[e[t+15]]).toLowerCase();if(!O(o))throw TypeError("Stringified UUID is invalid");return o}function H(e,t,o){e=e||{};var a=e.random||(e.rng||y)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,t){o=o||0;for(var r=0;r<16;++r)t[o+r]=a[r];return t}return E(a)}export{b as D,D as E,z as P,H as v};
