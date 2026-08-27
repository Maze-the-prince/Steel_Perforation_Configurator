(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Py(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Y0={exports:{}},Qc={},Z0={exports:{}},Je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wa=Symbol.for("react.element"),Ly=Symbol.for("react.portal"),Ny=Symbol.for("react.fragment"),Dy=Symbol.for("react.strict_mode"),Iy=Symbol.for("react.profiler"),Uy=Symbol.for("react.provider"),Fy=Symbol.for("react.context"),Oy=Symbol.for("react.forward_ref"),ky=Symbol.for("react.suspense"),zy=Symbol.for("react.memo"),By=Symbol.for("react.lazy"),Dp=Symbol.iterator;function Hy(t){return t===null||typeof t!="object"?null:(t=Dp&&t[Dp]||t["@@iterator"],typeof t=="function"?t:null)}var K0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J0=Object.assign,Q0={};function uo(t,e,n){this.props=t,this.context=e,this.refs=Q0,this.updater=n||K0}uo.prototype.isReactComponent={};uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ev(){}ev.prototype=uo.prototype;function hf(t,e,n){this.props=t,this.context=e,this.refs=Q0,this.updater=n||K0}var df=hf.prototype=new ev;df.constructor=hf;J0(df,uo.prototype);df.isPureReactComponent=!0;var Ip=Array.isArray,tv=Object.prototype.hasOwnProperty,ff={current:null},nv={key:!0,ref:!0,__self:!0,__source:!0};function iv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)tv.call(e,i)&&!nv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Wa,type:t,key:s,ref:o,props:r,_owner:ff.current}}function Vy(t,e){return{$$typeof:Wa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wa}function Gy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Up=/\/+/g;function Pu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Gy(""+t.key):e.toString(36)}function ic(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Wa:case Ly:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Pu(o,0):i,Ip(r)?(n="",t!=null&&(n=t.replace(Up,"$&/")+"/"),ic(r,e,n,"",function(c){return c})):r!=null&&(pf(r)&&(r=Vy(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Up,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ip(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Pu(s,a);o+=ic(s,e,n,l,r)}else if(l=Hy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Pu(s,a++),o+=ic(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function tl(t,e,n){if(t==null)return t;var i=[],r=0;return ic(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Wy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var hn={current:null},rc={transition:null},$y={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:rc,ReactCurrentOwner:ff};function rv(){throw Error("act(...) is not supported in production builds of React.")}Je.Children={map:tl,forEach:function(t,e,n){tl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return tl(t,function(){e++}),e},toArray:function(t){return tl(t,function(e){return e})||[]},only:function(t){if(!pf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Je.Component=uo;Je.Fragment=Ny;Je.Profiler=Iy;Je.PureComponent=hf;Je.StrictMode=Dy;Je.Suspense=ky;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$y;Je.act=rv;Je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=J0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ff.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)tv.call(e,l)&&!nv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Wa,type:t.type,key:r,ref:s,props:i,_owner:o}};Je.createContext=function(t){return t={$$typeof:Fy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Uy,_context:t},t.Consumer=t};Je.createElement=iv;Je.createFactory=function(t){var e=iv.bind(null,t);return e.type=t,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(t){return{$$typeof:Oy,render:t}};Je.isValidElement=pf;Je.lazy=function(t){return{$$typeof:By,_payload:{_status:-1,_result:t},_init:Wy}};Je.memo=function(t,e){return{$$typeof:zy,type:t,compare:e===void 0?null:e}};Je.startTransition=function(t){var e=rc.transition;rc.transition={};try{t()}finally{rc.transition=e}};Je.unstable_act=rv;Je.useCallback=function(t,e){return hn.current.useCallback(t,e)};Je.useContext=function(t){return hn.current.useContext(t)};Je.useDebugValue=function(){};Je.useDeferredValue=function(t){return hn.current.useDeferredValue(t)};Je.useEffect=function(t,e){return hn.current.useEffect(t,e)};Je.useId=function(){return hn.current.useId()};Je.useImperativeHandle=function(t,e,n){return hn.current.useImperativeHandle(t,e,n)};Je.useInsertionEffect=function(t,e){return hn.current.useInsertionEffect(t,e)};Je.useLayoutEffect=function(t,e){return hn.current.useLayoutEffect(t,e)};Je.useMemo=function(t,e){return hn.current.useMemo(t,e)};Je.useReducer=function(t,e,n){return hn.current.useReducer(t,e,n)};Je.useRef=function(t){return hn.current.useRef(t)};Je.useState=function(t){return hn.current.useState(t)};Je.useSyncExternalStore=function(t,e,n){return hn.current.useSyncExternalStore(t,e,n)};Je.useTransition=function(){return hn.current.useTransition()};Je.version="18.3.1";Z0.exports=Je;var Te=Z0.exports;const sv=Py(Te);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jy=Te,Xy=Symbol.for("react.element"),qy=Symbol.for("react.fragment"),Yy=Object.prototype.hasOwnProperty,Zy=jy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ky={key:!0,ref:!0,__self:!0,__source:!0};function ov(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Yy.call(e,i)&&!Ky.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Xy,type:t,key:s,ref:o,props:r,_owner:Zy.current}}Qc.Fragment=qy;Qc.jsx=ov;Qc.jsxs=ov;Y0.exports=Qc;var S=Y0.exports,av={exports:{}},Ln={},lv={exports:{}},cv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,H){var q=N.length;N.push(H);e:for(;0<q;){var te=q-1>>>1,Se=N[te];if(0<r(Se,H))N[te]=H,N[q]=Se,q=te;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var H=N[0],q=N.pop();if(q!==H){N[0]=q;e:for(var te=0,Se=N.length,Fe=Se>>>1;te<Fe;){var G=2*(te+1)-1,ie=N[G],de=G+1,le=N[de];if(0>r(ie,q))de<Se&&0>r(le,ie)?(N[te]=le,N[de]=q,te=de):(N[te]=ie,N[G]=q,te=G);else if(de<Se&&0>r(le,q))N[te]=le,N[de]=q,te=de;else break e}}return H}function r(N,H){var q=N.sortIndex-H.sortIndex;return q!==0?q:N.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,d=3,p=!1,m=!1,v=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var H=n(c);H!==null;){if(H.callback===null)i(c);else if(H.startTime<=N)i(c),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(c)}}function y(N){if(v=!1,_(N),!m)if(n(l)!==null)m=!0,Z(C);else{var H=n(c);H!==null&&Q(y,H.startTime-N)}}function C(N,H){m=!1,v&&(v=!1,f(P),P=-1),p=!0;var q=d;try{for(_(H),h=n(l);h!==null&&(!(h.expirationTime>H)||N&&!U());){var te=h.callback;if(typeof te=="function"){h.callback=null,d=h.priorityLevel;var Se=te(h.expirationTime<=H);H=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&i(l),_(H)}else i(l);h=n(l)}if(h!==null)var Fe=!0;else{var G=n(c);G!==null&&Q(y,G.startTime-H),Fe=!1}return Fe}finally{h=null,d=q,p=!1}}var E=!1,A=null,P=-1,w=5,M=-1;function U(){return!(t.unstable_now()-M<w)}function B(){if(A!==null){var N=t.unstable_now();M=N;var H=!0;try{H=A(!0,N)}finally{H?D():(E=!1,A=null)}}else E=!1}var D;if(typeof x=="function")D=function(){x(B)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,j=z.port2;z.port1.onmessage=B,D=function(){j.postMessage(null)}}else D=function(){g(B,0)};function Z(N){A=N,E||(E=!0,D())}function Q(N,H){P=g(function(){N(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,Z(C))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var q=d;d=H;try{return N()}finally{d=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,H){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var q=d;d=N;try{return H()}finally{d=q}},t.unstable_scheduleCallback=function(N,H,q){var te=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?te+q:te):q=te,N){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=q+Se,N={id:u++,callback:H,priorityLevel:N,startTime:q,expirationTime:Se,sortIndex:-1},q>te?(N.sortIndex=q,e(c,N),n(l)===null&&N===n(c)&&(v?(f(P),P=-1):v=!0,Q(y,q-te))):(N.sortIndex=Se,e(l,N),m||p||(m=!0,Z(C))),N},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(N){var H=d;return function(){var q=d;d=H;try{return N.apply(this,arguments)}finally{d=q}}}})(cv);lv.exports=cv;var Jy=lv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qy=Te,Rn=Jy;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uv=new Set,ya={};function Zr(t,e){Js(t,e),Js(t+"Capture",e)}function Js(t,e){for(ya[t]=e,t=0;t<e.length;t++)uv.add(e[t])}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jh=Object.prototype.hasOwnProperty,eS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fp={},Op={};function tS(t){return Jh.call(Op,t)?!0:Jh.call(Fp,t)?!1:eS.test(t)?Op[t]=!0:(Fp[t]=!0,!1)}function nS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function iS(t,e,n,i){if(e===null||typeof e>"u"||nS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qt[t]=new dn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qt[e]=new dn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qt[t]=new dn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qt[t]=new dn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qt[t]=new dn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qt[t]=new dn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qt[t]=new dn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qt[t]=new dn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qt[t]=new dn(t,5,!1,t.toLowerCase(),null,!1,!1)});var mf=/[\-:]([a-z])/g;function gf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mf,gf);qt[e]=new dn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mf,gf);qt[e]=new dn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mf,gf);qt[e]=new dn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qt[t]=new dn(t,1,!1,t.toLowerCase(),null,!1,!1)});qt.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qt[t]=new dn(t,1,!1,t.toLowerCase(),null,!0,!0)});function vf(t,e,n,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(iS(e,n,r,i)&&(n=null),i||r===null?tS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ki=Qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nl=Symbol.for("react.element"),As=Symbol.for("react.portal"),bs=Symbol.for("react.fragment"),_f=Symbol.for("react.strict_mode"),Qh=Symbol.for("react.profiler"),hv=Symbol.for("react.provider"),dv=Symbol.for("react.context"),xf=Symbol.for("react.forward_ref"),ed=Symbol.for("react.suspense"),td=Symbol.for("react.suspense_list"),yf=Symbol.for("react.memo"),Yi=Symbol.for("react.lazy"),fv=Symbol.for("react.offscreen"),kp=Symbol.iterator;function Eo(t){return t===null||typeof t!="object"?null:(t=kp&&t[kp]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,Lu;function Jo(t){if(Lu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lu=e&&e[1]||""}return`
`+Lu+t}var Nu=!1;function Du(t,e){if(!t||Nu)return"";Nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Nu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Jo(t):""}function rS(t){switch(t.tag){case 5:return Jo(t.type);case 16:return Jo("Lazy");case 13:return Jo("Suspense");case 19:return Jo("SuspenseList");case 0:case 2:case 15:return t=Du(t.type,!1),t;case 11:return t=Du(t.type.render,!1),t;case 1:return t=Du(t.type,!0),t;default:return""}}function nd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bs:return"Fragment";case As:return"Portal";case Qh:return"Profiler";case _f:return"StrictMode";case ed:return"Suspense";case td:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dv:return(t.displayName||"Context")+".Consumer";case hv:return(t._context.displayName||"Context")+".Provider";case xf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yf:return e=t.displayName||null,e!==null?e:nd(t.type)||"Memo";case Yi:e=t._payload,t=t._init;try{return nd(t(e))}catch{}}return null}function sS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nd(e);case 8:return e===_f?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function oS(t){var e=pv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function il(t){t._valueTracker||(t._valueTracker=oS(t))}function mv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=pv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function _c(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function id(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gv(t,e){e=e.checked,e!=null&&vf(t,"checked",e,!1)}function rd(t,e){gv(t,e);var n=hr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sd(t,e.type,n):e.hasOwnProperty("defaultValue")&&sd(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sd(t,e,n){(e!=="number"||_c(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qo=Array.isArray;function Bs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function od(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Qo(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function vv(t,e){var n=hr(e.value),i=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _v(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ad(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_v(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var rl,xv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(rl=rl||document.createElement("div"),rl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=rl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aS=["Webkit","ms","Moz","O"];Object.keys(ra).forEach(function(t){aS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ra[e]=ra[t]})});function yv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ra.hasOwnProperty(t)&&ra[t]?(""+e).trim():e+"px"}function Sv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=yv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var lS=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ld(t,e){if(e){if(lS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function cd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ud=null;function Sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hd=null,Hs=null,Vs=null;function Gp(t){if(t=Xa(t)){if(typeof hd!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=ru(e),hd(t.stateNode,t.type,e))}}function Mv(t){Hs?Vs?Vs.push(t):Vs=[t]:Hs=t}function wv(){if(Hs){var t=Hs,e=Vs;if(Vs=Hs=null,Gp(t),e)for(t=0;t<e.length;t++)Gp(e[t])}}function Ev(t,e){return t(e)}function Tv(){}var Iu=!1;function Av(t,e,n){if(Iu)return t(e,n);Iu=!0;try{return Ev(t,e,n)}finally{Iu=!1,(Hs!==null||Vs!==null)&&(Tv(),wv())}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var i=ru(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var dd=!1;if(Ni)try{var To={};Object.defineProperty(To,"passive",{get:function(){dd=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{dd=!1}function cS(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var sa=!1,xc=null,yc=!1,fd=null,uS={onError:function(t){sa=!0,xc=t}};function hS(t,e,n,i,r,s,o,a,l){sa=!1,xc=null,cS.apply(uS,arguments)}function dS(t,e,n,i,r,s,o,a,l){if(hS.apply(this,arguments),sa){if(sa){var c=xc;sa=!1,xc=null}else throw Error(ce(198));yc||(yc=!0,fd=c)}}function Kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function bv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wp(t){if(Kr(t)!==t)throw Error(ce(188))}function fS(t){var e=t.alternate;if(!e){if(e=Kr(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Wp(r),t;if(s===i)return Wp(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function Cv(t){return t=fS(t),t!==null?Rv(t):null}function Rv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Rv(t);if(e!==null)return e;t=t.sibling}return null}var Pv=Rn.unstable_scheduleCallback,$p=Rn.unstable_cancelCallback,pS=Rn.unstable_shouldYield,mS=Rn.unstable_requestPaint,bt=Rn.unstable_now,gS=Rn.unstable_getCurrentPriorityLevel,Mf=Rn.unstable_ImmediatePriority,Lv=Rn.unstable_UserBlockingPriority,Sc=Rn.unstable_NormalPriority,vS=Rn.unstable_LowPriority,Nv=Rn.unstable_IdlePriority,eu=null,ui=null;function _S(t){if(ui&&typeof ui.onCommitFiberRoot=="function")try{ui.onCommitFiberRoot(eu,t,void 0,(t.current.flags&128)===128)}catch{}}var ei=Math.clz32?Math.clz32:SS,xS=Math.log,yS=Math.LN2;function SS(t){return t>>>=0,t===0?32:31-(xS(t)/yS|0)|0}var sl=64,ol=4194304;function ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Mc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ea(a):(s&=o,s!==0&&(i=ea(s)))}else o=n&~r,o!==0?i=ea(o):s!==0&&(i=ea(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ei(e),r=1<<n,i|=t[n],e&=~r;return i}function MS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ei(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=MS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function pd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Dv(){var t=sl;return sl<<=1,!(sl&4194240)&&(sl=64),t}function Uu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ei(e),t[e]=n}function ES(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ei(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function wf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function Iv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Uv,Ef,Fv,Ov,kv,md=!1,al=[],tr=null,nr=null,ir=null,wa=new Map,Ea=new Map,Ki=[],TS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jp(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(e.pointerId)}}function Ao(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Xa(e),e!==null&&Ef(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function AS(t,e,n,i,r){switch(e){case"focusin":return tr=Ao(tr,t,e,n,i,r),!0;case"dragenter":return nr=Ao(nr,t,e,n,i,r),!0;case"mouseover":return ir=Ao(ir,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return wa.set(s,Ao(wa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ea.set(s,Ao(Ea.get(s)||null,t,e,n,i,r)),!0}return!1}function zv(t){var e=Fr(t.target);if(e!==null){var n=Kr(e);if(n!==null){if(e=n.tag,e===13){if(e=bv(n),e!==null){t.blockedOn=e,kv(t.priority,function(){Fv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ud=i,n.target.dispatchEvent(i),ud=null}else return e=Xa(n),e!==null&&Ef(e),t.blockedOn=n,!1;e.shift()}return!0}function Xp(t,e,n){sc(t)&&n.delete(e)}function bS(){md=!1,tr!==null&&sc(tr)&&(tr=null),nr!==null&&sc(nr)&&(nr=null),ir!==null&&sc(ir)&&(ir=null),wa.forEach(Xp),Ea.forEach(Xp)}function bo(t,e){t.blockedOn===e&&(t.blockedOn=null,md||(md=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,bS)))}function Ta(t){function e(r){return bo(r,t)}if(0<al.length){bo(al[0],t);for(var n=1;n<al.length;n++){var i=al[n];i.blockedOn===t&&(i.blockedOn=null)}}for(tr!==null&&bo(tr,t),nr!==null&&bo(nr,t),ir!==null&&bo(ir,t),wa.forEach(e),Ea.forEach(e),n=0;n<Ki.length;n++)i=Ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ki.length&&(n=Ki[0],n.blockedOn===null);)zv(n),n.blockedOn===null&&Ki.shift()}var Gs=ki.ReactCurrentBatchConfig,wc=!0;function CS(t,e,n,i){var r=ot,s=Gs.transition;Gs.transition=null;try{ot=1,Tf(t,e,n,i)}finally{ot=r,Gs.transition=s}}function RS(t,e,n,i){var r=ot,s=Gs.transition;Gs.transition=null;try{ot=4,Tf(t,e,n,i)}finally{ot=r,Gs.transition=s}}function Tf(t,e,n,i){if(wc){var r=gd(t,e,n,i);if(r===null)$u(t,e,i,Ec,n),jp(t,i);else if(AS(r,t,e,n,i))i.stopPropagation();else if(jp(t,i),e&4&&-1<TS.indexOf(t)){for(;r!==null;){var s=Xa(r);if(s!==null&&Uv(s),s=gd(t,e,n,i),s===null&&$u(t,e,i,Ec,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else $u(t,e,i,null,n)}}var Ec=null;function gd(t,e,n,i){if(Ec=null,t=Sf(i),t=Fr(t),t!==null)if(e=Kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=bv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ec=t,null}function Bv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gS()){case Mf:return 1;case Lv:return 4;case Sc:case vS:return 16;case Nv:return 536870912;default:return 16}default:return 16}}var Qi=null,Af=null,oc=null;function Hv(){if(oc)return oc;var t,e=Af,n=e.length,i,r="value"in Qi?Qi.value:Qi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return oc=r.slice(t,1<i?1-i:void 0)}function ac(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ll(){return!0}function qp(){return!1}function Nn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ll:qp,this.isPropagationStopped=qp,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),e}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bf=Nn(ho),ja=Et({},ho,{view:0,detail:0}),PS=Nn(ja),Fu,Ou,Co,tu=Et({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Co&&(Co&&t.type==="mousemove"?(Fu=t.screenX-Co.screenX,Ou=t.screenY-Co.screenY):Ou=Fu=0,Co=t),Fu)},movementY:function(t){return"movementY"in t?t.movementY:Ou}}),Yp=Nn(tu),LS=Et({},tu,{dataTransfer:0}),NS=Nn(LS),DS=Et({},ja,{relatedTarget:0}),ku=Nn(DS),IS=Et({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),US=Nn(IS),FS=Et({},ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),OS=Nn(FS),kS=Et({},ho,{data:0}),Zp=Nn(kS),zS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=HS[t])?!!e[t]:!1}function Cf(){return VS}var GS=Et({},ja,{key:function(t){if(t.key){var e=zS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ac(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?BS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cf,charCode:function(t){return t.type==="keypress"?ac(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ac(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),WS=Nn(GS),$S=Et({},tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kp=Nn($S),jS=Et({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cf}),XS=Nn(jS),qS=Et({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),YS=Nn(qS),ZS=Et({},tu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KS=Nn(ZS),JS=[9,13,27,32],Rf=Ni&&"CompositionEvent"in window,oa=null;Ni&&"documentMode"in document&&(oa=document.documentMode);var QS=Ni&&"TextEvent"in window&&!oa,Vv=Ni&&(!Rf||oa&&8<oa&&11>=oa),Jp=" ",Qp=!1;function Gv(t,e){switch(t){case"keyup":return JS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cs=!1;function eM(t,e){switch(t){case"compositionend":return Wv(e);case"keypress":return e.which!==32?null:(Qp=!0,Jp);case"textInput":return t=e.data,t===Jp&&Qp?null:t;default:return null}}function tM(t,e){if(Cs)return t==="compositionend"||!Rf&&Gv(t,e)?(t=Hv(),oc=Af=Qi=null,Cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vv&&e.locale!=="ko"?null:e.data;default:return null}}var nM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function em(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nM[t.type]:e==="textarea"}function $v(t,e,n,i){Mv(i),e=Tc(e,"onChange"),0<e.length&&(n=new bf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var aa=null,Aa=null;function iM(t){n_(t,0)}function nu(t){var e=Ls(t);if(mv(e))return t}function rM(t,e){if(t==="change")return e}var jv=!1;if(Ni){var zu;if(Ni){var Bu="oninput"in document;if(!Bu){var tm=document.createElement("div");tm.setAttribute("oninput","return;"),Bu=typeof tm.oninput=="function"}zu=Bu}else zu=!1;jv=zu&&(!document.documentMode||9<document.documentMode)}function nm(){aa&&(aa.detachEvent("onpropertychange",Xv),Aa=aa=null)}function Xv(t){if(t.propertyName==="value"&&nu(Aa)){var e=[];$v(e,Aa,t,Sf(t)),Av(iM,e)}}function sM(t,e,n){t==="focusin"?(nm(),aa=e,Aa=n,aa.attachEvent("onpropertychange",Xv)):t==="focusout"&&nm()}function oM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nu(Aa)}function aM(t,e){if(t==="click")return nu(e)}function lM(t,e){if(t==="input"||t==="change")return nu(e)}function cM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ii=typeof Object.is=="function"?Object.is:cM;function ba(t,e){if(ii(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Jh.call(e,r)||!ii(t[r],e[r]))return!1}return!0}function im(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rm(t,e){var n=im(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=im(n)}}function qv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yv(){for(var t=window,e=_c();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_c(t.document)}return e}function Pf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uM(t){var e=Yv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qv(n.ownerDocument.documentElement,n)){if(i!==null&&Pf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=rm(n,s);var o=rm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hM=Ni&&"documentMode"in document&&11>=document.documentMode,Rs=null,vd=null,la=null,_d=!1;function sm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_d||Rs==null||Rs!==_c(i)||(i=Rs,"selectionStart"in i&&Pf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),la&&ba(la,i)||(la=i,i=Tc(vd,"onSelect"),0<i.length&&(e=new bf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Rs)))}function cl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ps={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionend:cl("Transition","TransitionEnd")},Hu={},Zv={};Ni&&(Zv=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function iu(t){if(Hu[t])return Hu[t];if(!Ps[t])return t;var e=Ps[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Zv)return Hu[t]=e[n];return t}var Kv=iu("animationend"),Jv=iu("animationiteration"),Qv=iu("animationstart"),e_=iu("transitionend"),t_=new Map,om="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,e){t_.set(t,e),Zr(e,[t])}for(var Vu=0;Vu<om.length;Vu++){var Gu=om[Vu],dM=Gu.toLowerCase(),fM=Gu[0].toUpperCase()+Gu.slice(1);pr(dM,"on"+fM)}pr(Kv,"onAnimationEnd");pr(Jv,"onAnimationIteration");pr(Qv,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(e_,"onTransitionEnd");Js("onMouseEnter",["mouseout","mouseover"]);Js("onMouseLeave",["mouseout","mouseover"]);Js("onPointerEnter",["pointerout","pointerover"]);Js("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pM=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function am(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,dS(i,e,void 0,t),t.currentTarget=null}function n_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;am(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;am(r,a,c),s=l}}}if(yc)throw t=fd,yc=!1,fd=null,t}function dt(t,e){var n=e[wd];n===void 0&&(n=e[wd]=new Set);var i=t+"__bubble";n.has(i)||(i_(e,t,2,!1),n.add(i))}function Wu(t,e,n){var i=0;e&&(i|=4),i_(n,t,i,e)}var ul="_reactListening"+Math.random().toString(36).slice(2);function Ca(t){if(!t[ul]){t[ul]=!0,uv.forEach(function(n){n!=="selectionchange"&&(pM.has(n)||Wu(n,!1,t),Wu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ul]||(e[ul]=!0,Wu("selectionchange",!1,e))}}function i_(t,e,n,i){switch(Bv(e)){case 1:var r=CS;break;case 4:r=RS;break;default:r=Tf}n=r.bind(null,e,n,t),r=void 0,!dd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function $u(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Fr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Av(function(){var c=s,u=Sf(n),h=[];e:{var d=t_.get(t);if(d!==void 0){var p=bf,m=t;switch(t){case"keypress":if(ac(n)===0)break e;case"keydown":case"keyup":p=WS;break;case"focusin":m="focus",p=ku;break;case"focusout":m="blur",p=ku;break;case"beforeblur":case"afterblur":p=ku;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=NS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=XS;break;case Kv:case Jv:case Qv:p=US;break;case e_:p=YS;break;case"scroll":p=PS;break;case"wheel":p=KS;break;case"copy":case"cut":case"paste":p=OS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Kp}var v=(e&4)!==0,g=!v&&t==="scroll",f=v?d!==null?d+"Capture":null:d;v=[];for(var x=c,_;x!==null;){_=x;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,f!==null&&(y=Ma(x,f),y!=null&&v.push(Ra(x,y,_)))),g)break;x=x.return}0<v.length&&(d=new p(d,m,null,n,u),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==ud&&(m=n.relatedTarget||n.fromElement)&&(Fr(m)||m[Di]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?Fr(m):null,m!==null&&(g=Kr(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(v=Yp,y="onMouseLeave",f="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(v=Kp,y="onPointerLeave",f="onPointerEnter",x="pointer"),g=p==null?d:Ls(p),_=m==null?d:Ls(m),d=new v(y,x+"leave",p,n,u),d.target=g,d.relatedTarget=_,y=null,Fr(u)===c&&(v=new v(f,x+"enter",m,n,u),v.target=_,v.relatedTarget=g,y=v),g=y,p&&m)t:{for(v=p,f=m,x=0,_=v;_;_=ts(_))x++;for(_=0,y=f;y;y=ts(y))_++;for(;0<x-_;)v=ts(v),x--;for(;0<_-x;)f=ts(f),_--;for(;x--;){if(v===f||f!==null&&v===f.alternate)break t;v=ts(v),f=ts(f)}v=null}else v=null;p!==null&&lm(h,d,p,v,!1),m!==null&&g!==null&&lm(h,g,m,v,!0)}}e:{if(d=c?Ls(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=rM;else if(em(d))if(jv)C=lM;else{C=oM;var E=sM}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=aM);if(C&&(C=C(t,c))){$v(h,C,n,u);break e}E&&E(t,d,c),t==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&sd(d,"number",d.value)}switch(E=c?Ls(c):window,t){case"focusin":(em(E)||E.contentEditable==="true")&&(Rs=E,vd=c,la=null);break;case"focusout":la=vd=Rs=null;break;case"mousedown":_d=!0;break;case"contextmenu":case"mouseup":case"dragend":_d=!1,sm(h,n,u);break;case"selectionchange":if(hM)break;case"keydown":case"keyup":sm(h,n,u)}var A;if(Rf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Cs?Gv(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Vv&&n.locale!=="ko"&&(Cs||P!=="onCompositionStart"?P==="onCompositionEnd"&&Cs&&(A=Hv()):(Qi=u,Af="value"in Qi?Qi.value:Qi.textContent,Cs=!0)),E=Tc(c,P),0<E.length&&(P=new Zp(P,t,null,n,u),h.push({event:P,listeners:E}),A?P.data=A:(A=Wv(n),A!==null&&(P.data=A)))),(A=QS?eM(t,n):tM(t,n))&&(c=Tc(c,"onBeforeInput"),0<c.length&&(u=new Zp("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=A))}n_(h,e)})}function Ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ma(t,n),s!=null&&i.unshift(Ra(t,s,r)),s=Ma(t,e),s!=null&&i.push(Ra(t,s,r))),t=t.return}return i}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ma(n,s),l!=null&&o.unshift(Ra(n,l,a))):r||(l=Ma(n,s),l!=null&&o.push(Ra(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var mM=/\r\n?/g,gM=/\u0000|\uFFFD/g;function cm(t){return(typeof t=="string"?t:""+t).replace(mM,`
`).replace(gM,"")}function hl(t,e,n){if(e=cm(e),cm(t)!==e&&n)throw Error(ce(425))}function Ac(){}var xd=null,yd=null;function Sd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Md=typeof setTimeout=="function"?setTimeout:void 0,vM=typeof clearTimeout=="function"?clearTimeout:void 0,um=typeof Promise=="function"?Promise:void 0,_M=typeof queueMicrotask=="function"?queueMicrotask:typeof um<"u"?function(t){return um.resolve(null).then(t).catch(xM)}:Md;function xM(t){setTimeout(function(){throw t})}function ju(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ta(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ta(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fo=Math.random().toString(36).slice(2),ai="__reactFiber$"+fo,Pa="__reactProps$"+fo,Di="__reactContainer$"+fo,wd="__reactEvents$"+fo,yM="__reactListeners$"+fo,SM="__reactHandles$"+fo;function Fr(t){var e=t[ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Di]||n[ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hm(t);t!==null;){if(n=t[ai])return n;t=hm(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){return t=t[ai]||t[Di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function ru(t){return t[Pa]||null}var Ed=[],Ns=-1;function mr(t){return{current:t}}function mt(t){0>Ns||(t.current=Ed[Ns],Ed[Ns]=null,Ns--)}function ht(t,e){Ns++,Ed[Ns]=t.current,t.current=e}var dr={},rn=mr(dr),xn=mr(!1),Vr=dr;function Qs(t,e){var n=t.type.contextTypes;if(!n)return dr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function yn(t){return t=t.childContextTypes,t!=null}function bc(){mt(xn),mt(rn)}function dm(t,e,n){if(rn.current!==dr)throw Error(ce(168));ht(rn,e),ht(xn,n)}function r_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,sS(t)||"Unknown",r));return Et({},n,i)}function Cc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,Vr=rn.current,ht(rn,t),ht(xn,xn.current),!0}function fm(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=r_(t,e,Vr),i.__reactInternalMemoizedMergedChildContext=t,mt(xn),mt(rn),ht(rn,t)):mt(xn),ht(xn,n)}var wi=null,su=!1,Xu=!1;function s_(t){wi===null?wi=[t]:wi.push(t)}function MM(t){su=!0,s_(t)}function gr(){if(!Xu&&wi!==null){Xu=!0;var t=0,e=ot;try{var n=wi;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}wi=null,su=!1}catch(r){throw wi!==null&&(wi=wi.slice(t+1)),Pv(Mf,gr),r}finally{ot=e,Xu=!1}}return null}var Ds=[],Is=0,Rc=null,Pc=0,Fn=[],On=0,Gr=null,Ti=1,Ai="";function Pr(t,e){Ds[Is++]=Pc,Ds[Is++]=Rc,Rc=t,Pc=e}function o_(t,e,n){Fn[On++]=Ti,Fn[On++]=Ai,Fn[On++]=Gr,Gr=t;var i=Ti;t=Ai;var r=32-ei(i)-1;i&=~(1<<r),n+=1;var s=32-ei(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ti=1<<32-ei(e)+r|n<<r|i,Ai=s+t}else Ti=1<<s|n<<r|i,Ai=t}function Lf(t){t.return!==null&&(Pr(t,1),o_(t,1,0))}function Nf(t){for(;t===Rc;)Rc=Ds[--Is],Ds[Is]=null,Pc=Ds[--Is],Ds[Is]=null;for(;t===Gr;)Gr=Fn[--On],Fn[On]=null,Ai=Fn[--On],Fn[On]=null,Ti=Fn[--On],Fn[On]=null}var Cn=null,An=null,xt=!1,Kn=null;function a_(t,e){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,An=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:Ti,overflow:Ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Cn=t,An=null,!0):!1;default:return!1}}function Td(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ad(t){if(xt){var e=An;if(e){var n=e;if(!pm(t,e)){if(Td(t))throw Error(ce(418));e=rr(n.nextSibling);var i=Cn;e&&pm(t,e)?a_(i,n):(t.flags=t.flags&-4097|2,xt=!1,Cn=t)}}else{if(Td(t))throw Error(ce(418));t.flags=t.flags&-4097|2,xt=!1,Cn=t}}}function mm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function dl(t){if(t!==Cn)return!1;if(!xt)return mm(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sd(t.type,t.memoizedProps)),e&&(e=An)){if(Td(t))throw l_(),Error(ce(418));for(;e;)a_(t,e),e=rr(e.nextSibling)}if(mm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=Cn?rr(t.stateNode.nextSibling):null;return!0}function l_(){for(var t=An;t;)t=rr(t.nextSibling)}function eo(){An=Cn=null,xt=!1}function Df(t){Kn===null?Kn=[t]:Kn.push(t)}var wM=ki.ReactCurrentBatchConfig;function Ro(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function fl(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gm(t){var e=t._init;return e(t._payload)}function c_(t){function e(f,x){if(t){var _=f.deletions;_===null?(f.deletions=[x],f.flags|=16):_.push(x)}}function n(f,x){if(!t)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function i(f,x){for(f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function r(f,x){return f=lr(f,x),f.index=0,f.sibling=null,f}function s(f,x,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<x?(f.flags|=2,x):_):(f.flags|=2,x)):(f.flags|=1048576,x)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,x,_,y){return x===null||x.tag!==6?(x=eh(_,f.mode,y),x.return=f,x):(x=r(x,_),x.return=f,x)}function l(f,x,_,y){var C=_.type;return C===bs?u(f,x,_.props.children,y,_.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Yi&&gm(C)===x.type)?(y=r(x,_.props),y.ref=Ro(f,x,_),y.return=f,y):(y=pc(_.type,_.key,_.props,null,f.mode,y),y.ref=Ro(f,x,_),y.return=f,y)}function c(f,x,_,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==_.containerInfo||x.stateNode.implementation!==_.implementation?(x=th(_,f.mode,y),x.return=f,x):(x=r(x,_.children||[]),x.return=f,x)}function u(f,x,_,y,C){return x===null||x.tag!==7?(x=Br(_,f.mode,y,C),x.return=f,x):(x=r(x,_),x.return=f,x)}function h(f,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return x=eh(""+x,f.mode,_),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case nl:return _=pc(x.type,x.key,x.props,null,f.mode,_),_.ref=Ro(f,null,x),_.return=f,_;case As:return x=th(x,f.mode,_),x.return=f,x;case Yi:var y=x._init;return h(f,y(x._payload),_)}if(Qo(x)||Eo(x))return x=Br(x,f.mode,_,null),x.return=f,x;fl(f,x)}return null}function d(f,x,_,y){var C=x!==null?x.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:a(f,x,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case nl:return _.key===C?l(f,x,_,y):null;case As:return _.key===C?c(f,x,_,y):null;case Yi:return C=_._init,d(f,x,C(_._payload),y)}if(Qo(_)||Eo(_))return C!==null?null:u(f,x,_,y,null);fl(f,_)}return null}function p(f,x,_,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(_)||null,a(x,f,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case nl:return f=f.get(y.key===null?_:y.key)||null,l(x,f,y,C);case As:return f=f.get(y.key===null?_:y.key)||null,c(x,f,y,C);case Yi:var E=y._init;return p(f,x,_,E(y._payload),C)}if(Qo(y)||Eo(y))return f=f.get(_)||null,u(x,f,y,C,null);fl(x,y)}return null}function m(f,x,_,y){for(var C=null,E=null,A=x,P=x=0,w=null;A!==null&&P<_.length;P++){A.index>P?(w=A,A=null):w=A.sibling;var M=d(f,A,_[P],y);if(M===null){A===null&&(A=w);break}t&&A&&M.alternate===null&&e(f,A),x=s(M,x,P),E===null?C=M:E.sibling=M,E=M,A=w}if(P===_.length)return n(f,A),xt&&Pr(f,P),C;if(A===null){for(;P<_.length;P++)A=h(f,_[P],y),A!==null&&(x=s(A,x,P),E===null?C=A:E.sibling=A,E=A);return xt&&Pr(f,P),C}for(A=i(f,A);P<_.length;P++)w=p(A,f,P,_[P],y),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?P:w.key),x=s(w,x,P),E===null?C=w:E.sibling=w,E=w);return t&&A.forEach(function(U){return e(f,U)}),xt&&Pr(f,P),C}function v(f,x,_,y){var C=Eo(_);if(typeof C!="function")throw Error(ce(150));if(_=C.call(_),_==null)throw Error(ce(151));for(var E=C=null,A=x,P=x=0,w=null,M=_.next();A!==null&&!M.done;P++,M=_.next()){A.index>P?(w=A,A=null):w=A.sibling;var U=d(f,A,M.value,y);if(U===null){A===null&&(A=w);break}t&&A&&U.alternate===null&&e(f,A),x=s(U,x,P),E===null?C=U:E.sibling=U,E=U,A=w}if(M.done)return n(f,A),xt&&Pr(f,P),C;if(A===null){for(;!M.done;P++,M=_.next())M=h(f,M.value,y),M!==null&&(x=s(M,x,P),E===null?C=M:E.sibling=M,E=M);return xt&&Pr(f,P),C}for(A=i(f,A);!M.done;P++,M=_.next())M=p(A,f,P,M.value,y),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?P:M.key),x=s(M,x,P),E===null?C=M:E.sibling=M,E=M);return t&&A.forEach(function(B){return e(f,B)}),xt&&Pr(f,P),C}function g(f,x,_,y){if(typeof _=="object"&&_!==null&&_.type===bs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case nl:e:{for(var C=_.key,E=x;E!==null;){if(E.key===C){if(C=_.type,C===bs){if(E.tag===7){n(f,E.sibling),x=r(E,_.props.children),x.return=f,f=x;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Yi&&gm(C)===E.type){n(f,E.sibling),x=r(E,_.props),x.ref=Ro(f,E,_),x.return=f,f=x;break e}n(f,E);break}else e(f,E);E=E.sibling}_.type===bs?(x=Br(_.props.children,f.mode,y,_.key),x.return=f,f=x):(y=pc(_.type,_.key,_.props,null,f.mode,y),y.ref=Ro(f,x,_),y.return=f,f=y)}return o(f);case As:e:{for(E=_.key;x!==null;){if(x.key===E)if(x.tag===4&&x.stateNode.containerInfo===_.containerInfo&&x.stateNode.implementation===_.implementation){n(f,x.sibling),x=r(x,_.children||[]),x.return=f,f=x;break e}else{n(f,x);break}else e(f,x);x=x.sibling}x=th(_,f.mode,y),x.return=f,f=x}return o(f);case Yi:return E=_._init,g(f,x,E(_._payload),y)}if(Qo(_))return m(f,x,_,y);if(Eo(_))return v(f,x,_,y);fl(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,x!==null&&x.tag===6?(n(f,x.sibling),x=r(x,_),x.return=f,f=x):(n(f,x),x=eh(_,f.mode,y),x.return=f,f=x),o(f)):n(f,x)}return g}var to=c_(!0),u_=c_(!1),Lc=mr(null),Nc=null,Us=null,If=null;function Uf(){If=Us=Nc=null}function Ff(t){var e=Lc.current;mt(Lc),t._currentValue=e}function bd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ws(t,e){Nc=t,If=Us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function Gn(t){var e=t._currentValue;if(If!==t)if(t={context:t,memoizedValue:e,next:null},Us===null){if(Nc===null)throw Error(ce(308));Us=t,Nc.dependencies={lanes:0,firstContext:t}}else Us=Us.next=t;return e}var Or=null;function Of(t){Or===null?Or=[t]:Or.push(t)}function h_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Of(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ii(t,i)}function Ii(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zi=!1;function kf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function d_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ii(t,n)}return r=i.interleaved,r===null?(e.next=e,Of(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ii(t,n)}function lc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,wf(t,n)}}function vm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Dc(t,e,n,i){var r=t.updateQueue;Zi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,v=a;switch(d=e,p=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){h=m.call(p,h,d);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,d=typeof m=="function"?m.call(p,h,d):m,d==null)break e;h=Et({},h,d);break e;case 2:Zi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);$r|=o,t.lanes=o,t.memoizedState=h}}function _m(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var qa={},hi=mr(qa),La=mr(qa),Na=mr(qa);function kr(t){if(t===qa)throw Error(ce(174));return t}function zf(t,e){switch(ht(Na,e),ht(La,t),ht(hi,qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ad(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ad(e,t)}mt(hi),ht(hi,e)}function no(){mt(hi),mt(La),mt(Na)}function f_(t){kr(Na.current);var e=kr(hi.current),n=ad(e,t.type);e!==n&&(ht(La,t),ht(hi,n))}function Bf(t){La.current===t&&(mt(hi),mt(La))}var St=mr(0);function Ic(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qu=[];function Hf(){for(var t=0;t<qu.length;t++)qu[t]._workInProgressVersionPrimary=null;qu.length=0}var cc=ki.ReactCurrentDispatcher,Yu=ki.ReactCurrentBatchConfig,Wr=0,wt=null,Pt=null,Bt=null,Uc=!1,ca=!1,Da=0,EM=0;function Zt(){throw Error(ce(321))}function Vf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ii(t[n],e[n]))return!1;return!0}function Gf(t,e,n,i,r,s){if(Wr=s,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cc.current=t===null||t.memoizedState===null?CM:RM,t=n(i,r),ca){s=0;do{if(ca=!1,Da=0,25<=s)throw Error(ce(301));s+=1,Bt=Pt=null,e.updateQueue=null,cc.current=PM,t=n(i,r)}while(ca)}if(cc.current=Fc,e=Pt!==null&&Pt.next!==null,Wr=0,Bt=Pt=wt=null,Uc=!1,e)throw Error(ce(300));return t}function Wf(){var t=Da!==0;return Da=0,t}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?wt.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function Wn(){if(Pt===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=Bt===null?wt.memoizedState:Bt.next;if(e!==null)Bt=e,Pt=t;else{if(t===null)throw Error(ce(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Bt===null?wt.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function Ia(t,e){return typeof e=="function"?e(t):e}function Zu(t){var e=Wn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Pt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Wr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,wt.lanes|=u,$r|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ii(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,wt.lanes|=s,$r|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ku(t){var e=Wn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ii(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function p_(){}function m_(t,e){var n=wt,i=Wn(),r=e(),s=!ii(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,$f(__.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,Ua(9,v_.bind(null,n,i,r,e),void 0,null),Ht===null)throw Error(ce(349));Wr&30||g_(n,e,r)}return r}function g_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function v_(t,e,n,i){e.value=n,e.getSnapshot=i,x_(e)&&y_(t)}function __(t,e,n){return n(function(){x_(e)&&y_(t)})}function x_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ii(t,n)}catch{return!0}}function y_(t){var e=Ii(t,1);e!==null&&ti(e,t,1,-1)}function xm(t){var e=si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:t},e.queue=t,t=t.dispatch=bM.bind(null,wt,t),[e.memoizedState,t]}function Ua(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function S_(){return Wn().memoizedState}function uc(t,e,n,i){var r=si();wt.flags|=t,r.memoizedState=Ua(1|e,n,void 0,i===void 0?null:i)}function ou(t,e,n,i){var r=Wn();i=i===void 0?null:i;var s=void 0;if(Pt!==null){var o=Pt.memoizedState;if(s=o.destroy,i!==null&&Vf(i,o.deps)){r.memoizedState=Ua(e,n,s,i);return}}wt.flags|=t,r.memoizedState=Ua(1|e,n,s,i)}function ym(t,e){return uc(8390656,8,t,e)}function $f(t,e){return ou(2048,8,t,e)}function M_(t,e){return ou(4,2,t,e)}function w_(t,e){return ou(4,4,t,e)}function E_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function T_(t,e,n){return n=n!=null?n.concat([t]):null,ou(4,4,E_.bind(null,e,t),n)}function jf(){}function A_(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function b_(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function C_(t,e,n){return Wr&21?(ii(n,e)||(n=Dv(),wt.lanes|=n,$r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function TM(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=Yu.transition;Yu.transition={};try{t(!1),e()}finally{ot=n,Yu.transition=i}}function R_(){return Wn().memoizedState}function AM(t,e,n){var i=ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},P_(t))L_(e,n);else if(n=h_(t,e,n,i),n!==null){var r=cn();ti(n,t,i,r),N_(n,e,i)}}function bM(t,e,n){var i=ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(P_(t))L_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ii(a,o)){var l=e.interleaved;l===null?(r.next=r,Of(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=h_(t,e,r,i),n!==null&&(r=cn(),ti(n,t,i,r),N_(n,e,i))}}function P_(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function L_(t,e){ca=Uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function N_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,wf(t,n)}}var Fc={readContext:Gn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},CM={readContext:Gn,useCallback:function(t,e){return si().memoizedState=[t,e===void 0?null:e],t},useContext:Gn,useEffect:ym,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,uc(4194308,4,E_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return uc(4194308,4,t,e)},useInsertionEffect:function(t,e){return uc(4,2,t,e)},useMemo:function(t,e){var n=si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=AM.bind(null,wt,t),[i.memoizedState,t]},useRef:function(t){var e=si();return t={current:t},e.memoizedState=t},useState:xm,useDebugValue:jf,useDeferredValue:function(t){return si().memoizedState=t},useTransition:function(){var t=xm(!1),e=t[0];return t=TM.bind(null,t[1]),si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=wt,r=si();if(xt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Ht===null)throw Error(ce(349));Wr&30||g_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,ym(__.bind(null,i,s,t),[t]),i.flags|=2048,Ua(9,v_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=si(),e=Ht.identifierPrefix;if(xt){var n=Ai,i=Ti;n=(i&~(1<<32-ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Da++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=EM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},RM={readContext:Gn,useCallback:A_,useContext:Gn,useEffect:$f,useImperativeHandle:T_,useInsertionEffect:M_,useLayoutEffect:w_,useMemo:b_,useReducer:Zu,useRef:S_,useState:function(){return Zu(Ia)},useDebugValue:jf,useDeferredValue:function(t){var e=Wn();return C_(e,Pt.memoizedState,t)},useTransition:function(){var t=Zu(Ia)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:p_,useSyncExternalStore:m_,useId:R_,unstable_isNewReconciler:!1},PM={readContext:Gn,useCallback:A_,useContext:Gn,useEffect:$f,useImperativeHandle:T_,useInsertionEffect:M_,useLayoutEffect:w_,useMemo:b_,useReducer:Ku,useRef:S_,useState:function(){return Ku(Ia)},useDebugValue:jf,useDeferredValue:function(t){var e=Wn();return Pt===null?e.memoizedState=t:C_(e,Pt.memoizedState,t)},useTransition:function(){var t=Ku(Ia)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:p_,useSyncExternalStore:m_,useId:R_,unstable_isNewReconciler:!1};function Yn(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Cd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var au={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=ar(t),s=Pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&(ti(e,t,r,i),lc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=ar(t),s=Pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&(ti(e,t,r,i),lc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=ar(t),r=Pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=sr(t,r,i),e!==null&&(ti(e,t,i,n),lc(e,t,i))}};function Sm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ba(n,i)||!ba(r,s):!0}function D_(t,e,n){var i=!1,r=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Gn(s):(r=yn(e)?Vr:rn.current,i=e.contextTypes,s=(i=i!=null)?Qs(t,r):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=au,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&au.enqueueReplaceState(e,e.state,null)}function Rd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},kf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Gn(s):(s=yn(e)?Vr:rn.current,r.context=Qs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&au.enqueueReplaceState(r,r.state,null),Dc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function io(t,e){try{var n="",i=e;do n+=rS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ju(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Pd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var LM=typeof WeakMap=="function"?WeakMap:Map;function I_(t,e,n){n=Pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){kc||(kc=!0,Bd=i),Pd(t,e)},n}function U_(t,e,n){n=Pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Pd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pd(t,e),typeof i!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new LM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=$M.bind(null,t,e,n),e.then(t,t))}function Em(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pi(-1,1),e.tag=2,sr(n,e,1))),n.lanes|=1),t)}var NM=ki.ReactCurrentOwner,vn=!1;function ln(t,e,n,i){e.child=t===null?u_(e,null,n,i):to(e,t.child,n,i)}function Am(t,e,n,i,r){n=n.render;var s=e.ref;return Ws(e,r),i=Gf(t,e,n,i,s,r),n=Wf(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(xt&&n&&Lf(e),e.flags|=1,ln(t,e,i,r),e.child)}function bm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ep(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,F_(t,e,s,i,r)):(t=pc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ba,n(o,i)&&t.ref===e.ref)return Ui(t,e,r)}return e.flags|=1,t=lr(s,i),t.ref=e.ref,t.return=e,e.child=t}function F_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ba(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,Ui(t,e,r)}return Ld(t,e,n,i,r)}function O_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(Os,Tn),Tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(Os,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(Os,Tn),Tn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(Os,Tn),Tn|=i;return ln(t,e,r,n),e.child}function k_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ld(t,e,n,i,r){var s=yn(n)?Vr:rn.current;return s=Qs(e,s),Ws(e,r),n=Gf(t,e,n,i,s,r),i=Wf(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(xt&&i&&Lf(e),e.flags|=1,ln(t,e,n,r),e.child)}function Cm(t,e,n,i,r){if(yn(n)){var s=!0;Cc(e)}else s=!1;if(Ws(e,r),e.stateNode===null)hc(t,e),D_(e,n,i),Rd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Gn(c):(c=yn(n)?Vr:rn.current,c=Qs(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Mm(e,o,i,c),Zi=!1;var d=e.memoizedState;o.state=d,Dc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||xn.current||Zi?(typeof u=="function"&&(Cd(e,n,u,i),l=e.memoizedState),(a=Zi||Sm(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,d_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Yn(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=yn(n)?Vr:rn.current,l=Qs(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Mm(e,o,i,l),Zi=!1,d=e.memoizedState,o.state=d,Dc(e,i,o,r);var m=e.memoizedState;a!==h||d!==m||xn.current||Zi?(typeof p=="function"&&(Cd(e,n,p,i),m=e.memoizedState),(c=Zi||Sm(e,n,c,i,d,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Nd(t,e,n,i,s,r)}function Nd(t,e,n,i,r,s){k_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&fm(e,n,!1),Ui(t,e,s);i=e.stateNode,NM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=to(e,t.child,null,s),e.child=to(e,null,a,s)):ln(t,e,a,s),e.memoizedState=i.state,r&&fm(e,n,!0),e.child}function z_(t){var e=t.stateNode;e.pendingContext?dm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dm(t,e.context,!1),zf(t,e.containerInfo)}function Rm(t,e,n,i,r){return eo(),Df(r),e.flags|=256,ln(t,e,n,i),e.child}var Dd={dehydrated:null,treeContext:null,retryLane:0};function Id(t){return{baseLanes:t,cachePool:null,transitions:null}}function B_(t,e,n){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(St,r&1),t===null)return Ad(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=uu(o,i,0,null),t=Br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Id(n),e.memoizedState=Dd,t):Xf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return DM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=lr(a,s):(s=Br(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Id(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Dd,i}return s=t.child,t=s.sibling,i=lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Xf(t,e){return e=uu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pl(t,e,n,i){return i!==null&&Df(i),to(e,t.child,null,n),t=Xf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function DM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ju(Error(ce(422))),pl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=uu({mode:"visible",children:i.children},r,0,null),s=Br(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&to(e,t.child,null,o),e.child.memoizedState=Id(o),e.memoizedState=Dd,s);if(!(e.mode&1))return pl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ce(419)),i=Ju(s,i,void 0),pl(t,e,o,i)}if(a=(o&t.childLanes)!==0,vn||a){if(i=Ht,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ii(t,r),ti(i,t,r,-1))}return Qf(),i=Ju(Error(ce(421))),pl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=jM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,An=rr(r.nextSibling),Cn=e,xt=!0,Kn=null,t!==null&&(Fn[On++]=Ti,Fn[On++]=Ai,Fn[On++]=Gr,Ti=t.id,Ai=t.overflow,Gr=e),e=Xf(e,i.children),e.flags|=4096,e)}function Pm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),bd(t.return,e,n)}function Qu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function H_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pm(t,n,e);else if(t.tag===19)Pm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ic(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Qu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ic(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Qu(e,!0,n,null,s);break;case"together":Qu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ui(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function IM(t,e,n){switch(e.tag){case 3:z_(e),eo();break;case 5:f_(e);break;case 1:yn(e.type)&&Cc(e);break;case 4:zf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Lc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?B_(t,e,n):(ht(St,St.current&1),t=Ui(t,e,n),t!==null?t.sibling:null);ht(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return H_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,O_(t,e,n)}return Ui(t,e,n)}var V_,Ud,G_,W_;V_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ud=function(){};G_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,kr(hi.current);var s=null;switch(n){case"input":r=id(t,r),i=id(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=od(t,r),i=od(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ac)}ld(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ya.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ya.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&dt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};W_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Po(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function UM(t,e,n){var i=e.pendingProps;switch(Nf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return yn(e.type)&&bc(),Kt(e),null;case 3:return i=e.stateNode,no(),mt(xn),mt(rn),Hf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(dl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kn!==null&&(Gd(Kn),Kn=null))),Ud(t,e),Kt(e),null;case 5:Bf(e);var r=kr(Na.current);if(n=e.type,t!==null&&e.stateNode!=null)G_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return Kt(e),null}if(t=kr(hi.current),dl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ai]=e,i[Pa]=s,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<ta.length;r++)dt(ta[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":zp(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":Hp(i,s),dt("invalid",i)}ld(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&hl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&hl(i.textContent,a,t),r=["children",""+a]):ya.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&dt("scroll",i)}switch(n){case"input":il(i),Bp(i,s,!0);break;case"textarea":il(i),Vp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ac)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_v(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ai]=e,t[Pa]=i,V_(t,e,!1,!1),e.stateNode=t;e:{switch(o=cd(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ta.length;r++)dt(ta[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":zp(t,i),r=id(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),dt("invalid",t);break;case"textarea":Hp(t,i),r=od(t,i),dt("invalid",t);break;default:r=i}ld(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Sv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Sa(t,l):typeof l=="number"&&Sa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ya.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",t):l!=null&&vf(t,s,l,o))}switch(n){case"input":il(t),Bp(t,i,!1);break;case"textarea":il(t),Vp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+hr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Bs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Bs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ac)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(t&&e.stateNode!=null)W_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=kr(Na.current),kr(hi.current),dl(e)){if(i=e.stateNode,n=e.memoizedProps,i[ai]=e,(s=i.nodeValue!==n)&&(t=Cn,t!==null))switch(t.tag){case 3:hl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&hl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ai]=e,e.stateNode=i}return Kt(e),null;case 13:if(mt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&An!==null&&e.mode&1&&!(e.flags&128))l_(),eo(),e.flags|=98560,s=!1;else if(s=dl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[ai]=e}else eo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),s=!1}else Kn!==null&&(Gd(Kn),Kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Nt===0&&(Nt=3):Qf())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return no(),Ud(t,e),t===null&&Ca(e.stateNode.containerInfo),Kt(e),null;case 10:return Ff(e.type._context),Kt(e),null;case 17:return yn(e.type)&&bc(),Kt(e),null;case 19:if(mt(St),s=e.memoizedState,s===null)return Kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Po(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ic(t),o!==null){for(e.flags|=128,Po(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&bt()>ro&&(e.flags|=128,i=!0,Po(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ic(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xt)return Kt(e),null}else 2*bt()-s.renderingStartTime>ro&&n!==1073741824&&(e.flags|=128,i=!0,Po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=St.current,ht(St,i?n&1|2:n&1),e):(Kt(e),null);case 22:case 23:return Jf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function FM(t,e){switch(Nf(e),e.tag){case 1:return yn(e.type)&&bc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return no(),mt(xn),mt(rn),Hf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bf(e),null;case 13:if(mt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));eo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(St),null;case 4:return no(),null;case 10:return Ff(e.type._context),null;case 22:case 23:return Jf(),null;case 24:return null;default:return null}}var ml=!1,tn=!1,OM=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function Fd(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var Lm=!1;function kM(t,e){if(xd=wc,t=Yv(),Pf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(yd={focusedElem:t,selectionRange:n},wc=!1,Ae=e;Ae!==null;)if(e=Ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ae=t;else for(;Ae!==null;){e=Ae;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,g=m.memoizedState,f=e.stateNode,x=f.getSnapshotBeforeUpdate(e.elementType===e.type?v:Yn(e.type,v),g);f.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(y){Tt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}return m=Lm,Lm=!1,m}function ua(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Fd(e,n,s)}r=r.next}while(r!==i)}}function lu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Od(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $_(t){var e=t.alternate;e!==null&&(t.alternate=null,$_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ai],delete e[Pa],delete e[wd],delete e[yM],delete e[SM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function j_(t){return t.tag===5||t.tag===3||t.tag===4}function Nm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||j_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ac));else if(i!==4&&(t=t.child,t!==null))for(kd(t,e,n),t=t.sibling;t!==null;)kd(t,e,n),t=t.sibling}function zd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(zd(t,e,n),t=t.sibling;t!==null;)zd(t,e,n),t=t.sibling}var Gt=null,Zn=!1;function Bi(t,e,n){for(n=n.child;n!==null;)X_(t,e,n),n=n.sibling}function X_(t,e,n){if(ui&&typeof ui.onCommitFiberUnmount=="function")try{ui.onCommitFiberUnmount(eu,n)}catch{}switch(n.tag){case 5:tn||Fs(n,e);case 6:var i=Gt,r=Zn;Gt=null,Bi(t,e,n),Gt=i,Zn=r,Gt!==null&&(Zn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(Zn?(t=Gt,n=n.stateNode,t.nodeType===8?ju(t.parentNode,n):t.nodeType===1&&ju(t,n),Ta(t)):ju(Gt,n.stateNode));break;case 4:i=Gt,r=Zn,Gt=n.stateNode.containerInfo,Zn=!0,Bi(t,e,n),Gt=i,Zn=r;break;case 0:case 11:case 14:case 15:if(!tn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fd(n,e,o),r=r.next}while(r!==i)}Bi(t,e,n);break;case 1:if(!tn&&(Fs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}Bi(t,e,n);break;case 21:Bi(t,e,n);break;case 22:n.mode&1?(tn=(i=tn)||n.memoizedState!==null,Bi(t,e,n),tn=i):Bi(t,e,n);break;default:Bi(t,e,n)}}function Dm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new OM),e.forEach(function(i){var r=XM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,Zn=!1;break e;case 3:Gt=a.stateNode.containerInfo,Zn=!0;break e;case 4:Gt=a.stateNode.containerInfo,Zn=!0;break e}a=a.return}if(Gt===null)throw Error(ce(160));X_(s,o,r),Gt=null,Zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)q_(e,t),e=e.sibling}function q_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),ri(t),i&4){try{ua(3,t,t.return),lu(3,t)}catch(v){Tt(t,t.return,v)}try{ua(5,t,t.return)}catch(v){Tt(t,t.return,v)}}break;case 1:$n(e,t),ri(t),i&512&&n!==null&&Fs(n,n.return);break;case 5:if($n(e,t),ri(t),i&512&&n!==null&&Fs(n,n.return),t.flags&32){var r=t.stateNode;try{Sa(r,"")}catch(v){Tt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&gv(r,s),cd(a,o);var c=cd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?Sv(r,h):u==="dangerouslySetInnerHTML"?xv(r,h):u==="children"?Sa(r,h):vf(r,u,h,c)}switch(a){case"input":rd(r,s);break;case"textarea":vv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Bs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Bs(r,!!s.multiple,s.defaultValue,!0):Bs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Pa]=s}catch(v){Tt(t,t.return,v)}}break;case 6:if($n(e,t),ri(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){Tt(t,t.return,v)}}break;case 3:if($n(e,t),ri(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ta(e.containerInfo)}catch(v){Tt(t,t.return,v)}break;case 4:$n(e,t),ri(t);break;case 13:$n(e,t),ri(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Zf=bt())),i&4&&Dm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(tn=(c=tn)||u,$n(e,t),tn=c):$n(e,t),ri(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Ae=t,u=t.child;u!==null;){for(h=Ae=u;Ae!==null;){switch(d=Ae,p=d.child,d.tag){case 0:case 11:case 14:case 15:ua(4,d,d.return);break;case 1:Fs(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(v){Tt(i,n,v)}}break;case 5:Fs(d,d.return);break;case 22:if(d.memoizedState!==null){Um(h);continue}}p!==null?(p.return=d,Ae=p):Um(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=yv("display",o))}catch(v){Tt(t,t.return,v)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){Tt(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:$n(e,t),ri(t),i&4&&Dm(t);break;case 21:break;default:$n(e,t),ri(t)}}function ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(j_(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Sa(r,""),i.flags&=-33);var s=Nm(t);zd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Nm(t);kd(t,a,o);break;default:throw Error(ce(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zM(t,e,n){Ae=t,Y_(t)}function Y_(t,e,n){for(var i=(t.mode&1)!==0;Ae!==null;){var r=Ae,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ml;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||tn;a=ml;var c=tn;if(ml=o,(tn=l)&&!c)for(Ae=r;Ae!==null;)o=Ae,l=o.child,o.tag===22&&o.memoizedState!==null?Fm(r):l!==null?(l.return=o,Ae=l):Fm(r);for(;s!==null;)Ae=s,Y_(s),s=s.sibling;Ae=r,ml=a,tn=c}Im(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ae=s):Im(t)}}function Im(t){for(;Ae!==null;){var e=Ae;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||lu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!tn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Yn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_m(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_m(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Ta(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}tn||e.flags&512&&Od(e)}catch(d){Tt(e,e.return,d)}}if(e===t){Ae=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function Um(t){for(;Ae!==null;){var e=Ae;if(e===t){Ae=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function Fm(t){for(;Ae!==null;){var e=Ae;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{lu(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{Od(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{Od(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){Ae=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ae=a;break}Ae=e.return}}var BM=Math.ceil,Oc=ki.ReactCurrentDispatcher,qf=ki.ReactCurrentOwner,Vn=ki.ReactCurrentBatchConfig,tt=0,Ht=null,Rt=null,jt=0,Tn=0,Os=mr(0),Nt=0,Fa=null,$r=0,cu=0,Yf=0,ha=null,mn=null,Zf=0,ro=1/0,Mi=null,kc=!1,Bd=null,or=null,gl=!1,er=null,zc=0,da=0,Hd=null,dc=-1,fc=0;function cn(){return tt&6?bt():dc!==-1?dc:dc=bt()}function ar(t){return t.mode&1?tt&2&&jt!==0?jt&-jt:wM.transition!==null?(fc===0&&(fc=Dv()),fc):(t=ot,t!==0||(t=window.event,t=t===void 0?16:Bv(t.type)),t):1}function ti(t,e,n,i){if(50<da)throw da=0,Hd=null,Error(ce(185));$a(t,n,i),(!(tt&2)||t!==Ht)&&(t===Ht&&(!(tt&2)&&(cu|=n),Nt===4&&Ji(t,jt)),Sn(t,i),n===1&&tt===0&&!(e.mode&1)&&(ro=bt()+500,su&&gr()))}function Sn(t,e){var n=t.callbackNode;wS(t,e);var i=Mc(t,t===Ht?jt:0);if(i===0)n!==null&&$p(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&$p(n),e===1)t.tag===0?MM(Om.bind(null,t)):s_(Om.bind(null,t)),_M(function(){!(tt&6)&&gr()}),n=null;else{switch(Iv(i)){case 1:n=Mf;break;case 4:n=Lv;break;case 16:n=Sc;break;case 536870912:n=Nv;break;default:n=Sc}n=ix(n,Z_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Z_(t,e){if(dc=-1,fc=0,tt&6)throw Error(ce(327));var n=t.callbackNode;if($s()&&t.callbackNode!==n)return null;var i=Mc(t,t===Ht?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Bc(t,i);else{e=i;var r=tt;tt|=2;var s=J_();(Ht!==t||jt!==e)&&(Mi=null,ro=bt()+500,zr(t,e));do try{GM();break}catch(a){K_(t,a)}while(!0);Uf(),Oc.current=s,tt=r,Rt!==null?e=0:(Ht=null,jt=0,e=Nt)}if(e!==0){if(e===2&&(r=pd(t),r!==0&&(i=r,e=Vd(t,r))),e===1)throw n=Fa,zr(t,0),Ji(t,i),Sn(t,bt()),n;if(e===6)Ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!HM(r)&&(e=Bc(t,i),e===2&&(s=pd(t),s!==0&&(i=s,e=Vd(t,s))),e===1))throw n=Fa,zr(t,0),Ji(t,i),Sn(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:Lr(t,mn,Mi);break;case 3:if(Ji(t,i),(i&130023424)===i&&(e=Zf+500-bt(),10<e)){if(Mc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Md(Lr.bind(null,t,mn,Mi),e);break}Lr(t,mn,Mi);break;case 4:if(Ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ei(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*BM(i/1960))-i,10<i){t.timeoutHandle=Md(Lr.bind(null,t,mn,Mi),i);break}Lr(t,mn,Mi);break;case 5:Lr(t,mn,Mi);break;default:throw Error(ce(329))}}}return Sn(t,bt()),t.callbackNode===n?Z_.bind(null,t):null}function Vd(t,e){var n=ha;return t.current.memoizedState.isDehydrated&&(zr(t,e).flags|=256),t=Bc(t,e),t!==2&&(e=mn,mn=n,e!==null&&Gd(e)),t}function Gd(t){mn===null?mn=t:mn.push.apply(mn,t)}function HM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ii(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(t,e){for(e&=~Yf,e&=~cu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ei(e),i=1<<n;t[n]=-1,e&=~i}}function Om(t){if(tt&6)throw Error(ce(327));$s();var e=Mc(t,0);if(!(e&1))return Sn(t,bt()),null;var n=Bc(t,e);if(t.tag!==0&&n===2){var i=pd(t);i!==0&&(e=i,n=Vd(t,i))}if(n===1)throw n=Fa,zr(t,0),Ji(t,e),Sn(t,bt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t,mn,Mi),Sn(t,bt()),null}function Kf(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(ro=bt()+500,su&&gr())}}function jr(t){er!==null&&er.tag===0&&!(tt&6)&&$s();var e=tt;tt|=1;var n=Vn.transition,i=ot;try{if(Vn.transition=null,ot=1,t)return t()}finally{ot=i,Vn.transition=n,tt=e,!(tt&6)&&gr()}}function Jf(){Tn=Os.current,mt(Os)}function zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vM(n)),Rt!==null)for(n=Rt.return;n!==null;){var i=n;switch(Nf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&bc();break;case 3:no(),mt(xn),mt(rn),Hf();break;case 5:Bf(i);break;case 4:no();break;case 13:mt(St);break;case 19:mt(St);break;case 10:Ff(i.type._context);break;case 22:case 23:Jf()}n=n.return}if(Ht=t,Rt=t=lr(t.current,null),jt=Tn=e,Nt=0,Fa=null,Yf=cu=$r=0,mn=ha=null,Or!==null){for(e=0;e<Or.length;e++)if(n=Or[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Or=null}return t}function K_(t,e){do{var n=Rt;try{if(Uf(),cc.current=Fc,Uc){for(var i=wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Uc=!1}if(Wr=0,Bt=Pt=wt=null,ca=!1,Da=0,qf.current=null,n===null||n.return===null){Nt=1,Fa=e,Rt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Em(o);if(p!==null){p.flags&=-257,Tm(p,o,a,s,e),p.mode&1&&wm(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var v=new Set;v.add(l),e.updateQueue=v}else m.add(l);break e}else{if(!(e&1)){wm(s,c,e),Qf();break e}l=Error(ce(426))}}else if(xt&&a.mode&1){var g=Em(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Tm(g,o,a,s,e),Df(io(l,a));break e}}s=l=io(l,a),Nt!==4&&(Nt=2),ha===null?ha=[s]:ha.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=I_(s,l,e);vm(s,f);break e;case 1:a=l;var x=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(or===null||!or.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=U_(s,a,e);vm(s,y);break e}}s=s.return}while(s!==null)}ex(n)}catch(C){e=C,Rt===n&&n!==null&&(Rt=n=n.return);continue}break}while(!0)}function J_(){var t=Oc.current;return Oc.current=Fc,t===null?Fc:t}function Qf(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Ht===null||!($r&268435455)&&!(cu&268435455)||Ji(Ht,jt)}function Bc(t,e){var n=tt;tt|=2;var i=J_();(Ht!==t||jt!==e)&&(Mi=null,zr(t,e));do try{VM();break}catch(r){K_(t,r)}while(!0);if(Uf(),tt=n,Oc.current=i,Rt!==null)throw Error(ce(261));return Ht=null,jt=0,Nt}function VM(){for(;Rt!==null;)Q_(Rt)}function GM(){for(;Rt!==null&&!pS();)Q_(Rt)}function Q_(t){var e=nx(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?ex(t):Rt=e,qf.current=null}function ex(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=FM(n,e),n!==null){n.flags&=32767,Rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Rt=null;return}}else if(n=UM(n,e,Tn),n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);Nt===0&&(Nt=5)}function Lr(t,e,n){var i=ot,r=Vn.transition;try{Vn.transition=null,ot=1,WM(t,e,n,i)}finally{Vn.transition=r,ot=i}return null}function WM(t,e,n,i){do $s();while(er!==null);if(tt&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ES(t,s),t===Ht&&(Rt=Ht=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gl||(gl=!0,ix(Sc,function(){return $s(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Vn.transition,Vn.transition=null;var o=ot;ot=1;var a=tt;tt|=4,qf.current=null,kM(t,n),q_(n,t),uM(yd),wc=!!xd,yd=xd=null,t.current=n,zM(n),mS(),tt=a,ot=o,Vn.transition=s}else t.current=n;if(gl&&(gl=!1,er=t,zc=r),s=t.pendingLanes,s===0&&(or=null),_S(n.stateNode),Sn(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(kc)throw kc=!1,t=Bd,Bd=null,t;return zc&1&&t.tag!==0&&$s(),s=t.pendingLanes,s&1?t===Hd?da++:(da=0,Hd=t):da=0,gr(),null}function $s(){if(er!==null){var t=Iv(zc),e=Vn.transition,n=ot;try{if(Vn.transition=null,ot=16>t?16:t,er===null)var i=!1;else{if(t=er,er=null,zc=0,tt&6)throw Error(ce(331));var r=tt;for(tt|=4,Ae=t.current;Ae!==null;){var s=Ae,o=s.child;if(Ae.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ae=c;Ae!==null;){var u=Ae;switch(u.tag){case 0:case 11:case 15:ua(8,u,s)}var h=u.child;if(h!==null)h.return=u,Ae=h;else for(;Ae!==null;){u=Ae;var d=u.sibling,p=u.return;if($_(u),u===c){Ae=null;break}if(d!==null){d.return=p,Ae=d;break}Ae=p}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var g=v.sibling;v.sibling=null,v=g}while(v!==null)}}Ae=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ae=o;else e:for(;Ae!==null;){if(s=Ae,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ua(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Ae=f;break e}Ae=s.return}}var x=t.current;for(Ae=x;Ae!==null;){o=Ae;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Ae=_;else e:for(o=x;Ae!==null;){if(a=Ae,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:lu(9,a)}}catch(C){Tt(a,a.return,C)}if(a===o){Ae=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ae=y;break e}Ae=a.return}}if(tt=r,gr(),ui&&typeof ui.onPostCommitFiberRoot=="function")try{ui.onPostCommitFiberRoot(eu,t)}catch{}i=!0}return i}finally{ot=n,Vn.transition=e}}return!1}function km(t,e,n){e=io(n,e),e=I_(t,e,1),t=sr(t,e,1),e=cn(),t!==null&&($a(t,1,e),Sn(t,e))}function Tt(t,e,n){if(t.tag===3)km(t,t,n);else for(;e!==null;){if(e.tag===3){km(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(or===null||!or.has(i))){t=io(n,t),t=U_(e,t,1),e=sr(e,t,1),t=cn(),e!==null&&($a(e,1,t),Sn(e,t));break}}e=e.return}}function $M(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,Ht===t&&(jt&n)===n&&(Nt===4||Nt===3&&(jt&130023424)===jt&&500>bt()-Zf?zr(t,0):Yf|=n),Sn(t,e)}function tx(t,e){e===0&&(t.mode&1?(e=ol,ol<<=1,!(ol&130023424)&&(ol=4194304)):e=1);var n=cn();t=Ii(t,e),t!==null&&($a(t,e,n),Sn(t,n))}function jM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tx(t,n)}function XM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),tx(t,n)}var nx;nx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xn.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,IM(t,e,n);vn=!!(t.flags&131072)}else vn=!1,xt&&e.flags&1048576&&o_(e,Pc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;hc(t,e),t=e.pendingProps;var r=Qs(e,rn.current);Ws(e,n),r=Gf(null,e,i,t,r,n);var s=Wf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(s=!0,Cc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,kf(e),r.updater=au,e.stateNode=r,r._reactInternals=e,Rd(e,i,t,n),e=Nd(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&Lf(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(hc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=YM(i),t=Yn(i,t),r){case 0:e=Ld(null,e,i,t,n);break e;case 1:e=Cm(null,e,i,t,n);break e;case 11:e=Am(null,e,i,t,n);break e;case 14:e=bm(null,e,i,Yn(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Ld(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Cm(t,e,i,r,n);case 3:e:{if(z_(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,d_(t,e),Dc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=io(Error(ce(423)),e),e=Rm(t,e,i,n,r);break e}else if(i!==r){r=io(Error(ce(424)),e),e=Rm(t,e,i,n,r);break e}else for(An=rr(e.stateNode.containerInfo.firstChild),Cn=e,xt=!0,Kn=null,n=u_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(eo(),i===r){e=Ui(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return f_(e),t===null&&Ad(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Sd(i,r)?o=null:s!==null&&Sd(i,s)&&(e.flags|=32),k_(t,e),ln(t,e,o,n),e.child;case 6:return t===null&&Ad(e),null;case 13:return B_(t,e,n);case 4:return zf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=to(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Am(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(Lc,i._currentValue),i._currentValue=o,s!==null)if(ii(s.value,o)){if(s.children===r.children&&!xn.current){e=Ui(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Pi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),bd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ce(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ws(e,n),r=Gn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),bm(t,e,i,r,n);case 15:return F_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),hc(t,e),e.tag=1,yn(i)?(t=!0,Cc(e)):t=!1,Ws(e,n),D_(e,i,r),Rd(e,i,r,n),Nd(null,e,i,!0,t,n);case 19:return H_(t,e,n);case 22:return O_(t,e,n)}throw Error(ce(156,e.tag))};function ix(t,e){return Pv(t,e)}function qM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,i){return new qM(t,e,n,i)}function ep(t){return t=t.prototype,!(!t||!t.isReactComponent)}function YM(t){if(typeof t=="function")return ep(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xf)return 11;if(t===yf)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function pc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")ep(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case bs:return Br(n.children,r,s,e);case _f:o=8,r|=8;break;case Qh:return t=Hn(12,n,e,r|2),t.elementType=Qh,t.lanes=s,t;case ed:return t=Hn(13,n,e,r),t.elementType=ed,t.lanes=s,t;case td:return t=Hn(19,n,e,r),t.elementType=td,t.lanes=s,t;case fv:return uu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case hv:o=10;break e;case dv:o=9;break e;case xf:o=11;break e;case yf:o=14;break e;case Yi:o=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Hn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Br(t,e,n,i){return t=Hn(7,t,i,e),t.lanes=n,t}function uu(t,e,n,i){return t=Hn(22,t,i,e),t.elementType=fv,t.lanes=n,t.stateNode={isHidden:!1},t}function eh(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function th(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uu(0),this.expirationTimes=Uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function tp(t,e,n,i,r,s,o,a,l){return t=new ZM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kf(s),t}function KM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:As,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function rx(t){if(!t)return dr;t=t._reactInternals;e:{if(Kr(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(yn(n))return r_(t,n,e)}return e}function sx(t,e,n,i,r,s,o,a,l){return t=tp(n,i,!0,t,r,s,o,a,l),t.context=rx(null),n=t.current,i=cn(),r=ar(n),s=Pi(i,r),s.callback=e??null,sr(n,s,r),t.current.lanes=r,$a(t,r,i),Sn(t,i),t}function hu(t,e,n,i){var r=e.current,s=cn(),o=ar(r);return n=rx(n),e.context===null?e.context=n:e.pendingContext=n,e=Pi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=sr(r,e,o),t!==null&&(ti(t,r,o,s),lc(t,r,o)),o}function Hc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function np(t,e){zm(t,e),(t=t.alternate)&&zm(t,e)}function JM(){return null}var ox=typeof reportError=="function"?reportError:function(t){console.error(t)};function ip(t){this._internalRoot=t}du.prototype.render=ip.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));hu(t,e,null,null)};du.prototype.unmount=ip.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jr(function(){hu(null,t,null,null)}),e[Di]=null}};function du(t){this._internalRoot=t}du.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ov();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ki.length&&e!==0&&e<Ki[n].priority;n++);Ki.splice(n,0,t),n===0&&zv(t)}};function rp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bm(){}function QM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Hc(o);s.call(c)}}var o=sx(e,i,t,0,null,!1,!1,"",Bm);return t._reactRootContainer=o,t[Di]=o.current,Ca(t.nodeType===8?t.parentNode:t),jr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Hc(l);a.call(c)}}var l=tp(t,0,!1,null,null,!1,!1,"",Bm);return t._reactRootContainer=l,t[Di]=l.current,Ca(t.nodeType===8?t.parentNode:t),jr(function(){hu(e,l,n,i)}),l}function pu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Hc(o);a.call(l)}}hu(e,o,t,r)}else o=QM(n,e,t,r,i);return Hc(o)}Uv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ea(e.pendingLanes);n!==0&&(wf(e,n|1),Sn(e,bt()),!(tt&6)&&(ro=bt()+500,gr()))}break;case 13:jr(function(){var i=Ii(t,1);if(i!==null){var r=cn();ti(i,t,1,r)}}),np(t,1)}};Ef=function(t){if(t.tag===13){var e=Ii(t,134217728);if(e!==null){var n=cn();ti(e,t,134217728,n)}np(t,134217728)}};Fv=function(t){if(t.tag===13){var e=ar(t),n=Ii(t,e);if(n!==null){var i=cn();ti(n,t,e,i)}np(t,e)}};Ov=function(){return ot};kv=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};hd=function(t,e,n){switch(e){case"input":if(rd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ru(i);if(!r)throw Error(ce(90));mv(i),rd(i,r)}}}break;case"textarea":vv(t,n);break;case"select":e=n.value,e!=null&&Bs(t,!!n.multiple,e,!1)}};Ev=Kf;Tv=jr;var e1={usingClientEntryPoint:!1,Events:[Xa,Ls,ru,Mv,wv,Kf]},Lo={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t1={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Cv(t),t===null?null:t.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||JM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{eu=vl.inject(t1),ui=vl}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e1;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rp(e))throw Error(ce(200));return KM(t,e,null,n)};Ln.createRoot=function(t,e){if(!rp(t))throw Error(ce(299));var n=!1,i="",r=ox;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=tp(t,1,!1,null,null,n,!1,i,r),t[Di]=e.current,Ca(t.nodeType===8?t.parentNode:t),new ip(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=Cv(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return jr(t)};Ln.hydrate=function(t,e,n){if(!fu(e))throw Error(ce(200));return pu(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!rp(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=ox;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=sx(e,null,t,1,n??null,r,!1,s,o),t[Di]=e.current,Ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new du(e)};Ln.render=function(t,e,n){if(!fu(e))throw Error(ce(200));return pu(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!fu(t))throw Error(ce(40));return t._reactRootContainer?(jr(function(){pu(null,null,t,!1,function(){t._reactRootContainer=null,t[Di]=null})}),!0):!1};Ln.unstable_batchedUpdates=Kf;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!fu(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return pu(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function ax(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ax)}catch(t){console.error(t)}}ax(),av.exports=Ln;var n1=av.exports,lx,Hm=n1;lx=Hm.createRoot,Hm.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sp="164",i1=0,Vm=1,r1=2,cx=1,ux=2,Si=3,Pn=0,un=1,$t=2,cr=0,js=1,Gm=2,Wm=3,$m=4,s1=5,Ir=100,o1=101,a1=102,l1=103,c1=104,u1=200,h1=201,d1=202,f1=203,Wd=204,$d=205,p1=206,m1=207,g1=208,v1=209,_1=210,x1=211,y1=212,S1=213,M1=214,w1=0,E1=1,T1=2,Vc=3,A1=4,b1=5,C1=6,R1=7,hx=0,P1=1,L1=2,ur=0,N1=1,D1=2,I1=3,dx=4,U1=5,F1=6,O1=7,fx=300,so=301,oo=302,jd=303,Xd=304,mu=306,Fi=1e3,li=1001,qd=1002,_n=1003,k1=1004,_l=1005,nn=1006,nh=1007,bi=1008,fr=1009,z1=1010,B1=1011,px=1012,mx=1013,ao=1014,Ci=1015,gu=1016,gx=1017,vx=1018,Ya=1020,H1=35902,V1=1021,G1=1022,ci=1023,W1=1024,$1=1025,Xs=1026,Oa=1027,_x=1028,xx=1029,j1=1030,yx=1031,Sx=1033,ih=33776,rh=33777,sh=33778,oh=33779,jm=35840,Xm=35841,qm=35842,Ym=35843,Zm=36196,Km=37492,Jm=37496,Qm=37808,eg=37809,tg=37810,ng=37811,ig=37812,rg=37813,sg=37814,og=37815,ag=37816,lg=37817,cg=37818,ug=37819,hg=37820,dg=37821,ah=36492,fg=36494,pg=36495,X1=36283,mg=36284,gg=36285,vg=36286,q1=3200,Y1=3201,Mx=0,Z1=1,Jn="",pn="srgb",vr="srgb-linear",op="display-p3",vu="display-p3-linear",Gc="linear",ft="srgb",Wc="rec709",$c="p3",ns=7680,_g=519,K1=512,J1=513,Q1=514,wx=515,ew=516,tw=517,nw=518,iw=519,xg=35044,yg="300 es",Ri=2e3,jc=2001;class po{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sg=1234567;const qs=Math.PI/180,ka=180/Math.PI;function Jr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function Lt(t,e,n){return Math.max(e,Math.min(n,t))}function ap(t,e){return(t%e+e)%e}function rw(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function sw(t,e,n){return t!==e?(n-t)/(e-t):0}function fa(t,e,n){return(1-n)*t+n*e}function ow(t,e,n,i){return fa(t,e,1-Math.exp(-n*i))}function aw(t,e=1){return e-Math.abs(ap(t,e*2)-e)}function lw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function cw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function uw(t,e){return t+Math.floor(Math.random()*(e-t+1))}function hw(t,e){return t+Math.random()*(e-t)}function dw(t){return t*(.5-Math.random())}function fw(t){t!==void 0&&(Sg=t);let e=Sg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pw(t){return t*qs}function mw(t){return t*ka}function gw(t){return(t&t-1)===0&&t!==0}function vw(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function _w(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function xw(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*h,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*m,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*m,a*c);break;case"ZYZ":t.set(l*m,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Es(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Ts={DEG2RAD:qs,RAD2DEG:ka,generateUUID:Jr,clamp:Lt,euclideanModulo:ap,mapLinear:rw,inverseLerp:sw,lerp:fa,damp:ow,pingpong:aw,smoothstep:lw,smootherstep:cw,randInt:uw,randFloat:hw,randFloatSpread:dw,seededRandom:fw,degToRad:pw,radToDeg:mw,isPowerOfTwo:gw,ceilPowerOfTwo:vw,floorPowerOfTwo:_w,setQuaternionFromProperEuler:xw,normalize:on,denormalize:Es};class he{constructor(e=0,n=0){he.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,n,i,r,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],m=i[8],v=r[0],g=r[3],f=r[6],x=r[1],_=r[4],y=r[7],C=r[2],E=r[5],A=r[8];return s[0]=o*v+a*x+l*C,s[3]=o*g+a*_+l*E,s[6]=o*f+a*y+l*A,s[1]=c*v+u*x+h*C,s[4]=c*g+u*_+h*E,s[7]=c*f+u*y+h*A,s[2]=d*v+p*x+m*C,s[5]=d*g+p*_+m*E,s[8]=d*f+p*y+m*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,m=n*h+i*d+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(lh.makeScale(e,n)),this}rotate(e){return this.premultiply(lh.makeRotation(-e)),this}translate(e,n){return this.premultiply(lh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lh=new Ze;function Ex(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function za(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function yw(){const t=za("canvas");return t.style.display="block",t}const Mg={};function Sw(t){t in Mg||(Mg[t]=!0,console.warn(t))}const wg=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Eg=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xl={[vr]:{transfer:Gc,primaries:Wc,toReference:t=>t,fromReference:t=>t},[pn]:{transfer:ft,primaries:Wc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[vu]:{transfer:Gc,primaries:$c,toReference:t=>t.applyMatrix3(Eg),fromReference:t=>t.applyMatrix3(wg)},[op]:{transfer:ft,primaries:$c,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Eg),fromReference:t=>t.applyMatrix3(wg).convertLinearToSRGB()}},Mw=new Set([vr,vu]),at={enabled:!0,_workingColorSpace:vr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Mw.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=xl[e].toReference,r=xl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return xl[t].primaries},getTransfer:function(t){return t===Jn?Gc:xl[t].transfer}};function Ys(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ch(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let is;class ww{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{is===void 0&&(is=za("canvas")),is.width=e.width,is.height=e.height;const i=is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=is}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=za("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ys(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ys(n[i]/255)*255):n[i]=Ys(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ew=0;class Tx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ew++}),this.uuid=Jr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(uh(r[o].image)):s.push(uh(r[o]))}else s=uh(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function uh(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ww.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tw=0;class Xt extends po{constructor(e=Xt.DEFAULT_IMAGE,n=Xt.DEFAULT_MAPPING,i=li,r=li,s=nn,o=bi,a=ci,l=fr,c=Xt.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tw++}),this.uuid=Jr(),this.name="",this.source=new Tx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fi:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case qd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fi:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case qd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=fx;Xt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,n=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],m=l[9],v=l[2],g=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(p+1)/2,C=(f+1)/2,E=(u+d)/4,A=(h+v)/4,P=(m+g)/4;return _>y&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=E/i,s=A/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=E/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=P/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-m)*(g-m)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-v)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Aw extends po{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Xt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Tx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends Aw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ax extends Xt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bw extends Xt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Za{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],m=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=m,e[n+3]=v;return}if(h!==v||l!==d||c!==p||u!==m){let g=1-a;const f=l*d+c*p+u*m+h*v,x=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const C=Math.sqrt(_),E=Math.atan2(C,f*x);g=Math.sin(g*E)/C,a=Math.sin(a*E)/C}const y=a*x;if(l=l*g+d*y,c=c*g+p*y,u=u*g+m*y,h=h*g+v*y,g===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],m=s[o+3];return e[n]=a*m+u*h+l*p-c*d,e[n+1]=l*m+u*d+c*h-a*p,e[n+2]=c*m+u*p+a*d-l*h,e[n+3]=u*m-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h-d*p*m;break;case"YXZ":this._x=d*u*h+c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h+d*p*m;break;case"ZXY":this._x=d*u*h-c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h-d*p*m;break;case"ZYX":this._x=d*u*h-c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h+d*p*m;break;case"YZX":this._x=d*u*h+c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h-d*p*m;break;case"XZY":this._x=d*u*h-c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hh.copy(this).projectOnVector(e),this.sub(hh)}reflect(e){return this.sub(hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hh=new I,Tg=new Za;class _r{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yl.copy(i.boundingBox)),yl.applyMatrix4(e.matrixWorld),this.union(yl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),Sl.subVectors(this.max,No),rs.subVectors(e.a,No),ss.subVectors(e.b,No),os.subVectors(e.c,No),Hi.subVectors(ss,rs),Vi.subVectors(os,ss),wr.subVectors(rs,os);let n=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-wr.z,wr.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,wr.z,0,-wr.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-wr.y,wr.x,0];return!dh(n,rs,ss,os,Sl)||(n=[1,0,0,0,1,0,0,0,1],!dh(n,rs,ss,os,Sl))?!1:(Ml.crossVectors(Hi,Vi),n=[Ml.x,Ml.y,Ml.z],dh(n,rs,ss,os,Sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new I,new I,new I,new I,new I,new I,new I,new I],jn=new I,yl=new _r,rs=new I,ss=new I,os=new I,Hi=new I,Vi=new I,wr=new I,No=new I,Sl=new I,Ml=new I,Er=new I;function dh(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Er.fromArray(t,s);const a=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),l=e.dot(Er),c=n.dot(Er),u=i.dot(Er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Cw=new _r,Do=new I,fh=new I;class mo{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Cw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const n=Do.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Do,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(fh)),this.expandByPoint(Do.copy(e.center).sub(fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new I,ph=new I,wl=new I,Gi=new I,mh=new I,El=new I,gh=new I;class bx{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,n),gi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ph.copy(e).add(n).multiplyScalar(.5),wl.copy(n).sub(e).normalize(),Gi.copy(this.origin).sub(ph);const s=e.distanceTo(n)*.5,o=-this.direction.dot(wl),a=Gi.dot(this.direction),l=-Gi.dot(wl),c=Gi.lengthSq(),u=Math.abs(1-o*o);let h,d,p,m;if(u>0)if(h=o*l-a,d=o*a-l,m=s*u,h>=0)if(d>=-m)if(d<=m){const v=1/u;h*=v,d*=v,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ph).addScaledVector(wl,d),p}intersectSphere(e,n){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,n,i,r,s){mh.subVectors(n,e),El.subVectors(i,e),gh.crossVectors(mh,El);let o=this.direction.dot(gh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);const l=a*this.direction.dot(El.crossVectors(Gi,El));if(l<0)return null;const c=a*this.direction.dot(mh.cross(Gi));if(c<0||l+c>o)return null;const u=-a*Gi.dot(gh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,n,i,r,s,o,a,l,c,u,h,d,p,m,v,g){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,d,p,m,v,g)}set(e,n,i,r,s,o,a,l,c,u,h,d,p,m,v,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=m,f[11]=v,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/as.setFromMatrixColumn(e,0).length(),s=1/as.setFromMatrixColumn(e,1).length(),o=1/as.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,m=a*u,v=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+m*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=m+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,m=c*u,v=c*h;n[0]=d+v*a,n[4]=m*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-m,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,m=c*u,v=c*h;n[0]=d-v*a,n[4]=-o*h,n[8]=m+p*a,n[1]=p+m*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,m=a*u,v=a*h;n[0]=l*u,n[4]=m*c-p,n[8]=d*c+v,n[1]=l*h,n[5]=v*c+d,n[9]=p*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,m=a*l,v=a*c;n[0]=l*u,n[4]=v-d*h,n[8]=m*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+m,n[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,p=o*c,m=a*l,v=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+v,n[5]=o*u,n[9]=p*h-m,n[2]=m*h-p,n[6]=a*u,n[10]=v*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rw,e,Pw)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Wi.crossVectors(i,Mn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Wi.crossVectors(i,Mn)),Wi.normalize(),Tl.crossVectors(Mn,Wi),r[0]=Wi.x,r[4]=Tl.x,r[8]=Mn.x,r[1]=Wi.y,r[5]=Tl.y,r[9]=Mn.y,r[2]=Wi.z,r[6]=Tl.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],m=i[2],v=i[6],g=i[10],f=i[14],x=i[3],_=i[7],y=i[11],C=i[15],E=r[0],A=r[4],P=r[8],w=r[12],M=r[1],U=r[5],B=r[9],D=r[13],z=r[2],j=r[6],Z=r[10],Q=r[14],N=r[3],H=r[7],q=r[11],te=r[15];return s[0]=o*E+a*M+l*z+c*N,s[4]=o*A+a*U+l*j+c*H,s[8]=o*P+a*B+l*Z+c*q,s[12]=o*w+a*D+l*Q+c*te,s[1]=u*E+h*M+d*z+p*N,s[5]=u*A+h*U+d*j+p*H,s[9]=u*P+h*B+d*Z+p*q,s[13]=u*w+h*D+d*Q+p*te,s[2]=m*E+v*M+g*z+f*N,s[6]=m*A+v*U+g*j+f*H,s[10]=m*P+v*B+g*Z+f*q,s[14]=m*w+v*D+g*Q+f*te,s[3]=x*E+_*M+y*z+C*N,s[7]=x*A+_*U+y*j+C*H,s[11]=x*P+_*B+y*Z+C*q,s[15]=x*w+_*D+y*Q+C*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],m=e[3],v=e[7],g=e[11],f=e[15];return m*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*p-i*l*p)+v*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+g*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-n*l*h+n*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],m=e[12],v=e[13],g=e[14],f=e[15],x=h*g*c-v*d*c+v*l*p-a*g*p-h*l*f+a*d*f,_=m*d*c-u*g*c-m*l*p+o*g*p+u*l*f-o*d*f,y=u*v*c-m*h*c+m*a*p-o*v*p-u*a*f+o*h*f,C=m*h*l-u*v*l-m*a*d+o*v*d+u*a*g-o*h*g,E=n*x+i*_+r*y+s*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(v*d*s-h*g*s-v*r*p+i*g*p+h*r*f-i*d*f)*A,e[2]=(a*g*s-v*l*s+v*r*c-i*g*c-a*r*f+i*l*f)*A,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*p-i*l*p)*A,e[4]=_*A,e[5]=(u*g*s-m*d*s+m*r*p-n*g*p-u*r*f+n*d*f)*A,e[6]=(m*l*s-o*g*s-m*r*c+n*g*c+o*r*f-n*l*f)*A,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*A,e[8]=y*A,e[9]=(m*h*s-u*v*s-m*i*p+n*v*p+u*i*f-n*h*f)*A,e[10]=(o*v*s-m*a*s+m*i*c-n*v*c-o*i*f+n*a*f)*A,e[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*p-n*a*p)*A,e[12]=C*A,e[13]=(u*v*r-m*h*r+m*i*d-n*v*d-u*i*g+n*h*g)*A,e[14]=(m*a*r-o*v*r-m*i*l+n*v*l+o*i*g-n*a*g)*A,e[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,m=s*h,v=o*u,g=o*h,f=a*h,x=l*c,_=l*u,y=l*h,C=i.x,E=i.y,A=i.z;return r[0]=(1-(v+f))*C,r[1]=(p+y)*C,r[2]=(m-_)*C,r[3]=0,r[4]=(p-y)*E,r[5]=(1-(d+f))*E,r[6]=(g+x)*E,r[7]=0,r[8]=(m+_)*A,r[9]=(g-x)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=as.set(r[0],r[1],r[2]).length();const o=as.set(r[4],r[5],r[6]).length(),a=as.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xn.copy(this);const c=1/s,u=1/o,h=1/a;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=h,Xn.elements[9]*=h,Xn.elements[10]*=h,n.setFromRotationMatrix(Xn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ri){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,m;if(a===Ri)p=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===jc)p=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ri){const l=this.elements,c=1/(n-e),u=1/(i-r),h=1/(o-s),d=(n+e)*c,p=(i+r)*u;let m,v;if(a===Ri)m=(o+s)*h,v=-2*h;else if(a===jc)m=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const as=new I,Xn=new lt,Rw=new I(0,0,0),Pw=new I(1,1,1),Wi=new I,Tl=new I,Mn=new I,Ag=new lt,bg=new Za;class di{constructor(e=0,n=0,i=0,r=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ag.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ag,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return bg.setFromEuler(this),this.setFromQuaternion(bg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class Cx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lw=0;const Cg=new I,ls=new Za,vi=new lt,Al=new I,Io=new I,Nw=new I,Dw=new Za,Rg=new I(1,0,0),Pg=new I(0,1,0),Lg=new I(0,0,1),Ng={type:"added"},Iw={type:"removed"},cs={type:"childadded",child:null},vh={type:"childremoved",child:null};class Dt extends po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lw++}),this.uuid=Jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new I,n=new di,i=new Za,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ze}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ls.setFromAxisAngle(e,n),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,n){return ls.setFromAxisAngle(e,n),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(Rg,e)}rotateY(e){return this.rotateOnAxis(Pg,e)}rotateZ(e){return this.rotateOnAxis(Lg,e)}translateOnAxis(e,n){return Cg.copy(e).applyQuaternion(this.quaternion),this.position.add(Cg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Rg,e)}translateY(e){return this.translateOnAxis(Pg,e)}translateZ(e){return this.translateOnAxis(Lg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Al.copy(e):Al.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Io,Al,this.up):vi.lookAt(Al,Io,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),ls.setFromRotationMatrix(vi),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ng),cs.child=e,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Iw),vh.child=e,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ng),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,Nw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,Dw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new I(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new I,_i=new I,_h=new I,xi=new I,us=new I,hs=new I,Dg=new I,xh=new I,yh=new I,Sh=new I;class Qn{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),qn.subVectors(e,n),r.cross(qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){qn.subVectors(r,n),_i.subVectors(i,n),_h.subVectors(e,n);const o=qn.dot(qn),a=qn.dot(_i),l=qn.dot(_h),c=_i.dot(_i),u=_i.dot(_h),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,m=(o*u-a*l)*d;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static isFrontFacing(e,n,i,r){return qn.subVectors(i,n),_i.subVectors(e,n),qn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),qn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;us.subVectors(r,i),hs.subVectors(s,i),xh.subVectors(e,i);const l=us.dot(xh),c=hs.dot(xh);if(l<=0&&c<=0)return n.copy(i);yh.subVectors(e,r);const u=us.dot(yh),h=hs.dot(yh);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(us,o);Sh.subVectors(e,s);const p=us.dot(Sh),m=hs.dot(Sh);if(m>=0&&p<=m)return n.copy(s);const v=p*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(hs,a);const g=u*m-p*h;if(g<=0&&h-u>=0&&p-m>=0)return Dg.subVectors(s,r),a=(h-u)/(h-u+(p-m)),n.copy(r).addScaledVector(Dg,a);const f=1/(g+v+d);return o=v*f,a=d*f,n.copy(i).addScaledVector(us,o).addScaledVector(hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},bl={h:0,s:0,l:0};function Mh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=at.workingColorSpace){return this.r=e,this.g=n,this.b=i,at.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=at.workingColorSpace){if(e=ap(e,1),n=Lt(n,0,1),i=Lt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Mh(o,s,e+1/3),this.g=Mh(o,s,e),this.b=Mh(o,s,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,n=pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pn){const i=Rx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}copyLinearToSRGB(e){return this.r=ch(e.r),this.g=ch(e.g),this.b=ch(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return at.fromWorkingColorSpace(Qt.copy(this),e),Math.round(Lt(Qt.r*255,0,255))*65536+Math.round(Lt(Qt.g*255,0,255))*256+Math.round(Lt(Qt.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=at.workingColorSpace){at.fromWorkingColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=at.workingColorSpace){return at.fromWorkingColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=pn){at.fromWorkingColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==pn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+n,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL($i),e.getHSL(bl);const i=fa($i.h,bl.h,n),r=fa($i.s,bl.s,n),s=fa($i.l,bl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Ge;Ge.NAMES=Rx;let Uw=0;class Qr extends po{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uw++}),this.uuid=Jr(),this.name="",this.type="Material",this.blending=js,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wd,this.blendDst=$d,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Vc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_g,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(i.blending=this.blending),this.side!==Pn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wd&&(i.blendSrc=this.blendSrc),this.blendDst!==$d&&(i.blendDst=this.blendDst),this.blendEquation!==Ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_g&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _u extends Qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=hx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new I,Cl=new he;class ni{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=xg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Sw("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Cl.fromBufferAttribute(this,n),Cl.applyMatrix3(e),this.setXY(n,Cl.x,Cl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Es(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Es(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Es(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Es(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Es(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xg&&(e.usage=this.usage),e}}class Px extends ni{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Lx extends ni{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class nt extends ni{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Fw=0;const Un=new lt,wh=new Dt,ds=new I,wn=new _r,Uo=new _r,kt=new I;class Ft extends po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fw++}),this.uuid=Jr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ex(e)?Lx:Px)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return wh.lookAt(e),wh.updateMatrix(),this.applyMatrix4(wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new nt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _r);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Uo.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(wn.min,Uo.min),wn.expandByPoint(kt),kt.addVectors(wn.max,Uo.max),wn.expandByPoint(kt)):(wn.expandByPoint(Uo.min),wn.expandByPoint(Uo.max))}wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(ds.fromBufferAttribute(e,c),kt.add(ds)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new I,l[P]=new I;const c=new I,u=new I,h=new I,d=new he,p=new he,m=new he,v=new I,g=new I;function f(P,w,M){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,M),u.sub(c),h.sub(c),p.sub(d),m.sub(d);const U=1/(p.x*m.y-m.x*p.y);isFinite(U)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(U),g.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(U),a[P].add(v),a[w].add(v),a[M].add(v),l[P].add(g),l[w].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,w=x.length;P<w;++P){const M=x[P],U=M.start,B=M.count;for(let D=U,z=U+B;D<z;D+=3)f(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const _=new I,y=new I,C=new I,E=new I;function A(P){C.fromBufferAttribute(r,P),E.copy(C);const w=a[P];_.copy(w),_.sub(C.multiplyScalar(C.dot(w))).normalize(),y.crossVectors(E,w);const U=y.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,U)}for(let P=0,w=x.length;P<w;++P){const M=x[P],U=M.start,B=M.count;for(let D=U,z=U+B;D<z;D+=3)A(e.getX(D+0)),A(e.getX(D+1)),A(e.getX(D+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ni(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let f=0;f<u;f++)d[m++]=c[p++]}return new ni(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ft,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ig=new lt,Tr=new bx,Rl=new mo,Ug=new I,fs=new I,ps=new I,ms=new I,Eh=new I,Pl=new I,Ll=new he,Nl=new he,Dl=new he,Fg=new I,Og=new I,kg=new I,Il=new I,Ul=new I;class et extends Dt{constructor(e=new Ft,n=new _u){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Pl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Eh.fromBufferAttribute(h,e),o?Pl.addScaledVector(Eh,u):Pl.addScaledVector(Eh.sub(n),u))}n.add(Pl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rl.copy(i.boundingSphere),Rl.applyMatrix4(s),Tr.copy(e.ray).recast(e.near),!(Rl.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Rl,Ug)===null||Tr.origin.distanceToSquared(Ug)>(e.far-e.near)**2))&&(Ig.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(Ig),!(i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Tr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const g=d[m],f=o[g.materialIndex],x=Math.max(g.start,p.start),_=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,C=_;y<C;y+=3){const E=a.getX(y),A=a.getX(y+1),P=a.getX(y+2);r=Fl(this,f,e,i,c,u,h,E,A,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let g=m,f=v;g<f;g+=3){const x=a.getX(g),_=a.getX(g+1),y=a.getX(g+2);r=Fl(this,o,e,i,c,u,h,x,_,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const g=d[m],f=o[g.materialIndex],x=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,C=_;y<C;y+=3){const E=y,A=y+1,P=y+2;r=Fl(this,f,e,i,c,u,h,E,A,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=m,f=v;g<f;g+=3){const x=g,_=g+1,y=g+2;r=Fl(this,o,e,i,c,u,h,x,_,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function Ow(t,e,n,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Pn,a),l===null)return null;Ul.copy(a),Ul.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ul);return c<n.near||c>n.far?null:{distance:c,point:Ul.clone(),object:t}}function Fl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,fs),t.getVertexPosition(l,ps),t.getVertexPosition(c,ms);const u=Ow(t,e,n,i,fs,ps,ms,Il);if(u){r&&(Ll.fromBufferAttribute(r,a),Nl.fromBufferAttribute(r,l),Dl.fromBufferAttribute(r,c),u.uv=Qn.getInterpolation(Il,fs,ps,ms,Ll,Nl,Dl,new he)),s&&(Ll.fromBufferAttribute(s,a),Nl.fromBufferAttribute(s,l),Dl.fromBufferAttribute(s,c),u.uv1=Qn.getInterpolation(Il,fs,ps,ms,Ll,Nl,Dl,new he)),o&&(Fg.fromBufferAttribute(o,a),Og.fromBufferAttribute(o,l),kg.fromBufferAttribute(o,c),u.normal=Qn.getInterpolation(Il,fs,ps,ms,Fg,Og,kg,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};Qn.getNormal(fs,ps,ms,h.normal),u.face=h}return u}class es extends Ft{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(h,2));function m(v,g,f,x,_,y,C,E,A,P,w){const M=y/A,U=C/P,B=y/2,D=C/2,z=E/2,j=A+1,Z=P+1;let Q=0,N=0;const H=new I;for(let q=0;q<Z;q++){const te=q*U-D;for(let Se=0;Se<j;Se++){const Fe=Se*M-B;H[v]=Fe*x,H[g]=te*_,H[f]=z,c.push(H.x,H.y,H.z),H[v]=0,H[g]=0,H[f]=E>0?1:-1,u.push(H.x,H.y,H.z),h.push(Se/A),h.push(1-q/P),Q+=1}}for(let q=0;q<P;q++)for(let te=0;te<A;te++){const Se=d+te+j*q,Fe=d+te+j*(q+1),G=d+(te+1)+j*(q+1),ie=d+(te+1)+j*q;l.push(Se,Fe,ie),l.push(Fe,G,ie),N+=6}a.addGroup(p,N,w),p+=N,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=lo(t[n]);for(const r in i)e[r]=i[r]}return e}function kw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Nx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const zw={clone:lo,merge:an};var Bw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bw,this.fragmentShader=Hw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=kw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Dx extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Ri}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new I,zg=new he,Bg=new he;class gn extends Dx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ka*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,n){return this.getViewBounds(e,zg,Bg),n.subVectors(Bg,zg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(qs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const gs=-90,vs=1;class Vw extends Dt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(gs,vs,e,n);r.layers=this.layers,this.add(r);const s=new gn(gs,vs,e,n);s.layers=this.layers,this.add(s);const o=new gn(gs,vs,e,n);o.layers=this.layers,this.add(o);const a=new gn(gs,vs,e,n);a.layers=this.layers,this.add(a);const l=new gn(gs,vs,e,n);l.layers=this.layers,this.add(l);const c=new gn(gs,vs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Ix extends Xt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:so,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ux extends Xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ix(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:nn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new es(5,5,5),s=new Oi({name:"CubemapFromEquirect",uniforms:lo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:cr});s.uniforms.tEquirect.value=n;const o=new et(r,s),a=n.minFilter;return n.minFilter===bi&&(n.minFilter=nn),new Vw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Th=new I,Gw=new I,Ww=new Ze;class Nr{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Th.subVectors(i,n).cross(Gw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Th),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ww.getNormalMatrix(e),r=this.coplanarPoint(Th).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new mo,Ol=new I;class lp{constructor(e=new Nr,n=new Nr,i=new Nr,r=new Nr,s=new Nr,o=new Nr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ri){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],m=r[9],v=r[10],g=r[11],f=r[12],x=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,g-p,y-f).normalize(),i[1].setComponents(l+s,d+c,g+p,y+f).normalize(),i[2].setComponents(l+o,d+u,g+m,y+x).normalize(),i[3].setComponents(l-o,d-u,g-m,y-x).normalize(),i[4].setComponents(l-a,d-h,g-v,y-_).normalize(),n===Ri)i[5].setComponents(l+a,d+h,g+v,y+_).normalize();else if(n===jc)i[5].setComponents(a,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ol.x=r.normal.x>0?e.max.x:e.min.x,Ol.y=r.normal.y>0?e.max.y:e.min.y,Ol.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ol)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function $w(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,a),h.count===-1&&d.length===0&&t.bufferSubData(c,0,u),d.length!==0){for(let p=0,m=d.length;p<m;p++){const v=d[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Li extends Ft{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=n/l,p=[],m=[],v=[],g=[];for(let f=0;f<u;f++){const x=f*d-o;for(let _=0;_<c;_++){const y=_*h-s;m.push(y,-x,0),v.push(0,0,1),g.push(_/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const _=x+c*f,y=x+c*(f+1),C=x+1+c*(f+1),E=x+1+c*f;p.push(_,y,E),p.push(y,C,E)}this.setIndex(p),this.setAttribute("position",new nt(m,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.widthSegments,e.heightSegments)}}var jw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xw=`#ifdef USE_ALPHAHASH
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
#endif`,qw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jw=`#ifdef USE_AOMAP
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
#endif`,Qw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eE=`#ifdef USE_BATCHING
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
#endif`,tE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,nE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sE=`#ifdef USE_IRIDESCENCE
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
#endif`,oE=`#ifdef USE_BUMPMAP
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
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mE=`#define PI 3.141592653589793
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
} // validated`,gE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vE=`vec3 transformedNormal = objectNormal;
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
#endif`,_E=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ME="gl_FragColor = linearToOutputTexel( gl_FragColor );",wE=`
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
}`,EE=`#ifdef USE_ENVMAP
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
#endif`,TE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AE=`#ifdef USE_ENVMAP
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
#endif`,bE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CE=`#ifdef USE_ENVMAP
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
#endif`,RE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DE=`#ifdef USE_GRADIENTMAP
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
}`,IE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OE=`uniform bool receiveShadow;
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
#endif`,kE=`#ifdef USE_ENVMAP
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
#endif`,zE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GE=`PhysicalMaterial material;
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
#endif`,WE=`struct PhysicalMaterial {
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
}`,$E=`
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
#endif`,jE=`#if defined( RE_IndirectDiffuse )
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
#endif`,XE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tT=`#if defined( USE_POINTS_UV )
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
#endif`,nT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oT=`#ifdef USE_MORPHNORMALS
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
#endif`,aT=`#ifdef USE_MORPHTARGETS
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
#endif`,lT=`#ifdef USE_MORPHTARGETS
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
#endif`,cT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pT=`#ifdef USE_NORMALMAP
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
#endif`,mT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_T=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ST=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ET=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PT=`float getShadowMask() {
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
}`,LT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NT=`#ifdef USE_SKINNING
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
#endif`,DT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IT=`#ifdef USE_SKINNING
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
#endif`,UT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zT=`#ifdef USE_TRANSMISSION
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
#endif`,BT=`#ifdef USE_TRANSMISSION
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
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $T=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jT=`uniform sampler2D t2D;
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
}`,XT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KT=`#include <common>
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
}`,JT=`#if DEPTH_PACKING == 3200
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
}`,QT=`#define DISTANCE
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
}`,eA=`#define DISTANCE
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
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iA=`uniform float scale;
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
}`,rA=`uniform vec3 diffuse;
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
}`,sA=`#include <common>
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
}`,oA=`uniform vec3 diffuse;
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
}`,aA=`#define LAMBERT
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
}`,lA=`#define LAMBERT
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
}`,cA=`#define MATCAP
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
}`,uA=`#define MATCAP
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
}`,hA=`#define NORMAL
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
}`,dA=`#define NORMAL
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
}`,fA=`#define PHONG
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
}`,pA=`#define PHONG
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
}`,mA=`#define STANDARD
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
}`,gA=`#define STANDARD
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
}`,vA=`#define TOON
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
}`,_A=`#define TOON
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
}`,xA=`uniform float size;
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
}`,yA=`uniform vec3 diffuse;
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
}`,SA=`#include <common>
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
}`,MA=`uniform vec3 color;
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
}`,wA=`uniform float rotation;
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
}`,EA=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:jw,alphahash_pars_fragment:Xw,alphamap_fragment:qw,alphamap_pars_fragment:Yw,alphatest_fragment:Zw,alphatest_pars_fragment:Kw,aomap_fragment:Jw,aomap_pars_fragment:Qw,batching_pars_vertex:eE,batching_vertex:tE,begin_vertex:nE,beginnormal_vertex:iE,bsdfs:rE,iridescence_fragment:sE,bumpmap_pars_fragment:oE,clipping_planes_fragment:aE,clipping_planes_pars_fragment:lE,clipping_planes_pars_vertex:cE,clipping_planes_vertex:uE,color_fragment:hE,color_pars_fragment:dE,color_pars_vertex:fE,color_vertex:pE,common:mE,cube_uv_reflection_fragment:gE,defaultnormal_vertex:vE,displacementmap_pars_vertex:_E,displacementmap_vertex:xE,emissivemap_fragment:yE,emissivemap_pars_fragment:SE,colorspace_fragment:ME,colorspace_pars_fragment:wE,envmap_fragment:EE,envmap_common_pars_fragment:TE,envmap_pars_fragment:AE,envmap_pars_vertex:bE,envmap_physical_pars_fragment:kE,envmap_vertex:CE,fog_vertex:RE,fog_pars_vertex:PE,fog_fragment:LE,fog_pars_fragment:NE,gradientmap_pars_fragment:DE,lightmap_pars_fragment:IE,lights_lambert_fragment:UE,lights_lambert_pars_fragment:FE,lights_pars_begin:OE,lights_toon_fragment:zE,lights_toon_pars_fragment:BE,lights_phong_fragment:HE,lights_phong_pars_fragment:VE,lights_physical_fragment:GE,lights_physical_pars_fragment:WE,lights_fragment_begin:$E,lights_fragment_maps:jE,lights_fragment_end:XE,logdepthbuf_fragment:qE,logdepthbuf_pars_fragment:YE,logdepthbuf_pars_vertex:ZE,logdepthbuf_vertex:KE,map_fragment:JE,map_pars_fragment:QE,map_particle_fragment:eT,map_particle_pars_fragment:tT,metalnessmap_fragment:nT,metalnessmap_pars_fragment:iT,morphinstance_vertex:rT,morphcolor_vertex:sT,morphnormal_vertex:oT,morphtarget_pars_vertex:aT,morphtarget_vertex:lT,normal_fragment_begin:cT,normal_fragment_maps:uT,normal_pars_fragment:hT,normal_pars_vertex:dT,normal_vertex:fT,normalmap_pars_fragment:pT,clearcoat_normal_fragment_begin:mT,clearcoat_normal_fragment_maps:gT,clearcoat_pars_fragment:vT,iridescence_pars_fragment:_T,opaque_fragment:xT,packing:yT,premultiplied_alpha_fragment:ST,project_vertex:MT,dithering_fragment:wT,dithering_pars_fragment:ET,roughnessmap_fragment:TT,roughnessmap_pars_fragment:AT,shadowmap_pars_fragment:bT,shadowmap_pars_vertex:CT,shadowmap_vertex:RT,shadowmask_pars_fragment:PT,skinbase_vertex:LT,skinning_pars_vertex:NT,skinning_vertex:DT,skinnormal_vertex:IT,specularmap_fragment:UT,specularmap_pars_fragment:FT,tonemapping_fragment:OT,tonemapping_pars_fragment:kT,transmission_fragment:zT,transmission_pars_fragment:BT,uv_pars_fragment:HT,uv_pars_vertex:VT,uv_vertex:GT,worldpos_vertex:WT,background_vert:$T,background_frag:jT,backgroundCube_vert:XT,backgroundCube_frag:qT,cube_vert:YT,cube_frag:ZT,depth_vert:KT,depth_frag:JT,distanceRGBA_vert:QT,distanceRGBA_frag:eA,equirect_vert:tA,equirect_frag:nA,linedashed_vert:iA,linedashed_frag:rA,meshbasic_vert:sA,meshbasic_frag:oA,meshlambert_vert:aA,meshlambert_frag:lA,meshmatcap_vert:cA,meshmatcap_frag:uA,meshnormal_vert:hA,meshnormal_frag:dA,meshphong_vert:fA,meshphong_frag:pA,meshphysical_vert:mA,meshphysical_frag:gA,meshtoon_vert:vA,meshtoon_frag:_A,points_vert:xA,points_frag:yA,shadow_vert:SA,shadow_frag:MA,sprite_vert:wA,sprite_frag:EA},xe={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},oi={basic:{uniforms:an([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:an([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:an([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:an([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:an([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:an([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:an([xe.points,xe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:an([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:an([xe.common,xe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:an([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:an([xe.sprite,xe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:an([xe.common,xe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:an([xe.lights,xe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};oi.physical={uniforms:an([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const kl={r:0,b:0,g:0},br=new di,TA=new lt;function AA(t,e,n,i,r,s,o){const a=new Ge(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function m(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?n:e).get(_)),_}function v(x){let _=!1;const y=m(x);y===null?f(a,l):y&&y.isColor&&(f(y,1),_=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function g(x,_){const y=m(_);y&&(y.isCubeTexture||y.mapping===mu)?(u===void 0&&(u=new et(new es(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:lo(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),br.copy(_.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(TA.makeRotationFromEuler(br)),u.material.toneMapped=at.getTransfer(y.colorSpace)!==ft,(h!==y||d!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,p=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new et(new Li(2,2),new Oi({name:"BackgroundMaterial",uniforms:lo(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=at.getTransfer(y.colorSpace)!==ft,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,_){x.getRGB(kl,Nx(t)),i.buffers.color.setClear(kl.r,kl.g,kl.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(a,l)},render:v,addToRenderList:g}}function bA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,U,B,D,z){let j=!1;const Z=h(D,B,U);s!==Z&&(s=Z,c(s.object)),j=p(M,D,B,z),j&&m(M,D,B,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(M,U,B,D),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function h(M,U,B){const D=B.wireframe===!0;let z=i[M.id];z===void 0&&(z={},i[M.id]=z);let j=z[U.id];j===void 0&&(j={},z[U.id]=j);let Z=j[D];return Z===void 0&&(Z=d(l()),j[D]=Z),Z}function d(M){const U=[],B=[],D=[];for(let z=0;z<n;z++)U[z]=0,B[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:D,object:M,attributes:{},index:null}}function p(M,U,B,D){const z=s.attributes,j=U.attributes;let Z=0;const Q=B.getAttributes();for(const N in Q)if(Q[N].location>=0){const q=z[N];let te=j[N];if(te===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),q===void 0||q.attribute!==te||te&&q.data!==te.data)return!0;Z++}return s.attributesNum!==Z||s.index!==D}function m(M,U,B,D){const z={},j=U.attributes;let Z=0;const Q=B.getAttributes();for(const N in Q)if(Q[N].location>=0){let q=j[N];q===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(q=M.instanceColor));const te={};te.attribute=q,q&&q.data&&(te.data=q.data),z[N]=te,Z++}s.attributes=z,s.attributesNum=Z,s.index=D}function v(){const M=s.newAttributes;for(let U=0,B=M.length;U<B;U++)M[U]=0}function g(M){f(M,0)}function f(M,U){const B=s.newAttributes,D=s.enabledAttributes,z=s.attributeDivisors;B[M]=1,D[M]===0&&(t.enableVertexAttribArray(M),D[M]=1),z[M]!==U&&(t.vertexAttribDivisor(M,U),z[M]=U)}function x(){const M=s.newAttributes,U=s.enabledAttributes;for(let B=0,D=U.length;B<D;B++)U[B]!==M[B]&&(t.disableVertexAttribArray(B),U[B]=0)}function _(M,U,B,D,z,j,Z){Z===!0?t.vertexAttribIPointer(M,U,B,z,j):t.vertexAttribPointer(M,U,B,D,z,j)}function y(M,U,B,D){v();const z=D.attributes,j=B.getAttributes(),Z=U.defaultAttributeValues;for(const Q in j){const N=j[Q];if(N.location>=0){let H=z[Q];if(H===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(H=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(H=M.instanceColor)),H!==void 0){const q=H.normalized,te=H.itemSize,Se=e.get(H);if(Se===void 0)continue;const Fe=Se.buffer,G=Se.type,ie=Se.bytesPerElement,de=G===t.INT||G===t.UNSIGNED_INT||H.gpuType===mx;if(H.isInterleavedBufferAttribute){const le=H.data,Oe=le.stride,Ve=H.offset;if(le.isInstancedInterleavedBuffer){for(let F=0;F<N.locationSize;F++)f(N.location+F,le.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let F=0;F<N.locationSize;F++)g(N.location+F);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let F=0;F<N.locationSize;F++)_(N.location+F,te/N.locationSize,G,q,Oe*ie,(Ve+te/N.locationSize*F)*ie,de)}else{if(H.isInstancedBufferAttribute){for(let le=0;le<N.locationSize;le++)f(N.location+le,H.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let le=0;le<N.locationSize;le++)g(N.location+le);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let le=0;le<N.locationSize;le++)_(N.location+le,te/N.locationSize,G,q,te*ie,te/N.locationSize*le*ie,de)}}else if(Z!==void 0){const q=Z[Q];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(N.location,q);break;case 3:t.vertexAttrib3fv(N.location,q);break;case 4:t.vertexAttrib4fv(N.location,q);break;default:t.vertexAttrib1fv(N.location,q)}}}}x()}function C(){P();for(const M in i){const U=i[M];for(const B in U){const D=U[B];for(const z in D)u(D[z].object),delete D[z];delete U[B]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;const U=i[M.id];for(const B in U){const D=U[B];for(const z in D)u(D[z].object),delete D[z];delete U[B]}delete i[M.id]}function A(M){for(const U in i){const B=i[U];if(B[M.id]===void 0)continue;const D=B[M.id];for(const z in D)u(D[z].object),delete D[z];delete B[M.id]}}function P(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function CA(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<h;p++)this.render(c[p],u[p]);else{d.multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let m=0;m<h;m++)p+=u[m];n.update(p,i,1)}}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],u[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let m=0;for(let v=0;v<h;v++)m+=u[v];for(let v=0;v<d.length;v++)n.update(m,i,d[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function RA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==ci&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const A=E===gu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==fr&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ci&&!A)}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:y,maxSamples:C}}function PA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Nr,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const m=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,f=t.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const x=s?0:i,_=x*4;let y=f.clippingState||null;l.value=y,y=u(m,d,_,p);for(let C=0;C!==_;++C)y[C]=n[C];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,m){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const f=p+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<f)&&(g=new Float32Array(f));for(let _=0,y=p;_!==v;++_,y+=4)o.copy(h[_]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function LA(t){let e=new WeakMap;function n(o,a){return a===jd?o.mapping=so:a===Xd&&(o.mapping=oo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===jd||a===Xd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ux(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ox extends Dx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ks=4,Hg=[.125,.215,.35,.446,.526,.582],Ur=20,Ah=new Ox,Vg=new Ge;let bh=null,Ch=0,Rh=0,Ph=!1;const Dr=(1+Math.sqrt(5))/2,_s=1/Dr,Gg=[new I(-Dr,_s,0),new I(Dr,_s,0),new I(-_s,0,Dr),new I(_s,0,Dr),new I(0,Dr,-_s),new I(0,Dr,_s),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Yd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){bh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bh,Ch,Rh),this._renderer.xr.enabled=Ph,e.scissorTest=!1,zl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===so||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:gu,format:ci,colorSpace:vr,depthBuffer:!1},r=Wg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NA(s)),this._blurMaterial=DA(s,e,n)}return r}_compileMaterial(e){const n=new et(this._lodPlanes[0],e);this._renderer.compile(n,Ah)}_sceneToCubeUV(e,n,i,r){const a=new gn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Vg),u.toneMapping=ur,u.autoClear=!1;const p=new _u({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),m=new et(new es,p);let v=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,v=!0):(p.color.copy(Vg),v=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const _=this._cubeSize;zl(r,x*_,f>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===so||e.mapping===oo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$g());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;zl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ah)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Gg[(r-s-1)%Gg.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new et(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ur-1),v=s/m,g=isFinite(s)?1+Math.floor(u*v):Ur;g>Ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ur}`);const f=[];let x=0;for(let A=0;A<Ur;++A){const P=A/v,w=Math.exp(-P*P/2);f.push(w),A===0?x+=w:A<g&&(x+=2*w)}for(let A=0;A<f.length;A++)f[A]=f[A]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-i;const y=this._sizeLods[r],C=3*y*(r>_-ks?r-_+ks:0),E=4*(this._cubeSize-y);zl(n,C,E,3*y,2*y),l.setRenderTarget(n),l.render(h,Ah)}}function NA(t){const e=[],n=[],i=[];let r=t;const s=t-ks+1+Hg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ks?l=Hg[o-t+ks-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,m=6,v=3,g=2,f=1,x=new Float32Array(v*m*p),_=new Float32Array(g*m*p),y=new Float32Array(f*m*p);for(let E=0;E<p;E++){const A=E%3*2/3-1,P=E>2?0:-1,w=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];x.set(w,v*m*E),_.set(d,g*m*E);const M=[E,E,E,E,E,E];y.set(M,f*m*E)}const C=new Ft;C.setAttribute("position",new ni(x,v)),C.setAttribute("uv",new ni(_,g)),C.setAttribute("faceIndex",new ni(y,f)),e.push(C),r>ks&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Wg(t,e,n){const i=new Xr(t,e,n);return i.texture.mapping=mu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function DA(t,e,n){const i=new Float32Array(Ur),r=new I(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cp(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function $g(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cp(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function jg(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function cp(){return`

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
	`}function IA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===jd||l===Xd,u=l===so||l===oo;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Yd(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Yd(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function UA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function FA(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const v=d.morphAttributes[m];for(let g=0,f=v.length;g<f;g++)e.remove(v[g])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const m in p){const v=p[m];for(let g=0,f=v.length;g<f;g++)e.update(v[g],t.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,m=h.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let _=0,y=x.length;_<y;_+=3){const C=x[_+0],E=x[_+1],A=x[_+2];d.push(C,E,E,A,A,C)}}else if(m!==void 0){const x=m.array;v=m.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const C=_+0,E=_+1,A=_+2;d.push(C,E,E,A,A,C)}}else return;const g=new(Ex(d)?Lx:Px)(d,1);g.version=v;const f=s.get(h);f&&e.remove(f),s.set(h,g)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function OA(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,m){m!==0&&(t.drawElementsInstanced(i,p,s,d*o,m),n.update(p,i,m))}function u(d,p,m){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<m;g++)this.render(d[g]/o,p[g]);else{v.multiDrawElementsWEBGL(i,p,0,s,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];n.update(g,i,1)}}function h(d,p,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],v[f]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,m);let f=0;for(let x=0;x<m;x++)f+=p[x];for(let x=0;x<v.length;x++)n.update(f,i,v[x])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function kA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function zA(t,e,n){const i=new WeakMap,r=new yt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let C=a.attributes.position.count*y,E=1;C>e.maxTextureSize&&(E=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*E*4*h),P=new Ax(A,C,E,h);P.type=Ci,P.needsUpdate=!0;const w=y*4;for(let U=0;U<h;U++){const B=f[U],D=x[U],z=_[U],j=C*E*4*U;for(let Z=0;Z<B.count;Z++){const Q=Z*w;m===!0&&(r.fromBufferAttribute(B,Z),A[j+Q+0]=r.x,A[j+Q+1]=r.y,A[j+Q+2]=r.z,A[j+Q+3]=0),v===!0&&(r.fromBufferAttribute(D,Z),A[j+Q+4]=r.x,A[j+Q+5]=r.y,A[j+Q+6]=r.z,A[j+Q+7]=0),g===!0&&(r.fromBufferAttribute(z,Z),A[j+Q+8]=r.x,A[j+Q+9]=r.y,A[j+Q+10]=r.z,A[j+Q+11]=z.itemSize===4?r.w:1)}}d={count:h,texture:P,size:new he(C,E)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function BA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class kx extends Xt{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Xs,u!==Xs&&u!==Oa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Xs&&(i=ao),i===void 0&&u===Oa&&(i=Ya),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const zx=new Xt,Bx=new kx(1,1);Bx.compareFunction=wx;const Hx=new Ax,Vx=new bw,Gx=new Ix,Xg=[],qg=[],Yg=new Float32Array(16),Zg=new Float32Array(9),Kg=new Float32Array(4);function go(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Xg[r];if(s===void 0&&(s=new Float32Array(r),Xg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xu(t,e){let n=qg[e];n===void 0&&(n=new Int32Array(e),qg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function HA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function VA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function GA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function WA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function $A(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;Kg.set(i),t.uniformMatrix2fv(this.addr,!1,Kg),Ut(n,i)}}function jA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;Zg.set(i),t.uniformMatrix3fv(this.addr,!1,Zg),Ut(n,i)}}function XA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;Yg.set(i),t.uniformMatrix4fv(this.addr,!1,Yg),Ut(n,i)}}function qA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function YA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function ZA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function KA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function JA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function QA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function e2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function t2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function n2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Bx:zx;n.setTexture2D(e||s,r)}function i2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Vx,r)}function r2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Gx,r)}function s2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Hx,r)}function o2(t){switch(t){case 5126:return HA;case 35664:return VA;case 35665:return GA;case 35666:return WA;case 35674:return $A;case 35675:return jA;case 35676:return XA;case 5124:case 35670:return qA;case 35667:case 35671:return YA;case 35668:case 35672:return ZA;case 35669:case 35673:return KA;case 5125:return JA;case 36294:return QA;case 36295:return e2;case 36296:return t2;case 35678:case 36198:case 36298:case 36306:case 35682:return n2;case 35679:case 36299:case 36307:return i2;case 35680:case 36300:case 36308:case 36293:return r2;case 36289:case 36303:case 36311:case 36292:return s2}}function a2(t,e){t.uniform1fv(this.addr,e)}function l2(t,e){const n=go(e,this.size,2);t.uniform2fv(this.addr,n)}function c2(t,e){const n=go(e,this.size,3);t.uniform3fv(this.addr,n)}function u2(t,e){const n=go(e,this.size,4);t.uniform4fv(this.addr,n)}function h2(t,e){const n=go(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function d2(t,e){const n=go(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function f2(t,e){const n=go(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function p2(t,e){t.uniform1iv(this.addr,e)}function m2(t,e){t.uniform2iv(this.addr,e)}function g2(t,e){t.uniform3iv(this.addr,e)}function v2(t,e){t.uniform4iv(this.addr,e)}function _2(t,e){t.uniform1uiv(this.addr,e)}function x2(t,e){t.uniform2uiv(this.addr,e)}function y2(t,e){t.uniform3uiv(this.addr,e)}function S2(t,e){t.uniform4uiv(this.addr,e)}function M2(t,e,n){const i=this.cache,r=e.length,s=xu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||zx,s[o])}function w2(t,e,n){const i=this.cache,r=e.length,s=xu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Vx,s[o])}function E2(t,e,n){const i=this.cache,r=e.length,s=xu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Gx,s[o])}function T2(t,e,n){const i=this.cache,r=e.length,s=xu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Hx,s[o])}function A2(t){switch(t){case 5126:return a2;case 35664:return l2;case 35665:return c2;case 35666:return u2;case 35674:return h2;case 35675:return d2;case 35676:return f2;case 5124:case 35670:return p2;case 35667:case 35671:return m2;case 35668:case 35672:return g2;case 35669:case 35673:return v2;case 5125:return _2;case 36294:return x2;case 36295:return y2;case 36296:return S2;case 35678:case 36198:case 36298:case 36306:case 35682:return M2;case 35679:case 36299:case 36307:return w2;case 35680:case 36300:case 36308:case 36293:return E2;case 36289:case 36303:case 36311:case 36292:return T2}}class b2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=o2(n.type)}}class C2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=A2(n.type)}}class R2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Lh=/(\w+)(\])?(\[|\.)?/g;function Jg(t,e){t.seq.push(e),t.map[e.id]=e}function P2(t,e,n){const i=t.name,r=i.length;for(Lh.lastIndex=0;;){const s=Lh.exec(i),o=Lh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Jg(n,c===void 0?new b2(a,t,e):new C2(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new R2(a),Jg(n,h)),n=h}}}class mc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);P2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Qg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const L2=37297;let N2=0;function D2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function I2(t){const e=at.getPrimaries(at.workingColorSpace),n=at.getPrimaries(t);let i;switch(e===n?i="":e===$c&&n===Wc?i="LinearDisplayP3ToLinearSRGB":e===Wc&&n===$c&&(i="LinearSRGBToLinearDisplayP3"),t){case vr:case vu:return[i,"LinearTransferOETF"];case pn:case op:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function e0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+D2(t.getShaderSource(e),o)}else return r}function U2(t,e){const n=I2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function F2(t,e){let n;switch(e){case N1:n="Linear";break;case D1:n="Reinhard";break;case I1:n="OptimizedCineon";break;case dx:n="ACESFilmic";break;case F1:n="AgX";break;case O1:n="Neutral";break;case U1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function O2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function k2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function z2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function na(t){return t!==""}function t0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function n0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zd(t){return t.replace(B2,V2)}const H2=new Map;function V2(t,e){let n=qe[e];if(n===void 0){const i=H2.get(e);if(i!==void 0)n=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zd(n)}const G2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function i0(t){return t.replace(G2,W2)}function W2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function r0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function $2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===cx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ux?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function j2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case so:case oo:e="ENVMAP_TYPE_CUBE";break;case mu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case oo:e="ENVMAP_MODE_REFRACTION";break}return e}function q2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case hx:e="ENVMAP_BLENDING_MULTIPLY";break;case P1:e="ENVMAP_BLENDING_MIX";break;case L1:e="ENVMAP_BLENDING_ADD";break}return e}function Y2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Z2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=$2(n),c=j2(n),u=X2(n),h=q2(n),d=Y2(n),p=O2(n),m=k2(s),v=r.createProgram();let g,f,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(na).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(na).join(`
`),f.length>0&&(f+=`
`)):(g=[r0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),f=[r0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ur?"#define TONE_MAPPING":"",n.toneMapping!==ur?qe.tonemapping_pars_fragment:"",n.toneMapping!==ur?F2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,U2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(na).join(`
`)),o=Zd(o),o=t0(o,n),o=n0(o,n),a=Zd(a),a=t0(a,n),a=n0(a,n),o=i0(o),a=i0(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===yg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=x+g+o,y=x+f+a,C=Qg(r,r.VERTEX_SHADER,_),E=Qg(r,r.FRAGMENT_SHADER,y);r.attachShader(v,C),r.attachShader(v,E),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(U){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(v).trim(),D=r.getShaderInfoLog(C).trim(),z=r.getShaderInfoLog(E).trim();let j=!0,Z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,C,E);else{const Q=e0(r,C,"vertex"),N=e0(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+B+`
`+Q+`
`+N)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(D===""||z==="")&&(Z=!1);Z&&(U.diagnostics={runnable:j,programLog:B,vertexShader:{log:D,prefix:g},fragmentShader:{log:z,prefix:f}})}r.deleteShader(C),r.deleteShader(E),P=new mc(r,v),w=z2(r,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,L2)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=N2++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=E,this}let K2=0;class J2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Q2(e),n.set(e,i)),i}}class Q2{constructor(e){this.id=K2++,this.code=e,this.usedTimes=0}}function eb(t,e,n,i,r,s,o){const a=new Cx,l=new J2,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,M,U,B,D){const z=B.fog,j=D.geometry,Z=w.isMeshStandardMaterial?B.environment:null,Q=(w.isMeshStandardMaterial?n:e).get(w.envMap||Z),N=Q&&Q.mapping===mu?Q.image.height:null,H=m[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const q=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,te=q!==void 0?q.length:0;let Se=0;j.morphAttributes.position!==void 0&&(Se=1),j.morphAttributes.normal!==void 0&&(Se=2),j.morphAttributes.color!==void 0&&(Se=3);let Fe,G,ie,de;if(H){const it=oi[H];Fe=it.vertexShader,G=it.fragmentShader}else Fe=w.vertexShader,G=w.fragmentShader,l.update(w),ie=l.getVertexShaderID(w),de=l.getFragmentShaderID(w);const le=t.getRenderTarget(),Oe=D.isInstancedMesh===!0,Ve=D.isBatchedMesh===!0,F=!!w.map,ze=!!w.matcap,Y=!!Q,ae=!!w.aoMap,J=!!w.lightMap,fe=!!w.bumpMap,oe=!!w.normalMap,me=!!w.displacementMap,Ee=!!w.emissiveMap,R=!!w.metalnessMap,T=!!w.roughnessMap,V=w.anisotropy>0,K=w.clearcoat>0,ne=w.dispersion>0,re=w.iridescence>0,we=w.sheen>0,ve=w.transmission>0,ge=V&&!!w.anisotropyMap,He=K&&!!w.clearcoatMap,pe=K&&!!w.clearcoatNormalMap,Le=K&&!!w.clearcoatRoughnessMap,je=re&&!!w.iridescenceMap,Ue=re&&!!w.iridescenceThicknessMap,be=we&&!!w.sheenColorMap,We=we&&!!w.sheenRoughnessMap,Ke=!!w.specularMap,gt=!!w.specularColorMap,$e=!!w.specularIntensityMap,O=ve&&!!w.transmissionMap,se=ve&&!!w.thicknessMap,ee=!!w.gradientMap,ye=!!w.alphaMap,Me=w.alphaTest>0,Qe=!!w.alphaHash,ct=!!w.extensions;let vt=ur;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(vt=t.toneMapping);const Ot={shaderID:H,shaderType:w.type,shaderName:w.name,vertexShader:Fe,fragmentShader:G,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:de,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Ve,instancing:Oe,instancingColor:Oe&&D.instanceColor!==null,instancingMorph:Oe&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:vr,alphaToCoverage:!!w.alphaToCoverage,map:F,matcap:ze,envMap:Y,envMapMode:Y&&Q.mapping,envMapCubeUVHeight:N,aoMap:ae,lightMap:J,bumpMap:fe,normalMap:oe,displacementMap:d&&me,emissiveMap:Ee,normalMapObjectSpace:oe&&w.normalMapType===Z1,normalMapTangentSpace:oe&&w.normalMapType===Mx,metalnessMap:R,roughnessMap:T,anisotropy:V,anisotropyMap:ge,clearcoat:K,clearcoatMap:He,clearcoatNormalMap:pe,clearcoatRoughnessMap:Le,dispersion:ne,iridescence:re,iridescenceMap:je,iridescenceThicknessMap:Ue,sheen:we,sheenColorMap:be,sheenRoughnessMap:We,specularMap:Ke,specularColorMap:gt,specularIntensityMap:$e,transmission:ve,transmissionMap:O,thicknessMap:se,gradientMap:ee,opaque:w.transparent===!1&&w.blending===js&&w.alphaToCoverage===!1,alphaMap:ye,alphaTest:Me,alphaHash:Qe,combine:w.combine,mapUv:F&&v(w.map.channel),aoMapUv:ae&&v(w.aoMap.channel),lightMapUv:J&&v(w.lightMap.channel),bumpMapUv:fe&&v(w.bumpMap.channel),normalMapUv:oe&&v(w.normalMap.channel),displacementMapUv:me&&v(w.displacementMap.channel),emissiveMapUv:Ee&&v(w.emissiveMap.channel),metalnessMapUv:R&&v(w.metalnessMap.channel),roughnessMapUv:T&&v(w.roughnessMap.channel),anisotropyMapUv:ge&&v(w.anisotropyMap.channel),clearcoatMapUv:He&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:pe&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:be&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:We&&v(w.sheenRoughnessMap.channel),specularMapUv:Ke&&v(w.specularMap.channel),specularColorMapUv:gt&&v(w.specularColorMap.channel),specularIntensityMapUv:$e&&v(w.specularIntensityMap.channel),transmissionMapUv:O&&v(w.transmissionMap.channel),thicknessMapUv:se&&v(w.thicknessMap.channel),alphaMapUv:ye&&v(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(oe||V),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!j.attributes.uv&&(F||ye),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:vt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:F&&w.map.isVideoTexture===!0&&at.getTransfer(w.map.colorSpace)===ft,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===$t,flipSided:w.side===un,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ct&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ct&&w.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function f(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const U in w.defines)M.push(U),M.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(x(M,w),_(M,w),M.push(t.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function x(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function _(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),w.push(a.mask)}function y(w){const M=m[w.type];let U;if(M){const B=oi[M];U=zw.clone(B.uniforms)}else U=w.uniforms;return U}function C(w,M){let U;for(let B=0,D=u.length;B<D;B++){const z=u[B];if(z.cacheKey===M){U=z,++U.usedTimes;break}}return U===void 0&&(U=new Z2(t,M,w,s),u.push(U)),U}function E(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:y,acquireProgram:C,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:P}}function tb(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function nb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function s0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function o0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,m,v,g){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:m,renderOrder:h.renderOrder,z:v,group:g},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=h.renderOrder,f.z=v,f.group=g),e++,f}function a(h,d,p,m,v,g){const f=o(h,d,p,m,v,g);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(h,d,p,m,v,g){const f=o(h,d,p,m,v,g);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(h,d){n.length>1&&n.sort(h||nb),i.length>1&&i.sort(d||s0),r.length>1&&r.sort(d||s0)}function u(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function ib(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new o0,t.set(i,[o])):r>=s.length?(o=new o0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function rb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new Ge};break;case"SpotLight":n={position:new I,direction:new I,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function sb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ob=0;function ab(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function lb(t){const e=new rb,n=sb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new lt,o=new lt;function a(c,u){let h=0,d=0,p=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let m=0,v=0,g=0,f=0,x=0,_=0,y=0,C=0,E=0,A=0,P=0;c.sort(ab);const w=u===!0?Math.PI:1;for(let U=0,B=c.length;U<B;U++){const D=c[U],z=D.color,j=D.intensity,Z=D.distance,Q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=z.r*j*w,d+=z.g*j*w,p+=z.b*j*w;else if(D.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(D.sh.coefficients[N],j);P++}else if(D.isDirectionalLight){const N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity*w),D.castShadow){const H=D.shadow,q=n.get(D);q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,i.directionalShadow[m]=q,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=D.shadow.matrix,_++}i.directional[m]=N,m++}else if(D.isSpotLight){const N=e.get(D);N.position.setFromMatrixPosition(D.matrixWorld),N.color.copy(z).multiplyScalar(j*w),N.distance=Z,N.coneCos=Math.cos(D.angle),N.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),N.decay=D.decay,i.spot[g]=N;const H=D.shadow;if(D.map&&(i.spotLightMap[E]=D.map,E++,H.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[g]=H.matrix,D.castShadow){const q=n.get(D);q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,i.spotShadow[g]=q,i.spotShadowMap[g]=Q,C++}g++}else if(D.isRectAreaLight){const N=e.get(D);N.color.copy(z).multiplyScalar(j),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),i.rectArea[f]=N,f++}else if(D.isPointLight){const N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity*w),N.distance=D.distance,N.decay=D.decay,D.castShadow){const H=D.shadow,q=n.get(D);q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,q.shadowCameraNear=H.camera.near,q.shadowCameraFar=H.camera.far,i.pointShadow[v]=q,i.pointShadowMap[v]=Q,i.pointShadowMatrix[v]=D.shadow.matrix,y++}i.point[v]=N,v++}else if(D.isHemisphereLight){const N=e.get(D);N.skyColor.copy(D.color).multiplyScalar(j*w),N.groundColor.copy(D.groundColor).multiplyScalar(j*w),i.hemi[x]=N,x++}}f>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=p;const M=i.hash;(M.directionalLength!==m||M.pointLength!==v||M.spotLength!==g||M.rectAreaLength!==f||M.hemiLength!==x||M.numDirectionalShadows!==_||M.numPointShadows!==y||M.numSpotShadows!==C||M.numSpotMaps!==E||M.numLightProbes!==P)&&(i.directional.length=m,i.spot.length=g,i.rectArea.length=f,i.point.length=v,i.hemi.length=x,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=C+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,M.directionalLength=m,M.pointLength=v,M.spotLength=g,M.rectAreaLength=f,M.hemiLength=x,M.numDirectionalShadows=_,M.numPointShadows=y,M.numSpotShadows=C,M.numSpotMaps=E,M.numLightProbes=P,i.version=ob++)}function l(c,u){let h=0,d=0,p=0,m=0,v=0;const g=u.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const _=c[f];if(_.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(_.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function a0(t){const e=new lb(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(u){e.setup(n,u)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function cb(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new a0(t),e.set(r,[a])):s>=o.length?(a=new a0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class ub extends Qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=q1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hb extends Qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const db=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fb=`uniform sampler2D shadow_pass;
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
}`;function pb(t,e,n){let i=new lp;const r=new he,s=new he,o=new yt,a=new ub({depthPacking:Y1}),l=new hb,c={},u=n.maxTextureSize,h={[Pn]:un,[un]:Pn,[$t]:$t},d=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:db,fragmentShader:fb}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new Ft;m.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new et(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cx;let f=this.type;this.render=function(E,A,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const w=t.getRenderTarget(),M=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),B=t.state;B.setBlending(cr),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const D=f!==Si&&this.type===Si,z=f===Si&&this.type!==Si;for(let j=0,Z=E.length;j<Z;j++){const Q=E[j],N=Q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const H=N.getFrameExtents();if(r.multiply(H),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,N.mapSize.y=s.y)),N.map===null||D===!0||z===!0){const te=this.type!==Si?{minFilter:_n,magFilter:_n}:{};N.map!==null&&N.map.dispose(),N.map=new Xr(r.x,r.y,te),N.map.texture.name=Q.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const q=N.getViewportCount();for(let te=0;te<q;te++){const Se=N.getViewport(te);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),B.viewport(o),N.updateMatrices(Q,te),i=N.getFrustum(),y(A,P,N.camera,Q,this.type)}N.isPointLightShadow!==!0&&this.type===Si&&x(N,P),N.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(w,M,U)};function x(E,A){const P=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Xr(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(A,null,P,d,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(A,null,P,p,v,null)}function _(E,A,P,w){let M=null;const U=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)M=U;else if(M=P.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const B=M.uuid,D=A.uuid;let z=c[B];z===void 0&&(z={},c[B]=z);let j=z[D];j===void 0&&(j=M.clone(),z[D]=j,A.addEventListener("dispose",C)),M=j}if(M.visible=A.visible,M.wireframe=A.wireframe,w===Si?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=t.properties.get(M);B.light=P}return M}function y(E,A,P,w,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Si)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const D=e.update(E),z=E.material;if(Array.isArray(z)){const j=D.groups;for(let Z=0,Q=j.length;Z<Q;Z++){const N=j[Z],H=z[N.materialIndex];if(H&&H.visible){const q=_(E,H,w,M);E.onBeforeShadow(t,E,A,P,D,q,N),t.renderBufferDirect(P,null,D,q,E,N),E.onAfterShadow(t,E,A,P,D,q,N)}}}else if(z.visible){const j=_(E,z,w,M);E.onBeforeShadow(t,E,A,P,D,j,null),t.renderBufferDirect(P,null,D,j,E,null),E.onAfterShadow(t,E,A,P,D,j,null)}}const B=E.children;for(let D=0,z=B.length;D<z;D++)y(B[D],A,P,w,M)}function C(E){E.target.removeEventListener("dispose",C);for(const P in c){const w=c[P],M=E.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function mb(t){function e(){let O=!1;const se=new yt;let ee=null;const ye=new yt(0,0,0,0);return{setMask:function(Me){ee!==Me&&!O&&(t.colorMask(Me,Me,Me,Me),ee=Me)},setLocked:function(Me){O=Me},setClear:function(Me,Qe,ct,vt,Ot){Ot===!0&&(Me*=vt,Qe*=vt,ct*=vt),se.set(Me,Qe,ct,vt),ye.equals(se)===!1&&(t.clearColor(Me,Qe,ct,vt),ye.copy(se))},reset:function(){O=!1,ee=null,ye.set(-1,0,0,0)}}}function n(){let O=!1,se=null,ee=null,ye=null;return{setTest:function(Me){Me?de(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(Me){se!==Me&&!O&&(t.depthMask(Me),se=Me)},setFunc:function(Me){if(ee!==Me){switch(Me){case w1:t.depthFunc(t.NEVER);break;case E1:t.depthFunc(t.ALWAYS);break;case T1:t.depthFunc(t.LESS);break;case Vc:t.depthFunc(t.LEQUAL);break;case A1:t.depthFunc(t.EQUAL);break;case b1:t.depthFunc(t.GEQUAL);break;case C1:t.depthFunc(t.GREATER);break;case R1:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=Me}},setLocked:function(Me){O=Me},setClear:function(Me){ye!==Me&&(t.clearDepth(Me),ye=Me)},reset:function(){O=!1,se=null,ee=null,ye=null}}}function i(){let O=!1,se=null,ee=null,ye=null,Me=null,Qe=null,ct=null,vt=null,Ot=null;return{setTest:function(it){O||(it?de(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(it){se!==it&&!O&&(t.stencilMask(it),se=it)},setFunc:function(it,Dn,Vt){(ee!==it||ye!==Dn||Me!==Vt)&&(t.stencilFunc(it,Dn,Vt),ee=it,ye=Dn,Me=Vt)},setOp:function(it,Dn,Vt){(Qe!==it||ct!==Dn||vt!==Vt)&&(t.stencilOp(it,Dn,Vt),Qe=it,ct=Dn,vt=Vt)},setLocked:function(it){O=it},setClear:function(it){Ot!==it&&(t.clearStencil(it),Ot=it)},reset:function(){O=!1,se=null,ee=null,ye=null,Me=null,Qe=null,ct=null,vt=null,Ot=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],p=null,m=!1,v=null,g=null,f=null,x=null,_=null,y=null,C=null,E=new Ge(0,0,0),A=0,P=!1,w=null,M=null,U=null,B=null,D=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Z=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),j=Z>=1):Q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),j=Z>=2);let N=null,H={};const q=t.getParameter(t.SCISSOR_BOX),te=t.getParameter(t.VIEWPORT),Se=new yt().fromArray(q),Fe=new yt().fromArray(te);function G(O,se,ee,ye){const Me=new Uint8Array(4),Qe=t.createTexture();t.bindTexture(O,Qe),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ct=0;ct<ee;ct++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,ye,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(se+ct,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return Qe}const ie={};ie[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(t.DEPTH_TEST),s.setFunc(Vc),fe(!1),oe(Vm),de(t.CULL_FACE),ae(cr);function de(O){c[O]!==!0&&(t.enable(O),c[O]=!0)}function le(O){c[O]!==!1&&(t.disable(O),c[O]=!1)}function Oe(O,se){return u[O]!==se?(t.bindFramebuffer(O,se),u[O]=se,O===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=se),O===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=se),!0):!1}function Ve(O,se){let ee=d,ye=!1;if(O){ee=h.get(se),ee===void 0&&(ee=[],h.set(se,ee));const Me=O.textures;if(ee.length!==Me.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let Qe=0,ct=Me.length;Qe<ct;Qe++)ee[Qe]=t.COLOR_ATTACHMENT0+Qe;ee.length=Me.length,ye=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,ye=!0);ye&&t.drawBuffers(ee)}function F(O){return p!==O?(t.useProgram(O),p=O,!0):!1}const ze={[Ir]:t.FUNC_ADD,[o1]:t.FUNC_SUBTRACT,[a1]:t.FUNC_REVERSE_SUBTRACT};ze[l1]=t.MIN,ze[c1]=t.MAX;const Y={[u1]:t.ZERO,[h1]:t.ONE,[d1]:t.SRC_COLOR,[Wd]:t.SRC_ALPHA,[_1]:t.SRC_ALPHA_SATURATE,[g1]:t.DST_COLOR,[p1]:t.DST_ALPHA,[f1]:t.ONE_MINUS_SRC_COLOR,[$d]:t.ONE_MINUS_SRC_ALPHA,[v1]:t.ONE_MINUS_DST_COLOR,[m1]:t.ONE_MINUS_DST_ALPHA,[x1]:t.CONSTANT_COLOR,[y1]:t.ONE_MINUS_CONSTANT_COLOR,[S1]:t.CONSTANT_ALPHA,[M1]:t.ONE_MINUS_CONSTANT_ALPHA};function ae(O,se,ee,ye,Me,Qe,ct,vt,Ot,it){if(O===cr){m===!0&&(le(t.BLEND),m=!1);return}if(m===!1&&(de(t.BLEND),m=!0),O!==s1){if(O!==v||it!==P){if((g!==Ir||_!==Ir)&&(t.blendEquation(t.FUNC_ADD),g=Ir,_=Ir),it)switch(O){case js:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gm:t.blendFunc(t.ONE,t.ONE);break;case Wm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case $m:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case js:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Wm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case $m:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}f=null,x=null,y=null,C=null,E.set(0,0,0),A=0,v=O,P=it}return}Me=Me||se,Qe=Qe||ee,ct=ct||ye,(se!==g||Me!==_)&&(t.blendEquationSeparate(ze[se],ze[Me]),g=se,_=Me),(ee!==f||ye!==x||Qe!==y||ct!==C)&&(t.blendFuncSeparate(Y[ee],Y[ye],Y[Qe],Y[ct]),f=ee,x=ye,y=Qe,C=ct),(vt.equals(E)===!1||Ot!==A)&&(t.blendColor(vt.r,vt.g,vt.b,Ot),E.copy(vt),A=Ot),v=O,P=!1}function J(O,se){O.side===$t?le(t.CULL_FACE):de(t.CULL_FACE);let ee=O.side===un;se&&(ee=!ee),fe(ee),O.blending===js&&O.transparent===!1?ae(cr):ae(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const ye=O.stencilWrite;o.setTest(ye),ye&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ee(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function fe(O){w!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),w=O)}function oe(O){O!==i1?(de(t.CULL_FACE),O!==M&&(O===Vm?t.cullFace(t.BACK):O===r1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),M=O}function me(O){O!==U&&(j&&t.lineWidth(O),U=O)}function Ee(O,se,ee){O?(de(t.POLYGON_OFFSET_FILL),(B!==se||D!==ee)&&(t.polygonOffset(se,ee),B=se,D=ee)):le(t.POLYGON_OFFSET_FILL)}function R(O){O?de(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function T(O){O===void 0&&(O=t.TEXTURE0+z-1),N!==O&&(t.activeTexture(O),N=O)}function V(O,se,ee){ee===void 0&&(N===null?ee=t.TEXTURE0+z-1:ee=N);let ye=H[ee];ye===void 0&&(ye={type:void 0,texture:void 0},H[ee]=ye),(ye.type!==O||ye.texture!==se)&&(N!==ee&&(t.activeTexture(ee),N=ee),t.bindTexture(O,se||ie[O]),ye.type=O,ye.texture=se)}function K(){const O=H[N];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ne(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function je(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(O){Se.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),Se.copy(O))}function We(O){Fe.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),Fe.copy(O))}function Ke(O,se){let ee=l.get(se);ee===void 0&&(ee=new WeakMap,l.set(se,ee));let ye=ee.get(O);ye===void 0&&(ye=t.getUniformBlockIndex(se,O.name),ee.set(O,ye))}function gt(O,se){const ye=l.get(se).get(O);a.get(se)!==ye&&(t.uniformBlockBinding(se,ye,O.__bindingPointIndex),a.set(se,ye))}function $e(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,H={},u={},h=new WeakMap,d=[],p=null,m=!1,v=null,g=null,f=null,x=null,_=null,y=null,C=null,E=new Ge(0,0,0),A=0,P=!1,w=null,M=null,U=null,B=null,D=null,Se.set(0,0,t.canvas.width,t.canvas.height),Fe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:le,bindFramebuffer:Oe,drawBuffers:Ve,useProgram:F,setBlending:ae,setMaterial:J,setFlipSided:fe,setCullFace:oe,setLineWidth:me,setPolygonOffset:Ee,setScissorTest:R,activeTexture:T,bindTexture:V,unbindTexture:K,compressedTexImage2D:ne,compressedTexImage3D:re,texImage2D:je,texImage3D:Ue,updateUBOMapping:Ke,uniformBlockBinding:gt,texStorage2D:pe,texStorage3D:Le,texSubImage2D:we,texSubImage3D:ve,compressedTexSubImage2D:ge,compressedTexSubImage3D:He,scissor:be,viewport:We,reset:$e}}function gb(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,T){return p?new OffscreenCanvas(R,T):za("canvas")}function v(R,T,V){let K=1;const ne=Ee(R);if((ne.width>V||ne.height>V)&&(K=V/Math.max(ne.width,ne.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const re=Math.floor(K*ne.width),we=Math.floor(K*ne.height);h===void 0&&(h=m(re,we));const ve=T?m(re,we):h;return ve.width=re,ve.height=we,ve.getContext("2d").drawImage(R,0,0,re,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+re+"x"+we+")."),ve}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function g(R){return R.generateMipmaps&&R.minFilter!==_n&&R.minFilter!==nn}function f(R){t.generateMipmap(R)}function x(R,T,V,K,ne=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re=T;if(T===t.RED&&(V===t.FLOAT&&(re=t.R32F),V===t.HALF_FLOAT&&(re=t.R16F),V===t.UNSIGNED_BYTE&&(re=t.R8)),T===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(re=t.R8UI),V===t.UNSIGNED_SHORT&&(re=t.R16UI),V===t.UNSIGNED_INT&&(re=t.R32UI),V===t.BYTE&&(re=t.R8I),V===t.SHORT&&(re=t.R16I),V===t.INT&&(re=t.R32I)),T===t.RG&&(V===t.FLOAT&&(re=t.RG32F),V===t.HALF_FLOAT&&(re=t.RG16F),V===t.UNSIGNED_BYTE&&(re=t.RG8)),T===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(re=t.RG8UI),V===t.UNSIGNED_SHORT&&(re=t.RG16UI),V===t.UNSIGNED_INT&&(re=t.RG32UI),V===t.BYTE&&(re=t.RG8I),V===t.SHORT&&(re=t.RG16I),V===t.INT&&(re=t.RG32I)),T===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&(re=t.RGB9_E5),T===t.RGBA){const we=ne?Gc:at.getTransfer(K);V===t.FLOAT&&(re=t.RGBA32F),V===t.HALF_FLOAT&&(re=t.RGBA16F),V===t.UNSIGNED_BYTE&&(re=we===ft?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function _(R,T){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==_n&&R.minFilter!==nn?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function y(R){const T=R.target;T.removeEventListener("dispose",y),E(T),T.isVideoTexture&&u.delete(T)}function C(R){const T=R.target;T.removeEventListener("dispose",C),P(T)}function E(R){const T=i.get(R);if(T.__webglInit===void 0)return;const V=R.source,K=d.get(V);if(K){const ne=K[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&A(R),Object.keys(K).length===0&&d.delete(V)}i.remove(R)}function A(R){const T=i.get(R);t.deleteTexture(T.__webglTexture);const V=R.source,K=d.get(V);delete K[T.__cacheKey],o.memory.textures--}function P(R){const T=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(T.__webglFramebuffer[K]))for(let ne=0;ne<T.__webglFramebuffer[K].length;ne++)t.deleteFramebuffer(T.__webglFramebuffer[K][ne]);else t.deleteFramebuffer(T.__webglFramebuffer[K]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[K])}else{if(Array.isArray(T.__webglFramebuffer))for(let K=0;K<T.__webglFramebuffer.length;K++)t.deleteFramebuffer(T.__webglFramebuffer[K]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let K=0;K<T.__webglColorRenderbuffer.length;K++)T.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[K]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=R.textures;for(let K=0,ne=V.length;K<ne;K++){const re=i.get(V[K]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(V[K])}i.remove(R)}let w=0;function M(){w=0}function U(){const R=w;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),w+=1,R}function B(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function D(R,T){const V=i.get(R);if(R.isVideoTexture&&oe(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(V,R,T);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+T)}function z(R,T){const V=i.get(R);if(R.version>0&&V.__version!==R.version){Se(V,R,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+T)}function j(R,T){const V=i.get(R);if(R.version>0&&V.__version!==R.version){Se(V,R,T);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+T)}function Z(R,T){const V=i.get(R);if(R.version>0&&V.__version!==R.version){Fe(V,R,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+T)}const Q={[Fi]:t.REPEAT,[li]:t.CLAMP_TO_EDGE,[qd]:t.MIRRORED_REPEAT},N={[_n]:t.NEAREST,[k1]:t.NEAREST_MIPMAP_NEAREST,[_l]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[nh]:t.LINEAR_MIPMAP_NEAREST,[bi]:t.LINEAR_MIPMAP_LINEAR},H={[K1]:t.NEVER,[iw]:t.ALWAYS,[J1]:t.LESS,[wx]:t.LEQUAL,[Q1]:t.EQUAL,[nw]:t.GEQUAL,[ew]:t.GREATER,[tw]:t.NOTEQUAL};function q(R,T){if(T.type===Ci&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===nn||T.magFilter===nh||T.magFilter===_l||T.magFilter===bi||T.minFilter===nn||T.minFilter===nh||T.minFilter===_l||T.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,Q[T.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,Q[T.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,Q[T.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,N[T.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,N[T.minFilter]),T.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,H[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===_n||T.minFilter!==_l&&T.minFilter!==bi||T.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function te(R,T){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",y));const K=T.source;let ne=d.get(K);ne===void 0&&(ne={},d.set(K,ne));const re=B(T);if(re!==R.__cacheKey){ne[re]===void 0&&(ne[re]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ne[re].usedTimes++;const we=ne[R.__cacheKey];we!==void 0&&(ne[R.__cacheKey].usedTimes--,we.usedTimes===0&&A(T)),R.__cacheKey=re,R.__webglTexture=ne[re].texture}return V}function Se(R,T,V){let K=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(K=t.TEXTURE_3D);const ne=te(R,T),re=T.source;n.bindTexture(K,R.__webglTexture,t.TEXTURE0+V);const we=i.get(re);if(re.version!==we.__version||ne===!0){n.activeTexture(t.TEXTURE0+V);const ve=at.getPrimaries(at.workingColorSpace),ge=T.colorSpace===Jn?null:at.getPrimaries(T.colorSpace),He=T.colorSpace===Jn||ve===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let pe=v(T.image,!1,r.maxTextureSize);pe=me(T,pe);const Le=s.convert(T.format,T.colorSpace),je=s.convert(T.type);let Ue=x(T.internalFormat,Le,je,T.colorSpace,T.isVideoTexture);q(K,T);let be;const We=T.mipmaps,Ke=T.isVideoTexture!==!0,gt=we.__version===void 0||ne===!0,$e=re.dataReady,O=_(T,pe);if(T.isDepthTexture)Ue=t.DEPTH_COMPONENT16,T.type===Ci?Ue=t.DEPTH_COMPONENT32F:T.type===ao?Ue=t.DEPTH_COMPONENT24:T.type===Ya&&(Ue=t.DEPTH24_STENCIL8),gt&&(Ke?n.texStorage2D(t.TEXTURE_2D,1,Ue,pe.width,pe.height):n.texImage2D(t.TEXTURE_2D,0,Ue,pe.width,pe.height,0,Le,je,null));else if(T.isDataTexture)if(We.length>0){Ke&&gt&&n.texStorage2D(t.TEXTURE_2D,O,Ue,We[0].width,We[0].height);for(let se=0,ee=We.length;se<ee;se++)be=We[se],Ke?$e&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,be.width,be.height,Le,je,be.data):n.texImage2D(t.TEXTURE_2D,se,Ue,be.width,be.height,0,Le,je,be.data);T.generateMipmaps=!1}else Ke?(gt&&n.texStorage2D(t.TEXTURE_2D,O,Ue,pe.width,pe.height),$e&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe.width,pe.height,Le,je,pe.data)):n.texImage2D(t.TEXTURE_2D,0,Ue,pe.width,pe.height,0,Le,je,pe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ke&&gt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,O,Ue,We[0].width,We[0].height,pe.depth);for(let se=0,ee=We.length;se<ee;se++)be=We[se],T.format!==ci?Le!==null?Ke?$e&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,be.width,be.height,pe.depth,Le,be.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Ue,be.width,be.height,pe.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?$e&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,be.width,be.height,pe.depth,Le,je,be.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Ue,be.width,be.height,pe.depth,0,Le,je,be.data)}else{Ke&&gt&&n.texStorage2D(t.TEXTURE_2D,O,Ue,We[0].width,We[0].height);for(let se=0,ee=We.length;se<ee;se++)be=We[se],T.format!==ci?Le!==null?Ke?$e&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,be.width,be.height,Le,be.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Ue,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?$e&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,be.width,be.height,Le,je,be.data):n.texImage2D(t.TEXTURE_2D,se,Ue,be.width,be.height,0,Le,je,be.data)}else if(T.isDataArrayTexture)Ke?(gt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,O,Ue,pe.width,pe.height,pe.depth),$e&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Le,je,pe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,pe.width,pe.height,pe.depth,0,Le,je,pe.data);else if(T.isData3DTexture)Ke?(gt&&n.texStorage3D(t.TEXTURE_3D,O,Ue,pe.width,pe.height,pe.depth),$e&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Le,je,pe.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,pe.width,pe.height,pe.depth,0,Le,je,pe.data);else if(T.isFramebufferTexture){if(gt)if(Ke)n.texStorage2D(t.TEXTURE_2D,O,Ue,pe.width,pe.height);else{let se=pe.width,ee=pe.height;for(let ye=0;ye<O;ye++)n.texImage2D(t.TEXTURE_2D,ye,Ue,se,ee,0,Le,je,null),se>>=1,ee>>=1}}else if(We.length>0){if(Ke&&gt){const se=Ee(We[0]);n.texStorage2D(t.TEXTURE_2D,O,Ue,se.width,se.height)}for(let se=0,ee=We.length;se<ee;se++)be=We[se],Ke?$e&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Le,je,be):n.texImage2D(t.TEXTURE_2D,se,Ue,Le,je,be);T.generateMipmaps=!1}else if(Ke){if(gt){const se=Ee(pe);n.texStorage2D(t.TEXTURE_2D,O,Ue,se.width,se.height)}$e&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Le,je,pe)}else n.texImage2D(t.TEXTURE_2D,0,Ue,Le,je,pe);g(T)&&f(K),we.__version=re.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Fe(R,T,V){if(T.image.length!==6)return;const K=te(R,T),ne=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+V);const re=i.get(ne);if(ne.version!==re.__version||K===!0){n.activeTexture(t.TEXTURE0+V);const we=at.getPrimaries(at.workingColorSpace),ve=T.colorSpace===Jn?null:at.getPrimaries(T.colorSpace),ge=T.colorSpace===Jn||we===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const He=T.isCompressedTexture||T.image[0].isCompressedTexture,pe=T.image[0]&&T.image[0].isDataTexture,Le=[];for(let ee=0;ee<6;ee++)!He&&!pe?Le[ee]=v(T.image[ee],!0,r.maxCubemapSize):Le[ee]=pe?T.image[ee].image:T.image[ee],Le[ee]=me(T,Le[ee]);const je=Le[0],Ue=s.convert(T.format,T.colorSpace),be=s.convert(T.type),We=x(T.internalFormat,Ue,be,T.colorSpace),Ke=T.isVideoTexture!==!0,gt=re.__version===void 0||K===!0,$e=ne.dataReady;let O=_(T,je);q(t.TEXTURE_CUBE_MAP,T);let se;if(He){Ke&&gt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,O,We,je.width,je.height);for(let ee=0;ee<6;ee++){se=Le[ee].mipmaps;for(let ye=0;ye<se.length;ye++){const Me=se[ye];T.format!==ci?Ue!==null?Ke?$e&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,0,0,Me.width,Me.height,Ue,Me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,We,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?$e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,0,0,Me.width,Me.height,Ue,be,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,We,Me.width,Me.height,0,Ue,be,Me.data)}}}else{if(se=T.mipmaps,Ke&&gt){se.length>0&&O++;const ee=Ee(Le[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,O,We,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(pe){Ke?$e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Le[ee].width,Le[ee].height,Ue,be,Le[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,We,Le[ee].width,Le[ee].height,0,Ue,be,Le[ee].data);for(let ye=0;ye<se.length;ye++){const Qe=se[ye].image[ee].image;Ke?$e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,0,0,Qe.width,Qe.height,Ue,be,Qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,We,Qe.width,Qe.height,0,Ue,be,Qe.data)}}else{Ke?$e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ue,be,Le[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,We,Ue,be,Le[ee]);for(let ye=0;ye<se.length;ye++){const Me=se[ye];Ke?$e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,0,0,Ue,be,Me.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,We,Ue,be,Me.image[ee])}}}g(T)&&f(t.TEXTURE_CUBE_MAP),re.__version=ne.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function G(R,T,V,K,ne,re){const we=s.convert(V.format,V.colorSpace),ve=s.convert(V.type),ge=x(V.internalFormat,we,ve,V.colorSpace);if(!i.get(T).__hasExternalTextures){const pe=Math.max(1,T.width>>re),Le=Math.max(1,T.height>>re);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,re,ge,pe,Le,T.depth,0,we,ve,null):n.texImage2D(ne,re,ge,pe,Le,0,we,ve,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),fe(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,ne,i.get(V).__webglTexture,0,J(T)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,ne,i.get(V).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(R,T,V){if(t.bindRenderbuffer(t.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let K=t.DEPTH_COMPONENT24;if(V||fe(T)){const ne=T.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Ci?K=t.DEPTH_COMPONENT32F:ne.type===ao&&(K=t.DEPTH_COMPONENT24));const re=J(T);fe(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,K,T.width,T.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,re,K,T.width,T.height)}else t.renderbufferStorage(t.RENDERBUFFER,K,T.width,T.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const K=J(T);V&&fe(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,K,t.DEPTH24_STENCIL8,T.width,T.height):fe(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,K,t.DEPTH24_STENCIL8,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const K=T.textures;for(let ne=0;ne<K.length;ne++){const re=K[ne],we=s.convert(re.format,re.colorSpace),ve=s.convert(re.type),ge=x(re.internalFormat,we,ve,re.colorSpace),He=J(T);V&&fe(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,He,ge,T.width,T.height):fe(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He,ge,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ge,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),D(T.depthTexture,0);const K=i.get(T.depthTexture).__webglTexture,ne=J(T);if(T.depthTexture.format===Xs)fe(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(T.depthTexture.format===Oa)fe(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function le(R){const T=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");de(T.__webglFramebuffer,R)}else if(V){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]=t.createRenderbuffer(),ie(T.__webglDepthbuffer[K],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),ie(T.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(R,T,V){const K=i.get(R);T!==void 0&&G(K.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&le(R)}function Ve(R){const T=R.texture,V=i.get(R),K=i.get(T);R.addEventListener("dispose",C);const ne=R.textures,re=R.isWebGLCubeRenderTarget===!0,we=ne.length>1;if(we||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=T.version,o.memory.textures++),re){V.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[ve]=[];for(let ge=0;ge<T.mipmaps.length;ge++)V.__webglFramebuffer[ve][ge]=t.createFramebuffer()}else V.__webglFramebuffer[ve]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let ve=0;ve<T.mipmaps.length;ve++)V.__webglFramebuffer[ve]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(we)for(let ve=0,ge=ne.length;ve<ge;ve++){const He=i.get(ne[ve]);He.__webglTexture===void 0&&(He.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&fe(R)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ve=0;ve<ne.length;ve++){const ge=ne[ve];V.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[ve]);const He=s.convert(ge.format,ge.colorSpace),pe=s.convert(ge.type),Le=x(ge.internalFormat,He,pe,ge.colorSpace,R.isXRRenderTarget===!0),je=J(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,je,Le,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,V.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),ie(V.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),q(t.TEXTURE_CUBE_MAP,T);for(let ve=0;ve<6;ve++)if(T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)G(V.__webglFramebuffer[ve][ge],R,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ge);else G(V.__webglFramebuffer[ve],R,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);g(T)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let ve=0,ge=ne.length;ve<ge;ve++){const He=ne[ve],pe=i.get(He);n.bindTexture(t.TEXTURE_2D,pe.__webglTexture),q(t.TEXTURE_2D,He),G(V.__webglFramebuffer,R,He,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,0),g(He)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let ve=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ve=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,K.__webglTexture),q(ve,T),T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)G(V.__webglFramebuffer[ge],R,T,t.COLOR_ATTACHMENT0,ve,ge);else G(V.__webglFramebuffer,R,T,t.COLOR_ATTACHMENT0,ve,0);g(T)&&f(ve),n.unbindTexture()}R.depthBuffer&&le(R)}function F(R){const T=R.textures;for(let V=0,K=T.length;V<K;V++){const ne=T[V];if(g(ne)){const re=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,we=i.get(ne).__webglTexture;n.bindTexture(re,we),f(re),n.unbindTexture()}}}const ze=[],Y=[];function ae(R){if(R.samples>0){if(fe(R)===!1){const T=R.textures,V=R.width,K=R.height;let ne=t.COLOR_BUFFER_BIT;const re=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(R),ve=T.length>1;if(ve)for(let ge=0;ge<T.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ge=0;ge<T.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),ve){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[ge]);const He=i.get(T[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,He,0)}t.blitFramebuffer(0,0,V,K,0,0,V,K,ne,t.NEAREST),l===!0&&(ze.length=0,Y.length=0,ze.push(t.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ze.push(re),Y.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Y)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ze))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let ge=0;ge<T.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,we.__webglColorRenderbuffer[ge]);const He=i.get(T[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,He,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const T=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function J(R){return Math.min(r.maxSamples,R.samples)}function fe(R){const T=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function oe(R){const T=o.render.frame;u.get(R)!==T&&(u.set(R,T),R.update())}function me(R,T){const V=R.colorSpace,K=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==vr&&V!==Jn&&(at.getTransfer(V)===ft?(K!==ci||ne!==fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}function Ee(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=M,this.setTexture2D=D,this.setTexture2DArray=z,this.setTexture3D=j,this.setTextureCube=Z,this.rebindTextures=Oe,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=G,this.useMultisampledRTT=fe}function vb(t,e){function n(i,r=Jn){let s;const o=at.getTransfer(r);if(i===fr)return t.UNSIGNED_BYTE;if(i===gx)return t.UNSIGNED_SHORT_4_4_4_4;if(i===vx)return t.UNSIGNED_SHORT_5_5_5_1;if(i===H1)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===z1)return t.BYTE;if(i===B1)return t.SHORT;if(i===px)return t.UNSIGNED_SHORT;if(i===mx)return t.INT;if(i===ao)return t.UNSIGNED_INT;if(i===Ci)return t.FLOAT;if(i===gu)return t.HALF_FLOAT;if(i===V1)return t.ALPHA;if(i===G1)return t.RGB;if(i===ci)return t.RGBA;if(i===W1)return t.LUMINANCE;if(i===$1)return t.LUMINANCE_ALPHA;if(i===Xs)return t.DEPTH_COMPONENT;if(i===Oa)return t.DEPTH_STENCIL;if(i===_x)return t.RED;if(i===xx)return t.RED_INTEGER;if(i===j1)return t.RG;if(i===yx)return t.RG_INTEGER;if(i===Sx)return t.RGBA_INTEGER;if(i===ih||i===rh||i===sh||i===oh)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ih)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ih)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rh)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sh)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oh)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jm||i===Xm||i===qm||i===Ym)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ym)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zm||i===Km||i===Jm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Zm||i===Km)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Jm)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Qm||i===eg||i===tg||i===ng||i===ig||i===rg||i===sg||i===og||i===ag||i===lg||i===cg||i===ug||i===hg||i===dg)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Qm)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===eg)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tg)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ng)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ig)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rg)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sg)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===og)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ag)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lg)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cg)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ug)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hg)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dg)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ah||i===fg||i===pg)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ah)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fg)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pg)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===X1||i===mg||i===gg||i===vg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ah)return s.COMPRESSED_RED_RGTC1_EXT;if(i===mg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gg)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ya?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class _b extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zn extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xb={type:"move"};class Nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const g=n.getJointPose(v,i),f=this._getHandJoint(c,v);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new zn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const yb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sb=`
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

}`;class Mb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Xt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Oi({vertexShader:yb,fragmentShader:Sb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new et(new Li(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class wb extends po{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,m=null;const v=new Mb,g=n.getContextAttributes();let f=null,x=null;const _=[],y=[],C=new he;let E=null;const A=new gn;A.layers.enable(1),A.viewport=new yt;const P=new gn;P.layers.enable(2),P.viewport=new yt;const w=[A,P],M=new _b;M.layers.enable(1),M.layers.enable(2);let U=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ie=_[G];return ie===void 0&&(ie=new Nh,_[G]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(G){let ie=_[G];return ie===void 0&&(ie=new Nh,_[G]=ie),ie.getGripSpace()},this.getHand=function(G){let ie=_[G];return ie===void 0&&(ie=new Nh,_[G]=ie),ie.getHandSpace()};function D(G){const ie=y.indexOf(G.inputSource);if(ie===-1)return;const de=_[ie];de!==void 0&&(de.update(G.inputSource,G.frame,c||o),de.dispatchEvent({type:G.type,data:G.inputSource}))}function z(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",j);for(let G=0;G<_.length;G++){const ie=y[G];ie!==null&&(y[G]=null,_[G].disconnect(ie))}U=null,B=null,v.reset(),e.setRenderTarget(f),p=null,d=null,h=null,r=null,x=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",z),r.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Xr(p.framebufferWidth,p.framebufferHeight,{format:ci,type:fr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ie=null,de=null,le=null;g.depth&&(le=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=g.stencil?Oa:Xs,de=g.stencil?Ya:ao);const Oe={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Oe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Xr(d.textureWidth,d.textureHeight,{format:ci,type:fr,depthTexture:new kx(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(G){for(let ie=0;ie<G.removed.length;ie++){const de=G.removed[ie],le=y.indexOf(de);le>=0&&(y[le]=null,_[le].disconnect(de))}for(let ie=0;ie<G.added.length;ie++){const de=G.added[ie];let le=y.indexOf(de);if(le===-1){for(let Ve=0;Ve<_.length;Ve++)if(Ve>=y.length){y.push(de),le=Ve;break}else if(y[Ve]===null){y[Ve]=de,le=Ve;break}if(le===-1)break}const Oe=_[le];Oe&&Oe.connect(de)}}const Z=new I,Q=new I;function N(G,ie,de){Z.setFromMatrixPosition(ie.matrixWorld),Q.setFromMatrixPosition(de.matrixWorld);const le=Z.distanceTo(Q),Oe=ie.projectionMatrix.elements,Ve=de.projectionMatrix.elements,F=Oe[14]/(Oe[10]-1),ze=Oe[14]/(Oe[10]+1),Y=(Oe[9]+1)/Oe[5],ae=(Oe[9]-1)/Oe[5],J=(Oe[8]-1)/Oe[0],fe=(Ve[8]+1)/Ve[0],oe=F*J,me=F*fe,Ee=le/(-J+fe),R=Ee*-J;ie.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(R),G.translateZ(Ee),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const T=F+Ee,V=ze+Ee,K=oe-R,ne=me+(le-R),re=Y*ze/V*T,we=ae*ze/V*T;G.projectionMatrix.makePerspective(K,ne,re,we,T,V),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function H(G,ie){ie===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ie.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;v.texture!==null&&(G.near=v.depthNear,G.far=v.depthFar),M.near=P.near=A.near=G.near,M.far=P.far=A.far=G.far,(U!==M.near||B!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,B=M.far,A.near=U,A.far=B,P.near=U,P.far=B,A.updateProjectionMatrix(),P.updateProjectionMatrix(),G.updateProjectionMatrix());const ie=G.parent,de=M.cameras;H(M,ie);for(let le=0;le<de.length;le++)H(de[le],ie);de.length===2?N(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),q(G,M,ie)};function q(G,ie,de){de===null?G.matrix.copy(ie.matrixWorld):(G.matrix.copy(de.matrixWorld),G.matrix.invert(),G.matrix.multiply(ie.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ie.projectionMatrix),G.projectionMatrixInverse.copy(ie.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ka*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null};let te=null;function Se(G,ie){if(u=ie.getViewerPose(c||o),m=ie,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let le=!1;de.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let Ve=0;Ve<de.length;Ve++){const F=de[Ve];let ze=null;if(p!==null)ze=p.getViewport(F);else{const ae=h.getViewSubImage(d,F);ze=ae.viewport,Ve===0&&(e.setRenderTargetTextures(x,ae.colorTexture,d.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(x))}let Y=w[Ve];Y===void 0&&(Y=new gn,Y.layers.enable(Ve),Y.viewport=new yt,w[Ve]=Y),Y.matrix.fromArray(F.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(F.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(ze.x,ze.y,ze.width,ze.height),Ve===0&&(M.matrix.copy(Y.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(Y)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Ve=h.getDepthInformation(de[0]);Ve&&Ve.isValid&&Ve.texture&&v.init(e,Ve,r.renderState)}}for(let de=0;de<_.length;de++){const le=y[de],Oe=_[de];le!==null&&Oe!==void 0&&Oe.update(le,ie,c||o)}v.render(e,M),te&&te(G,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),m=null}const Fe=new Fx;Fe.setAnimationLoop(Se),this.setAnimationLoop=function(G){te=G},this.dispose=function(){}}}const Cr=new di,Eb=new lt;function Tb(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Nx(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,x,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(g,f):f.isMeshToonMaterial?(s(g,f),h(g,f)):f.isMeshPhongMaterial?(s(g,f),u(g,f)):f.isMeshStandardMaterial?(s(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,y)):f.isMeshMatcapMaterial?(s(g,f),m(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),v(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,x,_):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===un&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===un&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const x=e.get(f),_=x.envMap,y=x.envMapRotation;if(_&&(g.envMap.value=_,Cr.copy(y),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),g.envMapRotation.value.setFromMatrix4(Eb.makeRotationFromEuler(Cr)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap){g.lightMap.value=f.lightMap;const C=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=f.lightMapIntensity*C,n(f.lightMap,g.lightMapTransform)}f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,x,_){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*x,g.scale.value=_*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,x){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function v(g,f){const x=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ab(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const y=_.program;i.uniformBlockBinding(x,y)}function c(x,_){let y=r[x.id];y===void 0&&(m(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",g));const C=_.program;i.updateUBOMapping(x,C);const E=e.render.frame;s[x.id]!==E&&(d(x),s[x.id]=E)}function u(x){const _=h();x.__bindingPointIndex=_;const y=t.createBuffer(),C=x.__size,E=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=r[x.id],y=x.uniforms,C=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let E=0,A=y.length;E<A;E++){const P=Array.isArray(y[E])?y[E]:[y[E]];for(let w=0,M=P.length;w<M;w++){const U=P[w];if(p(U,E,w,C)===!0){const B=U.__offset,D=Array.isArray(U.value)?U.value:[U.value];let z=0;for(let j=0;j<D.length;j++){const Z=D[j],Q=v(Z);typeof Z=="number"||typeof Z=="boolean"?(U.__data[0]=Z,t.bufferSubData(t.UNIFORM_BUFFER,B+z,U.__data)):Z.isMatrix3?(U.__data[0]=Z.elements[0],U.__data[1]=Z.elements[1],U.__data[2]=Z.elements[2],U.__data[3]=0,U.__data[4]=Z.elements[3],U.__data[5]=Z.elements[4],U.__data[6]=Z.elements[5],U.__data[7]=0,U.__data[8]=Z.elements[6],U.__data[9]=Z.elements[7],U.__data[10]=Z.elements[8],U.__data[11]=0):(Z.toArray(U.__data,z),z+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,_,y,C){const E=x.value,A=_+"_"+y;if(C[A]===void 0)return typeof E=="number"||typeof E=="boolean"?C[A]=E:C[A]=E.clone(),!0;{const P=C[A];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return C[A]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function m(x){const _=x.uniforms;let y=0;const C=16;for(let A=0,P=_.length;A<P;A++){const w=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,U=w.length;M<U;M++){const B=w[M],D=Array.isArray(B.value)?B.value:[B.value];for(let z=0,j=D.length;z<j;z++){const Z=D[z],Q=v(Z),N=y%C;N!==0&&C-N<Q.boundary&&(y+=C-N),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=Q.storage}}}const E=y%C;return E>0&&(y+=C-E),x.__size=y,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function g(x){const _=x.target;_.removeEventListener("dispose",g);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Wx{constructor(e={}){const{canvas:n=yw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),m=new Int32Array(4);let v=null,g=null;const f=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this._useLegacyLights=!1,this.toneMapping=ur,this.toneMappingExposure=1;const _=this;let y=!1,C=0,E=0,A=null,P=-1,w=null;const M=new yt,U=new yt;let B=null;const D=new Ge(0);let z=0,j=n.width,Z=n.height,Q=1,N=null,H=null;const q=new yt(0,0,j,Z),te=new yt(0,0,j,Z);let Se=!1;const Fe=new lp;let G=!1,ie=!1;const de=new lt,le=new I,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return A===null?Q:1}let F=i;function ze(b,k){return n.getContext(b,k)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sp}`),n.addEventListener("webglcontextlost",O,!1),n.addEventListener("webglcontextrestored",se,!1),n.addEventListener("webglcontextcreationerror",ee,!1),F===null){const k="webgl2";if(F=ze(k,b),F===null)throw ze(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Y,ae,J,fe,oe,me,Ee,R,T,V,K,ne,re,we,ve,ge,He,pe,Le,je,Ue,be,We,Ke;function gt(){Y=new UA(F),Y.init(),be=new vb(F,Y),ae=new RA(F,Y,e,be),J=new mb(F),fe=new kA(F),oe=new tb,me=new gb(F,Y,J,oe,ae,be,fe),Ee=new LA(_),R=new IA(_),T=new $w(F),We=new bA(F,T),V=new FA(F,T,fe,We),K=new BA(F,V,T,fe),Le=new zA(F,ae,me),ge=new PA(oe),ne=new eb(_,Ee,R,Y,ae,We,ge),re=new Tb(_,oe),we=new ib,ve=new cb(Y),pe=new AA(_,Ee,R,J,K,d,l),He=new pb(_,K,ae),Ke=new Ab(F,fe,ae,J),je=new CA(F,Y,fe),Ue=new OA(F,Y,fe),fe.programs=ne.programs,_.capabilities=ae,_.extensions=Y,_.properties=oe,_.renderLists=we,_.shadowMap=He,_.state=J,_.info=fe}gt();const $e=new wb(_,F);this.xr=$e,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=Y.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Y.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(j,Z,!1))},this.getSize=function(b){return b.set(j,Z)},this.setSize=function(b,k,X=!0){if($e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=b,Z=k,n.width=Math.floor(b*Q),n.height=Math.floor(k*Q),X===!0&&(n.style.width=b+"px",n.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(j*Q,Z*Q).floor()},this.setDrawingBufferSize=function(b,k,X){j=b,Z=k,Q=X,n.width=Math.floor(b*X),n.height=Math.floor(k*X),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(M)},this.getViewport=function(b){return b.copy(q)},this.setViewport=function(b,k,X,W){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,k,X,W),J.viewport(M.copy(q).multiplyScalar(Q).round())},this.getScissor=function(b){return b.copy(te)},this.setScissor=function(b,k,X,W){b.isVector4?te.set(b.x,b.y,b.z,b.w):te.set(b,k,X,W),J.scissor(U.copy(te).multiplyScalar(Q).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(b){J.setScissorTest(Se=b)},this.setOpaqueSort=function(b){N=b},this.setTransparentSort=function(b){H=b},this.getClearColor=function(b){return b.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(b=!0,k=!0,X=!0){let W=0;if(b){let $=!1;if(A!==null){const _e=A.texture.format;$=_e===Sx||_e===yx||_e===xx}if($){const _e=A.texture.type,Re=_e===fr||_e===ao||_e===px||_e===Ya||_e===gx||_e===vx,Ne=pe.getClearColor(),Ie=pe.getClearAlpha(),Be=Ne.r,L=Ne.g,ue=Ne.b;Re?(p[0]=Be,p[1]=L,p[2]=ue,p[3]=Ie,F.clearBufferuiv(F.COLOR,0,p)):(m[0]=Be,m[1]=L,m[2]=ue,m[3]=Ie,F.clearBufferiv(F.COLOR,0,m))}else W|=F.COLOR_BUFFER_BIT}k&&(W|=F.DEPTH_BUFFER_BIT),X&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",O,!1),n.removeEventListener("webglcontextrestored",se,!1),n.removeEventListener("webglcontextcreationerror",ee,!1),we.dispose(),ve.dispose(),oe.dispose(),Ee.dispose(),R.dispose(),K.dispose(),We.dispose(),Ke.dispose(),ne.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",it),$e.removeEventListener("sessionend",Dn),Vt.stop()};function O(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=fe.autoReset,k=He.enabled,X=He.autoUpdate,W=He.needsUpdate,$=He.type;gt(),fe.autoReset=b,He.enabled=k,He.autoUpdate=X,He.needsUpdate=W,He.type=$}function ee(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ye(b){const k=b.target;k.removeEventListener("dispose",ye),Me(k)}function Me(b){Qe(b),oe.remove(b)}function Qe(b){const k=oe.get(b).programs;k!==void 0&&(k.forEach(function(X){ne.releaseProgram(X)}),b.isShaderMaterial&&ne.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,X,W,$,_e){k===null&&(k=Oe);const Re=$.isMesh&&$.matrixWorld.determinant()<0,Ne=Ja(b,k,X,W,$);J.setMaterial(W,Re);let Ie=X.index,Be=1;if(W.wireframe===!0){if(Ie=V.getWireframeAttribute(X),Ie===void 0)return;Be=2}const L=X.drawRange,ue=X.attributes.position;let De=L.start*Be,rt=(L.start+L.count)*Be;_e!==null&&(De=Math.max(De,_e.start*Be),rt=Math.min(rt,(_e.start+_e.count)*Be)),Ie!==null?(De=Math.max(De,0),rt=Math.min(rt,Ie.count)):ue!=null&&(De=Math.max(De,0),rt=Math.min(rt,ue.count));const At=rt-De;if(At<0||At===1/0)return;We.setup($,W,Ne,X,Ie);let fn,Xe=je;if(Ie!==null&&(fn=T.get(Ie),Xe=Ue,Xe.setIndex(fn)),$.isMesh)W.wireframe===!0?(J.setLineWidth(W.wireframeLinewidth*Ve()),Xe.setMode(F.LINES)):Xe.setMode(F.TRIANGLES);else if($.isLine){let ke=W.linewidth;ke===void 0&&(ke=1),J.setLineWidth(ke*Ve()),$.isLineSegments?Xe.setMode(F.LINES):$.isLineLoop?Xe.setMode(F.LINE_LOOP):Xe.setMode(F.LINE_STRIP)}else $.isPoints?Xe.setMode(F.POINTS):$.isSprite&&Xe.setMode(F.TRIANGLES);if($.isBatchedMesh)$._multiDrawInstances!==null?Xe.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances):Xe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)Xe.renderInstances(De,At,$.count);else if(X.isInstancedBufferGeometry){const ke=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Mo=Math.min(X.instanceCount,ke);Xe.renderInstances(De,At,Mo)}else Xe.render(De,At)};function ct(b,k,X){b.transparent===!0&&b.side===$t&&b.forceSinglePass===!1?(b.side=un,b.needsUpdate=!0,Sr(b,k,X),b.side=Pn,b.needsUpdate=!0,Sr(b,k,X),b.side=$t):Sr(b,k,X)}this.compile=function(b,k,X=null){X===null&&(X=b),g=ve.get(X),g.init(k),x.push(g),X.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),b!==X&&b.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),g.setupLights(_._useLegacyLights);const W=new Set;return b.traverse(function($){const _e=$.material;if(_e)if(Array.isArray(_e))for(let Re=0;Re<_e.length;Re++){const Ne=_e[Re];ct(Ne,X,$),W.add(Ne)}else ct(_e,X,$),W.add(_e)}),x.pop(),g=null,W},this.compileAsync=function(b,k,X=null){const W=this.compile(b,k,X);return new Promise($=>{function _e(){if(W.forEach(function(Re){oe.get(Re).currentProgram.isReady()&&W.delete(Re)}),W.size===0){$(b);return}setTimeout(_e,10)}Y.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let vt=null;function Ot(b){vt&&vt(b)}function it(){Vt.stop()}function Dn(){Vt.start()}const Vt=new Fx;Vt.setAnimationLoop(Ot),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(b){vt=b,$e.setAnimationLoop(b),b===null?Vt.stop():Vt.start()},$e.addEventListener("sessionstart",it),$e.addEventListener("sessionend",Dn),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&($e.cameraAutoUpdate===!0&&$e.updateCamera(k),k=$e.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,k,A),g=ve.get(b,x.length),g.init(k),x.push(g),de.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Fe.setFromProjectionMatrix(de),ie=this.localClippingEnabled,G=ge.init(this.clippingPlanes,ie),v=we.get(b,f.length),v.init(),f.push(v),xr(b,k,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(N,H);const X=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1;X&&pe.addToRenderList(v,b),this.info.render.frame++,G===!0&&ge.beginShadows();const W=g.state.shadowsArray;He.render(W,b,k),G===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=v.opaque,_e=v.transmissive;if(g.setupLights(_._useLegacyLights),k.isArrayCamera){const Re=k.cameras;if(_e.length>0)for(let Ne=0,Ie=Re.length;Ne<Ie;Ne++){const Be=Re[Ne];Ka($,_e,b,Be)}X&&pe.render(b);for(let Ne=0,Ie=Re.length;Ne<Ie;Ne++){const Be=Re[Ne];_o(v,b,Be,Be.viewport)}}else _e.length>0&&Ka($,_e,b,k),X&&pe.render(b),_o(v,b,k);A!==null&&(me.updateMultisampleRenderTarget(A),me.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(_,b,k),We.resetDefaultState(),P=-1,w=null,x.pop(),x.length>0?(g=x[x.length-1],G===!0&&ge.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function xr(b,k,X,W){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Fe.intersectsSprite(b)){W&&le.setFromMatrixPosition(b.matrixWorld).applyMatrix4(de);const Re=K.update(b),Ne=b.material;Ne.visible&&v.push(b,Re,Ne,X,le.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Fe.intersectsObject(b))){const Re=K.update(b),Ne=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),le.copy(b.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),le.copy(Re.boundingSphere.center)),le.applyMatrix4(b.matrixWorld).applyMatrix4(de)),Array.isArray(Ne)){const Ie=Re.groups;for(let Be=0,L=Ie.length;Be<L;Be++){const ue=Ie[Be],De=Ne[ue.materialIndex];De&&De.visible&&v.push(b,Re,De,X,le.z,ue)}}else Ne.visible&&v.push(b,Re,Ne,X,le.z,null)}}const _e=b.children;for(let Re=0,Ne=_e.length;Re<Ne;Re++)xr(_e[Re],k,X,W)}function _o(b,k,X,W){const $=b.opaque,_e=b.transmissive,Re=b.transparent;g.setupLightsView(X),G===!0&&ge.setGlobalState(_.clippingPlanes,X),W&&J.viewport(M.copy(W)),$.length>0&&yr($,k,X),_e.length>0&&yr(_e,k,X),Re.length>0&&yr(Re,k,X),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Ka(b,k,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[W.id]===void 0&&(g.state.transmissionRenderTarget[W.id]=new Xr(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?gu:fr,minFilter:bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const _e=g.state.transmissionRenderTarget[W.id],Re=W.viewport||M;_e.setSize(Re.z,Re.w);const Ne=_.getRenderTarget();_.setRenderTarget(_e),_.getClearColor(D),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),_.clear();const Ie=_.toneMapping;_.toneMapping=ur;const Be=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),g.setupLightsView(W),G===!0&&ge.setGlobalState(_.clippingPlanes,W),yr(b,X,W),me.updateMultisampleRenderTarget(_e),me.updateRenderTargetMipmap(_e),Y.has("WEBGL_multisampled_render_to_texture")===!1){let L=!1;for(let ue=0,De=k.length;ue<De;ue++){const rt=k[ue],At=rt.object,fn=rt.geometry,Xe=rt.material,ke=rt.group;if(Xe.side===$t&&At.layers.test(W.layers)){const Mo=Xe.side;Xe.side=un,Xe.needsUpdate=!0,xo(At,X,W,fn,Xe,ke),Xe.side=Mo,Xe.needsUpdate=!0,L=!0}}L===!0&&(me.updateMultisampleRenderTarget(_e),me.updateRenderTargetMipmap(_e))}_.setRenderTarget(Ne),_.setClearColor(D,z),Be!==void 0&&(W.viewport=Be),_.toneMapping=Ie}function yr(b,k,X){const W=k.isScene===!0?k.overrideMaterial:null;for(let $=0,_e=b.length;$<_e;$++){const Re=b[$],Ne=Re.object,Ie=Re.geometry,Be=W===null?Re.material:W,L=Re.group;Ne.layers.test(X.layers)&&xo(Ne,k,X,Ie,Be,L)}}function xo(b,k,X,W,$,_e){b.onBeforeRender(_,k,X,W,$,_e),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(_,k,X,W,b,_e),$.transparent===!0&&$.side===$t&&$.forceSinglePass===!1?($.side=un,$.needsUpdate=!0,_.renderBufferDirect(X,k,W,$,b,_e),$.side=Pn,$.needsUpdate=!0,_.renderBufferDirect(X,k,W,$,b,_e),$.side=$t):_.renderBufferDirect(X,k,W,$,b,_e),b.onAfterRender(_,k,X,W,$,_e)}function Sr(b,k,X){k.isScene!==!0&&(k=Oe);const W=oe.get(b),$=g.state.lights,_e=g.state.shadowsArray,Re=$.state.version,Ne=ne.getParameters(b,$.state,_e,k,X),Ie=ne.getProgramCacheKey(Ne);let Be=W.programs;W.environment=b.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(b.isMeshStandardMaterial?R:Ee).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Be===void 0&&(b.addEventListener("dispose",ye),Be=new Map,W.programs=Be);let L=Be.get(Ie);if(L!==void 0){if(W.currentProgram===L&&W.lightsStateVersion===Re)return So(b,Ne),L}else Ne.uniforms=ne.getUniforms(b),b.onBuild(X,Ne,_),b.onBeforeCompile(Ne,_),L=ne.acquireProgram(Ne,Ie),Be.set(Ie,L),W.uniforms=Ne.uniforms;const ue=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ue.clippingPlanes=ge.uniform),So(b,Ne),W.needsLights=el(b),W.lightsStateVersion=Re,W.needsLights&&(ue.ambientLightColor.value=$.state.ambient,ue.lightProbe.value=$.state.probe,ue.directionalLights.value=$.state.directional,ue.directionalLightShadows.value=$.state.directionalShadow,ue.spotLights.value=$.state.spot,ue.spotLightShadows.value=$.state.spotShadow,ue.rectAreaLights.value=$.state.rectArea,ue.ltc_1.value=$.state.rectAreaLTC1,ue.ltc_2.value=$.state.rectAreaLTC2,ue.pointLights.value=$.state.point,ue.pointLightShadows.value=$.state.pointShadow,ue.hemisphereLights.value=$.state.hemi,ue.directionalShadowMap.value=$.state.directionalShadowMap,ue.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ue.spotShadowMap.value=$.state.spotShadowMap,ue.spotLightMatrix.value=$.state.spotLightMatrix,ue.spotLightMap.value=$.state.spotLightMap,ue.pointShadowMap.value=$.state.pointShadowMap,ue.pointShadowMatrix.value=$.state.pointShadowMatrix),W.currentProgram=L,W.uniformsList=null,L}function yo(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=mc.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function So(b,k){const X=oe.get(b);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Ja(b,k,X,W,$){k.isScene!==!0&&(k=Oe),me.resetTextureUnits();const _e=k.fog,Re=W.isMeshStandardMaterial?k.environment:null,Ne=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:vr,Ie=(W.isMeshStandardMaterial?R:Ee).get(W.envMap||Re),Be=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,L=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ue=!!X.morphAttributes.position,De=!!X.morphAttributes.normal,rt=!!X.morphAttributes.color;let At=ur;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(At=_.toneMapping);const fn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Xe=fn!==void 0?fn.length:0,ke=oe.get(W),Mo=g.state.lights;if(G===!0&&(ie===!0||b!==w)){const In=b===w&&W.id===P;ge.setState(W,b,In)}let _t=!1;W.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Mo.state.version||ke.outputColorSpace!==Ne||$.isBatchedMesh&&ke.batching===!1||!$.isBatchedMesh&&ke.batching===!0||$.isInstancedMesh&&ke.instancing===!1||!$.isInstancedMesh&&ke.instancing===!0||$.isSkinnedMesh&&ke.skinning===!1||!$.isSkinnedMesh&&ke.skinning===!0||$.isInstancedMesh&&ke.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ke.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ke.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ke.instancingMorph===!1&&$.morphTexture!==null||ke.envMap!==Ie||W.fog===!0&&ke.fog!==_e||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ge.numPlanes||ke.numIntersection!==ge.numIntersection)||ke.vertexAlphas!==Be||ke.vertexTangents!==L||ke.morphTargets!==ue||ke.morphNormals!==De||ke.morphColors!==rt||ke.toneMapping!==At||ke.morphTargetsCount!==Xe)&&(_t=!0):(_t=!0,ke.__version=W.version);let Mr=ke.currentProgram;_t===!0&&(Mr=Sr(W,k,$));let Lp=!1,wo=!1,bu=!1;const Yt=Mr.getUniforms(),zi=ke.uniforms;if(J.useProgram(Mr.program)&&(Lp=!0,wo=!0,bu=!0),W.id!==P&&(P=W.id,wo=!0),Lp||w!==b){Yt.setValue(F,"projectionMatrix",b.projectionMatrix),Yt.setValue(F,"viewMatrix",b.matrixWorldInverse);const In=Yt.map.cameraPosition;In!==void 0&&In.setValue(F,le.setFromMatrixPosition(b.matrixWorld)),ae.logarithmicDepthBuffer&&Yt.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Yt.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),w!==b&&(w=b,wo=!0,bu=!0)}if($.isSkinnedMesh){Yt.setOptional(F,$,"bindMatrix"),Yt.setOptional(F,$,"bindMatrixInverse");const In=$.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),Yt.setValue(F,"boneTexture",In.boneTexture,me))}$.isBatchedMesh&&(Yt.setOptional(F,$,"batchingTexture"),Yt.setValue(F,"batchingTexture",$._matricesTexture,me));const Cu=X.morphAttributes;if((Cu.position!==void 0||Cu.normal!==void 0||Cu.color!==void 0)&&Le.update($,X,Mr),(wo||ke.receiveShadow!==$.receiveShadow)&&(ke.receiveShadow=$.receiveShadow,Yt.setValue(F,"receiveShadow",$.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(zi.envMap.value=Ie,zi.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(zi.envMapIntensity.value=k.environmentIntensity),wo&&(Yt.setValue(F,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&Qa(zi,bu),_e&&W.fog===!0&&re.refreshFogUniforms(zi,_e),re.refreshMaterialUniforms(zi,W,Q,Z,g.state.transmissionRenderTarget[b.id]),mc.upload(F,yo(ke),zi,me)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(mc.upload(F,yo(ke),zi,me),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Yt.setValue(F,"center",$.center),Yt.setValue(F,"modelViewMatrix",$.modelViewMatrix),Yt.setValue(F,"normalMatrix",$.normalMatrix),Yt.setValue(F,"modelMatrix",$.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const In=W.uniformsGroups;for(let Ru=0,Ry=In.length;Ru<Ry;Ru++){const Np=In[Ru];Ke.update(Np,Mr),Ke.bind(Np,Mr)}}return Mr}function Qa(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function el(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,k,X){oe.get(b.texture).__webglTexture=k,oe.get(b.depthTexture).__webglTexture=X;const W=oe.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=X===void 0,W.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,k){const X=oe.get(b);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,X=0){A=b,C=k,E=X;let W=!0,$=null,_e=!1,Re=!1;if(b){const Ie=oe.get(b);Ie.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(F.FRAMEBUFFER,null),W=!1):Ie.__webglFramebuffer===void 0?me.setupRenderTarget(b):Ie.__hasExternalTextures&&me.rebindTextures(b,oe.get(b.texture).__webglTexture,oe.get(b.depthTexture).__webglTexture);const Be=b.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Re=!0);const L=oe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(L[k])?$=L[k][X]:$=L[k],_e=!0):b.samples>0&&me.useMultisampledRTT(b)===!1?$=oe.get(b).__webglMultisampledFramebuffer:Array.isArray(L)?$=L[X]:$=L,M.copy(b.viewport),U.copy(b.scissor),B=b.scissorTest}else M.copy(q).multiplyScalar(Q).floor(),U.copy(te).multiplyScalar(Q).floor(),B=Se;if(J.bindFramebuffer(F.FRAMEBUFFER,$)&&W&&J.drawBuffers(b,$),J.viewport(M),J.scissor(U),J.setScissorTest(B),_e){const Ie=oe.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ie.__webglTexture,X)}else if(Re){const Ie=oe.get(b.texture),Be=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.__webglTexture,X||0,Be)}P=-1},this.readRenderTargetPixels=function(b,k,X,W,$,_e,Re){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){J.bindFramebuffer(F.FRAMEBUFFER,Ne);try{const Ie=b.texture,Be=Ie.format,L=Ie.type;if(!ae.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(L)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-W&&X>=0&&X<=b.height-$&&F.readPixels(k,X,W,$,be.convert(Be),be.convert(L),_e)}finally{const Ie=A!==null?oe.get(A).__webglFramebuffer:null;J.bindFramebuffer(F.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(b,k,X=0){const W=Math.pow(2,-X),$=Math.floor(k.image.width*W),_e=Math.floor(k.image.height*W);me.setTexture2D(k,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,b.x,b.y,$,_e),J.unbindTexture()},this.copyTextureToTexture=function(b,k,X,W=0){const $=k.image.width,_e=k.image.height,Re=be.convert(X.format),Ne=be.convert(X.type);me.setTexture2D(X,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment),k.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,W,b.x,b.y,$,_e,Re,Ne,k.image.data):k.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,W,b.x,b.y,k.mipmaps[0].width,k.mipmaps[0].height,Re,k.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,W,b.x,b.y,Re,Ne,k.image),W===0&&X.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(b,k,X,W,$=0){const _e=b.max.x-b.min.x,Re=b.max.y-b.min.y,Ne=b.max.z-b.min.z,Ie=be.convert(W.format),Be=be.convert(W.type);let L;if(W.isData3DTexture)me.setTexture3D(W,0),L=F.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)me.setTexture2DArray(W,0),L=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const ue=F.getParameter(F.UNPACK_ROW_LENGTH),De=F.getParameter(F.UNPACK_IMAGE_HEIGHT),rt=F.getParameter(F.UNPACK_SKIP_PIXELS),At=F.getParameter(F.UNPACK_SKIP_ROWS),fn=F.getParameter(F.UNPACK_SKIP_IMAGES),Xe=X.isCompressedTexture?X.mipmaps[$]:X.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Xe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Xe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,b.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,b.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,b.min.z),X.isDataTexture||X.isData3DTexture?F.texSubImage3D(L,$,k.x,k.y,k.z,_e,Re,Ne,Ie,Be,Xe.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(L,$,k.x,k.y,k.z,_e,Re,Ne,Ie,Xe.data):F.texSubImage3D(L,$,k.x,k.y,k.z,_e,Re,Ne,Ie,Be,Xe),F.pixelStorei(F.UNPACK_ROW_LENGTH,ue),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,De),F.pixelStorei(F.UNPACK_SKIP_PIXELS,rt),F.pixelStorei(F.UNPACK_SKIP_ROWS,At),F.pixelStorei(F.UNPACK_SKIP_IMAGES,fn),$===0&&W.generateMipmaps&&F.generateMipmap(L),J.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?me.setTextureCube(b,0):b.isData3DTexture?me.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?me.setTexture2DArray(b,0):me.setTexture2D(b,0),J.unbindTexture()},this.resetState=function(){C=0,E=0,A=null,J.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===op?"display-p3":"srgb",n.unpackColorSpace=at.workingColorSpace===vu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class up{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=n,this.far=i}clone(){return new up(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hp extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class bb extends Xt{constructor(e=null,n=1,i=1,r,s,o,a,l,c=_n,u=_n,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class l0 extends ni{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xs=new lt,c0=new lt,Bl=[],u0=new _r,Cb=new lt,Fo=new et,Oo=new mo;class Rb extends et{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new l0(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Cb)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new _r),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,xs),u0.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(u0)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new mo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,xs),Oo.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(Oo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Fo.geometry=this.geometry,Fo.material=this.material,Fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oo.copy(this.boundingSphere),Oo.applyMatrix4(i),e.ray.intersectsSphere(Oo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,xs),c0.multiplyMatrices(i,xs),Fo.matrixWorld=c0,Fo.raycast(e,Bl);for(let o=0,a=Bl.length;o<a;o++){const l=Bl[o];l.instanceId=s,l.object=this,n.push(l)}Bl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new l0(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new bb(new Float32Array(r*this.count),r,this.count,_x,Ci));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class $x extends Qr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xc=new I,qc=new I,h0=new lt,ko=new bx,Hl=new mo,Dh=new I,d0=new I;class Pb extends Dt{constructor(e=new Ft,n=new $x){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Xc.fromBufferAttribute(n,r-1),qc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Xc.distanceTo(qc);e.setAttribute("lineDistance",new nt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(r),Hl.radius+=s,e.ray.intersectsSphere(Hl)===!1)return;h0.copy(r).invert(),ko.copy(e.ray).applyMatrix4(h0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=p,g=m-1;v<g;v+=c){const f=u.getX(v),x=u.getX(v+1),_=Vl(this,e,ko,l,f,x);_&&n.push(_)}if(this.isLineLoop){const v=u.getX(m-1),g=u.getX(p),f=Vl(this,e,ko,l,v,g);f&&n.push(f)}}else{const p=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=p,g=m-1;v<g;v+=c){const f=Vl(this,e,ko,l,v,v+1);f&&n.push(f)}if(this.isLineLoop){const v=Vl(this,e,ko,l,m-1,p);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Vl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Xc.fromBufferAttribute(o,r),qc.fromBufferAttribute(o,s),n.distanceSqToSegment(Xc,qc,Dh,d0)>i)return;Dh.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Dh);if(!(l<e.near||l>e.far))return{distance:l,point:d0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const f0=new I,p0=new I;class Lb extends Pb{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)f0.fromBufferAttribute(n,r),p0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+f0.distanceTo(p0);e.setAttribute("lineDistance",new nt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dp extends Xt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,p=(o-u)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new he:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new I,r=[],s=[],o=[],a=new I,l=new lt;for(let p=0;p<=e;p++){const m=p/e;r[p]=this.getTangentAt(m,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Lt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Lt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class fp extends fi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new he){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Nb extends fp{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function pp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Gl=new I,Ih=new pp,Uh=new pp,Fh=new pp;class Db extends fi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new I){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Gl.subVectors(r[0],r[1]).add(r[0]),c=Gl);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Gl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Gl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Ih.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,v,g),Uh.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,v,g),Fh.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,v,g)}else this.curveType==="catmullrom"&&(Ih.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Uh.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Fh.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Ih.calc(l),Uh.calc(l),Fh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function m0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function Ib(t,e){const n=1-t;return n*n*e}function Ub(t,e){return 2*(1-t)*t*e}function Fb(t,e){return t*t*e}function pa(t,e,n,i){return Ib(t,e)+Ub(t,n)+Fb(t,i)}function Ob(t,e){const n=1-t;return n*n*n*e}function kb(t,e){const n=1-t;return 3*n*n*t*e}function zb(t,e){return 3*(1-t)*t*t*e}function Bb(t,e){return t*t*t*e}function ma(t,e,n,i,r){return Ob(t,e)+kb(t,n)+zb(t,i)+Bb(t,r)}class jx extends fi{constructor(e=new he,n=new he,i=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new he){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ma(e,r.x,s.x,o.x,a.x),ma(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hb extends fi{constructor(e=new I,n=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new I){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ma(e,r.x,s.x,o.x,a.x),ma(e,r.y,s.y,o.y,a.y),ma(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xx extends fi{constructor(e=new he,n=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new he){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new he){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vb extends fi{constructor(e=new I,n=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new I){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new I){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qx extends fi{constructor(e=new he,n=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new he){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(pa(e,r.x,s.x,o.x),pa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gb extends fi{constructor(e=new I,n=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new I){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(pa(e,r.x,s.x,o.x),pa(e,r.y,s.y,o.y),pa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yx extends fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new he){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(m0(a,l.x,c.x,u.x,h.x),m0(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new he().fromArray(r))}return this}}var Kd=Object.freeze({__proto__:null,ArcCurve:Nb,CatmullRomCurve3:Db,CubicBezierCurve:jx,CubicBezierCurve3:Hb,EllipseCurve:fp,LineCurve:Xx,LineCurve3:Vb,QuadraticBezierCurve:qx,QuadraticBezierCurve3:Gb,SplineCurve:Yx});class Wb extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kd[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Kd[r.type]().fromJSON(r))}return this}}class Jd extends Wb{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Xx(this.currentPoint.clone(),new he(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new qx(this.currentPoint.clone(),new he(e,n),new he(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new jx(this.currentPoint.clone(),new he(e,n),new he(i,r),new he(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Yx(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new fp(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class mp extends Ft{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=Lt(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/n,h=new I,d=new he,p=new I,m=new I,v=new I;let g=0,f=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,f=e[x+1].y-e[x].y,p.x=f*1,p.y=-g,p.z=f*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[x+1].x-e[x].x,f=e[x+1].y-e[x].y,p.x=f*1,p.y=-g,p.z=f*0,m.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(m)}for(let x=0;x<=n;x++){const _=i+x*u*r,y=Math.sin(_),C=Math.cos(_);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*y,h.y=e[E].y,h.z=e[E].x*C,o.push(h.x,h.y,h.z),d.x=x/n,d.y=E/(e.length-1),a.push(d.x,d.y);const A=l[3*E+0]*y,P=l[3*E+1],w=l[3*E+0]*C;c.push(A,P,w)}}for(let x=0;x<n;x++)for(let _=0;_<e.length-1;_++){const y=_+x*e.length,C=y,E=y+e.length,A=y+e.length+1,P=y+1;s.push(C,E,P),s.push(A,P,E)}this.setIndex(s),this.setAttribute("position",new nt(o,3)),this.setAttribute("uv",new nt(a,2)),this.setAttribute("normal",new nt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mp(e.points,e.segments,e.phiStart,e.phiLength)}}class Yc extends Ft{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new I,u=new he;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=n;h++,d+=3){const p=i+h/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(a,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class gp extends Ft{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],p=[];let m=0;const v=[],g=i/2;let f=0;x(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new nt(h,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(p,2));function x(){const y=new I,C=new I;let E=0;const A=(n-e)/i;for(let P=0;P<=s;P++){const w=[],M=P/s,U=M*(n-e)+e;for(let B=0;B<=r;B++){const D=B/r,z=D*l+a,j=Math.sin(z),Z=Math.cos(z);C.x=U*j,C.y=-M*i+g,C.z=U*Z,h.push(C.x,C.y,C.z),y.set(j,A,Z).normalize(),d.push(y.x,y.y,y.z),p.push(D,1-M),w.push(m++)}v.push(w)}for(let P=0;P<r;P++)for(let w=0;w<s;w++){const M=v[w][P],U=v[w+1][P],B=v[w+1][P+1],D=v[w][P+1];u.push(M,U,D),u.push(U,B,D),E+=6}c.addGroup(f,E,0),f+=E}function _(y){const C=m,E=new he,A=new I;let P=0;const w=y===!0?e:n,M=y===!0?1:-1;for(let B=1;B<=r;B++)h.push(0,g*M,0),d.push(0,M,0),p.push(.5,.5),m++;const U=m;for(let B=0;B<=r;B++){const z=B/r*l+a,j=Math.cos(z),Z=Math.sin(z);A.x=w*Z,A.y=g*M,A.z=w*j,h.push(A.x,A.y,A.z),d.push(0,M,0),E.x=j*.5+.5,E.y=Z*.5*M+.5,p.push(E.x,E.y),m++}for(let B=0;B<r;B++){const D=C+B,z=U+B;y===!0?u.push(z,z+1,D):u.push(z+1,z,D),P+=3}c.addGroup(f,P,y===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Wl=new I,$l=new I,Oh=new I,jl=new Qn;class $b extends Ft{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(qs*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},p=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:v,b:g,c:f}=jl;if(v.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),jl.getNormal(Oh),h[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){const _=(x+1)%3,y=h[x],C=h[_],E=jl[u[x]],A=jl[u[_]],P=`${y}_${C}`,w=`${C}_${y}`;w in d&&d[w]?(Oh.dot(d[w].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(A.x,A.y,A.z)),d[w]=null):P in d||(d[P]={index0:c[x],index1:c[_],normal:Oh.clone()})}}for(const m in d)if(d[m]){const{index0:v,index1:g}=d[m];Wl.fromBufferAttribute(a,v),$l.fromBufferAttribute(a,g),p.push(Wl.x,Wl.y,Wl.z),p.push($l.x,$l.y,$l.z)}this.setAttribute("position",new nt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class vp extends Jd{constructor(e){super(e),this.uuid=Jr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Jd().fromJSON(r))}return this}}const jb={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=Zx(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,p;if(i&&(s=Kb(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let m=n;m<r;m+=n)h=t[m],d=t[m+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Ba(s,o,n,a,l,p,0),o}};function Zx(t,e,n,i,r){let s,o;if(r===lC(t,e,n,i)>0)for(s=e;s<n;s+=i)o=g0(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=g0(s,t[s],t[s+1],o);return o&&yu(o,o.next)&&(Va(o),o=o.next),o}function qr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(yu(n,n.next)||Mt(n.prev,n,n.next)===0)){if(Va(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Ba(t,e,n,i,r,s,o){if(!t)return;!o&&s&&nC(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?qb(t,i,r,s):Xb(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),Va(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=Yb(qr(t),e,n),Ba(t,e,n,i,r,s,2)):o===2&&Zb(t,e,n,i,r,s):Ba(qr(t),e,n,i,r,s,1);break}}}function Xb(t){const e=t.prev,n=t,i=t.next;if(Mt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=p&&zs(r,a,s,l,o,c,m.x,m.y)&&Mt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function qb(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Mt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,m=u<h?u<d?u:d:h<d?h:d,v=a>l?a>c?a:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,f=Qd(p,m,e,n,i),x=Qd(v,g,e,n,i);let _=t.prevZ,y=t.nextZ;for(;_&&_.z>=f&&y&&y.z<=x;){if(_.x>=p&&_.x<=v&&_.y>=m&&_.y<=g&&_!==r&&_!==o&&zs(a,u,l,h,c,d,_.x,_.y)&&Mt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=v&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&zs(a,u,l,h,c,d,y.x,y.y)&&Mt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=v&&_.y>=m&&_.y<=g&&_!==r&&_!==o&&zs(a,u,l,h,c,d,_.x,_.y)&&Mt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=x;){if(y.x>=p&&y.x<=v&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&zs(a,u,l,h,c,d,y.x,y.y)&&Mt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Yb(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!yu(r,s)&&Kx(r,i,i.next,s)&&Ha(r,s)&&Ha(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Va(i),Va(i.next),i=t=s),i=i.next}while(i!==t);return qr(i)}function Zb(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sC(o,a)){let l=Jx(o,a);o=qr(o,o.next),l=qr(l,l.next),Ba(o,e,n,i,r,s,0),Ba(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function Kb(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=Zx(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(rC(c));for(r.sort(Jb),s=0;s<r.length;s++)n=Qb(r[s],n);return n}function Jb(t,e){return t.x-e.x}function Qb(t,e){const n=eC(t,e);if(!n)return e;const i=Jx(n,t);return qr(i,i.next),qr(n,n.next)}function eC(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=s&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&zs(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),Ha(n,t)&&(h<u||h===u&&(n.x>r.x||n.x===r.x&&tC(r,n)))&&(r=n,u=h)),n=n.next;while(n!==a);return r}function tC(t,e){return Mt(t.prev,t,e.prev)<0&&Mt(e.next,t,t.next)<0}function nC(t,e,n,i){let r=t;do r.z===0&&(r.z=Qd(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,iC(r)}function iC(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function Qd(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function rC(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function zs(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function sC(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!oC(t,e)&&(Ha(t,e)&&Ha(e,t)&&aC(t,e)&&(Mt(t.prev,t,e.prev)||Mt(t,e.prev,e))||yu(t,e)&&Mt(t.prev,t,t.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function yu(t,e){return t.x===e.x&&t.y===e.y}function Kx(t,e,n,i){const r=ql(Mt(t,e,n)),s=ql(Mt(t,e,i)),o=ql(Mt(n,i,t)),a=ql(Mt(n,i,e));return!!(r!==s&&o!==a||r===0&&Xl(t,n,e)||s===0&&Xl(t,i,e)||o===0&&Xl(n,t,i)||a===0&&Xl(n,e,i))}function Xl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function ql(t){return t>0?1:t<0?-1:0}function oC(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Kx(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Ha(t,e){return Mt(t.prev,t,t.next)<0?Mt(t,e,t.next)>=0&&Mt(t,t.prev,e)>=0:Mt(t,e,t.prev)<0||Mt(t,t.next,e)<0}function aC(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Jx(t,e){const n=new ef(t.i,t.x,t.y),i=new ef(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function g0(t,e,n,i){const r=new ef(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Va(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function ef(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function lC(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class ga{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ga.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];v0(e),_0(i,e);let o=e.length;n.forEach(v0);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,_0(i,n[l]);const a=jb.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function v0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function _0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Su extends Ft{constructor(e=new vp([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new nt(r,3)),this.setAttribute("uv",new nt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,m=n.bevelSize!==void 0?n.bevelSize:p-.1,v=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3;const f=n.extrudePath,x=n.UVGenerator!==void 0?n.UVGenerator:cC;let _,y=!1,C,E,A,P;f&&(_=f.getSpacedPoints(u),y=!0,d=!1,C=f.computeFrenetFrames(u,!1),E=new I,A=new I,P=new I),d||(g=0,p=0,m=0,v=0);const w=a.extractPoints(c);let M=w.shape;const U=w.holes;if(!ga.isClockWise(M)){M=M.reverse();for(let Y=0,ae=U.length;Y<ae;Y++){const J=U[Y];ga.isClockWise(J)&&(U[Y]=J.reverse())}}const D=ga.triangulateShape(M,U),z=M;for(let Y=0,ae=U.length;Y<ae;Y++){const J=U[Y];M=M.concat(J)}function j(Y,ae,J){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(ae,J)}const Z=M.length,Q=D.length;function N(Y,ae,J){let fe,oe,me;const Ee=Y.x-ae.x,R=Y.y-ae.y,T=J.x-Y.x,V=J.y-Y.y,K=Ee*Ee+R*R,ne=Ee*V-R*T;if(Math.abs(ne)>Number.EPSILON){const re=Math.sqrt(K),we=Math.sqrt(T*T+V*V),ve=ae.x-R/re,ge=ae.y+Ee/re,He=J.x-V/we,pe=J.y+T/we,Le=((He-ve)*V-(pe-ge)*T)/(Ee*V-R*T);fe=ve+Ee*Le-Y.x,oe=ge+R*Le-Y.y;const je=fe*fe+oe*oe;if(je<=2)return new he(fe,oe);me=Math.sqrt(je/2)}else{let re=!1;Ee>Number.EPSILON?T>Number.EPSILON&&(re=!0):Ee<-Number.EPSILON?T<-Number.EPSILON&&(re=!0):Math.sign(R)===Math.sign(V)&&(re=!0),re?(fe=-R,oe=Ee,me=Math.sqrt(K)):(fe=Ee,oe=R,me=Math.sqrt(K/2))}return new he(fe/me,oe/me)}const H=[];for(let Y=0,ae=z.length,J=ae-1,fe=Y+1;Y<ae;Y++,J++,fe++)J===ae&&(J=0),fe===ae&&(fe=0),H[Y]=N(z[Y],z[J],z[fe]);const q=[];let te,Se=H.concat();for(let Y=0,ae=U.length;Y<ae;Y++){const J=U[Y];te=[];for(let fe=0,oe=J.length,me=oe-1,Ee=fe+1;fe<oe;fe++,me++,Ee++)me===oe&&(me=0),Ee===oe&&(Ee=0),te[fe]=N(J[fe],J[me],J[Ee]);q.push(te),Se=Se.concat(te)}for(let Y=0;Y<g;Y++){const ae=Y/g,J=p*Math.cos(ae*Math.PI/2),fe=m*Math.sin(ae*Math.PI/2)+v;for(let oe=0,me=z.length;oe<me;oe++){const Ee=j(z[oe],H[oe],fe);le(Ee.x,Ee.y,-J)}for(let oe=0,me=U.length;oe<me;oe++){const Ee=U[oe];te=q[oe];for(let R=0,T=Ee.length;R<T;R++){const V=j(Ee[R],te[R],fe);le(V.x,V.y,-J)}}}const Fe=m+v;for(let Y=0;Y<Z;Y++){const ae=d?j(M[Y],Se[Y],Fe):M[Y];y?(A.copy(C.normals[0]).multiplyScalar(ae.x),E.copy(C.binormals[0]).multiplyScalar(ae.y),P.copy(_[0]).add(A).add(E),le(P.x,P.y,P.z)):le(ae.x,ae.y,0)}for(let Y=1;Y<=u;Y++)for(let ae=0;ae<Z;ae++){const J=d?j(M[ae],Se[ae],Fe):M[ae];y?(A.copy(C.normals[Y]).multiplyScalar(J.x),E.copy(C.binormals[Y]).multiplyScalar(J.y),P.copy(_[Y]).add(A).add(E),le(P.x,P.y,P.z)):le(J.x,J.y,h/u*Y)}for(let Y=g-1;Y>=0;Y--){const ae=Y/g,J=p*Math.cos(ae*Math.PI/2),fe=m*Math.sin(ae*Math.PI/2)+v;for(let oe=0,me=z.length;oe<me;oe++){const Ee=j(z[oe],H[oe],fe);le(Ee.x,Ee.y,h+J)}for(let oe=0,me=U.length;oe<me;oe++){const Ee=U[oe];te=q[oe];for(let R=0,T=Ee.length;R<T;R++){const V=j(Ee[R],te[R],fe);y?le(V.x,V.y+_[u-1].y,_[u-1].x+J):le(V.x,V.y,h+J)}}}G(),ie();function G(){const Y=r.length/3;if(d){let ae=0,J=Z*ae;for(let fe=0;fe<Q;fe++){const oe=D[fe];Oe(oe[2]+J,oe[1]+J,oe[0]+J)}ae=u+g*2,J=Z*ae;for(let fe=0;fe<Q;fe++){const oe=D[fe];Oe(oe[0]+J,oe[1]+J,oe[2]+J)}}else{for(let ae=0;ae<Q;ae++){const J=D[ae];Oe(J[2],J[1],J[0])}for(let ae=0;ae<Q;ae++){const J=D[ae];Oe(J[0]+Z*u,J[1]+Z*u,J[2]+Z*u)}}i.addGroup(Y,r.length/3-Y,0)}function ie(){const Y=r.length/3;let ae=0;de(z,ae),ae+=z.length;for(let J=0,fe=U.length;J<fe;J++){const oe=U[J];de(oe,ae),ae+=oe.length}i.addGroup(Y,r.length/3-Y,1)}function de(Y,ae){let J=Y.length;for(;--J>=0;){const fe=J;let oe=J-1;oe<0&&(oe=Y.length-1);for(let me=0,Ee=u+g*2;me<Ee;me++){const R=Z*me,T=Z*(me+1),V=ae+fe+R,K=ae+oe+R,ne=ae+oe+T,re=ae+fe+T;Ve(V,K,ne,re)}}}function le(Y,ae,J){l.push(Y),l.push(ae),l.push(J)}function Oe(Y,ae,J){F(Y),F(ae),F(J);const fe=r.length/3,oe=x.generateTopUV(i,r,fe-3,fe-2,fe-1);ze(oe[0]),ze(oe[1]),ze(oe[2])}function Ve(Y,ae,J,fe){F(Y),F(ae),F(fe),F(ae),F(J),F(fe);const oe=r.length/3,me=x.generateSideWallUV(i,r,oe-6,oe-3,oe-2,oe-1);ze(me[0]),ze(me[1]),ze(me[3]),ze(me[1]),ze(me[2]),ze(me[3])}function F(Y){r.push(l[Y*3+0]),r.push(l[Y*3+1]),r.push(l[Y*3+2])}function ze(Y){s.push(Y.x),s.push(Y.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return uC(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Kd[r.type]().fromJSON(r)),new Su(i,e.options)}}const cC={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new he(s,o),new he(a,l),new he(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[r*3],p=e[r*3+1],m=e[r*3+2],v=e[s*3],g=e[s*3+1],f=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-h),new he(d,1-m),new he(v,1-f)]:[new he(a,1-l),new he(u,1-h),new he(p,1-m),new he(g,1-f)]}};function uC(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class _p extends Ft{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let h=e;const d=(n-e)/r,p=new I,m=new he;for(let v=0;v<=r;v++){for(let g=0;g<=i;g++){const f=s+g/i*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/n+1)/2,m.y=(p.y/n+1)/2,u.push(m.x,m.y)}h+=d}for(let v=0;v<r;v++){const g=v*(i+1);for(let f=0;f<i;f++){const x=f+g,_=x,y=x+i+1,C=x+i+2,E=x+1;a.push(_,y,E),a.push(y,C,E)}}this.setIndex(a),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _p(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class xp extends Ft{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new I,d=new I,p=[],m=[],v=[],g=[];for(let f=0;f<=i;f++){const x=[],_=f/i;let y=0;f===0&&o===0?y=.5/n:f===i&&l===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){const E=C/n;h.x=-e*Math.cos(r+E*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+E*s)*Math.sin(o+_*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),g.push(E+y,1-_),x.push(c++)}u.push(x)}for(let f=0;f<i;f++)for(let x=0;x<n;x++){const _=u[f][x+1],y=u[f][x],C=u[f+1][x],E=u[f+1][x+1];(f!==0||o>0)&&p.push(_,y,E),(f!==i-1||l<Math.PI)&&p.push(y,C,E)}this.setIndex(p),this.setAttribute("position",new nt(m,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class x0 extends Qr{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ge(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Ei extends Qr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mx,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class y0 extends Ei{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const S0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class hC{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],m=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null}}}const dC=new hC;class yp{constructor(e){this.manager=e!==void 0?e:dC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}yp.DEFAULT_MATERIAL_NAME="__DEFAULT";class fC extends yp{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=S0.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=za("img");function l(){u(),S0.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class pC extends yp{constructor(e){super(e)}load(e,n,i,r){const s=new Xt,o=new fC(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Mu extends Dt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class mC extends Mu{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const kh=new lt,M0=new I,w0=new I;class Qx{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lp,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;M0.setFromMatrixPosition(e.matrixWorld),n.position.copy(M0),w0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(w0),n.updateMatrixWorld(),kh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const E0=new lt,zo=new I,zh=new I;class gC extends Qx{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),zo.setFromMatrixPosition(e.matrixWorld),i.position.copy(zo),zh.copy(i.position),zh.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(zh),i.updateMatrixWorld(),r.makeTranslation(-zo.x,-zo.y,-zo.z),E0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(E0)}}class vC extends Mu{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new gC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _C extends Qx{constructor(){super(new Ox(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ia extends Mu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new _C}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xC{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new I)}set(e){for(let n=0;n<9;n++)this.coefficients[n].copy(e[n]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,n){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.282095),n.addScaledVector(o[1],.488603*r),n.addScaledVector(o[2],.488603*s),n.addScaledVector(o[3],.488603*i),n.addScaledVector(o[4],1.092548*(i*r)),n.addScaledVector(o[5],1.092548*(r*s)),n.addScaledVector(o[6],.315392*(3*s*s-1)),n.addScaledVector(o[7],1.092548*(i*s)),n.addScaledVector(o[8],.546274*(i*i-r*r)),n}getIrradianceAt(e,n){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.886227),n.addScaledVector(o[1],2*.511664*r),n.addScaledVector(o[2],2*.511664*s),n.addScaledVector(o[3],2*.511664*i),n.addScaledVector(o[4],2*.429043*i*r),n.addScaledVector(o[5],2*.429043*r*s),n.addScaledVector(o[6],.743125*s*s-.247708),n.addScaledVector(o[7],2*.429043*i*s),n.addScaledVector(o[8],.429043*(i*i-r*r)),n}add(e){for(let n=0;n<9;n++)this.coefficients[n].add(e.coefficients[n]);return this}addScaledSH(e,n){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],n);return this}scale(e){for(let n=0;n<9;n++)this.coefficients[n].multiplyScalar(e);return this}lerp(e,n){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],n);return this}equals(e){for(let n=0;n<9;n++)if(!this.coefficients[n].equals(e.coefficients[n]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,n+r*3);return this}toArray(e=[],n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,n+r*3);return e}static getBasisAt(e,n){const i=e.x,r=e.y,s=e.z;n[0]=.282095,n[1]=.488603*r,n[2]=.488603*s,n[3]=.488603*i,n[4]=1.092548*i*r,n[5]=1.092548*r*s,n[6]=.315392*(3*s*s-1),n[7]=1.092548*i*s,n[8]=.546274*(i*i-r*r)}}class yC extends Mu{constructor(e=new xC,n=1){super(void 0,n),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const n=super.toJSON(e);return n.object.sh=this.sh.toArray(),n}}class Sp{constructor(e){this.value=e}clone(){return new Sp(this.value.clone===void 0?this.value:this.value.clone())}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sp);class SC extends hp{constructor(e=null){super();const n=new es;n.deleteAttribute("uv");const i=new Ei({side:un}),r=new Ei;let s=5;e!==null&&e._useLegacyLights===!1&&(s=900);const o=new vC(16777215,s,28,2);o.position.set(.418,16.199,.3),this.add(o);const a=new et(n,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const l=new et(n,r);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);const c=new et(n,r);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);const u=new et(n,r);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);const h=new et(n,r);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const d=new et(n,r);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const p=new et(n,r);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);const m=new et(n,ys(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const v=new et(n,ys(50));v.position.set(-16.109,18.021,-8.207),v.scale.set(.1,2.425,2.751),this.add(v);const g=new et(n,ys(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const f=new et(n,ys(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const x=new et(n,ys(20));x.position.set(3.235,11.486,-12.541),x.scale.set(2.5,2,.1),this.add(x);const _=new et(n,ys(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function ys(t){const e=new _u;return e.color.setScalar(t),e}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var sn=Uint8Array,bn=Uint16Array,Mp=Int32Array,wp=new sn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ep=new sn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),T0=new sn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ey=function(t,e){for(var n=new bn(31),i=0;i<31;++i)n[i]=e+=1<<t[i-1];for(var r=new Mp(n[30]),i=1;i<30;++i)for(var s=n[i];s<n[i+1];++s)r[s]=s-n[i]<<5|i;return{b:n,r}},ty=ey(wp,2),MC=ty.b,tf=ty.r;MC[28]=258,tf[258]=28;var wC=ey(Ep,0),A0=wC.r,nf=new bn(32768);for(var pt=0;pt<32768;++pt){var Xi=(pt&43690)>>1|(pt&21845)<<1;Xi=(Xi&52428)>>2|(Xi&13107)<<2,Xi=(Xi&61680)>>4|(Xi&3855)<<4,nf[pt]=((Xi&65280)>>8|(Xi&255)<<8)>>1}var va=function(t,e,n){for(var i=t.length,r=0,s=new bn(e);r<i;++r)t[r]&&++s[t[r]-1];var o=new bn(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(n){a=new bn(1<<e);var l=15-e;for(r=0;r<i;++r)if(t[r])for(var c=r<<4|t[r],u=e-t[r],h=o[t[r]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)a[nf[h]>>l]=c}else for(a=new bn(i),r=0;r<i;++r)t[r]&&(a[r]=nf[o[t[r]-1]++]>>15-t[r]);return a},Yr=new sn(288);for(var pt=0;pt<144;++pt)Yr[pt]=8;for(var pt=144;pt<256;++pt)Yr[pt]=9;for(var pt=256;pt<280;++pt)Yr[pt]=7;for(var pt=280;pt<288;++pt)Yr[pt]=8;var Zc=new sn(32);for(var pt=0;pt<32;++pt)Zc[pt]=5;var EC=va(Yr,9,0),TC=va(Zc,5,0),ny=function(t){return(t+7)/8|0},iy=function(t,e,n){return(n==null||n>t.length)&&(n=t.length),new sn(t.subarray(e,n))},AC=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],wu=function(t,e,n){var i=new Error(e||AC[t]);if(i.code=t,Error.captureStackTrace&&Error.captureStackTrace(i,wu),!n)throw i;return i},yi=function(t,e,n){n<<=e&7;var i=e/8|0;t[i]|=n,t[i+1]|=n>>8},Bo=function(t,e,n){n<<=e&7;var i=e/8|0;t[i]|=n,t[i+1]|=n>>8,t[i+2]|=n>>16},Bh=function(t,e){for(var n=[],i=0;i<t.length;++i)t[i]&&n.push({s:i,f:t[i]});var r=n.length,s=n.slice();if(!r)return{t:sy,l:0};if(r==1){var o=new sn(n[0].s+1);return o[n[0].s]=1,{t:o,l:1}}n.sort(function(C,E){return C.f-E.f}),n.push({s:-1,f:25001});var a=n[0],l=n[1],c=0,u=1,h=2;for(n[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=r-1;)a=n[n[c].f<n[h].f?c++:h++],l=n[c!=u&&n[c].f<n[h].f?c++:h++],n[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var d=s[0].s,i=1;i<r;++i)s[i].s>d&&(d=s[i].s);var p=new bn(d+1),m=rf(n[u-1],p,0);if(m>e){var i=0,v=0,g=m-e,f=1<<g;for(s.sort(function(E,A){return p[A.s]-p[E.s]||E.f-A.f});i<r;++i){var x=s[i].s;if(p[x]>e)v+=f-(1<<m-p[x]),p[x]=e;else break}for(v>>=g;v>0;){var _=s[i].s;p[_]<e?v-=1<<e-p[_]++-1:++i}for(;i>=0&&v;--i){var y=s[i].s;p[y]==e&&(--p[y],++v)}m=e}return{t:new sn(p),l:m}},rf=function(t,e,n){return t.s==-1?Math.max(rf(t.l,e,n+1),rf(t.r,e,n+1)):e[t.s]=n},b0=function(t){for(var e=t.length;e&&!t[--e];);for(var n=new bn(++e),i=0,r=t[0],s=1,o=function(l){n[i++]=l},a=1;a<=e;++a)if(t[a]==r&&a!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=t[a]}return{c:n.subarray(0,i),n:e}},Ho=function(t,e){for(var n=0,i=0;i<e.length;++i)n+=t[i]*e[i];return n},ry=function(t,e,n){var i=n.length,r=ny(e+2);t[r]=i&255,t[r+1]=i>>8,t[r+2]=t[r]^255,t[r+3]=t[r+1]^255;for(var s=0;s<i;++s)t[r+s+4]=n[s];return(r+4+i)*8},C0=function(t,e,n,i,r,s,o,a,l,c,u){yi(e,u++,n),++r[256];for(var h=Bh(r,15),d=h.t,p=h.l,m=Bh(s,15),v=m.t,g=m.l,f=b0(d),x=f.c,_=f.n,y=b0(v),C=y.c,E=y.n,A=new bn(19),P=0;P<x.length;++P)++A[x[P]&31];for(var P=0;P<C.length;++P)++A[C[P]&31];for(var w=Bh(A,7),M=w.t,U=w.l,B=19;B>4&&!M[T0[B-1]];--B);var D=c+5<<3,z=Ho(r,Yr)+Ho(s,Zc)+o,j=Ho(r,d)+Ho(s,v)+o+14+3*B+Ho(A,M)+2*A[16]+3*A[17]+7*A[18];if(l>=0&&D<=z&&D<=j)return ry(e,u,t.subarray(l,l+c));var Z,Q,N,H;if(yi(e,u,1+(j<z)),u+=2,j<z){Z=va(d,p,0),Q=d,N=va(v,g,0),H=v;var q=va(M,U,0);yi(e,u,_-257),yi(e,u+5,E-1),yi(e,u+10,B-4),u+=14;for(var P=0;P<B;++P)yi(e,u+3*P,M[T0[P]]);u+=3*B;for(var te=[x,C],Se=0;Se<2;++Se)for(var Fe=te[Se],P=0;P<Fe.length;++P){var G=Fe[P]&31;yi(e,u,q[G]),u+=M[G],G>15&&(yi(e,u,Fe[P]>>5&127),u+=Fe[P]>>12)}}else Z=EC,Q=Yr,N=TC,H=Zc;for(var P=0;P<a;++P){var ie=i[P];if(ie>255){var G=ie>>18&31;Bo(e,u,Z[G+257]),u+=Q[G+257],G>7&&(yi(e,u,ie>>23&31),u+=wp[G]);var de=ie&31;Bo(e,u,N[de]),u+=H[de],de>3&&(Bo(e,u,ie>>5&8191),u+=Ep[de])}else Bo(e,u,Z[ie]),u+=Q[ie]}return Bo(e,u,Z[256]),u+Q[256]},bC=new Mp([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),sy=new sn(0),CC=function(t,e,n,i,r,s){var o=s.z||t.length,a=new sn(i+o+5*(1+Math.ceil(o/7e3))+r),l=a.subarray(i,a.length-r),c=s.l,u=(s.r||0)&7;if(e){u&&(l[0]=s.r>>3);for(var h=bC[e-1],d=h>>13,p=h&8191,m=(1<<n)-1,v=s.p||new bn(32768),g=s.h||new bn(m+1),f=Math.ceil(n/3),x=2*f,_=function(J){return(t[J]^t[J+1]<<f^t[J+2]<<x)&m},y=new Mp(25e3),C=new bn(288),E=new bn(32),A=0,P=0,w=s.i||0,M=0,U=s.w||0,B=0;w+2<o;++w){var D=_(w),z=w&32767,j=g[D];if(v[z]=j,g[D]=z,U<=w){var Z=o-w;if((A>7e3||M>24576)&&(Z>423||!c)){u=C0(t,l,0,y,C,E,P,M,B,w-B,u),M=A=P=0,B=w;for(var Q=0;Q<286;++Q)C[Q]=0;for(var Q=0;Q<30;++Q)E[Q]=0}var N=2,H=0,q=p,te=z-j&32767;if(Z>2&&D==_(w-te))for(var Se=Math.min(d,Z)-1,Fe=Math.min(32767,w),G=Math.min(258,Z);te<=Fe&&--q&&z!=j;){if(t[w+N]==t[w+N-te]){for(var ie=0;ie<G&&t[w+ie]==t[w+ie-te];++ie);if(ie>N){if(N=ie,H=te,ie>Se)break;for(var de=Math.min(te,ie-2),le=0,Q=0;Q<de;++Q){var Oe=w-te+Q&32767,Ve=v[Oe],F=Oe-Ve&32767;F>le&&(le=F,j=Oe)}}}z=j,j=v[z],te+=z-j&32767}if(H){y[M++]=268435456|tf[N]<<18|A0[H];var ze=tf[N]&31,Y=A0[H]&31;P+=wp[ze]+Ep[Y],++C[257+ze],++E[Y],U=w+N,++A}else y[M++]=t[w],++C[t[w]]}}for(w=Math.max(w,U);w<o;++w)y[M++]=t[w],++C[t[w]];u=C0(t,l,c,y,C,E,P,M,B,w-B,u),c||(s.r=u&7|l[u/8|0]<<3,u-=7,s.h=g,s.p=v,s.i=w,s.w=U)}else{for(var w=s.w||0;w<o+c;w+=65535){var ae=w+65535;ae>=o&&(l[u/8|0]=c,ae=o),u=ry(l,u+1,t.subarray(w,ae))}s.i=o}return iy(a,0,i+ny(u)+r)},RC=function(){for(var t=new Int32Array(256),e=0;e<256;++e){for(var n=e,i=9;--i;)n=(n&1&&-306674912)^n>>>1;t[e]=n}return t}(),PC=function(){var t=-1;return{p:function(e){for(var n=t,i=0;i<e.length;++i)n=RC[n&255^e[i]]^n>>>8;t=n},d:function(){return~t}}},LC=function(t,e,n,i,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),o=new sn(s.length+t.length);o.set(s),o.set(t,s.length),t=o,r.w=s.length}return CC(t,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(t.length)))*1.5):20:12+e.mem,n,i,r)},oy=function(t,e){var n={};for(var i in t)n[i]=t[i];for(var i in e)n[i]=e[i];return n},Wt=function(t,e,n){for(;n;++e)t[e]=n,n>>>=8};function NC(t,e){return LC(t,e||{},0,0)}var ay=function(t,e,n,i){for(var r in t){var s=t[r],o=e+r,a=i;Array.isArray(s)&&(a=oy(i,s[1]),s=s[0]),s instanceof sn?n[o]=[s,a]:(n[o+="/"]=[new sn(0),a],ay(s,o,n,i))}},R0=typeof TextEncoder<"u"&&new TextEncoder,DC=typeof TextDecoder<"u"&&new TextDecoder,IC=0;try{DC.decode(sy,{stream:!0}),IC=1}catch{}function Kc(t,e){var n;if(R0)return R0.encode(t);for(var i=t.length,r=new sn(t.length+(t.length>>1)),s=0,o=function(c){r[s++]=c},n=0;n<i;++n){if(s+5>r.length){var a=new sn(s+8+(i-n<<1));a.set(r),r=a}var l=t.charCodeAt(n);l<128||e?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|t.charCodeAt(++n)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return iy(r,0,s)}var sf=function(t){var e=0;if(t)for(var n in t){var i=t[n].length;i>65535&&wu(9),e+=i+4}return e},P0=function(t,e,n,i,r,s,o,a){var l=i.length,c=n.extra,u=a&&a.length,h=sf(c);Wt(t,e,o!=null?33639248:67324752),e+=4,o!=null&&(t[e++]=20,t[e++]=n.os),t[e]=20,e+=2,t[e++]=n.flag<<1|(s<0&&8),t[e++]=r&&8,t[e++]=n.compression&255,t[e++]=n.compression>>8;var d=new Date(n.mtime==null?Date.now():n.mtime),p=d.getFullYear()-1980;if((p<0||p>119)&&wu(10),Wt(t,e,p<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>1),e+=4,s!=-1&&(Wt(t,e,n.crc),Wt(t,e+4,s<0?-s-2:s),Wt(t,e+8,n.size)),Wt(t,e+12,l),Wt(t,e+14,h),e+=16,o!=null&&(Wt(t,e,u),Wt(t,e+6,n.attrs),Wt(t,e+10,o),e+=14),t.set(i,e),e+=l,h)for(var m in c){var v=c[m],g=v.length;Wt(t,e,+m),Wt(t,e+2,g),t.set(v,e+4),e+=4+g}return u&&(t.set(a,e),e+=u),e},UC=function(t,e,n,i,r){Wt(t,e,101010256),Wt(t,e+8,n),Wt(t,e+10,n),Wt(t,e+12,i),Wt(t,e+16,r)};function FC(t,e){e||(e={});var n={},i=[];ay(t,"",n,e);var r=0,s=0;for(var o in n){var a=n[o],l=a[0],c=a[1],u=c.level==0?0:8,h=Kc(o),d=h.length,p=c.comment,m=p&&Kc(p),v=m&&m.length,g=sf(c.extra);d>65535&&wu(11);var f=u?NC(l,c):l,x=f.length,_=PC();_.p(l),i.push(oy(c,{size:l.length,crc:_.d(),c:f,f:h,m,u:d!=o.length||m&&p.length!=v,o:r,compression:u})),r+=30+d+g+x,s+=76+2*(d+g)+(v||0)+x}for(var y=new sn(s+22),C=r,E=s-r,A=0;A<i.length;++A){var h=i[A];P0(y,h.o,h,h.f,h.u,h.c.length);var P=30+h.f.length+sf(h.extra);y.set(h.c,h.o+P),P0(y,r,h,h.f,h.u,h.c.length,h.o,h.m),r+=16+P+(h.m?h.m.length:0)}return UC(y,r,i.length,E,C),y}let Vo,Hh,Ss,Yl;function OC(t,e=1/0,n=null){Hh||(Hh=new Li(2,2,1,1)),Ss||(Ss=new Oi({uniforms:{blitTexture:new Sp(t)},vertexShader:`
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
			}`})),Ss.uniforms.blitTexture.value=t,Ss.defines.IS_SRGB=t.colorSpace==pn,Ss.needsUpdate=!0,Yl||(Yl=new et(Hh,Ss),Yl.frustumCulled=!1);const i=new gn,r=new hp;r.add(Yl),n===null&&(n=Vo=new Wx({antialias:!1}));const s=Math.min(t.image.width,e),o=Math.min(t.image.height,e);n.setSize(s,o),n.clear(),n.render(r,i);const a=document.createElement("canvas"),l=a.getContext("2d");a.width=s,a.height=o,l.drawImage(n.domElement,0,0,s,o);const c=new dp(a);return c.minFilter=t.minFilter,c.magFilter=t.magFilter,c.wrapS=t.wrapS,c.wrapT=t.wrapT,c.name=t.name,Vo&&(Vo.forceContextLoss(),Vo.dispose(),Vo=null),c}class kC{parse(e,n,i,r){this.parseAsync(e,r).then(n).catch(i)}async parseAsync(e,n={}){n=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},quickLookCompatible:!1,maxTextureSize:1024},n);const i={},r="model.usda";i[r]=null;let s=ly();s+=BC(n);const o={},a={};e.traverseVisible(c=>{if(c.isMesh){const u=c.geometry,h=c.material;if(h.isMeshStandardMaterial){const d="geometries/Geometry_"+u.id+".usda";if(!(d in i)){const p=WC(u);i[d]=VC(p)}h.uuid in o||(o[h.uuid]=h),s+=GC(c,u,h)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",c)}else c.isCamera&&(s+=QC(c))}),s+=HC(),s+=ZC(o,a,n.quickLookCompatible),i[r]=Kc(s),s=null;for(const c in a){let u=a[c];u.isCompressedTexture===!0&&(u=OC(u));const h=zC(u.image,u.flipY,n.maxTextureSize),d=await new Promise(p=>h.toBlob(p,"image/png",1));i[`textures/Texture_${c}.png`]=new Uint8Array(await d.arrayBuffer())}let l=0;for(const c in i){const u=i[c],h=34+c.length;l+=h;const d=l&63;if(d!==4){const p=64-d,m=new Uint8Array(p);i[c]=[u,{extra:{12345:m}}]}l=u.length}return FC(i,{level:0})}}function zC(t,e,n){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=n/Math.max(t.width,t.height),r=document.createElement("canvas");r.width=t.width*Math.min(1,i),r.height=t.height*Math.min(1,i);const s=r.getContext("2d");return e===!0&&(s.translate(0,r.height),s.scale(1,-1)),s.drawImage(t,0,0,r.width,r.height),r}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}const en=7;function ly(){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`}function BC(t){return`def Xform "Root"
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

`}function HC(){return`
		}
	}
}

`}function VC(t){let e=ly();return e+=t,Kc(e)}function GC(t,e,n){const i="Object_"+t.id,r=cy(t.matrixWorld);return t.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",t),`def Xform "${i}" (
	prepend references = @./geometries/Geometry_${e.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${r}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${n.id}>
}

`}function cy(t){const e=t.elements;return`( ${Zl(e,0)}, ${Zl(e,4)}, ${Zl(e,8)}, ${Zl(e,12)} )`}function Zl(t,e){return`(${t[e+0]}, ${t[e+1]}, ${t[e+2]}, ${t[e+3]})`}function WC(t){return`
def "Geometry"
{
${$C(t)}
}
`}function $C(t){const e="Geometry",n=t.attributes,i=n.position.count;return`
	def Mesh "${e}"
	{
		int[] faceVertexCounts = [${jC(t)}]
		int[] faceVertexIndices = [${XC(t)}]
		normal3f[] normals = [${of(n.normal,i)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${of(n.position,i)}]
${YC(n)}
		uniform token subdivisionScheme = "none"
	}
`}function jC(t){const e=t.index!==null?t.index.count:t.attributes.position.count;return Array(e/3).fill(3).join(", ")}function XC(t){const e=t.index,n=[];if(e!==null)for(let i=0;i<e.count;i++)n.push(e.getX(i));else{const i=t.attributes.position.count;for(let r=0;r<i;r++)n.push(r)}return n.join(", ")}function of(t,e){if(t===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");const n=[];for(let i=0;i<t.count;i++){const r=t.getX(i),s=t.getY(i),o=t.getZ(i);n.push(`(${r.toPrecision(en)}, ${s.toPrecision(en)}, ${o.toPrecision(en)})`)}return n.join(", ")}function qC(t){const e=[];for(let n=0;n<t.count;n++){const i=t.getX(n),r=t.getY(n);e.push(`(${i.toPrecision(en)}, ${1-r.toPrecision(en)})`)}return e.join(", ")}function YC(t){let e="";for(let i=0;i<4;i++){const r=i>0?i:"",s=t["uv"+r];s!==void 0&&(e+=`
		texCoord2f[] primvars:st${r} = [${qC(s)}] (
			interpolation = "vertex"
		)`)}const n=t.color;if(n!==void 0){const i=n.count;e+=`
	color3f[] primvars:displayColor = [${of(n,i)}] (
		interpolation = "vertex"
		)`}return e}function ZC(t,e,n=!1){const i=[];for(const r in t){const s=t[r];i.push(KC(s,e,n))}return`def "Materials"
{
${i.join("")}
}

`}function KC(t,e,n=!1){const i="			",r=[],s=[];function o(a,l,c){const u=a.source.id+"_"+a.flipY;e[u]=a;const h=a.channel>0?"st"+a.channel:"st",d={1e3:"repeat",1001:"clamp",1002:"mirror"},p=a.repeat.clone(),m=a.offset.clone(),v=a.rotation,g=Math.sin(v),f=Math.cos(v);return m.y=1-m.y-p.y,n?(m.x=m.x/p.x,m.y=m.y/p.y,m.x+=g/p.x,m.y+=f-1):(m.x+=g*p.x,m.y+=(1-f)*p.y),`
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
			float inputs:rotation = ${(v*(180/Math.PI)).toFixed(en)}
			float2 inputs:scale = ${N0(p)}
			float2 inputs:translation = ${N0(m)}
			float2 outputs:result
		}

		def Shader "Texture_${a.id}_${l}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${u}.png@
			float2 inputs:st.connect = </Materials/Material_${t.id}/Transform2d_${l}.outputs:result>
			${c!==void 0?"float4 inputs:scale = "+JC(c):""}
			token inputs:sourceColorSpace = "${a.colorSpace===Jn?"raw":"sRGB"}"
			token inputs:wrapS = "${d[a.wrapS]}"
			token inputs:wrapT = "${d[a.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${t.transparent||t.alphaTest>0?"float outputs:a":""}
		}`}return t.side===$t&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",t),t.map!==null?(r.push(`${i}color3f inputs:diffuseColor.connect = </Materials/Material_${t.id}/Texture_${t.map.id}_diffuse.outputs:rgb>`),t.transparent?r.push(`${i}float inputs:opacity.connect = </Materials/Material_${t.id}/Texture_${t.map.id}_diffuse.outputs:a>`):t.alphaTest>0&&(r.push(`${i}float inputs:opacity.connect = </Materials/Material_${t.id}/Texture_${t.map.id}_diffuse.outputs:a>`),r.push(`${i}float inputs:opacityThreshold = ${t.alphaTest}`)),s.push(o(t.map,"diffuse",t.color))):r.push(`${i}color3f inputs:diffuseColor = ${L0(t.color)}`),t.emissiveMap!==null?(r.push(`${i}color3f inputs:emissiveColor.connect = </Materials/Material_${t.id}/Texture_${t.emissiveMap.id}_emissive.outputs:rgb>`),s.push(o(t.emissiveMap,"emissive"))):t.emissive.getHex()>0&&r.push(`${i}color3f inputs:emissiveColor = ${L0(t.emissive)}`),t.normalMap!==null&&(r.push(`${i}normal3f inputs:normal.connect = </Materials/Material_${t.id}/Texture_${t.normalMap.id}_normal.outputs:rgb>`),s.push(o(t.normalMap,"normal"))),t.aoMap!==null&&(r.push(`${i}float inputs:occlusion.connect = </Materials/Material_${t.id}/Texture_${t.aoMap.id}_occlusion.outputs:r>`),s.push(o(t.aoMap,"occlusion"))),t.roughnessMap!==null&&t.roughness===1?(r.push(`${i}float inputs:roughness.connect = </Materials/Material_${t.id}/Texture_${t.roughnessMap.id}_roughness.outputs:g>`),s.push(o(t.roughnessMap,"roughness"))):r.push(`${i}float inputs:roughness = ${t.roughness}`),t.metalnessMap!==null&&t.metalness===1?(r.push(`${i}float inputs:metallic.connect = </Materials/Material_${t.id}/Texture_${t.metalnessMap.id}_metallic.outputs:b>`),s.push(o(t.metalnessMap,"metallic"))):r.push(`${i}float inputs:metallic = ${t.metalness}`),t.alphaMap!==null?(r.push(`${i}float inputs:opacity.connect = </Materials/Material_${t.id}/Texture_${t.alphaMap.id}_opacity.outputs:r>`),r.push(`${i}float inputs:opacityThreshold = 0.0001`),s.push(o(t.alphaMap,"opacity"))):r.push(`${i}float inputs:opacity = ${t.opacity}`),t.isMeshPhysicalMaterial&&(r.push(`${i}float inputs:clearcoat = ${t.clearcoat}`),r.push(`${i}float inputs:clearcoatRoughness = ${t.clearcoatRoughness}`),r.push(`${i}float inputs:ior = ${t.ior}`)),`
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
`}function L0(t){return`(${t.r}, ${t.g}, ${t.b})`}function JC(t){return`(${t.r}, ${t.g}, ${t.b}, 1.0)`}function N0(t){return`(${t.x}, ${t.y})`}function QC(t){const e=t.name?t.name:"Camera_"+t.id,n=cy(t.matrixWorld);return t.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",t),t.isOrthographicCamera?`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${n}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${t.near.toPrecision(en)}, ${t.far.toPrecision(en)})
			float horizontalAperture = ${((Math.abs(t.left)+Math.abs(t.right))*10).toPrecision(en)}
			float verticalAperture = ${((Math.abs(t.top)+Math.abs(t.bottom))*10).toPrecision(en)}
			token projection = "orthographic"
		}
	
	`:`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${n}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${t.near.toPrecision(en)}, ${t.far.toPrecision(en)})
			float focalLength = ${t.getFocalLength().toPrecision(en)}
			float focusDistance = ${t.focus.toPrecision(en)}
			float horizontalAperture = ${t.getFilmWidth().toPrecision(en)}
			token projection = "perspective"
			float verticalAperture = ${t.getFilmHeight().toPrecision(en)}
		}
	
	`}class eR{constructor(e,n,i,r,s){this.xrLight=e,this.renderer=n,this.lightProbe=i,this.xrWebGLBinding=null,this.estimationStartCallback=s,this.frameCallback=this.onXRFrame.bind(this);const o=n.xr.getSession();if(r&&"XRWebGLBinding"in window){const a=new Ux(16);e.environment=a.texture;const l=n.getContext();switch(o.preferredReflectionFormat){case"srgba8":l.getExtension("EXT_sRGB");break;case"rgba16f":l.getExtension("OES_texture_half_float");break}this.xrWebGLBinding=new XRWebGLBinding(o,l),this.lightProbe.addEventListener("reflectionchange",()=>{this.updateReflection()})}o.requestAnimationFrame(this.frameCallback)}updateReflection(){const e=this.renderer.properties.get(this.xrLight.environment);if(e){const n=this.xrWebGLBinding.getReflectionCubeMap(this.lightProbe);n&&(e.__webglTexture=n,this.xrLight.environment.needsPMREMUpdate=!0)}}onXRFrame(e,n){if(!this.xrLight)return;n.session.requestAnimationFrame(this.frameCallback);const r=n.getLightEstimate(this.lightProbe);if(r){this.xrLight.lightProbe.sh.fromArray(r.sphericalHarmonicsCoefficients),this.xrLight.lightProbe.intensity=1;const s=Math.max(1,Math.max(r.primaryLightIntensity.x,Math.max(r.primaryLightIntensity.y,r.primaryLightIntensity.z)));this.xrLight.directionalLight.color.setRGB(r.primaryLightIntensity.x/s,r.primaryLightIntensity.y/s,r.primaryLightIntensity.z/s),this.xrLight.directionalLight.intensity=s,this.xrLight.directionalLight.position.copy(r.primaryLightDirection),this.estimationStartCallback&&(this.estimationStartCallback(),this.estimationStartCallback=null)}}dispose(){this.xrLight=null,this.renderer=null,this.lightProbe=null,this.xrWebGLBinding=null}}class tR extends zn{constructor(e,n=!0){super(),this.lightProbe=new yC,this.lightProbe.intensity=0,this.add(this.lightProbe),this.directionalLight=new ia,this.directionalLight.intensity=0,this.add(this.directionalLight),this.environment=null;let i=null,r=!1;e.xr.addEventListener("sessionstart",()=>{const s=e.xr.getSession();"requestLightProbe"in s&&s.requestLightProbe({reflectionFormat:s.preferredReflectionFormat}).then(o=>{i=new eR(this,e,o,n,()=>{r=!0,this.dispatchEvent({type:"estimationstart"})})})}),e.xr.addEventListener("sessionend",()=>{i&&(i.dispose(),i=null),r&&this.dispatchEvent({type:"estimationend"})}),this.dispose=()=>{i&&(i.dispose(),i=null),this.remove(this.lightProbe),this.lightProbe=null,this.remove(this.directionalLight),this.directionalLight=null,this.environment=null}}}const Rr={sheet_metal_001:{folder:"mild_steel_mill",metalness:.88,roughness:.5,anisotropy:.22,envMapIntensity:1.65,hex:"#7a746c",tint:"#c4bdb4",colorBoost:1.55,clearcoat:.03,anisotropyMap:!1,useColorMap:!0,useNormalMap:!0,useRoughnessMap:!0,useMetalnessMap:!1},metal049a_ss:{folder:"stainless_304_brushed",metalness:.96,roughness:.28,anisotropy:.72,envMapIntensity:2.2,hex:"#d8e0e6",tint:"#eef3f6",colorBoost:1.2,clearcoat:.06,anisotropyMap:!0,useColorMap:!0,useNormalMap:!0,useRoughnessMap:!0,useMetalnessMap:!0},metal049a_alu:{folder:"brushed_aluminium",metalness:.94,roughness:.3,anisotropy:.55,envMapIntensity:2,hex:"#e8ecef",tint:"#f4f6f8",colorBoost:1.15,clearcoat:.04,anisotropyMap:!0,useColorMap:!0,useNormalMap:!0,useRoughnessMap:!0,useMetalnessMap:!0},metal049a_brushed:{folder:"stainless_304_brushed",metalness:.95,roughness:.4,anisotropy:.85,envMapIntensity:2.15,hex:"#e8eef2",tint:"#eef3f6",colorBoost:1.15,clearcoat:.04,anisotropyMap:!0,useColorMap:!0,useNormalMap:!0,useRoughnessMap:!0,useMetalnessMap:!0},galvanized_steel:{folder:"galvanized_steel",metalness:.92,roughness:.4,anisotropy:0,envMapIntensity:1.72,hex:"#9aa48e",tint:"#c5cdc0",clearcoat:.05,anisotropyMap:!1,useColorMap:!0},powdercoat_satin:{folder:"powdercoat_satin",metalness:0,roughness:.46,anisotropy:0,envMapIntensity:.95,hex:null,clearcoat:.28,anisotropyMap:!1,useColorMap:!1,useMetalnessMap:!1}};function uy(t={}){const e=t.material||"carbon",n=t.finish||"mill";return n==="powder"?{id:"powdercoat_satin",...Rr.powdercoat_satin}:n==="galvanized"?{id:"galvanized_steel",...Rr.galvanized_steel}:n==="brushed"?e==="carbon"?{id:"sheet_metal_001",...Rr.sheet_metal_001,anisotropy:.58,roughness:.54}:{id:"metal049a_brushed",...Rr.metal049a_brushed}:e==="ss304"?{id:"metal049a_ss",...Rr.metal049a_ss}:e==="alu"?{id:"metal049a_alu",...Rr.metal049a_alu}:{id:"sheet_metal_001",...Rr.sheet_metal_001}}const zt={ral9005:{label:"RAL 9005",name:"Jet black",hex:"#0a0a0d",color:657933},ral7016:{label:"RAL 7016",name:"Anthracite Grey",hex:"#383e42",color:3685954},ral7035:{label:"RAL 7035",name:"Light grey",hex:"#c5c7c4",color:12961732},ral9010:{label:"RAL 9010",name:"Pure white",hex:"#f1eee8",color:15855336},ral3000:{label:"RAL 3000",name:"Flame red",hex:"#a72920",color:10955040},ral5005:{label:"RAL 5005",name:"Signal blue",hex:"#154889",color:1394825},ral6005:{label:"RAL 6005",name:"Moss green",hex:"#0f4336",color:1000246},ral1003:{label:"RAL 1003",name:"Signal yellow",hex:"#f3a900",color:15968512},ral7021:{label:"RAL 7021",name:"Black grey",hex:"#2e3234",color:3027508},ral9006:{label:"RAL 9006",name:"White aluminium",hex:"#a5a8a6",color:10856614},ral9007:{label:"RAL 9007",name:"Grey aluminium",hex:"#8f8c83",color:9407619},ral5010:{label:"RAL 5010",name:"Gentian blue",hex:"#0e518d",color:938381},ral3020:{label:"RAL 3020",name:"Traffic red",hex:"#bf111b",color:12521755},ral1021:{label:"RAL 1021",name:"Rape yellow",hex:"#e4b800",color:14989312},ral6018:{label:"RAL 6018",name:"Yellow green",hex:"#4e9b41",color:5151553},ral2004:{label:"RAL 2004",name:"Pure orange",hex:"#e75b12",color:15162130},ral4008:{label:"RAL 4008",name:"Signal violet",hex:"#844c82",color:8670338},ral8017:{label:"RAL 8017",name:"Chocolate brown",hex:"#45322e",color:4534830},ral7040:{label:"RAL 7040",name:"Window grey",hex:"#9da3a6",color:10331046},ral9016:{label:"RAL 9016",name:"Traffic white",hex:"#f1f0ea",color:15855850}},hy=Object.keys(zt),nR=hy.slice(0,8),Bn={carbon:{label:"Carbon steel",short:"CRS",density:7850,baseHex:"#7a746c",galvanizedHex:"#9aa48e",metalness:.9,roughness:.46,grain:"rolled",preview:{hi:"#c4bdb4",mid:"#8a847c",lo:"#5a564f"},cardImage:"./materials/cards/carbon-steel.jpg"},ss304:{label:"Stainless 304",short:"304",density:7930,baseHex:"#e8eef2",galvanizedHex:"#c5d0c8",metalness:.99,roughness:.11,grain:"brushed",preview:{hi:"#f4f7f9",mid:"#c5ced4",lo:"#8f99a1"},cardImage:"./materials/cards/stainless-304.jpg"},alu:{label:"Aluminium",short:"ALU",density:2700,baseHex:"#f3f5f7",galvanizedHex:"#d8dcd8",metalness:.97,roughness:.17,grain:"fine",preview:{hi:"#fcfdfe",mid:"#e4e8eb",lo:"#b8bcc0"},cardImage:"./materials/cards/aluminium.jpg"}},Zs={flat:{label:"Flat sheet"},topFold:{label:"Top fold"},sideReturns:{label:"Side returns"},cassette:{label:"Cassette panel"}},Ga={square:{label:"Square"},radius:{label:"Radius"},chamfer:{label:"Chamfer"}},dy=10;function Ks(t={}){if(t.corner==="square"||!t.corner)return 0;const e=Math.max(1,Math.floor(Math.min(Number(t.width)||0,Number(t.height)||0)/3));return Math.min(ut(t.cornerRadius,dy,1,150,1),e)}const iR=[{label:"1000 × 2000",w:1e3,h:2e3},{label:"1250 × 2500",w:1250,h:2500},{label:"1500 × 3000",w:1500,h:3e3},{label:"2000 × 4000",w:2e3,h:4e3}],Tp=25.4,co={mill:{label:"Mill / raw",code:"ML",roughness:.36},galvanized:{label:"Galvanized",code:"GZ",roughness:.4},brushed:{label:"Brushed",code:"BR",roughness:.22},powder:{label:"Powder coated",code:"PC",roughness:.48}},Ce={round60:{label:"Round hole",short:"R60",kind:"round",staggered:!0,through:!0,family:"standard",process:"punch",blurb:"Round openings on a true 60° staggered triangular pitch."},square:{label:"Square hole",short:"SQ",kind:"square",staggered:!1,through:!0,family:"standard",process:"punch",blurb:"Square openings on an aligned straight grid for architectural applications."},slot:{label:"Slot hole",short:"SL",kind:"slot",staggered:!0,through:!0,family:"standard",process:"punch",blurb:"Vertical round-ended slots with independent column and row pitch."},hex:{label:"Hexagonal",short:"HX",kind:"hex",staggered:!0,through:!0,family:"standard",process:"punch",blurb:"True six-sided openings on a 60° staggered honeycomb layout. Size is point-to-point."},roundStraight:{label:"Round · straight",short:"RS",kind:"round",staggered:!1,through:!0,family:"standard",process:"punch",blurb:"Round openings with horizontal and vertical rows aligned."},bridgeSlot:{label:"Bridge slot",short:"BS",kind:"bridge",staggered:!0,through:!0,formed:!0,family:"formed",process:"form+punch",blurb:"Horizontal raised bridge/louver over a slotted opening for directional flow."},trieur:{label:"Trieur cups",short:"TR",kind:"trieur",staggered:!0,through:!1,formed:!0,family:"formed",process:"form",blurb:"Formed sorting cups/dimples with no through-cut opening."},perfocon:{label:"Perfocon conical",short:"PF",kind:"perfocon",staggered:!0,through:!0,conical:!0,formed:!0,family:"specialty",process:"form+punch",blurb:"Raised conical collar with a punched-through centre. Choose 30° heavy-duty or 60° DIN 9861 / ISO 6752."},decorative:{label:"Decorative clusters",short:"DC",kind:"decorative",staggered:!1,through:!0,family:"specialty",process:"punch",blurb:"Repeatable 13-hole diamond clusters on a controlled motif pitch."},embossed:{label:"Embossed diamond",short:"EM",kind:"embossed",staggered:!0,through:!0,formed:!0,family:"formed",process:"form+punch",blurb:"Raised diamond formed on the face, punched through from the back so the opening is visible on the reverse."}},rR=[{id:"standard",title:"Standard perforation",keys:["round60","square","slot","hex","roundStraight"]},{id:"formed",title:"Formed & specialty",keys:["bridgeSlot","trieur","perfocon","decorative","embossed"]}],vo={round60:{holeSize:8,pitch:12},square:{holeSize:8,pitch:12},slot:{holeSize:5,slotLength:20,pitch:12,rowPitch:24},hex:{holeSize:8,pitch:12},roundStraight:{holeSize:8,pitch:12},bridgeSlot:{holeSize:4,slotLength:22,pitch:26,rowPitch:12},trieur:{holeSize:8,pitch:10},perfocon:{holeSize:3,pitch:8},decorative:{holeSize:3,pitch:32},embossed:{holeSize:12,pitch:18}},sR="Perforated Metal Sheet",fy="Configure perforation, material, finish and fabrication size in real time",oR="mazenbanat@outlook.com",aR="+961 81931045",Hr=Math.sqrt(3)/2,D0={60:{label:"60° DIN 9861",blurb:"ISO 6752 / DIN 9861 Shape DA — standard countersunk head. d₂ = d₁ + √3 mm."},30:{label:"30° heavy duty",blurb:"Dense mill-screen packing. Head is only 1 mm larger than the entrance."}};function kn(t={}){var u;const e=ut(t.thickness,Pe.thickness,.5,12,.5),n=ut(t.holeSize,(u=vo.perfocon)==null?void 0:u.holeSize,1,80,1),i=Number(t.coneAngle)===30?30:60,r=i/2*Math.PI/180,s=i===30?1:Math.sqrt(3),o=n,a=n+s,l=s/2/Math.tan(r),c=Number((o+2*e*Math.tan(r)).toFixed(2));return{entrance:o,head:a,exit:c,height:l,includedDeg:i,headAdd:s}}const Pe={productName:sR,skuPrefix:"PERF",contactEmail:oR,contactPhone:aR,manufacturer:"Innovio Solutions",width:1200,height:2400,thickness:2,basePrice:72,currency:"USD",materialRateCarbon:1.42,materialRateSs304:4.85,materialRateAlu:3.15,finishRateMill:0,finishRateGalvanized:.58,finishRateBrushed:.42,finishRatePowder:.96,punchRate:.014,formedPunchRate:.006,topFoldAdd:18,sideReturnsAdd:32,cassetteAdd:54,customFoldAdd:28,mountingAdd:12,formedPatternAdd:24,notchAdd:8,deburrStandardAdd:4,deburrFineAdd:12,toleranceFineAdd:16,flatnessPrecisionAdd:18,nonStandardBendAdd:10},Ye={width:1200,height:2400,thickness:2,material:"carbon",finish:"mill",color:"ral7016",pattern:"round60",holeSize:8,slotLength:20,pitch:12,rowPitch:12,border:25,orientation:"portrait",units:"mm",quantity:1,panelForm:"flat",flangeDepth:25,bendAngle:90,bendRadius:2,corner:"square",cornerRadius:10,mounting:"none",mountingPitch:150,notches:!1,deburr:"standard",tolerance:"iso-m",flatness:"standard",coneAngle:60};function gc(t,e,n=e==="in"?3:0){const i=e==="in"?t/Tp:t;return Number(i.toFixed(n))}function I0(t,e){const n=Number(t);return Number.isFinite(n)&&e==="in"?n*Tp:n}function ut(t,e,n,i,r=1){const s=Number(t),o=Number.isFinite(s)?s:e;return Math.min(i,Math.max(n,Math.round(o/r)*r))}function lR(t){if(!t||typeof t!="object")return{...Pe};t.productName&&(Pe.productName=String(t.productName).slice(0,120)),t.skuPrefix&&(Pe.skuPrefix=String(t.skuPrefix).replace(/[^A-Za-z0-9]/g,"").slice(0,24).toUpperCase()||Pe.skuPrefix),t.contactEmail&&(Pe.contactEmail=String(t.contactEmail).slice(0,120)),t.manufacturer&&(Pe.manufacturer=String(t.manufacturer).slice(0,80));const e=Number(t.width),n=Number(t.height),i=Number(t.depth);Number.isFinite(e)&&(Pe.width=ut(e,Pe.width,200,3e3,5)),Number.isFinite(n)&&(Pe.height=ut(n,Pe.height,200,4e3,5)),Number.isFinite(i)&&(Pe.thickness=ut(i,Pe.thickness,.5,12,.5));const r=["basePrice","materialRateCarbon","materialRateSs304","materialRateAlu","finishRateMill","finishRateGalvanized","finishRateBrushed","finishRatePowder","punchRate","formedPunchRate","topFoldAdd","sideReturnsAdd","cassetteAdd","customFoldAdd","mountingAdd","formedPatternAdd","notchAdd","deburrStandardAdd","deburrFineAdd","toleranceFineAdd","flatnessPrecisionAdd","nonStandardBendAdd"];for(const s of r){const o=Number(t[s]);Number.isFinite(o)&&o>=0&&(Pe[s]=o)}return t.currency&&(Pe.currency=String(t.currency).replace(/[^A-Za-z]/g,"").slice(0,3).toUpperCase()||Pe.currency),{...Pe}}function py(t={}){const e=ut(t.thickness,Pe.thickness,.5,12,.5),n=ut(t.holeSize,vo.decorative.holeSize,1,80,1),i=Math.max(2,e);return Math.max(n+i,n*1.55)}function U0(t={}){const e=ut(t.holeSize,vo.decorative.holeSize,1,80,1);return py(t)*4+e}function _a(t={}){const e=ut(t.thickness,Pe.thickness,.5,12,.5),n=Ce[t.pattern]||Ce[Ye.pattern],i=n==null?void 0:n.kind,r=ut(t.holeSize,Ye.holeSize,1,80,1),s=ut(t.slotLength,Ye.slotLength,1,160,1),o=(n==null?void 0:n.through)!==!1,a=Math.max(2,e),l=o?n!=null&&n.conical?1:Math.max(2,Math.ceil(e)):Math.max(2,Math.ceil(e*1.5)),c=n!=null&&n.conical?kn({...t,thickness:e,holeSize:r}):null,u=c?c.exit:r;let h,d;i==="slot"?(h=Math.ceil(r+a),d=Math.ceil(s+a)):i==="bridge"?(h=Math.ceil(s+a),d=Math.ceil(r+a)):i==="decorative"?(h=Math.ceil(U0({...t,thickness:e,holeSize:r})+a),d=h):(h=Math.ceil(u+a),d=Math.ceil(h*(n!=null&&n.staggered?Hr:1)));const p=i==="decorative"?U0({...t,thickness:e,holeSize:r})/2:u/2,m=Math.ceil(Math.max(e,p)/5)*5;return{minHoleSize:l,minPitch:Math.max(3,h),minPitchX:Math.max(3,h),minRowPitch:Math.max(3,d),minSlotLength:Math.max(3,Math.ceil(r+2)),minBorder:m,ligament:a}}function st(t={}){var i;const e={...Ye,...t};e.material==="ss316"&&(e.material="alu"),Bn[e.material]||(e.material=Ye.material),co[e.finish]||(e.finish=Ye.finish),zt[e.color]||(e.color=Ye.color),Ce[e.pattern]||(e.pattern=Ye.pattern),e.width=ut(e.width,Pe.width,200,3e3,5),e.height=ut(e.height,Pe.height,200,4e3,5),e.thickness=ut(e.thickness,Pe.thickness,.5,12,.5),e.holeSize=ut(e.holeSize,Ye.holeSize,1,80,1),e.slotLength=ut(e.slotLength,Ye.slotLength,1,160,1),e.pitch=ut(e.pitch,Ye.pitch,2,200,1),e.rowPitch=ut(e.rowPitch,((i=vo[e.pattern])==null?void 0:i.rowPitch)??e.pitch,2,200,1);const n=Math.floor(Math.min(e.width,e.height)/3);return e.border=ut(e.border,Ye.border,0,Math.max(0,n),5),e.units=e.units==="in"?"in":"mm",e.quantity=ut(e.quantity,1,1,9999,1),e.panelForm==="customFold"&&(e.panelForm="topFold"),e.panelForm=Zs[e.panelForm]?e.panelForm:"flat",e.flangeDepth=ut(e.flangeDepth,25,8,150,1),e.bendAngle=ut(e.bendAngle,90,30,120,1),e.bendRadius=ut(e.bendRadius,2,.5,20,.5),e.corner=Ga[e.corner]?e.corner:"square",e.cornerRadius=ut(e.cornerRadius,dy,1,150,1),e.mounting="none",e.mountingPitch=ut(e.mountingPitch,150,40,600,5),e.notches=!1,e.deburr=["none","standard","fine"].includes(e.deburr)?e.deburr:"standard",e.tolerance=["iso-c","iso-m","iso-f"].includes(e.tolerance)?e.tolerance:"iso-m",e.flatness=e.flatness==="precision"?"precision":"standard",e.orientation=e.orientation==="landscape"?"landscape":"portrait",e.coneAngle=Number(e.coneAngle)===30?30:60,e}function cR(){return st({...Ye,width:Pe.width,height:Pe.height,thickness:Pe.thickness})}function uR(t,e){switch(e.type){case"set":return st({...t,[e.key]:e.value});case"setMany":return st({...t,...e.values});case"load":return st(e.config);case"applyCatalogDefaults":return t.width===Ye.width&&t.height===Ye.height&&t.thickness===Ye.thickness?st({...t,...e.values}):t;case"reset":return cR();default:return t}}function my(t){const e=st(t),n=Ce[e.pattern],i=!!(n!=null&&n.staggered),r=(n==null?void 0:n.kind)==="slot"||(n==null?void 0:n.kind)==="bridge"?e.rowPitch:i?e.pitch*Hr:e.pitch;return{c:e,staggered:i,rowPitch:r,left:e.border,right:e.width-e.border,bottom:e.border,top:e.height-e.border}}function Vh(t,e,n){return!(n>0)||t>e+1e-6?0:Math.floor((e-t)/n+1e-6)+1}function hR(t,e,{limit:n=1/0}={}){const{c:i,staggered:r,rowPitch:s,left:o,right:a,bottom:l,top:c}=my(t);let u=0,h=0;for(let d=l+s/2;d<=c-s/2+1e-6;d+=s,u++){const p=r&&u%2?i.pitch/2:0;for(let m=o+i.pitch/2+p;m<=a-i.pitch/2+1e-6;m+=i.pitch)if(e(m,d,h)===!1||(h+=1,h>=n))return h}return h}function Ap(t){const e=st(t),n=py(e);return[[0,-2*n],[-n,-n],[0,-n],[n,-n],[-2*n,0],[-n,0],[0,0],[n,0],[2*n,0],[-n,n],[0,n],[n,n],[0,2*n]]}function dR(t){const{c:e,staggered:n,rowPitch:i,left:r,right:s,bottom:o,top:a}=my(t),l=Vh(o+i/2,a-i/2,i);if(l<=0)return 0;const c=Vh(r+e.pitch/2,s-e.pitch/2,e.pitch);if(!n)return l*c;const u=Vh(r+e.pitch,s-e.pitch/2,e.pitch),h=Math.ceil(l/2),d=Math.floor(l/2);return h*c+d*u}function Eu(t){var i;const e=dR(t),n=st(t);return((i=Ce[n.pattern])==null?void 0:i.kind)==="decorative"?e*Ap(n).length:e}function bp(t){const e=st(t),n=Ce[e.pattern],i=n==null?void 0:n.kind;if((n==null?void 0:n.through)===!1)return 0;const r=e.holeSize,s=Math.max(e.pitch,.1);let o=0;if(i==="round"||i==="perfocon"){const a=n!=null&&n.staggered?s*s*Hr:s*s;o=Math.PI*(r/2)**2/Math.max(1e-6,a)}else if(i==="square")o=r*r/Math.max(1e-6,s*s);else if(i==="hex"){const a=3*Math.sqrt(3)/8*r*r,l=s*s*Hr;o=a/Math.max(1e-6,l)}else if(i==="decorative"){const a=s*s;o=Ap(e).length*Math.PI*(r/2)**2/Math.max(1e-6,a)}else if(i==="slot"||i==="bridge"){const a=r,l=Math.max(e.slotLength,a);o=(Math.max(0,l-a)*a+Math.PI*(a/2)**2)/Math.max(1e-6,e.pitch*e.rowPitch)}else if(i==="embossed"){const a=r*r/2,l=s*s*Hr;o=a/Math.max(1e-6,l)}return Math.min(88,Math.max(0,o*100))}function Cp(t){const e=st(t),n=Bn[e.material].density,i=e.width/1e3*(e.height/1e3)*(e.thickness/1e3),r=Math.max(0,e.width-e.border*2),s=Math.max(0,e.height-e.border*2),o=r*s/Math.max(1,e.width*e.height),a=bp(e)/100*o;return i*n*(1-a)}function Gh(t){const e=st(t),n=Bn[e.material]||Bn.carbon,i=uy(e);let r=i.hex||n.baseHex,s=i.metalness,o=i.roughness,a=i.envMapIntensity,l=i.clearcoat,c=i.anisotropy;return e.finish==="powder"&&(r=zt[e.color].hex,s=0,o=i.roughness,a=i.envMapIntensity,l=i.clearcoat,c=0),{hex:r,metalness:s,roughness:o,envMapIntensity:a,clearcoat:l,anisotropy:c,grain:n.grain,pbr:i}}function fR(t){return t>=50?.82:t>=20?.9:t>=5?.96:1}function gy(t){const e=st(t),n=Cp(e),i={carbon:Pe.materialRateCarbon,ss304:Pe.materialRateSs304,alu:Pe.materialRateAlu}[e.material]??Pe.materialRateCarbon,r={mill:Pe.finishRateMill,galvanized:Pe.finishRateGalvanized,brushed:Pe.finishRateBrushed,powder:Pe.finishRatePowder}[e.finish]??0,s=Eu(e),o=Ce[e.pattern]||{},a={flat:0,topFold:Pe.topFoldAdd,sideReturns:Pe.sideReturnsAdd,cassette:Pe.cassetteAdd,customFold:Pe.customFoldAdd}[e.panelForm]||0,l=e.mounting==="none"?0:Pe.mountingAdd,c=s*(o.through===!1?Pe.formedPunchRate:Pe.punchRate),u=o.formed?Pe.formedPatternAdd:0,h=e.deburr==="fine"?Pe.deburrFineAdd:e.deburr==="standard"?Pe.deburrStandardAdd:0,d=e.tolerance==="iso-f"?Pe.toleranceFineAdd:0,p=e.flatness==="precision"?Pe.flatnessPrecisionAdd:0,m=e.panelForm!=="flat"&&Math.abs(e.bendAngle-90)>.5?Pe.nonStandardBendAdd:0;return(n*(i+r)+c+Pe.basePrice+a+l+u+h+d+p+m)*e.quantity*fR(e.quantity)}function Rp(t,e=Pe.currency){const n=Number(t)||0,i=String(e||"USD").toUpperCase();try{return new Intl.NumberFormat(void 0,{style:"currency",currency:i,minimumFractionDigits:2,maximumFractionDigits:2}).format(n)}catch{return`${i} ${n.toFixed(2)}`}}function pR(t){const e=st(t);let n=3,i=5;e.finish==="powder"?(n+=2,i+=2):e.finish==="galvanized"&&(n+=1,i+=1),e.panelForm!=="flat"&&(n+=1,i+=2),e.deburr==="fine"&&(i+=1),e.tolerance==="iso-f"&&(n+=1,i+=1),e.flatness==="precision"&&(n+=1,i+=2);const r=Math.min(10,Math.floor((e.quantity-1)/15));return n+=r,i+=Math.min(12,Math.ceil(e.quantity/12)),`${n}–${i} days`}function vy(t){const e=st(t),n=(r,s,o)=>s<=r.w&&o<=r.h,i=iR.find(r=>n(r,e.width,e.height)||n(r,e.height,e.width));if(i){const r=!(e.width<=i.w&&e.height<=i.h);return{ok:!0,sheet:i,rotated:r,label:r?`Fits ${i.label} mm stock if rotated`:`Fits ${i.label} mm stock`}}return{ok:!1,sheet:null,rotated:!1,label:"Exceeds standard stock sheet sizes"}}function mR(t){const e=st(t),n=_a(e),i=Ce[e.pattern],r=i==null?void 0:i.kind,s=[],o=(i==null?void 0:i.through)!==!1;e.holeSize<n.minHoleSize&&s.push({level:"block",field:"holeSize",text:`${o?"Opening":"Formed feature"} ${e.holeSize} mm is below the ${n.minHoleSize} mm minimum for ${e.thickness} mm material.`}),(r==="slot"||r==="bridge")&&e.slotLength<n.minSlotLength&&s.push({level:"block",field:"slotLength",text:`Slot length ${e.slotLength} mm must be at least ${n.minSlotLength} mm for a ${e.holeSize} mm slot width.`}),e.pitch<n.minPitchX&&s.push({level:"block",field:"pitch",text:`${r==="decorative"?"Motif pitch":r==="slot"||r==="bridge"?"Column pitch":"Pitch"} ${e.pitch} mm is below the ${n.minPitchX} mm minimum for this pattern.`}),(r==="slot"||r==="bridge")&&e.rowPitch<n.minRowPitch&&s.push({level:"block",field:"rowPitch",text:`Row pitch ${e.rowPitch} mm is below the ${n.minRowPitch} mm minimum for this ${r==="slot"?"vertical slot":"horizontal bridge slot"} geometry.`}),e.border<n.minBorder&&s.push({level:"block",field:"border",text:`Edge distance ${e.border} mm is below the ${n.minBorder} mm minimum.`}),e.mounting!=="none"&&e.border<18&&s.push({level:"block",field:"border",text:"Mounting features require at least an 18 mm solid perimeter border."}),e.panelForm!=="flat"&&e.flangeDepth<e.thickness*4&&s.push({level:"warn",field:"flangeDepth",text:`Flange depth should be at least 4× thickness (${e.thickness*4} mm).`}),e.panelForm!=="flat"&&e.bendRadius<e.thickness&&s.push({level:"warn",field:"bendRadius",text:"Bend radius is below material thickness and may crack."});const a=vy(e);return a.ok||s.push({level:"warn",text:a.label+". Confirm a custom blank or nested yield."}),Eu(e)>25e4&&s.push({level:"warn",text:"Opening count is high; perforation time and cost will increase."}),s}function gR(t){var o,a,l,c;const e=st(t),n={};let i=_a(e);e.holeSize<i.minHoleSize&&(n.holeSize=i.minHoleSize);const r=st({...e,...n});i=_a(r),(((o=Ce[e.pattern])==null?void 0:o.kind)==="slot"||((a=Ce[e.pattern])==null?void 0:a.kind)==="bridge")&&r.slotLength<i.minSlotLength&&(n.slotLength=i.minSlotLength);const s=st({...e,...n});return i=_a(s),s.pitch<i.minPitchX&&(n.pitch=i.minPitchX),(((l=Ce[e.pattern])==null?void 0:l.kind)==="slot"||((c=Ce[e.pattern])==null?void 0:c.kind)==="bridge")&&s.rowPitch<i.minRowPitch&&(n.rowPitch=i.minRowPitch),s.border<i.minBorder&&(n.border=i.minBorder),s.mounting!=="none"&&s.border<18&&(n.border=Math.max(n.border||0,20)),s.panelForm!=="flat"&&s.flangeDepth<s.thickness*4&&(n.flangeDepth=Math.ceil(s.thickness*4)),s.panelForm!=="flat"&&s.bendRadius<s.thickness&&(n.bendRadius=s.thickness),n}function vR({config:t,sku:e,openArea:n,weight:i,price:r,lead:s,currency:o=Pe.currency}){var p,m,v;const a=st(t),l=`${co[a.finish].label}${a.finish==="powder"?` · ${zt[a.color].label} – ${zt[a.color].name}`:""}`,c=((p=Ce[a.pattern])==null?void 0:p.kind)==="slot"||((m=Ce[a.pattern])==null?void 0:m.kind)==="bridge",u=c?`${a.pitch} × ${a.rowPitch} mm centers`:`${a.pitch} mm centers`,h=(v=Ce[a.pattern])==null?void 0:v.kind,d=h==="trieur"?`cup ${a.holeSize} mm`:h==="embossed"?`diamond ${a.holeSize} mm punched through`:h==="perfocon"?`entrance Ø${a.holeSize} mm / ${kn(a).includedDeg}° head Ø${kn(a).head.toFixed(2)} mm / exit Ø${kn(a).exit} mm`:h==="hex"?`hex ${a.holeSize} mm point-to-point`:`opening ${a.holeSize} mm`;return[`SKU: ${e}`,`Sheet: ${a.width} × ${a.height} × ${a.thickness} mm`,`Material: ${Bn[a.material].label}`,`Pattern: ${Ce[a.pattern].label} · ${d} · ${u}`,...c?[`Slot length: ${a.slotLength} mm`]:[],`Finish: ${l}`,`Form: ${Zs[a.panelForm].label}${a.panelForm!=="flat"?` · flange ${a.flangeDepth} mm · bend ${a.bendAngle}° · R${a.bendRadius}`:""}`,`Corner treatment: ${Ga[a.corner].label}${a.corner==="square"?"":` ${Ks(a)} mm`}`,`Deburr: ${a.deburr} · tolerance: ${a.tolerance} · flatness: ${a.flatness}`,`Quantity: ${a.quantity}`,`Open area: ${n.toFixed(1)}%`,`Est. mass: ${i.toFixed(1)} kg`,`Indicative price: ${Rp(r,o)}`,`Lead time: ${s}`].join(`
`)}function _R(t,e=Pe.skuPrefix){var c,u,h;const n=st(t),i=Bn[n.material].short,r=co[n.finish].code,s=n.finish==="powder"?zt[n.color].label.replace("RAL ",""):r,o=Ce[n.pattern].short,a=((c=Ce[n.pattern])==null?void 0:c.kind)==="slot"||((u=Ce[n.pattern])==null?void 0:u.kind)==="bridge"?`${n.pitch}X${n.rowPitch}P`:`${n.pitch}P`,l=(h=Ce[n.pattern])!=null&&h.conical?`C${n.coneAngle}`:"";return`${e}-${i}-${n.thickness}T-${o}${n.holeSize}${l}-${a}-${s}`.replace(/\.0/g,"")}function Wh(t){const e=st(t),n=new URL(location.origin+location.pathname.replace(/index\.html$/i,"")),i={w:e.width,h:e.height,t:e.thickness,m:e.material,f:e.finish,c:e.color,p:e.pattern,d:e.holeSize,l:e.slotLength,x:e.pitch,y:e.rowPitch,b:e.border,q:e.quantity,form:e.panelForm,fd:e.flangeDepth,ba:e.bendAngle,br:e.bendRadius,corner:e.corner,cr:e.cornerRadius,mount:e.mounting,mp:e.mountingPitch,deburr:e.deburr,tol:e.tolerance,flat:e.flatness,o:e.orientation,u:e.units,cone:e.coneAngle};return Object.entries(i).forEach(([r,s])=>n.searchParams.set(r,s)),n.toString()}function xR(t){const e=(t==null?void 0:t.configuration)||t||{},n=e.configuration&&typeof e.configuration=="object"?e.configuration:e;return!n||n.omitted?null:st(n)}function yR(){const t=new URL(location.href).searchParams,e=t.get("p")??Ye.pattern,n=vo[e]||{};return st({width:t.get("w")??Pe.width,height:t.get("h")??Pe.height,thickness:t.get("t")??Pe.thickness,material:t.get("m")??Ye.material,finish:t.get("f")??Ye.finish,color:t.get("c")??Ye.color,pattern:e,holeSize:t.get("d")??n.holeSize??Ye.holeSize,slotLength:t.get("l")??n.slotLength??Ye.slotLength,pitch:t.get("x")??n.pitch??Ye.pitch,rowPitch:t.get("y")??n.rowPitch??Ye.rowPitch,border:t.get("b")??Ye.border,quantity:t.get("q")??Ye.quantity,panelForm:t.get("form")??Ye.panelForm,flangeDepth:t.get("fd")??Ye.flangeDepth,bendAngle:t.get("ba")??Ye.bendAngle,bendRadius:t.get("br")??Ye.bendRadius,corner:t.get("corner")??Ye.corner,cornerRadius:t.get("cr")??Ye.cornerRadius,mounting:t.get("mount")??Ye.mounting,mountingPitch:t.get("mp")??Ye.mountingPitch,notches:!1,deburr:t.get("deburr")??Ye.deburr,tolerance:t.get("tol")??Ye.tolerance,flatness:t.get("flat")??Ye.flatness,orientation:t.get("o")??Ye.orientation,units:t.get("u")??Ye.units,coneAngle:t.get("cone")??Ye.coneAngle})}const SR=new pC,$h=new Map;function F0(t){const e="./";return`${e.endsWith("/")?e:`${e}/`}${t.replace(/^\//,"")}`}function MR(t,{srgb:e=!1,anisotropy:n=1}={}){return new Promise((i,r)=>{SR.load(t,s=>{s.wrapS=Fi,s.wrapT=Fi,s.anisotropy=Math.max(1,n),s.colorSpace=e?pn:Jn,s.generateMipmaps=!0,s.minFilter=bi,s.magFilter=nn,s.needsUpdate=!0,i(s)},void 0,r)})}async function wR(t,e){try{return await MR(t,e)}catch{return null}}async function Go(t,e){return(await Promise.all(t.map(i=>wR(i,e)))).find(Boolean)||null}function Wo(t,e){return[F0(`materials/${t}/${e}.jpg`),F0(`materials/${t}/${e}.png`)]}async function ER(t,e=1){const n=uy(t),i=n.folder||n.id,r=`${i}|${n.useColorMap!==!1}|${n.useNormalMap!==!1}|${n.anisotropyMap?1:0}`,s=$h.get(r);if(s)return s;const o=(async()=>{const a=e,[l,c,u,h,d]=await Promise.all([Go(Wo(i,"basecolor"),{srgb:!0,anisotropy:a}),Go(Wo(i,"normal"),{anisotropy:a}),Go(Wo(i,"roughness"),{anisotropy:a}),n.useMetalnessMap===!1?Promise.resolve(null):Go(Wo(i,"metallic"),{anisotropy:a}),n.anisotropyMap?Go(Wo(i,"anisotropy"),{anisotropy:a}):Promise.resolve(null)]);if(!l&&!c&&!u&&!h)throw new Error(`PBR maps missing for ${i}`);return{preset:n,folder:i,colorMap:l,normalMap:c,roughnessMap:u,metalnessMap:h,aoMap:null,anisotropyMap:d}})();$h.set(r,o);try{return await o}catch(a){throw $h.delete(r),a}}function TR(t,e,n,i){if(!t||!e)return;const r=n.pbr||e.preset||{},s=r.useColorMap!==!1,o=r.useNormalMap!==!1,a=r.useRoughnessMap!==!1;t.map=s?e.colorMap:null,t.normalMap=o?e.normalMap:null,t.roughnessMap=a?e.roughnessMap:null,t.metalnessMap=r.useMetalnessMap===!1?null:e.metalnessMap,t.aoMap=e.aoMap||null,t.aoMapIntensity=e.aoMap?.85:0,t.normalScale&&t.normalScale.set(1,1),[t.map,t.normalMap,t.roughnessMap,t.metalnessMap,t.aoMap,e.anisotropyMap].forEach(l=>{l&&(l.wrapS=Fi,l.wrapT=Fi,l.repeat.copy(i))}),t.isMeshPhysicalMaterial&&(t.anisotropy=n.anisotropy||0,t.anisotropyRotation=0,"anisotropyMap"in t&&(t.anisotropyMap=e.anisotropyMap||null))}function AR(t,e,n){const i=st(t),r=Ce[i.pattern],s=!!(r!=null&&r.staggered),o=r==null?void 0:r.kind,a=o==="slot"||o==="bridge"?i.rowPitch:s?i.pitch*Hr:i.pitch,l=Math.max(.01,i.pitch),c=Math.max(.01,s?a*2:a),u=Math.max(.01,e),h=Math.max(.01,n);return{pattern:i.pattern,repeatX:u/l,repeatY:h/c,tileW:l,tileH:c}}function bR(t,e,n){return{innerWidthMm:Math.max(1,t-2*n),innerHeightMm:Math.max(1,e-2*n)}}function _y(t){return new Ge(t!=null&&t.startsWith("#")?t:`#${t||"b8bcc2"}`)}function xy(t,e,n,i,r=4096){const s=t/e,o=Math.min(48,Math.max(22,Math.floor(r/Math.max(n,i,1))));let a=Math.min(r,Math.max(512,Math.round(o*i))),l=Math.min(r,Math.max(512,Math.round(a*s)));return l>r&&(l=r,a=Math.max(256,Math.round(r/s))),{outW:l,outH:a,pxPerPitch:o}}function CR(t,e,n,i,r,s){t.fillStyle="#ffffff",t.fillRect(0,0,n,i),t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="high";const o=n/r,a=i/s;for(let l=0;l<Math.ceil(s);l+=1)for(let c=0;c<Math.ceil(r);c+=1)t.drawImage(e,c*o,l*a,o,a)}function yy(t,{flipY:e=!1}={}){const n=new dp(t);return n.colorSpace=pn,n.flipY=e,n.wrapS=li,n.wrapT=li,n.repeat.set(1,1),n.offset.set(0,0),n.minFilter=nn,n.magFilter=nn,n.generateMipmaps=!1,n.needsUpdate=!0,n}function RR(t,e,n){return!t||!(n>e+1e-6)||(t.repeat.set(1,e/n),t.offset.set(0,0),t.wrapT=li),t}function PR(t,e,n,{maxSize:i=4096,flipY:r=!1}={}){const{outW:s,outH:o}=xy(e,n,1,1,i),a=_y(t),l=document.createElement("canvas");l.width=s,l.height=o;const c=l.getContext("2d");return c.fillStyle=`rgb(${Math.round(a.r*255)},${Math.round(a.g*255)},${Math.round(a.b*255)})`,c.fillRect(0,0,s,o),yy(l,{flipY:r})}async function Sy(t,e,n,i,r,{maxSize:s=4096,flipY:o=!1}={}){const a=t.alphaMap;if(!(a!=null&&a.image))return null;await NR(a);const l=a.image,{repeatX:c,repeatY:u}=AR(e,n,i),{outW:h,outH:d}=xy(n,i,c,u,s),p=_y(r),m=Math.round(p.r*255),v=Math.round(p.g*255),g=Math.round(p.b*255),f=document.createElement("canvas");f.width=h,f.height=d;const x=f.getContext("2d");CR(x,l,h,d,c,u);const _=x.getImageData(0,0,h,d),y=document.createElement("canvas");y.width=h,y.height=d;const C=y.getContext("2d"),E=C.createImageData(h,d);for(let A=0;A<_.data.length;A+=4){const P=_.data[A];E.data[A]=m,E.data[A+1]=v,E.data[A+2]=g,E.data[A+3]=P}return C.putImageData(E,0,0),yy(y,{flipY:o})}async function LR(t,e,n,{maxSize:i=4096,flipY:r=!1}={}){const{innerWidthMm:s,innerHeightMm:o}=bR(e.width,e.height,e.border),a=n!=null&&n.startsWith("#")?n:`#${n}`;return t!=null&&t.alphaMap?Sy(t,e,s,o,a,{maxSize:i,flipY:r}):PR(a,s,o,{maxSize:i,flipY:r})}async function NR(t){const e=t==null?void 0:t.image;if(e&&typeof e.decode=="function")try{await e.decode()}catch{}}async function DR(t,{colorHex:e,metalness:n=.82,roughness:i=.34,maxTextureSize:r=4096,perforated:s=!1,config:o=null,innerWidthMm:a=0,innerHeightMm:l=0}={}){const c=e!=null&&e.startsWith("#")?e:`#${e||"b8bcc2"}`,u=new Ei({color:c,metalness:n,roughness:i,side:s?$t:Pn,transparent:!1,opacity:1,alphaTest:0}),h=s&&o&&a>0&&l>0?await Sy(t,o,a,l,c,{maxSize:r}):null;return h?(u.map=h,u.transparent=!1,u.alphaTest=.35,u.depthWrite=!0):t.map&&(u.map=t.map,u.color.copy(t.color)),u}function af(t){const e=st(t);return[e.width,e.height,e.thickness,e.material,e.finish,e.color,e.pattern,e.holeSize,e.slotLength,e.pitch,e.rowPitch,e.border,e.coneAngle,e.corner,e.cornerRadius].join("|")}const IR=.5;function UR(t,e=0){const n=Math.max(0,e)/1e3;return n<=0?t*.004:Math.min(n*IR,t*.012)}function My(t,e=0){return t+UR(t,e)}function Tu(){var o;if(typeof window>"u")return!1;const t=navigator.userAgent||"";if(/iPad|iPhone|iPod/.test(t)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)return!0;const n=window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>1,i=window.matchMedia("(max-width: 900px)").matches,r=!!((o=navigator.connection)!=null&&o.saveData),s=Number(navigator.deviceMemory)>0&&navigator.deviceMemory<=4;return r||s||n&&i||i}function lf(){const t=navigator.userAgent||"",e=/iPad|iPhone|iPod/.test(t)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,n=/Android/i.test(t),i=e&&/Safari/i.test(t)&&!/CriOS|FxiOS|EdgiOS|OPiOS/i.test(t),r=!!window.isSecureContext,s=e||navigator.maxTouchPoints>1&&!n&&!/Mobile/i.test(t);let o="none";return e?o="quicklook":n&&(o="webxr"),{ios:e,android:n,touchTablet:s,desktop:!e&&!n,safari:i,secure:r,system:o,label:e?"iOS":n?"Android":"Desktop"}}const cf="This device has no AR camera. Open the configuration on a phone — Chrome on Android, or Safari on iOS — to view the sheet at 1:1.";async function FR(){var t;if(!((t=navigator.xr)!=null&&t.isSessionSupported))return!1;try{return!!await navigator.xr.isSessionSupported("immersive-ar")}catch{return!1}}function OR(t){const e=String((t==null?void 0:t.message)||t||"");return/no xr hardware|not supported|requestSession|immersive-ar|xr system/i.test(e)?cf:e||cf}const jh=new I;function Pp(t,e,n,i,r,s){const o=Math.min(s,i/2,r/2);t.beginPath(),t.moveTo(e+o,n),t.lineTo(e+i-o,n),t.quadraticCurveTo(e+i,n,e+i,n+o),t.lineTo(e+i,n+r-o),t.quadraticCurveTo(e+i,n+r,e+i-o,n+r),t.lineTo(e+o,n+r),t.quadraticCurveTo(e,n+r,e,n+r-o),t.lineTo(e,n+o),t.quadraticCurveTo(e,n,e+o,n),t.closePath()}function kR(t,e,n,i,r){const s=Math.min(i,r)/2;Pp(t,e-i/2,n-r/2,i,r,s),t.fill()}function zR(t,e,n,i,r=0){t.save(),t.translate(e,n),t.rotate(Math.PI/4),Pp(t,-i/2,-i/2,i,i,r),t.restore()}function BR(t,e,n,i){t.beginPath();for(let r=0;r<6;r++){const s=Math.PI/3*r,o=e+i*Math.cos(s),a=n+i*Math.sin(s);r===0?t.moveTo(o,a):t.lineTo(o,a)}t.closePath(),t.fill()}function HR(t,e,n,i,r,s,o,a=1){var u;const l=(u=Ce[e.pattern])==null?void 0:u.kind,c=r*a;if(l==="trieur"){t.beginPath(),t.arc(n,i,c/2,0,Math.PI*2),t.fill();return}if(l==="square"){t.fillRect(n-c/2,i-c/2,c,c);return}if(l==="slot"){kR(t,n,i,c,Math.max(c,e.slotLength*o));return}if(l==="bridge"){const h=Math.max(1.2,e.holeSize*o*a),d=Math.max(h,e.slotLength*s);t.fillRect(n-d/2,i-h/2,d,h);return}if(l==="hex"){BR(t,n,i,c/2);return}if(l==="embossed"){const h=c/2;t.beginPath(),t.moveTo(n,i-h),t.lineTo(n+h,i),t.lineTo(n,i+h),t.lineTo(n-h,i),t.closePath(),t.fill();return}if(l==="decorative"){const h=Math.max(1.4,e.holeSize*Math.min(s,o));Ap(e).forEach(([d,p])=>{t.beginPath(),t.arc(n+d*s,i+p*o,h/2,0,Math.PI*2),t.fill()});return}t.beginPath(),t.arc(n,i,c/2,0,Math.PI*2),t.fill()}function VR(t,e,n,i,r,s,o){var l;const a=(l=Ce[e.pattern])==null?void 0:l.kind;if(a==="trieur"){const c=t.createRadialGradient(n,i*.98,0,n,i,r*.62);c.addColorStop(0,"#f4f4f4"),c.addColorStop(.45,"#c6c6c6"),c.addColorStop(1,"#7a7a7a"),t.fillStyle=c,t.beginPath(),t.arc(n,i,r*.58,0,Math.PI*2),t.fill();return}if(a==="embossed"){const c=r*.9,u=t.createLinearGradient(n-c/2,i-c/2,n+c/2,i+c/2);u.addColorStop(0,"#686868"),u.addColorStop(.34,"#f6f6f6"),u.addColorStop(.58,"#c8c8c8"),u.addColorStop(1,"#737373"),t.fillStyle=u,zR(t,n,i,c,c*.08),t.fill();return}if(a==="perfocon"){const c=r*.72,u=t.createRadialGradient(n-c*.18,i-c*.18,c*.05,n,i,c);u.addColorStop(0,"#efefef"),u.addColorStop(.38,"#b9b9b9"),u.addColorStop(.68,"#747474"),u.addColorStop(1,"#969696"),t.fillStyle=u,t.beginPath(),t.arc(n,i,c,0,Math.PI*2),t.fill();return}if(a==="bridge"){const c=Math.max(r,e.slotLength*s),u=r*1.35,h=t.createLinearGradient(n,i-u/2,n,i+u/2);h.addColorStop(0,"#8a8a8a"),h.addColorStop(.45,"#f0f0f0"),h.addColorStop(1,"#6e6e6e"),t.fillStyle=h,Pp(t,n-c/2,i-u/2,c,u,u/2),t.fill()}}const O0=512,Jc=.5,Xh=.12,qh=4.6;function wy(t){const e=Ce[t.pattern],n=!!(e!=null&&e.staggered),i=e==null?void 0:e.kind,r=i==="slot"||i==="bridge"?t.rowPitch:n?t.pitch*Hr:t.pitch,s=Math.max(.01,t.pitch),o=Math.max(.01,n?r*2:r);return{pattern:e,staggered:n,kind:i,rowPitch:r,tileW:s,tileH:o}}function GR(t,e,n,i,r){for(const s of[-t,0,t])for(const o of[-e,0,e])r(n+s,i+o)}function k0(t,{holeScale:e=1,bump:n=!1}={}){const{staggered:i,kind:r,rowPitch:s,tileW:o,tileH:a}=wy(t),l=O0,c=Math.max(2,Math.round(O0*a/o)),u=document.createElement("canvas");u.width=l,u.height=c;const h=u.getContext("2d",{alpha:!1}),d=l/o,p=c/a,m=Math.max(1.6,t.holeSize*Math.min(d,p));h.fillStyle=n?"#808080":"#ffffff",h.fillRect(0,0,l,c),n||(h.fillStyle="#000000"),h.imageSmoothingEnabled=r!=="square"&&r!=="bridge",h.imageSmoothingQuality="high";const v=s*p,g=(f,x)=>{GR(l,c,f,x,(_,y)=>{n?VR(h,t,_,y,m,d):HR(h,t,_,y,m,d,p,e)})};return h.save(),h.translate(0,c),h.scale(1,-1),g(l/2,v/2),i&&g(l,v+v/2),h.restore(),u}function Au(t){return t==="trieur"||t==="embossed"||t==="bridge"||t==="perfocon"}function Ms(t,e=4,{holeScale:n=1,skipBump:i=!1}={}){var g,f;const r=st(t),s=(g=Ce[r.pattern])==null?void 0:g.kind,o=!!((f=Ce[r.pattern])!=null&&f.formed)&&!i&&!Au(s),{tileW:a,tileH:l}=wy(r),c=Math.max(.01,r.width-2*r.border),u=Math.max(.01,r.height-2*r.border),h=c/a,d=u/l,p={repeatX:h,repeatY:d},m=k0(r,{holeScale:n,bump:!1}),v=o?k0(r,{bump:!0}):null;return{alphaMap:B0(m,e,p),bumpMap:v?B0(v,e,{...p,mipmaps:!0}):null,backAlphaMap:null}}function Yh(t,e){var i,r,s;const n=st(t);if((i=Ce[n.pattern])!=null&&i.conical){const o=kn(n),a=Ms(n,e,{holeScale:1,skipBump:!0});return a.backAlphaMap=Ms(n,e,{holeScale:o.exit/o.entrance,skipBump:!0}).alphaMap,a}if(((r=Ce[n.pattern])==null?void 0:r.kind)==="embossed"){const o=Ms(n,e,{holeScale:.48,skipBump:!0});return o.backAlphaMap=o.alphaMap,o}if(((s=Ce[n.pattern])==null?void 0:s.kind)==="trieur"){const o=Ms(n,e,{holeScale:.72,skipBump:!0});return o.backAlphaMap=Ms(n,e,{holeScale:.9,skipBump:!0}).alphaMap,o}return Ms(n,e)}function $o(t,e,n,i){var h,d,p;const r=((h=Ce[i.pattern])==null?void 0:h.through)!==!1,s=(d=Ce[i.pattern])==null?void 0:d.kind,o=!!((p=Ce[i.pattern])!=null&&p.formed)&&!Au(s),a=r||s==="trieur",l=a?n.alphaMap:null,c=a?n.backAlphaMap||n.alphaMap:null,u=typeof navigator<"u"&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);t&&(t.alphaMap=l,t.alphaTest=a?Jc:0,t.transparent=!!(a&&u),t.bumpMap=n.bumpMap,t.bumpScale=o?.016:0,t.needsUpdate=!0),e&&(e.alphaMap=c,e.alphaTest=a?Jc:0,e.transparent=!!(a&&u),e.bumpMap=null,e.bumpScale=0,e.needsUpdate=!0)}function z0(t,e){const n=new Set([e.alphaMap,e.bumpMap,e.backAlphaMap].filter(Boolean));t.forEach(i=>{i&&!n.has(i)&&(n.add(i),i.dispose())})}function B0(t,e,{repeatX:n=1,repeatY:i=1,mipmaps:r=!1}={}){const s=new dp(t);return s.colorSpace=Jn,s.wrapS=Fi,s.wrapT=Fi,s.repeat.set(n,i),s.generateMipmaps=r,s.minFilter=r?bi:nn,s.magFilter=nn,s.anisotropy=r?Math.max(1,e):1,s.needsUpdate=!0,s}function WR(t,e,n){const i=new vp,r=t/2,s=Math.min(Ks(n)/1e3,t/3,e/3);if(n.corner==="radius"&&s>5e-4){const o=s;i.moveTo(-r+o,0),i.lineTo(r-o,0),i.absarc(r-o,o,o,-Math.PI/2,0,!1),i.lineTo(r,e-o),i.absarc(r-o,e-o,o,0,Math.PI/2,!1),i.lineTo(-r+o,e),i.absarc(-r+o,e-o,o,Math.PI/2,Math.PI,!1),i.lineTo(-r,o),i.absarc(-r+o,o,o,Math.PI,Math.PI*1.5,!1),i.closePath()}else if(n.corner==="chamfer"&&s>5e-4){const o=s;i.moveTo(-r+o,0),i.lineTo(r-o,0),i.lineTo(r,o),i.lineTo(r,e-o),i.lineTo(r-o,e),i.lineTo(-r+o,e),i.lineTo(-r,e-o),i.lineTo(-r,o),i.closePath()}else i.moveTo(-r,0),i.lineTo(r,0),i.lineTo(r,e),i.lineTo(-r,e),i.closePath();return i}function H0(t,e,n,i,r,s,o,a){const l=a.border/1e3,c=o/2+1e-4,u=Math.max(8e-4,r-2*l),h=Math.max(8e-4,s-2*l),d=WR(r,s,a);if(l>25e-5&&u>.001&&h>.001){const f=new Jd,x=u/2,_=l;f.moveTo(-x,_),f.lineTo(-x,_+h),f.lineTo(x,_+h),f.lineTo(x,_),f.closePath(),d.holes.push(f)}const p=new Su(d,{depth:o,bevelEnabled:!1,curveSegments:a.corner==="radius"?14:1});p.translate(0,0,-o/2);const m=new et(p,i);if(m.castShadow=!0,m.receiveShadow=!0,t.add(m),a._arExport){const f=My(h,a.border),x=new Li(u,f,1,1);x.translate(0,f/2,0);const _=new et(x,e);if(_.position.set(0,l,c),_.name="AR_FACE",t.add(_),n){const y=new Li(u,f,1,1);y.translate(0,f/2,0);const C=new et(y,n);C.position.set(0,l,-c),C.name="AR_BACK",t.add(C)}return}const v=(f,x)=>{const _=new et(new Li(u,h,1,1),f);_.position.set(0,s/2,x*c),_.castShadow=!1,_.receiveShadow=x>0,t.add(_)};v(e,1),n&&v(n,-1);const g=new Lb(new $b(p,18),new $x({color:1185565,transparent:!0,opacity:.28}));t.add(g)}const $R=25e4,jo=new Dt,Xo=new I,qo=new I;function Ey(t){t.computeBoundingBox();const e=t.boundingBox;return t.translate(-(e.min.x+e.max.x)/2,-(e.min.y+e.max.y)/2,-e.min.z),t.computeVertexNormals(),t}function jR(t=.45){const e=new xp(1,16,10,0,Math.PI*2,0,Math.PI/2);e.rotateX(Math.PI/2),Ey(e);const n=Math.max(.12,t),i=new gp(.9,.9,n,16,1,!0);return i.rotateX(Math.PI/2),i.translate(0,0,-n/2),Ty([e,i])}function XR(t,e,n){return Math.abs(t)+Math.abs(e)<=n}function qR(t,e,n=.0015){const i=t.attributes.position,r=(s,o,a)=>{if(i.getZ(s)>n||i.getZ(o)>n||i.getZ(a)>n)return!1;const l=(i.getX(s)+i.getX(o)+i.getX(a))/3,c=(i.getY(s)+i.getY(o)+i.getY(a))/3;return XR(l,c,e)};if(t.index){const s=t.index.array,o=[];for(let a=0;a<s.length;a+=3){const l=s[a],c=s[a+1],u=s[a+2];r(l,c,u)||o.push(l,c,u)}t.setIndex(o)}else{const s=[];for(let o=0;o<i.count;o+=3)r(o,o+1,o+2)||s.push(i.getX(o),i.getY(o),i.getZ(o),i.getX(o+1),i.getY(o+1),i.getZ(o+1),i.getX(o+2),i.getY(o+2),i.getZ(o+2));t.setAttribute("position",new nt(s,3))}return t.computeVertexNormals(),t}function Ty(t){const e=[],n=[];let i=0;t.forEach(s=>{const o=s.attributes.position;for(let l=0;l<o.count;l++)e.push(o.getX(l),o.getY(l),o.getZ(l));const a=s.index?s.index.array:null;if(a)for(let l=0;l<a.length;l++)n.push(a[l]+i);else for(let l=0;l<o.count;l++)n.push(i+l);i+=o.count,s.dispose()});const r=new Ft;return r.setAttribute("position",new nt(e,3)),r.setIndex(n),r.computeVertexNormals(),r}function YR(t){const e=[];t.traverse(n=>{n.isInstancedMesh&&n.count>0&&e.push(n)}),e.forEach(n=>{const i=n.parent;if(!i)return;const r=new zn;r.name="AR_FORMED";const s=new lt,o=n.material.clone();o.side=Pn,o.transparent=!1,o.depthWrite=!0;const a=n.geometry;for(let l=0;l<n.count;l+=1){n.getMatrixAt(l,s);const c=new et(a,o);c.matrix.copy(s),c.matrixAutoUpdate=!1,c.updateMatrix(),c.name="AR_FORMED",r.add(c)}i.remove(n),i.add(r)})}function ZR(t,e,n){const i=l=>[0,-t,l,t,0,l,0,t,l,-t,0,l],r=[...i(e),...i(n)],s=[],o=(l,c,u,h)=>{s.push(l,c,u,l,u,h)};for(let l=0;l<4;l++){const c=(l+1)%4;o(l,c,4+c,4+l)}const a=new Ft;return a.setAttribute("position",new nt(r,3)),a.setIndex(s),a}function KR(t,e,n){const i=l=>[0,-l,n,l,0,n,0,l,n,-l,0,n],r=[...i(t),...i(e)],s=[],o=(l,c,u,h)=>{s.push(l,c,u,l,u,h)};for(let l=0;l<4;l++){const c=(l+1)%4;o(l,c,4+c,4+l)}const a=new Ft;return a.setAttribute("position",new nt(r,3)),a.setIndex(s),a}function JR(t=.45){const n=new vp;n.moveTo(0,-.5),n.lineTo(.5,0),n.lineTo(0,.5),n.lineTo(-.5,0),n.closePath();const i=new Su(n,{depth:.72,bevelEnabled:!0,bevelThickness:.28,bevelSize:.1,bevelSegments:2,curveSegments:1});Ey(i),qR(i,.32+.02);const r=KR(.62,.32,35e-5),s=ZR(.32,35e-5,-Math.max(.12,t));return Ty([i,r,s])}function QR(t){const e=t.holeSize/1e3,n=e*.84,i=Math.max(t.holeSize,t.slotLength)/1e3,r=Math.max(4e-4,Math.min(t.thickness/1e3,e*.16)),s=e*.72,o=i*.62,a=-n/2,l=n/2,c=[-i/2,-o/2,o/2,i/2],u=[4e-5,s,s,4e-5],h=[r,s+r,s+r,r],d=[];for(const g of[a,l])for(let f=0;f<4;f++)d.push(c[f],g,u[f]);for(const g of[a,l])for(let f=0;f<4;f++)d.push(c[f],g,h[f]);const p=[],m=(g,f,x,_)=>{p.push(g,f,x,g,x,_)};for(let g=0;g<3;g++)m(8+g,9+g,13+g,12+g),m(g,g+1,g+9,g+8),m(4+g,12+g,13+g,5+g);m(0,8,12,4),m(3,7,15,11);const v=new Ft;return v.setAttribute("position",new nt(d,3)),v.setIndex(p),v.computeVertexNormals(),v}function eP(t,e=16){const n=kn(t),i=n.entrance/2e3,r=n.head/2e3,s=Math.max(8e-4,n.height/1e3),o=Math.max(12e-5,Math.min((r-i)*.22,i*.18)),a=Math.max(5e-5,(r-i)*.1),l=[new he(i,2e-5),new he(i,s),new he(i+o,s),new he(r,a),new he(r,2e-5)],c=new mp(l,e);return c.rotateX(Math.PI/2),c.computeVertexNormals(),c}function Zh(t,e,n,i,r,s,{zLift:o=0}={}){var f;const a=(f=Ce[e.pattern])==null?void 0:f.kind;if(!Au(a))return null;const l=Math.min($R,Eu(e));if(l<=0)return null;let c,u,h,d;if(a==="trieur"){const x=e.holeSize/2e3;u=x,h=x,d=x,c=jR(r/d)}else if(a==="embossed"){const x=e.holeSize/1e3;u=x*.9,h=x*.9,d=x*.38,c=JR(r/d)}else if(a==="perfocon"){const x=l>8e4?8:l>25e3?12:16;c=eP(e,x),u=1,h=1,d=1}else c=QR(e),u=1,h=1,d=1;const p=a==="perfocon"||a==="bridge"||a==="embossed"||a==="trieur"?s.clone():s;(a==="perfocon"||a==="trieur")&&(p.side=$t),(a==="bridge"||a==="embossed")&&(p.side=Pn);const m=new Rb(c,p,l);m.name="FORMED_FEATURES",m.frustumCulled=!1,m.receiveShadow=l<=12e3,m.castShadow=l<=8e3;let v=0;hR(e,(x,_)=>{if(v>=l)return!1;jo.position.set(x/1e3-n/2,_/1e3,r/2+o),jo.rotation.set(0,0,0),jo.scale.set(u,h,d),jo.updateMatrix(),m.setMatrixAt(v,jo.matrix),v+=1}),m.count=v,m.instanceMatrix.needsUpdate=!0;const g=new zn;return g.name="FORMED_PATTERN",g.add(m),t.add(g),g}function Kl(t){if(!t)return;const e=new Set;t.traverse(n=>{var r,s;(s=(r=n.geometry)==null?void 0:r.dispose)==null||s.call(r),(Array.isArray(n.material)?n.material:[n.material]).forEach(o=>{var a;o&&(["alphaMap","map","envMap","bumpMap"].forEach(l=>{var u;const c=o[l];c&&!e.has(c)&&(e.add(c),(u=c.dispose)==null||u.call(c))}),e.has(o)||(e.add(o),(a=o.dispose)==null||a.call(o)))})})}function tP(t){return`${t.material}|${t.finish}|${t.color}`}function nP(t){return`${t.width}|${t.height}|${t.pattern}|${t.holeSize}|${t.slotLength}|${t.pitch}|${t.rowPitch}|${t.border}|${t.coneAngle}|${t.thickness}`}function iP(t){return`${t.width}|${t.height}|${t.border}|${t.thickness}|${t.panelForm}|${t.flangeDepth}|${t.bendAngle}|${t.bendRadius}|${t.corner}|${t.cornerRadius}`}function rP(t,e,n,i,r,s){if(e.panelForm!=="flat"){const o=Math.max(r*3,e.flangeDepth/1e3),a=Ts.degToRad(90-e.bendAngle),l=-Math.cos(a)*o/2,c=Math.sin(a)*o/2,u=(h,d,p)=>{const m=new et(new es(h,d,p),s);return m.castShadow=!0,m.receiveShadow=!0,m};if(e.panelForm==="topFold"||e.panelForm==="cassette"){const h=u(n,r,o);h.rotation.x=a,h.position.set(0,i-r/2+c,l),t.add(h)}if(e.panelForm==="sideReturns"||e.panelForm==="cassette"){const h=u(r,i,o);h.rotation.y=-a,h.position.set(-n/2+r/2-c,i/2,l);const d=u(r,i,o);d.rotation.y=a,d.position.set(n/2-r/2+c,i/2,l),t.add(h,d)}if(e.panelForm==="cassette"){const h=u(n,r,o);h.rotation.x=-a,h.position.set(0,r/2-c,l),t.add(h)}}}class sP{constructor(e,{bakedShadows:n=!0,onArState:i,onArScale:r,onBusy:s}={}){var l;this.canvas=e,this.bakedShadows=n,this.onArState=i||(()=>{}),this.onArScale=r||(()=>{}),this.onBusy=s||(()=>{}),this.model=null,this.config=null,this.sizeKey="",this.configGen=0,this.exportGen=0,this.orbit={theta:-.48,phi:1.18,radius:1.92},this.target={...this.orbit},this.lookAt=new I(0,.72,0),this.pointers=new Map,this.pinchStart=0,this.dirty=!0,this.xrSession=null,this.hitTestSource=null,this.arPlaced=!1,this.arMoving=!1,this.arHitStable=0,this.arLastHitY=null,this.arPointers=new Map,this.arPinchStart=0,this.arPinchScale0=100,this.arTwistStart=0,this.arTwistYaw0=0,this.scalePercent=100,this.fitScale=1,this.arFloorY=null,this.studioEnv=null,this.xrLight=null,this.overlay=null,this._arMode="idle",this.tool="orbit",this.studioColor=1053721,this.disposed=!1,this.faceMat=null,this.backMat=null,this.edgeMat=null,this.solidMat=null,this.formedGroup=null,this.formedMat=null,this.appearanceId="",this.maskId="",this.formId="",this.maxAnisotropy=4,this.dimHud=null,this.compact=Tu()||lf().ios,this.iosRenderer=lf().ios,this.pixelRatioCap=this.compact?Math.min(devicePixelRatio||1,1.1):Math.min(devicePixelRatio||1,1.5),this.renderer=new Wx({canvas:e,antialias:!this.compact,alpha:!1,preserveDrawingBuffer:!1,powerPreference:"default"}),this.renderer.setPixelRatio(this.pixelRatioCap),this.renderer.setClearColor(this.studioColor,1),this.renderer.outputColorSpace=pn,this.renderer.toneMapping=dx,this.renderer.toneMappingExposure=1.32,this.renderer.shadowMap.enabled=!this.compact,this.renderer.shadowMap.type=ux,this.renderer.shadowMap.autoUpdate=!n&&!this.compact,this.renderer.xr.enabled=!0,this.renderer.xr.setReferenceSpaceType("local"),this.scene=new hp,this.scene.background=new Ge(this.studioColor),this.scene.fog=this.iosRenderer?null:new up(this.studioColor,7.5,16),this.camera=new gn(32,1,.02,100);const o=new Yd(this.renderer);this.studioEnv=o.fromScene(new SC,.04).texture,this.scene.environment=this.studioEnv,o.dispose(),this.maxAnisotropy=Math.min(this.compact?4:16,this.renderer.capabilities.getMaxAnisotropy()||8),this.hemi=new mC(16251387,9081496,1.85),this.scene.add(this.hemi),this.keyLight=new ia(16777215,this.compact?2.2:2.62),this.keyLight.position.set(2.4,4.8,3.4),this.keyLight.castShadow=!this.compact,this.keyLight.shadow.mapSize.set(this.compact?512:1024,this.compact?512:1024),this.keyLight.shadow.bias=-25e-5,this.keyLight.shadow.normalBias=.02;const a=this.keyLight.shadow.camera;a.near=.4,a.far=10,a.left=-2.2,a.right=2.2,a.top=2.4,a.bottom=-.4,this.scene.add(this.keyLight),this.rimLight=new ia(14149375,this.compact?1.15:2.05),this.rimLight.position.set(-3.2,2.4,-2.8),this.scene.add(this.rimLight),this.fillLight=new ia(16774890,this.compact?.45:.7),this.fillLight.position.set(-1.4,1.6,3.2),this.scene.add(this.fillLight),this.compact||(this.backLight=new ia(16777215,2.15),this.backLight.position.set(-2.1,3.6,-3.8),this.scene.add(this.backLight)),this.ground=new et(new Yc(1.72,this.compact?32:64),new Ei({color:790548,metalness:.28,roughness:.58,envMapIntensity:.18})),this.ground.rotation.x=-Math.PI/2,this.ground.receiveShadow=!0,this.scene.add(this.ground),this.groundShadow=new et(new Yc(1.08,this.compact?24:48),new x0({opacity:.64})),this.groundShadow.rotation.x=-Math.PI/2,this.groundShadow.position.y=.002,this.groundShadow.receiveShadow=!0,this.scene.add(this.groundShadow),this.root=new zn,this.scene.add(this.root),this.reticle=new et(new _p(.07,.09,36).rotateX(-Math.PI/2),new _u({color:16777215,opacity:.92,transparent:!0})),this.reticle.matrixAutoUpdate=!1,this.reticle.visible=!1,this.scene.add(this.reticle),this.arFloor=new et(new Li(4,4),new x0({opacity:.26})),this.arFloor.rotation.x=-Math.PI/2,this.arFloor.position.y=.012,this.arFloor.receiveShadow=!0,this.arFloor.visible=!1,this.root.add(this.arFloor),this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onWheel=this.onWheel.bind(this),this.onResize=this.onResize.bind(this),this.onARPointerDown=this.onARPointerDown.bind(this),this.onARPointerMove=this.onARPointerMove.bind(this),this.onARPointerUp=this.onARPointerUp.bind(this),e.addEventListener("pointerdown",this.onPointerDown,{passive:!1}),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("pointercancel",this.onPointerUp),e.addEventListener("wheel",this.onWheel,{passive:!1}),this.resizeObserver=new ResizeObserver(()=>this.onResize()),this.resizeObserver.observe(e.parentElement||e),(l=window.visualViewport)==null||l.addEventListener("resize",this.onResize),this.onResize(),this.applyOrbit(!0),this.renderer.setAnimationLoop((c,u)=>this.tick(c,u))}async load(e){await this.updateConfig(e)}async updateConfig(e){if(this.disposed)return;const n=st(e),i=++this.configGen,r=tP(n),s=nP(n),o=iP(n);this.onBusy(!0);try{if(this.model&&o===this.formId&&s===this.maskId&&r!==this.appearanceId){if(await this.applyAppearance(n),this.disposed||i!==this.configGen)return;this.appearanceId=r,this.config=n;return}if(this.model&&o===this.formId&&s!==this.maskId){if(await new Promise(a=>requestAnimationFrame(a)),this.disposed||i!==this.configGen||(this.replaceMask(n),await this.applyAppearance(n),this.disposed||i!==this.configGen))return;this.maskId=s,this.appearanceId=r,this.config=n,this.renderer.shadowMap.needsUpdate=!0;return}if(await new Promise(a=>requestAnimationFrame(a)),this.disposed||i!==this.configGen||(await this.applyModel(n),this.disposed||i!==this.configGen))return;this.formId=o,this.maskId=s,this.appearanceId=r}finally{i===this.configGen&&this.onBusy(!1)}}async applyAppearance(e){var a;const n=Gh(e),i=new he(Math.max(2,e.width/420),Math.max(2,e.height/420));let r=null;try{r=await ER(e,this.maxAnisotropy)}catch{r=null}if(this.disposed)return;const s=r!=null&&r.colorMap&&((a=n.pbr)!=null&&a.useColorMap)?n.pbr.tint||n.hex||"#ffffff":n.hex,o=(l,c=0,u=0)=>{var h;l&&(l.color.set(s),r!=null&&r.colorMap&&((h=n.pbr)!=null&&h.useColorMap)&&n.pbr.colorBoost&&l.color.multiplyScalar(n.pbr.colorBoost),l.metalness=Math.min(1,n.metalness+c),l.roughness=Math.max(.04,n.roughness+u),l.envMapIntensity=n.envMapIntensity+(c?.12:0),l.isMeshPhysicalMaterial&&(l.clearcoat=n.clearcoat,l.clearcoatRoughness=e.finish==="powder"?.42:.18),r&&TR(l,r,n,i),l.needsUpdate=!0)};o(this.faceMat),o(this.backMat),this.backMat&&(this.backMat.envMapIntensity=n.envMapIntensity+.2),o(this.solidMat),o(this.formedMat),o(this.edgeMat,.08,-.08),this.dirty=!0}replaceMask(e){var r,s,o,a,l,c,u;const n=Yh(e,this.maxAnisotropy),i=[(r=this.faceMat)==null?void 0:r.alphaMap,(s=this.backMat)==null?void 0:s.alphaMap,(o=this.faceMat)==null?void 0:o.bumpMap,(a=this.backMat)==null?void 0:a.bumpMap];$o(this.faceMat,this.backMat,n,e),z0(i,{alphaMap:(l=this.faceMat)==null?void 0:l.alphaMap,bumpMap:(c=this.faceMat)==null?void 0:c.bumpMap,backAlphaMap:(u=this.backMat)==null?void 0:u.alphaMap}),this.replaceFormedFeatures(e),this.dirty=!0}replaceFormedFeatures(e){var s,o,a;if(this.formedGroup){(s=this.model)==null||s.remove(this.formedGroup);const l=new Set([this.solidMat,this.faceMat,this.backMat,this.edgeMat]);this.formedGroup.traverse(c=>{var h,d;(d=(h=c.geometry)==null?void 0:h.dispose)==null||d.call(h),(Array.isArray(c.material)?c.material:[c.material]).forEach(p=>{p&&!l.has(p)&&(l.add(p),p.dispose())})}),this.formedGroup=null,this.formedMat=null}if(!this.model||!this.solidMat)return;const n=e.width/1e3,i=e.height/1e3,r=Math.max(5e-4,e.thickness/1e3);this.formedGroup=Zh(this.model,e,n,i,r,this.solidMat),this.formedMat=((a=(o=this.formedGroup)==null?void 0:o.children[0])==null?void 0:a.material)||null}async applyModel(e){var g,f,x;this.config=e;const n=this.model;n&&this.root.remove(n);const i=e.width/1e3,r=e.height/1e3,s=Math.max(5e-4,e.thickness/1e3),o=Gh(e),a=Yh(e,this.maxAnisotropy),l=new zn;l.name="PERFORATED_SHEET";const c=new y0({color:o.hex,metalness:o.metalness,roughness:o.roughness,alphaTest:((g=Ce[e.pattern])==null?void 0:g.through)===!1?0:Jc,transparent:!1,side:$t,clearcoat:o.clearcoat,clearcoatRoughness:e.finish==="powder"?.38:.28,envMapIntensity:o.envMapIntensity});$o(c,null,a,e);const u=c.clone();u.side=$t,u.envMapIntensity=o.envMapIntensity+.2,$o(null,u,a,e),z0([a.alphaMap,a.bumpMap,a.backAlphaMap],{alphaMap:c.alphaMap,bumpMap:c.bumpMap,backAlphaMap:u.alphaMap});const h=c.clone();h.alphaMap=null,h.bumpMap=null,h.alphaTest=0,h.bumpScale=0,H0(l,c,u,h,i,r,s,e);const d=new y0({color:o.hex,metalness:Math.min(1,o.metalness+.08),roughness:Math.max(.08,o.roughness-.08),envMapIntensity:o.envMapIntensity+.12,clearcoat:o.clearcoat});if(rP(l,e,i,r,s,d),this.formedGroup=Zh(l,e,i,r,s,h),this.formedMat=((x=(f=this.formedGroup)==null?void 0:f.children[0])==null?void 0:x.material)||null,this.model=l,this.faceMat=c,this.backMat=u,this.solidMat=h,this.edgeMat=d,await this.applyAppearance(e),this.disposed){Kl(l);return}this.root.add(l),n&&Kl(n);const p=`${e.width}x${e.height}x${e.thickness}`,m=!this.sizeKey;this.sizeKey=p;const v=Math.max(i,r);this.fitScale=1.95/Math.max(.15,v),this.applyCurrentScale(),this.lookAt.set(0,r*this.fitScale*.5,0),m&&(this.target.theta=-.48,this.target.phi=1.18,this.target.radius=1.92,this.orbit={...this.target}),this.applyOrbit(!0),this.renderer.shadowMap.needsUpdate=!0,this.dirty=!0}applyCurrentScale(){const e=(this.xrSession?1:this.fitScale)*(this.scalePercent/100);this.root.scale.setScalar(e),this.dirty=!0}setTool(e){this.tool=e==="pan"||e==="zoom"?e:"orbit"}setPreset(e){const n={iso:{theta:-.48,phi:1.18,radius:1.92},top:{theta:0,phi:.22,radius:2.15},front:{theta:0,phi:1.38,radius:2.02},right:{theta:Math.PI/2,phi:1.22,radius:2.02}},i=n[e]||n.iso;this.target.theta=i.theta,this.target.phi=i.phi,this.target.radius=i.radius,this.dirty=!0}fitView(){this.target.radius=1.92,this.dirty=!0}resetView(){this.lookAt.set(0,this.lookAt.y,0),this.setPreset("iso")}setScalePercent(e){this.scalePercent=e,this.applyCurrentScale(),this.xrSession&&this.arPlaced&&(this.onArScale(e),this.arFloorY!=null&&this.snapToFloor(this.arFloorY))}setDimensionHud(e){this.dimHud=e||null,this.layoutDimensions()}hideDimensions(){this.dimHud&&Object.values(this.dimHud).forEach(e=>{e&&(e.style.opacity="0")})}layoutDimensions(){if(!this.dimHud||!this.config||this.xrSession||!this.model){this.hideDimensions();return}this.model.updateMatrixWorld(!0);const e=this.config.width/1e3,n=this.config.height/1e3,i=Math.max(5e-4,this.config.thickness/1e3),r=Math.max(e,n)*.055,s=this.model.matrixWorld;this.placeDimLine(this.dimHud.width,-e/2,-r,i/2,e/2,-r,i/2,s,16),this.placeDimLine(this.dimHud.height,-e/2-r,0,i/2,-e/2-r,n,i/2,s,16),this.placeDimLine(this.dimHud.thickness,e/2+r*.4,n*.72,-i/2,e/2+r*.4,n*.72,i/2,s,18)}placeDimLine(e,n,i,r,s,o,a,l,c){if(!e)return;Xo.set(n,i,r).applyMatrix4(l).project(this.camera),qo.set(s,o,a).applyMatrix4(l).project(this.camera);const u=Xo.z<-1||Xo.z>1||qo.z<-1||qo.z>1,h=this.canvas.parentElement||this.canvas,d=h.clientWidth,p=h.clientHeight,m=(Xo.x*.5+.5)*d,v=(-Xo.y*.5+.5)*p,g=(qo.x*.5+.5)*d,f=(-qo.y*.5+.5)*p,x=g-m,_=f-v,y=Math.hypot(x,_);if(u||y<6){e.style.opacity="0";return}const C=Math.atan2(_,x);e.style.opacity="1",e.style.left=`${(m+g)/2}px`,e.style.top=`${(v+f)/2}px`,e.style.width=`${Math.max(y,c)}px`,e.style.transform=`translate(-50%, -50%) rotate(${C}rad)`;const E=e.querySelector("em");E&&(E.style.transform=`translate(-50%, -130%) rotate(${-C}rad)`)}setArMode(e){this._arMode!==e&&(this._arMode=e,this.onArState(e))}applyOrbit(e=!1){const{theta:n,phi:i,radius:r}=e?this.target:this.orbit,s=Math.sin(i);this.camera.position.set(this.lookAt.x+r*s*Math.sin(n),this.lookAt.y+r*Math.cos(i),this.lookAt.z+r*s*Math.cos(n)),this.camera.lookAt(this.lookAt)}tick(e,n){if(this.xrSession){this.updateAR(n),this.renderer.render(this.scene,this.camera);return}const r=Math.abs(this.target.theta-this.orbit.theta)+Math.abs(this.target.phi-this.orbit.phi)+Math.abs(this.target.radius-this.orbit.radius)>4e-4;r&&(this.orbit.theta+=(this.target.theta-this.orbit.theta)*.12,this.orbit.phi+=(this.target.phi-this.orbit.phi)*.12,this.orbit.radius+=(this.target.radius-this.orbit.radius)*.12,this.applyOrbit()),(this.dirty||r)&&(this.renderer.render(this.scene,this.camera),this.layoutDimensions(),this.dirty=!1)}updateAR(e){if(!e||!this.hitTestSource)return;const n=this.renderer.xr.getReferenceSpace();if(!n)return;const i=e.getHitTestResults(this.hitTestSource);if(!i.length){this.arHitStable=0,this.arPlaced||(this.reticle.visible=!1,this.setArMode("scanning"));return}const r=i[0].getPose(n);if(!r)return;const s=r.transform.position.y;this.arLastHitY!=null&&Math.abs(s-this.arLastHitY)<.025?this.arHitStable+=1:this.arHitStable=1,this.arLastHitY=s;const o=this.arHitStable>=8;this.reticle.matrix.fromArray(r.transform.matrix),this.reticle.visible=!this.arPlaced&&o,!this.arPlaced&&o&&this.setArMode("placing")}placeAtReticle(){this.reticle.visible&&(jh.setFromMatrixPosition(this.reticle.matrix),this.root.position.copy(jh),this.root.rotation.set(0,this.root.rotation.y,0),this.root.visible=!0,this.arFloor.visible=!0,this.arPlaced=!0,this.reticle.visible=!1,this.snapToFloor(jh.y))}snapToFloor(e){this.arFloorY=e,this.root.updateMatrixWorld(!0);const n=new _r().setFromObject(this.model);Number.isFinite(n.min.y)&&(this.root.position.y+=e-n.min.y-.012)}nudgeOnFloor(e,n){const i=this.renderer.xr.getCamera(),r=new I(1,0,0).applyQuaternion(i.quaternion),s=new I(0,0,-1).applyQuaternion(i.quaternion);r.y=0,s.y=0,!(r.lengthSq()<1e-6||s.lengthSq()<1e-6)&&(r.normalize(),s.normalize(),this.root.position.addScaledVector(r,e*.0016),this.root.position.addScaledVector(s,-n*.0016))}onARPointerDown(e){var n,i;if(!(!this.xrSession||e.target.closest("button, input, label")))if(e.preventDefault(),(i=(n=this.overlay)==null?void 0:n.setPointerCapture)==null||i.call(n,e.pointerId),this.arPointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.arPointers.size===2){const r=[...this.arPointers.values()];this.arPinchStart=Math.hypot(r[0].x-r[1].x,r[0].y-r[1].y),this.arPinchScale0=this.scalePercent,this.arTwistStart=Math.atan2(r[1].y-r[0].y,r[1].x-r[0].x),this.arTwistYaw0=this.root.rotation.y,this.arMoving=!1}else this.arPlaced&&(this.arMoving=!0,this.setArMode("moving"))}onARPointerMove(e){if(!this.xrSession||!this.arPointers.has(e.pointerId))return;const n=this.arPointers.get(e.pointerId),i=e.clientX-n.x,r=e.clientY-n.y;if(this.arPointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.arPointers.size===2&&this.arPlaced){const s=[...this.arPointers.values()],o=Math.hypot(s[0].x-s[1].x,s[0].y-s[1].y),a=Math.atan2(s[1].y-s[0].y,s[1].x-s[0].x);if(this.arPinchStart>8){const l=Ts.clamp(Math.round(this.arPinchScale0*(o/this.arPinchStart)),50,200);this.setScalePercent(l),this.setArMode("scaling")}this.root.rotation.y=this.arTwistYaw0+(a-this.arTwistStart);return}this.arPlaced&&this.arMoving&&this.nudgeOnFloor(i,r)}onARPointerUp(e){if(!this.xrSession)return;const n=this.arPointers.size===1;this.arPointers.delete(e.pointerId),n&&!this.arPlaced&&this.reticle.visible?(this.placeAtReticle(),this.setArMode("placed")):this.arPlaced&&this.arPointers.size===0&&(this.arMoving=!1,this.reticle.visible=!1,this.setArMode("placed")),this.arPinchStart=0}onResize(){var r;if(this.xrSession)return;const e=((r=this.canvas.parentElement)==null?void 0:r.getBoundingClientRect())||this.canvas.getBoundingClientRect(),n=Math.max(1,e.width),i=Math.max(1,e.height);this.renderer.setSize(n,i,!1),this.camera.aspect=n/i,this.camera.updateProjectionMatrix(),this.dirty=!0}onPointerDown(e){if(!this.xrSession&&(e.pointerType==="touch"&&e.preventDefault(),this.canvas.setPointerCapture(e.pointerId),this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.pointers.size===2)){const n=[...this.pointers.values()];this.pinchStart=Math.hypot(n[0].x-n[1].x,n[0].y-n[1].y)}}onPointerMove(e){if(this.xrSession||!this.pointers.has(e.pointerId))return;const n=this.pointers.get(e.pointerId),i=e.clientX-n.x,r=e.clientY-n.y;if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.pointers.size===2){const s=[...this.pointers.values()],o=Math.hypot(s[0].x-s[1].x,s[0].y-s[1].y);this.pinchStart&&(this.target.radius=Ts.clamp(this.target.radius*(this.pinchStart/o),Xh,qh)),this.pinchStart=o;return}if(this.tool==="pan"){const s=new I().setFromMatrixColumn(this.camera.matrixWorld,0),o=new I().setFromMatrixColumn(this.camera.matrixWorld,1),a=.0022*this.orbit.radius;this.lookAt.addScaledVector(s,-i*a),this.lookAt.addScaledVector(o,r*a),this.applyOrbit(!0),this.dirty=!0;return}if(this.tool==="zoom"){this.target.radius=Ts.clamp(this.target.radius+r*.012,Xh,qh);return}this.target.theta-=i*.006,this.target.phi=Ts.clamp(this.target.phi-r*.006,.22,1.46)}onPointerUp(e){this.pointers.delete(e.pointerId),this.pinchStart=0}onWheel(e){this.xrSession||(e.preventDefault(),this.target.radius=Ts.clamp(this.target.radius+e.deltaY*.002,Xh,qh))}captureJpeg(){const e=this.renderer,n=e.getPixelRatio(),i=this.scene.fog,r=this.scene.background,s=this.ground.visible,o=this.groundShadow.visible;this.scene.fog=null,this.ground.visible=!1,this.groundShadow.visible=!1,this.scene.background=new Ge(16054007),e.setClearColor(16054007,1),e.setPixelRatio(Math.min(3,Math.max(2,(devicePixelRatio||1)*2))),this.onResize(),e.render(this.scene,this.camera);const a=e.domElement.toDataURL("image/png");return this.scene.fog=i,this.ground.visible=s,this.groundShadow.visible=o,this.scene.background=r||new Ge(this.studioColor),e.setClearColor(this.studioColor,1),e.setPixelRatio(n),this.onResize(),this.dirty=!0,a}buildArSheetGroup(e){var g,f;const n=e.width/1e3,i=e.height/1e3,r=Math.max(5e-4,e.thickness/1e3),s=e.border/1e3,o=Math.max(8e-4,n-2*s),a=Math.max(8e-4,i-2*s),l=Gh(e),c=Yh(e,4),u=new zn;u.name="AR_SHEET";const h=new Ei({color:l.hex,metalness:l.metalness,roughness:l.roughness,alphaTest:((g=Ce[e.pattern])==null?void 0:g.through)===!1?0:Jc,transparent:!1,side:$t});$o(h,null,c,e);const d=h.clone();d.side=$t,$o(null,d,c,e);const p=(f=Ce[e.pattern])==null?void 0:f.kind;Au(p)&&(h.alphaMap=null,h.alphaTest=0,h.bumpMap=null,h.bumpScale=0);const m=new Ei({color:l.hex,metalness:Math.min(1,l.metalness+.06),roughness:Math.max(.08,l.roughness-.06),side:Pn});H0(u,h,d,m,n,i,r,{...e,_arExport:!0});const v=Zh(u,e,n,i,r,m,{zLift:3e-4});return v&&YR(v),u.traverse(x=>{var _,y;x.isMesh&&(((_=x.geometry)==null?void 0:_.type)==="ExtrudeGeometry"?(x.name="AR_FRAME",x.renderOrder=2):((y=x.geometry)==null?void 0:y.type)==="PlaneGeometry"&&!x.name?(x.name="AR_FACE",x.renderOrder=1):x.name==="AR_FORMED"&&(x.renderOrder=3))}),u.userData.appearance=l,u.userData.arConfig=e,u.userData.exportFingerprint=af(e),u.userData.innerW=o,u.userData.innerH=a,u.userData.arFaceH=My(a,e.border),{group:u,appearance:l,innerW:o,innerH:a}}async prepareGroupForUsdz(e,n=4096){const i=e.userData.appearance||{},r=i.hex||"#b8bcc2",s=e.userData.arConfig||null,o=e.userData.innerW||0,a=e.userData.innerH||0,l=e.userData.arFaceH||a,c=[];e.traverse(u=>{if(!u.isMesh||!u.material)return;const h=u.material;if((u.name==="AR_FACE"||u.name==="AR_BACK")&&s&&o>0&&a>0){c.push(LR(h,s,r,{maxSize:n,flipY:!1}).then(d=>{d&&RR(d,a,l);const p=!!h.alphaMap;u.material=new Ei({color:r,map:d||null,metalness:h.metalness??i.metalness??.82,roughness:h.roughness??i.roughness??.34,alphaTest:p?.35:0,transparent:!1,depthWrite:!0,side:$t})}));return}if(u.name==="AR_FORMED"){c.push(Promise.resolve().then(()=>{u.material=new Ei({color:r,metalness:Math.min(1,(h.metalness??i.metalness??.82)+.05),roughness:Math.max(.12,(h.roughness??i.roughness??.34)-.06),transparent:!1,depthWrite:!0,side:Pn})}));return}c.push(DR(h,{colorHex:r,metalness:h.metalness??i.metalness??.82,roughness:h.roughness??i.roughness??.34,maxTextureSize:n,perforated:!1}).then(d=>{u.material=d}))}),await Promise.all(c)}async exportUSDZ(e=this.config){if(!this.model||!e)throw new Error("3D model is still loading");const n=++this.exportGen,i=new kC,r=this.compact?2048:4096,s={quickLookCompatible:!0,maxTextureSize:r,ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}}},o=st({...e,panelForm:"flat",flangeDepth:0,bendAngle:0,bendRadius:0});let a=null;try{if({group:a}=this.buildArSheetGroup(o),n!==this.exportGen)throw new Error("stale-export");if(await this.prepareGroupForUsdz(a,r),n!==this.exportGen)throw new Error("stale-export");const l=new zn;l.name="AR_WRAPPER",l.add(a),a=null,l.scale.setScalar(this.scalePercent/100),l.userData.exportFingerprint=af(o),l.updateMatrixWorld(!0);const c=await i.parseAsync(l,s);if(n!==this.exportGen)throw new Error("stale-export");return c}catch(l){if(n!==this.exportGen||(l==null?void 0:l.message)==="stale-export")throw l;console.warn("AR sheet export failed, using model clone fallback",l);const c=new zn,u=this.model.clone(!0);return u.traverse(h=>{h.isMesh&&h.material&&(h.material=h.material.clone())}),c.add(u),c.scale.setScalar(this.scalePercent/100),i.parseAsync(c,s)}finally{a&&Kl(a)}}async enterAR({overlay:e}={}){if(!navigator.xr)throw new Error("WebXR is not available in this browser");this.overlay=e||null;const n={requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","local-floor","light-estimation"],...e?{domOverlay:{root:e}}:{}};this.setArMode("launching"),this.hideDimensions();try{this.xrSession=await navigator.xr.requestSession("immersive-ar",n)}catch{this.xrSession=await navigator.xr.requestSession("immersive-ar",{optionalFeatures:["hit-test","dom-overlay","local-floor","light-estimation"],...e?{domOverlay:{root:e}}:{}})}this.renderer.setPixelRatio(1),await this.renderer.xr.setSession(this.xrSession),this.arPlaced=!1,this.arMoving=!1,this.arHitStable=0,this.arLastHitY=null,this.arPointers.clear(),this.root.rotation.set(0,0,0),this.root.visible=!1,this.ground.visible=!1,this.groundShadow.visible=!1,this.arFloor.visible=!1,this.reticle.visible=!1,this.renderer.shadowMap.autoUpdate=!0,this.applyCurrentScale(),document.body.classList.add("is-ar"),this.setArMode("scanning");try{this.xrLight=new tR(this.renderer),this.xrLight.addEventListener("estimationstart",()=>{this.scene.add(this.xrLight),this.xrLight.environment&&(this.scene.environment=this.xrLight.environment),this.keyLight.intensity=.6,this.hemi.intensity=.45}),this.xrLight.addEventListener("estimationend",()=>{this.scene.remove(this.xrLight),this.scene.environment=this.studioEnv,this.keyLight.intensity=2.62,this.hemi.intensity=1.62})}catch{this.xrLight=null}try{const i=await this.xrSession.requestReferenceSpace("viewer");this.hitTestSource=await this.xrSession.requestHitTestSource({space:i})}catch{this.hitTestSource=null}this.xrSession.addEventListener("end",()=>this.onAREnd()),this.overlay&&(this.overlay.addEventListener("pointerdown",this.onARPointerDown),this.overlay.addEventListener("pointermove",this.onARPointerMove),this.overlay.addEventListener("pointerup",this.onARPointerUp),this.overlay.addEventListener("pointercancel",this.onARPointerUp))}async exitAR(){if(this.xrSession)try{await this.xrSession.end()}catch{}}onAREnd(){this.overlay&&(this.overlay.removeEventListener("pointerdown",this.onARPointerDown),this.overlay.removeEventListener("pointermove",this.onARPointerMove),this.overlay.removeEventListener("pointerup",this.onARPointerUp),this.overlay.removeEventListener("pointercancel",this.onARPointerUp)),this.xrSession=null,this.hitTestSource=null,this.arPlaced=!1,this.arMoving=!1,this.arPointers.clear(),this.reticle.visible=!1,this.arFloor.visible=!1,this.root.visible=!0,this.root.position.set(0,0,0),this.root.rotation.set(0,0,0),this.arFloorY=null,this.ground.visible=!0,this.groundShadow.visible=!0,this.renderer.shadowMap.autoUpdate=!this.bakedShadows,this.keyLight.intensity=2.62,this.hemi.intensity=1.62,this.scene.environment=this.studioEnv,this.xrLight&&this.scene.remove(this.xrLight),document.body.classList.remove("is-ar"),this.renderer.setPixelRatio(this.pixelRatioCap),this.applyCurrentScale(),this.onResize(),this.setArMode("idle"),this.dirty=!0}dispose(){var e,n,i,r;this.disposed=!0,this.configGen+=1,this.onBusy(!1),this.renderer.setAnimationLoop(null),this.canvas.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("pointercancel",this.onPointerUp),this.canvas.removeEventListener("wheel",this.onWheel),(e=window.visualViewport)==null||e.removeEventListener("resize",this.onResize),(n=this.resizeObserver)==null||n.disconnect(),this.hideDimensions(),this.dimHud=null,Kl(this.model),this.faceMat=null,this.backMat=null,this.edgeMat=null,(r=(i=this.studioEnv)==null?void 0:i.dispose)==null||r.call(i),this.renderer.dispose()}}const oP=Tu()?180:120;function aP({config:t,scalePercent:e,onReady:n,onError:i,onArState:r,onArScale:s,onBusy:o}){const a=Te.useRef(null),l=Te.useRef(null),c=Te.useRef(!1),u=Te.useRef(r),h=Te.useRef(s),d=Te.useRef(o);return u.current=r,h.current=s,d.current=o,Te.useEffect(()=>{const p=a.current;if(!p)return;let m;try{m=new sP(p,{onArState:v=>{var g;return(g=u.current)==null?void 0:g.call(u,v)},onArScale:v=>{var g;return(g=h.current)==null?void 0:g.call(h,v)},onBusy:v=>{var g;return(g=d.current)==null?void 0:g.call(d,v)}})}catch(v){console.error(v),i==null||i(v);return}return l.current=m,m.load(t).then(()=>{c.current=!0,m.setScalePercent(e),n==null||n(m)}).catch(v=>{console.error(v),i==null||i(v)}),()=>{c.current=!1,m.dispose(),l.current=null}},[]),Te.useEffect(()=>{var m;if(!c.current)return;(m=d.current)==null||m.call(d,!0);const p=window.setTimeout(()=>{var v;(v=l.current)==null||v.updateConfig(t)},oP);return()=>window.clearTimeout(p)},[t.width,t.height,t.thickness,t.material,t.finish,t.color,t.pattern,t.holeSize,t.slotLength,t.pitch,t.rowPitch,t.border,t.coneAngle,t.panelForm,t.flangeDepth,t.bendAngle,t.bendRadius,t.corner,t.cornerRadius]),Te.useEffect(()=>{var p;(p=l.current)==null||p.setScalePercent(e)},[e]),S.jsx("canvas",{id:"viewerCanvas",ref:a})}const V0={carbon:{hi:"#c4bdb4",mid:"#7a746c",lo:"#3a3733",plate0:"#6f6a64",plate1:"#45423e",grain:"0",grainW:5,grainOpacity:.4,void0:"#2f3438",void1:"#050608"},ss304:{hi:"#f4f7f9",mid:"#b7c0c6",lo:"#6d767e",plate0:"#b8c1c7",plate1:"#7a848c",grain:"-18",grainW:3.2,grainOpacity:.32,void0:"#3f4850",void1:"#07090c"},alu:{hi:"#fbfcfd",mid:"#d0d5d9",lo:"#8a9096",plate0:"#cfd4d8",plate1:"#949aa0",grain:"-8",grainW:2.4,grainOpacity:.24,void0:"#4a5158",void1:"#0b0d10"}};function Jl(t,e,n){return Array.from({length:6},(i,r)=>{const s=Math.PI/3*r;return`${(t+n*Math.cos(s)).toFixed(2)},${(e+n*Math.sin(s)).toFixed(2)}`}).join(" ")}function G0(t,e,n){return`${t},${e-n} ${t+n},${e} ${t},${e+n} ${t-n},${e}`}function lP(){return[[0,-2],[-1,-1],[0,-1],[1,-1],[-2,0],[-1,0],[0,0],[1,0],[2,0],[-1,1],[0,1],[1,1],[0,2]]}function Ql({cx:t,cy:e,r:n,ids:i}){const r=n+Math.max(1.4,n*.22),s=n*.72;return S.jsxs("g",{children:[S.jsx("circle",{cx:t+n*.12,cy:e+n*.18,r,fill:"rgba(0,0,0,.38)"}),S.jsx("circle",{cx:t,cy:e,r,fill:`url(#${i.rim})`}),S.jsx("circle",{cx:t,cy:e,r:n*.9,fill:"rgba(12,14,16,.45)"}),S.jsx("circle",{cx:t,cy:e,r:s,fill:`url(#${i.voidG})`}),S.jsx("ellipse",{cx:t-s*.28,cy:e-s*.32,rx:s*.48,ry:s*.36,fill:"rgba(0,0,0,.42)"}),S.jsx("path",{d:`M ${t-n*.38} ${e+n*.52} A ${n*.78} ${n*.78} 0 0 0 ${t+n*.62} ${e+n*.16}`,fill:"none",stroke:"rgba(255,255,255,.55)",strokeWidth:Math.max(.55,n*.1),strokeLinecap:"round"})]})}function cP({cx:t,cy:e,s:n,ids:i}){const r=n/2,s=n*.68,o=s/2;return S.jsxs("g",{children:[S.jsx("rect",{x:t-r+.7,y:e-r+1,width:n,height:n,rx:"1.2",fill:"rgba(0,0,0,.36)"}),S.jsx("rect",{x:t-r-.7,y:e-r-.7,width:n+1.4,height:n+1.4,rx:"1.4",fill:`url(#${i.rim})`}),S.jsx("rect",{x:t-r+.35,y:e-r+.35,width:n-.7,height:n-.7,rx:"0.8",fill:"rgba(12,14,16,.4)"}),S.jsx("rect",{x:t-o,y:e-o,width:s,height:s,rx:"0.55",fill:`url(#${i.voidG})`}),S.jsx("rect",{x:t-o,y:e-o,width:s*.4,height:s*.36,fill:"rgba(0,0,0,.35)"})]})}function uP({cx:t,cy:e,w:n,h:i,ids:r}){const s=Math.min(n,i)/2;return S.jsxs("g",{children:[S.jsx("rect",{x:t-n/2+.6,y:e-i/2+1,width:n,height:i,rx:s,fill:"rgba(0,0,0,.36)"}),S.jsx("rect",{x:t-n/2-.8,y:e-i/2-.8,width:n+1.6,height:i+1.6,rx:s+.5,fill:`url(#${r.rim})`}),S.jsx("rect",{x:t-n*.34,y:e-i*.34,width:n*.68,height:i*.68,rx:s*.68,fill:`url(#${r.voidG})`}),S.jsx("rect",{x:t-n*.28,y:e-i*.32,width:n*.26,height:i*.26,rx:s*.28,fill:"rgba(0,0,0,.32)"})]})}function hP({cx:t,cy:e,r:n,ids:i}){return S.jsxs("g",{children:[S.jsx("polygon",{points:Jl(t+.55,e+.8,n+1.15),fill:"rgba(0,0,0,.36)"}),S.jsx("polygon",{points:Jl(t,e,n+1.25),fill:`url(#${i.rim})`}),S.jsx("polygon",{points:Jl(t,e,n*.86),fill:"rgba(12,14,16,.4)"}),S.jsx("polygon",{points:Jl(t,e,n*.66),fill:`url(#${i.voidG})`})]})}function dP({pattern:t,className:e="",material:n="carbon",variant:i="card"}){const r=Te.useId().replace(/:/g,""),s=i==="thumb",o=s?120:168,a=s?120:72,l=V0[n]||V0.carbon,c={plate:`plate-${r}`,sheen:`sheen-${r}`,brush:`brush-${r}`,rim:`rim-${r}`,voidG:`void-${r}`,bump:`bump-${r}`,cone:`cone-${r}`,bridge:`bridge-${r}`,clip:`clip-${r}`},u=s?4:6;function h({xStep:m,yStep:v,stagger:g=!1,render:f}){const x=[];let _=0;for(let y=u+v*.35;y<a-2;y+=v,_++){const C=g&&_%2?m/2:0;for(let E=u+C+m*.15;E<o-2;E+=m)x.push(f(E,y,`${_}-${E.toFixed(1)}`))}return x}const d=s?1.28:1;let p=null;if(t==="round60")p=h({xStep:26*(s?.92:1),yStep:22.5*(s?.92:1),stagger:!0,render:(m,v,g)=>S.jsx("g",{children:S.jsx(Ql,{cx:m,cy:v,r:6.6*d,ids:c})},g)});else if(t==="roundStraight")p=h({xStep:27,yStep:23,stagger:!1,render:(m,v,g)=>S.jsx("g",{children:S.jsx(Ql,{cx:m,cy:v,r:5.5*d,ids:c})},g)});else if(t==="square")p=h({xStep:28,yStep:24,render:(m,v,g)=>S.jsx("g",{children:S.jsx(cP,{cx:m,cy:v,s:12.2*d,ids:c})},g)});else if(t==="slot")p=h({xStep:28,yStep:30,stagger:!0,render:(m,v,g)=>S.jsx("g",{children:S.jsx(uP,{cx:m,cy:v,w:9*d,h:22*d,ids:c})},g)});else if(t==="hex")p=h({xStep:28,yStep:24.4,stagger:!0,render:(m,v,g)=>S.jsx("g",{children:S.jsx(hP,{cx:m,cy:v,r:8*d,ids:c})},g)});else if(t==="bridgeSlot")p=h({xStep:56,yStep:28,stagger:!1,render:(m,v,g)=>S.jsxs("g",{children:[S.jsx("ellipse",{cx:m,cy:v+4.2,rx:"15",ry:"3.2",fill:"rgba(0,0,0,.14)"}),S.jsx("rect",{x:m-16.5,y:v-4.6,width:"33",height:"9.2",rx:"4.6",fill:`url(#${c.bridge})`}),S.jsx("rect",{x:m-16.5,y:v+2.2,width:"33",height:"2.4",rx:"1.1",fill:l.lo}),S.jsx("rect",{x:m-12,y:v-3.4,width:"24",height:"2.2",rx:"1.1",fill:"rgba(255,255,255,.28)"}),S.jsx("rect",{x:m-16.2,y:v-2.6,width:"4.2",height:"5.2",rx:"1.4",fill:`url(#${c.voidG})`}),S.jsx("rect",{x:m+12,y:v-2.6,width:"4.2",height:"5.2",rx:"1.4",fill:`url(#${c.voidG})`})]},g)});else if(t==="trieur")p=h({xStep:26,yStep:22.6,stagger:!0,render:(m,v,g)=>S.jsxs("g",{children:[S.jsx("ellipse",{cx:m+1.4,cy:v+2.2,rx:"7.4",ry:"6.4",fill:"rgba(0,0,0,.32)"}),S.jsx("circle",{cx:m,cy:v,r:"6.8",fill:`url(#${c.bump})`}),S.jsx("ellipse",{cx:m-1.8,cy:v-2.2,rx:"2.4",ry:"1.7",fill:"rgba(255,255,255,.38)"})]},g)});else if(t==="perfocon")p=h({xStep:22,yStep:19.2,stagger:!0,render:(m,v,g)=>S.jsxs("g",{children:[S.jsx("circle",{cx:m+.6,cy:v+.9,r:"7.4",fill:"rgba(0,0,0,.28)"}),S.jsx("circle",{cx:m,cy:v,r:"7.3",fill:`url(#${c.rim})`}),S.jsx("circle",{cx:m,cy:v,r:"5.5",fill:`url(#${c.cone})`}),S.jsx("circle",{cx:m,cy:v,r:"2.35",fill:`url(#${c.voidG})`}),S.jsx("ellipse",{cx:m-.7,cy:v-.9,rx:"1.15",ry:"0.85",fill:"rgba(0,0,0,.35)"})]},g)});else if(t==="decorative"){const m=s?42:70;p=[];let v=0;for(let g=22;g<a;g+=50,v++)for(let f=22+(v%2?20:0);f<o-8;f+=m)lP().forEach(([x,_],y)=>{p.push(S.jsx("g",{children:S.jsx(Ql,{cx:f+x*5.05,cy:g+_*5.05,r:2.15,ids:c})},`${v}-${f}-${y}`))})}else t==="embossed"?p=h({xStep:38,yStep:34,stagger:!0,render:(m,v,g)=>S.jsxs("g",{children:[S.jsx("ellipse",{cx:m+.45,cy:v+1.35,rx:9.2*.92,ry:9.2*.78,fill:"rgba(0,0,0,.16)"}),S.jsx("polygon",{points:G0(m,v,9.2),fill:l.plate0}),S.jsx("polygon",{points:`${m},${v-9.2} ${m},${v-5.704} ${m-5.704},${v} ${m-9.2},${v}`,fill:l.hi}),S.jsx("polygon",{points:`${m},${v-9.2} ${m+9.2},${v} ${m+5.704},${v} ${m},${v-5.704}`,fill:l.mid}),S.jsx("polygon",{points:`${m-9.2},${v} ${m-5.704},${v} ${m},${v+5.704} ${m},${v+9.2}`,fill:l.plate1}),S.jsx("polygon",{points:`${m},${v+5.704} ${m+5.704},${v} ${m+9.2},${v} ${m},${v+9.2}`,fill:l.lo}),S.jsx("polygon",{points:G0(m,v,5.704),fill:l.plate0}),S.jsx("polygon",{points:`${m},${v-5.704} ${m},${v} ${m-5.704*.55},${v}`,fill:"rgba(255,255,255,.22)"}),S.jsx("circle",{cx:m,cy:v,r:2.05,fill:`url(#${c.voidG})`}),S.jsx("circle",{cx:m,cy:v,r:2.05,fill:"none",stroke:"rgba(12,16,20,.55)",strokeWidth:"0.4"})]},g)}):p=h({xStep:26,yStep:22,stagger:!0,render:(m,v,g)=>S.jsx("g",{children:S.jsx(Ql,{cx:m,cy:v,r:5,ids:c})},g)});return S.jsxs("svg",{className:`pattern-preview-svg ${e}`,viewBox:`0 0 ${o} ${a}`,preserveAspectRatio:"xMidYMid slice",role:"img","aria-label":`${t} preview`,children:[S.jsxs("defs",{children:[S.jsx("clipPath",{id:c.clip,children:S.jsx("rect",{width:o,height:a,rx:"5"})}),S.jsxs("linearGradient",{id:c.plate,x1:"0",y1:"0",x2:"1",y2:"1",children:[S.jsx("stop",{offset:"0",stopColor:l.lo}),S.jsx("stop",{offset:".22",stopColor:l.plate0}),S.jsx("stop",{offset:".48",stopColor:l.hi}),S.jsx("stop",{offset:".72",stopColor:l.plate1}),S.jsx("stop",{offset:"1",stopColor:l.lo})]}),S.jsxs("linearGradient",{id:c.sheen,x1:"0",y1:"0",x2:"1",y2:"0",children:[S.jsx("stop",{offset:"0",stopColor:"rgba(255,255,255,0)"}),S.jsx("stop",{offset:".38",stopColor:"rgba(255,255,255,.34)"}),S.jsx("stop",{offset:".62",stopColor:"rgba(255,255,255,0)"}),S.jsx("stop",{offset:"1",stopColor:"rgba(0,0,0,.12)"})]}),S.jsxs("pattern",{id:c.brush,width:l.grainW,height:"14",patternUnits:"userSpaceOnUse",patternTransform:`rotate(${l.grain})`,children:[S.jsx("rect",{width:l.grainW,height:"14",fill:"transparent"}),S.jsx("path",{d:"M0 0 V14",stroke:"rgba(255,255,255,.22)",strokeWidth:"0.45"}),S.jsx("path",{d:`M${l.grainW/2} 0 V14`,stroke:"rgba(0,0,0,.16)",strokeWidth:"0.4"})]}),S.jsxs("radialGradient",{id:c.rim,cx:"34%",cy:"28%",r:"72%",children:[S.jsx("stop",{offset:"0",stopColor:l.hi}),S.jsx("stop",{offset:".42",stopColor:l.mid}),S.jsx("stop",{offset:"1",stopColor:l.lo})]}),S.jsxs("radialGradient",{id:c.voidG,cx:"64%",cy:"70%",r:"78%",children:[S.jsx("stop",{offset:"0",stopColor:l.void0}),S.jsx("stop",{offset:".55",stopColor:l.void1}),S.jsx("stop",{offset:"1",stopColor:"#050608"})]}),S.jsxs("radialGradient",{id:c.bump,cx:"34%",cy:"28%",r:"74%",children:[S.jsx("stop",{offset:"0",stopColor:l.hi}),S.jsx("stop",{offset:".38",stopColor:l.mid}),S.jsx("stop",{offset:".78",stopColor:l.lo}),S.jsx("stop",{offset:"1",stopColor:"#2a2c2e"})]}),S.jsxs("radialGradient",{id:c.cone,cx:"36%",cy:"30%",r:"76%",children:[S.jsx("stop",{offset:"0",stopColor:l.hi}),S.jsx("stop",{offset:".32",stopColor:l.mid}),S.jsx("stop",{offset:".7",stopColor:l.lo}),S.jsx("stop",{offset:"1",stopColor:"#1c2024"})]}),S.jsxs("linearGradient",{id:c.bridge,x1:"0",y1:"0",x2:"0",y2:"1",children:[S.jsx("stop",{offset:"0",stopColor:l.hi}),S.jsx("stop",{offset:".22",stopColor:l.mid}),S.jsx("stop",{offset:".62",stopColor:l.plate0}),S.jsx("stop",{offset:"1",stopColor:l.plate1})]})]}),S.jsxs("g",{clipPath:`url(#${c.clip})`,children:[S.jsx("rect",{width:o,height:a,fill:`url(#${c.plate})`}),S.jsx("rect",{width:o,height:a,fill:`url(#${c.brush})`,opacity:l.grainOpacity}),S.jsx("rect",{width:o,height:a,fill:`url(#${c.sheen})`,opacity:"0.28"}),p]})]})}const xa=new Uint8Array(256),uf=new Uint8Array(256);(function(){for(let e=0,n=1;e<255;e++)xa[e]=n,uf[n]=e,n<<=1,n&256&&(n^=285);xa[255]=xa[0]})();function Ay(t,e){return t&&e?xa[(uf[t]+uf[e])%255]:0}function fP(t){let e=[1];for(let n=0;n<t;n++){const i=[1,xa[n]],r=new Array(e.length+1).fill(0);for(let s=0;s<e.length;s++)r[s]^=e[s],r[s+1]^=Ay(e[s],i[1]);e=r}return e}function pP(t,e){const n=fP(e),i=t.concat(new Array(e).fill(0));for(let r=0;r<t.length;r++){const s=i[r];if(s)for(let o=0;o<n.length;o++)i[r+o]^=Ay(n[o],s)}return i.slice(t.length)}const mP={2:{size:25,data:28,ec:16,blocks:1,align:[6,18]},3:{size:29,data:44,ec:26,blocks:1,align:[6,22]},4:{size:33,data:64,ec:18,blocks:2,align:[6,26]},5:{size:37,data:86,ec:24,blocks:2,align:[6,30]},6:{size:41,data:108,ec:16,blocks:4,align:[6,34]},7:{size:45,data:124,ec:18,blocks:4,align:[6,22,38]}},gP=[21522,20773,24188,23371,17913,16590,20375,19104];function vP(t){if(t+2<=28)return 2;if(t+2<=44)return 3;if(t+2<=64)return 4;if(t+2<=86)return 5;if(t+2<=108)return 6;if(t+2<=124)return 7;throw new Error("QR payload too long")}function Kh(t,e,n,i){for(let r=-1;r<=7;r++)for(let s=-1;s<=7;s++){const o=i+r,a=n+s;if(o<0||a<0||o>=t.length||a>=t.length)continue;const l=r>=0&&r<=6&&s>=0&&s<=6&&(r===0||r===6||s===0||s===6||r>=2&&r<=4&&s>=2&&s<=4);r>=0&&r<=6&&s>=0&&s<=6&&(t[o][a]=l),e[o][a]=!0}}function _P(t,e,n,i){for(let r=-2;r<=2;r++)for(let s=-2;s<=2;s++){const o=i+r,a=n+s;if(e[o][a])return}for(let r=-2;r<=2;r++)for(let s=-2;s<=2;s++){const o=i+r,a=n+s;t[o][a]=Math.max(Math.abs(r),Math.abs(s))!==1,e[o][a]=!0}}function xP(t,e,n){const i=t.length;for(let r=0;r<15;r++){const s=(n>>r&1)===1;r<6?(t[r][8]=s,t[8][i-1-r]=s):r===6?(t[7][8]=s,t[8][i-7]=s):r===7?(t[8][8]=s,t[8][i-8]=s):r===8?(t[8][7]=s,t[i-7][8]=s):(t[8][14-r]=s,t[i-15+r][8]=s),e[r<8?Math.min(r,7):8][8]=!0}for(let r=0;r<i;r++)e[8][r]=!0,e[r][8]=!0;t[i-8][8]=!0,e[i-8][8]=!0}function yP(t,e,n){return(e+n)%2===0}function SP(t){const e=Array.from(new TextEncoder().encode(String(t))),n=vP(e.length),i=mP[n],r=[],s=(_,y)=>{for(let C=y-1;C>=0;C--)r.push(_>>C&1)};for(s(4,4),s(e.length,8),e.forEach(_=>s(_,8)),s(0,Math.min(4,i.data*8-r.length));r.length%8;)r.push(0);const o=[];for(let _=0;_<r.length;_+=8){let y=0;for(let C=0;C<8;C++)y=y<<1|r[_+C];o.push(y)}const a=[236,17];for(;o.length<i.data;)o.push(a[o.length-e.length&1]);o.length=i.data;const l=i.data/i.blocks,c=[];for(let _=0;_<i.blocks;_++){const y=o.slice(_*l,(_+1)*l);c.push({data:y,ec:pP(y,i.ec)})}const u=[];for(let _=0;_<l;_++)c.forEach(y=>u.push(y.data[_]));for(let _=0;_<i.ec;_++)c.forEach(y=>u.push(y.ec[_]));const h=[];u.forEach(_=>{for(let y=7;y>=0;y--)h.push(_>>y&1)});const d=i.size,p=Array.from({length:d},()=>Array(d).fill(!1)),m=Array.from({length:d},()=>Array(d).fill(!1));Kh(p,m,0,0),Kh(p,m,d-7,0),Kh(p,m,0,d-7),i.align.forEach(_=>i.align.forEach(y=>_P(p,m,_,y)));for(let _=8;_<d-8;_++)p[6][_]=_%2===0,p[_][6]=_%2===0,m[6][_]=m[_][6]=!0;const v=0;xP(p,m,gP[v]);let g=0,f=-1,x=d-1;for(;x>0;){x===6&&(x-=1);for(let _=0;_<d;_++){const y=f<0?d-1-_:_;for(let C=0;C<2;C++){const E=x-C;if(m[y][E])continue;let A=g<h.length?h[g++]===1:!1;yP(v,y,E)&&(A=!A),p[y][E]=A}}f=-f,x-=2}return p}function MP(t,e,n,i,r,s="#111"){const o=SP(e),a=o.length,l=4,c=a+l*2,u=r/c;t.fillStyle="#fff",t.fillRect(n,i,r,r),t.fillStyle=s;for(let h=0;h<a;h++)for(let d=0;d<a;d++)o[h][d]&&t.fillRect(n+(d+l)*u,i+(h+l)*u,u+.4,u+.4)}function wP(t){return String(t||"product").replace(/[^A-Za-z0-9]+/g,"_").replace(/^_|_$/g,"")}function W0(){const t="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="";for(let n=0;n<6;n++)e+=t[t.length*Math.random()|0];return e}async function EP(t,e){try{const n=await fetch("/api/codes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({configuration:t})});if(n.ok){const i=await n.json();return{code:i.code||W0(),url:i.url||e}}}catch{}return{code:W0(),url:e}}function TP(t){return new Promise((e,n)=>{const i=new Image;i.onload=()=>e(i),i.onerror=n,i.src=t})}function ec(t,e,n,i,r,s){const o=Math.min(s,i/2,r/2);t.beginPath(),t.moveTo(e+o,n),t.arcTo(e+i,n,e+i,n+r,o),t.arcTo(e+i,n+r,e,n+r,o),t.arcTo(e,n+r,e,n,o),t.arcTo(e,n,e+i,n,o),t.closePath()}function $0(t,e,n,i,r,s){t.fillStyle="#74808a",t.font="700 12px Inter, Segoe UI, Arial, sans-serif",t.fillText(e.toUpperCase(),i,r),t.fillStyle="#151b20",t.font="700 20px Inter, Segoe UI, Arial, sans-serif";let a=String(n);for(;t.measureText(a).width>s&&a.length>3;)a=`${a.slice(0,-2)}…`;t.fillText(a,i,r+26)}async function AP(t,e,n,i,r){const l=document.createElement("canvas");l.width=1920*2,l.height=1080*2;const c=l.getContext("2d",{alpha:!1,willReadFrequently:!0});c.scale(2,2),c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high";const u=1920,h=1080;c.fillStyle="#f4f6f7",c.fillRect(0,0,u,h),c.fillStyle="#11171c",c.fillRect(0,0,u,96),c.fillStyle="#d8ff37",c.fillRect(0,0,10,96),c.fillStyle="#d8ff37",c.font="800 12px Inter, Segoe UI, Arial, sans-serif",c.fillText("STEELWORKS / CONFIGURATION SHEET",40,28),c.fillStyle="#fff",c.font="800 34px Inter, Segoe UI, Arial, sans-serif",c.fillText(Pe.productName,40,64),c.fillStyle="#9ba5ad",c.font="500 13px Inter, Segoe UI, Arial, sans-serif",c.fillText(fy,40,84),c.textAlign="right",c.fillStyle="#fff",c.font="700 15px Inter, Segoe UI, Arial, sans-serif",c.fillText(r,u-40,32),c.fillStyle="#9ba5ad",c.font="500 13px Inter, Segoe UI, Arial, sans-serif",c.fillText(new Date().toLocaleDateString(),u-40,54),c.fillText(`${Pe.contactEmail}  ·  ${Pe.contactPhone}`,u-40,76),c.textAlign="left";const d=await TP(n),p=32,m=116,v=1188,g=748;c.fillStyle="#dce1e4",ec(c,p,m,v,g,10),c.fill();const f=Math.min((v-48)/d.width,(g-48)/d.height),x=d.width*f,_=d.height*f;c.save(),ec(c,p,m,v,g,10),c.clip(),c.drawImage(d,p+(v-x)/2,m+(g-_)/2,x,_),c.restore();const y=Bn[i.material],C=co[i.finish],E=Ce[i.pattern],A=bp(i),P=Cp(i),w=gy(i),M=(E==null?void 0:E.kind)==="slot"||(E==null?void 0:E.kind)==="bridge",U=M?`${i.pitch} × ${i.rowPitch} mm`:`${i.pitch} mm`,B=i.panelForm==="flat"?"N/A":`${i.flangeDepth} mm / ${i.bendAngle}° / R${i.bendRadius}`,D=1240,z=116,j=648,Z=748;c.fillStyle="#fff",ec(c,D,z,j,Z,10),c.fill(),c.fillStyle="#d8ff37",c.fillRect(D,z+10,8,Z-20),c.fillStyle="#11171c",c.font="800 16px Inter, Segoe UI, Arial, sans-serif",c.fillText("FABRICATION PARAMETERS",D+36,z+42),c.strokeStyle="#d7dde1",c.beginPath(),c.moveTo(D+36,z+58),c.lineTo(D+j-28,z+58),c.stroke();const Q=D+36,N=D+340,H=270;[["Sheet size",`${i.width} × ${i.height} mm`,"Thickness",`${i.thickness} mm`],["Material",y.label,"Finish",`${C.label}${i.finish==="powder"?` · ${zt[i.color].label}`:""}`],["Pattern",E!=null&&E.conical?`${E.label} · ${i.coneAngle}°`:E.label,"Opening",`${i.holeSize} mm${M?` × ${i.slotLength} L`:""}${E!=null&&E.conical?` / ${i.coneAngle}°`:""}`],["Pitch",U,"Quantity",String(i.quantity||1)],["Panel form",Zs[i.panelForm].label,"Bend / flange",B],["Corner",`${Ga[i.corner].label}${i.corner==="square"?"":` ${Ks(i)} mm`}`,"Quality",`${i.deburr} / ${i.tolerance} / ${i.flatness}`],["Open area / mass",`${A.toFixed(1)}% / ${P.toFixed(1)} kg`,`Indicative ${Pe.currency}`,Rp(w,Pe.currency)]].forEach((Se,Fe)=>{const G=z+88+Fe*80;$0(c,Se[0],Se[1],Q,G,H),$0(c,Se[2],Se[3],N,G,H)}),c.fillStyle="#11171c",ec(c,32,884,1856,164,10),c.fill(),c.fillStyle="#d8ff37",c.fillRect(32,894,8,144);try{MP(c,e,56,904,124)}catch{}c.fillStyle="#d8ff37",c.font="800 22px Inter, Segoe UI, Arial, sans-serif",c.fillText(`CONFIGURATION ${t}`,204,938),c.fillStyle="#fff",c.font="700 16px Inter, Segoe UI, Arial, sans-serif",c.fillText("Scan to reopen this exact configuration",204,968),c.fillStyle="#9ba5ad",c.font="500 13px Inter, Segoe UI, Arial, sans-serif";const te=e.length>140?`${e.slice(0,140)}…`:e;return c.fillText(te,204,994),c.fillText("DXF export contains blank profile, bend lines, perforations and fabrication notes. Final CAM/tooling validation remains the responsibility of the fabricator.",204,1018),c.fillStyle="#6f7a82",c.font="600 11px Inter, Segoe UI, Arial, sans-serif",c.fillText(`${Pe.manufacturer} · Parametric 3D product configuration`,204,1038),l}function bP(t,e,n,i){const o=new TextEncoder,a=[];let l=0;const c=[0],u=f=>{const x=typeof f=="string"?o.encode(f):f;a.push(x),l+=x.length};u(`%PDF-1.4
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
%%EOF`);const m=a.reduce((f,x)=>f+x.length,0),v=new Uint8Array(m);let g=0;return a.forEach(f=>{v.set(f,g),g+=f.length}),v}async function CP(t){const e=new Blob([t]).stream().pipeThrough(new CompressionStream("deflate"));return new Uint8Array(await new Response(e).arrayBuffer())}async function RP(t,e=.97){const n=await new Promise(o=>t.toBlob(o,"image/jpeg",e));if(n)return new Uint8Array(await n.arrayBuffer());const i=t.toDataURL("image/jpeg",e),r=atob(i.split(",")[1]||""),s=new Uint8Array(r.length);for(let o=0;o<r.length;o++)s[o]=r.charCodeAt(o);return s}async function PP(t){try{const{width:e,height:n}=t,i=t.getContext("2d",{willReadFrequently:!0}),{data:r}=i.getImageData(0,0,e,n),s=new Uint8Array(e*n*3);for(let o=0,a=0;o<r.length;o+=4,a+=3)s[a]=r[o],s[a+1]=r[o+1],s[a+2]=r[o+2];return{bytes:await CP(s),filter:"FlateDecode"}}catch{return{bytes:await RP(t,.97),filter:"DCTDecode"}}}async function LP({config:t,viewUrl:e,captureJpeg:n,sku:i}){const r=await EP(t,e),s=r.url||e,o=n(),a=await AP(r.code,s,o,t,i),l=await PP(a),c=bP(l.bytes,a.width,a.height,l.filter),u=document.createElement("a");return u.href=URL.createObjectURL(new Blob([c],{type:"application/pdf"})),u.download=`${wP(Pe.productName)}_${r.code}.pdf`,u.click(),setTimeout(()=>URL.revokeObjectURL(u.href),1500),{code:r.code,sku:i,url:s}}const NP=["mill","brushed","galvanized","powder"],DP=[{id:"configure",n:"1",label:"Configure"},{id:"review",n:"2",label:"Review & quote"}],IP={none:"None",standard:"Standard",fine:"Fine"},UP={"iso-c":"ISO coarse","iso-m":"ISO medium","iso-f":"ISO fine"},FP={standard:"Standard",precision:"Precision"},by=new URL(location.href).searchParams.get("embed")==="1",Cy="steel-configurator-saved",qi=lf(),vc=Tu(),OP="./assets/sample-logo.svg",kP=vc?280:200;let j0=!1;function zP(){try{if(document.referrer)return new URL(document.referrer).origin}catch{}return by?"*":location.origin}function X0(t){window.parent&&window.parent!==window&&window.parent.postMessage({source:"steel-configurator",...t},zP())}function q0(){try{const t=JSON.parse(localStorage.getItem(Cy)||"[]");return Array.isArray(t)?t:[]}catch{return[]}}function tc(t,e={}){fetch("/api/events",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:t,payload:e})}).catch(()=>{})}function BP(){var xo,Sr,yo,So,Ja,Qa,el,b,k,X,W,$,_e,Re,Ne,Ie,Be;const[t,e]=Te.useReducer(uR,null,yR),[n,i]=Te.useState(()=>({...Pe})),[r,s]=Te.useState(""),[o,a]=Te.useState(!1),[l,c]=Te.useState(!1),[u,h]=Te.useState(!1),[d,p]=Te.useState(""),[m,v]=Te.useState("idle"),[g,f]=Te.useState(!1),[x,_]=Te.useState(!0),[y,C]=Te.useState(!1),[E,A]=Te.useState(!1),[P,w]=Te.useState(100),[M,U]=Te.useState("configure"),[B,D]=Te.useState("orbit"),[z,j]=Te.useState(!1),Z=Te.useRef({w:0,h:0}),[Q,N]=Te.useState(()=>!Tu()),[H,q]=Te.useState("form"),te=Te.useRef(null),Se=Te.useRef(null),Fe=Te.useRef({width:null,height:null,thickness:null}),G=Te.useRef(""),ie=Te.useRef(""),de=Te.useRef(null),[le,Oe]=Te.useState(!1),Ve=Te.useRef(0),F=Te.useMemo(()=>_R(t,n.skuPrefix),[t,n.skuPrefix]),ze=Te.useMemo(()=>bp(t),[t]),Y=Te.useMemo(()=>Cp(t),[t]),ae=Te.useMemo(()=>Eu(t),[t]),J=Te.useMemo(()=>gy(t),[t,n]),fe=Te.useMemo(()=>Rp(J,n.currency),[J,n.currency]),oe=Te.useMemo(()=>pR(t),[t]),me=Te.useMemo(()=>_a(t),[t]),Ee=Te.useMemo(()=>mR(t),[t]),R=Te.useMemo(()=>vy(t),[t]),T=Te.useMemo(()=>Ee.filter(L=>L.level==="block"),[Ee]),V=qi.android&&m!=="idle",K=t.units==="in"?"in":"mm",ne=(L,ue=K==="in"?3:0)=>`${gc(L,t.units,ue)} ${K}`,re=Te.useMemo(()=>vR({config:t,sku:F,openArea:ze,weight:Y,price:J,lead:oe,currency:n.currency}),[t,F,ze,Y,J,oe,n.currency]),we=L=>{s(L),window.clearTimeout(Ve.current),Ve.current=window.setTimeout(()=>s(""),2400)};Te.useEffect(()=>{X0({type:"ready",configuration:t,sku:F});const L=ue=>{if(ue.source!==window.parent)return;const De=ue.data;!De||De.source==="steel-configurator"||De.type==="setConfiguration"&&De.configuration&&e({type:"load",config:De.configuration})};return window.addEventListener("message",L),()=>window.removeEventListener("message",L)},[]),Te.useEffect(()=>{X0({type:"configurationChanged",configuration:t,sku:F})},[t,F]),Te.useEffect(()=>(document.body.classList.toggle("is-touch-tablet",qi.touchTablet||qi.ios),()=>document.body.classList.remove("is-touch-tablet")),[]),Te.useEffect(()=>{Object.values(Bn).forEach(L=>{const ue=new Image;ue.decoding="async",ue.src=L.cardImage})},[]),Te.useEffect(()=>{j0||(j0=!0,tc("view",{sku:F}))},[F]),Te.useEffect(()=>{fetch("/api/product").then(L=>L.ok?L.json():Promise.reject()).then(L=>{const ue=lR(L);i(ue);const De=new URL(location.href).searchParams;!De.has("w")&&!De.has("h")&&!De.has("t")&&!De.has("cfg")&&e({type:"applyCatalogDefaults",values:{width:ue.width,height:ue.height,thickness:ue.thickness}})}).catch(()=>{})},[]),Te.useEffect(()=>{const L=(new URL(location.href).searchParams.get("cfg")||"").toUpperCase();if(!L)return;let ue=!1;return fetch(`/api/codes/${L}`).then(De=>De.ok?De.json():Promise.reject()).then(De=>{if(ue)return;const rt=xR(De);rt&&e({type:"load",config:rt})}).catch(()=>{}),()=>{ue=!0}},[]);const ve=Te.useCallback(L=>w(L),[]),ge=Te.useCallback(L=>{var ue;v(L),L==="idle"&&(w(100),(ue=te.current)==null||ue.setScalePercent(100))},[]),He=Te.useCallback(L=>{te.current=L,L.setDimensionHud(Fe.current),C(!0)},[]),pe=Te.useCallback(L=>A(!!L),[]),Le=af(t),je=Te.useRef(0);Te.useEffect(()=>()=>{G.current&&URL.revokeObjectURL(G.current)},[]),Te.useEffect(()=>{var At;if(!qi.ios||!y||!te.current||(Oe(!1),de.current&&(de.current.dataset.ready="0"),E))return;let L=!1;const De=!!((At=Ce[t.pattern])!=null&&At.formed)?vc?500:400:kP,rt=window.setTimeout(()=>{const fn=++je.current;te.current.exportUSDZ(t).then(Xe=>{if(L||fn!==je.current)return;G.current&&URL.revokeObjectURL(G.current);const ke=URL.createObjectURL(new Blob([Xe],{type:"model/vnd.usdz+zip"}));G.current=ke,ie.current=Le,Oe(!0),de.current&&(de.current.href=ke,de.current.dataset.ready="1")}).catch(Xe=>{L||fn!==je.current||(Xe==null?void 0:Xe.message)!=="stale-export"&&(console.error("USDZ export failed",Xe),Oe(!1),de.current&&(de.current.dataset.ready="0"))})},De);return()=>{L=!0,window.clearTimeout(rt)}},[y,E,Le,t]);async function Ue(){if(!te.current){p("Wait for the 3D panel to load, then tap View in AR again.");return}if(!await FR()){p(cf);return}try{w(100),te.current.setScalePercent(100),v("launching"),tc("ar_launch",{sku:F}),await te.current.enterAR({overlay:Se.current})}catch(L){v("idle"),p(OR(L))}}async function be(){const L=Wh(t);try{tc("share",{sku:F}),navigator.share?await navigator.share({title:`${n.productName} ${F}`,url:L}):(await navigator.clipboard.writeText(L),we("Configuration link copied"))}catch{}}function We(){const L=q0();L.unshift({id:`CFG-${Date.now()}`,name:`${F} · ${new Date().toLocaleString()}`,config:t});try{localStorage.setItem(Cy,JSON.stringify(L.slice(0,16)))}catch{}c(!0),we("Configuration saved locally")}async function Ke(L,ue){try{await navigator.clipboard.writeText(L),we(ue)}catch{we("Could not copy")}}function gt(){if(T.length){q("rules"),we("This configuration cannot be manufactured as specified");return}a(!0)}async function $e(){if(T.length){q("rules"),we("Fix manufacturing issues before export or quote");return}try{we("Preparing technical PDF…");const L=await LP({config:t,viewUrl:Wh(t),captureJpeg:()=>te.current.captureJpeg(),sku:F});tc("spec_download",{sku:F,kind:"pdf",code:L.code}),we(`PDF saved · ${L.code}`)}catch(L){console.error(L),we((L==null?void 0:L.message)||"Could not create the PDF")}}async function O(L){if(L.preventDefault(),T.length){we("Fix manufacturing issues before sending an RFQ");return}const ue=new FormData(L.currentTarget),De=Object.fromEntries(ue.entries()),rt=`RFQ: ${n.productName} ${F}`,At=["Perforated sheet RFQ","",`Name: ${De.name||""}`,`Company: ${De.company||""}`,`Email: ${De.email||""}`,`Phone: ${De.phone||""}`,`Quantity: ${De.quantity||t.quantity}`,"",re,`Link: ${Wh(t)}`,"","Notes:",De.notes||"(none)"].join(`
`);try{await fetch("/api/quotes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...De,quantity:Number(De.quantity)||t.quantity,configuration:{...t,computed:{sku:F,openArea:ze,weight:Y,holes:ae}}})})}catch{}window.location.href=`mailto:${n.contactEmail}?subject=${encodeURIComponent(rt)}&body=${encodeURIComponent(At)}`}const se=l?q0():[],ee=V?m==="scanning"||m==="launching"?"Move the phone to find the floor, then tap to place":m==="placing"?"Tap to place the sheet at 1:1 scale":m==="scaling"?`${P}%`:"Drag to move · pinch to scale · twist to rotate":"",ye=`${co[t.finish].label}${t.finish==="powder"?` · ${zt[t.color].label} – ${zt[t.color].name}`:""}`,Me=M==="configure"?"configure":"review",Qe=((xo=Ce[t.pattern])==null?void 0:xo.kind)==="slot"||((Sr=Ce[t.pattern])==null?void 0:Sr.kind)==="bridge",ct=Qe?`${t.pitch} × ${t.rowPitch}`:String(t.pitch),vt=t.holeSize<me.minHoleSize,Ot=t.pitch<me.minPitchX,it=(((yo=Ce[t.pattern])==null?void 0:yo.kind)==="slot"||((So=Ce[t.pattern])==null?void 0:So.kind)==="bridge")&&t.rowPitch<me.minRowPitch,Dn=(((Ja=Ce[t.pattern])==null?void 0:Ja.kind)==="slot"||((Qa=Ce[t.pattern])==null?void 0:Qa.kind)==="bridge")&&t.slotLength<me.minSlotLength,Vt=t.border<me.minBorder;function xr(L){var ue;D(L),(ue=te.current)==null||ue.setTool(L)}function _o(L,ue){const De=Number(ue);if(!Number.isFinite(De)||De<=0)return;if(!z||L!=="width"&&L!=="height"){e({type:"set",key:L,value:De});return}const rt=Z.current.w>0?Z.current:{w:t.width,h:t.height};if(Z.current=rt,L==="width"){const Xe=De,ke=Xe*rt.h/rt.w;e({type:"setMany",values:{width:Xe,height:ke}});return}const At=De,fn=At*rt.w/rt.h;e({type:"setMany",values:{width:fn,height:At}})}function Ka(){j(L=>(L||(Z.current={w:t.width,h:t.height}),!L))}function yr(){const L=gR(t);if(!Object.keys(L).length){we("No automatic corrections are required");return}e({type:"setMany",values:L}),we("Recommended manufacturing values applied")}return S.jsxs("main",{className:`steel-app${by?" is-embed":""}${Me!=="configure"?" step-review":""}`,children:[S.jsxs("header",{className:"steel-head",children:[S.jsxs("div",{className:"brand-lockup",children:[S.jsx("div",{className:"brand-mark-steel",children:"S"}),S.jsxs("div",{className:"brand-text",children:[S.jsx("strong",{children:"STEELWORKS"}),S.jsx("span",{children:"Configurator"})]})]}),S.jsx("nav",{className:"stepper","aria-label":"Configuration steps",children:DP.map(L=>S.jsxs("button",{type:"button",className:`step${Me===L.id?" active":""}`,onClick:()=>U(L.id),children:[S.jsx("em",{children:L.n})," ",L.label]},L.id))}),S.jsxs("div",{className:"head-actions",children:[S.jsxs("button",{className:"ghost-action",type:"button","aria-label":"Save configuration",onClick:We,children:[S.jsx(WP,{})," ",S.jsx("span",{className:"action-label",children:"Save"})]}),S.jsxs("button",{className:"ghost-action",type:"button","aria-label":"Share configuration",onClick:be,children:[S.jsx($P,{})," ",S.jsx("span",{className:"action-label",children:"Share"})]}),S.jsxs("button",{className:"ghost-action quote-action",type:"button","aria-label":"Request quote",onClick:gt,children:[S.jsx("span",{className:"action-label",children:"Request "}),"Quote"]})]})]}),S.jsxs("div",{className:"steel-layout",children:[S.jsxs("section",{className:"steel-stage",children:[S.jsxs("div",{className:"stage-head",children:[S.jsxs("div",{children:[S.jsx("h1",{children:n.productName}),S.jsx("p",{className:"steel-tagline",children:Me==="review"?"Confirm the 3D sheet, then copy the spec or request a quote.":fy})]}),S.jsxs("div",{className:"sku-chip",title:F,children:[S.jsx("code",{children:F}),S.jsx("button",{type:"button",className:"icon-copy",title:"Copy product code",onClick:()=>Ke(F,"Product code copied"),children:S.jsx(QP,{})})]})]}),S.jsxs("div",{className:"viewer-shell",onPointerDown:()=>_(!1),children:[S.jsx(aP,{config:t,scalePercent:100,onReady:He,onError:()=>f(!0),onArState:ge,onArScale:ve,onBusy:pe}),!qi.touchTablet&&!vc&&S.jsxs("div",{className:"viewer-tools",children:[S.jsx(Ko,{active:B==="orbit",title:"Rotate the sheet",onClick:()=>xr("orbit"),children:S.jsx(jP,{})}),S.jsx(Ko,{active:B==="zoom",title:"Zoom the view",onClick:()=>xr("zoom"),children:S.jsx(XP,{})}),S.jsx(Ko,{title:"Fit sheet in view",onClick:()=>{var L;return(L=te.current)==null?void 0:L.fitView()},children:S.jsx(qP,{})}),S.jsx(Ko,{active:B==="pan",title:"Pan the camera",onClick:()=>xr("pan"),children:S.jsx(YP,{})}),S.jsx(Ko,{title:"Reset camera",onClick:()=>{var L;xr("orbit"),(L=te.current)==null||L.resetView()},children:S.jsx(ZP,{})})]}),S.jsxs("div",{className:"nav-cube",children:[S.jsx("button",{type:"button",title:"Top view",onClick:()=>{var L;return(L=te.current)==null?void 0:L.setPreset("top")},children:"Top"}),S.jsx("button",{type:"button",title:"Front view",onClick:()=>{var L;return(L=te.current)==null?void 0:L.setPreset("front")},children:"Front"}),S.jsx("button",{type:"button",title:"Right view",onClick:()=>{var L;return(L=te.current)==null?void 0:L.setPreset("right")},children:"Right"})]}),S.jsxs("div",{className:"pattern-thumb",title:Ce[t.pattern].label,children:[S.jsx(dP,{pattern:t.pattern,material:t.material,className:"pattern-thumb-svg",variant:"thumb"}),S.jsx("span",{children:"Pattern preview"})]}),S.jsxs("div",{className:"dim dim-w",ref:L=>{Fe.current.width=L},children:[S.jsx("i",{}),S.jsx("b",{}),S.jsx("i",{}),S.jsx("em",{children:ne(t.width)})]}),S.jsxs("div",{className:"dim dim-h",ref:L=>{Fe.current.height=L},children:[S.jsx("i",{}),S.jsx("b",{}),S.jsx("i",{}),S.jsx("em",{children:ne(t.height)})]}),S.jsxs("div",{className:"dim dim-t",ref:L=>{Fe.current.thickness=L},children:[S.jsx("i",{}),S.jsx("b",{}),S.jsx("i",{}),S.jsx("em",{children:ne(t.thickness,K==="in"?3:1)})]}),S.jsxs("div",{className:"viewer-ar",children:[qi.android&&S.jsx("button",{className:"btn btn-outline",type:"button",onClick:Ue,children:"View in AR"}),qi.ios&&S.jsxs("a",{ref:de,className:`btn btn-outline ar-link${le?"":" is-pending"}`,rel:"ar",href:"#quicklook","aria-disabled":!le,onClick:L=>{(!le||ie.current!==Le)&&L.preventDefault()},children:[S.jsx("img",{className:"ar-icon",alt:"",src:OP}),le?"View in AR":"Preparing AR…"]})]}),E&&S.jsx("div",{className:"viewer-busy",children:"Updating perforation…"}),x&&S.jsx("p",{className:"orbit-caption",children:qi.touchTablet||vc?"Drag to rotate · pinch to zoom":"Drag to rotate · pinch or scroll to zoom"}),g&&S.jsx("p",{className:"viewer-error",children:"3D view could not start. Open this page in Chrome or Safari."})]})]}),S.jsx("aside",{className:"config-panel",children:Me==="review"?S.jsxs("div",{className:"review-panel",children:[S.jsx("p",{className:"eyebrow",children:"Review & quote"}),S.jsx("h2",{children:"Check this sheet"}),S.jsx("p",{className:"review-intro",children:"This is the manufacturing specification for the 3D sheet. Edit configuration to change values, then quote from here."}),S.jsxs("div",{className:"config-summary prominent",children:[S.jsxs("div",{className:"summary-sku",children:[S.jsx("span",{children:"Product code"}),S.jsx("strong",{children:F})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Sheet"}),S.jsxs("strong",{children:[ne(t.width)," × ",ne(t.height)," × ",ne(t.thickness,K==="in"?3:1)]})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Quantity"}),S.jsxs("strong",{children:[t.quantity," pcs · ",R.label]})]}),S.jsxs("div",{className:"review-pattern",children:[S.jsx("span",{className:"material-preview review-material-preview","aria-hidden":"true",children:S.jsx("img",{src:Bn[t.material].cardImage,alt:""})}),S.jsxs("div",{className:"review-pattern-meta",children:[S.jsx("span",{children:"Material"}),S.jsx("strong",{children:Bn[t.material].label})]})]}),S.jsxs("div",{className:"review-pattern",children:[S.jsx("span",{className:`pattern-preview pattern-${t.pattern}`,"aria-hidden":"true"}),S.jsxs("div",{className:"review-pattern-meta",children:[S.jsx("span",{children:"Pattern"}),S.jsxs("strong",{children:[Ce[t.pattern].label,(el=Ce[t.pattern])!=null&&el.conical?` · ${t.coneAngle}°`:""]})]})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Opening"}),S.jsxs("strong",{children:[t.holeSize," mm · ",ct," mm centers",Qe?` · slot ${t.slotLength} mm`:"",(b=Ce[t.pattern])!=null&&b.conical?` · head Ø${kn(t).head.toFixed(2)} · exit Ø${kn(t).exit}`:""]})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Finish"}),S.jsx("strong",{children:ye})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Form"}),S.jsxs("strong",{children:[Zs[t.panelForm].label,t.panelForm!=="flat"?` · flange ${t.flangeDepth} mm · ${t.bendAngle}° · R${t.bendRadius}`:""]})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Corners"}),S.jsxs("strong",{children:[Ga[t.corner].label,t.corner!=="square"?` ${Ks(t)} mm`:""]})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Quality"}),S.jsxs("strong",{children:[IP[t.deburr]," · ",UP[t.tolerance]," · ",FP[t.flatness]]})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Open area / mass"}),S.jsxs("strong",{children:[ze.toFixed(1),"% · ",Y.toFixed(1)," kg"]})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Price / lead"}),S.jsxs("strong",{children:[fe," · ",oe]})]})]}),S.jsx("div",{className:`review-status${T.length?" block":Ee.length?" warn":" ok"}`,children:T.length?"Manufacturing blocks must be fixed before quoting or export.":Ee.length?"Configuration can be quoted, but review the warnings below.":"Within standard punching rules."}),Ee.length>0&&S.jsx("ul",{className:"issue-list",children:Ee.map(L=>S.jsx("li",{className:`issue-${L.level}`,children:L.text},L.text))}),Ee.length>0&&S.jsx("button",{className:"btn btn-primary reset-btn",type:"button",onClick:yr,children:"Apply recommended fixes"}),S.jsx("div",{className:"review-actions",children:S.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>U("configure"),children:"← Edit configuration"})}),S.jsx("button",{className:"btn btn-primary summary-cta",type:"button",onClick:gt,children:"Request Quote →"})]}):S.jsxs(S.Fragment,{children:[S.jsxs(Yo,{index:"01",title:"Sheet size",children:[S.jsx("div",{className:"section-meta",children:S.jsxs("label",{className:"units-select",children:[S.jsx("span",{children:"Units"}),S.jsxs("select",{value:t.units,onChange:L=>e({type:"set",key:"units",value:L.target.value}),children:[S.jsx("option",{value:"mm",children:"mm"}),S.jsx("option",{value:"in",children:"inch"})]})]})}),S.jsxs("div",{className:"dimension-grid size-grid",children:[S.jsx(En,{label:"Width",units:t.units,value:t.width,min:200,max:3e3,step:5,onChange:L=>_o("width",L)}),S.jsx("button",{className:`lock-btn${z?" active":""}`,type:"button","aria-pressed":z,title:z?"Unlock width and height":"Lock width and height in proportion",onClick:Ka,children:z?S.jsx(KP,{}):S.jsx(JP,{})}),S.jsx(En,{label:"Height",units:t.units,value:t.height,min:200,max:4e3,step:5,onChange:L=>_o("height",L)}),S.jsx(En,{label:"Thickness",units:t.units,value:t.thickness,min:.5,max:12,step:.5,digits:1,onChange:L=>e({type:"set",key:"thickness",value:L})}),S.jsx(En,{label:"Border",units:t.units,value:t.border,min:0,max:300,step:5,invalid:Vt,onChange:L=>e({type:"set",key:"border",value:L})})]}),z&&S.jsx("p",{className:"fab-note",children:"Width and height are locked in proportion. Change one, the other follows."}),S.jsxs("div",{className:"dimension-grid tight-top",children:[S.jsx(En,{label:"Quantity",suffix:"pcs",value:t.quantity,min:1,max:9999,step:1,onChange:L=>e({type:"set",key:"quantity",value:L})}),S.jsx("div",{className:`stock-chip${R.ok?"":" warn"}`,children:R.label})]})]}),S.jsx(Yo,{index:"02",title:"Material",children:S.jsx("div",{className:"material-grid",children:Object.entries(Bn).map(([L,ue])=>S.jsxs("button",{type:"button",className:`material-card${t.material===L?" active":""}`,onClick:()=>e({type:"set",key:"material",value:L}),children:[S.jsxs("div",{className:"material-preview",children:[S.jsx("img",{src:ue.cardImage,alt:"",width:480,height:240,loading:t.material===L?"eager":"lazy",decoding:"async",fetchPriority:t.material===L?"high":"low"}),t.material===L&&S.jsx("span",{className:"material-check","aria-hidden":"true",children:"✓"})]}),S.jsxs("div",{className:"material-info",children:[S.jsx("strong",{className:"material-name",children:ue.label}),S.jsx("small",{className:"material-code",children:ue.short})]})]},L))})}),S.jsxs(Yo,{index:"03",title:"Perforation pattern",children:[rR.map(L=>S.jsxs("div",{className:"pattern-group",children:[S.jsx("p",{className:"pattern-group-title",children:L.title}),S.jsx("div",{className:"pattern-grid",children:L.keys.map(ue=>{const De=Ce[ue];return S.jsxs("button",{className:`pattern-card ${t.pattern===ue?"active":""}`,type:"button",onClick:()=>e({type:"setMany",values:{pattern:ue,...vo[ue]||{}}}),children:[t.pattern===ue&&S.jsx("span",{className:"pattern-check","aria-hidden":"true",children:"✓"}),S.jsx("span",{className:`pattern-preview pattern-${ue}`}),S.jsx("span",{children:De.label})]},ue)})})]},L.id)),S.jsx("div",{className:"pattern-grid tight-top",children:S.jsxs("label",{className:"pattern-card pattern-upload",children:[S.jsx("span",{className:"pattern-preview pattern-custom"}),S.jsx("strong",{children:"Upload DXF / SVG"}),S.jsx("span",{children:"Custom pattern file"}),S.jsx("input",{type:"file",accept:".dxf,.svg",hidden:!0,onChange:()=>we("Custom DXF / SVG patterns ship with the production CAM module")})]})}),S.jsx("p",{className:"pattern-blurb",children:Ce[t.pattern].blurb}),((k=Ce[t.pattern])==null?void 0:k.conical)&&S.jsxs(S.Fragment,{children:[S.jsx("p",{className:"fab-label",children:"Conical mold head"}),S.jsx("div",{className:"choice-grid",children:[60,30].map(L=>S.jsx("button",{type:"button",className:`choice-card${t.coneAngle===L?" active":""}`,onClick:()=>e({type:"set",key:"coneAngle",value:L}),children:D0[L].label},L))}),S.jsxs("p",{className:"fab-note",children:[D0[t.coneAngle].blurb," Head Ø ",kn(t).head.toFixed(2)," mm · collar ",kn(t).height.toFixed(2)," mm · exit Ø ",kn(t).exit," mm."]})]}),S.jsxs("button",{className:"edit-params",type:"button",onClick:()=>N(L=>!L),children:[Q?"Hide":"Edit"," pattern parameters"]}),Q&&S.jsxs("div",{className:"dimension-grid tight-top",children:[S.jsx(En,{label:HP(t.pattern),units:t.units,value:t.holeSize,min:1,max:80,step:1,invalid:vt,onChange:L=>e({type:"set",key:"holeSize",value:L})}),S.jsx(En,{label:VP(t.pattern),units:t.units,value:t.pitch,min:2,max:200,step:1,invalid:Ot,onChange:L=>e({type:"set",key:"pitch",value:L})}),(((X=Ce[t.pattern])==null?void 0:X.kind)==="slot"||((W=Ce[t.pattern])==null?void 0:W.kind)==="bridge")&&S.jsxs(S.Fragment,{children:[S.jsx(En,{label:"Row pitch",units:t.units,value:t.rowPitch,min:2,max:200,step:1,invalid:it,onChange:L=>e({type:"set",key:"rowPitch",value:L})}),S.jsx(En,{label:"Slot length",units:t.units,value:t.slotLength,min:1,max:160,step:1,invalid:Dn,onChange:L=>e({type:"set",key:"slotLength",value:L})})]})]})]}),S.jsxs(Yo,{index:"04",title:"Finish",children:[S.jsx("div",{className:"finish-tabs",children:NP.map(L=>S.jsx("button",{type:"button",className:t.finish===L?"active":"",onClick:()=>e({type:"set",key:"finish",value:L}),children:co[L].label},L))}),t.finish==="powder"&&S.jsxs(S.Fragment,{children:[S.jsxs("p",{className:"ral-selected",children:[zt[t.color].label," – ",zt[t.color].name]}),S.jsx("div",{className:"color-swatches",children:nR.map(L=>S.jsxs("button",{className:`color-chip ${t.color===L?"active":""}`,type:"button",title:`${zt[L].label} – ${zt[L].name}`,onClick:()=>e({type:"set",key:"color",value:L}),children:[S.jsx("span",{style:{background:zt[L].hex}}),S.jsx("small",{children:zt[L].label.replace("RAL ","")})]},L))}),S.jsx("button",{className:"link-btn",type:"button",onClick:()=>h(!0),children:"View All RAL Colors"})]})]}),S.jsxs(Yo,{index:"05",title:"Edge & fabrication",children:[S.jsx("button",{type:"button",className:`fab-row${H==="form"?" open":""}`,onClick:()=>q(H==="form"?"":"form"),children:"Panel form"}),H==="form"&&S.jsxs(S.Fragment,{children:[S.jsx("div",{className:"choice-grid",children:Object.entries(Zs).map(([L,ue])=>S.jsx("button",{type:"button",className:`choice-card${t.panelForm===L?" active":""}`,onClick:()=>e({type:"set",key:"panelForm",value:L}),children:ue.label},L))}),t.panelForm!=="flat"&&S.jsxs("div",{className:"dimension-grid tight-top",children:[S.jsx(En,{label:"Flange depth",units:t.units,value:t.flangeDepth,min:8,max:150,step:1,onChange:L=>e({type:"set",key:"flangeDepth",value:L})}),S.jsx(En,{label:"Bend angle",suffix:"°",value:t.bendAngle,min:30,max:120,step:1,onChange:L=>e({type:"set",key:"bendAngle",value:L})}),S.jsx(En,{label:"Bend radius",units:t.units,value:t.bendRadius,min:.5,max:20,step:.5,digits:1,onChange:L=>e({type:"set",key:"bendRadius",value:L})})]})]}),S.jsx("button",{type:"button",className:`fab-row${H==="edge"?" open":""}`,onClick:()=>q(H==="edge"?"":"edge"),children:"Corners"}),H==="edge"&&S.jsxs(S.Fragment,{children:[S.jsx("p",{className:"fab-label",children:"Corner treatment"}),S.jsx("div",{className:"choice-grid three",children:Object.entries(Ga).map(([L,ue])=>S.jsx("button",{type:"button",className:`choice-card${t.corner===L?" active":""}`,onClick:()=>e({type:"set",key:"corner",value:L}),children:ue.label},L))}),t.corner!=="square"&&S.jsx("div",{className:"dimension-grid tight-top",children:S.jsx(En,{label:t.corner==="radius"?"Corner radius":"Chamfer size",units:t.units,value:t.cornerRadius,min:1,max:150,step:1,onChange:L=>e({type:"set",key:"cornerRadius",value:L})})}),t.corner!=="square"&&S.jsxs("p",{className:"fab-note",children:["Outer blank corners are ",t.corner==="radius"?`rounded at R${Ks(t)} mm`:`chamfered ${Ks(t)} mm`," on the 3D sheet and fabrication drawing."]})]}),S.jsx("button",{type:"button",className:`fab-row${H==="quality"?" open":""}`,onClick:()=>q(H==="quality"?"":"quality"),children:"Deburr, tolerance & flatness"}),H==="quality"&&S.jsxs(S.Fragment,{children:[S.jsx("p",{className:"fab-label",children:"Deburring"}),S.jsx("div",{className:"choice-grid three",children:[["none","None"],["standard","Standard"],["fine","Fine"]].map(([L,ue])=>S.jsx("button",{type:"button",className:`choice-card${t.deburr===L?" active":""}`,onClick:()=>e({type:"set",key:"deburr",value:L}),children:ue},L))}),S.jsx("p",{className:"fab-label",children:"Tolerance"}),S.jsx("div",{className:"choice-grid three",children:[["iso-c","ISO coarse"],["iso-m","ISO medium"],["iso-f","ISO fine"]].map(([L,ue])=>S.jsx("button",{type:"button",className:`choice-card${t.tolerance===L?" active":""}`,onClick:()=>e({type:"set",key:"tolerance",value:L}),children:ue},L))}),S.jsx("p",{className:"fab-label",children:"Flatness"}),S.jsx("div",{className:"choice-grid three",children:[["standard","Standard"],["precision","Precision"]].map(([L,ue])=>S.jsx("button",{type:"button",className:`choice-card${t.flatness===L?" active":""}`,onClick:()=>e({type:"set",key:"flatness",value:L}),children:ue},L))})]}),S.jsx("button",{type:"button",className:`fab-row${H==="rules"?" open":""}${Ee.length?" has-issues":""}`,onClick:()=>q(H==="rules"?"":"rules"),children:"Punching rules & validation"}),H==="rules"&&S.jsxs(S.Fragment,{children:[S.jsxs("p",{className:"fab-note",children:["Opening ≥ ",me.minHoleSize," mm. Ligament ≥ ",me.ligament," mm. Edge ≥ ",me.minBorder," mm.",(($=Ce[t.pattern])==null?void 0:$.kind)==="slot"||((_e=Ce[t.pattern])==null?void 0:_e.kind)==="bridge"?` Minimum centers: ${me.minPitchX} × ${me.minRowPitch} mm.`:"",(Re=Ce[t.pattern])!=null&&Re.conical?` Perfocon pitch is governed by the ${t.coneAngle}° exit Ø ${kn(t).exit} mm.`:""," Entered values are preserved so conflicts are visible."]}),Ee.length===0&&S.jsx("p",{className:"fab-ok",children:"Configuration is within standard punching rules."}),Ee.length>0&&S.jsx("ul",{className:"issue-list",children:Ee.map(L=>S.jsx("li",{className:`issue-${L.level}`,children:L.text},L.text))}),Ee.length>0&&S.jsx("button",{className:"btn btn-primary reset-btn",type:"button",onClick:yr,children:"Apply recommended fixes"}),S.jsx("button",{className:"btn btn-outline reset-btn",type:"button",onClick:()=>e({type:"reset"}),children:"Reset configuration"})]})]}),S.jsx("button",{className:"btn btn-primary reset-btn",type:"button",onClick:()=>U("review"),children:"Review & quote →"})]})})]}),S.jsxs("div",{className:"metric-strip",children:[S.jsx(ws,{label:"Open area",value:`${ze.toFixed(1)}%`}),S.jsx(ws,{label:"Est. mass",value:`${Y.toFixed(1)} kg`}),S.jsx(ws,{label:GP(t.pattern),value:ae.toLocaleString()}),S.jsx(ws,{label:"Thickness",value:ne(t.thickness,K==="in"?3:1)}),S.jsx(ws,{label:"Indicative price",value:fe,accent:!0}),S.jsx(ws,{label:"Lead time",value:oe})]}),S.jsxs("footer",{className:"steel-foot",children:[S.jsx("div",{className:"foot-exports",children:S.jsx("button",{className:"btn btn-primary pdf-card",type:"button",onClick:$e,children:"Technical PDF"})}),S.jsxs("div",{className:"foot-summary",children:[S.jsx("span",{children:"Configuration summary"}),S.jsx("strong",{children:F}),S.jsxs("small",{children:[Bn[t.material].short," · ",Ce[t.pattern].short," ",t.holeSize,"/",t.pitch,((Ne=Ce[t.pattern])==null?void 0:Ne.kind)==="slot"||((Ie=Ce[t.pattern])==null?void 0:Ie.kind)==="bridge"?`×${t.rowPitch}`:"",(Be=Ce[t.pattern])!=null&&Be.conical?` · ${t.coneAngle}°`:""," · ",Zs[t.panelForm].label," · qty ",t.quantity]}),S.jsxs("small",{children:[ne(t.width)," × ",ne(t.height)," × ",ne(t.thickness,K==="in"?3:1)]})]})]}),S.jsxs("div",{ref:Se,className:`ar-overlay${V?" is-active":""}`,children:[ee&&S.jsx("p",{className:"ar-banner",children:ee}),S.jsx("button",{className:"btn btn-dark",type:"button",onClick:()=>{var L;return(L=te.current)==null?void 0:L.exitAR()},children:"Exit AR"})]}),o&&S.jsxs(nc,{title:"Request quotation",onClose:()=>a(!1),children:[S.jsxs("div",{className:"quote-spec",children:[S.jsx("strong",{children:F}),S.jsxs("span",{children:[ne(t.width)," × ",ne(t.height)," × ",ne(t.thickness,K==="in"?3:1)," · qty ",t.quantity," · ",ze.toFixed(1),"% open area"]})]}),Ee.length>0&&S.jsx("ul",{className:"issue-list",children:Ee.map(L=>S.jsx("li",{className:`issue-${L.level}`,children:L.text},L.text))}),S.jsxs("form",{onSubmit:O,children:[S.jsxs("div",{className:"form-grid",children:[S.jsx(Zo,{name:"name",label:"Name",required:!0}),S.jsx(Zo,{name:"company",label:"Company",required:!0}),S.jsx(Zo,{name:"email",label:"Email",type:"email",required:!0}),S.jsx(Zo,{name:"phone",label:"Phone",type:"tel"}),S.jsx(Zo,{name:"quantity",label:"Quantity",type:"number",defaultValue:String(t.quantity)}),S.jsxs("div",{className:"full",children:[S.jsx("label",{className:"label",children:"Project / fabrication notes"}),S.jsx("textarea",{className:"textarea",name:"notes",rows:4,placeholder:"Quantity, tolerances, edge treatment, delivery location..."})]})]}),S.jsxs("div",{className:"modal-actions",children:[S.jsx("button",{type:"button",className:"btn",onClick:()=>a(!1),children:"Cancel"}),S.jsx("button",{className:"btn btn-primary",type:"submit",disabled:T.length>0,children:"Send RFQ"})]})]})]}),l&&S.jsxs(nc,{title:"Saved configurations",onClose:()=>c(!1),children:[se.length===0&&S.jsx("p",{className:"muted",children:"No saved configurations yet."}),se.map(L=>S.jsxs("div",{className:"saved-row",children:[S.jsxs("div",{children:[S.jsx("strong",{children:L.name}),S.jsx("small",{children:L.id})]}),S.jsx("button",{className:"btn",type:"button",onClick:()=>{e({type:"load",config:L.config}),c(!1),we("Configuration loaded")},children:"Load"})]},L.id))]}),u&&S.jsx(nc,{title:"RAL colors",onClose:()=>h(!1),children:S.jsx("div",{className:"ral-grid",children:hy.map(L=>S.jsxs("button",{type:"button",className:`ral-option${t.color===L?" active":""}`,onClick:()=>{e({type:"set",key:"color",value:L}),h(!1)},children:[S.jsx("span",{style:{background:zt[L].hex}}),S.jsx("strong",{children:zt[L].label}),S.jsx("small",{children:zt[L].name})]},L))})}),d&&S.jsxs(nc,{title:"View in AR",onClose:()=>p(""),children:[S.jsx("p",{className:"muted",children:d}),S.jsx("div",{className:"modal-actions",children:S.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>p(""),children:"OK"})})]}),r&&S.jsx("div",{className:"toast",children:r})]})}function Yo({index:t,title:e,children:n}){return S.jsxs("section",{className:"panel-section",children:[S.jsxs("div",{className:"section-title",children:[S.jsx("span",{children:t}),S.jsx("h2",{children:e})]}),n]})}function HP(t){var n;const e=(n=Ce[t])==null?void 0:n.kind;return e==="square"?"Opening size":e==="hex"?"Hex size · point-to-point":e==="trieur"?"Cup diameter":e==="embossed"?"Diamond size":e==="perfocon"?"Entrance diameter":e==="bridge"?"Slot width":"Hole size"}function VP(t){var n;const e=(n=Ce[t])==null?void 0:n.kind;return e==="decorative"?"Motif pitch":e==="slot"||e==="bridge"?"Column pitch":"Pitch / centers"}function GP(t){var n;return((n=Ce[t])==null?void 0:n.kind)==="trieur"?"Cup count":"Hole count"}function ws({label:t,value:e,accent:n}){return S.jsxs("div",{className:`metric-item${n?" accent":""}`,children:[S.jsx("span",{children:t}),S.jsx("strong",{children:e})]})}function En({label:t,suffix:e,value:n,min:i,max:r,step:s,onChange:o,units:a,digits:l,invalid:c}){const u=a==="in",h=e||(u?"in":a?"mm":""),d=l??(u?3:s<1?1:0),p=a?gc(n,a,d):n,m=a?gc(i,a,d):i,v=a?gc(r,a,d):r,g=a&&u?Number((s/Tp).toFixed(4)):s,[f,x]=Te.useState(null),_=f===null?p:f;return S.jsxs("label",{className:`number-control${c?" invalid":""}`,children:[S.jsx("span",{children:t}),S.jsxs("div",{children:[S.jsx("input",{type:"number",inputMode:"decimal",enterKeyHint:"done",value:_,min:m,max:v,step:g,onWheel:y=>y.currentTarget.blur(),onFocus:()=>x(p),onBlur:()=>{if(f!==null&&f!==""){const y=Number(f);Number.isFinite(y)&&o(a?I0(y,a):y)}x(null)},onChange:y=>{const C=y.target.value;if(x(C),C==="")return;const E=Number(C);Number.isFinite(E)&&o(a?I0(E,a):E)}}),h&&S.jsx("small",{children:h})]})]})}function nc({title:t,onClose:e,children:n}){return S.jsx("div",{className:"modal-backdrop",children:S.jsxs("div",{className:"modal",children:[S.jsxs("div",{className:"modal-head",children:[S.jsx("h2",{children:t}),S.jsx("button",{className:"icon-btn",type:"button",onClick:e,children:"×"})]}),S.jsx("div",{className:"modal-body",children:n})]})})}function Zo({name:t,label:e,type:n="text",required:i,defaultValue:r}){const s=n==="email"?"email":n==="tel"?"tel":n==="number"?"numeric":void 0,o=n==="email"?"email":n==="tel"?"tel":t==="name"?"name":t==="company"?"organization":void 0;return S.jsxs("div",{children:[S.jsx("label",{className:"label",children:e}),S.jsx("input",{className:"text-input",name:t,type:n,inputMode:s,autoComplete:o,required:i,defaultValue:r,min:n==="number"?1:void 0,enterKeyHint:n==="email"||n==="tel"?"next":void 0})]})}function Ko({active:t,title:e,onClick:n,children:i}){return S.jsx("button",{type:"button",className:t?"active":"",title:e,"aria-label":e,onClick:n,children:i})}function pi({d:t,children:e}){return S.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.8","aria-hidden":"true",children:e||S.jsx("path",{d:t})})}function WP(){return S.jsx(pi,{d:"M5 5h11l3 3v11H5V5zm3 0v5h8V5M8 19v-6h8v6"})}function $P(){return S.jsx(pi,{d:"M16 5h4v4M20 5l-9 9M9 5H5v14h14v-4"})}function jP(){return S.jsx(pi,{d:"M12 5a7 7 0 1 0 6.3 4M12 5l2.5 2.5M12 5 9.5 7.5"})}function XP(){return S.jsx(pi,{d:"M10.5 17a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13zM15 15l5 5"})}function qP(){return S.jsx(pi,{d:"M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"})}function YP(){return S.jsx(pi,{d:"M12 4v16M4 12h16M8 8l-4 4 4 4M16 8l4 4-4 4"})}function ZP(){return S.jsx(pi,{d:"M4 12a8 8 0 1 0 2.2-5.6M4 4v5h5"})}function KP(){return S.jsx(pi,{d:"M8 11V8a4 4 0 1 1 8 0v3M6 11h12v9H6v-9z"})}function JP(){return S.jsx(pi,{d:"M8 11V8a4 4 0 0 1 7.5-2M6 11h12v9H6v-9z"})}function QP(){return S.jsx(pi,{d:"M8 8h11v13H8V8zm-3 3V3h11"})}class eL extends sv.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}render(){return this.state.error?S.jsx("main",{className:"steel-app",children:S.jsxs("p",{className:"viewer-error",children:["The configurator hit an error: ",String(this.state.error.message||this.state.error)]})}):this.props.children}}lx(document.getElementById("root")).render(S.jsx(sv.StrictMode,{children:S.jsx(eL,{children:S.jsx(BP,{})})}));
