import{r as a,E as J,aH as Ee,W as ve,w as Y,ad as Ue,aI as _e,_ as x,t as le,aJ as Ye,v as T,aK as Xe,Y as Ze,Z as Be,aL as Je,aM as Ge,aN as et,aO as Te,aP as ie,aQ as tt,H as ge,$ as Ve,z as Se,aF as rt,V as at,u as Re,aR as nt,f as lt,ax as it,C as $e,aS as ot,aT as st,aU as qe,aV as ct,aW as ut,a2 as dt,aX as ft,a3 as mt,aY as vt,aZ as gt,ah as ht,a_ as Ct,a$ as bt,b0 as xt,aA as yt,b1 as pt,b2 as Et}from"./index-13de64b0.js";import{R as Ft}from"./row-adcb8862.js";function me(e){var t=a.useState(e),n=J(t,2),r=n[0],l=n[1];return a.useEffect(function(){var i=setTimeout(function(){l(e)},e.length?0:10);return function(){clearTimeout(i)}},[e]),r}var Ne=[];function ye(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:"".concat(n,"-").concat(r),error:e,errorStatus:t}}function We(e){var t=e.help,n=e.helpStatus,r=e.errors,l=r===void 0?Ne:r,i=e.warnings,s=i===void 0?Ne:i,o=e.className,f=e.fieldId,u=e.onVisibleChanged,y=a.useContext(Ee),g=y.prefixCls,F=a.useContext(ve),C=F.getPrefixCls,h="".concat(g,"-item-explain"),p=C(),k=me(l),v=me(s),I=a.useMemo(function(){return t!=null?[ye(t,n,"help")]:[].concat(Y(k.map(function(E,b){return ye(E,"error","error",b)})),Y(v.map(function(E,b){return ye(E,"warning","warning",b)})))},[t,n,k,v]),_={};return f&&(_.id="".concat(f,"_help")),a.createElement(Ue,{motionDeadline:_e.motionDeadline,motionName:"".concat(p,"-show-help"),visible:!!I.length,onVisibleChanged:u},function(E){var b=E.className,M=E.style;return a.createElement("div",x({},_,{className:le(h,b,o),style:M,role:"alert"}),a.createElement(Ye,x({keys:I},_e,{motionName:"".concat(p,"-show-help-item"),component:!1}),function(S){var w=S.key,R=S.error,d=S.errorStatus,P=S.className,V=S.style;return a.createElement("div",{key:w,className:le(P,T({},"".concat(h,"-").concat(d),d)),style:V},R)}))})}function Oe(e){return typeof e=="object"&&e!=null&&e.nodeType===1}function Me(e,t){return(!t||e!=="hidden")&&e!=="visible"&&e!=="clip"}function pe(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return Me(n.overflowY,t)||Me(n.overflowX,t)||function(r){var l=function(i){if(!i.ownerDocument||!i.ownerDocument.defaultView)return null;try{return i.ownerDocument.defaultView.frameElement}catch{return null}}(r);return!!l&&(l.clientHeight<r.scrollHeight||l.clientWidth<r.scrollWidth)}(e)}return!1}function fe(e,t,n,r,l,i,s,o){return i<e&&s>t||i>e&&s<t?0:i<=e&&o<=n||s>=t&&o>=n?i-e-r:s>t&&o<n||i<e&&o>n?s-t+l:0}var ke=function(e,t){var n=window,r=t.scrollMode,l=t.block,i=t.inline,s=t.boundary,o=t.skipOverflowHiddenElements,f=typeof s=="function"?s:function(ne){return ne!==s};if(!Oe(e))throw new TypeError("Invalid target");for(var u,y,g=document.scrollingElement||document.documentElement,F=[],C=e;Oe(C)&&f(C);){if((C=(y=(u=C).parentElement)==null?u.getRootNode().host||null:y)===g){F.push(C);break}C!=null&&C===document.body&&pe(C)&&!pe(document.documentElement)||C!=null&&pe(C,o)&&F.push(C)}for(var h=n.visualViewport?n.visualViewport.width:innerWidth,p=n.visualViewport?n.visualViewport.height:innerHeight,k=window.scrollX||pageXOffset,v=window.scrollY||pageYOffset,I=e.getBoundingClientRect(),_=I.height,E=I.width,b=I.top,M=I.right,S=I.bottom,w=I.left,R=l==="start"||l==="nearest"?b:l==="end"?S:b+_/2,d=i==="center"?w+E/2:i==="end"?M:w,P=[],V=0;V<F.length;V++){var c=F[V],m=c.getBoundingClientRect(),Q=m.height,W=m.width,L=m.top,N=m.right,oe=m.bottom,re=m.left;if(r==="if-needed"&&b>=0&&w>=0&&S<=p&&M<=h&&b>=L&&S<=oe&&w>=re&&M<=N)return P;var ae=getComputedStyle(c),z=parseInt(ae.borderLeftWidth,10),X=parseInt(ae.borderTopWidth,10),K=parseInt(ae.borderRightWidth,10),G=parseInt(ae.borderBottomWidth,10),Z=0,j=0,H="offsetWidth"in c?c.offsetWidth-c.clientWidth-z-K:0,$="offsetHeight"in c?c.offsetHeight-c.clientHeight-X-G:0,O="offsetWidth"in c?c.offsetWidth===0?0:W/c.offsetWidth:0,q="offsetHeight"in c?c.offsetHeight===0?0:Q/c.offsetHeight:0;if(g===c)Z=l==="start"?R:l==="end"?R-p:l==="nearest"?fe(v,v+p,p,X,G,v+R,v+R+_,_):R-p/2,j=i==="start"?d:i==="center"?d-h/2:i==="end"?d-h:fe(k,k+h,h,z,K,k+d,k+d+E,E),Z=Math.max(0,Z+v),j=Math.max(0,j+k);else{Z=l==="start"?R-L-X:l==="end"?R-oe+G+$:l==="nearest"?fe(L,oe,Q,X,G+$,R,R+_,_):R-(L+Q/2)+$/2,j=i==="start"?d-re-z:i==="center"?d-(re+W/2)+H/2:i==="end"?d-N+K+H:fe(re,N,W,z,K+H,d,d+E,E);var D=c.scrollLeft,A=c.scrollTop;R+=A-(Z=Math.max(0,Math.min(A+Z/q,c.scrollHeight-Q/q+$))),d+=D-(j=Math.max(0,Math.min(D+j/O,c.scrollWidth-W/O+H)))}P.push({el:c,top:Z,left:j})}return P};function je(e){return e===Object(e)&&Object.keys(e).length!==0}function wt(e,t){t===void 0&&(t="auto");var n="scrollBehavior"in document.body.style;e.forEach(function(r){var l=r.el,i=r.top,s=r.left;l.scroll&&n?l.scroll({top:i,left:s,behavior:t}):(l.scrollTop=i,l.scrollLeft=s)})}function It(e){return e===!1?{block:"end",inline:"nearest"}:je(e)?e:{block:"start",inline:"nearest"}}function _t(e,t){var n=e.isConnected||e.ownerDocument.documentElement.contains(e);if(je(t)&&typeof t.behavior=="function")return t.behavior(n?ke(e,t):[]);if(n){var r=It(t);return wt(ke(e,r),r.behavior)}}var St=["parentNode"],Rt="form_item";function ue(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function Ae(e,t){if(e.length){var n=e.join("_");if(t)return"".concat(t,"_").concat(n);var r=St.includes(n);return r?"".concat(Rt,"_").concat(n):n}}function Pe(e){var t=ue(e);return t.join("_")}function ze(e){var t=Xe(),n=J(t,1),r=n[0],l=a.useRef({}),i=a.useMemo(function(){return e??x(x({},r),{__INTERNAL__:{itemRef:function(o){return function(f){var u=Pe(o);f?l.current[u]=f:delete l.current[u]}}},scrollToField:function(o){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=ue(o),y=Ae(u,i.__INTERNAL__.name),g=y?document.getElementById(y):null;g&&_t(g,x({scrollMode:"if-needed",block:"nearest"},f))},getFieldInstance:function(o){var f=Pe(o);return l.current[f]}})},[e,r]);return[i]}var Nt=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n},Ot=function(t,n){var r,l=a.useContext(Ze),i=a.useContext(Be),s=a.useContext(ve),o=s.getPrefixCls,f=s.direction,u=s.form,y=t.prefixCls,g=t.className,F=g===void 0?"":g,C=t.size,h=C===void 0?l:C,p=t.disabled,k=p===void 0?i:p,v=t.form,I=t.colon,_=t.labelAlign,E=t.labelWrap,b=t.labelCol,M=t.wrapperCol,S=t.hideRequiredMark,w=t.layout,R=w===void 0?"horizontal":w,d=t.scrollToFirstError,P=t.requiredMark,V=t.onFinishFailed,c=t.name,m=Nt(t,["prefixCls","className","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name"]),Q=a.useContext(Je),W=a.useMemo(function(){return P!==void 0?P:u&&u.requiredMark!==void 0?u.requiredMark:!S},[S,P,u]),L=I??(u==null?void 0:u.colon),N=o("form",y),oe=le(N,(r={},T(r,"".concat(N,"-").concat(R),!0),T(r,"".concat(N,"-hide-required-mark"),W===!1),T(r,"".concat(N,"-rtl"),f==="rtl"),T(r,"".concat(N,"-").concat(h),h),r),F),re=ze(v),ae=J(re,1),z=ae[0],X=z.__INTERNAL__;X.name=c;var K=a.useMemo(function(){return{name:c,labelAlign:_,labelCol:b,labelWrap:E,wrapperCol:M,vertical:R==="vertical",colon:L,requiredMark:W,itemRef:X.itemRef,form:z}},[c,_,b,M,R,L,W,z]);a.useImperativeHandle(n,function(){return z});var G=function(j){V==null||V(j);var H={block:"nearest"};d&&j.errorFields.length&&(ge(d)==="object"&&(H=d),z.scrollToField(j.errorFields[0].name,H))};return a.createElement(Ge,{disabled:k},a.createElement(et,{size:h},a.createElement(Te,x({},{validateMessages:Q}),a.createElement(ie.Provider,{value:K},a.createElement(tt,x({id:c},m,{name:c,onFinishFailed:G,form:z,className:oe}))))))},Mt=a.forwardRef(Ot);const kt=Mt;var Pt=function(){var t=a.useContext(Ve),n=t.status;return{status:n}};const Lt=Pt;function Tt(e){var t=a.useState(e),n=J(t,2),r=n[0],l=n[1],i=a.useRef(null),s=a.useRef([]),o=a.useRef(!1);a.useEffect(function(){return o.current=!1,function(){o.current=!0,Se.cancel(i.current),i.current=null}},[]);function f(u){o.current||(i.current===null&&(s.current=[],i.current=Se(function(){i.current=null,l(function(y){var g=y;return s.current.forEach(function(F){g=F(g)}),g})})),s.current.push(u))}return[r,f]}function Vt(){var e=a.useContext(ie),t=e.itemRef,n=a.useRef({});function r(l,i){var s=i&&ge(i)==="object"&&i.ref,o=l.join("_");return(n.current.name!==o||n.current.originRef!==s)&&(n.current.name=o,n.current.originRef=s,n.current.ref=rt(t(l),s)),n.current.ref}return r}var $t={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"};const qt=$t;var He=function(t,n){return a.createElement(at,Re(Re({},t),{},{ref:n,icon:qt}))};He.displayName="QuestionCircleOutlined";const Wt=a.forwardRef(He);var jt=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};function At(e){return e?ge(e)==="object"&&!a.isValidElement(e)?e:{title:e}:null}var zt=function(t){var n=t.prefixCls,r=t.label,l=t.htmlFor,i=t.labelCol,s=t.labelAlign,o=t.colon,f=t.required,u=t.requiredMark,y=t.tooltip,g=nt("Form"),F=J(g,1),C=F[0];return r?a.createElement(ie.Consumer,{key:"label"},function(h){var p,k=h.vertical,v=h.labelAlign,I=h.labelCol,_=h.labelWrap,E=h.colon,b,M=i||I||{},S=s||v,w="".concat(n,"-item-label"),R=le(w,S==="left"&&"".concat(w,"-left"),M.className,T({},"".concat(w,"-wrap"),!!_)),d=r,P=o===!0||E!==!1&&o!==!1,V=P&&!k;V&&typeof r=="string"&&r.trim()!==""&&(d=r.replace(/[:|：]\s*$/,""));var c=At(y);if(c){var m=c.icon,Q=m===void 0?a.createElement(Wt,null):m,W=jt(c,["icon"]),L=a.createElement(lt,x({},W),a.cloneElement(Q,{className:"".concat(n,"-item-tooltip"),title:""}));d=a.createElement(a.Fragment,null,d,L)}u==="optional"&&!f&&(d=a.createElement(a.Fragment,null,d,a.createElement("span",{className:"".concat(n,"-item-optional"),title:""},(C==null?void 0:C.optional)||((b=it.Form)===null||b===void 0?void 0:b.optional))));var N=le((p={},T(p,"".concat(n,"-item-required"),f),T(p,"".concat(n,"-item-required-mark-optional"),u==="optional"),T(p,"".concat(n,"-item-no-colon"),!P),p));return a.createElement($e,x({},M,{className:R}),a.createElement("label",{htmlFor:l,className:N,title:typeof r=="string"?r:""},d))}):null};const Ht=zt;var Dt=function(t){var n=t.prefixCls,r=t.status,l=t.wrapperCol,i=t.children,s=t.errors,o=t.warnings,f=t._internalItemRender,u=t.extra,y=t.help,g=t.fieldId,F=t.marginBottom,C=t.onErrorVisibleChanged,h="".concat(n,"-item"),p=a.useContext(ie),k=l||p.wrapperCol||{},v=le("".concat(h,"-control"),k.className),I=a.useMemo(function(){return x({},p)},[p]);delete I.labelCol,delete I.wrapperCol;var _=a.createElement("div",{className:"".concat(h,"-control-input")},a.createElement("div",{className:"".concat(h,"-control-input-content")},i)),E=a.useMemo(function(){return{prefixCls:n,status:r}},[n,r]),b=F!==null||s.length||o.length?a.createElement("div",{style:{display:"flex",flexWrap:"nowrap"}},a.createElement(Ee.Provider,{value:E},a.createElement(We,{fieldId:g,errors:s,warnings:o,help:y,helpStatus:r,className:"".concat(h,"-explain-connected"),onVisibleChanged:C})),!!F&&a.createElement("div",{style:{width:0,height:F}})):null,M={};g&&(M.id="".concat(g,"_extra"));var S=u?a.createElement("div",x({},M,{className:"".concat(h,"-extra")}),u):null,w=f&&f.mark==="pro_table_render"&&f.render?f.render(t,{input:_,errorList:b,extra:S}):a.createElement(a.Fragment,null,_,b,S);return a.createElement(ie.Provider,{value:I},a.createElement($e,x({},k,{className:v}),w))};const Qt=Dt;var Kt=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n},Ut={success:ct,warning:ut,error:dt,validating:ft};function Yt(e){var t,n=e.prefixCls,r=e.className,l=e.style,i=e.help,s=e.errors,o=e.warnings,f=e.validateStatus,u=e.meta,y=e.hasFeedback,g=e.hidden,F=e.children,C=e.fieldId,h=e.isRequired,p=e.onSubItemMetaChange,k=Kt(e,["prefixCls","className","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","isRequired","onSubItemMetaChange"]),v="".concat(n,"-item"),I=a.useContext(ie),_=I.requiredMark,E=a.useRef(null),b=me(s),M=me(o),S=i!=null,w=!!(S||s.length||o.length),R=a.useState(null),d=J(R,2),P=d[0],V=d[1];ot(function(){if(w&&E.current){var L=getComputedStyle(E.current);V(parseInt(L.marginBottom,10))}},[w]);var c=function(N){N||V(null)},m="";f!==void 0?m=f:u.validating?m="validating":b.length?m="error":M.length?m="warning":u.touched&&(m="success");var Q=a.useMemo(function(){var L;if(y){var N=m&&Ut[m];L=N?a.createElement("span",{className:le("".concat(v,"-feedback-icon"),"".concat(v,"-feedback-icon-").concat(m))},a.createElement(N,null)):null}return{status:m,hasFeedback:y,feedbackIcon:L,isFormItemInput:!0}},[m,y]),W=(t={},T(t,v,!0),T(t,"".concat(v,"-with-help"),S||b.length||M.length),T(t,"".concat(r),!!r),T(t,"".concat(v,"-has-feedback"),m&&y),T(t,"".concat(v,"-has-success"),m==="success"),T(t,"".concat(v,"-has-warning"),m==="warning"),T(t,"".concat(v,"-has-error"),m==="error"),T(t,"".concat(v,"-is-validating"),m==="validating"),T(t,"".concat(v,"-hidden"),g),t);return a.createElement("div",{className:le(W),style:l,ref:E},a.createElement(Ft,x({className:"".concat(v,"-row")},st(k,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","required","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol"])),a.createElement(Ht,x({htmlFor:C,required:h,requiredMark:_},e,{prefixCls:n})),a.createElement(Qt,x({},e,u,{errors:b,warnings:M,prefixCls:n,status:m,help:i,marginBottom:P,onErrorVisibleChanged:c}),a.createElement(qe.Provider,{value:p},a.createElement(Ve.Provider,{value:Q},F)))),!!P&&a.createElement("div",{className:"".concat(v,"-margin-offset"),style:{marginBottom:-P}}))}var Xt="__SPLIT__";mt("success","warning","error","validating","");var Zt=a.memo(function(e){var t=e.children;return t},function(e,t){return e.value===t.value&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every(function(n,r){return n===t.childProps[r]})});function Bt(e){return e!=null}function Le(){return{errors:[],warnings:[],touched:!1,validating:!1,validated:!1,name:[]}}function Jt(e){var t=e.name,n=e.noStyle,r=e.dependencies,l=e.prefixCls,i=e.shouldUpdate,s=e.rules,o=e.children,f=e.required,u=e.label,y=e.messageVariables,g=e.trigger,F=g===void 0?"onChange":g,C=e.validateTrigger,h=e.hidden,p=a.useContext(ve),k=p.getPrefixCls,v=a.useContext(ie),I=v.name,_=typeof o=="function",E=a.useContext(qe),b=a.useContext(vt),M=b.validateTrigger,S=C!==void 0?C:M,w=Bt(t),R=k("form",l),d=a.useContext(gt),P=a.useRef(),V=Tt({}),c=J(V,2),m=c[0],Q=c[1],W=ht(function(){return Le()}),L=J(W,2),N=L[0],oe=L[1],re=function(O){var q=d==null?void 0:d.getKey(O.name);if(oe(O.destroy?Le():O,!0),n&&E){var D=O.name;if(O.destroy)D=P.current||D;else if(q!==void 0){var A=J(q,2),ne=A[0],ee=A[1];D=[ne].concat(Y(ee)),P.current=D}E(O,D)}},ae=function(O,q){Q(function(D){var A=x({},D),ne=[].concat(Y(O.name.slice(0,-1)),Y(q)),ee=ne.join(Xt);return O.destroy?delete A[ee]:A[ee]=O,A})},z=a.useMemo(function(){var $=Y(N.errors),O=Y(N.warnings);return Object.values(m).forEach(function(q){$.push.apply($,Y(q.errors||[])),O.push.apply(O,Y(q.warnings||[]))}),[$,O]},[m,N.errors,N.warnings]),X=J(z,2),K=X[0],G=X[1],Z=Vt();function j($,O,q){return n&&!h?$:a.createElement(Yt,x({key:"row"},e,{prefixCls:R,fieldId:O,isRequired:q,errors:K,warnings:G,meta:N,onSubItemMetaChange:ae}),$)}if(!w&&!_&&!r)return j(o);var H={};return typeof u=="string"?H.label=u:t&&(H.label=String(t)),y&&(H=x(x({},H),y)),a.createElement(Ct,x({},e,{messageVariables:H,trigger:F,validateTrigger:S,onMetaChange:re}),function($,O,q){var D=ue(t).length&&O?O.name:[],A=Ae(D,I),ne=f!==void 0?f:!!(s&&s.some(function(B){if(B&&ge(B)==="object"&&B.required&&!B.warningOnly)return!0;if(typeof B=="function"){var se=B(q);return se&&se.required&&!se.warningOnly}return!1})),ee=x({},$),ce=null;if(Array.isArray(o)&&w)ce=o;else if(!(_&&(!(i||r)||w))){if(!(r&&!_&&!w))if(bt(o)){var U=x(x({},o.props),ee);if(U.id||(U.id=A),e.help||K.length>0||G.length>0||e.extra){var he=[];(e.help||K.length>0)&&he.push("".concat(A,"_help")),e.extra&&he.push("".concat(A,"_extra")),U["aria-describedby"]=he.join(" ")}K.length>0&&(U["aria-invalid"]="true"),ne&&(U["aria-required"]="true"),xt(o)&&(U.ref=Z(D,o));var Qe=new Set([].concat(Y(ue(F)),Y(ue(S))));Qe.forEach(function(B){U[B]=function(){for(var se,Fe,Ce,we,be,Ie=arguments.length,xe=new Array(Ie),de=0;de<Ie;de++)xe[de]=arguments[de];(Ce=ee[B])===null||Ce===void 0||(se=Ce).call.apply(se,[ee].concat(xe)),(be=(we=o.props)[B])===null||be===void 0||(Fe=be).call.apply(Fe,[we].concat(xe))}});var Ke=[U["aria-required"],U["aria-invalid"],U["aria-describedby"]];ce=a.createElement(Zt,{value:ee[e.valuePropName||"value"],update:o,childProps:Ke},yt(o,U))}else _&&(i||r)&&!w?ce=o(q):ce=o}return j(ce,A,ne)})}var De=Jt;De.useStatus=Lt;const Gt=De;var er=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n},tr=function(t){var n=t.prefixCls,r=t.children,l=er(t,["prefixCls","children"]),i=a.useContext(ve),s=i.getPrefixCls,o=s("form",n),f=a.useMemo(function(){return{prefixCls:o,status:"error"}},[o]);return a.createElement(pt,x({},l),function(u,y,g){return a.createElement(Ee.Provider,{value:f},r(u.map(function(F){return x(x({},F),{fieldKey:F.key})}),y,{errors:g.errors,warnings:g.warnings}))})};const rr=tr;function ar(){var e=a.useContext(ie),t=e.form;return t}var te=kt;te.Item=Gt;te.List=rr;te.ErrorList=We;te.useForm=ze;te.useFormInstance=ar;te.useWatch=Et;te.Provider=Te;te.create=function(){};const ir=te;export{ir as F};
