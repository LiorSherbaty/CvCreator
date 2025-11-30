(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=t(l);fetch(l.href,s)}})();function pc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hc={exports:{}},js={},mc={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cl=Symbol.for("react.element"),pp=Symbol.for("react.portal"),hp=Symbol.for("react.fragment"),mp=Symbol.for("react.strict_mode"),gp=Symbol.for("react.profiler"),vp=Symbol.for("react.provider"),yp=Symbol.for("react.context"),xp=Symbol.for("react.forward_ref"),wp=Symbol.for("react.suspense"),bp=Symbol.for("react.memo"),kp=Symbol.for("react.lazy"),Fa=Symbol.iterator;function Sp(e){return e===null||typeof e!="object"?null:(e=Fa&&e[Fa]||e["@@iterator"],typeof e=="function"?e:null)}var gc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vc=Object.assign,yc={};function sr(e,n,t){this.props=e,this.context=n,this.refs=yc,this.updater=t||gc}sr.prototype.isReactComponent={};sr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xc(){}xc.prototype=sr.prototype;function Do(e,n,t){this.props=e,this.context=n,this.refs=yc,this.updater=t||gc}var Ro=Do.prototype=new xc;Ro.constructor=Do;vc(Ro,sr.prototype);Ro.isPureReactComponent=!0;var Ua=Array.isArray,wc=Object.prototype.hasOwnProperty,Po={current:null},bc={key:!0,ref:!0,__self:!0,__source:!0};function kc(e,n,t){var r,l={},s=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(s=""+n.key),n)wc.call(n,r)&&!bc.hasOwnProperty(r)&&(l[r]=n[r]);var o=arguments.length-2;if(o===1)l.children=t;else if(1<o){for(var a=Array(o),c=0;c<o;c++)a[c]=arguments[c+2];l.children=a}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)l[r]===void 0&&(l[r]=o[r]);return{$$typeof:cl,type:e,key:s,ref:i,props:l,_owner:Po.current}}function Ep(e,n){return{$$typeof:cl,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function zo(e){return typeof e=="object"&&e!==null&&e.$$typeof===cl}function Cp(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ha=/\/+/g;function Js(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Cp(""+e.key):n.toString(36)}function Ul(e,n,t,r,l){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case cl:case pp:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Js(i,0):r,Ua(l)?(t="",e!=null&&(t=e.replace(Ha,"$&/")+"/"),Ul(l,n,t,"",function(c){return c})):l!=null&&(zo(l)&&(l=Ep(l,t+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Ha,"$&/")+"/")+e)),n.push(l)),1;if(i=0,r=r===""?".":r+":",Ua(e))for(var o=0;o<e.length;o++){s=e[o];var a=r+Js(s,o);i+=Ul(s,n,t,a,l)}else if(a=Sp(e),typeof a=="function")for(e=a.call(e),o=0;!(s=e.next()).done;)s=s.value,a=r+Js(s,o++),i+=Ul(s,n,t,a,l);else if(s==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function bl(e,n,t){if(e==null)return e;var r=[],l=0;return Ul(e,r,"","",function(s){return n.call(t,s,l++)}),r}function Np(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Hl={transition:null},jp={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Hl,ReactCurrentOwner:Po};function Sc(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:bl,forEach:function(e,n,t){bl(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return bl(e,function(){n++}),n},toArray:function(e){return bl(e,function(n){return n})||[]},only:function(e){if(!zo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=sr;I.Fragment=hp;I.Profiler=gp;I.PureComponent=Do;I.StrictMode=mp;I.Suspense=wp;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jp;I.act=Sc;I.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vc({},e.props),l=e.key,s=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(s=n.ref,i=Po.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(a in n)wc.call(n,a)&&!bc.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&o!==void 0?o[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){o=Array(a);for(var c=0;c<a;c++)o[c]=arguments[c+2];r.children=o}return{$$typeof:cl,type:e.type,key:l,ref:s,props:r,_owner:i}};I.createContext=function(e){return e={$$typeof:yp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vp,_context:e},e.Consumer=e};I.createElement=kc;I.createFactory=function(e){var n=kc.bind(null,e);return n.type=e,n};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:xp,render:e}};I.isValidElement=zo;I.lazy=function(e){return{$$typeof:kp,_payload:{_status:-1,_result:e},_init:Np}};I.memo=function(e,n){return{$$typeof:bp,type:e,compare:n===void 0?null:n}};I.startTransition=function(e){var n=Hl.transition;Hl.transition={};try{e()}finally{Hl.transition=n}};I.unstable_act=Sc;I.useCallback=function(e,n){return Se.current.useCallback(e,n)};I.useContext=function(e){return Se.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};I.useEffect=function(e,n){return Se.current.useEffect(e,n)};I.useId=function(){return Se.current.useId()};I.useImperativeHandle=function(e,n,t){return Se.current.useImperativeHandle(e,n,t)};I.useInsertionEffect=function(e,n){return Se.current.useInsertionEffect(e,n)};I.useLayoutEffect=function(e,n){return Se.current.useLayoutEffect(e,n)};I.useMemo=function(e,n){return Se.current.useMemo(e,n)};I.useReducer=function(e,n,t){return Se.current.useReducer(e,n,t)};I.useRef=function(e){return Se.current.useRef(e)};I.useState=function(e){return Se.current.useState(e)};I.useSyncExternalStore=function(e,n,t){return Se.current.useSyncExternalStore(e,n,t)};I.useTransition=function(){return Se.current.useTransition()};I.version="18.3.1";mc.exports=I;var w=mc.exports;const ve=pc(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp=w,Rp=Symbol.for("react.element"),Pp=Symbol.for("react.fragment"),zp=Object.prototype.hasOwnProperty,Tp=Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_p={key:!0,ref:!0,__self:!0,__source:!0};function Ec(e,n,t){var r,l={},s=null,i=null;t!==void 0&&(s=""+t),n.key!==void 0&&(s=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)zp.call(n,r)&&!_p.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Rp,type:e,key:s,ref:i,props:l,_owner:Tp.current}}js.Fragment=Pp;js.jsx=Ec;js.jsxs=Ec;hc.exports=js;var u=hc.exports,Ri={},Cc={exports:{}},$e={},Nc={exports:{}},jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(D,z){var _=D.length;D.push(z);e:for(;0<_;){var $=_-1>>>1,A=D[$];if(0<l(A,z))D[$]=z,D[_]=A,_=$;else break e}}function t(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var z=D[0],_=D.pop();if(_!==z){D[0]=_;e:for(var $=0,A=D.length,Ne=A>>>1;$<Ne;){var we=2*($+1)-1,vn=D[we],q=we+1,yn=D[q];if(0>l(vn,_))q<A&&0>l(yn,vn)?(D[$]=yn,D[q]=_,$=q):(D[$]=vn,D[we]=_,$=we);else if(q<A&&0>l(yn,_))D[$]=yn,D[q]=_,$=q;else break e}}return z}function l(D,z){var _=D.sortIndex-z.sortIndex;return _!==0?_:D.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,o=i.now();e.unstable_now=function(){return i.now()-o}}var a=[],c=[],d=1,f=null,h=3,v=!1,y=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var z=t(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=D)r(c),z.sortIndex=z.expirationTime,n(a,z);else break;z=t(c)}}function b(D){if(x=!1,g(D),!y)if(t(a)!==null)y=!0,Tn(S);else{var z=t(c);z!==null&&ue(b,z.startTime-D)}}function S(D,z){y=!1,x&&(x=!1,m(E),E=-1),v=!0;var _=h;try{for(g(z),f=t(a);f!==null&&(!(f.expirationTime>z)||D&&!M());){var $=f.callback;if(typeof $=="function"){f.callback=null,h=f.priorityLevel;var A=$(f.expirationTime<=z);z=e.unstable_now(),typeof A=="function"?f.callback=A:f===t(a)&&r(a),g(z)}else r(a);f=t(a)}if(f!==null)var Ne=!0;else{var we=t(c);we!==null&&ue(b,we.startTime-z),Ne=!1}return Ne}finally{f=null,h=_,v=!1}}var j=!1,C=null,E=-1,L=5,P=-1;function M(){return!(e.unstable_now()-P<L)}function oe(){if(C!==null){var D=e.unstable_now();P=D;var z=!0;try{z=C(!0,D)}finally{z?ae():(j=!1,C=null)}}else j=!1}var ae;if(typeof p=="function")ae=function(){p(oe)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,at=_e.port2;_e.port1.onmessage=oe,ae=function(){at.postMessage(null)}}else ae=function(){k(oe,0)};function Tn(D){C=D,j||(j=!0,ae())}function ue(D,z){E=k(function(){D(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Tn(S))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(D){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var _=h;h=z;try{return D()}finally{h=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var _=h;h=D;try{return z()}finally{h=_}},e.unstable_scheduleCallback=function(D,z,_){var $=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?$+_:$):_=$,D){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=_+A,D={id:d++,callback:z,priorityLevel:D,startTime:_,expirationTime:A,sortIndex:-1},_>$?(D.sortIndex=_,n(c,D),t(a)===null&&D===t(c)&&(x?(m(E),E=-1):x=!0,ue(b,_-$))):(D.sortIndex=A,n(a,D),y||v||(y=!0,Tn(S))),D},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(D){var z=h;return function(){var _=h;h=z;try{return D.apply(this,arguments)}finally{h=_}}}})(jc);Nc.exports=jc;var Lp=Nc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip=w,Ue=Lp;function N(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dc=new Set,Hr={};function bt(e,n){Xt(e,n),Xt(e+"Capture",n)}function Xt(e,n){for(Hr[e]=n,e=0;e<n.length;e++)Dc.add(n[e])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pi=Object.prototype.hasOwnProperty,Mp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$a={},Ba={};function Op(e){return Pi.call(Ba,e)?!0:Pi.call($a,e)?!1:Mp.test(e)?Ba[e]=!0:($a[e]=!0,!1)}function Ap(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fp(e,n,t,r){if(n===null||typeof n>"u"||Ap(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ee(e,n,t,r,l,s,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=i}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];pe[n]=new Ee(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var To=/[\-:]([a-z])/g;function _o(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(To,_o);pe[n]=new Ee(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(To,_o);pe[n]=new Ee(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(To,_o);pe[n]=new Ee(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function Lo(e,n,t,r){var l=pe.hasOwnProperty(n)?pe[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Fp(n,t,l,r)&&(t=null),r||l===null?Op(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var zn=Ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kl=Symbol.for("react.element"),Pt=Symbol.for("react.portal"),zt=Symbol.for("react.fragment"),Io=Symbol.for("react.strict_mode"),zi=Symbol.for("react.profiler"),Rc=Symbol.for("react.provider"),Pc=Symbol.for("react.context"),Mo=Symbol.for("react.forward_ref"),Ti=Symbol.for("react.suspense"),_i=Symbol.for("react.suspense_list"),Oo=Symbol.for("react.memo"),Un=Symbol.for("react.lazy"),zc=Symbol.for("react.offscreen"),Wa=Symbol.iterator;function vr(e){return e===null||typeof e!="object"?null:(e=Wa&&e[Wa]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Zs;function Cr(e){if(Zs===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Zs=n&&n[1]||""}return`
`+Zs+e}var qs=!1;function ei(e,n){if(!e||qs)return"";qs=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),s=r.stack.split(`
`),i=l.length-1,o=s.length-1;1<=i&&0<=o&&l[i]!==s[o];)o--;for(;1<=i&&0<=o;i--,o--)if(l[i]!==s[o]){if(i!==1||o!==1)do if(i--,o--,0>o||l[i]!==s[o]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=o);break}}}finally{qs=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Cr(e):""}function Up(e){switch(e.tag){case 5:return Cr(e.type);case 16:return Cr("Lazy");case 13:return Cr("Suspense");case 19:return Cr("SuspenseList");case 0:case 2:case 15:return e=ei(e.type,!1),e;case 11:return e=ei(e.type.render,!1),e;case 1:return e=ei(e.type,!0),e;default:return""}}function Li(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zt:return"Fragment";case Pt:return"Portal";case zi:return"Profiler";case Io:return"StrictMode";case Ti:return"Suspense";case _i:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pc:return(e.displayName||"Context")+".Consumer";case Rc:return(e._context.displayName||"Context")+".Provider";case Mo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Oo:return n=e.displayName||null,n!==null?n:Li(e.type)||"Memo";case Un:n=e._payload,e=e._init;try{return Li(e(n))}catch{}}return null}function Hp(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Li(n);case 8:return n===Io?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $p(e){var n=Tc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,s=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,s.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Sl(e){e._valueTracker||(e._valueTracker=$p(e))}function _c(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Tc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ql(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ii(e,n){var t=n.checked;return G({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Va(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=nt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Lc(e,n){n=n.checked,n!=null&&Lo(e,"checked",n,!1)}function Mi(e,n){Lc(e,n);var t=nt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Oi(e,n.type,t):n.hasOwnProperty("defaultValue")&&Oi(e,n.type,nt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Qa(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Oi(e,n,t){(n!=="number"||ql(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Nr=Array.isArray;function Bt(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+nt(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Ai(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(N(91));return G({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ka(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(N(92));if(Nr(t)){if(1<t.length)throw Error(N(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:nt(t)}}function Ic(e,n){var t=nt(n.value),r=nt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ya(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Mc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Mc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var El,Oc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(El=El||document.createElement("div"),El.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=El.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function $r(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bp=["Webkit","ms","Moz","O"];Object.keys(Rr).forEach(function(e){Bp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Rr[n]=Rr[e]})});function Ac(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Rr.hasOwnProperty(e)&&Rr[e]?(""+n).trim():n+"px"}function Fc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=Ac(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Wp=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ui(e,n){if(n){if(Wp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(N(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(N(61))}if(n.style!=null&&typeof n.style!="object")throw Error(N(62))}}function Hi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $i=null;function Ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bi=null,Wt=null,Vt=null;function Ga(e){if(e=pl(e)){if(typeof Bi!="function")throw Error(N(280));var n=e.stateNode;n&&(n=Ts(n),Bi(e.stateNode,e.type,n))}}function Uc(e){Wt?Vt?Vt.push(e):Vt=[e]:Wt=e}function Hc(){if(Wt){var e=Wt,n=Vt;if(Vt=Wt=null,Ga(e),n)for(e=0;e<n.length;e++)Ga(n[e])}}function $c(e,n){return e(n)}function Bc(){}var ni=!1;function Wc(e,n,t){if(ni)return e(n,t);ni=!0;try{return $c(e,n,t)}finally{ni=!1,(Wt!==null||Vt!==null)&&(Bc(),Hc())}}function Br(e,n){var t=e.stateNode;if(t===null)return null;var r=Ts(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(N(231,n,typeof t));return t}var Wi=!1;if(jn)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){Wi=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{Wi=!1}function Vp(e,n,t,r,l,s,i,o,a){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(d){this.onError(d)}}var Pr=!1,es=null,ns=!1,Vi=null,Qp={onError:function(e){Pr=!0,es=e}};function Kp(e,n,t,r,l,s,i,o,a){Pr=!1,es=null,Vp.apply(Qp,arguments)}function Yp(e,n,t,r,l,s,i,o,a){if(Kp.apply(this,arguments),Pr){if(Pr){var c=es;Pr=!1,es=null}else throw Error(N(198));ns||(ns=!0,Vi=c)}}function kt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Vc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Xa(e){if(kt(e)!==e)throw Error(N(188))}function Gp(e){var n=e.alternate;if(!n){if(n=kt(e),n===null)throw Error(N(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var s=l.alternate;if(s===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===t)return Xa(l),e;if(s===r)return Xa(l),n;s=s.sibling}throw Error(N(188))}if(t.return!==r.return)t=l,r=s;else{for(var i=!1,o=l.child;o;){if(o===t){i=!0,t=l,r=s;break}if(o===r){i=!0,r=l,t=s;break}o=o.sibling}if(!i){for(o=s.child;o;){if(o===t){i=!0,t=s,r=l;break}if(o===r){i=!0,r=s,t=l;break}o=o.sibling}if(!i)throw Error(N(189))}}if(t.alternate!==r)throw Error(N(190))}if(t.tag!==3)throw Error(N(188));return t.stateNode.current===t?e:n}function Qc(e){return e=Gp(e),e!==null?Kc(e):null}function Kc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Kc(e);if(n!==null)return n;e=e.sibling}return null}var Yc=Ue.unstable_scheduleCallback,Ja=Ue.unstable_cancelCallback,Xp=Ue.unstable_shouldYield,Jp=Ue.unstable_requestPaint,J=Ue.unstable_now,Zp=Ue.unstable_getCurrentPriorityLevel,Fo=Ue.unstable_ImmediatePriority,Gc=Ue.unstable_UserBlockingPriority,ts=Ue.unstable_NormalPriority,qp=Ue.unstable_LowPriority,Xc=Ue.unstable_IdlePriority,Ds=null,hn=null;function eh(e){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(Ds,e,void 0,(e.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:rh,nh=Math.log,th=Math.LN2;function rh(e){return e>>>=0,e===0?32:31-(nh(e)/th|0)|0}var Cl=64,Nl=4194304;function jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function rs(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,s=e.pingedLanes,i=t&268435455;if(i!==0){var o=i&~l;o!==0?r=jr(o):(s&=i,s!==0&&(r=jr(s)))}else i=t&~l,i!==0?r=jr(i):s!==0&&(r=jr(s));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,s=n&-n,l>=s||l===16&&(s&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-rn(n),l=1<<t,r|=e[t],n&=~l;return r}function lh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sh(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-rn(s),o=1<<i,a=l[i];a===-1?(!(o&t)||o&r)&&(l[i]=lh(o,n)):a<=n&&(e.expiredLanes|=o),s&=~o}}function Qi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jc(){var e=Cl;return Cl<<=1,!(Cl&4194240)&&(Cl=64),e}function ti(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function dl(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-rn(n),e[n]=t}function ih(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-rn(t),s=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~s}}function Uo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-rn(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var U=0;function Zc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qc,Ho,ed,nd,td,Ki=!1,jl=[],Kn=null,Yn=null,Gn=null,Wr=new Map,Vr=new Map,Bn=[],oh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Za(e,n){switch(e){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":Wr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(n.pointerId)}}function xr(e,n,t,r,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[l]},n!==null&&(n=pl(n),n!==null&&Ho(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function ah(e,n,t,r,l){switch(n){case"focusin":return Kn=xr(Kn,e,n,t,r,l),!0;case"dragenter":return Yn=xr(Yn,e,n,t,r,l),!0;case"mouseover":return Gn=xr(Gn,e,n,t,r,l),!0;case"pointerover":var s=l.pointerId;return Wr.set(s,xr(Wr.get(s)||null,e,n,t,r,l)),!0;case"gotpointercapture":return s=l.pointerId,Vr.set(s,xr(Vr.get(s)||null,e,n,t,r,l)),!0}return!1}function rd(e){var n=dt(e.target);if(n!==null){var t=kt(n);if(t!==null){if(n=t.tag,n===13){if(n=Vc(t),n!==null){e.blockedOn=n,td(e.priority,function(){ed(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $l(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Yi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);$i=r,t.target.dispatchEvent(r),$i=null}else return n=pl(t),n!==null&&Ho(n),e.blockedOn=t,!1;n.shift()}return!0}function qa(e,n,t){$l(e)&&t.delete(n)}function uh(){Ki=!1,Kn!==null&&$l(Kn)&&(Kn=null),Yn!==null&&$l(Yn)&&(Yn=null),Gn!==null&&$l(Gn)&&(Gn=null),Wr.forEach(qa),Vr.forEach(qa)}function wr(e,n){e.blockedOn===n&&(e.blockedOn=null,Ki||(Ki=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,uh)))}function Qr(e){function n(l){return wr(l,e)}if(0<jl.length){wr(jl[0],e);for(var t=1;t<jl.length;t++){var r=jl[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Kn!==null&&wr(Kn,e),Yn!==null&&wr(Yn,e),Gn!==null&&wr(Gn,e),Wr.forEach(n),Vr.forEach(n),t=0;t<Bn.length;t++)r=Bn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bn.length&&(t=Bn[0],t.blockedOn===null);)rd(t),t.blockedOn===null&&Bn.shift()}var Qt=zn.ReactCurrentBatchConfig,ls=!0;function ch(e,n,t,r){var l=U,s=Qt.transition;Qt.transition=null;try{U=1,$o(e,n,t,r)}finally{U=l,Qt.transition=s}}function dh(e,n,t,r){var l=U,s=Qt.transition;Qt.transition=null;try{U=4,$o(e,n,t,r)}finally{U=l,Qt.transition=s}}function $o(e,n,t,r){if(ls){var l=Yi(e,n,t,r);if(l===null)fi(e,n,r,ss,t),Za(e,r);else if(ah(l,e,n,t,r))r.stopPropagation();else if(Za(e,r),n&4&&-1<oh.indexOf(e)){for(;l!==null;){var s=pl(l);if(s!==null&&qc(s),s=Yi(e,n,t,r),s===null&&fi(e,n,r,ss,t),s===l)break;l=s}l!==null&&r.stopPropagation()}else fi(e,n,r,null,t)}}var ss=null;function Yi(e,n,t,r){if(ss=null,e=Ao(r),e=dt(e),e!==null)if(n=kt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Vc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ss=e,null}function ld(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zp()){case Fo:return 1;case Gc:return 4;case ts:case qp:return 16;case Xc:return 536870912;default:return 16}default:return 16}}var Vn=null,Bo=null,Bl=null;function sd(){if(Bl)return Bl;var e,n=Bo,t=n.length,r,l="value"in Vn?Vn.value:Vn.textContent,s=l.length;for(e=0;e<t&&n[e]===l[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===l[s-r];r++);return Bl=l.slice(e,1<r?1-r:void 0)}function Wl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Dl(){return!0}function eu(){return!1}function Be(e){function n(t,r,l,s,i){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Dl:eu,this.isPropagationStopped=eu,this}return G(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),n}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=Be(ir),fl=G({},ir,{view:0,detail:0}),fh=Be(fl),ri,li,br,Rs=G({},fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(ri=e.screenX-br.screenX,li=e.screenY-br.screenY):li=ri=0,br=e),ri)},movementY:function(e){return"movementY"in e?e.movementY:li}}),nu=Be(Rs),ph=G({},Rs,{dataTransfer:0}),hh=Be(ph),mh=G({},fl,{relatedTarget:0}),si=Be(mh),gh=G({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),vh=Be(gh),yh=G({},ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xh=Be(yh),wh=G({},ir,{data:0}),tu=Be(wh),bh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Eh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Sh[e])?!!n[e]:!1}function Vo(){return Eh}var Ch=G({},fl,{key:function(e){if(e.key){var n=bh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vo,charCode:function(e){return e.type==="keypress"?Wl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nh=Be(Ch),jh=G({},Rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ru=Be(jh),Dh=G({},fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vo}),Rh=Be(Dh),Ph=G({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),zh=Be(Ph),Th=G({},Rs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_h=Be(Th),Lh=[9,13,27,32],Qo=jn&&"CompositionEvent"in window,zr=null;jn&&"documentMode"in document&&(zr=document.documentMode);var Ih=jn&&"TextEvent"in window&&!zr,id=jn&&(!Qo||zr&&8<zr&&11>=zr),lu=" ",su=!1;function od(e,n){switch(e){case"keyup":return Lh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ad(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tt=!1;function Mh(e,n){switch(e){case"compositionend":return ad(n);case"keypress":return n.which!==32?null:(su=!0,lu);case"textInput":return e=n.data,e===lu&&su?null:e;default:return null}}function Oh(e,n){if(Tt)return e==="compositionend"||!Qo&&od(e,n)?(e=sd(),Bl=Bo=Vn=null,Tt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return id&&n.locale!=="ko"?null:n.data;default:return null}}var Ah={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ah[e.type]:n==="textarea"}function ud(e,n,t,r){Uc(r),n=is(n,"onChange"),0<n.length&&(t=new Wo("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Tr=null,Kr=null;function Fh(e){wd(e,0)}function Ps(e){var n=It(e);if(_c(n))return e}function Uh(e,n){if(e==="change")return n}var cd=!1;if(jn){var ii;if(jn){var oi="oninput"in document;if(!oi){var ou=document.createElement("div");ou.setAttribute("oninput","return;"),oi=typeof ou.oninput=="function"}ii=oi}else ii=!1;cd=ii&&(!document.documentMode||9<document.documentMode)}function au(){Tr&&(Tr.detachEvent("onpropertychange",dd),Kr=Tr=null)}function dd(e){if(e.propertyName==="value"&&Ps(Kr)){var n=[];ud(n,Kr,e,Ao(e)),Wc(Fh,n)}}function Hh(e,n,t){e==="focusin"?(au(),Tr=n,Kr=t,Tr.attachEvent("onpropertychange",dd)):e==="focusout"&&au()}function $h(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ps(Kr)}function Bh(e,n){if(e==="click")return Ps(n)}function Wh(e,n){if(e==="input"||e==="change")return Ps(n)}function Vh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var sn=typeof Object.is=="function"?Object.is:Vh;function Yr(e,n){if(sn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Pi.call(n,l)||!sn(e[l],n[l]))return!1}return!0}function uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cu(e,n){var t=uu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=uu(t)}}function fd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?fd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function pd(){for(var e=window,n=ql();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ql(e.document)}return n}function Ko(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Qh(e){var n=pd(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&fd(t.ownerDocument.documentElement,t)){if(r!==null&&Ko(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,s=Math.min(r.start,l);r=r.end===void 0?s:Math.min(r.end,l),!e.extend&&s>r&&(l=r,r=s,s=l),l=cu(t,s);var i=cu(t,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),s>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kh=jn&&"documentMode"in document&&11>=document.documentMode,_t=null,Gi=null,_r=null,Xi=!1;function du(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Xi||_t==null||_t!==ql(r)||(r=_t,"selectionStart"in r&&Ko(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_r&&Yr(_r,r)||(_r=r,r=is(Gi,"onSelect"),0<r.length&&(n=new Wo("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=_t)))}function Rl(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Lt={animationend:Rl("Animation","AnimationEnd"),animationiteration:Rl("Animation","AnimationIteration"),animationstart:Rl("Animation","AnimationStart"),transitionend:Rl("Transition","TransitionEnd")},ai={},hd={};jn&&(hd=document.createElement("div").style,"AnimationEvent"in window||(delete Lt.animationend.animation,delete Lt.animationiteration.animation,delete Lt.animationstart.animation),"TransitionEvent"in window||delete Lt.transitionend.transition);function zs(e){if(ai[e])return ai[e];if(!Lt[e])return e;var n=Lt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in hd)return ai[e]=n[t];return e}var md=zs("animationend"),gd=zs("animationiteration"),vd=zs("animationstart"),yd=zs("transitionend"),xd=new Map,fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rt(e,n){xd.set(e,n),bt(n,[e])}for(var ui=0;ui<fu.length;ui++){var ci=fu[ui],Yh=ci.toLowerCase(),Gh=ci[0].toUpperCase()+ci.slice(1);rt(Yh,"on"+Gh)}rt(md,"onAnimationEnd");rt(gd,"onAnimationIteration");rt(vd,"onAnimationStart");rt("dblclick","onDoubleClick");rt("focusin","onFocus");rt("focusout","onBlur");rt(yd,"onTransitionEnd");Xt("onMouseEnter",["mouseout","mouseover"]);Xt("onMouseLeave",["mouseout","mouseover"]);Xt("onPointerEnter",["pointerout","pointerover"]);Xt("onPointerLeave",["pointerout","pointerover"]);bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bt("onBeforeInput",["compositionend","keypress","textInput","paste"]);bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function pu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Yp(r,n,void 0,e),e.currentTarget=null}function wd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var s=void 0;if(n)for(var i=r.length-1;0<=i;i--){var o=r[i],a=o.instance,c=o.currentTarget;if(o=o.listener,a!==s&&l.isPropagationStopped())break e;pu(l,o,c),s=a}else for(i=0;i<r.length;i++){if(o=r[i],a=o.instance,c=o.currentTarget,o=o.listener,a!==s&&l.isPropagationStopped())break e;pu(l,o,c),s=a}}}if(ns)throw e=Vi,ns=!1,Vi=null,e}function W(e,n){var t=n[no];t===void 0&&(t=n[no]=new Set);var r=e+"__bubble";t.has(r)||(bd(n,e,2,!1),t.add(r))}function di(e,n,t){var r=0;n&&(r|=4),bd(t,e,r,n)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[Pl]){e[Pl]=!0,Dc.forEach(function(t){t!=="selectionchange"&&(Xh.has(t)||di(t,!1,e),di(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Pl]||(n[Pl]=!0,di("selectionchange",!1,n))}}function bd(e,n,t,r){switch(ld(n)){case 1:var l=ch;break;case 4:l=dh;break;default:l=$o}t=l.bind(null,n,t,e),l=void 0,!Wi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function fi(e,n,t,r,l){var s=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var o=r.stateNode.containerInfo;if(o===l||o.nodeType===8&&o.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;o!==null;){if(i=dt(o),i===null)return;if(a=i.tag,a===5||a===6){r=s=i;continue e}o=o.parentNode}}r=r.return}Wc(function(){var c=s,d=Ao(t),f=[];e:{var h=xd.get(e);if(h!==void 0){var v=Wo,y=e;switch(e){case"keypress":if(Wl(t)===0)break e;case"keydown":case"keyup":v=Nh;break;case"focusin":y="focus",v=si;break;case"focusout":y="blur",v=si;break;case"beforeblur":case"afterblur":v=si;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=hh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Rh;break;case md:case gd:case vd:v=vh;break;case yd:v=zh;break;case"scroll":v=fh;break;case"wheel":v=_h;break;case"copy":case"cut":case"paste":v=xh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ru}var x=(n&4)!==0,k=!x&&e==="scroll",m=x?h!==null?h+"Capture":null:h;x=[];for(var p=c,g;p!==null;){g=p;var b=g.stateNode;if(g.tag===5&&b!==null&&(g=b,m!==null&&(b=Br(p,m),b!=null&&x.push(Xr(p,b,g)))),k)break;p=p.return}0<x.length&&(h=new v(h,y,null,t,d),f.push({event:h,listeners:x}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&t!==$i&&(y=t.relatedTarget||t.fromElement)&&(dt(y)||y[Dn]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(y=t.relatedTarget||t.toElement,v=c,y=y?dt(y):null,y!==null&&(k=kt(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(x=nu,b="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=ru,b="onPointerLeave",m="onPointerEnter",p="pointer"),k=v==null?h:It(v),g=y==null?h:It(y),h=new x(b,p+"leave",v,t,d),h.target=k,h.relatedTarget=g,b=null,dt(d)===c&&(x=new x(m,p+"enter",y,t,d),x.target=g,x.relatedTarget=k,b=x),k=b,v&&y)n:{for(x=v,m=y,p=0,g=x;g;g=Rt(g))p++;for(g=0,b=m;b;b=Rt(b))g++;for(;0<p-g;)x=Rt(x),p--;for(;0<g-p;)m=Rt(m),g--;for(;p--;){if(x===m||m!==null&&x===m.alternate)break n;x=Rt(x),m=Rt(m)}x=null}else x=null;v!==null&&hu(f,h,v,x,!1),y!==null&&k!==null&&hu(f,k,y,x,!0)}}e:{if(h=c?It(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var S=Uh;else if(iu(h))if(cd)S=Wh;else{S=$h;var j=Hh}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Bh);if(S&&(S=S(e,c))){ud(f,S,t,d);break e}j&&j(e,h,c),e==="focusout"&&(j=h._wrapperState)&&j.controlled&&h.type==="number"&&Oi(h,"number",h.value)}switch(j=c?It(c):window,e){case"focusin":(iu(j)||j.contentEditable==="true")&&(_t=j,Gi=c,_r=null);break;case"focusout":_r=Gi=_t=null;break;case"mousedown":Xi=!0;break;case"contextmenu":case"mouseup":case"dragend":Xi=!1,du(f,t,d);break;case"selectionchange":if(Kh)break;case"keydown":case"keyup":du(f,t,d)}var C;if(Qo)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Tt?od(e,t)&&(E="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(id&&t.locale!=="ko"&&(Tt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Tt&&(C=sd()):(Vn=d,Bo="value"in Vn?Vn.value:Vn.textContent,Tt=!0)),j=is(c,E),0<j.length&&(E=new tu(E,e,null,t,d),f.push({event:E,listeners:j}),C?E.data=C:(C=ad(t),C!==null&&(E.data=C)))),(C=Ih?Mh(e,t):Oh(e,t))&&(c=is(c,"onBeforeInput"),0<c.length&&(d=new tu("onBeforeInput","beforeinput",null,t,d),f.push({event:d,listeners:c}),d.data=C))}wd(f,n)})}function Xr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function is(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,s=l.stateNode;l.tag===5&&s!==null&&(l=s,s=Br(e,t),s!=null&&r.unshift(Xr(e,s,l)),s=Br(e,n),s!=null&&r.push(Xr(e,s,l))),e=e.return}return r}function Rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hu(e,n,t,r,l){for(var s=n._reactName,i=[];t!==null&&t!==r;){var o=t,a=o.alternate,c=o.stateNode;if(a!==null&&a===r)break;o.tag===5&&c!==null&&(o=c,l?(a=Br(t,s),a!=null&&i.unshift(Xr(t,a,o))):l||(a=Br(t,s),a!=null&&i.push(Xr(t,a,o)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Jh=/\r\n?/g,Zh=/\u0000|\uFFFD/g;function mu(e){return(typeof e=="string"?e:""+e).replace(Jh,`
`).replace(Zh,"")}function zl(e,n,t){if(n=mu(n),mu(e)!==n&&t)throw Error(N(425))}function os(){}var Ji=null,Zi=null;function qi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var eo=typeof setTimeout=="function"?setTimeout:void 0,qh=typeof clearTimeout=="function"?clearTimeout:void 0,gu=typeof Promise=="function"?Promise:void 0,em=typeof queueMicrotask=="function"?queueMicrotask:typeof gu<"u"?function(e){return gu.resolve(null).then(e).catch(nm)}:eo;function nm(e){setTimeout(function(){throw e})}function pi(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Qr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Qr(n)}function Xn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function vu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var or=Math.random().toString(36).slice(2),pn="__reactFiber$"+or,Jr="__reactProps$"+or,Dn="__reactContainer$"+or,no="__reactEvents$"+or,tm="__reactListeners$"+or,rm="__reactHandles$"+or;function dt(e){var n=e[pn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Dn]||t[pn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=vu(e);e!==null;){if(t=e[pn])return t;e=vu(e)}return n}e=t,t=e.parentNode}return null}function pl(e){return e=e[pn]||e[Dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function It(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Ts(e){return e[Jr]||null}var to=[],Mt=-1;function lt(e){return{current:e}}function V(e){0>Mt||(e.current=to[Mt],to[Mt]=null,Mt--)}function B(e,n){Mt++,to[Mt]=e.current,e.current=n}var tt={},xe=lt(tt),Re=lt(!1),gt=tt;function Jt(e,n){var t=e.type.contextTypes;if(!t)return tt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},s;for(s in t)l[s]=n[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function Pe(e){return e=e.childContextTypes,e!=null}function as(){V(Re),V(xe)}function yu(e,n,t){if(xe.current!==tt)throw Error(N(168));B(xe,n),B(Re,t)}function kd(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(N(108,Hp(e)||"Unknown",l));return G({},t,r)}function us(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tt,gt=xe.current,B(xe,e),B(Re,Re.current),!0}function xu(e,n,t){var r=e.stateNode;if(!r)throw Error(N(169));t?(e=kd(e,n,gt),r.__reactInternalMemoizedMergedChildContext=e,V(Re),V(xe),B(xe,e)):V(Re),B(Re,t)}var Sn=null,_s=!1,hi=!1;function Sd(e){Sn===null?Sn=[e]:Sn.push(e)}function lm(e){_s=!0,Sd(e)}function st(){if(!hi&&Sn!==null){hi=!0;var e=0,n=U;try{var t=Sn;for(U=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Sn=null,_s=!1}catch(l){throw Sn!==null&&(Sn=Sn.slice(e+1)),Yc(Fo,st),l}finally{U=n,hi=!1}}return null}var Ot=[],At=0,cs=null,ds=0,Qe=[],Ke=0,vt=null,En=1,Cn="";function ut(e,n){Ot[At++]=ds,Ot[At++]=cs,cs=e,ds=n}function Ed(e,n,t){Qe[Ke++]=En,Qe[Ke++]=Cn,Qe[Ke++]=vt,vt=e;var r=En;e=Cn;var l=32-rn(r)-1;r&=~(1<<l),t+=1;var s=32-rn(n)+l;if(30<s){var i=l-l%5;s=(r&(1<<i)-1).toString(32),r>>=i,l-=i,En=1<<32-rn(n)+l|t<<l|r,Cn=s+e}else En=1<<s|t<<l|r,Cn=e}function Yo(e){e.return!==null&&(ut(e,1),Ed(e,1,0))}function Go(e){for(;e===cs;)cs=Ot[--At],Ot[At]=null,ds=Ot[--At],Ot[At]=null;for(;e===vt;)vt=Qe[--Ke],Qe[Ke]=null,Cn=Qe[--Ke],Qe[Ke]=null,En=Qe[--Ke],Qe[Ke]=null}var Fe=null,Ae=null,Q=!1,tn=null;function Cd(e,n){var t=Ye(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function wu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Fe=e,Ae=Xn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Fe=e,Ae=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=vt!==null?{id:En,overflow:Cn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ye(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Fe=e,Ae=null,!0):!1;default:return!1}}function ro(e){return(e.mode&1)!==0&&(e.flags&128)===0}function lo(e){if(Q){var n=Ae;if(n){var t=n;if(!wu(e,n)){if(ro(e))throw Error(N(418));n=Xn(t.nextSibling);var r=Fe;n&&wu(e,n)?Cd(r,t):(e.flags=e.flags&-4097|2,Q=!1,Fe=e)}}else{if(ro(e))throw Error(N(418));e.flags=e.flags&-4097|2,Q=!1,Fe=e}}}function bu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function Tl(e){if(e!==Fe)return!1;if(!Q)return bu(e),Q=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!qi(e.type,e.memoizedProps)),n&&(n=Ae)){if(ro(e))throw Nd(),Error(N(418));for(;n;)Cd(e,n),n=Xn(n.nextSibling)}if(bu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ae=Xn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ae=null}}else Ae=Fe?Xn(e.stateNode.nextSibling):null;return!0}function Nd(){for(var e=Ae;e;)e=Xn(e.nextSibling)}function Zt(){Ae=Fe=null,Q=!1}function Xo(e){tn===null?tn=[e]:tn.push(e)}var sm=zn.ReactCurrentBatchConfig;function kr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(N(309));var r=t.stateNode}if(!r)throw Error(N(147,e));var l=r,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(i){var o=l.refs;i===null?delete o[s]:o[s]=i},n._stringRef=s,n)}if(typeof e!="string")throw Error(N(284));if(!t._owner)throw Error(N(290,e))}return e}function _l(e,n){throw e=Object.prototype.toString.call(n),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ku(e){var n=e._init;return n(e._payload)}function jd(e){function n(m,p){if(e){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function t(m,p){if(!e)return null;for(;p!==null;)n(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function l(m,p){return m=et(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function o(m,p,g,b){return p===null||p.tag!==6?(p=bi(g,m.mode,b),p.return=m,p):(p=l(p,g),p.return=m,p)}function a(m,p,g,b){var S=g.type;return S===zt?d(m,p,g.props.children,b,g.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Un&&ku(S)===p.type)?(b=l(p,g.props),b.ref=kr(m,p,g),b.return=m,b):(b=Jl(g.type,g.key,g.props,null,m.mode,b),b.ref=kr(m,p,g),b.return=m,b)}function c(m,p,g,b){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=ki(g,m.mode,b),p.return=m,p):(p=l(p,g.children||[]),p.return=m,p)}function d(m,p,g,b,S){return p===null||p.tag!==7?(p=mt(g,m.mode,b,S),p.return=m,p):(p=l(p,g),p.return=m,p)}function f(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=bi(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case kl:return g=Jl(p.type,p.key,p.props,null,m.mode,g),g.ref=kr(m,null,p),g.return=m,g;case Pt:return p=ki(p,m.mode,g),p.return=m,p;case Un:var b=p._init;return f(m,b(p._payload),g)}if(Nr(p)||vr(p))return p=mt(p,m.mode,g,null),p.return=m,p;_l(m,p)}return null}function h(m,p,g,b){var S=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:o(m,p,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case kl:return g.key===S?a(m,p,g,b):null;case Pt:return g.key===S?c(m,p,g,b):null;case Un:return S=g._init,h(m,p,S(g._payload),b)}if(Nr(g)||vr(g))return S!==null?null:d(m,p,g,b,null);_l(m,g)}return null}function v(m,p,g,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return m=m.get(g)||null,o(p,m,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case kl:return m=m.get(b.key===null?g:b.key)||null,a(p,m,b,S);case Pt:return m=m.get(b.key===null?g:b.key)||null,c(p,m,b,S);case Un:var j=b._init;return v(m,p,g,j(b._payload),S)}if(Nr(b)||vr(b))return m=m.get(g)||null,d(p,m,b,S,null);_l(p,b)}return null}function y(m,p,g,b){for(var S=null,j=null,C=p,E=p=0,L=null;C!==null&&E<g.length;E++){C.index>E?(L=C,C=null):L=C.sibling;var P=h(m,C,g[E],b);if(P===null){C===null&&(C=L);break}e&&C&&P.alternate===null&&n(m,C),p=s(P,p,E),j===null?S=P:j.sibling=P,j=P,C=L}if(E===g.length)return t(m,C),Q&&ut(m,E),S;if(C===null){for(;E<g.length;E++)C=f(m,g[E],b),C!==null&&(p=s(C,p,E),j===null?S=C:j.sibling=C,j=C);return Q&&ut(m,E),S}for(C=r(m,C);E<g.length;E++)L=v(C,m,E,g[E],b),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?E:L.key),p=s(L,p,E),j===null?S=L:j.sibling=L,j=L);return e&&C.forEach(function(M){return n(m,M)}),Q&&ut(m,E),S}function x(m,p,g,b){var S=vr(g);if(typeof S!="function")throw Error(N(150));if(g=S.call(g),g==null)throw Error(N(151));for(var j=S=null,C=p,E=p=0,L=null,P=g.next();C!==null&&!P.done;E++,P=g.next()){C.index>E?(L=C,C=null):L=C.sibling;var M=h(m,C,P.value,b);if(M===null){C===null&&(C=L);break}e&&C&&M.alternate===null&&n(m,C),p=s(M,p,E),j===null?S=M:j.sibling=M,j=M,C=L}if(P.done)return t(m,C),Q&&ut(m,E),S;if(C===null){for(;!P.done;E++,P=g.next())P=f(m,P.value,b),P!==null&&(p=s(P,p,E),j===null?S=P:j.sibling=P,j=P);return Q&&ut(m,E),S}for(C=r(m,C);!P.done;E++,P=g.next())P=v(C,m,E,P.value,b),P!==null&&(e&&P.alternate!==null&&C.delete(P.key===null?E:P.key),p=s(P,p,E),j===null?S=P:j.sibling=P,j=P);return e&&C.forEach(function(oe){return n(m,oe)}),Q&&ut(m,E),S}function k(m,p,g,b){if(typeof g=="object"&&g!==null&&g.type===zt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case kl:e:{for(var S=g.key,j=p;j!==null;){if(j.key===S){if(S=g.type,S===zt){if(j.tag===7){t(m,j.sibling),p=l(j,g.props.children),p.return=m,m=p;break e}}else if(j.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Un&&ku(S)===j.type){t(m,j.sibling),p=l(j,g.props),p.ref=kr(m,j,g),p.return=m,m=p;break e}t(m,j);break}else n(m,j);j=j.sibling}g.type===zt?(p=mt(g.props.children,m.mode,b,g.key),p.return=m,m=p):(b=Jl(g.type,g.key,g.props,null,m.mode,b),b.ref=kr(m,p,g),b.return=m,m=b)}return i(m);case Pt:e:{for(j=g.key;p!==null;){if(p.key===j)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){t(m,p.sibling),p=l(p,g.children||[]),p.return=m,m=p;break e}else{t(m,p);break}else n(m,p);p=p.sibling}p=ki(g,m.mode,b),p.return=m,m=p}return i(m);case Un:return j=g._init,k(m,p,j(g._payload),b)}if(Nr(g))return y(m,p,g,b);if(vr(g))return x(m,p,g,b);_l(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(t(m,p.sibling),p=l(p,g),p.return=m,m=p):(t(m,p),p=bi(g,m.mode,b),p.return=m,m=p),i(m)):t(m,p)}return k}var qt=jd(!0),Dd=jd(!1),fs=lt(null),ps=null,Ft=null,Jo=null;function Zo(){Jo=Ft=ps=null}function qo(e){var n=fs.current;V(fs),e._currentValue=n}function so(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Kt(e,n){ps=e,Jo=Ft=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(De=!0),e.firstContext=null)}function Xe(e){var n=e._currentValue;if(Jo!==e)if(e={context:e,memoizedValue:n,next:null},Ft===null){if(ps===null)throw Error(N(308));Ft=e,ps.dependencies={lanes:0,firstContext:e}}else Ft=Ft.next=e;return n}var ft=null;function ea(e){ft===null?ft=[e]:ft.push(e)}function Rd(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,ea(n)):(t.next=l.next,l.next=t),n.interleaved=t,Rn(e,r)}function Rn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Hn=!1;function na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Jn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Rn(e,t)}return l=r.interleaved,l===null?(n.next=n,ea(r)):(n.next=l.next,l.next=n),r.interleaved=n,Rn(e,t)}function Vl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Uo(e,t)}}function Su(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?l=s=i:s=s.next=i,t=t.next}while(t!==null);s===null?l=s=n:s=s.next=n}else l=s=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function hs(e,n,t,r){var l=e.updateQueue;Hn=!1;var s=l.firstBaseUpdate,i=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var a=o,c=a.next;a.next=null,i===null?s=c:i.next=c,i=a;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==i&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=a))}if(s!==null){var f=l.baseState;i=0,d=c=a=null,o=s;do{var h=o.lane,v=o.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=e,x=o;switch(h=n,v=t,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(v,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,h=typeof y=="function"?y.call(v,f,h):y,h==null)break e;f=G({},f,h);break e;case 2:Hn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[o]:h.push(o))}else v={eventTime:v,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=v,a=f):d=d.next=v,i|=h;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;h=o,o=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(d===null&&(a=f),l.baseState=a,l.firstBaseUpdate=c,l.lastBaseUpdate=d,n=l.shared.interleaved,n!==null){l=n;do i|=l.lane,l=l.next;while(l!==n)}else s===null&&(l.shared.lanes=0);xt|=i,e.lanes=i,e.memoizedState=f}}function Eu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(N(191,l));l.call(r)}}}var hl={},mn=lt(hl),Zr=lt(hl),qr=lt(hl);function pt(e){if(e===hl)throw Error(N(174));return e}function ta(e,n){switch(B(qr,n),B(Zr,e),B(mn,hl),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Fi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Fi(n,e)}V(mn),B(mn,n)}function er(){V(mn),V(Zr),V(qr)}function zd(e){pt(qr.current);var n=pt(mn.current),t=Fi(n,e.type);n!==t&&(B(Zr,e),B(mn,t))}function ra(e){Zr.current===e&&(V(mn),V(Zr))}var K=lt(0);function ms(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var mi=[];function la(){for(var e=0;e<mi.length;e++)mi[e]._workInProgressVersionPrimary=null;mi.length=0}var Ql=zn.ReactCurrentDispatcher,gi=zn.ReactCurrentBatchConfig,yt=0,Y=null,ne=null,le=null,gs=!1,Lr=!1,el=0,im=0;function me(){throw Error(N(321))}function sa(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!sn(e[t],n[t]))return!1;return!0}function ia(e,n,t,r,l,s){if(yt=s,Y=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ql.current=e===null||e.memoizedState===null?cm:dm,e=t(r,l),Lr){s=0;do{if(Lr=!1,el=0,25<=s)throw Error(N(301));s+=1,le=ne=null,n.updateQueue=null,Ql.current=fm,e=t(r,l)}while(Lr)}if(Ql.current=vs,n=ne!==null&&ne.next!==null,yt=0,le=ne=Y=null,gs=!1,n)throw Error(N(300));return e}function oa(){var e=el!==0;return el=0,e}function fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Y.memoizedState=le=e:le=le.next=e,le}function Je(){if(ne===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var n=le===null?Y.memoizedState:le.next;if(n!==null)le=n,ne=e;else{if(e===null)throw Error(N(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},le===null?Y.memoizedState=le=e:le=le.next=e}return le}function nl(e,n){return typeof n=="function"?n(e):n}function vi(e){var n=Je(),t=n.queue;if(t===null)throw Error(N(311));t.lastRenderedReducer=e;var r=ne,l=r.baseQueue,s=t.pending;if(s!==null){if(l!==null){var i=l.next;l.next=s.next,s.next=i}r.baseQueue=l=s,t.pending=null}if(l!==null){s=l.next,r=r.baseState;var o=i=null,a=null,c=s;do{var d=c.lane;if((yt&d)===d)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(o=a=f,i=r):a=a.next=f,Y.lanes|=d,xt|=d}c=c.next}while(c!==null&&c!==s);a===null?i=r:a.next=o,sn(r,n.memoizedState)||(De=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do s=l.lane,Y.lanes|=s,xt|=s,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function yi(e){var n=Je(),t=n.queue;if(t===null)throw Error(N(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,s=n.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do s=e(s,i.action),i=i.next;while(i!==l);sn(s,n.memoizedState)||(De=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,r]}function Td(){}function _d(e,n){var t=Y,r=Je(),l=n(),s=!sn(r.memoizedState,l);if(s&&(r.memoizedState=l,De=!0),r=r.queue,aa(Md.bind(null,t,r,e),[e]),r.getSnapshot!==n||s||le!==null&&le.memoizedState.tag&1){if(t.flags|=2048,tl(9,Id.bind(null,t,r,l,n),void 0,null),ie===null)throw Error(N(349));yt&30||Ld(t,n,l)}return l}function Ld(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Y.updateQueue,n===null?(n={lastEffect:null,stores:null},Y.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Id(e,n,t,r){n.value=t,n.getSnapshot=r,Od(n)&&Ad(e)}function Md(e,n,t){return t(function(){Od(n)&&Ad(e)})}function Od(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!sn(e,t)}catch{return!0}}function Ad(e){var n=Rn(e,1);n!==null&&ln(n,e,1,-1)}function Cu(e){var n=fn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:e},n.queue=e,e=e.dispatch=um.bind(null,Y,e),[n.memoizedState,e]}function tl(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Y.updateQueue,n===null?(n={lastEffect:null,stores:null},Y.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Fd(){return Je().memoizedState}function Kl(e,n,t,r){var l=fn();Y.flags|=e,l.memoizedState=tl(1|n,t,void 0,r===void 0?null:r)}function Ls(e,n,t,r){var l=Je();r=r===void 0?null:r;var s=void 0;if(ne!==null){var i=ne.memoizedState;if(s=i.destroy,r!==null&&sa(r,i.deps)){l.memoizedState=tl(n,t,s,r);return}}Y.flags|=e,l.memoizedState=tl(1|n,t,s,r)}function Nu(e,n){return Kl(8390656,8,e,n)}function aa(e,n){return Ls(2048,8,e,n)}function Ud(e,n){return Ls(4,2,e,n)}function Hd(e,n){return Ls(4,4,e,n)}function $d(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Bd(e,n,t){return t=t!=null?t.concat([e]):null,Ls(4,4,$d.bind(null,n,e),t)}function ua(){}function Wd(e,n){var t=Je();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&sa(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Vd(e,n){var t=Je();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&sa(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Qd(e,n,t){return yt&21?(sn(t,n)||(t=Jc(),Y.lanes|=t,xt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=t)}function om(e,n){var t=U;U=t!==0&&4>t?t:4,e(!0);var r=gi.transition;gi.transition={};try{e(!1),n()}finally{U=t,gi.transition=r}}function Kd(){return Je().memoizedState}function am(e,n,t){var r=qn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Yd(e))Gd(n,t);else if(t=Rd(e,n,t,r),t!==null){var l=ke();ln(t,e,r,l),Xd(t,n,r)}}function um(e,n,t){var r=qn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Yd(e))Gd(n,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var i=n.lastRenderedState,o=s(i,t);if(l.hasEagerState=!0,l.eagerState=o,sn(o,i)){var a=n.interleaved;a===null?(l.next=l,ea(n)):(l.next=a.next,a.next=l),n.interleaved=l;return}}catch{}finally{}t=Rd(e,n,l,r),t!==null&&(l=ke(),ln(t,e,r,l),Xd(t,n,r))}}function Yd(e){var n=e.alternate;return e===Y||n!==null&&n===Y}function Gd(e,n){Lr=gs=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Xd(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Uo(e,t)}}var vs={readContext:Xe,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},cm={readContext:Xe,useCallback:function(e,n){return fn().memoizedState=[e,n===void 0?null:n],e},useContext:Xe,useEffect:Nu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Kl(4194308,4,$d.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Kl(4194308,4,e,n)},useInsertionEffect:function(e,n){return Kl(4,2,e,n)},useMemo:function(e,n){var t=fn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=fn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=am.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var n=fn();return e={current:e},n.memoizedState=e},useState:Cu,useDebugValue:ua,useDeferredValue:function(e){return fn().memoizedState=e},useTransition:function(){var e=Cu(!1),n=e[0];return e=om.bind(null,e[1]),fn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Y,l=fn();if(Q){if(t===void 0)throw Error(N(407));t=t()}else{if(t=n(),ie===null)throw Error(N(349));yt&30||Ld(r,n,t)}l.memoizedState=t;var s={value:t,getSnapshot:n};return l.queue=s,Nu(Md.bind(null,r,s,e),[e]),r.flags|=2048,tl(9,Id.bind(null,r,s,t,n),void 0,null),t},useId:function(){var e=fn(),n=ie.identifierPrefix;if(Q){var t=Cn,r=En;t=(r&~(1<<32-rn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=el++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=im++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},dm={readContext:Xe,useCallback:Wd,useContext:Xe,useEffect:aa,useImperativeHandle:Bd,useInsertionEffect:Ud,useLayoutEffect:Hd,useMemo:Vd,useReducer:vi,useRef:Fd,useState:function(){return vi(nl)},useDebugValue:ua,useDeferredValue:function(e){var n=Je();return Qd(n,ne.memoizedState,e)},useTransition:function(){var e=vi(nl)[0],n=Je().memoizedState;return[e,n]},useMutableSource:Td,useSyncExternalStore:_d,useId:Kd,unstable_isNewReconciler:!1},fm={readContext:Xe,useCallback:Wd,useContext:Xe,useEffect:aa,useImperativeHandle:Bd,useInsertionEffect:Ud,useLayoutEffect:Hd,useMemo:Vd,useReducer:yi,useRef:Fd,useState:function(){return yi(nl)},useDebugValue:ua,useDeferredValue:function(e){var n=Je();return ne===null?n.memoizedState=e:Qd(n,ne.memoizedState,e)},useTransition:function(){var e=yi(nl)[0],n=Je().memoizedState;return[e,n]},useMutableSource:Td,useSyncExternalStore:_d,useId:Kd,unstable_isNewReconciler:!1};function en(e,n){if(e&&e.defaultProps){n=G({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function io(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:G({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Is={isMounted:function(e){return(e=e._reactInternals)?kt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ke(),l=qn(e),s=Nn(r,l);s.payload=n,t!=null&&(s.callback=t),n=Jn(e,s,l),n!==null&&(ln(n,e,l,r),Vl(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ke(),l=qn(e),s=Nn(r,l);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=Jn(e,s,l),n!==null&&(ln(n,e,l,r),Vl(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ke(),r=qn(e),l=Nn(t,r);l.tag=2,n!=null&&(l.callback=n),n=Jn(e,l,r),n!==null&&(ln(n,e,r,t),Vl(n,e,r))}};function ju(e,n,t,r,l,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,i):n.prototype&&n.prototype.isPureReactComponent?!Yr(t,r)||!Yr(l,s):!0}function Jd(e,n,t){var r=!1,l=tt,s=n.contextType;return typeof s=="object"&&s!==null?s=Xe(s):(l=Pe(n)?gt:xe.current,r=n.contextTypes,s=(r=r!=null)?Jt(e,l):tt),n=new n(t,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Is,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=s),n}function Du(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Is.enqueueReplaceState(n,n.state,null)}function oo(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},na(e);var s=n.contextType;typeof s=="object"&&s!==null?l.context=Xe(s):(s=Pe(n)?gt:xe.current,l.context=Jt(e,s)),l.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(io(e,n,s,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&Is.enqueueReplaceState(l,l.state,null),hs(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function nr(e,n){try{var t="",r=n;do t+=Up(r),r=r.return;while(r);var l=t}catch(s){l=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:l,digest:null}}function xi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ao(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var pm=typeof WeakMap=="function"?WeakMap:Map;function Zd(e,n,t){t=Nn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){xs||(xs=!0,xo=r),ao(e,n)},t}function qd(e,n,t){t=Nn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){ao(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ao(e,n),typeof r!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Ru(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new pm;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=jm.bind(null,e,n,t),n.then(e,e))}function Pu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function zu(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Nn(-1,1),n.tag=2,Jn(t,n,1))),t.lanes|=1),e)}var hm=zn.ReactCurrentOwner,De=!1;function be(e,n,t,r){n.child=e===null?Dd(n,null,t,r):qt(n,e.child,t,r)}function Tu(e,n,t,r,l){t=t.render;var s=n.ref;return Kt(n,l),r=ia(e,n,t,r,s,l),t=oa(),e!==null&&!De?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Pn(e,n,l)):(Q&&t&&Yo(n),n.flags|=1,be(e,n,r,l),n.child)}function _u(e,n,t,r,l){if(e===null){var s=t.type;return typeof s=="function"&&!va(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=s,ef(e,n,s,r,l)):(e=Jl(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!(e.lanes&l)){var i=s.memoizedProps;if(t=t.compare,t=t!==null?t:Yr,t(i,r)&&e.ref===n.ref)return Pn(e,n,l)}return n.flags|=1,e=et(s,r),e.ref=n.ref,e.return=n,n.child=e}function ef(e,n,t,r,l){if(e!==null){var s=e.memoizedProps;if(Yr(s,r)&&e.ref===n.ref)if(De=!1,n.pendingProps=r=s,(e.lanes&l)!==0)e.flags&131072&&(De=!0);else return n.lanes=e.lanes,Pn(e,n,l)}return uo(e,n,t,r,l)}function nf(e,n,t){var r=n.pendingProps,l=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Ht,Oe),Oe|=t;else{if(!(t&1073741824))return e=s!==null?s.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,B(Ht,Oe),Oe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:t,B(Ht,Oe),Oe|=r}else s!==null?(r=s.baseLanes|t,n.memoizedState=null):r=t,B(Ht,Oe),Oe|=r;return be(e,n,l,t),n.child}function tf(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function uo(e,n,t,r,l){var s=Pe(t)?gt:xe.current;return s=Jt(n,s),Kt(n,l),t=ia(e,n,t,r,s,l),r=oa(),e!==null&&!De?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Pn(e,n,l)):(Q&&r&&Yo(n),n.flags|=1,be(e,n,t,l),n.child)}function Lu(e,n,t,r,l){if(Pe(t)){var s=!0;us(n)}else s=!1;if(Kt(n,l),n.stateNode===null)Yl(e,n),Jd(n,t,r),oo(n,t,r,l),r=!0;else if(e===null){var i=n.stateNode,o=n.memoizedProps;i.props=o;var a=i.context,c=t.contextType;typeof c=="object"&&c!==null?c=Xe(c):(c=Pe(t)?gt:xe.current,c=Jt(n,c));var d=t.getDerivedStateFromProps,f=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==r||a!==c)&&Du(n,i,r,c),Hn=!1;var h=n.memoizedState;i.state=h,hs(n,r,i,l),a=n.memoizedState,o!==r||h!==a||Re.current||Hn?(typeof d=="function"&&(io(n,t,d,r),a=n.memoizedState),(o=Hn||ju(n,t,o,r,h,a,c))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),i.props=r,i.state=a,i.context=c,r=o):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,Pd(e,n),o=n.memoizedProps,c=n.type===n.elementType?o:en(n.type,o),i.props=c,f=n.pendingProps,h=i.context,a=t.contextType,typeof a=="object"&&a!==null?a=Xe(a):(a=Pe(t)?gt:xe.current,a=Jt(n,a));var v=t.getDerivedStateFromProps;(d=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==f||h!==a)&&Du(n,i,r,a),Hn=!1,h=n.memoizedState,i.state=h,hs(n,r,i,l);var y=n.memoizedState;o!==f||h!==y||Re.current||Hn?(typeof v=="function"&&(io(n,t,v,r),y=n.memoizedState),(c=Hn||ju(n,t,c,r,h,y,a)||!1)?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,y,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,y,a)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),i.props=r,i.state=y,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return co(e,n,t,r,s,l)}function co(e,n,t,r,l,s){tf(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return l&&xu(n,t,!1),Pn(e,n,s);r=n.stateNode,hm.current=n;var o=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=qt(n,e.child,null,s),n.child=qt(n,null,o,s)):be(e,n,o,s),n.memoizedState=r.state,l&&xu(n,t,!0),n.child}function rf(e){var n=e.stateNode;n.pendingContext?yu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&yu(e,n.context,!1),ta(e,n.containerInfo)}function Iu(e,n,t,r,l){return Zt(),Xo(l),n.flags|=256,be(e,n,t,r),n.child}var fo={dehydrated:null,treeContext:null,retryLane:0};function po(e){return{baseLanes:e,cachePool:null,transitions:null}}function lf(e,n,t){var r=n.pendingProps,l=K.current,s=!1,i=(n.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(l&2)!==0),o?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),B(K,l&1),e===null)return lo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,s?(r=n.mode,s=n.child,i={mode:"hidden",children:i},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=As(i,r,0,null),e=mt(e,r,t,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=po(t),n.memoizedState=fo,e):ca(n,i));if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null))return mm(e,n,i,r,o,l,t);if(s){s=r.fallback,i=n.mode,l=e.child,o=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=et(l,a),r.subtreeFlags=l.subtreeFlags&14680064),o!==null?s=et(o,s):(s=mt(s,i,t,null),s.flags|=2),s.return=n,r.return=n,r.sibling=s,n.child=r,r=s,s=n.child,i=e.child.memoizedState,i=i===null?po(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~t,n.memoizedState=fo,r}return s=e.child,e=s.sibling,r=et(s,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ca(e,n){return n=As({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ll(e,n,t,r){return r!==null&&Xo(r),qt(n,e.child,null,t),e=ca(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function mm(e,n,t,r,l,s,i){if(t)return n.flags&256?(n.flags&=-257,r=xi(Error(N(422))),Ll(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=r.fallback,l=n.mode,r=As({mode:"visible",children:r.children},l,0,null),s=mt(s,l,i,null),s.flags|=2,r.return=n,s.return=n,r.sibling=s,n.child=r,n.mode&1&&qt(n,e.child,null,i),n.child.memoizedState=po(i),n.memoizedState=fo,s);if(!(n.mode&1))return Ll(e,n,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var o=r.dgst;return r=o,s=Error(N(419)),r=xi(s,r,void 0),Ll(e,n,i,r)}if(o=(i&e.childLanes)!==0,De||o){if(r=ie,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==s.retryLane&&(s.retryLane=l,Rn(e,l),ln(r,e,l,-1))}return ga(),r=xi(Error(N(421))),Ll(e,n,i,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Dm.bind(null,e),l._reactRetry=n,null):(e=s.treeContext,Ae=Xn(l.nextSibling),Fe=n,Q=!0,tn=null,e!==null&&(Qe[Ke++]=En,Qe[Ke++]=Cn,Qe[Ke++]=vt,En=e.id,Cn=e.overflow,vt=n),n=ca(n,r.children),n.flags|=4096,n)}function Mu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),so(e.return,n,t)}function wi(e,n,t,r,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=t,s.tailMode=l)}function sf(e,n,t){var r=n.pendingProps,l=r.revealOrder,s=r.tail;if(be(e,n,r.children,t),r=K.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mu(e,t,n);else if(e.tag===19)Mu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(K,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&ms(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),wi(n,!1,l,t,s);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&ms(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}wi(n,!0,t,null,s);break;case"together":wi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Yl(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Pn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),xt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(N(153));if(n.child!==null){for(e=n.child,t=et(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=et(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function gm(e,n,t){switch(n.tag){case 3:rf(n),Zt();break;case 5:zd(n);break;case 1:Pe(n.type)&&us(n);break;case 4:ta(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;B(fs,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(B(K,K.current&1),n.flags|=128,null):t&n.child.childLanes?lf(e,n,t):(B(K,K.current&1),e=Pn(e,n,t),e!==null?e.sibling:null);B(K,K.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return sf(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),B(K,K.current),r)break;return null;case 22:case 23:return n.lanes=0,nf(e,n,t)}return Pn(e,n,t)}var of,ho,af,uf;of=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ho=function(){};af=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,pt(mn.current);var s=null;switch(t){case"input":l=Ii(e,l),r=Ii(e,r),s=[];break;case"select":l=G({},l,{value:void 0}),r=G({},r,{value:void 0}),s=[];break;case"textarea":l=Ai(e,l),r=Ai(e,r),s=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=os)}Ui(t,r);var i;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var o=l[c];for(i in o)o.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Hr.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var a=r[c];if(o=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&a!==o&&(a!=null||o!=null))if(c==="style")if(o){for(i in o)!o.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in a)a.hasOwnProperty(i)&&o[i]!==a[i]&&(t||(t={}),t[i]=a[i])}else t||(s||(s=[]),s.push(c,t)),t=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,o=o?o.__html:void 0,a!=null&&o!==a&&(s=s||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Hr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&W("scroll",e),s||o===a||(s=[])):(s=s||[]).push(c,a))}t&&(s=s||[]).push("style",t);var c=s;(n.updateQueue=c)&&(n.flags|=4)}};uf=function(e,n,t,r){t!==r&&(n.flags|=4)};function Sr(e,n){if(!Q)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function vm(e,n,t){var r=n.pendingProps;switch(Go(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(n),null;case 1:return Pe(n.type)&&as(),ge(n),null;case 3:return r=n.stateNode,er(),V(Re),V(xe),la(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Tl(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,tn!==null&&(ko(tn),tn=null))),ho(e,n),ge(n),null;case 5:ra(n);var l=pt(qr.current);if(t=n.type,e!==null&&n.stateNode!=null)af(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(N(166));return ge(n),null}if(e=pt(mn.current),Tl(n)){r=n.stateNode,t=n.type;var s=n.memoizedProps;switch(r[pn]=n,r[Jr]=s,e=(n.mode&1)!==0,t){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(l=0;l<Dr.length;l++)W(Dr[l],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Va(r,s),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},W("invalid",r);break;case"textarea":Ka(r,s),W("invalid",r)}Ui(t,s),l=null;for(var i in s)if(s.hasOwnProperty(i)){var o=s[i];i==="children"?typeof o=="string"?r.textContent!==o&&(s.suppressHydrationWarning!==!0&&zl(r.textContent,o,e),l=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&zl(r.textContent,o,e),l=["children",""+o]):Hr.hasOwnProperty(i)&&o!=null&&i==="onScroll"&&W("scroll",r)}switch(t){case"input":Sl(r),Qa(r,s,!0);break;case"textarea":Sl(r),Ya(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=os)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[pn]=n,e[Jr]=r,of(e,n,!1,!1),n.stateNode=e;e:{switch(i=Hi(t,r),t){case"dialog":W("cancel",e),W("close",e),l=r;break;case"iframe":case"object":case"embed":W("load",e),l=r;break;case"video":case"audio":for(l=0;l<Dr.length;l++)W(Dr[l],e);l=r;break;case"source":W("error",e),l=r;break;case"img":case"image":case"link":W("error",e),W("load",e),l=r;break;case"details":W("toggle",e),l=r;break;case"input":Va(e,r),l=Ii(e,r),W("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=G({},r,{value:void 0}),W("invalid",e);break;case"textarea":Ka(e,r),l=Ai(e,r),W("invalid",e);break;default:l=r}Ui(t,l),o=l;for(s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="style"?Fc(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Oc(e,a)):s==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&$r(e,a):typeof a=="number"&&$r(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Hr.hasOwnProperty(s)?a!=null&&s==="onScroll"&&W("scroll",e):a!=null&&Lo(e,s,a,i))}switch(t){case"input":Sl(e),Qa(e,r,!1);break;case"textarea":Sl(e),Ya(e);break;case"option":r.value!=null&&e.setAttribute("value",""+nt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Bt(e,!!r.multiple,s,!1):r.defaultValue!=null&&Bt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=os)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ge(n),null;case 6:if(e&&n.stateNode!=null)uf(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(N(166));if(t=pt(qr.current),pt(mn.current),Tl(n)){if(r=n.stateNode,t=n.memoizedProps,r[pn]=n,(s=r.nodeValue!==t)&&(e=Fe,e!==null))switch(e.tag){case 3:zl(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zl(r.nodeValue,t,(e.mode&1)!==0)}s&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[pn]=n,n.stateNode=r}return ge(n),null;case 13:if(V(K),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Ae!==null&&n.mode&1&&!(n.flags&128))Nd(),Zt(),n.flags|=98560,s=!1;else if(s=Tl(n),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(N(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[pn]=n}else Zt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ge(n),s=!1}else tn!==null&&(ko(tn),tn=null),s=!0;if(!s)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||K.current&1?re===0&&(re=3):ga())),n.updateQueue!==null&&(n.flags|=4),ge(n),null);case 4:return er(),ho(e,n),e===null&&Gr(n.stateNode.containerInfo),ge(n),null;case 10:return qo(n.type._context),ge(n),null;case 17:return Pe(n.type)&&as(),ge(n),null;case 19:if(V(K),s=n.memoizedState,s===null)return ge(n),null;if(r=(n.flags&128)!==0,i=s.rendering,i===null)if(r)Sr(s,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=ms(e),i!==null){for(n.flags|=128,Sr(s,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)s=t,e=r,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return B(K,K.current&1|2),n.child}e=e.sibling}s.tail!==null&&J()>tr&&(n.flags|=128,r=!0,Sr(s,!1),n.lanes=4194304)}else{if(!r)if(e=ms(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Sr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!Q)return ge(n),null}else 2*J()-s.renderingStartTime>tr&&t!==1073741824&&(n.flags|=128,r=!0,Sr(s,!1),n.lanes=4194304);s.isBackwards?(i.sibling=n.child,n.child=i):(t=s.last,t!==null?t.sibling=i:n.child=i,s.last=i)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=J(),n.sibling=null,t=K.current,B(K,r?t&1|2:t&1),n):(ge(n),null);case 22:case 23:return ma(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Oe&1073741824&&(ge(n),n.subtreeFlags&6&&(n.flags|=8192)):ge(n),null;case 24:return null;case 25:return null}throw Error(N(156,n.tag))}function ym(e,n){switch(Go(n),n.tag){case 1:return Pe(n.type)&&as(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return er(),V(Re),V(xe),la(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ra(n),null;case 13:if(V(K),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(N(340));Zt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return V(K),null;case 4:return er(),null;case 10:return qo(n.type._context),null;case 22:case 23:return ma(),null;case 24:return null;default:return null}}var Il=!1,ye=!1,xm=typeof WeakSet=="function"?WeakSet:Set,R=null;function Ut(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){X(e,n,r)}else t.current=null}function mo(e,n,t){try{t()}catch(r){X(e,n,r)}}var Ou=!1;function wm(e,n){if(Ji=ls,e=pd(),Ko(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var i=0,o=-1,a=-1,c=0,d=0,f=e,h=null;n:for(;;){for(var v;f!==t||l!==0&&f.nodeType!==3||(o=i+l),f!==s||r!==0&&f.nodeType!==3||(a=i+r),f.nodeType===3&&(i+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===e)break n;if(h===t&&++c===l&&(o=i),h===s&&++d===r&&(a=i),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}t=o===-1||a===-1?null:{start:o,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Zi={focusedElem:e,selectionRange:t},ls=!1,R=n;R!==null;)if(n=R,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,R=e;else for(;R!==null;){n=R;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,k=y.memoizedState,m=n.stateNode,p=m.getSnapshotBeforeUpdate(n.elementType===n.type?x:en(n.type,x),k);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(b){X(n,n.return,b)}if(e=n.sibling,e!==null){e.return=n.return,R=e;break}R=n.return}return y=Ou,Ou=!1,y}function Ir(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var s=l.destroy;l.destroy=void 0,s!==void 0&&mo(n,t,s)}l=l.next}while(l!==r)}}function Ms(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function go(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function cf(e){var n=e.alternate;n!==null&&(e.alternate=null,cf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[pn],delete n[Jr],delete n[no],delete n[tm],delete n[rm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function df(e){return e.tag===5||e.tag===3||e.tag===4}function Au(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||df(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=os));else if(r!==4&&(e=e.child,e!==null))for(vo(e,n,t),e=e.sibling;e!==null;)vo(e,n,t),e=e.sibling}function yo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(yo(e,n,t),e=e.sibling;e!==null;)yo(e,n,t),e=e.sibling}var de=null,nn=!1;function Fn(e,n,t){for(t=t.child;t!==null;)ff(e,n,t),t=t.sibling}function ff(e,n,t){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(Ds,t)}catch{}switch(t.tag){case 5:ye||Ut(t,n);case 6:var r=de,l=nn;de=null,Fn(e,n,t),de=r,nn=l,de!==null&&(nn?(e=de,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):de.removeChild(t.stateNode));break;case 18:de!==null&&(nn?(e=de,t=t.stateNode,e.nodeType===8?pi(e.parentNode,t):e.nodeType===1&&pi(e,t),Qr(e)):pi(de,t.stateNode));break;case 4:r=de,l=nn,de=t.stateNode.containerInfo,nn=!0,Fn(e,n,t),de=r,nn=l;break;case 0:case 11:case 14:case 15:if(!ye&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var s=l,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&mo(t,n,i),l=l.next}while(l!==r)}Fn(e,n,t);break;case 1:if(!ye&&(Ut(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(o){X(t,n,o)}Fn(e,n,t);break;case 21:Fn(e,n,t);break;case 22:t.mode&1?(ye=(r=ye)||t.memoizedState!==null,Fn(e,n,t),ye=r):Fn(e,n,t);break;default:Fn(e,n,t)}}function Fu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new xm),n.forEach(function(r){var l=Rm.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function qe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var s=e,i=n,o=i;e:for(;o!==null;){switch(o.tag){case 5:de=o.stateNode,nn=!1;break e;case 3:de=o.stateNode.containerInfo,nn=!0;break e;case 4:de=o.stateNode.containerInfo,nn=!0;break e}o=o.return}if(de===null)throw Error(N(160));ff(s,i,l),de=null,nn=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(c){X(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)pf(n,e),n=n.sibling}function pf(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(n,e),dn(e),r&4){try{Ir(3,e,e.return),Ms(3,e)}catch(x){X(e,e.return,x)}try{Ir(5,e,e.return)}catch(x){X(e,e.return,x)}}break;case 1:qe(n,e),dn(e),r&512&&t!==null&&Ut(t,t.return);break;case 5:if(qe(n,e),dn(e),r&512&&t!==null&&Ut(t,t.return),e.flags&32){var l=e.stateNode;try{$r(l,"")}catch(x){X(e,e.return,x)}}if(r&4&&(l=e.stateNode,l!=null)){var s=e.memoizedProps,i=t!==null?t.memoizedProps:s,o=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Lc(l,s),Hi(o,i);var c=Hi(o,s);for(i=0;i<a.length;i+=2){var d=a[i],f=a[i+1];d==="style"?Fc(l,f):d==="dangerouslySetInnerHTML"?Oc(l,f):d==="children"?$r(l,f):Lo(l,d,f,c)}switch(o){case"input":Mi(l,s);break;case"textarea":Ic(l,s);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Bt(l,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?Bt(l,!!s.multiple,s.defaultValue,!0):Bt(l,!!s.multiple,s.multiple?[]:"",!1))}l[Jr]=s}catch(x){X(e,e.return,x)}}break;case 6:if(qe(n,e),dn(e),r&4){if(e.stateNode===null)throw Error(N(162));l=e.stateNode,s=e.memoizedProps;try{l.nodeValue=s}catch(x){X(e,e.return,x)}}break;case 3:if(qe(n,e),dn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Qr(n.containerInfo)}catch(x){X(e,e.return,x)}break;case 4:qe(n,e),dn(e);break;case 13:qe(n,e),dn(e),l=e.child,l.flags&8192&&(s=l.memoizedState!==null,l.stateNode.isHidden=s,!s||l.alternate!==null&&l.alternate.memoizedState!==null||(pa=J())),r&4&&Fu(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(ye=(c=ye)||d,qe(n,e),ye=c):qe(n,e),dn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(R=e,d=e.child;d!==null;){for(f=R=d;R!==null;){switch(h=R,v=h.child,h.tag){case 0:case 11:case 14:case 15:Ir(4,h,h.return);break;case 1:Ut(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(x){X(r,t,x)}}break;case 5:Ut(h,h.return);break;case 22:if(h.memoizedState!==null){Hu(f);continue}}v!==null?(v.return=h,R=v):Hu(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{l=f.stateNode,c?(s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,a=f.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,o.style.display=Ac("display",i))}catch(x){X(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){X(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:qe(n,e),dn(e),r&4&&Fu(e);break;case 21:break;default:qe(n,e),dn(e)}}function dn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(df(t)){var r=t;break e}t=t.return}throw Error(N(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&($r(l,""),r.flags&=-33);var s=Au(e);yo(e,s,l);break;case 3:case 4:var i=r.stateNode.containerInfo,o=Au(e);vo(e,o,i);break;default:throw Error(N(161))}}catch(a){X(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function bm(e,n,t){R=e,hf(e)}function hf(e,n,t){for(var r=(e.mode&1)!==0;R!==null;){var l=R,s=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Il;if(!i){var o=l.alternate,a=o!==null&&o.memoizedState!==null||ye;o=Il;var c=ye;if(Il=i,(ye=a)&&!c)for(R=l;R!==null;)i=R,a=i.child,i.tag===22&&i.memoizedState!==null?$u(l):a!==null?(a.return=i,R=a):$u(l);for(;s!==null;)R=s,hf(s),s=s.sibling;R=l,Il=o,ye=c}Uu(e)}else l.subtreeFlags&8772&&s!==null?(s.return=l,R=s):Uu(e)}}function Uu(e){for(;R!==null;){var n=R;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ye||Ms(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ye)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:en(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&Eu(n,s,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Eu(n,i,t)}break;case 5:var o=n.stateNode;if(t===null&&n.flags&4){t=o;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Qr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ye||n.flags&512&&go(n)}catch(h){X(n,n.return,h)}}if(n===e){R=null;break}if(t=n.sibling,t!==null){t.return=n.return,R=t;break}R=n.return}}function Hu(e){for(;R!==null;){var n=R;if(n===e){R=null;break}var t=n.sibling;if(t!==null){t.return=n.return,R=t;break}R=n.return}}function $u(e){for(;R!==null;){var n=R;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ms(4,n)}catch(a){X(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(a){X(n,l,a)}}var s=n.return;try{go(n)}catch(a){X(n,s,a)}break;case 5:var i=n.return;try{go(n)}catch(a){X(n,i,a)}}}catch(a){X(n,n.return,a)}if(n===e){R=null;break}var o=n.sibling;if(o!==null){o.return=n.return,R=o;break}R=n.return}}var km=Math.ceil,ys=zn.ReactCurrentDispatcher,da=zn.ReactCurrentOwner,Ge=zn.ReactCurrentBatchConfig,F=0,ie=null,ee=null,fe=0,Oe=0,Ht=lt(0),re=0,rl=null,xt=0,Os=0,fa=0,Mr=null,je=null,pa=0,tr=1/0,kn=null,xs=!1,xo=null,Zn=null,Ml=!1,Qn=null,ws=0,Or=0,wo=null,Gl=-1,Xl=0;function ke(){return F&6?J():Gl!==-1?Gl:Gl=J()}function qn(e){return e.mode&1?F&2&&fe!==0?fe&-fe:sm.transition!==null?(Xl===0&&(Xl=Jc()),Xl):(e=U,e!==0||(e=window.event,e=e===void 0?16:ld(e.type)),e):1}function ln(e,n,t,r){if(50<Or)throw Or=0,wo=null,Error(N(185));dl(e,t,r),(!(F&2)||e!==ie)&&(e===ie&&(!(F&2)&&(Os|=t),re===4&&Wn(e,fe)),ze(e,r),t===1&&F===0&&!(n.mode&1)&&(tr=J()+500,_s&&st()))}function ze(e,n){var t=e.callbackNode;sh(e,n);var r=rs(e,e===ie?fe:0);if(r===0)t!==null&&Ja(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ja(t),n===1)e.tag===0?lm(Bu.bind(null,e)):Sd(Bu.bind(null,e)),em(function(){!(F&6)&&st()}),t=null;else{switch(Zc(r)){case 1:t=Fo;break;case 4:t=Gc;break;case 16:t=ts;break;case 536870912:t=Xc;break;default:t=ts}t=kf(t,mf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function mf(e,n){if(Gl=-1,Xl=0,F&6)throw Error(N(327));var t=e.callbackNode;if(Yt()&&e.callbackNode!==t)return null;var r=rs(e,e===ie?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=bs(e,r);else{n=r;var l=F;F|=2;var s=vf();(ie!==e||fe!==n)&&(kn=null,tr=J()+500,ht(e,n));do try{Cm();break}catch(o){gf(e,o)}while(!0);Zo(),ys.current=s,F=l,ee!==null?n=0:(ie=null,fe=0,n=re)}if(n!==0){if(n===2&&(l=Qi(e),l!==0&&(r=l,n=bo(e,l))),n===1)throw t=rl,ht(e,0),Wn(e,r),ze(e,J()),t;if(n===6)Wn(e,r);else{if(l=e.current.alternate,!(r&30)&&!Sm(l)&&(n=bs(e,r),n===2&&(s=Qi(e),s!==0&&(r=s,n=bo(e,s))),n===1))throw t=rl,ht(e,0),Wn(e,r),ze(e,J()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(N(345));case 2:ct(e,je,kn);break;case 3:if(Wn(e,r),(r&130023424)===r&&(n=pa+500-J(),10<n)){if(rs(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=eo(ct.bind(null,e,je,kn),n);break}ct(e,je,kn);break;case 4:if(Wn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var i=31-rn(r);s=1<<i,i=n[i],i>l&&(l=i),r&=~s}if(r=l,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*km(r/1960))-r,10<r){e.timeoutHandle=eo(ct.bind(null,e,je,kn),r);break}ct(e,je,kn);break;case 5:ct(e,je,kn);break;default:throw Error(N(329))}}}return ze(e,J()),e.callbackNode===t?mf.bind(null,e):null}function bo(e,n){var t=Mr;return e.current.memoizedState.isDehydrated&&(ht(e,n).flags|=256),e=bs(e,n),e!==2&&(n=je,je=t,n!==null&&ko(n)),e}function ko(e){je===null?je=e:je.push.apply(je,e)}function Sm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],s=l.getSnapshot;l=l.value;try{if(!sn(s(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wn(e,n){for(n&=~fa,n&=~Os,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-rn(n),r=1<<t;e[t]=-1,n&=~r}}function Bu(e){if(F&6)throw Error(N(327));Yt();var n=rs(e,0);if(!(n&1))return ze(e,J()),null;var t=bs(e,n);if(e.tag!==0&&t===2){var r=Qi(e);r!==0&&(n=r,t=bo(e,r))}if(t===1)throw t=rl,ht(e,0),Wn(e,n),ze(e,J()),t;if(t===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ct(e,je,kn),ze(e,J()),null}function ha(e,n){var t=F;F|=1;try{return e(n)}finally{F=t,F===0&&(tr=J()+500,_s&&st())}}function wt(e){Qn!==null&&Qn.tag===0&&!(F&6)&&Yt();var n=F;F|=1;var t=Ge.transition,r=U;try{if(Ge.transition=null,U=1,e)return e()}finally{U=r,Ge.transition=t,F=n,!(F&6)&&st()}}function ma(){Oe=Ht.current,V(Ht)}function ht(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,qh(t)),ee!==null)for(t=ee.return;t!==null;){var r=t;switch(Go(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&as();break;case 3:er(),V(Re),V(xe),la();break;case 5:ra(r);break;case 4:er();break;case 13:V(K);break;case 19:V(K);break;case 10:qo(r.type._context);break;case 22:case 23:ma()}t=t.return}if(ie=e,ee=e=et(e.current,null),fe=Oe=n,re=0,rl=null,fa=Os=xt=0,je=Mr=null,ft!==null){for(n=0;n<ft.length;n++)if(t=ft[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,s=t.pending;if(s!==null){var i=s.next;s.next=l,r.next=i}t.pending=r}ft=null}return e}function gf(e,n){do{var t=ee;try{if(Zo(),Ql.current=vs,gs){for(var r=Y.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}gs=!1}if(yt=0,le=ne=Y=null,Lr=!1,el=0,da.current=null,t===null||t.return===null){re=1,rl=n,ee=null;break}e:{var s=e,i=t.return,o=t,a=n;if(n=fe,o.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Pu(i);if(v!==null){v.flags&=-257,zu(v,i,o,s,n),v.mode&1&&Ru(s,c,n),n=v,a=c;var y=n.updateQueue;if(y===null){var x=new Set;x.add(a),n.updateQueue=x}else y.add(a);break e}else{if(!(n&1)){Ru(s,c,n),ga();break e}a=Error(N(426))}}else if(Q&&o.mode&1){var k=Pu(i);if(k!==null){!(k.flags&65536)&&(k.flags|=256),zu(k,i,o,s,n),Xo(nr(a,o));break e}}s=a=nr(a,o),re!==4&&(re=2),Mr===null?Mr=[s]:Mr.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var m=Zd(s,a,n);Su(s,m);break e;case 1:o=a;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Zn===null||!Zn.has(g)))){s.flags|=65536,n&=-n,s.lanes|=n;var b=qd(s,o,n);Su(s,b);break e}}s=s.return}while(s!==null)}xf(t)}catch(S){n=S,ee===t&&t!==null&&(ee=t=t.return);continue}break}while(!0)}function vf(){var e=ys.current;return ys.current=vs,e===null?vs:e}function ga(){(re===0||re===3||re===2)&&(re=4),ie===null||!(xt&268435455)&&!(Os&268435455)||Wn(ie,fe)}function bs(e,n){var t=F;F|=2;var r=vf();(ie!==e||fe!==n)&&(kn=null,ht(e,n));do try{Em();break}catch(l){gf(e,l)}while(!0);if(Zo(),F=t,ys.current=r,ee!==null)throw Error(N(261));return ie=null,fe=0,re}function Em(){for(;ee!==null;)yf(ee)}function Cm(){for(;ee!==null&&!Xp();)yf(ee)}function yf(e){var n=bf(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,n===null?xf(e):ee=n,da.current=null}function xf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=ym(t,n),t!==null){t.flags&=32767,ee=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ee=null;return}}else if(t=vm(t,n,Oe),t!==null){ee=t;return}if(n=n.sibling,n!==null){ee=n;return}ee=n=e}while(n!==null);re===0&&(re=5)}function ct(e,n,t){var r=U,l=Ge.transition;try{Ge.transition=null,U=1,Nm(e,n,t,r)}finally{Ge.transition=l,U=r}return null}function Nm(e,n,t,r){do Yt();while(Qn!==null);if(F&6)throw Error(N(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(ih(e,s),e===ie&&(ee=ie=null,fe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ml||(Ml=!0,kf(ts,function(){return Yt(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Ge.transition,Ge.transition=null;var i=U;U=1;var o=F;F|=4,da.current=null,wm(e,t),pf(t,e),Qh(Zi),ls=!!Ji,Zi=Ji=null,e.current=t,bm(t),Jp(),F=o,U=i,Ge.transition=s}else e.current=t;if(Ml&&(Ml=!1,Qn=e,ws=l),s=e.pendingLanes,s===0&&(Zn=null),eh(t.stateNode),ze(e,J()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(xs)throw xs=!1,e=xo,xo=null,e;return ws&1&&e.tag!==0&&Yt(),s=e.pendingLanes,s&1?e===wo?Or++:(Or=0,wo=e):Or=0,st(),null}function Yt(){if(Qn!==null){var e=Zc(ws),n=Ge.transition,t=U;try{if(Ge.transition=null,U=16>e?16:e,Qn===null)var r=!1;else{if(e=Qn,Qn=null,ws=0,F&6)throw Error(N(331));var l=F;for(F|=4,R=e.current;R!==null;){var s=R,i=s.child;if(R.flags&16){var o=s.deletions;if(o!==null){for(var a=0;a<o.length;a++){var c=o[a];for(R=c;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:Ir(8,d,s)}var f=d.child;if(f!==null)f.return=d,R=f;else for(;R!==null;){d=R;var h=d.sibling,v=d.return;if(cf(d),d===c){R=null;break}if(h!==null){h.return=v,R=h;break}R=v}}}var y=s.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}R=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,R=i;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ir(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,R=m;break e}R=s.return}}var p=e.current;for(R=p;R!==null;){i=R;var g=i.child;if(i.subtreeFlags&2064&&g!==null)g.return=i,R=g;else e:for(i=p;R!==null;){if(o=R,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ms(9,o)}}catch(S){X(o,o.return,S)}if(o===i){R=null;break e}var b=o.sibling;if(b!==null){b.return=o.return,R=b;break e}R=o.return}}if(F=l,st(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(Ds,e)}catch{}r=!0}return r}finally{U=t,Ge.transition=n}}return!1}function Wu(e,n,t){n=nr(t,n),n=Zd(e,n,1),e=Jn(e,n,1),n=ke(),e!==null&&(dl(e,1,n),ze(e,n))}function X(e,n,t){if(e.tag===3)Wu(e,e,t);else for(;n!==null;){if(n.tag===3){Wu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zn===null||!Zn.has(r))){e=nr(t,e),e=qd(n,e,1),n=Jn(n,e,1),e=ke(),n!==null&&(dl(n,1,e),ze(n,e));break}}n=n.return}}function jm(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ke(),e.pingedLanes|=e.suspendedLanes&t,ie===e&&(fe&t)===t&&(re===4||re===3&&(fe&130023424)===fe&&500>J()-pa?ht(e,0):fa|=t),ze(e,n)}function wf(e,n){n===0&&(e.mode&1?(n=Nl,Nl<<=1,!(Nl&130023424)&&(Nl=4194304)):n=1);var t=ke();e=Rn(e,n),e!==null&&(dl(e,n,t),ze(e,t))}function Dm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),wf(e,t)}function Rm(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(n),wf(e,t)}var bf;bf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Re.current)De=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return De=!1,gm(e,n,t);De=!!(e.flags&131072)}else De=!1,Q&&n.flags&1048576&&Ed(n,ds,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Yl(e,n),e=n.pendingProps;var l=Jt(n,xe.current);Kt(n,t),l=ia(null,n,r,e,l,t);var s=oa();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Pe(r)?(s=!0,us(n)):s=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,na(n),l.updater=Is,n.stateNode=l,l._reactInternals=n,oo(n,r,e,t),n=co(null,n,r,!0,s,t)):(n.tag=0,Q&&s&&Yo(n),be(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Yl(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=zm(r),e=en(r,e),l){case 0:n=uo(null,n,r,e,t);break e;case 1:n=Lu(null,n,r,e,t);break e;case 11:n=Tu(null,n,r,e,t);break e;case 14:n=_u(null,n,r,en(r.type,e),t);break e}throw Error(N(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:en(r,l),uo(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:en(r,l),Lu(e,n,r,l,t);case 3:e:{if(rf(n),e===null)throw Error(N(387));r=n.pendingProps,s=n.memoizedState,l=s.element,Pd(e,n),hs(n,r,null,t);var i=n.memoizedState;if(r=i.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){l=nr(Error(N(423)),n),n=Iu(e,n,r,t,l);break e}else if(r!==l){l=nr(Error(N(424)),n),n=Iu(e,n,r,t,l);break e}else for(Ae=Xn(n.stateNode.containerInfo.firstChild),Fe=n,Q=!0,tn=null,t=Dd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Zt(),r===l){n=Pn(e,n,t);break e}be(e,n,r,t)}n=n.child}return n;case 5:return zd(n),e===null&&lo(n),r=n.type,l=n.pendingProps,s=e!==null?e.memoizedProps:null,i=l.children,qi(r,l)?i=null:s!==null&&qi(r,s)&&(n.flags|=32),tf(e,n),be(e,n,i,t),n.child;case 6:return e===null&&lo(n),null;case 13:return lf(e,n,t);case 4:return ta(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=qt(n,null,r,t):be(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:en(r,l),Tu(e,n,r,l,t);case 7:return be(e,n,n.pendingProps,t),n.child;case 8:return be(e,n,n.pendingProps.children,t),n.child;case 12:return be(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,s=n.memoizedProps,i=l.value,B(fs,r._currentValue),r._currentValue=i,s!==null)if(sn(s.value,i)){if(s.children===l.children&&!Re.current){n=Pn(e,n,t);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var o=s.dependencies;if(o!==null){i=s.child;for(var a=o.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Nn(-1,t&-t),a.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a}}s.lanes|=t,a=s.alternate,a!==null&&(a.lanes|=t),so(s.return,t,n),o.lanes|=t;break}a=a.next}}else if(s.tag===10)i=s.type===n.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(N(341));i.lanes|=t,o=i.alternate,o!==null&&(o.lanes|=t),so(i,t,n),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===n){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}be(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Kt(n,t),l=Xe(l),r=r(l),n.flags|=1,be(e,n,r,t),n.child;case 14:return r=n.type,l=en(r,n.pendingProps),l=en(r.type,l),_u(e,n,r,l,t);case 15:return ef(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:en(r,l),Yl(e,n),n.tag=1,Pe(r)?(e=!0,us(n)):e=!1,Kt(n,t),Jd(n,r,l),oo(n,r,l,t),co(null,n,r,!0,e,t);case 19:return sf(e,n,t);case 22:return nf(e,n,t)}throw Error(N(156,n.tag))};function kf(e,n){return Yc(e,n)}function Pm(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,n,t,r){return new Pm(e,n,t,r)}function va(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zm(e){if(typeof e=="function")return va(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mo)return 11;if(e===Oo)return 14}return 2}function et(e,n){var t=e.alternate;return t===null?(t=Ye(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Jl(e,n,t,r,l,s){var i=2;if(r=e,typeof e=="function")va(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case zt:return mt(t.children,l,s,n);case Io:i=8,l|=8;break;case zi:return e=Ye(12,t,n,l|2),e.elementType=zi,e.lanes=s,e;case Ti:return e=Ye(13,t,n,l),e.elementType=Ti,e.lanes=s,e;case _i:return e=Ye(19,t,n,l),e.elementType=_i,e.lanes=s,e;case zc:return As(t,l,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rc:i=10;break e;case Pc:i=9;break e;case Mo:i=11;break e;case Oo:i=14;break e;case Un:i=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return n=Ye(i,t,n,l),n.elementType=e,n.type=r,n.lanes=s,n}function mt(e,n,t,r){return e=Ye(7,e,r,n),e.lanes=t,e}function As(e,n,t,r){return e=Ye(22,e,r,n),e.elementType=zc,e.lanes=t,e.stateNode={isHidden:!1},e}function bi(e,n,t){return e=Ye(6,e,null,n),e.lanes=t,e}function ki(e,n,t){return n=Ye(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Tm(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ti(0),this.expirationTimes=ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ti(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ya(e,n,t,r,l,s,i,o,a){return e=new Tm(e,n,t,o,a),n===1?(n=1,s===!0&&(n|=8)):n=0,s=Ye(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},na(s),e}function _m(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Sf(e){if(!e)return tt;e=e._reactInternals;e:{if(kt(e)!==e||e.tag!==1)throw Error(N(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Pe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(N(171))}if(e.tag===1){var t=e.type;if(Pe(t))return kd(e,t,n)}return n}function Ef(e,n,t,r,l,s,i,o,a){return e=ya(t,r,!0,e,l,s,i,o,a),e.context=Sf(null),t=e.current,r=ke(),l=qn(t),s=Nn(r,l),s.callback=n??null,Jn(t,s,l),e.current.lanes=l,dl(e,l,r),ze(e,r),e}function Fs(e,n,t,r){var l=n.current,s=ke(),i=qn(l);return t=Sf(t),n.context===null?n.context=t:n.pendingContext=t,n=Nn(s,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Jn(l,n,i),e!==null&&(ln(e,l,i,s),Vl(e,l,i)),i}function ks(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function xa(e,n){Vu(e,n),(e=e.alternate)&&Vu(e,n)}function Lm(){return null}var Cf=typeof reportError=="function"?reportError:function(e){console.error(e)};function wa(e){this._internalRoot=e}Us.prototype.render=wa.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(N(409));Fs(e,n,null,null)};Us.prototype.unmount=wa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;wt(function(){Fs(null,e,null,null)}),n[Dn]=null}};function Us(e){this._internalRoot=e}Us.prototype.unstable_scheduleHydration=function(e){if(e){var n=nd();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Bn.length&&n!==0&&n<Bn[t].priority;t++);Bn.splice(t,0,e),t===0&&rd(e)}};function ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qu(){}function Im(e,n,t,r,l){if(l){if(typeof r=="function"){var s=r;r=function(){var c=ks(i);s.call(c)}}var i=Ef(n,r,e,0,null,!1,!1,"",Qu);return e._reactRootContainer=i,e[Dn]=i.current,Gr(e.nodeType===8?e.parentNode:e),wt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var o=r;r=function(){var c=ks(a);o.call(c)}}var a=ya(e,0,!1,null,null,!1,!1,"",Qu);return e._reactRootContainer=a,e[Dn]=a.current,Gr(e.nodeType===8?e.parentNode:e),wt(function(){Fs(n,a,t,r)}),a}function $s(e,n,t,r,l){var s=t._reactRootContainer;if(s){var i=s;if(typeof l=="function"){var o=l;l=function(){var a=ks(i);o.call(a)}}Fs(n,i,e,l)}else i=Im(t,n,e,l,r);return ks(i)}qc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=jr(n.pendingLanes);t!==0&&(Uo(n,t|1),ze(n,J()),!(F&6)&&(tr=J()+500,st()))}break;case 13:wt(function(){var r=Rn(e,1);if(r!==null){var l=ke();ln(r,e,1,l)}}),xa(e,1)}};Ho=function(e){if(e.tag===13){var n=Rn(e,134217728);if(n!==null){var t=ke();ln(n,e,134217728,t)}xa(e,134217728)}};ed=function(e){if(e.tag===13){var n=qn(e),t=Rn(e,n);if(t!==null){var r=ke();ln(t,e,n,r)}xa(e,n)}};nd=function(){return U};td=function(e,n){var t=U;try{return U=e,n()}finally{U=t}};Bi=function(e,n,t){switch(n){case"input":if(Mi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=Ts(r);if(!l)throw Error(N(90));_c(r),Mi(r,l)}}}break;case"textarea":Ic(e,t);break;case"select":n=t.value,n!=null&&Bt(e,!!t.multiple,n,!1)}};$c=ha;Bc=wt;var Mm={usingClientEntryPoint:!1,Events:[pl,It,Ts,Uc,Hc,ha]},Er={findFiberByHostInstance:dt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Om={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qc(e),e===null?null:e.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||Lm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{Ds=Ol.inject(Om),hn=Ol}catch{}}$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mm;$e.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ba(n))throw Error(N(200));return _m(e,n,null,t)};$e.createRoot=function(e,n){if(!ba(e))throw Error(N(299));var t=!1,r="",l=Cf;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=ya(e,1,!1,null,null,t,!1,r,l),e[Dn]=n.current,Gr(e.nodeType===8?e.parentNode:e),new wa(n)};$e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Qc(n),e=e===null?null:e.stateNode,e};$e.flushSync=function(e){return wt(e)};$e.hydrate=function(e,n,t){if(!Hs(n))throw Error(N(200));return $s(null,e,n,!0,t)};$e.hydrateRoot=function(e,n,t){if(!ba(e))throw Error(N(405));var r=t!=null&&t.hydratedSources||null,l=!1,s="",i=Cf;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=Ef(n,null,e,1,t??null,l,!1,s,i),e[Dn]=n.current,Gr(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new Us(n)};$e.render=function(e,n,t){if(!Hs(n))throw Error(N(200));return $s(null,e,n,!1,t)};$e.unmountComponentAtNode=function(e){if(!Hs(e))throw Error(N(40));return e._reactRootContainer?(wt(function(){$s(null,null,e,!1,function(){e._reactRootContainer=null,e[Dn]=null})}),!0):!1};$e.unstable_batchedUpdates=ha;$e.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Hs(t))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return $s(e,n,t,!1,r)};$e.version="18.3.1-next-f1338f8080-20240426";function Nf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nf)}catch(e){console.error(e)}}Nf(),Cc.exports=$e;var $t=Cc.exports,Ku=$t;Ri.createRoot=Ku.createRoot,Ri.hydrateRoot=Ku.hydrateRoot;/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Am={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Z=(e,n)=>{const t=w.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:s=2,absoluteStrokeWidth:i,className:o="",children:a,...c},d)=>w.createElement("svg",{ref:d,...Am,width:l,height:l,stroke:r,strokeWidth:i?Number(s)*24/Number(l):s,className:["lucide",`lucide-${Fm(e)}`,o].join(" "),...c},[...n.map(([f,h])=>w.createElement(f,h)),...Array.isArray(a)?a:[a]]));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=Z("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=Z("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=Z("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=Z("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=Z("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=Z("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=Z("FileJson",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=Z("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=Z("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=Z("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=Z("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=Z("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=Z("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=Z("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=Z("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=Z("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=Z("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=Z("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=Z("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=Z("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=Z("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);function lg({onExportJson:e,onImportJson:n,onExportHtml:t,onDownloadPdf:r}){return u.jsxs("div",{className:"h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10 relative",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"bg-blue-600 p-1.5 rounded-lg",children:u.jsx(Km,{className:"w-5 h-5 text-white"})}),u.jsx("h1",{className:"text-xl font-bold text-slate-800 tracking-tight",children:"CV Creator"})]}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("button",{onClick:n,className:"flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors",title:"Import JSON",children:[u.jsx(jf,{className:"w-4 h-4"}),u.jsx("span",{className:"hidden sm:inline",children:"Import"})]}),u.jsx("div",{className:"h-6 w-px bg-slate-200 mx-1"}),u.jsxs("button",{onClick:e,className:"flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors",title:"Export JSON",children:[u.jsx(Vm,{className:"w-4 h-4"}),u.jsx("span",{className:"hidden sm:inline",children:"JSON"})]}),u.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors",title:"Export HTML",children:[u.jsx(Qm,{className:"w-4 h-4"}),u.jsx("span",{className:"hidden sm:inline",children:"HTML"})]}),u.jsxs("button",{onClick:r,className:"ml-2 flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all shadow-sm hover:shadow-md",children:[u.jsx(qm,{className:"w-4 h-4"}),"Download PDF"]})]})]})}const sg={},Yu=e=>{let n;const t=new Set,r=(d,f)=>{const h=typeof d=="function"?d(n):d;if(!Object.is(h,n)){const v=n;n=f??(typeof h!="object"||h===null)?h:Object.assign({},n,h),t.forEach(y=>y(n,v))}},l=()=>n,a={setState:r,getState:l,getInitialState:()=>c,subscribe:d=>(t.add(d),()=>t.delete(d)),destroy:()=>{(sg?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},c=n=e(r,l,a);return a},ig=e=>e?Yu(e):Yu;var Df={exports:{}},Rf={},Pf={exports:{}},zf={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rr=w;function og(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ag=typeof Object.is=="function"?Object.is:og,ug=rr.useState,cg=rr.useEffect,dg=rr.useLayoutEffect,fg=rr.useDebugValue;function pg(e,n){var t=n(),r=ug({inst:{value:t,getSnapshot:n}}),l=r[0].inst,s=r[1];return dg(function(){l.value=t,l.getSnapshot=n,Si(l)&&s({inst:l})},[e,t,n]),cg(function(){return Si(l)&&s({inst:l}),e(function(){Si(l)&&s({inst:l})})},[e]),fg(t),t}function Si(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!ag(e,t)}catch{return!0}}function hg(e,n){return n()}var mg=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?hg:pg;zf.useSyncExternalStore=rr.useSyncExternalStore!==void 0?rr.useSyncExternalStore:mg;Pf.exports=zf;var gg=Pf.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bs=w,vg=gg;function yg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var xg=typeof Object.is=="function"?Object.is:yg,wg=vg.useSyncExternalStore,bg=Bs.useRef,kg=Bs.useEffect,Sg=Bs.useMemo,Eg=Bs.useDebugValue;Rf.useSyncExternalStoreWithSelector=function(e,n,t,r,l){var s=bg(null);if(s.current===null){var i={hasValue:!1,value:null};s.current=i}else i=s.current;s=Sg(function(){function a(v){if(!c){if(c=!0,d=v,v=r(v),l!==void 0&&i.hasValue){var y=i.value;if(l(y,v))return f=y}return f=v}if(y=f,xg(d,v))return y;var x=r(v);return l!==void 0&&l(y,x)?(d=v,y):(d=v,f=x)}var c=!1,d,f,h=t===void 0?null:t;return[function(){return a(n())},h===null?void 0:function(){return a(h())}]},[n,t,r,l]);var o=wg(e,s[0],s[1]);return kg(function(){i.hasValue=!0,i.value=o},[o]),Eg(o),o};Df.exports=Rf;var Cg=Df.exports;const Ng=pc(Cg),Tf={},{useDebugValue:jg}=ve,{useSyncExternalStoreWithSelector:Dg}=Ng;let Gu=!1;const Rg=e=>e;function Pg(e,n=Rg,t){(Tf?"production":void 0)!=="production"&&t&&!Gu&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Gu=!0);const r=Dg(e.subscribe,e.getState,e.getServerState||e.getInitialState,n,t);return jg(r),r}const zg=e=>{(Tf?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const n=typeof e=="function"?ig(e):e,t=(r,l)=>Pg(n,r,l);return Object.assign(t,n),t},Tg=e=>zg,_g={};function Lg(e,n){let t;try{t=e()}catch{return}return{getItem:l=>{var s;const i=a=>a===null?null:JSON.parse(a,void 0),o=(s=t.getItem(l))!=null?s:null;return o instanceof Promise?o.then(i):i(o)},setItem:(l,s)=>t.setItem(l,JSON.stringify(s,void 0)),removeItem:l=>t.removeItem(l)}}const ll=e=>n=>{try{const t=e(n);return t instanceof Promise?t:{then(r){return ll(r)(t)},catch(r){return this}}}catch(t){return{then(r){return this},catch(r){return ll(r)(t)}}}},Ig=(e,n)=>(t,r,l)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:k=>k,version:0,merge:(k,m)=>({...m,...k}),...n},i=!1;const o=new Set,a=new Set;let c;try{c=s.getStorage()}catch{}if(!c)return e((...k)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),t(...k)},r,l);const d=ll(s.serialize),f=()=>{const k=s.partialize({...r()});let m;const p=d({state:k,version:s.version}).then(g=>c.setItem(s.name,g)).catch(g=>{m=g});if(m)throw m;return p},h=l.setState;l.setState=(k,m)=>{h(k,m),f()};const v=e((...k)=>{t(...k),f()},r,l);let y;const x=()=>{var k;if(!c)return;i=!1,o.forEach(p=>p(r()));const m=((k=s.onRehydrateStorage)==null?void 0:k.call(s,r()))||void 0;return ll(c.getItem.bind(c))(s.name).then(p=>{if(p)return s.deserialize(p)}).then(p=>{if(p)if(typeof p.version=="number"&&p.version!==s.version){if(s.migrate)return s.migrate(p.state,p.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return p.state}).then(p=>{var g;return y=s.merge(p,(g=r())!=null?g:v),t(y,!0),f()}).then(()=>{m==null||m(y,void 0),i=!0,a.forEach(p=>p(y))}).catch(p=>{m==null||m(void 0,p)})};return l.persist={setOptions:k=>{s={...s,...k},k.getStorage&&(c=k.getStorage())},clearStorage:()=>{c==null||c.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>x(),hasHydrated:()=>i,onHydrate:k=>(o.add(k),()=>{o.delete(k)}),onFinishHydration:k=>(a.add(k),()=>{a.delete(k)})},x(),y||v},Mg=(e,n)=>(t,r,l)=>{let s={storage:Lg(()=>localStorage),partialize:x=>x,version:0,merge:(x,k)=>({...k,...x}),...n},i=!1;const o=new Set,a=new Set;let c=s.storage;if(!c)return e((...x)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),t(...x)},r,l);const d=()=>{const x=s.partialize({...r()});return c.setItem(s.name,{state:x,version:s.version})},f=l.setState;l.setState=(x,k)=>{f(x,k),d()};const h=e((...x)=>{t(...x),d()},r,l);l.getInitialState=()=>h;let v;const y=()=>{var x,k;if(!c)return;i=!1,o.forEach(p=>{var g;return p((g=r())!=null?g:h)});const m=((k=s.onRehydrateStorage)==null?void 0:k.call(s,(x=r())!=null?x:h))||void 0;return ll(c.getItem.bind(c))(s.name).then(p=>{if(p)if(typeof p.version=="number"&&p.version!==s.version){if(s.migrate)return[!0,s.migrate(p.state,p.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,p.state];return[!1,void 0]}).then(p=>{var g;const[b,S]=p;if(v=s.merge(S,(g=r())!=null?g:h),t(v,!0),b)return d()}).then(()=>{m==null||m(v,void 0),v=r(),i=!0,a.forEach(p=>p(v))}).catch(p=>{m==null||m(void 0,p)})};return l.persist={setOptions:x=>{s={...s,...x},x.storage&&(c=x.storage)},clearStorage:()=>{c==null||c.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>y(),hasHydrated:()=>i,onHydrate:x=>(o.add(x),()=>{o.delete(x)}),onFinishHydration:x=>(a.add(x),()=>{a.delete(x)})},s.skipHydration||y(),v||h},Og=(e,n)=>"getStorage"in n||"serialize"in n||"deserialize"in n?((_g?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Ig(e,n)):Mg(e,n),Ag=Og,Xu={basics:{name:"",label:"",image:"",email:"",phone:"",url:"",summary:"",location:{address:"",postalCode:"",city:"",countryCode:"",region:""},profiles:[]},work:[],education:[],skills:[],volunteer:[],languages:[],interests:[],certifications:[],publications:[],meta:{templateName:"modern",themeColor:"#3b82f6",onePageMode:!1}},T=Tg()(Ag(e=>({resume:Xu,updateSection:(n,t)=>e(r=>({resume:{...r.resume,[n]:{...r.resume[n],...t}}})),addEntry:(n,t)=>e(r=>n==="basics.profiles"?{resume:{...r.resume,basics:{...r.resume.basics,profiles:[...r.resume.basics.profiles,t]}}}:{resume:{...r.resume,[n]:[...r.resume[n],t]}}),removeEntry:(n,t)=>e(r=>n==="basics.profiles"?{resume:{...r.resume,basics:{...r.resume.basics,profiles:r.resume.basics.profiles.filter((l,s)=>s!==t)}}}:{resume:{...r.resume,[n]:r.resume[n].filter((l,s)=>s!==t)}}),updateEntry:(n,t,r)=>e(l=>n==="basics.profiles"?{resume:{...l.resume,basics:{...l.resume.basics,profiles:l.resume.basics.profiles.map((s,i)=>i===t?{...s,...r}:s)}}}:{resume:{...l.resume,[n]:l.resume[n].map((s,i)=>i===t?{...s,...r}:s)}}),reorderEntry:(n,t,r)=>e(l=>{let s;n==="basics.profiles"?s=[...l.resume.basics.profiles]:s=[...l.resume[n]];const[i]=s.splice(t,1);return s.splice(r,0,i),n==="basics.profiles"?{resume:{...l.resume,basics:{...l.resume.basics,profiles:s}}}:{resume:{...l.resume,[n]:s}}}),importResume:n=>e(()=>({resume:n})),resetResume:()=>e(()=>({resume:Xu}))}),{name:"cv-creator-storage"}));function Fg(){const e=T(o=>o.resume),n=T(o=>o.updateSection),t=T(o=>o.addEntry),r=T(o=>o.removeEntry),l=T(o=>o.updateEntry),s=o=>{var d;const a=(d=o.target.files)==null?void 0:d[0];if(!a)return;const c=new FileReader;c.onload=f=>{var v;const h=(v=f.target)==null?void 0:v.result;n("basics",{image:h})},c.readAsDataURL(a)},i=()=>{t("basics.profiles",{network:"",username:"",url:""})};return u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Profile Picture"}),e.basics.image&&u.jsx("div",{className:"mb-3",children:u.jsx("img",{src:e.basics.image,alt:"Profile",className:"w-24 h-24 rounded-full object-cover border-2 border-gray-300"})}),u.jsxs("label",{className:"flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors w-fit",children:[u.jsx(jf,{className:"w-4 h-4"}),u.jsx("span",{className:"text-sm font-medium",children:"Upload Image"}),u.jsx("input",{type:"file",accept:"image/*",onChange:s,className:"hidden"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Full Name"}),u.jsx("input",{type:"text",value:e.basics.name,onChange:o=>n("basics",{name:o.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"John Doe"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Job Title"}),u.jsx("input",{type:"text",value:e.basics.label,onChange:o=>n("basics",{label:o.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Software Engineer"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),u.jsx("input",{type:"email",value:e.basics.email,onChange:o=>n("basics",{email:o.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"john@example.com"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Phone"}),u.jsx("input",{type:"tel",value:e.basics.phone,onChange:o=>n("basics",{phone:o.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"+1 234 567 890"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Website"}),u.jsx("input",{type:"url",value:e.basics.url,onChange:o=>n("basics",{url:o.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"https://example.com"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"City"}),u.jsx("input",{type:"text",value:e.basics.location.city,onChange:o=>n("basics",{location:{...e.basics.location,city:o.target.value}}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"New York"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Country Code"}),u.jsx("input",{type:"text",value:e.basics.location.countryCode,onChange:o=>n("basics",{location:{...e.basics.location,countryCode:o.target.value}}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"US"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Professional Summary"}),u.jsx("textarea",{value:e.basics.summary,onChange:o=>n("basics",{summary:o.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",rows:4,placeholder:"Brief professional summary..."})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Social Profiles"}),u.jsx("div",{className:"space-y-2",children:e.basics.profiles.map((o,a)=>u.jsxs("div",{className:"space-y-2 p-3 border border-gray-200 rounded-lg",children:[u.jsxs("div",{className:"flex gap-2",children:[u.jsx("input",{type:"text",value:o.network,onChange:c=>l("basics.profiles",a,{network:c.target.value}),className:"flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Network (e.g., LinkedIn)"}),u.jsx("button",{onClick:()=>r("basics.profiles",a),className:"px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors",children:"Remove"})]}),u.jsx("input",{type:"text",value:o.username,onChange:c=>l("basics.profiles",a,{username:c.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Username"}),u.jsx("input",{type:"url",value:o.url,onChange:c=>l("basics.profiles",a,{url:c.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"https://linkedin.com/in/username"})]},a))}),u.jsx("button",{onClick:i,className:"mt-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium",children:"+ Add Profile"})]})]})}function Ug(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return w.useMemo(()=>r=>{n.forEach(l=>l(r))},n)}const Ws=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ar(e){const n=Object.prototype.toString.call(e);return n==="[object Window]"||n==="[object global]"}function ka(e){return"nodeType"in e}function Te(e){var n,t;return e?ar(e)?e:ka(e)&&(n=(t=e.ownerDocument)==null?void 0:t.defaultView)!=null?n:window:window}function Sa(e){const{Document:n}=Te(e);return e instanceof n}function ml(e){return ar(e)?!1:e instanceof Te(e).HTMLElement}function _f(e){return e instanceof Te(e).SVGElement}function ur(e){return e?ar(e)?e.document:ka(e)?Sa(e)?e:ml(e)||_f(e)?e.ownerDocument:document:document:document}const gn=Ws?w.useLayoutEffect:w.useEffect;function Ea(e){const n=w.useRef(e);return gn(()=>{n.current=e}),w.useCallback(function(){for(var t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return n.current==null?void 0:n.current(...r)},[])}function Hg(){const e=w.useRef(null),n=w.useCallback((r,l)=>{e.current=setInterval(r,l)},[]),t=w.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[n,t]}function sl(e,n){n===void 0&&(n=[e]);const t=w.useRef(e);return gn(()=>{t.current!==e&&(t.current=e)},n),t}function gl(e,n){const t=w.useRef();return w.useMemo(()=>{const r=e(t.current);return t.current=r,r},[...n])}function Ss(e){const n=Ea(e),t=w.useRef(null),r=w.useCallback(l=>{l!==t.current&&(n==null||n(l,t.current)),t.current=l},[]);return[t,r]}function So(e){const n=w.useRef();return w.useEffect(()=>{n.current=e},[e]),n.current}let Ei={};function vl(e,n){return w.useMemo(()=>{if(n)return n;const t=Ei[e]==null?0:Ei[e]+1;return Ei[e]=t,e+"-"+t},[e,n])}function Lf(e){return function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),l=1;l<t;l++)r[l-1]=arguments[l];return r.reduce((s,i)=>{const o=Object.entries(i);for(const[a,c]of o){const d=s[a];d!=null&&(s[a]=d+e*c)}return s},{...n})}}const Gt=Lf(1),il=Lf(-1);function $g(e){return"clientX"in e&&"clientY"in e}function Ca(e){if(!e)return!1;const{KeyboardEvent:n}=Te(e.target);return n&&e instanceof n}function Bg(e){if(!e)return!1;const{TouchEvent:n}=Te(e.target);return n&&e instanceof n}function Eo(e){if(Bg(e)){if(e.touches&&e.touches.length){const{clientX:n,clientY:t}=e.touches[0];return{x:n,y:t}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:n,clientY:t}=e.changedTouches[0];return{x:n,y:t}}}return $g(e)?{x:e.clientX,y:e.clientY}:null}const ol=Object.freeze({Translate:{toString(e){if(!e)return;const{x:n,y:t}=e;return"translate3d("+(n?Math.round(n):0)+"px, "+(t?Math.round(t):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:n,scaleY:t}=e;return"scaleX("+n+") scaleY("+t+")"}},Transform:{toString(e){if(e)return[ol.Translate.toString(e),ol.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:n,duration:t,easing:r}=e;return n+" "+t+"ms "+r}}}),Ju="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Wg(e){return e.matches(Ju)?e:e.querySelector(Ju)}const Vg={display:"none"};function Qg(e){let{id:n,value:t}=e;return ve.createElement("div",{id:n,style:Vg},t)}function Kg(e){let{id:n,announcement:t,ariaLiveType:r="assertive"}=e;const l={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return ve.createElement("div",{id:n,style:l,role:"status","aria-live":r,"aria-atomic":!0},t)}function Yg(){const[e,n]=w.useState("");return{announce:w.useCallback(r=>{r!=null&&n(r)},[]),announcement:e}}const If=w.createContext(null);function Gg(e){const n=w.useContext(If);w.useEffect(()=>{if(!n)throw new Error("useDndMonitor must be used within a children of <DndContext>");return n(e)},[e,n])}function Xg(){const[e]=w.useState(()=>new Set),n=w.useCallback(r=>(e.add(r),()=>e.delete(r)),[e]);return[w.useCallback(r=>{let{type:l,event:s}=r;e.forEach(i=>{var o;return(o=i[l])==null?void 0:o.call(i,s)})},[e]),n]}const Jg={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Zg={onDragStart(e){let{active:n}=e;return"Picked up draggable item "+n.id+"."},onDragOver(e){let{active:n,over:t}=e;return t?"Draggable item "+n.id+" was moved over droppable area "+t.id+".":"Draggable item "+n.id+" is no longer over a droppable area."},onDragEnd(e){let{active:n,over:t}=e;return t?"Draggable item "+n.id+" was dropped over droppable area "+t.id:"Draggable item "+n.id+" was dropped."},onDragCancel(e){let{active:n}=e;return"Dragging was cancelled. Draggable item "+n.id+" was dropped."}};function qg(e){let{announcements:n=Zg,container:t,hiddenTextDescribedById:r,screenReaderInstructions:l=Jg}=e;const{announce:s,announcement:i}=Yg(),o=vl("DndLiveRegion"),[a,c]=w.useState(!1);if(w.useEffect(()=>{c(!0)},[]),Gg(w.useMemo(()=>({onDragStart(f){let{active:h}=f;s(n.onDragStart({active:h}))},onDragMove(f){let{active:h,over:v}=f;n.onDragMove&&s(n.onDragMove({active:h,over:v}))},onDragOver(f){let{active:h,over:v}=f;s(n.onDragOver({active:h,over:v}))},onDragEnd(f){let{active:h,over:v}=f;s(n.onDragEnd({active:h,over:v}))},onDragCancel(f){let{active:h,over:v}=f;s(n.onDragCancel({active:h,over:v}))}}),[s,n])),!a)return null;const d=ve.createElement(ve.Fragment,null,ve.createElement(Qg,{id:r,value:l.draggable}),ve.createElement(Kg,{id:o,announcement:i}));return t?$t.createPortal(d,t):d}var te;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(te||(te={}));function Es(){}function Zu(e,n){return w.useMemo(()=>({sensor:e,options:n??{}}),[e,n])}function ev(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return w.useMemo(()=>[...n].filter(r=>r!=null),[...n])}const on=Object.freeze({x:0,y:0});function Mf(e,n){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function Of(e,n){let{data:{value:t}}=e,{data:{value:r}}=n;return t-r}function nv(e,n){let{data:{value:t}}=e,{data:{value:r}}=n;return r-t}function qu(e){let{left:n,top:t,height:r,width:l}=e;return[{x:n,y:t},{x:n+l,y:t},{x:n,y:t+r},{x:n+l,y:t+r}]}function Af(e,n){if(!e||e.length===0)return null;const[t]=e;return t[n]}function ec(e,n,t){return n===void 0&&(n=e.left),t===void 0&&(t=e.top),{x:n+e.width*.5,y:t+e.height*.5}}const tv=e=>{let{collisionRect:n,droppableRects:t,droppableContainers:r}=e;const l=ec(n,n.left,n.top),s=[];for(const i of r){const{id:o}=i,a=t.get(o);if(a){const c=Mf(ec(a),l);s.push({id:o,data:{droppableContainer:i,value:c}})}}return s.sort(Of)},rv=e=>{let{collisionRect:n,droppableRects:t,droppableContainers:r}=e;const l=qu(n),s=[];for(const i of r){const{id:o}=i,a=t.get(o);if(a){const c=qu(a),d=l.reduce((h,v,y)=>h+Mf(c[y],v),0),f=Number((d/4).toFixed(4));s.push({id:o,data:{droppableContainer:i,value:f}})}}return s.sort(Of)};function lv(e,n){const t=Math.max(n.top,e.top),r=Math.max(n.left,e.left),l=Math.min(n.left+n.width,e.left+e.width),s=Math.min(n.top+n.height,e.top+e.height),i=l-r,o=s-t;if(r<l&&t<s){const a=n.width*n.height,c=e.width*e.height,d=i*o,f=d/(a+c-d);return Number(f.toFixed(4))}return 0}const sv=e=>{let{collisionRect:n,droppableRects:t,droppableContainers:r}=e;const l=[];for(const s of r){const{id:i}=s,o=t.get(i);if(o){const a=lv(o,n);a>0&&l.push({id:i,data:{droppableContainer:s,value:a}})}}return l.sort(nv)};function iv(e,n,t){return{...e,scaleX:n&&t?n.width/t.width:1,scaleY:n&&t?n.height/t.height:1}}function Ff(e,n){return e&&n?{x:e.left-n.left,y:e.top-n.top}:on}function ov(e){return function(t){for(var r=arguments.length,l=new Array(r>1?r-1:0),s=1;s<r;s++)l[s-1]=arguments[s];return l.reduce((i,o)=>({...i,top:i.top+e*o.y,bottom:i.bottom+e*o.y,left:i.left+e*o.x,right:i.right+e*o.x}),{...t})}}const av=ov(1);function uv(e){if(e.startsWith("matrix3d(")){const n=e.slice(9,-1).split(/, /);return{x:+n[12],y:+n[13],scaleX:+n[0],scaleY:+n[5]}}else if(e.startsWith("matrix(")){const n=e.slice(7,-1).split(/, /);return{x:+n[4],y:+n[5],scaleX:+n[0],scaleY:+n[3]}}return null}function cv(e,n,t){const r=uv(n);if(!r)return e;const{scaleX:l,scaleY:s,x:i,y:o}=r,a=e.left-i-(1-l)*parseFloat(t),c=e.top-o-(1-s)*parseFloat(t.slice(t.indexOf(" ")+1)),d=l?e.width/l:e.width,f=s?e.height/s:e.height;return{width:d,height:f,top:c,right:a+d,bottom:c+f,left:a}}const dv={ignoreTransform:!1};function cr(e,n){n===void 0&&(n=dv);let t=e.getBoundingClientRect();if(n.ignoreTransform){const{transform:c,transformOrigin:d}=Te(e).getComputedStyle(e);c&&(t=cv(t,c,d))}const{top:r,left:l,width:s,height:i,bottom:o,right:a}=t;return{top:r,left:l,width:s,height:i,bottom:o,right:a}}function nc(e){return cr(e,{ignoreTransform:!0})}function fv(e){const n=e.innerWidth,t=e.innerHeight;return{top:0,left:0,right:n,bottom:t,width:n,height:t}}function pv(e,n){return n===void 0&&(n=Te(e).getComputedStyle(e)),n.position==="fixed"}function hv(e,n){n===void 0&&(n=Te(e).getComputedStyle(e));const t=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(l=>{const s=n[l];return typeof s=="string"?t.test(s):!1})}function Vs(e,n){const t=[];function r(l){if(n!=null&&t.length>=n||!l)return t;if(Sa(l)&&l.scrollingElement!=null&&!t.includes(l.scrollingElement))return t.push(l.scrollingElement),t;if(!ml(l)||_f(l)||t.includes(l))return t;const s=Te(e).getComputedStyle(l);return l!==e&&hv(l,s)&&t.push(l),pv(l,s)?t:r(l.parentNode)}return e?r(e):t}function Uf(e){const[n]=Vs(e,1);return n??null}function Ci(e){return!Ws||!e?null:ar(e)?e:ka(e)?Sa(e)||e===ur(e).scrollingElement?window:ml(e)?e:null:null}function Hf(e){return ar(e)?e.scrollX:e.scrollLeft}function $f(e){return ar(e)?e.scrollY:e.scrollTop}function Co(e){return{x:Hf(e),y:$f(e)}}var se;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(se||(se={}));function Bf(e){return!Ws||!e?!1:e===document.scrollingElement}function Wf(e){const n={x:0,y:0},t=Bf(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-t.width,y:e.scrollHeight-t.height},l=e.scrollTop<=n.y,s=e.scrollLeft<=n.x,i=e.scrollTop>=r.y,o=e.scrollLeft>=r.x;return{isTop:l,isLeft:s,isBottom:i,isRight:o,maxScroll:r,minScroll:n}}const mv={x:.2,y:.2};function gv(e,n,t,r,l){let{top:s,left:i,right:o,bottom:a}=t;r===void 0&&(r=10),l===void 0&&(l=mv);const{isTop:c,isBottom:d,isLeft:f,isRight:h}=Wf(e),v={x:0,y:0},y={x:0,y:0},x={height:n.height*l.y,width:n.width*l.x};return!c&&s<=n.top+x.height?(v.y=se.Backward,y.y=r*Math.abs((n.top+x.height-s)/x.height)):!d&&a>=n.bottom-x.height&&(v.y=se.Forward,y.y=r*Math.abs((n.bottom-x.height-a)/x.height)),!h&&o>=n.right-x.width?(v.x=se.Forward,y.x=r*Math.abs((n.right-x.width-o)/x.width)):!f&&i<=n.left+x.width&&(v.x=se.Backward,y.x=r*Math.abs((n.left+x.width-i)/x.width)),{direction:v,speed:y}}function vv(e){if(e===document.scrollingElement){const{innerWidth:s,innerHeight:i}=window;return{top:0,left:0,right:s,bottom:i,width:s,height:i}}const{top:n,left:t,right:r,bottom:l}=e.getBoundingClientRect();return{top:n,left:t,right:r,bottom:l,width:e.clientWidth,height:e.clientHeight}}function Vf(e){return e.reduce((n,t)=>Gt(n,Co(t)),on)}function yv(e){return e.reduce((n,t)=>n+Hf(t),0)}function xv(e){return e.reduce((n,t)=>n+$f(t),0)}function wv(e,n){if(n===void 0&&(n=cr),!e)return;const{top:t,left:r,bottom:l,right:s}=n(e);Uf(e)&&(l<=0||s<=0||t>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const bv=[["x",["left","right"],yv],["y",["top","bottom"],xv]];class Na{constructor(n,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=Vs(t),l=Vf(r);this.rect={...n},this.width=n.width,this.height=n.height;for(const[s,i,o]of bv)for(const a of i)Object.defineProperty(this,a,{get:()=>{const c=o(r),d=l[s]-c;return this.rect[a]+d},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Ar{constructor(n){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(t=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...t)})},this.target=n}add(n,t,r){var l;(l=this.target)==null||l.addEventListener(n,t,r),this.listeners.push([n,t,r])}}function kv(e){const{EventTarget:n}=Te(e);return e instanceof n?e:ur(e)}function Ni(e,n){const t=Math.abs(e.x),r=Math.abs(e.y);return typeof n=="number"?Math.sqrt(t**2+r**2)>n:"x"in n&&"y"in n?t>n.x&&r>n.y:"x"in n?t>n.x:"y"in n?r>n.y:!1}var Ve;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(Ve||(Ve={}));function tc(e){e.preventDefault()}function Sv(e){e.stopPropagation()}var O;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(O||(O={}));const Qf={start:[O.Space,O.Enter],cancel:[O.Esc],end:[O.Space,O.Enter,O.Tab]},Ev=(e,n)=>{let{currentCoordinates:t}=n;switch(e.code){case O.Right:return{...t,x:t.x+25};case O.Left:return{...t,x:t.x-25};case O.Down:return{...t,y:t.y+25};case O.Up:return{...t,y:t.y-25}}};class ja{constructor(n){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=n;const{event:{target:t}}=n;this.props=n,this.listeners=new Ar(ur(t)),this.windowListeners=new Ar(Te(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Ve.Resize,this.handleCancel),this.windowListeners.add(Ve.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Ve.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:n,onStart:t}=this.props,r=n.node.current;r&&wv(r),t(on)}handleKeyDown(n){if(Ca(n)){const{active:t,context:r,options:l}=this.props,{keyboardCodes:s=Qf,coordinateGetter:i=Ev,scrollBehavior:o="smooth"}=l,{code:a}=n;if(s.end.includes(a)){this.handleEnd(n);return}if(s.cancel.includes(a)){this.handleCancel(n);return}const{collisionRect:c}=r.current,d=c?{x:c.left,y:c.top}:on;this.referenceCoordinates||(this.referenceCoordinates=d);const f=i(n,{active:t,context:r.current,currentCoordinates:d});if(f){const h=il(f,d),v={x:0,y:0},{scrollableAncestors:y}=r.current;for(const x of y){const k=n.code,{isTop:m,isRight:p,isLeft:g,isBottom:b,maxScroll:S,minScroll:j}=Wf(x),C=vv(x),E={x:Math.min(k===O.Right?C.right-C.width/2:C.right,Math.max(k===O.Right?C.left:C.left+C.width/2,f.x)),y:Math.min(k===O.Down?C.bottom-C.height/2:C.bottom,Math.max(k===O.Down?C.top:C.top+C.height/2,f.y))},L=k===O.Right&&!p||k===O.Left&&!g,P=k===O.Down&&!b||k===O.Up&&!m;if(L&&E.x!==f.x){const M=x.scrollLeft+h.x,oe=k===O.Right&&M<=S.x||k===O.Left&&M>=j.x;if(oe&&!h.y){x.scrollTo({left:M,behavior:o});return}oe?v.x=x.scrollLeft-M:v.x=k===O.Right?x.scrollLeft-S.x:x.scrollLeft-j.x,v.x&&x.scrollBy({left:-v.x,behavior:o});break}else if(P&&E.y!==f.y){const M=x.scrollTop+h.y,oe=k===O.Down&&M<=S.y||k===O.Up&&M>=j.y;if(oe&&!h.x){x.scrollTo({top:M,behavior:o});return}oe?v.y=x.scrollTop-M:v.y=k===O.Down?x.scrollTop-S.y:x.scrollTop-j.y,v.y&&x.scrollBy({top:-v.y,behavior:o});break}}this.handleMove(n,Gt(il(f,this.referenceCoordinates),v))}}}handleMove(n,t){const{onMove:r}=this.props;n.preventDefault(),r(t)}handleEnd(n){const{onEnd:t}=this.props;n.preventDefault(),this.detach(),t()}handleCancel(n){const{onCancel:t}=this.props;n.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}ja.activators=[{eventName:"onKeyDown",handler:(e,n,t)=>{let{keyboardCodes:r=Qf,onActivation:l}=n,{active:s}=t;const{code:i}=e.nativeEvent;if(r.start.includes(i)){const o=s.activatorNode.current;return o&&e.target!==o?!1:(e.preventDefault(),l==null||l({event:e.nativeEvent}),!0)}return!1}}];function rc(e){return!!(e&&"distance"in e)}function lc(e){return!!(e&&"delay"in e)}class Da{constructor(n,t,r){var l;r===void 0&&(r=kv(n.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=n,this.events=t;const{event:s}=n,{target:i}=s;this.props=n,this.events=t,this.document=ur(i),this.documentListeners=new Ar(this.document),this.listeners=new Ar(r),this.windowListeners=new Ar(Te(i)),this.initialCoordinates=(l=Eo(s))!=null?l:on,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:n,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;if(this.listeners.add(n.move.name,this.handleMove,{passive:!1}),this.listeners.add(n.end.name,this.handleEnd),n.cancel&&this.listeners.add(n.cancel.name,this.handleCancel),this.windowListeners.add(Ve.Resize,this.handleCancel),this.windowListeners.add(Ve.DragStart,tc),this.windowListeners.add(Ve.VisibilityChange,this.handleCancel),this.windowListeners.add(Ve.ContextMenu,tc),this.documentListeners.add(Ve.Keydown,this.handleKeydown),t){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(lc(t)){this.timeoutId=setTimeout(this.handleStart,t.delay),this.handlePending(t);return}if(rc(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(n,t){const{active:r,onPending:l}=this.props;l(r,n,this.initialCoordinates,t)}handleStart(){const{initialCoordinates:n}=this,{onStart:t}=this.props;n&&(this.activated=!0,this.documentListeners.add(Ve.Click,Sv,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Ve.SelectionChange,this.removeTextSelection),t(n))}handleMove(n){var t;const{activated:r,initialCoordinates:l,props:s}=this,{onMove:i,options:{activationConstraint:o}}=s;if(!l)return;const a=(t=Eo(n))!=null?t:on,c=il(l,a);if(!r&&o){if(rc(o)){if(o.tolerance!=null&&Ni(c,o.tolerance))return this.handleCancel();if(Ni(c,o.distance))return this.handleStart()}if(lc(o)&&Ni(c,o.tolerance))return this.handleCancel();this.handlePending(o,c);return}n.cancelable&&n.preventDefault(),i(a)}handleEnd(){const{onAbort:n,onEnd:t}=this.props;this.detach(),this.activated||n(this.props.active),t()}handleCancel(){const{onAbort:n,onCancel:t}=this.props;this.detach(),this.activated||n(this.props.active),t()}handleKeydown(n){n.code===O.Esc&&this.handleCancel()}removeTextSelection(){var n;(n=this.document.getSelection())==null||n.removeAllRanges()}}const Cv={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class Ra extends Da{constructor(n){const{event:t}=n,r=ur(t.target);super(n,Cv,r)}}Ra.activators=[{eventName:"onPointerDown",handler:(e,n)=>{let{nativeEvent:t}=e,{onActivation:r}=n;return!t.isPrimary||t.button!==0?!1:(r==null||r({event:t}),!0)}}];const Nv={move:{name:"mousemove"},end:{name:"mouseup"}};var No;(function(e){e[e.RightClick=2]="RightClick"})(No||(No={}));class jv extends Da{constructor(n){super(n,Nv,ur(n.event.target))}}jv.activators=[{eventName:"onMouseDown",handler:(e,n)=>{let{nativeEvent:t}=e,{onActivation:r}=n;return t.button===No.RightClick?!1:(r==null||r({event:t}),!0)}}];const ji={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class Dv extends Da{constructor(n){super(n,ji)}static setup(){return window.addEventListener(ji.move.name,n,{capture:!1,passive:!1}),function(){window.removeEventListener(ji.move.name,n)};function n(){}}}Dv.activators=[{eventName:"onTouchStart",handler:(e,n)=>{let{nativeEvent:t}=e,{onActivation:r}=n;const{touches:l}=t;return l.length>1?!1:(r==null||r({event:t}),!0)}}];var Fr;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(Fr||(Fr={}));var Cs;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(Cs||(Cs={}));function Rv(e){let{acceleration:n,activator:t=Fr.Pointer,canScroll:r,draggingRect:l,enabled:s,interval:i=5,order:o=Cs.TreeOrder,pointerCoordinates:a,scrollableAncestors:c,scrollableAncestorRects:d,delta:f,threshold:h}=e;const v=zv({delta:f,disabled:!s}),[y,x]=Hg(),k=w.useRef({x:0,y:0}),m=w.useRef({x:0,y:0}),p=w.useMemo(()=>{switch(t){case Fr.Pointer:return a?{top:a.y,bottom:a.y,left:a.x,right:a.x}:null;case Fr.DraggableRect:return l}},[t,l,a]),g=w.useRef(null),b=w.useCallback(()=>{const j=g.current;if(!j)return;const C=k.current.x*m.current.x,E=k.current.y*m.current.y;j.scrollBy(C,E)},[]),S=w.useMemo(()=>o===Cs.TreeOrder?[...c].reverse():c,[o,c]);w.useEffect(()=>{if(!s||!c.length||!p){x();return}for(const j of S){if((r==null?void 0:r(j))===!1)continue;const C=c.indexOf(j),E=d[C];if(!E)continue;const{direction:L,speed:P}=gv(j,E,p,n,h);for(const M of["x","y"])v[M][L[M]]||(P[M]=0,L[M]=0);if(P.x>0||P.y>0){x(),g.current=j,y(b,i),k.current=P,m.current=L;return}}k.current={x:0,y:0},m.current={x:0,y:0},x()},[n,b,r,x,s,i,JSON.stringify(p),JSON.stringify(v),y,c,S,d,JSON.stringify(h)])}const Pv={x:{[se.Backward]:!1,[se.Forward]:!1},y:{[se.Backward]:!1,[se.Forward]:!1}};function zv(e){let{delta:n,disabled:t}=e;const r=So(n);return gl(l=>{if(t||!r||!l)return Pv;const s={x:Math.sign(n.x-r.x),y:Math.sign(n.y-r.y)};return{x:{[se.Backward]:l.x[se.Backward]||s.x===-1,[se.Forward]:l.x[se.Forward]||s.x===1},y:{[se.Backward]:l.y[se.Backward]||s.y===-1,[se.Forward]:l.y[se.Forward]||s.y===1}}},[t,n,r])}function Tv(e,n){const t=n!=null?e.get(n):void 0,r=t?t.node.current:null;return gl(l=>{var s;return n==null?null:(s=r??l)!=null?s:null},[r,n])}function _v(e,n){return w.useMemo(()=>e.reduce((t,r)=>{const{sensor:l}=r,s=l.activators.map(i=>({eventName:i.eventName,handler:n(i.handler,r)}));return[...t,...s]},[]),[e,n])}var al;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(al||(al={}));var jo;(function(e){e.Optimized="optimized"})(jo||(jo={}));const sc=new Map;function Lv(e,n){let{dragging:t,dependencies:r,config:l}=n;const[s,i]=w.useState(null),{frequency:o,measure:a,strategy:c}=l,d=w.useRef(e),f=k(),h=sl(f),v=w.useCallback(function(m){m===void 0&&(m=[]),!h.current&&i(p=>p===null?m:p.concat(m.filter(g=>!p.includes(g))))},[h]),y=w.useRef(null),x=gl(m=>{if(f&&!t)return sc;if(!m||m===sc||d.current!==e||s!=null){const p=new Map;for(let g of e){if(!g)continue;if(s&&s.length>0&&!s.includes(g.id)&&g.rect.current){p.set(g.id,g.rect.current);continue}const b=g.node.current,S=b?new Na(a(b),b):null;g.rect.current=S,S&&p.set(g.id,S)}return p}return m},[e,s,t,f,a]);return w.useEffect(()=>{d.current=e},[e]),w.useEffect(()=>{f||v()},[t,f]),w.useEffect(()=>{s&&s.length>0&&i(null)},[JSON.stringify(s)]),w.useEffect(()=>{f||typeof o!="number"||y.current!==null||(y.current=setTimeout(()=>{v(),y.current=null},o))},[o,f,v,...r]),{droppableRects:x,measureDroppableContainers:v,measuringScheduled:s!=null};function k(){switch(c){case al.Always:return!1;case al.BeforeDragging:return t;default:return!t}}}function Kf(e,n){return gl(t=>e?t||(typeof n=="function"?n(e):e):null,[n,e])}function Iv(e,n){return Kf(e,n)}function Mv(e){let{callback:n,disabled:t}=e;const r=Ea(n),l=w.useMemo(()=>{if(t||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:s}=window;return new s(r)},[r,t]);return w.useEffect(()=>()=>l==null?void 0:l.disconnect(),[l]),l}function Qs(e){let{callback:n,disabled:t}=e;const r=Ea(n),l=w.useMemo(()=>{if(t||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:s}=window;return new s(r)},[t]);return w.useEffect(()=>()=>l==null?void 0:l.disconnect(),[l]),l}function Ov(e){return new Na(cr(e),e)}function ic(e,n,t){n===void 0&&(n=Ov);const[r,l]=w.useState(null);function s(){l(a=>{if(!e)return null;if(e.isConnected===!1){var c;return(c=a??t)!=null?c:null}const d=n(e);return JSON.stringify(a)===JSON.stringify(d)?a:d})}const i=Mv({callback(a){if(e)for(const c of a){const{type:d,target:f}=c;if(d==="childList"&&f instanceof HTMLElement&&f.contains(e)){s();break}}}}),o=Qs({callback:s});return gn(()=>{s(),e?(o==null||o.observe(e),i==null||i.observe(document.body,{childList:!0,subtree:!0})):(o==null||o.disconnect(),i==null||i.disconnect())},[e]),r}function Av(e){const n=Kf(e);return Ff(e,n)}const oc=[];function Fv(e){const n=w.useRef(e),t=gl(r=>e?r&&r!==oc&&e&&n.current&&e.parentNode===n.current.parentNode?r:Vs(e):oc,[e]);return w.useEffect(()=>{n.current=e},[e]),t}function Uv(e){const[n,t]=w.useState(null),r=w.useRef(e),l=w.useCallback(s=>{const i=Ci(s.target);i&&t(o=>o?(o.set(i,Co(i)),new Map(o)):null)},[]);return w.useEffect(()=>{const s=r.current;if(e!==s){i(s);const o=e.map(a=>{const c=Ci(a);return c?(c.addEventListener("scroll",l,{passive:!0}),[c,Co(c)]):null}).filter(a=>a!=null);t(o.length?new Map(o):null),r.current=e}return()=>{i(e),i(s)};function i(o){o.forEach(a=>{const c=Ci(a);c==null||c.removeEventListener("scroll",l)})}},[l,e]),w.useMemo(()=>e.length?n?Array.from(n.values()).reduce((s,i)=>Gt(s,i),on):Vf(e):on,[e,n])}function ac(e,n){n===void 0&&(n=[]);const t=w.useRef(null);return w.useEffect(()=>{t.current=null},n),w.useEffect(()=>{const r=e!==on;r&&!t.current&&(t.current=e),!r&&t.current&&(t.current=null)},[e]),t.current?il(e,t.current):on}function Hv(e){w.useEffect(()=>{if(!Ws)return;const n=e.map(t=>{let{sensor:r}=t;return r.setup==null?void 0:r.setup()});return()=>{for(const t of n)t==null||t()}},e.map(n=>{let{sensor:t}=n;return t}))}function $v(e,n){return w.useMemo(()=>e.reduce((t,r)=>{let{eventName:l,handler:s}=r;return t[l]=i=>{s(i,n)},t},{}),[e,n])}function Yf(e){return w.useMemo(()=>e?fv(e):null,[e])}const uc=[];function Bv(e,n){n===void 0&&(n=cr);const[t]=e,r=Yf(t?Te(t):null),[l,s]=w.useState(uc);function i(){s(()=>e.length?e.map(a=>Bf(a)?r:new Na(n(a),a)):uc)}const o=Qs({callback:i});return gn(()=>{o==null||o.disconnect(),i(),e.forEach(a=>o==null?void 0:o.observe(a))},[e]),l}function Wv(e){if(!e)return null;if(e.children.length>1)return e;const n=e.children[0];return ml(n)?n:e}function Vv(e){let{measure:n}=e;const[t,r]=w.useState(null),l=w.useCallback(c=>{for(const{target:d}of c)if(ml(d)){r(f=>{const h=n(d);return f?{...f,width:h.width,height:h.height}:h});break}},[n]),s=Qs({callback:l}),i=w.useCallback(c=>{const d=Wv(c);s==null||s.disconnect(),d&&(s==null||s.observe(d)),r(d?n(d):null)},[n,s]),[o,a]=Ss(i);return w.useMemo(()=>({nodeRef:o,rect:t,setRef:a}),[t,o,a])}const Qv=[{sensor:Ra,options:{}},{sensor:ja,options:{}}],Kv={current:{}},Zl={draggable:{measure:nc},droppable:{measure:nc,strategy:al.WhileDragging,frequency:jo.Optimized},dragOverlay:{measure:cr}};class Ur extends Map{get(n){var t;return n!=null&&(t=super.get(n))!=null?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(n=>{let{disabled:t}=n;return!t})}getNodeFor(n){var t,r;return(t=(r=this.get(n))==null?void 0:r.node.current)!=null?t:void 0}}const Yv={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Ur,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Es},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Zl,measureDroppableContainers:Es,windowRect:null,measuringScheduled:!1},Gv={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Es,draggableNodes:new Map,over:null,measureDroppableContainers:Es},Ks=w.createContext(Gv),Gf=w.createContext(Yv);function Xv(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Ur}}}function Jv(e,n){switch(n.type){case te.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:n.initialCoordinates,active:n.active}};case te.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:n.coordinates.x-e.draggable.initialCoordinates.x,y:n.coordinates.y-e.draggable.initialCoordinates.y}}};case te.DragEnd:case te.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case te.RegisterDroppable:{const{element:t}=n,{id:r}=t,l=new Ur(e.droppable.containers);return l.set(r,t),{...e,droppable:{...e.droppable,containers:l}}}case te.SetDroppableDisabled:{const{id:t,key:r,disabled:l}=n,s=e.droppable.containers.get(t);if(!s||r!==s.key)return e;const i=new Ur(e.droppable.containers);return i.set(t,{...s,disabled:l}),{...e,droppable:{...e.droppable,containers:i}}}case te.UnregisterDroppable:{const{id:t,key:r}=n,l=e.droppable.containers.get(t);if(!l||r!==l.key)return e;const s=new Ur(e.droppable.containers);return s.delete(t),{...e,droppable:{...e.droppable,containers:s}}}default:return e}}function Zv(e){let{disabled:n}=e;const{active:t,activatorEvent:r,draggableNodes:l}=w.useContext(Ks),s=So(r),i=So(t==null?void 0:t.id);return w.useEffect(()=>{if(!n&&!r&&s&&i!=null){if(!Ca(s)||document.activeElement===s.target)return;const o=l.get(i);if(!o)return;const{activatorNode:a,node:c}=o;if(!a.current&&!c.current)return;requestAnimationFrame(()=>{for(const d of[a.current,c.current]){if(!d)continue;const f=Wg(d);if(f){f.focus();break}}})}},[r,n,l,i,s]),null}function qv(e,n){let{transform:t,...r}=n;return e!=null&&e.length?e.reduce((l,s)=>s({transform:l,...r}),t):t}function ey(e){return w.useMemo(()=>({draggable:{...Zl.draggable,...e==null?void 0:e.draggable},droppable:{...Zl.droppable,...e==null?void 0:e.droppable},dragOverlay:{...Zl.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function ny(e){let{activeNode:n,measure:t,initialRect:r,config:l=!0}=e;const s=w.useRef(!1),{x:i,y:o}=typeof l=="boolean"?{x:l,y:l}:l;gn(()=>{if(!i&&!o||!n){s.current=!1;return}if(s.current||!r)return;const c=n==null?void 0:n.node.current;if(!c||c.isConnected===!1)return;const d=t(c),f=Ff(d,r);if(i||(f.x=0),o||(f.y=0),s.current=!0,Math.abs(f.x)>0||Math.abs(f.y)>0){const h=Uf(c);h&&h.scrollBy({top:f.y,left:f.x})}},[n,i,o,r,t])}const Xf=w.createContext({...on,scaleX:1,scaleY:1});var $n;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})($n||($n={}));const ty=w.memo(function(n){var t,r,l,s;let{id:i,accessibility:o,autoScroll:a=!0,children:c,sensors:d=Qv,collisionDetection:f=sv,measuring:h,modifiers:v,...y}=n;const x=w.useReducer(Jv,void 0,Xv),[k,m]=x,[p,g]=Xg(),[b,S]=w.useState($n.Uninitialized),j=b===$n.Initialized,{draggable:{active:C,nodes:E,translate:L},droppable:{containers:P}}=k,M=C!=null?E.get(C):null,oe=w.useRef({initial:null,translated:null}),ae=w.useMemo(()=>{var he;return C!=null?{id:C,data:(he=M==null?void 0:M.data)!=null?he:Kv,rect:oe}:null},[C,M]),_e=w.useRef(null),[at,Tn]=w.useState(null),[ue,D]=w.useState(null),z=sl(y,Object.values(y)),_=vl("DndDescribedBy",i),$=w.useMemo(()=>P.getEnabled(),[P]),A=ey(h),{droppableRects:Ne,measureDroppableContainers:we,measuringScheduled:vn}=Lv($,{dragging:j,dependencies:[L.x,L.y],config:A.droppable}),q=Tv(E,C),yn=w.useMemo(()=>ue?Eo(ue):null,[ue]),_n=fp(),xn=Iv(q,A.draggable.measure);ny({activeNode:C!=null?E.get(C):null,config:_n.layoutShiftCompensation,initialRect:xn,measure:A.draggable.measure});const H=ic(q,A.draggable.measure,xn),fr=ic(q?q.parentElement:null),an=w.useRef({activatorEvent:null,active:null,activeNode:q,collisionRect:null,collisions:null,droppableRects:Ne,draggableNodes:E,draggingNode:null,draggingNodeRect:null,droppableContainers:P,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),St=P.getNodeFor((t=an.current.over)==null?void 0:t.id),wn=Vv({measure:A.dragOverlay.measure}),Et=(r=wn.nodeRef.current)!=null?r:q,Ct=j?(l=wn.rect)!=null?l:H:null,za=!!(wn.nodeRef.current&&wn.rect),Ta=Av(za?null:H),Ys=Yf(Et?Te(Et):null),Ln=Fv(j?St??q:null),xl=Bv(Ln),wl=qv(v,{transform:{x:L.x-Ta.x,y:L.y-Ta.y,scaleX:1,scaleY:1},activatorEvent:ue,active:ae,activeNodeRect:H,containerNodeRect:fr,draggingNodeRect:Ct,over:an.current.over,overlayNodeRect:wn.rect,scrollableAncestors:Ln,scrollableAncestorRects:xl,windowRect:Ys}),_a=yn?Gt(yn,L):null,La=Uv(Ln),sp=ac(La),ip=ac(La,[H]),Nt=Gt(wl,sp),jt=Ct?av(Ct,wl):null,pr=ae&&jt?f({active:ae,collisionRect:jt,droppableRects:Ne,droppableContainers:$,pointerCoordinates:_a}):null,Ia=Af(pr,"id"),[In,Ma]=w.useState(null),op=za?wl:Gt(wl,ip),ap=iv(op,(s=In==null?void 0:In.rect)!=null?s:null,H),Gs=w.useRef(null),Oa=w.useCallback((he,Le)=>{let{sensor:Ie,options:Mn}=Le;if(_e.current==null)return;const We=E.get(_e.current);if(!We)return;const Me=he.nativeEvent,un=new Ie({active:_e.current,activeNode:We,event:Me,options:Mn,context:an,onAbort(ce){if(!E.get(ce))return;const{onDragAbort:cn}=z.current,bn={id:ce};cn==null||cn(bn),p({type:"onDragAbort",event:bn})},onPending(ce,On,cn,bn){if(!E.get(ce))return;const{onDragPending:mr}=z.current,An={id:ce,constraint:On,initialCoordinates:cn,offset:bn};mr==null||mr(An),p({type:"onDragPending",event:An})},onStart(ce){const On=_e.current;if(On==null)return;const cn=E.get(On);if(!cn)return;const{onDragStart:bn}=z.current,hr={activatorEvent:Me,active:{id:On,data:cn.data,rect:oe}};$t.unstable_batchedUpdates(()=>{bn==null||bn(hr),S($n.Initializing),m({type:te.DragStart,initialCoordinates:ce,active:On}),p({type:"onDragStart",event:hr}),Tn(Gs.current),D(Me)})},onMove(ce){m({type:te.DragMove,coordinates:ce})},onEnd:Dt(te.DragEnd),onCancel:Dt(te.DragCancel)});Gs.current=un;function Dt(ce){return async function(){const{active:cn,collisions:bn,over:hr,scrollAdjustedTranslate:mr}=an.current;let An=null;if(cn&&mr){const{cancelDrop:gr}=z.current;An={activatorEvent:Me,active:cn,collisions:bn,delta:mr,over:hr},ce===te.DragEnd&&typeof gr=="function"&&await Promise.resolve(gr(An))&&(ce=te.DragCancel)}_e.current=null,$t.unstable_batchedUpdates(()=>{m({type:ce}),S($n.Uninitialized),Ma(null),Tn(null),D(null),Gs.current=null;const gr=ce===te.DragEnd?"onDragEnd":"onDragCancel";if(An){const Xs=z.current[gr];Xs==null||Xs(An),p({type:gr,event:An})}})}}},[E]),up=w.useCallback((he,Le)=>(Ie,Mn)=>{const We=Ie.nativeEvent,Me=E.get(Mn);if(_e.current!==null||!Me||We.dndKit||We.defaultPrevented)return;const un={active:Me};he(Ie,Le.options,un)===!0&&(We.dndKit={capturedBy:Le.sensor},_e.current=Mn,Oa(Ie,Le))},[E,Oa]),Aa=_v(d,up);Hv(d),gn(()=>{H&&b===$n.Initializing&&S($n.Initialized)},[H,b]),w.useEffect(()=>{const{onDragMove:he}=z.current,{active:Le,activatorEvent:Ie,collisions:Mn,over:We}=an.current;if(!Le||!Ie)return;const Me={active:Le,activatorEvent:Ie,collisions:Mn,delta:{x:Nt.x,y:Nt.y},over:We};$t.unstable_batchedUpdates(()=>{he==null||he(Me),p({type:"onDragMove",event:Me})})},[Nt.x,Nt.y]),w.useEffect(()=>{const{active:he,activatorEvent:Le,collisions:Ie,droppableContainers:Mn,scrollAdjustedTranslate:We}=an.current;if(!he||_e.current==null||!Le||!We)return;const{onDragOver:Me}=z.current,un=Mn.get(Ia),Dt=un&&un.rect.current?{id:un.id,rect:un.rect.current,data:un.data,disabled:un.disabled}:null,ce={active:he,activatorEvent:Le,collisions:Ie,delta:{x:We.x,y:We.y},over:Dt};$t.unstable_batchedUpdates(()=>{Ma(Dt),Me==null||Me(ce),p({type:"onDragOver",event:ce})})},[Ia]),gn(()=>{an.current={activatorEvent:ue,active:ae,activeNode:q,collisionRect:jt,collisions:pr,droppableRects:Ne,draggableNodes:E,draggingNode:Et,draggingNodeRect:Ct,droppableContainers:P,over:In,scrollableAncestors:Ln,scrollAdjustedTranslate:Nt},oe.current={initial:Ct,translated:jt}},[ae,q,pr,jt,E,Et,Ct,Ne,P,In,Ln,Nt]),Rv({..._n,delta:L,draggingRect:jt,pointerCoordinates:_a,scrollableAncestors:Ln,scrollableAncestorRects:xl});const cp=w.useMemo(()=>({active:ae,activeNode:q,activeNodeRect:H,activatorEvent:ue,collisions:pr,containerNodeRect:fr,dragOverlay:wn,draggableNodes:E,droppableContainers:P,droppableRects:Ne,over:In,measureDroppableContainers:we,scrollableAncestors:Ln,scrollableAncestorRects:xl,measuringConfiguration:A,measuringScheduled:vn,windowRect:Ys}),[ae,q,H,ue,pr,fr,wn,E,P,Ne,In,we,Ln,xl,A,vn,Ys]),dp=w.useMemo(()=>({activatorEvent:ue,activators:Aa,active:ae,activeNodeRect:H,ariaDescribedById:{draggable:_},dispatch:m,draggableNodes:E,over:In,measureDroppableContainers:we}),[ue,Aa,ae,H,m,_,E,In,we]);return ve.createElement(If.Provider,{value:g},ve.createElement(Ks.Provider,{value:dp},ve.createElement(Gf.Provider,{value:cp},ve.createElement(Xf.Provider,{value:ap},c)),ve.createElement(Zv,{disabled:(o==null?void 0:o.restoreFocus)===!1})),ve.createElement(qg,{...o,hiddenTextDescribedById:_}));function fp(){const he=(at==null?void 0:at.autoScrollEnabled)===!1,Le=typeof a=="object"?a.enabled===!1:a===!1,Ie=j&&!he&&!Le;return typeof a=="object"?{...a,enabled:Ie}:{enabled:Ie}}}),ry=w.createContext(null),cc="button",ly="Draggable";function sy(e){let{id:n,data:t,disabled:r=!1,attributes:l}=e;const s=vl(ly),{activators:i,activatorEvent:o,active:a,activeNodeRect:c,ariaDescribedById:d,draggableNodes:f,over:h}=w.useContext(Ks),{role:v=cc,roleDescription:y="draggable",tabIndex:x=0}=l??{},k=(a==null?void 0:a.id)===n,m=w.useContext(k?Xf:ry),[p,g]=Ss(),[b,S]=Ss(),j=$v(i,n),C=sl(t);gn(()=>(f.set(n,{id:n,key:s,node:p,activatorNode:b,data:C}),()=>{const L=f.get(n);L&&L.key===s&&f.delete(n)}),[f,n]);const E=w.useMemo(()=>({role:v,tabIndex:x,"aria-disabled":r,"aria-pressed":k&&v===cc?!0:void 0,"aria-roledescription":y,"aria-describedby":d.draggable}),[r,v,x,k,y,d.draggable]);return{active:a,activatorEvent:o,activeNodeRect:c,attributes:E,isDragging:k,listeners:r?void 0:j,node:p,over:h,setNodeRef:g,setActivatorNodeRef:S,transform:m}}function iy(){return w.useContext(Gf)}const oy="Droppable",ay={timeout:25};function uy(e){let{data:n,disabled:t=!1,id:r,resizeObserverConfig:l}=e;const s=vl(oy),{active:i,dispatch:o,over:a,measureDroppableContainers:c}=w.useContext(Ks),d=w.useRef({disabled:t}),f=w.useRef(!1),h=w.useRef(null),v=w.useRef(null),{disabled:y,updateMeasurementsFor:x,timeout:k}={...ay,...l},m=sl(x??r),p=w.useCallback(()=>{if(!f.current){f.current=!0;return}v.current!=null&&clearTimeout(v.current),v.current=setTimeout(()=>{c(Array.isArray(m.current)?m.current:[m.current]),v.current=null},k)},[k]),g=Qs({callback:p,disabled:y||!i}),b=w.useCallback((E,L)=>{g&&(L&&(g.unobserve(L),f.current=!1),E&&g.observe(E))},[g]),[S,j]=Ss(b),C=sl(n);return w.useEffect(()=>{!g||!S.current||(g.disconnect(),f.current=!1,g.observe(S.current))},[S,g]),w.useEffect(()=>(o({type:te.RegisterDroppable,element:{id:r,key:s,disabled:t,node:S,rect:h,data:C}}),()=>o({type:te.UnregisterDroppable,key:s,id:r})),[r]),w.useEffect(()=>{t!==d.current.disabled&&(o({type:te.SetDroppableDisabled,id:r,key:s,disabled:t}),d.current.disabled=t)},[r,s,t,o]),{active:i,rect:h,isOver:(a==null?void 0:a.id)===r,node:S,over:a,setNodeRef:j}}function Jf(e,n,t){const r=e.slice();return r.splice(t<0?r.length+t:t,0,r.splice(n,1)[0]),r}function cy(e,n){return e.reduce((t,r,l)=>{const s=n.get(r);return s&&(t[l]=s),t},Array(e.length))}function Al(e){return e!==null&&e>=0}function dy(e,n){if(e===n)return!0;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function fy(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const Zf=e=>{let{rects:n,activeIndex:t,overIndex:r,index:l}=e;const s=Jf(n,r,t),i=n[l],o=s[l];return!o||!i?null:{x:o.left-i.left,y:o.top-i.top,scaleX:o.width/i.width,scaleY:o.height/i.height}},Fl={scaleX:1,scaleY:1},py=e=>{var n;let{activeIndex:t,activeNodeRect:r,index:l,rects:s,overIndex:i}=e;const o=(n=s[t])!=null?n:r;if(!o)return null;if(l===t){const c=s[i];return c?{x:0,y:t<i?c.top+c.height-(o.top+o.height):c.top-o.top,...Fl}:null}const a=hy(s,l,t);return l>t&&l<=i?{x:0,y:-o.height-a,...Fl}:l<t&&l>=i?{x:0,y:o.height+a,...Fl}:{x:0,y:0,...Fl}};function hy(e,n,t){const r=e[n],l=e[n-1],s=e[n+1];return r?t<n?l?r.top-(l.top+l.height):s?s.top-(r.top+r.height):0:s?s.top-(r.top+r.height):l?r.top-(l.top+l.height):0:0}const qf="Sortable",ep=ve.createContext({activeIndex:-1,containerId:qf,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Zf,disabled:{draggable:!1,droppable:!1}});function my(e){let{children:n,id:t,items:r,strategy:l=Zf,disabled:s=!1}=e;const{active:i,dragOverlay:o,droppableRects:a,over:c,measureDroppableContainers:d}=iy(),f=vl(qf,t),h=o.rect!==null,v=w.useMemo(()=>r.map(j=>typeof j=="object"&&"id"in j?j.id:j),[r]),y=i!=null,x=i?v.indexOf(i.id):-1,k=c?v.indexOf(c.id):-1,m=w.useRef(v),p=!dy(v,m.current),g=k!==-1&&x===-1||p,b=fy(s);gn(()=>{p&&y&&d(v)},[p,v,y,d]),w.useEffect(()=>{m.current=v},[v]);const S=w.useMemo(()=>({activeIndex:x,containerId:f,disabled:b,disableTransforms:g,items:v,overIndex:k,useDragOverlay:h,sortedRects:cy(v,a),strategy:l}),[x,f,b.draggable,b.droppable,g,v,k,a,h,l]);return ve.createElement(ep.Provider,{value:S},n)}const gy=e=>{let{id:n,items:t,activeIndex:r,overIndex:l}=e;return Jf(t,r,l).indexOf(n)},vy=e=>{let{containerId:n,isSorting:t,wasDragging:r,index:l,items:s,newIndex:i,previousItems:o,previousContainerId:a,transition:c}=e;return!c||!r||o!==s&&l===i?!1:t?!0:i!==l&&n===a},yy={duration:200,easing:"ease"},np="transform",xy=ol.Transition.toString({property:np,duration:0,easing:"linear"}),wy={roleDescription:"sortable"};function by(e){let{disabled:n,index:t,node:r,rect:l}=e;const[s,i]=w.useState(null),o=w.useRef(t);return gn(()=>{if(!n&&t!==o.current&&r.current){const a=l.current;if(a){const c=cr(r.current,{ignoreTransform:!0}),d={x:a.left-c.left,y:a.top-c.top,scaleX:a.width/c.width,scaleY:a.height/c.height};(d.x||d.y)&&i(d)}}t!==o.current&&(o.current=t)},[n,t,r,l]),w.useEffect(()=>{s&&i(null)},[s]),s}function ky(e){let{animateLayoutChanges:n=vy,attributes:t,disabled:r,data:l,getNewIndex:s=gy,id:i,strategy:o,resizeObserverConfig:a,transition:c=yy}=e;const{items:d,containerId:f,activeIndex:h,disabled:v,disableTransforms:y,sortedRects:x,overIndex:k,useDragOverlay:m,strategy:p}=w.useContext(ep),g=Sy(r,v),b=d.indexOf(i),S=w.useMemo(()=>({sortable:{containerId:f,index:b,items:d},...l}),[f,l,b,d]),j=w.useMemo(()=>d.slice(d.indexOf(i)),[d,i]),{rect:C,node:E,isOver:L,setNodeRef:P}=uy({id:i,data:S,disabled:g.droppable,resizeObserverConfig:{updateMeasurementsFor:j,...a}}),{active:M,activatorEvent:oe,activeNodeRect:ae,attributes:_e,setNodeRef:at,listeners:Tn,isDragging:ue,over:D,setActivatorNodeRef:z,transform:_}=sy({id:i,data:S,attributes:{...wy,...t},disabled:g.draggable}),$=Ug(P,at),A=!!M,Ne=A&&!y&&Al(h)&&Al(k),we=!m&&ue,vn=we&&Ne?_:null,yn=Ne?vn??(o??p)({rects:x,activeNodeRect:ae,activeIndex:h,overIndex:k,index:b}):null,_n=Al(h)&&Al(k)?s({id:i,items:d,activeIndex:h,overIndex:k}):b,xn=M==null?void 0:M.id,H=w.useRef({activeId:xn,items:d,newIndex:_n,containerId:f}),fr=d!==H.current.items,an=n({active:M,containerId:f,isDragging:ue,isSorting:A,id:i,index:b,items:d,newIndex:H.current.newIndex,previousItems:H.current.items,previousContainerId:H.current.containerId,transition:c,wasDragging:H.current.activeId!=null}),St=by({disabled:!an,index:b,node:E,rect:C});return w.useEffect(()=>{A&&H.current.newIndex!==_n&&(H.current.newIndex=_n),f!==H.current.containerId&&(H.current.containerId=f),d!==H.current.items&&(H.current.items=d)},[A,_n,f,d]),w.useEffect(()=>{if(xn===H.current.activeId)return;if(xn&&!H.current.activeId){H.current.activeId=xn;return}const Et=setTimeout(()=>{H.current.activeId=xn},50);return()=>clearTimeout(Et)},[xn]),{active:M,activeIndex:h,attributes:_e,data:S,rect:C,index:b,newIndex:_n,items:d,isOver:L,isSorting:A,isDragging:ue,listeners:Tn,node:E,overIndex:k,over:D,setNodeRef:$,setActivatorNodeRef:z,setDroppableNodeRef:P,setDraggableNodeRef:at,transform:St??yn,transition:wn()};function wn(){if(St||fr&&H.current.newIndex===b)return xy;if(!(we&&!Ca(oe)||!c)&&(A||an))return ol.Transition.toString({...c,property:np})}}function Sy(e,n){var t,r;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(t=e==null?void 0:e.draggable)!=null?t:n.draggable,droppable:(r=e==null?void 0:e.droppable)!=null?r:n.droppable}}function Ns(e){if(!e)return!1;const n=e.data.current;return!!(n&&"sortable"in n&&typeof n.sortable=="object"&&"containerId"in n.sortable&&"items"in n.sortable&&"index"in n.sortable)}const Ey=[O.Down,O.Right,O.Up,O.Left],Cy=(e,n)=>{let{context:{active:t,collisionRect:r,droppableRects:l,droppableContainers:s,over:i,scrollableAncestors:o}}=n;if(Ey.includes(e.code)){if(e.preventDefault(),!t||!r)return;const a=[];s.getEnabled().forEach(f=>{if(!f||f!=null&&f.disabled)return;const h=l.get(f.id);if(h)switch(e.code){case O.Down:r.top<h.top&&a.push(f);break;case O.Up:r.top>h.top&&a.push(f);break;case O.Left:r.left>h.left&&a.push(f);break;case O.Right:r.left<h.left&&a.push(f);break}});const c=rv({collisionRect:r,droppableRects:l,droppableContainers:a});let d=Af(c,"id");if(d===(i==null?void 0:i.id)&&c.length>1&&(d=c[1].id),d!=null){const f=s.get(t.id),h=s.get(d),v=h?l.get(h.id):null,y=h==null?void 0:h.node.current;if(y&&v&&f&&h){const k=Vs(y).some((j,C)=>o[C]!==j),m=tp(f,h),p=Ny(f,h),g=k||!m?{x:0,y:0}:{x:p?r.width-v.width:0,y:p?r.height-v.height:0},b={x:v.left,y:v.top};return g.x&&g.y?b:il(b,g)}}}};function tp(e,n){return!Ns(e)||!Ns(n)?!1:e.data.current.sortable.containerId===n.data.current.sortable.containerId}function Ny(e,n){return!Ns(e)||!Ns(n)||!tp(e,n)?!1:e.data.current.sortable.index<n.data.current.sortable.index}function jy({id:e,children:n}){const{attributes:t,listeners:r,setNodeRef:l,transform:s,transition:i,isDragging:o}=ky({id:e}),a={transform:ol.Transform.toString(s),transition:i,opacity:o?.5:1};return u.jsxs("div",{ref:l,style:a,className:"relative",children:[u.jsx("div",{className:"absolute left-1 top-1/2 -translate-y-1/2 z-10",children:u.jsx("button",{...t,...r,className:"cursor-grab active:cursor-grabbing p-1 hover:bg-gray-200 rounded transition-colors",type:"button",children:u.jsx(Xm,{className:"w-4 h-4 text-gray-400"})})}),u.jsx("div",{className:"pl-8",children:n})]})}function ot({items:e,onReorder:n,renderItem:t}){const r=ev(Zu(Ra),Zu(ja,{coordinateGetter:Cy})),l=s=>{const{active:i,over:o}=s;if(o&&i.id!==o.id){const a=e.findIndex((d,f)=>f.toString()===i.id),c=e.findIndex((d,f)=>f.toString()===o.id);n(a,c)}};return e.length===0?null:u.jsx(ty,{sensors:r,collisionDetection:tv,onDragEnd:l,children:u.jsx(my,{items:e.map((s,i)=>i.toString()),strategy:py,children:u.jsx("div",{className:"space-y-3",children:e.map((s,i)=>u.jsx(jy,{id:i.toString(),children:t(s,i)},i))})})})}function Dy(){const e=T(d=>d.resume),n=T(d=>d.addEntry),t=T(d=>d.removeEntry),r=T(d=>d.updateEntry),l=T(d=>d.reorderEntry),s=()=>{n("work",{name:"",position:"",url:"",startDate:"",endDate:"",summary:"",highlights:[]})},i=d=>{const f=e.work[d];r("work",d,{highlights:[...f.highlights,""]})},o=(d,f,h)=>{const y=[...e.work[d].highlights];y[f]=h,r("work",d,{highlights:y})},a=(d,f)=>{const v=e.work[d].highlights.filter((y,x)=>x!==f);r("work",d,{highlights:v})},c=(d,f)=>u.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg bg-gray-50",children:[u.jsxs("div",{className:"flex justify-between items-start mb-4",children:[u.jsxs("h4",{className:"font-semibold text-gray-800",children:["Position ",f+1]}),u.jsx("button",{onClick:()=>t("work",f),className:"text-red-600 hover:text-red-800",children:u.jsx(Ze,{className:"w-4 h-4"})})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Position"}),u.jsx("input",{type:"text",value:d.position,onChange:h=>r("work",f,{position:h.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Senior Software Engineer"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Company"}),u.jsx("input",{type:"text",value:d.name,onChange:h=>r("work",f,{name:h.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Tech Corp"})]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Start Date"}),u.jsx("input",{type:"text",value:d.startDate,onChange:h=>r("work",f,{startDate:h.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Jan 2020"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"End Date"}),u.jsx("input",{type:"text",value:d.endDate,onChange:h=>r("work",f,{endDate:h.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Present"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Summary"}),u.jsx("textarea",{value:d.summary,onChange:h=>r("work",f,{summary:h.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",rows:2,placeholder:"Brief description of the role..."})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Key Achievements"}),u.jsx("div",{className:"space-y-2",children:d.highlights.map((h,v)=>u.jsxs("div",{className:"flex gap-2",children:[u.jsx("input",{type:"text",value:h,onChange:y=>o(f,v,y.target.value),className:"flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Achievement or responsibility..."}),u.jsx("button",{onClick:()=>a(f,v),className:"px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors",children:u.jsx(Ze,{className:"w-4 h-4"})})]},v))}),u.jsx("button",{onClick:()=>i(f),className:"mt-2 px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300 transition-colors",children:"+ Add Achievement"})]})]})]});return u.jsxs("div",{className:"space-y-6",children:[u.jsx(ot,{items:e.work,onReorder:(d,f)=>l("work",d,f),renderItem:c}),u.jsxs("button",{onClick:s,className:"w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2",children:[u.jsx(it,{className:"w-5 h-5"}),"Add Work Experience"]})]})}function Ry(){const e=T(o=>o.resume),n=T(o=>o.addEntry),t=T(o=>o.removeEntry),r=T(o=>o.updateEntry),l=T(o=>o.reorderEntry),s=()=>{n("education",{institution:"",url:"",area:"",studyType:"",startDate:"",endDate:"",score:""})},i=(o,a)=>u.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg bg-gray-50",children:[u.jsxs("div",{className:"flex justify-between items-start mb-4",children:[u.jsxs("h4",{className:"font-semibold text-gray-800",children:["Education ",a+1]}),u.jsx("button",{onClick:()=>t("education",a),className:"text-red-600 hover:text-red-800",children:u.jsx(Ze,{className:"w-4 h-4"})})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Institution"}),u.jsx("input",{type:"text",value:o.institution,onChange:c=>r("education",a,{institution:c.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"University of Example"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Degree Type"}),u.jsx("input",{type:"text",value:o.studyType,onChange:c=>r("education",a,{studyType:c.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Bachelor"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Field of Study"}),u.jsx("input",{type:"text",value:o.area,onChange:c=>r("education",a,{area:c.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Computer Science"})]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Start Date"}),u.jsx("input",{type:"text",value:o.startDate,onChange:c=>r("education",a,{startDate:c.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"2016"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"End Date"}),u.jsx("input",{type:"text",value:o.endDate,onChange:c=>r("education",a,{endDate:c.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"2020"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"GPA / Score"}),u.jsx("input",{type:"text",value:o.score,onChange:c=>r("education",a,{score:c.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"3.8"})]})]})]});return u.jsxs("div",{className:"space-y-6",children:[u.jsx(ot,{items:e.education,onReorder:(o,a)=>l("education",o,a),renderItem:i}),u.jsxs("button",{onClick:s,className:"w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2",children:[u.jsx(it,{className:"w-5 h-5"}),"Add Education"]})]})}function Py(){const e=T(d=>d.resume),n=T(d=>d.addEntry),t=T(d=>d.removeEntry),r=T(d=>d.updateEntry),l=T(d=>d.reorderEntry),s=()=>{n("skills",{name:"",level:"",keywords:[]})},i=d=>{const f=e.skills[d];r("skills",d,{keywords:[...f.keywords,""]})},o=(d,f,h)=>{const y=[...e.skills[d].keywords];y[f]=h,r("skills",d,{keywords:y})},a=(d,f)=>{const v=e.skills[d].keywords.filter((y,x)=>x!==f);r("skills",d,{keywords:v})},c=(d,f)=>u.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg bg-gray-50",children:[u.jsxs("div",{className:"flex justify-between items-start mb-4",children:[u.jsxs("h4",{className:"font-semibold text-gray-800",children:["Skill ",f+1]}),u.jsx("button",{onClick:()=>t("skills",f),className:"text-red-600 hover:text-red-800",children:u.jsx(Ze,{className:"w-4 h-4"})})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Skill Name"}),u.jsx("input",{type:"text",value:d.name,onChange:h=>r("skills",f,{name:h.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Web Development"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Proficiency Level"}),u.jsx("input",{type:"text",value:d.level,onChange:h=>r("skills",f,{level:h.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Expert"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Technologies/Keywords"}),u.jsx("div",{className:"space-y-2",children:d.keywords.map((h,v)=>u.jsxs("div",{className:"flex gap-2",children:[u.jsx("input",{type:"text",value:h,onChange:y=>o(f,v,y.target.value),className:"flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"React, TypeScript, etc."}),u.jsx("button",{onClick:()=>a(f,v),className:"px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors",children:u.jsx(Ze,{className:"w-4 h-4"})})]},v))}),u.jsx("button",{onClick:()=>i(f),className:"mt-2 px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300 transition-colors",children:"+ Add Keyword"})]})]})]});return u.jsxs("div",{className:"space-y-6",children:[u.jsx(ot,{items:e.skills,onReorder:(d,f)=>l("skills",d,f),renderItem:c}),u.jsxs("button",{onClick:s,className:"w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2",children:[u.jsx(it,{className:"w-5 h-5"}),"Add Skill"]})]})}function zy(){const e=T(d=>d.resume),n=T(d=>d.addEntry),t=T(d=>d.removeEntry),r=T(d=>d.updateEntry),l=T(d=>d.reorderEntry),s=()=>{n("volunteer",{organization:"",position:"",url:"",startDate:"",endDate:"",summary:"",highlights:[]})},i=d=>{const f=e.volunteer[d];r("volunteer",d,{highlights:[...f.highlights,""]})},o=(d,f,h)=>{const y=[...e.volunteer[d].highlights];y[f]=h,r("volunteer",d,{highlights:y})},a=(d,f)=>{const v=e.volunteer[d].highlights.filter((y,x)=>x!==f);r("volunteer",d,{highlights:v})},c=(d,f)=>u.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg bg-gray-50",children:[u.jsxs("div",{className:"flex justify-between items-start mb-4",children:[u.jsxs("h4",{className:"font-semibold text-gray-800",children:["Volunteer Role ",f+1]}),u.jsx("button",{onClick:()=>t("volunteer",f),className:"text-red-600 hover:text-red-800",children:u.jsx(Ze,{className:"w-4 h-4"})})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Position"}),u.jsx("input",{type:"text",value:d.position,onChange:h=>r("volunteer",f,{position:h.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Volunteer Coordinator"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Organization"}),u.jsx("input",{type:"text",value:d.organization,onChange:h=>r("volunteer",f,{organization:h.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Red Cross"})]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Start Date"}),u.jsx("input",{type:"text",value:d.startDate,onChange:h=>r("volunteer",f,{startDate:h.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Jan 2020"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"End Date"}),u.jsx("input",{type:"text",value:d.endDate,onChange:h=>r("volunteer",f,{endDate:h.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Present"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Summary"}),u.jsx("textarea",{value:d.summary,onChange:h=>r("volunteer",f,{summary:h.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",rows:2,placeholder:"Brief description of volunteer work..."})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Key Contributions"}),u.jsx("div",{className:"space-y-2",children:d.highlights.map((h,v)=>u.jsxs("div",{className:"flex gap-2",children:[u.jsx("input",{type:"text",value:h,onChange:y=>o(f,v,y.target.value),className:"flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Contribution or achievement..."}),u.jsx("button",{onClick:()=>a(f,v),className:"px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors",children:u.jsx(Ze,{className:"w-4 h-4"})})]},v))}),u.jsx("button",{onClick:()=>i(f),className:"mt-2 px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300 transition-colors",children:"+ Add Contribution"})]})]})]});return u.jsxs("div",{className:"space-y-6",children:[u.jsx(ot,{items:e.volunteer,onReorder:(d,f)=>l("volunteer",d,f),renderItem:c}),u.jsxs("button",{onClick:s,className:"w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2",children:[u.jsx(it,{className:"w-5 h-5"}),"Add Volunteer Work"]})]})}function Ty(){const e=T(o=>o.resume),n=T(o=>o.addEntry),t=T(o=>o.removeEntry),r=T(o=>o.updateEntry),l=T(o=>o.reorderEntry),s=()=>{n("languages",{language:"",fluency:""})},i=(o,a)=>u.jsxs("div",{className:"flex gap-3 items-start",children:[u.jsxs("div",{className:"flex-1",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Language"}),u.jsx("input",{type:"text",value:o.language,onChange:c=>r("languages",a,{language:c.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"English"})]}),u.jsxs("div",{className:"flex-1",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Fluency Level"}),u.jsxs("select",{value:o.fluency,onChange:c=>r("languages",a,{fluency:c.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[u.jsx("option",{value:"",children:"Select level"}),u.jsx("option",{value:"Native",children:"Native"}),u.jsx("option",{value:"Fluent",children:"Fluent"}),u.jsx("option",{value:"Professional",children:"Professional"}),u.jsx("option",{value:"Intermediate",children:"Intermediate"}),u.jsx("option",{value:"Elementary",children:"Elementary"})]})]}),u.jsx("button",{onClick:()=>t("languages",a),className:"mt-7 px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors",children:u.jsx(Ze,{className:"w-4 h-4"})})]});return u.jsxs("div",{className:"space-y-4",children:[u.jsx(ot,{items:e.languages,onReorder:(o,a)=>l("languages",o,a),renderItem:i}),u.jsxs("button",{onClick:s,className:"w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2",children:[u.jsx(it,{className:"w-5 h-5"}),"Add Language"]})]})}function _y(){const e=T(d=>d.resume),n=T(d=>d.addEntry),t=T(d=>d.removeEntry),r=T(d=>d.updateEntry),l=T(d=>d.reorderEntry),s=()=>{n("interests",{name:"",keywords:[]})},i=d=>{const f=e.interests[d];r("interests",d,{keywords:[...f.keywords,""]})},o=(d,f,h)=>{const y=[...e.interests[d].keywords];y[f]=h,r("interests",d,{keywords:y})},a=(d,f)=>{const v=e.interests[d].keywords.filter((y,x)=>x!==f);r("interests",d,{keywords:v})},c=(d,f)=>u.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg bg-gray-50",children:[u.jsxs("div",{className:"flex justify-between items-start mb-4",children:[u.jsxs("h4",{className:"font-semibold text-gray-800",children:["Interest ",f+1]}),u.jsx("button",{onClick:()=>t("interests",f),className:"text-red-600 hover:text-red-800",children:u.jsx(Ze,{className:"w-4 h-4"})})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Name"}),u.jsx("input",{type:"text",value:d.name,onChange:h=>r("interests",f,{name:h.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Photography, Hiking, etc."})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Related Topics"}),u.jsx("div",{className:"space-y-2",children:d.keywords.map((h,v)=>u.jsxs("div",{className:"flex gap-2",children:[u.jsx("input",{type:"text",value:h,onChange:y=>o(f,v,y.target.value),className:"flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Landscape, Portrait, etc."}),u.jsx("button",{onClick:()=>a(f,v),className:"px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors",children:u.jsx(Ze,{className:"w-4 h-4"})})]},v))}),u.jsx("button",{onClick:()=>i(f),className:"mt-2 px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300 transition-colors",children:"+ Add Topic"})]})]})]});return u.jsxs("div",{className:"space-y-6",children:[u.jsx(ot,{items:e.interests,onReorder:(d,f)=>l("interests",d,f),renderItem:c}),u.jsxs("button",{onClick:s,className:"w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2",children:[u.jsx(it,{className:"w-5 h-5"}),"Add Interest/Hobby"]})]})}function Ly(){const e=T(o=>o.resume),n=T(o=>o.addEntry),t=T(o=>o.removeEntry),r=T(o=>o.updateEntry),l=T(o=>o.reorderEntry),s=()=>{n("certifications",{name:"",date:"",issuer:"",url:""})},i=(o,a)=>u.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg bg-gray-50",children:[u.jsxs("div",{className:"flex justify-between items-start mb-4",children:[u.jsxs("h4",{className:"font-semibold text-gray-800",children:["Certification ",a+1]}),u.jsx("button",{onClick:()=>t("certifications",a),className:"text-red-600 hover:text-red-800",children:u.jsx(Ze,{className:"w-4 h-4"})})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Certification Name"}),u.jsx("input",{type:"text",value:o.name,onChange:c=>r("certifications",a,{name:c.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"AWS Certified Solutions Architect"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Issuer"}),u.jsx("input",{type:"text",value:o.issuer,onChange:c=>r("certifications",a,{issuer:c.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Amazon Web Services"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Date Obtained"}),u.jsx("input",{type:"text",value:o.date,onChange:c=>r("certifications",a,{date:c.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"March 2023"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Certificate URL (optional)"}),u.jsx("input",{type:"url",value:o.url,onChange:c=>r("certifications",a,{url:c.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"https://..."})]})]})]});return u.jsxs("div",{className:"space-y-6",children:[u.jsx(ot,{items:e.certifications,onReorder:(o,a)=>l("certifications",o,a),renderItem:i}),u.jsxs("button",{onClick:s,className:"w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2",children:[u.jsx(it,{className:"w-5 h-5"}),"Add Certification"]})]})}function Iy(){const e=T(o=>o.resume),n=T(o=>o.addEntry),t=T(o=>o.removeEntry),r=T(o=>o.updateEntry),l=T(o=>o.reorderEntry),s=()=>{n("publications",{name:"",publisher:"",releaseDate:"",url:"",summary:""})},i=(o,a)=>u.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg bg-gray-50",children:[u.jsxs("div",{className:"flex justify-between items-start mb-4",children:[u.jsxs("h4",{className:"font-semibold text-gray-800",children:["Publication ",a+1]}),u.jsx("button",{onClick:()=>t("publications",a),className:"text-red-600 hover:text-red-800",children:u.jsx(Ze,{className:"w-4 h-4"})})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Title"}),u.jsx("input",{type:"text",value:o.name,onChange:c=>r("publications",a,{name:c.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Research Paper Title"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Publisher"}),u.jsx("input",{type:"text",value:o.publisher,onChange:c=>r("publications",a,{publisher:c.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Journal or Conference"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Release Date"}),u.jsx("input",{type:"text",value:o.releaseDate,onChange:c=>r("publications",a,{releaseDate:c.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"2023"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"URL (optional)"}),u.jsx("input",{type:"url",value:o.url,onChange:c=>r("publications",a,{url:c.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"https://..."})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Summary"}),u.jsx("textarea",{value:o.summary,onChange:c=>r("publications",a,{summary:c.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",rows:2,placeholder:"Brief description of the publication..."})]})]})]});return u.jsxs("div",{className:"space-y-6",children:[u.jsx(ot,{items:e.publications,onReorder:(o,a)=>l("publications",o,a),renderItem:i}),u.jsxs("button",{onClick:s,className:"w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2",children:[u.jsx(it,{className:"w-5 h-5"}),"Add Publication"]})]})}const My=[{id:"modern",name:"Modern",description:"Clean, professional, two-column layout"},{id:"classic",name:"Classic",description:"Traditional, single-column, formal style"},{id:"minimal",name:"Minimal",description:"Ultra-clean, lots of white space"},{id:"creative",name:"Creative",description:"Bold colors, unique layout"}];function Oy(){const e=T(t=>t.resume),n=T(t=>t.updateSection);return u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{children:[u.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-3",children:[u.jsx(Zm,{className:"w-4 h-4 inline mr-1"}),"CV Template - Choose Your Style"]}),u.jsx("div",{className:"grid grid-cols-1 gap-4",children:My.map(t=>u.jsx("button",{onClick:()=>n("meta",{templateName:t.id}),className:`p-4 border-2 rounded-lg text-left transition-all ${e.meta.templateName===t.id?"border-blue-600 bg-blue-50 shadow-md":"border-gray-200 hover:border-blue-300 hover:shadow-sm"}`,children:u.jsxs("div",{className:"flex gap-4",children:[u.jsxs("div",{className:`w-32 h-40 border border-gray-300 rounded overflow-hidden flex-shrink-0 ${t.id==="modern"?"bg-white":t.id==="classic"?"bg-gray-50":t.id==="minimal"?"bg-white":"bg-gradient-to-br from-blue-500 to-purple-500"}`,children:[t.id==="modern"&&u.jsxs("div",{className:"p-2 text-[4px] leading-tight",children:[u.jsxs("div",{className:"flex gap-1 mb-1 pb-1 border-b border-blue-400",children:[u.jsx("div",{className:"w-4 h-4 rounded-full bg-gray-300"}),u.jsxs("div",{children:[u.jsx("div",{className:"h-1 w-12 bg-blue-600 mb-0.5"}),u.jsx("div",{className:"h-0.5 w-10 bg-gray-400"})]})]}),u.jsxs("div",{className:"mb-1",children:[u.jsx("div",{className:"h-1 w-8 bg-blue-600 mb-0.5"}),u.jsx("div",{className:"h-0.5 w-full bg-gray-300 mb-0.5"}),u.jsx("div",{className:"h-0.5 w-full bg-gray-300"})]}),u.jsx("div",{className:"flex gap-1",children:u.jsxs("div",{className:"flex-1",children:[u.jsx("div",{className:"h-0.5 w-full bg-blue-600 mb-0.5"}),u.jsx("div",{className:"px-1 py-0.5 bg-blue-100 rounded-sm mb-0.5",children:u.jsx("div",{className:"h-0.5 w-full bg-gray-400"})})]})})]}),t.id==="classic"&&u.jsxs("div",{className:"p-2 text-[4px] leading-tight text-center",children:[u.jsxs("div",{className:"mb-1",children:[u.jsx("div",{className:"h-1.5 w-16 bg-gray-800 mx-auto mb-0.5"}),u.jsx("div",{className:"h-0.5 w-12 bg-gray-600 mx-auto mb-0.5"}),u.jsx("div",{className:"h-0.5 w-14 bg-gray-500 mx-auto"})]}),u.jsxs("div",{className:"border-t border-gray-700 mb-1 pb-1",children:[u.jsx("div",{className:"h-0.5 w-10 bg-gray-800 mx-auto mb-0.5 mt-1"}),u.jsx("div",{className:"h-0.5 w-full bg-gray-400 mb-0.5"}),u.jsx("div",{className:"h-0.5 w-full bg-gray-400"})]}),u.jsx("div",{className:"h-0.5 w-10 bg-gray-800 mx-auto mb-0.5"})]}),t.id==="minimal"&&u.jsxs("div",{className:"p-3 text-[4px] leading-relaxed",children:[u.jsxs("div",{className:"mb-2",children:[u.jsx("div",{className:"h-1.5 w-14 bg-gray-400 mb-1"}),u.jsx("div",{className:"h-0.5 w-10 bg-gray-300 mb-1"}),u.jsx("div",{className:"h-0.5 w-12 bg-gray-300"})]}),u.jsxs("div",{className:"mb-2",children:[u.jsx("div",{className:"h-0.5 w-8 bg-gray-500 mb-1"}),u.jsx("div",{className:"h-0.5 w-full bg-gray-200 mb-0.5"}),u.jsx("div",{className:"h-0.5 w-full bg-gray-200"})]})]}),t.id==="creative"&&u.jsxs("div",{className:"text-[4px] leading-tight",children:[u.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-purple-600 p-2 text-white mb-1",children:u.jsxs("div",{className:"flex gap-1 items-center mb-0.5",children:[u.jsx("div",{className:"w-3 h-3 rounded-full bg-white border border-purple-300"}),u.jsxs("div",{children:[u.jsx("div",{className:"h-1 w-10 bg-white mb-0.5"}),u.jsx("div",{className:"h-0.5 w-8 bg-purple-200"})]})]})}),u.jsxs("div",{className:"p-2",children:[u.jsxs("div",{className:"border-l-2 border-blue-600 pl-1 mb-1",children:[u.jsx("div",{className:"h-0.5 w-8 bg-blue-600 mb-0.5"}),u.jsx("div",{className:"h-0.5 w-full bg-gray-300 mb-0.5"})]}),u.jsxs("div",{className:"flex gap-0.5",children:[u.jsx("div",{className:"px-1 py-0.5 bg-blue-500 rounded-sm",children:u.jsx("div",{className:"h-0.5 w-3 bg-white"})}),u.jsx("div",{className:"px-1 py-0.5 bg-purple-500 rounded-sm",children:u.jsx("div",{className:"h-0.5 w-3 bg-white"})})]})]})]})]}),u.jsxs("div",{className:"flex-1",children:[u.jsx("div",{className:"font-semibold text-gray-800 text-base mb-1",children:t.name}),u.jsx("div",{className:"text-sm text-gray-600 mb-2",children:t.description}),u.jsxs("div",{className:"flex flex-wrap gap-1",children:[t.id==="modern"&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded",children:"Professional"}),u.jsx("span",{className:"text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded",children:"ATS-Friendly"})]}),t.id==="classic"&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded",children:"Traditional"}),u.jsx("span",{className:"text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded",children:"ATS-Friendly"})]}),t.id==="minimal"&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded",children:"Clean"}),u.jsx("span",{className:"text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded",children:"ATS-Friendly"})]}),t.id==="creative"&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"text-xs px-2 py-0.5 bg-pink-100 text-pink-700 rounded",children:"Bold"}),u.jsx("span",{className:"text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded",children:"ATS-Friendly"})]})]})]}),e.meta.templateName===t.id&&u.jsx("div",{className:"flex items-center",children:u.jsx("div",{className:"w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center",children:u.jsx("svg",{className:"w-4 h-4 text-white",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:u.jsx("path",{d:"M5 13l4 4L19 7"})})})})]})},t.id))})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Theme Color"}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("input",{type:"color",value:e.meta.themeColor,onChange:t=>n("meta",{themeColor:t.target.value}),className:"w-20 h-10 border border-gray-300 rounded cursor-pointer"}),u.jsx("span",{className:"text-sm text-gray-600",children:e.meta.themeColor})]})]}),u.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg bg-gray-50",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold text-gray-800",children:"One Page Mode"}),u.jsx("p",{className:"text-sm text-gray-600",children:"Automatically adjust font size and spacing to fit CV on one page"})]}),u.jsx("button",{onClick:()=>n("meta",{onePageMode:!e.meta.onePageMode}),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${e.meta.onePageMode?"bg-blue-600":"bg-gray-300"}`,children:u.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${e.meta.onePageMode?"translate-x-6":"translate-x-1"}`})})]}),e.meta.onePageMode&&u.jsx("div",{className:"mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800",children:"⚠️ Note: If content is too much to fit on one page, a warning will appear during export."})]})]})}function Ay(){const[e,n]=w.useState("settings"),t=[{id:"settings",title:"Settings & Template",icon:u.jsx(eg,{className:"w-4 h-4"}),component:u.jsx(Oy,{})},{id:"basics",title:"Personal Information",icon:u.jsx(tg,{className:"w-4 h-4"}),component:u.jsx(Fg,{})},{id:"work",title:"Work Experience",icon:u.jsx($m,{className:"w-4 h-4"}),component:u.jsx(Dy,{})},{id:"education",title:"Education",icon:u.jsx(Gm,{className:"w-4 h-4"}),component:u.jsx(Ry,{})},{id:"skills",title:"Skills",icon:u.jsx(rg,{className:"w-4 h-4"}),component:u.jsx(Py,{})},{id:"volunteer",title:"Volunteer Work",icon:u.jsx(Jm,{className:"w-4 h-4"}),component:u.jsx(zy,{})},{id:"certifications",title:"Certifications",icon:u.jsx(Um,{className:"w-4 h-4"}),component:u.jsx(Ly,{})},{id:"publications",title:"Publications",icon:u.jsx(Hm,{className:"w-4 h-4"}),component:u.jsx(Iy,{})},{id:"languages",title:"Languages",icon:u.jsx(Ym,{className:"w-4 h-4"}),component:u.jsx(Ty,{})},{id:"interests",title:"Hobbies & Interests",icon:u.jsx(ng,{className:"w-4 h-4"}),component:u.jsx(_y,{})}],r=l=>{n(e===l?"settings":l)};return u.jsx("div",{className:"w-full h-full overflow-auto bg-slate-50 border-r border-slate-200 custom-scrollbar",children:u.jsxs("div",{className:"p-6 max-w-2xl mx-auto",children:[u.jsxs("div",{className:"mb-8",children:[u.jsx("h2",{className:"text-2xl font-bold text-slate-800",children:"Editor"}),u.jsx("p",{className:"text-slate-500 text-sm mt-1",children:"Customize your CV content and appearance"})]}),u.jsx("div",{className:"space-y-3",children:t.map(l=>u.jsxs("div",{className:`bg-white border rounded-xl overflow-hidden transition-all duration-200 ${e===l.id?"border-blue-200 shadow-md ring-1 ring-blue-100":"border-slate-200 hover:border-slate-300 shadow-sm"}`,children:[u.jsxs("button",{onClick:()=>r(l.id),className:`w-full px-5 py-4 flex items-center justify-between text-left transition-colors ${e===l.id?"bg-slate-50/50":"bg-white hover:bg-slate-50"}`,children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:`p-2 rounded-lg ${e===l.id?"bg-blue-100 text-blue-600":"bg-slate-100 text-slate-500"}`,children:l.icon}),u.jsx("span",{className:`font-semibold ${e===l.id?"text-slate-800":"text-slate-700"}`,children:l.title})]}),e===l.id?u.jsx(Wm,{className:"w-5 h-5 text-blue-500"}):u.jsx(Bm,{className:"w-5 h-5 text-slate-400"})]}),e===l.id&&u.jsx("div",{className:"px-5 py-5 border-t border-slate-100 animate-in slide-in-from-top-2 duration-200",children:l.component})]},l.id))})]})})}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var Fy=Object.prototype.toString,dr=Array.isArray||function(n){return Fy.call(n)==="[object Array]"};function Pa(e){return typeof e=="function"}function Uy(e){return dr(e)?"array":typeof e}function Di(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function dc(e,n){return e!=null&&typeof e=="object"&&n in e}function Hy(e,n){return e!=null&&typeof e!="object"&&e.hasOwnProperty&&e.hasOwnProperty(n)}var $y=RegExp.prototype.test;function By(e,n){return $y.call(e,n)}var Wy=/\S/;function Vy(e){return!By(Wy,e)}var Qy={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function Ky(e){return String(e).replace(/[&<>"'`=\/]/g,function(t){return Qy[t]})}var Yy=/\s*/,Gy=/\s+/,fc=/\s*=/,Xy=/\s*\}/,Jy=/#|\^|\/|>|\{|&|=|!/;function Zy(e,n){if(!e)return[];var t=!1,r=[],l=[],s=[],i=!1,o=!1,a="",c=0;function d(){if(i&&!o)for(;s.length;)delete l[s.pop()];else s=[];i=!1,o=!1}var f,h,v;function y(E){if(typeof E=="string"&&(E=E.split(Gy,2)),!dr(E)||E.length!==2)throw new Error("Invalid tags: "+E);f=new RegExp(Di(E[0])+"\\s*"),h=new RegExp("\\s*"+Di(E[1])),v=new RegExp("\\s*"+Di("}"+E[1]))}y(n||He.tags);for(var x=new yl(e),k,m,p,g,b,S;!x.eos();){if(k=x.pos,p=x.scanUntil(f),p)for(var j=0,C=p.length;j<C;++j)g=p.charAt(j),Vy(g)?(s.push(l.length),a+=g):(o=!0,t=!0,a+=" "),l.push(["text",g,k,k+1]),k+=1,g===`
`&&(d(),a="",c=0,t=!1);if(!x.scan(f))break;if(i=!0,m=x.scan(Jy)||"name",x.scan(Yy),m==="="?(p=x.scanUntil(fc),x.scan(fc),x.scanUntil(h)):m==="{"?(p=x.scanUntil(v),x.scan(Xy),x.scanUntil(h),m="&"):p=x.scanUntil(h),!x.scan(h))throw new Error("Unclosed tag at "+x.pos);if(m==">"?b=[m,p,k,x.pos,a,c,t]:b=[m,p,k,x.pos],c++,l.push(b),m==="#"||m==="^")r.push(b);else if(m==="/"){if(S=r.pop(),!S)throw new Error('Unopened section "'+p+'" at '+k);if(S[1]!==p)throw new Error('Unclosed section "'+S[1]+'" at '+k)}else m==="name"||m==="{"||m==="&"?o=!0:m==="="&&y(p)}if(d(),S=r.pop(),S)throw new Error('Unclosed section "'+S[1]+'" at '+x.pos);return e0(qy(l))}function qy(e){for(var n=[],t,r,l=0,s=e.length;l<s;++l)t=e[l],t&&(t[0]==="text"&&r&&r[0]==="text"?(r[1]+=t[1],r[3]=t[3]):(n.push(t),r=t));return n}function e0(e){for(var n=[],t=n,r=[],l,s,i=0,o=e.length;i<o;++i)switch(l=e[i],l[0]){case"#":case"^":t.push(l),r.push(l),t=l[4]=[];break;case"/":s=r.pop(),s[5]=l[2],t=r.length>0?r[r.length-1][4]:n;break;default:t.push(l)}return n}function yl(e){this.string=e,this.tail=e,this.pos=0}yl.prototype.eos=function(){return this.tail===""};yl.prototype.scan=function(n){var t=this.tail.match(n);if(!t||t.index!==0)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};yl.prototype.scanUntil=function(n){var t=this.tail.search(n),r;switch(t){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=r.length,r};function lr(e,n){this.view=e,this.cache={".":this.view},this.parent=n}lr.prototype.push=function(n){return new lr(n,this)};lr.prototype.lookup=function(n){var t=this.cache,r;if(t.hasOwnProperty(n))r=t[n];else{for(var l=this,s,i,o,a=!1;l;){if(n.indexOf(".")>0)for(s=l.view,i=n.split("."),o=0;s!=null&&o<i.length;)o===i.length-1&&(a=dc(s,i[o])||Hy(s,i[o])),s=s[i[o++]];else s=l.view[n],a=dc(l.view,n);if(a){r=s;break}l=l.parent}t[n]=r}return Pa(r)&&(r=r.call(this.view)),r};function Ce(){this.templateCache={_cache:{},set:function(n,t){this._cache[n]=t},get:function(n){return this._cache[n]},clear:function(){this._cache={}}}}Ce.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};Ce.prototype.parse=function(n,t){var r=this.templateCache,l=n+":"+(t||He.tags).join(":"),s=typeof r<"u",i=s?r.get(l):void 0;return i==null&&(i=Zy(n,t),s&&r.set(l,i)),i};Ce.prototype.render=function(n,t,r,l){var s=this.getConfigTags(l),i=this.parse(n,s),o=t instanceof lr?t:new lr(t,void 0);return this.renderTokens(i,o,r,n,l)};Ce.prototype.renderTokens=function(n,t,r,l,s){for(var i="",o,a,c,d=0,f=n.length;d<f;++d)c=void 0,o=n[d],a=o[0],a==="#"?c=this.renderSection(o,t,r,l,s):a==="^"?c=this.renderInverted(o,t,r,l,s):a===">"?c=this.renderPartial(o,t,r,s):a==="&"?c=this.unescapedValue(o,t):a==="name"?c=this.escapedValue(o,t,s):a==="text"&&(c=this.rawValue(o)),c!==void 0&&(i+=c);return i};Ce.prototype.renderSection=function(n,t,r,l,s){var i=this,o="",a=t.lookup(n[1]);function c(h){return i.render(h,t,r,s)}if(a){if(dr(a))for(var d=0,f=a.length;d<f;++d)o+=this.renderTokens(n[4],t.push(a[d]),r,l,s);else if(typeof a=="object"||typeof a=="string"||typeof a=="number")o+=this.renderTokens(n[4],t.push(a),r,l,s);else if(Pa(a)){if(typeof l!="string")throw new Error("Cannot use higher-order sections without the original template");a=a.call(t.view,l.slice(n[3],n[5]),c),a!=null&&(o+=a)}else o+=this.renderTokens(n[4],t,r,l,s);return o}};Ce.prototype.renderInverted=function(n,t,r,l,s){var i=t.lookup(n[1]);if(!i||dr(i)&&i.length===0)return this.renderTokens(n[4],t,r,l,s)};Ce.prototype.indentPartial=function(n,t,r){for(var l=t.replace(/[^ \t]/g,""),s=n.split(`
`),i=0;i<s.length;i++)s[i].length&&(i>0||!r)&&(s[i]=l+s[i]);return s.join(`
`)};Ce.prototype.renderPartial=function(n,t,r,l){if(r){var s=this.getConfigTags(l),i=Pa(r)?r(n[1]):r[n[1]];if(i!=null){var o=n[6],a=n[5],c=n[4],d=i;a==0&&c&&(d=this.indentPartial(i,c,o));var f=this.parse(d,s);return this.renderTokens(f,t,r,d,l)}}};Ce.prototype.unescapedValue=function(n,t){var r=t.lookup(n[1]);if(r!=null)return r};Ce.prototype.escapedValue=function(n,t,r){var l=this.getConfigEscape(r)||He.escape,s=t.lookup(n[1]);if(s!=null)return typeof s=="number"&&l===He.escape?String(s):l(s)};Ce.prototype.rawValue=function(n){return n[1]};Ce.prototype.getConfigTags=function(n){return dr(n)?n:n&&typeof n=="object"?n.tags:void 0};Ce.prototype.getConfigEscape=function(n){if(n&&typeof n=="object"&&!dr(n))return n.escape};var He={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){ul.templateCache=e},get templateCache(){return ul.templateCache}},ul=new Ce;He.clearCache=function(){return ul.clearCache()};He.parse=function(n,t){return ul.parse(n,t)};He.render=function(n,t,r,l){if(typeof n!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+Uy(n)+'" was given as the first argument for mustache#render(template, view, partials)');return ul.render(n,t,r,l)};He.escape=Ky;He.Scanner=yl;He.Context=lr;He.Writer=Ce;const n0=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>{{basics.name}} - {{basics.label}}</title>\r
    <style>\r
        {{{styles}}}\r
    </style>\r
</head>\r
<body{{#meta.onePageMode}} class="one-page-mode" {{/meta.onePageMode}}>\r
    <div class="resume">\r
        <!-- Header Section -->\r
        <header class="header">\r
            {{#basics.image}}\r
            <div class="profile-image">\r
                <img src="{{basics.image}}" alt="{{basics.name}}">\r
            </div>\r
            {{/basics.image}}\r
            <div class="header-content">\r
                <h1 class="name">{{basics.name}}</h1>\r
                <h2 class="label">{{basics.label}}</h2>\r
                <div class="contact-info">\r
                    {{#basics.email}}\r
                    <span class="contact-item">✉ {{basics.email}}</span>\r
                    {{/basics.email}}\r
                    {{#basics.phone}}\r
                    <span class="contact-item">📞 {{basics.phone}}</span>\r
                    {{/basics.phone}}\r
                    {{#basics.location.city}}\r
                    <span class="contact-item">📍 {{basics.location.city}}, {{basics.location.countryCode}}</span>\r
                    {{/basics.location.city}}\r
                    {{#basics.url}}\r
                    <span class="contact-item">🔗 {{basics.url}}</span>\r
                    {{/basics.url}}\r
                </div>\r
                {{#basics.profiles.length}}\r
                <div class="social-profiles">\r
                    {{#basics.profiles}}\r
                    <a href="{{url}}" class="social-link">{{network}}</a>\r
                    {{/basics.profiles}}\r
                </div>\r
                {{/basics.profiles.length}}\r
            </div>\r
        </header>\r
\r
        <!-- Summary Section -->\r
        {{#basics.summary}}\r
        <section class="section">\r
            <h3 class="section-title">Professional Summary</h3>\r
            <p class="summary">{{basics.summary}}</p>\r
        </section>\r
        {{/basics.summary}}\r
\r
        <!-- Work Experience Section -->\r
        {{#work.length}}\r
        <section class="section">\r
            <h3 class="section-title">Work Experience</h3>\r
            {{#work}}\r
            <div class="entry">\r
                <div class="entry-header">\r
                    <div>\r
                        <h4 class="entry-title">{{position}}</h4>\r
                        <p class="entry-subtitle">{{name}}</p>\r
                    </div>\r
                    <div class="entry-date">{{startDate}} - {{endDate}}</div>\r
                </div>\r
                {{#summary}}\r
                <p class="entry-summary">{{summary}}</p>\r
                {{/summary}}\r
                {{#highlights.length}}\r
                <ul class="highlights">\r
                    {{#highlights}}\r
                    <li>{{.}}</li>\r
                    {{/highlights}}\r
                </ul>\r
                {{/highlights.length}}\r
            </div>\r
            {{/work}}\r
        </section>\r
        {{/work.length}}\r
\r
        <!-- Education Section -->\r
        {{#education.length}}\r
        <section class="section">\r
            <h3 class="section-title">Education</h3>\r
            {{#education}}\r
            <div class="entry">\r
                <div class="entry-header">\r
                    <div>\r
                        <h4 class="entry-title">{{studyType}} in {{area}}</h4>\r
                        <p class="entry-subtitle">{{institution}}</p>\r
                    </div>\r
                    <div class="entry-date">{{startDate}} - {{endDate}}</div>\r
                </div>\r
                {{#score}}\r
                <p class="entry-summary">Grade: {{score}}</p>\r
                {{/score}}\r
            </div>\r
            {{/education}}\r
        </section>\r
        {{/education.length}}\r
\r
        <!-- Skills Section -->\r
        {{#skills.length}}\r
        <section class="section">\r
            <h3 class="section-title">Skills</h3>\r
            <div class="skills-grid">\r
                {{#skills}}\r
                <div class="skill-item">\r
                    <h4 class="skill-name">{{name}}</h4>\r
                    {{#level}}\r
                    <span class="skill-level">{{level}}</span>\r
                    {{/level}}\r
                    {{#keywords.length}}\r
                    <div class="skill-keywords">\r
                        {{#keywords}}\r
                        <span class="keyword">{{.}}</span>\r
                        {{/keywords}}\r
                    </div>\r
                    {{/keywords.length}}\r
                </div>\r
                {{/skills}}\r
            </div>\r
        </section>\r
        {{/skills.length}}\r
\r
        <!-- Volunteer Work Section -->\r
        {{#volunteer.length}}\r
        <section class="section">\r
            <h3 class="section-title">Volunteer Work</h3>\r
            {{#volunteer}}\r
            <div class="entry">\r
                <div class="entry-header">\r
                    <div>\r
                        <h4 class="entry-title">{{position}}</h4>\r
                        <p class="entry-subtitle">{{organization}}</p>\r
                    </div>\r
                    <div class="entry-date">{{startDate}} - {{endDate}}</div>\r
                </div>\r
                {{#summary}}\r
                <p class="entry-summary">{{summary}}</p>\r
                {{/summary}}\r
                {{#highlights.length}}\r
                <ul class="highlights">\r
                    {{#highlights}}\r
                    <li>{{.}}</li>\r
                    {{/highlights}}\r
                </ul>\r
                {{/highlights.length}}\r
            </div>\r
            {{/volunteer}}\r
        </section>\r
        {{/volunteer.length}}\r
\r
        <!-- Certifications Section -->\r
        {{#certifications.length}}\r
        <section class="section">\r
            <h3 class="section-title">Certifications</h3>\r
            {{#certifications}}\r
            <div class="entry">\r
                <div class="entry-header">\r
                    <div>\r
                        <h4 class="entry-title">{{name}}</h4>\r
                        <p class="entry-subtitle">{{issuer}}</p>\r
                    </div>\r
                    <div class="entry-date">{{date}}</div>\r
                </div>\r
            </div>\r
            {{/certifications}}\r
        </section>\r
        {{/certifications.length}}\r
\r
        <!-- Publications Section -->\r
        {{#publications.length}}\r
        <section class="section">\r
            <h3 class="section-title">Publications</h3>\r
            {{#publications}}\r
            <div class="entry">\r
                <div class="entry-header">\r
                    <div>\r
                        <h4 class="entry-title">{{name}}</h4>\r
                        <p class="entry-subtitle">{{publisher}}</p>\r
                    </div>\r
                    <div class="entry-date">{{releaseDate}}</div>\r
                </div>\r
                {{#summary}}\r
                <p class="entry-summary">{{summary}}</p>\r
                {{/summary}}\r
            </div>\r
            {{/publications}}\r
        </section>\r
        {{/publications.length}}\r
\r
        <!-- Languages Section -->\r
        {{#languages.length}}\r
        <section class="section">\r
            <h3 class="section-title">Languages</h3>\r
            <div class="languages-grid">\r
                {{#languages}}\r
                <div class="language-item">\r
                    <span class="language-name">{{language}}</span>\r
                    <span class="language-fluency">{{fluency}}</span>\r
                </div>\r
                {{/languages}}\r
            </div>\r
        </section>\r
        {{/languages.length}}\r
\r
        <!-- Interests Section -->\r
        {{#interests.length}}\r
        <section class="section">\r
            <h3 class="section-title">Hobbies & Interests</h3>\r
            <div class="interests-grid">\r
                {{#interests}}\r
                <div class="interest-item">\r
                    <h4 class="interest-name">{{name}}</h4>\r
                    {{#keywords.length}}\r
                    <div class="interest-keywords">\r
                        {{#keywords}}\r
                        <span class="keyword">{{.}}</span>\r
                        {{/keywords}}\r
                    </div>\r
                    {{/keywords.length}}\r
                </div>\r
                {{/interests}}\r
            </div>\r
        </section>\r
        {{/interests.length}}\r
    </div>\r
    </body>\r
\r
</html>`,t0=`:root {\r
    --theme-color: {{themeColor}};\r
    --text-primary: #1a1a1a;\r
    --text-secondary: #666666;\r
    --background: #ffffff;\r
    --border-color: #e5e5e5;\r
}\r
\r
* {\r
    margin: 0;\r
    padding: 0;\r
    box-sizing: border-box;\r
}\r
\r
body {\r
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r
    color: var(--text-primary);\r
    background: var(--background);\r
    line-height: 1.6;\r
}\r
\r
.resume {\r
    max-width: 210mm;\r
    /* A4 width */\r
    margin: 0 auto;\r
    padding: 20mm;\r
    background: white;\r
}\r
\r
/* Header Styles */\r
.header {\r
    display: flex;\r
    gap: 20px;\r
    margin-bottom: 30px;\r
    padding-bottom: 20px;\r
    border-bottom: 3px solid var(--theme-color);\r
}\r
\r
.profile-image {\r
    flex-shrink: 0;\r
}\r
\r
.profile-image img {\r
    width: 120px;\r
    height: 120px;\r
    border-radius: 50%;\r
    object-fit: cover;\r
    border: 3px solid var(--theme-color);\r
}\r
\r
.header-content {\r
    flex: 1;\r
}\r
\r
.name {\r
    font-size: 32px;\r
    font-weight: 700;\r
    color: var(--theme-color);\r
    margin-bottom: 5px;\r
}\r
\r
.label {\r
    font-size: 18px;\r
    font-weight: 400;\r
    color: var(--text-secondary);\r
    margin-bottom: 15px;\r
}\r
\r
.contact-info {\r
    display: flex;\r
    flex-wrap: wrap;\r
    gap: 15px;\r
    margin-bottom: 10px;\r
    font-size: 14px;\r
}\r
\r
.contact-item {\r
    color: var(--text-secondary);\r
}\r
\r
.social-profiles {\r
    display: flex;\r
    gap: 10px;\r
    flex-wrap: wrap;\r
}\r
\r
.social-link {\r
    color: var(--theme-color);\r
    text-decoration: none;\r
    font-size: 14px;\r
    font-weight: 500;\r
}\r
\r
.social-link:hover {\r
    text-decoration: underline;\r
}\r
\r
/* Section Styles */\r
.section {\r
    margin-bottom: 25px;\r
}\r
\r
.section-title {\r
    font-size: 20px;\r
    font-weight: 600;\r
    color: var(--theme-color);\r
    margin-bottom: 15px;\r
    padding-bottom: 8px;\r
    border-bottom: 2px solid var(--border-color);\r
}\r
\r
.summary {\r
    font-size: 15px;\r
    line-height: 1.7;\r
    color: var(--text-primary);\r
}\r
\r
/* Entry Styles (Work, Education, Volunteer, Certifications, Publications) */\r
.entry {\r
    margin-bottom: 20px;\r
}\r
\r
.entry-header {\r
    display: flex;\r
    justify-content: space-between;\r
    align-items: flex-start;\r
    margin-bottom: 8px;\r
    gap: 15px;\r
}\r
\r
.entry-title {\r
    font-size: 17px;\r
    font-weight: 600;\r
    color: var(--text-primary);\r
    margin-bottom: 3px;\r
}\r
\r
.entry-subtitle {\r
    font-size: 15px;\r
    color: var(--theme-color);\r
    font-weight: 500;\r
}\r
\r
.entry-date {\r
    font-size: 14px;\r
    color: var(--text-secondary);\r
    white-space: nowrap;\r
    font-style: italic;\r
}\r
\r
.entry-summary {\r
    font-size: 14px;\r
    color: var(--text-secondary);\r
    margin-bottom: 8px;\r
    line-height: 1.6;\r
}\r
\r
.highlights {\r
    list-style: disc;\r
    margin-left: 20px;\r
    font-size: 14px;\r
    color: var(--text-primary);\r
}\r
\r
.highlights li {\r
    margin-bottom: 5px;\r
    line-height: 1.5;\r
}\r
\r
/* Skills Styles */\r
.skills-grid {\r
    display: grid;\r
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\r
    gap: 15px;\r
}\r
\r
.skill-item {\r
    padding: 12px;\r
    border: 1px solid var(--border-color);\r
    border-radius: 8px;\r
    background: #fafafa;\r
}\r
\r
.skill-name {\r
    font-size: 16px;\r
    font-weight: 600;\r
    color: var(--theme-color);\r
    margin-bottom: 5px;\r
}\r
\r
.skill-level {\r
    font-size: 13px;\r
    color: var(--text-secondary);\r
    font-style: italic;\r
    display: block;\r
    margin-bottom: 8px;\r
}\r
\r
.skill-keywords {\r
    display: flex;\r
    flex-wrap: wrap;\r
    gap: 6px;\r
}\r
\r
.keyword {\r
    font-size: 12px;\r
    padding: 3px 8px;\r
    background: var(--theme-color);\r
    color: white;\r
    border-radius: 12px;\r
}\r
\r
/* Languages Styles */\r
.languages-grid {\r
    display: grid;\r
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\r
    gap: 10px;\r
}\r
\r
.language-item {\r
    padding: 10px;\r
    border: 1px solid var(--border-color);\r
    border-radius: 6px;\r
    display: flex;\r
    justify-content: space-between;\r
    align-items: center;\r
}\r
\r
.language-name {\r
    font-weight: 600;\r
    color: var(--text-primary);\r
}\r
\r
.language-fluency {\r
    font-size: 13px;\r
    color: var(--text-secondary);\r
    font-style: italic;\r
}\r
\r
/* Interests Styles */\r
.interests-grid {\r
    display: grid;\r
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\r
    gap: 15px;\r
}\r
\r
.interest-item {\r
    padding: 12px;\r
    border: 1px solid var(--border-color);\r
    border-radius: 8px;\r
    background: #fafafa;\r
}\r
\r
.interest-name {\r
    font-size: 16px;\r
    font-weight: 600;\r
    color: var(--theme-color);\r
    margin-bottom: 8px;\r
}\r
\r
.interest-keywords {\r
    display: flex;\r
    flex-wrap: wrap;\r
    gap: 6px;\r
}\r
\r
/* ONE PAGE MODE STYLES */\r
body.one-page-mode {\r
    font-size: 0.85em;\r
}\r
\r
body.one-page-mode .resume {\r
    padding: 12mm;\r
}\r
\r
body.one-page-mode .header {\r
    margin-bottom: 18px;\r
    padding-bottom: 12px;\r
}\r
\r
body.one-page-mode .name {\r
    font-size: 26px;\r
    margin-bottom: 3px;\r
}\r
\r
body.one-page-mode .label {\r
    font-size: 15px;\r
    margin-bottom: 10px;\r
}\r
\r
body.one-page-mode .section {\r
    margin-bottom: 15px;\r
}\r
\r
body.one-page-mode .section-title {\r
    font-size: 17px;\r
    margin-bottom: 10px;\r
    padding-bottom: 5px;\r
}\r
\r
body.one-page-mode .entry {\r
    margin-bottom: 12px;\r
}\r
\r
body.one-page-mode .entry-header {\r
    margin-bottom: 5px;\r
}\r
\r
body.one-page-mode .entry-title {\r
    font-size: 15px;\r
}\r
\r
body.one-page-mode .entry-subtitle,\r
body.one-page-mode .entry-date,\r
body.one-page-mode .entry-summary {\r
    font-size: 12px;\r
}\r
\r
body.one-page-mode .highlights {\r
    margin-left: 15px;\r
    font-size: 12px;\r
}\r
\r
body.one-page-mode .highlights li {\r
    margin-bottom: 3px;\r
}\r
\r
body.one-page-mode .profile-image img {\r
    width: 90px;\r
    height: 90px;\r
}\r
\r
body.one-page-mode .skills-grid,\r
body.one-page-mode .languages-grid,\r
body.one-page-mode .interests-grid {\r
    gap: 10px;\r
}\r
\r
body.one-page-mode .skill-item,\r
body.one-page-mode .language-item,\r
body.one-page-mode .interest-item {\r
    padding: 8px;\r
}\r
\r
/* Print Styles */\r
@media print {\r
    @page {\r
        size: A4;\r
        margin: 0;\r
    }\r
\r
    body {\r
        margin: 0;\r
        padding: 0;\r
    }\r
\r
    .resume {\r
        max-width: 100%;\r
        margin: 0;\r
        padding: 15mm;\r
    }\r
\r
    .section {\r
        page-break-inside: avoid;\r
    }\r
\r
    .entry {\r
        page-break-inside: avoid;\r
    }\r
\r
    a {\r
        color: inherit;\r
        text-decoration: none;\r
    }\r
}\r
\r
/* Screen-only styles */\r
@media screen {\r
    body {\r
        background: #f5f5f5;\r
        padding: 20px;\r
    }\r
\r
    .resume {\r
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r
    }\r
}`,r0=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>{{basics.name}} - {{basics.label}}</title>\r
    <style>\r
        {{{styles}}}\r
    </style>\r
</head>\r
<body{{#meta.onePageMode}} class="one-page-mode" {{/meta.onePageMode}}>\r
    <div class="resume">\r
        <!-- Header Section -->\r
        <header class="header">\r
            {{#basics.image}}\r
            <div class="profile-image">\r
                <img src="{{basics.image}}" alt="{{basics.name}}">\r
            </div>\r
            {{/basics.image}}\r
            <div class="header-content">\r
                <h1 class="name">{{basics.name}}</h1>\r
                <h2 class="label">{{basics.label}}</h2>\r
                <div class="contact-info">\r
                    {{#basics.email}}\r
                    <span class="contact-item">✉ {{basics.email}}</span>\r
                    {{/basics.email}}\r
                    {{#basics.phone}}\r
                    <span class="contact-item">📞 {{basics.phone}}</span>\r
                    {{/basics.phone}}\r
                    {{#basics.location.city}}\r
                    <span class="contact-item">📍 {{basics.location.city}}, {{basics.location.countryCode}}</span>\r
                    {{/basics.location.city}}\r
                    {{#basics.url}}\r
                    <span class="contact-item">🔗 {{basics.url}}</span>\r
                    {{/basics.url}}\r
                </div>\r
                {{#basics.profiles.length}}\r
                <div class="social-profiles">\r
                    {{#basics.profiles}}\r
                    <a href="{{url}}" class="social-link">{{network}}</a>\r
                    {{/basics.profiles}}\r
                </div>\r
                {{/basics.profiles.length}}\r
            </div>\r
        </header>\r
\r
        <!-- Summary Section -->\r
        {{#basics.summary}}\r
        <section class="section">\r
            <h3 class="section-title">Professional Summary</h3>\r
            <p class="summary">{{basics.summary}}</p>\r
        </section>\r
        {{/basics.summary}}\r
\r
        <!-- Work Experience Section -->\r
        {{#work.length}}\r
        <section class="section">\r
            <h3 class="section-title">Work Experience</h3>\r
            {{#work}}\r
            <div class="entry">\r
                <div class="entry-header">\r
                    <div>\r
                        <h4 class="entry-title">{{position}}</h4>\r
                        <p class="entry-subtitle">{{name}}</p>\r
                    </div>\r
                    <div class="entry-date">{{startDate}} - {{endDate}}</div>\r
                </div>\r
                {{#summary}}\r
                <p class="entry-summary">{{summary}}</p>\r
                {{/summary}}\r
                {{#highlights.length}}\r
                <ul class="highlights">\r
                    {{#highlights}}\r
                    <li>{{.}}</li>\r
                    {{/highlights}}\r
                </ul>\r
                {{/highlights.length}}\r
            </div>\r
            {{/work}}\r
        </section>\r
        {{/work.length}}\r
\r
        <!-- Education Section -->\r
        {{#education.length}}\r
        <section class="section">\r
            <h3 class="section-title">Education</h3>\r
            {{#education}}\r
            <div class="entry">\r
                <div class="entry-header">\r
                    <div>\r
                        <h4 class="entry-title">{{studyType}} in {{area}}</h4>\r
                        <p class="entry-subtitle">{{institution}}</p>\r
                    </div>\r
                    <div class="entry-date">{{startDate}} - {{endDate}}</div>\r
                </div>\r
                {{#score}}\r
                <p class="entry-summary">Grade: {{score}}</p>\r
                {{/score}}\r
            </div>\r
            {{/education}}\r
        </section>\r
        {{/education.length}}\r
\r
        <!-- Skills Section -->\r
        {{#skills.length}}\r
        <section class="section">\r
            <h3 class="section-title">Skills</h3>\r
            <div class="skills-grid">\r
                {{#skills}}\r
                <div class="skill-item">\r
                    <h4 class="skill-name">{{name}}</h4>\r
                    {{#level}}\r
                    <span class="skill-level">{{level}}</span>\r
                    {{/level}}\r
                    {{#keywords.length}}\r
                    <div class="skill-keywords">\r
                        {{#keywords}}\r
                        <span class="keyword">{{.}}</span>\r
                        {{/keywords}}\r
                    </div>\r
                    {{/keywords.length}}\r
                </div>\r
                {{/skills}}\r
            </div>\r
        </section>\r
        {{/skills.length}}\r
\r
        <!-- Volunteer Work Section -->\r
        {{#volunteer.length}}\r
        <section class="section">\r
            <h3 class="section-title">Volunteer Work</h3>\r
            {{#volunteer}}\r
            <div class="entry">\r
                <div class="entry-header">\r
                    <div>\r
                        <h4 class="entry-title">{{position}}</h4>\r
                        <p class="entry-subtitle">{{organization}}</p>\r
                    </div>\r
                    <div class="entry-date">{{startDate}} - {{endDate}}</div>\r
                </div>\r
                {{#summary}}\r
                <p class="entry-summary">{{summary}}</p>\r
                {{/summary}}\r
                {{#highlights.length}}\r
                <ul class="highlights">\r
                    {{#highlights}}\r
                    <li>{{.}}</li>\r
                    {{/highlights}}\r
                </ul>\r
                {{/highlights.length}}\r
            </div>\r
            {{/volunteer}}\r
        </section>\r
        {{/volunteer.length}}\r
\r
        <!-- Certifications Section -->\r
        {{#certifications.length}}\r
        <section class="section">\r
            <h3 class="section-title">Certifications</h3>\r
            {{#certifications}}\r
            <div class="entry">\r
                <div class="entry-header">\r
                    <div>\r
                        <h4 class="entry-title">{{name}}</h4>\r
                        <p class="entry-subtitle">{{issuer}}</p>\r
                    </div>\r
                    <div class="entry-date">{{date}}</div>\r
                </div>\r
            </div>\r
            {{/certifications}}\r
        </section>\r
        {{/certifications.length}}\r
\r
        <!-- Publications Section -->\r
        {{#publications.length}}\r
        <section class="section">\r
            <h3 class="section-title">Publications</h3>\r
            {{#publications}}\r
            <div class="entry">\r
                <div class="entry-header">\r
                    <div>\r
                        <h4 class="entry-title">{{name}}</h4>\r
                        <p class="entry-subtitle">{{publisher}}</p>\r
                    </div>\r
                    <div class="entry-date">{{releaseDate}}</div>\r
                </div>\r
                {{#summary}}\r
                <p class="entry-summary">{{summary}}</p>\r
                {{/summary}}\r
            </div>\r
            {{/publications}}\r
        </section>\r
        {{/publications.length}}\r
\r
        <!-- Languages Section -->\r
        {{#languages.length}}\r
        <section class="section">\r
            <h3 class="section-title">Languages</h3>\r
            <div class="languages-grid">\r
                {{#languages}}\r
                <div class="language-item">\r
                    <span class="language-name">{{language}}</span>\r
                    <span class="language-fluency">{{fluency}}</span>\r
                </div>\r
                {{/languages}}\r
            </div>\r
        </section>\r
        {{/languages.length}}\r
\r
        <!-- Interests Section -->\r
        {{#interests.length}}\r
        <section class="section">\r
            <h3 class="section-title">Hobbies & Interests</h3>\r
            <div class="interests-grid">\r
                {{#interests}}\r
                <div class="interest-item">\r
                    <h4 class="interest-name">{{name}}</h4>\r
                    {{#keywords.length}}\r
                    <div class="interest-keywords">\r
                        {{#keywords}}\r
                        <span class="keyword">{{.}}</span>\r
                        {{/keywords}}\r
                    </div>\r
                    {{/keywords.length}}\r
                </div>\r
                {{/interests}}\r
            </div>\r
        </section>\r
        {{/interests.length}}\r
    </div>\r
    </body>\r
\r
</html>`,l0=`:root {\r
    --theme-color: {{themeColor}};\r
    --text-primary: #2c2c2c;\r
    --text-secondary: #555555;\r
    --background: #ffffff;\r
    --border-color: #d0d0d0;\r
}\r
\r
* {\r
    margin: 0;\r
    padding: 0;\r
    box-sizing: border-box;\r
}\r
\r
body {\r
    font-family: 'Times New Roman', Georgia, serif;\r
    color: var(--text-primary);\r
    background: var(--background);\r
    line-height: 1.8;\r
}\r
\r
.resume {\r
    max-width: 210mm;\r
    margin: 0 auto;\r
    padding: 25mm;\r
    background: white;\r
}\r
\r
.header {\r
    text-align: center;\r
    margin-bottom: 30px;\r
    padding-bottom: 20px;\r
    border-bottom: 2px solid var(--text-primary);\r
}\r
\r
.profile-image {\r
    margin: 0 auto 15px;\r
}\r
\r
.profile-image img {\r
    width: 100px;\r
    height: 100px;\r
    border-radius: 50%;\r
    object-fit: cover;\r
}\r
\r
.name {\r
    font-size: 36px;\r
    font-weight: 700;\r
    color: var(--text-primary);\r
    margin-bottom: 8px;\r
    text-transform: uppercase;\r
    letter-spacing: 2px;\r
}\r
\r
.label {\r
    font-size: 16px;\r
    color: var(--text-secondary);\r
    margin-bottom: 15px;\r
    font-style: italic;\r
}\r
\r
.contact-info {\r
    display: flex;\r
    justify-content: center;\r
    flex-wrap: wrap;\r
    gap: 20px;\r
    font-size: 13px;\r
}\r
\r
.section {\r
    margin-bottom: 30px;\r
}\r
\r
.section-title {\r
    font-size: 18px;\r
    font-weight: 700;\r
    color: var(--text-primary);\r
    margin-bottom: 15px;\r
    text-transform: uppercase;\r
    letter-spacing: 1px;\r
    border-bottom: 1px solid var(--border-color);\r
    padding-bottom: 5px;\r
}\r
\r
.entry {\r
    margin-bottom: 20px;\r
}\r
\r
.entry-header {\r
    margin-bottom: 8px;\r
}\r
\r
.entry-title {\r
    font-size: 16px;\r
    font-weight: 700;\r
    color: var(--text-primary);\r
}\r
\r
.entry-subtitle {\r
    font-size: 14px;\r
    color: var(--text-secondary);\r
    font-style: italic;\r
}\r
\r
.entry-date {\r
    font-size: 13px;\r
    color: var(--text-secondary);\r
    margin-top: 2px;\r
}\r
\r
.highlights {\r
    list-style: disc;\r
    margin-left: 25px;\r
    font-size: 14px;\r
}\r
\r
.skills-grid,\r
.languages-grid,\r
.interests-grid {\r
    display: block;\r
}\r
\r
.skill-item,\r
.language-item,\r
.interest-item {\r
    margin-bottom: 12px;\r
}\r
\r
.keyword {\r
    display: inline-block;\r
    margin-right: 8px;\r
    font-size: 13px;\r
}\r
\r
/* ONE PAGE MODE */\r
body.one-page-mode {\r
    font-size: 0.9em;\r
}\r
\r
body.one-page-mode .resume {\r
    padding: 15mm;\r
}\r
\r
body.one-page-mode .section {\r
    margin-bottom: 18px;\r
}\r
\r
@media print {\r
    @page {\r
        size: A4;\r
        margin: 0;\r
    }\r
\r
    body {\r
        margin: 0;\r
        padding: 0;\r
    }\r
\r
    .resume {\r
        padding: 18mm;\r
    }\r
}\r
\r
@media screen {\r
    body {\r
        background: #f5f5f5;\r
        padding: 20px;\r
    }\r
\r
    .resume {\r
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r
    }\r
}`,s0=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>{{basics.name}} - {{basics.label}}</title>\r
    <style>\r
        {{{styles}}}\r
    </style>\r
</head>\r
<body{{#meta.onePageMode}} class="one-page-mode" {{/meta.onePageMode}}>\r
    <div class="resume">\r
        <!-- Header Section -->\r
        <header class="header">\r
            {{#basics.image}}\r
            <div class="profile-image">\r
                <img src="{{basics.image}}" alt="{{basics.name}}">\r
            </div>\r
            {{/basics.image}}\r
            <div class="header-content">\r
                <h1 class="name">{{basics.name}}</h1>\r
                <h2 class="label">{{basics.label}}</h2>\r
                <div class="contact-info">\r
                    {{#basics.email}}\r
                    <span class="contact-item">✉ {{basics.email}}</span>\r
                    {{/basics.email}}\r
                    {{#basics.phone}}\r
                    <span class="contact-item">📞 {{basics.phone}}</span>\r
                    {{/basics.phone}}\r
                    {{#basics.location.city}}\r
                    <span class="contact-item">📍 {{basics.location.city}}, {{basics.location.countryCode}}</span>\r
                    {{/basics.location.city}}\r
                    {{#basics.url}}\r
                    <span class="contact-item">🔗 {{basics.url}}</span>\r
                    {{/basics.url}}\r
                </div>\r
                {{#basics.profiles.length}}\r
                <div class="social-profiles">\r
                    {{#basics.profiles}}\r
                    <a href="{{url}}" class="social-link">{{network}}</a>\r
                    {{/basics.profiles}}\r
                </div>\r
                {{/basics.profiles.length}}\r
            </div>\r
        </header>\r
\r
        <!-- Summary Section -->\r
        {{#basics.summary}}\r
        <section class="section">\r
            <h3 class="section-title">Professional Summary</h3>\r
            <p class="summary">{{basics.summary}}</p>\r
        </section>\r
        {{/basics.summary}}\r
\r
        <!-- Work Experience Section -->\r
        {{#work.length}}\r
        <section class="section">\r
            <h3 class="section-title">Work Experience</h3>\r
            {{#work}}\r
            <div class="entry">\r
                <div class="entry-header">\r
                    <div>\r
                        <h4 class="entry-title">{{position}}</h4>\r
                        <p class="entry-subtitle">{{name}}</p>\r
                    </div>\r
                    <div class="entry-date">{{startDate}} - {{endDate}}</div>\r
                </div>\r
                {{#summary}}\r
                <p class="entry-summary">{{summary}}</p>\r
                {{/summary}}\r
                {{#highlights.length}}\r
                <ul class="highlights">\r
                    {{#highlights}}\r
                    <li>{{.}}</li>\r
                    {{/highlights}}\r
                </ul>\r
                {{/highlights.length}}\r
            </div>\r
            {{/work}}\r
        </section>\r
        {{/work.length}}\r
\r
        <!-- Education Section -->\r
        {{#education.length}}\r
        <section class="section">\r
            <h3 class="section-title">Education</h3>\r
            {{#education}}\r
            <div class="entry">\r
                <div class="entry-header">\r
                    <div>\r
                        <h4 class="entry-title">{{studyType}} in {{area}}</h4>\r
                        <p class="entry-subtitle">{{institution}}</p>\r
                    </div>\r
                    <div class="entry-date">{{startDate}} - {{endDate}}</div>\r
                </div>\r
                {{#score}}\r
                <p class="entry-summary">Grade: {{score}}</p>\r
                {{/score}}\r
            </div>\r
            {{/education}}\r
        </section>\r
        {{/education.length}}\r
\r
        <!-- Skills Section -->\r
        {{#skills.length}}\r
        <section class="section">\r
            <h3 class="section-title">Skills</h3>\r
            <div class="skills-grid">\r
                {{#skills}}\r
                <div class="skill-item">\r
                    <h4 class="skill-name">{{name}}</h4>\r
                    {{#level}}\r
                    <span class="skill-level">{{level}}</span>\r
                    {{/level}}\r
                    {{#keywords.length}}\r
                    <div class="skill-keywords">\r
                        {{#keywords}}\r
                        <span class="keyword">{{.}}</span>\r
                        {{/keywords}}\r
                    </div>\r
                    {{/keywords.length}}\r
                </div>\r
                {{/skills}}\r
            </div>\r
        </section>\r
        {{/skills.length}}\r
\r
        <!-- Volunteer Work Section -->\r
        {{#volunteer.length}}\r
        <section class="section">\r
            <h3 class="section-title">Volunteer Work</h3>\r
            {{#volunteer}}\r
            <div class="entry">\r
                <div class="entry-header">\r
                    <div>\r
                        <h4 class="entry-title">{{position}}</h4>\r
                        <p class="entry-subtitle">{{organization}}</p>\r
                    </div>\r
                    <div class="entry-date">{{startDate}} - {{endDate}}</div>\r
                </div>\r
                {{#summary}}\r
                <p class="entry-summary">{{summary}}</p>\r
                {{/summary}}\r
                {{#highlights.length}}\r
                <ul class="highlights">\r
                    {{#highlights}}\r
                    <li>{{.}}</li>\r
                    {{/highlights}}\r
                </ul>\r
                {{/highlights.length}}\r
            </div>\r
            {{/volunteer}}\r
        </section>\r
        {{/volunteer.length}}\r
\r
        <!-- Certifications Section -->\r
        {{#certifications.length}}\r
        <section class="section">\r
            <h3 class="section-title">Certifications</h3>\r
            {{#certifications}}\r
            <div class="entry">\r
                <div class="entry-header">\r
                    <div>\r
                        <h4 class="entry-title">{{name}}</h4>\r
                        <p class="entry-subtitle">{{issuer}}</p>\r
                    </div>\r
                    <div class="entry-date">{{date}}</div>\r
                </div>\r
            </div>\r
            {{/certifications}}\r
        </section>\r
        {{/certifications.length}}\r
\r
        <!-- Publications Section -->\r
        {{#publications.length}}\r
        <section class="section">\r
            <h3 class="section-title">Publications</h3>\r
            {{#publications}}\r
            <div class="entry">\r
                <div class="entry-header">\r
                    <div>\r
                        <h4 class="entry-title">{{name}}</h4>\r
                        <p class="entry-subtitle">{{publisher}}</p>\r
                    </div>\r
                    <div class="entry-date">{{releaseDate}}</div>\r
                </div>\r
                {{#summary}}\r
                <p class="entry-summary">{{summary}}</p>\r
                {{/summary}}\r
            </div>\r
            {{/publications}}\r
        </section>\r
        {{/publications.length}}\r
\r
        <!-- Languages Section -->\r
        {{#languages.length}}\r
        <section class="section">\r
            <h3 class="section-title">Languages</h3>\r
            <div class="languages-grid">\r
                {{#languages}}\r
                <div class="language-item">\r
                    <span class="language-name">{{language}}</span>\r
                    <span class="language-fluency">{{fluency}}</span>\r
                </div>\r
                {{/languages}}\r
            </div>\r
        </section>\r
        {{/languages.length}}\r
\r
        <!-- Interests Section -->\r
        {{#interests.length}}\r
        <section class="section">\r
            <h3 class="section-title">Hobbies & Interests</h3>\r
            <div class="interests-grid">\r
                {{#interests}}\r
                <div class="interest-item">\r
                    <h4 class="interest-name">{{name}}</h4>\r
                    {{#keywords.length}}\r
                    <div class="interest-keywords">\r
                        {{#keywords}}\r
                        <span class="keyword">{{.}}</span>\r
                        {{/keywords}}\r
                    </div>\r
                    {{/keywords.length}}\r
                </div>\r
                {{/interests}}\r
            </div>\r
        </section>\r
        {{/interests.length}}\r
    </div>\r
    </body>\r
\r
</html>`,i0=`:root {\r
    --theme-color: {{themeColor}};\r
    --text-primary: #333333;\r
    --text-secondary: #777777;\r
    --background: #ffffff;\r
}\r
\r
* {\r
    margin: 0;\r
    padding: 0;\r
    box-sizing: border-box;\r
}\r
\r
body {\r
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r
    color: var(--text-primary);\r
    background: var(--background);\r
    line-height: 1.8;\r
}\r
\r
.resume {\r
    max-width: 210mm;\r
    margin: 0 auto;\r
    padding: 30mm;\r
    background: white;\r
}\r
\r
.header {\r
    margin-bottom: 40px;\r
}\r
\r
.profile-image img {\r
    display: none;\r
}\r
\r
.name {\r
    font-size: 42px;\r
    font-weight: 300;\r
    letter-spacing: -1px;\r
    color: var(--text-primary);\r
    margin-bottom: 5px;\r
}\r
\r
.label {\r
    font-size: 18px;\r
    font-weight: 300;\r
    color: var(--text-secondary);\r
    margin-bottom: 20px;\r
}\r
\r
.contact-info {\r
    display: flex;\r
    gap: 15px;\r
    flex-wrap: wrap;\r
    font-size: 13px;\r
    color: var(--text-secondary);\r
}\r
\r
.section {\r
    margin-bottom: 35px;\r
}\r
\r
.section-title {\r
    font-size: 14px;\r
    font-weight: 700;\r
    color: var(--theme-color);\r
    margin-bottom: 20px;\r
    text-transform: uppercase;\r
    letter-spacing: 2px;\r
}\r
\r
.entry {\r
    margin-bottom: 25px;\r
}\r
\r
.entry-title {\r
    font-size: 15px;\r
    font-weight: 600;\r
    color: var(--text-primary);\r
    margin-bottom: 3px;\r
}\r
\r
.entry-subtitle {\r
    font-size: 14px;\r
    color: var(--text-secondary);\r
}\r
\r
.entry-date {\r
    font-size: 12px;\r
    color: var(--text-secondary);\r
    margin-bottom: 8px;\r
}\r
\r
.highlights {\r
    list-style: none;\r
    margin-left: 0;\r
    font-size: 13px;\r
    line-height: 1.9;\r
}\r
\r
.highlights li:before {\r
    content: '–  ';\r
    color: var(--theme-color);\r
}\r
\r
.skills-grid,\r
.languages-grid,\r
.interests-grid {\r
    display: block;\r
}\r
\r
.skill-item,\r
.language-item,\r
.interest-item {\r
    margin-bottom: 10px;\r
}\r
\r
.keyword {\r
    display: inline;\r
    margin-right: 6px;\r
    font-size: 13px;\r
}\r
\r
/* ONE PAGE MODE */\r
body.one-page-mode {\r
    font-size: 0.85em;\r
}\r
\r
body.one-page-mode .resume {\r
    padding: 20mm;\r
}\r
\r
body.one-page-mode .section {\r
    margin-bottom: 20px;\r
}\r
\r
@media print {\r
    @page {\r
        size: A4;\r
        margin: 0;\r
    }\r
\r
    body {\r
        margin: 0;\r
        padding: 0;\r
    }\r
\r
    .resume {\r
        padding: 20mm;\r
    }\r
}\r
\r
@media screen {\r
    body {\r
        background: #fafafa;\r
        padding: 20px;\r
    }\r
\r
    .resume {\r
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\r
    }\r
}`,o0=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>{{basics.name}} - {{basics.label}}</title>\r
    <style>\r
        {{{styles}}}\r
    </style>\r
</head>\r
<body{{#meta.onePageMode}} class="one-page-mode" {{/meta.onePageMode}}>\r
    <div class="resume">\r
        <!-- Header Section -->\r
        <header class="header">\r
            {{#basics.image}}\r
            <div class="profile-image">\r
                <img src="{{basics.image}}" alt="{{basics.name}}">\r
            </div>\r
            {{/basics.image}}\r
            <div class="header-content">\r
                <h1 class="name">{{basics.name}}</h1>\r
                <h2 class="label">{{basics.label}}</h2>\r
                <div class="contact-info">\r
                    {{#basics.email}}\r
                    <span class="contact-item">✉ {{basics.email}}</span>\r
                    {{/basics.email}}\r
                    {{#basics.phone}}\r
                    <span class="contact-item">📞 {{basics.phone}}</span>\r
                    {{/basics.phone}}\r
                    {{#basics.location.city}}\r
                    <span class="contact-item">📍 {{basics.location.city}}, {{basics.location.countryCode}}</span>\r
                    {{/basics.location.city}}\r
                    {{#basics.url}}\r
                    <span class="contact-item">🔗 {{basics.url}}</span>\r
                    {{/basics.url}}\r
                </div>\r
                {{#basics.profiles.length}}\r
                <div class="social-profiles">\r
                    {{#basics.profiles}}\r
                    <a href="{{url}}" class="social-link">{{network}}</a>\r
                    {{/basics.profiles}}\r
                </div>\r
                {{/basics.profiles.length}}\r
            </div>\r
        </header>\r
\r
        <!-- Summary Section -->\r
        {{#basics.summary}}\r
        <section class="section">\r
            <h3 class="section-title">Professional Summary</h3>\r
            <p class="summary">{{basics.summary}}</p>\r
        </section>\r
        {{/basics.summary}}\r
\r
        <!-- Work Experience Section -->\r
        {{#work.length}}\r
        <section class="section">\r
            <h3 class="section-title">Work Experience</h3>\r
            {{#work}}\r
            <div class="entry">\r
                <div class="entry-header">\r
                    <div>\r
                        <h4 class="entry-title">{{position}}</h4>\r
                        <p class="entry-subtitle">{{name}}</p>\r
                    </div>\r
                    <div class="entry-date">{{startDate}} - {{endDate}}</div>\r
                </div>\r
                {{#summary}}\r
                <p class="entry-summary">{{summary}}</p>\r
                {{/summary}}\r
                {{#highlights.length}}\r
                <ul class="highlights">\r
                    {{#highlights}}\r
                    <li>{{.}}</li>\r
                    {{/highlights}}\r
                </ul>\r
                {{/highlights.length}}\r
            </div>\r
            {{/work}}\r
        </section>\r
        {{/work.length}}\r
\r
        <!-- Education Section -->\r
        {{#education.length}}\r
        <section class="section">\r
            <h3 class="section-title">Education</h3>\r
            {{#education}}\r
            <div class="entry">\r
                <div class="entry-header">\r
                    <div>\r
                        <h4 class="entry-title">{{studyType}} in {{area}}</h4>\r
                        <p class="entry-subtitle">{{institution}}</p>\r
                    </div>\r
                    <div class="entry-date">{{startDate}} - {{endDate}}</div>\r
                </div>\r
                {{#score}}\r
                <p class="entry-summary">Grade: {{score}}</p>\r
                {{/score}}\r
            </div>\r
            {{/education}}\r
        </section>\r
        {{/education.length}}\r
\r
        <!-- Skills Section -->\r
        {{#skills.length}}\r
        <section class="section">\r
            <h3 class="section-title">Skills</h3>\r
            <div class="skills-grid">\r
                {{#skills}}\r
                <div class="skill-item">\r
                    <h4 class="skill-name">{{name}}</h4>\r
                    {{#level}}\r
                    <span class="skill-level">{{level}}</span>\r
                    {{/level}}\r
                    {{#keywords.length}}\r
                    <div class="skill-keywords">\r
                        {{#keywords}}\r
                        <span class="keyword">{{.}}</span>\r
                        {{/keywords}}\r
                    </div>\r
                    {{/keywords.length}}\r
                </div>\r
                {{/skills}}\r
            </div>\r
        </section>\r
        {{/skills.length}}\r
\r
        <!-- Volunteer Work Section -->\r
        {{#volunteer.length}}\r
        <section class="section">\r
            <h3 class="section-title">Volunteer Work</h3>\r
            {{#volunteer}}\r
            <div class="entry">\r
                <div class="entry-header">\r
                    <div>\r
                        <h4 class="entry-title">{{position}}</h4>\r
                        <p class="entry-subtitle">{{organization}}</p>\r
                    </div>\r
                    <div class="entry-date">{{startDate}} - {{endDate}}</div>\r
                </div>\r
                {{#summary}}\r
                <p class="entry-summary">{{summary}}</p>\r
                {{/summary}}\r
                {{#highlights.length}}\r
                <ul class="highlights">\r
                    {{#highlights}}\r
                    <li>{{.}}</li>\r
                    {{/highlights}}\r
                </ul>\r
                {{/highlights.length}}\r
            </div>\r
            {{/volunteer}}\r
        </section>\r
        {{/volunteer.length}}\r
\r
        <!-- Certifications Section -->\r
        {{#certifications.length}}\r
        <section class="section">\r
            <h3 class="section-title">Certifications</h3>\r
            {{#certifications}}\r
            <div class="entry">\r
                <div class="entry-header">\r
                    <div>\r
                        <h4 class="entry-title">{{name}}</h4>\r
                        <p class="entry-subtitle">{{issuer}}</p>\r
                    </div>\r
                    <div class="entry-date">{{date}}</div>\r
                </div>\r
            </div>\r
            {{/certifications}}\r
        </section>\r
        {{/certifications.length}}\r
\r
        <!-- Publications Section -->\r
        {{#publications.length}}\r
        <section class="section">\r
            <h3 class="section-title">Publications</h3>\r
            {{#publications}}\r
            <div class="entry">\r
                <div class="entry-header">\r
                    <div>\r
                        <h4 class="entry-title">{{name}}</h4>\r
                        <p class="entry-subtitle">{{publisher}}</p>\r
                    </div>\r
                    <div class="entry-date">{{releaseDate}}</div>\r
                </div>\r
                {{#summary}}\r
                <p class="entry-summary">{{summary}}</p>\r
                {{/summary}}\r
            </div>\r
            {{/publications}}\r
        </section>\r
        {{/publications.length}}\r
\r
        <!-- Languages Section -->\r
        {{#languages.length}}\r
        <section class="section">\r
            <h3 class="section-title">Languages</h3>\r
            <div class="languages-grid">\r
                {{#languages}}\r
                <div class="language-item">\r
                    <span class="language-name">{{language}}</span>\r
                    <span class="language-fluency">{{fluency}}</span>\r
                </div>\r
                {{/languages}}\r
            </div>\r
        </section>\r
        {{/languages.length}}\r
\r
        <!-- Interests Section -->\r
        {{#interests.length}}\r
        <section class="section">\r
            <h3 class="section-title">Hobbies & Interests</h3>\r
            <div class="interests-grid">\r
                {{#interests}}\r
                <div class="interest-item">\r
                    <h4 class="interest-name">{{name}}</h4>\r
                    {{#keywords.length}}\r
                    <div class="interest-keywords">\r
                        {{#keywords}}\r
                        <span class="keyword">{{.}}</span>\r
                        {{/keywords}}\r
                    </div>\r
                    {{/keywords.length}}\r
                </div>\r
                {{/interests}}\r
            </div>\r
        </section>\r
        {{/interests.length}}\r
    </div>\r
    </body>\r
\r
</html>`,a0=`:root {\r
    --theme-color: {{themeColor}};\r
    --text-primary: #1a1a1a;\r
    --text-secondary: #666666;\r
    --background: #ffffff;\r
    --accent: hsl(from var(--theme-color) h s calc(l * 1.2));\r
}\r
\r
* {\r
    margin: 0;\r
    padding: 0;\r
    box-sizing: border-box;\r
}\r
\r
body {\r
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;\r
    color: var(--text-primary);\r
    background: var(--background);\r
    line-height: 1.6;\r
}\r
\r
.resume {\r
    max-width: 210mm;\r
    margin: 0 auto;\r
    padding: 20mm;\r
    background: white;\r
}\r
\r
.header {\r
    background: linear-gradient(135deg, var(--theme-color) 0%, var(--accent) 100%);\r
    margin: -20mm -20mm 25mm -20mm;\r
    padding: 25mm 20mm;\r
    color: white;\r
}\r
\r
.profile-image img {\r
    width: 110px;\r
    height: 110px;\r
    border-radius: 50%;\r
    object-fit: cover;\r
    border: 4px solid white;\r
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\r
}\r
\r
.name {\r
    font-size: 38px;\r
    font-weight: 800;\r
    color: white;\r
    margin-bottom: 5px;\r
}\r
\r
.label {\r
    font-size: 19px;\r
    color: rgba(255, 255, 255, 0.95);\r
    margin-bottom: 15px;\r
}\r
\r
.contact-info {\r
    display: flex;\r
    gap: 18px;\r
    flex-wrap: wrap;\r
    font-size: 14px;\r
    color: rgba(255, 255, 255, 0.9);\r
}\r
\r
.section {\r
    margin-bottom: 25px;\r
}\r
\r
.section-title {\r
    font-size: 22px;\r
    font-weight: 700;\r
    color: var(--theme-color);\r
    margin-bottom: 15px;\r
    padding-left: 15px;\r
    border-left: 5px solid var(--theme-color);\r
}\r
\r
.entry {\r
    margin-bottom: 20px;\r
    padding-left: 15px;\r
}\r
\r
.entry-header {\r
    display: flex;\r
    justify-content: space-between;\r
    margin-bottom: 8px;\r
}\r
\r
.entry-title {\r
    font-size: 17px;\r
    font-weight: 700;\r
    color: var(--theme-color);\r
}\r
\r
.entry-subtitle {\r
    font-size: 15px;\r
    color: var(--text-primary);\r
    font-weight: 500;\r
}\r
\r
.entry-date {\r
    font-size: 13px;\r
    color: var(--text-secondary);\r
    font-style: italic;\r
}\r
\r
.highlights {\r
    list-style: none;\r
    margin-left: 15px;\r
    font-size: 14px;\r
}\r
\r
.highlights li {\r
    position: relative;\r
    padding-left: 20px;\r
    margin-bottom: 6px;\r
}\r
\r
.highlights li:before {\r
    content: '▸';\r
    color: var(--theme-color);\r
    position: absolute;\r
    left: 0;\r
    font-size: 16px;\r
}\r
\r
.skills-grid {\r
    display: grid;\r
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\r
    gap: 12px;\r
}\r
\r
.skill-item {\r
    padding: 12px;\r
    background: linear-gradient(135deg, var(--theme-color) 0%, var(--accent) 100%);\r
    color: white;\r
    border-radius: 8px;\r
}\r
\r
.skill-name {\r
    color: white;\r
    font-weight: 600;\r
    margin-bottom: 5px;\r
}\r
\r
.skill-level {\r
    color: rgba(255, 255, 255, 0.8);\r
    font-size: 12px;\r
}\r
\r
.keyword {\r
    display: inline-block;\r
    background: rgba(255, 255, 255, 0.2);\r
    padding: 3px 8px;\r
    border-radius: 10px;\r
    font-size: 11px;\r
    margin: 2px;\r
}\r
\r
.languages-grid,\r
.interests-grid {\r
    display: flex;\r
    gap: 12px;\r
    flex-wrap: wrap;\r
}\r
\r
.language-item,\r
.interest-item {\r
    padding: 8px 15px;\r
    background: rgba(var(--theme-color), 0.1);\r
    border-radius: 20px;\r
    font-size: 14px;\r
}\r
\r
/* ONE PAGE MODE */\r
body.one-page-mode {\r
    font-size: 0.85em;\r
}\r
\r
body.one-page-mode .header {\r
    padding: 18mm 20mm;\r
}\r
\r
body.one-page-mode .section {\r
    margin-bottom: 18px;\r
}\r
\r
@media print {\r
    @page {\r
        size: A4;\r
        margin: 0;\r
    }\r
\r
    body {\r
        margin: 0;\r
        padding: 0;\r
    }\r
\r
    .resume {\r
        padding: 15mm;\r
    }\r
\r
    .header {\r
        margin: -15mm -15mm 20mm -15mm;\r
        padding: 20mm 15mm;\r
    }\r
}\r
\r
@media screen {\r
    body {\r
        background: #f0f0f0;\r
        padding: 20px;\r
    }\r
\r
    .resume {\r
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\r
    }\r
}`,u0={modern:{html:n0,css:t0},classic:{html:r0,css:l0},minimal:{html:s0,css:i0},creative:{html:o0,css:a0}};function rp(e,n){const t=u0[e];if(!t)throw new Error(`Template "${e}" not found`);const r=He.render(t.css,{themeColor:n.meta.themeColor}),l={...n,styles:r};return He.render(t.html,l)}const c0={basics:{name:"John Doe",label:"Full Stack Developer",image:"",email:"john.doe@example.com",phone:"+1 (555) 123-4567",url:"https://johndoe.dev",summary:"Experienced software developer with a passion for creating elegant solutions to complex problems. Specialized in modern web technologies and cloud architecture.",location:{address:"",postalCode:"",city:"San Francisco",countryCode:"US",region:"California"},profiles:[{network:"LinkedIn",username:"johndoe",url:"https://linkedin.com/in/johndoe"},{network:"GitHub",username:"johndoe",url:"https://github.com/johndoe"}]},work:[{name:"Tech Company Inc",position:"Senior Software Engineer",url:"https://techcompany.com",startDate:"Jan 2020",endDate:"Present",summary:"Leading development of cloud-native applications and microservices.",highlights:["Architected and deployed scalable microservices handling 1M+ requests/day","Reduced deployment time by 60% through CI/CD pipeline optimization","Mentored junior developers and conducted code reviews"]},{name:"StartUp Co",position:"Full Stack Developer",url:"",startDate:"Jun 2018",endDate:"Dec 2019",summary:"Built web applications from concept to production.",highlights:["Developed responsive web applications using React and Node.js","Implemented real-time features using WebSockets"]}],education:[{institution:"University of Technology",url:"",area:"Computer Science",studyType:"Bachelor of Science",startDate:"2014",endDate:"2018",score:"3.8 GPA"}],skills:[{name:"Frontend Development",level:"Expert",keywords:["React","TypeScript","Next.js","Tailwind CSS"]},{name:"Backend Development",level:"Advanced",keywords:["Node.js","Python","PostgreSQL","Redis"]},{name:"DevOps",level:"Intermediate",keywords:["Docker","Kubernetes","AWS","CI/CD"]}],volunteer:[{organization:"Code for Good",position:"Volunteer Developer",url:"",startDate:"2019",endDate:"Present",summary:"Building websites for non-profit organizations.",highlights:["Created websites for 5+ local charities"]}],languages:[{language:"English",fluency:"Native"},{language:"Spanish",fluency:"Professional"}],interests:[{name:"Open Source",keywords:["Contributing to OSS projects","Building developer tools"]},{name:"Photography",keywords:["Landscape","Street photography"]}],certifications:[{name:"AWS Certified Solutions Architect",date:"2022",issuer:"Amazon Web Services",url:""}],publications:[{name:"Building Scalable Web Applications",publisher:"Tech Blog",releaseDate:"2023",url:"https://techblog.com/article",summary:"An in-depth guide to building and scaling modern web applications."}]};function lp(e){const n=e.basics.name.trim()!==""||e.basics.email.trim()!=="",t=e.work.length>0||e.education.length>0||e.skills.length>0;return!n&&!t}function d0(e){return lp(e)?{...c0,meta:e.meta}:e}function f0(){const e=w.useRef(null),n=T(r=>r.resume);w.useEffect(()=>{var s;if(!e.current)return;const r=e.current,l=r.contentDocument||((s=r.contentWindow)==null?void 0:s.document);if(l)try{const i=d0(n),o=rp(n.meta.templateName,i);l.open(),l.write(o),l.close();const a=()=>{if(l.body){const c=l.body.scrollHeight;r.style.height=`${c}px`}};setTimeout(a,100),setTimeout(a,500)}catch(i){console.error("Error rendering template:",i),l.open(),l.write(`
        <html>
          <body style="font-family: sans-serif; padding: 20px; color: #721c24; background: #f8d7da;">
            <h2>Error Rendering Template</h2>
            <p>${i instanceof Error?i.message:"Unknown error"}</p>
          </body>
        </html>
      `),l.close()}},[n]);const t=lp(n);return u.jsxs("div",{className:"w-full h-full overflow-auto bg-gray-100 p-6",children:[t&&u.jsxs("div",{className:"mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800",children:[u.jsx("strong",{children:"Preview Mode:"})," This is sample data to demonstrate the template design. Start filling in your information in the editor to see your own CV."]}),u.jsx("iframe",{ref:e,title:"CV Preview",className:"w-full bg-white shadow-lg",style:{border:"none",minHeight:"100vh"}})]})}function p0(){const e=T(a=>a.resume),n=T(a=>a.importResume),t=w.useRef(null),r=()=>{const a=JSON.stringify(e,null,2),c=new Blob([a],{type:"application/json"}),d=URL.createObjectURL(c),f=document.createElement("a");f.href=d,f.download=`cv-${e.basics.name.replace(/\s+/g,"-").toLowerCase()||"resume"}.json`,f.click(),URL.revokeObjectURL(d)},l=()=>{var a;(a=t.current)==null||a.click()},s=a=>{var f;const c=(f=a.target.files)==null?void 0:f[0];if(!c)return;const d=new FileReader;d.onload=h=>{var v;try{const y=JSON.parse((v=h.target)==null?void 0:v.result);if(!y.basics||typeof y.basics!="object")throw new Error("Missing required field: basics");if(!y.meta||typeof y.meta!="object")throw new Error("Missing required field: meta");if(!y.meta.templateName)throw new Error("Missing required field: meta.templateName");y.work=Array.isArray(y.work)?y.work:[],y.education=Array.isArray(y.education)?y.education:[],y.skills=Array.isArray(y.skills)?y.skills:[],y.volunteer=Array.isArray(y.volunteer)?y.volunteer:[],y.languages=Array.isArray(y.languages)?y.languages:[],y.interests=Array.isArray(y.interests)?y.interests:[],y.certifications=Array.isArray(y.certifications)?y.certifications:[],y.publications=Array.isArray(y.publications)?y.publications:[],Array.isArray(y.basics.profiles)||(y.basics.profiles=[]),n(y),alert("CV imported successfully!")}catch(y){const x=y instanceof Error?y.message:"Invalid JSON file";alert(`Error importing CV: ${x}`),console.error(y)}},d.readAsText(c),a.target.value=""},i=()=>{try{const a=rp(e.meta.templateName,e),c=new Blob([a],{type:"text/html"}),d=URL.createObjectURL(c),f=document.createElement("a");f.href=d,f.download=`cv-${e.basics.name.replace(/\s+/g,"-").toLowerCase()||"resume"}.html`,f.click(),URL.revokeObjectURL(d)}catch(a){alert("Error exporting HTML"),console.error(a)}},o=()=>{const a=document.querySelector("iframe");a!=null&&a.contentWindow?a.contentWindow.print():alert("Preview not available. Please wait for the CV to render.")};return u.jsxs("div",{className:"h-screen flex flex-col",children:[u.jsx(lg,{onExportJson:r,onImportJson:l,onExportHtml:i,onDownloadPdf:o}),u.jsxs("div",{className:"flex-1 flex overflow-hidden",children:[u.jsx("div",{className:"w-1/2 overflow-auto",children:u.jsx(Ay,{})}),u.jsx("div",{className:"w-1/2 overflow-auto",children:u.jsx(f0,{})})]}),u.jsx("input",{ref:t,type:"file",accept:".json",onChange:s,className:"hidden"})]})}Ri.createRoot(document.getElementById("root")).render(u.jsx(ve.StrictMode,{children:u.jsx(p0,{})}));
