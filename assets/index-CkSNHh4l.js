(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Xx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var _0={exports:{}},od={},y0={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kl=Symbol.for("react.element"),Zx=Symbol.for("react.portal"),eR=Symbol.for("react.fragment"),tR=Symbol.for("react.strict_mode"),nR=Symbol.for("react.profiler"),rR=Symbol.for("react.provider"),iR=Symbol.for("react.context"),sR=Symbol.for("react.forward_ref"),oR=Symbol.for("react.suspense"),aR=Symbol.for("react.memo"),lR=Symbol.for("react.lazy"),gy=Symbol.iterator;function uR(n){return n===null||typeof n!="object"?null:(n=gy&&n[gy]||n["@@iterator"],typeof n=="function"?n:null)}var v0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w0=Object.assign,I0={};function Eo(n,e,t){this.props=n,this.context=e,this.refs=I0,this.updater=t||v0}Eo.prototype.isReactComponent={};Eo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Eo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function E0(){}E0.prototype=Eo.prototype;function Wp(n,e,t){this.props=n,this.context=e,this.refs=I0,this.updater=t||v0}var Gp=Wp.prototype=new E0;Gp.constructor=Wp;w0(Gp,Eo.prototype);Gp.isPureReactComponent=!0;var _y=Array.isArray,T0=Object.prototype.hasOwnProperty,Kp={current:null},S0={key:!0,ref:!0,__self:!0,__source:!0};function A0(n,e,t){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)T0.call(e,r)&&!S0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(n&&n.defaultProps)for(r in a=n.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:kl,type:n,key:s,ref:o,props:i,_owner:Kp.current}}function cR(n,e){return{$$typeof:kl,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Hp(n){return typeof n=="object"&&n!==null&&n.$$typeof===kl}function dR(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var yy=/\/+/g;function Rh(n,e){return typeof n=="object"&&n!==null&&n.key!=null?dR(""+n.key):e.toString(36)}function zu(n,e,t,r,i){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case kl:case Zx:o=!0}}if(o)return o=n,i=i(o),n=r===""?"."+Rh(o,0):r,_y(i)?(t="",n!=null&&(t=n.replace(yy,"$&/")+"/"),zu(i,e,t,"",function(c){return c})):i!=null&&(Hp(i)&&(i=cR(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(yy,"$&/")+"/")+n)),e.push(i)),1;if(o=0,r=r===""?".":r+":",_y(n))for(var a=0;a<n.length;a++){s=n[a];var u=r+Rh(s,a);o+=zu(s,e,t,u,i)}else if(u=uR(n),typeof u=="function")for(n=u.call(n),a=0;!(s=n.next()).done;)s=s.value,u=r+Rh(s,a++),o+=zu(s,e,t,u,i);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function yu(n,e,t){if(n==null)return n;var r=[],i=0;return zu(n,r,"","",function(s){return e.call(t,s,i++)}),r}function hR(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var bt={current:null},$u={transition:null},fR={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:$u,ReactCurrentOwner:Kp};function x0(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:yu,forEach:function(n,e,t){yu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return yu(n,function(){e++}),e},toArray:function(n){return yu(n,function(e){return e})||[]},only:function(n){if(!Hp(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};re.Component=Eo;re.Fragment=eR;re.Profiler=nR;re.PureComponent=Wp;re.StrictMode=tR;re.Suspense=oR;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fR;re.act=x0;re.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=w0({},n.props),i=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kp.current),e.key!==void 0&&(i=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(u in e)T0.call(e,u)&&!S0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:kl,type:n.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(n){return n={$$typeof:iR,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:rR,_context:n},n.Consumer=n};re.createElement=A0;re.createFactory=function(n){var e=A0.bind(null,n);return e.type=n,e};re.createRef=function(){return{current:null}};re.forwardRef=function(n){return{$$typeof:sR,render:n}};re.isValidElement=Hp;re.lazy=function(n){return{$$typeof:lR,_payload:{_status:-1,_result:n},_init:hR}};re.memo=function(n,e){return{$$typeof:aR,type:n,compare:e===void 0?null:e}};re.startTransition=function(n){var e=$u.transition;$u.transition={};try{n()}finally{$u.transition=e}};re.unstable_act=x0;re.useCallback=function(n,e){return bt.current.useCallback(n,e)};re.useContext=function(n){return bt.current.useContext(n)};re.useDebugValue=function(){};re.useDeferredValue=function(n){return bt.current.useDeferredValue(n)};re.useEffect=function(n,e){return bt.current.useEffect(n,e)};re.useId=function(){return bt.current.useId()};re.useImperativeHandle=function(n,e,t){return bt.current.useImperativeHandle(n,e,t)};re.useInsertionEffect=function(n,e){return bt.current.useInsertionEffect(n,e)};re.useLayoutEffect=function(n,e){return bt.current.useLayoutEffect(n,e)};re.useMemo=function(n,e){return bt.current.useMemo(n,e)};re.useReducer=function(n,e,t){return bt.current.useReducer(n,e,t)};re.useRef=function(n){return bt.current.useRef(n)};re.useState=function(n){return bt.current.useState(n)};re.useSyncExternalStore=function(n,e,t){return bt.current.useSyncExternalStore(n,e,t)};re.useTransition=function(){return bt.current.useTransition()};re.version="18.3.1";y0.exports=re;var ce=y0.exports;const pR=Xx(ce);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mR=ce,gR=Symbol.for("react.element"),_R=Symbol.for("react.fragment"),yR=Object.prototype.hasOwnProperty,vR=mR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wR={key:!0,ref:!0,__self:!0,__source:!0};function R0(n,e,t){var r,i={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)yR.call(e,r)&&!wR.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:gR,type:n,key:s,ref:o,props:i,_owner:vR.current}}od.Fragment=_R;od.jsx=R0;od.jsxs=R0;_0.exports=od;var g=_0.exports,_f={},P0={exports:{}},Yt={},k0={exports:{}},b0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(G,X){var te=G.length;G.push(X);e:for(;0<te;){var Re=te-1>>>1,pe=G[Re];if(0<i(pe,X))G[Re]=X,G[te]=pe,te=Re;else break e}}function t(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var X=G[0],te=G.pop();if(te!==X){G[0]=te;e:for(var Re=0,pe=G.length,Ue=pe>>>1;Re<Ue;){var Un=2*(Re+1)-1,Bn=G[Un],zn=Un+1,$n=G[zn];if(0>i(Bn,te))zn<pe&&0>i($n,Bn)?(G[Re]=$n,G[zn]=te,Re=zn):(G[Re]=Bn,G[Un]=te,Re=Un);else if(zn<pe&&0>i($n,te))G[Re]=$n,G[zn]=te,Re=zn;else break e}}return X}function i(G,X){var te=G.sortIndex-X.sortIndex;return te!==0?te:G.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,m=3,I=!1,R=!1,k=!1,V=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(G){for(var X=t(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=G)r(c),X.sortIndex=X.expirationTime,e(u,X);else break;X=t(c)}}function b(G){if(k=!1,v(G),!R)if(t(u)!==null)R=!0,Mo(M);else{var X=t(c);X!==null&&jn(b,X.startTime-G)}}function M(G,X){R=!1,k&&(k=!1,S(y),y=-1),I=!0;var te=m;try{for(v(X),f=t(u);f!==null&&(!(f.expirationTime>X)||G&&!P());){var Re=f.callback;if(typeof Re=="function"){f.callback=null,m=f.priorityLevel;var pe=Re(f.expirationTime<=X);X=n.unstable_now(),typeof pe=="function"?f.callback=pe:f===t(u)&&r(u),v(X)}else r(u);f=t(u)}if(f!==null)var Ue=!0;else{var Un=t(c);Un!==null&&jn(b,Un.startTime-X),Ue=!1}return Ue}finally{f=null,m=te,I=!1}}var j=!1,T=null,y=-1,E=5,A=-1;function P(){return!(n.unstable_now()-A<E)}function N(){if(T!==null){var G=n.unstable_now();A=G;var X=!0;try{X=T(!0,G)}finally{X?x():(j=!1,T=null)}}else j=!1}var x;if(typeof w=="function")x=function(){w(N)};else if(typeof MessageChannel<"u"){var Xt=new MessageChannel,hi=Xt.port2;Xt.port1.onmessage=N,x=function(){hi.postMessage(null)}}else x=function(){V(N,0)};function Mo(G){T=G,j||(j=!0,x())}function jn(G,X){y=V(function(){G(n.unstable_now())},X)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){R||I||(R=!0,Mo(M))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(u)},n.unstable_next=function(G){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var te=m;m=X;try{return G()}finally{m=te}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,X){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var te=m;m=G;try{return X()}finally{m=te}},n.unstable_scheduleCallback=function(G,X,te){var Re=n.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?Re+te:Re):te=Re,G){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=te+pe,G={id:h++,callback:X,priorityLevel:G,startTime:te,expirationTime:pe,sortIndex:-1},te>Re?(G.sortIndex=te,e(c,G),t(u)===null&&G===t(c)&&(k?(S(y),y=-1):k=!0,jn(b,te-Re))):(G.sortIndex=pe,e(u,G),R||I||(R=!0,Mo(M))),G},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(G){var X=m;return function(){var te=m;m=X;try{return G.apply(this,arguments)}finally{m=te}}}})(b0);k0.exports=b0;var IR=k0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ER=ce,Ht=IR;function B(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C0=new Set,za={};function ts(n,e){Js(n,e),Js(n+"Capture",e)}function Js(n,e){for(za[n]=e,n=0;n<e.length;n++)C0.add(e[n])}var nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yf=Object.prototype.hasOwnProperty,TR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vy={},wy={};function SR(n){return yf.call(wy,n)?!0:yf.call(vy,n)?!1:TR.test(n)?wy[n]=!0:(vy[n]=!0,!1)}function AR(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function xR(n,e,t,r){if(e===null||typeof e>"u"||AR(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(n,e,t,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){ut[n]=new Ct(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];ut[e]=new Ct(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){ut[n]=new Ct(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){ut[n]=new Ct(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){ut[n]=new Ct(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){ut[n]=new Ct(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){ut[n]=new Ct(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){ut[n]=new Ct(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){ut[n]=new Ct(n,5,!1,n.toLowerCase(),null,!1,!1)});var Qp=/[\-:]([a-z])/g;function Yp(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Qp,Yp);ut[e]=new Ct(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Qp,Yp);ut[e]=new Ct(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Qp,Yp);ut[e]=new Ct(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){ut[n]=new Ct(n,1,!1,n.toLowerCase(),null,!1,!1)});ut.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){ut[n]=new Ct(n,1,!1,n.toLowerCase(),null,!0,!0)});function Jp(n,e,t,r){var i=ut.hasOwnProperty(e)?ut[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xR(e,t,i,r)&&(t=null),r||i===null?SR(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):i.mustUseProperty?n[i.propertyName]=t===null?i.type===3?!1:"":t:(e=i.attributeName,r=i.attributeNamespace,t===null?n.removeAttribute(e):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var cr=ER.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vu=Symbol.for("react.element"),xs=Symbol.for("react.portal"),Rs=Symbol.for("react.fragment"),Xp=Symbol.for("react.strict_mode"),vf=Symbol.for("react.profiler"),N0=Symbol.for("react.provider"),D0=Symbol.for("react.context"),Zp=Symbol.for("react.forward_ref"),wf=Symbol.for("react.suspense"),If=Symbol.for("react.suspense_list"),em=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),V0=Symbol.for("react.offscreen"),Iy=Symbol.iterator;function Jo(n){return n===null||typeof n!="object"?null:(n=Iy&&n[Iy]||n["@@iterator"],typeof n=="function"?n:null)}var Ce=Object.assign,Ph;function fa(n){if(Ph===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Ph=e&&e[1]||""}return`
`+Ph+n}var kh=!1;function bh(n,e){if(!n||kh)return"";kh=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){r=c}n.call(e.prototype)}else{try{throw Error()}catch(c){r=c}n()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return n.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",n.displayName)),u}while(1<=o&&0<=a);break}}}finally{kh=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?fa(n):""}function RR(n){switch(n.tag){case 5:return fa(n.type);case 16:return fa("Lazy");case 13:return fa("Suspense");case 19:return fa("SuspenseList");case 0:case 2:case 15:return n=bh(n.type,!1),n;case 11:return n=bh(n.type.render,!1),n;case 1:return n=bh(n.type,!0),n;default:return""}}function Ef(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Rs:return"Fragment";case xs:return"Portal";case vf:return"Profiler";case Xp:return"StrictMode";case wf:return"Suspense";case If:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D0:return(n.displayName||"Context")+".Consumer";case N0:return(n._context.displayName||"Context")+".Provider";case Zp:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case em:return e=n.displayName||null,e!==null?e:Ef(n.type)||"Memo";case Sr:e=n._payload,n=n._init;try{return Ef(n(e))}catch{}}return null}function PR(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ef(e);case 8:return e===Xp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function O0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kR(n){var e=O0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function wu(n){n._valueTracker||(n._valueTracker=kR(n))}function L0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=O0(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function hc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Tf(n,e){var t=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Ey(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=qr(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function M0(n,e){e=e.checked,e!=null&&Jp(n,"checked",e,!1)}function Sf(n,e){M0(n,e);var t=qr(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Af(n,e.type,t):e.hasOwnProperty("defaultValue")&&Af(n,e.type,qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Ty(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Af(n,e,t){(e!=="number"||hc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var pa=Array.isArray;function js(n,e,t,r){if(n=n.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<n.length;t++)i=e.hasOwnProperty("$"+n[t].value),n[t].selected!==i&&(n[t].selected=i),i&&r&&(n[t].defaultSelected=!0)}else{for(t=""+qr(t),e=null,i=0;i<n.length;i++){if(n[i].value===t){n[i].selected=!0,r&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function xf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Sy(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(B(92));if(pa(t)){if(1<t.length)throw Error(B(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:qr(t)}}function F0(n,e){var t=qr(e.value),r=qr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function Ay(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function j0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?j0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Iu,U0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,i){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,i)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Iu=Iu||document.createElement("div"),Iu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Iu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function $a(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bR=["Webkit","ms","Moz","O"];Object.keys(Sa).forEach(function(n){bR.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Sa[e]=Sa[n]})});function B0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Sa.hasOwnProperty(n)&&Sa[n]?(""+e).trim():e+"px"}function z0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=B0(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,i):n[t]=i}}var CR=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pf(n,e){if(e){if(CR[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function kf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bf=null;function tm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Cf=null,Us=null,Bs=null;function xy(n){if(n=Nl(n)){if(typeof Cf!="function")throw Error(B(280));var e=n.stateNode;e&&(e=dd(e),Cf(n.stateNode,n.type,e))}}function $0(n){Us?Bs?Bs.push(n):Bs=[n]:Us=n}function q0(){if(Us){var n=Us,e=Bs;if(Bs=Us=null,xy(n),e)for(n=0;n<e.length;n++)xy(e[n])}}function W0(n,e){return n(e)}function G0(){}var Ch=!1;function K0(n,e,t){if(Ch)return n(e,t);Ch=!0;try{return W0(n,e,t)}finally{Ch=!1,(Us!==null||Bs!==null)&&(G0(),q0())}}function qa(n,e){var t=n.stateNode;if(t===null)return null;var r=dd(t);if(r===null)return null;t=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(B(231,e,typeof t));return t}var Nf=!1;if(nr)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){Nf=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{Nf=!1}function NR(n,e,t,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(h){this.onError(h)}}var Aa=!1,fc=null,pc=!1,Df=null,DR={onError:function(n){Aa=!0,fc=n}};function VR(n,e,t,r,i,s,o,a,u){Aa=!1,fc=null,NR.apply(DR,arguments)}function OR(n,e,t,r,i,s,o,a,u){if(VR.apply(this,arguments),Aa){if(Aa){var c=fc;Aa=!1,fc=null}else throw Error(B(198));pc||(pc=!0,Df=c)}}function ns(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function H0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Ry(n){if(ns(n)!==n)throw Error(B(188))}function LR(n){var e=n.alternate;if(!e){if(e=ns(n),e===null)throw Error(B(188));return e!==n?null:n}for(var t=n,r=e;;){var i=t.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===t)return Ry(i),n;if(s===r)return Ry(i),e;s=s.sibling}throw Error(B(188))}if(t.return!==r.return)t=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===t){o=!0,t=i,r=s;break}if(a===r){o=!0,r=i,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,r=i;break}if(a===r){o=!0,r=s,t=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(t.alternate!==r)throw Error(B(190))}if(t.tag!==3)throw Error(B(188));return t.stateNode.current===t?n:e}function Q0(n){return n=LR(n),n!==null?Y0(n):null}function Y0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Y0(n);if(e!==null)return e;n=n.sibling}return null}var J0=Ht.unstable_scheduleCallback,Py=Ht.unstable_cancelCallback,MR=Ht.unstable_shouldYield,FR=Ht.unstable_requestPaint,Be=Ht.unstable_now,jR=Ht.unstable_getCurrentPriorityLevel,nm=Ht.unstable_ImmediatePriority,X0=Ht.unstable_UserBlockingPriority,mc=Ht.unstable_NormalPriority,UR=Ht.unstable_LowPriority,Z0=Ht.unstable_IdlePriority,ad=null,kn=null;function BR(n){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(ad,n,void 0,(n.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:qR,zR=Math.log,$R=Math.LN2;function qR(n){return n>>>=0,n===0?32:31-(zR(n)/$R|0)|0}var Eu=64,Tu=4194304;function ma(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function gc(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,i=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~i;a!==0?r=ma(a):(s&=o,s!==0&&(r=ma(s)))}else o=t&~i,o!==0?r=ma(o):s!==0&&(r=ma(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-pn(e),i=1<<t,r|=n[t],e&=~i;return r}function WR(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function GR(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,i=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-pn(s),a=1<<o,u=i[o];u===-1?(!(a&t)||a&r)&&(i[o]=WR(a,e)):u<=e&&(n.expiredLanes|=a),s&=~a}}function Vf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function eI(){var n=Eu;return Eu<<=1,!(Eu&4194240)&&(Eu=64),n}function Nh(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function bl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-pn(e),n[e]=t}function KR(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var i=31-pn(t),s=1<<i;e[i]=0,r[i]=-1,n[i]=-1,t&=~s}}function rm(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-pn(t),i=1<<r;i&e|n[r]&e&&(n[r]|=e),t&=~i}}var he=0;function tI(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var nI,im,rI,iI,sI,Of=!1,Su=[],Vr=null,Or=null,Lr=null,Wa=new Map,Ga=new Map,xr=[],HR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ky(n,e){switch(n){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":Wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ga.delete(e.pointerId)}}function Zo(n,e,t,r,i,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Nl(e),e!==null&&im(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function QR(n,e,t,r,i){switch(e){case"focusin":return Vr=Zo(Vr,n,e,t,r,i),!0;case"dragenter":return Or=Zo(Or,n,e,t,r,i),!0;case"mouseover":return Lr=Zo(Lr,n,e,t,r,i),!0;case"pointerover":var s=i.pointerId;return Wa.set(s,Zo(Wa.get(s)||null,n,e,t,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ga.set(s,Zo(Ga.get(s)||null,n,e,t,r,i)),!0}return!1}function oI(n){var e=Ri(n.target);if(e!==null){var t=ns(e);if(t!==null){if(e=t.tag,e===13){if(e=H0(t),e!==null){n.blockedOn=e,sI(n.priority,function(){rI(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function qu(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Lf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);bf=r,t.target.dispatchEvent(r),bf=null}else return e=Nl(t),e!==null&&im(e),n.blockedOn=t,!1;e.shift()}return!0}function by(n,e,t){qu(n)&&t.delete(e)}function YR(){Of=!1,Vr!==null&&qu(Vr)&&(Vr=null),Or!==null&&qu(Or)&&(Or=null),Lr!==null&&qu(Lr)&&(Lr=null),Wa.forEach(by),Ga.forEach(by)}function ea(n,e){n.blockedOn===e&&(n.blockedOn=null,Of||(Of=!0,Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority,YR)))}function Ka(n){function e(i){return ea(i,n)}if(0<Su.length){ea(Su[0],n);for(var t=1;t<Su.length;t++){var r=Su[t];r.blockedOn===n&&(r.blockedOn=null)}}for(Vr!==null&&ea(Vr,n),Or!==null&&ea(Or,n),Lr!==null&&ea(Lr,n),Wa.forEach(e),Ga.forEach(e),t=0;t<xr.length;t++)r=xr[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<xr.length&&(t=xr[0],t.blockedOn===null);)oI(t),t.blockedOn===null&&xr.shift()}var zs=cr.ReactCurrentBatchConfig,_c=!0;function JR(n,e,t,r){var i=he,s=zs.transition;zs.transition=null;try{he=1,sm(n,e,t,r)}finally{he=i,zs.transition=s}}function XR(n,e,t,r){var i=he,s=zs.transition;zs.transition=null;try{he=4,sm(n,e,t,r)}finally{he=i,zs.transition=s}}function sm(n,e,t,r){if(_c){var i=Lf(n,e,t,r);if(i===null)zh(n,e,r,yc,t),ky(n,r);else if(QR(i,n,e,t,r))r.stopPropagation();else if(ky(n,r),e&4&&-1<HR.indexOf(n)){for(;i!==null;){var s=Nl(i);if(s!==null&&nI(s),s=Lf(n,e,t,r),s===null&&zh(n,e,r,yc,t),s===i)break;i=s}i!==null&&r.stopPropagation()}else zh(n,e,r,null,t)}}var yc=null;function Lf(n,e,t,r){if(yc=null,n=tm(r),n=Ri(n),n!==null)if(e=ns(n),e===null)n=null;else if(t=e.tag,t===13){if(n=H0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return yc=n,null}function aI(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jR()){case nm:return 1;case X0:return 4;case mc:case UR:return 16;case Z0:return 536870912;default:return 16}default:return 16}}var br=null,om=null,Wu=null;function lI(){if(Wu)return Wu;var n,e=om,t=e.length,r,i="value"in br?br.value:br.textContent,s=i.length;for(n=0;n<t&&e[n]===i[n];n++);var o=t-n;for(r=1;r<=o&&e[t-r]===i[s-r];r++);return Wu=i.slice(n,1<r?1-r:void 0)}function Gu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Au(){return!0}function Cy(){return!1}function Jt(n){function e(t,r,i,s,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Au:Cy,this.isPropagationStopped=Cy,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Au)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Au)},persist:function(){},isPersistent:Au}),e}var To={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},am=Jt(To),Cl=Ce({},To,{view:0,detail:0}),ZR=Jt(Cl),Dh,Vh,ta,ld=Ce({},Cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ta&&(ta&&n.type==="mousemove"?(Dh=n.screenX-ta.screenX,Vh=n.screenY-ta.screenY):Vh=Dh=0,ta=n),Dh)},movementY:function(n){return"movementY"in n?n.movementY:Vh}}),Ny=Jt(ld),eP=Ce({},ld,{dataTransfer:0}),tP=Jt(eP),nP=Ce({},Cl,{relatedTarget:0}),Oh=Jt(nP),rP=Ce({},To,{animationName:0,elapsedTime:0,pseudoElement:0}),iP=Jt(rP),sP=Ce({},To,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),oP=Jt(sP),aP=Ce({},To,{data:0}),Dy=Jt(aP),lP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dP(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=cP[n])?!!e[n]:!1}function lm(){return dP}var hP=Ce({},Cl,{key:function(n){if(n.key){var e=lP[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Gu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?uP[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lm,charCode:function(n){return n.type==="keypress"?Gu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Gu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),fP=Jt(hP),pP=Ce({},ld,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vy=Jt(pP),mP=Ce({},Cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lm}),gP=Jt(mP),_P=Ce({},To,{propertyName:0,elapsedTime:0,pseudoElement:0}),yP=Jt(_P),vP=Ce({},ld,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),wP=Jt(vP),IP=[9,13,27,32],um=nr&&"CompositionEvent"in window,xa=null;nr&&"documentMode"in document&&(xa=document.documentMode);var EP=nr&&"TextEvent"in window&&!xa,uI=nr&&(!um||xa&&8<xa&&11>=xa),Oy=" ",Ly=!1;function cI(n,e){switch(n){case"keyup":return IP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dI(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ps=!1;function TP(n,e){switch(n){case"compositionend":return dI(e);case"keypress":return e.which!==32?null:(Ly=!0,Oy);case"textInput":return n=e.data,n===Oy&&Ly?null:n;default:return null}}function SP(n,e){if(Ps)return n==="compositionend"||!um&&cI(n,e)?(n=lI(),Wu=om=br=null,Ps=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return uI&&e.locale!=="ko"?null:e.data;default:return null}}var AP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function My(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!AP[n.type]:e==="textarea"}function hI(n,e,t,r){$0(r),e=vc(e,"onChange"),0<e.length&&(t=new am("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var Ra=null,Ha=null;function xP(n){TI(n,0)}function ud(n){var e=Cs(n);if(L0(e))return n}function RP(n,e){if(n==="change")return e}var fI=!1;if(nr){var Lh;if(nr){var Mh="oninput"in document;if(!Mh){var Fy=document.createElement("div");Fy.setAttribute("oninput","return;"),Mh=typeof Fy.oninput=="function"}Lh=Mh}else Lh=!1;fI=Lh&&(!document.documentMode||9<document.documentMode)}function jy(){Ra&&(Ra.detachEvent("onpropertychange",pI),Ha=Ra=null)}function pI(n){if(n.propertyName==="value"&&ud(Ha)){var e=[];hI(e,Ha,n,tm(n)),K0(xP,e)}}function PP(n,e,t){n==="focusin"?(jy(),Ra=e,Ha=t,Ra.attachEvent("onpropertychange",pI)):n==="focusout"&&jy()}function kP(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ud(Ha)}function bP(n,e){if(n==="click")return ud(e)}function CP(n,e){if(n==="input"||n==="change")return ud(e)}function NP(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var _n=typeof Object.is=="function"?Object.is:NP;function Qa(n,e){if(_n(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!yf.call(e,i)||!_n(n[i],e[i]))return!1}return!0}function Uy(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function By(n,e){var t=Uy(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Uy(t)}}function mI(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?mI(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function gI(){for(var n=window,e=hc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=hc(n.document)}return e}function cm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function DP(n){var e=gI(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&mI(t.ownerDocument.documentElement,t)){if(r!==null&&cm(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var i=t.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!n.extend&&s>r&&(i=r,r=s,s=i),i=By(t,s);var o=By(t,r);i&&o&&(n.rangeCount!==1||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),n.removeAllRanges(),s>r?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var VP=nr&&"documentMode"in document&&11>=document.documentMode,ks=null,Mf=null,Pa=null,Ff=!1;function zy(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ff||ks==null||ks!==hc(r)||(r=ks,"selectionStart"in r&&cm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pa&&Qa(Pa,r)||(Pa=r,r=vc(Mf,"onSelect"),0<r.length&&(e=new am("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=ks)))}function xu(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var bs={animationend:xu("Animation","AnimationEnd"),animationiteration:xu("Animation","AnimationIteration"),animationstart:xu("Animation","AnimationStart"),transitionend:xu("Transition","TransitionEnd")},Fh={},_I={};nr&&(_I=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function cd(n){if(Fh[n])return Fh[n];if(!bs[n])return n;var e=bs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in _I)return Fh[n]=e[t];return n}var yI=cd("animationend"),vI=cd("animationiteration"),wI=cd("animationstart"),II=cd("transitionend"),EI=new Map,$y="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ri(n,e){EI.set(n,e),ts(e,[n])}for(var jh=0;jh<$y.length;jh++){var Uh=$y[jh],OP=Uh.toLowerCase(),LP=Uh[0].toUpperCase()+Uh.slice(1);ri(OP,"on"+LP)}ri(yI,"onAnimationEnd");ri(vI,"onAnimationIteration");ri(wI,"onAnimationStart");ri("dblclick","onDoubleClick");ri("focusin","onFocus");ri("focusout","onBlur");ri(II,"onTransitionEnd");Js("onMouseEnter",["mouseout","mouseover"]);Js("onMouseLeave",["mouseout","mouseover"]);Js("onPointerEnter",["pointerout","pointerover"]);Js("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MP=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function qy(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,OR(r,e,void 0,n),n.currentTarget=null}function TI(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;qy(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;qy(i,a,c),s=u}}}if(pc)throw n=Df,pc=!1,Df=null,n}function ve(n,e){var t=e[$f];t===void 0&&(t=e[$f]=new Set);var r=n+"__bubble";t.has(r)||(SI(e,n,2,!1),t.add(r))}function Bh(n,e,t){var r=0;e&&(r|=4),SI(t,n,r,e)}var Ru="_reactListening"+Math.random().toString(36).slice(2);function Ya(n){if(!n[Ru]){n[Ru]=!0,C0.forEach(function(t){t!=="selectionchange"&&(MP.has(t)||Bh(t,!1,n),Bh(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ru]||(e[Ru]=!0,Bh("selectionchange",!1,e))}}function SI(n,e,t,r){switch(aI(e)){case 1:var i=JR;break;case 4:i=XR;break;default:i=sm}t=i.bind(null,e,t,n),i=void 0,!Nf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?n.addEventListener(e,t,{capture:!0,passive:i}):n.addEventListener(e,t,!0):i!==void 0?n.addEventListener(e,t,{passive:i}):n.addEventListener(e,t,!1)}function zh(n,e,t,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ri(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}K0(function(){var c=s,h=tm(t),f=[];e:{var m=EI.get(n);if(m!==void 0){var I=am,R=n;switch(n){case"keypress":if(Gu(t)===0)break e;case"keydown":case"keyup":I=fP;break;case"focusin":R="focus",I=Oh;break;case"focusout":R="blur",I=Oh;break;case"beforeblur":case"afterblur":I=Oh;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Ny;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=tP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=gP;break;case yI:case vI:case wI:I=iP;break;case II:I=yP;break;case"scroll":I=ZR;break;case"wheel":I=wP;break;case"copy":case"cut":case"paste":I=oP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Vy}var k=(e&4)!==0,V=!k&&n==="scroll",S=k?m!==null?m+"Capture":null:m;k=[];for(var w=c,v;w!==null;){v=w;var b=v.stateNode;if(v.tag===5&&b!==null&&(v=b,S!==null&&(b=qa(w,S),b!=null&&k.push(Ja(w,b,v)))),V)break;w=w.return}0<k.length&&(m=new I(m,R,null,t,h),f.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=n==="mouseover"||n==="pointerover",I=n==="mouseout"||n==="pointerout",m&&t!==bf&&(R=t.relatedTarget||t.fromElement)&&(Ri(R)||R[rr]))break e;if((I||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,I?(R=t.relatedTarget||t.toElement,I=c,R=R?Ri(R):null,R!==null&&(V=ns(R),R!==V||R.tag!==5&&R.tag!==6)&&(R=null)):(I=null,R=c),I!==R)){if(k=Ny,b="onMouseLeave",S="onMouseEnter",w="mouse",(n==="pointerout"||n==="pointerover")&&(k=Vy,b="onPointerLeave",S="onPointerEnter",w="pointer"),V=I==null?m:Cs(I),v=R==null?m:Cs(R),m=new k(b,w+"leave",I,t,h),m.target=V,m.relatedTarget=v,b=null,Ri(h)===c&&(k=new k(S,w+"enter",R,t,h),k.target=v,k.relatedTarget=V,b=k),V=b,I&&R)t:{for(k=I,S=R,w=0,v=k;v;v=ps(v))w++;for(v=0,b=S;b;b=ps(b))v++;for(;0<w-v;)k=ps(k),w--;for(;0<v-w;)S=ps(S),v--;for(;w--;){if(k===S||S!==null&&k===S.alternate)break t;k=ps(k),S=ps(S)}k=null}else k=null;I!==null&&Wy(f,m,I,k,!1),R!==null&&V!==null&&Wy(f,V,R,k,!0)}}e:{if(m=c?Cs(c):window,I=m.nodeName&&m.nodeName.toLowerCase(),I==="select"||I==="input"&&m.type==="file")var M=RP;else if(My(m))if(fI)M=CP;else{M=kP;var j=PP}else(I=m.nodeName)&&I.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=bP);if(M&&(M=M(n,c))){hI(f,M,t,h);break e}j&&j(n,m,c),n==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&Af(m,"number",m.value)}switch(j=c?Cs(c):window,n){case"focusin":(My(j)||j.contentEditable==="true")&&(ks=j,Mf=c,Pa=null);break;case"focusout":Pa=Mf=ks=null;break;case"mousedown":Ff=!0;break;case"contextmenu":case"mouseup":case"dragend":Ff=!1,zy(f,t,h);break;case"selectionchange":if(VP)break;case"keydown":case"keyup":zy(f,t,h)}var T;if(um)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ps?cI(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(uI&&t.locale!=="ko"&&(Ps||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ps&&(T=lI()):(br=h,om="value"in br?br.value:br.textContent,Ps=!0)),j=vc(c,y),0<j.length&&(y=new Dy(y,n,null,t,h),f.push({event:y,listeners:j}),T?y.data=T:(T=dI(t),T!==null&&(y.data=T)))),(T=EP?TP(n,t):SP(n,t))&&(c=vc(c,"onBeforeInput"),0<c.length&&(h=new Dy("onBeforeInput","beforeinput",null,t,h),f.push({event:h,listeners:c}),h.data=T))}TI(f,e)})}function Ja(n,e,t){return{instance:n,listener:e,currentTarget:t}}function vc(n,e){for(var t=e+"Capture",r=[];n!==null;){var i=n,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=qa(n,t),s!=null&&r.unshift(Ja(n,s,i)),s=qa(n,e),s!=null&&r.push(Ja(n,s,i))),n=n.return}return r}function ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Wy(n,e,t,r,i){for(var s=e._reactName,o=[];t!==null&&t!==r;){var a=t,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=qa(t,s),u!=null&&o.unshift(Ja(t,u,a))):i||(u=qa(t,s),u!=null&&o.push(Ja(t,u,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var FP=/\r\n?/g,jP=/\u0000|\uFFFD/g;function Gy(n){return(typeof n=="string"?n:""+n).replace(FP,`
`).replace(jP,"")}function Pu(n,e,t){if(e=Gy(e),Gy(n)!==e&&t)throw Error(B(425))}function wc(){}var jf=null,Uf=null;function Bf(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zf=typeof setTimeout=="function"?setTimeout:void 0,UP=typeof clearTimeout=="function"?clearTimeout:void 0,Ky=typeof Promise=="function"?Promise:void 0,BP=typeof queueMicrotask=="function"?queueMicrotask:typeof Ky<"u"?function(n){return Ky.resolve(null).then(n).catch(zP)}:zf;function zP(n){setTimeout(function(){throw n})}function $h(n,e){var t=e,r=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){n.removeChild(i),Ka(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Ka(e)}function Mr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Hy(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var So=Math.random().toString(36).slice(2),In="__reactFiber$"+So,Xa="__reactProps$"+So,rr="__reactContainer$"+So,$f="__reactEvents$"+So,$P="__reactListeners$"+So,qP="__reactHandles$"+So;function Ri(n){var e=n[In];if(e)return e;for(var t=n.parentNode;t;){if(e=t[rr]||t[In]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Hy(n);n!==null;){if(t=n[In])return t;n=Hy(n)}return e}n=t,t=n.parentNode}return null}function Nl(n){return n=n[In]||n[rr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Cs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(B(33))}function dd(n){return n[Xa]||null}var qf=[],Ns=-1;function ii(n){return{current:n}}function Ie(n){0>Ns||(n.current=qf[Ns],qf[Ns]=null,Ns--)}function ge(n,e){Ns++,qf[Ns]=n.current,n.current=e}var Wr={},yt=ii(Wr),jt=ii(!1),Fi=Wr;function Xs(n,e){var t=n.type.contextTypes;if(!t)return Wr;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in t)i[s]=e[s];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=i),i}function Ut(n){return n=n.childContextTypes,n!=null}function Ic(){Ie(jt),Ie(yt)}function Qy(n,e,t){if(yt.current!==Wr)throw Error(B(168));ge(yt,e),ge(jt,t)}function AI(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,PR(n)||"Unknown",i));return Ce({},t,r)}function Ec(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Wr,Fi=yt.current,ge(yt,n),ge(jt,jt.current),!0}function Yy(n,e,t){var r=n.stateNode;if(!r)throw Error(B(169));t?(n=AI(n,e,Fi),r.__reactInternalMemoizedMergedChildContext=n,Ie(jt),Ie(yt),ge(yt,n)):Ie(jt),ge(jt,t)}var Kn=null,hd=!1,qh=!1;function xI(n){Kn===null?Kn=[n]:Kn.push(n)}function WP(n){hd=!0,xI(n)}function si(){if(!qh&&Kn!==null){qh=!0;var n=0,e=he;try{var t=Kn;for(he=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}Kn=null,hd=!1}catch(i){throw Kn!==null&&(Kn=Kn.slice(n+1)),J0(nm,si),i}finally{he=e,qh=!1}}return null}var Ds=[],Vs=0,Tc=null,Sc=0,Zt=[],en=0,ji=null,Hn=1,Qn="";function yi(n,e){Ds[Vs++]=Sc,Ds[Vs++]=Tc,Tc=n,Sc=e}function RI(n,e,t){Zt[en++]=Hn,Zt[en++]=Qn,Zt[en++]=ji,ji=n;var r=Hn;n=Qn;var i=32-pn(r)-1;r&=~(1<<i),t+=1;var s=32-pn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Hn=1<<32-pn(e)+i|t<<i|r,Qn=s+n}else Hn=1<<s|t<<i|r,Qn=n}function dm(n){n.return!==null&&(yi(n,1),RI(n,1,0))}function hm(n){for(;n===Tc;)Tc=Ds[--Vs],Ds[Vs]=null,Sc=Ds[--Vs],Ds[Vs]=null;for(;n===ji;)ji=Zt[--en],Zt[en]=null,Qn=Zt[--en],Zt[en]=null,Hn=Zt[--en],Zt[en]=null}var Kt=null,Wt=null,Te=!1,fn=null;function PI(n,e){var t=tn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Jy(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Kt=n,Wt=Mr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Kt=n,Wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ji!==null?{id:Hn,overflow:Qn}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=tn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Kt=n,Wt=null,!0):!1;default:return!1}}function Wf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Gf(n){if(Te){var e=Wt;if(e){var t=e;if(!Jy(n,e)){if(Wf(n))throw Error(B(418));e=Mr(t.nextSibling);var r=Kt;e&&Jy(n,e)?PI(r,t):(n.flags=n.flags&-4097|2,Te=!1,Kt=n)}}else{if(Wf(n))throw Error(B(418));n.flags=n.flags&-4097|2,Te=!1,Kt=n}}}function Xy(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Kt=n}function ku(n){if(n!==Kt)return!1;if(!Te)return Xy(n),Te=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Bf(n.type,n.memoizedProps)),e&&(e=Wt)){if(Wf(n))throw kI(),Error(B(418));for(;e;)PI(n,e),e=Mr(e.nextSibling)}if(Xy(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(B(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Wt=Mr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Wt=null}}else Wt=Kt?Mr(n.stateNode.nextSibling):null;return!0}function kI(){for(var n=Wt;n;)n=Mr(n.nextSibling)}function Zs(){Wt=Kt=null,Te=!1}function fm(n){fn===null?fn=[n]:fn.push(n)}var GP=cr.ReactCurrentBatchConfig;function na(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(B(309));var r=t.stateNode}if(!r)throw Error(B(147,n));var i=r,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(B(284));if(!t._owner)throw Error(B(290,n))}return n}function bu(n,e){throw n=Object.prototype.toString.call(e),Error(B(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Zy(n){var e=n._init;return e(n._payload)}function bI(n){function e(S,w){if(n){var v=S.deletions;v===null?(S.deletions=[w],S.flags|=16):v.push(w)}}function t(S,w){if(!n)return null;for(;w!==null;)e(S,w),w=w.sibling;return null}function r(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function i(S,w){return S=Br(S,w),S.index=0,S.sibling=null,S}function s(S,w,v){return S.index=v,n?(v=S.alternate,v!==null?(v=v.index,v<w?(S.flags|=2,w):v):(S.flags|=2,w)):(S.flags|=1048576,w)}function o(S){return n&&S.alternate===null&&(S.flags|=2),S}function a(S,w,v,b){return w===null||w.tag!==6?(w=Jh(v,S.mode,b),w.return=S,w):(w=i(w,v),w.return=S,w)}function u(S,w,v,b){var M=v.type;return M===Rs?h(S,w,v.props.children,b,v.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Sr&&Zy(M)===w.type)?(b=i(w,v.props),b.ref=na(S,w,v),b.return=S,b):(b=Zu(v.type,v.key,v.props,null,S.mode,b),b.ref=na(S,w,v),b.return=S,b)}function c(S,w,v,b){return w===null||w.tag!==4||w.stateNode.containerInfo!==v.containerInfo||w.stateNode.implementation!==v.implementation?(w=Xh(v,S.mode,b),w.return=S,w):(w=i(w,v.children||[]),w.return=S,w)}function h(S,w,v,b,M){return w===null||w.tag!==7?(w=Vi(v,S.mode,b,M),w.return=S,w):(w=i(w,v),w.return=S,w)}function f(S,w,v){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Jh(""+w,S.mode,v),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case vu:return v=Zu(w.type,w.key,w.props,null,S.mode,v),v.ref=na(S,null,w),v.return=S,v;case xs:return w=Xh(w,S.mode,v),w.return=S,w;case Sr:var b=w._init;return f(S,b(w._payload),v)}if(pa(w)||Jo(w))return w=Vi(w,S.mode,v,null),w.return=S,w;bu(S,w)}return null}function m(S,w,v,b){var M=w!==null?w.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:a(S,w,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case vu:return v.key===M?u(S,w,v,b):null;case xs:return v.key===M?c(S,w,v,b):null;case Sr:return M=v._init,m(S,w,M(v._payload),b)}if(pa(v)||Jo(v))return M!==null?null:h(S,w,v,b,null);bu(S,v)}return null}function I(S,w,v,b,M){if(typeof b=="string"&&b!==""||typeof b=="number")return S=S.get(v)||null,a(w,S,""+b,M);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case vu:return S=S.get(b.key===null?v:b.key)||null,u(w,S,b,M);case xs:return S=S.get(b.key===null?v:b.key)||null,c(w,S,b,M);case Sr:var j=b._init;return I(S,w,v,j(b._payload),M)}if(pa(b)||Jo(b))return S=S.get(v)||null,h(w,S,b,M,null);bu(w,b)}return null}function R(S,w,v,b){for(var M=null,j=null,T=w,y=w=0,E=null;T!==null&&y<v.length;y++){T.index>y?(E=T,T=null):E=T.sibling;var A=m(S,T,v[y],b);if(A===null){T===null&&(T=E);break}n&&T&&A.alternate===null&&e(S,T),w=s(A,w,y),j===null?M=A:j.sibling=A,j=A,T=E}if(y===v.length)return t(S,T),Te&&yi(S,y),M;if(T===null){for(;y<v.length;y++)T=f(S,v[y],b),T!==null&&(w=s(T,w,y),j===null?M=T:j.sibling=T,j=T);return Te&&yi(S,y),M}for(T=r(S,T);y<v.length;y++)E=I(T,S,y,v[y],b),E!==null&&(n&&E.alternate!==null&&T.delete(E.key===null?y:E.key),w=s(E,w,y),j===null?M=E:j.sibling=E,j=E);return n&&T.forEach(function(P){return e(S,P)}),Te&&yi(S,y),M}function k(S,w,v,b){var M=Jo(v);if(typeof M!="function")throw Error(B(150));if(v=M.call(v),v==null)throw Error(B(151));for(var j=M=null,T=w,y=w=0,E=null,A=v.next();T!==null&&!A.done;y++,A=v.next()){T.index>y?(E=T,T=null):E=T.sibling;var P=m(S,T,A.value,b);if(P===null){T===null&&(T=E);break}n&&T&&P.alternate===null&&e(S,T),w=s(P,w,y),j===null?M=P:j.sibling=P,j=P,T=E}if(A.done)return t(S,T),Te&&yi(S,y),M;if(T===null){for(;!A.done;y++,A=v.next())A=f(S,A.value,b),A!==null&&(w=s(A,w,y),j===null?M=A:j.sibling=A,j=A);return Te&&yi(S,y),M}for(T=r(S,T);!A.done;y++,A=v.next())A=I(T,S,y,A.value,b),A!==null&&(n&&A.alternate!==null&&T.delete(A.key===null?y:A.key),w=s(A,w,y),j===null?M=A:j.sibling=A,j=A);return n&&T.forEach(function(N){return e(S,N)}),Te&&yi(S,y),M}function V(S,w,v,b){if(typeof v=="object"&&v!==null&&v.type===Rs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case vu:e:{for(var M=v.key,j=w;j!==null;){if(j.key===M){if(M=v.type,M===Rs){if(j.tag===7){t(S,j.sibling),w=i(j,v.props.children),w.return=S,S=w;break e}}else if(j.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Sr&&Zy(M)===j.type){t(S,j.sibling),w=i(j,v.props),w.ref=na(S,j,v),w.return=S,S=w;break e}t(S,j);break}else e(S,j);j=j.sibling}v.type===Rs?(w=Vi(v.props.children,S.mode,b,v.key),w.return=S,S=w):(b=Zu(v.type,v.key,v.props,null,S.mode,b),b.ref=na(S,w,v),b.return=S,S=b)}return o(S);case xs:e:{for(j=v.key;w!==null;){if(w.key===j)if(w.tag===4&&w.stateNode.containerInfo===v.containerInfo&&w.stateNode.implementation===v.implementation){t(S,w.sibling),w=i(w,v.children||[]),w.return=S,S=w;break e}else{t(S,w);break}else e(S,w);w=w.sibling}w=Xh(v,S.mode,b),w.return=S,S=w}return o(S);case Sr:return j=v._init,V(S,w,j(v._payload),b)}if(pa(v))return R(S,w,v,b);if(Jo(v))return k(S,w,v,b);bu(S,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,w!==null&&w.tag===6?(t(S,w.sibling),w=i(w,v),w.return=S,S=w):(t(S,w),w=Jh(v,S.mode,b),w.return=S,S=w),o(S)):t(S,w)}return V}var eo=bI(!0),CI=bI(!1),Ac=ii(null),xc=null,Os=null,pm=null;function mm(){pm=Os=xc=null}function gm(n){var e=Ac.current;Ie(Ac),n._currentValue=e}function Kf(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function $s(n,e){xc=n,pm=Os=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Ot=!0),n.firstContext=null)}function on(n){var e=n._currentValue;if(pm!==n)if(n={context:n,memoizedValue:e,next:null},Os===null){if(xc===null)throw Error(B(308));Os=n,xc.dependencies={lanes:0,firstContext:n}}else Os=Os.next=n;return e}var Pi=null;function _m(n){Pi===null?Pi=[n]:Pi.push(n)}function NI(n,e,t,r){var i=e.interleaved;return i===null?(t.next=t,_m(e)):(t.next=i.next,i.next=t),e.interleaved=t,ir(n,r)}function ir(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Ar=!1;function ym(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function DI(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Zn(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Fr(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ir(n,t)}return i=r.interleaved,i===null?(e.next=e,_m(r)):(e.next=i.next,i.next=e),r.interleaved=e,ir(n,t)}function Ku(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,rm(n,t)}}function ev(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?i=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?i=s=e:s=s.next=e}else i=s=e;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Rc(n,e,t,r){var i=n.updateQueue;Ar=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=n.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var m=a.lane,I=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:I,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var R=n,k=a;switch(m=e,I=t,k.tag){case 1:if(R=k.payload,typeof R=="function"){f=R.call(I,f,m);break e}f=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=k.payload,m=typeof R=="function"?R.call(I,f,m):R,m==null)break e;f=Ce({},f,m);break e;case 2:Ar=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else I={eventTime:I,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=I,u=f):h=h.next=I,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Bi|=o,n.lanes=o,n.memoizedState=f}}function tv(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Dl={},bn=ii(Dl),Za=ii(Dl),el=ii(Dl);function ki(n){if(n===Dl)throw Error(B(174));return n}function vm(n,e){switch(ge(el,e),ge(Za,n),ge(bn,Dl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Rf(e,n)}Ie(bn),ge(bn,e)}function to(){Ie(bn),Ie(Za),Ie(el)}function VI(n){ki(el.current);var e=ki(bn.current),t=Rf(e,n.type);e!==t&&(ge(Za,n),ge(bn,t))}function wm(n){Za.current===n&&(Ie(bn),Ie(Za))}var Pe=ii(0);function Pc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wh=[];function Im(){for(var n=0;n<Wh.length;n++)Wh[n]._workInProgressVersionPrimary=null;Wh.length=0}var Hu=cr.ReactCurrentDispatcher,Gh=cr.ReactCurrentBatchConfig,Ui=0,ke=null,He=null,Ze=null,kc=!1,ka=!1,tl=0,KP=0;function pt(){throw Error(B(321))}function Em(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!_n(n[t],e[t]))return!1;return!0}function Tm(n,e,t,r,i,s){if(Ui=s,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hu.current=n===null||n.memoizedState===null?JP:XP,n=t(r,i),ka){s=0;do{if(ka=!1,tl=0,25<=s)throw Error(B(301));s+=1,Ze=He=null,e.updateQueue=null,Hu.current=ZP,n=t(r,i)}while(ka)}if(Hu.current=bc,e=He!==null&&He.next!==null,Ui=0,Ze=He=ke=null,kc=!1,e)throw Error(B(300));return n}function Sm(){var n=tl!==0;return tl=0,n}function wn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?ke.memoizedState=Ze=n:Ze=Ze.next=n,Ze}function an(){if(He===null){var n=ke.alternate;n=n!==null?n.memoizedState:null}else n=He.next;var e=Ze===null?ke.memoizedState:Ze.next;if(e!==null)Ze=e,He=n;else{if(n===null)throw Error(B(310));He=n,n={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ze===null?ke.memoizedState=Ze=n:Ze=Ze.next=n}return Ze}function nl(n,e){return typeof e=="function"?e(n):e}function Kh(n){var e=an(),t=e.queue;if(t===null)throw Error(B(311));t.lastRenderedReducer=n;var r=He,i=r.baseQueue,s=t.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,t.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((Ui&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:n(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,ke.lanes|=h,Bi|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,_n(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,t.lastRenderedState=r}if(n=t.interleaved,n!==null){i=n;do s=i.lane,ke.lanes|=s,Bi|=s,i=i.next;while(i!==n)}else i===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Hh(n){var e=an(),t=e.queue;if(t===null)throw Error(B(311));t.lastRenderedReducer=n;var r=t.dispatch,i=t.pending,s=e.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do s=n(s,o.action),o=o.next;while(o!==i);_n(s,e.memoizedState)||(Ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,r]}function OI(){}function LI(n,e){var t=ke,r=an(),i=e(),s=!_n(r.memoizedState,i);if(s&&(r.memoizedState=i,Ot=!0),r=r.queue,Am(jI.bind(null,t,r,n),[n]),r.getSnapshot!==e||s||Ze!==null&&Ze.memoizedState.tag&1){if(t.flags|=2048,rl(9,FI.bind(null,t,r,i,e),void 0,null),tt===null)throw Error(B(349));Ui&30||MI(t,e,i)}return i}function MI(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function FI(n,e,t,r){e.value=t,e.getSnapshot=r,UI(e)&&BI(n)}function jI(n,e,t){return t(function(){UI(e)&&BI(n)})}function UI(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!_n(n,t)}catch{return!0}}function BI(n){var e=ir(n,1);e!==null&&mn(e,n,1,-1)}function nv(n){var e=wn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:n},e.queue=n,n=n.dispatch=YP.bind(null,ke,n),[e.memoizedState,n]}function rl(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function zI(){return an().memoizedState}function Qu(n,e,t,r){var i=wn();ke.flags|=n,i.memoizedState=rl(1|e,t,void 0,r===void 0?null:r)}function fd(n,e,t,r){var i=an();r=r===void 0?null:r;var s=void 0;if(He!==null){var o=He.memoizedState;if(s=o.destroy,r!==null&&Em(r,o.deps)){i.memoizedState=rl(e,t,s,r);return}}ke.flags|=n,i.memoizedState=rl(1|e,t,s,r)}function rv(n,e){return Qu(8390656,8,n,e)}function Am(n,e){return fd(2048,8,n,e)}function $I(n,e){return fd(4,2,n,e)}function qI(n,e){return fd(4,4,n,e)}function WI(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function GI(n,e,t){return t=t!=null?t.concat([n]):null,fd(4,4,WI.bind(null,e,n),t)}function xm(){}function KI(n,e){var t=an();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Em(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function HI(n,e){var t=an();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Em(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function QI(n,e,t){return Ui&21?(_n(t,e)||(t=eI(),ke.lanes|=t,Bi|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Ot=!0),n.memoizedState=t)}function HP(n,e){var t=he;he=t!==0&&4>t?t:4,n(!0);var r=Gh.transition;Gh.transition={};try{n(!1),e()}finally{he=t,Gh.transition=r}}function YI(){return an().memoizedState}function QP(n,e,t){var r=Ur(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},JI(n))XI(e,t);else if(t=NI(n,e,t,r),t!==null){var i=At();mn(t,n,r,i),ZI(t,e,r)}}function YP(n,e,t){var r=Ur(n),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(JI(n))XI(e,i);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(i.hasEagerState=!0,i.eagerState=a,_n(a,o)){var u=e.interleaved;u===null?(i.next=i,_m(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}t=NI(n,e,i,r),t!==null&&(i=At(),mn(t,n,r,i),ZI(t,e,r))}}function JI(n){var e=n.alternate;return n===ke||e!==null&&e===ke}function XI(n,e){ka=kc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function ZI(n,e,t){if(t&4194240){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,rm(n,t)}}var bc={readContext:on,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},JP={readContext:on,useCallback:function(n,e){return wn().memoizedState=[n,e===void 0?null:e],n},useContext:on,useEffect:rv,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Qu(4194308,4,WI.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Qu(4194308,4,n,e)},useInsertionEffect:function(n,e){return Qu(4,2,n,e)},useMemo:function(n,e){var t=wn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=wn();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=QP.bind(null,ke,n),[r.memoizedState,n]},useRef:function(n){var e=wn();return n={current:n},e.memoizedState=n},useState:nv,useDebugValue:xm,useDeferredValue:function(n){return wn().memoizedState=n},useTransition:function(){var n=nv(!1),e=n[0];return n=HP.bind(null,n[1]),wn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=ke,i=wn();if(Te){if(t===void 0)throw Error(B(407));t=t()}else{if(t=e(),tt===null)throw Error(B(349));Ui&30||MI(r,e,t)}i.memoizedState=t;var s={value:t,getSnapshot:e};return i.queue=s,rv(jI.bind(null,r,s,n),[n]),r.flags|=2048,rl(9,FI.bind(null,r,s,t,e),void 0,null),t},useId:function(){var n=wn(),e=tt.identifierPrefix;if(Te){var t=Qn,r=Hn;t=(r&~(1<<32-pn(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=tl++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=KP++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},XP={readContext:on,useCallback:KI,useContext:on,useEffect:Am,useImperativeHandle:GI,useInsertionEffect:$I,useLayoutEffect:qI,useMemo:HI,useReducer:Kh,useRef:zI,useState:function(){return Kh(nl)},useDebugValue:xm,useDeferredValue:function(n){var e=an();return QI(e,He.memoizedState,n)},useTransition:function(){var n=Kh(nl)[0],e=an().memoizedState;return[n,e]},useMutableSource:OI,useSyncExternalStore:LI,useId:YI,unstable_isNewReconciler:!1},ZP={readContext:on,useCallback:KI,useContext:on,useEffect:Am,useImperativeHandle:GI,useInsertionEffect:$I,useLayoutEffect:qI,useMemo:HI,useReducer:Hh,useRef:zI,useState:function(){return Hh(nl)},useDebugValue:xm,useDeferredValue:function(n){var e=an();return He===null?e.memoizedState=n:QI(e,He.memoizedState,n)},useTransition:function(){var n=Hh(nl)[0],e=an().memoizedState;return[n,e]},useMutableSource:OI,useSyncExternalStore:LI,useId:YI,unstable_isNewReconciler:!1};function dn(n,e){if(n&&n.defaultProps){e=Ce({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Hf(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:Ce({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var pd={isMounted:function(n){return(n=n._reactInternals)?ns(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=At(),i=Ur(n),s=Zn(r,i);s.payload=e,t!=null&&(s.callback=t),e=Fr(n,s,i),e!==null&&(mn(e,n,i,r),Ku(e,n,i))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=At(),i=Ur(n),s=Zn(r,i);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Fr(n,s,i),e!==null&&(mn(e,n,i,r),Ku(e,n,i))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=At(),r=Ur(n),i=Zn(t,r);i.tag=2,e!=null&&(i.callback=e),e=Fr(n,i,r),e!==null&&(mn(e,n,r,t),Ku(e,n,r))}};function iv(n,e,t,r,i,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qa(t,r)||!Qa(i,s):!0}function eE(n,e,t){var r=!1,i=Wr,s=e.contextType;return typeof s=="object"&&s!==null?s=on(s):(i=Ut(e)?Fi:yt.current,r=e.contextTypes,s=(r=r!=null)?Xs(n,i):Wr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pd,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=s),e}function sv(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&pd.enqueueReplaceState(e,e.state,null)}function Qf(n,e,t,r){var i=n.stateNode;i.props=t,i.state=n.memoizedState,i.refs={},ym(n);var s=e.contextType;typeof s=="object"&&s!==null?i.context=on(s):(s=Ut(e)?Fi:yt.current,i.context=Xs(n,s)),i.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hf(n,e,s,t),i.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&pd.enqueueReplaceState(i,i.state,null),Rc(n,t,i,r),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308)}function no(n,e){try{var t="",r=e;do t+=RR(r),r=r.return;while(r);var i=t}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:i,digest:null}}function Qh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Yf(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var e1=typeof WeakMap=="function"?WeakMap:Map;function tE(n,e,t){t=Zn(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){Nc||(Nc=!0,op=r),Yf(n,e)},t}function nE(n,e,t){t=Zn(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;t.payload=function(){return r(i)},t.callback=function(){Yf(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Yf(n,e),typeof r!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function ov(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new e1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(t)||(i.add(t),n=p1.bind(null,n,e,t),e.then(n,n))}function av(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function lv(n,e,t,r,i){return n.mode&1?(n.flags|=65536,n.lanes=i,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Zn(-1,1),e.tag=2,Fr(t,e,1))),t.lanes|=1),n)}var t1=cr.ReactCurrentOwner,Ot=!1;function Et(n,e,t,r){e.child=n===null?CI(e,null,t,r):eo(e,n.child,t,r)}function uv(n,e,t,r,i){t=t.render;var s=e.ref;return $s(e,i),r=Tm(n,e,t,r,s,i),t=Sm(),n!==null&&!Ot?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,sr(n,e,i)):(Te&&t&&dm(e),e.flags|=1,Et(n,e,r,i),e.child)}function cv(n,e,t,r,i){if(n===null){var s=t.type;return typeof s=="function"&&!Vm(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,rE(n,e,s,r,i)):(n=Zu(t.type,null,r,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&i)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Qa,t(o,r)&&n.ref===e.ref)return sr(n,e,i)}return e.flags|=1,n=Br(s,r),n.ref=e.ref,n.return=e,e.child=n}function rE(n,e,t,r,i){if(n!==null){var s=n.memoizedProps;if(Qa(s,r)&&n.ref===e.ref)if(Ot=!1,e.pendingProps=r=s,(n.lanes&i)!==0)n.flags&131072&&(Ot=!0);else return e.lanes=n.lanes,sr(n,e,i)}return Jf(n,e,t,r,i)}function iE(n,e,t){var r=e.pendingProps,i=r.children,s=n!==null?n.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Ms,$t),$t|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ge(Ms,$t),$t|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:t,ge(Ms,$t),$t|=r}else s!==null?(r=s.baseLanes|t,e.memoizedState=null):r=t,ge(Ms,$t),$t|=r;return Et(n,e,i,t),e.child}function sE(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Jf(n,e,t,r,i){var s=Ut(t)?Fi:yt.current;return s=Xs(e,s),$s(e,i),t=Tm(n,e,t,r,s,i),r=Sm(),n!==null&&!Ot?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,sr(n,e,i)):(Te&&r&&dm(e),e.flags|=1,Et(n,e,t,i),e.child)}function dv(n,e,t,r,i){if(Ut(t)){var s=!0;Ec(e)}else s=!1;if($s(e,i),e.stateNode===null)Yu(n,e),eE(e,t,r),Qf(e,t,r,i),r=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=on(c):(c=Ut(t)?Fi:yt.current,c=Xs(e,c));var h=t.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&sv(e,o,r,c),Ar=!1;var m=e.memoizedState;o.state=m,Rc(e,r,o,i),u=e.memoizedState,a!==r||m!==u||jt.current||Ar?(typeof h=="function"&&(Hf(e,t,h,r),u=e.memoizedState),(a=Ar||iv(e,t,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,DI(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:dn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=on(u):(u=Ut(t)?Fi:yt.current,u=Xs(e,u));var I=t.getDerivedStateFromProps;(h=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&sv(e,o,r,u),Ar=!1,m=e.memoizedState,o.state=m,Rc(e,r,o,i);var R=e.memoizedState;a!==f||m!==R||jt.current||Ar?(typeof I=="function"&&(Hf(e,t,I,r),R=e.memoizedState),(c=Ar||iv(e,t,c,r,m,R,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),r=!1)}return Xf(n,e,t,r,s,i)}function Xf(n,e,t,r,i,s){sE(n,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Yy(e,t,!1),sr(n,e,s);r=e.stateNode,t1.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&o?(e.child=eo(e,n.child,null,s),e.child=eo(e,null,a,s)):Et(n,e,a,s),e.memoizedState=r.state,i&&Yy(e,t,!0),e.child}function oE(n){var e=n.stateNode;e.pendingContext?Qy(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Qy(n,e.context,!1),vm(n,e.containerInfo)}function hv(n,e,t,r,i){return Zs(),fm(i),e.flags|=256,Et(n,e,t,r),e.child}var Zf={dehydrated:null,treeContext:null,retryLane:0};function ep(n){return{baseLanes:n,cachePool:null,transitions:null}}function aE(n,e,t){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(i|=1),ge(Pe,i&1),n===null)return Gf(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,n=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_d(o,r,0,null),n=Vi(n,r,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=ep(t),e.memoizedState=Zf,n):Rm(e,o));if(i=n.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return n1(n,e,o,r,a,i,t);if(s){s=r.fallback,o=e.mode,i=n.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Br(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Br(a,s):(s=Vi(s,o,t,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=n.child.memoizedState,o=o===null?ep(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Zf,r}return s=n.child,n=s.sibling,r=Br(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function Rm(n,e){return e=_d({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Cu(n,e,t,r){return r!==null&&fm(r),eo(e,n.child,null,t),n=Rm(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function n1(n,e,t,r,i,s,o){if(t)return e.flags&256?(e.flags&=-257,r=Qh(Error(B(422))),Cu(n,e,o,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=_d({mode:"visible",children:r.children},i,0,null),s=Vi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&eo(e,n.child,null,o),e.child.memoizedState=ep(o),e.memoizedState=Zf,s);if(!(e.mode&1))return Cu(n,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=Qh(s,r,void 0),Cu(n,e,o,r)}if(a=(o&n.childLanes)!==0,Ot||a){if(r=tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ir(n,i),mn(r,n,i,-1))}return Dm(),r=Qh(Error(B(421))),Cu(n,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=n.child,e=m1.bind(null,n),i._reactRetry=e,null):(n=s.treeContext,Wt=Mr(i.nextSibling),Kt=e,Te=!0,fn=null,n!==null&&(Zt[en++]=Hn,Zt[en++]=Qn,Zt[en++]=ji,Hn=n.id,Qn=n.overflow,ji=e),e=Rm(e,r.children),e.flags|=4096,e)}function fv(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),Kf(n.return,e,t)}function Yh(n,e,t,r,i){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=t,s.tailMode=i)}function lE(n,e,t){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Et(n,e,r.children,t),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&fv(n,t,e);else if(n.tag===19)fv(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if(ge(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(t=e.child,i=null;t!==null;)n=t.alternate,n!==null&&Pc(n)===null&&(i=t),t=t.sibling;t=i,t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),Yh(e,!1,i,t,s);break;case"backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&Pc(n)===null){e.child=i;break}n=i.sibling,i.sibling=t,t=i,i=n}Yh(e,!0,t,null,s);break;case"together":Yh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function sr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Bi|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(B(153));if(e.child!==null){for(n=e.child,t=Br(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Br(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function r1(n,e,t){switch(e.tag){case 3:oE(e),Zs();break;case 5:VI(e);break;case 1:Ut(e.type)&&Ec(e);break;case 4:vm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(Ac,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Pe,Pe.current&1),e.flags|=128,null):t&e.child.childLanes?aE(n,e,t):(ge(Pe,Pe.current&1),n=sr(n,e,t),n!==null?n.sibling:null);ge(Pe,Pe.current&1);break;case 19:if(r=(t&e.childLanes)!==0,n.flags&128){if(r)return lE(n,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,iE(n,e,t)}return sr(n,e,t)}var uE,tp,cE,dE;uE=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};tp=function(){};cE=function(n,e,t,r){var i=n.memoizedProps;if(i!==r){n=e.stateNode,ki(bn.current);var s=null;switch(t){case"input":i=Tf(n,i),r=Tf(n,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=xf(n,i),r=xf(n,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=wc)}Pf(t,r);var o;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(za.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(s||(s=[]),s.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(za.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ve("scroll",n),s||a===u||(s=[])):(s=s||[]).push(c,u))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};dE=function(n,e,t,r){t!==r&&(e.flags|=4)};function ra(n,e){if(!Te)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function mt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function i1(n,e,t){var r=e.pendingProps;switch(hm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return Ut(e.type)&&Ic(),mt(e),null;case 3:return r=e.stateNode,to(),Ie(jt),Ie(yt),Im(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(ku(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fn!==null&&(up(fn),fn=null))),tp(n,e),mt(e),null;case 5:wm(e);var i=ki(el.current);if(t=e.type,n!==null&&e.stateNode!=null)cE(n,e,t,r,i),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return mt(e),null}if(n=ki(bn.current),ku(e)){r=e.stateNode,t=e.type;var s=e.memoizedProps;switch(r[In]=e,r[Xa]=s,n=(e.mode&1)!==0,t){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<ga.length;i++)ve(ga[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Ey(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":Sy(r,s),ve("invalid",r)}Pf(t,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Pu(r.textContent,a,n),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Pu(r.textContent,a,n),i=["children",""+a]):za.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ve("scroll",r)}switch(t){case"input":wu(r),Ty(r,s,!0);break;case"textarea":wu(r),Ay(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=wc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=j0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=o.createElement(t,{is:r.is}):(n=o.createElement(t),t==="select"&&(o=n,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):n=o.createElementNS(n,t),n[In]=e,n[Xa]=r,uE(n,e,!1,!1),e.stateNode=n;e:{switch(o=kf(t,r),t){case"dialog":ve("cancel",n),ve("close",n),i=r;break;case"iframe":case"object":case"embed":ve("load",n),i=r;break;case"video":case"audio":for(i=0;i<ga.length;i++)ve(ga[i],n);i=r;break;case"source":ve("error",n),i=r;break;case"img":case"image":case"link":ve("error",n),ve("load",n),i=r;break;case"details":ve("toggle",n),i=r;break;case"input":Ey(n,r),i=Tf(n,r),ve("invalid",n);break;case"option":i=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),ve("invalid",n);break;case"textarea":Sy(n,r),i=xf(n,r),ve("invalid",n);break;default:i=r}Pf(t,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?z0(n,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&U0(n,u)):s==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&$a(n,u):typeof u=="number"&&$a(n,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(za.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ve("scroll",n):u!=null&&Jp(n,s,u,o))}switch(t){case"input":wu(n),Ty(n,r,!1);break;case"textarea":wu(n),Ay(n);break;case"option":r.value!=null&&n.setAttribute("value",""+qr(r.value));break;case"select":n.multiple=!!r.multiple,s=r.value,s!=null?js(n,!!r.multiple,s,!1):r.defaultValue!=null&&js(n,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(n.onclick=wc)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(n&&e.stateNode!=null)dE(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(t=ki(el.current),ki(bn.current),ku(e)){if(r=e.stateNode,t=e.memoizedProps,r[In]=e,(s=r.nodeValue!==t)&&(n=Kt,n!==null))switch(n.tag){case 3:Pu(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Pu(r.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[In]=e,e.stateNode=r}return mt(e),null;case 13:if(Ie(Pe),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Te&&Wt!==null&&e.mode&1&&!(e.flags&128))kI(),Zs(),e.flags|=98560,s=!1;else if(s=ku(e),r!==null&&r.dehydrated!==null){if(n===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[In]=e}else Zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),s=!1}else fn!==null&&(up(fn),fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(n===null||Pe.current&1?Qe===0&&(Qe=3):Dm())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return to(),tp(n,e),n===null&&Ya(e.stateNode.containerInfo),mt(e),null;case 10:return gm(e.type._context),mt(e),null;case 17:return Ut(e.type)&&Ic(),mt(e),null;case 19:if(Ie(Pe),s=e.memoizedState,s===null)return mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ra(s,!1);else{if(Qe!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Pc(n),o!==null){for(e.flags|=128,ra(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)s=t,n=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ge(Pe,Pe.current&1|2),e.child}n=n.sibling}s.tail!==null&&Be()>ro&&(e.flags|=128,r=!0,ra(s,!1),e.lanes=4194304)}else{if(!r)if(n=Pc(o),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),ra(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return mt(e),null}else 2*Be()-s.renderingStartTime>ro&&t!==1073741824&&(e.flags|=128,r=!0,ra(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Be(),e.sibling=null,t=Pe.current,ge(Pe,r?t&1|2:t&1),e):(mt(e),null);case 22:case 23:return Nm(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?$t&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function s1(n,e){switch(hm(e),e.tag){case 1:return Ut(e.type)&&Ic(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return to(),Ie(jt),Ie(yt),Im(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return wm(e),null;case 13:if(Ie(Pe),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Zs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ie(Pe),null;case 4:return to(),null;case 10:return gm(e.type._context),null;case 22:case 23:return Nm(),null;case 24:return null;default:return null}}var Nu=!1,_t=!1,o1=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ls(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Ve(n,e,r)}else t.current=null}function np(n,e,t){try{t()}catch(r){Ve(n,e,r)}}var pv=!1;function a1(n,e){if(jf=_c,n=gI(),cm(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=n,m=null;t:for(;;){for(var I;f!==t||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(I=f.firstChild)!==null;)m=f,f=I;for(;;){if(f===n)break t;if(m===t&&++c===i&&(a=o),m===s&&++h===r&&(u=o),(I=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=I}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Uf={focusedElem:n,selectionRange:t},_c=!1,H=e;H!==null;)if(e=H,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,H=n;else for(;H!==null;){e=H;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var k=R.memoizedProps,V=R.memoizedState,S=e.stateNode,w=S.getSnapshotBeforeUpdate(e.elementType===e.type?k:dn(e.type,k),V);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(b){Ve(e,e.return,b)}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}return R=pv,pv=!1,R}function ba(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&n)===n){var s=i.destroy;i.destroy=void 0,s!==void 0&&np(e,t,s)}i=i.next}while(i!==r)}}function md(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function rp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function hE(n){var e=n.alternate;e!==null&&(n.alternate=null,hE(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[In],delete e[Xa],delete e[$f],delete e[$P],delete e[qP])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function fE(n){return n.tag===5||n.tag===3||n.tag===4}function mv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||fE(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ip(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=wc));else if(r!==4&&(n=n.child,n!==null))for(ip(n,e,t),n=n.sibling;n!==null;)ip(n,e,t),n=n.sibling}function sp(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(sp(n,e,t),n=n.sibling;n!==null;)sp(n,e,t),n=n.sibling}var it=null,hn=!1;function vr(n,e,t){for(t=t.child;t!==null;)pE(n,e,t),t=t.sibling}function pE(n,e,t){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(ad,t)}catch{}switch(t.tag){case 5:_t||Ls(t,e);case 6:var r=it,i=hn;it=null,vr(n,e,t),it=r,hn=i,it!==null&&(hn?(n=it,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):it.removeChild(t.stateNode));break;case 18:it!==null&&(hn?(n=it,t=t.stateNode,n.nodeType===8?$h(n.parentNode,t):n.nodeType===1&&$h(n,t),Ka(n)):$h(it,t.stateNode));break;case 4:r=it,i=hn,it=t.stateNode.containerInfo,hn=!0,vr(n,e,t),it=r,hn=i;break;case 0:case 11:case 14:case 15:if(!_t&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&np(t,e,o),i=i.next}while(i!==r)}vr(n,e,t);break;case 1:if(!_t&&(Ls(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){Ve(t,e,a)}vr(n,e,t);break;case 21:vr(n,e,t);break;case 22:t.mode&1?(_t=(r=_t)||t.memoizedState!==null,vr(n,e,t),_t=r):vr(n,e,t);break;default:vr(n,e,t)}}function gv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new o1),e.forEach(function(r){var i=g1.bind(null,n,r);t.has(r)||(t.add(r),r.then(i,i))})}}function cn(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:it=a.stateNode,hn=!1;break e;case 3:it=a.stateNode.containerInfo,hn=!0;break e;case 4:it=a.stateNode.containerInfo,hn=!0;break e}a=a.return}if(it===null)throw Error(B(160));pE(s,o,i),it=null,hn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ve(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)mE(e,n),e=e.sibling}function mE(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(cn(e,n),vn(n),r&4){try{ba(3,n,n.return),md(3,n)}catch(k){Ve(n,n.return,k)}try{ba(5,n,n.return)}catch(k){Ve(n,n.return,k)}}break;case 1:cn(e,n),vn(n),r&512&&t!==null&&Ls(t,t.return);break;case 5:if(cn(e,n),vn(n),r&512&&t!==null&&Ls(t,t.return),n.flags&32){var i=n.stateNode;try{$a(i,"")}catch(k){Ve(n,n.return,k)}}if(r&4&&(i=n.stateNode,i!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,u=n.updateQueue;if(n.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&M0(i,s),kf(a,o);var c=kf(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?z0(i,f):h==="dangerouslySetInnerHTML"?U0(i,f):h==="children"?$a(i,f):Jp(i,h,f,c)}switch(a){case"input":Sf(i,s);break;case"textarea":F0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?js(i,!!s.multiple,I,!1):m!==!!s.multiple&&(s.defaultValue!=null?js(i,!!s.multiple,s.defaultValue,!0):js(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xa]=s}catch(k){Ve(n,n.return,k)}}break;case 6:if(cn(e,n),vn(n),r&4){if(n.stateNode===null)throw Error(B(162));i=n.stateNode,s=n.memoizedProps;try{i.nodeValue=s}catch(k){Ve(n,n.return,k)}}break;case 3:if(cn(e,n),vn(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ka(e.containerInfo)}catch(k){Ve(n,n.return,k)}break;case 4:cn(e,n),vn(n);break;case 13:cn(e,n),vn(n),i=n.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(bm=Be())),r&4&&gv(n);break;case 22:if(h=t!==null&&t.memoizedState!==null,n.mode&1?(_t=(c=_t)||h,cn(e,n),_t=c):cn(e,n),vn(n),r&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!h&&n.mode&1)for(H=n,h=n.child;h!==null;){for(f=H=h;H!==null;){switch(m=H,I=m.child,m.tag){case 0:case 11:case 14:case 15:ba(4,m,m.return);break;case 1:Ls(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,t=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(k){Ve(r,t,k)}}break;case 5:Ls(m,m.return);break;case 22:if(m.memoizedState!==null){yv(f);continue}}I!==null?(I.return=m,H=I):yv(f)}h=h.sibling}e:for(h=null,f=n;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=B0("display",o))}catch(k){Ve(n,n.return,k)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(k){Ve(n,n.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:cn(e,n),vn(n),r&4&&gv(n);break;case 21:break;default:cn(e,n),vn(n)}}function vn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(fE(t)){var r=t;break e}t=t.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($a(i,""),r.flags&=-33);var s=mv(n);sp(n,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=mv(n);ip(n,a,o);break;default:throw Error(B(161))}}catch(u){Ve(n,n.return,u)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function l1(n,e,t){H=n,gE(n)}function gE(n,e,t){for(var r=(n.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Nu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||_t;a=Nu;var c=_t;if(Nu=o,(_t=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?vv(i):u!==null?(u.return=o,H=u):vv(i);for(;s!==null;)H=s,gE(s),s=s.sibling;H=i,Nu=a,_t=c}_v(n)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):_v(n)}}function _v(n){for(;H!==null;){var e=H;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_t||md(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_t)if(t===null)r.componentDidMount();else{var i=e.elementType===e.type?t.memoizedProps:dn(e.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&tv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}tv(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Ka(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}_t||e.flags&512&&rp(e)}catch(m){Ve(e,e.return,m)}}if(e===n){H=null;break}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}}function yv(n){for(;H!==null;){var e=H;if(e===n){H=null;break}var t=e.sibling;if(t!==null){t.return=e.return,H=t;break}H=e.return}}function vv(n){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{md(4,e)}catch(u){Ve(e,t,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ve(e,i,u)}}var s=e.return;try{rp(e)}catch(u){Ve(e,s,u)}break;case 5:var o=e.return;try{rp(e)}catch(u){Ve(e,o,u)}}}catch(u){Ve(e,e.return,u)}if(e===n){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var u1=Math.ceil,Cc=cr.ReactCurrentDispatcher,Pm=cr.ReactCurrentOwner,rn=cr.ReactCurrentBatchConfig,ae=0,tt=null,Ke=null,at=0,$t=0,Ms=ii(0),Qe=0,il=null,Bi=0,gd=0,km=0,Ca=null,Vt=null,bm=0,ro=1/0,Gn=null,Nc=!1,op=null,jr=null,Du=!1,Cr=null,Dc=0,Na=0,ap=null,Ju=-1,Xu=0;function At(){return ae&6?Be():Ju!==-1?Ju:Ju=Be()}function Ur(n){return n.mode&1?ae&2&&at!==0?at&-at:GP.transition!==null?(Xu===0&&(Xu=eI()),Xu):(n=he,n!==0||(n=window.event,n=n===void 0?16:aI(n.type)),n):1}function mn(n,e,t,r){if(50<Na)throw Na=0,ap=null,Error(B(185));bl(n,t,r),(!(ae&2)||n!==tt)&&(n===tt&&(!(ae&2)&&(gd|=t),Qe===4&&Rr(n,at)),Bt(n,r),t===1&&ae===0&&!(e.mode&1)&&(ro=Be()+500,hd&&si()))}function Bt(n,e){var t=n.callbackNode;GR(n,e);var r=gc(n,n===tt?at:0);if(r===0)t!==null&&Py(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&Py(t),e===1)n.tag===0?WP(wv.bind(null,n)):xI(wv.bind(null,n)),BP(function(){!(ae&6)&&si()}),t=null;else{switch(tI(r)){case 1:t=nm;break;case 4:t=X0;break;case 16:t=mc;break;case 536870912:t=Z0;break;default:t=mc}t=SE(t,_E.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function _E(n,e){if(Ju=-1,Xu=0,ae&6)throw Error(B(327));var t=n.callbackNode;if(qs()&&n.callbackNode!==t)return null;var r=gc(n,n===tt?at:0);if(r===0)return null;if(r&30||r&n.expiredLanes||e)e=Vc(n,r);else{e=r;var i=ae;ae|=2;var s=vE();(tt!==n||at!==e)&&(Gn=null,ro=Be()+500,Di(n,e));do try{h1();break}catch(a){yE(n,a)}while(!0);mm(),Cc.current=s,ae=i,Ke!==null?e=0:(tt=null,at=0,e=Qe)}if(e!==0){if(e===2&&(i=Vf(n),i!==0&&(r=i,e=lp(n,i))),e===1)throw t=il,Di(n,0),Rr(n,r),Bt(n,Be()),t;if(e===6)Rr(n,r);else{if(i=n.current.alternate,!(r&30)&&!c1(i)&&(e=Vc(n,r),e===2&&(s=Vf(n),s!==0&&(r=s,e=lp(n,s))),e===1))throw t=il,Di(n,0),Rr(n,r),Bt(n,Be()),t;switch(n.finishedWork=i,n.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:vi(n,Vt,Gn);break;case 3:if(Rr(n,r),(r&130023424)===r&&(e=bm+500-Be(),10<e)){if(gc(n,0)!==0)break;if(i=n.suspendedLanes,(i&r)!==r){At(),n.pingedLanes|=n.suspendedLanes&i;break}n.timeoutHandle=zf(vi.bind(null,n,Vt,Gn),e);break}vi(n,Vt,Gn);break;case 4:if(Rr(n,r),(r&4194240)===r)break;for(e=n.eventTimes,i=-1;0<r;){var o=31-pn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*u1(r/1960))-r,10<r){n.timeoutHandle=zf(vi.bind(null,n,Vt,Gn),r);break}vi(n,Vt,Gn);break;case 5:vi(n,Vt,Gn);break;default:throw Error(B(329))}}}return Bt(n,Be()),n.callbackNode===t?_E.bind(null,n):null}function lp(n,e){var t=Ca;return n.current.memoizedState.isDehydrated&&(Di(n,e).flags|=256),n=Vc(n,e),n!==2&&(e=Vt,Vt=t,e!==null&&up(e)),n}function up(n){Vt===null?Vt=n:Vt.push.apply(Vt,n)}function c1(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],s=i.getSnapshot;i=i.value;try{if(!_n(s(),i))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rr(n,e){for(e&=~km,e&=~gd,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-pn(e),r=1<<t;n[t]=-1,e&=~r}}function wv(n){if(ae&6)throw Error(B(327));qs();var e=gc(n,0);if(!(e&1))return Bt(n,Be()),null;var t=Vc(n,e);if(n.tag!==0&&t===2){var r=Vf(n);r!==0&&(e=r,t=lp(n,r))}if(t===1)throw t=il,Di(n,0),Rr(n,e),Bt(n,Be()),t;if(t===6)throw Error(B(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,vi(n,Vt,Gn),Bt(n,Be()),null}function Cm(n,e){var t=ae;ae|=1;try{return n(e)}finally{ae=t,ae===0&&(ro=Be()+500,hd&&si())}}function zi(n){Cr!==null&&Cr.tag===0&&!(ae&6)&&qs();var e=ae;ae|=1;var t=rn.transition,r=he;try{if(rn.transition=null,he=1,n)return n()}finally{he=r,rn.transition=t,ae=e,!(ae&6)&&si()}}function Nm(){$t=Ms.current,Ie(Ms)}function Di(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,UP(t)),Ke!==null)for(t=Ke.return;t!==null;){var r=t;switch(hm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ic();break;case 3:to(),Ie(jt),Ie(yt),Im();break;case 5:wm(r);break;case 4:to();break;case 13:Ie(Pe);break;case 19:Ie(Pe);break;case 10:gm(r.type._context);break;case 22:case 23:Nm()}t=t.return}if(tt=n,Ke=n=Br(n.current,null),at=$t=e,Qe=0,il=null,km=gd=Bi=0,Vt=Ca=null,Pi!==null){for(e=0;e<Pi.length;e++)if(t=Pi[e],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,s=t.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}t.pending=r}Pi=null}return n}function yE(n,e){do{var t=Ke;try{if(mm(),Hu.current=bc,kc){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}kc=!1}if(Ui=0,Ze=He=ke=null,ka=!1,tl=0,Pm.current=null,t===null||t.return===null){Qe=1,il=e,Ke=null;break}e:{var s=n,o=t.return,a=t,u=e;if(e=at,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var I=av(o);if(I!==null){I.flags&=-257,lv(I,o,a,s,e),I.mode&1&&ov(s,c,e),e=I,u=c;var R=e.updateQueue;if(R===null){var k=new Set;k.add(u),e.updateQueue=k}else R.add(u);break e}else{if(!(e&1)){ov(s,c,e),Dm();break e}u=Error(B(426))}}else if(Te&&a.mode&1){var V=av(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),lv(V,o,a,s,e),fm(no(u,a));break e}}s=u=no(u,a),Qe!==4&&(Qe=2),Ca===null?Ca=[s]:Ca.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=tE(s,u,e);ev(s,S);break e;case 1:a=u;var w=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(jr===null||!jr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=nE(s,a,e);ev(s,b);break e}}s=s.return}while(s!==null)}IE(t)}catch(M){e=M,Ke===t&&t!==null&&(Ke=t=t.return);continue}break}while(!0)}function vE(){var n=Cc.current;return Cc.current=bc,n===null?bc:n}function Dm(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),tt===null||!(Bi&268435455)&&!(gd&268435455)||Rr(tt,at)}function Vc(n,e){var t=ae;ae|=2;var r=vE();(tt!==n||at!==e)&&(Gn=null,Di(n,e));do try{d1();break}catch(i){yE(n,i)}while(!0);if(mm(),ae=t,Cc.current=r,Ke!==null)throw Error(B(261));return tt=null,at=0,Qe}function d1(){for(;Ke!==null;)wE(Ke)}function h1(){for(;Ke!==null&&!MR();)wE(Ke)}function wE(n){var e=TE(n.alternate,n,$t);n.memoizedProps=n.pendingProps,e===null?IE(n):Ke=e,Pm.current=null}function IE(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=s1(t,e),t!==null){t.flags&=32767,Ke=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qe=6,Ke=null;return}}else if(t=i1(t,e,$t),t!==null){Ke=t;return}if(e=e.sibling,e!==null){Ke=e;return}Ke=e=n}while(e!==null);Qe===0&&(Qe=5)}function vi(n,e,t){var r=he,i=rn.transition;try{rn.transition=null,he=1,f1(n,e,t,r)}finally{rn.transition=i,he=r}return null}function f1(n,e,t,r){do qs();while(Cr!==null);if(ae&6)throw Error(B(327));t=n.finishedWork;var i=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(B(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(KR(n,s),n===tt&&(Ke=tt=null,at=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Du||(Du=!0,SE(mc,function(){return qs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=rn.transition,rn.transition=null;var o=he;he=1;var a=ae;ae|=4,Pm.current=null,a1(n,t),mE(t,n),DP(Uf),_c=!!jf,Uf=jf=null,n.current=t,l1(t),FR(),ae=a,he=o,rn.transition=s}else n.current=t;if(Du&&(Du=!1,Cr=n,Dc=i),s=n.pendingLanes,s===0&&(jr=null),BR(t.stateNode),Bt(n,Be()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)i=e[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Nc)throw Nc=!1,n=op,op=null,n;return Dc&1&&n.tag!==0&&qs(),s=n.pendingLanes,s&1?n===ap?Na++:(Na=0,ap=n):Na=0,si(),null}function qs(){if(Cr!==null){var n=tI(Dc),e=rn.transition,t=he;try{if(rn.transition=null,he=16>n?16:n,Cr===null)var r=!1;else{if(n=Cr,Cr=null,Dc=0,ae&6)throw Error(B(331));var i=ae;for(ae|=4,H=n.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(H=c;H!==null;){var h=H;switch(h.tag){case 0:case 11:case 15:ba(8,h,s)}var f=h.child;if(f!==null)f.return=h,H=f;else for(;H!==null;){h=H;var m=h.sibling,I=h.return;if(hE(h),h===c){H=null;break}if(m!==null){m.return=I,H=m;break}H=I}}}var R=s.alternate;if(R!==null){var k=R.child;if(k!==null){R.child=null;do{var V=k.sibling;k.sibling=null,k=V}while(k!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ba(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,H=S;break e}H=s.return}}var w=n.current;for(H=w;H!==null;){o=H;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,H=v;else e:for(o=w;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:md(9,a)}}catch(M){Ve(a,a.return,M)}if(a===o){H=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,H=b;break e}H=a.return}}if(ae=i,si(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(ad,n)}catch{}r=!0}return r}finally{he=t,rn.transition=e}}return!1}function Iv(n,e,t){e=no(t,e),e=tE(n,e,1),n=Fr(n,e,1),e=At(),n!==null&&(bl(n,1,e),Bt(n,e))}function Ve(n,e,t){if(n.tag===3)Iv(n,n,t);else for(;e!==null;){if(e.tag===3){Iv(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){n=no(t,n),n=nE(e,n,1),e=Fr(e,n,1),n=At(),e!==null&&(bl(e,1,n),Bt(e,n));break}}e=e.return}}function p1(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=At(),n.pingedLanes|=n.suspendedLanes&t,tt===n&&(at&t)===t&&(Qe===4||Qe===3&&(at&130023424)===at&&500>Be()-bm?Di(n,0):km|=t),Bt(n,e)}function EE(n,e){e===0&&(n.mode&1?(e=Tu,Tu<<=1,!(Tu&130023424)&&(Tu=4194304)):e=1);var t=At();n=ir(n,e),n!==null&&(bl(n,e,t),Bt(n,t))}function m1(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),EE(n,t)}function g1(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,i=n.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=n.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),EE(n,t)}var TE;TE=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||jt.current)Ot=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Ot=!1,r1(n,e,t);Ot=!!(n.flags&131072)}else Ot=!1,Te&&e.flags&1048576&&RI(e,Sc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Yu(n,e),n=e.pendingProps;var i=Xs(e,yt.current);$s(e,t),i=Tm(null,e,r,n,i,t);var s=Sm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ut(r)?(s=!0,Ec(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ym(e),i.updater=pd,e.stateNode=i,i._reactInternals=e,Qf(e,r,n,t),e=Xf(null,e,r,!0,s,t)):(e.tag=0,Te&&s&&dm(e),Et(null,e,i,t),e=e.child),e;case 16:r=e.elementType;e:{switch(Yu(n,e),n=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=y1(r),n=dn(r,n),i){case 0:e=Jf(null,e,r,n,t);break e;case 1:e=dv(null,e,r,n,t);break e;case 11:e=uv(null,e,r,n,t);break e;case 14:e=cv(null,e,r,dn(r.type,n),t);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Jf(n,e,r,i,t);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),dv(n,e,r,i,t);case 3:e:{if(oE(e),n===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,DI(n,e),Rc(e,r,null,t);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=no(Error(B(423)),e),e=hv(n,e,r,t,i);break e}else if(r!==i){i=no(Error(B(424)),e),e=hv(n,e,r,t,i);break e}else for(Wt=Mr(e.stateNode.containerInfo.firstChild),Kt=e,Te=!0,fn=null,t=CI(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Zs(),r===i){e=sr(n,e,t);break e}Et(n,e,r,t)}e=e.child}return e;case 5:return VI(e),n===null&&Gf(e),r=e.type,i=e.pendingProps,s=n!==null?n.memoizedProps:null,o=i.children,Bf(r,i)?o=null:s!==null&&Bf(r,s)&&(e.flags|=32),sE(n,e),Et(n,e,o,t),e.child;case 6:return n===null&&Gf(e),null;case 13:return aE(n,e,t);case 4:return vm(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=eo(e,null,r,t):Et(n,e,r,t),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),uv(n,e,r,i,t);case 7:return Et(n,e,e.pendingProps,t),e.child;case 8:return Et(n,e,e.pendingProps.children,t),e.child;case 12:return Et(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(Ac,r._currentValue),r._currentValue=o,s!==null)if(_n(s.value,o)){if(s.children===i.children&&!jt.current){e=sr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Zn(-1,t&-t),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=t,u=s.alternate,u!==null&&(u.lanes|=t),Kf(s.return,t,e),a.lanes|=t;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Kf(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Et(n,e,i.children,t),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,$s(e,t),i=on(i),r=r(i),e.flags|=1,Et(n,e,r,t),e.child;case 14:return r=e.type,i=dn(r,e.pendingProps),i=dn(r.type,i),cv(n,e,r,i,t);case 15:return rE(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Yu(n,e),e.tag=1,Ut(r)?(n=!0,Ec(e)):n=!1,$s(e,t),eE(e,r,i),Qf(e,r,i,t),Xf(null,e,r,!0,n,t);case 19:return lE(n,e,t);case 22:return iE(n,e,t)}throw Error(B(156,e.tag))};function SE(n,e){return J0(n,e)}function _1(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(n,e,t,r){return new _1(n,e,t,r)}function Vm(n){return n=n.prototype,!(!n||!n.isReactComponent)}function y1(n){if(typeof n=="function")return Vm(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Zp)return 11;if(n===em)return 14}return 2}function Br(n,e){var t=n.alternate;return t===null?(t=tn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Zu(n,e,t,r,i,s){var o=2;if(r=n,typeof n=="function")Vm(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Rs:return Vi(t.children,i,s,e);case Xp:o=8,i|=8;break;case vf:return n=tn(12,t,e,i|2),n.elementType=vf,n.lanes=s,n;case wf:return n=tn(13,t,e,i),n.elementType=wf,n.lanes=s,n;case If:return n=tn(19,t,e,i),n.elementType=If,n.lanes=s,n;case V0:return _d(t,i,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N0:o=10;break e;case D0:o=9;break e;case Zp:o=11;break e;case em:o=14;break e;case Sr:o=16,r=null;break e}throw Error(B(130,n==null?n:typeof n,""))}return e=tn(o,t,e,i),e.elementType=n,e.type=r,e.lanes=s,e}function Vi(n,e,t,r){return n=tn(7,n,r,e),n.lanes=t,n}function _d(n,e,t,r){return n=tn(22,n,r,e),n.elementType=V0,n.lanes=t,n.stateNode={isHidden:!1},n}function Jh(n,e,t){return n=tn(6,n,null,e),n.lanes=t,n}function Xh(n,e,t){return e=tn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function v1(n,e,t,r,i){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nh(0),this.expirationTimes=Nh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Om(n,e,t,r,i,s,o,a,u){return n=new v1(n,e,t,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=tn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ym(s),n}function w1(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function AE(n){if(!n)return Wr;n=n._reactInternals;e:{if(ns(n)!==n||n.tag!==1)throw Error(B(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(n.tag===1){var t=n.type;if(Ut(t))return AI(n,t,e)}return e}function xE(n,e,t,r,i,s,o,a,u){return n=Om(t,r,!0,n,i,s,o,a,u),n.context=AE(null),t=n.current,r=At(),i=Ur(t),s=Zn(r,i),s.callback=e??null,Fr(t,s,i),n.current.lanes=i,bl(n,i,r),Bt(n,r),n}function yd(n,e,t,r){var i=e.current,s=At(),o=Ur(i);return t=AE(t),e.context===null?e.context=t:e.pendingContext=t,e=Zn(s,o),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=Fr(i,e,o),n!==null&&(mn(n,i,o,s),Ku(n,i,o)),o}function Oc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ev(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Lm(n,e){Ev(n,e),(n=n.alternate)&&Ev(n,e)}function I1(){return null}var RE=typeof reportError=="function"?reportError:function(n){console.error(n)};function Mm(n){this._internalRoot=n}vd.prototype.render=Mm.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(B(409));yd(n,e,null,null)};vd.prototype.unmount=Mm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;zi(function(){yd(null,n,null,null)}),e[rr]=null}};function vd(n){this._internalRoot=n}vd.prototype.unstable_scheduleHydration=function(n){if(n){var e=iI();n={blockedOn:null,target:n,priority:e};for(var t=0;t<xr.length&&e!==0&&e<xr[t].priority;t++);xr.splice(t,0,n),t===0&&oI(n)}};function Fm(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function wd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Tv(){}function E1(n,e,t,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Oc(o);s.call(c)}}var o=xE(e,r,n,0,null,!1,!1,"",Tv);return n._reactRootContainer=o,n[rr]=o.current,Ya(n.nodeType===8?n.parentNode:n),zi(),o}for(;i=n.lastChild;)n.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Oc(u);a.call(c)}}var u=Om(n,0,!1,null,null,!1,!1,"",Tv);return n._reactRootContainer=u,n[rr]=u.current,Ya(n.nodeType===8?n.parentNode:n),zi(function(){yd(e,u,t,r)}),u}function Id(n,e,t,r,i){var s=t._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Oc(o);a.call(u)}}yd(e,o,n,i)}else o=E1(t,e,n,i,r);return Oc(o)}nI=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ma(e.pendingLanes);t!==0&&(rm(e,t|1),Bt(e,Be()),!(ae&6)&&(ro=Be()+500,si()))}break;case 13:zi(function(){var r=ir(n,1);if(r!==null){var i=At();mn(r,n,1,i)}}),Lm(n,1)}};im=function(n){if(n.tag===13){var e=ir(n,134217728);if(e!==null){var t=At();mn(e,n,134217728,t)}Lm(n,134217728)}};rI=function(n){if(n.tag===13){var e=Ur(n),t=ir(n,e);if(t!==null){var r=At();mn(t,n,e,r)}Lm(n,e)}};iI=function(){return he};sI=function(n,e){var t=he;try{return he=n,e()}finally{he=t}};Cf=function(n,e,t){switch(e){case"input":if(Sf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var i=dd(r);if(!i)throw Error(B(90));L0(r),Sf(r,i)}}}break;case"textarea":F0(n,t);break;case"select":e=t.value,e!=null&&js(n,!!t.multiple,e,!1)}};W0=Cm;G0=zi;var T1={usingClientEntryPoint:!1,Events:[Nl,Cs,dd,$0,q0,Cm]},ia={findFiberByHostInstance:Ri,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},S1={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Q0(n),n===null?null:n.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||I1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{ad=Vu.inject(S1),kn=Vu}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T1;Yt.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fm(e))throw Error(B(200));return w1(n,e,null,t)};Yt.createRoot=function(n,e){if(!Fm(n))throw Error(B(299));var t=!1,r="",i=RE;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Om(n,1,!1,null,null,t,!1,r,i),n[rr]=e.current,Ya(n.nodeType===8?n.parentNode:n),new Mm(e)};Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(B(188)):(n=Object.keys(n).join(","),Error(B(268,n)));return n=Q0(e),n=n===null?null:n.stateNode,n};Yt.flushSync=function(n){return zi(n)};Yt.hydrate=function(n,e,t){if(!wd(e))throw Error(B(200));return Id(null,n,e,!0,t)};Yt.hydrateRoot=function(n,e,t){if(!Fm(n))throw Error(B(405));var r=t!=null&&t.hydratedSources||null,i=!1,s="",o=RE;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=xE(e,null,n,1,t??null,i,!1,s,o),n[rr]=e.current,Ya(n),r)for(n=0;n<r.length;n++)t=r[n],i=t._getVersion,i=i(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,i]:e.mutableSourceEagerHydrationData.push(t,i);return new vd(e)};Yt.render=function(n,e,t){if(!wd(e))throw Error(B(200));return Id(null,n,e,!1,t)};Yt.unmountComponentAtNode=function(n){if(!wd(n))throw Error(B(40));return n._reactRootContainer?(zi(function(){Id(null,null,n,!1,function(){n._reactRootContainer=null,n[rr]=null})}),!0):!1};Yt.unstable_batchedUpdates=Cm;Yt.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!wd(t))throw Error(B(200));if(n==null||n._reactInternals===void 0)throw Error(B(38));return Id(n,e,t,!1,r)};Yt.version="18.3.1-next-f1338f8080-20240426";function PE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(PE)}catch(n){console.error(n)}}PE(),P0.exports=Yt;var A1=P0.exports,Sv=A1;_f.createRoot=Sv.createRoot,_f.hydrateRoot=Sv.hydrateRoot;var Av={};/**
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
 */const kE=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},x1=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},bE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,u=i+2<n.length,c=u?n[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,I=c&63;u||(I=64,o||(m=64)),r.push(t[h],t[f],t[m],t[I])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(kE(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):x1(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new R1;const m=s<<2|a>>4;if(r.push(m),c!==64){const I=a<<4&240|c>>2;if(r.push(I),f!==64){const R=c<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class R1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const P1=function(n){const e=kE(n);return bE.encodeByteArray(e,!0)},Lc=function(n){return P1(n).replace(/\./g,"")},CE=function(n){try{return bE.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Mc(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!k1(t)||(n[t]=Mc(n[t],e[t]));return n}function k1(n){return n!=="__proto__"}/**
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
 */function NE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const b1=()=>NE().__FIREBASE_DEFAULTS__,C1=()=>{if(typeof process>"u"||typeof Av>"u")return;const n=Av.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},N1=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&CE(n[1]);return e&&JSON.parse(e)},jm=()=>{try{return b1()||C1()||N1()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},DE=()=>{var n;return(n=jm())===null||n===void 0?void 0:n.config},D1=n=>{var e;return(e=jm())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class V1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function O1(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Lc(JSON.stringify(t)),Lc(JSON.stringify(o)),""].join(".")}/**
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
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function L1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function Um(){var n;const e=(n=jm())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function M1(){return typeof window<"u"||VE()}function VE(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function F1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function OE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Bm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LE(){const n=Ne();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ME(){return!Um()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sl(){try{return typeof indexedDB=="object"}catch{return!1}}function j1(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const U1="FirebaseError";class xt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=U1,Object.setPrototypeOf(this,xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rs.prototype.create)}}class rs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?B1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xt(i,a,r)}}function B1(n,e){return n.replace(z1,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const z1=/\{\$([^}]+)}/g;/**
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
 */function xv(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function $1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ol(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Rv(s)&&Rv(o)){if(!ol(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Rv(n){return n!==null&&typeof n=="object"}/**
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
 */function Ao(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function _a(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function FE(n,e){const t=new q1(n,e);return t.subscribe.bind(t)}class q1{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");W1(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Zh),i.error===void 0&&(i.error=Zh),i.complete===void 0&&(i.complete=Zh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function W1(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Zh(){}/**
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
 */function J(n){return n&&n._delegate?n._delegate:n}class Vn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wi="[DEFAULT]";/**
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
 */class G1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new V1;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(H1(e))try{this.getOrInitializeService({instanceIdentifier:wi})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wi){return this.instances.has(e)}getOptions(e=wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:K1(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wi){return this.component?this.component.multipleInstances?e:wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function K1(n){return n===wi?void 0:n}function H1(n){return n.instantiationMode==="EAGER"}/**
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
 */class jE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new G1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const zm=[];var ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ne||(ne={}));const UE={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Q1=ne.INFO,Y1={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},J1=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Y1[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ed{constructor(e){this.name=e,this._logLevel=Q1,this._logHandler=J1,this._userLogHandler=null,zm.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}function X1(n){zm.forEach(e=>{e.setLogLevel(n)})}function Z1(n,e){for(const t of zm){let r=null;e&&e.level&&(r=UE[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&n({level:ne[s].toLowerCase(),message:a,args:o,type:i.name})}}}const ek=(n,e)=>e.some(t=>n instanceof t);let Pv,kv;function tk(){return Pv||(Pv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nk(){return kv||(kv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const BE=new WeakMap,cp=new WeakMap,zE=new WeakMap,ef=new WeakMap,$m=new WeakMap;function rk(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(zr(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&BE.set(t,n)}).catch(()=>{}),$m.set(e,n),e}function ik(n){if(cp.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});cp.set(n,e)}let dp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return cp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||zE.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return zr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function sk(n){dp=n(dp)}function ok(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(tf(this),e,...t);return zE.set(r,e.sort?e.sort():[e]),zr(r)}:nk().includes(n)?function(...e){return n.apply(tf(this),e),zr(BE.get(this))}:function(...e){return zr(n.apply(tf(this),e))}}function ak(n){return typeof n=="function"?ok(n):(n instanceof IDBTransaction&&ik(n),ek(n,tk())?new Proxy(n,dp):n)}function zr(n){if(n instanceof IDBRequest)return rk(n);if(ef.has(n))return ef.get(n);const e=ak(n);return e!==n&&(ef.set(n,e),$m.set(e,n)),e}const tf=n=>$m.get(n);function lk(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=zr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(zr(o.result),u.oldVersion,u.newVersion,zr(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const uk=["get","getKey","getAll","getAllKeys","count"],ck=["put","add","delete","clear"],nf=new Map;function bv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(nf.get(e))return nf.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=ck.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uk.includes(t)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&u.done]))[0]};return nf.set(e,s),s}sk(n=>({...n,get:(e,t,r)=>bv(e,t)||n.get(e,t,r),has:(e,t)=>!!bv(e,t)||n.has(e,t)}));/**
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
 */class dk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(hk(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function hk(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fc="@firebase/app",hp="0.10.13";/**
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
 */const or=new Ed("@firebase/app"),fk="@firebase/app-compat",pk="@firebase/analytics-compat",mk="@firebase/analytics",gk="@firebase/app-check-compat",_k="@firebase/app-check",yk="@firebase/auth",vk="@firebase/auth-compat",wk="@firebase/database",Ik="@firebase/data-connect",Ek="@firebase/database-compat",Tk="@firebase/functions",Sk="@firebase/functions-compat",Ak="@firebase/installations",xk="@firebase/installations-compat",Rk="@firebase/messaging",Pk="@firebase/messaging-compat",kk="@firebase/performance",bk="@firebase/performance-compat",Ck="@firebase/remote-config",Nk="@firebase/remote-config-compat",Dk="@firebase/storage",Vk="@firebase/storage-compat",Ok="@firebase/firestore",Lk="@firebase/vertexai-preview",Mk="@firebase/firestore-compat",Fk="firebase",jk="10.14.1";/**
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
 */const Gr="[DEFAULT]",Uk={[Fc]:"fire-core",[fk]:"fire-core-compat",[mk]:"fire-analytics",[pk]:"fire-analytics-compat",[_k]:"fire-app-check",[gk]:"fire-app-check-compat",[yk]:"fire-auth",[vk]:"fire-auth-compat",[wk]:"fire-rtdb",[Ik]:"fire-data-connect",[Ek]:"fire-rtdb-compat",[Tk]:"fire-fn",[Sk]:"fire-fn-compat",[Ak]:"fire-iid",[xk]:"fire-iid-compat",[Rk]:"fire-fcm",[Pk]:"fire-fcm-compat",[kk]:"fire-perf",[bk]:"fire-perf-compat",[Ck]:"fire-rc",[Nk]:"fire-rc-compat",[Dk]:"fire-gcs",[Vk]:"fire-gcs-compat",[Ok]:"fire-fst",[Mk]:"fire-fst-compat",[Lk]:"fire-vertex","fire-js":"fire-js",[Fk]:"fire-js-all"};/**
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
 */const Kr=new Map,io=new Map,so=new Map;function al(n,e){try{n.container.addComponent(e)}catch(t){or.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function $E(n,e){n.container.addOrOverwriteComponent(e)}function Hr(n){const e=n.name;if(so.has(e))return or.debug(`There were multiple attempts to register component ${e}.`),!1;so.set(e,n);for(const t of Kr.values())al(t,n);for(const t of io.values())al(t,n);return!0}function qE(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Bk(n,e,t=Gr){qE(n,e).clearInstance(t)}function WE(n){return n.options!==void 0}function Oe(n){return n.settings!==void 0}function zk(){so.clear()}/**
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
 */const $k={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sn=new rs("app","Firebase",$k);/**
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
 */let GE=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sn.create("app-deleted",{appName:this._name})}};/**
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
 */class qk extends GE{constructor(e,t,r,i){const s=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,gn(Fc,hp,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Wm(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw sn.create("server-app-deleted")}}/**
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
 */const oi=jk;function qm(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw sn.create("bad-app-name",{appName:String(i)});if(t||(t=DE()),!t)throw sn.create("no-options");const s=Kr.get(i);if(s){if(ol(t,s.options)&&ol(r,s.config))return s;throw sn.create("duplicate-app",{appName:i})}const o=new jE(i);for(const u of so.values())o.addComponent(u);const a=new GE(t,r,o);return Kr.set(i,a),a}function Wk(n,e){if(M1()&&!VE())throw sn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;WE(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((h,f)=>Math.imul(31,h)+f.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw sn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=io.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new jE(s);for(const c of so.values())a.addComponent(c);const u=new qk(t,e,s,a);return io.set(s,u),u}function Gk(n=Gr){const e=Kr.get(n);if(!e&&n===Gr&&DE())return qm();if(!e)throw sn.create("no-app",{appName:n});return e}function Kk(){return Array.from(Kr.values())}async function Wm(n){let e=!1;const t=n.name;Kr.has(t)?(e=!0,Kr.delete(t)):io.has(t)&&n.decRefCount()<=0&&(io.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function gn(n,e,t){var r;let i=(r=Uk[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),or.warn(a.join(" "));return}Hr(new Vn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function KE(n,e){if(n!==null&&typeof n!="function")throw sn.create("invalid-log-argument");Z1(n,e)}function HE(n){X1(n)}/**
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
 */const Hk="firebase-heartbeat-database",Qk=1,ll="firebase-heartbeat-store";let rf=null;function QE(){return rf||(rf=lk(Hk,Qk,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ll)}catch(t){console.warn(t)}}}}).catch(n=>{throw sn.create("idb-open",{originalErrorMessage:n.message})})),rf}async function Yk(n){try{const t=(await QE()).transaction(ll),r=await t.objectStore(ll).get(YE(n));return await t.done,r}catch(e){if(e instanceof xt)or.warn(e.message);else{const t=sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});or.warn(t.message)}}}async function Cv(n,e){try{const r=(await QE()).transaction(ll,"readwrite");await r.objectStore(ll).put(e,YE(n)),await r.done}catch(t){if(t instanceof xt)or.warn(t.message);else{const r=sn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});or.warn(r.message)}}}function YE(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Jk=1024,Xk=30*24*60*60*1e3;class Zk{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new tb(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Nv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Xk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){or.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Nv(),{heartbeatsToSend:r,unsentEntries:i}=eb(this._heartbeatsCache.heartbeats),s=Lc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return or.warn(t),""}}}function Nv(){return new Date().toISOString().substring(0,10)}function eb(n,e=Jk){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Dv(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Dv(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class tb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sl()?j1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Yk(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dv(n){return Lc(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function nb(n){Hr(new Vn("platform-logger",e=>new dk(e),"PRIVATE")),Hr(new Vn("heartbeat",e=>new Zk(e),"PRIVATE")),gn(Fc,hp,n),gn(Fc,hp,"esm2017"),gn("fire-js","")}nb("");const rb=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:xt,SDK_VERSION:oi,_DEFAULT_ENTRY_NAME:Gr,_addComponent:al,_addOrOverwriteComponent:$E,_apps:Kr,_clearComponents:zk,_components:so,_getProvider:qE,_isFirebaseApp:WE,_isFirebaseServerApp:Oe,_registerComponent:Hr,_removeServiceInstance:Bk,_serverApps:io,deleteApp:Wm,getApp:Gk,getApps:Kk,initializeApp:qm,initializeServerApp:Wk,onLog:KE,registerVersion:gn,setLogLevel:HE},Symbol.toStringTag,{value:"Module"}));/**
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
 */class ib{constructor(e,t){this._delegate=e,this.firebase=t,al(e,new Vn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Wm(this._delegate)))}_getService(e,t=Gr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Gr){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){al(this._delegate,e)}_addOrOverwriteComponent(e){$E(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const sb={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Vv=new rs("app-compat","Firebase",sb);/**
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
 */function ob(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:gn,setLogLevel:HE,onLog:KE,apps:null,SDK_VERSION:oi,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:rb}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||Gr,!xv(e,c))throw Vv.create("no-app",{appName:c});return e[c]}i.App=n;function s(c,h={}){const f=qm(c,h);if(xv(e,f.name))return e[f.name];const m=new n(f,t);return e[f.name]=m,m}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const h=c.name,f=h.replace("-compat","");if(Hr(c)&&c.type==="PUBLIC"){const m=(I=i())=>{if(typeof I[f]!="function")throw Vv.create("invalid-app-argument",{appName:h});return I[f]()};c.serviceProps!==void 0&&Mc(m,c.serviceProps),t[f]=m,n.prototype[f]=function(...I){return this._getService.bind(this,h).apply(this,c.multipleInstances?I:[])}}return c.type==="PUBLIC"?t[f]:null}function u(c,h){return h==="serverAuth"?null:h}return t}/**
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
 */function JE(){const n=ob(ib);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:JE,extendNamespace:e,createSubscribe:FE,ErrorFactory:rs,deepExtend:Mc});function e(t){Mc(n,t)}return n}const ab=JE();/**
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
 */const Ov=new Ed("@firebase/app-compat"),lb="@firebase/app-compat",ub="0.2.43";/**
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
 */function cb(n){gn(lb,ub,n)}/**
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
 */try{const n=NE();if(n.firebase!==void 0){Ov.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Ov.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Cn=ab;cb();var db="firebase",hb="10.14.1";/**
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
 */Cn.registerVersion(db,hb,"app-compat");function Gm(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const sa={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},ms={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function fb(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function XE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pb=fb,mb=XE,ZE=new rs("auth","Firebase",XE());/**
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
 */const jc=new Ed("@firebase/auth");function gb(n,...e){jc.logLevel<=ne.WARN&&jc.warn(`Auth (${oi}): ${n}`,...e)}function ec(n,...e){jc.logLevel<=ne.ERROR&&jc.error(`Auth (${oi}): ${n}`,...e)}/**
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
 */function ct(n,...e){throw Hm(n,...e)}function Ye(n,...e){return Hm(n,...e)}function Km(n,e,t){const r=Object.assign(Object.assign({},mb()),{[e]:t});return new rs("auth","Firebase",r).create(e,{appName:n.name})}function nt(n){return Km(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xo(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ct(n,"argument-error"),Km(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hm(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ZE.create(n,...e)}function z(n,e,...t){if(!n)throw Hm(e,...t)}function xn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ec(e),new Error(e)}function yn(n,e){n||xn(e)}/**
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
 */function ul(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Qm(){return Lv()==="http:"||Lv()==="https:"}function Lv(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function _b(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qm()||OE()||"connection"in navigator)?navigator.onLine:!0}function yb(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Vl{constructor(e,t){this.shortDelay=e,this.longDelay=t,yn(t>e,"Short delay should be less than long delay!"),this.isMobile=L1()||Bm()}get(){return _b()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ym(n,e){yn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class eT{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const wb=new Vl(3e4,6e4);function Fe(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function je(n,e,t,r,i={}){return tT(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ao(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:u},s);return F1()||(c.referrerPolicy="no-referrer"),eT.fetch()(nT(n,n.config.apiHost,t,a),c)})}async function tT(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},vb),e);try{const i=new Eb(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ya(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ya(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ya(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw ya(n,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Km(n,h,c);ct(n,h)}}catch(i){if(i instanceof xt)throw i;ct(n,"network-request-failed",{message:String(i)})}}async function dr(n,e,t,r,i={}){const s=await je(n,e,t,r,i);return"mfaPendingCredential"in s&&ct(n,"multi-factor-auth-required",{_serverResponse:s}),s}function nT(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Ym(n.config,i):`${n.config.apiScheme}://${i}`}function Ib(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Eb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),wb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ya(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ye(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */function Mv(n){return n!==void 0&&n.getResponse!==void 0}function Fv(n){return n!==void 0&&n.enterprise!==void 0}class Tb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ib(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function Sb(n){return(await je(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Ab(n,e){return je(n,"GET","/v2/recaptchaConfig",Fe(n,e))}/**
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
 */async function xb(n,e){return je(n,"POST","/v1/accounts:delete",e)}async function Rb(n,e){return je(n,"POST","/v1/accounts:update",e)}async function rT(n,e){return je(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Da(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pb(n,e=!1){const t=J(n),r=await t.getIdToken(e),i=Td(r);z(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Da(sf(i.auth_time)),issuedAtTime:Da(sf(i.iat)),expirationTime:Da(sf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sf(n){return Number(n)*1e3}function Td(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ec("JWT malformed, contained fewer than 3 sections"),null;try{const i=CE(t);return i?JSON.parse(i):(ec("Failed to decode base64 JWT payload"),null)}catch(i){return ec("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jv(n){const e=Td(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ar(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof xt&&kb(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function kb({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class bb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Da(this.lastLoginAt),this.creationTime=Da(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function cl(n){var e;const t=n.auth,r=await n.getIdToken(),i=await ar(n,rT(t,{idToken:r}));z(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?iT(s.providerUserInfo):[],a=Nb(n.providerData,o),u=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new fp(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function Cb(n){const e=J(n);await cl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Nb(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function iT(n){return n.map(e=>{var{providerId:t}=e,r=Gm(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Db(n,e){const t=await tT(n,{},async()=>{const r=Ao({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=nT(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",eT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Vb(n,e){return je(n,"POST","/v2/accounts:revokeToken",Fe(n,e))}/**
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
 */class Ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=jv(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Db(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Ws;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ws,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
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
 */function wr(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Yn{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Gm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ar(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Pb(this,e)}reload(){return Cb(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await cl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Oe(this.auth.app))return Promise.reject(nt(this.auth));const e=await this.getIdToken();return await ar(this,xb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,u,c,h;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(i=t.email)!==null&&i!==void 0?i:void 0,I=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(a=t.tenantId)!==null&&a!==void 0?a:void 0,V=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=t.createdAt)!==null&&c!==void 0?c:void 0,w=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:v,emailVerified:b,isAnonymous:M,providerData:j,stsTokenManager:T}=t;z(v&&T,e,"internal-error");const y=Ws.fromJSON(this.name,T);z(typeof v=="string",e,"internal-error"),wr(f,e.name),wr(m,e.name),z(typeof b=="boolean",e,"internal-error"),z(typeof M=="boolean",e,"internal-error"),wr(I,e.name),wr(R,e.name),wr(k,e.name),wr(V,e.name),wr(S,e.name),wr(w,e.name);const E=new Yn({uid:v,auth:e,email:m,emailVerified:b,displayName:f,isAnonymous:M,photoURL:R,phoneNumber:I,tenantId:k,stsTokenManager:y,createdAt:S,lastLoginAt:w});return j&&Array.isArray(j)&&(E.providerData=j.map(A=>Object.assign({},A))),V&&(E._redirectEventId=V),E}static async _fromIdTokenResponse(e,t,r=!1){const i=new Ws;i.updateFromServerResponse(t);const s=new Yn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await cl(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?iT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ws;a.updateFromIdToken(r);const u=new Yn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new fp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Uv=new Map;function Gt(n){yn(n instanceof Function,"Expected a class definition");let e=Uv.get(n);return e?(yn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Uv.set(n,e),e)}/**
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
 */class sT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sT.type="NONE";const oo=sT;/**
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
 */function Oi(n,e,t){return`firebase:${n}:${e}:${t}`}class Gs{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Oi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Oi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Gs(Gt(oo),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Gt(oo);const o=Oi(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const h=await c._get(o);if(h){const f=Yn._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Gs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Gs(s,e,r))}}/**
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
 */function Bv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cT(e))return"Blackberry";if(dT(e))return"Webos";if(aT(e))return"Safari";if((e.includes("chrome/")||lT(e))&&!e.includes("edge/"))return"Chrome";if(Ol(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function oT(n=Ne()){return/firefox\//i.test(n)}function aT(n=Ne()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lT(n=Ne()){return/crios\//i.test(n)}function uT(n=Ne()){return/iemobile/i.test(n)}function Ol(n=Ne()){return/android/i.test(n)}function cT(n=Ne()){return/blackberry/i.test(n)}function dT(n=Ne()){return/webos/i.test(n)}function Ll(n=Ne()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ob(n=Ne()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function Lb(n=Ne()){var e;return Ll(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Mb(){return LE()&&document.documentMode===10}function hT(n=Ne()){return Ll(n)||Ol(n)||dT(n)||cT(n)||/windows phone/i.test(n)||uT(n)}/**
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
 */function fT(n,e=[]){let t;switch(n){case"Browser":t=Bv(Ne());break;case"Worker":t=`${Bv(Ne())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${oi}/${r}`}/**
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
 */class Fb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function jb(n,e={}){return je(n,"GET","/v2/passwordPolicy",Fe(n,e))}/**
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
 */const Ub=6;class Bb{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Ub,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class zb{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zv(this),this.idTokenSubscription=new zv(this),this.beforeStateQueue=new Fb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ZE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Gt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Gs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await rT(this,{idToken:e}),r=await Yn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Oe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await cl(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Oe(this.app))return Promise.reject(nt(this));const t=e?J(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Oe(this.app)?Promise.reject(nt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Oe(this.app)?Promise.reject(nt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jb(this),t=new Bb(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Vb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Gt(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await Gs.create(this,[Gt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&gb(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Le(n){return J(n)}class zv{constructor(e){this.auth=e,this.observer=null,this.addObserver=FE(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ml={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $b(n){Ml=n}function Jm(n){return Ml.loadJS(n)}function qb(){return Ml.recaptchaV2Script}function Wb(){return Ml.recaptchaEnterpriseScript}function Gb(){return Ml.gapiScript}function pT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Kb="recaptcha-enterprise",Hb="NO_RECAPTCHA";class Qb{constructor(e){this.type=Kb,this.auth=Le(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Ab(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Tb(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;Fv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Hb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Fv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Wb();u.length!==0&&(u+=a),Jm(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function $v(n,e,t,r=!1){const i=new Qb(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function dl(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await $v(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await $v(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}function Yb(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Gt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Jb(n,e,t){const r=Le(n);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=mT(e),{host:o,port:a}=Xb(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Zb()}function mT(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Xb(n){const e=mT(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qv(o)}}}function qv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Zb(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ro{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,t){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}/**
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
 */async function gT(n,e){return je(n,"POST","/v1/accounts:resetPassword",Fe(n,e))}async function eC(n,e){return je(n,"POST","/v1/accounts:update",e)}async function tC(n,e){return je(n,"POST","/v1/accounts:signUp",e)}async function nC(n,e){return je(n,"POST","/v1/accounts:update",Fe(n,e))}/**
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
 */async function rC(n,e){return dr(n,"POST","/v1/accounts:signInWithPassword",Fe(n,e))}async function Sd(n,e){return je(n,"POST","/v1/accounts:sendOobCode",Fe(n,e))}async function iC(n,e){return Sd(n,e)}async function sC(n,e){return Sd(n,e)}async function oC(n,e){return Sd(n,e)}async function aC(n,e){return Sd(n,e)}/**
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
 */async function lC(n,e){return dr(n,"POST","/v1/accounts:signInWithEmailLink",Fe(n,e))}async function uC(n,e){return dr(n,"POST","/v1/accounts:signInWithEmailLink",Fe(n,e))}/**
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
 */class hl extends Ro{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new hl(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new hl(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dl(e,t,"signInWithPassword",rC);case"emailLink":return lC(e,{email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dl(e,r,"signUpPassword",tC);case"emailLink":return uC(e,{idToken:t,email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function er(n,e){return dr(n,"POST","/v1/accounts:signInWithIdp",Fe(n,e))}/**
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
 */const cC="http://localhost";class On extends Ro{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new On(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ct("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Gm(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new On(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return er(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,er(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,er(e,t)}buildRequest(){const e={requestUri:cC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ao(t)}return e}}/**
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
 */async function dC(n,e){return je(n,"POST","/v1/accounts:sendVerificationCode",Fe(n,e))}async function hC(n,e){return dr(n,"POST","/v1/accounts:signInWithPhoneNumber",Fe(n,e))}async function fC(n,e){const t=await dr(n,"POST","/v1/accounts:signInWithPhoneNumber",Fe(n,e));if(t.temporaryProof)throw ya(n,"account-exists-with-different-credential",t);return t}const pC={USER_NOT_FOUND:"user-not-found"};async function mC(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return dr(n,"POST","/v1/accounts:signInWithPhoneNumber",Fe(n,t),pC)}/**
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
 */class Li extends Ro{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Li({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Li({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return hC(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return fC(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return mC(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new Li({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function gC(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _C(n){const e=Fs(_a(n)).link,t=e?Fs(_a(e)).deep_link_id:null,r=Fs(_a(n)).deep_link_id;return(r?Fs(_a(r)).link:null)||r||t||e||n}class Ad{constructor(e){var t,r,i,s,o,a;const u=Fs(_a(e)),c=(t=u.apiKey)!==null&&t!==void 0?t:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,f=gC((i=u.mode)!==null&&i!==void 0?i:null);z(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=_C(e);try{return new Ad(t)}catch{return null}}}/**
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
 */class ai{constructor(){this.providerId=ai.PROVIDER_ID}static credential(e,t){return hl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ad.parseLink(t);return z(r,"argument-error"),hl._fromEmailAndCode(e,r.code,r.tenantId)}}ai.PROVIDER_ID="password";ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class hr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Po extends hr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ks extends Po{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return z("providerId"in t&&"signInMethod"in t,"argument-error"),On._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return z(e.idToken||e.accessToken,"argument-error"),On._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ks.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ks.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new Ks(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class En extends Po{constructor(){super("facebook.com")}static credential(e){return On._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.FACEBOOK_SIGN_IN_METHOD="facebook.com";En.PROVIDER_ID="facebook.com";/**
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
 */class Tn extends Po{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return On._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Tn.credential(t,r)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
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
 */class Sn extends Po{constructor(){super("github.com")}static credential(e){return On._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.GITHUB_SIGN_IN_METHOD="github.com";Sn.PROVIDER_ID="github.com";/**
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
 */const yC="http://localhost";class ao extends Ro{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return er(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,er(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,er(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new ao(r,s)}static _create(e,t){return new ao(e,t)}buildRequest(){return{requestUri:yC,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const vC="saml.";class Uc extends hr{constructor(e){z(e.startsWith(vC),"argument-error"),super(e)}static credentialFromResult(e){return Uc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Uc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=ao.fromJSON(e);return z(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return ao._create(r,t)}catch{return null}}}/**
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
 */class An extends Po{constructor(){super("twitter.com")}static credential(e,t){return On._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return An.credential(t,r)}catch{return null}}}An.TWITTER_SIGN_IN_METHOD="twitter.com";An.PROVIDER_ID="twitter.com";/**
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
 */async function _T(n,e){return dr(n,"POST","/v1/accounts:signUp",Fe(n,e))}/**
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
 */class ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Yn._fromIdTokenResponse(e,r,i),o=Wv(r);return new ln({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Wv(r);return new ln({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Wv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function wC(n){var e;if(Oe(n.app))return Promise.reject(nt(n));const t=Le(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new ln({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await _T(t,{returnSecureToken:!0}),i=await ln._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class Bc extends xt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Bc(e,t,r,i)}}function yT(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bc._fromErrorAndOperation(n,s,e,r):s})}/**
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
 */function vT(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function IC(n,e){const t=J(n);await xd(!0,t,e);const{providerUserInfo:r}=await Rb(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=vT(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Xm(n,e,t=!1){const r=await ar(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ln._forOperation(n,"link",r)}async function xd(n,e,t){await cl(e);const r=vT(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";z(r.has(t)===n,e.auth,i)}/**
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
 */async function wT(n,e,t=!1){const{auth:r}=n;if(Oe(r.app))return Promise.reject(nt(r));const i="reauthenticate";try{const s=await ar(n,yT(r,i,e,n),t);z(s.idToken,r,"internal-error");const o=Td(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(n.uid===a,r,"user-mismatch"),ln._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ct(r,"user-mismatch"),s}}/**
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
 */async function IT(n,e,t=!1){if(Oe(n.app))return Promise.reject(nt(n));const r="signIn",i=await yT(n,r,e),s=await ln._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Rd(n,e){return IT(Le(n),e)}async function ET(n,e){const t=J(n);return await xd(!1,t,e.providerId),Xm(t,e)}async function TT(n,e){return wT(J(n),e)}/**
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
 */async function EC(n,e){return dr(n,"POST","/v1/accounts:signInWithCustomToken",Fe(n,e))}/**
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
 */async function TC(n,e){if(Oe(n.app))return Promise.reject(nt(n));const t=Le(n),r=await EC(t,{token:e,returnSecureToken:!0}),i=await ln._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
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
 */class Fl{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Zm._fromServerResponse(e,t):"totpInfo"in t?eg._fromServerResponse(e,t):ct(e,"internal-error")}}class Zm extends Fl{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Zm(t)}}class eg extends Fl{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new eg(t)}}/**
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
 */function Pd(n,e,t){var r;z(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),z(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(z(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(z(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function tg(n){const e=Le(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function SC(n,e,t){const r=Le(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Pd(r,i,t),await dl(r,i,"getOobCode",sC)}async function AC(n,e,t){await gT(J(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tg(n),r})}async function xC(n,e){await nC(J(n),{oobCode:e})}async function ST(n,e){const t=J(n),r=await gT(t,{oobCode:e}),i=r.requestType;switch(z(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":z(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":z(r.mfaInfo,t,"internal-error");default:z(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=Fl._fromServerResponse(Le(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function RC(n,e){const{data:t}=await ST(J(n),e);return t.email}async function PC(n,e,t){if(Oe(n.app))return Promise.reject(nt(n));const r=Le(n),o=await dl(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_T).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&tg(n),u}),a=await ln._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function kC(n,e,t){return Oe(n.app)?Promise.reject(nt(n)):Rd(J(n),ai.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tg(n),r})}/**
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
 */async function bC(n,e,t){const r=Le(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){z(a.handleCodeInApp,r,"argument-error"),a&&Pd(r,o,a)}s(i,t),await dl(r,i,"getOobCode",oC)}function CC(n,e){const t=Ad.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function NC(n,e,t){if(Oe(n.app))return Promise.reject(nt(n));const r=J(n),i=ai.credentialWithLink(e,t||ul());return z(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Rd(r,i)}/**
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
 */async function DC(n,e){return je(n,"POST","/v1/accounts:createAuthUri",Fe(n,e))}/**
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
 */async function VC(n,e){const t=Qm()?ul():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await DC(J(n),r);return i||[]}async function OC(n,e){const t=J(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Pd(t.auth,i,e);const{email:s}=await iC(t.auth,i);s!==n.email&&await n.reload()}async function LC(n,e,t){const r=J(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Pd(r.auth,s,t);const{email:o}=await aC(r.auth,s);o!==n.email&&await n.reload()}/**
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
 */async function MC(n,e){return je(n,"POST","/v1/accounts:update",e)}/**
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
 */async function FC(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=J(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await ar(r,MC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function jC(n,e){const t=J(n);return Oe(t.auth.app)?Promise.reject(nt(t.auth)):AT(t,e,null)}function UC(n,e){return AT(J(n),null,e)}async function AT(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await ar(n,eC(r,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function BC(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=Td(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Hs(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new zC(s,i);case"github.com":return new $C(s,i);case"google.com":return new qC(s,i);case"twitter.com":return new WC(s,i,n.screenName||null);case"custom":case"anonymous":return new Hs(s,null);default:return new Hs(s,r,i)}}class Hs{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class xT extends Hs{constructor(e,t,r,i){super(e,t,r),this.username=i}}class zC extends Hs{constructor(e,t){super(e,"facebook.com",t)}}class $C extends xT{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class qC extends Hs{constructor(e,t){super(e,"google.com",t)}}class WC extends xT{constructor(e,t,r){super(e,"twitter.com",t,r)}}function GC(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:BC(t)}/**
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
 */class bi{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new bi("enroll",e,t)}static _fromMfaPendingCredential(e){return new bi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return bi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return bi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class ng{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=Le(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Fl._fromServerResponse(r,a));z(i.mfaPendingCredential,r,"internal-error");const o=bi._fromMfaPendingCredential(i.mfaPendingCredential);return new ng(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(t.operationType){case"signIn":const h=await ln._fromIdTokenResponse(r,t.operationType,c);return await r._updateCurrentUser(h.user),h;case"reauthenticate":return z(t.user,r,"internal-error"),ln._forOperation(t.user,t.operationType,c);default:ct(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function KC(n,e){var t;const r=J(n),i=e;return z(e.customData.operationType,r,"argument-error"),z((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),ng._fromError(r,i)}/**
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
 */function HC(n,e){return je(n,"POST","/v2/accounts/mfaEnrollment:start",Fe(n,e))}function QC(n,e){return je(n,"POST","/v2/accounts/mfaEnrollment:finalize",Fe(n,e))}function YC(n,e){return je(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Fe(n,e))}class rg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Fl._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new rg(e)}async getSession(){return bi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,i=await this.getSession(),s=await ar(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await ar(this.user,YC(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const of=new WeakMap;function JC(n){const e=J(n);return of.has(e)||of.set(e,rg._fromUser(e)),of.get(e)}const zc="__sak";/**
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
 */class RT{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zc,"1"),this.storage.removeItem(zc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const XC=1e3,ZC=10;class PT extends RT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Mb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ZC):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},XC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}PT.type="LOCAL";const ig=PT;/**
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
 */class kT extends RT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}kT.type="SESSION";const $i=kT;/**
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
 */function eN(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class kd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new kd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,s)),u=await eN(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kd.receivers=[];/**
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
 */function jl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class tN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=jl("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ge(){return window}function nN(n){Ge().location.href=n}/**
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
 */function sg(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function rN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iN(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function sN(){return sg()?self:null}/**
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
 */const bT="firebaseLocalStorageDb",oN=1,$c="firebaseLocalStorage",CT="fbase_key";class Ul{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bd(n,e){return n.transaction([$c],e?"readwrite":"readonly").objectStore($c)}function aN(){const n=indexedDB.deleteDatabase(bT);return new Ul(n).toPromise()}function pp(){const n=indexedDB.open(bT,oN);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore($c,{keyPath:CT})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains($c)?e(r):(r.close(),await aN(),e(await pp()))})})}async function Gv(n,e,t){const r=bd(n,!0).put({[CT]:e,value:t});return new Ul(r).toPromise()}async function lN(n,e){const t=bd(n,!1).get(e),r=await new Ul(t).toPromise();return r===void 0?null:r.value}function Kv(n,e){const t=bd(n,!0).delete(e);return new Ul(t).toPromise()}const uN=800,cN=3;class NT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>cN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kd._getInstance(sN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await rN(),!this.activeServiceWorker)return;this.sender=new tN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pp();return await Gv(e,zc,"1"),await Kv(e,zc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gv(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>lN(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Kv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=bd(i,!1).getAll();return new Ul(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}NT.type="LOCAL";const fl=NT;/**
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
 */function dN(n,e){return je(n,"POST","/v2/accounts/mfaSignIn:start",Fe(n,e))}function hN(n,e){return je(n,"POST","/v2/accounts/mfaSignIn:finalize",Fe(n,e))}/**
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
 */const fN=500,pN=6e4,Ou=1e12;class mN{constructor(e){this.auth=e,this.counter=Ou,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new gN(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Ou;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Ou;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Ou;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class gN{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;z(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=_N(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},pN)},fN))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function _N(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const af=pT("rcb"),yN=new Vl(3e4,6e4);class vN{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ge().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return z(wN(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Mv(Ge().grecaptcha)?Promise.resolve(Ge().grecaptcha):new Promise((r,i)=>{const s=Ge().setTimeout(()=>{i(Ye(e,"network-request-failed"))},yN.get());Ge()[af]=()=>{Ge().clearTimeout(s),delete Ge()[af];const a=Ge().grecaptcha;if(!a||!Mv(a)){i(Ye(e,"internal-error"));return}const u=a.render;a.render=(c,h)=>{const f=u(c,h);return this.counter++,f},this.hostLanguage=t,r(a)};const o=`${qb()}?${Ao({onload:af,render:"explicit",hl:t})}`;Jm(o).catch(()=>{clearTimeout(s),i(Ye(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Ge().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function wN(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class IN{async load(e){return new mN(e)}clearedOneInstance(){}}/**
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
 */const DT="recaptcha",EN={theme:"light",type:"image"};let TN=class{constructor(e,t,r=Object.assign({},EN)){this.parameters=r,this.type=DT,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Le(e),this.isInvisible=this.parameters.size==="invisible",z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;z(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new IN:new vN,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){z(!this.parameters.sitekey,this.auth,"argument-error"),z(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Ge()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){z(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){z(Qm()&&!sg(),this.auth,"internal-error"),await SN(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Sb(this.auth);z(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return z(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function SN(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class og{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Li._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function AN(n,e,t){if(Oe(n.app))return Promise.reject(nt(n));const r=Le(n),i=await Cd(r,e,J(t));return new og(i,s=>Rd(r,s))}async function xN(n,e,t){const r=J(n);await xd(!1,r,"phone");const i=await Cd(r.auth,e,J(t));return new og(i,s=>ET(r,s))}async function RN(n,e,t){const r=J(n);if(Oe(r.auth.app))return Promise.reject(nt(r.auth));const i=await Cd(r.auth,e,J(t));return new og(i,s=>TT(r,s))}async function Cd(n,e,t){var r;const i=await t.verify();try{z(typeof i=="string",n,"argument-error"),z(t.type===DT,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return z(o.type==="enroll",n,"internal-error"),(await HC(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{z(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return z(a,n,"missing-multi-factor-info"),(await dN(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await dC(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function PN(n,e){const t=J(n);if(Oe(t.auth.app))return Promise.reject(nt(t.auth));await Xm(t,e)}/**
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
 */let qi=class tc{constructor(e){this.providerId=tc.PROVIDER_ID,this.auth=Le(e)}verifyPhoneNumber(e,t){return Cd(this.auth,e,J(t))}static credential(e,t){return Li._fromVerification(e,t)}static credentialFromResult(e){const t=e;return tc.credentialFromTaggedObject(t)}static credentialFromError(e){return tc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Li._fromTokenResponse(t,r):null}};qi.PROVIDER_ID="phone";qi.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function is(n,e){return e?Gt(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ag extends Ro{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return er(e,this._buildIdpRequest())}_linkToIdToken(e,t){return er(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return er(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function kN(n){return IT(n.auth,new ag(n),n.bypassAuthState)}function bN(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),wT(t,new ag(n),n.bypassAuthState)}async function CN(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),Xm(t,new ag(n),n.bypassAuthState)}/**
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
 */class VT{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kN;case"linkViaPopup":case"linkViaRedirect":return CN;case"reauthViaPopup":case"reauthViaRedirect":return bN;default:ct(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const NN=new Vl(2e3,1e4);async function DN(n,e,t){if(Oe(n.app))return Promise.reject(Ye(n,"operation-not-supported-in-this-environment"));const r=Le(n);xo(n,e,hr);const i=is(r,t);return new Jn(r,"signInViaPopup",e,i).executeNotNull()}async function VN(n,e,t){const r=J(n);if(Oe(r.auth.app))return Promise.reject(Ye(r.auth,"operation-not-supported-in-this-environment"));xo(r.auth,e,hr);const i=is(r.auth,t);return new Jn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function ON(n,e,t){const r=J(n);xo(r.auth,e,hr);const i=is(r.auth,t);return new Jn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Jn extends VT{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Jn.currentPopupAction&&Jn.currentPopupAction.cancel(),Jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=jl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,NN.get())};e()}}Jn.currentPopupAction=null;/**
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
 */const LN="pendingRedirect",Va=new Map;class MN extends VT{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Va.get(this.auth._key());if(!e){try{const r=await FN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Va.set(this.auth._key(),e)}return this.bypassAuthState||Va.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FN(n,e){const t=LT(e),r=OT(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function lg(n,e){return OT(n)._set(LT(e),"true")}function jN(){Va.clear()}function ug(n,e){Va.set(n._key(),e)}function OT(n){return Gt(n._redirectPersistence)}function LT(n){return Oi(LN,n.config.apiKey,n.name)}/**
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
 */function UN(n,e,t){return BN(n,e,t)}async function BN(n,e,t){if(Oe(n.app))return Promise.reject(nt(n));const r=Le(n);xo(n,e,hr),await r._initializationPromise;const i=is(r,t);return await lg(i,r),i._openRedirect(r,e,"signInViaRedirect")}function zN(n,e,t){return $N(n,e,t)}async function $N(n,e,t){const r=J(n);if(xo(r.auth,e,hr),Oe(r.auth.app))return Promise.reject(nt(r.auth));await r.auth._initializationPromise;const i=is(r.auth,t);await lg(i,r.auth);const s=await MT(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function qN(n,e,t){return WN(n,e,t)}async function WN(n,e,t){const r=J(n);xo(r.auth,e,hr),await r.auth._initializationPromise;const i=is(r.auth,t);await xd(!1,r,e.providerId),await lg(i,r.auth);const s=await MT(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function GN(n,e){return await Le(n)._initializationPromise,Nd(n,e,!1)}async function Nd(n,e,t=!1){if(Oe(n.app))return Promise.reject(nt(n));const r=Le(n),i=is(r,e),o=await new MN(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function MT(n){const e=jl(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const KN=10*60*1e3;class FT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!jT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ye(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=KN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hv(e))}saveEventToCache(e){this.cachedEventUids.add(Hv(e)),this.lastProcessedEventTime=Date.now()}}function Hv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function jT({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HN(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jT(n);default:return!1}}/**
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
 */async function UT(n,e={}){return je(n,"GET","/v1/projects",e)}/**
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
 */const QN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YN=/^https?/;async function JN(n){if(n.config.emulator)return;const{authorizedDomains:e}=await UT(n);for(const t of e)try{if(XN(t))return}catch{}ct(n,"unauthorized-domain")}function XN(n){const e=ul(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!YN.test(t))return!1;if(QN.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ZN=new Vl(3e4,6e4);function Qv(){const n=Ge().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function eD(n){return new Promise((e,t)=>{var r,i,s;function o(){Qv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qv(),t(Ye(n,"network-request-failed"))},timeout:ZN.get()})}if(!((i=(r=Ge().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ge().gapi)===null||s===void 0)&&s.load)o();else{const a=pT("iframefcb");return Ge()[a]=()=>{gapi.load?o():t(Ye(n,"network-request-failed"))},Jm(`${Gb()}?onload=${a}`).catch(u=>t(u))}}).catch(e=>{throw nc=null,e})}let nc=null;function tD(n){return nc=nc||eD(n),nc}/**
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
 */const nD=new Vl(5e3,15e3),rD="__/auth/iframe",iD="emulator/auth/iframe",sD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aD(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ym(e,iD):`https://${n.config.authDomain}/${rD}`,r={apiKey:e.apiKey,appName:n.name,v:oi},i=oD.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Ao(r).slice(1)}`}async function lD(n){const e=await tD(n),t=Ge().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:aD(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ye(n,"network-request-failed"),a=Ge().setTimeout(()=>{s(o)},nD.get());function u(){Ge().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const uD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cD=500,dD=600,hD="_blank",fD="http://localhost";class Yv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pD(n,e,t,r=cD,i=dD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},uD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ne().toLowerCase();t&&(a=lT(c)?hD:t),oT(c)&&(e=e||fD,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[I,R])=>`${m}${I}=${R},`,"");if(Lb(c)&&a!=="_self")return mD(e||"",a),new Yv(null);const f=window.open(e||"",a,h);z(f,n,"popup-blocked");try{f.focus()}catch{}return new Yv(f)}function mD(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const gD="__/auth/handler",_D="emulator/auth/handler",yD=encodeURIComponent("fac");async function mp(n,e,t,r,i,s){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:oi,eventId:i};if(e instanceof hr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",$1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries(s||{}))o[h]=f}if(e instanceof Po){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await n._getAppCheckToken(),c=u?`#${yD}=${encodeURIComponent(u)}`:"";return`${vD(n)}?${Ao(a).slice(1)}${c}`}function vD({config:n}){return n.emulator?Ym(n,_D):`https://${n.authDomain}/${gD}`}/**
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
 */const lf="webStorageSupport";class wD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$i,this._completeRedirectFn=Nd,this._overrideRedirectResult=ug}async _openPopup(e,t,r,i){var s;yn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await mp(e,t,r,ul(),i);return pD(e,o,jl())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await mp(e,t,r,ul(),i);return nN(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(yn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await lD(e),r=new FT(e);return t.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(lf,{type:lf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[lf];o!==void 0&&t(!!o),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=JN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hT()||aT()||Ll()}}const ID=wD;class ED{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return xn("unexpected MultiFactorSessionType")}}}class cg extends ED{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new cg(e)}_finalizeEnroll(e,t,r){return QC(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return hN(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class BT{constructor(){}static assertion(e){return cg._fromCredential(e)}}BT.FACTOR_ID="phone";var Jv="@firebase/auth",Xv="1.7.9";/**
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
 */class TD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function SD(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AD(n){Hr(new Vn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fT(n)},c=new zb(r,i,s,u);return Yb(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Hr(new Vn("auth-internal",e=>{const t=Le(e.getProvider("auth").getImmediate());return(r=>new TD(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(Jv,Xv,SD(n)),gn(Jv,Xv,"esm2017")}/**
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
 */const xD=5*60;D1("authIdTokenMaxAge");function RD(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}$b({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Ye("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",RD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AD("Browser");/**
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
 */function Wi(){return window}/**
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
 */const PD=2e3;async function kD(n,e,t){var r;const{BuildInfo:i}=Wi();yn(e.sessionId,"AuthEvent did not contain a session ID");const s=await VD(e.sessionId),o={};return Ll()?o.ibi=i.packageName:Ol()?o.apn=i.packageName:ct(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,mp(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function bD(n){const{BuildInfo:e}=Wi(),t={};Ll()?t.iosBundleId=e.packageName:Ol()?t.androidPackageName=e.packageName:ct(n,"operation-not-supported-in-this-environment"),await UT(n,t)}function CD(n){const{cordova:e}=Wi();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,Ob()?"_blank":"_system","location=yes"),t(i)})})}async function ND(n,e,t){const{cordova:r}=Wi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var f;s();const m=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof m=="function"&&m(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function c(){a||(a=window.setTimeout(()=>{o(Ye(n,"redirect-cancelled-by-user"))},PD))}function h(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(u),document.addEventListener("resume",c,!1),Ol()&&document.addEventListener("visibilitychange",h,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",h,!1),a&&window.clearTimeout(a)}})}finally{i()}}function DD(n){var e,t,r,i,s,o,a,u,c,h;const f=Wi();z(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),z(typeof((t=f==null?void 0:f.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),z(typeof((s=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),z(typeof((u=(a=(o=f==null?void 0:f.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),z(typeof((h=(c=f==null?void 0:f.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||h===void 0?void 0:h.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function VD(n){const e=OD(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function OD(n){if(yn(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
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
 */const LD=20;class MD extends FT{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function FD(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:BD(),postBody:null,tenantId:n.tenantId,error:Ye(n,"no-auth-event")}}function jD(n,e){return gp()._set(_p(n),e)}async function Zv(n){const e=await gp()._get(_p(n));return e&&await gp()._remove(_p(n)),e}function UD(n,e){var t,r;const i=$D(e);if(i.includes("/__/auth/callback")){const s=rc(i),o=s.firebaseError?zD(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],u=a?Ye(a):null;return u?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function BD(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<LD;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function gp(){return Gt(ig)}function _p(n){return Oi("authEvent",n.config.apiKey,n.name)}function zD(n){try{return JSON.parse(n)}catch{return null}}function $D(n){const e=rc(n),t=e.link?decodeURIComponent(e.link):void 0,r=rc(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return rc(i).link||i||r||t||n}function rc(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Fs(t.join("?"))}/**
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
 */const qD=500;class WD{constructor(){this._redirectPersistence=$i,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Nd,this._overrideRedirectResult=ug}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new MD(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ct(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){DD(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),jN(),await this._originValidation(e);const o=FD(e,r,i);await jD(e,o);const a=await kD(e,o,t),u=await CD(a);return ND(e,s,u)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bD(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Wi(),o=setTimeout(async()=>{await Zv(e),t.onEvent(ew())},qD),a=async h=>{clearTimeout(o);const f=await Zv(e);let m=null;f&&(h!=null&&h.url)&&(m=UD(f,h.url)),t.onEvent(m||ew())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,c=`${s.packageName.toLowerCase()}://`;Wi().handleOpenURL=async h=>{if(h.toLowerCase().startsWith(c)&&a({url:h}),typeof u=="function")try{u(h)}catch(f){console.error(f)}}}}const GD=WD;function ew(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ye("no-auth-event")}}/**
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
 */function KD(n,e){Le(n)._logFramework(e)}var HD="@firebase/auth-compat",QD="0.5.14";/**
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
 */const YD=1e3;function Oa(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function JD(){return Oa()==="http:"||Oa()==="https:"}function zT(n=Ne()){return!!((Oa()==="file:"||Oa()==="ionic:"||Oa()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function XD(){return Bm()||Um()}function ZD(){return LE()&&(document==null?void 0:document.documentMode)===11}function e2(n=Ne()){return/Edge\/\d+/.test(n)}function t2(n=Ne()){return ZD()||e2(n)}function $T(){try{const n=self.localStorage,e=jl();if(n)return n.setItem(e,"1"),n.removeItem(e),t2()?sl():!0}catch{return dg()&&sl()}return!1}function dg(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function uf(){return(JD()||OE()||zT())&&!XD()&&$T()&&!dg()}function qT(){return zT()&&typeof document<"u"}async function n2(){return qT()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},YD);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function r2(){return typeof window<"u"?window:null}/**
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
 */const qt={LOCAL:"local",NONE:"none",SESSION:"session"},oa=z,WT="persistence";function i2(n,e){if(oa(Object.values(qt).includes(e),n,"invalid-persistence-type"),Bm()){oa(e!==qt.SESSION,n,"unsupported-persistence-type");return}if(Um()){oa(e===qt.NONE,n,"unsupported-persistence-type");return}if(dg()){oa(e===qt.NONE||e===qt.LOCAL&&sl(),n,"unsupported-persistence-type");return}oa(e===qt.NONE||$T(),n,"unsupported-persistence-type")}async function yp(n){await n._initializationPromise;const e=GT(),t=Oi(WT,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function s2(n,e){const t=GT();if(!t)return[];const r=Oi(WT,n,e);switch(t.getItem(r)){case qt.NONE:return[oo];case qt.LOCAL:return[fl,$i];case qt.SESSION:return[$i];default:return[]}}function GT(){var n;try{return((n=r2())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const o2=z;class Nr{constructor(){this.browserResolver=Gt(ID),this.cordovaResolver=Gt(GD),this.underlyingResolver=null,this._redirectPersistence=$i,this._completeRedirectFn=Nd,this._overrideRedirectResult=ug}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return qT()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return o2(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await n2();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function KT(n){return n.unwrap()}function a2(n){return n.wrapped()}/**
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
 */function l2(n){return HT(n)}function u2(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new c2(n,KC(n,e))}else if(r){const i=HT(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function HT(n){const{_tokenResponse:e}=n instanceof xt?n.customData:n;if(!e)return null;if(!(n instanceof xt)&&"temporaryProof"in e&&"phoneNumber"in e)return qi.credentialFromResult(n);const t=e.providerId;if(!t||t===sa.PASSWORD)return null;let r;switch(t){case sa.GOOGLE:r=Tn;break;case sa.FACEBOOK:r=En;break;case sa.GITHUB:r=Sn;break;case sa.TWITTER:r=An;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?ao._create(t,a):On._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new Ks(t).credential({idToken:i,accessToken:s,rawNonce:u})}return n instanceof xt?r.credentialFromError(n):r.credentialFromResult(n)}function Nt(n,e){return e.catch(t=>{throw t instanceof xt&&u2(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:l2(t),additionalUserInfo:GC(t),user:Dd.getOrCreate(i)}})}async function vp(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Nt(n,t.confirm(r))}}class c2{constructor(e,t){this.resolver=t,this.auth=a2(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Nt(KT(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let Dd=class va{constructor(e){this._delegate=e,this.multiFactor=JC(e)}static getOrCreate(e){return va.USER_MAP.has(e)||va.USER_MAP.set(e,new va(e)),va.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Nt(this.auth,ET(this._delegate,e))}async linkWithPhoneNumber(e,t){return vp(this.auth,xN(this._delegate,e,t))}async linkWithPopup(e){return Nt(this.auth,ON(this._delegate,e,Nr))}async linkWithRedirect(e){return await yp(Le(this.auth)),qN(this._delegate,e,Nr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Nt(this.auth,TT(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return vp(this.auth,RN(this._delegate,e,t))}reauthenticateWithPopup(e){return Nt(this.auth,VN(this._delegate,e,Nr))}async reauthenticateWithRedirect(e){return await yp(Le(this.auth)),zN(this._delegate,e,Nr)}sendEmailVerification(e){return OC(this._delegate,e)}async unlink(e){return await IC(this._delegate,e),this}updateEmail(e){return jC(this._delegate,e)}updatePassword(e){return UC(this._delegate,e)}updatePhoneNumber(e){return PN(this._delegate,e)}updateProfile(e){return FC(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return LC(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Dd.USER_MAP=new WeakMap;/**
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
 */const aa=z;let wp=class{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;aa(r,"invalid-api-key",{appName:e.name}),aa(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Nr:void 0;this._delegate=t.initialize({options:{persistence:d2(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(pb),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Dd.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Jb(this._delegate,e,t)}applyActionCode(e){return xC(this._delegate,e)}checkActionCode(e){return ST(this._delegate,e)}confirmPasswordReset(e,t){return AC(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Nt(this._delegate,PC(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return VC(this._delegate,e)}isSignInWithEmailLink(e){return CC(this._delegate,e)}async getRedirectResult(){aa(uf(),this._delegate,"operation-not-supported-in-this-environment");const e=await GN(this._delegate,Nr);return e?Nt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){KD(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=tw(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=tw(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return bC(this._delegate,e,t)}sendPasswordResetEmail(e,t){return SC(this._delegate,e,t||void 0)}async setPersistence(e){i2(this._delegate,e);let t;switch(e){case qt.SESSION:t=$i;break;case qt.LOCAL:t=await Gt(fl)._isAvailable()?fl:ig;break;case qt.NONE:t=oo;break;default:return ct("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Nt(this._delegate,wC(this._delegate))}signInWithCredential(e){return Nt(this._delegate,Rd(this._delegate,e))}signInWithCustomToken(e){return Nt(this._delegate,TC(this._delegate,e))}signInWithEmailAndPassword(e,t){return Nt(this._delegate,kC(this._delegate,e,t))}signInWithEmailLink(e,t){return Nt(this._delegate,NC(this._delegate,e,t))}signInWithPhoneNumber(e,t){return vp(this._delegate,AN(this._delegate,e,t))}async signInWithPopup(e){return aa(uf(),this._delegate,"operation-not-supported-in-this-environment"),Nt(this._delegate,DN(this._delegate,e,Nr))}async signInWithRedirect(e){return aa(uf(),this._delegate,"operation-not-supported-in-this-environment"),await yp(this._delegate),UN(this._delegate,e,Nr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return RC(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}};wp.Persistence=qt;function tw(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&Dd.getOrCreate(o)),error:e,complete:t}}function d2(n,e){const t=s2(n,e);if(typeof self<"u"&&!t.includes(fl)&&t.push(fl),typeof window<"u")for(const r of[ig,$i])t.includes(r)||t.push(r);return t.includes(oo)||t.push(oo),t}/**
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
 */class hg{constructor(){this.providerId="phone",this._delegate=new qi(KT(Cn.auth()))}static credential(e,t){return qi.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}hg.PHONE_SIGN_IN_METHOD=qi.PHONE_SIGN_IN_METHOD;hg.PROVIDER_ID=qi.PROVIDER_ID;/**
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
 */const h2=z;class f2{constructor(e,t,r=Cn.app()){var i;h2((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new TN(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const p2="auth-compat";function m2(n){n.INTERNAL.registerComponent(new Vn(p2,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new wp(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ms.EMAIL_SIGNIN,PASSWORD_RESET:ms.PASSWORD_RESET,RECOVER_EMAIL:ms.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ms.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ms.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ms.VERIFY_EMAIL}},EmailAuthProvider:ai,FacebookAuthProvider:En,GithubAuthProvider:Sn,GoogleAuthProvider:Tn,OAuthProvider:Ks,SAMLAuthProvider:Uc,PhoneAuthProvider:hg,PhoneMultiFactorGenerator:BT,RecaptchaVerifier:f2,TwitterAuthProvider:An,Auth:wp,AuthCredential:Ro,Error:xt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(HD,QD)}m2(Cn);var nw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mi,QT;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function E(){}E.prototype=y.prototype,T.D=y.prototype,T.prototype=new E,T.prototype.constructor=T,T.C=function(A,P,N){for(var x=Array(arguments.length-2),Xt=2;Xt<arguments.length;Xt++)x[Xt-2]=arguments[Xt];return y.prototype[P].apply(A,x)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,y,E){E||(E=0);var A=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)A[P]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(P=0;16>P;++P)A[P]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=T.g[0],E=T.g[1],P=T.g[2];var N=T.g[3],x=y+(N^E&(P^N))+A[0]+3614090360&4294967295;y=E+(x<<7&4294967295|x>>>25),x=N+(P^y&(E^P))+A[1]+3905402710&4294967295,N=y+(x<<12&4294967295|x>>>20),x=P+(E^N&(y^E))+A[2]+606105819&4294967295,P=N+(x<<17&4294967295|x>>>15),x=E+(y^P&(N^y))+A[3]+3250441966&4294967295,E=P+(x<<22&4294967295|x>>>10),x=y+(N^E&(P^N))+A[4]+4118548399&4294967295,y=E+(x<<7&4294967295|x>>>25),x=N+(P^y&(E^P))+A[5]+1200080426&4294967295,N=y+(x<<12&4294967295|x>>>20),x=P+(E^N&(y^E))+A[6]+2821735955&4294967295,P=N+(x<<17&4294967295|x>>>15),x=E+(y^P&(N^y))+A[7]+4249261313&4294967295,E=P+(x<<22&4294967295|x>>>10),x=y+(N^E&(P^N))+A[8]+1770035416&4294967295,y=E+(x<<7&4294967295|x>>>25),x=N+(P^y&(E^P))+A[9]+2336552879&4294967295,N=y+(x<<12&4294967295|x>>>20),x=P+(E^N&(y^E))+A[10]+4294925233&4294967295,P=N+(x<<17&4294967295|x>>>15),x=E+(y^P&(N^y))+A[11]+2304563134&4294967295,E=P+(x<<22&4294967295|x>>>10),x=y+(N^E&(P^N))+A[12]+1804603682&4294967295,y=E+(x<<7&4294967295|x>>>25),x=N+(P^y&(E^P))+A[13]+4254626195&4294967295,N=y+(x<<12&4294967295|x>>>20),x=P+(E^N&(y^E))+A[14]+2792965006&4294967295,P=N+(x<<17&4294967295|x>>>15),x=E+(y^P&(N^y))+A[15]+1236535329&4294967295,E=P+(x<<22&4294967295|x>>>10),x=y+(P^N&(E^P))+A[1]+4129170786&4294967295,y=E+(x<<5&4294967295|x>>>27),x=N+(E^P&(y^E))+A[6]+3225465664&4294967295,N=y+(x<<9&4294967295|x>>>23),x=P+(y^E&(N^y))+A[11]+643717713&4294967295,P=N+(x<<14&4294967295|x>>>18),x=E+(N^y&(P^N))+A[0]+3921069994&4294967295,E=P+(x<<20&4294967295|x>>>12),x=y+(P^N&(E^P))+A[5]+3593408605&4294967295,y=E+(x<<5&4294967295|x>>>27),x=N+(E^P&(y^E))+A[10]+38016083&4294967295,N=y+(x<<9&4294967295|x>>>23),x=P+(y^E&(N^y))+A[15]+3634488961&4294967295,P=N+(x<<14&4294967295|x>>>18),x=E+(N^y&(P^N))+A[4]+3889429448&4294967295,E=P+(x<<20&4294967295|x>>>12),x=y+(P^N&(E^P))+A[9]+568446438&4294967295,y=E+(x<<5&4294967295|x>>>27),x=N+(E^P&(y^E))+A[14]+3275163606&4294967295,N=y+(x<<9&4294967295|x>>>23),x=P+(y^E&(N^y))+A[3]+4107603335&4294967295,P=N+(x<<14&4294967295|x>>>18),x=E+(N^y&(P^N))+A[8]+1163531501&4294967295,E=P+(x<<20&4294967295|x>>>12),x=y+(P^N&(E^P))+A[13]+2850285829&4294967295,y=E+(x<<5&4294967295|x>>>27),x=N+(E^P&(y^E))+A[2]+4243563512&4294967295,N=y+(x<<9&4294967295|x>>>23),x=P+(y^E&(N^y))+A[7]+1735328473&4294967295,P=N+(x<<14&4294967295|x>>>18),x=E+(N^y&(P^N))+A[12]+2368359562&4294967295,E=P+(x<<20&4294967295|x>>>12),x=y+(E^P^N)+A[5]+4294588738&4294967295,y=E+(x<<4&4294967295|x>>>28),x=N+(y^E^P)+A[8]+2272392833&4294967295,N=y+(x<<11&4294967295|x>>>21),x=P+(N^y^E)+A[11]+1839030562&4294967295,P=N+(x<<16&4294967295|x>>>16),x=E+(P^N^y)+A[14]+4259657740&4294967295,E=P+(x<<23&4294967295|x>>>9),x=y+(E^P^N)+A[1]+2763975236&4294967295,y=E+(x<<4&4294967295|x>>>28),x=N+(y^E^P)+A[4]+1272893353&4294967295,N=y+(x<<11&4294967295|x>>>21),x=P+(N^y^E)+A[7]+4139469664&4294967295,P=N+(x<<16&4294967295|x>>>16),x=E+(P^N^y)+A[10]+3200236656&4294967295,E=P+(x<<23&4294967295|x>>>9),x=y+(E^P^N)+A[13]+681279174&4294967295,y=E+(x<<4&4294967295|x>>>28),x=N+(y^E^P)+A[0]+3936430074&4294967295,N=y+(x<<11&4294967295|x>>>21),x=P+(N^y^E)+A[3]+3572445317&4294967295,P=N+(x<<16&4294967295|x>>>16),x=E+(P^N^y)+A[6]+76029189&4294967295,E=P+(x<<23&4294967295|x>>>9),x=y+(E^P^N)+A[9]+3654602809&4294967295,y=E+(x<<4&4294967295|x>>>28),x=N+(y^E^P)+A[12]+3873151461&4294967295,N=y+(x<<11&4294967295|x>>>21),x=P+(N^y^E)+A[15]+530742520&4294967295,P=N+(x<<16&4294967295|x>>>16),x=E+(P^N^y)+A[2]+3299628645&4294967295,E=P+(x<<23&4294967295|x>>>9),x=y+(P^(E|~N))+A[0]+4096336452&4294967295,y=E+(x<<6&4294967295|x>>>26),x=N+(E^(y|~P))+A[7]+1126891415&4294967295,N=y+(x<<10&4294967295|x>>>22),x=P+(y^(N|~E))+A[14]+2878612391&4294967295,P=N+(x<<15&4294967295|x>>>17),x=E+(N^(P|~y))+A[5]+4237533241&4294967295,E=P+(x<<21&4294967295|x>>>11),x=y+(P^(E|~N))+A[12]+1700485571&4294967295,y=E+(x<<6&4294967295|x>>>26),x=N+(E^(y|~P))+A[3]+2399980690&4294967295,N=y+(x<<10&4294967295|x>>>22),x=P+(y^(N|~E))+A[10]+4293915773&4294967295,P=N+(x<<15&4294967295|x>>>17),x=E+(N^(P|~y))+A[1]+2240044497&4294967295,E=P+(x<<21&4294967295|x>>>11),x=y+(P^(E|~N))+A[8]+1873313359&4294967295,y=E+(x<<6&4294967295|x>>>26),x=N+(E^(y|~P))+A[15]+4264355552&4294967295,N=y+(x<<10&4294967295|x>>>22),x=P+(y^(N|~E))+A[6]+2734768916&4294967295,P=N+(x<<15&4294967295|x>>>17),x=E+(N^(P|~y))+A[13]+1309151649&4294967295,E=P+(x<<21&4294967295|x>>>11),x=y+(P^(E|~N))+A[4]+4149444226&4294967295,y=E+(x<<6&4294967295|x>>>26),x=N+(E^(y|~P))+A[11]+3174756917&4294967295,N=y+(x<<10&4294967295|x>>>22),x=P+(y^(N|~E))+A[2]+718787259&4294967295,P=N+(x<<15&4294967295|x>>>17),x=E+(N^(P|~y))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(P+(x<<21&4294967295|x>>>11))&4294967295,T.g[2]=T.g[2]+P&4294967295,T.g[3]=T.g[3]+N&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var E=y-this.blockSize,A=this.B,P=this.h,N=0;N<y;){if(P==0)for(;N<=E;)i(this,T,N),N+=this.blockSize;if(typeof T=="string"){for(;N<y;)if(A[P++]=T.charCodeAt(N++),P==this.blockSize){i(this,A),P=0;break}}else for(;N<y;)if(A[P++]=T[N++],P==this.blockSize){i(this,A),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var E=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=E&255,E/=256;for(this.u(T),T=Array(16),y=E=0;4>y;++y)for(var A=0;32>A;A+=8)T[E++]=this.g[y]>>>A&255;return T};function s(T,y){var E=a;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=y(T)}function o(T,y){this.h=y;for(var E=[],A=!0,P=T.length-1;0<=P;P--){var N=T[P]|0;A&&N==y||(E[P]=N,A=!1)}this.g=E}var a={};function u(T){return-128<=T&&128>T?s(T,function(y){return new o([y|0],0>y?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(0>T)return V(c(-T));for(var y=[],E=1,A=0;T>=E;A++)y[A]=T/E|0,E*=4294967296;return new o(y,0)}function h(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return V(h(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(y,8)),A=f,P=0;P<T.length;P+=8){var N=Math.min(8,T.length-P),x=parseInt(T.substring(P,P+N),y);8>N?(N=c(Math.pow(y,N)),A=A.j(N).add(c(x))):(A=A.j(E),A=A.add(c(x)))}return A}var f=u(0),m=u(1),I=u(16777216);n=o.prototype,n.m=function(){if(k(this))return-V(this).m();for(var T=0,y=1,E=0;E<this.g.length;E++){var A=this.i(E);T+=(0<=A?A:4294967296+A)*y,y*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(R(this))return"0";if(k(this))return"-"+V(this).toString(T);for(var y=c(Math.pow(T,6)),E=this,A="";;){var P=b(E,y).g;E=S(E,P.j(y));var N=((0<E.g.length?E.g[0]:E.h)>>>0).toString(T);if(E=P,R(E))return N+A;for(;6>N.length;)N="0"+N;A=N+A}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function R(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function k(T){return T.h==-1}n.l=function(T){return T=S(this,T),k(T)?-1:R(T)?0:1};function V(T){for(var y=T.g.length,E=[],A=0;A<y;A++)E[A]=~T.g[A];return new o(E,~T.h).add(m)}n.abs=function(){return k(this)?V(this):this},n.add=function(T){for(var y=Math.max(this.g.length,T.g.length),E=[],A=0,P=0;P<=y;P++){var N=A+(this.i(P)&65535)+(T.i(P)&65535),x=(N>>>16)+(this.i(P)>>>16)+(T.i(P)>>>16);A=x>>>16,N&=65535,x&=65535,E[P]=x<<16|N}return new o(E,E[E.length-1]&-2147483648?-1:0)};function S(T,y){return T.add(V(y))}n.j=function(T){if(R(this)||R(T))return f;if(k(this))return k(T)?V(this).j(V(T)):V(V(this).j(T));if(k(T))return V(this.j(V(T)));if(0>this.l(I)&&0>T.l(I))return c(this.m()*T.m());for(var y=this.g.length+T.g.length,E=[],A=0;A<2*y;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(var P=0;P<T.g.length;P++){var N=this.i(A)>>>16,x=this.i(A)&65535,Xt=T.i(P)>>>16,hi=T.i(P)&65535;E[2*A+2*P]+=x*hi,w(E,2*A+2*P),E[2*A+2*P+1]+=N*hi,w(E,2*A+2*P+1),E[2*A+2*P+1]+=x*Xt,w(E,2*A+2*P+1),E[2*A+2*P+2]+=N*Xt,w(E,2*A+2*P+2)}for(A=0;A<y;A++)E[A]=E[2*A+1]<<16|E[2*A];for(A=y;A<2*y;A++)E[A]=0;return new o(E,0)};function w(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function v(T,y){this.g=T,this.h=y}function b(T,y){if(R(y))throw Error("division by zero");if(R(T))return new v(f,f);if(k(T))return y=b(V(T),y),new v(V(y.g),V(y.h));if(k(y))return y=b(T,V(y)),new v(V(y.g),y.h);if(30<T.g.length){if(k(T)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,A=y;0>=A.l(T);)E=M(E),A=M(A);var P=j(E,1),N=j(A,1);for(A=j(A,2),E=j(E,2);!R(A);){var x=N.add(A);0>=x.l(T)&&(P=P.add(E),N=x),A=j(A,1),E=j(E,1)}return y=S(T,P.j(y)),new v(P,y)}for(P=f;0<=T.l(y);){for(E=Math.max(1,Math.floor(T.m()/y.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),N=c(E),x=N.j(y);k(x)||0<x.l(T);)E-=A,N=c(E),x=N.j(y);R(N)&&(N=m),P=P.add(N),T=S(T,x)}return new v(P,T)}n.A=function(T){return b(this,T).h},n.and=function(T){for(var y=Math.max(this.g.length,T.g.length),E=[],A=0;A<y;A++)E[A]=this.i(A)&T.i(A);return new o(E,this.h&T.h)},n.or=function(T){for(var y=Math.max(this.g.length,T.g.length),E=[],A=0;A<y;A++)E[A]=this.i(A)|T.i(A);return new o(E,this.h|T.h)},n.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),E=[],A=0;A<y;A++)E[A]=this.i(A)^T.i(A);return new o(E,this.h^T.h)};function M(T){for(var y=T.g.length+1,E=[],A=0;A<y;A++)E[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(E,T.h)}function j(T,y){var E=y>>5;y%=32;for(var A=T.g.length-E,P=[],N=0;N<A;N++)P[N]=0<y?T.i(N+E)>>>y|T.i(N+E+1)<<32-y:T.i(N+E);return new o(P,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,QT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Mi=o}).apply(typeof nw<"u"?nw:typeof self<"u"?self:typeof window<"u"?window:{});var Lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var YT,wa,JT,ic,Ip,XT,ZT,eS;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Lu=="object"&&Lu];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function i(l,d){if(d)e:{var p=r;l=l.split(".");for(var _=0;_<l.length-1;_++){var C=l[_];if(!(C in p))break e;p=p[C]}l=l[l.length-1],_=p[l],d=d(_),d!=_&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var p=0,_=!1,C={next:function(){if(!_&&p<l.length){var L=p++;return{value:d(L,l[L]),done:!1}}return _=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,_),l.apply(d,C)}}return function(){return l.apply(d,arguments)}}function m(l,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function I(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function R(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,C,L){for(var $=Array(arguments.length-2),me=2;me<arguments.length;me++)$[me-2]=arguments[me];return d.prototype[C].apply(_,$)}}function k(l){const d=l.length;if(0<d){const p=Array(d);for(let _=0;_<d;_++)p[_]=l[_];return p}return[]}function V(l,d){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(u(_)){const C=l.length||0,L=_.length||0;l.length=C+L;for(let $=0;$<L;$++)l[C+$]=_[$]}else l.push(_)}}class S{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function w(l){return/^[\s\xa0]*$/.test(l)}function v(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function b(l){return b[" "](l),l}b[" "]=function(){};var M=v().indexOf("Gecko")!=-1&&!(v().toLowerCase().indexOf("webkit")!=-1&&v().indexOf("Edge")==-1)&&!(v().indexOf("Trident")!=-1||v().indexOf("MSIE")!=-1)&&v().indexOf("Edge")==-1;function j(l,d,p){for(const _ in l)d.call(p,l[_],_,l)}function T(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function y(l){const d={};for(const p in l)d[p]=l[p];return d}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,d){let p,_;for(let C=1;C<arguments.length;C++){_=arguments[C];for(p in _)l[p]=_[p];for(let L=0;L<E.length;L++)p=E[L],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function P(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function N(l){a.setTimeout(()=>{throw l},0)}function x(){var l=X;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class Xt{constructor(){this.h=this.g=null}add(d,p){const _=hi.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var hi=new S(()=>new Mo,l=>l.reset());class Mo{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let jn,G=!1,X=new Xt,te=()=>{const l=a.Promise.resolve(void 0);jn=()=>{l.then(Re)}};var Re=()=>{for(var l;l=x();){try{l.h.call(l.g)}catch(p){N(p)}var d=hi;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}G=!1};function pe(){this.s=this.s,this.C=this.C}pe.prototype.s=!1,pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var Un=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function Bn(l,d){if(Ue.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(M){e:{try{b(d.nodeName);var C=!0;break e}catch{}C=!1}C||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:zn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Bn.aa.h.call(this)}}R(Bn,Ue);var zn={2:"touch",3:"pen",4:"mouse"};Bn.prototype.h=function(){Bn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var $n="closure_listenable_"+(1e6*Math.random()|0),Ix=0;function Ex(l,d,p,_,C){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=C,this.key=++Ix,this.da=this.fa=!1}function eu(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function tu(l){this.src=l,this.g={},this.h=0}tu.prototype.add=function(l,d,p,_,C){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var $=sh(l,d,_,C);return-1<$?(d=l[$],p||(d.fa=!1)):(d=new Ex(d,this.src,L,!!_,C),d.fa=p,l.push(d)),d};function ih(l,d){var p=d.type;if(p in l.g){var _=l.g[p],C=Array.prototype.indexOf.call(_,d,void 0),L;(L=0<=C)&&Array.prototype.splice.call(_,C,1),L&&(eu(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function sh(l,d,p,_){for(var C=0;C<l.length;++C){var L=l[C];if(!L.da&&L.listener==d&&L.capture==!!p&&L.ha==_)return C}return-1}var oh="closure_lm_"+(1e6*Math.random()|0),ah={};function __(l,d,p,_,C){if(Array.isArray(d)){for(var L=0;L<d.length;L++)__(l,d[L],p,_,C);return null}return p=w_(p),l&&l[$n]?l.K(d,p,c(_)?!!_.capture:!1,C):Tx(l,d,p,!1,_,C)}function Tx(l,d,p,_,C,L){if(!d)throw Error("Invalid event type");var $=c(C)?!!C.capture:!!C,me=uh(l);if(me||(l[oh]=me=new tu(l)),p=me.add(d,p,_,$,L),p.proxy)return p;if(_=Sx(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)Un||(C=$),C===void 0&&(C=!1),l.addEventListener(d.toString(),_,C);else if(l.attachEvent)l.attachEvent(v_(d.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Sx(){function l(p){return d.call(l.src,l.listener,p)}const d=Ax;return l}function y_(l,d,p,_,C){if(Array.isArray(d))for(var L=0;L<d.length;L++)y_(l,d[L],p,_,C);else _=c(_)?!!_.capture:!!_,p=w_(p),l&&l[$n]?(l=l.i,d=String(d).toString(),d in l.g&&(L=l.g[d],p=sh(L,p,_,C),-1<p&&(eu(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete l.g[d],l.h--)))):l&&(l=uh(l))&&(d=l.g[d.toString()],l=-1,d&&(l=sh(d,p,_,C)),(p=-1<l?d[l]:null)&&lh(p))}function lh(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[$n])ih(d.i,l);else{var p=l.type,_=l.proxy;d.removeEventListener?d.removeEventListener(p,_,l.capture):d.detachEvent?d.detachEvent(v_(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=uh(d))?(ih(p,l),p.h==0&&(p.src=null,d[oh]=null)):eu(l)}}}function v_(l){return l in ah?ah[l]:ah[l]="on"+l}function Ax(l,d){if(l.da)l=!0;else{d=new Bn(d,this);var p=l.listener,_=l.ha||l.src;l.fa&&lh(l),l=p.call(_,d)}return l}function uh(l){return l=l[oh],l instanceof tu?l:null}var ch="__closure_events_fn_"+(1e9*Math.random()>>>0);function w_(l){return typeof l=="function"?l:(l[ch]||(l[ch]=function(d){return l.handleEvent(d)}),l[ch])}function dt(){pe.call(this),this.i=new tu(this),this.M=this,this.F=null}R(dt,pe),dt.prototype[$n]=!0,dt.prototype.removeEventListener=function(l,d,p,_){y_(this,l,d,p,_)};function wt(l,d){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=d.type||d,typeof d=="string")d=new Ue(d,l);else if(d instanceof Ue)d.target=d.target||l;else{var C=d;d=new Ue(_,l),A(d,C)}if(C=!0,p)for(var L=p.length-1;0<=L;L--){var $=d.g=p[L];C=nu($,_,!0,d)&&C}if($=d.g=l,C=nu($,_,!0,d)&&C,C=nu($,_,!1,d)&&C,p)for(L=0;L<p.length;L++)$=d.g=p[L],C=nu($,_,!1,d)&&C}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],_=0;_<p.length;_++)eu(p[_]);delete l.g[d],l.h--}}this.F=null},dt.prototype.K=function(l,d,p,_){return this.i.add(String(l),d,!1,p,_)},dt.prototype.L=function(l,d,p,_){return this.i.add(String(l),d,!0,p,_)};function nu(l,d,p,_){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var C=!0,L=0;L<d.length;++L){var $=d[L];if($&&!$.da&&$.capture==p){var me=$.listener,rt=$.ha||$.src;$.fa&&ih(l.i,$),C=me.call(rt,_)!==!1&&C}}return C&&!_.defaultPrevented}function I_(l,d,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function E_(l){l.g=I_(()=>{l.g=null,l.i&&(l.i=!1,E_(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class xx extends pe{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:E_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fo(l){pe.call(this),this.h=l,this.g={}}R(Fo,pe);var T_=[];function S_(l){j(l.g,function(d,p){this.g.hasOwnProperty(p)&&lh(d)},l),l.g={}}Fo.prototype.N=function(){Fo.aa.N.call(this),S_(this)},Fo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dh=a.JSON.stringify,Rx=a.JSON.parse,Px=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function hh(){}hh.prototype.h=null;function A_(l){return l.h||(l.h=l.i())}function x_(){}var jo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fh(){Ue.call(this,"d")}R(fh,Ue);function ph(){Ue.call(this,"c")}R(ph,Ue);var fi={},R_=null;function ru(){return R_=R_||new dt}fi.La="serverreachability";function P_(l){Ue.call(this,fi.La,l)}R(P_,Ue);function Uo(l){const d=ru();wt(d,new P_(d))}fi.STAT_EVENT="statevent";function k_(l,d){Ue.call(this,fi.STAT_EVENT,l),this.stat=d}R(k_,Ue);function It(l){const d=ru();wt(d,new k_(d,l))}fi.Ma="timingevent";function b_(l,d){Ue.call(this,fi.Ma,l),this.size=d}R(b_,Ue);function Bo(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function zo(){this.g=!0}zo.prototype.xa=function(){this.g=!1};function kx(l,d,p,_,C,L){l.info(function(){if(l.g)if(L)for(var $="",me=L.split("&"),rt=0;rt<me.length;rt++){var le=me[rt].split("=");if(1<le.length){var ht=le[0];le=le[1];var ft=ht.split("_");$=2<=ft.length&&ft[1]=="type"?$+(ht+"="+le+"&"):$+(ht+"=redacted&")}}else $=null;else $=L;return"XMLHTTP REQ ("+_+") [attempt "+C+"]: "+d+`
`+p+`
`+$})}function bx(l,d,p,_,C,L,$){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+C+"]: "+d+`
`+p+`
`+L+" "+$})}function cs(l,d,p,_){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+Nx(l,p)+(_?" "+_:"")})}function Cx(l,d){l.info(function(){return"TIMEOUT: "+d})}zo.prototype.info=function(){};function Nx(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var C=_[1];if(Array.isArray(C)&&!(1>C.length)){var L=C[0];if(L!="noop"&&L!="stop"&&L!="close")for(var $=1;$<C.length;$++)C[$]=""}}}}return dh(p)}catch{return d}}var iu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},C_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},mh;function su(){}R(su,hh),su.prototype.g=function(){return new XMLHttpRequest},su.prototype.i=function(){return{}},mh=new su;function gr(l,d,p,_){this.j=l,this.i=d,this.l=p,this.R=_||1,this.U=new Fo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new N_}function N_(){this.i=null,this.g="",this.h=!1}var D_={},gh={};function _h(l,d,p){l.L=1,l.v=uu(qn(d)),l.m=p,l.P=!0,V_(l,null)}function V_(l,d){l.F=Date.now(),ou(l),l.A=qn(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),H_(p.i,"t",_),l.C=0,p=l.j.J,l.h=new N_,l.g=hy(l.j,p?d:null,!l.m),0<l.O&&(l.M=new xx(m(l.Y,l,l.g),l.O)),d=l.U,p=l.g,_=l.ca;var C="readystatechange";Array.isArray(C)||(C&&(T_[0]=C.toString()),C=T_);for(var L=0;L<C.length;L++){var $=__(p,C[L],_||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Uo(),kx(l.i,l.u,l.A,l.l,l.R,l.m)}gr.prototype.ca=function(l){l=l.target;const d=this.M;d&&Wn(l)==3?d.j():this.Y(l)},gr.prototype.Y=function(l){try{if(l==this.g)e:{const ft=Wn(this.g);var d=this.g.Ba();const fs=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||ty(this.g)))){this.J||ft!=4||d==7||(d==8||0>=fs?Uo(3):Uo(2)),yh(this);var p=this.g.Z();this.X=p;t:if(O_(this)){var _=ty(this.g);l="";var C=_.length,L=Wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pi(this),$o(this);var $="";break t}this.h.i=new a.TextDecoder}for(d=0;d<C;d++)this.h.h=!0,l+=this.h.i.decode(_[d],{stream:!(L&&d==C-1)});_.length=0,this.h.g+=l,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=p==200,bx(this.i,this.u,this.A,this.l,this.R,ft,p),this.o){if(this.T&&!this.K){t:{if(this.g){var me,rt=this.g;if((me=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(me)){var le=me;break t}}le=null}if(p=le)cs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vh(this,p);else{this.o=!1,this.s=3,It(12),pi(this),$o(this);break e}}if(this.P){p=!0;let un;for(;!this.J&&this.C<$.length;)if(un=Dx(this,$),un==gh){ft==4&&(this.s=4,It(14),p=!1),cs(this.i,this.l,null,"[Incomplete Response]");break}else if(un==D_){this.s=4,It(15),cs(this.i,this.l,$,"[Invalid Chunk]"),p=!1;break}else cs(this.i,this.l,un,null),vh(this,un);if(O_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||$.length!=0||this.h.h||(this.s=1,It(16),p=!1),this.o=this.o&&p,!p)cs(this.i,this.l,$,"[Invalid Chunked Response]"),pi(this),$o(this);else if(0<$.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Ah(ht),ht.M=!0,It(11))}}else cs(this.i,this.l,$,null),vh(this,$);ft==4&&pi(this),this.o&&!this.J&&(ft==4?ly(this.j,this):(this.o=!1,ou(this)))}else Yx(this.g),p==400&&0<$.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),pi(this),$o(this)}}}catch{}finally{}};function O_(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Dx(l,d){var p=l.C,_=d.indexOf(`
`,p);return _==-1?gh:(p=Number(d.substring(p,_)),isNaN(p)?D_:(_+=1,_+p>d.length?gh:(d=d.slice(_,_+p),l.C=_+p,d)))}gr.prototype.cancel=function(){this.J=!0,pi(this)};function ou(l){l.S=Date.now()+l.I,L_(l,l.I)}function L_(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Bo(m(l.ba,l),d)}function yh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}gr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Cx(this.i,this.A),this.L!=2&&(Uo(),It(17)),pi(this),this.s=2,$o(this)):L_(this,this.S-l)};function $o(l){l.j.G==0||l.J||ly(l.j,l)}function pi(l){yh(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,S_(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function vh(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||wh(p.h,l))){if(!l.K&&wh(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var C=_;if(C[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)mu(p),fu(p);else break e;Sh(p),It(18)}}else p.za=C[1],0<p.za-p.T&&37500>C[2]&&p.F&&p.v==0&&!p.C&&(p.C=Bo(m(p.Za,p),6e3));if(1>=j_(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else gi(p,11)}else if((l.K||p.g==l)&&mu(p),!w(d))for(C=p.Da.g.parse(d),d=0;d<C.length;d++){let le=C[d];if(p.T=le[0],le=le[1],p.G==2)if(le[0]=="c"){p.K=le[1],p.ia=le[2];const ht=le[3];ht!=null&&(p.la=ht,p.j.info("VER="+p.la));const ft=le[4];ft!=null&&(p.Aa=ft,p.j.info("SVER="+p.Aa));const fs=le[5];fs!=null&&typeof fs=="number"&&0<fs&&(_=1.5*fs,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const un=l.g;if(un){const _u=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_u){var L=_.h;L.g||_u.indexOf("spdy")==-1&&_u.indexOf("quic")==-1&&_u.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Ih(L,L.h),L.h=null))}if(_.D){const xh=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;xh&&(_.ya=xh,ye(_.I,_.D,xh))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var $=l;if(_.qa=dy(_,_.J?_.ia:null,_.W),$.K){U_(_.h,$);var me=$,rt=_.L;rt&&(me.I=rt),me.B&&(yh(me),ou(me)),_.g=$}else oy(_);0<p.i.length&&pu(p)}else le[0]!="stop"&&le[0]!="close"||gi(p,7);else p.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?gi(p,7):Th(p):le[0]!="noop"&&p.l&&p.l.ta(le),p.v=0)}}Uo(4)}catch{}}var Vx=class{constructor(l,d){this.g=l,this.map=d}};function M_(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function F_(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function j_(l){return l.h?1:l.g?l.g.size:0}function wh(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Ih(l,d){l.g?l.g.add(d):l.h=d}function U_(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}M_.prototype.cancel=function(){if(this.i=B_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function B_(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return k(l.i)}function Ox(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],p=l.length,_=0;_<p;_++)d.push(l[_]);return d}d=[],p=0;for(_ in l)d[p++]=l[_];return d}function Lx(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const _ in l)d[p++]=_;return d}}}function z_(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=Lx(l),_=Ox(l),C=_.length,L=0;L<C;L++)d.call(void 0,_[L],p&&p[L],l)}var $_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mx(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),C=null;if(0<=_){var L=l[p].substring(0,_);C=l[p].substring(_+1)}else L=l[p];d(L,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function mi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof mi){this.h=l.h,au(this,l.j),this.o=l.o,this.g=l.g,lu(this,l.s),this.l=l.l;var d=l.i,p=new Go;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),q_(this,p),this.m=l.m}else l&&(d=String(l).match($_))?(this.h=!1,au(this,d[1]||"",!0),this.o=qo(d[2]||""),this.g=qo(d[3]||"",!0),lu(this,d[4]),this.l=qo(d[5]||"",!0),q_(this,d[6]||"",!0),this.m=qo(d[7]||"")):(this.h=!1,this.i=new Go(null,this.h))}mi.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Wo(d,W_,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Wo(d,W_,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Wo(p,p.charAt(0)=="/"?Ux:jx,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Wo(p,zx)),l.join("")};function qn(l){return new mi(l)}function au(l,d,p){l.j=p?qo(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function lu(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function q_(l,d,p){d instanceof Go?(l.i=d,$x(l.i,l.h)):(p||(d=Wo(d,Bx)),l.i=new Go(d,l.h))}function ye(l,d,p){l.i.set(d,p)}function uu(l){return ye(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function qo(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Wo(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,Fx),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Fx(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var W_=/[#\/\?@]/g,jx=/[#\?:]/g,Ux=/[#\?]/g,Bx=/[#\?@]/g,zx=/#/g;function Go(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function _r(l){l.g||(l.g=new Map,l.h=0,l.i&&Mx(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}n=Go.prototype,n.add=function(l,d){_r(this),this.i=null,l=ds(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function G_(l,d){_r(l),d=ds(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function K_(l,d){return _r(l),d=ds(l,d),l.g.has(d)}n.forEach=function(l,d){_r(this),this.g.forEach(function(p,_){p.forEach(function(C){l.call(d,C,_,this)},this)},this)},n.na=function(){_r(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let _=0;_<d.length;_++){const C=l[_];for(let L=0;L<C.length;L++)p.push(d[_])}return p},n.V=function(l){_r(this);let d=[];if(typeof l=="string")K_(this,l)&&(d=d.concat(this.g.get(ds(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},n.set=function(l,d){return _r(this),this.i=null,l=ds(this,l),K_(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},n.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function H_(l,d,p){G_(l,d),0<p.length&&(l.i=null,l.g.set(ds(l,d),k(p)),l.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var _=d[p];const L=encodeURIComponent(String(_)),$=this.V(_);for(_=0;_<$.length;_++){var C=L;$[_]!==""&&(C+="="+encodeURIComponent(String($[_]))),l.push(C)}}return this.i=l.join("&")};function ds(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function $x(l,d){d&&!l.j&&(_r(l),l.i=null,l.g.forEach(function(p,_){var C=_.toLowerCase();_!=C&&(G_(this,_),H_(this,C,p))},l)),l.j=d}function qx(l,d){const p=new zo;if(a.Image){const _=new Image;_.onload=I(yr,p,"TestLoadImage: loaded",!0,d,_),_.onerror=I(yr,p,"TestLoadImage: error",!1,d,_),_.onabort=I(yr,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=I(yr,p,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else d(!1)}function Wx(l,d){const p=new zo,_=new AbortController,C=setTimeout(()=>{_.abort(),yr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:_.signal}).then(L=>{clearTimeout(C),L.ok?yr(p,"TestPingServer: ok",!0,d):yr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(C),yr(p,"TestPingServer: error",!1,d)})}function yr(l,d,p,_,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),_(p)}catch{}}function Gx(){this.g=new Px}function Kx(l,d,p){const _=p||"";try{z_(l,function(C,L){let $=C;c(C)&&($=dh(C)),d.push(_+L+"="+encodeURIComponent($))})}catch(C){throw d.push(_+"type="+encodeURIComponent("_badmap")),C}}function cu(l){this.l=l.Ub||null,this.j=l.eb||!1}R(cu,hh),cu.prototype.g=function(){return new du(this.l,this.j)},cu.prototype.i=function(l){return function(){return l}}({});function du(l,d){dt.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(du,dt),n=du.prototype,n.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Ho(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ko(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ho(this)),this.g&&(this.readyState=3,Ho(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Q_(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Q_(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Ko(this):Ho(this),this.readyState==3&&Q_(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,Ko(this))},n.Qa=function(l){this.g&&(this.response=l,Ko(this))},n.ga=function(){this.g&&Ko(this)};function Ko(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ho(l)}n.setRequestHeader=function(l,d){this.u.append(l,d)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function Ho(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(du.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Y_(l){let d="";return j(l,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function Eh(l,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Y_(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):ye(l,d,p))}function De(l){dt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(De,dt);var Hx=/^https?$/i,Qx=["POST","PUT"];n=De.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():mh.g(),this.v=this.o?A_(this.o):A_(mh),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(L){J_(this,L);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var C in _)p.set(C,_[C]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())p.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),C=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Qx,d,void 0))||_||C||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of p)this.g.setRequestHeader(L,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ey(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){J_(this,L)}};function J_(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,X_(l),hu(l)}function X_(l){l.A||(l.A=!0,wt(l,"complete"),wt(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,wt(this,"complete"),wt(this,"abort"),hu(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hu(this,!0)),De.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Z_(this):this.bb())},n.bb=function(){Z_(this)};function Z_(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Wn(l)!=4||l.Z()!=2)){if(l.u&&Wn(l)==4)I_(l.Ea,0,l);else if(wt(l,"readystatechange"),Wn(l)==4){l.h=!1;try{const $=l.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=$===0){var C=String(l.D).match($_)[1]||null;!C&&a.self&&a.self.location&&(C=a.self.location.protocol.slice(0,-1)),_=!Hx.test(C?C.toLowerCase():"")}p=_}if(p)wt(l,"complete"),wt(l,"success");else{l.m=6;try{var L=2<Wn(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",X_(l)}}finally{hu(l)}}}}function hu(l,d){if(l.g){ey(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||wt(l,"ready");try{p.onreadystatechange=_}catch{}}}function ey(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function Wn(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<Wn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),Rx(d)}};function ty(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Yx(l){const d={};l=(l.g&&2<=Wn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(w(l[_]))continue;var p=P(l[_]);const C=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=d[C]||[];d[C]=L,L.push(p)}T(d,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qo(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function ny(l){this.Aa=0,this.i=[],this.j=new zo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qo("baseRetryDelayMs",5e3,l),this.cb=Qo("retryDelaySeedMs",1e4,l),this.Wa=Qo("forwardChannelMaxRetries",2,l),this.wa=Qo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new M_(l&&l.concurrentRequestLimit),this.Da=new Gx,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ny.prototype,n.la=8,n.G=1,n.connect=function(l,d,p,_){It(0),this.W=l,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=dy(this,null,this.W),pu(this)};function Th(l){if(ry(l),l.G==3){var d=l.U++,p=qn(l.I);if(ye(p,"SID",l.K),ye(p,"RID",d),ye(p,"TYPE","terminate"),Yo(l,p),d=new gr(l,l.j,d),d.L=2,d.v=uu(qn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=hy(d.j,null),d.g.ea(d.v)),d.F=Date.now(),ou(d)}cy(l)}function fu(l){l.g&&(Ah(l),l.g.cancel(),l.g=null)}function ry(l){fu(l),l.u&&(a.clearTimeout(l.u),l.u=null),mu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function pu(l){if(!F_(l.h)&&!l.s){l.s=!0;var d=l.Ga;jn||te(),G||(jn(),G=!0),X.add(d,l),l.B=0}}function Jx(l,d){return j_(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Bo(m(l.Ga,l,d),uy(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const C=new gr(this,this.j,l);let L=this.o;if(this.S&&(L?(L=y(L),A(L,this.S)):L=this.S),this.m!==null||this.O||(C.H=L,L=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=sy(this,C,d),p=qn(this.I),ye(p,"RID",l),ye(p,"CVER",22),this.D&&ye(p,"X-HTTP-Session-Id",this.D),Yo(this,p),L&&(this.O?d="headers="+encodeURIComponent(String(Y_(L)))+"&"+d:this.m&&Eh(p,this.m,L)),Ih(this.h,C),this.Ua&&ye(p,"TYPE","init"),this.P?(ye(p,"$req",d),ye(p,"SID","null"),C.T=!0,_h(C,p,null)):_h(C,p,d),this.G=2}}else this.G==3&&(l?iy(this,l):this.i.length==0||F_(this.h)||iy(this))};function iy(l,d){var p;d?p=d.l:p=l.U++;const _=qn(l.I);ye(_,"SID",l.K),ye(_,"RID",p),ye(_,"AID",l.T),Yo(l,_),l.m&&l.o&&Eh(_,l.m,l.o),p=new gr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=sy(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Ih(l.h,p),_h(p,_,d)}function Yo(l,d){l.H&&j(l.H,function(p,_){ye(d,_,p)}),l.l&&z_({},function(p,_){ye(d,_,p)})}function sy(l,d,p){p=Math.min(l.i.length,p);var _=l.l?m(l.l.Na,l.l,l):null;e:{var C=l.i;let L=-1;for(;;){const $=["count="+p];L==-1?0<p?(L=C[0].g,$.push("ofs="+L)):L=0:$.push("ofs="+L);let me=!0;for(let rt=0;rt<p;rt++){let le=C[rt].g;const ht=C[rt].map;if(le-=L,0>le)L=Math.max(0,C[rt].g-100),me=!1;else try{Kx(ht,$,"req"+le+"_")}catch{_&&_(ht)}}if(me){_=$.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,_}function oy(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;jn||te(),G||(jn(),G=!0),X.add(d,l),l.v=0}}function Sh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Bo(m(l.Fa,l),uy(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,ay(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Bo(m(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),fu(this),ay(this))};function Ah(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function ay(l){l.g=new gr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=qn(l.qa);ye(d,"RID","rpc"),ye(d,"SID",l.K),ye(d,"AID",l.T),ye(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&ye(d,"TO",l.ja),ye(d,"TYPE","xmlhttp"),Yo(l,d),l.m&&l.o&&Eh(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=uu(qn(d)),p.m=null,p.P=!0,V_(p,l)}n.Za=function(){this.C!=null&&(this.C=null,fu(this),Sh(this),It(19))};function mu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function ly(l,d){var p=null;if(l.g==d){mu(l),Ah(l),l.g=null;var _=2}else if(wh(l.h,d))p=d.D,U_(l.h,d),_=1;else return;if(l.G!=0){if(d.o)if(_==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var C=l.B;_=ru(),wt(_,new b_(_,p)),pu(l)}else oy(l);else if(C=d.s,C==3||C==0&&0<d.X||!(_==1&&Jx(l,d)||_==2&&Sh(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),C){case 1:gi(l,5);break;case 4:gi(l,10);break;case 3:gi(l,6);break;default:gi(l,2)}}}function uy(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function gi(l,d){if(l.j.info("Error code "+d),d==2){var p=m(l.fb,l),_=l.Xa;const C=!_;_=new mi(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||au(_,"https"),uu(_),C?qx(_.toString(),p):Wx(_.toString(),p)}else It(2);l.G=0,l.l&&l.l.sa(d),cy(l),ry(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function cy(l){if(l.G=0,l.ka=[],l.l){const d=B_(l.h);(d.length!=0||l.i.length!=0)&&(V(l.ka,d),V(l.ka,l.i),l.h.i.length=0,k(l.i),l.i.length=0),l.l.ra()}}function dy(l,d,p){var _=p instanceof mi?qn(p):new mi(p);if(_.g!="")d&&(_.g=d+"."+_.g),lu(_,_.s);else{var C=a.location;_=C.protocol,d=d?d+"."+C.hostname:C.hostname,C=+C.port;var L=new mi(null);_&&au(L,_),d&&(L.g=d),C&&lu(L,C),p&&(L.l=p),_=L}return p=l.D,d=l.ya,p&&d&&ye(_,p,d),ye(_,"VER",l.la),Yo(l,_),_}function hy(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new De(new cu({eb:p})):new De(l.pa),d.Ha(l.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function fy(){}n=fy.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function gu(){}gu.prototype.g=function(l,d){return new zt(l,d)};function zt(l,d){dt.call(this),this.g=new ny(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!w(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!w(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new hs(this)}R(zt,dt),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){Th(this.g)},zt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=dh(l),l=p);d.i.push(new Vx(d.Ya++,l)),d.G==3&&pu(d)},zt.prototype.N=function(){this.g.l=null,delete this.j,Th(this.g),delete this.g,zt.aa.N.call(this)};function py(l){fh.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}R(py,fh);function my(){ph.call(this),this.status=1}R(my,ph);function hs(l){this.g=l}R(hs,fy),hs.prototype.ua=function(){wt(this.g,"a")},hs.prototype.ta=function(l){wt(this.g,new py(l))},hs.prototype.sa=function(l){wt(this.g,new my)},hs.prototype.ra=function(){wt(this.g,"b")},gu.prototype.createWebChannel=gu.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,eS=function(){return new gu},ZT=function(){return ru()},XT=fi,Ip={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},iu.NO_ERROR=0,iu.TIMEOUT=8,iu.HTTP_ERROR=6,ic=iu,C_.COMPLETE="complete",JT=C_,x_.EventType=jo,jo.OPEN="a",jo.CLOSE="b",jo.ERROR="c",jo.MESSAGE="d",dt.prototype.listen=dt.prototype.K,wa=x_,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha,YT=De}).apply(typeof Lu<"u"?Lu:typeof self<"u"?self:typeof window<"u"?window:{});const rw="@firebase/firestore";/**
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */const Qr=new Ed("@firebase/firestore");function Is(){return Qr.logLevel}function g2(n){Qr.setLogLevel(n)}function U(n,...e){if(Qr.logLevel<=ne.DEBUG){const t=e.map(fg);Qr.debug(`Firestore (${ko}): ${n}`,...t)}}function ze(n,...e){if(Qr.logLevel<=ne.ERROR){const t=e.map(fg);Qr.error(`Firestore (${ko}): ${n}`,...t)}}function Ln(n,...e){if(Qr.logLevel<=ne.WARN){const t=e.map(fg);Qr.warn(`Firestore (${ko}): ${n}`,...t)}}function fg(n){if(typeof n=="string")return n;try{/**
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
 */function K(n="Unexpected state"){const e=`FIRESTORE (${ko}) INTERNAL ASSERTION FAILED: `+n;throw ze(e),new Error(e)}function Q(n,e){n||K()}function _2(n,e){n||K()}function W(n,e){return n}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends xt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class lt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class tS{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class y2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(et.UNAUTHENTICATED))}shutdown(){}}class v2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class w2{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new lt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new lt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new lt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new tS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string"),new et(e)}}class I2{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class E2{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new I2(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class T2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class S2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Q(this.o===void 0);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Q(typeof t.token=="string"),this.R=t.token,new T2(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function A2(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class nS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=A2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(n,e){return n<e?-1:n>e?1:0}function lo(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function rS(n){return n+"\0"}/**
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
 */class xe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new F(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new xe(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new xe(0,0))}static max(){return new Y(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class pl{constructor(e,t,r){t===void 0?t=0:t>e.length&&K(),r===void 0?r=e.length-t:r>e.length-t&&K(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return pl.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof pl?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ie extends pl{construct(e,t,r){return new ie(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ie(t)}static emptyPath(){return new ie([])}}const x2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Se extends pl{construct(e,t,r){return new Se(e,t,r)}static isValidIdentifier(e){return x2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Se(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new F(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new F(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new F(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Se(t)}static emptyPath(){return new Se([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ie.fromString(e))}static fromName(e){return new q(ie.fromString(e).popFirst(5))}static empty(){return new q(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ie(e.slice()))}}/**
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
 */class qc{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Ep(n){return n.fields.find(e=>e.kind===2)}function Ii(n){return n.fields.filter(e=>e.kind!==2)}qc.UNKNOWN_ID=-1;class sc{constructor(e,t){this.fieldPath=e,this.kind=t}}class ml{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ml(0,Qt.min())}}function iS(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new xe(t+1,0):new xe(t,r));return new Qt(i,q.empty(),e)}function sS(n){return new Qt(n.readTime,n.key,-1)}class Qt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Qt(Y.min(),q.empty(),-1)}static max(){return new Qt(Y.max(),q.empty(),-1)}}function pg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:Z(n.largestBatchId,e.largestBatchId))}/**
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
 */const oS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function li(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==oS)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Vd{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new lt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new La(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=mg(r.target.error);this.V.reject(new La(e,i))}}static open(e,t,r,i){try{return new Vd(t,e.transaction(i,r))}catch(s){throw new La(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(U("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new P2(t)}}class Nn{constructor(e,t,r){this.name=e,this.version=t,this.p=r,Nn.S(Ne())===12.2&&ze("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return U("SimpleDb","Removing database:",e),Ei(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!sl())return!1;if(Nn.v())return!0;const e=Ne(),t=Nn.S(e),r=0<t&&t<10,i=lS(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(U("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new La(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new F(O.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new F(O.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new La(e,o))},i.onupgradeneeded=s=>{U("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{U("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Vd.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),D.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(U("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function lS(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class R2{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Ei(this.B.delete())}}class La extends F{constructor(e,t){super(O.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ui(n){return n.name==="IndexedDbTransactionError"}class P2{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(U("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(U("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ei(r)}add(e){return U("SimpleDb","ADD",this.store.name,e,e),Ei(this.store.add(e))}get(e){return Ei(this.store.get(e)).next(t=>(t===void 0&&(t=null),U("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return U("SimpleDb","DELETE",this.store.name,e),Ei(this.store.delete(e))}count(){return U("SimpleDb","COUNT",this.store.name),Ei(this.store.count())}U(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new D((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,u)=>{o.push(u)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new D((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,t){U("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Y(e){const t=this.cursor({});return new D((r,i)=>{t.onerror=s=>{const o=mg(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new D((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new R2(a),c=t(a.primaryKey,a.value,u);if(c instanceof D){const h=c.catch(f=>(u.done(),D.reject(f)));r.push(h)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>D.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ei(n){return new D((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=mg(r.target.error);t(i)}})}let iw=!1;function mg(n){const e=Nn.S(Ne());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new F("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return iw||(iw=!0,setTimeout(()=>{throw r},0)),r}}return n}class k2{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){U("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{U("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){ui(t)?U("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await li(t)}await this.X(6e4)})}}class b2{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let i=t,s=!0;return D.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(U("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=sS(s);pg(o,r)>0&&(r=o)}),new Qt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Lt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Lt.oe=-1;function Bl(n){return n==null}function gl(n){return n===0&&1/n==-1/0}function uS(n){return typeof n=="number"&&Number.isInteger(n)&&!gl(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Rt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=sw(e)),e=C2(n.get(t),e);return sw(e)}function C2(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function sw(n){return n+""}function Rn(n){const e=n.length;if(Q(e>=2),e===2)return Q(n.charAt(0)===""&&n.charAt(1)===""),ie.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&K(),n.charAt(o+1)){case"":const a=n.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:K()}s=o+2}return new ie(r)}/**
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
 */const ow=["userId","batchId"];/**
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
 */function oc(n,e){return[n,Rt(e)]}function cS(n,e,t){return[n,Rt(e),t]}const N2={},D2=["prefixPath","collectionGroup","readTime","documentId"],V2=["prefixPath","collectionGroup","documentId"],O2=["collectionGroup","readTime","prefixPath","documentId"],L2=["canonicalId","targetId"],M2=["targetId","path"],F2=["path","targetId"],j2=["collectionId","parent"],U2=["indexId","uid"],B2=["uid","sequenceNumber"],z2=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],$2=["indexId","uid","orderedDocumentKey"],q2=["userId","collectionPath","documentId"],W2=["userId","collectionPath","largestBatchId"],G2=["userId","collectionGroup","largestBatchId"],dS=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],K2=[...dS,"documentOverlays"],hS=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],fS=hS,gg=[...fS,"indexConfiguration","indexState","indexEntries"],H2=gg,Q2=[...gg,"globals"];/**
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
 */class Tp extends aS{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Je(n,e){const t=W(n);return Nn.F(t._e,e)}/**
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
 */function aw(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ss(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function pS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class _e{constructor(e,t){this.comparator=e,this.root=t||st.EMPTY}insert(e,t){return new _e(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mu(this.root,e,this.comparator,!0)}}class Mu{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??st.RED,this.left=i??st.EMPTY,this.right=s??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new st(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return st.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,t,r,i,s){return this}insert(e,t,r){return new st(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class fe{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new lw(this.data.getIterator())}getIteratorFrom(e){return new lw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new fe(this.comparator);return t.data=e,t}}class lw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function gs(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Mt{constructor(e){this.fields=e,e.sort(Se.comparator)}static empty(){return new Mt([])}unionWith(e){let t=new fe(Se.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Mt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return lo(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class mS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function Y2(){return typeof atob<"u"}/**
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
 */class Me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new mS("Invalid base64 string: "+s):s}}(e);return new Me(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Me.EMPTY_BYTE_STRING=new Me("");const J2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lr(n){if(Q(!!n),typeof n=="string"){let e=0;const t=J2.exec(n);if(Q(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ee(n.seconds),nanos:Ee(n.nanos)}}function Ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Yr(n){return typeof n=="string"?Me.fromBase64String(n):Me.fromUint8Array(n)}/**
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
 */function Od(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function _g(n){const e=n.mapValue.fields.__previous_value__;return Od(e)?_g(e):e}function _l(n){const e=lr(n.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
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
 */class X2{constructor(e,t,r,i,s,o,a,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Jr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Jr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Jr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Dr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ac={nullValue:"NULL_VALUE"};function Gi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Od(n)?4:gS(n)?9007199254740991:Ld(n)?10:11:K()}function Mn(n,e){if(n===e)return!0;const t=Gi(n);if(t!==Gi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return _l(n).isEqual(_l(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=lr(i.timestampValue),a=lr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Yr(i.bytesValue).isEqual(Yr(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Ee(i.geoPointValue.latitude)===Ee(s.geoPointValue.latitude)&&Ee(i.geoPointValue.longitude)===Ee(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ee(i.integerValue)===Ee(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ee(i.doubleValue),a=Ee(s.doubleValue);return o===a?gl(o)===gl(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return lo(n.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(aw(o)!==aw(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Mn(o[u],a[u])))return!1;return!0}(n,e);default:return K()}}function yl(n,e){return(n.values||[]).find(t=>Mn(t,e))!==void 0}function Xr(n,e){if(n===e)return 0;const t=Gi(n),r=Gi(e);if(t!==r)return Z(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ee(s.integerValue||s.doubleValue),u=Ee(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,e);case 3:return uw(n.timestampValue,e.timestampValue);case 4:return uw(_l(n),_l(e));case 5:return Z(n.stringValue,e.stringValue);case 6:return function(s,o){const a=Yr(s),u=Yr(o);return a.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=Z(a[c],u[c]);if(h!==0)return h}return Z(a.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Z(Ee(s.latitude),Ee(o.latitude));return a!==0?a:Z(Ee(s.longitude),Ee(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return cw(n.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const f=s.fields||{},m=o.fields||{},I=(a=f.value)===null||a===void 0?void 0:a.arrayValue,R=(u=m.value)===null||u===void 0?void 0:u.arrayValue,k=Z(((c=I==null?void 0:I.values)===null||c===void 0?void 0:c.length)||0,((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0);return k!==0?k:cw(I,R)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===Dr.mapValue&&o===Dr.mapValue)return 0;if(s===Dr.mapValue)return 1;if(o===Dr.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const m=Z(u[f],h[f]);if(m!==0)return m;const I=Xr(a[u[f]],c[h[f]]);if(I!==0)return I}return Z(u.length,h.length)}(n.mapValue,e.mapValue);default:throw K()}}function uw(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Z(n,e);const t=lr(n),r=lr(e),i=Z(t.seconds,r.seconds);return i!==0?i:Z(t.nanos,r.nanos)}function cw(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Xr(t[i],r[i]);if(s)return s}return Z(t.length,r.length)}function uo(n){return Sp(n)}function Sp(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=lr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Yr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Sp(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Sp(t.fields[o])}`;return i+"}"}(n.mapValue):K()}function Ki(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ap(n){return!!n&&"integerValue"in n}function vl(n){return!!n&&"arrayValue"in n}function dw(n){return!!n&&"nullValue"in n}function hw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function lc(n){return!!n&&"mapValue"in n}function Ld(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ma(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ss(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ma(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ma(n.arrayValue.values[t]);return e}return Object.assign({},n)}function gS(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const _S={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function Z2(n){return"nullValue"in n?ac:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ki(Jr.empty(),q.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Ld(n)?_S:{mapValue:{}}:K()}function eV(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ki(Jr.empty(),q.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?_S:"mapValue"in n?Ld(n)?{mapValue:{}}:Dr:K()}function fw(n,e){const t=Xr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function pw(n,e){const t=Xr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!lc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ma(t)}setAll(e){let t=Se.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Ma(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());lc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];lc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){ss(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ot(Ma(this.value))}}function yS(n){const e=[];return ss(n.fields,(t,r)=>{const i=new Se([t]);if(lc(r)){const s=yS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Mt(e)}/**
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
 */class we{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new we(e,0,Y.min(),Y.min(),Y.min(),ot.empty(),0)}static newFoundDocument(e,t,r,i){return new we(e,1,t,Y.min(),r,i,0)}static newNoDocument(e,t){return new we(e,2,t,Y.min(),Y.min(),ot.empty(),0)}static newUnknownDocument(e,t){return new we(e,3,t,Y.min(),Y.min(),ot.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof we&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new we(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Zr{constructor(e,t){this.position=e,this.inclusive=t}}function mw(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),t.key):r=Xr(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function gw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Mn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class wl{constructor(e,t="asc"){this.field=e,this.dir=t}}function tV(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class vS{}class se extends vS{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new nV(e,t,r):t==="array-contains"?new sV(e,r):t==="in"?new AS(e,r):t==="not-in"?new oV(e,r):t==="array-contains-any"?new aV(e,r):new se(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new rV(e,r):new iV(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Xr(t,this.value)):t!==null&&Gi(this.value)===Gi(t)&&this.matchesComparison(Xr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class de extends vS{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new de(e,t)}matches(e){return co(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function co(n){return n.op==="and"}function xp(n){return n.op==="or"}function yg(n){return wS(n)&&co(n)}function wS(n){for(const e of n.filters)if(e instanceof de)return!1;return!0}function Rp(n){if(n instanceof se)return n.field.canonicalString()+n.op.toString()+uo(n.value);if(yg(n))return n.filters.map(e=>Rp(e)).join(",");{const e=n.filters.map(t=>Rp(t)).join(",");return`${n.op}(${e})`}}function IS(n,e){return n instanceof se?function(r,i){return i instanceof se&&r.op===i.op&&r.field.isEqual(i.field)&&Mn(r.value,i.value)}(n,e):n instanceof de?function(r,i){return i instanceof de&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&IS(o,i.filters[a]),!0):!1}(n,e):void K()}function ES(n,e){const t=n.filters.concat(e);return de.create(t,n.op)}function TS(n){return n instanceof se?function(t){return`${t.field.canonicalString()} ${t.op} ${uo(t.value)}`}(n):n instanceof de?function(t){return t.op.toString()+" {"+t.getFilters().map(TS).join(" ,")+"}"}(n):"Filter"}class nV extends se{constructor(e,t,r){super(e,t,r),this.key=q.fromName(r.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class rV extends se{constructor(e,t){super(e,"in",t),this.keys=SS("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class iV extends se{constructor(e,t){super(e,"not-in",t),this.keys=SS("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function SS(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>q.fromName(r.referenceValue))}class sV extends se{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return vl(t)&&yl(t.arrayValue,this.value)}}class AS extends se{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&yl(this.value.arrayValue,t)}}class oV extends se{constructor(e,t){super(e,"not-in",t)}matches(e){if(yl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!yl(this.value.arrayValue,t)}}class aV extends se{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!vl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>yl(this.value.arrayValue,r))}}/**
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
 */class lV{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Pp(n,e=null,t=[],r=[],i=null,s=null,o=null){return new lV(n,e,t,r,i,s,o)}function Hi(n){const e=W(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Rp(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Bl(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>uo(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>uo(r)).join(",")),e.ue=t}return e.ue}function zl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!tV(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!IS(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!gw(n.startAt,e.startAt)&&gw(n.endAt,e.endAt)}function Wc(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Gc(n,e){return n.filters.filter(t=>t instanceof se&&t.field.isEqual(e))}function _w(n,e,t){let r=ac,i=!0;for(const s of Gc(n,e)){let o=ac,a=!0;switch(s.op){case"<":case"<=":o=Z2(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=ac}fw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];fw({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function yw(n,e,t){let r=Dr,i=!0;for(const s of Gc(n,e)){let o=Dr,a=!0;switch(s.op){case">=":case">":o=eV(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Dr}pw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];pw({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class fr{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function xS(n,e,t,r,i,s,o,a){return new fr(n,e,t,r,i,s,o,a)}function bo(n){return new fr(n)}function vw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function vg(n){return n.collectionGroup!==null}function Qs(n){const e=W(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new fe(Se.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new wl(s,r))}),t.has(Se.keyField().canonicalString())||e.ce.push(new wl(Se.keyField(),r))}return e.ce}function Pt(n){const e=W(n);return e.le||(e.le=uV(e,Qs(n))),e.le}function uV(n,e){if(n.limitType==="F")return Pp(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new wl(i.field,s)});const t=n.endAt?new Zr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Zr(n.startAt.position,n.startAt.inclusive):null;return Pp(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function kp(n,e){const t=n.filters.concat([e]);return new fr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Kc(n,e,t){return new fr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function $l(n,e){return zl(Pt(n),Pt(e))&&n.limitType===e.limitType}function RS(n){return`${Hi(Pt(n))}|lt:${n.limitType}`}function Es(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>TS(i)).join(", ")}]`),Bl(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>uo(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>uo(i)).join(",")),`Target(${r})`}(Pt(n))}; limitType=${n.limitType})`}function ql(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Qs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=mw(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Qs(r),i)||r.endAt&&!function(o,a,u){const c=mw(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Qs(r),i))}(n,e)}function PS(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function kS(n){return(e,t)=>{let r=!1;for(const i of Qs(n)){const s=cV(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function cV(n,e,t){const r=n.field.isKeyField()?q.comparator(e.key,t.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Xr(u,c):K()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class ci{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ss(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return pS(this.inner)}size(){return this.innerSize}}/**
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
 */const dV=new _e(q.comparator);function Ft(){return dV}const bS=new _e(q.comparator);function Ia(...n){let e=bS;for(const t of n)e=e.insert(t.key,t);return e}function CS(n){let e=bS;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Pn(){return Fa()}function NS(){return Fa()}function Fa(){return new ci(n=>n.toString(),(n,e)=>n.isEqual(e))}const hV=new _e(q.comparator),fV=new fe(q.comparator);function ee(...n){let e=fV;for(const t of n)e=e.add(t);return e}const pV=new fe(Z);function wg(){return pV}/**
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
 */function Ig(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gl(e)?"-0":e}}function DS(n){return{integerValue:""+n}}function VS(n,e){return uS(e)?DS(e):Ig(n,e)}/**
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
 */class Md{constructor(){this._=void 0}}function mV(n,e,t){return n instanceof ho?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Od(s)&&(s=_g(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Qi?LS(n,e):n instanceof Yi?MS(n,e):function(i,s){const o=OS(i,s),a=ww(o)+ww(i.Pe);return Ap(o)&&Ap(i.Pe)?DS(a):Ig(i.serializer,a)}(n,e)}function gV(n,e,t){return n instanceof Qi?LS(n,e):n instanceof Yi?MS(n,e):t}function OS(n,e){return n instanceof fo?function(r){return Ap(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ho extends Md{}class Qi extends Md{constructor(e){super(),this.elements=e}}function LS(n,e){const t=FS(e);for(const r of n.elements)t.some(i=>Mn(i,r))||t.push(r);return{arrayValue:{values:t}}}class Yi extends Md{constructor(e){super(),this.elements=e}}function MS(n,e){let t=FS(e);for(const r of n.elements)t=t.filter(i=>!Mn(i,r));return{arrayValue:{values:t}}}class fo extends Md{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ww(n){return Ee(n.integerValue||n.doubleValue)}function FS(n){return vl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Wl{constructor(e,t){this.field=e,this.transform=t}}function _V(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Qi&&i instanceof Qi||r instanceof Yi&&i instanceof Yi?lo(r.elements,i.elements,Mn):r instanceof fo&&i instanceof fo?Mn(r.Pe,i.Pe):r instanceof ho&&i instanceof ho}(n.transform,e.transform)}class yV{constructor(e,t){this.version=e,this.transformResults=t}}class Ae{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ae}static exists(e){return new Ae(void 0,e)}static updateTime(e){return new Ae(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function uc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Fd{}function jS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new No(n.key,Ae.none()):new Co(n.key,n.data,Ae.none());{const t=n.data,r=ot.empty();let i=new fe(Se.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new pr(n.key,r,new Mt(i.toArray()),Ae.none())}}function vV(n,e,t){n instanceof Co?function(i,s,o){const a=i.value.clone(),u=Ew(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof pr?function(i,s,o){if(!uc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Ew(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(US(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ja(n,e,t,r){return n instanceof Co?function(s,o,a,u){if(!uc(s.precondition,o))return a;const c=s.value.clone(),h=Tw(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof pr?function(s,o,a,u){if(!uc(s.precondition,o))return a;const c=Tw(s.fieldTransforms,u,o),h=o.data;return h.setAll(US(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(n,e,t,r):function(s,o,a){return uc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function wV(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=OS(r.transform,i||null);s!=null&&(t===null&&(t=ot.empty()),t.set(r.field,s))}return t||null}function Iw(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&lo(r,i,(s,o)=>_V(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Co extends Fd{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class pr extends Fd{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function US(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ew(n,e,t){const r=new Map;Q(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,gV(o,a,t[i]))}return r}function Tw(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,mV(s,o,e))}return r}class No extends Fd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Eg extends Fd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Tg{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&vV(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ja(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ja(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=NS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const u=jS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ee())}isEqual(e){return this.batchId===e.batchId&&lo(this.mutations,e.mutations,(t,r)=>Iw(t,r))&&lo(this.baseMutations,e.baseMutations,(t,r)=>Iw(t,r))}}class Sg{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Q(e.mutations.length===r.length);let i=function(){return hV}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Sg(e,t,r,i)}}/**
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
 */class Ag{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class IV{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var We,oe;function BS(n){switch(n){default:return K();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function zS(n){if(n===void 0)return ze("GRPC error has no .code"),O.UNKNOWN;switch(n){case We.OK:return O.OK;case We.CANCELLED:return O.CANCELLED;case We.UNKNOWN:return O.UNKNOWN;case We.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case We.INTERNAL:return O.INTERNAL;case We.UNAVAILABLE:return O.UNAVAILABLE;case We.UNAUTHENTICATED:return O.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case We.NOT_FOUND:return O.NOT_FOUND;case We.ALREADY_EXISTS:return O.ALREADY_EXISTS;case We.PERMISSION_DENIED:return O.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case We.ABORTED:return O.ABORTED;case We.OUT_OF_RANGE:return O.OUT_OF_RANGE;case We.UNIMPLEMENTED:return O.UNIMPLEMENTED;case We.DATA_LOSS:return O.DATA_LOSS;default:return K()}}(oe=We||(We={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function $S(){return new TextEncoder}/**
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
 */const EV=new Mi([4294967295,4294967295],0);function Sw(n){const e=$S().encode(n),t=new QT;return t.update(e),new Uint8Array(t.digest())}function Aw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Mi([t,r],0),new Mi([i,s],0)]}class xg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ea(`Invalid padding: ${t}`);if(r<0)throw new Ea(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ea(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ea(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Mi.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(Mi.fromNumber(r)));return i.compare(EV)===1&&(i=new Mi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Sw(e),[r,i]=Aw(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new xg(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const t=Sw(e),[r,i]=Aw(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ea extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Gl{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Kl.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Gl(Y.min(),i,new _e(Z),Ft(),ee())}}class Kl{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Kl(r,t,ee(),ee(),ee())}}/**
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
 */class cc{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class qS{constructor(e,t){this.targetId=e,this.me=t}}class WS{constructor(e,t,r=Me.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class xw{constructor(){this.fe=0,this.ge=Pw(),this.pe=Me.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),t=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:K()}}),new Kl(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Pw()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class TV{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ft(),this.qe=Rw(),this.Qe=new _e(Z)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Wc(s))if(r===0){const o=new q(s.path);this.Ue(t,o,we.newNoDocument(o,Y.min()))}else Q(r===1);else{const o=this.Ye(t);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,c)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=Yr(r).toUint8Array()}catch(u){if(u instanceof mS)return Ln("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new xg(o,i,s)}catch(u){return Ln(u instanceof Ea?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Wc(a.target)){const u=new q(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,we.newNoDocument(u,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Gl(e,t,this.Qe,this.ke,r);return this.ke=Ft(),this.qe=Rw(),this.Qe=new _e(Z),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new xw,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new fe(Z),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new xw),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Rw(){return new _e(q.comparator)}function Pw(){return new _e(q.comparator)}const SV={asc:"ASCENDING",desc:"DESCENDING"},AV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xV={and:"AND",or:"OR"};class RV{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function bp(n,e){return n.useProto3Json||Bl(e)?e:{value:e}}function po(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function GS(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function PV(n,e){return po(n,e.toTimestamp())}function $e(n){return Q(!!n),Y.fromTimestamp(function(t){const r=lr(t);return new xe(r.seconds,r.nanos)}(n))}function Rg(n,e){return Cp(n,e).canonicalString()}function Cp(n,e){const t=function(i){return new ie(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function KS(n){const e=ie.fromString(n);return Q(rA(e)),e}function Il(n,e){return Rg(n.databaseId,e.path)}function Dn(n,e){const t=KS(e);if(t.get(1)!==n.databaseId.projectId)throw new F(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(YS(t))}function HS(n,e){return Rg(n.databaseId,e)}function QS(n){const e=KS(n);return e.length===4?ie.emptyPath():YS(e)}function Np(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function YS(n){return Q(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function kw(n,e,t){return{name:Il(n,e),fields:t.value.mapValue.fields}}function JS(n,e,t){const r=Dn(n,e.name),i=$e(e.updateTime),s=e.createTime?$e(e.createTime):Y.min(),o=new ot({mapValue:{fields:e.fields}}),a=we.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function kV(n,e){return"found"in e?function(r,i){Q(!!i.found),i.found.name,i.found.updateTime;const s=Dn(r,i.found.name),o=$e(i.found.updateTime),a=i.found.createTime?$e(i.found.createTime):Y.min(),u=new ot({mapValue:{fields:i.found.fields}});return we.newFoundDocument(s,o,a,u)}(n,e):"missing"in e?function(r,i){Q(!!i.missing),Q(!!i.readTime);const s=Dn(r,i.missing),o=$e(i.readTime);return we.newNoDocument(s,o)}(n,e):K()}function bV(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Q(h===void 0||typeof h=="string"),Me.fromBase64String(h||"")):(Q(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Me.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?O.UNKNOWN:zS(c.code);return new F(h,c.message||"")}(o);t=new WS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Dn(n,r.document.name),s=$e(r.document.updateTime),o=r.document.createTime?$e(r.document.createTime):Y.min(),a=new ot({mapValue:{fields:r.document.fields}}),u=we.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];t=new cc(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Dn(n,r.document),s=r.readTime?$e(r.readTime):Y.min(),o=we.newNoDocument(i,s),a=r.removedTargetIds||[];t=new cc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Dn(n,r.document),s=r.removedTargetIds||[];t=new cc([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new IV(i,s),a=r.targetId;t=new qS(a,o)}}return t}function El(n,e){let t;if(e instanceof Co)t={update:kw(n,e.key,e.value)};else if(e instanceof No)t={delete:Il(n,e.key)};else if(e instanceof pr)t={update:kw(n,e.key,e.data),updateMask:LV(e.fieldMask)};else{if(!(e instanceof Eg))return K();t={verify:Il(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ho)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Qi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Yi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof fo)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw K()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:PV(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(n,e.precondition)),t}function Dp(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Ae.updateTime($e(s.updateTime)):s.exists!==void 0?Ae.exists(s.exists):Ae.none()}(e.currentDocument):Ae.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)Q(a.setToServerValue==="REQUEST_TIME"),u=new ho;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];u=new Qi(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];u=new Yi(h)}else"increment"in a?u=new fo(o,a.increment):K();const c=Se.fromServerFormat(a.fieldPath);return new Wl(c,u)}(n,i)):[];if(e.update){e.update.name;const i=Dn(n,e.update.name),s=new ot({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new Mt(c.map(h=>Se.fromServerFormat(h)))}(e.updateMask);return new pr(i,s,o,t,r)}return new Co(i,s,t,r)}if(e.delete){const i=Dn(n,e.delete);return new No(i,t)}if(e.verify){const i=Dn(n,e.verify);return new Eg(i,t)}return K()}function CV(n,e){return n&&n.length>0?(Q(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?$e(i.updateTime):$e(s);return o.isEqual(Y.min())&&(o=$e(s)),new yV(o,i.transformResults||[])}(t,e))):[]}function XS(n,e){return{documents:[HS(n,e.path)]}}function ZS(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=HS(n,i);const s=function(c){if(c.length!==0)return nA(de.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:Ts(m.field),direction:DV(m.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=bp(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:t,parent:i}}function eA(n){let e=QS(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Q(r===1);const h=t.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];t.where&&(s=function(f){const m=tA(f);return m instanceof de&&yg(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(m=>function(R){return new wl(Ss(R.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(t.orderBy));let a=null;t.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Bl(m)?null:m}(t.limit));let u=null;t.startAt&&(u=function(f){const m=!!f.before,I=f.values||[];return new Zr(I,m)}(t.startAt));let c=null;return t.endAt&&(c=function(f){const m=!f.before,I=f.values||[];return new Zr(I,m)}(t.endAt)),xS(e,i,o,s,a,"F",u,c)}function NV(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function tA(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ss(t.unaryFilter.field);return se.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ss(t.unaryFilter.field);return se.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ss(t.unaryFilter.field);return se.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ss(t.unaryFilter.field);return se.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(n):n.fieldFilter!==void 0?function(t){return se.create(Ss(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return de.create(t.compositeFilter.filters.map(r=>tA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(t.compositeFilter.op))}(n):K()}function DV(n){return SV[n]}function VV(n){return AV[n]}function OV(n){return xV[n]}function Ts(n){return{fieldPath:n.canonicalString()}}function Ss(n){return Se.fromServerFormat(n.fieldPath)}function nA(n){return n instanceof se?function(t){if(t.op==="=="){if(hw(t.value))return{unaryFilter:{field:Ts(t.field),op:"IS_NAN"}};if(dw(t.value))return{unaryFilter:{field:Ts(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(hw(t.value))return{unaryFilter:{field:Ts(t.field),op:"IS_NOT_NAN"}};if(dw(t.value))return{unaryFilter:{field:Ts(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ts(t.field),op:VV(t.op),value:t.value}}}(n):n instanceof de?function(t){const r=t.getFilters().map(i=>nA(i));return r.length===1?r[0]:{compositeFilter:{op:OV(t.op),filters:r}}}(n):K()}function LV(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function rA(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Xn{constructor(e,t,r,i,s=Y.min(),o=Y.min(),a=Me.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class iA{constructor(e){this.ct=e}}function MV(n,e){let t;if(e.document)t=JS(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=q.fromSegments(e.noDocument.path),i=Xi(e.noDocument.readTime);t=we.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return K();{const r=q.fromSegments(e.unknownDocument.path),i=Xi(e.unknownDocument.version);t=we.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new xe(i[0],i[1]);return Y.fromTimestamp(s)}(e.readTime)),t}function bw(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Hc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Il(s,o.key),fields:o.data.value.mapValue.fields,updateTime:po(s,o.version.toTimestamp()),createTime:po(s,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Ji(e.version)};else{if(!e.isUnknownDocument())return K();r.unknownDocument={path:t.path.toArray(),version:Ji(e.version)}}return r}function Hc(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Ji(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Xi(n){const e=new xe(n.seconds,n.nanoseconds);return Y.fromTimestamp(e)}function Ti(n,e){const t=(e.baseMutations||[]).map(s=>Dp(n.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Dp(n.ct,s)),i=xe.fromMillis(e.localWriteTimeMs);return new Tg(e.batchId,i,t,r)}function Ta(n){const e=Xi(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Xi(n.lastLimboFreeSnapshotVersion):Y.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return Q(s.documents.length===1),Pt(bo(QS(s.documents[0])))}(n.query):function(s){return Pt(eA(s))}(n.query),new Xn(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Me.fromBase64String(n.resumeToken))}function sA(n,e){const t=Ji(e.snapshotVersion),r=Ji(e.lastLimboFreeSnapshotVersion);let i;i=Wc(e.target)?XS(n.ct,e.target):ZS(n.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Hi(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Pg(n){const e=eA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Kc(e,e.limit,"L"):e}function cf(n,e){return new Ag(e.largestBatchId,Dp(n.ct,e.overlayMutation))}function Cw(n,e){const t=e.path.lastSegment();return[n,Rt(e.path.popLast()),t]}function Nw(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Ji(r.readTime),documentKey:Rt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class FV{getBundleMetadata(e,t){return Dw(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Xi(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return Dw(e).put(function(i){return{bundleId:i.id,createTime:Ji($e(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Vw(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:Pg(s.bundledQuery),readTime:Xi(s.readTime)}}(r)})}saveNamedQuery(e,t){return Vw(e).put(function(i){return{name:i.name,readTime:Ji($e(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Dw(n){return Je(n,"bundles")}function Vw(n){return Je(n,"namedQueries")}/**
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
 */class jd{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new jd(e,r)}getOverlay(e,t){return la(e).get(Cw(this.userId,t)).next(r=>r?cf(this.serializer,r):null)}getOverlays(e,t){const r=Pn();return D.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new Ag(t,o);i.push(this.ht(e,a))}),D.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Rt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(la(e).j("collectionPathOverlayIndex",a))}),D.waitFor(s)}getOverlaysForCollection(e,t,r){const i=Pn(),s=Rt(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return la(e).U("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=cf(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=Pn();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return la(e).J({index:"collectionGroupOverlayIndex",range:a},(u,c,h)=>{const f=cf(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):h.done()}).next(()=>s)}ht(e,t){return la(e).put(function(i,s,o){const[a,u,c]=Cw(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:El(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function la(n){return Je(n,"documentOverlays")}/**
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
 */class jV{Pt(e){return Je(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Me.fromUint8Array(r):Me.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Si{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(Ee(e.integerValue));else if("doubleValue"in e){const r=Ee(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),gl(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=lr(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Yr(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?gS(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Ld(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):K()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const i of Object.keys(r))this.Vt(i,t),this.Tt(r[i],t)}wt(e,t){var r,i;const s=e.fields||{};this.dt(t,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(Ee(a)),this.Vt(o,t),this.Tt(s[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const i of r)this.Tt(i,t)}yt(e,t){this.dt(t,37),q.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}Si.vt=new Si;function UV(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Ow(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=UV(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class BV{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const t=this.qt(e),r=Ow(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),r=Ow(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class zV{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class $V{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class ua{constructor(){this.jt=new BV,this.Ht=new zV(this.jt),this.Jt=new $V(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class Ai{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ai(this.indexId,this.documentKey,this.arrayValue,r)}}function Ir(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Lw(n.arrayValue,e.arrayValue),t!==0?t:(t=Lw(n.directionalValue,e.directionalValue),t!==0?t:q.comparator(n.documentKey,e.documentKey)))}function Lw(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class Mw{constructor(e){this.Xt=new fe((t,r)=>Se.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(Q(e.collectionGroup===this.collectionId),this.nn)return!1;const t=Ep(e);if(t!==void 0&&!this.sn(t))return!1;const r=Ii(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const u=r[s];if(!this.on(a,u)||!this._n(this.en[o++],u))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new fe(Se.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new sc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new sc(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new sc(r.field,r.dir==="asc"?0:1)));return new qc(qc.UNKNOWN_ID,this.collectionId,t,ml.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function oA(n){var e,t;if(Q(n instanceof se||n instanceof de),n instanceof se){if(n instanceof AS){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>se.create(n.field,"==",s)))||[];return de.create(i,"or")}return n}const r=n.filters.map(i=>oA(i));return de.create(r,n.op)}function qV(n){if(n.getFilters().length===0)return[];const e=Lp(oA(n));return Q(aA(e)),Vp(e)||Op(e)?[e]:e.getFilters()}function Vp(n){return n instanceof se}function Op(n){return n instanceof de&&yg(n)}function aA(n){return Vp(n)||Op(n)||function(t){if(t instanceof de&&xp(t)){for(const r of t.getFilters())if(!Vp(r)&&!Op(r))return!1;return!0}return!1}(n)}function Lp(n){if(Q(n instanceof se||n instanceof de),n instanceof se)return n;if(n.filters.length===1)return Lp(n.filters[0]);const e=n.filters.map(r=>Lp(r));let t=de.create(e,n.op);return t=Qc(t),aA(t)?t:(Q(t instanceof de),Q(co(t)),Q(t.filters.length>1),t.filters.reduce((r,i)=>kg(r,i)))}function kg(n,e){let t;return Q(n instanceof se||n instanceof de),Q(e instanceof se||e instanceof de),t=n instanceof se?e instanceof se?function(i,s){return de.create([i,s],"and")}(n,e):Fw(n,e):e instanceof se?Fw(e,n):function(i,s){if(Q(i.filters.length>0&&s.filters.length>0),co(i)&&co(s))return ES(i,s.getFilters());const o=xp(i)?i:s,a=xp(i)?s:i,u=o.filters.map(c=>kg(c,a));return de.create(u,"or")}(n,e),Qc(t)}function Fw(n,e){if(co(e))return ES(e,n.getFilters());{const t=e.filters.map(r=>kg(n,r));return de.create(t,"or")}}function Qc(n){if(Q(n instanceof se||n instanceof de),n instanceof se)return n;const e=n.getFilters();if(e.length===1)return Qc(e[0]);if(wS(n))return n;const t=e.map(i=>Qc(i)),r=[];return t.forEach(i=>{i instanceof se?r.push(i):i instanceof de&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:de.create(r,n.op)}/**
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
 */class WV{constructor(){this.un=new bg}addToCollectionParentIndex(e,t){return this.un.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Qt.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Qt.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class bg{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new fe(ie.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new fe(ie.comparator)).toArray()}}/**
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
 */const Fu=new Uint8Array(0);class GV{constructor(e,t){this.databaseId=t,this.cn=new bg,this.ln=new ci(r=>Hi(r),(r,i)=>zl(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const s={collectionId:r,parent:Rt(i)};return jw(e).put(s)}return D.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[rS(t),""],!1,!0);return jw(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Rn(o.parent))}return r})}addFieldIndex(e,t){const r=ca(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=ys(e);return s.next(a=>{o.put(Nw(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=ca(e),i=ys(e),s=_s(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=ca(e),r=_s(e),i=ys(e);return t.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,t){return D.forEach(this.hn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Mw(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=_s(e);let i=!0;const s=new Map;return D.forEach(this.hn(t),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ee();const a=[];return D.forEach(s,(u,c)=>{U("IndexedDbIndexManager",`Using index ${function(v){return`id=${v.indexId}|cg=${v.collectionGroup}|f=${v.fields.map(b=>`${b.fieldPath}:${b.kind}`).join(",")}`}(u)} to execute ${Hi(t)}`);const h=function(v,b){const M=Ep(b);if(M===void 0)return null;for(const j of Gc(v,M.fieldPath))switch(j.op){case"array-contains-any":return j.value.arrayValue.values||[];case"array-contains":return[j.value]}return null}(c,u),f=function(v,b){const M=new Map;for(const j of Ii(b))for(const T of Gc(v,j.fieldPath))switch(T.op){case"==":case"in":M.set(j.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return M.set(j.fieldPath.canonicalString(),T.value),Array.from(M.values())}return null}(c,u),m=function(v,b){const M=[];let j=!0;for(const T of Ii(b)){const y=T.kind===0?_w(v,T.fieldPath,v.startAt):yw(v,T.fieldPath,v.startAt);M.push(y.value),j&&(j=y.inclusive)}return new Zr(M,j)}(c,u),I=function(v,b){const M=[];let j=!0;for(const T of Ii(b)){const y=T.kind===0?yw(v,T.fieldPath,v.endAt):_w(v,T.fieldPath,v.endAt);M.push(y.value),j&&(j=y.inclusive)}return new Zr(M,j)}(c,u),R=this.In(u,c,m),k=this.In(u,c,I),V=this.Tn(u,c,f),S=this.En(u.indexId,h,R,m.inclusive,k,I.inclusive,V);return D.forEach(S,w=>r.G(w,t.limit).next(v=>{v.forEach(b=>{const M=q.fromSegments(b.documentKey);o.has(M)||(o=o.add(M),a.push(M))})}))}).next(()=>a)}return D.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=qV(de.create(e.filters,"and")).map(r=>Pp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,i,s,o,a){const u=(t!=null?t.length:1)*Math.max(r.length,s.length),c=u/(t!=null?t.length:1),h=[];for(let f=0;f<u;++f){const m=t?this.dn(t[f/c]):Fu,I=this.An(e,m,r[f%c],i),R=this.Rn(e,m,s[f%c],o),k=a.map(V=>this.An(e,m,V,!0));h.push(...this.createRange(I,R,k))}return h}An(e,t,r,i){const s=new Ai(e,q.empty(),t,r);return i?s:s.Zt()}Rn(e,t,r,i){const s=new Ai(e,q.empty(),t,r);return i?s.Zt():s}Pn(e,t){const r=new Mw(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.hn(t);return D.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new fe(Se.comparator),h=!1;for(const f of u.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?h=!0:c=c.add(m.field));for(const f of u.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}Vn(e,t){const r=new ua;for(const i of Ii(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);Si.vt.It(s,o)}return r.zt()}dn(e){const t=new ua;return Si.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new ua;return Si.vt.It(Ki(this.databaseId,t),r.Yt(function(s){const o=Ii(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let i=[];i.push(new ua);let s=0;for(const o of Ii(e)){const a=r[s++];for(const u of i)if(this.fn(t,o.fieldPath)&&vl(a))i=this.gn(i,o,a);else{const c=u.Yt(o.kind);Si.vt.It(a,c)}}return this.pn(i)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new ua;u.seed(a.zt()),Si.vt.It(o,u.Yt(t.kind)),s.push(u)}return s}fn(e,t){return!!e.filters.find(r=>r instanceof se&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=ca(e),i=ys(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(s=>{const o=[];return D.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(h,f){const m=f?new ml(f.sequenceNumber,new Qt(Xi(f.readTime),new q(Rn(f.documentKey)),f.largestBatchId)):ml.empty(),I=h.fields.map(([R,k])=>new sc(Se.fromServerFormat(R),k));return new qc(h.indexId,h.collectionGroup,I,m)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:Z(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=ca(e),s=ys(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>D.forEach(a,u=>s.put(Nw(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return D.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?D.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),D.forEach(a,u=>this.wn(e,i,u).next(c=>{const h=this.Sn(s,u);return c.isEqual(h)?D.resolve():this.bn(e,s,u,c,h)}))))})}Dn(e,t,r,i){return _s(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,i){return _s(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const i=_s(e);let s=new fe(Ir);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,a)=>{s=s.add(new Ai(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,t){let r=new fe(Ir);const i=this.Vn(t,e);if(i==null)return r;const s=Ep(t);if(s!=null){const o=e.data.field(s.fieldPath);if(vl(o))for(const a of o.arrayValue.values||[])r=r.add(new Ai(t.indexId,e.key,this.dn(a),i))}else r=r.add(new Ai(t.indexId,e.key,Fu,i));return r}bn(e,t,r,i,s){U("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(u,c,h,f,m){const I=u.getIterator(),R=c.getIterator();let k=gs(I),V=gs(R);for(;k||V;){let S=!1,w=!1;if(k&&V){const v=h(k,V);v<0?w=!0:v>0&&(S=!0)}else k!=null?w=!0:S=!0;S?(f(V),V=gs(R)):w?(m(k),k=gs(I)):(k=gs(I),V=gs(R))}}(i,s,Ir,a=>{o.push(this.Dn(e,t,r,a))},a=>{o.push(this.vn(e,t,r,a))}),D.waitFor(o)}yn(e){let t=1;return ys(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Ir(o,a)).filter((o,a,u)=>!a||Ir(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Ir(o,e),u=Ir(o,t);if(a===0)i[0]=e.Zt();else if(a>0&&u<0)i.push(o),i.push(o.Zt());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Fu,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Fu,[]];s.push(IDBKeyRange.bound(a,u))}return s}Cn(e,t){return Ir(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Uw)}getMinOffset(e,t){return D.mapArray(this.hn(t),r=>this.Pn(e,r).next(i=>i||K())).next(Uw)}}function jw(n){return Je(n,"collectionParents")}function _s(n){return Je(n,"indexEntries")}function ca(n){return Je(n,"indexConfiguration")}function ys(n){return Je(n,"indexState")}function Uw(n){Q(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;pg(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Qt(e.readTime,e.documentKey,t)}/**
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
 */const Bw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Dt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Dt(e,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function lA(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const u=r.J({range:o},(h,f,m)=>(a++,m.delete()));s.push(u.next(()=>{Q(a===1)}));const c=[];for(const h of t.mutations){const f=cS(e,h.key.path,t.batchId);s.push(i.delete(f)),c.push(h.key)}return D.waitFor(s).next(()=>c)}function Yc(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw K();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Dt.DEFAULT_COLLECTION_PERCENTILE=10,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Dt.DEFAULT=new Dt(41943040,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Dt.DISABLED=new Dt(-1,0,0);class Ud{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,t,r,i){Q(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Ud(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Er(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=As(e),o=Er(e);return o.add({}).next(a=>{Q(typeof a=="number");const u=new Tg(a,t,r,i),c=function(I,R,k){const V=k.baseMutations.map(w=>El(I.ct,w)),S=k.mutations.map(w=>El(I.ct,w));return{userId:R,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:V,mutations:S}}(this.serializer,this.userId,u),h=[];let f=new fe((m,I)=>Z(m.canonicalString(),I.canonicalString()));for(const m of i){const I=cS(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),h.push(o.put(c)),h.push(s.put(I,N2))}return f.forEach(m=>{h.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Fn[a]=u.keys()}),D.waitFor(h).next(()=>u)})}lookupMutationBatch(e,t){return Er(e).get(t).next(r=>r?(Q(r.userId===this.userId),Ti(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?D.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Er(e).J({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(Q(a.batchId>=r),s=Ti(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Er(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Er(e).U("userMutationsIndex",t).next(r=>r.map(i=>Ti(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=oc(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return As(e).J({range:i},(o,a,u)=>{const[c,h,f]=o,m=Rn(h);if(c===this.userId&&t.path.isEqual(m))return Er(e).get(f).next(I=>{if(!I)throw K();Q(I.userId===this.userId),s.push(Ti(this.serializer,I))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new fe(Z);const i=[];return t.forEach(s=>{const o=oc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=As(e).J({range:a},(c,h,f)=>{const[m,I,R]=c,k=Rn(I);m===this.userId&&s.path.isEqual(k)?r=r.add(R):f.done()});i.push(u)}),D.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=oc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new fe(Z);return As(e).J({range:o},(u,c,h)=>{const[f,m,I]=u,R=Rn(m);f===this.userId&&r.isPrefixOf(R)?R.length===i&&(a=a.add(I)):h.done()}).next(()=>this.xn(e,a))}xn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(Er(e).get(s).next(o=>{if(o===null)throw K();Q(o.userId===this.userId),r.push(Ti(this.serializer,o))}))}),D.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return lA(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),D.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return D.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return As(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=Rn(s[1]);i.push(u)}else a.done()}).next(()=>{Q(i.length===0)})})}containsKey(e,t){return uA(e,this.userId,t)}Nn(e){return cA(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function uA(n,e,t){const r=oc(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return As(n).J({range:s,H:!0},(a,u,c)=>{const[h,f,m]=a;h===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function Er(n){return Je(n,"mutations")}function As(n){return Je(n,"documentMutations")}function cA(n){return Je(n,"mutationQueues")}/**
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
 */class Zi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Zi(0)}static kn(){return new Zi(-1)}}/**
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
 */class KV{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new Zi(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>Y.fromTimestamp(new xe(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>vs(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(Q(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return vs(e).J((o,a)=>{const u=Ta(a);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>D.waitFor(s)).next(()=>i)}forEachTarget(e,t){return vs(e).J((r,i)=>{const s=Ta(i);t(s)})}qn(e){return zw(e).get("targetGlobalKey").next(t=>(Q(t!==null),t))}Qn(e,t){return zw(e).put("targetGlobalKey",t)}Kn(e,t){return vs(e).put(sA(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Hi(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return vs(e).J({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const c=Ta(a);zl(t,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=Pr(e);return t.forEach(o=>{const a=Rt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),D.waitFor(i)}removeMatchingKeys(e,t,r){const i=Pr(e);return D.forEach(t,s=>{const o=Rt(s.path);return D.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=Pr(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Pr(e);let s=ee();return i.J({range:r,H:!0},(o,a,u)=>{const c=Rn(o[1]),h=new q(c);s=s.add(h)}).next(()=>s)}containsKey(e,t){const r=Rt(t.path),i=IDBKeyRange.bound([r],[rS(r)],!1,!0);let s=0;return Pr(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,t){return vs(e).get(t).next(r=>r?Ta(r):null)}}function vs(n){return Je(n,"targets")}function zw(n){return Je(n,"targetGlobal")}function Pr(n){return Je(n,"targetDocuments")}/**
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
 */function $w([n,e],[t,r]){const i=Z(n,t);return i===0?Z(e,r):i}class HV{constructor(e){this.Un=e,this.buffer=new fe($w),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();$w(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class QV{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){U("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ui(t)?U("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await li(t)}await this.Hn(3e5)})}}class YV{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return D.resolve(Lt.oe);const r=new HV(t);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(Bw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bw):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,i,s,o,a,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,t))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Is()<=ne.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-h}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function JV(n,e){return new YV(n,e)}/**
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
 */class XV{constructor(e,t){this.db=e,this.garbageCollector=JV(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,i)=>t(i))}addReference(e,t,r){return ju(e,r)}removeReference(e,t,r){return ju(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return ju(e,t)}nr(e,t){return function(i,s){let o=!1;return cA(i).Y(a=>uA(i,a,s).next(u=>(u&&(o=!0),D.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=t){const u=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Y.min()),Pr(e).delete(function(f){return[0,Rt(f.path)]}(o))))});i.push(u)}}).next(()=>D.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return ju(e,t)}tr(e,t){const r=Pr(e);let i,s=Lt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(s!==Lt.oe&&t(new q(Rn(i)),s),s=c,i=u):s=Lt.oe}).next(()=>{s!==Lt.oe&&t(new q(Rn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ju(n,e){return Pr(n).put(function(r,i){return{targetId:0,path:Rt(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
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
 */class dA{constructor(){this.changes=new ci(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,we.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ZV{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return _i(e).put(r)}removeEntry(e,t,r){return _i(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Hc(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=we.newInvalidDocument(t);return _i(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(da(t))},(i,s)=>{r=this.ir(t,s)}).next(()=>r)}sr(e,t){let r={size:0,document:we.newInvalidDocument(t)};return _i(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(da(t))},(i,s)=>{r={document:this.ir(t,s),size:Yc(s)}}).next(()=>r)}getEntries(e,t){let r=Ft();return this._r(e,t,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,t){let r=Ft(),i=new _e(q.comparator);return this._r(e,t,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,Yc(o))}).next(()=>({documents:r,ur:i}))}_r(e,t,r){if(t.isEmpty())return D.resolve();let i=new fe(Gw);t.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(da(i.first()),da(i.last())),o=i.getIterator();let a=o.getNext();return _i(e).J({index:"documentKeyIndex",range:s},(u,c,h)=>{const f=q.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&Gw(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?h.$(da(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),Hc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return _i(e).U(IDBKeyRange.bound(a,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let h=Ft();for(const f of c){const m=this.ir(q.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(ql(t,m)||i.has(m.key))&&(h=h.insert(m.key,m))}return h})}getAllFromCollectionGroup(e,t,r,i){let s=Ft();const o=Ww(t,r),a=Ww(t,Qt.max());return _i(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,h)=>{const f=this.ir(q.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new eO(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return qw(e).get("remoteDocumentGlobalKey").next(t=>(Q(!!t),t))}rr(e,t){return qw(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=MV(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Y.min())))return r}return we.newInvalidDocument(e)}}function hA(n){return new ZV(n)}class eO extends dA{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new ci(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new fe((s,o)=>Z(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(t.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=bw(this.cr.serializer,o);i=i.add(s.path.popLast());const c=Yc(u);r+=c-a.size,t.push(this.cr.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=bw(this.cr.serializer,o.convertToNoDocument(Y.min()));t.push(this.cr.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.cr.updateMetadata(e,r)),D.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function qw(n){return Je(n,"remoteDocumentGlobal")}function _i(n){return Je(n,"remoteDocumentsV14")}function da(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Ww(n,e){const t=e.documentKey.path.toArray();return[n,Hc(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Gw(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=Z(t[s],r[s]),i)return i;return i=Z(t.length,r.length),i||(i=Z(t[t.length-2],r[r.length-2]),i||Z(t[t.length-1],r[r.length-1]))}/**
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
 */class tO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class fA{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&ja(r.mutation,i,Mt.empty(),xe.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ee()){const i=Pn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Ia();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Pn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ee()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Ft();const o=Fa(),a=function(){return Fa()}();return t.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof pr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),ja(h.mutation,c,h.mutation.getFieldMask(),xe.now())):o.set(c.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),t.forEach((c,h)=>{var f;return a.set(c,new tO(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Fa();let i=new _e((o,a)=>o-a),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let h=r.get(u)||Mt.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||ee()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=NS();h.forEach(m=>{if(!s.has(m)){const I=jS(t.get(m),r.get(m));I!==null&&f.set(m,I),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):vg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):D.resolve(Pn());let a=-1,u=s;return o.next(c=>D.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?D.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ee())).next(h=>({batchId:a,changes:CS(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(r=>{let i=Ia();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=Ia();return this.indexManager.getCollectionParents(e,s).next(a=>D.forEach(a,u=>{const c=function(f,m){return new fr(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,we.newInvalidDocument(h)))});let a=Ia();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&ja(h.mutation,c,Mt.empty(),xe.now()),ql(t,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class nO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return D.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:$e(i.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:Pg(i.bundledQuery),readTime:$e(i.readTime)}}(t)),D.resolve()}}/**
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
 */class rO{constructor(){this.overlays=new _e(q.comparator),this.Ir=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Pn();return D.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const i=Pn(),s=t.length+1,o=new q(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return D.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new _e((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Pn(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Pn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return D.resolve(a)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ag(t,r));let s=this.Ir.get(t);s===void 0&&(s=ee(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
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
 */class iO{constructor(){this.sessionToken=Me.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
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
 */class Cg{constructor(){this.Tr=new fe(Xe.Er),this.dr=new fe(Xe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Xe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Xe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new q(new ie([])),r=new Xe(t,e),i=new Xe(t,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new q(new ie([])),r=new Xe(t,e),i=new Xe(t,e+1);let s=ee();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Xe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return q.comparator(e.key,t.key)||Z(e.wr,t.wr)}static Ar(e,t){return Z(e.wr,t.wr)||q.comparator(e.key,t.key)}}/**
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
 */class sO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new fe(Xe.Er)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Tg(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Xe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,t){return D.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Xe(t,0),i=new Xe(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new fe(Z);return t.forEach(i=>{const s=new Xe(i,0),o=new Xe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Xe(new q(s),0);let a=new fe(Z);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),D.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Q(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return D.forEach(t.mutations,i=>{const s=new Xe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Xe(t,0),i=this.br.firstAfterOrEqual(r);return D.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class oO{constructor(e){this.Mr=e,this.docs=function(){return new _e(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():we.newInvalidDocument(t))}getEntries(e,t){let r=Ft();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():we.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Ft();const o=t.path,a=new q(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||pg(sS(h),r)<=0||(i.has(h.key)||ql(t,h))&&(s=s.insert(h.key,h.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,t,r,i){K()}Or(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new aO(this)}getSize(e){return D.resolve(this.size)}}class aO extends dA{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class lO{constructor(e){this.persistence=e,this.Nr=new ci(t=>Hi(t),zl),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Cg,this.targetCount=0,this.kr=Zi.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),D.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Zi(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Kn(t),D.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.Br.containsKey(t))}}/**
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
 */class pA{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Lt(0),this.Kr=!1,this.Kr=!0,this.$r=new iO,this.referenceDelegate=e(this),this.Ur=new lO(this),this.indexManager=new WV,this.remoteDocumentCache=function(i){return new oO(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new iA(t),this.Gr=new nO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rO,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new sO(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){U("MemoryPersistence","Starting transaction:",e);const i=new uO(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return D.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class uO extends aS{constructor(e){super(),this.currentSequenceNumber=e}}class Bd{constructor(e){this.persistence=e,this.Jr=new Cg,this.Yr=null}static Zr(e){return new Bd(e)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),D.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return D.or([()=>D.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class cO{constructor(e){this.serializer=e}O(e,t,r,i){const s=new Vd("createOrUpgrade",t);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ow,{unique:!0}),u.createObjectStore("documentMutations")}(e),Kw(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=D.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),Kw(e)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Y.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",h)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").U().next(h=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ow,{unique:!0});const f=c.store("mutations"),m=h.map(I=>f.put(I));return D.waitFor(m)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:q2});c.createIndex("collectionPathOverlayIndex",W2,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",G2,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:D2});c.createIndex("documentKeyIndex",V2),c.createIndex("collectionGroupIndex",O2)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:U2}).createIndex("sequenceNumberIndex",B2,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:z2}).createIndex("documentKeyIndex",$2,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,i)=>{t+=Yc(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(i=>D.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>D.forEach(a,u=>{Q(u.userId===s.userId);const c=Ti(this.serializer,u);return lA(e,s.userId,c).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const u=new ie(o),c=function(f){return[0,Rt(f)]}(u);s.push(t.get(c).next(h=>h?D.resolve():(f=>t.put({targetId:0,path:Rt(f),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>D.waitFor(s))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:j2});const r=t.store("collectionParents"),i=new bg,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:Rt(u)})}};return t.store("remoteDocuments").J({H:!0},(o,a)=>{const u=new ie(o);return s(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,a,u],c)=>{const h=Rn(a);return s(h.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,i)=>{const s=Ta(i),o=sA(this.serializer,s);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=t.store("remoteDocumentsV14"),u=function(f){return f.document?new q(ie.fromString(f.document.name).popFirst(5)):f.noDocument?q.fromSegments(f.noDocument.path):f.unknownDocument?q.fromSegments(f.unknownDocument.path):K()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>D.waitFor(i))}ai(e,t){const r=t.store("mutations"),i=hA(this.serializer),s=new pA(Bd.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(u=>{var c;let h=(c=a.get(u.userId))!==null&&c!==void 0?c:ee();Ti(this.serializer,u).keys().forEach(f=>h=h.add(f)),a.set(u.userId,h)}),D.forEach(a,(u,c)=>{const h=new et(c),f=jd.lt(this.serializer,h),m=s.getIndexManager(h),I=Ud.lt(h,this.serializer,m,s.referenceDelegate);return new fA(i,I,f,m).recalculateAndSaveOverlaysForDocumentKeys(new Tp(t,Lt.oe),u).next()})})}}function Kw(n){n.createObjectStore("targetDocuments",{keyPath:M2}).createIndex("documentTargetsIndex",F2,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",L2,{unique:!0}),n.createObjectStore("targetGlobal")}const df="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ng{constructor(e,t,r,i,s,o,a,u,c,h,f=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=h,this.hi=f,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=m=>Promise.resolve(),!Ng.D())throw new F(O.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new XV(this,i),this.Ai=t+"main",this.serializer=new iA(u),this.Ri=new Nn(this.Ai,this.hi,new cO(this.serializer)),this.$r=new jV,this.Ur=new KV(this.referenceDelegate,this.serializer),this.remoteDocumentCache=hA(this.serializer),this.Gr=new FV,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,h===!1&&ze("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new F(O.FAILED_PRECONDITION,df);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Lt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Uu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(ui(e))return U("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return ha(e).get("owner").next(t=>D.resolve(this.vi(t)))}Ci(e){return Uu(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Je(t,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return D.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?D.resolve(!0):ha(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new F(O.FAILED_PRECONDITION,df);return!1}}return!(!this.networkEnabled||!this.inForeground)||Uu(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&U("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Tp(e,Lt.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Uu(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Ud.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new GV(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return jd.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){U("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===17?Q2:u===16?H2:u===15?gg:u===14?fS:u===13?hS:u===12?K2:u===11?dS:void K()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new Tp(a,this.Qr?this.Qr.next():Lt.oe),t==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw ze(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new F(O.FAILED_PRECONDITION,oS);return r(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return ha(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new F(O.FAILED_PRECONDITION,df)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ha(e).put("owner",t)}static D(){return Nn.D()}bi(e){const t=ha(e);return t.get("owner").next(r=>this.vi(r)?(U("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):D.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(ze(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;ME()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return U("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ze("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){ze("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ha(n){return Je(n,"owner")}function Uu(n){return Je(n,"clientMetadata")}function Dg(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Vg{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=ee(),i=ee();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Vg(e,t.fromCache,r,i)}}/**
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
 */class dO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class mA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ME()?8:lS(Ne())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new dO;return this.Xi(e,t,o).next(a=>{if(s.result=a,this.zi)return this.es(e,t,o,a.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(Is()<=ne.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Es(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),D.resolve()):(Is()<=ne.DEBUG&&U("QueryEngine","Query:",Es(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Is()<=ne.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Es(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pt(t))):D.resolve())}Yi(e,t){if(vw(t))return D.resolve(null);let r=Pt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Kc(t,null,"F"),r=Pt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(t,a);return this.ns(t,c,o,u.readTime)?this.Yi(e,Kc(t,null,"F")):this.rs(e,c,t,u)}))})))}Zi(e,t,r,i){return vw(t)||i.isEqual(Y.min())?D.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(t,s);return this.ns(t,o,r,i)?D.resolve(null):(Is()<=ne.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Es(t)),this.rs(e,o,t,iS(i,-1)).next(a=>a))})}ts(e,t){let r=new fe(kS(e));return t.forEach((i,s)=>{ql(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return Is()<=ne.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Es(t)),this.Ji.getDocumentsMatchingQuery(e,t,Qt.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class hO{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new _e(Z),this._s=new ci(s=>Hi(s),zl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fA(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function gA(n,e,t,r){return new hO(n,e,t,r)}async function _A(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ee();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return t.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function fO(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,m=f.keys();let I=D.resolve();return m.forEach(R=>{I=I.next(()=>h.getEntry(u,R)).next(k=>{const V=c.docVersions.get(R);Q(V!==null),k.version.compareTo(V)<0&&(f.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),h.addEntry(k)))})}),I.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ee();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function yA(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function pO(n,e){const t=W(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(t.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>t.Ur.addMatchingKeys(s,h.addedDocuments,f)));let I=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?I=I.withResumeToken(Me.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):h.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(h.resumeToken,r)),i=i.insert(f,I),function(k,V,S){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(m,I,h)&&a.push(t.Ur.updateTargetData(s,I))});let u=Ft(),c=ee();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(vA(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(Y.min())){const h=t.Ur.getLastRemoteSnapshotVersion(s).next(f=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return D.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(t.os=i,s))}function vA(n,e,t){let r=ee(),i=ee();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Ft();return t.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function mO(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function mo(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):t.Ur.allocateTargetId(r).next(o=>(i=new Xn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function go(n,e,t){const r=W(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ui(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Jc(n,e,t){const r=W(n);let i=Y.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=W(u),m=f._s.get(h);return m!==void 0?D.resolve(f.os.get(m)):f.Ur.getTargetData(c,h)}(r,o,Pt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?i:Y.min(),t?s:ee())).next(a=>(EA(r,PS(e),a),{documents:a,Ts:s})))}function wA(n,e){const t=W(n),r=W(t.Ur),i=t.os.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function IA(n,e){const t=W(n),r=t.us.get(e)||Y.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.cs.getAllFromCollectionGroup(i,e,iS(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(EA(t,e,i),i))}function EA(n,e,t){let r=n.us.get(e)||Y.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}async function gO(n,e,t,r){const i=W(n);let s=ee(),o=Ft();for(const c of t){const h=e.Es(c.metadata.name);c.document&&(s=s.add(h));const f=e.ds(c);f.setReadTime(e.As(c.metadata.readTime)),o=o.insert(h,f)}const a=i.cs.newChangeBuffer({trackRemovals:!0}),u=await mo(i,function(h){return Pt(bo(ie.fromString(`__bundle__/docs/${h}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>vA(c,a,o).next(h=>(a.apply(c),h)).next(h=>i.Ur.removeMatchingKeysForTargetId(c,u.targetId).next(()=>i.Ur.addMatchingKeys(c,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,h.Ps,h.Is)).next(()=>h.Ps)))}async function _O(n,e,t=ee()){const r=await mo(n,Pt(Pg(e.bundledQuery))),i=W(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=$e(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Gr.saveNamedQuery(s,e);const a=r.withResumeToken(Me.EMPTY_BYTE_STRING,o);return i.os=i.os.insert(a.targetId,a),i.Ur.updateTargetData(s,a).next(()=>i.Ur.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ur.addMatchingKeys(s,t,r.targetId)).next(()=>i.Gr.saveNamedQuery(s,e))})}function Hw(n,e){return`firestore_clients_${n}_${e}`}function Qw(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function hf(n,e){return`firestore_targets_${n}_${e}`}class Xc{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Rs(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new F(i.error.code,i.error.message))),o?new Xc(e,t,i.state,s):(ze("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ua{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new F(r.error.code,r.error.message))),s?new Ua(e,r.state,i):(ze("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Zc{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=wg();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=uS(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Zc(e,s):(ze("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Og{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Og(t.clientId,t.onlineState):(ze("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Mp{constructor(){this.activeTargetIds=wg()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ff{constructor(e,t,r,i,s){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new _e(Z),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=Hw(this.persistenceKey,this.ps),this.vs=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Mp),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Os=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const i=this.getItem(Hw(this.persistenceKey,r));if(i){const s=Zc.Rs(r,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(hf(this.persistenceKey,e));if(i){const s=Ua.Rs(e,i);s&&(r=s.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(hf(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Qs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return U("SharedClientState","READ",e,t),t}setItem(e,t){U("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){U("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(U("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void ze("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(s){let o=Lt.oe;if(s!=null)try{const a=JSON.parse(s);Q(typeof a=="number"),o=a}catch(a){ze("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==Lt.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const i=new Xc(this.currentUser,e,t,r),s=Qw(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const t=Qw(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const i=hf(this.persistenceKey,e),s=new Ua(e,t,r);this.setItem(i,s.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return Zc.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Xc.Rs(new et(s),i,t)}Ys(e,t){const r=this.Ms.exec(e),i=Number(r[1]);return Ua.Rs(i,t)}Ls(e){return Og.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);U("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.io(o,a).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=wg();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class TA{constructor(){this.so=new Mp,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Mp,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yO{_o(e){}shutdown(){}}/**
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
 */class Yw{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Bu=null;function pf(){return Bu===null?Bu=function(){return 268435456+Math.round(2147483648*Math.random())}():Bu++,"0x"+Bu.toString(16)}/**
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
 */const vO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class wO{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const gt="WebChannelConnection";class IO extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,o){const a=pf(),u=this.xo(t,r.toUriEncodedString());U("RestConnection",`Sending RPC '${t}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(t,u,c,i).then(h=>(U("RestConnection",`Received RPC '${t}' ${a}: `,h),h),h=>{throw Ln("RestConnection",`RPC '${t}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(t,r,i,s,o,a){return this.Mo(t,r,i,s,o)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ko}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}xo(t,r){const i=vO[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=pf();return new Promise((o,a)=>{const u=new YT;u.setWithCredentials(!0),u.listenOnce(JT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ic.NO_ERROR:const h=u.getResponseJson();U(gt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case ic.TIMEOUT:U(gt,`RPC '${e}' ${s} timed out`),a(new F(O.DEADLINE_EXCEEDED,"Request time out"));break;case ic.HTTP_ERROR:const f=u.getStatus();if(U(gt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m==null?void 0:m.error;if(I&&I.status&&I.message){const R=function(V){const S=V.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(S)>=0?S:O.UNKNOWN}(I.status);a(new F(R,I.message))}else a(new F(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new F(O.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{U(gt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);U(gt,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",c,r,15)})}Bo(e,t,r){const i=pf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=eS(),a=ZT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const h=s.join("");U(gt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let m=!1,I=!1;const R=new wO({Io:V=>{I?U(gt,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(m||(U(gt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),U(gt,`RPC '${e}' stream ${i} sending:`,V),f.send(V))},To:()=>f.close()}),k=(V,S,w)=>{V.listen(S,v=>{try{w(v)}catch(b){setTimeout(()=>{throw b},0)}})};return k(f,wa.EventType.OPEN,()=>{I||(U(gt,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),k(f,wa.EventType.CLOSE,()=>{I||(I=!0,U(gt,`RPC '${e}' stream ${i} transport closed`),R.So())}),k(f,wa.EventType.ERROR,V=>{I||(I=!0,Ln(gt,`RPC '${e}' stream ${i} transport errored:`,V),R.So(new F(O.UNAVAILABLE,"The operation could not be completed")))}),k(f,wa.EventType.MESSAGE,V=>{var S;if(!I){const w=V.data[0];Q(!!w);const v=w,b=v.error||((S=v[0])===null||S===void 0?void 0:S.error);if(b){U(gt,`RPC '${e}' stream ${i} received error:`,b);const M=b.status;let j=function(E){const A=We[E];if(A!==void 0)return zS(A)}(M),T=b.message;j===void 0&&(j=O.INTERNAL,T="Unknown error status: "+M+" with message "+b.message),I=!0,R.So(new F(j,T)),f.close()}else U(gt,`RPC '${e}' stream ${i} received:`,w),R.bo(w)}}),k(a,XT.STAT_EVENT,V=>{V.stat===Ip.PROXY?U(gt,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===Ip.NOPROXY&&U(gt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}/**
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
 */function SA(){return typeof window<"u"?window:null}function dc(){return typeof document<"u"?document:null}/**
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
 */function Hl(n){return new RV(n,!0)}/**
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
 */class Lg{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class AA{constructor(e,t,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Lg(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(ze(t.toString()),ze("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new F(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EO extends AA{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=bV(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?$e(o.readTime):Y.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Np(this.serializer),t.addTarget=function(s,o){let a;const u=o.target;if(a=Wc(u)?{documents:XS(s,u)}:{query:ZS(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=GS(s,o.resumeToken);const c=bp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=po(s,o.snapshotVersion.toTimestamp());const c=bp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=NV(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Np(this.serializer),t.removeTarget=e,this.a_(t)}}class TO extends AA{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Q(!!e.streamToken),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=CV(e.writeResults,e.commitTime),r=$e(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Np(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>El(this.serializer,r))};this.a_(t)}}/**
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
 */class SO extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new F(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Cp(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(O.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Cp(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(O.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class AO{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ze(t),this.D_=!1):U("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class xO{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{di(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=W(u);c.L_.add(4),await Do(c),c.q_.set("Unknown"),c.L_.delete(4),await Ql(c)}(this))})}),this.q_=new AO(r,i)}}async function Ql(n){if(di(n))for(const e of n.B_)await e(!0)}async function Do(n){for(const e of n.B_)await e(!1)}function zd(n,e){const t=W(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),jg(t)?Fg(t):Oo(t).r_()&&Mg(t,e))}function _o(n,e){const t=W(n),r=Oo(t);t.N_.delete(e),r.r_()&&xA(t,e),t.N_.size===0&&(r.r_()?r.o_():di(t)&&t.q_.set("Unknown"))}function Mg(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Oo(n).A_(e)}function xA(n,e){n.Q_.xe(e),Oo(n).R_(e)}function Fg(n){n.Q_=new TV({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Oo(n).start(),n.q_.v_()}function jg(n){return di(n)&&!Oo(n).n_()&&n.N_.size>0}function di(n){return W(n).L_.size===0}function RA(n){n.Q_=void 0}async function RO(n){n.q_.set("Online")}async function PO(n){n.N_.forEach((e,t)=>{Mg(n,e)})}async function kO(n,e){RA(n),jg(n)?(n.q_.M_(e),Fg(n)):n.q_.set("Unknown")}async function bO(n,e,t){if(n.q_.set("Online"),e instanceof WS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(n,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ed(n,r)}else if(e instanceof cc?n.Q_.Ke(e):e instanceof qS?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Y.min()))try{const r=await yA(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(Me.EMPTY_BYTE_STRING,h.snapshotVersion)),xA(s,u);const f=new Xn(h.target,u,c,h.sequenceNumber);Mg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await ed(n,r)}}async function ed(n,e,t){if(!ui(e))throw e;n.L_.add(1),await Do(n),n.q_.set("Offline"),t||(t=()=>yA(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Ql(n)})}function PA(n,e){return e().catch(t=>ed(n,t,e))}async function Vo(n){const e=W(n),t=ei(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;CO(e);)try{const i=await mO(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,NO(e,i)}catch(i){await ed(e,i)}kA(e)&&bA(e)}function CO(n){return di(n)&&n.O_.length<10}function NO(n,e){n.O_.push(e);const t=ei(n);t.r_()&&t.V_&&t.m_(e.mutations)}function kA(n){return di(n)&&!ei(n).n_()&&n.O_.length>0}function bA(n){ei(n).start()}async function DO(n){ei(n).p_()}async function VO(n){const e=ei(n);for(const t of n.O_)e.m_(t.mutations)}async function OO(n,e,t){const r=n.O_.shift(),i=Sg.from(r,e,t);await PA(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Vo(n)}async function LO(n,e){e&&ei(n).V_&&await async function(r,i){if(function(o){return BS(o)&&o!==O.ABORTED}(i.code)){const s=r.O_.shift();ei(r).s_(),await PA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Vo(r)}}(n,e),kA(n)&&bA(n)}async function Jw(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=di(t);t.L_.add(3),await Do(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ql(t)}async function Fp(n,e){const t=W(n);e?(t.L_.delete(2),await Ql(t)):e||(t.L_.add(2),await Do(t),t.q_.set("Unknown"))}function Oo(n){return n.K_||(n.K_=function(t,r,i){const s=W(t);return s.w_(),new EO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:RO.bind(null,n),Ro:PO.bind(null,n),mo:kO.bind(null,n),d_:bO.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),jg(n)?Fg(n):n.q_.set("Unknown")):(await n.K_.stop(),RA(n))})),n.K_}function ei(n){return n.U_||(n.U_=function(t,r,i){const s=W(t);return s.w_(),new TO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:DO.bind(null,n),mo:LO.bind(null,n),f_:VO.bind(null,n),g_:OO.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Vo(n)):(await n.U_.stop(),n.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Ug{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Ug(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lo(n,e){if(ze("AsyncQueue",`${e}: ${n}`),ui(n))return new F(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ys{constructor(e){this.comparator=e?(t,r)=>e(t,r)||q.comparator(t.key,r.key):(t,r)=>q.comparator(t.key,r.key),this.keyedMap=Ia(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new Ys(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ys)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ys;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Xw{constructor(){this.W_=new _e(q.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):K():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class yo{constructor(e,t,r,i,s,o,a,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new yo(e,t,Ys.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$l(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class MO{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class FO{constructor(){this.queries=Zw(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=W(t),s=i.queries;i.queries=Zw(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new F(O.ABORTED,"Firestore shutting down"))}}function Zw(){return new ci(n=>RS(n),$l)}async function Bg(n,e){const t=W(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new MO,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const a=Lo(o,`Initialization of query '${Es(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&$g(t)}async function zg(n,e){const t=W(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function jO(n,e){const t=W(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&$g(t)}function UO(n,e,t){const r=W(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function $g(n){n.Y_.forEach(e=>{e.next()})}var jp,e0;(e0=jp||(jp={})).ea="default",e0.Cache="cache";class qg{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new yo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=yo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==jp.Cache}}/**
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
 */class BO{constructor(e,t){this.aa=e,this.byteLength=t}ua(){return"metadata"in this.aa}}/**
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
 */class t0{constructor(e){this.serializer=e}Es(e){return Dn(this.serializer,e)}ds(e){return e.metadata.exists?JS(this.serializer,e.document,!1):we.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return $e(e)}}class zO{constructor(e,t,r){this.ca=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=CA(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++t;const r=ie.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ha(e){const t=new Map,r=new t0(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Es(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||ee()).add(s);t.set(o,a)}}return t}async complete(){const e=await gO(this.localStore,new t0(this.serializer),this.documents,this.ca.id),t=this.ha(this.documents);for(const r of this.queries)await _O(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function CA(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class NA{constructor(e){this.key=e}}class DA{constructor(e){this.key=e}}class VA{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=kS(e),this.Ra=new Ys(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Xw,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),I=ql(this.query,f)?f:null,R=!!m&&this.mutatedKeys.has(m.key),k=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let V=!1;m&&I?m.data.isEqual(I.data)?R!==k&&(r.track({type:3,doc:I}),V=!0):this.ga(m,I)||(r.track({type:2,doc:I}),V=!0,(u&&this.Aa(I,u)>0||c&&this.Aa(I,c)<0)&&(a=!0)):!m&&I?(r.track({type:0,doc:I}),V=!0):m&&!I&&(r.track({type:1,doc:m}),V=!0,(u||c)&&(a=!0)),V&&(I?(o=o.add(I),s=k?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(I,R){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return k(I)-k(R)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new yo(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Xw,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new DA(r))}),this.da.forEach(r=>{e.has(r)||t.push(new NA(r))}),t}ba(e){this.Ta=e.Ts,this.da=ee();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return yo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class $O{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class qO{constructor(e){this.key=e,this.va=!1}}class WO{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ci(a=>RS(a),$l),this.Ma=new Map,this.xa=new Set,this.Oa=new _e(q.comparator),this.Na=new Map,this.La=new Cg,this.Ba={},this.ka=new Map,this.qa=Zi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function GO(n,e,t=!0){const r=$d(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await OA(r,e,t,!0),i}async function KO(n,e){const t=$d(n);await OA(t,e,!0,!1)}async function OA(n,e,t,r){const i=await mo(n.localStore,Pt(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let a;return r&&(a=await Wg(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&zd(n.remoteStore,i),a}async function Wg(n,e,t,r,i){n.Ka=(f,m,I)=>async function(k,V,S,w){let v=V.view.ma(S);v.ns&&(v=await Jc(k.localStore,V.query,!1).then(({documents:T})=>V.view.ma(T,v)));const b=w&&w.targetChanges.get(V.targetId),M=w&&w.targetMismatches.get(V.targetId)!=null,j=V.view.applyChanges(v,k.isPrimaryClient,b,M);return Up(k,V.targetId,j.wa),j.snapshot}(n,f,m,I);const s=await Jc(n.localStore,e,!0),o=new VA(e,s.Ts),a=o.ma(s.documents),u=Kl.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,u);Up(n,t,c.wa);const h=new $O(e,t,o);return n.Fa.set(e,h),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),c.snapshot}async function HO(n,e,t){const r=W(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!$l(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await go(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&_o(r.remoteStore,i.targetId),vo(r,i.targetId)}).catch(li)):(vo(r,i.targetId),await go(r.localStore,i.targetId,!0))}async function QO(n,e){const t=W(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),_o(t.remoteStore,r.targetId))}async function YO(n,e,t){const r=Qg(n);try{const i=await function(o,a){const u=W(o),c=xe.now(),h=a.reduce((I,R)=>I.add(R.key),ee());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let R=Ft(),k=ee();return u.cs.getEntries(I,h).next(V=>{R=V,R.forEach((S,w)=>{w.isValidDocument()||(k=k.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,R)).next(V=>{f=V;const S=[];for(const w of a){const v=wV(w,f.get(w.key).overlayedDocument);v!=null&&S.push(new pr(w.key,v,yS(v.value.mapValue),Ae.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,S,a)}).next(V=>{m=V;const S=V.applyToLocalDocumentSet(f,k);return u.documentOverlayCache.saveOverlays(I,V.batchId,S)})}).then(()=>({batchId:m.batchId,changes:CS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new _e(Z)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,t),await mr(r,i.changes),await Vo(r.remoteStore)}catch(i){const s=Lo(i,"Failed to persist write");t.reject(s)}}async function LA(n,e){const t=W(n);try{const r=await pO(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Na.get(s);o&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Q(o.va):i.removedDocuments.size>0&&(Q(o.va),o.va=!1))}),await mr(t,r,e)}catch(r){await li(r)}}function n0(n,e,t){const r=W(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=W(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&$g(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JO(n,e,t){const r=W(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new _e(q.comparator);o=o.insert(s,we.newNoDocument(s,Y.min()));const a=ee().add(s),u=new Gl(Y.min(),new Map,new _e(Z),o,a);await LA(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Hg(r)}else await go(r.localStore,e,!1).then(()=>vo(r,e,t)).catch(li)}async function XO(n,e){const t=W(n),r=e.batch.batchId;try{const i=await fO(t.localStore,e);Kg(t,r,null),Gg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await mr(t,i)}catch(i){await li(i)}}async function ZO(n,e,t){const r=W(n);try{const i=await function(o,a){const u=W(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(Q(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);Kg(r,e,t),Gg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await mr(r,i)}catch(i){await li(i)}}async function eL(n,e){const t=W(n);di(t.remoteStore)||U("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=W(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(t.localStore);if(r===-1)return void e.resolve();const i=t.ka.get(r)||[];i.push(e),t.ka.set(r,i)}catch(r){const i=Lo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Gg(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Kg(n,e,t){const r=W(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function vo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||MA(n,r)})}function MA(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(_o(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Hg(n))}function Up(n,e,t){for(const r of t)r instanceof NA?(n.La.addReference(r.key,e),tL(n,r)):r instanceof DA?(U("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||MA(n,r.key)):K()}function tL(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(U("SyncEngine","New document in limbo: "+t),n.xa.add(r),Hg(n))}function Hg(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new q(ie.fromString(e)),r=n.qa.next();n.Na.set(r,new qO(t)),n.Oa=n.Oa.insert(t,r),zd(n.remoteStore,new Xn(Pt(bo(t.path)),r,"TargetPurposeLimboResolution",Lt.oe))}}async function mr(n,e,t){const r=W(n),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,t).then(c=>{var h;if((c||t)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=t==null?void 0:t.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Vg.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=W(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>D.forEach(c,m=>D.forEach(m.$i,I=>h.persistence.referenceDelegate.addReference(f,m.targetId,I)).next(()=>D.forEach(m.Ui,I=>h.persistence.referenceDelegate.removeReference(f,m.targetId,I)))))}catch(f){if(!ui(f))throw f;U("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const I=h.os.get(m),R=I.snapshotVersion,k=I.withLastLimboFreeSnapshotVersion(R);h.os=h.os.insert(m,k)}}}(r.localStore,s))}async function nL(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await _A(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new F(O.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mr(t,r.hs)}}function rL(n,e){const t=W(n),r=t.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=t.Ma.get(e);if(!s)return i;for(const o of s){const a=t.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}async function iL(n,e){const t=W(n),r=await Jc(t.localStore,e.query,!0),i=e.view.ba(r);return t.isPrimaryClient&&Up(t,e.targetId,i.wa),i}async function sL(n,e){const t=W(n);return IA(t.localStore,e).then(r=>mr(t,r))}async function oL(n,e,t,r){const i=W(n),s=await function(a,u){const c=W(a),h=W(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>h.Mn(f,u).next(m=>m?c.localDocuments.getDocuments(f,m):D.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Vo(i.remoteStore):t==="acknowledged"||t==="rejected"?(Kg(i,e,r||null),Gg(i,e),function(a,u){W(W(a).mutationQueue).On(u)}(i.localStore,e)):K(),await mr(i,s)):U("SyncEngine","Cannot apply mutation batch with id: "+e)}async function aL(n,e){const t=W(n);if($d(t),Qg(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await r0(t,r.toArray());t.Qa=!0,await Fp(t.remoteStore,!0);for(const s of i)zd(t.remoteStore,s)}else if(e===!1&&t.Qa!==!1){const r=[];let i=Promise.resolve();t.Ma.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(vo(t,o),go(t.localStore,o,!0))),_o(t.remoteStore,o)}),await i,await r0(t,r),function(o){const a=W(o);a.Na.forEach((u,c)=>{_o(a.remoteStore,c)}),a.La.pr(),a.Na=new Map,a.Oa=new _e(q.comparator)}(t),t.Qa=!1,await Fp(t.remoteStore,!1)}}async function r0(n,e,t){const r=W(n),i=[],s=[];for(const o of e){let a;const u=r.Ma.get(o);if(u&&u.length!==0){a=await mo(r.localStore,Pt(u[0]));for(const c of u){const h=r.Fa.get(c),f=await iL(r,h);f.snapshot&&s.push(f.snapshot)}}else{const c=await wA(r.localStore,o);a=await mo(r.localStore,c),await Wg(r,FA(c),o,!1,a.resumeToken)}i.push(a)}return r.Ca.d_(s),i}function FA(n){return xS(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function lL(n){return function(t){return W(W(t).persistence).Qi()}(W(n).localStore)}async function uL(n,e,t,r){const i=W(n);if(i.Qa)return void U("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await IA(i.localStore,PS(s[0])),a=Gl.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Me.EMPTY_BYTE_STRING);await mr(i,o,a);break}case"rejected":await go(i.localStore,e,!0),vo(i,e,r);break;default:K()}}async function cL(n,e,t){const r=$d(n);if(r.Qa){for(const i of e){if(r.Ma.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){U("SyncEngine","Adding an already active target "+i);continue}const s=await wA(r.localStore,i),o=await mo(r.localStore,s);await Wg(r,FA(s),o.targetId,!1,o.resumeToken),zd(r.remoteStore,o)}for(const i of t)r.Ma.has(i)&&await go(r.localStore,i,!1).then(()=>{_o(r.remoteStore,i),vo(r,i)}).catch(li)}}function $d(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=LA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JO.bind(null,e),e.Ca.d_=jO.bind(null,e.eventManager),e.Ca.$a=UO.bind(null,e.eventManager),e}function Qg(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZO.bind(null,e),e}function dL(n,e,t){const r=W(n);(async function(s,o,a){try{const u=await o.getMetadata();if(await function(I,R){const k=W(I),V=$e(R.createTime);return k.persistence.runTransaction("hasNewerBundle","readonly",S=>k.Gr.getBundleMetadata(S,R.id)).then(S=>!!S&&S.createTime.compareTo(V)>=0)}(s.localStore,u))return await o.close(),a._completeWith(function(I){return{taskState:"Success",documentsLoaded:I.totalDocuments,bytesLoaded:I.totalBytes,totalDocuments:I.totalDocuments,totalBytes:I.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(CA(u));const c=new zO(u,s.localStore,o.serializer);let h=await o.Ua();for(;h;){const m=await c.la(h);m&&a._updateProgress(m),h=await o.Ua()}const f=await c.complete();return await mr(s,f.Ia,void 0),await function(I,R){const k=W(I);return k.persistence.runTransaction("Save bundle","readwrite",V=>k.Gr.saveBundleMetadata(V,R))}(s.localStore,u),a._completeWith(f.progress),Promise.resolve(f.Pa)}catch(u){return Ln("SyncEngine",`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Tl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return gA(this.persistence,new mA,e.initialUser,this.serializer)}Ga(e){return new pA(Bd.Zr,this.serializer)}Wa(e){return new TA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tl.provider={build:()=>new Tl};class jA extends Tl{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Qg(this.Ja.syncEngine),await Vo(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return gA(this.persistence,new mA,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new QV(r,e.asyncQueue,t)}Ha(e,t){const r=new b2(t,this.persistence);return new k2(e.asyncQueue,r)}Ga(e){const t=Dg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Dt.withCacheSize(this.cacheSizeBytes):Dt.DEFAULT;return new Ng(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,SA(),dc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new TA}}class hL extends jA{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof ff&&(this.sharedClientState.syncEngine={no:oL.bind(null,t),ro:uL.bind(null,t),io:cL.bind(null,t),Qi:lL.bind(null,t),eo:sL.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await aL(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=SA();if(!ff.D(t))throw new F(O.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Dg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ff(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Sl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>n0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nL.bind(null,this.syncEngine),await Fp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new FO}()}createDatastore(e){const t=Hl(e.databaseInfo.databaseId),r=function(s){return new IO(s)}(e.databaseInfo);return function(s,o,a,u){return new SO(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new xO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>n0(this.syncEngine,t,0),function(){return Yw.D()?new Yw:new yO}())}createSyncEngine(e,t){return function(i,s,o,a,u,c,h){const f=new WO(i,s,o,a,u,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=W(i);U("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Do(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Sl.provider={build:()=>new Sl};function i0(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class qd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ze("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class fL{constructor(e,t){this.Xa=e,this.serializer=t,this.metadata=new lt,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(r=>{r&&r.ua()?this.metadata.resolve(r.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.aa)}`))},r=>this.metadata.reject(r))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const t=this.eu.decode(e),r=Number(t);isNaN(r)&&this.ru(`length string (${t}) is not valid number`);const i=await this.iu(r);return new BO(JSON.parse(i),e.length+r)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const t=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class pL{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new F(O.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,s){const o=W(i),a={documents:s.map(f=>Il(o.serializer,f))},u=await o.Lo("BatchGetDocuments",o.serializer.databaseId,ie.emptyPath(),a,s.length),c=new Map;u.forEach(f=>{const m=kV(o.serializer,f);c.set(m.key.toString(),m)});const h=[];return s.forEach(f=>{const m=c.get(f.toString());Q(!!m),h.push(m)}),h}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new No(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=q.fromPath(r);this.mutations.push(new Eg(i,this.precondition(i)))}),await async function(r,i){const s=W(r),o={writes:i.map(a=>El(s.serializer,a))};await s.Mo("Commit",s.serializer.databaseId,ie.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw K();t=Y.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new F(O.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Y.min())?Ae.exists(!1):Ae.updateTime(t):Ae.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Y.min()))throw new F(O.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ae.updateTime(t)}return Ae.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class mL{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new Lg(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new pL(this.datastore),t=this.cu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const t=this.updateFunction(e);return!Bl(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!BS(t)}return!1}}/**
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
 */class gL{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=nS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{U("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Lo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function mf(n,e){n.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await _A(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function s0(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Yg(n);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Jw(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Jw(e.remoteStore,i)),n._onlineComponents=e}async function Yg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await mf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Ln("Error using user provided cache. Falling back to memory cache: "+t),await mf(n,new Tl)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await mf(n,new Tl);return n._offlineComponents}async function Wd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await s0(n,n._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await s0(n,new Sl))),n._onlineComponents}function UA(n){return Yg(n).then(e=>e.persistence)}function Jg(n){return Yg(n).then(e=>e.localStore)}function BA(n){return Wd(n).then(e=>e.remoteStore)}function Xg(n){return Wd(n).then(e=>e.syncEngine)}function _L(n){return Wd(n).then(e=>e.datastore)}async function wo(n){const e=await Wd(n),t=e.eventManager;return t.onListen=GO.bind(null,e.syncEngine),t.onUnlisten=HO.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=KO.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=QO.bind(null,e.syncEngine),t}function yL(n){return n.asyncQueue.enqueue(async()=>{const e=await UA(n),t=await BA(n);return e.setNetworkEnabled(!0),function(i){const s=W(i);return s.L_.delete(0),Ql(s)}(t)})}function vL(n){return n.asyncQueue.enqueue(async()=>{const e=await UA(n),t=await BA(n);return e.setNetworkEnabled(!1),async function(i){const s=W(i);s.L_.add(0),await Do(s),s.q_.set("Offline")}(t)})}function wL(n,e){const t=new lt;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,h){const f=W(c);return f.persistence.runTransaction("read document","readonly",m=>f.localDocuments.getDocument(m,h))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new F(O.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=Lo(a,`Failed to get document '${s} from cache`);o.reject(u)}}(await Jg(n),e,t)),t.promise}function zA(n,e,t={}){const r=new lt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new qd({next:m=>{h.Za(),o.enqueueAndForget(()=>zg(s,f));const I=m.docs.has(a);!I&&m.fromCache?c.reject(new F(O.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&m.fromCache&&u&&u.source==="server"?c.reject(new F(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new qg(bo(a.path),h,{includeMetadataChanges:!0,_a:!0});return Bg(s,f)}(await wo(n),n.asyncQueue,e,t,r)),r.promise}function IL(n,e){const t=new lt;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Jc(i,s,!0),u=new VA(s,a.Ts),c=u.ma(a.documents),h=u.applyChanges(c,!1);o.resolve(h.snapshot)}catch(a){const u=Lo(a,`Failed to execute query '${s} against cache`);o.reject(u)}}(await Jg(n),e,t)),t.promise}function $A(n,e,t={}){const r=new lt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new qd({next:m=>{h.Za(),o.enqueueAndForget(()=>zg(s,f)),m.fromCache&&u.source==="server"?c.reject(new F(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new qg(a,h,{includeMetadataChanges:!0,_a:!0});return Bg(s,f)}(await wo(n),n.asyncQueue,e,t,r)),r.promise}function EL(n,e){const t=new qd(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){W(i).Y_.add(s),s.next()}(await wo(n),t)),()=>{t.Za(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){W(i).Y_.delete(s)}(await wo(n),t))}}function TL(n,e,t,r){const i=function(o,a){let u;return u=typeof o=="string"?$S().encode(o):o,function(h,f){return new fL(h,f)}(function(h,f){if(h instanceof Uint8Array)return i0(h,f);if(h instanceof ArrayBuffer)return i0(new Uint8Array(h),f);if(h instanceof ReadableStream)return h.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(t,Hl(e));n.asyncQueue.enqueueAndForget(async()=>{dL(await Xg(n),i,r)})}function SL(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=W(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Gr.getNamedQuery(o,i))}(await Jg(n),e))}/**
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
 */function qA(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const o0=new Map;/**
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
 */function Zg(n,e,t){if(!t)throw new F(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function WA(n,e,t,r){if(e===!0&&r===!0)throw new F(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function a0(n){if(!q.isDocumentKey(n))throw new F(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function l0(n){if(q.isDocumentKey(n))throw new F(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Gd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K()}function ue(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Gd(n);throw new F(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function GA(n,e){if(e<=0)throw new F(O.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class u0{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new F(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new F(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new F(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yl{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new u0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new u0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new y2;switch(r.type){case"firstParty":return new E2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=o0.get(t);r&&(U("ComponentProvider","Removing Datastore"),o0.delete(t),r.terminate())}(this),Promise.resolve()}}function AL(n,e,t,r={}){var i;const s=(n=ue(n,Yl))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ln("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=et.MOCK_USER;else{a=O1(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new F(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new et(c)}n._authCredentials=new v2(new tS(a,u))}}/**
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
 */let kt=class KA{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new KA(this.firestore,e,this._query)}},be=class HA{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new HA(this.firestore,e,this._key)}},$r=class QA extends kt{constructor(e,t,r){super(e,t,bo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new q(e))}withConverter(e){return new QA(this.firestore,e,this._path)}};function YA(n,e,...t){if(n=J(n),Zg("collection","path",e),n instanceof Yl){const r=ie.fromString(e,...t);return l0(r),new $r(n,null,r)}{if(!(n instanceof be||n instanceof $r))throw new F(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return l0(r),new $r(n.firestore,null,r)}}function xL(n,e){if(n=ue(n,Yl),Zg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new F(O.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new kt(n,null,function(r){return new fr(ie.emptyPath(),r)}(e))}function td(n,e,...t){if(n=J(n),arguments.length===1&&(e=nS.newId()),Zg("doc","path",e),n instanceof Yl){const r=ie.fromString(e,...t);return a0(r),new be(n,null,new q(r))}{if(!(n instanceof be||n instanceof $r))throw new F(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return a0(r),new be(n.firestore,n instanceof $r?n.converter:null,new q(r))}}function JA(n,e){return n=J(n),e=J(e),(n instanceof be||n instanceof $r)&&(e instanceof be||e instanceof $r)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function XA(n,e){return n=J(n),e=J(e),n instanceof kt&&e instanceof kt&&n.firestore===e.firestore&&$l(n._query,e._query)&&n.converter===e.converter}/**
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
 */class c0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Lg(this,"async_queue_retry"),this.Vu=()=>{const r=dc();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=dc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=dc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new lt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ui(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ze("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Ug.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Bp(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class RL{constructor(){this._progressObserver={},this._taskCompletionResolver=new lt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const PL=-1;let qe=class extends Yl{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new c0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new c0(e),this._firestoreClient=void 0,await e}}};function vt(n){if(n._terminated)throw new F(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ZA(n),n._firestoreClient}function ZA(n){var e,t,r;const i=n._freezeSettings(),s=function(a,u,c,h){return new X2(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,qA(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new gL(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(n._componentsProvider))}function kL(n,e){Ln("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return ex(n,Sl.provider,{build:r=>new jA(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function bL(n){Ln("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();ex(n,Sl.provider,{build:t=>new hL(t,e.cacheSizeBytes)})}function ex(n,e,t){if((n=ue(n,qe))._firestoreClient||n._terminated)throw new F(O.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new F(O.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},ZA(n)}function CL(n){if(n._initialized&&!n._terminated)throw new F(O.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new lt;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Nn.D())return Promise.resolve();const i=r+"main";await Nn.delete(i)}(Dg(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function NL(n){return function(t){const r=new lt;return t.asyncQueue.enqueueAndForget(async()=>eL(await Xg(t),r)),r.promise}(vt(n=ue(n,qe)))}function DL(n){return yL(vt(n=ue(n,qe)))}function VL(n){return vL(vt(n=ue(n,qe)))}function OL(n,e){const t=vt(n=ue(n,qe)),r=new RL;return TL(t,n._databaseId,e,r),r}function LL(n,e){return SL(vt(n=ue(n,qe)),e).then(t=>t?new kt(n,null,t.query):null)}/**
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
 */class Fn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fn(Me.fromBase64String(e))}catch(t){throw new F(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Fn(Me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let ti=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let os=class{constructor(e){this._methodName=e}};/**
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
 */class Kd{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
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
 */class e_{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const ML=/^__.*__$/;class FL{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new pr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Co(e,this.data,t,this.fieldTransforms)}}class tx{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new pr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function nx(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Hd{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Hd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return nd(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(nx(this.Cu)&&ML.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class jL{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Hl(e)}Qu(e,t,r,i=!1){return new Hd({Cu:e,methodName:t,qu:r,path:Se.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function as(n){const e=n._freezeSettings(),t=Hl(n._databaseId);return new jL(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Qd(n,e,t,r,i,s={}){const o=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);a_("Data must be an object, but it was:",o,r);const a=sx(r,o);let u,c;if(s.merge)u=new Mt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=zp(e,f,t);if(!o.contains(m))throw new F(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);ax(h,m)||h.push(m)}u=new Mt(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new FL(new ot(a),u,c)}class Jl extends os{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jl}}function rx(n,e,t){return new Hd({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class t_ extends os{_toFieldTransform(e){return new Wl(e.path,new ho)}isEqual(e){return e instanceof t_}}class n_ extends os{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=rx(this,e,!0),r=this.Ku.map(s=>ls(s,t)),i=new Qi(r);return new Wl(e.path,i)}isEqual(e){return e instanceof n_&&ol(this.Ku,e.Ku)}}class r_ extends os{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=rx(this,e,!0),r=this.Ku.map(s=>ls(s,t)),i=new Yi(r);return new Wl(e.path,i)}isEqual(e){return e instanceof r_&&ol(this.Ku,e.Ku)}}class i_ extends os{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new fo(e.serializer,VS(e.serializer,this.$u));return new Wl(e.path,t)}isEqual(e){return e instanceof i_&&this.$u===e.$u}}function s_(n,e,t,r){const i=n.Qu(1,e,t);a_("Data must be an object, but it was:",i,r);const s=[],o=ot.empty();ss(r,(u,c)=>{const h=l_(e,u,t);c=J(c);const f=i.Nu(h);if(c instanceof Jl)s.push(h);else{const m=ls(c,f);m!=null&&(s.push(h),o.set(h,m))}});const a=new Mt(s);return new tx(o,a,i.fieldTransforms)}function o_(n,e,t,r,i,s){const o=n.Qu(1,e,t),a=[zp(e,r,t)],u=[i];if(s.length%2!=0)throw new F(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(zp(e,s[m])),u.push(s[m+1]);const c=[],h=ot.empty();for(let m=a.length-1;m>=0;--m)if(!ax(c,a[m])){const I=a[m];let R=u[m];R=J(R);const k=o.Nu(I);if(R instanceof Jl)c.push(I);else{const V=ls(R,k);V!=null&&(c.push(I),h.set(I,V))}}const f=new Mt(c);return new tx(h,f,o.fieldTransforms)}function ix(n,e,t,r=!1){return ls(t,n.Qu(r?4:3,e))}function ls(n,e){if(ox(n=J(n)))return a_("Unsupported field value:",e,n),sx(n,e);if(n instanceof os)return function(r,i){if(!nx(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=ls(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=J(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return VS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=xe.fromDate(r);return{timestampValue:po(i.serializer,s)}}if(r instanceof xe){const s=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:po(i.serializer,s)}}if(r instanceof Kd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Fn)return{bytesValue:GS(i.serializer,r._byteString)};if(r instanceof be){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Rg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof e_)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Ig(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Gd(r)}`)}(n,e)}function sx(n,e){const t={};return pS(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ss(n,(r,i)=>{const s=ls(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function ox(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof xe||n instanceof Kd||n instanceof Fn||n instanceof be||n instanceof os||n instanceof e_)}function a_(n,e,t){if(!ox(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Gd(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function zp(n,e,t){if((e=J(e))instanceof ti)return e._internalPath;if(typeof e=="string")return l_(n,e);throw nd("Field path arguments must be of type string or ",n,!1,void 0,t)}const UL=new RegExp("[~\\*/\\[\\]]");function l_(n,e,t){if(e.search(UL)>=0)throw nd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ti(...e.split("."))._internalPath}catch{throw nd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function nd(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new F(O.INVALID_ARGUMENT,a+n+u)}function ax(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Al{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Yd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class BL extends Al{data(){return super.data()}}function Yd(n,e){return typeof e=="string"?l_(n,e):e instanceof ti?e._internalPath:e._delegate._internalPath}/**
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
 */function lx(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class u_{}class Xl extends u_{}function Tr(n,e,...t){let r=[];e instanceof u_&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof c_).length,a=s.filter(u=>u instanceof Jd).length;if(o>1||o>0&&a>0)throw new F(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Jd extends Xl{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Jd(e,t,r)}_apply(e){const t=this._parse(e);return cx(e._query,t),new kt(e.firestore,e.converter,kp(e._query,t))}_parse(e){const t=as(e.firestore);return function(s,o,a,u,c,h,f){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new F(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){h0(f,h);const I=[];for(const R of f)I.push(d0(u,s,R));m={arrayValue:{values:I}}}else m=d0(u,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||h0(f,h),m=ix(a,o,f,h==="in"||h==="not-in");return se.create(c,h,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function zL(n,e,t){const r=e,i=Yd("where",n);return Jd._create(i,r,t)}class c_ extends u_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new c_(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:de.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)cx(o,u),o=kp(o,u)}(e._query,t),new kt(e.firestore,e.converter,kp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class d_ extends Xl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new d_(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new F(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new F(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new wl(s,o)}(e._query,this._field,this._direction);return new kt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new fr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function $L(n,e="asc"){const t=e,r=Yd("orderBy",n);return d_._create(r,t)}class Xd extends Xl{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Xd(e,t,r)}_apply(e){return new kt(e.firestore,e.converter,Kc(e._query,this._limit,this._limitType))}}function qL(n){return GA("limit",n),Xd._create("limit",n,"F")}function WL(n){return GA("limitToLast",n),Xd._create("limitToLast",n,"L")}class Zd extends Xl{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Zd(e,t,r)}_apply(e){const t=ux(e,this.type,this._docOrFields,this._inclusive);return new kt(e.firestore,e.converter,function(i,s){return new fr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function GL(...n){return Zd._create("startAt",n,!0)}function KL(...n){return Zd._create("startAfter",n,!1)}class eh extends Xl{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new eh(e,t,r)}_apply(e){const t=ux(e,this.type,this._docOrFields,this._inclusive);return new kt(e.firestore,e.converter,function(i,s){return new fr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function HL(...n){return eh._create("endBefore",n,!1)}function QL(...n){return eh._create("endAt",n,!0)}function ux(n,e,t,r){if(t[0]=J(t[0]),t[0]instanceof Al)return function(s,o,a,u,c){if(!u)throw new F(O.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const f of Qs(s))if(f.field.isKeyField())h.push(Ki(o,u.key));else{const m=u.data.field(f.field);if(Od(m))throw new F(O.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const I=f.field.canonicalString();throw new F(O.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${I}' (used as the orderBy) does not exist.`)}h.push(m)}return new Zr(h,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=as(n.firestore);return function(o,a,u,c,h,f){const m=o.explicitOrderBy;if(h.length>m.length)throw new F(O.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const I=[];for(let R=0;R<h.length;R++){const k=h[R];if(m[R].field.isKeyField()){if(typeof k!="string")throw new F(O.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof k}`);if(!vg(o)&&k.indexOf("/")!==-1)throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${k}' contains a slash.`);const V=o.path.child(ie.fromString(k));if(!q.isDocumentKey(V))throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${V}' is not because it contains an odd number of segments.`);const S=new q(V);I.push(Ki(a,S))}else{const V=ix(u,c,k);I.push(V)}}return new Zr(I,f)}(n._query,n.firestore._databaseId,i,e,t,r)}}function d0(n,e,t){if(typeof(t=J(t))=="string"){if(t==="")throw new F(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vg(e)&&t.indexOf("/")!==-1)throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ie.fromString(t));if(!q.isDocumentKey(r))throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ki(n,new q(r))}if(t instanceof be)return Ki(n,t._key);throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gd(t)}.`)}function h0(n,e){if(!Array.isArray(n)||n.length===0)throw new F(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cx(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new F(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class h_{convertValue(e,t="none"){switch(Gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ss(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ee(o.doubleValue));return new e_(s)}convertGeoPoint(e){return new Kd(Ee(e.latitude),Ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=_g(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(_l(e));default:return null}}convertTimestamp(e){const t=lr(e);return new xe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ie.fromString(e);Q(rA(r));const i=new Jr(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(t)||ze(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function th(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class YL extends h_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}/**
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
 */class Ci{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let ur=class extends Al{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ba(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Yd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},Ba=class extends ur{data(e={}){return super.data(e)}},ni=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ci(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ba(this._firestore,this._userDataWriter,r.key,r,new Ci(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Ba(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ci(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Ba(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ci(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:JL(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function JL(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}function dx(n,e){return n instanceof ur&&e instanceof ur?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof ni&&e instanceof ni&&n._firestore===e._firestore&&XA(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function XL(n){n=ue(n,be);const e=ue(n.firestore,qe);return zA(vt(e),n._key).then(t=>f_(e,n,t))}class us extends h_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}function ZL(n){n=ue(n,be);const e=ue(n.firestore,qe),t=vt(e),r=new us(e);return wL(t,n._key).then(i=>new ur(e,r,n._key,i,new Ci(i!==null&&i.hasLocalMutations,!0),n.converter))}function eM(n){n=ue(n,be);const e=ue(n.firestore,qe);return zA(vt(e),n._key,{source:"server"}).then(t=>f_(e,n,t))}function tM(n){n=ue(n,kt);const e=ue(n.firestore,qe),t=vt(e),r=new us(e);return lx(n._query),$A(t,n._query).then(i=>new ni(e,r,n,i))}function nM(n){n=ue(n,kt);const e=ue(n.firestore,qe),t=vt(e),r=new us(e);return IL(t,n._query).then(i=>new ni(e,r,n,i))}function rM(n){n=ue(n,kt);const e=ue(n.firestore,qe),t=vt(e),r=new us(e);return $A(t,n._query,{source:"server"}).then(i=>new ni(e,r,n,i))}function f0(n,e,t){n=ue(n,be);const r=ue(n.firestore,qe),i=th(n.converter,e,t);return Zl(r,[Qd(as(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ae.none())])}function p0(n,e,t,...r){n=ue(n,be);const i=ue(n.firestore,qe),s=as(i);let o;return o=typeof(e=J(e))=="string"||e instanceof ti?o_(s,"updateDoc",n._key,e,t,r):s_(s,"updateDoc",n._key,e),Zl(i,[o.toMutation(n._key,Ae.exists(!0))])}function iM(n){return Zl(ue(n.firestore,qe),[new No(n._key,Ae.none())])}function sM(n,e){const t=ue(n.firestore,qe),r=td(n),i=th(n.converter,e);return Zl(t,[Qd(as(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Ae.exists(!1))]).then(()=>r)}function hx(n,...e){var t,r,i;n=J(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Bp(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Bp(e[o])){const f=e[o];e[o]=(t=f.next)===null||t===void 0?void 0:t.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,h;if(n instanceof be)c=ue(n.firestore,qe),h=bo(n._key.path),u={next:f=>{e[o]&&e[o](f_(c,n,f))},error:e[o+1],complete:e[o+2]};else{const f=ue(n,kt);c=ue(f.firestore,qe),h=f._query;const m=new us(c);u={next:I=>{e[o]&&e[o](new ni(c,m,f,I))},error:e[o+1],complete:e[o+2]},lx(n._query)}return function(m,I,R,k){const V=new qd(k),S=new qg(I,V,R);return m.asyncQueue.enqueueAndForget(async()=>Bg(await wo(m),S)),()=>{V.Za(),m.asyncQueue.enqueueAndForget(async()=>zg(await wo(m),S))}}(vt(c),h,a,u)}function oM(n,e){return EL(vt(n=ue(n,qe)),Bp(e)?e:{next:e})}function Zl(n,e){return function(r,i){const s=new lt;return r.asyncQueue.enqueueAndForget(async()=>YO(await Xg(r),i,s)),s.promise}(vt(n),e)}function f_(n,e,t){const r=t.docs.get(e._key),i=new us(n);return new ur(n,i,e._key,r,new Ci(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const aM={maxAttempts:5};/**
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
 */let lM=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=as(e)}set(e,t,r){this._verifyNotCommitted();const i=kr(e,this._firestore),s=th(i.converter,t,r),o=Qd(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ae.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=kr(e,this._firestore);let o;return o=typeof(t=J(t))=="string"||t instanceof ti?o_(this._dataReader,"WriteBatch.update",s._key,t,r,i):s_(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Ae.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=kr(e,this._firestore);return this._mutations=this._mutations.concat(new No(t._key,Ae.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new F(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function kr(n,e){if((n=J(n)).firestore!==e)throw new F(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */let uM=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=as(t)}get(t){const r=kr(t,this._firestore),i=new YL(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return K();const o=s[0];if(o.isFoundDocument())return new Al(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Al(this._firestore,i,r._key,null,r.converter);throw K()})}set(t,r,i){const s=kr(t,this._firestore),o=th(s.converter,r,i),a=Qd(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(t,r,i,...s){const o=kr(t,this._firestore);let a;return a=typeof(r=J(r))=="string"||r instanceof ti?o_(this._dataReader,"Transaction.update",o._key,r,i,s):s_(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=kr(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=kr(e,this._firestore),r=new us(this._firestore);return super.get(e).then(i=>new ur(this._firestore,r,t._key,i._document,new Ci(!1,!1),t.converter))}};function cM(n,e,t){n=ue(n,qe);const r=Object.assign(Object.assign({},aM),t);return function(s){if(s.maxAttempts<1)throw new F(O.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new lt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await _L(s);new mL(s.asyncQueue,c,a,o,u).au()}),u.promise}(vt(n),i=>e(new uM(n,i)),r)}/**
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
 */function dM(){return new Jl("deleteField")}function hM(){return new t_("serverTimestamp")}function fM(...n){return new n_("arrayUnion",n)}function pM(...n){return new r_("arrayRemove",n)}function mM(n){return new i_("increment",n)}(function(e,t=!0){(function(i){ko=i})(oi),Hr(new Vn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new qe(new w2(r.getProvider("auth-internal")),new S2(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new F(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jr(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),gn(rw,"4.7.3",e),gn(rw,"4.7.3","esm2017")})();const gM="@firebase/firestore-compat",_M="0.3.38";/**
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
 */function p_(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new F("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function m0(){if(typeof Uint8Array>"u")throw new F("unimplemented","Uint8Arrays are not available in this environment.")}function g0(){if(!Y2())throw new F("unimplemented","Blobs are unavailable in Firestore in this environment.")}class xl{constructor(e){this._delegate=e}static fromBase64String(e){return g0(),new xl(Fn.fromBase64String(e))}static fromUint8Array(e){return m0(),new xl(Fn.fromUint8Array(e))}toBase64(){return g0(),this._delegate.toBase64()}toUint8Array(){return m0(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function $p(n){return yM(n,["next","error","complete"])}function yM(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
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
 */class vM{enableIndexedDbPersistence(e,t){return kL(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return bL(e._delegate)}clearIndexedDbPersistence(e){return CL(e._delegate)}}class fx{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Jr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Ln("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){AL(this._delegate,e,t,r)}enableNetwork(){return DL(this._delegate)}disableNetwork(){return VL(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,WA("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return NL(this._delegate)}onSnapshotsInSync(e){return oM(this._delegate,e)}get app(){if(!this._appCompat)throw new F("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Io(this,YA(this._delegate,e))}catch(t){throw St(t,"collection()","Firestore.collection()")}}doc(e){try{return new nn(this,td(this._delegate,e))}catch(t){throw St(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Tt(this,xL(this._delegate,e))}catch(t){throw St(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return cM(this._delegate,t=>e(new px(this,t)))}batch(){return vt(this._delegate),new mx(new lM(this._delegate,e=>Zl(this._delegate,e)))}loadBundle(e){return OL(this._delegate,e)}namedQuery(e){return LL(this._delegate,e).then(t=>t?new Tt(this,t):null)}}class nh extends h_{constructor(e){super(),this.firestore=e}convertBytes(e){return new xl(new Fn(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return nn.forKey(t,this.firestore,null)}}function wM(n){g2(n)}class px{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new nh(e)}get(e){const t=Ni(e);return this._delegate.get(t).then(r=>new Rl(this._firestore,new ur(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=Ni(e);return r?(p_("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Ni(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Ni(e);return this._delegate.delete(t),this}}class mx{constructor(e){this._delegate=e}set(e,t,r){const i=Ni(e);return r?(p_("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Ni(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Ni(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class es{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Ba(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Pl(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=es.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new es(e,new nh(e),t),i.set(t,s)),s}}es.INSTANCES=new WeakMap;class nn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new nh(e)}static forPath(e,t,r){if(e.length%2!==0)throw new F("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new nn(t,new be(t._delegate,r,new q(e)))}static forKey(e,t,r){return new nn(t,new be(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Io(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Io(this.firestore,YA(this._delegate,e))}catch(t){throw St(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=J(e),e instanceof be?JA(this._delegate,e):!1}set(e,t){t=p_("DocumentReference.set",t);try{return t?f0(this._delegate,e,t):f0(this._delegate,e)}catch(r){throw St(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?p0(this._delegate,e):p0(this._delegate,e,t,...r)}catch(i){throw St(i,"updateDoc()","DocumentReference.update()")}}delete(){return iM(this._delegate)}onSnapshot(...e){const t=gx(e),r=_x(e,i=>new Rl(this.firestore,new ur(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return hx(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=ZL(this._delegate):(e==null?void 0:e.source)==="server"?t=eM(this._delegate):t=XL(this._delegate),t.then(r=>new Rl(this.firestore,new ur(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new nn(this.firestore,e?this._delegate.withConverter(es.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function St(n,e,t){return n.message=n.message.replace(e,t),n}function gx(n){for(const e of n)if(typeof e=="object"&&!$p(e))return e;return{}}function _x(n,e){var t,r;let i;return $p(n[0])?i=n[0]:$p(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Rl{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new nn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return dx(this._delegate,e._delegate)}}class Pl extends Rl{data(e){const t=this._delegate.data(e);return this._delegate._converter||_2(t!==void 0),t}}class Tt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new nh(e)}where(e,t,r){try{return new Tt(this.firestore,Tr(this._delegate,zL(e,t,r)))}catch(i){throw St(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Tt(this.firestore,Tr(this._delegate,$L(e,t)))}catch(r){throw St(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Tt(this.firestore,Tr(this._delegate,qL(e)))}catch(t){throw St(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Tt(this.firestore,Tr(this._delegate,WL(e)))}catch(t){throw St(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Tt(this.firestore,Tr(this._delegate,GL(...e)))}catch(t){throw St(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Tt(this.firestore,Tr(this._delegate,KL(...e)))}catch(t){throw St(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Tt(this.firestore,Tr(this._delegate,HL(...e)))}catch(t){throw St(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Tt(this.firestore,Tr(this._delegate,QL(...e)))}catch(t){throw St(t,"endAt()","Query.endAt()")}}isEqual(e){return XA(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=nM(this._delegate):(e==null?void 0:e.source)==="server"?t=rM(this._delegate):t=tM(this._delegate),t.then(r=>new qp(this.firestore,new ni(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=gx(e),r=_x(e,i=>new qp(this.firestore,new ni(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return hx(this._delegate,t,r)}withConverter(e){return new Tt(this.firestore,e?this._delegate.withConverter(es.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class IM{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Pl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class qp{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Tt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Pl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new IM(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new Pl(this._firestore,r))})}isEqual(e){return dx(this._delegate,e._delegate)}}class Io extends Tt{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new nn(this.firestore,e):null}doc(e){try{return e===void 0?new nn(this.firestore,td(this._delegate)):new nn(this.firestore,td(this._delegate,e))}catch(t){throw St(t,"doc()","CollectionReference.doc()")}}add(e){return sM(this._delegate,e).then(t=>new nn(this.firestore,t))}isEqual(e){return JA(this._delegate,e._delegate)}withConverter(e){return new Io(this.firestore,e?this._delegate.withConverter(es.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ni(n){return ue(n,be)}/**
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
 */class m_{constructor(...e){this._delegate=new ti(...e)}static documentId(){return new m_(Se.keyField().canonicalString())}isEqual(e){return e=J(e),e instanceof ti?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class xi{constructor(e){this._delegate=e}static serverTimestamp(){const e=hM();return e._methodName="FieldValue.serverTimestamp",new xi(e)}static delete(){const e=dM();return e._methodName="FieldValue.delete",new xi(e)}static arrayUnion(...e){const t=fM(...e);return t._methodName="FieldValue.arrayUnion",new xi(t)}static arrayRemove(...e){const t=pM(...e);return t._methodName="FieldValue.arrayRemove",new xi(t)}static increment(e){const t=mM(e);return t._methodName="FieldValue.increment",new xi(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const EM={Firestore:fx,GeoPoint:Kd,Timestamp:xe,Blob:xl,Transaction:px,WriteBatch:mx,DocumentReference:nn,DocumentSnapshot:Rl,Query:Tt,QueryDocumentSnapshot:Pl,QuerySnapshot:qp,CollectionReference:Io,FieldPath:m_,FieldValue:xi,setLogLevel:wM,CACHE_SIZE_UNLIMITED:PL};function TM(n,e){n.INTERNAL.registerComponent(new Vn("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},EM)))}/**
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
 */function SM(n){TM(n,(e,t)=>new fx(e,t,new vM)),n.registerVersion(gM,_M)}SM(Cn);const AM={apiKey:"AIzaSyCuhI79HGlVKc2m2xdganc_mdZgMC_RLXk",authDomain:"sciencenoob-quiz.firebaseapp.com",projectId:"sciencenoob-quiz",storageBucket:"sciencenoob-quiz.firebasestorage.app",messagingSenderId:"259332905426",appId:"1:259332905426:web:7a17a4ba05d138a0fc100b",measurementId:"G-4WS1S374EM"};Cn.apps.length?Cn.app():Cn.initializeApp(AM);const rd=Cn.auth(),rh=Cn.firestore(),xM=({onNavigate:n})=>g.jsxs("div",{className:"min-h-screen relative overflow-hidden bg-[#FDFBF7] font-sans selection:bg-[#1CAB55] selection:text-white animate-fade-in",children:[g.jsx("div",{className:"absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] rounded-full bg-[#1CAB55] opacity-[0.08] blur-[80px] animate-pulse"}),g.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[60vh] h-[60vh] rounded-full bg-[#8B0000] opacity-[0.06] blur-[100px] animate-pulse",style:{animationDelay:"2s"}}),g.jsx("div",{className:"absolute inset-0 opacity-[0.03]",style:{backgroundImage:"radial-gradient(#1a1a1a 1px, transparent 1px)",backgroundSize:"30px 30px"}}),g.jsx("div",{className:"relative z-10 min-h-screen flex flex-col items-center justify-center p-6",children:g.jsxs("div",{className:"w-full max-w-lg bg-white/60 backdrop-blur-lg rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 p-8 md:p-12 text-center transform transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]",children:[g.jsx("div",{className:"mx-auto w-24 h-24 bg-gradient-to-tr from-[#1CAB55] to-[#45d47e] rounded-2xl rotate-3 flex items-center justify-center shadow-lg mb-8 text-white",children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-12 w-12",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})})}),g.jsxs("h1",{className:"text-4xl md:text-5xl font-bold text-gray-800 mb-1 tracking-tight",children:["কুইজ ",g.jsx("span",{className:"text-[#1CAB55]",children:"মেশিন"})]}),g.jsx("p",{className:"text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4",children:"By Science Noob"}),g.jsx("div",{className:"h-1 w-16 bg-[#8B0000] mx-auto rounded-full mb-6"}),g.jsx("p",{className:"text-xl text-gray-600 mb-2 font-medium",children:"তোমাকে স্বাগতম!"}),g.jsxs("p",{className:"text-gray-500 mb-10 leading-relaxed",children:["মেধার লড়াইয়ে নামতে প্রস্তুত? ",g.jsx("br",{})," এখনই শুরু হোক জ্ঞানের নতুন যাত্রা।"]}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("button",{onClick:()=>n("LOGIN"),className:"w-full bg-[#1CAB55] hover:bg-[#169448] text-white text-xl font-bold py-4 px-6 rounded-xl shadow-[0_4px_0_rgb(15,125,55)] active:shadow-none active:translate-y-[4px] transition-all flex items-center justify-center gap-2 group",children:[g.jsx("span",{children:"লগইন কর"}),g.jsx("span",{className:"group-hover:translate-x-1 transition-transform",children:"→"})]}),g.jsx("button",{onClick:()=>n("SIGNUP"),className:"w-full bg-white hover:bg-gray-50 text-[#1a1a1a] border-2 border-gray-200 text-xl font-bold py-4 px-6 rounded-xl shadow-[0_4px_0_rgb(229,231,235)] active:shadow-none active:translate-y-[4px] transition-all",children:"সাইন আপ কর"})]}),g.jsx("p",{className:"mt-8 text-xs text-gray-400",children:"Learn • Play • Win"})]})})]}),tr=({variant:n="primary",className:e="",children:t,...r})=>{const i="px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform active:scale-95 shadow-md",s={primary:"bg-[#1CAB55] text-white hover:bg-[#159f4d]",secondary:"bg-white text-brand-dark border-2 border-[#1CAB55] hover:bg-gray-50",danger:"bg-[#8B0000] text-white hover:bg-[#720000]",outline:"bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100"};return g.jsx("button",{className:`${i} ${s[n]} ${e}`,...r,children:t})};let id=[];const sd="quiz_attempts",ws=n=>n==null?"":typeof n=="string"?n.trim():typeof n=="number"?String(n):typeof n=="object"?(n.text||n.value||JSON.stringify(n)).trim():String(n).trim(),gf=n=>{if(n==null||n==="")return!1;const e=Number(n);return!isNaN(e)},RM=async()=>{try{const e=(await rh.collection("quizzes").get()).docs.map(t=>{const r=t.data(),i=(r.questions||[]).map(s=>{const o=(s.options||[]).map(u=>ws(u));let a=-1;if(gf(s.correctAnswerIndex))a=Number(s.correctAnswerIndex);else if(s.correctAnswer){const u=ws(s.correctAnswer);if(a=o.findIndex(c=>c===u),a===-1&&gf(u)&&(a=Number(u)),a===-1){const c=u.match(/Option\s?(\d+)/i);c&&(a=parseInt(c[1])-1)}}else if(s.answer){const u=ws(s.answer);a=o.findIndex(c=>c===u)}return{id:s.id||Math.random().toString(36).substr(2,9),text:ws(s.text),imageUrl:s.imageUrl,options:o,correctAnswerIndex:a}});return{id:t.id,title:ws(r.title),description:ws(r.description),isNew:!!r.isNew,createdAt:r.createdAt,durationSeconds:gf(r.durationSeconds)?Number(r.durationSeconds):60,questions:i}});return id=e,e}catch(n){return console.error("Error fetching quizzes from Firestore:",n),[]}},PM=async()=>id.length>0?id:await RM(),yx=n=>id.find(e=>e.id===n),kM=async n=>{const e=localStorage.getItem(sd),t=e?JSON.parse(e):[];t.push(n),localStorage.setItem(sd,JSON.stringify(t));try{const{id:r,...i}=n;await rh.collection("attempts").add({...i,timestamp:Date.now()})}catch(r){console.error("Error saving attempt to Firestore:",r)}},g_=n=>{const e=localStorage.getItem(sd);return(e?JSON.parse(e):[]).filter(r=>r.userId===n).sort((r,i)=>i.timestamp-r.timestamp)},bM=(n,e)=>g_(n).find(r=>r.quizId===e),vx=()=>{const n=localStorage.getItem(sd);return(n?JSON.parse(n):[]).sort((t,r)=>r.score!==t.score?r.score-t.score:t.timeTakenSeconds-r.timeTakenSeconds)},CM=n=>vx().filter(t=>t.quizId===n),NM=({user:n,onStartQuiz:e,onNavigate:t,onLogout:r,onViewResults:i,onOpenLeaderboard:s})=>{const[o,a]=ce.useState("NEW"),[u,c]=ce.useState([]),[h,f]=ce.useState([]),[m,I]=ce.useState(!0);ce.useEffect(()=>{(async()=>{I(!0);try{const b=await PM();c(b),f(g_(n.uid))}catch(b){console.error("Failed to load dashboard data",b)}finally{I(!1)}})()},[n.uid]);const R=new Set(h.map(v=>v.quizId)),k=u.filter(v=>!R.has(v.id)),V=u.filter(v=>R.has(v.id)),S=h.reduce((v,b)=>v+b.score,0),w=h.length;return g.jsxs("div",{className:"min-h-screen bg-[#FDFBF7] pb-10 font-sans animate-fade-in",children:[g.jsxs("div",{className:"relative bg-gradient-to-br from-[#1CAB55] via-[#159648] to-[#0E7034] text-white rounded-b-[2rem] md:rounded-b-[3rem] shadow-[0_20px_50px_-12px_rgba(28,171,85,0.5)] mb-8 md:mb-12 overflow-hidden pb-6 md:pb-8 transition-all",children:[g.jsx("div",{className:"absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white opacity-[0.03] rounded-full -mr-20 -mt-20 md:-mr-32 md:-mt-32 pointer-events-none blur-3xl"}),g.jsx("div",{className:"absolute bottom-0 left-0 w-60 h-60 md:w-80 md:h-80 bg-black opacity-[0.1] rounded-full -ml-16 -mb-16 md:-ml-20 md:-mb-20 pointer-events-none blur-3xl"}),g.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"}),g.jsxs("div",{className:"max-w-5xl mx-auto px-4 md:px-6 pt-6 md:pt-8 pb-2 md:pb-4 relative z-10",children:[g.jsxs("div",{className:"flex justify-between items-center mb-6 md:mb-10",children:[g.jsxs("div",{className:"flex items-center gap-2 md:gap-3",children:[g.jsx("div",{className:"p-2 md:p-2.5 bg-white/10 rounded-xl backdrop-blur-md border border-white/20 shadow-inner",children:g.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{className:"font-bold text-lg md:text-xl tracking-wide text-white/90 leading-tight",children:"কুইজ মেশিন"}),g.jsx("span",{className:"text-[10px] md:text-[10px] text-green-200 font-medium tracking-wider uppercase opacity-80",children:"By Science Noob"})]})]}),g.jsxs("button",{onClick:r,className:"group flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-red-500/10 hover:bg-red-500/20 border border-red-200/20 transition-all text-xs md:text-sm font-medium backdrop-blur-sm text-red-100 hover:text-white",children:[g.jsx("span",{children:"লগ আউট"}),g.jsx("svg",{className:"w-3.5 h-3.5 md:w-4 md:h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})]})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center",children:[g.jsxs("div",{className:"space-y-3 md:space-y-4 text-center md:text-left",children:[g.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-3 md:gap-5 justify-center md:justify-start",children:[g.jsxs("div",{className:"relative group cursor-pointer",children:[g.jsx("div",{className:"absolute inset-0 bg-yellow-400 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-500"}),g.jsx("div",{className:"w-16 h-16 md:w-20 md:h-20 relative rounded-2xl bg-gradient-to-tr from-yellow-300 to-yellow-500 p-1 shadow-lg transform rotate-3 group-hover:rotate-0 transition-all duration-300",children:g.jsx("div",{className:"w-full h-full bg-[#fff] rounded-xl flex items-center justify-center text-2xl md:text-3xl font-bold text-[#1CAB55]",children:n.displayName?n.displayName.charAt(0):"U"})})]}),g.jsxs("div",{children:[g.jsx("p",{className:"text-green-200 text-xs md:text-sm font-bold uppercase tracking-wider mb-0.5 md:mb-1",children:"স্বাগতম"}),g.jsx("h1",{className:"text-2xl md:text-4xl font-bold text-white leading-tight",children:n.displayName||"বন্ধুবর"})]})]}),g.jsxs("p",{className:"text-green-50/80 text-sm md:text-base leading-relaxed border-l-0 md:border-l-2 border-green-400/30 pl-0 md:pl-4 max-w-sm mx-auto md:mx-0",children:["আপনার জ্ঞান বৃদ্ধি করার এখনই সেরা সময়। ",g.jsx("br",{className:"hidden md:block"}),"আজকের চ্যালেঞ্জ নিতে প্রস্তুত?"]}),g.jsxs("button",{onClick:()=>t("LEADERBOARD"),className:"mt-2 inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2.5 md:px-6 md:py-3 rounded-xl backdrop-blur-md transition-all group shadow-lg hover:shadow-xl w-full md:w-auto justify-center md:justify-start",children:[g.jsx("span",{className:"text-lg md:text-xl",children:"🏆"}),g.jsxs("div",{className:"text-left leading-none",children:[g.jsx("span",{className:"block text-[10px] md:text-xs text-green-200 uppercase font-bold",children:"গ্লোবাল র‍্যাংক"}),g.jsx("span",{className:"font-semibold text-sm md:text-base",children:"লিডারবোর্ড দেখুন"})]}),g.jsx("svg",{className:"w-4 h-4 md:w-5 md:h-5 ml-2 opacity-50 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})]}),g.jsxs("div",{className:"grid grid-cols-2 gap-3 md:gap-4",children:[g.jsxs("div",{className:"bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 p-4 md:p-5 rounded-xl md:rounded-2xl hover:bg-white/15 transition-all group shadow-lg hover:-translate-y-1 text-center md:text-left",children:[g.jsxs("div",{className:"flex flex-col md:flex-row items-center md:justify-between mb-2 md:mb-3 gap-2",children:[g.jsx("div",{className:"p-1.5 md:p-2 bg-green-500/20 rounded-lg text-green-100",children:g.jsx("svg",{className:"w-4 h-4 md:w-5 md:h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),g.jsx("span",{className:"text-[10px] md:text-xs text-green-200/70 font-bold uppercase tracking-wider",children:"সম্পন্ন"})]}),g.jsx("div",{className:"text-2xl md:text-4xl font-bold text-white mb-0.5 md:mb-1 tracking-tight",children:w}),g.jsx("div",{className:"text-[10px] md:text-xs text-green-100 opacity-60",children:"টি কুইজ খেলেছেন"})]}),g.jsxs("div",{className:"bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 p-4 md:p-5 rounded-xl md:rounded-2xl hover:bg-white/15 transition-all group shadow-lg hover:-translate-y-1 text-center md:text-left",children:[g.jsxs("div",{className:"flex flex-col md:flex-row items-center md:justify-between mb-2 md:mb-3 gap-2",children:[g.jsx("div",{className:"p-1.5 md:p-2 bg-yellow-500/20 rounded-lg text-yellow-200",children:g.jsx("svg",{className:"w-4 h-4 md:w-5 md:h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),g.jsx("span",{className:"text-[10px] md:text-xs text-green-200/70 font-bold uppercase tracking-wider",children:"পয়েন্ট"})]}),g.jsx("div",{className:"text-2xl md:text-4xl font-bold text-white mb-0.5 md:mb-1 tracking-tight",children:S}),g.jsx("div",{className:"text-[10px] md:text-xs text-green-100 opacity-60",children:"মোট অর্জিত স্কোর"})]})]})]})]})]}),g.jsxs("div",{className:"max-w-5xl mx-auto px-4",children:[g.jsxs("div",{className:"flex justify-center mb-8 md:mb-10 bg-white p-1 md:p-1.5 rounded-full shadow-sm max-w-sm md:max-w-md mx-auto border border-gray-100",children:[g.jsxs("button",{onClick:()=>a("NEW"),className:`flex-1 py-2 md:py-2.5 px-4 md:px-6 rounded-full font-bold text-xs md:text-base transition-all duration-300 ${o==="NEW"?"bg-[#1CAB55] text-white shadow-md transform scale-105":"text-gray-500 hover:bg-gray-50"}`,children:["নতুন কুইজ 🔥 (",k.length,")"]}),g.jsxs("button",{onClick:()=>a("OLD"),className:`flex-1 py-2 md:py-2.5 px-4 md:px-6 rounded-full font-bold text-xs md:text-base transition-all duration-300 ${o==="OLD"?"bg-[#1CAB55] text-white shadow-md transform scale-105":"text-gray-500 hover:bg-gray-50"}`,children:["আগের কুইজ 📜 (",V.length,")"]})]}),m?g.jsx("div",{className:"flex justify-center items-center py-20",children:g.jsxs("div",{className:"flex flex-col items-center",children:[g.jsx("div",{className:"w-12 h-12 border-4 border-[#1CAB55] border-t-transparent rounded-full animate-spin mb-4"}),g.jsx("p",{className:"text-gray-400 font-medium",children:"কুইজ লোড হচ্ছে..."})]})}):g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 animate-fade-in-up pb-12",children:o==="NEW"?k.length>0?k.map((v,b)=>g.jsxs("div",{className:"group relative bg-white rounded-3xl p-5 md:p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(28,171,85,0.25)] transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-1",children:[g.jsx("div",{className:"absolute -right-12 -top-12 w-32 h-32 md:w-40 md:h-40 bg-green-50 rounded-full blur-3xl group-hover:bg-green-100 transition-colors opacity-60 pointer-events-none"}),g.jsxs("div",{className:"relative z-10",children:[g.jsxs("div",{className:"flex justify-between items-start mb-4 md:mb-5",children:[g.jsx("div",{className:`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-100 group-hover:scale-110 transition-transform duration-300 ${b%2===0?"bg-gradient-to-br from-[#1CAB55] to-[#159f4d]":"bg-gradient-to-br from-[#FF6B6B] to-[#EE5253]"}`,children:b%2===0?g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 md:h-7 md:w-7",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})}):g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 md:h-7 md:w-7",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"})})}),g.jsxs("div",{className:"flex gap-2",children:[g.jsx("button",{onClick:M=>{M.stopPropagation(),s(v.id)},className:"bg-yellow-100 hover:bg-yellow-200 text-yellow-700 p-1.5 md:p-2 rounded-lg transition-colors",title:"লিডারবোর্ড দেখুন",children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 md:h-5 md:w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"})})}),g.jsx("span",{className:"bg-orange-50 text-orange-600 text-[9px] md:text-[10px] font-extrabold px-2.5 py-1.5 md:px-3 rounded-full border border-orange-100 uppercase tracking-wide flex items-center",children:"নতুন"})]})]}),g.jsxs("div",{className:"cursor-pointer",onClick:()=>e(v.id),children:[g.jsx("h3",{className:"text-lg md:text-xl font-bold text-gray-800 mb-1.5 md:mb-2 leading-tight group-hover:text-[#1CAB55] transition-colors pr-2",children:v.title}),g.jsx("p",{className:"text-gray-500 text-xs md:text-sm mb-4 md:mb-6 line-clamp-2 h-8 md:h-10 leading-relaxed",children:v.description})]}),g.jsxs("div",{className:"flex items-center justify-between pt-3 md:pt-4 border-t border-gray-100",children:[g.jsxs("div",{className:"flex gap-2 md:gap-3 text-[10px] md:text-xs font-semibold text-gray-500",children:[g.jsxs("div",{className:"flex items-center gap-1 md:gap-1.5 bg-gray-50 px-2 py-1 md:px-2.5 md:py-1.5 rounded-lg border border-gray-100",children:[g.jsx("svg",{className:"w-3 h-3 md:w-3.5 md:h-3.5 text-[#1CAB55]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),v.questions.length," প্রশ্ন"]}),g.jsxs("div",{className:"flex items-center gap-1 md:gap-1.5 bg-gray-50 px-2 py-1 md:px-2.5 md:py-1.5 rounded-lg border border-gray-100",children:[g.jsx("svg",{className:"w-3 h-3 md:w-3.5 md:h-3.5 text-[#1CAB55]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),Math.ceil(v.durationSeconds/60)," মি:"]})]}),g.jsx("button",{onClick:()=>e(v.id),className:"w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1CAB55] text-white flex items-center justify-center group-hover:bg-[#159f4d] group-hover:scale-110 transition-all shadow-md shadow-green-200",children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 md:h-5 md:w-5 translate-x-0.5",viewBox:"0 0 20 20",fill:"currentColor",children:g.jsx("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})})})]})]})]},v.id)):g.jsxs("div",{className:"col-span-full py-16 text-center",children:[g.jsx("div",{className:"w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce",children:g.jsx("span",{className:"text-4xl",children:"🎉"})}),g.jsx("h3",{className:"text-xl font-bold text-gray-700",children:"অভিনন্দন!"}),g.jsx("p",{className:"text-gray-500",children:"আপনি সব নতুন কুইজ শেষ করেছেন।"})]}):V.length>0?V.map(v=>{const b=bM(n.uid,v.id);return g.jsxs("div",{className:"bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 relative group",children:[g.jsxs("div",{className:"flex justify-between items-start mb-2",children:[g.jsxs("div",{className:"flex items-center gap-2 md:gap-3",children:[g.jsx("div",{className:"w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500",children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 md:h-5 md:w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),g.jsx("h3",{className:"text-base md:text-lg font-bold text-gray-800 group-hover:text-[#1CAB55] transition-colors",children:v.title})]}),b&&g.jsxs("div",{className:"flex items-center gap-3 text-right",children:[g.jsx("button",{onClick:M=>{M.stopPropagation(),s(v.id)},className:"bg-yellow-50 text-yellow-600 p-2 rounded-lg hover:bg-yellow-100 transition-colors shadow-sm",title:"লিডারবোর্ড দেখুন",children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"})})}),g.jsxs("div",{children:[g.jsxs("span",{className:"block text-xl md:text-2xl font-bold text-[#1CAB55]",children:[b.score,"/",v.questions.length]}),g.jsx("span",{className:"text-[9px] md:text-[10px] text-gray-400 uppercase tracking-wider font-bold",children:"আপনার স্কোর"})]})]})]}),g.jsx("p",{className:"text-gray-400 text-xs md:text-sm mb-4 md:mb-6 pl-10 md:pl-14",children:v.description}),g.jsxs("div",{className:"flex gap-2 md:gap-3 pl-10 md:pl-14",children:[g.jsx(tr,{onClick:()=>e(v.id),className:"text-xs py-1.5 px-3 md:py-2 md:px-4 bg-[#1CAB55] hover:bg-[#169448] text-white rounded-lg shadow-sm",children:"আবার দিন"}),g.jsx(tr,{variant:"outline",onClick:()=>b&&i(b,v),className:"text-xs py-1.5 px-3 md:py-2 md:px-4 border-gray-200 text-gray-600 hover:text-[#1CAB55] hover:border-[#1CAB55] rounded-lg",children:"উত্তর দেখুন"})]})]},v.id)}):g.jsxs("div",{className:"col-span-full text-center py-16",children:[g.jsx("div",{className:"w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl",children:"📜"}),g.jsx("p",{className:"text-gray-500",children:"আপনি এখনও কোনো কুইজ দেননি।"})]})},o)]})]})},DM=({quiz:n,userId:e,userEmail:t,userName:r,onComplete:i,onCancel:s})=>{const[o,a]=ce.useState(0),[u,c]=ce.useState(new Array(n.questions.length).fill(-1)),h=Number(n.durationSeconds)||60,[f,m]=ce.useState(h),[I,R]=ce.useState(!1),k=b=>{if(isNaN(b))return"0:00";const M=Math.floor(b/60),j=b%60;return`${M}:${j<10?"0":""}${j}`},V=ce.useCallback(()=>{if(I)return;R(!0);let b=0;u.forEach((T,y)=>{const E=Number(n.questions[y].correctAnswerIndex);T===E&&b++});const M=h-f,j={id:Date.now().toString(),userId:e,userEmail:t,userName:r||t,quizId:n.id,quizTitle:n.title,score:b,totalQuestions:n.questions.length,timeTakenSeconds:M,timestamp:Date.now(),answers:u};kM(j),i(j)},[I,u,n,f,e,t,r,i,h]);ce.useEffect(()=>{if(f<=0){V();return}const b=setInterval(()=>{m(M=>M-1)},1e3);return()=>clearInterval(b)},[f,V]);const S=b=>{const M=[...u];M[o]=b,c(M)},w=n.questions[o],v=b=>typeof b=="object"&&b!==null?b.text||b.value||"":b;return g.jsxs("div",{className:"max-w-3xl mx-auto p-4 pt-8 animate-fade-in",children:[g.jsxs("div",{className:"flex justify-between items-center bg-white p-4 rounded-xl shadow-md mb-6 sticky top-4 z-20 border-b-2 border-[#1CAB55]",children:[g.jsxs("div",{children:[g.jsx("h2",{className:"text-lg font-bold text-gray-800",children:n.title}),g.jsxs("span",{className:"text-sm text-gray-500",children:["প্রশ্ন: ",o+1," / ",n.questions.length]})]}),g.jsx("div",{className:`text-xl font-mono font-bold px-4 py-2 rounded-lg ${f<10?"bg-red-100 text-red-600":"bg-green-100 text-[#1CAB55]"}`,children:k(f)})]}),g.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-6 md:p-8 min-h-[400px] flex flex-col",children:[g.jsx("h3",{className:"text-2xl font-semibold text-gray-800 mb-6",children:v(w.text)}),w.imageUrl&&g.jsx("div",{className:"mb-6 rounded-lg overflow-hidden border border-gray-200",children:g.jsx("img",{src:w.imageUrl,alt:"Question Visual",className:"w-full h-64 object-cover"})}),g.jsx("div",{className:"space-y-3 flex-grow",children:w.options.map((b,M)=>g.jsx("button",{onClick:()=>S(M),className:`w-full text-left p-4 rounded-lg border-2 transition-all ${u[o]===M?"border-[#1CAB55] bg-green-50 text-[#1CAB55] font-semibold":"border-gray-200 hover:bg-gray-50 text-gray-700"}`,children:g.jsxs("div",{className:"flex items-center",children:[g.jsx("div",{className:`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${u[o]===M?"border-[#1CAB55]":"border-gray-300"}`,children:u[o]===M&&g.jsx("div",{className:"w-3 h-3 rounded-full bg-[#1CAB55]"})}),v(b)]})},M))}),g.jsxs("div",{className:"flex justify-between mt-8 pt-4 border-t border-gray-100",children:[g.jsx(tr,{variant:"outline",onClick:()=>a(b=>Math.max(0,b-1)),disabled:o===0,className:"disabled:opacity-50",children:"আগের"}),o===n.questions.length-1?g.jsx(tr,{variant:"danger",onClick:V,children:"জমা দিন (Submit)"}):g.jsx(tr,{onClick:()=>a(b=>Math.min(n.questions.length-1,b+1)),children:"পরের"})]})]}),g.jsx("div",{className:"mt-4 text-center",children:g.jsx("button",{onClick:s,className:"text-gray-500 hover:text-red-500 underline text-sm",children:"কুইজ বাতিল করুন"})})]})},VM=({attempt:n,quiz:e,onHome:t,onRetry:r})=>{const[i,s]=ce.useState(0),[o,a]=ce.useState(!1),u=Math.round(n.score/n.totalQuestions*100);let c="",h="";u>=80?(c="অসাধারণ! আপনি দারুণ করেছেন!",h="text-green-600"):u>=50?(c="ভালো হয়েছে, তবে আরও ভালো করা সম্ভব।",h="text-[#1CAB55]"):(c="হতাশ হবেন না, আবার চেষ্টা করুন!",h="text-[#8B0000]"),ce.useEffect(()=>{if(a(!0),n.score===0)return;let m=0;const I=n.score,k=Math.max(1e3/I,50),V=setInterval(()=>{m+=1,s(m),m>=I&&clearInterval(V)},k);return()=>clearInterval(V)},[n.score]);const f=m=>typeof m=="object"&&m!==null?m.text||m.value||"":m;return g.jsx("div",{className:"min-h-screen bg-brand-cream py-10 px-4 transition-opacity duration-700 ease-in-out",style:{opacity:o?1:0},children:g.jsxs("div",{className:"max-w-3xl mx-auto",children:[g.jsxs("div",{className:`bg-white rounded-2xl shadow-xl p-8 text-center mb-8 border-t-8 border-[#1CAB55] transform transition-all duration-700 ${o?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:[g.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-2",children:"কুইজ ফলাফল"}),g.jsx("p",{className:"text-gray-500 mb-6",children:e.title}),g.jsxs("div",{className:"flex flex-col md:flex-row justify-center items-center gap-8 mb-8",children:[g.jsxs("div",{className:"relative",children:[g.jsxs("div",{className:"w-40 h-40 rounded-full border-8 border-[#1CAB55] flex flex-col justify-center items-center bg-green-50 animate-pulse",children:[g.jsxs("span",{className:"text-5xl font-bold text-[#1CAB55] transition-all",children:[i,g.jsxs("span",{className:"text-2xl text-gray-400",children:["/",n.totalQuestions]})]}),g.jsx("span",{className:"text-xs text-gray-400 mt-1 uppercase tracking-widest",children:"স্কোর"})]}),u>=80&&g.jsx("div",{className:"absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce",children:"চমৎকার!"})]}),g.jsxs("div",{className:"text-left space-y-2",children:[g.jsxs("div",{className:"bg-gray-50 p-4 rounded-xl border border-gray-100 min-w-[200px]",children:[g.jsx("p",{className:"text-gray-500 text-sm",children:"সময় লেগেছে"}),g.jsxs("p",{className:"text-xl font-bold text-gray-800",children:[n.timeTakenSeconds," সেকেন্ড"]})]}),g.jsxs("div",{className:"bg-gray-50 p-4 rounded-xl border border-gray-100 min-w-[200px]",children:[g.jsx("p",{className:"text-gray-500 text-sm",children:"সাফল্য"}),g.jsxs("p",{className:`text-xl font-bold ${u>=50?"text-green-600":"text-red-500"}`,children:[u,"%"]})]})]})]}),g.jsx("p",{className:`text-xl font-bold mb-8 ${h} animate-[bounce_2s_infinite]`,children:c}),g.jsxs("div",{className:"flex justify-center gap-4",children:[g.jsx(tr,{onClick:t,variant:"secondary",children:"ড্যাশবোর্ড"}),g.jsx(tr,{onClick:r,children:"আবার চেষ্টা করুন"})]})]}),g.jsxs("div",{className:`space-y-6 transition-all duration-1000 delay-300 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,children:[g.jsx("h3",{className:"text-xl font-bold text-gray-700 pl-2 border-l-4 border-[#8B0000]",children:"উত্তরপত্র মিলিয়ে নিন"}),e.questions.map((m,I)=>g.jsx("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow",children:g.jsxs("div",{className:"flex gap-3",children:[g.jsxs("span",{className:"font-bold text-gray-400",children:["#",I+1]}),g.jsxs("div",{className:"flex-1",children:[g.jsx("p",{className:"font-semibold text-lg mb-3 text-gray-800",children:f(m.text)}),m.imageUrl&&g.jsx("img",{src:m.imageUrl,className:"w-full h-48 object-cover rounded-md mb-3",alt:"Context"}),g.jsx("div",{className:"space-y-2",children:m.options.map((R,k)=>{const V=Number(m.correctAnswerIndex),S=k===V;return g.jsxs("div",{className:`p-3 rounded border flex justify-between items-center ${S?"bg-green-100 border-green-500 text-green-900 font-medium":"bg-white border-gray-200 text-gray-500"}`,children:[g.jsx("span",{children:f(R)}),S&&g.jsx("span",{className:"text-green-600 text-xl font-bold",children:"✓"})]},k)})})]})]})},m.id))]})]})})},OM=({view:n,onSwitch:e,onSuccess:t,onBack:r})=>{const[i,s]=ce.useState(""),[o,a]=ce.useState(""),[u,c]=ce.useState(""),[h,f]=ce.useState(""),[m,I]=ce.useState(""),[R,k]=ce.useState(""),[V,S]=ce.useState(!1),w=async y=>{y.preventDefault(),k(""),S(!0);try{if(n==="SIGNUP"){const E=await rd.createUserWithEmailAndPassword(i,o);E.user&&(await E.user.updateProfile({displayName:u}),await rh.collection("users").doc(E.user.uid).set({fullName:u,username:h,phone:m,email:i,createdAt:new Date,uid:E.user.uid}))}else await rd.signInWithEmailAndPassword(i,o);t()}catch(E){console.error(E);let A="ত্রুটি হয়েছে: "+E.message;E.code==="auth/wrong-password"?A="ভুল পাসওয়ার্ড। আবার চেষ্টা করুন।":E.code==="auth/user-not-found"?A="এই ইমেইলে কোনো অ্যাকাউন্ট পাওয়া যায়নি।":E.code==="auth/email-already-in-use"?A="এই ইমেইলটি ইতিমধ্যেই ব্যবহার করা হয়েছে।":E.code==="auth/weak-password"?A="পাসওয়ার্ডটি খুব দুর্বল (অন্তত ৬ অক্ষর হতে হবে)।":E.code==="auth/invalid-email"&&(A="ইমেইল ঠিকানাটি সঠিক নয়।"),k(A)}finally{S(!1)}},v=()=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),b=()=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"})}),M=()=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),j=()=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),T=()=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})});return g.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-[#FDFBF7] px-4 py-12 relative overflow-hidden animate-fade-in",children:[g.jsx("div",{className:"absolute top-0 left-0 w-64 h-64 bg-[#1CAB55] opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"}),g.jsx("div",{className:"absolute bottom-0 right-0 w-96 h-96 bg-[#8B0000] opacity-5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse",style:{animationDelay:"1s"}}),g.jsxs("button",{onClick:r,className:"absolute top-6 left-6 flex items-center gap-2 text-gray-500 hover:text-[#1CAB55] transition-colors font-medium z-20 group",children:[g.jsx("div",{className:"bg-white p-2 rounded-full shadow-sm group-hover:shadow-md transition-all",children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 transform group-hover:-translate-x-1 transition-transform",viewBox:"0 0 20 20",fill:"currentColor",children:g.jsx("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"})})}),g.jsx("span",{className:"hidden sm:inline",children:"ফিরে যান"})]}),g.jsxs("div",{className:"bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] w-full max-w-md relative z-10 overflow-hidden transition-all duration-500",children:[g.jsx("div",{className:"p-2",children:g.jsxs("div",{className:"flex bg-gray-100/80 p-1.5 rounded-2xl relative",children:[g.jsx("div",{className:`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-xl shadow-md transition-all duration-300 ease-spring ${n==="LOGIN"?"left-1.5":"left-[calc(50%+3px)]"}`}),g.jsx("button",{onClick:n==="SIGNUP"?e:void 0,className:`flex-1 py-3 text-center rounded-xl font-bold text-sm relative z-10 transition-colors duration-300 ${n==="LOGIN"?"text-[#1CAB55]":"text-gray-500 hover:text-gray-700"}`,children:"লগইন"}),g.jsx("button",{onClick:n==="LOGIN"?e:void 0,className:`flex-1 py-3 text-center rounded-xl font-bold text-sm relative z-10 transition-colors duration-300 ${n==="SIGNUP"?"text-[#1CAB55]":"text-gray-500 hover:text-gray-700"}`,children:"সাইন আপ"})]})}),g.jsxs("div",{className:"px-8 pb-8 pt-4",children:[g.jsxs("div",{className:"text-center mb-8 transition-all duration-300",children:[g.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-2 tracking-tight",children:n==="LOGIN"?"স্বাগতম!":"নতুন প্রোফাইল"}),g.jsx("p",{className:"text-sm text-gray-500",children:n==="LOGIN"?"আপনার কুইজ জার্নি শুরু করতে লগইন করুন":"কুইজ মেশিনে যুক্ত হতে তথ্য দিন"})]}),R&&g.jsxs("div",{className:"bg-red-50 border-l-4 border-[#8B0000] text-red-700 p-4 rounded-lg mb-6 text-sm flex items-start gap-2 animate-shake",children:[g.jsx("span",{children:"⚠️"})," ",g.jsx("span",{children:R})]}),g.jsxs("form",{onSubmit:w,className:"flex flex-col gap-4",children:[g.jsxs("div",{className:`flex flex-col gap-4 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${n==="SIGNUP"?"max-h-[300px] opacity-100 scale-100":"max-h-0 opacity-0 scale-95"}`,children:[g.jsxs("div",{className:"relative group",children:[g.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#1CAB55] transition-colors",children:g.jsx(v,{})}),g.jsx("input",{type:"text",required:n==="SIGNUP",placeholder:"আপনার পুরো নাম",className:"w-full pl-12 pr-4 py-3.5 bg-gray-50 text-gray-800 placeholder-gray-400 rounded-xl border border-gray-200 focus:bg-white focus:border-[#1CAB55] focus:ring-4 focus:ring-[#1CAB55]/10 focus:outline-none transition-all duration-200 font-medium",value:u,onChange:y=>c(y.target.value)})]}),g.jsxs("div",{className:"relative group",children:[g.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#1CAB55] transition-colors",children:g.jsx(b,{})}),g.jsx("input",{type:"text",required:n==="SIGNUP",placeholder:"ইউজারনেম",className:"w-full pl-12 pr-4 py-3.5 bg-gray-50 text-gray-800 placeholder-gray-400 rounded-xl border border-gray-200 focus:bg-white focus:border-[#1CAB55] focus:ring-4 focus:ring-[#1CAB55]/10 focus:outline-none transition-all duration-200 font-medium",value:h,onChange:y=>f(y.target.value)})]}),g.jsxs("div",{className:"relative group",children:[g.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#1CAB55] transition-colors",children:g.jsx(M,{})}),g.jsx("input",{type:"tel",required:n==="SIGNUP",placeholder:"মোবাইল নম্বর",className:"w-full pl-12 pr-4 py-3.5 bg-gray-50 text-gray-800 placeholder-gray-400 rounded-xl border border-gray-200 focus:bg-white focus:border-[#1CAB55] focus:ring-4 focus:ring-[#1CAB55]/10 focus:outline-none transition-all duration-200 font-medium",value:m,onChange:y=>I(y.target.value)})]})]}),g.jsxs("div",{className:"relative group z-10",children:[g.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#1CAB55] transition-colors",children:g.jsx(j,{})}),g.jsx("input",{type:"email",required:!0,placeholder:"আপনার ইমেইল অ্যাড্রেস",className:"w-full pl-12 pr-4 py-3.5 bg-gray-50 text-gray-800 placeholder-gray-400 rounded-xl border border-gray-200 focus:bg-white focus:border-[#1CAB55] focus:ring-4 focus:ring-[#1CAB55]/10 focus:outline-none transition-all duration-200 font-medium",value:i,onChange:y=>s(y.target.value)})]}),g.jsxs("div",{className:"relative group z-10",children:[g.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#1CAB55] transition-colors",children:g.jsx(T,{})}),g.jsx("input",{type:"password",required:!0,placeholder:"পাসওয়ার্ড দিন",className:"w-full pl-12 pr-4 py-3.5 bg-gray-50 text-gray-800 placeholder-gray-400 rounded-xl border border-gray-200 focus:bg-white focus:border-[#1CAB55] focus:ring-4 focus:ring-[#1CAB55]/10 focus:outline-none transition-all duration-200 font-medium",value:o,onChange:y=>a(y.target.value)})]}),g.jsx("button",{type:"submit",disabled:V,className:"w-full py-4 mt-2 bg-[#1CAB55] hover:bg-[#159f4d] text-white text-lg font-bold rounded-xl shadow-[0_4px_14px_0_rgba(28,171,85,0.39)] hover:shadow-[0_6px_20px_rgba(28,171,85,0.23)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-200",children:V?g.jsxs("span",{className:"flex items-center justify-center gap-2",children:[g.jsxs("svg",{className:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[g.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),g.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"প্রসেসিং..."]}):n==="LOGIN"?"লগইন করুন":"সাইন আপ করুন"})]})]}),g.jsx("div",{className:"h-1.5 bg-gradient-to-r from-transparent via-[#1CAB55] to-transparent w-full opacity-50"})]})]})},LM=({onBack:n,quizId:e})=>{var i;const t=e?CM(e):vx(),r=e?(i=yx(e))==null?void 0:i.title:"গ্লোবাল লিডারবোর্ড";return g.jsx("div",{className:"min-h-screen bg-brand-cream p-4 animate-fade-in",children:g.jsxs("div",{className:"max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col max-h-[90vh]",children:[g.jsxs("div",{className:"bg-[#1CAB55] p-4 md:p-6 text-white flex justify-between items-center shrink-0 z-10 shadow-md",children:[g.jsxs("div",{children:[g.jsx("h2",{className:"text-xl md:text-2xl font-bold",children:e?"কুইজ লিডারবোর্ড":"লিডারবোর্ড"}),g.jsx("p",{className:"text-xs md:text-sm text-green-100 opacity-80",children:r})]}),g.jsx(tr,{variant:"secondary",onClick:n,className:"py-1 px-3 text-xs md:text-sm font-bold",children:"ফিরে যান"})]}),g.jsx("div",{className:"hidden md:block overflow-auto flex-grow",children:g.jsxs("table",{className:"w-full text-left",children:[g.jsx("thead",{className:"bg-gray-50 border-b sticky top-0 z-10",children:g.jsxs("tr",{children:[g.jsx("th",{className:"p-4 font-semibold text-gray-600",children:"অবস্থান"}),g.jsx("th",{className:"p-4 font-semibold text-gray-600",children:"ব্যবহারকারী"}),g.jsx("th",{className:"p-4 font-semibold text-gray-600",children:"কুইজ"}),g.jsx("th",{className:"p-4 font-semibold text-gray-600 text-right",children:"স্কোর"}),g.jsx("th",{className:"p-4 font-semibold text-gray-600 text-right",children:"সময়"})]})}),g.jsx("tbody",{className:"divide-y divide-gray-100",children:t.length===0?g.jsx("tr",{children:g.jsx("td",{colSpan:5,className:"p-8 text-center text-gray-500",children:"এখনও কেউ কুইজ দেয়নি!"})}):t.map((s,o)=>g.jsxs("tr",{className:`hover:bg-gray-50 transition-colors ${o<3?"bg-yellow-50/50":""}`,children:[g.jsx("td",{className:"p-4",children:g.jsxs("div",{className:`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${o===0?"bg-yellow-100 text-yellow-700":o===1?"bg-gray-100 text-gray-600":o===2?"bg-orange-100 text-orange-700":"text-gray-500"}`,children:["#",o+1]})}),g.jsx("td",{className:"p-4 text-gray-800 font-medium",children:s.userName||s.userEmail.split("@")[0]}),g.jsx("td",{className:"p-4 text-gray-600 text-sm",children:s.quizTitle}),g.jsxs("td",{className:"p-4 font-bold text-[#1CAB55] text-right",children:[s.score,"/",s.totalQuestions]}),g.jsxs("td",{className:"p-4 text-gray-500 text-sm text-right font-mono",children:[s.timeTakenSeconds,"s"]})]},o))})]})}),g.jsx("div",{className:"md:hidden overflow-y-auto p-4 space-y-3 bg-gray-50 flex-grow",children:t.length===0?g.jsxs("div",{className:"text-center text-gray-500 py-10",children:[g.jsx("div",{className:"text-4xl mb-2",children:"🏅"}),g.jsx("p",{children:"এখনও কেউ কুইজ দেয়নি!"})]}):t.map((s,o)=>g.jsxs("div",{className:`p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between ${o<3?"bg-yellow-50 border-yellow-200 shadow-md":"bg-white"}`,children:[g.jsxs("div",{className:"flex items-center gap-3 overflow-hidden",children:[g.jsx("div",{className:`w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full font-bold text-sm shadow-sm ${o===0?"bg-gradient-to-br from-yellow-300 to-yellow-500 text-white":o===1?"bg-gradient-to-br from-gray-300 to-gray-500 text-white":o===2?"bg-gradient-to-br from-orange-300 to-orange-500 text-white":"bg-gray-100 text-gray-500"}`,children:o+1}),g.jsxs("div",{className:"min-w-0",children:[g.jsx("div",{className:"font-bold text-gray-800 text-sm truncate",children:s.userName||s.userEmail.split("@")[0]}),g.jsx("div",{className:"text-[11px] text-gray-500 truncate",children:s.quizTitle})]})]}),g.jsxs("div",{className:"text-right flex-shrink-0 ml-2",children:[g.jsxs("div",{className:"font-extrabold text-[#1CAB55] text-lg leading-tight",children:[s.score,g.jsxs("span",{className:"text-[10px] text-gray-400 font-normal",children:["/",s.totalQuestions]})]}),g.jsxs("div",{className:"text-[10px] text-gray-400 font-mono bg-gray-100 px-1.5 py-0.5 rounded inline-block mt-1",children:[s.timeTakenSeconds,"s"]})]})]},o))})]})})},MM=({userId:n,onBack:e})=>{const t=g_(n);return g.jsx("div",{className:"min-h-screen bg-brand-cream p-4 animate-fade-in",children:g.jsxs("div",{className:"max-w-3xl mx-auto",children:[g.jsxs("div",{className:"flex justify-between items-center mb-6",children:[g.jsx("h2",{className:"text-xl md:text-2xl font-bold text-gray-800",children:"আপনার আগের কুইজসমূহ"}),g.jsx(tr,{onClick:e,variant:"outline",className:"text-sm px-3 py-1",children:"ফিরে যান"})]}),g.jsx("div",{className:"space-y-4",children:t.length===0?g.jsx("p",{className:"text-center text-gray-500 bg-white p-10 rounded-lg shadow-sm border border-gray-100",children:"আপনি এখনও কোনো কুইজ দেননি।"}):t.map(r=>g.jsxs("div",{className:"bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#8B0000] flex justify-between items-center transition-transform hover:-translate-y-0.5",children:[g.jsxs("div",{children:[g.jsx("h3",{className:"font-bold text-base md:text-lg text-gray-800 mb-1",children:r.quizTitle}),g.jsxs("p",{className:"text-xs text-gray-500 flex items-center gap-1",children:[g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3 w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),new Date(r.timestamp).toLocaleDateString("bn-BD")]})]}),g.jsxs("div",{className:"text-right pl-4",children:[g.jsxs("div",{className:"text-2xl font-bold text-[#1CAB55]",children:[r.score,g.jsxs("span",{className:"text-sm text-gray-400",children:["/",r.totalQuestions]})]}),g.jsx("div",{className:"text-[10px] text-gray-400 uppercase font-bold tracking-wider",children:"স্কোর"})]})]},r.id))})]})})};function FM(){const[n,e]=ce.useState(null),[t,r]=ce.useState("HOME"),[i,s]=ce.useState(!0),[o,a]=ce.useState(null),[u,c]=ce.useState(null),[h,f]=ce.useState(null);ce.useEffect(()=>{const V=rd.onAuthStateChanged(async S=>{if(S){let w=S.displayName;try{const v=await rh.collection("users").doc(S.uid).get();if(v.exists){const b=v.data();b!=null&&b.fullName&&(w=b.fullName)}}catch(v){console.error("Error fetching user data:",v)}e({uid:S.uid,email:S.email,displayName:w}),r(v=>v==="HOME"||v==="LOGIN"||v==="SIGNUP"?"DASHBOARD":v)}else e(null),r("HOME");s(!1)});return()=>V()},[]);const m=()=>r("DASHBOARD"),I=V=>{const S=yx(V);S&&(a(S),r("QUIZ_PLAY"))},R=(V,S)=>{c(V),a(S),r("RESULT")},k=V=>{c(V),r("RESULT")};return i?g.jsx("div",{className:"h-screen flex items-center justify-center bg-brand-cream text-[#1CAB55]",children:"লোড হচ্ছে..."}):g.jsxs(g.Fragment,{children:[t==="HOME"&&g.jsx(xM,{onNavigate:V=>r(V)}),(t==="LOGIN"||t==="SIGNUP")&&g.jsx(OM,{view:t,onSwitch:()=>r(t==="LOGIN"?"SIGNUP":"LOGIN"),onSuccess:m,onBack:()=>r("HOME")}),t==="DASHBOARD"&&n&&g.jsx(NM,{user:n,onStartQuiz:I,onViewResults:R,onNavigate:V=>{V==="LEADERBOARD"&&f(null),r(V)},onOpenLeaderboard:V=>{f(V),r("LEADERBOARD")},onLogout:()=>rd.signOut()}),t==="QUIZ_PLAY"&&o&&n&&g.jsx(DM,{quiz:o,userId:n.uid,userEmail:n.email||"Anonymous",userName:n.displayName||"অজানা শিক্ষার্থী",onComplete:k,onCancel:()=>{a(null),r("DASHBOARD")}}),t==="RESULT"&&u&&o&&g.jsx(VM,{attempt:u,quiz:o,onHome:()=>{c(null),a(null),r("DASHBOARD")},onRetry:()=>{r("QUIZ_PLAY")}}),t==="LEADERBOARD"&&g.jsx(LM,{quizId:h,onBack:()=>r("DASHBOARD")}),t==="HISTORY"&&n&&g.jsx(MM,{userId:n.uid,onBack:()=>r("DASHBOARD")})]})}const wx=document.getElementById("root");if(!wx)throw new Error("Could not find root element to mount to");const jM=_f.createRoot(wx);jM.render(g.jsx(pR.StrictMode,{children:g.jsx(FM,{})}));
