(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function tR(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var v0={exports:{}},ld={},w0={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kl=Symbol.for("react.element"),nR=Symbol.for("react.portal"),rR=Symbol.for("react.fragment"),iR=Symbol.for("react.strict_mode"),sR=Symbol.for("react.profiler"),oR=Symbol.for("react.provider"),aR=Symbol.for("react.context"),lR=Symbol.for("react.forward_ref"),uR=Symbol.for("react.suspense"),cR=Symbol.for("react.memo"),dR=Symbol.for("react.lazy"),y_=Symbol.iterator;function hR(n){return n===null||typeof n!="object"?null:(n=y_&&n[y_]||n["@@iterator"],typeof n=="function"?n:null)}var I0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E0=Object.assign,T0={};function So(n,e,t){this.props=n,this.context=e,this.refs=T0,this.updater=t||I0}So.prototype.isReactComponent={};So.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};So.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function S0(){}S0.prototype=So.prototype;function Kp(n,e,t){this.props=n,this.context=e,this.refs=T0,this.updater=t||I0}var Hp=Kp.prototype=new S0;Hp.constructor=Kp;E0(Hp,So.prototype);Hp.isPureReactComponent=!0;var __=Array.isArray,A0=Object.prototype.hasOwnProperty,Qp={current:null},x0={key:!0,ref:!0,__self:!0,__source:!0};function R0(n,e,t){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)A0.call(e,r)&&!x0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(n&&n.defaultProps)for(r in a=n.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:kl,type:n,key:s,ref:o,props:i,_owner:Qp.current}}function fR(n,e){return{$$typeof:kl,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Yp(n){return typeof n=="object"&&n!==null&&n.$$typeof===kl}function pR(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var v_=/\/+/g;function Ph(n,e){return typeof n=="object"&&n!==null&&n.key!=null?pR(""+n.key):e.toString(36)}function qu(n,e,t,r,i){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case kl:case nR:o=!0}}if(o)return o=n,i=i(o),n=r===""?"."+Ph(o,0):r,__(i)?(t="",n!=null&&(t=n.replace(v_,"$&/")+"/"),qu(i,e,t,"",function(c){return c})):i!=null&&(Yp(i)&&(i=fR(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(v_,"$&/")+"/")+n)),e.push(i)),1;if(o=0,r=r===""?".":r+":",__(n))for(var a=0;a<n.length;a++){s=n[a];var u=r+Ph(s,a);o+=qu(s,e,t,u,i)}else if(u=hR(n),typeof u=="function")for(n=u.call(n),a=0;!(s=n.next()).done;)s=s.value,u=r+Ph(s,a++),o+=qu(s,e,t,u,i);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wu(n,e,t){if(n==null)return n;var r=[],i=0;return qu(n,r,"","",function(s){return e.call(t,s,i++)}),r}function mR(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var kt={current:null},Wu={transition:null},gR={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:Wu,ReactCurrentOwner:Qp};function P0(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:wu,forEach:function(n,e,t){wu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return wu(n,function(){e++}),e},toArray:function(n){return wu(n,function(e){return e})||[]},only:function(n){if(!Yp(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ie.Component=So;ie.Fragment=rR;ie.Profiler=sR;ie.PureComponent=Kp;ie.StrictMode=iR;ie.Suspense=uR;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gR;ie.act=P0;ie.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=E0({},n.props),i=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qp.current),e.key!==void 0&&(i=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(u in e)A0.call(e,u)&&!x0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:kl,type:n.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(n){return n={$$typeof:aR,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:oR,_context:n},n.Consumer=n};ie.createElement=R0;ie.createFactory=function(n){var e=R0.bind(null,n);return e.type=n,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(n){return{$$typeof:lR,render:n}};ie.isValidElement=Yp;ie.lazy=function(n){return{$$typeof:dR,_payload:{_status:-1,_result:n},_init:mR}};ie.memo=function(n,e){return{$$typeof:cR,type:n,compare:e===void 0?null:e}};ie.startTransition=function(n){var e=Wu.transition;Wu.transition={};try{n()}finally{Wu.transition=e}};ie.unstable_act=P0;ie.useCallback=function(n,e){return kt.current.useCallback(n,e)};ie.useContext=function(n){return kt.current.useContext(n)};ie.useDebugValue=function(){};ie.useDeferredValue=function(n){return kt.current.useDeferredValue(n)};ie.useEffect=function(n,e){return kt.current.useEffect(n,e)};ie.useId=function(){return kt.current.useId()};ie.useImperativeHandle=function(n,e,t){return kt.current.useImperativeHandle(n,e,t)};ie.useInsertionEffect=function(n,e){return kt.current.useInsertionEffect(n,e)};ie.useLayoutEffect=function(n,e){return kt.current.useLayoutEffect(n,e)};ie.useMemo=function(n,e){return kt.current.useMemo(n,e)};ie.useReducer=function(n,e,t){return kt.current.useReducer(n,e,t)};ie.useRef=function(n){return kt.current.useRef(n)};ie.useState=function(n){return kt.current.useState(n)};ie.useSyncExternalStore=function(n,e,t){return kt.current.useSyncExternalStore(n,e,t)};ie.useTransition=function(){return kt.current.useTransition()};ie.version="18.3.1";w0.exports=ie;var ne=w0.exports;const yR=tR(ne);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _R=ne,vR=Symbol.for("react.element"),wR=Symbol.for("react.fragment"),IR=Object.prototype.hasOwnProperty,ER=_R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,TR={key:!0,ref:!0,__self:!0,__source:!0};function C0(n,e,t){var r,i={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)IR.call(e,r)&&!TR.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:vR,type:n,key:s,ref:o,props:i,_owner:ER.current}}ld.Fragment=wR;ld.jsx=C0;ld.jsxs=C0;v0.exports=ld;var g=v0.exports,_f={},b0={exports:{}},Xt={},k0={exports:{}},N0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(G,X){var te=G.length;G.push(X);e:for(;0<te;){var Pe=te-1>>>1,me=G[Pe];if(0<i(me,X))G[Pe]=X,G[te]=me,te=Pe;else break e}}function t(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var X=G[0],te=G.pop();if(te!==X){G[0]=te;e:for(var Pe=0,me=G.length,Be=me>>>1;Pe<Be;){var Bn=2*(Pe+1)-1,zn=G[Bn],$n=Bn+1,qn=G[$n];if(0>i(zn,te))$n<me&&0>i(qn,zn)?(G[Pe]=qn,G[$n]=te,Pe=$n):(G[Pe]=zn,G[Bn]=te,Pe=Bn);else if($n<me&&0>i(qn,te))G[Pe]=qn,G[$n]=te,Pe=$n;else break e}}return X}function i(G,X){var te=G.sortIndex-X.sortIndex;return te!==0?te:G.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,m=3,v=!1,P=!1,b=!1,V=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(G){for(var X=t(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=G)r(c),X.sortIndex=X.expirationTime,e(u,X);else break;X=t(c)}}function N(G){if(b=!1,A(G),!P)if(t(u)!==null)P=!0,jo(M);else{var X=t(c);X!==null&&Un(N,X.startTime-G)}}function M(G,X){P=!1,b&&(b=!1,S(_),_=-1),v=!0;var te=m;try{for(A(X),f=t(u);f!==null&&(!(f.expirationTime>X)||G&&!C());){var Pe=f.callback;if(typeof Pe=="function"){f.callback=null,m=f.priorityLevel;var me=Pe(f.expirationTime<=X);X=n.unstable_now(),typeof me=="function"?f.callback=me:f===t(u)&&r(u),A(X)}else r(u);f=t(u)}if(f!==null)var Be=!0;else{var Bn=t(c);Bn!==null&&Un(N,Bn.startTime-X),Be=!1}return Be}finally{f=null,m=te,v=!1}}var F=!1,E=null,_=-1,I=5,x=-1;function C(){return!(n.unstable_now()-x<I)}function R(){if(E!==null){var G=n.unstable_now();x=G;var X=!0;try{X=E(!0,G)}finally{X?T():(F=!1,E=null)}}else F=!1}var T;if(typeof w=="function")T=function(){w(R)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,pi=de.port2;de.port1.onmessage=R,T=function(){pi.postMessage(null)}}else T=function(){V(R,0)};function jo(G){E=G,F||(F=!0,T())}function Un(G,X){_=V(function(){G(n.unstable_now())},X)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){P||v||(P=!0,jo(M))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(u)},n.unstable_next=function(G){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var te=m;m=X;try{return G()}finally{m=te}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,X){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var te=m;m=G;try{return X()}finally{m=te}},n.unstable_scheduleCallback=function(G,X,te){var Pe=n.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?Pe+te:Pe):te=Pe,G){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=te+me,G={id:h++,callback:X,priorityLevel:G,startTime:te,expirationTime:me,sortIndex:-1},te>Pe?(G.sortIndex=te,e(c,G),t(u)===null&&G===t(c)&&(b?(S(_),_=-1):b=!0,Un(N,te-Pe))):(G.sortIndex=me,e(u,G),P||v||(P=!0,jo(M))),G},n.unstable_shouldYield=C,n.unstable_wrapCallback=function(G){var X=m;return function(){var te=m;m=X;try{return G.apply(this,arguments)}finally{m=te}}}})(N0);k0.exports=N0;var SR=k0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AR=ne,Yt=SR;function B(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var D0=new Set,qa={};function rs(n,e){Zs(n,e),Zs(n+"Capture",e)}function Zs(n,e){for(qa[n]=e,n=0;n<e.length;n++)D0.add(e[n])}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vf=Object.prototype.hasOwnProperty,xR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w_={},I_={};function RR(n){return vf.call(I_,n)?!0:vf.call(w_,n)?!1:xR.test(n)?I_[n]=!0:(w_[n]=!0,!1)}function PR(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function CR(n,e,t,r){if(e===null||typeof e>"u"||PR(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Nt(n,e,t,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){ct[n]=new Nt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];ct[e]=new Nt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){ct[n]=new Nt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){ct[n]=new Nt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){ct[n]=new Nt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){ct[n]=new Nt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){ct[n]=new Nt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){ct[n]=new Nt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){ct[n]=new Nt(n,5,!1,n.toLowerCase(),null,!1,!1)});var Jp=/[\-:]([a-z])/g;function Xp(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Jp,Xp);ct[e]=new Nt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Jp,Xp);ct[e]=new Nt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Jp,Xp);ct[e]=new Nt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){ct[n]=new Nt(n,1,!1,n.toLowerCase(),null,!1,!1)});ct.xlinkHref=new Nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){ct[n]=new Nt(n,1,!1,n.toLowerCase(),null,!0,!0)});function Zp(n,e,t,r){var i=ct.hasOwnProperty(e)?ct[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(CR(e,t,i,r)&&(t=null),r||i===null?RR(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):i.mustUseProperty?n[i.propertyName]=t===null?i.type===3?!1:"":t:(e=i.attributeName,r=i.attributeNamespace,t===null?n.removeAttribute(e):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var dr=AR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Iu=Symbol.for("react.element"),Ps=Symbol.for("react.portal"),Cs=Symbol.for("react.fragment"),em=Symbol.for("react.strict_mode"),wf=Symbol.for("react.profiler"),V0=Symbol.for("react.provider"),O0=Symbol.for("react.context"),tm=Symbol.for("react.forward_ref"),If=Symbol.for("react.suspense"),Ef=Symbol.for("react.suspense_list"),nm=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),L0=Symbol.for("react.offscreen"),E_=Symbol.iterator;function Zo(n){return n===null||typeof n!="object"?null:(n=E_&&n[E_]||n["@@iterator"],typeof n=="function"?n:null)}var Ne=Object.assign,Ch;function ma(n){if(Ch===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Ch=e&&e[1]||""}return`
`+Ch+n}var bh=!1;function kh(n,e){if(!n||bh)return"";bh=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){r=c}n.call(e.prototype)}else{try{throw Error()}catch(c){r=c}n()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return n.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",n.displayName)),u}while(1<=o&&0<=a);break}}}finally{bh=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ma(n):""}function bR(n){switch(n.tag){case 5:return ma(n.type);case 16:return ma("Lazy");case 13:return ma("Suspense");case 19:return ma("SuspenseList");case 0:case 2:case 15:return n=kh(n.type,!1),n;case 11:return n=kh(n.type.render,!1),n;case 1:return n=kh(n.type,!0),n;default:return""}}function Tf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Cs:return"Fragment";case Ps:return"Portal";case wf:return"Profiler";case em:return"StrictMode";case If:return"Suspense";case Ef:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O0:return(n.displayName||"Context")+".Consumer";case V0:return(n._context.displayName||"Context")+".Provider";case tm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case nm:return e=n.displayName||null,e!==null?e:Tf(n.type)||"Memo";case Ar:e=n._payload,n=n._init;try{return Tf(n(e))}catch{}}return null}function kR(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tf(e);case 8:return e===em?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function M0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function NR(n){var e=M0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Eu(n){n._valueTracker||(n._valueTracker=NR(n))}function F0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=M0(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function mc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Sf(n,e){var t=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function T_(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=Gr(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function j0(n,e){e=e.checked,e!=null&&Zp(n,"checked",e,!1)}function Af(n,e){j0(n,e);var t=Gr(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?xf(n,e.type,t):e.hasOwnProperty("defaultValue")&&xf(n,e.type,Gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function S_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function xf(n,e,t){(e!=="number"||mc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var ga=Array.isArray;function Bs(n,e,t,r){if(n=n.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<n.length;t++)i=e.hasOwnProperty("$"+n[t].value),n[t].selected!==i&&(n[t].selected=i),i&&r&&(n[t].defaultSelected=!0)}else{for(t=""+Gr(t),e=null,i=0;i<n.length;i++){if(n[i].value===t){n[i].selected=!0,r&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function Rf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function A_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(B(92));if(ga(t)){if(1<t.length)throw Error(B(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Gr(t)}}function U0(n,e){var t=Gr(e.value),r=Gr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function x_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function B0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?B0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Tu,z0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,i){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,i)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Tu=Tu||document.createElement("div"),Tu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Tu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Wa(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var xa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},DR=["Webkit","ms","Moz","O"];Object.keys(xa).forEach(function(n){DR.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),xa[e]=xa[n]})});function $0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||xa.hasOwnProperty(n)&&xa[n]?(""+e).trim():e+"px"}function q0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=$0(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,i):n[t]=i}}var VR=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cf(n,e){if(e){if(VR[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function bf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kf=null;function rm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Nf=null,zs=null,$s=null;function R_(n){if(n=Vl(n)){if(typeof Nf!="function")throw Error(B(280));var e=n.stateNode;e&&(e=fd(e),Nf(n.stateNode,n.type,e))}}function W0(n){zs?$s?$s.push(n):$s=[n]:zs=n}function G0(){if(zs){var n=zs,e=$s;if($s=zs=null,R_(n),e)for(n=0;n<e.length;n++)R_(e[n])}}function K0(n,e){return n(e)}function H0(){}var Nh=!1;function Q0(n,e,t){if(Nh)return n(e,t);Nh=!0;try{return K0(n,e,t)}finally{Nh=!1,(zs!==null||$s!==null)&&(H0(),G0())}}function Ga(n,e){var t=n.stateNode;if(t===null)return null;var r=fd(t);if(r===null)return null;t=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(B(231,e,typeof t));return t}var Df=!1;if(rr)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){Df=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{Df=!1}function OR(n,e,t,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(h){this.onError(h)}}var Ra=!1,gc=null,yc=!1,Vf=null,LR={onError:function(n){Ra=!0,gc=n}};function MR(n,e,t,r,i,s,o,a,u){Ra=!1,gc=null,OR.apply(LR,arguments)}function FR(n,e,t,r,i,s,o,a,u){if(MR.apply(this,arguments),Ra){if(Ra){var c=gc;Ra=!1,gc=null}else throw Error(B(198));yc||(yc=!0,Vf=c)}}function is(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Y0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function P_(n){if(is(n)!==n)throw Error(B(188))}function jR(n){var e=n.alternate;if(!e){if(e=is(n),e===null)throw Error(B(188));return e!==n?null:n}for(var t=n,r=e;;){var i=t.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===t)return P_(i),n;if(s===r)return P_(i),e;s=s.sibling}throw Error(B(188))}if(t.return!==r.return)t=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===t){o=!0,t=i,r=s;break}if(a===r){o=!0,r=i,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,r=i;break}if(a===r){o=!0,r=s,t=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(t.alternate!==r)throw Error(B(190))}if(t.tag!==3)throw Error(B(188));return t.stateNode.current===t?n:e}function J0(n){return n=jR(n),n!==null?X0(n):null}function X0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=X0(n);if(e!==null)return e;n=n.sibling}return null}var Z0=Yt.unstable_scheduleCallback,C_=Yt.unstable_cancelCallback,UR=Yt.unstable_shouldYield,BR=Yt.unstable_requestPaint,ze=Yt.unstable_now,zR=Yt.unstable_getCurrentPriorityLevel,im=Yt.unstable_ImmediatePriority,eI=Yt.unstable_UserBlockingPriority,_c=Yt.unstable_NormalPriority,$R=Yt.unstable_LowPriority,tI=Yt.unstable_IdlePriority,ud=null,bn=null;function qR(n){if(bn&&typeof bn.onCommitFiberRoot=="function")try{bn.onCommitFiberRoot(ud,n,void 0,(n.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:KR,WR=Math.log,GR=Math.LN2;function KR(n){return n>>>=0,n===0?32:31-(WR(n)/GR|0)|0}var Su=64,Au=4194304;function ya(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vc(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,i=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~i;a!==0?r=ya(a):(s&=o,s!==0&&(r=ya(s)))}else o=t&~i,o!==0?r=ya(o):s!==0&&(r=ya(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-mn(e),i=1<<t,r|=n[t],e&=~i;return r}function HR(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function QR(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,i=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-mn(s),a=1<<o,u=i[o];u===-1?(!(a&t)||a&r)&&(i[o]=HR(a,e)):u<=e&&(n.expiredLanes|=a),s&=~a}}function Of(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function nI(){var n=Su;return Su<<=1,!(Su&4194240)&&(Su=64),n}function Dh(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Nl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-mn(e),n[e]=t}function YR(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var i=31-mn(t),s=1<<i;e[i]=0,r[i]=-1,n[i]=-1,t&=~s}}function sm(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-mn(t),i=1<<r;i&e|n[r]&e&&(n[r]|=e),t&=~i}}var fe=0;function rI(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var iI,om,sI,oI,aI,Lf=!1,xu=[],Lr=null,Mr=null,Fr=null,Ka=new Map,Ha=new Map,Pr=[],JR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function b_(n,e){switch(n){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":Ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ha.delete(e.pointerId)}}function ta(n,e,t,r,i,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Vl(e),e!==null&&om(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function XR(n,e,t,r,i){switch(e){case"focusin":return Lr=ta(Lr,n,e,t,r,i),!0;case"dragenter":return Mr=ta(Mr,n,e,t,r,i),!0;case"mouseover":return Fr=ta(Fr,n,e,t,r,i),!0;case"pointerover":var s=i.pointerId;return Ka.set(s,ta(Ka.get(s)||null,n,e,t,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ha.set(s,ta(Ha.get(s)||null,n,e,t,r,i)),!0}return!1}function lI(n){var e=Ci(n.target);if(e!==null){var t=is(e);if(t!==null){if(e=t.tag,e===13){if(e=Y0(t),e!==null){n.blockedOn=e,aI(n.priority,function(){sI(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Gu(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Mf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);kf=r,t.target.dispatchEvent(r),kf=null}else return e=Vl(t),e!==null&&om(e),n.blockedOn=t,!1;e.shift()}return!0}function k_(n,e,t){Gu(n)&&t.delete(e)}function ZR(){Lf=!1,Lr!==null&&Gu(Lr)&&(Lr=null),Mr!==null&&Gu(Mr)&&(Mr=null),Fr!==null&&Gu(Fr)&&(Fr=null),Ka.forEach(k_),Ha.forEach(k_)}function na(n,e){n.blockedOn===e&&(n.blockedOn=null,Lf||(Lf=!0,Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority,ZR)))}function Qa(n){function e(i){return na(i,n)}if(0<xu.length){na(xu[0],n);for(var t=1;t<xu.length;t++){var r=xu[t];r.blockedOn===n&&(r.blockedOn=null)}}for(Lr!==null&&na(Lr,n),Mr!==null&&na(Mr,n),Fr!==null&&na(Fr,n),Ka.forEach(e),Ha.forEach(e),t=0;t<Pr.length;t++)r=Pr[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<Pr.length&&(t=Pr[0],t.blockedOn===null);)lI(t),t.blockedOn===null&&Pr.shift()}var qs=dr.ReactCurrentBatchConfig,wc=!0;function eP(n,e,t,r){var i=fe,s=qs.transition;qs.transition=null;try{fe=1,am(n,e,t,r)}finally{fe=i,qs.transition=s}}function tP(n,e,t,r){var i=fe,s=qs.transition;qs.transition=null;try{fe=4,am(n,e,t,r)}finally{fe=i,qs.transition=s}}function am(n,e,t,r){if(wc){var i=Mf(n,e,t,r);if(i===null)$h(n,e,r,Ic,t),b_(n,r);else if(XR(i,n,e,t,r))r.stopPropagation();else if(b_(n,r),e&4&&-1<JR.indexOf(n)){for(;i!==null;){var s=Vl(i);if(s!==null&&iI(s),s=Mf(n,e,t,r),s===null&&$h(n,e,r,Ic,t),s===i)break;i=s}i!==null&&r.stopPropagation()}else $h(n,e,r,null,t)}}var Ic=null;function Mf(n,e,t,r){if(Ic=null,n=rm(r),n=Ci(n),n!==null)if(e=is(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Y0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Ic=n,null}function uI(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zR()){case im:return 1;case eI:return 4;case _c:case $R:return 16;case tI:return 536870912;default:return 16}default:return 16}}var Nr=null,lm=null,Ku=null;function cI(){if(Ku)return Ku;var n,e=lm,t=e.length,r,i="value"in Nr?Nr.value:Nr.textContent,s=i.length;for(n=0;n<t&&e[n]===i[n];n++);var o=t-n;for(r=1;r<=o&&e[t-r]===i[s-r];r++);return Ku=i.slice(n,1<r?1-r:void 0)}function Hu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ru(){return!0}function N_(){return!1}function Zt(n){function e(t,r,i,s,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ru:N_,this.isPropagationStopped=N_,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ru)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ru)},persist:function(){},isPersistent:Ru}),e}var Ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},um=Zt(Ao),Dl=Ne({},Ao,{view:0,detail:0}),nP=Zt(Dl),Vh,Oh,ra,cd=Ne({},Dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ra&&(ra&&n.type==="mousemove"?(Vh=n.screenX-ra.screenX,Oh=n.screenY-ra.screenY):Oh=Vh=0,ra=n),Vh)},movementY:function(n){return"movementY"in n?n.movementY:Oh}}),D_=Zt(cd),rP=Ne({},cd,{dataTransfer:0}),iP=Zt(rP),sP=Ne({},Dl,{relatedTarget:0}),Lh=Zt(sP),oP=Ne({},Ao,{animationName:0,elapsedTime:0,pseudoElement:0}),aP=Zt(oP),lP=Ne({},Ao,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),uP=Zt(lP),cP=Ne({},Ao,{data:0}),V_=Zt(cP),dP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pP(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=fP[n])?!!e[n]:!1}function cm(){return pP}var mP=Ne({},Dl,{key:function(n){if(n.key){var e=dP[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Hu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?hP[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cm,charCode:function(n){return n.type==="keypress"?Hu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Hu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),gP=Zt(mP),yP=Ne({},cd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),O_=Zt(yP),_P=Ne({},Dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cm}),vP=Zt(_P),wP=Ne({},Ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),IP=Zt(wP),EP=Ne({},cd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),TP=Zt(EP),SP=[9,13,27,32],dm=rr&&"CompositionEvent"in window,Pa=null;rr&&"documentMode"in document&&(Pa=document.documentMode);var AP=rr&&"TextEvent"in window&&!Pa,dI=rr&&(!dm||Pa&&8<Pa&&11>=Pa),L_=" ",M_=!1;function hI(n,e){switch(n){case"keyup":return SP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fI(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function xP(n,e){switch(n){case"compositionend":return fI(e);case"keypress":return e.which!==32?null:(M_=!0,L_);case"textInput":return n=e.data,n===L_&&M_?null:n;default:return null}}function RP(n,e){if(bs)return n==="compositionend"||!dm&&hI(n,e)?(n=cI(),Ku=lm=Nr=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dI&&e.locale!=="ko"?null:e.data;default:return null}}var PP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function F_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!PP[n.type]:e==="textarea"}function pI(n,e,t,r){W0(r),e=Ec(e,"onChange"),0<e.length&&(t=new um("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var Ca=null,Ya=null;function CP(n){AI(n,0)}function dd(n){var e=Ds(n);if(F0(e))return n}function bP(n,e){if(n==="change")return e}var mI=!1;if(rr){var Mh;if(rr){var Fh="oninput"in document;if(!Fh){var j_=document.createElement("div");j_.setAttribute("oninput","return;"),Fh=typeof j_.oninput=="function"}Mh=Fh}else Mh=!1;mI=Mh&&(!document.documentMode||9<document.documentMode)}function U_(){Ca&&(Ca.detachEvent("onpropertychange",gI),Ya=Ca=null)}function gI(n){if(n.propertyName==="value"&&dd(Ya)){var e=[];pI(e,Ya,n,rm(n)),Q0(CP,e)}}function kP(n,e,t){n==="focusin"?(U_(),Ca=e,Ya=t,Ca.attachEvent("onpropertychange",gI)):n==="focusout"&&U_()}function NP(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return dd(Ya)}function DP(n,e){if(n==="click")return dd(e)}function VP(n,e){if(n==="input"||n==="change")return dd(e)}function OP(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var _n=typeof Object.is=="function"?Object.is:OP;function Ja(n,e){if(_n(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!vf.call(e,i)||!_n(n[i],e[i]))return!1}return!0}function B_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function z_(n,e){var t=B_(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=B_(t)}}function yI(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?yI(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function _I(){for(var n=window,e=mc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=mc(n.document)}return e}function hm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function LP(n){var e=_I(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&yI(t.ownerDocument.documentElement,t)){if(r!==null&&hm(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var i=t.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!n.extend&&s>r&&(i=r,r=s,s=i),i=z_(t,s);var o=z_(t,r);i&&o&&(n.rangeCount!==1||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),n.removeAllRanges(),s>r?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var MP=rr&&"documentMode"in document&&11>=document.documentMode,ks=null,Ff=null,ba=null,jf=!1;function $_(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;jf||ks==null||ks!==mc(r)||(r=ks,"selectionStart"in r&&hm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ba&&Ja(ba,r)||(ba=r,r=Ec(Ff,"onSelect"),0<r.length&&(e=new um("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=ks)))}function Pu(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ns={animationend:Pu("Animation","AnimationEnd"),animationiteration:Pu("Animation","AnimationIteration"),animationstart:Pu("Animation","AnimationStart"),transitionend:Pu("Transition","TransitionEnd")},jh={},vI={};rr&&(vI=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function hd(n){if(jh[n])return jh[n];if(!Ns[n])return n;var e=Ns[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in vI)return jh[n]=e[t];return n}var wI=hd("animationend"),II=hd("animationiteration"),EI=hd("animationstart"),TI=hd("transitionend"),SI=new Map,q_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function si(n,e){SI.set(n,e),rs(e,[n])}for(var Uh=0;Uh<q_.length;Uh++){var Bh=q_[Uh],FP=Bh.toLowerCase(),jP=Bh[0].toUpperCase()+Bh.slice(1);si(FP,"on"+jP)}si(wI,"onAnimationEnd");si(II,"onAnimationIteration");si(EI,"onAnimationStart");si("dblclick","onDoubleClick");si("focusin","onFocus");si("focusout","onBlur");si(TI,"onTransitionEnd");Zs("onMouseEnter",["mouseout","mouseover"]);Zs("onMouseLeave",["mouseout","mouseover"]);Zs("onPointerEnter",["pointerout","pointerover"]);Zs("onPointerLeave",["pointerout","pointerover"]);rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UP=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function W_(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,FR(r,e,void 0,n),n.currentTarget=null}function AI(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;W_(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;W_(i,a,c),s=u}}}if(yc)throw n=Vf,yc=!1,Vf=null,n}function we(n,e){var t=e[qf];t===void 0&&(t=e[qf]=new Set);var r=n+"__bubble";t.has(r)||(xI(e,n,2,!1),t.add(r))}function zh(n,e,t){var r=0;e&&(r|=4),xI(t,n,r,e)}var Cu="_reactListening"+Math.random().toString(36).slice(2);function Xa(n){if(!n[Cu]){n[Cu]=!0,D0.forEach(function(t){t!=="selectionchange"&&(UP.has(t)||zh(t,!1,n),zh(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Cu]||(e[Cu]=!0,zh("selectionchange",!1,e))}}function xI(n,e,t,r){switch(uI(e)){case 1:var i=eP;break;case 4:i=tP;break;default:i=am}t=i.bind(null,e,t,n),i=void 0,!Df||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?n.addEventListener(e,t,{capture:!0,passive:i}):n.addEventListener(e,t,!0):i!==void 0?n.addEventListener(e,t,{passive:i}):n.addEventListener(e,t,!1)}function $h(n,e,t,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ci(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Q0(function(){var c=s,h=rm(t),f=[];e:{var m=SI.get(n);if(m!==void 0){var v=um,P=n;switch(n){case"keypress":if(Hu(t)===0)break e;case"keydown":case"keyup":v=gP;break;case"focusin":P="focus",v=Lh;break;case"focusout":P="blur",v=Lh;break;case"beforeblur":case"afterblur":v=Lh;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=D_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=iP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=vP;break;case wI:case II:case EI:v=aP;break;case TI:v=IP;break;case"scroll":v=nP;break;case"wheel":v=TP;break;case"copy":case"cut":case"paste":v=uP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=O_}var b=(e&4)!==0,V=!b&&n==="scroll",S=b?m!==null?m+"Capture":null:m;b=[];for(var w=c,A;w!==null;){A=w;var N=A.stateNode;if(A.tag===5&&N!==null&&(A=N,S!==null&&(N=Ga(w,S),N!=null&&b.push(Za(w,N,A)))),V)break;w=w.return}0<b.length&&(m=new v(m,P,null,t,h),f.push({event:m,listeners:b}))}}if(!(e&7)){e:{if(m=n==="mouseover"||n==="pointerover",v=n==="mouseout"||n==="pointerout",m&&t!==kf&&(P=t.relatedTarget||t.fromElement)&&(Ci(P)||P[ir]))break e;if((v||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,v?(P=t.relatedTarget||t.toElement,v=c,P=P?Ci(P):null,P!==null&&(V=is(P),P!==V||P.tag!==5&&P.tag!==6)&&(P=null)):(v=null,P=c),v!==P)){if(b=D_,N="onMouseLeave",S="onMouseEnter",w="mouse",(n==="pointerout"||n==="pointerover")&&(b=O_,N="onPointerLeave",S="onPointerEnter",w="pointer"),V=v==null?m:Ds(v),A=P==null?m:Ds(P),m=new b(N,w+"leave",v,t,h),m.target=V,m.relatedTarget=A,N=null,Ci(h)===c&&(b=new b(S,w+"enter",P,t,h),b.target=A,b.relatedTarget=V,N=b),V=N,v&&P)t:{for(b=v,S=P,w=0,A=b;A;A=ys(A))w++;for(A=0,N=S;N;N=ys(N))A++;for(;0<w-A;)b=ys(b),w--;for(;0<A-w;)S=ys(S),A--;for(;w--;){if(b===S||S!==null&&b===S.alternate)break t;b=ys(b),S=ys(S)}b=null}else b=null;v!==null&&G_(f,m,v,b,!1),P!==null&&V!==null&&G_(f,V,P,b,!0)}}e:{if(m=c?Ds(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var M=bP;else if(F_(m))if(mI)M=VP;else{M=NP;var F=kP}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=DP);if(M&&(M=M(n,c))){pI(f,M,t,h);break e}F&&F(n,m,c),n==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&xf(m,"number",m.value)}switch(F=c?Ds(c):window,n){case"focusin":(F_(F)||F.contentEditable==="true")&&(ks=F,Ff=c,ba=null);break;case"focusout":ba=Ff=ks=null;break;case"mousedown":jf=!0;break;case"contextmenu":case"mouseup":case"dragend":jf=!1,$_(f,t,h);break;case"selectionchange":if(MP)break;case"keydown":case"keyup":$_(f,t,h)}var E;if(dm)e:{switch(n){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else bs?hI(n,t)&&(_="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(dI&&t.locale!=="ko"&&(bs||_!=="onCompositionStart"?_==="onCompositionEnd"&&bs&&(E=cI()):(Nr=h,lm="value"in Nr?Nr.value:Nr.textContent,bs=!0)),F=Ec(c,_),0<F.length&&(_=new V_(_,n,null,t,h),f.push({event:_,listeners:F}),E?_.data=E:(E=fI(t),E!==null&&(_.data=E)))),(E=AP?xP(n,t):RP(n,t))&&(c=Ec(c,"onBeforeInput"),0<c.length&&(h=new V_("onBeforeInput","beforeinput",null,t,h),f.push({event:h,listeners:c}),h.data=E))}AI(f,e)})}function Za(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ec(n,e){for(var t=e+"Capture",r=[];n!==null;){var i=n,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ga(n,t),s!=null&&r.unshift(Za(n,s,i)),s=Ga(n,e),s!=null&&r.push(Za(n,s,i))),n=n.return}return r}function ys(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function G_(n,e,t,r,i){for(var s=e._reactName,o=[];t!==null&&t!==r;){var a=t,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Ga(t,s),u!=null&&o.unshift(Za(t,u,a))):i||(u=Ga(t,s),u!=null&&o.push(Za(t,u,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var BP=/\r\n?/g,zP=/\u0000|\uFFFD/g;function K_(n){return(typeof n=="string"?n:""+n).replace(BP,`
`).replace(zP,"")}function bu(n,e,t){if(e=K_(e),K_(n)!==e&&t)throw Error(B(425))}function Tc(){}var Uf=null,Bf=null;function zf(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $f=typeof setTimeout=="function"?setTimeout:void 0,$P=typeof clearTimeout=="function"?clearTimeout:void 0,H_=typeof Promise=="function"?Promise:void 0,qP=typeof queueMicrotask=="function"?queueMicrotask:typeof H_<"u"?function(n){return H_.resolve(null).then(n).catch(WP)}:$f;function WP(n){setTimeout(function(){throw n})}function qh(n,e){var t=e,r=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){n.removeChild(i),Qa(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Qa(e)}function jr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Q_(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var xo=Math.random().toString(36).slice(2),En="__reactFiber$"+xo,el="__reactProps$"+xo,ir="__reactContainer$"+xo,qf="__reactEvents$"+xo,GP="__reactListeners$"+xo,KP="__reactHandles$"+xo;function Ci(n){var e=n[En];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ir]||t[En]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Q_(n);n!==null;){if(t=n[En])return t;n=Q_(n)}return e}n=t,t=n.parentNode}return null}function Vl(n){return n=n[En]||n[ir],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ds(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(B(33))}function fd(n){return n[el]||null}var Wf=[],Vs=-1;function oi(n){return{current:n}}function Ee(n){0>Vs||(n.current=Wf[Vs],Wf[Vs]=null,Vs--)}function ye(n,e){Vs++,Wf[Vs]=n.current,n.current=e}var Kr={},vt=oi(Kr),Ut=oi(!1),Ui=Kr;function eo(n,e){var t=n.type.contextTypes;if(!t)return Kr;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in t)i[s]=e[s];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=i),i}function Bt(n){return n=n.childContextTypes,n!=null}function Sc(){Ee(Ut),Ee(vt)}function Y_(n,e,t){if(vt.current!==Kr)throw Error(B(168));ye(vt,e),ye(Ut,t)}function RI(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,kR(n)||"Unknown",i));return Ne({},t,r)}function Ac(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Kr,Ui=vt.current,ye(vt,n),ye(Ut,Ut.current),!0}function J_(n,e,t){var r=n.stateNode;if(!r)throw Error(B(169));t?(n=RI(n,e,Ui),r.__reactInternalMemoizedMergedChildContext=n,Ee(Ut),Ee(vt),ye(vt,n)):Ee(Ut),ye(Ut,t)}var Hn=null,pd=!1,Wh=!1;function PI(n){Hn===null?Hn=[n]:Hn.push(n)}function HP(n){pd=!0,PI(n)}function ai(){if(!Wh&&Hn!==null){Wh=!0;var n=0,e=fe;try{var t=Hn;for(fe=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}Hn=null,pd=!1}catch(i){throw Hn!==null&&(Hn=Hn.slice(n+1)),Z0(im,ai),i}finally{fe=e,Wh=!1}}return null}var Os=[],Ls=0,xc=null,Rc=0,en=[],tn=0,Bi=null,Qn=1,Yn="";function wi(n,e){Os[Ls++]=Rc,Os[Ls++]=xc,xc=n,Rc=e}function CI(n,e,t){en[tn++]=Qn,en[tn++]=Yn,en[tn++]=Bi,Bi=n;var r=Qn;n=Yn;var i=32-mn(r)-1;r&=~(1<<i),t+=1;var s=32-mn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Qn=1<<32-mn(e)+i|t<<i|r,Yn=s+n}else Qn=1<<s|t<<i|r,Yn=n}function fm(n){n.return!==null&&(wi(n,1),CI(n,1,0))}function pm(n){for(;n===xc;)xc=Os[--Ls],Os[Ls]=null,Rc=Os[--Ls],Os[Ls]=null;for(;n===Bi;)Bi=en[--tn],en[tn]=null,Yn=en[--tn],en[tn]=null,Qn=en[--tn],en[tn]=null}var Qt=null,Kt=null,Se=!1,pn=null;function bI(n,e){var t=nn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function X_(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Qt=n,Kt=jr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Qt=n,Kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Bi!==null?{id:Qn,overflow:Yn}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=nn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Qt=n,Kt=null,!0):!1;default:return!1}}function Gf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Kf(n){if(Se){var e=Kt;if(e){var t=e;if(!X_(n,e)){if(Gf(n))throw Error(B(418));e=jr(t.nextSibling);var r=Qt;e&&X_(n,e)?bI(r,t):(n.flags=n.flags&-4097|2,Se=!1,Qt=n)}}else{if(Gf(n))throw Error(B(418));n.flags=n.flags&-4097|2,Se=!1,Qt=n}}}function Z_(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Qt=n}function ku(n){if(n!==Qt)return!1;if(!Se)return Z_(n),Se=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!zf(n.type,n.memoizedProps)),e&&(e=Kt)){if(Gf(n))throw kI(),Error(B(418));for(;e;)bI(n,e),e=jr(e.nextSibling)}if(Z_(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(B(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Kt=jr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Kt=null}}else Kt=Qt?jr(n.stateNode.nextSibling):null;return!0}function kI(){for(var n=Kt;n;)n=jr(n.nextSibling)}function to(){Kt=Qt=null,Se=!1}function mm(n){pn===null?pn=[n]:pn.push(n)}var QP=dr.ReactCurrentBatchConfig;function ia(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(B(309));var r=t.stateNode}if(!r)throw Error(B(147,n));var i=r,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(B(284));if(!t._owner)throw Error(B(290,n))}return n}function Nu(n,e){throw n=Object.prototype.toString.call(e),Error(B(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function ev(n){var e=n._init;return e(n._payload)}function NI(n){function e(S,w){if(n){var A=S.deletions;A===null?(S.deletions=[w],S.flags|=16):A.push(w)}}function t(S,w){if(!n)return null;for(;w!==null;)e(S,w),w=w.sibling;return null}function r(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function i(S,w){return S=$r(S,w),S.index=0,S.sibling=null,S}function s(S,w,A){return S.index=A,n?(A=S.alternate,A!==null?(A=A.index,A<w?(S.flags|=2,w):A):(S.flags|=2,w)):(S.flags|=1048576,w)}function o(S){return n&&S.alternate===null&&(S.flags|=2),S}function a(S,w,A,N){return w===null||w.tag!==6?(w=Xh(A,S.mode,N),w.return=S,w):(w=i(w,A),w.return=S,w)}function u(S,w,A,N){var M=A.type;return M===Cs?h(S,w,A.props.children,N,A.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ar&&ev(M)===w.type)?(N=i(w,A.props),N.ref=ia(S,w,A),N.return=S,N):(N=tc(A.type,A.key,A.props,null,S.mode,N),N.ref=ia(S,w,A),N.return=S,N)}function c(S,w,A,N){return w===null||w.tag!==4||w.stateNode.containerInfo!==A.containerInfo||w.stateNode.implementation!==A.implementation?(w=Zh(A,S.mode,N),w.return=S,w):(w=i(w,A.children||[]),w.return=S,w)}function h(S,w,A,N,M){return w===null||w.tag!==7?(w=Li(A,S.mode,N,M),w.return=S,w):(w=i(w,A),w.return=S,w)}function f(S,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Xh(""+w,S.mode,A),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Iu:return A=tc(w.type,w.key,w.props,null,S.mode,A),A.ref=ia(S,null,w),A.return=S,A;case Ps:return w=Zh(w,S.mode,A),w.return=S,w;case Ar:var N=w._init;return f(S,N(w._payload),A)}if(ga(w)||Zo(w))return w=Li(w,S.mode,A,null),w.return=S,w;Nu(S,w)}return null}function m(S,w,A,N){var M=w!==null?w.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return M!==null?null:a(S,w,""+A,N);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Iu:return A.key===M?u(S,w,A,N):null;case Ps:return A.key===M?c(S,w,A,N):null;case Ar:return M=A._init,m(S,w,M(A._payload),N)}if(ga(A)||Zo(A))return M!==null?null:h(S,w,A,N,null);Nu(S,A)}return null}function v(S,w,A,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return S=S.get(A)||null,a(w,S,""+N,M);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Iu:return S=S.get(N.key===null?A:N.key)||null,u(w,S,N,M);case Ps:return S=S.get(N.key===null?A:N.key)||null,c(w,S,N,M);case Ar:var F=N._init;return v(S,w,A,F(N._payload),M)}if(ga(N)||Zo(N))return S=S.get(A)||null,h(w,S,N,M,null);Nu(w,N)}return null}function P(S,w,A,N){for(var M=null,F=null,E=w,_=w=0,I=null;E!==null&&_<A.length;_++){E.index>_?(I=E,E=null):I=E.sibling;var x=m(S,E,A[_],N);if(x===null){E===null&&(E=I);break}n&&E&&x.alternate===null&&e(S,E),w=s(x,w,_),F===null?M=x:F.sibling=x,F=x,E=I}if(_===A.length)return t(S,E),Se&&wi(S,_),M;if(E===null){for(;_<A.length;_++)E=f(S,A[_],N),E!==null&&(w=s(E,w,_),F===null?M=E:F.sibling=E,F=E);return Se&&wi(S,_),M}for(E=r(S,E);_<A.length;_++)I=v(E,S,_,A[_],N),I!==null&&(n&&I.alternate!==null&&E.delete(I.key===null?_:I.key),w=s(I,w,_),F===null?M=I:F.sibling=I,F=I);return n&&E.forEach(function(C){return e(S,C)}),Se&&wi(S,_),M}function b(S,w,A,N){var M=Zo(A);if(typeof M!="function")throw Error(B(150));if(A=M.call(A),A==null)throw Error(B(151));for(var F=M=null,E=w,_=w=0,I=null,x=A.next();E!==null&&!x.done;_++,x=A.next()){E.index>_?(I=E,E=null):I=E.sibling;var C=m(S,E,x.value,N);if(C===null){E===null&&(E=I);break}n&&E&&C.alternate===null&&e(S,E),w=s(C,w,_),F===null?M=C:F.sibling=C,F=C,E=I}if(x.done)return t(S,E),Se&&wi(S,_),M;if(E===null){for(;!x.done;_++,x=A.next())x=f(S,x.value,N),x!==null&&(w=s(x,w,_),F===null?M=x:F.sibling=x,F=x);return Se&&wi(S,_),M}for(E=r(S,E);!x.done;_++,x=A.next())x=v(E,S,_,x.value,N),x!==null&&(n&&x.alternate!==null&&E.delete(x.key===null?_:x.key),w=s(x,w,_),F===null?M=x:F.sibling=x,F=x);return n&&E.forEach(function(R){return e(S,R)}),Se&&wi(S,_),M}function V(S,w,A,N){if(typeof A=="object"&&A!==null&&A.type===Cs&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Iu:e:{for(var M=A.key,F=w;F!==null;){if(F.key===M){if(M=A.type,M===Cs){if(F.tag===7){t(S,F.sibling),w=i(F,A.props.children),w.return=S,S=w;break e}}else if(F.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ar&&ev(M)===F.type){t(S,F.sibling),w=i(F,A.props),w.ref=ia(S,F,A),w.return=S,S=w;break e}t(S,F);break}else e(S,F);F=F.sibling}A.type===Cs?(w=Li(A.props.children,S.mode,N,A.key),w.return=S,S=w):(N=tc(A.type,A.key,A.props,null,S.mode,N),N.ref=ia(S,w,A),N.return=S,S=N)}return o(S);case Ps:e:{for(F=A.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===A.containerInfo&&w.stateNode.implementation===A.implementation){t(S,w.sibling),w=i(w,A.children||[]),w.return=S,S=w;break e}else{t(S,w);break}else e(S,w);w=w.sibling}w=Zh(A,S.mode,N),w.return=S,S=w}return o(S);case Ar:return F=A._init,V(S,w,F(A._payload),N)}if(ga(A))return P(S,w,A,N);if(Zo(A))return b(S,w,A,N);Nu(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,w!==null&&w.tag===6?(t(S,w.sibling),w=i(w,A),w.return=S,S=w):(t(S,w),w=Xh(A,S.mode,N),w.return=S,S=w),o(S)):t(S,w)}return V}var no=NI(!0),DI=NI(!1),Pc=oi(null),Cc=null,Ms=null,gm=null;function ym(){gm=Ms=Cc=null}function _m(n){var e=Pc.current;Ee(Pc),n._currentValue=e}function Hf(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function Ws(n,e){Cc=n,gm=Ms=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Lt=!0),n.firstContext=null)}function an(n){var e=n._currentValue;if(gm!==n)if(n={context:n,memoizedValue:e,next:null},Ms===null){if(Cc===null)throw Error(B(308));Ms=n,Cc.dependencies={lanes:0,firstContext:n}}else Ms=Ms.next=n;return e}var bi=null;function vm(n){bi===null?bi=[n]:bi.push(n)}function VI(n,e,t,r){var i=e.interleaved;return i===null?(t.next=t,vm(e)):(t.next=i.next,i.next=t),e.interleaved=t,sr(n,r)}function sr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var xr=!1;function wm(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function OI(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function er(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ur(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,sr(n,t)}return i=r.interleaved,i===null?(e.next=e,vm(r)):(e.next=i.next,i.next=e),r.interleaved=e,sr(n,t)}function Qu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,sm(n,t)}}function tv(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?i=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?i=s=e:s=s.next=e}else i=s=e;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function bc(n,e,t,r){var i=n.updateQueue;xr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=n.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var P=n,b=a;switch(m=e,v=t,b.tag){case 1:if(P=b.payload,typeof P=="function"){f=P.call(v,f,m);break e}f=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=b.payload,m=typeof P=="function"?P.call(v,f,m):P,m==null)break e;f=Ne({},f,m);break e;case 2:xr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=v,u=f):h=h.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);$i|=o,n.lanes=o,n.memoizedState=f}}function nv(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Ol={},kn=oi(Ol),tl=oi(Ol),nl=oi(Ol);function ki(n){if(n===Ol)throw Error(B(174));return n}function Im(n,e){switch(ye(nl,e),ye(tl,n),ye(kn,Ol),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Pf(e,n)}Ee(kn),ye(kn,e)}function ro(){Ee(kn),Ee(tl),Ee(nl)}function LI(n){ki(nl.current);var e=ki(kn.current),t=Pf(e,n.type);e!==t&&(ye(tl,n),ye(kn,t))}function Em(n){tl.current===n&&(Ee(kn),Ee(tl))}var Ce=oi(0);function kc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gh=[];function Tm(){for(var n=0;n<Gh.length;n++)Gh[n]._workInProgressVersionPrimary=null;Gh.length=0}var Yu=dr.ReactCurrentDispatcher,Kh=dr.ReactCurrentBatchConfig,zi=0,be=null,Qe=null,et=null,Nc=!1,ka=!1,rl=0,YP=0;function mt(){throw Error(B(321))}function Sm(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!_n(n[t],e[t]))return!1;return!0}function Am(n,e,t,r,i,s){if(zi=s,be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yu.current=n===null||n.memoizedState===null?eC:tC,n=t(r,i),ka){s=0;do{if(ka=!1,rl=0,25<=s)throw Error(B(301));s+=1,et=Qe=null,e.updateQueue=null,Yu.current=nC,n=t(r,i)}while(ka)}if(Yu.current=Dc,e=Qe!==null&&Qe.next!==null,zi=0,et=Qe=be=null,Nc=!1,e)throw Error(B(300));return n}function xm(){var n=rl!==0;return rl=0,n}function In(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?be.memoizedState=et=n:et=et.next=n,et}function ln(){if(Qe===null){var n=be.alternate;n=n!==null?n.memoizedState:null}else n=Qe.next;var e=et===null?be.memoizedState:et.next;if(e!==null)et=e,Qe=n;else{if(n===null)throw Error(B(310));Qe=n,n={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},et===null?be.memoizedState=et=n:et=et.next=n}return et}function il(n,e){return typeof e=="function"?e(n):e}function Hh(n){var e=ln(),t=e.queue;if(t===null)throw Error(B(311));t.lastRenderedReducer=n;var r=Qe,i=r.baseQueue,s=t.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,t.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((zi&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:n(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,be.lanes|=h,$i|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,_n(r,e.memoizedState)||(Lt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,t.lastRenderedState=r}if(n=t.interleaved,n!==null){i=n;do s=i.lane,be.lanes|=s,$i|=s,i=i.next;while(i!==n)}else i===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Qh(n){var e=ln(),t=e.queue;if(t===null)throw Error(B(311));t.lastRenderedReducer=n;var r=t.dispatch,i=t.pending,s=e.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do s=n(s,o.action),o=o.next;while(o!==i);_n(s,e.memoizedState)||(Lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,r]}function MI(){}function FI(n,e){var t=be,r=ln(),i=e(),s=!_n(r.memoizedState,i);if(s&&(r.memoizedState=i,Lt=!0),r=r.queue,Rm(BI.bind(null,t,r,n),[n]),r.getSnapshot!==e||s||et!==null&&et.memoizedState.tag&1){if(t.flags|=2048,sl(9,UI.bind(null,t,r,i,e),void 0,null),nt===null)throw Error(B(349));zi&30||jI(t,e,i)}return i}function jI(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function UI(n,e,t,r){e.value=t,e.getSnapshot=r,zI(e)&&$I(n)}function BI(n,e,t){return t(function(){zI(e)&&$I(n)})}function zI(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!_n(n,t)}catch{return!0}}function $I(n){var e=sr(n,1);e!==null&&gn(e,n,1,-1)}function rv(n){var e=In();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:n},e.queue=n,n=n.dispatch=ZP.bind(null,be,n),[e.memoizedState,n]}function sl(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function qI(){return ln().memoizedState}function Ju(n,e,t,r){var i=In();be.flags|=n,i.memoizedState=sl(1|e,t,void 0,r===void 0?null:r)}function md(n,e,t,r){var i=ln();r=r===void 0?null:r;var s=void 0;if(Qe!==null){var o=Qe.memoizedState;if(s=o.destroy,r!==null&&Sm(r,o.deps)){i.memoizedState=sl(e,t,s,r);return}}be.flags|=n,i.memoizedState=sl(1|e,t,s,r)}function iv(n,e){return Ju(8390656,8,n,e)}function Rm(n,e){return md(2048,8,n,e)}function WI(n,e){return md(4,2,n,e)}function GI(n,e){return md(4,4,n,e)}function KI(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function HI(n,e,t){return t=t!=null?t.concat([n]):null,md(4,4,KI.bind(null,e,n),t)}function Pm(){}function QI(n,e){var t=ln();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Sm(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function YI(n,e){var t=ln();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Sm(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function JI(n,e,t){return zi&21?(_n(t,e)||(t=nI(),be.lanes|=t,$i|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Lt=!0),n.memoizedState=t)}function JP(n,e){var t=fe;fe=t!==0&&4>t?t:4,n(!0);var r=Kh.transition;Kh.transition={};try{n(!1),e()}finally{fe=t,Kh.transition=r}}function XI(){return ln().memoizedState}function XP(n,e,t){var r=zr(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ZI(n))eE(e,t);else if(t=VI(n,e,t,r),t!==null){var i=xt();gn(t,n,r,i),tE(t,e,r)}}function ZP(n,e,t){var r=zr(n),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ZI(n))eE(e,i);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(i.hasEagerState=!0,i.eagerState=a,_n(a,o)){var u=e.interleaved;u===null?(i.next=i,vm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}t=VI(n,e,i,r),t!==null&&(i=xt(),gn(t,n,r,i),tE(t,e,r))}}function ZI(n){var e=n.alternate;return n===be||e!==null&&e===be}function eE(n,e){ka=Nc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function tE(n,e,t){if(t&4194240){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,sm(n,t)}}var Dc={readContext:an,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},eC={readContext:an,useCallback:function(n,e){return In().memoizedState=[n,e===void 0?null:e],n},useContext:an,useEffect:iv,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ju(4194308,4,KI.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ju(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ju(4,2,n,e)},useMemo:function(n,e){var t=In();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=In();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=XP.bind(null,be,n),[r.memoizedState,n]},useRef:function(n){var e=In();return n={current:n},e.memoizedState=n},useState:rv,useDebugValue:Pm,useDeferredValue:function(n){return In().memoizedState=n},useTransition:function(){var n=rv(!1),e=n[0];return n=JP.bind(null,n[1]),In().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=be,i=In();if(Se){if(t===void 0)throw Error(B(407));t=t()}else{if(t=e(),nt===null)throw Error(B(349));zi&30||jI(r,e,t)}i.memoizedState=t;var s={value:t,getSnapshot:e};return i.queue=s,iv(BI.bind(null,r,s,n),[n]),r.flags|=2048,sl(9,UI.bind(null,r,s,t,e),void 0,null),t},useId:function(){var n=In(),e=nt.identifierPrefix;if(Se){var t=Yn,r=Qn;t=(r&~(1<<32-mn(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=rl++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=YP++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},tC={readContext:an,useCallback:QI,useContext:an,useEffect:Rm,useImperativeHandle:HI,useInsertionEffect:WI,useLayoutEffect:GI,useMemo:YI,useReducer:Hh,useRef:qI,useState:function(){return Hh(il)},useDebugValue:Pm,useDeferredValue:function(n){var e=ln();return JI(e,Qe.memoizedState,n)},useTransition:function(){var n=Hh(il)[0],e=ln().memoizedState;return[n,e]},useMutableSource:MI,useSyncExternalStore:FI,useId:XI,unstable_isNewReconciler:!1},nC={readContext:an,useCallback:QI,useContext:an,useEffect:Rm,useImperativeHandle:HI,useInsertionEffect:WI,useLayoutEffect:GI,useMemo:YI,useReducer:Qh,useRef:qI,useState:function(){return Qh(il)},useDebugValue:Pm,useDeferredValue:function(n){var e=ln();return Qe===null?e.memoizedState=n:JI(e,Qe.memoizedState,n)},useTransition:function(){var n=Qh(il)[0],e=ln().memoizedState;return[n,e]},useMutableSource:MI,useSyncExternalStore:FI,useId:XI,unstable_isNewReconciler:!1};function hn(n,e){if(n&&n.defaultProps){e=Ne({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Qf(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:Ne({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var gd={isMounted:function(n){return(n=n._reactInternals)?is(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=xt(),i=zr(n),s=er(r,i);s.payload=e,t!=null&&(s.callback=t),e=Ur(n,s,i),e!==null&&(gn(e,n,i,r),Qu(e,n,i))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=xt(),i=zr(n),s=er(r,i);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ur(n,s,i),e!==null&&(gn(e,n,i,r),Qu(e,n,i))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=xt(),r=zr(n),i=er(t,r);i.tag=2,e!=null&&(i.callback=e),e=Ur(n,i,r),e!==null&&(gn(e,n,r,t),Qu(e,n,r))}};function sv(n,e,t,r,i,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ja(t,r)||!Ja(i,s):!0}function nE(n,e,t){var r=!1,i=Kr,s=e.contextType;return typeof s=="object"&&s!==null?s=an(s):(i=Bt(e)?Ui:vt.current,r=e.contextTypes,s=(r=r!=null)?eo(n,i):Kr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gd,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=s),e}function ov(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&gd.enqueueReplaceState(e,e.state,null)}function Yf(n,e,t,r){var i=n.stateNode;i.props=t,i.state=n.memoizedState,i.refs={},wm(n);var s=e.contextType;typeof s=="object"&&s!==null?i.context=an(s):(s=Bt(e)?Ui:vt.current,i.context=eo(n,s)),i.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qf(n,e,s,t),i.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&gd.enqueueReplaceState(i,i.state,null),bc(n,t,i,r),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308)}function io(n,e){try{var t="",r=e;do t+=bR(r),r=r.return;while(r);var i=t}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:i,digest:null}}function Yh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Jf(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var rC=typeof WeakMap=="function"?WeakMap:Map;function rE(n,e,t){t=er(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){Oc||(Oc=!0,ap=r),Jf(n,e)},t}function iE(n,e,t){t=er(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;t.payload=function(){return r(i)},t.callback=function(){Jf(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Jf(n,e),typeof r!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function av(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new rC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(t)||(i.add(t),n=yC.bind(null,n,e,t),e.then(n,n))}function lv(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function uv(n,e,t,r,i){return n.mode&1?(n.flags|=65536,n.lanes=i,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=er(-1,1),e.tag=2,Ur(t,e,1))),t.lanes|=1),n)}var iC=dr.ReactCurrentOwner,Lt=!1;function Tt(n,e,t,r){e.child=n===null?DI(e,null,t,r):no(e,n.child,t,r)}function cv(n,e,t,r,i){t=t.render;var s=e.ref;return Ws(e,i),r=Am(n,e,t,r,s,i),t=xm(),n!==null&&!Lt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,or(n,e,i)):(Se&&t&&fm(e),e.flags|=1,Tt(n,e,r,i),e.child)}function dv(n,e,t,r,i){if(n===null){var s=t.type;return typeof s=="function"&&!Lm(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,sE(n,e,s,r,i)):(n=tc(t.type,null,r,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&i)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ja,t(o,r)&&n.ref===e.ref)return or(n,e,i)}return e.flags|=1,n=$r(s,r),n.ref=e.ref,n.return=e,e.child=n}function sE(n,e,t,r,i){if(n!==null){var s=n.memoizedProps;if(Ja(s,r)&&n.ref===e.ref)if(Lt=!1,e.pendingProps=r=s,(n.lanes&i)!==0)n.flags&131072&&(Lt=!0);else return e.lanes=n.lanes,or(n,e,i)}return Xf(n,e,t,r,i)}function oE(n,e,t){var r=e.pendingProps,i=r.children,s=n!==null?n.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(js,Wt),Wt|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ye(js,Wt),Wt|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:t,ye(js,Wt),Wt|=r}else s!==null?(r=s.baseLanes|t,e.memoizedState=null):r=t,ye(js,Wt),Wt|=r;return Tt(n,e,i,t),e.child}function aE(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Xf(n,e,t,r,i){var s=Bt(t)?Ui:vt.current;return s=eo(e,s),Ws(e,i),t=Am(n,e,t,r,s,i),r=xm(),n!==null&&!Lt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,or(n,e,i)):(Se&&r&&fm(e),e.flags|=1,Tt(n,e,t,i),e.child)}function hv(n,e,t,r,i){if(Bt(t)){var s=!0;Ac(e)}else s=!1;if(Ws(e,i),e.stateNode===null)Xu(n,e),nE(e,t,r),Yf(e,t,r,i),r=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=an(c):(c=Bt(t)?Ui:vt.current,c=eo(e,c));var h=t.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&ov(e,o,r,c),xr=!1;var m=e.memoizedState;o.state=m,bc(e,r,o,i),u=e.memoizedState,a!==r||m!==u||Ut.current||xr?(typeof h=="function"&&(Qf(e,t,h,r),u=e.memoizedState),(a=xr||sv(e,t,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,OI(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:hn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=an(u):(u=Bt(t)?Ui:vt.current,u=eo(e,u));var v=t.getDerivedStateFromProps;(h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&ov(e,o,r,u),xr=!1,m=e.memoizedState,o.state=m,bc(e,r,o,i);var P=e.memoizedState;a!==f||m!==P||Ut.current||xr?(typeof v=="function"&&(Qf(e,t,v,r),P=e.memoizedState),(c=xr||sv(e,t,c,r,m,P,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),r=!1)}return Zf(n,e,t,r,s,i)}function Zf(n,e,t,r,i,s){aE(n,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&J_(e,t,!1),or(n,e,s);r=e.stateNode,iC.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&o?(e.child=no(e,n.child,null,s),e.child=no(e,null,a,s)):Tt(n,e,a,s),e.memoizedState=r.state,i&&J_(e,t,!0),e.child}function lE(n){var e=n.stateNode;e.pendingContext?Y_(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Y_(n,e.context,!1),Im(n,e.containerInfo)}function fv(n,e,t,r,i){return to(),mm(i),e.flags|=256,Tt(n,e,t,r),e.child}var ep={dehydrated:null,treeContext:null,retryLane:0};function tp(n){return{baseLanes:n,cachePool:null,transitions:null}}function uE(n,e,t){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(i|=1),ye(Ce,i&1),n===null)return Kf(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,n=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vd(o,r,0,null),n=Li(n,r,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=tp(t),e.memoizedState=ep,n):Cm(e,o));if(i=n.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return sC(n,e,o,r,a,i,t);if(s){s=r.fallback,o=e.mode,i=n.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=$r(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=$r(a,s):(s=Li(s,o,t,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=n.child.memoizedState,o=o===null?tp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=ep,r}return s=n.child,n=s.sibling,r=$r(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function Cm(n,e){return e=vd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Du(n,e,t,r){return r!==null&&mm(r),no(e,n.child,null,t),n=Cm(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function sC(n,e,t,r,i,s,o){if(t)return e.flags&256?(e.flags&=-257,r=Yh(Error(B(422))),Du(n,e,o,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=vd({mode:"visible",children:r.children},i,0,null),s=Li(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&no(e,n.child,null,o),e.child.memoizedState=tp(o),e.memoizedState=ep,s);if(!(e.mode&1))return Du(n,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=Yh(s,r,void 0),Du(n,e,o,r)}if(a=(o&n.childLanes)!==0,Lt||a){if(r=nt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,sr(n,i),gn(r,n,i,-1))}return Om(),r=Yh(Error(B(421))),Du(n,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=n.child,e=_C.bind(null,n),i._reactRetry=e,null):(n=s.treeContext,Kt=jr(i.nextSibling),Qt=e,Se=!0,pn=null,n!==null&&(en[tn++]=Qn,en[tn++]=Yn,en[tn++]=Bi,Qn=n.id,Yn=n.overflow,Bi=e),e=Cm(e,r.children),e.flags|=4096,e)}function pv(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),Hf(n.return,e,t)}function Jh(n,e,t,r,i){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=t,s.tailMode=i)}function cE(n,e,t){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Tt(n,e,r.children,t),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&pv(n,t,e);else if(n.tag===19)pv(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if(ye(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(t=e.child,i=null;t!==null;)n=t.alternate,n!==null&&kc(n)===null&&(i=t),t=t.sibling;t=i,t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),Jh(e,!1,i,t,s);break;case"backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&kc(n)===null){e.child=i;break}n=i.sibling,i.sibling=t,t=i,i=n}Jh(e,!0,t,null,s);break;case"together":Jh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function or(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),$i|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(B(153));if(e.child!==null){for(n=e.child,t=$r(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=$r(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function oC(n,e,t){switch(e.tag){case 3:lE(e),to();break;case 5:LI(e);break;case 1:Bt(e.type)&&Ac(e);break;case 4:Im(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(Pc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Ce,Ce.current&1),e.flags|=128,null):t&e.child.childLanes?uE(n,e,t):(ye(Ce,Ce.current&1),n=or(n,e,t),n!==null?n.sibling:null);ye(Ce,Ce.current&1);break;case 19:if(r=(t&e.childLanes)!==0,n.flags&128){if(r)return cE(n,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,oE(n,e,t)}return or(n,e,t)}var dE,np,hE,fE;dE=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};np=function(){};hE=function(n,e,t,r){var i=n.memoizedProps;if(i!==r){n=e.stateNode,ki(kn.current);var s=null;switch(t){case"input":i=Sf(n,i),r=Sf(n,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=Rf(n,i),r=Rf(n,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=Tc)}Cf(t,r);var o;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(s||(s=[]),s.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&we("scroll",n),s||a===u||(s=[])):(s=s||[]).push(c,u))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};fE=function(n,e,t,r){t!==r&&(e.flags|=4)};function sa(n,e){if(!Se)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function gt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function aC(n,e,t){var r=e.pendingProps;switch(pm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(e),null;case 1:return Bt(e.type)&&Sc(),gt(e),null;case 3:return r=e.stateNode,ro(),Ee(Ut),Ee(vt),Tm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(ku(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pn!==null&&(cp(pn),pn=null))),np(n,e),gt(e),null;case 5:Em(e);var i=ki(nl.current);if(t=e.type,n!==null&&e.stateNode!=null)hE(n,e,t,r,i),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return gt(e),null}if(n=ki(kn.current),ku(e)){r=e.stateNode,t=e.type;var s=e.memoizedProps;switch(r[En]=e,r[el]=s,n=(e.mode&1)!==0,t){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<_a.length;i++)we(_a[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":T_(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":A_(r,s),we("invalid",r)}Cf(t,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&bu(r.textContent,a,n),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&bu(r.textContent,a,n),i=["children",""+a]):qa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(t){case"input":Eu(r),S_(r,s,!0);break;case"textarea":Eu(r),x_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Tc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=B0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=o.createElement(t,{is:r.is}):(n=o.createElement(t),t==="select"&&(o=n,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):n=o.createElementNS(n,t),n[En]=e,n[el]=r,dE(n,e,!1,!1),e.stateNode=n;e:{switch(o=bf(t,r),t){case"dialog":we("cancel",n),we("close",n),i=r;break;case"iframe":case"object":case"embed":we("load",n),i=r;break;case"video":case"audio":for(i=0;i<_a.length;i++)we(_a[i],n);i=r;break;case"source":we("error",n),i=r;break;case"img":case"image":case"link":we("error",n),we("load",n),i=r;break;case"details":we("toggle",n),i=r;break;case"input":T_(n,r),i=Sf(n,r),we("invalid",n);break;case"option":i=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),we("invalid",n);break;case"textarea":A_(n,r),i=Rf(n,r),we("invalid",n);break;default:i=r}Cf(t,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?q0(n,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&z0(n,u)):s==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Wa(n,u):typeof u=="number"&&Wa(n,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&we("scroll",n):u!=null&&Zp(n,s,u,o))}switch(t){case"input":Eu(n),S_(n,r,!1);break;case"textarea":Eu(n),x_(n);break;case"option":r.value!=null&&n.setAttribute("value",""+Gr(r.value));break;case"select":n.multiple=!!r.multiple,s=r.value,s!=null?Bs(n,!!r.multiple,s,!1):r.defaultValue!=null&&Bs(n,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(n.onclick=Tc)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return gt(e),null;case 6:if(n&&e.stateNode!=null)fE(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(t=ki(nl.current),ki(kn.current),ku(e)){if(r=e.stateNode,t=e.memoizedProps,r[En]=e,(s=r.nodeValue!==t)&&(n=Qt,n!==null))switch(n.tag){case 3:bu(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&bu(r.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[En]=e,e.stateNode=r}return gt(e),null;case 13:if(Ee(Ce),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Se&&Kt!==null&&e.mode&1&&!(e.flags&128))kI(),to(),e.flags|=98560,s=!1;else if(s=ku(e),r!==null&&r.dehydrated!==null){if(n===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[En]=e}else to(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;gt(e),s=!1}else pn!==null&&(cp(pn),pn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(n===null||Ce.current&1?Ye===0&&(Ye=3):Om())),e.updateQueue!==null&&(e.flags|=4),gt(e),null);case 4:return ro(),np(n,e),n===null&&Xa(e.stateNode.containerInfo),gt(e),null;case 10:return _m(e.type._context),gt(e),null;case 17:return Bt(e.type)&&Sc(),gt(e),null;case 19:if(Ee(Ce),s=e.memoizedState,s===null)return gt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)sa(s,!1);else{if(Ye!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=kc(n),o!==null){for(e.flags|=128,sa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)s=t,n=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ye(Ce,Ce.current&1|2),e.child}n=n.sibling}s.tail!==null&&ze()>so&&(e.flags|=128,r=!0,sa(s,!1),e.lanes=4194304)}else{if(!r)if(n=kc(o),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),sa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return gt(e),null}else 2*ze()-s.renderingStartTime>so&&t!==1073741824&&(e.flags|=128,r=!0,sa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ze(),e.sibling=null,t=Ce.current,ye(Ce,r?t&1|2:t&1),e):(gt(e),null);case 22:case 23:return Vm(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Wt&1073741824&&(gt(e),e.subtreeFlags&6&&(e.flags|=8192)):gt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function lC(n,e){switch(pm(e),e.tag){case 1:return Bt(e.type)&&Sc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ro(),Ee(Ut),Ee(vt),Tm(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Em(e),null;case 13:if(Ee(Ce),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(B(340));to()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ee(Ce),null;case 4:return ro(),null;case 10:return _m(e.type._context),null;case 22:case 23:return Vm(),null;case 24:return null;default:return null}}var Vu=!1,_t=!1,uC=typeof WeakSet=="function"?WeakSet:Set,H=null;function Fs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Oe(n,e,r)}else t.current=null}function rp(n,e,t){try{t()}catch(r){Oe(n,e,r)}}var mv=!1;function cC(n,e){if(Uf=wc,n=_I(),hm(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=n,m=null;t:for(;;){for(var v;f!==t||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===n)break t;if(m===t&&++c===i&&(a=o),m===s&&++h===r&&(u=o),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Bf={focusedElem:n,selectionRange:t},wc=!1,H=e;H!==null;)if(e=H,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,H=n;else for(;H!==null;){e=H;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var b=P.memoizedProps,V=P.memoizedState,S=e.stateNode,w=S.getSnapshotBeforeUpdate(e.elementType===e.type?b:hn(e.type,b),V);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(N){Oe(e,e.return,N)}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}return P=mv,mv=!1,P}function Na(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&n)===n){var s=i.destroy;i.destroy=void 0,s!==void 0&&rp(e,t,s)}i=i.next}while(i!==r)}}function yd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function ip(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function pE(n){var e=n.alternate;e!==null&&(n.alternate=null,pE(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[En],delete e[el],delete e[qf],delete e[GP],delete e[KP])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function mE(n){return n.tag===5||n.tag===3||n.tag===4}function gv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||mE(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function sp(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Tc));else if(r!==4&&(n=n.child,n!==null))for(sp(n,e,t),n=n.sibling;n!==null;)sp(n,e,t),n=n.sibling}function op(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(op(n,e,t),n=n.sibling;n!==null;)op(n,e,t),n=n.sibling}var st=null,fn=!1;function wr(n,e,t){for(t=t.child;t!==null;)gE(n,e,t),t=t.sibling}function gE(n,e,t){if(bn&&typeof bn.onCommitFiberUnmount=="function")try{bn.onCommitFiberUnmount(ud,t)}catch{}switch(t.tag){case 5:_t||Fs(t,e);case 6:var r=st,i=fn;st=null,wr(n,e,t),st=r,fn=i,st!==null&&(fn?(n=st,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):st.removeChild(t.stateNode));break;case 18:st!==null&&(fn?(n=st,t=t.stateNode,n.nodeType===8?qh(n.parentNode,t):n.nodeType===1&&qh(n,t),Qa(n)):qh(st,t.stateNode));break;case 4:r=st,i=fn,st=t.stateNode.containerInfo,fn=!0,wr(n,e,t),st=r,fn=i;break;case 0:case 11:case 14:case 15:if(!_t&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rp(t,e,o),i=i.next}while(i!==r)}wr(n,e,t);break;case 1:if(!_t&&(Fs(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){Oe(t,e,a)}wr(n,e,t);break;case 21:wr(n,e,t);break;case 22:t.mode&1?(_t=(r=_t)||t.memoizedState!==null,wr(n,e,t),_t=r):wr(n,e,t);break;default:wr(n,e,t)}}function yv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new uC),e.forEach(function(r){var i=vC.bind(null,n,r);t.has(r)||(t.add(r),r.then(i,i))})}}function dn(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:st=a.stateNode,fn=!1;break e;case 3:st=a.stateNode.containerInfo,fn=!0;break e;case 4:st=a.stateNode.containerInfo,fn=!0;break e}a=a.return}if(st===null)throw Error(B(160));gE(s,o,i),st=null,fn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Oe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yE(e,n),e=e.sibling}function yE(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(dn(e,n),wn(n),r&4){try{Na(3,n,n.return),yd(3,n)}catch(b){Oe(n,n.return,b)}try{Na(5,n,n.return)}catch(b){Oe(n,n.return,b)}}break;case 1:dn(e,n),wn(n),r&512&&t!==null&&Fs(t,t.return);break;case 5:if(dn(e,n),wn(n),r&512&&t!==null&&Fs(t,t.return),n.flags&32){var i=n.stateNode;try{Wa(i,"")}catch(b){Oe(n,n.return,b)}}if(r&4&&(i=n.stateNode,i!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,u=n.updateQueue;if(n.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&j0(i,s),bf(a,o);var c=bf(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?q0(i,f):h==="dangerouslySetInnerHTML"?z0(i,f):h==="children"?Wa(i,f):Zp(i,h,f,c)}switch(a){case"input":Af(i,s);break;case"textarea":U0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Bs(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?Bs(i,!!s.multiple,s.defaultValue,!0):Bs(i,!!s.multiple,s.multiple?[]:"",!1))}i[el]=s}catch(b){Oe(n,n.return,b)}}break;case 6:if(dn(e,n),wn(n),r&4){if(n.stateNode===null)throw Error(B(162));i=n.stateNode,s=n.memoizedProps;try{i.nodeValue=s}catch(b){Oe(n,n.return,b)}}break;case 3:if(dn(e,n),wn(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Qa(e.containerInfo)}catch(b){Oe(n,n.return,b)}break;case 4:dn(e,n),wn(n);break;case 13:dn(e,n),wn(n),i=n.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Nm=ze())),r&4&&yv(n);break;case 22:if(h=t!==null&&t.memoizedState!==null,n.mode&1?(_t=(c=_t)||h,dn(e,n),_t=c):dn(e,n),wn(n),r&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!h&&n.mode&1)for(H=n,h=n.child;h!==null;){for(f=H=h;H!==null;){switch(m=H,v=m.child,m.tag){case 0:case 11:case 14:case 15:Na(4,m,m.return);break;case 1:Fs(m,m.return);var P=m.stateNode;if(typeof P.componentWillUnmount=="function"){r=m,t=m.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(b){Oe(r,t,b)}}break;case 5:Fs(m,m.return);break;case 22:if(m.memoizedState!==null){vv(f);continue}}v!==null?(v.return=m,H=v):vv(f)}h=h.sibling}e:for(h=null,f=n;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=$0("display",o))}catch(b){Oe(n,n.return,b)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(b){Oe(n,n.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:dn(e,n),wn(n),r&4&&yv(n);break;case 21:break;default:dn(e,n),wn(n)}}function wn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(mE(t)){var r=t;break e}t=t.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wa(i,""),r.flags&=-33);var s=gv(n);op(n,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=gv(n);sp(n,a,o);break;default:throw Error(B(161))}}catch(u){Oe(n,n.return,u)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function dC(n,e,t){H=n,_E(n)}function _E(n,e,t){for(var r=(n.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Vu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||_t;a=Vu;var c=_t;if(Vu=o,(_t=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?wv(i):u!==null?(u.return=o,H=u):wv(i);for(;s!==null;)H=s,_E(s),s=s.sibling;H=i,Vu=a,_t=c}_v(n)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):_v(n)}}function _v(n){for(;H!==null;){var e=H;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_t||yd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_t)if(t===null)r.componentDidMount();else{var i=e.elementType===e.type?t.memoizedProps:hn(e.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&nv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}nv(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Qa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}_t||e.flags&512&&ip(e)}catch(m){Oe(e,e.return,m)}}if(e===n){H=null;break}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}}function vv(n){for(;H!==null;){var e=H;if(e===n){H=null;break}var t=e.sibling;if(t!==null){t.return=e.return,H=t;break}H=e.return}}function wv(n){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{yd(4,e)}catch(u){Oe(e,t,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Oe(e,i,u)}}var s=e.return;try{ip(e)}catch(u){Oe(e,s,u)}break;case 5:var o=e.return;try{ip(e)}catch(u){Oe(e,o,u)}}}catch(u){Oe(e,e.return,u)}if(e===n){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var hC=Math.ceil,Vc=dr.ReactCurrentDispatcher,bm=dr.ReactCurrentOwner,sn=dr.ReactCurrentBatchConfig,le=0,nt=null,He=null,lt=0,Wt=0,js=oi(0),Ye=0,ol=null,$i=0,_d=0,km=0,Da=null,Ot=null,Nm=0,so=1/0,Kn=null,Oc=!1,ap=null,Br=null,Ou=!1,Dr=null,Lc=0,Va=0,lp=null,Zu=-1,ec=0;function xt(){return le&6?ze():Zu!==-1?Zu:Zu=ze()}function zr(n){return n.mode&1?le&2&&lt!==0?lt&-lt:QP.transition!==null?(ec===0&&(ec=nI()),ec):(n=fe,n!==0||(n=window.event,n=n===void 0?16:uI(n.type)),n):1}function gn(n,e,t,r){if(50<Va)throw Va=0,lp=null,Error(B(185));Nl(n,t,r),(!(le&2)||n!==nt)&&(n===nt&&(!(le&2)&&(_d|=t),Ye===4&&Cr(n,lt)),zt(n,r),t===1&&le===0&&!(e.mode&1)&&(so=ze()+500,pd&&ai()))}function zt(n,e){var t=n.callbackNode;QR(n,e);var r=vc(n,n===nt?lt:0);if(r===0)t!==null&&C_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&C_(t),e===1)n.tag===0?HP(Iv.bind(null,n)):PI(Iv.bind(null,n)),qP(function(){!(le&6)&&ai()}),t=null;else{switch(rI(r)){case 1:t=im;break;case 4:t=eI;break;case 16:t=_c;break;case 536870912:t=tI;break;default:t=_c}t=xE(t,vE.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function vE(n,e){if(Zu=-1,ec=0,le&6)throw Error(B(327));var t=n.callbackNode;if(Gs()&&n.callbackNode!==t)return null;var r=vc(n,n===nt?lt:0);if(r===0)return null;if(r&30||r&n.expiredLanes||e)e=Mc(n,r);else{e=r;var i=le;le|=2;var s=IE();(nt!==n||lt!==e)&&(Kn=null,so=ze()+500,Oi(n,e));do try{mC();break}catch(a){wE(n,a)}while(!0);ym(),Vc.current=s,le=i,He!==null?e=0:(nt=null,lt=0,e=Ye)}if(e!==0){if(e===2&&(i=Of(n),i!==0&&(r=i,e=up(n,i))),e===1)throw t=ol,Oi(n,0),Cr(n,r),zt(n,ze()),t;if(e===6)Cr(n,r);else{if(i=n.current.alternate,!(r&30)&&!fC(i)&&(e=Mc(n,r),e===2&&(s=Of(n),s!==0&&(r=s,e=up(n,s))),e===1))throw t=ol,Oi(n,0),Cr(n,r),zt(n,ze()),t;switch(n.finishedWork=i,n.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Ii(n,Ot,Kn);break;case 3:if(Cr(n,r),(r&130023424)===r&&(e=Nm+500-ze(),10<e)){if(vc(n,0)!==0)break;if(i=n.suspendedLanes,(i&r)!==r){xt(),n.pingedLanes|=n.suspendedLanes&i;break}n.timeoutHandle=$f(Ii.bind(null,n,Ot,Kn),e);break}Ii(n,Ot,Kn);break;case 4:if(Cr(n,r),(r&4194240)===r)break;for(e=n.eventTimes,i=-1;0<r;){var o=31-mn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hC(r/1960))-r,10<r){n.timeoutHandle=$f(Ii.bind(null,n,Ot,Kn),r);break}Ii(n,Ot,Kn);break;case 5:Ii(n,Ot,Kn);break;default:throw Error(B(329))}}}return zt(n,ze()),n.callbackNode===t?vE.bind(null,n):null}function up(n,e){var t=Da;return n.current.memoizedState.isDehydrated&&(Oi(n,e).flags|=256),n=Mc(n,e),n!==2&&(e=Ot,Ot=t,e!==null&&cp(e)),n}function cp(n){Ot===null?Ot=n:Ot.push.apply(Ot,n)}function fC(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],s=i.getSnapshot;i=i.value;try{if(!_n(s(),i))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Cr(n,e){for(e&=~km,e&=~_d,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-mn(e),r=1<<t;n[t]=-1,e&=~r}}function Iv(n){if(le&6)throw Error(B(327));Gs();var e=vc(n,0);if(!(e&1))return zt(n,ze()),null;var t=Mc(n,e);if(n.tag!==0&&t===2){var r=Of(n);r!==0&&(e=r,t=up(n,r))}if(t===1)throw t=ol,Oi(n,0),Cr(n,e),zt(n,ze()),t;if(t===6)throw Error(B(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ii(n,Ot,Kn),zt(n,ze()),null}function Dm(n,e){var t=le;le|=1;try{return n(e)}finally{le=t,le===0&&(so=ze()+500,pd&&ai())}}function qi(n){Dr!==null&&Dr.tag===0&&!(le&6)&&Gs();var e=le;le|=1;var t=sn.transition,r=fe;try{if(sn.transition=null,fe=1,n)return n()}finally{fe=r,sn.transition=t,le=e,!(le&6)&&ai()}}function Vm(){Wt=js.current,Ee(js)}function Oi(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,$P(t)),He!==null)for(t=He.return;t!==null;){var r=t;switch(pm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sc();break;case 3:ro(),Ee(Ut),Ee(vt),Tm();break;case 5:Em(r);break;case 4:ro();break;case 13:Ee(Ce);break;case 19:Ee(Ce);break;case 10:_m(r.type._context);break;case 22:case 23:Vm()}t=t.return}if(nt=n,He=n=$r(n.current,null),lt=Wt=e,Ye=0,ol=null,km=_d=$i=0,Ot=Da=null,bi!==null){for(e=0;e<bi.length;e++)if(t=bi[e],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,s=t.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}t.pending=r}bi=null}return n}function wE(n,e){do{var t=He;try{if(ym(),Yu.current=Dc,Nc){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Nc=!1}if(zi=0,et=Qe=be=null,ka=!1,rl=0,bm.current=null,t===null||t.return===null){Ye=1,ol=e,He=null;break}e:{var s=n,o=t.return,a=t,u=e;if(e=lt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=lv(o);if(v!==null){v.flags&=-257,uv(v,o,a,s,e),v.mode&1&&av(s,c,e),e=v,u=c;var P=e.updateQueue;if(P===null){var b=new Set;b.add(u),e.updateQueue=b}else P.add(u);break e}else{if(!(e&1)){av(s,c,e),Om();break e}u=Error(B(426))}}else if(Se&&a.mode&1){var V=lv(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),uv(V,o,a,s,e),mm(io(u,a));break e}}s=u=io(u,a),Ye!==4&&(Ye=2),Da===null?Da=[s]:Da.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=rE(s,u,e);tv(s,S);break e;case 1:a=u;var w=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Br===null||!Br.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=iE(s,a,e);tv(s,N);break e}}s=s.return}while(s!==null)}TE(t)}catch(M){e=M,He===t&&t!==null&&(He=t=t.return);continue}break}while(!0)}function IE(){var n=Vc.current;return Vc.current=Dc,n===null?Dc:n}function Om(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),nt===null||!($i&268435455)&&!(_d&268435455)||Cr(nt,lt)}function Mc(n,e){var t=le;le|=2;var r=IE();(nt!==n||lt!==e)&&(Kn=null,Oi(n,e));do try{pC();break}catch(i){wE(n,i)}while(!0);if(ym(),le=t,Vc.current=r,He!==null)throw Error(B(261));return nt=null,lt=0,Ye}function pC(){for(;He!==null;)EE(He)}function mC(){for(;He!==null&&!UR();)EE(He)}function EE(n){var e=AE(n.alternate,n,Wt);n.memoizedProps=n.pendingProps,e===null?TE(n):He=e,bm.current=null}function TE(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=lC(t,e),t!==null){t.flags&=32767,He=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ye=6,He=null;return}}else if(t=aC(t,e,Wt),t!==null){He=t;return}if(e=e.sibling,e!==null){He=e;return}He=e=n}while(e!==null);Ye===0&&(Ye=5)}function Ii(n,e,t){var r=fe,i=sn.transition;try{sn.transition=null,fe=1,gC(n,e,t,r)}finally{sn.transition=i,fe=r}return null}function gC(n,e,t,r){do Gs();while(Dr!==null);if(le&6)throw Error(B(327));t=n.finishedWork;var i=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(B(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(YR(n,s),n===nt&&(He=nt=null,lt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ou||(Ou=!0,xE(_c,function(){return Gs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=sn.transition,sn.transition=null;var o=fe;fe=1;var a=le;le|=4,bm.current=null,cC(n,t),yE(t,n),LP(Bf),wc=!!Uf,Bf=Uf=null,n.current=t,dC(t),BR(),le=a,fe=o,sn.transition=s}else n.current=t;if(Ou&&(Ou=!1,Dr=n,Lc=i),s=n.pendingLanes,s===0&&(Br=null),qR(t.stateNode),zt(n,ze()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)i=e[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Oc)throw Oc=!1,n=ap,ap=null,n;return Lc&1&&n.tag!==0&&Gs(),s=n.pendingLanes,s&1?n===lp?Va++:(Va=0,lp=n):Va=0,ai(),null}function Gs(){if(Dr!==null){var n=rI(Lc),e=sn.transition,t=fe;try{if(sn.transition=null,fe=16>n?16:n,Dr===null)var r=!1;else{if(n=Dr,Dr=null,Lc=0,le&6)throw Error(B(331));var i=le;for(le|=4,H=n.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(H=c;H!==null;){var h=H;switch(h.tag){case 0:case 11:case 15:Na(8,h,s)}var f=h.child;if(f!==null)f.return=h,H=f;else for(;H!==null;){h=H;var m=h.sibling,v=h.return;if(pE(h),h===c){H=null;break}if(m!==null){m.return=v,H=m;break}H=v}}}var P=s.alternate;if(P!==null){var b=P.child;if(b!==null){P.child=null;do{var V=b.sibling;b.sibling=null,b=V}while(b!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Na(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,H=S;break e}H=s.return}}var w=n.current;for(H=w;H!==null;){o=H;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,H=A;else e:for(o=w;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yd(9,a)}}catch(M){Oe(a,a.return,M)}if(a===o){H=null;break e}var N=a.sibling;if(N!==null){N.return=a.return,H=N;break e}H=a.return}}if(le=i,ai(),bn&&typeof bn.onPostCommitFiberRoot=="function")try{bn.onPostCommitFiberRoot(ud,n)}catch{}r=!0}return r}finally{fe=t,sn.transition=e}}return!1}function Ev(n,e,t){e=io(t,e),e=rE(n,e,1),n=Ur(n,e,1),e=xt(),n!==null&&(Nl(n,1,e),zt(n,e))}function Oe(n,e,t){if(n.tag===3)Ev(n,n,t);else for(;e!==null;){if(e.tag===3){Ev(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Br===null||!Br.has(r))){n=io(t,n),n=iE(e,n,1),e=Ur(e,n,1),n=xt(),e!==null&&(Nl(e,1,n),zt(e,n));break}}e=e.return}}function yC(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=xt(),n.pingedLanes|=n.suspendedLanes&t,nt===n&&(lt&t)===t&&(Ye===4||Ye===3&&(lt&130023424)===lt&&500>ze()-Nm?Oi(n,0):km|=t),zt(n,e)}function SE(n,e){e===0&&(n.mode&1?(e=Au,Au<<=1,!(Au&130023424)&&(Au=4194304)):e=1);var t=xt();n=sr(n,e),n!==null&&(Nl(n,e,t),zt(n,t))}function _C(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),SE(n,t)}function vC(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,i=n.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=n.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),SE(n,t)}var AE;AE=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Ut.current)Lt=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Lt=!1,oC(n,e,t);Lt=!!(n.flags&131072)}else Lt=!1,Se&&e.flags&1048576&&CI(e,Rc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Xu(n,e),n=e.pendingProps;var i=eo(e,vt.current);Ws(e,t),i=Am(null,e,r,n,i,t);var s=xm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Bt(r)?(s=!0,Ac(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wm(e),i.updater=gd,e.stateNode=i,i._reactInternals=e,Yf(e,r,n,t),e=Zf(null,e,r,!0,s,t)):(e.tag=0,Se&&s&&fm(e),Tt(null,e,i,t),e=e.child),e;case 16:r=e.elementType;e:{switch(Xu(n,e),n=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=IC(r),n=hn(r,n),i){case 0:e=Xf(null,e,r,n,t);break e;case 1:e=hv(null,e,r,n,t);break e;case 11:e=cv(null,e,r,n,t);break e;case 14:e=dv(null,e,r,hn(r.type,n),t);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),Xf(n,e,r,i,t);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),hv(n,e,r,i,t);case 3:e:{if(lE(e),n===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,OI(n,e),bc(e,r,null,t);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=io(Error(B(423)),e),e=fv(n,e,r,t,i);break e}else if(r!==i){i=io(Error(B(424)),e),e=fv(n,e,r,t,i);break e}else for(Kt=jr(e.stateNode.containerInfo.firstChild),Qt=e,Se=!0,pn=null,t=DI(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(to(),r===i){e=or(n,e,t);break e}Tt(n,e,r,t)}e=e.child}return e;case 5:return LI(e),n===null&&Kf(e),r=e.type,i=e.pendingProps,s=n!==null?n.memoizedProps:null,o=i.children,zf(r,i)?o=null:s!==null&&zf(r,s)&&(e.flags|=32),aE(n,e),Tt(n,e,o,t),e.child;case 6:return n===null&&Kf(e),null;case 13:return uE(n,e,t);case 4:return Im(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=no(e,null,r,t):Tt(n,e,r,t),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),cv(n,e,r,i,t);case 7:return Tt(n,e,e.pendingProps,t),e.child;case 8:return Tt(n,e,e.pendingProps.children,t),e.child;case 12:return Tt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(Pc,r._currentValue),r._currentValue=o,s!==null)if(_n(s.value,o)){if(s.children===i.children&&!Ut.current){e=or(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=er(-1,t&-t),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=t,u=s.alternate,u!==null&&(u.lanes|=t),Hf(s.return,t,e),a.lanes|=t;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Hf(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Tt(n,e,i.children,t),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ws(e,t),i=an(i),r=r(i),e.flags|=1,Tt(n,e,r,t),e.child;case 14:return r=e.type,i=hn(r,e.pendingProps),i=hn(r.type,i),dv(n,e,r,i,t);case 15:return sE(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),Xu(n,e),e.tag=1,Bt(r)?(n=!0,Ac(e)):n=!1,Ws(e,t),nE(e,r,i),Yf(e,r,i,t),Zf(null,e,r,!0,n,t);case 19:return cE(n,e,t);case 22:return oE(n,e,t)}throw Error(B(156,e.tag))};function xE(n,e){return Z0(n,e)}function wC(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(n,e,t,r){return new wC(n,e,t,r)}function Lm(n){return n=n.prototype,!(!n||!n.isReactComponent)}function IC(n){if(typeof n=="function")return Lm(n)?1:0;if(n!=null){if(n=n.$$typeof,n===tm)return 11;if(n===nm)return 14}return 2}function $r(n,e){var t=n.alternate;return t===null?(t=nn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function tc(n,e,t,r,i,s){var o=2;if(r=n,typeof n=="function")Lm(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Cs:return Li(t.children,i,s,e);case em:o=8,i|=8;break;case wf:return n=nn(12,t,e,i|2),n.elementType=wf,n.lanes=s,n;case If:return n=nn(13,t,e,i),n.elementType=If,n.lanes=s,n;case Ef:return n=nn(19,t,e,i),n.elementType=Ef,n.lanes=s,n;case L0:return vd(t,i,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V0:o=10;break e;case O0:o=9;break e;case tm:o=11;break e;case nm:o=14;break e;case Ar:o=16,r=null;break e}throw Error(B(130,n==null?n:typeof n,""))}return e=nn(o,t,e,i),e.elementType=n,e.type=r,e.lanes=s,e}function Li(n,e,t,r){return n=nn(7,n,r,e),n.lanes=t,n}function vd(n,e,t,r){return n=nn(22,n,r,e),n.elementType=L0,n.lanes=t,n.stateNode={isHidden:!1},n}function Xh(n,e,t){return n=nn(6,n,null,e),n.lanes=t,n}function Zh(n,e,t){return e=nn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function EC(n,e,t,r,i){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dh(0),this.expirationTimes=Dh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mm(n,e,t,r,i,s,o,a,u){return n=new EC(n,e,t,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=nn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},wm(s),n}function TC(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ps,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function RE(n){if(!n)return Kr;n=n._reactInternals;e:{if(is(n)!==n||n.tag!==1)throw Error(B(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(n.tag===1){var t=n.type;if(Bt(t))return RI(n,t,e)}return e}function PE(n,e,t,r,i,s,o,a,u){return n=Mm(t,r,!0,n,i,s,o,a,u),n.context=RE(null),t=n.current,r=xt(),i=zr(t),s=er(r,i),s.callback=e??null,Ur(t,s,i),n.current.lanes=i,Nl(n,i,r),zt(n,r),n}function wd(n,e,t,r){var i=e.current,s=xt(),o=zr(i);return t=RE(t),e.context===null?e.context=t:e.pendingContext=t,e=er(s,o),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=Ur(i,e,o),n!==null&&(gn(n,i,o,s),Qu(n,i,o)),o}function Fc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Tv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Fm(n,e){Tv(n,e),(n=n.alternate)&&Tv(n,e)}function SC(){return null}var CE=typeof reportError=="function"?reportError:function(n){console.error(n)};function jm(n){this._internalRoot=n}Id.prototype.render=jm.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(B(409));wd(n,e,null,null)};Id.prototype.unmount=jm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;qi(function(){wd(null,n,null,null)}),e[ir]=null}};function Id(n){this._internalRoot=n}Id.prototype.unstable_scheduleHydration=function(n){if(n){var e=oI();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Pr.length&&e!==0&&e<Pr[t].priority;t++);Pr.splice(t,0,n),t===0&&lI(n)}};function Um(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ed(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Sv(){}function AC(n,e,t,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Fc(o);s.call(c)}}var o=PE(e,r,n,0,null,!1,!1,"",Sv);return n._reactRootContainer=o,n[ir]=o.current,Xa(n.nodeType===8?n.parentNode:n),qi(),o}for(;i=n.lastChild;)n.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Fc(u);a.call(c)}}var u=Mm(n,0,!1,null,null,!1,!1,"",Sv);return n._reactRootContainer=u,n[ir]=u.current,Xa(n.nodeType===8?n.parentNode:n),qi(function(){wd(e,u,t,r)}),u}function Td(n,e,t,r,i){var s=t._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Fc(o);a.call(u)}}wd(e,o,n,i)}else o=AC(t,e,n,i,r);return Fc(o)}iI=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ya(e.pendingLanes);t!==0&&(sm(e,t|1),zt(e,ze()),!(le&6)&&(so=ze()+500,ai()))}break;case 13:qi(function(){var r=sr(n,1);if(r!==null){var i=xt();gn(r,n,1,i)}}),Fm(n,1)}};om=function(n){if(n.tag===13){var e=sr(n,134217728);if(e!==null){var t=xt();gn(e,n,134217728,t)}Fm(n,134217728)}};sI=function(n){if(n.tag===13){var e=zr(n),t=sr(n,e);if(t!==null){var r=xt();gn(t,n,e,r)}Fm(n,e)}};oI=function(){return fe};aI=function(n,e){var t=fe;try{return fe=n,e()}finally{fe=t}};Nf=function(n,e,t){switch(e){case"input":if(Af(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var i=fd(r);if(!i)throw Error(B(90));F0(r),Af(r,i)}}}break;case"textarea":U0(n,t);break;case"select":e=t.value,e!=null&&Bs(n,!!t.multiple,e,!1)}};K0=Dm;H0=qi;var xC={usingClientEntryPoint:!1,Events:[Vl,Ds,fd,W0,G0,Dm]},oa={findFiberByHostInstance:Ci,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},RC={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=J0(n),n===null?null:n.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||SC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lu.isDisabled&&Lu.supportsFiber)try{ud=Lu.inject(RC),bn=Lu}catch{}}Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xC;Xt.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Um(e))throw Error(B(200));return TC(n,e,null,t)};Xt.createRoot=function(n,e){if(!Um(n))throw Error(B(299));var t=!1,r="",i=CE;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Mm(n,1,!1,null,null,t,!1,r,i),n[ir]=e.current,Xa(n.nodeType===8?n.parentNode:n),new jm(e)};Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(B(188)):(n=Object.keys(n).join(","),Error(B(268,n)));return n=J0(e),n=n===null?null:n.stateNode,n};Xt.flushSync=function(n){return qi(n)};Xt.hydrate=function(n,e,t){if(!Ed(e))throw Error(B(200));return Td(null,n,e,!0,t)};Xt.hydrateRoot=function(n,e,t){if(!Um(n))throw Error(B(405));var r=t!=null&&t.hydratedSources||null,i=!1,s="",o=CE;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=PE(e,null,n,1,t??null,i,!1,s,o),n[ir]=e.current,Xa(n),r)for(n=0;n<r.length;n++)t=r[n],i=t._getVersion,i=i(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,i]:e.mutableSourceEagerHydrationData.push(t,i);return new Id(e)};Xt.render=function(n,e,t){if(!Ed(e))throw Error(B(200));return Td(null,n,e,!1,t)};Xt.unmountComponentAtNode=function(n){if(!Ed(n))throw Error(B(40));return n._reactRootContainer?(qi(function(){Td(null,null,n,!1,function(){n._reactRootContainer=null,n[ir]=null})}),!0):!1};Xt.unstable_batchedUpdates=Dm;Xt.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!Ed(t))throw Error(B(200));if(n==null||n._reactInternals===void 0)throw Error(B(38));return Td(n,e,t,!1,r)};Xt.version="18.3.1-next-f1338f8080-20240426";function bE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bE)}catch(n){console.error(n)}}bE(),b0.exports=Xt;var PC=b0.exports,Av=PC;_f.createRoot=Av.createRoot,_f.hydrateRoot=Av.hydrateRoot;var xv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},CC=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},NE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,u=i+2<n.length,c=u?n[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,v=c&63;u||(v=64,o||(m=64)),r.push(t[h],t[f],t[m],t[v])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(kE(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):CC(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new bC;const m=s<<2|a>>4;if(r.push(m),c!==64){const v=a<<4&240|c>>2;if(r.push(v),f!==64){const P=c<<6&192|f;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kC=function(n){const e=kE(n);return NE.encodeByteArray(e,!0)},jc=function(n){return kC(n).replace(/\./g,"")},DE=function(n){try{return NE.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Uc(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!NC(t)||(n[t]=Uc(n[t],e[t]));return n}function NC(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=()=>VE().__FIREBASE_DEFAULTS__,VC=()=>{if(typeof process>"u"||typeof xv>"u")return;const n=xv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},OC=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&DE(n[1]);return e&&JSON.parse(e)},Bm=()=>{try{return DC()||VC()||OC()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},OE=()=>{var n;return(n=Bm())===null||n===void 0?void 0:n.config},LC=n=>{var e;return(e=Bm())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[jc(JSON.stringify(t)),jc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function zm(){var n;const e=(n=Bm())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function UC(){return typeof window<"u"||LE()}function LE(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function BC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ME(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $m(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FE(){const n=De();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function jE(){return!zm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function al(){try{return typeof indexedDB=="object"}catch{return!1}}function zC(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C="FirebaseError";class Rt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=$C,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ss.prototype.create)}}class ss{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rt(i,a,r)}}function qC(n,e){return n.replace(WC,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const WC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function GC(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ll(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Pv(s)&&Pv(o)){if(!ll(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Pv(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Us(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function va(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function UE(n,e){const t=new KC(n,e);return t.subscribe.bind(t)}class KC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");HC(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ef),i.error===void 0&&(i.error=ef),i.complete===void 0&&(i.complete=ef);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HC(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ef(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(n){return n&&n._delegate?n._delegate:n}class On{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new MC;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JC(e))try{this.getOrInitializeService({instanceIdentifier:Ei})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ei){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ei){return this.instances.has(e)}getOptions(e=Ei){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:YC(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ei){return this.component?this.component.multipleInstances?e:Ei:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YC(n){return n===Ei?void 0:n}function JC(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new QC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=[];var re;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(re||(re={}));const zE={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},XC=re.INFO,ZC={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},eb=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=ZC[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sd{constructor(e){this.name=e,this._logLevel=XC,this._logHandler=eb,this._userLogHandler=null,qm.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}function tb(n){qm.forEach(e=>{e.setLogLevel(n)})}function nb(n,e){for(const t of qm){let r=null;e&&e.level&&(r=zE[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&n({level:re[s].toLowerCase(),message:a,args:o,type:i.name})}}}const rb=(n,e)=>e.some(t=>n instanceof t);let Cv,bv;function ib(){return Cv||(Cv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sb(){return bv||(bv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $E=new WeakMap,dp=new WeakMap,qE=new WeakMap,tf=new WeakMap,Wm=new WeakMap;function ob(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(qr(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&$E.set(t,n)}).catch(()=>{}),Wm.set(e,n),e}function ab(n){if(dp.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});dp.set(n,e)}let hp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return dp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||qE.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function lb(n){hp=n(hp)}function ub(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(nf(this),e,...t);return qE.set(r,e.sort?e.sort():[e]),qr(r)}:sb().includes(n)?function(...e){return n.apply(nf(this),e),qr($E.get(this))}:function(...e){return qr(n.apply(nf(this),e))}}function cb(n){return typeof n=="function"?ub(n):(n instanceof IDBTransaction&&ab(n),rb(n,ib())?new Proxy(n,hp):n)}function qr(n){if(n instanceof IDBRequest)return ob(n);if(tf.has(n))return tf.get(n);const e=cb(n);return e!==n&&(tf.set(n,e),Wm.set(e,n)),e}const nf=n=>Wm.get(n);function db(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=qr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(qr(o.result),u.oldVersion,u.newVersion,qr(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const hb=["get","getKey","getAll","getAllKeys","count"],fb=["put","add","delete","clear"],rf=new Map;function kv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(rf.get(e))return rf.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=fb.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hb.includes(t)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&u.done]))[0]};return rf.set(e,s),s}lb(n=>({...n,get:(e,t,r)=>kv(e,t)||n.get(e,t,r),has:(e,t)=>!!kv(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(mb(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function mb(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bc="@firebase/app",fp="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new Sd("@firebase/app"),gb="@firebase/app-compat",yb="@firebase/analytics-compat",_b="@firebase/analytics",vb="@firebase/app-check-compat",wb="@firebase/app-check",Ib="@firebase/auth",Eb="@firebase/auth-compat",Tb="@firebase/database",Sb="@firebase/data-connect",Ab="@firebase/database-compat",xb="@firebase/functions",Rb="@firebase/functions-compat",Pb="@firebase/installations",Cb="@firebase/installations-compat",bb="@firebase/messaging",kb="@firebase/messaging-compat",Nb="@firebase/performance",Db="@firebase/performance-compat",Vb="@firebase/remote-config",Ob="@firebase/remote-config-compat",Lb="@firebase/storage",Mb="@firebase/storage-compat",Fb="@firebase/firestore",jb="@firebase/vertexai-preview",Ub="@firebase/firestore-compat",Bb="firebase",zb="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="[DEFAULT]",$b={[Bc]:"fire-core",[gb]:"fire-core-compat",[_b]:"fire-analytics",[yb]:"fire-analytics-compat",[wb]:"fire-app-check",[vb]:"fire-app-check-compat",[Ib]:"fire-auth",[Eb]:"fire-auth-compat",[Tb]:"fire-rtdb",[Sb]:"fire-data-connect",[Ab]:"fire-rtdb-compat",[xb]:"fire-fn",[Rb]:"fire-fn-compat",[Pb]:"fire-iid",[Cb]:"fire-iid-compat",[bb]:"fire-fcm",[kb]:"fire-fcm-compat",[Nb]:"fire-perf",[Db]:"fire-perf-compat",[Vb]:"fire-rc",[Ob]:"fire-rc-compat",[Lb]:"fire-gcs",[Mb]:"fire-gcs-compat",[Fb]:"fire-fst",[Ub]:"fire-fst-compat",[jb]:"fire-vertex","fire-js":"fire-js",[Bb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new Map,oo=new Map,ao=new Map;function ul(n,e){try{n.container.addComponent(e)}catch(t){ar.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function WE(n,e){n.container.addOrOverwriteComponent(e)}function Yr(n){const e=n.name;if(ao.has(e))return ar.debug(`There were multiple attempts to register component ${e}.`),!1;ao.set(e,n);for(const t of Qr.values())ul(t,n);for(const t of oo.values())ul(t,n);return!0}function GE(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function qb(n,e,t=Hr){GE(n,e).clearInstance(t)}function KE(n){return n.options!==void 0}function Le(n){return n.settings!==void 0}function Wb(){ao.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},on=new ss("app","Firebase",Gb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let HE=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new On("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb extends HE{constructor(e,t,r,i){const s=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,yn(Bc,fp,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Km(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw on.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=zb;function Gm(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw on.create("bad-app-name",{appName:String(i)});if(t||(t=OE()),!t)throw on.create("no-options");const s=Qr.get(i);if(s){if(ll(t,s.options)&&ll(r,s.config))return s;throw on.create("duplicate-app",{appName:i})}const o=new BE(i);for(const u of ao.values())o.addComponent(u);const a=new HE(t,r,o);return Qr.set(i,a),a}function Hb(n,e){if(UC()&&!LE())throw on.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;KE(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((h,f)=>Math.imul(31,h)+f.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw on.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=oo.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new BE(s);for(const c of ao.values())a.addComponent(c);const u=new Kb(t,e,s,a);return oo.set(s,u),u}function Qb(n=Hr){const e=Qr.get(n);if(!e&&n===Hr&&OE())return Gm();if(!e)throw on.create("no-app",{appName:n});return e}function Yb(){return Array.from(Qr.values())}async function Km(n){let e=!1;const t=n.name;Qr.has(t)?(e=!0,Qr.delete(t)):oo.has(t)&&n.decRefCount()<=0&&(oo.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function yn(n,e,t){var r;let i=(r=$b[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ar.warn(a.join(" "));return}Yr(new On(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function QE(n,e){if(n!==null&&typeof n!="function")throw on.create("invalid-log-argument");nb(n,e)}function YE(n){tb(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb="firebase-heartbeat-database",Xb=1,cl="firebase-heartbeat-store";let sf=null;function JE(){return sf||(sf=db(Jb,Xb,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(cl)}catch(t){console.warn(t)}}}}).catch(n=>{throw on.create("idb-open",{originalErrorMessage:n.message})})),sf}async function Zb(n){try{const t=(await JE()).transaction(cl),r=await t.objectStore(cl).get(XE(n));return await t.done,r}catch(e){if(e instanceof Rt)ar.warn(e.message);else{const t=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ar.warn(t.message)}}}async function Nv(n,e){try{const r=(await JE()).transaction(cl,"readwrite");await r.objectStore(cl).put(e,XE(n)),await r.done}catch(t){if(t instanceof Rt)ar.warn(t.message);else{const r=on.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ar.warn(r.message)}}}function XE(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=1024,tk=30*24*60*60*1e3;class nk{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ik(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Dv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=tk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ar.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Dv(),{heartbeatsToSend:r,unsentEntries:i}=rk(this._heartbeatsCache.heartbeats),s=jc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ar.warn(t),""}}}function Dv(){return new Date().toISOString().substring(0,10)}function rk(n,e=ek){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Vv(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Vv(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ik{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return al()?zC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Zb(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vv(n){return jc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(n){Yr(new On("platform-logger",e=>new pb(e),"PRIVATE")),Yr(new On("heartbeat",e=>new nk(e),"PRIVATE")),yn(Bc,fp,n),yn(Bc,fp,"esm2017"),yn("fire-js","")}sk("");const ok=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Rt,SDK_VERSION:li,_DEFAULT_ENTRY_NAME:Hr,_addComponent:ul,_addOrOverwriteComponent:WE,_apps:Qr,_clearComponents:Wb,_components:ao,_getProvider:GE,_isFirebaseApp:KE,_isFirebaseServerApp:Le,_registerComponent:Yr,_removeServiceInstance:qb,_serverApps:oo,deleteApp:Km,getApp:Qb,getApps:Yb,initializeApp:Gm,initializeServerApp:Hb,onLog:QE,registerVersion:yn,setLogLevel:YE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e,t){this._delegate=e,this.firebase=t,ul(e,new On("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Km(this._delegate)))}_getService(e,t=Hr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Hr){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){ul(this._delegate,e)}_addOrOverwriteComponent(e){WE(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Ov=new ss("app-compat","Firebase",lk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:yn,setLogLevel:YE,onLog:QE,apps:null,SDK_VERSION:li,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:ok}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||Hr,!Rv(e,c))throw Ov.create("no-app",{appName:c});return e[c]}i.App=n;function s(c,h={}){const f=Gm(c,h);if(Rv(e,f.name))return e[f.name];const m=new n(f,t);return e[f.name]=m,m}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const h=c.name,f=h.replace("-compat","");if(Yr(c)&&c.type==="PUBLIC"){const m=(v=i())=>{if(typeof v[f]!="function")throw Ov.create("invalid-app-argument",{appName:h});return v[f]()};c.serviceProps!==void 0&&Uc(m,c.serviceProps),t[f]=m,n.prototype[f]=function(...v){return this._getService.bind(this,h).apply(this,c.multipleInstances?v:[])}}return c.type==="PUBLIC"?t[f]:null}function u(c,h){return h==="serverAuth"?null:h}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(){const n=uk(ak);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:ZE,extendNamespace:e,createSubscribe:UE,ErrorFactory:ss,deepExtend:Uc});function e(t){Uc(n,t)}return n}const ck=ZE();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=new Sd("@firebase/app-compat"),dk="@firebase/app-compat",hk="0.2.43";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(n){yn(dk,hk,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const n=VE();if(n.firebase!==void 0){Lv.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Lv.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Nn=ck;fk();var pk="firebase",mk="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn.registerVersion(pk,mk,"app-compat");function Hm(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const aa={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},_s={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function eT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yk=gk,_k=eT,tT=new ss("auth","Firebase",eT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=new Sd("@firebase/auth");function vk(n,...e){zc.logLevel<=re.WARN&&zc.warn(`Auth (${li}): ${n}`,...e)}function nc(n,...e){zc.logLevel<=re.ERROR&&zc.error(`Auth (${li}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n,...e){throw Ym(n,...e)}function Je(n,...e){return Ym(n,...e)}function Qm(n,e,t){const r=Object.assign(Object.assign({},_k()),{[e]:t});return new ss("auth","Firebase",r).create(e,{appName:n.name})}function rt(n){return Qm(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Po(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&dt(n,"argument-error"),Qm(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ym(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return tT.create(n,...e)}function z(n,e,...t){if(!n)throw Ym(e,...t)}function Rn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw nc(e),new Error(e)}function vn(n,e){n||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Jm(){return Mv()==="http:"||Mv()==="https:"}function Mv(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jm()||ME()||"connection"in navigator)?navigator.onLine:!0}function Ik(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,t){this.shortDelay=e,this.longDelay=t,vn(t>e,"Short delay should be less than long delay!"),this.isMobile=jC()||$m()}get(){return wk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(n,e){vn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=new Ll(3e4,6e4);function je(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ue(n,e,t,r,i={}){return rT(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ro(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:u},s);return BC()||(c.referrerPolicy="no-referrer"),nT.fetch()(iT(n,n.config.apiHost,t,a),c)})}async function rT(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ek),e);try{const i=new Ak(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw wa(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw wa(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw wa(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw wa(n,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Qm(n,h,c);dt(n,h)}}catch(i){if(i instanceof Rt)throw i;dt(n,"network-request-failed",{message:String(i)})}}async function hr(n,e,t,r,i={}){const s=await Ue(n,e,t,r,i);return"mfaPendingCredential"in s&&dt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function iT(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Xm(n.config,i):`${n.config.apiScheme}://${i}`}function Sk(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ak{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Je(this.auth,"network-request-failed")),Tk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wa(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Je(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(n){return n!==void 0&&n.getResponse!==void 0}function jv(n){return n!==void 0&&n.enterprise!==void 0}class xk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Sk(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rk(n){return(await Ue(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Pk(n,e){return Ue(n,"GET","/v2/recaptchaConfig",je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ck(n,e){return Ue(n,"POST","/v1/accounts:delete",e)}async function bk(n,e){return Ue(n,"POST","/v1/accounts:update",e)}async function sT(n,e){return Ue(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kk(n,e=!1){const t=J(n),r=await t.getIdToken(e),i=Ad(r);z(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Oa(of(i.auth_time)),issuedAtTime:Oa(of(i.iat)),expirationTime:Oa(of(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function of(n){return Number(n)*1e3}function Ad(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return nc("JWT malformed, contained fewer than 3 sections"),null;try{const i=DE(t);return i?JSON.parse(i):(nc("Failed to decode base64 JWT payload"),null)}catch(i){return nc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Uv(n){const e=Ad(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Rt&&Nk(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Nk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oa(this.lastLoginAt),this.creationTime=Oa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hl(n){var e;const t=n.auth,r=await n.getIdToken(),i=await lr(n,sT(t,{idToken:r}));z(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?oT(s.providerUserInfo):[],a=Ok(n.providerData,o),u=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new pp(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function Vk(n){const e=J(n);await hl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ok(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function oT(n){return n.map(e=>{var{providerId:t}=e,r=Hm(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lk(n,e){const t=await rT(n,{},async()=>{const r=Ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=iT(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Mk(n,e){return Ue(n,"POST","/v2/accounts:revokeToken",je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=Uv(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Lk(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Ks;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ks,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Jn{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Hm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Dk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await lr(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return kk(this,e)}reload(){return Vk(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await hl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Le(this.auth.app))return Promise.reject(rt(this.auth));const e=await this.getIdToken();return await lr(this,Ck(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,u,c,h;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(i=t.email)!==null&&i!==void 0?i:void 0,v=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=t.photoURL)!==null&&o!==void 0?o:void 0,b=(a=t.tenantId)!==null&&a!==void 0?a:void 0,V=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=t.createdAt)!==null&&c!==void 0?c:void 0,w=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:A,emailVerified:N,isAnonymous:M,providerData:F,stsTokenManager:E}=t;z(A&&E,e,"internal-error");const _=Ks.fromJSON(this.name,E);z(typeof A=="string",e,"internal-error"),Ir(f,e.name),Ir(m,e.name),z(typeof N=="boolean",e,"internal-error"),z(typeof M=="boolean",e,"internal-error"),Ir(v,e.name),Ir(P,e.name),Ir(b,e.name),Ir(V,e.name),Ir(S,e.name),Ir(w,e.name);const I=new Jn({uid:A,auth:e,email:m,emailVerified:N,displayName:f,isAnonymous:M,photoURL:P,phoneNumber:v,tenantId:b,stsTokenManager:_,createdAt:S,lastLoginAt:w});return F&&Array.isArray(F)&&(I.providerData=F.map(x=>Object.assign({},x))),V&&(I._redirectEventId=V),I}static async _fromIdTokenResponse(e,t,r=!1){const i=new Ks;i.updateFromServerResponse(t);const s=new Jn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await hl(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?oT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ks;a.updateFromIdToken(r);const u=new Jn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new pp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=new Map;function Ht(n){vn(n instanceof Function,"Expected a class definition");let e=Bv.get(n);return e?(vn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Bv.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}aT.type="NONE";const lo=aT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(n,e,t){return`firebase:${n}:${e}:${t}`}class Hs{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Mi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Mi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Hs(Ht(lo),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Ht(lo);const o=Mi(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const h=await c._get(o);if(h){const f=Jn._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Hs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Hs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hT(e))return"Blackberry";if(fT(e))return"Webos";if(uT(e))return"Safari";if((e.includes("chrome/")||cT(e))&&!e.includes("edge/"))return"Chrome";if(Ml(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lT(n=De()){return/firefox\//i.test(n)}function uT(n=De()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cT(n=De()){return/crios\//i.test(n)}function dT(n=De()){return/iemobile/i.test(n)}function Ml(n=De()){return/android/i.test(n)}function hT(n=De()){return/blackberry/i.test(n)}function fT(n=De()){return/webos/i.test(n)}function Fl(n=De()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Fk(n=De()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function jk(n=De()){var e;return Fl(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Uk(){return FE()&&document.documentMode===10}function pT(n=De()){return Fl(n)||Ml(n)||fT(n)||hT(n)||/windows phone/i.test(n)||dT(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(n,e=[]){let t;switch(n){case"Browser":t=zv(De());break;case"Worker":t=`${zv(De())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${li}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zk(n,e={}){return Ue(n,"GET","/v2/passwordPolicy",je(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=6;class qk{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:$k,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $v(this),this.idTokenSubscription=new $v(this),this.beforeStateQueue=new Bk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ht(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Hs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await sT(this,{idToken:e}),r=await Jn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Le(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hl(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ik()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Le(this.app))return Promise.reject(rt(this));const t=e?J(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Le(this.app)?Promise.reject(rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Le(this.app)?Promise.reject(rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zk(this),t=new qk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ss("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Mk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ht(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await Hs.create(this,[Ht(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&vk(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Me(n){return J(n)}class $v{constructor(e){this.auth=e,this.observer=null,this.addObserver=UE(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Gk(n){jl=n}function Zm(n){return jl.loadJS(n)}function Kk(){return jl.recaptchaV2Script}function Hk(){return jl.recaptchaEnterpriseScript}function Qk(){return jl.gapiScript}function gT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Yk="recaptcha-enterprise",Jk="NO_RECAPTCHA";class Xk{constructor(e){this.type=Yk,this.auth=Me(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Pk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new xk(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;jv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Jk)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&jv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Hk();u.length!==0&&(u+=a),Zm(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function qv(n,e,t,r=!1){const i=new Xk(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function fl(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await qv(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await qv(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}function Zk(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ht);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function e1(n,e,t){const r=Me(n);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=yT(e),{host:o,port:a}=t1(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||n1()}function yT(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function t1(n){const e=yT(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Wv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Wv(o)}}}function Wv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function n1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,t){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _T(n,e){return Ue(n,"POST","/v1/accounts:resetPassword",je(n,e))}async function r1(n,e){return Ue(n,"POST","/v1/accounts:update",e)}async function i1(n,e){return Ue(n,"POST","/v1/accounts:signUp",e)}async function s1(n,e){return Ue(n,"POST","/v1/accounts:update",je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(n,e){return hr(n,"POST","/v1/accounts:signInWithPassword",je(n,e))}async function xd(n,e){return Ue(n,"POST","/v1/accounts:sendOobCode",je(n,e))}async function a1(n,e){return xd(n,e)}async function l1(n,e){return xd(n,e)}async function u1(n,e){return xd(n,e)}async function c1(n,e){return xd(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(n,e){return hr(n,"POST","/v1/accounts:signInWithEmailLink",je(n,e))}async function h1(n,e){return hr(n,"POST","/v1/accounts:signInWithEmailLink",je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends Co{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new pl(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new pl(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fl(e,t,"signInWithPassword",o1);case"emailLink":return d1(e,{email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fl(e,r,"signUpPassword",i1);case"emailLink":return h1(e,{idToken:t,email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(n,e){return hr(n,"POST","/v1/accounts:signInWithIdp",je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1="http://localhost";class Ln extends Co{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):dt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Hm(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ln(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return tr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,tr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,tr(e,t)}buildRequest(){const e={requestUri:f1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ro(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p1(n,e){return Ue(n,"POST","/v1/accounts:sendVerificationCode",je(n,e))}async function m1(n,e){return hr(n,"POST","/v1/accounts:signInWithPhoneNumber",je(n,e))}async function g1(n,e){const t=await hr(n,"POST","/v1/accounts:signInWithPhoneNumber",je(n,e));if(t.temporaryProof)throw wa(n,"account-exists-with-different-credential",t);return t}const y1={USER_NOT_FOUND:"user-not-found"};async function _1(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return hr(n,"POST","/v1/accounts:signInWithPhoneNumber",je(n,t),y1)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends Co{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Fi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Fi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return m1(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return g1(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return _1(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new Fi({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v1(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function w1(n){const e=Us(va(n)).link,t=e?Us(va(e)).deep_link_id:null,r=Us(va(n)).deep_link_id;return(r?Us(va(r)).link:null)||r||t||e||n}class Rd{constructor(e){var t,r,i,s,o,a;const u=Us(va(e)),c=(t=u.apiKey)!==null&&t!==void 0?t:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,f=v1((i=u.mode)!==null&&i!==void 0?i:null);z(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=w1(e);try{return new Rd(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.providerId=ui.PROVIDER_ID}static credential(e,t){return pl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Rd.parseLink(t);return z(r,"argument-error"),pl._fromEmailAndCode(e,r.code,r.tenantId)}}ui.PROVIDER_ID="password";ui.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ui.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends fr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Qs extends bo{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return z("providerId"in t&&"signInMethod"in t,"argument-error"),Ln._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return z(e.idToken||e.accessToken,"argument-error"),Ln._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Qs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Qs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new Qs(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends bo{constructor(){super("facebook.com")}static credential(e){return Ln._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends bo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ln._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Sn.credential(t,r)}catch{return null}}}Sn.GOOGLE_SIGN_IN_METHOD="google.com";Sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends bo{constructor(){super("github.com")}static credential(e){return Ln._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.GITHUB_SIGN_IN_METHOD="github.com";An.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1="http://localhost";class uo extends Co{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return tr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,tr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,tr(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new uo(r,s)}static _create(e,t){return new uo(e,t)}buildRequest(){return{requestUri:I1,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1="saml.";class $c extends fr{constructor(e){z(e.startsWith(E1),"argument-error"),super(e)}static credentialFromResult(e){return $c.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return $c.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=uo.fromJSON(e);return z(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return uo._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends bo{constructor(){super("twitter.com")}static credential(e,t){return Ln._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return xn.credential(t,r)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vT(n,e){return hr(n,"POST","/v1/accounts:signUp",je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Jn._fromIdTokenResponse(e,r,i),o=Gv(r);return new un({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Gv(r);return new un({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Gv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T1(n){var e;if(Le(n.app))return Promise.reject(rt(n));const t=Me(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new un({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await vT(t,{returnSecureToken:!0}),i=await un._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends Rt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new qc(e,t,r,i)}}function wT(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qc._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S1(n,e){const t=J(n);await Pd(!0,t,e);const{providerUserInfo:r}=await bk(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=IT(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function eg(n,e,t=!1){const r=await lr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return un._forOperation(n,"link",r)}async function Pd(n,e,t){await hl(e);const r=IT(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";z(r.has(t)===n,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ET(n,e,t=!1){const{auth:r}=n;if(Le(r.app))return Promise.reject(rt(r));const i="reauthenticate";try{const s=await lr(n,wT(r,i,e,n),t);z(s.idToken,r,"internal-error");const o=Ad(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(n.uid===a,r,"user-mismatch"),un._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&dt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TT(n,e,t=!1){if(Le(n.app))return Promise.reject(rt(n));const r="signIn",i=await wT(n,r,e),s=await un._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Cd(n,e){return TT(Me(n),e)}async function ST(n,e){const t=J(n);return await Pd(!1,t,e.providerId),eg(t,e)}async function AT(n,e){return ET(J(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A1(n,e){return hr(n,"POST","/v1/accounts:signInWithCustomToken",je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x1(n,e){if(Le(n.app))return Promise.reject(rt(n));const t=Me(n),r=await A1(t,{token:e,returnSecureToken:!0}),i=await un._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?tg._fromServerResponse(e,t):"totpInfo"in t?ng._fromServerResponse(e,t):dt(e,"internal-error")}}class tg extends Ul{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new tg(t)}}class ng extends Ul{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new ng(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(n,e,t){var r;z(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),z(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(z(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(z(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rg(n){const e=Me(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function R1(n,e,t){const r=Me(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&bd(r,i,t),await fl(r,i,"getOobCode",l1)}async function P1(n,e,t){await _T(J(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&rg(n),r})}async function C1(n,e){await s1(J(n),{oobCode:e})}async function xT(n,e){const t=J(n),r=await _T(t,{oobCode:e}),i=r.requestType;switch(z(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":z(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":z(r.mfaInfo,t,"internal-error");default:z(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=Ul._fromServerResponse(Me(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function b1(n,e){const{data:t}=await xT(J(n),e);return t.email}async function k1(n,e,t){if(Le(n.app))return Promise.reject(rt(n));const r=Me(n),o=await fl(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vT).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&rg(n),u}),a=await un._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function N1(n,e,t){return Le(n.app)?Promise.reject(rt(n)):Cd(J(n),ui.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&rg(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D1(n,e,t){const r=Me(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){z(a.handleCodeInApp,r,"argument-error"),a&&bd(r,o,a)}s(i,t),await fl(r,i,"getOobCode",u1)}function V1(n,e){const t=Rd.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function O1(n,e,t){if(Le(n.app))return Promise.reject(rt(n));const r=J(n),i=ui.credentialWithLink(e,t||dl());return z(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Cd(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L1(n,e){return Ue(n,"POST","/v1/accounts:createAuthUri",je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M1(n,e){const t=Jm()?dl():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await L1(J(n),r);return i||[]}async function F1(n,e){const t=J(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&bd(t.auth,i,e);const{email:s}=await a1(t.auth,i);s!==n.email&&await n.reload()}async function j1(n,e,t){const r=J(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&bd(r.auth,s,t);const{email:o}=await c1(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(n,e){return Ue(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=J(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await lr(r,U1(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function z1(n,e){const t=J(n);return Le(t.auth.app)?Promise.reject(rt(t.auth)):RT(t,e,null)}function $1(n,e){return RT(J(n),null,e)}async function RT(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await lr(n,r1(r,s));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q1(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=Ad(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ys(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new W1(s,i);case"github.com":return new G1(s,i);case"google.com":return new K1(s,i);case"twitter.com":return new H1(s,i,n.screenName||null);case"custom":case"anonymous":return new Ys(s,null);default:return new Ys(s,r,i)}}class Ys{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class PT extends Ys{constructor(e,t,r,i){super(e,t,r),this.username=i}}class W1 extends Ys{constructor(e,t){super(e,"facebook.com",t)}}class G1 extends PT{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class K1 extends Ys{constructor(e,t){super(e,"google.com",t)}}class H1 extends PT{constructor(e,t,r){super(e,"twitter.com",t,r)}}function Q1(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:q1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new Ni("enroll",e,t)}static _fromMfaPendingCredential(e){return new Ni("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Ni._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Ni._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=Me(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Ul._fromServerResponse(r,a));z(i.mfaPendingCredential,r,"internal-error");const o=Ni._fromMfaPendingCredential(i.mfaPendingCredential);return new ig(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(t.operationType){case"signIn":const h=await un._fromIdTokenResponse(r,t.operationType,c);return await r._updateCurrentUser(h.user),h;case"reauthenticate":return z(t.user,r,"internal-error"),un._forOperation(t.user,t.operationType,c);default:dt(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Y1(n,e){var t;const r=J(n),i=e;return z(e.customData.operationType,r,"argument-error"),z((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),ig._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(n,e){return Ue(n,"POST","/v2/accounts/mfaEnrollment:start",je(n,e))}function X1(n,e){return Ue(n,"POST","/v2/accounts/mfaEnrollment:finalize",je(n,e))}function Z1(n,e){return Ue(n,"POST","/v2/accounts/mfaEnrollment:withdraw",je(n,e))}class sg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Ul._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new sg(e)}async getSession(){return Ni._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,i=await this.getSession(),s=await lr(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await lr(this.user,Z1(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const af=new WeakMap;function eN(n){const e=J(n);return af.has(e)||af.set(e,sg._fromUser(e)),af.get(e)}const Wc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Wc,"1"),this.storage.removeItem(Wc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=1e3,nN=10;class bT extends CT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Uk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,nN):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},tN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bT.type="LOCAL";const og=bT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT extends CT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}kT.type="SESSION";const Wi=kT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new kd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,s)),u=await rN(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Bl("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function sN(n){Ke().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function oN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aN(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function lN(){return ag()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT="firebaseLocalStorageDb",uN=1,Gc="firebaseLocalStorage",DT="fbase_key";class zl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Nd(n,e){return n.transaction([Gc],e?"readwrite":"readonly").objectStore(Gc)}function cN(){const n=indexedDB.deleteDatabase(NT);return new zl(n).toPromise()}function mp(){const n=indexedDB.open(NT,uN);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Gc,{keyPath:DT})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Gc)?e(r):(r.close(),await cN(),e(await mp()))})})}async function Kv(n,e,t){const r=Nd(n,!0).put({[DT]:e,value:t});return new zl(r).toPromise()}async function dN(n,e){const t=Nd(n,!1).get(e),r=await new zl(t).toPromise();return r===void 0?null:r.value}function Hv(n,e){const t=Nd(n,!0).delete(e);return new zl(t).toPromise()}const hN=800,fN=3;class VT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>fN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ag()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kd._getInstance(lN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await oN(),!this.activeServiceWorker)return;this.sender=new iN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mp();return await Kv(e,Wc,"1"),await Hv(e,Wc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kv(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>dN(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Hv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Nd(i,!1).getAll();return new zl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}VT.type="LOCAL";const ml=VT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(n,e){return Ue(n,"POST","/v2/accounts/mfaSignIn:start",je(n,e))}function mN(n,e){return Ue(n,"POST","/v2/accounts/mfaSignIn:finalize",je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN=500,yN=6e4,Mu=1e12;class _N{constructor(e){this.auth=e,this.counter=Mu,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new vN(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Mu;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Mu;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Mu;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class vN{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;z(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=wN(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},yN)},gN))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function wN(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf=gT("rcb"),IN=new Ll(3e4,6e4);class EN{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ke().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return z(TN(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Fv(Ke().grecaptcha)?Promise.resolve(Ke().grecaptcha):new Promise((r,i)=>{const s=Ke().setTimeout(()=>{i(Je(e,"network-request-failed"))},IN.get());Ke()[lf]=()=>{Ke().clearTimeout(s),delete Ke()[lf];const a=Ke().grecaptcha;if(!a||!Fv(a)){i(Je(e,"internal-error"));return}const u=a.render;a.render=(c,h)=>{const f=u(c,h);return this.counter++,f},this.hostLanguage=t,r(a)};const o=`${Kk()}?${Ro({onload:lf,render:"explicit",hl:t})}`;Zm(o).catch(()=>{clearTimeout(s),i(Je(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Ke().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function TN(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class SN{async load(e){return new _N(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT="recaptcha",AN={theme:"light",type:"image"};let xN=class{constructor(e,t,r=Object.assign({},AN)){this.parameters=r,this.type=OT,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Me(e),this.isInvisible=this.parameters.size==="invisible",z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;z(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new SN:new EN,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){z(!this.parameters.sitekey,this.auth,"argument-error"),z(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Ke()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){z(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){z(Jm()&&!ag(),this.auth,"internal-error"),await RN(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Rk(this.auth);z(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return z(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function RN(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Fi._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function PN(n,e,t){if(Le(n.app))return Promise.reject(rt(n));const r=Me(n),i=await Dd(r,e,J(t));return new lg(i,s=>Cd(r,s))}async function CN(n,e,t){const r=J(n);await Pd(!1,r,"phone");const i=await Dd(r.auth,e,J(t));return new lg(i,s=>ST(r,s))}async function bN(n,e,t){const r=J(n);if(Le(r.auth.app))return Promise.reject(rt(r.auth));const i=await Dd(r.auth,e,J(t));return new lg(i,s=>AT(r,s))}async function Dd(n,e,t){var r;const i=await t.verify();try{z(typeof i=="string",n,"argument-error"),z(t.type===OT,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return z(o.type==="enroll",n,"internal-error"),(await J1(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{z(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return z(a,n,"missing-multi-factor-info"),(await pN(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await p1(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function kN(n,e){const t=J(n);if(Le(t.auth.app))return Promise.reject(rt(t.auth));await eg(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gi=class rc{constructor(e){this.providerId=rc.PROVIDER_ID,this.auth=Me(e)}verifyPhoneNumber(e,t){return Dd(this.auth,e,J(t))}static credential(e,t){return Fi._fromVerification(e,t)}static credentialFromResult(e){const t=e;return rc.credentialFromTaggedObject(t)}static credentialFromError(e){return rc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Fi._fromTokenResponse(t,r):null}};Gi.PROVIDER_ID="phone";Gi.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(n,e){return e?Ht(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug extends Co{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return tr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function NN(n){return TT(n.auth,new ug(n),n.bypassAuthState)}function DN(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),ET(t,new ug(n),n.bypassAuthState)}async function VN(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),eg(t,new ug(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NN;case"linkViaPopup":case"linkViaRedirect":return VN;case"reauthViaPopup":case"reauthViaRedirect":return DN;default:dt(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON=new Ll(2e3,1e4);async function LN(n,e,t){if(Le(n.app))return Promise.reject(Je(n,"operation-not-supported-in-this-environment"));const r=Me(n);Po(n,e,fr);const i=os(r,t);return new Xn(r,"signInViaPopup",e,i).executeNotNull()}async function MN(n,e,t){const r=J(n);if(Le(r.auth.app))return Promise.reject(Je(r.auth,"operation-not-supported-in-this-environment"));Po(r.auth,e,fr);const i=os(r.auth,t);return new Xn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function FN(n,e,t){const r=J(n);Po(r.auth,e,fr);const i=os(r.auth,t);return new Xn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Xn extends LT{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Xn.currentPopupAction&&Xn.currentPopupAction.cancel(),Xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Bl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ON.get())};e()}}Xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN="pendingRedirect",La=new Map;class UN extends LT{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=La.get(this.auth._key());if(!e){try{const r=await BN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}La.set(this.auth._key(),e)}return this.bypassAuthState||La.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BN(n,e){const t=FT(e),r=MT(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function cg(n,e){return MT(n)._set(FT(e),"true")}function zN(){La.clear()}function dg(n,e){La.set(n._key(),e)}function MT(n){return Ht(n._redirectPersistence)}function FT(n){return Mi(jN,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(n,e,t){return qN(n,e,t)}async function qN(n,e,t){if(Le(n.app))return Promise.reject(rt(n));const r=Me(n);Po(n,e,fr),await r._initializationPromise;const i=os(r,t);return await cg(i,r),i._openRedirect(r,e,"signInViaRedirect")}function WN(n,e,t){return GN(n,e,t)}async function GN(n,e,t){const r=J(n);if(Po(r.auth,e,fr),Le(r.auth.app))return Promise.reject(rt(r.auth));await r.auth._initializationPromise;const i=os(r.auth,t);await cg(i,r.auth);const s=await jT(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function KN(n,e,t){return HN(n,e,t)}async function HN(n,e,t){const r=J(n);Po(r.auth,e,fr),await r.auth._initializationPromise;const i=os(r.auth,t);await Pd(!1,r,e.providerId),await cg(i,r.auth);const s=await jT(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function QN(n,e){return await Me(n)._initializationPromise,Vd(n,e,!1)}async function Vd(n,e,t=!1){if(Le(n.app))return Promise.reject(rt(n));const r=Me(n),i=os(r,e),o=await new UN(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function jT(n){const e=Bl(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=10*60*1e3;class UT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!BT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Je(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qv(e))}saveEventToCache(e){this.cachedEventUids.add(Qv(e)),this.lastProcessedEventTime=Date.now()}}function Qv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function BT({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JN(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return BT(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zT(n,e={}){return Ue(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZN=/^https?/;async function eD(n){if(n.config.emulator)return;const{authorizedDomains:e}=await zT(n);for(const t of e)try{if(tD(t))return}catch{}dt(n,"unauthorized-domain")}function tD(n){const e=dl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!ZN.test(t))return!1;if(XN.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=new Ll(3e4,6e4);function Yv(){const n=Ke().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function rD(n){return new Promise((e,t)=>{var r,i,s;function o(){Yv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yv(),t(Je(n,"network-request-failed"))},timeout:nD.get()})}if(!((i=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ke().gapi)===null||s===void 0)&&s.load)o();else{const a=gT("iframefcb");return Ke()[a]=()=>{gapi.load?o():t(Je(n,"network-request-failed"))},Zm(`${Qk()}?onload=${a}`).catch(u=>t(u))}}).catch(e=>{throw ic=null,e})}let ic=null;function iD(n){return ic=ic||rD(n),ic}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD=new Ll(5e3,15e3),oD="__/auth/iframe",aD="emulator/auth/iframe",lD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cD(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Xm(e,aD):`https://${n.config.authDomain}/${oD}`,r={apiKey:e.apiKey,appName:n.name,v:li},i=uD.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Ro(r).slice(1)}`}async function dD(n){const e=await iD(n),t=Ke().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:cD(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Je(n,"network-request-failed"),a=Ke().setTimeout(()=>{s(o)},sD.get());function u(){Ke().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fD=500,pD=600,mD="_blank",gD="http://localhost";class Jv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yD(n,e,t,r=fD,i=pD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},hD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=De().toLowerCase();t&&(a=cT(c)?mD:t),lT(c)&&(e=e||gD,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[v,P])=>`${m}${v}=${P},`,"");if(jk(c)&&a!=="_self")return _D(e||"",a),new Jv(null);const f=window.open(e||"",a,h);z(f,n,"popup-blocked");try{f.focus()}catch{}return new Jv(f)}function _D(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD="__/auth/handler",wD="emulator/auth/handler",ID=encodeURIComponent("fac");async function gp(n,e,t,r,i,s){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:li,eventId:i};if(e instanceof fr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",GC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries(s||{}))o[h]=f}if(e instanceof bo){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await n._getAppCheckToken(),c=u?`#${ID}=${encodeURIComponent(u)}`:"";return`${ED(n)}?${Ro(a).slice(1)}${c}`}function ED({config:n}){return n.emulator?Xm(n,wD):`https://${n.authDomain}/${vD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="webStorageSupport";class TD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wi,this._completeRedirectFn=Vd,this._overrideRedirectResult=dg}async _openPopup(e,t,r,i){var s;vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await gp(e,t,r,dl(),i);return yD(e,o,Bl())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await gp(e,t,r,dl(),i);return sN(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await dD(e),r=new UT(e);return t.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(uf,{type:uf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[uf];o!==void 0&&t(!!o),dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=eD(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return pT()||uT()||Fl()}}const SD=TD;class AD{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Rn("unexpected MultiFactorSessionType")}}}class hg extends AD{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new hg(e)}_finalizeEnroll(e,t,r){return X1(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return mN(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class $T{constructor(){}static assertion(e){return hg._fromCredential(e)}}$T.FACTOR_ID="phone";var Xv="@firebase/auth",Zv="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RD(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PD(n){Yr(new On("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mT(n)},c=new Wk(r,i,s,u);return Zk(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Yr(new On("auth-internal",e=>{const t=Me(e.getProvider("auth").getImmediate());return(r=>new xD(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(Xv,Zv,RD(n)),yn(Xv,Zv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=5*60;LC("authIdTokenMaxAge");function bD(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Gk({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Je("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",bD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PD("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD=2e3;async function ND(n,e,t){var r;const{BuildInfo:i}=Ki();vn(e.sessionId,"AuthEvent did not contain a session ID");const s=await MD(e.sessionId),o={};return Fl()?o.ibi=i.packageName:Ml()?o.apn=i.packageName:dt(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,gp(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function DD(n){const{BuildInfo:e}=Ki(),t={};Fl()?t.iosBundleId=e.packageName:Ml()?t.androidPackageName=e.packageName:dt(n,"operation-not-supported-in-this-environment"),await zT(n,t)}function VD(n){const{cordova:e}=Ki();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,Fk()?"_blank":"_system","location=yes"),t(i)})})}async function OD(n,e,t){const{cordova:r}=Ki();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var f;s();const m=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof m=="function"&&m(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function c(){a||(a=window.setTimeout(()=>{o(Je(n,"redirect-cancelled-by-user"))},kD))}function h(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(u),document.addEventListener("resume",c,!1),Ml()&&document.addEventListener("visibilitychange",h,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",h,!1),a&&window.clearTimeout(a)}})}finally{i()}}function LD(n){var e,t,r,i,s,o,a,u,c,h;const f=Ki();z(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),z(typeof((t=f==null?void 0:f.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),z(typeof((s=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),z(typeof((u=(a=(o=f==null?void 0:f.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),z(typeof((h=(c=f==null?void 0:f.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||h===void 0?void 0:h.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function MD(n){const e=FD(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function FD(n){if(vn(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jD=20;class UD extends UT{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function BD(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:qD(),postBody:null,tenantId:n.tenantId,error:Je(n,"no-auth-event")}}function zD(n,e){return yp()._set(_p(n),e)}async function ew(n){const e=await yp()._get(_p(n));return e&&await yp()._remove(_p(n)),e}function $D(n,e){var t,r;const i=GD(e);if(i.includes("/__/auth/callback")){const s=sc(i),o=s.firebaseError?WD(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],u=a?Je(a):null;return u?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function qD(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<jD;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function yp(){return Ht(og)}function _p(n){return Mi("authEvent",n.config.apiKey,n.name)}function WD(n){try{return JSON.parse(n)}catch{return null}}function GD(n){const e=sc(n),t=e.link?decodeURIComponent(e.link):void 0,r=sc(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return sc(i).link||i||r||t||n}function sc(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Us(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KD=500;class HD{constructor(){this._redirectPersistence=Wi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Vd,this._overrideRedirectResult=dg}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new UD(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){dt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){LD(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),zN(),await this._originValidation(e);const o=BD(e,r,i);await zD(e,o);const a=await ND(e,o,t),u=await VD(a);return OD(e,s,u)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=DD(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Ki(),o=setTimeout(async()=>{await ew(e),t.onEvent(tw())},KD),a=async h=>{clearTimeout(o);const f=await ew(e);let m=null;f&&(h!=null&&h.url)&&(m=$D(f,h.url)),t.onEvent(m||tw())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,c=`${s.packageName.toLowerCase()}://`;Ki().handleOpenURL=async h=>{if(h.toLowerCase().startsWith(c)&&a({url:h}),typeof u=="function")try{u(h)}catch(f){console.error(f)}}}}const QD=HD;function tw(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Je("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YD(n,e){Me(n)._logFramework(e)}var JD="@firebase/auth-compat",XD="0.5.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=1e3;function Ma(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function eV(){return Ma()==="http:"||Ma()==="https:"}function qT(n=De()){return!!((Ma()==="file:"||Ma()==="ionic:"||Ma()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function tV(){return $m()||zm()}function nV(){return FE()&&(document==null?void 0:document.documentMode)===11}function rV(n=De()){return/Edge\/\d+/.test(n)}function iV(n=De()){return nV()||rV(n)}function WT(){try{const n=self.localStorage,e=Bl();if(n)return n.setItem(e,"1"),n.removeItem(e),iV()?al():!0}catch{return fg()&&al()}return!1}function fg(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function cf(){return(eV()||ME()||qT())&&!tV()&&WT()&&!fg()}function GT(){return qT()&&typeof document<"u"}async function sV(){return GT()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},ZD);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function oV(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt={LOCAL:"local",NONE:"none",SESSION:"session"},la=z,KT="persistence";function aV(n,e){if(la(Object.values(Gt).includes(e),n,"invalid-persistence-type"),$m()){la(e!==Gt.SESSION,n,"unsupported-persistence-type");return}if(zm()){la(e===Gt.NONE,n,"unsupported-persistence-type");return}if(fg()){la(e===Gt.NONE||e===Gt.LOCAL&&al(),n,"unsupported-persistence-type");return}la(e===Gt.NONE||WT(),n,"unsupported-persistence-type")}async function vp(n){await n._initializationPromise;const e=HT(),t=Mi(KT,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function lV(n,e){const t=HT();if(!t)return[];const r=Mi(KT,n,e);switch(t.getItem(r)){case Gt.NONE:return[lo];case Gt.LOCAL:return[ml,Wi];case Gt.SESSION:return[Wi];default:return[]}}function HT(){var n;try{return((n=oV())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uV=z;class Vr{constructor(){this.browserResolver=Ht(SD),this.cordovaResolver=Ht(QD),this.underlyingResolver=null,this._redirectPersistence=Wi,this._completeRedirectFn=Vd,this._overrideRedirectResult=dg}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return GT()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return uV(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await sV();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(n){return n.unwrap()}function cV(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dV(n){return YT(n)}function hV(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new fV(n,Y1(n,e))}else if(r){const i=YT(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function YT(n){const{_tokenResponse:e}=n instanceof Rt?n.customData:n;if(!e)return null;if(!(n instanceof Rt)&&"temporaryProof"in e&&"phoneNumber"in e)return Gi.credentialFromResult(n);const t=e.providerId;if(!t||t===aa.PASSWORD)return null;let r;switch(t){case aa.GOOGLE:r=Sn;break;case aa.FACEBOOK:r=Tn;break;case aa.GITHUB:r=An;break;case aa.TWITTER:r=xn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?uo._create(t,a):Ln._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new Qs(t).credential({idToken:i,accessToken:s,rawNonce:u})}return n instanceof Rt?r.credentialFromError(n):r.credentialFromResult(n)}function Dt(n,e){return e.catch(t=>{throw t instanceof Rt&&hV(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:dV(t),additionalUserInfo:Q1(t),user:Od.getOrCreate(i)}})}async function wp(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Dt(n,t.confirm(r))}}class fV{constructor(e,t){this.resolver=t,this.auth=cV(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Dt(QT(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Od=class Ia{constructor(e){this._delegate=e,this.multiFactor=eN(e)}static getOrCreate(e){return Ia.USER_MAP.has(e)||Ia.USER_MAP.set(e,new Ia(e)),Ia.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Dt(this.auth,ST(this._delegate,e))}async linkWithPhoneNumber(e,t){return wp(this.auth,CN(this._delegate,e,t))}async linkWithPopup(e){return Dt(this.auth,FN(this._delegate,e,Vr))}async linkWithRedirect(e){return await vp(Me(this.auth)),KN(this._delegate,e,Vr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Dt(this.auth,AT(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return wp(this.auth,bN(this._delegate,e,t))}reauthenticateWithPopup(e){return Dt(this.auth,MN(this._delegate,e,Vr))}async reauthenticateWithRedirect(e){return await vp(Me(this.auth)),WN(this._delegate,e,Vr)}sendEmailVerification(e){return F1(this._delegate,e)}async unlink(e){return await S1(this._delegate,e),this}updateEmail(e){return z1(this._delegate,e)}updatePassword(e){return $1(this._delegate,e)}updatePhoneNumber(e){return kN(this._delegate,e)}updateProfile(e){return B1(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return j1(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Od.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=z;let Ip=class{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ua(r,"invalid-api-key",{appName:e.name}),ua(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Vr:void 0;this._delegate=t.initialize({options:{persistence:pV(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(yk),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Od.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){e1(this._delegate,e,t)}applyActionCode(e){return C1(this._delegate,e)}checkActionCode(e){return xT(this._delegate,e)}confirmPasswordReset(e,t){return P1(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Dt(this._delegate,k1(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return M1(this._delegate,e)}isSignInWithEmailLink(e){return V1(this._delegate,e)}async getRedirectResult(){ua(cf(),this._delegate,"operation-not-supported-in-this-environment");const e=await QN(this._delegate,Vr);return e?Dt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){YD(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=nw(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=nw(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return D1(this._delegate,e,t)}sendPasswordResetEmail(e,t){return R1(this._delegate,e,t||void 0)}async setPersistence(e){aV(this._delegate,e);let t;switch(e){case Gt.SESSION:t=Wi;break;case Gt.LOCAL:t=await Ht(ml)._isAvailable()?ml:og;break;case Gt.NONE:t=lo;break;default:return dt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Dt(this._delegate,T1(this._delegate))}signInWithCredential(e){return Dt(this._delegate,Cd(this._delegate,e))}signInWithCustomToken(e){return Dt(this._delegate,x1(this._delegate,e))}signInWithEmailAndPassword(e,t){return Dt(this._delegate,N1(this._delegate,e,t))}signInWithEmailLink(e,t){return Dt(this._delegate,O1(this._delegate,e,t))}signInWithPhoneNumber(e,t){return wp(this._delegate,PN(this._delegate,e,t))}async signInWithPopup(e){return ua(cf(),this._delegate,"operation-not-supported-in-this-environment"),Dt(this._delegate,LN(this._delegate,e,Vr))}async signInWithRedirect(e){return ua(cf(),this._delegate,"operation-not-supported-in-this-environment"),await vp(this._delegate),$N(this._delegate,e,Vr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return b1(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}};Ip.Persistence=Gt;function nw(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&Od.getOrCreate(o)),error:e,complete:t}}function pV(n,e){const t=lV(n,e);if(typeof self<"u"&&!t.includes(ml)&&t.push(ml),typeof window<"u")for(const r of[og,Wi])t.includes(r)||t.push(r);return t.includes(lo)||t.push(lo),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.providerId="phone",this._delegate=new Gi(QT(Nn.auth()))}static credential(e,t){return Gi.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}pg.PHONE_SIGN_IN_METHOD=Gi.PHONE_SIGN_IN_METHOD;pg.PROVIDER_ID=Gi.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mV=z;class gV{constructor(e,t,r=Nn.app()){var i;mV((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new xN(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yV="auth-compat";function _V(n){n.INTERNAL.registerComponent(new On(yV,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Ip(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:_s.EMAIL_SIGNIN,PASSWORD_RESET:_s.PASSWORD_RESET,RECOVER_EMAIL:_s.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:_s.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:_s.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:_s.VERIFY_EMAIL}},EmailAuthProvider:ui,FacebookAuthProvider:Tn,GithubAuthProvider:An,GoogleAuthProvider:Sn,OAuthProvider:Qs,SAMLAuthProvider:$c,PhoneAuthProvider:pg,PhoneMultiFactorGenerator:$T,RecaptchaVerifier:gV,TwitterAuthProvider:xn,Auth:Ip,AuthCredential:Co,Error:Rt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(JD,XD)}_V(Nn);var rw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ji,JT;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function I(){}I.prototype=_.prototype,E.D=_.prototype,E.prototype=new I,E.prototype.constructor=E,E.C=function(x,C,R){for(var T=Array(arguments.length-2),de=2;de<arguments.length;de++)T[de-2]=arguments[de];return _.prototype[C].apply(x,T)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,_,I){I||(I=0);var x=Array(16);if(typeof _=="string")for(var C=0;16>C;++C)x[C]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(C=0;16>C;++C)x[C]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=E.g[0],I=E.g[1],C=E.g[2];var R=E.g[3],T=_+(R^I&(C^R))+x[0]+3614090360&4294967295;_=I+(T<<7&4294967295|T>>>25),T=R+(C^_&(I^C))+x[1]+3905402710&4294967295,R=_+(T<<12&4294967295|T>>>20),T=C+(I^R&(_^I))+x[2]+606105819&4294967295,C=R+(T<<17&4294967295|T>>>15),T=I+(_^C&(R^_))+x[3]+3250441966&4294967295,I=C+(T<<22&4294967295|T>>>10),T=_+(R^I&(C^R))+x[4]+4118548399&4294967295,_=I+(T<<7&4294967295|T>>>25),T=R+(C^_&(I^C))+x[5]+1200080426&4294967295,R=_+(T<<12&4294967295|T>>>20),T=C+(I^R&(_^I))+x[6]+2821735955&4294967295,C=R+(T<<17&4294967295|T>>>15),T=I+(_^C&(R^_))+x[7]+4249261313&4294967295,I=C+(T<<22&4294967295|T>>>10),T=_+(R^I&(C^R))+x[8]+1770035416&4294967295,_=I+(T<<7&4294967295|T>>>25),T=R+(C^_&(I^C))+x[9]+2336552879&4294967295,R=_+(T<<12&4294967295|T>>>20),T=C+(I^R&(_^I))+x[10]+4294925233&4294967295,C=R+(T<<17&4294967295|T>>>15),T=I+(_^C&(R^_))+x[11]+2304563134&4294967295,I=C+(T<<22&4294967295|T>>>10),T=_+(R^I&(C^R))+x[12]+1804603682&4294967295,_=I+(T<<7&4294967295|T>>>25),T=R+(C^_&(I^C))+x[13]+4254626195&4294967295,R=_+(T<<12&4294967295|T>>>20),T=C+(I^R&(_^I))+x[14]+2792965006&4294967295,C=R+(T<<17&4294967295|T>>>15),T=I+(_^C&(R^_))+x[15]+1236535329&4294967295,I=C+(T<<22&4294967295|T>>>10),T=_+(C^R&(I^C))+x[1]+4129170786&4294967295,_=I+(T<<5&4294967295|T>>>27),T=R+(I^C&(_^I))+x[6]+3225465664&4294967295,R=_+(T<<9&4294967295|T>>>23),T=C+(_^I&(R^_))+x[11]+643717713&4294967295,C=R+(T<<14&4294967295|T>>>18),T=I+(R^_&(C^R))+x[0]+3921069994&4294967295,I=C+(T<<20&4294967295|T>>>12),T=_+(C^R&(I^C))+x[5]+3593408605&4294967295,_=I+(T<<5&4294967295|T>>>27),T=R+(I^C&(_^I))+x[10]+38016083&4294967295,R=_+(T<<9&4294967295|T>>>23),T=C+(_^I&(R^_))+x[15]+3634488961&4294967295,C=R+(T<<14&4294967295|T>>>18),T=I+(R^_&(C^R))+x[4]+3889429448&4294967295,I=C+(T<<20&4294967295|T>>>12),T=_+(C^R&(I^C))+x[9]+568446438&4294967295,_=I+(T<<5&4294967295|T>>>27),T=R+(I^C&(_^I))+x[14]+3275163606&4294967295,R=_+(T<<9&4294967295|T>>>23),T=C+(_^I&(R^_))+x[3]+4107603335&4294967295,C=R+(T<<14&4294967295|T>>>18),T=I+(R^_&(C^R))+x[8]+1163531501&4294967295,I=C+(T<<20&4294967295|T>>>12),T=_+(C^R&(I^C))+x[13]+2850285829&4294967295,_=I+(T<<5&4294967295|T>>>27),T=R+(I^C&(_^I))+x[2]+4243563512&4294967295,R=_+(T<<9&4294967295|T>>>23),T=C+(_^I&(R^_))+x[7]+1735328473&4294967295,C=R+(T<<14&4294967295|T>>>18),T=I+(R^_&(C^R))+x[12]+2368359562&4294967295,I=C+(T<<20&4294967295|T>>>12),T=_+(I^C^R)+x[5]+4294588738&4294967295,_=I+(T<<4&4294967295|T>>>28),T=R+(_^I^C)+x[8]+2272392833&4294967295,R=_+(T<<11&4294967295|T>>>21),T=C+(R^_^I)+x[11]+1839030562&4294967295,C=R+(T<<16&4294967295|T>>>16),T=I+(C^R^_)+x[14]+4259657740&4294967295,I=C+(T<<23&4294967295|T>>>9),T=_+(I^C^R)+x[1]+2763975236&4294967295,_=I+(T<<4&4294967295|T>>>28),T=R+(_^I^C)+x[4]+1272893353&4294967295,R=_+(T<<11&4294967295|T>>>21),T=C+(R^_^I)+x[7]+4139469664&4294967295,C=R+(T<<16&4294967295|T>>>16),T=I+(C^R^_)+x[10]+3200236656&4294967295,I=C+(T<<23&4294967295|T>>>9),T=_+(I^C^R)+x[13]+681279174&4294967295,_=I+(T<<4&4294967295|T>>>28),T=R+(_^I^C)+x[0]+3936430074&4294967295,R=_+(T<<11&4294967295|T>>>21),T=C+(R^_^I)+x[3]+3572445317&4294967295,C=R+(T<<16&4294967295|T>>>16),T=I+(C^R^_)+x[6]+76029189&4294967295,I=C+(T<<23&4294967295|T>>>9),T=_+(I^C^R)+x[9]+3654602809&4294967295,_=I+(T<<4&4294967295|T>>>28),T=R+(_^I^C)+x[12]+3873151461&4294967295,R=_+(T<<11&4294967295|T>>>21),T=C+(R^_^I)+x[15]+530742520&4294967295,C=R+(T<<16&4294967295|T>>>16),T=I+(C^R^_)+x[2]+3299628645&4294967295,I=C+(T<<23&4294967295|T>>>9),T=_+(C^(I|~R))+x[0]+4096336452&4294967295,_=I+(T<<6&4294967295|T>>>26),T=R+(I^(_|~C))+x[7]+1126891415&4294967295,R=_+(T<<10&4294967295|T>>>22),T=C+(_^(R|~I))+x[14]+2878612391&4294967295,C=R+(T<<15&4294967295|T>>>17),T=I+(R^(C|~_))+x[5]+4237533241&4294967295,I=C+(T<<21&4294967295|T>>>11),T=_+(C^(I|~R))+x[12]+1700485571&4294967295,_=I+(T<<6&4294967295|T>>>26),T=R+(I^(_|~C))+x[3]+2399980690&4294967295,R=_+(T<<10&4294967295|T>>>22),T=C+(_^(R|~I))+x[10]+4293915773&4294967295,C=R+(T<<15&4294967295|T>>>17),T=I+(R^(C|~_))+x[1]+2240044497&4294967295,I=C+(T<<21&4294967295|T>>>11),T=_+(C^(I|~R))+x[8]+1873313359&4294967295,_=I+(T<<6&4294967295|T>>>26),T=R+(I^(_|~C))+x[15]+4264355552&4294967295,R=_+(T<<10&4294967295|T>>>22),T=C+(_^(R|~I))+x[6]+2734768916&4294967295,C=R+(T<<15&4294967295|T>>>17),T=I+(R^(C|~_))+x[13]+1309151649&4294967295,I=C+(T<<21&4294967295|T>>>11),T=_+(C^(I|~R))+x[4]+4149444226&4294967295,_=I+(T<<6&4294967295|T>>>26),T=R+(I^(_|~C))+x[11]+3174756917&4294967295,R=_+(T<<10&4294967295|T>>>22),T=C+(_^(R|~I))+x[2]+718787259&4294967295,C=R+(T<<15&4294967295|T>>>17),T=I+(R^(C|~_))+x[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+R&4294967295}r.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var I=_-this.blockSize,x=this.B,C=this.h,R=0;R<_;){if(C==0)for(;R<=I;)i(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<_;)if(x[C++]=E.charCodeAt(R++),C==this.blockSize){i(this,x),C=0;break}}else for(;R<_;)if(x[C++]=E[R++],C==this.blockSize){i(this,x),C=0;break}}this.h=C,this.o+=_},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var I=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=I&255,I/=256;for(this.u(E),E=Array(16),_=I=0;4>_;++_)for(var x=0;32>x;x+=8)E[I++]=this.g[_]>>>x&255;return E};function s(E,_){var I=a;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=_(E)}function o(E,_){this.h=_;for(var I=[],x=!0,C=E.length-1;0<=C;C--){var R=E[C]|0;x&&R==_||(I[C]=R,x=!1)}this.g=I}var a={};function u(E){return-128<=E&&128>E?s(E,function(_){return new o([_|0],0>_?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return f;if(0>E)return V(c(-E));for(var _=[],I=1,x=0;E>=I;x++)_[x]=E/I|0,I*=4294967296;return new o(_,0)}function h(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return V(h(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(_,8)),x=f,C=0;C<E.length;C+=8){var R=Math.min(8,E.length-C),T=parseInt(E.substring(C,C+R),_);8>R?(R=c(Math.pow(_,R)),x=x.j(R).add(c(T))):(x=x.j(I),x=x.add(c(T)))}return x}var f=u(0),m=u(1),v=u(16777216);n=o.prototype,n.m=function(){if(b(this))return-V(this).m();for(var E=0,_=1,I=0;I<this.g.length;I++){var x=this.i(I);E+=(0<=x?x:4294967296+x)*_,_*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(b(this))return"-"+V(this).toString(E);for(var _=c(Math.pow(E,6)),I=this,x="";;){var C=N(I,_).g;I=S(I,C.j(_));var R=((0<I.g.length?I.g[0]:I.h)>>>0).toString(E);if(I=C,P(I))return R+x;for(;6>R.length;)R="0"+R;x=R+x}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function b(E){return E.h==-1}n.l=function(E){return E=S(this,E),b(E)?-1:P(E)?0:1};function V(E){for(var _=E.g.length,I=[],x=0;x<_;x++)I[x]=~E.g[x];return new o(I,~E.h).add(m)}n.abs=function(){return b(this)?V(this):this},n.add=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],x=0,C=0;C<=_;C++){var R=x+(this.i(C)&65535)+(E.i(C)&65535),T=(R>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);x=T>>>16,R&=65535,T&=65535,I[C]=T<<16|R}return new o(I,I[I.length-1]&-2147483648?-1:0)};function S(E,_){return E.add(V(_))}n.j=function(E){if(P(this)||P(E))return f;if(b(this))return b(E)?V(this).j(V(E)):V(V(this).j(E));if(b(E))return V(this.j(V(E)));if(0>this.l(v)&&0>E.l(v))return c(this.m()*E.m());for(var _=this.g.length+E.g.length,I=[],x=0;x<2*_;x++)I[x]=0;for(x=0;x<this.g.length;x++)for(var C=0;C<E.g.length;C++){var R=this.i(x)>>>16,T=this.i(x)&65535,de=E.i(C)>>>16,pi=E.i(C)&65535;I[2*x+2*C]+=T*pi,w(I,2*x+2*C),I[2*x+2*C+1]+=R*pi,w(I,2*x+2*C+1),I[2*x+2*C+1]+=T*de,w(I,2*x+2*C+1),I[2*x+2*C+2]+=R*de,w(I,2*x+2*C+2)}for(x=0;x<_;x++)I[x]=I[2*x+1]<<16|I[2*x];for(x=_;x<2*_;x++)I[x]=0;return new o(I,0)};function w(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function A(E,_){this.g=E,this.h=_}function N(E,_){if(P(_))throw Error("division by zero");if(P(E))return new A(f,f);if(b(E))return _=N(V(E),_),new A(V(_.g),V(_.h));if(b(_))return _=N(E,V(_)),new A(V(_.g),_.h);if(30<E.g.length){if(b(E)||b(_))throw Error("slowDivide_ only works with positive integers.");for(var I=m,x=_;0>=x.l(E);)I=M(I),x=M(x);var C=F(I,1),R=F(x,1);for(x=F(x,2),I=F(I,2);!P(x);){var T=R.add(x);0>=T.l(E)&&(C=C.add(I),R=T),x=F(x,1),I=F(I,1)}return _=S(E,C.j(_)),new A(C,_)}for(C=f;0<=E.l(_);){for(I=Math.max(1,Math.floor(E.m()/_.m())),x=Math.ceil(Math.log(I)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),R=c(I),T=R.j(_);b(T)||0<T.l(E);)I-=x,R=c(I),T=R.j(_);P(R)&&(R=m),C=C.add(R),E=S(E,T)}return new A(C,E)}n.A=function(E){return N(this,E).h},n.and=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],x=0;x<_;x++)I[x]=this.i(x)&E.i(x);return new o(I,this.h&E.h)},n.or=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],x=0;x<_;x++)I[x]=this.i(x)|E.i(x);return new o(I,this.h|E.h)},n.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],x=0;x<_;x++)I[x]=this.i(x)^E.i(x);return new o(I,this.h^E.h)};function M(E){for(var _=E.g.length+1,I=[],x=0;x<_;x++)I[x]=E.i(x)<<1|E.i(x-1)>>>31;return new o(I,E.h)}function F(E,_){var I=_>>5;_%=32;for(var x=E.g.length-I,C=[],R=0;R<x;R++)C[R]=0<_?E.i(R+I)>>>_|E.i(R+I+1)<<32-_:E.i(R+I);return new o(C,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,JT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,ji=o}).apply(typeof rw<"u"?rw:typeof self<"u"?self:typeof window<"u"?window:{});var Fu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var XT,Ea,ZT,oc,Ep,eS,tS,nS;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fu=="object"&&Fu];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function i(l,d){if(d)e:{var p=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var k=l[y];if(!(k in p))break e;p=p[k]}l=l[l.length-1],y=p[l],d=d(y),d!=y&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var p=0,y=!1,k={next:function(){if(!y&&p<l.length){var L=p++;return{value:d(L,l[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,y),l.apply(d,k)}}return function(){return l.apply(d,arguments)}}function m(l,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function v(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function P(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(y,k,L){for(var $=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)$[ge-2]=arguments[ge];return d.prototype[k].apply(y,$)}}function b(l){const d=l.length;if(0<d){const p=Array(d);for(let y=0;y<d;y++)p[y]=l[y];return p}return[]}function V(l,d){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(u(y)){const k=l.length||0,L=y.length||0;l.length=k+L;for(let $=0;$<L;$++)l[k+$]=y[$]}else l.push(y)}}class S{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function w(l){return/^[\s\xa0]*$/.test(l)}function A(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function N(l){return N[" "](l),l}N[" "]=function(){};var M=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function F(l,d,p){for(const y in l)d.call(p,l[y],y,l)}function E(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function _(l){const d={};for(const p in l)d[p]=l[p];return d}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(l,d){let p,y;for(let k=1;k<arguments.length;k++){y=arguments[k];for(p in y)l[p]=y[p];for(let L=0;L<I.length;L++)p=I[L],Object.prototype.hasOwnProperty.call(y,p)&&(l[p]=y[p])}}function C(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function R(l){a.setTimeout(()=>{throw l},0)}function T(){var l=X;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class de{constructor(){this.h=this.g=null}add(d,p){const y=pi.get();y.set(d,p),this.h?this.h.next=y:this.g=y,this.h=y}}var pi=new S(()=>new jo,l=>l.reset());class jo{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Un,G=!1,X=new de,te=()=>{const l=a.Promise.resolve(void 0);Un=()=>{l.then(Pe)}};var Pe=()=>{for(var l;l=T();){try{l.h.call(l.g)}catch(p){R(p)}var d=pi;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}G=!1};function me(){this.s=this.s,this.C=this.C}me.prototype.s=!1,me.prototype.ma=function(){this.s||(this.s=!0,this.N())},me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Be(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var Bn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function zn(l,d){if(Be.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(M){e:{try{N(d.nodeName);var k=!0;break e}catch{}k=!1}k||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:$n[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&zn.aa.h.call(this)}}P(zn,Be);var $n={2:"touch",3:"pen",4:"mouse"};zn.prototype.h=function(){zn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var qn="closure_listenable_"+(1e6*Math.random()|0),Sx=0;function Ax(l,d,p,y,k){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!y,this.ha=k,this.key=++Sx,this.da=this.fa=!1}function nu(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ru(l){this.src=l,this.g={},this.h=0}ru.prototype.add=function(l,d,p,y,k){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var $=oh(l,d,y,k);return-1<$?(d=l[$],p||(d.fa=!1)):(d=new Ax(d,this.src,L,!!y,k),d.fa=p,l.push(d)),d};function sh(l,d){var p=d.type;if(p in l.g){var y=l.g[p],k=Array.prototype.indexOf.call(y,d,void 0),L;(L=0<=k)&&Array.prototype.splice.call(y,k,1),L&&(nu(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function oh(l,d,p,y){for(var k=0;k<l.length;++k){var L=l[k];if(!L.da&&L.listener==d&&L.capture==!!p&&L.ha==y)return k}return-1}var ah="closure_lm_"+(1e6*Math.random()|0),lh={};function _y(l,d,p,y,k){if(Array.isArray(d)){for(var L=0;L<d.length;L++)_y(l,d[L],p,y,k);return null}return p=Iy(p),l&&l[qn]?l.K(d,p,c(y)?!!y.capture:!1,k):xx(l,d,p,!1,y,k)}function xx(l,d,p,y,k,L){if(!d)throw Error("Invalid event type");var $=c(k)?!!k.capture:!!k,ge=ch(l);if(ge||(l[ah]=ge=new ru(l)),p=ge.add(d,p,y,$,L),p.proxy)return p;if(y=Rx(),p.proxy=y,y.src=l,y.listener=p,l.addEventListener)Bn||(k=$),k===void 0&&(k=!1),l.addEventListener(d.toString(),y,k);else if(l.attachEvent)l.attachEvent(wy(d.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Rx(){function l(p){return d.call(l.src,l.listener,p)}const d=Px;return l}function vy(l,d,p,y,k){if(Array.isArray(d))for(var L=0;L<d.length;L++)vy(l,d[L],p,y,k);else y=c(y)?!!y.capture:!!y,p=Iy(p),l&&l[qn]?(l=l.i,d=String(d).toString(),d in l.g&&(L=l.g[d],p=oh(L,p,y,k),-1<p&&(nu(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete l.g[d],l.h--)))):l&&(l=ch(l))&&(d=l.g[d.toString()],l=-1,d&&(l=oh(d,p,y,k)),(p=-1<l?d[l]:null)&&uh(p))}function uh(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[qn])sh(d.i,l);else{var p=l.type,y=l.proxy;d.removeEventListener?d.removeEventListener(p,y,l.capture):d.detachEvent?d.detachEvent(wy(p),y):d.addListener&&d.removeListener&&d.removeListener(y),(p=ch(d))?(sh(p,l),p.h==0&&(p.src=null,d[ah]=null)):nu(l)}}}function wy(l){return l in lh?lh[l]:lh[l]="on"+l}function Px(l,d){if(l.da)l=!0;else{d=new zn(d,this);var p=l.listener,y=l.ha||l.src;l.fa&&uh(l),l=p.call(y,d)}return l}function ch(l){return l=l[ah],l instanceof ru?l:null}var dh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Iy(l){return typeof l=="function"?l:(l[dh]||(l[dh]=function(d){return l.handleEvent(d)}),l[dh])}function ht(){me.call(this),this.i=new ru(this),this.M=this,this.F=null}P(ht,me),ht.prototype[qn]=!0,ht.prototype.removeEventListener=function(l,d,p,y){vy(this,l,d,p,y)};function It(l,d){var p,y=l.F;if(y)for(p=[];y;y=y.F)p.push(y);if(l=l.M,y=d.type||d,typeof d=="string")d=new Be(d,l);else if(d instanceof Be)d.target=d.target||l;else{var k=d;d=new Be(y,l),x(d,k)}if(k=!0,p)for(var L=p.length-1;0<=L;L--){var $=d.g=p[L];k=iu($,y,!0,d)&&k}if($=d.g=l,k=iu($,y,!0,d)&&k,k=iu($,y,!1,d)&&k,p)for(L=0;L<p.length;L++)$=d.g=p[L],k=iu($,y,!1,d)&&k}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],y=0;y<p.length;y++)nu(p[y]);delete l.g[d],l.h--}}this.F=null},ht.prototype.K=function(l,d,p,y){return this.i.add(String(l),d,!1,p,y)},ht.prototype.L=function(l,d,p,y){return this.i.add(String(l),d,!0,p,y)};function iu(l,d,p,y){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var k=!0,L=0;L<d.length;++L){var $=d[L];if($&&!$.da&&$.capture==p){var ge=$.listener,it=$.ha||$.src;$.fa&&sh(l.i,$),k=ge.call(it,y)!==!1&&k}}return k&&!y.defaultPrevented}function Ey(l,d,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function Ty(l){l.g=Ey(()=>{l.g=null,l.i&&(l.i=!1,Ty(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class Cx extends me{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Ty(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Uo(l){me.call(this),this.h=l,this.g={}}P(Uo,me);var Sy=[];function Ay(l){F(l.g,function(d,p){this.g.hasOwnProperty(p)&&uh(d)},l),l.g={}}Uo.prototype.N=function(){Uo.aa.N.call(this),Ay(this)},Uo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hh=a.JSON.stringify,bx=a.JSON.parse,kx=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function fh(){}fh.prototype.h=null;function xy(l){return l.h||(l.h=l.i())}function Ry(){}var Bo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ph(){Be.call(this,"d")}P(ph,Be);function mh(){Be.call(this,"c")}P(mh,Be);var mi={},Py=null;function su(){return Py=Py||new ht}mi.La="serverreachability";function Cy(l){Be.call(this,mi.La,l)}P(Cy,Be);function zo(l){const d=su();It(d,new Cy(d))}mi.STAT_EVENT="statevent";function by(l,d){Be.call(this,mi.STAT_EVENT,l),this.stat=d}P(by,Be);function Et(l){const d=su();It(d,new by(d,l))}mi.Ma="timingevent";function ky(l,d){Be.call(this,mi.Ma,l),this.size=d}P(ky,Be);function $o(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function qo(){this.g=!0}qo.prototype.xa=function(){this.g=!1};function Nx(l,d,p,y,k,L){l.info(function(){if(l.g)if(L)for(var $="",ge=L.split("&"),it=0;it<ge.length;it++){var ue=ge[it].split("=");if(1<ue.length){var ft=ue[0];ue=ue[1];var pt=ft.split("_");$=2<=pt.length&&pt[1]=="type"?$+(ft+"="+ue+"&"):$+(ft+"=redacted&")}}else $=null;else $=L;return"XMLHTTP REQ ("+y+") [attempt "+k+"]: "+d+`
`+p+`
`+$})}function Dx(l,d,p,y,k,L,$){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+k+"]: "+d+`
`+p+`
`+L+" "+$})}function fs(l,d,p,y){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+Ox(l,p)+(y?" "+y:"")})}function Vx(l,d){l.info(function(){return"TIMEOUT: "+d})}qo.prototype.info=function(){};function Ox(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var y=p[l];if(!(2>y.length)){var k=y[1];if(Array.isArray(k)&&!(1>k.length)){var L=k[0];if(L!="noop"&&L!="stop"&&L!="close")for(var $=1;$<k.length;$++)k[$]=""}}}}return hh(p)}catch{return d}}var ou={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ny={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gh;function au(){}P(au,fh),au.prototype.g=function(){return new XMLHttpRequest},au.prototype.i=function(){return{}},gh=new au;function yr(l,d,p,y){this.j=l,this.i=d,this.l=p,this.R=y||1,this.U=new Uo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Dy}function Dy(){this.i=null,this.g="",this.h=!1}var Vy={},yh={};function _h(l,d,p){l.L=1,l.v=du(Wn(d)),l.m=p,l.P=!0,Oy(l,null)}function Oy(l,d){l.F=Date.now(),lu(l),l.A=Wn(l.v);var p=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),Qy(p.i,"t",y),l.C=0,p=l.j.J,l.h=new Dy,l.g=f_(l.j,p?d:null,!l.m),0<l.O&&(l.M=new Cx(m(l.Y,l,l.g),l.O)),d=l.U,p=l.g,y=l.ca;var k="readystatechange";Array.isArray(k)||(k&&(Sy[0]=k.toString()),k=Sy);for(var L=0;L<k.length;L++){var $=_y(p,k[L],y||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),zo(),Nx(l.i,l.u,l.A,l.l,l.R,l.m)}yr.prototype.ca=function(l){l=l.target;const d=this.M;d&&Gn(l)==3?d.j():this.Y(l)},yr.prototype.Y=function(l){try{if(l==this.g)e:{const pt=Gn(this.g);var d=this.g.Ba();const gs=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||n_(this.g)))){this.J||pt!=4||d==7||(d==8||0>=gs?zo(3):zo(2)),vh(this);var p=this.g.Z();this.X=p;t:if(Ly(this)){var y=n_(this.g);l="";var k=y.length,L=Gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gi(this),Wo(this);var $="";break t}this.h.i=new a.TextDecoder}for(d=0;d<k;d++)this.h.h=!0,l+=this.h.i.decode(y[d],{stream:!(L&&d==k-1)});y.length=0,this.h.g+=l,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=p==200,Dx(this.i,this.u,this.A,this.l,this.R,pt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ge,it=this.g;if((ge=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ge)){var ue=ge;break t}}ue=null}if(p=ue)fs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wh(this,p);else{this.o=!1,this.s=3,Et(12),gi(this),Wo(this);break e}}if(this.P){p=!0;let cn;for(;!this.J&&this.C<$.length;)if(cn=Lx(this,$),cn==yh){pt==4&&(this.s=4,Et(14),p=!1),fs(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==Vy){this.s=4,Et(15),fs(this.i,this.l,$,"[Invalid Chunk]"),p=!1;break}else fs(this.i,this.l,cn,null),wh(this,cn);if(Ly(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||$.length!=0||this.h.h||(this.s=1,Et(16),p=!1),this.o=this.o&&p,!p)fs(this.i,this.l,$,"[Invalid Chunked Response]"),gi(this),Wo(this);else if(0<$.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),xh(ft),ft.M=!0,Et(11))}}else fs(this.i,this.l,$,null),wh(this,$);pt==4&&gi(this),this.o&&!this.J&&(pt==4?u_(this.j,this):(this.o=!1,lu(this)))}else Zx(this.g),p==400&&0<$.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),gi(this),Wo(this)}}}catch{}finally{}};function Ly(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Lx(l,d){var p=l.C,y=d.indexOf(`
`,p);return y==-1?yh:(p=Number(d.substring(p,y)),isNaN(p)?Vy:(y+=1,y+p>d.length?yh:(d=d.slice(y,y+p),l.C=y+p,d)))}yr.prototype.cancel=function(){this.J=!0,gi(this)};function lu(l){l.S=Date.now()+l.I,My(l,l.I)}function My(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=$o(m(l.ba,l),d)}function vh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}yr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Vx(this.i,this.A),this.L!=2&&(zo(),Et(17)),gi(this),this.s=2,Wo(this)):My(this,this.S-l)};function Wo(l){l.j.G==0||l.J||u_(l.j,l)}function gi(l){vh(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Ay(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function wh(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||Ih(p.h,l))){if(!l.K&&Ih(p.h,l)&&p.G==3){try{var y=p.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var k=y;if(k[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)yu(p),mu(p);else break e;Ah(p),Et(18)}}else p.za=k[1],0<p.za-p.T&&37500>k[2]&&p.F&&p.v==0&&!p.C&&(p.C=$o(m(p.Za,p),6e3));if(1>=Uy(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else _i(p,11)}else if((l.K||p.g==l)&&yu(p),!w(d))for(k=p.Da.g.parse(d),d=0;d<k.length;d++){let ue=k[d];if(p.T=ue[0],ue=ue[1],p.G==2)if(ue[0]=="c"){p.K=ue[1],p.ia=ue[2];const ft=ue[3];ft!=null&&(p.la=ft,p.j.info("VER="+p.la));const pt=ue[4];pt!=null&&(p.Aa=pt,p.j.info("SVER="+p.Aa));const gs=ue[5];gs!=null&&typeof gs=="number"&&0<gs&&(y=1.5*gs,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const cn=l.g;if(cn){const vu=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vu){var L=y.h;L.g||vu.indexOf("spdy")==-1&&vu.indexOf("quic")==-1&&vu.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Eh(L,L.h),L.h=null))}if(y.D){const Rh=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;Rh&&(y.ya=Rh,ve(y.I,y.D,Rh))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var $=l;if(y.qa=h_(y,y.J?y.ia:null,y.W),$.K){By(y.h,$);var ge=$,it=y.L;it&&(ge.I=it),ge.B&&(vh(ge),lu(ge)),y.g=$}else a_(y);0<p.i.length&&gu(p)}else ue[0]!="stop"&&ue[0]!="close"||_i(p,7);else p.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?_i(p,7):Sh(p):ue[0]!="noop"&&p.l&&p.l.ta(ue),p.v=0)}}zo(4)}catch{}}var Mx=class{constructor(l,d){this.g=l,this.map=d}};function Fy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function jy(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Uy(l){return l.h?1:l.g?l.g.size:0}function Ih(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Eh(l,d){l.g?l.g.add(d):l.h=d}function By(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Fy.prototype.cancel=function(){if(this.i=zy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function zy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return b(l.i)}function Fx(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],p=l.length,y=0;y<p;y++)d.push(l[y]);return d}d=[],p=0;for(y in l)d[p++]=l[y];return d}function jx(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const y in l)d[p++]=y;return d}}}function $y(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=jx(l),y=Fx(l),k=y.length,L=0;L<k;L++)d.call(void 0,y[L],p&&p[L],l)}var qy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ux(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var y=l[p].indexOf("="),k=null;if(0<=y){var L=l[p].substring(0,y);k=l[p].substring(y+1)}else L=l[p];d(L,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function yi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof yi){this.h=l.h,uu(this,l.j),this.o=l.o,this.g=l.g,cu(this,l.s),this.l=l.l;var d=l.i,p=new Ho;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Wy(this,p),this.m=l.m}else l&&(d=String(l).match(qy))?(this.h=!1,uu(this,d[1]||"",!0),this.o=Go(d[2]||""),this.g=Go(d[3]||"",!0),cu(this,d[4]),this.l=Go(d[5]||"",!0),Wy(this,d[6]||"",!0),this.m=Go(d[7]||"")):(this.h=!1,this.i=new Ho(null,this.h))}yi.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Ko(d,Gy,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Ko(d,Gy,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Ko(p,p.charAt(0)=="/"?$x:zx,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Ko(p,Wx)),l.join("")};function Wn(l){return new yi(l)}function uu(l,d,p){l.j=p?Go(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function cu(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Wy(l,d,p){d instanceof Ho?(l.i=d,Gx(l.i,l.h)):(p||(d=Ko(d,qx)),l.i=new Ho(d,l.h))}function ve(l,d,p){l.i.set(d,p)}function du(l){return ve(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Go(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ko(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,Bx),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Bx(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Gy=/[#\/\?@]/g,zx=/[#\?:]/g,$x=/[#\?]/g,qx=/[#\?@]/g,Wx=/#/g;function Ho(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function _r(l){l.g||(l.g=new Map,l.h=0,l.i&&Ux(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}n=Ho.prototype,n.add=function(l,d){_r(this),this.i=null,l=ps(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function Ky(l,d){_r(l),d=ps(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Hy(l,d){return _r(l),d=ps(l,d),l.g.has(d)}n.forEach=function(l,d){_r(this),this.g.forEach(function(p,y){p.forEach(function(k){l.call(d,k,y,this)},this)},this)},n.na=function(){_r(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let y=0;y<d.length;y++){const k=l[y];for(let L=0;L<k.length;L++)p.push(d[y])}return p},n.V=function(l){_r(this);let d=[];if(typeof l=="string")Hy(this,l)&&(d=d.concat(this.g.get(ps(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},n.set=function(l,d){return _r(this),this.i=null,l=ps(this,l),Hy(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},n.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Qy(l,d,p){Ky(l,d),0<p.length&&(l.i=null,l.g.set(ps(l,d),b(p)),l.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var y=d[p];const L=encodeURIComponent(String(y)),$=this.V(y);for(y=0;y<$.length;y++){var k=L;$[y]!==""&&(k+="="+encodeURIComponent(String($[y]))),l.push(k)}}return this.i=l.join("&")};function ps(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function Gx(l,d){d&&!l.j&&(_r(l),l.i=null,l.g.forEach(function(p,y){var k=y.toLowerCase();y!=k&&(Ky(this,y),Qy(this,k,p))},l)),l.j=d}function Kx(l,d){const p=new qo;if(a.Image){const y=new Image;y.onload=v(vr,p,"TestLoadImage: loaded",!0,d,y),y.onerror=v(vr,p,"TestLoadImage: error",!1,d,y),y.onabort=v(vr,p,"TestLoadImage: abort",!1,d,y),y.ontimeout=v(vr,p,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else d(!1)}function Hx(l,d){const p=new qo,y=new AbortController,k=setTimeout(()=>{y.abort(),vr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:y.signal}).then(L=>{clearTimeout(k),L.ok?vr(p,"TestPingServer: ok",!0,d):vr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(k),vr(p,"TestPingServer: error",!1,d)})}function vr(l,d,p,y,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),y(p)}catch{}}function Qx(){this.g=new kx}function Yx(l,d,p){const y=p||"";try{$y(l,function(k,L){let $=k;c(k)&&($=hh(k)),d.push(y+L+"="+encodeURIComponent($))})}catch(k){throw d.push(y+"type="+encodeURIComponent("_badmap")),k}}function hu(l){this.l=l.Ub||null,this.j=l.eb||!1}P(hu,fh),hu.prototype.g=function(){return new fu(this.l,this.j)},hu.prototype.i=function(l){return function(){return l}}({});function fu(l,d){ht.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(fu,ht),n=fu.prototype,n.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Yo(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qo(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Yo(this)),this.g&&(this.readyState=3,Yo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Qo(this):Yo(this),this.readyState==3&&Yy(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,Qo(this))},n.Qa=function(l){this.g&&(this.response=l,Qo(this))},n.ga=function(){this.g&&Qo(this)};function Qo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Yo(l)}n.setRequestHeader=function(l,d){this.u.append(l,d)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function Yo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(fu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Jy(l){let d="";return F(l,function(p,y){d+=y,d+=":",d+=p,d+=`\r
`}),d}function Th(l,d,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=Jy(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):ve(l,d,p))}function Ve(l){ht.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ve,ht);var Jx=/^https?$/i,Xx=["POST","PUT"];n=Ve.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,d,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gh.g(),this.v=this.o?xy(this.o):xy(gh),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(L){Xy(this,L);return}if(l=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var k in y)p.set(k,y[k]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())p.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),k=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Xx,d,void 0))||y||k||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of p)this.g.setRequestHeader(L,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{t_(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){Xy(this,L)}};function Xy(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,Zy(l),pu(l)}function Zy(l){l.A||(l.A=!0,It(l,"complete"),It(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,It(this,"complete"),It(this,"abort"),pu(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pu(this,!0)),Ve.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?e_(this):this.bb())},n.bb=function(){e_(this)};function e_(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Gn(l)!=4||l.Z()!=2)){if(l.u&&Gn(l)==4)Ey(l.Ea,0,l);else if(It(l,"readystatechange"),Gn(l)==4){l.h=!1;try{const $=l.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var y;if(y=$===0){var k=String(l.D).match(qy)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),y=!Jx.test(k?k.toLowerCase():"")}p=y}if(p)It(l,"complete"),It(l,"success");else{l.m=6;try{var L=2<Gn(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",Zy(l)}}finally{pu(l)}}}}function pu(l,d){if(l.g){t_(l);const p=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||It(l,"ready");try{p.onreadystatechange=y}catch{}}}function t_(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function Gn(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<Gn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),bx(d)}};function n_(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Zx(l){const d={};l=(l.g&&2<=Gn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(w(l[y]))continue;var p=C(l[y]);const k=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=d[k]||[];d[k]=L,L.push(p)}E(d,function(y){return y.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jo(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function r_(l){this.Aa=0,this.i=[],this.j=new qo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jo("baseRetryDelayMs",5e3,l),this.cb=Jo("retryDelaySeedMs",1e4,l),this.Wa=Jo("forwardChannelMaxRetries",2,l),this.wa=Jo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Fy(l&&l.concurrentRequestLimit),this.Da=new Qx,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=r_.prototype,n.la=8,n.G=1,n.connect=function(l,d,p,y){Et(0),this.W=l,this.H=d||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=h_(this,null,this.W),gu(this)};function Sh(l){if(i_(l),l.G==3){var d=l.U++,p=Wn(l.I);if(ve(p,"SID",l.K),ve(p,"RID",d),ve(p,"TYPE","terminate"),Xo(l,p),d=new yr(l,l.j,d),d.L=2,d.v=du(Wn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=f_(d.j,null),d.g.ea(d.v)),d.F=Date.now(),lu(d)}d_(l)}function mu(l){l.g&&(xh(l),l.g.cancel(),l.g=null)}function i_(l){mu(l),l.u&&(a.clearTimeout(l.u),l.u=null),yu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function gu(l){if(!jy(l.h)&&!l.s){l.s=!0;var d=l.Ga;Un||te(),G||(Un(),G=!0),X.add(d,l),l.B=0}}function eR(l,d){return Uy(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=$o(m(l.Ga,l,d),c_(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const k=new yr(this,this.j,l);let L=this.o;if(this.S&&(L?(L=_(L),x(L,this.S)):L=this.S),this.m!==null||this.O||(k.H=L,L=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=o_(this,k,d),p=Wn(this.I),ve(p,"RID",l),ve(p,"CVER",22),this.D&&ve(p,"X-HTTP-Session-Id",this.D),Xo(this,p),L&&(this.O?d="headers="+encodeURIComponent(String(Jy(L)))+"&"+d:this.m&&Th(p,this.m,L)),Eh(this.h,k),this.Ua&&ve(p,"TYPE","init"),this.P?(ve(p,"$req",d),ve(p,"SID","null"),k.T=!0,_h(k,p,null)):_h(k,p,d),this.G=2}}else this.G==3&&(l?s_(this,l):this.i.length==0||jy(this.h)||s_(this))};function s_(l,d){var p;d?p=d.l:p=l.U++;const y=Wn(l.I);ve(y,"SID",l.K),ve(y,"RID",p),ve(y,"AID",l.T),Xo(l,y),l.m&&l.o&&Th(y,l.m,l.o),p=new yr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=o_(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Eh(l.h,p),_h(p,y,d)}function Xo(l,d){l.H&&F(l.H,function(p,y){ve(d,y,p)}),l.l&&$y({},function(p,y){ve(d,y,p)})}function o_(l,d,p){p=Math.min(l.i.length,p);var y=l.l?m(l.l.Na,l.l,l):null;e:{var k=l.i;let L=-1;for(;;){const $=["count="+p];L==-1?0<p?(L=k[0].g,$.push("ofs="+L)):L=0:$.push("ofs="+L);let ge=!0;for(let it=0;it<p;it++){let ue=k[it].g;const ft=k[it].map;if(ue-=L,0>ue)L=Math.max(0,k[it].g-100),ge=!1;else try{Yx(ft,$,"req"+ue+"_")}catch{y&&y(ft)}}if(ge){y=$.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,y}function a_(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;Un||te(),G||(Un(),G=!0),X.add(d,l),l.v=0}}function Ah(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=$o(m(l.Fa,l),c_(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,l_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=$o(m(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),mu(this),l_(this))};function xh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function l_(l){l.g=new yr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Wn(l.qa);ve(d,"RID","rpc"),ve(d,"SID",l.K),ve(d,"AID",l.T),ve(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&ve(d,"TO",l.ja),ve(d,"TYPE","xmlhttp"),Xo(l,d),l.m&&l.o&&Th(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=du(Wn(d)),p.m=null,p.P=!0,Oy(p,l)}n.Za=function(){this.C!=null&&(this.C=null,mu(this),Ah(this),Et(19))};function yu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function u_(l,d){var p=null;if(l.g==d){yu(l),xh(l),l.g=null;var y=2}else if(Ih(l.h,d))p=d.D,By(l.h,d),y=1;else return;if(l.G!=0){if(d.o)if(y==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var k=l.B;y=su(),It(y,new ky(y,p)),gu(l)}else a_(l);else if(k=d.s,k==3||k==0&&0<d.X||!(y==1&&eR(l,d)||y==2&&Ah(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),k){case 1:_i(l,5);break;case 4:_i(l,10);break;case 3:_i(l,6);break;default:_i(l,2)}}}function c_(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function _i(l,d){if(l.j.info("Error code "+d),d==2){var p=m(l.fb,l),y=l.Xa;const k=!y;y=new yi(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||uu(y,"https"),du(y),k?Kx(y.toString(),p):Hx(y.toString(),p)}else Et(2);l.G=0,l.l&&l.l.sa(d),d_(l),i_(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function d_(l){if(l.G=0,l.ka=[],l.l){const d=zy(l.h);(d.length!=0||l.i.length!=0)&&(V(l.ka,d),V(l.ka,l.i),l.h.i.length=0,b(l.i),l.i.length=0),l.l.ra()}}function h_(l,d,p){var y=p instanceof yi?Wn(p):new yi(p);if(y.g!="")d&&(y.g=d+"."+y.g),cu(y,y.s);else{var k=a.location;y=k.protocol,d=d?d+"."+k.hostname:k.hostname,k=+k.port;var L=new yi(null);y&&uu(L,y),d&&(L.g=d),k&&cu(L,k),p&&(L.l=p),y=L}return p=l.D,d=l.ya,p&&d&&ve(y,p,d),ve(y,"VER",l.la),Xo(l,y),y}function f_(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Ve(new hu({eb:p})):new Ve(l.pa),d.Ha(l.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function p_(){}n=p_.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function _u(){}_u.prototype.g=function(l,d){return new $t(l,d)};function $t(l,d){ht.call(this),this.g=new r_(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!w(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!w(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new ms(this)}P($t,ht),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){Sh(this.g)},$t.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=hh(l),l=p);d.i.push(new Mx(d.Ya++,l)),d.G==3&&gu(d)},$t.prototype.N=function(){this.g.l=null,delete this.j,Sh(this.g),delete this.g,$t.aa.N.call(this)};function m_(l){ph.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}P(m_,ph);function g_(){mh.call(this),this.status=1}P(g_,mh);function ms(l){this.g=l}P(ms,p_),ms.prototype.ua=function(){It(this.g,"a")},ms.prototype.ta=function(l){It(this.g,new m_(l))},ms.prototype.sa=function(l){It(this.g,new g_)},ms.prototype.ra=function(){It(this.g,"b")},_u.prototype.createWebChannel=_u.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,nS=function(){return new _u},tS=function(){return su()},eS=mi,Ep={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ou.NO_ERROR=0,ou.TIMEOUT=8,ou.HTTP_ERROR=6,oc=ou,Ny.COMPLETE="complete",ZT=Ny,Ry.EventType=Bo,Bo.OPEN="a",Bo.CLOSE="b",Bo.ERROR="c",Bo.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Ea=Ry,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,XT=Ve}).apply(typeof Fu<"u"?Fu:typeof self<"u"?self:typeof window<"u"?window:{});const iw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new Sd("@firebase/firestore");function Ts(){return Jr.logLevel}function vV(n){Jr.setLogLevel(n)}function U(n,...e){if(Jr.logLevel<=re.DEBUG){const t=e.map(mg);Jr.debug(`Firestore (${ko}): ${n}`,...t)}}function $e(n,...e){if(Jr.logLevel<=re.ERROR){const t=e.map(mg);Jr.error(`Firestore (${ko}): ${n}`,...t)}}function Mn(n,...e){if(Jr.logLevel<=re.WARN){const t=e.map(mg);Jr.warn(`Firestore (${ko}): ${n}`,...t)}}function mg(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(n="Unexpected state"){const e=`FIRESTORE (${ko}) INTERNAL ASSERTION FAILED: `+n;throw $e(e),new Error(e)}function Q(n,e){n||K()}function wV(n,e){n||K()}function W(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Rt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(tt.UNAUTHENTICATED))}shutdown(){}}class EV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class TV{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new ut;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ut,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ut)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new rS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string"),new tt(e)}}class SV{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class AV{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new SV(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RV{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Q(this.o===void 0);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Q(typeof t.token=="string"),this.R=t.token,new xV(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PV(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=PV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(n,e){return n<e?-1:n>e?1:0}function co(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function sS(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new j(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Re(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Re(0,0))}static max(){return new Y(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,t,r){t===void 0?t=0:t>e.length&&K(),r===void 0?r=e.length-t:r>e.length-t&&K(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return gl.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof gl?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class se extends gl{construct(e,t,r){return new se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new se(t)}static emptyPath(){return new se([])}}const CV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends gl{construct(e,t,r){return new Ae(e,t,r)}static isValidIdentifier(e){return CV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ae(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new j(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new j(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new j(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(t)}static emptyPath(){return new Ae([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(se.fromString(e))}static fromName(e){return new q(se.fromString(e).popFirst(5))}static empty(){return new q(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new se(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Tp(n){return n.fields.find(e=>e.kind===2)}function Ti(n){return n.fields.filter(e=>e.kind!==2)}Kc.UNKNOWN_ID=-1;class ac{constructor(e,t){this.fieldPath=e,this.kind=t}}class yl{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new yl(0,Jt.min())}}function oS(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Re(t+1,0):new Re(t,r));return new Jt(i,q.empty(),e)}function aS(n){return new Jt(n.readTime,n.key,-1)}class Jt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Jt(Y.min(),q.empty(),-1)}static max(){return new Jt(Y.max(),q.empty(),-1)}}function gg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:Z(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==lS)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(i=>i?D.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new D((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;t(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,t){return new D((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new ut,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Fa(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=yg(r.target.error);this.V.reject(new Fa(e,i))}}static open(e,t,r,i){try{return new Ld(t,e.transaction(i,r))}catch(s){throw new Fa(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(U("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new kV(t)}}class Dn{constructor(e,t,r){this.name=e,this.version=t,this.p=r,Dn.S(De())===12.2&&$e("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return U("SimpleDb","Removing database:",e),Si(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!al())return!1;if(Dn.v())return!0;const e=De(),t=Dn.S(e),r=0<t&&t<10,i=cS(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(U("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Fa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new j(O.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new j(O.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Fa(e,o))},i.onupgradeneeded=s=>{U("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{U("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Ld.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),D.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(U("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function cS(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class bV{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Si(this.B.delete())}}class Fa extends j{constructor(e,t){super(O.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function di(n){return n.name==="IndexedDbTransactionError"}class kV{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(U("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(U("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Si(r)}add(e){return U("SimpleDb","ADD",this.store.name,e,e),Si(this.store.add(e))}get(e){return Si(this.store.get(e)).next(t=>(t===void 0&&(t=null),U("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return U("SimpleDb","DELETE",this.store.name,e),Si(this.store.delete(e))}count(){return U("SimpleDb","COUNT",this.store.name),Si(this.store.count())}U(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new D((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,u)=>{o.push(u)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new D((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,t){U("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Y(e){const t=this.cursor({});return new D((r,i)=>{t.onerror=s=>{const o=yg(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new D((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new bV(a),c=t(a.primaryKey,a.value,u);if(c instanceof D){const h=c.catch(f=>(u.done(),D.reject(f)));r.push(h)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>D.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Si(n){return new D((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=yg(r.target.error);t(i)}})}let sw=!1;function yg(n){const e=Dn.S(De());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new j("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return sw||(sw=!0,setTimeout(()=>{throw r},0)),r}}return n}class NV{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){U("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{U("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){di(t)?U("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await ci(t)}await this.X(6e4)})}}class DV{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let i=t,s=!0;return D.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(U("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=aS(s);gg(o,r)>0&&(r=o)}),new Jt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Mt.oe=-1;function $l(n){return n==null}function _l(n){return n===0&&1/n==-1/0}function dS(n){return typeof n=="number"&&Number.isInteger(n)&&!_l(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ow(e)),e=VV(n.get(t),e);return ow(e)}function VV(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function ow(n){return n+""}function Pn(n){const e=n.length;if(Q(e>=2),e===2)return Q(n.charAt(0)===""&&n.charAt(1)===""),se.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&K(),n.charAt(o+1)){case"":const a=n.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:K()}s=o+2}return new se(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(n,e){return[n,Pt(e)]}function hS(n,e,t){return[n,Pt(e),t]}const OV={},LV=["prefixPath","collectionGroup","readTime","documentId"],MV=["prefixPath","collectionGroup","documentId"],FV=["collectionGroup","readTime","prefixPath","documentId"],jV=["canonicalId","targetId"],UV=["targetId","path"],BV=["path","targetId"],zV=["collectionId","parent"],$V=["indexId","uid"],qV=["uid","sequenceNumber"],WV=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],GV=["indexId","uid","orderedDocumentKey"],KV=["userId","collectionPath","documentId"],HV=["userId","collectionPath","largestBatchId"],QV=["userId","collectionGroup","largestBatchId"],fS=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],YV=[...fS,"documentOverlays"],pS=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],mS=pS,_g=[...mS,"indexConfiguration","indexState","indexEntries"],JV=_g,XV=[..._g,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp extends uS{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Xe(n,e){const t=W(n);return Dn.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function as(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function gS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,t){this.comparator=e,this.root=t||ot.EMPTY}insert(e,t){return new _e(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ju(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ju(this.root,e,this.comparator,!1)}getReverseIterator(){return new ju(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ju(this.root,e,this.comparator,!0)}}class ju{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??ot.RED,this.left=i??ot.EMPTY,this.right=s??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ot(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ot(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new uw(this.data.getIterator())}getIteratorFrom(e){return new uw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pe(this.comparator);return t.data=e,t}}class uw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function vs(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new Ft([])}unionWith(e){let t=new pe(Ae.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ft(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return co(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZV(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new yS("Invalid base64 string: "+s):s}}(e);return new Fe(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Fe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const e2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(n){if(Q(!!n),typeof n=="string"){let e=0;const t=e2.exec(n);if(Q(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Te(n.seconds),nanos:Te(n.nanos)}}function Te(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xr(n){return typeof n=="string"?Fe.fromBase64String(n):Fe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function vg(n){const e=n.mapValue.fields.__previous_value__;return Md(e)?vg(e):e}function vl(n){const e=ur(n.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e,t,r,i,s,o,a,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Zr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Zr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Zr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},uc={nullValue:"NULL_VALUE"};function Hi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Md(n)?4:_S(n)?9007199254740991:Fd(n)?10:11:K()}function Fn(n,e){if(n===e)return!0;const t=Hi(n);if(t!==Hi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return vl(n).isEqual(vl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ur(i.timestampValue),a=ur(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Xr(i.bytesValue).isEqual(Xr(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Te(i.geoPointValue.latitude)===Te(s.geoPointValue.latitude)&&Te(i.geoPointValue.longitude)===Te(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Te(i.integerValue)===Te(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Te(i.doubleValue),a=Te(s.doubleValue);return o===a?_l(o)===_l(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return co(n.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(lw(o)!==lw(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Fn(o[u],a[u])))return!1;return!0}(n,e);default:return K()}}function wl(n,e){return(n.values||[]).find(t=>Fn(t,e))!==void 0}function ei(n,e){if(n===e)return 0;const t=Hi(n),r=Hi(e);if(t!==r)return Z(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Te(s.integerValue||s.doubleValue),u=Te(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,e);case 3:return cw(n.timestampValue,e.timestampValue);case 4:return cw(vl(n),vl(e));case 5:return Z(n.stringValue,e.stringValue);case 6:return function(s,o){const a=Xr(s),u=Xr(o);return a.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=Z(a[c],u[c]);if(h!==0)return h}return Z(a.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Z(Te(s.latitude),Te(o.latitude));return a!==0?a:Z(Te(s.longitude),Te(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return dw(n.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const f=s.fields||{},m=o.fields||{},v=(a=f.value)===null||a===void 0?void 0:a.arrayValue,P=(u=m.value)===null||u===void 0?void 0:u.arrayValue,b=Z(((c=v==null?void 0:v.values)===null||c===void 0?void 0:c.length)||0,((h=P==null?void 0:P.values)===null||h===void 0?void 0:h.length)||0);return b!==0?b:dw(v,P)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===Or.mapValue&&o===Or.mapValue)return 0;if(s===Or.mapValue)return 1;if(o===Or.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const m=Z(u[f],h[f]);if(m!==0)return m;const v=ei(a[u[f]],c[h[f]]);if(v!==0)return v}return Z(u.length,h.length)}(n.mapValue,e.mapValue);default:throw K()}}function cw(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Z(n,e);const t=ur(n),r=ur(e),i=Z(t.seconds,r.seconds);return i!==0?i:Z(t.nanos,r.nanos)}function dw(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=ei(t[i],r[i]);if(s)return s}return Z(t.length,r.length)}function ho(n){return Ap(n)}function Ap(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=ur(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Xr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Ap(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ap(t.fields[o])}`;return i+"}"}(n.mapValue):K()}function Qi(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function xp(n){return!!n&&"integerValue"in n}function Il(n){return!!n&&"arrayValue"in n}function hw(n){return!!n&&"nullValue"in n}function fw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function cc(n){return!!n&&"mapValue"in n}function Fd(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ja(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return as(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ja(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ja(n.arrayValue.values[t]);return e}return Object.assign({},n)}function _S(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const vS={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function n2(n){return"nullValue"in n?uc:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Qi(Zr.empty(),q.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Fd(n)?vS:{mapValue:{}}:K()}function r2(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Qi(Zr.empty(),q.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?vS:"mapValue"in n?Fd(n)?{mapValue:{}}:Or:K()}function pw(n,e){const t=ei(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function mw(n,e){const t=ei(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.value=e}static empty(){return new at({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!cc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ja(t)}setAll(e){let t=Ae.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=ja(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());cc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];cc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){as(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new at(ja(this.value))}}function wS(n){const e=[];return as(n.fields,(t,r)=>{const i=new Ae([t]);if(cc(r)){const s=wS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ie(e,0,Y.min(),Y.min(),Y.min(),at.empty(),0)}static newFoundDocument(e,t,r,i){return new Ie(e,1,t,Y.min(),r,i,0)}static newNoDocument(e,t){return new Ie(e,2,t,Y.min(),Y.min(),at.empty(),0)}static newUnknownDocument(e,t){return new Ie(e,3,t,Y.min(),Y.min(),at.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t){this.position=e,this.inclusive=t}}function gw(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),t.key):r=ei(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function yw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Fn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t="asc"){this.field=e,this.dir=t}}function i2(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{}class oe extends IS{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new s2(e,t,r):t==="array-contains"?new l2(e,r):t==="in"?new RS(e,r):t==="not-in"?new u2(e,r):t==="array-contains-any"?new c2(e,r):new oe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new o2(e,r):new a2(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ei(t,this.value)):t!==null&&Hi(this.value)===Hi(t)&&this.matchesComparison(ei(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class he extends IS{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new he(e,t)}matches(e){return fo(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function fo(n){return n.op==="and"}function Rp(n){return n.op==="or"}function wg(n){return ES(n)&&fo(n)}function ES(n){for(const e of n.filters)if(e instanceof he)return!1;return!0}function Pp(n){if(n instanceof oe)return n.field.canonicalString()+n.op.toString()+ho(n.value);if(wg(n))return n.filters.map(e=>Pp(e)).join(",");{const e=n.filters.map(t=>Pp(t)).join(",");return`${n.op}(${e})`}}function TS(n,e){return n instanceof oe?function(r,i){return i instanceof oe&&r.op===i.op&&r.field.isEqual(i.field)&&Fn(r.value,i.value)}(n,e):n instanceof he?function(r,i){return i instanceof he&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&TS(o,i.filters[a]),!0):!1}(n,e):void K()}function SS(n,e){const t=n.filters.concat(e);return he.create(t,n.op)}function AS(n){return n instanceof oe?function(t){return`${t.field.canonicalString()} ${t.op} ${ho(t.value)}`}(n):n instanceof he?function(t){return t.op.toString()+" {"+t.getFilters().map(AS).join(" ,")+"}"}(n):"Filter"}class s2 extends oe{constructor(e,t,r){super(e,t,r),this.key=q.fromName(r.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class o2 extends oe{constructor(e,t){super(e,"in",t),this.keys=xS("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class a2 extends oe{constructor(e,t){super(e,"not-in",t),this.keys=xS("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function xS(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>q.fromName(r.referenceValue))}class l2 extends oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Il(t)&&wl(t.arrayValue,this.value)}}class RS extends oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&wl(this.value.arrayValue,t)}}class u2 extends oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(wl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!wl(this.value.arrayValue,t)}}class c2 extends oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Il(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>wl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Cp(n,e=null,t=[],r=[],i=null,s=null,o=null){return new d2(n,e,t,r,i,s,o)}function Yi(n){const e=W(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Pp(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),$l(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ho(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ho(r)).join(",")),e.ue=t}return e.ue}function ql(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!i2(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!TS(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!yw(n.startAt,e.startAt)&&yw(n.endAt,e.endAt)}function Hc(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Qc(n,e){return n.filters.filter(t=>t instanceof oe&&t.field.isEqual(e))}function _w(n,e,t){let r=uc,i=!0;for(const s of Qc(n,e)){let o=uc,a=!0;switch(s.op){case"<":case"<=":o=n2(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=uc}pw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];pw({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function vw(n,e,t){let r=Or,i=!0;for(const s of Qc(n,e)){let o=Or,a=!0;switch(s.op){case">=":case">":o=r2(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Or}mw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];mw({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function PS(n,e,t,r,i,s,o,a){return new pr(n,e,t,r,i,s,o,a)}function No(n){return new pr(n)}function ww(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ig(n){return n.collectionGroup!==null}function Js(n){const e=W(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new pe(Ae.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new El(s,r))}),t.has(Ae.keyField().canonicalString())||e.ce.push(new El(Ae.keyField(),r))}return e.ce}function Ct(n){const e=W(n);return e.le||(e.le=h2(e,Js(n))),e.le}function h2(n,e){if(n.limitType==="F")return Cp(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new El(i.field,s)});const t=n.endAt?new ti(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ti(n.startAt.position,n.startAt.inclusive):null;return Cp(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function bp(n,e){const t=n.filters.concat([e]);return new pr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Yc(n,e,t){return new pr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Wl(n,e){return ql(Ct(n),Ct(e))&&n.limitType===e.limitType}function CS(n){return`${Yi(Ct(n))}|lt:${n.limitType}`}function Ss(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>AS(i)).join(", ")}]`),$l(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>ho(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>ho(i)).join(",")),`Target(${r})`}(Ct(n))}; limitType=${n.limitType})`}function Gl(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Js(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=gw(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Js(r),i)||r.endAt&&!function(o,a,u){const c=gw(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Js(r),i))}(n,e)}function bS(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function kS(n){return(e,t)=>{let r=!1;for(const i of Js(n)){const s=f2(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function f2(n,e,t){const r=n.field.isKeyField()?q.comparator(e.key,t.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?ei(u,c):K()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){as(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return gS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2=new _e(q.comparator);function jt(){return p2}const NS=new _e(q.comparator);function Ta(...n){let e=NS;for(const t of n)e=e.insert(t.key,t);return e}function DS(n){let e=NS;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Cn(){return Ua()}function VS(){return Ua()}function Ua(){return new hi(n=>n.toString(),(n,e)=>n.isEqual(e))}const m2=new _e(q.comparator),g2=new pe(q.comparator);function ee(...n){let e=g2;for(const t of n)e=e.add(t);return e}const y2=new pe(Z);function Eg(){return y2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_l(e)?"-0":e}}function OS(n){return{integerValue:""+n}}function LS(n,e){return dS(e)?OS(e):Tg(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this._=void 0}}function _2(n,e,t){return n instanceof po?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Md(s)&&(s=vg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Ji?FS(n,e):n instanceof Xi?jS(n,e):function(i,s){const o=MS(i,s),a=Iw(o)+Iw(i.Pe);return xp(o)&&xp(i.Pe)?OS(a):Tg(i.serializer,a)}(n,e)}function v2(n,e,t){return n instanceof Ji?FS(n,e):n instanceof Xi?jS(n,e):t}function MS(n,e){return n instanceof mo?function(r){return xp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class po extends jd{}class Ji extends jd{constructor(e){super(),this.elements=e}}function FS(n,e){const t=US(e);for(const r of n.elements)t.some(i=>Fn(i,r))||t.push(r);return{arrayValue:{values:t}}}class Xi extends jd{constructor(e){super(),this.elements=e}}function jS(n,e){let t=US(e);for(const r of n.elements)t=t.filter(i=>!Fn(i,r));return{arrayValue:{values:t}}}class mo extends jd{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Iw(n){return Te(n.integerValue||n.doubleValue)}function US(n){return Il(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,t){this.field=e,this.transform=t}}function w2(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Ji&&i instanceof Ji||r instanceof Xi&&i instanceof Xi?co(r.elements,i.elements,Fn):r instanceof mo&&i instanceof mo?Fn(r.Pe,i.Pe):r instanceof po&&i instanceof po}(n.transform,e.transform)}class I2{constructor(e,t){this.version=e,this.transformResults=t}}class xe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xe}static exists(e){return new xe(void 0,e)}static updateTime(e){return new xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ud{}function BS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Vo(n.key,xe.none()):new Do(n.key,n.data,xe.none());{const t=n.data,r=at.empty();let i=new pe(Ae.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new mr(n.key,r,new Ft(i.toArray()),xe.none())}}function E2(n,e,t){n instanceof Do?function(i,s,o){const a=i.value.clone(),u=Tw(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof mr?function(i,s,o){if(!dc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Tw(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(zS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ba(n,e,t,r){return n instanceof Do?function(s,o,a,u){if(!dc(s.precondition,o))return a;const c=s.value.clone(),h=Sw(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof mr?function(s,o,a,u){if(!dc(s.precondition,o))return a;const c=Sw(s.fieldTransforms,u,o),h=o.data;return h.setAll(zS(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(n,e,t,r):function(s,o,a){return dc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function T2(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=MS(r.transform,i||null);s!=null&&(t===null&&(t=at.empty()),t.set(r.field,s))}return t||null}function Ew(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&co(r,i,(s,o)=>w2(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Do extends Ud{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class mr extends Ud{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function zS(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Tw(n,e,t){const r=new Map;Q(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,v2(o,a,t[i]))}return r}function Sw(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,_2(s,o,e))}return r}class Vo extends Ud{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sg extends Ud{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&E2(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ba(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ba(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=VS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const u=BS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ee())}isEqual(e){return this.batchId===e.batchId&&co(this.mutations,e.mutations,(t,r)=>Ew(t,r))&&co(this.baseMutations,e.baseMutations,(t,r)=>Ew(t,r))}}class xg{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Q(e.mutations.length===r.length);let i=function(){return m2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new xg(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,ae;function $S(n){switch(n){default:return K();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function qS(n){if(n===void 0)return $e("GRPC error has no .code"),O.UNKNOWN;switch(n){case Ge.OK:return O.OK;case Ge.CANCELLED:return O.CANCELLED;case Ge.UNKNOWN:return O.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return O.INTERNAL;case Ge.UNAVAILABLE:return O.UNAVAILABLE;case Ge.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ge.NOT_FOUND:return O.NOT_FOUND;case Ge.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ge.ABORTED:return O.ABORTED;case Ge.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ge.DATA_LOSS:return O.DATA_LOSS;default:return K()}}(ae=Ge||(Ge={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2=new ji([4294967295,4294967295],0);function Aw(n){const e=WS().encode(n),t=new JT;return t.update(e),new Uint8Array(t.digest())}function xw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ji([t,r],0),new ji([i,s],0)]}class Pg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Sa(`Invalid padding: ${t}`);if(r<0)throw new Sa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Sa(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Sa(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=ji.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(ji.fromNumber(r)));return i.compare(A2)===1&&(i=new ji([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Aw(e),[r,i]=xw(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Pg(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const t=Aw(e),[r,i]=xw(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Sa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Ql.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Hl(Y.min(),i,new _e(Z),jt(),ee())}}class Ql{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ql(r,t,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class GS{constructor(e,t){this.targetId=e,this.me=t}}class KS{constructor(e,t,r=Fe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Rw{constructor(){this.fe=0,this.ge=Cw(),this.pe=Fe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),t=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:K()}}),new Ql(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Cw()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class x2{constructor(e){this.Le=e,this.Be=new Map,this.ke=jt(),this.qe=Pw(),this.Qe=new _e(Z)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Hc(s))if(r===0){const o=new q(s.path);this.Ue(t,o,Ie.newNoDocument(o,Y.min()))}else Q(r===1);else{const o=this.Ye(t);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,c)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=Xr(r).toUint8Array()}catch(u){if(u instanceof yS)return Mn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Pg(o,i,s)}catch(u){return Mn(u instanceof Sa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Hc(a.target)){const u=new q(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ie.newNoDocument(u,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Hl(e,t,this.Qe,this.ke,r);return this.ke=jt(),this.qe=Pw(),this.Qe=new _e(Z),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Rw,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new pe(Z),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Rw),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Pw(){return new _e(q.comparator)}function Cw(){return new _e(q.comparator)}const R2={asc:"ASCENDING",desc:"DESCENDING"},P2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},C2={and:"AND",or:"OR"};class b2{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function kp(n,e){return n.useProto3Json||$l(e)?e:{value:e}}function go(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function HS(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function k2(n,e){return go(n,e.toTimestamp())}function qe(n){return Q(!!n),Y.fromTimestamp(function(t){const r=ur(t);return new Re(r.seconds,r.nanos)}(n))}function Cg(n,e){return Np(n,e).canonicalString()}function Np(n,e){const t=function(i){return new se(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function QS(n){const e=se.fromString(n);return Q(sA(e)),e}function Tl(n,e){return Cg(n.databaseId,e.path)}function Vn(n,e){const t=QS(e);if(t.get(1)!==n.databaseId.projectId)throw new j(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(XS(t))}function YS(n,e){return Cg(n.databaseId,e)}function JS(n){const e=QS(n);return e.length===4?se.emptyPath():XS(e)}function Dp(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function XS(n){return Q(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function bw(n,e,t){return{name:Tl(n,e),fields:t.value.mapValue.fields}}function ZS(n,e,t){const r=Vn(n,e.name),i=qe(e.updateTime),s=e.createTime?qe(e.createTime):Y.min(),o=new at({mapValue:{fields:e.fields}}),a=Ie.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function N2(n,e){return"found"in e?function(r,i){Q(!!i.found),i.found.name,i.found.updateTime;const s=Vn(r,i.found.name),o=qe(i.found.updateTime),a=i.found.createTime?qe(i.found.createTime):Y.min(),u=new at({mapValue:{fields:i.found.fields}});return Ie.newFoundDocument(s,o,a,u)}(n,e):"missing"in e?function(r,i){Q(!!i.missing),Q(!!i.readTime);const s=Vn(r,i.missing),o=qe(i.readTime);return Ie.newNoDocument(s,o)}(n,e):K()}function D2(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Q(h===void 0||typeof h=="string"),Fe.fromBase64String(h||"")):(Q(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Fe.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?O.UNKNOWN:qS(c.code);return new j(h,c.message||"")}(o);t=new KS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Vn(n,r.document.name),s=qe(r.document.updateTime),o=r.document.createTime?qe(r.document.createTime):Y.min(),a=new at({mapValue:{fields:r.document.fields}}),u=Ie.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];t=new hc(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Vn(n,r.document),s=r.readTime?qe(r.readTime):Y.min(),o=Ie.newNoDocument(i,s),a=r.removedTargetIds||[];t=new hc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Vn(n,r.document),s=r.removedTargetIds||[];t=new hc([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new S2(i,s),a=r.targetId;t=new GS(a,o)}}return t}function Sl(n,e){let t;if(e instanceof Do)t={update:bw(n,e.key,e.value)};else if(e instanceof Vo)t={delete:Tl(n,e.key)};else if(e instanceof mr)t={update:bw(n,e.key,e.data),updateMask:j2(e.fieldMask)};else{if(!(e instanceof Sg))return K();t={verify:Tl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof po)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ji)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Xi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof mo)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw K()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:k2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(n,e.precondition)),t}function Vp(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?xe.updateTime(qe(s.updateTime)):s.exists!==void 0?xe.exists(s.exists):xe.none()}(e.currentDocument):xe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)Q(a.setToServerValue==="REQUEST_TIME"),u=new po;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];u=new Ji(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];u=new Xi(h)}else"increment"in a?u=new mo(o,a.increment):K();const c=Ae.fromServerFormat(a.fieldPath);return new Kl(c,u)}(n,i)):[];if(e.update){e.update.name;const i=Vn(n,e.update.name),s=new at({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new Ft(c.map(h=>Ae.fromServerFormat(h)))}(e.updateMask);return new mr(i,s,o,t,r)}return new Do(i,s,t,r)}if(e.delete){const i=Vn(n,e.delete);return new Vo(i,t)}if(e.verify){const i=Vn(n,e.verify);return new Sg(i,t)}return K()}function V2(n,e){return n&&n.length>0?(Q(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?qe(i.updateTime):qe(s);return o.isEqual(Y.min())&&(o=qe(s)),new I2(o,i.transformResults||[])}(t,e))):[]}function eA(n,e){return{documents:[YS(n,e.path)]}}function tA(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=YS(n,i);const s=function(c){if(c.length!==0)return iA(he.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:As(m.field),direction:L2(m.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=kp(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:t,parent:i}}function nA(n){let e=JS(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Q(r===1);const h=t.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];t.where&&(s=function(f){const m=rA(f);return m instanceof he&&wg(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(m=>function(P){return new El(xs(P.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(t.orderBy));let a=null;t.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,$l(m)?null:m}(t.limit));let u=null;t.startAt&&(u=function(f){const m=!!f.before,v=f.values||[];return new ti(v,m)}(t.startAt));let c=null;return t.endAt&&(c=function(f){const m=!f.before,v=f.values||[];return new ti(v,m)}(t.endAt)),PS(e,i,o,s,a,"F",u,c)}function O2(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function rA(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=xs(t.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=xs(t.unaryFilter.field);return oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=xs(t.unaryFilter.field);return oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=xs(t.unaryFilter.field);return oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(n):n.fieldFilter!==void 0?function(t){return oe.create(xs(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return he.create(t.compositeFilter.filters.map(r=>rA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(t.compositeFilter.op))}(n):K()}function L2(n){return R2[n]}function M2(n){return P2[n]}function F2(n){return C2[n]}function As(n){return{fieldPath:n.canonicalString()}}function xs(n){return Ae.fromServerFormat(n.fieldPath)}function iA(n){return n instanceof oe?function(t){if(t.op==="=="){if(fw(t.value))return{unaryFilter:{field:As(t.field),op:"IS_NAN"}};if(hw(t.value))return{unaryFilter:{field:As(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(fw(t.value))return{unaryFilter:{field:As(t.field),op:"IS_NOT_NAN"}};if(hw(t.value))return{unaryFilter:{field:As(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:As(t.field),op:M2(t.op),value:t.value}}}(n):n instanceof he?function(t){const r=t.getFilters().map(i=>iA(i));return r.length===1?r[0]:{compositeFilter:{op:F2(t.op),filters:r}}}(n):K()}function j2(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function sA(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t,r,i,s=Y.min(),o=Y.min(),a=Fe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.ct=e}}function U2(n,e){let t;if(e.document)t=ZS(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=q.fromSegments(e.noDocument.path),i=es(e.noDocument.readTime);t=Ie.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return K();{const r=q.fromSegments(e.unknownDocument.path),i=es(e.unknownDocument.version);t=Ie.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new Re(i[0],i[1]);return Y.fromTimestamp(s)}(e.readTime)),t}function kw(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Jc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Tl(s,o.key),fields:o.data.value.mapValue.fields,updateTime:go(s,o.version.toTimestamp()),createTime:go(s,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Zi(e.version)};else{if(!e.isUnknownDocument())return K();r.unknownDocument={path:t.path.toArray(),version:Zi(e.version)}}return r}function Jc(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Zi(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function es(n){const e=new Re(n.seconds,n.nanoseconds);return Y.fromTimestamp(e)}function Ai(n,e){const t=(e.baseMutations||[]).map(s=>Vp(n.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Vp(n.ct,s)),i=Re.fromMillis(e.localWriteTimeMs);return new Ag(e.batchId,i,t,r)}function Aa(n){const e=es(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?es(n.lastLimboFreeSnapshotVersion):Y.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return Q(s.documents.length===1),Ct(No(JS(s.documents[0])))}(n.query):function(s){return Ct(nA(s))}(n.query),new Zn(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Fe.fromBase64String(n.resumeToken))}function aA(n,e){const t=Zi(e.snapshotVersion),r=Zi(e.lastLimboFreeSnapshotVersion);let i;i=Hc(e.target)?eA(n.ct,e.target):tA(n.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Yi(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function bg(n){const e=nA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Yc(e,e.limit,"L"):e}function df(n,e){return new Rg(e.largestBatchId,Vp(n.ct,e.overlayMutation))}function Nw(n,e){const t=e.path.lastSegment();return[n,Pt(e.path.popLast()),t]}function Dw(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Zi(r.readTime),documentKey:Pt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{getBundleMetadata(e,t){return Vw(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:es(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return Vw(e).put(function(i){return{bundleId:i.id,createTime:Zi(qe(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Ow(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:bg(s.bundledQuery),readTime:es(s.readTime)}}(r)})}saveNamedQuery(e,t){return Ow(e).put(function(i){return{name:i.name,readTime:Zi(qe(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Vw(n){return Xe(n,"bundles")}function Ow(n){return Xe(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new Bd(e,r)}getOverlay(e,t){return ca(e).get(Nw(this.userId,t)).next(r=>r?df(this.serializer,r):null)}getOverlays(e,t){const r=Cn();return D.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new Rg(t,o);i.push(this.ht(e,a))}),D.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Pt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ca(e).j("collectionPathOverlayIndex",a))}),D.waitFor(s)}getOverlaysForCollection(e,t,r){const i=Cn(),s=Pt(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ca(e).U("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=df(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=Cn();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ca(e).J({index:"collectionGroupOverlayIndex",range:a},(u,c,h)=>{const f=df(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):h.done()}).next(()=>s)}ht(e,t){return ca(e).put(function(i,s,o){const[a,u,c]=Nw(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Sl(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function ca(n){return Xe(n,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{Pt(e){return Xe(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Fe.fromUint8Array(r):Fe.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(Te(e.integerValue));else if("doubleValue"in e){const r=Te(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),_l(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=ur(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Xr(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?_S(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Fd(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):K()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const i of Object.keys(r))this.Vt(i,t),this.Tt(r[i],t)}wt(e,t){var r,i;const s=e.fields||{};this.dt(t,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(Te(a)),this.Vt(o,t),this.Tt(s[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const i of r)this.Tt(i,t)}yt(e,t){this.dt(t,37),q.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}xi.vt=new xi;function $2(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Lw(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=$2(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class q2{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const t=this.qt(e),r=Lw(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),r=Lw(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class W2{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class G2{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class da{constructor(){this.jt=new q2,this.Ht=new W2(this.jt),this.Jt=new G2(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ri(this.indexId,this.documentKey,this.arrayValue,r)}}function Er(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Mw(n.arrayValue,e.arrayValue),t!==0?t:(t=Mw(n.directionalValue,e.directionalValue),t!==0?t:q.comparator(n.documentKey,e.documentKey)))}function Mw(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e){this.Xt=new pe((t,r)=>Ae.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(Q(e.collectionGroup===this.collectionId),this.nn)return!1;const t=Tp(e);if(t!==void 0&&!this.sn(t))return!1;const r=Ti(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const u=r[s];if(!this.on(a,u)||!this._n(this.en[o++],u))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new pe(Ae.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new ac(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new ac(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new ac(r.field,r.dir==="asc"?0:1)));return new Kc(Kc.UNKNOWN_ID,this.collectionId,t,yl.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(n){var e,t;if(Q(n instanceof oe||n instanceof he),n instanceof oe){if(n instanceof RS){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>oe.create(n.field,"==",s)))||[];return he.create(i,"or")}return n}const r=n.filters.map(i=>lA(i));return he.create(r,n.op)}function K2(n){if(n.getFilters().length===0)return[];const e=Mp(lA(n));return Q(uA(e)),Op(e)||Lp(e)?[e]:e.getFilters()}function Op(n){return n instanceof oe}function Lp(n){return n instanceof he&&wg(n)}function uA(n){return Op(n)||Lp(n)||function(t){if(t instanceof he&&Rp(t)){for(const r of t.getFilters())if(!Op(r)&&!Lp(r))return!1;return!0}return!1}(n)}function Mp(n){if(Q(n instanceof oe||n instanceof he),n instanceof oe)return n;if(n.filters.length===1)return Mp(n.filters[0]);const e=n.filters.map(r=>Mp(r));let t=he.create(e,n.op);return t=Xc(t),uA(t)?t:(Q(t instanceof he),Q(fo(t)),Q(t.filters.length>1),t.filters.reduce((r,i)=>kg(r,i)))}function kg(n,e){let t;return Q(n instanceof oe||n instanceof he),Q(e instanceof oe||e instanceof he),t=n instanceof oe?e instanceof oe?function(i,s){return he.create([i,s],"and")}(n,e):jw(n,e):e instanceof oe?jw(e,n):function(i,s){if(Q(i.filters.length>0&&s.filters.length>0),fo(i)&&fo(s))return SS(i,s.getFilters());const o=Rp(i)?i:s,a=Rp(i)?s:i,u=o.filters.map(c=>kg(c,a));return he.create(u,"or")}(n,e),Xc(t)}function jw(n,e){if(fo(e))return SS(e,n.getFilters());{const t=e.filters.map(r=>kg(n,r));return he.create(t,"or")}}function Xc(n){if(Q(n instanceof oe||n instanceof he),n instanceof oe)return n;const e=n.getFilters();if(e.length===1)return Xc(e[0]);if(ES(n))return n;const t=e.map(i=>Xc(i)),r=[];return t.forEach(i=>{i instanceof oe?r.push(i):i instanceof he&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:he.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(){this.un=new Ng}addToCollectionParentIndex(e,t){return this.un.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Jt.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Jt.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class Ng{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new pe(se.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pe(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=new Uint8Array(0);class Q2{constructor(e,t){this.databaseId=t,this.cn=new Ng,this.ln=new hi(r=>Yi(r),(r,i)=>ql(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const s={collectionId:r,parent:Pt(i)};return Uw(e).put(s)}return D.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[sS(t),""],!1,!0);return Uw(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Pn(o.parent))}return r})}addFieldIndex(e,t){const r=ha(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Is(e);return s.next(a=>{o.put(Dw(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=ha(e),i=Is(e),s=ws(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=ha(e),r=ws(e),i=Is(e);return t.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,t){return D.forEach(this.hn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Fw(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=ws(e);let i=!0;const s=new Map;return D.forEach(this.hn(t),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ee();const a=[];return D.forEach(s,(u,c)=>{U("IndexedDbIndexManager",`Using index ${function(A){return`id=${A.indexId}|cg=${A.collectionGroup}|f=${A.fields.map(N=>`${N.fieldPath}:${N.kind}`).join(",")}`}(u)} to execute ${Yi(t)}`);const h=function(A,N){const M=Tp(N);if(M===void 0)return null;for(const F of Qc(A,M.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(c,u),f=function(A,N){const M=new Map;for(const F of Ti(N))for(const E of Qc(A,F.fieldPath))switch(E.op){case"==":case"in":M.set(F.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return M.set(F.fieldPath.canonicalString(),E.value),Array.from(M.values())}return null}(c,u),m=function(A,N){const M=[];let F=!0;for(const E of Ti(N)){const _=E.kind===0?_w(A,E.fieldPath,A.startAt):vw(A,E.fieldPath,A.startAt);M.push(_.value),F&&(F=_.inclusive)}return new ti(M,F)}(c,u),v=function(A,N){const M=[];let F=!0;for(const E of Ti(N)){const _=E.kind===0?vw(A,E.fieldPath,A.endAt):_w(A,E.fieldPath,A.endAt);M.push(_.value),F&&(F=_.inclusive)}return new ti(M,F)}(c,u),P=this.In(u,c,m),b=this.In(u,c,v),V=this.Tn(u,c,f),S=this.En(u.indexId,h,P,m.inclusive,b,v.inclusive,V);return D.forEach(S,w=>r.G(w,t.limit).next(A=>{A.forEach(N=>{const M=q.fromSegments(N.documentKey);o.has(M)||(o=o.add(M),a.push(M))})}))}).next(()=>a)}return D.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=K2(he.create(e.filters,"and")).map(r=>Cp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,i,s,o,a){const u=(t!=null?t.length:1)*Math.max(r.length,s.length),c=u/(t!=null?t.length:1),h=[];for(let f=0;f<u;++f){const m=t?this.dn(t[f/c]):Uu,v=this.An(e,m,r[f%c],i),P=this.Rn(e,m,s[f%c],o),b=a.map(V=>this.An(e,m,V,!0));h.push(...this.createRange(v,P,b))}return h}An(e,t,r,i){const s=new Ri(e,q.empty(),t,r);return i?s:s.Zt()}Rn(e,t,r,i){const s=new Ri(e,q.empty(),t,r);return i?s.Zt():s}Pn(e,t){const r=new Fw(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.hn(t);return D.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new pe(Ae.comparator),h=!1;for(const f of u.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?h=!0:c=c.add(m.field));for(const f of u.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}Vn(e,t){const r=new da;for(const i of Ti(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);xi.vt.It(s,o)}return r.zt()}dn(e){const t=new da;return xi.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new da;return xi.vt.It(Qi(this.databaseId,t),r.Yt(function(s){const o=Ti(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let i=[];i.push(new da);let s=0;for(const o of Ti(e)){const a=r[s++];for(const u of i)if(this.fn(t,o.fieldPath)&&Il(a))i=this.gn(i,o,a);else{const c=u.Yt(o.kind);xi.vt.It(a,c)}}return this.pn(i)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new da;u.seed(a.zt()),xi.vt.It(o,u.Yt(t.kind)),s.push(u)}return s}fn(e,t){return!!e.filters.find(r=>r instanceof oe&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=ha(e),i=Is(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(s=>{const o=[];return D.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(h,f){const m=f?new yl(f.sequenceNumber,new Jt(es(f.readTime),new q(Pn(f.documentKey)),f.largestBatchId)):yl.empty(),v=h.fields.map(([P,b])=>new ac(Ae.fromServerFormat(P),b));return new Kc(h.indexId,h.collectionGroup,v,m)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:Z(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=ha(e),s=Is(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>D.forEach(a,u=>s.put(Dw(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return D.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?D.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),D.forEach(a,u=>this.wn(e,i,u).next(c=>{const h=this.Sn(s,u);return c.isEqual(h)?D.resolve():this.bn(e,s,u,c,h)}))))})}Dn(e,t,r,i){return ws(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,i){return ws(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const i=ws(e);let s=new pe(Er);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,a)=>{s=s.add(new Ri(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,t){let r=new pe(Er);const i=this.Vn(t,e);if(i==null)return r;const s=Tp(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Il(o))for(const a of o.arrayValue.values||[])r=r.add(new Ri(t.indexId,e.key,this.dn(a),i))}else r=r.add(new Ri(t.indexId,e.key,Uu,i));return r}bn(e,t,r,i,s){U("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(u,c,h,f,m){const v=u.getIterator(),P=c.getIterator();let b=vs(v),V=vs(P);for(;b||V;){let S=!1,w=!1;if(b&&V){const A=h(b,V);A<0?w=!0:A>0&&(S=!0)}else b!=null?w=!0:S=!0;S?(f(V),V=vs(P)):w?(m(b),b=vs(v)):(b=vs(v),V=vs(P))}}(i,s,Er,a=>{o.push(this.Dn(e,t,r,a))},a=>{o.push(this.vn(e,t,r,a))}),D.waitFor(o)}yn(e){let t=1;return Is(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Er(o,a)).filter((o,a,u)=>!a||Er(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Er(o,e),u=Er(o,t);if(a===0)i[0]=e.Zt();else if(a>0&&u<0)i.push(o),i.push(o.Zt());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Uu,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Uu,[]];s.push(IDBKeyRange.bound(a,u))}return s}Cn(e,t){return Er(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Bw)}getMinOffset(e,t){return D.mapArray(this.hn(t),r=>this.Pn(e,r).next(i=>i||K())).next(Bw)}}function Uw(n){return Xe(n,"collectionParents")}function ws(n){return Xe(n,"indexEntries")}function ha(n){return Xe(n,"indexConfiguration")}function Is(n){return Xe(n,"indexState")}function Bw(n){Q(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;gg(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Jt(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Vt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Vt(e,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const u=r.J({range:o},(h,f,m)=>(a++,m.delete()));s.push(u.next(()=>{Q(a===1)}));const c=[];for(const h of t.mutations){const f=hS(e,h.key.path,t.batchId);s.push(i.delete(f)),c.push(h.key)}return D.waitFor(s).next(()=>c)}function Zc(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw K();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(41943040,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);class zd{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,t,r,i){Q(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new zd(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Tr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=Rs(e),o=Tr(e);return o.add({}).next(a=>{Q(typeof a=="number");const u=new Ag(a,t,r,i),c=function(v,P,b){const V=b.baseMutations.map(w=>Sl(v.ct,w)),S=b.mutations.map(w=>Sl(v.ct,w));return{userId:P,batchId:b.batchId,localWriteTimeMs:b.localWriteTime.toMillis(),baseMutations:V,mutations:S}}(this.serializer,this.userId,u),h=[];let f=new pe((m,v)=>Z(m.canonicalString(),v.canonicalString()));for(const m of i){const v=hS(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),h.push(o.put(c)),h.push(s.put(v,OV))}return f.forEach(m=>{h.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Fn[a]=u.keys()}),D.waitFor(h).next(()=>u)})}lookupMutationBatch(e,t){return Tr(e).get(t).next(r=>r?(Q(r.userId===this.userId),Ai(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?D.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Tr(e).J({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(Q(a.batchId>=r),s=Ai(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Tr(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Tr(e).U("userMutationsIndex",t).next(r=>r.map(i=>Ai(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=lc(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return Rs(e).J({range:i},(o,a,u)=>{const[c,h,f]=o,m=Pn(h);if(c===this.userId&&t.path.isEqual(m))return Tr(e).get(f).next(v=>{if(!v)throw K();Q(v.userId===this.userId),s.push(Ai(this.serializer,v))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new pe(Z);const i=[];return t.forEach(s=>{const o=lc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=Rs(e).J({range:a},(c,h,f)=>{const[m,v,P]=c,b=Pn(v);m===this.userId&&s.path.isEqual(b)?r=r.add(P):f.done()});i.push(u)}),D.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=lc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new pe(Z);return Rs(e).J({range:o},(u,c,h)=>{const[f,m,v]=u,P=Pn(m);f===this.userId&&r.isPrefixOf(P)?P.length===i&&(a=a.add(v)):h.done()}).next(()=>this.xn(e,a))}xn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(Tr(e).get(s).next(o=>{if(o===null)throw K();Q(o.userId===this.userId),r.push(Ai(this.serializer,o))}))}),D.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return cA(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),D.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return D.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Rs(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=Pn(s[1]);i.push(u)}else a.done()}).next(()=>{Q(i.length===0)})})}containsKey(e,t){return dA(e,this.userId,t)}Nn(e){return hA(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function dA(n,e,t){const r=lc(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Rs(n).J({range:s,H:!0},(a,u,c)=>{const[h,f,m]=a;h===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function Tr(n){return Xe(n,"mutations")}function Rs(n){return Xe(n,"documentMutations")}function hA(n){return Xe(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ts(0)}static kn(){return new ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new ts(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>Y.fromTimestamp(new Re(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Es(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(Q(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Es(e).J((o,a)=>{const u=Aa(a);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>D.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Es(e).J((r,i)=>{const s=Aa(i);t(s)})}qn(e){return $w(e).get("targetGlobalKey").next(t=>(Q(t!==null),t))}Qn(e,t){return $w(e).put("targetGlobalKey",t)}Kn(e,t){return Es(e).put(aA(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Yi(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Es(e).J({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const c=Aa(a);ql(t,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=br(e);return t.forEach(o=>{const a=Pt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),D.waitFor(i)}removeMatchingKeys(e,t,r){const i=br(e);return D.forEach(t,s=>{const o=Pt(s.path);return D.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=br(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=br(e);let s=ee();return i.J({range:r,H:!0},(o,a,u)=>{const c=Pn(o[1]),h=new q(c);s=s.add(h)}).next(()=>s)}containsKey(e,t){const r=Pt(t.path),i=IDBKeyRange.bound([r],[sS(r)],!1,!0);let s=0;return br(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,t){return Es(e).get(t).next(r=>r?Aa(r):null)}}function Es(n){return Xe(n,"targets")}function $w(n){return Xe(n,"targetGlobal")}function br(n){return Xe(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw([n,e],[t,r]){const i=Z(n,t);return i===0?Z(e,r):i}class J2{constructor(e){this.Un=e,this.buffer=new pe(qw),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();qw(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class X2{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){U("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){di(t)?U("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await ci(t)}await this.Hn(3e5)})}}class Z2{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return D.resolve(Mt.oe);const r=new J2(t);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(zw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zw):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,i,s,o,a,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,t))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Ts()<=re.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-h}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function eO(n,e){return new Z2(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e,t){this.db=e,this.garbageCollector=eO(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,i)=>t(i))}addReference(e,t,r){return Bu(e,r)}removeReference(e,t,r){return Bu(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Bu(e,t)}nr(e,t){return function(i,s){let o=!1;return hA(i).Y(a=>dA(i,a,s).next(u=>(u&&(o=!0),D.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=t){const u=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Y.min()),br(e).delete(function(f){return[0,Pt(f.path)]}(o))))});i.push(u)}}).next(()=>D.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Bu(e,t)}tr(e,t){const r=br(e);let i,s=Mt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(s!==Mt.oe&&t(new q(Pn(i)),s),s=c,i=u):s=Mt.oe}).next(()=>{s!==Mt.oe&&t(new q(Pn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Bu(n,e){return br(n).put(function(r,i){return{targetId:0,path:Pt(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(){this.changes=new hi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return vi(e).put(r)}removeEntry(e,t,r){return vi(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Jc(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=Ie.newInvalidDocument(t);return vi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(fa(t))},(i,s)=>{r=this.ir(t,s)}).next(()=>r)}sr(e,t){let r={size:0,document:Ie.newInvalidDocument(t)};return vi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(fa(t))},(i,s)=>{r={document:this.ir(t,s),size:Zc(s)}}).next(()=>r)}getEntries(e,t){let r=jt();return this._r(e,t,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,t){let r=jt(),i=new _e(q.comparator);return this._r(e,t,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,Zc(o))}).next(()=>({documents:r,ur:i}))}_r(e,t,r){if(t.isEmpty())return D.resolve();let i=new pe(Kw);t.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(fa(i.first()),fa(i.last())),o=i.getIterator();let a=o.getNext();return vi(e).J({index:"documentKeyIndex",range:s},(u,c,h)=>{const f=q.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&Kw(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?h.$(fa(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),Jc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return vi(e).U(IDBKeyRange.bound(a,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let h=jt();for(const f of c){const m=this.ir(q.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(Gl(t,m)||i.has(m.key))&&(h=h.insert(m.key,m))}return h})}getAllFromCollectionGroup(e,t,r,i){let s=jt();const o=Gw(t,r),a=Gw(t,Jt.max());return vi(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,h)=>{const f=this.ir(q.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new rO(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Ww(e).get("remoteDocumentGlobalKey").next(t=>(Q(!!t),t))}rr(e,t){return Ww(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=U2(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Y.min())))return r}return Ie.newInvalidDocument(e)}}function pA(n){return new nO(n)}class rO extends fA{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new hi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new pe((s,o)=>Z(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(t.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=kw(this.cr.serializer,o);i=i.add(s.path.popLast());const c=Zc(u);r+=c-a.size,t.push(this.cr.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=kw(this.cr.serializer,o.convertToNoDocument(Y.min()));t.push(this.cr.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.cr.updateMetadata(e,r)),D.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Ww(n){return Xe(n,"remoteDocumentGlobal")}function vi(n){return Xe(n,"remoteDocumentsV14")}function fa(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Gw(n,e){const t=e.documentKey.path.toArray();return[n,Jc(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Kw(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=Z(t[s],r[s]),i)return i;return i=Z(t.length,r.length),i||(i=Z(t[t.length-2],r[r.length-2]),i||Z(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Ba(r.mutation,i,Ft.empty(),Re.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ee()){const i=Cn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Ta();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Cn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ee()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=jt();const o=Ua(),a=function(){return Ua()}();return t.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof mr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Ba(h.mutation,c,h.mutation.getFieldMask(),Re.now())):o.set(c.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),t.forEach((c,h)=>{var f;return a.set(c,new iO(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Ua();let i=new _e((o,a)=>o-a),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let h=r.get(u)||Ft.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||ee()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=VS();h.forEach(m=>{if(!s.has(m)){const v=BS(t.get(m),r.get(m));v!==null&&f.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ig(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):D.resolve(Cn());let a=-1,u=s;return o.next(c=>D.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?D.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ee())).next(h=>({batchId:a,changes:DS(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(r=>{let i=Ta();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=Ta();return this.indexManager.getCollectionParents(e,s).next(a=>D.forEach(a,u=>{const c=function(f,m){return new pr(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Ie.newInvalidDocument(h)))});let a=Ta();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Ba(h.mutation,c,Ft.empty(),Re.now()),Gl(t,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return D.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:qe(i.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:bg(i.bundledQuery),readTime:qe(i.readTime)}}(t)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(){this.overlays=new _e(q.comparator),this.Ir=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Cn();return D.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const i=Cn(),s=t.length+1,o=new q(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return D.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new _e((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Cn(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Cn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return D.resolve(a)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Rg(t,r));let s=this.Ir.get(t);s===void 0&&(s=ee(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(){this.sessionToken=Fe.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(){this.Tr=new pe(Ze.Er),this.dr=new pe(Ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Ze(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Ze(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new q(new se([])),r=new Ze(t,e),i=new Ze(t,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new q(new se([])),r=new Ze(t,e),i=new Ze(t,e+1);let s=ee();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Ze(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return q.comparator(e.key,t.key)||Z(e.wr,t.wr)}static Ar(e,t){return Z(e.wr,t.wr)||q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new pe(Ze.Er)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ag(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,t){return D.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ze(t,0),i=new Ze(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new pe(Z);return t.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new q(s),0);let a=new pe(Z);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),D.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Q(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return D.forEach(t.mutations,i=>{const s=new Ze(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Ze(t,0),i=this.br.firstAfterOrEqual(r);return D.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e){this.Mr=e,this.docs=function(){return new _e(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():Ie.newInvalidDocument(t))}getEntries(e,t){let r=jt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ie.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=jt();const o=t.path,a=new q(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||gg(aS(h),r)<=0||(i.has(h.key)||Gl(t,h))&&(s=s.insert(h.key,h.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,t,r,i){K()}Or(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new cO(this)}getSize(e){return D.resolve(this.size)}}class cO extends fA{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e){this.persistence=e,this.Nr=new hi(t=>Yi(t),ql),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Dg,this.targetCount=0,this.kr=ts.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),D.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new ts(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Kn(t),D.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Mt(0),this.Kr=!1,this.Kr=!0,this.$r=new aO,this.referenceDelegate=e(this),this.Ur=new dO(this),this.indexManager=new H2,this.remoteDocumentCache=function(i){return new uO(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new oA(t),this.Gr=new sO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new oO,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new lO(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){U("MemoryPersistence","Starting transaction:",e);const i=new hO(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return D.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class hO extends uS{constructor(e){super(),this.currentSequenceNumber=e}}class $d{constructor(e){this.persistence=e,this.Jr=new Dg,this.Yr=null}static Zr(e){return new $d(e)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),D.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return D.or([()=>D.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e){this.serializer=e}O(e,t,r,i){const s=new Ld("createOrUpgrade",t);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",aw,{unique:!0}),u.createObjectStore("documentMutations")}(e),Hw(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=D.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),Hw(e)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Y.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",h)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").U().next(h=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",aw,{unique:!0});const f=c.store("mutations"),m=h.map(v=>f.put(v));return D.waitFor(m)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:KV});c.createIndex("collectionPathOverlayIndex",HV,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",QV,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:LV});c.createIndex("documentKeyIndex",MV),c.createIndex("collectionGroupIndex",FV)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:$V}).createIndex("sequenceNumberIndex",qV,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:WV}).createIndex("documentKeyIndex",GV,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,i)=>{t+=Zc(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(i=>D.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>D.forEach(a,u=>{Q(u.userId===s.userId);const c=Ai(this.serializer,u);return cA(e,s.userId,c).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const u=new se(o),c=function(f){return[0,Pt(f)]}(u);s.push(t.get(c).next(h=>h?D.resolve():(f=>t.put({targetId:0,path:Pt(f),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>D.waitFor(s))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:zV});const r=t.store("collectionParents"),i=new Ng,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:Pt(u)})}};return t.store("remoteDocuments").J({H:!0},(o,a)=>{const u=new se(o);return s(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,a,u],c)=>{const h=Pn(a);return s(h.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,i)=>{const s=Aa(i),o=aA(this.serializer,s);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=t.store("remoteDocumentsV14"),u=function(f){return f.document?new q(se.fromString(f.document.name).popFirst(5)):f.noDocument?q.fromSegments(f.noDocument.path):f.unknownDocument?q.fromSegments(f.unknownDocument.path):K()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>D.waitFor(i))}ai(e,t){const r=t.store("mutations"),i=pA(this.serializer),s=new gA($d.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(u=>{var c;let h=(c=a.get(u.userId))!==null&&c!==void 0?c:ee();Ai(this.serializer,u).keys().forEach(f=>h=h.add(f)),a.set(u.userId,h)}),D.forEach(a,(u,c)=>{const h=new tt(c),f=Bd.lt(this.serializer,h),m=s.getIndexManager(h),v=zd.lt(h,this.serializer,m,s.referenceDelegate);return new mA(i,v,f,m).recalculateAndSaveOverlaysForDocumentKeys(new Sp(t,Mt.oe),u).next()})})}}function Hw(n){n.createObjectStore("targetDocuments",{keyPath:UV}).createIndex("documentTargetsIndex",BV,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",jV,{unique:!0}),n.createObjectStore("targetGlobal")}const hf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Vg{constructor(e,t,r,i,s,o,a,u,c,h,f=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=h,this.hi=f,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=m=>Promise.resolve(),!Vg.D())throw new j(O.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new tO(this,i),this.Ai=t+"main",this.serializer=new oA(u),this.Ri=new Dn(this.Ai,this.hi,new fO(this.serializer)),this.$r=new z2,this.Ur=new Y2(this.referenceDelegate,this.serializer),this.remoteDocumentCache=pA(this.serializer),this.Gr=new B2,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,h===!1&&$e("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new j(O.FAILED_PRECONDITION,hf);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Mt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>zu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(di(e))return U("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return pa(e).get("owner").next(t=>D.resolve(this.vi(t)))}Ci(e){return zu(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Xe(t,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return D.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?D.resolve(!0):pa(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new j(O.FAILED_PRECONDITION,hf);return!1}}return!(!this.networkEnabled||!this.inForeground)||zu(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&U("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Sp(e,Mt.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>zu(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return zd.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Q2(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Bd.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){U("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===17?XV:u===16?JV:u===15?_g:u===14?mS:u===13?pS:u===12?YV:u===11?fS:void K()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new Sp(a,this.Qr?this.Qr.next():Mt.oe),t==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw $e(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new j(O.FAILED_PRECONDITION,lS);return r(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return pa(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new j(O.FAILED_PRECONDITION,hf)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return pa(e).put("owner",t)}static D(){return Dn.D()}bi(e){const t=pa(e);return t.get("owner").next(r=>this.vi(r)?(U("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):D.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||($e(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;jE()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return U("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return $e("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){$e("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function pa(n){return Xe(n,"owner")}function zu(n){return Xe(n,"clientMetadata")}function Og(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=ee(),i=ee();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Lg(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return jE()?8:cS(De())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new pO;return this.Xi(e,t,o).next(a=>{if(s.result=a,this.zi)return this.es(e,t,o,a.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(Ts()<=re.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Ss(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),D.resolve()):(Ts()<=re.DEBUG&&U("QueryEngine","Query:",Ss(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ts()<=re.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Ss(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ct(t))):D.resolve())}Yi(e,t){if(ww(t))return D.resolve(null);let r=Ct(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Yc(t,null,"F"),r=Ct(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(t,a);return this.ns(t,c,o,u.readTime)?this.Yi(e,Yc(t,null,"F")):this.rs(e,c,t,u)}))})))}Zi(e,t,r,i){return ww(t)||i.isEqual(Y.min())?D.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(t,s);return this.ns(t,o,r,i)?D.resolve(null):(Ts()<=re.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ss(t)),this.rs(e,o,t,oS(i,-1)).next(a=>a))})}ts(e,t){let r=new pe(kS(e));return t.forEach((i,s)=>{Gl(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return Ts()<=re.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Ss(t)),this.Ji.getDocumentsMatchingQuery(e,t,Jt.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new _e(Z),this._s=new hi(s=>Yi(s),ql),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mA(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function _A(n,e,t,r){return new mO(n,e,t,r)}async function vA(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ee();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return t.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function gO(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,m=f.keys();let v=D.resolve();return m.forEach(P=>{v=v.next(()=>h.getEntry(u,P)).next(b=>{const V=c.docVersions.get(P);Q(V!==null),b.version.compareTo(V)<0&&(f.applyToRemoteDocument(b,c),b.isValidDocument()&&(b.setReadTime(c.commitVersion),h.addEntry(b)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ee();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function wA(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function yO(n,e){const t=W(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(t.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>t.Ur.addMatchingKeys(s,h.addedDocuments,f)));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?v=v.withResumeToken(Fe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,r)),i=i.insert(f,v),function(b,V,S){return b.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(m,v,h)&&a.push(t.Ur.updateTargetData(s,v))});let u=jt(),c=ee();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(IA(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(Y.min())){const h=t.Ur.getLastRemoteSnapshotVersion(s).next(f=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return D.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(t.os=i,s))}function IA(n,e,t){let r=ee(),i=ee();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=jt();return t.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function _O(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yo(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):t.Ur.allocateTargetId(r).next(o=>(i=new Zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function _o(n,e,t){const r=W(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!di(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function ed(n,e,t){const r=W(n);let i=Y.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=W(u),m=f._s.get(h);return m!==void 0?D.resolve(f.os.get(m)):f.Ur.getTargetData(c,h)}(r,o,Ct(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?i:Y.min(),t?s:ee())).next(a=>(SA(r,bS(e),a),{documents:a,Ts:s})))}function EA(n,e){const t=W(n),r=W(t.Ur),i=t.os.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function TA(n,e){const t=W(n),r=t.us.get(e)||Y.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.cs.getAllFromCollectionGroup(i,e,oS(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(SA(t,e,i),i))}function SA(n,e,t){let r=n.us.get(e)||Y.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}async function vO(n,e,t,r){const i=W(n);let s=ee(),o=jt();for(const c of t){const h=e.Es(c.metadata.name);c.document&&(s=s.add(h));const f=e.ds(c);f.setReadTime(e.As(c.metadata.readTime)),o=o.insert(h,f)}const a=i.cs.newChangeBuffer({trackRemovals:!0}),u=await yo(i,function(h){return Ct(No(se.fromString(`__bundle__/docs/${h}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>IA(c,a,o).next(h=>(a.apply(c),h)).next(h=>i.Ur.removeMatchingKeysForTargetId(c,u.targetId).next(()=>i.Ur.addMatchingKeys(c,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,h.Ps,h.Is)).next(()=>h.Ps)))}async function wO(n,e,t=ee()){const r=await yo(n,Ct(bg(e.bundledQuery))),i=W(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=qe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Gr.saveNamedQuery(s,e);const a=r.withResumeToken(Fe.EMPTY_BYTE_STRING,o);return i.os=i.os.insert(a.targetId,a),i.Ur.updateTargetData(s,a).next(()=>i.Ur.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ur.addMatchingKeys(s,t,r.targetId)).next(()=>i.Gr.saveNamedQuery(s,e))})}function Qw(n,e){return`firestore_clients_${n}_${e}`}function Yw(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function ff(n,e){return`firestore_targets_${n}_${e}`}class td{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Rs(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new j(i.error.code,i.error.message))),o?new td(e,t,i.state,s):($e("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class za{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new j(r.error.code,r.error.message))),s?new za(e,r.state,i):($e("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class nd{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Eg();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=dS(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new nd(e,s):($e("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Mg{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Mg(t.clientId,t.onlineState):($e("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Fp{constructor(){this.activeTargetIds=Eg()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pf{constructor(e,t,r,i,s){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new _e(Z),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=Qw(this.persistenceKey,this.ps),this.vs=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Fp),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Os=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const i=this.getItem(Qw(this.persistenceKey,r));if(i){const s=nd.Rs(r,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(ff(this.persistenceKey,e));if(i){const s=za.Rs(e,i);s&&(r=s.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ff(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Qs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return U("SharedClientState","READ",e,t),t}setItem(e,t){U("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){U("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(U("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void $e("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(s){let o=Mt.oe;if(s!=null)try{const a=JSON.parse(s);Q(typeof a=="number"),o=a}catch(a){$e("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==Mt.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const i=new td(this.currentUser,e,t,r),s=Yw(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const t=Yw(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const i=ff(this.persistenceKey,e),s=new za(e,t,r);this.setItem(i,s.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return nd.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return td.Rs(new tt(s),i,t)}Ys(e,t){const r=this.Ms.exec(e),i=Number(r[1]);return za.Rs(i,t)}Ls(e){return Mg.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);U("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.io(o,a).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=Eg();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class AA{constructor(){this.so=new Fp,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Fp,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $u=null;function mf(){return $u===null?$u=function(){return 268435456+Math.round(2147483648*Math.random())}():$u++,"0x"+$u.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class SO extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,o){const a=mf(),u=this.xo(t,r.toUriEncodedString());U("RestConnection",`Sending RPC '${t}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(t,u,c,i).then(h=>(U("RestConnection",`Received RPC '${t}' ${a}: `,h),h),h=>{throw Mn("RestConnection",`RPC '${t}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(t,r,i,s,o,a){return this.Mo(t,r,i,s,o)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ko}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}xo(t,r){const i=EO[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=mf();return new Promise((o,a)=>{const u=new XT;u.setWithCredentials(!0),u.listenOnce(ZT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case oc.NO_ERROR:const h=u.getResponseJson();U(yt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case oc.TIMEOUT:U(yt,`RPC '${e}' ${s} timed out`),a(new j(O.DEADLINE_EXCEEDED,"Request time out"));break;case oc.HTTP_ERROR:const f=u.getStatus();if(U(yt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const P=function(V){const S=V.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(S)>=0?S:O.UNKNOWN}(v.status);a(new j(P,v.message))}else a(new j(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new j(O.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{U(yt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);U(yt,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",c,r,15)})}Bo(e,t,r){const i=mf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=nS(),a=tS(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const h=s.join("");U(yt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let m=!1,v=!1;const P=new TO({Io:V=>{v?U(yt,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(m||(U(yt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),U(yt,`RPC '${e}' stream ${i} sending:`,V),f.send(V))},To:()=>f.close()}),b=(V,S,w)=>{V.listen(S,A=>{try{w(A)}catch(N){setTimeout(()=>{throw N},0)}})};return b(f,Ea.EventType.OPEN,()=>{v||(U(yt,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),b(f,Ea.EventType.CLOSE,()=>{v||(v=!0,U(yt,`RPC '${e}' stream ${i} transport closed`),P.So())}),b(f,Ea.EventType.ERROR,V=>{v||(v=!0,Mn(yt,`RPC '${e}' stream ${i} transport errored:`,V),P.So(new j(O.UNAVAILABLE,"The operation could not be completed")))}),b(f,Ea.EventType.MESSAGE,V=>{var S;if(!v){const w=V.data[0];Q(!!w);const A=w,N=A.error||((S=A[0])===null||S===void 0?void 0:S.error);if(N){U(yt,`RPC '${e}' stream ${i} received error:`,N);const M=N.status;let F=function(I){const x=Ge[I];if(x!==void 0)return qS(x)}(M),E=N.message;F===void 0&&(F=O.INTERNAL,E="Unknown error status: "+M+" with message "+N.message),v=!0,P.So(new j(F,E)),f.close()}else U(yt,`RPC '${e}' stream ${i} received:`,w),P.bo(w)}}),b(a,eS.STAT_EVENT,V=>{V.stat===Ep.PROXY?U(yt,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===Ep.NOPROXY&&U(yt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(){return typeof window<"u"?window:null}function fc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(n){return new b2(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,t,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Fg(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?($e(t.toString()),$e("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new j(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AO extends RA{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=D2(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?qe(o.readTime):Y.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Dp(this.serializer),t.addTarget=function(s,o){let a;const u=o.target;if(a=Hc(u)?{documents:eA(s,u)}:{query:tA(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=HS(s,o.resumeToken);const c=kp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=go(s,o.snapshotVersion.toTimestamp());const c=kp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=O2(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Dp(this.serializer),t.removeTarget=e,this.a_(t)}}class xO extends RA{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Q(!!e.streamToken),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=V2(e.writeResults,e.commitTime),r=qe(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Dp(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Sl(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new j(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Np(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(O.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Np(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(O.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class PO{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?($e(t),this.D_=!1):U("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{fi(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=W(u);c.L_.add(4),await Oo(c),c.q_.set("Unknown"),c.L_.delete(4),await Jl(c)}(this))})}),this.q_=new PO(r,i)}}async function Jl(n){if(fi(n))for(const e of n.B_)await e(!0)}async function Oo(n){for(const e of n.B_)await e(!1)}function qd(n,e){const t=W(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Bg(t)?Ug(t):Mo(t).r_()&&jg(t,e))}function vo(n,e){const t=W(n),r=Mo(t);t.N_.delete(e),r.r_()&&PA(t,e),t.N_.size===0&&(r.r_()?r.o_():fi(t)&&t.q_.set("Unknown"))}function jg(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Mo(n).A_(e)}function PA(n,e){n.Q_.xe(e),Mo(n).R_(e)}function Ug(n){n.Q_=new x2({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Mo(n).start(),n.q_.v_()}function Bg(n){return fi(n)&&!Mo(n).n_()&&n.N_.size>0}function fi(n){return W(n).L_.size===0}function CA(n){n.Q_=void 0}async function bO(n){n.q_.set("Online")}async function kO(n){n.N_.forEach((e,t)=>{jg(n,e)})}async function NO(n,e){CA(n),Bg(n)?(n.q_.M_(e),Ug(n)):n.q_.set("Unknown")}async function DO(n,e,t){if(n.q_.set("Online"),e instanceof KS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(n,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await rd(n,r)}else if(e instanceof hc?n.Q_.Ke(e):e instanceof GS?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Y.min()))try{const r=await wA(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(Fe.EMPTY_BYTE_STRING,h.snapshotVersion)),PA(s,u);const f=new Zn(h.target,u,c,h.sequenceNumber);jg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await rd(n,r)}}async function rd(n,e,t){if(!di(e))throw e;n.L_.add(1),await Oo(n),n.q_.set("Offline"),t||(t=()=>wA(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Jl(n)})}function bA(n,e){return e().catch(t=>rd(n,t,e))}async function Lo(n){const e=W(n),t=ni(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;VO(e);)try{const i=await _O(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,OO(e,i)}catch(i){await rd(e,i)}kA(e)&&NA(e)}function VO(n){return fi(n)&&n.O_.length<10}function OO(n,e){n.O_.push(e);const t=ni(n);t.r_()&&t.V_&&t.m_(e.mutations)}function kA(n){return fi(n)&&!ni(n).n_()&&n.O_.length>0}function NA(n){ni(n).start()}async function LO(n){ni(n).p_()}async function MO(n){const e=ni(n);for(const t of n.O_)e.m_(t.mutations)}async function FO(n,e,t){const r=n.O_.shift(),i=xg.from(r,e,t);await bA(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Lo(n)}async function jO(n,e){e&&ni(n).V_&&await async function(r,i){if(function(o){return $S(o)&&o!==O.ABORTED}(i.code)){const s=r.O_.shift();ni(r).s_(),await bA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Lo(r)}}(n,e),kA(n)&&NA(n)}async function Xw(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=fi(t);t.L_.add(3),await Oo(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Jl(t)}async function jp(n,e){const t=W(n);e?(t.L_.delete(2),await Jl(t)):e||(t.L_.add(2),await Oo(t),t.q_.set("Unknown"))}function Mo(n){return n.K_||(n.K_=function(t,r,i){const s=W(t);return s.w_(),new AO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:bO.bind(null,n),Ro:kO.bind(null,n),mo:NO.bind(null,n),d_:DO.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Bg(n)?Ug(n):n.q_.set("Unknown")):(await n.K_.stop(),CA(n))})),n.K_}function ni(n){return n.U_||(n.U_=function(t,r,i){const s=W(t);return s.w_(),new xO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:LO.bind(null,n),mo:jO.bind(null,n),f_:MO.bind(null,n),g_:FO.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Lo(n)):(await n.U_.stop(),n.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new zg(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fo(n,e){if($e("AsyncQueue",`${e}: ${n}`),di(n))return new j(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.comparator=e?(t,r)=>e(t,r)||q.comparator(t.key,r.key):(t,r)=>q.comparator(t.key,r.key),this.keyedMap=Ta(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new Xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Xs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(){this.W_=new _e(q.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):K():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class wo{constructor(e,t,r,i,s,o,a,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new wo(e,t,Xs.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class BO{constructor(){this.queries=e0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=W(t),s=i.queries;i.queries=e0(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new j(O.ABORTED,"Firestore shutting down"))}}function e0(){return new hi(n=>CS(n),Wl)}async function $g(n,e){const t=W(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new UO,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const a=Fo(o,`Initialization of query '${Ss(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&Wg(t)}async function qg(n,e){const t=W(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function zO(n,e){const t=W(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Wg(t)}function $O(n,e,t){const r=W(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function Wg(n){n.Y_.forEach(e=>{e.next()})}var Up,t0;(t0=Up||(Up={})).ea="default",t0.Cache="cache";class Gg{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new wo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=wo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Up.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e,t){this.aa=e,this.byteLength=t}ua(){return"metadata"in this.aa}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this.serializer=e}Es(e){return Vn(this.serializer,e)}ds(e){return e.metadata.exists?ZS(this.serializer,e.document,!1):Ie.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return qe(e)}}class WO{constructor(e,t,r){this.ca=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=DA(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++t;const r=se.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ha(e){const t=new Map,r=new n0(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Es(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||ee()).add(s);t.set(o,a)}}return t}async complete(){const e=await vO(this.localStore,new n0(this.serializer),this.documents,this.ca.id),t=this.ha(this.documents);for(const r of this.queries)await wO(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function DA(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.key=e}}class OA{constructor(e){this.key=e}}class LA{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=kS(e),this.Ra=new Xs(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Zw,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),v=Gl(this.query,f)?f:null,P=!!m&&this.mutatedKeys.has(m.key),b=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let V=!1;m&&v?m.data.isEqual(v.data)?P!==b&&(r.track({type:3,doc:v}),V=!0):this.ga(m,v)||(r.track({type:2,doc:v}),V=!0,(u&&this.Aa(v,u)>0||c&&this.Aa(v,c)<0)&&(a=!0)):!m&&v?(r.track({type:0,doc:v}),V=!0):m&&!v&&(r.track({type:1,doc:m}),V=!0,(u||c)&&(a=!0)),V&&(v?(o=o.add(v),s=b?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(v,P){const b=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return b(v)-b(P)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new wo(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Zw,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new OA(r))}),this.da.forEach(r=>{e.has(r)||t.push(new VA(r))}),t}ba(e){this.Ta=e.Ts,this.da=ee();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return wo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class GO{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class KO{constructor(e){this.key=e,this.va=!1}}class HO{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new hi(a=>CS(a),Wl),this.Ma=new Map,this.xa=new Set,this.Oa=new _e(q.comparator),this.Na=new Map,this.La=new Dg,this.Ba={},this.ka=new Map,this.qa=ts.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function QO(n,e,t=!0){const r=Wd(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await MA(r,e,t,!0),i}async function YO(n,e){const t=Wd(n);await MA(t,e,!0,!1)}async function MA(n,e,t,r){const i=await yo(n.localStore,Ct(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let a;return r&&(a=await Kg(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&qd(n.remoteStore,i),a}async function Kg(n,e,t,r,i){n.Ka=(f,m,v)=>async function(b,V,S,w){let A=V.view.ma(S);A.ns&&(A=await ed(b.localStore,V.query,!1).then(({documents:E})=>V.view.ma(E,A)));const N=w&&w.targetChanges.get(V.targetId),M=w&&w.targetMismatches.get(V.targetId)!=null,F=V.view.applyChanges(A,b.isPrimaryClient,N,M);return Bp(b,V.targetId,F.wa),F.snapshot}(n,f,m,v);const s=await ed(n.localStore,e,!0),o=new LA(e,s.Ts),a=o.ma(s.documents),u=Ql.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,u);Bp(n,t,c.wa);const h=new GO(e,t,o);return n.Fa.set(e,h),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),c.snapshot}async function JO(n,e,t){const r=W(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Wl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await _o(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&vo(r.remoteStore,i.targetId),Io(r,i.targetId)}).catch(ci)):(Io(r,i.targetId),await _o(r.localStore,i.targetId,!0))}async function XO(n,e){const t=W(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),vo(t.remoteStore,r.targetId))}async function ZO(n,e,t){const r=Jg(n);try{const i=await function(o,a){const u=W(o),c=Re.now(),h=a.reduce((v,P)=>v.add(P.key),ee());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let P=jt(),b=ee();return u.cs.getEntries(v,h).next(V=>{P=V,P.forEach((S,w)=>{w.isValidDocument()||(b=b.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,P)).next(V=>{f=V;const S=[];for(const w of a){const A=T2(w,f.get(w.key).overlayedDocument);A!=null&&S.push(new mr(w.key,A,wS(A.value.mapValue),xe.exists(!0)))}return u.mutationQueue.addMutationBatch(v,c,S,a)}).next(V=>{m=V;const S=V.applyToLocalDocumentSet(f,b);return u.documentOverlayCache.saveOverlays(v,V.batchId,S)})}).then(()=>({batchId:m.batchId,changes:DS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new _e(Z)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,t),await gr(r,i.changes),await Lo(r.remoteStore)}catch(i){const s=Fo(i,"Failed to persist write");t.reject(s)}}async function FA(n,e){const t=W(n);try{const r=await yO(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Na.get(s);o&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Q(o.va):i.removedDocuments.size>0&&(Q(o.va),o.va=!1))}),await gr(t,r,e)}catch(r){await ci(r)}}function r0(n,e,t){const r=W(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=W(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&Wg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function eL(n,e,t){const r=W(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new _e(q.comparator);o=o.insert(s,Ie.newNoDocument(s,Y.min()));const a=ee().add(s),u=new Hl(Y.min(),new Map,new _e(Z),o,a);await FA(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Yg(r)}else await _o(r.localStore,e,!1).then(()=>Io(r,e,t)).catch(ci)}async function tL(n,e){const t=W(n),r=e.batch.batchId;try{const i=await gO(t.localStore,e);Qg(t,r,null),Hg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await gr(t,i)}catch(i){await ci(i)}}async function nL(n,e,t){const r=W(n);try{const i=await function(o,a){const u=W(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(Q(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);Qg(r,e,t),Hg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await gr(r,i)}catch(i){await ci(i)}}async function rL(n,e){const t=W(n);fi(t.remoteStore)||U("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=W(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(t.localStore);if(r===-1)return void e.resolve();const i=t.ka.get(r)||[];i.push(e),t.ka.set(r,i)}catch(r){const i=Fo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Hg(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Qg(n,e,t){const r=W(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Io(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||jA(n,r)})}function jA(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(vo(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Yg(n))}function Bp(n,e,t){for(const r of t)r instanceof VA?(n.La.addReference(r.key,e),iL(n,r)):r instanceof OA?(U("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||jA(n,r.key)):K()}function iL(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(U("SyncEngine","New document in limbo: "+t),n.xa.add(r),Yg(n))}function Yg(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new q(se.fromString(e)),r=n.qa.next();n.Na.set(r,new KO(t)),n.Oa=n.Oa.insert(t,r),qd(n.remoteStore,new Zn(Ct(No(t.path)),r,"TargetPurposeLimboResolution",Mt.oe))}}async function gr(n,e,t){const r=W(n),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,t).then(c=>{var h;if((c||t)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=t==null?void 0:t.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Lg.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=W(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>D.forEach(c,m=>D.forEach(m.$i,v=>h.persistence.referenceDelegate.addReference(f,m.targetId,v)).next(()=>D.forEach(m.Ui,v=>h.persistence.referenceDelegate.removeReference(f,m.targetId,v)))))}catch(f){if(!di(f))throw f;U("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const v=h.os.get(m),P=v.snapshotVersion,b=v.withLastLimboFreeSnapshotVersion(P);h.os=h.os.insert(m,b)}}}(r.localStore,s))}async function sL(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await vA(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new j(O.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await gr(t,r.hs)}}function oL(n,e){const t=W(n),r=t.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=t.Ma.get(e);if(!s)return i;for(const o of s){const a=t.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}async function aL(n,e){const t=W(n),r=await ed(t.localStore,e.query,!0),i=e.view.ba(r);return t.isPrimaryClient&&Bp(t,e.targetId,i.wa),i}async function lL(n,e){const t=W(n);return TA(t.localStore,e).then(r=>gr(t,r))}async function uL(n,e,t,r){const i=W(n),s=await function(a,u){const c=W(a),h=W(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>h.Mn(f,u).next(m=>m?c.localDocuments.getDocuments(f,m):D.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Lo(i.remoteStore):t==="acknowledged"||t==="rejected"?(Qg(i,e,r||null),Hg(i,e),function(a,u){W(W(a).mutationQueue).On(u)}(i.localStore,e)):K(),await gr(i,s)):U("SyncEngine","Cannot apply mutation batch with id: "+e)}async function cL(n,e){const t=W(n);if(Wd(t),Jg(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await i0(t,r.toArray());t.Qa=!0,await jp(t.remoteStore,!0);for(const s of i)qd(t.remoteStore,s)}else if(e===!1&&t.Qa!==!1){const r=[];let i=Promise.resolve();t.Ma.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Io(t,o),_o(t.localStore,o,!0))),vo(t.remoteStore,o)}),await i,await i0(t,r),function(o){const a=W(o);a.Na.forEach((u,c)=>{vo(a.remoteStore,c)}),a.La.pr(),a.Na=new Map,a.Oa=new _e(q.comparator)}(t),t.Qa=!1,await jp(t.remoteStore,!1)}}async function i0(n,e,t){const r=W(n),i=[],s=[];for(const o of e){let a;const u=r.Ma.get(o);if(u&&u.length!==0){a=await yo(r.localStore,Ct(u[0]));for(const c of u){const h=r.Fa.get(c),f=await aL(r,h);f.snapshot&&s.push(f.snapshot)}}else{const c=await EA(r.localStore,o);a=await yo(r.localStore,c),await Kg(r,UA(c),o,!1,a.resumeToken)}i.push(a)}return r.Ca.d_(s),i}function UA(n){return PS(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function dL(n){return function(t){return W(W(t).persistence).Qi()}(W(n).localStore)}async function hL(n,e,t,r){const i=W(n);if(i.Qa)return void U("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await TA(i.localStore,bS(s[0])),a=Hl.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Fe.EMPTY_BYTE_STRING);await gr(i,o,a);break}case"rejected":await _o(i.localStore,e,!0),Io(i,e,r);break;default:K()}}async function fL(n,e,t){const r=Wd(n);if(r.Qa){for(const i of e){if(r.Ma.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){U("SyncEngine","Adding an already active target "+i);continue}const s=await EA(r.localStore,i),o=await yo(r.localStore,s);await Kg(r,UA(s),o.targetId,!1,o.resumeToken),qd(r.remoteStore,o)}for(const i of t)r.Ma.has(i)&&await _o(r.localStore,i,!1).then(()=>{vo(r.remoteStore,i),Io(r,i)}).catch(ci)}}function Wd(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=FA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=eL.bind(null,e),e.Ca.d_=zO.bind(null,e.eventManager),e.Ca.$a=$O.bind(null,e.eventManager),e}function Jg(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nL.bind(null,e),e}function pL(n,e,t){const r=W(n);(async function(s,o,a){try{const u=await o.getMetadata();if(await function(v,P){const b=W(v),V=qe(P.createTime);return b.persistence.runTransaction("hasNewerBundle","readonly",S=>b.Gr.getBundleMetadata(S,P.id)).then(S=>!!S&&S.createTime.compareTo(V)>=0)}(s.localStore,u))return await o.close(),a._completeWith(function(v){return{taskState:"Success",documentsLoaded:v.totalDocuments,bytesLoaded:v.totalBytes,totalDocuments:v.totalDocuments,totalBytes:v.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(DA(u));const c=new WO(u,s.localStore,o.serializer);let h=await o.Ua();for(;h;){const m=await c.la(h);m&&a._updateProgress(m),h=await o.Ua()}const f=await c.complete();return await gr(s,f.Ia,void 0),await function(v,P){const b=W(v);return b.persistence.runTransaction("Save bundle","readwrite",V=>b.Gr.saveBundleMetadata(V,P))}(s.localStore,u),a._completeWith(f.progress),Promise.resolve(f.Pa)}catch(u){return Mn("SyncEngine",`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Al{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Yl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return _A(this.persistence,new yA,e.initialUser,this.serializer)}Ga(e){return new gA($d.Zr,this.serializer)}Wa(e){return new AA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Al.provider={build:()=>new Al};class BA extends Al{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Jg(this.Ja.syncEngine),await Lo(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return _A(this.persistence,new yA,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new X2(r,e.asyncQueue,t)}Ha(e,t){const r=new DV(t,this.persistence);return new NV(e.asyncQueue,r)}Ga(e){const t=Og(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new Vg(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,xA(),fc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new AA}}class mL extends BA{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof pf&&(this.sharedClientState.syncEngine={no:uL.bind(null,t),ro:hL.bind(null,t),io:fL.bind(null,t),Qi:dL.bind(null,t),eo:lL.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await cL(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=xA();if(!pf.D(t))throw new j(O.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Og(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new pf(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class xl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>r0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sL.bind(null,this.syncEngine),await jp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new BO}()}createDatastore(e){const t=Yl(e.databaseInfo.databaseId),r=function(s){return new SO(s)}(e.databaseInfo);return function(s,o,a,u){return new RO(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new CO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>r0(this.syncEngine,t,0),function(){return Jw.D()?new Jw:new IO}())}createSyncEngine(e,t){return function(i,s,o,a,u,c,h){const f=new HO(i,s,o,a,u,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=W(i);U("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Oo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}xl.provider={build:()=>new xl};function s0(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):$e("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(e,t){this.Xa=e,this.serializer=t,this.metadata=new ut,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(r=>{r&&r.ua()?this.metadata.resolve(r.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.aa)}`))},r=>this.metadata.reject(r))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const t=this.eu.decode(e),r=Number(t);isNaN(r)&&this.ru(`length string (${t}) is not valid number`);const i=await this.iu(r);return new qO(JSON.parse(i),e.length+r)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const t=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new j(O.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,s){const o=W(i),a={documents:s.map(f=>Tl(o.serializer,f))},u=await o.Lo("BatchGetDocuments",o.serializer.databaseId,se.emptyPath(),a,s.length),c=new Map;u.forEach(f=>{const m=N2(o.serializer,f);c.set(m.key.toString(),m)});const h=[];return s.forEach(f=>{const m=c.get(f.toString());Q(!!m),h.push(m)}),h}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Vo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=q.fromPath(r);this.mutations.push(new Sg(i,this.precondition(i)))}),await async function(r,i){const s=W(r),o={writes:i.map(a=>Sl(s.serializer,a))};await s.Mo("Commit",s.serializer.databaseId,se.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw K();t=Y.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new j(O.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Y.min())?xe.exists(!1):xe.updateTime(t):xe.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Y.min()))throw new j(O.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return xe.updateTime(t)}return xe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new Fg(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new yL(this.datastore),t=this.cu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const t=this.updateFunction(e);return!$l(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!$S(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=iS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{U("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Fo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gf(n,e){n.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await vA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function o0(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Xg(n);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Xw(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Xw(e.remoteStore,i)),n._onlineComponents=e}async function Xg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await gf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Mn("Error using user provided cache. Falling back to memory cache: "+t),await gf(n,new Al)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await gf(n,new Al);return n._offlineComponents}async function Kd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await o0(n,n._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await o0(n,new xl))),n._onlineComponents}function zA(n){return Xg(n).then(e=>e.persistence)}function Zg(n){return Xg(n).then(e=>e.localStore)}function $A(n){return Kd(n).then(e=>e.remoteStore)}function ey(n){return Kd(n).then(e=>e.syncEngine)}function wL(n){return Kd(n).then(e=>e.datastore)}async function Eo(n){const e=await Kd(n),t=e.eventManager;return t.onListen=QO.bind(null,e.syncEngine),t.onUnlisten=JO.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=YO.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=XO.bind(null,e.syncEngine),t}function IL(n){return n.asyncQueue.enqueue(async()=>{const e=await zA(n),t=await $A(n);return e.setNetworkEnabled(!0),function(i){const s=W(i);return s.L_.delete(0),Jl(s)}(t)})}function EL(n){return n.asyncQueue.enqueue(async()=>{const e=await zA(n),t=await $A(n);return e.setNetworkEnabled(!1),async function(i){const s=W(i);s.L_.add(0),await Oo(s),s.q_.set("Offline")}(t)})}function TL(n,e){const t=new ut;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,h){const f=W(c);return f.persistence.runTransaction("read document","readonly",m=>f.localDocuments.getDocument(m,h))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new j(O.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=Fo(a,`Failed to get document '${s} from cache`);o.reject(u)}}(await Zg(n),e,t)),t.promise}function qA(n,e,t={}){const r=new ut;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new Gd({next:m=>{h.Za(),o.enqueueAndForget(()=>qg(s,f));const v=m.docs.has(a);!v&&m.fromCache?c.reject(new j(O.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&u&&u.source==="server"?c.reject(new j(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Gg(No(a.path),h,{includeMetadataChanges:!0,_a:!0});return $g(s,f)}(await Eo(n),n.asyncQueue,e,t,r)),r.promise}function SL(n,e){const t=new ut;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await ed(i,s,!0),u=new LA(s,a.Ts),c=u.ma(a.documents),h=u.applyChanges(c,!1);o.resolve(h.snapshot)}catch(a){const u=Fo(a,`Failed to execute query '${s} against cache`);o.reject(u)}}(await Zg(n),e,t)),t.promise}function WA(n,e,t={}){const r=new ut;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new Gd({next:m=>{h.Za(),o.enqueueAndForget(()=>qg(s,f)),m.fromCache&&u.source==="server"?c.reject(new j(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Gg(a,h,{includeMetadataChanges:!0,_a:!0});return $g(s,f)}(await Eo(n),n.asyncQueue,e,t,r)),r.promise}function AL(n,e){const t=new Gd(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){W(i).Y_.add(s),s.next()}(await Eo(n),t)),()=>{t.Za(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){W(i).Y_.delete(s)}(await Eo(n),t))}}function xL(n,e,t,r){const i=function(o,a){let u;return u=typeof o=="string"?WS().encode(o):o,function(h,f){return new gL(h,f)}(function(h,f){if(h instanceof Uint8Array)return s0(h,f);if(h instanceof ArrayBuffer)return s0(new Uint8Array(h),f);if(h instanceof ReadableStream)return h.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(t,Yl(e));n.asyncQueue.enqueueAndForget(async()=>{pL(await ey(n),i,r)})}function RL(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=W(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Gr.getNamedQuery(o,i))}(await Zg(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(n,e,t){if(!t)throw new j(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function KA(n,e,t,r){if(e===!0&&r===!0)throw new j(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function l0(n){if(!q.isDocumentKey(n))throw new j(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function u0(n){if(q.isDocumentKey(n))throw new j(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Hd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K()}function ce(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hd(n);throw new j(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function HA(n,e){if(e<=0)throw new j(O.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}KA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=GA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new j(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new j(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new j(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xl{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new c0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new c0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new IV;switch(r.type){case"firstParty":return new AV(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=a0.get(t);r&&(U("ComponentProvider","Removing Datastore"),a0.delete(t),r.terminate())}(this),Promise.resolve()}}function PL(n,e,t,r={}){var i;const s=(n=ce(n,Xl))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Mn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=tt.MOCK_USER;else{a=FC(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new j(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new tt(c)}n._authCredentials=new EV(new rS(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bt=class QA{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new QA(this.firestore,e,this._query)}},ke=class YA{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new YA(this.firestore,e,this._key)}},Wr=class JA extends bt{constructor(e,t,r){super(e,t,No(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new q(e))}withConverter(e){return new JA(this.firestore,e,this._path)}};function XA(n,e,...t){if(n=J(n),ty("collection","path",e),n instanceof Xl){const r=se.fromString(e,...t);return u0(r),new Wr(n,null,r)}{if(!(n instanceof ke||n instanceof Wr))throw new j(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return u0(r),new Wr(n.firestore,null,r)}}function CL(n,e){if(n=ce(n,Xl),ty("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new j(O.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new bt(n,null,function(r){return new pr(se.emptyPath(),r)}(e))}function id(n,e,...t){if(n=J(n),arguments.length===1&&(e=iS.newId()),ty("doc","path",e),n instanceof Xl){const r=se.fromString(e,...t);return l0(r),new ke(n,null,new q(r))}{if(!(n instanceof ke||n instanceof Wr))throw new j(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return l0(r),new ke(n.firestore,n instanceof Wr?n.converter:null,new q(r))}}function ZA(n,e){return n=J(n),e=J(e),(n instanceof ke||n instanceof Wr)&&(e instanceof ke||e instanceof Wr)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function ex(n,e){return n=J(n),e=J(e),n instanceof bt&&e instanceof bt&&n.firestore===e.firestore&&Wl(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Fg(this,"async_queue_retry"),this.Vu=()=>{const r=fc();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=fc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=fc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new ut;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!di(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw $e("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=zg.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function zp(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class bL{constructor(){this._progressObserver={},this._taskCompletionResolver=new ut,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kL=-1;let We=class extends Xl{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new d0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new d0(e),this._firestoreClient=void 0,await e}}};function wt(n){if(n._terminated)throw new j(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||tx(n),n._firestoreClient}function tx(n){var e,t,r;const i=n._freezeSettings(),s=function(a,u,c,h){return new t2(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,GA(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new vL(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(n._componentsProvider))}function NL(n,e){Mn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return nx(n,xl.provider,{build:r=>new BA(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function DL(n){Mn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();nx(n,xl.provider,{build:t=>new mL(t,e.cacheSizeBytes)})}function nx(n,e,t){if((n=ce(n,We))._firestoreClient||n._terminated)throw new j(O.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new j(O.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},tx(n)}function VL(n){if(n._initialized&&!n._terminated)throw new j(O.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ut;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Dn.D())return Promise.resolve();const i=r+"main";await Dn.delete(i)}(Og(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function OL(n){return function(t){const r=new ut;return t.asyncQueue.enqueueAndForget(async()=>rL(await ey(t),r)),r.promise}(wt(n=ce(n,We)))}function LL(n){return IL(wt(n=ce(n,We)))}function ML(n){return EL(wt(n=ce(n,We)))}function FL(n,e){const t=wt(n=ce(n,We)),r=new bL;return xL(t,n._databaseId,e,r),r}function jL(n,e){return RL(wt(n=ce(n,We)),e).then(t=>t?new bt(n,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jn(Fe.fromBase64String(e))}catch(t){throw new j(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new jn(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UL=/^__.*__$/;class BL{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new mr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Do(e,this.data,t,this.fieldTransforms)}}class rx{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new mr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ix(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Yd{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Yd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return sd(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ix(this.Cu)&&UL.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class zL{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Yl(e)}Qu(e,t,r,i=!1){return new Yd({Cu:e,methodName:t,qu:r,path:Ae.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function us(n){const e=n._freezeSettings(),t=Yl(n._databaseId);return new zL(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Jd(n,e,t,r,i,s={}){const o=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);uy("Data must be an object, but it was:",o,r);const a=ax(r,o);let u,c;if(s.merge)u=new Ft(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=$p(e,f,t);if(!o.contains(m))throw new j(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);ux(h,m)||h.push(m)}u=new Ft(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new BL(new at(a),u,c)}class Zl extends ls{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zl}}function sx(n,e,t){return new Yd({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ry extends ls{_toFieldTransform(e){return new Kl(e.path,new po)}isEqual(e){return e instanceof ry}}class iy extends ls{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=sx(this,e,!0),r=this.Ku.map(s=>cs(s,t)),i=new Ji(r);return new Kl(e.path,i)}isEqual(e){return e instanceof iy&&ll(this.Ku,e.Ku)}}class sy extends ls{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=sx(this,e,!0),r=this.Ku.map(s=>cs(s,t)),i=new Xi(r);return new Kl(e.path,i)}isEqual(e){return e instanceof sy&&ll(this.Ku,e.Ku)}}class oy extends ls{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new mo(e.serializer,LS(e.serializer,this.$u));return new Kl(e.path,t)}isEqual(e){return e instanceof oy&&this.$u===e.$u}}function ay(n,e,t,r){const i=n.Qu(1,e,t);uy("Data must be an object, but it was:",i,r);const s=[],o=at.empty();as(r,(u,c)=>{const h=cy(e,u,t);c=J(c);const f=i.Nu(h);if(c instanceof Zl)s.push(h);else{const m=cs(c,f);m!=null&&(s.push(h),o.set(h,m))}});const a=new Ft(s);return new rx(o,a,i.fieldTransforms)}function ly(n,e,t,r,i,s){const o=n.Qu(1,e,t),a=[$p(e,r,t)],u=[i];if(s.length%2!=0)throw new j(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push($p(e,s[m])),u.push(s[m+1]);const c=[],h=at.empty();for(let m=a.length-1;m>=0;--m)if(!ux(c,a[m])){const v=a[m];let P=u[m];P=J(P);const b=o.Nu(v);if(P instanceof Zl)c.push(v);else{const V=cs(P,b);V!=null&&(c.push(v),h.set(v,V))}}const f=new Ft(c);return new rx(h,f,o.fieldTransforms)}function ox(n,e,t,r=!1){return cs(t,n.Qu(r?4:3,e))}function cs(n,e){if(lx(n=J(n)))return uy("Unsupported field value:",e,n),ax(n,e);if(n instanceof ls)return function(r,i){if(!ix(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=cs(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=J(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return LS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Re.fromDate(r);return{timestampValue:go(i.serializer,s)}}if(r instanceof Re){const s=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:go(i.serializer,s)}}if(r instanceof Qd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof jn)return{bytesValue:HS(i.serializer,r._byteString)};if(r instanceof ke){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Cg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ny)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Tg(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Hd(r)}`)}(n,e)}function ax(n,e){const t={};return gS(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):as(n,(r,i)=>{const s=cs(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function lx(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Re||n instanceof Qd||n instanceof jn||n instanceof ke||n instanceof ls||n instanceof ny)}function uy(n,e,t){if(!lx(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Hd(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function $p(n,e,t){if((e=J(e))instanceof ri)return e._internalPath;if(typeof e=="string")return cy(n,e);throw sd("Field path arguments must be of type string or ",n,!1,void 0,t)}const $L=new RegExp("[~\\*/\\[\\]]");function cy(n,e,t){if(e.search($L)>=0)throw sd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ri(...e.split("."))._internalPath}catch{throw sd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function sd(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new j(O.INVALID_ARGUMENT,a+n+u)}function ux(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Xd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qL extends Rl{data(){return super.data()}}function Xd(n,e){return typeof e=="string"?cy(n,e):e instanceof ri?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dy{}class eu extends dy{}function Sr(n,e,...t){let r=[];e instanceof dy&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof hy).length,a=s.filter(u=>u instanceof Zd).length;if(o>1||o>0&&a>0)throw new j(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Zd extends eu{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Zd(e,t,r)}_apply(e){const t=this._parse(e);return hx(e._query,t),new bt(e.firestore,e.converter,bp(e._query,t))}_parse(e){const t=us(e.firestore);return function(s,o,a,u,c,h,f){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new j(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){f0(f,h);const v=[];for(const P of f)v.push(h0(u,s,P));m={arrayValue:{values:v}}}else m=h0(u,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||f0(f,h),m=ox(a,o,f,h==="in"||h==="not-in");return oe.create(c,h,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function WL(n,e,t){const r=e,i=Xd("where",n);return Zd._create(i,r,t)}class hy extends dy{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new hy(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:he.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)hx(o,u),o=bp(o,u)}(e._query,t),new bt(e.firestore,e.converter,bp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class fy extends eu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new fy(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new j(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new j(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new El(s,o)}(e._query,this._field,this._direction);return new bt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new pr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function GL(n,e="asc"){const t=e,r=Xd("orderBy",n);return fy._create(r,t)}class eh extends eu{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new eh(e,t,r)}_apply(e){return new bt(e.firestore,e.converter,Yc(e._query,this._limit,this._limitType))}}function KL(n){return HA("limit",n),eh._create("limit",n,"F")}function HL(n){return HA("limitToLast",n),eh._create("limitToLast",n,"L")}class th extends eu{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new th(e,t,r)}_apply(e){const t=dx(e,this.type,this._docOrFields,this._inclusive);return new bt(e.firestore,e.converter,function(i,s){return new pr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function QL(...n){return th._create("startAt",n,!0)}function YL(...n){return th._create("startAfter",n,!1)}class nh extends eu{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new nh(e,t,r)}_apply(e){const t=dx(e,this.type,this._docOrFields,this._inclusive);return new bt(e.firestore,e.converter,function(i,s){return new pr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function JL(...n){return nh._create("endBefore",n,!1)}function XL(...n){return nh._create("endAt",n,!0)}function dx(n,e,t,r){if(t[0]=J(t[0]),t[0]instanceof Rl)return function(s,o,a,u,c){if(!u)throw new j(O.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const f of Js(s))if(f.field.isKeyField())h.push(Qi(o,u.key));else{const m=u.data.field(f.field);if(Md(m))throw new j(O.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const v=f.field.canonicalString();throw new j(O.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${v}' (used as the orderBy) does not exist.`)}h.push(m)}return new ti(h,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=us(n.firestore);return function(o,a,u,c,h,f){const m=o.explicitOrderBy;if(h.length>m.length)throw new j(O.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const v=[];for(let P=0;P<h.length;P++){const b=h[P];if(m[P].field.isKeyField()){if(typeof b!="string")throw new j(O.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof b}`);if(!Ig(o)&&b.indexOf("/")!==-1)throw new j(O.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${b}' contains a slash.`);const V=o.path.child(se.fromString(b));if(!q.isDocumentKey(V))throw new j(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${V}' is not because it contains an odd number of segments.`);const S=new q(V);v.push(Qi(a,S))}else{const V=ox(u,c,b);v.push(V)}}return new ti(v,f)}(n._query,n.firestore._databaseId,i,e,t,r)}}function h0(n,e,t){if(typeof(t=J(t))=="string"){if(t==="")throw new j(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ig(e)&&t.indexOf("/")!==-1)throw new j(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(se.fromString(t));if(!q.isDocumentKey(r))throw new j(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Qi(n,new q(r))}if(t instanceof ke)return Qi(n,t._key);throw new j(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hd(t)}.`)}function f0(n,e){if(!Array.isArray(n)||n.length===0)throw new j(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function hx(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new j(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class py{convertValue(e,t="none"){switch(Hi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return as(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Te(o.doubleValue));return new ny(s)}convertGeoPoint(e){return new Qd(Te(e.latitude),Te(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=vg(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(vl(e));default:return null}}convertTimestamp(e){const t=ur(e);return new Re(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=se.fromString(e);Q(sA(r));const i=new Zr(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(t)||$e(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class ZL extends py{constructor(e){super(),this.firestore=e}convertBytes(e){return new jn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let cr=class extends Rl{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $a(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Xd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},$a=class extends cr{data(e={}){return super.data(e)}},ii=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Di(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new $a(this._firestore,this._userDataWriter,r.key,r,new Di(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new $a(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Di(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new $a(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Di(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:eM(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function eM(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}function fx(n,e){return n instanceof cr&&e instanceof cr?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof ii&&e instanceof ii&&n._firestore===e._firestore&&ex(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tM(n){n=ce(n,ke);const e=ce(n.firestore,We);return qA(wt(e),n._key).then(t=>my(e,n,t))}class ds extends py{constructor(e){super(),this.firestore=e}convertBytes(e){return new jn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,t)}}function nM(n){n=ce(n,ke);const e=ce(n.firestore,We),t=wt(e),r=new ds(e);return TL(t,n._key).then(i=>new cr(e,r,n._key,i,new Di(i!==null&&i.hasLocalMutations,!0),n.converter))}function rM(n){n=ce(n,ke);const e=ce(n.firestore,We);return qA(wt(e),n._key,{source:"server"}).then(t=>my(e,n,t))}function iM(n){n=ce(n,bt);const e=ce(n.firestore,We),t=wt(e),r=new ds(e);return cx(n._query),WA(t,n._query).then(i=>new ii(e,r,n,i))}function sM(n){n=ce(n,bt);const e=ce(n.firestore,We),t=wt(e),r=new ds(e);return SL(t,n._query).then(i=>new ii(e,r,n,i))}function oM(n){n=ce(n,bt);const e=ce(n.firestore,We),t=wt(e),r=new ds(e);return WA(t,n._query,{source:"server"}).then(i=>new ii(e,r,n,i))}function p0(n,e,t){n=ce(n,ke);const r=ce(n.firestore,We),i=rh(n.converter,e,t);return tu(r,[Jd(us(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,xe.none())])}function m0(n,e,t,...r){n=ce(n,ke);const i=ce(n.firestore,We),s=us(i);let o;return o=typeof(e=J(e))=="string"||e instanceof ri?ly(s,"updateDoc",n._key,e,t,r):ay(s,"updateDoc",n._key,e),tu(i,[o.toMutation(n._key,xe.exists(!0))])}function aM(n){return tu(ce(n.firestore,We),[new Vo(n._key,xe.none())])}function lM(n,e){const t=ce(n.firestore,We),r=id(n),i=rh(n.converter,e);return tu(t,[Jd(us(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,xe.exists(!1))]).then(()=>r)}function px(n,...e){var t,r,i;n=J(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||zp(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(zp(e[o])){const f=e[o];e[o]=(t=f.next)===null||t===void 0?void 0:t.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,h;if(n instanceof ke)c=ce(n.firestore,We),h=No(n._key.path),u={next:f=>{e[o]&&e[o](my(c,n,f))},error:e[o+1],complete:e[o+2]};else{const f=ce(n,bt);c=ce(f.firestore,We),h=f._query;const m=new ds(c);u={next:v=>{e[o]&&e[o](new ii(c,m,f,v))},error:e[o+1],complete:e[o+2]},cx(n._query)}return function(m,v,P,b){const V=new Gd(b),S=new Gg(v,V,P);return m.asyncQueue.enqueueAndForget(async()=>$g(await Eo(m),S)),()=>{V.Za(),m.asyncQueue.enqueueAndForget(async()=>qg(await Eo(m),S))}}(wt(c),h,a,u)}function uM(n,e){return AL(wt(n=ce(n,We)),zp(e)?e:{next:e})}function tu(n,e){return function(r,i){const s=new ut;return r.asyncQueue.enqueueAndForget(async()=>ZO(await ey(r),i,s)),s.promise}(wt(n),e)}function my(n,e,t){const r=t.docs.get(e._key),i=new ds(n);return new cr(n,i,e._key,r,new Di(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dM=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=us(e)}set(e,t,r){this._verifyNotCommitted();const i=kr(e,this._firestore),s=rh(i.converter,t,r),o=Jd(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,xe.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=kr(e,this._firestore);let o;return o=typeof(t=J(t))=="string"||t instanceof ri?ly(this._dataReader,"WriteBatch.update",s._key,t,r,i):ay(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,xe.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=kr(e,this._firestore);return this._mutations=this._mutations.concat(new Vo(t._key,xe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new j(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function kr(n,e){if((n=J(n)).firestore!==e)throw new j(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hM=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=us(t)}get(t){const r=kr(t,this._firestore),i=new ZL(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return K();const o=s[0];if(o.isFoundDocument())return new Rl(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Rl(this._firestore,i,r._key,null,r.converter);throw K()})}set(t,r,i){const s=kr(t,this._firestore),o=rh(s.converter,r,i),a=Jd(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(t,r,i,...s){const o=kr(t,this._firestore);let a;return a=typeof(r=J(r))=="string"||r instanceof ri?ly(this._dataReader,"Transaction.update",o._key,r,i,s):ay(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=kr(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=kr(e,this._firestore),r=new ds(this._firestore);return super.get(e).then(i=>new cr(this._firestore,r,t._key,i._document,new Di(!1,!1),t.converter))}};function fM(n,e,t){n=ce(n,We);const r=Object.assign(Object.assign({},cM),t);return function(s){if(s.maxAttempts<1)throw new j(O.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new ut;return s.asyncQueue.enqueueAndForget(async()=>{const c=await wL(s);new _L(s.asyncQueue,c,a,o,u).au()}),u.promise}(wt(n),i=>e(new hM(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(){return new Zl("deleteField")}function mM(){return new ry("serverTimestamp")}function gM(...n){return new iy("arrayUnion",n)}function yM(...n){return new sy("arrayRemove",n)}function _M(n){return new oy("increment",n)}(function(e,t=!0){(function(i){ko=i})(li),Yr(new On("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new We(new TV(r.getProvider("auth-internal")),new RV(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new j(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zr(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),yn(iw,"4.7.3",e),yn(iw,"4.7.3","esm2017")})();const vM="@firebase/firestore-compat",wM="0.3.38";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new j("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(){if(typeof Uint8Array>"u")throw new j("unimplemented","Uint8Arrays are not available in this environment.")}function y0(){if(!ZV())throw new j("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Pl{constructor(e){this._delegate=e}static fromBase64String(e){return y0(),new Pl(jn.fromBase64String(e))}static fromUint8Array(e){return g0(),new Pl(jn.fromUint8Array(e))}toBase64(){return y0(),this._delegate.toBase64()}toUint8Array(){return g0(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(n){return IM(n,["next","error","complete"])}function IM(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{enableIndexedDbPersistence(e,t){return NL(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return DL(e._delegate)}clearIndexedDbPersistence(e){return VL(e._delegate)}}class mx{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Zr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Mn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){PL(this._delegate,e,t,r)}enableNetwork(){return LL(this._delegate)}disableNetwork(){return ML(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,KA("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return OL(this._delegate)}onSnapshotsInSync(e){return uM(this._delegate,e)}get app(){if(!this._appCompat)throw new j("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new To(this,XA(this._delegate,e))}catch(t){throw At(t,"collection()","Firestore.collection()")}}doc(e){try{return new rn(this,id(this._delegate,e))}catch(t){throw At(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new St(this,CL(this._delegate,e))}catch(t){throw At(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return fM(this._delegate,t=>e(new gx(this,t)))}batch(){return wt(this._delegate),new yx(new dM(this._delegate,e=>tu(this._delegate,e)))}loadBundle(e){return FL(this._delegate,e)}namedQuery(e){return jL(this._delegate,e).then(t=>t?new St(this,t):null)}}class ih extends py{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pl(new jn(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return rn.forKey(t,this.firestore,null)}}function TM(n){vV(n)}class gx{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new ih(e)}get(e){const t=Vi(e);return this._delegate.get(t).then(r=>new Cl(this._firestore,new cr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=Vi(e);return r?(gy("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Vi(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Vi(e);return this._delegate.delete(t),this}}class yx{constructor(e){this._delegate=e}set(e,t,r){const i=Vi(e);return r?(gy("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Vi(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Vi(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class ns{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new $a(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new bl(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=ns.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new ns(e,new ih(e),t),i.set(t,s)),s}}ns.INSTANCES=new WeakMap;class rn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ih(e)}static forPath(e,t,r){if(e.length%2!==0)throw new j("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new rn(t,new ke(t._delegate,r,new q(e)))}static forKey(e,t,r){return new rn(t,new ke(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new To(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new To(this.firestore,XA(this._delegate,e))}catch(t){throw At(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=J(e),e instanceof ke?ZA(this._delegate,e):!1}set(e,t){t=gy("DocumentReference.set",t);try{return t?p0(this._delegate,e,t):p0(this._delegate,e)}catch(r){throw At(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?m0(this._delegate,e):m0(this._delegate,e,t,...r)}catch(i){throw At(i,"updateDoc()","DocumentReference.update()")}}delete(){return aM(this._delegate)}onSnapshot(...e){const t=_x(e),r=vx(e,i=>new Cl(this.firestore,new cr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return px(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=nM(this._delegate):(e==null?void 0:e.source)==="server"?t=rM(this._delegate):t=tM(this._delegate),t.then(r=>new Cl(this.firestore,new cr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new rn(this.firestore,e?this._delegate.withConverter(ns.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function At(n,e,t){return n.message=n.message.replace(e,t),n}function _x(n){for(const e of n)if(typeof e=="object"&&!qp(e))return e;return{}}function vx(n,e){var t,r;let i;return qp(n[0])?i=n[0]:qp(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Cl{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new rn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return fx(this._delegate,e._delegate)}}class bl extends Cl{data(e){const t=this._delegate.data(e);return this._delegate._converter||wV(t!==void 0),t}}class St{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ih(e)}where(e,t,r){try{return new St(this.firestore,Sr(this._delegate,WL(e,t,r)))}catch(i){throw At(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new St(this.firestore,Sr(this._delegate,GL(e,t)))}catch(r){throw At(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new St(this.firestore,Sr(this._delegate,KL(e)))}catch(t){throw At(t,"limit()","Query.limit()")}}limitToLast(e){try{return new St(this.firestore,Sr(this._delegate,HL(e)))}catch(t){throw At(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new St(this.firestore,Sr(this._delegate,QL(...e)))}catch(t){throw At(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new St(this.firestore,Sr(this._delegate,YL(...e)))}catch(t){throw At(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new St(this.firestore,Sr(this._delegate,JL(...e)))}catch(t){throw At(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new St(this.firestore,Sr(this._delegate,XL(...e)))}catch(t){throw At(t,"endAt()","Query.endAt()")}}isEqual(e){return ex(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=sM(this._delegate):(e==null?void 0:e.source)==="server"?t=oM(this._delegate):t=iM(this._delegate),t.then(r=>new Wp(this.firestore,new ii(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=_x(e),r=vx(e,i=>new Wp(this.firestore,new ii(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return px(this._delegate,t,r)}withConverter(e){return new St(this.firestore,e?this._delegate.withConverter(ns.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class SM{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new bl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Wp{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new St(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new bl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new SM(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new bl(this._firestore,r))})}isEqual(e){return fx(this._delegate,e._delegate)}}class To extends St{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new rn(this.firestore,e):null}doc(e){try{return e===void 0?new rn(this.firestore,id(this._delegate)):new rn(this.firestore,id(this._delegate,e))}catch(t){throw At(t,"doc()","CollectionReference.doc()")}}add(e){return lM(this._delegate,e).then(t=>new rn(this.firestore,t))}isEqual(e){return ZA(this._delegate,e._delegate)}withConverter(e){return new To(this.firestore,e?this._delegate.withConverter(ns.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Vi(n){return ce(n,ke)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(...e){this._delegate=new ri(...e)}static documentId(){return new yy(Ae.keyField().canonicalString())}isEqual(e){return e=J(e),e instanceof ri?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this._delegate=e}static serverTimestamp(){const e=mM();return e._methodName="FieldValue.serverTimestamp",new Pi(e)}static delete(){const e=pM();return e._methodName="FieldValue.delete",new Pi(e)}static arrayUnion(...e){const t=gM(...e);return t._methodName="FieldValue.arrayUnion",new Pi(t)}static arrayRemove(...e){const t=yM(...e);return t._methodName="FieldValue.arrayRemove",new Pi(t)}static increment(e){const t=_M(e);return t._methodName="FieldValue.increment",new Pi(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AM={Firestore:mx,GeoPoint:Qd,Timestamp:Re,Blob:Pl,Transaction:gx,WriteBatch:yx,DocumentReference:rn,DocumentSnapshot:Cl,Query:St,QueryDocumentSnapshot:bl,QuerySnapshot:Wp,CollectionReference:To,FieldPath:yy,FieldValue:Pi,setLogLevel:TM,CACHE_SIZE_UNLIMITED:kL};function xM(n,e){n.INTERNAL.registerComponent(new On("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},AM)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RM(n){xM(n,(e,t)=>new mx(e,t,new EM)),n.registerVersion(vM,wM)}RM(Nn);const PM={apiKey:"AIzaSyCuhI79HGlVKc2m2xdganc_mdZgMC_RLXk",authDomain:"sciencenoob-quiz.firebaseapp.com",projectId:"sciencenoob-quiz",storageBucket:"sciencenoob-quiz.firebasestorage.app",messagingSenderId:"259332905426",appId:"1:259332905426:web:7a17a4ba05d138a0fc100b",measurementId:"G-4WS1S374EM"};Nn.apps.length?Nn.app():Nn.initializeApp(PM);const od=Nn.auth(),hs=Nn.firestore(),CM=({onNavigate:n})=>g.jsxs("div",{className:"min-h-screen relative overflow-hidden bg-[#FDFBF7] font-sans selection:bg-[#1CAB55] selection:text-white animate-fade-in",children:[g.jsx("div",{className:"absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] rounded-full bg-[#1CAB55] opacity-[0.08] blur-[80px] animate-pulse"}),g.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[60vh] h-[60vh] rounded-full bg-[#8B0000] opacity-[0.06] blur-[100px] animate-pulse",style:{animationDelay:"2s"}}),g.jsx("div",{className:"absolute inset-0 opacity-[0.03]",style:{backgroundImage:"radial-gradient(#1a1a1a 1px, transparent 1px)",backgroundSize:"30px 30px"}}),g.jsx("div",{className:"relative z-10 min-h-screen flex flex-col items-center justify-center p-6",children:g.jsxs("div",{className:"w-full max-w-lg bg-white/60 backdrop-blur-lg rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 p-8 md:p-12 text-center transform transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]",children:[g.jsx("div",{className:"mx-auto w-24 h-24 bg-gradient-to-tr from-[#1CAB55] to-[#45d47e] rounded-2xl rotate-3 flex items-center justify-center shadow-lg mb-8 text-white",children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-12 w-12",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})})}),g.jsxs("h1",{className:"text-4xl md:text-5xl font-bold text-gray-800 mb-1 tracking-tight",children:["কুইজ ",g.jsx("span",{className:"text-[#1CAB55]",children:"মেশিন"})]}),g.jsx("p",{className:"text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4",children:"By Science Noob"}),g.jsx("div",{className:"h-1 w-16 bg-[#8B0000] mx-auto rounded-full mb-6"}),g.jsx("p",{className:"text-xl text-gray-600 mb-2 font-medium",children:"তোমাকে স্বাগতম!"}),g.jsxs("p",{className:"text-gray-500 mb-10 leading-relaxed",children:["মেধার লড়াইয়ে নামতে প্রস্তুত? ",g.jsx("br",{})," এখনই শুরু হোক জ্ঞানের নতুন যাত্রা।"]}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("button",{onClick:()=>n("LOGIN"),className:"w-full bg-[#1CAB55] hover:bg-[#169448] text-white text-xl font-bold py-4 px-6 rounded-xl shadow-[0_4px_0_rgb(15,125,55)] active:shadow-none active:translate-y-[4px] transition-all flex items-center justify-center gap-2 group",children:[g.jsx("span",{children:"লগইন কর"}),g.jsx("span",{className:"group-hover:translate-x-1 transition-transform",children:"→"})]}),g.jsx("button",{onClick:()=>n("SIGNUP"),className:"w-full bg-white hover:bg-gray-50 text-[#1a1a1a] border-2 border-gray-200 text-xl font-bold py-4 px-6 rounded-xl shadow-[0_4px_0_rgb(229,231,235)] active:shadow-none active:translate-y-[4px] transition-all",children:"সাইন আপ কর"})]}),g.jsx("p",{className:"mt-8 text-xs text-gray-400",children:"Learn • Play • Win"})]})})]}),nr=({variant:n="primary",className:e="",children:t,...r})=>{const i="px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform active:scale-95 shadow-md",s={primary:"bg-[#1CAB55] text-white hover:bg-[#159f4d]",secondary:"bg-white text-brand-dark border-2 border-[#1CAB55] hover:bg-gray-50",danger:"bg-[#8B0000] text-white hover:bg-[#720000]",outline:"bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100"};return g.jsx("button",{className:`${i} ${s[n]} ${e}`,...r,children:t})},bM={"গণিত (General Math)":["বাস্তব সংখ্যা","সেট ও ফাংশন","বীজগাণিতিক রাশি","সূচক ও লগারিদম","এক চলকবিশিষ্ট সমীকরণ","রেখা, কোণ ও ত্রিভুজ","ব্যবহারিক জ্যামিতি","বৃত্ত","ত্রিকোণমিতিক অনুপাত","দূরত্ব ও উচ্চতা","বীজগাণিতিক অনুপাত ও সমানুপাত","দুই চলকবিশিষ্ট সরল সহসমীকরণ","সসীম ধারা","অনুপাত, সদৃশতা ও প্রতিসাম্য","ক্ষেত্রফল সম্পর্কিত উপপাদ্য ও সম্পাদ্য","পরিমিতি","পরিসংখ্যান"],"উচ্চতর গণিত (Higher Math)":["সেট ও ফাংশন","বীজগাণিতিক রাশি","জ্যামিতি","জ্যামিতিক অঙ্কন","সমীকরণ","অসমতা","অসীম ধারা","ত্রিকোণমিতি","সূচকীয় ও লগারিদমীয় ফাংশন","দ্বিপদী বিস্তৃতি","স্থানাঙ্ক জ্যামিতি","সমতলীয় ভেক্টর","ঘন জ্যামিতি","সম্ভাবনা"],"পদার্থবিজ্ঞান (Physics)":["ভৌত রাশি এবং তাদের পরিমাপ","গতি","বল","কাজ, ক্ষমতা ও শক্তি","পদার্থের অবস্থা ও চাপ","বস্তুর ওপর তাপের প্রভাব","তরঙ্গ ও শব্দ","আলোর প্রতিফলন","আলোর প্রতিসরণ","স্থির বিদ্যুৎ","চল বিদ্যুৎ","বিদ্যুতের চৌম্বক ক্রিয়া","তেজস্ক্রিয়তা ও ইলেকট্রনিক্স"],"রসায়ন (Chemistry)":["রসায়নের ধারণা","পদার্থের অবস্থা","পদার্থের গঠন","পর্যায় সারণি","রাসায়নিক বন্ধন","মোলের ধারণা ও রাসায়নিক গণনা","রাসায়নিক বিক্রিয়া","রসায়ন ও শক্তি","এসিড-ক্ষারক সমতা","খনিজ সম্পদ: ধাতু-অধাতু","খনিজ সম্পদ: জীবাশ্ম","আমাদের জীবনে রসায়ন"],"জীববিজ্ঞান (Biology)":["জীবনপাঠ","জীবকোষ ও টিস্যু","কোষ বিভাজন","জীবনীশক্তি","খাদ্য, পুষ্টি এবং পরিপাক","জীবে পরিবহন","গ্যাসীয় বিনিময়","রেচন প্রক্রিয়া","দৃঢ়তা প্রদান ও চলন","সমন্বয়","জীবের প্রজনন","জীবের বংশগতি ও বিবর্তন","জীবের পরিবেশ","জীবপ্রযুক্তি"],"তথ্য ও যোগাযোগ প্রযুক্তি (ICT)":["তথ্য ও যোগাযোগ প্রযুক্তি এবং আমাদের বাংলাদেশ","কম্পিউটার রক্ষণাবেক্ষণ ও সাইবার নিরাপত্তা","ইন্টারনেট ও ওয়েব পরিচিতি","আমার লেখালেখি ও হিসাব","মাল্টিমিডিয়া ও গ্রাফিক্স","প্রোগ্রামিংয়ের মাধ্যমে সমস্যা সমাধান"]},wx={"উচ্চতর গণিত ১ম পত্র":["ম্যাট্রিক্স ও নির্ণায়ক","ভেক্টর","সরলরেখা","বৃত্ত","বিন্যাস ও সমাবেশ","ত্রিকোণমিতিক অনুপাত","সংযুক্ত কোণের ত্রিকোণমিতিক অনুপাত","ফাংশন ও ফাংশনের লেখচিত্র","অন্তরীকরণ","যোগজীকরণ"],"উচ্চতর গণিত ২য় পত্র":["বাস্তব সংখ্যা ও অসমতা","যোগাশ্রয়ী প্রোগ্রাম","জটিল সংখ্যা","বহুপদী ও বহুপদী সমীকরণ","দ্বিপদী বিস্তৃতি","কণিক","বিপরীত ত্রিকোণমিতিক ফাংশন ও ত্রিকোণমিতিক সমীকরণ","স্থিতিবিদ্যা","সমতলে বস্তুকণার গতি","বিস্তার, পরিমাপ ও সম্ভাবনা"],"রসায়ন ১ম পত্র":["ল্যাবরেটরির নিরাপদ ব্যবহার","গুণগত রসায়ন","মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন","রাসায়নিক পরিবর্তন","কর্মমুখী রসায়ন"],"রসায়ন ২য় পত্র":["পরিবেশ রসায়ন","জৈব রসায়ন","পরিমাণগত রসায়ন","তড়িৎ রসায়ন","অর্থনৈতিক রসায়ন"],"জীববিজ্ঞান ১ম পত্র":["কোষ ও এর গঠন","কোষ বিভাজন","কোষ রসায়ন","অণুজীব","শৈবাল ও ছত্রাক","ব্রায়োফাইটা ও টেরেডোফাইটা","নগ্নবীজী ও আবৃতবীজী উদ্ভিদ","টিস্যু ও টিস্যুতন্ত্র","উদ্ভিদ শারীরতত্ত্ব","উদ্ভিদ প্রজনন","জীবপ্রযুক্তি"],"জীববিজ্ঞান ২য় পত্র":["প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস","প্রাণীর পরিচিতি","পরিপাক ও শোষণ","রক্ত সঞ্চালন","শ্বাসক্রিয়া ও শ্বসন","বর্জ্য ও নিষ্কাশন","চলন ও অঙ্গচালনা","সমন্বয় ও নিয়ন্ত্রণ","মানব জীবনের ধারাবাহিকতা","মানবদেহের প্রতিরক্ষা","জীনতত্ত্ব ও বিবর্তন"],"পদার্থবিজ্ঞান ১ম পত্র":["ভৌত জগত ও পরিমাপ","ভেক্টর","গতি বিদ্যা","নিউটনীয় বলবিদ্যা","কাজ, শক্তি ও ক্ষমতা","মহাকর্ষ ও অভিকর্ষ","পদার্থের গাঠনিক ধর্ম","পর্যায়বৃত্ত গতি","তরঙ্গ","আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব"],"পদার্থবিজ্ঞান ২য় পত্র":["তাপগতিবিদ্যা","স্থির তড়িৎ","চল তড়িৎ","তড়িৎ প্রবাহের চৌম্বক ক্রিয়া ও চুম্বকত্ব","তড়িৎ চৌম্বক আবেশ ও পরবর্তী প্রবাহ","জ্যামিতিক আলোকবিজ্ঞান","ভৌত আলোকবিজ্ঞান","আধুনিক পদার্থবিজ্ঞান","পরমাণুর গঠন ও নিউক্লিয়ার পদার্থবিজ্ঞান","সেমিকন্ডাক্টর ও ইলেকট্রনিকস"]},pc={"গণিত (General Math)":{color:"from-blue-500 to-blue-600",icon:"📐"},"উচ্চতর গণিত (Higher Math)":{color:"from-indigo-500 to-purple-600",icon:"∫dx"},"পদার্থবিজ্ঞান (Physics)":{color:"from-purple-500 to-pink-600",icon:"⚛️"},"রসায়ন (Chemistry)":{color:"from-yellow-400 to-orange-500",icon:"🧪"},"জীববিজ্ঞান (Biology)":{color:"from-green-500 to-emerald-600",icon:"🧬"},"তথ্য ও যোগাযোগ প্রযুক্তি (ICT)":{color:"from-cyan-500 to-blue-500",icon:"💻"},"উচ্চতর গণিত ১ম পত্র":{color:"from-indigo-500 to-blue-600",icon:"∫dx"},"উচ্চতর গণিত ২য় পত্র":{color:"from-indigo-600 to-purple-600",icon:"∑"},"রসায়ন ১ম পত্র":{color:"from-yellow-400 to-orange-500",icon:"🧪"},"রসায়ন ২য় পত্র":{color:"from-orange-400 to-red-500",icon:"⚗️"},"জীববিজ্ঞান ১ম পত্র":{color:"from-green-500 to-emerald-600",icon:"🌿"},"জীববিজ্ঞান ২য় পত্র":{color:"from-emerald-500 to-teal-600",icon:"🧬"},"পদার্থবিজ্ঞান ১ম পত্র":{color:"from-purple-500 to-pink-500",icon:"⚛️"},"পদার্থবিজ্ঞান ২য় পত্র":{color:"from-purple-600 to-pink-600",icon:"⚡"}};let ad=[];const Gp="quiz_attempts",qt=n=>n==null?"":typeof n=="string"?n.trim():typeof n=="number"?String(n):typeof n=="object"?(n.text||n.value||JSON.stringify(n)).trim():String(n).trim(),yf=n=>{if(n==null||n==="")return!1;const e=Number(n);return!isNaN(e)},kM=async()=>{try{const e=(await hs.collection("quizzes").get()).docs.map(t=>{const r=t.data(),i=(r.questions||[]).map(c=>{const h=(c.options||[]).map(m=>qt(m));let f=-1;if(yf(c.correctAnswerIndex))f=Number(c.correctAnswerIndex);else if(c.correctAnswer){const m=qt(c.correctAnswer);if(f=h.findIndex(v=>v===m),f===-1&&yf(m)&&(f=Number(m)),f===-1){const v=m.match(/Option\s?(\d+)/i);v&&(f=parseInt(v[1])-1)}}else if(c.answer){const m=qt(c.answer);f=h.findIndex(v=>v===m)}return{id:c.id||Math.random().toString(36).substr(2,9),text:qt(c.text),imageUrl:c.imageUrl,options:h,correctAnswerIndex:f}});let s=qt(r.title),o=qt(r.subject),a=qt(r.category).toUpperCase(),u=qt(r.chapter);if(i.length>0&&r.questions&&r.questions.length>0){const c=r.questions[0];!s&&c.title&&(s=qt(c.title)),!o&&c.subject&&(o=qt(c.subject)),!u&&c.chapter&&(u=qt(c.chapter)),(!a||a!=="SSC"&&a!=="HSC")&&c.category&&(a=qt(c.category).toUpperCase())}if(!a||a!=="SSC"&&a!=="HSC"){const c=Object.keys(wx).some(f=>f===o),h=s.toUpperCase().includes("HSC");c||h?a="HSC":a="SSC"}return{id:t.id,title:s||"Untitled Quiz",description:qt(r.description),category:a,subject:o,chapter:u,isNew:!!r.isNew,createdAt:r.createdAt,durationSeconds:yf(r.durationSeconds)?Number(r.durationSeconds):60,questions:i}});return ad=e,e}catch(n){return console.error("Error fetching quizzes from Firestore:",n),[]}},NM=async()=>ad.length>0?ad:await kM(),Ix=n=>ad.find(e=>e.id===n),DM=async n=>{const e=localStorage.getItem(Gp),t=e?JSON.parse(e):[];t.push(n),localStorage.setItem(Gp,JSON.stringify(t));try{const{id:r,...i}=n;await hs.collection("attempts").add({...i,timestamp:Date.now()})}catch(r){console.error("Error saving attempt to Firestore:",r)}},VM=n=>{const e=localStorage.getItem(Gp);return(e?JSON.parse(e):[]).filter(r=>r.userId===n).sort((r,i)=>i.timestamp-r.timestamp)},Ex=async n=>{try{return(await hs.collection("attempts").where("userId","==",n).get()).docs.map(r=>{const i=r.data();return{id:r.id,...i}}).sort((r,i)=>i.timestamp-r.timestamp)}catch(e){return console.error("Error fetching user attempts from Firestore:",e),VM(n)}},OM=async()=>{try{return(await hs.collection("attempts").orderBy("score","desc").limit(100).get()).docs.map(t=>({id:t.id,...t.data()})).sort((t,r)=>r.score!==t.score?r.score-t.score:t.timeTakenSeconds-r.timeTakenSeconds)}catch(n){return console.error("Error fetching global leaderboard:",n),[]}},LM=async n=>{try{return(await hs.collection("attempts").where("quizId","==",n).get()).docs.map(r=>({id:r.id,...r.data()})).sort((r,i)=>i.score!==r.score?i.score-r.score:r.timeTakenSeconds-i.timeTakenSeconds)}catch(e){return console.error("Error fetching quiz leaderboard:",e),[]}},Rr=n=>n?n.toString().normalize("NFC").trim().replace(/\s+/g,"").replace(/[\u200B-\u200D\uFEFF]/g,"").toLowerCase():"",MM=({user:n,onStartQuiz:e,onNavigate:t,onLogout:r,onViewResults:i,onOpenLeaderboard:s})=>{const[o,a]=ne.useState("NEW"),[u,c]=ne.useState("SSC"),[h,f]=ne.useState(null),[m,v]=ne.useState(null),[P,b]=ne.useState([]),[V,S]=ne.useState([]),[,w]=ne.useState(!0);ne.useEffect(()=>{(async()=>{w(!0);try{const[T,de]=await Promise.all([NM(),Ex(n.uid)]);b(T),S(de)}catch(T){console.error("Failed to load dashboard data",T)}finally{w(!1)}})()},[n.uid]);let A=P.filter(R=>(R.category?R.category.toUpperCase():"SSC")===u);if(h){const R=Rr(h);A=A.filter(T=>{const de=Rr(T.subject);return de===R||de.length>3&&R.includes(de)||R.length>3&&de.includes(R)||T.title&&Rr(T.title).includes(R)})}if(m){const R=Rr(m);A=A.filter(T=>{const de=Rr(T.chapter);return de===R||de.length>3&&R.includes(de)||R.length>3&&de.includes(R)||T.title&&Rr(T.title).includes(R)})}const N=new Set(V.map(R=>R.quizId)),M=A.filter(R=>!N.has(R.id)),F=A.filter(R=>N.has(R.id)),E=V.reduce((R,T)=>R+T.score,0),_=V.length,I=u==="SSC"?bM:wx,x=R=>{f(R),v(null),a("NEW")},C=()=>{f(null),v(null)};return g.jsxs("div",{className:"min-h-screen bg-[#FDFBF7] pb-10 font-sans animate-fade-in",children:[g.jsxs("div",{className:"relative bg-gradient-to-br from-[#0f5132] via-[#1CAB55] to-[#0E7034] text-white rounded-b-[2rem] md:rounded-b-[4rem] shadow-xl mb-8 md:mb-10 overflow-hidden pb-6 md:pb-8 transition-all duration-500",children:[g.jsxs("div",{className:"absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none",children:[g.jsx("div",{className:"absolute top-[-20%] right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-white opacity-[0.05] rounded-full blur-[60px] md:blur-[80px]"}),g.jsx("div",{className:"absolute bottom-[-20%] left-[-10%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#dcfce7] opacity-[0.1] rounded-full blur-[80px] md:blur-[100px]"}),g.jsx("div",{className:"absolute top-[20%] left-[20%] w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-yellow-400 opacity-[0.15] rounded-full blur-[50px] md:blur-[60px]"}),g.jsx("div",{className:"absolute inset-0 opacity-[0.07]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}})]}),g.jsxs("div",{className:"max-w-5xl mx-auto px-4 md:px-8 pt-5 md:pt-8 relative z-10",children:[g.jsxs("div",{className:"flex justify-between items-center mb-6 md:mb-12",children:[g.jsxs("div",{className:"flex items-center gap-2 md:gap-3",children:[g.jsx("div",{className:"w-8 h-8 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-lg md:rounded-xl flex items-center justify-center border border-white/30 shadow-inner",children:g.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2.5,children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),g.jsxs("div",{children:[g.jsx("h1",{className:"font-bold text-lg md:text-2xl tracking-tight leading-none text-white",children:"কুইজ মেশিন"}),g.jsx("p",{className:"text-[9px] md:text-xs text-green-100 font-medium tracking-widest uppercase opacity-90",children:"Science Noob"})]})]}),g.jsxs("button",{onClick:r,className:"flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md transition-all text-xs md:text-sm font-medium hover:shadow-lg active:scale-95 group text-white",children:[g.jsx("span",{children:"লগ আউট"}),g.jsx("svg",{className:"w-3.5 h-3.5 md:w-4 md:h-4 opacity-70 group-hover:opacity-100 transition-opacity",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})]})]}),g.jsxs("div",{className:"flex flex-col md:flex-row gap-5 md:gap-12 items-start",children:[g.jsxs("div",{className:"flex-1 w-full",children:[g.jsxs("div",{className:"flex flex-row items-center gap-4 md:gap-6 mb-4 md:mb-6",children:[g.jsxs("div",{className:"relative shrink-0",children:[g.jsx("div",{className:"absolute inset-0 bg-yellow-400 blur-md rounded-full opacity-40"}),g.jsxs("div",{className:"relative w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-yellow-300 to-yellow-500 p-[3px] shadow-xl",children:[g.jsx("div",{className:"w-full h-full rounded-full bg-white border-2 md:border-4 border-[#1CAB55] flex items-center justify-center overflow-hidden",children:g.jsx("span",{className:"text-2xl md:text-4xl font-bold text-[#1CAB55]",children:n.displayName?n.displayName.charAt(0):"U"})}),g.jsx("div",{className:"absolute bottom-0 right-0 bg-[#1CAB55] border-2 border-white rounded-full p-1 shadow-md",children:g.jsx("svg",{className:"w-2.5 h-2.5 md:w-3 md:h-3 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M5 13l4 4L19 7"})})})]})]}),g.jsxs("div",{className:"flex-1 min-w-0 text-left",children:[g.jsx("div",{className:"flex items-center gap-2 mb-1",children:g.jsxs("div",{className:"inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm",children:[g.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-400"}),g.jsx("span",{className:"text-[10px] font-bold text-green-100 tracking-wide uppercase",children:"অনলাইন"})]})}),g.jsx("h2",{className:"text-2xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-sm truncate leading-tight",children:n.displayName||"বন্ধুবর"}),g.jsx("p",{className:"text-green-100 text-xs md:text-lg leading-tight opacity-90 truncate",children:"নতুন কিছু শেখার এখনই সময়!"})]})]}),g.jsx("div",{className:"md:pt-2 w-full md:w-auto",children:g.jsxs("button",{onClick:()=>t("LEADERBOARD"),className:"w-full md:w-auto bg-white/10 border border-white/20 hover:bg-white/20 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-xl font-bold text-sm md:text-base shadow-sm hover:shadow-lg transition-all flex items-center justify-center md:justify-start gap-2",children:[g.jsx("span",{className:"text-base md:text-xl",children:"🏆"})," লিডারবোর্ড দেখুন"]})})]}),g.jsx("div",{className:"w-full md:w-auto flex-shrink-0",children:g.jsxs("div",{className:"bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-8 flex flex-row md:flex-col justify-between md:justify-start gap-4 md:gap-8 shadow-xl relative overflow-hidden",children:[g.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white opacity-[0.05] rounded-full -mr-10 -mt-10 blur-xl"}),g.jsxs("div",{className:"flex-1 flex items-center gap-3 group",children:[g.jsx("div",{className:"w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center text-white shadow-lg",children:g.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),g.jsxs("div",{children:[g.jsx("div",{className:"text-2xl md:text-4xl font-bold text-white leading-none",children:_}),g.jsx("div",{className:"text-[10px] md:text-sm text-green-100 font-medium uppercase tracking-wider opacity-80 mt-0.5",children:"কুইজ"})]})]}),g.jsx("div",{className:"w-px h-10 bg-white/10 md:w-full md:h-px self-center"}),g.jsxs("div",{className:"flex-1 flex items-center gap-3 group",children:[g.jsx("div",{className:"w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center text-white shadow-lg",children:g.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),g.jsxs("div",{children:[g.jsx("div",{className:"text-2xl md:text-4xl font-bold text-white leading-none",children:E}),g.jsx("div",{className:"text-[10px] md:text-sm text-green-100 font-medium uppercase tracking-wider opacity-80 mt-0.5",children:"স্কোর"})]})]})]})})]})]})]}),g.jsxs("div",{className:"max-w-5xl mx-auto px-4",children:[!h&&g.jsxs("div",{className:"flex justify-center gap-4 mb-8",children:[g.jsx("button",{onClick:()=>{c("SSC"),f(null)},className:`flex-1 max-w-[140px] py-3 rounded-xl font-bold text-base transition-all duration-300 transform border-2 ${u==="SSC"?"bg-[#1CAB55] border-[#1CAB55] text-white shadow-lg shadow-green-200 scale-105":"bg-white border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-100"}`,children:"SSC"}),g.jsx("button",{onClick:()=>{c("HSC"),f(null)},className:`flex-1 max-w-[140px] py-3 rounded-xl font-bold text-base transition-all duration-300 transform border-2 ${u==="HSC"?"bg-[#1CAB55] border-[#1CAB55] text-white shadow-lg shadow-green-200 scale-105":"bg-white border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-100"}`,children:"HSC"})]}),!h&&g.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in-up",children:Object.keys(I).map((R,T)=>{const de=pc[R]||{color:"from-gray-500 to-gray-600",icon:"📚"};return g.jsxs("div",{onClick:()=>x(R),className:"cursor-pointer bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 group relative overflow-hidden",children:[g.jsx("div",{className:`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${de.color} opacity-10 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:scale-110`}),g.jsxs("div",{className:"relative z-10 flex flex-col items-center text-center",children:[g.jsx("div",{className:`w-14 h-14 rounded-full bg-gradient-to-br ${de.color} text-white flex items-center justify-center text-2xl shadow-lg mb-4 group-hover:rotate-12 transition-transform`,children:de.icon}),g.jsx("h3",{className:"font-bold text-gray-800 text-sm md:text-base leading-tight group-hover:text-[#1CAB55] transition-colors",children:R}),g.jsxs("span",{className:"text-xs text-gray-400 mt-2",children:[I[R].length," অধ্যায়"]})]})]},T)})}),h&&g.jsxs("div",{className:"animate-fade-in",children:[g.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[g.jsx("button",{onClick:C,className:"p-2 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-sm text-gray-600",children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:g.jsx("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"})})}),g.jsxs("div",{children:[g.jsx("h2",{className:"text-xl font-bold text-gray-800",children:h}),g.jsx("p",{className:"text-xs text-gray-500",children:"অধ্যায় নির্বাচন করুন"})]})]}),g.jsxs("div",{className:"flex overflow-x-auto pb-4 gap-2 mb-6 scrollbar-hide",children:[g.jsx("button",{onClick:()=>v(null),className:`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all border ${m?"bg-white text-gray-600 border-gray-200 hover:bg-gray-50":"bg-[#1a1a1a] text-white border-[#1a1a1a] shadow-md"}`,children:"সব অধ্যায়"}),I[h]&&I[h].map((R,T)=>g.jsxs("button",{onClick:()=>v(R),className:`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all border ${m===R?"bg-[#1CAB55] text-white border-[#1CAB55] shadow-md":"bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`,children:[T+1,". ",R]},T))]}),g.jsxs("div",{className:"flex justify-center mb-8 bg-white p-1 rounded-full shadow-sm max-w-xs mx-auto border border-gray-100",children:[g.jsxs("button",{onClick:()=>a("NEW"),className:`flex-1 py-2 rounded-full font-bold text-xs transition-all ${o==="NEW"?"bg-[#1a1a1a] text-white shadow-md":"text-gray-500 hover:bg-gray-50"}`,children:["নতুন 🔥 (",M.length,")"]}),g.jsxs("button",{onClick:()=>a("OLD"),className:`flex-1 py-2 rounded-full font-bold text-xs transition-all ${o==="OLD"?"bg-[#1a1a1a] text-white shadow-md":"text-gray-500 hover:bg-gray-50"}`,children:["আগের 📜 (",F.length,")"]})]}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:o==="NEW"?M.length>0?M.map((R,T)=>g.jsx(FM,{quiz:R,index:T,onStart:()=>e(R.id),onLeaderboard:()=>s(R.id)},R.id)):g.jsx(_0,{message:"এই অধ্যায়ে নতুন কোনো কুইজ নেই।"}):F.length>0?F.map(R=>{const T=V.find(de=>de.quizId===R.id);return g.jsx(jM,{quiz:R,attempt:T,onStart:()=>e(R.id),onViewResults:()=>T&&i(T,R),onLeaderboard:()=>s(R.id)},R.id)}):g.jsx(_0,{message:"আপনি এই অধ্যায়ে কোনো কুইজ দেননি।"})})]})]})]})},FM=({quiz:n,index:e,onStart:t,onLeaderboard:r})=>{let i=pc[n.subject];if(!i&&n.subject){const s=Rr(n.subject),o=Object.keys(pc).find(a=>{const u=Rr(a);return u.includes(s)||s.includes(u)});o&&(i=pc[o])}return i||(i={color:e%2===0?"from-[#1CAB55] to-[#159f4d]":"from-[#FF6B6B] to-[#EE5253]",icon:"📝"}),g.jsxs("div",{className:"group relative bg-white rounded-3xl p-5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all border border-gray-100 overflow-hidden hover:-translate-y-1",children:[g.jsxs("div",{className:"flex justify-between items-start mb-4",children:[g.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${i.color}`,children:g.jsx("span",{className:"text-2xl filter drop-shadow-md",children:i.icon})}),g.jsxs("div",{className:"flex gap-2",children:[g.jsx("button",{onClick:s=>{s.stopPropagation(),r()},className:"bg-yellow-100 text-yellow-700 p-2 rounded-lg text-xs hover:bg-yellow-200 transition-colors",title:"লিডারবোর্ড",children:"🏆"}),g.jsx("span",{className:"bg-orange-50 text-orange-600 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase",children:"NEW"})]})]}),g.jsxs("div",{onClick:t,className:"cursor-pointer",children:[g.jsx("h3",{className:"text-lg font-bold text-gray-800 mb-1 leading-snug",children:n.title}),n.chapter&&g.jsx("span",{className:"inline-block px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] rounded-md mb-2 font-medium",children:n.chapter}),g.jsx("p",{className:"text-gray-500 text-sm line-clamp-2 h-10 leading-relaxed",children:n.description})]}),g.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-100 mt-4",children:[g.jsxs("div",{className:"text-xs text-gray-500 font-semibold",children:[n.questions.length," প্রশ্ন • ",Math.ceil(n.durationSeconds/60)," মি:"]}),g.jsx("button",{onClick:t,className:"w-8 h-8 rounded-full bg-[#1CAB55] text-white flex items-center justify-center shadow-md hover:bg-[#169448] transition-colors",children:"▶"})]})]})},jM=({quiz:n,attempt:e,onStart:t,onViewResults:r,onLeaderboard:i})=>g.jsxs("div",{className:"bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all border border-gray-100 relative",children:[g.jsxs("div",{className:"flex justify-between items-start mb-2",children:[g.jsx("h3",{className:"text-lg font-bold text-gray-800",children:n.title}),e&&g.jsxs("div",{className:"text-right",children:[g.jsxs("span",{className:"block text-xl font-bold text-[#1CAB55]",children:[e.score,"/",n.questions.length]}),g.jsx("span",{className:"text-[9px] text-gray-400 font-bold uppercase",children:"স্কোর"})]})]}),g.jsxs("div",{className:"flex gap-2 mt-4",children:[g.jsx(nr,{onClick:t,className:"text-xs py-1.5 px-3",children:"আবার দিন"}),g.jsx(nr,{variant:"outline",onClick:r,className:"text-xs py-1.5 px-3",children:"উত্তর দেখুন"}),g.jsx("button",{onClick:i,className:"bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-lg text-xs hover:bg-yellow-200 transition-colors",title:"লিডারবোর্ড",children:"🏆"})]})]}),_0=({message:n})=>g.jsxs("div",{className:"col-span-full py-16 text-center",children:[g.jsx("div",{className:"w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl",children:"📂"}),g.jsx("p",{className:"text-gray-500",children:n})]}),UM=({quiz:n,userId:e,userEmail:t,userName:r,onComplete:i,onCancel:s})=>{const[o,a]=ne.useState(0),[u,c]=ne.useState(new Array(n.questions.length).fill(-1)),h=Number(n.durationSeconds)||60,[f,m]=ne.useState(h),[v,P]=ne.useState(!1),b=N=>{if(isNaN(N))return"0:00";const M=Math.floor(N/60),F=N%60;return`${M}:${F<10?"0":""}${F}`},V=ne.useCallback(()=>{if(v)return;P(!0);let N=0;u.forEach((E,_)=>{const I=Number(n.questions[_].correctAnswerIndex);E===I&&N++});const M=h-f,F={id:Date.now().toString(),userId:e,userEmail:t,userName:r||t,quizId:n.id,quizTitle:n.title,score:N,totalQuestions:n.questions.length,timeTakenSeconds:M,timestamp:Date.now(),answers:u};DM(F),i(F)},[v,u,n,f,e,t,r,i,h]);ne.useEffect(()=>{if(f<=0){V();return}const N=setInterval(()=>{m(M=>M-1)},1e3);return()=>clearInterval(N)},[f,V]);const S=N=>{const M=[...u];M[o]=N,c(M)},w=n.questions[o],A=N=>typeof N=="object"&&N!==null?N.text||N.value||"":N;return g.jsxs("div",{className:"max-w-3xl mx-auto p-4 pt-8 animate-fade-in",children:[g.jsxs("div",{className:"flex justify-between items-center bg-white p-4 rounded-xl shadow-md mb-6 sticky top-4 z-20 border-b-2 border-[#1CAB55]",children:[g.jsxs("div",{children:[g.jsx("h2",{className:"text-lg font-bold text-gray-800",children:n.title}),g.jsxs("span",{className:"text-sm text-gray-500",children:["প্রশ্ন: ",o+1," / ",n.questions.length]})]}),g.jsx("div",{className:`text-xl font-mono font-bold px-4 py-2 rounded-lg ${f<10?"bg-red-100 text-red-600":"bg-green-100 text-[#1CAB55]"}`,children:b(f)})]}),g.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-6 md:p-8 min-h-[400px] flex flex-col",children:[g.jsx("h3",{className:"text-2xl font-semibold text-gray-800 mb-6",children:A(w.text)}),w.imageUrl&&g.jsx("div",{className:"mb-6 rounded-lg overflow-hidden border border-gray-200",children:g.jsx("img",{src:w.imageUrl,alt:"Question Visual",className:"w-full h-64 object-cover"})}),g.jsx("div",{className:"space-y-3 flex-grow",children:w.options.map((N,M)=>g.jsx("button",{onClick:()=>S(M),className:`w-full text-left p-4 rounded-lg border-2 transition-all ${u[o]===M?"border-[#1CAB55] bg-green-50 text-[#1CAB55] font-semibold":"border-gray-200 hover:bg-gray-50 text-gray-700"}`,children:g.jsxs("div",{className:"flex items-center",children:[g.jsx("div",{className:`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${u[o]===M?"border-[#1CAB55]":"border-gray-300"}`,children:u[o]===M&&g.jsx("div",{className:"w-3 h-3 rounded-full bg-[#1CAB55]"})}),A(N)]})},M))}),g.jsxs("div",{className:"flex justify-between mt-8 pt-4 border-t border-gray-100",children:[g.jsx(nr,{variant:"outline",onClick:()=>a(N=>Math.max(0,N-1)),disabled:o===0,className:"disabled:opacity-50",children:"আগের"}),o===n.questions.length-1?g.jsx(nr,{variant:"danger",onClick:V,children:"জমা দিন (Submit)"}):g.jsx(nr,{onClick:()=>a(N=>Math.min(n.questions.length-1,N+1)),children:"পরের"})]})]}),g.jsx("div",{className:"mt-4 text-center",children:g.jsx("button",{onClick:s,className:"text-gray-500 hover:text-red-500 underline text-sm",children:"কুইজ বাতিল করুন"})})]})},BM=({attempt:n,quiz:e,onHome:t,onRetry:r})=>{const[i,s]=ne.useState(0),[o,a]=ne.useState(!1),u=Math.round(n.score/n.totalQuestions*100);let c="",h="";u>=80?(c="অসাধারণ! আপনি দারুণ করেছেন!",h="text-green-600"):u>=50?(c="ভালো হয়েছে, তবে আরও ভালো করা সম্ভব।",h="text-[#1CAB55]"):(c="হতাশ হবেন না, আবার চেষ্টা করুন!",h="text-[#8B0000]"),ne.useEffect(()=>{if(a(!0),n.score===0)return;let m=0;const v=n.score,b=Math.max(1e3/v,50),V=setInterval(()=>{m+=1,s(m),m>=v&&clearInterval(V)},b);return()=>clearInterval(V)},[n.score]);const f=m=>typeof m=="object"&&m!==null?m.text||m.value||"":m;return g.jsx("div",{className:"min-h-screen bg-brand-cream py-10 px-4 transition-opacity duration-700 ease-in-out",style:{opacity:o?1:0},children:g.jsxs("div",{className:"max-w-3xl mx-auto",children:[g.jsxs("div",{className:`bg-white rounded-2xl shadow-xl p-8 text-center mb-8 border-t-8 border-[#1CAB55] transform transition-all duration-700 ${o?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:[g.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-2",children:"কুইজ ফলাফল"}),g.jsx("p",{className:"text-gray-500 mb-6",children:e.title}),g.jsxs("div",{className:"flex flex-col md:flex-row justify-center items-center gap-8 mb-8",children:[g.jsxs("div",{className:"relative",children:[g.jsxs("div",{className:"w-40 h-40 rounded-full border-8 border-[#1CAB55] flex flex-col justify-center items-center bg-green-50 animate-pulse",children:[g.jsxs("span",{className:"text-5xl font-bold text-[#1CAB55] transition-all",children:[i,g.jsxs("span",{className:"text-2xl text-gray-400",children:["/",n.totalQuestions]})]}),g.jsx("span",{className:"text-xs text-gray-400 mt-1 uppercase tracking-widest",children:"স্কোর"})]}),u>=80&&g.jsx("div",{className:"absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce",children:"চমৎকার!"})]}),g.jsxs("div",{className:"text-left space-y-2",children:[g.jsxs("div",{className:"bg-gray-50 p-4 rounded-xl border border-gray-100 min-w-[200px]",children:[g.jsx("p",{className:"text-gray-500 text-sm",children:"সময় লেগেছে"}),g.jsxs("p",{className:"text-xl font-bold text-gray-800",children:[n.timeTakenSeconds," সেকেন্ড"]})]}),g.jsxs("div",{className:"bg-gray-50 p-4 rounded-xl border border-gray-100 min-w-[200px]",children:[g.jsx("p",{className:"text-gray-500 text-sm",children:"সাফল্য"}),g.jsxs("p",{className:`text-xl font-bold ${u>=50?"text-green-600":"text-red-500"}`,children:[u,"%"]})]})]})]}),g.jsx("p",{className:`text-xl font-bold mb-8 ${h} animate-[bounce_2s_infinite]`,children:c}),g.jsxs("div",{className:"flex justify-center gap-4",children:[g.jsx(nr,{onClick:t,variant:"secondary",children:"ড্যাশবোর্ড"}),g.jsx(nr,{onClick:r,children:"আবার চেষ্টা করুন"})]})]}),g.jsxs("div",{className:`space-y-6 transition-all duration-1000 delay-300 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,children:[g.jsx("h3",{className:"text-xl font-bold text-gray-700 pl-2 border-l-4 border-[#8B0000]",children:"উত্তরপত্র মিলিয়ে নিন"}),e.questions.map((m,v)=>g.jsx("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow",children:g.jsxs("div",{className:"flex gap-3",children:[g.jsxs("span",{className:"font-bold text-gray-400",children:["#",v+1]}),g.jsxs("div",{className:"flex-1",children:[g.jsx("p",{className:"font-semibold text-lg mb-3 text-gray-800",children:f(m.text)}),m.imageUrl&&g.jsx("img",{src:m.imageUrl,className:"w-full h-48 object-cover rounded-md mb-3",alt:"Context"}),g.jsx("div",{className:"space-y-2",children:m.options.map((P,b)=>{const V=Number(m.correctAnswerIndex),S=b===V;return g.jsxs("div",{className:`p-3 rounded border flex justify-between items-center ${S?"bg-green-100 border-green-500 text-green-900 font-medium":"bg-white border-gray-200 text-gray-500"}`,children:[g.jsx("span",{children:f(P)}),S&&g.jsx("span",{className:"text-green-600 text-xl font-bold",children:"✓"})]},b)})})]})]})},m.id))]})]})})},zM=({view:n,onSwitch:e,onSuccess:t,onBack:r})=>{const[i,s]=ne.useState(""),[o,a]=ne.useState(""),[u,c]=ne.useState(""),[h,f]=ne.useState(""),[m,v]=ne.useState(""),[P,b]=ne.useState(""),[V,S]=ne.useState(!1),w=async _=>{_.preventDefault(),b(""),S(!0);try{if(n==="SIGNUP"){const I=await od.createUserWithEmailAndPassword(i,o);I.user&&(await I.user.updateProfile({displayName:u}),await hs.collection("users").doc(I.user.uid).set({fullName:u,username:h,phone:m,email:i,createdAt:new Date,uid:I.user.uid}))}else await od.signInWithEmailAndPassword(i,o);t()}catch(I){console.error(I);let x="ত্রুটি হয়েছে: "+I.message;I.code==="auth/wrong-password"?x="ভুল পাসওয়ার্ড। আবার চেষ্টা করুন।":I.code==="auth/user-not-found"?x="এই ইমেইলে কোনো অ্যাকাউন্ট পাওয়া যায়নি।":I.code==="auth/email-already-in-use"?x="এই ইমেইলটি ইতিমধ্যেই ব্যবহার করা হয়েছে।":I.code==="auth/weak-password"?x="পাসওয়ার্ডটি খুব দুর্বল (অন্তত ৬ অক্ষর হতে হবে)।":I.code==="auth/invalid-email"&&(x="ইমেইল ঠিকানাটি সঠিক নয়।"),b(x)}finally{S(!1)}},A=()=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),N=()=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"})}),M=()=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),F=()=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),E=()=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})});return g.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-[#FDFBF7] px-4 py-12 relative overflow-hidden animate-fade-in",children:[g.jsx("div",{className:"absolute top-0 left-0 w-64 h-64 bg-[#1CAB55] opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"}),g.jsx("div",{className:"absolute bottom-0 right-0 w-96 h-96 bg-[#8B0000] opacity-5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse",style:{animationDelay:"1s"}}),g.jsxs("button",{onClick:r,className:"absolute top-6 left-6 flex items-center gap-2 text-gray-500 hover:text-[#1CAB55] transition-colors font-medium z-20 group",children:[g.jsx("div",{className:"bg-white p-2 rounded-full shadow-sm group-hover:shadow-md transition-all",children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 transform group-hover:-translate-x-1 transition-transform",viewBox:"0 0 20 20",fill:"currentColor",children:g.jsx("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"})})}),g.jsx("span",{className:"hidden sm:inline",children:"ফিরে যান"})]}),g.jsxs("div",{className:"bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] w-full max-w-md relative z-10 overflow-hidden transition-all duration-500",children:[g.jsx("div",{className:"p-2",children:g.jsxs("div",{className:"flex bg-gray-100/80 p-1.5 rounded-2xl relative",children:[g.jsx("div",{className:`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-xl shadow-md transition-all duration-300 ease-spring ${n==="LOGIN"?"left-1.5":"left-[calc(50%+3px)]"}`}),g.jsx("button",{onClick:n==="SIGNUP"?e:void 0,className:`flex-1 py-3 text-center rounded-xl font-bold text-sm relative z-10 transition-colors duration-300 ${n==="LOGIN"?"text-[#1CAB55]":"text-gray-500 hover:text-gray-700"}`,children:"লগইন"}),g.jsx("button",{onClick:n==="LOGIN"?e:void 0,className:`flex-1 py-3 text-center rounded-xl font-bold text-sm relative z-10 transition-colors duration-300 ${n==="SIGNUP"?"text-[#1CAB55]":"text-gray-500 hover:text-gray-700"}`,children:"সাইন আপ"})]})}),g.jsxs("div",{className:"px-8 pb-8 pt-4",children:[g.jsxs("div",{className:"text-center mb-8 transition-all duration-300",children:[g.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-2 tracking-tight",children:n==="LOGIN"?"স্বাগতম!":"নতুন প্রোফাইল"}),g.jsx("p",{className:"text-sm text-gray-500",children:n==="LOGIN"?"আপনার কুইজ জার্নি শুরু করতে লগইন করুন":"কুইজ মেশিনে যুক্ত হতে তথ্য দিন"})]}),P&&g.jsxs("div",{className:"bg-red-50 border-l-4 border-[#8B0000] text-red-700 p-4 rounded-lg mb-6 text-sm flex items-start gap-2 animate-shake",children:[g.jsx("span",{children:"⚠️"})," ",g.jsx("span",{children:P})]}),g.jsxs("form",{onSubmit:w,className:"flex flex-col gap-4",children:[g.jsxs("div",{className:`flex flex-col gap-4 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${n==="SIGNUP"?"max-h-[300px] opacity-100 scale-100":"max-h-0 opacity-0 scale-95"}`,children:[g.jsxs("div",{className:"relative group",children:[g.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#1CAB55] transition-colors",children:g.jsx(A,{})}),g.jsx("input",{type:"text",required:n==="SIGNUP",placeholder:"আপনার পুরো নাম",className:"w-full pl-12 pr-4 py-3.5 bg-gray-50 text-gray-800 placeholder-gray-400 rounded-xl border border-gray-200 focus:bg-white focus:border-[#1CAB55] focus:ring-4 focus:ring-[#1CAB55]/10 focus:outline-none transition-all duration-200 font-medium",value:u,onChange:_=>c(_.target.value)})]}),g.jsxs("div",{className:"relative group",children:[g.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#1CAB55] transition-colors",children:g.jsx(N,{})}),g.jsx("input",{type:"text",required:n==="SIGNUP",placeholder:"ইউজারনেম",className:"w-full pl-12 pr-4 py-3.5 bg-gray-50 text-gray-800 placeholder-gray-400 rounded-xl border border-gray-200 focus:bg-white focus:border-[#1CAB55] focus:ring-4 focus:ring-[#1CAB55]/10 focus:outline-none transition-all duration-200 font-medium",value:h,onChange:_=>f(_.target.value)})]}),g.jsxs("div",{className:"relative group",children:[g.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#1CAB55] transition-colors",children:g.jsx(M,{})}),g.jsx("input",{type:"tel",required:n==="SIGNUP",placeholder:"মোবাইল নম্বর",className:"w-full pl-12 pr-4 py-3.5 bg-gray-50 text-gray-800 placeholder-gray-400 rounded-xl border border-gray-200 focus:bg-white focus:border-[#1CAB55] focus:ring-4 focus:ring-[#1CAB55]/10 focus:outline-none transition-all duration-200 font-medium",value:m,onChange:_=>v(_.target.value)})]})]}),g.jsxs("div",{className:"relative group z-10",children:[g.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#1CAB55] transition-colors",children:g.jsx(F,{})}),g.jsx("input",{type:"email",required:!0,placeholder:"আপনার ইমেইল অ্যাড্রেস",className:"w-full pl-12 pr-4 py-3.5 bg-gray-50 text-gray-800 placeholder-gray-400 rounded-xl border border-gray-200 focus:bg-white focus:border-[#1CAB55] focus:ring-4 focus:ring-[#1CAB55]/10 focus:outline-none transition-all duration-200 font-medium",value:i,onChange:_=>s(_.target.value)})]}),g.jsxs("div",{className:"relative group z-10",children:[g.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#1CAB55] transition-colors",children:g.jsx(E,{})}),g.jsx("input",{type:"password",required:!0,placeholder:"পাসওয়ার্ড দিন",className:"w-full pl-12 pr-4 py-3.5 bg-gray-50 text-gray-800 placeholder-gray-400 rounded-xl border border-gray-200 focus:bg-white focus:border-[#1CAB55] focus:ring-4 focus:ring-[#1CAB55]/10 focus:outline-none transition-all duration-200 font-medium",value:o,onChange:_=>a(_.target.value)})]}),g.jsx("button",{type:"submit",disabled:V,className:"w-full py-4 mt-2 bg-[#1CAB55] hover:bg-[#159f4d] text-white text-lg font-bold rounded-xl shadow-[0_4px_14px_0_rgba(28,171,85,0.39)] hover:shadow-[0_6px_20px_rgba(28,171,85,0.23)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-200",children:V?g.jsxs("span",{className:"flex items-center justify-center gap-2",children:[g.jsxs("svg",{className:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[g.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),g.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"প্রসেসিং..."]}):n==="LOGIN"?"লগইন করুন":"সাইন আপ করুন"})]})]}),g.jsx("div",{className:"h-1.5 bg-gradient-to-r from-transparent via-[#1CAB55] to-transparent w-full opacity-50"})]})]})},$M=({onBack:n,quizId:e})=>{const[t,r]=ne.useState([]),[i,s]=ne.useState(!0),[o,a]=ne.useState("গ্লোবাল লিডারবোর্ড");return ne.useEffect(()=>{(async()=>{s(!0);try{if(e){const c=await LM(e);r(c);const h=Ix(e);a(h?h.title:"কুইজ লিডারবোর্ড")}else{const c=await OM();r(c),a("গ্লোবাল লিডারবোর্ড")}}catch(c){console.error("Failed to load leaderboard",c)}finally{s(!1)}})()},[e]),g.jsx("div",{className:"min-h-screen bg-brand-cream p-4 animate-fade-in",children:g.jsxs("div",{className:"max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col max-h-[90vh]",children:[g.jsxs("div",{className:"bg-[#1CAB55] p-4 md:p-6 text-white flex justify-between items-center shrink-0 z-10 shadow-md",children:[g.jsxs("div",{children:[g.jsx("h2",{className:"text-xl md:text-2xl font-bold",children:e?"কুইজ লিডারবোর্ড":"লিডারবোর্ড"}),g.jsx("p",{className:"text-xs md:text-sm text-green-100 opacity-80",children:o})]}),g.jsx(nr,{variant:"secondary",onClick:n,className:"py-1 px-3 text-xs md:text-sm font-bold",children:"ফিরে যান"})]}),g.jsx("div",{className:"hidden md:block overflow-auto flex-grow",children:i?g.jsx("div",{className:"p-10 text-center text-gray-500",children:"লোড হচ্ছে..."}):g.jsxs("table",{className:"w-full text-left",children:[g.jsx("thead",{className:"bg-gray-50 border-b sticky top-0 z-10",children:g.jsxs("tr",{children:[g.jsx("th",{className:"p-4 font-semibold text-gray-600",children:"অবস্থান"}),g.jsx("th",{className:"p-4 font-semibold text-gray-600",children:"ব্যবহারকারী"}),g.jsx("th",{className:"p-4 font-semibold text-gray-600",children:"কুইজ"}),g.jsx("th",{className:"p-4 font-semibold text-gray-600 text-right",children:"স্কোর"}),g.jsx("th",{className:"p-4 font-semibold text-gray-600 text-right",children:"সময়"})]})}),g.jsx("tbody",{className:"divide-y divide-gray-100",children:t.length===0?g.jsx("tr",{children:g.jsx("td",{colSpan:5,className:"p-8 text-center text-gray-500",children:"এখনও কেউ কুইজ দেয়নি!"})}):t.map((u,c)=>g.jsxs("tr",{className:`hover:bg-gray-50 transition-colors ${c<3?"bg-yellow-50/50":""}`,children:[g.jsx("td",{className:"p-4",children:g.jsxs("div",{className:`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${c===0?"bg-yellow-100 text-yellow-700":c===1?"bg-gray-100 text-gray-600":c===2?"bg-orange-100 text-orange-700":"text-gray-500"}`,children:["#",c+1]})}),g.jsx("td",{className:"p-4 text-gray-800 font-medium",children:u.userName||u.userEmail.split("@")[0]}),g.jsx("td",{className:"p-4 text-gray-600 text-sm",children:u.quizTitle}),g.jsxs("td",{className:"p-4 font-bold text-[#1CAB55] text-right",children:[u.score,"/",u.totalQuestions]}),g.jsxs("td",{className:"p-4 text-gray-500 text-sm text-right font-mono",children:[u.timeTakenSeconds,"s"]})]},c))})]})}),g.jsx("div",{className:"md:hidden overflow-y-auto p-4 space-y-3 bg-gray-50 flex-grow",children:i?g.jsx("div",{className:"p-10 text-center text-gray-500",children:"লোড হচ্ছে..."}):t.length===0?g.jsxs("div",{className:"text-center text-gray-500 py-10",children:[g.jsx("div",{className:"text-4xl mb-2",children:"🏅"}),g.jsx("p",{children:"এখনও কেউ কুইজ দেয়নি!"})]}):t.map((u,c)=>g.jsxs("div",{className:`p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between ${c<3?"bg-yellow-50 border-yellow-200 shadow-md":"bg-white"}`,children:[g.jsxs("div",{className:"flex items-center gap-3 overflow-hidden",children:[g.jsx("div",{className:`w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full font-bold text-sm shadow-sm ${c===0?"bg-gradient-to-br from-yellow-300 to-yellow-500 text-white":c===1?"bg-gradient-to-br from-gray-300 to-gray-500 text-white":c===2?"bg-gradient-to-br from-orange-300 to-orange-500 text-white":"bg-gray-100 text-gray-500"}`,children:c+1}),g.jsxs("div",{className:"min-w-0",children:[g.jsx("div",{className:"font-bold text-gray-800 text-sm truncate",children:u.userName||u.userEmail.split("@")[0]}),g.jsx("div",{className:"text-[11px] text-gray-500 truncate",children:u.quizTitle})]})]}),g.jsxs("div",{className:"text-right flex-shrink-0 ml-2",children:[g.jsxs("div",{className:"font-extrabold text-[#1CAB55] text-lg leading-tight",children:[u.score,g.jsxs("span",{className:"text-[10px] text-gray-400 font-normal",children:["/",u.totalQuestions]})]}),g.jsxs("div",{className:"text-[10px] text-gray-400 font-mono bg-gray-100 px-1.5 py-0.5 rounded inline-block mt-1",children:[u.timeTakenSeconds,"s"]})]})]},c))})]})})},qM=({userId:n,onBack:e})=>{const[t,r]=ne.useState([]),[i,s]=ne.useState(!0);return ne.useEffect(()=>{Ex(n).then(o=>{r(o),s(!1)})},[n]),i?g.jsx("div",{className:"h-screen flex items-center justify-center bg-brand-cream text-[#1CAB55]",children:"লোড হচ্ছে..."}):g.jsx("div",{className:"min-h-screen bg-brand-cream p-4 animate-fade-in",children:g.jsxs("div",{className:"max-w-3xl mx-auto",children:[g.jsxs("div",{className:"flex justify-between items-center mb-6",children:[g.jsx("h2",{className:"text-xl md:text-2xl font-bold text-gray-800",children:"আপনার আগের কুইজসমূহ"}),g.jsx(nr,{onClick:e,variant:"outline",className:"text-sm px-3 py-1",children:"ফিরে যান"})]}),g.jsx("div",{className:"space-y-4",children:t.length===0?g.jsx("p",{className:"text-center text-gray-500 bg-white p-10 rounded-lg shadow-sm border border-gray-100",children:"আপনি এখনও কোনো কুইজ দেননি।"}):t.map(o=>g.jsxs("div",{className:"bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#8B0000] flex justify-between items-center transition-transform hover:-translate-y-0.5",children:[g.jsxs("div",{children:[g.jsx("h3",{className:"font-bold text-base md:text-lg text-gray-800 mb-1",children:o.quizTitle}),g.jsxs("p",{className:"text-xs text-gray-500 flex items-center gap-1",children:[g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3 w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),new Date(o.timestamp).toLocaleDateString("bn-BD")]})]}),g.jsxs("div",{className:"text-right pl-4",children:[g.jsxs("div",{className:"text-2xl font-bold text-[#1CAB55]",children:[o.score,g.jsxs("span",{className:"text-sm text-gray-400",children:["/",o.totalQuestions]})]}),g.jsx("div",{className:"text-[10px] text-gray-400 uppercase font-bold tracking-wider",children:"স্কোর"})]})]},o.id))})]})})};function WM(){const[n,e]=ne.useState(null),[t,r]=ne.useState("HOME"),[i,s]=ne.useState(!0),[o,a]=ne.useState(null),[u,c]=ne.useState(null),[h,f]=ne.useState(null);ne.useEffect(()=>{const V=od.onAuthStateChanged(async S=>{if(S){let w=S.displayName;try{const A=await hs.collection("users").doc(S.uid).get();if(A.exists){const N=A.data();N!=null&&N.fullName&&(w=N.fullName)}}catch(A){console.error("Error fetching user data:",A)}e({uid:S.uid,email:S.email,displayName:w}),r(A=>A==="HOME"||A==="LOGIN"||A==="SIGNUP"?"DASHBOARD":A)}else e(null),r("HOME");s(!1)});return()=>V()},[]);const m=()=>r("DASHBOARD"),v=V=>{const S=Ix(V);S&&(a(S),r("QUIZ_PLAY"))},P=(V,S)=>{c(V),a(S),r("RESULT")},b=V=>{c(V),r("RESULT")};return i?g.jsx("div",{className:"h-screen flex items-center justify-center bg-brand-cream text-[#1CAB55]",children:"লোড হচ্ছে..."}):g.jsxs(g.Fragment,{children:[t==="HOME"&&g.jsx(CM,{onNavigate:V=>r(V)}),(t==="LOGIN"||t==="SIGNUP")&&g.jsx(zM,{view:t,onSwitch:()=>r(t==="LOGIN"?"SIGNUP":"LOGIN"),onSuccess:m,onBack:()=>r("HOME")}),t==="DASHBOARD"&&n&&g.jsx("div",{className:"relative",children:g.jsx(MM,{user:n,onStartQuiz:v,onViewResults:P,onNavigate:V=>{V==="LEADERBOARD"&&f(null),r(V)},onOpenLeaderboard:V=>{f(V),r("LEADERBOARD")},onLogout:()=>od.signOut()})}),t==="QUIZ_PLAY"&&o&&n&&g.jsx(UM,{quiz:o,userId:n.uid,userEmail:n.email||"Anonymous",userName:n.displayName||"অজানা শিক্ষার্থী",onComplete:b,onCancel:()=>{a(null),r("DASHBOARD")}}),t==="RESULT"&&u&&o&&g.jsx(BM,{attempt:u,quiz:o,onHome:()=>{c(null),a(null),r("DASHBOARD")},onRetry:()=>{r("QUIZ_PLAY")}}),t==="LEADERBOARD"&&g.jsx($M,{quizId:h,onBack:()=>r("DASHBOARD")}),t==="HISTORY"&&n&&g.jsx(qM,{userId:n.uid,onBack:()=>r("DASHBOARD")})]})}const Tx=document.getElementById("root");if(!Tx)throw new Error("Could not find root element to mount to");const GM=_f.createRoot(Tx);GM.render(g.jsx(yR.StrictMode,{children:g.jsx(WM,{})}));
