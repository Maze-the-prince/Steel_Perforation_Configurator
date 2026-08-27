(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function wy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var X0={exports:{}},Qc={},q0={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wa=Symbol.for("react.element"),Ey=Symbol.for("react.portal"),Ty=Symbol.for("react.fragment"),Ay=Symbol.for("react.strict_mode"),by=Symbol.for("react.profiler"),Cy=Symbol.for("react.provider"),Ry=Symbol.for("react.context"),Py=Symbol.for("react.forward_ref"),Ly=Symbol.for("react.suspense"),Ny=Symbol.for("react.memo"),Iy=Symbol.for("react.lazy"),Pp=Symbol.iterator;function Dy(t){return t===null||typeof t!="object"?null:(t=Pp&&t[Pp]||t["@@iterator"],typeof t=="function"?t:null)}var Y0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z0=Object.assign,K0={};function co(t,e,n){this.props=t,this.context=e,this.refs=K0,this.updater=n||Y0}co.prototype.isReactComponent={};co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function J0(){}J0.prototype=co.prototype;function lf(t,e,n){this.props=t,this.context=e,this.refs=K0,this.updater=n||Y0}var cf=lf.prototype=new J0;cf.constructor=lf;Z0(cf,co.prototype);cf.isPureReactComponent=!0;var Lp=Array.isArray,Q0=Object.prototype.hasOwnProperty,uf={current:null},ev={key:!0,ref:!0,__self:!0,__source:!0};function tv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Q0.call(e,i)&&!ev.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Wa,type:t,key:s,ref:o,props:r,_owner:uf.current}}function Uy(t,e){return{$$typeof:Wa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wa}function Fy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Np=/\/+/g;function Ru(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Fy(""+t.key):e.toString(36)}function ic(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Wa:case Ey:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ru(o,0):i,Lp(r)?(n="",t!=null&&(n=t.replace(Np,"$&/")+"/"),ic(r,e,n,"",function(c){return c})):r!=null&&(hf(r)&&(r=Uy(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Np,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Lp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ru(s,a);o+=ic(s,e,n,l,r)}else if(l=Dy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ru(s,a++),o+=ic(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function tl(t,e,n){if(t==null)return t;var i=[],r=0;return ic(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Oy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var cn={current:null},rc={transition:null},ky={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:rc,ReactCurrentOwner:uf};function nv(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:tl,forEach:function(t,e,n){tl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return tl(t,function(){e++}),e},toArray:function(t){return tl(t,function(e){return e})||[]},only:function(t){if(!hf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ze.Component=co;Ze.Fragment=Ty;Ze.Profiler=by;Ze.PureComponent=lf;Ze.StrictMode=Ay;Ze.Suspense=Ly;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ky;Ze.act=nv;Ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Z0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=uf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Q0.call(e,l)&&!ev.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Wa,type:t.type,key:r,ref:s,props:i,_owner:o}};Ze.createContext=function(t){return t={$$typeof:Ry,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Cy,_context:t},t.Consumer=t};Ze.createElement=tv;Ze.createFactory=function(t){var e=tv.bind(null,t);return e.type=t,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(t){return{$$typeof:Py,render:t}};Ze.isValidElement=hf;Ze.lazy=function(t){return{$$typeof:Iy,_payload:{_status:-1,_result:t},_init:Oy}};Ze.memo=function(t,e){return{$$typeof:Ny,type:t,compare:e===void 0?null:e}};Ze.startTransition=function(t){var e=rc.transition;rc.transition={};try{t()}finally{rc.transition=e}};Ze.unstable_act=nv;Ze.useCallback=function(t,e){return cn.current.useCallback(t,e)};Ze.useContext=function(t){return cn.current.useContext(t)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(t){return cn.current.useDeferredValue(t)};Ze.useEffect=function(t,e){return cn.current.useEffect(t,e)};Ze.useId=function(){return cn.current.useId()};Ze.useImperativeHandle=function(t,e,n){return cn.current.useImperativeHandle(t,e,n)};Ze.useInsertionEffect=function(t,e){return cn.current.useInsertionEffect(t,e)};Ze.useLayoutEffect=function(t,e){return cn.current.useLayoutEffect(t,e)};Ze.useMemo=function(t,e){return cn.current.useMemo(t,e)};Ze.useReducer=function(t,e,n){return cn.current.useReducer(t,e,n)};Ze.useRef=function(t){return cn.current.useRef(t)};Ze.useState=function(t){return cn.current.useState(t)};Ze.useSyncExternalStore=function(t,e,n){return cn.current.useSyncExternalStore(t,e,n)};Ze.useTransition=function(){return cn.current.useTransition()};Ze.version="18.3.1";q0.exports=Ze;var Ae=q0.exports;const iv=wy(Ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zy=Ae,By=Symbol.for("react.element"),Hy=Symbol.for("react.fragment"),Vy=Object.prototype.hasOwnProperty,Gy=zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wy={key:!0,ref:!0,__self:!0,__source:!0};function rv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Vy.call(e,i)&&!Wy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:By,type:t,key:s,ref:o,props:r,_owner:Gy.current}}Qc.Fragment=Hy;Qc.jsx=rv;Qc.jsxs=rv;X0.exports=Qc;var S=X0.exports,sv={exports:{}},Rn={},ov={exports:{}},av={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,H){var q=N.length;N.push(H);e:for(;0<q;){var te=q-1>>>1,Se=N[te];if(0<r(Se,H))N[te]=H,N[q]=Se,q=te;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var H=N[0],q=N.pop();if(q!==H){N[0]=q;e:for(var te=0,Se=N.length,Ue=Se>>>1;te<Ue;){var V=2*(te+1)-1,ie=N[V],me=V+1,ne=N[me];if(0>r(ie,q))me<Se&&0>r(ne,ie)?(N[te]=ne,N[me]=q,te=me):(N[te]=ie,N[V]=q,te=V);else if(me<Se&&0>r(ne,q))N[te]=ne,N[me]=q,te=me;else break e}}return H}function r(N,H){var q=N.sortIndex-H.sortIndex;return q!==0?q:N.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,d=3,p=!1,m=!1,v=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var H=n(c);H!==null;){if(H.callback===null)i(c);else if(H.startTime<=N)i(c),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(c)}}function y(N){if(v=!1,_(N),!m)if(n(l)!==null)m=!0,J(C);else{var H=n(c);H!==null&&Q(y,H.startTime-N)}}function C(N,H){m=!1,v&&(v=!1,f(L),L=-1),p=!0;var q=d;try{for(_(H),h=n(l);h!==null&&(!(h.expirationTime>H)||N&&!U());){var te=h.callback;if(typeof te=="function"){h.callback=null,d=h.priorityLevel;var Se=te(h.expirationTime<=H);H=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&i(l),_(H)}else i(l);h=n(l)}if(h!==null)var Ue=!0;else{var V=n(c);V!==null&&Q(y,V.startTime-H),Ue=!1}return Ue}finally{h=null,d=q,p=!1}}var T=!1,A=null,L=-1,E=5,M=-1;function U(){return!(t.unstable_now()-M<E)}function B(){if(A!==null){var N=t.unstable_now();M=N;var H=!0;try{H=A(!0,N)}finally{H?I():(T=!1,A=null)}}else T=!1}var I;if(typeof x=="function")I=function(){x(B)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,j=z.port2;z.port1.onmessage=B,I=function(){j.postMessage(null)}}else I=function(){g(B,0)};function J(N){A=N,T||(T=!0,I())}function Q(N,H){L=g(function(){N(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,J(C))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var q=d;d=H;try{return N()}finally{d=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,H){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var q=d;d=N;try{return H()}finally{d=q}},t.unstable_scheduleCallback=function(N,H,q){var te=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?te+q:te):q=te,N){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=q+Se,N={id:u++,callback:H,priorityLevel:N,startTime:q,expirationTime:Se,sortIndex:-1},q>te?(N.sortIndex=q,e(c,N),n(l)===null&&N===n(c)&&(v?(f(L),L=-1):v=!0,Q(y,q-te))):(N.sortIndex=Se,e(l,N),m||p||(m=!0,J(C))),N},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(N){var H=d;return function(){var q=d;d=H;try{return N.apply(this,arguments)}finally{d=q}}}})(av);ov.exports=av;var $y=ov.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jy=Ae,Cn=$y;function he(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lv=new Set,ya={};function qr(t,e){Ks(t,e),Ks(t+"Capture",e)}function Ks(t,e){for(ya[t]=e,t=0;t<e.length;t++)lv.add(e[t])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kh=Object.prototype.hasOwnProperty,Xy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ip={},Dp={};function qy(t){return Kh.call(Dp,t)?!0:Kh.call(Ip,t)?!1:Xy.test(t)?Dp[t]=!0:(Ip[t]=!0,!1)}function Yy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Zy(t,e,n,i){if(e===null||typeof e>"u"||Yy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new un(t,5,!1,t.toLowerCase(),null,!1,!1)});var df=/[\-:]([a-z])/g;function ff(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(df,ff);jt[e]=new un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(df,ff);jt[e]=new un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(df,ff);jt[e]=new un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new un(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new un(t,1,!1,t.toLowerCase(),null,!0,!0)});function pf(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Zy(e,n,r,i)&&(n=null),i||r===null?qy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=jy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nl=Symbol.for("react.element"),Es=Symbol.for("react.portal"),Ts=Symbol.for("react.fragment"),mf=Symbol.for("react.strict_mode"),Jh=Symbol.for("react.profiler"),cv=Symbol.for("react.provider"),uv=Symbol.for("react.context"),gf=Symbol.for("react.forward_ref"),Qh=Symbol.for("react.suspense"),ed=Symbol.for("react.suspense_list"),vf=Symbol.for("react.memo"),ji=Symbol.for("react.lazy"),hv=Symbol.for("react.offscreen"),Up=Symbol.iterator;function To(t){return t===null||typeof t!="object"?null:(t=Up&&t[Up]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,Pu;function Jo(t){if(Pu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pu=e&&e[1]||""}return`
`+Pu+t}var Lu=!1;function Nu(t,e){if(!t||Lu)return"";Lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Jo(t):""}function Ky(t){switch(t.tag){case 5:return Jo(t.type);case 16:return Jo("Lazy");case 13:return Jo("Suspense");case 19:return Jo("SuspenseList");case 0:case 2:case 15:return t=Nu(t.type,!1),t;case 11:return t=Nu(t.type.render,!1),t;case 1:return t=Nu(t.type,!0),t;default:return""}}function td(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ts:return"Fragment";case Es:return"Portal";case Jh:return"Profiler";case mf:return"StrictMode";case Qh:return"Suspense";case ed:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case uv:return(t.displayName||"Context")+".Consumer";case cv:return(t._context.displayName||"Context")+".Provider";case gf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vf:return e=t.displayName||null,e!==null?e:td(t.type)||"Memo";case ji:e=t._payload,t=t._init;try{return td(t(e))}catch{}}return null}function Jy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return td(e);case 8:return e===mf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qy(t){var e=dv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function il(t){t._valueTracker||(t._valueTracker=Qy(t))}function fv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=dv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function vc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nd(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pv(t,e){e=e.checked,e!=null&&pf(t,"checked",e,!1)}function id(t,e){pv(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?rd(t,e.type,n):e.hasOwnProperty("defaultValue")&&rd(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Op(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function rd(t,e,n){(e!=="number"||vc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qo=Array.isArray;function ks(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function sd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(he(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(he(92));if(Qo(n)){if(1<n.length)throw Error(he(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function mv(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function zp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function od(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var rl,vv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(rl=rl||document.createElement("div"),rl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=rl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eS=["Webkit","ms","Moz","O"];Object.keys(ra).forEach(function(t){eS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ra[e]=ra[t]})});function _v(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ra.hasOwnProperty(t)&&ra[t]?(""+e).trim():e+"px"}function xv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=_v(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var tS=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ad(t,e){if(e){if(tS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(he(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(he(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(he(61))}if(e.style!=null&&typeof e.style!="object")throw Error(he(62))}}function ld(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cd=null;function _f(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ud=null,zs=null,Bs=null;function Bp(t){if(t=Xa(t)){if(typeof ud!="function")throw Error(he(280));var e=t.stateNode;e&&(e=ru(e),ud(t.stateNode,t.type,e))}}function yv(t){zs?Bs?Bs.push(t):Bs=[t]:zs=t}function Sv(){if(zs){var t=zs,e=Bs;if(Bs=zs=null,Bp(t),e)for(t=0;t<e.length;t++)Bp(e[t])}}function Mv(t,e){return t(e)}function wv(){}var Iu=!1;function Ev(t,e,n){if(Iu)return t(e,n);Iu=!0;try{return Mv(t,e,n)}finally{Iu=!1,(zs!==null||Bs!==null)&&(wv(),Sv())}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var i=ru(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(he(231,e,typeof n));return n}var hd=!1;if(Ri)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){hd=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{hd=!1}function nS(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var sa=!1,_c=null,xc=!1,dd=null,iS={onError:function(t){sa=!0,_c=t}};function rS(t,e,n,i,r,s,o,a,l){sa=!1,_c=null,nS.apply(iS,arguments)}function sS(t,e,n,i,r,s,o,a,l){if(rS.apply(this,arguments),sa){if(sa){var c=_c;sa=!1,_c=null}else throw Error(he(198));xc||(xc=!0,dd=c)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Tv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hp(t){if(Yr(t)!==t)throw Error(he(188))}function oS(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(he(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Hp(r),t;if(s===i)return Hp(r),e;s=s.sibling}throw Error(he(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(he(189))}}if(n.alternate!==i)throw Error(he(190))}if(n.tag!==3)throw Error(he(188));return n.stateNode.current===n?t:e}function Av(t){return t=oS(t),t!==null?bv(t):null}function bv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=bv(t);if(e!==null)return e;t=t.sibling}return null}var Cv=Cn.unstable_scheduleCallback,Vp=Cn.unstable_cancelCallback,aS=Cn.unstable_shouldYield,lS=Cn.unstable_requestPaint,At=Cn.unstable_now,cS=Cn.unstable_getCurrentPriorityLevel,xf=Cn.unstable_ImmediatePriority,Rv=Cn.unstable_UserBlockingPriority,yc=Cn.unstable_NormalPriority,uS=Cn.unstable_LowPriority,Pv=Cn.unstable_IdlePriority,eu=null,li=null;function hS(t){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(eu,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:pS,dS=Math.log,fS=Math.LN2;function pS(t){return t>>>=0,t===0?32:31-(dS(t)/fS|0)|0}var sl=64,ol=4194304;function ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ea(a):(s&=o,s!==0&&(i=ea(s)))}else o=n&~r,o!==0?i=ea(o):s!==0&&(i=ea(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Qn(e),r=1<<n,i|=t[n],e&=~r;return i}function mS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=mS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function fd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lv(){var t=sl;return sl<<=1,!(sl&4194240)&&(sl=64),t}function Du(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function vS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function yf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function Nv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Iv,Sf,Dv,Uv,Fv,pd=!1,al=[],Ji=null,Qi=null,er=null,wa=new Map,Ea=new Map,qi=[],_S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gp(t,e){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(e.pointerId)}}function bo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Xa(e),e!==null&&Sf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function xS(t,e,n,i,r){switch(e){case"focusin":return Ji=bo(Ji,t,e,n,i,r),!0;case"dragenter":return Qi=bo(Qi,t,e,n,i,r),!0;case"mouseover":return er=bo(er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return wa.set(s,bo(wa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ea.set(s,bo(Ea.get(s)||null,t,e,n,i,r)),!0}return!1}function Ov(t){var e=Ir(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=Tv(n),e!==null){t.blockedOn=e,Fv(t.priority,function(){Dv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=md(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);cd=i,n.target.dispatchEvent(i),cd=null}else return e=Xa(n),e!==null&&Sf(e),t.blockedOn=n,!1;e.shift()}return!0}function Wp(t,e,n){sc(t)&&n.delete(e)}function yS(){pd=!1,Ji!==null&&sc(Ji)&&(Ji=null),Qi!==null&&sc(Qi)&&(Qi=null),er!==null&&sc(er)&&(er=null),wa.forEach(Wp),Ea.forEach(Wp)}function Co(t,e){t.blockedOn===e&&(t.blockedOn=null,pd||(pd=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,yS)))}function Ta(t){function e(r){return Co(r,t)}if(0<al.length){Co(al[0],t);for(var n=1;n<al.length;n++){var i=al[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ji!==null&&Co(Ji,t),Qi!==null&&Co(Qi,t),er!==null&&Co(er,t),wa.forEach(e),Ea.forEach(e),n=0;n<qi.length;n++)i=qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<qi.length&&(n=qi[0],n.blockedOn===null);)Ov(n),n.blockedOn===null&&qi.shift()}var Hs=Ui.ReactCurrentBatchConfig,Mc=!0;function SS(t,e,n,i){var r=it,s=Hs.transition;Hs.transition=null;try{it=1,Mf(t,e,n,i)}finally{it=r,Hs.transition=s}}function MS(t,e,n,i){var r=it,s=Hs.transition;Hs.transition=null;try{it=4,Mf(t,e,n,i)}finally{it=r,Hs.transition=s}}function Mf(t,e,n,i){if(Mc){var r=md(t,e,n,i);if(r===null)Wu(t,e,i,wc,n),Gp(t,i);else if(xS(r,t,e,n,i))i.stopPropagation();else if(Gp(t,i),e&4&&-1<_S.indexOf(t)){for(;r!==null;){var s=Xa(r);if(s!==null&&Iv(s),s=md(t,e,n,i),s===null&&Wu(t,e,i,wc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Wu(t,e,i,null,n)}}var wc=null;function md(t,e,n,i){if(wc=null,t=_f(i),t=Ir(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Tv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wc=t,null}function kv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cS()){case xf:return 1;case Rv:return 4;case yc:case uS:return 16;case Pv:return 536870912;default:return 16}default:return 16}}var Zi=null,wf=null,oc=null;function zv(){if(oc)return oc;var t,e=wf,n=e.length,i,r="value"in Zi?Zi.value:Zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return oc=r.slice(t,1<i?1-i:void 0)}function ac(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ll(){return!0}function $p(){return!1}function Pn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ll:$p,this.isPropagationStopped=$p,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),e}var uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ef=Pn(uo),ja=wt({},uo,{view:0,detail:0}),wS=Pn(ja),Uu,Fu,Ro,tu=wt({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(Uu=t.screenX-Ro.screenX,Fu=t.screenY-Ro.screenY):Fu=Uu=0,Ro=t),Uu)},movementY:function(t){return"movementY"in t?t.movementY:Fu}}),jp=Pn(tu),ES=wt({},tu,{dataTransfer:0}),TS=Pn(ES),AS=wt({},ja,{relatedTarget:0}),Ou=Pn(AS),bS=wt({},uo,{animationName:0,elapsedTime:0,pseudoElement:0}),CS=Pn(bS),RS=wt({},uo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),PS=Pn(RS),LS=wt({},uo,{data:0}),Xp=Pn(LS),NS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function US(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=DS[t])?!!e[t]:!1}function Tf(){return US}var FS=wt({},ja,{key:function(t){if(t.key){var e=NS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ac(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?IS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tf,charCode:function(t){return t.type==="keypress"?ac(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ac(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OS=Pn(FS),kS=wt({},tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qp=Pn(kS),zS=wt({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tf}),BS=Pn(zS),HS=wt({},uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),VS=Pn(HS),GS=wt({},tu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),WS=Pn(GS),$S=[9,13,27,32],Af=Ri&&"CompositionEvent"in window,oa=null;Ri&&"documentMode"in document&&(oa=document.documentMode);var jS=Ri&&"TextEvent"in window&&!oa,Bv=Ri&&(!Af||oa&&8<oa&&11>=oa),Yp=" ",Zp=!1;function Hv(t,e){switch(t){case"keyup":return $S.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var As=!1;function XS(t,e){switch(t){case"compositionend":return Vv(e);case"keypress":return e.which!==32?null:(Zp=!0,Yp);case"textInput":return t=e.data,t===Yp&&Zp?null:t;default:return null}}function qS(t,e){if(As)return t==="compositionend"||!Af&&Hv(t,e)?(t=zv(),oc=wf=Zi=null,As=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bv&&e.locale!=="ko"?null:e.data;default:return null}}var YS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!YS[t.type]:e==="textarea"}function Gv(t,e,n,i){yv(i),e=Ec(e,"onChange"),0<e.length&&(n=new Ef("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var aa=null,Aa=null;function ZS(t){e_(t,0)}function nu(t){var e=Rs(t);if(fv(e))return t}function KS(t,e){if(t==="change")return e}var Wv=!1;if(Ri){var ku;if(Ri){var zu="oninput"in document;if(!zu){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),zu=typeof Jp.oninput=="function"}ku=zu}else ku=!1;Wv=ku&&(!document.documentMode||9<document.documentMode)}function Qp(){aa&&(aa.detachEvent("onpropertychange",$v),Aa=aa=null)}function $v(t){if(t.propertyName==="value"&&nu(Aa)){var e=[];Gv(e,Aa,t,_f(t)),Ev(ZS,e)}}function JS(t,e,n){t==="focusin"?(Qp(),aa=e,Aa=n,aa.attachEvent("onpropertychange",$v)):t==="focusout"&&Qp()}function QS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nu(Aa)}function eM(t,e){if(t==="click")return nu(e)}function tM(t,e){if(t==="input"||t==="change")return nu(e)}function nM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ni=typeof Object.is=="function"?Object.is:nM;function ba(t,e){if(ni(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Kh.call(e,r)||!ni(t[r],e[r]))return!1}return!0}function em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tm(t,e){var n=em(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=em(n)}}function jv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Xv(){for(var t=window,e=vc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vc(t.document)}return e}function bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function iM(t){var e=Xv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jv(n.ownerDocument.documentElement,n)){if(i!==null&&bf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=tm(n,s);var o=tm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rM=Ri&&"documentMode"in document&&11>=document.documentMode,bs=null,gd=null,la=null,vd=!1;function nm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vd||bs==null||bs!==vc(i)||(i=bs,"selectionStart"in i&&bf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),la&&ba(la,i)||(la=i,i=Ec(gd,"onSelect"),0<i.length&&(e=new Ef("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=bs)))}function cl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cs={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionend:cl("Transition","TransitionEnd")},Bu={},qv={};Ri&&(qv=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function iu(t){if(Bu[t])return Bu[t];if(!Cs[t])return t;var e=Cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qv)return Bu[t]=e[n];return t}var Yv=iu("animationend"),Zv=iu("animationiteration"),Kv=iu("animationstart"),Jv=iu("transitionend"),Qv=new Map,im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){Qv.set(t,e),qr(e,[t])}for(var Hu=0;Hu<im.length;Hu++){var Vu=im[Hu],sM=Vu.toLowerCase(),oM=Vu[0].toUpperCase()+Vu.slice(1);dr(sM,"on"+oM)}dr(Yv,"onAnimationEnd");dr(Zv,"onAnimationIteration");dr(Kv,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(Jv,"onTransitionEnd");Ks("onMouseEnter",["mouseout","mouseover"]);Ks("onMouseLeave",["mouseout","mouseover"]);Ks("onPointerEnter",["pointerout","pointerover"]);Ks("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aM=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function rm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,sS(i,e,void 0,t),t.currentTarget=null}function e_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;rm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;rm(r,a,c),s=l}}}if(xc)throw t=dd,xc=!1,dd=null,t}function ut(t,e){var n=e[Md];n===void 0&&(n=e[Md]=new Set);var i=t+"__bubble";n.has(i)||(t_(e,t,2,!1),n.add(i))}function Gu(t,e,n){var i=0;e&&(i|=4),t_(n,t,i,e)}var ul="_reactListening"+Math.random().toString(36).slice(2);function Ca(t){if(!t[ul]){t[ul]=!0,lv.forEach(function(n){n!=="selectionchange"&&(aM.has(n)||Gu(n,!1,t),Gu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ul]||(e[ul]=!0,Gu("selectionchange",!1,e))}}function t_(t,e,n,i){switch(kv(e)){case 1:var r=SS;break;case 4:r=MS;break;default:r=Mf}n=r.bind(null,e,n,t),r=void 0,!hd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Wu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ir(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ev(function(){var c=s,u=_f(n),h=[];e:{var d=Qv.get(t);if(d!==void 0){var p=Ef,m=t;switch(t){case"keypress":if(ac(n)===0)break e;case"keydown":case"keyup":p=OS;break;case"focusin":m="focus",p=Ou;break;case"focusout":m="blur",p=Ou;break;case"beforeblur":case"afterblur":p=Ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=TS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=BS;break;case Yv:case Zv:case Kv:p=CS;break;case Jv:p=VS;break;case"scroll":p=wS;break;case"wheel":p=WS;break;case"copy":case"cut":case"paste":p=PS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=qp}var v=(e&4)!==0,g=!v&&t==="scroll",f=v?d!==null?d+"Capture":null:d;v=[];for(var x=c,_;x!==null;){_=x;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,f!==null&&(y=Ma(x,f),y!=null&&v.push(Ra(x,y,_)))),g)break;x=x.return}0<v.length&&(d=new p(d,m,null,n,u),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==cd&&(m=n.relatedTarget||n.fromElement)&&(Ir(m)||m[Pi]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?Ir(m):null,m!==null&&(g=Yr(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(v=jp,y="onMouseLeave",f="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(v=qp,y="onPointerLeave",f="onPointerEnter",x="pointer"),g=p==null?d:Rs(p),_=m==null?d:Rs(m),d=new v(y,x+"leave",p,n,u),d.target=g,d.relatedTarget=_,y=null,Ir(u)===c&&(v=new v(f,x+"enter",m,n,u),v.target=_,v.relatedTarget=g,y=v),g=y,p&&m)t:{for(v=p,f=m,x=0,_=v;_;_=Qr(_))x++;for(_=0,y=f;y;y=Qr(y))_++;for(;0<x-_;)v=Qr(v),x--;for(;0<_-x;)f=Qr(f),_--;for(;x--;){if(v===f||f!==null&&v===f.alternate)break t;v=Qr(v),f=Qr(f)}v=null}else v=null;p!==null&&sm(h,d,p,v,!1),m!==null&&g!==null&&sm(h,g,m,v,!0)}}e:{if(d=c?Rs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=KS;else if(Kp(d))if(Wv)C=tM;else{C=QS;var T=JS}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=eM);if(C&&(C=C(t,c))){Gv(h,C,n,u);break e}T&&T(t,d,c),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&rd(d,"number",d.value)}switch(T=c?Rs(c):window,t){case"focusin":(Kp(T)||T.contentEditable==="true")&&(bs=T,gd=c,la=null);break;case"focusout":la=gd=bs=null;break;case"mousedown":vd=!0;break;case"contextmenu":case"mouseup":case"dragend":vd=!1,nm(h,n,u);break;case"selectionchange":if(rM)break;case"keydown":case"keyup":nm(h,n,u)}var A;if(Af)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else As?Hv(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Bv&&n.locale!=="ko"&&(As||L!=="onCompositionStart"?L==="onCompositionEnd"&&As&&(A=zv()):(Zi=u,wf="value"in Zi?Zi.value:Zi.textContent,As=!0)),T=Ec(c,L),0<T.length&&(L=new Xp(L,t,null,n,u),h.push({event:L,listeners:T}),A?L.data=A:(A=Vv(n),A!==null&&(L.data=A)))),(A=jS?XS(t,n):qS(t,n))&&(c=Ec(c,"onBeforeInput"),0<c.length&&(u=new Xp("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=A))}e_(h,e)})}function Ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ec(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ma(t,n),s!=null&&i.unshift(Ra(t,s,r)),s=Ma(t,e),s!=null&&i.push(Ra(t,s,r))),t=t.return}return i}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ma(n,s),l!=null&&o.unshift(Ra(n,l,a))):r||(l=Ma(n,s),l!=null&&o.push(Ra(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lM=/\r\n?/g,cM=/\u0000|\uFFFD/g;function om(t){return(typeof t=="string"?t:""+t).replace(lM,`
`).replace(cM,"")}function hl(t,e,n){if(e=om(e),om(t)!==e&&n)throw Error(he(425))}function Tc(){}var _d=null,xd=null;function yd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sd=typeof setTimeout=="function"?setTimeout:void 0,uM=typeof clearTimeout=="function"?clearTimeout:void 0,am=typeof Promise=="function"?Promise:void 0,hM=typeof queueMicrotask=="function"?queueMicrotask:typeof am<"u"?function(t){return am.resolve(null).then(t).catch(dM)}:Sd;function dM(t){setTimeout(function(){throw t})}function $u(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ta(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ta(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ho=Math.random().toString(36).slice(2),oi="__reactFiber$"+ho,Pa="__reactProps$"+ho,Pi="__reactContainer$"+ho,Md="__reactEvents$"+ho,fM="__reactListeners$"+ho,pM="__reactHandles$"+ho;function Ir(t){var e=t[oi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pi]||n[oi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lm(t);t!==null;){if(n=t[oi])return n;t=lm(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){return t=t[oi]||t[Pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(he(33))}function ru(t){return t[Pa]||null}var wd=[],Ps=-1;function fr(t){return{current:t}}function ft(t){0>Ps||(t.current=wd[Ps],wd[Ps]=null,Ps--)}function ct(t,e){Ps++,wd[Ps]=t.current,t.current=e}var cr={},tn=fr(cr),gn=fr(!1),Br=cr;function Js(t,e){var n=t.type.contextTypes;if(!n)return cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function vn(t){return t=t.childContextTypes,t!=null}function Ac(){ft(gn),ft(tn)}function cm(t,e,n){if(tn.current!==cr)throw Error(he(168));ct(tn,e),ct(gn,n)}function n_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(he(108,Jy(t)||"Unknown",r));return wt({},n,i)}function bc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Br=tn.current,ct(tn,t),ct(gn,gn.current),!0}function um(t,e,n){var i=t.stateNode;if(!i)throw Error(he(169));n?(t=n_(t,e,Br),i.__reactInternalMemoizedMergedChildContext=t,ft(gn),ft(tn),ct(tn,t)):ft(gn),ct(gn,n)}var Mi=null,su=!1,ju=!1;function i_(t){Mi===null?Mi=[t]:Mi.push(t)}function mM(t){su=!0,i_(t)}function pr(){if(!ju&&Mi!==null){ju=!0;var t=0,e=it;try{var n=Mi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,su=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),Cv(xf,pr),r}finally{it=e,ju=!1}}return null}var Ls=[],Ns=0,Cc=null,Rc=0,Dn=[],Un=0,Hr=null,wi=1,Ei="";function br(t,e){Ls[Ns++]=Rc,Ls[Ns++]=Cc,Cc=t,Rc=e}function r_(t,e,n){Dn[Un++]=wi,Dn[Un++]=Ei,Dn[Un++]=Hr,Hr=t;var i=wi;t=Ei;var r=32-Qn(i)-1;i&=~(1<<r),n+=1;var s=32-Qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,wi=1<<32-Qn(e)+r|n<<r|i,Ei=s+t}else wi=1<<s|n<<r|i,Ei=t}function Cf(t){t.return!==null&&(br(t,1),r_(t,1,0))}function Rf(t){for(;t===Cc;)Cc=Ls[--Ns],Ls[Ns]=null,Rc=Ls[--Ns],Ls[Ns]=null;for(;t===Hr;)Hr=Dn[--Un],Dn[Un]=null,Ei=Dn[--Un],Dn[Un]=null,wi=Dn[--Un],Dn[Un]=null}var bn=null,Tn=null,vt=!1,Yn=null;function s_(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bn=t,Tn=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bn=t,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:wi,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bn=t,Tn=null,!0):!1;default:return!1}}function Ed(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Td(t){if(vt){var e=Tn;if(e){var n=e;if(!hm(t,e)){if(Ed(t))throw Error(he(418));e=tr(n.nextSibling);var i=bn;e&&hm(t,e)?s_(i,n):(t.flags=t.flags&-4097|2,vt=!1,bn=t)}}else{if(Ed(t))throw Error(he(418));t.flags=t.flags&-4097|2,vt=!1,bn=t}}}function dm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function dl(t){if(t!==bn)return!1;if(!vt)return dm(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yd(t.type,t.memoizedProps)),e&&(e=Tn)){if(Ed(t))throw o_(),Error(he(418));for(;e;)s_(t,e),e=tr(e.nextSibling)}if(dm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(he(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tn=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tn=null}}else Tn=bn?tr(t.stateNode.nextSibling):null;return!0}function o_(){for(var t=Tn;t;)t=tr(t.nextSibling)}function Qs(){Tn=bn=null,vt=!1}function Pf(t){Yn===null?Yn=[t]:Yn.push(t)}var gM=Ui.ReactCurrentBatchConfig;function Po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(he(309));var i=n.stateNode}if(!i)throw Error(he(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(he(284));if(!n._owner)throw Error(he(290,t))}return t}function fl(t,e){throw t=Object.prototype.toString.call(e),Error(he(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fm(t){var e=t._init;return e(t._payload)}function a_(t){function e(f,x){if(t){var _=f.deletions;_===null?(f.deletions=[x],f.flags|=16):_.push(x)}}function n(f,x){if(!t)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function i(f,x){for(f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function r(f,x){return f=sr(f,x),f.index=0,f.sibling=null,f}function s(f,x,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<x?(f.flags|=2,x):_):(f.flags|=2,x)):(f.flags|=1048576,x)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,x,_,y){return x===null||x.tag!==6?(x=Qu(_,f.mode,y),x.return=f,x):(x=r(x,_),x.return=f,x)}function l(f,x,_,y){var C=_.type;return C===Ts?u(f,x,_.props.children,y,_.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ji&&fm(C)===x.type)?(y=r(x,_.props),y.ref=Po(f,x,_),y.return=f,y):(y=pc(_.type,_.key,_.props,null,f.mode,y),y.ref=Po(f,x,_),y.return=f,y)}function c(f,x,_,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==_.containerInfo||x.stateNode.implementation!==_.implementation?(x=eh(_,f.mode,y),x.return=f,x):(x=r(x,_.children||[]),x.return=f,x)}function u(f,x,_,y,C){return x===null||x.tag!==7?(x=kr(_,f.mode,y,C),x.return=f,x):(x=r(x,_),x.return=f,x)}function h(f,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Qu(""+x,f.mode,_),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case nl:return _=pc(x.type,x.key,x.props,null,f.mode,_),_.ref=Po(f,null,x),_.return=f,_;case Es:return x=eh(x,f.mode,_),x.return=f,x;case ji:var y=x._init;return h(f,y(x._payload),_)}if(Qo(x)||To(x))return x=kr(x,f.mode,_,null),x.return=f,x;fl(f,x)}return null}function d(f,x,_,y){var C=x!==null?x.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:a(f,x,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case nl:return _.key===C?l(f,x,_,y):null;case Es:return _.key===C?c(f,x,_,y):null;case ji:return C=_._init,d(f,x,C(_._payload),y)}if(Qo(_)||To(_))return C!==null?null:u(f,x,_,y,null);fl(f,_)}return null}function p(f,x,_,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(_)||null,a(x,f,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case nl:return f=f.get(y.key===null?_:y.key)||null,l(x,f,y,C);case Es:return f=f.get(y.key===null?_:y.key)||null,c(x,f,y,C);case ji:var T=y._init;return p(f,x,_,T(y._payload),C)}if(Qo(y)||To(y))return f=f.get(_)||null,u(x,f,y,C,null);fl(x,y)}return null}function m(f,x,_,y){for(var C=null,T=null,A=x,L=x=0,E=null;A!==null&&L<_.length;L++){A.index>L?(E=A,A=null):E=A.sibling;var M=d(f,A,_[L],y);if(M===null){A===null&&(A=E);break}t&&A&&M.alternate===null&&e(f,A),x=s(M,x,L),T===null?C=M:T.sibling=M,T=M,A=E}if(L===_.length)return n(f,A),vt&&br(f,L),C;if(A===null){for(;L<_.length;L++)A=h(f,_[L],y),A!==null&&(x=s(A,x,L),T===null?C=A:T.sibling=A,T=A);return vt&&br(f,L),C}for(A=i(f,A);L<_.length;L++)E=p(A,f,L,_[L],y),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?L:E.key),x=s(E,x,L),T===null?C=E:T.sibling=E,T=E);return t&&A.forEach(function(U){return e(f,U)}),vt&&br(f,L),C}function v(f,x,_,y){var C=To(_);if(typeof C!="function")throw Error(he(150));if(_=C.call(_),_==null)throw Error(he(151));for(var T=C=null,A=x,L=x=0,E=null,M=_.next();A!==null&&!M.done;L++,M=_.next()){A.index>L?(E=A,A=null):E=A.sibling;var U=d(f,A,M.value,y);if(U===null){A===null&&(A=E);break}t&&A&&U.alternate===null&&e(f,A),x=s(U,x,L),T===null?C=U:T.sibling=U,T=U,A=E}if(M.done)return n(f,A),vt&&br(f,L),C;if(A===null){for(;!M.done;L++,M=_.next())M=h(f,M.value,y),M!==null&&(x=s(M,x,L),T===null?C=M:T.sibling=M,T=M);return vt&&br(f,L),C}for(A=i(f,A);!M.done;L++,M=_.next())M=p(A,f,L,M.value,y),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?L:M.key),x=s(M,x,L),T===null?C=M:T.sibling=M,T=M);return t&&A.forEach(function(B){return e(f,B)}),vt&&br(f,L),C}function g(f,x,_,y){if(typeof _=="object"&&_!==null&&_.type===Ts&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case nl:e:{for(var C=_.key,T=x;T!==null;){if(T.key===C){if(C=_.type,C===Ts){if(T.tag===7){n(f,T.sibling),x=r(T,_.props.children),x.return=f,f=x;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ji&&fm(C)===T.type){n(f,T.sibling),x=r(T,_.props),x.ref=Po(f,T,_),x.return=f,f=x;break e}n(f,T);break}else e(f,T);T=T.sibling}_.type===Ts?(x=kr(_.props.children,f.mode,y,_.key),x.return=f,f=x):(y=pc(_.type,_.key,_.props,null,f.mode,y),y.ref=Po(f,x,_),y.return=f,f=y)}return o(f);case Es:e:{for(T=_.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===_.containerInfo&&x.stateNode.implementation===_.implementation){n(f,x.sibling),x=r(x,_.children||[]),x.return=f,f=x;break e}else{n(f,x);break}else e(f,x);x=x.sibling}x=eh(_,f.mode,y),x.return=f,f=x}return o(f);case ji:return T=_._init,g(f,x,T(_._payload),y)}if(Qo(_))return m(f,x,_,y);if(To(_))return v(f,x,_,y);fl(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,x!==null&&x.tag===6?(n(f,x.sibling),x=r(x,_),x.return=f,f=x):(n(f,x),x=Qu(_,f.mode,y),x.return=f,f=x),o(f)):n(f,x)}return g}var eo=a_(!0),l_=a_(!1),Pc=fr(null),Lc=null,Is=null,Lf=null;function Nf(){Lf=Is=Lc=null}function If(t){var e=Pc.current;ft(Pc),t._currentValue=e}function Ad(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Vs(t,e){Lc=t,Lf=Is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pn=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(Lf!==t)if(t={context:t,memoizedValue:e,next:null},Is===null){if(Lc===null)throw Error(he(308));Is=t,Lc.dependencies={lanes:0,firstContext:t}}else Is=Is.next=t;return e}var Dr=null;function Df(t){Dr===null?Dr=[t]:Dr.push(t)}function c_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Df(e)):(n.next=r.next,r.next=n),e.interleaved=n,Li(t,i)}function Li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xi=!1;function Uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function u_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Li(t,n)}return r=i.interleaved,r===null?(e.next=e,Df(i)):(e.next=r.next,r.next=e),i.interleaved=e,Li(t,n)}function lc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,yf(t,n)}}function pm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nc(t,e,n,i){var r=t.updateQueue;Xi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,v=a;switch(d=e,p=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){h=m.call(p,h,d);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,d=typeof m=="function"?m.call(p,h,d):m,d==null)break e;h=wt({},h,d);break e;case 2:Xi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Gr|=o,t.lanes=o,t.memoizedState=h}}function mm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(he(191,r));r.call(i)}}}var qa={},ci=fr(qa),La=fr(qa),Na=fr(qa);function Ur(t){if(t===qa)throw Error(he(174));return t}function Ff(t,e){switch(ct(Na,e),ct(La,t),ct(ci,qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:od(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=od(e,t)}ft(ci),ct(ci,e)}function to(){ft(ci),ft(La),ft(Na)}function h_(t){Ur(Na.current);var e=Ur(ci.current),n=od(e,t.type);e!==n&&(ct(La,t),ct(ci,n))}function Of(t){La.current===t&&(ft(ci),ft(La))}var yt=fr(0);function Ic(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xu=[];function kf(){for(var t=0;t<Xu.length;t++)Xu[t]._workInProgressVersionPrimary=null;Xu.length=0}var cc=Ui.ReactCurrentDispatcher,qu=Ui.ReactCurrentBatchConfig,Vr=0,Mt=null,Rt=null,Bt=null,Dc=!1,ca=!1,Ia=0,vM=0;function qt(){throw Error(he(321))}function zf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ni(t[n],e[n]))return!1;return!0}function Bf(t,e,n,i,r,s){if(Vr=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cc.current=t===null||t.memoizedState===null?SM:MM,t=n(i,r),ca){s=0;do{if(ca=!1,Ia=0,25<=s)throw Error(he(301));s+=1,Bt=Rt=null,e.updateQueue=null,cc.current=wM,t=n(i,r)}while(ca)}if(cc.current=Uc,e=Rt!==null&&Rt.next!==null,Vr=0,Bt=Rt=Mt=null,Dc=!1,e)throw Error(he(300));return t}function Hf(){var t=Ia!==0;return Ia=0,t}function ri(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?Mt.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function Hn(){if(Rt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=Bt===null?Mt.memoizedState:Bt.next;if(e!==null)Bt=e,Rt=t;else{if(t===null)throw Error(he(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Bt===null?Mt.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function Da(t,e){return typeof e=="function"?e(t):e}function Yu(t){var e=Hn(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=Rt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Vr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Mt.lanes|=u,Gr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ni(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,Gr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zu(t){var e=Hn(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ni(s,e.memoizedState)||(pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function d_(){}function f_(t,e){var n=Mt,i=Hn(),r=e(),s=!ni(i.memoizedState,r);if(s&&(i.memoizedState=r,pn=!0),i=i.queue,Vf(g_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,Ua(9,m_.bind(null,n,i,r,e),void 0,null),Ht===null)throw Error(he(349));Vr&30||p_(n,e,r)}return r}function p_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function m_(t,e,n,i){e.value=n,e.getSnapshot=i,v_(e)&&__(t)}function g_(t,e,n){return n(function(){v_(e)&&__(t)})}function v_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ni(t,n)}catch{return!0}}function __(t){var e=Li(t,1);e!==null&&ei(e,t,1,-1)}function gm(t){var e=ri();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:t},e.queue=t,t=t.dispatch=yM.bind(null,Mt,t),[e.memoizedState,t]}function Ua(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function x_(){return Hn().memoizedState}function uc(t,e,n,i){var r=ri();Mt.flags|=t,r.memoizedState=Ua(1|e,n,void 0,i===void 0?null:i)}function ou(t,e,n,i){var r=Hn();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var o=Rt.memoizedState;if(s=o.destroy,i!==null&&zf(i,o.deps)){r.memoizedState=Ua(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=Ua(1|e,n,s,i)}function vm(t,e){return uc(8390656,8,t,e)}function Vf(t,e){return ou(2048,8,t,e)}function y_(t,e){return ou(4,2,t,e)}function S_(t,e){return ou(4,4,t,e)}function M_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function w_(t,e,n){return n=n!=null?n.concat([t]):null,ou(4,4,M_.bind(null,e,t),n)}function Gf(){}function E_(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function T_(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function A_(t,e,n){return Vr&21?(ni(n,e)||(n=Lv(),Mt.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pn=!0),t.memoizedState=n)}function _M(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=qu.transition;qu.transition={};try{t(!1),e()}finally{it=n,qu.transition=i}}function b_(){return Hn().memoizedState}function xM(t,e,n){var i=rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},C_(t))R_(e,n);else if(n=c_(t,e,n,i),n!==null){var r=an();ei(n,t,i,r),P_(n,e,i)}}function yM(t,e,n){var i=rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(C_(t))R_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ni(a,o)){var l=e.interleaved;l===null?(r.next=r,Df(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=c_(t,e,r,i),n!==null&&(r=an(),ei(n,t,i,r),P_(n,e,i))}}function C_(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function R_(t,e){ca=Dc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function P_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,yf(t,n)}}var Uc={readContext:Bn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},SM={readContext:Bn,useCallback:function(t,e){return ri().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:vm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,uc(4194308,4,M_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return uc(4194308,4,t,e)},useInsertionEffect:function(t,e){return uc(4,2,t,e)},useMemo:function(t,e){var n=ri();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ri();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=xM.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=ri();return t={current:t},e.memoizedState=t},useState:gm,useDebugValue:Gf,useDeferredValue:function(t){return ri().memoizedState=t},useTransition:function(){var t=gm(!1),e=t[0];return t=_M.bind(null,t[1]),ri().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=ri();if(vt){if(n===void 0)throw Error(he(407));n=n()}else{if(n=e(),Ht===null)throw Error(he(349));Vr&30||p_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,vm(g_.bind(null,i,s,t),[t]),i.flags|=2048,Ua(9,m_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ri(),e=Ht.identifierPrefix;if(vt){var n=Ei,i=wi;n=(i&~(1<<32-Qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},MM={readContext:Bn,useCallback:E_,useContext:Bn,useEffect:Vf,useImperativeHandle:w_,useInsertionEffect:y_,useLayoutEffect:S_,useMemo:T_,useReducer:Yu,useRef:x_,useState:function(){return Yu(Da)},useDebugValue:Gf,useDeferredValue:function(t){var e=Hn();return A_(e,Rt.memoizedState,t)},useTransition:function(){var t=Yu(Da)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:d_,useSyncExternalStore:f_,useId:b_,unstable_isNewReconciler:!1},wM={readContext:Bn,useCallback:E_,useContext:Bn,useEffect:Vf,useImperativeHandle:w_,useInsertionEffect:y_,useLayoutEffect:S_,useMemo:T_,useReducer:Zu,useRef:x_,useState:function(){return Zu(Da)},useDebugValue:Gf,useDeferredValue:function(t){var e=Hn();return Rt===null?e.memoizedState=t:A_(e,Rt.memoizedState,t)},useTransition:function(){var t=Zu(Da)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:d_,useSyncExternalStore:f_,useId:b_,unstable_isNewReconciler:!1};function Xn(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var au={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=rr(t),s=Ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(ei(e,t,r,i),lc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=rr(t),s=Ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(ei(e,t,r,i),lc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=rr(t),r=Ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=nr(t,r,i),e!==null&&(ei(e,t,i,n),lc(e,t,i))}};function _m(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ba(n,i)||!ba(r,s):!0}function L_(t,e,n){var i=!1,r=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bn(s):(r=vn(e)?Br:tn.current,i=e.contextTypes,s=(i=i!=null)?Js(t,r):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=au,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function xm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&au.enqueueReplaceState(e,e.state,null)}function Cd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Uf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Bn(s):(s=vn(e)?Br:tn.current,r.context=Js(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&au.enqueueReplaceState(r,r.state,null),Nc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function no(t,e){try{var n="",i=e;do n+=Ky(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ku(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var EM=typeof WeakMap=="function"?WeakMap:Map;function N_(t,e,n){n=Ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Oc||(Oc=!0,zd=i),Rd(t,e)},n}function I_(t,e,n){n=Ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Rd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rd(t,e),typeof i!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ym(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new EM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=kM.bind(null,t,e,n),e.then(t,t))}function Sm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ci(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var TM=Ui.ReactCurrentOwner,pn=!1;function on(t,e,n,i){e.child=t===null?l_(e,null,n,i):eo(e,t.child,n,i)}function wm(t,e,n,i,r){n=n.render;var s=e.ref;return Vs(e,r),i=Bf(t,e,n,i,s,r),n=Hf(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(vt&&n&&Cf(e),e.flags|=1,on(t,e,i,r),e.child)}function Em(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Kf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,D_(t,e,s,i,r)):(t=pc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ba,n(o,i)&&t.ref===e.ref)return Ni(t,e,r)}return e.flags|=1,t=sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function D_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ba(s,i)&&t.ref===e.ref)if(pn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(pn=!0);else return e.lanes=t.lanes,Ni(t,e,r)}return Pd(t,e,n,i,r)}function U_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(Us,wn),wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(Us,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ct(Us,wn),wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ct(Us,wn),wn|=i;return on(t,e,r,n),e.child}function F_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pd(t,e,n,i,r){var s=vn(n)?Br:tn.current;return s=Js(e,s),Vs(e,r),n=Bf(t,e,n,i,s,r),i=Hf(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(vt&&i&&Cf(e),e.flags|=1,on(t,e,n,r),e.child)}function Tm(t,e,n,i,r){if(vn(n)){var s=!0;bc(e)}else s=!1;if(Vs(e,r),e.stateNode===null)hc(t,e),L_(e,n,i),Cd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bn(c):(c=vn(n)?Br:tn.current,c=Js(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&xm(e,o,i,c),Xi=!1;var d=e.memoizedState;o.state=d,Nc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||gn.current||Xi?(typeof u=="function"&&(bd(e,n,u,i),l=e.memoizedState),(a=Xi||_m(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,u_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Xn(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=vn(n)?Br:tn.current,l=Js(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&xm(e,o,i,l),Xi=!1,d=e.memoizedState,o.state=d,Nc(e,i,o,r);var m=e.memoizedState;a!==h||d!==m||gn.current||Xi?(typeof p=="function"&&(bd(e,n,p,i),m=e.memoizedState),(c=Xi||_m(e,n,c,i,d,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Ld(t,e,n,i,s,r)}function Ld(t,e,n,i,r,s){F_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&um(e,n,!1),Ni(t,e,s);i=e.stateNode,TM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=eo(e,t.child,null,s),e.child=eo(e,null,a,s)):on(t,e,a,s),e.memoizedState=i.state,r&&um(e,n,!0),e.child}function O_(t){var e=t.stateNode;e.pendingContext?cm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cm(t,e.context,!1),Ff(t,e.containerInfo)}function Am(t,e,n,i,r){return Qs(),Pf(r),e.flags|=256,on(t,e,n,i),e.child}var Nd={dehydrated:null,treeContext:null,retryLane:0};function Id(t){return{baseLanes:t,cachePool:null,transitions:null}}function k_(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ct(yt,r&1),t===null)return Td(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=uu(o,i,0,null),t=kr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Id(n),e.memoizedState=Nd,t):Wf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return AM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=sr(a,s):(s=kr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Id(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nd,i}return s=t.child,t=s.sibling,i=sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Wf(t,e){return e=uu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pl(t,e,n,i){return i!==null&&Pf(i),eo(e,t.child,null,n),t=Wf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function AM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ku(Error(he(422))),pl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=uu({mode:"visible",children:i.children},r,0,null),s=kr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&eo(e,t.child,null,o),e.child.memoizedState=Id(o),e.memoizedState=Nd,s);if(!(e.mode&1))return pl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(he(419)),i=Ku(s,i,void 0),pl(t,e,o,i)}if(a=(o&t.childLanes)!==0,pn||a){if(i=Ht,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Li(t,r),ei(i,t,r,-1))}return Zf(),i=Ku(Error(he(421))),pl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Tn=tr(r.nextSibling),bn=e,vt=!0,Yn=null,t!==null&&(Dn[Un++]=wi,Dn[Un++]=Ei,Dn[Un++]=Hr,wi=t.id,Ei=t.overflow,Hr=e),e=Wf(e,i.children),e.flags|=4096,e)}function bm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ad(t.return,e,n)}function Ju(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function z_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(on(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bm(t,n,e);else if(t.tag===19)bm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ct(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ic(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ju(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ic(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ju(e,!0,n,null,s);break;case"together":Ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ni(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(he(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bM(t,e,n){switch(e.tag){case 3:O_(e),Qs();break;case 5:h_(e);break;case 1:vn(e.type)&&bc(e);break;case 4:Ff(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(Pc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?k_(t,e,n):(ct(yt,yt.current&1),t=Ni(t,e,n),t!==null?t.sibling:null);ct(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return z_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,U_(t,e,n)}return Ni(t,e,n)}var B_,Dd,H_,V_;B_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dd=function(){};H_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ur(ci.current);var s=null;switch(n){case"input":r=nd(t,r),i=nd(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=sd(t,r),i=sd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Tc)}ad(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ya.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ya.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};V_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Lo(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function CM(t,e,n){var i=e.pendingProps;switch(Rf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return vn(e.type)&&Ac(),Yt(e),null;case 3:return i=e.stateNode,to(),ft(gn),ft(tn),kf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(dl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(Vd(Yn),Yn=null))),Dd(t,e),Yt(e),null;case 5:Of(e);var r=Ur(Na.current);if(n=e.type,t!==null&&e.stateNode!=null)H_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(he(166));return Yt(e),null}if(t=Ur(ci.current),dl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[oi]=e,i[Pa]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<ta.length;r++)ut(ta[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Fp(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":kp(i,s),ut("invalid",i)}ad(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&hl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&hl(i.textContent,a,t),r=["children",""+a]):ya.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(n){case"input":il(i),Op(i,s,!0);break;case"textarea":il(i),zp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Tc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[oi]=e,t[Pa]=i,B_(t,e,!1,!1),e.stateNode=t;e:{switch(o=ld(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<ta.length;r++)ut(ta[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":Fp(t,i),r=nd(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":kp(t,i),r=sd(t,i),ut("invalid",t);break;default:r=i}ad(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?xv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Sa(t,l):typeof l=="number"&&Sa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ya.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&pf(t,s,l,o))}switch(n){case"input":il(t),Op(t,i,!1);break;case"textarea":il(t),zp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ks(t,!!i.multiple,s,!1):i.defaultValue!=null&&ks(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Tc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)V_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(he(166));if(n=Ur(Na.current),Ur(ci.current),dl(e)){if(i=e.stateNode,n=e.memoizedProps,i[oi]=e,(s=i.nodeValue!==n)&&(t=bn,t!==null))switch(t.tag){case 3:hl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&hl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[oi]=e,e.stateNode=i}return Yt(e),null;case 13:if(ft(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&Tn!==null&&e.mode&1&&!(e.flags&128))o_(),Qs(),e.flags|=98560,s=!1;else if(s=dl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(he(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(he(317));s[oi]=e}else Qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else Yn!==null&&(Vd(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Lt===0&&(Lt=3):Zf())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return to(),Dd(t,e),t===null&&Ca(e.stateNode.containerInfo),Yt(e),null;case 10:return If(e.type._context),Yt(e),null;case 17:return vn(e.type)&&Ac(),Yt(e),null;case 19:if(ft(yt),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Lo(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ic(t),o!==null){for(e.flags|=128,Lo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>io&&(e.flags|=128,i=!0,Lo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ic(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Lo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return Yt(e),null}else 2*At()-s.renderingStartTime>io&&n!==1073741824&&(e.flags|=128,i=!0,Lo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=yt.current,ct(yt,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return Yf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(he(156,e.tag))}function RM(t,e){switch(Rf(e),e.tag){case 1:return vn(e.type)&&Ac(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return to(),ft(gn),ft(tn),kf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Of(e),null;case 13:if(ft(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(he(340));Qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(yt),null;case 4:return to(),null;case 10:return If(e.type._context),null;case 22:case 23:return Yf(),null;case 24:return null;default:return null}}var ml=!1,Qt=!1,PM=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function Ud(t,e,n){try{n()}catch(i){Et(t,e,i)}}var Cm=!1;function LM(t,e){if(_d=Mc,t=Xv(),bf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(xd={focusedElem:t,selectionRange:n},Mc=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,g=m.memoizedState,f=e.stateNode,x=f.getSnapshotBeforeUpdate(e.elementType===e.type?v:Xn(e.type,v),g);f.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(he(163))}}catch(y){Et(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return m=Cm,Cm=!1,m}function ua(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ud(e,n,s)}r=r.next}while(r!==i)}}function lu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Fd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function G_(t){var e=t.alternate;e!==null&&(t.alternate=null,G_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[oi],delete e[Pa],delete e[Md],delete e[fM],delete e[pM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function W_(t){return t.tag===5||t.tag===3||t.tag===4}function Rm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||W_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Od(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Tc));else if(i!==4&&(t=t.child,t!==null))for(Od(t,e,n),t=t.sibling;t!==null;)Od(t,e,n),t=t.sibling}function kd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(kd(t,e,n),t=t.sibling;t!==null;)kd(t,e,n),t=t.sibling}var Vt=null,qn=!1;function Oi(t,e,n){for(n=n.child;n!==null;)$_(t,e,n),n=n.sibling}function $_(t,e,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(eu,n)}catch{}switch(n.tag){case 5:Qt||Ds(n,e);case 6:var i=Vt,r=qn;Vt=null,Oi(t,e,n),Vt=i,qn=r,Vt!==null&&(qn?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(qn?(t=Vt,n=n.stateNode,t.nodeType===8?$u(t.parentNode,n):t.nodeType===1&&$u(t,n),Ta(t)):$u(Vt,n.stateNode));break;case 4:i=Vt,r=qn,Vt=n.stateNode.containerInfo,qn=!0,Oi(t,e,n),Vt=i,qn=r;break;case 0:case 11:case 14:case 15:if(!Qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ud(n,e,o),r=r.next}while(r!==i)}Oi(t,e,n);break;case 1:if(!Qt&&(Ds(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Et(n,e,a)}Oi(t,e,n);break;case 21:Oi(t,e,n);break;case 22:n.mode&1?(Qt=(i=Qt)||n.memoizedState!==null,Oi(t,e,n),Qt=i):Oi(t,e,n);break;default:Oi(t,e,n)}}function Pm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new PM),e.forEach(function(i){var r=BM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Gn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,qn=!1;break e;case 3:Vt=a.stateNode.containerInfo,qn=!0;break e;case 4:Vt=a.stateNode.containerInfo,qn=!0;break e}a=a.return}if(Vt===null)throw Error(he(160));$_(s,o,r),Vt=null,qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Et(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)j_(e,t),e=e.sibling}function j_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(e,t),ii(t),i&4){try{ua(3,t,t.return),lu(3,t)}catch(v){Et(t,t.return,v)}try{ua(5,t,t.return)}catch(v){Et(t,t.return,v)}}break;case 1:Gn(e,t),ii(t),i&512&&n!==null&&Ds(n,n.return);break;case 5:if(Gn(e,t),ii(t),i&512&&n!==null&&Ds(n,n.return),t.flags&32){var r=t.stateNode;try{Sa(r,"")}catch(v){Et(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&pv(r,s),ld(a,o);var c=ld(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?xv(r,h):u==="dangerouslySetInnerHTML"?vv(r,h):u==="children"?Sa(r,h):pf(r,u,h,c)}switch(a){case"input":id(r,s);break;case"textarea":mv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ks(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ks(r,!!s.multiple,s.defaultValue,!0):ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[Pa]=s}catch(v){Et(t,t.return,v)}}break;case 6:if(Gn(e,t),ii(t),i&4){if(t.stateNode===null)throw Error(he(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){Et(t,t.return,v)}}break;case 3:if(Gn(e,t),ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ta(e.containerInfo)}catch(v){Et(t,t.return,v)}break;case 4:Gn(e,t),ii(t);break;case 13:Gn(e,t),ii(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Xf=At())),i&4&&Pm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Qt=(c=Qt)||u,Gn(e,t),Qt=c):Gn(e,t),ii(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Ee=t,u=t.child;u!==null;){for(h=Ee=u;Ee!==null;){switch(d=Ee,p=d.child,d.tag){case 0:case 11:case 14:case 15:ua(4,d,d.return);break;case 1:Ds(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(v){Et(i,n,v)}}break;case 5:Ds(d,d.return);break;case 22:if(d.memoizedState!==null){Nm(h);continue}}p!==null?(p.return=d,Ee=p):Nm(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_v("display",o))}catch(v){Et(t,t.return,v)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){Et(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Gn(e,t),ii(t),i&4&&Pm(t);break;case 21:break;default:Gn(e,t),ii(t)}}function ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(W_(n)){var i=n;break e}n=n.return}throw Error(he(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Sa(r,""),i.flags&=-33);var s=Rm(t);kd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Rm(t);Od(t,a,o);break;default:throw Error(he(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function NM(t,e,n){Ee=t,X_(t)}function X_(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ml;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Qt;a=ml;var c=Qt;if(ml=o,(Qt=l)&&!c)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?Im(r):l!==null?(l.return=o,Ee=l):Im(r);for(;s!==null;)Ee=s,X_(s),s=s.sibling;Ee=r,ml=a,Qt=c}Lm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):Lm(t)}}function Lm(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qt||lu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Xn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Ta(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(he(163))}Qt||e.flags&512&&Fd(e)}catch(d){Et(e,e.return,d)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Nm(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Im(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{lu(4,e)}catch(l){Et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{Fd(e)}catch(l){Et(e,s,l)}break;case 5:var o=e.return;try{Fd(e)}catch(l){Et(e,o,l)}}}catch(l){Et(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var IM=Math.ceil,Fc=Ui.ReactCurrentDispatcher,$f=Ui.ReactCurrentOwner,zn=Ui.ReactCurrentBatchConfig,Qe=0,Ht=null,Ct=null,Wt=0,wn=0,Us=fr(0),Lt=0,Fa=null,Gr=0,cu=0,jf=0,ha=null,dn=null,Xf=0,io=1/0,Si=null,Oc=!1,zd=null,ir=null,gl=!1,Ki=null,kc=0,da=0,Bd=null,dc=-1,fc=0;function an(){return Qe&6?At():dc!==-1?dc:dc=At()}function rr(t){return t.mode&1?Qe&2&&Wt!==0?Wt&-Wt:gM.transition!==null?(fc===0&&(fc=Lv()),fc):(t=it,t!==0||(t=window.event,t=t===void 0?16:kv(t.type)),t):1}function ei(t,e,n,i){if(50<da)throw da=0,Bd=null,Error(he(185));$a(t,n,i),(!(Qe&2)||t!==Ht)&&(t===Ht&&(!(Qe&2)&&(cu|=n),Lt===4&&Yi(t,Wt)),_n(t,i),n===1&&Qe===0&&!(e.mode&1)&&(io=At()+500,su&&pr()))}function _n(t,e){var n=t.callbackNode;gS(t,e);var i=Sc(t,t===Ht?Wt:0);if(i===0)n!==null&&Vp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Vp(n),e===1)t.tag===0?mM(Dm.bind(null,t)):i_(Dm.bind(null,t)),hM(function(){!(Qe&6)&&pr()}),n=null;else{switch(Nv(i)){case 1:n=xf;break;case 4:n=Rv;break;case 16:n=yc;break;case 536870912:n=Pv;break;default:n=yc}n=tx(n,q_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function q_(t,e){if(dc=-1,fc=0,Qe&6)throw Error(he(327));var n=t.callbackNode;if(Gs()&&t.callbackNode!==n)return null;var i=Sc(t,t===Ht?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=zc(t,i);else{e=i;var r=Qe;Qe|=2;var s=Z_();(Ht!==t||Wt!==e)&&(Si=null,io=At()+500,Or(t,e));do try{FM();break}catch(a){Y_(t,a)}while(!0);Nf(),Fc.current=s,Qe=r,Ct!==null?e=0:(Ht=null,Wt=0,e=Lt)}if(e!==0){if(e===2&&(r=fd(t),r!==0&&(i=r,e=Hd(t,r))),e===1)throw n=Fa,Or(t,0),Yi(t,i),_n(t,At()),n;if(e===6)Yi(t,i);else{if(r=t.current.alternate,!(i&30)&&!DM(r)&&(e=zc(t,i),e===2&&(s=fd(t),s!==0&&(i=s,e=Hd(t,s))),e===1))throw n=Fa,Or(t,0),Yi(t,i),_n(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(he(345));case 2:Cr(t,dn,Si);break;case 3:if(Yi(t,i),(i&130023424)===i&&(e=Xf+500-At(),10<e)){if(Sc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Sd(Cr.bind(null,t,dn,Si),e);break}Cr(t,dn,Si);break;case 4:if(Yi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*IM(i/1960))-i,10<i){t.timeoutHandle=Sd(Cr.bind(null,t,dn,Si),i);break}Cr(t,dn,Si);break;case 5:Cr(t,dn,Si);break;default:throw Error(he(329))}}}return _n(t,At()),t.callbackNode===n?q_.bind(null,t):null}function Hd(t,e){var n=ha;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=zc(t,e),t!==2&&(e=dn,dn=n,e!==null&&Vd(e)),t}function Vd(t){dn===null?dn=t:dn.push.apply(dn,t)}function DM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ni(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yi(t,e){for(e&=~jf,e&=~cu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),i=1<<n;t[n]=-1,e&=~i}}function Dm(t){if(Qe&6)throw Error(he(327));Gs();var e=Sc(t,0);if(!(e&1))return _n(t,At()),null;var n=zc(t,e);if(t.tag!==0&&n===2){var i=fd(t);i!==0&&(e=i,n=Hd(t,i))}if(n===1)throw n=Fa,Or(t,0),Yi(t,e),_n(t,At()),n;if(n===6)throw Error(he(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cr(t,dn,Si),_n(t,At()),null}function qf(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(io=At()+500,su&&pr())}}function Wr(t){Ki!==null&&Ki.tag===0&&!(Qe&6)&&Gs();var e=Qe;Qe|=1;var n=zn.transition,i=it;try{if(zn.transition=null,it=1,t)return t()}finally{it=i,zn.transition=n,Qe=e,!(Qe&6)&&pr()}}function Yf(){wn=Us.current,ft(Us)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uM(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(Rf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ac();break;case 3:to(),ft(gn),ft(tn),kf();break;case 5:Of(i);break;case 4:to();break;case 13:ft(yt);break;case 19:ft(yt);break;case 10:If(i.type._context);break;case 22:case 23:Yf()}n=n.return}if(Ht=t,Ct=t=sr(t.current,null),Wt=wn=e,Lt=0,Fa=null,jf=cu=Gr=0,dn=ha=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Dr=null}return t}function Y_(t,e){do{var n=Ct;try{if(Nf(),cc.current=Uc,Dc){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Dc=!1}if(Vr=0,Bt=Rt=Mt=null,ca=!1,Ia=0,$f.current=null,n===null||n.return===null){Lt=1,Fa=e,Ct=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Sm(o);if(p!==null){p.flags&=-257,Mm(p,o,a,s,e),p.mode&1&&ym(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var v=new Set;v.add(l),e.updateQueue=v}else m.add(l);break e}else{if(!(e&1)){ym(s,c,e),Zf();break e}l=Error(he(426))}}else if(vt&&a.mode&1){var g=Sm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Mm(g,o,a,s,e),Pf(no(l,a));break e}}s=l=no(l,a),Lt!==4&&(Lt=2),ha===null?ha=[s]:ha.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=N_(s,l,e);pm(s,f);break e;case 1:a=l;var x=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ir===null||!ir.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=I_(s,a,e);pm(s,y);break e}}s=s.return}while(s!==null)}J_(n)}catch(C){e=C,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function Z_(){var t=Fc.current;return Fc.current=Uc,t===null?Uc:t}function Zf(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),Ht===null||!(Gr&268435455)&&!(cu&268435455)||Yi(Ht,Wt)}function zc(t,e){var n=Qe;Qe|=2;var i=Z_();(Ht!==t||Wt!==e)&&(Si=null,Or(t,e));do try{UM();break}catch(r){Y_(t,r)}while(!0);if(Nf(),Qe=n,Fc.current=i,Ct!==null)throw Error(he(261));return Ht=null,Wt=0,Lt}function UM(){for(;Ct!==null;)K_(Ct)}function FM(){for(;Ct!==null&&!aS();)K_(Ct)}function K_(t){var e=ex(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?J_(t):Ct=e,$f.current=null}function J_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=RM(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,Ct=null;return}}else if(n=CM(n,e,wn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Lt===0&&(Lt=5)}function Cr(t,e,n){var i=it,r=zn.transition;try{zn.transition=null,it=1,OM(t,e,n,i)}finally{zn.transition=r,it=i}return null}function OM(t,e,n,i){do Gs();while(Ki!==null);if(Qe&6)throw Error(he(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(he(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(vS(t,s),t===Ht&&(Ct=Ht=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gl||(gl=!0,tx(yc,function(){return Gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zn.transition,zn.transition=null;var o=it;it=1;var a=Qe;Qe|=4,$f.current=null,LM(t,n),j_(n,t),iM(xd),Mc=!!_d,xd=_d=null,t.current=n,NM(n),lS(),Qe=a,it=o,zn.transition=s}else t.current=n;if(gl&&(gl=!1,Ki=t,kc=r),s=t.pendingLanes,s===0&&(ir=null),hS(n.stateNode),_n(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Oc)throw Oc=!1,t=zd,zd=null,t;return kc&1&&t.tag!==0&&Gs(),s=t.pendingLanes,s&1?t===Bd?da++:(da=0,Bd=t):da=0,pr(),null}function Gs(){if(Ki!==null){var t=Nv(kc),e=zn.transition,n=it;try{if(zn.transition=null,it=16>t?16:t,Ki===null)var i=!1;else{if(t=Ki,Ki=null,kc=0,Qe&6)throw Error(he(331));var r=Qe;for(Qe|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ee=c;Ee!==null;){var u=Ee;switch(u.tag){case 0:case 11:case 15:ua(8,u,s)}var h=u.child;if(h!==null)h.return=u,Ee=h;else for(;Ee!==null;){u=Ee;var d=u.sibling,p=u.return;if(G_(u),u===c){Ee=null;break}if(d!==null){d.return=p,Ee=d;break}Ee=p}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var g=v.sibling;v.sibling=null,v=g}while(v!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ua(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Ee=f;break e}Ee=s.return}}var x=t.current;for(Ee=x;Ee!==null;){o=Ee;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Ee=_;else e:for(o=x;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:lu(9,a)}}catch(C){Et(a,a.return,C)}if(a===o){Ee=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ee=y;break e}Ee=a.return}}if(Qe=r,pr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(eu,t)}catch{}i=!0}return i}finally{it=n,zn.transition=e}}return!1}function Um(t,e,n){e=no(n,e),e=N_(t,e,1),t=nr(t,e,1),e=an(),t!==null&&($a(t,1,e),_n(t,e))}function Et(t,e,n){if(t.tag===3)Um(t,t,n);else for(;e!==null;){if(e.tag===3){Um(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ir===null||!ir.has(i))){t=no(n,t),t=I_(e,t,1),e=nr(e,t,1),t=an(),e!==null&&($a(e,1,t),_n(e,t));break}}e=e.return}}function kM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,Ht===t&&(Wt&n)===n&&(Lt===4||Lt===3&&(Wt&130023424)===Wt&&500>At()-Xf?Or(t,0):jf|=n),_n(t,e)}function Q_(t,e){e===0&&(t.mode&1?(e=ol,ol<<=1,!(ol&130023424)&&(ol=4194304)):e=1);var n=an();t=Li(t,e),t!==null&&($a(t,e,n),_n(t,n))}function zM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Q_(t,n)}function BM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(he(314))}i!==null&&i.delete(e),Q_(t,n)}var ex;ex=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pn=!1,bM(t,e,n);pn=!!(t.flags&131072)}else pn=!1,vt&&e.flags&1048576&&r_(e,Rc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;hc(t,e),t=e.pendingProps;var r=Js(e,tn.current);Vs(e,n),r=Bf(null,e,i,t,r,n);var s=Hf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,bc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Uf(e),r.updater=au,e.stateNode=r,r._reactInternals=e,Cd(e,i,t,n),e=Ld(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&Cf(e),on(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(hc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=VM(i),t=Xn(i,t),r){case 0:e=Pd(null,e,i,t,n);break e;case 1:e=Tm(null,e,i,t,n);break e;case 11:e=wm(null,e,i,t,n);break e;case 14:e=Em(null,e,i,Xn(i.type,t),n);break e}throw Error(he(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Pd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Tm(t,e,i,r,n);case 3:e:{if(O_(e),t===null)throw Error(he(387));i=e.pendingProps,s=e.memoizedState,r=s.element,u_(t,e),Nc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=no(Error(he(423)),e),e=Am(t,e,i,n,r);break e}else if(i!==r){r=no(Error(he(424)),e),e=Am(t,e,i,n,r);break e}else for(Tn=tr(e.stateNode.containerInfo.firstChild),bn=e,vt=!0,Yn=null,n=l_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qs(),i===r){e=Ni(t,e,n);break e}on(t,e,i,n)}e=e.child}return e;case 5:return h_(e),t===null&&Td(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,yd(i,r)?o=null:s!==null&&yd(i,s)&&(e.flags|=32),F_(t,e),on(t,e,o,n),e.child;case 6:return t===null&&Td(e),null;case 13:return k_(t,e,n);case 4:return Ff(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=eo(e,null,i,n):on(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),wm(t,e,i,r,n);case 7:return on(t,e,e.pendingProps,n),e.child;case 8:return on(t,e,e.pendingProps.children,n),e.child;case 12:return on(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ct(Pc,i._currentValue),i._currentValue=o,s!==null)if(ni(s.value,o)){if(s.children===r.children&&!gn.current){e=Ni(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ci(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ad(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(he(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ad(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}on(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Vs(e,n),r=Bn(r),i=i(r),e.flags|=1,on(t,e,i,n),e.child;case 14:return i=e.type,r=Xn(i,e.pendingProps),r=Xn(i.type,r),Em(t,e,i,r,n);case 15:return D_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),hc(t,e),e.tag=1,vn(i)?(t=!0,bc(e)):t=!1,Vs(e,n),L_(e,i,r),Cd(e,i,r,n),Ld(null,e,i,!0,t,n);case 19:return z_(t,e,n);case 22:return U_(t,e,n)}throw Error(he(156,e.tag))};function tx(t,e){return Cv(t,e)}function HM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,i){return new HM(t,e,n,i)}function Kf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function VM(t){if(typeof t=="function")return Kf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gf)return 11;if(t===vf)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function pc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Kf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ts:return kr(n.children,r,s,e);case mf:o=8,r|=8;break;case Jh:return t=kn(12,n,e,r|2),t.elementType=Jh,t.lanes=s,t;case Qh:return t=kn(13,n,e,r),t.elementType=Qh,t.lanes=s,t;case ed:return t=kn(19,n,e,r),t.elementType=ed,t.lanes=s,t;case hv:return uu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cv:o=10;break e;case uv:o=9;break e;case gf:o=11;break e;case vf:o=14;break e;case ji:o=16,i=null;break e}throw Error(he(130,t==null?t:typeof t,""))}return e=kn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function kr(t,e,n,i){return t=kn(7,t,i,e),t.lanes=n,t}function uu(t,e,n,i){return t=kn(22,t,i,e),t.elementType=hv,t.lanes=n,t.stateNode={isHidden:!1},t}function Qu(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function eh(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Du(0),this.expirationTimes=Du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Du(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Jf(t,e,n,i,r,s,o,a,l){return t=new GM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uf(s),t}function WM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function nx(t){if(!t)return cr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(he(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(he(171))}if(t.tag===1){var n=t.type;if(vn(n))return n_(t,n,e)}return e}function ix(t,e,n,i,r,s,o,a,l){return t=Jf(n,i,!0,t,r,s,o,a,l),t.context=nx(null),n=t.current,i=an(),r=rr(n),s=Ci(i,r),s.callback=e??null,nr(n,s,r),t.current.lanes=r,$a(t,r,i),_n(t,i),t}function hu(t,e,n,i){var r=e.current,s=an(),o=rr(r);return n=nx(n),e.context===null?e.context=n:e.pendingContext=n,e=Ci(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=nr(r,e,o),t!==null&&(ei(t,r,o,s),lc(t,r,o)),o}function Bc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qf(t,e){Fm(t,e),(t=t.alternate)&&Fm(t,e)}function $M(){return null}var rx=typeof reportError=="function"?reportError:function(t){console.error(t)};function ep(t){this._internalRoot=t}du.prototype.render=ep.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(he(409));hu(t,e,null,null)};du.prototype.unmount=ep.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){hu(null,t,null,null)}),e[Pi]=null}};function du(t){this._internalRoot=t}du.prototype.unstable_scheduleHydration=function(t){if(t){var e=Uv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qi.length&&e!==0&&e<qi[n].priority;n++);qi.splice(n,0,t),n===0&&Ov(t)}};function tp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Om(){}function jM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Bc(o);s.call(c)}}var o=ix(e,i,t,0,null,!1,!1,"",Om);return t._reactRootContainer=o,t[Pi]=o.current,Ca(t.nodeType===8?t.parentNode:t),Wr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Bc(l);a.call(c)}}var l=Jf(t,0,!1,null,null,!1,!1,"",Om);return t._reactRootContainer=l,t[Pi]=l.current,Ca(t.nodeType===8?t.parentNode:t),Wr(function(){hu(e,l,n,i)}),l}function pu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Bc(o);a.call(l)}}hu(e,o,t,r)}else o=jM(n,e,t,r,i);return Bc(o)}Iv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ea(e.pendingLanes);n!==0&&(yf(e,n|1),_n(e,At()),!(Qe&6)&&(io=At()+500,pr()))}break;case 13:Wr(function(){var i=Li(t,1);if(i!==null){var r=an();ei(i,t,1,r)}}),Qf(t,1)}};Sf=function(t){if(t.tag===13){var e=Li(t,134217728);if(e!==null){var n=an();ei(e,t,134217728,n)}Qf(t,134217728)}};Dv=function(t){if(t.tag===13){var e=rr(t),n=Li(t,e);if(n!==null){var i=an();ei(n,t,e,i)}Qf(t,e)}};Uv=function(){return it};Fv=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};ud=function(t,e,n){switch(e){case"input":if(id(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ru(i);if(!r)throw Error(he(90));fv(i),id(i,r)}}}break;case"textarea":mv(t,n);break;case"select":e=n.value,e!=null&&ks(t,!!n.multiple,e,!1)}};Mv=qf;wv=Wr;var XM={usingClientEntryPoint:!1,Events:[Xa,Rs,ru,yv,Sv,qf]},No={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qM={bundleType:No.bundleType,version:No.version,rendererPackageName:No.rendererPackageName,rendererConfig:No.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Av(t),t===null?null:t.stateNode},findFiberByHostInstance:No.findFiberByHostInstance||$M,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{eu=vl.inject(qM),li=vl}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XM;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tp(e))throw Error(he(200));return WM(t,e,null,n)};Rn.createRoot=function(t,e){if(!tp(t))throw Error(he(299));var n=!1,i="",r=rx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Jf(t,1,!1,null,null,n,!1,i,r),t[Pi]=e.current,Ca(t.nodeType===8?t.parentNode:t),new ep(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(he(188)):(t=Object.keys(t).join(","),Error(he(268,t)));return t=Av(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return Wr(t)};Rn.hydrate=function(t,e,n){if(!fu(e))throw Error(he(200));return pu(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!tp(t))throw Error(he(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=rx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ix(e,null,t,1,n??null,r,!1,s,o),t[Pi]=e.current,Ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new du(e)};Rn.render=function(t,e,n){if(!fu(e))throw Error(he(200));return pu(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!fu(t))throw Error(he(40));return t._reactRootContainer?(Wr(function(){pu(null,null,t,!1,function(){t._reactRootContainer=null,t[Pi]=null})}),!0):!1};Rn.unstable_batchedUpdates=qf;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!fu(n))throw Error(he(200));if(t==null||t._reactInternals===void 0)throw Error(he(38));return pu(t,e,n,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426";function sx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sx)}catch(t){console.error(t)}}sx(),sv.exports=Rn;var YM=sv.exports,ox,km=YM;ox=km.createRoot,km.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const np="164",ZM=0,zm=1,KM=2,ax=1,lx=2,yi=3,Vn=0,ln=1,En=2,or=0,Ws=1,Bm=2,Hm=3,Vm=4,JM=5,Lr=100,QM=101,e1=102,t1=103,n1=104,i1=200,r1=201,s1=202,o1=203,Gd=204,Wd=205,a1=206,l1=207,c1=208,u1=209,h1=210,d1=211,f1=212,p1=213,m1=214,g1=0,v1=1,_1=2,Hc=3,x1=4,y1=5,S1=6,M1=7,cx=0,w1=1,E1=2,ar=0,T1=1,A1=2,b1=3,ux=4,C1=5,R1=6,P1=7,hx=300,ro=301,so=302,$d=303,jd=304,mu=306,Ii=1e3,Fr=1001,Xd=1002,mn=1003,L1=1004,_l=1005,en=1006,th=1007,Ti=1008,ur=1009,N1=1010,I1=1011,dx=1012,fx=1013,oo=1014,Ai=1015,gu=1016,px=1017,mx=1018,Ya=1020,D1=35902,U1=1021,F1=1022,ai=1023,O1=1024,k1=1025,$s=1026,Oa=1027,gx=1028,vx=1029,z1=1030,_x=1031,xx=1033,nh=33776,ih=33777,rh=33778,sh=33779,Gm=35840,Wm=35841,$m=35842,jm=35843,Xm=36196,qm=37492,Ym=37496,Zm=37808,Km=37809,Jm=37810,Qm=37811,eg=37812,tg=37813,ng=37814,ig=37815,rg=37816,sg=37817,og=37818,ag=37819,lg=37820,cg=37821,oh=36492,ug=36494,hg=36495,B1=36283,dg=36284,fg=36285,pg=36286,H1=3200,V1=3201,yx=0,G1=1,Zn="",hn="srgb",mr="srgb-linear",ip="display-p3",vu="display-p3-linear",Vc="linear",ht="srgb",Gc="rec709",Wc="p3",es=7680,mg=519,W1=512,$1=513,j1=514,Sx=515,X1=516,q1=517,Y1=518,Z1=519,gg=35044,vg="300 es",bi=2e3,$c=2001;class fo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _g=1234567;const js=Math.PI/180,ka=180/Math.PI;function Zr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function Pt(t,e,n){return Math.max(e,Math.min(n,t))}function rp(t,e){return(t%e+e)%e}function K1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function J1(t,e,n){return t!==e?(n-t)/(e-t):0}function fa(t,e,n){return(1-n)*t+n*e}function Q1(t,e,n,i){return fa(t,e,1-Math.exp(-n*i))}function ew(t,e=1){return e-Math.abs(rp(t,e*2)-e)}function tw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function nw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function iw(t,e){return t+Math.floor(Math.random()*(e-t+1))}function rw(t,e){return t+Math.random()*(e-t)}function sw(t){return t*(.5-Math.random())}function ow(t){t!==void 0&&(_g=t);let e=_g+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function aw(t){return t*js}function lw(t){return t*ka}function cw(t){return(t&t-1)===0&&t!==0}function uw(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function hw(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function dw(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*h,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*m,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*m,a*c);break;case"ZYZ":t.set(l*m,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ms(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const ws={DEG2RAD:js,RAD2DEG:ka,generateUUID:Zr,clamp:Pt,euclideanModulo:rp,mapLinear:K1,inverseLerp:J1,lerp:fa,damp:Q1,pingpong:ew,smoothstep:tw,smootherstep:nw,randInt:iw,randFloat:rw,randFloatSpread:sw,seededRandom:ow,degToRad:aw,radToDeg:lw,isPowerOfTwo:cw,ceilPowerOfTwo:uw,floorPowerOfTwo:hw,setQuaternionFromProperEuler:dw,normalize:rn,denormalize:Ms};class de{constructor(e=0,n=0){de.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,n,i,r,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],m=i[8],v=r[0],g=r[3],f=r[6],x=r[1],_=r[4],y=r[7],C=r[2],T=r[5],A=r[8];return s[0]=o*v+a*x+l*C,s[3]=o*g+a*_+l*T,s[6]=o*f+a*y+l*A,s[1]=c*v+u*x+h*C,s[4]=c*g+u*_+h*T,s[7]=c*f+u*y+h*A,s[2]=d*v+p*x+m*C,s[5]=d*g+p*_+m*T,s[8]=d*f+p*y+m*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,m=n*h+i*d+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ah.makeScale(e,n)),this}rotate(e){return this.premultiply(ah.makeRotation(-e)),this}translate(e,n){return this.premultiply(ah.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ah=new Xe;function Mx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function za(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function fw(){const t=za("canvas");return t.style.display="block",t}const xg={};function pw(t){t in xg||(xg[t]=!0,console.warn(t))}const yg=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sg=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xl={[mr]:{transfer:Vc,primaries:Gc,toReference:t=>t,fromReference:t=>t},[hn]:{transfer:ht,primaries:Gc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[vu]:{transfer:Vc,primaries:Wc,toReference:t=>t.applyMatrix3(Sg),fromReference:t=>t.applyMatrix3(yg)},[ip]:{transfer:ht,primaries:Wc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Sg),fromReference:t=>t.applyMatrix3(yg).convertLinearToSRGB()}},mw=new Set([mr,vu]),rt={enabled:!0,_workingColorSpace:mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!mw.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=xl[e].toReference,r=xl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return xl[t].primaries},getTransfer:function(t){return t===Zn?Vc:xl[t].transfer}};function Xs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function lh(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ts;class gw{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ts===void 0&&(ts=za("canvas")),ts.width=e.width,ts.height=e.height;const i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ts}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=za("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Xs(n[i]/255)*255):n[i]=Xs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vw=0;class wx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vw++}),this.uuid=Zr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ch(r[o].image)):s.push(ch(r[o]))}else s=ch(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ch(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?gw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _w=0;class $t extends fo{constructor(e=$t.DEFAULT_IMAGE,n=$t.DEFAULT_MAPPING,i=Fr,r=Fr,s=en,o=Ti,a=ai,l=ur,c=$t.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_w++}),this.uuid=Zr(),this.name="",this.source=new wx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ii:e.x=e.x-Math.floor(e.x);break;case Fr:e.x=e.x<0?0:1;break;case Xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ii:e.y=e.y-Math.floor(e.y);break;case Fr:e.y=e.y<0?0:1;break;case Xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=hx;$t.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,n=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],m=l[9],v=l[2],g=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(p+1)/2,C=(f+1)/2,T=(u+d)/4,A=(h+v)/4,L=(m+g)/4;return _>y&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=A/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=L/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=L/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-m)*(g-m)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-v)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xw extends fo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new _t(0,0,e,n),this.scissorTest=!1,this.viewport=new _t(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new wx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends xw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ex extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yw extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Za{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],m=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=m,e[n+3]=v;return}if(h!==v||l!==d||c!==p||u!==m){let g=1-a;const f=l*d+c*p+u*m+h*v,x=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const C=Math.sqrt(_),T=Math.atan2(C,f*x);g=Math.sin(g*T)/C,a=Math.sin(a*T)/C}const y=a*x;if(l=l*g+d*y,c=c*g+p*y,u=u*g+m*y,h=h*g+v*y,g===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],m=s[o+3];return e[n]=a*m+u*h+l*p-c*d,e[n+1]=l*m+u*d+c*h-a*p,e[n+2]=c*m+u*p+a*d-l*h,e[n+3]=u*m-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h-d*p*m;break;case"YXZ":this._x=d*u*h+c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h+d*p*m;break;case"ZXY":this._x=d*u*h-c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h-d*p*m;break;case"ZYX":this._x=d*u*h-c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h+d*p*m;break;case"YZX":this._x=d*u*h+c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h-d*p*m;break;case"XZY":this._x=d*u*h-c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uh.copy(this).projectOnVector(e),this.sub(uh)}reflect(e){return this.sub(uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uh=new D,Mg=new Za;class gr{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(s,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yl.copy(i.boundingBox)),yl.applyMatrix4(e.matrixWorld),this.union(yl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),Sl.subVectors(this.max,Io),ns.subVectors(e.a,Io),is.subVectors(e.b,Io),rs.subVectors(e.c,Io),ki.subVectors(is,ns),zi.subVectors(rs,is),yr.subVectors(ns,rs);let n=[0,-ki.z,ki.y,0,-zi.z,zi.y,0,-yr.z,yr.y,ki.z,0,-ki.x,zi.z,0,-zi.x,yr.z,0,-yr.x,-ki.y,ki.x,0,-zi.y,zi.x,0,-yr.y,yr.x,0];return!hh(n,ns,is,rs,Sl)||(n=[1,0,0,0,1,0,0,0,1],!hh(n,ns,is,rs,Sl))?!1:(Ml.crossVectors(ki,zi),n=[Ml.x,Ml.y,Ml.z],hh(n,ns,is,rs,Sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new D,new D,new D,new D,new D,new D,new D,new D],Wn=new D,yl=new gr,ns=new D,is=new D,rs=new D,ki=new D,zi=new D,yr=new D,Io=new D,Sl=new D,Ml=new D,Sr=new D;function hh(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Sr.fromArray(t,s);const a=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),l=e.dot(Sr),c=n.dot(Sr),u=i.dot(Sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Sw=new gr,Do=new D,dh=new D;class po{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Sw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const n=Do.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Do,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(dh)),this.expandByPoint(Do.copy(e.center).sub(dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new D,fh=new D,wl=new D,Bi=new D,ph=new D,El=new D,mh=new D;class Tx{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){fh.copy(e).add(n).multiplyScalar(.5),wl.copy(n).sub(e).normalize(),Bi.copy(this.origin).sub(fh);const s=e.distanceTo(n)*.5,o=-this.direction.dot(wl),a=Bi.dot(this.direction),l=-Bi.dot(wl),c=Bi.lengthSq(),u=Math.abs(1-o*o);let h,d,p,m;if(u>0)if(h=o*l-a,d=o*a-l,m=s*u,h>=0)if(d>=-m)if(d<=m){const v=1/u;h*=v,d*=v,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(fh).addScaledVector(wl,d),p}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,r,s){ph.subVectors(n,e),El.subVectors(i,e),mh.crossVectors(ph,El);let o=this.direction.dot(mh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);const l=a*this.direction.dot(El.crossVectors(Bi,El));if(l<0)return null;const c=a*this.direction.dot(ph.cross(Bi));if(c<0||l+c>o)return null;const u=-a*Bi.dot(mh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,n,i,r,s,o,a,l,c,u,h,d,p,m,v,g){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,d,p,m,v,g)}set(e,n,i,r,s,o,a,l,c,u,h,d,p,m,v,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=m,f[11]=v,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,m=a*u,v=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+m*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=m+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,m=c*u,v=c*h;n[0]=d+v*a,n[4]=m*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-m,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,m=c*u,v=c*h;n[0]=d-v*a,n[4]=-o*h,n[8]=m+p*a,n[1]=p+m*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,m=a*u,v=a*h;n[0]=l*u,n[4]=m*c-p,n[8]=d*c+v,n[1]=l*h,n[5]=v*c+d,n[9]=p*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,m=a*l,v=a*c;n[0]=l*u,n[4]=v-d*h,n[8]=m*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+m,n[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,p=o*c,m=a*l,v=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+v,n[5]=o*u,n[9]=p*h-m,n[2]=m*h-p,n[6]=a*u,n[10]=v*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mw,e,ww)}lookAt(e,n,i){const r=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Hi.crossVectors(i,yn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Hi.crossVectors(i,yn)),Hi.normalize(),Tl.crossVectors(yn,Hi),r[0]=Hi.x,r[4]=Tl.x,r[8]=yn.x,r[1]=Hi.y,r[5]=Tl.y,r[9]=yn.y,r[2]=Hi.z,r[6]=Tl.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],m=i[2],v=i[6],g=i[10],f=i[14],x=i[3],_=i[7],y=i[11],C=i[15],T=r[0],A=r[4],L=r[8],E=r[12],M=r[1],U=r[5],B=r[9],I=r[13],z=r[2],j=r[6],J=r[10],Q=r[14],N=r[3],H=r[7],q=r[11],te=r[15];return s[0]=o*T+a*M+l*z+c*N,s[4]=o*A+a*U+l*j+c*H,s[8]=o*L+a*B+l*J+c*q,s[12]=o*E+a*I+l*Q+c*te,s[1]=u*T+h*M+d*z+p*N,s[5]=u*A+h*U+d*j+p*H,s[9]=u*L+h*B+d*J+p*q,s[13]=u*E+h*I+d*Q+p*te,s[2]=m*T+v*M+g*z+f*N,s[6]=m*A+v*U+g*j+f*H,s[10]=m*L+v*B+g*J+f*q,s[14]=m*E+v*I+g*Q+f*te,s[3]=x*T+_*M+y*z+C*N,s[7]=x*A+_*U+y*j+C*H,s[11]=x*L+_*B+y*J+C*q,s[15]=x*E+_*I+y*Q+C*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],m=e[3],v=e[7],g=e[11],f=e[15];return m*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*p-i*l*p)+v*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+g*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-n*l*h+n*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],m=e[12],v=e[13],g=e[14],f=e[15],x=h*g*c-v*d*c+v*l*p-a*g*p-h*l*f+a*d*f,_=m*d*c-u*g*c-m*l*p+o*g*p+u*l*f-o*d*f,y=u*v*c-m*h*c+m*a*p-o*v*p-u*a*f+o*h*f,C=m*h*l-u*v*l-m*a*d+o*v*d+u*a*g-o*h*g,T=n*x+i*_+r*y+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=x*A,e[1]=(v*d*s-h*g*s-v*r*p+i*g*p+h*r*f-i*d*f)*A,e[2]=(a*g*s-v*l*s+v*r*c-i*g*c-a*r*f+i*l*f)*A,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*p-i*l*p)*A,e[4]=_*A,e[5]=(u*g*s-m*d*s+m*r*p-n*g*p-u*r*f+n*d*f)*A,e[6]=(m*l*s-o*g*s-m*r*c+n*g*c+o*r*f-n*l*f)*A,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*A,e[8]=y*A,e[9]=(m*h*s-u*v*s-m*i*p+n*v*p+u*i*f-n*h*f)*A,e[10]=(o*v*s-m*a*s+m*i*c-n*v*c-o*i*f+n*a*f)*A,e[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*p-n*a*p)*A,e[12]=C*A,e[13]=(u*v*r-m*h*r+m*i*d-n*v*d-u*i*g+n*h*g)*A,e[14]=(m*a*r-o*v*r-m*i*l+n*v*l+o*i*g-n*a*g)*A,e[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,m=s*h,v=o*u,g=o*h,f=a*h,x=l*c,_=l*u,y=l*h,C=i.x,T=i.y,A=i.z;return r[0]=(1-(v+f))*C,r[1]=(p+y)*C,r[2]=(m-_)*C,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(d+f))*T,r[6]=(g+x)*T,r[7]=0,r[8]=(m+_)*A,r[9]=(g-x)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ss.set(r[0],r[1],r[2]).length();const o=ss.set(r[4],r[5],r[6]).length(),a=ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$n.copy(this);const c=1/s,u=1/o,h=1/a;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=h,$n.elements[9]*=h,$n.elements[10]*=h,n.setFromRotationMatrix($n),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=bi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,m;if(a===bi)p=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===$c)p=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=bi){const l=this.elements,c=1/(n-e),u=1/(i-r),h=1/(o-s),d=(n+e)*c,p=(i+r)*u;let m,v;if(a===bi)m=(o+s)*h,v=-2*h;else if(a===$c)m=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ss=new D,$n=new at,Mw=new D(0,0,0),ww=new D(1,1,1),Hi=new D,Tl=new D,yn=new D,wg=new at,Eg=new Za;class ui{constructor(e=0,n=0,i=0,r=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return wg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Eg.setFromEuler(this),this.setFromQuaternion(Eg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class Ax{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ew=0;const Tg=new D,os=new Za,gi=new at,Al=new D,Uo=new D,Tw=new D,Aw=new Za,Ag=new D(1,0,0),bg=new D(0,1,0),Cg=new D(0,0,1),Rg={type:"added"},bw={type:"removed"},as={type:"childadded",child:null},gh={type:"childremoved",child:null};class Nt extends fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ew++}),this.uuid=Zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new D,n=new ui,i=new Za,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Xe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ax,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Ag,e)}rotateY(e){return this.rotateOnAxis(bg,e)}rotateZ(e){return this.rotateOnAxis(Cg,e)}translateOnAxis(e,n){return Tg.copy(e).applyQuaternion(this.quaternion),this.position.add(Tg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ag,e)}translateY(e){return this.translateOnAxis(bg,e)}translateZ(e){return this.translateOnAxis(Cg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Al.copy(e):Al.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Uo,Al,this.up):gi.lookAt(Al,Uo,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),os.setFromRotationMatrix(gi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rg),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bw),gh.child=e,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rg),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,Tw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,Aw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new D(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new D,vi=new D,vh=new D,_i=new D,ls=new D,cs=new D,Pg=new D,_h=new D,xh=new D,yh=new D;class Kn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),vi.subVectors(i,n),vh.subVectors(e,n);const o=jn.dot(jn),a=jn.dot(vi),l=jn.dot(vh),c=vi.dot(vi),u=vi.dot(vh),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,m=(o*u-a*l)*d;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),vi.subVectors(e,n),jn.cross(vi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),jn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ls.subVectors(r,i),cs.subVectors(s,i),_h.subVectors(e,i);const l=ls.dot(_h),c=cs.dot(_h);if(l<=0&&c<=0)return n.copy(i);xh.subVectors(e,r);const u=ls.dot(xh),h=cs.dot(xh);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ls,o);yh.subVectors(e,s);const p=ls.dot(yh),m=cs.dot(yh);if(m>=0&&p<=m)return n.copy(s);const v=p*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(cs,a);const g=u*m-p*h;if(g<=0&&h-u>=0&&p-m>=0)return Pg.subVectors(s,r),a=(h-u)/(h-u+(p-m)),n.copy(r).addScaledVector(Pg,a);const f=1/(g+v+d);return o=v*f,a=d*f,n.copy(i).addScaledVector(ls,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},bl={h:0,s:0,l:0};function Sh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class He{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=rp(e,1),n=Pt(n,0,1),i=Pt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Sh(o,s,e+1/3),this.g=Sh(o,s,e),this.b=Sh(o,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,n=hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=hn){const i=bx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}copyLinearToSRGB(e){return this.r=lh(e.r),this.g=lh(e.g),this.b=lh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return rt.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Pt(Kt.r*255,0,255))*65536+Math.round(Pt(Kt.g*255,0,255))*256+Math.round(Pt(Kt.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.fromWorkingColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,s=Kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=rt.workingColorSpace){return rt.fromWorkingColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=hn){rt.fromWorkingColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+n,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Vi),e.getHSL(bl);const i=fa(Vi.h,bl.h,n),r=fa(Vi.s,bl.s,n),s=fa(Vi.l,bl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new He;He.NAMES=bx;let Cw=0;class Kr extends fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cw++}),this.uuid=Zr(),this.name="",this.type="Material",this.blending=Ws,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gd,this.blendDst=Wd,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Hc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==Vn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gd&&(i.blendSrc=this.blendSrc),this.blendDst!==Wd&&(i.blendDst=this.blendDst),this.blendEquation!==Lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _u extends Kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=cx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new D,Cl=new de;class ti{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=gg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return pw("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Cl.fromBufferAttribute(this,n),Cl.applyMatrix3(e),this.setXY(n,Cl.x,Cl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ms(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ms(n,this.array)),n}setX(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ms(n,this.array)),n}setY(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ms(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ms(n,this.array)),n}setW(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gg&&(e.usage=this.usage),e}}class Cx extends ti{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Rx extends ti{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class tt extends ti{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Rw=0;const In=new at,Mh=new Nt,us=new D,Sn=new gr,Fo=new gr,kt=new D;class Ut extends fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rw++}),this.uuid=Zr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mx(e)?Rx:Cx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return Mh.lookAt(e),Mh.updateMatrix(),this.applyMatrix4(Mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new po);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(Sn.min,Fo.min),Sn.expandByPoint(kt),kt.addVectors(Sn.max,Fo.max),Sn.expandByPoint(kt)):(Sn.expandByPoint(Fo.min),Sn.expandByPoint(Fo.max))}Sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(e,c),kt.add(us)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new D,l[L]=new D;const c=new D,u=new D,h=new D,d=new de,p=new de,m=new de,v=new D,g=new D;function f(L,E,M){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,M),d.fromBufferAttribute(s,L),p.fromBufferAttribute(s,E),m.fromBufferAttribute(s,M),u.sub(c),h.sub(c),p.sub(d),m.sub(d);const U=1/(p.x*m.y-m.x*p.y);isFinite(U)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(U),g.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(U),a[L].add(v),a[E].add(v),a[M].add(v),l[L].add(g),l[E].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let L=0,E=x.length;L<E;++L){const M=x[L],U=M.start,B=M.count;for(let I=U,z=U+B;I<z;I+=3)f(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const _=new D,y=new D,C=new D,T=new D;function A(L){C.fromBufferAttribute(r,L),T.copy(C);const E=a[L];_.copy(E),_.sub(C.multiplyScalar(C.dot(E))).normalize(),y.crossVectors(T,E);const U=y.dot(l[L])<0?-1:1;o.setXYZW(L,_.x,_.y,_.z,U)}for(let L=0,E=x.length;L<E;++L){const M=x[L],U=M.start,B=M.count;for(let I=U,z=U+B;I<z;I+=3)A(e.getX(I+0)),A(e.getX(I+1)),A(e.getX(I+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let f=0;f<u;f++)d[m++]=c[p++]}return new ti(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ut,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lg=new at,Mr=new Tx,Rl=new po,Ng=new D,hs=new D,ds=new D,fs=new D,wh=new D,Pl=new D,Ll=new de,Nl=new de,Il=new de,Ig=new D,Dg=new D,Ug=new D,Dl=new D,Ul=new D;class Je extends Nt{constructor(e=new Ut,n=new _u){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Pl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(wh.fromBufferAttribute(h,e),o?Pl.addScaledVector(wh,u):Pl.addScaledVector(wh.sub(n),u))}n.add(Pl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rl.copy(i.boundingSphere),Rl.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(Rl.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Rl,Ng)===null||Mr.origin.distanceToSquared(Ng)>(e.far-e.near)**2))&&(Lg.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(Lg),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const g=d[m],f=o[g.materialIndex],x=Math.max(g.start,p.start),_=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,C=_;y<C;y+=3){const T=a.getX(y),A=a.getX(y+1),L=a.getX(y+2);r=Fl(this,f,e,i,c,u,h,T,A,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let g=m,f=v;g<f;g+=3){const x=a.getX(g),_=a.getX(g+1),y=a.getX(g+2);r=Fl(this,o,e,i,c,u,h,x,_,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const g=d[m],f=o[g.materialIndex],x=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,C=_;y<C;y+=3){const T=y,A=y+1,L=y+2;r=Fl(this,f,e,i,c,u,h,T,A,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=m,f=v;g<f;g+=3){const x=g,_=g+1,y=g+2;r=Fl(this,o,e,i,c,u,h,x,_,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function Pw(t,e,n,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Vn,a),l===null)return null;Ul.copy(a),Ul.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ul);return c<n.near||c>n.far?null:{distance:c,point:Ul.clone(),object:t}}function Fl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,hs),t.getVertexPosition(l,ds),t.getVertexPosition(c,fs);const u=Pw(t,e,n,i,hs,ds,fs,Dl);if(u){r&&(Ll.fromBufferAttribute(r,a),Nl.fromBufferAttribute(r,l),Il.fromBufferAttribute(r,c),u.uv=Kn.getInterpolation(Dl,hs,ds,fs,Ll,Nl,Il,new de)),s&&(Ll.fromBufferAttribute(s,a),Nl.fromBufferAttribute(s,l),Il.fromBufferAttribute(s,c),u.uv1=Kn.getInterpolation(Dl,hs,ds,fs,Ll,Nl,Il,new de)),o&&(Ig.fromBufferAttribute(o,a),Dg.fromBufferAttribute(o,l),Ug.fromBufferAttribute(o,c),u.normal=Kn.getInterpolation(Dl,hs,ds,fs,Ig,Dg,Ug,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};Kn.getNormal(hs,ds,fs,h.normal),u.face=h}return u}class Jr extends Ut{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(h,2));function m(v,g,f,x,_,y,C,T,A,L,E){const M=y/A,U=C/L,B=y/2,I=C/2,z=T/2,j=A+1,J=L+1;let Q=0,N=0;const H=new D;for(let q=0;q<J;q++){const te=q*U-I;for(let Se=0;Se<j;Se++){const Ue=Se*M-B;H[v]=Ue*x,H[g]=te*_,H[f]=z,c.push(H.x,H.y,H.z),H[v]=0,H[g]=0,H[f]=T>0?1:-1,u.push(H.x,H.y,H.z),h.push(Se/A),h.push(1-q/L),Q+=1}}for(let q=0;q<L;q++)for(let te=0;te<A;te++){const Se=d+te+j*q,Ue=d+te+j*(q+1),V=d+(te+1)+j*(q+1),ie=d+(te+1)+j*q;l.push(Se,Ue,ie),l.push(Ue,V,ie),N+=6}a.addGroup(p,N,E),p+=N,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ao(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function sn(t){const e={};for(let n=0;n<t.length;n++){const i=ao(t[n]);for(const r in i)e[r]=i[r]}return e}function Lw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Px(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Nw={clone:ao,merge:sn};var Iw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Kr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iw,this.fragmentShader=Dw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=Lw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Lx extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new D,Fg=new de,Og=new de;class fn extends Lx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ka*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,n){return this.getViewBounds(e,Fg,Og),n.subVectors(Og,Fg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(js*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ps=-90,ms=1;class Uw extends Nt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(ps,ms,e,n);r.layers=this.layers,this.add(r);const s=new fn(ps,ms,e,n);s.layers=this.layers,this.add(s);const o=new fn(ps,ms,e,n);o.layers=this.layers,this.add(o);const a=new fn(ps,ms,e,n);a.layers=this.layers,this.add(a);const l=new fn(ps,ms,e,n);l.layers=this.layers,this.add(l);const c=new fn(ps,ms,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$c)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Nx extends $t{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:ro,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ix extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Nx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:en}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Jr(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:ao(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:or});s.uniforms.tEquirect.value=n;const o=new Je(r,s),a=n.minFilter;return n.minFilter===Ti&&(n.minFilter=en),new Uw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Eh=new D,Fw=new D,Ow=new Xe;class Rr{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Eh.subVectors(i,n).cross(Fw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Eh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ow.getNormalMatrix(e),r=this.coplanarPoint(Eh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new po,Ol=new D;class sp{constructor(e=new Rr,n=new Rr,i=new Rr,r=new Rr,s=new Rr,o=new Rr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=bi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],m=r[9],v=r[10],g=r[11],f=r[12],x=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,g-p,y-f).normalize(),i[1].setComponents(l+s,d+c,g+p,y+f).normalize(),i[2].setComponents(l+o,d+u,g+m,y+x).normalize(),i[3].setComponents(l-o,d-u,g-m,y-x).normalize(),i[4].setComponents(l-a,d-h,g-v,y-_).normalize(),n===bi)i[5].setComponents(l+a,d+h,g+v,y+_).normalize();else if(n===$c)i[5].setComponents(a,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ol.x=r.normal.x>0?e.max.x:e.min.x,Ol.y=r.normal.y>0?e.max.y:e.min.y,Ol.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ol)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function kw(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,a),h.count===-1&&d.length===0&&t.bufferSubData(c,0,u),d.length!==0){for(let p=0,m=d.length;p<m;p++){const v=d[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class hr extends Ut{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=n/l,p=[],m=[],v=[],g=[];for(let f=0;f<u;f++){const x=f*d-o;for(let _=0;_<c;_++){const y=_*h-s;m.push(y,-x,0),v.push(0,0,1),g.push(_/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const _=x+c*f,y=x+c*(f+1),C=x+1+c*(f+1),T=x+1+c*f;p.push(_,y,T),p.push(y,C,T)}this.setIndex(p),this.setAttribute("position",new tt(m,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.width,e.height,e.widthSegments,e.heightSegments)}}var zw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ww=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$w=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xw=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Yw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,aE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mE="gl_FragColor = linearToOutputTexel( gl_FragColor );",gE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,vE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_E=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ME=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,LE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,NE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,OE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,BE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$E=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,eT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,tT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,nT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_T=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,ST=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,MT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ET=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,CT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,NT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,DT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$T=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,jT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,XT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:zw,alphahash_pars_fragment:Bw,alphamap_fragment:Hw,alphamap_pars_fragment:Vw,alphatest_fragment:Gw,alphatest_pars_fragment:Ww,aomap_fragment:$w,aomap_pars_fragment:jw,batching_pars_vertex:Xw,batching_vertex:qw,begin_vertex:Yw,beginnormal_vertex:Zw,bsdfs:Kw,iridescence_fragment:Jw,bumpmap_pars_fragment:Qw,clipping_planes_fragment:eE,clipping_planes_pars_fragment:tE,clipping_planes_pars_vertex:nE,clipping_planes_vertex:iE,color_fragment:rE,color_pars_fragment:sE,color_pars_vertex:oE,color_vertex:aE,common:lE,cube_uv_reflection_fragment:cE,defaultnormal_vertex:uE,displacementmap_pars_vertex:hE,displacementmap_vertex:dE,emissivemap_fragment:fE,emissivemap_pars_fragment:pE,colorspace_fragment:mE,colorspace_pars_fragment:gE,envmap_fragment:vE,envmap_common_pars_fragment:_E,envmap_pars_fragment:xE,envmap_pars_vertex:yE,envmap_physical_pars_fragment:LE,envmap_vertex:SE,fog_vertex:ME,fog_pars_vertex:wE,fog_fragment:EE,fog_pars_fragment:TE,gradientmap_pars_fragment:AE,lightmap_pars_fragment:bE,lights_lambert_fragment:CE,lights_lambert_pars_fragment:RE,lights_pars_begin:PE,lights_toon_fragment:NE,lights_toon_pars_fragment:IE,lights_phong_fragment:DE,lights_phong_pars_fragment:UE,lights_physical_fragment:FE,lights_physical_pars_fragment:OE,lights_fragment_begin:kE,lights_fragment_maps:zE,lights_fragment_end:BE,logdepthbuf_fragment:HE,logdepthbuf_pars_fragment:VE,logdepthbuf_pars_vertex:GE,logdepthbuf_vertex:WE,map_fragment:$E,map_pars_fragment:jE,map_particle_fragment:XE,map_particle_pars_fragment:qE,metalnessmap_fragment:YE,metalnessmap_pars_fragment:ZE,morphinstance_vertex:KE,morphcolor_vertex:JE,morphnormal_vertex:QE,morphtarget_pars_vertex:eT,morphtarget_vertex:tT,normal_fragment_begin:nT,normal_fragment_maps:iT,normal_pars_fragment:rT,normal_pars_vertex:sT,normal_vertex:oT,normalmap_pars_fragment:aT,clearcoat_normal_fragment_begin:lT,clearcoat_normal_fragment_maps:cT,clearcoat_pars_fragment:uT,iridescence_pars_fragment:hT,opaque_fragment:dT,packing:fT,premultiplied_alpha_fragment:pT,project_vertex:mT,dithering_fragment:gT,dithering_pars_fragment:vT,roughnessmap_fragment:_T,roughnessmap_pars_fragment:xT,shadowmap_pars_fragment:yT,shadowmap_pars_vertex:ST,shadowmap_vertex:MT,shadowmask_pars_fragment:wT,skinbase_vertex:ET,skinning_pars_vertex:TT,skinning_vertex:AT,skinnormal_vertex:bT,specularmap_fragment:CT,specularmap_pars_fragment:RT,tonemapping_fragment:PT,tonemapping_pars_fragment:LT,transmission_fragment:NT,transmission_pars_fragment:IT,uv_pars_fragment:DT,uv_pars_vertex:UT,uv_vertex:FT,worldpos_vertex:OT,background_vert:kT,background_frag:zT,backgroundCube_vert:BT,backgroundCube_frag:HT,cube_vert:VT,cube_frag:GT,depth_vert:WT,depth_frag:$T,distanceRGBA_vert:jT,distanceRGBA_frag:XT,equirect_vert:qT,equirect_frag:YT,linedashed_vert:ZT,linedashed_frag:KT,meshbasic_vert:JT,meshbasic_frag:QT,meshlambert_vert:eA,meshlambert_frag:tA,meshmatcap_vert:nA,meshmatcap_frag:iA,meshnormal_vert:rA,meshnormal_frag:sA,meshphong_vert:oA,meshphong_frag:aA,meshphysical_vert:lA,meshphysical_frag:cA,meshtoon_vert:uA,meshtoon_frag:hA,points_vert:dA,points_frag:fA,shadow_vert:pA,shadow_frag:mA,sprite_vert:gA,sprite_frag:vA},xe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},si={basic:{uniforms:sn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:sn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new He(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:sn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:sn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:sn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new He(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:sn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:sn([xe.points,xe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:sn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:sn([xe.common,xe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:sn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:sn([xe.sprite,xe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:sn([xe.common,xe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:sn([xe.lights,xe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};si.physical={uniforms:sn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const kl={r:0,b:0,g:0},Er=new ui,_A=new at;function xA(t,e,n,i,r,s,o){const a=new He(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function m(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?n:e).get(_)),_}function v(x){let _=!1;const y=m(x);y===null?f(a,l):y&&y.isColor&&(f(y,1),_=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function g(x,_){const y=m(_);y&&(y.isCubeTexture||y.mapping===mu)?(u===void 0&&(u=new Je(new Jr(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:ao(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Er.copy(_.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_A.makeRotationFromEuler(Er)),u.material.toneMapped=rt.getTransfer(y.colorSpace)!==ht,(h!==y||d!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,p=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Je(new hr(2,2),new Di({name:"BackgroundMaterial",uniforms:ao(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=rt.getTransfer(y.colorSpace)!==ht,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,_){x.getRGB(kl,Px(t)),i.buffers.color.setClear(kl.r,kl.g,kl.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(a,l)},render:v,addToRenderList:g}}function yA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,U,B,I,z){let j=!1;const J=h(I,B,U);s!==J&&(s=J,c(s.object)),j=p(M,I,B,z),j&&m(M,I,B,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(M,U,B,I),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function h(M,U,B){const I=B.wireframe===!0;let z=i[M.id];z===void 0&&(z={},i[M.id]=z);let j=z[U.id];j===void 0&&(j={},z[U.id]=j);let J=j[I];return J===void 0&&(J=d(l()),j[I]=J),J}function d(M){const U=[],B=[],I=[];for(let z=0;z<n;z++)U[z]=0,B[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:I,object:M,attributes:{},index:null}}function p(M,U,B,I){const z=s.attributes,j=U.attributes;let J=0;const Q=B.getAttributes();for(const N in Q)if(Q[N].location>=0){const q=z[N];let te=j[N];if(te===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),q===void 0||q.attribute!==te||te&&q.data!==te.data)return!0;J++}return s.attributesNum!==J||s.index!==I}function m(M,U,B,I){const z={},j=U.attributes;let J=0;const Q=B.getAttributes();for(const N in Q)if(Q[N].location>=0){let q=j[N];q===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(q=M.instanceColor));const te={};te.attribute=q,q&&q.data&&(te.data=q.data),z[N]=te,J++}s.attributes=z,s.attributesNum=J,s.index=I}function v(){const M=s.newAttributes;for(let U=0,B=M.length;U<B;U++)M[U]=0}function g(M){f(M,0)}function f(M,U){const B=s.newAttributes,I=s.enabledAttributes,z=s.attributeDivisors;B[M]=1,I[M]===0&&(t.enableVertexAttribArray(M),I[M]=1),z[M]!==U&&(t.vertexAttribDivisor(M,U),z[M]=U)}function x(){const M=s.newAttributes,U=s.enabledAttributes;for(let B=0,I=U.length;B<I;B++)U[B]!==M[B]&&(t.disableVertexAttribArray(B),U[B]=0)}function _(M,U,B,I,z,j,J){J===!0?t.vertexAttribIPointer(M,U,B,z,j):t.vertexAttribPointer(M,U,B,I,z,j)}function y(M,U,B,I){v();const z=I.attributes,j=B.getAttributes(),J=U.defaultAttributeValues;for(const Q in j){const N=j[Q];if(N.location>=0){let H=z[Q];if(H===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(H=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(H=M.instanceColor)),H!==void 0){const q=H.normalized,te=H.itemSize,Se=e.get(H);if(Se===void 0)continue;const Ue=Se.buffer,V=Se.type,ie=Se.bytesPerElement,me=V===t.INT||V===t.UNSIGNED_INT||H.gpuType===fx;if(H.isInterleavedBufferAttribute){const ne=H.data,Ie=ne.stride,Fe=H.offset;if(ne.isInstancedInterleavedBuffer){for(let O=0;O<N.locationSize;O++)f(N.location+O,ne.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let O=0;O<N.locationSize;O++)g(N.location+O);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let O=0;O<N.locationSize;O++)_(N.location+O,te/N.locationSize,V,q,Ie*ie,(Fe+te/N.locationSize*O)*ie,me)}else{if(H.isInstancedBufferAttribute){for(let ne=0;ne<N.locationSize;ne++)f(N.location+ne,H.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ne=0;ne<N.locationSize;ne++)g(N.location+ne);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let ne=0;ne<N.locationSize;ne++)_(N.location+ne,te/N.locationSize,V,q,te*ie,te/N.locationSize*ne*ie,me)}}else if(J!==void 0){const q=J[Q];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(N.location,q);break;case 3:t.vertexAttrib3fv(N.location,q);break;case 4:t.vertexAttrib4fv(N.location,q);break;default:t.vertexAttrib1fv(N.location,q)}}}}x()}function C(){L();for(const M in i){const U=i[M];for(const B in U){const I=U[B];for(const z in I)u(I[z].object),delete I[z];delete U[B]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const U=i[M.id];for(const B in U){const I=U[B];for(const z in I)u(I[z].object),delete I[z];delete U[B]}delete i[M.id]}function A(M){for(const U in i){const B=i[U];if(B[M.id]===void 0)continue;const I=B[M.id];for(const z in I)u(I[z].object),delete I[z];delete B[M.id]}}function L(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function SA(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<h;p++)this.render(c[p],u[p]);else{d.multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let m=0;m<h;m++)p+=u[m];n.update(p,i,1)}}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],u[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let m=0;for(let v=0;v<h;v++)m+=u[v];for(let v=0;v<d.length;v++)n.update(m,i,d[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function MA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==ai&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const A=T===gu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ur&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ai&&!A)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:y,maxSamples:C}}function wA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Rr,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const m=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,f=t.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const x=s?0:i,_=x*4;let y=f.clippingState||null;l.value=y,y=u(m,d,_,p);for(let C=0;C!==_;++C)y[C]=n[C];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,m){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const f=p+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<f)&&(g=new Float32Array(f));for(let _=0,y=p;_!==v;++_,y+=4)o.copy(h[_]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function EA(t){let e=new WeakMap;function n(o,a){return a===$d?o.mapping=ro:a===jd&&(o.mapping=so),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===$d||a===jd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ix(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ux extends Lx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fs=4,kg=[.125,.215,.35,.446,.526,.582],Nr=20,Th=new Ux,zg=new He;let Ah=null,bh=0,Ch=0,Rh=!1;const Pr=(1+Math.sqrt(5))/2,gs=1/Pr,Bg=[new D(-Pr,gs,0),new D(Pr,gs,0),new D(-gs,0,Pr),new D(gs,0,Pr),new D(0,Pr,-gs),new D(0,Pr,gs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class qd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ah=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ah,bh,Ch),this._renderer.xr.enabled=Rh,e.scissorTest=!1,zl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ro||e.mapping===so?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ah=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:gu,format:ai,colorSpace:mr,depthBuffer:!1},r=Hg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TA(s)),this._blurMaterial=AA(s,e,n)}return r}_compileMaterial(e){const n=new Je(this._lodPlanes[0],e);this._renderer.compile(n,Th)}_sceneToCubeUV(e,n,i,r){const a=new fn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(zg),u.toneMapping=ar,u.autoClear=!1;const p=new _u({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),m=new Je(new Jr,p);let v=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,v=!0):(p.color.copy(zg),v=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const _=this._cubeSize;zl(r,x*_,f>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ro||e.mapping===so;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;zl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Th)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bg[(r-s-1)%Bg.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Je(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Nr-1),v=s/m,g=isFinite(s)?1+Math.floor(u*v):Nr;g>Nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Nr}`);const f=[];let x=0;for(let A=0;A<Nr;++A){const L=A/v,E=Math.exp(-L*L/2);f.push(E),A===0?x+=E:A<g&&(x+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-i;const y=this._sizeLods[r],C=3*y*(r>_-Fs?r-_+Fs:0),T=4*(this._cubeSize-y);zl(n,C,T,3*y,2*y),l.setRenderTarget(n),l.render(h,Th)}}function TA(t){const e=[],n=[],i=[];let r=t;const s=t-Fs+1+kg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Fs?l=kg[o-t+Fs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,m=6,v=3,g=2,f=1,x=new Float32Array(v*m*p),_=new Float32Array(g*m*p),y=new Float32Array(f*m*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,L=T>2?0:-1,E=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];x.set(E,v*m*T),_.set(d,g*m*T);const M=[T,T,T,T,T,T];y.set(M,f*m*T)}const C=new Ut;C.setAttribute("position",new ti(x,v)),C.setAttribute("uv",new ti(_,g)),C.setAttribute("faceIndex",new ti(y,f)),e.push(C),r>Fs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Hg(t,e,n){const i=new $r(t,e,n);return i.texture.mapping=mu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function AA(t,e,n){const i=new Float32Array(Nr),r=new D(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Vg(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Gg(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function op(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===$d||l===jd,u=l===ro||l===so;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new qd(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new qd(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function CA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function RA(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const v=d.morphAttributes[m];for(let g=0,f=v.length;g<f;g++)e.remove(v[g])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const m in p){const v=p[m];for(let g=0,f=v.length;g<f;g++)e.update(v[g],t.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,m=h.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let _=0,y=x.length;_<y;_+=3){const C=x[_+0],T=x[_+1],A=x[_+2];d.push(C,T,T,A,A,C)}}else if(m!==void 0){const x=m.array;v=m.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const C=_+0,T=_+1,A=_+2;d.push(C,T,T,A,A,C)}}else return;const g=new(Mx(d)?Rx:Cx)(d,1);g.version=v;const f=s.get(h);f&&e.remove(f),s.set(h,g)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function PA(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,m){m!==0&&(t.drawElementsInstanced(i,p,s,d*o,m),n.update(p,i,m))}function u(d,p,m){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<m;g++)this.render(d[g]/o,p[g]);else{v.multiDrawElementsWEBGL(i,p,0,s,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];n.update(g,i,1)}}function h(d,p,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],v[f]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,m);let f=0;for(let x=0;x<m;x++)f+=p[x];for(let x=0;x<v.length;x++)n.update(f,i,v[x])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function LA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function NA(t,e,n){const i=new WeakMap,r=new _t;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let M=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let C=a.attributes.position.count*y,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*T*4*h),L=new Ex(A,C,T,h);L.type=Ai,L.needsUpdate=!0;const E=y*4;for(let U=0;U<h;U++){const B=f[U],I=x[U],z=_[U],j=C*T*4*U;for(let J=0;J<B.count;J++){const Q=J*E;m===!0&&(r.fromBufferAttribute(B,J),A[j+Q+0]=r.x,A[j+Q+1]=r.y,A[j+Q+2]=r.z,A[j+Q+3]=0),v===!0&&(r.fromBufferAttribute(I,J),A[j+Q+4]=r.x,A[j+Q+5]=r.y,A[j+Q+6]=r.z,A[j+Q+7]=0),g===!0&&(r.fromBufferAttribute(z,J),A[j+Q+8]=r.x,A[j+Q+9]=r.y,A[j+Q+10]=r.z,A[j+Q+11]=z.itemSize===4?r.w:1)}}d={count:h,texture:L,size:new de(C,T)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function IA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Fx extends $t{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:$s,u!==$s&&u!==Oa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$s&&(i=oo),i===void 0&&u===Oa&&(i=Ya),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ox=new $t,kx=new Fx(1,1);kx.compareFunction=Sx;const zx=new Ex,Bx=new yw,Hx=new Nx,Wg=[],$g=[],jg=new Float32Array(16),Xg=new Float32Array(9),qg=new Float32Array(4);function mo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Wg[r];if(s===void 0&&(s=new Float32Array(r),Wg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xu(t,e){let n=$g[e];n===void 0&&(n=new Int32Array(e),$g[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function DA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function UA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function FA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function OA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function kA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(It(n,i))return;qg.set(i),t.uniformMatrix2fv(this.addr,!1,qg),Dt(n,i)}}function zA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(It(n,i))return;Xg.set(i),t.uniformMatrix3fv(this.addr,!1,Xg),Dt(n,i)}}function BA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(It(n,i))return;jg.set(i),t.uniformMatrix4fv(this.addr,!1,jg),Dt(n,i)}}function HA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function VA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function GA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function WA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function $A(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function jA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function XA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function qA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function YA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?kx:Ox;n.setTexture2D(e||s,r)}function ZA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Bx,r)}function KA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Hx,r)}function JA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||zx,r)}function QA(t){switch(t){case 5126:return DA;case 35664:return UA;case 35665:return FA;case 35666:return OA;case 35674:return kA;case 35675:return zA;case 35676:return BA;case 5124:case 35670:return HA;case 35667:case 35671:return VA;case 35668:case 35672:return GA;case 35669:case 35673:return WA;case 5125:return $A;case 36294:return jA;case 36295:return XA;case 36296:return qA;case 35678:case 36198:case 36298:case 36306:case 35682:return YA;case 35679:case 36299:case 36307:return ZA;case 35680:case 36300:case 36308:case 36293:return KA;case 36289:case 36303:case 36311:case 36292:return JA}}function e2(t,e){t.uniform1fv(this.addr,e)}function t2(t,e){const n=mo(e,this.size,2);t.uniform2fv(this.addr,n)}function n2(t,e){const n=mo(e,this.size,3);t.uniform3fv(this.addr,n)}function i2(t,e){const n=mo(e,this.size,4);t.uniform4fv(this.addr,n)}function r2(t,e){const n=mo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function s2(t,e){const n=mo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function o2(t,e){const n=mo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function a2(t,e){t.uniform1iv(this.addr,e)}function l2(t,e){t.uniform2iv(this.addr,e)}function c2(t,e){t.uniform3iv(this.addr,e)}function u2(t,e){t.uniform4iv(this.addr,e)}function h2(t,e){t.uniform1uiv(this.addr,e)}function d2(t,e){t.uniform2uiv(this.addr,e)}function f2(t,e){t.uniform3uiv(this.addr,e)}function p2(t,e){t.uniform4uiv(this.addr,e)}function m2(t,e,n){const i=this.cache,r=e.length,s=xu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Ox,s[o])}function g2(t,e,n){const i=this.cache,r=e.length,s=xu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Bx,s[o])}function v2(t,e,n){const i=this.cache,r=e.length,s=xu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Hx,s[o])}function _2(t,e,n){const i=this.cache,r=e.length,s=xu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||zx,s[o])}function x2(t){switch(t){case 5126:return e2;case 35664:return t2;case 35665:return n2;case 35666:return i2;case 35674:return r2;case 35675:return s2;case 35676:return o2;case 5124:case 35670:return a2;case 35667:case 35671:return l2;case 35668:case 35672:return c2;case 35669:case 35673:return u2;case 5125:return h2;case 36294:return d2;case 36295:return f2;case 36296:return p2;case 35678:case 36198:case 36298:case 36306:case 35682:return m2;case 35679:case 36299:case 36307:return g2;case 35680:case 36300:case 36308:case 36293:return v2;case 36289:case 36303:case 36311:case 36292:return _2}}class y2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=QA(n.type)}}class S2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=x2(n.type)}}class M2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ph=/(\w+)(\])?(\[|\.)?/g;function Yg(t,e){t.seq.push(e),t.map[e.id]=e}function w2(t,e,n){const i=t.name,r=i.length;for(Ph.lastIndex=0;;){const s=Ph.exec(i),o=Ph.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Yg(n,c===void 0?new y2(a,t,e):new S2(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new M2(a),Yg(n,h)),n=h}}}class mc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);w2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Zg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const E2=37297;let T2=0;function A2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function b2(t){const e=rt.getPrimaries(rt.workingColorSpace),n=rt.getPrimaries(t);let i;switch(e===n?i="":e===Wc&&n===Gc?i="LinearDisplayP3ToLinearSRGB":e===Gc&&n===Wc&&(i="LinearSRGBToLinearDisplayP3"),t){case mr:case vu:return[i,"LinearTransferOETF"];case hn:case ip:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Kg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+A2(t.getShaderSource(e),o)}else return r}function C2(t,e){const n=b2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function R2(t,e){let n;switch(e){case T1:n="Linear";break;case A1:n="Reinhard";break;case b1:n="OptimizedCineon";break;case ux:n="ACESFilmic";break;case R1:n="AgX";break;case P1:n="Neutral";break;case C1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function P2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function L2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function N2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function na(t){return t!==""}function Jg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(t){return t.replace(I2,U2)}const D2=new Map;function U2(t,e){let n=$e[e];if(n===void 0){const i=D2.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yd(n)}const F2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e0(t){return t.replace(F2,O2)}function O2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function t0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function k2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ax?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===lx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function z2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ro:case so:e="ENVMAP_TYPE_CUBE";break;case mu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function B2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case so:e="ENVMAP_MODE_REFRACTION";break}return e}function H2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case cx:e="ENVMAP_BLENDING_MULTIPLY";break;case w1:e="ENVMAP_BLENDING_MIX";break;case E1:e="ENVMAP_BLENDING_ADD";break}return e}function V2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function G2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=k2(n),c=z2(n),u=B2(n),h=H2(n),d=V2(n),p=P2(n),m=L2(s),v=r.createProgram();let g,f,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(na).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(na).join(`
`),f.length>0&&(f+=`
`)):(g=[t0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),f=[t0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ar?"#define TONE_MAPPING":"",n.toneMapping!==ar?$e.tonemapping_pars_fragment:"",n.toneMapping!==ar?R2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,C2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(na).join(`
`)),o=Yd(o),o=Jg(o,n),o=Qg(o,n),a=Yd(a),a=Jg(a,n),a=Qg(a,n),o=e0(o),a=e0(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===vg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=x+g+o,y=x+f+a,C=Zg(r,r.VERTEX_SHADER,_),T=Zg(r,r.FRAGMENT_SHADER,y);r.attachShader(v,C),r.attachShader(v,T),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(U){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(v).trim(),I=r.getShaderInfoLog(C).trim(),z=r.getShaderInfoLog(T).trim();let j=!0,J=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,C,T);else{const Q=Kg(r,C,"vertex"),N=Kg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+B+`
`+Q+`
`+N)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(I===""||z==="")&&(J=!1);J&&(U.diagnostics={runnable:j,programLog:B,vertexShader:{log:I,prefix:g},fragmentShader:{log:z,prefix:f}})}r.deleteShader(C),r.deleteShader(T),L=new mc(r,v),E=N2(r,v)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,E2)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=T2++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let W2=0;class $2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new j2(e),n.set(e,i)),i}}class j2{constructor(e){this.id=W2++,this.code=e,this.usedTimes=0}}function X2(t,e,n,i,r,s,o){const a=new Ax,l=new $2,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,M,U,B,I){const z=B.fog,j=I.geometry,J=E.isMeshStandardMaterial?B.environment:null,Q=(E.isMeshStandardMaterial?n:e).get(E.envMap||J),N=Q&&Q.mapping===mu?Q.image.height:null,H=m[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const q=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,te=q!==void 0?q.length:0;let Se=0;j.morphAttributes.position!==void 0&&(Se=1),j.morphAttributes.normal!==void 0&&(Se=2),j.morphAttributes.color!==void 0&&(Se=3);let Ue,V,ie,me;if(H){const et=si[H];Ue=et.vertexShader,V=et.fragmentShader}else Ue=E.vertexShader,V=E.fragmentShader,l.update(E),ie=l.getVertexShaderID(E),me=l.getFragmentShaderID(E);const ne=t.getRenderTarget(),Ie=I.isInstancedMesh===!0,Fe=I.isBatchedMesh===!0,O=!!E.map,ke=!!E.matcap,Z=!!Q,ae=!!E.aoMap,K=!!E.lightMap,ue=!!E.bumpMap,le=!!E.normalMap,Me=!!E.displacementMap,Le=!!E.emissiveMap,R=!!E.metalnessMap,w=!!E.roughnessMap,G=E.anisotropy>0,Y=E.clearcoat>0,ce=E.dispersion>0,se=E.iridescence>0,Pe=E.sheen>0,ve=E.transmission>0,ge=G&&!!E.anisotropyMap,ze=Y&&!!E.clearcoatMap,pe=Y&&!!E.clearcoatNormalMap,Re=Y&&!!E.clearcoatRoughnessMap,qe=se&&!!E.iridescenceMap,De=se&&!!E.iridescenceThicknessMap,Te=Pe&&!!E.sheenColorMap,Ve=Pe&&!!E.sheenRoughnessMap,Ye=!!E.specularMap,pt=!!E.specularColorMap,Ge=!!E.specularIntensityMap,F=ve&&!!E.transmissionMap,oe=ve&&!!E.thicknessMap,ee=!!E.gradientMap,ye=!!E.alphaMap,we=E.alphaTest>0,Ke=!!E.alphaHash,st=!!E.extensions;let mt=ar;E.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(mt=t.toneMapping);const Tt={shaderID:H,shaderType:E.type,shaderName:E.name,vertexShader:Ue,fragmentShader:V,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Fe,instancing:Ie,instancingColor:Ie&&I.instanceColor!==null,instancingMorph:Ie&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:mr,alphaToCoverage:!!E.alphaToCoverage,map:O,matcap:ke,envMap:Z,envMapMode:Z&&Q.mapping,envMapCubeUVHeight:N,aoMap:ae,lightMap:K,bumpMap:ue,normalMap:le,displacementMap:d&&Me,emissiveMap:Le,normalMapObjectSpace:le&&E.normalMapType===G1,normalMapTangentSpace:le&&E.normalMapType===yx,metalnessMap:R,roughnessMap:w,anisotropy:G,anisotropyMap:ge,clearcoat:Y,clearcoatMap:ze,clearcoatNormalMap:pe,clearcoatRoughnessMap:Re,dispersion:ce,iridescence:se,iridescenceMap:qe,iridescenceThicknessMap:De,sheen:Pe,sheenColorMap:Te,sheenRoughnessMap:Ve,specularMap:Ye,specularColorMap:pt,specularIntensityMap:Ge,transmission:ve,transmissionMap:F,thicknessMap:oe,gradientMap:ee,opaque:E.transparent===!1&&E.blending===Ws&&E.alphaToCoverage===!1,alphaMap:ye,alphaTest:we,alphaHash:Ke,combine:E.combine,mapUv:O&&v(E.map.channel),aoMapUv:ae&&v(E.aoMap.channel),lightMapUv:K&&v(E.lightMap.channel),bumpMapUv:ue&&v(E.bumpMap.channel),normalMapUv:le&&v(E.normalMap.channel),displacementMapUv:Me&&v(E.displacementMap.channel),emissiveMapUv:Le&&v(E.emissiveMap.channel),metalnessMapUv:R&&v(E.metalnessMap.channel),roughnessMapUv:w&&v(E.roughnessMap.channel),anisotropyMapUv:ge&&v(E.anisotropyMap.channel),clearcoatMapUv:ze&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:pe&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:De&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&v(E.sheenRoughnessMap.channel),specularMapUv:Ye&&v(E.specularMap.channel),specularColorMapUv:pt&&v(E.specularColorMap.channel),specularIntensityMapUv:Ge&&v(E.specularIntensityMap.channel),transmissionMapUv:F&&v(E.transmissionMap.channel),thicknessMapUv:oe&&v(E.thicknessMap.channel),alphaMapUv:ye&&v(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(le||G),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!j.attributes.uv&&(O||ye),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:mt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:O&&E.map.isVideoTexture===!0&&rt.getTransfer(E.map.colorSpace)===ht,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===En,flipSided:E.side===ln,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:st&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:st&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function f(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)M.push(U),M.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(x(M,E),_(M,E),M.push(t.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function x(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function _(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),E.push(a.mask)}function y(E){const M=m[E.type];let U;if(M){const B=si[M];U=Nw.clone(B.uniforms)}else U=E.uniforms;return U}function C(E,M){let U;for(let B=0,I=u.length;B<I;B++){const z=u[B];if(z.cacheKey===M){U=z,++U.usedTimes;break}}return U===void 0&&(U=new G2(t,M,E,s),u.push(U)),U}function T(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:L}}function q2(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Y2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function n0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function i0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,m,v,g){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:m,renderOrder:h.renderOrder,z:v,group:g},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=h.renderOrder,f.z=v,f.group=g),e++,f}function a(h,d,p,m,v,g){const f=o(h,d,p,m,v,g);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(h,d,p,m,v,g){const f=o(h,d,p,m,v,g);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(h,d){n.length>1&&n.sort(h||Y2),i.length>1&&i.sort(d||n0),r.length>1&&r.sort(d||n0)}function u(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Z2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new i0,t.set(i,[o])):r>=s.length?(o=new i0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function K2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new He};break;case"SpotLight":n={position:new D,direction:new D,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function J2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Q2=0;function eb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function tb(t){const e=new K2,n=J2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new at,o=new at;function a(c,u){let h=0,d=0,p=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let m=0,v=0,g=0,f=0,x=0,_=0,y=0,C=0,T=0,A=0,L=0;c.sort(eb);const E=u===!0?Math.PI:1;for(let U=0,B=c.length;U<B;U++){const I=c[U],z=I.color,j=I.intensity,J=I.distance,Q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=z.r*j*E,d+=z.g*j*E,p+=z.b*j*E;else if(I.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(I.sh.coefficients[N],j);L++}else if(I.isDirectionalLight){const N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){const H=I.shadow,q=n.get(I);q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,i.directionalShadow[m]=q,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=I.shadow.matrix,_++}i.directional[m]=N,m++}else if(I.isSpotLight){const N=e.get(I);N.position.setFromMatrixPosition(I.matrixWorld),N.color.copy(z).multiplyScalar(j*E),N.distance=J,N.coneCos=Math.cos(I.angle),N.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),N.decay=I.decay,i.spot[g]=N;const H=I.shadow;if(I.map&&(i.spotLightMap[T]=I.map,T++,H.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[g]=H.matrix,I.castShadow){const q=n.get(I);q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,i.spotShadow[g]=q,i.spotShadowMap[g]=Q,C++}g++}else if(I.isRectAreaLight){const N=e.get(I);N.color.copy(z).multiplyScalar(j),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),i.rectArea[f]=N,f++}else if(I.isPointLight){const N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity*E),N.distance=I.distance,N.decay=I.decay,I.castShadow){const H=I.shadow,q=n.get(I);q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,q.shadowCameraNear=H.camera.near,q.shadowCameraFar=H.camera.far,i.pointShadow[v]=q,i.pointShadowMap[v]=Q,i.pointShadowMatrix[v]=I.shadow.matrix,y++}i.point[v]=N,v++}else if(I.isHemisphereLight){const N=e.get(I);N.skyColor.copy(I.color).multiplyScalar(j*E),N.groundColor.copy(I.groundColor).multiplyScalar(j*E),i.hemi[x]=N,x++}}f>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=p;const M=i.hash;(M.directionalLength!==m||M.pointLength!==v||M.spotLength!==g||M.rectAreaLength!==f||M.hemiLength!==x||M.numDirectionalShadows!==_||M.numPointShadows!==y||M.numSpotShadows!==C||M.numSpotMaps!==T||M.numLightProbes!==L)&&(i.directional.length=m,i.spot.length=g,i.rectArea.length=f,i.point.length=v,i.hemi.length=x,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=C+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,M.directionalLength=m,M.pointLength=v,M.spotLength=g,M.rectAreaLength=f,M.hemiLength=x,M.numDirectionalShadows=_,M.numPointShadows=y,M.numSpotShadows=C,M.numSpotMaps=T,M.numLightProbes=L,i.version=Q2++)}function l(c,u){let h=0,d=0,p=0,m=0,v=0;const g=u.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const _=c[f];if(_.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(_.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function r0(t){const e=new tb(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(u){e.setup(n,u)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function nb(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new r0(t),e.set(r,[a])):s>=o.length?(a=new r0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class ib extends Kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rb extends Kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ob=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ab(t,e,n){let i=new sp;const r=new de,s=new de,o=new _t,a=new ib({depthPacking:V1}),l=new rb,c={},u=n.maxTextureSize,h={[Vn]:ln,[ln]:Vn,[En]:En},d=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:sb,fragmentShader:ob}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new Ut;m.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Je(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ax;let f=this.type;this.render=function(T,A,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const E=t.getRenderTarget(),M=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),B=t.state;B.setBlending(or),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const I=f!==yi&&this.type===yi,z=f===yi&&this.type!==yi;for(let j=0,J=T.length;j<J;j++){const Q=T[j],N=Q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const H=N.getFrameExtents();if(r.multiply(H),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,N.mapSize.y=s.y)),N.map===null||I===!0||z===!0){const te=this.type!==yi?{minFilter:mn,magFilter:mn}:{};N.map!==null&&N.map.dispose(),N.map=new $r(r.x,r.y,te),N.map.texture.name=Q.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const q=N.getViewportCount();for(let te=0;te<q;te++){const Se=N.getViewport(te);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),B.viewport(o),N.updateMatrices(Q,te),i=N.getFrustum(),y(A,L,N.camera,Q,this.type)}N.isPointLightShadow!==!0&&this.type===yi&&x(N,L),N.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(E,M,U)};function x(T,A){const L=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $r(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,L,d,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,L,p,v,null)}function _(T,A,L,E){let M=null;const U=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)M=U;else if(M=L.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const B=M.uuid,I=A.uuid;let z=c[B];z===void 0&&(z={},c[B]=z);let j=z[I];j===void 0&&(j=M.clone(),z[I]=j,A.addEventListener("dispose",C)),M=j}if(M.visible=A.visible,M.wireframe=A.wireframe,E===yi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=t.properties.get(M);B.light=L}return M}function y(T,A,L,E,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===yi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const I=e.update(T),z=T.material;if(Array.isArray(z)){const j=I.groups;for(let J=0,Q=j.length;J<Q;J++){const N=j[J],H=z[N.materialIndex];if(H&&H.visible){const q=_(T,H,E,M);T.onBeforeShadow(t,T,A,L,I,q,N),t.renderBufferDirect(L,null,I,q,T,N),T.onAfterShadow(t,T,A,L,I,q,N)}}}else if(z.visible){const j=_(T,z,E,M);T.onBeforeShadow(t,T,A,L,I,j,null),t.renderBufferDirect(L,null,I,j,T,null),T.onAfterShadow(t,T,A,L,I,j,null)}}const B=T.children;for(let I=0,z=B.length;I<z;I++)y(B[I],A,L,E,M)}function C(T){T.target.removeEventListener("dispose",C);for(const L in c){const E=c[L],M=T.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function lb(t){function e(){let F=!1;const oe=new _t;let ee=null;const ye=new _t(0,0,0,0);return{setMask:function(we){ee!==we&&!F&&(t.colorMask(we,we,we,we),ee=we)},setLocked:function(we){F=we},setClear:function(we,Ke,st,mt,Tt){Tt===!0&&(we*=mt,Ke*=mt,st*=mt),oe.set(we,Ke,st,mt),ye.equals(oe)===!1&&(t.clearColor(we,Ke,st,mt),ye.copy(oe))},reset:function(){F=!1,ee=null,ye.set(-1,0,0,0)}}}function n(){let F=!1,oe=null,ee=null,ye=null;return{setTest:function(we){we?me(t.DEPTH_TEST):ne(t.DEPTH_TEST)},setMask:function(we){oe!==we&&!F&&(t.depthMask(we),oe=we)},setFunc:function(we){if(ee!==we){switch(we){case g1:t.depthFunc(t.NEVER);break;case v1:t.depthFunc(t.ALWAYS);break;case _1:t.depthFunc(t.LESS);break;case Hc:t.depthFunc(t.LEQUAL);break;case x1:t.depthFunc(t.EQUAL);break;case y1:t.depthFunc(t.GEQUAL);break;case S1:t.depthFunc(t.GREATER);break;case M1:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=we}},setLocked:function(we){F=we},setClear:function(we){ye!==we&&(t.clearDepth(we),ye=we)},reset:function(){F=!1,oe=null,ee=null,ye=null}}}function i(){let F=!1,oe=null,ee=null,ye=null,we=null,Ke=null,st=null,mt=null,Tt=null;return{setTest:function(et){F||(et?me(t.STENCIL_TEST):ne(t.STENCIL_TEST))},setMask:function(et){oe!==et&&!F&&(t.stencilMask(et),oe=et)},setFunc:function(et,Ln,Ft){(ee!==et||ye!==Ln||we!==Ft)&&(t.stencilFunc(et,Ln,Ft),ee=et,ye=Ln,we=Ft)},setOp:function(et,Ln,Ft){(Ke!==et||st!==Ln||mt!==Ft)&&(t.stencilOp(et,Ln,Ft),Ke=et,st=Ln,mt=Ft)},setLocked:function(et){F=et},setClear:function(et){Tt!==et&&(t.clearStencil(et),Tt=et)},reset:function(){F=!1,oe=null,ee=null,ye=null,we=null,Ke=null,st=null,mt=null,Tt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],p=null,m=!1,v=null,g=null,f=null,x=null,_=null,y=null,C=null,T=new He(0,0,0),A=0,L=!1,E=null,M=null,U=null,B=null,I=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,J=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Q)[1]),j=J>=1):Q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),j=J>=2);let N=null,H={};const q=t.getParameter(t.SCISSOR_BOX),te=t.getParameter(t.VIEWPORT),Se=new _t().fromArray(q),Ue=new _t().fromArray(te);function V(F,oe,ee,ye){const we=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(F,Ke),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let st=0;st<ee;st++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,t.RGBA,1,1,ye,0,t.RGBA,t.UNSIGNED_BYTE,we):t.texImage2D(oe+st,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,we);return Ke}const ie={};ie[t.TEXTURE_2D]=V(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=V(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=V(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=V(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),me(t.DEPTH_TEST),s.setFunc(Hc),ue(!1),le(zm),me(t.CULL_FACE),ae(or);function me(F){c[F]!==!0&&(t.enable(F),c[F]=!0)}function ne(F){c[F]!==!1&&(t.disable(F),c[F]=!1)}function Ie(F,oe){return u[F]!==oe?(t.bindFramebuffer(F,oe),u[F]=oe,F===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=oe),F===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=oe),!0):!1}function Fe(F,oe){let ee=d,ye=!1;if(F){ee=h.get(oe),ee===void 0&&(ee=[],h.set(oe,ee));const we=F.textures;if(ee.length!==we.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,st=we.length;Ke<st;Ke++)ee[Ke]=t.COLOR_ATTACHMENT0+Ke;ee.length=we.length,ye=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,ye=!0);ye&&t.drawBuffers(ee)}function O(F){return p!==F?(t.useProgram(F),p=F,!0):!1}const ke={[Lr]:t.FUNC_ADD,[QM]:t.FUNC_SUBTRACT,[e1]:t.FUNC_REVERSE_SUBTRACT};ke[t1]=t.MIN,ke[n1]=t.MAX;const Z={[i1]:t.ZERO,[r1]:t.ONE,[s1]:t.SRC_COLOR,[Gd]:t.SRC_ALPHA,[h1]:t.SRC_ALPHA_SATURATE,[c1]:t.DST_COLOR,[a1]:t.DST_ALPHA,[o1]:t.ONE_MINUS_SRC_COLOR,[Wd]:t.ONE_MINUS_SRC_ALPHA,[u1]:t.ONE_MINUS_DST_COLOR,[l1]:t.ONE_MINUS_DST_ALPHA,[d1]:t.CONSTANT_COLOR,[f1]:t.ONE_MINUS_CONSTANT_COLOR,[p1]:t.CONSTANT_ALPHA,[m1]:t.ONE_MINUS_CONSTANT_ALPHA};function ae(F,oe,ee,ye,we,Ke,st,mt,Tt,et){if(F===or){m===!0&&(ne(t.BLEND),m=!1);return}if(m===!1&&(me(t.BLEND),m=!0),F!==JM){if(F!==v||et!==L){if((g!==Lr||_!==Lr)&&(t.blendEquation(t.FUNC_ADD),g=Lr,_=Lr),et)switch(F){case Ws:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bm:t.blendFunc(t.ONE,t.ONE);break;case Hm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ws:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Hm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}f=null,x=null,y=null,C=null,T.set(0,0,0),A=0,v=F,L=et}return}we=we||oe,Ke=Ke||ee,st=st||ye,(oe!==g||we!==_)&&(t.blendEquationSeparate(ke[oe],ke[we]),g=oe,_=we),(ee!==f||ye!==x||Ke!==y||st!==C)&&(t.blendFuncSeparate(Z[ee],Z[ye],Z[Ke],Z[st]),f=ee,x=ye,y=Ke,C=st),(mt.equals(T)===!1||Tt!==A)&&(t.blendColor(mt.r,mt.g,mt.b,Tt),T.copy(mt),A=Tt),v=F,L=!1}function K(F,oe){F.side===En?ne(t.CULL_FACE):me(t.CULL_FACE);let ee=F.side===ln;oe&&(ee=!ee),ue(ee),F.blending===Ws&&F.transparent===!1?ae(or):ae(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const ye=F.stencilWrite;o.setTest(ye),ye&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Le(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?me(t.SAMPLE_ALPHA_TO_COVERAGE):ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function ue(F){E!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),E=F)}function le(F){F!==ZM?(me(t.CULL_FACE),F!==M&&(F===zm?t.cullFace(t.BACK):F===KM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ne(t.CULL_FACE),M=F}function Me(F){F!==U&&(j&&t.lineWidth(F),U=F)}function Le(F,oe,ee){F?(me(t.POLYGON_OFFSET_FILL),(B!==oe||I!==ee)&&(t.polygonOffset(oe,ee),B=oe,I=ee)):ne(t.POLYGON_OFFSET_FILL)}function R(F){F?me(t.SCISSOR_TEST):ne(t.SCISSOR_TEST)}function w(F){F===void 0&&(F=t.TEXTURE0+z-1),N!==F&&(t.activeTexture(F),N=F)}function G(F,oe,ee){ee===void 0&&(N===null?ee=t.TEXTURE0+z-1:ee=N);let ye=H[ee];ye===void 0&&(ye={type:void 0,texture:void 0},H[ee]=ye),(ye.type!==F||ye.texture!==oe)&&(N!==ee&&(t.activeTexture(ee),N=ee),t.bindTexture(F,oe||ie[F]),ye.type=F,ye.texture=oe)}function Y(){const F=H[N];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ce(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qe(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(F){Se.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Se.copy(F))}function Ve(F){Ue.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Ue.copy(F))}function Ye(F,oe){let ee=l.get(oe);ee===void 0&&(ee=new WeakMap,l.set(oe,ee));let ye=ee.get(F);ye===void 0&&(ye=t.getUniformBlockIndex(oe,F.name),ee.set(F,ye))}function pt(F,oe){const ye=l.get(oe).get(F);a.get(oe)!==ye&&(t.uniformBlockBinding(oe,ye,F.__bindingPointIndex),a.set(oe,ye))}function Ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,H={},u={},h=new WeakMap,d=[],p=null,m=!1,v=null,g=null,f=null,x=null,_=null,y=null,C=null,T=new He(0,0,0),A=0,L=!1,E=null,M=null,U=null,B=null,I=null,Se.set(0,0,t.canvas.width,t.canvas.height),Ue.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:me,disable:ne,bindFramebuffer:Ie,drawBuffers:Fe,useProgram:O,setBlending:ae,setMaterial:K,setFlipSided:ue,setCullFace:le,setLineWidth:Me,setPolygonOffset:Le,setScissorTest:R,activeTexture:w,bindTexture:G,unbindTexture:Y,compressedTexImage2D:ce,compressedTexImage3D:se,texImage2D:qe,texImage3D:De,updateUBOMapping:Ye,uniformBlockBinding:pt,texStorage2D:pe,texStorage3D:Re,texSubImage2D:Pe,texSubImage3D:ve,compressedTexSubImage2D:ge,compressedTexSubImage3D:ze,scissor:Te,viewport:Ve,reset:Ge}}function cb(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,w){return p?new OffscreenCanvas(R,w):za("canvas")}function v(R,w,G){let Y=1;const ce=Le(R);if((ce.width>G||ce.height>G)&&(Y=G/Math.max(ce.width,ce.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const se=Math.floor(Y*ce.width),Pe=Math.floor(Y*ce.height);h===void 0&&(h=m(se,Pe));const ve=w?m(se,Pe):h;return ve.width=se,ve.height=Pe,ve.getContext("2d").drawImage(R,0,0,se,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+se+"x"+Pe+")."),ve}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),R;return R}function g(R){return R.generateMipmaps&&R.minFilter!==mn&&R.minFilter!==en}function f(R){t.generateMipmap(R)}function x(R,w,G,Y,ce=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let se=w;if(w===t.RED&&(G===t.FLOAT&&(se=t.R32F),G===t.HALF_FLOAT&&(se=t.R16F),G===t.UNSIGNED_BYTE&&(se=t.R8)),w===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(se=t.R8UI),G===t.UNSIGNED_SHORT&&(se=t.R16UI),G===t.UNSIGNED_INT&&(se=t.R32UI),G===t.BYTE&&(se=t.R8I),G===t.SHORT&&(se=t.R16I),G===t.INT&&(se=t.R32I)),w===t.RG&&(G===t.FLOAT&&(se=t.RG32F),G===t.HALF_FLOAT&&(se=t.RG16F),G===t.UNSIGNED_BYTE&&(se=t.RG8)),w===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(se=t.RG8UI),G===t.UNSIGNED_SHORT&&(se=t.RG16UI),G===t.UNSIGNED_INT&&(se=t.RG32UI),G===t.BYTE&&(se=t.RG8I),G===t.SHORT&&(se=t.RG16I),G===t.INT&&(se=t.RG32I)),w===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(se=t.RGB9_E5),w===t.RGBA){const Pe=ce?Vc:rt.getTransfer(Y);G===t.FLOAT&&(se=t.RGBA32F),G===t.HALF_FLOAT&&(se=t.RGBA16F),G===t.UNSIGNED_BYTE&&(se=Pe===ht?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function _(R,w){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==mn&&R.minFilter!==en?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function y(R){const w=R.target;w.removeEventListener("dispose",y),T(w),w.isVideoTexture&&u.delete(w)}function C(R){const w=R.target;w.removeEventListener("dispose",C),L(w)}function T(R){const w=i.get(R);if(w.__webglInit===void 0)return;const G=R.source,Y=d.get(G);if(Y){const ce=Y[w.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&A(R),Object.keys(Y).length===0&&d.delete(G)}i.remove(R)}function A(R){const w=i.get(R);t.deleteTexture(w.__webglTexture);const G=R.source,Y=d.get(G);delete Y[w.__cacheKey],o.memory.textures--}function L(R){const w=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(w.__webglFramebuffer[Y]))for(let ce=0;ce<w.__webglFramebuffer[Y].length;ce++)t.deleteFramebuffer(w.__webglFramebuffer[Y][ce]);else t.deleteFramebuffer(w.__webglFramebuffer[Y]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[Y])}else{if(Array.isArray(w.__webglFramebuffer))for(let Y=0;Y<w.__webglFramebuffer.length;Y++)t.deleteFramebuffer(w.__webglFramebuffer[Y]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Y=0;Y<w.__webglColorRenderbuffer.length;Y++)w.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[Y]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=R.textures;for(let Y=0,ce=G.length;Y<ce;Y++){const se=i.get(G[Y]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove(G[Y])}i.remove(R)}let E=0;function M(){E=0}function U(){const R=E;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),E+=1,R}function B(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function I(R,w){const G=i.get(R);if(R.isVideoTexture&&le(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(G,R,w);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+w)}function z(R,w){const G=i.get(R);if(R.version>0&&G.__version!==R.version){Se(G,R,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+w)}function j(R,w){const G=i.get(R);if(R.version>0&&G.__version!==R.version){Se(G,R,w);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+w)}function J(R,w){const G=i.get(R);if(R.version>0&&G.__version!==R.version){Ue(G,R,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+w)}const Q={[Ii]:t.REPEAT,[Fr]:t.CLAMP_TO_EDGE,[Xd]:t.MIRRORED_REPEAT},N={[mn]:t.NEAREST,[L1]:t.NEAREST_MIPMAP_NEAREST,[_l]:t.NEAREST_MIPMAP_LINEAR,[en]:t.LINEAR,[th]:t.LINEAR_MIPMAP_NEAREST,[Ti]:t.LINEAR_MIPMAP_LINEAR},H={[W1]:t.NEVER,[Z1]:t.ALWAYS,[$1]:t.LESS,[Sx]:t.LEQUAL,[j1]:t.EQUAL,[Y1]:t.GEQUAL,[X1]:t.GREATER,[q1]:t.NOTEQUAL};function q(R,w){if(w.type===Ai&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===en||w.magFilter===th||w.magFilter===_l||w.magFilter===Ti||w.minFilter===en||w.minFilter===th||w.minFilter===_l||w.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,Q[w.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,Q[w.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,Q[w.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,N[w.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,N[w.minFilter]),w.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,H[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===mn||w.minFilter!==_l&&w.minFilter!==Ti||w.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function te(R,w){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",y));const Y=w.source;let ce=d.get(Y);ce===void 0&&(ce={},d.set(Y,ce));const se=B(w);if(se!==R.__cacheKey){ce[se]===void 0&&(ce[se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ce[se].usedTimes++;const Pe=ce[R.__cacheKey];Pe!==void 0&&(ce[R.__cacheKey].usedTimes--,Pe.usedTimes===0&&A(w)),R.__cacheKey=se,R.__webglTexture=ce[se].texture}return G}function Se(R,w,G){let Y=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Y=t.TEXTURE_3D);const ce=te(R,w),se=w.source;n.bindTexture(Y,R.__webglTexture,t.TEXTURE0+G);const Pe=i.get(se);if(se.version!==Pe.__version||ce===!0){n.activeTexture(t.TEXTURE0+G);const ve=rt.getPrimaries(rt.workingColorSpace),ge=w.colorSpace===Zn?null:rt.getPrimaries(w.colorSpace),ze=w.colorSpace===Zn||ve===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let pe=v(w.image,!1,r.maxTextureSize);pe=Me(w,pe);const Re=s.convert(w.format,w.colorSpace),qe=s.convert(w.type);let De=x(w.internalFormat,Re,qe,w.colorSpace,w.isVideoTexture);q(Y,w);let Te;const Ve=w.mipmaps,Ye=w.isVideoTexture!==!0,pt=Pe.__version===void 0||ce===!0,Ge=se.dataReady,F=_(w,pe);if(w.isDepthTexture)De=t.DEPTH_COMPONENT16,w.type===Ai?De=t.DEPTH_COMPONENT32F:w.type===oo?De=t.DEPTH_COMPONENT24:w.type===Ya&&(De=t.DEPTH24_STENCIL8),pt&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,De,pe.width,pe.height):n.texImage2D(t.TEXTURE_2D,0,De,pe.width,pe.height,0,Re,qe,null));else if(w.isDataTexture)if(Ve.length>0){Ye&&pt&&n.texStorage2D(t.TEXTURE_2D,F,De,Ve[0].width,Ve[0].height);for(let oe=0,ee=Ve.length;oe<ee;oe++)Te=Ve[oe],Ye?Ge&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Te.width,Te.height,Re,qe,Te.data):n.texImage2D(t.TEXTURE_2D,oe,De,Te.width,Te.height,0,Re,qe,Te.data);w.generateMipmaps=!1}else Ye?(pt&&n.texStorage2D(t.TEXTURE_2D,F,De,pe.width,pe.height),Ge&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe.width,pe.height,Re,qe,pe.data)):n.texImage2D(t.TEXTURE_2D,0,De,pe.width,pe.height,0,Re,qe,pe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ye&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,F,De,Ve[0].width,Ve[0].height,pe.depth);for(let oe=0,ee=Ve.length;oe<ee;oe++)Te=Ve[oe],w.format!==ai?Re!==null?Ye?Ge&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,Te.width,Te.height,pe.depth,Re,Te.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,De,Te.width,Te.height,pe.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?Ge&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,Te.width,Te.height,pe.depth,Re,qe,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,De,Te.width,Te.height,pe.depth,0,Re,qe,Te.data)}else{Ye&&pt&&n.texStorage2D(t.TEXTURE_2D,F,De,Ve[0].width,Ve[0].height);for(let oe=0,ee=Ve.length;oe<ee;oe++)Te=Ve[oe],w.format!==ai?Re!==null?Ye?Ge&&n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,Te.width,Te.height,Re,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,De,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?Ge&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Te.width,Te.height,Re,qe,Te.data):n.texImage2D(t.TEXTURE_2D,oe,De,Te.width,Te.height,0,Re,qe,Te.data)}else if(w.isDataArrayTexture)Ye?(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,F,De,pe.width,pe.height,pe.depth),Ge&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Re,qe,pe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,pe.width,pe.height,pe.depth,0,Re,qe,pe.data);else if(w.isData3DTexture)Ye?(pt&&n.texStorage3D(t.TEXTURE_3D,F,De,pe.width,pe.height,pe.depth),Ge&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Re,qe,pe.data)):n.texImage3D(t.TEXTURE_3D,0,De,pe.width,pe.height,pe.depth,0,Re,qe,pe.data);else if(w.isFramebufferTexture){if(pt)if(Ye)n.texStorage2D(t.TEXTURE_2D,F,De,pe.width,pe.height);else{let oe=pe.width,ee=pe.height;for(let ye=0;ye<F;ye++)n.texImage2D(t.TEXTURE_2D,ye,De,oe,ee,0,Re,qe,null),oe>>=1,ee>>=1}}else if(Ve.length>0){if(Ye&&pt){const oe=Le(Ve[0]);n.texStorage2D(t.TEXTURE_2D,F,De,oe.width,oe.height)}for(let oe=0,ee=Ve.length;oe<ee;oe++)Te=Ve[oe],Ye?Ge&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Re,qe,Te):n.texImage2D(t.TEXTURE_2D,oe,De,Re,qe,Te);w.generateMipmaps=!1}else if(Ye){if(pt){const oe=Le(pe);n.texStorage2D(t.TEXTURE_2D,F,De,oe.width,oe.height)}Ge&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,qe,pe)}else n.texImage2D(t.TEXTURE_2D,0,De,Re,qe,pe);g(w)&&f(Y),Pe.__version=se.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Ue(R,w,G){if(w.image.length!==6)return;const Y=te(R,w),ce=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+G);const se=i.get(ce);if(ce.version!==se.__version||Y===!0){n.activeTexture(t.TEXTURE0+G);const Pe=rt.getPrimaries(rt.workingColorSpace),ve=w.colorSpace===Zn?null:rt.getPrimaries(w.colorSpace),ge=w.colorSpace===Zn||Pe===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ze=w.isCompressedTexture||w.image[0].isCompressedTexture,pe=w.image[0]&&w.image[0].isDataTexture,Re=[];for(let ee=0;ee<6;ee++)!ze&&!pe?Re[ee]=v(w.image[ee],!0,r.maxCubemapSize):Re[ee]=pe?w.image[ee].image:w.image[ee],Re[ee]=Me(w,Re[ee]);const qe=Re[0],De=s.convert(w.format,w.colorSpace),Te=s.convert(w.type),Ve=x(w.internalFormat,De,Te,w.colorSpace),Ye=w.isVideoTexture!==!0,pt=se.__version===void 0||Y===!0,Ge=ce.dataReady;let F=_(w,qe);q(t.TEXTURE_CUBE_MAP,w);let oe;if(ze){Ye&&pt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,F,Ve,qe.width,qe.height);for(let ee=0;ee<6;ee++){oe=Re[ee].mipmaps;for(let ye=0;ye<oe.length;ye++){const we=oe[ye];w.format!==ai?De!==null?Ye?Ge&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,0,0,we.width,we.height,De,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,Ve,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?Ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,0,0,we.width,we.height,De,Te,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,Ve,we.width,we.height,0,De,Te,we.data)}}}else{if(oe=w.mipmaps,Ye&&pt){oe.length>0&&F++;const ee=Le(Re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,F,Ve,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(pe){Ye?Ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Re[ee].width,Re[ee].height,De,Te,Re[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ve,Re[ee].width,Re[ee].height,0,De,Te,Re[ee].data);for(let ye=0;ye<oe.length;ye++){const Ke=oe[ye].image[ee].image;Ye?Ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,0,0,Ke.width,Ke.height,De,Te,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,Ve,Ke.width,Ke.height,0,De,Te,Ke.data)}}else{Ye?Ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,De,Te,Re[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ve,De,Te,Re[ee]);for(let ye=0;ye<oe.length;ye++){const we=oe[ye];Ye?Ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,0,0,De,Te,we.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,Ve,De,Te,we.image[ee])}}}g(w)&&f(t.TEXTURE_CUBE_MAP),se.__version=ce.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function V(R,w,G,Y,ce,se){const Pe=s.convert(G.format,G.colorSpace),ve=s.convert(G.type),ge=x(G.internalFormat,Pe,ve,G.colorSpace);if(!i.get(w).__hasExternalTextures){const pe=Math.max(1,w.width>>se),Re=Math.max(1,w.height>>se);ce===t.TEXTURE_3D||ce===t.TEXTURE_2D_ARRAY?n.texImage3D(ce,se,ge,pe,Re,w.depth,0,Pe,ve,null):n.texImage2D(ce,se,ge,pe,Re,0,Pe,ve,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ue(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,ce,i.get(G).__webglTexture,0,K(w)):(ce===t.TEXTURE_2D||ce>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,ce,i.get(G).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(R,w,G){if(t.bindRenderbuffer(t.RENDERBUFFER,R),w.depthBuffer&&!w.stencilBuffer){let Y=t.DEPTH_COMPONENT24;if(G||ue(w)){const ce=w.depthTexture;ce&&ce.isDepthTexture&&(ce.type===Ai?Y=t.DEPTH_COMPONENT32F:ce.type===oo&&(Y=t.DEPTH_COMPONENT24));const se=K(w);ue(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,Y,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,se,Y,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,Y,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(w.depthBuffer&&w.stencilBuffer){const Y=K(w);G&&ue(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Y,t.DEPTH24_STENCIL8,w.width,w.height):ue(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Y,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const Y=w.textures;for(let ce=0;ce<Y.length;ce++){const se=Y[ce],Pe=s.convert(se.format,se.colorSpace),ve=s.convert(se.type),ge=x(se.internalFormat,Pe,ve,se.colorSpace),ze=K(w);G&&ue(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,ge,w.width,w.height):ue(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ze,ge,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ge,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function me(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),I(w.depthTexture,0);const Y=i.get(w.depthTexture).__webglTexture,ce=K(w);if(w.depthTexture.format===$s)ue(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(w.depthTexture.format===Oa)ue(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function ne(R){const w=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");me(w.__webglFramebuffer,R)}else if(G){w.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[Y]),w.__webglDepthbuffer[Y]=t.createRenderbuffer(),ie(w.__webglDepthbuffer[Y],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),ie(w.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(R,w,G){const Y=i.get(R);w!==void 0&&V(Y.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&ne(R)}function Fe(R){const w=R.texture,G=i.get(R),Y=i.get(w);R.addEventListener("dispose",C);const ce=R.textures,se=R.isWebGLCubeRenderTarget===!0,Pe=ce.length>1;if(Pe||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=w.version,o.memory.textures++),se){G.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[ve]=[];for(let ge=0;ge<w.mipmaps.length;ge++)G.__webglFramebuffer[ve][ge]=t.createFramebuffer()}else G.__webglFramebuffer[ve]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let ve=0;ve<w.mipmaps.length;ve++)G.__webglFramebuffer[ve]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Pe)for(let ve=0,ge=ce.length;ve<ge;ve++){const ze=i.get(ce[ve]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&ue(R)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ve=0;ve<ce.length;ve++){const ge=ce[ve];G.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[ve]);const ze=s.convert(ge.format,ge.colorSpace),pe=s.convert(ge.type),Re=x(ge.internalFormat,ze,pe,ge.colorSpace,R.isXRRenderTarget===!0),qe=K(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,Re,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,G.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),ie(G.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),q(t.TEXTURE_CUBE_MAP,w);for(let ve=0;ve<6;ve++)if(w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)V(G.__webglFramebuffer[ve][ge],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ge);else V(G.__webglFramebuffer[ve],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);g(w)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let ve=0,ge=ce.length;ve<ge;ve++){const ze=ce[ve],pe=i.get(ze);n.bindTexture(t.TEXTURE_2D,pe.__webglTexture),q(t.TEXTURE_2D,ze),V(G.__webglFramebuffer,R,ze,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,0),g(ze)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let ve=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ve=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,Y.__webglTexture),q(ve,w),w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)V(G.__webglFramebuffer[ge],R,w,t.COLOR_ATTACHMENT0,ve,ge);else V(G.__webglFramebuffer,R,w,t.COLOR_ATTACHMENT0,ve,0);g(w)&&f(ve),n.unbindTexture()}R.depthBuffer&&ne(R)}function O(R){const w=R.textures;for(let G=0,Y=w.length;G<Y;G++){const ce=w[G];if(g(ce)){const se=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Pe=i.get(ce).__webglTexture;n.bindTexture(se,Pe),f(se),n.unbindTexture()}}}const ke=[],Z=[];function ae(R){if(R.samples>0){if(ue(R)===!1){const w=R.textures,G=R.width,Y=R.height;let ce=t.COLOR_BUFFER_BIT;const se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Pe=i.get(R),ve=w.length>1;if(ve)for(let ge=0;ge<w.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let ge=0;ge<w.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ce|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ce|=t.STENCIL_BUFFER_BIT)),ve){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[ge]);const ze=i.get(w[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ze,0)}t.blitFramebuffer(0,0,G,Y,0,0,G,Y,ce,t.NEAREST),l===!0&&(ke.length=0,Z.length=0,ke.push(t.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ke.push(se),Z.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Z)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let ge=0;ge<w.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[ge]);const ze=i.get(w[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function K(R){return Math.min(r.maxSamples,R.samples)}function ue(R){const w=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function le(R){const w=o.render.frame;u.get(R)!==w&&(u.set(R,w),R.update())}function Me(R,w){const G=R.colorSpace,Y=R.format,ce=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==mr&&G!==Zn&&(rt.getTransfer(G)===ht?(Y!==ai||ce!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function Le(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=M,this.setTexture2D=I,this.setTexture2DArray=z,this.setTexture3D=j,this.setTextureCube=J,this.rebindTextures=Ie,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=V,this.useMultisampledRTT=ue}function ub(t,e){function n(i,r=Zn){let s;const o=rt.getTransfer(r);if(i===ur)return t.UNSIGNED_BYTE;if(i===px)return t.UNSIGNED_SHORT_4_4_4_4;if(i===mx)return t.UNSIGNED_SHORT_5_5_5_1;if(i===D1)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===N1)return t.BYTE;if(i===I1)return t.SHORT;if(i===dx)return t.UNSIGNED_SHORT;if(i===fx)return t.INT;if(i===oo)return t.UNSIGNED_INT;if(i===Ai)return t.FLOAT;if(i===gu)return t.HALF_FLOAT;if(i===U1)return t.ALPHA;if(i===F1)return t.RGB;if(i===ai)return t.RGBA;if(i===O1)return t.LUMINANCE;if(i===k1)return t.LUMINANCE_ALPHA;if(i===$s)return t.DEPTH_COMPONENT;if(i===Oa)return t.DEPTH_STENCIL;if(i===gx)return t.RED;if(i===vx)return t.RED_INTEGER;if(i===z1)return t.RG;if(i===_x)return t.RG_INTEGER;if(i===xx)return t.RGBA_INTEGER;if(i===nh||i===ih||i===rh||i===sh)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===nh)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ih)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===nh)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ih)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rh)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sh)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gm||i===Wm||i===$m||i===jm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Gm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$m)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xm||i===qm||i===Ym)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Xm||i===qm)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ym)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zm||i===Km||i===Jm||i===Qm||i===eg||i===tg||i===ng||i===ig||i===rg||i===sg||i===og||i===ag||i===lg||i===cg)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zm)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Km)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jm)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qm)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===eg)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tg)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ng)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ig)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rg)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sg)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===og)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ag)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lg)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cg)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oh||i===ug||i===hg)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===oh)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ug)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hg)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===B1||i===dg||i===fg||i===pg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===oh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fg)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ya?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class hb extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jn extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const db={type:"move"};class Lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const g=n.getJointPose(v,i),f=this._getHandJoint(c,v);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(db)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Jn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const fb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new $t,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Di({vertexShader:fb,fragmentShader:pb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Je(new hr(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class gb extends fo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,m=null;const v=new mb,g=n.getContextAttributes();let f=null,x=null;const _=[],y=[],C=new de;let T=null;const A=new fn;A.layers.enable(1),A.viewport=new _t;const L=new fn;L.layers.enable(2),L.viewport=new _t;const E=[A,L],M=new hb;M.layers.enable(1),M.layers.enable(2);let U=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ie=_[V];return ie===void 0&&(ie=new Lh,_[V]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(V){let ie=_[V];return ie===void 0&&(ie=new Lh,_[V]=ie),ie.getGripSpace()},this.getHand=function(V){let ie=_[V];return ie===void 0&&(ie=new Lh,_[V]=ie),ie.getHandSpace()};function I(V){const ie=y.indexOf(V.inputSource);if(ie===-1)return;const me=_[ie];me!==void 0&&(me.update(V.inputSource,V.frame,c||o),me.dispatchEvent({type:V.type,data:V.inputSource}))}function z(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",j);for(let V=0;V<_.length;V++){const ie=y[V];ie!==null&&(y[V]=null,_[V].disconnect(ie))}U=null,B=null,v.reset(),e.setRenderTarget(f),p=null,d=null,h=null,r=null,x=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",z),r.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new $r(p.framebufferWidth,p.framebufferHeight,{format:ai,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ie=null,me=null,ne=null;g.depth&&(ne=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=g.stencil?Oa:$s,me=g.stencil?Ya:oo);const Ie={colorFormat:n.RGBA8,depthFormat:ne,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new $r(d.textureWidth,d.textureHeight,{format:ai,type:ur,depthTexture:new Fx(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(V){for(let ie=0;ie<V.removed.length;ie++){const me=V.removed[ie],ne=y.indexOf(me);ne>=0&&(y[ne]=null,_[ne].disconnect(me))}for(let ie=0;ie<V.added.length;ie++){const me=V.added[ie];let ne=y.indexOf(me);if(ne===-1){for(let Fe=0;Fe<_.length;Fe++)if(Fe>=y.length){y.push(me),ne=Fe;break}else if(y[Fe]===null){y[Fe]=me,ne=Fe;break}if(ne===-1)break}const Ie=_[ne];Ie&&Ie.connect(me)}}const J=new D,Q=new D;function N(V,ie,me){J.setFromMatrixPosition(ie.matrixWorld),Q.setFromMatrixPosition(me.matrixWorld);const ne=J.distanceTo(Q),Ie=ie.projectionMatrix.elements,Fe=me.projectionMatrix.elements,O=Ie[14]/(Ie[10]-1),ke=Ie[14]/(Ie[10]+1),Z=(Ie[9]+1)/Ie[5],ae=(Ie[9]-1)/Ie[5],K=(Ie[8]-1)/Ie[0],ue=(Fe[8]+1)/Fe[0],le=O*K,Me=O*ue,Le=ne/(-K+ue),R=Le*-K;ie.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(R),V.translateZ(Le),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const w=O+Le,G=ke+Le,Y=le-R,ce=Me+(ne-R),se=Z*ke/G*w,Pe=ae*ke/G*w;V.projectionMatrix.makePerspective(Y,ce,se,Pe,w,G),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function H(V,ie){ie===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ie.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;v.texture!==null&&(V.near=v.depthNear,V.far=v.depthFar),M.near=L.near=A.near=V.near,M.far=L.far=A.far=V.far,(U!==M.near||B!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,B=M.far,A.near=U,A.far=B,L.near=U,L.far=B,A.updateProjectionMatrix(),L.updateProjectionMatrix(),V.updateProjectionMatrix());const ie=V.parent,me=M.cameras;H(M,ie);for(let ne=0;ne<me.length;ne++)H(me[ne],ie);me.length===2?N(M,A,L):M.projectionMatrix.copy(A.projectionMatrix),q(V,M,ie)};function q(V,ie,me){me===null?V.matrix.copy(ie.matrixWorld):(V.matrix.copy(me.matrixWorld),V.matrix.invert(),V.matrix.multiply(ie.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ie.projectionMatrix),V.projectionMatrixInverse.copy(ie.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ka*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return v.texture!==null};let te=null;function Se(V,ie){if(u=ie.getViewerPose(c||o),m=ie,u!==null){const me=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let ne=!1;me.length!==M.cameras.length&&(M.cameras.length=0,ne=!0);for(let Fe=0;Fe<me.length;Fe++){const O=me[Fe];let ke=null;if(p!==null)ke=p.getViewport(O);else{const ae=h.getViewSubImage(d,O);ke=ae.viewport,Fe===0&&(e.setRenderTargetTextures(x,ae.colorTexture,d.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(x))}let Z=E[Fe];Z===void 0&&(Z=new fn,Z.layers.enable(Fe),Z.viewport=new _t,E[Fe]=Z),Z.matrix.fromArray(O.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(O.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(ke.x,ke.y,ke.width,ke.height),Fe===0&&(M.matrix.copy(Z.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ne===!0&&M.cameras.push(Z)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Fe=h.getDepthInformation(me[0]);Fe&&Fe.isValid&&Fe.texture&&v.init(e,Fe,r.renderState)}}for(let me=0;me<_.length;me++){const ne=y[me],Ie=_[me];ne!==null&&Ie!==void 0&&Ie.update(ne,ie,c||o)}v.render(e,M),te&&te(V,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),m=null}const Ue=new Dx;Ue.setAnimationLoop(Se),this.setAnimationLoop=function(V){te=V},this.dispose=function(){}}}const Tr=new ui,vb=new at;function _b(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Px(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,x,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(g,f):f.isMeshToonMaterial?(s(g,f),h(g,f)):f.isMeshPhongMaterial?(s(g,f),u(g,f)):f.isMeshStandardMaterial?(s(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,y)):f.isMeshMatcapMaterial?(s(g,f),m(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),v(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,x,_):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===ln&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===ln&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const x=e.get(f),_=x.envMap,y=x.envMapRotation;if(_&&(g.envMap.value=_,Tr.copy(y),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),g.envMapRotation.value.setFromMatrix4(vb.makeRotationFromEuler(Tr)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap){g.lightMap.value=f.lightMap;const C=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=f.lightMapIntensity*C,n(f.lightMap,g.lightMapTransform)}f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,x,_){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*x,g.scale.value=_*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,x){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ln&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function v(g,f){const x=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xb(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const y=_.program;i.uniformBlockBinding(x,y)}function c(x,_){let y=r[x.id];y===void 0&&(m(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",g));const C=_.program;i.updateUBOMapping(x,C);const T=e.render.frame;s[x.id]!==T&&(d(x),s[x.id]=T)}function u(x){const _=h();x.__bindingPointIndex=_;const y=t.createBuffer(),C=x.__size,T=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=r[x.id],y=x.uniforms,C=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,A=y.length;T<A;T++){const L=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,M=L.length;E<M;E++){const U=L[E];if(p(U,T,E,C)===!0){const B=U.__offset,I=Array.isArray(U.value)?U.value:[U.value];let z=0;for(let j=0;j<I.length;j++){const J=I[j],Q=v(J);typeof J=="number"||typeof J=="boolean"?(U.__data[0]=J,t.bufferSubData(t.UNIFORM_BUFFER,B+z,U.__data)):J.isMatrix3?(U.__data[0]=J.elements[0],U.__data[1]=J.elements[1],U.__data[2]=J.elements[2],U.__data[3]=0,U.__data[4]=J.elements[3],U.__data[5]=J.elements[4],U.__data[6]=J.elements[5],U.__data[7]=0,U.__data[8]=J.elements[6],U.__data[9]=J.elements[7],U.__data[10]=J.elements[8],U.__data[11]=0):(J.toArray(U.__data,z),z+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,_,y,C){const T=x.value,A=_+"_"+y;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const L=C[A];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return C[A]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function m(x){const _=x.uniforms;let y=0;const C=16;for(let A=0,L=_.length;A<L;A++){const E=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,U=E.length;M<U;M++){const B=E[M],I=Array.isArray(B.value)?B.value:[B.value];for(let z=0,j=I.length;z<j;z++){const J=I[z],Q=v(J),N=y%C;N!==0&&C-N<Q.boundary&&(y+=C-N),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=Q.storage}}}const T=y%C;return T>0&&(y+=C-T),x.__size=y,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function g(x){const _=x.target;_.removeEventListener("dispose",g);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Vx{constructor(e={}){const{canvas:n=fw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),m=new Int32Array(4);let v=null,g=null;const f=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this._useLegacyLights=!1,this.toneMapping=ar,this.toneMappingExposure=1;const _=this;let y=!1,C=0,T=0,A=null,L=-1,E=null;const M=new _t,U=new _t;let B=null;const I=new He(0);let z=0,j=n.width,J=n.height,Q=1,N=null,H=null;const q=new _t(0,0,j,J),te=new _t(0,0,j,J);let Se=!1;const Ue=new sp;let V=!1,ie=!1;const me=new at,ne=new D,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return A===null?Q:1}let O=i;function ke(b,k){return n.getContext(b,k)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${np}`),n.addEventListener("webglcontextlost",F,!1),n.addEventListener("webglcontextrestored",oe,!1),n.addEventListener("webglcontextcreationerror",ee,!1),O===null){const k="webgl2";if(O=ke(k,b),O===null)throw ke(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Z,ae,K,ue,le,Me,Le,R,w,G,Y,ce,se,Pe,ve,ge,ze,pe,Re,qe,De,Te,Ve,Ye;function pt(){Z=new CA(O),Z.init(),Te=new ub(O,Z),ae=new MA(O,Z,e,Te),K=new lb(O),ue=new LA(O),le=new q2,Me=new cb(O,Z,K,le,ae,Te,ue),Le=new EA(_),R=new bA(_),w=new kw(O),Ve=new yA(O,w),G=new RA(O,w,ue,Ve),Y=new IA(O,G,w,ue),Re=new NA(O,ae,Me),ge=new wA(le),ce=new X2(_,Le,R,Z,ae,Ve,ge),se=new _b(_,le),Pe=new Z2,ve=new nb(Z),pe=new xA(_,Le,R,K,Y,d,l),ze=new ab(_,Y,ae),Ye=new xb(O,ue,ae,K),qe=new SA(O,Z,ue),De=new PA(O,Z,ue),ue.programs=ce.programs,_.capabilities=ae,_.extensions=Z,_.properties=le,_.renderLists=Pe,_.shadowMap=ze,_.state=K,_.info=ue}pt();const Ge=new gb(_,O);this.xr=Ge,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=Z.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Z.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(j,J,!1))},this.getSize=function(b){return b.set(j,J)},this.setSize=function(b,k,X=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=b,J=k,n.width=Math.floor(b*Q),n.height=Math.floor(k*Q),X===!0&&(n.style.width=b+"px",n.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(j*Q,J*Q).floor()},this.setDrawingBufferSize=function(b,k,X){j=b,J=k,Q=X,n.width=Math.floor(b*X),n.height=Math.floor(k*X),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(M)},this.getViewport=function(b){return b.copy(q)},this.setViewport=function(b,k,X,W){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,k,X,W),K.viewport(M.copy(q).multiplyScalar(Q).round())},this.getScissor=function(b){return b.copy(te)},this.setScissor=function(b,k,X,W){b.isVector4?te.set(b.x,b.y,b.z,b.w):te.set(b,k,X,W),K.scissor(U.copy(te).multiplyScalar(Q).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(b){K.setScissorTest(Se=b)},this.setOpaqueSort=function(b){N=b},this.setTransparentSort=function(b){H=b},this.getClearColor=function(b){return b.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(b=!0,k=!0,X=!0){let W=0;if(b){let $=!1;if(A!==null){const _e=A.texture.format;$=_e===xx||_e===_x||_e===vx}if($){const _e=A.texture.type,P=_e===ur||_e===oo||_e===dx||_e===Ya||_e===px||_e===mx,re=pe.getClearColor(),fe=pe.getClearAlpha(),Ne=re.r,Oe=re.g,We=re.b;P?(p[0]=Ne,p[1]=Oe,p[2]=We,p[3]=fe,O.clearBufferuiv(O.COLOR,0,p)):(m[0]=Ne,m[1]=Oe,m[2]=We,m[3]=fe,O.clearBufferiv(O.COLOR,0,m))}else W|=O.COLOR_BUFFER_BIT}k&&(W|=O.DEPTH_BUFFER_BIT),X&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",F,!1),n.removeEventListener("webglcontextrestored",oe,!1),n.removeEventListener("webglcontextcreationerror",ee,!1),Pe.dispose(),ve.dispose(),le.dispose(),Le.dispose(),R.dispose(),Y.dispose(),Ve.dispose(),Ye.dispose(),ce.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",et),Ge.removeEventListener("sessionend",Ln),Ft.stop()};function F(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=ue.autoReset,k=ze.enabled,X=ze.autoUpdate,W=ze.needsUpdate,$=ze.type;pt(),ue.autoReset=b,ze.enabled=k,ze.autoUpdate=X,ze.needsUpdate=W,ze.type=$}function ee(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ye(b){const k=b.target;k.removeEventListener("dispose",ye),we(k)}function we(b){Ke(b),le.remove(b)}function Ke(b){const k=le.get(b).programs;k!==void 0&&(k.forEach(function(X){ce.releaseProgram(X)}),b.isShaderMaterial&&ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,X,W,$,_e){k===null&&(k=Ie);const P=$.isMesh&&$.matrixWorld.determinant()<0,re=Ja(b,k,X,W,$);K.setMaterial(W,P);let fe=X.index,Ne=1;if(W.wireframe===!0){if(fe=G.getWireframeAttribute(X),fe===void 0)return;Ne=2}const Oe=X.drawRange,We=X.attributes.position;let xt=Oe.start*Ne,Ot=(Oe.start+Oe.count)*Ne;_e!==null&&(xt=Math.max(xt,_e.start*Ne),Ot=Math.min(Ot,(_e.start+_e.count)*Ne)),fe!==null?(xt=Math.max(xt,0),Ot=Math.min(Ot,fe.count)):We!=null&&(xt=Math.max(xt,0),Ot=Math.min(Ot,We.count));const xn=Ot-xt;if(xn<0||xn===1/0)return;Ve.setup($,W,re,X,fe);let fi,nt=qe;if(fe!==null&&(fi=w.get(fe),nt=De,nt.setIndex(fi)),$.isMesh)W.wireframe===!0?(K.setLineWidth(W.wireframeLinewidth*Fe()),nt.setMode(O.LINES)):nt.setMode(O.TRIANGLES);else if($.isLine){let Be=W.linewidth;Be===void 0&&(Be=1),K.setLineWidth(Be*Fe()),$.isLineSegments?nt.setMode(O.LINES):$.isLineLoop?nt.setMode(O.LINE_LOOP):nt.setMode(O.LINE_STRIP)}else $.isPoints?nt.setMode(O.POINTS):$.isSprite&&nt.setMode(O.TRIANGLES);if($.isBatchedMesh)$._multiDrawInstances!==null?nt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances):nt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)nt.renderInstances(xt,xn,$.count);else if(X.isInstancedBufferGeometry){const Be=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,wo=Math.min(X.instanceCount,Be);nt.renderInstances(xt,xn,wo)}else nt.render(xt,xn)};function st(b,k,X){b.transparent===!0&&b.side===En&&b.forceSinglePass===!1?(b.side=ln,b.needsUpdate=!0,_r(b,k,X),b.side=Vn,b.needsUpdate=!0,_r(b,k,X),b.side=En):_r(b,k,X)}this.compile=function(b,k,X=null){X===null&&(X=b),g=ve.get(X),g.init(k),x.push(g),X.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),b!==X&&b.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),g.setupLights(_._useLegacyLights);const W=new Set;return b.traverse(function($){const _e=$.material;if(_e)if(Array.isArray(_e))for(let P=0;P<_e.length;P++){const re=_e[P];st(re,X,$),W.add(re)}else st(_e,X,$),W.add(_e)}),x.pop(),g=null,W},this.compileAsync=function(b,k,X=null){const W=this.compile(b,k,X);return new Promise($=>{function _e(){if(W.forEach(function(P){le.get(P).currentProgram.isReady()&&W.delete(P)}),W.size===0){$(b);return}setTimeout(_e,10)}Z.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let mt=null;function Tt(b){mt&&mt(b)}function et(){Ft.stop()}function Ln(){Ft.start()}const Ft=new Dx;Ft.setAnimationLoop(Tt),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(b){mt=b,Ge.setAnimationLoop(b),b===null?Ft.stop():Ft.start()},Ge.addEventListener("sessionstart",et),Ge.addEventListener("sessionend",Ln),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(k),k=Ge.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,k,A),g=ve.get(b,x.length),g.init(k),x.push(g),me.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ue.setFromProjectionMatrix(me),ie=this.localClippingEnabled,V=ge.init(this.clippingPlanes,ie),v=Pe.get(b,f.length),v.init(),f.push(v),vo(b,k,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(N,H);const X=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1;X&&pe.addToRenderList(v,b),this.info.render.frame++,V===!0&&ge.beginShadows();const W=g.state.shadowsArray;ze.render(W,b,k),V===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=v.opaque,_e=v.transmissive;if(g.setupLights(_._useLegacyLights),k.isArrayCamera){const P=k.cameras;if(_e.length>0)for(let re=0,fe=P.length;re<fe;re++){const Ne=P[re];xo($,_e,b,Ne)}X&&pe.render(b);for(let re=0,fe=P.length;re<fe;re++){const Ne=P[re];_o(v,b,Ne,Ne.viewport)}}else _e.length>0&&xo($,_e,b,k),X&&pe.render(b),_o(v,b,k);A!==null&&(Me.updateMultisampleRenderTarget(A),Me.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(_,b,k),Ve.resetDefaultState(),L=-1,E=null,x.pop(),x.length>0?(g=x[x.length-1],V===!0&&ge.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function vo(b,k,X,W){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ue.intersectsSprite(b)){W&&ne.setFromMatrixPosition(b.matrixWorld).applyMatrix4(me);const P=Y.update(b),re=b.material;re.visible&&v.push(b,P,re,X,ne.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ue.intersectsObject(b))){const P=Y.update(b),re=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ne.copy(b.boundingSphere.center)):(P.boundingSphere===null&&P.computeBoundingSphere(),ne.copy(P.boundingSphere.center)),ne.applyMatrix4(b.matrixWorld).applyMatrix4(me)),Array.isArray(re)){const fe=P.groups;for(let Ne=0,Oe=fe.length;Ne<Oe;Ne++){const We=fe[Ne],xt=re[We.materialIndex];xt&&xt.visible&&v.push(b,P,xt,X,ne.z,We)}}else re.visible&&v.push(b,P,re,X,ne.z,null)}}const _e=b.children;for(let P=0,re=_e.length;P<re;P++)vo(_e[P],k,X,W)}function _o(b,k,X,W){const $=b.opaque,_e=b.transmissive,P=b.transparent;g.setupLightsView(X),V===!0&&ge.setGlobalState(_.clippingPlanes,X),W&&K.viewport(M.copy(W)),$.length>0&&vr($,k,X),_e.length>0&&vr(_e,k,X),P.length>0&&vr(P,k,X),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function xo(b,k,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[W.id]===void 0&&(g.state.transmissionRenderTarget[W.id]=new $r(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?gu:ur,minFilter:Ti,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const _e=g.state.transmissionRenderTarget[W.id],P=W.viewport||M;_e.setSize(P.z,P.w);const re=_.getRenderTarget();_.setRenderTarget(_e),_.getClearColor(I),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),_.clear();const fe=_.toneMapping;_.toneMapping=ar;const Ne=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),g.setupLightsView(W),V===!0&&ge.setGlobalState(_.clippingPlanes,W),vr(b,X,W),Me.updateMultisampleRenderTarget(_e),Me.updateRenderTargetMipmap(_e),Z.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let We=0,xt=k.length;We<xt;We++){const Ot=k[We],xn=Ot.object,fi=Ot.geometry,nt=Ot.material,Be=Ot.group;if(nt.side===En&&xn.layers.test(W.layers)){const wo=nt.side;nt.side=ln,nt.needsUpdate=!0,yo(xn,X,W,fi,nt,Be),nt.side=wo,nt.needsUpdate=!0,Oe=!0}}Oe===!0&&(Me.updateMultisampleRenderTarget(_e),Me.updateRenderTargetMipmap(_e))}_.setRenderTarget(re),_.setClearColor(I,z),Ne!==void 0&&(W.viewport=Ne),_.toneMapping=fe}function vr(b,k,X){const W=k.isScene===!0?k.overrideMaterial:null;for(let $=0,_e=b.length;$<_e;$++){const P=b[$],re=P.object,fe=P.geometry,Ne=W===null?P.material:W,Oe=P.group;re.layers.test(X.layers)&&yo(re,k,X,fe,Ne,Oe)}}function yo(b,k,X,W,$,_e){b.onBeforeRender(_,k,X,W,$,_e),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(_,k,X,W,b,_e),$.transparent===!0&&$.side===En&&$.forceSinglePass===!1?($.side=ln,$.needsUpdate=!0,_.renderBufferDirect(X,k,W,$,b,_e),$.side=Vn,$.needsUpdate=!0,_.renderBufferDirect(X,k,W,$,b,_e),$.side=En):_.renderBufferDirect(X,k,W,$,b,_e),b.onAfterRender(_,k,X,W,$,_e)}function _r(b,k,X){k.isScene!==!0&&(k=Ie);const W=le.get(b),$=g.state.lights,_e=g.state.shadowsArray,P=$.state.version,re=ce.getParameters(b,$.state,_e,k,X),fe=ce.getProgramCacheKey(re);let Ne=W.programs;W.environment=b.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(b.isMeshStandardMaterial?R:Le).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Ne===void 0&&(b.addEventListener("dispose",ye),Ne=new Map,W.programs=Ne);let Oe=Ne.get(fe);if(Oe!==void 0){if(W.currentProgram===Oe&&W.lightsStateVersion===P)return Mo(b,re),Oe}else re.uniforms=ce.getUniforms(b),b.onBuild(X,re,_),b.onBeforeCompile(re,_),Oe=ce.acquireProgram(re,fe),Ne.set(fe,Oe),W.uniforms=re.uniforms;const We=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(We.clippingPlanes=ge.uniform),Mo(b,re),W.needsLights=el(b),W.lightsStateVersion=P,W.needsLights&&(We.ambientLightColor.value=$.state.ambient,We.lightProbe.value=$.state.probe,We.directionalLights.value=$.state.directional,We.directionalLightShadows.value=$.state.directionalShadow,We.spotLights.value=$.state.spot,We.spotLightShadows.value=$.state.spotShadow,We.rectAreaLights.value=$.state.rectArea,We.ltc_1.value=$.state.rectAreaLTC1,We.ltc_2.value=$.state.rectAreaLTC2,We.pointLights.value=$.state.point,We.pointLightShadows.value=$.state.pointShadow,We.hemisphereLights.value=$.state.hemi,We.directionalShadowMap.value=$.state.directionalShadowMap,We.directionalShadowMatrix.value=$.state.directionalShadowMatrix,We.spotShadowMap.value=$.state.spotShadowMap,We.spotLightMatrix.value=$.state.spotLightMatrix,We.spotLightMap.value=$.state.spotLightMap,We.pointShadowMap.value=$.state.pointShadowMap,We.pointShadowMatrix.value=$.state.pointShadowMatrix),W.currentProgram=Oe,W.uniformsList=null,Oe}function So(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=mc.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Mo(b,k){const X=le.get(b);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Ja(b,k,X,W,$){k.isScene!==!0&&(k=Ie),Me.resetTextureUnits();const _e=k.fog,P=W.isMeshStandardMaterial?k.environment:null,re=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:mr,fe=(W.isMeshStandardMaterial?R:Le).get(W.envMap||P),Ne=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Oe=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),We=!!X.morphAttributes.position,xt=!!X.morphAttributes.normal,Ot=!!X.morphAttributes.color;let xn=ar;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(xn=_.toneMapping);const fi=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,nt=fi!==void 0?fi.length:0,Be=le.get(W),wo=g.state.lights;if(V===!0&&(ie===!0||b!==E)){const Nn=b===E&&W.id===L;ge.setState(W,b,Nn)}let gt=!1;W.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==wo.state.version||Be.outputColorSpace!==re||$.isBatchedMesh&&Be.batching===!1||!$.isBatchedMesh&&Be.batching===!0||$.isInstancedMesh&&Be.instancing===!1||!$.isInstancedMesh&&Be.instancing===!0||$.isSkinnedMesh&&Be.skinning===!1||!$.isSkinnedMesh&&Be.skinning===!0||$.isInstancedMesh&&Be.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Be.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Be.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Be.instancingMorph===!1&&$.morphTexture!==null||Be.envMap!==fe||W.fog===!0&&Be.fog!==_e||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ge.numPlanes||Be.numIntersection!==ge.numIntersection)||Be.vertexAlphas!==Ne||Be.vertexTangents!==Oe||Be.morphTargets!==We||Be.morphNormals!==xt||Be.morphColors!==Ot||Be.toneMapping!==xn||Be.morphTargetsCount!==nt)&&(gt=!0):(gt=!0,Be.__version=W.version);let xr=Be.currentProgram;gt===!0&&(xr=_r(W,k,$));let Cp=!1,Eo=!1,Au=!1;const Xt=xr.getUniforms(),Fi=Be.uniforms;if(K.useProgram(xr.program)&&(Cp=!0,Eo=!0,Au=!0),W.id!==L&&(L=W.id,Eo=!0),Cp||E!==b){Xt.setValue(O,"projectionMatrix",b.projectionMatrix),Xt.setValue(O,"viewMatrix",b.matrixWorldInverse);const Nn=Xt.map.cameraPosition;Nn!==void 0&&Nn.setValue(O,ne.setFromMatrixPosition(b.matrixWorld)),ae.logarithmicDepthBuffer&&Xt.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Xt.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,Eo=!0,Au=!0)}if($.isSkinnedMesh){Xt.setOptional(O,$,"bindMatrix"),Xt.setOptional(O,$,"bindMatrixInverse");const Nn=$.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),Xt.setValue(O,"boneTexture",Nn.boneTexture,Me))}$.isBatchedMesh&&(Xt.setOptional(O,$,"batchingTexture"),Xt.setValue(O,"batchingTexture",$._matricesTexture,Me));const bu=X.morphAttributes;if((bu.position!==void 0||bu.normal!==void 0||bu.color!==void 0)&&Re.update($,X,xr),(Eo||Be.receiveShadow!==$.receiveShadow)&&(Be.receiveShadow=$.receiveShadow,Xt.setValue(O,"receiveShadow",$.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Fi.envMap.value=fe,Fi.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(Fi.envMapIntensity.value=k.environmentIntensity),Eo&&(Xt.setValue(O,"toneMappingExposure",_.toneMappingExposure),Be.needsLights&&Qa(Fi,Au),_e&&W.fog===!0&&se.refreshFogUniforms(Fi,_e),se.refreshMaterialUniforms(Fi,W,Q,J,g.state.transmissionRenderTarget[b.id]),mc.upload(O,So(Be),Fi,Me)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(mc.upload(O,So(Be),Fi,Me),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Xt.setValue(O,"center",$.center),Xt.setValue(O,"modelViewMatrix",$.modelViewMatrix),Xt.setValue(O,"normalMatrix",$.normalMatrix),Xt.setValue(O,"modelMatrix",$.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Nn=W.uniformsGroups;for(let Cu=0,My=Nn.length;Cu<My;Cu++){const Rp=Nn[Cu];Ye.update(Rp,xr),Ye.bind(Rp,xr)}}return xr}function Qa(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function el(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,k,X){le.get(b.texture).__webglTexture=k,le.get(b.depthTexture).__webglTexture=X;const W=le.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=X===void 0,W.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,k){const X=le.get(b);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,X=0){A=b,C=k,T=X;let W=!0,$=null,_e=!1,P=!1;if(b){const fe=le.get(b);fe.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(O.FRAMEBUFFER,null),W=!1):fe.__webglFramebuffer===void 0?Me.setupRenderTarget(b):fe.__hasExternalTextures&&Me.rebindTextures(b,le.get(b.texture).__webglTexture,le.get(b.depthTexture).__webglTexture);const Ne=b.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(P=!0);const Oe=le.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Oe[k])?$=Oe[k][X]:$=Oe[k],_e=!0):b.samples>0&&Me.useMultisampledRTT(b)===!1?$=le.get(b).__webglMultisampledFramebuffer:Array.isArray(Oe)?$=Oe[X]:$=Oe,M.copy(b.viewport),U.copy(b.scissor),B=b.scissorTest}else M.copy(q).multiplyScalar(Q).floor(),U.copy(te).multiplyScalar(Q).floor(),B=Se;if(K.bindFramebuffer(O.FRAMEBUFFER,$)&&W&&K.drawBuffers(b,$),K.viewport(M),K.scissor(U),K.setScissorTest(B),_e){const fe=le.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,fe.__webglTexture,X)}else if(P){const fe=le.get(b.texture),Ne=k||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,fe.__webglTexture,X||0,Ne)}L=-1},this.readRenderTargetPixels=function(b,k,X,W,$,_e,P){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let re=le.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&P!==void 0&&(re=re[P]),re){K.bindFramebuffer(O.FRAMEBUFFER,re);try{const fe=b.texture,Ne=fe.format,Oe=fe.type;if(!ae.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-W&&X>=0&&X<=b.height-$&&O.readPixels(k,X,W,$,Te.convert(Ne),Te.convert(Oe),_e)}finally{const fe=A!==null?le.get(A).__webglFramebuffer:null;K.bindFramebuffer(O.FRAMEBUFFER,fe)}}},this.copyFramebufferToTexture=function(b,k,X=0){const W=Math.pow(2,-X),$=Math.floor(k.image.width*W),_e=Math.floor(k.image.height*W);Me.setTexture2D(k,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,b.x,b.y,$,_e),K.unbindTexture()},this.copyTextureToTexture=function(b,k,X,W=0){const $=k.image.width,_e=k.image.height,P=Te.convert(X.format),re=Te.convert(X.type);Me.setTexture2D(X,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment),k.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,W,b.x,b.y,$,_e,P,re,k.image.data):k.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,W,b.x,b.y,k.mipmaps[0].width,k.mipmaps[0].height,P,k.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,W,b.x,b.y,P,re,k.image),W===0&&X.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(b,k,X,W,$=0){const _e=b.max.x-b.min.x,P=b.max.y-b.min.y,re=b.max.z-b.min.z,fe=Te.convert(W.format),Ne=Te.convert(W.type);let Oe;if(W.isData3DTexture)Me.setTexture3D(W,0),Oe=O.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)Me.setTexture2DArray(W,0),Oe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const We=O.getParameter(O.UNPACK_ROW_LENGTH),xt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ot=O.getParameter(O.UNPACK_SKIP_PIXELS),xn=O.getParameter(O.UNPACK_SKIP_ROWS),fi=O.getParameter(O.UNPACK_SKIP_IMAGES),nt=X.isCompressedTexture?X.mipmaps[$]:X.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,nt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,nt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,b.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,b.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,b.min.z),X.isDataTexture||X.isData3DTexture?O.texSubImage3D(Oe,$,k.x,k.y,k.z,_e,P,re,fe,Ne,nt.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Oe,$,k.x,k.y,k.z,_e,P,re,fe,nt.data):O.texSubImage3D(Oe,$,k.x,k.y,k.z,_e,P,re,fe,Ne,nt),O.pixelStorei(O.UNPACK_ROW_LENGTH,We),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ot),O.pixelStorei(O.UNPACK_SKIP_ROWS,xn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,fi),$===0&&W.generateMipmaps&&O.generateMipmap(Oe),K.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Me.setTextureCube(b,0):b.isData3DTexture?Me.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Me.setTexture2DArray(b,0):Me.setTexture2D(b,0),K.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,K.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ip?"display-p3":"srgb",n.unpackColorSpace=rt.workingColorSpace===vu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ap{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=n,this.far=i}clone(){return new ap(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class lp extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class yb extends $t{constructor(e=null,n=1,i=1,r,s,o,a,l,c=mn,u=mn,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class s0 extends ti{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vs=new at,o0=new at,Bl=[],a0=new gr,Sb=new at,Oo=new Je,ko=new po;class Mb extends Je{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new s0(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Sb)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new gr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,vs),a0.copy(e.boundingBox).applyMatrix4(vs),this.boundingBox.union(a0)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new po),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,vs),ko.copy(e.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(ko)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Oo.geometry=this.geometry,Oo.material=this.material,Oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ko.copy(this.boundingSphere),ko.applyMatrix4(i),e.ray.intersectsSphere(ko)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,vs),o0.multiplyMatrices(i,vs),Oo.matrixWorld=o0,Oo.raycast(e,Bl);for(let o=0,a=Bl.length;o<a;o++){const l=Bl[o];l.instanceId=s,l.object=this,n.push(l)}Bl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new s0(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new yb(new Float32Array(r*this.count),r,this.count,gx,Ai));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Gx extends Kr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jc=new D,Xc=new D,l0=new at,zo=new Tx,Hl=new po,Nh=new D,c0=new D;class wb extends Nt{constructor(e=new Ut,n=new Gx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)jc.fromBufferAttribute(n,r-1),Xc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=jc.distanceTo(Xc);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(r),Hl.radius+=s,e.ray.intersectsSphere(Hl)===!1)return;l0.copy(r).invert(),zo.copy(e.ray).applyMatrix4(l0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=p,g=m-1;v<g;v+=c){const f=u.getX(v),x=u.getX(v+1),_=Vl(this,e,zo,l,f,x);_&&n.push(_)}if(this.isLineLoop){const v=u.getX(m-1),g=u.getX(p),f=Vl(this,e,zo,l,v,g);f&&n.push(f)}}else{const p=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=p,g=m-1;v<g;v+=c){const f=Vl(this,e,zo,l,v,v+1);f&&n.push(f)}if(this.isLineLoop){const v=Vl(this,e,zo,l,m-1,p);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Vl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(jc.fromBufferAttribute(o,r),Xc.fromBufferAttribute(o,s),n.distanceSqToSegment(jc,Xc,Nh,c0)>i)return;Nh.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Nh);if(!(l<e.near||l>e.far))return{distance:l,point:c0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const u0=new D,h0=new D;class Eb extends wb{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)u0.fromBufferAttribute(n,r),h0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+u0.distanceTo(h0);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cp extends $t{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,p=(o-u)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new de:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new D,r=[],s=[],o=[],a=new D,l=new at;for(let p=0;p<=e;p++){const m=p/e;r[p]=this.getTangentAt(m,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Pt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Pt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class up extends hi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new de){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Tb extends up{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function hp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Gl=new D,Ih=new hp,Dh=new hp,Uh=new hp;class Ab extends hi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new D){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Gl.subVectors(r[0],r[1]).add(r[0]),c=Gl);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Gl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Gl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Ih.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,v,g),Dh.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,v,g),Uh.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,v,g)}else this.curveType==="catmullrom"&&(Ih.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Dh.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Uh.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Ih.calc(l),Dh.calc(l),Uh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function d0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function bb(t,e){const n=1-t;return n*n*e}function Cb(t,e){return 2*(1-t)*t*e}function Rb(t,e){return t*t*e}function pa(t,e,n,i){return bb(t,e)+Cb(t,n)+Rb(t,i)}function Pb(t,e){const n=1-t;return n*n*n*e}function Lb(t,e){const n=1-t;return 3*n*n*t*e}function Nb(t,e){return 3*(1-t)*t*t*e}function Ib(t,e){return t*t*t*e}function ma(t,e,n,i,r){return Pb(t,e)+Lb(t,n)+Nb(t,i)+Ib(t,r)}class Wx extends hi{constructor(e=new de,n=new de,i=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new de){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ma(e,r.x,s.x,o.x,a.x),ma(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Db extends hi{constructor(e=new D,n=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ma(e,r.x,s.x,o.x,a.x),ma(e,r.y,s.y,o.y,a.y),ma(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $x extends hi{constructor(e=new de,n=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new de){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new de){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ub extends hi{constructor(e=new D,n=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new D){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new D){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jx extends hi{constructor(e=new de,n=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new de){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(pa(e,r.x,s.x,o.x),pa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fb extends hi{constructor(e=new D,n=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(pa(e,r.x,s.x,o.x),pa(e,r.y,s.y,o.y),pa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xx extends hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new de){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(d0(a,l.x,c.x,u.x,h.x),d0(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new de().fromArray(r))}return this}}var Zd=Object.freeze({__proto__:null,ArcCurve:Tb,CatmullRomCurve3:Ab,CubicBezierCurve:Wx,CubicBezierCurve3:Db,EllipseCurve:up,LineCurve:$x,LineCurve3:Ub,QuadraticBezierCurve:jx,QuadraticBezierCurve3:Fb,SplineCurve:Xx});class Ob extends hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zd[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Zd[r.type]().fromJSON(r))}return this}}class qc extends Ob{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new $x(this.currentPoint.clone(),new de(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new jx(this.currentPoint.clone(),new de(e,n),new de(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new Wx(this.currentPoint.clone(),new de(e,n),new de(i,r),new de(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Xx(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new up(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class dp extends Ut{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=Pt(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/n,h=new D,d=new de,p=new D,m=new D,v=new D;let g=0,f=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,f=e[x+1].y-e[x].y,p.x=f*1,p.y=-g,p.z=f*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[x+1].x-e[x].x,f=e[x+1].y-e[x].y,p.x=f*1,p.y=-g,p.z=f*0,m.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(m)}for(let x=0;x<=n;x++){const _=i+x*u*r,y=Math.sin(_),C=Math.cos(_);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*y,h.y=e[T].y,h.z=e[T].x*C,o.push(h.x,h.y,h.z),d.x=x/n,d.y=T/(e.length-1),a.push(d.x,d.y);const A=l[3*T+0]*y,L=l[3*T+1],E=l[3*T+0]*C;c.push(A,L,E)}}for(let x=0;x<n;x++)for(let _=0;_<e.length-1;_++){const y=_+x*e.length,C=y,T=y+e.length,A=y+e.length+1,L=y+1;s.push(C,T,L),s.push(A,L,T)}this.setIndex(s),this.setAttribute("position",new tt(o,3)),this.setAttribute("uv",new tt(a,2)),this.setAttribute("normal",new tt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dp(e.points,e.segments,e.phiStart,e.phiLength)}}class Yc extends Ut{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new D,u=new de;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=n;h++,d+=3){const p=i+h/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class fp extends Ut{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],p=[];let m=0;const v=[],g=i/2;let f=0;x(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(p,2));function x(){const y=new D,C=new D;let T=0;const A=(n-e)/i;for(let L=0;L<=s;L++){const E=[],M=L/s,U=M*(n-e)+e;for(let B=0;B<=r;B++){const I=B/r,z=I*l+a,j=Math.sin(z),J=Math.cos(z);C.x=U*j,C.y=-M*i+g,C.z=U*J,h.push(C.x,C.y,C.z),y.set(j,A,J).normalize(),d.push(y.x,y.y,y.z),p.push(I,1-M),E.push(m++)}v.push(E)}for(let L=0;L<r;L++)for(let E=0;E<s;E++){const M=v[E][L],U=v[E+1][L],B=v[E+1][L+1],I=v[E][L+1];u.push(M,U,I),u.push(U,B,I),T+=6}c.addGroup(f,T,0),f+=T}function _(y){const C=m,T=new de,A=new D;let L=0;const E=y===!0?e:n,M=y===!0?1:-1;for(let B=1;B<=r;B++)h.push(0,g*M,0),d.push(0,M,0),p.push(.5,.5),m++;const U=m;for(let B=0;B<=r;B++){const z=B/r*l+a,j=Math.cos(z),J=Math.sin(z);A.x=E*J,A.y=g*M,A.z=E*j,h.push(A.x,A.y,A.z),d.push(0,M,0),T.x=j*.5+.5,T.y=J*.5*M+.5,p.push(T.x,T.y),m++}for(let B=0;B<r;B++){const I=C+B,z=U+B;y===!0?u.push(z,z+1,I):u.push(z+1,z,I),L+=3}c.addGroup(f,L,y===!0?1:2),f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Wl=new D,$l=new D,Fh=new D,jl=new Kn;class kb extends Ut{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(js*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},p=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:v,b:g,c:f}=jl;if(v.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),jl.getNormal(Fh),h[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){const _=(x+1)%3,y=h[x],C=h[_],T=jl[u[x]],A=jl[u[_]],L=`${y}_${C}`,E=`${C}_${y}`;E in d&&d[E]?(Fh.dot(d[E].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(A.x,A.y,A.z)),d[E]=null):L in d||(d[L]={index0:c[x],index1:c[_],normal:Fh.clone()})}}for(const m in d)if(d[m]){const{index0:v,index1:g}=d[m];Wl.fromBufferAttribute(a,v),$l.fromBufferAttribute(a,g),p.push(Wl.x,Wl.y,Wl.z),p.push($l.x,$l.y,$l.z)}this.setAttribute("position",new tt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class yu extends qc{constructor(e){super(e),this.uuid=Zr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new qc().fromJSON(r))}return this}}const zb={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=qx(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,p;if(i&&(s=Wb(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let m=n;m<r;m+=n)h=t[m],d=t[m+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Ba(s,o,n,a,l,p,0),o}};function qx(t,e,n,i,r){let s,o;if(r===tC(t,e,n,i)>0)for(s=e;s<n;s+=i)o=f0(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=f0(s,t[s],t[s+1],o);return o&&Su(o,o.next)&&(Va(o),o=o.next),o}function jr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Su(n,n.next)||St(n.prev,n,n.next)===0)){if(Va(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Ba(t,e,n,i,r,s,o){if(!t)return;!o&&s&&Yb(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?Hb(t,i,r,s):Bb(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),Va(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=Vb(jr(t),e,n),Ba(t,e,n,i,r,s,2)):o===2&&Gb(t,e,n,i,r,s):Ba(jr(t),e,n,i,r,s,1);break}}}function Bb(t){const e=t.prev,n=t,i=t.next;if(St(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=p&&Os(r,a,s,l,o,c,m.x,m.y)&&St(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Hb(t,e,n,i){const r=t.prev,s=t,o=t.next;if(St(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,m=u<h?u<d?u:d:h<d?h:d,v=a>l?a>c?a:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,f=Kd(p,m,e,n,i),x=Kd(v,g,e,n,i);let _=t.prevZ,y=t.nextZ;for(;_&&_.z>=f&&y&&y.z<=x;){if(_.x>=p&&_.x<=v&&_.y>=m&&_.y<=g&&_!==r&&_!==o&&Os(a,u,l,h,c,d,_.x,_.y)&&St(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=v&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&Os(a,u,l,h,c,d,y.x,y.y)&&St(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=v&&_.y>=m&&_.y<=g&&_!==r&&_!==o&&Os(a,u,l,h,c,d,_.x,_.y)&&St(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=x;){if(y.x>=p&&y.x<=v&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&Os(a,u,l,h,c,d,y.x,y.y)&&St(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Vb(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Su(r,s)&&Yx(r,i,i.next,s)&&Ha(r,s)&&Ha(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Va(i),Va(i.next),i=t=s),i=i.next}while(i!==t);return jr(i)}function Gb(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Jb(o,a)){let l=Zx(o,a);o=jr(o,o.next),l=jr(l,l.next),Ba(o,e,n,i,r,s,0),Ba(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function Wb(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=qx(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(Kb(c));for(r.sort($b),s=0;s<r.length;s++)n=jb(r[s],n);return n}function $b(t,e){return t.x-e.x}function jb(t,e){const n=Xb(t,e);if(!n)return e;const i=Zx(n,t);return jr(i,i.next),jr(n,n.next)}function Xb(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=s&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Os(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),Ha(n,t)&&(h<u||h===u&&(n.x>r.x||n.x===r.x&&qb(r,n)))&&(r=n,u=h)),n=n.next;while(n!==a);return r}function qb(t,e){return St(t.prev,t,e.prev)<0&&St(e.next,t,t.next)<0}function Yb(t,e,n,i){let r=t;do r.z===0&&(r.z=Kd(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,Zb(r)}function Zb(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function Kd(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Kb(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Os(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function Jb(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Qb(t,e)&&(Ha(t,e)&&Ha(e,t)&&eC(t,e)&&(St(t.prev,t,e.prev)||St(t,e.prev,e))||Su(t,e)&&St(t.prev,t,t.next)>0&&St(e.prev,e,e.next)>0)}function St(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Su(t,e){return t.x===e.x&&t.y===e.y}function Yx(t,e,n,i){const r=ql(St(t,e,n)),s=ql(St(t,e,i)),o=ql(St(n,i,t)),a=ql(St(n,i,e));return!!(r!==s&&o!==a||r===0&&Xl(t,n,e)||s===0&&Xl(t,i,e)||o===0&&Xl(n,t,i)||a===0&&Xl(n,e,i))}function Xl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function ql(t){return t>0?1:t<0?-1:0}function Qb(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Yx(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Ha(t,e){return St(t.prev,t,t.next)<0?St(t,e,t.next)>=0&&St(t,t.prev,e)>=0:St(t,e,t.prev)<0||St(t,t.next,e)<0}function eC(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Zx(t,e){const n=new Jd(t.i,t.x,t.y),i=new Jd(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function f0(t,e,n,i){const r=new Jd(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Va(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Jd(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function tC(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class ga{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ga.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];p0(e),m0(i,e);let o=e.length;n.forEach(p0);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,m0(i,n[l]);const a=zb.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function p0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function m0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Ka extends Ut{constructor(e=new yu([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new tt(r,3)),this.setAttribute("uv",new tt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,m=n.bevelSize!==void 0?n.bevelSize:p-.1,v=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3;const f=n.extrudePath,x=n.UVGenerator!==void 0?n.UVGenerator:nC;let _,y=!1,C,T,A,L;f&&(_=f.getSpacedPoints(u),y=!0,d=!1,C=f.computeFrenetFrames(u,!1),T=new D,A=new D,L=new D),d||(g=0,p=0,m=0,v=0);const E=a.extractPoints(c);let M=E.shape;const U=E.holes;if(!ga.isClockWise(M)){M=M.reverse();for(let Z=0,ae=U.length;Z<ae;Z++){const K=U[Z];ga.isClockWise(K)&&(U[Z]=K.reverse())}}const I=ga.triangulateShape(M,U),z=M;for(let Z=0,ae=U.length;Z<ae;Z++){const K=U[Z];M=M.concat(K)}function j(Z,ae,K){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(ae,K)}const J=M.length,Q=I.length;function N(Z,ae,K){let ue,le,Me;const Le=Z.x-ae.x,R=Z.y-ae.y,w=K.x-Z.x,G=K.y-Z.y,Y=Le*Le+R*R,ce=Le*G-R*w;if(Math.abs(ce)>Number.EPSILON){const se=Math.sqrt(Y),Pe=Math.sqrt(w*w+G*G),ve=ae.x-R/se,ge=ae.y+Le/se,ze=K.x-G/Pe,pe=K.y+w/Pe,Re=((ze-ve)*G-(pe-ge)*w)/(Le*G-R*w);ue=ve+Le*Re-Z.x,le=ge+R*Re-Z.y;const qe=ue*ue+le*le;if(qe<=2)return new de(ue,le);Me=Math.sqrt(qe/2)}else{let se=!1;Le>Number.EPSILON?w>Number.EPSILON&&(se=!0):Le<-Number.EPSILON?w<-Number.EPSILON&&(se=!0):Math.sign(R)===Math.sign(G)&&(se=!0),se?(ue=-R,le=Le,Me=Math.sqrt(Y)):(ue=Le,le=R,Me=Math.sqrt(Y/2))}return new de(ue/Me,le/Me)}const H=[];for(let Z=0,ae=z.length,K=ae-1,ue=Z+1;Z<ae;Z++,K++,ue++)K===ae&&(K=0),ue===ae&&(ue=0),H[Z]=N(z[Z],z[K],z[ue]);const q=[];let te,Se=H.concat();for(let Z=0,ae=U.length;Z<ae;Z++){const K=U[Z];te=[];for(let ue=0,le=K.length,Me=le-1,Le=ue+1;ue<le;ue++,Me++,Le++)Me===le&&(Me=0),Le===le&&(Le=0),te[ue]=N(K[ue],K[Me],K[Le]);q.push(te),Se=Se.concat(te)}for(let Z=0;Z<g;Z++){const ae=Z/g,K=p*Math.cos(ae*Math.PI/2),ue=m*Math.sin(ae*Math.PI/2)+v;for(let le=0,Me=z.length;le<Me;le++){const Le=j(z[le],H[le],ue);ne(Le.x,Le.y,-K)}for(let le=0,Me=U.length;le<Me;le++){const Le=U[le];te=q[le];for(let R=0,w=Le.length;R<w;R++){const G=j(Le[R],te[R],ue);ne(G.x,G.y,-K)}}}const Ue=m+v;for(let Z=0;Z<J;Z++){const ae=d?j(M[Z],Se[Z],Ue):M[Z];y?(A.copy(C.normals[0]).multiplyScalar(ae.x),T.copy(C.binormals[0]).multiplyScalar(ae.y),L.copy(_[0]).add(A).add(T),ne(L.x,L.y,L.z)):ne(ae.x,ae.y,0)}for(let Z=1;Z<=u;Z++)for(let ae=0;ae<J;ae++){const K=d?j(M[ae],Se[ae],Ue):M[ae];y?(A.copy(C.normals[Z]).multiplyScalar(K.x),T.copy(C.binormals[Z]).multiplyScalar(K.y),L.copy(_[Z]).add(A).add(T),ne(L.x,L.y,L.z)):ne(K.x,K.y,h/u*Z)}for(let Z=g-1;Z>=0;Z--){const ae=Z/g,K=p*Math.cos(ae*Math.PI/2),ue=m*Math.sin(ae*Math.PI/2)+v;for(let le=0,Me=z.length;le<Me;le++){const Le=j(z[le],H[le],ue);ne(Le.x,Le.y,h+K)}for(let le=0,Me=U.length;le<Me;le++){const Le=U[le];te=q[le];for(let R=0,w=Le.length;R<w;R++){const G=j(Le[R],te[R],ue);y?ne(G.x,G.y+_[u-1].y,_[u-1].x+K):ne(G.x,G.y,h+K)}}}V(),ie();function V(){const Z=r.length/3;if(d){let ae=0,K=J*ae;for(let ue=0;ue<Q;ue++){const le=I[ue];Ie(le[2]+K,le[1]+K,le[0]+K)}ae=u+g*2,K=J*ae;for(let ue=0;ue<Q;ue++){const le=I[ue];Ie(le[0]+K,le[1]+K,le[2]+K)}}else{for(let ae=0;ae<Q;ae++){const K=I[ae];Ie(K[2],K[1],K[0])}for(let ae=0;ae<Q;ae++){const K=I[ae];Ie(K[0]+J*u,K[1]+J*u,K[2]+J*u)}}i.addGroup(Z,r.length/3-Z,0)}function ie(){const Z=r.length/3;let ae=0;me(z,ae),ae+=z.length;for(let K=0,ue=U.length;K<ue;K++){const le=U[K];me(le,ae),ae+=le.length}i.addGroup(Z,r.length/3-Z,1)}function me(Z,ae){let K=Z.length;for(;--K>=0;){const ue=K;let le=K-1;le<0&&(le=Z.length-1);for(let Me=0,Le=u+g*2;Me<Le;Me++){const R=J*Me,w=J*(Me+1),G=ae+ue+R,Y=ae+le+R,ce=ae+le+w,se=ae+ue+w;Fe(G,Y,ce,se)}}}function ne(Z,ae,K){l.push(Z),l.push(ae),l.push(K)}function Ie(Z,ae,K){O(Z),O(ae),O(K);const ue=r.length/3,le=x.generateTopUV(i,r,ue-3,ue-2,ue-1);ke(le[0]),ke(le[1]),ke(le[2])}function Fe(Z,ae,K,ue){O(Z),O(ae),O(ue),O(ae),O(K),O(ue);const le=r.length/3,Me=x.generateSideWallUV(i,r,le-6,le-3,le-2,le-1);ke(Me[0]),ke(Me[1]),ke(Me[3]),ke(Me[1]),ke(Me[2]),ke(Me[3])}function O(Z){r.push(l[Z*3+0]),r.push(l[Z*3+1]),r.push(l[Z*3+2])}function ke(Z){s.push(Z.x),s.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return iC(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Zd[r.type]().fromJSON(r)),new Ka(i,e.options)}}const nC={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new de(s,o),new de(a,l),new de(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[r*3],p=e[r*3+1],m=e[r*3+2],v=e[s*3],g=e[s*3+1],f=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new de(o,1-l),new de(c,1-h),new de(d,1-m),new de(v,1-f)]:[new de(a,1-l),new de(u,1-h),new de(p,1-m),new de(g,1-f)]}};function iC(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class pp extends Ut{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let h=e;const d=(n-e)/r,p=new D,m=new de;for(let v=0;v<=r;v++){for(let g=0;g<=i;g++){const f=s+g/i*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/n+1)/2,m.y=(p.y/n+1)/2,u.push(m.x,m.y)}h+=d}for(let v=0;v<r;v++){const g=v*(i+1);for(let f=0;f<i;f++){const x=f+g,_=x,y=x+i+1,C=x+i+2,T=x+1;a.push(_,y,T),a.push(y,C,T)}}this.setIndex(a),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class mp extends Ut{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,d=new D,p=[],m=[],v=[],g=[];for(let f=0;f<=i;f++){const x=[],_=f/i;let y=0;f===0&&o===0?y=.5/n:f===i&&l===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){const T=C/n;h.x=-e*Math.cos(r+T*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+T*s)*Math.sin(o+_*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),g.push(T+y,1-_),x.push(c++)}u.push(x)}for(let f=0;f<i;f++)for(let x=0;x<n;x++){const _=u[f][x+1],y=u[f][x],C=u[f+1][x],T=u[f+1][x+1];(f!==0||o>0)&&p.push(_,y,T),(f!==i-1||l<Math.PI)&&p.push(y,C,T)}this.setIndex(p),this.setAttribute("position",new tt(m,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class g0 extends Kr{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new He(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class zr extends Kr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yx,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class v0 extends zr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const _0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class rC{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],m=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null}}}const sC=new rC;class gp{constructor(e){this.manager=e!==void 0?e:sC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gp.DEFAULT_MATERIAL_NAME="__DEFAULT";class oC extends gp{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=_0.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=za("img");function l(){u(),_0.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class aC extends gp{constructor(e){super(e)}load(e,n,i,r){const s=new $t,o=new oC(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Mu extends Nt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class lC extends Mu{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Oh=new at,x0=new D,y0=new D;class Kx{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sp,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;x0.setFromMatrixPosition(e.matrixWorld),n.position.copy(x0),y0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(y0),n.updateMatrixWorld(),Oh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Oh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const S0=new at,Bo=new D,kh=new D;class cC extends Kx{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Bo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Bo),kh.copy(i.position),kh.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(kh),i.updateMatrixWorld(),r.makeTranslation(-Bo.x,-Bo.y,-Bo.z),S0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(S0)}}class uC extends Mu{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new cC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hC extends Kx{constructor(){super(new Ux(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ia extends Mu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new hC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dC{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new D)}set(e){for(let n=0;n<9;n++)this.coefficients[n].copy(e[n]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,n){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.282095),n.addScaledVector(o[1],.488603*r),n.addScaledVector(o[2],.488603*s),n.addScaledVector(o[3],.488603*i),n.addScaledVector(o[4],1.092548*(i*r)),n.addScaledVector(o[5],1.092548*(r*s)),n.addScaledVector(o[6],.315392*(3*s*s-1)),n.addScaledVector(o[7],1.092548*(i*s)),n.addScaledVector(o[8],.546274*(i*i-r*r)),n}getIrradianceAt(e,n){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.886227),n.addScaledVector(o[1],2*.511664*r),n.addScaledVector(o[2],2*.511664*s),n.addScaledVector(o[3],2*.511664*i),n.addScaledVector(o[4],2*.429043*i*r),n.addScaledVector(o[5],2*.429043*r*s),n.addScaledVector(o[6],.743125*s*s-.247708),n.addScaledVector(o[7],2*.429043*i*s),n.addScaledVector(o[8],.429043*(i*i-r*r)),n}add(e){for(let n=0;n<9;n++)this.coefficients[n].add(e.coefficients[n]);return this}addScaledSH(e,n){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],n);return this}scale(e){for(let n=0;n<9;n++)this.coefficients[n].multiplyScalar(e);return this}lerp(e,n){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],n);return this}equals(e){for(let n=0;n<9;n++)if(!this.coefficients[n].equals(e.coefficients[n]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,n+r*3);return this}toArray(e=[],n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,n+r*3);return e}static getBasisAt(e,n){const i=e.x,r=e.y,s=e.z;n[0]=.282095,n[1]=.488603*r,n[2]=.488603*s,n[3]=.488603*i,n[4]=1.092548*i*r,n[5]=1.092548*r*s,n[6]=.315392*(3*s*s-1),n[7]=1.092548*i*s,n[8]=.546274*(i*i-r*r)}}class fC extends Mu{constructor(e=new dC,n=1){super(void 0,n),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const n=super.toJSON(e);return n.object.sh=this.sh.toArray(),n}}class vp{constructor(e){this.value=e}clone(){return new vp(this.value.clone===void 0?this.value:this.value.clone())}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);class pC extends lp{constructor(e=null){super();const n=new Jr;n.deleteAttribute("uv");const i=new zr({side:ln}),r=new zr;let s=5;e!==null&&e._useLegacyLights===!1&&(s=900);const o=new uC(16777215,s,28,2);o.position.set(.418,16.199,.3),this.add(o);const a=new Je(n,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const l=new Je(n,r);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);const c=new Je(n,r);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);const u=new Je(n,r);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);const h=new Je(n,r);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const d=new Je(n,r);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const p=new Je(n,r);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);const m=new Je(n,_s(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const v=new Je(n,_s(50));v.position.set(-16.109,18.021,-8.207),v.scale.set(.1,2.425,2.751),this.add(v);const g=new Je(n,_s(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const f=new Je(n,_s(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const x=new Je(n,_s(20));x.position.set(3.235,11.486,-12.541),x.scale.set(2.5,2,.1),this.add(x);const _=new Je(n,_s(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function _s(t){const e=new _u;return e.color.setScalar(t),e}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var nn=Uint8Array,An=Uint16Array,_p=Int32Array,xp=new nn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),yp=new nn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),M0=new nn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Jx=function(t,e){for(var n=new An(31),i=0;i<31;++i)n[i]=e+=1<<t[i-1];for(var r=new _p(n[30]),i=1;i<30;++i)for(var s=n[i];s<n[i+1];++s)r[s]=s-n[i]<<5|i;return{b:n,r}},Qx=Jx(xp,2),mC=Qx.b,Qd=Qx.r;mC[28]=258,Qd[258]=28;var gC=Jx(yp,0),w0=gC.r,ef=new An(32768);for(var dt=0;dt<32768;++dt){var Wi=(dt&43690)>>1|(dt&21845)<<1;Wi=(Wi&52428)>>2|(Wi&13107)<<2,Wi=(Wi&61680)>>4|(Wi&3855)<<4,ef[dt]=((Wi&65280)>>8|(Wi&255)<<8)>>1}var va=function(t,e,n){for(var i=t.length,r=0,s=new An(e);r<i;++r)t[r]&&++s[t[r]-1];var o=new An(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(n){a=new An(1<<e);var l=15-e;for(r=0;r<i;++r)if(t[r])for(var c=r<<4|t[r],u=e-t[r],h=o[t[r]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)a[ef[h]>>l]=c}else for(a=new An(i),r=0;r<i;++r)t[r]&&(a[r]=ef[o[t[r]-1]++]>>15-t[r]);return a},Xr=new nn(288);for(var dt=0;dt<144;++dt)Xr[dt]=8;for(var dt=144;dt<256;++dt)Xr[dt]=9;for(var dt=256;dt<280;++dt)Xr[dt]=7;for(var dt=280;dt<288;++dt)Xr[dt]=8;var Zc=new nn(32);for(var dt=0;dt<32;++dt)Zc[dt]=5;var vC=va(Xr,9,0),_C=va(Zc,5,0),ey=function(t){return(t+7)/8|0},ty=function(t,e,n){return(n==null||n>t.length)&&(n=t.length),new nn(t.subarray(e,n))},xC=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],wu=function(t,e,n){var i=new Error(e||xC[t]);if(i.code=t,Error.captureStackTrace&&Error.captureStackTrace(i,wu),!n)throw i;return i},xi=function(t,e,n){n<<=e&7;var i=e/8|0;t[i]|=n,t[i+1]|=n>>8},Ho=function(t,e,n){n<<=e&7;var i=e/8|0;t[i]|=n,t[i+1]|=n>>8,t[i+2]|=n>>16},zh=function(t,e){for(var n=[],i=0;i<t.length;++i)t[i]&&n.push({s:i,f:t[i]});var r=n.length,s=n.slice();if(!r)return{t:iy,l:0};if(r==1){var o=new nn(n[0].s+1);return o[n[0].s]=1,{t:o,l:1}}n.sort(function(C,T){return C.f-T.f}),n.push({s:-1,f:25001});var a=n[0],l=n[1],c=0,u=1,h=2;for(n[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=r-1;)a=n[n[c].f<n[h].f?c++:h++],l=n[c!=u&&n[c].f<n[h].f?c++:h++],n[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var d=s[0].s,i=1;i<r;++i)s[i].s>d&&(d=s[i].s);var p=new An(d+1),m=tf(n[u-1],p,0);if(m>e){var i=0,v=0,g=m-e,f=1<<g;for(s.sort(function(T,A){return p[A.s]-p[T.s]||T.f-A.f});i<r;++i){var x=s[i].s;if(p[x]>e)v+=f-(1<<m-p[x]),p[x]=e;else break}for(v>>=g;v>0;){var _=s[i].s;p[_]<e?v-=1<<e-p[_]++-1:++i}for(;i>=0&&v;--i){var y=s[i].s;p[y]==e&&(--p[y],++v)}m=e}return{t:new nn(p),l:m}},tf=function(t,e,n){return t.s==-1?Math.max(tf(t.l,e,n+1),tf(t.r,e,n+1)):e[t.s]=n},E0=function(t){for(var e=t.length;e&&!t[--e];);for(var n=new An(++e),i=0,r=t[0],s=1,o=function(l){n[i++]=l},a=1;a<=e;++a)if(t[a]==r&&a!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=t[a]}return{c:n.subarray(0,i),n:e}},Vo=function(t,e){for(var n=0,i=0;i<e.length;++i)n+=t[i]*e[i];return n},ny=function(t,e,n){var i=n.length,r=ey(e+2);t[r]=i&255,t[r+1]=i>>8,t[r+2]=t[r]^255,t[r+3]=t[r+1]^255;for(var s=0;s<i;++s)t[r+s+4]=n[s];return(r+4+i)*8},T0=function(t,e,n,i,r,s,o,a,l,c,u){xi(e,u++,n),++r[256];for(var h=zh(r,15),d=h.t,p=h.l,m=zh(s,15),v=m.t,g=m.l,f=E0(d),x=f.c,_=f.n,y=E0(v),C=y.c,T=y.n,A=new An(19),L=0;L<x.length;++L)++A[x[L]&31];for(var L=0;L<C.length;++L)++A[C[L]&31];for(var E=zh(A,7),M=E.t,U=E.l,B=19;B>4&&!M[M0[B-1]];--B);var I=c+5<<3,z=Vo(r,Xr)+Vo(s,Zc)+o,j=Vo(r,d)+Vo(s,v)+o+14+3*B+Vo(A,M)+2*A[16]+3*A[17]+7*A[18];if(l>=0&&I<=z&&I<=j)return ny(e,u,t.subarray(l,l+c));var J,Q,N,H;if(xi(e,u,1+(j<z)),u+=2,j<z){J=va(d,p,0),Q=d,N=va(v,g,0),H=v;var q=va(M,U,0);xi(e,u,_-257),xi(e,u+5,T-1),xi(e,u+10,B-4),u+=14;for(var L=0;L<B;++L)xi(e,u+3*L,M[M0[L]]);u+=3*B;for(var te=[x,C],Se=0;Se<2;++Se)for(var Ue=te[Se],L=0;L<Ue.length;++L){var V=Ue[L]&31;xi(e,u,q[V]),u+=M[V],V>15&&(xi(e,u,Ue[L]>>5&127),u+=Ue[L]>>12)}}else J=vC,Q=Xr,N=_C,H=Zc;for(var L=0;L<a;++L){var ie=i[L];if(ie>255){var V=ie>>18&31;Ho(e,u,J[V+257]),u+=Q[V+257],V>7&&(xi(e,u,ie>>23&31),u+=xp[V]);var me=ie&31;Ho(e,u,N[me]),u+=H[me],me>3&&(Ho(e,u,ie>>5&8191),u+=yp[me])}else Ho(e,u,J[ie]),u+=Q[ie]}return Ho(e,u,J[256]),u+Q[256]},yC=new _p([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),iy=new nn(0),SC=function(t,e,n,i,r,s){var o=s.z||t.length,a=new nn(i+o+5*(1+Math.ceil(o/7e3))+r),l=a.subarray(i,a.length-r),c=s.l,u=(s.r||0)&7;if(e){u&&(l[0]=s.r>>3);for(var h=yC[e-1],d=h>>13,p=h&8191,m=(1<<n)-1,v=s.p||new An(32768),g=s.h||new An(m+1),f=Math.ceil(n/3),x=2*f,_=function(K){return(t[K]^t[K+1]<<f^t[K+2]<<x)&m},y=new _p(25e3),C=new An(288),T=new An(32),A=0,L=0,E=s.i||0,M=0,U=s.w||0,B=0;E+2<o;++E){var I=_(E),z=E&32767,j=g[I];if(v[z]=j,g[I]=z,U<=E){var J=o-E;if((A>7e3||M>24576)&&(J>423||!c)){u=T0(t,l,0,y,C,T,L,M,B,E-B,u),M=A=L=0,B=E;for(var Q=0;Q<286;++Q)C[Q]=0;for(var Q=0;Q<30;++Q)T[Q]=0}var N=2,H=0,q=p,te=z-j&32767;if(J>2&&I==_(E-te))for(var Se=Math.min(d,J)-1,Ue=Math.min(32767,E),V=Math.min(258,J);te<=Ue&&--q&&z!=j;){if(t[E+N]==t[E+N-te]){for(var ie=0;ie<V&&t[E+ie]==t[E+ie-te];++ie);if(ie>N){if(N=ie,H=te,ie>Se)break;for(var me=Math.min(te,ie-2),ne=0,Q=0;Q<me;++Q){var Ie=E-te+Q&32767,Fe=v[Ie],O=Ie-Fe&32767;O>ne&&(ne=O,j=Ie)}}}z=j,j=v[z],te+=z-j&32767}if(H){y[M++]=268435456|Qd[N]<<18|w0[H];var ke=Qd[N]&31,Z=w0[H]&31;L+=xp[ke]+yp[Z],++C[257+ke],++T[Z],U=E+N,++A}else y[M++]=t[E],++C[t[E]]}}for(E=Math.max(E,U);E<o;++E)y[M++]=t[E],++C[t[E]];u=T0(t,l,c,y,C,T,L,M,B,E-B,u),c||(s.r=u&7|l[u/8|0]<<3,u-=7,s.h=g,s.p=v,s.i=E,s.w=U)}else{for(var E=s.w||0;E<o+c;E+=65535){var ae=E+65535;ae>=o&&(l[u/8|0]=c,ae=o),u=ny(l,u+1,t.subarray(E,ae))}s.i=o}return ty(a,0,i+ey(u)+r)},MC=function(){for(var t=new Int32Array(256),e=0;e<256;++e){for(var n=e,i=9;--i;)n=(n&1&&-306674912)^n>>>1;t[e]=n}return t}(),wC=function(){var t=-1;return{p:function(e){for(var n=t,i=0;i<e.length;++i)n=MC[n&255^e[i]]^n>>>8;t=n},d:function(){return~t}}},EC=function(t,e,n,i,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),o=new nn(s.length+t.length);o.set(s),o.set(t,s.length),t=o,r.w=s.length}return SC(t,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(t.length)))*1.5):20:12+e.mem,n,i,r)},ry=function(t,e){var n={};for(var i in t)n[i]=t[i];for(var i in e)n[i]=e[i];return n},Gt=function(t,e,n){for(;n;++e)t[e]=n,n>>>=8};function TC(t,e){return EC(t,e||{},0,0)}var sy=function(t,e,n,i){for(var r in t){var s=t[r],o=e+r,a=i;Array.isArray(s)&&(a=ry(i,s[1]),s=s[0]),s instanceof nn?n[o]=[s,a]:(n[o+="/"]=[new nn(0),a],sy(s,o,n,i))}},A0=typeof TextEncoder<"u"&&new TextEncoder,AC=typeof TextDecoder<"u"&&new TextDecoder,bC=0;try{AC.decode(iy,{stream:!0}),bC=1}catch{}function Kc(t,e){var n;if(A0)return A0.encode(t);for(var i=t.length,r=new nn(t.length+(t.length>>1)),s=0,o=function(c){r[s++]=c},n=0;n<i;++n){if(s+5>r.length){var a=new nn(s+8+(i-n<<1));a.set(r),r=a}var l=t.charCodeAt(n);l<128||e?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|t.charCodeAt(++n)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return ty(r,0,s)}var nf=function(t){var e=0;if(t)for(var n in t){var i=t[n].length;i>65535&&wu(9),e+=i+4}return e},b0=function(t,e,n,i,r,s,o,a){var l=i.length,c=n.extra,u=a&&a.length,h=nf(c);Gt(t,e,o!=null?33639248:67324752),e+=4,o!=null&&(t[e++]=20,t[e++]=n.os),t[e]=20,e+=2,t[e++]=n.flag<<1|(s<0&&8),t[e++]=r&&8,t[e++]=n.compression&255,t[e++]=n.compression>>8;var d=new Date(n.mtime==null?Date.now():n.mtime),p=d.getFullYear()-1980;if((p<0||p>119)&&wu(10),Gt(t,e,p<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>1),e+=4,s!=-1&&(Gt(t,e,n.crc),Gt(t,e+4,s<0?-s-2:s),Gt(t,e+8,n.size)),Gt(t,e+12,l),Gt(t,e+14,h),e+=16,o!=null&&(Gt(t,e,u),Gt(t,e+6,n.attrs),Gt(t,e+10,o),e+=14),t.set(i,e),e+=l,h)for(var m in c){var v=c[m],g=v.length;Gt(t,e,+m),Gt(t,e+2,g),t.set(v,e+4),e+=4+g}return u&&(t.set(a,e),e+=u),e},CC=function(t,e,n,i,r){Gt(t,e,101010256),Gt(t,e+8,n),Gt(t,e+10,n),Gt(t,e+12,i),Gt(t,e+16,r)};function RC(t,e){e||(e={});var n={},i=[];sy(t,"",n,e);var r=0,s=0;for(var o in n){var a=n[o],l=a[0],c=a[1],u=c.level==0?0:8,h=Kc(o),d=h.length,p=c.comment,m=p&&Kc(p),v=m&&m.length,g=nf(c.extra);d>65535&&wu(11);var f=u?TC(l,c):l,x=f.length,_=wC();_.p(l),i.push(ry(c,{size:l.length,crc:_.d(),c:f,f:h,m,u:d!=o.length||m&&p.length!=v,o:r,compression:u})),r+=30+d+g+x,s+=76+2*(d+g)+(v||0)+x}for(var y=new nn(s+22),C=r,T=s-r,A=0;A<i.length;++A){var h=i[A];b0(y,h.o,h,h.f,h.u,h.c.length);var L=30+h.f.length+nf(h.extra);y.set(h.c,h.o+L),b0(y,r,h,h.f,h.u,h.c.length,h.o,h.m),r+=16+L+(h.m?h.m.length:0)}return CC(y,r,i.length,T,C),y}let Go,Bh,xs,Yl;function PC(t,e=1/0,n=null){Bh||(Bh=new hr(2,2,1,1)),xs||(xs=new Di({uniforms:{blitTexture:new vp(t)},vertexShader:`
			varying vec2 vUv;
			void main(){
				vUv = uv;
				gl_Position = vec4(position.xy * 1.0,0.,.999999);
			}`,fragmentShader:`
			uniform sampler2D blitTexture; 
			varying vec2 vUv;

			void main(){ 
				gl_FragColor = vec4(vUv.xy, 0, 1);
				
				#ifdef IS_SRGB
				gl_FragColor = LinearTosRGB( texture2D( blitTexture, vUv) );
				#else
				gl_FragColor = texture2D( blitTexture, vUv);
				#endif
			}`})),xs.uniforms.blitTexture.value=t,xs.defines.IS_SRGB=t.colorSpace==hn,xs.needsUpdate=!0,Yl||(Yl=new Je(Bh,xs),Yl.frustumCulled=!1);const i=new fn,r=new lp;r.add(Yl),n===null&&(n=Go=new Vx({antialias:!1}));const s=Math.min(t.image.width,e),o=Math.min(t.image.height,e);n.setSize(s,o),n.clear(),n.render(r,i);const a=document.createElement("canvas"),l=a.getContext("2d");a.width=s,a.height=o,l.drawImage(n.domElement,0,0,s,o);const c=new cp(a);return c.minFilter=t.minFilter,c.magFilter=t.magFilter,c.wrapS=t.wrapS,c.wrapT=t.wrapT,c.name=t.name,Go&&(Go.forceContextLoss(),Go.dispose(),Go=null),c}class LC{parse(e,n,i,r){this.parseAsync(e,r).then(n).catch(i)}async parseAsync(e,n={}){n=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},quickLookCompatible:!1,maxTextureSize:1024},n);const i={},r="model.usda";i[r]=null;let s=oy();s+=IC(n);const o={},a={};e.traverseVisible(c=>{if(c.isMesh){const u=c.geometry,h=c.material;if(h.isMeshStandardMaterial){const d="geometries/Geometry_"+u.id+".usda";if(!(d in i)){const p=OC(u);i[d]=UC(p)}h.uuid in o||(o[h.uuid]=h),s+=FC(c,u,h)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",c)}else c.isCamera&&(s+=jC(c))}),s+=DC(),s+=GC(o,a,n.quickLookCompatible),i[r]=Kc(s),s=null;for(const c in a){let u=a[c];u.isCompressedTexture===!0&&(u=PC(u));const h=NC(u.image,u.flipY,n.maxTextureSize),d=await new Promise(p=>h.toBlob(p,"image/png",1));i[`textures/Texture_${c}.png`]=new Uint8Array(await d.arrayBuffer())}let l=0;for(const c in i){const u=i[c],h=34+c.length;l+=h;const d=l&63;if(d!==4){const p=64-d,m=new Uint8Array(p);i[c]=[u,{extra:{12345:m}}]}l=u.length}return RC(i,{level:0})}}function NC(t,e,n){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=n/Math.max(t.width,t.height),r=document.createElement("canvas");r.width=t.width*Math.min(1,i),r.height=t.height*Math.min(1,i);const s=r.getContext("2d");return e===!0&&(s.translate(0,r.height),s.scale(1,-1)),s.drawImage(t,0,0,r.width,r.height),r}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}const Jt=7;function oy(){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`}function IC(t){return`def Xform "Root"
{
	def Scope "Scenes" (
		kind = "sceneLibrary"
	)
	{
		def Xform "Scene" (
			customData = {
				bool preliminary_collidesWithEnvironment = 0
				string sceneName = "Scene"
			}
			sceneName = "Scene"
		)
		{
		token preliminary:anchoring:type = "${t.ar.anchoring.type}"
		token preliminary:planeAnchoring:alignment = "${t.ar.planeAnchoring.alignment}"

`}function DC(){return`
		}
	}
}

`}function UC(t){let e=oy();return e+=t,Kc(e)}function FC(t,e,n){const i="Object_"+t.id,r=ay(t.matrixWorld);return t.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",t),`def Xform "${i}" (
	prepend references = @./geometries/Geometry_${e.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${r}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${n.id}>
}

`}function ay(t){const e=t.elements;return`( ${Zl(e,0)}, ${Zl(e,4)}, ${Zl(e,8)}, ${Zl(e,12)} )`}function Zl(t,e){return`(${t[e+0]}, ${t[e+1]}, ${t[e+2]}, ${t[e+3]})`}function OC(t){return`
def "Geometry"
{
${kC(t)}
}
`}function kC(t){const e="Geometry",n=t.attributes,i=n.position.count;return`
	def Mesh "${e}"
	{
		int[] faceVertexCounts = [${zC(t)}]
		int[] faceVertexIndices = [${BC(t)}]
		normal3f[] normals = [${rf(n.normal,i)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${rf(n.position,i)}]
${VC(n)}
		uniform token subdivisionScheme = "none"
	}
`}function zC(t){const e=t.index!==null?t.index.count:t.attributes.position.count;return Array(e/3).fill(3).join(", ")}function BC(t){const e=t.index,n=[];if(e!==null)for(let i=0;i<e.count;i++)n.push(e.getX(i));else{const i=t.attributes.position.count;for(let r=0;r<i;r++)n.push(r)}return n.join(", ")}function rf(t,e){if(t===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");const n=[];for(let i=0;i<t.count;i++){const r=t.getX(i),s=t.getY(i),o=t.getZ(i);n.push(`(${r.toPrecision(Jt)}, ${s.toPrecision(Jt)}, ${o.toPrecision(Jt)})`)}return n.join(", ")}function HC(t){const e=[];for(let n=0;n<t.count;n++){const i=t.getX(n),r=t.getY(n);e.push(`(${i.toPrecision(Jt)}, ${1-r.toPrecision(Jt)})`)}return e.join(", ")}function VC(t){let e="";for(let i=0;i<4;i++){const r=i>0?i:"",s=t["uv"+r];s!==void 0&&(e+=`
		texCoord2f[] primvars:st${r} = [${HC(s)}] (
			interpolation = "vertex"
		)`)}const n=t.color;if(n!==void 0){const i=n.count;e+=`
	color3f[] primvars:displayColor = [${rf(n,i)}] (
		interpolation = "vertex"
		)`}return e}function GC(t,e,n=!1){const i=[];for(const r in t){const s=t[r];i.push(WC(s,e,n))}return`def "Materials"
{
${i.join("")}
}

`}function WC(t,e,n=!1){const i="			",r=[],s=[];function o(a,l,c){const u=a.source.id+"_"+a.flipY;e[u]=a;const h=a.channel>0?"st"+a.channel:"st",d={1e3:"repeat",1001:"clamp",1002:"mirror"},p=a.repeat.clone(),m=a.offset.clone(),v=a.rotation,g=Math.sin(v),f=Math.cos(v);return m.y=1-m.y-p.y,n?(m.x=m.x/p.x,m.y=m.y/p.y,m.x+=g/p.x,m.y+=f-1):(m.x+=g*p.x,m.y+=(1-f)*p.y),`
		def Shader "PrimvarReader_${l}"
		{
			uniform token info:id = "UsdPrimvarReader_float2"
			float2 inputs:fallback = (0.0, 0.0)
			token inputs:varname = "${h}"
			float2 outputs:result
		}

		def Shader "Transform2d_${l}"
		{
			uniform token info:id = "UsdTransform2d"
			token inputs:in.connect = </Materials/Material_${t.id}/PrimvarReader_${l}.outputs:result>
			float inputs:rotation = ${(v*(180/Math.PI)).toFixed(Jt)}
			float2 inputs:scale = ${R0(p)}
			float2 inputs:translation = ${R0(m)}
			float2 outputs:result
		}

		def Shader "Texture_${a.id}_${l}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${u}.png@
			float2 inputs:st.connect = </Materials/Material_${t.id}/Transform2d_${l}.outputs:result>
			${c!==void 0?"float4 inputs:scale = "+$C(c):""}
			token inputs:sourceColorSpace = "${a.colorSpace===Zn?"raw":"sRGB"}"
			token inputs:wrapS = "${d[a.wrapS]}"
			token inputs:wrapT = "${d[a.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${t.transparent||t.alphaTest>0?"float outputs:a":""}
		}`}return t.side===En&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",t),t.map!==null?(r.push(`${i}color3f inputs:diffuseColor.connect = </Materials/Material_${t.id}/Texture_${t.map.id}_diffuse.outputs:rgb>`),t.transparent?r.push(`${i}float inputs:opacity.connect = </Materials/Material_${t.id}/Texture_${t.map.id}_diffuse.outputs:a>`):t.alphaTest>0&&(r.push(`${i}float inputs:opacity.connect = </Materials/Material_${t.id}/Texture_${t.map.id}_diffuse.outputs:a>`),r.push(`${i}float inputs:opacityThreshold = ${t.alphaTest}`)),s.push(o(t.map,"diffuse",t.color))):r.push(`${i}color3f inputs:diffuseColor = ${C0(t.color)}`),t.emissiveMap!==null?(r.push(`${i}color3f inputs:emissiveColor.connect = </Materials/Material_${t.id}/Texture_${t.emissiveMap.id}_emissive.outputs:rgb>`),s.push(o(t.emissiveMap,"emissive"))):t.emissive.getHex()>0&&r.push(`${i}color3f inputs:emissiveColor = ${C0(t.emissive)}`),t.normalMap!==null&&(r.push(`${i}normal3f inputs:normal.connect = </Materials/Material_${t.id}/Texture_${t.normalMap.id}_normal.outputs:rgb>`),s.push(o(t.normalMap,"normal"))),t.aoMap!==null&&(r.push(`${i}float inputs:occlusion.connect = </Materials/Material_${t.id}/Texture_${t.aoMap.id}_occlusion.outputs:r>`),s.push(o(t.aoMap,"occlusion"))),t.roughnessMap!==null&&t.roughness===1?(r.push(`${i}float inputs:roughness.connect = </Materials/Material_${t.id}/Texture_${t.roughnessMap.id}_roughness.outputs:g>`),s.push(o(t.roughnessMap,"roughness"))):r.push(`${i}float inputs:roughness = ${t.roughness}`),t.metalnessMap!==null&&t.metalness===1?(r.push(`${i}float inputs:metallic.connect = </Materials/Material_${t.id}/Texture_${t.metalnessMap.id}_metallic.outputs:b>`),s.push(o(t.metalnessMap,"metallic"))):r.push(`${i}float inputs:metallic = ${t.metalness}`),t.alphaMap!==null?(r.push(`${i}float inputs:opacity.connect = </Materials/Material_${t.id}/Texture_${t.alphaMap.id}_opacity.outputs:r>`),r.push(`${i}float inputs:opacityThreshold = 0.0001`),s.push(o(t.alphaMap,"opacity"))):r.push(`${i}float inputs:opacity = ${t.opacity}`),t.isMeshPhysicalMaterial&&(r.push(`${i}float inputs:clearcoat = ${t.clearcoat}`),r.push(`${i}float inputs:clearcoatRoughness = ${t.clearcoatRoughness}`),r.push(`${i}float inputs:ior = ${t.ior}`)),`
	def Material "Material_${t.id}"
	{
		def Shader "PreviewSurface"
		{
			uniform token info:id = "UsdPreviewSurface"
${r.join(`
`)}
			int inputs:useSpecularWorkflow = 0
			token outputs:surface
		}

		token outputs:surface.connect = </Materials/Material_${t.id}/PreviewSurface.outputs:surface>

${s.join(`
`)}

	}
`}function C0(t){return`(${t.r}, ${t.g}, ${t.b})`}function $C(t){return`(${t.r}, ${t.g}, ${t.b}, 1.0)`}function R0(t){return`(${t.x}, ${t.y})`}function jC(t){const e=t.name?t.name:"Camera_"+t.id,n=ay(t.matrixWorld);return t.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",t),t.isOrthographicCamera?`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${n}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${t.near.toPrecision(Jt)}, ${t.far.toPrecision(Jt)})
			float horizontalAperture = ${((Math.abs(t.left)+Math.abs(t.right))*10).toPrecision(Jt)}
			float verticalAperture = ${((Math.abs(t.top)+Math.abs(t.bottom))*10).toPrecision(Jt)}
			token projection = "orthographic"
		}
	
	`:`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${n}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${t.near.toPrecision(Jt)}, ${t.far.toPrecision(Jt)})
			float focalLength = ${t.getFocalLength().toPrecision(Jt)}
			float focusDistance = ${t.focus.toPrecision(Jt)}
			float horizontalAperture = ${t.getFilmWidth().toPrecision(Jt)}
			token projection = "perspective"
			float verticalAperture = ${t.getFilmHeight().toPrecision(Jt)}
		}
	
	`}class XC{constructor(e,n,i,r,s){this.xrLight=e,this.renderer=n,this.lightProbe=i,this.xrWebGLBinding=null,this.estimationStartCallback=s,this.frameCallback=this.onXRFrame.bind(this);const o=n.xr.getSession();if(r&&"XRWebGLBinding"in window){const a=new Ix(16);e.environment=a.texture;const l=n.getContext();switch(o.preferredReflectionFormat){case"srgba8":l.getExtension("EXT_sRGB");break;case"rgba16f":l.getExtension("OES_texture_half_float");break}this.xrWebGLBinding=new XRWebGLBinding(o,l),this.lightProbe.addEventListener("reflectionchange",()=>{this.updateReflection()})}o.requestAnimationFrame(this.frameCallback)}updateReflection(){const e=this.renderer.properties.get(this.xrLight.environment);if(e){const n=this.xrWebGLBinding.getReflectionCubeMap(this.lightProbe);n&&(e.__webglTexture=n,this.xrLight.environment.needsPMREMUpdate=!0)}}onXRFrame(e,n){if(!this.xrLight)return;n.session.requestAnimationFrame(this.frameCallback);const r=n.getLightEstimate(this.lightProbe);if(r){this.xrLight.lightProbe.sh.fromArray(r.sphericalHarmonicsCoefficients),this.xrLight.lightProbe.intensity=1;const s=Math.max(1,Math.max(r.primaryLightIntensity.x,Math.max(r.primaryLightIntensity.y,r.primaryLightIntensity.z)));this.xrLight.directionalLight.color.setRGB(r.primaryLightIntensity.x/s,r.primaryLightIntensity.y/s,r.primaryLightIntensity.z/s),this.xrLight.directionalLight.intensity=s,this.xrLight.directionalLight.position.copy(r.primaryLightDirection),this.estimationStartCallback&&(this.estimationStartCallback(),this.estimationStartCallback=null)}}dispose(){this.xrLight=null,this.renderer=null,this.lightProbe=null,this.xrWebGLBinding=null}}class qC extends Jn{constructor(e,n=!0){super(),this.lightProbe=new fC,this.lightProbe.intensity=0,this.add(this.lightProbe),this.directionalLight=new ia,this.directionalLight.intensity=0,this.add(this.directionalLight),this.environment=null;let i=null,r=!1;e.xr.addEventListener("sessionstart",()=>{const s=e.xr.getSession();"requestLightProbe"in s&&s.requestLightProbe({reflectionFormat:s.preferredReflectionFormat}).then(o=>{i=new XC(this,e,o,n,()=>{r=!0,this.dispatchEvent({type:"estimationstart"})})})}),e.xr.addEventListener("sessionend",()=>{i&&(i.dispose(),i=null),r&&this.dispatchEvent({type:"estimationend"})}),this.dispose=()=>{i&&(i.dispose(),i=null),this.remove(this.lightProbe),this.lightProbe=null,this.remove(this.directionalLight),this.directionalLight=null,this.environment=null}}}const Ar={sheet_metal_001:{folder:"mild_steel_mill",metalness:.88,roughness:.5,anisotropy:.22,envMapIntensity:1.65,hex:"#7a746c",tint:"#c4bdb4",colorBoost:1.55,clearcoat:.03,anisotropyMap:!1,useColorMap:!0,useNormalMap:!0,useRoughnessMap:!0,useMetalnessMap:!1},metal049a_ss:{folder:"stainless_304_brushed",metalness:.96,roughness:.28,anisotropy:.72,envMapIntensity:2.2,hex:"#d8e0e6",tint:"#eef3f6",colorBoost:1.2,clearcoat:.06,anisotropyMap:!0,useColorMap:!0,useNormalMap:!0,useRoughnessMap:!0,useMetalnessMap:!0},metal049a_alu:{folder:"brushed_aluminium",metalness:.94,roughness:.3,anisotropy:.55,envMapIntensity:2,hex:"#e8ecef",tint:"#f4f6f8",colorBoost:1.15,clearcoat:.04,anisotropyMap:!0,useColorMap:!0,useNormalMap:!0,useRoughnessMap:!0,useMetalnessMap:!0},metal049a_brushed:{folder:"stainless_304_brushed",metalness:.95,roughness:.4,anisotropy:.85,envMapIntensity:2.15,hex:"#e8eef2",tint:"#eef3f6",colorBoost:1.15,clearcoat:.04,anisotropyMap:!0,useColorMap:!0,useNormalMap:!0,useRoughnessMap:!0,useMetalnessMap:!0},galvanized_steel:{folder:"galvanized_steel",metalness:.92,roughness:.4,anisotropy:0,envMapIntensity:1.72,hex:"#9aa48e",tint:"#c5cdc0",clearcoat:.05,anisotropyMap:!1,useColorMap:!0},powdercoat_satin:{folder:"powdercoat_satin",metalness:0,roughness:.46,anisotropy:0,envMapIntensity:.95,hex:null,clearcoat:.28,anisotropyMap:!1,useColorMap:!1,useMetalnessMap:!1}};function ly(t={}){const e=t.material||"carbon",n=t.finish||"mill";return n==="powder"?{id:"powdercoat_satin",...Ar.powdercoat_satin}:n==="galvanized"?{id:"galvanized_steel",...Ar.galvanized_steel}:n==="brushed"?e==="carbon"?{id:"sheet_metal_001",...Ar.sheet_metal_001,anisotropy:.58,roughness:.54}:{id:"metal049a_brushed",...Ar.metal049a_brushed}:e==="ss304"?{id:"metal049a_ss",...Ar.metal049a_ss}:e==="alu"?{id:"metal049a_alu",...Ar.metal049a_alu}:{id:"sheet_metal_001",...Ar.sheet_metal_001}}const zt={ral9005:{label:"RAL 9005",name:"Jet black",hex:"#0a0a0d",color:657933},ral7016:{label:"RAL 7016",name:"Anthracite Grey",hex:"#383e42",color:3685954},ral7035:{label:"RAL 7035",name:"Light grey",hex:"#c5c7c4",color:12961732},ral9010:{label:"RAL 9010",name:"Pure white",hex:"#f1eee8",color:15855336},ral3000:{label:"RAL 3000",name:"Flame red",hex:"#a72920",color:10955040},ral5005:{label:"RAL 5005",name:"Signal blue",hex:"#154889",color:1394825},ral6005:{label:"RAL 6005",name:"Moss green",hex:"#0f4336",color:1000246},ral1003:{label:"RAL 1003",name:"Signal yellow",hex:"#f3a900",color:15968512},ral7021:{label:"RAL 7021",name:"Black grey",hex:"#2e3234",color:3027508},ral9006:{label:"RAL 9006",name:"White aluminium",hex:"#a5a8a6",color:10856614},ral9007:{label:"RAL 9007",name:"Grey aluminium",hex:"#8f8c83",color:9407619},ral5010:{label:"RAL 5010",name:"Gentian blue",hex:"#0e518d",color:938381},ral3020:{label:"RAL 3020",name:"Traffic red",hex:"#bf111b",color:12521755},ral1021:{label:"RAL 1021",name:"Rape yellow",hex:"#e4b800",color:14989312},ral6018:{label:"RAL 6018",name:"Yellow green",hex:"#4e9b41",color:5151553},ral2004:{label:"RAL 2004",name:"Pure orange",hex:"#e75b12",color:15162130},ral4008:{label:"RAL 4008",name:"Signal violet",hex:"#844c82",color:8670338},ral8017:{label:"RAL 8017",name:"Chocolate brown",hex:"#45322e",color:4534830},ral7040:{label:"RAL 7040",name:"Window grey",hex:"#9da3a6",color:10331046},ral9016:{label:"RAL 9016",name:"Traffic white",hex:"#f1f0ea",color:15855850}},cy=Object.keys(zt),YC=cy.slice(0,8),On={carbon:{label:"Carbon steel",short:"CRS",density:7850,baseHex:"#7a746c",galvanizedHex:"#9aa48e",metalness:.9,roughness:.46,grain:"rolled",preview:{hi:"#c4bdb4",mid:"#8a847c",lo:"#5a564f"},cardImage:"./materials/cards/carbon-steel.jpg"},ss304:{label:"Stainless 304",short:"304",density:7930,baseHex:"#e8eef2",galvanizedHex:"#c5d0c8",metalness:.99,roughness:.11,grain:"brushed",preview:{hi:"#f4f7f9",mid:"#c5ced4",lo:"#8f99a1"},cardImage:"./materials/cards/stainless-304.jpg"},alu:{label:"Aluminium",short:"ALU",density:2700,baseHex:"#f3f5f7",galvanizedHex:"#d8dcd8",metalness:.97,roughness:.17,grain:"fine",preview:{hi:"#fcfdfe",mid:"#e4e8eb",lo:"#b8bcc0"},cardImage:"./materials/cards/aluminium.jpg"}},qs={flat:{label:"Flat sheet"},topFold:{label:"Top fold"},sideReturns:{label:"Side returns"},cassette:{label:"Cassette panel"}},Ga={square:{label:"Square"},radius:{label:"Radius"},chamfer:{label:"Chamfer"}},uy=10;function Ys(t={}){if(t.corner==="square"||!t.corner)return 0;const e=Math.max(1,Math.floor(Math.min(Number(t.width)||0,Number(t.height)||0)/3));return Math.min(lt(t.cornerRadius,uy,1,150,1),e)}const ZC=[{label:"1000 × 2000",w:1e3,h:2e3},{label:"1250 × 2500",w:1250,h:2500},{label:"1500 × 3000",w:1500,h:3e3},{label:"2000 × 4000",w:2e3,h:4e3}],Sp=25.4,lo={mill:{label:"Mill / raw",code:"ML",roughness:.36},galvanized:{label:"Galvanized",code:"GZ",roughness:.4},brushed:{label:"Brushed",code:"BR",roughness:.22},powder:{label:"Powder coated",code:"PC",roughness:.48}},Ce={round60:{label:"Round hole",short:"R60",kind:"round",staggered:!0,through:!0,family:"standard",process:"punch",blurb:"Round openings on a true 60° staggered triangular pitch."},square:{label:"Square hole",short:"SQ",kind:"square",staggered:!1,through:!0,family:"standard",process:"punch",blurb:"Square openings on an aligned straight grid for architectural applications."},slot:{label:"Slot hole",short:"SL",kind:"slot",staggered:!0,through:!0,family:"standard",process:"punch",blurb:"Vertical round-ended slots with independent column and row pitch."},hex:{label:"Hexagonal",short:"HX",kind:"hex",staggered:!0,through:!0,family:"standard",process:"punch",blurb:"True six-sided openings on a 60° staggered honeycomb layout. Size is point-to-point."},roundStraight:{label:"Round · straight",short:"RS",kind:"round",staggered:!1,through:!0,family:"standard",process:"punch",blurb:"Round openings with horizontal and vertical rows aligned."},bridgeSlot:{label:"Bridge slot",short:"BS",kind:"bridge",staggered:!0,through:!0,formed:!0,family:"formed",process:"form+punch",blurb:"Horizontal raised bridge/louver over a slotted opening for directional flow."},trieur:{label:"Trieur cups",short:"TR",kind:"trieur",staggered:!0,through:!1,formed:!0,family:"formed",process:"form",blurb:"Formed sorting cups/dimples with no through-cut opening."},perfocon:{label:"Perfocon conical",short:"PF",kind:"perfocon",staggered:!0,through:!0,conical:!0,formed:!0,family:"specialty",process:"form+punch",blurb:"Raised conical collar with a punched-through centre. Choose 30° heavy-duty or 60° DIN 9861 / ISO 6752."},decorative:{label:"Decorative clusters",short:"DC",kind:"decorative",staggered:!1,through:!0,family:"specialty",process:"punch",blurb:"Repeatable 13-hole diamond clusters on a controlled motif pitch."},embossed:{label:"Embossed diamond",short:"EM",kind:"embossed",staggered:!0,through:!0,formed:!0,family:"formed",process:"form+punch",blurb:"Raised diamond formed on the face, punched through from the back so the opening is visible on the reverse."}},KC=[{id:"standard",title:"Standard perforation",keys:["round60","square","slot","hex","roundStraight"]},{id:"formed",title:"Formed & specialty",keys:["bridgeSlot","trieur","perfocon","decorative","embossed"]}],go={round60:{holeSize:8,pitch:12},square:{holeSize:8,pitch:12},slot:{holeSize:5,slotLength:20,pitch:12,rowPitch:24},hex:{holeSize:8,pitch:12},roundStraight:{holeSize:8,pitch:12},bridgeSlot:{holeSize:4,slotLength:22,pitch:26,rowPitch:12},trieur:{holeSize:8,pitch:10},perfocon:{holeSize:3,pitch:8},decorative:{holeSize:3,pitch:32},embossed:{holeSize:12,pitch:18}},JC="Perforated Metal Sheet",hy="Configure perforation, material, finish and fabrication size in real time",QC="mazenbanat@outlook.com",eR="+961 81931045",Zs=Math.sqrt(3)/2,P0={60:{label:"60° DIN 9861",blurb:"ISO 6752 / DIN 9861 Shape DA — standard countersunk head. d₂ = d₁ + √3 mm."},30:{label:"30° heavy duty",blurb:"Dense mill-screen packing. Head is only 1 mm larger than the entrance."}};function Fn(t={}){var u;const e=lt(t.thickness,be.thickness,.5,12,.5),n=lt(t.holeSize,(u=go.perfocon)==null?void 0:u.holeSize,1,80,1),i=Number(t.coneAngle)===30?30:60,r=i/2*Math.PI/180,s=i===30?1:Math.sqrt(3),o=n,a=n+s,l=s/2/Math.tan(r),c=Number((o+2*e*Math.tan(r)).toFixed(2));return{entrance:o,head:a,exit:c,height:l,includedDeg:i,headAdd:s}}const be={productName:JC,skuPrefix:"PERF",contactEmail:QC,contactPhone:eR,manufacturer:"Innovio Solutions",width:1200,height:2400,thickness:2,basePrice:72,currency:"USD",materialRateCarbon:1.42,materialRateSs304:4.85,materialRateAlu:3.15,finishRateMill:0,finishRateGalvanized:.58,finishRateBrushed:.42,finishRatePowder:.96,punchRate:.014,formedPunchRate:.006,topFoldAdd:18,sideReturnsAdd:32,cassetteAdd:54,customFoldAdd:28,mountingAdd:12,formedPatternAdd:24,notchAdd:8,deburrStandardAdd:4,deburrFineAdd:12,toleranceFineAdd:16,flatnessPrecisionAdd:18,nonStandardBendAdd:10},je={width:1200,height:2400,thickness:2,material:"carbon",finish:"mill",color:"ral7016",pattern:"round60",holeSize:8,slotLength:20,pitch:12,rowPitch:12,border:25,orientation:"portrait",units:"mm",quantity:1,panelForm:"flat",flangeDepth:25,bendAngle:90,bendRadius:2,corner:"square",cornerRadius:10,mounting:"none",mountingPitch:150,notches:!1,deburr:"standard",tolerance:"iso-m",flatness:"standard",coneAngle:60};function gc(t,e,n=e==="in"?3:0){const i=e==="in"?t/Sp:t;return Number(i.toFixed(n))}function L0(t,e){const n=Number(t);return Number.isFinite(n)&&e==="in"?n*Sp:n}function lt(t,e,n,i,r=1){const s=Number(t),o=Number.isFinite(s)?s:e;return Math.min(i,Math.max(n,Math.round(o/r)*r))}function tR(t){if(!t||typeof t!="object")return{...be};t.productName&&(be.productName=String(t.productName).slice(0,120)),t.skuPrefix&&(be.skuPrefix=String(t.skuPrefix).replace(/[^A-Za-z0-9]/g,"").slice(0,24).toUpperCase()||be.skuPrefix),t.contactEmail&&(be.contactEmail=String(t.contactEmail).slice(0,120)),t.manufacturer&&(be.manufacturer=String(t.manufacturer).slice(0,80));const e=Number(t.width),n=Number(t.height),i=Number(t.depth);Number.isFinite(e)&&(be.width=lt(e,be.width,200,3e3,5)),Number.isFinite(n)&&(be.height=lt(n,be.height,200,4e3,5)),Number.isFinite(i)&&(be.thickness=lt(i,be.thickness,.5,12,.5));const r=["basePrice","materialRateCarbon","materialRateSs304","materialRateAlu","finishRateMill","finishRateGalvanized","finishRateBrushed","finishRatePowder","punchRate","formedPunchRate","topFoldAdd","sideReturnsAdd","cassetteAdd","customFoldAdd","mountingAdd","formedPatternAdd","notchAdd","deburrStandardAdd","deburrFineAdd","toleranceFineAdd","flatnessPrecisionAdd","nonStandardBendAdd"];for(const s of r){const o=Number(t[s]);Number.isFinite(o)&&o>=0&&(be[s]=o)}return t.currency&&(be.currency=String(t.currency).replace(/[^A-Za-z]/g,"").slice(0,3).toUpperCase()||be.currency),{...be}}function dy(t={}){const e=lt(t.thickness,be.thickness,.5,12,.5),n=lt(t.holeSize,go.decorative.holeSize,1,80,1),i=Math.max(2,e);return Math.max(n+i,n*1.55)}function N0(t={}){const e=lt(t.holeSize,go.decorative.holeSize,1,80,1);return dy(t)*4+e}function _a(t={}){const e=lt(t.thickness,be.thickness,.5,12,.5),n=Ce[t.pattern]||Ce[je.pattern],i=n==null?void 0:n.kind,r=lt(t.holeSize,je.holeSize,1,80,1),s=lt(t.slotLength,je.slotLength,1,160,1),o=(n==null?void 0:n.through)!==!1,a=Math.max(2,e),l=o?n!=null&&n.conical?1:Math.max(2,Math.ceil(e)):Math.max(2,Math.ceil(e*1.5)),c=n!=null&&n.conical?Fn({...t,thickness:e,holeSize:r}):null,u=c?c.exit:r;let h,d;i==="slot"?(h=Math.ceil(r+a),d=Math.ceil(s+a)):i==="bridge"?(h=Math.ceil(s+a),d=Math.ceil(r+a)):i==="decorative"?(h=Math.ceil(N0({...t,thickness:e,holeSize:r})+a),d=h):(h=Math.ceil(u+a),d=Math.ceil(h*(n!=null&&n.staggered?Zs:1)));const p=i==="decorative"?N0({...t,thickness:e,holeSize:r})/2:u/2,m=Math.ceil(Math.max(e,p)/5)*5;return{minHoleSize:l,minPitch:Math.max(3,h),minPitchX:Math.max(3,h),minRowPitch:Math.max(3,d),minSlotLength:Math.max(3,Math.ceil(r+2)),minBorder:m,ligament:a}}function ot(t={}){var i;const e={...je,...t};e.material==="ss316"&&(e.material="alu"),On[e.material]||(e.material=je.material),lo[e.finish]||(e.finish=je.finish),zt[e.color]||(e.color=je.color),Ce[e.pattern]||(e.pattern=je.pattern),e.width=lt(e.width,be.width,200,3e3,5),e.height=lt(e.height,be.height,200,4e3,5),e.thickness=lt(e.thickness,be.thickness,.5,12,.5),e.holeSize=lt(e.holeSize,je.holeSize,1,80,1),e.slotLength=lt(e.slotLength,je.slotLength,1,160,1),e.pitch=lt(e.pitch,je.pitch,2,200,1),e.rowPitch=lt(e.rowPitch,((i=go[e.pattern])==null?void 0:i.rowPitch)??e.pitch,2,200,1);const n=Math.floor(Math.min(e.width,e.height)/3);return e.border=lt(e.border,je.border,0,Math.max(0,n),5),e.units=e.units==="in"?"in":"mm",e.quantity=lt(e.quantity,1,1,9999,1),e.panelForm==="customFold"&&(e.panelForm="topFold"),e.panelForm=qs[e.panelForm]?e.panelForm:"flat",e.flangeDepth=lt(e.flangeDepth,25,8,150,1),e.bendAngle=lt(e.bendAngle,90,30,120,1),e.bendRadius=lt(e.bendRadius,2,.5,20,.5),e.corner=Ga[e.corner]?e.corner:"square",e.cornerRadius=lt(e.cornerRadius,uy,1,150,1),e.mounting="none",e.mountingPitch=lt(e.mountingPitch,150,40,600,5),e.notches=!1,e.deburr=["none","standard","fine"].includes(e.deburr)?e.deburr:"standard",e.tolerance=["iso-c","iso-m","iso-f"].includes(e.tolerance)?e.tolerance:"iso-m",e.flatness=e.flatness==="precision"?"precision":"standard",e.orientation=e.orientation==="landscape"?"landscape":"portrait",e.coneAngle=Number(e.coneAngle)===30?30:60,e}function nR(){return ot({...je,width:be.width,height:be.height,thickness:be.thickness})}function iR(t,e){switch(e.type){case"set":return ot({...t,[e.key]:e.value});case"setMany":return ot({...t,...e.values});case"load":return ot(e.config);case"applyCatalogDefaults":return t.width===je.width&&t.height===je.height&&t.thickness===je.thickness?ot({...t,...e.values}):t;case"reset":return nR();default:return t}}function fy(t){const e=ot(t),n=Ce[e.pattern],i=!!(n!=null&&n.staggered),r=(n==null?void 0:n.kind)==="slot"||(n==null?void 0:n.kind)==="bridge"?e.rowPitch:i?e.pitch*Zs:e.pitch;return{c:e,staggered:i,rowPitch:r,left:e.border,right:e.width-e.border,bottom:e.border,top:e.height-e.border}}function Hh(t,e,n){return!(n>0)||t>e+1e-6?0:Math.floor((e-t)/n+1e-6)+1}function rR(t,e,{limit:n=1/0}={}){const{c:i,staggered:r,rowPitch:s,left:o,right:a,bottom:l,top:c}=fy(t);let u=0,h=0;for(let d=l+s/2;d<=c-s/2+1e-6;d+=s,u++){const p=r&&u%2?i.pitch/2:0;for(let m=o+i.pitch/2+p;m<=a-i.pitch/2+1e-6;m+=i.pitch)if(e(m,d,h)===!1||(h+=1,h>=n))return h}return h}function Mp(t){const e=ot(t),n=dy(e);return[[0,-2*n],[-n,-n],[0,-n],[n,-n],[-2*n,0],[-n,0],[0,0],[n,0],[2*n,0],[-n,n],[0,n],[n,n],[0,2*n]]}function sR(t){const{c:e,staggered:n,rowPitch:i,left:r,right:s,bottom:o,top:a}=fy(t),l=Hh(o+i/2,a-i/2,i);if(l<=0)return 0;const c=Hh(r+e.pitch/2,s-e.pitch/2,e.pitch);if(!n)return l*c;const u=Hh(r+e.pitch,s-e.pitch/2,e.pitch),h=Math.ceil(l/2),d=Math.floor(l/2);return h*c+d*u}function Eu(t){var i;const e=sR(t),n=ot(t);return((i=Ce[n.pattern])==null?void 0:i.kind)==="decorative"?e*Mp(n).length:e}function wp(t){const e=ot(t),n=Ce[e.pattern],i=n==null?void 0:n.kind;if((n==null?void 0:n.through)===!1)return 0;const r=e.holeSize,s=Math.max(e.pitch,.1);let o=0;if(i==="round"||i==="perfocon"){const a=n!=null&&n.staggered?s*s*Zs:s*s;o=Math.PI*(r/2)**2/Math.max(1e-6,a)}else if(i==="square")o=r*r/Math.max(1e-6,s*s);else if(i==="hex"){const a=3*Math.sqrt(3)/8*r*r,l=s*s*Zs;o=a/Math.max(1e-6,l)}else if(i==="decorative"){const a=s*s;o=Mp(e).length*Math.PI*(r/2)**2/Math.max(1e-6,a)}else if(i==="slot"||i==="bridge"){const a=r,l=Math.max(e.slotLength,a);o=(Math.max(0,l-a)*a+Math.PI*(a/2)**2)/Math.max(1e-6,e.pitch*e.rowPitch)}else if(i==="embossed"){const a=r*r/2,l=s*s*Zs;o=a/Math.max(1e-6,l)}return Math.min(88,Math.max(0,o*100))}function Ep(t){const e=ot(t),n=On[e.material].density,i=e.width/1e3*(e.height/1e3)*(e.thickness/1e3),r=Math.max(0,e.width-e.border*2),s=Math.max(0,e.height-e.border*2),o=r*s/Math.max(1,e.width*e.height),a=wp(e)/100*o;return i*n*(1-a)}function Vh(t){const e=ot(t),n=On[e.material]||On.carbon,i=ly(e);let r=i.hex||n.baseHex,s=i.metalness,o=i.roughness,a=i.envMapIntensity,l=i.clearcoat,c=i.anisotropy;return e.finish==="powder"&&(r=zt[e.color].hex,s=0,o=i.roughness,a=i.envMapIntensity,l=i.clearcoat,c=0),{hex:r,metalness:s,roughness:o,envMapIntensity:a,clearcoat:l,anisotropy:c,grain:n.grain,pbr:i}}function oR(t){return t>=50?.82:t>=20?.9:t>=5?.96:1}function py(t){const e=ot(t),n=Ep(e),i={carbon:be.materialRateCarbon,ss304:be.materialRateSs304,alu:be.materialRateAlu}[e.material]??be.materialRateCarbon,r={mill:be.finishRateMill,galvanized:be.finishRateGalvanized,brushed:be.finishRateBrushed,powder:be.finishRatePowder}[e.finish]??0,s=Eu(e),o=Ce[e.pattern]||{},a={flat:0,topFold:be.topFoldAdd,sideReturns:be.sideReturnsAdd,cassette:be.cassetteAdd,customFold:be.customFoldAdd}[e.panelForm]||0,l=e.mounting==="none"?0:be.mountingAdd,c=s*(o.through===!1?be.formedPunchRate:be.punchRate),u=o.formed?be.formedPatternAdd:0,h=e.deburr==="fine"?be.deburrFineAdd:e.deburr==="standard"?be.deburrStandardAdd:0,d=e.tolerance==="iso-f"?be.toleranceFineAdd:0,p=e.flatness==="precision"?be.flatnessPrecisionAdd:0,m=e.panelForm!=="flat"&&Math.abs(e.bendAngle-90)>.5?be.nonStandardBendAdd:0;return(n*(i+r)+c+be.basePrice+a+l+u+h+d+p+m)*e.quantity*oR(e.quantity)}function Tp(t,e=be.currency){const n=Number(t)||0,i=String(e||"USD").toUpperCase();try{return new Intl.NumberFormat(void 0,{style:"currency",currency:i,minimumFractionDigits:2,maximumFractionDigits:2}).format(n)}catch{return`${i} ${n.toFixed(2)}`}}function aR(t){const e=ot(t);let n=3,i=5;e.finish==="powder"?(n+=2,i+=2):e.finish==="galvanized"&&(n+=1,i+=1),e.panelForm!=="flat"&&(n+=1,i+=2),e.deburr==="fine"&&(i+=1),e.tolerance==="iso-f"&&(n+=1,i+=1),e.flatness==="precision"&&(n+=1,i+=2);const r=Math.min(10,Math.floor((e.quantity-1)/15));return n+=r,i+=Math.min(12,Math.ceil(e.quantity/12)),`${n}–${i} days`}function my(t){const e=ot(t),n=(r,s,o)=>s<=r.w&&o<=r.h,i=ZC.find(r=>n(r,e.width,e.height)||n(r,e.height,e.width));if(i){const r=!(e.width<=i.w&&e.height<=i.h);return{ok:!0,sheet:i,rotated:r,label:r?`Fits ${i.label} mm stock if rotated`:`Fits ${i.label} mm stock`}}return{ok:!1,sheet:null,rotated:!1,label:"Exceeds standard stock sheet sizes"}}function lR(t){const e=ot(t),n=_a(e),i=Ce[e.pattern],r=i==null?void 0:i.kind,s=[],o=(i==null?void 0:i.through)!==!1;e.holeSize<n.minHoleSize&&s.push({level:"block",field:"holeSize",text:`${o?"Opening":"Formed feature"} ${e.holeSize} mm is below the ${n.minHoleSize} mm minimum for ${e.thickness} mm material.`}),(r==="slot"||r==="bridge")&&e.slotLength<n.minSlotLength&&s.push({level:"block",field:"slotLength",text:`Slot length ${e.slotLength} mm must be at least ${n.minSlotLength} mm for a ${e.holeSize} mm slot width.`}),e.pitch<n.minPitchX&&s.push({level:"block",field:"pitch",text:`${r==="decorative"?"Motif pitch":r==="slot"||r==="bridge"?"Column pitch":"Pitch"} ${e.pitch} mm is below the ${n.minPitchX} mm minimum for this pattern.`}),(r==="slot"||r==="bridge")&&e.rowPitch<n.minRowPitch&&s.push({level:"block",field:"rowPitch",text:`Row pitch ${e.rowPitch} mm is below the ${n.minRowPitch} mm minimum for this ${r==="slot"?"vertical slot":"horizontal bridge slot"} geometry.`}),e.border<n.minBorder&&s.push({level:"block",field:"border",text:`Edge distance ${e.border} mm is below the ${n.minBorder} mm minimum.`}),e.mounting!=="none"&&e.border<18&&s.push({level:"block",field:"border",text:"Mounting features require at least an 18 mm solid perimeter border."}),e.panelForm!=="flat"&&e.flangeDepth<e.thickness*4&&s.push({level:"warn",field:"flangeDepth",text:`Flange depth should be at least 4× thickness (${e.thickness*4} mm).`}),e.panelForm!=="flat"&&e.bendRadius<e.thickness&&s.push({level:"warn",field:"bendRadius",text:"Bend radius is below material thickness and may crack."});const a=my(e);return a.ok||s.push({level:"warn",text:a.label+". Confirm a custom blank or nested yield."}),Eu(e)>25e4&&s.push({level:"warn",text:"Opening count is high; perforation time and cost will increase."}),s}function cR(t){var o,a,l,c;const e=ot(t),n={};let i=_a(e);e.holeSize<i.minHoleSize&&(n.holeSize=i.minHoleSize);const r=ot({...e,...n});i=_a(r),(((o=Ce[e.pattern])==null?void 0:o.kind)==="slot"||((a=Ce[e.pattern])==null?void 0:a.kind)==="bridge")&&r.slotLength<i.minSlotLength&&(n.slotLength=i.minSlotLength);const s=ot({...e,...n});return i=_a(s),s.pitch<i.minPitchX&&(n.pitch=i.minPitchX),(((l=Ce[e.pattern])==null?void 0:l.kind)==="slot"||((c=Ce[e.pattern])==null?void 0:c.kind)==="bridge")&&s.rowPitch<i.minRowPitch&&(n.rowPitch=i.minRowPitch),s.border<i.minBorder&&(n.border=i.minBorder),s.mounting!=="none"&&s.border<18&&(n.border=Math.max(n.border||0,20)),s.panelForm!=="flat"&&s.flangeDepth<s.thickness*4&&(n.flangeDepth=Math.ceil(s.thickness*4)),s.panelForm!=="flat"&&s.bendRadius<s.thickness&&(n.bendRadius=s.thickness),n}function uR({config:t,sku:e,openArea:n,weight:i,price:r,lead:s,currency:o=be.currency}){var p,m,v;const a=ot(t),l=`${lo[a.finish].label}${a.finish==="powder"?` · ${zt[a.color].label} – ${zt[a.color].name}`:""}`,c=((p=Ce[a.pattern])==null?void 0:p.kind)==="slot"||((m=Ce[a.pattern])==null?void 0:m.kind)==="bridge",u=c?`${a.pitch} × ${a.rowPitch} mm centers`:`${a.pitch} mm centers`,h=(v=Ce[a.pattern])==null?void 0:v.kind,d=h==="trieur"?`cup ${a.holeSize} mm`:h==="embossed"?`diamond ${a.holeSize} mm punched through`:h==="perfocon"?`entrance Ø${a.holeSize} mm / ${Fn(a).includedDeg}° head Ø${Fn(a).head.toFixed(2)} mm / exit Ø${Fn(a).exit} mm`:h==="hex"?`hex ${a.holeSize} mm point-to-point`:`opening ${a.holeSize} mm`;return[`SKU: ${e}`,`Sheet: ${a.width} × ${a.height} × ${a.thickness} mm`,`Material: ${On[a.material].label}`,`Pattern: ${Ce[a.pattern].label} · ${d} · ${u}`,...c?[`Slot length: ${a.slotLength} mm`]:[],`Finish: ${l}`,`Form: ${qs[a.panelForm].label}${a.panelForm!=="flat"?` · flange ${a.flangeDepth} mm · bend ${a.bendAngle}° · R${a.bendRadius}`:""}`,`Corner treatment: ${Ga[a.corner].label}${a.corner==="square"?"":` ${Ys(a)} mm`}`,`Deburr: ${a.deburr} · tolerance: ${a.tolerance} · flatness: ${a.flatness}`,`Quantity: ${a.quantity}`,`Open area: ${n.toFixed(1)}%`,`Est. mass: ${i.toFixed(1)} kg`,`Indicative price: ${Tp(r,o)}`,`Lead time: ${s}`].join(`
`)}function hR(t,e=be.skuPrefix){var c,u,h;const n=ot(t),i=On[n.material].short,r=lo[n.finish].code,s=n.finish==="powder"?zt[n.color].label.replace("RAL ",""):r,o=Ce[n.pattern].short,a=((c=Ce[n.pattern])==null?void 0:c.kind)==="slot"||((u=Ce[n.pattern])==null?void 0:u.kind)==="bridge"?`${n.pitch}X${n.rowPitch}P`:`${n.pitch}P`,l=(h=Ce[n.pattern])!=null&&h.conical?`C${n.coneAngle}`:"";return`${e}-${i}-${n.thickness}T-${o}${n.holeSize}${l}-${a}-${s}`.replace(/\.0/g,"")}function Gh(t){const e=ot(t),n=new URL(location.origin+location.pathname.replace(/index\.html$/i,"")),i={w:e.width,h:e.height,t:e.thickness,m:e.material,f:e.finish,c:e.color,p:e.pattern,d:e.holeSize,l:e.slotLength,x:e.pitch,y:e.rowPitch,b:e.border,q:e.quantity,form:e.panelForm,fd:e.flangeDepth,ba:e.bendAngle,br:e.bendRadius,corner:e.corner,cr:e.cornerRadius,mount:e.mounting,mp:e.mountingPitch,deburr:e.deburr,tol:e.tolerance,flat:e.flatness,o:e.orientation,u:e.units,cone:e.coneAngle};return Object.entries(i).forEach(([r,s])=>n.searchParams.set(r,s)),n.toString()}function dR(t){const e=(t==null?void 0:t.configuration)||t||{},n=e.configuration&&typeof e.configuration=="object"?e.configuration:e;return!n||n.omitted?null:ot(n)}function fR(){const t=new URL(location.href).searchParams,e=t.get("p")??je.pattern,n=go[e]||{};return ot({width:t.get("w")??be.width,height:t.get("h")??be.height,thickness:t.get("t")??be.thickness,material:t.get("m")??je.material,finish:t.get("f")??je.finish,color:t.get("c")??je.color,pattern:e,holeSize:t.get("d")??n.holeSize??je.holeSize,slotLength:t.get("l")??n.slotLength??je.slotLength,pitch:t.get("x")??n.pitch??je.pitch,rowPitch:t.get("y")??n.rowPitch??je.rowPitch,border:t.get("b")??je.border,quantity:t.get("q")??je.quantity,panelForm:t.get("form")??je.panelForm,flangeDepth:t.get("fd")??je.flangeDepth,bendAngle:t.get("ba")??je.bendAngle,bendRadius:t.get("br")??je.bendRadius,corner:t.get("corner")??je.corner,cornerRadius:t.get("cr")??je.cornerRadius,mounting:t.get("mount")??je.mounting,mountingPitch:t.get("mp")??je.mountingPitch,notches:!1,deburr:t.get("deburr")??je.deburr,tolerance:t.get("tol")??je.tolerance,flatness:t.get("flat")??je.flatness,orientation:t.get("o")??je.orientation,units:t.get("u")??je.units,coneAngle:t.get("cone")??je.coneAngle})}const pR=new aC,Wh=new Map;function I0(t){const e="./";return`${e.endsWith("/")?e:`${e}/`}${t.replace(/^\//,"")}`}function mR(t,{srgb:e=!1,anisotropy:n=1}={}){return new Promise((i,r)=>{pR.load(t,s=>{s.wrapS=Ii,s.wrapT=Ii,s.anisotropy=Math.max(1,n),s.colorSpace=e?hn:Zn,s.generateMipmaps=!0,s.minFilter=Ti,s.magFilter=en,s.needsUpdate=!0,i(s)},void 0,r)})}async function gR(t,e){try{return await mR(t,e)}catch{return null}}async function Wo(t,e){return(await Promise.all(t.map(i=>gR(i,e)))).find(Boolean)||null}function $o(t,e){return[I0(`materials/${t}/${e}.jpg`),I0(`materials/${t}/${e}.png`)]}async function vR(t,e=1){const n=ly(t),i=n.folder||n.id,r=`${i}|${n.useColorMap!==!1}|${n.useNormalMap!==!1}|${n.anisotropyMap?1:0}`,s=Wh.get(r);if(s)return s;const o=(async()=>{const a=e,[l,c,u,h,d]=await Promise.all([Wo($o(i,"basecolor"),{srgb:!0,anisotropy:a}),Wo($o(i,"normal"),{anisotropy:a}),Wo($o(i,"roughness"),{anisotropy:a}),n.useMetalnessMap===!1?Promise.resolve(null):Wo($o(i,"metallic"),{anisotropy:a}),n.anisotropyMap?Wo($o(i,"anisotropy"),{anisotropy:a}):Promise.resolve(null)]);if(!l&&!c&&!u&&!h)throw new Error(`PBR maps missing for ${i}`);return{preset:n,folder:i,colorMap:l,normalMap:c,roughnessMap:u,metalnessMap:h,aoMap:null,anisotropyMap:d}})();Wh.set(r,o);try{return await o}catch(a){throw Wh.delete(r),a}}function _R(t,e,n,i){if(!t||!e)return;const r=n.pbr||e.preset||{},s=r.useColorMap!==!1,o=r.useNormalMap!==!1,a=r.useRoughnessMap!==!1;t.map=s?e.colorMap:null,t.normalMap=o?e.normalMap:null,t.roughnessMap=a?e.roughnessMap:null,t.metalnessMap=r.useMetalnessMap===!1?null:e.metalnessMap,t.aoMap=e.aoMap||null,t.aoMapIntensity=e.aoMap?.85:0,t.normalScale&&t.normalScale.set(1,1),[t.map,t.normalMap,t.roughnessMap,t.metalnessMap,t.aoMap,e.anisotropyMap].forEach(l=>{l&&(l.wrapS=Ii,l.wrapT=Ii,l.repeat.copy(i))}),t.isMeshPhysicalMaterial&&(t.anisotropy=n.anisotropy||0,t.anisotropyRotation=0,"anisotropyMap"in t&&(t.anisotropyMap=e.anisotropyMap||null))}function xR(t){const e=t.width/1e3,n=t.height/1e3,r=Math.max(t.pitch,t.rowPitch||t.pitch,1)/1e3,s=Math.max(r*6,.22),o=.55,a=Math.min(o,e,Math.max(s,e*.32)),l=Math.min(o,n,Math.max(s,n*.32));return{detailW:a,detailH:l,magnify:1}}async function yR(t,e="#b8bcc2"){const n=t.alphaMap;if(!(n!=null&&n.image))return null;await SR(n);const i=n.image,r=Math.min(1024,i.width||512),s=Math.min(1024,i.height||512),o=document.createElement("canvas");o.width=r,o.height=s;const a=o.getContext("2d");a.drawImage(i,0,0,r,s);const l=a.getImageData(0,0,r,s),c=new He(e),u=Math.round(c.r*255),h=Math.round(c.g*255),d=Math.round(c.b*255),p=a.createImageData(r,s);for(let v=0;v<l.data.length;v+=4){const g=l.data[v];p.data[v]=u,p.data[v+1]=h,p.data[v+2]=d,p.data[v+3]=g}a.putImageData(p,0,0);const m=new cp(o);return m.colorSpace=hn,m.wrapS=n.wrapS,m.wrapT=n.wrapT,m.repeat.copy(n.repeat),m.offset.copy(n.offset),m.minFilter=en,m.magFilter=en,m.generateMipmaps=!1,m.needsUpdate=!0,m}async function SR(t){const e=t==null?void 0:t.image;if(e&&typeof e.decode=="function")try{await e.decode()}catch{}}async function MR(t,{colorHex:e,metalness:n=.82,roughness:i=.34}={}){const r=new zr({color:e||"#b8bcc2",metalness:n,roughness:i,side:Vn,transparent:!1,opacity:1,alphaTest:0}),s=await yR(t,r.color.getHexString());return s?(r.map=s,r.transparent=!0,r.alphaTest=.5,r.depthWrite=!0):t.map&&(r.map=t.map,r.color.copy(t.color)),r}function wR(t,e){const n=Math.min(t.border,40,Math.max(8,Math.round(Math.min(e.detailW,e.detailH)*1e3*.1))),i=Math.round(e.detailW*1e3),r=Math.round(e.detailH*1e3);return{...t,width:i+n*2,height:r+n*2,border:n,panelForm:"flat",flangeDepth:0,bendAngle:0,bendRadius:0,corner:"square",cornerRadius:0}}function Tu(){var o;if(typeof window>"u")return!1;const t=navigator.userAgent||"";if(/iPad|iPhone|iPod/.test(t)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)return!0;const n=window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>1,i=window.matchMedia("(max-width: 900px)").matches,r=!!((o=navigator.connection)!=null&&o.saveData),s=Number(navigator.deviceMemory)>0&&navigator.deviceMemory<=4;return r||s||n&&i||i}function sf(){const t=navigator.userAgent||"",e=/iPad|iPhone|iPod/.test(t)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,n=/Android/i.test(t),i=e&&/Safari/i.test(t)&&!/CriOS|FxiOS|EdgiOS|OPiOS/i.test(t),r=!!window.isSecureContext,s=e||navigator.maxTouchPoints>1&&!n&&!/Mobile/i.test(t);let o="none";return e?o="quicklook":n&&(o="webxr"),{ios:e,android:n,touchTablet:s,desktop:!e&&!n,safari:i,secure:r,system:o,label:e?"iOS":n?"Android":"Desktop"}}const of="This device has no AR camera. Open the configuration on a phone — Chrome on Android, or Safari on iOS — to view the sheet at 1:1.";async function ER(){var t;if(!((t=navigator.xr)!=null&&t.isSessionSupported))return!1;try{return!!await navigator.xr.isSessionSupported("immersive-ar")}catch{return!1}}function TR(t){const e=String((t==null?void 0:t.message)||t||"");return/no xr hardware|not supported|requestSession|immersive-ar|xr system/i.test(e)?of:e||of}const $h=new D;function Ap(t,e,n,i,r,s){const o=Math.min(s,i/2,r/2);t.beginPath(),t.moveTo(e+o,n),t.lineTo(e+i-o,n),t.quadraticCurveTo(e+i,n,e+i,n+o),t.lineTo(e+i,n+r-o),t.quadraticCurveTo(e+i,n+r,e+i-o,n+r),t.lineTo(e+o,n+r),t.quadraticCurveTo(e,n+r,e,n+r-o),t.lineTo(e,n+o),t.quadraticCurveTo(e,n,e+o,n),t.closePath()}function AR(t,e,n,i,r){const s=Math.min(i,r)/2;Ap(t,e-i/2,n-r/2,i,r,s),t.fill()}function bR(t,e,n,i,r=0){t.save(),t.translate(e,n),t.rotate(Math.PI/4),Ap(t,-i/2,-i/2,i,i,r),t.restore()}function CR(t,e,n,i){t.beginPath();for(let r=0;r<6;r++){const s=Math.PI/3*r,o=e+i*Math.cos(s),a=n+i*Math.sin(s);r===0?t.moveTo(o,a):t.lineTo(o,a)}t.closePath(),t.fill()}function RR(t,e,n,i,r,s,o,a=1){var u;const l=(u=Ce[e.pattern])==null?void 0:u.kind,c=r*a;if(l==="trieur"){t.beginPath(),t.arc(n,i,c/2,0,Math.PI*2),t.fill();return}if(l==="square"){t.fillRect(n-c/2,i-c/2,c,c);return}if(l==="slot"){AR(t,n,i,c,Math.max(c,e.slotLength*o));return}if(l==="bridge"){const h=Math.max(1.2,e.holeSize*o*a),d=Math.max(h,e.slotLength*s);t.fillRect(n-d/2,i-h/2,d,h);return}if(l==="hex"){CR(t,n,i,c/2);return}if(l==="embossed"){const h=c/2;t.beginPath(),t.moveTo(n,i-h),t.lineTo(n+h,i),t.lineTo(n,i+h),t.lineTo(n-h,i),t.closePath(),t.fill();return}if(l==="decorative"){const h=Math.max(1.4,e.holeSize*Math.min(s,o));Mp(e).forEach(([d,p])=>{t.beginPath(),t.arc(n+d*s,i+p*o,h/2,0,Math.PI*2),t.fill()});return}t.beginPath(),t.arc(n,i,c/2,0,Math.PI*2),t.fill()}function PR(t,e,n,i,r,s,o){var l;const a=(l=Ce[e.pattern])==null?void 0:l.kind;if(a==="trieur"){const c=t.createRadialGradient(n,i*.98,0,n,i,r*.62);c.addColorStop(0,"#f4f4f4"),c.addColorStop(.45,"#c6c6c6"),c.addColorStop(1,"#7a7a7a"),t.fillStyle=c,t.beginPath(),t.arc(n,i,r*.58,0,Math.PI*2),t.fill();return}if(a==="embossed"){const c=r*.9,u=t.createLinearGradient(n-c/2,i-c/2,n+c/2,i+c/2);u.addColorStop(0,"#686868"),u.addColorStop(.34,"#f6f6f6"),u.addColorStop(.58,"#c8c8c8"),u.addColorStop(1,"#737373"),t.fillStyle=u,bR(t,n,i,c,c*.08),t.fill();return}if(a==="perfocon"){const c=r*.72,u=t.createRadialGradient(n-c*.18,i-c*.18,c*.05,n,i,c);u.addColorStop(0,"#efefef"),u.addColorStop(.38,"#b9b9b9"),u.addColorStop(.68,"#747474"),u.addColorStop(1,"#969696"),t.fillStyle=u,t.beginPath(),t.arc(n,i,c,0,Math.PI*2),t.fill();return}if(a==="bridge"){const c=Math.max(r,e.slotLength*s),u=r*1.35,h=t.createLinearGradient(n,i-u/2,n,i+u/2);h.addColorStop(0,"#8a8a8a"),h.addColorStop(.45,"#f0f0f0"),h.addColorStop(1,"#6e6e6e"),t.fillStyle=h,Ap(t,n-c/2,i-u/2,c,u,u/2),t.fill()}}const D0=512,Jc=.5,jh=.12,Xh=4.6;function gy(t){const e=Ce[t.pattern],n=!!(e!=null&&e.staggered),i=e==null?void 0:e.kind,r=i==="slot"||i==="bridge"?t.rowPitch:n?t.pitch*Zs:t.pitch,s=Math.max(.01,t.pitch),o=Math.max(.01,n?r*2:r);return{pattern:e,staggered:n,kind:i,rowPitch:r,tileW:s,tileH:o}}function LR(t,e,n,i,r){for(const s of[-t,0,t])for(const o of[-e,0,e])r(n+s,i+o)}function U0(t,{holeScale:e=1,bump:n=!1}={}){const{staggered:i,kind:r,rowPitch:s,tileW:o,tileH:a}=gy(t),l=D0,c=Math.max(2,Math.round(D0*a/o)),u=document.createElement("canvas");u.width=l,u.height=c;const h=u.getContext("2d",{alpha:!1}),d=l/o,p=c/a,m=Math.max(1.6,t.holeSize*Math.min(d,p));h.fillStyle=n?"#808080":"#ffffff",h.fillRect(0,0,l,c),n||(h.fillStyle="#000000"),h.imageSmoothingEnabled=r!=="square"&&r!=="bridge",h.imageSmoothingQuality="high";const v=s*p,g=(f,x)=>{LR(l,c,f,x,(_,y)=>{n?PR(h,t,_,y,m,d):RR(h,t,_,y,m,d,p,e)})};return h.save(),h.translate(0,c),h.scale(1,-1),g(l/2,v/2),i&&g(l,v+v/2),h.restore(),u}function bp(t){return t==="trieur"||t==="embossed"||t==="bridge"||t==="perfocon"}function ys(t,e=4,{holeScale:n=1,skipBump:i=!1}={}){var g,f;const r=ot(t),s=(g=Ce[r.pattern])==null?void 0:g.kind,o=!!((f=Ce[r.pattern])!=null&&f.formed)&&!i&&!bp(s),{tileW:a,tileH:l}=gy(r),c=Math.max(.01,r.width-2*r.border),u=Math.max(.01,r.height-2*r.border),h=c/a,d=u/l,p={repeatX:h,repeatY:d},m=U0(r,{holeScale:n,bump:!1}),v=o?U0(r,{bump:!0}):null;return{alphaMap:O0(m,e,p),bumpMap:v?O0(v,e,{...p,mipmaps:!0}):null,backAlphaMap:null}}function qh(t,e){var i,r,s;const n=ot(t);if((i=Ce[n.pattern])!=null&&i.conical){const o=Fn(n),a=ys(n,e,{holeScale:1,skipBump:!0});return a.backAlphaMap=ys(n,e,{holeScale:o.exit/o.entrance,skipBump:!0}).alphaMap,a}if(((r=Ce[n.pattern])==null?void 0:r.kind)==="embossed"){const o=ys(n,e,{holeScale:.48,skipBump:!0});return o.backAlphaMap=o.alphaMap,o}if(((s=Ce[n.pattern])==null?void 0:s.kind)==="trieur"){const o=ys(n,e,{holeScale:.72,skipBump:!0});return o.backAlphaMap=ys(n,e,{holeScale:.9,skipBump:!0}).alphaMap,o}return ys(n,e)}function Kl(t,e,n,i){var h,d,p;const r=((h=Ce[i.pattern])==null?void 0:h.through)!==!1,s=(d=Ce[i.pattern])==null?void 0:d.kind,o=!!((p=Ce[i.pattern])!=null&&p.formed)&&!bp(s),a=r||s==="trieur",l=a?n.alphaMap:null,c=a?n.backAlphaMap||n.alphaMap:null,u=typeof navigator<"u"&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);t&&(t.alphaMap=l,t.alphaTest=a?Jc:0,t.transparent=!!(a&&u),t.bumpMap=n.bumpMap,t.bumpScale=o?.016:0,t.needsUpdate=!0),e&&(e.alphaMap=c,e.alphaTest=a?Jc:0,e.transparent=!!(a&&u),e.bumpMap=null,e.bumpScale=0,e.needsUpdate=!0)}function F0(t,e){const n=new Set([e.alphaMap,e.bumpMap,e.backAlphaMap].filter(Boolean));t.forEach(i=>{i&&!n.has(i)&&(n.add(i),i.dispose())})}function O0(t,e,{repeatX:n=1,repeatY:i=1,mipmaps:r=!1}={}){const s=new cp(t);return s.colorSpace=Zn,s.wrapS=Ii,s.wrapT=Ii,s.repeat.set(n,i),s.generateMipmaps=r,s.minFilter=r?Ti:en,s.magFilter=en,s.anisotropy=r?Math.max(1,e):1,s.needsUpdate=!0,s}function NR(t,e,n){const i=new yu,r=t/2,s=Math.min(Ys(n)/1e3,t/3,e/3);if(n.corner==="radius"&&s>5e-4){const o=s;i.moveTo(-r+o,0),i.lineTo(r-o,0),i.absarc(r-o,o,o,-Math.PI/2,0,!1),i.lineTo(r,e-o),i.absarc(r-o,e-o,o,0,Math.PI/2,!1),i.lineTo(-r+o,e),i.absarc(-r+o,e-o,o,Math.PI/2,Math.PI,!1),i.lineTo(-r,o),i.absarc(-r+o,o,o,Math.PI,Math.PI*1.5,!1),i.closePath()}else if(n.corner==="chamfer"&&s>5e-4){const o=s;i.moveTo(-r+o,0),i.lineTo(r-o,0),i.lineTo(r,o),i.lineTo(r,e-o),i.lineTo(r-o,e),i.lineTo(-r+o,e),i.lineTo(-r,e-o),i.lineTo(-r,o),i.closePath()}else i.moveTo(-r,0),i.lineTo(r,0),i.lineTo(r,e),i.lineTo(-r,e),i.closePath();return i}function IR(t,e,n,i,r,s,o,a){const l=a.border/1e3,c=o/2+1e-4,u=Math.max(8e-4,r-2*l),h=Math.max(8e-4,s-2*l),d=NR(r,s,a);if(l>25e-5&&u>.001&&h>.001){const f=new qc,x=u/2,_=l;f.moveTo(-x,_),f.lineTo(-x,_+h),f.lineTo(x,_+h),f.lineTo(x,_),f.closePath(),d.holes.push(f)}const p=new Ka(d,{depth:o,bevelEnabled:!1,curveSegments:a.corner==="radius"?14:1});p.translate(0,0,-o/2);const m=new Je(p,i);m.castShadow=!0,m.receiveShadow=!0,t.add(m);const v=(f,x)=>{const _=new Je(new hr(u,h,1,1),f);_.position.set(0,s/2,x*c),_.castShadow=!1,_.receiveShadow=x>0,t.add(_)};if(v(e,1),n&&v(n,-1),a._arExport)return;const g=new Eb(new kb(p,18),new Gx({color:1185565,transparent:!0,opacity:.28}));t.add(g)}const DR=25e4,jo=new Nt,Xo=new D,qo=new D;function vy(t){t.computeBoundingBox();const e=t.boundingBox;return t.translate(-(e.min.x+e.max.x)/2,-(e.min.y+e.max.y)/2,-e.min.z),t.computeVertexNormals(),t}function UR(t=.45){const e=new mp(1,16,10,0,Math.PI*2,0,Math.PI/2);e.rotateX(Math.PI/2),vy(e);const n=Math.max(.12,t),i=new fp(.9,.9,n,16,1,!0);return i.rotateX(Math.PI/2),i.translate(0,0,-n/2),_y([e,i])}function FR(t,e,n){return Math.abs(t)+Math.abs(e)<=n}function OR(t,e,n=.0015){const i=t.attributes.position,r=(s,o,a)=>{if(i.getZ(s)>n||i.getZ(o)>n||i.getZ(a)>n)return!1;const l=(i.getX(s)+i.getX(o)+i.getX(a))/3,c=(i.getY(s)+i.getY(o)+i.getY(a))/3;return FR(l,c,e)};if(t.index){const s=t.index.array,o=[];for(let a=0;a<s.length;a+=3){const l=s[a],c=s[a+1],u=s[a+2];r(l,c,u)||o.push(l,c,u)}t.setIndex(o)}else{const s=[];for(let o=0;o<i.count;o+=3)r(o,o+1,o+2)||s.push(i.getX(o),i.getY(o),i.getZ(o),i.getX(o+1),i.getY(o+1),i.getZ(o+1),i.getX(o+2),i.getY(o+2),i.getZ(o+2));t.setAttribute("position",new tt(s,3))}return t.computeVertexNormals(),t}function _y(t){const e=[],n=[];let i=0;t.forEach(s=>{const o=s.attributes.position;for(let l=0;l<o.count;l++)e.push(o.getX(l),o.getY(l),o.getZ(l));const a=s.index?s.index.array:null;if(a)for(let l=0;l<a.length;l++)n.push(a[l]+i);else for(let l=0;l<o.count;l++)n.push(i+l);i+=o.count,s.dispose()});const r=new Ut;return r.setAttribute("position",new tt(e,3)),r.setIndex(n),r.computeVertexNormals(),r}function kR(t,e,n){const i=l=>[0,-t,l,t,0,l,0,t,l,-t,0,l],r=[...i(e),...i(n)],s=[],o=(l,c,u,h)=>{s.push(l,c,u,l,u,h)};for(let l=0;l<4;l++){const c=(l+1)%4;o(l,c,4+c,4+l)}const a=new Ut;return a.setAttribute("position",new tt(r,3)),a.setIndex(s),a}function zR(t,e,n){const i=l=>[0,-l,n,l,0,n,0,l,n,-l,0,n],r=[...i(t),...i(e)],s=[],o=(l,c,u,h)=>{s.push(l,c,u,l,u,h)};for(let l=0;l<4;l++){const c=(l+1)%4;o(l,c,4+c,4+l)}const a=new Ut;return a.setAttribute("position",new tt(r,3)),a.setIndex(s),a}function BR(t=.45){const n=new yu;n.moveTo(0,-.5),n.lineTo(.5,0),n.lineTo(0,.5),n.lineTo(-.5,0),n.closePath();const i=new Ka(n,{depth:.72,bevelEnabled:!0,bevelThickness:.28,bevelSize:.1,bevelSegments:2,curveSegments:1});vy(i),OR(i,.32+.02);const r=zR(.62,.32,35e-5),s=kR(.32,35e-5,-Math.max(.12,t));return _y([i,r,s])}function HR(t){const e=t.holeSize/1e3,n=e*.84,i=Math.max(t.holeSize,t.slotLength)/1e3,r=Math.max(4e-4,Math.min(t.thickness/1e3,e*.16)),s=e*.72,o=i*.62,a=-n/2,l=n/2,c=[-i/2,-o/2,o/2,i/2],u=[4e-5,s,s,4e-5],h=[r,s+r,s+r,r],d=[];for(const g of[a,l])for(let f=0;f<4;f++)d.push(c[f],g,u[f]);for(const g of[a,l])for(let f=0;f<4;f++)d.push(c[f],g,h[f]);const p=[],m=(g,f,x,_)=>{p.push(g,f,x,g,x,_)};for(let g=0;g<3;g++)m(8+g,9+g,13+g,12+g),m(g,g+1,g+9,g+8),m(4+g,12+g,13+g,5+g);m(0,8,12,4),m(3,7,15,11);const v=new Ut;return v.setAttribute("position",new tt(d,3)),v.setIndex(p),v.computeVertexNormals(),v}function VR(t,e=16){const n=Fn(t),i=n.entrance/2e3,r=n.head/2e3,s=Math.max(8e-4,n.height/1e3),o=Math.max(12e-5,Math.min((r-i)*.22,i*.18)),a=Math.max(5e-5,(r-i)*.1),l=[new de(i,2e-5),new de(i,s),new de(i+o,s),new de(r,a),new de(r,2e-5)],c=new dp(l,e);return c.rotateX(Math.PI/2),c.computeVertexNormals(),c}function k0(t,e,n,i,r,s){var g;const o=(g=Ce[e.pattern])==null?void 0:g.kind;if(!bp(o))return null;const a=Math.min(DR,Eu(e));if(a<=0)return null;let l,c,u,h;if(o==="trieur"){const f=e.holeSize/2e3;c=f,u=f,h=f,l=UR(r/h)}else if(o==="embossed"){const f=e.holeSize/1e3;c=f*.9,u=f*.9,h=f*.38,l=BR(r/h)}else if(o==="perfocon"){const f=a>8e4?8:a>25e3?12:16;l=VR(e,f),c=1,u=1,h=1}else l=HR(e),c=1,u=1,h=1;const d=o==="perfocon"||o==="bridge"||o==="embossed"||o==="trieur"?s.clone():s;(o==="perfocon"||o==="trieur")&&(d.side=En),(o==="bridge"||o==="embossed")&&(d.side=Vn);const p=new Mb(l,d,a);p.name="FORMED_FEATURES",p.frustumCulled=!1,p.receiveShadow=a<=12e3,p.castShadow=a<=8e3;let m=0;rR(e,(f,x)=>{if(m>=a)return!1;jo.position.set(f/1e3-n/2,x/1e3,r/2),jo.rotation.set(0,0,0),jo.scale.set(c,u,h),jo.updateMatrix(),p.setMatrixAt(m,jo.matrix),m+=1}),p.count=m,p.instanceMatrix.needsUpdate=!0;const v=new Jn;return v.name="FORMED_PATTERN",v.add(p),t.add(v),v}function Yh(t){if(!t)return;const e=new Set;t.traverse(n=>{var r,s;(s=(r=n.geometry)==null?void 0:r.dispose)==null||s.call(r),(Array.isArray(n.material)?n.material:[n.material]).forEach(o=>{var a;o&&(["alphaMap","map","envMap","bumpMap"].forEach(l=>{var u;const c=o[l];c&&!e.has(c)&&(e.add(c),(u=c.dispose)==null||u.call(c))}),e.has(o)||(e.add(o),(a=o.dispose)==null||a.call(o)))})})}function GR(t){return`${t.material}|${t.finish}|${t.color}`}function WR(t){return`${t.width}|${t.height}|${t.pattern}|${t.holeSize}|${t.slotLength}|${t.pitch}|${t.rowPitch}|${t.border}|${t.coneAngle}|${t.thickness}`}function $R(t){return`${t.width}|${t.height}|${t.border}|${t.thickness}|${t.panelForm}|${t.flangeDepth}|${t.bendAngle}|${t.bendRadius}|${t.corner}|${t.cornerRadius}`}function jR(t,e,n,i,r,s){if(e.panelForm!=="flat"){const o=Math.max(r*3,e.flangeDepth/1e3),a=ws.degToRad(90-e.bendAngle),l=-Math.cos(a)*o/2,c=Math.sin(a)*o/2,u=(h,d,p)=>{const m=new Je(new Jr(h,d,p),s);return m.castShadow=!0,m.receiveShadow=!0,m};if(e.panelForm==="topFold"||e.panelForm==="cassette"){const h=u(n,r,o);h.rotation.x=a,h.position.set(0,i-r/2+c,l),t.add(h)}if(e.panelForm==="sideReturns"||e.panelForm==="cassette"){const h=u(r,i,o);h.rotation.y=-a,h.position.set(-n/2+r/2-c,i/2,l);const d=u(r,i,o);d.rotation.y=a,d.position.set(n/2-r/2+c,i/2,l),t.add(h,d)}if(e.panelForm==="cassette"){const h=u(n,r,o);h.rotation.x=-a,h.position.set(0,r/2-c,l),t.add(h)}}}class XR{constructor(e,{bakedShadows:n=!0,onArState:i,onArScale:r,onBusy:s}={}){var l;this.canvas=e,this.bakedShadows=n,this.onArState=i||(()=>{}),this.onArScale=r||(()=>{}),this.onBusy=s||(()=>{}),this.model=null,this.config=null,this.sizeKey="",this.configGen=0,this.orbit={theta:-.48,phi:1.18,radius:1.92},this.target={...this.orbit},this.lookAt=new D(0,.72,0),this.pointers=new Map,this.pinchStart=0,this.dirty=!0,this.xrSession=null,this.hitTestSource=null,this.arPlaced=!1,this.arMoving=!1,this.arHitStable=0,this.arLastHitY=null,this.arPointers=new Map,this.arPinchStart=0,this.arPinchScale0=100,this.arTwistStart=0,this.arTwistYaw0=0,this.scalePercent=100,this.fitScale=1,this.arFloorY=null,this.studioEnv=null,this.xrLight=null,this.overlay=null,this._arMode="idle",this.tool="orbit",this.studioColor=1053721,this.disposed=!1,this.faceMat=null,this.backMat=null,this.edgeMat=null,this.solidMat=null,this.formedGroup=null,this.formedMat=null,this.appearanceId="",this.maskId="",this.formId="",this.maxAnisotropy=4,this.dimHud=null,this.compact=Tu()||sf().ios,this.iosRenderer=sf().ios,this.pixelRatioCap=this.compact?Math.min(devicePixelRatio||1,1.1):Math.min(devicePixelRatio||1,1.5),this.renderer=new Vx({canvas:e,antialias:!this.compact,alpha:!1,preserveDrawingBuffer:!1,powerPreference:"default"}),this.renderer.setPixelRatio(this.pixelRatioCap),this.renderer.setClearColor(this.studioColor,1),this.renderer.outputColorSpace=hn,this.renderer.toneMapping=ux,this.renderer.toneMappingExposure=1.32,this.renderer.shadowMap.enabled=!this.compact,this.renderer.shadowMap.type=lx,this.renderer.shadowMap.autoUpdate=!n&&!this.compact,this.renderer.xr.enabled=!0,this.renderer.xr.setReferenceSpaceType("local"),this.scene=new lp,this.scene.background=new He(this.studioColor),this.scene.fog=this.iosRenderer?null:new ap(this.studioColor,7.5,16),this.camera=new fn(32,1,.02,100);const o=new qd(this.renderer);this.studioEnv=o.fromScene(new pC,.04).texture,this.scene.environment=this.studioEnv,o.dispose(),this.maxAnisotropy=Math.min(this.compact?4:16,this.renderer.capabilities.getMaxAnisotropy()||8),this.hemi=new lC(16251387,9081496,1.85),this.scene.add(this.hemi),this.keyLight=new ia(16777215,this.compact?2.2:2.62),this.keyLight.position.set(2.4,4.8,3.4),this.keyLight.castShadow=!this.compact,this.keyLight.shadow.mapSize.set(this.compact?512:1024,this.compact?512:1024),this.keyLight.shadow.bias=-25e-5,this.keyLight.shadow.normalBias=.02;const a=this.keyLight.shadow.camera;a.near=.4,a.far=10,a.left=-2.2,a.right=2.2,a.top=2.4,a.bottom=-.4,this.scene.add(this.keyLight),this.rimLight=new ia(14149375,this.compact?1.15:2.05),this.rimLight.position.set(-3.2,2.4,-2.8),this.scene.add(this.rimLight),this.fillLight=new ia(16774890,this.compact?.45:.7),this.fillLight.position.set(-1.4,1.6,3.2),this.scene.add(this.fillLight),this.compact||(this.backLight=new ia(16777215,2.15),this.backLight.position.set(-2.1,3.6,-3.8),this.scene.add(this.backLight)),this.ground=new Je(new Yc(1.72,this.compact?32:64),new zr({color:790548,metalness:.28,roughness:.58,envMapIntensity:.18})),this.ground.rotation.x=-Math.PI/2,this.ground.receiveShadow=!0,this.scene.add(this.ground),this.groundShadow=new Je(new Yc(1.08,this.compact?24:48),new g0({opacity:.64})),this.groundShadow.rotation.x=-Math.PI/2,this.groundShadow.position.y=.002,this.groundShadow.receiveShadow=!0,this.scene.add(this.groundShadow),this.root=new Jn,this.scene.add(this.root),this.reticle=new Je(new pp(.07,.09,36).rotateX(-Math.PI/2),new _u({color:16777215,opacity:.92,transparent:!0})),this.reticle.matrixAutoUpdate=!1,this.reticle.visible=!1,this.scene.add(this.reticle),this.arFloor=new Je(new hr(4,4),new g0({opacity:.26})),this.arFloor.rotation.x=-Math.PI/2,this.arFloor.position.y=.012,this.arFloor.receiveShadow=!0,this.arFloor.visible=!1,this.root.add(this.arFloor),this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onWheel=this.onWheel.bind(this),this.onResize=this.onResize.bind(this),this.onARPointerDown=this.onARPointerDown.bind(this),this.onARPointerMove=this.onARPointerMove.bind(this),this.onARPointerUp=this.onARPointerUp.bind(this),e.addEventListener("pointerdown",this.onPointerDown,{passive:!1}),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("pointercancel",this.onPointerUp),e.addEventListener("wheel",this.onWheel,{passive:!1}),this.resizeObserver=new ResizeObserver(()=>this.onResize()),this.resizeObserver.observe(e.parentElement||e),(l=window.visualViewport)==null||l.addEventListener("resize",this.onResize),this.onResize(),this.applyOrbit(!0),this.renderer.setAnimationLoop((c,u)=>this.tick(c,u))}async load(e){await this.updateConfig(e)}async updateConfig(e){if(this.disposed)return;const n=ot(e),i=++this.configGen,r=GR(n),s=WR(n),o=$R(n);this.onBusy(!0);try{if(this.model&&o===this.formId&&s===this.maskId&&r!==this.appearanceId){if(await this.applyAppearance(n),this.disposed||i!==this.configGen)return;this.appearanceId=r,this.config=n;return}if(this.model&&o===this.formId&&s!==this.maskId){if(await new Promise(a=>requestAnimationFrame(a)),this.disposed||i!==this.configGen||(this.replaceMask(n),await this.applyAppearance(n),this.disposed||i!==this.configGen))return;this.maskId=s,this.appearanceId=r,this.config=n,this.renderer.shadowMap.needsUpdate=!0;return}if(await new Promise(a=>requestAnimationFrame(a)),this.disposed||i!==this.configGen||(await this.applyModel(n),this.disposed||i!==this.configGen))return;this.formId=o,this.maskId=s,this.appearanceId=r}finally{i===this.configGen&&this.onBusy(!1)}}async applyAppearance(e){var a;const n=Vh(e),i=new de(Math.max(2,e.width/420),Math.max(2,e.height/420));let r=null;try{r=await vR(e,this.maxAnisotropy)}catch{r=null}if(this.disposed)return;const s=r!=null&&r.colorMap&&((a=n.pbr)!=null&&a.useColorMap)?n.pbr.tint||n.hex||"#ffffff":n.hex,o=(l,c=0,u=0)=>{var h;l&&(l.color.set(s),r!=null&&r.colorMap&&((h=n.pbr)!=null&&h.useColorMap)&&n.pbr.colorBoost&&l.color.multiplyScalar(n.pbr.colorBoost),l.metalness=Math.min(1,n.metalness+c),l.roughness=Math.max(.04,n.roughness+u),l.envMapIntensity=n.envMapIntensity+(c?.12:0),l.isMeshPhysicalMaterial&&(l.clearcoat=n.clearcoat,l.clearcoatRoughness=e.finish==="powder"?.42:.18),r&&_R(l,r,n,i),l.needsUpdate=!0)};o(this.faceMat),o(this.backMat),this.backMat&&(this.backMat.envMapIntensity=n.envMapIntensity+.2),o(this.solidMat),o(this.formedMat),o(this.edgeMat,.08,-.08),this.dirty=!0}replaceMask(e){var r,s,o,a,l,c,u;const n=qh(e,this.maxAnisotropy),i=[(r=this.faceMat)==null?void 0:r.alphaMap,(s=this.backMat)==null?void 0:s.alphaMap,(o=this.faceMat)==null?void 0:o.bumpMap,(a=this.backMat)==null?void 0:a.bumpMap];Kl(this.faceMat,this.backMat,n,e),F0(i,{alphaMap:(l=this.faceMat)==null?void 0:l.alphaMap,bumpMap:(c=this.faceMat)==null?void 0:c.bumpMap,backAlphaMap:(u=this.backMat)==null?void 0:u.alphaMap}),this.replaceFormedFeatures(e),this.dirty=!0}replaceFormedFeatures(e){var s,o,a;if(this.formedGroup){(s=this.model)==null||s.remove(this.formedGroup);const l=new Set([this.solidMat,this.faceMat,this.backMat,this.edgeMat]);this.formedGroup.traverse(c=>{var h,d;(d=(h=c.geometry)==null?void 0:h.dispose)==null||d.call(h),(Array.isArray(c.material)?c.material:[c.material]).forEach(p=>{p&&!l.has(p)&&(l.add(p),p.dispose())})}),this.formedGroup=null,this.formedMat=null}if(!this.model||!this.solidMat)return;const n=e.width/1e3,i=e.height/1e3,r=Math.max(5e-4,e.thickness/1e3);this.formedGroup=k0(this.model,e,n,i,r,this.solidMat),this.formedMat=((a=(o=this.formedGroup)==null?void 0:o.children[0])==null?void 0:a.material)||null}async applyModel(e){var g,f,x;this.config=e;const n=this.model;n&&this.root.remove(n);const i=e.width/1e3,r=e.height/1e3,s=Math.max(5e-4,e.thickness/1e3),o=Vh(e),a=qh(e,this.maxAnisotropy),l=new Jn;l.name="PERFORATED_SHEET";const c=new v0({color:o.hex,metalness:o.metalness,roughness:o.roughness,alphaTest:((g=Ce[e.pattern])==null?void 0:g.through)===!1?0:Jc,transparent:!1,side:En,clearcoat:o.clearcoat,clearcoatRoughness:e.finish==="powder"?.38:.28,envMapIntensity:o.envMapIntensity});Kl(c,null,a,e);const u=c.clone();u.side=En,u.envMapIntensity=o.envMapIntensity+.2,Kl(null,u,a,e),F0([a.alphaMap,a.bumpMap,a.backAlphaMap],{alphaMap:c.alphaMap,bumpMap:c.bumpMap,backAlphaMap:u.alphaMap});const h=c.clone();h.alphaMap=null,h.bumpMap=null,h.alphaTest=0,h.bumpScale=0,IR(l,c,u,h,i,r,s,e);const d=new v0({color:o.hex,metalness:Math.min(1,o.metalness+.08),roughness:Math.max(.08,o.roughness-.08),envMapIntensity:o.envMapIntensity+.12,clearcoat:o.clearcoat});if(jR(l,e,i,r,s,d),this.formedGroup=k0(l,e,i,r,s,h),this.formedMat=((x=(f=this.formedGroup)==null?void 0:f.children[0])==null?void 0:x.material)||null,this.model=l,this.faceMat=c,this.backMat=u,this.solidMat=h,this.edgeMat=d,await this.applyAppearance(e),this.disposed){Yh(l);return}this.root.add(l),n&&Yh(n);const p=`${e.width}x${e.height}x${e.thickness}`,m=!this.sizeKey;this.sizeKey=p;const v=Math.max(i,r);this.fitScale=1.95/Math.max(.15,v),this.applyCurrentScale(),this.lookAt.set(0,r*this.fitScale*.5,0),m&&(this.target.theta=-.48,this.target.phi=1.18,this.target.radius=1.92,this.orbit={...this.target}),this.applyOrbit(!0),this.renderer.shadowMap.needsUpdate=!0,this.dirty=!0}applyCurrentScale(){const e=(this.xrSession?1:this.fitScale)*(this.scalePercent/100);this.root.scale.setScalar(e),this.dirty=!0}setTool(e){this.tool=e==="pan"||e==="zoom"?e:"orbit"}setPreset(e){const n={iso:{theta:-.48,phi:1.18,radius:1.92},top:{theta:0,phi:.22,radius:2.15},front:{theta:0,phi:1.38,radius:2.02},right:{theta:Math.PI/2,phi:1.22,radius:2.02}},i=n[e]||n.iso;this.target.theta=i.theta,this.target.phi=i.phi,this.target.radius=i.radius,this.dirty=!0}fitView(){this.target.radius=1.92,this.dirty=!0}resetView(){this.lookAt.set(0,this.lookAt.y,0),this.setPreset("iso")}setScalePercent(e){this.scalePercent=e,this.applyCurrentScale(),this.xrSession&&this.arPlaced&&(this.onArScale(e),this.arFloorY!=null&&this.snapToFloor(this.arFloorY))}setDimensionHud(e){this.dimHud=e||null,this.layoutDimensions()}hideDimensions(){this.dimHud&&Object.values(this.dimHud).forEach(e=>{e&&(e.style.opacity="0")})}layoutDimensions(){if(!this.dimHud||!this.config||this.xrSession||!this.model){this.hideDimensions();return}this.model.updateMatrixWorld(!0);const e=this.config.width/1e3,n=this.config.height/1e3,i=Math.max(5e-4,this.config.thickness/1e3),r=Math.max(e,n)*.055,s=this.model.matrixWorld;this.placeDimLine(this.dimHud.width,-e/2,-r,i/2,e/2,-r,i/2,s,16),this.placeDimLine(this.dimHud.height,-e/2-r,0,i/2,-e/2-r,n,i/2,s,16),this.placeDimLine(this.dimHud.thickness,e/2+r*.4,n*.72,-i/2,e/2+r*.4,n*.72,i/2,s,18)}placeDimLine(e,n,i,r,s,o,a,l,c){if(!e)return;Xo.set(n,i,r).applyMatrix4(l).project(this.camera),qo.set(s,o,a).applyMatrix4(l).project(this.camera);const u=Xo.z<-1||Xo.z>1||qo.z<-1||qo.z>1,h=this.canvas.parentElement||this.canvas,d=h.clientWidth,p=h.clientHeight,m=(Xo.x*.5+.5)*d,v=(-Xo.y*.5+.5)*p,g=(qo.x*.5+.5)*d,f=(-qo.y*.5+.5)*p,x=g-m,_=f-v,y=Math.hypot(x,_);if(u||y<6){e.style.opacity="0";return}const C=Math.atan2(_,x);e.style.opacity="1",e.style.left=`${(m+g)/2}px`,e.style.top=`${(v+f)/2}px`,e.style.width=`${Math.max(y,c)}px`,e.style.transform=`translate(-50%, -50%) rotate(${C}rad)`;const T=e.querySelector("em");T&&(T.style.transform=`translate(-50%, -130%) rotate(${-C}rad)`)}setArMode(e){this._arMode!==e&&(this._arMode=e,this.onArState(e))}applyOrbit(e=!1){const{theta:n,phi:i,radius:r}=e?this.target:this.orbit,s=Math.sin(i);this.camera.position.set(this.lookAt.x+r*s*Math.sin(n),this.lookAt.y+r*Math.cos(i),this.lookAt.z+r*s*Math.cos(n)),this.camera.lookAt(this.lookAt)}tick(e,n){if(this.xrSession){this.updateAR(n),this.renderer.render(this.scene,this.camera);return}const r=Math.abs(this.target.theta-this.orbit.theta)+Math.abs(this.target.phi-this.orbit.phi)+Math.abs(this.target.radius-this.orbit.radius)>4e-4;r&&(this.orbit.theta+=(this.target.theta-this.orbit.theta)*.12,this.orbit.phi+=(this.target.phi-this.orbit.phi)*.12,this.orbit.radius+=(this.target.radius-this.orbit.radius)*.12,this.applyOrbit()),(this.dirty||r)&&(this.renderer.render(this.scene,this.camera),this.layoutDimensions(),this.dirty=!1)}updateAR(e){if(!e||!this.hitTestSource)return;const n=this.renderer.xr.getReferenceSpace();if(!n)return;const i=e.getHitTestResults(this.hitTestSource);if(!i.length){this.arHitStable=0,this.arPlaced||(this.reticle.visible=!1,this.setArMode("scanning"));return}const r=i[0].getPose(n);if(!r)return;const s=r.transform.position.y;this.arLastHitY!=null&&Math.abs(s-this.arLastHitY)<.025?this.arHitStable+=1:this.arHitStable=1,this.arLastHitY=s;const o=this.arHitStable>=8;this.reticle.matrix.fromArray(r.transform.matrix),this.reticle.visible=!this.arPlaced&&o,!this.arPlaced&&o&&this.setArMode("placing")}placeAtReticle(){this.reticle.visible&&($h.setFromMatrixPosition(this.reticle.matrix),this.root.position.copy($h),this.root.rotation.set(0,this.root.rotation.y,0),this.root.visible=!0,this.arFloor.visible=!0,this.arPlaced=!0,this.reticle.visible=!1,this.snapToFloor($h.y))}snapToFloor(e){this.arFloorY=e,this.root.updateMatrixWorld(!0);const n=new gr().setFromObject(this.model);Number.isFinite(n.min.y)&&(this.root.position.y+=e-n.min.y-.012)}nudgeOnFloor(e,n){const i=this.renderer.xr.getCamera(),r=new D(1,0,0).applyQuaternion(i.quaternion),s=new D(0,0,-1).applyQuaternion(i.quaternion);r.y=0,s.y=0,!(r.lengthSq()<1e-6||s.lengthSq()<1e-6)&&(r.normalize(),s.normalize(),this.root.position.addScaledVector(r,e*.0016),this.root.position.addScaledVector(s,-n*.0016))}onARPointerDown(e){var n,i;if(!(!this.xrSession||e.target.closest("button, input, label")))if(e.preventDefault(),(i=(n=this.overlay)==null?void 0:n.setPointerCapture)==null||i.call(n,e.pointerId),this.arPointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.arPointers.size===2){const r=[...this.arPointers.values()];this.arPinchStart=Math.hypot(r[0].x-r[1].x,r[0].y-r[1].y),this.arPinchScale0=this.scalePercent,this.arTwistStart=Math.atan2(r[1].y-r[0].y,r[1].x-r[0].x),this.arTwistYaw0=this.root.rotation.y,this.arMoving=!1}else this.arPlaced&&(this.arMoving=!0,this.setArMode("moving"))}onARPointerMove(e){if(!this.xrSession||!this.arPointers.has(e.pointerId))return;const n=this.arPointers.get(e.pointerId),i=e.clientX-n.x,r=e.clientY-n.y;if(this.arPointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.arPointers.size===2&&this.arPlaced){const s=[...this.arPointers.values()],o=Math.hypot(s[0].x-s[1].x,s[0].y-s[1].y),a=Math.atan2(s[1].y-s[0].y,s[1].x-s[0].x);if(this.arPinchStart>8){const l=ws.clamp(Math.round(this.arPinchScale0*(o/this.arPinchStart)),50,200);this.setScalePercent(l),this.setArMode("scaling")}this.root.rotation.y=this.arTwistYaw0+(a-this.arTwistStart);return}this.arPlaced&&this.arMoving&&this.nudgeOnFloor(i,r)}onARPointerUp(e){if(!this.xrSession)return;const n=this.arPointers.size===1;this.arPointers.delete(e.pointerId),n&&!this.arPlaced&&this.reticle.visible?(this.placeAtReticle(),this.setArMode("placed")):this.arPlaced&&this.arPointers.size===0&&(this.arMoving=!1,this.reticle.visible=!1,this.setArMode("placed")),this.arPinchStart=0}onResize(){var r;if(this.xrSession)return;const e=((r=this.canvas.parentElement)==null?void 0:r.getBoundingClientRect())||this.canvas.getBoundingClientRect(),n=Math.max(1,e.width),i=Math.max(1,e.height);this.renderer.setSize(n,i,!1),this.camera.aspect=n/i,this.camera.updateProjectionMatrix(),this.dirty=!0}onPointerDown(e){if(!this.xrSession&&(e.pointerType==="touch"&&e.preventDefault(),this.canvas.setPointerCapture(e.pointerId),this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.pointers.size===2)){const n=[...this.pointers.values()];this.pinchStart=Math.hypot(n[0].x-n[1].x,n[0].y-n[1].y)}}onPointerMove(e){if(this.xrSession||!this.pointers.has(e.pointerId))return;const n=this.pointers.get(e.pointerId),i=e.clientX-n.x,r=e.clientY-n.y;if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.pointers.size===2){const s=[...this.pointers.values()],o=Math.hypot(s[0].x-s[1].x,s[0].y-s[1].y);this.pinchStart&&(this.target.radius=ws.clamp(this.target.radius*(this.pinchStart/o),jh,Xh)),this.pinchStart=o;return}if(this.tool==="pan"){const s=new D().setFromMatrixColumn(this.camera.matrixWorld,0),o=new D().setFromMatrixColumn(this.camera.matrixWorld,1),a=.0022*this.orbit.radius;this.lookAt.addScaledVector(s,-i*a),this.lookAt.addScaledVector(o,r*a),this.applyOrbit(!0),this.dirty=!0;return}if(this.tool==="zoom"){this.target.radius=ws.clamp(this.target.radius+r*.012,jh,Xh);return}this.target.theta-=i*.006,this.target.phi=ws.clamp(this.target.phi-r*.006,.22,1.46)}onPointerUp(e){this.pointers.delete(e.pointerId),this.pinchStart=0}onWheel(e){this.xrSession||(e.preventDefault(),this.target.radius=ws.clamp(this.target.radius+e.deltaY*.002,jh,Xh))}captureJpeg(){const e=this.renderer,n=e.getPixelRatio(),i=this.scene.fog,r=this.scene.background,s=this.ground.visible,o=this.groundShadow.visible;this.scene.fog=null,this.ground.visible=!1,this.groundShadow.visible=!1,this.scene.background=new He(16054007),e.setClearColor(16054007,1),e.setPixelRatio(Math.min(3,Math.max(2,(devicePixelRatio||1)*2))),this.onResize(),e.render(this.scene,this.camera);const a=e.domElement.toDataURL("image/png");return this.scene.fog=i,this.ground.visible=s,this.groundShadow.visible=o,this.scene.background=r||new He(this.studioColor),e.setClearColor(this.studioColor,1),e.setPixelRatio(n),this.onResize(),this.dirty=!0,a}buildArSheetGroup(e){var _;const n=e.width/1e3,i=e.height/1e3,r=Math.max(5e-4,e.thickness/1e3),s=e.border/1e3,o=Math.max(8e-4,n-2*s),a=Math.max(8e-4,i-2*s),l=Vh(e),c=qh(e,4),u=new Jn;u.name="AR_DETAIL_SHEET";const h=new zr({color:l.hex,metalness:l.metalness,roughness:l.roughness,alphaTest:((_=Ce[e.pattern])==null?void 0:_.through)===!1?0:Jc,transparent:!1,side:Vn});Kl(h,null,c,e);const d=new zr({color:l.hex,metalness:Math.min(1,l.metalness+.06),roughness:Math.max(.08,l.roughness-.06),side:Vn}),p=n/2,m=i/2,v=new yu;if(v.moveTo(-p,-m),v.lineTo(p,-m),v.lineTo(p,m),v.lineTo(-p,m),v.closePath(),s>25e-5&&o>.001&&a>.001){const y=o/2,C=a/2,T=new qc;T.moveTo(-y,-C),T.lineTo(y,-C),T.lineTo(y,C),T.lineTo(-y,C),T.closePath(),v.holes.push(T)}const g=new Ka(v,{depth:r,bevelEnabled:!1});g.rotateX(-Math.PI/2),u.add(new Je(g,d));const f=new hr(o,a);f.rotateX(-Math.PI/2);const x=new Je(f,h);return x.position.y=r+2e-4,u.add(x),u.userData.appearance=l,{group:u,appearance:l}}async prepareGroupForUsdz(e){const n=[];e.traverse(i=>{var o,a;if(!i.isMesh||!i.material)return;const r=i.material,s=e.userData.appearance||{};n.push(MR(r,{colorHex:s.hex||((a=(o=r.color)==null?void 0:o.getHexString)!=null&&a.call(o)?`#${r.color.getHexString()}`:"#b8bcc2"),metalness:r.metalness??s.metalness??.82,roughness:r.roughness??s.roughness??.34}).then(l=>{i.material=l}))}),await Promise.all(n)}async exportUSDZ(){if(!this.model||!this.config)throw new Error("3D model is still loading");const e=new LC,i={quickLookCompatible:!0,maxTextureSize:this.compact?768:1024};try{const r=xR(this.config),s=ot(wR(this.config,r)),{group:o}=this.buildArSheetGroup(s);await this.prepareGroupForUsdz(o);const a=new Jn;return a.add(o),a.scale.setScalar(r.magnify*(this.scalePercent/100)),await e.parseAsync(a,i)}catch(r){console.warn("Detail USDZ export failed, using full model fallback",r);const s=new Jn,o=this.model.clone(!0);return o.traverse(a=>{a.isMesh&&a.material&&(a.material=a.material.clone())}),s.add(o),s.scale.setScalar(this.fitScale*(this.scalePercent/100)),e.parseAsync(s,i)}}async enterAR({overlay:e}={}){if(!navigator.xr)throw new Error("WebXR is not available in this browser");this.overlay=e||null;const n={requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","local-floor","light-estimation"],...e?{domOverlay:{root:e}}:{}};this.setArMode("launching"),this.hideDimensions();try{this.xrSession=await navigator.xr.requestSession("immersive-ar",n)}catch{this.xrSession=await navigator.xr.requestSession("immersive-ar",{optionalFeatures:["hit-test","dom-overlay","local-floor","light-estimation"],...e?{domOverlay:{root:e}}:{}})}this.renderer.setPixelRatio(1),await this.renderer.xr.setSession(this.xrSession),this.arPlaced=!1,this.arMoving=!1,this.arHitStable=0,this.arLastHitY=null,this.arPointers.clear(),this.root.rotation.set(0,0,0),this.root.visible=!1,this.ground.visible=!1,this.groundShadow.visible=!1,this.arFloor.visible=!1,this.reticle.visible=!1,this.renderer.shadowMap.autoUpdate=!0,this.applyCurrentScale(),document.body.classList.add("is-ar"),this.setArMode("scanning");try{this.xrLight=new qC(this.renderer),this.xrLight.addEventListener("estimationstart",()=>{this.scene.add(this.xrLight),this.xrLight.environment&&(this.scene.environment=this.xrLight.environment),this.keyLight.intensity=.6,this.hemi.intensity=.45}),this.xrLight.addEventListener("estimationend",()=>{this.scene.remove(this.xrLight),this.scene.environment=this.studioEnv,this.keyLight.intensity=2.62,this.hemi.intensity=1.62})}catch{this.xrLight=null}try{const i=await this.xrSession.requestReferenceSpace("viewer");this.hitTestSource=await this.xrSession.requestHitTestSource({space:i})}catch{this.hitTestSource=null}this.xrSession.addEventListener("end",()=>this.onAREnd()),this.overlay&&(this.overlay.addEventListener("pointerdown",this.onARPointerDown),this.overlay.addEventListener("pointermove",this.onARPointerMove),this.overlay.addEventListener("pointerup",this.onARPointerUp),this.overlay.addEventListener("pointercancel",this.onARPointerUp))}async exitAR(){if(this.xrSession)try{await this.xrSession.end()}catch{}}onAREnd(){this.overlay&&(this.overlay.removeEventListener("pointerdown",this.onARPointerDown),this.overlay.removeEventListener("pointermove",this.onARPointerMove),this.overlay.removeEventListener("pointerup",this.onARPointerUp),this.overlay.removeEventListener("pointercancel",this.onARPointerUp)),this.xrSession=null,this.hitTestSource=null,this.arPlaced=!1,this.arMoving=!1,this.arPointers.clear(),this.reticle.visible=!1,this.arFloor.visible=!1,this.root.visible=!0,this.root.position.set(0,0,0),this.root.rotation.set(0,0,0),this.arFloorY=null,this.ground.visible=!0,this.groundShadow.visible=!0,this.renderer.shadowMap.autoUpdate=!this.bakedShadows,this.keyLight.intensity=2.62,this.hemi.intensity=1.62,this.scene.environment=this.studioEnv,this.xrLight&&this.scene.remove(this.xrLight),document.body.classList.remove("is-ar"),this.renderer.setPixelRatio(this.pixelRatioCap),this.applyCurrentScale(),this.onResize(),this.setArMode("idle"),this.dirty=!0}dispose(){var e,n,i,r;this.disposed=!0,this.configGen+=1,this.onBusy(!1),this.renderer.setAnimationLoop(null),this.canvas.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("pointercancel",this.onPointerUp),this.canvas.removeEventListener("wheel",this.onWheel),(e=window.visualViewport)==null||e.removeEventListener("resize",this.onResize),(n=this.resizeObserver)==null||n.disconnect(),this.hideDimensions(),this.dimHud=null,Yh(this.model),this.faceMat=null,this.backMat=null,this.edgeMat=null,(r=(i=this.studioEnv)==null?void 0:i.dispose)==null||r.call(i),this.renderer.dispose()}}const qR=Tu()?180:120;function YR({config:t,scalePercent:e,onReady:n,onError:i,onArState:r,onArScale:s,onBusy:o}){const a=Ae.useRef(null),l=Ae.useRef(null),c=Ae.useRef(!1),u=Ae.useRef(r),h=Ae.useRef(s),d=Ae.useRef(o);return u.current=r,h.current=s,d.current=o,Ae.useEffect(()=>{const p=a.current;if(!p)return;let m;try{m=new XR(p,{onArState:v=>{var g;return(g=u.current)==null?void 0:g.call(u,v)},onArScale:v=>{var g;return(g=h.current)==null?void 0:g.call(h,v)},onBusy:v=>{var g;return(g=d.current)==null?void 0:g.call(d,v)}})}catch(v){console.error(v),i==null||i(v);return}return l.current=m,m.load(t).then(()=>{c.current=!0,m.setScalePercent(e),n==null||n(m)}).catch(v=>{console.error(v),i==null||i(v)}),()=>{c.current=!1,m.dispose(),l.current=null}},[]),Ae.useEffect(()=>{var m;if(!c.current)return;(m=d.current)==null||m.call(d,!0);const p=window.setTimeout(()=>{var v;(v=l.current)==null||v.updateConfig(t)},qR);return()=>window.clearTimeout(p)},[t.width,t.height,t.thickness,t.material,t.finish,t.color,t.pattern,t.holeSize,t.slotLength,t.pitch,t.rowPitch,t.border,t.coneAngle,t.panelForm,t.flangeDepth,t.bendAngle,t.bendRadius,t.corner,t.cornerRadius]),Ae.useEffect(()=>{var p;(p=l.current)==null||p.setScalePercent(e)},[e]),S.jsx("canvas",{id:"viewerCanvas",ref:a})}const z0={carbon:{hi:"#c4bdb4",mid:"#7a746c",lo:"#3a3733",plate0:"#6f6a64",plate1:"#45423e",grain:"0",grainW:5,grainOpacity:.4,void0:"#2f3438",void1:"#050608"},ss304:{hi:"#f4f7f9",mid:"#b7c0c6",lo:"#6d767e",plate0:"#b8c1c7",plate1:"#7a848c",grain:"-18",grainW:3.2,grainOpacity:.32,void0:"#3f4850",void1:"#07090c"},alu:{hi:"#fbfcfd",mid:"#d0d5d9",lo:"#8a9096",plate0:"#cfd4d8",plate1:"#949aa0",grain:"-8",grainW:2.4,grainOpacity:.24,void0:"#4a5158",void1:"#0b0d10"}};function Jl(t,e,n){return Array.from({length:6},(i,r)=>{const s=Math.PI/3*r;return`${(t+n*Math.cos(s)).toFixed(2)},${(e+n*Math.sin(s)).toFixed(2)}`}).join(" ")}function B0(t,e,n){return`${t},${e-n} ${t+n},${e} ${t},${e+n} ${t-n},${e}`}function ZR(){return[[0,-2],[-1,-1],[0,-1],[1,-1],[-2,0],[-1,0],[0,0],[1,0],[2,0],[-1,1],[0,1],[1,1],[0,2]]}function Ql({cx:t,cy:e,r:n,ids:i}){const r=n+Math.max(1.4,n*.22),s=n*.72;return S.jsxs("g",{children:[S.jsx("circle",{cx:t+n*.12,cy:e+n*.18,r,fill:"rgba(0,0,0,.38)"}),S.jsx("circle",{cx:t,cy:e,r,fill:`url(#${i.rim})`}),S.jsx("circle",{cx:t,cy:e,r:n*.9,fill:"rgba(12,14,16,.45)"}),S.jsx("circle",{cx:t,cy:e,r:s,fill:`url(#${i.voidG})`}),S.jsx("ellipse",{cx:t-s*.28,cy:e-s*.32,rx:s*.48,ry:s*.36,fill:"rgba(0,0,0,.42)"}),S.jsx("path",{d:`M ${t-n*.38} ${e+n*.52} A ${n*.78} ${n*.78} 0 0 0 ${t+n*.62} ${e+n*.16}`,fill:"none",stroke:"rgba(255,255,255,.55)",strokeWidth:Math.max(.55,n*.1),strokeLinecap:"round"})]})}function KR({cx:t,cy:e,s:n,ids:i}){const r=n/2,s=n*.68,o=s/2;return S.jsxs("g",{children:[S.jsx("rect",{x:t-r+.7,y:e-r+1,width:n,height:n,rx:"1.2",fill:"rgba(0,0,0,.36)"}),S.jsx("rect",{x:t-r-.7,y:e-r-.7,width:n+1.4,height:n+1.4,rx:"1.4",fill:`url(#${i.rim})`}),S.jsx("rect",{x:t-r+.35,y:e-r+.35,width:n-.7,height:n-.7,rx:"0.8",fill:"rgba(12,14,16,.4)"}),S.jsx("rect",{x:t-o,y:e-o,width:s,height:s,rx:"0.55",fill:`url(#${i.voidG})`}),S.jsx("rect",{x:t-o,y:e-o,width:s*.4,height:s*.36,fill:"rgba(0,0,0,.35)"})]})}function JR({cx:t,cy:e,w:n,h:i,ids:r}){const s=Math.min(n,i)/2;return S.jsxs("g",{children:[S.jsx("rect",{x:t-n/2+.6,y:e-i/2+1,width:n,height:i,rx:s,fill:"rgba(0,0,0,.36)"}),S.jsx("rect",{x:t-n/2-.8,y:e-i/2-.8,width:n+1.6,height:i+1.6,rx:s+.5,fill:`url(#${r.rim})`}),S.jsx("rect",{x:t-n*.34,y:e-i*.34,width:n*.68,height:i*.68,rx:s*.68,fill:`url(#${r.voidG})`}),S.jsx("rect",{x:t-n*.28,y:e-i*.32,width:n*.26,height:i*.26,rx:s*.28,fill:"rgba(0,0,0,.32)"})]})}function QR({cx:t,cy:e,r:n,ids:i}){return S.jsxs("g",{children:[S.jsx("polygon",{points:Jl(t+.55,e+.8,n+1.15),fill:"rgba(0,0,0,.36)"}),S.jsx("polygon",{points:Jl(t,e,n+1.25),fill:`url(#${i.rim})`}),S.jsx("polygon",{points:Jl(t,e,n*.86),fill:"rgba(12,14,16,.4)"}),S.jsx("polygon",{points:Jl(t,e,n*.66),fill:`url(#${i.voidG})`})]})}function eP({pattern:t,className:e="",material:n="carbon",variant:i="card"}){const r=Ae.useId().replace(/:/g,""),s=i==="thumb",o=s?120:168,a=s?120:72,l=z0[n]||z0.carbon,c={plate:`plate-${r}`,sheen:`sheen-${r}`,brush:`brush-${r}`,rim:`rim-${r}`,voidG:`void-${r}`,bump:`bump-${r}`,cone:`cone-${r}`,bridge:`bridge-${r}`,clip:`clip-${r}`},u=s?4:6;function h({xStep:m,yStep:v,stagger:g=!1,render:f}){const x=[];let _=0;for(let y=u+v*.35;y<a-2;y+=v,_++){const C=g&&_%2?m/2:0;for(let T=u+C+m*.15;T<o-2;T+=m)x.push(f(T,y,`${_}-${T.toFixed(1)}`))}return x}const d=s?1.28:1;let p=null;if(t==="round60")p=h({xStep:26*(s?.92:1),yStep:22.5*(s?.92:1),stagger:!0,render:(m,v,g)=>S.jsx("g",{children:S.jsx(Ql,{cx:m,cy:v,r:6.6*d,ids:c})},g)});else if(t==="roundStraight")p=h({xStep:27,yStep:23,stagger:!1,render:(m,v,g)=>S.jsx("g",{children:S.jsx(Ql,{cx:m,cy:v,r:5.5*d,ids:c})},g)});else if(t==="square")p=h({xStep:28,yStep:24,render:(m,v,g)=>S.jsx("g",{children:S.jsx(KR,{cx:m,cy:v,s:12.2*d,ids:c})},g)});else if(t==="slot")p=h({xStep:28,yStep:30,stagger:!0,render:(m,v,g)=>S.jsx("g",{children:S.jsx(JR,{cx:m,cy:v,w:9*d,h:22*d,ids:c})},g)});else if(t==="hex")p=h({xStep:28,yStep:24.4,stagger:!0,render:(m,v,g)=>S.jsx("g",{children:S.jsx(QR,{cx:m,cy:v,r:8*d,ids:c})},g)});else if(t==="bridgeSlot")p=h({xStep:56,yStep:28,stagger:!1,render:(m,v,g)=>S.jsxs("g",{children:[S.jsx("ellipse",{cx:m,cy:v+4.2,rx:"15",ry:"3.2",fill:"rgba(0,0,0,.14)"}),S.jsx("rect",{x:m-16.5,y:v-4.6,width:"33",height:"9.2",rx:"4.6",fill:`url(#${c.bridge})`}),S.jsx("rect",{x:m-16.5,y:v+2.2,width:"33",height:"2.4",rx:"1.1",fill:l.lo}),S.jsx("rect",{x:m-12,y:v-3.4,width:"24",height:"2.2",rx:"1.1",fill:"rgba(255,255,255,.28)"}),S.jsx("rect",{x:m-16.2,y:v-2.6,width:"4.2",height:"5.2",rx:"1.4",fill:`url(#${c.voidG})`}),S.jsx("rect",{x:m+12,y:v-2.6,width:"4.2",height:"5.2",rx:"1.4",fill:`url(#${c.voidG})`})]},g)});else if(t==="trieur")p=h({xStep:26,yStep:22.6,stagger:!0,render:(m,v,g)=>S.jsxs("g",{children:[S.jsx("ellipse",{cx:m+1.4,cy:v+2.2,rx:"7.4",ry:"6.4",fill:"rgba(0,0,0,.32)"}),S.jsx("circle",{cx:m,cy:v,r:"6.8",fill:`url(#${c.bump})`}),S.jsx("ellipse",{cx:m-1.8,cy:v-2.2,rx:"2.4",ry:"1.7",fill:"rgba(255,255,255,.38)"})]},g)});else if(t==="perfocon")p=h({xStep:22,yStep:19.2,stagger:!0,render:(m,v,g)=>S.jsxs("g",{children:[S.jsx("circle",{cx:m+.6,cy:v+.9,r:"7.4",fill:"rgba(0,0,0,.28)"}),S.jsx("circle",{cx:m,cy:v,r:"7.3",fill:`url(#${c.rim})`}),S.jsx("circle",{cx:m,cy:v,r:"5.5",fill:`url(#${c.cone})`}),S.jsx("circle",{cx:m,cy:v,r:"2.35",fill:`url(#${c.voidG})`}),S.jsx("ellipse",{cx:m-.7,cy:v-.9,rx:"1.15",ry:"0.85",fill:"rgba(0,0,0,.35)"})]},g)});else if(t==="decorative"){const m=s?42:70;p=[];let v=0;for(let g=22;g<a;g+=50,v++)for(let f=22+(v%2?20:0);f<o-8;f+=m)ZR().forEach(([x,_],y)=>{p.push(S.jsx("g",{children:S.jsx(Ql,{cx:f+x*5.05,cy:g+_*5.05,r:2.15,ids:c})},`${v}-${f}-${y}`))})}else t==="embossed"?p=h({xStep:38,yStep:34,stagger:!0,render:(m,v,g)=>S.jsxs("g",{children:[S.jsx("ellipse",{cx:m+.45,cy:v+1.35,rx:9.2*.92,ry:9.2*.78,fill:"rgba(0,0,0,.16)"}),S.jsx("polygon",{points:B0(m,v,9.2),fill:l.plate0}),S.jsx("polygon",{points:`${m},${v-9.2} ${m},${v-5.704} ${m-5.704},${v} ${m-9.2},${v}`,fill:l.hi}),S.jsx("polygon",{points:`${m},${v-9.2} ${m+9.2},${v} ${m+5.704},${v} ${m},${v-5.704}`,fill:l.mid}),S.jsx("polygon",{points:`${m-9.2},${v} ${m-5.704},${v} ${m},${v+5.704} ${m},${v+9.2}`,fill:l.plate1}),S.jsx("polygon",{points:`${m},${v+5.704} ${m+5.704},${v} ${m+9.2},${v} ${m},${v+9.2}`,fill:l.lo}),S.jsx("polygon",{points:B0(m,v,5.704),fill:l.plate0}),S.jsx("polygon",{points:`${m},${v-5.704} ${m},${v} ${m-5.704*.55},${v}`,fill:"rgba(255,255,255,.22)"}),S.jsx("circle",{cx:m,cy:v,r:2.05,fill:`url(#${c.voidG})`}),S.jsx("circle",{cx:m,cy:v,r:2.05,fill:"none",stroke:"rgba(12,16,20,.55)",strokeWidth:"0.4"})]},g)}):p=h({xStep:26,yStep:22,stagger:!0,render:(m,v,g)=>S.jsx("g",{children:S.jsx(Ql,{cx:m,cy:v,r:5,ids:c})},g)});return S.jsxs("svg",{className:`pattern-preview-svg ${e}`,viewBox:`0 0 ${o} ${a}`,preserveAspectRatio:"xMidYMid slice",role:"img","aria-label":`${t} preview`,children:[S.jsxs("defs",{children:[S.jsx("clipPath",{id:c.clip,children:S.jsx("rect",{width:o,height:a,rx:"5"})}),S.jsxs("linearGradient",{id:c.plate,x1:"0",y1:"0",x2:"1",y2:"1",children:[S.jsx("stop",{offset:"0",stopColor:l.lo}),S.jsx("stop",{offset:".22",stopColor:l.plate0}),S.jsx("stop",{offset:".48",stopColor:l.hi}),S.jsx("stop",{offset:".72",stopColor:l.plate1}),S.jsx("stop",{offset:"1",stopColor:l.lo})]}),S.jsxs("linearGradient",{id:c.sheen,x1:"0",y1:"0",x2:"1",y2:"0",children:[S.jsx("stop",{offset:"0",stopColor:"rgba(255,255,255,0)"}),S.jsx("stop",{offset:".38",stopColor:"rgba(255,255,255,.34)"}),S.jsx("stop",{offset:".62",stopColor:"rgba(255,255,255,0)"}),S.jsx("stop",{offset:"1",stopColor:"rgba(0,0,0,.12)"})]}),S.jsxs("pattern",{id:c.brush,width:l.grainW,height:"14",patternUnits:"userSpaceOnUse",patternTransform:`rotate(${l.grain})`,children:[S.jsx("rect",{width:l.grainW,height:"14",fill:"transparent"}),S.jsx("path",{d:"M0 0 V14",stroke:"rgba(255,255,255,.22)",strokeWidth:"0.45"}),S.jsx("path",{d:`M${l.grainW/2} 0 V14`,stroke:"rgba(0,0,0,.16)",strokeWidth:"0.4"})]}),S.jsxs("radialGradient",{id:c.rim,cx:"34%",cy:"28%",r:"72%",children:[S.jsx("stop",{offset:"0",stopColor:l.hi}),S.jsx("stop",{offset:".42",stopColor:l.mid}),S.jsx("stop",{offset:"1",stopColor:l.lo})]}),S.jsxs("radialGradient",{id:c.voidG,cx:"64%",cy:"70%",r:"78%",children:[S.jsx("stop",{offset:"0",stopColor:l.void0}),S.jsx("stop",{offset:".55",stopColor:l.void1}),S.jsx("stop",{offset:"1",stopColor:"#050608"})]}),S.jsxs("radialGradient",{id:c.bump,cx:"34%",cy:"28%",r:"74%",children:[S.jsx("stop",{offset:"0",stopColor:l.hi}),S.jsx("stop",{offset:".38",stopColor:l.mid}),S.jsx("stop",{offset:".78",stopColor:l.lo}),S.jsx("stop",{offset:"1",stopColor:"#2a2c2e"})]}),S.jsxs("radialGradient",{id:c.cone,cx:"36%",cy:"30%",r:"76%",children:[S.jsx("stop",{offset:"0",stopColor:l.hi}),S.jsx("stop",{offset:".32",stopColor:l.mid}),S.jsx("stop",{offset:".7",stopColor:l.lo}),S.jsx("stop",{offset:"1",stopColor:"#1c2024"})]}),S.jsxs("linearGradient",{id:c.bridge,x1:"0",y1:"0",x2:"0",y2:"1",children:[S.jsx("stop",{offset:"0",stopColor:l.hi}),S.jsx("stop",{offset:".22",stopColor:l.mid}),S.jsx("stop",{offset:".62",stopColor:l.plate0}),S.jsx("stop",{offset:"1",stopColor:l.plate1})]})]}),S.jsxs("g",{clipPath:`url(#${c.clip})`,children:[S.jsx("rect",{width:o,height:a,fill:`url(#${c.plate})`}),S.jsx("rect",{width:o,height:a,fill:`url(#${c.brush})`,opacity:l.grainOpacity}),S.jsx("rect",{width:o,height:a,fill:`url(#${c.sheen})`,opacity:"0.28"}),p]})]})}const xa=new Uint8Array(256),af=new Uint8Array(256);(function(){for(let e=0,n=1;e<255;e++)xa[e]=n,af[n]=e,n<<=1,n&256&&(n^=285);xa[255]=xa[0]})();function xy(t,e){return t&&e?xa[(af[t]+af[e])%255]:0}function tP(t){let e=[1];for(let n=0;n<t;n++){const i=[1,xa[n]],r=new Array(e.length+1).fill(0);for(let s=0;s<e.length;s++)r[s]^=e[s],r[s+1]^=xy(e[s],i[1]);e=r}return e}function nP(t,e){const n=tP(e),i=t.concat(new Array(e).fill(0));for(let r=0;r<t.length;r++){const s=i[r];if(s)for(let o=0;o<n.length;o++)i[r+o]^=xy(n[o],s)}return i.slice(t.length)}const iP={2:{size:25,data:28,ec:16,blocks:1,align:[6,18]},3:{size:29,data:44,ec:26,blocks:1,align:[6,22]},4:{size:33,data:64,ec:18,blocks:2,align:[6,26]},5:{size:37,data:86,ec:24,blocks:2,align:[6,30]},6:{size:41,data:108,ec:16,blocks:4,align:[6,34]},7:{size:45,data:124,ec:18,blocks:4,align:[6,22,38]}},rP=[21522,20773,24188,23371,17913,16590,20375,19104];function sP(t){if(t+2<=28)return 2;if(t+2<=44)return 3;if(t+2<=64)return 4;if(t+2<=86)return 5;if(t+2<=108)return 6;if(t+2<=124)return 7;throw new Error("QR payload too long")}function Zh(t,e,n,i){for(let r=-1;r<=7;r++)for(let s=-1;s<=7;s++){const o=i+r,a=n+s;if(o<0||a<0||o>=t.length||a>=t.length)continue;const l=r>=0&&r<=6&&s>=0&&s<=6&&(r===0||r===6||s===0||s===6||r>=2&&r<=4&&s>=2&&s<=4);r>=0&&r<=6&&s>=0&&s<=6&&(t[o][a]=l),e[o][a]=!0}}function oP(t,e,n,i){for(let r=-2;r<=2;r++)for(let s=-2;s<=2;s++){const o=i+r,a=n+s;if(e[o][a])return}for(let r=-2;r<=2;r++)for(let s=-2;s<=2;s++){const o=i+r,a=n+s;t[o][a]=Math.max(Math.abs(r),Math.abs(s))!==1,e[o][a]=!0}}function aP(t,e,n){const i=t.length;for(let r=0;r<15;r++){const s=(n>>r&1)===1;r<6?(t[r][8]=s,t[8][i-1-r]=s):r===6?(t[7][8]=s,t[8][i-7]=s):r===7?(t[8][8]=s,t[8][i-8]=s):r===8?(t[8][7]=s,t[i-7][8]=s):(t[8][14-r]=s,t[i-15+r][8]=s),e[r<8?Math.min(r,7):8][8]=!0}for(let r=0;r<i;r++)e[8][r]=!0,e[r][8]=!0;t[i-8][8]=!0,e[i-8][8]=!0}function lP(t,e,n){return(e+n)%2===0}function cP(t){const e=Array.from(new TextEncoder().encode(String(t))),n=sP(e.length),i=iP[n],r=[],s=(_,y)=>{for(let C=y-1;C>=0;C--)r.push(_>>C&1)};for(s(4,4),s(e.length,8),e.forEach(_=>s(_,8)),s(0,Math.min(4,i.data*8-r.length));r.length%8;)r.push(0);const o=[];for(let _=0;_<r.length;_+=8){let y=0;for(let C=0;C<8;C++)y=y<<1|r[_+C];o.push(y)}const a=[236,17];for(;o.length<i.data;)o.push(a[o.length-e.length&1]);o.length=i.data;const l=i.data/i.blocks,c=[];for(let _=0;_<i.blocks;_++){const y=o.slice(_*l,(_+1)*l);c.push({data:y,ec:nP(y,i.ec)})}const u=[];for(let _=0;_<l;_++)c.forEach(y=>u.push(y.data[_]));for(let _=0;_<i.ec;_++)c.forEach(y=>u.push(y.ec[_]));const h=[];u.forEach(_=>{for(let y=7;y>=0;y--)h.push(_>>y&1)});const d=i.size,p=Array.from({length:d},()=>Array(d).fill(!1)),m=Array.from({length:d},()=>Array(d).fill(!1));Zh(p,m,0,0),Zh(p,m,d-7,0),Zh(p,m,0,d-7),i.align.forEach(_=>i.align.forEach(y=>oP(p,m,_,y)));for(let _=8;_<d-8;_++)p[6][_]=_%2===0,p[_][6]=_%2===0,m[6][_]=m[_][6]=!0;const v=0;aP(p,m,rP[v]);let g=0,f=-1,x=d-1;for(;x>0;){x===6&&(x-=1);for(let _=0;_<d;_++){const y=f<0?d-1-_:_;for(let C=0;C<2;C++){const T=x-C;if(m[y][T])continue;let A=g<h.length?h[g++]===1:!1;lP(v,y,T)&&(A=!A),p[y][T]=A}}f=-f,x-=2}return p}function uP(t,e,n,i,r,s="#111"){const o=cP(e),a=o.length,l=4,c=a+l*2,u=r/c;t.fillStyle="#fff",t.fillRect(n,i,r,r),t.fillStyle=s;for(let h=0;h<a;h++)for(let d=0;d<a;d++)o[h][d]&&t.fillRect(n+(d+l)*u,i+(h+l)*u,u+.4,u+.4)}function hP(t){return String(t||"product").replace(/[^A-Za-z0-9]+/g,"_").replace(/^_|_$/g,"")}function H0(){const t="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="";for(let n=0;n<6;n++)e+=t[t.length*Math.random()|0];return e}async function dP(t,e){try{const n=await fetch("/api/codes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({configuration:t})});if(n.ok){const i=await n.json();return{code:i.code||H0(),url:i.url||e}}}catch{}return{code:H0(),url:e}}function fP(t){return new Promise((e,n)=>{const i=new Image;i.onload=()=>e(i),i.onerror=n,i.src=t})}function ec(t,e,n,i,r,s){const o=Math.min(s,i/2,r/2);t.beginPath(),t.moveTo(e+o,n),t.arcTo(e+i,n,e+i,n+r,o),t.arcTo(e+i,n+r,e,n+r,o),t.arcTo(e,n+r,e,n,o),t.arcTo(e,n,e+i,n,o),t.closePath()}function V0(t,e,n,i,r,s){t.fillStyle="#74808a",t.font="700 12px Inter, Segoe UI, Arial, sans-serif",t.fillText(e.toUpperCase(),i,r),t.fillStyle="#151b20",t.font="700 20px Inter, Segoe UI, Arial, sans-serif";let a=String(n);for(;t.measureText(a).width>s&&a.length>3;)a=`${a.slice(0,-2)}…`;t.fillText(a,i,r+26)}async function pP(t,e,n,i,r){const l=document.createElement("canvas");l.width=1920*2,l.height=1080*2;const c=l.getContext("2d",{alpha:!1,willReadFrequently:!0});c.scale(2,2),c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high";const u=1920,h=1080;c.fillStyle="#f4f6f7",c.fillRect(0,0,u,h),c.fillStyle="#11171c",c.fillRect(0,0,u,96),c.fillStyle="#d8ff37",c.fillRect(0,0,10,96),c.fillStyle="#d8ff37",c.font="800 12px Inter, Segoe UI, Arial, sans-serif",c.fillText("STEELWORKS / CONFIGURATION SHEET",40,28),c.fillStyle="#fff",c.font="800 34px Inter, Segoe UI, Arial, sans-serif",c.fillText(be.productName,40,64),c.fillStyle="#9ba5ad",c.font="500 13px Inter, Segoe UI, Arial, sans-serif",c.fillText(hy,40,84),c.textAlign="right",c.fillStyle="#fff",c.font="700 15px Inter, Segoe UI, Arial, sans-serif",c.fillText(r,u-40,32),c.fillStyle="#9ba5ad",c.font="500 13px Inter, Segoe UI, Arial, sans-serif",c.fillText(new Date().toLocaleDateString(),u-40,54),c.fillText(`${be.contactEmail}  ·  ${be.contactPhone}`,u-40,76),c.textAlign="left";const d=await fP(n),p=32,m=116,v=1188,g=748;c.fillStyle="#dce1e4",ec(c,p,m,v,g,10),c.fill();const f=Math.min((v-48)/d.width,(g-48)/d.height),x=d.width*f,_=d.height*f;c.save(),ec(c,p,m,v,g,10),c.clip(),c.drawImage(d,p+(v-x)/2,m+(g-_)/2,x,_),c.restore();const y=On[i.material],C=lo[i.finish],T=Ce[i.pattern],A=wp(i),L=Ep(i),E=py(i),M=(T==null?void 0:T.kind)==="slot"||(T==null?void 0:T.kind)==="bridge",U=M?`${i.pitch} × ${i.rowPitch} mm`:`${i.pitch} mm`,B=i.panelForm==="flat"?"N/A":`${i.flangeDepth} mm / ${i.bendAngle}° / R${i.bendRadius}`,I=1240,z=116,j=648,J=748;c.fillStyle="#fff",ec(c,I,z,j,J,10),c.fill(),c.fillStyle="#d8ff37",c.fillRect(I,z+10,8,J-20),c.fillStyle="#11171c",c.font="800 16px Inter, Segoe UI, Arial, sans-serif",c.fillText("FABRICATION PARAMETERS",I+36,z+42),c.strokeStyle="#d7dde1",c.beginPath(),c.moveTo(I+36,z+58),c.lineTo(I+j-28,z+58),c.stroke();const Q=I+36,N=I+340,H=270;[["Sheet size",`${i.width} × ${i.height} mm`,"Thickness",`${i.thickness} mm`],["Material",y.label,"Finish",`${C.label}${i.finish==="powder"?` · ${zt[i.color].label}`:""}`],["Pattern",T!=null&&T.conical?`${T.label} · ${i.coneAngle}°`:T.label,"Opening",`${i.holeSize} mm${M?` × ${i.slotLength} L`:""}${T!=null&&T.conical?` / ${i.coneAngle}°`:""}`],["Pitch",U,"Quantity",String(i.quantity||1)],["Panel form",qs[i.panelForm].label,"Bend / flange",B],["Corner",`${Ga[i.corner].label}${i.corner==="square"?"":` ${Ys(i)} mm`}`,"Quality",`${i.deburr} / ${i.tolerance} / ${i.flatness}`],["Open area / mass",`${A.toFixed(1)}% / ${L.toFixed(1)} kg`,`Indicative ${be.currency}`,Tp(E,be.currency)]].forEach((Se,Ue)=>{const V=z+88+Ue*80;V0(c,Se[0],Se[1],Q,V,H),V0(c,Se[2],Se[3],N,V,H)}),c.fillStyle="#11171c",ec(c,32,884,1856,164,10),c.fill(),c.fillStyle="#d8ff37",c.fillRect(32,894,8,144);try{uP(c,e,56,904,124)}catch{}c.fillStyle="#d8ff37",c.font="800 22px Inter, Segoe UI, Arial, sans-serif",c.fillText(`CONFIGURATION ${t}`,204,938),c.fillStyle="#fff",c.font="700 16px Inter, Segoe UI, Arial, sans-serif",c.fillText("Scan to reopen this exact configuration",204,968),c.fillStyle="#9ba5ad",c.font="500 13px Inter, Segoe UI, Arial, sans-serif";const te=e.length>140?`${e.slice(0,140)}…`:e;return c.fillText(te,204,994),c.fillText("DXF export contains blank profile, bend lines, perforations and fabrication notes. Final CAM/tooling validation remains the responsibility of the fabricator.",204,1018),c.fillStyle="#6f7a82",c.font="600 11px Inter, Segoe UI, Arial, sans-serif",c.fillText(`${be.manufacturer} · Parametric 3D product configuration`,204,1038),l}function mP(t,e,n,i){const o=new TextEncoder,a=[];let l=0;const c=[0],u=f=>{const x=typeof f=="string"?o.encode(f):f;a.push(x),l+=x.length};u(`%PDF-1.4
`);const h=(f,x,_)=>{c[f]=l,u(`${f} 0 obj
${x}`),_&&(u(`stream
`),u(_),u(`endstream
`)),u(`endobj
`)};h(1,`<< /Type /Catalog /Pages 2 0 R >>
`),h(2,`<< /Type /Pages /Kids [3 0 R] /Count 1 >>
`),h(3,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 1080 ${607.5}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>
`),h(4,`<< /Type /XObject /Subtype /Image /Width ${e} /Height ${n} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /${i} /Length ${t.length} >>
`,t);const d=`q 1080 0 0 ${607.5} 0 0 cm /Im0 Do Q`;h(5,`<< /Length ${d.length} >>
`,o.encode(d));const p=l;u(`xref
0 6
0000000000 65535 f 
`);for(let f=1;f<=5;f++)u(`${String(c[f]).padStart(10,"0")} 00000 n 
`);u(`trailer << /Size 6 /Root 1 0 R >>
startxref
${p}
%%EOF`);const m=a.reduce((f,x)=>f+x.length,0),v=new Uint8Array(m);let g=0;return a.forEach(f=>{v.set(f,g),g+=f.length}),v}async function gP(t){const e=new Blob([t]).stream().pipeThrough(new CompressionStream("deflate"));return new Uint8Array(await new Response(e).arrayBuffer())}async function vP(t,e=.97){const n=await new Promise(o=>t.toBlob(o,"image/jpeg",e));if(n)return new Uint8Array(await n.arrayBuffer());const i=t.toDataURL("image/jpeg",e),r=atob(i.split(",")[1]||""),s=new Uint8Array(r.length);for(let o=0;o<r.length;o++)s[o]=r.charCodeAt(o);return s}async function _P(t){try{const{width:e,height:n}=t,i=t.getContext("2d",{willReadFrequently:!0}),{data:r}=i.getImageData(0,0,e,n),s=new Uint8Array(e*n*3);for(let o=0,a=0;o<r.length;o+=4,a+=3)s[a]=r[o],s[a+1]=r[o+1],s[a+2]=r[o+2];return{bytes:await gP(s),filter:"FlateDecode"}}catch{return{bytes:await vP(t,.97),filter:"DCTDecode"}}}async function xP({config:t,viewUrl:e,captureJpeg:n,sku:i}){const r=await dP(t,e),s=r.url||e,o=n(),a=await pP(r.code,s,o,t,i),l=await _P(a),c=mP(l.bytes,a.width,a.height,l.filter),u=document.createElement("a");return u.href=URL.createObjectURL(new Blob([c],{type:"application/pdf"})),u.download=`${hP(be.productName)}_${r.code}.pdf`,u.click(),setTimeout(()=>URL.revokeObjectURL(u.href),1500),{code:r.code,sku:i,url:s}}const yP=["mill","brushed","galvanized","powder"],SP=[{id:"configure",n:"1",label:"Configure"},{id:"review",n:"2",label:"Review & quote"}],MP={none:"None",standard:"Standard",fine:"Fine"},wP={"iso-c":"ISO coarse","iso-m":"ISO medium","iso-f":"ISO fine"},EP={standard:"Standard",precision:"Precision"},yy=new URL(location.href).searchParams.get("embed")==="1",Sy="steel-configurator-saved",$i=sf(),G0=Tu(),TP="./assets/sample-logo.svg";let W0=!1;function AP(){try{if(document.referrer)return new URL(document.referrer).origin}catch{}return yy?"*":location.origin}function $0(t){window.parent&&window.parent!==window&&window.parent.postMessage({source:"steel-configurator",...t},AP())}function j0(){try{const t=JSON.parse(localStorage.getItem(Sy)||"[]");return Array.isArray(t)?t:[]}catch{return[]}}function tc(t,e={}){fetch("/api/events",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:t,payload:e})}).catch(()=>{})}function bP(){var vo,_o,xo,vr,yo,_r,So,Mo,Ja,Qa,el,b,k,X,W,$,_e;const[t,e]=Ae.useReducer(iR,null,fR),[n,i]=Ae.useState(()=>({...be})),[r,s]=Ae.useState(""),[o,a]=Ae.useState(!1),[l,c]=Ae.useState(!1),[u,h]=Ae.useState(!1),[d,p]=Ae.useState(""),[m,v]=Ae.useState("idle"),[g,f]=Ae.useState(!1),[x,_]=Ae.useState(!0),[y,C]=Ae.useState(!1),[T,A]=Ae.useState(!1),[L,E]=Ae.useState(100),[M,U]=Ae.useState("configure"),[B,I]=Ae.useState("orbit"),[z,j]=Ae.useState(!1),J=Ae.useRef({w:0,h:0}),[Q,N]=Ae.useState(()=>!Tu()),[H,q]=Ae.useState("form"),te=Ae.useRef(null),Se=Ae.useRef(null),Ue=Ae.useRef({width:null,height:null,thickness:null}),V=Ae.useRef(""),ie=Ae.useRef(null),me=Ae.useRef(0),ne=Ae.useMemo(()=>hR(t,n.skuPrefix),[t,n.skuPrefix]),Ie=Ae.useMemo(()=>wp(t),[t]),Fe=Ae.useMemo(()=>Ep(t),[t]),O=Ae.useMemo(()=>Eu(t),[t]),ke=Ae.useMemo(()=>py(t),[t,n]),Z=Ae.useMemo(()=>Tp(ke,n.currency),[ke,n.currency]),ae=Ae.useMemo(()=>aR(t),[t]),K=Ae.useMemo(()=>_a(t),[t]),ue=Ae.useMemo(()=>lR(t),[t]),le=Ae.useMemo(()=>my(t),[t]),Me=Ae.useMemo(()=>ue.filter(P=>P.level==="block"),[ue]),Le=$i.android&&m!=="idle",R=t.units==="in"?"in":"mm",w=(P,re=R==="in"?3:0)=>`${gc(P,t.units,re)} ${R}`,G=Ae.useMemo(()=>uR({config:t,sku:ne,openArea:Ie,weight:Fe,price:ke,lead:ae,currency:n.currency}),[t,ne,Ie,Fe,ke,ae,n.currency]),Y=P=>{s(P),window.clearTimeout(me.current),me.current=window.setTimeout(()=>s(""),2400)};Ae.useEffect(()=>{$0({type:"ready",configuration:t,sku:ne});const P=re=>{if(re.source!==window.parent)return;const fe=re.data;!fe||fe.source==="steel-configurator"||fe.type==="setConfiguration"&&fe.configuration&&e({type:"load",config:fe.configuration})};return window.addEventListener("message",P),()=>window.removeEventListener("message",P)},[]),Ae.useEffect(()=>{$0({type:"configurationChanged",configuration:t,sku:ne})},[t,ne]),Ae.useEffect(()=>(document.body.classList.toggle("is-touch-tablet",$i.touchTablet||$i.ios),()=>document.body.classList.remove("is-touch-tablet")),[]),Ae.useEffect(()=>{Object.values(On).forEach(P=>{const re=new Image;re.decoding="async",re.src=P.cardImage})},[]),Ae.useEffect(()=>{W0||(W0=!0,tc("view",{sku:ne}))},[ne]),Ae.useEffect(()=>{fetch("/api/product").then(P=>P.ok?P.json():Promise.reject()).then(P=>{const re=tR(P);i(re);const fe=new URL(location.href).searchParams;!fe.has("w")&&!fe.has("h")&&!fe.has("t")&&!fe.has("cfg")&&e({type:"applyCatalogDefaults",values:{width:re.width,height:re.height,thickness:re.thickness}})}).catch(()=>{})},[]),Ae.useEffect(()=>{const P=(new URL(location.href).searchParams.get("cfg")||"").toUpperCase();if(!P)return;let re=!1;return fetch(`/api/codes/${P}`).then(fe=>fe.ok?fe.json():Promise.reject()).then(fe=>{if(re)return;const Ne=dR(fe);Ne&&e({type:"load",config:Ne})}).catch(()=>{}),()=>{re=!0}},[]);const ce=Ae.useCallback(P=>E(P),[]),se=Ae.useCallback(P=>{var re;v(P),P==="idle"&&(E(100),(re=te.current)==null||re.setScalePercent(100))},[]),Pe=Ae.useCallback(P=>{te.current=P,P.setDimensionHud(Ue.current),C(!0)},[]),ve=Ae.useCallback(P=>A(!!P),[]),ge=[t.width,t.height,t.thickness,t.material,t.finish,t.color,t.pattern,t.holeSize,t.slotLength,t.pitch,t.rowPitch,t.border,t.coneAngle,t.panelForm,t.flangeDepth,t.bendAngle,t.bendRadius,t.corner,t.cornerRadius].join("|");Ae.useEffect(()=>()=>{V.current&&URL.revokeObjectURL(V.current)},[]),Ae.useEffect(()=>{if(!$i.ios||!y||!te.current)return;let P=!1;return te.current.exportUSDZ().then(re=>{if(P)return;V.current&&URL.revokeObjectURL(V.current);const fe=URL.createObjectURL(new Blob([re],{type:"model/vnd.usdz+zip"}));V.current=fe,ie.current&&(ie.current.href=fe,ie.current.dataset.ready="1")}).catch(re=>{console.error("USDZ export failed",re),ie.current&&(ie.current.dataset.ready="0")}),()=>{P=!0}},[y,ge]);async function ze(){if(!te.current){p("Wait for the 3D panel to load, then tap View in AR again.");return}if(!await ER()){p(of);return}try{E(100),te.current.setScalePercent(100),v("launching"),tc("ar_launch",{sku:ne}),await te.current.enterAR({overlay:Se.current})}catch(P){v("idle"),p(TR(P))}}async function pe(){const P=Gh(t);try{tc("share",{sku:ne}),navigator.share?await navigator.share({title:`${n.productName} ${ne}`,url:P}):(await navigator.clipboard.writeText(P),Y("Configuration link copied"))}catch{}}function Re(){const P=j0();P.unshift({id:`CFG-${Date.now()}`,name:`${ne} · ${new Date().toLocaleString()}`,config:t});try{localStorage.setItem(Sy,JSON.stringify(P.slice(0,16)))}catch{}c(!0),Y("Configuration saved locally")}async function qe(P,re){try{await navigator.clipboard.writeText(P),Y(re)}catch{Y("Could not copy")}}function De(){if(Me.length){q("rules"),Y("This configuration cannot be manufactured as specified");return}a(!0)}async function Te(){if(Me.length){q("rules"),Y("Fix manufacturing issues before export or quote");return}try{Y("Preparing technical PDF…");const P=await xP({config:t,viewUrl:Gh(t),captureJpeg:()=>te.current.captureJpeg(),sku:ne});tc("spec_download",{sku:ne,kind:"pdf",code:P.code}),Y(`PDF saved · ${P.code}`)}catch(P){console.error(P),Y((P==null?void 0:P.message)||"Could not create the PDF")}}async function Ve(P){if(P.preventDefault(),Me.length){Y("Fix manufacturing issues before sending an RFQ");return}const re=new FormData(P.currentTarget),fe=Object.fromEntries(re.entries()),Ne=`RFQ: ${n.productName} ${ne}`,Oe=["Perforated sheet RFQ","",`Name: ${fe.name||""}`,`Company: ${fe.company||""}`,`Email: ${fe.email||""}`,`Phone: ${fe.phone||""}`,`Quantity: ${fe.quantity||t.quantity}`,"",G,`Link: ${Gh(t)}`,"","Notes:",fe.notes||"(none)"].join(`
`);try{await fetch("/api/quotes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...fe,quantity:Number(fe.quantity)||t.quantity,configuration:{...t,computed:{sku:ne,openArea:Ie,weight:Fe,holes:O}}})})}catch{}window.location.href=`mailto:${n.contactEmail}?subject=${encodeURIComponent(Ne)}&body=${encodeURIComponent(Oe)}`}const Ye=l?j0():[],pt=Le?m==="scanning"||m==="launching"?"Move the phone to find the floor, then tap to place":m==="placing"?"Tap to place the sheet at 1:1 scale":m==="scaling"?`${L}%`:"Drag to move · pinch to scale · twist to rotate":"",Ge=`${lo[t.finish].label}${t.finish==="powder"?` · ${zt[t.color].label} – ${zt[t.color].name}`:""}`,F=M==="configure"?"configure":"review",oe=((vo=Ce[t.pattern])==null?void 0:vo.kind)==="slot"||((_o=Ce[t.pattern])==null?void 0:_o.kind)==="bridge",ee=oe?`${t.pitch} × ${t.rowPitch}`:String(t.pitch),ye=t.holeSize<K.minHoleSize,we=t.pitch<K.minPitchX,Ke=(((xo=Ce[t.pattern])==null?void 0:xo.kind)==="slot"||((vr=Ce[t.pattern])==null?void 0:vr.kind)==="bridge")&&t.rowPitch<K.minRowPitch,st=(((yo=Ce[t.pattern])==null?void 0:yo.kind)==="slot"||((_r=Ce[t.pattern])==null?void 0:_r.kind)==="bridge")&&t.slotLength<K.minSlotLength,mt=t.border<K.minBorder;function Tt(P){var re;I(P),(re=te.current)==null||re.setTool(P)}function et(P,re){const fe=Number(re);if(!Number.isFinite(fe)||fe<=0)return;if(!z||P!=="width"&&P!=="height"){e({type:"set",key:P,value:fe});return}const Ne=J.current.w>0?J.current:{w:t.width,h:t.height};if(J.current=Ne,P==="width"){const xt=fe,Ot=xt*Ne.h/Ne.w;e({type:"setMany",values:{width:xt,height:Ot}});return}const Oe=fe,We=Oe*Ne.w/Ne.h;e({type:"setMany",values:{width:We,height:Oe}})}function Ln(){j(P=>(P||(J.current={w:t.width,h:t.height}),!P))}function Ft(){const P=cR(t);if(!Object.keys(P).length){Y("No automatic corrections are required");return}e({type:"setMany",values:P}),Y("Recommended manufacturing values applied")}return S.jsxs("main",{className:`steel-app${yy?" is-embed":""}${F!=="configure"?" step-review":""}`,children:[S.jsxs("header",{className:"steel-head",children:[S.jsxs("div",{className:"brand-lockup",children:[S.jsx("div",{className:"brand-mark-steel",children:"S"}),S.jsxs("div",{className:"brand-text",children:[S.jsx("strong",{children:"STEELWORKS"}),S.jsx("span",{children:"Configurator"})]})]}),S.jsx("nav",{className:"stepper","aria-label":"Configuration steps",children:SP.map(P=>S.jsxs("button",{type:"button",className:`step${F===P.id?" active":""}`,onClick:()=>U(P.id),children:[S.jsx("em",{children:P.n})," ",P.label]},P.id))}),S.jsxs("div",{className:"head-actions",children:[S.jsxs("button",{className:"ghost-action",type:"button","aria-label":"Save configuration",onClick:Re,children:[S.jsx(LP,{})," ",S.jsx("span",{className:"action-label",children:"Save"})]}),S.jsxs("button",{className:"ghost-action",type:"button","aria-label":"Share configuration",onClick:pe,children:[S.jsx(NP,{})," ",S.jsx("span",{className:"action-label",children:"Share"})]}),S.jsxs("button",{className:"ghost-action quote-action",type:"button","aria-label":"Request quote",onClick:De,children:[S.jsx("span",{className:"action-label",children:"Request "}),"Quote"]})]})]}),S.jsxs("div",{className:"steel-layout",children:[S.jsxs("section",{className:"steel-stage",children:[S.jsxs("div",{className:"stage-head",children:[S.jsxs("div",{children:[S.jsx("h1",{children:n.productName}),S.jsx("p",{className:"steel-tagline",children:F==="review"?"Confirm the 3D sheet, then copy the spec or request a quote.":hy})]}),S.jsxs("div",{className:"sku-chip",title:ne,children:[S.jsx("code",{children:ne}),S.jsx("button",{type:"button",className:"icon-copy",title:"Copy product code",onClick:()=>qe(ne,"Product code copied"),children:S.jsx(BP,{})})]})]}),S.jsxs("div",{className:"viewer-shell",onPointerDown:()=>_(!1),children:[S.jsx(YR,{config:t,scalePercent:100,onReady:Pe,onError:()=>f(!0),onArState:se,onArScale:ce,onBusy:ve}),!$i.touchTablet&&!G0&&S.jsxs("div",{className:"viewer-tools",children:[S.jsx(Ko,{active:B==="orbit",title:"Rotate the sheet",onClick:()=>Tt("orbit"),children:S.jsx(IP,{})}),S.jsx(Ko,{active:B==="zoom",title:"Zoom the view",onClick:()=>Tt("zoom"),children:S.jsx(DP,{})}),S.jsx(Ko,{title:"Fit sheet in view",onClick:()=>{var P;return(P=te.current)==null?void 0:P.fitView()},children:S.jsx(UP,{})}),S.jsx(Ko,{active:B==="pan",title:"Pan the camera",onClick:()=>Tt("pan"),children:S.jsx(FP,{})}),S.jsx(Ko,{title:"Reset camera",onClick:()=>{var P;Tt("orbit"),(P=te.current)==null||P.resetView()},children:S.jsx(OP,{})})]}),S.jsxs("div",{className:"nav-cube",children:[S.jsx("button",{type:"button",title:"Top view",onClick:()=>{var P;return(P=te.current)==null?void 0:P.setPreset("top")},children:"Top"}),S.jsx("button",{type:"button",title:"Front view",onClick:()=>{var P;return(P=te.current)==null?void 0:P.setPreset("front")},children:"Front"}),S.jsx("button",{type:"button",title:"Right view",onClick:()=>{var P;return(P=te.current)==null?void 0:P.setPreset("right")},children:"Right"})]}),S.jsxs("div",{className:"pattern-thumb",title:Ce[t.pattern].label,children:[S.jsx(eP,{pattern:t.pattern,material:t.material,className:"pattern-thumb-svg",variant:"thumb"}),S.jsx("span",{children:"Pattern preview"})]}),S.jsxs("div",{className:"dim dim-w",ref:P=>{Ue.current.width=P},children:[S.jsx("i",{}),S.jsx("b",{}),S.jsx("i",{}),S.jsx("em",{children:w(t.width)})]}),S.jsxs("div",{className:"dim dim-h",ref:P=>{Ue.current.height=P},children:[S.jsx("i",{}),S.jsx("b",{}),S.jsx("i",{}),S.jsx("em",{children:w(t.height)})]}),S.jsxs("div",{className:"dim dim-t",ref:P=>{Ue.current.thickness=P},children:[S.jsx("i",{}),S.jsx("b",{}),S.jsx("i",{}),S.jsx("em",{children:w(t.thickness,R==="in"?3:1)})]}),S.jsxs("div",{className:"viewer-ar",children:[$i.android&&S.jsx("button",{className:"btn btn-outline",type:"button",onClick:ze,children:"View in AR"}),$i.ios&&S.jsxs("a",{ref:ie,className:"btn btn-outline ar-link",rel:"ar",href:"#quicklook",children:[S.jsx("img",{className:"ar-icon",alt:"",src:TP}),"View in AR"]})]}),T&&S.jsx("div",{className:"viewer-busy",children:"Updating perforation…"}),x&&S.jsx("p",{className:"orbit-caption",children:$i.touchTablet||G0?"Drag to rotate · pinch to zoom":"Drag to rotate · pinch or scroll to zoom"}),g&&S.jsx("p",{className:"viewer-error",children:"3D view could not start. Open this page in Chrome or Safari."})]})]}),S.jsx("aside",{className:"config-panel",children:F==="review"?S.jsxs("div",{className:"review-panel",children:[S.jsx("p",{className:"eyebrow",children:"Review & quote"}),S.jsx("h2",{children:"Check this sheet"}),S.jsx("p",{className:"review-intro",children:"This is the manufacturing specification for the 3D sheet. Edit configuration to change values, then quote from here."}),S.jsxs("div",{className:"config-summary prominent",children:[S.jsxs("div",{className:"summary-sku",children:[S.jsx("span",{children:"Product code"}),S.jsx("strong",{children:ne})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Sheet"}),S.jsxs("strong",{children:[w(t.width)," × ",w(t.height)," × ",w(t.thickness,R==="in"?3:1)]})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Quantity"}),S.jsxs("strong",{children:[t.quantity," pcs · ",le.label]})]}),S.jsxs("div",{className:"review-pattern",children:[S.jsx("span",{className:"material-preview review-material-preview","aria-hidden":"true",children:S.jsx("img",{src:On[t.material].cardImage,alt:""})}),S.jsxs("div",{className:"review-pattern-meta",children:[S.jsx("span",{children:"Material"}),S.jsx("strong",{children:On[t.material].label})]})]}),S.jsxs("div",{className:"review-pattern",children:[S.jsx("span",{className:`pattern-preview pattern-${t.pattern}`,"aria-hidden":"true"}),S.jsxs("div",{className:"review-pattern-meta",children:[S.jsx("span",{children:"Pattern"}),S.jsxs("strong",{children:[Ce[t.pattern].label,(So=Ce[t.pattern])!=null&&So.conical?` · ${t.coneAngle}°`:""]})]})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Opening"}),S.jsxs("strong",{children:[t.holeSize," mm · ",ee," mm centers",oe?` · slot ${t.slotLength} mm`:"",(Mo=Ce[t.pattern])!=null&&Mo.conical?` · head Ø${Fn(t).head.toFixed(2)} · exit Ø${Fn(t).exit}`:""]})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Finish"}),S.jsx("strong",{children:Ge})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Form"}),S.jsxs("strong",{children:[qs[t.panelForm].label,t.panelForm!=="flat"?` · flange ${t.flangeDepth} mm · ${t.bendAngle}° · R${t.bendRadius}`:""]})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Corners"}),S.jsxs("strong",{children:[Ga[t.corner].label,t.corner!=="square"?` ${Ys(t)} mm`:""]})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Quality"}),S.jsxs("strong",{children:[MP[t.deburr]," · ",wP[t.tolerance]," · ",EP[t.flatness]]})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Open area / mass"}),S.jsxs("strong",{children:[Ie.toFixed(1),"% · ",Fe.toFixed(1)," kg"]})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Price / lead"}),S.jsxs("strong",{children:[Z," · ",ae]})]})]}),S.jsx("div",{className:`review-status${Me.length?" block":ue.length?" warn":" ok"}`,children:Me.length?"Manufacturing blocks must be fixed before quoting or export.":ue.length?"Configuration can be quoted, but review the warnings below.":"Within standard punching rules."}),ue.length>0&&S.jsx("ul",{className:"issue-list",children:ue.map(P=>S.jsx("li",{className:`issue-${P.level}`,children:P.text},P.text))}),ue.length>0&&S.jsx("button",{className:"btn btn-primary reset-btn",type:"button",onClick:Ft,children:"Apply recommended fixes"}),S.jsx("div",{className:"review-actions",children:S.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>U("configure"),children:"← Edit configuration"})}),S.jsx("button",{className:"btn btn-primary summary-cta",type:"button",onClick:De,children:"Request Quote →"})]}):S.jsxs(S.Fragment,{children:[S.jsxs(Yo,{index:"01",title:"Sheet size",children:[S.jsx("div",{className:"section-meta",children:S.jsxs("label",{className:"units-select",children:[S.jsx("span",{children:"Units"}),S.jsxs("select",{value:t.units,onChange:P=>e({type:"set",key:"units",value:P.target.value}),children:[S.jsx("option",{value:"mm",children:"mm"}),S.jsx("option",{value:"in",children:"inch"})]})]})}),S.jsxs("div",{className:"dimension-grid size-grid",children:[S.jsx(Mn,{label:"Width",units:t.units,value:t.width,min:200,max:3e3,step:5,onChange:P=>et("width",P)}),S.jsx("button",{className:`lock-btn${z?" active":""}`,type:"button","aria-pressed":z,title:z?"Unlock width and height":"Lock width and height in proportion",onClick:Ln,children:z?S.jsx(kP,{}):S.jsx(zP,{})}),S.jsx(Mn,{label:"Height",units:t.units,value:t.height,min:200,max:4e3,step:5,onChange:P=>et("height",P)}),S.jsx(Mn,{label:"Thickness",units:t.units,value:t.thickness,min:.5,max:12,step:.5,digits:1,onChange:P=>e({type:"set",key:"thickness",value:P})}),S.jsx(Mn,{label:"Border",units:t.units,value:t.border,min:0,max:300,step:5,invalid:mt,onChange:P=>e({type:"set",key:"border",value:P})})]}),z&&S.jsx("p",{className:"fab-note",children:"Width and height are locked in proportion. Change one, the other follows."}),S.jsxs("div",{className:"dimension-grid tight-top",children:[S.jsx(Mn,{label:"Quantity",suffix:"pcs",value:t.quantity,min:1,max:9999,step:1,onChange:P=>e({type:"set",key:"quantity",value:P})}),S.jsx("div",{className:`stock-chip${le.ok?"":" warn"}`,children:le.label})]})]}),S.jsx(Yo,{index:"02",title:"Material",children:S.jsx("div",{className:"material-grid",children:Object.entries(On).map(([P,re])=>S.jsxs("button",{type:"button",className:`material-card${t.material===P?" active":""}`,onClick:()=>e({type:"set",key:"material",value:P}),children:[S.jsxs("div",{className:"material-preview",children:[S.jsx("img",{src:re.cardImage,alt:"",width:480,height:240,loading:t.material===P?"eager":"lazy",decoding:"async",fetchPriority:t.material===P?"high":"low"}),t.material===P&&S.jsx("span",{className:"material-check","aria-hidden":"true",children:"✓"})]}),S.jsxs("div",{className:"material-info",children:[S.jsx("strong",{className:"material-name",children:re.label}),S.jsx("small",{className:"material-code",children:re.short})]})]},P))})}),S.jsxs(Yo,{index:"03",title:"Perforation pattern",children:[KC.map(P=>S.jsxs("div",{className:"pattern-group",children:[S.jsx("p",{className:"pattern-group-title",children:P.title}),S.jsx("div",{className:"pattern-grid",children:P.keys.map(re=>{const fe=Ce[re];return S.jsxs("button",{className:`pattern-card ${t.pattern===re?"active":""}`,type:"button",onClick:()=>e({type:"setMany",values:{pattern:re,...go[re]||{}}}),children:[t.pattern===re&&S.jsx("span",{className:"pattern-check","aria-hidden":"true",children:"✓"}),S.jsx("span",{className:`pattern-preview pattern-${re}`}),S.jsx("span",{children:fe.label})]},re)})})]},P.id)),S.jsx("div",{className:"pattern-grid tight-top",children:S.jsxs("label",{className:"pattern-card pattern-upload",children:[S.jsx("span",{className:"pattern-preview pattern-custom"}),S.jsx("strong",{children:"Upload DXF / SVG"}),S.jsx("span",{children:"Custom pattern file"}),S.jsx("input",{type:"file",accept:".dxf,.svg",hidden:!0,onChange:()=>Y("Custom DXF / SVG patterns ship with the production CAM module")})]})}),S.jsx("p",{className:"pattern-blurb",children:Ce[t.pattern].blurb}),((Ja=Ce[t.pattern])==null?void 0:Ja.conical)&&S.jsxs(S.Fragment,{children:[S.jsx("p",{className:"fab-label",children:"Conical mold head"}),S.jsx("div",{className:"choice-grid",children:[60,30].map(P=>S.jsx("button",{type:"button",className:`choice-card${t.coneAngle===P?" active":""}`,onClick:()=>e({type:"set",key:"coneAngle",value:P}),children:P0[P].label},P))}),S.jsxs("p",{className:"fab-note",children:[P0[t.coneAngle].blurb," Head Ø ",Fn(t).head.toFixed(2)," mm · collar ",Fn(t).height.toFixed(2)," mm · exit Ø ",Fn(t).exit," mm."]})]}),S.jsxs("button",{className:"edit-params",type:"button",onClick:()=>N(P=>!P),children:[Q?"Hide":"Edit"," pattern parameters"]}),Q&&S.jsxs("div",{className:"dimension-grid tight-top",children:[S.jsx(Mn,{label:CP(t.pattern),units:t.units,value:t.holeSize,min:1,max:80,step:1,invalid:ye,onChange:P=>e({type:"set",key:"holeSize",value:P})}),S.jsx(Mn,{label:RP(t.pattern),units:t.units,value:t.pitch,min:2,max:200,step:1,invalid:we,onChange:P=>e({type:"set",key:"pitch",value:P})}),(((Qa=Ce[t.pattern])==null?void 0:Qa.kind)==="slot"||((el=Ce[t.pattern])==null?void 0:el.kind)==="bridge")&&S.jsxs(S.Fragment,{children:[S.jsx(Mn,{label:"Row pitch",units:t.units,value:t.rowPitch,min:2,max:200,step:1,invalid:Ke,onChange:P=>e({type:"set",key:"rowPitch",value:P})}),S.jsx(Mn,{label:"Slot length",units:t.units,value:t.slotLength,min:1,max:160,step:1,invalid:st,onChange:P=>e({type:"set",key:"slotLength",value:P})})]})]})]}),S.jsxs(Yo,{index:"04",title:"Finish",children:[S.jsx("div",{className:"finish-tabs",children:yP.map(P=>S.jsx("button",{type:"button",className:t.finish===P?"active":"",onClick:()=>e({type:"set",key:"finish",value:P}),children:lo[P].label},P))}),t.finish==="powder"&&S.jsxs(S.Fragment,{children:[S.jsxs("p",{className:"ral-selected",children:[zt[t.color].label," – ",zt[t.color].name]}),S.jsx("div",{className:"color-swatches",children:YC.map(P=>S.jsxs("button",{className:`color-chip ${t.color===P?"active":""}`,type:"button",title:`${zt[P].label} – ${zt[P].name}`,onClick:()=>e({type:"set",key:"color",value:P}),children:[S.jsx("span",{style:{background:zt[P].hex}}),S.jsx("small",{children:zt[P].label.replace("RAL ","")})]},P))}),S.jsx("button",{className:"link-btn",type:"button",onClick:()=>h(!0),children:"View All RAL Colors"})]})]}),S.jsxs(Yo,{index:"05",title:"Edge & fabrication",children:[S.jsx("button",{type:"button",className:`fab-row${H==="form"?" open":""}`,onClick:()=>q(H==="form"?"":"form"),children:"Panel form"}),H==="form"&&S.jsxs(S.Fragment,{children:[S.jsx("div",{className:"choice-grid",children:Object.entries(qs).map(([P,re])=>S.jsx("button",{type:"button",className:`choice-card${t.panelForm===P?" active":""}`,onClick:()=>e({type:"set",key:"panelForm",value:P}),children:re.label},P))}),t.panelForm!=="flat"&&S.jsxs("div",{className:"dimension-grid tight-top",children:[S.jsx(Mn,{label:"Flange depth",units:t.units,value:t.flangeDepth,min:8,max:150,step:1,onChange:P=>e({type:"set",key:"flangeDepth",value:P})}),S.jsx(Mn,{label:"Bend angle",suffix:"°",value:t.bendAngle,min:30,max:120,step:1,onChange:P=>e({type:"set",key:"bendAngle",value:P})}),S.jsx(Mn,{label:"Bend radius",units:t.units,value:t.bendRadius,min:.5,max:20,step:.5,digits:1,onChange:P=>e({type:"set",key:"bendRadius",value:P})})]})]}),S.jsx("button",{type:"button",className:`fab-row${H==="edge"?" open":""}`,onClick:()=>q(H==="edge"?"":"edge"),children:"Corners"}),H==="edge"&&S.jsxs(S.Fragment,{children:[S.jsx("p",{className:"fab-label",children:"Corner treatment"}),S.jsx("div",{className:"choice-grid three",children:Object.entries(Ga).map(([P,re])=>S.jsx("button",{type:"button",className:`choice-card${t.corner===P?" active":""}`,onClick:()=>e({type:"set",key:"corner",value:P}),children:re.label},P))}),t.corner!=="square"&&S.jsx("div",{className:"dimension-grid tight-top",children:S.jsx(Mn,{label:t.corner==="radius"?"Corner radius":"Chamfer size",units:t.units,value:t.cornerRadius,min:1,max:150,step:1,onChange:P=>e({type:"set",key:"cornerRadius",value:P})})}),t.corner!=="square"&&S.jsxs("p",{className:"fab-note",children:["Outer blank corners are ",t.corner==="radius"?`rounded at R${Ys(t)} mm`:`chamfered ${Ys(t)} mm`," on the 3D sheet and fabrication drawing."]})]}),S.jsx("button",{type:"button",className:`fab-row${H==="quality"?" open":""}`,onClick:()=>q(H==="quality"?"":"quality"),children:"Deburr, tolerance & flatness"}),H==="quality"&&S.jsxs(S.Fragment,{children:[S.jsx("p",{className:"fab-label",children:"Deburring"}),S.jsx("div",{className:"choice-grid three",children:[["none","None"],["standard","Standard"],["fine","Fine"]].map(([P,re])=>S.jsx("button",{type:"button",className:`choice-card${t.deburr===P?" active":""}`,onClick:()=>e({type:"set",key:"deburr",value:P}),children:re},P))}),S.jsx("p",{className:"fab-label",children:"Tolerance"}),S.jsx("div",{className:"choice-grid three",children:[["iso-c","ISO coarse"],["iso-m","ISO medium"],["iso-f","ISO fine"]].map(([P,re])=>S.jsx("button",{type:"button",className:`choice-card${t.tolerance===P?" active":""}`,onClick:()=>e({type:"set",key:"tolerance",value:P}),children:re},P))}),S.jsx("p",{className:"fab-label",children:"Flatness"}),S.jsx("div",{className:"choice-grid three",children:[["standard","Standard"],["precision","Precision"]].map(([P,re])=>S.jsx("button",{type:"button",className:`choice-card${t.flatness===P?" active":""}`,onClick:()=>e({type:"set",key:"flatness",value:P}),children:re},P))})]}),S.jsx("button",{type:"button",className:`fab-row${H==="rules"?" open":""}${ue.length?" has-issues":""}`,onClick:()=>q(H==="rules"?"":"rules"),children:"Punching rules & validation"}),H==="rules"&&S.jsxs(S.Fragment,{children:[S.jsxs("p",{className:"fab-note",children:["Opening ≥ ",K.minHoleSize," mm. Ligament ≥ ",K.ligament," mm. Edge ≥ ",K.minBorder," mm.",((b=Ce[t.pattern])==null?void 0:b.kind)==="slot"||((k=Ce[t.pattern])==null?void 0:k.kind)==="bridge"?` Minimum centers: ${K.minPitchX} × ${K.minRowPitch} mm.`:"",(X=Ce[t.pattern])!=null&&X.conical?` Perfocon pitch is governed by the ${t.coneAngle}° exit Ø ${Fn(t).exit} mm.`:""," Entered values are preserved so conflicts are visible."]}),ue.length===0&&S.jsx("p",{className:"fab-ok",children:"Configuration is within standard punching rules."}),ue.length>0&&S.jsx("ul",{className:"issue-list",children:ue.map(P=>S.jsx("li",{className:`issue-${P.level}`,children:P.text},P.text))}),ue.length>0&&S.jsx("button",{className:"btn btn-primary reset-btn",type:"button",onClick:Ft,children:"Apply recommended fixes"}),S.jsx("button",{className:"btn btn-outline reset-btn",type:"button",onClick:()=>e({type:"reset"}),children:"Reset configuration"})]})]}),S.jsx("button",{className:"btn btn-primary reset-btn",type:"button",onClick:()=>U("review"),children:"Review & quote →"})]})})]}),S.jsxs("div",{className:"metric-strip",children:[S.jsx(Ss,{label:"Open area",value:`${Ie.toFixed(1)}%`}),S.jsx(Ss,{label:"Est. mass",value:`${Fe.toFixed(1)} kg`}),S.jsx(Ss,{label:PP(t.pattern),value:O.toLocaleString()}),S.jsx(Ss,{label:"Thickness",value:w(t.thickness,R==="in"?3:1)}),S.jsx(Ss,{label:"Indicative price",value:Z,accent:!0}),S.jsx(Ss,{label:"Lead time",value:ae})]}),S.jsxs("footer",{className:"steel-foot",children:[S.jsx("div",{className:"foot-exports",children:S.jsx("button",{className:"btn btn-primary pdf-card",type:"button",onClick:Te,children:"Technical PDF"})}),S.jsxs("div",{className:"foot-summary",children:[S.jsx("span",{children:"Configuration summary"}),S.jsx("strong",{children:ne}),S.jsxs("small",{children:[On[t.material].short," · ",Ce[t.pattern].short," ",t.holeSize,"/",t.pitch,((W=Ce[t.pattern])==null?void 0:W.kind)==="slot"||(($=Ce[t.pattern])==null?void 0:$.kind)==="bridge"?`×${t.rowPitch}`:"",(_e=Ce[t.pattern])!=null&&_e.conical?` · ${t.coneAngle}°`:""," · ",qs[t.panelForm].label," · qty ",t.quantity]}),S.jsxs("small",{children:[w(t.width)," × ",w(t.height)," × ",w(t.thickness,R==="in"?3:1)]})]})]}),S.jsxs("div",{ref:Se,className:`ar-overlay${Le?" is-active":""}`,children:[pt&&S.jsx("p",{className:"ar-banner",children:pt}),S.jsx("button",{className:"btn btn-dark",type:"button",onClick:()=>{var P;return(P=te.current)==null?void 0:P.exitAR()},children:"Exit AR"})]}),o&&S.jsxs(nc,{title:"Request quotation",onClose:()=>a(!1),children:[S.jsxs("div",{className:"quote-spec",children:[S.jsx("strong",{children:ne}),S.jsxs("span",{children:[w(t.width)," × ",w(t.height)," × ",w(t.thickness,R==="in"?3:1)," · qty ",t.quantity," · ",Ie.toFixed(1),"% open area"]})]}),ue.length>0&&S.jsx("ul",{className:"issue-list",children:ue.map(P=>S.jsx("li",{className:`issue-${P.level}`,children:P.text},P.text))}),S.jsxs("form",{onSubmit:Ve,children:[S.jsxs("div",{className:"form-grid",children:[S.jsx(Zo,{name:"name",label:"Name",required:!0}),S.jsx(Zo,{name:"company",label:"Company",required:!0}),S.jsx(Zo,{name:"email",label:"Email",type:"email",required:!0}),S.jsx(Zo,{name:"phone",label:"Phone",type:"tel"}),S.jsx(Zo,{name:"quantity",label:"Quantity",type:"number",defaultValue:String(t.quantity)}),S.jsxs("div",{className:"full",children:[S.jsx("label",{className:"label",children:"Project / fabrication notes"}),S.jsx("textarea",{className:"textarea",name:"notes",rows:4,placeholder:"Quantity, tolerances, edge treatment, delivery location..."})]})]}),S.jsxs("div",{className:"modal-actions",children:[S.jsx("button",{type:"button",className:"btn",onClick:()=>a(!1),children:"Cancel"}),S.jsx("button",{className:"btn btn-primary",type:"submit",disabled:Me.length>0,children:"Send RFQ"})]})]})]}),l&&S.jsxs(nc,{title:"Saved configurations",onClose:()=>c(!1),children:[Ye.length===0&&S.jsx("p",{className:"muted",children:"No saved configurations yet."}),Ye.map(P=>S.jsxs("div",{className:"saved-row",children:[S.jsxs("div",{children:[S.jsx("strong",{children:P.name}),S.jsx("small",{children:P.id})]}),S.jsx("button",{className:"btn",type:"button",onClick:()=>{e({type:"load",config:P.config}),c(!1),Y("Configuration loaded")},children:"Load"})]},P.id))]}),u&&S.jsx(nc,{title:"RAL colors",onClose:()=>h(!1),children:S.jsx("div",{className:"ral-grid",children:cy.map(P=>S.jsxs("button",{type:"button",className:`ral-option${t.color===P?" active":""}`,onClick:()=>{e({type:"set",key:"color",value:P}),h(!1)},children:[S.jsx("span",{style:{background:zt[P].hex}}),S.jsx("strong",{children:zt[P].label}),S.jsx("small",{children:zt[P].name})]},P))})}),d&&S.jsxs(nc,{title:"View in AR",onClose:()=>p(""),children:[S.jsx("p",{className:"muted",children:d}),S.jsx("div",{className:"modal-actions",children:S.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>p(""),children:"OK"})})]}),r&&S.jsx("div",{className:"toast",children:r})]})}function Yo({index:t,title:e,children:n}){return S.jsxs("section",{className:"panel-section",children:[S.jsxs("div",{className:"section-title",children:[S.jsx("span",{children:t}),S.jsx("h2",{children:e})]}),n]})}function CP(t){var n;const e=(n=Ce[t])==null?void 0:n.kind;return e==="square"?"Opening size":e==="hex"?"Hex size · point-to-point":e==="trieur"?"Cup diameter":e==="embossed"?"Diamond size":e==="perfocon"?"Entrance diameter":e==="bridge"?"Slot width":"Hole size"}function RP(t){var n;const e=(n=Ce[t])==null?void 0:n.kind;return e==="decorative"?"Motif pitch":e==="slot"||e==="bridge"?"Column pitch":"Pitch / centers"}function PP(t){var n;return((n=Ce[t])==null?void 0:n.kind)==="trieur"?"Cup count":"Hole count"}function Ss({label:t,value:e,accent:n}){return S.jsxs("div",{className:`metric-item${n?" accent":""}`,children:[S.jsx("span",{children:t}),S.jsx("strong",{children:e})]})}function Mn({label:t,suffix:e,value:n,min:i,max:r,step:s,onChange:o,units:a,digits:l,invalid:c}){const u=a==="in",h=e||(u?"in":a?"mm":""),d=l??(u?3:s<1?1:0),p=a?gc(n,a,d):n,m=a?gc(i,a,d):i,v=a?gc(r,a,d):r,g=a&&u?Number((s/Sp).toFixed(4)):s,[f,x]=Ae.useState(null),_=f===null?p:f;return S.jsxs("label",{className:`number-control${c?" invalid":""}`,children:[S.jsx("span",{children:t}),S.jsxs("div",{children:[S.jsx("input",{type:"number",inputMode:"decimal",enterKeyHint:"done",value:_,min:m,max:v,step:g,onWheel:y=>y.currentTarget.blur(),onFocus:()=>x(p),onBlur:()=>{if(f!==null&&f!==""){const y=Number(f);Number.isFinite(y)&&o(a?L0(y,a):y)}x(null)},onChange:y=>{const C=y.target.value;if(x(C),C==="")return;const T=Number(C);Number.isFinite(T)&&o(a?L0(T,a):T)}}),h&&S.jsx("small",{children:h})]})]})}function nc({title:t,onClose:e,children:n}){return S.jsx("div",{className:"modal-backdrop",children:S.jsxs("div",{className:"modal",children:[S.jsxs("div",{className:"modal-head",children:[S.jsx("h2",{children:t}),S.jsx("button",{className:"icon-btn",type:"button",onClick:e,children:"×"})]}),S.jsx("div",{className:"modal-body",children:n})]})})}function Zo({name:t,label:e,type:n="text",required:i,defaultValue:r}){const s=n==="email"?"email":n==="tel"?"tel":n==="number"?"numeric":void 0,o=n==="email"?"email":n==="tel"?"tel":t==="name"?"name":t==="company"?"organization":void 0;return S.jsxs("div",{children:[S.jsx("label",{className:"label",children:e}),S.jsx("input",{className:"text-input",name:t,type:n,inputMode:s,autoComplete:o,required:i,defaultValue:r,min:n==="number"?1:void 0,enterKeyHint:n==="email"||n==="tel"?"next":void 0})]})}function Ko({active:t,title:e,onClick:n,children:i}){return S.jsx("button",{type:"button",className:t?"active":"",title:e,"aria-label":e,onClick:n,children:i})}function di({d:t,children:e}){return S.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.8","aria-hidden":"true",children:e||S.jsx("path",{d:t})})}function LP(){return S.jsx(di,{d:"M5 5h11l3 3v11H5V5zm3 0v5h8V5M8 19v-6h8v6"})}function NP(){return S.jsx(di,{d:"M16 5h4v4M20 5l-9 9M9 5H5v14h14v-4"})}function IP(){return S.jsx(di,{d:"M12 5a7 7 0 1 0 6.3 4M12 5l2.5 2.5M12 5 9.5 7.5"})}function DP(){return S.jsx(di,{d:"M10.5 17a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13zM15 15l5 5"})}function UP(){return S.jsx(di,{d:"M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"})}function FP(){return S.jsx(di,{d:"M12 4v16M4 12h16M8 8l-4 4 4 4M16 8l4 4-4 4"})}function OP(){return S.jsx(di,{d:"M4 12a8 8 0 1 0 2.2-5.6M4 4v5h5"})}function kP(){return S.jsx(di,{d:"M8 11V8a4 4 0 1 1 8 0v3M6 11h12v9H6v-9z"})}function zP(){return S.jsx(di,{d:"M8 11V8a4 4 0 0 1 7.5-2M6 11h12v9H6v-9z"})}function BP(){return S.jsx(di,{d:"M8 8h11v13H8V8zm-3 3V3h11"})}class HP extends iv.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}render(){return this.state.error?S.jsx("main",{className:"steel-app",children:S.jsxs("p",{className:"viewer-error",children:["The configurator hit an error: ",String(this.state.error.message||this.state.error)]})}):this.props.children}}ox(document.getElementById("root")).render(S.jsx(iv.StrictMode,{children:S.jsx(HP,{children:S.jsx(bP,{})})}));
