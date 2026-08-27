(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function wy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var j0={exports:{}},Yc={},$0={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ga=Symbol.for("react.element"),Ey=Symbol.for("react.portal"),Ty=Symbol.for("react.fragment"),Ay=Symbol.for("react.strict_mode"),by=Symbol.for("react.profiler"),Cy=Symbol.for("react.provider"),Ry=Symbol.for("react.context"),Py=Symbol.for("react.forward_ref"),Ly=Symbol.for("react.suspense"),Ny=Symbol.for("react.memo"),Dy=Symbol.for("react.lazy"),bp=Symbol.iterator;function Iy(t){return t===null||typeof t!="object"?null:(t=bp&&t[bp]||t["@@iterator"],typeof t=="function"?t:null)}var X0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q0=Object.assign,Y0={};function ao(t,e,n){this.props=t,this.context=e,this.refs=Y0,this.updater=n||X0}ao.prototype.isReactComponent={};ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Z0(){}Z0.prototype=ao.prototype;function rd(t,e,n){this.props=t,this.context=e,this.refs=Y0,this.updater=n||X0}var sd=rd.prototype=new Z0;sd.constructor=rd;q0(sd,ao.prototype);sd.isPureReactComponent=!0;var Cp=Array.isArray,K0=Object.prototype.hasOwnProperty,od={current:null},J0={key:!0,ref:!0,__self:!0,__source:!0};function Q0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)K0.call(e,i)&&!J0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ga,type:t,key:s,ref:o,props:r,_owner:od.current}}function Uy(t,e){return{$$typeof:Ga,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ga}function Fy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rp=/\/+/g;function Eu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Fy(""+t.key):e.toString(36)}function Ql(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ga:case Ey:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Eu(o,0):i,Cp(r)?(n="",t!=null&&(n=t.replace(Rp,"$&/")+"/"),Ql(r,e,n,"",function(c){return c})):r!=null&&(ad(r)&&(r=Uy(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Rp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Cp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Eu(s,a);o+=Ql(s,e,n,l,r)}else if(l=Iy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Eu(s,a++),o+=Ql(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qa(t,e,n){if(t==null)return t;var i=[],r=0;return Ql(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Oy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var cn={current:null},ec={transition:null},ky={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:ec,ReactCurrentOwner:od};function ev(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:Qa,forEach:function(t,e,n){Qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qa(t,function(){e++}),e},toArray:function(t){return Qa(t,function(e){return e})||[]},only:function(t){if(!ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ze.Component=ao;Ze.Fragment=Ty;Ze.Profiler=by;Ze.PureComponent=rd;Ze.StrictMode=Ay;Ze.Suspense=Ly;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ky;Ze.act=ev;Ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=q0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=od.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)K0.call(e,l)&&!J0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ga,type:t.type,key:r,ref:s,props:i,_owner:o}};Ze.createContext=function(t){return t={$$typeof:Ry,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Cy,_context:t},t.Consumer=t};Ze.createElement=Q0;Ze.createFactory=function(t){var e=Q0.bind(null,t);return e.type=t,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(t){return{$$typeof:Py,render:t}};Ze.isValidElement=ad;Ze.lazy=function(t){return{$$typeof:Dy,_payload:{_status:-1,_result:t},_init:Oy}};Ze.memo=function(t,e){return{$$typeof:Ny,type:t,compare:e===void 0?null:e}};Ze.startTransition=function(t){var e=ec.transition;ec.transition={};try{t()}finally{ec.transition=e}};Ze.unstable_act=ev;Ze.useCallback=function(t,e){return cn.current.useCallback(t,e)};Ze.useContext=function(t){return cn.current.useContext(t)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(t){return cn.current.useDeferredValue(t)};Ze.useEffect=function(t,e){return cn.current.useEffect(t,e)};Ze.useId=function(){return cn.current.useId()};Ze.useImperativeHandle=function(t,e,n){return cn.current.useImperativeHandle(t,e,n)};Ze.useInsertionEffect=function(t,e){return cn.current.useInsertionEffect(t,e)};Ze.useLayoutEffect=function(t,e){return cn.current.useLayoutEffect(t,e)};Ze.useMemo=function(t,e){return cn.current.useMemo(t,e)};Ze.useReducer=function(t,e,n){return cn.current.useReducer(t,e,n)};Ze.useRef=function(t){return cn.current.useRef(t)};Ze.useState=function(t){return cn.current.useState(t)};Ze.useSyncExternalStore=function(t,e,n){return cn.current.useSyncExternalStore(t,e,n)};Ze.useTransition=function(){return cn.current.useTransition()};Ze.version="18.3.1";$0.exports=Ze;var Ce=$0.exports;const tv=wy(Ce);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zy=Ce,By=Symbol.for("react.element"),Hy=Symbol.for("react.fragment"),Vy=Object.prototype.hasOwnProperty,Gy=zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wy={key:!0,ref:!0,__self:!0,__source:!0};function nv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Vy.call(e,i)&&!Wy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:By,type:t,key:s,ref:o,props:r,_owner:Gy.current}}Yc.Fragment=Hy;Yc.jsx=nv;Yc.jsxs=nv;j0.exports=Yc;var S=j0.exports,iv={exports:{}},Pn={},rv={exports:{}},sv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,j){var q=N.length;N.push(j);e:for(;0<q;){var ne=q-1>>>1,me=N[ne];if(0<r(me,j))N[ne]=j,N[q]=me,q=ne;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var j=N[0],q=N.pop();if(q!==j){N[0]=q;e:for(var ne=0,me=N.length,Pe=me>>>1;ne<Pe;){var W=2*(ne+1)-1,re=N[W],pe=W+1,ce=N[pe];if(0>r(re,q))pe<me&&0>r(ce,re)?(N[ne]=ce,N[pe]=q,ne=pe):(N[ne]=re,N[W]=q,ne=W);else if(pe<me&&0>r(ce,q))N[ne]=ce,N[pe]=q,ne=pe;else break e}}return j}function r(N,j){var q=N.sortIndex-j.sortIndex;return q!==0?q:N.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,f=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=N)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function y(N){if(_=!1,v(N),!g)if(n(l)!==null)g=!0,Z(C);else{var j=n(c);j!==null&&Q(y,j.startTime-N)}}function C(N,j){g=!1,_&&(_=!1,d(L),L=-1),p=!0;var q=f;try{for(v(j),h=n(l);h!==null&&(!(h.expirationTime>j)||N&&!U());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,f=h.priorityLevel;var me=ne(h.expirationTime<=j);j=t.unstable_now(),typeof me=="function"?h.callback=me:h===n(l)&&i(l),v(j)}else i(l);h=n(l)}if(h!==null)var Pe=!0;else{var W=n(c);W!==null&&Q(y,W.startTime-j),Pe=!1}return Pe}finally{h=null,f=q,p=!1}}var T=!1,A=null,L=-1,w=5,M=-1;function U(){return!(t.unstable_now()-M<w)}function H(){if(A!==null){var N=t.unstable_now();M=N;var j=!0;try{j=A(!0,N)}finally{j?D():(T=!1,A=null)}}else T=!1}var D;if(typeof x=="function")D=function(){x(H)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,$=B.port2;B.port1.onmessage=H,D=function(){$.postMessage(null)}}else D=function(){m(H,0)};function Z(N){A=N,T||(T=!0,D())}function Q(N,j){L=m(function(){N(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,Z(C))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var q=f;f=j;try{return N()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,j){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var q=f;f=N;try{return j()}finally{f=q}},t.unstable_scheduleCallback=function(N,j,q){var ne=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ne+q:ne):q=ne,N){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=q+me,N={id:u++,callback:j,priorityLevel:N,startTime:q,expirationTime:me,sortIndex:-1},q>ne?(N.sortIndex=q,e(c,N),n(l)===null&&N===n(c)&&(_?(d(L),L=-1):_=!0,Q(y,q-ne))):(N.sortIndex=me,e(l,N),g||p||(g=!0,Z(C))),N},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(N){var j=f;return function(){var q=f;f=j;try{return N.apply(this,arguments)}finally{f=q}}}})(sv);rv.exports=sv;var jy=rv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $y=Ce,Rn=jy;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ov=new Set,xa={};function jr(t,e){Ys(t,e),Ys(t+"Capture",e)}function Ys(t,e){for(xa[t]=e,t=0;t<e.length;t++)ov.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$h=Object.prototype.hasOwnProperty,Xy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pp={},Lp={};function qy(t){return $h.call(Lp,t)?!0:$h.call(Pp,t)?!1:Xy.test(t)?Lp[t]=!0:(Pp[t]=!0,!1)}function Yy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Zy(t,e,n,i){if(e===null||typeof e>"u"||Yy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new un(t,5,!1,t.toLowerCase(),null,!1,!1)});var ld=/[\-:]([a-z])/g;function cd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ld,cd);$t[e]=new un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ld,cd);$t[e]=new un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ld,cd);$t[e]=new un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new un(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new un(t,1,!1,t.toLowerCase(),null,!0,!0)});function ud(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Zy(e,n,r,i)&&(n=null),i||r===null?qy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=$y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,el=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),ws=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),Xh=Symbol.for("react.profiler"),av=Symbol.for("react.provider"),lv=Symbol.for("react.context"),fd=Symbol.for("react.forward_ref"),qh=Symbol.for("react.suspense"),Yh=Symbol.for("react.suspense_list"),dd=Symbol.for("react.memo"),ji=Symbol.for("react.lazy"),cv=Symbol.for("react.offscreen"),Np=Symbol.iterator;function wo(t){return t===null||typeof t!="object"?null:(t=Np&&t[Np]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,Tu;function Ko(t){if(Tu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tu=e&&e[1]||""}return`
`+Tu+t}var Au=!1;function bu(t,e){if(!t||Au)return"";Au=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Au=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ko(t):""}function Ky(t){switch(t.tag){case 5:return Ko(t.type);case 16:return Ko("Lazy");case 13:return Ko("Suspense");case 19:return Ko("SuspenseList");case 0:case 2:case 15:return t=bu(t.type,!1),t;case 11:return t=bu(t.type.render,!1),t;case 1:return t=bu(t.type,!0),t;default:return""}}function Zh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ws:return"Fragment";case Ms:return"Portal";case Xh:return"Profiler";case hd:return"StrictMode";case qh:return"Suspense";case Yh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case lv:return(t.displayName||"Context")+".Consumer";case av:return(t._context.displayName||"Context")+".Provider";case fd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dd:return e=t.displayName||null,e!==null?e:Zh(t.type)||"Memo";case ji:e=t._payload,t=t._init;try{return Zh(t(e))}catch{}}return null}function Jy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zh(e);case 8:return e===hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function uv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qy(t){var e=uv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function tl(t){t._valueTracker||(t._valueTracker=Qy(t))}function hv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=uv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function dc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kh(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fv(t,e){e=e.checked,e!=null&&ud(t,"checked",e,!1)}function Jh(t,e){fv(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qh(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ip(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qh(t,e,n){(e!=="number"||dc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Jo=Array.isArray;function Fs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ef(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(Jo(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function dv(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Fp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function pv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?pv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var nl,mv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(nl=nl||document.createElement("div"),nl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=nl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eS=["Webkit","ms","Moz","O"];Object.keys(ia).forEach(function(t){eS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ia[e]=ia[t]})});function gv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ia.hasOwnProperty(t)&&ia[t]?(""+e).trim():e+"px"}function vv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=gv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var tS=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nf(t,e){if(e){if(tS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function rf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sf=null;function pd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var of=null,Os=null,ks=null;function Op(t){if(t=$a(t)){if(typeof of!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=eu(e),of(t.stateNode,t.type,e))}}function _v(t){Os?ks?ks.push(t):ks=[t]:Os=t}function xv(){if(Os){var t=Os,e=ks;if(ks=Os=null,Op(t),e)for(t=0;t<e.length;t++)Op(e[t])}}function yv(t,e){return t(e)}function Sv(){}var Cu=!1;function Mv(t,e,n){if(Cu)return t(e,n);Cu=!0;try{return yv(t,e,n)}finally{Cu=!1,(Os!==null||ks!==null)&&(Sv(),xv())}}function Sa(t,e){var n=t.stateNode;if(n===null)return null;var i=eu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var af=!1;if(Ci)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){af=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{af=!1}function nS(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ra=!1,pc=null,mc=!1,lf=null,iS={onError:function(t){ra=!0,pc=t}};function rS(t,e,n,i,r,s,o,a,l){ra=!1,pc=null,nS.apply(iS,arguments)}function sS(t,e,n,i,r,s,o,a,l){if(rS.apply(this,arguments),ra){if(ra){var c=pc;ra=!1,pc=null}else throw Error(ue(198));mc||(mc=!0,lf=c)}}function $r(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function kp(t){if($r(t)!==t)throw Error(ue(188))}function oS(t){var e=t.alternate;if(!e){if(e=$r(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return kp(r),t;if(s===i)return kp(r),e;s=s.sibling}throw Error(ue(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ue(189))}}if(n.alternate!==i)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function Ev(t){return t=oS(t),t!==null?Tv(t):null}function Tv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Tv(t);if(e!==null)return e;t=t.sibling}return null}var Av=Rn.unstable_scheduleCallback,zp=Rn.unstable_cancelCallback,aS=Rn.unstable_shouldYield,lS=Rn.unstable_requestPaint,Tt=Rn.unstable_now,cS=Rn.unstable_getCurrentPriorityLevel,md=Rn.unstable_ImmediatePriority,bv=Rn.unstable_UserBlockingPriority,gc=Rn.unstable_NormalPriority,uS=Rn.unstable_LowPriority,Cv=Rn.unstable_IdlePriority,Zc=null,si=null;function hS(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(Zc,t,void 0,(t.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:pS,fS=Math.log,dS=Math.LN2;function pS(t){return t>>>=0,t===0?32:31-(fS(t)/dS|0)|0}var il=64,rl=4194304;function Qo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Qo(a):(s&=o,s!==0&&(i=Qo(s)))}else o=n&~r,o!==0?i=Qo(o):s!==0&&(i=Qo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Zn(e),r=1<<n,i|=t[n],e&=~r;return i}function mS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Zn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=mS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function cf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rv(){var t=il;return il<<=1,!(il&4194240)&&(il=64),t}function Ru(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zn(e),t[e]=n}function vS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function gd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function Pv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Lv,vd,Nv,Dv,Iv,uf=!1,sl=[],Ki=null,Ji=null,Qi=null,Ma=new Map,wa=new Map,Xi=[],_S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bp(t,e){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":Ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(e.pointerId)}}function To(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=$a(e),e!==null&&vd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function xS(t,e,n,i,r){switch(e){case"focusin":return Ki=To(Ki,t,e,n,i,r),!0;case"dragenter":return Ji=To(Ji,t,e,n,i,r),!0;case"mouseover":return Qi=To(Qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ma.set(s,To(Ma.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,wa.set(s,To(wa.get(s)||null,t,e,n,i,r)),!0}return!1}function Uv(t){var e=Lr(t.target);if(e!==null){var n=$r(e);if(n!==null){if(e=n.tag,e===13){if(e=wv(n),e!==null){t.blockedOn=e,Iv(t.priority,function(){Nv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);sf=i,n.target.dispatchEvent(i),sf=null}else return e=$a(n),e!==null&&vd(e),t.blockedOn=n,!1;e.shift()}return!0}function Hp(t,e,n){tc(t)&&n.delete(e)}function yS(){uf=!1,Ki!==null&&tc(Ki)&&(Ki=null),Ji!==null&&tc(Ji)&&(Ji=null),Qi!==null&&tc(Qi)&&(Qi=null),Ma.forEach(Hp),wa.forEach(Hp)}function Ao(t,e){t.blockedOn===e&&(t.blockedOn=null,uf||(uf=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,yS)))}function Ea(t){function e(r){return Ao(r,t)}if(0<sl.length){Ao(sl[0],t);for(var n=1;n<sl.length;n++){var i=sl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ki!==null&&Ao(Ki,t),Ji!==null&&Ao(Ji,t),Qi!==null&&Ao(Qi,t),Ma.forEach(e),wa.forEach(e),n=0;n<Xi.length;n++)i=Xi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Xi.length&&(n=Xi[0],n.blockedOn===null);)Uv(n),n.blockedOn===null&&Xi.shift()}var zs=Ui.ReactCurrentBatchConfig,_c=!0;function SS(t,e,n,i){var r=it,s=zs.transition;zs.transition=null;try{it=1,_d(t,e,n,i)}finally{it=r,zs.transition=s}}function MS(t,e,n,i){var r=it,s=zs.transition;zs.transition=null;try{it=4,_d(t,e,n,i)}finally{it=r,zs.transition=s}}function _d(t,e,n,i){if(_c){var r=hf(t,e,n,i);if(r===null)zu(t,e,i,xc,n),Bp(t,i);else if(xS(r,t,e,n,i))i.stopPropagation();else if(Bp(t,i),e&4&&-1<_S.indexOf(t)){for(;r!==null;){var s=$a(r);if(s!==null&&Lv(s),s=hf(t,e,n,i),s===null&&zu(t,e,i,xc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else zu(t,e,i,null,n)}}var xc=null;function hf(t,e,n,i){if(xc=null,t=pd(i),t=Lr(t),t!==null)if(e=$r(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xc=t,null}function Fv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cS()){case md:return 1;case bv:return 4;case gc:case uS:return 16;case Cv:return 536870912;default:return 16}default:return 16}}var Yi=null,xd=null,nc=null;function Ov(){if(nc)return nc;var t,e=xd,n=e.length,i,r="value"in Yi?Yi.value:Yi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return nc=r.slice(t,1<i?1-i:void 0)}function ic(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ol(){return!0}function Vp(){return!1}function Ln(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ol:Vp,this.isPropagationStopped=Vp,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),e}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yd=Ln(lo),ja=Mt({},lo,{view:0,detail:0}),wS=Ln(ja),Pu,Lu,bo,Kc=Mt({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bo&&(bo&&t.type==="mousemove"?(Pu=t.screenX-bo.screenX,Lu=t.screenY-bo.screenY):Lu=Pu=0,bo=t),Pu)},movementY:function(t){return"movementY"in t?t.movementY:Lu}}),Gp=Ln(Kc),ES=Mt({},Kc,{dataTransfer:0}),TS=Ln(ES),AS=Mt({},ja,{relatedTarget:0}),Nu=Ln(AS),bS=Mt({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),CS=Ln(bS),RS=Mt({},lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),PS=Ln(RS),LS=Mt({},lo,{data:0}),Wp=Ln(LS),NS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},DS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function US(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=IS[t])?!!e[t]:!1}function Sd(){return US}var FS=Mt({},ja,{key:function(t){if(t.key){var e=NS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ic(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?DS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sd,charCode:function(t){return t.type==="keypress"?ic(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ic(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OS=Ln(FS),kS=Mt({},Kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jp=Ln(kS),zS=Mt({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sd}),BS=Ln(zS),HS=Mt({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),VS=Ln(HS),GS=Mt({},Kc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),WS=Ln(GS),jS=[9,13,27,32],Md=Ci&&"CompositionEvent"in window,sa=null;Ci&&"documentMode"in document&&(sa=document.documentMode);var $S=Ci&&"TextEvent"in window&&!sa,kv=Ci&&(!Md||sa&&8<sa&&11>=sa),$p=" ",Xp=!1;function zv(t,e){switch(t){case"keyup":return jS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function XS(t,e){switch(t){case"compositionend":return Bv(e);case"keypress":return e.which!==32?null:(Xp=!0,$p);case"textInput":return t=e.data,t===$p&&Xp?null:t;default:return null}}function qS(t,e){if(Es)return t==="compositionend"||!Md&&zv(t,e)?(t=Ov(),nc=xd=Yi=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return kv&&e.locale!=="ko"?null:e.data;default:return null}}var YS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!YS[t.type]:e==="textarea"}function Hv(t,e,n,i){_v(i),e=yc(e,"onChange"),0<e.length&&(n=new yd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var oa=null,Ta=null;function ZS(t){Jv(t,0)}function Jc(t){var e=bs(t);if(hv(e))return t}function KS(t,e){if(t==="change")return e}var Vv=!1;if(Ci){var Du;if(Ci){var Iu="oninput"in document;if(!Iu){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),Iu=typeof Yp.oninput=="function"}Du=Iu}else Du=!1;Vv=Du&&(!document.documentMode||9<document.documentMode)}function Zp(){oa&&(oa.detachEvent("onpropertychange",Gv),Ta=oa=null)}function Gv(t){if(t.propertyName==="value"&&Jc(Ta)){var e=[];Hv(e,Ta,t,pd(t)),Mv(ZS,e)}}function JS(t,e,n){t==="focusin"?(Zp(),oa=e,Ta=n,oa.attachEvent("onpropertychange",Gv)):t==="focusout"&&Zp()}function QS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jc(Ta)}function eM(t,e){if(t==="click")return Jc(e)}function tM(t,e){if(t==="input"||t==="change")return Jc(e)}function nM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:nM;function Aa(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!$h.call(e,r)||!Qn(t[r],e[r]))return!1}return!0}function Kp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jp(t,e){var n=Kp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kp(n)}}function Wv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Wv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function jv(){for(var t=window,e=dc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dc(t.document)}return e}function wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function iM(t){var e=jv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Wv(n.ownerDocument.documentElement,n)){if(i!==null&&wd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Jp(n,s);var o=Jp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rM=Ci&&"documentMode"in document&&11>=document.documentMode,Ts=null,ff=null,aa=null,df=!1;function Qp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;df||Ts==null||Ts!==dc(i)||(i=Ts,"selectionStart"in i&&wd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),aa&&Aa(aa,i)||(aa=i,i=yc(ff,"onSelect"),0<i.length&&(e=new yd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ts)))}function al(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var As={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},Uu={},$v={};Ci&&($v=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function Qc(t){if(Uu[t])return Uu[t];if(!As[t])return t;var e=As[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $v)return Uu[t]=e[n];return t}var Xv=Qc("animationend"),qv=Qc("animationiteration"),Yv=Qc("animationstart"),Zv=Qc("transitionend"),Kv=new Map,em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){Kv.set(t,e),jr(e,[t])}for(var Fu=0;Fu<em.length;Fu++){var Ou=em[Fu],sM=Ou.toLowerCase(),oM=Ou[0].toUpperCase()+Ou.slice(1);ur(sM,"on"+oM)}ur(Xv,"onAnimationEnd");ur(qv,"onAnimationIteration");ur(Yv,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(Zv,"onTransitionEnd");Ys("onMouseEnter",["mouseout","mouseover"]);Ys("onMouseLeave",["mouseout","mouseover"]);Ys("onPointerEnter",["pointerout","pointerover"]);Ys("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aM=new Set("cancel close invalid load scroll toggle".split(" ").concat(ea));function tm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,sS(i,e,void 0,t),t.currentTarget=null}function Jv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;tm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;tm(r,a,c),s=l}}}if(mc)throw t=lf,mc=!1,lf=null,t}function ut(t,e){var n=e[_f];n===void 0&&(n=e[_f]=new Set);var i=t+"__bubble";n.has(i)||(Qv(e,t,2,!1),n.add(i))}function ku(t,e,n){var i=0;e&&(i|=4),Qv(n,t,i,e)}var ll="_reactListening"+Math.random().toString(36).slice(2);function ba(t){if(!t[ll]){t[ll]=!0,ov.forEach(function(n){n!=="selectionchange"&&(aM.has(n)||ku(n,!1,t),ku(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ll]||(e[ll]=!0,ku("selectionchange",!1,e))}}function Qv(t,e,n,i){switch(Fv(e)){case 1:var r=SS;break;case 4:r=MS;break;default:r=_d}n=r.bind(null,e,n,t),r=void 0,!af||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function zu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Lr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Mv(function(){var c=s,u=pd(n),h=[];e:{var f=Kv.get(t);if(f!==void 0){var p=yd,g=t;switch(t){case"keypress":if(ic(n)===0)break e;case"keydown":case"keyup":p=OS;break;case"focusin":g="focus",p=Nu;break;case"focusout":g="blur",p=Nu;break;case"beforeblur":case"afterblur":p=Nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=TS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=BS;break;case Xv:case qv:case Yv:p=CS;break;case Zv:p=VS;break;case"scroll":p=wS;break;case"wheel":p=WS;break;case"copy":case"cut":case"paste":p=PS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=jp}var _=(e&4)!==0,m=!_&&t==="scroll",d=_?f!==null?f+"Capture":null:f;_=[];for(var x=c,v;x!==null;){v=x;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,d!==null&&(y=Sa(x,d),y!=null&&_.push(Ca(x,y,v)))),m)break;x=x.return}0<_.length&&(f=new p(f,g,null,n,u),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==sf&&(g=n.relatedTarget||n.fromElement)&&(Lr(g)||g[Ri]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Lr(g):null,g!==null&&(m=$r(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(_=Gp,y="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(_=jp,y="onPointerLeave",d="onPointerEnter",x="pointer"),m=p==null?f:bs(p),v=g==null?f:bs(g),f=new _(y,x+"leave",p,n,u),f.target=m,f.relatedTarget=v,y=null,Lr(u)===c&&(_=new _(d,x+"enter",g,n,u),_.target=v,_.relatedTarget=m,y=_),m=y,p&&g)t:{for(_=p,d=g,x=0,v=_;v;v=Kr(v))x++;for(v=0,y=d;y;y=Kr(y))v++;for(;0<x-v;)_=Kr(_),x--;for(;0<v-x;)d=Kr(d),v--;for(;x--;){if(_===d||d!==null&&_===d.alternate)break t;_=Kr(_),d=Kr(d)}_=null}else _=null;p!==null&&nm(h,f,p,_,!1),g!==null&&m!==null&&nm(h,m,g,_,!0)}}e:{if(f=c?bs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=KS;else if(qp(f))if(Vv)C=tM;else{C=QS;var T=JS}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=eM);if(C&&(C=C(t,c))){Hv(h,C,n,u);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Qh(f,"number",f.value)}switch(T=c?bs(c):window,t){case"focusin":(qp(T)||T.contentEditable==="true")&&(Ts=T,ff=c,aa=null);break;case"focusout":aa=ff=Ts=null;break;case"mousedown":df=!0;break;case"contextmenu":case"mouseup":case"dragend":df=!1,Qp(h,n,u);break;case"selectionchange":if(rM)break;case"keydown":case"keyup":Qp(h,n,u)}var A;if(Md)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Es?zv(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(kv&&n.locale!=="ko"&&(Es||L!=="onCompositionStart"?L==="onCompositionEnd"&&Es&&(A=Ov()):(Yi=u,xd="value"in Yi?Yi.value:Yi.textContent,Es=!0)),T=yc(c,L),0<T.length&&(L=new Wp(L,t,null,n,u),h.push({event:L,listeners:T}),A?L.data=A:(A=Bv(n),A!==null&&(L.data=A)))),(A=$S?XS(t,n):qS(t,n))&&(c=yc(c,"onBeforeInput"),0<c.length&&(u=new Wp("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=A))}Jv(h,e)})}function Ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Sa(t,n),s!=null&&i.unshift(Ca(t,s,r)),s=Sa(t,e),s!=null&&i.push(Ca(t,s,r))),t=t.return}return i}function Kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function nm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Sa(n,s),l!=null&&o.unshift(Ca(n,l,a))):r||(l=Sa(n,s),l!=null&&o.push(Ca(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lM=/\r\n?/g,cM=/\u0000|\uFFFD/g;function im(t){return(typeof t=="string"?t:""+t).replace(lM,`
`).replace(cM,"")}function cl(t,e,n){if(e=im(e),im(t)!==e&&n)throw Error(ue(425))}function Sc(){}var pf=null,mf=null;function gf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vf=typeof setTimeout=="function"?setTimeout:void 0,uM=typeof clearTimeout=="function"?clearTimeout:void 0,rm=typeof Promise=="function"?Promise:void 0,hM=typeof queueMicrotask=="function"?queueMicrotask:typeof rm<"u"?function(t){return rm.resolve(null).then(t).catch(fM)}:vf;function fM(t){setTimeout(function(){throw t})}function Bu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ea(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ea(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function sm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var co=Math.random().toString(36).slice(2),ii="__reactFiber$"+co,Ra="__reactProps$"+co,Ri="__reactContainer$"+co,_f="__reactEvents$"+co,dM="__reactListeners$"+co,pM="__reactHandles$"+co;function Lr(t){var e=t[ii];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ri]||n[ii]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=sm(t);t!==null;){if(n=t[ii])return n;t=sm(t)}return e}t=n,n=t.parentNode}return null}function $a(t){return t=t[ii]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function eu(t){return t[Ra]||null}var xf=[],Cs=-1;function hr(t){return{current:t}}function dt(t){0>Cs||(t.current=xf[Cs],xf[Cs]=null,Cs--)}function lt(t,e){Cs++,xf[Cs]=t.current,t.current=e}var lr={},en=hr(lr),gn=hr(!1),Or=lr;function Zs(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function vn(t){return t=t.childContextTypes,t!=null}function Mc(){dt(gn),dt(en)}function om(t,e,n){if(en.current!==lr)throw Error(ue(168));lt(en,e),lt(gn,n)}function e_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,Jy(t)||"Unknown",r));return Mt({},n,i)}function wc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Or=en.current,lt(en,t),lt(gn,gn.current),!0}function am(t,e,n){var i=t.stateNode;if(!i)throw Error(ue(169));n?(t=e_(t,e,Or),i.__reactInternalMemoizedMergedChildContext=t,dt(gn),dt(en),lt(en,t)):dt(gn),lt(gn,n)}var yi=null,tu=!1,Hu=!1;function t_(t){yi===null?yi=[t]:yi.push(t)}function mM(t){tu=!0,t_(t)}function fr(){if(!Hu&&yi!==null){Hu=!0;var t=0,e=it;try{var n=yi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,tu=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),Av(md,fr),r}finally{it=e,Hu=!1}}return null}var Rs=[],Ps=0,Ec=null,Tc=0,In=[],Un=0,kr=null,Si=1,Mi="";function Tr(t,e){Rs[Ps++]=Tc,Rs[Ps++]=Ec,Ec=t,Tc=e}function n_(t,e,n){In[Un++]=Si,In[Un++]=Mi,In[Un++]=kr,kr=t;var i=Si;t=Mi;var r=32-Zn(i)-1;i&=~(1<<r),n+=1;var s=32-Zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Si=1<<32-Zn(e)+r|n<<r|i,Mi=s+t}else Si=1<<s|n<<r|i,Mi=t}function Ed(t){t.return!==null&&(Tr(t,1),n_(t,1,0))}function Td(t){for(;t===Ec;)Ec=Rs[--Ps],Rs[Ps]=null,Tc=Rs[--Ps],Rs[Ps]=null;for(;t===kr;)kr=In[--Un],In[Un]=null,Mi=In[--Un],In[Un]=null,Si=In[--Un],In[Un]=null}var Cn=null,An=null,vt=!1,Xn=null;function i_(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function lm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,An=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=kr!==null?{id:Si,overflow:Mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Cn=t,An=null,!0):!1;default:return!1}}function yf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sf(t){if(vt){var e=An;if(e){var n=e;if(!lm(t,e)){if(yf(t))throw Error(ue(418));e=er(n.nextSibling);var i=Cn;e&&lm(t,e)?i_(i,n):(t.flags=t.flags&-4097|2,vt=!1,Cn=t)}}else{if(yf(t))throw Error(ue(418));t.flags=t.flags&-4097|2,vt=!1,Cn=t}}}function cm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function ul(t){if(t!==Cn)return!1;if(!vt)return cm(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gf(t.type,t.memoizedProps)),e&&(e=An)){if(yf(t))throw r_(),Error(ue(418));for(;e;)i_(t,e),e=er(e.nextSibling)}if(cm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=Cn?er(t.stateNode.nextSibling):null;return!0}function r_(){for(var t=An;t;)t=er(t.nextSibling)}function Ks(){An=Cn=null,vt=!1}function Ad(t){Xn===null?Xn=[t]:Xn.push(t)}var gM=Ui.ReactCurrentBatchConfig;function Co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var i=n.stateNode}if(!i)throw Error(ue(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function hl(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function um(t){var e=t._init;return e(t._payload)}function s_(t){function e(d,x){if(t){var v=d.deletions;v===null?(d.deletions=[x],d.flags|=16):v.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=rr(d,x),d.index=0,d.sibling=null,d}function s(d,x,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<x?(d.flags|=2,x):v):(d.flags|=2,x)):(d.flags|=1048576,x)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,x,v,y){return x===null||x.tag!==6?(x=qu(v,d.mode,y),x.return=d,x):(x=r(x,v),x.return=d,x)}function l(d,x,v,y){var C=v.type;return C===ws?u(d,x,v.props.children,y,v.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ji&&um(C)===x.type)?(y=r(x,v.props),y.ref=Co(d,x,v),y.return=d,y):(y=uc(v.type,v.key,v.props,null,d.mode,y),y.ref=Co(d,x,v),y.return=d,y)}function c(d,x,v,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Yu(v,d.mode,y),x.return=d,x):(x=r(x,v.children||[]),x.return=d,x)}function u(d,x,v,y,C){return x===null||x.tag!==7?(x=Fr(v,d.mode,y,C),x.return=d,x):(x=r(x,v),x.return=d,x)}function h(d,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=qu(""+x,d.mode,v),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case el:return v=uc(x.type,x.key,x.props,null,d.mode,v),v.ref=Co(d,null,x),v.return=d,v;case Ms:return x=Yu(x,d.mode,v),x.return=d,x;case ji:var y=x._init;return h(d,y(x._payload),v)}if(Jo(x)||wo(x))return x=Fr(x,d.mode,v,null),x.return=d,x;hl(d,x)}return null}function f(d,x,v,y){var C=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(d,x,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case el:return v.key===C?l(d,x,v,y):null;case Ms:return v.key===C?c(d,x,v,y):null;case ji:return C=v._init,f(d,x,C(v._payload),y)}if(Jo(v)||wo(v))return C!==null?null:u(d,x,v,y,null);hl(d,v)}return null}function p(d,x,v,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(v)||null,a(x,d,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case el:return d=d.get(y.key===null?v:y.key)||null,l(x,d,y,C);case Ms:return d=d.get(y.key===null?v:y.key)||null,c(x,d,y,C);case ji:var T=y._init;return p(d,x,v,T(y._payload),C)}if(Jo(y)||wo(y))return d=d.get(v)||null,u(x,d,y,C,null);hl(x,y)}return null}function g(d,x,v,y){for(var C=null,T=null,A=x,L=x=0,w=null;A!==null&&L<v.length;L++){A.index>L?(w=A,A=null):w=A.sibling;var M=f(d,A,v[L],y);if(M===null){A===null&&(A=w);break}t&&A&&M.alternate===null&&e(d,A),x=s(M,x,L),T===null?C=M:T.sibling=M,T=M,A=w}if(L===v.length)return n(d,A),vt&&Tr(d,L),C;if(A===null){for(;L<v.length;L++)A=h(d,v[L],y),A!==null&&(x=s(A,x,L),T===null?C=A:T.sibling=A,T=A);return vt&&Tr(d,L),C}for(A=i(d,A);L<v.length;L++)w=p(A,d,L,v[L],y),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?L:w.key),x=s(w,x,L),T===null?C=w:T.sibling=w,T=w);return t&&A.forEach(function(U){return e(d,U)}),vt&&Tr(d,L),C}function _(d,x,v,y){var C=wo(v);if(typeof C!="function")throw Error(ue(150));if(v=C.call(v),v==null)throw Error(ue(151));for(var T=C=null,A=x,L=x=0,w=null,M=v.next();A!==null&&!M.done;L++,M=v.next()){A.index>L?(w=A,A=null):w=A.sibling;var U=f(d,A,M.value,y);if(U===null){A===null&&(A=w);break}t&&A&&U.alternate===null&&e(d,A),x=s(U,x,L),T===null?C=U:T.sibling=U,T=U,A=w}if(M.done)return n(d,A),vt&&Tr(d,L),C;if(A===null){for(;!M.done;L++,M=v.next())M=h(d,M.value,y),M!==null&&(x=s(M,x,L),T===null?C=M:T.sibling=M,T=M);return vt&&Tr(d,L),C}for(A=i(d,A);!M.done;L++,M=v.next())M=p(A,d,L,M.value,y),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?L:M.key),x=s(M,x,L),T===null?C=M:T.sibling=M,T=M);return t&&A.forEach(function(H){return e(d,H)}),vt&&Tr(d,L),C}function m(d,x,v,y){if(typeof v=="object"&&v!==null&&v.type===ws&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case el:e:{for(var C=v.key,T=x;T!==null;){if(T.key===C){if(C=v.type,C===ws){if(T.tag===7){n(d,T.sibling),x=r(T,v.props.children),x.return=d,d=x;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ji&&um(C)===T.type){n(d,T.sibling),x=r(T,v.props),x.ref=Co(d,T,v),x.return=d,d=x;break e}n(d,T);break}else e(d,T);T=T.sibling}v.type===ws?(x=Fr(v.props.children,d.mode,y,v.key),x.return=d,d=x):(y=uc(v.type,v.key,v.props,null,d.mode,y),y.ref=Co(d,x,v),y.return=d,d=y)}return o(d);case Ms:e:{for(T=v.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(d,x.sibling),x=r(x,v.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=Yu(v,d.mode,y),x.return=d,d=x}return o(d);case ji:return T=v._init,m(d,x,T(v._payload),y)}if(Jo(v))return g(d,x,v,y);if(wo(v))return _(d,x,v,y);hl(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,v),x.return=d,d=x):(n(d,x),x=qu(v,d.mode,y),x.return=d,d=x),o(d)):n(d,x)}return m}var Js=s_(!0),o_=s_(!1),Ac=hr(null),bc=null,Ls=null,bd=null;function Cd(){bd=Ls=bc=null}function Rd(t){var e=Ac.current;dt(Ac),t._currentValue=e}function Mf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Bs(t,e){bc=t,bd=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(bd!==t)if(t={context:t,memoizedValue:e,next:null},Ls===null){if(bc===null)throw Error(ue(308));Ls=t,bc.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return e}var Nr=null;function Pd(t){Nr===null?Nr=[t]:Nr.push(t)}function a_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Pd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Pi(t,i)}function Pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $i=!1;function Ld(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function l_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(t,n)}return r=i.interleaved,r===null?(e.next=e,Pd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(t,n)}function rc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gd(t,n)}}function hm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cc(t,e,n,i){var r=t.updateQueue;$i=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(f=e,p=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){h=g.call(p,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(p,h,f):g,f==null)break e;h=Mt({},h,f);break e;case 2:$i=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Br|=o,t.lanes=o,t.memoizedState=h}}function fm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var Xa={},oi=hr(Xa),Pa=hr(Xa),La=hr(Xa);function Dr(t){if(t===Xa)throw Error(ue(174));return t}function Nd(t,e){switch(lt(La,e),lt(Pa,t),lt(oi,Xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=tf(e,t)}dt(oi),lt(oi,e)}function Qs(){dt(oi),dt(Pa),dt(La)}function c_(t){Dr(La.current);var e=Dr(oi.current),n=tf(e,t.type);e!==n&&(lt(Pa,t),lt(oi,n))}function Dd(t){Pa.current===t&&(dt(oi),dt(Pa))}var xt=hr(0);function Rc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vu=[];function Id(){for(var t=0;t<Vu.length;t++)Vu[t]._workInProgressVersionPrimary=null;Vu.length=0}var sc=Ui.ReactCurrentDispatcher,Gu=Ui.ReactCurrentBatchConfig,zr=0,St=null,Rt=null,zt=null,Pc=!1,la=!1,Na=0,vM=0;function qt(){throw Error(ue(321))}function Ud(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function Fd(t,e,n,i,r,s){if(zr=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sc.current=t===null||t.memoizedState===null?SM:MM,t=n(i,r),la){s=0;do{if(la=!1,Na=0,25<=s)throw Error(ue(301));s+=1,zt=Rt=null,e.updateQueue=null,sc.current=wM,t=n(i,r)}while(la)}if(sc.current=Lc,e=Rt!==null&&Rt.next!==null,zr=0,zt=Rt=St=null,Pc=!1,e)throw Error(ue(300));return t}function Od(){var t=Na!==0;return Na=0,t}function ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?St.memoizedState=zt=t:zt=zt.next=t,zt}function Bn(){if(Rt===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=zt===null?St.memoizedState:zt.next;if(e!==null)zt=e,Rt=t;else{if(t===null)throw Error(ue(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},zt===null?St.memoizedState=zt=t:zt=zt.next=t}return zt}function Da(t,e){return typeof e=="function"?e(t):e}function Wu(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=Rt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((zr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,St.lanes|=u,Br|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Qn(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,Br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ju(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Qn(s,e.memoizedState)||(pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function u_(){}function h_(t,e){var n=St,i=Bn(),r=e(),s=!Qn(i.memoizedState,r);if(s&&(i.memoizedState=r,pn=!0),i=i.queue,kd(p_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,Ia(9,d_.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(ue(349));zr&30||f_(n,e,r)}return r}function f_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function d_(t,e,n,i){e.value=n,e.getSnapshot=i,m_(e)&&g_(t)}function p_(t,e,n){return n(function(){m_(e)&&g_(t)})}function m_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function g_(t){var e=Pi(t,1);e!==null&&Kn(e,t,1,-1)}function dm(t){var e=ti();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:t},e.queue=t,t=t.dispatch=yM.bind(null,St,t),[e.memoizedState,t]}function Ia(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function v_(){return Bn().memoizedState}function oc(t,e,n,i){var r=ti();St.flags|=t,r.memoizedState=Ia(1|e,n,void 0,i===void 0?null:i)}function nu(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var o=Rt.memoizedState;if(s=o.destroy,i!==null&&Ud(i,o.deps)){r.memoizedState=Ia(e,n,s,i);return}}St.flags|=t,r.memoizedState=Ia(1|e,n,s,i)}function pm(t,e){return oc(8390656,8,t,e)}function kd(t,e){return nu(2048,8,t,e)}function __(t,e){return nu(4,2,t,e)}function x_(t,e){return nu(4,4,t,e)}function y_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function S_(t,e,n){return n=n!=null?n.concat([t]):null,nu(4,4,y_.bind(null,e,t),n)}function zd(){}function M_(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ud(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function w_(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ud(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function E_(t,e,n){return zr&21?(Qn(n,e)||(n=Rv(),St.lanes|=n,Br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pn=!0),t.memoizedState=n)}function _M(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Gu.transition;Gu.transition={};try{t(!1),e()}finally{it=n,Gu.transition=i}}function T_(){return Bn().memoizedState}function xM(t,e,n){var i=ir(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},A_(t))b_(e,n);else if(n=a_(t,e,n,i),n!==null){var r=an();Kn(n,t,i,r),C_(n,e,i)}}function yM(t,e,n){var i=ir(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(A_(t))b_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Qn(a,o)){var l=e.interleaved;l===null?(r.next=r,Pd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=a_(t,e,r,i),n!==null&&(r=an(),Kn(n,t,i,r),C_(n,e,i))}}function A_(t){var e=t.alternate;return t===St||e!==null&&e===St}function b_(t,e){la=Pc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function C_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gd(t,n)}}var Lc={readContext:zn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},SM={readContext:zn,useCallback:function(t,e){return ti().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:pm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,oc(4194308,4,y_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return oc(4194308,4,t,e)},useInsertionEffect:function(t,e){return oc(4,2,t,e)},useMemo:function(t,e){var n=ti();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ti();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=xM.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=ti();return t={current:t},e.memoizedState=t},useState:dm,useDebugValue:zd,useDeferredValue:function(t){return ti().memoizedState=t},useTransition:function(){var t=dm(!1),e=t[0];return t=_M.bind(null,t[1]),ti().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=ti();if(vt){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),Bt===null)throw Error(ue(349));zr&30||f_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,pm(p_.bind(null,i,s,t),[t]),i.flags|=2048,Ia(9,d_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ti(),e=Bt.identifierPrefix;if(vt){var n=Mi,i=Si;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Na++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},MM={readContext:zn,useCallback:M_,useContext:zn,useEffect:kd,useImperativeHandle:S_,useInsertionEffect:__,useLayoutEffect:x_,useMemo:w_,useReducer:Wu,useRef:v_,useState:function(){return Wu(Da)},useDebugValue:zd,useDeferredValue:function(t){var e=Bn();return E_(e,Rt.memoizedState,t)},useTransition:function(){var t=Wu(Da)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:u_,useSyncExternalStore:h_,useId:T_,unstable_isNewReconciler:!1},wM={readContext:zn,useCallback:M_,useContext:zn,useEffect:kd,useImperativeHandle:S_,useInsertionEffect:__,useLayoutEffect:x_,useMemo:w_,useReducer:ju,useRef:v_,useState:function(){return ju(Da)},useDebugValue:zd,useDeferredValue:function(t){var e=Bn();return Rt===null?e.memoizedState=t:E_(e,Rt.memoizedState,t)},useTransition:function(){var t=ju(Da)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:u_,useSyncExternalStore:h_,useId:T_,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function wf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var iu={isMounted:function(t){return(t=t._reactInternals)?$r(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=ir(t),s=bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,r),e!==null&&(Kn(e,t,r,i),rc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=ir(t),s=bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,r),e!==null&&(Kn(e,t,r,i),rc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=ir(t),r=bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=tr(t,r,i),e!==null&&(Kn(e,t,i,n),rc(e,t,i))}};function mm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Aa(n,i)||!Aa(r,s):!0}function R_(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(r=vn(e)?Or:en.current,i=e.contextTypes,s=(i=i!=null)?Zs(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=iu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function gm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&iu.enqueueReplaceState(e,e.state,null)}function Ef(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ld(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=zn(s):(s=vn(e)?Or:en.current,r.context=Zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&iu.enqueueReplaceState(r,r.state,null),Cc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function eo(t,e){try{var n="",i=e;do n+=Ky(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function $u(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Tf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var EM=typeof WeakMap=="function"?WeakMap:Map;function P_(t,e,n){n=bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Dc||(Dc=!0,Uf=i),Tf(t,e)},n}function L_(t,e,n){n=bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Tf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Tf(t,e),typeof i!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new EM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=kM.bind(null,t,e,n),e.then(t,t))}function _m(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bi(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var TM=Ui.ReactCurrentOwner,pn=!1;function on(t,e,n,i){e.child=t===null?o_(e,null,n,i):Js(e,t.child,n,i)}function ym(t,e,n,i,r){n=n.render;var s=e.ref;return Bs(e,r),i=Fd(t,e,n,i,s,r),n=Od(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(vt&&n&&Ed(e),e.flags|=1,on(t,e,i,r),e.child)}function Sm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Xd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,N_(t,e,s,i,r)):(t=uc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Aa,n(o,i)&&t.ref===e.ref)return Li(t,e,r)}return e.flags|=1,t=rr(s,i),t.ref=e.ref,t.return=e,e.child=t}function N_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Aa(s,i)&&t.ref===e.ref)if(pn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(pn=!0);else return e.lanes=t.lanes,Li(t,e,r)}return Af(t,e,n,i,r)}function D_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(Ds,wn),wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(Ds,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(Ds,wn),wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(Ds,wn),wn|=i;return on(t,e,r,n),e.child}function I_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Af(t,e,n,i,r){var s=vn(n)?Or:en.current;return s=Zs(e,s),Bs(e,r),n=Fd(t,e,n,i,s,r),i=Od(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(vt&&i&&Ed(e),e.flags|=1,on(t,e,n,r),e.child)}function Mm(t,e,n,i,r){if(vn(n)){var s=!0;wc(e)}else s=!1;if(Bs(e,r),e.stateNode===null)ac(t,e),R_(e,n,i),Ef(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=zn(c):(c=vn(n)?Or:en.current,c=Zs(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&gm(e,o,i,c),$i=!1;var f=e.memoizedState;o.state=f,Cc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||gn.current||$i?(typeof u=="function"&&(wf(e,n,u,i),l=e.memoizedState),(a=$i||mm(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,l_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:jn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=vn(n)?Or:en.current,l=Zs(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&gm(e,o,i,l),$i=!1,f=e.memoizedState,o.state=f,Cc(e,i,o,r);var g=e.memoizedState;a!==h||f!==g||gn.current||$i?(typeof p=="function"&&(wf(e,n,p,i),g=e.memoizedState),(c=$i||mm(e,n,c,i,f,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return bf(t,e,n,i,s,r)}function bf(t,e,n,i,r,s){I_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&am(e,n,!1),Li(t,e,s);i=e.stateNode,TM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Js(e,t.child,null,s),e.child=Js(e,null,a,s)):on(t,e,a,s),e.memoizedState=i.state,r&&am(e,n,!0),e.child}function U_(t){var e=t.stateNode;e.pendingContext?om(t,e.pendingContext,e.pendingContext!==e.context):e.context&&om(t,e.context,!1),Nd(t,e.containerInfo)}function wm(t,e,n,i,r){return Ks(),Ad(r),e.flags|=256,on(t,e,n,i),e.child}var Cf={dehydrated:null,treeContext:null,retryLane:0};function Rf(t){return{baseLanes:t,cachePool:null,transitions:null}}function F_(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(xt,r&1),t===null)return Sf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ou(o,i,0,null),t=Fr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Rf(n),e.memoizedState=Cf,t):Bd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return AM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=rr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=rr(a,s):(s=Fr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Rf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Cf,i}return s=t.child,t=s.sibling,i=rr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Bd(t,e){return e=ou({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fl(t,e,n,i){return i!==null&&Ad(i),Js(e,t.child,null,n),t=Bd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function AM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=$u(Error(ue(422))),fl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ou({mode:"visible",children:i.children},r,0,null),s=Fr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Js(e,t.child,null,o),e.child.memoizedState=Rf(o),e.memoizedState=Cf,s);if(!(e.mode&1))return fl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ue(419)),i=$u(s,i,void 0),fl(t,e,o,i)}if(a=(o&t.childLanes)!==0,pn||a){if(i=Bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(t,r),Kn(i,t,r,-1))}return $d(),i=$u(Error(ue(421))),fl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,An=er(r.nextSibling),Cn=e,vt=!0,Xn=null,t!==null&&(In[Un++]=Si,In[Un++]=Mi,In[Un++]=kr,Si=t.id,Mi=t.overflow,kr=e),e=Bd(e,i.children),e.flags|=4096,e)}function Em(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Mf(t.return,e,n)}function Xu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function O_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(on(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Em(t,n,e);else if(t.tag===19)Em(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Rc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Xu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Rc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Xu(e,!0,n,null,s);break;case"together":Xu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ac(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bM(t,e,n){switch(e.tag){case 3:U_(e),Ks();break;case 5:c_(e);break;case 1:vn(e.type)&&wc(e);break;case 4:Nd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(Ac,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?F_(t,e,n):(lt(xt,xt.current&1),t=Li(t,e,n),t!==null?t.sibling:null);lt(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return O_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,D_(t,e,n)}return Li(t,e,n)}var k_,Pf,z_,B_;k_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pf=function(){};z_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Dr(oi.current);var s=null;switch(n){case"input":r=Kh(t,r),i=Kh(t,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=ef(t,r),i=ef(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Sc)}nf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};B_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ro(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function CM(t,e,n){var i=e.pendingProps;switch(Td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return vn(e.type)&&Mc(),Yt(e),null;case 3:return i=e.stateNode,Qs(),dt(gn),dt(en),Id(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ul(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xn!==null&&(kf(Xn),Xn=null))),Pf(t,e),Yt(e),null;case 5:Dd(e);var r=Dr(La.current);if(n=e.type,t!==null&&e.stateNode!=null)z_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return Yt(e),null}if(t=Dr(oi.current),ul(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ii]=e,i[Ra]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<ea.length;r++)ut(ea[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Dp(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":Up(i,s),ut("invalid",i)}nf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&cl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&cl(i.textContent,a,t),r=["children",""+a]):xa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(n){case"input":tl(i),Ip(i,s,!0);break;case"textarea":tl(i),Fp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ii]=e,t[Ra]=i,k_(t,e,!1,!1),e.stateNode=t;e:{switch(o=rf(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<ea.length;r++)ut(ea[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":Dp(t,i),r=Kh(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":Up(t,i),r=ef(t,i),ut("invalid",t);break;default:r=i}nf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?vv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&mv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ya(t,l):typeof l=="number"&&ya(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&ud(t,s,l,o))}switch(n){case"input":tl(t),Ip(t,i,!1);break;case"textarea":tl(t),Fp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Fs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Fs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Sc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)B_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(n=Dr(La.current),Dr(oi.current),ul(e)){if(i=e.stateNode,n=e.memoizedProps,i[ii]=e,(s=i.nodeValue!==n)&&(t=Cn,t!==null))switch(t.tag){case 3:cl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&cl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ii]=e,e.stateNode=i}return Yt(e),null;case 13:if(dt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&An!==null&&e.mode&1&&!(e.flags&128))r_(),Ks(),e.flags|=98560,s=!1;else if(s=ul(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[ii]=e}else Ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else Xn!==null&&(kf(Xn),Xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?Lt===0&&(Lt=3):$d())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return Qs(),Pf(t,e),t===null&&ba(e.stateNode.containerInfo),Yt(e),null;case 10:return Rd(e.type._context),Yt(e),null;case 17:return vn(e.type)&&Mc(),Yt(e),null;case 19:if(dt(xt),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ro(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Rc(t),o!==null){for(e.flags|=128,Ro(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Tt()>to&&(e.flags|=128,i=!0,Ro(s,!1),e.lanes=4194304)}else{if(!i)if(t=Rc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return Yt(e),null}else 2*Tt()-s.renderingStartTime>to&&n!==1073741824&&(e.flags|=128,i=!0,Ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,n=xt.current,lt(xt,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return jd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function RM(t,e){switch(Td(e),e.tag){case 1:return vn(e.type)&&Mc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qs(),dt(gn),dt(en),Id(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dd(e),null;case 13:if(dt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));Ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(xt),null;case 4:return Qs(),null;case 10:return Rd(e.type._context),null;case 22:case 23:return jd(),null;case 24:return null;default:return null}}var dl=!1,Qt=!1,PM=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function Lf(t,e,n){try{n()}catch(i){Et(t,e,i)}}var Tm=!1;function LM(t,e){if(pf=_c,t=jv(),wd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mf={focusedElem:t,selectionRange:n},_c=!1,Ae=e;Ae!==null;)if(e=Ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ae=t;else for(;Ae!==null;){e=Ae;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:jn(e.type,_),m);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(y){Et(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}return g=Tm,Tm=!1,g}function ca(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Lf(e,n,s)}r=r.next}while(r!==i)}}function ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Nf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function H_(t){var e=t.alternate;e!==null&&(t.alternate=null,H_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ii],delete e[Ra],delete e[_f],delete e[dM],delete e[pM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function V_(t){return t.tag===5||t.tag===3||t.tag===4}function Am(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||V_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Df(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sc));else if(i!==4&&(t=t.child,t!==null))for(Df(t,e,n),t=t.sibling;t!==null;)Df(t,e,n),t=t.sibling}function If(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(If(t,e,n),t=t.sibling;t!==null;)If(t,e,n),t=t.sibling}var Vt=null,$n=!1;function Oi(t,e,n){for(n=n.child;n!==null;)G_(t,e,n),n=n.sibling}function G_(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(Zc,n)}catch{}switch(n.tag){case 5:Qt||Ns(n,e);case 6:var i=Vt,r=$n;Vt=null,Oi(t,e,n),Vt=i,$n=r,Vt!==null&&($n?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&($n?(t=Vt,n=n.stateNode,t.nodeType===8?Bu(t.parentNode,n):t.nodeType===1&&Bu(t,n),Ea(t)):Bu(Vt,n.stateNode));break;case 4:i=Vt,r=$n,Vt=n.stateNode.containerInfo,$n=!0,Oi(t,e,n),Vt=i,$n=r;break;case 0:case 11:case 14:case 15:if(!Qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Lf(n,e,o),r=r.next}while(r!==i)}Oi(t,e,n);break;case 1:if(!Qt&&(Ns(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Et(n,e,a)}Oi(t,e,n);break;case 21:Oi(t,e,n);break;case 22:n.mode&1?(Qt=(i=Qt)||n.memoizedState!==null,Oi(t,e,n),Qt=i):Oi(t,e,n);break;default:Oi(t,e,n)}}function bm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new PM),e.forEach(function(i){var r=BM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,$n=!1;break e;case 3:Vt=a.stateNode.containerInfo,$n=!0;break e;case 4:Vt=a.stateNode.containerInfo,$n=!0;break e}a=a.return}if(Vt===null)throw Error(ue(160));G_(s,o,r),Vt=null,$n=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Et(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)W_(e,t),e=e.sibling}function W_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),ei(t),i&4){try{ca(3,t,t.return),ru(3,t)}catch(_){Et(t,t.return,_)}try{ca(5,t,t.return)}catch(_){Et(t,t.return,_)}}break;case 1:Hn(e,t),ei(t),i&512&&n!==null&&Ns(n,n.return);break;case 5:if(Hn(e,t),ei(t),i&512&&n!==null&&Ns(n,n.return),t.flags&32){var r=t.stateNode;try{ya(r,"")}catch(_){Et(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&fv(r,s),rf(a,o);var c=rf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?vv(r,h):u==="dangerouslySetInnerHTML"?mv(r,h):u==="children"?ya(r,h):ud(r,u,h,c)}switch(a){case"input":Jh(r,s);break;case"textarea":dv(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Fs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Fs(r,!!s.multiple,s.defaultValue,!0):Fs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ra]=s}catch(_){Et(t,t.return,_)}}break;case 6:if(Hn(e,t),ei(t),i&4){if(t.stateNode===null)throw Error(ue(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){Et(t,t.return,_)}}break;case 3:if(Hn(e,t),ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ea(e.containerInfo)}catch(_){Et(t,t.return,_)}break;case 4:Hn(e,t),ei(t);break;case 13:Hn(e,t),ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Gd=Tt())),i&4&&bm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Qt=(c=Qt)||u,Hn(e,t),Qt=c):Hn(e,t),ei(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Ae=t,u=t.child;u!==null;){for(h=Ae=u;Ae!==null;){switch(f=Ae,p=f.child,f.tag){case 0:case 11:case 14:case 15:ca(4,f,f.return);break;case 1:Ns(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Et(i,n,_)}}break;case 5:Ns(f,f.return);break;case 22:if(f.memoizedState!==null){Rm(h);continue}}p!==null?(p.return=f,Ae=p):Rm(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gv("display",o))}catch(_){Et(t,t.return,_)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(_){Et(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Hn(e,t),ei(t),i&4&&bm(t);break;case 21:break;default:Hn(e,t),ei(t)}}function ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(V_(n)){var i=n;break e}n=n.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ya(r,""),i.flags&=-33);var s=Am(t);If(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Am(t);Df(t,a,o);break;default:throw Error(ue(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function NM(t,e,n){Ae=t,j_(t)}function j_(t,e,n){for(var i=(t.mode&1)!==0;Ae!==null;){var r=Ae,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||dl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Qt;a=dl;var c=Qt;if(dl=o,(Qt=l)&&!c)for(Ae=r;Ae!==null;)o=Ae,l=o.child,o.tag===22&&o.memoizedState!==null?Pm(r):l!==null?(l.return=o,Ae=l):Pm(r);for(;s!==null;)Ae=s,j_(s),s=s.sibling;Ae=r,dl=a,Qt=c}Cm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ae=s):Cm(t)}}function Cm(t){for(;Ae!==null;){var e=Ae;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qt||ru(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&fm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Ea(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}Qt||e.flags&512&&Nf(e)}catch(f){Et(e,e.return,f)}}if(e===t){Ae=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function Rm(t){for(;Ae!==null;){var e=Ae;if(e===t){Ae=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function Pm(t){for(;Ae!==null;){var e=Ae;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ru(4,e)}catch(l){Et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{Nf(e)}catch(l){Et(e,s,l)}break;case 5:var o=e.return;try{Nf(e)}catch(l){Et(e,o,l)}}}catch(l){Et(e,e.return,l)}if(e===t){Ae=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ae=a;break}Ae=e.return}}var DM=Math.ceil,Nc=Ui.ReactCurrentDispatcher,Hd=Ui.ReactCurrentOwner,kn=Ui.ReactCurrentBatchConfig,Qe=0,Bt=null,bt=null,Wt=0,wn=0,Ds=hr(0),Lt=0,Ua=null,Br=0,su=0,Vd=0,ua=null,hn=null,Gd=0,to=1/0,xi=null,Dc=!1,Uf=null,nr=null,pl=!1,Zi=null,Ic=0,ha=0,Ff=null,lc=-1,cc=0;function an(){return Qe&6?Tt():lc!==-1?lc:lc=Tt()}function ir(t){return t.mode&1?Qe&2&&Wt!==0?Wt&-Wt:gM.transition!==null?(cc===0&&(cc=Rv()),cc):(t=it,t!==0||(t=window.event,t=t===void 0?16:Fv(t.type)),t):1}function Kn(t,e,n,i){if(50<ha)throw ha=0,Ff=null,Error(ue(185));Wa(t,n,i),(!(Qe&2)||t!==Bt)&&(t===Bt&&(!(Qe&2)&&(su|=n),Lt===4&&qi(t,Wt)),_n(t,i),n===1&&Qe===0&&!(e.mode&1)&&(to=Tt()+500,tu&&fr()))}function _n(t,e){var n=t.callbackNode;gS(t,e);var i=vc(t,t===Bt?Wt:0);if(i===0)n!==null&&zp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&zp(n),e===1)t.tag===0?mM(Lm.bind(null,t)):t_(Lm.bind(null,t)),hM(function(){!(Qe&6)&&fr()}),n=null;else{switch(Pv(i)){case 1:n=md;break;case 4:n=bv;break;case 16:n=gc;break;case 536870912:n=Cv;break;default:n=gc}n=Q_(n,$_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $_(t,e){if(lc=-1,cc=0,Qe&6)throw Error(ue(327));var n=t.callbackNode;if(Hs()&&t.callbackNode!==n)return null;var i=vc(t,t===Bt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Uc(t,i);else{e=i;var r=Qe;Qe|=2;var s=q_();(Bt!==t||Wt!==e)&&(xi=null,to=Tt()+500,Ur(t,e));do try{FM();break}catch(a){X_(t,a)}while(!0);Cd(),Nc.current=s,Qe=r,bt!==null?e=0:(Bt=null,Wt=0,e=Lt)}if(e!==0){if(e===2&&(r=cf(t),r!==0&&(i=r,e=Of(t,r))),e===1)throw n=Ua,Ur(t,0),qi(t,i),_n(t,Tt()),n;if(e===6)qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!IM(r)&&(e=Uc(t,i),e===2&&(s=cf(t),s!==0&&(i=s,e=Of(t,s))),e===1))throw n=Ua,Ur(t,0),qi(t,i),_n(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:Ar(t,hn,xi);break;case 3:if(qi(t,i),(i&130023424)===i&&(e=Gd+500-Tt(),10<e)){if(vc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=vf(Ar.bind(null,t,hn,xi),e);break}Ar(t,hn,xi);break;case 4:if(qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*DM(i/1960))-i,10<i){t.timeoutHandle=vf(Ar.bind(null,t,hn,xi),i);break}Ar(t,hn,xi);break;case 5:Ar(t,hn,xi);break;default:throw Error(ue(329))}}}return _n(t,Tt()),t.callbackNode===n?$_.bind(null,t):null}function Of(t,e){var n=ua;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=Uc(t,e),t!==2&&(e=hn,hn=n,e!==null&&kf(e)),t}function kf(t){hn===null?hn=t:hn.push.apply(hn,t)}function IM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qi(t,e){for(e&=~Vd,e&=~su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zn(e),i=1<<n;t[n]=-1,e&=~i}}function Lm(t){if(Qe&6)throw Error(ue(327));Hs();var e=vc(t,0);if(!(e&1))return _n(t,Tt()),null;var n=Uc(t,e);if(t.tag!==0&&n===2){var i=cf(t);i!==0&&(e=i,n=Of(t,i))}if(n===1)throw n=Ua,Ur(t,0),qi(t,e),_n(t,Tt()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,hn,xi),_n(t,Tt()),null}function Wd(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(to=Tt()+500,tu&&fr())}}function Hr(t){Zi!==null&&Zi.tag===0&&!(Qe&6)&&Hs();var e=Qe;Qe|=1;var n=kn.transition,i=it;try{if(kn.transition=null,it=1,t)return t()}finally{it=i,kn.transition=n,Qe=e,!(Qe&6)&&fr()}}function jd(){wn=Ds.current,dt(Ds)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uM(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(Td(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Mc();break;case 3:Qs(),dt(gn),dt(en),Id();break;case 5:Dd(i);break;case 4:Qs();break;case 13:dt(xt);break;case 19:dt(xt);break;case 10:Rd(i.type._context);break;case 22:case 23:jd()}n=n.return}if(Bt=t,bt=t=rr(t.current,null),Wt=wn=e,Lt=0,Ua=null,Vd=su=Br=0,hn=ua=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Nr=null}return t}function X_(t,e){do{var n=bt;try{if(Cd(),sc.current=Lc,Pc){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Pc=!1}if(zr=0,zt=Rt=St=null,la=!1,Na=0,Hd.current=null,n===null||n.return===null){Lt=1,Ua=e,bt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=_m(o);if(p!==null){p.flags&=-257,xm(p,o,a,s,e),p.mode&1&&vm(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){vm(s,c,e),$d();break e}l=Error(ue(426))}}else if(vt&&a.mode&1){var m=_m(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),xm(m,o,a,s,e),Ad(eo(l,a));break e}}s=l=eo(l,a),Lt!==4&&(Lt=2),ua===null?ua=[s]:ua.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=P_(s,l,e);hm(s,d);break e;case 1:a=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(nr===null||!nr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=L_(s,a,e);hm(s,y);break e}}s=s.return}while(s!==null)}Z_(n)}catch(C){e=C,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function q_(){var t=Nc.current;return Nc.current=Lc,t===null?Lc:t}function $d(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),Bt===null||!(Br&268435455)&&!(su&268435455)||qi(Bt,Wt)}function Uc(t,e){var n=Qe;Qe|=2;var i=q_();(Bt!==t||Wt!==e)&&(xi=null,Ur(t,e));do try{UM();break}catch(r){X_(t,r)}while(!0);if(Cd(),Qe=n,Nc.current=i,bt!==null)throw Error(ue(261));return Bt=null,Wt=0,Lt}function UM(){for(;bt!==null;)Y_(bt)}function FM(){for(;bt!==null&&!aS();)Y_(bt)}function Y_(t){var e=J_(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?Z_(t):bt=e,Hd.current=null}function Z_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=RM(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,bt=null;return}}else if(n=CM(n,e,wn),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Lt===0&&(Lt=5)}function Ar(t,e,n){var i=it,r=kn.transition;try{kn.transition=null,it=1,OM(t,e,n,i)}finally{kn.transition=r,it=i}return null}function OM(t,e,n,i){do Hs();while(Zi!==null);if(Qe&6)throw Error(ue(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(vS(t,s),t===Bt&&(bt=Bt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pl||(pl=!0,Q_(gc,function(){return Hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var o=it;it=1;var a=Qe;Qe|=4,Hd.current=null,LM(t,n),W_(n,t),iM(mf),_c=!!pf,mf=pf=null,t.current=n,NM(n),lS(),Qe=a,it=o,kn.transition=s}else t.current=n;if(pl&&(pl=!1,Zi=t,Ic=r),s=t.pendingLanes,s===0&&(nr=null),hS(n.stateNode),_n(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Dc)throw Dc=!1,t=Uf,Uf=null,t;return Ic&1&&t.tag!==0&&Hs(),s=t.pendingLanes,s&1?t===Ff?ha++:(ha=0,Ff=t):ha=0,fr(),null}function Hs(){if(Zi!==null){var t=Pv(Ic),e=kn.transition,n=it;try{if(kn.transition=null,it=16>t?16:t,Zi===null)var i=!1;else{if(t=Zi,Zi=null,Ic=0,Qe&6)throw Error(ue(331));var r=Qe;for(Qe|=4,Ae=t.current;Ae!==null;){var s=Ae,o=s.child;if(Ae.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ae=c;Ae!==null;){var u=Ae;switch(u.tag){case 0:case 11:case 15:ca(8,u,s)}var h=u.child;if(h!==null)h.return=u,Ae=h;else for(;Ae!==null;){u=Ae;var f=u.sibling,p=u.return;if(H_(u),u===c){Ae=null;break}if(f!==null){f.return=p,Ae=f;break}Ae=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Ae=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ae=o;else e:for(;Ae!==null;){if(s=Ae,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ca(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ae=d;break e}Ae=s.return}}var x=t.current;for(Ae=x;Ae!==null;){o=Ae;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Ae=v;else e:for(o=x;Ae!==null;){if(a=Ae,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ru(9,a)}}catch(C){Et(a,a.return,C)}if(a===o){Ae=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ae=y;break e}Ae=a.return}}if(Qe=r,fr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(Zc,t)}catch{}i=!0}return i}finally{it=n,kn.transition=e}}return!1}function Nm(t,e,n){e=eo(n,e),e=P_(t,e,1),t=tr(t,e,1),e=an(),t!==null&&(Wa(t,1,e),_n(t,e))}function Et(t,e,n){if(t.tag===3)Nm(t,t,n);else for(;e!==null;){if(e.tag===3){Nm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(nr===null||!nr.has(i))){t=eo(n,t),t=L_(e,t,1),e=tr(e,t,1),t=an(),e!==null&&(Wa(e,1,t),_n(e,t));break}}e=e.return}}function kM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Wt&n)===n&&(Lt===4||Lt===3&&(Wt&130023424)===Wt&&500>Tt()-Gd?Ur(t,0):Vd|=n),_n(t,e)}function K_(t,e){e===0&&(t.mode&1?(e=rl,rl<<=1,!(rl&130023424)&&(rl=4194304)):e=1);var n=an();t=Pi(t,e),t!==null&&(Wa(t,e,n),_n(t,n))}function zM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),K_(t,n)}function BM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),K_(t,n)}var J_;J_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pn=!1,bM(t,e,n);pn=!!(t.flags&131072)}else pn=!1,vt&&e.flags&1048576&&n_(e,Tc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ac(t,e),t=e.pendingProps;var r=Zs(e,en.current);Bs(e,n),r=Fd(null,e,i,t,r,n);var s=Od();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,wc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ld(e),r.updater=iu,e.stateNode=r,r._reactInternals=e,Ef(e,i,t,n),e=bf(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&Ed(e),on(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ac(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=VM(i),t=jn(i,t),r){case 0:e=Af(null,e,i,t,n);break e;case 1:e=Mm(null,e,i,t,n);break e;case 11:e=ym(null,e,i,t,n);break e;case 14:e=Sm(null,e,i,jn(i.type,t),n);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Af(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Mm(t,e,i,r,n);case 3:e:{if(U_(e),t===null)throw Error(ue(387));i=e.pendingProps,s=e.memoizedState,r=s.element,l_(t,e),Cc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=eo(Error(ue(423)),e),e=wm(t,e,i,n,r);break e}else if(i!==r){r=eo(Error(ue(424)),e),e=wm(t,e,i,n,r);break e}else for(An=er(e.stateNode.containerInfo.firstChild),Cn=e,vt=!0,Xn=null,n=o_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ks(),i===r){e=Li(t,e,n);break e}on(t,e,i,n)}e=e.child}return e;case 5:return c_(e),t===null&&Sf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,gf(i,r)?o=null:s!==null&&gf(i,s)&&(e.flags|=32),I_(t,e),on(t,e,o,n),e.child;case 6:return t===null&&Sf(e),null;case 13:return F_(t,e,n);case 4:return Nd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Js(e,null,i,n):on(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),ym(t,e,i,r,n);case 7:return on(t,e,e.pendingProps,n),e.child;case 8:return on(t,e,e.pendingProps.children,n),e.child;case 12:return on(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt(Ac,i._currentValue),i._currentValue=o,s!==null)if(Qn(s.value,o)){if(s.children===r.children&&!gn.current){e=Li(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=bi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Mf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ue(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Mf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}on(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Bs(e,n),r=zn(r),i=i(r),e.flags|=1,on(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),Sm(t,e,i,r,n);case 15:return N_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),ac(t,e),e.tag=1,vn(i)?(t=!0,wc(e)):t=!1,Bs(e,n),R_(e,i,r),Ef(e,i,r,n),bf(null,e,i,!0,t,n);case 19:return O_(t,e,n);case 22:return D_(t,e,n)}throw Error(ue(156,e.tag))};function Q_(t,e){return Av(t,e)}function HM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new HM(t,e,n,i)}function Xd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function VM(t){if(typeof t=="function")return Xd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fd)return 11;if(t===dd)return 14}return 2}function rr(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function uc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Xd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ws:return Fr(n.children,r,s,e);case hd:o=8,r|=8;break;case Xh:return t=On(12,n,e,r|2),t.elementType=Xh,t.lanes=s,t;case qh:return t=On(13,n,e,r),t.elementType=qh,t.lanes=s,t;case Yh:return t=On(19,n,e,r),t.elementType=Yh,t.lanes=s,t;case cv:return ou(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case av:o=10;break e;case lv:o=9;break e;case fd:o=11;break e;case dd:o=14;break e;case ji:o=16,i=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=On(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Fr(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function ou(t,e,n,i){return t=On(22,t,i,e),t.elementType=cv,t.lanes=n,t.stateNode={isHidden:!1},t}function qu(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function Yu(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ru(0),this.expirationTimes=Ru(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ru(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function qd(t,e,n,i,r,s,o,a,l){return t=new GM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ld(s),t}function WM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ex(t){if(!t)return lr;t=t._reactInternals;e:{if($r(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(vn(n))return e_(t,n,e)}return e}function tx(t,e,n,i,r,s,o,a,l){return t=qd(n,i,!0,t,r,s,o,a,l),t.context=ex(null),n=t.current,i=an(),r=ir(n),s=bi(i,r),s.callback=e??null,tr(n,s,r),t.current.lanes=r,Wa(t,r,i),_n(t,i),t}function au(t,e,n,i){var r=e.current,s=an(),o=ir(r);return n=ex(n),e.context===null?e.context=n:e.pendingContext=n,e=bi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=tr(r,e,o),t!==null&&(Kn(t,r,o,s),rc(t,r,o)),o}function Fc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yd(t,e){Dm(t,e),(t=t.alternate)&&Dm(t,e)}function jM(){return null}var nx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zd(t){this._internalRoot=t}lu.prototype.render=Zd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));au(t,e,null,null)};lu.prototype.unmount=Zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hr(function(){au(null,t,null,null)}),e[Ri]=null}};function lu(t){this._internalRoot=t}lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xi.length&&e!==0&&e<Xi[n].priority;n++);Xi.splice(n,0,t),n===0&&Uv(t)}};function Kd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Im(){}function $M(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Fc(o);s.call(c)}}var o=tx(e,i,t,0,null,!1,!1,"",Im);return t._reactRootContainer=o,t[Ri]=o.current,ba(t.nodeType===8?t.parentNode:t),Hr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Fc(l);a.call(c)}}var l=qd(t,0,!1,null,null,!1,!1,"",Im);return t._reactRootContainer=l,t[Ri]=l.current,ba(t.nodeType===8?t.parentNode:t),Hr(function(){au(e,l,n,i)}),l}function uu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Fc(o);a.call(l)}}au(e,o,t,r)}else o=$M(n,e,t,r,i);return Fc(o)}Lv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qo(e.pendingLanes);n!==0&&(gd(e,n|1),_n(e,Tt()),!(Qe&6)&&(to=Tt()+500,fr()))}break;case 13:Hr(function(){var i=Pi(t,1);if(i!==null){var r=an();Kn(i,t,1,r)}}),Yd(t,1)}};vd=function(t){if(t.tag===13){var e=Pi(t,134217728);if(e!==null){var n=an();Kn(e,t,134217728,n)}Yd(t,134217728)}};Nv=function(t){if(t.tag===13){var e=ir(t),n=Pi(t,e);if(n!==null){var i=an();Kn(n,t,e,i)}Yd(t,e)}};Dv=function(){return it};Iv=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};of=function(t,e,n){switch(e){case"input":if(Jh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=eu(i);if(!r)throw Error(ue(90));hv(i),Jh(i,r)}}}break;case"textarea":dv(t,n);break;case"select":e=n.value,e!=null&&Fs(t,!!n.multiple,e,!1)}};yv=Wd;Sv=Hr;var XM={usingClientEntryPoint:!1,Events:[$a,bs,eu,_v,xv,Wd]},Po={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qM={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ev(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||jM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ml.isDisabled&&ml.supportsFiber)try{Zc=ml.inject(qM),si=ml}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XM;Pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kd(e))throw Error(ue(200));return WM(t,e,null,n)};Pn.createRoot=function(t,e){if(!Kd(t))throw Error(ue(299));var n=!1,i="",r=nx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=qd(t,1,!1,null,null,n,!1,i,r),t[Ri]=e.current,ba(t.nodeType===8?t.parentNode:t),new Zd(e)};Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=Ev(e),t=t===null?null:t.stateNode,t};Pn.flushSync=function(t){return Hr(t)};Pn.hydrate=function(t,e,n){if(!cu(e))throw Error(ue(200));return uu(null,t,e,!0,n)};Pn.hydrateRoot=function(t,e,n){if(!Kd(t))throw Error(ue(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=nx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=tx(e,null,t,1,n??null,r,!1,s,o),t[Ri]=e.current,ba(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new lu(e)};Pn.render=function(t,e,n){if(!cu(e))throw Error(ue(200));return uu(null,t,e,!1,n)};Pn.unmountComponentAtNode=function(t){if(!cu(t))throw Error(ue(40));return t._reactRootContainer?(Hr(function(){uu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1};Pn.unstable_batchedUpdates=Wd;Pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!cu(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return uu(t,e,n,!1,i)};Pn.version="18.3.1-next-f1338f8080-20240426";function ix(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ix)}catch(t){console.error(t)}}ix(),iv.exports=Pn;var YM=iv.exports,rx,Um=YM;rx=Um.createRoot,Um.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jd="164",ZM=0,Fm=1,KM=2,sx=1,ox=2,_i=3,Ni=0,ln=1,Tn=2,sr=0,Vs=1,Om=2,km=3,zm=4,JM=5,Rr=100,QM=101,e1=102,t1=103,n1=104,i1=200,r1=201,s1=202,o1=203,zf=204,Bf=205,a1=206,l1=207,c1=208,u1=209,h1=210,f1=211,d1=212,p1=213,m1=214,g1=0,v1=1,_1=2,Oc=3,x1=4,y1=5,S1=6,M1=7,ax=0,w1=1,E1=2,or=0,T1=1,A1=2,b1=3,lx=4,C1=5,R1=6,P1=7,cx=300,no=301,io=302,Hf=303,Vf=304,hu=306,Di=1e3,Ir=1001,Gf=1002,mn=1003,L1=1004,gl=1005,dn=1006,Zu=1007,wi=1008,cr=1009,N1=1010,D1=1011,ux=1012,hx=1013,ro=1014,Ei=1015,fu=1016,fx=1017,dx=1018,qa=1020,I1=35902,U1=1021,F1=1022,ri=1023,O1=1024,k1=1025,Gs=1026,Fa=1027,px=1028,mx=1029,z1=1030,gx=1031,vx=1033,Ku=33776,Ju=33777,Qu=33778,eh=33779,Bm=35840,Hm=35841,Vm=35842,Gm=35843,Wm=36196,jm=37492,$m=37496,Xm=37808,qm=37809,Ym=37810,Zm=37811,Km=37812,Jm=37813,Qm=37814,eg=37815,tg=37816,ng=37817,ig=37818,rg=37819,sg=37820,og=37821,th=36492,ag=36494,lg=36495,B1=36283,cg=36284,ug=36285,hg=36286,H1=3200,V1=3201,_x=0,G1=1,qn="",En="srgb",dr="srgb-linear",Qd="display-p3",du="display-p3-linear",kc="linear",ht="srgb",zc="rec709",Bc="p3",Jr=7680,fg=519,W1=512,j1=513,$1=514,xx=515,X1=516,q1=517,Y1=518,Z1=519,dg=35044,pg="300 es",Ti=2e3,Hc=2001;class uo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mg=1234567;const Ws=Math.PI/180,Oa=180/Math.PI;function Xr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function Pt(t,e,n){return Math.max(e,Math.min(n,t))}function ep(t,e){return(t%e+e)%e}function K1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function J1(t,e,n){return t!==e?(n-t)/(e-t):0}function fa(t,e,n){return(1-n)*t+n*e}function Q1(t,e,n,i){return fa(t,e,1-Math.exp(-n*i))}function ew(t,e=1){return e-Math.abs(ep(t,e*2)-e)}function tw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function nw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function iw(t,e){return t+Math.floor(Math.random()*(e-t+1))}function rw(t,e){return t+Math.random()*(e-t)}function sw(t){return t*(.5-Math.random())}function ow(t){t!==void 0&&(mg=t);let e=mg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function aw(t){return t*Ws}function lw(t){return t*Oa}function cw(t){return(t&t-1)===0&&t!==0}function uw(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function hw(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function fw(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*h,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ys(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Ss={DEG2RAD:Ws,RAD2DEG:Oa,generateUUID:Xr,clamp:Pt,euclideanModulo:ep,mapLinear:K1,inverseLerp:J1,lerp:fa,damp:Q1,pingpong:ew,smoothstep:tw,smootherstep:nw,randInt:iw,randFloat:rw,randFloatSpread:sw,seededRandom:ow,degToRad:aw,radToDeg:lw,isPowerOfTwo:cw,ceilPowerOfTwo:uw,floorPowerOfTwo:hw,setQuaternionFromProperEuler:fw,normalize:rn,denormalize:ys};class fe{constructor(e=0,n=0){fe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,n,i,r,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],x=r[1],v=r[4],y=r[7],C=r[2],T=r[5],A=r[8];return s[0]=o*_+a*x+l*C,s[3]=o*m+a*v+l*T,s[6]=o*d+a*y+l*A,s[1]=c*_+u*x+h*C,s[4]=c*m+u*v+h*T,s[7]=c*d+u*y+h*A,s[2]=f*_+p*x+g*C,s[5]=f*m+p*v+g*T,s[8]=f*d+p*y+g*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=n*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(nh.makeScale(e,n)),this}rotate(e){return this.premultiply(nh.makeRotation(-e)),this}translate(e,n){return this.premultiply(nh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nh=new Xe;function yx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ka(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function dw(){const t=ka("canvas");return t.style.display="block",t}const gg={};function pw(t){t in gg||(gg[t]=!0,console.warn(t))}const vg=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_g=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vl={[dr]:{transfer:kc,primaries:zc,toReference:t=>t,fromReference:t=>t},[En]:{transfer:ht,primaries:zc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[du]:{transfer:kc,primaries:Bc,toReference:t=>t.applyMatrix3(_g),fromReference:t=>t.applyMatrix3(vg)},[Qd]:{transfer:ht,primaries:Bc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(_g),fromReference:t=>t.applyMatrix3(vg).convertLinearToSRGB()}},mw=new Set([dr,du]),rt={enabled:!0,_workingColorSpace:dr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!mw.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=vl[e].toReference,r=vl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return vl[t].primaries},getTransfer:function(t){return t===qn?kc:vl[t].transfer}};function js(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ih(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Qr;class gw{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qr===void 0&&(Qr=ka("canvas")),Qr.width=e.width,Qr.height=e.height;const i=Qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Qr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ka("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=js(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(js(n[i]/255)*255):n[i]=js(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vw=0;class Sx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vw++}),this.uuid=Xr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rh(r[o].image)):s.push(rh(r[o]))}else s=rh(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function rh(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?gw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _w=0;class jt extends uo{constructor(e=jt.DEFAULT_IMAGE,n=jt.DEFAULT_MAPPING,i=Ir,r=Ir,s=dn,o=wi,a=ri,l=cr,c=jt.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_w++}),this.uuid=Xr(),this.name="",this.source=new Sx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Di:e.x=e.x-Math.floor(e.x);break;case Ir:e.x=e.x<0?0:1;break;case Gf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Di:e.y=e.y-Math.floor(e.y);break;case Ir:e.y=e.y<0?0:1;break;case Gf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=cx;jt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,n=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,y=(p+1)/2,C=(d+1)/2,T=(u+f)/4,A=(h+_)/4,L=(g+m)/4;return v>y&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=A/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=L/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=L/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-_)/x,this.z=(f-u)/x,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xw extends uo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new _t(0,0,e,n),this.scissorTest=!1,this.viewport=new _t(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Sx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vr extends xw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Mx extends jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yw extends jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ya{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-a;const d=l*f+c*p+u*g+h*_,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const C=Math.sqrt(v),T=Math.atan2(C,d*x);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const y=a*x;if(l=l*m+f*y,c=c*m+p*y,u=u*m+g*y,h=h*m+_*y,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*h+l*p-c*f,e[n+1]=l*g+u*f+c*h-a*p,e[n+2]=c*g+u*p+a*f-l*h,e[n+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(xg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(xg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sh.copy(this).projectOnVector(e),this.sub(sh)}reflect(e){return this.sub(sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sh=new I,xg=new Ya;class pr{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(s,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_l.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_l.copy(i.boundingBox)),_l.applyMatrix4(e.matrixWorld),this.union(_l)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),xl.subVectors(this.max,Lo),es.subVectors(e.a,Lo),ts.subVectors(e.b,Lo),ns.subVectors(e.c,Lo),ki.subVectors(ts,es),zi.subVectors(ns,ts),_r.subVectors(es,ns);let n=[0,-ki.z,ki.y,0,-zi.z,zi.y,0,-_r.z,_r.y,ki.z,0,-ki.x,zi.z,0,-zi.x,_r.z,0,-_r.x,-ki.y,ki.x,0,-zi.y,zi.x,0,-_r.y,_r.x,0];return!oh(n,es,ts,ns,xl)||(n=[1,0,0,0,1,0,0,0,1],!oh(n,es,ts,ns,xl))?!1:(yl.crossVectors(ki,zi),n=[yl.x,yl.y,yl.z],oh(n,es,ts,ns,xl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new I,new I,new I,new I,new I,new I,new I,new I],Vn=new I,_l=new pr,es=new I,ts=new I,ns=new I,ki=new I,zi=new I,_r=new I,Lo=new I,xl=new I,yl=new I,xr=new I;function oh(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){xr.fromArray(t,s);const a=r.x*Math.abs(xr.x)+r.y*Math.abs(xr.y)+r.z*Math.abs(xr.z),l=e.dot(xr),c=n.dot(xr),u=i.dot(xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Sw=new pr,No=new I,ah=new I;class ho{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Sw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const n=No.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(No,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(ah)),this.expandByPoint(No.copy(e.center).sub(ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new I,lh=new I,Sl=new I,Bi=new I,ch=new I,Ml=new I,uh=new I;class wx{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,n),di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){lh.copy(e).add(n).multiplyScalar(.5),Sl.copy(n).sub(e).normalize(),Bi.copy(this.origin).sub(lh);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Sl),a=Bi.dot(this.direction),l=-Bi.dot(Sl),c=Bi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(lh).addScaledVector(Sl,f),p}intersectSphere(e,n){di.subVectors(e.center,this.origin);const i=di.dot(this.direction),r=di.dot(di)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,n,i,r,s){ch.subVectors(n,e),Ml.subVectors(i,e),uh.crossVectors(ch,Ml);let o=this.direction.dot(uh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);const l=a*this.direction.dot(Ml.crossVectors(Bi,Ml));if(l<0)return null;const c=a*this.direction.dot(ch.cross(Bi));if(c<0||l+c>o)return null;const u=-a*Bi.dot(uh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,n,i,r,s,o,a,l,c,u,h,f,p,g,_,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,f,p,g,_,m)}set(e,n,i,r,s,o,a,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/is.setFromMatrixColumn(e,0).length(),s=1/is.setFromMatrixColumn(e,1).length(),o=1/is.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,_=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=f-_*c,n[9]=-a*l,n[2]=_-f*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;n[0]=f+_*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=_+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;n[0]=f-_*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=_-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,_=a*h;n[0]=l*u,n[4]=g*c-p,n[8]=f*c+_,n[1]=l*h,n[5]=_*c+f,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-f*h,n[8]=g*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+g,n[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+_,n[5]=o*u,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*u,n[10]=_*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mw,e,ww)}lookAt(e,n,i){const r=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Hi.crossVectors(i,yn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Hi.crossVectors(i,yn)),Hi.normalize(),wl.crossVectors(yn,Hi),r[0]=Hi.x,r[4]=wl.x,r[8]=yn.x,r[1]=Hi.y,r[5]=wl.y,r[9]=yn.y,r[2]=Hi.z,r[6]=wl.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],x=i[3],v=i[7],y=i[11],C=i[15],T=r[0],A=r[4],L=r[8],w=r[12],M=r[1],U=r[5],H=r[9],D=r[13],B=r[2],$=r[6],Z=r[10],Q=r[14],N=r[3],j=r[7],q=r[11],ne=r[15];return s[0]=o*T+a*M+l*B+c*N,s[4]=o*A+a*U+l*$+c*j,s[8]=o*L+a*H+l*Z+c*q,s[12]=o*w+a*D+l*Q+c*ne,s[1]=u*T+h*M+f*B+p*N,s[5]=u*A+h*U+f*$+p*j,s[9]=u*L+h*H+f*Z+p*q,s[13]=u*w+h*D+f*Q+p*ne,s[2]=g*T+_*M+m*B+d*N,s[6]=g*A+_*U+m*$+d*j,s[10]=g*L+_*H+m*Z+d*q,s[14]=g*w+_*D+m*Q+d*ne,s[3]=x*T+v*M+y*B+C*N,s[7]=x*A+v*U+y*$+C*j,s[11]=x*L+v*H+y*Z+C*q,s[15]=x*w+v*D+y*Q+C*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*p-i*l*p)+_*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*h+n*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],x=h*m*c-_*f*c+_*l*p-a*m*p-h*l*d+a*f*d,v=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,y=u*_*c-g*h*c+g*a*p-o*_*p-u*a*d+o*h*d,C=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,T=n*x+i*v+r*y+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=x*A,e[1]=(_*f*s-h*m*s-_*r*p+i*m*p+h*r*d-i*f*d)*A,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*d+i*l*d)*A,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*A,e[4]=v*A,e[5]=(u*m*s-g*f*s+g*r*p-n*m*p-u*r*d+n*f*d)*A,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*d-n*l*d)*A,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*A,e[8]=y*A,e[9]=(g*h*s-u*_*s-g*i*p+n*_*p+u*i*d-n*h*d)*A,e[10]=(o*_*s-g*a*s+g*i*c-n*_*c-o*i*d+n*a*d)*A,e[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*p-n*a*p)*A,e[12]=C*A,e[13]=(u*_*r-g*h*r+g*i*f-n*_*f-u*i*m+n*h*m)*A,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*A,e[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*f+n*a*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,_=o*u,m=o*h,d=a*h,x=l*c,v=l*u,y=l*h,C=i.x,T=i.y,A=i.z;return r[0]=(1-(_+d))*C,r[1]=(p+y)*C,r[2]=(g-v)*C,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(f+d))*T,r[6]=(m+x)*T,r[7]=0,r[8]=(g+v)*A,r[9]=(m-x)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=is.set(r[0],r[1],r[2]).length();const o=is.set(r[4],r[5],r[6]).length(),a=is.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const c=1/s,u=1/o,h=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=h,Gn.elements[9]*=h,Gn.elements[10]*=h,n.setFromRotationMatrix(Gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ti){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let p,g;if(a===Ti)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Hc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ti){const l=this.elements,c=1/(n-e),u=1/(i-r),h=1/(o-s),f=(n+e)*c,p=(i+r)*u;let g,_;if(a===Ti)g=(o+s)*h,_=-2*h;else if(a===Hc)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const is=new I,Gn=new ot,Mw=new I(0,0,0),ww=new I(1,1,1),Hi=new I,wl=new I,yn=new I,yg=new ot,Sg=new Ya;class li{constructor(e=0,n=0,i=0,r=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return yg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sg.setFromEuler(this),this.setFromQuaternion(Sg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class Ex{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ew=0;const Mg=new I,rs=new Ya,pi=new ot,El=new I,Do=new I,Tw=new I,Aw=new Ya,wg=new I(1,0,0),Eg=new I(0,1,0),Tg=new I(0,0,1),Ag={type:"added"},bw={type:"removed"},ss={type:"childadded",child:null},hh={type:"childremoved",child:null};class Nt extends uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ew++}),this.uuid=Xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new I,n=new li,i=new Ya,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Xe}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ex,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return rs.setFromAxisAngle(e,n),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,n){return rs.setFromAxisAngle(e,n),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(wg,e)}rotateY(e){return this.rotateOnAxis(Eg,e)}rotateZ(e){return this.rotateOnAxis(Tg,e)}translateOnAxis(e,n){return Mg.copy(e).applyQuaternion(this.quaternion),this.position.add(Mg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wg,e)}translateY(e){return this.translateOnAxis(Eg,e)}translateZ(e){return this.translateOnAxis(Tg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?El.copy(e):El.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Do,El,this.up):pi.lookAt(El,Do,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),rs.setFromRotationMatrix(pi),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ag),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bw),hh.child=e,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ag),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,Tw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,Aw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new I(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new I,mi=new I,fh=new I,gi=new I,os=new I,as=new I,bg=new I,dh=new I,ph=new I,mh=new I;class Yn{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Wn.subVectors(e,n),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Wn.subVectors(r,n),mi.subVectors(i,n),fh.subVectors(e,n);const o=Wn.dot(Wn),a=Wn.dot(mi),l=Wn.dot(fh),c=mi.dot(mi),u=mi.dot(fh),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static isFrontFacing(e,n,i,r){return Wn.subVectors(i,n),mi.subVectors(e,n),Wn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Wn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;os.subVectors(r,i),as.subVectors(s,i),dh.subVectors(e,i);const l=os.dot(dh),c=as.dot(dh);if(l<=0&&c<=0)return n.copy(i);ph.subVectors(e,r);const u=os.dot(ph),h=as.dot(ph);if(u>=0&&h<=u)return n.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(os,o);mh.subVectors(e,s);const p=os.dot(mh),g=as.dot(mh);if(g>=0&&p<=g)return n.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(as,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return bg.subVectors(s,r),a=(h-u)/(h-u+(p-g)),n.copy(r).addScaledVector(bg,a);const d=1/(m+_+f);return o=_*d,a=f*d,n.copy(i).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function gh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=ep(e,1),n=Pt(n,0,1),i=Pt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=gh(o,s,e+1/3),this.g=gh(o,s,e),this.b=gh(o,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,n=En){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=En){const i=Tx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}copyLinearToSRGB(e){return this.r=ih(e.r),this.g=ih(e.g),this.b=ih(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return rt.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Pt(Kt.r*255,0,255))*65536+Math.round(Pt(Kt.g*255,0,255))*256+Math.round(Pt(Kt.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.fromWorkingColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,s=Kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=rt.workingColorSpace){return rt.fromWorkingColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=En){rt.fromWorkingColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==En?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+n,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Vi),e.getHSL(Tl);const i=fa(Vi.h,Tl.h,n),r=fa(Vi.s,Tl.s,n),s=fa(Vi.l,Tl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new We;We.NAMES=Tx;let Cw=0;class qr extends uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cw++}),this.uuid=Xr(),this.name="",this.type="Material",this.blending=Vs,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zf,this.blendDst=Bf,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Oc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zf&&(i.blendSrc=this.blendSrc),this.blendDst!==Bf&&(i.blendDst=this.blendDst),this.blendEquation!==Rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Oc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pu extends qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=ax,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new I,Al=new fe;class Jn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=dg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return pw("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Al.fromBufferAttribute(this,n),Al.applyMatrix3(e),this.setXY(n,Al.x,Al.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ys(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ys(n,this.array)),n}setX(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ys(n,this.array)),n}setY(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ys(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ys(n,this.array)),n}setW(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dg&&(e.usage=this.usage),e}}class Ax extends Jn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class bx extends Jn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class tt extends Jn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Rw=0;const Dn=new ot,vh=new Nt,ls=new I,Sn=new pr,Io=new pr,Ot=new I;class Ut extends uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rw++}),this.uuid=Xr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yx(e)?bx:Ax)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return vh.lookAt(e),vh.updateMatrix(),this.applyMatrix4(vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ho);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(Sn.min,Io.min),Sn.expandByPoint(Ot),Ot.addVectors(Sn.max,Io.max),Sn.expandByPoint(Ot)):(Sn.expandByPoint(Io.min),Sn.expandByPoint(Io.max))}Sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ot.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(e,c),Ot.add(ls)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new I,l[L]=new I;const c=new I,u=new I,h=new I,f=new fe,p=new fe,g=new fe,_=new I,m=new I;function d(L,w,M){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),f.fromBufferAttribute(s,L),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,M),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(U),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(U),a[L].add(_),a[w].add(_),a[M].add(_),l[L].add(m),l[w].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let L=0,w=x.length;L<w;++L){const M=x[L],U=M.start,H=M.count;for(let D=U,B=U+H;D<B;D+=3)d(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const v=new I,y=new I,C=new I,T=new I;function A(L){C.fromBufferAttribute(r,L),T.copy(C);const w=a[L];v.copy(w),v.sub(C.multiplyScalar(C.dot(w))).normalize(),y.crossVectors(T,w);const U=y.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,U)}for(let L=0,w=x.length;L<w;++L){const M=x[L],U=M.start,H=M.count;for(let D=U,B=U+H;D<B;D+=3)A(e.getX(D+0)),A(e.getX(D+1)),A(e.getX(D+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Jn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ut,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cg=new ot,yr=new wx,bl=new ho,Rg=new I,cs=new I,us=new I,hs=new I,_h=new I,Cl=new I,Rl=new fe,Pl=new fe,Ll=new fe,Pg=new I,Lg=new I,Ng=new I,Nl=new I,Dl=new I;class et extends Nt{constructor(e=new Ut,n=new pu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Cl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(_h.fromBufferAttribute(h,e),o?Cl.addScaledVector(_h,u):Cl.addScaledVector(_h.sub(n),u))}n.add(Cl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bl.copy(i.boundingSphere),bl.applyMatrix4(s),yr.copy(e.ray).recast(e.near),!(bl.containsPoint(yr.origin)===!1&&(yr.intersectSphere(bl,Rg)===null||yr.origin.distanceToSquared(Rg)>(e.far-e.near)**2))&&(Cg.copy(s).invert(),yr.copy(e.ray).applyMatrix4(Cg),!(i.boundingBox!==null&&yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,yr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,C=v;y<C;y+=3){const T=a.getX(y),A=a.getX(y+1),L=a.getX(y+2);r=Il(this,d,e,i,c,u,h,T,A,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const x=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=Il(this,o,e,i,c,u,h,x,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,C=v;y<C;y+=3){const T=y,A=y+1,L=y+2;r=Il(this,d,e,i,c,u,h,T,A,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const x=m,v=m+1,y=m+2;r=Il(this,o,e,i,c,u,h,x,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Pw(t,e,n,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ni,a),l===null)return null;Dl.copy(a),Dl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Dl);return c<n.near||c>n.far?null:{distance:c,point:Dl.clone(),object:t}}function Il(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,cs),t.getVertexPosition(l,us),t.getVertexPosition(c,hs);const u=Pw(t,e,n,i,cs,us,hs,Nl);if(u){r&&(Rl.fromBufferAttribute(r,a),Pl.fromBufferAttribute(r,l),Ll.fromBufferAttribute(r,c),u.uv=Yn.getInterpolation(Nl,cs,us,hs,Rl,Pl,Ll,new fe)),s&&(Rl.fromBufferAttribute(s,a),Pl.fromBufferAttribute(s,l),Ll.fromBufferAttribute(s,c),u.uv1=Yn.getInterpolation(Nl,cs,us,hs,Rl,Pl,Ll,new fe)),o&&(Pg.fromBufferAttribute(o,a),Lg.fromBufferAttribute(o,l),Ng.fromBufferAttribute(o,c),u.normal=Yn.getInterpolation(Nl,cs,us,hs,Pg,Lg,Ng,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};Yn.getNormal(cs,us,hs,h.normal),u.face=h}return u}class Yr extends Ut{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(h,2));function g(_,m,d,x,v,y,C,T,A,L,w){const M=y/A,U=C/L,H=y/2,D=C/2,B=T/2,$=A+1,Z=L+1;let Q=0,N=0;const j=new I;for(let q=0;q<Z;q++){const ne=q*U-D;for(let me=0;me<$;me++){const Pe=me*M-H;j[_]=Pe*x,j[m]=ne*v,j[d]=B,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[d]=T>0?1:-1,u.push(j.x,j.y,j.z),h.push(me/A),h.push(1-q/L),Q+=1}}for(let q=0;q<L;q++)for(let ne=0;ne<A;ne++){const me=f+ne+$*q,Pe=f+ne+$*(q+1),W=f+(ne+1)+$*(q+1),re=f+(ne+1)+$*q;l.push(me,Pe,re),l.push(Pe,W,re),N+=6}a.addGroup(p,N,w),p+=N,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function so(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function sn(t){const e={};for(let n=0;n<t.length;n++){const i=so(t[n]);for(const r in i)e[r]=i[r]}return e}function Lw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Cx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Nw={clone:so,merge:sn};var Dw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dw,this.fragmentShader=Iw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=Lw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Rx extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Ti}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new I,Dg=new fe,Ig=new fe;class fn extends Rx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Oa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oa*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,n){return this.getViewBounds(e,Dg,Ig),n.subVectors(Ig,Dg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ws*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const fs=-90,ds=1;class Uw extends Nt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(fs,ds,e,n);r.layers=this.layers,this.add(r);const s=new fn(fs,ds,e,n);s.layers=this.layers,this.add(s);const o=new fn(fs,ds,e,n);o.layers=this.layers,this.add(o);const a=new fn(fs,ds,e,n);a.layers=this.layers,this.add(a);const l=new fn(fs,ds,e,n);l.layers=this.layers,this.add(l);const c=new fn(fs,ds,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Px extends jt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:no,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lx extends Vr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Px(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:dn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Yr(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:so(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:sr});s.uniforms.tEquirect.value=n;const o=new et(r,s),a=n.minFilter;return n.minFilter===wi&&(n.minFilter=dn),new Uw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const xh=new I,Fw=new I,Ow=new Xe;class br{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=xh.subVectors(i,n).cross(Fw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(xh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ow.getNormalMatrix(e),r=this.coplanarPoint(xh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new ho,Ul=new I;class tp{constructor(e=new br,n=new br,i=new br,r=new br,s=new br,o=new br){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ti){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],x=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,f-c,m-p,y-d).normalize(),i[1].setComponents(l+s,f+c,m+p,y+d).normalize(),i[2].setComponents(l+o,f+u,m+g,y+x).normalize(),i[3].setComponents(l-o,f-u,m-g,y-x).normalize(),i[4].setComponents(l-a,f-h,m-_,y-v).normalize(),n===Ti)i[5].setComponents(l+a,f+h,m+_,y+v).normalize();else if(n===Hc)i[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ul.x=r.normal.x>0?e.max.x:e.min.x,Ul.y=r.normal.y>0?e.max.y:e.min.y,Ul.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function kw(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,a),h.count===-1&&f.length===0&&t.bufferSubData(c,0,u),f.length!==0){for(let p=0,g=f.length;p<g;p++){const _=f[p];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Zr extends Ut{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=n/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const x=d*f-o;for(let v=0;v<c;v++){const y=v*h-s;g.push(y,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const v=x+c*d,y=x+c*(d+1),C=x+1+c*(d+1),T=x+1+c*d;p.push(v,y,T),p.push(y,C,T)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.width,e.height,e.widthSegments,e.heightSegments)}}var zw=`#ifdef USE_ALPHAHASH
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
#endif`,jw=`#ifdef USE_AOMAP
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
#endif`,$w=`#ifdef USE_AOMAP
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
#endif`,fE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dE=`#ifdef USE_EMISSIVEMAP
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
material.diffuseColor = diffuseColor.rgb;`,DE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IE=`BlinnPhongMaterial material;
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
#endif`,jE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$E=`#ifdef USE_MAP
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
#endif`,fT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,DT=`#ifdef USE_TRANSMISSION
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
#endif`,IT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
}`,jT=`#if DEPTH_PACKING == 3200
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
}`,$T=`#define DISTANCE
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
}`,fA=`uniform float size;
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
}`,dA=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:zw,alphahash_pars_fragment:Bw,alphamap_fragment:Hw,alphamap_pars_fragment:Vw,alphatest_fragment:Gw,alphatest_pars_fragment:Ww,aomap_fragment:jw,aomap_pars_fragment:$w,batching_pars_vertex:Xw,batching_vertex:qw,begin_vertex:Yw,beginnormal_vertex:Zw,bsdfs:Kw,iridescence_fragment:Jw,bumpmap_pars_fragment:Qw,clipping_planes_fragment:eE,clipping_planes_pars_fragment:tE,clipping_planes_pars_vertex:nE,clipping_planes_vertex:iE,color_fragment:rE,color_pars_fragment:sE,color_pars_vertex:oE,color_vertex:aE,common:lE,cube_uv_reflection_fragment:cE,defaultnormal_vertex:uE,displacementmap_pars_vertex:hE,displacementmap_vertex:fE,emissivemap_fragment:dE,emissivemap_pars_fragment:pE,colorspace_fragment:mE,colorspace_pars_fragment:gE,envmap_fragment:vE,envmap_common_pars_fragment:_E,envmap_pars_fragment:xE,envmap_pars_vertex:yE,envmap_physical_pars_fragment:LE,envmap_vertex:SE,fog_vertex:ME,fog_pars_vertex:wE,fog_fragment:EE,fog_pars_fragment:TE,gradientmap_pars_fragment:AE,lightmap_pars_fragment:bE,lights_lambert_fragment:CE,lights_lambert_pars_fragment:RE,lights_pars_begin:PE,lights_toon_fragment:NE,lights_toon_pars_fragment:DE,lights_phong_fragment:IE,lights_phong_pars_fragment:UE,lights_physical_fragment:FE,lights_physical_pars_fragment:OE,lights_fragment_begin:kE,lights_fragment_maps:zE,lights_fragment_end:BE,logdepthbuf_fragment:HE,logdepthbuf_pars_fragment:VE,logdepthbuf_pars_vertex:GE,logdepthbuf_vertex:WE,map_fragment:jE,map_pars_fragment:$E,map_particle_fragment:XE,map_particle_pars_fragment:qE,metalnessmap_fragment:YE,metalnessmap_pars_fragment:ZE,morphinstance_vertex:KE,morphcolor_vertex:JE,morphnormal_vertex:QE,morphtarget_pars_vertex:eT,morphtarget_vertex:tT,normal_fragment_begin:nT,normal_fragment_maps:iT,normal_pars_fragment:rT,normal_pars_vertex:sT,normal_vertex:oT,normalmap_pars_fragment:aT,clearcoat_normal_fragment_begin:lT,clearcoat_normal_fragment_maps:cT,clearcoat_pars_fragment:uT,iridescence_pars_fragment:hT,opaque_fragment:fT,packing:dT,premultiplied_alpha_fragment:pT,project_vertex:mT,dithering_fragment:gT,dithering_pars_fragment:vT,roughnessmap_fragment:_T,roughnessmap_pars_fragment:xT,shadowmap_pars_fragment:yT,shadowmap_pars_vertex:ST,shadowmap_vertex:MT,shadowmask_pars_fragment:wT,skinbase_vertex:ET,skinning_pars_vertex:TT,skinning_vertex:AT,skinnormal_vertex:bT,specularmap_fragment:CT,specularmap_pars_fragment:RT,tonemapping_fragment:PT,tonemapping_pars_fragment:LT,transmission_fragment:NT,transmission_pars_fragment:DT,uv_pars_fragment:IT,uv_pars_vertex:UT,uv_vertex:FT,worldpos_vertex:OT,background_vert:kT,background_frag:zT,backgroundCube_vert:BT,backgroundCube_frag:HT,cube_vert:VT,cube_frag:GT,depth_vert:WT,depth_frag:jT,distanceRGBA_vert:$T,distanceRGBA_frag:XT,equirect_vert:qT,equirect_frag:YT,linedashed_vert:ZT,linedashed_frag:KT,meshbasic_vert:JT,meshbasic_frag:QT,meshlambert_vert:eA,meshlambert_frag:tA,meshmatcap_vert:nA,meshmatcap_frag:iA,meshnormal_vert:rA,meshnormal_frag:sA,meshphong_vert:oA,meshphong_frag:aA,meshphysical_vert:lA,meshphysical_frag:cA,meshtoon_vert:uA,meshtoon_frag:hA,points_vert:fA,points_frag:dA,shadow_vert:pA,shadow_frag:mA,sprite_vert:gA,sprite_frag:vA},ye={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ni={basic:{uniforms:sn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:sn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new We(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:sn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:sn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:sn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new We(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:sn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:sn([ye.points,ye.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:sn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:sn([ye.common,ye.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:sn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:sn([ye.sprite,ye.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:sn([ye.common,ye.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:sn([ye.lights,ye.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ni.physical={uniforms:sn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Fl={r:0,b:0,g:0},Mr=new li,_A=new ot;function xA(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?n:e).get(v)),v}function _(x){let v=!1;const y=g(x);y===null?d(a,l):y&&y.isColor&&(d(y,1),v=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function m(x,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===hu)?(u===void 0&&(u=new et(new Yr(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:so(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Mr.copy(v.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_A.makeRotationFromEuler(Mr)),u.material.toneMapped=rt.getTransfer(y.colorSpace)!==ht,(h!==y||f!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,p=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new et(new Zr(2,2),new Ii({name:"BackgroundMaterial",uniforms:so(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=rt.getTransfer(y.colorSpace)!==ht,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function d(x,v){x.getRGB(Fl,Cx(t)),i.buffers.color.setClear(Fl.r,Fl.g,Fl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(a,l)},render:_,addToRenderList:m}}function yA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,U,H,D,B){let $=!1;const Z=h(D,H,U);s!==Z&&(s=Z,c(s.object)),$=p(M,D,H,B),$&&g(M,D,H,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(M,U,H,D),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function h(M,U,H){const D=H.wireframe===!0;let B=i[M.id];B===void 0&&(B={},i[M.id]=B);let $=B[U.id];$===void 0&&($={},B[U.id]=$);let Z=$[D];return Z===void 0&&(Z=f(l()),$[D]=Z),Z}function f(M){const U=[],H=[],D=[];for(let B=0;B<n;B++)U[B]=0,H[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:D,object:M,attributes:{},index:null}}function p(M,U,H,D){const B=s.attributes,$=U.attributes;let Z=0;const Q=H.getAttributes();for(const N in Q)if(Q[N].location>=0){const q=B[N];let ne=$[N];if(ne===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),q===void 0||q.attribute!==ne||ne&&q.data!==ne.data)return!0;Z++}return s.attributesNum!==Z||s.index!==D}function g(M,U,H,D){const B={},$=U.attributes;let Z=0;const Q=H.getAttributes();for(const N in Q)if(Q[N].location>=0){let q=$[N];q===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(q=M.instanceColor));const ne={};ne.attribute=q,q&&q.data&&(ne.data=q.data),B[N]=ne,Z++}s.attributes=B,s.attributesNum=Z,s.index=D}function _(){const M=s.newAttributes;for(let U=0,H=M.length;U<H;U++)M[U]=0}function m(M){d(M,0)}function d(M,U){const H=s.newAttributes,D=s.enabledAttributes,B=s.attributeDivisors;H[M]=1,D[M]===0&&(t.enableVertexAttribArray(M),D[M]=1),B[M]!==U&&(t.vertexAttribDivisor(M,U),B[M]=U)}function x(){const M=s.newAttributes,U=s.enabledAttributes;for(let H=0,D=U.length;H<D;H++)U[H]!==M[H]&&(t.disableVertexAttribArray(H),U[H]=0)}function v(M,U,H,D,B,$,Z){Z===!0?t.vertexAttribIPointer(M,U,H,B,$):t.vertexAttribPointer(M,U,H,D,B,$)}function y(M,U,H,D){_();const B=D.attributes,$=H.getAttributes(),Z=U.defaultAttributeValues;for(const Q in $){const N=$[Q];if(N.location>=0){let j=B[Q];if(j===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(j=M.instanceColor)),j!==void 0){const q=j.normalized,ne=j.itemSize,me=e.get(j);if(me===void 0)continue;const Pe=me.buffer,W=me.type,re=me.bytesPerElement,pe=W===t.INT||W===t.UNSIGNED_INT||j.gpuType===hx;if(j.isInterleavedBufferAttribute){const ce=j.data,Ee=ce.stride,Oe=j.offset;if(ce.isInstancedInterleavedBuffer){for(let O=0;O<N.locationSize;O++)d(N.location+O,ce.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let O=0;O<N.locationSize;O++)m(N.location+O);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let O=0;O<N.locationSize;O++)v(N.location+O,ne/N.locationSize,W,q,Ee*re,(Oe+ne/N.locationSize*O)*re,pe)}else{if(j.isInstancedBufferAttribute){for(let ce=0;ce<N.locationSize;ce++)d(N.location+ce,j.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ce=0;ce<N.locationSize;ce++)m(N.location+ce);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let ce=0;ce<N.locationSize;ce++)v(N.location+ce,ne/N.locationSize,W,q,ne*re,ne/N.locationSize*ce*re,pe)}}else if(Z!==void 0){const q=Z[Q];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(N.location,q);break;case 3:t.vertexAttrib3fv(N.location,q);break;case 4:t.vertexAttrib4fv(N.location,q);break;default:t.vertexAttrib1fv(N.location,q)}}}}x()}function C(){L();for(const M in i){const U=i[M];for(const H in U){const D=U[H];for(const B in D)u(D[B].object),delete D[B];delete U[H]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const U=i[M.id];for(const H in U){const D=U[H];for(const B in D)u(D[B].object),delete D[B];delete U[H]}delete i[M.id]}function A(M){for(const U in i){const H=i[U];if(H[M.id]===void 0)continue;const D=H[M.id];for(const B in D)u(D[B].object),delete D[B];delete H[M.id]}}function L(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function SA(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<h;p++)this.render(c[p],u[p]);else{f.multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];n.update(p,i,1)}}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<f.length;_++)n.update(g,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function MA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==ri&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const A=T===fu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==cr&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ei&&!A)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:y,maxSamples:C}}function wA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new br,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const x=s?0:i,v=x*4;let y=d.clippingState||null;l.value=y,y=u(g,f,v,p);for(let C=0;C!==v;++C)y[C]=n[C];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,y=p;v!==_;++v,y+=4)o.copy(h[v]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function EA(t){let e=new WeakMap;function n(o,a){return a===Hf?o.mapping=no:a===Vf&&(o.mapping=io),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hf||a===Vf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lx(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Dx extends Rx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Is=4,Ug=[.125,.215,.35,.446,.526,.582],Pr=20,yh=new Dx,Fg=new We;let Sh=null,Mh=0,wh=0,Eh=!1;const Cr=(1+Math.sqrt(5))/2,ps=1/Cr,Og=[new I(-Cr,ps,0),new I(Cr,ps,0),new I(-ps,0,Cr),new I(ps,0,Cr),new I(0,Cr,-ps),new I(0,Cr,ps),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Wf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Sh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sh,Mh,wh),this._renderer.xr.enabled=Eh,e.scissorTest=!1,Ol(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===no||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:fu,format:ri,colorSpace:dr,depthBuffer:!1},r=kg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TA(s)),this._blurMaterial=AA(s,e,n)}return r}_compileMaterial(e){const n=new et(this._lodPlanes[0],e);this._renderer.compile(n,yh)}_sceneToCubeUV(e,n,i,r){const a=new fn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Fg),u.toneMapping=or,u.autoClear=!1;const p=new pu({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new et(new Yr,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Fg),_=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):x===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;Ol(r,x*v,d>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===no||e.mapping===io;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ol(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,yh)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Og[(r-s-1)%Og.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new et(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Pr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Pr;m>Pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pr}`);const d=[];let x=0;for(let A=0;A<Pr;++A){const L=A/_,w=Math.exp(-L*L/2);d.push(w),A===0?x+=w:A<m&&(x+=2*w)}for(let A=0;A<d.length;A++)d[A]=d[A]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const y=this._sizeLods[r],C=3*y*(r>v-Is?r-v+Is:0),T=4*(this._cubeSize-y);Ol(n,C,T,3*y,2*y),l.setRenderTarget(n),l.render(h,yh)}}function TA(t){const e=[],n=[],i=[];let r=t;const s=t-Is+1+Ug.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Is?l=Ug[o-t+Is-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,x=new Float32Array(_*g*p),v=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,L=T>2?0:-1,w=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];x.set(w,_*g*T),v.set(f,m*g*T);const M=[T,T,T,T,T,T];y.set(M,d*g*T)}const C=new Ut;C.setAttribute("position",new Jn(x,_)),C.setAttribute("uv",new Jn(v,m)),C.setAttribute("faceIndex",new Jn(y,d)),e.push(C),r>Is&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function kg(t,e,n){const i=new Vr(t,e,n);return i.texture.mapping=hu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ol(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function AA(t,e,n){const i=new Float32Array(Pr),r=new I(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:np(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function zg(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:np(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Bg(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function np(){return`

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
	`}function bA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hf||l===Vf,u=l===no||l===io;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Wf(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Wf(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function CA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function RA(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let v=0,y=x.length;v<y;v+=3){const C=x[v+0],T=x[v+1],A=x[v+2];f.push(C,T,T,A,A,C)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const C=v+0,T=v+1,A=v+2;f.push(C,T,T,A,A,C)}}else return;const m=new(yx(f)?bx:Ax)(f,1);m.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function PA(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,f*o,g),n.update(p,i,g))}function u(f,p,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(f[m]/o,p[m]);else{_.multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];n.update(m,i,1)}}function h(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let d=0;for(let x=0;x<g;x++)d+=p[x];for(let x=0;x<_.length;x++)n.update(d,i,_[x])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function LA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function NA(t,e,n){const i=new WeakMap,r=new _t;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let M=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*T*4*h),L=new Mx(A,C,T,h);L.type=Ei,L.needsUpdate=!0;const w=y*4;for(let U=0;U<h;U++){const H=d[U],D=x[U],B=v[U],$=C*T*4*U;for(let Z=0;Z<H.count;Z++){const Q=Z*w;g===!0&&(r.fromBufferAttribute(H,Z),A[$+Q+0]=r.x,A[$+Q+1]=r.y,A[$+Q+2]=r.z,A[$+Q+3]=0),_===!0&&(r.fromBufferAttribute(D,Z),A[$+Q+4]=r.x,A[$+Q+5]=r.y,A[$+Q+6]=r.z,A[$+Q+7]=0),m===!0&&(r.fromBufferAttribute(B,Z),A[$+Q+8]=r.x,A[$+Q+9]=r.y,A[$+Q+10]=r.z,A[$+Q+11]=B.itemSize===4?r.w:1)}}f={count:h,texture:L,size:new fe(C,T)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function DA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Ix extends jt{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Gs,u!==Gs&&u!==Fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Gs&&(i=ro),i===void 0&&u===Fa&&(i=qa),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ux=new jt,Fx=new Ix(1,1);Fx.compareFunction=xx;const Ox=new Mx,kx=new yw,zx=new Px,Hg=[],Vg=[],Gg=new Float32Array(16),Wg=new Float32Array(9),jg=new Float32Array(4);function fo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Hg[r];if(s===void 0&&(s=new Float32Array(r),Hg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mu(t,e){let n=Vg[e];n===void 0&&(n=new Int32Array(e),Vg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function IA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function UA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function FA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function OA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function kA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;jg.set(i),t.uniformMatrix2fv(this.addr,!1,jg),It(n,i)}}function zA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;Wg.set(i),t.uniformMatrix3fv(this.addr,!1,Wg),It(n,i)}}function BA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;Gg.set(i),t.uniformMatrix4fv(this.addr,!1,Gg),It(n,i)}}function HA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function VA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function GA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function WA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function jA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function $A(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function XA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function qA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function YA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Fx:Ux;n.setTexture2D(e||s,r)}function ZA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||kx,r)}function KA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||zx,r)}function JA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ox,r)}function QA(t){switch(t){case 5126:return IA;case 35664:return UA;case 35665:return FA;case 35666:return OA;case 35674:return kA;case 35675:return zA;case 35676:return BA;case 5124:case 35670:return HA;case 35667:case 35671:return VA;case 35668:case 35672:return GA;case 35669:case 35673:return WA;case 5125:return jA;case 36294:return $A;case 36295:return XA;case 36296:return qA;case 35678:case 36198:case 36298:case 36306:case 35682:return YA;case 35679:case 36299:case 36307:return ZA;case 35680:case 36300:case 36308:case 36293:return KA;case 36289:case 36303:case 36311:case 36292:return JA}}function e2(t,e){t.uniform1fv(this.addr,e)}function t2(t,e){const n=fo(e,this.size,2);t.uniform2fv(this.addr,n)}function n2(t,e){const n=fo(e,this.size,3);t.uniform3fv(this.addr,n)}function i2(t,e){const n=fo(e,this.size,4);t.uniform4fv(this.addr,n)}function r2(t,e){const n=fo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function s2(t,e){const n=fo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function o2(t,e){const n=fo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function a2(t,e){t.uniform1iv(this.addr,e)}function l2(t,e){t.uniform2iv(this.addr,e)}function c2(t,e){t.uniform3iv(this.addr,e)}function u2(t,e){t.uniform4iv(this.addr,e)}function h2(t,e){t.uniform1uiv(this.addr,e)}function f2(t,e){t.uniform2uiv(this.addr,e)}function d2(t,e){t.uniform3uiv(this.addr,e)}function p2(t,e){t.uniform4uiv(this.addr,e)}function m2(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Ux,s[o])}function g2(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||kx,s[o])}function v2(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||zx,s[o])}function _2(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Ox,s[o])}function x2(t){switch(t){case 5126:return e2;case 35664:return t2;case 35665:return n2;case 35666:return i2;case 35674:return r2;case 35675:return s2;case 35676:return o2;case 5124:case 35670:return a2;case 35667:case 35671:return l2;case 35668:case 35672:return c2;case 35669:case 35673:return u2;case 5125:return h2;case 36294:return f2;case 36295:return d2;case 36296:return p2;case 35678:case 36198:case 36298:case 36306:case 35682:return m2;case 35679:case 36299:case 36307:return g2;case 35680:case 36300:case 36308:case 36293:return v2;case 36289:case 36303:case 36311:case 36292:return _2}}class y2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=QA(n.type)}}class S2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=x2(n.type)}}class M2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Th=/(\w+)(\])?(\[|\.)?/g;function $g(t,e){t.seq.push(e),t.map[e.id]=e}function w2(t,e,n){const i=t.name,r=i.length;for(Th.lastIndex=0;;){const s=Th.exec(i),o=Th.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){$g(n,c===void 0?new y2(a,t,e):new S2(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new M2(a),$g(n,h)),n=h}}}class hc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);w2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Xg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const E2=37297;let T2=0;function A2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function b2(t){const e=rt.getPrimaries(rt.workingColorSpace),n=rt.getPrimaries(t);let i;switch(e===n?i="":e===Bc&&n===zc?i="LinearDisplayP3ToLinearSRGB":e===zc&&n===Bc&&(i="LinearSRGBToLinearDisplayP3"),t){case dr:case du:return[i,"LinearTransferOETF"];case En:case Qd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function qg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+A2(t.getShaderSource(e),o)}else return r}function C2(t,e){const n=b2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function R2(t,e){let n;switch(e){case T1:n="Linear";break;case A1:n="Reinhard";break;case b1:n="OptimizedCineon";break;case lx:n="ACESFilmic";break;case R1:n="AgX";break;case P1:n="Neutral";break;case C1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function P2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function L2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function N2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ta(t){return t!==""}function Yg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const D2=/^[ \t]*#include +<([\w\d./]+)>/gm;function jf(t){return t.replace(D2,U2)}const I2=new Map;function U2(t,e){let n=je[e];if(n===void 0){const i=I2.get(e);if(i!==void 0)n=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jf(n)}const F2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kg(t){return t.replace(F2,O2)}function O2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function k2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===sx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ox?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function z2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case no:case io:e="ENVMAP_TYPE_CUBE";break;case hu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function B2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case io:e="ENVMAP_MODE_REFRACTION";break}return e}function H2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ax:e="ENVMAP_BLENDING_MULTIPLY";break;case w1:e="ENVMAP_BLENDING_MIX";break;case E1:e="ENVMAP_BLENDING_ADD";break}return e}function V2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function G2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=k2(n),c=z2(n),u=B2(n),h=H2(n),f=V2(n),p=P2(n),g=L2(s),_=r.createProgram();let m,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ta).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ta).join(`
`),d.length>0&&(d+=`
`)):(m=[Jg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),d=[Jg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==or?"#define TONE_MAPPING":"",n.toneMapping!==or?je.tonemapping_pars_fragment:"",n.toneMapping!==or?R2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,C2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ta).join(`
`)),o=jf(o),o=Yg(o,n),o=Zg(o,n),a=jf(a),a=Yg(a,n),a=Zg(a,n),o=Kg(o),a=Kg(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===pg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===pg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=x+m+o,y=x+d+a,C=Xg(r,r.VERTEX_SHADER,v),T=Xg(r,r.FRAGMENT_SHADER,y);r.attachShader(_,C),r.attachShader(_,T),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(U){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(_).trim(),D=r.getShaderInfoLog(C).trim(),B=r.getShaderInfoLog(T).trim();let $=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,C,T);else{const Q=qg(r,C,"vertex"),N=qg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+H+`
`+Q+`
`+N)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(D===""||B==="")&&(Z=!1);Z&&(U.diagnostics={runnable:$,programLog:H,vertexShader:{log:D,prefix:m},fragmentShader:{log:B,prefix:d}})}r.deleteShader(C),r.deleteShader(T),L=new hc(r,_),w=N2(r,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,E2)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=T2++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}let W2=0;class j2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $2(e),n.set(e,i)),i}}class $2{constructor(e){this.id=W2++,this.code=e,this.usedTimes=0}}function X2(t,e,n,i,r,s,o){const a=new Ex,l=new j2,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,U,H,D){const B=H.fog,$=D.geometry,Z=w.isMeshStandardMaterial?H.environment:null,Q=(w.isMeshStandardMaterial?n:e).get(w.envMap||Z),N=Q&&Q.mapping===hu?Q.image.height:null,j=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const q=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ne=q!==void 0?q.length:0;let me=0;$.morphAttributes.position!==void 0&&(me=1),$.morphAttributes.normal!==void 0&&(me=2),$.morphAttributes.color!==void 0&&(me=3);let Pe,W,re,pe;if(j){const Je=ni[j];Pe=Je.vertexShader,W=Je.fragmentShader}else Pe=w.vertexShader,W=w.fragmentShader,l.update(w),re=l.getVertexShaderID(w),pe=l.getFragmentShaderID(w);const ce=t.getRenderTarget(),Ee=D.isInstancedMesh===!0,Oe=D.isBatchedMesh===!0,O=!!w.map,Ve=!!w.matcap,Y=!!Q,ae=!!w.aoMap,K=!!w.lightMap,he=!!w.bumpMap,ie=!!w.normalMap,Me=!!w.displacementMap,Le=!!w.emissiveMap,R=!!w.metalnessMap,E=!!w.roughnessMap,z=w.anisotropy>0,ee=w.clearcoat>0,te=w.dispersion>0,oe=w.iridescence>0,Ie=w.sheen>0,_e=w.transmission>0,ve=z&&!!w.anisotropyMap,ke=ee&&!!w.clearcoatMap,de=ee&&!!w.clearcoatNormalMap,De=ee&&!!w.clearcoatRoughnessMap,qe=oe&&!!w.iridescenceMap,Fe=oe&&!!w.iridescenceThicknessMap,Te=Ie&&!!w.sheenColorMap,Ge=Ie&&!!w.sheenRoughnessMap,Ye=!!w.specularMap,pt=!!w.specularColorMap,Be=!!w.specularIntensityMap,F=_e&&!!w.transmissionMap,se=_e&&!!w.thicknessMap,J=!!w.gradientMap,Se=!!w.alphaMap,we=w.alphaTest>0,Ke=!!w.alphaHash,st=!!w.extensions;let mt=or;w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(mt=t.toneMapping);const Ft={shaderID:j,shaderType:w.type,shaderName:w.name,vertexShader:Pe,fragmentShader:W,defines:w.defines,customVertexShaderID:re,customFragmentShaderID:pe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Oe,instancing:Ee,instancingColor:Ee&&D.instanceColor!==null,instancingMorph:Ee&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?t.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:dr,alphaToCoverage:!!w.alphaToCoverage,map:O,matcap:Ve,envMap:Y,envMapMode:Y&&Q.mapping,envMapCubeUVHeight:N,aoMap:ae,lightMap:K,bumpMap:he,normalMap:ie,displacementMap:f&&Me,emissiveMap:Le,normalMapObjectSpace:ie&&w.normalMapType===G1,normalMapTangentSpace:ie&&w.normalMapType===_x,metalnessMap:R,roughnessMap:E,anisotropy:z,anisotropyMap:ve,clearcoat:ee,clearcoatMap:ke,clearcoatNormalMap:de,clearcoatRoughnessMap:De,dispersion:te,iridescence:oe,iridescenceMap:qe,iridescenceThicknessMap:Fe,sheen:Ie,sheenColorMap:Te,sheenRoughnessMap:Ge,specularMap:Ye,specularColorMap:pt,specularIntensityMap:Be,transmission:_e,transmissionMap:F,thicknessMap:se,gradientMap:J,opaque:w.transparent===!1&&w.blending===Vs&&w.alphaToCoverage===!1,alphaMap:Se,alphaTest:we,alphaHash:Ke,combine:w.combine,mapUv:O&&_(w.map.channel),aoMapUv:ae&&_(w.aoMap.channel),lightMapUv:K&&_(w.lightMap.channel),bumpMapUv:he&&_(w.bumpMap.channel),normalMapUv:ie&&_(w.normalMap.channel),displacementMapUv:Me&&_(w.displacementMap.channel),emissiveMapUv:Le&&_(w.emissiveMap.channel),metalnessMapUv:R&&_(w.metalnessMap.channel),roughnessMapUv:E&&_(w.roughnessMap.channel),anisotropyMapUv:ve&&_(w.anisotropyMap.channel),clearcoatMapUv:ke&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&_(w.sheenRoughnessMap.channel),specularMapUv:Ye&&_(w.specularMap.channel),specularColorMapUv:pt&&_(w.specularColorMap.channel),specularIntensityMapUv:Be&&_(w.specularIntensityMap.channel),transmissionMapUv:F&&_(w.transmissionMap.channel),thicknessMapUv:se&&_(w.thicknessMap.channel),alphaMapUv:Se&&_(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ie||z),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!$.attributes.uv&&(O||Se),fog:!!B,useFog:w.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:me,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:mt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:O&&w.map.isVideoTexture===!0&&rt.getTransfer(w.map.colorSpace)===ht,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Tn,flipSided:w.side===ln,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:st&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:st&&w.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function d(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const U in w.defines)M.push(U),M.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(x(M,w),v(M,w),M.push(t.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function x(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function v(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),w.push(a.mask)}function y(w){const M=g[w.type];let U;if(M){const H=ni[M];U=Nw.clone(H.uniforms)}else U=w.uniforms;return U}function C(w,M){let U;for(let H=0,D=u.length;H<D;H++){const B=u[H];if(B.cacheKey===M){U=B,++U.usedTimes;break}}return U===void 0&&(U=new G2(t,M,w,s),u.push(U)),U}function T(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:L}}function q2(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Y2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Qg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function e0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,p,g,_,m){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},t[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(h,f){n.length>1&&n.sort(h||Y2),i.length>1&&i.sort(f||Qg),r.length>1&&r.sort(f||Qg)}function u(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Z2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new e0,t.set(i,[o])):r>=s.length?(o=new e0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function K2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new We};break;case"SpotLight":n={position:new I,direction:new I,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function J2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Q2=0;function eb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function tb(t){const e=new K2,n=J2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new ot,o=new ot;function a(c,u){let h=0,f=0,p=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let g=0,_=0,m=0,d=0,x=0,v=0,y=0,C=0,T=0,A=0,L=0;c.sort(eb);const w=u===!0?Math.PI:1;for(let U=0,H=c.length;U<H;U++){const D=c[U],B=D.color,$=D.intensity,Z=D.distance,Q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=B.r*$*w,f+=B.g*$*w,p+=B.b*$*w;else if(D.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(D.sh.coefficients[N],$);L++}else if(D.isDirectionalLight){const N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity*w),D.castShadow){const j=D.shadow,q=n.get(D);q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,i.directionalShadow[g]=q,i.directionalShadowMap[g]=Q,i.directionalShadowMatrix[g]=D.shadow.matrix,v++}i.directional[g]=N,g++}else if(D.isSpotLight){const N=e.get(D);N.position.setFromMatrixPosition(D.matrixWorld),N.color.copy(B).multiplyScalar($*w),N.distance=Z,N.coneCos=Math.cos(D.angle),N.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),N.decay=D.decay,i.spot[m]=N;const j=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,j.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[m]=j.matrix,D.castShadow){const q=n.get(D);q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,i.spotShadow[m]=q,i.spotShadowMap[m]=Q,C++}m++}else if(D.isRectAreaLight){const N=e.get(D);N.color.copy(B).multiplyScalar($),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),i.rectArea[d]=N,d++}else if(D.isPointLight){const N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity*w),N.distance=D.distance,N.decay=D.decay,D.castShadow){const j=D.shadow,q=n.get(D);q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,i.pointShadow[_]=q,i.pointShadowMap[_]=Q,i.pointShadowMatrix[_]=D.shadow.matrix,y++}i.point[_]=N,_++}else if(D.isHemisphereLight){const N=e.get(D);N.skyColor.copy(D.color).multiplyScalar($*w),N.groundColor.copy(D.groundColor).multiplyScalar($*w),i.hemi[x]=N,x++}}d>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=p;const M=i.hash;(M.directionalLength!==g||M.pointLength!==_||M.spotLength!==m||M.rectAreaLength!==d||M.hemiLength!==x||M.numDirectionalShadows!==v||M.numPointShadows!==y||M.numSpotShadows!==C||M.numSpotMaps!==T||M.numLightProbes!==L)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=d,i.point.length=_,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=C+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,M.directionalLength=g,M.pointLength=_,M.spotLength=m,M.rectAreaLength=d,M.hemiLength=x,M.numDirectionalShadows=v,M.numPointShadows=y,M.numSpotShadows=C,M.numSpotMaps=T,M.numLightProbes=L,i.version=Q2++)}function l(c,u){let h=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){const v=c[d];if(v.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function t0(t){const e=new tb(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(u){e.setup(n,u)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function nb(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new t0(t),e.set(r,[a])):s>=o.length?(a=new t0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class ib extends qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rb extends qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sb=`void main() {
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
}`;function ab(t,e,n){let i=new tp;const r=new fe,s=new fe,o=new _t,a=new ib({depthPacking:V1}),l=new rb,c={},u=n.maxTextureSize,h={[Ni]:ln,[ln]:Ni,[Tn]:Tn},f=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:sb,fragmentShader:ob}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ut;g.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new et(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sx;let d=this.type;this.render=function(T,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=t.getRenderTarget(),M=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),H=t.state;H.setBlending(sr),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const D=d!==_i&&this.type===_i,B=d===_i&&this.type!==_i;for(let $=0,Z=T.length;$<Z;$++){const Q=T[$],N=Q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const j=N.getFrameExtents();if(r.multiply(j),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,N.mapSize.y=s.y)),N.map===null||D===!0||B===!0){const ne=this.type!==_i?{minFilter:mn,magFilter:mn}:{};N.map!==null&&N.map.dispose(),N.map=new Vr(r.x,r.y,ne),N.map.texture.name=Q.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const q=N.getViewportCount();for(let ne=0;ne<q;ne++){const me=N.getViewport(ne);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),H.viewport(o),N.updateMatrices(Q,ne),i=N.getFrustum(),y(A,L,N.camera,Q,this.type)}N.isPointLightShadow!==!0&&this.type===_i&&x(N,L),N.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(w,M,U)};function x(T,A){const L=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Vr(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,L,f,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,L,p,_,null)}function v(T,A,L,w){let M=null;const U=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)M=U;else if(M=L.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=M.uuid,D=A.uuid;let B=c[H];B===void 0&&(B={},c[H]=B);let $=B[D];$===void 0&&($=M.clone(),B[D]=$,A.addEventListener("dispose",C)),M=$}if(M.visible=A.visible,M.wireframe=A.wireframe,w===_i?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=t.properties.get(M);H.light=L}return M}function y(T,A,L,w,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===_i)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const D=e.update(T),B=T.material;if(Array.isArray(B)){const $=D.groups;for(let Z=0,Q=$.length;Z<Q;Z++){const N=$[Z],j=B[N.materialIndex];if(j&&j.visible){const q=v(T,j,w,M);T.onBeforeShadow(t,T,A,L,D,q,N),t.renderBufferDirect(L,null,D,q,T,N),T.onAfterShadow(t,T,A,L,D,q,N)}}}else if(B.visible){const $=v(T,B,w,M);T.onBeforeShadow(t,T,A,L,D,$,null),t.renderBufferDirect(L,null,D,$,T,null),T.onAfterShadow(t,T,A,L,D,$,null)}}const H=T.children;for(let D=0,B=H.length;D<B;D++)y(H[D],A,L,w,M)}function C(T){T.target.removeEventListener("dispose",C);for(const L in c){const w=c[L],M=T.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function lb(t){function e(){let F=!1;const se=new _t;let J=null;const Se=new _t(0,0,0,0);return{setMask:function(we){J!==we&&!F&&(t.colorMask(we,we,we,we),J=we)},setLocked:function(we){F=we},setClear:function(we,Ke,st,mt,Ft){Ft===!0&&(we*=mt,Ke*=mt,st*=mt),se.set(we,Ke,st,mt),Se.equals(se)===!1&&(t.clearColor(we,Ke,st,mt),Se.copy(se))},reset:function(){F=!1,J=null,Se.set(-1,0,0,0)}}}function n(){let F=!1,se=null,J=null,Se=null;return{setTest:function(we){we?pe(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(we){se!==we&&!F&&(t.depthMask(we),se=we)},setFunc:function(we){if(J!==we){switch(we){case g1:t.depthFunc(t.NEVER);break;case v1:t.depthFunc(t.ALWAYS);break;case _1:t.depthFunc(t.LESS);break;case Oc:t.depthFunc(t.LEQUAL);break;case x1:t.depthFunc(t.EQUAL);break;case y1:t.depthFunc(t.GEQUAL);break;case S1:t.depthFunc(t.GREATER);break;case M1:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=we}},setLocked:function(we){F=we},setClear:function(we){Se!==we&&(t.clearDepth(we),Se=we)},reset:function(){F=!1,se=null,J=null,Se=null}}}function i(){let F=!1,se=null,J=null,Se=null,we=null,Ke=null,st=null,mt=null,Ft=null;return{setTest:function(Je){F||(Je?pe(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(Je){se!==Je&&!F&&(t.stencilMask(Je),se=Je)},setFunc:function(Je,xn,Ht){(J!==Je||Se!==xn||we!==Ht)&&(t.stencilFunc(Je,xn,Ht),J=Je,Se=xn,we=Ht)},setOp:function(Je,xn,Ht){(Ke!==Je||st!==xn||mt!==Ht)&&(t.stencilOp(Je,xn,Ht),Ke=Je,st=xn,mt=Ht)},setLocked:function(Je){F=Je},setClear:function(Je){Ft!==Je&&(t.clearStencil(Je),Ft=Je)},reset:function(){F=!1,se=null,J=null,Se=null,we=null,Ke=null,st=null,mt=null,Ft=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],p=null,g=!1,_=null,m=null,d=null,x=null,v=null,y=null,C=null,T=new We(0,0,0),A=0,L=!1,w=null,M=null,U=null,H=null,D=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Z=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),$=Z>=1):Q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),$=Z>=2);let N=null,j={};const q=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),me=new _t().fromArray(q),Pe=new _t().fromArray(ne);function W(F,se,J,Se){const we=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(F,Ke),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let st=0;st<J;st++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,Se,0,t.RGBA,t.UNSIGNED_BYTE,we):t.texImage2D(se+st,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,we);return Ke}const re={};re[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),pe(t.DEPTH_TEST),s.setFunc(Oc),he(!1),ie(Fm),pe(t.CULL_FACE),ae(sr);function pe(F){c[F]!==!0&&(t.enable(F),c[F]=!0)}function ce(F){c[F]!==!1&&(t.disable(F),c[F]=!1)}function Ee(F,se){return u[F]!==se?(t.bindFramebuffer(F,se),u[F]=se,F===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=se),F===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=se),!0):!1}function Oe(F,se){let J=f,Se=!1;if(F){J=h.get(se),J===void 0&&(J=[],h.set(se,J));const we=F.textures;if(J.length!==we.length||J[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,st=we.length;Ke<st;Ke++)J[Ke]=t.COLOR_ATTACHMENT0+Ke;J.length=we.length,Se=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,Se=!0);Se&&t.drawBuffers(J)}function O(F){return p!==F?(t.useProgram(F),p=F,!0):!1}const Ve={[Rr]:t.FUNC_ADD,[QM]:t.FUNC_SUBTRACT,[e1]:t.FUNC_REVERSE_SUBTRACT};Ve[t1]=t.MIN,Ve[n1]=t.MAX;const Y={[i1]:t.ZERO,[r1]:t.ONE,[s1]:t.SRC_COLOR,[zf]:t.SRC_ALPHA,[h1]:t.SRC_ALPHA_SATURATE,[c1]:t.DST_COLOR,[a1]:t.DST_ALPHA,[o1]:t.ONE_MINUS_SRC_COLOR,[Bf]:t.ONE_MINUS_SRC_ALPHA,[u1]:t.ONE_MINUS_DST_COLOR,[l1]:t.ONE_MINUS_DST_ALPHA,[f1]:t.CONSTANT_COLOR,[d1]:t.ONE_MINUS_CONSTANT_COLOR,[p1]:t.CONSTANT_ALPHA,[m1]:t.ONE_MINUS_CONSTANT_ALPHA};function ae(F,se,J,Se,we,Ke,st,mt,Ft,Je){if(F===sr){g===!0&&(ce(t.BLEND),g=!1);return}if(g===!1&&(pe(t.BLEND),g=!0),F!==JM){if(F!==_||Je!==L){if((m!==Rr||v!==Rr)&&(t.blendEquation(t.FUNC_ADD),m=Rr,v=Rr),Je)switch(F){case Vs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Om:t.blendFunc(t.ONE,t.ONE);break;case km:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Vs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Om:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case km:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}d=null,x=null,y=null,C=null,T.set(0,0,0),A=0,_=F,L=Je}return}we=we||se,Ke=Ke||J,st=st||Se,(se!==m||we!==v)&&(t.blendEquationSeparate(Ve[se],Ve[we]),m=se,v=we),(J!==d||Se!==x||Ke!==y||st!==C)&&(t.blendFuncSeparate(Y[J],Y[Se],Y[Ke],Y[st]),d=J,x=Se,y=Ke,C=st),(mt.equals(T)===!1||Ft!==A)&&(t.blendColor(mt.r,mt.g,mt.b,Ft),T.copy(mt),A=Ft),_=F,L=!1}function K(F,se){F.side===Tn?ce(t.CULL_FACE):pe(t.CULL_FACE);let J=F.side===ln;se&&(J=!J),he(J),F.blending===Vs&&F.transparent===!1?ae(sr):ae(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const Se=F.stencilWrite;o.setTest(Se),Se&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Le(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function he(F){w!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),w=F)}function ie(F){F!==ZM?(pe(t.CULL_FACE),F!==M&&(F===Fm?t.cullFace(t.BACK):F===KM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),M=F}function Me(F){F!==U&&($&&t.lineWidth(F),U=F)}function Le(F,se,J){F?(pe(t.POLYGON_OFFSET_FILL),(H!==se||D!==J)&&(t.polygonOffset(se,J),H=se,D=J)):ce(t.POLYGON_OFFSET_FILL)}function R(F){F?pe(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function E(F){F===void 0&&(F=t.TEXTURE0+B-1),N!==F&&(t.activeTexture(F),N=F)}function z(F,se,J){J===void 0&&(N===null?J=t.TEXTURE0+B-1:J=N);let Se=j[J];Se===void 0&&(Se={type:void 0,texture:void 0},j[J]=Se),(Se.type!==F||Se.texture!==se)&&(N!==J&&(t.activeTexture(J),N=J),t.bindTexture(F,se||re[F]),Se.type=F,Se.texture=se)}function ee(){const F=j[N];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qe(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(F){me.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),me.copy(F))}function Ge(F){Pe.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Pe.copy(F))}function Ye(F,se){let J=l.get(se);J===void 0&&(J=new WeakMap,l.set(se,J));let Se=J.get(F);Se===void 0&&(Se=t.getUniformBlockIndex(se,F.name),J.set(F,Se))}function pt(F,se){const Se=l.get(se).get(F);a.get(se)!==Se&&(t.uniformBlockBinding(se,Se,F.__bindingPointIndex),a.set(se,Se))}function Be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,j={},u={},h=new WeakMap,f=[],p=null,g=!1,_=null,m=null,d=null,x=null,v=null,y=null,C=null,T=new We(0,0,0),A=0,L=!1,w=null,M=null,U=null,H=null,D=null,me.set(0,0,t.canvas.width,t.canvas.height),Pe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:pe,disable:ce,bindFramebuffer:Ee,drawBuffers:Oe,useProgram:O,setBlending:ae,setMaterial:K,setFlipSided:he,setCullFace:ie,setLineWidth:Me,setPolygonOffset:Le,setScissorTest:R,activeTexture:E,bindTexture:z,unbindTexture:ee,compressedTexImage2D:te,compressedTexImage3D:oe,texImage2D:qe,texImage3D:Fe,updateUBOMapping:Ye,uniformBlockBinding:pt,texStorage2D:de,texStorage3D:De,texSubImage2D:Ie,texSubImage3D:_e,compressedTexSubImage2D:ve,compressedTexSubImage3D:ke,scissor:Te,viewport:Ge,reset:Be}}function cb(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return p?new OffscreenCanvas(R,E):ka("canvas")}function _(R,E,z){let ee=1;const te=Le(R);if((te.width>z||te.height>z)&&(ee=z/Math.max(te.width,te.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const oe=Math.floor(ee*te.width),Ie=Math.floor(ee*te.height);h===void 0&&(h=g(oe,Ie));const _e=E?g(oe,Ie):h;return _e.width=oe,_e.height=Ie,_e.getContext("2d").drawImage(R,0,0,oe,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+oe+"x"+Ie+")."),_e}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==mn&&R.minFilter!==dn}function d(R){t.generateMipmap(R)}function x(R,E,z,ee,te=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let oe=E;if(E===t.RED&&(z===t.FLOAT&&(oe=t.R32F),z===t.HALF_FLOAT&&(oe=t.R16F),z===t.UNSIGNED_BYTE&&(oe=t.R8)),E===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(oe=t.R8UI),z===t.UNSIGNED_SHORT&&(oe=t.R16UI),z===t.UNSIGNED_INT&&(oe=t.R32UI),z===t.BYTE&&(oe=t.R8I),z===t.SHORT&&(oe=t.R16I),z===t.INT&&(oe=t.R32I)),E===t.RG&&(z===t.FLOAT&&(oe=t.RG32F),z===t.HALF_FLOAT&&(oe=t.RG16F),z===t.UNSIGNED_BYTE&&(oe=t.RG8)),E===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(oe=t.RG8UI),z===t.UNSIGNED_SHORT&&(oe=t.RG16UI),z===t.UNSIGNED_INT&&(oe=t.RG32UI),z===t.BYTE&&(oe=t.RG8I),z===t.SHORT&&(oe=t.RG16I),z===t.INT&&(oe=t.RG32I)),E===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(oe=t.RGB9_E5),E===t.RGBA){const Ie=te?kc:rt.getTransfer(ee);z===t.FLOAT&&(oe=t.RGBA32F),z===t.HALF_FLOAT&&(oe=t.RGBA16F),z===t.UNSIGNED_BYTE&&(oe=Ie===ht?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(oe=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(oe=t.RGB5_A1)}return(oe===t.R16F||oe===t.R32F||oe===t.RG16F||oe===t.RG32F||oe===t.RGBA16F||oe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function v(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==mn&&R.minFilter!==dn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function y(R){const E=R.target;E.removeEventListener("dispose",y),T(E),E.isVideoTexture&&u.delete(E)}function C(R){const E=R.target;E.removeEventListener("dispose",C),L(E)}function T(R){const E=i.get(R);if(E.__webglInit===void 0)return;const z=R.source,ee=f.get(z);if(ee){const te=ee[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&A(R),Object.keys(ee).length===0&&f.delete(z)}i.remove(R)}function A(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const z=R.source,ee=f.get(z);delete ee[E.__cacheKey],o.memory.textures--}function L(R){const E=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let te=0;te<E.__webglFramebuffer[ee].length;te++)t.deleteFramebuffer(E.__webglFramebuffer[ee][te]);else t.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)t.deleteFramebuffer(E.__webglFramebuffer[ee]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=R.textures;for(let ee=0,te=z.length;ee<te;ee++){const oe=i.get(z[ee]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),o.memory.textures--),i.remove(z[ee])}i.remove(R)}let w=0;function M(){w=0}function U(){const R=w;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),w+=1,R}function H(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function D(R,E){const z=i.get(R);if(R.isVideoTexture&&ie(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(z,R,E);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+E)}function B(R,E){const z=i.get(R);if(R.version>0&&z.__version!==R.version){me(z,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+E)}function $(R,E){const z=i.get(R);if(R.version>0&&z.__version!==R.version){me(z,R,E);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+E)}function Z(R,E){const z=i.get(R);if(R.version>0&&z.__version!==R.version){Pe(z,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+E)}const Q={[Di]:t.REPEAT,[Ir]:t.CLAMP_TO_EDGE,[Gf]:t.MIRRORED_REPEAT},N={[mn]:t.NEAREST,[L1]:t.NEAREST_MIPMAP_NEAREST,[gl]:t.NEAREST_MIPMAP_LINEAR,[dn]:t.LINEAR,[Zu]:t.LINEAR_MIPMAP_NEAREST,[wi]:t.LINEAR_MIPMAP_LINEAR},j={[W1]:t.NEVER,[Z1]:t.ALWAYS,[j1]:t.LESS,[xx]:t.LEQUAL,[$1]:t.EQUAL,[Y1]:t.GEQUAL,[X1]:t.GREATER,[q1]:t.NOTEQUAL};function q(R,E){if(E.type===Ei&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===dn||E.magFilter===Zu||E.magFilter===gl||E.magFilter===wi||E.minFilter===dn||E.minFilter===Zu||E.minFilter===gl||E.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,Q[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,Q[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,Q[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,N[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,N[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,j[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===mn||E.minFilter!==gl&&E.minFilter!==wi||E.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ne(R,E){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",y));const ee=E.source;let te=f.get(ee);te===void 0&&(te={},f.set(ee,te));const oe=H(E);if(oe!==R.__cacheKey){te[oe]===void 0&&(te[oe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[oe].usedTimes++;const Ie=te[R.__cacheKey];Ie!==void 0&&(te[R.__cacheKey].usedTimes--,Ie.usedTimes===0&&A(E)),R.__cacheKey=oe,R.__webglTexture=te[oe].texture}return z}function me(R,E,z){let ee=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=t.TEXTURE_3D);const te=ne(R,E),oe=E.source;n.bindTexture(ee,R.__webglTexture,t.TEXTURE0+z);const Ie=i.get(oe);if(oe.version!==Ie.__version||te===!0){n.activeTexture(t.TEXTURE0+z);const _e=rt.getPrimaries(rt.workingColorSpace),ve=E.colorSpace===qn?null:rt.getPrimaries(E.colorSpace),ke=E.colorSpace===qn||_e===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let de=_(E.image,!1,r.maxTextureSize);de=Me(E,de);const De=s.convert(E.format,E.colorSpace),qe=s.convert(E.type);let Fe=x(E.internalFormat,De,qe,E.colorSpace,E.isVideoTexture);q(ee,E);let Te;const Ge=E.mipmaps,Ye=E.isVideoTexture!==!0,pt=Ie.__version===void 0||te===!0,Be=oe.dataReady,F=v(E,de);if(E.isDepthTexture)Fe=t.DEPTH_COMPONENT16,E.type===Ei?Fe=t.DEPTH_COMPONENT32F:E.type===ro?Fe=t.DEPTH_COMPONENT24:E.type===qa&&(Fe=t.DEPTH24_STENCIL8),pt&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,Fe,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,Fe,de.width,de.height,0,De,qe,null));else if(E.isDataTexture)if(Ge.length>0){Ye&&pt&&n.texStorage2D(t.TEXTURE_2D,F,Fe,Ge[0].width,Ge[0].height);for(let se=0,J=Ge.length;se<J;se++)Te=Ge[se],Ye?Be&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Te.width,Te.height,De,qe,Te.data):n.texImage2D(t.TEXTURE_2D,se,Fe,Te.width,Te.height,0,De,qe,Te.data);E.generateMipmaps=!1}else Ye?(pt&&n.texStorage2D(t.TEXTURE_2D,F,Fe,de.width,de.height),Be&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de.width,de.height,De,qe,de.data)):n.texImage2D(t.TEXTURE_2D,0,Fe,de.width,de.height,0,De,qe,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ye&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,F,Fe,Ge[0].width,Ge[0].height,de.depth);for(let se=0,J=Ge.length;se<J;se++)Te=Ge[se],E.format!==ri?De!==null?Ye?Be&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,Te.width,Te.height,de.depth,De,Te.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Fe,Te.width,Te.height,de.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?Be&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,Te.width,Te.height,de.depth,De,qe,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Fe,Te.width,Te.height,de.depth,0,De,qe,Te.data)}else{Ye&&pt&&n.texStorage2D(t.TEXTURE_2D,F,Fe,Ge[0].width,Ge[0].height);for(let se=0,J=Ge.length;se<J;se++)Te=Ge[se],E.format!==ri?De!==null?Ye?Be&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,Te.width,Te.height,De,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Fe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?Be&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Te.width,Te.height,De,qe,Te.data):n.texImage2D(t.TEXTURE_2D,se,Fe,Te.width,Te.height,0,De,qe,Te.data)}else if(E.isDataArrayTexture)Ye?(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,F,Fe,de.width,de.height,de.depth),Be&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,De,qe,de.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Fe,de.width,de.height,de.depth,0,De,qe,de.data);else if(E.isData3DTexture)Ye?(pt&&n.texStorage3D(t.TEXTURE_3D,F,Fe,de.width,de.height,de.depth),Be&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,De,qe,de.data)):n.texImage3D(t.TEXTURE_3D,0,Fe,de.width,de.height,de.depth,0,De,qe,de.data);else if(E.isFramebufferTexture){if(pt)if(Ye)n.texStorage2D(t.TEXTURE_2D,F,Fe,de.width,de.height);else{let se=de.width,J=de.height;for(let Se=0;Se<F;Se++)n.texImage2D(t.TEXTURE_2D,Se,Fe,se,J,0,De,qe,null),se>>=1,J>>=1}}else if(Ge.length>0){if(Ye&&pt){const se=Le(Ge[0]);n.texStorage2D(t.TEXTURE_2D,F,Fe,se.width,se.height)}for(let se=0,J=Ge.length;se<J;se++)Te=Ge[se],Ye?Be&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,De,qe,Te):n.texImage2D(t.TEXTURE_2D,se,Fe,De,qe,Te);E.generateMipmaps=!1}else if(Ye){if(pt){const se=Le(de);n.texStorage2D(t.TEXTURE_2D,F,Fe,se.width,se.height)}Be&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,De,qe,de)}else n.texImage2D(t.TEXTURE_2D,0,Fe,De,qe,de);m(E)&&d(ee),Ie.__version=oe.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Pe(R,E,z){if(E.image.length!==6)return;const ee=ne(R,E),te=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const oe=i.get(te);if(te.version!==oe.__version||ee===!0){n.activeTexture(t.TEXTURE0+z);const Ie=rt.getPrimaries(rt.workingColorSpace),_e=E.colorSpace===qn?null:rt.getPrimaries(E.colorSpace),ve=E.colorSpace===qn||Ie===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const ke=E.isCompressedTexture||E.image[0].isCompressedTexture,de=E.image[0]&&E.image[0].isDataTexture,De=[];for(let J=0;J<6;J++)!ke&&!de?De[J]=_(E.image[J],!0,r.maxCubemapSize):De[J]=de?E.image[J].image:E.image[J],De[J]=Me(E,De[J]);const qe=De[0],Fe=s.convert(E.format,E.colorSpace),Te=s.convert(E.type),Ge=x(E.internalFormat,Fe,Te,E.colorSpace),Ye=E.isVideoTexture!==!0,pt=oe.__version===void 0||ee===!0,Be=te.dataReady;let F=v(E,qe);q(t.TEXTURE_CUBE_MAP,E);let se;if(ke){Ye&&pt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,F,Ge,qe.width,qe.height);for(let J=0;J<6;J++){se=De[J].mipmaps;for(let Se=0;Se<se.length;Se++){const we=se[Se];E.format!==ri?Fe!==null?Ye?Be&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,0,0,we.width,we.height,Fe,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,Ge,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?Be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,0,0,we.width,we.height,Fe,Te,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,Ge,we.width,we.height,0,Fe,Te,we.data)}}}else{if(se=E.mipmaps,Ye&&pt){se.length>0&&F++;const J=Le(De[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,F,Ge,J.width,J.height)}for(let J=0;J<6;J++)if(de){Ye?Be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,De[J].width,De[J].height,Fe,Te,De[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ge,De[J].width,De[J].height,0,Fe,Te,De[J].data);for(let Se=0;Se<se.length;Se++){const Ke=se[Se].image[J].image;Ye?Be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,0,0,Ke.width,Ke.height,Fe,Te,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,Ge,Ke.width,Ke.height,0,Fe,Te,Ke.data)}}else{Ye?Be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Fe,Te,De[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ge,Fe,Te,De[J]);for(let Se=0;Se<se.length;Se++){const we=se[Se];Ye?Be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,0,0,Fe,Te,we.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,Ge,Fe,Te,we.image[J])}}}m(E)&&d(t.TEXTURE_CUBE_MAP),oe.__version=te.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function W(R,E,z,ee,te,oe){const Ie=s.convert(z.format,z.colorSpace),_e=s.convert(z.type),ve=x(z.internalFormat,Ie,_e,z.colorSpace);if(!i.get(E).__hasExternalTextures){const de=Math.max(1,E.width>>oe),De=Math.max(1,E.height>>oe);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,oe,ve,de,De,E.depth,0,Ie,_e,null):n.texImage2D(te,oe,ve,de,De,0,Ie,_e,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),he(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,te,i.get(z).__webglTexture,0,K(E)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,te,i.get(z).__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function re(R,E,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let ee=t.DEPTH_COMPONENT24;if(z||he(E)){const te=E.depthTexture;te&&te.isDepthTexture&&(te.type===Ei?ee=t.DEPTH_COMPONENT32F:te.type===ro&&(ee=t.DEPTH_COMPONENT24));const oe=K(E);he(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,ee,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,ee,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,ee,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const ee=K(E);z&&he(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,E.width,E.height):he(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const ee=E.textures;for(let te=0;te<ee.length;te++){const oe=ee[te],Ie=s.convert(oe.format,oe.colorSpace),_e=s.convert(oe.type),ve=x(oe.internalFormat,Ie,_e,oe.colorSpace),ke=K(E);z&&he(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,ve,E.width,E.height):he(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ke,ve,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ve,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),D(E.depthTexture,0);const ee=i.get(E.depthTexture).__webglTexture,te=K(E);if(E.depthTexture.format===Gs)he(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(E.depthTexture.format===Fa)he(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ce(R){const E=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");pe(E.__webglFramebuffer,R)}else if(z){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]=t.createRenderbuffer(),re(E.__webglDepthbuffer[ee],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),re(E.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ee(R,E,z){const ee=i.get(R);E!==void 0&&W(ee.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&ce(R)}function Oe(R){const E=R.texture,z=i.get(R),ee=i.get(E);R.addEventListener("dispose",C);const te=R.textures,oe=R.isWebGLCubeRenderTarget===!0,Ie=te.length>1;if(Ie||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=E.version,o.memory.textures++),oe){z.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[_e]=[];for(let ve=0;ve<E.mipmaps.length;ve++)z.__webglFramebuffer[_e][ve]=t.createFramebuffer()}else z.__webglFramebuffer[_e]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let _e=0;_e<E.mipmaps.length;_e++)z.__webglFramebuffer[_e]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(Ie)for(let _e=0,ve=te.length;_e<ve;_e++){const ke=i.get(te[_e]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&he(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let _e=0;_e<te.length;_e++){const ve=te[_e];z.__webglColorRenderbuffer[_e]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[_e]);const ke=s.convert(ve.format,ve.colorSpace),de=s.convert(ve.type),De=x(ve.internalFormat,ke,de,ve.colorSpace,R.isXRRenderTarget===!0),qe=K(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,De,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,z.__webglColorRenderbuffer[_e])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),re(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),q(t.TEXTURE_CUBE_MAP,E);for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)W(z.__webglFramebuffer[_e][ve],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ve);else W(z.__webglFramebuffer[_e],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(E)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let _e=0,ve=te.length;_e<ve;_e++){const ke=te[_e],de=i.get(ke);n.bindTexture(t.TEXTURE_2D,de.__webglTexture),q(t.TEXTURE_2D,ke),W(z.__webglFramebuffer,R,ke,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,0),m(ke)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let _e=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(_e,ee.__webglTexture),q(_e,E),E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)W(z.__webglFramebuffer[ve],R,E,t.COLOR_ATTACHMENT0,_e,ve);else W(z.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,_e,0);m(E)&&d(_e),n.unbindTexture()}R.depthBuffer&&ce(R)}function O(R){const E=R.textures;for(let z=0,ee=E.length;z<ee;z++){const te=E[z];if(m(te)){const oe=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ie=i.get(te).__webglTexture;n.bindTexture(oe,Ie),d(oe),n.unbindTexture()}}}const Ve=[],Y=[];function ae(R){if(R.samples>0){if(he(R)===!1){const E=R.textures,z=R.width,ee=R.height;let te=t.COLOR_BUFFER_BIT;const oe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ie=i.get(R),_e=E.length>1;if(_e)for(let ve=0;ve<E.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let ve=0;ve<E.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),_e){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[ve]);const ke=i.get(E[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ke,0)}t.blitFramebuffer(0,0,z,ee,0,0,z,ee,te,t.NEAREST),l===!0&&(Ve.length=0,Y.length=0,Ve.push(t.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ve.push(oe),Y.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Y)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ve))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),_e)for(let ve=0;ve<E.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[ve]);const ke=i.get(E[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function K(R){return Math.min(r.maxSamples,R.samples)}function he(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ie(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function Me(R,E){const z=R.colorSpace,ee=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==dr&&z!==qn&&(rt.getTransfer(z)===ht?(ee!==ri||te!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}function Le(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=M,this.setTexture2D=D,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=Z,this.rebindTextures=Ee,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=W,this.useMultisampledRTT=he}function ub(t,e){function n(i,r=qn){let s;const o=rt.getTransfer(r);if(i===cr)return t.UNSIGNED_BYTE;if(i===fx)return t.UNSIGNED_SHORT_4_4_4_4;if(i===dx)return t.UNSIGNED_SHORT_5_5_5_1;if(i===I1)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===N1)return t.BYTE;if(i===D1)return t.SHORT;if(i===ux)return t.UNSIGNED_SHORT;if(i===hx)return t.INT;if(i===ro)return t.UNSIGNED_INT;if(i===Ei)return t.FLOAT;if(i===fu)return t.HALF_FLOAT;if(i===U1)return t.ALPHA;if(i===F1)return t.RGB;if(i===ri)return t.RGBA;if(i===O1)return t.LUMINANCE;if(i===k1)return t.LUMINANCE_ALPHA;if(i===Gs)return t.DEPTH_COMPONENT;if(i===Fa)return t.DEPTH_STENCIL;if(i===px)return t.RED;if(i===mx)return t.RED_INTEGER;if(i===z1)return t.RG;if(i===gx)return t.RG_INTEGER;if(i===vx)return t.RGBA_INTEGER;if(i===Ku||i===Ju||i===Qu||i===eh)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ku)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ju)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===eh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ku)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ju)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===eh)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bm||i===Hm||i===Vm||i===Gm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wm||i===jm||i===$m)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wm||i===jm)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$m)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xm||i===qm||i===Ym||i===Zm||i===Km||i===Jm||i===Qm||i===eg||i===tg||i===ng||i===ig||i===rg||i===sg||i===og)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Xm)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qm)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ym)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zm)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Km)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jm)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qm)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===eg)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tg)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ng)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ig)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rg)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sg)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===og)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===th||i===ag||i===lg)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===th)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ag)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lg)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===B1||i===cg||i===ug||i===hg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===th)return s.COMPRESSED_RED_RGTC1_EXT;if(i===cg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ug)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class hb extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ai extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fb={type:"move"};class Ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ai;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const db=`
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

}`;class mb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Ii({vertexShader:db,fragmentShader:pb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new et(new Zr(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class gb extends uo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=new mb,m=n.getContextAttributes();let d=null,x=null;const v=[],y=[],C=new fe;let T=null;const A=new fn;A.layers.enable(1),A.viewport=new _t;const L=new fn;L.layers.enable(2),L.viewport=new _t;const w=[A,L],M=new hb;M.layers.enable(1),M.layers.enable(2);let U=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let re=v[W];return re===void 0&&(re=new Ah,v[W]=re),re.getTargetRaySpace()},this.getControllerGrip=function(W){let re=v[W];return re===void 0&&(re=new Ah,v[W]=re),re.getGripSpace()},this.getHand=function(W){let re=v[W];return re===void 0&&(re=new Ah,v[W]=re),re.getHandSpace()};function D(W){const re=y.indexOf(W.inputSource);if(re===-1)return;const pe=v[re];pe!==void 0&&(pe.update(W.inputSource,W.frame,c||o),pe.dispatchEvent({type:W.type,data:W.inputSource}))}function B(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",$);for(let W=0;W<v.length;W++){const re=y[W];re!==null&&(y[W]=null,v[W].disconnect(re))}U=null,H=null,_.reset(),e.setRenderTarget(d),p=null,f=null,h=null,r=null,x=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",B),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Vr(p.framebufferWidth,p.framebufferHeight,{format:ri,type:cr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,pe=null,ce=null;m.depth&&(ce=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=m.stencil?Fa:Gs,pe=m.stencil?qa:ro);const Ee={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Ee),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Vr(f.textureWidth,f.textureHeight,{format:ri,type:cr,depthTexture:new Ix(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(W){for(let re=0;re<W.removed.length;re++){const pe=W.removed[re],ce=y.indexOf(pe);ce>=0&&(y[ce]=null,v[ce].disconnect(pe))}for(let re=0;re<W.added.length;re++){const pe=W.added[re];let ce=y.indexOf(pe);if(ce===-1){for(let Oe=0;Oe<v.length;Oe++)if(Oe>=y.length){y.push(pe),ce=Oe;break}else if(y[Oe]===null){y[Oe]=pe,ce=Oe;break}if(ce===-1)break}const Ee=v[ce];Ee&&Ee.connect(pe)}}const Z=new I,Q=new I;function N(W,re,pe){Z.setFromMatrixPosition(re.matrixWorld),Q.setFromMatrixPosition(pe.matrixWorld);const ce=Z.distanceTo(Q),Ee=re.projectionMatrix.elements,Oe=pe.projectionMatrix.elements,O=Ee[14]/(Ee[10]-1),Ve=Ee[14]/(Ee[10]+1),Y=(Ee[9]+1)/Ee[5],ae=(Ee[9]-1)/Ee[5],K=(Ee[8]-1)/Ee[0],he=(Oe[8]+1)/Oe[0],ie=O*K,Me=O*he,Le=ce/(-K+he),R=Le*-K;re.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(R),W.translateZ(Le),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const E=O+Le,z=Ve+Le,ee=ie-R,te=Me+(ce-R),oe=Y*Ve/z*E,Ie=ae*Ve/z*E;W.projectionMatrix.makePerspective(ee,te,oe,Ie,E,z),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function j(W,re){re===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(re.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;_.texture!==null&&(W.near=_.depthNear,W.far=_.depthFar),M.near=L.near=A.near=W.near,M.far=L.far=A.far=W.far,(U!==M.near||H!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,H=M.far,A.near=U,A.far=H,L.near=U,L.far=H,A.updateProjectionMatrix(),L.updateProjectionMatrix(),W.updateProjectionMatrix());const re=W.parent,pe=M.cameras;j(M,re);for(let ce=0;ce<pe.length;ce++)j(pe[ce],re);pe.length===2?N(M,A,L):M.projectionMatrix.copy(A.projectionMatrix),q(W,M,re)};function q(W,re,pe){pe===null?W.matrix.copy(re.matrixWorld):(W.matrix.copy(pe.matrixWorld),W.matrix.invert(),W.matrix.multiply(re.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(re.projectionMatrix),W.projectionMatrixInverse.copy(re.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Oa*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null};let ne=null;function me(W,re){if(u=re.getViewerPose(c||o),g=re,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let ce=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,ce=!0);for(let Oe=0;Oe<pe.length;Oe++){const O=pe[Oe];let Ve=null;if(p!==null)Ve=p.getViewport(O);else{const ae=h.getViewSubImage(f,O);Ve=ae.viewport,Oe===0&&(e.setRenderTargetTextures(x,ae.colorTexture,f.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(x))}let Y=w[Oe];Y===void 0&&(Y=new fn,Y.layers.enable(Oe),Y.viewport=new _t,w[Oe]=Y),Y.matrix.fromArray(O.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(O.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Oe===0&&(M.matrix.copy(Y.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ce===!0&&M.cameras.push(Y)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const Oe=h.getDepthInformation(pe[0]);Oe&&Oe.isValid&&Oe.texture&&_.init(e,Oe,r.renderState)}}for(let pe=0;pe<v.length;pe++){const ce=y[pe],Ee=v[pe];ce!==null&&Ee!==void 0&&Ee.update(ce,re,c||o)}_.render(e,M),ne&&ne(W,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const Pe=new Nx;Pe.setAnimationLoop(me),this.setAnimationLoop=function(W){ne=W},this.dispose=function(){}}}const wr=new li,vb=new ot;function _b(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Cx(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,x,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,x,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===ln&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===ln&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d),v=x.envMap,y=x.envMapRotation;if(v&&(m.envMap.value=v,wr.copy(y),wr.x*=-1,wr.y*=-1,wr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),m.envMapRotation.value.setFromMatrix4(vb.makeRotationFromEuler(wr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const C=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*C,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,x,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=v*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ln&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xb(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const y=v.program;i.uniformBlockBinding(x,y)}function c(x,v){let y=r[x.id];y===void 0&&(g(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(x,C);const T=e.render.frame;s[x.id]!==T&&(f(x),s[x.id]=T)}function u(x){const v=h();x.__bindingPointIndex=v;const y=t.createBuffer(),C=x.__size,T=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=r[x.id],y=x.uniforms,C=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,A=y.length;T<A;T++){const L=Array.isArray(y[T])?y[T]:[y[T]];for(let w=0,M=L.length;w<M;w++){const U=L[w];if(p(U,T,w,C)===!0){const H=U.__offset,D=Array.isArray(U.value)?U.value:[U.value];let B=0;for(let $=0;$<D.length;$++){const Z=D[$],Q=_(Z);typeof Z=="number"||typeof Z=="boolean"?(U.__data[0]=Z,t.bufferSubData(t.UNIFORM_BUFFER,H+B,U.__data)):Z.isMatrix3?(U.__data[0]=Z.elements[0],U.__data[1]=Z.elements[1],U.__data[2]=Z.elements[2],U.__data[3]=0,U.__data[4]=Z.elements[3],U.__data[5]=Z.elements[4],U.__data[6]=Z.elements[5],U.__data[7]=0,U.__data[8]=Z.elements[6],U.__data[9]=Z.elements[7],U.__data[10]=Z.elements[8],U.__data[11]=0):(Z.toArray(U.__data,B),B+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,v,y,C){const T=x.value,A=v+"_"+y;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const L=C[A];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return C[A]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(x){const v=x.uniforms;let y=0;const C=16;for(let A=0,L=v.length;A<L;A++){const w=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,U=w.length;M<U;M++){const H=w[M],D=Array.isArray(H.value)?H.value:[H.value];for(let B=0,$=D.length;B<$;B++){const Z=D[B],Q=_(Z),N=y%C;N!==0&&C-N<Q.boundary&&(y+=C-N),H.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=Q.storage}}}const T=y%C;return T>0&&(y+=C-T),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Bx{constructor(e={}){const{canvas:n=dw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this._useLegacyLights=!1,this.toneMapping=or,this.toneMappingExposure=1;const v=this;let y=!1,C=0,T=0,A=null,L=-1,w=null;const M=new _t,U=new _t;let H=null;const D=new We(0);let B=0,$=n.width,Z=n.height,Q=1,N=null,j=null;const q=new _t(0,0,$,Z),ne=new _t(0,0,$,Z);let me=!1;const Pe=new tp;let W=!1,re=!1;const pe=new ot,ce=new I,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return A===null?Q:1}let O=i;function Ve(b,k){return n.getContext(b,k)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Jd}`),n.addEventListener("webglcontextlost",F,!1),n.addEventListener("webglcontextrestored",se,!1),n.addEventListener("webglcontextcreationerror",J,!1),O===null){const k="webgl2";if(O=Ve(k,b),O===null)throw Ve(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Y,ae,K,he,ie,Me,Le,R,E,z,ee,te,oe,Ie,_e,ve,ke,de,De,qe,Fe,Te,Ge,Ye;function pt(){Y=new CA(O),Y.init(),Te=new ub(O,Y),ae=new MA(O,Y,e,Te),K=new lb(O),he=new LA(O),ie=new q2,Me=new cb(O,Y,K,ie,ae,Te,he),Le=new EA(v),R=new bA(v),E=new kw(O),Ge=new yA(O,E),z=new RA(O,E,he,Ge),ee=new DA(O,z,E,he),De=new NA(O,ae,Me),ve=new wA(ie),te=new X2(v,Le,R,Y,ae,Ge,ve),oe=new _b(v,ie),Ie=new Z2,_e=new nb(Y),de=new xA(v,Le,R,K,ee,f,l),ke=new ab(v,ee,ae),Ye=new xb(O,he,ae,K),qe=new SA(O,Y,he),Fe=new PA(O,Y,he),he.programs=te.programs,v.capabilities=ae,v.extensions=Y,v.properties=ie,v.renderLists=Ie,v.shadowMap=ke,v.state=K,v.info=he}pt();const Be=new gb(v,O);this.xr=Be,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=Y.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Y.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize($,Z,!1))},this.getSize=function(b){return b.set($,Z)},this.setSize=function(b,k,X=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,Z=k,n.width=Math.floor(b*Q),n.height=Math.floor(k*Q),X===!0&&(n.style.width=b+"px",n.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set($*Q,Z*Q).floor()},this.setDrawingBufferSize=function(b,k,X){$=b,Z=k,Q=X,n.width=Math.floor(b*X),n.height=Math.floor(k*X),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(M)},this.getViewport=function(b){return b.copy(q)},this.setViewport=function(b,k,X,V){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,k,X,V),K.viewport(M.copy(q).multiplyScalar(Q).round())},this.getScissor=function(b){return b.copy(ne)},this.setScissor=function(b,k,X,V){b.isVector4?ne.set(b.x,b.y,b.z,b.w):ne.set(b,k,X,V),K.scissor(U.copy(ne).multiplyScalar(Q).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(b){K.setScissorTest(me=b)},this.setOpaqueSort=function(b){N=b},this.setTransparentSort=function(b){j=b},this.getClearColor=function(b){return b.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(b=!0,k=!0,X=!0){let V=0;if(b){let G=!1;if(A!==null){const xe=A.texture.format;G=xe===vx||xe===gx||xe===mx}if(G){const xe=A.texture.type,be=xe===cr||xe===ro||xe===ux||xe===qa||xe===fx||xe===dx,P=de.getClearColor(),le=de.getClearAlpha(),ge=P.r,Ue=P.g,ze=P.b;be?(p[0]=ge,p[1]=Ue,p[2]=ze,p[3]=le,O.clearBufferuiv(O.COLOR,0,p)):(g[0]=ge,g[1]=Ue,g[2]=ze,g[3]=le,O.clearBufferiv(O.COLOR,0,g))}else V|=O.COLOR_BUFFER_BIT}k&&(V|=O.DEPTH_BUFFER_BIT),X&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",F,!1),n.removeEventListener("webglcontextrestored",se,!1),n.removeEventListener("webglcontextcreationerror",J,!1),Ie.dispose(),_e.dispose(),ie.dispose(),Le.dispose(),R.dispose(),ee.dispose(),Ge.dispose(),Ye.dispose(),te.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Je),Be.removeEventListener("sessionend",xn),Ht.stop()};function F(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=he.autoReset,k=ke.enabled,X=ke.autoUpdate,V=ke.needsUpdate,G=ke.type;pt(),he.autoReset=b,ke.enabled=k,ke.autoUpdate=X,ke.needsUpdate=V,ke.type=G}function J(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Se(b){const k=b.target;k.removeEventListener("dispose",Se),we(k)}function we(b){Ke(b),ie.remove(b)}function Ke(b){const k=ie.get(b).programs;k!==void 0&&(k.forEach(function(X){te.releaseProgram(X)}),b.isShaderMaterial&&te.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,X,V,G,xe){k===null&&(k=Ee);const be=G.isMesh&&G.matrixWorld.determinant()<0,P=Za(b,k,X,V,G);K.setMaterial(V,be);let le=X.index,ge=1;if(V.wireframe===!0){if(le=z.getWireframeAttribute(X),le===void 0)return;ge=2}const Ue=X.drawRange,ze=X.attributes.position;let wt=Ue.start*ge,Ct=(Ue.start+Ue.count)*ge;xe!==null&&(wt=Math.max(wt,xe.start*ge),Ct=Math.min(Ct,(xe.start+xe.count)*ge)),le!==null?(wt=Math.max(wt,0),Ct=Math.min(Ct,le.count)):ze!=null&&(wt=Math.max(wt,0),Ct=Math.min(Ct,ze.count));const nn=Ct-wt;if(nn<0||nn===1/0)return;Ge.setup(G,V,P,X,le);let hi,nt=qe;if(le!==null&&(hi=E.get(le),nt=Fe,nt.setIndex(hi)),G.isMesh)V.wireframe===!0?(K.setLineWidth(V.wireframeLinewidth*Oe()),nt.setMode(O.LINES)):nt.setMode(O.TRIANGLES);else if(G.isLine){let He=V.linewidth;He===void 0&&(He=1),K.setLineWidth(He*Oe()),G.isLineSegments?nt.setMode(O.LINES):G.isLineLoop?nt.setMode(O.LINE_LOOP):nt.setMode(O.LINE_STRIP)}else G.isPoints?nt.setMode(O.POINTS):G.isSprite&&nt.setMode(O.TRIANGLES);if(G.isBatchedMesh)G._multiDrawInstances!==null?nt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances):nt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)nt.renderInstances(wt,nn,G.count);else if(X.isInstancedBufferGeometry){const He=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,So=Math.min(X.instanceCount,He);nt.renderInstances(wt,nn,So)}else nt.render(wt,nn)};function st(b,k,X){b.transparent===!0&&b.side===Tn&&b.forceSinglePass===!1?(b.side=ln,b.needsUpdate=!0,gr(b,k,X),b.side=Ni,b.needsUpdate=!0,gr(b,k,X),b.side=Tn):gr(b,k,X)}this.compile=function(b,k,X=null){X===null&&(X=b),m=_e.get(X),m.init(k),x.push(m),X.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),b!==X&&b.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(v._useLegacyLights);const V=new Set;return b.traverse(function(G){const xe=G.material;if(xe)if(Array.isArray(xe))for(let be=0;be<xe.length;be++){const P=xe[be];st(P,X,G),V.add(P)}else st(xe,X,G),V.add(xe)}),x.pop(),m=null,V},this.compileAsync=function(b,k,X=null){const V=this.compile(b,k,X);return new Promise(G=>{function xe(){if(V.forEach(function(be){ie.get(be).currentProgram.isReady()&&V.delete(be)}),V.size===0){G(b);return}setTimeout(xe,10)}Y.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let mt=null;function Ft(b){mt&&mt(b)}function Je(){Ht.stop()}function xn(){Ht.start()}const Ht=new Nx;Ht.setAnimationLoop(Ft),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(b){mt=b,Be.setAnimationLoop(b),b===null?Ht.stop():Ht.start()},Be.addEventListener("sessionstart",Je),Be.addEventListener("sessionend",xn),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(k),k=Be.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,k,A),m=_e.get(b,x.length),m.init(k),x.push(m),pe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Pe.setFromProjectionMatrix(pe),re=this.localClippingEnabled,W=ve.init(this.clippingPlanes,re),_=Ie.get(b,d.length),_.init(),d.push(_),mo(b,k,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(N,j);const X=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1;X&&de.addToRenderList(_,b),this.info.render.frame++,W===!0&&ve.beginShadows();const V=m.state.shadowsArray;ke.render(V,b,k),W===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=_.opaque,xe=_.transmissive;if(m.setupLights(v._useLegacyLights),k.isArrayCamera){const be=k.cameras;if(xe.length>0)for(let P=0,le=be.length;P<le;P++){const ge=be[P];vo(G,xe,b,ge)}X&&de.render(b);for(let P=0,le=be.length;P<le;P++){const ge=be[P];go(_,b,ge,ge.viewport)}}else xe.length>0&&vo(G,xe,b,k),X&&de.render(b),go(_,b,k);A!==null&&(Me.updateMultisampleRenderTarget(A),Me.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(v,b,k),Ge.resetDefaultState(),L=-1,w=null,x.pop(),x.length>0?(m=x[x.length-1],W===!0&&ve.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function mo(b,k,X,V){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Pe.intersectsSprite(b)){V&&ce.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pe);const be=ee.update(b),P=b.material;P.visible&&_.push(b,be,P,X,ce.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Pe.intersectsObject(b))){const be=ee.update(b),P=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ce.copy(b.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ce.copy(be.boundingSphere.center)),ce.applyMatrix4(b.matrixWorld).applyMatrix4(pe)),Array.isArray(P)){const le=be.groups;for(let ge=0,Ue=le.length;ge<Ue;ge++){const ze=le[ge],wt=P[ze.materialIndex];wt&&wt.visible&&_.push(b,be,wt,X,ce.z,ze)}}else P.visible&&_.push(b,be,P,X,ce.z,null)}}const xe=b.children;for(let be=0,P=xe.length;be<P;be++)mo(xe[be],k,X,V)}function go(b,k,X,V){const G=b.opaque,xe=b.transmissive,be=b.transparent;m.setupLightsView(X),W===!0&&ve.setGlobalState(v.clippingPlanes,X),V&&K.viewport(M.copy(V)),G.length>0&&mr(G,k,X),xe.length>0&&mr(xe,k,X),be.length>0&&mr(be,k,X),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function vo(b,k,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Vr(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?fu:cr,minFilter:wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const xe=m.state.transmissionRenderTarget[V.id],be=V.viewport||M;xe.setSize(be.z,be.w);const P=v.getRenderTarget();v.setRenderTarget(xe),v.getClearColor(D),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear();const le=v.toneMapping;v.toneMapping=or;const ge=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),W===!0&&ve.setGlobalState(v.clippingPlanes,V),mr(b,X,V),Me.updateMultisampleRenderTarget(xe),Me.updateRenderTargetMipmap(xe),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ze=0,wt=k.length;ze<wt;ze++){const Ct=k[ze],nn=Ct.object,hi=Ct.geometry,nt=Ct.material,He=Ct.group;if(nt.side===Tn&&nn.layers.test(V.layers)){const So=nt.side;nt.side=ln,nt.needsUpdate=!0,_o(nn,X,V,hi,nt,He),nt.side=So,nt.needsUpdate=!0,Ue=!0}}Ue===!0&&(Me.updateMultisampleRenderTarget(xe),Me.updateRenderTargetMipmap(xe))}v.setRenderTarget(P),v.setClearColor(D,B),ge!==void 0&&(V.viewport=ge),v.toneMapping=le}function mr(b,k,X){const V=k.isScene===!0?k.overrideMaterial:null;for(let G=0,xe=b.length;G<xe;G++){const be=b[G],P=be.object,le=be.geometry,ge=V===null?be.material:V,Ue=be.group;P.layers.test(X.layers)&&_o(P,k,X,le,ge,Ue)}}function _o(b,k,X,V,G,xe){b.onBeforeRender(v,k,X,V,G,xe),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(v,k,X,V,b,xe),G.transparent===!0&&G.side===Tn&&G.forceSinglePass===!1?(G.side=ln,G.needsUpdate=!0,v.renderBufferDirect(X,k,V,G,b,xe),G.side=Ni,G.needsUpdate=!0,v.renderBufferDirect(X,k,V,G,b,xe),G.side=Tn):v.renderBufferDirect(X,k,V,G,b,xe),b.onAfterRender(v,k,X,V,G,xe)}function gr(b,k,X){k.isScene!==!0&&(k=Ee);const V=ie.get(b),G=m.state.lights,xe=m.state.shadowsArray,be=G.state.version,P=te.getParameters(b,G.state,xe,k,X),le=te.getProgramCacheKey(P);let ge=V.programs;V.environment=b.isMeshStandardMaterial?k.environment:null,V.fog=k.fog,V.envMap=(b.isMeshStandardMaterial?R:Le).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,ge===void 0&&(b.addEventListener("dispose",Se),ge=new Map,V.programs=ge);let Ue=ge.get(le);if(Ue!==void 0){if(V.currentProgram===Ue&&V.lightsStateVersion===be)return yo(b,P),Ue}else P.uniforms=te.getUniforms(b),b.onBuild(X,P,v),b.onBeforeCompile(P,v),Ue=te.acquireProgram(P,le),ge.set(le,Ue),V.uniforms=P.uniforms;const ze=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ze.clippingPlanes=ve.uniform),yo(b,P),V.needsLights=Ja(b),V.lightsStateVersion=be,V.needsLights&&(ze.ambientLightColor.value=G.state.ambient,ze.lightProbe.value=G.state.probe,ze.directionalLights.value=G.state.directional,ze.directionalLightShadows.value=G.state.directionalShadow,ze.spotLights.value=G.state.spot,ze.spotLightShadows.value=G.state.spotShadow,ze.rectAreaLights.value=G.state.rectArea,ze.ltc_1.value=G.state.rectAreaLTC1,ze.ltc_2.value=G.state.rectAreaLTC2,ze.pointLights.value=G.state.point,ze.pointLightShadows.value=G.state.pointShadow,ze.hemisphereLights.value=G.state.hemi,ze.directionalShadowMap.value=G.state.directionalShadowMap,ze.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ze.spotShadowMap.value=G.state.spotShadowMap,ze.spotLightMatrix.value=G.state.spotLightMatrix,ze.spotLightMap.value=G.state.spotLightMap,ze.pointShadowMap.value=G.state.pointShadowMap,ze.pointShadowMatrix.value=G.state.pointShadowMatrix),V.currentProgram=Ue,V.uniformsList=null,Ue}function xo(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=hc.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function yo(b,k){const X=ie.get(b);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Za(b,k,X,V,G){k.isScene!==!0&&(k=Ee),Me.resetTextureUnits();const xe=k.fog,be=V.isMeshStandardMaterial?k.environment:null,P=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:dr,le=(V.isMeshStandardMaterial?R:Le).get(V.envMap||be),ge=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ue=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),ze=!!X.morphAttributes.position,wt=!!X.morphAttributes.normal,Ct=!!X.morphAttributes.color;let nn=or;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(nn=v.toneMapping);const hi=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,nt=hi!==void 0?hi.length:0,He=ie.get(V),So=m.state.lights;if(W===!0&&(re===!0||b!==w)){const Nn=b===w&&V.id===L;ve.setState(V,b,Nn)}let gt=!1;V.version===He.__version?(He.needsLights&&He.lightsStateVersion!==So.state.version||He.outputColorSpace!==P||G.isBatchedMesh&&He.batching===!1||!G.isBatchedMesh&&He.batching===!0||G.isInstancedMesh&&He.instancing===!1||!G.isInstancedMesh&&He.instancing===!0||G.isSkinnedMesh&&He.skinning===!1||!G.isSkinnedMesh&&He.skinning===!0||G.isInstancedMesh&&He.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&He.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&He.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&He.instancingMorph===!1&&G.morphTexture!==null||He.envMap!==le||V.fog===!0&&He.fog!==xe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ve.numPlanes||He.numIntersection!==ve.numIntersection)||He.vertexAlphas!==ge||He.vertexTangents!==Ue||He.morphTargets!==ze||He.morphNormals!==wt||He.morphColors!==Ct||He.toneMapping!==nn||He.morphTargetsCount!==nt)&&(gt=!0):(gt=!0,He.__version=V.version);let vr=He.currentProgram;gt===!0&&(vr=gr(V,k,G));let Tp=!1,Mo=!1,Su=!1;const Xt=vr.getUniforms(),Fi=He.uniforms;if(K.useProgram(vr.program)&&(Tp=!0,Mo=!0,Su=!0),V.id!==L&&(L=V.id,Mo=!0),Tp||w!==b){Xt.setValue(O,"projectionMatrix",b.projectionMatrix),Xt.setValue(O,"viewMatrix",b.matrixWorldInverse);const Nn=Xt.map.cameraPosition;Nn!==void 0&&Nn.setValue(O,ce.setFromMatrixPosition(b.matrixWorld)),ae.logarithmicDepthBuffer&&Xt.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Xt.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),w!==b&&(w=b,Mo=!0,Su=!0)}if(G.isSkinnedMesh){Xt.setOptional(O,G,"bindMatrix"),Xt.setOptional(O,G,"bindMatrixInverse");const Nn=G.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),Xt.setValue(O,"boneTexture",Nn.boneTexture,Me))}G.isBatchedMesh&&(Xt.setOptional(O,G,"batchingTexture"),Xt.setValue(O,"batchingTexture",G._matricesTexture,Me));const Mu=X.morphAttributes;if((Mu.position!==void 0||Mu.normal!==void 0||Mu.color!==void 0)&&De.update(G,X,vr),(Mo||He.receiveShadow!==G.receiveShadow)&&(He.receiveShadow=G.receiveShadow,Xt.setValue(O,"receiveShadow",G.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Fi.envMap.value=le,Fi.flipEnvMap.value=le.isCubeTexture&&le.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&k.environment!==null&&(Fi.envMapIntensity.value=k.environmentIntensity),Mo&&(Xt.setValue(O,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&Ka(Fi,Su),xe&&V.fog===!0&&oe.refreshFogUniforms(Fi,xe),oe.refreshMaterialUniforms(Fi,V,Q,Z,m.state.transmissionRenderTarget[b.id]),hc.upload(O,xo(He),Fi,Me)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(hc.upload(O,xo(He),Fi,Me),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Xt.setValue(O,"center",G.center),Xt.setValue(O,"modelViewMatrix",G.modelViewMatrix),Xt.setValue(O,"normalMatrix",G.normalMatrix),Xt.setValue(O,"modelMatrix",G.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Nn=V.uniformsGroups;for(let wu=0,My=Nn.length;wu<My;wu++){const Ap=Nn[wu];Ye.update(Ap,vr),Ye.bind(Ap,vr)}}return vr}function Ka(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Ja(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,k,X){ie.get(b.texture).__webglTexture=k,ie.get(b.depthTexture).__webglTexture=X;const V=ie.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=X===void 0,V.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,k){const X=ie.get(b);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,X=0){A=b,C=k,T=X;let V=!0,G=null,xe=!1,be=!1;if(b){const le=ie.get(b);le.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(O.FRAMEBUFFER,null),V=!1):le.__webglFramebuffer===void 0?Me.setupRenderTarget(b):le.__hasExternalTextures&&Me.rebindTextures(b,ie.get(b.texture).__webglTexture,ie.get(b.depthTexture).__webglTexture);const ge=b.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(be=!0);const Ue=ie.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ue[k])?G=Ue[k][X]:G=Ue[k],xe=!0):b.samples>0&&Me.useMultisampledRTT(b)===!1?G=ie.get(b).__webglMultisampledFramebuffer:Array.isArray(Ue)?G=Ue[X]:G=Ue,M.copy(b.viewport),U.copy(b.scissor),H=b.scissorTest}else M.copy(q).multiplyScalar(Q).floor(),U.copy(ne).multiplyScalar(Q).floor(),H=me;if(K.bindFramebuffer(O.FRAMEBUFFER,G)&&V&&K.drawBuffers(b,G),K.viewport(M),K.scissor(U),K.setScissorTest(H),xe){const le=ie.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,le.__webglTexture,X)}else if(be){const le=ie.get(b.texture),ge=k||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,le.__webglTexture,X||0,ge)}L=-1},this.readRenderTargetPixels=function(b,k,X,V,G,xe,be){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let P=ie.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(P=P[be]),P){K.bindFramebuffer(O.FRAMEBUFFER,P);try{const le=b.texture,ge=le.format,Ue=le.type;if(!ae.textureFormatReadable(ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-V&&X>=0&&X<=b.height-G&&O.readPixels(k,X,V,G,Te.convert(ge),Te.convert(Ue),xe)}finally{const le=A!==null?ie.get(A).__webglFramebuffer:null;K.bindFramebuffer(O.FRAMEBUFFER,le)}}},this.copyFramebufferToTexture=function(b,k,X=0){const V=Math.pow(2,-X),G=Math.floor(k.image.width*V),xe=Math.floor(k.image.height*V);Me.setTexture2D(k,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,b.x,b.y,G,xe),K.unbindTexture()},this.copyTextureToTexture=function(b,k,X,V=0){const G=k.image.width,xe=k.image.height,be=Te.convert(X.format),P=Te.convert(X.type);Me.setTexture2D(X,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment),k.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,V,b.x,b.y,G,xe,be,P,k.image.data):k.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,V,b.x,b.y,k.mipmaps[0].width,k.mipmaps[0].height,be,k.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,V,b.x,b.y,be,P,k.image),V===0&&X.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(b,k,X,V,G=0){const xe=b.max.x-b.min.x,be=b.max.y-b.min.y,P=b.max.z-b.min.z,le=Te.convert(V.format),ge=Te.convert(V.type);let Ue;if(V.isData3DTexture)Me.setTexture3D(V,0),Ue=O.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)Me.setTexture2DArray(V,0),Ue=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const ze=O.getParameter(O.UNPACK_ROW_LENGTH),wt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ct=O.getParameter(O.UNPACK_SKIP_PIXELS),nn=O.getParameter(O.UNPACK_SKIP_ROWS),hi=O.getParameter(O.UNPACK_SKIP_IMAGES),nt=X.isCompressedTexture?X.mipmaps[G]:X.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,nt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,nt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,b.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,b.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,b.min.z),X.isDataTexture||X.isData3DTexture?O.texSubImage3D(Ue,G,k.x,k.y,k.z,xe,be,P,le,ge,nt.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(Ue,G,k.x,k.y,k.z,xe,be,P,le,nt.data):O.texSubImage3D(Ue,G,k.x,k.y,k.z,xe,be,P,le,ge,nt),O.pixelStorei(O.UNPACK_ROW_LENGTH,ze),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ct),O.pixelStorei(O.UNPACK_SKIP_ROWS,nn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,hi),G===0&&V.generateMipmaps&&O.generateMipmap(Ue),K.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Me.setTextureCube(b,0):b.isData3DTexture?Me.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Me.setTexture2DArray(b,0):Me.setTexture2D(b,0),K.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,K.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Qd?"display-p3":"srgb",n.unpackColorSpace=rt.workingColorSpace===du?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ip{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=n,this.far=i}clone(){return new ip(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class rp extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class yb extends jt{constructor(e=null,n=1,i=1,r,s,o,a,l,c=mn,u=mn,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class n0 extends Jn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ms=new ot,i0=new ot,kl=[],r0=new pr,Sb=new ot,Uo=new et,Fo=new ho;class Mb extends et{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new n0(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Sb)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new pr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ms),r0.copy(e.boundingBox).applyMatrix4(ms),this.boundingBox.union(r0)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ho),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ms),Fo.copy(e.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(Fo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Uo.geometry=this.geometry,Uo.material=this.material,Uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fo.copy(this.boundingSphere),Fo.applyMatrix4(i),e.ray.intersectsSphere(Fo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ms),i0.multiplyMatrices(i,ms),Uo.matrixWorld=i0,Uo.raycast(e,kl);for(let o=0,a=kl.length;o<a;o++){const l=kl[o];l.instanceId=s,l.object=this,n.push(l)}kl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new n0(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new yb(new Float32Array(r*this.count),r,this.count,px,Ei));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Hx extends qr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vc=new I,Gc=new I,s0=new ot,Oo=new wx,zl=new ho,bh=new I,o0=new I;class wb extends Nt{constructor(e=new Ut,n=new Hx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Vc.fromBufferAttribute(n,r-1),Gc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Vc.distanceTo(Gc);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(r),zl.radius+=s,e.ray.intersectsSphere(zl)===!1)return;s0.copy(r).invert(),Oo.copy(e.ray).applyMatrix4(s0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=u.getX(_),x=u.getX(_+1),v=Bl(this,e,Oo,l,d,x);v&&n.push(v)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),d=Bl(this,e,Oo,l,_,m);d&&n.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=Bl(this,e,Oo,l,_,_+1);d&&n.push(d)}if(this.isLineLoop){const _=Bl(this,e,Oo,l,g-1,p);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Bl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Vc.fromBufferAttribute(o,r),Gc.fromBufferAttribute(o,s),n.distanceSqToSegment(Vc,Gc,bh,o0)>i)return;bh.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(bh);if(!(l<e.near||l>e.far))return{distance:l,point:o0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const a0=new I,l0=new I;class Eb extends wb{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)a0.fromBufferAttribute(n,r),l0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+a0.distanceTo(l0);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vx extends jt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new fe:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new I,r=[],s=[],o=[],a=new I,l=new ot;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Pt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Pt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class sp extends ci{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new fe){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Tb extends sp{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function op(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Hl=new I,Ch=new op,Rh=new op,Ph=new op;class Ab extends ci{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new I){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Hl.subVectors(r[0],r[1]).add(r[0]),c=Hl);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Hl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Hl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ch.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),Rh.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),Ph.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Ch.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Rh.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ph.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Ch.calc(l),Rh.calc(l),Ph.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function c0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function bb(t,e){const n=1-t;return n*n*e}function Cb(t,e){return 2*(1-t)*t*e}function Rb(t,e){return t*t*e}function da(t,e,n,i){return bb(t,e)+Cb(t,n)+Rb(t,i)}function Pb(t,e){const n=1-t;return n*n*n*e}function Lb(t,e){const n=1-t;return 3*n*n*t*e}function Nb(t,e){return 3*(1-t)*t*t*e}function Db(t,e){return t*t*t*e}function pa(t,e,n,i,r){return Pb(t,e)+Lb(t,n)+Nb(t,i)+Db(t,r)}class Gx extends ci{constructor(e=new fe,n=new fe,i=new fe,r=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new fe){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(pa(e,r.x,s.x,o.x,a.x),pa(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ib extends ci{constructor(e=new I,n=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new I){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(pa(e,r.x,s.x,o.x,a.x),pa(e,r.y,s.y,o.y,a.y),pa(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wx extends ci{constructor(e=new fe,n=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new fe){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new fe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ub extends ci{constructor(e=new I,n=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new I){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new I){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jx extends ci{constructor(e=new fe,n=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new fe){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(da(e,r.x,s.x,o.x),da(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fb extends ci{constructor(e=new I,n=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new I){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(da(e,r.x,s.x,o.x),da(e,r.y,s.y,o.y),da(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $x extends ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new fe){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(c0(a,l.x,c.x,u.x,h.x),c0(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new fe().fromArray(r))}return this}}var $f=Object.freeze({__proto__:null,ArcCurve:Tb,CatmullRomCurve3:Ab,CubicBezierCurve:Gx,CubicBezierCurve3:Ib,EllipseCurve:sp,LineCurve:Wx,LineCurve3:Ub,QuadraticBezierCurve:jx,QuadraticBezierCurve3:Fb,SplineCurve:$x});class Ob extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $f[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new $f[r.type]().fromJSON(r))}return this}}class Xf extends Ob{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Wx(this.currentPoint.clone(),new fe(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new jx(this.currentPoint.clone(),new fe(e,n),new fe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new Gx(this.currentPoint.clone(),new fe(e,n),new fe(i,r),new fe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new $x(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new sp(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ap extends Ut{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=Pt(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/n,h=new I,f=new fe,p=new I,g=new I,_=new I;let m=0,d=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,d=e[x+1].y-e[x].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[x+1].x-e[x].x,d=e[x+1].y-e[x].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let x=0;x<=n;x++){const v=i+x*u*r,y=Math.sin(v),C=Math.cos(v);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*y,h.y=e[T].y,h.z=e[T].x*C,o.push(h.x,h.y,h.z),f.x=x/n,f.y=T/(e.length-1),a.push(f.x,f.y);const A=l[3*T+0]*y,L=l[3*T+1],w=l[3*T+0]*C;c.push(A,L,w)}}for(let x=0;x<n;x++)for(let v=0;v<e.length-1;v++){const y=v+x*e.length,C=y,T=y+e.length,A=y+e.length+1,L=y+1;s.push(C,T,L),s.push(A,L,T)}this.setIndex(s),this.setAttribute("position",new tt(o,3)),this.setAttribute("uv",new tt(a,2)),this.setAttribute("normal",new tt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ap(e.points,e.segments,e.phiStart,e.phiLength)}}class Wc extends Ut{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new I,u=new fe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=n;h++,f+=3){const p=i+h/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class lp extends Ut{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],p=[];let g=0;const _=[],m=i/2;let d=0;x(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(f,3)),this.setAttribute("uv",new tt(p,2));function x(){const y=new I,C=new I;let T=0;const A=(n-e)/i;for(let L=0;L<=s;L++){const w=[],M=L/s,U=M*(n-e)+e;for(let H=0;H<=r;H++){const D=H/r,B=D*l+a,$=Math.sin(B),Z=Math.cos(B);C.x=U*$,C.y=-M*i+m,C.z=U*Z,h.push(C.x,C.y,C.z),y.set($,A,Z).normalize(),f.push(y.x,y.y,y.z),p.push(D,1-M),w.push(g++)}_.push(w)}for(let L=0;L<r;L++)for(let w=0;w<s;w++){const M=_[w][L],U=_[w+1][L],H=_[w+1][L+1],D=_[w][L+1];u.push(M,U,D),u.push(U,H,D),T+=6}c.addGroup(d,T,0),d+=T}function v(y){const C=g,T=new fe,A=new I;let L=0;const w=y===!0?e:n,M=y===!0?1:-1;for(let H=1;H<=r;H++)h.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const U=g;for(let H=0;H<=r;H++){const B=H/r*l+a,$=Math.cos(B),Z=Math.sin(B);A.x=w*Z,A.y=m*M,A.z=w*$,h.push(A.x,A.y,A.z),f.push(0,M,0),T.x=$*.5+.5,T.y=Z*.5*M+.5,p.push(T.x,T.y),g++}for(let H=0;H<r;H++){const D=C+H,B=U+H;y===!0?u.push(B,B+1,D):u.push(B+1,B,D),L+=3}c.addGroup(d,L,y===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Vl=new I,Gl=new I,Lh=new I,Wl=new Yn;class kb extends Ut{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Ws*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:d}=Wl;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),Wl.getNormal(Lh),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){const v=(x+1)%3,y=h[x],C=h[v],T=Wl[u[x]],A=Wl[u[v]],L=`${y}_${C}`,w=`${C}_${y}`;w in f&&f[w]?(Lh.dot(f[w].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(A.x,A.y,A.z)),f[w]=null):L in f||(f[L]={index0:c[x],index1:c[v],normal:Lh.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];Vl.fromBufferAttribute(a,_),Gl.fromBufferAttribute(a,m),p.push(Vl.x,Vl.y,Vl.z),p.push(Gl.x,Gl.y,Gl.z)}this.setAttribute("position",new tt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class cp extends Xf{constructor(e){super(e),this.uuid=Xr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Xf().fromJSON(r))}return this}}const zb={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=Xx(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,p;if(i&&(s=Wb(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let g=n;g<r;g+=n)h=t[g],f=t[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return za(s,o,n,a,l,p,0),o}};function Xx(t,e,n,i,r){let s,o;if(r===tC(t,e,n,i)>0)for(s=e;s<n;s+=i)o=u0(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=u0(s,t[s],t[s+1],o);return o&&gu(o,o.next)&&(Ha(o),o=o.next),o}function Gr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(gu(n,n.next)||yt(n.prev,n,n.next)===0)){if(Ha(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function za(t,e,n,i,r,s,o){if(!t)return;!o&&s&&Yb(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?Hb(t,i,r,s):Bb(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),Ha(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=Vb(Gr(t),e,n),za(t,e,n,i,r,s,2)):o===2&&Gb(t,e,n,i,r,s):za(Gr(t),e,n,i,r,s,1);break}}}function Bb(t){const e=t.prev,n=t,i=t.next;if(yt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&Us(r,a,s,l,o,c,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Hb(t,e,n,i){const r=t.prev,s=t,o=t.next;if(yt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,d=qf(p,g,e,n,i),x=qf(_,m,e,n,i);let v=t.prevZ,y=t.nextZ;for(;v&&v.z>=d&&y&&y.z<=x;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Us(a,u,l,h,c,f,v.x,v.y)&&yt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Us(a,u,l,h,c,f,y.x,y.y)&&yt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=d;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Us(a,u,l,h,c,f,v.x,v.y)&&yt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Us(a,u,l,h,c,f,y.x,y.y)&&yt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Vb(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!gu(r,s)&&qx(r,i,i.next,s)&&Ba(r,s)&&Ba(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Ha(i),Ha(i.next),i=t=s),i=i.next}while(i!==t);return Gr(i)}function Gb(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Jb(o,a)){let l=Yx(o,a);o=Gr(o,o.next),l=Gr(l,l.next),za(o,e,n,i,r,s,0),za(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function Wb(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=Xx(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(Kb(c));for(r.sort(jb),s=0;s<r.length;s++)n=$b(r[s],n);return n}function jb(t,e){return t.x-e.x}function $b(t,e){const n=Xb(t,e);if(!n)return e;const i=Yx(n,t);return Gr(i,i.next),Gr(n,n.next)}function Xb(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const f=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=s&&f>i&&(i=f,r=n.x<n.next.x?n:n.next,f===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Us(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),Ba(n,t)&&(h<u||h===u&&(n.x>r.x||n.x===r.x&&qb(r,n)))&&(r=n,u=h)),n=n.next;while(n!==a);return r}function qb(t,e){return yt(t.prev,t,e.prev)<0&&yt(e.next,t,t.next)<0}function Yb(t,e,n,i){let r=t;do r.z===0&&(r.z=qf(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,Zb(r)}function Zb(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function qf(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Kb(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Us(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function Jb(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Qb(t,e)&&(Ba(t,e)&&Ba(e,t)&&eC(t,e)&&(yt(t.prev,t,e.prev)||yt(t,e.prev,e))||gu(t,e)&&yt(t.prev,t,t.next)>0&&yt(e.prev,e,e.next)>0)}function yt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function gu(t,e){return t.x===e.x&&t.y===e.y}function qx(t,e,n,i){const r=$l(yt(t,e,n)),s=$l(yt(t,e,i)),o=$l(yt(n,i,t)),a=$l(yt(n,i,e));return!!(r!==s&&o!==a||r===0&&jl(t,n,e)||s===0&&jl(t,i,e)||o===0&&jl(n,t,i)||a===0&&jl(n,e,i))}function jl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function $l(t){return t>0?1:t<0?-1:0}function Qb(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&qx(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Ba(t,e){return yt(t.prev,t,t.next)<0?yt(t,e,t.next)>=0&&yt(t,t.prev,e)>=0:yt(t,e,t.prev)<0||yt(t,t.next,e)<0}function eC(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Yx(t,e){const n=new Yf(t.i,t.x,t.y),i=new Yf(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function u0(t,e,n,i){const r=new Yf(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ha(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Yf(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function tC(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class ma{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ma.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];h0(e),f0(i,e);let o=e.length;n.forEach(h0);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,f0(i,n[l]);const a=zb.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function h0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function f0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class vu extends Ut{constructor(e=new cp([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new tt(r,3)),this.setAttribute("uv",new tt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,_=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const d=n.extrudePath,x=n.UVGenerator!==void 0?n.UVGenerator:nC;let v,y=!1,C,T,A,L;d&&(v=d.getSpacedPoints(u),y=!0,f=!1,C=d.computeFrenetFrames(u,!1),T=new I,A=new I,L=new I),f||(m=0,p=0,g=0,_=0);const w=a.extractPoints(c);let M=w.shape;const U=w.holes;if(!ma.isClockWise(M)){M=M.reverse();for(let Y=0,ae=U.length;Y<ae;Y++){const K=U[Y];ma.isClockWise(K)&&(U[Y]=K.reverse())}}const D=ma.triangulateShape(M,U),B=M;for(let Y=0,ae=U.length;Y<ae;Y++){const K=U[Y];M=M.concat(K)}function $(Y,ae,K){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(ae,K)}const Z=M.length,Q=D.length;function N(Y,ae,K){let he,ie,Me;const Le=Y.x-ae.x,R=Y.y-ae.y,E=K.x-Y.x,z=K.y-Y.y,ee=Le*Le+R*R,te=Le*z-R*E;if(Math.abs(te)>Number.EPSILON){const oe=Math.sqrt(ee),Ie=Math.sqrt(E*E+z*z),_e=ae.x-R/oe,ve=ae.y+Le/oe,ke=K.x-z/Ie,de=K.y+E/Ie,De=((ke-_e)*z-(de-ve)*E)/(Le*z-R*E);he=_e+Le*De-Y.x,ie=ve+R*De-Y.y;const qe=he*he+ie*ie;if(qe<=2)return new fe(he,ie);Me=Math.sqrt(qe/2)}else{let oe=!1;Le>Number.EPSILON?E>Number.EPSILON&&(oe=!0):Le<-Number.EPSILON?E<-Number.EPSILON&&(oe=!0):Math.sign(R)===Math.sign(z)&&(oe=!0),oe?(he=-R,ie=Le,Me=Math.sqrt(ee)):(he=Le,ie=R,Me=Math.sqrt(ee/2))}return new fe(he/Me,ie/Me)}const j=[];for(let Y=0,ae=B.length,K=ae-1,he=Y+1;Y<ae;Y++,K++,he++)K===ae&&(K=0),he===ae&&(he=0),j[Y]=N(B[Y],B[K],B[he]);const q=[];let ne,me=j.concat();for(let Y=0,ae=U.length;Y<ae;Y++){const K=U[Y];ne=[];for(let he=0,ie=K.length,Me=ie-1,Le=he+1;he<ie;he++,Me++,Le++)Me===ie&&(Me=0),Le===ie&&(Le=0),ne[he]=N(K[he],K[Me],K[Le]);q.push(ne),me=me.concat(ne)}for(let Y=0;Y<m;Y++){const ae=Y/m,K=p*Math.cos(ae*Math.PI/2),he=g*Math.sin(ae*Math.PI/2)+_;for(let ie=0,Me=B.length;ie<Me;ie++){const Le=$(B[ie],j[ie],he);ce(Le.x,Le.y,-K)}for(let ie=0,Me=U.length;ie<Me;ie++){const Le=U[ie];ne=q[ie];for(let R=0,E=Le.length;R<E;R++){const z=$(Le[R],ne[R],he);ce(z.x,z.y,-K)}}}const Pe=g+_;for(let Y=0;Y<Z;Y++){const ae=f?$(M[Y],me[Y],Pe):M[Y];y?(A.copy(C.normals[0]).multiplyScalar(ae.x),T.copy(C.binormals[0]).multiplyScalar(ae.y),L.copy(v[0]).add(A).add(T),ce(L.x,L.y,L.z)):ce(ae.x,ae.y,0)}for(let Y=1;Y<=u;Y++)for(let ae=0;ae<Z;ae++){const K=f?$(M[ae],me[ae],Pe):M[ae];y?(A.copy(C.normals[Y]).multiplyScalar(K.x),T.copy(C.binormals[Y]).multiplyScalar(K.y),L.copy(v[Y]).add(A).add(T),ce(L.x,L.y,L.z)):ce(K.x,K.y,h/u*Y)}for(let Y=m-1;Y>=0;Y--){const ae=Y/m,K=p*Math.cos(ae*Math.PI/2),he=g*Math.sin(ae*Math.PI/2)+_;for(let ie=0,Me=B.length;ie<Me;ie++){const Le=$(B[ie],j[ie],he);ce(Le.x,Le.y,h+K)}for(let ie=0,Me=U.length;ie<Me;ie++){const Le=U[ie];ne=q[ie];for(let R=0,E=Le.length;R<E;R++){const z=$(Le[R],ne[R],he);y?ce(z.x,z.y+v[u-1].y,v[u-1].x+K):ce(z.x,z.y,h+K)}}}W(),re();function W(){const Y=r.length/3;if(f){let ae=0,K=Z*ae;for(let he=0;he<Q;he++){const ie=D[he];Ee(ie[2]+K,ie[1]+K,ie[0]+K)}ae=u+m*2,K=Z*ae;for(let he=0;he<Q;he++){const ie=D[he];Ee(ie[0]+K,ie[1]+K,ie[2]+K)}}else{for(let ae=0;ae<Q;ae++){const K=D[ae];Ee(K[2],K[1],K[0])}for(let ae=0;ae<Q;ae++){const K=D[ae];Ee(K[0]+Z*u,K[1]+Z*u,K[2]+Z*u)}}i.addGroup(Y,r.length/3-Y,0)}function re(){const Y=r.length/3;let ae=0;pe(B,ae),ae+=B.length;for(let K=0,he=U.length;K<he;K++){const ie=U[K];pe(ie,ae),ae+=ie.length}i.addGroup(Y,r.length/3-Y,1)}function pe(Y,ae){let K=Y.length;for(;--K>=0;){const he=K;let ie=K-1;ie<0&&(ie=Y.length-1);for(let Me=0,Le=u+m*2;Me<Le;Me++){const R=Z*Me,E=Z*(Me+1),z=ae+he+R,ee=ae+ie+R,te=ae+ie+E,oe=ae+he+E;Oe(z,ee,te,oe)}}}function ce(Y,ae,K){l.push(Y),l.push(ae),l.push(K)}function Ee(Y,ae,K){O(Y),O(ae),O(K);const he=r.length/3,ie=x.generateTopUV(i,r,he-3,he-2,he-1);Ve(ie[0]),Ve(ie[1]),Ve(ie[2])}function Oe(Y,ae,K,he){O(Y),O(ae),O(he),O(ae),O(K),O(he);const ie=r.length/3,Me=x.generateSideWallUV(i,r,ie-6,ie-3,ie-2,ie-1);Ve(Me[0]),Ve(Me[1]),Ve(Me[3]),Ve(Me[1]),Ve(Me[2]),Ve(Me[3])}function O(Y){r.push(l[Y*3+0]),r.push(l[Y*3+1]),r.push(l[Y*3+2])}function Ve(Y){s.push(Y.x),s.push(Y.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return iC(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new $f[r.type]().fromJSON(r)),new vu(i,e.options)}}const nC={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new fe(s,o),new fe(a,l),new fe(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],p=e[r*3+1],g=e[r*3+2],_=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new fe(o,1-l),new fe(c,1-h),new fe(f,1-g),new fe(_,1-d)]:[new fe(a,1-l),new fe(u,1-h),new fe(p,1-g),new fe(m,1-d)]}};function iC(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class up extends Ut{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let h=e;const f=(n-e)/r,p=new I,g=new fe;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const d=s+m/i*o;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/n+1)/2,g.y=(p.y/n+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<r;_++){const m=_*(i+1);for(let d=0;d<i;d++){const x=d+m,v=x,y=x+i+1,C=x+i+2,T=x+1;a.push(v,y,T),a.push(y,C,T)}}this.setIndex(a),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new up(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class hp extends Ut{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new I,f=new I,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const x=[],v=d/i;let y=0;d===0&&o===0?y=.5/n:d===i&&l===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){const T=C/n;h.x=-e*Math.cos(r+T*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(r+T*s)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(T+y,1-v),x.push(c++)}u.push(x)}for(let d=0;d<i;d++)for(let x=0;x<n;x++){const v=u[d][x+1],y=u[d][x],C=u[d+1][x],T=u[d+1][x+1];(d!==0||o>0)&&p.push(v,y,T),(d!==i-1||l<Math.PI)&&p.push(y,C,T)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class d0 extends qr{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new We(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class jc extends qr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_x,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class p0 extends jc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const m0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class rC{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const sC=new rC;class fp{constructor(e){this.manager=e!==void 0?e:sC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fp.DEFAULT_MATERIAL_NAME="__DEFAULT";class oC extends fp{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=m0.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=ka("img");function l(){u(),m0.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class aC extends fp{constructor(e){super(e)}load(e,n,i,r){const s=new jt,o=new oC(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class _u extends Nt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class lC extends _u{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Nh=new ot,g0=new I,v0=new I;class Zx{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tp,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;g0.setFromMatrixPosition(e.matrixWorld),n.position.copy(g0),v0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(v0),n.updateMatrixWorld(),Nh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _0=new ot,ko=new I,Dh=new I;class cC extends Zx{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ko.setFromMatrixPosition(e.matrixWorld),i.position.copy(ko),Dh.copy(i.position),Dh.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Dh),i.updateMatrixWorld(),r.makeTranslation(-ko.x,-ko.y,-ko.z),_0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_0)}}class uC extends _u{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new cC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hC extends Zx{constructor(){super(new Dx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class na extends _u{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new hC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fC{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new I)}set(e){for(let n=0;n<9;n++)this.coefficients[n].copy(e[n]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,n){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.282095),n.addScaledVector(o[1],.488603*r),n.addScaledVector(o[2],.488603*s),n.addScaledVector(o[3],.488603*i),n.addScaledVector(o[4],1.092548*(i*r)),n.addScaledVector(o[5],1.092548*(r*s)),n.addScaledVector(o[6],.315392*(3*s*s-1)),n.addScaledVector(o[7],1.092548*(i*s)),n.addScaledVector(o[8],.546274*(i*i-r*r)),n}getIrradianceAt(e,n){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.886227),n.addScaledVector(o[1],2*.511664*r),n.addScaledVector(o[2],2*.511664*s),n.addScaledVector(o[3],2*.511664*i),n.addScaledVector(o[4],2*.429043*i*r),n.addScaledVector(o[5],2*.429043*r*s),n.addScaledVector(o[6],.743125*s*s-.247708),n.addScaledVector(o[7],2*.429043*i*s),n.addScaledVector(o[8],.429043*(i*i-r*r)),n}add(e){for(let n=0;n<9;n++)this.coefficients[n].add(e.coefficients[n]);return this}addScaledSH(e,n){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],n);return this}scale(e){for(let n=0;n<9;n++)this.coefficients[n].multiplyScalar(e);return this}lerp(e,n){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],n);return this}equals(e){for(let n=0;n<9;n++)if(!this.coefficients[n].equals(e.coefficients[n]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,n+r*3);return this}toArray(e=[],n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,n+r*3);return e}static getBasisAt(e,n){const i=e.x,r=e.y,s=e.z;n[0]=.282095,n[1]=.488603*r,n[2]=.488603*s,n[3]=.488603*i,n[4]=1.092548*i*r,n[5]=1.092548*r*s,n[6]=.315392*(3*s*s-1),n[7]=1.092548*i*s,n[8]=.546274*(i*i-r*r)}}class dC extends _u{constructor(e=new fC,n=1){super(void 0,n),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const n=super.toJSON(e);return n.object.sh=this.sh.toArray(),n}}class dp{constructor(e){this.value=e}clone(){return new dp(this.value.clone===void 0?this.value:this.value.clone())}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jd);class pC extends rp{constructor(e=null){super();const n=new Yr;n.deleteAttribute("uv");const i=new jc({side:ln}),r=new jc;let s=5;e!==null&&e._useLegacyLights===!1&&(s=900);const o=new uC(16777215,s,28,2);o.position.set(.418,16.199,.3),this.add(o);const a=new et(n,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const l=new et(n,r);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);const c=new et(n,r);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);const u=new et(n,r);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);const h=new et(n,r);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const f=new et(n,r);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);const p=new et(n,r);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);const g=new et(n,gs(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);const _=new et(n,gs(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);const m=new et(n,gs(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const d=new et(n,gs(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const x=new et(n,gs(20));x.position.set(3.235,11.486,-12.541),x.scale.set(2.5,2,.1),this.add(x);const v=new et(n,gs(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function gs(t){const e=new pu;return e.color.setScalar(t),e}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var tn=Uint8Array,bn=Uint16Array,pp=Int32Array,mp=new tn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),gp=new tn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),x0=new tn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Kx=function(t,e){for(var n=new bn(31),i=0;i<31;++i)n[i]=e+=1<<t[i-1];for(var r=new pp(n[30]),i=1;i<30;++i)for(var s=n[i];s<n[i+1];++s)r[s]=s-n[i]<<5|i;return{b:n,r}},Jx=Kx(mp,2),mC=Jx.b,Zf=Jx.r;mC[28]=258,Zf[258]=28;var gC=Kx(gp,0),y0=gC.r,Kf=new bn(32768);for(var ft=0;ft<32768;++ft){var Wi=(ft&43690)>>1|(ft&21845)<<1;Wi=(Wi&52428)>>2|(Wi&13107)<<2,Wi=(Wi&61680)>>4|(Wi&3855)<<4,Kf[ft]=((Wi&65280)>>8|(Wi&255)<<8)>>1}var ga=function(t,e,n){for(var i=t.length,r=0,s=new bn(e);r<i;++r)t[r]&&++s[t[r]-1];var o=new bn(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(n){a=new bn(1<<e);var l=15-e;for(r=0;r<i;++r)if(t[r])for(var c=r<<4|t[r],u=e-t[r],h=o[t[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[Kf[h]>>l]=c}else for(a=new bn(i),r=0;r<i;++r)t[r]&&(a[r]=Kf[o[t[r]-1]++]>>15-t[r]);return a},Wr=new tn(288);for(var ft=0;ft<144;++ft)Wr[ft]=8;for(var ft=144;ft<256;++ft)Wr[ft]=9;for(var ft=256;ft<280;++ft)Wr[ft]=7;for(var ft=280;ft<288;++ft)Wr[ft]=8;var $c=new tn(32);for(var ft=0;ft<32;++ft)$c[ft]=5;var vC=ga(Wr,9,0),_C=ga($c,5,0),Qx=function(t){return(t+7)/8|0},ey=function(t,e,n){return(n==null||n>t.length)&&(n=t.length),new tn(t.subarray(e,n))},xC=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],xu=function(t,e,n){var i=new Error(e||xC[t]);if(i.code=t,Error.captureStackTrace&&Error.captureStackTrace(i,xu),!n)throw i;return i},vi=function(t,e,n){n<<=e&7;var i=e/8|0;t[i]|=n,t[i+1]|=n>>8},zo=function(t,e,n){n<<=e&7;var i=e/8|0;t[i]|=n,t[i+1]|=n>>8,t[i+2]|=n>>16},Ih=function(t,e){for(var n=[],i=0;i<t.length;++i)t[i]&&n.push({s:i,f:t[i]});var r=n.length,s=n.slice();if(!r)return{t:ny,l:0};if(r==1){var o=new tn(n[0].s+1);return o[n[0].s]=1,{t:o,l:1}}n.sort(function(C,T){return C.f-T.f}),n.push({s:-1,f:25001});var a=n[0],l=n[1],c=0,u=1,h=2;for(n[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=r-1;)a=n[n[c].f<n[h].f?c++:h++],l=n[c!=u&&n[c].f<n[h].f?c++:h++],n[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var f=s[0].s,i=1;i<r;++i)s[i].s>f&&(f=s[i].s);var p=new bn(f+1),g=Jf(n[u-1],p,0);if(g>e){var i=0,_=0,m=g-e,d=1<<m;for(s.sort(function(T,A){return p[A.s]-p[T.s]||T.f-A.f});i<r;++i){var x=s[i].s;if(p[x]>e)_+=d-(1<<g-p[x]),p[x]=e;else break}for(_>>=m;_>0;){var v=s[i].s;p[v]<e?_-=1<<e-p[v]++-1:++i}for(;i>=0&&_;--i){var y=s[i].s;p[y]==e&&(--p[y],++_)}g=e}return{t:new tn(p),l:g}},Jf=function(t,e,n){return t.s==-1?Math.max(Jf(t.l,e,n+1),Jf(t.r,e,n+1)):e[t.s]=n},S0=function(t){for(var e=t.length;e&&!t[--e];);for(var n=new bn(++e),i=0,r=t[0],s=1,o=function(l){n[i++]=l},a=1;a<=e;++a)if(t[a]==r&&a!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=t[a]}return{c:n.subarray(0,i),n:e}},Bo=function(t,e){for(var n=0,i=0;i<e.length;++i)n+=t[i]*e[i];return n},ty=function(t,e,n){var i=n.length,r=Qx(e+2);t[r]=i&255,t[r+1]=i>>8,t[r+2]=t[r]^255,t[r+3]=t[r+1]^255;for(var s=0;s<i;++s)t[r+s+4]=n[s];return(r+4+i)*8},M0=function(t,e,n,i,r,s,o,a,l,c,u){vi(e,u++,n),++r[256];for(var h=Ih(r,15),f=h.t,p=h.l,g=Ih(s,15),_=g.t,m=g.l,d=S0(f),x=d.c,v=d.n,y=S0(_),C=y.c,T=y.n,A=new bn(19),L=0;L<x.length;++L)++A[x[L]&31];for(var L=0;L<C.length;++L)++A[C[L]&31];for(var w=Ih(A,7),M=w.t,U=w.l,H=19;H>4&&!M[x0[H-1]];--H);var D=c+5<<3,B=Bo(r,Wr)+Bo(s,$c)+o,$=Bo(r,f)+Bo(s,_)+o+14+3*H+Bo(A,M)+2*A[16]+3*A[17]+7*A[18];if(l>=0&&D<=B&&D<=$)return ty(e,u,t.subarray(l,l+c));var Z,Q,N,j;if(vi(e,u,1+($<B)),u+=2,$<B){Z=ga(f,p,0),Q=f,N=ga(_,m,0),j=_;var q=ga(M,U,0);vi(e,u,v-257),vi(e,u+5,T-1),vi(e,u+10,H-4),u+=14;for(var L=0;L<H;++L)vi(e,u+3*L,M[x0[L]]);u+=3*H;for(var ne=[x,C],me=0;me<2;++me)for(var Pe=ne[me],L=0;L<Pe.length;++L){var W=Pe[L]&31;vi(e,u,q[W]),u+=M[W],W>15&&(vi(e,u,Pe[L]>>5&127),u+=Pe[L]>>12)}}else Z=vC,Q=Wr,N=_C,j=$c;for(var L=0;L<a;++L){var re=i[L];if(re>255){var W=re>>18&31;zo(e,u,Z[W+257]),u+=Q[W+257],W>7&&(vi(e,u,re>>23&31),u+=mp[W]);var pe=re&31;zo(e,u,N[pe]),u+=j[pe],pe>3&&(zo(e,u,re>>5&8191),u+=gp[pe])}else zo(e,u,Z[re]),u+=Q[re]}return zo(e,u,Z[256]),u+Q[256]},yC=new pp([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),ny=new tn(0),SC=function(t,e,n,i,r,s){var o=s.z||t.length,a=new tn(i+o+5*(1+Math.ceil(o/7e3))+r),l=a.subarray(i,a.length-r),c=s.l,u=(s.r||0)&7;if(e){u&&(l[0]=s.r>>3);for(var h=yC[e-1],f=h>>13,p=h&8191,g=(1<<n)-1,_=s.p||new bn(32768),m=s.h||new bn(g+1),d=Math.ceil(n/3),x=2*d,v=function(K){return(t[K]^t[K+1]<<d^t[K+2]<<x)&g},y=new pp(25e3),C=new bn(288),T=new bn(32),A=0,L=0,w=s.i||0,M=0,U=s.w||0,H=0;w+2<o;++w){var D=v(w),B=w&32767,$=m[D];if(_[B]=$,m[D]=B,U<=w){var Z=o-w;if((A>7e3||M>24576)&&(Z>423||!c)){u=M0(t,l,0,y,C,T,L,M,H,w-H,u),M=A=L=0,H=w;for(var Q=0;Q<286;++Q)C[Q]=0;for(var Q=0;Q<30;++Q)T[Q]=0}var N=2,j=0,q=p,ne=B-$&32767;if(Z>2&&D==v(w-ne))for(var me=Math.min(f,Z)-1,Pe=Math.min(32767,w),W=Math.min(258,Z);ne<=Pe&&--q&&B!=$;){if(t[w+N]==t[w+N-ne]){for(var re=0;re<W&&t[w+re]==t[w+re-ne];++re);if(re>N){if(N=re,j=ne,re>me)break;for(var pe=Math.min(ne,re-2),ce=0,Q=0;Q<pe;++Q){var Ee=w-ne+Q&32767,Oe=_[Ee],O=Ee-Oe&32767;O>ce&&(ce=O,$=Ee)}}}B=$,$=_[B],ne+=B-$&32767}if(j){y[M++]=268435456|Zf[N]<<18|y0[j];var Ve=Zf[N]&31,Y=y0[j]&31;L+=mp[Ve]+gp[Y],++C[257+Ve],++T[Y],U=w+N,++A}else y[M++]=t[w],++C[t[w]]}}for(w=Math.max(w,U);w<o;++w)y[M++]=t[w],++C[t[w]];u=M0(t,l,c,y,C,T,L,M,H,w-H,u),c||(s.r=u&7|l[u/8|0]<<3,u-=7,s.h=m,s.p=_,s.i=w,s.w=U)}else{for(var w=s.w||0;w<o+c;w+=65535){var ae=w+65535;ae>=o&&(l[u/8|0]=c,ae=o),u=ty(l,u+1,t.subarray(w,ae))}s.i=o}return ey(a,0,i+Qx(u)+r)},MC=function(){for(var t=new Int32Array(256),e=0;e<256;++e){for(var n=e,i=9;--i;)n=(n&1&&-306674912)^n>>>1;t[e]=n}return t}(),wC=function(){var t=-1;return{p:function(e){for(var n=t,i=0;i<e.length;++i)n=MC[n&255^e[i]]^n>>>8;t=n},d:function(){return~t}}},EC=function(t,e,n,i,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),o=new tn(s.length+t.length);o.set(s),o.set(t,s.length),t=o,r.w=s.length}return SC(t,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(t.length)))*1.5):20:12+e.mem,n,i,r)},iy=function(t,e){var n={};for(var i in t)n[i]=t[i];for(var i in e)n[i]=e[i];return n},Gt=function(t,e,n){for(;n;++e)t[e]=n,n>>>=8};function TC(t,e){return EC(t,e||{},0,0)}var ry=function(t,e,n,i){for(var r in t){var s=t[r],o=e+r,a=i;Array.isArray(s)&&(a=iy(i,s[1]),s=s[0]),s instanceof tn?n[o]=[s,a]:(n[o+="/"]=[new tn(0),a],ry(s,o,n,i))}},w0=typeof TextEncoder<"u"&&new TextEncoder,AC=typeof TextDecoder<"u"&&new TextDecoder,bC=0;try{AC.decode(ny,{stream:!0}),bC=1}catch{}function Xc(t,e){var n;if(w0)return w0.encode(t);for(var i=t.length,r=new tn(t.length+(t.length>>1)),s=0,o=function(c){r[s++]=c},n=0;n<i;++n){if(s+5>r.length){var a=new tn(s+8+(i-n<<1));a.set(r),r=a}var l=t.charCodeAt(n);l<128||e?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|t.charCodeAt(++n)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return ey(r,0,s)}var Qf=function(t){var e=0;if(t)for(var n in t){var i=t[n].length;i>65535&&xu(9),e+=i+4}return e},E0=function(t,e,n,i,r,s,o,a){var l=i.length,c=n.extra,u=a&&a.length,h=Qf(c);Gt(t,e,o!=null?33639248:67324752),e+=4,o!=null&&(t[e++]=20,t[e++]=n.os),t[e]=20,e+=2,t[e++]=n.flag<<1|(s<0&&8),t[e++]=r&&8,t[e++]=n.compression&255,t[e++]=n.compression>>8;var f=new Date(n.mtime==null?Date.now():n.mtime),p=f.getFullYear()-1980;if((p<0||p>119)&&xu(10),Gt(t,e,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,s!=-1&&(Gt(t,e,n.crc),Gt(t,e+4,s<0?-s-2:s),Gt(t,e+8,n.size)),Gt(t,e+12,l),Gt(t,e+14,h),e+=16,o!=null&&(Gt(t,e,u),Gt(t,e+6,n.attrs),Gt(t,e+10,o),e+=14),t.set(i,e),e+=l,h)for(var g in c){var _=c[g],m=_.length;Gt(t,e,+g),Gt(t,e+2,m),t.set(_,e+4),e+=4+m}return u&&(t.set(a,e),e+=u),e},CC=function(t,e,n,i,r){Gt(t,e,101010256),Gt(t,e+8,n),Gt(t,e+10,n),Gt(t,e+12,i),Gt(t,e+16,r)};function RC(t,e){e||(e={});var n={},i=[];ry(t,"",n,e);var r=0,s=0;for(var o in n){var a=n[o],l=a[0],c=a[1],u=c.level==0?0:8,h=Xc(o),f=h.length,p=c.comment,g=p&&Xc(p),_=g&&g.length,m=Qf(c.extra);f>65535&&xu(11);var d=u?TC(l,c):l,x=d.length,v=wC();v.p(l),i.push(iy(c,{size:l.length,crc:v.d(),c:d,f:h,m:g,u:f!=o.length||g&&p.length!=_,o:r,compression:u})),r+=30+f+m+x,s+=76+2*(f+m)+(_||0)+x}for(var y=new tn(s+22),C=r,T=s-r,A=0;A<i.length;++A){var h=i[A];E0(y,h.o,h,h.f,h.u,h.c.length);var L=30+h.f.length+Qf(h.extra);y.set(h.c,h.o+L),E0(y,r,h,h.f,h.u,h.c.length,h.o,h.m),r+=16+L+(h.m?h.m.length:0)}return CC(y,r,i.length,T,C),y}let Ho,Uh,vs,Xl;function PC(t,e=1/0,n=null){Uh||(Uh=new Zr(2,2,1,1)),vs||(vs=new Ii({uniforms:{blitTexture:new dp(t)},vertexShader:`
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
			}`})),vs.uniforms.blitTexture.value=t,vs.defines.IS_SRGB=t.colorSpace==En,vs.needsUpdate=!0,Xl||(Xl=new et(Uh,vs),Xl.frustumCulled=!1);const i=new fn,r=new rp;r.add(Xl),n===null&&(n=Ho=new Bx({antialias:!1}));const s=Math.min(t.image.width,e),o=Math.min(t.image.height,e);n.setSize(s,o),n.clear(),n.render(r,i);const a=document.createElement("canvas"),l=a.getContext("2d");a.width=s,a.height=o,l.drawImage(n.domElement,0,0,s,o);const c=new Vx(a);return c.minFilter=t.minFilter,c.magFilter=t.magFilter,c.wrapS=t.wrapS,c.wrapT=t.wrapT,c.name=t.name,Ho&&(Ho.forceContextLoss(),Ho.dispose(),Ho=null),c}class LC{parse(e,n,i,r){this.parseAsync(e,r).then(n).catch(i)}async parseAsync(e,n={}){n=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},quickLookCompatible:!1,maxTextureSize:1024},n);const i={},r="model.usda";i[r]=null;let s=sy();s+=DC(n);const o={},a={};e.traverseVisible(c=>{if(c.isMesh){const u=c.geometry,h=c.material;if(h.isMeshStandardMaterial){const f="geometries/Geometry_"+u.id+".usda";if(!(f in i)){const p=OC(u);i[f]=UC(p)}h.uuid in o||(o[h.uuid]=h),s+=FC(c,u,h)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",c)}else c.isCamera&&(s+=$C(c))}),s+=IC(),s+=GC(o,a,n.quickLookCompatible),i[r]=Xc(s),s=null;for(const c in a){let u=a[c];u.isCompressedTexture===!0&&(u=PC(u));const h=NC(u.image,u.flipY,n.maxTextureSize),f=await new Promise(p=>h.toBlob(p,"image/png",1));i[`textures/Texture_${c}.png`]=new Uint8Array(await f.arrayBuffer())}let l=0;for(const c in i){const u=i[c],h=34+c.length;l+=h;const f=l&63;if(f!==4){const p=64-f,g=new Uint8Array(p);i[c]=[u,{extra:{12345:g}}]}l=u.length}return RC(i,{level:0})}}function NC(t,e,n){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=n/Math.max(t.width,t.height),r=document.createElement("canvas");r.width=t.width*Math.min(1,i),r.height=t.height*Math.min(1,i);const s=r.getContext("2d");return e===!0&&(s.translate(0,r.height),s.scale(1,-1)),s.drawImage(t,0,0,r.width,r.height),r}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}const Jt=7;function sy(){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`}function DC(t){return`def Xform "Root"
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

`}function IC(){return`
		}
	}
}

`}function UC(t){let e=sy();return e+=t,Xc(e)}function FC(t,e,n){const i="Object_"+t.id,r=oy(t.matrixWorld);return t.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",t),`def Xform "${i}" (
	prepend references = @./geometries/Geometry_${e.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${r}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${n.id}>
}

`}function oy(t){const e=t.elements;return`( ${ql(e,0)}, ${ql(e,4)}, ${ql(e,8)}, ${ql(e,12)} )`}function ql(t,e){return`(${t[e+0]}, ${t[e+1]}, ${t[e+2]}, ${t[e+3]})`}function OC(t){return`
def "Geometry"
{
${kC(t)}
}
`}function kC(t){const e="Geometry",n=t.attributes,i=n.position.count;return`
	def Mesh "${e}"
	{
		int[] faceVertexCounts = [${zC(t)}]
		int[] faceVertexIndices = [${BC(t)}]
		normal3f[] normals = [${ed(n.normal,i)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${ed(n.position,i)}]
${VC(n)}
		uniform token subdivisionScheme = "none"
	}
`}function zC(t){const e=t.index!==null?t.index.count:t.attributes.position.count;return Array(e/3).fill(3).join(", ")}function BC(t){const e=t.index,n=[];if(e!==null)for(let i=0;i<e.count;i++)n.push(e.getX(i));else{const i=t.attributes.position.count;for(let r=0;r<i;r++)n.push(r)}return n.join(", ")}function ed(t,e){if(t===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");const n=[];for(let i=0;i<t.count;i++){const r=t.getX(i),s=t.getY(i),o=t.getZ(i);n.push(`(${r.toPrecision(Jt)}, ${s.toPrecision(Jt)}, ${o.toPrecision(Jt)})`)}return n.join(", ")}function HC(t){const e=[];for(let n=0;n<t.count;n++){const i=t.getX(n),r=t.getY(n);e.push(`(${i.toPrecision(Jt)}, ${1-r.toPrecision(Jt)})`)}return e.join(", ")}function VC(t){let e="";for(let i=0;i<4;i++){const r=i>0?i:"",s=t["uv"+r];s!==void 0&&(e+=`
		texCoord2f[] primvars:st${r} = [${HC(s)}] (
			interpolation = "vertex"
		)`)}const n=t.color;if(n!==void 0){const i=n.count;e+=`
	color3f[] primvars:displayColor = [${ed(n,i)}] (
		interpolation = "vertex"
		)`}return e}function GC(t,e,n=!1){const i=[];for(const r in t){const s=t[r];i.push(WC(s,e,n))}return`def "Materials"
{
${i.join("")}
}

`}function WC(t,e,n=!1){const i="			",r=[],s=[];function o(a,l,c){const u=a.source.id+"_"+a.flipY;e[u]=a;const h=a.channel>0?"st"+a.channel:"st",f={1e3:"repeat",1001:"clamp",1002:"mirror"},p=a.repeat.clone(),g=a.offset.clone(),_=a.rotation,m=Math.sin(_),d=Math.cos(_);return g.y=1-g.y-p.y,n?(g.x=g.x/p.x,g.y=g.y/p.y,g.x+=m/p.x,g.y+=d-1):(g.x+=m*p.x,g.y+=(1-d)*p.y),`
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
			float inputs:rotation = ${(_*(180/Math.PI)).toFixed(Jt)}
			float2 inputs:scale = ${A0(p)}
			float2 inputs:translation = ${A0(g)}
			float2 outputs:result
		}

		def Shader "Texture_${a.id}_${l}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${u}.png@
			float2 inputs:st.connect = </Materials/Material_${t.id}/Transform2d_${l}.outputs:result>
			${c!==void 0?"float4 inputs:scale = "+jC(c):""}
			token inputs:sourceColorSpace = "${a.colorSpace===qn?"raw":"sRGB"}"
			token inputs:wrapS = "${f[a.wrapS]}"
			token inputs:wrapT = "${f[a.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${t.transparent||t.alphaTest>0?"float outputs:a":""}
		}`}return t.side===Tn&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",t),t.map!==null?(r.push(`${i}color3f inputs:diffuseColor.connect = </Materials/Material_${t.id}/Texture_${t.map.id}_diffuse.outputs:rgb>`),t.transparent?r.push(`${i}float inputs:opacity.connect = </Materials/Material_${t.id}/Texture_${t.map.id}_diffuse.outputs:a>`):t.alphaTest>0&&(r.push(`${i}float inputs:opacity.connect = </Materials/Material_${t.id}/Texture_${t.map.id}_diffuse.outputs:a>`),r.push(`${i}float inputs:opacityThreshold = ${t.alphaTest}`)),s.push(o(t.map,"diffuse",t.color))):r.push(`${i}color3f inputs:diffuseColor = ${T0(t.color)}`),t.emissiveMap!==null?(r.push(`${i}color3f inputs:emissiveColor.connect = </Materials/Material_${t.id}/Texture_${t.emissiveMap.id}_emissive.outputs:rgb>`),s.push(o(t.emissiveMap,"emissive"))):t.emissive.getHex()>0&&r.push(`${i}color3f inputs:emissiveColor = ${T0(t.emissive)}`),t.normalMap!==null&&(r.push(`${i}normal3f inputs:normal.connect = </Materials/Material_${t.id}/Texture_${t.normalMap.id}_normal.outputs:rgb>`),s.push(o(t.normalMap,"normal"))),t.aoMap!==null&&(r.push(`${i}float inputs:occlusion.connect = </Materials/Material_${t.id}/Texture_${t.aoMap.id}_occlusion.outputs:r>`),s.push(o(t.aoMap,"occlusion"))),t.roughnessMap!==null&&t.roughness===1?(r.push(`${i}float inputs:roughness.connect = </Materials/Material_${t.id}/Texture_${t.roughnessMap.id}_roughness.outputs:g>`),s.push(o(t.roughnessMap,"roughness"))):r.push(`${i}float inputs:roughness = ${t.roughness}`),t.metalnessMap!==null&&t.metalness===1?(r.push(`${i}float inputs:metallic.connect = </Materials/Material_${t.id}/Texture_${t.metalnessMap.id}_metallic.outputs:b>`),s.push(o(t.metalnessMap,"metallic"))):r.push(`${i}float inputs:metallic = ${t.metalness}`),t.alphaMap!==null?(r.push(`${i}float inputs:opacity.connect = </Materials/Material_${t.id}/Texture_${t.alphaMap.id}_opacity.outputs:r>`),r.push(`${i}float inputs:opacityThreshold = 0.0001`),s.push(o(t.alphaMap,"opacity"))):r.push(`${i}float inputs:opacity = ${t.opacity}`),t.isMeshPhysicalMaterial&&(r.push(`${i}float inputs:clearcoat = ${t.clearcoat}`),r.push(`${i}float inputs:clearcoatRoughness = ${t.clearcoatRoughness}`),r.push(`${i}float inputs:ior = ${t.ior}`)),`
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
`}function T0(t){return`(${t.r}, ${t.g}, ${t.b})`}function jC(t){return`(${t.r}, ${t.g}, ${t.b}, 1.0)`}function A0(t){return`(${t.x}, ${t.y})`}function $C(t){const e=t.name?t.name:"Camera_"+t.id,n=oy(t.matrixWorld);return t.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",t),t.isOrthographicCamera?`def Camera "${e}"
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
	
	`}class XC{constructor(e,n,i,r,s){this.xrLight=e,this.renderer=n,this.lightProbe=i,this.xrWebGLBinding=null,this.estimationStartCallback=s,this.frameCallback=this.onXRFrame.bind(this);const o=n.xr.getSession();if(r&&"XRWebGLBinding"in window){const a=new Lx(16);e.environment=a.texture;const l=n.getContext();switch(o.preferredReflectionFormat){case"srgba8":l.getExtension("EXT_sRGB");break;case"rgba16f":l.getExtension("OES_texture_half_float");break}this.xrWebGLBinding=new XRWebGLBinding(o,l),this.lightProbe.addEventListener("reflectionchange",()=>{this.updateReflection()})}o.requestAnimationFrame(this.frameCallback)}updateReflection(){const e=this.renderer.properties.get(this.xrLight.environment);if(e){const n=this.xrWebGLBinding.getReflectionCubeMap(this.lightProbe);n&&(e.__webglTexture=n,this.xrLight.environment.needsPMREMUpdate=!0)}}onXRFrame(e,n){if(!this.xrLight)return;n.session.requestAnimationFrame(this.frameCallback);const r=n.getLightEstimate(this.lightProbe);if(r){this.xrLight.lightProbe.sh.fromArray(r.sphericalHarmonicsCoefficients),this.xrLight.lightProbe.intensity=1;const s=Math.max(1,Math.max(r.primaryLightIntensity.x,Math.max(r.primaryLightIntensity.y,r.primaryLightIntensity.z)));this.xrLight.directionalLight.color.setRGB(r.primaryLightIntensity.x/s,r.primaryLightIntensity.y/s,r.primaryLightIntensity.z/s),this.xrLight.directionalLight.intensity=s,this.xrLight.directionalLight.position.copy(r.primaryLightDirection),this.estimationStartCallback&&(this.estimationStartCallback(),this.estimationStartCallback=null)}}dispose(){this.xrLight=null,this.renderer=null,this.lightProbe=null,this.xrWebGLBinding=null}}class qC extends Ai{constructor(e,n=!0){super(),this.lightProbe=new dC,this.lightProbe.intensity=0,this.add(this.lightProbe),this.directionalLight=new na,this.directionalLight.intensity=0,this.add(this.directionalLight),this.environment=null;let i=null,r=!1;e.xr.addEventListener("sessionstart",()=>{const s=e.xr.getSession();"requestLightProbe"in s&&s.requestLightProbe({reflectionFormat:s.preferredReflectionFormat}).then(o=>{i=new XC(this,e,o,n,()=>{r=!0,this.dispatchEvent({type:"estimationstart"})})})}),e.xr.addEventListener("sessionend",()=>{i&&(i.dispose(),i=null),r&&this.dispatchEvent({type:"estimationend"})}),this.dispose=()=>{i&&(i.dispose(),i=null),this.remove(this.lightProbe),this.lightProbe=null,this.remove(this.directionalLight),this.directionalLight=null,this.environment=null}}}const Er={sheet_metal_001:{folder:"sheet_metal_001",metalness:1,roughness:1,anisotropy:.08,envMapIntensity:2.15,hex:"#58544e",tint:"#ffffff",colorBoost:2.35,clearcoat:.03,anisotropyMap:!1,useColorMap:!0,useMetalnessMap:!1},metal049a_ss:{folder:"metal049a",metalness:1,roughness:.85,anisotropy:.42,envMapIntensity:2.45,hex:"#dce4e9",tint:"#ffffff",clearcoat:.05,anisotropyMap:!1,useColorMap:!0,useMetalnessMap:!0},metal049a_alu:{folder:"metal049a",metalness:1,roughness:.78,anisotropy:.58,envMapIntensity:2.25,hex:"#f3f5f7",tint:"#ffffff",clearcoat:.04,anisotropyMap:!1,useColorMap:!0,useMetalnessMap:!0},metal049a_brushed:{folder:"metal049a",metalness:1,roughness:.92,anisotropy:.82,envMapIntensity:2.55,hex:"#e8eef2",tint:"#ffffff",clearcoat:.04,anisotropyMap:!1,useColorMap:!0,useMetalnessMap:!0},galvanized_steel:{folder:"galvanized_steel",metalness:1,roughness:.448,anisotropy:0,envMapIntensity:1.95,hex:"#9aa48e",clearcoat:.06,anisotropyMap:!1,useColorMap:!0},powdercoat_satin:{folder:"powdercoat_satin",metalness:0,roughness:.48,anisotropy:0,envMapIntensity:.95,hex:null,clearcoat:.28,anisotropyMap:!1,useColorMap:!1}};function ay(t={}){const e=t.material||"carbon",n=t.finish||"mill";return n==="powder"?{id:"powdercoat_satin",...Er.powdercoat_satin}:n==="galvanized"?{id:"galvanized_steel",...Er.galvanized_steel}:n==="brushed"?e==="carbon"?{id:"sheet_metal_001",...Er.sheet_metal_001,anisotropy:.46}:{id:"metal049a_brushed",...Er.metal049a_brushed}:e==="ss304"?{id:"metal049a_ss",...Er.metal049a_ss}:e==="alu"?{id:"metal049a_alu",...Er.metal049a_alu}:{id:"sheet_metal_001",...Er.sheet_metal_001}}const kt={ral9005:{label:"RAL 9005",name:"Jet black",hex:"#0a0a0d",color:657933},ral7016:{label:"RAL 7016",name:"Anthracite Grey",hex:"#383e42",color:3685954},ral7035:{label:"RAL 7035",name:"Light grey",hex:"#c5c7c4",color:12961732},ral9010:{label:"RAL 9010",name:"Pure white",hex:"#f1eee8",color:15855336},ral3000:{label:"RAL 3000",name:"Flame red",hex:"#a72920",color:10955040},ral5005:{label:"RAL 5005",name:"Signal blue",hex:"#154889",color:1394825},ral6005:{label:"RAL 6005",name:"Moss green",hex:"#0f4336",color:1000246},ral1003:{label:"RAL 1003",name:"Signal yellow",hex:"#f3a900",color:15968512},ral7021:{label:"RAL 7021",name:"Black grey",hex:"#2e3234",color:3027508},ral9006:{label:"RAL 9006",name:"White aluminium",hex:"#a5a8a6",color:10856614},ral9007:{label:"RAL 9007",name:"Grey aluminium",hex:"#8f8c83",color:9407619},ral5010:{label:"RAL 5010",name:"Gentian blue",hex:"#0e518d",color:938381},ral3020:{label:"RAL 3020",name:"Traffic red",hex:"#bf111b",color:12521755},ral1021:{label:"RAL 1021",name:"Rape yellow",hex:"#e4b800",color:14989312},ral6018:{label:"RAL 6018",name:"Yellow green",hex:"#4e9b41",color:5151553},ral2004:{label:"RAL 2004",name:"Pure orange",hex:"#e75b12",color:15162130},ral4008:{label:"RAL 4008",name:"Signal violet",hex:"#844c82",color:8670338},ral8017:{label:"RAL 8017",name:"Chocolate brown",hex:"#45322e",color:4534830},ral7040:{label:"RAL 7040",name:"Window grey",hex:"#9da3a6",color:10331046},ral9016:{label:"RAL 9016",name:"Traffic white",hex:"#f1f0ea",color:15855850}},ly=Object.keys(kt),YC=ly.slice(0,8),ai={carbon:{label:"Carbon steel",short:"CRS",density:7850,baseHex:"#58544e",galvanizedHex:"#9aa48e",metalness:.9,roughness:.46,grain:"rolled",preview:{hi:"#9a9590",mid:"#6a6762",lo:"#3c3a37"},swatch:'url("./materials/sheet_metal_001/preview.png")'},ss304:{label:"Stainless 304",short:"304",density:7930,baseHex:"#e8eef2",galvanizedHex:"#c5d0c8",metalness:.99,roughness:.11,grain:"brushed",preview:{hi:"#f4f7f9",mid:"#c5ced4",lo:"#8f99a1"},swatch:'url("./materials/metal049a/preview.png")'},alu:{label:"Aluminium",short:"ALU",density:2700,baseHex:"#f3f5f7",galvanizedHex:"#d8dcd8",metalness:.97,roughness:.17,grain:"fine",preview:{hi:"#fcfdfe",mid:"#e4e8eb",lo:"#b8bcc0"},swatch:'url("./materials/metal049a/preview.png")'}},$s={flat:{label:"Flat sheet"},topFold:{label:"Top fold"},sideReturns:{label:"Side returns"},cassette:{label:"Cassette panel"}},Va={square:{label:"Square"},radius:{label:"Radius"},chamfer:{label:"Chamfer"}},cy=10;function Xs(t={}){if(t.corner==="square"||!t.corner)return 0;const e=Math.max(1,Math.floor(Math.min(Number(t.width)||0,Number(t.height)||0)/3));return Math.min(at(t.cornerRadius,cy,1,150,1),e)}const ZC=[{label:"1000 × 2000",w:1e3,h:2e3},{label:"1250 × 2500",w:1250,h:2500},{label:"1500 × 3000",w:1500,h:3e3},{label:"2000 × 4000",w:2e3,h:4e3}],vp=25.4,oo={mill:{label:"Mill / raw",code:"ML",roughness:.36},galvanized:{label:"Galvanized",code:"GZ",roughness:.4},brushed:{label:"Brushed",code:"BR",roughness:.22},powder:{label:"Powder coated",code:"PC",roughness:.48}},Ne={round60:{label:"Round hole",short:"R60",kind:"round",staggered:!0,through:!0,family:"standard",process:"punch",blurb:"Round openings on a true 60° staggered triangular pitch."},square:{label:"Square hole",short:"SQ",kind:"square",staggered:!1,through:!0,family:"standard",process:"punch",blurb:"Square openings on an aligned straight grid for architectural applications."},slot:{label:"Slot hole",short:"SL",kind:"slot",staggered:!0,through:!0,family:"standard",process:"punch",blurb:"Vertical round-ended slots with independent column and row pitch."},hex:{label:"Hexagonal",short:"HX",kind:"hex",staggered:!0,through:!0,family:"standard",process:"punch",blurb:"True six-sided openings on a 60° staggered honeycomb layout. Size is point-to-point."},roundStraight:{label:"Round · straight",short:"RS",kind:"round",staggered:!1,through:!0,family:"standard",process:"punch",blurb:"Round openings with horizontal and vertical rows aligned."},bridgeSlot:{label:"Bridge slot",short:"BS",kind:"bridge",staggered:!0,through:!0,formed:!0,family:"formed",process:"form+punch",blurb:"Horizontal raised bridge/louver over a slotted opening for directional flow."},trieur:{label:"Trieur cups",short:"TR",kind:"trieur",staggered:!0,through:!1,formed:!0,family:"formed",process:"form",blurb:"Formed sorting cups/dimples with no through-cut opening."},perfocon:{label:"Perfocon conical",short:"PF",kind:"perfocon",staggered:!0,through:!0,conical:!0,formed:!0,family:"specialty",process:"form+punch",blurb:"Raised conical collar with a punched-through centre. Choose 30° heavy-duty or 60° DIN 9861 / ISO 6752."},decorative:{label:"Decorative clusters",short:"DC",kind:"decorative",staggered:!1,through:!0,family:"specialty",process:"punch",blurb:"Repeatable 13-hole diamond clusters on a controlled motif pitch."},embossed:{label:"Embossed diamond",short:"EM",kind:"embossed",staggered:!0,through:!0,formed:!0,family:"formed",process:"form+punch",blurb:"Raised diamond formed on the face, punched through from the back so the opening is visible on the reverse."}},KC=[{id:"standard",title:"Standard perforation",keys:["round60","square","slot","hex","roundStraight"]},{id:"formed",title:"Formed & specialty",keys:["bridgeSlot","trieur","perfocon","decorative","embossed"]}],po={round60:{holeSize:8,pitch:12},square:{holeSize:8,pitch:12},slot:{holeSize:5,slotLength:20,pitch:12,rowPitch:24},hex:{holeSize:8,pitch:12},roundStraight:{holeSize:8,pitch:12},bridgeSlot:{holeSize:4,slotLength:22,pitch:26,rowPitch:12},trieur:{holeSize:8,pitch:10},perfocon:{holeSize:3,pitch:8},decorative:{holeSize:3,pitch:32},embossed:{holeSize:12,pitch:18}},JC="Perforated Metal Sheet",uy="Configure perforation, material, finish and fabrication size in real time",QC="mazenbanat@outlook.com",eR="+961 81931045",qs=Math.sqrt(3)/2,b0={60:{label:"60° DIN 9861",blurb:"ISO 6752 / DIN 9861 Shape DA — standard countersunk head. d₂ = d₁ + √3 mm."},30:{label:"30° heavy duty",blurb:"Dense mill-screen packing. Head is only 1 mm larger than the entrance."}};function Fn(t={}){var u;const e=at(t.thickness,Re.thickness,.5,12,.5),n=at(t.holeSize,(u=po.perfocon)==null?void 0:u.holeSize,1,80,1),i=Number(t.coneAngle)===30?30:60,r=i/2*Math.PI/180,s=i===30?1:Math.sqrt(3),o=n,a=n+s,l=s/2/Math.tan(r),c=Number((o+2*e*Math.tan(r)).toFixed(2));return{entrance:o,head:a,exit:c,height:l,includedDeg:i,headAdd:s}}const Re={productName:JC,skuPrefix:"PERF",contactEmail:QC,contactPhone:eR,manufacturer:"Innovio Solutions",width:1200,height:2400,thickness:2,basePrice:72,currency:"USD",materialRateCarbon:1.42,materialRateSs304:4.85,materialRateAlu:3.15,finishRateMill:0,finishRateGalvanized:.58,finishRateBrushed:.42,finishRatePowder:.96,punchRate:.014,formedPunchRate:.006,topFoldAdd:18,sideReturnsAdd:32,cassetteAdd:54,customFoldAdd:28,mountingAdd:12,formedPatternAdd:24,notchAdd:8,deburrStandardAdd:4,deburrFineAdd:12,toleranceFineAdd:16,flatnessPrecisionAdd:18,nonStandardBendAdd:10},$e={width:1200,height:2400,thickness:2,material:"carbon",finish:"mill",color:"ral7016",pattern:"round60",holeSize:8,slotLength:20,pitch:12,rowPitch:12,border:25,orientation:"portrait",units:"mm",quantity:1,panelForm:"flat",flangeDepth:25,bendAngle:90,bendRadius:2,corner:"square",cornerRadius:10,mounting:"none",mountingPitch:150,notches:!1,deburr:"standard",tolerance:"iso-m",flatness:"standard",coneAngle:60};function fc(t,e,n=e==="in"?3:0){const i=e==="in"?t/vp:t;return Number(i.toFixed(n))}function C0(t,e){const n=Number(t);return Number.isFinite(n)&&e==="in"?n*vp:n}function at(t,e,n,i,r=1){const s=Number(t),o=Number.isFinite(s)?s:e;return Math.min(i,Math.max(n,Math.round(o/r)*r))}function tR(t){if(!t||typeof t!="object")return{...Re};t.productName&&(Re.productName=String(t.productName).slice(0,120)),t.skuPrefix&&(Re.skuPrefix=String(t.skuPrefix).replace(/[^A-Za-z0-9]/g,"").slice(0,24).toUpperCase()||Re.skuPrefix),t.contactEmail&&(Re.contactEmail=String(t.contactEmail).slice(0,120)),t.manufacturer&&(Re.manufacturer=String(t.manufacturer).slice(0,80));const e=Number(t.width),n=Number(t.height),i=Number(t.depth);Number.isFinite(e)&&(Re.width=at(e,Re.width,200,3e3,5)),Number.isFinite(n)&&(Re.height=at(n,Re.height,200,4e3,5)),Number.isFinite(i)&&(Re.thickness=at(i,Re.thickness,.5,12,.5));const r=["basePrice","materialRateCarbon","materialRateSs304","materialRateAlu","finishRateMill","finishRateGalvanized","finishRateBrushed","finishRatePowder","punchRate","formedPunchRate","topFoldAdd","sideReturnsAdd","cassetteAdd","customFoldAdd","mountingAdd","formedPatternAdd","notchAdd","deburrStandardAdd","deburrFineAdd","toleranceFineAdd","flatnessPrecisionAdd","nonStandardBendAdd"];for(const s of r){const o=Number(t[s]);Number.isFinite(o)&&o>=0&&(Re[s]=o)}return t.currency&&(Re.currency=String(t.currency).replace(/[^A-Za-z]/g,"").slice(0,3).toUpperCase()||Re.currency),{...Re}}function hy(t={}){const e=at(t.thickness,Re.thickness,.5,12,.5),n=at(t.holeSize,po.decorative.holeSize,1,80,1),i=Math.max(2,e);return Math.max(n+i,n*1.55)}function R0(t={}){const e=at(t.holeSize,po.decorative.holeSize,1,80,1);return hy(t)*4+e}function va(t={}){const e=at(t.thickness,Re.thickness,.5,12,.5),n=Ne[t.pattern]||Ne[$e.pattern],i=n==null?void 0:n.kind,r=at(t.holeSize,$e.holeSize,1,80,1),s=at(t.slotLength,$e.slotLength,1,160,1),o=(n==null?void 0:n.through)!==!1,a=Math.max(2,e),l=o?n!=null&&n.conical?1:Math.max(2,Math.ceil(e)):Math.max(2,Math.ceil(e*1.5)),c=n!=null&&n.conical?Fn({...t,thickness:e,holeSize:r}):null,u=c?c.exit:r;let h,f;i==="slot"?(h=Math.ceil(r+a),f=Math.ceil(s+a)):i==="bridge"?(h=Math.ceil(s+a),f=Math.ceil(r+a)):i==="decorative"?(h=Math.ceil(R0({...t,thickness:e,holeSize:r})+a),f=h):(h=Math.ceil(u+a),f=Math.ceil(h*(n!=null&&n.staggered?qs:1)));const p=i==="decorative"?R0({...t,thickness:e,holeSize:r})/2:u/2,g=Math.ceil(Math.max(e,p)/5)*5;return{minHoleSize:l,minPitch:Math.max(3,h),minPitchX:Math.max(3,h),minRowPitch:Math.max(3,f),minSlotLength:Math.max(3,Math.ceil(r+2)),minBorder:g,ligament:a}}function ct(t={}){var i;const e={...$e,...t};e.material==="ss316"&&(e.material="alu"),ai[e.material]||(e.material=$e.material),oo[e.finish]||(e.finish=$e.finish),kt[e.color]||(e.color=$e.color),Ne[e.pattern]||(e.pattern=$e.pattern),e.width=at(e.width,Re.width,200,3e3,5),e.height=at(e.height,Re.height,200,4e3,5),e.thickness=at(e.thickness,Re.thickness,.5,12,.5),e.holeSize=at(e.holeSize,$e.holeSize,1,80,1),e.slotLength=at(e.slotLength,$e.slotLength,1,160,1),e.pitch=at(e.pitch,$e.pitch,2,200,1),e.rowPitch=at(e.rowPitch,((i=po[e.pattern])==null?void 0:i.rowPitch)??e.pitch,2,200,1);const n=Math.floor(Math.min(e.width,e.height)/3);return e.border=at(e.border,$e.border,0,Math.max(0,n),5),e.units=e.units==="in"?"in":"mm",e.quantity=at(e.quantity,1,1,9999,1),e.panelForm==="customFold"&&(e.panelForm="topFold"),e.panelForm=$s[e.panelForm]?e.panelForm:"flat",e.flangeDepth=at(e.flangeDepth,25,8,150,1),e.bendAngle=at(e.bendAngle,90,30,120,1),e.bendRadius=at(e.bendRadius,2,.5,20,.5),e.corner=Va[e.corner]?e.corner:"square",e.cornerRadius=at(e.cornerRadius,cy,1,150,1),e.mounting="none",e.mountingPitch=at(e.mountingPitch,150,40,600,5),e.notches=!1,e.deburr=["none","standard","fine"].includes(e.deburr)?e.deburr:"standard",e.tolerance=["iso-c","iso-m","iso-f"].includes(e.tolerance)?e.tolerance:"iso-m",e.flatness=e.flatness==="precision"?"precision":"standard",e.orientation=e.orientation==="landscape"?"landscape":"portrait",e.coneAngle=Number(e.coneAngle)===30?30:60,e}function nR(){return ct({...$e,width:Re.width,height:Re.height,thickness:Re.thickness})}function iR(t,e){switch(e.type){case"set":return ct({...t,[e.key]:e.value});case"setMany":return ct({...t,...e.values});case"load":return ct(e.config);case"applyCatalogDefaults":return t.width===$e.width&&t.height===$e.height&&t.thickness===$e.thickness?ct({...t,...e.values}):t;case"reset":return nR();default:return t}}function fy(t){const e=ct(t),n=Ne[e.pattern],i=!!(n!=null&&n.staggered),r=(n==null?void 0:n.kind)==="slot"||(n==null?void 0:n.kind)==="bridge"?e.rowPitch:i?e.pitch*qs:e.pitch;return{c:e,staggered:i,rowPitch:r,left:e.border,right:e.width-e.border,bottom:e.border,top:e.height-e.border}}function Fh(t,e,n){return!(n>0)||t>e+1e-6?0:Math.floor((e-t)/n+1e-6)+1}function rR(t,e,{limit:n=1/0}={}){const{c:i,staggered:r,rowPitch:s,left:o,right:a,bottom:l,top:c}=fy(t);let u=0,h=0;for(let f=l+s/2;f<=c-s/2+1e-6;f+=s,u++){const p=r&&u%2?i.pitch/2:0;for(let g=o+i.pitch/2+p;g<=a-i.pitch/2+1e-6;g+=i.pitch)if(e(g,f,h)===!1||(h+=1,h>=n))return h}return h}function _p(t){const e=ct(t),n=hy(e);return[[0,-2*n],[-n,-n],[0,-n],[n,-n],[-2*n,0],[-n,0],[0,0],[n,0],[2*n,0],[-n,n],[0,n],[n,n],[0,2*n]]}function sR(t){const{c:e,staggered:n,rowPitch:i,left:r,right:s,bottom:o,top:a}=fy(t),l=Fh(o+i/2,a-i/2,i);if(l<=0)return 0;const c=Fh(r+e.pitch/2,s-e.pitch/2,e.pitch);if(!n)return l*c;const u=Fh(r+e.pitch,s-e.pitch/2,e.pitch),h=Math.ceil(l/2),f=Math.floor(l/2);return h*c+f*u}function yu(t){var i;const e=sR(t),n=ct(t);return((i=Ne[n.pattern])==null?void 0:i.kind)==="decorative"?e*_p(n).length:e}function xp(t){const e=ct(t),n=Ne[e.pattern],i=n==null?void 0:n.kind;if((n==null?void 0:n.through)===!1)return 0;const r=e.holeSize,s=Math.max(e.pitch,.1);let o=0;if(i==="round"||i==="perfocon"){const a=n!=null&&n.staggered?s*s*qs:s*s;o=Math.PI*(r/2)**2/Math.max(1e-6,a)}else if(i==="square")o=r*r/Math.max(1e-6,s*s);else if(i==="hex"){const a=3*Math.sqrt(3)/8*r*r,l=s*s*qs;o=a/Math.max(1e-6,l)}else if(i==="decorative"){const a=s*s;o=_p(e).length*Math.PI*(r/2)**2/Math.max(1e-6,a)}else if(i==="slot"||i==="bridge"){const a=r,l=Math.max(e.slotLength,a);o=(Math.max(0,l-a)*a+Math.PI*(a/2)**2)/Math.max(1e-6,e.pitch*e.rowPitch)}else if(i==="embossed"){const a=r*r/2,l=s*s*qs;o=a/Math.max(1e-6,l)}return Math.min(88,Math.max(0,o*100))}function yp(t){const e=ct(t),n=ai[e.material].density,i=e.width/1e3*(e.height/1e3)*(e.thickness/1e3),r=Math.max(0,e.width-e.border*2),s=Math.max(0,e.height-e.border*2),o=r*s/Math.max(1,e.width*e.height),a=xp(e)/100*o;return i*n*(1-a)}function P0(t){const e=ct(t),n=ai[e.material]||ai.carbon,i=ay(e);let r=i.hex||n.baseHex,s=i.metalness,o=i.roughness,a=i.envMapIntensity,l=i.clearcoat,c=i.anisotropy;return e.finish==="powder"&&(r=kt[e.color].hex,s=0,o=i.roughness,a=i.envMapIntensity,l=i.clearcoat,c=0),{hex:r,metalness:s,roughness:o,envMapIntensity:a,clearcoat:l,anisotropy:c,grain:n.grain,pbr:i}}function oR(t){return t>=50?.82:t>=20?.9:t>=5?.96:1}function dy(t){const e=ct(t),n=yp(e),i={carbon:Re.materialRateCarbon,ss304:Re.materialRateSs304,alu:Re.materialRateAlu}[e.material]??Re.materialRateCarbon,r={mill:Re.finishRateMill,galvanized:Re.finishRateGalvanized,brushed:Re.finishRateBrushed,powder:Re.finishRatePowder}[e.finish]??0,s=yu(e),o=Ne[e.pattern]||{},a={flat:0,topFold:Re.topFoldAdd,sideReturns:Re.sideReturnsAdd,cassette:Re.cassetteAdd,customFold:Re.customFoldAdd}[e.panelForm]||0,l=e.mounting==="none"?0:Re.mountingAdd,c=s*(o.through===!1?Re.formedPunchRate:Re.punchRate),u=o.formed?Re.formedPatternAdd:0,h=e.deburr==="fine"?Re.deburrFineAdd:e.deburr==="standard"?Re.deburrStandardAdd:0,f=e.tolerance==="iso-f"?Re.toleranceFineAdd:0,p=e.flatness==="precision"?Re.flatnessPrecisionAdd:0,g=e.panelForm!=="flat"&&Math.abs(e.bendAngle-90)>.5?Re.nonStandardBendAdd:0;return(n*(i+r)+c+Re.basePrice+a+l+u+h+f+p+g)*e.quantity*oR(e.quantity)}function Sp(t,e=Re.currency){const n=Number(t)||0,i=String(e||"USD").toUpperCase();try{return new Intl.NumberFormat(void 0,{style:"currency",currency:i,minimumFractionDigits:2,maximumFractionDigits:2}).format(n)}catch{return`${i} ${n.toFixed(2)}`}}function aR(t){const e=ct(t);let n=3,i=5;e.finish==="powder"?(n+=2,i+=2):e.finish==="galvanized"&&(n+=1,i+=1),e.panelForm!=="flat"&&(n+=1,i+=2),e.deburr==="fine"&&(i+=1),e.tolerance==="iso-f"&&(n+=1,i+=1),e.flatness==="precision"&&(n+=1,i+=2);const r=Math.min(10,Math.floor((e.quantity-1)/15));return n+=r,i+=Math.min(12,Math.ceil(e.quantity/12)),`${n}–${i} days`}function py(t){const e=ct(t),n=(r,s,o)=>s<=r.w&&o<=r.h,i=ZC.find(r=>n(r,e.width,e.height)||n(r,e.height,e.width));if(i){const r=!(e.width<=i.w&&e.height<=i.h);return{ok:!0,sheet:i,rotated:r,label:r?`Fits ${i.label} mm stock if rotated`:`Fits ${i.label} mm stock`}}return{ok:!1,sheet:null,rotated:!1,label:"Exceeds standard stock sheet sizes"}}function lR(t){const e=ct(t),n=va(e),i=Ne[e.pattern],r=i==null?void 0:i.kind,s=[],o=(i==null?void 0:i.through)!==!1;e.holeSize<n.minHoleSize&&s.push({level:"block",field:"holeSize",text:`${o?"Opening":"Formed feature"} ${e.holeSize} mm is below the ${n.minHoleSize} mm minimum for ${e.thickness} mm material.`}),(r==="slot"||r==="bridge")&&e.slotLength<n.minSlotLength&&s.push({level:"block",field:"slotLength",text:`Slot length ${e.slotLength} mm must be at least ${n.minSlotLength} mm for a ${e.holeSize} mm slot width.`}),e.pitch<n.minPitchX&&s.push({level:"block",field:"pitch",text:`${r==="decorative"?"Motif pitch":r==="slot"||r==="bridge"?"Column pitch":"Pitch"} ${e.pitch} mm is below the ${n.minPitchX} mm minimum for this pattern.`}),(r==="slot"||r==="bridge")&&e.rowPitch<n.minRowPitch&&s.push({level:"block",field:"rowPitch",text:`Row pitch ${e.rowPitch} mm is below the ${n.minRowPitch} mm minimum for this ${r==="slot"?"vertical slot":"horizontal bridge slot"} geometry.`}),e.border<n.minBorder&&s.push({level:"block",field:"border",text:`Edge distance ${e.border} mm is below the ${n.minBorder} mm minimum.`}),e.mounting!=="none"&&e.border<18&&s.push({level:"block",field:"border",text:"Mounting features require at least an 18 mm solid perimeter border."}),e.panelForm!=="flat"&&e.flangeDepth<e.thickness*4&&s.push({level:"warn",field:"flangeDepth",text:`Flange depth should be at least 4× thickness (${e.thickness*4} mm).`}),e.panelForm!=="flat"&&e.bendRadius<e.thickness&&s.push({level:"warn",field:"bendRadius",text:"Bend radius is below material thickness and may crack."});const a=py(e);return a.ok||s.push({level:"warn",text:a.label+". Confirm a custom blank or nested yield."}),yu(e)>25e4&&s.push({level:"warn",text:"Opening count is high; perforation time and cost will increase."}),s}function cR(t){var o,a,l,c;const e=ct(t),n={};let i=va(e);e.holeSize<i.minHoleSize&&(n.holeSize=i.minHoleSize);const r=ct({...e,...n});i=va(r),(((o=Ne[e.pattern])==null?void 0:o.kind)==="slot"||((a=Ne[e.pattern])==null?void 0:a.kind)==="bridge")&&r.slotLength<i.minSlotLength&&(n.slotLength=i.minSlotLength);const s=ct({...e,...n});return i=va(s),s.pitch<i.minPitchX&&(n.pitch=i.minPitchX),(((l=Ne[e.pattern])==null?void 0:l.kind)==="slot"||((c=Ne[e.pattern])==null?void 0:c.kind)==="bridge")&&s.rowPitch<i.minRowPitch&&(n.rowPitch=i.minRowPitch),s.border<i.minBorder&&(n.border=i.minBorder),s.mounting!=="none"&&s.border<18&&(n.border=Math.max(n.border||0,20)),s.panelForm!=="flat"&&s.flangeDepth<s.thickness*4&&(n.flangeDepth=Math.ceil(s.thickness*4)),s.panelForm!=="flat"&&s.bendRadius<s.thickness&&(n.bendRadius=s.thickness),n}function uR({config:t,sku:e,openArea:n,weight:i,price:r,lead:s,currency:o=Re.currency}){var p,g,_;const a=ct(t),l=`${oo[a.finish].label}${a.finish==="powder"?` · ${kt[a.color].label} – ${kt[a.color].name}`:""}`,c=((p=Ne[a.pattern])==null?void 0:p.kind)==="slot"||((g=Ne[a.pattern])==null?void 0:g.kind)==="bridge",u=c?`${a.pitch} × ${a.rowPitch} mm centers`:`${a.pitch} mm centers`,h=(_=Ne[a.pattern])==null?void 0:_.kind,f=h==="trieur"?`cup ${a.holeSize} mm`:h==="embossed"?`diamond ${a.holeSize} mm punched through`:h==="perfocon"?`entrance Ø${a.holeSize} mm / ${Fn(a).includedDeg}° head Ø${Fn(a).head.toFixed(2)} mm / exit Ø${Fn(a).exit} mm`:h==="hex"?`hex ${a.holeSize} mm point-to-point`:`opening ${a.holeSize} mm`;return[`SKU: ${e}`,`Sheet: ${a.width} × ${a.height} × ${a.thickness} mm`,`Material: ${ai[a.material].label}`,`Pattern: ${Ne[a.pattern].label} · ${f} · ${u}`,...c?[`Slot length: ${a.slotLength} mm`]:[],`Finish: ${l}`,`Form: ${$s[a.panelForm].label}${a.panelForm!=="flat"?` · flange ${a.flangeDepth} mm · bend ${a.bendAngle}° · R${a.bendRadius}`:""}`,`Corner treatment: ${Va[a.corner].label}${a.corner==="square"?"":` ${Xs(a)} mm`}`,`Deburr: ${a.deburr} · tolerance: ${a.tolerance} · flatness: ${a.flatness}`,`Quantity: ${a.quantity}`,`Open area: ${n.toFixed(1)}%`,`Est. mass: ${i.toFixed(1)} kg`,`Indicative price: ${Sp(r,o)}`,`Lead time: ${s}`].join(`
`)}function hR(t,e=Re.skuPrefix){var c,u,h;const n=ct(t),i=ai[n.material].short,r=oo[n.finish].code,s=n.finish==="powder"?kt[n.color].label.replace("RAL ",""):r,o=Ne[n.pattern].short,a=((c=Ne[n.pattern])==null?void 0:c.kind)==="slot"||((u=Ne[n.pattern])==null?void 0:u.kind)==="bridge"?`${n.pitch}X${n.rowPitch}P`:`${n.pitch}P`,l=(h=Ne[n.pattern])!=null&&h.conical?`C${n.coneAngle}`:"";return`${e}-${i}-${n.thickness}T-${o}${n.holeSize}${l}-${a}-${s}`.replace(/\.0/g,"")}function Oh(t){const e=ct(t),n=new URL(location.origin+location.pathname.replace(/index\.html$/i,"")),i={w:e.width,h:e.height,t:e.thickness,m:e.material,f:e.finish,c:e.color,p:e.pattern,d:e.holeSize,l:e.slotLength,x:e.pitch,y:e.rowPitch,b:e.border,q:e.quantity,form:e.panelForm,fd:e.flangeDepth,ba:e.bendAngle,br:e.bendRadius,corner:e.corner,cr:e.cornerRadius,mount:e.mounting,mp:e.mountingPitch,deburr:e.deburr,tol:e.tolerance,flat:e.flatness,o:e.orientation,u:e.units,cone:e.coneAngle};return Object.entries(i).forEach(([r,s])=>n.searchParams.set(r,s)),n.toString()}function fR(t){const e=(t==null?void 0:t.configuration)||t||{},n=e.configuration&&typeof e.configuration=="object"?e.configuration:e;return!n||n.omitted?null:ct(n)}function dR(){const t=new URL(location.href).searchParams,e=t.get("p")??$e.pattern,n=po[e]||{};return ct({width:t.get("w")??Re.width,height:t.get("h")??Re.height,thickness:t.get("t")??Re.thickness,material:t.get("m")??$e.material,finish:t.get("f")??$e.finish,color:t.get("c")??$e.color,pattern:e,holeSize:t.get("d")??n.holeSize??$e.holeSize,slotLength:t.get("l")??n.slotLength??$e.slotLength,pitch:t.get("x")??n.pitch??$e.pitch,rowPitch:t.get("y")??n.rowPitch??$e.rowPitch,border:t.get("b")??$e.border,quantity:t.get("q")??$e.quantity,panelForm:t.get("form")??$e.panelForm,flangeDepth:t.get("fd")??$e.flangeDepth,bendAngle:t.get("ba")??$e.bendAngle,bendRadius:t.get("br")??$e.bendRadius,corner:t.get("corner")??$e.corner,cornerRadius:t.get("cr")??$e.cornerRadius,mounting:t.get("mount")??$e.mounting,mountingPitch:t.get("mp")??$e.mountingPitch,notches:!1,deburr:t.get("deburr")??$e.deburr,tolerance:t.get("tol")??$e.tolerance,flatness:t.get("flat")??$e.flatness,orientation:t.get("o")??$e.orientation,units:t.get("u")??$e.units,coneAngle:t.get("cone")??$e.coneAngle})}const pR=new aC,kh=new Map;function L0(t){const e="./";return`${e.endsWith("/")?e:`${e}/`}${t.replace(/^\//,"")}`}function mR(t,{srgb:e=!1,anisotropy:n=1}={}){return new Promise((i,r)=>{pR.load(t,s=>{s.wrapS=Di,s.wrapT=Di,s.anisotropy=Math.max(1,n),s.colorSpace=e?En:qn,s.generateMipmaps=!0,s.minFilter=wi,s.magFilter=dn,s.needsUpdate=!0,i(s)},void 0,r)})}async function gR(t,e){try{return await mR(t,e)}catch{return null}}async function Vo(t,e){for(const n of t){const i=await gR(n,e);if(i)return i}return null}function Go(t,e){return[L0(`materials/${t}/${e}.jpg`),L0(`materials/${t}/${e}.png`)]}async function vR(t,e=1){const n=ay(t),i=n.folder||n.id,r=kh.get(i);if(r)return r;const s=(async()=>{const o=e,[a,l,c,u,h]=await Promise.all([Vo(Go(i,"basecolor"),{srgb:!0,anisotropy:o}),Vo(Go(i,"normal"),{anisotropy:o}),Vo(Go(i,"roughness"),{anisotropy:o}),n.useMetalnessMap===!1?Promise.resolve(null):Vo(Go(i,"metallic"),{anisotropy:o}),n.anisotropyMap?Vo(Go(i,"anisotropy"),{anisotropy:o}):Promise.resolve(null)]);if(!a&&!l&&!c&&!u)throw new Error(`PBR maps missing for ${i}`);return{preset:n,folder:i,colorMap:a,normalMap:l,roughnessMap:c,metalnessMap:u,aoMap:null,anisotropyMap:h}})();kh.set(i,s);try{return await s}catch(o){throw kh.delete(i),o}}function _R(t,e,n,i){if(!t||!e)return;const r=n.pbr||e.preset||{},s=r.useColorMap!==!1;t.map=s?e.colorMap:null,t.normalMap=e.normalMap,t.roughnessMap=e.roughnessMap,t.metalnessMap=r.useMetalnessMap===!1?null:e.metalnessMap,t.aoMap=e.aoMap||null,t.aoMapIntensity=e.aoMap?.85:0,t.normalScale&&t.normalScale.set(1,1),[t.map,t.normalMap,t.roughnessMap,t.metalnessMap,t.aoMap,e.anisotropyMap].forEach(o=>{o&&(o.wrapS=Di,o.wrapT=Di,o.repeat.copy(i))}),t.isMeshPhysicalMaterial&&(t.anisotropy=n.anisotropy||0,t.anisotropyRotation=0,"anisotropyMap"in t&&(t.anisotropyMap=e.anisotropyMap||null))}function Mp(){var r;if(typeof window>"u")return!1;const t=window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>1,e=window.matchMedia("(max-width: 900px)").matches,n=!!((r=navigator.connection)!=null&&r.saveData),i=Number(navigator.deviceMemory)>0&&navigator.deviceMemory<=4;return n||i||t&&e||e}function xR(){const t=navigator.userAgent||"",e=/iPad|iPhone|iPod/.test(t)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,n=/Android/i.test(t),i=e&&/Safari/i.test(t)&&!/CriOS|FxiOS|EdgiOS|OPiOS/i.test(t),r=!!window.isSecureContext;let s="none";return e?s="quicklook":n&&(s="webxr"),{ios:e,android:n,desktop:!e&&!n,safari:i,secure:r,system:s,label:e?"iOS":n?"Android":"Desktop"}}const qc="This device has no AR camera. Open the configuration on a phone — Chrome on Android, or Safari on iOS — to view the sheet at 1:1.";async function my(){var t;if(!((t=navigator.xr)!=null&&t.isSessionSupported))return!1;try{return!!await navigator.xr.isSessionSupported("immersive-ar")}catch{return!1}}function yR(t){const e=String((t==null?void 0:t.message)||t||"");return/no xr hardware|not supported|requestSession|immersive-ar|xr system/i.test(e)?qc:e||qc}const zh=new I;function wp(t,e,n,i,r,s){const o=Math.min(s,i/2,r/2);t.beginPath(),t.moveTo(e+o,n),t.lineTo(e+i-o,n),t.quadraticCurveTo(e+i,n,e+i,n+o),t.lineTo(e+i,n+r-o),t.quadraticCurveTo(e+i,n+r,e+i-o,n+r),t.lineTo(e+o,n+r),t.quadraticCurveTo(e,n+r,e,n+r-o),t.lineTo(e,n+o),t.quadraticCurveTo(e,n,e+o,n),t.closePath()}function SR(t,e,n,i,r){const s=Math.min(i,r)/2;wp(t,e-i/2,n-r/2,i,r,s),t.fill()}function MR(t,e,n,i,r=0){t.save(),t.translate(e,n),t.rotate(Math.PI/4),wp(t,-i/2,-i/2,i,i,r),t.restore()}function wR(t,e,n,i){t.beginPath();for(let r=0;r<6;r++){const s=Math.PI/3*r,o=e+i*Math.cos(s),a=n+i*Math.sin(s);r===0?t.moveTo(o,a):t.lineTo(o,a)}t.closePath(),t.fill()}function ER(t,e,n,i,r,s,o,a=1){var u;const l=(u=Ne[e.pattern])==null?void 0:u.kind,c=r*a;if(l==="trieur"){t.beginPath(),t.arc(n,i,c/2,0,Math.PI*2),t.fill();return}if(l==="square"){t.fillRect(n-c/2,i-c/2,c,c);return}if(l==="slot"){SR(t,n,i,c,Math.max(c,e.slotLength*o));return}if(l==="bridge"){const h=Math.max(1.2,e.holeSize*o*a),f=Math.max(h,e.slotLength*s);t.fillRect(n-f/2,i-h/2,f,h);return}if(l==="hex"){wR(t,n,i,c/2);return}if(l==="embossed"){const h=c/2;t.beginPath(),t.moveTo(n,i-h),t.lineTo(n+h,i),t.lineTo(n,i+h),t.lineTo(n-h,i),t.closePath(),t.fill();return}if(l==="decorative"){const h=Math.max(1.4,e.holeSize*Math.min(s,o));_p(e).forEach(([f,p])=>{t.beginPath(),t.arc(n+f*s,i+p*o,h/2,0,Math.PI*2),t.fill()});return}t.beginPath(),t.arc(n,i,c/2,0,Math.PI*2),t.fill()}function TR(t,e,n,i,r,s,o){var l;const a=(l=Ne[e.pattern])==null?void 0:l.kind;if(a==="trieur"){const c=t.createRadialGradient(n,i*.98,0,n,i,r*.62);c.addColorStop(0,"#f4f4f4"),c.addColorStop(.45,"#c6c6c6"),c.addColorStop(1,"#7a7a7a"),t.fillStyle=c,t.beginPath(),t.arc(n,i,r*.58,0,Math.PI*2),t.fill();return}if(a==="embossed"){const c=r*.9,u=t.createLinearGradient(n-c/2,i-c/2,n+c/2,i+c/2);u.addColorStop(0,"#686868"),u.addColorStop(.34,"#f6f6f6"),u.addColorStop(.58,"#c8c8c8"),u.addColorStop(1,"#737373"),t.fillStyle=u,MR(t,n,i,c,c*.08),t.fill();return}if(a==="perfocon"){const c=r*.72,u=t.createRadialGradient(n-c*.18,i-c*.18,c*.05,n,i,c);u.addColorStop(0,"#efefef"),u.addColorStop(.38,"#b9b9b9"),u.addColorStop(.68,"#747474"),u.addColorStop(1,"#969696"),t.fillStyle=u,t.beginPath(),t.arc(n,i,c,0,Math.PI*2),t.fill();return}if(a==="bridge"){const c=Math.max(r,e.slotLength*s),u=r*1.35,h=t.createLinearGradient(n,i-u/2,n,i+u/2);h.addColorStop(0,"#8a8a8a"),h.addColorStop(.45,"#f0f0f0"),h.addColorStop(1,"#6e6e6e"),t.fillStyle=h,wp(t,n-c/2,i-u/2,c,u,u/2),t.fill()}}const N0=512,td=.5,Bh=.12,Hh=4.6;function gy(t){const e=Ne[t.pattern],n=!!(e!=null&&e.staggered),i=e==null?void 0:e.kind,r=i==="slot"||i==="bridge"?t.rowPitch:n?t.pitch*qs:t.pitch,s=Math.max(.01,t.pitch),o=Math.max(.01,n?r*2:r);return{pattern:e,staggered:n,kind:i,rowPitch:r,tileW:s,tileH:o}}function AR(t,e,n,i,r){for(const s of[-t,0,t])for(const o of[-e,0,e])r(n+s,i+o)}function D0(t,{holeScale:e=1,bump:n=!1}={}){const{staggered:i,kind:r,rowPitch:s,tileW:o,tileH:a}=gy(t),l=N0,c=Math.max(2,Math.round(N0*a/o)),u=document.createElement("canvas");u.width=l,u.height=c;const h=u.getContext("2d",{alpha:!1}),f=l/o,p=c/a,g=Math.max(1.6,t.holeSize*Math.min(f,p));h.fillStyle=n?"#808080":"#ffffff",h.fillRect(0,0,l,c),n||(h.fillStyle="#000000"),h.imageSmoothingEnabled=r!=="square"&&r!=="bridge",h.imageSmoothingQuality="high";const _=s*p,m=(d,x)=>{AR(l,c,d,x,(v,y)=>{n?TR(h,t,v,y,g,f):ER(h,t,v,y,g,f,p,e)})};return h.save(),h.translate(0,c),h.scale(1,-1),m(l/2,_/2),i&&m(l,_+_/2),h.restore(),u}function Ep(t){return t==="trieur"||t==="embossed"||t==="bridge"||t==="perfocon"}function _s(t,e=4,{holeScale:n=1,skipBump:i=!1}={}){var m,d;const r=ct(t),s=(m=Ne[r.pattern])==null?void 0:m.kind,o=!!((d=Ne[r.pattern])!=null&&d.formed)&&!i&&!Ep(s),{tileW:a,tileH:l}=gy(r),c=Math.max(.01,r.width-2*r.border),u=Math.max(.01,r.height-2*r.border),h=c/a,f=u/l,p={repeatX:h,repeatY:f},g=D0(r,{holeScale:n,bump:!1}),_=o?D0(r,{bump:!0}):null;return{alphaMap:F0(g,e,p),bumpMap:_?F0(_,e,{...p,mipmaps:!0}):null,backAlphaMap:null}}function I0(t,e){var i,r,s;const n=ct(t);if((i=Ne[n.pattern])!=null&&i.conical){const o=Fn(n),a=_s(n,e,{holeScale:1,skipBump:!0});return a.backAlphaMap=_s(n,e,{holeScale:o.exit/o.entrance,skipBump:!0}).alphaMap,a}if(((r=Ne[n.pattern])==null?void 0:r.kind)==="embossed"){const o=_s(n,e,{holeScale:.48,skipBump:!0});return o.backAlphaMap=o.alphaMap,o}if(((s=Ne[n.pattern])==null?void 0:s.kind)==="trieur"){const o=_s(n,e,{holeScale:.72,skipBump:!0});return o.backAlphaMap=_s(n,e,{holeScale:.9,skipBump:!0}).alphaMap,o}return _s(n,e)}function Vh(t,e,n,i){var u,h,f;const r=((u=Ne[i.pattern])==null?void 0:u.through)!==!1,s=(h=Ne[i.pattern])==null?void 0:h.kind,o=!!((f=Ne[i.pattern])!=null&&f.formed)&&!Ep(s),a=r||s==="trieur",l=a?n.alphaMap:null,c=a?n.backAlphaMap||n.alphaMap:null;t&&(t.alphaMap=l,t.alphaTest=a?td:0,t.bumpMap=n.bumpMap,t.bumpScale=o?.016:0,t.needsUpdate=!0),e&&(e.alphaMap=c,e.alphaTest=a?td:0,e.bumpMap=null,e.bumpScale=0,e.needsUpdate=!0)}function U0(t,e){const n=new Set([e.alphaMap,e.bumpMap,e.backAlphaMap].filter(Boolean));t.forEach(i=>{i&&!n.has(i)&&(n.add(i),i.dispose())})}function F0(t,e,{repeatX:n=1,repeatY:i=1,mipmaps:r=!1}={}){const s=new Vx(t);return s.colorSpace=qn,s.wrapS=Di,s.wrapT=Di,s.repeat.set(n,i),s.generateMipmaps=r,s.minFilter=r?wi:dn,s.magFilter=dn,s.anisotropy=r?Math.max(1,e):1,s.needsUpdate=!0,s}function bR(t,e,n){const i=new cp,r=t/2,s=Math.min(Xs(n)/1e3,t/3,e/3);if(n.corner==="radius"&&s>5e-4){const o=s;i.moveTo(-r+o,0),i.lineTo(r-o,0),i.absarc(r-o,o,o,-Math.PI/2,0,!1),i.lineTo(r,e-o),i.absarc(r-o,e-o,o,0,Math.PI/2,!1),i.lineTo(-r+o,e),i.absarc(-r+o,e-o,o,Math.PI/2,Math.PI,!1),i.lineTo(-r,o),i.absarc(-r+o,o,o,Math.PI,Math.PI*1.5,!1),i.closePath()}else if(n.corner==="chamfer"&&s>5e-4){const o=s;i.moveTo(-r+o,0),i.lineTo(r-o,0),i.lineTo(r,o),i.lineTo(r,e-o),i.lineTo(r-o,e),i.lineTo(-r+o,e),i.lineTo(-r,e-o),i.lineTo(-r,o),i.closePath()}else i.moveTo(-r,0),i.lineTo(r,0),i.lineTo(r,e),i.lineTo(-r,e),i.closePath();return i}function CR(t,e,n,i,r,s,o,a){const l=a.border/1e3,c=o/2+1e-4,u=Math.max(8e-4,r-2*l),h=Math.max(8e-4,s-2*l),f=bR(r,s,a);if(l>25e-5&&u>.001&&h>.001){const d=new Xf,x=u/2,v=l;d.moveTo(-x,v),d.lineTo(-x,v+h),d.lineTo(x,v+h),d.lineTo(x,v),d.closePath(),f.holes.push(d)}const p=new vu(f,{depth:o,bevelEnabled:!1,curveSegments:a.corner==="radius"?14:1});p.translate(0,0,-o/2);const g=new et(p,i);g.castShadow=!0,g.receiveShadow=!0,t.add(g);const _=(d,x)=>{const v=new et(new Zr(u,h,1,1),d);v.position.set(0,s/2,x*c),v.castShadow=!1,v.receiveShadow=x>0,t.add(v)};_(e,1),_(n,-1);const m=new Eb(new kb(p,18),new Hx({color:1185565,transparent:!0,opacity:.28}));t.add(m)}const RR=25e4,Wo=new Nt,jo=new I,$o=new I;function vy(t){t.computeBoundingBox();const e=t.boundingBox;return t.translate(-(e.min.x+e.max.x)/2,-(e.min.y+e.max.y)/2,-e.min.z),t.computeVertexNormals(),t}function PR(t=.45){const e=new hp(1,16,10,0,Math.PI*2,0,Math.PI/2);e.rotateX(Math.PI/2),vy(e);const n=Math.max(.12,t),i=new lp(.9,.9,n,16,1,!0);return i.rotateX(Math.PI/2),i.translate(0,0,-n/2),_y([e,i])}function LR(t,e,n){return Math.abs(t)+Math.abs(e)<=n}function NR(t,e,n=.0015){const i=t.attributes.position,r=(s,o,a)=>{if(i.getZ(s)>n||i.getZ(o)>n||i.getZ(a)>n)return!1;const l=(i.getX(s)+i.getX(o)+i.getX(a))/3,c=(i.getY(s)+i.getY(o)+i.getY(a))/3;return LR(l,c,e)};if(t.index){const s=t.index.array,o=[];for(let a=0;a<s.length;a+=3){const l=s[a],c=s[a+1],u=s[a+2];r(l,c,u)||o.push(l,c,u)}t.setIndex(o)}else{const s=[];for(let o=0;o<i.count;o+=3)r(o,o+1,o+2)||s.push(i.getX(o),i.getY(o),i.getZ(o),i.getX(o+1),i.getY(o+1),i.getZ(o+1),i.getX(o+2),i.getY(o+2),i.getZ(o+2));t.setAttribute("position",new tt(s,3))}return t.computeVertexNormals(),t}function _y(t){const e=[],n=[];let i=0;t.forEach(s=>{const o=s.attributes.position;for(let l=0;l<o.count;l++)e.push(o.getX(l),o.getY(l),o.getZ(l));const a=s.index?s.index.array:null;if(a)for(let l=0;l<a.length;l++)n.push(a[l]+i);else for(let l=0;l<o.count;l++)n.push(i+l);i+=o.count,s.dispose()});const r=new Ut;return r.setAttribute("position",new tt(e,3)),r.setIndex(n),r.computeVertexNormals(),r}function DR(t,e,n){const i=l=>[0,-t,l,t,0,l,0,t,l,-t,0,l],r=[...i(e),...i(n)],s=[],o=(l,c,u,h)=>{s.push(l,c,u,l,u,h)};for(let l=0;l<4;l++){const c=(l+1)%4;o(l,c,4+c,4+l)}const a=new Ut;return a.setAttribute("position",new tt(r,3)),a.setIndex(s),a}function IR(t,e,n){const i=l=>[0,-l,n,l,0,n,0,l,n,-l,0,n],r=[...i(t),...i(e)],s=[],o=(l,c,u,h)=>{s.push(l,c,u,l,u,h)};for(let l=0;l<4;l++){const c=(l+1)%4;o(l,c,4+c,4+l)}const a=new Ut;return a.setAttribute("position",new tt(r,3)),a.setIndex(s),a}function UR(t=.45){const n=new cp;n.moveTo(0,-.5),n.lineTo(.5,0),n.lineTo(0,.5),n.lineTo(-.5,0),n.closePath();const i=new vu(n,{depth:.72,bevelEnabled:!0,bevelThickness:.28,bevelSize:.1,bevelSegments:2,curveSegments:1});vy(i),NR(i,.32+.02);const r=IR(.62,.32,35e-5),s=DR(.32,35e-5,-Math.max(.12,t));return _y([i,r,s])}function FR(t){const e=t.holeSize/1e3,n=e*.84,i=Math.max(t.holeSize,t.slotLength)/1e3,r=Math.max(4e-4,Math.min(t.thickness/1e3,e*.16)),s=e*.72,o=i*.62,a=-n/2,l=n/2,c=[-i/2,-o/2,o/2,i/2],u=[4e-5,s,s,4e-5],h=[r,s+r,s+r,r],f=[];for(const m of[a,l])for(let d=0;d<4;d++)f.push(c[d],m,u[d]);for(const m of[a,l])for(let d=0;d<4;d++)f.push(c[d],m,h[d]);const p=[],g=(m,d,x,v)=>{p.push(m,d,x,m,x,v)};for(let m=0;m<3;m++)g(8+m,9+m,13+m,12+m),g(m,m+1,m+9,m+8),g(4+m,12+m,13+m,5+m);g(0,8,12,4),g(3,7,15,11);const _=new Ut;return _.setAttribute("position",new tt(f,3)),_.setIndex(p),_.computeVertexNormals(),_}function OR(t,e=16){const n=Fn(t),i=n.entrance/2e3,r=n.head/2e3,s=Math.max(8e-4,n.height/1e3),o=Math.max(12e-5,Math.min((r-i)*.22,i*.18)),a=Math.max(5e-5,(r-i)*.1),l=[new fe(i,2e-5),new fe(i,s),new fe(i+o,s),new fe(r,a),new fe(r,2e-5)],c=new ap(l,e);return c.rotateX(Math.PI/2),c.computeVertexNormals(),c}function O0(t,e,n,i,r,s){var m;const o=(m=Ne[e.pattern])==null?void 0:m.kind;if(!Ep(o))return null;const a=Math.min(RR,yu(e));if(a<=0)return null;let l,c,u,h;if(o==="trieur"){const d=e.holeSize/2e3;c=d,u=d,h=d,l=PR(r/h)}else if(o==="embossed"){const d=e.holeSize/1e3;c=d*.9,u=d*.9,h=d*.38,l=UR(r/h)}else if(o==="perfocon"){const d=a>8e4?8:a>25e3?12:16;l=OR(e,d),c=1,u=1,h=1}else l=FR(e),c=1,u=1,h=1;const f=o==="perfocon"||o==="bridge"||o==="embossed"||o==="trieur"?s.clone():s;(o==="perfocon"||o==="trieur")&&(f.side=Tn),(o==="bridge"||o==="embossed")&&(f.side=Ni);const p=new Mb(l,f,a);p.name="FORMED_FEATURES",p.frustumCulled=!1,p.receiveShadow=a<=12e3,p.castShadow=a<=8e3;let g=0;rR(e,(d,x)=>{if(g>=a)return!1;Wo.position.set(d/1e3-n/2,x/1e3,r/2),Wo.rotation.set(0,0,0),Wo.scale.set(c,u,h),Wo.updateMatrix(),p.setMatrixAt(g,Wo.matrix),g+=1}),p.count=g,p.instanceMatrix.needsUpdate=!0;const _=new Ai;return _.name="FORMED_PATTERN",_.add(p),t.add(_),_}function Gh(t){if(!t)return;const e=new Set;t.traverse(n=>{var r,s;(s=(r=n.geometry)==null?void 0:r.dispose)==null||s.call(r),(Array.isArray(n.material)?n.material:[n.material]).forEach(o=>{var a;o&&(["alphaMap","map","envMap","bumpMap"].forEach(l=>{var u;const c=o[l];c&&!e.has(c)&&(e.add(c),(u=c.dispose)==null||u.call(c))}),e.has(o)||(e.add(o),(a=o.dispose)==null||a.call(o)))})})}function kR(t){return`${t.material}|${t.finish}|${t.color}`}function zR(t){return`${t.width}|${t.height}|${t.pattern}|${t.holeSize}|${t.slotLength}|${t.pitch}|${t.rowPitch}|${t.border}|${t.coneAngle}|${t.thickness}`}function BR(t){return`${t.width}|${t.height}|${t.border}|${t.thickness}|${t.panelForm}|${t.flangeDepth}|${t.bendAngle}|${t.bendRadius}|${t.corner}|${t.cornerRadius}`}function HR(t,e,n,i,r,s){if(e.panelForm!=="flat"){const o=Math.max(r*3,e.flangeDepth/1e3),a=Ss.degToRad(90-e.bendAngle),l=-Math.cos(a)*o/2,c=Math.sin(a)*o/2,u=(h,f,p)=>{const g=new et(new Yr(h,f,p),s);return g.castShadow=!0,g.receiveShadow=!0,g};if(e.panelForm==="topFold"||e.panelForm==="cassette"){const h=u(n,r,o);h.rotation.x=a,h.position.set(0,i-r/2+c,l),t.add(h)}if(e.panelForm==="sideReturns"||e.panelForm==="cassette"){const h=u(r,i,o);h.rotation.y=-a,h.position.set(-n/2+r/2-c,i/2,l);const f=u(r,i,o);f.rotation.y=a,f.position.set(n/2-r/2+c,i/2,l),t.add(h,f)}if(e.panelForm==="cassette"){const h=u(n,r,o);h.rotation.x=-a,h.position.set(0,r/2-c,l),t.add(h)}}}class VR{constructor(e,{bakedShadows:n=!0,onArState:i,onArScale:r,onBusy:s}={}){var l;this.canvas=e,this.bakedShadows=n,this.onArState=i||(()=>{}),this.onArScale=r||(()=>{}),this.onBusy=s||(()=>{}),this.model=null,this.config=null,this.sizeKey="",this.configGen=0,this.orbit={theta:-.48,phi:1.18,radius:1.92},this.target={...this.orbit},this.lookAt=new I(0,.72,0),this.pointers=new Map,this.pinchStart=0,this.dirty=!0,this.xrSession=null,this.hitTestSource=null,this.arPlaced=!1,this.arMoving=!1,this.arHitStable=0,this.arLastHitY=null,this.arPointers=new Map,this.arPinchStart=0,this.arPinchScale0=100,this.arTwistStart=0,this.arTwistYaw0=0,this.scalePercent=100,this.fitScale=1,this.arFloorY=null,this.studioEnv=null,this.xrLight=null,this.overlay=null,this._arMode="idle",this.tool="orbit",this.studioColor=1053721,this.disposed=!1,this.faceMat=null,this.backMat=null,this.edgeMat=null,this.solidMat=null,this.formedGroup=null,this.formedMat=null,this.appearanceId="",this.maskId="",this.formId="",this.maxAnisotropy=4,this.dimHud=null,this.compact=Mp(),this.pixelRatioCap=this.compact?Math.min(devicePixelRatio||1,1.15):Math.min(devicePixelRatio||1,1.5),this.renderer=new Bx({canvas:e,antialias:!this.compact,alpha:!1,preserveDrawingBuffer:!1,powerPreference:this.compact?"low-power":"high-performance"}),this.renderer.setPixelRatio(this.pixelRatioCap),this.renderer.setClearColor(this.studioColor,1),this.renderer.outputColorSpace=En,this.renderer.toneMapping=lx,this.renderer.toneMappingExposure=1.22,this.renderer.shadowMap.enabled=!this.compact,this.renderer.shadowMap.type=ox,this.renderer.shadowMap.autoUpdate=!n&&!this.compact,this.renderer.xr.enabled=!0,this.renderer.xr.setReferenceSpaceType("local"),this.scene=new rp,this.scene.background=new We(this.studioColor),this.scene.fog=new ip(this.studioColor,7.5,16),this.camera=new fn(32,1,.02,100);const o=new Wf(this.renderer);this.studioEnv=o.fromScene(new pC,.04).texture,this.scene.environment=this.studioEnv,o.dispose(),this.maxAnisotropy=Math.min(this.compact?4:16,this.renderer.capabilities.getMaxAnisotropy()||8),this.hemi=new lC(16251387,9081496,1.85),this.scene.add(this.hemi),this.keyLight=new na(16777215,this.compact?2.2:2.62),this.keyLight.position.set(2.4,4.8,3.4),this.keyLight.castShadow=!this.compact,this.keyLight.shadow.mapSize.set(this.compact?512:1024,this.compact?512:1024),this.keyLight.shadow.bias=-25e-5,this.keyLight.shadow.normalBias=.02;const a=this.keyLight.shadow.camera;a.near=.4,a.far=10,a.left=-2.2,a.right=2.2,a.top=2.4,a.bottom=-.4,this.scene.add(this.keyLight),this.rimLight=new na(14149375,this.compact?1.15:2.05),this.rimLight.position.set(-3.2,2.4,-2.8),this.scene.add(this.rimLight),this.fillLight=new na(16774890,this.compact?.45:.7),this.fillLight.position.set(-1.4,1.6,3.2),this.scene.add(this.fillLight),this.compact||(this.backLight=new na(16777215,2.15),this.backLight.position.set(-2.1,3.6,-3.8),this.scene.add(this.backLight)),this.ground=new et(new Wc(1.72,this.compact?32:64),new jc({color:790548,metalness:.28,roughness:.58,envMapIntensity:.18})),this.ground.rotation.x=-Math.PI/2,this.ground.receiveShadow=!0,this.scene.add(this.ground),this.groundShadow=new et(new Wc(1.08,this.compact?24:48),new d0({opacity:.64})),this.groundShadow.rotation.x=-Math.PI/2,this.groundShadow.position.y=.002,this.groundShadow.receiveShadow=!0,this.scene.add(this.groundShadow),this.root=new Ai,this.scene.add(this.root),this.reticle=new et(new up(.07,.09,36).rotateX(-Math.PI/2),new pu({color:16777215,opacity:.92,transparent:!0})),this.reticle.matrixAutoUpdate=!1,this.reticle.visible=!1,this.scene.add(this.reticle),this.arFloor=new et(new Zr(4,4),new d0({opacity:.26})),this.arFloor.rotation.x=-Math.PI/2,this.arFloor.position.y=.012,this.arFloor.receiveShadow=!0,this.arFloor.visible=!1,this.root.add(this.arFloor),this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onWheel=this.onWheel.bind(this),this.onResize=this.onResize.bind(this),this.onARPointerDown=this.onARPointerDown.bind(this),this.onARPointerMove=this.onARPointerMove.bind(this),this.onARPointerUp=this.onARPointerUp.bind(this),e.addEventListener("pointerdown",this.onPointerDown,{passive:!1}),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("pointercancel",this.onPointerUp),e.addEventListener("wheel",this.onWheel,{passive:!1}),this.resizeObserver=new ResizeObserver(()=>this.onResize()),this.resizeObserver.observe(e.parentElement||e),(l=window.visualViewport)==null||l.addEventListener("resize",this.onResize),this.onResize(),this.applyOrbit(!0),this.renderer.setAnimationLoop((c,u)=>this.tick(c,u))}async load(e){await this.updateConfig(e)}async updateConfig(e){if(this.disposed)return;const n=ct(e),i=++this.configGen,r=kR(n),s=zR(n),o=BR(n);this.onBusy(!0);try{if(this.model&&o===this.formId&&s===this.maskId&&r!==this.appearanceId){if(await this.applyAppearance(n),this.disposed||i!==this.configGen)return;this.appearanceId=r,this.config=n;return}if(this.model&&o===this.formId&&s!==this.maskId){if(await new Promise(a=>requestAnimationFrame(a)),this.disposed||i!==this.configGen||(this.replaceMask(n),await this.applyAppearance(n),this.disposed||i!==this.configGen))return;this.maskId=s,this.appearanceId=r,this.config=n,this.renderer.shadowMap.needsUpdate=!0;return}if(await new Promise(a=>requestAnimationFrame(a)),this.disposed||i!==this.configGen||(await this.applyModel(n),this.disposed||i!==this.configGen))return;this.formId=o,this.maskId=s,this.appearanceId=r}finally{i===this.configGen&&this.onBusy(!1)}}async applyAppearance(e){var a;const n=P0(e),i=new fe(Math.max(2,e.width/420),Math.max(2,e.height/420));let r=null;try{r=await vR(e,this.maxAnisotropy)}catch{r=null}if(this.disposed)return;const s=r!=null&&r.colorMap&&((a=n.pbr)!=null&&a.useColorMap)?n.pbr.tint||"#ffffff":n.hex,o=(l,c=0,u=0)=>{var h;l&&(l.color.set(s),r!=null&&r.colorMap&&((h=n.pbr)!=null&&h.useColorMap)&&n.pbr.colorBoost&&l.color.multiplyScalar(n.pbr.colorBoost),l.metalness=Math.min(1,n.metalness+c),l.roughness=Math.max(.04,n.roughness+u),l.envMapIntensity=n.envMapIntensity+(c?.12:0),l.isMeshPhysicalMaterial&&(l.clearcoat=n.clearcoat,l.clearcoatRoughness=e.finish==="powder"?.42:.18),r&&_R(l,r,n,i),l.needsUpdate=!0)};o(this.faceMat),o(this.backMat),this.backMat&&(this.backMat.envMapIntensity=n.envMapIntensity+.2),o(this.solidMat),o(this.formedMat),o(this.edgeMat,.08,-.08),this.dirty=!0}replaceMask(e){var r,s,o,a,l,c,u;const n=I0(e,this.maxAnisotropy),i=[(r=this.faceMat)==null?void 0:r.alphaMap,(s=this.backMat)==null?void 0:s.alphaMap,(o=this.faceMat)==null?void 0:o.bumpMap,(a=this.backMat)==null?void 0:a.bumpMap];Vh(this.faceMat,this.backMat,n,e),U0(i,{alphaMap:(l=this.faceMat)==null?void 0:l.alphaMap,bumpMap:(c=this.faceMat)==null?void 0:c.bumpMap,backAlphaMap:(u=this.backMat)==null?void 0:u.alphaMap}),this.replaceFormedFeatures(e),this.dirty=!0}replaceFormedFeatures(e){var s,o,a;if(this.formedGroup){(s=this.model)==null||s.remove(this.formedGroup);const l=new Set([this.solidMat,this.faceMat,this.backMat,this.edgeMat]);this.formedGroup.traverse(c=>{var h,f;(f=(h=c.geometry)==null?void 0:h.dispose)==null||f.call(h),(Array.isArray(c.material)?c.material:[c.material]).forEach(p=>{p&&!l.has(p)&&(l.add(p),p.dispose())})}),this.formedGroup=null,this.formedMat=null}if(!this.model||!this.solidMat)return;const n=e.width/1e3,i=e.height/1e3,r=Math.max(5e-4,e.thickness/1e3);this.formedGroup=O0(this.model,e,n,i,r,this.solidMat),this.formedMat=((a=(o=this.formedGroup)==null?void 0:o.children[0])==null?void 0:a.material)||null}async applyModel(e){var m,d,x;this.config=e;const n=this.model;n&&this.root.remove(n);const i=e.width/1e3,r=e.height/1e3,s=Math.max(5e-4,e.thickness/1e3),o=P0(e),a=I0(e,this.maxAnisotropy),l=new Ai;l.name="PERFORATED_SHEET";const c=new p0({color:o.hex,metalness:o.metalness,roughness:o.roughness,alphaTest:((m=Ne[e.pattern])==null?void 0:m.through)===!1?0:td,transparent:!1,side:Tn,clearcoat:o.clearcoat,clearcoatRoughness:e.finish==="powder"?.38:.28,envMapIntensity:o.envMapIntensity});Vh(c,null,a,e);const u=c.clone();u.side=Tn,u.envMapIntensity=o.envMapIntensity+.2,Vh(null,u,a,e),U0([a.alphaMap,a.bumpMap,a.backAlphaMap],{alphaMap:c.alphaMap,bumpMap:c.bumpMap,backAlphaMap:u.alphaMap});const h=c.clone();h.alphaMap=null,h.bumpMap=null,h.alphaTest=0,h.bumpScale=0,CR(l,c,u,h,i,r,s,e);const f=new p0({color:o.hex,metalness:Math.min(1,o.metalness+.08),roughness:Math.max(.08,o.roughness-.08),envMapIntensity:o.envMapIntensity+.12,clearcoat:o.clearcoat});if(HR(l,e,i,r,s,f),this.formedGroup=O0(l,e,i,r,s,h),this.formedMat=((x=(d=this.formedGroup)==null?void 0:d.children[0])==null?void 0:x.material)||null,this.model=l,this.faceMat=c,this.backMat=u,this.solidMat=h,this.edgeMat=f,await this.applyAppearance(e),this.disposed){Gh(l);return}this.root.add(l),n&&Gh(n);const p=`${e.width}x${e.height}x${e.thickness}`,g=!this.sizeKey;this.sizeKey=p;const _=Math.max(i,r);this.fitScale=1.95/Math.max(.15,_),this.applyCurrentScale(),this.lookAt.set(0,r*this.fitScale*.5,0),g&&(this.target.theta=-.48,this.target.phi=1.18,this.target.radius=1.92,this.orbit={...this.target}),this.applyOrbit(!0),this.renderer.shadowMap.needsUpdate=!0,this.dirty=!0}applyCurrentScale(){const e=(this.xrSession?1:this.fitScale)*(this.scalePercent/100);this.root.scale.setScalar(e),this.dirty=!0}setTool(e){this.tool=e==="pan"||e==="zoom"?e:"orbit"}setPreset(e){const n={iso:{theta:-.48,phi:1.18,radius:1.92},top:{theta:0,phi:.22,radius:2.15},front:{theta:0,phi:1.38,radius:2.02},right:{theta:Math.PI/2,phi:1.22,radius:2.02}},i=n[e]||n.iso;this.target.theta=i.theta,this.target.phi=i.phi,this.target.radius=i.radius,this.dirty=!0}fitView(){this.target.radius=1.92,this.dirty=!0}resetView(){this.lookAt.set(0,this.lookAt.y,0),this.setPreset("iso")}setScalePercent(e){this.scalePercent=e,this.applyCurrentScale(),this.xrSession&&this.arPlaced&&(this.onArScale(e),this.arFloorY!=null&&this.snapToFloor(this.arFloorY))}setDimensionHud(e){this.dimHud=e||null,this.layoutDimensions()}hideDimensions(){this.dimHud&&Object.values(this.dimHud).forEach(e=>{e&&(e.style.opacity="0")})}layoutDimensions(){if(!this.dimHud||!this.config||this.xrSession||!this.model){this.hideDimensions();return}this.model.updateMatrixWorld(!0);const e=this.config.width/1e3,n=this.config.height/1e3,i=Math.max(5e-4,this.config.thickness/1e3),r=Math.max(e,n)*.055,s=this.model.matrixWorld;this.placeDimLine(this.dimHud.width,-e/2,-r,i/2,e/2,-r,i/2,s,16),this.placeDimLine(this.dimHud.height,-e/2-r,0,i/2,-e/2-r,n,i/2,s,16),this.placeDimLine(this.dimHud.thickness,e/2+r*.4,n*.72,-i/2,e/2+r*.4,n*.72,i/2,s,18)}placeDimLine(e,n,i,r,s,o,a,l,c){if(!e)return;jo.set(n,i,r).applyMatrix4(l).project(this.camera),$o.set(s,o,a).applyMatrix4(l).project(this.camera);const u=jo.z<-1||jo.z>1||$o.z<-1||$o.z>1,h=this.canvas.parentElement||this.canvas,f=h.clientWidth,p=h.clientHeight,g=(jo.x*.5+.5)*f,_=(-jo.y*.5+.5)*p,m=($o.x*.5+.5)*f,d=(-$o.y*.5+.5)*p,x=m-g,v=d-_,y=Math.hypot(x,v);if(u||y<6){e.style.opacity="0";return}const C=Math.atan2(v,x);e.style.opacity="1",e.style.left=`${(g+m)/2}px`,e.style.top=`${(_+d)/2}px`,e.style.width=`${Math.max(y,c)}px`,e.style.transform=`translate(-50%, -50%) rotate(${C}rad)`;const T=e.querySelector("em");T&&(T.style.transform=`translate(-50%, -130%) rotate(${-C}rad)`)}setArMode(e){this._arMode!==e&&(this._arMode=e,this.onArState(e))}applyOrbit(e=!1){const{theta:n,phi:i,radius:r}=e?this.target:this.orbit,s=Math.sin(i);this.camera.position.set(this.lookAt.x+r*s*Math.sin(n),this.lookAt.y+r*Math.cos(i),this.lookAt.z+r*s*Math.cos(n)),this.camera.lookAt(this.lookAt)}tick(e,n){if(this.xrSession){this.updateAR(n),this.renderer.render(this.scene,this.camera);return}const r=Math.abs(this.target.theta-this.orbit.theta)+Math.abs(this.target.phi-this.orbit.phi)+Math.abs(this.target.radius-this.orbit.radius)>4e-4;r&&(this.orbit.theta+=(this.target.theta-this.orbit.theta)*.12,this.orbit.phi+=(this.target.phi-this.orbit.phi)*.12,this.orbit.radius+=(this.target.radius-this.orbit.radius)*.12,this.applyOrbit()),(this.dirty||r)&&(this.renderer.render(this.scene,this.camera),this.layoutDimensions(),this.dirty=!1)}updateAR(e){if(!e||!this.hitTestSource)return;const n=this.renderer.xr.getReferenceSpace();if(!n)return;const i=e.getHitTestResults(this.hitTestSource);if(!i.length){this.arHitStable=0,this.arPlaced||(this.reticle.visible=!1,this.setArMode("scanning"));return}const r=i[0].getPose(n);if(!r)return;const s=r.transform.position.y;this.arLastHitY!=null&&Math.abs(s-this.arLastHitY)<.025?this.arHitStable+=1:this.arHitStable=1,this.arLastHitY=s;const o=this.arHitStable>=8;this.reticle.matrix.fromArray(r.transform.matrix),this.reticle.visible=!this.arPlaced&&o,!this.arPlaced&&o&&this.setArMode("placing")}placeAtReticle(){this.reticle.visible&&(zh.setFromMatrixPosition(this.reticle.matrix),this.root.position.copy(zh),this.root.rotation.set(0,this.root.rotation.y,0),this.root.visible=!0,this.arFloor.visible=!0,this.arPlaced=!0,this.reticle.visible=!1,this.snapToFloor(zh.y))}snapToFloor(e){this.arFloorY=e,this.root.updateMatrixWorld(!0);const n=new pr().setFromObject(this.model);Number.isFinite(n.min.y)&&(this.root.position.y+=e-n.min.y-.012)}nudgeOnFloor(e,n){const i=this.renderer.xr.getCamera(),r=new I(1,0,0).applyQuaternion(i.quaternion),s=new I(0,0,-1).applyQuaternion(i.quaternion);r.y=0,s.y=0,!(r.lengthSq()<1e-6||s.lengthSq()<1e-6)&&(r.normalize(),s.normalize(),this.root.position.addScaledVector(r,e*.0016),this.root.position.addScaledVector(s,-n*.0016))}onARPointerDown(e){var n,i;if(!(!this.xrSession||e.target.closest("button, input, label")))if(e.preventDefault(),(i=(n=this.overlay)==null?void 0:n.setPointerCapture)==null||i.call(n,e.pointerId),this.arPointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.arPointers.size===2){const r=[...this.arPointers.values()];this.arPinchStart=Math.hypot(r[0].x-r[1].x,r[0].y-r[1].y),this.arPinchScale0=this.scalePercent,this.arTwistStart=Math.atan2(r[1].y-r[0].y,r[1].x-r[0].x),this.arTwistYaw0=this.root.rotation.y,this.arMoving=!1}else this.arPlaced&&(this.arMoving=!0,this.setArMode("moving"))}onARPointerMove(e){if(!this.xrSession||!this.arPointers.has(e.pointerId))return;const n=this.arPointers.get(e.pointerId),i=e.clientX-n.x,r=e.clientY-n.y;if(this.arPointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.arPointers.size===2&&this.arPlaced){const s=[...this.arPointers.values()],o=Math.hypot(s[0].x-s[1].x,s[0].y-s[1].y),a=Math.atan2(s[1].y-s[0].y,s[1].x-s[0].x);if(this.arPinchStart>8){const l=Ss.clamp(Math.round(this.arPinchScale0*(o/this.arPinchStart)),50,200);this.setScalePercent(l),this.setArMode("scaling")}this.root.rotation.y=this.arTwistYaw0+(a-this.arTwistStart);return}this.arPlaced&&this.arMoving&&this.nudgeOnFloor(i,r)}onARPointerUp(e){if(!this.xrSession)return;const n=this.arPointers.size===1;this.arPointers.delete(e.pointerId),n&&!this.arPlaced&&this.reticle.visible?(this.placeAtReticle(),this.setArMode("placed")):this.arPlaced&&this.arPointers.size===0&&(this.arMoving=!1,this.reticle.visible=!1,this.setArMode("placed")),this.arPinchStart=0}onResize(){var r;if(this.xrSession)return;const e=((r=this.canvas.parentElement)==null?void 0:r.getBoundingClientRect())||this.canvas.getBoundingClientRect(),n=Math.max(1,e.width),i=Math.max(1,e.height);this.renderer.setSize(n,i,!1),this.camera.aspect=n/i,this.camera.updateProjectionMatrix(),this.dirty=!0}onPointerDown(e){if(!this.xrSession&&(e.pointerType==="touch"&&e.preventDefault(),this.canvas.setPointerCapture(e.pointerId),this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.pointers.size===2)){const n=[...this.pointers.values()];this.pinchStart=Math.hypot(n[0].x-n[1].x,n[0].y-n[1].y)}}onPointerMove(e){if(this.xrSession||!this.pointers.has(e.pointerId))return;const n=this.pointers.get(e.pointerId),i=e.clientX-n.x,r=e.clientY-n.y;if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.pointers.size===2){const s=[...this.pointers.values()],o=Math.hypot(s[0].x-s[1].x,s[0].y-s[1].y);this.pinchStart&&(this.target.radius=Ss.clamp(this.target.radius*(this.pinchStart/o),Bh,Hh)),this.pinchStart=o;return}if(this.tool==="pan"){const s=new I().setFromMatrixColumn(this.camera.matrixWorld,0),o=new I().setFromMatrixColumn(this.camera.matrixWorld,1),a=.0022*this.orbit.radius;this.lookAt.addScaledVector(s,-i*a),this.lookAt.addScaledVector(o,r*a),this.applyOrbit(!0),this.dirty=!0;return}if(this.tool==="zoom"){this.target.radius=Ss.clamp(this.target.radius+r*.012,Bh,Hh);return}this.target.theta-=i*.006,this.target.phi=Ss.clamp(this.target.phi-r*.006,.22,1.46)}onPointerUp(e){this.pointers.delete(e.pointerId),this.pinchStart=0}onWheel(e){this.xrSession||(e.preventDefault(),this.target.radius=Ss.clamp(this.target.radius+e.deltaY*.002,Bh,Hh))}captureJpeg(){const e=this.renderer,n=e.getPixelRatio(),i=this.scene.fog,r=this.scene.background,s=this.ground.visible,o=this.groundShadow.visible;this.scene.fog=null,this.ground.visible=!1,this.groundShadow.visible=!1,this.scene.background=new We(16054007),e.setClearColor(16054007,1),e.setPixelRatio(Math.min(3,Math.max(2,(devicePixelRatio||1)*2))),this.onResize(),e.render(this.scene,this.camera);const a=e.domElement.toDataURL("image/png");return this.scene.fog=i,this.ground.visible=s,this.groundShadow.visible=o,this.scene.background=r||new We(this.studioColor),e.setClearColor(this.studioColor,1),e.setPixelRatio(n),this.onResize(),this.dirty=!0,a}async exportUSDZ(){if(!this.model)throw new Error("3D model is still loading");const e=new Ai,n=this.model.clone(!0);return n.traverse(r=>{r.isMesh&&r.material&&(r.material=r.material.clone())}),e.add(n),e.scale.setScalar(this.scalePercent/100),new LC().parseAsync(e,{quickLookCompatible:!0,maxTextureSize:1200})}async enterAR({overlay:e}={}){if(!navigator.xr)throw new Error("WebXR is not available in this browser");this.overlay=e||null;const n={requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","local-floor","light-estimation"],...e?{domOverlay:{root:e}}:{}};this.setArMode("launching"),this.hideDimensions();try{this.xrSession=await navigator.xr.requestSession("immersive-ar",n)}catch{this.xrSession=await navigator.xr.requestSession("immersive-ar",{optionalFeatures:["hit-test","dom-overlay","local-floor","light-estimation"],...e?{domOverlay:{root:e}}:{}})}this.renderer.setPixelRatio(1),await this.renderer.xr.setSession(this.xrSession),this.arPlaced=!1,this.arMoving=!1,this.arHitStable=0,this.arLastHitY=null,this.arPointers.clear(),this.root.rotation.set(0,0,0),this.root.visible=!1,this.ground.visible=!1,this.groundShadow.visible=!1,this.arFloor.visible=!1,this.reticle.visible=!1,this.renderer.shadowMap.autoUpdate=!0,this.applyCurrentScale(),document.body.classList.add("is-ar"),this.setArMode("scanning");try{this.xrLight=new qC(this.renderer),this.xrLight.addEventListener("estimationstart",()=>{this.scene.add(this.xrLight),this.xrLight.environment&&(this.scene.environment=this.xrLight.environment),this.keyLight.intensity=.6,this.hemi.intensity=.45}),this.xrLight.addEventListener("estimationend",()=>{this.scene.remove(this.xrLight),this.scene.environment=this.studioEnv,this.keyLight.intensity=2.62,this.hemi.intensity=1.62})}catch{this.xrLight=null}try{const i=await this.xrSession.requestReferenceSpace("viewer");this.hitTestSource=await this.xrSession.requestHitTestSource({space:i})}catch{this.hitTestSource=null}this.xrSession.addEventListener("end",()=>this.onAREnd()),this.overlay&&(this.overlay.addEventListener("pointerdown",this.onARPointerDown),this.overlay.addEventListener("pointermove",this.onARPointerMove),this.overlay.addEventListener("pointerup",this.onARPointerUp),this.overlay.addEventListener("pointercancel",this.onARPointerUp))}async exitAR(){if(this.xrSession)try{await this.xrSession.end()}catch{}}onAREnd(){this.overlay&&(this.overlay.removeEventListener("pointerdown",this.onARPointerDown),this.overlay.removeEventListener("pointermove",this.onARPointerMove),this.overlay.removeEventListener("pointerup",this.onARPointerUp),this.overlay.removeEventListener("pointercancel",this.onARPointerUp)),this.xrSession=null,this.hitTestSource=null,this.arPlaced=!1,this.arMoving=!1,this.arPointers.clear(),this.reticle.visible=!1,this.arFloor.visible=!1,this.root.visible=!0,this.root.position.set(0,0,0),this.root.rotation.set(0,0,0),this.arFloorY=null,this.ground.visible=!0,this.groundShadow.visible=!0,this.renderer.shadowMap.autoUpdate=!this.bakedShadows,this.keyLight.intensity=2.62,this.hemi.intensity=1.62,this.scene.environment=this.studioEnv,this.xrLight&&this.scene.remove(this.xrLight),document.body.classList.remove("is-ar"),this.renderer.setPixelRatio(this.pixelRatioCap),this.applyCurrentScale(),this.onResize(),this.setArMode("idle"),this.dirty=!0}dispose(){var e,n,i,r;this.disposed=!0,this.configGen+=1,this.onBusy(!1),this.renderer.setAnimationLoop(null),this.canvas.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("pointercancel",this.onPointerUp),this.canvas.removeEventListener("wheel",this.onWheel),(e=window.visualViewport)==null||e.removeEventListener("resize",this.onResize),(n=this.resizeObserver)==null||n.disconnect(),this.hideDimensions(),this.dimHud=null,Gh(this.model),this.faceMat=null,this.backMat=null,this.edgeMat=null,(r=(i=this.studioEnv)==null?void 0:i.dispose)==null||r.call(i),this.renderer.dispose()}}const GR=Mp()?180:120;function WR({config:t,scalePercent:e,onReady:n,onError:i,onArState:r,onArScale:s,onBusy:o}){const a=Ce.useRef(null),l=Ce.useRef(null),c=Ce.useRef(!1),u=Ce.useRef(r),h=Ce.useRef(s),f=Ce.useRef(o);return u.current=r,h.current=s,f.current=o,Ce.useEffect(()=>{const p=a.current;if(!p)return;let g;try{g=new VR(p,{onArState:_=>{var m;return(m=u.current)==null?void 0:m.call(u,_)},onArScale:_=>{var m;return(m=h.current)==null?void 0:m.call(h,_)},onBusy:_=>{var m;return(m=f.current)==null?void 0:m.call(f,_)}})}catch(_){console.error(_),i==null||i(_);return}return l.current=g,g.load(t).then(()=>{c.current=!0,g.setScalePercent(e),n==null||n(g)}).catch(_=>{console.error(_),i==null||i(_)}),()=>{c.current=!1,g.dispose(),l.current=null}},[]),Ce.useEffect(()=>{var g;if(!c.current)return;(g=f.current)==null||g.call(f,!0);const p=window.setTimeout(()=>{var _;(_=l.current)==null||_.updateConfig(t)},GR);return()=>window.clearTimeout(p)},[t.width,t.height,t.thickness,t.material,t.finish,t.color,t.pattern,t.holeSize,t.slotLength,t.pitch,t.rowPitch,t.border,t.coneAngle,t.panelForm,t.flangeDepth,t.bendAngle,t.bendRadius,t.corner,t.cornerRadius]),Ce.useEffect(()=>{var p;(p=l.current)==null||p.setScalePercent(e)},[e]),S.jsx("canvas",{id:"viewerCanvas",ref:a})}const k0={carbon:{hi:"#c4bdb4",mid:"#7a746c",lo:"#3a3733",plate0:"#6f6a64",plate1:"#45423e",grain:"0",grainW:5,grainOpacity:.4,void0:"#2f3438",void1:"#050608"},ss304:{hi:"#f4f7f9",mid:"#b7c0c6",lo:"#6d767e",plate0:"#b8c1c7",plate1:"#7a848c",grain:"-18",grainW:3.2,grainOpacity:.32,void0:"#3f4850",void1:"#07090c"},alu:{hi:"#fbfcfd",mid:"#d0d5d9",lo:"#8a9096",plate0:"#cfd4d8",plate1:"#949aa0",grain:"-8",grainW:2.4,grainOpacity:.24,void0:"#4a5158",void1:"#0b0d10"}};function Yl(t,e,n){return Array.from({length:6},(i,r)=>{const s=Math.PI/3*r;return`${(t+n*Math.cos(s)).toFixed(2)},${(e+n*Math.sin(s)).toFixed(2)}`}).join(" ")}function Wh(t,e,n){return`${t},${e-n} ${t+n},${e} ${t},${e+n} ${t-n},${e}`}function jR(){return[[0,-2],[-1,-1],[0,-1],[1,-1],[-2,0],[-1,0],[0,0],[1,0],[2,0],[-1,1],[0,1],[1,1],[0,2]]}function Xo({cx:t,cy:e,r:n,ids:i}){const r=n+Math.max(1.4,n*.22),s=n*.72;return S.jsxs("g",{children:[S.jsx("circle",{cx:t+n*.12,cy:e+n*.18,r,fill:"rgba(0,0,0,.38)"}),S.jsx("circle",{cx:t,cy:e,r,fill:`url(#${i.rim})`}),S.jsx("circle",{cx:t,cy:e,r:n*.9,fill:"rgba(12,14,16,.45)"}),S.jsx("circle",{cx:t,cy:e,r:s,fill:`url(#${i.voidG})`}),S.jsx("ellipse",{cx:t-s*.28,cy:e-s*.32,rx:s*.48,ry:s*.36,fill:"rgba(0,0,0,.42)"}),S.jsx("path",{d:`M ${t-n*.38} ${e+n*.52} A ${n*.78} ${n*.78} 0 0 0 ${t+n*.62} ${e+n*.16}`,fill:"none",stroke:"rgba(255,255,255,.55)",strokeWidth:Math.max(.55,n*.1),strokeLinecap:"round"})]})}function $R({cx:t,cy:e,s:n,ids:i}){const r=n/2,s=n*.68,o=s/2;return S.jsxs("g",{children:[S.jsx("rect",{x:t-r+.7,y:e-r+1,width:n,height:n,rx:"1.2",fill:"rgba(0,0,0,.36)"}),S.jsx("rect",{x:t-r-.7,y:e-r-.7,width:n+1.4,height:n+1.4,rx:"1.4",fill:`url(#${i.rim})`}),S.jsx("rect",{x:t-r+.35,y:e-r+.35,width:n-.7,height:n-.7,rx:"0.8",fill:"rgba(12,14,16,.4)"}),S.jsx("rect",{x:t-o,y:e-o,width:s,height:s,rx:"0.55",fill:`url(#${i.voidG})`}),S.jsx("rect",{x:t-o,y:e-o,width:s*.4,height:s*.36,fill:"rgba(0,0,0,.35)"})]})}function z0({cx:t,cy:e,w:n,h:i,ids:r}){const s=Math.min(n,i)/2;return S.jsxs("g",{children:[S.jsx("rect",{x:t-n/2+.6,y:e-i/2+1,width:n,height:i,rx:s,fill:"rgba(0,0,0,.36)"}),S.jsx("rect",{x:t-n/2-.8,y:e-i/2-.8,width:n+1.6,height:i+1.6,rx:s+.5,fill:`url(#${r.rim})`}),S.jsx("rect",{x:t-n*.34,y:e-i*.34,width:n*.68,height:i*.68,rx:s*.68,fill:`url(#${r.voidG})`}),S.jsx("rect",{x:t-n*.28,y:e-i*.32,width:n*.26,height:i*.26,rx:s*.28,fill:"rgba(0,0,0,.32)"})]})}function XR({cx:t,cy:e,r:n,ids:i}){return S.jsxs("g",{children:[S.jsx("polygon",{points:Yl(t+.55,e+.8,n+1.15),fill:"rgba(0,0,0,.36)"}),S.jsx("polygon",{points:Yl(t,e,n+1.25),fill:`url(#${i.rim})`}),S.jsx("polygon",{points:Yl(t,e,n*.86),fill:"rgba(12,14,16,.4)"}),S.jsx("polygon",{points:Yl(t,e,n*.66),fill:`url(#${i.voidG})`})]})}function qR({pattern:t,className:e="",material:n="carbon",variant:i="card"}){const r=Ce.useId().replace(/:/g,""),s=i==="thumb",o=s?120:168,a=s?120:72,l=k0[n]||k0.carbon,c={plate:`plate-${r}`,sheen:`sheen-${r}`,brush:`brush-${r}`,rim:`rim-${r}`,voidG:`void-${r}`,bump:`bump-${r}`,cone:`cone-${r}`,bridge:`bridge-${r}`,clip:`clip-${r}`},u=s?4:6;function h({xStep:g,yStep:_,stagger:m=!1,render:d}){const x=[];let v=0;for(let y=u+_*.35;y<a-2;y+=_,v++){const C=m&&v%2?g/2:0;for(let T=u+C+g*.15;T<o-2;T+=g)x.push(d(T,y,`${v}-${T.toFixed(1)}`))}return x}const f=s?1.28:1;let p=null;if(t==="round60")p=h({xStep:26*(s?.92:1),yStep:22.5*(s?.92:1),stagger:!0,render:(g,_,m)=>S.jsx("g",{children:S.jsx(Xo,{cx:g,cy:_,r:6.6*f,ids:c})},m)});else if(t==="roundStraight")p=h({xStep:27,yStep:23,stagger:!1,render:(g,_,m)=>S.jsx("g",{children:S.jsx(Xo,{cx:g,cy:_,r:5.5*f,ids:c})},m)});else if(t==="square")p=h({xStep:28,yStep:24,render:(g,_,m)=>S.jsx("g",{children:S.jsx($R,{cx:g,cy:_,s:12.2*f,ids:c})},m)});else if(t==="slot")p=h({xStep:28,yStep:30,stagger:!0,render:(g,_,m)=>S.jsx("g",{children:S.jsx(z0,{cx:g,cy:_,w:9*f,h:22*f,ids:c})},m)});else if(t==="hex")p=h({xStep:28,yStep:24.4,stagger:!0,render:(g,_,m)=>S.jsx("g",{children:S.jsx(XR,{cx:g,cy:_,r:8*f,ids:c})},m)});else if(t==="bridgeSlot")p=h({xStep:46,yStep:24,stagger:!0,render:(g,_,m)=>S.jsxs("g",{children:[S.jsx(z0,{cx:g,cy:_+1.2,w:32,h:9.5,ids:c}),S.jsx("path",{d:`M ${g-14.5} ${_+4.6} L ${g-8} ${_-4.4} H ${g+8} L ${g+14.5} ${_+4.6} Z`,fill:"rgba(0,0,0,.28)"}),S.jsx("path",{d:`M ${g-14} ${_+3.8} L ${g-7.6} ${_-5} H ${g+7.6} L ${g+14} ${_+3.8} Z`,fill:`url(#${c.bridge})`}),S.jsx("path",{d:`M ${g-7.2} ${_-4.6} H ${g+7.2}`,stroke:"rgba(255,255,255,.5)",strokeWidth:"0.9"})]},m)});else if(t==="trieur")p=h({xStep:26,yStep:22.6,stagger:!0,render:(g,_,m)=>S.jsxs("g",{children:[S.jsx("ellipse",{cx:g+1.4,cy:_+2.2,rx:"7.4",ry:"6.4",fill:"rgba(0,0,0,.32)"}),S.jsx("circle",{cx:g,cy:_,r:"6.8",fill:`url(#${c.bump})`}),S.jsx("ellipse",{cx:g-1.8,cy:_-2.2,rx:"2.4",ry:"1.7",fill:"rgba(255,255,255,.38)"})]},m)});else if(t==="perfocon")p=h({xStep:22,yStep:19.2,stagger:!0,render:(g,_,m)=>S.jsxs("g",{children:[S.jsx("circle",{cx:g+.6,cy:_+.9,r:"7.4",fill:"rgba(0,0,0,.28)"}),S.jsx("circle",{cx:g,cy:_,r:"7.3",fill:`url(#${c.rim})`}),S.jsx("circle",{cx:g,cy:_,r:"5.5",fill:`url(#${c.cone})`}),S.jsx("circle",{cx:g,cy:_,r:"2.35",fill:`url(#${c.voidG})`}),S.jsx("ellipse",{cx:g-.7,cy:_-.9,rx:"1.15",ry:"0.85",fill:"rgba(0,0,0,.35)"})]},m)});else if(t==="decorative"){const g=s?42:70;p=[];let _=0;for(let m=22;m<a;m+=50,_++)for(let d=22+(_%2?20:0);d<o-8;d+=g)jR().forEach(([x,v],y)=>{p.push(S.jsx("g",{children:S.jsx(Xo,{cx:d+x*5.05,cy:m+v*5.05,r:2.15,ids:c})},`${_}-${d}-${y}`))})}else t==="embossed"?p=h({xStep:32,yStep:27.6,stagger:!0,render:(g,_,m)=>S.jsxs("g",{children:[S.jsx("polygon",{points:Wh(g+.8,_+1.1,9.2),fill:"rgba(0,0,0,.3)"}),S.jsx("polygon",{points:Wh(g,_,8.8),fill:`url(#${c.bump})`}),S.jsx("polygon",{points:Wh(g-.6,_-.8,3.4),fill:"rgba(255,255,255,.22)"}),S.jsx(Xo,{cx:g,cy:_,r:2.1,ids:c})]},m)}):p=h({xStep:26,yStep:22,stagger:!0,render:(g,_,m)=>S.jsx("g",{children:S.jsx(Xo,{cx:g,cy:_,r:5,ids:c})},m)});return S.jsxs("svg",{className:`pattern-preview-svg ${e}`,viewBox:`0 0 ${o} ${a}`,preserveAspectRatio:"xMidYMid slice",role:"img","aria-label":`${t} preview`,children:[S.jsxs("defs",{children:[S.jsx("clipPath",{id:c.clip,children:S.jsx("rect",{width:o,height:a,rx:"5"})}),S.jsxs("linearGradient",{id:c.plate,x1:"0",y1:"0",x2:"1",y2:"1",children:[S.jsx("stop",{offset:"0",stopColor:l.lo}),S.jsx("stop",{offset:".22",stopColor:l.plate0}),S.jsx("stop",{offset:".48",stopColor:l.hi}),S.jsx("stop",{offset:".72",stopColor:l.plate1}),S.jsx("stop",{offset:"1",stopColor:l.lo})]}),S.jsxs("linearGradient",{id:c.sheen,x1:"0",y1:"0",x2:"1",y2:"0",children:[S.jsx("stop",{offset:"0",stopColor:"rgba(255,255,255,0)"}),S.jsx("stop",{offset:".38",stopColor:"rgba(255,255,255,.34)"}),S.jsx("stop",{offset:".62",stopColor:"rgba(255,255,255,0)"}),S.jsx("stop",{offset:"1",stopColor:"rgba(0,0,0,.12)"})]}),S.jsxs("pattern",{id:c.brush,width:l.grainW,height:"14",patternUnits:"userSpaceOnUse",patternTransform:`rotate(${l.grain})`,children:[S.jsx("rect",{width:l.grainW,height:"14",fill:"transparent"}),S.jsx("path",{d:"M0 0 V14",stroke:"rgba(255,255,255,.22)",strokeWidth:"0.45"}),S.jsx("path",{d:`M${l.grainW/2} 0 V14`,stroke:"rgba(0,0,0,.16)",strokeWidth:"0.4"})]}),S.jsxs("radialGradient",{id:c.rim,cx:"34%",cy:"28%",r:"72%",children:[S.jsx("stop",{offset:"0",stopColor:l.hi}),S.jsx("stop",{offset:".42",stopColor:l.mid}),S.jsx("stop",{offset:"1",stopColor:l.lo})]}),S.jsxs("radialGradient",{id:c.voidG,cx:"64%",cy:"70%",r:"78%",children:[S.jsx("stop",{offset:"0",stopColor:l.void0}),S.jsx("stop",{offset:".55",stopColor:l.void1}),S.jsx("stop",{offset:"1",stopColor:"#050608"})]}),S.jsxs("radialGradient",{id:c.bump,cx:"34%",cy:"28%",r:"74%",children:[S.jsx("stop",{offset:"0",stopColor:l.hi}),S.jsx("stop",{offset:".38",stopColor:l.mid}),S.jsx("stop",{offset:".78",stopColor:l.lo}),S.jsx("stop",{offset:"1",stopColor:"#2a2c2e"})]}),S.jsxs("radialGradient",{id:c.cone,cx:"36%",cy:"30%",r:"76%",children:[S.jsx("stop",{offset:"0",stopColor:l.hi}),S.jsx("stop",{offset:".32",stopColor:l.mid}),S.jsx("stop",{offset:".7",stopColor:l.lo}),S.jsx("stop",{offset:"1",stopColor:"#1c2024"})]}),S.jsxs("linearGradient",{id:c.bridge,x1:"0",y1:"0",x2:"0",y2:"1",children:[S.jsx("stop",{offset:"0",stopColor:l.hi}),S.jsx("stop",{offset:".28",stopColor:l.mid}),S.jsx("stop",{offset:".7",stopColor:l.lo}),S.jsx("stop",{offset:"1",stopColor:"#2a2e32"})]})]}),S.jsxs("g",{clipPath:`url(#${c.clip})`,children:[S.jsx("rect",{width:o,height:a,fill:`url(#${c.plate})`}),S.jsx("rect",{width:o,height:a,fill:`url(#${c.brush})`,opacity:l.grainOpacity}),S.jsx("rect",{width:o,height:a,fill:`url(#${c.sheen})`,opacity:"0.28"}),p]})]})}const _a=new Uint8Array(256),nd=new Uint8Array(256);(function(){for(let e=0,n=1;e<255;e++)_a[e]=n,nd[n]=e,n<<=1,n&256&&(n^=285);_a[255]=_a[0]})();function xy(t,e){return t&&e?_a[(nd[t]+nd[e])%255]:0}function YR(t){let e=[1];for(let n=0;n<t;n++){const i=[1,_a[n]],r=new Array(e.length+1).fill(0);for(let s=0;s<e.length;s++)r[s]^=e[s],r[s+1]^=xy(e[s],i[1]);e=r}return e}function ZR(t,e){const n=YR(e),i=t.concat(new Array(e).fill(0));for(let r=0;r<t.length;r++){const s=i[r];if(s)for(let o=0;o<n.length;o++)i[r+o]^=xy(n[o],s)}return i.slice(t.length)}const KR={2:{size:25,data:28,ec:16,blocks:1,align:[6,18]},3:{size:29,data:44,ec:26,blocks:1,align:[6,22]},4:{size:33,data:64,ec:18,blocks:2,align:[6,26]},5:{size:37,data:86,ec:24,blocks:2,align:[6,30]},6:{size:41,data:108,ec:16,blocks:4,align:[6,34]},7:{size:45,data:124,ec:18,blocks:4,align:[6,22,38]}},JR=[21522,20773,24188,23371,17913,16590,20375,19104];function QR(t){if(t+2<=28)return 2;if(t+2<=44)return 3;if(t+2<=64)return 4;if(t+2<=86)return 5;if(t+2<=108)return 6;if(t+2<=124)return 7;throw new Error("QR payload too long")}function jh(t,e,n,i){for(let r=-1;r<=7;r++)for(let s=-1;s<=7;s++){const o=i+r,a=n+s;if(o<0||a<0||o>=t.length||a>=t.length)continue;const l=r>=0&&r<=6&&s>=0&&s<=6&&(r===0||r===6||s===0||s===6||r>=2&&r<=4&&s>=2&&s<=4);r>=0&&r<=6&&s>=0&&s<=6&&(t[o][a]=l),e[o][a]=!0}}function eP(t,e,n,i){for(let r=-2;r<=2;r++)for(let s=-2;s<=2;s++){const o=i+r,a=n+s;if(e[o][a])return}for(let r=-2;r<=2;r++)for(let s=-2;s<=2;s++){const o=i+r,a=n+s;t[o][a]=Math.max(Math.abs(r),Math.abs(s))!==1,e[o][a]=!0}}function tP(t,e,n){const i=t.length;for(let r=0;r<15;r++){const s=(n>>r&1)===1;r<6?(t[r][8]=s,t[8][i-1-r]=s):r===6?(t[7][8]=s,t[8][i-7]=s):r===7?(t[8][8]=s,t[8][i-8]=s):r===8?(t[8][7]=s,t[i-7][8]=s):(t[8][14-r]=s,t[i-15+r][8]=s),e[r<8?Math.min(r,7):8][8]=!0}for(let r=0;r<i;r++)e[8][r]=!0,e[r][8]=!0;t[i-8][8]=!0,e[i-8][8]=!0}function nP(t,e,n){return(e+n)%2===0}function iP(t){const e=Array.from(new TextEncoder().encode(String(t))),n=QR(e.length),i=KR[n],r=[],s=(v,y)=>{for(let C=y-1;C>=0;C--)r.push(v>>C&1)};for(s(4,4),s(e.length,8),e.forEach(v=>s(v,8)),s(0,Math.min(4,i.data*8-r.length));r.length%8;)r.push(0);const o=[];for(let v=0;v<r.length;v+=8){let y=0;for(let C=0;C<8;C++)y=y<<1|r[v+C];o.push(y)}const a=[236,17];for(;o.length<i.data;)o.push(a[o.length-e.length&1]);o.length=i.data;const l=i.data/i.blocks,c=[];for(let v=0;v<i.blocks;v++){const y=o.slice(v*l,(v+1)*l);c.push({data:y,ec:ZR(y,i.ec)})}const u=[];for(let v=0;v<l;v++)c.forEach(y=>u.push(y.data[v]));for(let v=0;v<i.ec;v++)c.forEach(y=>u.push(y.ec[v]));const h=[];u.forEach(v=>{for(let y=7;y>=0;y--)h.push(v>>y&1)});const f=i.size,p=Array.from({length:f},()=>Array(f).fill(!1)),g=Array.from({length:f},()=>Array(f).fill(!1));jh(p,g,0,0),jh(p,g,f-7,0),jh(p,g,0,f-7),i.align.forEach(v=>i.align.forEach(y=>eP(p,g,v,y)));for(let v=8;v<f-8;v++)p[6][v]=v%2===0,p[v][6]=v%2===0,g[6][v]=g[v][6]=!0;const _=0;tP(p,g,JR[_]);let m=0,d=-1,x=f-1;for(;x>0;){x===6&&(x-=1);for(let v=0;v<f;v++){const y=d<0?f-1-v:v;for(let C=0;C<2;C++){const T=x-C;if(g[y][T])continue;let A=m<h.length?h[m++]===1:!1;nP(_,y,T)&&(A=!A),p[y][T]=A}}d=-d,x-=2}return p}function rP(t,e,n,i,r,s="#111"){const o=iP(e),a=o.length,l=4,c=a+l*2,u=r/c;t.fillStyle="#fff",t.fillRect(n,i,r,r),t.fillStyle=s;for(let h=0;h<a;h++)for(let f=0;f<a;f++)o[h][f]&&t.fillRect(n+(f+l)*u,i+(h+l)*u,u+.4,u+.4)}function sP(t){return String(t||"product").replace(/[^A-Za-z0-9]+/g,"_").replace(/^_|_$/g,"")}function B0(){const t="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="";for(let n=0;n<6;n++)e+=t[t.length*Math.random()|0];return e}async function oP(t,e){try{const n=await fetch("/api/codes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({configuration:t})});if(n.ok){const i=await n.json();return{code:i.code||B0(),url:i.url||e}}}catch{}return{code:B0(),url:e}}function aP(t){return new Promise((e,n)=>{const i=new Image;i.onload=()=>e(i),i.onerror=n,i.src=t})}function Zl(t,e,n,i,r,s){const o=Math.min(s,i/2,r/2);t.beginPath(),t.moveTo(e+o,n),t.arcTo(e+i,n,e+i,n+r,o),t.arcTo(e+i,n+r,e,n+r,o),t.arcTo(e,n+r,e,n,o),t.arcTo(e,n,e+i,n,o),t.closePath()}function H0(t,e,n,i,r,s){t.fillStyle="#74808a",t.font="700 12px Inter, Segoe UI, Arial, sans-serif",t.fillText(e.toUpperCase(),i,r),t.fillStyle="#151b20",t.font="700 20px Inter, Segoe UI, Arial, sans-serif";let a=String(n);for(;t.measureText(a).width>s&&a.length>3;)a=`${a.slice(0,-2)}…`;t.fillText(a,i,r+26)}async function lP(t,e,n,i,r){const l=document.createElement("canvas");l.width=1920*2,l.height=1080*2;const c=l.getContext("2d",{alpha:!1,willReadFrequently:!0});c.scale(2,2),c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high";const u=1920,h=1080;c.fillStyle="#f4f6f7",c.fillRect(0,0,u,h),c.fillStyle="#11171c",c.fillRect(0,0,u,96),c.fillStyle="#d8ff37",c.fillRect(0,0,10,96),c.fillStyle="#d8ff37",c.font="800 12px Inter, Segoe UI, Arial, sans-serif",c.fillText("STEELWORKS / CONFIGURATION SHEET",40,28),c.fillStyle="#fff",c.font="800 34px Inter, Segoe UI, Arial, sans-serif",c.fillText(Re.productName,40,64),c.fillStyle="#9ba5ad",c.font="500 13px Inter, Segoe UI, Arial, sans-serif",c.fillText(uy,40,84),c.textAlign="right",c.fillStyle="#fff",c.font="700 15px Inter, Segoe UI, Arial, sans-serif",c.fillText(r,u-40,32),c.fillStyle="#9ba5ad",c.font="500 13px Inter, Segoe UI, Arial, sans-serif",c.fillText(new Date().toLocaleDateString(),u-40,54),c.fillText(`${Re.contactEmail}  ·  ${Re.contactPhone}`,u-40,76),c.textAlign="left";const f=await aP(n),p=32,g=116,_=1188,m=748;c.fillStyle="#dce1e4",Zl(c,p,g,_,m,10),c.fill();const d=Math.min((_-48)/f.width,(m-48)/f.height),x=f.width*d,v=f.height*d;c.save(),Zl(c,p,g,_,m,10),c.clip(),c.drawImage(f,p+(_-x)/2,g+(m-v)/2,x,v),c.restore();const y=ai[i.material],C=oo[i.finish],T=Ne[i.pattern],A=xp(i),L=yp(i),w=dy(i),M=(T==null?void 0:T.kind)==="slot"||(T==null?void 0:T.kind)==="bridge",U=M?`${i.pitch} × ${i.rowPitch} mm`:`${i.pitch} mm`,H=i.panelForm==="flat"?"N/A":`${i.flangeDepth} mm / ${i.bendAngle}° / R${i.bendRadius}`,D=1240,B=116,$=648,Z=748;c.fillStyle="#fff",Zl(c,D,B,$,Z,10),c.fill(),c.fillStyle="#d8ff37",c.fillRect(D,B+10,8,Z-20),c.fillStyle="#11171c",c.font="800 16px Inter, Segoe UI, Arial, sans-serif",c.fillText("FABRICATION PARAMETERS",D+36,B+42),c.strokeStyle="#d7dde1",c.beginPath(),c.moveTo(D+36,B+58),c.lineTo(D+$-28,B+58),c.stroke();const Q=D+36,N=D+340,j=270;[["Sheet size",`${i.width} × ${i.height} mm`,"Thickness",`${i.thickness} mm`],["Material",y.label,"Finish",`${C.label}${i.finish==="powder"?` · ${kt[i.color].label}`:""}`],["Pattern",T!=null&&T.conical?`${T.label} · ${i.coneAngle}°`:T.label,"Opening",`${i.holeSize} mm${M?` × ${i.slotLength} L`:""}${T!=null&&T.conical?` / ${i.coneAngle}°`:""}`],["Pitch",U,"Quantity",String(i.quantity||1)],["Panel form",$s[i.panelForm].label,"Bend / flange",H],["Corner",`${Va[i.corner].label}${i.corner==="square"?"":` ${Xs(i)} mm`}`,"Quality",`${i.deburr} / ${i.tolerance} / ${i.flatness}`],["Open area / mass",`${A.toFixed(1)}% / ${L.toFixed(1)} kg`,`Indicative ${Re.currency}`,Sp(w,Re.currency)]].forEach((me,Pe)=>{const W=B+88+Pe*80;H0(c,me[0],me[1],Q,W,j),H0(c,me[2],me[3],N,W,j)}),c.fillStyle="#11171c",Zl(c,32,884,1856,164,10),c.fill(),c.fillStyle="#d8ff37",c.fillRect(32,894,8,144);try{rP(c,e,56,904,124)}catch{}c.fillStyle="#d8ff37",c.font="800 22px Inter, Segoe UI, Arial, sans-serif",c.fillText(`CONFIGURATION ${t}`,204,938),c.fillStyle="#fff",c.font="700 16px Inter, Segoe UI, Arial, sans-serif",c.fillText("Scan to reopen this exact configuration",204,968),c.fillStyle="#9ba5ad",c.font="500 13px Inter, Segoe UI, Arial, sans-serif";const ne=e.length>140?`${e.slice(0,140)}…`:e;return c.fillText(ne,204,994),c.fillText("DXF export contains blank profile, bend lines, perforations and fabrication notes. Final CAM/tooling validation remains the responsibility of the fabricator.",204,1018),c.fillStyle="#6f7a82",c.font="600 11px Inter, Segoe UI, Arial, sans-serif",c.fillText(`${Re.manufacturer} · Parametric 3D product configuration`,204,1038),l}function cP(t,e,n,i){const o=new TextEncoder,a=[];let l=0;const c=[0],u=d=>{const x=typeof d=="string"?o.encode(d):d;a.push(x),l+=x.length};u(`%PDF-1.4
`);const h=(d,x,v)=>{c[d]=l,u(`${d} 0 obj
${x}`),v&&(u(`stream
`),u(v),u(`endstream
`)),u(`endobj
`)};h(1,`<< /Type /Catalog /Pages 2 0 R >>
`),h(2,`<< /Type /Pages /Kids [3 0 R] /Count 1 >>
`),h(3,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 1080 ${607.5}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>
`),h(4,`<< /Type /XObject /Subtype /Image /Width ${e} /Height ${n} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /${i} /Length ${t.length} >>
`,t);const f=`q 1080 0 0 ${607.5} 0 0 cm /Im0 Do Q`;h(5,`<< /Length ${f.length} >>
`,o.encode(f));const p=l;u(`xref
0 6
0000000000 65535 f 
`);for(let d=1;d<=5;d++)u(`${String(c[d]).padStart(10,"0")} 00000 n 
`);u(`trailer << /Size 6 /Root 1 0 R >>
startxref
${p}
%%EOF`);const g=a.reduce((d,x)=>d+x.length,0),_=new Uint8Array(g);let m=0;return a.forEach(d=>{_.set(d,m),m+=d.length}),_}async function uP(t){const e=new Blob([t]).stream().pipeThrough(new CompressionStream("deflate"));return new Uint8Array(await new Response(e).arrayBuffer())}async function hP(t,e=.97){const n=await new Promise(o=>t.toBlob(o,"image/jpeg",e));if(n)return new Uint8Array(await n.arrayBuffer());const i=t.toDataURL("image/jpeg",e),r=atob(i.split(",")[1]||""),s=new Uint8Array(r.length);for(let o=0;o<r.length;o++)s[o]=r.charCodeAt(o);return s}async function fP(t){try{const{width:e,height:n}=t,i=t.getContext("2d",{willReadFrequently:!0}),{data:r}=i.getImageData(0,0,e,n),s=new Uint8Array(e*n*3);for(let o=0,a=0;o<r.length;o+=4,a+=3)s[a]=r[o],s[a+1]=r[o+1],s[a+2]=r[o+2];return{bytes:await uP(s),filter:"FlateDecode"}}catch{return{bytes:await hP(t,.97),filter:"DCTDecode"}}}async function dP({config:t,viewUrl:e,captureJpeg:n,sku:i}){const r=await oP(t,e),s=r.url||e,o=n(),a=await lP(r.code,s,o,t,i),l=await fP(a),c=cP(l.bytes,a.width,a.height,l.filter),u=document.createElement("a");return u.href=URL.createObjectURL(new Blob([c],{type:"application/pdf"})),u.download=`${sP(Re.productName)}_${r.code}.pdf`,u.click(),setTimeout(()=>URL.revokeObjectURL(u.href),1500),{code:r.code,sku:i,url:s}}const pP=["mill","brushed","galvanized","powder"],mP=[{id:"configure",n:"1",label:"Configure"},{id:"review",n:"2",label:"Review & quote"}],gP={none:"None",standard:"Standard",fine:"Fine"},vP={"iso-c":"ISO coarse","iso-m":"ISO medium","iso-f":"ISO fine"},_P={standard:"Standard",precision:"Precision"},yy=new URL(location.href).searchParams.get("embed")==="1",Sy="steel-configurator-saved",id=xR();let V0=!1;function xP(){try{if(document.referrer)return new URL(document.referrer).origin}catch{}return yy?"*":location.origin}function G0(t){window.parent&&window.parent!==window&&window.parent.postMessage({source:"steel-configurator",...t},xP())}function W0(){try{const t=JSON.parse(localStorage.getItem(Sy)||"[]");return Array.isArray(t)?t:[]}catch{return[]}}function Kl(t,e={}){fetch("/api/events",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:t,payload:e})}).catch(()=>{})}function yP(){var go,vo,mr,_o,gr,xo,yo,Za,Ka,Ja,b,k,X,V,G,xe,be;const[t,e]=Ce.useReducer(iR,null,dR),[n,i]=Ce.useState(()=>({...Re})),[r,s]=Ce.useState(""),[o,a]=Ce.useState(!1),[l,c]=Ce.useState(!1),[u,h]=Ce.useState(!1),[f,p]=Ce.useState(""),[g,_]=Ce.useState("idle"),[m,d]=Ce.useState(!1),[x,v]=Ce.useState(!0),[y,C]=Ce.useState(!1),[T,A]=Ce.useState(!1),[L,w]=Ce.useState(100),[M,U]=Ce.useState(""),[H,D]=Ce.useState("configure"),[B,$]=Ce.useState("orbit"),[Z,Q]=Ce.useState(!1),N=Ce.useRef({w:0,h:0}),[j,q]=Ce.useState(()=>!Mp()),[ne,me]=Ce.useState("form"),Pe=Ce.useRef(null),W=Ce.useRef(null),re=Ce.useRef({width:null,height:null,thickness:null}),pe=Ce.useRef(""),ce=Ce.useRef(0),Ee=Ce.useMemo(()=>hR(t,n.skuPrefix),[t,n.skuPrefix]),Oe=Ce.useMemo(()=>xp(t),[t]),O=Ce.useMemo(()=>yp(t),[t]),Ve=Ce.useMemo(()=>yu(t),[t]),Y=Ce.useMemo(()=>dy(t),[t,n]),ae=Ce.useMemo(()=>Sp(Y,n.currency),[Y,n.currency]),K=Ce.useMemo(()=>aR(t),[t]),he=Ce.useMemo(()=>va(t),[t]),ie=Ce.useMemo(()=>lR(t),[t]),Me=Ce.useMemo(()=>py(t),[t]),Le=Ce.useMemo(()=>ie.filter(P=>P.level==="block"),[ie]),R=id.android&&g!=="idle",E=t.units==="in"?"in":"mm",z=(P,le=E==="in"?3:0)=>`${fc(P,t.units,le)} ${E}`,ee=Ce.useMemo(()=>uR({config:t,sku:Ee,openArea:Oe,weight:O,price:Y,lead:K,currency:n.currency}),[t,Ee,Oe,O,Y,K,n.currency]),te=P=>{s(P),window.clearTimeout(ce.current),ce.current=window.setTimeout(()=>s(""),2400)};Ce.useEffect(()=>{G0({type:"ready",configuration:t,sku:Ee});const P=le=>{if(le.source!==window.parent)return;const ge=le.data;!ge||ge.source==="steel-configurator"||ge.type==="setConfiguration"&&ge.configuration&&e({type:"load",config:ge.configuration})};return window.addEventListener("message",P),()=>window.removeEventListener("message",P)},[]),Ce.useEffect(()=>{G0({type:"configurationChanged",configuration:t,sku:Ee})},[t,Ee]),Ce.useEffect(()=>{V0||(V0=!0,Kl("view",{sku:Ee}))},[Ee]),Ce.useEffect(()=>{fetch("/api/product").then(P=>P.ok?P.json():Promise.reject()).then(P=>{const le=tR(P);i(le);const ge=new URL(location.href).searchParams;!ge.has("w")&&!ge.has("h")&&!ge.has("t")&&!ge.has("cfg")&&e({type:"applyCatalogDefaults",values:{width:le.width,height:le.height,thickness:le.thickness}})}).catch(()=>{})},[]),Ce.useEffect(()=>{const P=(new URL(location.href).searchParams.get("cfg")||"").toUpperCase();if(!P)return;let le=!1;return fetch(`/api/codes/${P}`).then(ge=>ge.ok?ge.json():Promise.reject()).then(ge=>{if(le)return;const Ue=fR(ge);Ue&&e({type:"load",config:Ue})}).catch(()=>{}),()=>{le=!0}},[]);const oe=Ce.useCallback(P=>w(P),[]),Ie=Ce.useCallback(P=>{var le;_(P),P==="idle"&&(w(100),(le=Pe.current)==null||le.setScalePercent(100))},[]),_e=Ce.useCallback(P=>{Pe.current=P,P.setDimensionHud(re.current),C(!0)},[]),ve=Ce.useCallback(P=>A(!!P),[]),ke=[t.width,t.height,t.thickness,t.material,t.finish,t.color,t.pattern,t.holeSize,t.slotLength,t.pitch,t.rowPitch,t.border,t.panelForm,t.flangeDepth,t.bendAngle,t.bendRadius,t.corner,t.cornerRadius].join("|");Ce.useEffect(()=>{if(!id.ios||!y||!Pe.current)return;let P=!1;const le=window.setTimeout(()=>{Pe.current.exportUSDZ().then(ge=>{if(P)return;pe.current&&URL.revokeObjectURL(pe.current);const Ue=URL.createObjectURL(new Blob([ge],{type:"model/vnd.usdz+zip"}));pe.current=Ue,U(Ue)}).catch(()=>{P||U("")})},400);return()=>{P=!0,window.clearTimeout(le)}},[y,ke]);async function de(){if(!Pe.current){p("Wait for the 3D panel to load, then tap View in AR again.");return}if(!await my()){p(qc);return}try{w(100),Pe.current.setScalePercent(100),_("launching"),Kl("ar_launch",{sku:Ee}),await Pe.current.enterAR({overlay:W.current})}catch(P){_("idle"),p(yR(P))}}async function De(){const P=Oh(t);try{Kl("share",{sku:Ee}),navigator.share?await navigator.share({title:`${n.productName} ${Ee}`,url:P}):(await navigator.clipboard.writeText(P),te("Configuration link copied"))}catch{}}function qe(){const P=W0();P.unshift({id:`CFG-${Date.now()}`,name:`${Ee} · ${new Date().toLocaleString()}`,config:t});try{localStorage.setItem(Sy,JSON.stringify(P.slice(0,16)))}catch{}c(!0),te("Configuration saved locally")}async function Fe(P,le){try{await navigator.clipboard.writeText(P),te(le)}catch{te("Could not copy")}}function Te(){if(Le.length){me("rules"),te("This configuration cannot be manufactured as specified");return}a(!0)}async function Ge(){if(Le.length){me("rules"),te("Fix manufacturing issues before export or quote");return}try{te("Preparing technical PDF…");const P=await dP({config:t,viewUrl:Oh(t),captureJpeg:()=>Pe.current.captureJpeg(),sku:Ee});Kl("spec_download",{sku:Ee,kind:"pdf",code:P.code}),te(`PDF saved · ${P.code}`)}catch(P){console.error(P),te((P==null?void 0:P.message)||"Could not create the PDF")}}async function Ye(P){if(P.preventDefault(),Le.length){te("Fix manufacturing issues before sending an RFQ");return}const le=new FormData(P.currentTarget),ge=Object.fromEntries(le.entries()),Ue=`RFQ: ${n.productName} ${Ee}`,ze=["Perforated sheet RFQ","",`Name: ${ge.name||""}`,`Company: ${ge.company||""}`,`Email: ${ge.email||""}`,`Phone: ${ge.phone||""}`,`Quantity: ${ge.quantity||t.quantity}`,"",ee,`Link: ${Oh(t)}`,"","Notes:",ge.notes||"(none)"].join(`
`);try{await fetch("/api/quotes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...ge,quantity:Number(ge.quantity)||t.quantity,configuration:{...t,computed:{sku:Ee,openArea:Oe,weight:O,holes:Ve}}})})}catch{}window.location.href=`mailto:${n.contactEmail}?subject=${encodeURIComponent(Ue)}&body=${encodeURIComponent(ze)}`}const pt=l?W0():[],Be=R?g==="scanning"||g==="launching"?"Move the phone to find the floor, then tap to place":g==="placing"?"Tap to place the sheet at 1:1 scale":g==="scaling"?`${L}%`:"Drag to move · pinch to scale · twist to rotate":"",F=`${oo[t.finish].label}${t.finish==="powder"?` · ${kt[t.color].label} – ${kt[t.color].name}`:""}`,se=H==="configure"?"configure":"review",J=((go=Ne[t.pattern])==null?void 0:go.kind)==="slot"||((vo=Ne[t.pattern])==null?void 0:vo.kind)==="bridge",Se=J?`${t.pitch} × ${t.rowPitch}`:String(t.pitch),we=t.holeSize<he.minHoleSize,Ke=t.pitch<he.minPitchX,st=(((mr=Ne[t.pattern])==null?void 0:mr.kind)==="slot"||((_o=Ne[t.pattern])==null?void 0:_o.kind)==="bridge")&&t.rowPitch<he.minRowPitch,mt=(((gr=Ne[t.pattern])==null?void 0:gr.kind)==="slot"||((xo=Ne[t.pattern])==null?void 0:xo.kind)==="bridge")&&t.slotLength<he.minSlotLength,Ft=t.border<he.minBorder;function Je(P){var le;$(P),(le=Pe.current)==null||le.setTool(P)}function xn(P,le){const ge=Number(le);if(!Number.isFinite(ge)||ge<=0)return;if(!Z||P!=="width"&&P!=="height"){e({type:"set",key:P,value:ge});return}const Ue=N.current.w>0?N.current:{w:t.width,h:t.height};if(N.current=Ue,P==="width"){const Ct=ge,nn=Ct*Ue.h/Ue.w;e({type:"setMany",values:{width:Ct,height:nn}});return}const ze=ge,wt=ze*Ue.w/Ue.h;e({type:"setMany",values:{width:wt,height:ze}})}function Ht(){Q(P=>(P||(N.current={w:t.width,h:t.height}),!P))}function mo(){const P=cR(t);if(!Object.keys(P).length){te("No automatic corrections are required");return}e({type:"setMany",values:P}),te("Recommended manufacturing values applied")}return S.jsxs("main",{className:`steel-app${yy?" is-embed":""}${se!=="configure"?" step-review":""}`,children:[S.jsxs("header",{className:"steel-head",children:[S.jsxs("div",{className:"brand-lockup",children:[S.jsx("div",{className:"brand-mark-steel",children:"S"}),S.jsxs("div",{className:"brand-text",children:[S.jsx("strong",{children:"STEELWORKS"}),S.jsx("span",{children:"Configurator"})]})]}),S.jsx("nav",{className:"stepper","aria-label":"Configuration steps",children:mP.map(P=>S.jsxs("button",{type:"button",className:`step${se===P.id?" active":""}`,onClick:()=>D(P.id),children:[S.jsx("em",{children:P.n})," ",P.label]},P.id))}),S.jsxs("div",{className:"head-actions",children:[S.jsxs("button",{className:"ghost-action",type:"button","aria-label":"Save configuration",onClick:qe,children:[S.jsx(TP,{})," ",S.jsx("span",{className:"action-label",children:"Save"})]}),S.jsxs("button",{className:"ghost-action",type:"button","aria-label":"Share configuration",onClick:De,children:[S.jsx(AP,{})," ",S.jsx("span",{className:"action-label",children:"Share"})]}),S.jsxs("button",{className:"ghost-action quote-action",type:"button","aria-label":"Request quote",onClick:Te,children:[S.jsx("span",{className:"action-label",children:"Request "}),"Quote"]})]})]}),S.jsxs("div",{className:"steel-layout",children:[S.jsxs("section",{className:"steel-stage",children:[S.jsxs("div",{className:"stage-head",children:[S.jsxs("div",{children:[S.jsx("h1",{children:n.productName}),S.jsx("p",{className:"steel-tagline",children:se==="review"?"Confirm the 3D sheet, then copy the spec or request a quote.":uy}),S.jsxs("span",{className:"live-pill",children:[S.jsx("i",{})," ",se==="review"?"Review":"Live 3D"]})]}),S.jsxs("div",{className:"sku-chip",title:Ee,children:[S.jsx("code",{children:Ee}),S.jsx("button",{type:"button",className:"icon-copy",title:"Copy product code",onClick:()=>Fe(Ee,"Product code copied"),children:S.jsx(IP,{})})]})]}),S.jsxs("div",{className:"viewer-shell",onPointerDown:()=>v(!1),children:[S.jsx(WR,{config:t,scalePercent:100,onReady:_e,onError:()=>d(!0),onArState:Ie,onArScale:oe,onBusy:ve}),S.jsxs("div",{className:"viewer-tools",children:[S.jsx(Zo,{active:B==="orbit",title:"Rotate the sheet",onClick:()=>Je("orbit"),children:S.jsx(bP,{})}),S.jsx(Zo,{active:B==="zoom",title:"Zoom the view",onClick:()=>Je("zoom"),children:S.jsx(CP,{})}),S.jsx(Zo,{title:"Fit sheet in view",onClick:()=>{var P;return(P=Pe.current)==null?void 0:P.fitView()},children:S.jsx(RP,{})}),S.jsx(Zo,{active:B==="pan",title:"Pan the camera",onClick:()=>Je("pan"),children:S.jsx(PP,{})}),S.jsx(Zo,{title:"Reset camera",onClick:()=>{var P;Je("orbit"),(P=Pe.current)==null||P.resetView()},children:S.jsx(LP,{})})]}),S.jsxs("div",{className:"nav-cube",children:[S.jsx("button",{type:"button",title:"Top view",onClick:()=>{var P;return(P=Pe.current)==null?void 0:P.setPreset("top")},children:"Top"}),S.jsx("button",{type:"button",title:"Front view",onClick:()=>{var P;return(P=Pe.current)==null?void 0:P.setPreset("front")},children:"Front"}),S.jsx("button",{type:"button",title:"Right view",onClick:()=>{var P;return(P=Pe.current)==null?void 0:P.setPreset("right")},children:"Right"})]}),S.jsxs("div",{className:"pattern-thumb",title:Ne[t.pattern].label,children:[S.jsx(qR,{pattern:t.pattern,material:t.material,className:"pattern-thumb-svg",variant:"thumb"}),S.jsx("span",{children:"Pattern preview"})]}),S.jsxs("div",{className:"dim dim-w",ref:P=>{re.current.width=P},children:[S.jsx("i",{}),S.jsx("b",{}),S.jsx("i",{}),S.jsx("em",{children:z(t.width)})]}),S.jsxs("div",{className:"dim dim-h",ref:P=>{re.current.height=P},children:[S.jsx("i",{}),S.jsx("b",{}),S.jsx("i",{}),S.jsx("em",{children:z(t.height)})]}),S.jsxs("div",{className:"dim dim-t",ref:P=>{re.current.thickness=P},children:[S.jsx("i",{}),S.jsx("b",{}),S.jsx("i",{}),S.jsx("em",{children:z(t.thickness,E==="in"?3:1)})]}),S.jsx("div",{className:"viewer-ar",children:S.jsx(SP,{usdzHref:M,onLaunch:de,onHelp:p})}),T&&S.jsx("div",{className:"viewer-busy",children:"Updating perforation…"}),x&&S.jsx("p",{className:"orbit-caption",children:"Drag to rotate · pinch or scroll to zoom"}),m&&S.jsx("p",{className:"viewer-error",children:"3D view could not start. Open this page in Chrome or Safari."})]})]}),S.jsx("aside",{className:"config-panel",children:se==="review"?S.jsxs("div",{className:"review-panel",children:[S.jsx("p",{className:"eyebrow",children:"Review & quote"}),S.jsx("h2",{children:"Check this sheet"}),S.jsx("p",{className:"review-intro",children:"This is the manufacturing specification for the 3D sheet. Edit configuration to change values, then quote from here."}),S.jsxs("div",{className:"config-summary prominent",children:[S.jsxs("div",{className:"summary-sku",children:[S.jsx("span",{children:"Product code"}),S.jsx("strong",{children:Ee})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Sheet"}),S.jsxs("strong",{children:[z(t.width)," × ",z(t.height)," × ",z(t.thickness,E==="in"?3:1)]})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Quantity"}),S.jsxs("strong",{children:[t.quantity," pcs · ",Me.label]})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Material"}),S.jsx("strong",{children:ai[t.material].label})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Pattern"}),S.jsxs("strong",{children:[Ne[t.pattern].label,(yo=Ne[t.pattern])!=null&&yo.conical?` · ${t.coneAngle}°`:""]})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Opening"}),S.jsxs("strong",{children:[t.holeSize," mm · ",Se," mm centers",J?` · slot ${t.slotLength} mm`:"",(Za=Ne[t.pattern])!=null&&Za.conical?` · head Ø${Fn(t).head.toFixed(2)} · exit Ø${Fn(t).exit}`:""]})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Finish"}),S.jsx("strong",{children:F})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Form"}),S.jsxs("strong",{children:[$s[t.panelForm].label,t.panelForm!=="flat"?` · flange ${t.flangeDepth} mm · ${t.bendAngle}° · R${t.bendRadius}`:""]})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Corners"}),S.jsxs("strong",{children:[Va[t.corner].label,t.corner!=="square"?` ${Xs(t)} mm`:""]})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Quality"}),S.jsxs("strong",{children:[gP[t.deburr]," · ",vP[t.tolerance]," · ",_P[t.flatness]]})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Open area / mass"}),S.jsxs("strong",{children:[Oe.toFixed(1),"% · ",O.toFixed(1)," kg"]})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Price / lead"}),S.jsxs("strong",{children:[ae," · ",K]})]})]}),S.jsx("div",{className:`review-status${Le.length?" block":ie.length?" warn":" ok"}`,children:Le.length?"Manufacturing blocks must be fixed before quoting or export.":ie.length?"Configuration can be quoted, but review the warnings below.":"Within standard punching rules."}),ie.length>0&&S.jsx("ul",{className:"issue-list",children:ie.map(P=>S.jsx("li",{className:`issue-${P.level}`,children:P.text},P.text))}),ie.length>0&&S.jsx("button",{className:"btn btn-primary reset-btn",type:"button",onClick:mo,children:"Apply recommended fixes"}),S.jsx("div",{className:"review-actions",children:S.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>D("configure"),children:"← Edit configuration"})}),S.jsx("button",{className:"btn btn-primary summary-cta",type:"button",onClick:Te,children:"Request Quote →"})]}):S.jsxs(S.Fragment,{children:[S.jsxs(qo,{index:"01",title:"Sheet size",children:[S.jsx("div",{className:"section-meta",children:S.jsxs("label",{className:"units-select",children:[S.jsx("span",{children:"Units"}),S.jsxs("select",{value:t.units,onChange:P=>e({type:"set",key:"units",value:P.target.value}),children:[S.jsx("option",{value:"mm",children:"mm"}),S.jsx("option",{value:"in",children:"inch"})]})]})}),S.jsxs("div",{className:"dimension-grid size-grid",children:[S.jsx(Mn,{label:"Width",units:t.units,value:t.width,min:200,max:3e3,step:5,onChange:P=>xn("width",P)}),S.jsx("button",{className:`lock-btn${Z?" active":""}`,type:"button","aria-pressed":Z,title:Z?"Unlock width and height":"Lock width and height in proportion",onClick:Ht,children:Z?S.jsx(NP,{}):S.jsx(DP,{})}),S.jsx(Mn,{label:"Height",units:t.units,value:t.height,min:200,max:4e3,step:5,onChange:P=>xn("height",P)}),S.jsx(Mn,{label:"Thickness",units:t.units,value:t.thickness,min:.5,max:12,step:.5,digits:1,onChange:P=>e({type:"set",key:"thickness",value:P})}),S.jsx(Mn,{label:"Border",units:t.units,value:t.border,min:0,max:300,step:5,invalid:Ft,onChange:P=>e({type:"set",key:"border",value:P})})]}),Z&&S.jsx("p",{className:"fab-note",children:"Width and height are locked in proportion. Change one, the other follows."}),S.jsxs("div",{className:"dimension-grid tight-top",children:[S.jsx(Mn,{label:"Quantity",suffix:"pcs",value:t.quantity,min:1,max:9999,step:1,onChange:P=>e({type:"set",key:"quantity",value:P})}),S.jsx("div",{className:`stock-chip${Me.ok?"":" warn"}`,children:Me.label})]})]}),S.jsx(qo,{index:"02",title:"Material",children:S.jsx("div",{className:"material-grid",children:Object.entries(ai).map(([P,le])=>S.jsxs("button",{type:"button",className:`material-card ${t.material===P?"active":""}`,onClick:()=>e({type:"set",key:"material",value:P}),children:[S.jsx("span",{className:"material-swatch",style:{backgroundImage:le.swatch}}),S.jsx("strong",{children:le.label}),S.jsx("small",{children:le.short})]},P))})}),S.jsxs(qo,{index:"03",title:"Perforation pattern",children:[KC.map(P=>S.jsxs("div",{className:"pattern-group",children:[S.jsx("p",{className:"pattern-group-title",children:P.title}),S.jsx("div",{className:"pattern-grid",children:P.keys.map(le=>{const ge=Ne[le];return S.jsxs("button",{className:`pattern-card ${t.pattern===le?"active":""}`,type:"button",onClick:()=>e({type:"setMany",values:{pattern:le,...po[le]||{}}}),children:[t.pattern===le&&S.jsx("span",{className:"pattern-check","aria-hidden":"true",children:"✓"}),S.jsx("span",{className:`pattern-preview pattern-${le}`}),S.jsx("span",{children:ge.label})]},le)})})]},P.id)),S.jsx("div",{className:"pattern-grid tight-top",children:S.jsxs("label",{className:"pattern-card pattern-upload",children:[S.jsx("span",{className:"pattern-preview pattern-custom"}),S.jsx("strong",{children:"Upload DXF / SVG"}),S.jsx("span",{children:"Custom pattern file"}),S.jsx("input",{type:"file",accept:".dxf,.svg",hidden:!0,onChange:()=>te("Custom DXF / SVG patterns ship with the production CAM module")})]})}),S.jsx("p",{className:"pattern-blurb",children:Ne[t.pattern].blurb}),((Ka=Ne[t.pattern])==null?void 0:Ka.conical)&&S.jsxs(S.Fragment,{children:[S.jsx("p",{className:"fab-label",children:"Conical mold head"}),S.jsx("div",{className:"choice-grid",children:[60,30].map(P=>S.jsx("button",{type:"button",className:`choice-card${t.coneAngle===P?" active":""}`,onClick:()=>e({type:"set",key:"coneAngle",value:P}),children:b0[P].label},P))}),S.jsxs("p",{className:"fab-note",children:[b0[t.coneAngle].blurb," Head Ø ",Fn(t).head.toFixed(2)," mm · collar ",Fn(t).height.toFixed(2)," mm · exit Ø ",Fn(t).exit," mm."]})]}),S.jsxs("button",{className:"edit-params",type:"button",onClick:()=>q(P=>!P),children:[j?"Hide":"Edit"," pattern parameters"]}),j&&S.jsxs("div",{className:"dimension-grid tight-top",children:[S.jsx(Mn,{label:MP(t.pattern),units:t.units,value:t.holeSize,min:1,max:80,step:1,invalid:we,onChange:P=>e({type:"set",key:"holeSize",value:P})}),S.jsx(Mn,{label:wP(t.pattern),units:t.units,value:t.pitch,min:2,max:200,step:1,invalid:Ke,onChange:P=>e({type:"set",key:"pitch",value:P})}),(((Ja=Ne[t.pattern])==null?void 0:Ja.kind)==="slot"||((b=Ne[t.pattern])==null?void 0:b.kind)==="bridge")&&S.jsxs(S.Fragment,{children:[S.jsx(Mn,{label:"Row pitch",units:t.units,value:t.rowPitch,min:2,max:200,step:1,invalid:st,onChange:P=>e({type:"set",key:"rowPitch",value:P})}),S.jsx(Mn,{label:"Slot length",units:t.units,value:t.slotLength,min:1,max:160,step:1,invalid:mt,onChange:P=>e({type:"set",key:"slotLength",value:P})})]})]})]}),S.jsxs(qo,{index:"04",title:"Finish",children:[S.jsx("div",{className:"finish-tabs",children:pP.map(P=>S.jsx("button",{type:"button",className:t.finish===P?"active":"",onClick:()=>e({type:"set",key:"finish",value:P}),children:oo[P].label},P))}),t.finish==="powder"&&S.jsxs(S.Fragment,{children:[S.jsxs("p",{className:"ral-selected",children:[kt[t.color].label," – ",kt[t.color].name]}),S.jsx("div",{className:"color-swatches",children:YC.map(P=>S.jsxs("button",{className:`color-chip ${t.color===P?"active":""}`,type:"button",title:`${kt[P].label} – ${kt[P].name}`,onClick:()=>e({type:"set",key:"color",value:P}),children:[S.jsx("span",{style:{background:kt[P].hex}}),S.jsx("small",{children:kt[P].label.replace("RAL ","")})]},P))}),S.jsx("button",{className:"link-btn",type:"button",onClick:()=>h(!0),children:"View All RAL Colors"})]})]}),S.jsxs(qo,{index:"05",title:"Edge & fabrication",children:[S.jsx("button",{type:"button",className:`fab-row${ne==="form"?" open":""}`,onClick:()=>me(ne==="form"?"":"form"),children:"Panel form"}),ne==="form"&&S.jsxs(S.Fragment,{children:[S.jsx("div",{className:"choice-grid",children:Object.entries($s).map(([P,le])=>S.jsx("button",{type:"button",className:`choice-card${t.panelForm===P?" active":""}`,onClick:()=>e({type:"set",key:"panelForm",value:P}),children:le.label},P))}),t.panelForm!=="flat"&&S.jsxs("div",{className:"dimension-grid tight-top",children:[S.jsx(Mn,{label:"Flange depth",units:t.units,value:t.flangeDepth,min:8,max:150,step:1,onChange:P=>e({type:"set",key:"flangeDepth",value:P})}),S.jsx(Mn,{label:"Bend angle",suffix:"°",value:t.bendAngle,min:30,max:120,step:1,onChange:P=>e({type:"set",key:"bendAngle",value:P})}),S.jsx(Mn,{label:"Bend radius",units:t.units,value:t.bendRadius,min:.5,max:20,step:.5,digits:1,onChange:P=>e({type:"set",key:"bendRadius",value:P})})]})]}),S.jsx("button",{type:"button",className:`fab-row${ne==="edge"?" open":""}`,onClick:()=>me(ne==="edge"?"":"edge"),children:"Corners"}),ne==="edge"&&S.jsxs(S.Fragment,{children:[S.jsx("p",{className:"fab-label",children:"Corner treatment"}),S.jsx("div",{className:"choice-grid three",children:Object.entries(Va).map(([P,le])=>S.jsx("button",{type:"button",className:`choice-card${t.corner===P?" active":""}`,onClick:()=>e({type:"set",key:"corner",value:P}),children:le.label},P))}),t.corner!=="square"&&S.jsx("div",{className:"dimension-grid tight-top",children:S.jsx(Mn,{label:t.corner==="radius"?"Corner radius":"Chamfer size",units:t.units,value:t.cornerRadius,min:1,max:150,step:1,onChange:P=>e({type:"set",key:"cornerRadius",value:P})})}),t.corner!=="square"&&S.jsxs("p",{className:"fab-note",children:["Outer blank corners are ",t.corner==="radius"?`rounded at R${Xs(t)} mm`:`chamfered ${Xs(t)} mm`," on the 3D sheet and fabrication drawing."]})]}),S.jsx("button",{type:"button",className:`fab-row${ne==="quality"?" open":""}`,onClick:()=>me(ne==="quality"?"":"quality"),children:"Deburr, tolerance & flatness"}),ne==="quality"&&S.jsxs(S.Fragment,{children:[S.jsx("p",{className:"fab-label",children:"Deburring"}),S.jsx("div",{className:"choice-grid three",children:[["none","None"],["standard","Standard"],["fine","Fine"]].map(([P,le])=>S.jsx("button",{type:"button",className:`choice-card${t.deburr===P?" active":""}`,onClick:()=>e({type:"set",key:"deburr",value:P}),children:le},P))}),S.jsx("p",{className:"fab-label",children:"Tolerance"}),S.jsx("div",{className:"choice-grid three",children:[["iso-c","ISO coarse"],["iso-m","ISO medium"],["iso-f","ISO fine"]].map(([P,le])=>S.jsx("button",{type:"button",className:`choice-card${t.tolerance===P?" active":""}`,onClick:()=>e({type:"set",key:"tolerance",value:P}),children:le},P))}),S.jsx("p",{className:"fab-label",children:"Flatness"}),S.jsx("div",{className:"choice-grid three",children:[["standard","Standard"],["precision","Precision"]].map(([P,le])=>S.jsx("button",{type:"button",className:`choice-card${t.flatness===P?" active":""}`,onClick:()=>e({type:"set",key:"flatness",value:P}),children:le},P))})]}),S.jsx("button",{type:"button",className:`fab-row${ne==="rules"?" open":""}${ie.length?" has-issues":""}`,onClick:()=>me(ne==="rules"?"":"rules"),children:"Punching rules & validation"}),ne==="rules"&&S.jsxs(S.Fragment,{children:[S.jsxs("p",{className:"fab-note",children:["Opening ≥ ",he.minHoleSize," mm. Ligament ≥ ",he.ligament," mm. Edge ≥ ",he.minBorder," mm.",((k=Ne[t.pattern])==null?void 0:k.kind)==="slot"||((X=Ne[t.pattern])==null?void 0:X.kind)==="bridge"?` Minimum centers: ${he.minPitchX} × ${he.minRowPitch} mm.`:"",(V=Ne[t.pattern])!=null&&V.conical?` Perfocon pitch is governed by the ${t.coneAngle}° exit Ø ${Fn(t).exit} mm.`:""," Entered values are preserved so conflicts are visible."]}),ie.length===0&&S.jsx("p",{className:"fab-ok",children:"Configuration is within standard punching rules."}),ie.length>0&&S.jsx("ul",{className:"issue-list",children:ie.map(P=>S.jsx("li",{className:`issue-${P.level}`,children:P.text},P.text))}),ie.length>0&&S.jsx("button",{className:"btn btn-primary reset-btn",type:"button",onClick:mo,children:"Apply recommended fixes"}),S.jsx("button",{className:"btn btn-outline reset-btn",type:"button",onClick:()=>e({type:"reset"}),children:"Reset configuration"})]})]}),S.jsx("button",{className:"btn btn-primary reset-btn",type:"button",onClick:()=>D("review"),children:"Review & quote →"})]})})]}),S.jsxs("div",{className:"metric-strip",children:[S.jsx(xs,{label:"Open area",value:`${Oe.toFixed(1)}%`}),S.jsx(xs,{label:"Est. mass",value:`${O.toFixed(1)} kg`}),S.jsx(xs,{label:EP(t.pattern),value:Ve.toLocaleString()}),S.jsx(xs,{label:"Thickness",value:z(t.thickness,E==="in"?3:1)}),S.jsx(xs,{label:"Indicative price",value:ae,accent:!0}),S.jsx(xs,{label:"Lead time",value:K})]}),S.jsxs("footer",{className:"steel-foot",children:[S.jsx("div",{className:"foot-exports",children:S.jsx("button",{className:"btn btn-primary pdf-card",type:"button",onClick:Ge,children:"Technical PDF"})}),S.jsxs("div",{className:"foot-summary",children:[S.jsx("span",{children:"Configuration summary"}),S.jsx("strong",{children:Ee}),S.jsxs("small",{children:[ai[t.material].short," · ",Ne[t.pattern].short," ",t.holeSize,"/",t.pitch,((G=Ne[t.pattern])==null?void 0:G.kind)==="slot"||((xe=Ne[t.pattern])==null?void 0:xe.kind)==="bridge"?`×${t.rowPitch}`:"",(be=Ne[t.pattern])!=null&&be.conical?` · ${t.coneAngle}°`:""," · ",$s[t.panelForm].label," · qty ",t.quantity]}),S.jsxs("small",{children:[z(t.width)," × ",z(t.height)," × ",z(t.thickness,E==="in"?3:1)]})]})]}),S.jsxs("div",{ref:W,className:`ar-overlay${R?" is-active":""}`,children:[Be&&S.jsx("p",{className:"ar-banner",children:Be}),S.jsx("button",{className:"btn btn-dark",type:"button",onClick:()=>{var P;return(P=Pe.current)==null?void 0:P.exitAR()},children:"Exit AR"})]}),o&&S.jsxs(Jl,{title:"Request quotation",onClose:()=>a(!1),children:[S.jsxs("div",{className:"quote-spec",children:[S.jsx("strong",{children:Ee}),S.jsxs("span",{children:[z(t.width)," × ",z(t.height)," × ",z(t.thickness,E==="in"?3:1)," · qty ",t.quantity," · ",Oe.toFixed(1),"% open area"]})]}),ie.length>0&&S.jsx("ul",{className:"issue-list",children:ie.map(P=>S.jsx("li",{className:`issue-${P.level}`,children:P.text},P.text))}),S.jsxs("form",{onSubmit:Ye,children:[S.jsxs("div",{className:"form-grid",children:[S.jsx(Yo,{name:"name",label:"Name",required:!0}),S.jsx(Yo,{name:"company",label:"Company",required:!0}),S.jsx(Yo,{name:"email",label:"Email",type:"email",required:!0}),S.jsx(Yo,{name:"phone",label:"Phone",type:"tel"}),S.jsx(Yo,{name:"quantity",label:"Quantity",type:"number",defaultValue:String(t.quantity)}),S.jsxs("div",{className:"full",children:[S.jsx("label",{className:"label",children:"Project / fabrication notes"}),S.jsx("textarea",{className:"textarea",name:"notes",rows:4,placeholder:"Quantity, tolerances, edge treatment, delivery location..."})]})]}),S.jsxs("div",{className:"modal-actions",children:[S.jsx("button",{type:"button",className:"btn",onClick:()=>a(!1),children:"Cancel"}),S.jsx("button",{className:"btn btn-primary",type:"submit",disabled:Le.length>0,children:"Send RFQ"})]})]})]}),l&&S.jsxs(Jl,{title:"Saved configurations",onClose:()=>c(!1),children:[pt.length===0&&S.jsx("p",{className:"muted",children:"No saved configurations yet."}),pt.map(P=>S.jsxs("div",{className:"saved-row",children:[S.jsxs("div",{children:[S.jsx("strong",{children:P.name}),S.jsx("small",{children:P.id})]}),S.jsx("button",{className:"btn",type:"button",onClick:()=>{e({type:"load",config:P.config}),c(!1),te("Configuration loaded")},children:"Load"})]},P.id))]}),u&&S.jsx(Jl,{title:"RAL colors",onClose:()=>h(!1),children:S.jsx("div",{className:"ral-grid",children:ly.map(P=>S.jsxs("button",{type:"button",className:`ral-option${t.color===P?" active":""}`,onClick:()=>{e({type:"set",key:"color",value:P}),h(!1)},children:[S.jsx("span",{style:{background:kt[P].hex}}),S.jsx("strong",{children:kt[P].label}),S.jsx("small",{children:kt[P].name})]},P))})}),f&&S.jsxs(Jl,{title:"View in AR",onClose:()=>p(""),children:[S.jsx("p",{className:"muted",children:f}),S.jsx("div",{className:"modal-actions",children:S.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>p(""),children:"OK"})})]}),r&&S.jsx("div",{className:"toast",children:r})]})}function SP({usdzHref:t,onLaunch:e,onHelp:n}){return id.ios?S.jsx("a",{className:"btn btn-outline",rel:"ar",href:t||"#ar",onClick:i=>{t||(i.preventDefault(),n("Preparing the AR model. Wait a moment, then tap View in AR again."))},children:"View in AR"}):S.jsx("button",{className:"btn btn-outline",type:"button",onClick:async()=>{await my()?e():n(qc)},children:"View in AR"})}function qo({index:t,title:e,children:n}){return S.jsxs("section",{className:"panel-section",children:[S.jsxs("div",{className:"section-title",children:[S.jsx("span",{children:t}),S.jsx("h2",{children:e})]}),n]})}function MP(t){var n;const e=(n=Ne[t])==null?void 0:n.kind;return e==="square"?"Opening size":e==="hex"?"Hex size · point-to-point":e==="trieur"?"Cup diameter":e==="embossed"?"Diamond size":e==="perfocon"?"Entrance diameter":e==="bridge"?"Slot width":"Hole size"}function wP(t){var n;const e=(n=Ne[t])==null?void 0:n.kind;return e==="decorative"?"Motif pitch":e==="slot"||e==="bridge"?"Column pitch":"Pitch / centers"}function EP(t){var n;return((n=Ne[t])==null?void 0:n.kind)==="trieur"?"Cup count":"Hole count"}function xs({label:t,value:e,accent:n}){return S.jsxs("div",{className:`metric-item${n?" accent":""}`,children:[S.jsx("span",{children:t}),S.jsx("strong",{children:e})]})}function Mn({label:t,suffix:e,value:n,min:i,max:r,step:s,onChange:o,units:a,digits:l,invalid:c}){const u=a==="in",h=e||(u?"in":a?"mm":""),f=l??(u?3:s<1?1:0),p=a?fc(n,a,f):n,g=a?fc(i,a,f):i,_=a?fc(r,a,f):r,m=a&&u?Number((s/vp).toFixed(4)):s,[d,x]=Ce.useState(null),v=d===null?p:d;return S.jsxs("label",{className:`number-control${c?" invalid":""}`,children:[S.jsx("span",{children:t}),S.jsxs("div",{children:[S.jsx("input",{type:"number",inputMode:"decimal",enterKeyHint:"done",value:v,min:g,max:_,step:m,onWheel:y=>y.currentTarget.blur(),onFocus:()=>x(p),onBlur:()=>{if(d!==null&&d!==""){const y=Number(d);Number.isFinite(y)&&o(a?C0(y,a):y)}x(null)},onChange:y=>{const C=y.target.value;if(x(C),C==="")return;const T=Number(C);Number.isFinite(T)&&o(a?C0(T,a):T)}}),h&&S.jsx("small",{children:h})]})]})}function Jl({title:t,onClose:e,children:n}){return S.jsx("div",{className:"modal-backdrop",children:S.jsxs("div",{className:"modal",children:[S.jsxs("div",{className:"modal-head",children:[S.jsx("h2",{children:t}),S.jsx("button",{className:"icon-btn",type:"button",onClick:e,children:"×"})]}),S.jsx("div",{className:"modal-body",children:n})]})})}function Yo({name:t,label:e,type:n="text",required:i,defaultValue:r}){const s=n==="email"?"email":n==="tel"?"tel":n==="number"?"numeric":void 0,o=n==="email"?"email":n==="tel"?"tel":t==="name"?"name":t==="company"?"organization":void 0;return S.jsxs("div",{children:[S.jsx("label",{className:"label",children:e}),S.jsx("input",{className:"text-input",name:t,type:n,inputMode:s,autoComplete:o,required:i,defaultValue:r,min:n==="number"?1:void 0,enterKeyHint:n==="email"||n==="tel"?"next":void 0})]})}function Zo({active:t,title:e,onClick:n,children:i}){return S.jsx("button",{type:"button",className:t?"active":"",title:e,"aria-label":e,onClick:n,children:i})}function ui({d:t,children:e}){return S.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.8","aria-hidden":"true",children:e||S.jsx("path",{d:t})})}function TP(){return S.jsx(ui,{d:"M5 5h11l3 3v11H5V5zm3 0v5h8V5M8 19v-6h8v6"})}function AP(){return S.jsx(ui,{d:"M16 5h4v4M20 5l-9 9M9 5H5v14h14v-4"})}function bP(){return S.jsx(ui,{d:"M12 5a7 7 0 1 0 6.3 4M12 5l2.5 2.5M12 5 9.5 7.5"})}function CP(){return S.jsx(ui,{d:"M10.5 17a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13zM15 15l5 5"})}function RP(){return S.jsx(ui,{d:"M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"})}function PP(){return S.jsx(ui,{d:"M12 4v16M4 12h16M8 8l-4 4 4 4M16 8l4 4-4 4"})}function LP(){return S.jsx(ui,{d:"M4 12a8 8 0 1 0 2.2-5.6M4 4v5h5"})}function NP(){return S.jsx(ui,{d:"M8 11V8a4 4 0 1 1 8 0v3M6 11h12v9H6v-9z"})}function DP(){return S.jsx(ui,{d:"M8 11V8a4 4 0 0 1 7.5-2M6 11h12v9H6v-9z"})}function IP(){return S.jsx(ui,{d:"M8 8h11v13H8V8zm-3 3V3h11"})}class UP extends tv.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}render(){return this.state.error?S.jsx("main",{className:"steel-app",children:S.jsxs("p",{className:"viewer-error",children:["The configurator hit an error: ",String(this.state.error.message||this.state.error)]})}):this.props.children}}rx(document.getElementById("root")).render(S.jsx(tv.StrictMode,{children:S.jsx(UP,{children:S.jsx(yP,{})})}));
