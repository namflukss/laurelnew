(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function vE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _x={exports:{}},Mu={},vx={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ya=Symbol.for("react.element"),xE=Symbol.for("react.portal"),yE=Symbol.for("react.fragment"),SE=Symbol.for("react.strict_mode"),ME=Symbol.for("react.profiler"),EE=Symbol.for("react.provider"),TE=Symbol.for("react.context"),wE=Symbol.for("react.forward_ref"),AE=Symbol.for("react.suspense"),CE=Symbol.for("react.memo"),bE=Symbol.for("react.lazy"),Ug=Symbol.iterator;function RE(t){return t===null||typeof t!="object"?null:(t=Ug&&t[Ug]||t["@@iterator"],typeof t=="function"?t:null)}var xx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yx=Object.assign,Sx={};function Po(t,e,n){this.props=t,this.context=e,this.refs=Sx,this.updater=n||xx}Po.prototype.isReactComponent={};Po.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Po.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mx(){}Mx.prototype=Po.prototype;function kp(t,e,n){this.props=t,this.context=e,this.refs=Sx,this.updater=n||xx}var zp=kp.prototype=new Mx;zp.constructor=kp;yx(zp,Po.prototype);zp.isPureReactComponent=!0;var Bg=Array.isArray,Ex=Object.prototype.hasOwnProperty,Vp={current:null},Tx={key:!0,ref:!0,__self:!0,__source:!0};function wx(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ex.call(e,i)&&!Tx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ya,type:t,key:s,ref:o,props:r,_owner:Vp.current}}function PE(t,e){return{$$typeof:Ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ya}function DE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Og=/\/+/g;function Ku(t,e){return typeof t=="object"&&t!==null&&t.key!=null?DE(""+t.key):e.toString(36)}function rc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ya:case xE:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ku(o,0):i,Bg(r)?(n="",t!=null&&(n=t.replace(Og,"$&/")+"/"),rc(r,e,n,"",function(c){return c})):r!=null&&(Hp(r)&&(r=PE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Og,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Bg(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ku(s,a);o+=rc(s,e,n,l,r)}else if(l=RE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ku(s,a++),o+=rc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ll(t,e,n){if(t==null)return t;var i=[],r=0;return rc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function LE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vn={current:null},sc={transition:null},IE={ReactCurrentDispatcher:vn,ReactCurrentBatchConfig:sc,ReactCurrentOwner:Vp};function Ax(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:ll,forEach:function(t,e,n){ll(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ll(t,function(){e++}),e},toArray:function(t){return ll(t,function(e){return e})||[]},only:function(t){if(!Hp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Po;Xe.Fragment=yE;Xe.Profiler=ME;Xe.PureComponent=kp;Xe.StrictMode=SE;Xe.Suspense=AE;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IE;Xe.act=Ax;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=yx({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ex.call(e,l)&&!Tx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ya,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:TE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:EE,_context:t},t.Consumer=t};Xe.createElement=wx;Xe.createFactory=function(t){var e=wx.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:wE,render:t}};Xe.isValidElement=Hp;Xe.lazy=function(t){return{$$typeof:bE,_payload:{_status:-1,_result:t},_init:LE}};Xe.memo=function(t,e){return{$$typeof:CE,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=sc.transition;sc.transition={};try{t()}finally{sc.transition=e}};Xe.unstable_act=Ax;Xe.useCallback=function(t,e){return vn.current.useCallback(t,e)};Xe.useContext=function(t){return vn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return vn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return vn.current.useEffect(t,e)};Xe.useId=function(){return vn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return vn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return vn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return vn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return vn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return vn.current.useReducer(t,e,n)};Xe.useRef=function(t){return vn.current.useRef(t)};Xe.useState=function(t){return vn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return vn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return vn.current.useTransition()};Xe.version="18.3.1";vx.exports=Xe;var ie=vx.exports;const NE=vE(ie);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FE=ie,UE=Symbol.for("react.element"),BE=Symbol.for("react.fragment"),OE=Object.prototype.hasOwnProperty,kE=FE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zE={key:!0,ref:!0,__self:!0,__source:!0};function Cx(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)OE.call(e,i)&&!zE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:UE,type:t,key:s,ref:o,props:r,_owner:kE.current}}Mu.Fragment=BE;Mu.jsx=Cx;Mu.jsxs=Cx;_x.exports=Mu;var w=_x.exports,Td={},bx={exports:{}},Un={},Rx={exports:{}},Px={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,k){var $=L.length;L.push(k);e:for(;0<$;){var U=$-1>>>1,Z=L[U];if(0<r(Z,k))L[U]=k,L[$]=Z,$=U;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var k=L[0],$=L.pop();if($!==k){L[0]=$;e:for(var U=0,Z=L.length,fe=Z>>>1;U<fe;){var Ie=2*(U+1)-1,Re=L[Ie],J=Ie+1,me=L[J];if(0>r(Re,$))J<Z&&0>r(me,Re)?(L[U]=me,L[J]=$,U=J):(L[U]=Re,L[Ie]=$,U=Ie);else if(J<Z&&0>r(me,$))L[U]=me,L[J]=$,U=J;else break e}}return k}function r(L,k){var $=L.sortIndex-k.sortIndex;return $!==0?$:L.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,_=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=L)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function S(L){if(y=!1,v(L),!_)if(n(l)!==null)_=!0,G(A);else{var k=n(c);k!==null&&H(S,k.startTime-L)}}function A(L,k){_=!1,y&&(y=!1,h(x),x=-1),p=!0;var $=f;try{for(v(k),d=n(l);d!==null&&(!(d.expirationTime>k)||L&&!D());){var U=d.callback;if(typeof U=="function"){d.callback=null,f=d.priorityLevel;var Z=U(d.expirationTime<=k);k=t.unstable_now(),typeof Z=="function"?d.callback=Z:d===n(l)&&i(l),v(k)}else i(l);d=n(l)}if(d!==null)var fe=!0;else{var Ie=n(c);Ie!==null&&H(S,Ie.startTime-k),fe=!1}return fe}finally{d=null,f=$,p=!1}}var T=!1,R=null,x=-1,b=5,P=-1;function D(){return!(t.unstable_now()-P<b)}function O(){if(R!==null){var L=t.unstable_now();P=L;var k=!0;try{k=R(!0,L)}finally{k?q():(T=!1,R=null)}}else T=!1}var q;if(typeof m=="function")q=function(){m(O)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,N=Y.port2;Y.port1.onmessage=O,q=function(){N.postMessage(null)}}else q=function(){g(O,0)};function G(L){R=L,T||(T=!0,q())}function H(L,k){x=g(function(){L(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,G(A))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var k=3;break;default:k=f}var $=f;f=k;try{return L()}finally{f=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,k){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var $=f;f=L;try{return k()}finally{f=$}},t.unstable_scheduleCallback=function(L,k,$){var U=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?U+$:U):$=U,L){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=$+Z,L={id:u++,callback:k,priorityLevel:L,startTime:$,expirationTime:Z,sortIndex:-1},$>U?(L.sortIndex=$,e(c,L),n(l)===null&&L===n(c)&&(y?(h(x),x=-1):y=!0,H(S,$-U))):(L.sortIndex=Z,e(l,L),_||p||(_=!0,G(A))),L},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(L){var k=f;return function(){var $=f;f=k;try{return L.apply(this,arguments)}finally{f=$}}}})(Px);Rx.exports=Px;var VE=Rx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HE=ie,Fn=VE;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dx=new Set,wa={};function ys(t,e){_o(t,e),_o(t+"Capture",e)}function _o(t,e){for(wa[t]=e,t=0;t<e.length;t++)Dx.add(e[t])}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wd=Object.prototype.hasOwnProperty,GE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kg={},zg={};function WE(t){return wd.call(zg,t)?!0:wd.call(kg,t)?!1:GE.test(t)?zg[t]=!0:(kg[t]=!0,!1)}function jE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function XE(t,e,n,i){if(e===null||typeof e>"u"||jE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var en={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){en[t]=new xn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];en[e]=new xn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){en[t]=new xn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){en[t]=new xn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){en[t]=new xn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){en[t]=new xn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){en[t]=new xn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){en[t]=new xn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){en[t]=new xn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gp=/[\-:]([a-z])/g;function Wp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gp,Wp);en[e]=new xn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gp,Wp);en[e]=new xn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gp,Wp);en[e]=new xn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){en[t]=new xn(t,1,!1,t.toLowerCase(),null,!1,!1)});en.xlinkHref=new xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){en[t]=new xn(t,1,!1,t.toLowerCase(),null,!0,!0)});function jp(t,e,n,i){var r=en.hasOwnProperty(e)?en[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(XE(e,n,r,i)&&(n=null),i||r===null?WE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var nr=HE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cl=Symbol.for("react.element"),Xs=Symbol.for("react.portal"),qs=Symbol.for("react.fragment"),Xp=Symbol.for("react.strict_mode"),Ad=Symbol.for("react.profiler"),Lx=Symbol.for("react.provider"),Ix=Symbol.for("react.context"),qp=Symbol.for("react.forward_ref"),Cd=Symbol.for("react.suspense"),bd=Symbol.for("react.suspense_list"),$p=Symbol.for("react.memo"),mr=Symbol.for("react.lazy"),Nx=Symbol.for("react.offscreen"),Vg=Symbol.iterator;function Oo(t){return t===null||typeof t!="object"?null:(t=Vg&&t[Vg]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Object.assign,Zu;function ra(t){if(Zu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zu=e&&e[1]||""}return`
`+Zu+t}var Ju=!1;function Qu(t,e){if(!t||Ju)return"";Ju=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ju=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ra(t):""}function qE(t){switch(t.tag){case 5:return ra(t.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 2:case 15:return t=Qu(t.type,!1),t;case 11:return t=Qu(t.type.render,!1),t;case 1:return t=Qu(t.type,!0),t;default:return""}}function Rd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qs:return"Fragment";case Xs:return"Portal";case Ad:return"Profiler";case Xp:return"StrictMode";case Cd:return"Suspense";case bd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ix:return(t.displayName||"Context")+".Consumer";case Lx:return(t._context.displayName||"Context")+".Provider";case qp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $p:return e=t.displayName||null,e!==null?e:Rd(t.type)||"Memo";case mr:e=t._payload,t=t._init;try{return Rd(t(e))}catch{}}return null}function $E(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rd(e);case 8:return e===Xp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function YE(t){var e=Fx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ul(t){t._valueTracker||(t._valueTracker=YE(t))}function Ux(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Fx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Dc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pd(t,e){var n=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bx(t,e){e=e.checked,e!=null&&jp(t,"checked",e,!1)}function Dd(t,e){Bx(t,e);var n=Ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ld(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ld(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ld(t,e,n){(e!=="number"||Dc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var sa=Array.isArray;function lo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Id(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(sa(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function Ox(t,e){var n=Ir(e.value),i=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function jg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function kx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?kx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fl,zx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fl=fl||document.createElement("div"),fl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Aa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},KE=["Webkit","ms","Moz","O"];Object.keys(da).forEach(function(t){KE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),da[e]=da[t]})});function Vx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||da.hasOwnProperty(t)&&da[t]?(""+e).trim():e+"px"}function Hx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Vx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ZE=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fd(t,e){if(e){if(ZE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Ud(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bd=null;function Yp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Od=null,co=null,uo=null;function Xg(t){if(t=Ja(t)){if(typeof Od!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Cu(e),Od(t.stateNode,t.type,e))}}function Gx(t){co?uo?uo.push(t):uo=[t]:co=t}function Wx(){if(co){var t=co,e=uo;if(uo=co=null,Xg(t),e)for(t=0;t<e.length;t++)Xg(e[t])}}function jx(t,e){return t(e)}function Xx(){}var ef=!1;function qx(t,e,n){if(ef)return t(e,n);ef=!0;try{return jx(t,e,n)}finally{ef=!1,(co!==null||uo!==null)&&(Xx(),Wx())}}function Ca(t,e){var n=t.stateNode;if(n===null)return null;var i=Cu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var kd=!1;if(Ki)try{var ko={};Object.defineProperty(ko,"passive",{get:function(){kd=!0}}),window.addEventListener("test",ko,ko),window.removeEventListener("test",ko,ko)}catch{kd=!1}function JE(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ha=!1,Lc=null,Ic=!1,zd=null,QE={onError:function(t){ha=!0,Lc=t}};function eT(t,e,n,i,r,s,o,a,l){ha=!1,Lc=null,JE.apply(QE,arguments)}function tT(t,e,n,i,r,s,o,a,l){if(eT.apply(this,arguments),ha){if(ha){var c=Lc;ha=!1,Lc=null}else throw Error(oe(198));Ic||(Ic=!0,zd=c)}}function Ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $x(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qg(t){if(Ss(t)!==t)throw Error(oe(188))}function nT(t){var e=t.alternate;if(!e){if(e=Ss(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return qg(r),t;if(s===i)return qg(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function Yx(t){return t=nT(t),t!==null?Kx(t):null}function Kx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Kx(t);if(e!==null)return e;t=t.sibling}return null}var Zx=Fn.unstable_scheduleCallback,$g=Fn.unstable_cancelCallback,iT=Fn.unstable_shouldYield,rT=Fn.unstable_requestPaint,It=Fn.unstable_now,sT=Fn.unstable_getCurrentPriorityLevel,Kp=Fn.unstable_ImmediatePriority,Jx=Fn.unstable_UserBlockingPriority,Nc=Fn.unstable_NormalPriority,oT=Fn.unstable_LowPriority,Qx=Fn.unstable_IdlePriority,Eu=null,Ci=null;function aT(t){if(Ci&&typeof Ci.onCommitFiberRoot=="function")try{Ci.onCommitFiberRoot(Eu,t,void 0,(t.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:uT,lT=Math.log,cT=Math.LN2;function uT(t){return t>>>=0,t===0?32:31-(lT(t)/cT|0)|0}var dl=64,hl=4194304;function oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=oa(a):(s&=o,s!==0&&(i=oa(s)))}else o=n&~r,o!==0?i=oa(o):s!==0&&(i=oa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-li(e),r=1<<n,i|=t[n],e&=~r;return i}function fT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dT(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-li(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=fT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Vd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ey(){var t=dl;return dl<<=1,!(dl&4194240)&&(dl=64),t}function tf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-li(e),t[e]=n}function hT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-li(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Zp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-li(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function ty(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ny,Jp,iy,ry,sy,Hd=!1,pl=[],Tr=null,wr=null,Ar=null,ba=new Map,Ra=new Map,_r=[],pT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yg(t,e){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(e.pointerId)}}function zo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ja(e),e!==null&&Jp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function mT(t,e,n,i,r){switch(e){case"focusin":return Tr=zo(Tr,t,e,n,i,r),!0;case"dragenter":return wr=zo(wr,t,e,n,i,r),!0;case"mouseover":return Ar=zo(Ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ba.set(s,zo(ba.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ra.set(s,zo(Ra.get(s)||null,t,e,n,i,r)),!0}return!1}function oy(t){var e=ts(t.target);if(e!==null){var n=Ss(e);if(n!==null){if(e=n.tag,e===13){if(e=$x(n),e!==null){t.blockedOn=e,sy(t.priority,function(){iy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Bd=i,n.target.dispatchEvent(i),Bd=null}else return e=Ja(n),e!==null&&Jp(e),t.blockedOn=n,!1;e.shift()}return!0}function Kg(t,e,n){oc(t)&&n.delete(e)}function gT(){Hd=!1,Tr!==null&&oc(Tr)&&(Tr=null),wr!==null&&oc(wr)&&(wr=null),Ar!==null&&oc(Ar)&&(Ar=null),ba.forEach(Kg),Ra.forEach(Kg)}function Vo(t,e){t.blockedOn===e&&(t.blockedOn=null,Hd||(Hd=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,gT)))}function Pa(t){function e(r){return Vo(r,t)}if(0<pl.length){Vo(pl[0],t);for(var n=1;n<pl.length;n++){var i=pl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Tr!==null&&Vo(Tr,t),wr!==null&&Vo(wr,t),Ar!==null&&Vo(Ar,t),ba.forEach(e),Ra.forEach(e),n=0;n<_r.length;n++)i=_r[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<_r.length&&(n=_r[0],n.blockedOn===null);)oy(n),n.blockedOn===null&&_r.shift()}var fo=nr.ReactCurrentBatchConfig,Uc=!0;function _T(t,e,n,i){var r=it,s=fo.transition;fo.transition=null;try{it=1,Qp(t,e,n,i)}finally{it=r,fo.transition=s}}function vT(t,e,n,i){var r=it,s=fo.transition;fo.transition=null;try{it=4,Qp(t,e,n,i)}finally{it=r,fo.transition=s}}function Qp(t,e,n,i){if(Uc){var r=Gd(t,e,n,i);if(r===null)df(t,e,i,Bc,n),Yg(t,i);else if(mT(r,t,e,n,i))i.stopPropagation();else if(Yg(t,i),e&4&&-1<pT.indexOf(t)){for(;r!==null;){var s=Ja(r);if(s!==null&&ny(s),s=Gd(t,e,n,i),s===null&&df(t,e,i,Bc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else df(t,e,i,null,n)}}var Bc=null;function Gd(t,e,n,i){if(Bc=null,t=Yp(i),t=ts(t),t!==null)if(e=Ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$x(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bc=t,null}function ay(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sT()){case Kp:return 1;case Jx:return 4;case Nc:case oT:return 16;case Qx:return 536870912;default:return 16}default:return 16}}var yr=null,em=null,ac=null;function ly(){if(ac)return ac;var t,e=em,n=e.length,i,r="value"in yr?yr.value:yr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ac=r.slice(t,1<i?1-i:void 0)}function lc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ml(){return!0}function Zg(){return!1}function Bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ml:Zg,this.isPropagationStopped=Zg,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),e}var Do={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tm=Bn(Do),Za=Tt({},Do,{view:0,detail:0}),xT=Bn(Za),nf,rf,Ho,Tu=Tt({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ho&&(Ho&&t.type==="mousemove"?(nf=t.screenX-Ho.screenX,rf=t.screenY-Ho.screenY):rf=nf=0,Ho=t),nf)},movementY:function(t){return"movementY"in t?t.movementY:rf}}),Jg=Bn(Tu),yT=Tt({},Tu,{dataTransfer:0}),ST=Bn(yT),MT=Tt({},Za,{relatedTarget:0}),sf=Bn(MT),ET=Tt({},Do,{animationName:0,elapsedTime:0,pseudoElement:0}),TT=Bn(ET),wT=Tt({},Do,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),AT=Bn(wT),CT=Tt({},Do,{data:0}),Qg=Bn(CT),bT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=PT[t])?!!e[t]:!1}function nm(){return DT}var LT=Tt({},Za,{key:function(t){if(t.key){var e=bT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=lc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?RT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nm,charCode:function(t){return t.type==="keypress"?lc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),IT=Bn(LT),NT=Tt({},Tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),e0=Bn(NT),FT=Tt({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nm}),UT=Bn(FT),BT=Tt({},Do,{propertyName:0,elapsedTime:0,pseudoElement:0}),OT=Bn(BT),kT=Tt({},Tu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zT=Bn(kT),VT=[9,13,27,32],im=Ki&&"CompositionEvent"in window,pa=null;Ki&&"documentMode"in document&&(pa=document.documentMode);var HT=Ki&&"TextEvent"in window&&!pa,cy=Ki&&(!im||pa&&8<pa&&11>=pa),t0=" ",n0=!1;function uy(t,e){switch(t){case"keyup":return VT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $s=!1;function GT(t,e){switch(t){case"compositionend":return fy(e);case"keypress":return e.which!==32?null:(n0=!0,t0);case"textInput":return t=e.data,t===t0&&n0?null:t;default:return null}}function WT(t,e){if($s)return t==="compositionend"||!im&&uy(t,e)?(t=ly(),ac=em=yr=null,$s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cy&&e.locale!=="ko"?null:e.data;default:return null}}var jT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function i0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jT[t.type]:e==="textarea"}function dy(t,e,n,i){Gx(i),e=Oc(e,"onChange"),0<e.length&&(n=new tm("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ma=null,Da=null;function XT(t){Ey(t,0)}function wu(t){var e=Zs(t);if(Ux(e))return t}function qT(t,e){if(t==="change")return e}var hy=!1;if(Ki){var of;if(Ki){var af="oninput"in document;if(!af){var r0=document.createElement("div");r0.setAttribute("oninput","return;"),af=typeof r0.oninput=="function"}of=af}else of=!1;hy=of&&(!document.documentMode||9<document.documentMode)}function s0(){ma&&(ma.detachEvent("onpropertychange",py),Da=ma=null)}function py(t){if(t.propertyName==="value"&&wu(Da)){var e=[];dy(e,Da,t,Yp(t)),qx(XT,e)}}function $T(t,e,n){t==="focusin"?(s0(),ma=e,Da=n,ma.attachEvent("onpropertychange",py)):t==="focusout"&&s0()}function YT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wu(Da)}function KT(t,e){if(t==="click")return wu(e)}function ZT(t,e){if(t==="input"||t==="change")return wu(e)}function JT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var di=typeof Object.is=="function"?Object.is:JT;function La(t,e){if(di(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!wd.call(e,r)||!di(t[r],e[r]))return!1}return!0}function o0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function a0(t,e){var n=o0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=o0(n)}}function my(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?my(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function gy(){for(var t=window,e=Dc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Dc(t.document)}return e}function rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function QT(t){var e=gy(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&my(n.ownerDocument.documentElement,n)){if(i!==null&&rm(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=a0(n,s);var o=a0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ew=Ki&&"documentMode"in document&&11>=document.documentMode,Ys=null,Wd=null,ga=null,jd=!1;function l0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jd||Ys==null||Ys!==Dc(i)||(i=Ys,"selectionStart"in i&&rm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ga&&La(ga,i)||(ga=i,i=Oc(Wd,"onSelect"),0<i.length&&(e=new tm("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ys)))}function gl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ks={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},lf={},_y={};Ki&&(_y=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function Au(t){if(lf[t])return lf[t];if(!Ks[t])return t;var e=Ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _y)return lf[t]=e[n];return t}var vy=Au("animationend"),xy=Au("animationiteration"),yy=Au("animationstart"),Sy=Au("transitionend"),My=new Map,c0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(t,e){My.set(t,e),ys(e,[t])}for(var cf=0;cf<c0.length;cf++){var uf=c0[cf],tw=uf.toLowerCase(),nw=uf[0].toUpperCase()+uf.slice(1);kr(tw,"on"+nw)}kr(vy,"onAnimationEnd");kr(xy,"onAnimationIteration");kr(yy,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(Sy,"onTransitionEnd");_o("onMouseEnter",["mouseout","mouseover"]);_o("onMouseLeave",["mouseout","mouseover"]);_o("onPointerEnter",["pointerout","pointerover"]);_o("onPointerLeave",["pointerout","pointerover"]);ys("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ys("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ys("onBeforeInput",["compositionend","keypress","textInput","paste"]);ys("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ys("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ys("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iw=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function u0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,tT(i,e,void 0,t),t.currentTarget=null}function Ey(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;u0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;u0(r,a,c),s=l}}}if(Ic)throw t=zd,Ic=!1,zd=null,t}function mt(t,e){var n=e[Kd];n===void 0&&(n=e[Kd]=new Set);var i=t+"__bubble";n.has(i)||(Ty(e,t,2,!1),n.add(i))}function ff(t,e,n){var i=0;e&&(i|=4),Ty(n,t,i,e)}var _l="_reactListening"+Math.random().toString(36).slice(2);function Ia(t){if(!t[_l]){t[_l]=!0,Dx.forEach(function(n){n!=="selectionchange"&&(iw.has(n)||ff(n,!1,t),ff(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_l]||(e[_l]=!0,ff("selectionchange",!1,e))}}function Ty(t,e,n,i){switch(ay(e)){case 1:var r=_T;break;case 4:r=vT;break;default:r=Qp}n=r.bind(null,e,n,t),r=void 0,!kd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function df(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ts(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}qx(function(){var c=s,u=Yp(n),d=[];e:{var f=My.get(t);if(f!==void 0){var p=tm,_=t;switch(t){case"keypress":if(lc(n)===0)break e;case"keydown":case"keyup":p=IT;break;case"focusin":_="focus",p=sf;break;case"focusout":_="blur",p=sf;break;case"beforeblur":case"afterblur":p=sf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Jg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ST;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=UT;break;case vy:case xy:case yy:p=TT;break;case Sy:p=OT;break;case"scroll":p=xT;break;case"wheel":p=zT;break;case"copy":case"cut":case"paste":p=AT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=e0}var y=(e&4)!==0,g=!y&&t==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var m=c,v;m!==null;){v=m;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,h!==null&&(S=Ca(m,h),S!=null&&y.push(Na(m,S,v)))),g)break;m=m.return}0<y.length&&(f=new p(f,_,null,n,u),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Bd&&(_=n.relatedTarget||n.fromElement)&&(ts(_)||_[Zi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?ts(_):null,_!==null&&(g=Ss(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=Jg,S="onMouseLeave",h="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=e0,S="onPointerLeave",h="onPointerEnter",m="pointer"),g=p==null?f:Zs(p),v=_==null?f:Zs(_),f=new y(S,m+"leave",p,n,u),f.target=g,f.relatedTarget=v,S=null,ts(u)===c&&(y=new y(h,m+"enter",_,n,u),y.target=v,y.relatedTarget=g,S=y),g=S,p&&_)t:{for(y=p,h=_,m=0,v=y;v;v=As(v))m++;for(v=0,S=h;S;S=As(S))v++;for(;0<m-v;)y=As(y),m--;for(;0<v-m;)h=As(h),v--;for(;m--;){if(y===h||h!==null&&y===h.alternate)break t;y=As(y),h=As(h)}y=null}else y=null;p!==null&&f0(d,f,p,y,!1),_!==null&&g!==null&&f0(d,g,_,y,!0)}}e:{if(f=c?Zs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var A=qT;else if(i0(f))if(hy)A=ZT;else{A=YT;var T=$T}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=KT);if(A&&(A=A(t,c))){dy(d,A,n,u);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Ld(f,"number",f.value)}switch(T=c?Zs(c):window,t){case"focusin":(i0(T)||T.contentEditable==="true")&&(Ys=T,Wd=c,ga=null);break;case"focusout":ga=Wd=Ys=null;break;case"mousedown":jd=!0;break;case"contextmenu":case"mouseup":case"dragend":jd=!1,l0(d,n,u);break;case"selectionchange":if(ew)break;case"keydown":case"keyup":l0(d,n,u)}var R;if(im)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else $s?uy(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(cy&&n.locale!=="ko"&&($s||x!=="onCompositionStart"?x==="onCompositionEnd"&&$s&&(R=ly()):(yr=u,em="value"in yr?yr.value:yr.textContent,$s=!0)),T=Oc(c,x),0<T.length&&(x=new Qg(x,t,null,n,u),d.push({event:x,listeners:T}),R?x.data=R:(R=fy(n),R!==null&&(x.data=R)))),(R=HT?GT(t,n):WT(t,n))&&(c=Oc(c,"onBeforeInput"),0<c.length&&(u=new Qg("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=R))}Ey(d,e)})}function Na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Oc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ca(t,n),s!=null&&i.unshift(Na(t,s,r)),s=Ca(t,e),s!=null&&i.push(Na(t,s,r))),t=t.return}return i}function As(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function f0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ca(n,s),l!=null&&o.unshift(Na(n,l,a))):r||(l=Ca(n,s),l!=null&&o.push(Na(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var rw=/\r\n?/g,sw=/\u0000|\uFFFD/g;function d0(t){return(typeof t=="string"?t:""+t).replace(rw,`
`).replace(sw,"")}function vl(t,e,n){if(e=d0(e),d0(t)!==e&&n)throw Error(oe(425))}function kc(){}var Xd=null,qd=null;function $d(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yd=typeof setTimeout=="function"?setTimeout:void 0,ow=typeof clearTimeout=="function"?clearTimeout:void 0,h0=typeof Promise=="function"?Promise:void 0,aw=typeof queueMicrotask=="function"?queueMicrotask:typeof h0<"u"?function(t){return h0.resolve(null).then(t).catch(lw)}:Yd;function lw(t){setTimeout(function(){throw t})}function hf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Pa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Pa(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function p0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Lo=Math.random().toString(36).slice(2),Ei="__reactFiber$"+Lo,Fa="__reactProps$"+Lo,Zi="__reactContainer$"+Lo,Kd="__reactEvents$"+Lo,cw="__reactListeners$"+Lo,uw="__reactHandles$"+Lo;function ts(t){var e=t[Ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zi]||n[Ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=p0(t);t!==null;){if(n=t[Ei])return n;t=p0(t)}return e}t=n,n=t.parentNode}return null}function Ja(t){return t=t[Ei]||t[Zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Cu(t){return t[Fa]||null}var Zd=[],Js=-1;function zr(t){return{current:t}}function _t(t){0>Js||(t.current=Zd[Js],Zd[Js]=null,Js--)}function ht(t,e){Js++,Zd[Js]=t.current,t.current=e}var Nr={},cn=zr(Nr),Mn=zr(!1),hs=Nr;function vo(t,e){var n=t.type.contextTypes;if(!n)return Nr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function En(t){return t=t.childContextTypes,t!=null}function zc(){_t(Mn),_t(cn)}function m0(t,e,n){if(cn.current!==Nr)throw Error(oe(168));ht(cn,e),ht(Mn,n)}function wy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,$E(t)||"Unknown",r));return Tt({},n,i)}function Vc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nr,hs=cn.current,ht(cn,t),ht(Mn,Mn.current),!0}function g0(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=wy(t,e,hs),i.__reactInternalMemoizedMergedChildContext=t,_t(Mn),_t(cn),ht(cn,t)):_t(Mn),ht(Mn,n)}var Hi=null,bu=!1,pf=!1;function Ay(t){Hi===null?Hi=[t]:Hi.push(t)}function fw(t){bu=!0,Ay(t)}function Vr(){if(!pf&&Hi!==null){pf=!0;var t=0,e=it;try{var n=Hi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Hi=null,bu=!1}catch(r){throw Hi!==null&&(Hi=Hi.slice(t+1)),Zx(Kp,Vr),r}finally{it=e,pf=!1}}return null}var Qs=[],eo=0,Hc=null,Gc=0,Vn=[],Hn=0,ps=null,Wi=1,ji="";function Yr(t,e){Qs[eo++]=Gc,Qs[eo++]=Hc,Hc=t,Gc=e}function Cy(t,e,n){Vn[Hn++]=Wi,Vn[Hn++]=ji,Vn[Hn++]=ps,ps=t;var i=Wi;t=ji;var r=32-li(i)-1;i&=~(1<<r),n+=1;var s=32-li(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Wi=1<<32-li(e)+r|n<<r|i,ji=s+t}else Wi=1<<s|n<<r|i,ji=t}function sm(t){t.return!==null&&(Yr(t,1),Cy(t,1,0))}function om(t){for(;t===Hc;)Hc=Qs[--eo],Qs[eo]=null,Gc=Qs[--eo],Qs[eo]=null;for(;t===ps;)ps=Vn[--Hn],Vn[Hn]=null,ji=Vn[--Hn],Vn[Hn]=null,Wi=Vn[--Hn],Vn[Hn]=null}var In=null,Ln=null,vt=!1,oi=null;function by(t,e){var n=jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,In=t,Ln=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,In=t,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ps!==null?{id:Wi,overflow:ji}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,In=t,Ln=null,!0):!1;default:return!1}}function Jd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qd(t){if(vt){var e=Ln;if(e){var n=e;if(!_0(t,e)){if(Jd(t))throw Error(oe(418));e=Cr(n.nextSibling);var i=In;e&&_0(t,e)?by(i,n):(t.flags=t.flags&-4097|2,vt=!1,In=t)}}else{if(Jd(t))throw Error(oe(418));t.flags=t.flags&-4097|2,vt=!1,In=t}}}function v0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function xl(t){if(t!==In)return!1;if(!vt)return v0(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$d(t.type,t.memoizedProps)),e&&(e=Ln)){if(Jd(t))throw Ry(),Error(oe(418));for(;e;)by(t,e),e=Cr(e.nextSibling)}if(v0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ln=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ln=null}}else Ln=In?Cr(t.stateNode.nextSibling):null;return!0}function Ry(){for(var t=Ln;t;)t=Cr(t.nextSibling)}function xo(){Ln=In=null,vt=!1}function am(t){oi===null?oi=[t]:oi.push(t)}var dw=nr.ReactCurrentBatchConfig;function Go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function yl(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function x0(t){var e=t._init;return e(t._payload)}function Py(t){function e(h,m){if(t){var v=h.deletions;v===null?(h.deletions=[m],h.flags|=16):v.push(m)}}function n(h,m){if(!t)return null;for(;m!==null;)e(h,m),m=m.sibling;return null}function i(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function r(h,m){return h=Dr(h,m),h.index=0,h.sibling=null,h}function s(h,m,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<m?(h.flags|=2,m):v):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,m,v,S){return m===null||m.tag!==6?(m=Sf(v,h.mode,S),m.return=h,m):(m=r(m,v),m.return=h,m)}function l(h,m,v,S){var A=v.type;return A===qs?u(h,m,v.props.children,S,v.key):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===mr&&x0(A)===m.type)?(S=r(m,v.props),S.ref=Go(h,m,v),S.return=h,S):(S=mc(v.type,v.key,v.props,null,h.mode,S),S.ref=Go(h,m,v),S.return=h,S)}function c(h,m,v,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Mf(v,h.mode,S),m.return=h,m):(m=r(m,v.children||[]),m.return=h,m)}function u(h,m,v,S,A){return m===null||m.tag!==7?(m=us(v,h.mode,S,A),m.return=h,m):(m=r(m,v),m.return=h,m)}function d(h,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Sf(""+m,h.mode,v),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case cl:return v=mc(m.type,m.key,m.props,null,h.mode,v),v.ref=Go(h,null,m),v.return=h,v;case Xs:return m=Mf(m,h.mode,v),m.return=h,m;case mr:var S=m._init;return d(h,S(m._payload),v)}if(sa(m)||Oo(m))return m=us(m,h.mode,v,null),m.return=h,m;yl(h,m)}return null}function f(h,m,v,S){var A=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return A!==null?null:a(h,m,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case cl:return v.key===A?l(h,m,v,S):null;case Xs:return v.key===A?c(h,m,v,S):null;case mr:return A=v._init,f(h,m,A(v._payload),S)}if(sa(v)||Oo(v))return A!==null?null:u(h,m,v,S,null);yl(h,v)}return null}function p(h,m,v,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(v)||null,a(m,h,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case cl:return h=h.get(S.key===null?v:S.key)||null,l(m,h,S,A);case Xs:return h=h.get(S.key===null?v:S.key)||null,c(m,h,S,A);case mr:var T=S._init;return p(h,m,v,T(S._payload),A)}if(sa(S)||Oo(S))return h=h.get(v)||null,u(m,h,S,A,null);yl(m,S)}return null}function _(h,m,v,S){for(var A=null,T=null,R=m,x=m=0,b=null;R!==null&&x<v.length;x++){R.index>x?(b=R,R=null):b=R.sibling;var P=f(h,R,v[x],S);if(P===null){R===null&&(R=b);break}t&&R&&P.alternate===null&&e(h,R),m=s(P,m,x),T===null?A=P:T.sibling=P,T=P,R=b}if(x===v.length)return n(h,R),vt&&Yr(h,x),A;if(R===null){for(;x<v.length;x++)R=d(h,v[x],S),R!==null&&(m=s(R,m,x),T===null?A=R:T.sibling=R,T=R);return vt&&Yr(h,x),A}for(R=i(h,R);x<v.length;x++)b=p(R,h,x,v[x],S),b!==null&&(t&&b.alternate!==null&&R.delete(b.key===null?x:b.key),m=s(b,m,x),T===null?A=b:T.sibling=b,T=b);return t&&R.forEach(function(D){return e(h,D)}),vt&&Yr(h,x),A}function y(h,m,v,S){var A=Oo(v);if(typeof A!="function")throw Error(oe(150));if(v=A.call(v),v==null)throw Error(oe(151));for(var T=A=null,R=m,x=m=0,b=null,P=v.next();R!==null&&!P.done;x++,P=v.next()){R.index>x?(b=R,R=null):b=R.sibling;var D=f(h,R,P.value,S);if(D===null){R===null&&(R=b);break}t&&R&&D.alternate===null&&e(h,R),m=s(D,m,x),T===null?A=D:T.sibling=D,T=D,R=b}if(P.done)return n(h,R),vt&&Yr(h,x),A;if(R===null){for(;!P.done;x++,P=v.next())P=d(h,P.value,S),P!==null&&(m=s(P,m,x),T===null?A=P:T.sibling=P,T=P);return vt&&Yr(h,x),A}for(R=i(h,R);!P.done;x++,P=v.next())P=p(R,h,x,P.value,S),P!==null&&(t&&P.alternate!==null&&R.delete(P.key===null?x:P.key),m=s(P,m,x),T===null?A=P:T.sibling=P,T=P);return t&&R.forEach(function(O){return e(h,O)}),vt&&Yr(h,x),A}function g(h,m,v,S){if(typeof v=="object"&&v!==null&&v.type===qs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case cl:e:{for(var A=v.key,T=m;T!==null;){if(T.key===A){if(A=v.type,A===qs){if(T.tag===7){n(h,T.sibling),m=r(T,v.props.children),m.return=h,h=m;break e}}else if(T.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===mr&&x0(A)===T.type){n(h,T.sibling),m=r(T,v.props),m.ref=Go(h,T,v),m.return=h,h=m;break e}n(h,T);break}else e(h,T);T=T.sibling}v.type===qs?(m=us(v.props.children,h.mode,S,v.key),m.return=h,h=m):(S=mc(v.type,v.key,v.props,null,h.mode,S),S.ref=Go(h,m,v),S.return=h,h=S)}return o(h);case Xs:e:{for(T=v.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(h,m.sibling),m=r(m,v.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else e(h,m);m=m.sibling}m=Mf(v,h.mode,S),m.return=h,h=m}return o(h);case mr:return T=v._init,g(h,m,T(v._payload),S)}if(sa(v))return _(h,m,v,S);if(Oo(v))return y(h,m,v,S);yl(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(h,m.sibling),m=r(m,v),m.return=h,h=m):(n(h,m),m=Sf(v,h.mode,S),m.return=h,h=m),o(h)):n(h,m)}return g}var yo=Py(!0),Dy=Py(!1),Wc=zr(null),jc=null,to=null,lm=null;function cm(){lm=to=jc=null}function um(t){var e=Wc.current;_t(Wc),t._currentValue=e}function eh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ho(t,e){jc=t,lm=to=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Sn=!0),t.firstContext=null)}function Kn(t){var e=t._currentValue;if(lm!==t)if(t={context:t,memoizedValue:e,next:null},to===null){if(jc===null)throw Error(oe(308));to=t,jc.dependencies={lanes:0,firstContext:t}}else to=to.next=t;return e}var ns=null;function fm(t){ns===null?ns=[t]:ns.push(t)}function Ly(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,fm(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ji(t,i)}function Ji(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var gr=!1;function dm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function br(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ji(t,n)}return r=i.interleaved,r===null?(e.next=e,fm(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ji(t,n)}function cc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zp(t,n)}}function y0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xc(t,e,n,i){var r=t.updateQueue;gr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(f=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=Tt({},d,f);break e;case 2:gr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);gs|=o,t.lanes=o,t.memoizedState=d}}function S0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Qa={},bi=zr(Qa),Ua=zr(Qa),Ba=zr(Qa);function is(t){if(t===Qa)throw Error(oe(174));return t}function hm(t,e){switch(ht(Ba,e),ht(Ua,t),ht(bi,Qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nd(e,t)}_t(bi),ht(bi,e)}function So(){_t(bi),_t(Ua),_t(Ba)}function Ny(t){is(Ba.current);var e=is(bi.current),n=Nd(e,t.type);e!==n&&(ht(Ua,t),ht(bi,n))}function pm(t){Ua.current===t&&(_t(bi),_t(Ua))}var St=zr(0);function qc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mf=[];function mm(){for(var t=0;t<mf.length;t++)mf[t]._workInProgressVersionPrimary=null;mf.length=0}var uc=nr.ReactCurrentDispatcher,gf=nr.ReactCurrentBatchConfig,ms=0,Mt=null,zt=null,jt=null,$c=!1,_a=!1,Oa=0,hw=0;function nn(){throw Error(oe(321))}function gm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!di(t[n],e[n]))return!1;return!0}function _m(t,e,n,i,r,s){if(ms=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,uc.current=t===null||t.memoizedState===null?_w:vw,t=n(i,r),_a){s=0;do{if(_a=!1,Oa=0,25<=s)throw Error(oe(301));s+=1,jt=zt=null,e.updateQueue=null,uc.current=xw,t=n(i,r)}while(_a)}if(uc.current=Yc,e=zt!==null&&zt.next!==null,ms=0,jt=zt=Mt=null,$c=!1,e)throw Error(oe(300));return t}function vm(){var t=Oa!==0;return Oa=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Mt.memoizedState=jt=t:jt=jt.next=t,jt}function Zn(){if(zt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=jt===null?Mt.memoizedState:jt.next;if(e!==null)jt=e,zt=t;else{if(t===null)throw Error(oe(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},jt===null?Mt.memoizedState=jt=t:jt=jt.next=t}return jt}function ka(t,e){return typeof e=="function"?e(t):e}function _f(t){var e=Zn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=zt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ms&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Mt.lanes|=u,gs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,di(i,e.memoizedState)||(Sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,gs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vf(t){var e=Zn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);di(s,e.memoizedState)||(Sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Fy(){}function Uy(t,e){var n=Mt,i=Zn(),r=e(),s=!di(i.memoizedState,r);if(s&&(i.memoizedState=r,Sn=!0),i=i.queue,xm(ky.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||jt!==null&&jt.memoizedState.tag&1){if(n.flags|=2048,za(9,Oy.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(oe(349));ms&30||By(n,e,r)}return r}function By(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Oy(t,e,n,i){e.value=n,e.getSnapshot=i,zy(e)&&Vy(t)}function ky(t,e,n){return n(function(){zy(e)&&Vy(t)})}function zy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!di(t,n)}catch{return!0}}function Vy(t){var e=Ji(t,1);e!==null&&ci(e,t,1,-1)}function M0(t){var e=xi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:t},e.queue=t,t=t.dispatch=gw.bind(null,Mt,t),[e.memoizedState,t]}function za(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Hy(){return Zn().memoizedState}function fc(t,e,n,i){var r=xi();Mt.flags|=t,r.memoizedState=za(1|e,n,void 0,i===void 0?null:i)}function Ru(t,e,n,i){var r=Zn();i=i===void 0?null:i;var s=void 0;if(zt!==null){var o=zt.memoizedState;if(s=o.destroy,i!==null&&gm(i,o.deps)){r.memoizedState=za(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=za(1|e,n,s,i)}function E0(t,e){return fc(8390656,8,t,e)}function xm(t,e){return Ru(2048,8,t,e)}function Gy(t,e){return Ru(4,2,t,e)}function Wy(t,e){return Ru(4,4,t,e)}function jy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Xy(t,e,n){return n=n!=null?n.concat([t]):null,Ru(4,4,jy.bind(null,e,t),n)}function ym(){}function qy(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function $y(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Yy(t,e,n){return ms&21?(di(n,e)||(n=ey(),Mt.lanes|=n,gs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Sn=!0),t.memoizedState=n)}function pw(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=gf.transition;gf.transition={};try{t(!1),e()}finally{it=n,gf.transition=i}}function Ky(){return Zn().memoizedState}function mw(t,e,n){var i=Pr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Zy(t))Jy(e,n);else if(n=Ly(t,e,n,i),n!==null){var r=mn();ci(n,t,i,r),Qy(n,e,i)}}function gw(t,e,n){var i=Pr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zy(t))Jy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,di(a,o)){var l=e.interleaved;l===null?(r.next=r,fm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ly(t,e,r,i),n!==null&&(r=mn(),ci(n,t,i,r),Qy(n,e,i))}}function Zy(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function Jy(t,e){_a=$c=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zp(t,n)}}var Yc={readContext:Kn,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useInsertionEffect:nn,useLayoutEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useMutableSource:nn,useSyncExternalStore:nn,useId:nn,unstable_isNewReconciler:!1},_w={readContext:Kn,useCallback:function(t,e){return xi().memoizedState=[t,e===void 0?null:e],t},useContext:Kn,useEffect:E0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fc(4194308,4,jy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fc(4194308,4,t,e)},useInsertionEffect:function(t,e){return fc(4,2,t,e)},useMemo:function(t,e){var n=xi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=xi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=mw.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=xi();return t={current:t},e.memoizedState=t},useState:M0,useDebugValue:ym,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=M0(!1),e=t[0];return t=pw.bind(null,t[1]),xi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=xi();if(vt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Xt===null)throw Error(oe(349));ms&30||By(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,E0(ky.bind(null,i,s,t),[t]),i.flags|=2048,za(9,Oy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=xi(),e=Xt.identifierPrefix;if(vt){var n=ji,i=Wi;n=(i&~(1<<32-li(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vw={readContext:Kn,useCallback:qy,useContext:Kn,useEffect:xm,useImperativeHandle:Xy,useInsertionEffect:Gy,useLayoutEffect:Wy,useMemo:$y,useReducer:_f,useRef:Hy,useState:function(){return _f(ka)},useDebugValue:ym,useDeferredValue:function(t){var e=Zn();return Yy(e,zt.memoizedState,t)},useTransition:function(){var t=_f(ka)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:Fy,useSyncExternalStore:Uy,useId:Ky,unstable_isNewReconciler:!1},xw={readContext:Kn,useCallback:qy,useContext:Kn,useEffect:xm,useImperativeHandle:Xy,useInsertionEffect:Gy,useLayoutEffect:Wy,useMemo:$y,useReducer:vf,useRef:Hy,useState:function(){return vf(ka)},useDebugValue:ym,useDeferredValue:function(t){var e=Zn();return zt===null?e.memoizedState=t:Yy(e,zt.memoizedState,t)},useTransition:function(){var t=vf(ka)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:Fy,useSyncExternalStore:Uy,useId:Ky,unstable_isNewReconciler:!1};function ri(t,e){if(t&&t.defaultProps){e=Tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function th(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pu={isMounted:function(t){return(t=t._reactInternals)?Ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=mn(),r=Pr(t),s=qi(i,r);s.payload=e,n!=null&&(s.callback=n),e=br(t,s,r),e!==null&&(ci(e,t,r,i),cc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=mn(),r=Pr(t),s=qi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=br(t,s,r),e!==null&&(ci(e,t,r,i),cc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mn(),i=Pr(t),r=qi(n,i);r.tag=2,e!=null&&(r.callback=e),e=br(t,r,i),e!==null&&(ci(e,t,i,n),cc(e,t,i))}};function T0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!La(n,i)||!La(r,s):!0}function eS(t,e,n){var i=!1,r=Nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Kn(s):(r=En(e)?hs:cn.current,i=e.contextTypes,s=(i=i!=null)?vo(t,r):Nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function w0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Pu.enqueueReplaceState(e,e.state,null)}function nh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},dm(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Kn(s):(s=En(e)?hs:cn.current,r.context=vo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(th(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Pu.enqueueReplaceState(r,r.state,null),Xc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Mo(t,e){try{var n="",i=e;do n+=qE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function xf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ih(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yw=typeof WeakMap=="function"?WeakMap:Map;function tS(t,e,n){n=qi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Zc||(Zc=!0,hh=i),ih(t,e)},n}function nS(t,e,n){n=qi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ih(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ih(t,e),typeof i!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function A0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new yw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Nw.bind(null,t,e,n),e.then(t,t))}function C0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function b0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qi(-1,1),e.tag=2,br(n,e,1))),n.lanes|=1),t)}var Sw=nr.ReactCurrentOwner,Sn=!1;function dn(t,e,n,i){e.child=t===null?Dy(e,null,n,i):yo(e,t.child,n,i)}function R0(t,e,n,i,r){n=n.render;var s=e.ref;return ho(e,r),i=_m(t,e,n,i,s,r),n=vm(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Qi(t,e,r)):(vt&&n&&sm(e),e.flags|=1,dn(t,e,i,r),e.child)}function P0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!bm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,iS(t,e,s,i,r)):(t=mc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:La,n(o,i)&&t.ref===e.ref)return Qi(t,e,r)}return e.flags|=1,t=Dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function iS(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(La(s,i)&&t.ref===e.ref)if(Sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Sn=!0);else return e.lanes=t.lanes,Qi(t,e,r)}return rh(t,e,n,i,r)}function rS(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(io,Pn),Pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(io,Pn),Pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(io,Pn),Pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(io,Pn),Pn|=i;return dn(t,e,r,n),e.child}function sS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function rh(t,e,n,i,r){var s=En(n)?hs:cn.current;return s=vo(e,s),ho(e,r),n=_m(t,e,n,i,s,r),i=vm(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Qi(t,e,r)):(vt&&i&&sm(e),e.flags|=1,dn(t,e,n,r),e.child)}function D0(t,e,n,i,r){if(En(n)){var s=!0;Vc(e)}else s=!1;if(ho(e,r),e.stateNode===null)dc(t,e),eS(e,n,i),nh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Kn(c):(c=En(n)?hs:cn.current,c=vo(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&w0(e,o,i,c),gr=!1;var f=e.memoizedState;o.state=f,Xc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Mn.current||gr?(typeof u=="function"&&(th(e,n,u,i),l=e.memoizedState),(a=gr||T0(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Iy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ri(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Kn(l):(l=En(n)?hs:cn.current,l=vo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&w0(e,o,i,l),gr=!1,f=e.memoizedState,o.state=f,Xc(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||Mn.current||gr?(typeof p=="function"&&(th(e,n,p,i),_=e.memoizedState),(c=gr||T0(e,n,c,i,f,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return sh(t,e,n,i,s,r)}function sh(t,e,n,i,r,s){sS(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&g0(e,n,!1),Qi(t,e,s);i=e.stateNode,Sw.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=yo(e,t.child,null,s),e.child=yo(e,null,a,s)):dn(t,e,a,s),e.memoizedState=i.state,r&&g0(e,n,!0),e.child}function oS(t){var e=t.stateNode;e.pendingContext?m0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&m0(t,e.context,!1),hm(t,e.containerInfo)}function L0(t,e,n,i,r){return xo(),am(r),e.flags|=256,dn(t,e,n,i),e.child}var oh={dehydrated:null,treeContext:null,retryLane:0};function ah(t){return{baseLanes:t,cachePool:null,transitions:null}}function aS(t,e,n){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(St,r&1),t===null)return Qd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Iu(o,i,0,null),t=us(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ah(n),e.memoizedState=oh,t):Sm(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Mw(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Dr(a,s):(s=us(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ah(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=oh,i}return s=t.child,t=s.sibling,i=Dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Sm(t,e){return e=Iu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Sl(t,e,n,i){return i!==null&&am(i),yo(e,t.child,null,n),t=Sm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Mw(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=xf(Error(oe(422))),Sl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Iu({mode:"visible",children:i.children},r,0,null),s=us(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&yo(e,t.child,null,o),e.child.memoizedState=ah(o),e.memoizedState=oh,s);if(!(e.mode&1))return Sl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=xf(s,i,void 0),Sl(t,e,o,i)}if(a=(o&t.childLanes)!==0,Sn||a){if(i=Xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ji(t,r),ci(i,t,r,-1))}return Cm(),i=xf(Error(oe(421))),Sl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Fw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ln=Cr(r.nextSibling),In=e,vt=!0,oi=null,t!==null&&(Vn[Hn++]=Wi,Vn[Hn++]=ji,Vn[Hn++]=ps,Wi=t.id,ji=t.overflow,ps=e),e=Sm(e,i.children),e.flags|=4096,e)}function I0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),eh(t.return,e,n)}function yf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function lS(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(dn(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&I0(t,n,e);else if(t.tag===19)I0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&qc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),yf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&qc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}yf(e,!0,n,null,s);break;case"together":yf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function dc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ew(t,e,n){switch(e.tag){case 3:oS(e),xo();break;case 5:Ny(e);break;case 1:En(e.type)&&Vc(e);break;case 4:hm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Wc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?aS(t,e,n):(ht(St,St.current&1),t=Qi(t,e,n),t!==null?t.sibling:null);ht(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return lS(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,rS(t,e,n)}return Qi(t,e,n)}var cS,lh,uS,fS;cS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lh=function(){};uS=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,is(bi.current);var s=null;switch(n){case"input":r=Pd(t,r),i=Pd(t,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=Id(t,r),i=Id(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=kc)}Fd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(wa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(wa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};fS=function(t,e,n,i){n!==i&&(e.flags|=4)};function Wo(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function rn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Tw(t,e,n){var i=e.pendingProps;switch(om(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(e),null;case 1:return En(e.type)&&zc(),rn(e),null;case 3:return i=e.stateNode,So(),_t(Mn),_t(cn),mm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(xl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,oi!==null&&(gh(oi),oi=null))),lh(t,e),rn(e),null;case 5:pm(e);var r=is(Ba.current);if(n=e.type,t!==null&&e.stateNode!=null)uS(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return rn(e),null}if(t=is(bi.current),xl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ei]=e,i[Fa]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<aa.length;r++)mt(aa[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":Hg(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":Wg(i,s),mt("invalid",i)}Fd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&vl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&vl(i.textContent,a,t),r=["children",""+a]):wa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(n){case"input":ul(i),Gg(i,s,!0);break;case"textarea":ul(i),jg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=kc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=kx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ei]=e,t[Fa]=i,cS(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ud(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<aa.length;r++)mt(aa[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":Hg(t,i),r=Pd(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),mt("invalid",t);break;case"textarea":Wg(t,i),r=Id(t,i),mt("invalid",t);break;default:r=i}Fd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Hx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Aa(t,l):typeof l=="number"&&Aa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&jp(t,s,l,o))}switch(n){case"input":ul(t),Gg(t,i,!1);break;case"textarea":ul(t),jg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?lo(t,!!i.multiple,s,!1):i.defaultValue!=null&&lo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=kc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rn(e),null;case 6:if(t&&e.stateNode!=null)fS(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=is(Ba.current),is(bi.current),xl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ei]=e,(s=i.nodeValue!==n)&&(t=In,t!==null))switch(t.tag){case 3:vl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ei]=e,e.stateNode=i}return rn(e),null;case 13:if(_t(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&Ln!==null&&e.mode&1&&!(e.flags&128))Ry(),xo(),e.flags|=98560,s=!1;else if(s=xl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[Ei]=e}else xo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rn(e),s=!1}else oi!==null&&(gh(oi),oi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Vt===0&&(Vt=3):Cm())),e.updateQueue!==null&&(e.flags|=4),rn(e),null);case 4:return So(),lh(t,e),t===null&&Ia(e.stateNode.containerInfo),rn(e),null;case 10:return um(e.type._context),rn(e),null;case 17:return En(e.type)&&zc(),rn(e),null;case 19:if(_t(St),s=e.memoizedState,s===null)return rn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Wo(s,!1);else{if(Vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=qc(t),o!==null){for(e.flags|=128,Wo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&It()>Eo&&(e.flags|=128,i=!0,Wo(s,!1),e.lanes=4194304)}else{if(!i)if(t=qc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Wo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return rn(e),null}else 2*It()-s.renderingStartTime>Eo&&n!==1073741824&&(e.flags|=128,i=!0,Wo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,n=St.current,ht(St,i?n&1|2:n&1),e):(rn(e),null);case 22:case 23:return Am(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Pn&1073741824&&(rn(e),e.subtreeFlags&6&&(e.flags|=8192)):rn(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function ww(t,e){switch(om(e),e.tag){case 1:return En(e.type)&&zc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return So(),_t(Mn),_t(cn),mm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pm(e),null;case 13:if(_t(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));xo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _t(St),null;case 4:return So(),null;case 10:return um(e.type._context),null;case 22:case 23:return Am(),null;case 24:return null;default:return null}}var Ml=!1,an=!1,Aw=typeof WeakSet=="function"?WeakSet:Set,we=null;function no(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function ch(t,e,n){try{n()}catch(i){bt(t,e,i)}}var N0=!1;function Cw(t,e){if(Xd=Uc,t=gy(),rm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qd={focusedElem:t,selectionRange:n},Uc=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,g=_.memoizedState,h=e.stateNode,m=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:ri(e.type,y),g);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(S){bt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return _=N0,N0=!1,_}function va(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ch(e,n,s)}r=r.next}while(r!==i)}}function Du(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function uh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function dS(t){var e=t.alternate;e!==null&&(t.alternate=null,dS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ei],delete e[Fa],delete e[Kd],delete e[cw],delete e[uw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hS(t){return t.tag===5||t.tag===3||t.tag===4}function F0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kc));else if(i!==4&&(t=t.child,t!==null))for(fh(t,e,n),t=t.sibling;t!==null;)fh(t,e,n),t=t.sibling}function dh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(dh(t,e,n),t=t.sibling;t!==null;)dh(t,e,n),t=t.sibling}var $t=null,si=!1;function or(t,e,n){for(n=n.child;n!==null;)pS(t,e,n),n=n.sibling}function pS(t,e,n){if(Ci&&typeof Ci.onCommitFiberUnmount=="function")try{Ci.onCommitFiberUnmount(Eu,n)}catch{}switch(n.tag){case 5:an||no(n,e);case 6:var i=$t,r=si;$t=null,or(t,e,n),$t=i,si=r,$t!==null&&(si?(t=$t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$t.removeChild(n.stateNode));break;case 18:$t!==null&&(si?(t=$t,n=n.stateNode,t.nodeType===8?hf(t.parentNode,n):t.nodeType===1&&hf(t,n),Pa(t)):hf($t,n.stateNode));break;case 4:i=$t,r=si,$t=n.stateNode.containerInfo,si=!0,or(t,e,n),$t=i,si=r;break;case 0:case 11:case 14:case 15:if(!an&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ch(n,e,o),r=r.next}while(r!==i)}or(t,e,n);break;case 1:if(!an&&(no(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){bt(n,e,a)}or(t,e,n);break;case 21:or(t,e,n);break;case 22:n.mode&1?(an=(i=an)||n.memoizedState!==null,or(t,e,n),an=i):or(t,e,n);break;default:or(t,e,n)}}function U0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Aw),e.forEach(function(i){var r=Uw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:$t=a.stateNode,si=!1;break e;case 3:$t=a.stateNode.containerInfo,si=!0;break e;case 4:$t=a.stateNode.containerInfo,si=!0;break e}a=a.return}if($t===null)throw Error(oe(160));pS(s,o,r),$t=null,si=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)mS(e,t),e=e.sibling}function mS(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(e,t),gi(t),i&4){try{va(3,t,t.return),Du(3,t)}catch(y){bt(t,t.return,y)}try{va(5,t,t.return)}catch(y){bt(t,t.return,y)}}break;case 1:Jn(e,t),gi(t),i&512&&n!==null&&no(n,n.return);break;case 5:if(Jn(e,t),gi(t),i&512&&n!==null&&no(n,n.return),t.flags&32){var r=t.stateNode;try{Aa(r,"")}catch(y){bt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Bx(r,s),Ud(a,o);var c=Ud(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Hx(r,d):u==="dangerouslySetInnerHTML"?zx(r,d):u==="children"?Aa(r,d):jp(r,u,d,c)}switch(a){case"input":Dd(r,s);break;case"textarea":Ox(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?lo(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?lo(r,!!s.multiple,s.defaultValue,!0):lo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Fa]=s}catch(y){bt(t,t.return,y)}}break;case 6:if(Jn(e,t),gi(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){bt(t,t.return,y)}}break;case 3:if(Jn(e,t),gi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Pa(e.containerInfo)}catch(y){bt(t,t.return,y)}break;case 4:Jn(e,t),gi(t);break;case 13:Jn(e,t),gi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Tm=It())),i&4&&U0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(an=(c=an)||u,Jn(e,t),an=c):Jn(e,t),gi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(we=t,u=t.child;u!==null;){for(d=we=u;we!==null;){switch(f=we,p=f.child,f.tag){case 0:case 11:case 14:case 15:va(4,f,f.return);break;case 1:no(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){bt(i,n,y)}}break;case 5:no(f,f.return);break;case 22:if(f.memoizedState!==null){O0(d);continue}}p!==null?(p.return=f,we=p):O0(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Vx("display",o))}catch(y){bt(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){bt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Jn(e,t),gi(t),i&4&&U0(t);break;case 21:break;default:Jn(e,t),gi(t)}}function gi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hS(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Aa(r,""),i.flags&=-33);var s=F0(t);dh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=F0(t);fh(t,a,o);break;default:throw Error(oe(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bw(t,e,n){we=t,gS(t)}function gS(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ml;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||an;a=Ml;var c=an;if(Ml=o,(an=l)&&!c)for(we=r;we!==null;)o=we,l=o.child,o.tag===22&&o.memoizedState!==null?k0(r):l!==null?(l.return=o,we=l):k0(r);for(;s!==null;)we=s,gS(s),s=s.sibling;we=r,Ml=a,an=c}B0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):B0(t)}}function B0(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:an||Du(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!an)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ri(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&S0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}S0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Pa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}an||e.flags&512&&uh(e)}catch(f){bt(e,e.return,f)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function O0(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function k0(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Du(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{uh(e)}catch(l){bt(e,s,l)}break;case 5:var o=e.return;try{uh(e)}catch(l){bt(e,o,l)}}}catch(l){bt(e,e.return,l)}if(e===t){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var Rw=Math.ceil,Kc=nr.ReactCurrentDispatcher,Mm=nr.ReactCurrentOwner,qn=nr.ReactCurrentBatchConfig,et=0,Xt=null,Ut=null,Qt=0,Pn=0,io=zr(0),Vt=0,Va=null,gs=0,Lu=0,Em=0,xa=null,yn=null,Tm=0,Eo=1/0,Vi=null,Zc=!1,hh=null,Rr=null,El=!1,Sr=null,Jc=0,ya=0,ph=null,hc=-1,pc=0;function mn(){return et&6?It():hc!==-1?hc:hc=It()}function Pr(t){return t.mode&1?et&2&&Qt!==0?Qt&-Qt:dw.transition!==null?(pc===0&&(pc=ey()),pc):(t=it,t!==0||(t=window.event,t=t===void 0?16:ay(t.type)),t):1}function ci(t,e,n,i){if(50<ya)throw ya=0,ph=null,Error(oe(185));Ka(t,n,i),(!(et&2)||t!==Xt)&&(t===Xt&&(!(et&2)&&(Lu|=n),Vt===4&&vr(t,Qt)),Tn(t,i),n===1&&et===0&&!(e.mode&1)&&(Eo=It()+500,bu&&Vr()))}function Tn(t,e){var n=t.callbackNode;dT(t,e);var i=Fc(t,t===Xt?Qt:0);if(i===0)n!==null&&$g(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&$g(n),e===1)t.tag===0?fw(z0.bind(null,t)):Ay(z0.bind(null,t)),aw(function(){!(et&6)&&Vr()}),n=null;else{switch(ty(i)){case 1:n=Kp;break;case 4:n=Jx;break;case 16:n=Nc;break;case 536870912:n=Qx;break;default:n=Nc}n=TS(n,_S.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _S(t,e){if(hc=-1,pc=0,et&6)throw Error(oe(327));var n=t.callbackNode;if(po()&&t.callbackNode!==n)return null;var i=Fc(t,t===Xt?Qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Qc(t,i);else{e=i;var r=et;et|=2;var s=xS();(Xt!==t||Qt!==e)&&(Vi=null,Eo=It()+500,cs(t,e));do try{Lw();break}catch(a){vS(t,a)}while(!0);cm(),Kc.current=s,et=r,Ut!==null?e=0:(Xt=null,Qt=0,e=Vt)}if(e!==0){if(e===2&&(r=Vd(t),r!==0&&(i=r,e=mh(t,r))),e===1)throw n=Va,cs(t,0),vr(t,i),Tn(t,It()),n;if(e===6)vr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Pw(r)&&(e=Qc(t,i),e===2&&(s=Vd(t),s!==0&&(i=s,e=mh(t,s))),e===1))throw n=Va,cs(t,0),vr(t,i),Tn(t,It()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Kr(t,yn,Vi);break;case 3:if(vr(t,i),(i&130023424)===i&&(e=Tm+500-It(),10<e)){if(Fc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){mn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Yd(Kr.bind(null,t,yn,Vi),e);break}Kr(t,yn,Vi);break;case 4:if(vr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-li(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Rw(i/1960))-i,10<i){t.timeoutHandle=Yd(Kr.bind(null,t,yn,Vi),i);break}Kr(t,yn,Vi);break;case 5:Kr(t,yn,Vi);break;default:throw Error(oe(329))}}}return Tn(t,It()),t.callbackNode===n?_S.bind(null,t):null}function mh(t,e){var n=xa;return t.current.memoizedState.isDehydrated&&(cs(t,e).flags|=256),t=Qc(t,e),t!==2&&(e=yn,yn=n,e!==null&&gh(e)),t}function gh(t){yn===null?yn=t:yn.push.apply(yn,t)}function Pw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!di(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vr(t,e){for(e&=~Em,e&=~Lu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-li(e),i=1<<n;t[n]=-1,e&=~i}}function z0(t){if(et&6)throw Error(oe(327));po();var e=Fc(t,0);if(!(e&1))return Tn(t,It()),null;var n=Qc(t,e);if(t.tag!==0&&n===2){var i=Vd(t);i!==0&&(e=i,n=mh(t,i))}if(n===1)throw n=Va,cs(t,0),vr(t,e),Tn(t,It()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kr(t,yn,Vi),Tn(t,It()),null}function wm(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(Eo=It()+500,bu&&Vr())}}function _s(t){Sr!==null&&Sr.tag===0&&!(et&6)&&po();var e=et;et|=1;var n=qn.transition,i=it;try{if(qn.transition=null,it=1,t)return t()}finally{it=i,qn.transition=n,et=e,!(et&6)&&Vr()}}function Am(){Pn=io.current,_t(io)}function cs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ow(n)),Ut!==null)for(n=Ut.return;n!==null;){var i=n;switch(om(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zc();break;case 3:So(),_t(Mn),_t(cn),mm();break;case 5:pm(i);break;case 4:So();break;case 13:_t(St);break;case 19:_t(St);break;case 10:um(i.type._context);break;case 22:case 23:Am()}n=n.return}if(Xt=t,Ut=t=Dr(t.current,null),Qt=Pn=e,Vt=0,Va=null,Em=Lu=gs=0,yn=xa=null,ns!==null){for(e=0;e<ns.length;e++)if(n=ns[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ns=null}return t}function vS(t,e){do{var n=Ut;try{if(cm(),uc.current=Yc,$c){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}$c=!1}if(ms=0,jt=zt=Mt=null,_a=!1,Oa=0,Mm.current=null,n===null||n.return===null){Vt=1,Va=e,Ut=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=C0(o);if(p!==null){p.flags&=-257,b0(p,o,a,s,e),p.mode&1&&A0(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){A0(s,c,e),Cm();break e}l=Error(oe(426))}}else if(vt&&a.mode&1){var g=C0(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),b0(g,o,a,s,e),am(Mo(l,a));break e}}s=l=Mo(l,a),Vt!==4&&(Vt=2),xa===null?xa=[s]:xa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=tS(s,l,e);y0(s,h);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Rr===null||!Rr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=nS(s,a,e);y0(s,S);break e}}s=s.return}while(s!==null)}SS(n)}catch(A){e=A,Ut===n&&n!==null&&(Ut=n=n.return);continue}break}while(!0)}function xS(){var t=Kc.current;return Kc.current=Yc,t===null?Yc:t}function Cm(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),Xt===null||!(gs&268435455)&&!(Lu&268435455)||vr(Xt,Qt)}function Qc(t,e){var n=et;et|=2;var i=xS();(Xt!==t||Qt!==e)&&(Vi=null,cs(t,e));do try{Dw();break}catch(r){vS(t,r)}while(!0);if(cm(),et=n,Kc.current=i,Ut!==null)throw Error(oe(261));return Xt=null,Qt=0,Vt}function Dw(){for(;Ut!==null;)yS(Ut)}function Lw(){for(;Ut!==null&&!iT();)yS(Ut)}function yS(t){var e=ES(t.alternate,t,Pn);t.memoizedProps=t.pendingProps,e===null?SS(t):Ut=e,Mm.current=null}function SS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ww(n,e),n!==null){n.flags&=32767,Ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,Ut=null;return}}else if(n=Tw(n,e,Pn),n!==null){Ut=n;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=t}while(e!==null);Vt===0&&(Vt=5)}function Kr(t,e,n){var i=it,r=qn.transition;try{qn.transition=null,it=1,Iw(t,e,n,i)}finally{qn.transition=r,it=i}return null}function Iw(t,e,n,i){do po();while(Sr!==null);if(et&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(hT(t,s),t===Xt&&(Ut=Xt=null,Qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||El||(El=!0,TS(Nc,function(){return po(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qn.transition,qn.transition=null;var o=it;it=1;var a=et;et|=4,Mm.current=null,Cw(t,n),mS(n,t),QT(qd),Uc=!!Xd,qd=Xd=null,t.current=n,bw(n),rT(),et=a,it=o,qn.transition=s}else t.current=n;if(El&&(El=!1,Sr=t,Jc=r),s=t.pendingLanes,s===0&&(Rr=null),aT(n.stateNode),Tn(t,It()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Zc)throw Zc=!1,t=hh,hh=null,t;return Jc&1&&t.tag!==0&&po(),s=t.pendingLanes,s&1?t===ph?ya++:(ya=0,ph=t):ya=0,Vr(),null}function po(){if(Sr!==null){var t=ty(Jc),e=qn.transition,n=it;try{if(qn.transition=null,it=16>t?16:t,Sr===null)var i=!1;else{if(t=Sr,Sr=null,Jc=0,et&6)throw Error(oe(331));var r=et;for(et|=4,we=t.current;we!==null;){var s=we,o=s.child;if(we.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(we=c;we!==null;){var u=we;switch(u.tag){case 0:case 11:case 15:va(8,u,s)}var d=u.child;if(d!==null)d.return=u,we=d;else for(;we!==null;){u=we;var f=u.sibling,p=u.return;if(dS(u),u===c){we=null;break}if(f!==null){f.return=p,we=f;break}we=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}we=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,we=o;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:va(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,we=h;break e}we=s.return}}var m=t.current;for(we=m;we!==null;){o=we;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,we=v;else e:for(o=m;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Du(9,a)}}catch(A){bt(a,a.return,A)}if(a===o){we=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,we=S;break e}we=a.return}}if(et=r,Vr(),Ci&&typeof Ci.onPostCommitFiberRoot=="function")try{Ci.onPostCommitFiberRoot(Eu,t)}catch{}i=!0}return i}finally{it=n,qn.transition=e}}return!1}function V0(t,e,n){e=Mo(n,e),e=tS(t,e,1),t=br(t,e,1),e=mn(),t!==null&&(Ka(t,1,e),Tn(t,e))}function bt(t,e,n){if(t.tag===3)V0(t,t,n);else for(;e!==null;){if(e.tag===3){V0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Rr===null||!Rr.has(i))){t=Mo(n,t),t=nS(e,t,1),e=br(e,t,1),t=mn(),e!==null&&(Ka(e,1,t),Tn(e,t));break}}e=e.return}}function Nw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=mn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&(Qt&n)===n&&(Vt===4||Vt===3&&(Qt&130023424)===Qt&&500>It()-Tm?cs(t,0):Em|=n),Tn(t,e)}function MS(t,e){e===0&&(t.mode&1?(e=hl,hl<<=1,!(hl&130023424)&&(hl=4194304)):e=1);var n=mn();t=Ji(t,e),t!==null&&(Ka(t,e,n),Tn(t,n))}function Fw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),MS(t,n)}function Uw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),MS(t,n)}var ES;ES=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mn.current)Sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Sn=!1,Ew(t,e,n);Sn=!!(t.flags&131072)}else Sn=!1,vt&&e.flags&1048576&&Cy(e,Gc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;dc(t,e),t=e.pendingProps;var r=vo(e,cn.current);ho(e,n),r=_m(null,e,i,t,r,n);var s=vm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,En(i)?(s=!0,Vc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,dm(e),r.updater=Pu,e.stateNode=r,r._reactInternals=e,nh(e,i,t,n),e=sh(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&sm(e),dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(dc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ow(i),t=ri(i,t),r){case 0:e=rh(null,e,i,t,n);break e;case 1:e=D0(null,e,i,t,n);break e;case 11:e=R0(null,e,i,t,n);break e;case 14:e=P0(null,e,i,ri(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),rh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),D0(t,e,i,r,n);case 3:e:{if(oS(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Iy(t,e),Xc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Mo(Error(oe(423)),e),e=L0(t,e,i,n,r);break e}else if(i!==r){r=Mo(Error(oe(424)),e),e=L0(t,e,i,n,r);break e}else for(Ln=Cr(e.stateNode.containerInfo.firstChild),In=e,vt=!0,oi=null,n=Dy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xo(),i===r){e=Qi(t,e,n);break e}dn(t,e,i,n)}e=e.child}return e;case 5:return Ny(e),t===null&&Qd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,$d(i,r)?o=null:s!==null&&$d(i,s)&&(e.flags|=32),sS(t,e),dn(t,e,o,n),e.child;case 6:return t===null&&Qd(e),null;case 13:return aS(t,e,n);case 4:return hm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=yo(e,null,i,n):dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),R0(t,e,i,r,n);case 7:return dn(t,e,e.pendingProps,n),e.child;case 8:return dn(t,e,e.pendingProps.children,n),e.child;case 12:return dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(Wc,i._currentValue),i._currentValue=o,s!==null)if(di(s.value,o)){if(s.children===r.children&&!Mn.current){e=Qi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=qi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),eh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),eh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ho(e,n),r=Kn(r),i=i(r),e.flags|=1,dn(t,e,i,n),e.child;case 14:return i=e.type,r=ri(i,e.pendingProps),r=ri(i.type,r),P0(t,e,i,r,n);case 15:return iS(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),dc(t,e),e.tag=1,En(i)?(t=!0,Vc(e)):t=!1,ho(e,n),eS(e,i,r),nh(e,i,r,n),sh(null,e,i,!0,t,n);case 19:return lS(t,e,n);case 22:return rS(t,e,n)}throw Error(oe(156,e.tag))};function TS(t,e){return Zx(t,e)}function Bw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,e,n,i){return new Bw(t,e,n,i)}function bm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ow(t){if(typeof t=="function")return bm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qp)return 11;if(t===$p)return 14}return 2}function Dr(t,e){var n=t.alternate;return n===null?(n=jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function mc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")bm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qs:return us(n.children,r,s,e);case Xp:o=8,r|=8;break;case Ad:return t=jn(12,n,e,r|2),t.elementType=Ad,t.lanes=s,t;case Cd:return t=jn(13,n,e,r),t.elementType=Cd,t.lanes=s,t;case bd:return t=jn(19,n,e,r),t.elementType=bd,t.lanes=s,t;case Nx:return Iu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lx:o=10;break e;case Ix:o=9;break e;case qp:o=11;break e;case $p:o=14;break e;case mr:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=jn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function us(t,e,n,i){return t=jn(7,t,i,e),t.lanes=n,t}function Iu(t,e,n,i){return t=jn(22,t,i,e),t.elementType=Nx,t.lanes=n,t.stateNode={isHidden:!1},t}function Sf(t,e,n){return t=jn(6,t,null,e),t.lanes=n,t}function Mf(t,e,n){return e=jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tf(0),this.expirationTimes=tf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Rm(t,e,n,i,r,s,o,a,l){return t=new kw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dm(s),t}function zw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function wS(t){if(!t)return Nr;t=t._reactInternals;e:{if(Ss(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(En(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(En(n))return wy(t,n,e)}return e}function AS(t,e,n,i,r,s,o,a,l){return t=Rm(n,i,!0,t,r,s,o,a,l),t.context=wS(null),n=t.current,i=mn(),r=Pr(n),s=qi(i,r),s.callback=e??null,br(n,s,r),t.current.lanes=r,Ka(t,r,i),Tn(t,i),t}function Nu(t,e,n,i){var r=e.current,s=mn(),o=Pr(r);return n=wS(n),e.context===null?e.context=n:e.pendingContext=n,e=qi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=br(r,e,o),t!==null&&(ci(t,r,o,s),cc(t,r,o)),o}function eu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function H0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pm(t,e){H0(t,e),(t=t.alternate)&&H0(t,e)}function Vw(){return null}var CS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dm(t){this._internalRoot=t}Fu.prototype.render=Dm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Nu(t,e,null,null)};Fu.prototype.unmount=Dm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_s(function(){Nu(null,t,null,null)}),e[Zi]=null}};function Fu(t){this._internalRoot=t}Fu.prototype.unstable_scheduleHydration=function(t){if(t){var e=ry();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_r.length&&e!==0&&e<_r[n].priority;n++);_r.splice(n,0,t),n===0&&oy(t)}};function Lm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Uu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function G0(){}function Hw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=eu(o);s.call(c)}}var o=AS(e,i,t,0,null,!1,!1,"",G0);return t._reactRootContainer=o,t[Zi]=o.current,Ia(t.nodeType===8?t.parentNode:t),_s(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=eu(l);a.call(c)}}var l=Rm(t,0,!1,null,null,!1,!1,"",G0);return t._reactRootContainer=l,t[Zi]=l.current,Ia(t.nodeType===8?t.parentNode:t),_s(function(){Nu(e,l,n,i)}),l}function Bu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=eu(o);a.call(l)}}Nu(e,o,t,r)}else o=Hw(n,e,t,r,i);return eu(o)}ny=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oa(e.pendingLanes);n!==0&&(Zp(e,n|1),Tn(e,It()),!(et&6)&&(Eo=It()+500,Vr()))}break;case 13:_s(function(){var i=Ji(t,1);if(i!==null){var r=mn();ci(i,t,1,r)}}),Pm(t,1)}};Jp=function(t){if(t.tag===13){var e=Ji(t,134217728);if(e!==null){var n=mn();ci(e,t,134217728,n)}Pm(t,134217728)}};iy=function(t){if(t.tag===13){var e=Pr(t),n=Ji(t,e);if(n!==null){var i=mn();ci(n,t,e,i)}Pm(t,e)}};ry=function(){return it};sy=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};Od=function(t,e,n){switch(e){case"input":if(Dd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Cu(i);if(!r)throw Error(oe(90));Ux(i),Dd(i,r)}}}break;case"textarea":Ox(t,n);break;case"select":e=n.value,e!=null&&lo(t,!!n.multiple,e,!1)}};jx=wm;Xx=_s;var Gw={usingClientEntryPoint:!1,Events:[Ja,Zs,Cu,Gx,Wx,wm]},jo={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ww={bundleType:jo.bundleType,version:jo.version,rendererPackageName:jo.rendererPackageName,rendererConfig:jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yx(t),t===null?null:t.stateNode},findFiberByHostInstance:jo.findFiberByHostInstance||Vw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{Eu=Tl.inject(Ww),Ci=Tl}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gw;Un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lm(e))throw Error(oe(200));return zw(t,e,null,n)};Un.createRoot=function(t,e){if(!Lm(t))throw Error(oe(299));var n=!1,i="",r=CS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Rm(t,1,!1,null,null,n,!1,i,r),t[Zi]=e.current,Ia(t.nodeType===8?t.parentNode:t),new Dm(e)};Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=Yx(e),t=t===null?null:t.stateNode,t};Un.flushSync=function(t){return _s(t)};Un.hydrate=function(t,e,n){if(!Uu(e))throw Error(oe(200));return Bu(null,t,e,!0,n)};Un.hydrateRoot=function(t,e,n){if(!Lm(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=CS;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=AS(e,null,t,1,n??null,r,!1,s,o),t[Zi]=e.current,Ia(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Fu(e)};Un.render=function(t,e,n){if(!Uu(e))throw Error(oe(200));return Bu(null,t,e,!1,n)};Un.unmountComponentAtNode=function(t){if(!Uu(t))throw Error(oe(40));return t._reactRootContainer?(_s(function(){Bu(null,null,t,!1,function(){t._reactRootContainer=null,t[Zi]=null})}),!0):!1};Un.unstable_batchedUpdates=wm;Un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Uu(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Bu(t,e,n,!1,i)};Un.version="18.3.1-next-f1338f8080-20240426";function bS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bS)}catch(t){console.error(t)}}bS(),bx.exports=Un;var jw=bx.exports,W0=jw;Td.createRoot=W0.createRoot,Td.hydrateRoot=W0.hydrateRoot;const Im=ie.createContext({});function Nm(t){const e=ie.useRef(null);return e.current===null&&(e.current=t()),e.current}const Xw=typeof window<"u",RS=Xw?ie.useLayoutEffect:ie.useEffect,Ou=ie.createContext(null);function Fm(t,e){t.indexOf(e)===-1&&t.push(e)}function tu(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Li=(t,e,n)=>n>e?e:n<t?t:n;let Um=()=>{};const Fr={},PS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function DS(t){return typeof t=="object"&&t!==null}const LS=t=>/^0[^.\s]+$/u.test(t);function IS(t){let e;return()=>(e===void 0&&(e=t()),e)}const $n=t=>t,qw=(t,e)=>n=>e(t(n)),el=(...t)=>t.reduce(qw),Ha=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i};class Bm{constructor(){this.subscriptions=[]}add(e){return Fm(this.subscriptions,e),()=>tu(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Nn=t=>t*1e3,Xn=t=>t/1e3;function NS(t,e){return e?t*(1e3/e):0}const FS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,$w=1e-7,Yw=12;function Kw(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=FS(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>$w&&++a<Yw);return o}function tl(t,e,n,i){if(t===e&&n===i)return $n;const r=s=>Kw(s,0,1,t,n);return s=>s===0||s===1?s:FS(r(s),e,i)}const US=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,BS=t=>e=>1-t(1-e),OS=tl(.33,1.53,.69,.99),Om=BS(OS),kS=US(Om),zS=t=>t>=1?1:(t*=2)<1?.5*Om(t):.5*(2-Math.pow(2,-10*(t-1))),km=t=>1-Math.sin(Math.acos(t)),VS=BS(km),HS=US(km),Zw=tl(.42,0,1,1),Jw=tl(0,0,.58,1),GS=tl(.42,0,.58,1),Qw=t=>Array.isArray(t)&&typeof t[0]!="number",WS=t=>Array.isArray(t)&&typeof t[0]=="number",eA={linear:$n,easeIn:Zw,easeInOut:GS,easeOut:Jw,circIn:km,circInOut:HS,circOut:VS,backIn:Om,backInOut:kS,backOut:OS,anticipate:zS},tA=t=>typeof t=="string",j0=t=>{if(WS(t)){Um(t.length===4);const[e,n,i,r]=t;return tl(e,n,i,r)}else if(tA(t))return eA[t];return t},wl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function nA(t,e){let n=new Set,i=new Set,r=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(u){o.has(u)&&(c.schedule(u),t()),u(a)}const c={schedule:(u,d=!1,f=!1)=>{const _=f&&r?n:i;return d&&o.add(u),_.add(u),u},cancel:u=>{i.delete(u),o.delete(u)},process:u=>{if(a=u,r){s=!0;return}r=!0;const d=n;n=i,i=d,n.forEach(l),n.clear(),r=!1,s&&(s=!1,c.process(u))}};return c}const iA=40;function jS(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=wl.reduce((v,S)=>(v[S]=nA(s),v),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:d,preRender:f,render:p,postRender:_}=o,y=()=>{const v=Fr.useManualTiming,S=v?r.timestamp:performance.now();n=!1,v||(r.delta=i?1e3/60:Math.max(Math.min(S-r.timestamp,iA),1)),r.timestamp=S,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),d.process(r),f.process(r),p.process(r),_.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(y))},g=()=>{n=!0,i=!0,r.isProcessing||t(y)};return{schedule:wl.reduce((v,S)=>{const A=o[S];return v[S]=(T,R=!1,x=!1)=>(n||g(),A.schedule(T,R,x)),v},{}),cancel:v=>{for(let S=0;S<wl.length;S++)o[wl[S]].cancel(v)},state:r,steps:o}}const{schedule:ut,cancel:Ur,state:Yt,steps:Ef}=jS(typeof requestAnimationFrame<"u"?requestAnimationFrame:$n,!0);let gc;function rA(){gc=void 0}const hn={now:()=>(gc===void 0&&hn.set(Yt.isProcessing||Fr.useManualTiming?Yt.timestamp:performance.now()),gc),set:t=>{gc=t,queueMicrotask(rA)}},XS=t=>e=>typeof e=="string"&&e.startsWith(t),qS=XS("--"),sA=XS("var(--"),zm=t=>sA(t)?oA.test(t.split("/*")[0].trim()):!1,oA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function X0(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Io={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ga={...Io,transform:t=>Li(0,1,t)},Al={...Io,default:1},Sa=t=>Math.round(t*1e5)/1e5,Vm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function aA(t){return t==null}const lA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Hm=(t,e)=>n=>!!(typeof n=="string"&&lA.test(n)&&n.startsWith(t)||e&&!aA(n)&&Object.prototype.hasOwnProperty.call(n,e)),$S=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Vm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},cA=t=>Li(0,255,t),Tf={...Io,transform:t=>Math.round(cA(t))},rs={test:Hm("rgb","red"),parse:$S("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Tf.transform(t)+", "+Tf.transform(e)+", "+Tf.transform(n)+", "+Sa(Ga.transform(i))+")"};function uA(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const _h={test:Hm("#"),parse:uA,transform:rs.transform},nl=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),hr=nl("deg"),Ri=nl("%"),Ae=nl("px"),fA=nl("vh"),dA=nl("vw"),q0={...Ri,parse:t=>Ri.parse(t)/100,transform:t=>Ri.transform(t*100)},ro={test:Hm("hsl","hue"),parse:$S("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Ri.transform(Sa(e))+", "+Ri.transform(Sa(n))+", "+Sa(Ga.transform(i))+")"},Ft={test:t=>rs.test(t)||_h.test(t)||ro.test(t),parse:t=>rs.test(t)?rs.parse(t):ro.test(t)?ro.parse(t):_h.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?rs.transform(t):ro.transform(t),getAnimatableNone:t=>{const e=Ft.parse(t);return e.alpha=0,Ft.transform(e)}},hA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function pA(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Vm))==null?void 0:e.length)||0)+(((n=t.match(hA))==null?void 0:n.length)||0)>0}const YS="number",KS="color",mA="var",gA="var(",$0="${}",_A=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function To(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(_A,l=>(Ft.test(l)?(i.color.push(s),r.push(KS),n.push(Ft.parse(l))):l.startsWith(gA)?(i.var.push(s),r.push(mA),n.push(l)):(i.number.push(s),r.push(YS),n.push(parseFloat(l))),++s,$0)).split($0);return{values:n,split:a,indexes:i,types:r}}function vA(t){return To(t).values}function ZS({split:t,types:e}){const n=t.length;return i=>{let r="";for(let s=0;s<n;s++)if(r+=t[s],i[s]!==void 0){const o=e[s];o===YS?r+=Sa(i[s]):o===KS?r+=Ft.transform(i[s]):r+=i[s]}return r}}function xA(t){return ZS(To(t))}const yA=t=>typeof t=="number"?0:Ft.test(t)?Ft.getAnimatableNone(t):t,SA=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:yA(t);function MA(t){const e=To(t);return ZS(e)(e.values.map((i,r)=>SA(i,e.split[r])))}const ui={test:pA,parse:vA,createTransformer:xA,getAnimatableNone:MA};function wf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function EA({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=wf(l,a,t+1/3),s=wf(l,a,t),o=wf(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function nu(t,e){return n=>n>0?e:t}const gt=(t,e,n)=>t+(e-t)*n,Af=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},TA=[_h,rs,ro],wA=t=>TA.find(e=>e.test(t));function Y0(t){const e=wA(t);if(!e)return!1;let n=e.parse(t);return e===ro&&(n=EA(n)),n}const K0=(t,e)=>{const n=Y0(t),i=Y0(e);if(!n||!i)return nu(t,e);const r={...n};return s=>(r.red=Af(n.red,i.red,s),r.green=Af(n.green,i.green,s),r.blue=Af(n.blue,i.blue,s),r.alpha=gt(n.alpha,i.alpha,s),rs.transform(r))},vh=new Set(["none","hidden"]);function AA(t,e){return vh.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function CA(t,e){return n=>gt(t,e,n)}function Gm(t){return typeof t=="number"?CA:typeof t=="string"?zm(t)?nu:Ft.test(t)?K0:PA:Array.isArray(t)?JS:typeof t=="object"?Ft.test(t)?K0:bA:nu}function JS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Gm(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function bA(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Gm(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function RA(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],o=t.indexes[s][i[s]],a=t.values[o]??0;n[r]=a,i[s]++}return n}const PA=(t,e)=>{const n=ui.createTransformer(e),i=To(t),r=To(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?vh.has(t)&&!r.values.length||vh.has(e)&&!i.values.length?AA(t,e):el(JS(RA(i,r),r.values),n):nu(t,e)};function QS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?gt(t,e,n):Gm(t)(t,e)}const DA=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>ut.update(e,n),stop:()=>Ur(e),now:()=>Yt.isProcessing?Yt.timestamp:hn.now()}},eM=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},iu=2e4;function Wm(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<iu;)e+=n,i=t.next(e);return e>=iu?1/0:e}function LA(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(Wm(i),iu);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:Xn(r)}}const Ct={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function xh(t,e){return t*Math.sqrt(1-e*e)}const IA=12;function NA(t,e,n){let i=n;for(let r=1;r<IA;r++)i=i-t(i)/e(i);return i}const Cf=.001;function FA({duration:t=Ct.duration,bounce:e=Ct.bounce,velocity:n=Ct.velocity,mass:i=Ct.mass}){let r,s,o=1-e;o=Li(Ct.minDamping,Ct.maxDamping,o),t=Li(Ct.minDuration,Ct.maxDuration,Xn(t)),o<1?(r=c=>{const u=c*o,d=u*t,f=u-n,p=xh(c,o),_=Math.exp(-d);return Cf-f/p*_},s=c=>{const d=c*o*t,f=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,_=Math.exp(-d),y=xh(Math.pow(c,2),o);return(-r(c)+Cf>0?-1:1)*((f-p)*_)/y}):(r=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-Cf+u*d},s=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=NA(r,s,a);if(t=Nn(t),isNaN(l))return{stiffness:Ct.stiffness,damping:Ct.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const UA=["duration","bounce"],BA=["stiffness","damping","mass"];function Z0(t,e){return e.some(n=>t[n]!==void 0)}function OA(t){let e={velocity:Ct.velocity,stiffness:Ct.stiffness,damping:Ct.damping,mass:Ct.mass,isResolvedFromDuration:!1,...t};if(!Z0(t,BA)&&Z0(t,UA))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Li(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:Ct.mass,stiffness:r,damping:s}}else{const n=FA({...t,velocity:0});e={...e,...n,mass:Ct.mass},e.isResolvedFromDuration=!0}return e}function ru(t=Ct.visualDuration,e=Ct.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=OA({...n,velocity:-Xn(n.velocity||0)}),_=f||0,y=c/(2*Math.sqrt(l*u)),g=o-s,h=Xn(Math.sqrt(l/u)),m=Math.abs(g)<5;i||(i=m?Ct.restSpeed.granular:Ct.restSpeed.default),r||(r=m?Ct.restDelta.granular:Ct.restDelta.default);let v,S,A,T,R,x;if(y<1)A=xh(h,y),T=(_+y*h*g)/A,v=P=>{const D=Math.exp(-y*h*P);return o-D*(T*Math.sin(A*P)+g*Math.cos(A*P))},R=y*h*T+g*A,x=y*h*g-T*A,S=P=>Math.exp(-y*h*P)*(R*Math.sin(A*P)+x*Math.cos(A*P));else if(y===1){v=D=>o-Math.exp(-h*D)*(g+(_+h*g)*D);const P=_+h*g;S=D=>Math.exp(-h*D)*(h*P*D-_)}else{const P=h*Math.sqrt(y*y-1);v=Y=>{const N=Math.exp(-y*h*Y),G=Math.min(P*Y,300);return o-N*((_+y*h*g)*Math.sinh(G)+P*g*Math.cosh(G))/P};const D=(_+y*h*g)/P,O=y*h*D-g*P,q=y*h*g-D*P;S=Y=>{const N=Math.exp(-y*h*Y),G=Math.min(P*Y,300);return N*(O*Math.sinh(G)+q*Math.cosh(G))}}const b={calculatedDuration:p&&d||null,velocity:P=>Nn(S(P)),next:P=>{if(!p&&y<1){const O=Math.exp(-y*h*P),q=Math.sin(A*P),Y=Math.cos(A*P),N=o-O*(T*q+g*Y),G=Nn(O*(R*q+x*Y));return a.done=Math.abs(G)<=i&&Math.abs(o-N)<=r,a.value=a.done?o:N,a}const D=v(P);if(p)a.done=P>=d;else{const O=Nn(S(P));a.done=Math.abs(O)<=i&&Math.abs(o-D)<=r}return a.value=a.done?o:D,a},toString:()=>{const P=Math.min(Wm(b),iu),D=eM(O=>b.next(P*O).value,P,30);return P+"ms "+D},toTransition:()=>{}};return b}ru.applyToOptions=t=>{const e=LA(t,100,ru);return t.ease=e.ease,t.duration=Nn(e.duration),t.type="keyframes",t};const kA=5;function tM(t,e,n){const i=Math.max(e-kA,0);return NS(n-t(i),e-i)}function yh({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],f={done:!1,value:d},p=x=>a!==void 0&&x<a||l!==void 0&&x>l,_=x=>a===void 0?l:l===void 0||Math.abs(a-x)<Math.abs(l-x)?a:l;let y=n*e;const g=d+y,h=o===void 0?g:o(g);h!==g&&(y=h-d);const m=x=>-y*Math.exp(-x/i),v=x=>h+m(x),S=x=>{const b=m(x),P=v(x);f.done=Math.abs(b)<=c,f.value=f.done?h:P};let A,T;const R=x=>{p(f.value)&&(A=x,T=ru({keyframes:[f.value,_(f.value)],velocity:tM(v,x,f.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return R(0),{calculatedDuration:null,next:x=>{let b=!1;return!T&&A===void 0&&(b=!0,S(x),R(x)),A!==void 0&&x>=A?T.next(x-A):(!b&&S(x),f)}}}function zA(t,e,n){const i=[],r=n||Fr.mix||QS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||$n:e;a=el(l,a)}i.push(a)}return i}function VA(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Um(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=zA(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const f=Ha(t[d],t[d+1],u);return a[d](f)};return n?u=>c(Li(t[0],t[s-1],u)):c}function HA(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Ha(0,e,i);t.push(gt(n,1,r))}}function GA(t){const e=[0];return HA(e,t.length-1),e}function WA(t,e){return t.map(n=>n*e)}function jA(t,e){return t.map(()=>e||GS).splice(0,t.length-1)}function Ma({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=Qw(i)?i.map(j0):j0(i),s={done:!1,value:e[0]},o=WA(n&&n.length===e.length?n:GA(e),t),a=VA(o,e,{ease:Array.isArray(r)?r:jA(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const XA=t=>t!==null;function ku(t,{repeat:e,repeatType:n="loop"},i,r=1){const s=t.filter(XA),a=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||i===void 0?s[a]:i}const qA={decay:yh,inertia:yh,tween:Ma,keyframes:Ma,spring:ru};function nM(t){typeof t.type=="string"&&(t.type=qA[t.type])}class jm{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const $A=t=>t/100;class su extends jm{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==hn.now()&&this.tick(hn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;nM(e);const{type:n=Ma,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=n||Ma;l!==Ma&&typeof a[0]!="number"&&(this.mixKeyframes=el($A,QS(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=Wm(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:u,repeat:d,repeatType:f,repeatDelay:p,type:_,onUpdate:y,finalKeyframe:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const h=this.currentTime-c*(this.playbackSpeed>=0?1:-1),m=this.playbackSpeed>=0?h<0:h>r;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,S=i;if(d){const x=Math.min(this.currentTime,r)/a;let b=Math.floor(x),P=x%1;!P&&x>=1&&(P=1),P===1&&b--,b=Math.min(b,d+1),!!(b%2)&&(f==="reverse"?(P=1-P,p&&(P-=p/a)):f==="mirror"&&(S=o)),v=Li(0,1,P)*a}let A;m?(this.delayState.value=u[0],A=this.delayState):A=S.next(v),s&&!m&&(A.value=s(A.value));let{done:T}=A;!m&&l!==null&&(T=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const R=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return R&&_!==yh&&(A.value=ku(u,this.options,g,this.speed)),y&&y(A.value),R&&this.finish(),A}then(e,n){return this.finished.then(e,n)}get duration(){return Xn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Xn(e)}get time(){return Xn(this.currentTime)}set time(e){e=Nn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const n=this.generator.next(e).value;return tM(i=>this.generator.next(i).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(hn.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=Xn(this.currentTime))}play(){var r,s;if(this.isStopped)return;const{driver:e=DA,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(r=this.options).onPlay)==null||s.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(hn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function YA(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const ss=t=>t*180/Math.PI,Sh=t=>{const e=ss(Math.atan2(t[1],t[0]));return Mh(e)},KA={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Sh,rotateZ:Sh,skewX:t=>ss(Math.atan(t[1])),skewY:t=>ss(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Mh=t=>(t=t%360,t<0&&(t+=360),t),J0=Sh,Q0=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),e_=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),ZA={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Q0,scaleY:e_,scale:t=>(Q0(t)+e_(t))/2,rotateX:t=>Mh(ss(Math.atan2(t[6],t[5]))),rotateY:t=>Mh(ss(Math.atan2(-t[2],t[0]))),rotateZ:J0,rotate:J0,skewX:t=>ss(Math.atan(t[4])),skewY:t=>ss(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Eh(t){return t.includes("scale")?1:0}function Th(t,e){if(!t||t==="none")return Eh(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=ZA,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=KA,r=a}if(!r)return Eh(e);const s=i[e],o=r[1].split(",").map(QA);return typeof s=="function"?s(o):o[s]}const JA=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return Th(n,e)};function QA(t){return parseFloat(t.trim())}const No=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Fo=new Set(No),t_=t=>t===Io||t===Ae,eC=new Set(["x","y","z"]),tC=No.filter(t=>!eC.has(t));function nC(t){const e=[];return tC.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const Mr={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>Th(e,"x"),y:(t,{transform:e})=>Th(e,"y")};Mr.translateX=Mr.x;Mr.translateY=Mr.y;const fs=new Set;let wh=!1,Ah=!1,Ch=!1;function iM(){if(Ah){const t=Array.from(fs).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=nC(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))==null||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Ah=!1,wh=!1,fs.forEach(t=>t.complete(Ch)),fs.clear()}function rM(){fs.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Ah=!0)})}function iC(){Ch=!0,rM(),iM(),Ch=!1}class Xm{constructor(e,n,i,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(fs.add(this),wh||(wh=!0,ut.read(rM),ut.resolveKeyframes(iM))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const s=r==null?void 0:r.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const a=i.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}YA(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),fs.delete(this)}cancel(){this.state==="scheduled"&&(fs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const rC=t=>t.startsWith("--");function sM(t,e,n){rC(e)?t.style.setProperty(e,n):t.style[e]=n}const sC={};function oM(t,e){const n=IS(t);return()=>sC[e]??n()}const oC=oM(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),aM=oM(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),la=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,n_={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:la([0,.65,.55,1]),circOut:la([.55,0,1,.45]),backIn:la([.31,.01,.66,-.59]),backOut:la([.33,1.53,.69,.99])};function lM(t,e){if(t)return typeof t=="function"?aM()?eM(t,e):"ease-out":WS(t)?la(t):Array.isArray(t)?t.map(n=>lM(n,e)||n_.easeOut):n_[t]}function aC(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const u={[e]:n};l&&(u.offset=l);const d=lM(a,r);Array.isArray(d)&&(u.easing=d);const f={delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(f.pseudoElement=c),t.animate(u,f)}function cM(t){return typeof t=="function"&&"applyToOptions"in t}function lC({type:t,...e}){return cM(t)&&aM()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class uM extends jm{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,Um(typeof e.type!="string");const c=lC(e);this.animation=aC(n,i,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const u=ku(r,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(u),sM(n,i,u),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,i,r;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((r=(i=this.animation).commitStyles)==null||r.call(i))}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return Xn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Xn(e)}get time(){return Xn(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Nn(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:i,observe:r}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&oC()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),i&&(this.animation.rangeEnd=i),$n):r(this)}}const fM={anticipate:zS,backInOut:kS,circInOut:HS};function cC(t){return t in fM}function uC(t){typeof t.ease=="string"&&cC(t.ease)&&(t.ease=fM[t.ease])}const bf=10;class fC extends uM{constructor(e){uC(e),nM(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new su({...o,autoplay:!1}),l=Math.max(bf,hn.now()-this.startTime),c=Li(0,bf,l-bf),u=a.sample(l).value,{name:d}=this.options;s&&d&&sM(s,d,u),n.setWithVelocity(a.sample(Math.max(0,l-c)).value,u,c),a.stop()}}const i_=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(ui.test(t)||t==="0")&&!t.startsWith("url("));function dC(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function hC(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=i_(r,e),a=i_(s,e);return!o||!a?!1:dC(t)||(n==="spring"||cM(n))&&i}function bh(t){t.duration=0,t.type="keyframes"}const dM=new Set(["opacity","clipPath","filter","transform"]),pC=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function mC(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&pC.test(t[e]))return!0;return!1}const gC=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),_C=IS(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function vC(t){var d;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:o,keyframes:a}=t;if(!(((d=e==null?void 0:e.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=e.owner.getProps();return _C()&&n&&(dM.has(n)||gC.has(n)&&mC(a))&&(n!=="transform"||!u)&&!c&&!i&&r!=="mirror"&&s!==0&&o!=="inertia"}const xC=40;class yC extends jm{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:u,...d}){var _;super(),this.stop=()=>{var y,g;this._animation&&(this._animation.stop(),(y=this.stopTimeline)==null||y.call(this)),(g=this.keyframeResolver)==null||g.cancel()},this.createdAt=hn.now();const f={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,name:l,motionValue:c,element:u,...d},p=(u==null?void 0:u.KeyframeResolver)||Xm;this.keyframeResolver=new p(a,(y,g,h)=>this.onKeyframesResolved(y,g,f,!h),l,c,u),(_=this.keyframeResolver)==null||_.scheduleResolve()}onKeyframesResolved(e,n,i,r){var h,m;this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:u}=i;this.resolvedAt=hn.now();let d=!0;hC(e,s,o,a)||(d=!1,(Fr.instantAnimations||!l)&&(u==null||u(ku(e,i,n))),e[0]=e[e.length-1],bh(i),i.repeat=0);const p={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>xC?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},_=d&&!c&&vC(p),y=(m=(h=p.motionValue)==null?void 0:h.owner)==null?void 0:m.current;let g;if(_)try{g=new fC({...p,element:y})}catch{g=new su(p)}else g=new su(p);g.finished.then(()=>{this.notifyFinished()}).catch($n),this.pendingTimeline&&(this.stopTimeline=g.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=g}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),iC()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function hM(t,e,n,i=0,r=1){const s=Array.from(t).sort((c,u)=>c.sortNodePosition(u)).indexOf(e),o=t.size,a=(o-1)*i;return typeof n=="function"?n(s,o):r===1?s*i:a-s*i}const SC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function MC(t){const e=SC.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function pM(t,e,n=1){const[i,r]=MC(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return PS(o)?parseFloat(o):o}return zm(r)?pM(r,e,n+1):r}const EC={type:"spring",stiffness:500,damping:25,restSpeed:10},TC=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),wC={type:"keyframes",duration:.8},AC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},CC=(t,{keyframes:e})=>e.length>2?wC:Fo.has(t)?t.startsWith("scale")?TC(e[1]):EC:AC;function mM(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...i}=t;return{...e,...i}}return t}function qm(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?mM(n,t):n}const bC=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function RC(t){for(const e in t)if(!bC.has(e))return!0;return!1}const $m=(t,e,n,i={},r,s)=>o=>{const a=qm(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Nn(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};RC(a)||Object.assign(u,CC(t,u)),u.duration&&(u.duration=Nn(u.duration)),u.repeatDelay&&(u.repeatDelay=Nn(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(bh(u),u.delay===0&&(d=!0)),(Fr.instantAnimations||Fr.skipAnimations||r!=null&&r.shouldSkipAnimations)&&(d=!0,bh(u),u.delay=0),u.allowFlatten=!a.type&&!a.ease,d&&!s&&e.get()!==void 0){const f=ku(u.keyframes,a);if(f!==void 0){ut.update(()=>{u.onUpdate(f),u.onComplete()});return}}return a.isSync?new su(u):new yC(u)};function r_(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Ym(t,e,n,i){if(typeof e=="function"){const[r,s]=r_(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=r_(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function ds(t,e,n){const i=t.getProps();return Ym(i,e,n!==void 0?n:i.custom,t)}const gM=new Set(["width","height","top","left","right","bottom",...No]),s_=30,PC=t=>!isNaN(parseFloat(t));class DC{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var s;const r=hn.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=hn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=PC(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Bm);const i=this.events[e].add(n);return e==="change"?()=>{i(),ut.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=hn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>s_)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,s_);return NS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function wo(t,e){return new DC(t,e)}const Rh=t=>Array.isArray(t);function LC(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,wo(n))}function IC(t){return Rh(t)?t[t.length-1]||0:t}function NC(t,e){const n=ds(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=IC(s[o]);LC(t,o,a)}}const Kt=t=>!!(t&&t.getVelocity);function FC(t){return!!(Kt(t)&&t.add)}function Ph(t,e){const n=t.getValue("willChange");if(FC(n))return n.add(e);if(!n&&Fr.WillChange){const i=new Fr.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function Km(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const UC="framerAppearId",_M="data-"+Km(UC);function vM(t){return t.props[_M]}function BC({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function xM(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s,transitionEnd:o,...a}=e;const l=t.getDefaultTransition();s=s?mM(s,l):l;const c=s==null?void 0:s.reduceMotion;i&&(s=i);const u=[],d=r&&t.animationState&&t.animationState.getState()[r];for(const f in a){const p=t.getValue(f,t.latestValues[f]??null),_=a[f];if(_===void 0||d&&BC(d,f))continue;const y={delay:n,...qm(s||{},f)},g=p.get();if(g!==void 0&&!p.isAnimating()&&!Array.isArray(_)&&_===g&&!y.velocity){ut.update(()=>p.set(_));continue}let h=!1;if(window.MotionHandoffAnimation){const S=vM(t);if(S){const A=window.MotionHandoffAnimation(S,f,ut);A!==null&&(y.startTime=A,h=!0)}}Ph(t,f);const m=c??t.shouldReduceMotion;p.start($m(f,p,_,m&&gM.has(f)?{type:!1}:y,t,h));const v=p.animation;v&&u.push(v)}if(o){const f=()=>ut.update(()=>{o&&NC(t,o)});u.length?Promise.all(u).then(f):f()}return u}function Dh(t,e,n={}){var l;const i=ds(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(xM(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=r;return OC(t,e,c,u,d,f,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[c,u]=a==="beforeChildren"?[s,o]:[o,s];return c().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function OC(t,e,n=0,i=0,r=0,s=1,o){const a=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),a.push(Dh(l,e,{...o,delay:n+(typeof i=="function"?0:i)+hM(t.variantChildren,l,i,r,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}function kC(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Dh(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Dh(t,e,n);else{const r=typeof e=="function"?ds(t,e,n.custom):e;i=Promise.all(xM(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const zC={test:t=>t==="auto",parse:t=>t},yM=t=>e=>e.test(t),SM=[Io,Ae,Ri,hr,dA,fA,zC],o_=t=>SM.find(yM(t));function VC(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||LS(t):!0}const HC=new Set(["brightness","contrast","saturate","opacity"]);function GC(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Vm)||[];if(!i)return t;const r=n.replace(i,"");let s=HC.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const WC=/\b([a-z-]*)\(.*?\)/gu,Lh={...ui,getAnimatableNone:t=>{const e=t.match(WC);return e?e.map(GC).join(" "):t}},Ih={...ui,getAnimatableNone:t=>{const e=ui.parse(t);return ui.createTransformer(t)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},a_={...Io,transform:Math.round},jC={rotate:hr,rotateX:hr,rotateY:hr,rotateZ:hr,scale:Al,scaleX:Al,scaleY:Al,scaleZ:Al,skew:hr,skewX:hr,skewY:hr,distance:Ae,translateX:Ae,translateY:Ae,translateZ:Ae,x:Ae,y:Ae,z:Ae,perspective:Ae,transformPerspective:Ae,opacity:Ga,originX:q0,originY:q0,originZ:Ae},Zm={borderWidth:Ae,borderTopWidth:Ae,borderRightWidth:Ae,borderBottomWidth:Ae,borderLeftWidth:Ae,borderRadius:Ae,borderTopLeftRadius:Ae,borderTopRightRadius:Ae,borderBottomRightRadius:Ae,borderBottomLeftRadius:Ae,width:Ae,maxWidth:Ae,height:Ae,maxHeight:Ae,top:Ae,right:Ae,bottom:Ae,left:Ae,inset:Ae,insetBlock:Ae,insetBlockStart:Ae,insetBlockEnd:Ae,insetInline:Ae,insetInlineStart:Ae,insetInlineEnd:Ae,padding:Ae,paddingTop:Ae,paddingRight:Ae,paddingBottom:Ae,paddingLeft:Ae,paddingBlock:Ae,paddingBlockStart:Ae,paddingBlockEnd:Ae,paddingInline:Ae,paddingInlineStart:Ae,paddingInlineEnd:Ae,margin:Ae,marginTop:Ae,marginRight:Ae,marginBottom:Ae,marginLeft:Ae,marginBlock:Ae,marginBlockStart:Ae,marginBlockEnd:Ae,marginInline:Ae,marginInlineStart:Ae,marginInlineEnd:Ae,fontSize:Ae,backgroundPositionX:Ae,backgroundPositionY:Ae,...jC,zIndex:a_,fillOpacity:Ga,strokeOpacity:Ga,numOctaves:a_},XC={...Zm,color:Ft,backgroundColor:Ft,outlineColor:Ft,fill:Ft,stroke:Ft,borderColor:Ft,borderTopColor:Ft,borderRightColor:Ft,borderBottomColor:Ft,borderLeftColor:Ft,filter:Lh,WebkitFilter:Lh,mask:Ih,WebkitMask:Ih},MM=t=>XC[t],qC=new Set([Lh,Ih]);function EM(t,e){let n=MM(t);return qC.has(n)||(n=ui),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const $C=new Set(["auto","none","0"]);function YC(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!$C.has(s)&&To(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=EM(n,r)}class KC extends Xm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let u=0;u<e.length;u++){let d=e[u];if(typeof d=="string"&&(d=d.trim(),zm(d))){const f=pM(d,n.current);f!==void 0&&(e[u]=f),u===e.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!gM.has(i)||e.length!==2)return;const[r,s]=e,o=o_(r),a=o_(s),l=X0(r),c=X0(s);if(l!==c&&Mr[i]){this.needsMeasurement=!0;return}if(o!==a)if(t_(o)&&t_(a))for(let u=0;u<e.length;u++){const d=e[u];typeof d=="string"&&(e[u]=parseFloat(d))}else Mr[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||VC(e[r]))&&i.push(r);i.length&&YC(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Mr[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const s=i.length-1,o=i[s];i[s]=Mr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function TM(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let i=document;const r=(n==null?void 0:n[t])??i.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t).filter(i=>i!=null)}const wM=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function _c(t){return DS(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Jm}=jS(queueMicrotask,!1),ii={x:!1,y:!1};function AM(){return ii.x||ii.y}function ZC(t){return t==="x"||t==="y"?ii[t]?null:(ii[t]=!0,()=>{ii[t]=!1}):ii.x||ii.y?null:(ii.x=ii.y=!0,()=>{ii.x=ii.y=!1})}function CM(t,e){const n=TM(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function JC(t){return!(t.pointerType==="touch"||AM())}function QC(t,e,n={}){const[i,r,s]=CM(t,n);return i.forEach(o=>{let a=!1,l=!1,c;const u=()=>{o.removeEventListener("pointerleave",_)},d=g=>{c&&(c(g),c=void 0),u()},f=g=>{a=!1,window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",f),l&&(l=!1,d(g))},p=()=>{a=!0,window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",f,r)},_=g=>{if(g.pointerType!=="touch"){if(a){l=!0;return}d(g)}},y=g=>{if(!JC(g))return;l=!1;const h=e(o,g);typeof h=="function"&&(c=h,o.addEventListener("pointerleave",_,r))};o.addEventListener("pointerenter",y,r),o.addEventListener("pointerdown",p,r)}),s}const bM=(t,e)=>e?t===e?!0:bM(t,e.parentElement):!1,Qm=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,eb=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function tb(t){return eb.has(t.tagName)||t.isContentEditable===!0}const nb=new Set(["INPUT","SELECT","TEXTAREA"]);function ib(t){return nb.has(t.tagName)||t.isContentEditable===!0}const vc=new WeakSet;function l_(t){return e=>{e.key==="Enter"&&t(e)}}function Rf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const rb=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=l_(()=>{if(vc.has(n))return;Rf(n,"down");const r=l_(()=>{Rf(n,"up")}),s=()=>Rf(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function c_(t){return Qm(t)&&!AM()}const u_=new WeakSet;function sb(t,e,n={}){const[i,r,s]=CM(t,n),o=a=>{const l=a.currentTarget;if(!c_(a)||u_.has(a))return;vc.add(l),n.stopPropagation&&u_.add(a);const c=e(l,a),u=(p,_)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",f),vc.has(l)&&vc.delete(l),c_(p)&&typeof c=="function"&&c(p,{success:_})},d=p=>{u(p,l===window||l===document||n.useGlobalTarget||bM(l,p.target))},f=p=>{u(p,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",f,r)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),_c(a)&&(a.addEventListener("focus",c=>rb(c,r)),!tb(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function eg(t){return DS(t)&&"ownerSVGElement"in t}const xc=new WeakMap;let pr;const RM=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:eg(i)&&"getBBox"in i?i.getBBox()[e]:i[n],ob=RM("inline","width","offsetWidth"),ab=RM("block","height","offsetHeight");function lb({target:t,borderBoxSize:e}){var n;(n=xc.get(t))==null||n.forEach(i=>{i(t,{get width(){return ob(t,e)},get height(){return ab(t,e)}})})}function cb(t){t.forEach(lb)}function ub(){typeof ResizeObserver>"u"||(pr=new ResizeObserver(cb))}function fb(t,e){pr||ub();const n=TM(t);return n.forEach(i=>{let r=xc.get(i);r||(r=new Set,xc.set(i,r)),r.add(e),pr==null||pr.observe(i)}),()=>{n.forEach(i=>{const r=xc.get(i);r==null||r.delete(e),r!=null&&r.size||pr==null||pr.unobserve(i)})}}const yc=new Set;let so;function db(){so=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};yc.forEach(e=>e(t))},window.addEventListener("resize",so)}function hb(t){return yc.add(t),so||db(),()=>{yc.delete(t),!yc.size&&typeof so=="function"&&(window.removeEventListener("resize",so),so=void 0)}}function f_(t,e){return typeof t=="function"?hb(t):fb(t,e)}function pb(t){return eg(t)&&t.tagName==="svg"}const mb=[...SM,Ft,ui],gb=t=>mb.find(yM(t)),d_=()=>({translate:0,scale:1,origin:0,originPoint:0}),oo=()=>({x:d_(),y:d_()}),h_=()=>({min:0,max:0}),kt=()=>({x:h_(),y:h_()}),_b=new WeakMap;function zu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Wa(t){return typeof t=="string"||Array.isArray(t)}const tg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ng=["initial",...tg];function Vu(t){return zu(t.animate)||ng.some(e=>Wa(t[e]))}function PM(t){return!!(Vu(t)||t.variants)}function vb(t,e,n){for(const i in e){const r=e[i],s=n[i];if(Kt(r))t.addValue(i,r);else if(Kt(s))t.addValue(i,wo(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,wo(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const Nh={current:null},DM={current:!1},xb=typeof window<"u";function yb(){if(DM.current=!0,!!xb)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Nh.current=t.matches;t.addEventListener("change",e),e()}else Nh.current=!1}const p_=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let ou={};function LM(t){ou=t}function Sb(){return ou}class Mb{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Xm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=hn.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,ut.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Vu(n),this.isVariantNode=PM(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const _=f[p];c[p]!==void 0&&Kt(_)&&_.set(c[p])}}mount(e){var n,i;if(this.hasBeenMounted)for(const r in this.initialValues)(n=this.values.get(r))==null||n.jump(this.initialValues[r]),this.latestValues[r]=this.initialValues[r];this.current=e,_b.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(DM.current||yb(),this.shouldReduceMotion=Nh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Ur(this.notifyUpdate),Ur(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&dM.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:c,duration:u}=n.accelerate,d=new uM({element:this.current,name:e,keyframes:a,times:l,ease:c,duration:Nn(u)}),f=o(d);this.valueSubscriptions.set(e,()=>{f(),d.cancel()});return}const i=Fo.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&ut.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s&&s(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in ou){const n=ou[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):kt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<p_.length;i++){const r=p_[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=vb(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=wo(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(PS(i)||LS(i))?i=parseFloat(i):!gb(i)&&ui.test(n)&&(i=EM(e,n)),this.setBaseTarget(e,Kt(i)?i.get():i)),Kt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const o=Ym(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(i=o[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Kt(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Bm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Jm.render(this.render)}}class IM extends Mb{constructor(){super(...arguments),this.KeyframeResolver=KC}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const i=e.style;return i?i[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Kt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Hr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function NM({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function Eb({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function Tb(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Pf(t){return t===void 0||t===1}function Fh({scale:t,scaleX:e,scaleY:n}){return!Pf(t)||!Pf(e)||!Pf(n)}function Zr(t){return Fh(t)||FM(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function FM(t){return m_(t.x)||m_(t.y)}function m_(t){return t&&t!=="0%"}function au(t,e,n){const i=t-n,r=e*i;return n+r}function g_(t,e,n,i,r){return r!==void 0&&(t=au(t,r,i)),au(t,n,i)+e}function Uh(t,e=0,n=1,i,r){t.min=g_(t.min,e,n,i,r),t.max=g_(t.max,e,n,i,r)}function UM(t,{x:e,y:n}){Uh(t.x,e.translate,e.scale,e.originPoint),Uh(t.y,n.translate,n.scale,n.originPoint)}const __=.999999999999,v_=1.0000000000001;function wb(t,e,n,i=!1){var a;const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let l=0;l<r;l++){s=n[l],o=s.projectionDelta;const{visualElement:c}=s.options;c&&c.props.style&&c.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(Si(t.x,-s.scroll.offset.x),Si(t.y,-s.scroll.offset.y)),o&&(e.x*=o.x.scale,e.y*=o.y.scale,UM(t,o)),i&&Zr(s.latestValues)&&Sc(t,s.latestValues,(a=s.layout)==null?void 0:a.layoutBox))}e.x<v_&&e.x>__&&(e.x=1),e.y<v_&&e.y>__&&(e.y=1)}function Si(t,e){t.min+=e,t.max+=e}function x_(t,e,n,i,r=.5){const s=gt(t.min,t.max,r);Uh(t,e,n,s,i)}function y_(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function Sc(t,e,n){const i=n??t;x_(t.x,y_(e.x,i.x),e.scaleX,e.scale,e.originX),x_(t.y,y_(e.y,i.y),e.scaleY,e.scale,e.originY)}function BM(t,e){return NM(Tb(t.getBoundingClientRect(),e))}function Ab(t,e,n){const i=BM(t,n),{scroll:r}=e;return r&&(Si(i.x,r.offset.x),Si(i.y,r.offset.y)),i}const Cb={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},bb=No.length;function Rb(t,e,n){let i="",r=!0;for(let s=0;s<bb;s++){const o=No[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number")l=a===(o.startsWith("scale")?1:0);else{const c=parseFloat(a);l=o.startsWith("scale")?c===1:c===0}if(!l||n){const c=wM(a,Zm[o]);if(!l){r=!1;const u=Cb[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function ig(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(Fo.has(l)){o=!0;continue}else if(qS(l)){r[l]=c;continue}else{const u=wM(c,Zm[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=Rb(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}function OM(t,{style:e,vars:n},i,r){const s=t.style;let o;for(o in e)s[o]=e[o];r==null||r.applyProjectionStyles(s,i);for(o in n)s.setProperty(o,n[o])}function S_(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Xo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Ae.test(t))t=parseFloat(t);else return t;const n=S_(t,e.target.x),i=S_(t,e.target.y);return`${n}% ${i}%`}},Pb={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=ui.parse(t);if(r.length>5)return i;const s=ui.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=gt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}},Bh={borderRadius:{...Xo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Xo,borderTopRightRadius:Xo,borderBottomLeftRadius:Xo,borderBottomRightRadius:Xo,boxShadow:Pb};function kM(t,{layout:e,layoutId:n}){return Fo.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Bh[t]||t==="opacity")}function rg(t,e,n){var o;const i=t.style,r=e==null?void 0:e.style,s={};if(!i)return s;for(const a in i)(Kt(i[a])||r&&Kt(r[a])||kM(a,t)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(s[a]=i[a]);return s}function Db(t){return window.getComputedStyle(t)}class Lb extends IM{constructor(){super(...arguments),this.type="html",this.renderInstance=OM}readValueFromInstance(e,n){var i;if(Fo.has(n))return(i=this.projection)!=null&&i.isProjecting?Eh(n):JA(e,n);{const r=Db(e),s=(qS(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return BM(e,n)}build(e,n,i){ig(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return rg(e,n,i)}}const Ib={offset:"stroke-dashoffset",array:"stroke-dasharray"},Nb={offset:"strokeDashoffset",array:"strokeDasharray"};function Fb(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?Ib:Nb;t[s.offset]=`${-i}`,t[s.array]=`${e} ${n}`}const Ub=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function zM(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},l,c,u){if(ig(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:f}=t;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),f.transform&&(f.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete d.transformBox);for(const p of Ub)d[p]!==void 0&&(f[p]=d[p],delete d[p]);e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),r!==void 0&&Fb(d,r,s,o,!1)}const VM=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),HM=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Bb(t,e,n,i){OM(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(VM.has(r)?r:Km(r),e.attrs[r])}function GM(t,e,n){const i=rg(t,e,n);for(const r in t)if(Kt(t[r])||Kt(e[r])){const s=No.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}class Ob extends IM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=kt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Fo.has(n)){const i=MM(n);return i&&i.default||0}return n=VM.has(n)?n:Km(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return GM(e,n,i)}build(e,n,i){zM(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){Bb(e,n,i,r)}mount(e){this.isSVGTag=HM(e.tagName),super.mount(e)}}const kb=ng.length;function WM(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?WM(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<kb;n++){const i=ng[n],r=t.props[i];(Wa(r)||r===!1)&&(e[i]=r)}return e}function jM(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const zb=[...tg].reverse(),Vb=tg.length;function Hb(t){return e=>Promise.all(e.map(({animation:n,options:i})=>kC(t,n,i)))}function Gb(t){let e=Hb(t),n=M_(),i=!0,r=!1;const s=c=>(u,d)=>{var p;const f=ds(t,d,c==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);if(f){const{transition:_,transitionEnd:y,...g}=f;u={...u,...g,...y}}return u};function o(c){e=c(t)}function a(c){const{props:u}=t,d=WM(t.parent)||{},f=[],p=new Set;let _={},y=1/0;for(let h=0;h<Vb;h++){const m=zb[h],v=n[m],S=u[m]!==void 0?u[m]:d[m],A=Wa(S),T=m===c?v.isActive:null;T===!1&&(y=h);let R=S===d[m]&&S!==u[m]&&A;if(R&&(i||r)&&t.manuallyAnimateOnMount&&(R=!1),v.protectedKeys={..._},!v.isActive&&T===null||!S&&!v.prevProp||zu(S)||typeof S=="boolean")continue;if(m==="exit"&&v.isActive&&T!==!0){v.prevResolvedValues&&(_={..._,...v.prevResolvedValues});continue}const x=Wb(v.prevProp,S);let b=x||m===c&&v.isActive&&!R&&A||h>y&&A,P=!1;const D=Array.isArray(S)?S:[S];let O=D.reduce(s(m),{});T===!1&&(O={});const{prevResolvedValues:q={}}=v,Y={...q,...O},N=L=>{b=!0,p.has(L)&&(P=!0,p.delete(L)),v.needsAnimating[L]=!0;const k=t.getValue(L);k&&(k.liveStyle=!1)};for(const L in Y){const k=O[L],$=q[L];if(_.hasOwnProperty(L))continue;let U=!1;Rh(k)&&Rh($)?U=!jM(k,$):U=k!==$,U?k!=null?N(L):p.add(L):k!==void 0&&p.has(L)?N(L):v.protectedKeys[L]=!0}v.prevProp=S,v.prevResolvedValues=O,v.isActive&&(_={..._,...O}),(i||r)&&t.blockInitialAnimation&&(b=!1);const G=R&&x;b&&(!G||P)&&f.push(...D.map(L=>{const k={type:m};if(typeof L=="string"&&(i||r)&&!G&&t.manuallyAnimateOnMount&&t.parent){const{parent:$}=t,U=ds($,L);if($.enteringChildren&&U){const{delayChildren:Z}=U.transition||{};k.delay=hM($.enteringChildren,t,Z)}}return{animation:L,options:k}}))}if(p.size){const h={};if(typeof u.initial!="boolean"){const m=ds(t,Array.isArray(u.initial)?u.initial[0]:u.initial);m&&m.transition&&(h.transition=m.transition)}p.forEach(m=>{const v=t.getBaseTarget(m),S=t.getValue(m);S&&(S.liveStyle=!0),h[m]=v??null}),f.push({animation:h})}let g=!!f.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(g=!1),i=!1,r=!1,g?e(f):Promise.resolve()}function l(c,u){var f;if(n[c].isActive===u)return Promise.resolve();(f=t.variantChildren)==null||f.forEach(p=>{var _;return(_=p.animationState)==null?void 0:_.setActive(c,u)}),n[c].isActive=u;const d=a(c);for(const p in n)n[p].protectedKeys={};return d}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=M_(),r=!0}}}function Wb(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!jM(e,t):!1}function Wr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function M_(){return{animate:Wr(!0),whileInView:Wr(),whileHover:Wr(),whileTap:Wr(),whileDrag:Wr(),whileFocus:Wr(),exit:Wr()}}function Oh(t,e){t.min=e.min,t.max=e.max}function Qn(t,e){Oh(t.x,e.x),Oh(t.y,e.y)}function E_(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const XM=1e-4,jb=1-XM,Xb=1+XM,qM=.01,qb=0-qM,$b=0+qM;function pn(t){return t.max-t.min}function Yb(t,e,n){return Math.abs(t-e)<=n}function T_(t,e,n,i=.5){t.origin=i,t.originPoint=gt(e.min,e.max,t.origin),t.scale=pn(n)/pn(e),t.translate=gt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=jb&&t.scale<=Xb||isNaN(t.scale))&&(t.scale=1),(t.translate>=qb&&t.translate<=$b||isNaN(t.translate))&&(t.translate=0)}function Ea(t,e,n,i){T_(t.x,e.x,n.x,i?i.originX:void 0),T_(t.y,e.y,n.y,i?i.originY:void 0)}function w_(t,e,n,i=0){const r=i?gt(n.min,n.max,i):n.min;t.min=r+e.min,t.max=t.min+pn(e)}function Kb(t,e,n,i){w_(t.x,e.x,n.x,i==null?void 0:i.x),w_(t.y,e.y,n.y,i==null?void 0:i.y)}function A_(t,e,n,i=0){const r=i?gt(n.min,n.max,i):n.min;t.min=e.min-r,t.max=t.min+pn(e)}function lu(t,e,n,i){A_(t.x,e.x,n.x,i==null?void 0:i.x),A_(t.y,e.y,n.y,i==null?void 0:i.y)}function C_(t,e,n,i,r){return t-=e,t=au(t,1/n,i),r!==void 0&&(t=au(t,1/r,i)),t}function Zb(t,e=0,n=1,i=.5,r,s=t,o=t){if(Ri.test(e)&&(e=parseFloat(e),e=gt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=gt(s.min,s.max,i);t===s&&(a-=e),t.min=C_(t.min,e,n,a,r),t.max=C_(t.max,e,n,a,r)}function b_(t,e,[n,i,r],s,o){Zb(t,e[n],e[i],e[r],e.scale,s,o)}const Jb=["x","scaleX","originX"],Qb=["y","scaleY","originY"];function R_(t,e,n,i){b_(t.x,e,Jb,n?n.x:void 0,i?i.x:void 0),b_(t.y,e,Qb,n?n.y:void 0,i?i.y:void 0)}function P_(t){return t.translate===0&&t.scale===1}function $M(t){return P_(t.x)&&P_(t.y)}function D_(t,e){return t.min===e.min&&t.max===e.max}function eR(t,e){return D_(t.x,e.x)&&D_(t.y,e.y)}function L_(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function YM(t,e){return L_(t.x,e.x)&&L_(t.y,e.y)}function I_(t){return pn(t.x)/pn(t.y)}function N_(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function yi(t){return[t("x"),t("y")]}function tR(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:f,skewX:p,skewY:_}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),d&&(i+=`rotateX(${d}deg) `),f&&(i+=`rotateY(${f}deg) `),p&&(i+=`skewX(${p}deg) `),_&&(i+=`skewY(${_}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const KM=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],nR=KM.length,F_=t=>typeof t=="string"?parseFloat(t):t,U_=t=>typeof t=="number"||Ae.test(t);function iR(t,e,n,i,r,s){r?(t.opacity=gt(0,n.opacity??1,rR(i)),t.opacityExit=gt(e.opacity??1,0,sR(i))):s&&(t.opacity=gt(e.opacity??1,n.opacity??1,i));for(let o=0;o<nR;o++){const a=KM[o];let l=B_(e,a),c=B_(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||U_(l)===U_(c)?(t[a]=Math.max(gt(F_(l),F_(c),i),0),(Ri.test(c)||Ri.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=gt(e.rotate||0,n.rotate||0,i))}function B_(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const rR=ZM(0,.5,VS),sR=ZM(.5,.95,$n);function ZM(t,e,n){return i=>i<t?0:i>e?1:n(Ha(t,e,i))}function oR(t,e,n){const i=Kt(t)?t:wo(t);return i.start($m("",i,e,n)),i.animation}function ja(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const aR=(t,e)=>t.depth-e.depth;class lR{constructor(){this.children=[],this.isDirty=!1}add(e){Fm(this.children,e),this.isDirty=!0}remove(e){tu(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(aR),this.isDirty=!1,this.children.forEach(e)}}function cR(t,e){const n=hn.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Ur(i),t(s-e))};return ut.setup(i,!0),()=>Ur(i)}function Mc(t){return Kt(t)?t.get():t}class uR{constructor(){this.members=[]}add(e){Fm(this.members,e);for(let n=this.members.length-1;n>=0;n--){const i=this.members[n];if(i===e||i===this.lead||i===this.prevLead)continue;const r=i.instance;(!r||r.isConnected===!1)&&!i.snapshot&&(tu(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(tu(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let i=this.members.indexOf(e)-1;i>=0;i--){const r=this.members[i];if(r.isPresent!==!1&&((n=r.instance)==null?void 0:n.isConnected)!==!1)return this.promote(r),!0}return!1}promote(e,n){var r;const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();const{layoutDependency:s}=i.options,{layoutDependency:o}=e.options;(s===void 0||s!==o)&&(e.resumeFrom=i,n&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),(r=e.root)!=null&&r.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,i,r,s,o;(i=(n=e.options).onExitComplete)==null||i.call(n),(o=(r=e.resumingFrom)==null?void 0:(s=r.options).onExitComplete)==null||o.call(s)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Ec={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Df=["","X","Y","Z"],fR=1e3;let dR=0;function Lf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function JM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=vM(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ut,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&JM(i)}function QM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=dR++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(mR),this.nodes.forEach(SR),this.nodes.forEach(MR),this.nodes.forEach(gR)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new lR)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Bm),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=eg(o)&&!pb(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let u,d=0;const f=()=>this.root.updateBlockedByResize=!1;ut.read(()=>{d=window.innerWidth}),t(o,()=>{const p=window.innerWidth;p!==d&&(d=p,this.root.updateBlockedByResize=!0,u&&u(),u=cR(f,250),Ec.hasAnimatedSinceResize&&(Ec.hasAnimatedSinceResize=!1,this.nodes.forEach(z_)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:f,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const _=this.options.transition||c.getDefaultTransition()||CR,{onLayoutAnimationStart:y,onLayoutAnimationComplete:g}=c.getProps(),h=!this.targetLayout||!YM(this.targetLayout,p),m=!d&&f;if(this.options.layoutRoot||this.resumeFrom||m||d&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const v={...qm(_,"layout"),onPlay:y,onComplete:g};(c.shouldReduceMotion||this.options.layoutRoot)&&(v.delay=0,v.type=!1),this.startAnimation(v),this.setAnimationOrigin(u,m)}else d||z_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ur(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ER),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&JM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,(typeof d.latestValues.x=="string"||typeof d.latestValues.y=="string")&&(d.isLayoutDirty=!0),d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(vR),this.nodes.forEach(O_);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(k_);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(xR),this.nodes.forEach(yR),this.nodes.forEach(hR),this.nodes.forEach(pR)):this.nodes.forEach(k_),this.clearAllSnapshots();const a=hn.now();Yt.delta=Li(0,1e3/60,a-Yt.timestamp),Yt.timestamp=a,Yt.isProcessing=!0,Ef.update.process(Yt),Ef.preRender.process(Yt),Ef.render.process(Yt),Yt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Jm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(_R),this.sharedNodes.forEach(TR)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ut.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ut.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!pn(this.snapshot.measuredBox.x)&&!pn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=kt()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!$M(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||Zr(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),bR(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return kt();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(RR))){const{scroll:u}=this.root;u&&(Si(a.x,u.offset.x),Si(a.y,u.offset.y))}return a}removeElementScroll(o){var l;const a=kt();if(Qn(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:f}=u;u!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&Qn(a,o),Si(a.x,d.offset.x),Si(a.y,d.offset.y))}return a}applyTransform(o,a=!1,l){var u,d;const c=l||kt();Qn(c,o);for(let f=0;f<this.path.length;f++){const p=this.path[f];!a&&p.options.layoutScroll&&p.scroll&&p!==p.root&&(Si(c.x,-p.scroll.offset.x),Si(c.y,-p.scroll.offset.y)),Zr(p.latestValues)&&Sc(c,p.latestValues,(u=p.layout)==null?void 0:u.layoutBox)}return Zr(this.latestValues)&&Sc(c,this.latestValues,(d=this.layout)==null?void 0:d.layoutBox),c}removeTransform(o){var l;const a=kt();Qn(a,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!Zr(u.latestValues))continue;let d;u.instance&&(Fh(u.latestValues)&&u.updateSnapshot(),d=kt(),Qn(d,u.measurePageBox())),R_(a,u.latestValues,(l=u.snapshot)==null?void 0:l.layoutBox,d)}return Zr(this.latestValues)&&R_(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Yt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var p;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:d}=this.options;if(!this.layout||!(u||d))return;this.resolvedRelativeTargetAt=Yt.timestamp;const f=this.getClosestProjectingParent();f&&this.linkedParentVersion!==f.layoutVersion&&!f.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=kt(),this.targetWithTransforms=kt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Kb(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Qn(this.target,this.layout.layoutBox),UM(this.target,this.targetDelta)):Qn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Fh(this.parent.latestValues)||FM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=kt(),this.relativeTargetOrigin=kt(),lu(this.relativeTargetOrigin,a,l,this.options.layoutAnchor||void 0),Qn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var _;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(_=this.parent)!=null&&_.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Yt.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;Qn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,f=this.treeScale.y;wb(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=kt());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(E_(this.prevProjectionDelta.x,this.projectionDelta.x),E_(this.prevProjectionDelta.y,this.projectionDelta.y)),Ea(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==f||!N_(this.projectionDelta.x,this.prevProjectionDelta.x)||!N_(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=oo(),this.projectionDelta=oo(),this.projectionDeltaWithTransform=oo()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=oo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=kt(),p=l?l.source:void 0,_=this.layout?this.layout.source:void 0,y=p!==_,g=this.getStack(),h=!g||g.members.length<=1,m=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(AR));this.animationProgress=0;let v;this.mixTargetDelta=S=>{const A=S/1e3;V_(d.x,o.x,A),V_(d.y,o.y,A),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(lu(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),wR(this.relativeTarget,this.relativeTargetOrigin,f,A),v&&eR(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=kt()),Qn(v,this.relativeTarget)),y&&(this.animationValues=u,iR(u,c,this.latestValues,A,m,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=A},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(Ur(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ut.update(()=>{Ec.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=wo(0)),this.motionValue.jump(0,!1),this.currentAnimation=oR(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),o.onUpdate&&o.onUpdate(u)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(fR),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&e1(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||kt();const d=pn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const f=pn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}Qn(a,l),Sc(a,u),Ea(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new uR),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Lf("z",o,c,this.animationValues);for(let u=0;u<Df.length;u++)Lf(`rotate${Df[u]}`,o,c,this.animationValues),Lf(`skew${Df[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=Mc(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=Mc(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Zr(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let d=tR(this.projectionDeltaWithTransform,this.treeScale,u);l&&(d=l(u,d)),o.transform=d;const{x:f,y:p}=this.projectionDelta;o.transformOrigin=`${f.origin*100}% ${p.origin*100}% 0`,c.animationValues?o.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:o.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const _ in Bh){if(u[_]===void 0)continue;const{correct:y,applyTo:g,isCSSVariable:h}=Bh[_],m=d==="none"?u[_]:y(u[_],c);if(g){const v=g.length;for(let S=0;S<v;S++)o[g[S]]=m}else h?this.options.visualElement.renderState.vars[_]=m:o[_]=m}this.options.layoutId&&(o.pointerEvents=c===this?Mc(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(O_),this.root.sharedNodes.clear()}}}function hR(t){t.updateLayout()}function pR(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;if(s==="size")yi(d=>{const f=o?e.measuredBox[d]:e.layoutBox[d],p=pn(f);f.min=i[d].min,f.max=f.min+p});else if(s==="x"||s==="y"){const d=s==="x"?"y":"x";Oh(o?e.measuredBox[d]:e.layoutBox[d],i[d])}else e1(s,e.layoutBox,i)&&yi(d=>{const f=o?e.measuredBox[d]:e.layoutBox[d],p=pn(i[d]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=oo();Ea(a,i,e.layoutBox);const l=oo();o?Ea(l,t.applyTransform(r,!0),e.measuredBox):Ea(l,i,e.layoutBox);const c=!$M(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:p}=d;if(f&&p){const _=t.options.layoutAnchor||void 0,y=kt();lu(y,e.layoutBox,f.layoutBox,_);const g=kt();lu(g,i,p.layoutBox,_),YM(y,g)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=g,t.relativeTargetOrigin=y,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function mR(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function gR(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function _R(t){t.clearSnapshot()}function O_(t){t.clearMeasurements()}function vR(t){t.isLayoutDirty=!0,t.updateLayout()}function k_(t){t.isLayoutDirty=!1}function xR(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function yR(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function z_(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function SR(t){t.resolveTargetDelta()}function MR(t){t.calcProjection()}function ER(t){t.resetSkewAndRotation()}function TR(t){t.removeLeadSnapshot()}function V_(t,e,n){t.translate=gt(e.translate,0,n),t.scale=gt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function H_(t,e,n,i){t.min=gt(e.min,n.min,i),t.max=gt(e.max,n.max,i)}function wR(t,e,n,i){H_(t.x,e.x,n.x,i),H_(t.y,e.y,n.y,i)}function AR(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const CR={duration:.45,ease:[.4,0,.1,1]},G_=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),W_=G_("applewebkit/")&&!G_("chrome/")?Math.round:$n;function j_(t){t.min=W_(t.min),t.max=W_(t.max)}function bR(t){j_(t.x),j_(t.y)}function e1(t,e,n){return t==="position"||t==="preserve-aspect"&&!Yb(I_(e),I_(n),.2)}function RR(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const PR=QM({attachResizeListener:(t,e)=>ja(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),If={current:void 0},t1=QM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!If.current){const t=new PR({});t.mount(window),t.setOptions({layoutScroll:!0}),If.current=t}return If.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),sg=ie.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function X_(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function DR(...t){return e=>{let n=!1;const i=t.map(r=>{const s=X_(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():X_(t[r],null)}}}}function LR(...t){return ie.useCallback(DR(...t),t)}class IR extends ie.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(_c(n)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=n.offsetParent,r=_c(i)&&i.offsetWidth||0,s=_c(i)&&i.offsetHeight||0,o=getComputedStyle(n),a=this.props.sizeRef.current;a.height=parseFloat(o.height),a.width=parseFloat(o.width),a.top=n.offsetTop,a.left=n.offsetLeft,a.right=r-a.width-a.left,a.bottom=s-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}}function NR({children:t,isPresent:e,anchorX:n,anchorY:i,root:r,pop:s}){var f;const o=ie.useId(),a=ie.useRef(null),l=ie.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=ie.useContext(sg),u=((f=t.props)==null?void 0:f.ref)??(t==null?void 0:t.ref),d=LR(a,u);return ie.useInsertionEffect(()=>{const{width:p,height:_,top:y,left:g,right:h,bottom:m}=l.current;if(e||s===!1||!a.current||!p||!_)return;const v=n==="left"?`left: ${g}`:`right: ${h}`,S=i==="bottom"?`bottom: ${m}`:`top: ${y}`;a.current.dataset.motionPopId=o;const A=document.createElement("style");c&&(A.nonce=c);const T=r??document.head;return T.appendChild(A),A.sheet&&A.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${_}px !important;
            ${v}px !important;
            ${S}px !important;
          }
        `),()=>{var R;(R=a.current)==null||R.removeAttribute("data-motion-pop-id"),T.contains(A)&&T.removeChild(A)}},[e]),w.jsx(IR,{isPresent:e,childRef:a,sizeRef:l,pop:s,children:s===!1?t:ie.cloneElement(t,{ref:d})})}const FR=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o,anchorX:a,anchorY:l,root:c})=>{const u=Nm(UR),d=ie.useId();let f=!0,p=ie.useMemo(()=>(f=!1,{id:d,initial:e,isPresent:n,custom:r,onExitComplete:_=>{u.set(_,!0);for(const y of u.values())if(!y)return;i&&i()},register:_=>(u.set(_,!1),()=>u.delete(_))}),[n,u,i]);return s&&f&&(p={...p}),ie.useMemo(()=>{u.forEach((_,y)=>u.set(y,!1))},[n]),ie.useEffect(()=>{!n&&!u.size&&i&&i()},[n]),t=w.jsx(NR,{pop:o==="popLayout",isPresent:n,anchorX:a,anchorY:l,root:c,children:t}),w.jsx(Ou.Provider,{value:p,children:t})};function UR(){return new Map}function n1(t=!0){const e=ie.useContext(Ou);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=ie.useId();ie.useEffect(()=>{if(t)return r(s)},[t]);const o=ie.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const Cl=t=>t.key||"";function q_(t){const e=[];return ie.Children.forEach(t,n=>{ie.isValidElement(n)&&e.push(n)}),e}const BR=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1,anchorX:a="left",anchorY:l="top",root:c})=>{const[u,d]=n1(o),f=ie.useMemo(()=>q_(t),[t]),p=o&&!u?[]:f.map(Cl),_=ie.useRef(!0),y=ie.useRef(f),g=Nm(()=>new Map),h=ie.useRef(new Set),[m,v]=ie.useState(f),[S,A]=ie.useState(f);RS(()=>{_.current=!1,y.current=f;for(let x=0;x<S.length;x++){const b=Cl(S[x]);p.includes(b)?(g.delete(b),h.current.delete(b)):g.get(b)!==!0&&g.set(b,!1)}},[S,p.length,p.join("-")]);const T=[];if(f!==m){let x=[...f];for(let b=0;b<S.length;b++){const P=S[b],D=Cl(P);p.includes(D)||(x.splice(b,0,P),T.push(P))}return s==="wait"&&T.length&&(x=T),A(q_(x)),v(f),null}const{forceRender:R}=ie.useContext(Im);return w.jsx(w.Fragment,{children:S.map(x=>{const b=Cl(x),P=o&&!u?!1:f===S||p.includes(b),D=()=>{if(h.current.has(b))return;if(g.has(b))h.current.add(b),g.set(b,!0);else return;let O=!0;g.forEach(q=>{q||(O=!1)}),O&&(R==null||R(),A(y.current),o&&(d==null||d()),i&&i())};return w.jsx(FR,{isPresent:P,initial:!_.current||n?void 0:!1,custom:e,presenceAffectsLayout:r,mode:s,root:c,onExitComplete:P?void 0:D,anchorX:a,anchorY:l,children:x},b)})})},i1=ie.createContext({strict:!1}),$_={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Y_=!1;function OR(){if(Y_)return;const t={};for(const e in $_)t[e]={isEnabled:n=>$_[e].some(i=>!!n[i])};LM(t),Y_=!0}function r1(){return OR(),Sb()}function kR(t){const e=r1();for(const n in t)e[n]={...e[n],...t[n]};LM(e)}const zR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function cu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||zR.has(t)}let s1=t=>!cu(t);function VR(t){typeof t=="function"&&(s1=e=>e.startsWith("on")?!cu(e):t(e))}try{VR(require("@emotion/is-prop-valid").default)}catch{}function HR(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||Kt(t[r])||(s1(r)||n===!0&&cu(r)||!e&&!cu(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}const Hu=ie.createContext({});function GR(t,e){if(Vu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Wa(n)?n:void 0,animate:Wa(i)?i:void 0}}return t.inherit!==!1?e:{}}function WR(t){const{initial:e,animate:n}=GR(t,ie.useContext(Hu));return ie.useMemo(()=>({initial:e,animate:n}),[K_(e),K_(n)])}function K_(t){return Array.isArray(t)?t.join(" "):t}const og=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function o1(t,e,n){for(const i in e)!Kt(e[i])&&!kM(i,n)&&(t[i]=e[i])}function jR({transformTemplate:t},e){return ie.useMemo(()=>{const n=og();return ig(n,e,t),Object.assign({},n.vars,n.style)},[e])}function XR(t,e){const n=t.style||{},i={};return o1(i,n,t),Object.assign(i,jR(t,e)),i}function qR(t,e){const n={},i=XR(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const a1=()=>({...og(),attrs:{}});function $R(t,e,n,i){const r=ie.useMemo(()=>{const s=a1();return zM(s,e,HM(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};o1(s,t.style,t),r.style={...s,...r.style}}return r}const YR=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ag(t){return typeof t!="string"||t.includes("-")?!1:!!(YR.indexOf(t)>-1||/[A-Z]/u.test(t))}function KR(t,e,n,{latestValues:i},r,s=!1,o){const l=(o??ag(t)?$R:qR)(e,i,r,t),c=HR(e,typeof t=="string",s),u=t!==ie.Fragment?{...c,...l,ref:n}:{},{children:d}=e,f=ie.useMemo(()=>Kt(d)?d.get():d,[d]);return ie.createElement(t,{...u,children:f})}function ZR({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:JR(n,i,r,t),renderState:e()}}function JR(t,e,n,i){const r={},s=i(t,{});for(const f in s)r[f]=Mc(s[f]);let{initial:o,animate:a}=t;const l=Vu(t),c=PM(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!zu(d)){const f=Array.isArray(d)?d:[d];for(let p=0;p<f.length;p++){const _=Ym(t,f[p]);if(_){const{transitionEnd:y,transition:g,...h}=_;for(const m in h){let v=h[m];if(Array.isArray(v)){const S=u?v.length-1:0;v=v[S]}v!==null&&(r[m]=v)}for(const m in y)r[m]=y[m]}}}return r}const l1=t=>(e,n)=>{const i=ie.useContext(Hu),r=ie.useContext(Ou),s=()=>ZR(t,e,i,r);return n?s():Nm(s)},QR=l1({scrapeMotionValuesFromProps:rg,createRenderState:og}),eP=l1({scrapeMotionValuesFromProps:GM,createRenderState:a1}),tP=Symbol.for("motionComponentSymbol");function nP(t,e,n){const i=ie.useRef(n);ie.useInsertionEffect(()=>{i.current=n});const r=ie.useRef(null);return ie.useCallback(s=>{var a;s&&((a=t.onMount)==null||a.call(t,s));const o=i.current;if(typeof o=="function")if(s){const l=o(s);typeof l=="function"&&(r.current=l)}else r.current?(r.current(),r.current=null):o(s);else o&&(o.current=s);e&&(s?e.mount(s):e.unmount())},[e])}const c1=ie.createContext({});function js(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function iP(t,e,n,i,r,s){var v,S;const{visualElement:o}=ie.useContext(Hu),a=ie.useContext(i1),l=ie.useContext(Ou),c=ie.useContext(sg),u=c.reducedMotion,d=c.skipAnimations,f=ie.useRef(null),p=ie.useRef(!1);i=i||a.renderer,!f.current&&i&&(f.current=i(t,{visualState:e,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:s}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));const _=f.current,y=ie.useContext(c1);_&&!_.projection&&r&&(_.type==="html"||_.type==="svg")&&rP(f.current,n,r,y);const g=ie.useRef(!1);ie.useInsertionEffect(()=>{_&&g.current&&_.update(n,l)});const h=n[_M],m=ie.useRef(!!h&&typeof window<"u"&&!((v=window.MotionHandoffIsComplete)!=null&&v.call(window,h))&&((S=window.MotionHasOptimisedAnimation)==null?void 0:S.call(window,h)));return RS(()=>{p.current=!0,_&&(g.current=!0,window.MotionIsMounted=!0,_.updateFeatures(),_.scheduleRenderMicrotask(),m.current&&_.animationState&&_.animationState.animateChanges())}),ie.useEffect(()=>{_&&(!m.current&&_.animationState&&_.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var A;(A=window.MotionHandoffMarkAsComplete)==null||A.call(window,h)}),m.current=!1),_.enteringChildren=void 0)}),_}function rP(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutAnchor:u,layoutCrossfade:d}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:u1(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&js(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:d,layoutScroll:l,layoutRoot:c,layoutAnchor:u})}function u1(t){if(t)return t.options.allowProjection!==!1?t.projection:u1(t.parent)}function Nf(t,{forwardMotionProps:e=!1,type:n}={},i,r){i&&kR(i);const s=n?n==="svg":ag(t),o=s?eP:QR;function a(c,u){let d;const f={...ie.useContext(sg),...c,layoutId:sP(c)},{isStatic:p}=f,_=WR(c),y=o(c,p);if(!p&&typeof window<"u"){oP();const g=aP(f);d=g.MeasureLayout,_.visualElement=iP(t,y,f,r,g.ProjectionNode,s)}return w.jsxs(Hu.Provider,{value:_,children:[d&&_.visualElement?w.jsx(d,{visualElement:_.visualElement,...f}):null,KR(t,c,nP(y,_.visualElement,u),y,p,e,s)]})}a.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=ie.forwardRef(a);return l[tP]=t,l}function sP({layoutId:t}){const e=ie.useContext(Im).id;return e&&t!==void 0?e+"-"+t:t}function oP(t,e){ie.useContext(i1).strict}function aP(t){const e=r1(),{drag:n,layout:i}=e;if(!n&&!i)return{};const r={...n,...i};return{MeasureLayout:n!=null&&n.isEnabled(t)||i!=null&&i.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function lP(t,e){if(typeof Proxy>"u")return Nf;const n=new Map,i=(s,o)=>Nf(s,o,t,e),r=(s,o)=>i(s,o);return new Proxy(r,{get:(s,o)=>o==="create"?i:(n.has(o)||n.set(o,Nf(o,void 0,t,e)),n.get(o))})}const cP=(t,e)=>e.isSVG??ag(t)?new Ob(e):new Lb(e,{allowProjection:t!==ie.Fragment});class uP extends Hr{constructor(e){super(e),e.animationState||(e.animationState=Gb(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();zu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let fP=0;class dP extends Hr{constructor(){super(...arguments),this.id=fP++,this.isExitComplete=!1}update(){var s;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;if(e&&i===!1){if(this.isExitComplete){const{initial:o,custom:a}=this.node.getProps();if(typeof o=="string"){const l=ds(this.node,o,a);if(l){const{transition:c,transitionEnd:u,...d}=l;for(const f in d)(s=this.node.getValue(f))==null||s.jump(d[f])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const hP={animation:{Feature:uP},exit:{Feature:dP}};function il(t){return{point:{x:t.pageX,y:t.pageY}}}const pP=t=>e=>Qm(e)&&t(e,il(e));function Ta(t,e,n,i){return ja(t,e,pP(n),i)}const f1=({current:t})=>t?t.ownerDocument.defaultView:null,Z_=(t,e)=>Math.abs(t-e);function mP(t,e){const n=Z_(t.x,e.x),i=Z_(t.y,e.y);return Math.sqrt(n**2+i**2)}const J_=new Set(["auto","scroll"]);class d1{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=p=>{this.handleScroll(p.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=bl(this.lastRawMoveEventInfo,this.transformPagePoint));const p=Ff(this.lastMoveEventInfo,this.history),_=this.startEvent!==null,y=mP(p.offset,{x:0,y:0})>=this.distanceThreshold;if(!_&&!y)return;const{point:g}=p,{timestamp:h}=Yt;this.history.push({...g,timestamp:h});const{onStart:m,onMove:v}=this.handlers;_||(m&&m(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,p)},this.handlePointerMove=(p,_)=>{this.lastMoveEvent=p,this.lastRawMoveEventInfo=_,this.lastMoveEventInfo=bl(_,this.transformPagePoint),ut.update(this.updatePoint,!0)},this.handlePointerUp=(p,_)=>{this.end();const{onEnd:y,onSessionEnd:g,resumeAnimation:h}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&h&&h(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Ff(p.type==="pointercancel"?this.lastMoveEventInfo:bl(_,this.transformPagePoint),this.history);this.startEvent&&y&&y(p,m),g&&g(p,m)},!Qm(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=r||window;const l=il(e),c=bl(l,this.transformPagePoint),{point:u}=c,{timestamp:d}=Yt;this.history=[{...u,timestamp:d}];const{onSessionStart:f}=n;f&&f(e,Ff(c,this.history)),this.removeListeners=el(Ta(this.contextWindow,"pointermove",this.handlePointerMove),Ta(this.contextWindow,"pointerup",this.handlePointerUp),Ta(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(e){let n=e.parentElement;for(;n;){const i=getComputedStyle(n);(J_.has(i.overflowX)||J_.has(i.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const i=e===window,r=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:r.x-n.x,y:r.y-n.y};s.x===0&&s.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,r),ut.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ur(this.updatePoint)}}function bl(t,e){return e?{point:e(t.point)}:t}function Q_(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Ff({point:t},e){return{point:t,delta:Q_(t,h1(e)),offset:Q_(t,gP(e)),velocity:_P(e,.1)}}function gP(t){return t[0]}function h1(t){return t[t.length-1]}function _P(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=h1(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Nn(e)));)n--;if(!i)return{x:0,y:0};i===t[0]&&t.length>2&&r.timestamp-i.timestamp>Nn(e)*2&&(i=t[1]);const s=Xn(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function vP(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?gt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?gt(n,t,i.max):Math.min(t,n)),t}function ev(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function xP(t,{top:e,left:n,bottom:i,right:r}){return{x:ev(t.x,n,r),y:ev(t.y,e,i)}}function tv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function yP(t,e){return{x:tv(t.x,e.x),y:tv(t.y,e.y)}}function SP(t,e){let n=.5;const i=pn(t),r=pn(e);return r>i?n=Ha(e.min,e.max-i,t.min):i>r&&(n=Ha(t.min,t.max-r,e.min)),Li(0,1,n)}function MP(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const kh=.35;function EP(t=kh){return t===!1?t=0:t===!0&&(t=kh),{x:nv(t,"left","right"),y:nv(t,"top","bottom")}}function nv(t,e,n){return{min:iv(t,e),max:iv(t,n)}}function iv(t,e){return typeof t=="number"?t:t[e]||0}const TP=new WeakMap;class wP{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=kt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=d=>{n&&this.snapToCursor(il(d).point),this.stopAnimation()},o=(d,f)=>{const{drag:p,dragPropagation:_,onDragStart:y}=this.getProps();if(p&&!_&&(this.openDragLock&&this.openDragLock(),this.openDragLock=ZC(p),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),yi(h=>{let m=this.getAxisMotionValue(h).get()||0;if(Ri.test(m)){const{projection:v}=this.visualElement;if(v&&v.layout){const S=v.layout.layoutBox[h];S&&(m=pn(S)*(parseFloat(m)/100))}}this.originPoint[h]=m}),y&&ut.update(()=>y(d,f),!1,!0),Ph(this.visualElement,"transform");const{animationState:g}=this.visualElement;g&&g.setActive("whileDrag",!0)},a=(d,f)=>{this.latestPointerEvent=d,this.latestPanInfo=f;const{dragPropagation:p,dragDirectionLock:_,onDirectionLock:y,onDrag:g}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:h}=f;if(_&&this.currentDirection===null){this.currentDirection=CP(h),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,h),this.updateAxis("y",f.point,h),this.visualElement.render(),g&&ut.update(()=>g(d,f),!1,!0)},l=(d,f)=>{this.latestPointerEvent=d,this.latestPanInfo=f,this.stop(d,f),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:d}=this.getProps();(d||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:u}=this.getProps();this.panSession=new d1(e,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:i,contextWindow:f1(this.visualElement),element:this.visualElement.current})}stop(e,n){const i=e||this.latestPointerEvent,r=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&ut.postRender(()=>a(i,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Rl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=vP(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,r=this.constraints;e&&js(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=xP(i.layoutBox,e):this.constraints=!1,this.elastic=EP(n),r!==this.constraints&&!js(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&yi(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=MP(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!js(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=Ab(i,r.root,this.visualElement.getTransformPagePoint());let o=yP(r.layout.layoutBox,s);if(n){const a=n(Eb(o));this.hasMutatedConstraints=!!a,a&&(o=NM(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=yi(u=>{if(!Rl(u,n,this.currentDirection))return;let d=l&&l[u]||{};(o===!0||o===u)&&(d={min:0,max:0});const f=r?200:1e6,p=r?40:1e7,_={type:"inertia",velocity:i?e[u]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(u,_)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Ph(this.visualElement,e),i.start($m(e,i,0,n,this.visualElement,!1))}stopAnimation(){yi(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){yi(n=>{const{drag:i}=this.getProps();if(!Rl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n],l=s.get()||0;s.set(e[n]-gt(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!js(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};yi(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=SP({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),yi(o=>{if(!Rl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(gt(l,c,r[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;TP.set(this.visualElement,this);const e=this.visualElement.current,n=Ta(e,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps(),f=c.target,p=f!==e&&ib(f);u&&d&&!p&&this.start(c)});let i;const r=()=>{const{dragConstraints:c}=this.getProps();js(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),i||(i=AP(e,c.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),ut.read(r);const a=ja(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(yi(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=c[d].translate,f.set(f.get()+c[d].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),l&&l(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=kh,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function rv(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function AP(t,e,n){const i=f_(t,rv(n)),r=f_(e,rv(n));return()=>{i(),r()}}function Rl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function CP(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class bP extends Hr{constructor(e){super(e),this.removeGroupControls=$n,this.removeListeners=$n,this.controls=new wP(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||$n}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Uf=t=>(e,n)=>{t&&ut.update(()=>t(e,n),!1,!0)};class RP extends Hr{constructor(){super(...arguments),this.removePointerDownListener=$n}onPointerDown(e){this.session=new d1(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:f1(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Uf(e),onStart:Uf(n),onMove:Uf(i),onEnd:(s,o)=>{delete this.session,r&&ut.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Ta(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Bf=!1;class PP extends ie.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),Bf&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Ec.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,{projection:o}=i;return o&&(o.isPresent=s,e.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),Bf=!0,r||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ut.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:i}=e;i&&(i.options.layoutAnchor=n,i.root.didUpdate(),Jm.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;Bf=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function p1(t){const[e,n]=n1(),i=ie.useContext(Im);return w.jsx(PP,{...t,layoutGroup:i,switchLayoutGroup:ie.useContext(c1),isPresent:e,safeToRemove:n})}const DP={pan:{Feature:RP},drag:{Feature:bP,ProjectionNode:t1,MeasureLayout:p1}};function sv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&ut.postRender(()=>s(e,il(e)))}class LP extends Hr{mount(){const{current:e}=this.node;e&&(this.unmount=QC(e,(n,i)=>(sv(this.node,i,"Start"),r=>sv(this.node,r,"End"))))}unmount(){}}class IP extends Hr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=el(ja(this.node.current,"focus",()=>this.onFocus()),ja(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function ov(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&ut.postRender(()=>s(e,il(e)))}class NP extends Hr{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:i}=this.node.props;this.unmount=sb(e,(r,s)=>(ov(this.node,s,"Start"),(o,{success:a})=>ov(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const zh=new WeakMap,Of=new WeakMap,FP=t=>{const e=zh.get(t.target);e&&e(t)},UP=t=>{t.forEach(FP)};function BP({root:t,...e}){const n=t||document;Of.has(n)||Of.set(n,{});const i=Of.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(UP,{root:t,...e})),i[r]}function OP(t,e,n){const i=BP(e);return zh.set(t,n),i.observe(t),()=>{zh.delete(t),i.unobserve(t)}}const kP={some:0,all:1};class zP extends Hr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:kP[r]},a=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=u?d:f;p&&p(c)};this.stopObserver=OP(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(VP(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function VP({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const HP={inView:{Feature:zP},tap:{Feature:NP},focus:{Feature:IP},hover:{Feature:LP}},GP={layout:{ProjectionNode:t1,MeasureLayout:p1}},WP={...hP,...HP,...DP,...GP},uu=lP(WP,cP);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jP=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XP=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=t=>{const e=XP(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qP=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},$P=ie.createContext({}),YP=()=>ie.useContext($P),KP=ie.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>{const{size:c=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f="currentColor",className:p=""}=YP()??{},_=i??d?Number(n??u)*24/Number(e??c):n??u;return ie.createElement("svg",{ref:l,...kf,width:e??c??kf.width,height:e??c??kf.height,stroke:t??f,strokeWidth:_,className:m1("lucide",p,r),...!s&&!qP(a)&&{"aria-hidden":"true"},...a},[...o.map(([y,g])=>ie.createElement(y,g)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=(t,e)=>{const n=ie.forwardRef(({className:i,...r},s)=>ie.createElement(KP,{ref:s,iconNode:e,className:m1(`lucide-${jP(av(t))}`,`lucide-${t}`,i),...r}));return n.displayName=av(t),n};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZP=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],JP=hi("arrow-up",ZP);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],lg=hi("calendar-days",QP);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],g1=hi("earth",e2);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],n2=hi("file-text",t2);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],_1=hi("film",i2);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],os=hi("layers",r2);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Vh=hi("layout-grid",s2);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],lv=hi("plus",o2);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],l2=hi("sparkles",a2);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],v1=hi("wallet",c2);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],f2=hi("x",u2);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cg="184",d2=0,cv=1,h2=2,Tc=1,p2=2,ca=3,Br=0,wn=1,Gi=2,$i=0,mo=1,uv=2,fv=3,dv=4,m2=5,Qr=100,g2=101,_2=102,v2=103,x2=104,y2=200,S2=201,M2=202,E2=203,Hh=204,Gh=205,T2=206,w2=207,A2=208,C2=209,b2=210,R2=211,P2=212,D2=213,L2=214,Wh=0,jh=1,Xh=2,Ao=3,qh=4,$h=5,Yh=6,Kh=7,x1=0,I2=1,N2=2,Pi=0,y1=1,S1=2,M1=3,E1=4,T1=5,w1=6,A1=7,C1=300,vs=301,Co=302,zf=303,Vf=304,Gu=306,Zh=1e3,Xi=1001,Jh=1002,Zt=1003,F2=1004,Pl=1005,Jt=1006,Hf=1007,as=1008,Dn=1009,b1=1010,R1=1011,Xa=1012,ug=1013,Ii=1014,wi=1015,er=1016,fg=1017,dg=1018,qa=1020,P1=35902,D1=35899,L1=1021,I1=1022,ai=1023,tr=1026,ls=1027,N1=1028,hg=1029,xs=1030,pg=1031,mg=1033,wc=33776,Ac=33777,Cc=33778,bc=33779,Qh=35840,ep=35841,tp=35842,np=35843,ip=36196,rp=37492,sp=37496,op=37488,ap=37489,fu=37490,lp=37491,cp=37808,up=37809,fp=37810,dp=37811,hp=37812,pp=37813,mp=37814,gp=37815,_p=37816,vp=37817,xp=37818,yp=37819,Sp=37820,Mp=37821,Ep=36492,Tp=36494,wp=36495,Ap=36283,Cp=36284,du=36285,bp=36286,U2=3200,Rp=0,B2=1,xr="",zn="srgb",hu="srgb-linear",pu="linear",nt="srgb",Cs=7680,hv=519,O2=512,k2=513,z2=514,gg=515,V2=516,H2=517,_g=518,G2=519,Pp=35044,pv="300 es",Ai=2e3,$a=2001;function W2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function mu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function j2(){const t=mu("canvas");return t.style.display="block",t}const mv={};function gu(...t){const e="THREE."+t.shift();console.log(e,...t)}function F1(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ne(...t){t=F1(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ze(...t){t=F1(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Dp(...t){const e=t.join(" ");e in mv||(mv[e]=!0,Ne(...t))}function X2(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const q2={[Wh]:jh,[Xh]:Yh,[qh]:Kh,[Ao]:$h,[jh]:Wh,[Yh]:Xh,[Kh]:qh,[$h]:Ao};class Ms{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gf=Math.PI/180,Lp=180/Math.PI;function Lr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[t&255]+sn[t>>8&255]+sn[t>>16&255]+sn[t>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function $2(t,e){return(t%e+e)%e}function Wf(t,e,n){return(1-n)*t+n*e}function Ti(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function at(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Eg=class Eg{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Eg.prototype.isVector2=!0;let We=Eg;class Uo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(d!==y||l!==f||c!==p||u!==_){let g=l*f+c*p+u*_+d*y;g<0&&(f=-f,p=-p,_=-_,y=-y,g=-g);let h=1-a;if(g<.9995){const m=Math.acos(g),v=Math.sin(m);h=Math.sin(h*m)/v,a=Math.sin(a*m)/v,l=l*h+f*a,c=c*h+p*a,u=u*h+_*a,d=d*h+y*a}else{l=l*h+f*a,c=c*h+p*a,u=u*h+_*a,d=d*h+y*a;const m=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=m,c*=m,u*=m,d*=m}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+u*d+l*p-c*f,e[n+1]=l*_+u*f+c*d-a*p,e[n+2]=c*_+u*p+a*f-l*d,e[n+3]=u*_-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Tg=class Tg{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jf.copy(this).projectOnVector(e),this.sub(jf)}reflect(e){return this.sub(jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tg.prototype.isVector3=!0;let z=Tg;const jf=new z,gv=new Uo,wg=class wg{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],_=i[8],y=r[0],g=r[3],h=r[6],m=r[1],v=r[4],S=r[7],A=r[2],T=r[5],R=r[8];return s[0]=o*y+a*m+l*A,s[3]=o*g+a*v+l*T,s[6]=o*h+a*S+l*R,s[1]=c*y+u*m+d*A,s[4]=c*g+u*v+d*T,s[7]=c*h+u*S+d*R,s[2]=f*y+p*m+_*A,s[5]=f*g+p*v+_*T,s[8]=f*h+p*S+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,_=n*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Xf.makeScale(e,n)),this}rotate(e){return this.premultiply(Xf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Xf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wg.prototype.isMatrix3=!0;let Oe=wg;const Xf=new Oe,_v=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vv=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Y2(){const t={enabled:!0,workingColorSpace:hu,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===nt&&(r.r=Yi(r.r),r.g=Yi(r.g),r.b=Yi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(r.r=go(r.r),r.g=go(r.g),r.b=go(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xr?pu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Dp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Dp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[hu]:{primaries:e,whitePoint:i,transfer:pu,toXYZ:_v,fromXYZ:vv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:_v,fromXYZ:vv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),t}const Ye=Y2();function Yi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function go(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let bs;class K2{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{bs===void 0&&(bs=mu("canvas")),bs.width=e.width,bs.height=e.height;const r=bs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=bs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=mu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Yi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Yi(n[i]/255)*255):n[i]=Yi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Z2=0;class vg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Z2++}),this.uuid=Lr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qf(r[o].image)):s.push(qf(r[o]))}else s=qf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function qf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?K2.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let J2=0;const $f=new z;class ln extends Ms{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Xi,r=Xi,s=Jt,o=as,a=ai,l=Dn,c=ln.DEFAULT_ANISOTROPY,u=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J2++}),this.uuid=Lr(),this.name="",this.source=new vg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($f).x}get height(){return this.source.getSize($f).y}get depth(){return this.source.getSize($f).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ne(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==C1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zh:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Jh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zh:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Jh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=C1;ln.DEFAULT_ANISOTROPY=1;const Ag=class Ag{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],y=l[2],g=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(p+1)/2,A=(h+1)/2,T=(u+f)/4,R=(d+y)/4,x=(_+g)/4;return v>S&&v>A?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=R/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=x/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=x/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-_)*(g-_)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(d-y)/m,this.z=(f-u)/m,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ag.prototype.isVector4=!0;let Rt=Ag;class Q2 extends Ms{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new ln(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new vg(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends Q2{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class U1 extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class e3 extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Su=class Su{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,_,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,_,y,g)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,_,y,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=y,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Su().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Rs.setFromMatrixColumn(e,0).length(),s=1/Rs.setFromMatrixColumn(e,1).length(),o=1/Rs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,_=a*u,y=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,_=c*u,y=c*d;n[0]=f+y*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,_=c*u,y=c*d;n[0]=f-y*a,n[4]=-o*d,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,_=a*u,y=a*d;n[0]=l*u,n[4]=_*c-p,n[8]=f*c+y,n[1]=l*d,n[5]=y*c+f,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*u,n[4]=y-f*d,n[8]=_*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+_,n[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+y,n[5]=o*u,n[9]=p*d-_,n[2]=_*d-p,n[6]=a*u,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t3,e,n3)}lookAt(e,n,i){const r=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),ar.crossVectors(i,bn),ar.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),ar.crossVectors(i,bn)),ar.normalize(),Dl.crossVectors(bn,ar),r[0]=ar.x,r[4]=Dl.x,r[8]=bn.x,r[1]=ar.y,r[5]=Dl.y,r[9]=bn.y,r[2]=ar.z,r[6]=Dl.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],_=i[2],y=i[6],g=i[10],h=i[14],m=i[3],v=i[7],S=i[11],A=i[15],T=r[0],R=r[4],x=r[8],b=r[12],P=r[1],D=r[5],O=r[9],q=r[13],Y=r[2],N=r[6],G=r[10],H=r[14],L=r[3],k=r[7],$=r[11],U=r[15];return s[0]=o*T+a*P+l*Y+c*L,s[4]=o*R+a*D+l*N+c*k,s[8]=o*x+a*O+l*G+c*$,s[12]=o*b+a*q+l*H+c*U,s[1]=u*T+d*P+f*Y+p*L,s[5]=u*R+d*D+f*N+p*k,s[9]=u*x+d*O+f*G+p*$,s[13]=u*b+d*q+f*H+p*U,s[2]=_*T+y*P+g*Y+h*L,s[6]=_*R+y*D+g*N+h*k,s[10]=_*x+y*O+g*G+h*$,s[14]=_*b+y*q+g*H+h*U,s[3]=m*T+v*P+S*Y+A*L,s[7]=m*R+v*D+S*N+A*k,s[11]=m*x+v*O+S*G+A*$,s[15]=m*b+v*q+S*H+A*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],_=e[3],y=e[7],g=e[11],h=e[15],m=l*p-c*f,v=a*p-c*d,S=a*f-l*d,A=o*p-c*u,T=o*f-l*u,R=o*d-a*u;return n*(y*m-g*v+h*S)-i*(_*m-g*A+h*T)+r*(_*v-y*A+h*R)-s*(_*S-y*T+g*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],_=e[12],y=e[13],g=e[14],h=e[15],m=n*a-i*o,v=n*l-r*o,S=n*c-s*o,A=i*l-r*a,T=i*c-s*a,R=r*c-s*l,x=u*y-d*_,b=u*g-f*_,P=u*h-p*_,D=d*g-f*y,O=d*h-p*y,q=f*h-p*g,Y=m*q-v*O+S*D+A*P-T*b+R*x;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/Y;return e[0]=(a*q-l*O+c*D)*N,e[1]=(r*O-i*q-s*D)*N,e[2]=(y*R-g*T+h*A)*N,e[3]=(f*T-d*R-p*A)*N,e[4]=(l*P-o*q-c*b)*N,e[5]=(n*q-r*P+s*b)*N,e[6]=(g*S-_*R-h*v)*N,e[7]=(u*R-f*S+p*v)*N,e[8]=(o*O-a*P+c*x)*N,e[9]=(i*P-n*O-s*x)*N,e[10]=(_*T-y*S+h*m)*N,e[11]=(d*S-u*T-p*m)*N,e[12]=(a*b-o*D-l*x)*N,e[13]=(n*D-i*b+r*x)*N,e[14]=(y*v-_*A-g*m)*N,e[15]=(u*A-d*v+f*m)*N,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,_=s*d,y=o*u,g=o*d,h=a*d,m=l*c,v=l*u,S=l*d,A=i.x,T=i.y,R=i.z;return r[0]=(1-(y+h))*A,r[1]=(p+S)*A,r[2]=(_-v)*A,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(f+h))*T,r[6]=(g+m)*T,r[7]=0,r[8]=(_+v)*R,r[9]=(g-m)*R,r[10]=(1-(f+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Rs.set(r[0],r[1],r[2]).length();const a=Rs.set(r[4],r[5],r[6]).length(),l=Rs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ei.copy(this);const c=1/o,u=1/a,d=1/l;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=d,ei.elements[9]*=d,ei.elements[10]*=d,n.setFromRotationMatrix(ei),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Ai,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let _,y;if(l)_=s/(o-s),y=o*s/(o-s);else if(a===Ai)_=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===$a)_=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ai,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,y;if(l)_=1/(o-s),y=o/(o-s);else if(a===Ai)_=-2/(o-s),y=-(o+s)/(o-s);else if(a===$a)_=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Su.prototype.isMatrix4=!0;let Et=Su;const Rs=new z,ei=new Et,t3=new z(0,0,0),n3=new z(1,1,1),ar=new z,Dl=new z,bn=new z,xv=new Et,yv=new Uo;class Or{constructor(e=0,n=0,i=0,r=Or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return xv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return yv.setFromEuler(this),this.setFromQuaternion(yv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Or.DEFAULT_ORDER="XYZ";class B1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i3=0;const Sv=new z,Ps=new Uo,Ui=new Et,Ll=new z,qo=new z,r3=new z,s3=new Uo,Mv=new z(1,0,0),Ev=new z(0,1,0),Tv=new z(0,0,1),wv={type:"added"},o3={type:"removed"},Ds={type:"childadded",child:null},Yf={type:"childremoved",child:null};class qt extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i3++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new z,n=new Or,i=new Uo,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Oe}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new B1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(Mv,e)}rotateY(e){return this.rotateOnAxis(Ev,e)}rotateZ(e){return this.rotateOnAxis(Tv,e)}translateOnAxis(e,n){return Sv.copy(e).applyQuaternion(this.quaternion),this.position.add(Sv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Mv,e)}translateY(e){return this.translateOnAxis(Ev,e)}translateZ(e){return this.translateOnAxis(Tv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ll.copy(e):Ll.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(qo,Ll,this.up):Ui.lookAt(Ll,qo,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),Ps.setFromRotationMatrix(Ui),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wv),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(o3),Yf.child=e,this.dispatchEvent(Yf),Yf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wv),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,r3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,s3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}qt.DEFAULT_UP=new z(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ua extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a3={type:"move"};class Kf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ua,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ua,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ua,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),h=this._getHandJoint(c,y);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(a3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ua;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const O1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Zf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ye.workingColorSpace){if(e=$2(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Zf(o,s,e+1/3),this.g=Zf(o,s,e),this.b=Zf(o,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,n=zn){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zn){const i=O1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return Ye.workingToColorSpace(on.copy(this),e),Math.round(Ke(on.r*255,0,255))*65536+Math.round(Ke(on.g*255,0,255))*256+Math.round(Ke(on.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.workingToColorSpace(on.copy(this),n);const i=on.r,r=on.g,s=on.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ye.workingColorSpace){return Ye.workingToColorSpace(on.copy(this),n),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=zn){Ye.workingToColorSpace(on.copy(this),e);const n=on.r,i=on.g,r=on.b;return e!==zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+n,lr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(lr),e.getHSL(Il);const i=Wf(lr.h,Il.h,n),r=Wf(lr.s,Il.s,n),s=Wf(lr.l,Il.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new Qe;Qe.NAMES=O1;class l3 extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Or,this.environmentIntensity=1,this.environmentRotation=new Or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ti=new z,Bi=new z,Jf=new z,Oi=new z,Ls=new z,Is=new z,Av=new z,Qf=new z,ed=new z,td=new z,nd=new Rt,id=new Rt,rd=new Rt;class Wn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ti.subVectors(e,n),r.cross(ti);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ti.subVectors(r,n),Bi.subVectors(i,n),Jf.subVectors(e,n);const o=ti.dot(ti),a=ti.dot(Bi),l=ti.dot(Jf),c=Bi.dot(Bi),u=Bi.dot(Jf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(o,Oi.y),l.addScaledVector(a,Oi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return nd.setScalar(0),id.setScalar(0),rd.setScalar(0),nd.fromBufferAttribute(e,n),id.fromBufferAttribute(e,i),rd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(nd,s.x),o.addScaledVector(id,s.y),o.addScaledVector(rd,s.z),o}static isFrontFacing(e,n,i,r){return ti.subVectors(i,n),Bi.subVectors(e,n),ti.cross(Bi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ti.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ls.subVectors(r,i),Is.subVectors(s,i),Qf.subVectors(e,i);const l=Ls.dot(Qf),c=Is.dot(Qf);if(l<=0&&c<=0)return n.copy(i);ed.subVectors(e,r);const u=Ls.dot(ed),d=Is.dot(ed);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ls,o);td.subVectors(e,s);const p=Ls.dot(td),_=Is.dot(td);if(_>=0&&p<=_)return n.copy(s);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Is,a);const g=u*_-p*d;if(g<=0&&d-u>=0&&p-_>=0)return Av.subVectors(s,r),a=(d-u)/(d-u+(p-_)),n.copy(r).addScaledVector(Av,a);const h=1/(g+y+f);return o=y*h,a=f*h,n.copy(i).addScaledVector(Ls,o).addScaledVector(Is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class rl{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ni.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ni.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ni.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nl.copy(i.boundingBox)),Nl.applyMatrix4(e.matrixWorld),this.union(Nl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),Fl.subVectors(this.max,$o),Ns.subVectors(e.a,$o),Fs.subVectors(e.b,$o),Us.subVectors(e.c,$o),cr.subVectors(Fs,Ns),ur.subVectors(Us,Fs),jr.subVectors(Ns,Us);let n=[0,-cr.z,cr.y,0,-ur.z,ur.y,0,-jr.z,jr.y,cr.z,0,-cr.x,ur.z,0,-ur.x,jr.z,0,-jr.x,-cr.y,cr.x,0,-ur.y,ur.x,0,-jr.y,jr.x,0];return!sd(n,Ns,Fs,Us,Fl)||(n=[1,0,0,0,1,0,0,0,1],!sd(n,Ns,Fs,Us,Fl))?!1:(Ul.crossVectors(cr,ur),n=[Ul.x,Ul.y,Ul.z],sd(n,Ns,Fs,Us,Fl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ki=[new z,new z,new z,new z,new z,new z,new z,new z],ni=new z,Nl=new rl,Ns=new z,Fs=new z,Us=new z,cr=new z,ur=new z,jr=new z,$o=new z,Fl=new z,Ul=new z,Xr=new z;function sd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Xr.fromArray(t,s);const a=r.x*Math.abs(Xr.x)+r.y*Math.abs(Xr.y)+r.z*Math.abs(Xr.z),l=e.dot(Xr),c=n.dot(Xr),u=i.dot(Xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Nt=new z,Bl=new We;let c3=0;class fi extends Ms{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:c3++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Pp,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Bl.fromBufferAttribute(this,n),Bl.applyMatrix3(e),this.setXY(n,Bl.x,Bl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ti(n,this.array)),n}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ti(n,this.array)),n}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ti(n,this.array)),n}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ti(n,this.array)),n}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class k1 extends fi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class z1 extends fi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class gn extends fi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const u3=new rl,Yo=new z,od=new z;class Wu{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):u3.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);const n=Yo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Yo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(od.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(od)),this.expandByPoint(Yo.copy(e.center).sub(od))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let f3=0;const kn=new Et,ad=new qt,Bs=new z,Rn=new rl,Ko=new rl,Wt=new z;class _n extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f3++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(W2(e)?z1:k1)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,n,i){return kn.makeTranslation(e,n,i),this.applyMatrix4(kn),this}scale(e,n,i){return kn.makeScale(e,n,i),this.applyMatrix4(kn),this}lookAt(e){return ad.lookAt(e),ad.updateMatrix(),this.applyMatrix4(ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ko.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Rn.min,Ko.min),Rn.expandByPoint(Wt),Wt.addVectors(Rn.max,Ko.max),Rn.expandByPoint(Wt)):(Rn.expandByPoint(Ko.min),Rn.expandByPoint(Ko.max))}Rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Wt.fromBufferAttribute(a,c),l&&(Bs.fromBufferAttribute(e,c),Wt.add(Bs)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new z,l[x]=new z;const c=new z,u=new z,d=new z,f=new We,p=new We,_=new We,y=new z,g=new z;function h(x,b,P){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,P),f.fromBufferAttribute(s,x),p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,P),u.sub(c),d.sub(c),p.sub(f),_.sub(f);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(D),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(D),a[x].add(y),a[b].add(y),a[P].add(y),l[x].add(g),l[b].add(g),l[P].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let x=0,b=m.length;x<b;++x){const P=m[x],D=P.start,O=P.count;for(let q=D,Y=D+O;q<Y;q+=3)h(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const v=new z,S=new z,A=new z,T=new z;function R(x){A.fromBufferAttribute(r,x),T.copy(A);const b=a[x];v.copy(b),v.sub(A.multiplyScalar(A.dot(b))).normalize(),S.crossVectors(T,b);const D=S.dot(l[x])<0?-1:1;o.setXYZW(x,v.x,v.y,v.z,D)}for(let x=0,b=m.length;x<b;++x){const P=m[x],D=P.start,O=P.count;for(let q=D,Y=D+O;q<Y;q+=3)R(e.getX(q+0)),R(e.getX(q+1)),R(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,d=new z;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let h=0;h<u;h++)f[_++]=c[p++]}return new fi(f,u,d)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _n,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class d3{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Pp,this.updateRanges=[],this.version=0,this.uuid=Lr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Lr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Lr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new z;class _u{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)un.fromBufferAttribute(this,n),un.applyMatrix4(e),this.setXYZ(n,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.applyNormalMatrix(e),this.setXYZ(n,un.x,un.y,un.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.transformDirection(e),this.setXYZ(n,un.x,un.y,un.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Ti(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Ti(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Ti(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Ti(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){gu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new fi(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _u(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){gu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let h3=0;class Es extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h3++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=mo,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=Gh,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ne(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(i.blending=this.blending),this.side!==Br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hh&&(i.blendSrc=this.blendSrc),this.blendDst!==Gh&&(i.blendDst=this.blendDst),this.blendEquation!==Qr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class V1 extends Es{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Os;const Zo=new z,ks=new z,zs=new z,Vs=new We,Jo=new We,H1=new Et,Ol=new z,Qo=new z,kl=new z,Cv=new We,ld=new We,bv=new We;class p3 extends qt{constructor(e=new V1){if(super(),this.isSprite=!0,this.type="Sprite",Os===void 0){Os=new _n;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new d3(n,5);Os.setIndex([0,1,2,0,2,3]),Os.setAttribute("position",new _u(i,3,0,!1)),Os.setAttribute("uv",new _u(i,2,3,!1))}this.geometry=Os,this.material=e,this.center=new We(.5,.5),this.count=1}raycast(e,n){e.camera===null&&Ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),H1.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-zs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;zl(Ol.set(-.5,-.5,0),zs,o,ks,r,s),zl(Qo.set(.5,-.5,0),zs,o,ks,r,s),zl(kl.set(.5,.5,0),zs,o,ks,r,s),Cv.set(0,0),ld.set(1,0),bv.set(1,1);let a=e.ray.intersectTriangle(Ol,Qo,kl,!1,Zo);if(a===null&&(zl(Qo.set(-.5,.5,0),zs,o,ks,r,s),ld.set(0,1),a=e.ray.intersectTriangle(Ol,kl,Qo,!1,Zo),a===null))return;const l=e.ray.origin.distanceTo(Zo);l<e.near||l>e.far||n.push({distance:l,point:Zo.clone(),uv:Wn.getInterpolation(Zo,Ol,Qo,kl,Cv,ld,bv,new We),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function zl(t,e,n,i,r,s){Vs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Jo.x=s*Vs.x-r*Vs.y,Jo.y=r*Vs.x+s*Vs.y):Jo.copy(Vs),t.copy(e),t.x+=Jo.x,t.y+=Jo.y,t.applyMatrix4(H1)}const zi=new z,cd=new z,Vl=new z,fr=new z,ud=new z,Hl=new z,fd=new z;class G1{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=zi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,n),zi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){cd.copy(e).add(n).multiplyScalar(.5),Vl.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(cd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Vl),a=fr.dot(this.direction),l=-fr.dot(Vl),c=fr.lengthSq(),u=Math.abs(1-o*o);let d,f,p,_;if(u>0)if(d=o*l-a,f=o*a-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const y=1/u;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(cd).addScaledVector(Vl,f),p}intersectSphere(e,n){zi.subVectors(e.center,this.origin);const i=zi.dot(this.direction),r=zi.dot(zi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,n,i,r,s){ud.subVectors(n,e),Hl.subVectors(i,e),fd.crossVectors(ud,Hl);let o=this.direction.dot(fd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fr.subVectors(this.origin,e);const l=a*this.direction.dot(Hl.crossVectors(fr,Hl));if(l<0)return null;const c=a*this.direction.dot(ud.cross(fr));if(c<0||l+c>o)return null;const u=-a*fr.dot(fd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vu extends Es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Or,this.combine=x1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rv=new Et,qr=new G1,Gl=new Wu,Pv=new z,Wl=new z,jl=new z,Xl=new z,dd=new z,ql=new z,Dv=new z,$l=new z;class Yn extends qt{constructor(e=new _n,n=new vu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ql.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(dd.fromBufferAttribute(d,e),o?ql.addScaledVector(dd,u):ql.addScaledVector(dd.sub(n),u))}n.add(ql)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gl.copy(i.boundingSphere),Gl.applyMatrix4(s),qr.copy(e.ray).recast(e.near),!(Gl.containsPoint(qr.origin)===!1&&(qr.intersectSphere(Gl,Pv)===null||qr.origin.distanceToSquared(Pv)>(e.far-e.near)**2))&&(Rv.copy(s).invert(),qr.copy(e.ray).applyMatrix4(Rv),!(i.boundingBox!==null&&qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,qr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const g=f[_],h=o[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,A=v;S<A;S+=3){const T=a.getX(S),R=a.getX(S+1),x=a.getX(S+2);r=Yl(this,h,e,i,c,u,d,T,R,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=_,h=y;g<h;g+=3){const m=a.getX(g),v=a.getX(g+1),S=a.getX(g+2);r=Yl(this,o,e,i,c,u,d,m,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const g=f[_],h=o[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,A=v;S<A;S+=3){const T=S,R=S+1,x=S+2;r=Yl(this,h,e,i,c,u,d,T,R,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=_,h=y;g<h;g+=3){const m=g,v=g+1,S=g+2;r=Yl(this,o,e,i,c,u,d,m,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function m3(t,e,n,i,r,s,o,a){let l;if(e.side===wn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Br,a),l===null)return null;$l.copy(a),$l.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo($l);return c<n.near||c>n.far?null:{distance:c,point:$l.clone(),object:t}}function Yl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Wl),t.getVertexPosition(l,jl),t.getVertexPosition(c,Xl);const u=m3(t,e,n,i,Wl,jl,Xl,Dv);if(u){const d=new z;Wn.getBarycoord(Dv,Wl,jl,Xl,d),r&&(u.uv=Wn.getInterpolatedAttribute(r,a,l,c,d,new We)),s&&(u.uv1=Wn.getInterpolatedAttribute(s,a,l,c,d,new We)),o&&(u.normal=Wn.getInterpolatedAttribute(o,a,l,c,d,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};Wn.getNormal(Wl,jl,Xl,f.normal),u.face=f,u.barycoord=d}return u}class g3 extends ln{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Zt,u=Zt,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hd=new z,_3=new z,v3=new Oe;class Jr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=hd.subVectors(i,n).cross(_3.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(hd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||v3.getNormalMatrix(e),r=this.coplanarPoint(hd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new Wu,x3=new We(.5,.5),Kl=new z;class xg{constructor(e=new Jr,n=new Jr,i=new Jr,r=new Jr,s=new Jr,o=new Jr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],p=s[7],_=s[8],y=s[9],g=s[10],h=s[11],m=s[12],v=s[13],S=s[14],A=s[15];if(r[0].setComponents(c-o,p-u,h-_,A-m).normalize(),r[1].setComponents(c+o,p+u,h+_,A+m).normalize(),r[2].setComponents(c+a,p+d,h+y,A+v).normalize(),r[3].setComponents(c-a,p-d,h-y,A-v).normalize(),i)r[4].setComponents(l,f,g,S).normalize(),r[5].setComponents(c-l,p-f,h-g,A-S).normalize();else if(r[4].setComponents(c-l,p-f,h-g,A-S).normalize(),n===Ai)r[5].setComponents(c+l,p+f,h+g,A+S).normalize();else if(n===$a)r[5].setComponents(l,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){$r.center.set(0,0,0);const n=x3.distanceTo(e.center);return $r.radius=.7071067811865476+n,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Kl.x=r.normal.x>0?e.max.x:e.min.x,Kl.y=r.normal.y>0?e.max.y:e.min.y,Kl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rc extends Es{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xu=new z,yu=new z,Lv=new Et,ea=new G1,Zl=new Wu,pd=new z,Iv=new z;class Ip extends qt{constructor(e=new _n,n=new Rc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)xu.fromBufferAttribute(n,r-1),yu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=xu.distanceTo(yu);e.setAttribute("lineDistance",new gn(i,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(r),Zl.radius+=s,e.ray.intersectsSphere(Zl)===!1)return;Lv.copy(r).invert(),ea.copy(e.ray).applyMatrix4(Lv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let y=p,g=_-1;y<g;y+=c){const h=u.getX(y),m=u.getX(y+1),v=Jl(this,e,ea,l,h,m,y);v&&n.push(v)}if(this.isLineLoop){const y=u.getX(_-1),g=u.getX(p),h=Jl(this,e,ea,l,y,g,_-1);h&&n.push(h)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let y=p,g=_-1;y<g;y+=c){const h=Jl(this,e,ea,l,y,y+1,y);h&&n.push(h)}if(this.isLineLoop){const y=Jl(this,e,ea,l,_-1,p,_-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Jl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(xu.fromBufferAttribute(a,r),yu.fromBufferAttribute(a,s),n.distanceSqToSegment(xu,yu,pd,Iv)>i)return;pd.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(pd);if(!(c<e.near||c>e.far))return{distance:c,point:Iv.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const Nv=new z,Fv=new z;class y3 extends Ip{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Nv.fromBufferAttribute(n,r),Fv.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Nv.distanceTo(Fv);e.setAttribute("lineDistance",new gn(i,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class W1 extends ln{constructor(e=[],n=vs,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class S3 extends ln{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bo extends ln{constructor(e,n,i=Ii,r,s,o,a=Zt,l=Zt,c,u=tr,d=1){if(u!==tr&&u!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vg(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class M3 extends bo{constructor(e,n=Ii,i=vs,r,s,o=Zt,a=Zt,l,c=tr){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class j1 extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sl extends _n{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gn(c,3)),this.setAttribute("normal",new gn(u,3)),this.setAttribute("uv",new gn(d,2));function _(y,g,h,m,v,S,A,T,R,x,b){const P=S/R,D=A/x,O=S/2,q=A/2,Y=T/2,N=R+1,G=x+1;let H=0,L=0;const k=new z;for(let $=0;$<G;$++){const U=$*D-q;for(let Z=0;Z<N;Z++){const fe=Z*P-O;k[y]=fe*m,k[g]=U*v,k[h]=Y,c.push(k.x,k.y,k.z),k[y]=0,k[g]=0,k[h]=T>0?1:-1,u.push(k.x,k.y,k.z),d.push(Z/R),d.push(1-$/x),H+=1}}for(let $=0;$<x;$++)for(let U=0;U<R;U++){const Z=f+U+N*$,fe=f+U+N*($+1),Ie=f+(U+1)+N*($+1),Re=f+(U+1)+N*$;l.push(Z,fe,Re),l.push(fe,Ie,Re),L+=6}a.addGroup(p,L,b),p+=L,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ju extends _n{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],_=[],y=[],g=[];for(let h=0;h<u;h++){const m=h*f-o;for(let v=0;v<c;v++){const S=v*d-s;_.push(S,-m,0),y.push(0,0,1),g.push(v/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<a;m++){const v=m+c*h,S=m+c*(h+1),A=m+1+c*(h+1),T=m+1+c*h;p.push(v,S,T),p.push(S,A,T)}this.setIndex(p),this.setAttribute("position",new gn(_,3)),this.setAttribute("normal",new gn(y,3)),this.setAttribute("uv",new gn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ju(e.width,e.height,e.widthSegments,e.heightSegments)}}class ao extends _n{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new z,f=new z,p=[],_=[],y=[],g=[];for(let h=0;h<=i;h++){const m=[],v=h/i;let S=0;h===0&&o===0?S=.5/n:h===i&&l===Math.PI&&(S=-.5/n);for(let A=0;A<=n;A++){const T=A/n;d.x=-e*Math.cos(r+T*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+v*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),g.push(T+S,1-v),m.push(c++)}u.push(m)}for(let h=0;h<i;h++)for(let m=0;m<n;m++){const v=u[h][m+1],S=u[h][m],A=u[h+1][m],T=u[h+1][m+1];(h!==0||o>0)&&p.push(v,S,T),(h!==i-1||l<Math.PI)&&p.push(S,A,T)}this.setIndex(p),this.setAttribute("position",new gn(_,3)),this.setAttribute("normal",new gn(y,3)),this.setAttribute("uv",new gn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class E3 extends _n{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],i=new Set,r=new z,s=new z;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],f=d.start,p=d.count;for(let _=f,y=f+p;_<y;_+=3)for(let g=0;g<3;g++){const h=a.getX(_+g),m=a.getX(_+(g+1)%3);r.fromBufferAttribute(o,h),s.fromBufferAttribute(o,m),Uv(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,d=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,d),Uv(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new gn(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Uv(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)===!0||n.has(r)===!0?!1:(n.add(i),n.add(r),!0)}function Ro(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Bv(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Bv(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function fn(t){const e={};for(let n=0;n<t.length;n++){const i=Ro(t[n]);for(const r in i)e[r]=i[r]}return e}function Bv(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function T3(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function X1(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const w3={clone:Ro,merge:fn};var A3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends Es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A3,this.fragmentShader=C3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ro(e.uniforms),this.uniformsGroups=T3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class b3 extends Ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class R3 extends Es{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rp,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Or,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class P3 extends Es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class D3 extends Es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class q1 extends qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const md=new Et,Ov=new z,kv=new z;class L3{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xg,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Ov.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ov),kv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(kv),n.updateMatrixWorld(),md.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(md,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===$a||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ql=new z,ec=new Uo,_i=new z;class $1 extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ql,ec,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ql,ec,_i.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Ql,ec,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ql,ec,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const dr=new z,zv=new We,Vv=new We;class Gn extends $1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Lp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lp*2*Math.atan(Math.tan(Gf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,n){return this.getViewBounds(e,zv,Vv),n.subVectors(Vv,zv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Gf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class yg extends $1{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class I3 extends L3{constructor(){super(new yg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hv extends q1{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new I3}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class N3 extends q1{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Hs=-90,Gs=1;class F3 extends qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(Hs,Gs,e,n);r.layers=this.layers,this.add(r);const s=new Gn(Hs,Gs,e,n);s.layers=this.layers,this.add(s);const o=new Gn(Hs,Gs,e,n);o.layers=this.layers,this.add(o);const a=new Gn(Hs,Gs,e,n);a.layers=this.layers,this.add(a);const l=new Gn(Hs,Gs,e,n);l.layers=this.layers,this.add(l);const c=new Gn(Hs,Gs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$a)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class U3 extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Cg=class Cg{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Cg.prototype.isMatrix2=!0;let Gv=Cg;function Wv(t,e,n,i){const r=B3(i);switch(n){case L1:return t*e;case N1:return t*e/r.components*r.byteLength;case hg:return t*e/r.components*r.byteLength;case xs:return t*e*2/r.components*r.byteLength;case pg:return t*e*2/r.components*r.byteLength;case I1:return t*e*3/r.components*r.byteLength;case ai:return t*e*4/r.components*r.byteLength;case mg:return t*e*4/r.components*r.byteLength;case wc:case Ac:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Cc:case bc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ep:case np:return Math.max(t,16)*Math.max(e,8)/4;case Qh:case tp:return Math.max(t,8)*Math.max(e,8)/2;case ip:case rp:case op:case ap:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sp:case fu:case lp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case up:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case fp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case dp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case hp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case pp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case mp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case gp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case _p:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case vp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case xp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case yp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Sp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Mp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ep:case Tp:case wp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ap:case Cp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case du:case bp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function B3(t){switch(t){case Dn:case b1:return{byteLength:1,components:1};case Xa:case R1:case er:return{byteLength:2,components:1};case fg:case dg:return{byteLength:2,components:4};case Ii:case ug:case wi:return{byteLength:4,components:1};case P1:case D1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cg}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cg);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Y1(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function O3(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],y=d[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const y=d[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var k3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z3=`#ifdef USE_ALPHAHASH
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
#endif`,V3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,W3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j3=`#ifdef USE_AOMAP
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
#endif`,X3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Y3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,J3=`#ifdef USE_IRIDESCENCE
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
#endif`,Q3=`#ifdef USE_BUMPMAP
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
#endif`,eD=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,aD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,lD=`#define PI 3.141592653589793
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
} // validated`,cD=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uD=`vec3 transformedNormal = objectNormal;
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
#endif`,fD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hD=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mD="gl_FragColor = linearToOutputTexel( gl_FragColor );",gD=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_D=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,vD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xD=`#ifdef USE_ENVMAP
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
#endif`,yD=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SD=`#ifdef USE_ENVMAP
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
#endif`,MD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ED=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AD=`#ifdef USE_GRADIENTMAP
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
}`,CD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PD=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif
#include <lightprobes_pars_fragment>`,DD=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,LD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ID=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ND=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,BD=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OD=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,zD=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VD=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,HD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$D=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YD=`#if defined( USE_POINTS_UV )
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
#endif`,KD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tL=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,nL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rL=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lL=`#ifdef USE_NORMALMAP
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
#endif`,cL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pL=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,mL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_L=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ML=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,EL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,TL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AL=`#ifdef USE_SKINNING
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
#endif`,CL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bL=`#ifdef USE_SKINNING
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
#endif`,RL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LL=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,IL=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NL=`#ifdef USE_TRANSMISSION
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
#endif`,FL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zL=`uniform sampler2D t2D;
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
}`,VL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jL=`#include <common>
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
}`,XL=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qL=`#define DISTANCE
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
}`,$L=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,YL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZL=`uniform float scale;
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
}`,JL=`uniform vec3 diffuse;
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
}`,QL=`#include <common>
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
}`,eI=`uniform vec3 diffuse;
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
}`,tI=`#define LAMBERT
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
}`,nI=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,iI=`#define MATCAP
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
}`,rI=`#define MATCAP
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
}`,sI=`#define NORMAL
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
}`,oI=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,aI=`#define PHONG
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
}`,lI=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,cI=`#define STANDARD
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
}`,uI=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,fI=`#define TOON
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
}`,dI=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,hI=`uniform float size;
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
}`,pI=`uniform vec3 diffuse;
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
}`,mI=`#include <common>
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
}`,gI=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,_I=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,vI=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:k3,alphahash_pars_fragment:z3,alphamap_fragment:V3,alphamap_pars_fragment:H3,alphatest_fragment:G3,alphatest_pars_fragment:W3,aomap_fragment:j3,aomap_pars_fragment:X3,batching_pars_vertex:q3,batching_vertex:$3,begin_vertex:Y3,beginnormal_vertex:K3,bsdfs:Z3,iridescence_fragment:J3,bumpmap_pars_fragment:Q3,clipping_planes_fragment:eD,clipping_planes_pars_fragment:tD,clipping_planes_pars_vertex:nD,clipping_planes_vertex:iD,color_fragment:rD,color_pars_fragment:sD,color_pars_vertex:oD,color_vertex:aD,common:lD,cube_uv_reflection_fragment:cD,defaultnormal_vertex:uD,displacementmap_pars_vertex:fD,displacementmap_vertex:dD,emissivemap_fragment:hD,emissivemap_pars_fragment:pD,colorspace_fragment:mD,colorspace_pars_fragment:gD,envmap_fragment:_D,envmap_common_pars_fragment:vD,envmap_pars_fragment:xD,envmap_pars_vertex:yD,envmap_physical_pars_fragment:DD,envmap_vertex:SD,fog_vertex:MD,fog_pars_vertex:ED,fog_fragment:TD,fog_pars_fragment:wD,gradientmap_pars_fragment:AD,lightmap_pars_fragment:CD,lights_lambert_fragment:bD,lights_lambert_pars_fragment:RD,lights_pars_begin:PD,lights_toon_fragment:LD,lights_toon_pars_fragment:ID,lights_phong_fragment:ND,lights_phong_pars_fragment:FD,lights_physical_fragment:UD,lights_physical_pars_fragment:BD,lights_fragment_begin:OD,lights_fragment_maps:kD,lights_fragment_end:zD,lightprobes_pars_fragment:VD,logdepthbuf_fragment:HD,logdepthbuf_pars_fragment:GD,logdepthbuf_pars_vertex:WD,logdepthbuf_vertex:jD,map_fragment:XD,map_pars_fragment:qD,map_particle_fragment:$D,map_particle_pars_fragment:YD,metalnessmap_fragment:KD,metalnessmap_pars_fragment:ZD,morphinstance_vertex:JD,morphcolor_vertex:QD,morphnormal_vertex:eL,morphtarget_pars_vertex:tL,morphtarget_vertex:nL,normal_fragment_begin:iL,normal_fragment_maps:rL,normal_pars_fragment:sL,normal_pars_vertex:oL,normal_vertex:aL,normalmap_pars_fragment:lL,clearcoat_normal_fragment_begin:cL,clearcoat_normal_fragment_maps:uL,clearcoat_pars_fragment:fL,iridescence_pars_fragment:dL,opaque_fragment:hL,packing:pL,premultiplied_alpha_fragment:mL,project_vertex:gL,dithering_fragment:_L,dithering_pars_fragment:vL,roughnessmap_fragment:xL,roughnessmap_pars_fragment:yL,shadowmap_pars_fragment:SL,shadowmap_pars_vertex:ML,shadowmap_vertex:EL,shadowmask_pars_fragment:TL,skinbase_vertex:wL,skinning_pars_vertex:AL,skinning_vertex:CL,skinnormal_vertex:bL,specularmap_fragment:RL,specularmap_pars_fragment:PL,tonemapping_fragment:DL,tonemapping_pars_fragment:LL,transmission_fragment:IL,transmission_pars_fragment:NL,uv_pars_fragment:FL,uv_pars_vertex:UL,uv_vertex:BL,worldpos_vertex:OL,background_vert:kL,background_frag:zL,backgroundCube_vert:VL,backgroundCube_frag:HL,cube_vert:GL,cube_frag:WL,depth_vert:jL,depth_frag:XL,distance_vert:qL,distance_frag:$L,equirect_vert:YL,equirect_frag:KL,linedashed_vert:ZL,linedashed_frag:JL,meshbasic_vert:QL,meshbasic_frag:eI,meshlambert_vert:tI,meshlambert_frag:nI,meshmatcap_vert:iI,meshmatcap_frag:rI,meshnormal_vert:sI,meshnormal_frag:oI,meshphong_vert:aI,meshphong_frag:lI,meshphysical_vert:cI,meshphysical_frag:uI,meshtoon_vert:fI,meshtoon_frag:dI,points_vert:hI,points_frag:pI,shadow_vert:mI,shadow_frag:gI,sprite_vert:_I,sprite_frag:vI},_e={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Mi={basic:{uniforms:fn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:fn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:fn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:fn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:fn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Qe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:fn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:fn([_e.points,_e.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:fn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:fn([_e.common,_e.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:fn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:fn([_e.sprite,_e.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:fn([_e.common,_e.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:fn([_e.lights,_e.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Mi.physical={uniforms:fn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const tc={r:0,b:0,g:0},xI=new Et,K1=new Oe;K1.set(-1,0,0,0,1,0,0,0,1);function yI(t,e,n,i,r,s){const o=new Qe(0);let a=r===!0?0:1,l,c,u=null,d=0,f=null;function p(m){let v=m.isScene===!0?m.background:null;if(v&&v.isTexture){const S=m.backgroundBlurriness>0;v=e.get(v,S)}return v}function _(m){let v=!1;const S=p(m);S===null?g(o,a):S&&S.isColor&&(g(S,1),v=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(m,v){const S=p(v);S&&(S.isCubeTexture||S.mapping===Gu)?(c===void 0&&(c=new Yn(new sl(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:Ro(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xI.makeRotationFromEuler(v.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(K1),c.material.toneMapped=Ye.getTransfer(S.colorSpace)!==nt,(u!==S||d!==S.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Yn(new ju(2,2),new Ni({name:"BackgroundMaterial",uniforms:Ro(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(S.colorSpace)!==nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,v){m.getRGB(tc,X1(t)),n.buffers.color.setClear(tc.r,tc.g,tc.b,v,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(m,v=1){o.set(m),a=v,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:_,addToRenderList:y,dispose:h}}function SI(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(D,O,q,Y,N){let G=!1;const H=d(D,Y,q,O);s!==H&&(s=H,c(s.object)),G=p(D,Y,q,N),G&&_(D,Y,q,N),N!==null&&e.update(N,t.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,S(D,O,q,Y),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function u(D){return t.deleteVertexArray(D)}function d(D,O,q,Y){const N=Y.wireframe===!0;let G=i[O.id];G===void 0&&(G={},i[O.id]=G);const H=D.isInstancedMesh===!0?D.id:0;let L=G[H];L===void 0&&(L={},G[H]=L);let k=L[q.id];k===void 0&&(k={},L[q.id]=k);let $=k[N];return $===void 0&&($=f(l()),k[N]=$),$}function f(D){const O=[],q=[],Y=[];for(let N=0;N<n;N++)O[N]=0,q[N]=0,Y[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:Y,object:D,attributes:{},index:null}}function p(D,O,q,Y){const N=s.attributes,G=O.attributes;let H=0;const L=q.getAttributes();for(const k in L)if(L[k].location>=0){const U=N[k];let Z=G[k];if(Z===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),U===void 0||U.attribute!==Z||Z&&U.data!==Z.data)return!0;H++}return s.attributesNum!==H||s.index!==Y}function _(D,O,q,Y){const N={},G=O.attributes;let H=0;const L=q.getAttributes();for(const k in L)if(L[k].location>=0){let U=G[k];U===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(U=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(U=D.instanceColor));const Z={};Z.attribute=U,U&&U.data&&(Z.data=U.data),N[k]=Z,H++}s.attributes=N,s.attributesNum=H,s.index=Y}function y(){const D=s.newAttributes;for(let O=0,q=D.length;O<q;O++)D[O]=0}function g(D){h(D,0)}function h(D,O){const q=s.newAttributes,Y=s.enabledAttributes,N=s.attributeDivisors;q[D]=1,Y[D]===0&&(t.enableVertexAttribArray(D),Y[D]=1),N[D]!==O&&(t.vertexAttribDivisor(D,O),N[D]=O)}function m(){const D=s.newAttributes,O=s.enabledAttributes;for(let q=0,Y=O.length;q<Y;q++)O[q]!==D[q]&&(t.disableVertexAttribArray(q),O[q]=0)}function v(D,O,q,Y,N,G,H){H===!0?t.vertexAttribIPointer(D,O,q,N,G):t.vertexAttribPointer(D,O,q,Y,N,G)}function S(D,O,q,Y){y();const N=Y.attributes,G=q.getAttributes(),H=O.defaultAttributeValues;for(const L in G){const k=G[L];if(k.location>=0){let $=N[L];if($===void 0&&(L==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),L==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){const U=$.normalized,Z=$.itemSize,fe=e.get($);if(fe===void 0)continue;const Ie=fe.buffer,Re=fe.type,J=fe.bytesPerElement,me=Re===t.INT||Re===t.UNSIGNED_INT||$.gpuType===ug;if($.isInterleavedBufferAttribute){const ae=$.data,Le=ae.stride,Be=$.offset;if(ae.isInstancedInterleavedBuffer){for(let Fe=0;Fe<k.locationSize;Fe++)h(k.location+Fe,ae.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Fe=0;Fe<k.locationSize;Fe++)g(k.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let Fe=0;Fe<k.locationSize;Fe++)v(k.location+Fe,Z/k.locationSize,Re,U,Le*J,(Be+Z/k.locationSize*Fe)*J,me)}else{if($.isInstancedBufferAttribute){for(let ae=0;ae<k.locationSize;ae++)h(k.location+ae,$.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ae=0;ae<k.locationSize;ae++)g(k.location+ae);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let ae=0;ae<k.locationSize;ae++)v(k.location+ae,Z/k.locationSize,Re,U,Z*J,Z/k.locationSize*ae*J,me)}}else if(H!==void 0){const U=H[L];if(U!==void 0)switch(U.length){case 2:t.vertexAttrib2fv(k.location,U);break;case 3:t.vertexAttrib3fv(k.location,U);break;case 4:t.vertexAttrib4fv(k.location,U);break;default:t.vertexAttrib1fv(k.location,U)}}}}m()}function A(){b();for(const D in i){const O=i[D];for(const q in O){const Y=O[q];for(const N in Y){const G=Y[N];for(const H in G)u(G[H].object),delete G[H];delete Y[N]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;const O=i[D.id];for(const q in O){const Y=O[q];for(const N in Y){const G=Y[N];for(const H in G)u(G[H].object),delete G[H];delete Y[N]}}delete i[D.id]}function R(D){for(const O in i){const q=i[O];for(const Y in q){const N=q[Y];if(N[D.id]===void 0)continue;const G=N[D.id];for(const H in G)u(G[H].object),delete G[H];delete N[D.id]}}}function x(D){for(const O in i){const q=i[O],Y=D.isInstancedMesh===!0?D.id:0,N=q[Y];if(N!==void 0){for(const G in N){const H=N[G];for(const L in H)u(H[L].object),delete H[L];delete N[G]}delete q[Y],Object.keys(q).length===0&&delete i[O]}}}function b(){P(),o=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:g,disableUnusedAttributes:m}}function MI(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function EI(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==ai&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const x=R===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Dn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==wi&&!x)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ne("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:S,maxSamples:A,samples:T}}function TI(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Jr,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{const m=s?0:i,v=m*4;let S=h.clippingState||null;l.value=S,S=u(_,f,v,p);for(let A=0;A!==v;++A)S[A]=n[A];h.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,_){const y=d!==null?d.length:0;let g=null;if(y!==0){if(g=l.value,_!==!0||g===null){const h=p+y*4,m=f.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<h)&&(g=new Float32Array(h));for(let v=0,S=p;v!==y;++v,S+=4)o.copy(d[v]).applyMatrix4(m,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}const Er=4,jv=[.125,.215,.35,.446,.526,.582],es=20,wI=256,ta=new yg,Xv=new Qe;let gd=null,_d=0,vd=0,xd=!1;const AI=new z;class qv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=AI}=s;gd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gd,_d,vd),this._renderer.xr.enabled=xd,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===vs||e.mapping===Co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:er,format:ai,colorSpace:hu,depthBuffer:!1},r=$v(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$v(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=CI(s)),this._blurMaterial=RI(s,e,n),this._ggxMaterial=bI(s,e,n)}return r}_compileMaterial(e){const n=new Yn(new _n,e);this._renderer.compile(n,ta)}_sceneToCubeUV(e,n,i,r,s){const l=new Gn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Xv),d.toneMapping=Pi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yn(new sl,new vu({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let h=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,h=!0):(g.color.copy(Xv),h=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[v],s.y,s.z)):S===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[v]));const A=this._cubeSize;Ws(r,S*A,v>2?A:0,A,A),d.setRenderTarget(r),h&&d.render(y,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===vs||e.mapping===Co;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ws(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ta)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,p=d*f,{_lodMax:_}=this,y=this._sizeLods[i],g=3*y*(i>_-Er?i-_+Er:0),h=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-n,Ws(s,g,h,3*y,2*y),r.setRenderTarget(s),r.render(a,ta),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Ws(e,g,h,3*y,2*y),r.setRenderTarget(e),r.render(a,ta)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*es-1),y=s/_,g=isFinite(s)?1+Math.floor(u*y):es;g>es&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${es}`);const h=[];let m=0;for(let R=0;R<es;++R){const x=R/y,b=Math.exp(-x*x/2);h.push(b),R===0?m+=b:R<g&&(m+=2*b)}for(let R=0;R<h.length;R++)h[R]=h[R]/m;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const S=this._sizeLods[r],A=3*S*(r>v-Er?r-v+Er:0),T=4*(this._cubeSize-S);Ws(n,A,T,3*S,2*S),l.setRenderTarget(n),l.render(d,ta)}}function CI(t){const e=[],n=[],i=[];let r=t;const s=t-Er+1+jv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Er?l=jv[o-t+Er-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,y=3,g=2,h=1,m=new Float32Array(y*_*p),v=new Float32Array(g*_*p),S=new Float32Array(h*_*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,x=T>2?0:-1,b=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];m.set(b,y*_*T),v.set(f,g*_*T);const P=[T,T,T,T,T,T];S.set(P,h*_*T)}const A=new _n;A.setAttribute("position",new fi(m,y)),A.setAttribute("uv",new fi(v,g)),A.setAttribute("faceIndex",new fi(S,h)),i.push(new Yn(A,null)),r>Er&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function $v(t,e,n){const i=new Di(t,e,n);return i.texture.mapping=Gu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ws(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function bI(t,e,n){return new Ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wI,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function RI(t,e,n){const i=new Float32Array(es),r=new z(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Yv(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Kv(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Xu(){return`

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
	`}class Z1 extends Di{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new W1(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new sl(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:Ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:$i});s.uniforms.tEquirect.value=n;const o=new Yn(r,s),a=n.minFilter;return n.minFilter===as&&(n.minFilter=Jt),new F3(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function PI(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?o(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===zf||p===Vf)if(e.has(f)){const _=e.get(f).texture;return a(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const y=new Z1(_.height);return y.fromEquirectangularTexture(t,f),e.set(f,y),f.addEventListener("dispose",c),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const p=f.mapping,_=p===zf||p===Vf,y=p===vs||p===Co;if(_||y){let g=n.get(f);const h=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new qv(t)),g=_?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{const m=f.image;return _&&m&&m.height>0||y&&m&&l(m)?(i===null&&(i=new qv(t)),g=_?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,p){return p===zf?f.mapping=vs:p===Vf&&(f.mapping=Co),f}function l(f){let p=0;const _=6;for(let y=0;y<_;y++)f[y]!==void 0&&p++;return p===_}function c(f){const p=f.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function DI(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Dp("WebGLRenderer: "+i+" extension not supported."),r}}}function LI(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,_=d.attributes.position;let y=0;if(_===void 0)return;if(p!==null){const m=p.array;y=p.version;for(let v=0,S=m.length;v<S;v+=3){const A=m[v+0],T=m[v+1],R=m[v+2];f.push(A,T,T,R,R,A)}}else{const m=_.array;y=_.version;for(let v=0,S=m.length/3-1;v<S;v+=3){const A=v+0,T=v+1,R=v+2;f.push(A,T,T,R,R,A)}}const g=new(_.count>=65535?z1:k1)(f,1);g.version=y;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function II(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){t.drawElements(i,f,s,d*o),n.update(f,i,1)}function c(d,f,p){p!==0&&(t.drawElementsInstanced(i,f,s,d*o,p),n.update(f,i,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let y=0;for(let g=0;g<p;g++)y+=f[g];n.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function NI(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function FI(t,e,n){const i=new WeakMap,r=new Rt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let P=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",P)};var p=P;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),g===!0&&(S=3);let A=a.attributes.position.count*S,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*T*4*d),x=new U1(R,A,T,d);x.type=wi,x.needsUpdate=!0;const b=S*4;for(let D=0;D<d;D++){const O=h[D],q=m[D],Y=v[D],N=A*T*4*D;for(let G=0;G<O.count;G++){const H=G*b;_===!0&&(r.fromBufferAttribute(O,G),R[N+H+0]=r.x,R[N+H+1]=r.y,R[N+H+2]=r.z,R[N+H+3]=0),y===!0&&(r.fromBufferAttribute(q,G),R[N+H+4]=r.x,R[N+H+5]=r.y,R[N+H+6]=r.z,R[N+H+7]=0),g===!0&&(r.fromBufferAttribute(Y,G),R[N+H+8]=r.x,R[N+H+9]=r.y,R[N+H+10]=r.z,R[N+H+11]=Y.itemSize===4?r.w:1)}}f={count:d,texture:x,size:new We(A,T)},i.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function UI(t,e,n,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const BI={[y1]:"LINEAR_TONE_MAPPING",[S1]:"REINHARD_TONE_MAPPING",[M1]:"CINEON_TONE_MAPPING",[E1]:"ACES_FILMIC_TONE_MAPPING",[w1]:"AGX_TONE_MAPPING",[A1]:"NEUTRAL_TONE_MAPPING",[T1]:"CUSTOM_TONE_MAPPING"};function OI(t,e,n,i,r){const s=new Di(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new bo(e,n):void 0}),o=new Di(e,n,{type:er,depthBuffer:!1,stencilBuffer:!1}),a=new _n;a.setAttribute("position",new gn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new gn([0,2,0,0,2,0],2));const l=new b3({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Yn(a,l),u=new yg(-1,1,1,-1,0,1);let d=null,f=null,p=!1,_,y=null,g=[],h=!1;this.setSize=function(m,v){s.setSize(m,v),o.setSize(m,v);for(let S=0;S<g.length;S++){const A=g[S];A.setSize&&A.setSize(m,v)}},this.setEffects=function(m){g=m,h=g.length>0&&g[0].isRenderPass===!0;const v=s.width,S=s.height;for(let A=0;A<g.length;A++){const T=g[A];T.setSize&&T.setSize(v,S)}},this.begin=function(m,v){if(p||m.toneMapping===Pi&&g.length===0)return!1;if(y=v,v!==null){const S=v.width,A=v.height;(s.width!==S||s.height!==A)&&this.setSize(S,A)}return h===!1&&m.setRenderTarget(s),_=m.toneMapping,m.toneMapping=Pi,!0},this.hasRenderPass=function(){return h},this.end=function(m,v){m.toneMapping=_,p=!0;let S=s,A=o;for(let T=0;T<g.length;T++){const R=g[T];if(R.enabled!==!1&&(R.render(m,A,S,v),R.needsSwap!==!1)){const x=S;S=A,A=x}}if(d!==m.outputColorSpace||f!==m.toneMapping){d=m.outputColorSpace,f=m.toneMapping,l.defines={},Ye.getTransfer(d)===nt&&(l.defines.SRGB_TRANSFER="");const T=BI[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,m.setRenderTarget(y),m.render(c,u),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const J1=new ln,Np=new bo(1,1),Q1=new U1,eE=new e3,tE=new W1,Zv=[],Jv=[],Qv=new Float32Array(16),ex=new Float32Array(9),tx=new Float32Array(4);function Bo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Zv[r];if(s===void 0&&(s=new Float32Array(r),Zv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function qu(t,e){let n=Jv[e];n===void 0&&(n=new Int32Array(e),Jv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function kI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function zI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function VI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function HI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function GI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;tx.set(i),t.uniformMatrix2fv(this.addr,!1,tx),Gt(n,i)}}function WI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;ex.set(i),t.uniformMatrix3fv(this.addr,!1,ex),Gt(n,i)}}function jI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;Qv.set(i),t.uniformMatrix4fv(this.addr,!1,Qv),Gt(n,i)}}function XI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function qI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function $I(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function YI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function KI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ZI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function JI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function QI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function eN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Np.compareFunction=n.isReversedDepthBuffer()?_g:gg,s=Np):s=J1,n.setTexture2D(e||s,r)}function tN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||eE,r)}function nN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||tE,r)}function iN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Q1,r)}function rN(t){switch(t){case 5126:return kI;case 35664:return zI;case 35665:return VI;case 35666:return HI;case 35674:return GI;case 35675:return WI;case 35676:return jI;case 5124:case 35670:return XI;case 35667:case 35671:return qI;case 35668:case 35672:return $I;case 35669:case 35673:return YI;case 5125:return KI;case 36294:return ZI;case 36295:return JI;case 36296:return QI;case 35678:case 36198:case 36298:case 36306:case 35682:return eN;case 35679:case 36299:case 36307:return tN;case 35680:case 36300:case 36308:case 36293:return nN;case 36289:case 36303:case 36311:case 36292:return iN}}function sN(t,e){t.uniform1fv(this.addr,e)}function oN(t,e){const n=Bo(e,this.size,2);t.uniform2fv(this.addr,n)}function aN(t,e){const n=Bo(e,this.size,3);t.uniform3fv(this.addr,n)}function lN(t,e){const n=Bo(e,this.size,4);t.uniform4fv(this.addr,n)}function cN(t,e){const n=Bo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function uN(t,e){const n=Bo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function fN(t,e){const n=Bo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function dN(t,e){t.uniform1iv(this.addr,e)}function hN(t,e){t.uniform2iv(this.addr,e)}function pN(t,e){t.uniform3iv(this.addr,e)}function mN(t,e){t.uniform4iv(this.addr,e)}function gN(t,e){t.uniform1uiv(this.addr,e)}function _N(t,e){t.uniform2uiv(this.addr,e)}function vN(t,e){t.uniform3uiv(this.addr,e)}function xN(t,e){t.uniform4uiv(this.addr,e)}function yN(t,e,n){const i=this.cache,r=e.length,s=qu(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Np:o=J1;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function SN(t,e,n){const i=this.cache,r=e.length,s=qu(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||eE,s[o])}function MN(t,e,n){const i=this.cache,r=e.length,s=qu(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||tE,s[o])}function EN(t,e,n){const i=this.cache,r=e.length,s=qu(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Q1,s[o])}function TN(t){switch(t){case 5126:return sN;case 35664:return oN;case 35665:return aN;case 35666:return lN;case 35674:return cN;case 35675:return uN;case 35676:return fN;case 5124:case 35670:return dN;case 35667:case 35671:return hN;case 35668:case 35672:return pN;case 35669:case 35673:return mN;case 5125:return gN;case 36294:return _N;case 36295:return vN;case 36296:return xN;case 35678:case 36198:case 36298:case 36306:case 35682:return yN;case 35679:case 36299:case 36307:return SN;case 35680:case 36300:case 36308:case 36293:return MN;case 36289:case 36303:case 36311:case 36292:return EN}}class wN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=rN(n.type)}}class AN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=TN(n.type)}}class CN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const yd=/(\w+)(\])?(\[|\.)?/g;function nx(t,e){t.seq.push(e),t.map[e.id]=e}function bN(t,e,n){const i=t.name,r=i.length;for(yd.lastIndex=0;;){const s=yd.exec(i),o=yd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){nx(n,c===void 0?new wN(a,t,e):new AN(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new CN(a),nx(n,d)),n=d}}}class Pc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);bN(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function ix(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const RN=37297;let PN=0;function DN(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const rx=new Oe;function LN(t){Ye._getMatrix(rx,Ye.workingColorSpace,t);const e=`mat3( ${rx.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case pu:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function sx(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+DN(t.getShaderSource(e),a)}else return s}function IN(t,e){const n=LN(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const NN={[y1]:"Linear",[S1]:"Reinhard",[M1]:"Cineon",[E1]:"ACESFilmic",[w1]:"AgX",[A1]:"Neutral",[T1]:"Custom"};function FN(t,e){const n=NN[e];return n===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const nc=new z;function UN(){Ye.getLuminanceCoefficients(nc);const t=nc.x.toFixed(4),e=nc.y.toFixed(4),n=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function ON(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function kN(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function fa(t){return t!==""}function ox(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ax(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fp(t){return t.replace(zN,HN)}const VN=new Map;function HN(t,e){let n=He[e];if(n===void 0){const i=VN.get(e);if(i!==void 0)n=He[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fp(n)}const GN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lx(t){return t.replace(GN,WN)}function WN(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cx(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const jN={[Tc]:"SHADOWMAP_TYPE_PCF",[ca]:"SHADOWMAP_TYPE_VSM"};function XN(t){return jN[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qN={[vs]:"ENVMAP_TYPE_CUBE",[Co]:"ENVMAP_TYPE_CUBE",[Gu]:"ENVMAP_TYPE_CUBE_UV"};function $N(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":qN[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const YN={[Co]:"ENVMAP_MODE_REFRACTION"};function KN(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":YN[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ZN={[x1]:"ENVMAP_BLENDING_MULTIPLY",[I2]:"ENVMAP_BLENDING_MIX",[N2]:"ENVMAP_BLENDING_ADD"};function JN(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":ZN[t.combine]||"ENVMAP_BLENDING_NONE"}function QN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function eF(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=XN(n),c=$N(n),u=KN(n),d=JN(n),f=QN(n),p=BN(n),_=ON(s),y=r.createProgram();let g,h,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(fa).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(fa).join(`
`),h.length>0&&(h+=`
`)):(g=[cx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),h=[cx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pi?"#define TONE_MAPPING":"",n.toneMapping!==Pi?He.tonemapping_pars_fragment:"",n.toneMapping!==Pi?FN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,IN("linearToOutputTexel",n.outputColorSpace),UN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fa).join(`
`)),o=Fp(o),o=ox(o,n),o=ax(o,n),a=Fp(a),a=ox(a,n),a=ax(a,n),o=lx(o),a=lx(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===pv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===pv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=m+g+o,S=m+h+a,A=ix(r,r.VERTEX_SHADER,v),T=ix(r,r.FRAGMENT_SHADER,S);r.attachShader(y,A),r.attachShader(y,T),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(D){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(y)||"",q=r.getShaderInfoLog(A)||"",Y=r.getShaderInfoLog(T)||"",N=O.trim(),G=q.trim(),H=Y.trim();let L=!0,k=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(L=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,A,T);else{const $=sx(r,A,"vertex"),U=sx(r,T,"fragment");Ze("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+$+`
`+U)}else N!==""?Ne("WebGLProgram: Program Info Log:",N):(G===""||H==="")&&(k=!1);k&&(D.diagnostics={runnable:L,programLog:N,vertexShader:{log:G,prefix:g},fragmentShader:{log:H,prefix:h}})}r.deleteShader(A),r.deleteShader(T),x=new Pc(r,y),b=kN(r,y)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(y,RN)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=PN++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=T,this}let tF=0;class nF{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new iF(e),n.set(e,i)),i}}class iF{constructor(e){this.id=tF++,this.code=e,this.usedTimes=0}}function rF(t){return t===xs||t===fu||t===du}function sF(t,e,n,i,r,s){const o=new B1,a=new nF,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,b,P,D,O,q){const Y=D.fog,N=O.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,L=e.get(x.envMap||G,H),k=L&&L.mapping===Gu?L.image.height:null,$=p[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Ne("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const U=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Z=U!==void 0?U.length:0;let fe=0;N.morphAttributes.position!==void 0&&(fe=1),N.morphAttributes.normal!==void 0&&(fe=2),N.morphAttributes.color!==void 0&&(fe=3);let Ie,Re,J,me;if($){const ke=Mi[$];Ie=ke.vertexShader,Re=ke.fragmentShader}else Ie=x.vertexShader,Re=x.fragmentShader,a.update(x),J=a.getVertexShaderID(x),me=a.getFragmentShaderID(x);const ae=t.getRenderTarget(),Le=t.state.buffers.depth.getReversed(),Be=O.isInstancedMesh===!0,Fe=O.isBatchedMesh===!0,xt=!!x.map,qe=!!x.matcap,rt=!!L,pt=!!x.aoMap,je=!!x.lightMap,Bt=!!x.bumpMap,yt=!!x.normalMap,An=!!x.displacementMap,F=!!x.emissiveMap,Ot=!!x.metalnessMap,$e=!!x.roughnessMap,ft=x.anisotropy>0,ge=x.clearcoat>0,wt=x.dispersion>0,C=x.iridescence>0,M=x.sheen>0,V=x.transmission>0,te=ft&&!!x.anisotropyMap,se=ge&&!!x.clearcoatMap,le=ge&&!!x.clearcoatNormalMap,pe=ge&&!!x.clearcoatRoughnessMap,K=C&&!!x.iridescenceMap,ne=C&&!!x.iridescenceThicknessMap,ye=M&&!!x.sheenColorMap,Ee=M&&!!x.sheenRoughnessMap,de=!!x.specularMap,ce=!!x.specularColorMap,Ue=!!x.specularIntensityMap,Ve=V&&!!x.transmissionMap,tt=V&&!!x.thicknessMap,I=!!x.gradientMap,ue=!!x.alphaMap,ee=x.alphaTest>0,Se=!!x.alphaHash,he=!!x.extensions;let re=Pi;x.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(re=t.toneMapping);const be={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:Ie,fragmentShader:Re,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Fe,batchingColor:Fe&&O._colorsTexture!==null,instancing:Be,instancingColor:Be&&O.instanceColor!==null,instancingMorph:Be&&O.morphTexture!==null,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:xt,matcap:qe,envMap:rt,envMapMode:rt&&L.mapping,envMapCubeUVHeight:k,aoMap:pt,lightMap:je,bumpMap:Bt,normalMap:yt,displacementMap:An,emissiveMap:F,normalMapObjectSpace:yt&&x.normalMapType===B2,normalMapTangentSpace:yt&&x.normalMapType===Rp,packedNormalMap:yt&&x.normalMapType===Rp&&rF(x.normalMap.format),metalnessMap:Ot,roughnessMap:$e,anisotropy:ft,anisotropyMap:te,clearcoat:ge,clearcoatMap:se,clearcoatNormalMap:le,clearcoatRoughnessMap:pe,dispersion:wt,iridescence:C,iridescenceMap:K,iridescenceThicknessMap:ne,sheen:M,sheenColorMap:ye,sheenRoughnessMap:Ee,specularMap:de,specularColorMap:ce,specularIntensityMap:Ue,transmission:V,transmissionMap:Ve,thicknessMap:tt,gradientMap:I,opaque:x.transparent===!1&&x.blending===mo&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:ee,alphaHash:Se,combine:x.combine,mapUv:xt&&_(x.map.channel),aoMapUv:pt&&_(x.aoMap.channel),lightMapUv:je&&_(x.lightMap.channel),bumpMapUv:Bt&&_(x.bumpMap.channel),normalMapUv:yt&&_(x.normalMap.channel),displacementMapUv:An&&_(x.displacementMap.channel),emissiveMapUv:F&&_(x.emissiveMap.channel),metalnessMapUv:Ot&&_(x.metalnessMap.channel),roughnessMapUv:$e&&_(x.roughnessMap.channel),anisotropyMapUv:te&&_(x.anisotropyMap.channel),clearcoatMapUv:se&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&_(x.sheenRoughnessMap.channel),specularMapUv:de&&_(x.specularMap.channel),specularColorMapUv:ce&&_(x.specularColorMap.channel),specularIntensityMapUv:Ue&&_(x.specularIntensityMap.channel),transmissionMapUv:Ve&&_(x.transmissionMap.channel),thicknessMapUv:tt&&_(x.thicknessMap.channel),alphaMapUv:ue&&_(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(yt||ft),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(xt||ue),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&yt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Le,skinning:O.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:fe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:re,decodeVideoTexture:xt&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===nt,decodeVideoTextureEmissive:F&&x.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(x.emissiveMap.colorSpace)===nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Gi,flipSided:x.side===wn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:he&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&x.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function g(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)b.push(P),b.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(h(b,x),m(b,x),b.push(t.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function h(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function m(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function v(x){const b=p[x.type];let P;if(b){const D=Mi[b];P=w3.clone(D.uniforms)}else P=x.uniforms;return P}function S(x,b){let P=u.get(b);return P!==void 0?++P.usedTimes:(P=new eF(t,b,x,r),c.push(P),u.set(b,P)),P}function A(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function R(){a.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:v,acquireProgram:S,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:R}}function oF(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function aF(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function ux(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function fx(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,_,y,g,h){let m=t[e];return m===void 0?(m={id:f.id,object:f,geometry:p,material:_,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:g,group:h},t[e]=m):(m.id=f.id,m.object=f,m.geometry=p,m.material=_,m.materialVariant=o(f),m.groupOrder=y,m.renderOrder=f.renderOrder,m.z=g,m.group=h),e++,m}function l(f,p,_,y,g,h){const m=a(f,p,_,y,g,h);_.transmission>0?i.push(m):_.transparent===!0?r.push(m):n.push(m)}function c(f,p,_,y,g,h){const m=a(f,p,_,y,g,h);_.transmission>0?i.unshift(m):_.transparent===!0?r.unshift(m):n.unshift(m)}function u(f,p){n.length>1&&n.sort(f||aF),i.length>1&&i.sort(p||ux),r.length>1&&r.sort(p||ux)}function d(){for(let f=e,p=t.length;f<p;f++){const _=t[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function lF(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new fx,t.set(i,[o])):r>=s.length?(o=new fx,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function cF(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Qe};break;case"SpotLight":n={position:new z,direction:new z,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function uF(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let fF=0;function dF(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function hF(t){const e=new cF,n=uF(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new Et,o=new Et;function a(c){let u=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,_=0,y=0,g=0,h=0,m=0,v=0,S=0,A=0,T=0,R=0;c.sort(dF);for(let b=0,P=c.length;b<P;b++){const D=c[b],O=D.color,q=D.intensity,Y=D.distance;let N=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===xs?N=D.shadow.map.texture:N=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=O.r*q,d+=O.g*q,f+=O.b*q;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],q);R++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const H=D.shadow,L=n.get(D);L.shadowIntensity=H.intensity,L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=N,i.directionalShadowMatrix[p]=D.shadow.matrix,m++}i.directional[p]=G,p++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(O).multiplyScalar(q),G.distance=Y,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[y]=G;const H=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,H.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[y]=H.matrix,D.castShadow){const L=n.get(D);L.shadowIntensity=H.intensity,L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,i.spotShadow[y]=L,i.spotShadowMap[y]=N,S++}y++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(O).multiplyScalar(q),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=G,g++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const H=D.shadow,L=n.get(D);L.shadowIntensity=H.intensity,L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,L.shadowCameraNear=H.camera.near,L.shadowCameraFar=H.camera.far,i.pointShadow[_]=L,i.pointShadowMap[_]=N,i.pointShadowMatrix[_]=D.shadow.matrix,v++}i.point[_]=G,_++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(q),G.groundColor.copy(D.groundColor).multiplyScalar(q),i.hemi[h]=G,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==p||x.pointLength!==_||x.spotLength!==y||x.rectAreaLength!==g||x.hemiLength!==h||x.numDirectionalShadows!==m||x.numPointShadows!==v||x.numSpotShadows!==S||x.numSpotMaps!==A||x.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=g,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,x.directionalLength=p,x.pointLength=_,x.spotLength=y,x.rectAreaLength=g,x.hemiLength=h,x.numDirectionalShadows=m,x.numPointShadows=v,x.numSpotShadows=S,x.numSpotMaps=A,x.numLightProbes=R,i.version=fF++)}function l(c,u){let d=0,f=0,p=0,_=0,y=0;const g=u.matrixWorldInverse;for(let h=0,m=c.length;h<m;h++){const v=c[h];if(v.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:i}}function dx(t){const e=new hF(t),n=[],i=[],r=[];function s(f){d.camera=f,n.length=0,i.length=0,r.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(n)}function u(f){e.setupView(n,f)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function pF(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new dx(t),e.set(r,[a])):s>=o.length?(a=new dx(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const mF=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gF=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_F=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],vF=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],hx=new Et,na=new z,Sd=new z;function xF(t,e,n){let i=new xg;const r=new We,s=new We,o=new Rt,a=new P3,l=new D3,c={},u=n.maxTextureSize,d={[Br]:wn,[wn]:Br,[Gi]:Gi},f=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:mF,fragmentShader:gF}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new _n;_.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Yn(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let h=this.type;this.render=function(T,R,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===p2&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Tc);const b=t.getRenderTarget(),P=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),O=t.state;O.setBlending($i),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const q=h!==this.type;q&&R.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(N=>N.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,N=T.length;Y<N;Y++){const G=T[Y],H=G.shadow;if(H===void 0){Ne("WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const L=H.getFrameExtents();r.multiply(L),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/L.x),r.x=s.x*L.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/L.y),r.y=s.y*L.y,H.mapSize.y=s.y));const k=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=k,H.map===null||q===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ca){if(G.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Di(r.x,r.y,{format:xs,type:er,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),H.map.texture.name=G.name+".shadowMap",H.map.depthTexture=new bo(r.x,r.y,wi),H.map.depthTexture.name=G.name+".shadowMapDepth",H.map.depthTexture.format=tr,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Zt,H.map.depthTexture.magFilter=Zt}else G.isPointLight?(H.map=new Z1(r.x),H.map.depthTexture=new M3(r.x,Ii)):(H.map=new Di(r.x,r.y),H.map.depthTexture=new bo(r.x,r.y,Ii)),H.map.depthTexture.name=G.name+".shadowMap",H.map.depthTexture.format=tr,this.type===Tc?(H.map.depthTexture.compareFunction=k?_g:gg,H.map.depthTexture.minFilter=Jt,H.map.depthTexture.magFilter=Jt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Zt,H.map.depthTexture.magFilter=Zt);H.camera.updateProjectionMatrix()}const $=H.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<$;U++){if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,U),t.clear();else{U===0&&(t.setRenderTarget(H.map),t.clear());const Z=H.getViewport(U);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),O.viewport(o)}if(G.isPointLight){const Z=H.camera,fe=H.matrix,Ie=G.distance||Z.far;Ie!==Z.far&&(Z.far=Ie,Z.updateProjectionMatrix()),na.setFromMatrixPosition(G.matrixWorld),Z.position.copy(na),Sd.copy(Z.position),Sd.add(_F[U]),Z.up.copy(vF[U]),Z.lookAt(Sd),Z.updateMatrixWorld(),fe.makeTranslation(-na.x,-na.y,-na.z),hx.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(hx,Z.coordinateSystem,Z.reversedDepth)}else H.updateMatrices(G);i=H.getFrustum(),S(R,x,H.camera,G,this.type)}H.isPointLightShadow!==!0&&this.type===ca&&m(H,x),H.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(b,P,D)};function m(T,R){const x=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Di(r.x,r.y,{format:xs,type:er})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(R,null,x,f,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(R,null,x,p,y,null)}function v(T,R,x,b){let P=null;const D=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)P=D;else if(P=x.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=P.uuid,q=R.uuid;let Y=c[O];Y===void 0&&(Y={},c[O]=Y);let N=Y[q];N===void 0&&(N=P.clone(),Y[q]=N,R.addEventListener("dispose",A)),P=N}if(P.visible=R.visible,P.wireframe=R.wireframe,b===ca?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=t.properties.get(P);O.light=x}return P}function S(T,R,x,b,P){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===ca)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const q=e.update(T),Y=T.material;if(Array.isArray(Y)){const N=q.groups;for(let G=0,H=N.length;G<H;G++){const L=N[G],k=Y[L.materialIndex];if(k&&k.visible){const $=v(T,k,b,P);T.onBeforeShadow(t,T,R,x,q,$,L),t.renderBufferDirect(x,null,q,$,T,L),T.onAfterShadow(t,T,R,x,q,$,L)}}}else if(Y.visible){const N=v(T,Y,b,P);T.onBeforeShadow(t,T,R,x,q,N,null),t.renderBufferDirect(x,null,q,N,T,null),T.onAfterShadow(t,T,R,x,q,N,null)}}const O=T.children;for(let q=0,Y=O.length;q<Y;q++)S(O[q],R,x,b,P)}function A(T){T.target.removeEventListener("dispose",A);for(const x in c){const b=c[x],P=T.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}function yF(t,e){function n(){let I=!1;const ue=new Rt;let ee=null;const Se=new Rt(0,0,0,0);return{setMask:function(he){ee!==he&&!I&&(t.colorMask(he,he,he,he),ee=he)},setLocked:function(he){I=he},setClear:function(he,re,be,ke,Pt){Pt===!0&&(he*=ke,re*=ke,be*=ke),ue.set(he,re,be,ke),Se.equals(ue)===!1&&(t.clearColor(he,re,be,ke),Se.copy(ue))},reset:function(){I=!1,ee=null,Se.set(-1,0,0,0)}}}function i(){let I=!1,ue=!1,ee=null,Se=null,he=null;return{setReversed:function(re){if(ue!==re){const be=e.get("EXT_clip_control");re?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ue=re;const ke=he;he=null,this.setClear(ke)}},getReversed:function(){return ue},setTest:function(re){re?ae(t.DEPTH_TEST):Le(t.DEPTH_TEST)},setMask:function(re){ee!==re&&!I&&(t.depthMask(re),ee=re)},setFunc:function(re){if(ue&&(re=q2[re]),Se!==re){switch(re){case Wh:t.depthFunc(t.NEVER);break;case jh:t.depthFunc(t.ALWAYS);break;case Xh:t.depthFunc(t.LESS);break;case Ao:t.depthFunc(t.LEQUAL);break;case qh:t.depthFunc(t.EQUAL);break;case $h:t.depthFunc(t.GEQUAL);break;case Yh:t.depthFunc(t.GREATER);break;case Kh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Se=re}},setLocked:function(re){I=re},setClear:function(re){he!==re&&(he=re,ue&&(re=1-re),t.clearDepth(re))},reset:function(){I=!1,ee=null,Se=null,he=null,ue=!1}}}function r(){let I=!1,ue=null,ee=null,Se=null,he=null,re=null,be=null,ke=null,Pt=null;return{setTest:function(st){I||(st?ae(t.STENCIL_TEST):Le(t.STENCIL_TEST))},setMask:function(st){ue!==st&&!I&&(t.stencilMask(st),ue=st)},setFunc:function(st,Fi,pi){(ee!==st||Se!==Fi||he!==pi)&&(t.stencilFunc(st,Fi,pi),ee=st,Se=Fi,he=pi)},setOp:function(st,Fi,pi){(re!==st||be!==Fi||ke!==pi)&&(t.stencilOp(st,Fi,pi),re=st,be=Fi,ke=pi)},setLocked:function(st){I=st},setClear:function(st){Pt!==st&&(t.clearStencil(st),Pt=st)},reset:function(){I=!1,ue=null,ee=null,Se=null,he=null,re=null,be=null,ke=null,Pt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f={},p=new WeakMap,_=[],y=null,g=!1,h=null,m=null,v=null,S=null,A=null,T=null,R=null,x=new Qe(0,0,0),b=0,P=!1,D=null,O=null,q=null,Y=null,N=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,L=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=L>=1):k.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=L>=2);let $=null,U={};const Z=t.getParameter(t.SCISSOR_BOX),fe=t.getParameter(t.VIEWPORT),Ie=new Rt().fromArray(Z),Re=new Rt().fromArray(fe);function J(I,ue,ee,Se){const he=new Uint8Array(4),re=t.createTexture();t.bindTexture(I,re),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<ee;be++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,Se,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ue+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return re}const me={};me[t.TEXTURE_2D]=J(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=J(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=J(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=J(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(t.DEPTH_TEST),o.setFunc(Ao),Bt(!1),yt(cv),ae(t.CULL_FACE),pt($i);function ae(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function Le(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function Be(I,ue){return f[I]!==ue?(t.bindFramebuffer(I,ue),f[I]=ue,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ue),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Fe(I,ue){let ee=_,Se=!1;if(I){ee=p.get(ue),ee===void 0&&(ee=[],p.set(ue,ee));const he=I.textures;if(ee.length!==he.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let re=0,be=he.length;re<be;re++)ee[re]=t.COLOR_ATTACHMENT0+re;ee.length=he.length,Se=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,Se=!0);Se&&t.drawBuffers(ee)}function xt(I){return y!==I?(t.useProgram(I),y=I,!0):!1}const qe={[Qr]:t.FUNC_ADD,[g2]:t.FUNC_SUBTRACT,[_2]:t.FUNC_REVERSE_SUBTRACT};qe[v2]=t.MIN,qe[x2]=t.MAX;const rt={[y2]:t.ZERO,[S2]:t.ONE,[M2]:t.SRC_COLOR,[Hh]:t.SRC_ALPHA,[b2]:t.SRC_ALPHA_SATURATE,[A2]:t.DST_COLOR,[T2]:t.DST_ALPHA,[E2]:t.ONE_MINUS_SRC_COLOR,[Gh]:t.ONE_MINUS_SRC_ALPHA,[C2]:t.ONE_MINUS_DST_COLOR,[w2]:t.ONE_MINUS_DST_ALPHA,[R2]:t.CONSTANT_COLOR,[P2]:t.ONE_MINUS_CONSTANT_COLOR,[D2]:t.CONSTANT_ALPHA,[L2]:t.ONE_MINUS_CONSTANT_ALPHA};function pt(I,ue,ee,Se,he,re,be,ke,Pt,st){if(I===$i){g===!0&&(Le(t.BLEND),g=!1);return}if(g===!1&&(ae(t.BLEND),g=!0),I!==m2){if(I!==h||st!==P){if((m!==Qr||A!==Qr)&&(t.blendEquation(t.FUNC_ADD),m=Qr,A=Qr),st)switch(I){case mo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case uv:t.blendFunc(t.ONE,t.ONE);break;case fv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dv:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ze("WebGLState: Invalid blending: ",I);break}else switch(I){case mo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case uv:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case fv:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dv:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",I);break}v=null,S=null,T=null,R=null,x.set(0,0,0),b=0,h=I,P=st}return}he=he||ue,re=re||ee,be=be||Se,(ue!==m||he!==A)&&(t.blendEquationSeparate(qe[ue],qe[he]),m=ue,A=he),(ee!==v||Se!==S||re!==T||be!==R)&&(t.blendFuncSeparate(rt[ee],rt[Se],rt[re],rt[be]),v=ee,S=Se,T=re,R=be),(ke.equals(x)===!1||Pt!==b)&&(t.blendColor(ke.r,ke.g,ke.b,Pt),x.copy(ke),b=Pt),h=I,P=!1}function je(I,ue){I.side===Gi?Le(t.CULL_FACE):ae(t.CULL_FACE);let ee=I.side===wn;ue&&(ee=!ee),Bt(ee),I.blending===mo&&I.transparent===!1?pt($i):pt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const Se=I.stencilWrite;a.setTest(Se),Se&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),F(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):Le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(I){D!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),D=I)}function yt(I){I!==d2?(ae(t.CULL_FACE),I!==O&&(I===cv?t.cullFace(t.BACK):I===h2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Le(t.CULL_FACE),O=I}function An(I){I!==q&&(H&&t.lineWidth(I),q=I)}function F(I,ue,ee){I?(ae(t.POLYGON_OFFSET_FILL),(Y!==ue||N!==ee)&&(Y=ue,N=ee,o.getReversed()&&(ue=-ue),t.polygonOffset(ue,ee))):Le(t.POLYGON_OFFSET_FILL)}function Ot(I){I?ae(t.SCISSOR_TEST):Le(t.SCISSOR_TEST)}function $e(I){I===void 0&&(I=t.TEXTURE0+G-1),$!==I&&(t.activeTexture(I),$=I)}function ft(I,ue,ee){ee===void 0&&($===null?ee=t.TEXTURE0+G-1:ee=$);let Se=U[ee];Se===void 0&&(Se={type:void 0,texture:void 0},U[ee]=Se),(Se.type!==I||Se.texture!==ue)&&($!==ee&&(t.activeTexture(ee),$=ee),t.bindTexture(I,ue||me[I]),Se.type=I,Se.texture=ue)}function ge(){const I=U[$];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function wt(){try{t.compressedTexImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function M(){try{t.texSubImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function V(){try{t.texSubImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function te(){try{t.compressedTexSubImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function se(){try{t.compressedTexSubImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function le(){try{t.texStorage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function pe(){try{t.texStorage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function K(){try{t.texImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function ne(){try{t.texImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function ye(I){return d[I]!==void 0?d[I]:t.getParameter(I)}function Ee(I,ue){d[I]!==ue&&(t.pixelStorei(I,ue),d[I]=ue)}function de(I){Ie.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Ie.copy(I))}function ce(I){Re.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Re.copy(I))}function Ue(I,ue){let ee=c.get(ue);ee===void 0&&(ee=new WeakMap,c.set(ue,ee));let Se=ee.get(I);Se===void 0&&(Se=t.getUniformBlockIndex(ue,I.name),ee.set(I,Se))}function Ve(I,ue){const Se=c.get(ue).get(I);l.get(ue)!==Se&&(t.uniformBlockBinding(ue,Se,I.__bindingPointIndex),l.set(ue,Se))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},$=null,U={},f={},p=new WeakMap,_=[],y=null,g=!1,h=null,m=null,v=null,S=null,A=null,T=null,R=null,x=new Qe(0,0,0),b=0,P=!1,D=null,O=null,q=null,Y=null,N=null,Ie.set(0,0,t.canvas.width,t.canvas.height),Re.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:Le,bindFramebuffer:Be,drawBuffers:Fe,useProgram:xt,setBlending:pt,setMaterial:je,setFlipSided:Bt,setCullFace:yt,setLineWidth:An,setPolygonOffset:F,setScissorTest:Ot,activeTexture:$e,bindTexture:ft,unbindTexture:ge,compressedTexImage2D:wt,compressedTexImage3D:C,texImage2D:K,texImage3D:ne,pixelStorei:Ee,getParameter:ye,updateUBOMapping:Ue,uniformBlockBinding:Ve,texStorage2D:le,texStorage3D:pe,texSubImage2D:M,texSubImage3D:V,compressedTexSubImage2D:te,compressedTexSubImage3D:se,scissor:de,viewport:ce,reset:tt}}function SF(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,u=new WeakMap,d=new Set;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,M){return _?new OffscreenCanvas(C,M):mu("canvas")}function g(C,M,V){let te=1;const se=wt(C);if((se.width>V||se.height>V)&&(te=V/Math.max(se.width,se.height)),te<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const le=Math.floor(te*se.width),pe=Math.floor(te*se.height);f===void 0&&(f=y(le,pe));const K=M?y(le,pe):f;return K.width=le,K.height=pe,K.getContext("2d").drawImage(C,0,0,le,pe),Ne("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+le+"x"+pe+")."),K}else return"data"in C&&Ne("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),C;return C}function h(C){return C.generateMipmaps}function m(C){t.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(C,M,V,te,se,le=!1){if(C!==null){if(t[C]!==void 0)return t[C];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pe;te&&(pe=e.get("EXT_texture_norm16"),pe||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=M;if(M===t.RED&&(V===t.FLOAT&&(K=t.R32F),V===t.HALF_FLOAT&&(K=t.R16F),V===t.UNSIGNED_BYTE&&(K=t.R8),V===t.UNSIGNED_SHORT&&pe&&(K=pe.R16_EXT),V===t.SHORT&&pe&&(K=pe.R16_SNORM_EXT)),M===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(K=t.R8UI),V===t.UNSIGNED_SHORT&&(K=t.R16UI),V===t.UNSIGNED_INT&&(K=t.R32UI),V===t.BYTE&&(K=t.R8I),V===t.SHORT&&(K=t.R16I),V===t.INT&&(K=t.R32I)),M===t.RG&&(V===t.FLOAT&&(K=t.RG32F),V===t.HALF_FLOAT&&(K=t.RG16F),V===t.UNSIGNED_BYTE&&(K=t.RG8),V===t.UNSIGNED_SHORT&&pe&&(K=pe.RG16_EXT),V===t.SHORT&&pe&&(K=pe.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(K=t.RG8UI),V===t.UNSIGNED_SHORT&&(K=t.RG16UI),V===t.UNSIGNED_INT&&(K=t.RG32UI),V===t.BYTE&&(K=t.RG8I),V===t.SHORT&&(K=t.RG16I),V===t.INT&&(K=t.RG32I)),M===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(K=t.RGB8UI),V===t.UNSIGNED_SHORT&&(K=t.RGB16UI),V===t.UNSIGNED_INT&&(K=t.RGB32UI),V===t.BYTE&&(K=t.RGB8I),V===t.SHORT&&(K=t.RGB16I),V===t.INT&&(K=t.RGB32I)),M===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),V===t.UNSIGNED_INT&&(K=t.RGBA32UI),V===t.BYTE&&(K=t.RGBA8I),V===t.SHORT&&(K=t.RGBA16I),V===t.INT&&(K=t.RGBA32I)),M===t.RGB&&(V===t.UNSIGNED_SHORT&&pe&&(K=pe.RGB16_EXT),V===t.SHORT&&pe&&(K=pe.RGB16_SNORM_EXT),V===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),V===t.UNSIGNED_INT_10F_11F_11F_REV&&(K=t.R11F_G11F_B10F)),M===t.RGBA){const ne=le?pu:Ye.getTransfer(se);V===t.FLOAT&&(K=t.RGBA32F),V===t.HALF_FLOAT&&(K=t.RGBA16F),V===t.UNSIGNED_BYTE&&(K=ne===nt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT&&pe&&(K=pe.RGBA16_EXT),V===t.SHORT&&pe&&(K=pe.RGBA16_SNORM_EXT),V===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function A(C,M){let V;return C?M===null||M===Ii||M===qa?V=t.DEPTH24_STENCIL8:M===wi?V=t.DEPTH32F_STENCIL8:M===Xa&&(V=t.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ii||M===qa?V=t.DEPTH_COMPONENT24:M===wi?V=t.DEPTH_COMPONENT32F:M===Xa&&(V=t.DEPTH_COMPONENT16),V}function T(C,M){return h(C)===!0||C.isFramebufferTexture&&C.minFilter!==Zt&&C.minFilter!==Jt?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){const M=C.target;M.removeEventListener("dispose",R),b(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&d.delete(M)}function x(C){const M=C.target;M.removeEventListener("dispose",x),D(M)}function b(C){const M=i.get(C);if(M.__webglInit===void 0)return;const V=C.source,te=p.get(V);if(te){const se=te[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&P(C),Object.keys(te).length===0&&p.delete(V)}i.remove(C)}function P(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const V=C.source,te=p.get(V);delete te[M.__cacheKey],o.memory.textures--}function D(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let se=0;se<M.__webglFramebuffer[te].length;se++)t.deleteFramebuffer(M.__webglFramebuffer[te][se]);else t.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)t.deleteFramebuffer(M.__webglFramebuffer[te]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=C.textures;for(let te=0,se=V.length;te<se;te++){const le=i.get(V[te]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),o.memory.textures--),i.remove(V[te])}i.remove(C)}let O=0;function q(){O=0}function Y(){return O}function N(C){O=C}function G(){const C=O;return C>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),O+=1,C}function H(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function L(C,M){const V=i.get(C);if(C.isVideoTexture&&ft(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){const te=C.image;if(te===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(V,C,M);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+M)}function k(C,M){const V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Le(V,C,M);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+M)}function $(C,M){const V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Le(V,C,M);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+M)}function U(C,M){const V=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&V.__version!==C.version){Be(V,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+M)}const Z={[Zh]:t.REPEAT,[Xi]:t.CLAMP_TO_EDGE,[Jh]:t.MIRRORED_REPEAT},fe={[Zt]:t.NEAREST,[F2]:t.NEAREST_MIPMAP_NEAREST,[Pl]:t.NEAREST_MIPMAP_LINEAR,[Jt]:t.LINEAR,[Hf]:t.LINEAR_MIPMAP_NEAREST,[as]:t.LINEAR_MIPMAP_LINEAR},Ie={[O2]:t.NEVER,[G2]:t.ALWAYS,[k2]:t.LESS,[gg]:t.LEQUAL,[z2]:t.EQUAL,[_g]:t.GEQUAL,[V2]:t.GREATER,[H2]:t.NOTEQUAL};function Re(C,M){if(M.type===wi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Jt||M.magFilter===Hf||M.magFilter===Pl||M.magFilter===as||M.minFilter===Jt||M.minFilter===Hf||M.minFilter===Pl||M.minFilter===as)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,Z[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,Z[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,Z[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,fe[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,fe[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Zt||M.minFilter!==Pl&&M.minFilter!==as||M.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function J(C,M){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));const te=M.source;let se=p.get(te);se===void 0&&(se={},p.set(te,se));const le=H(M);if(le!==C.__cacheKey){se[le]===void 0&&(se[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),se[le].usedTimes++;const pe=se[C.__cacheKey];pe!==void 0&&(se[C.__cacheKey].usedTimes--,pe.usedTimes===0&&P(M)),C.__cacheKey=le,C.__webglTexture=se[le].texture}return V}function me(C,M,V){return Math.floor(Math.floor(C/V)/M)}function ae(C,M,V,te){const le=C.updateRanges;if(le.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,V,te,M.data);else{le.sort((Ee,de)=>Ee.start-de.start);let pe=0;for(let Ee=1;Ee<le.length;Ee++){const de=le[pe],ce=le[Ee],Ue=de.start+de.count,Ve=me(ce.start,M.width,4),tt=me(de.start,M.width,4);ce.start<=Ue+1&&Ve===tt&&me(ce.start+ce.count-1,M.width,4)===Ve?de.count=Math.max(de.count,ce.start+ce.count-de.start):(++pe,le[pe]=ce)}le.length=pe+1;const K=n.getParameter(t.UNPACK_ROW_LENGTH),ne=n.getParameter(t.UNPACK_SKIP_PIXELS),ye=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let Ee=0,de=le.length;Ee<de;Ee++){const ce=le[Ee],Ue=Math.floor(ce.start/4),Ve=Math.ceil(ce.count/4),tt=Ue%M.width,I=Math.floor(Ue/M.width),ue=Ve,ee=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,tt),n.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,tt,I,ue,ee,V,te,M.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,K),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(t.UNPACK_SKIP_ROWS,ye)}}function Le(C,M,V){let te=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=t.TEXTURE_3D);const se=J(C,M),le=M.source;n.bindTexture(te,C.__webglTexture,t.TEXTURE0+V);const pe=i.get(le);if(le.version!==pe.__version||se===!0){if(n.activeTexture(t.TEXTURE0+V),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ee=Ye.getPrimaries(Ye.workingColorSpace),Se=M.colorSpace===xr?null:Ye.getPrimaries(M.colorSpace),he=M.colorSpace===xr||ee===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let ne=g(M.image,!1,r.maxTextureSize);ne=ge(M,ne);const ye=s.convert(M.format,M.colorSpace),Ee=s.convert(M.type);let de=S(M.internalFormat,ye,Ee,M.normalized,M.colorSpace,M.isVideoTexture);Re(te,M);let ce;const Ue=M.mipmaps,Ve=M.isVideoTexture!==!0,tt=pe.__version===void 0||se===!0,I=le.dataReady,ue=T(M,ne);if(M.isDepthTexture)de=A(M.format===ls,M.type),tt&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,de,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,de,ne.width,ne.height,0,ye,Ee,null));else if(M.isDataTexture)if(Ue.length>0){Ve&&tt&&n.texStorage2D(t.TEXTURE_2D,ue,de,Ue[0].width,Ue[0].height);for(let ee=0,Se=Ue.length;ee<Se;ee++)ce=Ue[ee],Ve?I&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ce.width,ce.height,ye,Ee,ce.data):n.texImage2D(t.TEXTURE_2D,ee,de,ce.width,ce.height,0,ye,Ee,ce.data);M.generateMipmaps=!1}else Ve?(tt&&n.texStorage2D(t.TEXTURE_2D,ue,de,ne.width,ne.height),I&&ae(M,ne,ye,Ee)):n.texImage2D(t.TEXTURE_2D,0,de,ne.width,ne.height,0,ye,Ee,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ve&&tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,de,Ue[0].width,Ue[0].height,ne.depth);for(let ee=0,Se=Ue.length;ee<Se;ee++)if(ce=Ue[ee],M.format!==ai)if(ye!==null)if(Ve){if(I)if(M.layerUpdates.size>0){const he=Wv(ce.width,ce.height,M.format,M.type);for(const re of M.layerUpdates){const be=ce.data.subarray(re*he/ce.data.BYTES_PER_ELEMENT,(re+1)*he/ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,re,ce.width,ce.height,1,ye,be)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,ne.depth,ye,ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,de,ce.width,ce.height,ne.depth,0,ce.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,ne.depth,ye,Ee,ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,de,ce.width,ce.height,ne.depth,0,ye,Ee,ce.data)}else{Ve&&tt&&n.texStorage2D(t.TEXTURE_2D,ue,de,Ue[0].width,Ue[0].height);for(let ee=0,Se=Ue.length;ee<Se;ee++)ce=Ue[ee],M.format!==ai?ye!==null?Ve?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,ce.width,ce.height,ye,ce.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,de,ce.width,ce.height,0,ce.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?I&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ce.width,ce.height,ye,Ee,ce.data):n.texImage2D(t.TEXTURE_2D,ee,de,ce.width,ce.height,0,ye,Ee,ce.data)}else if(M.isDataArrayTexture)if(Ve){if(tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,de,ne.width,ne.height,ne.depth),I)if(M.layerUpdates.size>0){const ee=Wv(ne.width,ne.height,M.format,M.type);for(const Se of M.layerUpdates){const he=ne.data.subarray(Se*ee/ne.data.BYTES_PER_ELEMENT,(Se+1)*ee/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Se,ne.width,ne.height,1,ye,Ee,he)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ye,Ee,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,de,ne.width,ne.height,ne.depth,0,ye,Ee,ne.data);else if(M.isData3DTexture)Ve?(tt&&n.texStorage3D(t.TEXTURE_3D,ue,de,ne.width,ne.height,ne.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ye,Ee,ne.data)):n.texImage3D(t.TEXTURE_3D,0,de,ne.width,ne.height,ne.depth,0,ye,Ee,ne.data);else if(M.isFramebufferTexture){if(tt)if(Ve)n.texStorage2D(t.TEXTURE_2D,ue,de,ne.width,ne.height);else{let ee=ne.width,Se=ne.height;for(let he=0;he<ue;he++)n.texImage2D(t.TEXTURE_2D,he,de,ee,Se,0,ye,Ee,null),ee>>=1,Se>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const ee=t.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),ne.parentNode!==ee){ee.appendChild(ne),d.add(M),ee.onpaint=ke=>{const Pt=ke.changedElements;for(const st of d)Pt.includes(st.image)&&(st.needsUpdate=!0)},ee.requestPaint();return}const Se=0,he=t.RGBA,re=t.RGBA,be=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,Se,he,re,be,ne),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Ve&&tt){const ee=wt(Ue[0]);n.texStorage2D(t.TEXTURE_2D,ue,de,ee.width,ee.height)}for(let ee=0,Se=Ue.length;ee<Se;ee++)ce=Ue[ee],Ve?I&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ye,Ee,ce):n.texImage2D(t.TEXTURE_2D,ee,de,ye,Ee,ce);M.generateMipmaps=!1}else if(Ve){if(tt){const ee=wt(ne);n.texStorage2D(t.TEXTURE_2D,ue,de,ee.width,ee.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,Ee,ne)}else n.texImage2D(t.TEXTURE_2D,0,de,ye,Ee,ne);h(M)&&m(te),pe.__version=le.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Be(C,M,V){if(M.image.length!==6)return;const te=J(C,M),se=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+V);const le=i.get(se);if(se.version!==le.__version||te===!0){n.activeTexture(t.TEXTURE0+V);const pe=Ye.getPrimaries(Ye.workingColorSpace),K=M.colorSpace===xr?null:Ye.getPrimaries(M.colorSpace),ne=M.colorSpace===xr||pe===K?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const ye=M.isCompressedTexture||M.image[0].isCompressedTexture,Ee=M.image[0]&&M.image[0].isDataTexture,de=[];for(let re=0;re<6;re++)!ye&&!Ee?de[re]=g(M.image[re],!0,r.maxCubemapSize):de[re]=Ee?M.image[re].image:M.image[re],de[re]=ge(M,de[re]);const ce=de[0],Ue=s.convert(M.format,M.colorSpace),Ve=s.convert(M.type),tt=S(M.internalFormat,Ue,Ve,M.normalized,M.colorSpace),I=M.isVideoTexture!==!0,ue=le.__version===void 0||te===!0,ee=se.dataReady;let Se=T(M,ce);Re(t.TEXTURE_CUBE_MAP,M);let he;if(ye){I&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,tt,ce.width,ce.height);for(let re=0;re<6;re++){he=de[re].mipmaps;for(let be=0;be<he.length;be++){const ke=he[be];M.format!==ai?Ue!==null?I?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,0,0,ke.width,ke.height,Ue,ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,tt,ke.width,ke.height,0,ke.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,0,0,ke.width,ke.height,Ue,Ve,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,tt,ke.width,ke.height,0,Ue,Ve,ke.data)}}}else{if(he=M.mipmaps,I&&ue){he.length>0&&Se++;const re=wt(de[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,tt,re.width,re.height)}for(let re=0;re<6;re++)if(Ee){I?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,de[re].width,de[re].height,Ue,Ve,de[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,tt,de[re].width,de[re].height,0,Ue,Ve,de[re].data);for(let be=0;be<he.length;be++){const Pt=he[be].image[re].image;I?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,0,0,Pt.width,Pt.height,Ue,Ve,Pt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,tt,Pt.width,Pt.height,0,Ue,Ve,Pt.data)}}else{I?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ue,Ve,de[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,tt,Ue,Ve,de[re]);for(let be=0;be<he.length;be++){const ke=he[be];I?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,0,0,Ue,Ve,ke.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,tt,Ue,Ve,ke.image[re])}}}h(M)&&m(t.TEXTURE_CUBE_MAP),le.__version=se.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Fe(C,M,V,te,se,le){const pe=s.convert(V.format,V.colorSpace),K=s.convert(V.type),ne=S(V.internalFormat,pe,K,V.normalized,V.colorSpace),ye=i.get(M),Ee=i.get(V);if(Ee.__renderTarget=M,!ye.__hasExternalTextures){const de=Math.max(1,M.width>>le),ce=Math.max(1,M.height>>le);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,le,ne,de,ce,M.depth,0,pe,K,null):n.texImage2D(se,le,ne,de,ce,0,pe,K,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),$e(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,se,Ee.__webglTexture,0,Ot(M)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,se,Ee.__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function xt(C,M,V){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const te=M.depthTexture,se=te&&te.isDepthTexture?te.type:null,le=A(M.stencilBuffer,se),pe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;$e(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ot(M),le,M.width,M.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ot(M),le,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,le,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,C)}else{const te=M.textures;for(let se=0;se<te.length;se++){const le=te[se],pe=s.convert(le.format,le.colorSpace),K=s.convert(le.type),ne=S(le.internalFormat,pe,K,le.normalized,le.colorSpace);$e(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ot(M),ne,M.width,M.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ot(M),ne,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ne,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function qe(C,M,V){const te=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=i.get(M.depthTexture);if(se.__renderTarget=M,(!se.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),te){if(se.__webglInit===void 0&&(se.__webglInit=!0,M.depthTexture.addEventListener("dispose",R)),se.__webglTexture===void 0){se.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),Re(t.TEXTURE_CUBE_MAP,M.depthTexture);const ye=s.convert(M.depthTexture.format),Ee=s.convert(M.depthTexture.type);let de;M.depthTexture.format===tr?de=t.DEPTH_COMPONENT24:M.depthTexture.format===ls&&(de=t.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,de,M.width,M.height,0,ye,Ee,null)}}else L(M.depthTexture,0);const le=se.__webglTexture,pe=Ot(M),K=te?t.TEXTURE_CUBE_MAP_POSITIVE_X+V:t.TEXTURE_2D,ne=M.depthTexture.format===ls?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===tr)$e(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,K,le,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,ne,K,le,0);else if(M.depthTexture.format===ls)$e(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,K,le,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,ne,K,le,0);else throw new Error("Unknown depthTexture format")}function rt(C){const M=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const te=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),te){const se=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,te.removeEventListener("dispose",se)};te.addEventListener("dispose",se),M.__depthDisposeCallback=se}M.__boundDepthTexture=te}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let te=0;te<6;te++)qe(M.__webglFramebuffer[te],C,te);else{const te=C.texture.mipmaps;te&&te.length>0?qe(M.__webglFramebuffer[0],C,0):qe(M.__webglFramebuffer,C,0)}else if(V){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]===void 0)M.__webglDepthbuffer[te]=t.createRenderbuffer(),xt(M.__webglDepthbuffer[te],C,!1);else{const se=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer[te];t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,le)}}else{const te=C.texture.mipmaps;if(te&&te.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),xt(M.__webglDepthbuffer,C,!1);else{const se=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,le)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function pt(C,M,V){const te=i.get(C);M!==void 0&&Fe(te.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&rt(C)}function je(C){const M=C.texture,V=i.get(C),te=i.get(M);C.addEventListener("dispose",x);const se=C.textures,le=C.isWebGLCubeRenderTarget===!0,pe=se.length>1;if(pe||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=M.version,o.memory.textures++),le){V.__webglFramebuffer=[];for(let K=0;K<6;K++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[K]=[];for(let ne=0;ne<M.mipmaps.length;ne++)V.__webglFramebuffer[K][ne]=t.createFramebuffer()}else V.__webglFramebuffer[K]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let K=0;K<M.mipmaps.length;K++)V.__webglFramebuffer[K]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(pe)for(let K=0,ne=se.length;K<ne;K++){const ye=i.get(se[K]);ye.__webglTexture===void 0&&(ye.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&$e(C)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let K=0;K<se.length;K++){const ne=se[K];V.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[K]);const ye=s.convert(ne.format,ne.colorSpace),Ee=s.convert(ne.type),de=S(ne.internalFormat,ye,Ee,ne.normalized,ne.colorSpace,C.isXRRenderTarget===!0),ce=Ot(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,de,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,V.__webglColorRenderbuffer[K])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),xt(V.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),Re(t.TEXTURE_CUBE_MAP,M);for(let K=0;K<6;K++)if(M.mipmaps&&M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)Fe(V.__webglFramebuffer[K][ne],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ne);else Fe(V.__webglFramebuffer[K],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);h(M)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(pe){for(let K=0,ne=se.length;K<ne;K++){const ye=se[K],Ee=i.get(ye);let de=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,Ee.__webglTexture),Re(de,ye),Fe(V.__webglFramebuffer,C,ye,t.COLOR_ATTACHMENT0+K,de,0),h(ye)&&m(de)}n.unbindTexture()}else{let K=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(K,te.__webglTexture),Re(K,M),M.mipmaps&&M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)Fe(V.__webglFramebuffer[ne],C,M,t.COLOR_ATTACHMENT0,K,ne);else Fe(V.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,K,0);h(M)&&m(K),n.unbindTexture()}C.depthBuffer&&rt(C)}function Bt(C){const M=C.textures;for(let V=0,te=M.length;V<te;V++){const se=M[V];if(h(se)){const le=v(C),pe=i.get(se).__webglTexture;n.bindTexture(le,pe),m(le),n.unbindTexture()}}}const yt=[],An=[];function F(C){if(C.samples>0){if($e(C)===!1){const M=C.textures,V=C.width,te=C.height;let se=t.COLOR_BUFFER_BIT;const le=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(C),K=M.length>1;if(K)for(let ye=0;ye<M.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const ne=C.texture.mipmaps;ne&&ne.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ye=0;ye<M.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),K){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[ye]);const Ee=i.get(M[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ee,0)}t.blitFramebuffer(0,0,V,te,0,0,V,te,se,t.NEAREST),l===!0&&(yt.length=0,An.length=0,yt.push(t.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.resolveDepthBuffer===!1&&(yt.push(le),An.push(le),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,An)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,yt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let ye=0;ye<M.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,pe.__webglColorRenderbuffer[ye]);const Ee=i.get(M[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,Ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Ot(C){return Math.min(r.maxSamples,C.samples)}function $e(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ft(C){const M=o.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function ge(C,M){const V=C.colorSpace,te=C.format,se=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==hu&&V!==xr&&(Ye.getTransfer(V)===nt?(te!==ai||se!==Dn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",V)),M}function wt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=q,this.getTextureUnits=Y,this.setTextureUnits=N,this.setTexture2D=L,this.setTexture2DArray=k,this.setTexture3D=$,this.setTextureCube=U,this.rebindTextures=pt,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function MF(t,e){function n(i,r=xr){let s;const o=Ye.getTransfer(r);if(i===Dn)return t.UNSIGNED_BYTE;if(i===fg)return t.UNSIGNED_SHORT_4_4_4_4;if(i===dg)return t.UNSIGNED_SHORT_5_5_5_1;if(i===P1)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===D1)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===b1)return t.BYTE;if(i===R1)return t.SHORT;if(i===Xa)return t.UNSIGNED_SHORT;if(i===ug)return t.INT;if(i===Ii)return t.UNSIGNED_INT;if(i===wi)return t.FLOAT;if(i===er)return t.HALF_FLOAT;if(i===L1)return t.ALPHA;if(i===I1)return t.RGB;if(i===ai)return t.RGBA;if(i===tr)return t.DEPTH_COMPONENT;if(i===ls)return t.DEPTH_STENCIL;if(i===N1)return t.RED;if(i===hg)return t.RED_INTEGER;if(i===xs)return t.RG;if(i===pg)return t.RG_INTEGER;if(i===mg)return t.RGBA_INTEGER;if(i===wc||i===Ac||i===Cc||i===bc)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===wc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===wc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ac)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qh||i===ep||i===tp||i===np)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ep)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===np)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ip||i===rp||i===sp||i===op||i===ap||i===fu||i===lp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ip||i===rp)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===op)return s.COMPRESSED_R11_EAC;if(i===ap)return s.COMPRESSED_SIGNED_R11_EAC;if(i===fu)return s.COMPRESSED_RG11_EAC;if(i===lp)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===cp||i===up||i===fp||i===dp||i===hp||i===pp||i===mp||i===gp||i===_p||i===vp||i===xp||i===yp||i===Sp||i===Mp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===up)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_p)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ep||i===Tp||i===wp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ep)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ap||i===Cp||i===du||i===bp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ap)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Cp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===du)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const EF=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TF=`
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

}`;class wF{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new j1(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ni({vertexShader:EF,fragmentShader:TF,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Yn(new ju(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AF extends Ms{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null;const y=typeof XRWebGLBinding<"u",g=new wF,h={},m=n.getContextAttributes();let v=null,S=null;const A=[],T=[],R=new We;let x=null;const b=new Gn;b.viewport=new Rt;const P=new Gn;P.viewport=new Rt;const D=[b,P],O=new U3;let q=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let me=A[J];return me===void 0&&(me=new Kf,A[J]=me),me.getTargetRaySpace()},this.getControllerGrip=function(J){let me=A[J];return me===void 0&&(me=new Kf,A[J]=me),me.getGripSpace()},this.getHand=function(J){let me=A[J];return me===void 0&&(me=new Kf,A[J]=me),me.getHandSpace()};function N(J){const me=T.indexOf(J.inputSource);if(me===-1)return;const ae=A[me];ae!==void 0&&(ae.update(J.inputSource,J.frame,c||o),ae.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",H);for(let J=0;J<A.length;J++){const me=T[J];me!==null&&(T[J]=null,A[J].disconnect(me))}q=null,Y=null,g.reset();for(const J in h)delete h[J];e.setRenderTarget(v),p=null,f=null,d=null,r=null,S=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",G),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Le=null,Be=null;m.depth&&(Be=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=m.stencil?ls:tr,Le=m.stencil?qa:Ii);const Fe={colorFormat:n.RGBA8,depthFormat:Be,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Fe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Di(f.textureWidth,f.textureHeight,{format:ai,type:Dn,depthTexture:new bo(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Di(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Re.setContext(r),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(J){for(let me=0;me<J.removed.length;me++){const ae=J.removed[me],Le=T.indexOf(ae);Le>=0&&(T[Le]=null,A[Le].disconnect(ae))}for(let me=0;me<J.added.length;me++){const ae=J.added[me];let Le=T.indexOf(ae);if(Le===-1){for(let Fe=0;Fe<A.length;Fe++)if(Fe>=T.length){T.push(ae),Le=Fe;break}else if(T[Fe]===null){T[Fe]=ae,Le=Fe;break}if(Le===-1)break}const Be=A[Le];Be&&Be.connect(ae)}}const L=new z,k=new z;function $(J,me,ae){L.setFromMatrixPosition(me.matrixWorld),k.setFromMatrixPosition(ae.matrixWorld);const Le=L.distanceTo(k),Be=me.projectionMatrix.elements,Fe=ae.projectionMatrix.elements,xt=Be[14]/(Be[10]-1),qe=Be[14]/(Be[10]+1),rt=(Be[9]+1)/Be[5],pt=(Be[9]-1)/Be[5],je=(Be[8]-1)/Be[0],Bt=(Fe[8]+1)/Fe[0],yt=xt*je,An=xt*Bt,F=Le/(-je+Bt),Ot=F*-je;if(me.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ot),J.translateZ(F),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Be[10]===-1)J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const $e=xt+F,ft=qe+F,ge=yt-Ot,wt=An+(Le-Ot),C=rt*qe/ft*$e,M=pt*qe/ft*$e;J.projectionMatrix.makePerspective(ge,wt,C,M,$e,ft),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function U(J,me){me===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(me.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let me=J.near,ae=J.far;g.texture!==null&&(g.depthNear>0&&(me=g.depthNear),g.depthFar>0&&(ae=g.depthFar)),O.near=P.near=b.near=me,O.far=P.far=b.far=ae,(q!==O.near||Y!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),q=O.near,Y=O.far),O.layers.mask=J.layers.mask|6,b.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;const Le=J.parent,Be=O.cameras;U(O,Le);for(let Fe=0;Fe<Be.length;Fe++)U(Be[Fe],Le);Be.length===2?$(O,b,P):O.projectionMatrix.copy(b.projectionMatrix),Z(J,O,Le)};function Z(J,me,ae){ae===null?J.matrix.copy(me.matrixWorld):(J.matrix.copy(ae.matrixWorld),J.matrix.invert(),J.matrix.multiply(me.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Lp*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(J){return h[J]};let fe=null;function Ie(J,me){if(u=me.getViewerPose(c||o),_=me,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Le=!1;ae.length!==O.cameras.length&&(O.cameras.length=0,Le=!0);for(let qe=0;qe<ae.length;qe++){const rt=ae[qe];let pt=null;if(p!==null)pt=p.getViewport(rt);else{const Bt=d.getViewSubImage(f,rt);pt=Bt.viewport,qe===0&&(e.setRenderTargetTextures(S,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(S))}let je=D[qe];je===void 0&&(je=new Gn,je.layers.enable(qe),je.viewport=new Rt,D[qe]=je),je.matrix.fromArray(rt.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(rt.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(pt.x,pt.y,pt.width,pt.height),qe===0&&(O.matrix.copy(je.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Le===!0&&O.cameras.push(je)}const Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const qe=d.getDepthInformation(ae[0]);qe&&qe.isValid&&qe.texture&&g.init(qe,r.renderState)}if(Be&&Be.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let qe=0;qe<ae.length;qe++){const rt=ae[qe].camera;if(rt){let pt=h[rt];pt||(pt=new j1,h[rt]=pt);const je=d.getCameraImage(rt);pt.sourceTexture=je}}}}for(let ae=0;ae<A.length;ae++){const Le=T[ae],Be=A[ae];Le!==null&&Be!==void 0&&Be.update(Le,me,c||o)}fe&&fe(J,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),_=null}const Re=new Y1;Re.setAnimationLoop(Ie),this.setAnimationLoop=function(J){fe=J},this.dispose=function(){}}}const CF=new Et,nE=new Oe;nE.set(-1,0,0,0,1,0,0,0,1);function bF(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,X1(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,m,v,S){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(g,h):h.isMeshLambertMaterial?(s(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,S)):h.isMeshMatcapMaterial?(s(g,h),_(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),y(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,m,v):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===wn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===wn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const m=e.get(h),v=m.envMap,S=m.envMapRotation;v&&(g.envMap.value=v,g.envMapRotation.value.setFromMatrix4(CF.makeRotationFromEuler(S)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(nE),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,m,v){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*m,g.scale.value=v*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,m){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===wn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function y(g,h){const m=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function RF(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,v){const S=v.program;i.uniformBlockBinding(m,S)}function c(m,v){let S=r[m.id];S===void 0&&(_(m),S=u(m),r[m.id]=S,m.addEventListener("dispose",g));const A=v.program;i.updateUBOMapping(m,A);const T=e.render.frame;s[m.id]!==T&&(f(m),s[m.id]=T)}function u(m){const v=d();m.__bindingPointIndex=v;const S=t.createBuffer(),A=m.__size,T=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,A,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function d(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(m){const v=r[m.id],S=m.uniforms,A=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,R=S.length;T<R;T++){const x=Array.isArray(S[T])?S[T]:[S[T]];for(let b=0,P=x.length;b<P;b++){const D=x[b];if(p(D,T,b,A)===!0){const O=D.__offset,q=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let N=0;N<q.length;N++){const G=q[N],H=y(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,O+Y,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):ArrayBuffer.isView(G)?D.__data.set(new G.constructor(G.buffer,G.byteOffset,D.__data.length)):(G.toArray(D.__data,Y),Y+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,v,S,A){const T=m.value,R=v+"_"+S;if(A[R]===void 0)return typeof T=="number"||typeof T=="boolean"?A[R]=T:ArrayBuffer.isView(T)?A[R]=T.slice():A[R]=T.clone(),!0;{const x=A[R];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return A[R]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function _(m){const v=m.uniforms;let S=0;const A=16;for(let R=0,x=v.length;R<x;R++){const b=Array.isArray(v[R])?v[R]:[v[R]];for(let P=0,D=b.length;P<D;P++){const O=b[P],q=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,N=q.length;Y<N;Y++){const G=q[Y],H=y(G),L=S%A,k=L%H.boundary,$=L+k;S+=k,$!==0&&A-$<H.storage&&(S+=A-$),O.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=H.storage}}}const T=S%A;return T>0&&(S+=A-T),m.__size=S,m.__cache={},this}function y(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(v.boundary=16,v.storage=m.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",m),v}function g(m){const v=m.target;v.removeEventListener("dispose",g);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}const PF=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vi=null;function DF(){return vi===null&&(vi=new g3(PF,16,16,xs,er),vi.name="DFG_LUT",vi.minFilter=Jt,vi.magFilter=Jt,vi.wrapS=Xi,vi.wrapT=Xi,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}class LF{constructor(e={}){const{canvas:n=j2(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Dn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const y=p,g=new Set([mg,pg,hg]),h=new Set([Dn,Ii,Xa,qa,fg,dg]),m=new Uint32Array(4),v=new Int32Array(4),S=new z;let A=null,T=null;const R=[],x=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let D=!1,O=null;this._outputColorSpace=zn;let q=0,Y=0,N=null,G=-1,H=null;const L=new Rt,k=new Rt;let $=null;const U=new Qe(0);let Z=0,fe=n.width,Ie=n.height,Re=1,J=null,me=null;const ae=new Rt(0,0,fe,Ie),Le=new Rt(0,0,fe,Ie);let Be=!1;const Fe=new xg;let xt=!1,qe=!1;const rt=new Et,pt=new z,je=new Rt,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function An(){return N===null?Re:1}let F=i;function Ot(E,B){return n.getContext(E,B)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${cg}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",ke,!1),F===null){const B="webgl2";if(F=Ot(B,E),F===null)throw Ot(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ze("WebGLRenderer: "+E.message),E}let $e,ft,ge,wt,C,M,V,te,se,le,pe,K,ne,ye,Ee,de,ce,Ue,Ve,tt,I,ue,ee;function Se(){$e=new DI(F),$e.init(),I=new MF(F,$e),ft=new EI(F,$e,e,I),ge=new yF(F,$e),ft.reversedDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),wt=new NI(F),C=new oF,M=new SF(F,$e,ge,C,ft,I,wt),V=new PI(P),te=new O3(F),ue=new SI(F,te),se=new LI(F,te,wt,ue),le=new UI(F,se,te,ue,wt),Ue=new FI(F,ft,M),Ee=new TI(C),pe=new sF(P,V,$e,ft,ue,Ee),K=new bF(P,C),ne=new lF,ye=new pF($e),ce=new yI(P,V,ge,le,_,l),de=new xF(P,le,ft),ee=new RF(F,wt,ft,ge),Ve=new MI(F,$e,wt),tt=new II(F,$e,wt),wt.programs=pe.programs,P.capabilities=ft,P.extensions=$e,P.properties=C,P.renderLists=ne,P.shadowMap=de,P.state=ge,P.info=wt}Se(),y!==Dn&&(b=new OI(y,n.width,n.height,r,s));const he=new AF(P,F);this.xr=he,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=$e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=$e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(E){E!==void 0&&(Re=E,this.setSize(fe,Ie,!1))},this.getSize=function(E){return E.set(fe,Ie)},this.setSize=function(E,B,X=!0){if(he.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=E,Ie=B,n.width=Math.floor(E*Re),n.height=Math.floor(B*Re),X===!0&&(n.style.width=E+"px",n.style.height=B+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(fe*Re,Ie*Re).floor()},this.setDrawingBufferSize=function(E,B,X){fe=E,Ie=B,Re=X,n.width=Math.floor(E*X),n.height=Math.floor(B*X),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(y===Dn){Ze("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){Ne("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(ae)},this.setViewport=function(E,B,X,W){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,B,X,W),ge.viewport(L.copy(ae).multiplyScalar(Re).round())},this.getScissor=function(E){return E.copy(Le)},this.setScissor=function(E,B,X,W){E.isVector4?Le.set(E.x,E.y,E.z,E.w):Le.set(E,B,X,W),ge.scissor(k.copy(Le).multiplyScalar(Re).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(E){ge.setScissorTest(Be=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){me=E},this.getClearColor=function(E){return E.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,X=!0){let W=0;if(E){let j=!1;if(N!==null){const xe=N.texture.format;j=g.has(xe)}if(j){const xe=N.texture.type,Te=h.has(xe),ve=ce.getClearColor(),Ce=ce.getClearAlpha(),Pe=ve.r,ze=ve.g,Ge=ve.b;Te?(m[0]=Pe,m[1]=ze,m[2]=Ge,m[3]=Ce,F.clearBufferuiv(F.COLOR,0,m)):(v[0]=Pe,v[1]=ze,v[2]=Ge,v[3]=Ce,F.clearBufferiv(F.COLOR,0,v))}else W|=F.COLOR_BUFFER_BIT}B&&(W|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),O=E},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",ke,!1),ce.dispose(),ne.dispose(),ye.dispose(),C.dispose(),V.dispose(),le.dispose(),ue.dispose(),ee.dispose(),pe.dispose(),he.dispose(),he.removeEventListener("sessionstart",bg),he.removeEventListener("sessionend",Rg),Gr.stop()};function re(E){E.preventDefault(),gu("WebGLRenderer: Context Lost."),D=!0}function be(){gu("WebGLRenderer: Context Restored."),D=!1;const E=wt.autoReset,B=de.enabled,X=de.autoUpdate,W=de.needsUpdate,j=de.type;Se(),wt.autoReset=E,de.enabled=B,de.autoUpdate=X,de.needsUpdate=W,de.type=j}function ke(E){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Pt(E){const B=E.target;B.removeEventListener("dispose",Pt),st(B)}function st(E){Fi(E),C.remove(E)}function Fi(E){const B=C.get(E).programs;B!==void 0&&(B.forEach(function(X){pe.releaseProgram(X)}),E.isShaderMaterial&&pe.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,X,W,j,xe){B===null&&(B=Bt);const Te=j.isMesh&&j.matrixWorld.determinant()<0,ve=dE(E,B,X,W,j);ge.setMaterial(W,Te);let Ce=X.index,Pe=1;if(W.wireframe===!0){if(Ce=se.getWireframeAttribute(X),Ce===void 0)return;Pe=2}const ze=X.drawRange,Ge=X.attributes.position;let De=ze.start*Pe,ot=(ze.start+ze.count)*Pe;xe!==null&&(De=Math.max(De,xe.start*Pe),ot=Math.min(ot,(xe.start+xe.count)*Pe)),Ce!==null?(De=Math.max(De,0),ot=Math.min(ot,Ce.count)):Ge!=null&&(De=Math.max(De,0),ot=Math.min(ot,Ge.count));const Dt=ot-De;if(Dt<0||Dt===1/0)return;ue.setup(j,W,ve,X,Ce);let At,lt=Ve;if(Ce!==null&&(At=te.get(Ce),lt=tt,lt.setIndex(At)),j.isMesh)W.wireframe===!0?(ge.setLineWidth(W.wireframeLinewidth*An()),lt.setMode(F.LINES)):lt.setMode(F.TRIANGLES);else if(j.isLine){let tn=W.linewidth;tn===void 0&&(tn=1),ge.setLineWidth(tn*An()),j.isLineSegments?lt.setMode(F.LINES):j.isLineLoop?lt.setMode(F.LINE_LOOP):lt.setMode(F.LINE_STRIP)}else j.isPoints?lt.setMode(F.POINTS):j.isSprite&&lt.setMode(F.TRIANGLES);if(j.isBatchedMesh)if($e.get("WEBGL_multi_draw"))lt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const tn=j._multiDrawStarts,Me=j._multiDrawCounts,Cn=j._multiDrawCount,Je=Ce?te.get(Ce).bytesPerElement:1,On=C.get(W).currentProgram.getUniforms();for(let mi=0;mi<Cn;mi++)On.setValue(F,"_gl_DrawID",mi),lt.render(tn[mi]/Je,Me[mi])}else if(j.isInstancedMesh)lt.renderInstances(De,Dt,j.count);else if(X.isInstancedBufferGeometry){const tn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Me=Math.min(X.instanceCount,tn);lt.renderInstances(De,Dt,Me)}else lt.render(De,Dt)};function pi(E,B,X){E.transparent===!0&&E.side===Gi&&E.forceSinglePass===!1?(E.side=wn,E.needsUpdate=!0,al(E,B,X),E.side=Br,E.needsUpdate=!0,al(E,B,X),E.side=Gi):al(E,B,X)}this.compile=function(E,B,X=null){X===null&&(X=E),T=ye.get(X),T.init(B),x.push(T),X.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),E!==X&&E.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights();const W=new Set;return E.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const xe=j.material;if(xe)if(Array.isArray(xe))for(let Te=0;Te<xe.length;Te++){const ve=xe[Te];pi(ve,X,j),W.add(ve)}else pi(xe,X,j),W.add(xe)}),T=x.pop(),W},this.compileAsync=function(E,B,X=null){const W=this.compile(E,B,X);return new Promise(j=>{function xe(){if(W.forEach(function(Te){C.get(Te).currentProgram.isReady()&&W.delete(Te)}),W.size===0){j(E);return}setTimeout(xe,10)}$e.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let $u=null;function uE(E){$u&&$u(E)}function bg(){Gr.stop()}function Rg(){Gr.start()}const Gr=new Y1;Gr.setAnimationLoop(uE),typeof self<"u"&&Gr.setContext(self),this.setAnimationLoop=function(E){$u=E,he.setAnimationLoop(E),E===null?Gr.stop():Gr.start()},he.addEventListener("sessionstart",bg),he.addEventListener("sessionend",Rg),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(E,B);const X=he.enabled===!0&&he.isPresenting===!0,W=b!==null&&(N===null||X)&&b.begin(P,N);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(B),B=he.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,B,N),T=ye.get(E,x.length),T.init(B),T.state.textureUnits=M.getTextureUnits(),x.push(T),rt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Fe.setFromProjectionMatrix(rt,Ai,B.reversedDepth),qe=this.localClippingEnabled,xt=Ee.init(this.clippingPlanes,qe),A=ne.get(E,R.length),A.init(),R.push(A),he.enabled===!0&&he.isPresenting===!0){const Te=P.xr.getDepthSensingMesh();Te!==null&&Yu(Te,B,-1/0,P.sortObjects)}Yu(E,B,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort(J,me),yt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,yt&&ce.addToRenderList(A,E),this.info.render.frame++,xt===!0&&Ee.beginShadows();const j=T.state.shadowsArray;if(de.render(j,E,B),xt===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&b.hasRenderPass())===!1){const Te=A.opaque,ve=A.transmissive;if(T.setupLights(),B.isArrayCamera){const Ce=B.cameras;if(ve.length>0)for(let Pe=0,ze=Ce.length;Pe<ze;Pe++){const Ge=Ce[Pe];Dg(Te,ve,E,Ge)}yt&&ce.render(E);for(let Pe=0,ze=Ce.length;Pe<ze;Pe++){const Ge=Ce[Pe];Pg(A,E,Ge,Ge.viewport)}}else ve.length>0&&Dg(Te,ve,E,B),yt&&ce.render(E),Pg(A,E,B)}N!==null&&Y===0&&(M.updateMultisampleRenderTarget(N),M.updateRenderTargetMipmap(N)),W&&b.end(P),E.isScene===!0&&E.onAfterRender(P,E,B),ue.resetDefaultState(),G=-1,H=null,x.pop(),x.length>0?(T=x[x.length-1],M.setTextureUnits(T.state.textureUnits),xt===!0&&Ee.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?A=R[R.length-1]:A=null,O!==null&&O.renderEnd()};function Yu(E,B,X,W){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Fe.intersectsSprite(E)){W&&je.setFromMatrixPosition(E.matrixWorld).applyMatrix4(rt);const Te=le.update(E),ve=E.material;ve.visible&&A.push(E,Te,ve,X,je.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Fe.intersectsObject(E))){const Te=le.update(E),ve=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),je.copy(E.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),je.copy(Te.boundingSphere.center)),je.applyMatrix4(E.matrixWorld).applyMatrix4(rt)),Array.isArray(ve)){const Ce=Te.groups;for(let Pe=0,ze=Ce.length;Pe<ze;Pe++){const Ge=Ce[Pe],De=ve[Ge.materialIndex];De&&De.visible&&A.push(E,Te,De,X,je.z,Ge)}}else ve.visible&&A.push(E,Te,ve,X,je.z,null)}}const xe=E.children;for(let Te=0,ve=xe.length;Te<ve;Te++)Yu(xe[Te],B,X,W)}function Pg(E,B,X,W){const{opaque:j,transmissive:xe,transparent:Te}=E;T.setupLightsView(X),xt===!0&&Ee.setGlobalState(P.clippingPlanes,X),W&&ge.viewport(L.copy(W)),j.length>0&&ol(j,B,X),xe.length>0&&ol(xe,B,X),Te.length>0&&ol(Te,B,X),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Dg(E,B,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){const De=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new Di(1,1,{generateMipmaps:!0,type:De?er:Dn,minFilter:as,samples:Math.max(4,ft.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const xe=T.state.transmissionRenderTarget[W.id],Te=W.viewport||L;xe.setSize(Te.z*P.transmissionResolutionScale,Te.w*P.transmissionResolutionScale);const ve=P.getRenderTarget(),Ce=P.getActiveCubeFace(),Pe=P.getActiveMipmapLevel();P.setRenderTarget(xe),P.getClearColor(U),Z=P.getClearAlpha(),Z<1&&P.setClearColor(16777215,.5),P.clear(),yt&&ce.render(X);const ze=P.toneMapping;P.toneMapping=Pi;const Ge=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),xt===!0&&Ee.setGlobalState(P.clippingPlanes,W),ol(E,X,W),M.updateMultisampleRenderTarget(xe),M.updateRenderTargetMipmap(xe),$e.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ot=0,Dt=B.length;ot<Dt;ot++){const At=B[ot],{object:lt,geometry:tn,material:Me,group:Cn}=At;if(Me.side===Gi&&lt.layers.test(W.layers)){const Je=Me.side;Me.side=wn,Me.needsUpdate=!0,Lg(lt,X,W,tn,Me,Cn),Me.side=Je,Me.needsUpdate=!0,De=!0}}De===!0&&(M.updateMultisampleRenderTarget(xe),M.updateRenderTargetMipmap(xe))}P.setRenderTarget(ve,Ce,Pe),P.setClearColor(U,Z),Ge!==void 0&&(W.viewport=Ge),P.toneMapping=ze}function ol(E,B,X){const W=B.isScene===!0?B.overrideMaterial:null;for(let j=0,xe=E.length;j<xe;j++){const Te=E[j],{object:ve,geometry:Ce,group:Pe}=Te;let ze=Te.material;ze.allowOverride===!0&&W!==null&&(ze=W),ve.layers.test(X.layers)&&Lg(ve,B,X,Ce,ze,Pe)}}function Lg(E,B,X,W,j,xe){E.onBeforeRender(P,B,X,W,j,xe),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(P,B,X,W,E,xe),j.transparent===!0&&j.side===Gi&&j.forceSinglePass===!1?(j.side=wn,j.needsUpdate=!0,P.renderBufferDirect(X,B,W,j,E,xe),j.side=Br,j.needsUpdate=!0,P.renderBufferDirect(X,B,W,j,E,xe),j.side=Gi):P.renderBufferDirect(X,B,W,j,E,xe),E.onAfterRender(P,B,X,W,j,xe)}function al(E,B,X){B.isScene!==!0&&(B=Bt);const W=C.get(E),j=T.state.lights,xe=T.state.shadowsArray,Te=j.state.version,ve=pe.getParameters(E,j.state,xe,B,X,T.state.lightProbeGridArray),Ce=pe.getProgramCacheKey(ve);let Pe=W.programs;W.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;const ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;W.envMap=V.get(E.envMap||W.environment,ze),W.envMapRotation=W.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Pe===void 0&&(E.addEventListener("dispose",Pt),Pe=new Map,W.programs=Pe);let Ge=Pe.get(Ce);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===Te)return Ng(E,ve),Ge}else ve.uniforms=pe.getUniforms(E),O!==null&&E.isNodeMaterial&&O.build(E,X,ve),E.onBeforeCompile(ve,P),Ge=pe.acquireProgram(ve,Ce),Pe.set(Ce,Ge),W.uniforms=ve.uniforms;const De=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=Ee.uniform),Ng(E,ve),W.needsLights=pE(E),W.lightsStateVersion=Te,W.needsLights&&(De.ambientLightColor.value=j.state.ambient,De.lightProbe.value=j.state.probe,De.directionalLights.value=j.state.directional,De.directionalLightShadows.value=j.state.directionalShadow,De.spotLights.value=j.state.spot,De.spotLightShadows.value=j.state.spotShadow,De.rectAreaLights.value=j.state.rectArea,De.ltc_1.value=j.state.rectAreaLTC1,De.ltc_2.value=j.state.rectAreaLTC2,De.pointLights.value=j.state.point,De.pointLightShadows.value=j.state.pointShadow,De.hemisphereLights.value=j.state.hemi,De.directionalShadowMatrix.value=j.state.directionalShadowMatrix,De.spotLightMatrix.value=j.state.spotLightMatrix,De.spotLightMap.value=j.state.spotLightMap,De.pointShadowMatrix.value=j.state.pointShadowMatrix),W.lightProbeGrid=T.state.lightProbeGridArray.length>0,W.currentProgram=Ge,W.uniformsList=null,Ge}function Ig(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Pc.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Ng(E,B){const X=C.get(E);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function fE(E,B){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(B.matrixWorld);for(let X=0,W=E.length;X<W;X++){const j=E[X];if(j.texture!==null&&j.boundingBox.containsPoint(S))return j}return null}function dE(E,B,X,W,j){B.isScene!==!0&&(B=Bt),M.resetTextureUnits();const xe=B.fog,Te=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,ve=N===null?P.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ye.workingColorSpace,Ce=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Pe=V.get(W.envMap||Te,Ce),ze=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),De=!!X.morphAttributes.position,ot=!!X.morphAttributes.normal,Dt=!!X.morphAttributes.color;let At=Pi;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(At=P.toneMapping);const lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,tn=lt!==void 0?lt.length:0,Me=C.get(W),Cn=T.state.lights;if(xt===!0&&(qe===!0||E!==H)){const dt=E===H&&W.id===G;Ee.setState(W,E,dt)}let Je=!1;W.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Cn.state.version||Me.outputColorSpace!==ve||j.isBatchedMesh&&Me.batching===!1||!j.isBatchedMesh&&Me.batching===!0||j.isBatchedMesh&&Me.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Me.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Me.instancing===!1||!j.isInstancedMesh&&Me.instancing===!0||j.isSkinnedMesh&&Me.skinning===!1||!j.isSkinnedMesh&&Me.skinning===!0||j.isInstancedMesh&&Me.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Me.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Me.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Me.instancingMorph===!1&&j.morphTexture!==null||Me.envMap!==Pe||W.fog===!0&&Me.fog!==xe||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Ee.numPlanes||Me.numIntersection!==Ee.numIntersection)||Me.vertexAlphas!==ze||Me.vertexTangents!==Ge||Me.morphTargets!==De||Me.morphNormals!==ot||Me.morphColors!==Dt||Me.toneMapping!==At||Me.morphTargetsCount!==tn||!!Me.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,Me.__version=W.version);let On=Me.currentProgram;Je===!0&&(On=al(W,B,j),O&&W.isNodeMaterial&&O.onUpdateProgram(W,On,Me));let mi=!1,ir=!1,Ts=!1;const ct=On.getUniforms(),Lt=Me.uniforms;if(ge.useProgram(On.program)&&(mi=!0,ir=!0,Ts=!0),W.id!==G&&(G=W.id,ir=!0),Me.needsLights){const dt=fE(T.state.lightProbeGridArray,j);Me.lightProbeGrid!==dt&&(Me.lightProbeGrid=dt,ir=!0)}if(mi||H!==E){ge.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ct.setValue(F,"projectionMatrix",E.projectionMatrix),ct.setValue(F,"viewMatrix",E.matrixWorldInverse);const sr=ct.map.cameraPosition;sr!==void 0&&sr.setValue(F,pt.setFromMatrixPosition(E.matrixWorld)),ft.logarithmicDepthBuffer&&ct.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ct.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),H!==E&&(H=E,ir=!0,Ts=!0)}if(Me.needsLights&&(Cn.state.directionalShadowMap.length>0&&ct.setValue(F,"directionalShadowMap",Cn.state.directionalShadowMap,M),Cn.state.spotShadowMap.length>0&&ct.setValue(F,"spotShadowMap",Cn.state.spotShadowMap,M),Cn.state.pointShadowMap.length>0&&ct.setValue(F,"pointShadowMap",Cn.state.pointShadowMap,M)),j.isSkinnedMesh){ct.setOptional(F,j,"bindMatrix"),ct.setOptional(F,j,"bindMatrixInverse");const dt=j.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),ct.setValue(F,"boneTexture",dt.boneTexture,M))}j.isBatchedMesh&&(ct.setOptional(F,j,"batchingTexture"),ct.setValue(F,"batchingTexture",j._matricesTexture,M),ct.setOptional(F,j,"batchingIdTexture"),ct.setValue(F,"batchingIdTexture",j._indirectTexture,M),ct.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&ct.setValue(F,"batchingColorTexture",j._colorsTexture,M));const rr=X.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0)&&Ue.update(j,X,On),(ir||Me.receiveShadow!==j.receiveShadow)&&(Me.receiveShadow=j.receiveShadow,ct.setValue(F,"receiveShadow",j.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(Lt.envMapIntensity.value=B.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=DF()),ir){if(ct.setValue(F,"toneMappingExposure",P.toneMappingExposure),Me.needsLights&&hE(Lt,Ts),xe&&W.fog===!0&&K.refreshFogUniforms(Lt,xe),K.refreshMaterialUniforms(Lt,W,Re,Ie,T.state.transmissionRenderTarget[E.id]),Me.needsLights&&Me.lightProbeGrid){const dt=Me.lightProbeGrid;Lt.probesSH.value=dt.texture,Lt.probesMin.value.copy(dt.boundingBox.min),Lt.probesMax.value.copy(dt.boundingBox.max),Lt.probesResolution.value.copy(dt.resolution)}Pc.upload(F,Ig(Me),Lt,M)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Pc.upload(F,Ig(Me),Lt,M),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ct.setValue(F,"center",j.center),ct.setValue(F,"modelViewMatrix",j.modelViewMatrix),ct.setValue(F,"normalMatrix",j.normalMatrix),ct.setValue(F,"modelMatrix",j.matrixWorld),W.uniformsGroups!==void 0){const dt=W.uniformsGroups;for(let sr=0,ws=dt.length;sr<ws;sr++){const Fg=dt[sr];ee.update(Fg,On),ee.bind(Fg,On)}}return On}function hE(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function pE(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,B,X){const W=C.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),C.get(E.texture).__webglTexture=B,C.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const X=C.get(E);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const mE=F.createFramebuffer();this.setRenderTarget=function(E,B=0,X=0){N=E,q=B,Y=X;let W=null,j=!1,xe=!1;if(E){const ve=C.get(E);if(ve.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(F.FRAMEBUFFER,ve.__webglFramebuffer),L.copy(E.viewport),k.copy(E.scissor),$=E.scissorTest,ge.viewport(L),ge.scissor(k),ge.setScissorTest($),G=-1;return}else if(ve.__webglFramebuffer===void 0)M.setupRenderTarget(E);else if(ve.__hasExternalTextures)M.rebindTextures(E,C.get(E.texture).__webglTexture,C.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ze=E.depthTexture;if(ve.__boundDepthTexture!==ze){if(ze!==null&&C.has(ze)&&(E.width!==ze.image.width||E.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(E)}}const Ce=E.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(xe=!0);const Pe=C.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pe[B])?W=Pe[B][X]:W=Pe[B],j=!0):E.samples>0&&M.useMultisampledRTT(E)===!1?W=C.get(E).__webglMultisampledFramebuffer:Array.isArray(Pe)?W=Pe[X]:W=Pe,L.copy(E.viewport),k.copy(E.scissor),$=E.scissorTest}else L.copy(ae).multiplyScalar(Re).floor(),k.copy(Le).multiplyScalar(Re).floor(),$=Be;if(X!==0&&(W=mE),ge.bindFramebuffer(F.FRAMEBUFFER,W)&&ge.drawBuffers(E,W),ge.viewport(L),ge.scissor(k),ge.setScissorTest($),j){const ve=C.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,ve.__webglTexture,X)}else if(xe){const ve=B;for(let Ce=0;Ce<E.textures.length;Ce++){const Pe=C.get(E.textures[Ce]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ce,Pe.__webglTexture,X,ve)}}else if(E!==null&&X!==0){const ve=C.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ve.__webglTexture,X)}G=-1},this.readRenderTargetPixels=function(E,B,X,W,j,xe,Te,ve=0){if(!(E&&E.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=C.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){ge.bindFramebuffer(F.FRAMEBUFFER,Ce);try{const Pe=E.textures[ve],ze=Pe.format,Ge=Pe.type;if(E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ve),!ft.textureFormatReadable(ze)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Ge)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-W&&X>=0&&X<=E.height-j&&F.readPixels(B,X,W,j,I.convert(ze),I.convert(Ge),xe)}finally{const Pe=N!==null?C.get(N).__webglFramebuffer:null;ge.bindFramebuffer(F.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(E,B,X,W,j,xe,Te,ve=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=C.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce)if(B>=0&&B<=E.width-W&&X>=0&&X<=E.height-j){ge.bindFramebuffer(F.FRAMEBUFFER,Ce);const Pe=E.textures[ve],ze=Pe.format,Ge=Pe.type;if(E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ve),!ft.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const De=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,De),F.bufferData(F.PIXEL_PACK_BUFFER,xe.byteLength,F.STREAM_READ),F.readPixels(B,X,W,j,I.convert(ze),I.convert(Ge),0);const ot=N!==null?C.get(N).__webglFramebuffer:null;ge.bindFramebuffer(F.FRAMEBUFFER,ot);const Dt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await X2(F,Dt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,De),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xe),F.deleteBuffer(De),F.deleteSync(Dt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,X=0){const W=Math.pow(2,-X),j=Math.floor(E.image.width*W),xe=Math.floor(E.image.height*W),Te=B!==null?B.x:0,ve=B!==null?B.y:0;M.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,Te,ve,j,xe),ge.unbindTexture()};const gE=F.createFramebuffer(),_E=F.createFramebuffer();this.copyTextureToTexture=function(E,B,X=null,W=null,j=0,xe=0){let Te,ve,Ce,Pe,ze,Ge,De,ot,Dt;const At=E.isCompressedTexture?E.mipmaps[xe]:E.image;if(X!==null)Te=X.max.x-X.min.x,ve=X.max.y-X.min.y,Ce=X.isBox3?X.max.z-X.min.z:1,Pe=X.min.x,ze=X.min.y,Ge=X.isBox3?X.min.z:0;else{const Lt=Math.pow(2,-j);Te=Math.floor(At.width*Lt),ve=Math.floor(At.height*Lt),E.isDataArrayTexture?Ce=At.depth:E.isData3DTexture?Ce=Math.floor(At.depth*Lt):Ce=1,Pe=0,ze=0,Ge=0}W!==null?(De=W.x,ot=W.y,Dt=W.z):(De=0,ot=0,Dt=0);const lt=I.convert(B.format),tn=I.convert(B.type);let Me;B.isData3DTexture?(M.setTexture3D(B,0),Me=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(M.setTexture2DArray(B,0),Me=F.TEXTURE_2D_ARRAY):(M.setTexture2D(B,0),Me=F.TEXTURE_2D),ge.activeTexture(F.TEXTURE0),ge.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),ge.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),ge.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);const Cn=ge.getParameter(F.UNPACK_ROW_LENGTH),Je=ge.getParameter(F.UNPACK_IMAGE_HEIGHT),On=ge.getParameter(F.UNPACK_SKIP_PIXELS),mi=ge.getParameter(F.UNPACK_SKIP_ROWS),ir=ge.getParameter(F.UNPACK_SKIP_IMAGES);ge.pixelStorei(F.UNPACK_ROW_LENGTH,At.width),ge.pixelStorei(F.UNPACK_IMAGE_HEIGHT,At.height),ge.pixelStorei(F.UNPACK_SKIP_PIXELS,Pe),ge.pixelStorei(F.UNPACK_SKIP_ROWS,ze),ge.pixelStorei(F.UNPACK_SKIP_IMAGES,Ge);const Ts=E.isDataArrayTexture||E.isData3DTexture,ct=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const Lt=C.get(E),rr=C.get(B),dt=C.get(Lt.__renderTarget),sr=C.get(rr.__renderTarget);ge.bindFramebuffer(F.READ_FRAMEBUFFER,dt.__webglFramebuffer),ge.bindFramebuffer(F.DRAW_FRAMEBUFFER,sr.__webglFramebuffer);for(let ws=0;ws<Ce;ws++)Ts&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,C.get(E).__webglTexture,j,Ge+ws),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,C.get(B).__webglTexture,xe,Dt+ws)),F.blitFramebuffer(Pe,ze,Te,ve,De,ot,Te,ve,F.DEPTH_BUFFER_BIT,F.NEAREST);ge.bindFramebuffer(F.READ_FRAMEBUFFER,null),ge.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||E.isRenderTargetTexture||C.has(E)){const Lt=C.get(E),rr=C.get(B);ge.bindFramebuffer(F.READ_FRAMEBUFFER,gE),ge.bindFramebuffer(F.DRAW_FRAMEBUFFER,_E);for(let dt=0;dt<Ce;dt++)Ts?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Lt.__webglTexture,j,Ge+dt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Lt.__webglTexture,j),ct?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,rr.__webglTexture,xe,Dt+dt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,rr.__webglTexture,xe),j!==0?F.blitFramebuffer(Pe,ze,Te,ve,De,ot,Te,ve,F.COLOR_BUFFER_BIT,F.NEAREST):ct?F.copyTexSubImage3D(Me,xe,De,ot,Dt+dt,Pe,ze,Te,ve):F.copyTexSubImage2D(Me,xe,De,ot,Pe,ze,Te,ve);ge.bindFramebuffer(F.READ_FRAMEBUFFER,null),ge.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ct?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Me,xe,De,ot,Dt,Te,ve,Ce,lt,tn,At.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Me,xe,De,ot,Dt,Te,ve,Ce,lt,At.data):F.texSubImage3D(Me,xe,De,ot,Dt,Te,ve,Ce,lt,tn,At):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,xe,De,ot,Te,ve,lt,tn,At.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,xe,De,ot,At.width,At.height,lt,At.data):F.texSubImage2D(F.TEXTURE_2D,xe,De,ot,Te,ve,lt,tn,At);ge.pixelStorei(F.UNPACK_ROW_LENGTH,Cn),ge.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Je),ge.pixelStorei(F.UNPACK_SKIP_PIXELS,On),ge.pixelStorei(F.UNPACK_SKIP_ROWS,mi),ge.pixelStorei(F.UNPACK_SKIP_IMAGES,ir),xe===0&&B.generateMipmaps&&F.generateMipmap(Me),ge.unbindTexture()},this.initRenderTarget=function(E){C.get(E).__webglFramebuffer===void 0&&M.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?M.setTextureCube(E,0):E.isData3DTexture?M.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?M.setTexture2DArray(E,0):M.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){q=0,Y=0,N=null,ge.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}}const IF="_root_sxuiq_2",NF="_landing_sxuiq_29",FF="_landingInner_sxuiq_48",UF="_fadeUp_sxuiq_1",BF="_landingMark_sxuiq_61",OF="_landingTitle_sxuiq_63",kF="_landingSubtitle_sxuiq_73",zF="_landingBody_sxuiq_81",VF="_landingBtns_sxuiq_89",HF="_landingBtnPrimary_sxuiq_98",GF="_landingBtnSecondary_sxuiq_119",WF="_keyScreen_sxuiq_140",jF="_keyCard_sxuiq_149",XF="_keyBrand_sxuiq_162",qF="_keyTitle_sxuiq_164",$F="_keyBody_sxuiq_173",YF="_keyInput_sxuiq_181",KF="_keyInputError_sxuiq_197",ZF="_keyError_sxuiq_199",JF="_keyBtn_sxuiq_201",QF="_keyBackBtn_sxuiq_223",eU="_keyNote_sxuiq_237",tU="_header_sxuiq_249",nU="_headerLeft_sxuiq_261",iU="_headerRight_sxuiq_262",rU="_headerTitle_sxuiq_264",sU="_headerSub_sxuiq_273",oU="_headerDivider_sxuiq_279",aU="_backBtn_sxuiq_285",lU="_statusDot_sxuiq_304",cU="_pulse_sxuiq_1",uU="_statusLabel_sxuiq_312",fU="_dashTabs_sxuiq_319",dU="_dashTab_sxuiq_319",hU="_dashTabActive_sxuiq_339",pU="_messages_sxuiq_346",mU="_welcome_sxuiq_360",gU="_welcomeMark_sxuiq_372",_U="_welcomeTitle_sxuiq_374",vU="_welcomeBody_sxuiq_384",xU="_starters_sxuiq_391",yU="_starterBtn_sxuiq_401",SU="_starterLabel_sxuiq_418",MU="_starterDesc_sxuiq_425",EU="_msgRow_sxuiq_430",TU="_user_sxuiq_438",wU="_agent_sxuiq_439",AU="_msgMeta_sxuiq_441",CU="_msgBubble_sxuiq_451",bU="_agentBubble_sxuiq_466",RU="_typingRow_sxuiq_476",PU="_typingBubble_sxuiq_477",DU="_typingText_sxuiq_478",LU="_typingCursor_sxuiq_479",IU="_blink_sxuiq_1",NU="_mdH2_sxuiq_482",FU="_mdH3_sxuiq_483",UU="_mdBold_sxuiq_484",BU="_mdList_sxuiq_485",OU="_mdOList_sxuiq_485",kU="_mdPara_sxuiq_487",zU="_mdSpacer_sxuiq_488",VU="_strategyBlock_sxuiq_491",HU="_strategyIntro_sxuiq_499",GU="_tierSection_sxuiq_506",WU="_tierHeader_sxuiq_508",jU="_tierA_sxuiq_517",XU="_tierB_sxuiq_518",qU="_tierC_sxuiq_519",$U="_tierBadge_sxuiq_521",YU="_tierLabel_sxuiq_535",KU="_tierCount_sxuiq_542",ZU="_festGrid_sxuiq_548",JU="_festCard_sxuiq_550",QU="_festHeader_sxuiq_560",eB="_festName_sxuiq_561",tB="_festLocation_sxuiq_562",nB="_festReason_sxuiq_563",iB="_festTips_sxuiq_565",rB="_strategyClosing_sxuiq_583",sB="_viewStrategyBtn_sxuiq_591",oB="_viewStrategyArrow_sxuiq_614",aB="_commandPalette_sxuiq_617",lB="_commandHeader_sxuiq_629",cB="_commandItem_sxuiq_638",uB="_commandActive_sxuiq_651",fB="_commandIcon_sxuiq_653",dB="_commandLabel_sxuiq_654",hB="_commandPrefix_sxuiq_655",pB="_commandDesc_sxuiq_656",mB="_inputArea_sxuiq_659",gB="_inputOuter_sxuiq_668",_B="_inputWrap_sxuiq_670",vB="_cmdTrigger_sxuiq_683",xB="_cmdTriggerActive_sxuiq_699",yB="_textarea_sxuiq_701",SB="_sendBtn_sxuiq_718",MB="_sendBtnSlash_sxuiq_742",EB="_inputHint_sxuiq_747",TB="_exploreBody_sxuiq_756",wB="_filterBar_sxuiq_765",AB="_filterBtn_sxuiq_771",CB="_filterActive_sxuiq_786",bB="_exploreGrid_sxuiq_792",RB="_exploreFestCard_sxuiq_798",PB="_exploreFestTop_sxuiq_811",DB="_exploreTierBadge_sxuiq_813",LB="_tierABadge_sxuiq_822",IB="_tierBBadge_sxuiq_823",NB="_tierCBadge_sxuiq_824",FB="_exploreFestName_sxuiq_826",UB="_exploreFestLocation_sxuiq_827",BB="_exploreFestFormats_sxuiq_829",OB="_fmtTag_sxuiq_831",kB="_exploreFestDesc_sxuiq_842",zB="_exploreFestWindow_sxuiq_843",VB="_dashClosingBanner_sxuiq_846",HB="_dashContent_sxuiq_856",GB="_gridView_sxuiq_867",WB="_dashFestGrid_sxuiq_869",jB="_dashFestCard_sxuiq_875",XB="_dashCardA_sxuiq_886",qB="_dashCardB_sxuiq_887",$B="_dashCardC_sxuiq_888",YB="_dashCardHead_sxuiq_890",KB="_dashCardName_sxuiq_891",ZB="_dashCardLoc_sxuiq_892",JB="_dashCardDates_sxuiq_893",QB="_dashDateRow_sxuiq_894",eO="_dashDateLabel_sxuiq_895",tO="_dashDateVal_sxuiq_896",nO="_dashCardReason_sxuiq_897",iO="_dashCardTips_sxuiq_899",rO="_calView_sxuiq_912",sO="_calMonth_sxuiq_914",oO="_calMonthHeader_sxuiq_921",aO="_calMonthName_sxuiq_930",lO="_calMonthYear_sxuiq_931",cO="_calMonthCount_sxuiq_932",uO="_calFests_sxuiq_934",fO="_calFestRow_sxuiq_936",dO="_calDot_sxuiq_948",hO="_calDotA_sxuiq_949",pO="_calDotB_sxuiq_950",mO="_calDotC_sxuiq_951",gO="_calFestInfo_sxuiq_953",_O="_calFestName_sxuiq_954",vO="_calFestLoc_sxuiq_955",xO="_calFestMeta_sxuiq_957",yO="_calTierBadge_sxuiq_959",SO="_calTierA_sxuiq_964",MO="_calTierB_sxuiq_959",EO="_calTierC_sxuiq_966",TO="_calScreenDate_sxuiq_968",wO="_tlView_sxuiq_971",AO="_tlItem_sxuiq_973",CO="_tlMonthMarker_sxuiq_975",bO="_tlMonthLabel_sxuiq_983",RO="_tlMonthLine_sxuiq_992",PO="_tlRow_sxuiq_994",DO="_tlTrackCol_sxuiq_996",LO="_tlDot_sxuiq_998",IO="_tlDotA_sxuiq_999",NO="_tlDotB_sxuiq_1000",FO="_tlDotC_sxuiq_1001",UO="_tlConnector_sxuiq_1003",BO="_tlCard_sxuiq_1005",OO="_tlCardA_sxuiq_1016",kO="_tlCardB_sxuiq_1017",zO="_tlCardC_sxuiq_1018",VO="_tlCardHead_sxuiq_1020",HO="_tlBadge_sxuiq_1022",GO="_tlBadgeA_sxuiq_1027",WO="_tlBadgeB_sxuiq_1028",jO="_tlBadgeC_sxuiq_1029",XO="_tlCardName_sxuiq_1031",qO="_tlCardLoc_sxuiq_1032",$O="_tlCardReason_sxuiq_1033",YO="_tlCardFestDate_sxuiq_1034",KO="_tlNoDate_sxuiq_1036",ZO="_tlNoDateLabel_sxuiq_1037",JO="_emptyView_sxuiq_1039",QO="_chatLayout_sxuiq_1062",ek="_chatSidebar_sxuiq_1069",tk="_sidebarTop_sxuiq_1080",nk="_newChatBtn_sxuiq_1087",ik="_sidebarConvs_sxuiq_1108",rk="_convSectionHead_sxuiq_1118",sk="_convSectionLabel_sxuiq_1126",ok="_convClearBtn_sxuiq_1134",ak="_convDividerLabel_sxuiq_1145",lk="_convItem_sxuiq_1155",ck="_convItemActive_sxuiq_1169",uk="_convItemIcon_sxuiq_1173",fk="_convItemText_sxuiq_1180",dk="_sidebarFooter_sxuiq_1191",hk="_sidebarFooterBtn_sxuiq_1200",pk="_sidebarFooterLabel_sxuiq_1217",mk="_chatMain_sxuiq_1226",gk="_chatInputArea_sxuiq_1236",_k="_chatInputBox_sxuiq_1243",vk="_chatTextarea_sxuiq_1257",xk="_chatSendBtn_sxuiq_1277",yk="_chatHint_sxuiq_1300",Sk="_viewTabs_sxuiq_1331",Mk="_festCards_sxuiq_1332",Ek="_stratStats_sxuiq_1337",Tk="_stratStat_sxuiq_1337",wk="_stratStatNum_sxuiq_1349",Ak="_stratStatLabel_sxuiq_1357",Ck="_viewTab_sxuiq_1331",bk="_viewTabActive_sxuiq_1394",Rk="_cardsView_sxuiq_1402",Pk="_tierBlock_sxuiq_1408",Dk="_tierBlockHead_sxuiq_1414",Lk="_tierBlockBadge_sxuiq_1421",Ik="_tierBlockBadgeA_sxuiq_1434",Nk="_tierBlockBadgeB_sxuiq_1435",Fk="_tierBlockBadgeC_sxuiq_1436",Uk="_tierBlockTitle_sxuiq_1438",Bk="_festCardNew_sxuiq_1453",Ok="_festCardNewA_sxuiq_1467",kk="_festCardNewB_sxuiq_1468",zk="_festCardNewC_sxuiq_1469",Vk="_festCardTop_sxuiq_1471",Hk="_festCardNameNew_sxuiq_1478",Gk="_festCardLocNew_sxuiq_1486",Wk="_festCardDates_sxuiq_1492",jk="_festDateChip_sxuiq_1500",Xk="_festDateChipSubmit_sxuiq_1509",qk="_festDateChipFest_sxuiq_1515",$k="_festReasonNew_sxuiq_1521",Yk="_festTipsNew_sxuiq_1527",Kk="_festTipChip_sxuiq_1533",Zk="_timelineView_sxuiq_1545",Jk="_timelineGroup_sxuiq_1551",Qk="_timelineMonthHead_sxuiq_1556",e4="_timelineMonthLabel_sxuiq_1563",t4="_timelineMonthLine_sxuiq_1573",n4="_timelineItem_sxuiq_1579",i4="_timelineDotCol_sxuiq_1587",r4="_timelineDot_sxuiq_1587",s4="_timelineDotA_sxuiq_1605",o4="_timelineDotB_sxuiq_1606",a4="_timelineDotC_sxuiq_1587",l4="_timelineConnector_sxuiq_1609",c4="_timelineContent_sxuiq_1617",u4="_timelineTop_sxuiq_1628",f4="_timelineName_sxuiq_1635",d4="_timelineLoc_sxuiq_1642",h4="_timelineBadge_sxuiq_1648",p4="_timelineBadgeA_sxuiq_1658",m4="_timelineBadgeB_sxuiq_1659",g4="_timelineBadgeC_sxuiq_1660",_4="_timelineReason_sxuiq_1662",v4="_timelineFestDate_sxuiq_1668",x4="_calendarView_sxuiq_1677",y4="_calendarRow_sxuiq_1683",S4="_calendarMonthName_sxuiq_1693",M4="_calendarFests_sxuiq_1706",E4="_calendarChip_sxuiq_1713",T4="_calendarChipA_sxuiq_1726",w4="_calendarChipB_sxuiq_1727",A4="_calendarChipC_sxuiq_1728",C4="_calendarChipName_sxuiq_1730",b4="_calendarChipNameA_sxuiq_1736",R4="_calendarChipNameB_sxuiq_1737",P4="_calendarChipNameC_sxuiq_1738",D4="_calendarChipSub_sxuiq_1740",L4="_strategyIntroLight_sxuiq_1749",I4="_strategyClosingLight_sxuiq_1756",Q={root:IF,landing:NF,landingInner:FF,fadeUp:UF,landingMark:BF,landingTitle:OF,landingSubtitle:kF,landingBody:zF,landingBtns:VF,landingBtnPrimary:HF,landingBtnSecondary:GF,keyScreen:WF,keyCard:jF,keyBrand:XF,keyTitle:qF,keyBody:$F,keyInput:YF,keyInputError:KF,keyError:ZF,keyBtn:JF,keyBackBtn:QF,keyNote:eU,header:tU,headerLeft:nU,headerRight:iU,headerTitle:rU,headerSub:sU,headerDivider:oU,backBtn:aU,statusDot:lU,pulse:cU,statusLabel:uU,dashTabs:fU,dashTab:dU,dashTabActive:hU,messages:pU,welcome:mU,welcomeMark:gU,welcomeTitle:_U,welcomeBody:vU,starters:xU,starterBtn:yU,starterLabel:SU,starterDesc:MU,msgRow:EU,user:TU,agent:wU,msgMeta:AU,msgBubble:CU,agentBubble:bU,typingRow:RU,typingBubble:PU,typingText:DU,typingCursor:LU,blink:IU,mdH2:NU,mdH3:FU,mdBold:UU,mdList:BU,mdOList:OU,mdPara:kU,mdSpacer:zU,strategyBlock:VU,strategyIntro:HU,tierSection:GU,tierHeader:WU,tierA:jU,tierB:XU,tierC:qU,tierBadge:$U,tierLabel:YU,tierCount:KU,festGrid:ZU,festCard:JU,festHeader:QU,festName:eB,festLocation:tB,festReason:nB,festTips:iB,strategyClosing:rB,viewStrategyBtn:sB,viewStrategyArrow:oB,commandPalette:aB,commandHeader:lB,commandItem:cB,commandActive:uB,commandIcon:fB,commandLabel:dB,commandPrefix:hB,commandDesc:pB,inputArea:mB,inputOuter:gB,inputWrap:_B,cmdTrigger:vB,cmdTriggerActive:xB,textarea:yB,sendBtn:SB,sendBtnSlash:MB,inputHint:EB,exploreBody:TB,filterBar:wB,filterBtn:AB,filterActive:CB,exploreGrid:bB,exploreFestCard:RB,exploreFestTop:PB,exploreTierBadge:DB,tierABadge:LB,tierBBadge:IB,tierCBadge:NB,exploreFestName:FB,exploreFestLocation:UB,exploreFestFormats:BB,fmtTag:OB,exploreFestDesc:kB,exploreFestWindow:zB,dashClosingBanner:VB,dashContent:HB,gridView:GB,dashFestGrid:WB,dashFestCard:jB,dashCardA:XB,dashCardB:qB,dashCardC:$B,dashCardHead:YB,dashCardName:KB,dashCardLoc:ZB,dashCardDates:JB,dashDateRow:QB,dashDateLabel:eO,dashDateVal:tO,dashCardReason:nO,dashCardTips:iO,calView:rO,calMonth:sO,calMonthHeader:oO,calMonthName:aO,calMonthYear:lO,calMonthCount:cO,calFests:uO,calFestRow:fO,calDot:dO,calDotA:hO,calDotB:pO,calDotC:mO,calFestInfo:gO,calFestName:_O,calFestLoc:vO,calFestMeta:xO,calTierBadge:yO,calTierA:SO,calTierB:MO,calTierC:EO,calScreenDate:TO,tlView:wO,tlItem:AO,tlMonthMarker:CO,tlMonthLabel:bO,tlMonthLine:RO,tlRow:PO,tlTrackCol:DO,tlDot:LO,tlDotA:IO,tlDotB:NO,tlDotC:FO,tlConnector:UO,tlCard:BO,tlCardA:OO,tlCardB:kO,tlCardC:zO,tlCardHead:VO,tlBadge:HO,tlBadgeA:GO,tlBadgeB:WO,tlBadgeC:jO,tlCardName:XO,tlCardLoc:qO,tlCardReason:$O,tlCardFestDate:YO,tlNoDate:KO,tlNoDateLabel:ZO,emptyView:JO,chatLayout:QO,chatSidebar:ek,sidebarTop:tk,newChatBtn:nk,sidebarConvs:ik,convSectionHead:rk,convSectionLabel:sk,convClearBtn:ok,convDividerLabel:ak,convItem:lk,convItemActive:ck,convItemIcon:uk,convItemText:fk,sidebarFooter:dk,sidebarFooterBtn:hk,sidebarFooterLabel:pk,chatMain:mk,chatInputArea:gk,chatInputBox:_k,chatTextarea:vk,chatSendBtn:xk,chatHint:yk,viewTabs:Sk,festCards:Mk,stratStats:Ek,stratStat:Tk,stratStatNum:wk,stratStatLabel:Ak,viewTab:Ck,viewTabActive:bk,cardsView:Rk,tierBlock:Pk,tierBlockHead:Dk,tierBlockBadge:Lk,tierBlockBadgeA:Ik,tierBlockBadgeB:Nk,tierBlockBadgeC:Fk,tierBlockTitle:Uk,festCardNew:Bk,festCardNewA:Ok,festCardNewB:kk,festCardNewC:zk,festCardTop:Vk,festCardNameNew:Hk,festCardLocNew:Gk,festCardDates:Wk,festDateChip:jk,festDateChipSubmit:Xk,festDateChipFest:qk,festReasonNew:$k,festTipsNew:Yk,festTipChip:Kk,timelineView:Zk,timelineGroup:Jk,timelineMonthHead:Qk,timelineMonthLabel:e4,timelineMonthLine:t4,timelineItem:n4,timelineDotCol:i4,timelineDot:r4,timelineDotA:s4,timelineDotB:o4,timelineDotC:a4,timelineConnector:l4,timelineContent:c4,timelineTop:u4,timelineName:f4,timelineLoc:d4,timelineBadge:h4,timelineBadgeA:p4,timelineBadgeB:m4,timelineBadgeC:g4,timelineReason:_4,timelineFestDate:v4,calendarView:x4,calendarRow:y4,calendarMonthName:S4,calendarFests:M4,calendarChip:E4,calendarChipA:T4,calendarChipB:w4,calendarChipC:A4,calendarChipName:C4,calendarChipNameA:b4,calendarChipNameB:R4,calendarChipNameC:P4,calendarChipSub:D4,strategyIntroLight:L4,strategyClosingLight:I4},N4=`You are Laurel — a top-tier film distribution and festival strategy agent with 20+ years of experience as a festival programmer, acquisitions executive, and distribution consultant. You have worked with Sundance, A24, Magnolia Pictures, and leading international sales agents. You know which programmers favor which aesthetics, which festivals are genuinely worth the submission fee, and how to build a circuit that leads to real distribution outcomes.

You speak like the most trusted person in the filmmaker's corner — warm, direct, specific, and honest. You never give generic advice. You reference real past selections, real programmers, real market dynamics.

SPEED IS KEY: Build the strategy as fast as possible. If the first message gives you format + theme/subject + any goal, go straight to the strategy. Ask ONE follow-up question only if a critical piece is truly missing. Never ask more than one question before giving the strategy.

═══════════════════════════════════════════════════════
OUTPUT FORMAT — MANDATORY FOR ALL FESTIVAL RESPONSES
═══════════════════════════════════════════════════════
No matter what the user asks (niche festivals, Oscar path, budget plan, niche/genre, etc.),
whenever you list festival recommendations you MUST output them in this EXACT JSON structure.
Do NOT invent new JSON fields or structures. All extra info (acceptance rates, community value,
Oscar qualifying status, etc.) must go inside the "tips" array as plain strings.

Write one short warm sentence first, then the JSON block. Nothing after the block.

\`\`\`json
{
  "type": "strategy",
  "tiers": [
    {
      "tier": "A",
      "label": "Top-Tier Targets",
      "festivals": [
        {
          "name": "Festival Name",
          "location": "City, Country",
          "reason": "Specific reason this festival fits this particular film.",
          "tips": ["Acceptance rate: ~5%", "Oscar qualifying: Yes", "Submit by early deadline for best read", "Community value: strong industry networking"],
          "submit_by": "Sep 2025",
          "festival_date": "Jan 2026"
        }
      ]
    },
    {
      "tier": "B",
      "label": "Strong Mid-Tier",
      "festivals": []
    },
    {
      "tier": "C",
      "label": "Niche & Regional",
      "festivals": []
    }
  ],
  "closing": "One honest sentence on timing, premiere strategy, or distribution outlook."
}
\`\`\`

RULES:
- type MUST be "strategy" — no exceptions
- Every festival goes inside a tier object with tier "A", "B", or "C"
- Omit empty tiers from the array entirely
- ALWAYS include realistic submit_by and festival_date ("Mon YYYY" format)
- Include 1–3 festivals per tier
- Put ALL extra detail (acceptance rates, Oscar status, community value, co-pro notes) in tips[]
- Be specific. Reference actual past selections when possible.`,px=[{name:"Sundance",location:"Park City, USA",tier:"A",formats:["Feature","Short","Doc"],desc:"The premier American indie festival — a launching ground for bold independent voices and breakout films.",window:"Aug–Sep submission · Jan festival"},{name:"Cannes",location:"Cannes, France",tier:"A",formats:["Feature","Short"],desc:"The world's most prestigious festival. Competition, Un Certain Regard, Directors' Fortnight, and Critics' Week.",window:"Jan–Feb submission · May festival"},{name:"Berlinale",location:"Berlin, Germany",tier:"A",formats:["Feature","Short","Doc"],desc:"Politically engaged and artistically ambitious. Strong on international arthouse and first features.",window:"Oct–Nov submission · Feb festival"},{name:"Venice",location:"Venice, Italy",tier:"A",formats:["Feature","Short","Doc"],desc:"The world's oldest film festival. A premier gateway for Oscar-track prestige features and arthouse cinema.",window:"May–Jun submission · Aug festival"},{name:"TIFF",location:"Toronto, Canada",tier:"A",formats:["Feature","Short","Doc"],desc:"The most commercially significant festival. Ideal for films seeking North American distribution and awards attention.",window:"Apr–May submission · Sep festival"},{name:"SXSW",location:"Austin, USA",tier:"A",formats:["Feature","Short","Doc"],desc:"Culturally current, genre-bending, and adventurous. The best launchpad for first features and bold narratives.",window:"Aug–Oct submission · Mar festival"},{name:"Tribeca",location:"New York, USA",tier:"A",formats:["Feature","Short","Doc"],desc:"Strong platform for NY-connected stories and narrative voices. Great for films seeking US distribution.",window:"Jan–Feb submission · Jun festival"},{name:"Hot Docs",location:"Toronto, Canada",tier:"A",formats:["Doc"],desc:"North America's largest documentary festival. Essential for feature docs seeking international distribution.",window:"Oct–Nov submission · Apr festival"},{name:"Clermont-Ferrand",location:"Clermont-Ferrand, France",tier:"A",formats:["Short"],desc:"The world's most important short film festival. Huge market for short film international sales and licensing.",window:"Jun–Sep submission · Feb festival"},{name:"Annecy",location:"Annecy, France",tier:"A",formats:["Animation"],desc:"The world's top animation festival. Essential for any animated short or feature seeking global exposure.",window:"Jan–Feb submission · Jun festival"},{name:"Locarno",location:"Locarno, Switzerland",tier:"B",formats:["Feature","Short"],desc:"Avant-garde and adventurous. A respected launchpad for formal experimentation and world cinema auteurs.",window:"Mar–Apr submission · Aug festival"},{name:"AFI Fest",location:"Los Angeles, USA",tier:"B",formats:["Feature","Short","Doc"],desc:"Free entry, strong LA industry attendance. A solid Oscar qualifier and excellent platform for US releases.",window:"Aug–Sep submission · Oct festival"},{name:"True/False",location:"Columbia, USA",tier:"B",formats:["Doc"],desc:"Championing formally daring nonfiction. Beloved by doc filmmakers for its community feel and curation quality.",window:"Sep–Oct submission · Mar festival"},{name:"Sheffield DocFest",location:"Sheffield, UK",tier:"B",formats:["Doc"],desc:"One of Europe's leading documentary festivals with a major industry market and co-production hub.",window:"Dec–Jan submission · Jun festival"},{name:"Edinburgh IFF",location:"Edinburgh, UK",tier:"B",formats:["Feature","Short","Doc"],desc:"The world's longest-running film festival. A strong UK launch platform for international films.",window:"Feb–Mar submission · Aug festival"},{name:"Palm Springs ShortFest",location:"Palm Springs, USA",tier:"B",formats:["Short"],desc:"One of North America's top short film festivals. Oscar qualifying and a key stop on the shorts circuit.",window:"Jan–Mar submission · Jun festival"},{name:"Rotterdam (IFFR)",location:"Rotterdam, Netherlands",tier:"B",formats:["Feature","Short","Doc"],desc:"Champions provocative world cinema and innovative voices. Key festival for adventurous arthouse features.",window:"Aug–Oct submission · Jan festival"},{name:"San Sebastián",location:"San Sebastián, Spain",tier:"B",formats:["Feature"],desc:"Major European competition festival with Golden Shell. Strong for Ibero-American and international arthouse cinema.",window:"May–Jun submission · Sep festival"}],F4=["All","Feature","Short","Doc","Animation"],U4=[{label:"Festival DNA Match",desc:"Find 12 best-fit festivals across tiers",template:`My film:
- Title: [TITLE]
- Format: [Short / Feature / Documentary]
- Genre: [e.g., Drama / Thriller / Doc]
- Logline: [1-2 sentence pitch]
- Runtime: [X minutes]
- Country: [COUNTRY]
- Goals: [Distribution / Awards / Community]

Find my 12 best-fit festivals across tiers A, B, and C. For each, explain WHY it fits this specific film.`},{label:"Oscar Qualification",desc:"Precise roadmap to Academy eligibility",template:`I need an Oscar qualification strategy.
- Format: [Short narrative / Short doc / Short animation / Feature doc]
- Runtime: [EXACT runtime]
- Current selections: [or 'none yet']
- Target Oscar year: [20XX]
- Country: [COUNTRY]
- Budget for qualification path: $[AMOUNT]

Walk me through the exact qualification path for my category.`},{label:"Budget Strategy",desc:"Highest ROI plan for your submission budget",template:`Help me build the highest ROI submission plan.
- Total budget: $[AMOUNT]
- Format: [Short / Feature / Doc]
- Genre: [GENRE]
- Career goal: [Distribution / Launch / Awards]
- Timeline: submissions starting [MONTH]
- Country: [COUNTRY]

Maximize career impact per dollar. Flag early-bird deadlines and fee waivers.`},{label:"Write My Materials",desc:"Logline, synopsis & director's statement",template:`Write my festival submission materials.
- Title: [TITLE]
- Director: [NAME]
- Format & genre: [FORMAT / GENRE]
- Runtime: [X minutes]
- Full plot (including ending): [DESCRIBE]
- Director's connection: [Why did YOU make this?]
- Themes: [What is it really about?]
- Tone references: [Films it resembles]

Write: logline, short synopsis, long synopsis, director's statement, 3 alternate loglines.`},{label:"Submission Diagnosis",desc:"Honest audit of why rejections are happening",template:`I need an honest diagnosis of my submission run.
- Format & genre: [FORMAT / GENRE]
- Total submissions: [NUMBER]
- Total selections: [NUMBER]
- Notable rejections: [LIST]
- Selections so far: [LIST]
- My current logline: [PASTE]
- Budget spent: $[AMOUNT]

Be brutally honest. Tell me what's wrong and give 3 corrective actions.`},{label:"Post-Premiere Circuit",desc:"Maximize the run after your world premiere",template:`My film has had its world premiere. Help me maximize the circuit.
- Film: [TITLE / FORMAT]
- World premiere: [FESTIVAL, MONTH/YEAR]
- Other selections: [LIST]
- Awards won: [LIST or 'none yet']
- Remaining premiere status: [International / NA / Regional]
- Distribution status: [Acquired / In talks / Not yet]
- Budget remaining: $[AMOUNT]

Design my post-premiere strategy with a 6-month roadmap.`}],Up=[{icon:w.jsx(l2,{size:14}),label:"Full Strategy",description:"Build a complete tiered festival submission strategy",prefix:"/strategy"},{icon:w.jsx(os,{size:14}),label:"Tier Breakdown",description:"Which festival tiers (A/B/C) are realistic for my film",prefix:"/tiers"},{icon:w.jsx(lg,{size:14}),label:"Deadlines",description:"Key upcoming submission windows to hit this cycle",prefix:"/deadlines"},{icon:w.jsx(v1,{size:14}),label:"Budget Path",description:"High-impact festivals for a limited submission budget",prefix:"/budget"}],B4="https://api.anthropic.com/v1/messages",O4="claude-haiku-4-5-20251001",k4=4096;function ia(t){return t.split(/(\*\*[^*]+\*\*)/g).map((n,i)=>n.startsWith("**")&&n.endsWith("**")?w.jsx("strong",{className:Q.mdBold,children:n.slice(2,-2)},i):n)}function mx(t){const e=t.split(`
`),n=[];let i=0;for(;i<e.length;){const r=e[i];if(r.startsWith("```")){for(i++;i<e.length&&!e[i].startsWith("```");)i++;i++}else if(r.startsWith("## "))n.push(w.jsx("h2",{className:Q.mdH2,children:ia(r.slice(3))},i)),i++;else if(r.startsWith("### "))n.push(w.jsx("h3",{className:Q.mdH3,children:ia(r.slice(4))},i)),i++;else if(r.startsWith("- ")||r.startsWith("• ")){const s=[];for(;i<e.length&&(e[i].startsWith("- ")||e[i].startsWith("• "));)s.push(w.jsx("li",{children:ia(e[i].slice(2))},i)),i++;n.push(w.jsx("ul",{className:Q.mdList,children:s},`ul-${i}`))}else if(/^\d+\.\s/.test(r)){const s=[];for(;i<e.length&&/^\d+\.\s/.test(e[i]);)s.push(w.jsx("li",{children:ia(e[i].replace(/^\d+\.\s/,""))},i)),i++;n.push(w.jsx("ol",{className:Q.mdOList,children:s},`ol-${i}`))}else r.trim()===""?(n.push(w.jsx("div",{className:Q.mdSpacer},i)),i++):(n.push(w.jsx("p",{className:Q.mdPara,children:ia(r)},i)),i++)}return n}function z4(t){var n;if(t.type==="strategy"&&Array.isArray(t.tiers))return t;if(Array.isArray(t.festivals))return{type:"strategy",tiers:[{tier:"B",label:"Festival Matches",festivals:Md(t.festivals)}],closing:t.closing||null};if(Array.isArray(t)&&((n=t[0])!=null&&n.name))return{type:"strategy",tiers:[{tier:"B",label:"Festival Matches",festivals:Md(t)}],closing:null};const e=Object.keys(t).filter(i=>{var r;return Array.isArray(t[i])&&((r=t[i][0])==null?void 0:r.name)});if(e.length>0){const i={prestige:"A","high roi":"B",niche:"C",genre:"C",oscar:"C",regional:"C"};return{type:"strategy",tiers:e.map((r,s)=>({tier:i[r.toLowerCase()]||(s===0?"A":s===1?"B":"C"),label:r,festivals:Md(t[r])})),closing:t.closing||null}}return null}function Md(t){return(t||[]).map(e=>{const n=new Set(["name","location","reason","tips","submit_by","festival_date","tier"]),i=Object.entries(e).filter(([r,s])=>!n.has(r)&&s!==null&&s!==void 0&&s!=="").map(([r,s])=>`${r.replace(/_/g," ")}: ${typeof s=="boolean"?s?"Yes":"No":s}`);return{name:e.name||"Unknown",location:e.location||"",reason:e.reason||e.description||e.why||"",tips:[...e.tips||[],...i],submit_by:e.submit_by||e.deadline||null,festival_date:e.festival_date||e.festival||null}})}function V4(t){const e=t.match(/```(?:json)?\s*\n?([\s\S]*)\n?```/);let n=e?e[1].trim():null;if(!n){const i=t.indexOf("{"),r=t.lastIndexOf("}");i!==-1&&r!==-1&&r>i&&(n=t.slice(i,r+1))}if(!n)return null;try{return z4(JSON.parse(n))}catch{return null}}function H4(t){const e=t.indexOf("```");return e>0?t.slice(0,e).trim():null}const Ed={Sundance:{lat:40.65,lng:-111.5},Cannes:{lat:43.55,lng:7.02},TIFF:{lat:43.65,lng:-79.38},Toronto:{lat:43.65,lng:-79.38},Venice:{lat:45.43,lng:12.33},Berlinale:{lat:52.52,lng:13.4},Berlin:{lat:52.52,lng:13.4},SXSW:{lat:30.27,lng:-97.74},Tribeca:{lat:40.71,lng:-74},"Hot Docs":{lat:43.65,lng:-79.38},"Clermont-Ferrand":{lat:45.78,lng:3.08},Annecy:{lat:45.9,lng:6.12},Locarno:{lat:46.17,lng:8.8},"AFI Fest":{lat:34.1,lng:-118.32},AFI:{lat:34.1,lng:-118.32},"True/False":{lat:38.95,lng:-92.33},Sheffield:{lat:53.38,lng:-1.47},"Sheffield DocFest":{lat:53.38,lng:-1.47},Edinburgh:{lat:55.95,lng:-3.19},"Palm Springs":{lat:33.83,lng:-116.54},Rotterdam:{lat:51.92,lng:4.48},IFFR:{lat:51.92,lng:4.48},"San Sebastián":{lat:43.32,lng:-1.98},"San Sebastian":{lat:43.32,lng:-1.98},Telluride:{lat:37.94,lng:-107.81},NYFF:{lat:40.77,lng:-73.98},"New York":{lat:40.71,lng:-74},Busan:{lat:35.1,lng:129.04},London:{lat:51.51,lng:-.13},BFI:{lat:51.51,lng:-.13},IDFA:{lat:52.37,lng:4.9},Amsterdam:{lat:52.37,lng:4.9},Copenhagen:{lat:55.68,lng:12.57},Zurich:{lat:47.38,lng:8.54},Sitges:{lat:41.23,lng:1.81},"San Francisco":{lat:37.77,lng:-122.42},SFIFF:{lat:37.77,lng:-122.42},Fantasia:{lat:45.5,lng:-73.57},Montreal:{lat:45.5,lng:-73.57},Chattanooga:{lat:35.05,lng:-85.31},Warsaw:{lat:52.23,lng:21.01},"Hong Kong":{lat:22.3,lng:114.18},Tokyo:{lat:35.68,lng:139.69},Sydney:{lat:-33.87,lng:151.21},Mumbai:{lat:19.08,lng:72.88},"Buenos Aires":{lat:-34.6,lng:-58.38},Thessaloniki:{lat:40.64,lng:22.94},Stockholm:{lat:59.33,lng:18.07},Göteborg:{lat:57.71,lng:11.97},Gothenburg:{lat:57.71,lng:11.97},Lisbon:{lat:38.72,lng:-9.14},DocLisboa:{lat:38.72,lng:-9.14},"Visions du Réel":{lat:46.38,lng:6.24},Austin:{lat:30.27,lng:-97.74},"Los Angeles":{lat:34.05,lng:-118.24}};function ic(t){if(!t)return null;if(Ed[t])return Ed[t];const e=t.toLowerCase();for(const[n,i]of Object.entries(Ed))if(e.includes(n.toLowerCase())||n.toLowerCase().includes(e))return i;return null}const iE=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],G4=["January","February","March","April","May","June","July","August","September","October","November","December"];function Bp(t){if(!t)return null;const e=t.match(/([A-Za-z]+)\s+(\d{4})/);if(!e)return null;const n=iE.findIndex(r=>r.toLowerCase()===e[1].toLowerCase().slice(0,3)),i=parseInt(e[2]);return n===-1||isNaN(i)?null:{month:n,year:i,sortKey:i*12+n}}function Sg(t){return t.tiers.flatMap(e=>(e.festivals||[]).map(n=>({...n,tier:e.tier,tierLabel:e.label})))}function Mg(t){const e={};return t.forEach(n=>{const i=Bp(n.submit_by);if(!i)return;const r=`${i.year}-${i.month}`;e[r]||(e[r]={...i,key:r,festivals:[]}),e[r].festivals.push(n)}),Object.values(e).sort((n,i)=>n.sortKey-i.sortKey)}function W4({strategy:t,onBack:e}){const n=Sg(t),i=Mg(n),[r,s]=ie.useState("cards");return w.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",background:"#f0f1f2",overflow:"hidden"},children:[w.jsxs("div",{style:{background:"rgba(10,5,3,0.92)",backdropFilter:"blur(12px)",borderBottom:"1px solid rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 24px",height:52,flexShrink:0},children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[w.jsx("button",{onClick:e,style:{background:"none",border:"none",cursor:"pointer",fontFamily:"'Geist Mono', monospace",fontSize:10.5,color:"rgba(255,255,255,0.45)",letterSpacing:"0.06em",padding:0,display:"flex",alignItems:"center",gap:6},children:"← Chat"}),w.jsx("div",{style:{width:1,height:16,background:"rgba(255,255,255,0.1)"}}),w.jsxs("div",{children:[w.jsx("div",{style:{fontSize:13,fontWeight:700,color:"#FF5200",letterSpacing:"0.06em",textTransform:"uppercase",fontFamily:"'Inter', sans-serif"},children:"Your Strategy"}),w.jsxs("div",{style:{fontSize:10,color:"rgba(255,255,255,0.28)",marginTop:1,fontFamily:"'Geist Mono', monospace",letterSpacing:"0.06em"},children:[n.length," festivals · ",t.tiers.filter(o=>{var a;return((a=o.festivals)==null?void 0:a.length)>0}).length," tiers"]})]})]}),t.closing&&w.jsx("div",{style:{fontSize:11,color:"rgba(255,255,255,0.28)",fontFamily:"'Inter', sans-serif",maxWidth:"45%",textAlign:"right",lineHeight:1.5},children:t.closing})]}),w.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"28px 32px 40px"},children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:24,flexWrap:"wrap",gap:12},children:[w.jsxs("div",{className:Q.stratStats,children:[w.jsxs("div",{className:Q.stratStat,children:[w.jsx("span",{className:Q.stratStatNum,children:n.length}),w.jsx("span",{className:Q.stratStatLabel,children:"Festivals"})]}),w.jsxs("div",{className:Q.stratStat,children:[w.jsx("span",{className:Q.stratStatNum,children:t.tiers.filter(o=>{var a;return((a=o.festivals)==null?void 0:a.length)>0}).length}),w.jsx("span",{className:Q.stratStatLabel,children:"Tiers"})]}),i.length>0&&w.jsxs("div",{className:Q.stratStat,children:[w.jsx("span",{className:Q.stratStatNum,children:i.length}),w.jsx("span",{className:Q.stratStatLabel,children:"Deadlines"})]})]}),w.jsx("div",{className:Q.viewTabs,children:[{key:"cards",label:"Cards",icon:w.jsx(Vh,{size:12})},{key:"timeline",label:"Timeline",icon:w.jsx(os,{size:12})},{key:"calendar",label:"Calendar",icon:w.jsx(lg,{size:12})},{key:"globe",label:"Globe",icon:w.jsx(g1,{size:12})},{key:"gallery",label:"Gallery",icon:w.jsx(_1,{size:12})}].map(o=>w.jsxs("button",{className:`${Q.viewTab} ${r===o.key?Q.viewTabActive:""}`,onClick:()=>s(o.key),children:[o.icon," ",o.label]},o.key))})]}),w.jsxs("div",{children:[r==="cards"&&w.jsx(sE,{strategy:t}),r==="timeline"&&w.jsx(lE,{festivals:n}),r==="calendar"&&w.jsx(cE,{groups:i,all:n}),r==="globe"&&w.jsx(oE,{festivals:n}),r==="gallery"&&w.jsx(aE,{strategy:t})]})]})]})}const j4={A:Q.calendarChipA,B:Q.calendarChipB,C:Q.calendarChipC},X4={A:Q.calendarChipNameA,B:Q.calendarChipNameB,C:Q.calendarChipNameC},rE={A:"#FF5200",B:"#d97706",C:"#9ca3af"};function q4({festival:t,tier:e}){var s;const[n,i]=ie.useState(!1),r=rE[e]||"#9ca3af";return w.jsxs("div",{style:{background:"#fff",borderTop:"1px solid #ede8e1",borderLeft:`2px solid ${r}`},children:[w.jsxs("div",{style:{padding:"16px 16px 10px 14px"},children:[w.jsx("div",{style:{fontFamily:"'Barlow Condensed', sans-serif",fontSize:22,fontWeight:700,color:"#1a1008",letterSpacing:"0.02em",textTransform:"uppercase",lineHeight:1},children:t.name}),t.location&&w.jsx("div",{style:{fontSize:10,color:"#b8a898",marginTop:4,fontFamily:"'Geist Mono', monospace",letterSpacing:"0.05em"},children:t.location})]}),(t.submit_by||t.festival_date)&&w.jsxs(w.Fragment,{children:[w.jsx("div",{style:{height:1,background:"#ede8e1",margin:"0 14px"}}),w.jsxs("div",{style:{padding:"10px 16px 10px 14px",display:"flex",flexDirection:"column",gap:7},children:[t.submit_by&&w.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:[w.jsx("span",{style:{fontSize:9,color:"#b8a898",letterSpacing:"0.1em",textTransform:"uppercase",fontFamily:"'Geist Mono', monospace"},children:"Submit by"}),w.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#FF5200",fontFamily:"'Inter', sans-serif"},children:t.submit_by})]}),t.festival_date&&w.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:[w.jsx("span",{style:{fontSize:9,color:"#b8a898",letterSpacing:"0.1em",textTransform:"uppercase",fontFamily:"'Geist Mono', monospace"},children:"Festival"}),w.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#1a1008",fontFamily:"'Inter', sans-serif"},children:t.festival_date})]})]})]}),t.reason&&w.jsxs(w.Fragment,{children:[w.jsx("div",{style:{height:1,background:"#ede8e1",margin:"0 14px"}}),w.jsxs("div",{style:{padding:"10px 16px 14px 14px"},children:[w.jsx("div",{style:{fontSize:9,letterSpacing:"0.12em",textTransform:"uppercase",color:r,marginBottom:6,fontFamily:"'Geist Mono', monospace"},children:"Why"}),w.jsx("p",{style:{fontSize:12,lineHeight:1.65,color:"#7a6655",margin:0,fontFamily:"'Inter', sans-serif"},children:t.reason})]})]}),((s=t.tips)==null?void 0:s.length)>0&&w.jsxs(w.Fragment,{children:[w.jsx("div",{style:{height:1,background:"#ede8e1",margin:"0 14px"}}),w.jsxs("div",{style:{padding:"8px 16px 12px 14px"},children:[n&&w.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:8},children:t.tips.map((o,a)=>w.jsx("span",{style:{padding:"3px 8px",background:"rgba(0,0,0,0.04)",border:"1px solid #ede8e1",borderRadius:100,fontSize:10,color:"#7a6655",fontFamily:"'Geist Mono', monospace"},children:o},a))}),w.jsxs("button",{onClick:()=>i(o=>!o),style:{background:"none",border:"none",cursor:"pointer",padding:0,fontSize:9,color:"#b8a898",fontFamily:"'Geist Mono', monospace",letterSpacing:"0.1em",textTransform:"uppercase",display:"flex",alignItems:"center",gap:3},children:[w.jsx("span",{style:{fontSize:7},children:n?"▲":"▼"}),n?"HIDE":`${t.tips.length} NOTES`]})]})]})]})}function sE({strategy:t}){return w.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:t.tiers.filter(e=>{var n;return((n=e.festivals)==null?void 0:n.length)>0}).map(e=>{const n=rE[e.tier]||"#9ca3af";return w.jsxs("div",{children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,paddingBottom:8,borderBottom:"1px solid #ede8e1"},children:[w.jsxs("span",{style:{fontFamily:"'Geist Mono', monospace",fontSize:9,color:n,letterSpacing:"0.1em"},children:["TIER ",e.tier]}),w.jsx("span",{style:{fontFamily:"'Geist Mono', monospace",fontSize:9,color:"#b8a898",letterSpacing:"0.08em",textTransform:"uppercase"},children:e.label}),w.jsx("span",{style:{fontFamily:"'Geist Mono', monospace",fontSize:9,color:"#c4b8ac",marginLeft:"auto"},children:e.festivals.length})]}),w.jsx("div",{style:{border:"1px solid #ede8e1",borderRadius:8,overflow:"hidden"},children:e.festivals.map((i,r)=>w.jsx(q4,{festival:i,tier:e.tier},r))})]},e.tier)})})}function oE({festivals:t}){const e=ie.useRef(null),n=ie.useRef(null),[i,r]=ie.useState(null),s=t.filter(o=>ic(o.name));return ie.useEffect(()=>{n.current=i},[i]),ie.useEffect(()=>{const o=e.current;if(!o)return;const a=o.clientWidth||o.offsetWidth||480,l=o.clientHeight||o.offsetHeight||380,c=new l3,u=new Gn(36,a/l,.1,100);u.position.set(0,.4,3.6);const d=new LF({antialias:!0,alpha:!0});d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.setClearColor(0,0),d.setSize(a,l,!1),o.appendChild(d.domElement);const f=new ua;c.add(f),c.add(new N3(16777215,.55));const p=new Hv(16770754,1.1);p.position.set(3,2,4),c.add(p);const _=new Hv(16777215,.45);_.position.set(-4,0,-2),c.add(_),f.add(new Yn(new ao(1,64,64),new R3({color:16777215,roughness:.85,metalness:.05,transparent:!0,opacity:.1}))),f.add(new y3(new E3(new ao(1.001,28,16)),new Rc({color:16777215,transparent:!0,opacity:.2})));function y(L,k,$){const U=[];for(let Z=0;Z<=128;Z++){const fe=Z/128*Math.PI*2;U.push(new z(Math.cos(fe)*L,k,Math.sin(fe)*L))}f.add(new Ip(new _n().setFromPoints(U),new Rc({color:16777215,transparent:!0,opacity:$})))}y(1.001,0,.55),y(Math.cos(Math.PI*.13)*1.001,Math.sin(Math.PI*.13),.18),y(Math.cos(Math.PI*.13)*1.001,-Math.sin(Math.PI*.13),.18);function g(L,k,$){const U=(90-L)*(Math.PI/180),Z=(k+180)*(Math.PI/180);return new z(-$*Math.sin(U)*Math.cos(Z),$*Math.cos(U),$*Math.sin(U)*Math.sin(Z))}function h(L){const k=document.createElement("canvas");k.width=512,k.height=128;const $=k.getContext("2d");$.clearRect(0,0,512,128),$.font='bold 64px "Barlow Condensed", sans-serif',$.fillStyle="#ffffff",$.textBaseline="middle",$.textAlign="left",$.fillText(L.toUpperCase(),16,64);const U=new S3(k);U.minFilter=Jt;const Z=new p3(new V1({map:U,transparent:!0,depthTest:!1}));return Z.scale.set(.7,.175,1),Z}const m={A:16732672,B:16434947,C:10265519},v=.022,S={};s.forEach(L=>{const k=ic(L.name);if(!k)return;const $=g(k.lat,k.lng,1),U=g(k.lat,k.lng,1.08),Z=m[L.tier]||16434947;f.add(new Ip(new _n().setFromPoints([$,U]),new Rc({color:Z,transparent:!0,opacity:.85})));const fe=new Yn(new ao(v,16,16),new vu({color:Z}));fe.position.copy(U),f.add(fe);const Ie=new Yn(new ao(v*2.4,16,16),new vu({color:Z,transparent:!0,opacity:.18}));Ie.position.copy(U),f.add(Ie);const Re=h(L.name);Re.position.copy(g(k.lat,k.lng,1.22)),f.add(Re),S[L.name]={head:fe,halo:Ie,label:Re,tier:L.tier}});let A=.3,T=-.05,R=.3,x=-.05,b=!1,P=0,D=0,O=!0;const q=d.domElement;q.addEventListener("pointerdown",L=>{b=!0,P=L.clientX,D=L.clientY,O=!1,q.setPointerCapture(L.pointerId)}),q.addEventListener("pointermove",L=>{b&&(R+=(L.clientX-P)*.005,x+=(L.clientY-D)*.005,x=Math.max(-1.2,Math.min(1.2,x)),P=L.clientX,D=L.clientY)}),q.addEventListener("pointerup",L=>{b=!1;try{q.releasePointerCapture(L.pointerId)}catch{}}),q.addEventListener("pointerleave",()=>{b=!1});const Y=()=>{const L=Math.max(2,o.clientWidth),k=Math.max(2,o.clientHeight);d.setSize(L,k,!1),u.aspect=L/k,u.updateProjectionMatrix()},N=new ResizeObserver(Y);N.observe(o),Y();let G=0;const H=()=>{G=requestAnimationFrame(H),O&&(R+=.0015),A+=(R-A)*.08,T+=(x-T)*.08,f.rotation.y=A,f.rotation.x=T;const L=performance.now()*.002,k=n.current;Object.entries(S).forEach(([$,U],Z)=>{const fe=(Math.sin(L+Z*.7)+1)*.5,Ie=k===$;U.halo.scale.setScalar(1+fe*(Ie?.6:.3)),U.halo.material.opacity=(Ie?.35:.18)-fe*.08,U.head.material.color.set(Ie?16777215:m[U.tier]||16434947)}),d.render(c,u)};return G=requestAnimationFrame(H),()=>{cancelAnimationFrame(G),N.disconnect(),d.dispose(),o.contains(d.domElement)&&o.removeChild(d.domElement)}},[]),w.jsxs("div",{style:{borderRadius:12,overflow:"hidden",background:"linear-gradient(160deg, #FF5200 0%, #8a0000 100%)",position:"relative",minHeight:380,display:"flex",flexDirection:"column"},children:[w.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:1},children:[w.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 60% at 50% 45%, rgba(255,160,80,0.30) 0%, transparent 60%)"}}),w.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse 120% 100% at 50% 110%, rgba(80,5,0,0.85) 0%, transparent 60%)"}}),w.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",backgroundSize:"80px 80px",maskImage:"radial-gradient(ellipse 80% 60% at 50% 50%, #000 30%, transparent 75%)"}})]}),w.jsxs("div",{style:{position:"relative",zIndex:5,padding:"18px 20px 0",display:"flex",alignItems:"center",gap:8},children:[w.jsx("div",{style:{width:6,height:6,background:"#fff",borderRadius:"50%"}}),w.jsxs("span",{style:{fontFamily:"'Barlow Condensed', sans-serif",fontWeight:700,fontSize:12,letterSpacing:"0.1em",color:"rgba(255,255,255,0.85)",textTransform:"uppercase"},children:["Strategy Circuit — ",s.length," locations mapped"]})]}),w.jsxs("div",{style:{flex:1,display:"flex",position:"relative",zIndex:2,minHeight:300},children:[w.jsx("div",{ref:e,style:{flex:1,cursor:"grab",minHeight:380,height:380}}),w.jsxs("div",{style:{width:170,padding:"16px 14px",overflowY:"auto",display:"flex",flexDirection:"column"},children:[w.jsx("div",{style:{fontFamily:"'Barlow Condensed', sans-serif",fontWeight:700,fontSize:10,letterSpacing:"0.14em",color:"rgba(255,255,255,0.7)",textTransform:"uppercase",marginBottom:10,paddingBottom:8,borderBottom:"1px solid rgba(255,255,255,0.2)"},children:"// The Circuit"}),t.map((o,a)=>{const l=!!ic(o.name),c=i===o.name;return w.jsxs("button",{onClick:()=>l&&r(o.name===i?null:o.name),style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:8,alignItems:"baseline",padding:"9px 0",borderBottom:"1px solid rgba(255,255,255,0.1)",background:"none",border:"none",cursor:l?"pointer":"default",width:"100%",textAlign:"left"},children:[w.jsx("span",{style:{fontFamily:"'Inter', sans-serif",fontSize:10,color:"rgba(255,255,255,0.4)",width:18},children:String(a+1).padStart(2,"0")}),w.jsx("span",{style:{fontFamily:"'Barlow Condensed', sans-serif",fontSize:18,fontWeight:700,letterSpacing:"0.04em",color:c?"#FAC703":l?"#fff":"rgba(255,255,255,0.45)",textTransform:"uppercase",lineHeight:1.1},children:o.name})]},a)})]})]}),w.jsx("div",{style:{position:"relative",zIndex:5,padding:"10px 20px 16px",borderTop:"1px solid rgba(255,255,255,0.15)"},children:w.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:t.map((o,a)=>w.jsx("span",{style:{fontFamily:"'Barlow Condensed', sans-serif",fontWeight:700,fontSize:12,letterSpacing:"0.06em",color:ic(o.name)?"rgba(255,255,255,0.55)":"rgba(255,255,255,0.25)",textTransform:"uppercase"},children:o.name},a))})})]})}const gx=[{bg:"#1b3a36",accent:"#FF5200"},{bg:"#3a2a1c",accent:"#FAC703"},{bg:"#1c2a3a",accent:"#5aa9e9"},{bg:"#3a1c2a",accent:"#c97aa7"},{bg:"#2a2a1c",accent:"#cfcf6a"},{bg:"#2a1c2a",accent:"#b85cd6"},{bg:"#1c2a2a",accent:"#5acfcf"},{bg:"#2a1a0a",accent:"#FF8C00"},{bg:"#1a2a1a",accent:"#7ecf5a"}];function aE({strategy:t}){const e=Sg(t);return w.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(190px, 1fr))",gap:8},children:e.map((n,i)=>{const{bg:r,accent:s}=gx[i%gx.length];return w.jsxs("div",{style:{background:r,borderRadius:10,overflow:"hidden",position:"relative",minHeight:168,display:"flex",flexDirection:"column"},children:[w.jsx("div",{style:{position:"absolute",inset:0,background:`radial-gradient(ellipse at top left, ${s}28 0%, transparent 65%)`,pointerEvents:"none"}}),w.jsxs("div",{style:{position:"relative",padding:"14px 14px 12px",flex:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[w.jsxs("div",{children:[w.jsxs("div",{style:{fontFamily:"'Geist Mono', monospace",fontSize:8,color:s,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:6},children:["TIER ",n.tier]}),w.jsx("div",{style:{fontFamily:"'Barlow Condensed', sans-serif",fontSize:28,fontWeight:700,color:"#fff",textTransform:"uppercase",letterSpacing:"0.02em",lineHeight:1},children:n.name}),n.location&&w.jsx("div",{style:{fontFamily:"'Geist Mono', monospace",fontSize:9,color:"rgba(255,255,255,0.38)",marginTop:5,letterSpacing:"0.04em"},children:n.location})]}),w.jsxs("div",{style:{marginTop:14},children:[n.submit_by&&w.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:5},children:[w.jsx("span",{style:{fontFamily:"'Geist Mono', monospace",fontSize:8,color:"rgba(255,255,255,0.3)",letterSpacing:"0.1em",textTransform:"uppercase"},children:"Submit"}),w.jsx("span",{style:{fontFamily:"'Barlow Condensed', sans-serif",fontSize:14,fontWeight:700,color:s,letterSpacing:"0.02em"},children:n.submit_by})]}),n.festival_date&&w.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:5,marginTop:2},children:[w.jsx("span",{style:{fontFamily:"'Geist Mono', monospace",fontSize:8,color:"rgba(255,255,255,0.3)",letterSpacing:"0.1em",textTransform:"uppercase"},children:"Festival"}),w.jsx("span",{style:{fontFamily:"'Barlow Condensed', sans-serif",fontSize:14,fontWeight:700,color:"rgba(255,255,255,0.65)",letterSpacing:"0.02em"},children:n.festival_date})]})]})]})]},i)})})}const $4={A:"#FF5200",B:"#FAC703",C:"#9ca3af"},Y4={A:22,B:18,C:15};function lE({festivals:t}){const e=[...t].filter(s=>s.submit_by).sort((s,o)=>{const a=Bp(s.submit_by),l=Bp(o.submit_by);return((a==null?void 0:a.sortKey)??999999)-((l==null?void 0:l.sortKey)??999999)}),n=t.filter(s=>!s.submit_by),r=[...Mg(e),...n.length>0?[{key:"__none__",month:null,year:null,festivals:n}]:[]];return r.length===0?w.jsx("div",{style:{padding:"32px 0"},children:w.jsx("div",{style:{fontFamily:"'Geist Mono', monospace",fontSize:10,color:"#b8a898"},children:"No deadline data available"})}):w.jsxs("div",{style:{background:"#fff",borderTop:"2px solid #1a1008",overflow:"hidden"},children:[w.jsxs("div",{style:{padding:"22px 0 18px",display:"flex",alignItems:"baseline",gap:16,borderBottom:"1px solid #ede8e1"},children:[w.jsx("div",{style:{fontFamily:"'Barlow Condensed', sans-serif",fontSize:22,fontWeight:700,color:"#1a1008",letterSpacing:"0.04em",textTransform:"uppercase"},children:"Submission Schedule"}),w.jsxs("div",{style:{fontFamily:"'Geist Mono', monospace",fontSize:9,color:"#b8a898",letterSpacing:"0.1em",textTransform:"uppercase"},children:[t.length," festivals"]})]}),w.jsx("div",{style:{overflowX:"auto",paddingBottom:8},children:w.jsx("div",{style:{display:"flex",minWidth:r.length*210},children:r.map((s,o)=>{const a=s.month!==null,l=s.month?G4[s.month].slice(0,3).toUpperCase():"–",c=s.year?String(s.year).slice(2):"";return w.jsxs(uu.div,{style:{flex:"0 0 210px",paddingTop:24,paddingRight:16,borderRight:"1px solid #ede8e1"},initial:{opacity:0},animate:{opacity:1},transition:{duration:.4,delay:o*.06},children:[w.jsxs("div",{style:{marginBottom:20,paddingBottom:14,borderBottom:`2px solid ${a?"#FF5200":"#ede8e1"}`},children:[w.jsx("div",{style:{fontFamily:"'Barlow Condensed', sans-serif",fontSize:44,fontWeight:700,lineHeight:1,color:a?"#1a1008":"#c4b8ac",letterSpacing:"-0.01em"},children:l}),w.jsx("div",{style:{fontFamily:"'Geist Mono', monospace",fontSize:9,color:"#b8a898",letterSpacing:"0.1em",marginTop:2},children:a?`'${c}`:"NO DEADLINE"})]}),w.jsx("div",{style:{display:"flex",flexDirection:"column",gap:0},children:s.festivals.map((u,d)=>{const f=$4[u.tier]||"#9ca3af",p=Y4[u.tier]||15;return w.jsxs("div",{style:{paddingTop:10,paddingBottom:10,paddingLeft:10,borderLeft:`2px solid ${f}`,marginBottom:6},children:[w.jsx("div",{style:{fontFamily:"'Barlow Condensed', sans-serif",fontSize:p,fontWeight:700,color:"#1a1008",textTransform:"uppercase",letterSpacing:"0.02em",lineHeight:1.05},children:u.name}),u.location&&w.jsx("div",{style:{fontFamily:"'Geist Mono', monospace",fontSize:9,color:"#b8a898",marginTop:3},children:u.location})]},d)})})]},s.key)})})}),w.jsx("div",{style:{padding:"12px 0",borderTop:"1px solid #ede8e1",display:"flex",gap:20},children:[["A","#FF5200","22px"],["B","#FAC703","18px"],["C","#9ca3af","15px"]].map(([s,o,a])=>w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[w.jsx("div",{style:{width:2,height:14,background:o,flexShrink:0}}),w.jsxs("span",{style:{fontFamily:"'Barlow Condensed', sans-serif",fontSize:a,fontWeight:700,color:"#1a1008",textTransform:"uppercase",lineHeight:1},children:["Tier ",s]})]},s))})]})}function cE({groups:t,all:e}){return t.length===0?w.jsx("div",{style:{padding:"16px 0",fontSize:12,color:"rgba(54,65,83,0.4)",fontFamily:"'Geist Mono', monospace"},children:"No submission deadlines provided."}):w.jsx("div",{className:Q.calendarView,children:t.map(n=>w.jsxs("div",{className:Q.calendarRow,children:[w.jsxs("div",{className:Q.calendarMonthName,children:[iE[n.month],w.jsx("br",{}),n.year]}),w.jsx("div",{className:Q.calendarFests,children:n.festivals.map((i,r)=>w.jsxs("div",{className:`${Q.calendarChip} ${j4[i.tier]||Q.calendarChipC}`,children:[w.jsx("span",{className:`${Q.calendarChipName} ${X4[i.tier]||Q.calendarChipNameC}`,children:i.name}),i.location&&w.jsx("span",{className:Q.calendarChipSub,children:i.location})]},r))})]},n.key))})}function K4({text:t,onViewStrategy:e}){const n=V4(t),i=H4(t),[r,s]=ie.useState("cards");if(!n){const u=t.replace(/```[\s\S]*?```/g,"").trim();return w.jsx("div",{className:`${Q.msgBubble} ${Q.agentBubble}`,children:mx(u||t)})}const o=Sg(n),a=o.length,l=Mg(o),c=n.tiers.filter(u=>{var d;return((d=u.festivals)==null?void 0:d.length)>0}).length;return w.jsxs("div",{className:Q.strategyBlock,children:[i&&w.jsx("p",{style:{fontSize:15,color:"#1f2937",lineHeight:1.7,fontFamily:"'Inter', sans-serif",fontWeight:400,padding:"0 2px",margin:0},children:i}),w.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap"},children:[w.jsx("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[{value:a,label:"festivals"},{value:c,label:"tiers"},...l.length>0?[{value:l.length,label:"deadlines"}]:[]].map((u,d)=>w.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:5},children:[w.jsx("span",{style:{fontFamily:"'Inter', sans-serif",fontSize:18,fontWeight:700,color:"#1f2937",lineHeight:1},children:u.value}),w.jsx("span",{style:{fontFamily:"'Geist Mono', monospace",fontSize:9,color:"rgba(54,65,83,0.38)",letterSpacing:"0.08em",textTransform:"uppercase"},children:u.label})]},d))}),w.jsx("div",{className:Q.viewTabs,children:[{key:"cards",label:"Cards",icon:w.jsx(Vh,{size:12})},{key:"timeline",label:"Timeline",icon:w.jsx(os,{size:12})},{key:"calendar",label:"Calendar",icon:w.jsx(lg,{size:12})},{key:"globe",label:"Globe",icon:w.jsx(g1,{size:12})},{key:"gallery",label:"Gallery",icon:w.jsx(_1,{size:12})}].map(u=>w.jsxs("button",{className:`${Q.viewTab} ${r===u.key?Q.viewTabActive:""}`,onClick:()=>s(u.key),children:[u.icon," ",u.label]},u.key))})]}),w.jsxs("div",{children:[r==="cards"&&w.jsx(sE,{strategy:n}),r==="timeline"&&w.jsx(lE,{festivals:o}),r==="calendar"&&w.jsx(cE,{groups:l,all:o}),r==="globe"&&w.jsx(oE,{festivals:o}),r==="gallery"&&w.jsx(aE,{strategy:n})]}),n.closing&&w.jsx("p",{style:{fontSize:12,fontStyle:"italic",color:"rgba(54,65,83,0.42)",lineHeight:1.65,padding:"0 2px",margin:0,borderTop:"1px solid rgba(0,0,0,0.06)",paddingTop:10},children:n.closing}),w.jsxs(uu.button,{className:Q.viewStrategyBtn,onClick:()=>e(n),initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{delay:.3},whileHover:{scale:1.01},whileTap:{scale:.99},children:[w.jsx(Vh,{size:13}),"Full Dashboard — ",a," festivals",w.jsx("span",{className:Q.viewStrategyArrow,children:"→"})]})]})}function Z4({query:t,active:e,onSelect:n,onClose:i,paletteRef:r}){const s=Up.filter(o=>o.prefix.startsWith(t.length>1?t:"/")||o.label.toLowerCase().includes(t.slice(1).toLowerCase()));return s.length===0?null:w.jsx(BR,{children:w.jsxs(uu.div,{ref:r,className:Q.commandPalette,initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0,y:6},transition:{duration:.14},children:[w.jsx("div",{className:Q.commandHeader,children:"Commands"}),s.map((o,a)=>w.jsxs(uu.button,{className:`${Q.commandItem} ${e===a?Q.commandActive:""}`,onClick:()=>n(o),initial:{opacity:0},animate:{opacity:1},transition:{delay:a*.03},children:[w.jsx("span",{className:Q.commandIcon,children:o.icon}),w.jsx("span",{className:Q.commandLabel,children:o.label}),w.jsx("span",{className:Q.commandPrefix,children:o.prefix}),w.jsx("span",{className:Q.commandDesc,children:o.description})]},o.prefix))]})})}function Op({size:t=28}){return w.jsxs("svg",{width:t,height:t,viewBox:"0 0 28 28",fill:"none","aria-hidden":"true",children:[w.jsx("path",{d:"M4 14 C4 8, 10 4, 14 4",stroke:"#FF5200",strokeWidth:"1.2",strokeLinecap:"round"}),w.jsx("path",{d:"M24 14 C24 8, 18 4, 14 4",stroke:"#FF5200",strokeWidth:"1.2",strokeLinecap:"round"}),w.jsx("path",{d:"M4 14 C4 20, 10 24, 14 24",stroke:"#FF5200",strokeWidth:"1.2",strokeLinecap:"round"}),w.jsx("path",{d:"M24 14 C24 20, 18 24, 14 24",stroke:"#FF5200",strokeWidth:"1.2",strokeLinecap:"round"}),w.jsx("circle",{cx:"14",cy:"14",r:"2",fill:"#FF5200",opacity:"0.8"}),w.jsx("path",{d:"M7 9 C9 7, 11 7, 12 9",stroke:"#FF5200",strokeWidth:"0.8",opacity:"0.5"}),w.jsx("path",{d:"M21 9 C19 7, 17 7, 16 9",stroke:"#FF5200",strokeWidth:"0.8",opacity:"0.5"})]})}function J4({onBack:t}){const[e,n]=ie.useState("All"),i=e==="All"?px:px.filter(r=>r.formats.includes(e));return w.jsxs("div",{className:Q.root,children:[w.jsx("header",{className:Q.header,children:w.jsxs("div",{className:Q.headerLeft,children:[w.jsx("button",{className:Q.backBtn,onClick:t,children:"← Back"}),w.jsx("div",{className:Q.headerDivider}),w.jsxs("div",{children:[w.jsx("div",{className:Q.headerTitle,children:"Festivals"}),w.jsx("div",{className:Q.headerSub,children:"Browse the circuit"})]})]})}),w.jsxs("div",{className:Q.exploreBody,children:[w.jsx("div",{className:Q.filterBar,children:F4.map(r=>w.jsx("button",{className:`${Q.filterBtn} ${e===r?Q.filterActive:""}`,onClick:()=>n(r),children:r},r))}),w.jsx("div",{className:Q.exploreGrid,children:i.map((r,s)=>w.jsxs("div",{className:Q.exploreFestCard,children:[w.jsxs("div",{className:Q.exploreFestTop,children:[w.jsx("span",{className:`${Q.exploreTierBadge} ${Q[`tier${r.tier}Badge`]}`,children:r.tier}),w.jsx("span",{className:Q.exploreFestName,children:r.name})]}),w.jsx("span",{className:Q.exploreFestLocation,children:r.location}),w.jsx("div",{className:Q.exploreFestFormats,children:r.formats.map(o=>w.jsx("span",{className:Q.fmtTag,children:o},o))}),w.jsx("p",{className:Q.exploreFestDesc,children:r.desc}),w.jsx("span",{className:Q.exploreFestWindow,children:r.window})]},s))})]})]})}function Q4({file:t,onRemove:e}){const n=t.type.startsWith("image/")&&t.preview,[i,r]=ie.useState(!1);return w.jsxs("div",{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),style:{position:"relative",flexShrink:0,width:88,height:88,borderRadius:12,overflow:"hidden",border:"1px solid rgba(255,82,0,0.2)",background:"#1A0D05",transition:"border-color 0.15s",...i&&{borderColor:"rgba(255,82,0,0.45)"}},children:[n?w.jsx("img",{src:t.preview,alt:t.file.name,style:{width:"100%",height:"100%",objectFit:"cover"}}):w.jsxs("div",{style:{padding:"10px 10px 8px",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[w.jsx(n2,{size:14,color:"rgba(255,255,255,0.4)"}),w.jsx("span",{style:{fontFamily:"'Geist Mono', monospace",fontSize:9,color:"rgba(255,255,255,0.35)",textTransform:"uppercase",letterSpacing:"0.08em"},children:t.file.name.split(".").pop()})]}),w.jsxs("div",{children:[w.jsx("div",{style:{fontFamily:"'Inter', sans-serif",fontSize:10,color:"rgba(255,255,255,0.7)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t.file.name}),w.jsx("div",{style:{fontFamily:"'Geist Mono', monospace",fontSize:9,color:"rgba(255,255,255,0.3)",marginTop:2},children:t.file.size>1024*1024?`${(t.file.size/1024/1024).toFixed(1)} MB`:`${Math.round(t.file.size/1024)} KB`})]})]}),i&&w.jsx("button",{onClick:()=>e(t.id),style:{position:"absolute",top:5,right:5,width:18,height:18,borderRadius:"50%",background:"rgba(0,0,0,0.7)",border:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#fff"},children:w.jsx(f2,{size:10})})]})}function e5({onReady:t}){const[e,n]=ie.useState(""),[i,r]=ie.useState("");ie.useEffect(()=>{},[t]);function s(){if(!e.trim().startsWith("sk-")){r("Key must start with sk-ant-…");return}t(e.trim())}return w.jsxs("div",{style:{width:"100%",maxWidth:400,display:"flex",flexDirection:"column",gap:16},children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:4},children:[w.jsx(Op,{size:28}),w.jsx("span",{style:{fontFamily:"'Inter', sans-serif",fontSize:20,fontWeight:700,color:"#C81400",letterSpacing:"0.06em",textTransform:"uppercase"},children:"Laurel"})]}),w.jsxs("p",{style:{fontFamily:"'Inter', sans-serif",fontSize:13,color:"rgba(0,0,0,0.5)",lineHeight:1.6,margin:0},children:["Enter your Anthropic API key to begin.",w.jsx("br",{}),"Get one at ",w.jsx("strong",{style:{color:"rgba(0,0,0,0.65)"},children:"console.anthropic.com → API Keys"})]}),w.jsx("input",{type:"password",placeholder:"sk-ant-api03-…",value:e,autoFocus:!0,onChange:o=>{n(o.target.value),r("")},onKeyDown:o=>o.key==="Enter"&&s(),style:{fontFamily:"'Geist Mono', monospace",fontSize:13,padding:"12px 16px",borderRadius:12,border:i?"1.5px solid #C81400":"1.5px solid #FF9933",background:"#fff",color:"#364153",outline:"none",transition:"border-color 0.15s"},onFocus:o=>{i||(o.target.style.borderColor="#FF5200")},onBlur:o=>{i||(o.target.style.borderColor="#FF9933")}}),i&&w.jsx("p",{style:{fontFamily:"'Geist Mono', monospace",fontSize:11,color:"#C81400",margin:0},children:i}),w.jsx("button",{onClick:s,style:{fontFamily:"'Geist Mono', monospace",fontSize:13,fontWeight:600,letterSpacing:"0.06em",padding:"12px 0",background:"#FF5200",color:"#fff",border:"none",borderRadius:12,cursor:"pointer",transition:"background 0.15s"},onMouseEnter:o=>o.target.style.background="#C81400",onMouseLeave:o=>o.target.style.background="#FF5200",children:"BEGIN SESSION →"}),w.jsx("p",{style:{fontFamily:"'Geist Mono', monospace",fontSize:10,color:"rgba(0,0,0,0.28)",margin:0,lineHeight:1.6},children:"Your key is sent only to Anthropic's API — never logged or stored by us."})]})}function t5(){var k,$;const t=localStorage.getItem("laurel_api_key"),[e,n]=ie.useState("chat"),[i,r]=ie.useState(t??null),[s,o]=ie.useState(null),[a,l]=ie.useState([]),[c,u]=ie.useState(""),[d,f]=ie.useState(!1),[p,_]=ie.useState(!1),[y,g]=ie.useState(-1),[h,m]=ie.useState([]),[v,S]=ie.useState(!1),[A,T]=ie.useState(!1),R=ie.useRef([]),x=ie.useRef(null),b=ie.useRef(null),P=ie.useRef(null),D=ie.useRef(null);function O(U){const Z=Array.from(U).map(fe=>({id:Math.random().toString(36).substr(2,9),file:fe,type:fe.type||"application/octet-stream",preview:fe.type.startsWith("image/")?URL.createObjectURL(fe):null}));m(fe=>[...fe,...Z])}function q(U){m(Z=>{const fe=Z.find(Ie=>Ie.id===U);return fe!=null&&fe.preview&&URL.revokeObjectURL(fe.preview),Z.filter(Ie=>Ie.id!==U)})}ie.useEffect(()=>{var U;(U=x.current)==null||U.scrollIntoView({behavior:"smooth"})},[a,d]),ie.useEffect(()=>{const U=b.current;U&&(U.style.height="auto",U.style.height=`${U.scrollHeight}px`)},[c]),ie.useEffect(()=>{if(c.startsWith("/")&&!c.includes(" ")){_(!0);const U=Up.findIndex(Z=>Z.prefix.startsWith(c));g(U>=0?U:0)}else _(!1),g(-1)},[c]),ie.useEffect(()=>{function U(Z){var fe;P.current&&!P.current.contains(Z.target)&&!((fe=b.current)!=null&&fe.contains(Z.target))&&_(!1)}return document.addEventListener("mousedown",U),()=>document.removeEventListener("mousedown",U)},[]);function Y(U){var Z;u(U.prefix+" "),_(!1),g(-1),(Z=b.current)==null||Z.focus()}function N(U){if(p){const Z=Up.filter(fe=>fe.prefix.startsWith(c.length>1?c:"/")||fe.label.toLowerCase().includes(c.slice(1).toLowerCase()));U.key==="ArrowDown"?(U.preventDefault(),g(fe=>fe<Z.length-1?fe+1:0)):U.key==="ArrowUp"?(U.preventDefault(),g(fe=>fe>0?fe-1:Z.length-1)):U.key==="Tab"||U.key==="Enter"?(U.preventDefault(),y>=0&&Z[y]&&Y(Z[y])):U.key==="Escape"&&(U.preventDefault(),_(!1));return}U.key==="Enter"&&!U.shiftKey&&(U.preventDefault(),G(c))}async function G(U){var fe,Ie;const Z=U.trim();if(!(!Z||d)){u(""),m([]),l(Re=>[...Re,{role:"user",text:Z}]),R.current=[...R.current,{role:"user",content:Z}],f(!0);try{const Re=await fetch(B4,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":i,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:O4,max_tokens:k4,system:N4,messages:R.current})}),J=await Re.json();if(!Re.ok){l(ae=>{var Le;return[...ae,{role:"agent",text:`⚠️ ${((Le=J==null?void 0:J.error)==null?void 0:Le.message)||`API error ${Re.status}`}`}]}),R.current=R.current.slice(0,-1);return}const me=((Ie=(fe=J.content)==null?void 0:fe[0])==null?void 0:Ie.text)??"Something went wrong.";R.current=[...R.current,{role:"assistant",content:me}],l(ae=>[...ae,{role:"agent",text:me}])}catch(Re){l(J=>[...J,{role:"agent",text:`⚠️ ${Re.message}`}]),R.current=R.current.slice(0,-1)}finally{f(!1)}}}if(e==="explore")return w.jsx(J4,{onBack:()=>n("chat")});if(e==="strategy"&&s)return w.jsx(W4,{strategy:s,onBack:()=>n("chat")});const H=a.length>0?[{id:"current",text:(($=(k=a[0])==null?void 0:k.text)==null?void 0:$.slice(0,38))+"…"}]:[],L=["Documentary short, Sundance strategy","Animated feature — Annecy & beyond","Micro-budget drama Oscar path","First feature narrative, SXSW target"];return w.jsxs("div",{className:Q.root,children:[w.jsxs("header",{className:Q.header,children:[w.jsxs("div",{className:Q.headerLeft,children:[w.jsx("div",{children:w.jsx(Op,{size:26})}),w.jsx("div",{className:Q.headerDivider}),w.jsxs("div",{children:[w.jsx("div",{className:Q.headerTitle,children:"Laurel"}),w.jsx("div",{className:Q.headerSub,children:"Film Festival Strategy Agent"})]})]}),w.jsxs("div",{className:Q.headerRight,children:[w.jsx("button",{className:Q.backBtn,onClick:()=>n("explore"),children:"Explore Festivals"}),w.jsx("div",{className:Q.statusDot}),w.jsx("span",{className:Q.statusLabel,children:"Ready"})]})]}),w.jsxs("div",{className:Q.chatLayout,children:[w.jsxs("aside",{className:Q.chatSidebar,children:[w.jsx("div",{className:Q.sidebarTop,children:w.jsxs("button",{className:Q.newChatBtn,onClick:()=>{l([]),u("")},children:[w.jsx(lv,{size:18}),"New chat"]})}),w.jsxs("div",{className:Q.sidebarConvs,children:[w.jsxs("div",{className:Q.convSectionHead,children:[w.jsx("span",{className:Q.convSectionLabel,children:"Your conversations"}),w.jsx("button",{className:Q.convClearBtn,onClick:()=>l([]),children:"Clear All"})]}),H.map(U=>w.jsxs("div",{className:`${Q.convItem} ${Q.convItemActive}`,children:[w.jsx(os,{size:16,className:Q.convItemIcon,style:{color:"#FF5200",opacity:1}}),w.jsx("span",{className:Q.convItemText,children:U.text})]},U.id)),L.map((U,Z)=>w.jsxs("div",{className:Q.convItem,children:[w.jsx(os,{size:16,className:Q.convItemIcon,style:{color:"#364153"}}),w.jsx("span",{className:Q.convItemText,children:U})]},Z)),w.jsx("p",{className:Q.convDividerLabel,children:"Last 7 Days"}),w.jsxs("div",{className:Q.convItem,children:[w.jsx(os,{size:16,className:Q.convItemIcon,style:{color:"#364153"}}),w.jsx("span",{className:Q.convItemText,children:"Short film, European circuit"})]}),w.jsxs("div",{className:Q.convItem,children:[w.jsx(os,{size:16,className:Q.convItemIcon,style:{color:"#364153"}}),w.jsx("span",{className:Q.convItemText,children:"Feature doc — Hot Docs path"})]})]}),w.jsxs("div",{className:Q.sidebarFooter,children:[w.jsxs("button",{className:Q.sidebarFooterBtn,onClick:()=>{localStorage.removeItem("laurel_api_key"),r(null)},children:[w.jsx(v1,{size:16,style:{color:"#364153",opacity:.6}}),w.jsx("span",{className:Q.sidebarFooterLabel,children:"Settings"})]}),w.jsxs("button",{className:Q.sidebarFooterBtn,children:[w.jsx("div",{style:{width:16,height:16,borderRadius:"50%",background:"#FF5200",flexShrink:0}}),w.jsx("span",{className:Q.sidebarFooterLabel,children:"Your Account"})]})]})]}),w.jsxs("div",{className:Q.chatMain,children:[!i&&w.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:"40px 24px"},children:w.jsx(e5,{onReady:U=>{localStorage.setItem("laurel_api_key",U),r(U)}})}),w.jsxs("div",{className:Q.messages,style:i?{}:{display:"none"},children:[a.length===0&&!d&&w.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flex:1,padding:"40px 24px 24px"},children:[w.jsxs("div",{style:{marginBottom:36,textAlign:"center"},children:[w.jsx(Op,{size:30}),w.jsx("div",{style:{fontFamily:"'Geist Mono', monospace",fontSize:9,letterSpacing:"0.18em",textTransform:"uppercase",color:"rgba(54,65,83,0.28)",marginTop:14,marginBottom:10},children:"Film Festival Strategy"}),w.jsx("h2",{style:{fontFamily:"'Inter', sans-serif",fontSize:24,fontWeight:700,color:"#0f172a",letterSpacing:"-0.02em",margin:0,lineHeight:1.2},children:"Tell me about your film."})]}),w.jsx("div",{style:{width:"100%",maxWidth:440},children:U4.map((U,Z)=>w.jsxs("button",{onClick:()=>{u(U.template),setTimeout(()=>{var fe;return(fe=b.current)==null?void 0:fe.focus()},50)},style:{display:"flex",alignItems:"center",gap:14,padding:"11px 14px",border:"none",background:"transparent",cursor:"pointer",textAlign:"left",borderRadius:10,width:"100%"},onMouseEnter:fe=>fe.currentTarget.style.background="rgba(0,0,0,0.04)",onMouseLeave:fe=>fe.currentTarget.style.background="transparent",children:[w.jsx("span",{style:{fontFamily:"'Geist Mono', monospace",fontSize:9,color:"#FF5200",opacity:.55,width:18,flexShrink:0,textAlign:"right"},children:String(Z+1).padStart(2,"0")}),w.jsxs("div",{style:{flex:1},children:[w.jsx("div",{style:{fontFamily:"'Inter', sans-serif",fontSize:13,fontWeight:600,color:"#1f2937",lineHeight:1.25},children:U.label}),w.jsx("div",{style:{fontFamily:"'Geist Mono', monospace",fontSize:10,color:"rgba(54,65,83,0.36)",marginTop:2},children:U.desc})]}),w.jsx("span",{style:{fontFamily:"'Geist Mono', monospace",fontSize:11,color:"rgba(54,65,83,0.18)",flexShrink:0},children:"→"})]},Z))})]}),a.map((U,Z)=>U.role==="user"?w.jsxs("div",{className:`${Q.msgRow} ${Q.user}`,children:[w.jsx("div",{style:{fontFamily:"'Geist Mono', monospace",fontSize:9,letterSpacing:"0.12em",color:"rgba(54,65,83,0.3)",textTransform:"uppercase",marginBottom:6,paddingRight:4},children:"You"}),w.jsx("div",{style:{fontFamily:"'Inter', sans-serif",fontSize:14,color:"#364153",lineHeight:1.65,maxWidth:"80%",textAlign:"right",whiteSpace:"pre-wrap"},children:U.text})]},Z):w.jsxs("div",{className:`${Q.msgRow} ${Q.agent}`,children:[w.jsx("div",{style:{fontFamily:"'Geist Mono', monospace",fontSize:9,letterSpacing:"0.12em",color:"#FF5200",textTransform:"uppercase",marginBottom:6,paddingLeft:2,opacity:.7},children:"Laurel"}),w.jsx(K4,{text:U.text,onViewStrategy:fe=>{o(fe),n("strategy")}})]},Z)),d&&w.jsx("div",{className:Q.typingRow,children:w.jsx("div",{className:Q.typingBubble,children:w.jsxs("div",{className:"generating-loader-wrapper",children:[w.jsx("div",{className:"generating-loader-text",children:"Analyzing...".split("").map((U,Z)=>w.jsx("span",{className:"generating-loader-letter",style:{animationDelay:`${Z*.07}s`},children:U},Z))}),w.jsx("div",{className:"generating-loader-bar"})]})})}),w.jsx("div",{ref:x})]}),i&&w.jsxs("div",{className:Q.chatInputArea,onDragOver:U=>{U.preventDefault(),S(!0)},onDragLeave:U=>{U.preventDefault(),S(!1)},onDrop:U=>{U.preventDefault(),S(!1),U.dataTransfer.files&&O(U.dataTransfer.files)},children:[p&&w.jsx(Z4,{query:c,active:y,onSelect:Y,onClose:()=>_(!1),paletteRef:P}),w.jsxs("div",{className:Q.chatInputBox,onClick:()=>{var U;return(U=b.current)==null?void 0:U.focus()},children:[h.length>0&&w.jsx("div",{style:{display:"flex",gap:10,padding:"12px 24px 0",overflowX:"auto"},children:h.map(U=>w.jsx(Q4,{file:U,onRemove:q},U.id))}),w.jsx("textarea",{ref:b,className:Q.chatTextarea,value:c,onChange:U=>u(U.target.value),onKeyDown:N,onFocus:()=>T(!0),onBlur:()=>T(!1),placeholder:"⊕  Tell me about your film…",rows:1}),w.jsx("button",{className:Q.chatSendBtn,onClick:()=>G(c),disabled:d||!c.trim(),"aria-label":"Send",children:w.jsx(JP,{size:18,strokeWidth:2.5})})]}),v&&w.jsxs("div",{style:{position:"absolute",inset:"16px 32px 24px",background:"rgba(255,82,0,0.06)",border:"2px dashed #FF5200",borderRadius:22,zIndex:50,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",pointerEvents:"none"},children:[w.jsx(lv,{size:28,color:"#FF5200",style:{marginBottom:8}}),w.jsx("p",{style:{fontFamily:"'Geist Mono', monospace",fontSize:11,color:"#FF5200",letterSpacing:"0.1em"},children:"DROP TO ATTACH"})]}),w.jsx("input",{ref:D,type:"file",multiple:!0,style:{display:"none"},onChange:U=>{U.target.files&&O(U.target.files),U.target.value=""}}),w.jsx("p",{className:Q.chatHint,children:"Enter to send · Shift+Enter for new line"})]})]})]})]})}function n5(){return w.jsx(t5,{})}Td.createRoot(document.getElementById("root")).render(w.jsx(NE.StrictMode,{children:w.jsx(n5,{})}));
