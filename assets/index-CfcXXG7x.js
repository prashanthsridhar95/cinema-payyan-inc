var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(e&&(t=e(e=0)),t),s=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,a)=>(a=n==null?{}:e(i(n)),l(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function ee(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(ee,ee):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(ee,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.4`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,w());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}var S=!1,ee=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,S){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(ee),ee=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?w():S=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=re,w=function(){ae.postMessage(null)}}else w=function(){_(re,0)};function oe(t,n){ee=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(ee),ee=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.4`})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=h(),n=p(),r=_();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function d(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d(e),t!==null)return t;e=e.sibling}return null}var f=Object.assign,m=Symbol.for(`react.element`),g=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),ee=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case ee:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function he(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function D(e,t){pe++,fe[pe]=e.current,e.current=t}var ge=me(null),_e=me(null),ve=me(null),ye=me(null);function be(e,t){switch(D(ve,t),D(_e,e),D(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ud(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ud(t),e=Wd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}he(ge),D(ge,e)}function xe(){he(ge),he(_e),he(ve)}function Se(e){e.memoizedState!==null&&D(ye,e);var t=ge.current,n=Wd(t,e.type);t!==n&&(D(_e,e),D(ge,n))}function Ce(e){_e.current===e&&(he(ge),he(_e)),ye.current===e&&(he(ye),ep._currentValue=de)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var De=!1;function Oe(e,t){if(!e||De)return``;De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return Ee(`Activity`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,Ie=t.unstable_now,Le=t.unstable_getCurrentPriorityLevel,Re=t.unstable_ImmediatePriority,ze=t.unstable_UserBlockingPriority,Be=t.unstable_NormalPriority,Ve=t.unstable_LowPriority,He=t.unstable_IdlePriority,Ue=t.log,We=t.unstable_setDisableYieldValue,Ge=null,Ke=null;function qe(e){if(typeof Ue==`function`&&We(e),Ke&&typeof Ke.setStrictMode==`function`)try{Ke.setStrictMode(Ge,e)}catch{}}var Je=Math.clz32?Math.clz32:Ze,Ye=Math.log,Xe=Math.LN2;function Ze(e){return e>>>=0,e===0?32:31-(Ye(e)/Xe|0)|0}var Qe=256,$e=262144,et=4194304;function tt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=tt(n))):i=tt(o):i=tt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=tt(n))):i=tt(o)):i=tt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function rt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function it(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function at(){var e=et;return et<<=1,!(et&62914560)&&(et=4194304),e}function ot(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function st(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ct(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Je(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&lt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function lt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Je(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ut(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function dt(e,t){var n=t&-t;return n=n&42?1:ft(n),(n&(e.suspendedLanes|t))===0?n:0}function ft(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function mt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:gp(e.type)):e}function ht(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var gt=Math.random().toString(36).slice(2),_t=`__reactFiber$`+gt,vt=`__reactProps$`+gt,yt=`__reactContainer$`+gt,bt=`__reactEvents$`+gt,xt=`__reactListeners$`+gt,St=`__reactHandles$`+gt,Ct=`__reactResources$`+gt,wt=`__reactMarker$`+gt;function Tt(e){delete e[_t],delete e[vt],delete e[bt],delete e[xt],delete e[St]}function Et(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pf(e);e!==null;){if(n=e[_t])return n;e=pf(e)}return t}e=n,n=e.parentNode}return null}function Dt(e){if(e=e[_t]||e[yt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ot(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function kt(e){var t=e[Ct];return t||=e[Ct]={hoistableStyles:new Map,hoistableScripts:new Map},t}function At(e){e[wt]=!0}var jt=new Set,Mt={};function Nt(e,t){Pt(e,t),Pt(e+`Capture`,t)}function Pt(e,t){for(Mt[e]=t,e=0;e<t.length;e++)jt.add(t[e])}var Ft=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),It={},Lt={};function Rt(e){return je.call(Lt,e)?!0:je.call(It,e)?!1:Ft.test(e)?Lt[e]=!0:(It[e]=!0,!1)}function zt(e,t,n){if(Rt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Bt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Vt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Ht(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ut(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Wt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gt(e){if(!e._valueTracker){var t=Ut(e)?`checked`:`value`;e._valueTracker=Wt(e,t,``+e[t])}}function Kt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ut(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function qt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Jt=/[\n"\\]/g;function Yt(e){return e.replace(Jt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Xt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Ht(t)):e.value!==``+Ht(t)&&(e.value=``+Ht(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Qt(e,o,Ht(n)):Qt(e,o,Ht(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Ht(s):e.removeAttribute(`name`)}function Zt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Gt(e);return}n=n==null?``:``+Ht(n),t=t==null?n:``+Ht(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Gt(e)}function Qt(e,t,n){t===`number`&&qt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function $t(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function en(e,t,n){if(t!=null&&(t=``+Ht(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Ht(n)}function tn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ue(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Ht(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Gt(e)}function nn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var rn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function an(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||rn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function on(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&an(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&an(e,o,t[o])}function sn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var cn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),ln=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function un(e){return ln.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function dn(){}var fn=null;function pn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mn=null,hn=null;function gn(e){var t=Dt(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Xt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Yt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[vt]||null;if(!a)throw Error(i(90));Xt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Kt(r)}break a;case`textarea`:en(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&$t(e,!!n.multiple,t,!1)}}}var _n=!1;function vn(e,t,n){if(_n)return e(t,n);_n=!0;try{return e(t)}finally{if(_n=!1,(mn!==null||hn!==null)&&(Su(),mn&&(t=mn,e=hn,hn=mn=null,gn(t),e)))for(t=0;t<e.length;t++)gn(e[t])}}function yn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[vt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var bn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),xn=!1;if(bn)try{var Sn={};Object.defineProperty(Sn,`passive`,{get:function(){xn=!0}}),window.addEventListener(`test`,Sn,Sn),window.removeEventListener(`test`,Sn,Sn)}catch{xn=!1}var Cn=null,wn=null,Tn=null;function En(){if(Tn)return Tn;var e,t=wn,n=t.length,r,i=`value`in Cn?Cn.value:Cn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Tn=i.slice(e,1<r?1-r:void 0)}function Dn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function On(){return!0}function kn(){return!1}function An(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?On:kn,this.isPropagationStopped=kn,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=On)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=On)},persist:function(){},isPersistent:On}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mn=An(jn),Nn=f({},jn,{view:0,detail:0}),Pn=An(Nn),Fn,In,Ln,Rn=f({},Nn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Ln&&(Ln&&e.type===`mousemove`?(Fn=e.screenX-Ln.screenX,In=e.screenY-Ln.screenY):In=Fn=0,Ln=e),Fn)},movementY:function(e){return`movementY`in e?e.movementY:In}}),zn=An(Rn),Bn=An(f({},Rn,{dataTransfer:0})),Vn=An(f({},Nn,{relatedTarget:0})),Hn=An(f({},jn,{animationName:0,elapsedTime:0,pseudoElement:0})),Un=An(f({},jn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Wn=An(f({},jn,{data:0})),Gn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Kn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},qn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qn[e])?!!t[e]:!1}function Yn(){return Jn}var Xn=An(f({},Nn,{key:function(e){if(e.key){var t=Gn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Dn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Kn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yn,charCode:function(e){return e.type===`keypress`?Dn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Dn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Zn=An(f({},Rn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Qn=An(f({},Nn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yn})),$n=An(f({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0})),er=An(f({},Rn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),tr=An(f({},jn,{newState:0,oldState:0})),nr=[9,13,27,32],rr=bn&&`CompositionEvent`in window,ir=null;bn&&`documentMode`in document&&(ir=document.documentMode);var ar=bn&&`TextEvent`in window&&!ir,or=bn&&(!rr||ir&&8<ir&&11>=ir),sr=` `,cr=!1;function lr(e,t){switch(e){case`keyup`:return nr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ur(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var dr=!1;function fr(e,t){switch(e){case`compositionend`:return ur(t);case`keypress`:return t.which===32?(cr=!0,sr):null;case`textInput`:return e=t.data,e===sr&&cr?null:e;default:return null}}function pr(e,t){if(dr)return e===`compositionend`||!rr&&lr(e,t)?(e=En(),Tn=wn=Cn=null,dr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return or&&t.locale!==`ko`?null:t.data;default:return null}}var mr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!mr[e.type]:t===`textarea`}function gr(e,t,n,r){mn?hn?hn.push(r):hn=[r]:mn=r,t=Od(t,`onChange`),0<t.length&&(n=new Mn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var _r=null,vr=null;function yr(e){xd(e,0)}function br(e){if(Kt(Ot(e)))return e}function xr(e,t){if(e===`change`)return t}var Sr=!1;if(bn){var Cr;if(bn){var wr=`oninput`in document;if(!wr){var Tr=document.createElement(`div`);Tr.setAttribute(`oninput`,`return;`),wr=typeof Tr.oninput==`function`}Cr=wr}else Cr=!1;Sr=Cr&&(!document.documentMode||9<document.documentMode)}function Er(){_r&&(_r.detachEvent(`onpropertychange`,Dr),vr=_r=null)}function Dr(e){if(e.propertyName===`value`&&br(vr)){var t=[];gr(t,vr,e,pn(e)),vn(yr,t)}}function Or(e,t,n){e===`focusin`?(Er(),_r=t,vr=n,_r.attachEvent(`onpropertychange`,Dr)):e===`focusout`&&Er()}function kr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return br(vr)}function Ar(e,t){if(e===`click`)return br(t)}function jr(e,t){if(e===`input`||e===`change`)return br(t)}function Mr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Nr=typeof Object.is==`function`?Object.is:Mr;function Pr(e,t){if(Nr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!Nr(e[i],t[i]))return!1}return!0}function Fr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ir(e,t){var n=Fr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Fr(n)}}function Lr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=qt(e.document)}return t}function zr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Br=bn&&`documentMode`in document&&11>=document.documentMode,Vr=null,Hr=null,Ur=null,Wr=!1;function Gr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wr||Vr==null||Vr!==qt(r)||(r=Vr,`selectionStart`in r&&zr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&Pr(Ur,r)||(Ur=r,r=Od(Hr,`onSelect`),0<r.length&&(t=new Mn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Vr)))}function Kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var qr={animationend:Kr(`Animation`,`AnimationEnd`),animationiteration:Kr(`Animation`,`AnimationIteration`),animationstart:Kr(`Animation`,`AnimationStart`),transitionrun:Kr(`Transition`,`TransitionRun`),transitionstart:Kr(`Transition`,`TransitionStart`),transitioncancel:Kr(`Transition`,`TransitionCancel`),transitionend:Kr(`Transition`,`TransitionEnd`)},Jr={},Yr={};bn&&(Yr=document.createElement(`div`).style,`AnimationEvent`in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),`TransitionEvent`in window||delete qr.transitionend.transition);function Xr(e){if(Jr[e])return Jr[e];if(!qr[e])return e;var t=qr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yr)return Jr[e]=t[n];return e}var Zr=Xr(`animationend`),Qr=Xr(`animationiteration`),$r=Xr(`animationstart`),ei=Xr(`transitionrun`),ti=Xr(`transitionstart`),ni=Xr(`transitioncancel`),ri=Xr(`transitionend`),ii=new Map,ai=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ai.push(`scrollEnd`);function oi(e,t){ii.set(e,t),Nt(t,[e])}var si=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ci=[],li=0,ui=0;function di(){for(var e=li,t=ui=li=0;t<e;){var n=ci[t];ci[t++]=null;var r=ci[t];ci[t++]=null;var i=ci[t];ci[t++]=null;var a=ci[t];if(ci[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&hi(n,i,a)}}function fi(e,t,n,r){ci[li++]=e,ci[li++]=t,ci[li++]=n,ci[li++]=r,ui|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function pi(e,t,n,r){return fi(e,t,n,r),gi(e)}function mi(e,t){return fi(e,null,null,t),gi(e)}function hi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Je(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function gi(e){if(50<pu)throw pu=0,mu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var _i={};function vi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yi(e,t,n,r){return new vi(e,t,n,r)}function bi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xi(e,t){var n=e.alternate;return n===null?(n=yi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Si(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ci(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)bi(e)&&(s=1);else if(typeof e==`string`)s=Gf(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=yi(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return wi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=yi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=yi(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=yi(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case ee:s=10;break a;case S:s=9;break a;case C:s=11;break a;case re:s=14;break a;case w:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=yi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function wi(e,t,n,r){return e=yi(7,e,r,t),e.lanes=n,e}function Ti(e,t,n){return e=yi(6,e,null,t),e.lanes=n,e}function Ei(e){var t=yi(18,null,null,0);return t.stateNode=e,t}function Di(e,t,n){return t=yi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Oi=new WeakMap;function ki(e,t){if(typeof e==`object`&&e){var n=Oi.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},Oi.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var Ai=[],ji=0,Mi=null,Ni=0,Pi=[],Fi=0,Ii=null,Li=1,Ri=``;function zi(e,t){Ai[ji++]=Ni,Ai[ji++]=Mi,Mi=e,Ni=t}function Bi(e,t,n){Pi[Fi++]=Li,Pi[Fi++]=Ri,Pi[Fi++]=Ii,Ii=e;var r=Li;e=Ri;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var a=32-Je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Li=1<<32-Je(t)+i|n<<i|r,Ri=a+e}else Li=1<<a|n<<i|r,Ri=e}function Vi(e){e.return!==null&&(zi(e,1),Bi(e,1,0))}function Hi(e){for(;e===Mi;)Mi=Ai[--ji],Ai[ji]=null,Ni=Ai[--ji],Ai[ji]=null;for(;e===Ii;)Ii=Pi[--Fi],Pi[Fi]=null,Ri=Pi[--Fi],Pi[Fi]=null,Li=Pi[--Fi],Pi[Fi]=null}function Ui(e,t){Pi[Fi++]=Li,Pi[Fi++]=Ri,Pi[Fi++]=Ii,Li=t.id,Ri=t.overflow,Ii=e}var Wi=null,O=null,k=!1,Gi=null,Ki=!1,qi=Error(i(519));function Ji(e){throw ea(ki(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),qi}function Yi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[_t]=e,t[vt]=r,n){case`dialog`:X(`cancel`,t),X(`close`,t);break;case`iframe`:case`object`:case`embed`:X(`load`,t);break;case`video`:case`audio`:for(n=0;n<yd.length;n++)X(yd[n],t);break;case`source`:X(`error`,t);break;case`img`:case`image`:case`link`:X(`error`,t),X(`load`,t);break;case`details`:X(`toggle`,t);break;case`input`:X(`invalid`,t),Zt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:X(`invalid`,t);break;case`textarea`:X(`invalid`,t),tn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Pd(t.textContent,n)?(r.popover!=null&&(X(`beforetoggle`,t),X(`toggle`,t)),r.onScroll!=null&&X(`scroll`,t),r.onScrollEnd!=null&&X(`scrollend`,t),r.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||Ji(e,!0)}function Xi(e){for(Wi=e.return;Wi;)switch(Wi.tag){case 5:case 31:case 13:Ki=!1;return;case 27:case 3:Ki=!0;return;default:Wi=Wi.return}}function Zi(e){if(e!==Wi)return!1;if(!k)return Xi(e),k=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Gd(e.type,e.memoizedProps)),n=!n),n&&O&&Ji(e),Xi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));O=ff(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));O=ff(e)}else t===27?(t=O,$d(e.type)?(e=df,df=null,O=e):O=t):O=Wi?uf(e.stateNode.nextSibling):null;return!0}function Qi(){O=Wi=null,k=!1}function $i(){var e=Gi;return e!==null&&($l===null?$l=e:$l.push.apply($l,e),Gi=null),e}function ea(e){Gi===null?Gi=[e]:Gi.push(e)}var ta=me(null),na=null,ra=null;function ia(e,t,n){D(ta,t._currentValue),t._currentValue=n}function aa(e){e._currentValue=ta.current,he(ta)}function oa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function sa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),oa(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),oa(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ca(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Nr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ye.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[ep]:e.push(ep))}a=a.return}e!==null&&sa(t,e,n,r),t.flags|=262144}function la(e){for(e=e.firstContext;e!==null;){if(!Nr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ua(e){na=e,ra=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function da(e){return j(na,e)}function A(e,t){return na===null&&ua(e),j(e,t)}function j(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ra===null){if(e===null)throw Error(i(308));ra=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ra=ra.next=t;return n}var fa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},pa=t.unstable_scheduleCallback,ma=t.unstable_NormalPriority,M={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new fa,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&pa(ma,function(){e.controller.abort()})}var _a=null,va=0,ya=0,ba=null;function xa(e,t){if(_a===null){var n=_a=[];va=0,ya=pd(),ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return va++,t.then(Sa,Sa),t}function Sa(){if(--va===0&&_a!==null){ba!==null&&(ba.status=`fulfilled`);var e=_a;_a=null,ya=0,ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var wa=T.S;T.S=function(e,t){nu=Ie(),typeof t==`object`&&t&&typeof t.then==`function`&&xa(e,t),wa!==null&&wa(e,t)};var Ta=me(null);function Ea(){var e=Ta.current;return e===null?W.pooledCache:e}function Da(e,t){t===null?D(Ta,Ta.current):D(Ta,t.pool)}function Oa(){var e=Ea();return e===null?null:{parent:M._currentValue,pool:e}}var ka=Error(i(460)),Aa=Error(i(474)),ja=Error(i(542)),Ma={then:function(){}};function Na(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Pa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(dn,dn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e;default:if(typeof t.status==`string`)t.then(dn,dn);else{if(e=W,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e}throw Ia=t,ka}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ia=e,ka):e}}var Ia=null;function La(){if(Ia===null)throw Error(i(459));var e=Ia;return Ia=null,e}function Ra(e){if(e===ka||e===ja)throw Error(i(483))}var za=null,Ba=0;function Va(e){var t=Ba;return Ba+=1,za===null&&(za=[]),Pa(za,e,t)}function Ha(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ua(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=xi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ti(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===w&&Fa(i)===t.type)?(t=a(t,n.props),Ha(t,n),t.return=e,t):(t=Ci(n.type,n.key,n.props,null,e.mode,r),Ha(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Di(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=wi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ti(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case g:return n=Ci(t.type,t.key,t.props,null,e.mode,n),Ha(n,t),n.return=e,n;case v:return t=Di(t,e.mode,n),t.return=e,t;case w:return t=Fa(t),f(e,t,n)}if(ue(t)||se(t))return t=wi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Va(t),n);if(t.$$typeof===ee)return f(e,A(e,t),n);Ua(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case g:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Fa(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Va(n),r);if(n.$$typeof===ee)return p(e,t,A(e,n),r);Ua(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case g:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Fa(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Va(r),i);if(r.$$typeof===ee)return m(e,t,n,A(t,r),i);Ua(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),k&&zi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return k&&zi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),k&&zi(i,h),l}function _(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),k&&zi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return k&&zi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),k&&zi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case g:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Fa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ha(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=wi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=Ci(o.type,o.key,o.props,null,e.mode,c),Ha(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Di(o,e.mode,c),c.return=e,e=c}return s(e);case w:return o=Fa(o),b(e,r,o,c)}if(ue(o))return h(e,r,o,c);if(se(o)){if(l=se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),_(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Va(o),c);if(o.$$typeof===ee)return b(e,r,A(e,o),c);Ua(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Ti(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ba=0;var i=b(e,t,n,r);return za=null,i}catch(t){if(t===ka||t===ja)throw t;var a=yi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ga=Wa(!0),Ka=Wa(!1),qa=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ya(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=gi(e),hi(e,null,n),t}return fi(e,r,t,n),gi(e)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var eo=!1;function to(){if(eo){var e=ba;if(e!==null)throw e}}function no(e,t,n,r){eo=!1;var i=e.updateQueue;qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var p=s.lane&-536870913,m=p!==s.lane;if(m?(K&p)===p:(r&p)===p){p!==0&&p===ya&&(eo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;p=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,p);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h==`function`?h.call(_,d,p):h,p==null)break a;d=f({},d,p);break a;case 2:qa=!0}}p=s.callback,p!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[p]:m.push(p))}else m={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),ql|=o,e.lanes=o,e.memoizedState=d}}function ro(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function io(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ro(n[e],t)}var ao=me(null),oo=me(0);function N(e,t){e=Kl,D(oo,e),D(ao,t),Kl=e|t.baseLanes}function so(){D(oo,Kl),D(ao,ao.current)}function co(){Kl=oo.current,he(ao),he(oo)}var lo=me(null),uo=null;function fo(e){var t=e.alternate;D(_o,_o.current&1),D(lo,e),uo===null&&(t===null||ao.current!==null||t.memoizedState!==null)&&(uo=e)}function po(e){D(_o,_o.current),D(lo,e),uo===null&&(uo=e)}function mo(e){e.tag===22?(D(_o,_o.current),D(lo,e),uo===null&&(uo=e)):ho(e)}function ho(){D(_o,_o.current),D(lo,lo.current)}function go(e){he(lo),uo===e&&(uo=null),he(_o)}var _o=me(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||sf(n)||cf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=0,P=null,F=null,I=null,bo=!1,xo=!1,So=!1,Co=0,wo=0,To=null,Eo=0;function Do(){throw Error(i(321))}function Oo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nr(e[n],t[n]))return!1;return!0}function ko(e,t,n,r,i,a){return yo=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Us:Ws,So=!1,a=n(r,i),So=!1,xo&&(a=jo(t,n,r,i)),Ao(e),a}function Ao(e){T.H=Hs;var t=F!==null&&F.next!==null;if(yo=0,I=F=P=null,bo=!1,wo=0,To=null,t)throw Error(i(300));e===null||sc||(e=e.dependencies,e!==null&&la(e)&&(sc=!0))}function jo(e,t,n,r){P=e;var a=0;do{if(xo&&(To=null),wo=0,xo=!1,25<=a)throw Error(i(301));if(a+=1,I=F=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}T.H=Gs,o=t(n,r)}while(xo);return o}function Mo(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Ro(t):t,e=e.useState()[0],(F===null?null:F.memoizedState)!==e&&(P.flags|=1024),t}function No(){var e=Co!==0;return Co=0,e}function Po(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function L(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}yo=0,I=F=P=null,xo=!1,wo=Co=0,To=null}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return I===null?P.memoizedState=I=e:I=I.next=e,I}function Io(){if(F===null){var e=P.alternate;e=e===null?null:e.memoizedState}else e=F.next;var t=I===null?P.memoizedState:I.next;if(t!==null)I=t,F=e;else{if(e===null)throw P.alternate===null?Error(i(467)):Error(i(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},I===null?P.memoizedState=I=e:I=I.next=e}return I}function Lo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ro(e){var t=wo;return wo+=1,To===null&&(To=[]),e=Pa(To,e,t),t=P,(I===null?t.memoizedState:I.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Us:Ws),e}function zo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Ro(e);if(e.$$typeof===ee)return da(e)}throw Error(i(438,String(e)))}function Bo(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=P.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Lo(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Vo(e,t){return typeof t==`function`?t(e):t}function Ho(e){return Uo(Io(),F,e)}function Uo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(yo&f)===f:(K&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ya&&(d=!0);else if((yo&p)===p){u=u.next,p===ya&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,P.lanes|=p,ql|=p;f=u.action,So&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,P.lanes|=f,ql|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Nr(o,e.memoizedState)&&(sc=!0,d&&(n=ba,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Wo(e){var t=Io(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Nr(o,t.memoizedState)||(sc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Go(e,t,n){var r=P,a=Io(),o=k;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Nr((F||a).memoizedState,n);if(s&&(a.memoizedState=n,sc=!0),a=a.queue,hs(Jo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||I!==null&&I.memoizedState.tag&1){if(r.flags|=2048,us(9,{destroy:void 0},qo.bind(null,r,a,n,t),null),W===null)throw Error(i(349));o||yo&127||Ko(r,t,n)}return n}function Ko(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=Lo(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qo(e,t,n,r){t.value=n,t.getSnapshot=r,Yo(t)&&Xo(e)}function Jo(e,t,n){return n(function(){Yo(t)&&Xo(e)})}function Yo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nr(e,n)}catch{return!0}}function Xo(e){var t=mi(e,2);t!==null&&_u(t,e,2)}function Zo(e){var t=Fo();if(typeof e==`function`){var n=e;if(e=n(),So){qe(!0);try{n()}finally{qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:e},t}function Qo(e,t,n,r){return e.baseState=n,Uo(e,F,typeof r==`function`?r:Vo)}function $o(e,t,n,r,a){if(zs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};T.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,es(t,o)):(o.next=n.next,t.pending=n.next=o)}}function es(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),ts(e,t,s)}catch(n){R(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),ts(e,t,a)}catch(n){R(e,t,n)}}function ts(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ns(e,t,n)},function(n){return R(e,t,n)}):ns(e,t,n)}function ns(e,t,n){t.status=`fulfilled`,t.value=n,rs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,es(e,n)))}function R(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,rs(t),t=t.next;while(t!==r)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function is(e,t){return t}function as(e,t){if(k){var n=W.formState;if(n!==null){a:{var r=P;if(k){if(O){b:{for(var i=O,a=Ki;i.nodeType!==8;){if(!a){i=null;break b}if(i=uf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){O=uf(i.nextSibling),r=i.data===`F!`;break a}}Ji(r)}r=!1}r&&(t=n[0])}}return n=Fo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},n.queue=r,n=Is.bind(null,P,r),r.dispatch=n,r=Zo(!1),a=Rs.bind(null,P,!1,r.queue),r=Fo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=$o.bind(null,P,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function os(e){return ss(Io(),F,e)}function ss(e,t,n){if(t=Uo(e,t,is)[0],e=Ho(Vo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Ro(t)}catch(e){throw e===ka?ja:e}else r=t;t=Io();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(P.flags|=2048,us(9,{destroy:void 0},cs.bind(null,i,n),null)),[r,a,e]}function cs(e,t){e.action=t}function ls(e){var t=Io(),n=F;if(n!==null)return ss(t,n,e);Io(),t=t.memoizedState,n=Io();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=P.updateQueue,t===null&&(t=Lo(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ds(){return Io().memoizedState}function fs(e,t,n,r){var i=Fo();P.flags|=e,i.memoizedState=us(1|t,{destroy:void 0},n,r===void 0?null:r)}function ps(e,t,n,r){var i=Io();r=r===void 0?null:r;var a=i.memoizedState.inst;F!==null&&r!==null&&Oo(r,F.memoizedState.deps)?i.memoizedState=us(t,a,n,r):(P.flags|=e,i.memoizedState=us(1|t,a,n,r))}function ms(e,t){fs(8390656,8,e,t)}function hs(e,t){ps(2048,8,e,t)}function gs(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=Lo(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _s(e){var t=Io().memoizedState;return gs({ref:t,nextImpl:e}),function(){if(U&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function vs(e,t){return ps(4,2,e,t)}function ys(e,t){return ps(4,4,e,t)}function bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){n=n==null?null:n.concat([e]),ps(4,4,bs.bind(null,t,e),n)}function Ss(){}function Cs(e,t){var n=Io();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Oo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function z(e,t){var n=Io();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Oo(t,r[1]))return r[0];if(r=e(),So){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r}function ws(e,t,n){return n===void 0||yo&1073741824&&!(K&261930)?e.memoizedState=t:(e.memoizedState=n,e=gu(),P.lanes|=e,ql|=e,n)}function Ts(e,t,n,r){return Nr(n,t)?n:ao.current===null?!(yo&42)||yo&1073741824&&!(K&261930)?(sc=!0,e.memoizedState=n):(e=gu(),P.lanes|=e,ql|=e,t):(e=ws(e,n,r),Nr(e,t)||(sc=!0),e)}function Es(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,Rs(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ls(e,t,Ca(c,r),hu(e)):Ls(e,t,r,hu(e))}catch(n){Ls(e,t,{then:function(){},status:`rejected`,reason:n},hu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Ds(){}function Os(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ks(e).queue;Es(e,a,t,de,n===null?Ds:function(){return As(e),n(r)})}function ks(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function As(e){var t=ks(e);t.next===null&&(t=e.alternate.memoizedState),Ls(e,t.next.queue,{},hu())}function js(){return da(ep)}function Ms(){return Io().memoizedState}function Ns(){return Io().memoizedState}function Ps(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=hu();e=Xa(n);var r=Za(t,e,n);r!==null&&(_u(r,t,n),Qa(r,t,n)),t={cache:ha()},e.payload=t;return}t=t.return}}function Fs(e,t,n){var r=hu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e)?Bs(t,n):(n=pi(e,t,n,r),n!==null&&(_u(n,e,r),Vs(n,t,r)))}function Is(e,t,n){Ls(e,t,n,hu())}function Ls(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Bs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Nr(s,o))return fi(e,t,i,0),W===null&&di(),!1}catch{}if(n=pi(e,t,i,r),n!==null)return _u(n,e,r),Vs(n,t,r),!0}return!1}function Rs(e,t,n,r){if(r={lane:2,revertLane:pd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zs(e)){if(t)throw Error(i(479))}else t=pi(e,n,r,2),t!==null&&_u(t,e,2)}function zs(e){var t=e.alternate;return e===P||t!==null&&t===P}function Bs(e,t){xo=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}var Hs={readContext:da,use:zo,useCallback:Do,useContext:Do,useEffect:Do,useImperativeHandle:Do,useLayoutEffect:Do,useInsertionEffect:Do,useMemo:Do,useReducer:Do,useRef:Do,useState:Do,useDebugValue:Do,useDeferredValue:Do,useTransition:Do,useSyncExternalStore:Do,useId:Do,useHostTransitionStatus:Do,useFormState:Do,useActionState:Do,useOptimistic:Do,useMemoCache:Do,useCacheRefresh:Do};Hs.useEffectEvent=Do;var Us={readContext:da,use:zo,useCallback:function(e,t){return Fo().memoizedState=[e,t===void 0?null:t],e},useContext:da,useEffect:ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),fs(4194308,4,bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){fs(4,2,e,t)},useMemo:function(e,t){var n=Fo();t=t===void 0?null:t;var r=e();if(So){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fo();if(n!==void 0){var i=n(t);if(So){qe(!0);try{n(t)}finally{qe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fs.bind(null,P,e),[r.memoizedState,e]},useRef:function(e){var t=Fo();return e={current:e},t.memoizedState=e},useState:function(e){e=Zo(e);var t=e.queue,n=Is.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ss,useDeferredValue:function(e,t){return ws(Fo(),e,t)},useTransition:function(){var e=Zo(!1);return e=Es.bind(null,P,e.queue,!0,!1),Fo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=P,a=Fo();if(k){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),W===null)throw Error(i(349));K&127||Ko(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ms(Jo.bind(null,r,o,e),[e]),r.flags|=2048,us(9,{destroy:void 0},qo.bind(null,r,o,n,t),null),n},useId:function(){var e=Fo(),t=W.identifierPrefix;if(k){var n=Ri,r=Li;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Eo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:js,useFormState:as,useActionState:as,useOptimistic:function(e){var t=Fo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:Bo,useCacheRefresh:function(){return Fo().memoizedState=Ps.bind(null,P)},useEffectEvent:function(e){var t=Fo(),n={impl:e};return t.memoizedState=n,function(){if(U&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ws={readContext:da,use:zo,useCallback:Cs,useContext:da,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:z,useReducer:Ho,useRef:ds,useState:function(){return Ho(Vo)},useDebugValue:Ss,useDeferredValue:function(e,t){return Ts(Io(),F.memoizedState,e,t)},useTransition:function(){var e=Ho(Vo)[0],t=Io().memoizedState;return[typeof e==`boolean`?e:Ro(e),t]},useSyncExternalStore:Go,useId:Ms,useHostTransitionStatus:js,useFormState:os,useActionState:os,useOptimistic:function(e,t){return Qo(Io(),F,e,t)},useMemoCache:Bo,useCacheRefresh:Ns};Ws.useEffectEvent=_s;var Gs={readContext:da,use:zo,useCallback:Cs,useContext:da,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:z,useReducer:Wo,useRef:ds,useState:function(){return Wo(Vo)},useDebugValue:Ss,useDeferredValue:function(e,t){var n=Io();return F===null?ws(n,e,t):Ts(n,F.memoizedState,e,t)},useTransition:function(){var e=Wo(Vo)[0],t=Io().memoizedState;return[typeof e==`boolean`?e:Ro(e),t]},useSyncExternalStore:Go,useId:Ms,useHostTransitionStatus:js,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var n=Io();return F===null?(n.baseState=e,[e,n.queue.dispatch]):Qo(n,F,e,t)},useMemoCache:Bo,useCacheRefresh:Ns};Gs.useEffectEvent=_s;function Ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:f({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=hu(),i=Xa(r);i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(_u(t,e,r),Qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=hu(),i=Xa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(_u(t,e,r),Qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=hu(),r=Xa(n);r.tag=2,t!=null&&(r.callback=t),t=Za(e,r,n),t!==null&&(_u(t,e,n),Qa(t,e,n))}};function Js(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Pr(n,r)||!Pr(i,a):!0}function Ys(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function Xs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=f({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Zs(e){si(e)}function Qs(e){console.error(e)}function $s(e){si(e)}function ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){return n=Xa(n),n.tag=3,n.payload={element:null},n.callback=function(){ec(e,t)},n}function rc(e){return e=Xa(e),e.tag=3,e}function ic(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){tc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){tc(t,n,r),typeof i!=`function`&&(au===null?au=new Set([this]):au.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ac(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ca(t,n,a,!0),n=lo.current,n!==null){switch(n.tag){case 31:case 13:return uo===null?ku():n.alternate===null&&J===0&&(J=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),qu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),qu(e,r,a)),!1}throw Error(i(435,n.tag))}return qu(e,r,a),ku(),!1}if(k)return t=lo.current,t===null?(r!==qi&&(t=Error(i(423),{cause:r}),ea(ki(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=ki(r,n),a=nc(e.stateNode,r,a),$a(e,a),J!==4&&(J=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==qi&&(e=Error(i(422),{cause:r}),ea(ki(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=ki(o,n),Ql===null?Ql=[o]:Ql.push(o),J!==4&&(J=2),t===null)return!0;r=ki(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=nc(n.stateNode,r,e),$a(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(au===null||!au.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=rc(a),ic(a,e,n,r),$a(n,a),!1}n=n.return}while(n!==null);return!1}var oc=Error(i(461)),sc=!1;function cc(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ua(t),r=ko(e,t,n,o,a,i),s=No(),e!==null&&!sc?(Po(e,t,i),Nc(e,t,i)):(k&&s&&Vi(t),t.flags|=1,cc(e,t,r,i),t.child)}function uc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!bi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,dc(e,t,a,r,i)):(e=Ci(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Pc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Pr:n,n(o,r)&&e.ref===t.ref)return Nc(e,t,i)}return t.flags|=1,e=xi(a,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Pr(a,r)&&e.ref===t.ref)if(sc=!1,t.pendingProps=r=a,Pc(e,i))e.flags&131072&&(sc=!0);else return t.lanes=e.lanes,Nc(e,t,i)}return yc(e,t,n,r,i)}function fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Da(t,a===null?null:a.cachePool),a===null?so():N(t,a),mo(t);else return r=t.lanes=536870912,mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Da(t,null),so(),ho(t)):(Da(t,a.cachePool),N(t,a),ho(t),t.memoizedState=null);return cc(e,t,i,n),t.child}function pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mc(e,t,n,r,i){var a=Ea();return a=a===null?null:{parent:M._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Da(t,null),so(),mo(t),e!==null&&ca(e,t,r,!0),t.childLanes=i,null}function hc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gc(e,t,n){return Ga(t,e.child,null,n),e=hc(t,t.pendingProps),e.flags|=2,go(t),t.memoizedState=null,e}function _c(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(k){if(r.mode===`hidden`)return e=hc(t,r),t.lanes=536870912,pc(null,e);if(po(t),(e=O)?(e=of(e,Ki),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ii===null?null:{id:Li,overflow:Ri},retryLane:536870912,hydrationErrors:null},n=Ei(e),n.return=t,t.child=n,Wi=t,O=null)):e=null,e===null)throw Ji(t);return t.lanes=536870912,null}return hc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(po(t),a)if(t.flags&256)t.flags&=-257,t=gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(sc||ca(e,t,n,!1),a=(n&e.childLanes)!==0,sc||a){if(r=W,r!==null&&(s=dt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,mi(e,s),_u(r,e,s),oc;ku(),t=gc(e,t,n)}else e=o.treeContext,O=uf(s.nextSibling),Wi=t,k=!0,Gi=null,Ki=!1,e!==null&&Ui(t,e),t=hc(t,r),t.flags|=4096;return t}return e=xi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function yc(e,t,n,r,i){return ua(t),n=ko(e,t,n,r,void 0,i),r=No(),e!==null&&!sc?(Po(e,t,i),Nc(e,t,i)):(k&&r&&Vi(t),t.flags|=1,cc(e,t,n,i),t.child)}function bc(e,t,n,r,i,a){return ua(t),t.updateQueue=null,n=jo(t,r,n,i),Ao(e),r=No(),e!==null&&!sc?(Po(e,t,a),Nc(e,t,a)):(k&&r&&Vi(t),t.flags|=1,cc(e,t,n,a),t.child)}function xc(e,t,n,r,i){if(ua(t),t.stateNode===null){var a=_i,o=n.contextType;typeof o==`object`&&o&&(a=da(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=qs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ja(t),o=n.contextType,a.context=typeof o==`object`&&o?da(o):_i,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ks(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&qs.enqueueReplaceState(a,a.state,null),no(t,r,a,i),to(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Xs(n,s);a.props=c;var l=a.context,u=n.contextType;o=_i,typeof u==`object`&&u&&(o=da(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ys(t,a,r,o),qa=!1;var f=t.memoizedState;a.state=f,no(t,r,a,i),to(),l=t.memoizedState,s||f!==l||qa?(typeof d==`function`&&(Ks(t,n,d,r),l=t.memoizedState),(c=qa||Js(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ya(e,t),o=t.memoizedProps,u=Xs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=_i,typeof l==`object`&&l&&(c=da(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ys(t,a,r,c),qa=!1,f=t.memoizedState,a.state=f,no(t,r,a,i),to();var p=t.memoizedState;o!==d||f!==p||qa||e!==null&&e.dependencies!==null&&la(e.dependencies)?(typeof s==`function`&&(Ks(t,n,s,r),p=t.memoizedState),(u=qa||Js(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&la(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,vc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,n,i)):cc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Nc(e,t,i),e}function Sc(e,t,n,r){return Qi(),t.flags|=256,cc(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:Oa()}}function Tc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Xl),e}function Ec(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(_o.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(k){if(a?fo(t):ho(t),(e=O)?(e=of(e,Ki),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ii===null?null:{id:Li,overflow:Ri},retryLane:536870912,hydrationErrors:null},n=Ei(e),n.return=t,t.child=n,Wi=t,O=null)):e=null,e===null)throw Ji(t);return cf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(ho(t),a=t.mode,c=Oc({mode:`hidden`,children:c},a),r=wi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,s,n),t.memoizedState=Cc,pc(null,r)):(fo(t),Dc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(fo(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState===null?(ho(t),c=r.fallback,a=t.mode,r=Oc({mode:`visible`,children:r.children},a),c=wi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ga(t,e.child,null,n),r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,s,n),t.memoizedState=Cc,t=pc(null,r)):(ho(t),t.child=e.child,t.flags|=128,t=null);else if(fo(t),cf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,ea({value:r,source:null,stack:null}),t=kc(e,t,n)}else if(sc||ca(e,t,n,!1),s=(n&e.childLanes)!==0,sc||s){if(s=W,s!==null&&(r=dt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,mi(e,r),_u(s,e,r),oc;sf(c)||ku(),t=kc(e,t,n)}else sf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,O=uf(c.nextSibling),Wi=t,k=!0,Gi=null,Ki=!1,e!==null&&Ui(t,e),t=Dc(t,r.children),t.flags|=4096);return t}return a?(ho(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=xi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=wi(c,a,n,null),c.flags|=2):c=xi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,pc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=wc(n):(a=c.cachePool,a===null?a=Oa():(l=M._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Tc(e,s,n),t.memoizedState=Cc,pc(e.child,r)):(fo(t),n=e.child,e=n.sibling,n=xi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=Oc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=yi(22,e,null,t),e.lanes=0,e}function kc(e,t,n){return Ga(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),oa(e.return,t,n)}function jc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Mc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=_o.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,D(_o,o),cc(e,t,r,n),r=k?Ni:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,n,t);else if(e.tag===19)Ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jc(t,!0,n,null,a,r);break;case`together`:jc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Nc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ql|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ca(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=xi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&la(e))):!0}function Fc(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ia(t,M,e.memoizedState.cache),Qi();break;case 27:case 5:Se(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ia(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,po(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(fo(t),e=Nc(e,t,n),e===null?null:e.sibling):Ec(e,t,n):(fo(t),t.flags|=128,null);fo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ca(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Mc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(_o,_o.current),r)break;return null;case 22:return t.lanes=0,fc(e,t,n,t.pendingProps);case 24:ia(t,M,e.memoizedState.cache)}return Nc(e,t,n)}function Ic(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)sc=!0;else{if(!Pc(e,n)&&!(t.flags&128))return sc=!1,Fc(e,t,n);sc=!!(e.flags&131072)}else sc=!1,k&&t.flags&1048576&&Bi(t,Ni,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e==`function`)bi(e)?(r=Xs(e,r),t.tag=1,t=xc(null,t,e,r,n)):(t.tag=0,t=yc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=lc(null,t,e,r,n);break a}else if(a===re){t.tag=14,t=uc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(i(306,t,``))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Xs(r,t.pendingProps),xc(e,t,r,a,n);case 3:a:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ya(e,t),no(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ia(t,M,r),r!==o.cache&&sa(t,[M],n,!0),to(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Sc(e,t,r,n);break a}else if(r!==a){a=ki(Error(i(424)),t),ea(a),t=Sc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(O=uf(e.firstChild),Wi=t,k=!0,Gi=null,Ki=!0,n=Ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Qi(),r===a){t=Nc(e,t,n);break a}cc(e,t,r,n)}t=t.child}return t;case 26:return vc(e,t),e===null?(n=jf(t.type,null,t.pendingProps,null))?t.memoizedState=n:k||(n=t.type,e=t.pendingProps,r=Hd(ve.current).createElement(n),r[_t]=t,r[vt]=e,Id(r,n,e),At(r),t.stateNode=r):t.memoizedState=jf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&k&&(r=t.stateNode=mf(t.type,t.pendingProps,ve.current),Wi=t,Ki=!0,a=O,$d(t.type)?(df=a,O=uf(r.firstChild)):O=a),cc(e,t,t.pendingProps.children,n),vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&k&&((a=r=O)&&(r=rf(r,t.type,t.pendingProps,Ki),r===null?a=!1:(t.stateNode=r,Wi=t,O=uf(r.firstChild),Ki=!1,a=!0)),a||Ji(t)),Se(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Gd(a,o)?r=null:s!==null&&Gd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=ko(e,t,Mo,null,null,n),ep._currentValue=a),vc(e,t),cc(e,t,r,n),t.child;case 6:return e===null&&k&&((e=n=O)&&(n=af(n,t.pendingProps,Ki),n===null?e=!1:(t.stateNode=n,Wi=t,O=null,e=!0)),e||Ji(t)),null;case 13:return Ec(e,t,n);case 4:return be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ga(t,null,r,n):cc(e,t,r,n),t.child;case 11:return lc(e,t,t.type,t.pendingProps,n);case 7:return cc(e,t,t.pendingProps,n),t.child;case 8:return cc(e,t,t.pendingProps.children,n),t.child;case 12:return cc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ia(t,t.type,r.value),cc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ua(t),a=da(a),r=r(a),t.flags|=1,cc(e,t,r,n),t.child;case 14:return uc(e,t,t.type,t.pendingProps,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 19:return Mc(e,t,n);case 31:return _c(e,t,n);case 22:return fc(e,t,n,t.pendingProps);case 24:return ua(t),r=da(M),e===null?(a=Ea(),a===null&&(a=W,o=ha(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ja(t),ia(t,M,a)):((e.lanes&n)!==0&&(Ya(e,t),no(t,null,null,n),to()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ia(t,M,r),r!==a.cache&&sa(t,[M],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ia(t,M,r))),cc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Lc(e){e.flags|=4}function Rc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Eu())e.flags|=8192;else throw Ia=Ma,Aa}else e.flags&=-16777217}function zc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Kf(t))if(Eu())e.flags|=8192;else throw Ia=Ma,Aa}function Bc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:at(),e.lanes|=t,Zl|=t)}function Vc(e,t){if(!k)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function B(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hc(e,t,n){var r=t.pendingProps;switch(Hi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return B(t),null;case 1:return B(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),aa(M),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Zi(t)?Lc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$i())),B(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Lc(t),o===null?(B(t),Rc(t,a,null,r,n)):(B(t),zc(t,o))):o?o===e.memoizedState?(B(t),t.flags&=-16777217):(Lc(t),B(t),zc(t,o)):(e=e.memoizedProps,e!==r&&Lc(t),B(t),Rc(t,a,e,r,n)),null;case 27:if(Ce(t),n=ve.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return B(t),null}e=ge.current,Zi(t)?Yi(t,e):(e=mf(a,r,n),t.stateNode=e,Lc(t))}return B(t),null;case 5:if(Ce(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return B(t),null}if(o=ge.current,Zi(t))Yi(t,o);else{var s=Hd(ve.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[_t]=t,o[vt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Id(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Lc(t)}}return B(t),Rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ve.current,Zi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Wi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[_t]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Pd(e.nodeValue,n)),e||Ji(t,!0)}else e=Hd(e).createTextNode(r),e[_t]=t,t.stateNode=e}return B(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Zi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[_t]=t}else Qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),e=!1}else n=$i(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(go(t),t):(go(t),null);if(t.flags&128)throw Error(i(558))}return B(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[_t]=t}else Qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),a=!1}else a=$i(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(go(t),t):(go(t),null)}return go(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bc(t,t.updateQueue),B(t),null);case 4:return xe(),e===null&&wd(t.stateNode.containerInfo),B(t),null;case 10:return aa(t.type),B(t),null;case 19:if(he(_o),r=t.memoizedState,r===null)return B(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Vc(r,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=vo(e),o!==null){for(t.flags|=128,Vc(r,!1),e=o.updateQueue,t.updateQueue=e,Bc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Si(n,e),n=n.sibling;return D(_o,_o.current&1|2),k&&zi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ie()>ru&&(t.flags|=128,a=!0,Vc(r,!1),t.lanes=4194304)}else{if(!a)if(e=vo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Bc(t,e),Vc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!k)return B(t),null}else 2*Ie()-r.renderingStartTime>ru&&n!==536870912&&(t.flags|=128,a=!0,Vc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(B(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ie(),e.sibling=null,n=_o.current,D(_o,a?n&1|2:n&1),k&&zi(t,r.treeForkCount),e);case 22:case 23:return go(t),co(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(B(t),t.subtreeFlags&6&&(t.flags|=8192)):B(t),n=t.updateQueue,n!==null&&Bc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&he(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),aa(M),B(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Uc(e,t){switch(Hi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return aa(M),xe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(go(t),t.alternate===null)throw Error(i(340));Qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(go(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(_o),null;case 4:return xe(),null;case 10:return aa(t.type),null;case 22:case 23:return go(t),co(),e!==null&&he(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return aa(M),null;case 25:return null;default:return null}}function Wc(e,t){switch(Hi(t),t.tag){case 3:aa(M),xe();break;case 26:case 27:case 5:Ce(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&go(t);break;case 13:go(t);break;case 19:he(_o);break;case 10:aa(t.type);break;case 22:case 23:go(t),co(),e!==null&&he(Ta);break;case 24:aa(M)}}function Gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Y(t,t.return,e)}}function Kc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Y(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Y(t,t.return,e)}}function qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{io(t,n)}catch(t){Y(e,e.return,t)}}}function Jc(e,t,n){n.props=Xs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Y(e,t,n)}}function Yc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Y(e,t,n)}}function Xc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Y(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Y(e,t,n)}else n.current=null}function Zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Y(e,e.return,t)}}function Qc(e,t,n){try{var r=e.stateNode;Ld(r,e.type,n,t),r[vt]=t}catch(t){Y(e,e.return,t)}}function $c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$d(e.type)||e.tag===4}function el(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$d(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dn));else if(r!==4&&(r===27&&$d(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&$d(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Id(t,r,n),t[_t]=e,t[vt]=n}catch(t){Y(e,e.return,t)}}var il=!1,al=!1,ol=!1,sl=typeof WeakSet==`function`?WeakSet:Set,cl=null;function ll(e,t){if(e=e.containerInfo,Bd=lp,e=Rr(e),zr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Vd={focusedElem:e,selectionRange:n},lp=!1,cl=t;cl!==null;)if(t=cl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,cl=e;else for(;cl!==null;){switch(t=cl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Xs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Y(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)nf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:nf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,cl=e;break}cl=t.return}}function ul(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Cl(e,n),r&4&&Gc(5,n);break;case 1:if(Cl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Y(n,n.return,e)}else{var i=Xs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Y(n,n.return,e)}}r&64&&qc(n),r&512&&Yc(n,n.return);break;case 3:if(Cl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{io(e,t)}catch(e){Y(n,n.return,e)}}break;case 27:t===null&&r&4&&rl(n);case 26:case 5:Cl(e,n),t===null&&r&4&&Zc(n),r&512&&Yc(n,n.return);break;case 12:Cl(e,n);break;case 31:Cl(e,n),r&4&&hl(e,n);break;case 13:Cl(e,n),r&4&&gl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Xu.bind(null,n),lf(e,n))));break;case 22:if(r=n.memoizedState!==null||il,!r){t=t!==null&&t.memoizedState!==null||al,i=il;var a=al;il=r,(al=t)&&!a?Tl(e,n,(n.subtreeFlags&8772)!=0):Cl(e,n),il=i,al=a}break;case 30:break;default:Cl(e,n)}}function dl(e){var t=e.alternate;t!==null&&(e.alternate=null,dl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var V=null,fl=!1;function pl(e,t,n){for(n=n.child;n!==null;)ml(e,t,n),n=n.sibling}function ml(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount==`function`)try{Ke.onCommitFiberUnmount(Ge,n)}catch{}switch(n.tag){case 26:al||Xc(n,t),pl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:al||Xc(n,t);var r=V,i=fl;$d(n.type)&&(V=n.stateNode,fl=!1),pl(e,t,n),hf(n.stateNode),V=r,fl=i;break;case 5:al||Xc(n,t);case 6:if(r=V,i=fl,V=null,pl(e,t,n),V=r,fl=i,V!==null)if(fl)try{(V.nodeType===9?V.body:V.nodeName===`HTML`?V.ownerDocument.body:V).removeChild(n.stateNode)}catch(e){Y(n,t,e)}else try{V.removeChild(n.stateNode)}catch(e){Y(n,t,e)}break;case 18:V!==null&&(fl?(e=V,ef(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Fp(e)):ef(V,n.stateNode));break;case 4:r=V,i=fl,V=n.stateNode.containerInfo,fl=!0,pl(e,t,n),V=r,fl=i;break;case 0:case 11:case 14:case 15:Kc(2,n,t),al||Kc(4,n,t),pl(e,t,n);break;case 1:al||(Xc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Jc(n,t,r)),pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:al=(r=al)||n.memoizedState!==null,pl(e,t,n),al=r;break;default:pl(e,t,n)}}function hl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fp(e)}catch(e){Y(t,t.return,e)}}}function gl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fp(e)}catch(e){Y(t,t.return,e)}}function _l(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sl),t;default:throw Error(i(435,e.tag))}}function vl(e,t){var n=_l(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Zu.bind(null,e,t);t.then(r,r)}})}function yl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if($d(c.type)){V=c.stateNode,fl=!1;break a}break;case 5:V=c.stateNode,fl=!1;break a;case 3:case 4:V=c.stateNode.containerInfo,fl=!0;break a}c=c.return}if(V===null)throw Error(i(160));ml(o,s,a),V=null,fl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)xl(t,e),t=t.sibling}var bl=null;function xl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yl(t,e),H(e),r&4&&(Kc(3,e,e.return),Gc(3,e),Kc(5,e,e.return));break;case 1:yl(t,e),H(e),r&512&&(al||n===null||Xc(n,n.return)),r&64&&il&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=bl;if(yl(t,e),H(e),r&512&&(al||n===null||Xc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[wt]||o[_t]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Id(o,r,n),o[_t]=e,At(o),r=o;break a;case`link`:var s=Uf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Id(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Uf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Id(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[_t]=e,At(o),r=o}e.stateNode=r}else Wf(a,e.type,e.stateNode);else e.stateNode=Rf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Wf(a,e.type,e.stateNode):Rf(a,r,e.memoizedProps))}break;case 27:yl(t,e),H(e),r&512&&(al||n===null||Xc(n,n.return)),n!==null&&r&4&&Qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(yl(t,e),H(e),r&512&&(al||n===null||Xc(n,n.return)),e.flags&32){a=e.stateNode;try{nn(a,``)}catch(t){Y(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(ol=!0);break;case 6:if(yl(t,e),H(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Y(e,e.return,t)}}break;case 3:if(Hf=null,a=bl,bl=vf(t.containerInfo),yl(t,e),bl=a,H(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fp(t.containerInfo)}catch(t){Y(e,e.return,t)}ol&&(ol=!1,Sl(e));break;case 4:r=bl,bl=vf(e.stateNode.containerInfo),yl(t,e),H(e),bl=r;break;case 12:yl(t,e),H(e);break;case 31:yl(t,e),H(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,vl(e,r)));break;case 13:yl(t,e),H(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(tu=Ie()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,vl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=il,d=al;if(il=u||a,al=d||l,yl(t,e),al=d,il=u,H(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||il||al||wl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Y(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Y(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?tf(m,!0):tf(l.stateNode,!1)}catch(e){Y(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,vl(e,n))));break;case 19:yl(t,e),H(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,vl(e,r)));break;case 30:break;case 21:break;default:yl(t,e),H(e)}}function H(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($c(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;nl(e,el(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(nn(o,``),n.flags&=-33),nl(e,el(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;tl(e,el(e),s);break;default:throw Error(i(161))}}catch(t){Y(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Cl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ul(e,t.alternate,t),t=t.sibling}function wl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kc(4,t,t.return),wl(t);break;case 1:Xc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Jc(t,t.return,n),wl(t);break;case 27:hf(t.stateNode);case 26:case 5:Xc(t,t.return),wl(t);break;case 22:t.memoizedState===null&&wl(t);break;case 30:wl(t);break;default:wl(t)}e=e.sibling}}function Tl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Tl(i,a,n),Gc(4,a);break;case 1:if(Tl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Y(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)ro(c[i],s)}catch(e){Y(r,r.return,e)}}n&&o&64&&qc(a),Yc(a,a.return);break;case 27:rl(a);case 26:case 5:Tl(i,a,n),n&&r===null&&o&4&&Zc(a),Yc(a,a.return);break;case 12:Tl(i,a,n);break;case 31:Tl(i,a,n),n&&o&4&&hl(i,a);break;case 13:Tl(i,a,n),n&&o&4&&gl(i,a);break;case 22:a.memoizedState===null&&Tl(i,a,n),Yc(a,a.return);break;case 30:break;default:Tl(i,a,n)}t=t.sibling}}function El(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function Dl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function Ol(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kl(e,t,n,r),t=t.sibling}function kl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ol(e,t,n,r),i&2048&&Gc(9,t);break;case 1:Ol(e,t,n,r);break;case 3:Ol(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(i&2048){Ol(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Y(t,t.return,e)}}else Ol(e,t,n,r);break;case 31:Ol(e,t,n,r);break;case 13:Ol(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Ol(e,t,n,r):(a._visibility|=2,Al(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Ol(e,t,n,r):jl(e,t),i&2048&&El(o,t);break;case 24:Ol(e,t,n,r),i&2048&&Dl(t.alternate,t);break;default:Ol(e,t,n,r)}}function Al(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Al(a,o,s,c,i),Gc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Al(a,o,s,c,i)):u._visibility&2?Al(a,o,s,c,i):jl(a,o),i&&l&2048&&El(o.alternate,o);break;case 24:Al(a,o,s,c,i),i&&l&2048&&Dl(o.alternate,o);break;default:Al(a,o,s,c,i)}t=t.sibling}}function jl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:jl(n,r),i&2048&&El(r.alternate,r);break;case 24:jl(n,r),i&2048&&Dl(r.alternate,r);break;default:jl(n,r)}t=t.sibling}}var Ml=8192;function Nl(e,t,n){if(e.subtreeFlags&Ml)for(e=e.child;e!==null;)Pl(e,t,n),e=e.sibling}function Pl(e,t,n){switch(e.tag){case 26:Nl(e,t,n),e.flags&Ml&&e.memoizedState!==null&&qf(n,bl,e.memoizedState,e.memoizedProps);break;case 5:Nl(e,t,n);break;case 3:case 4:var r=bl;bl=vf(e.stateNode.containerInfo),Nl(e,t,n),bl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ml,Ml=16777216,Nl(e,t,n),Ml=r):Nl(e,t,n));break;default:Nl(e,t,n)}}function Fl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];cl=r,zl(r,e)}Fl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ll(e),e=e.sibling}function Ll(e){switch(e.tag){case 0:case 11:case 15:Il(e),e.flags&2048&&Kc(9,e,e.return);break;case 3:Il(e);break;case 12:Il(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Rl(e)):Il(e);break;default:Il(e)}}function Rl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];cl=r,zl(r,e)}Fl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kc(8,t,t.return),Rl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Rl(t));break;default:Rl(t)}e=e.sibling}}function zl(e,t){for(;cl!==null;){var n=cl;switch(n.tag){case 0:case 11:case 15:Kc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,cl=r;else a:for(n=e;cl!==null;){r=cl;var i=r.sibling,a=r.return;if(dl(r),r===n){cl=null;break a}if(i!==null){i.return=a,cl=i;break a}cl=a}}}var Bl={getCacheForType:function(e){var t=da(M),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return da(M).controller.signal}},Vl=typeof WeakMap==`function`?WeakMap:Map,U=0,W=null,G=null,K=0,q=0,Hl=null,Ul=!1,Wl=!1,Gl=!1,Kl=0,J=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=0,Ql=null,$l=null,eu=!1,tu=0,nu=0,ru=1/0,iu=null,au=null,ou=0,su=null,cu=null,lu=0,uu=0,du=null,fu=null,pu=0,mu=null;function hu(){return U&2&&K!==0?K&-K:T.T===null?mt():pd()}function gu(){if(Xl===0)if(!(K&536870912)||k){var e=$e;$e<<=1,!($e&3932160)&&($e=262144),Xl=e}else Xl=536870912;return e=lo.current,e!==null&&(e.flags|=32),Xl}function _u(e,t,n){(e===W&&(q===2||q===9)||e.cancelPendingCommit!==null)&&(wu(e,0),xu(e,K,Xl,!1)),st(e,n),(!(U&2)||e!==W)&&(e===W&&(!(U&2)&&(Jl|=n),J===4&&xu(e,K,Xl,!1)),ad(e))}function vu(e,t,n){if(U&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||rt(e,t),a=r?Mu(e,t):Au(e,t,!0),o=r;do{if(a===0){Wl&&!r&&xu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!bu(n)){a=Au(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Ql;var l=c.current.memoizedState.isDehydrated;if(l&&(wu(c,s).flags|=256),s=Au(c,s,!1),s!==2){if(Gl&&!l){c.errorRecoveryDisabledLanes|=o,Jl|=o,a=4;break a}o=$l,$l=a,o!==null&&($l===null?$l=o:$l.push.apply($l,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){wu(e,0),xu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:xu(r,t,Xl,!Ul);break a;case 2:$l=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=tu+300-Ie(),10<a)){if(xu(r,t,Xl,!Ul),nt(r,0,!0)!==0)break a;lu=t,r.timeoutHandle=Jd(yu.bind(null,r,n,$l,iu,eu,t,Xl,Jl,Zl,Ul,o,`Throttled`,-0,0),a);break a}yu(r,n,$l,iu,eu,t,Xl,Jl,Zl,Ul,o,null,-0,0)}}break}while(1);ad(e)}function yu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},Pl(t,a,d);var m=(a&62914560)===a?tu-Ie():(a&4194048)===a?nu-Ie():0;if(m=Yf(d,m),m!==null){lu=a,e.cancelPendingCommit=m(zu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),xu(e,a,o,!l);return}}zu(e,t,a,n,r,i,o,s,c)}function bu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Nr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xu(e,t,n,r){t&=~Yl,t&=~Jl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Je(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&lt(e,n,t)}function Su(){return U&6?!0:(od(0,!1),!1)}function Cu(){if(G!==null){if(q===0)var e=G.return;else e=G,ra=na=null,L(e),za=null,Ba=0,e=G;for(;e!==null;)Wc(e.alternate,e),e=e.return;G=null}}function wu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Yd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),lu=0,Cu(),W=e,G=n=xi(e.current,null),K=t,q=0,Hl=null,Ul=!1,Wl=rt(e,t),Gl=!1,Zl=Xl=Yl=Jl=ql=J=0,$l=Ql=null,eu=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Je(r),a=1<<i;t|=e[i],r&=~a}return Kl=t,di(),n}function Tu(e,t){P=null,T.H=Hs,t===ka||t===ja?(t=La(),q=3):t===Aa?(t=La(),q=4):q=t===oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Hl=t,G===null&&(J=1,ec(e,ki(t,e.current)))}function Eu(){var e=lo.current;return e===null?!0:(K&4194048)===K?uo===null:(K&62914560)===K||K&536870912?e===uo:!1}function Du(){var e=T.H;return T.H=Hs,e===null?Hs:e}function Ou(){var e=T.A;return T.A=Bl,e}function ku(){J=4,Ul||(K&4194048)!==K&&lo.current!==null||(Wl=!0),!(ql&134217727)&&!(Jl&134217727)||W===null||xu(W,K,Xl,!1)}function Au(e,t,n){var r=U;U|=2;var i=Du(),a=Ou();(W!==e||K!==t)&&(iu=null,wu(e,t)),t=!1;var o=J;a:do try{if(q!==0&&G!==null){var s=G,c=Hl;switch(q){case 8:Cu(),o=6;break a;case 3:case 2:case 9:case 6:lo.current===null&&(t=!0);var l=q;if(q=0,Hl=null,Iu(e,s,c,l),n&&Wl){o=0;break a}break;default:l=q,q=0,Hl=null,Iu(e,s,c,l)}}ju(),o=J;break}catch(t){Tu(e,t)}while(1);return t&&e.shellSuspendCounter++,ra=na=null,U=r,T.H=i,T.A=a,G===null&&(W=null,K=0,di()),o}function ju(){for(;G!==null;)Pu(G)}function Mu(e,t){var n=U;U|=2;var r=Du(),a=Ou();W!==e||K!==t?(iu=null,ru=Ie()+500,wu(e,t)):Wl=rt(e,t);a:do try{if(q!==0&&G!==null){t=G;var o=Hl;b:switch(q){case 1:q=0,Hl=null,Iu(e,t,o,1);break;case 2:case 9:if(Na(o)){q=0,Hl=null,Fu(t);break}t=function(){q!==2&&q!==9||W!==e||(q=7),ad(e)},o.then(t,t);break a;case 3:q=7;break a;case 4:q=5;break a;case 7:Na(o)?(q=0,Hl=null,Fu(t)):(q=0,Hl=null,Iu(e,t,o,7));break;case 5:var s=null;switch(G.tag){case 26:s=G.memoizedState;case 5:case 27:var c=G;if(s?Kf(s):c.stateNode.complete){q=0,Hl=null;var l=c.sibling;if(l!==null)G=l;else{var u=c.return;u===null?G=null:(G=u,Lu(u))}break b}}q=0,Hl=null,Iu(e,t,o,5);break;case 6:q=0,Hl=null,Iu(e,t,o,6);break;case 8:Cu(),J=6;break a;default:throw Error(i(462))}}Nu();break}catch(t){Tu(e,t)}while(1);return ra=na=null,T.H=r,T.A=a,U=n,G===null?(W=null,K=0,di(),J):0}function Nu(){for(;G!==null&&!Pe();)Pu(G)}function Pu(e){var t=Ic(e.alternate,e,Kl);e.memoizedProps=e.pendingProps,t===null?Lu(e):G=t}function Fu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bc(n,t,t.pendingProps,t.type,void 0,K);break;case 11:t=bc(n,t,t.pendingProps,t.type.render,t.ref,K);break;case 5:L(t);default:Wc(n,t),t=G=Si(t,Kl),t=Ic(n,t,Kl)}e.memoizedProps=e.pendingProps,t===null?Lu(e):G=t}function Iu(e,t,n,r){ra=na=null,L(t),za=null,Ba=0;var i=t.return;try{if(ac(e,i,t,n,K)){J=1,ec(e,ki(n,e.current)),G=null;return}}catch(t){if(i!==null)throw G=i,t;J=1,ec(e,ki(n,e.current)),G=null;return}t.flags&32768?(k||r===1?e=!0:Wl||K&536870912?e=!1:(Ul=e=!0,(r===2||r===9||r===3||r===6)&&(r=lo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Ru(t,e)):Lu(t)}function Lu(e){var t=e;do{if(t.flags&32768){Ru(t,Ul);return}e=t.return;var n=Hc(t.alternate,t,Kl);if(n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);J===0&&(J=5)}function Ru(e,t){do{var n=Uc(e.alternate,e);if(n!==null){n.flags&=32767,G=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){G=e;return}G=e=n}while(e!==null);J=6,G=null}function zu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Wu();while(ou!==0);if(U&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ui,ct(e,n,o,s,c,l),e===W&&(G=W=null,K=0),cu=t,su=e,lu=n,uu=o,du=a,fu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Qu(Be,function(){return Gu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=T.T,T.T=null,a=E.p,E.p=2,s=U,U|=4;try{ll(e,t,n)}finally{U=s,E.p=a,T.T=r}}ou=1,Bu(),Vu(),Hu()}}function Bu(){if(ou===1){ou=0;var e=su,t=cu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=U;U|=4;try{xl(t,e);var a=Vd,o=Rr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Lr(s.ownerDocument.documentElement,s)){if(c!==null&&zr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Ir(s,h),v=Ir(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}lp=!!Bd,Vd=Bd=null}finally{U=i,E.p=r,T.T=n}}e.current=t,ou=2}}function Vu(){if(ou===2){ou=0;var e=su,t=cu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=U;U|=4;try{ul(e,t.alternate,t)}finally{U=i,E.p=r,T.T=n}}ou=3}}function Hu(){if(ou===4||ou===3){ou=0,Fe();var e=su,t=cu,n=lu,r=fu;t.subtreeFlags&10256||t.flags&10256?ou=5:(ou=0,cu=su=null,Uu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(au=null),pt(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot==`function`)try{Ke.onCommitFiberRoot(Ge,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}lu&3&&Wu(),ad(e),i=e.pendingLanes,n&261930&&i&42?e===mu?pu++:(pu=0,mu=e):pu=0,od(0,!1)}}function Uu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Wu(){return Bu(),Vu(),Hu(),Gu()}function Gu(){if(ou!==5)return!1;var e=su,t=uu;uu=0;var n=pt(lu),r=T.T,a=E.p;try{E.p=32>n?32:n,T.T=null,n=du,du=null;var o=su,s=lu;if(ou=0,cu=su=null,lu=0,U&6)throw Error(i(331));var c=U;if(U|=4,Ll(o.current),kl(o,o.current,s,n),U=c,od(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot==`function`)try{Ke.onPostCommitFiberRoot(Ge,o)}catch{}return!0}finally{E.p=a,T.T=r,Uu(e,t)}}function Ku(e,t,n){t=ki(n,t),t=nc(e.stateNode,t,2),e=Za(e,t,2),e!==null&&(st(e,2),ad(e))}function Y(e,t,n){if(e.tag===3)Ku(e,e,n);else for(;t!==null;){if(t.tag===3){Ku(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(au===null||!au.has(r))){e=ki(n,e),n=rc(2),r=Za(t,n,2),r!==null&&(ic(n,r,t,e),st(r,2),ad(r));break}}t=t.return}}function qu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Gl=!0,i.add(n),e=Ju.bind(null,e,t,n),t.then(e,e))}function Ju(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,W===e&&(K&n)===n&&(J===4||J===3&&(K&62914560)===K&&300>Ie()-tu?!(U&2)&&wu(e,0):Yl|=n,Zl===K&&(Zl=0)),ad(e)}function Yu(e,t){t===0&&(t=at()),e=mi(e,t),e!==null&&(st(e,t),ad(e))}function Xu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yu(e,n)}function Zu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Yu(e,n)}function Qu(e,t){return Me(e,t)}var $u=null,ed=null,td=!1,nd=!1,rd=!1,id=0;function ad(e){e!==ed&&e.next===null&&(ed===null?$u=ed=e:ed=ed.next=e),nd=!0,td||(td=!0,fd())}function od(e,t){if(!rd&&nd){rd=!0;do for(var n=!1,r=$u;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Je(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,dd(r,a))}else a=K,a=nt(r,r===W?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||rt(r,a)||(n=!0,dd(r,a));r=r.next}while(n);rd=!1}}function sd(){cd()}function cd(){nd=td=!1;var e=0;id!==0&&qd()&&(e=id);for(var t=Ie(),n=null,r=$u;r!==null;){var i=r.next,a=ld(r,t);a===0?(r.next=null,n===null?$u=i:n.next=i,i===null&&(ed=n)):(n=r,(e!==0||a&3)&&(nd=!0)),r=i}ou!==0&&ou!==5||od(e,!1),id!==0&&(id=0)}function ld(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Je(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=it(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=W,n=K,n=nt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(q===2||q===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||rt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),pt(n)){case 2:case 8:n=ze;break;case 32:n=Be;break;case 268435456:n=He;break;default:n=Be}return r=ud.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function ud(e,t){if(ou!==0&&ou!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Wu()&&e.callbackNode!==n)return null;var r=K;return r=nt(e,e===W?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(vu(e,r,t),ld(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?ud.bind(null,e):null)}function dd(e,t){if(Wu())return null;vu(e,t,!0)}function fd(){Zd(function(){U&6?Me(Re,sd):cd()})}function pd(){if(id===0){var e=ya;e===0&&(e=Qe,Qe<<=1,!(Qe&261888)&&(Qe=256)),id=e}return id}function md(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:un(``+e)}function hd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function gd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=md((i[vt]||null).action),o=r.submitter;o&&(t=(t=o[vt]||null)?md(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Mn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(id!==0){var e=o?hd(i,o):new FormData(i);Os(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?hd(i,o):new FormData(i),Os(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var _d=0;_d<ai.length;_d++){var vd=ai[_d];oi(vd.toLowerCase(),`on`+(vd[0].toUpperCase()+vd.slice(1)))}oi(Zr,`onAnimationEnd`),oi(Qr,`onAnimationIteration`),oi($r,`onAnimationStart`),oi(`dblclick`,`onDoubleClick`),oi(`focusin`,`onFocus`),oi(`focusout`,`onBlur`),oi(ei,`onTransitionRun`),oi(ti,`onTransitionStart`),oi(ni,`onTransitionCancel`),oi(ri,`onTransitionEnd`),Pt(`onMouseEnter`,[`mouseout`,`mouseover`]),Pt(`onMouseLeave`,[`mouseout`,`mouseover`]),Pt(`onPointerEnter`,[`pointerout`,`pointerover`]),Pt(`onPointerLeave`,[`pointerout`,`pointerover`]),Nt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Nt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Nt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Nt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Nt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Nt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var yd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),bd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(yd));function xd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){si(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){si(e)}i.currentTarget=null,a=c}}}}function X(e,t){var n=t[bt];n===void 0&&(n=t[bt]=new Set);var r=e+`__bubble`;n.has(r)||(Td(t,e,2,!1),n.add(r))}function Sd(e,t,n){var r=0;t&&(r|=4),Td(n,e,r,t)}var Cd=`_reactListening`+Math.random().toString(36).slice(2);function wd(e){if(!e[Cd]){e[Cd]=!0,jt.forEach(function(t){t!==`selectionchange`&&(bd.has(t)||Sd(t,!1,e),Sd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cd]||(t[Cd]=!0,Sd(`selectionchange`,!1,t))}}function Td(e,t,n,r){switch(gp(t)){case 2:var i=up;break;case 8:i=dp;break;default:i=fp}n=i.bind(null,t,n,e),i=void 0,!xn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Ed(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Et(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}vn(function(){var r=a,i=pn(n),s=[];a:{var c=ii.get(e);if(c!==void 0){var l=Mn,u=e;switch(e){case`keypress`:if(Dn(n)===0)break a;case`keydown`:case`keyup`:l=Xn;break;case`focusin`:u=`focus`,l=Vn;break;case`focusout`:u=`blur`,l=Vn;break;case`beforeblur`:case`afterblur`:l=Vn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=zn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Bn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Qn;break;case Zr:case Qr:case $r:l=Hn;break;case ri:l=$n;break;case`scroll`:case`scrollend`:l=Pn;break;case`wheel`:l=er;break;case`copy`:case`cut`:case`paste`:l=Un;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Zn;break;case`toggle`:case`beforetoggle`:l=tr}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=yn(m,p),g!=null&&d.push(Dd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==fn&&(u=n.relatedTarget||n.fromElement)&&(Et(u)||u[yt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Et(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=zn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Zn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ot(l),h=u==null?c:Ot(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Et(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=kd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Ad(s,c,l,d,!1),u!==null&&f!==null&&Ad(s,f,u,d,!0)}}a:{if(c=r?Ot(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=xr;else if(hr(c))if(Sr)v=jr;else{v=kr;var y=Or}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&sn(r.elementType)&&(v=xr):v=Ar;if(v&&=v(e,r)){gr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Qt(c,`number`,c.value)}switch(y=r?Ot(r):window,e){case`focusin`:(hr(y)||y.contentEditable===`true`)&&(Vr=y,Hr=r,Ur=null);break;case`focusout`:Ur=Hr=Vr=null;break;case`mousedown`:Wr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Wr=!1,Gr(s,n,i);break;case`selectionchange`:if(Br)break;case`keydown`:case`keyup`:Gr(s,n,i)}var b;if(rr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else dr?lr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(or&&n.locale!==`ko`&&(dr||x!==`onCompositionStart`?x===`onCompositionEnd`&&dr&&(b=En()):(Cn=i,wn=`value`in Cn?Cn.value:Cn.textContent,dr=!0)),y=Od(r,x),0<y.length&&(x=new Wn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ur(n),b!==null&&(x.data=b)))),(b=ar?fr(e,n):pr(e,n))&&(x=Od(r,`onBeforeInput`),0<x.length&&(y=new Wn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),gd(s,e,r,n,i)}xd(s,t)})}function Dd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Od(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=yn(e,n),i!=null&&r.unshift(Dd(e,i,a)),i=yn(e,t),i!=null&&r.push(Dd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function kd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ad(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=yn(n,a),l!=null&&o.unshift(Dd(n,l,c))):i||(l=yn(n,a),l!=null&&o.push(Dd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var jd=/\r\n?/g,Md=/\u0000|\uFFFD/g;function Nd(e){return(typeof e==`string`?e:``+e).replace(jd,`
`).replace(Md,``)}function Pd(e,t){return t=Nd(t),Nd(e)===t}function Z(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||nn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&nn(e,``+r);break;case`className`:Bt(e,`class`,r);break;case`tabIndex`:Bt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Bt(e,n,r);break;case`style`:on(e,r,o);break;case`data`:if(t!==`object`){Bt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=un(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Z(e,t,`name`,a.name,a,null),Z(e,t,`formEncType`,a.formEncType,a,null),Z(e,t,`formMethod`,a.formMethod,a,null),Z(e,t,`formTarget`,a.formTarget,a,null)):(Z(e,t,`encType`,a.encType,a,null),Z(e,t,`method`,a.method,a,null),Z(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=un(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=dn);break;case`onScroll`:r!=null&&X(`scroll`,e);break;case`onScrollEnd`:r!=null&&X(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=un(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:X(`beforetoggle`,e),X(`toggle`,e),zt(e,`popover`,r);break;case`xlinkActuate`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:zt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=cn.get(n)||n,zt(e,n,r))}}function Fd(e,t,n,r,a,o){switch(n){case`style`:on(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?nn(e,r):(typeof r==`number`||typeof r==`bigint`)&&nn(e,``+r);break;case`onScroll`:r!=null&&X(`scroll`,e);break;case`onScrollEnd`:r!=null&&X(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=dn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Mt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[vt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):zt(e,n,r)}}}function Id(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:X(`error`,e),X(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Z(e,t,o,s,n,null)}}a&&Z(e,t,`srcSet`,n.srcSet,n,null),r&&Z(e,t,`src`,n.src,n,null);return;case`input`:X(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Z(e,t,r,d,n,null)}}Zt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in X(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Z(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&$t(e,!!r,n,!0):$t(e,!!r,t,!1);return;case`textarea`:for(s in X(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Z(e,t,s,c,n,null)}tn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Z(e,t,l,r,n,null)}return;case`dialog`:X(`beforetoggle`,e),X(`toggle`,e),X(`cancel`,e),X(`close`,e);break;case`iframe`:case`object`:X(`load`,e);break;case`video`:case`audio`:for(r=0;r<yd.length;r++)X(yd[r],e);break;case`image`:X(`error`,e),X(`load`,e);break;case`details`:X(`toggle`,e);break;case`embed`:case`source`:case`link`:X(`error`,e),X(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Z(e,t,u,r,n,null)}return;default:if(sn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Fd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Z(e,t,c,r,n,null))}function Ld(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Z(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Z(e,t,p,m,r,f)}}Xt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Z(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Z(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?$t(e,!!n,n?[]:``,!1):$t(e,!!n,t,!0)):$t(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Z(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Z(e,t,s,a,r,o)}en(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Z(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Z(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Z(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Z(e,t,u,p,r,m)}return;default:if(sn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Fd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Fd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Z(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Z(e,t,f,p,r,m)}function Rd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function zd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Rd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Rd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Bd=null,Vd=null;function Hd(e){return e.nodeType===9?e:e.ownerDocument}function Ud(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Wd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Gd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kd=null;function qd(){var e=window.event;return e&&e.type===`popstate`?e===Kd?!1:(Kd=e,!0):(Kd=null,!1)}var Jd=typeof setTimeout==`function`?setTimeout:void 0,Yd=typeof clearTimeout==`function`?clearTimeout:void 0,Xd=typeof Promise==`function`?Promise:void 0,Zd=typeof queueMicrotask==`function`?queueMicrotask:Xd===void 0?Jd:function(e){return Xd.resolve(null).then(e).catch(Qd)};function Qd(e){setTimeout(function(){throw e})}function $d(e){return e===`head`}function ef(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Fp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)hf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,hf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[wt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&hf(e.ownerDocument.body);n=i}while(n);Fp(t)}function tf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function nf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nf(n),Tt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[wt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=uf(e.nextSibling),e===null)break}return null}function af(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=uf(e.nextSibling),e===null))return null;return e}function of(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=uf(e.nextSibling),e===null))return null;return e}function sf(e){return e.data===`$?`||e.data===`$~`}function cf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function lf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function uf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var df=null;function ff(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return uf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function pf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function mf(e,t,n){switch(t=Hd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function hf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tt(e)}var gf=new Map,_f=new Set;function vf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var yf=E.d;E.d={f:bf,r:xf,D:wf,C:Tf,L:Ef,m:Df,X:kf,S:Of,M:Af};function bf(){var e=yf.f(),t=Su();return e||t}function xf(e){var t=Dt(e);t!==null&&t.tag===5&&t.type===`form`?As(t):yf.r(e)}var Sf=typeof document>`u`?null:document;function Cf(e,t,n){var r=Sf;if(r&&typeof t==`string`&&t){var i=Yt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),_f.has(i)||(_f.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Id(t,`link`,e),At(t),r.head.appendChild(t)))}}function wf(e){yf.D(e),Cf(`dns-prefetch`,e,null)}function Tf(e,t){yf.C(e,t),Cf(`preconnect`,e,t)}function Ef(e,t,n){yf.L(e,t,n);var r=Sf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Yt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Yt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Yt(n.imageSizes)+`"]`)):i+=`[href="`+Yt(e)+`"]`;var a=i;switch(t){case`style`:a=Mf(e);break;case`script`:a=If(e)}gf.has(a)||(e=f({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),gf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Nf(a))||t===`script`&&r.querySelector(Lf(a))||(t=r.createElement(`link`),Id(t,`link`,e),At(t),r.head.appendChild(t)))}}function Df(e,t){yf.m(e,t);var n=Sf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Yt(r)+`"][href="`+Yt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=If(e)}if(!gf.has(a)&&(e=f({rel:`modulepreload`,href:e},t),gf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Lf(a)))return}r=n.createElement(`link`),Id(r,`link`,e),At(r),n.head.appendChild(r)}}}function Of(e,t,n){yf.S(e,t,n);var r=Sf;if(r&&e){var i=kt(r).hoistableStyles,a=Mf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Nf(a)))s.loading=5;else{e=f({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=gf.get(a))&&Bf(e,n);var c=o=r.createElement(`link`);At(c),Id(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,zf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function kf(e,t){yf.X(e,t);var n=Sf;if(n&&e){var r=kt(n).hoistableScripts,i=If(e),a=r.get(i);a||(a=n.querySelector(Lf(i)),a||(e=f({src:e,async:!0},t),(t=gf.get(i))&&Vf(e,t),a=n.createElement(`script`),At(a),Id(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t){yf.M(e,t);var n=Sf;if(n&&e){var r=kt(n).hoistableScripts,i=If(e),a=r.get(i);a||(a=n.querySelector(Lf(i)),a||(e=f({src:e,async:!0,type:`module`},t),(t=gf.get(i))&&Vf(e,t),a=n.createElement(`script`),At(a),Id(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function jf(e,t,n,r){var a=(a=ve.current)?vf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Mf(n.href),n=kt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Mf(n.href);var o=kt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Nf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),gf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},gf.set(e,n),o||Ff(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=If(n),n=kt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Mf(e){return`href="`+Yt(e)+`"`}function Nf(e){return`link[rel="stylesheet"][`+e+`]`}function Pf(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Ff(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Id(t,`link`,n),At(t),e.head.appendChild(t))}function If(e){return`[src="`+Yt(e)+`"]`}function Lf(e){return`script[async]`+e}function Rf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Yt(n.href)+`"]`);if(r)return t.instance=r,At(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),At(r),Id(r,`style`,a),zf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Mf(n.href);var o=e.querySelector(Nf(a));if(o)return t.state.loading|=4,t.instance=o,At(o),o;r=Pf(n),(a=gf.get(a))&&Bf(r,a),o=(e.ownerDocument||e).createElement(`link`),At(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Id(o,`link`,r),t.state.loading|=4,zf(o,n.precedence,e),t.instance=o;case`script`:return o=If(n.src),(a=e.querySelector(Lf(o)))?(t.instance=a,At(a),a):(r=n,(a=gf.get(o))&&(r=f({},n),Vf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),At(a),Id(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,zf(r,n.precedence,e));return t.instance}function zf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Vf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Hf=null;function Uf(e,t,n){if(Hf===null){var r=new Map,i=Hf=new Map;i.set(n,r)}else i=Hf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[wt]||a[_t]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Wf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Gf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Kf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function qf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Mf(r.href),a=t.querySelector(Nf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Xf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,At(a);return}a=t.ownerDocument||t,r=Pf(r),(i=gf.get(i))&&Bf(r,i),a=a.createElement(`link`),At(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Id(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Xf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Jf=0;function Yf(e,t){return e.stylesheets&&e.count===0&&Qf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Qf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Jf===0&&(Jf=62500*zd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Jf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Xf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zf=null;function Qf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zf=new Map,t.forEach($f,e),Zf=null,Xf.call(e))}function $f(e,t){if(!(t.state.loading&4)){var n=Zf.get(e);if(n)var r=n.get(null);else{n=new Map,Zf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Xf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ep={$$typeof:ee,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function tp(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function np(e,t,n,r,i,a,o,s,c,l,u,d){return e=new tp(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=yi(3,null,null,t),e.current=a,a.stateNode=e,t=ha(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ja(a),e}function rp(e){return e?(e=_i,e):_i}function ip(e,t,n,r,i,a){i=rp(i),r.context===null?r.context=i:r.pendingContext=i,r=Xa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Za(e,r,t),n!==null&&(_u(n,e,t),Qa(n,e,t))}function ap(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function op(e,t){ap(e,t),(e=e.alternate)&&ap(e,t)}function sp(e){if(e.tag===13||e.tag===31){var t=mi(e,67108864);t!==null&&_u(t,e,67108864),op(e,67108864)}}function cp(e){if(e.tag===13||e.tag===31){var t=hu();t=ft(t);var n=mi(e,t);n!==null&&_u(n,e,t),op(e,t)}}var lp=!0;function up(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,fp(e,t,n,r)}finally{E.p=a,T.T=i}}function dp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,fp(e,t,n,r)}finally{E.p=a,T.T=i}}function fp(e,t,n,r){if(lp){var i=pp(r);if(i===null)Ed(e,t,r,mp,n),Tp(e,r);else if(Dp(i,e,t,n,r))r.stopPropagation();else if(Tp(e,r),t&4&&-1<wp.indexOf(e)){for(;i!==null;){var a=Dt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=tt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Je(o);s.entanglements[1]|=c,o&=~c}ad(a),!(U&6)&&(ru=Ie()+500,od(0,!1))}}break;case 31:case 13:s=mi(a,2),s!==null&&_u(s,a,2),Su(),op(a,2)}if(a=pp(r),a===null&&Ed(e,t,r,mp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ed(e,t,r,null,n)}}function pp(e){return e=pn(e),hp(e)}var mp=null;function hp(e){if(mp=null,e=Et(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return mp=e,null}function gp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Le()){case Re:return 2;case ze:return 8;case Be:case Ve:return 32;case He:return 268435456;default:return 32}default:return 32}}var _p=!1,vp=null,yp=null,bp=null,xp=new Map,Sp=new Map,Cp=[],wp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Tp(e,t){switch(e){case`focusin`:case`focusout`:vp=null;break;case`dragenter`:case`dragleave`:yp=null;break;case`mouseover`:case`mouseout`:bp=null;break;case`pointerover`:case`pointerout`:xp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Sp.delete(t.pointerId)}}function Ep(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Dt(t),t!==null&&sp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Dp(e,t,n,r,i){switch(t){case`focusin`:return vp=Ep(vp,e,t,n,r,i),!0;case`dragenter`:return yp=Ep(yp,e,t,n,r,i),!0;case`mouseover`:return bp=Ep(bp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return xp.set(a,Ep(xp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Sp.set(a,Ep(Sp.get(a)||null,e,t,n,r,i)),!0}return!1}function Op(e){var t=Et(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ht(e.priority,function(){cp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ht(e.priority,function(){cp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fn=r,n.target.dispatchEvent(r),fn=null}else return t=Dt(n),t!==null&&sp(t),e.blockedOn=n,!1;t.shift()}return!0}function Ap(e,t,n){kp(e)&&n.delete(t)}function jp(){_p=!1,vp!==null&&kp(vp)&&(vp=null),yp!==null&&kp(yp)&&(yp=null),bp!==null&&kp(bp)&&(bp=null),xp.forEach(Ap),Sp.forEach(Ap)}function Mp(e,n){e.blockedOn===n&&(e.blockedOn=null,_p||(_p=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,jp)))}var Np=null;function Pp(e){Np!==e&&(Np=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Np===e&&(Np=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(hp(r||n)===null)continue;break}var a=Dt(n);a!==null&&(e.splice(t,3),t-=3,Os(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Fp(e){function t(t){return Mp(t,e)}vp!==null&&Mp(vp,e),yp!==null&&Mp(yp,e),bp!==null&&Mp(bp,e),xp.forEach(t),Sp.forEach(t);for(var n=0;n<Cp.length;n++){var r=Cp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Cp.length&&(n=Cp[0],n.blockedOn===null);)Op(n),n.blockedOn===null&&Cp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[vt]||null;if(typeof a==`function`)o||Pp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[vt]||null)s=o.formAction;else if(hp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Pp(n)}}}function Ip(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Lp(e){this._internalRoot=e}Q.prototype.render=Lp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;ip(n,hu(),e,t,null,null)},Q.prototype.unmount=Lp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ip(e.current,2,null,e,null,null),Su(),t[yt]=null}};function Q(e){this._internalRoot=e}Q.prototype.unstable_scheduleHydration=function(e){if(e){var t=mt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cp.length&&t!==0&&t<Cp[n].priority;n++);Cp.splice(n,0,e),n===0&&Op(e)}};var Rp=n.version;if(Rp!==`19.2.4`)throw Error(i(527,Rp,`19.2.4`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:d(e),e=e===null?null:e.stateNode,e};var zp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Bp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bp.isDisabled&&Bp.supportsFiber)try{Ge=Bp.inject(zp),Ke=Bp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Zs,s=Qs,c=$s;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=np(e,1,!1,null,null,n,r,null,o,s,c,Ip),e[yt]=t.current,wd(e),new Lp(t)}})),y=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=v()})),b=`modulepreload`,x=function(e){return`/`+e},S={};const ee=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=x(t,n),t in S)return;S[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:b,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};var C=u(p(),1),te=`popstate`;function ne(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function re(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return se(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ce(t)}return ue(t,n,null,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function ie(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ae(){return Math.random().toString(36).substring(2,10)}function oe(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function se(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?le(t):t,state:n,key:t&&t.key||r||ae(),unstable_mask:i}}function ce({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function le(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ue(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ne(e)?e:se(h.location,e,t);n&&n(r,e),l=u()+1;let d=oe(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ne(e)?e:se(h.location,e,t);n&&n(r,e),l=u();let i=oe(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return T(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(te,d),c=e,()=>{i.removeEventListener(te,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function T(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),w(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:ce(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function E(e,t,n=`/`){return de(e,t,n,!1)}function de(e,t,n,r){let i=Oe((typeof t==`string`?le(t):t).pathname||`/`,n);if(i==null)return null;let a=pe(e);he(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=De(i);o=we(a[e],t,r)}return o}function fe(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function pe(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Ie([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),pe(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:Se(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of me(e.path))a(e,t,!0,n)}),t}function me(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=me(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function he(e){e.sort((e,t)=>e.score===t.score?Ce(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var D=/^:[\w-]+$/,ge=3,_e=2,ve=1,ye=10,be=-2,xe=e=>e===`*`;function Se(e,t){let n=e.split(`/`),r=n.length;return n.some(xe)&&(r+=be),t&&(r+=_e),n.filter(e=>!xe(e)).reduce((e,t)=>e+(D.test(t)?ge:t===``?ve:ye),r)}function Ce(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function we(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=Te({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=Te({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Ie([a,u.pathname]),pathnameBase:Le(Ie([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Ie([a,u.pathnameBase]))}return o}function Te(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ee(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Ee(e,t=!1,n=!0){ie(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function De(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return ie(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Oe(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var ke=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Ae(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?le(e):e,a;return n?(n=n.replace(/\/\/+/g,`/`),a=n.startsWith(`/`)?je(n.substring(1),`/`):je(n,t)):a=t,{pathname:a,search:Re(r),hash:ze(i)}}function je(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Me(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ne(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Pe(e){let t=Ne(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Fe(e,t,n,r=!1){let i;typeof e==`string`?i=le(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),Me(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),Me(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),Me(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ae(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ie=e=>e.join(`/`).replace(/\/\/+/g,`/`),Le=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),Re=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,ze=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Be=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ve(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function He(e){return e.map(e=>e.route.path).filter(Boolean).join(`/`).replace(/\/\/*/g,`/`)||`/`}var Ue=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function We(e,t){let n=e;if(typeof n!=`string`||!ke.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ue)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Oe(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{ie(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Ge=C.createContext(null);Ge.displayName=`DataRouter`;var Ke=C.createContext(null);Ke.displayName=`DataRouterState`;var qe=C.createContext(!1),Je=C.createContext({isTransitioning:!1});Je.displayName=`ViewTransition`;var Ye=C.createContext(new Map);Ye.displayName=`Fetchers`;var Xe=C.createContext(null);Xe.displayName=`Await`;var Ze=C.createContext(null);Ze.displayName=`Navigation`;var Qe=C.createContext(null);Qe.displayName=`Location`;var $e=C.createContext({outlet:null,matches:[],isDataRoute:!1});$e.displayName=`Route`;var et=C.createContext(null);et.displayName=`RouteError`;var tt=`REACT_ROUTER_ERROR`,nt=`REDIRECT`,rt=`ROUTE_ERROR_RESPONSE`;function it(e){if(e.startsWith(`${tt}:${nt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function at(e){if(e.startsWith(`${tt}:${rt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Be(t.status,t.statusText,t.data)}catch{}}function ot(e,{relative:t}={}){w(st(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=C.useContext(Ze),{hash:i,pathname:a,search:o}=pt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Ie([n,a])),r.createHref({pathname:s,search:o,hash:i})}function st(){return C.useContext(Qe)!=null}function ct(){return w(st(),`useLocation() may be used only in the context of a <Router> component.`),C.useContext(Qe).location}var lt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function ut(e){C.useContext(Ze).static||C.useLayoutEffect(e)}function dt(){let{isDataRoute:e}=C.useContext($e);return e?Mt():ft()}function ft(){w(st(),`useNavigate() may be used only in the context of a <Router> component.`);let e=C.useContext(Ge),{basename:t,navigator:n}=C.useContext(Ze),{matches:r}=C.useContext($e),{pathname:i}=ct(),a=JSON.stringify(Pe(r)),o=C.useRef(!1);return ut(()=>{o.current=!0}),C.useCallback((r,s={})=>{if(ie(o.current,lt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Fe(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Ie([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}C.createContext(null);function pt(e,{relative:t}={}){let{matches:n}=C.useContext($e),{pathname:r}=ct(),i=JSON.stringify(Pe(n));return C.useMemo(()=>Fe(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function mt(e,t){return ht(e,t)}function ht(e,t,n){w(st(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=C.useContext(Ze),{matches:i}=C.useContext($e),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Pt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ct(),d;if(t){let e=typeof t==`string`?le(t):t;w(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=E(e,{pathname:p});ie(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),ie(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=St(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Ie([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Ie([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?C.createElement(Qe.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function gt(){let e=jt(),t=Ve(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=C.createElement(C.Fragment,null,C.createElement(`p`,null,`💿 Hey developer 👋`),C.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,C.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,C.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),C.createElement(C.Fragment,null,C.createElement(`h2`,null,`Unexpected Application Error!`),C.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?C.createElement(`pre`,{style:i},n):null,o)}var _t=C.createElement(gt,null),vt=class extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=at(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:C.createElement($e.Provider,{value:this.props.routeContext},C.createElement(et.Provider,{value:e,children:this.props.component}));return this.context?C.createElement(bt,{error:e},t):t}};vt.contextType=qe;var yt=new WeakMap;function bt({children:e,error:t}){let{basename:n}=C.useContext(Ze);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=it(t.digest);if(e){let r=yt.get(t);if(r)throw r;let i=We(e.location,n);if(Ue&&!yt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw yt.set(t,n),n}return C.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function xt({routeContext:e,match:t,children:n}){let r=C.useContext(Ge);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),C.createElement($e.Provider,{value:e},n)}function St(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:He(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||_t,o&&(s<0&&c===0?(Pt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?C.createElement(n.route.Component,null):n.route.element?n.route.element:e,C.createElement(xt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?C.createElement(vt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Ct(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wt(e){let t=C.useContext(Ge);return w(t,Ct(e)),t}function Tt(e){let t=C.useContext(Ke);return w(t,Ct(e)),t}function Et(e){let t=C.useContext($e);return w(t,Ct(e)),t}function Dt(e){let t=Et(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Ot(){return Dt(`useRouteId`)}function kt(){return Tt(`useNavigation`).navigation}function At(){let{matches:e,loaderData:t}=Tt(`useMatches`);return C.useMemo(()=>e.map(e=>fe(e,t)),[e,t])}function jt(){let e=C.useContext(et),t=Tt(`useRouteError`),n=Dt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Mt(){let{router:e}=wt(`useNavigate`),t=Dt(`useNavigate`),n=C.useRef(!1);return ut(()=>{n.current=!0}),C.useCallback(async(r,i={})=>{ie(n.current,lt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Nt={};function Pt(e,t,n){!t&&!Nt[e]&&(Nt[e]=!0,ie(!1,n))}C.useOptimistic,C.memo(Ft);function Ft({routes:e,future:t,state:n,isStatic:r,onError:i}){return ht(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function It(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Lt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){w(!st(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=C.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=le(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=C.useMemo(()=>{let e=Oe(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return ie(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:C.createElement(Ze.Provider,{value:c},C.createElement(Qe.Provider,{children:t,value:h}))}function Rt({children:e,location:t}){return mt(zt(e),t)}function zt(e,t=[]){let n=[];return C.Children.forEach(e,(e,r)=>{if(!C.isValidElement(e))return;let i=[...t,r];if(e.type===C.Fragment){n.push.apply(n,zt(e.props.children,i));return}w(e.type===It,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=zt(e.props.children,i)),n.push(a)}),n}var Bt=`get`,Vt=`application/x-www-form-urlencoded`;function Ht(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Ut(e){return Ht(e)&&e.tagName.toLowerCase()===`button`}function Wt(e){return Ht(e)&&e.tagName.toLowerCase()===`form`}function Gt(e){return Ht(e)&&e.tagName.toLowerCase()===`input`}function Kt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function qt(e,t){return e.button===0&&(!t||t===`_self`)&&!Kt(e)}var Jt=null;function Yt(){if(Jt===null)try{new FormData(document.createElement(`form`),0),Jt=!1}catch{Jt=!0}return Jt}var Xt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Zt(e){return e!=null&&!Xt.has(e)?(ie(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vt}"`),null):e}function Qt(e,t){let n,r,i,a,o;if(Wt(e)){let o=e.getAttribute(`action`);r=o?Oe(o,t):null,n=e.getAttribute(`method`)||Bt,i=Zt(e.getAttribute(`enctype`))||Vt,a=new FormData(e)}else if(Ut(e)||Gt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Oe(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Bt,i=Zt(e.getAttribute(`formenctype`))||Zt(o.getAttribute(`enctype`))||Vt,a=new FormData(o,e),!Yt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Ht(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Bt,r=null,i=Vt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var $t={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},en=/[&><\u2028\u2029]/g;function tn(e){return e.replace(en,e=>$t[e])}function nn(e,t){if(e===!1||e==null)throw Error(t)}function rn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Oe(i.pathname,t)===`/`?i.pathname=`${t.replace(/\/$/,``)}/_root.${r}`:i.pathname=`${i.pathname.replace(/\/$/,``)}.${r}`,i}async function an(e,t){if(e.id in t)return t[e.id];try{let n=await ee(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function on(e){return e!=null&&typeof e.page==`string`}function sn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function cn(e,t,n){return pn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await an(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(sn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function ln(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function un(e,t,{includeHydrateFallback:n}={}){return dn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function dn(e){return[...new Set(e)]}function fn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function pn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!on(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(fn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function mn(){let e=C.useContext(Ge);return nn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function hn(){let e=C.useContext(Ke);return nn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var gn=C.createContext(void 0);gn.displayName=`FrameworkContext`;function _n(){let e=C.useContext(gn);return nn(e,`You must render this element inside a <HydratedRouter> element`),e}function vn(e,t){let n=C.useContext(gn),[r,i]=C.useState(!1),[a,o]=C.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=C.useRef(null);C.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),C.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:yn(s,p),onBlur:yn(c,m),onMouseEnter:yn(l,p),onMouseLeave:yn(u,m),onTouchStart:yn(d,p)}]:[a,f,{}]:[!1,f,{}]}function yn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function bn({page:e,...t}){let{router:n}=mn(),r=C.useMemo(()=>E(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?C.createElement(Sn,{page:e,matches:r,...t}):null}function xn(e){let{manifest:t,routeModules:n}=_n(),[r,i]=C.useState([]);return C.useEffect(()=>{let r=!1;return cn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Sn({page:e,matches:t,...n}){let r=ct(),{future:i,manifest:a,routeModules:o}=_n(),{basename:s}=mn(),{loaderData:c,matches:l}=hn(),u=C.useMemo(()=>ln(e,t,l,a,r,`data`),[e,t,l,a,r]),d=C.useMemo(()=>ln(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=C.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=rn(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=C.useMemo(()=>un(d,a),[d,a]),m=xn(d);return C.createElement(C.Fragment,null,f.map(e=>C.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>C.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>C.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Cn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}var wn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{wn&&(window.__reactRouterVersion=`7.13.1`)}catch{}function Tn({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=C.useRef();i.current??=re({window:r,v5Compat:!0});let a=i.current,[o,s]=C.useState({action:a.action,location:a.location}),c=C.useCallback(e=>{n===!1?s(e):C.startTransition(()=>s(e))},[n]);return C.useLayoutEffect(()=>a.listen(c),[a,c]),C.createElement(Lt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function En({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=C.useState({action:n.action,location:n.location}),o=C.useCallback(e=>{r===!1?a(e):C.startTransition(()=>a(e))},[r]);return C.useLayoutEffect(()=>n.listen(o),[n,o]),C.createElement(Lt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}En.displayName=`unstable_HistoryRouter`;var Dn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,On=C.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:_}=C.useContext(Ze),v=typeof l==`string`&&Dn.test(l),y=We(l,h);l=y.to;let b=ot(l,{relative:r}),x=ct(),S=null;if(o){let e=Fe(o,[],x.unstable_mask?x.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Ie([h,e.pathname])),S=g.createHref(e)}let[ee,te,ne]=vn(n,p),re=Fn(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:_});function w(t){e&&e(t),t.defaultPrevented||re(t)}let ie=!(y.isExternal||i),ae=C.createElement(`a`,{...p,...ne,href:(ie?S:void 0)||y.absoluteURL||b,onClick:ie?w:e,ref:Cn(m,te),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return ee&&!v?C.createElement(C.Fragment,null,ae,C.createElement(bn,{page:b})):ae});On.displayName=`Link`;var kn=C.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=pt(a,{relative:c.relative}),d=ct(),f=C.useContext(Ke),{navigator:p,basename:m}=C.useContext(Ze),h=f!=null&&Gn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Oe(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,x=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),S={isActive:b,isPending:x,isTransitioning:h},ee=b?e:void 0,te;te=typeof n==`function`?n(S):[n,b?`active`:null,x?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ne=typeof i==`function`?i(S):i;return C.createElement(On,{...c,"aria-current":ee,className:te,ref:l,style:ne,to:a,viewTransition:o},typeof s==`function`?s(S):s)});kn.displayName=`NavLink`;var An=C.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Bt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=C.useContext(Ze),g=Rn(),_=zn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&Dn.test(s);return C.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?C.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});An.displayName=`Form`;function jn({getKey:e,storageKey:t,...n}){let r=C.useContext(gn),{basename:i}=C.useContext(Ze),a=ct(),o=At();Un({getKey:e,storageKey:t});let s=C.useMemo(()=>{if(!r||!e)return null;let t=Hn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return C.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${tn(JSON.stringify(t||Bn))}, ${tn(JSON.stringify(s))})`}})}jn.displayName=`ScrollRestoration`;function Mn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nn(e){let t=C.useContext(Ge);return w(t,Mn(e)),t}function Pn(e){let t=C.useContext(Ke);return w(t,Mn(e)),t}function Fn(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=dt(),d=ct(),f=pt(e,{relative:o});return C.useCallback(p=>{if(qt(p,t)){p.preventDefault();let t=n===void 0?ce(d)===ce(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?C.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var In=0,Ln=()=>`__${String(++In)}__`;function Rn(){let{router:e}=Nn(`useSubmit`),{basename:t}=C.useContext(Ze),n=Ot(),r=e.fetch,i=e.navigate;return C.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=Qt(e,t);a.navigate===!1?await r(a.fetcherKey||Ln(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function zn(e,{relative:t}={}){let{basename:n}=C.useContext(Ze),r=C.useContext($e);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...pt(e||`.`,{relative:t})},o=ct();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Ie([n,a.pathname])),ce(a)}var Bn=`react-router-scroll-positions`,Vn={};function Hn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Oe(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Un({getKey:e,storageKey:t}={}){let{router:n}=Nn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Pn(`useScrollRestoration`),{basename:a}=C.useContext(Ze),o=ct(),s=At(),c=kt();C.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Wn(C.useCallback(()=>{if(c.state===`idle`){let t=Hn(o,s,a,e);Vn[t]=window.scrollY}try{sessionStorage.setItem(t||Bn,JSON.stringify(Vn))}catch(e){ie(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(C.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Bn);e&&(Vn=JSON.parse(e))}catch{}},[t]),C.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Vn,()=>window.scrollY,e?(t,n)=>Hn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),C.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{ie(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Wn(e,t){let{capture:n}=t||{};C.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Gn(e,{relative:t}={}){let n=C.useContext(Je);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Nn(`useViewTransitionState`),i=pt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Oe(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Oe(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Te(i.pathname,o)!=null||Te(i.pathname,a)!=null}var Kn=u(y(),1),qn=`/assets/cpincok-Bg-ofBfY.png`,Jn=`/assets/cinemapaiyanbanner-xA3i2Mzy.webp`,Yn=`/assets/abishakeRaja-Photoroom-D0k98PUf.png`,Xn=`/assets/ston-logo-mi8RJKDm.jpg`,Zn=`/assets/Stone-DOxUp4CE.jpg`,Qn=`/assets/stardain_logo-D5tNt-cg.jpg`,$n=`/assets/levelup-logo-STyT0bZR.jpg`,er=`/assets/bigboss-logo-BmlGj823.jpg`,tr=`/assets/Madras-logo-CdW3yss5.png`,nr=`/assets/potentialStudio-BnMP0am4.jpg`,rr=`/assets/Tseries_Logo-ChapXgCT.png`,ir=`/assets/Nutmeg%20Productions-B6d5WWgE.jpg`,ar=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAt1BMVEUAAAD///+8DA4CAQCaCg7BDA9qCAsAAgTCDA36+vpbW1vm5uZERETz8/NYWFj29vY8PDzW1tZ1dXVNTU2tra3V1dXd3d0RERGOjo4dHR1ra2vBwcHNzc3Hx8ekpKQuLi5+fn4YGBg/Pz+dnZ2ysrKVlZVxcXFmZmYqAAA1NTV7e3vj4+OGhoa6uroqKiqzDQ+nCg0mAACdCw+REA6KAxKyBhjJCgy4FggZAABiDwlcBQ0AAAoFBwCMmJGZAAAL9UlEQVR4nO2dC5uiRhaGYczuDCAoclUQUbGNimZ3Z5PdbPL/f9fW7XDpKke01cJOfU+m25aC1GsVh3NOXdQ0JSUlJSUlJSUlJSUlJSUlJSUlJSUlpc76qn1F0ti/B7wY/PH1T4l4T5D2B/4hSf/8/q+fHq/v3/89kEX485dvf3u4vv325Vdp3fTnX759ebjQ/+MfsgAVoSJUhIpQEd6D8Mu3J+i3//wq7Yn/39///gz9/j9phOAdf16/VBs8R39Ka0Oll9c88HNzIbsWj5SONbKCLPc+540y0GsZ1ny9/3TNudU5HZL1bBfJrtjdtOEJab91k8129Rk4j2cIqazwWG53suv4MR1+SEhvT9v1Y/NlzZBxmZDJTv1yJbu612vVGRD6bZpNhifZ1b5Ck2sJiUZhun7zprIr30mn7SZxu/fUluxDspmMZRN0UrSbrRPrNkzdOBw3r2KGFvtsbt/Ynrp7jJ2edtutNc8mXuWrRU6eBdboNkwrLUqnd4/PNanb6JBm+7oRFmZeBDf2WwN58fs+tWfTqRmhZ0FZhRiDhVMegxubE11qnQ+lkoFCrnJZu8DS3Bz5Qh1lJes32dEKX6uJqNhigsytfSNnOBde8zla8vX5ganwJuv54RbO+HlE7yWIDy+dcvImWdrBY2/KeQaLWGuuMla3E5fDfZF2NkMS70U+PkyuOt8r/cC46CZYEp0evrdll096r8UsLsIfuUPB/SveWXw/u9nsDbdxEorNUHHPKl+nHV+bj0UL0/F2nXCPz/JO1b1BM55wKSxoWcf1tnvku5hkSaM5zXvV93rFHGAoLHeivdkIk/V2/COfM3aR8w2W08uzlNyeEr1x3pTOheWcZhE7nG9mZzLkc1LCCorSZN39ZJbrR1W/gy56pUx7rpwtbslGQGJYYRFf0bMfI970iU1p1rE3T/kLbh9Z/4sacvXRPWHBoGNv9vgLyg2heK/UFvtXvGMgvrfe+AvKjYV5U3oQllvwjsGbsCDv5op789PEm1KxfyXofOLePOfKiXvz08TfXmJTyieOz3Q+3jZvHln/i4r4ZNNeWJA3peIYS2BKJUb3mtArFYeqacfOJxgGkWtKHa4+I3Hn62pKeTfXfmT9L4s3peIKLfmmEffmmzMGjxJvSlNhuTFP2NWUXpcxuLu6mlLeKzXEF+ybKRUE+OJQ1e/a+fi2lmtKl7d3PrEpPfEXlDu+yJvSM7lS/rEp7s28V3ox+fpYdTWlgs6XC8v1zpQWXIXEplTgGIjTErxtPj6y/pfFm1JfWE4wnUF8wbskX+8pPoX7Ma9U0JvFMdaztOQrdJyMBcnErqZU0JvlZmkEw046nluR+hOvVTM+YOgaY/XOlNaym+P6XXszb0rFGYOnifdU3mtkp1k5FAT44vltXZOvT9PNg/NnM/9cOcmm9NZR+bPZJf6Cs+cSvdPu1ulP5xyDF8iVdpaB592Y77sq75WeyRg8S+XthIwTz6lttFLXcaynifdKb5OdFuUQN1bvTKl7J0IqK/V5UypzVE0T2fa7S65X+gFT2lnijMGzJAjw7y3Jw04fNqWX1bsA/+4SOwZPU/J4QsmmNDo5m+OtCxG6KZdLCDLj4lGcck1pW2TqnXVn0DOZf5kab8ujez9HQLIpPato55RFenvsWEuyV3pJkRMXwce6reQAv5siM/bdW1cK5bJr312Lbem719uh11jW1hC6P4/pNXZIdoVv1NQrO07RlzxH4aPyYj+4cH/23JR20tQss/P3p3gc6xW1M3M/OHTN/L+uTl5etO3QC65s76Jh7oM/JM78fxJ5ZRbIXCajpKSkpKSkpKSkpKSkpKT0mTTdTyaTN/Qf0ozJ0bRxvscH0JHmARjrjDxvSNWcrD/2iCD1tBuuxki0xDKKosFAyi6hgmXceIlsLsx9wqICNtvPMFqzf5PqbCILHUcl6Dk2lYzUoogwFS3iwoK9SepZ+825MmxCm9u+MJ0Qxf6QsfXHVYSQv26sJW0sNm23IZtcbdCe2T9CcS8FwsaQTF5fqk1oVdfC4ks/TbcQNjeObmyq0yKctlutf4TiyWCMsLnM160v1SJk82gNNj7aA8LjOgP56HP3NkSwdOJID7BplM3lQXadtW8RsmmrMD1YIiHMOz+zk5rwKDU0jKEeeWkSQifdtK+TP4DgkoBQvLnKkh1tb39Ex1x8OpJWT49tEsJ9DD4C+1PG89ATMoCgKVptyFZuldRa1iOg8wYhe13NFuo9YesoW25g0sU29dzKBuGSDa1V+L0nbLUhMz8RXZk5qt5vEM7eX/W1CJlHA/dd5bc1CJkDV0/a6wGheIqkkNBitWdtWdmomnDAHJp6JwV2HRnL8oFwjwMfFA6tVs39k0SEQ2pDQ7CX1RTgmtDjgHpAWKu5uaGIcAbtw15UE2b4VbT1Sb0lhN0RmoTMo/Hh1GrSE0fYmMLO3pGxtuR6QmZoNtViFIjcOcJGrNQrwuYkJiBs2CGwIlstsuEVFbcDUWMqzSsRwlr0cRUCgu/JEdZtCPHWSxDCisxBFT/AM4Ej5O9DGctlgTBNkjlR2sw0CAiZocGuDHuug/PJCA2r2vC7OmnQA0LxHh4CQsZhT/YT5tTAIlh2ZF5ftOqUUQ8IxRPsFjyhYPo+8/hqQrBG1ZYmQChjA8xrCZc8IFiUoCLk/NJXIhTsOAxN1SCEUvAc7QOheEY9PBpqQn4LlyoZ0yCcsnwjrLWQSQhrSLsS8hsLVonvBiEUg6R/HwjFthQI6+X2wvn59ANoEkI2knX+ZQ8IV9ESjw9RVUc5Qnh8JJs1FvuLBrZNBwBOZEYICGVs6A2EBtUIq/a9YR/BihB212EmhP1FT2i5OO2kfh8Im6p35uIIWauN2OZDDKqVBKaEzCLZtKAwo/UkXUnILAg4amydtE22LW8RQi6dejH9JYStVitCu10CEr8k89F2xEfNkq9DuGJBL3xfDLQxcUDDFmHLLZdJaP6QEPoaEMLeM+CrLBkxibjahLPmqcKc3ZPkhUHgEoVUh8OhXvU5DsmhA/gDG2JsjXo9GuuZxGQG6GA1cF/Bk4vBQ0bi1z90FPfAjKZU9cElHFw2Dg3ItIzx8FMvoFFSUvrrarfdmo7paCf0e6A55kLbIjmOGTnkyFAbs9/ajioir9DPaDyO0I8dirsWu6kW0XfR7wV6J/P9LMtibeMXuTbMspVXkHeyp39rF50UYixxzOBpONphT66dyx507Bu7JxAtOCQtYBJvYEUcBhMdWhPnCDuhuDx4dxbejtbGKVYH/LunE6JI1bIsN8IeyAb5kqV2sEY45XkK9BE6UuDPwDoYyFOxgRBHtyUhHBOuNSH0dDrQljJCK02DI/FzduhjcGZBivc6CyQQWuQJjd2xOSHEM9Jw4iVgzkmMB5dSRDiNfP0wPUXo+AEfqwiDihBHUTYjpMOKmDA3qTNjSFnXXTLXGBOOUB3yitBlcW2M09sp8TbpAVTrNX5REdoVob2kwX2bMHHkEtr5fr9DhLaljw0yhAmEwdt+z9rQJQ3qk8zS0ta3OPkEhJZuWqiHe7oRolsZfWSIMLL1ZPY2wdtCB7q1lUtIzQgi9PXNqEVIWyPWDTekqRhKiKCmOGQAwkyPKSF6laOgCUXF8CUlOJnhj4xYLqGBwoktJtzrc7tFaIeHEKwtiSYo4R7V3EbEQOjowYESTrA9smNKaNg2MpyIMMHMfbgP7R2qVYsQ7kOj3BjktqKEhW7MDXQQCAf6yKCEzuig6e6eEtL70NILdCNQQjk7SNSEo4Gr64wQT6kMKkIbGwx6H9bdN6gIyfOBEI5dfa9n+TvCEwSGsgjtOI5zTLhcV4QpIXTLON5SWxqSyhFCVPlkk6A3K8I1EO4KPdQnJSUshnjavoU+Glsq4ZrdZW+6cTIZ4ZE81yyW0CCEh5pwha0MtjZAGHlAuMKzwxdlbWlcQjiXSpinWInmBMlUS4MQp903Ac48FPhAsNHeAvQoLEI8WF/g7rtHra2he/ZtxQinS4sQGvoQ/bM1YmlgVhFqcGKrKKHE7yG9u2hGY6qRjEc0PdH3JH5ZrpKSkpKSkpKSkpKSkpKSkpKSkpKSklJ/9H/CQgFD4lC6IgAAAABJRU5ErkJggg==`,or=`/assets/Srinivasaa_Logo-PjZudCkV.jfif`,sr=`/assets/MaliMovieMakers_Logo-BF0Oqznh.jpg`,cr=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEUAAAD////Dw8P8/Pzr6+vx8fH4+Pjk5ORERETv7+/h4eH5+fnn5+fb29vz8/MEBASsrKzOzs4kJCSJiYlZWVlUVFRwcHCSkpLW1tbIyMiZmZmioqJiYmIfHx9ra2uzs7M3NzcvLy+8vLx+fn42NjY+Pj6VlZWLi4saGhoRERF3d3eBgYEqKipmZmZLS0tsqnhEAAANoElEQVR4nO2bCXeqvBaGkzBHwIRJJkFAlEH5/z/v7oC2tsee76y7amu78qzWQkCa153sISBCEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCSPZ/3dHfgCul+ssms9dCrT7+7Gw1ijab/tW6qM884vtGQLv16/M2K8OX53Xx5Di7ZVhSYWcWqtm/13d+cBgEKv3efnYaXYLv5Fs3Eg8TLjQrNqK1REKdb1OstY+c0d+ywS7LPgKJxLMe8XdaQYybZnOP7ejn0WVdwgJ1YycJ2LwkZ1MfbDIJ++uWefRc+OaGzmzeE0ljEFfQpe1K1/R7wYzXPaoG3ODjbfhL6jMo7P85HfoU9QCEW7cxiZG5iVVlJF392jz2WHphGlpA7owa0Qx7vv7tBnc9TUejNhjFPWOejk4+Ey/X7JJERIB3Elw4qiZ9xA3HYy0fpb1AEeOE7s6vDKbKz5GOtkbj+P22/u2afhYB00CkNCosYsXVnivIuzb+7YpzGohM8KM8s+2aUWcdEaYRx+d88+jUGJF4Uh6vDRcKhoTGLnu/v1iTg25v6wYTTL8ahgFZq6Ffs1gxS8Josbb2cGNQ2zmrmaCP97nJnf3bFPJMpSHjeE8yypGVkppc9cK7h35rPHkOCDmra38YpzTrF75rGlOKzvi/CeGmiqnrZmFP2Nlf7+wc6wA5e4WD0mnNqU/OU65fO62IhQjI3af9++Noe0pvYK32DRhPnBnxE/JOB1rTqbzdukT1Y/nqjou/LWAlPKtVmTWjsblkSE6SWBqC8yObyKs3ca1mQ+uRFDIiSr1HumiblGnchcgrfeQsizDD8n06Y+5n7k9OM4kIAFNcGWOPb+Mipkd5v5GkOC7bve6PG8/Vh7b3vatWEFRRJWVjh/e65LY1ZDFMxHn+9JWfAoPeZO0AwckaZJNfX9xXWsC4UIbSNIhDbpzZD4QnPuh+MxO4ZBGQVRPJmMVZUGXjQvTx0b33U4K6swGhq/HjjXaU0cxSiPRtSUac9Zar1XeCImOs7etM0TyIKmgWWbmS+tmYfYhWrBQ3mMenLcmzSYjh8sYWv2ELml4cxJGxsKvzj6Yts19FKDmvEPG74w+Y5jlQ2MDdM02wqdv1JivrIdnqTNcBiicxGE02S2pzvn9UWyUupLYbFyCStryGkyal2aKAxrUnwQYIJzyZI6ibk/tW14PjdfmeTlVFVWSt6bTo9qv6+MU5+yO+edZx0K5pl/Nr2badRV4ZDCIFSE0vMH/yRi1K4NO4b4SR1uG1+ZCYQquHsnz0mWF0aeszLIjTvZjOeDBOCD1ftMCASJx+7uYbPIk3hTQyqUAJzH493THsHVFt123XleV+127QQDNQzyvCgGcCr+ERjzRL/G97uTrdcWGypQ899Exa477VsTLlZEcK3R3xzSjM0MX6DtSljXdUlImSSEx1wMI01XFeyCSUAVeCF4XbU1VpZB6hzu+fk+pbMJIcKUHnOcMqaE05ioNrF0bmFbxTrkEHCS7WLNAFt/oUIYYOOECXJdlOBwwGmHY0RXiOHCxCVyVcTxHnzFks18WOiulw/AgipqrVN4Dzrg5gTXVV1E8C7CB4Q5cjBK8dnE9yb6w4Dcyvdx0mLLozhkODvj+OQqFcfRAZchVj11Tp+NeQ3qQw/h1fr1E2iwHbq44DjNMC+wHhh4rHHpYyfX8TmGyI9J9XUCUZXn5yjKwyCcfwL4Eb8hTMQhAs5ip4ccByt8+DATgQN9IxZwIAGvTnsIehB04NWE6DDv7GDLnObmqvIq7wsV/iNHK9297v2pdG5pM+1fneSzJOHrl9fqdffNCe+b2nvH/iLn4UqrJGHzfwF3CoAFAj5v8amrE/AwI4EAeCDgcMkBLJnMB2sUzBu10JPy2TG2PJkTlZ4kvEGnJIFjJwYnJTVEfF73sxwzuVwdLiyOPT57M8GFzxvLEiEUc+dL3AuRLSZVKvxetjQxqNmXmheFy4YG/WZL+QAty+Iw1FEJ1CEKvNm+RlATG8v/8y5XN4fl7x8l9qcjMue1MCLHTZ6Dx0NmkxPMimb/RmF5PmegII9yFzfFAHoMSAo0bL4ohKzGnbNSKApXPdIUD/V4NRSQOAiF9KrQgvfl0TbDRGQVjy/8CQT0OZfkGEbVgMuls+PS1VeFMBAnPC9vW1hMyXCOC45400Uhx6vlVrCmqDAUtJVQeE2AbhRejJl9VdBXV9lyx4ELczSLQrYMnluFG6FwHoUa3qFXha82dN1y2bCUA3wWQmEHw9k7eZ4HCp13ClOsiTn4cEcTYTphCwZXZwkDHJaOcAzOAe0VXIhHLxIxSTeiuLC6eSJF0C8I3/BqiEWYeD7bx3GObdg4KXjSMXwQOcoxbltXh8v4WF/qKkgASnBaE9py/CUPbwzQO11ZVLmupSz2fLGhJ8zHRIOrafoySjUxMsGGK02DRK662vCI2WVQWnhP8KDCPNyKlZtSwQHY/8WGc34rlkfAfcXbhxtRaInFUBPTaLXCtL9ReOtpFDhqmLcKFbHElqKrwhosZcyHLJGFcvUySsVUD25HqSXKjDlq+i5kdA8WCBNpBxoOaJmH7cUf3JmHr179qtAR540vClUs1n+bWaGJVoryojB5q9C+XAeM1znzAH8kvaIkhIqZtngaMbTQXRseL516ozDC5KqwwgohzuyohEICRdffFc5Pa1589wMJX4vaWWGyRI7sqhA8y+ZGIVoU7uZ30mt3Z4XRciUxBlS4EuyutpdoQe7bUBA9XGGKyyAPbdHnWWG6FG4XhQYOK6/8i0IQs78ohJgDAdwSY0AoRFDsC4WuWYHTFArpdl9V0xYUnqqq2p12u/3+dHi4QvHPhZMYLgrDxYFfFMZ4dnz+W4UuKFxfFBKIHIvCxV0lIr7MCmthQzh3vkQoksPZh+63l40mXYz+4DW3zhYlOUpFXcs18OB71RYJC9OE74FcWlVVu5wbXtefbFXUw2dNfBYHDQxcwsHWsMQMZhZDPVUnUWzZMF0DR1xBK1BuqQJtZ2rzhttsXDii1g8NFus/YtHt/vp9XfT24PuWe/t3/+eHG9/KtRdtxJzXRbLcV663tqcO3e3rH03PoedjAphCL/dDpwKZkB9sxehs15X57J3/F9ZoxOqchFQd6gY0L/5m8Sgs2e/7bffBkv5PIi+2iE0e2oQoRcfMhxRmXwzXBLr3vHXw9APx7+QioJC4ZNnY7FeFCpPSQ5ECU/J6gnV/Vf/HMIoCi7OUZcE4aUjo6tDooPpS36Id/qYbvZ9E33Qop26ENkFnhtoUgsGqdblCBTXRfj9FLNZj5k8/cKB25h567W24k59iXjPD4DWpix4ag5DjtHSpii933wCd1sfgCdd879DvgiYrYxsqQY06y70Z5UWIosYpXylLy+XW03KPbb6JSkl6vner9TlYo94vY1Xc3tV1w4Xy33XpSnd1V3lRdJWClZcd5caQy5bNs2F4Tu9TQymk+vpRb/SDEuvEionKbL7BqUJgjLrMZq5DNUJp7DqJFrvU0LmeGJRrpe3SWLOJaljUci3j0VXu/8UaVVkSY0vldZke/GYYhmaTlWVNOKeOpjoK1+OVTVcgKdbt0iKuE7uJHlPKaUJqlqap7/ubjNX8ab/y1cYb85KkbKduRBnMKdFZ8UDFxjz5ZhgGRTSMx8PBH6M8nMzK+6FJzUmhZLdCFMK9W6NCrDo6xdYVz74h5IuvHYYoD3fwt59/1mF1RH18vUP4jKGjA2vd3E/o8LrqXBRDAkMdolpQHvKagzrqnhCzoe4tdyuiHtHenlWf1N4t6pux2WzR6TmcTRU2aR1TS8f17eIa0mmC1BOBFickQQJlPCF6gKLYL0EhIUpmOihQUa1ALoAzk6LBvVnsDTBJseIaMUnHvPrOgTwPp357asOzty1vemLDuLQDRkkh7JhA6kbGwUGOFWNUNjXZZJNe0qwyohix2uAcIe32iThmrvOwrbbPO0udM0LH3TQMUw6+Z4KZdw5QPcT7NjmUR4TKLLeLMyI6xxVLvVUCCn/Wt4K3TUlqksRO7Dg05qRk6RhN87L1aQcOZThPJYxxe7dnaTYgE6Zg5pnn8fAck+8/6TNVhQhoqdRxYqHRoFTVRLazsmhcs0wA1QZjrKzFHd4kiQ1DPET8U760d1R1mw27d5Oo93ZTHo2bLCtrDrptw1BV1XJty1BtGid1Gj1vTvqe9J+yrm7rnQDPu1nLeMZQ+CE3nc336whNEQqaCUWDh4oABZs/a6UfJe/KyTTNPaJZiFECP8Zqq9AarQzkvvlKwo/UtrAboihEcZwqiNo7snFba4h7myKcB91hc3z8gxUP5LwRT2FCuVCg2FVXyCBnkrp7XWUmN9a+G3T+2IwjnOD/HA/zJ+0QDQGKSeL2WG/AhjtXaaMV3h1Tjsy2bSvB86Yu/81pMs0doocImxbUilTxXFZnCS10hyCw8PiTxd0Qtf1YFW0e+AFqvCGczm2efuXTlF9Dt0b9em2G05T/YNf5F/Yp5GnHYixZVouvdP15p+6n05VZkqVRcdxk5GeVEf/KGoq9rtvCn+7XfA9fIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJJJfy/8ALdULA9LlwWgAAAAASUVORK5CYII=`,lr=`/assets/PEN_STUDIO_LOGO-CSkP7peE.jpg`,ur=`/assets/abishakerajaimg-CJV3tq8Y.jpg`,dr=`/assets/abishakeraja3%20(2)-BBwBrg2S.jpg`,fr=`/assets/Mahaveeran-zKtD8sRM.jpg`,pr=`/assets/MasrasMatniee-DPqVNx5f.jpg`,mr=`/assets/PtSir-C9GicBPe.jpg`,hr=`/assets/Coustody-DxPQ0QC9.webp`,gr=`/assets/Chitha-D-L2twJF.jpg`,_r=`/assets/Dear-B0CRrq1Q.jpg`,vr=`/assets/Eraivan-1gA3CYGt.jpg`,yr=`/assets/Angammal-C7rk888j.jpg`,br=`/assets/kumki-2-ClVwVcQ8.jpg`,xr=`/assets/Gevi-C4e1fCnq.jpg`,Sr=`/assets/Retro-Bub9uBKV.jpg`,Cr=`/assets/Kadhal%20Reset-xI-aBjTH.jpg`,wr=`/assets/Snakes%20%20Ladders-CNdIVDTL.jpg`,Tr=`/assets/RaghuT-DYTMyTLT.jpg`,Er=`/assets/Adipurush-CrPudpZt.jpg`,Dr=`/assets/Adiyae-DL9yHV_9.jpg`,Or=`/assets/StarDa-Cwf3I5Ky.webp`,kr=`/assets/Munai1-unGWFi3x.jpg`,Ar=`/assets/Munai2-DOlMTgvB.jpg`,jr=`/assets/Munai3-O_vGjo44.jpg`,Mr=`/assets/Munai4-DuyOHuyS.jpg`,Nr=`/assets/Munai5-BrLxQPeH.jpg`,Pr=`/assets/Munai6-CVwk1rvk.jpg`,Fr=`/assets/Munai7-UJWQySp5.jpg`,Ir=`/assets/Munai8-CWL0E_1A.jpg`,Lr=`/assets/Munai9-Cl5emlvD.jpg`,Rr=`/assets/Audio.img-BipwMAsS.png`,zr=`/assets/openb-rBPFiwPp.jpg`,Br=`/assets/Open%20Panna-Burn556b.jpg`,Vr=`/assets/NeeyaoliHost-DrJCii4b.jpg`,Hr=`/assets/CreativePr1-SI3y2OCU.jpg`,Ur=`/assets/CreativePr2-BgYice0n.jpg`,Wr=`/assets/CreativePr3-8dA6xZhs.jpg`,Gr=`/assets/CreativePr4-DrdNWYjI.jpg`,Kr=`/assets/CreativePr5-BNrtNhnr.jpg`,qr=`/assets/filmroleabishake-qemordDf.jpg`,Jr=`/assets/AbishakerajaWhite-DNr2Rm5q.jpg`,Yr=`/assets/Talivar.AR-DlUQ1C8S.jpg`,Xr=`/assets/Vijay.Ar-CuLKzIAb.jpg`,Zr=`/assets/Nani.AR-BpHB23Nm.jpg`,Qr=`/assets/Danush.Ar-v7kMwmH6.jpg`,$r=`/assets/Str.Ar-IawUhy1s.jpg`,ei=`/assets/VP.AR-BrpL4IzL.jpg`,ti=`/assets/Tk.Ar-J34iw8x1.jpg`,ni=`/assets/Keerthi.Ar-BtD0qPZ2.jpg`,ri=`/assets/Aniruth.AR-951-SCGX.jpg`,ii=`/assets/Prabas.AR-WruXxZIa.jpg`,ai=`/assets/Lokash.Ar-0fp4iJT4.jpg`,oi=`/assets/Banerrrrrrrr2-GYNsmwdo.jpg`,si=`/assets/ComicCoverimg-C-RGG-li.jpg`,ci=`/assets/ComicPag0-a72eyfBp.jpg`,li=`/assets/ComicPag1-DngeB7vo.jpg`,ui=`/assets/ComicPag2-azldd_dU.jpg`,di=`/assets/ComicPag3-CjUqk2i2.jpg`,fi=`/assets/ComicPag4-BniazXbS.jpg`,pi=`/assets/ComicPag5-NBrWH0G_.jpg`,mi=`/assets/ComicPag6-B-0i1LZw.jpg`,hi=`/assets/ComicPag7-CRsQFPSv.jpg`,gi=`/assets/JaamJaam.Director-B3nYB-my.jpg`,_i=`/assets/Screenshot%20VP-DbzSSBfI.png`,vi=`/assets/ScreenshotAR-Bzd66OwQ.png`,yi=`/assets/ScreenshotKH-D4Y1vs15.png`,bi=`/assets/ScreenshotAS-DEYUHrU5.png`,xi=`/assets/ScreenshotAD-CxLjGsti.png`,Si=`/assets/ScreenshotVJS-BnDSzwiO.png`,Ci=`/assets/ScreenshotGVM-RA6IMQf7.png`,wi=`/assets/ScreenshotSTR-CkVjDVpF.png`,Ti=`/assets/ScreenshotTK-BJUYzQRe.png`,Ei=`/assets/ScreenshotDQ-BI0x_sfD.png`,Di=`/assets/LCU-CqFK4ZnK.jpg`,Oi=`/assets/Venkatprabu-DLhQ8qNk.mp4`,ki=`/assets/Tk.E-3W8bFrvV.mp4`,Ai=`/assets/Kh.E-D39yty8b.mp4`,ji=`/assets/Ar.E-BmPIf9m8.mp4`,Mi=`/assets/Dq.E-2R3dLnV_.mp4`,Ni=`/assets/Vjs.E-C_FRy5h9.mp4`,Pi=`/assets/Str.E-DyWHefD2.mp4`,Fi=`/assets/Ad.E-JwRyJplW.mp4`,Ii=`/assets/Gvm.E-DRRIt9H5.mp4`,Li=`/assets/As.E-DrZtlV0_.mp4`,Ri=`/assets/Retroreview.E-UFbr_93N.mp4`,zi=`/assets/Dragonreview.E-iotMo10M.mp4`,Bi=`/assets/Vidamyurchireview.E-B-yIQDqS.mp4`,Vi=`/assets/Chian.Abisake.Host.E-CyFd-ddu.mp4`,Hi=`/assets/Neyyaolividohost.E-BOWgw6x3.mp4`,Ui=`/assets/Creativeprvid1.E-6iby8sB7.mp4`,Wi=`/assets/Creativeprvid2.E-BfKq8tgL.mp4`,O=`/assets/Creativeprvid3.E-Bwxkxbb_.mp4`,k=`/assets/Creativeprvid4.E-Dxr32ku6.mp4`,Gi=`/assets/Creativepryoutube1.E-C0M48RT1.mp4`,Ki=`/assets/Creativepryoutube2.E-DXqWaY6B.mp4`,qi=`/assets/Creativepryoutube3.E-BpxZNmpM.mp4`,Ji=`/assets/Comicreel.E-Dlalf-Uo.mp4`,Yi=`/assets/Custodyshorts.E-GeQXe3q0.mp4`,Xi=`/assets/Venkatprabhushorts.E-CZUlt485.mp4`,Zi=`/assets/Venkatprabushorts(1).E-DMPybM5e.mp4`,Qi=`/assets/Persushorts.E-CIeNohE1.mp4`,$i=`/assets/Perusushort2.E-CWX6277J.mp4`,ea=`/assets/Persushorts1.E-cgALqpCb.mp4`,ta=`/assets/Eraivishorts.E-atDM0Hh8.mp4`,na=`/assets/Ragutathashort.E-BvmbgzGl.mp4`,ra=`/assets/Raguthathashort1.E-CD7LmR8U.mp4`,ia=`/assets/Snakeladdershort.E-DvP9NvZ_.mp4`,aa=`/assets/Maha_veeranreel_Short.E-CYeHjk3g.mp4`,oa=`/assets/VPShort-D9kCwgZS.mp4`,sa=`/assets/KRR1-cvWro3Jj.mp4`,ca=`/assets/KRR2-CVuoF52I.mp4`,la=`/assets/DEARSHORT-DxK5GTM1.mp4`,ua=`/assets/VPNEW-nKwTKBfZ.mp4`,da=`/assets/KKRCD-BT3HWSgM.mp4`;const A={logo:qn,banner:Jn,abishakeRaja:Yn,stone:Xn,Stone:Zn,startda:Qn,levelup:$n,bigboss:er,Tseries:rr,PotentialStudio:nr,NutmegProduction:ir,EtakiLogo:ar,Srinivass:or,MaliMovieMAkers:sr,Arupthangles:cr,PenStudio:lr,madras:tr,abishakeimg1:ur,abishakeraj3:dr,mahaveeran:fr,madrasMatniee:pr,ptsir:mr,coustdy:hr,chitha:gr,dear:_r,Eraivan:vr,stareda:Or,Munai1:kr,Munai2:Ar,Munai3:jr,Munai4:Mr,Munai5:Nr,Munai6:Pr,Munai7:Fr,Munai8:Ir,Munai9:Lr,AbishakeAudio:Rr,openpanna:zr,OpenPannaimg:Br,NeeyaoliHost:Vr,JaamJaam:gi,CreativePr1:Hr,CreativePr2:Ur,CreativePr3:Wr,CreativePr4:Gr,CreativePr5:Kr,FilmroleAbishake:qr,AbishakeWhite:Jr,Thalivar:Yr,Vp:ei,Vijay:Xr,Nani:Zr,Danush:Qr,Str:$r,Tyagaraja:ti,Keerthi:ni,AnirutRavi:ri,Prabas:ii,Lokash:ai,Bannerrr2:oi,Angammal:yr,Kumki2:br,Gevi:xr,RetroImg:Sr,KadalReset:Cr,SnakeAndLader:wr,Adipurshan:Er,Ragut:Tr,Adiya:Dr,ComicCOverimg:si,ComicPag0:ci,ComicPag1:li,ComicPag2:ui,ComicPag3:di,ComicPag4:fi,ComicPag5:pi,ComicPag6:mi,ComicPag7:hi,ScreenshotVP:_i,ScreenshotAR:vi,ScreenshotKH:yi,ScreenshotAS:bi,ScreenshotAD:xi,ScreenshotVJS:Si,ScreenshotGVM:Ci,ScreenshotSTR:wi,ScreenshotTK:Ti,ScreenshotDQ:Ei,LCU:Di},j={vjPreviews:[ji,Oi,Pi,Ni,Fi,ki,Ai,Mi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,O,k,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,ea,$i,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da],criticMain:`/videos/critic-review.mp4`,producerReel:`/videos/production-showreel.mp4`};var fa=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),pa=s(((e,t)=>{t.exports=fa()})),ma=(0,C.createContext)({});function M(e){let t=(0,C.useRef)(null);return t.current===null&&(t.current=e()),t.current}var ha=typeof window<`u`,ga=ha?C.useLayoutEffect:C.useEffect,_a=(0,C.createContext)(null);function va(e,t){e.indexOf(t)===-1&&e.push(t)}function ya(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var ba=(e,t,n)=>n>t?t:n<e?e:n,xa={},Sa=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function Ca(e){return typeof e==`object`&&!!e}var wa=e=>/^0[^.\s]+$/u.test(e);function Ta(e){let t;return()=>(t===void 0&&(t=e()),t)}var Ea=e=>e,Da=(e,t)=>n=>t(e(n)),Oa=(...e)=>e.reduce(Da),ka=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},Aa=class{constructor(){this.subscriptions=[]}add(e){return va(this.subscriptions,e),()=>ya(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},ja=e=>e*1e3,Ma=e=>e/1e3;function Na(e,t){return t?1e3/t*e:0}var Pa=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Fa=1e-7,Ia=12;function La(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=Pa(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>Fa&&++s<Ia);return o}function Ra(e,t,n,r){if(e===t&&n===r)return Ea;let i=t=>La(t,0,1,e,n);return e=>e===0||e===1?e:Pa(i(e),t,r)}var za=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Ba=e=>t=>1-e(1-t),Va=Ra(.33,1.53,.69,.99),Ha=Ba(Va),Ua=za(Ha),Wa=e=>(e*=2)<1?.5*Ha(e):.5*(2-2**(-10*(e-1))),Ga=e=>1-Math.sin(Math.acos(e)),Ka=Ba(Ga),qa=za(Ga),Ja=Ra(.42,0,1,1),Ya=Ra(0,0,.58,1),Xa=Ra(.42,0,.58,1),Za=e=>Array.isArray(e)&&typeof e[0]!=`number`,Qa=e=>Array.isArray(e)&&typeof e[0]==`number`,$a={linear:Ea,easeIn:Ja,easeInOut:Xa,easeOut:Ya,circIn:Ga,circInOut:qa,circOut:Ka,backIn:Ha,backInOut:Ua,backOut:Va,anticipate:Wa},eo=e=>typeof e==`string`,to=e=>{if(Qa(e)){e.length;let[t,n,r,i]=e;return Ra(t,n,r,i)}else if(eo(e))return $a[e],`${e}`,$a[e];return e},no=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],ro={value:null,addProjectionMetrics:null};function io(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.has(e)||s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0,[n,r]=[r,n],n.forEach(l),t&&ro.value&&ro.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var ao=40;function oo(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=no.reduce((e,n)=>(e[n]=io(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=xa.useManualTiming?i.timestamp:performance.now();n=!1,xa.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,ao),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:no.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<no.length;t++)o[no[t]].cancel(e)},state:i,steps:o}}var{schedule:N,cancel:so,state:co,steps:lo}=oo(typeof requestAnimationFrame<`u`?requestAnimationFrame:Ea,!0),uo;function fo(){uo=void 0}var po={now:()=>(uo===void 0&&po.set(co.isProcessing||xa.useManualTiming?co.timestamp:performance.now()),uo),set:e=>{uo=e,queueMicrotask(fo)}},mo={layout:0,mainThread:0,waapi:0},ho=e=>t=>typeof t==`string`&&t.startsWith(e),go=ho(`--`),_o=ho(`var(--`),vo=e=>_o(e)?yo.test(e.split(`/*`)[0].trim()):!1,yo=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function P(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var F={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},I={...F,transform:e=>ba(0,1,e)},bo={...F,default:1},xo=e=>Math.round(e*1e5)/1e5,So=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Co(e){return e==null}var wo=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,To=(e,t)=>n=>!!(typeof n==`string`&&wo.test(n)&&n.startsWith(e)||t&&!Co(n)&&Object.prototype.hasOwnProperty.call(n,t)),Eo=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(So);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},Do=e=>ba(0,255,e),Oo={...F,transform:e=>Math.round(Do(e))},ko={test:To(`rgb`,`red`),parse:Eo(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+Oo.transform(e)+`, `+Oo.transform(t)+`, `+Oo.transform(n)+`, `+xo(I.transform(r))+`)`};function Ao(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var jo={test:To(`#`),parse:Ao,transform:ko.transform},Mo=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),No=Mo(`deg`),Po=Mo(`%`),L=Mo(`px`),Fo=Mo(`vh`),Io=Mo(`vw`),Lo={...Po,parse:e=>Po.parse(e)/100,transform:e=>Po.transform(e*100)},Ro={test:To(`hsl`,`hue`),parse:Eo(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+Po.transform(xo(t))+`, `+Po.transform(xo(n))+`, `+xo(I.transform(r))+`)`},zo={test:e=>ko.test(e)||jo.test(e)||Ro.test(e),parse:e=>ko.test(e)?ko.parse(e):Ro.test(e)?Ro.parse(e):jo.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?ko.transform(e):Ro.transform(e),getAnimatableNone:e=>{let t=zo.parse(e);return t.alpha=0,zo.transform(t)}},Bo=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Vo(e){return isNaN(e)&&typeof e==`string`&&(e.match(So)?.length||0)+(e.match(Bo)?.length||0)>0}var Ho=`number`,Uo=`color`,Wo=`var`,Go=`var(`,Ko="${}",qo=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Jo(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(qo,e=>(zo.test(e)?(r.color.push(a),i.push(Uo),n.push(zo.parse(e))):e.startsWith(Go)?(r.var.push(a),i.push(Wo),n.push(e)):(r.number.push(a),i.push(Ho),n.push(parseFloat(e))),++a,Ko)).split(Ko),indexes:r,types:i}}function Yo(e){return Jo(e).values}function Xo(e){let{split:t,types:n}=Jo(e),r=t.length;return e=>{let i=``;for(let a=0;a<r;a++)if(i+=t[a],e[a]!==void 0){let t=n[a];t===Ho?i+=xo(e[a]):t===Uo?i+=zo.transform(e[a]):i+=e[a]}return i}}var Zo=e=>typeof e==`number`?0:zo.test(e)?zo.getAnimatableNone(e):e;function Qo(e){let t=Yo(e);return Xo(e)(t.map(Zo))}var $o={test:Vo,parse:Yo,createTransformer:Xo,getAnimatableNone:Qo};function es(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ts({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=es(s,r,e+1/3),a=es(s,r,e),o=es(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function ns(e,t){return n=>n>0?t:e}var R=(e,t,n)=>e+(t-e)*n,rs=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},is=[jo,ko,Ro],as=e=>is.find(t=>t.test(e));function os(e){let t=as(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===Ro&&(n=ts(n)),n}var ss=(e,t)=>{let n=os(e),r=os(t);if(!n||!r)return ns(e,t);let i={...n};return e=>(i.red=rs(n.red,r.red,e),i.green=rs(n.green,r.green,e),i.blue=rs(n.blue,r.blue,e),i.alpha=R(n.alpha,r.alpha,e),ko.transform(i))},cs=new Set([`none`,`hidden`]);function ls(e,t){return cs.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function us(e,t){return n=>R(e,t,n)}function ds(e){return typeof e==`number`?us:typeof e==`string`?vo(e)?ns:zo.test(e)?ss:hs:Array.isArray(e)?fs:typeof e==`object`?zo.test(e)?ss:ps:ns}function fs(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>ds(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function ps(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=ds(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function ms(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var hs=(e,t)=>{let n=$o.createTransformer(t),r=Jo(e),i=Jo(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?cs.has(e)&&!i.values.length||cs.has(t)&&!r.values.length?ls(e,t):Oa(fs(ms(r,i),i.values),n):(`${e}${t}`,ns(e,t))};function gs(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?R(e,t,n):ds(e)(e,t)}var _s=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>N.update(t,e),stop:()=>so(t),now:()=>co.isProcessing?co.timestamp:po.now()}},vs=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},ys=2e4;function bs(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function xs(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(bs(r),ys);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:Ma(i)}}var Ss=5;function Cs(e,t,n){let r=Math.max(t-Ss,0);return Na(n-e(r),t-r)}var z={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ws=.001;function Ts({duration:e=z.duration,bounce:t=z.bounce,velocity:n=z.velocity,mass:r=z.mass}){let i,a;z.maxDuration;let o=1-t;o=ba(z.minDamping,z.maxDamping,o),e=ba(z.minDuration,z.maxDuration,Ma(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Os(t,o),c=Math.exp(-i);return ws-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Os(t**2,o);return(-i(t)+ws>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-ws+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Ds(i,a,s);if(e=ja(e),isNaN(c))return{stiffness:z.stiffness,damping:z.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var Es=12;function Ds(e,t,n){let r=n;for(let n=1;n<Es;n++)r-=e(r)/t(r);return r}function Os(e,t){return e*Math.sqrt(1-t*t)}var ks=[`duration`,`bounce`],As=[`stiffness`,`damping`,`mass`];function js(e,t){return t.some(t=>e[t]!==void 0)}function Ms(e){let t={velocity:z.velocity,stiffness:z.stiffness,damping:z.damping,mass:z.mass,isResolvedFromDuration:!1,...e};if(!js(e,As)&&js(e,ks))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*ba(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:z.mass,stiffness:i,damping:a}}else{let n=Ts({...e,velocity:0});t={...t,...n,mass:z.mass},t.isResolvedFromDuration=!0}return t}function Ns(e=z.visualDuration,t=z.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=Ms({...n,velocity:-Ma(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=Ma(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?z.restSpeed.granular:z.restSpeed.default,i||=v?z.restDelta.granular:z.restDelta.default;let y;if(h<1){let e=Os(_,h);y=t=>o-Math.exp(-h*_*t)*((m+h*_*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}else if(h===1)y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}let b={calculatedDuration:p&&d||null,next:e=>{let t=y(e);if(p)s.done=e>=d;else{let n=e===0?m:0;h<1&&(n=e===0?ja(m):Cs(y,e,t));let a=Math.abs(n)<=r,c=Math.abs(o-t)<=i;s.done=a&&c}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(bs(b),ys),t=vs(t=>b.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return b}Ns.applyToOptions=e=>{let t=xs(e,100,Ns);return e.ease=t.ease,e.duration=ja(t.duration),e.type=`keyframes`,e};function Ps({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,ee=e=>{p(f.value)&&(x=e,S=Ns({keyframes:[f.value,m(f.value)],velocity:Cs(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return ee(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),ee(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function Fs(e,t,n){let r=[],i=n||xa.mix||gs,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=Oa(Array.isArray(t)?t[n]||Ea:t,a)),r.push(a)}return r}function Is(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=Fs(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=ka(e[r],e[r+1],n);return s[r](i)};return n?t=>l(ba(e[0],e[a-1],t)):l}function Ls(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=ka(0,t,r);e.push(R(n,1,i))}}function Rs(e){let t=[0];return Ls(t,e.length-1),t}function zs(e,t){return e.map(e=>e*t)}function Bs(e,t){return e.map(()=>t||Xa).splice(0,e.length-1)}function Vs({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=Za(r)?r.map(to):to(r),a={done:!1,value:t[0]},o=Is(zs(n&&n.length===t.length?n:Rs(t),e),t,{ease:Array.isArray(i)?i:Bs(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var Hs=e=>e!==null;function Us(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(Hs),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var Ws={decay:Ps,inertia:Ps,tween:Vs,keyframes:Vs,spring:Ns};function Gs(e){typeof e.type==`string`&&(e.type=Ws[e.type])}var Ks=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},qs=e=>e/100,Js=class extends Ks{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==po.now()&&this.tick(po.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},mo.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;Gs(e);let{type:t=Vs,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||Vs;s!==Vs&&typeof o[0]!=`number`&&(this.mixKeyframes=Oa(qs,gs(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=bs(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=ba(0,1,n)*o}let b=_?{done:!1,value:l[0]}:y.next(v);i&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==Ps&&(b.value=Us(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return Ma(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Ma(e)}get time(){return Ma(this.currentTime)}set time(e){e=ja(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(po.now());let t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Ma(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=_s,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(po.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,mo.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function Ys(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var Xs=e=>e*180/Math.PI,Zs=e=>$s(Xs(Math.atan2(e[1],e[0]))),Qs={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Zs,rotateZ:Zs,skewX:e=>Xs(Math.atan(e[1])),skewY:e=>Xs(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},$s=e=>(e%=360,e<0&&(e+=360),e),ec=Zs,tc=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),nc=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),rc={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:tc,scaleY:nc,scale:e=>(tc(e)+nc(e))/2,rotateX:e=>$s(Xs(Math.atan2(e[6],e[5]))),rotateY:e=>$s(Xs(Math.atan2(-e[2],e[0]))),rotateZ:ec,rotate:ec,skewX:e=>Xs(Math.atan(e[4])),skewY:e=>Xs(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function ic(e){return e.includes(`scale`)?1:0}function ac(e,t){if(!e||e===`none`)return ic(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=rc,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Qs,i=t}if(!i)return ic(t);let a=r[t],o=i[1].split(`,`).map(sc);return typeof a==`function`?a(o):o[a]}var oc=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return ac(n,t)};function sc(e){return parseFloat(e.trim())}var cc=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],lc=new Set(cc),uc=e=>e===F||e===L,dc=new Set([`x`,`y`,`z`]),fc=cc.filter(e=>!dc.has(e));function pc(e){let t=[];return fc.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith(`scale`)?1:0))}),t}var mc={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>ac(t,`x`),y:(e,{transform:t})=>ac(t,`y`)};mc.translateX=mc.x,mc.translateY=mc.y;var hc=new Set,gc=!1,_c=!1,vc=!1;function yc(){if(_c){let e=Array.from(hc).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=pc(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}_c=!1,gc=!1,hc.forEach(e=>e.complete(vc)),hc.clear()}function bc(){hc.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(_c=!0)})}function xc(){vc=!0,bc(),yc(),vc=!1}var Sc=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(hc.add(this),gc||(gc=!0,N.read(bc),N.resolveKeyframes(yc))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}Ys(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),hc.delete(this)}cancel(){this.state===`scheduled`&&(hc.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Cc=e=>e.startsWith(`--`);function wc(e,t,n){Cc(t)?e.style.setProperty(t,n):e.style[t]=n}var Tc={};function Ec(e,t){let n=Ta(e);return()=>Tc[t]??n()}var Dc=Ec(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),Oc=Ec(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),kc=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Ac={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:kc([0,.65,.55,1]),circOut:kc([.55,0,1,.45]),backIn:kc([.31,.01,.66,-.59]),backOut:kc([.33,1.53,.69,.99])};function jc(e,t){if(e)return typeof e==`function`?Oc()?vs(e,t):`ease-out`:Qa(e)?kc(e):Array.isArray(e)?e.map(e=>jc(e,t)||Ac.easeOut):Ac[e]}function Mc(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=jc(s,i);Array.isArray(d)&&(u.easing=d),ro.value&&mo.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return ro.value&&p.finished.finally(()=>{mo.waapi--}),p}function Nc(e){return typeof e==`function`&&`applyToOptions`in e}function Pc({type:e,...t}){return Nc(e)&&Oc()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var Fc=class extends Ks{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=Pc(e);this.animation=Mc(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=Us(r,this.options,o,this.speed);this.updateMotionValue?this.updateMotionValue(e):wc(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return Ma(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Ma(e)}get time(){return Ma(Number(this.animation.currentTime)||0)}set time(e){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ja(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&Dc()?(this.animation.timeline=e,Ea):t(this)}},Ic={anticipate:Wa,backInOut:Ua,circInOut:qa};function Lc(e){return e in Ic}function Rc(e){typeof e.ease==`string`&&Lc(e.ease)&&(e.ease=Ic[e.ease])}var zc=10,Bc=class extends Fc{constructor(e){Rc(e),Gs(e),super(e),e.startTime!==void 0&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new Js({...a,autoplay:!1}),s=Math.max(zc,po.now()-this.startTime),c=ba(0,zc,s-zc);t.setWithVelocity(o.sample(Math.max(0,s-c)).value,o.sample(s).value,c),o.stop()}},Vc=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&($o.test(e)||e===`0`)&&!e.startsWith(`url(`));function B(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Hc(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=Vc(i,t),s=Vc(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:B(e)||(n===`spring`||Nc(n))&&r}function Uc(e){e.duration=0,e.type=`keyframes`}var Wc=new Set([`opacity`,`clipPath`,`filter`,`transform`]),Gc=Ta(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function Kc(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:s,transformTemplate:c}=t.owner.getProps();return Gc()&&n&&Wc.has(n)&&(n!==`transform`||!c)&&!s&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var qc=40,Jc=class extends Ks{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=po.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u};this.keyframeResolver=new(l?.KeyframeResolver||Sc)(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=po.now(),Hc(e,i,a,o)||((xa.instantAnimations||!s)&&l?.(Us(e,n,t)),e[0]=e[e.length-1],Uc(n),n.repeat=0);let u={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>qc?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},d=!c&&Kc(u),f=u.motionValue?.owner?.current,p=d?new Bc({...u,element:f}):new Js(u);p.finished.then(()=>{this.notifyFinished()}).catch(Ea),this.pendingTimeline&&=(this.stopTimeline=p.attachTimeline(this.pendingTimeline),void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),xc()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function Yc(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var Xc=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Zc(e){let t=Xc.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function Qc(e,t,n=1){`${e}`;let[r,i]=Zc(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Sa(e)?parseFloat(e):e}return vo(i)?Qc(i,t,n+1):i}var $c={type:`spring`,stiffness:500,damping:25,restSpeed:10},el=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),tl={type:`keyframes`,duration:.8},nl={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},rl=(e,{keyframes:t})=>t.length>2?tl:lc.has(e)?e.startsWith(`scale`)?el(t[1]):$c:nl,il=e=>e!==null;function al(e,{repeat:t,repeatType:n=`loop`},r){let i=e.filter(il),a=t&&n!==`loop`&&t%2==1?0:i.length-1;return!a||r===void 0?i[a]:r}function ol(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function sl(e,t){let n=e?.[t]??e?.default??e;return n===e?n:ol(n,e)}function cl({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:c,elapsed:l,...u}){return!!Object.keys(u).length}var ll=(e,t,n,r={},i,a)=>o=>{let s=sl(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=ja(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};cl(s)||Object.assign(u,rl(e,u)),u.duration&&=ja(u.duration),u.repeatDelay&&=ja(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Uc(u),u.delay===0&&(d=!0)),(xa.instantAnimations||xa.skipAnimations||i?.shouldSkipAnimations)&&(d=!0,Uc(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=al(u.keyframes,s);if(e!==void 0){N.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new Js(u):new Jc(u)};function ul(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function dl(e,t,n,r){if(typeof t==`function`){let[i,a]=ul(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=ul(r);t=t(n===void 0?e.custom:n,i,a)}return t}function V(e,t,n){let r=e.getProps();return dl(r,t,n===void 0?r.custom:n,e)}var fl=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...cc]),pl=30,ml=e=>!isNaN(parseFloat(e)),hl={current:void 0},gl=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=po.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=po.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=ml(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new Aa);let n=this.events[e].add(t);return e===`change`?()=>{n(),N.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return hl.current&&hl.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=po.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>pl)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,pl);return Na(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function _l(e,t){return new gl(e,t)}var vl=e=>Array.isArray(e);function yl(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,_l(n))}function bl(e){return vl(e)?e[e.length-1]||0:e}function xl(e,t){let{transitionEnd:n={},transition:r={},...i}=V(e,t)||{};i={...i,...n};for(let t in i)yl(e,t,bl(i[t]))}var H=e=>!!(e&&e.getVelocity);function Sl(e){return!!(H(e)&&e.add)}function Cl(e,t){let n=e.getValue(`willChange`);if(Sl(n))return n.add(t);if(!n&&xa.WillChange){let n=new xa.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function wl(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Tl=`data-`+wl(`framerAppearId`);function El(e){return e.props[Tl]}function Dl({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Ol(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?ol(a,c):c;let l=a?.reduceMotion;r&&(a=r);let u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||d&&Dl(d,t))continue;let o={delay:n,...sl(a||{},t)},c=r.get();if(c!==void 0&&!r.isAnimating&&!Array.isArray(i)&&i===c&&!o.velocity)continue;let f=!1;if(window.MotionHandoffAnimation){let n=El(e);if(n){let e=window.MotionHandoffAnimation(n,t,N);e!==null&&(o.startTime=e,f=!0)}}Cl(e,t);let p=l??e.shouldReduceMotion;r.start(ll(t,r,i,p&&fl.has(t)?{type:!1}:o,e,f));let m=r.animation;m&&u.push(m)}if(o){let t=()=>N.update(()=>{o&&xl(e,o)});u.length?Promise.all(u).then(t):t()}return u}function kl(e,t,n={}){let r=V(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(Ol(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return Al(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function Al(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(kl(c,t,{...o,delay:n+(typeof r==`function`?0:r)+Yc(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function jl(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>kl(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=kl(e,t,n);else{let i=typeof t==`function`?V(e,t,n.custom):t;r=Promise.all(Ol(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var Ml={test:e=>e===`auto`,parse:e=>e},Nl=e=>t=>t.test(e),Pl=[F,L,Po,No,Io,Fo,Ml],Fl=e=>Pl.find(Nl(e));function Il(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||wa(e)}var Ll=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function Rl(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(So)||[];if(!r)return e;let i=n.replace(r,``),a=Ll.has(t)?1:0;return r!==n&&(a*=100),t+`(`+a+i+`)`}var zl=/\b([a-z-]*)\(.*?\)/gu,Bl={...$o,getAnimatableNone:e=>{let t=e.match(zl);return t?t.map(Rl).join(` `):e}},Vl={...$o,getAnimatableNone:e=>{let t=$o.parse(e);return $o.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},U={...F,transform:Math.round},W={borderWidth:L,borderTopWidth:L,borderRightWidth:L,borderBottomWidth:L,borderLeftWidth:L,borderRadius:L,borderTopLeftRadius:L,borderTopRightRadius:L,borderBottomRightRadius:L,borderBottomLeftRadius:L,width:L,maxWidth:L,height:L,maxHeight:L,top:L,right:L,bottom:L,left:L,inset:L,insetBlock:L,insetBlockStart:L,insetBlockEnd:L,insetInline:L,insetInlineStart:L,insetInlineEnd:L,padding:L,paddingTop:L,paddingRight:L,paddingBottom:L,paddingLeft:L,paddingBlock:L,paddingBlockStart:L,paddingBlockEnd:L,paddingInline:L,paddingInlineStart:L,paddingInlineEnd:L,margin:L,marginTop:L,marginRight:L,marginBottom:L,marginLeft:L,marginBlock:L,marginBlockStart:L,marginBlockEnd:L,marginInline:L,marginInlineStart:L,marginInlineEnd:L,fontSize:L,backgroundPositionX:L,backgroundPositionY:L,rotate:No,rotateX:No,rotateY:No,rotateZ:No,scale:bo,scaleX:bo,scaleY:bo,scaleZ:bo,skew:No,skewX:No,skewY:No,distance:L,translateX:L,translateY:L,translateZ:L,x:L,y:L,z:L,perspective:L,transformPerspective:L,opacity:I,originX:Lo,originY:Lo,originZ:L,zIndex:U,fillOpacity:I,strokeOpacity:I,numOctaves:U},G={...W,color:zo,backgroundColor:zo,outlineColor:zo,fill:zo,stroke:zo,borderColor:zo,borderTopColor:zo,borderRightColor:zo,borderBottomColor:zo,borderLeftColor:zo,filter:Bl,WebkitFilter:Bl,mask:Vl,WebkitMask:Vl},K=e=>G[e],q=new Set([Bl,Vl]);function Hl(e,t){let n=K(e);return q.has(n)||(n=$o),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var Ul=new Set([`auto`,`none`,`0`]);function Wl(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!Ul.has(t)&&Jo(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=Hl(n,i)}var Gl=class extends Sc{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),vo(r))){let i=Qc(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!fl.has(n)||e.length!==2)return;let[r,i]=e,a=Fl(r),o=Fl(i);if(P(r)!==P(i)&&mc[n]){this.needsMeasurement=!0;return}if(a!==o)if(uc(a)&&uc(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else mc[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||Il(e[t]))&&n.push(t);n.length&&Wl(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=mc[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=mc[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}},Kl=new Set([`opacity`,`clipPath`,`filter`,`transform`]);function J(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var ql=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function Jl(e){return Ca(e)&&`offsetHeight`in e}var{schedule:Yl,cancel:Xl}=oo(queueMicrotask,!1),Zl={x:!1,y:!1};function Ql(){return Zl.x||Zl.y}function $l(e){return e===`x`||e===`y`?Zl[e]?null:(Zl[e]=!0,()=>{Zl[e]=!1}):Zl.x||Zl.y?null:(Zl.x=Zl.y=!0,()=>{Zl.x=Zl.y=!1})}function eu(e,t){let n=J(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function tu(e){return!(e.pointerType===`touch`||Ql())}function nu(e,t,n={}){let[r,i,a]=eu(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!tu(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var ru=(e,t)=>t?e===t?!0:ru(e,t.parentElement):!1,iu=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,au=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function ou(e){return au.has(e.tagName)||e.isContentEditable===!0}var su=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function cu(e){return su.has(e.tagName)||e.isContentEditable===!0}var lu=new WeakSet;function uu(e){return t=>{t.key===`Enter`&&e(t)}}function du(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var fu=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=uu(()=>{if(lu.has(n))return;du(n,`down`);let e=uu(()=>{du(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>du(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function pu(e){return iu(e)&&!Ql()}var mu=new WeakSet;function hu(e,t,n={}){let[r,i,a]=eu(e,n),o=e=>{let r=e.currentTarget;if(!pu(e)||mu.has(e))return;lu.add(r),n.stopPropagation&&mu.add(e);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),lu.has(r)&&lu.delete(r),pu(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||ru(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),Jl(e)&&(e.addEventListener(`focus`,e=>fu(e,i)),!ou(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function gu(e){return Ca(e)&&`ownerSVGElement`in e}var _u=new WeakMap,vu,yu=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:gu(r)&&`getBBox`in r?r.getBBox()[t]:r[n],bu=yu(`inline`,`width`,`offsetWidth`),xu=yu(`block`,`height`,`offsetHeight`);function Su({target:e,borderBoxSize:t}){_u.get(e)?.forEach(n=>{n(e,{get width(){return bu(e,t)},get height(){return xu(e,t)}})})}function Cu(e){e.forEach(Su)}function wu(){typeof ResizeObserver>`u`||(vu=new ResizeObserver(Cu))}function Tu(e,t){vu||wu();let n=J(e);return n.forEach(e=>{let n=_u.get(e);n||(n=new Set,_u.set(e,n)),n.add(t),vu?.observe(e)}),()=>{n.forEach(e=>{let n=_u.get(e);n?.delete(t),n?.size||vu?.unobserve(e)})}}var Eu=new Set,Du;function Ou(){Du=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Eu.forEach(t=>t(e))},window.addEventListener(`resize`,Du)}function ku(e){return Eu.add(e),Du||Ou(),()=>{Eu.delete(e),!Eu.size&&typeof Du==`function`&&(window.removeEventListener(`resize`,Du),Du=void 0)}}function Au(e,t){return typeof e==`function`?ku(e):Tu(e,t)}function ju(e){return gu(e)&&e.tagName===`svg`}function Mu(...e){let t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],a=e[2+n],o=e[3+n],s=Is(i,a,o);return t?s(r):s}function Nu(e,t,n={}){let r=e.get(),i=null,a=r,o,s=typeof r==`string`?r.replace(/[\d.-]/g,``):void 0,c=()=>{i&&=(i.stop(),null)},l=()=>{c();let t=Fu(e.get()),r=Fu(a);t!==r&&(i=new Js({keyframes:[t,r],velocity:e.getVelocity(),type:`spring`,restDelta:.001,restSpeed:.01,...n,onUpdate:o}))};if(e.attach((t,n)=>{a=t,o=e=>n(Pu(e,s)),N.postRender(()=>{l(),e.events.animationStart?.notify(),i?.then(()=>{e.events.animationComplete?.notify()})})},c),H(t)){let n=t.on(`change`,t=>e.set(Pu(t,s))),r=e.on(`destroy`,n);return()=>{n(),r()}}return c}function Pu(e,t){return t?e+t:e}function Fu(e){return typeof e==`number`?e:parseFloat(e)}var Iu=[...Pl,zo,$o],Lu=e=>Iu.find(Nl(e)),Ru=()=>({translate:0,scale:1,origin:0,originPoint:0}),zu=()=>({x:Ru(),y:Ru()}),Bu=()=>({min:0,max:0}),Vu=()=>({x:Bu(),y:Bu()}),Hu=new WeakMap;function Uu(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function Wu(e){return typeof e==`string`||Array.isArray(e)}var Gu=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],Ku=[`initial`,...Gu];function Y(e){return Uu(e.animate)||Ku.some(t=>Wu(e[t]))}function qu(e){return!!(Y(e)||e.variants)}function Ju(e,t,n){for(let r in t){let i=t[r],a=n[r];if(H(i))e.addValue(r,i);else if(H(a))e.addValue(r,_l(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,_l(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var Yu={current:null},Xu={current:!1},Zu=typeof window<`u`;function Qu(){if(Xu.current=!0,Zu)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Yu.current=e.matches;e.addEventListener(`change`,t),t()}else Yu.current=!1}var $u=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],ed={};function td(e){ed=e}function nd(){return ed}var rd=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Sc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=po.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,N.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Y(t),this.isVariantNode=qu(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&H(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,Hu.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Xu.current||Qu(),this.shouldReduceMotion=Yu.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),so(this.notifyUpdate),so(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Kl.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new Fc({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:ja(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=lc.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&N.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in ed){let t=ed[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Vu()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<$u.length;t++){let n=$u[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=Ju(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=_l(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Sa(n)||wa(n))?n=parseFloat(n):!Lu(n)&&$o.test(t)&&(n=Hl(e,t)),this.setBaseTarget(e,H(n)?n.get():n)),H(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=dl(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!H(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Aa),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Yl.render(this.render)}},id=class extends rd{constructor(){super(...arguments),this.KeyframeResolver=Gl}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;H(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},ad=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function od({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function sd({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function cd(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function ld(e){return e===void 0||e===1}function ud({scale:e,scaleX:t,scaleY:n}){return!ld(e)||!ld(t)||!ld(n)}function dd(e){return ud(e)||fd(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function fd(e){return pd(e.x)||pd(e.y)}function pd(e){return e&&e!==`0%`}function md(e,t,n){return n+t*(e-n)}function hd(e,t,n,r,i){return i!==void 0&&(e=md(e,i,r)),md(e,n,r)+t}function gd(e,t=0,n=1,r,i){e.min=hd(e.min,t,n,r,i),e.max=hd(e.max,t,n,r,i)}function _d(e,{x:t,y:n}){gd(e.x,t.translate,t.scale,t.originPoint),gd(e.y,n.translate,n.scale,n.originPoint)}var vd=.999999999999,yd=1.0000000000001;function bd(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Sd(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,_d(e,o)),r&&dd(a.latestValues)&&Sd(e,a.latestValues))}t.x<yd&&t.x>vd&&(t.x=1),t.y<yd&&t.y>vd&&(t.y=1)}function xd(e,t){e.min+=t,e.max+=t}function X(e,t,n,r,i=.5){gd(e,t,n,R(e.min,e.max,i),r)}function Sd(e,t){X(e.x,t.x,t.scaleX,t.scale,t.originX),X(e.y,t.y,t.scaleY,t.scale,t.originY)}function Cd(e,t){return od(cd(e.getBoundingClientRect(),t))}function wd(e,t,n){let r=Cd(e,n),{scroll:i}=t;return i&&(xd(r.x,i.offset.x),xd(r.y,i.offset.y)),r}var Td={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Ed=cc.length;function Dd(e,t,n){let r=``,i=!0;for(let a=0;a<Ed;a++){let o=cc[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===(o.startsWith(`scale`)?1:0);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=ql(s,W[o]);if(!c){i=!1;let t=Td[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function Od(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(lc.has(e)){o=!0;continue}else if(go(e)){i[e]=n;continue}else{let t=ql(n,W[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Dd(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function kd(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Ad(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var jd={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(L.test(e))e=parseFloat(e);else return e;return`${Ad(e,t.target.x)}% ${Ad(e,t.target.y)}%`}},Md={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=$o.parse(e);if(i.length>5)return r;let a=$o.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=R(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},Nd={borderRadius:{...jd,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:jd,borderTopRightRadius:jd,borderBottomLeftRadius:jd,borderBottomRightRadius:jd,boxShadow:Md};function Pd(e,{layout:t,layoutId:n}){return lc.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!Nd[e]||e===`opacity`)}function Z(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(H(r[t])||i&&H(i[t])||Pd(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Fd(e){return window.getComputedStyle(e)}var Id=class extends id{constructor(){super(...arguments),this.type=`html`,this.renderInstance=kd}readValueFromInstance(e,t){if(lc.has(t))return this.projection?.isProjecting?ic(t):oc(e,t);{let n=Fd(e),r=(go(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Cd(e,t)}build(e,t,n){Od(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Z(e,t,n)}},Ld={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Rd={offset:`strokeDashoffset`,array:`strokeDasharray`};function zd(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Ld:Rd;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Bd=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function Vd(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Od(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of Bd)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&zd(d,i,a,o,!1)}var Hd=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),Ud=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function Wd(e,t,n,r){kd(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(Hd.has(n)?n:wl(n),t.attrs[n])}function Gd(e,t,n){let r=Z(e,t,n);for(let n in e)if(H(e[n])||H(t[n])){let t=cc.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var Kd=class extends id{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=Vu}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(lc.has(t)){let e=K(t);return e&&e.default||0}return t=Hd.has(t)?t:wl(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Gd(e,t,n)}build(e,t,n){Vd(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){Wd(e,t,n,r)}mount(e){this.isSVGTag=Ud(e.tagName),super.mount(e)}},qd=Ku.length;function Jd(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&Jd(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<qd;n++){let r=Ku[n],i=e.props[r];(Wu(i)||i===!1)&&(t[r]=i)}return t}function Yd(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var Xd=[...Gu].reverse(),Zd=Gu.length;function Qd(e){return t=>Promise.all(t.map(({animation:t,options:n})=>jl(e,t,n)))}function $d(e){let t=Qd(e),n=nf(),r=!0,i=t=>(n,r)=>{let i=V(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function a(n){t=n(e)}function o(a){let{props:o}=e,s=Jd(e.parent)||{},c=[],l=new Set,u={},d=1/0;for(let t=0;t<Zd;t++){let f=Xd[t],p=n[f],m=o[f]===void 0?s[f]:o[f],h=Wu(m),g=f===a?p.isActive:null;g===!1&&(d=t);let _=m===s[f]&&m!==o[f]&&h;if(_&&r&&e.manuallyAnimateOnMount&&(_=!1),p.protectedKeys={...u},!p.isActive&&g===null||!m&&!p.prevProp||Uu(m)||typeof m==`boolean`)continue;if(f===`exit`&&p.isActive&&g!==!0){p.prevResolvedValues&&(u={...u,...p.prevResolvedValues});continue}let v=ef(p.prevProp,m),y=v||f===a&&p.isActive&&!_&&h||t>d&&h,b=!1,x=Array.isArray(m)?m:[m],S=x.reduce(i(f),{});g===!1&&(S={});let{prevResolvedValues:ee={}}=p,C={...ee,...S},te=t=>{y=!0,l.has(t)&&(b=!0,l.delete(t)),p.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in C){let t=S[e],n=ee[e];if(u.hasOwnProperty(e))continue;let r=!1;r=vl(t)&&vl(n)?!Yd(t,n):t!==n,r?t==null?l.add(e):te(e):t!==void 0&&l.has(e)?te(e):p.protectedKeys[e]=!0}p.prevProp=m,p.prevResolvedValues=S,p.isActive&&(u={...u,...S}),r&&e.blockInitialAnimation&&(y=!1);let ne=_&&v;y&&(!ne||b)&&c.push(...x.map(t=>{let n={type:f};if(typeof t==`string`&&r&&!ne&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=V(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=Yc(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(l.size){let t={};if(typeof o.initial!=`boolean`){let n=V(e,Array.isArray(o.initial)?o.initial[0]:o.initial);n&&n.transition&&(t.transition=n.transition)}l.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),c.push({animation:t})}let f=!!c.length;return r&&(o.initial===!1||o.initial===o.animate)&&!e.manuallyAnimateOnMount&&(f=!1),r=!1,f?t(c):Promise.resolve()}function s(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=o(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=nf()}}}function ef(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!Yd(t,e):!1}function tf(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function nf(){return{animate:tf(!0),whileInView:tf(),whileHover:tf(),whileTap:tf(),whileDrag:tf(),whileFocus:tf(),exit:tf()}}function rf(e,t){e.min=t.min,e.max=t.max}function af(e,t){rf(e.x,t.x),rf(e.y,t.y)}function of(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var sf=1e-4,cf=1-sf,lf=1+sf,uf=.01,df=0-uf,ff=0+uf;function pf(e){return e.max-e.min}function mf(e,t,n){return Math.abs(e-t)<=n}function hf(e,t,n,r=.5){e.origin=r,e.originPoint=R(t.min,t.max,e.origin),e.scale=pf(n)/pf(t),e.translate=R(n.min,n.max,e.origin)-e.originPoint,(e.scale>=cf&&e.scale<=lf||isNaN(e.scale))&&(e.scale=1),(e.translate>=df&&e.translate<=ff||isNaN(e.translate))&&(e.translate=0)}function gf(e,t,n,r){hf(e.x,t.x,n.x,r?r.originX:void 0),hf(e.y,t.y,n.y,r?r.originY:void 0)}function _f(e,t,n){e.min=n.min+t.min,e.max=e.min+pf(t)}function vf(e,t,n){_f(e.x,t.x,n.x),_f(e.y,t.y,n.y)}function yf(e,t,n){e.min=t.min-n.min,e.max=e.min+pf(t)}function bf(e,t,n){yf(e.x,t.x,n.x),yf(e.y,t.y,n.y)}function xf(e,t,n,r,i){return e-=t,e=md(e,1/n,r),i!==void 0&&(e=md(e,1/i,r)),e}function Sf(e,t=0,n=1,r=.5,i,a=e,o=e){if(Po.test(t)&&(t=parseFloat(t),t=R(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=R(a.min,a.max,r);e===a&&(s-=t),e.min=xf(e.min,t,n,s,i),e.max=xf(e.max,t,n,s,i)}function Cf(e,t,[n,r,i],a,o){Sf(e,t[n],t[r],t[i],t.scale,a,o)}var wf=[`x`,`scaleX`,`originX`],Tf=[`y`,`scaleY`,`originY`];function Ef(e,t,n,r){Cf(e.x,t,wf,n?n.x:void 0,r?r.x:void 0),Cf(e.y,t,Tf,n?n.y:void 0,r?r.y:void 0)}function Df(e){return e.translate===0&&e.scale===1}function Of(e){return Df(e.x)&&Df(e.y)}function kf(e,t){return e.min===t.min&&e.max===t.max}function Af(e,t){return kf(e.x,t.x)&&kf(e.y,t.y)}function jf(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Mf(e,t){return jf(e.x,t.x)&&jf(e.y,t.y)}function Nf(e){return pf(e.x)/pf(e.y)}function Pf(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Ff(e){return[e(`x`),e(`y`)]}function If(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Lf=[`TopLeft`,`TopRight`,`BottomLeft`,`BottomRight`],Rf=Lf.length,zf=e=>typeof e==`string`?parseFloat(e):e,Bf=e=>typeof e==`number`||L.test(e);function Vf(e,t,n,r,i,a){i?(e.opacity=R(0,n.opacity??1,Uf(r)),e.opacityExit=R(t.opacity??1,0,Wf(r))):a&&(e.opacity=R(t.opacity??1,n.opacity??1,r));for(let i=0;i<Rf;i++){let a=`border${Lf[i]}Radius`,o=Hf(t,a),s=Hf(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||Bf(o)===Bf(s)?(e[a]=Math.max(R(zf(o),zf(s),r),0),(Po.test(s)||Po.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=R(t.rotate||0,n.rotate||0,r))}function Hf(e,t){return e[t]===void 0?e.borderRadius:e[t]}var Uf=Gf(0,.5,Ka),Wf=Gf(.5,.95,Ea);function Gf(e,t,n){return r=>r<e?0:r>t?1:n(ka(e,t,r))}function Kf(e,t,n){let r=H(e)?e:_l(e);return r.start(ll(``,r,t,n)),r.animation}function qf(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var Jf=(e,t)=>e.depth-t.depth,Yf=class{constructor(){this.children=[],this.isDirty=!1}add(e){va(this.children,e),this.isDirty=!0}remove(e){ya(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Jf),this.isDirty=!1,this.children.forEach(e)}};function Xf(e,t){let n=po.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(so(r),e(a-t))};return N.setup(r,!0),()=>so(r)}function Zf(e){return H(e)?e.get():e}var Qf=class{constructor(){this.members=[]}add(e){va(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;r&&r.isConnected===!1&&n.isPresent!==!1&&!n.snapshot&&ya(this.members,n)}e.scheduleRender()}remove(e){if(ya(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t=this.members.findIndex(t=>e===t);if(t===0)return!1;let n;for(let e=t;e>=0;e--){let t=this.members[e],r=t.instance;if(t.isPresent!==!1&&(!r||r.isConnected!==!1)){n=t;break}}return n?(this.promote(n),!0):!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender();let r=n.options.layoutDependency,i=e.options.layoutDependency;if(!(r!==void 0&&i!==void 0&&r===i)){let r=n.instance;r&&r.isConnected===!1&&!n.snapshot||(e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0))}let{crossfade:a}=e.options;a===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}},$f={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ep={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},tp=[``,`X`,`Y`,`Z`],np=1e3,rp=0;function ip(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function ap(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=El(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,N,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&ap(r)}function op({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=rp++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ro.value&&(ep.nodes=ep.calculatedTargetDeltas=ep.calculatedProjections=0),this.nodes.forEach(lp),this.nodes.forEach(gp),this.nodes.forEach(_p),this.nodes.forEach(up),ro.addProjectionMetrics&&ro.addProjectionMetrics(ep)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new Yf)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Aa),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=gu(t)&&!ju(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;N.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=Xf(i,250),$f.hasAnimatedSinceResize&&($f.hasAnimatedSinceResize=!1,this.nodes.forEach(hp)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||wp,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Mf(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...sl(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||hp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),so(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(vp),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ap(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(fp);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(pp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(mp),this.nodes.forEach(sp),this.nodes.forEach(cp)):this.nodes.forEach(pp),this.clearAllSnapshots();let e=po.now();co.delta=ba(0,1e3/60,e-co.timestamp),co.timestamp=e,co.isProcessing=!0,lo.update.process(co),lo.preRender.process(co),lo.render.process(co),co.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Yl.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(dp),this.sharedNodes.forEach(yp)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,N.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){N.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!pf(this.snapshot.measuredBox.x)&&!pf(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Vu(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Of(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||dd(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Op(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return Vu();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Ap))){let{scroll:e}=this.root;e&&(xd(t.x,e.offset.x),xd(t.y,e.offset.y))}return t}removeElementScroll(e){let t=Vu();if(af(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&af(t,e),xd(t.x,i.offset.x),xd(t.y,i.offset.y))}return t}applyTransform(e,t=!1){let n=Vu();af(n,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];!t&&r.options.layoutScroll&&r.scroll&&r!==r.root&&Sd(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),dd(r.latestValues)&&Sd(n,r.latestValues)}return dd(this.latestValues)&&Sd(n,this.latestValues),n}removeTransform(e){let t=Vu();af(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!n.instance||!dd(n.latestValues))continue;ud(n.latestValues)&&n.updateSnapshot();let r=Vu();af(r,n.measurePageBox()),Ef(t,n.latestValues,n.snapshot?n.snapshot.layoutBox:void 0,r)}return dd(this.latestValues)&&Ef(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==co.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=co.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Vu(),this.targetWithTransforms=Vu()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),vf(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):af(this.target,this.layout.layoutBox),_d(this.target,this.targetDelta)):af(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),ro.value&&ep.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||ud(this.parent.latestValues)||fd(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Vu(),this.relativeTargetOrigin=Vu(),bf(this.relativeTargetOrigin,t,n),af(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===co.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;af(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;bd(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=Vu());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(of(this.prevProjectionDelta.x,this.projectionDelta.x),of(this.prevProjectionDelta.y,this.projectionDelta.y)),gf(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Pf(this.projectionDelta.x,this.prevProjectionDelta.x)||!Pf(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),ro.value&&ep.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=zu(),this.projectionDelta=zu(),this.projectionDeltaWithTransform=zu()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=zu();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=Vu(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(Cp));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;bp(a.x,e.x,n),bp(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(bf(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Sp(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&Af(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=Vu(),af(d,this.relativeTarget)),s&&(this.animationValues=i,Vf(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(so(this.pendingAnimation),void 0),this.pendingAnimation=N.update(()=>{$f.hasAnimatedSinceResize=!0,mo.layout++,this.motionValue||=_l(0),this.motionValue.jump(0,!1),this.currentAnimation=Kf(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{mo.layout--},onComplete:()=>{mo.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(np),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&kp(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||Vu();let t=pf(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=pf(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}af(t,n),Sd(t,i),gf(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Qf),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&ip(`z`,e,r,this.animationValues);for(let t=0;t<tp.length;t++)ip(`rotate${tp[t]}`,e,r,this.animationValues),ip(`skew${tp[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=Zf(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=Zf(t?.pointerEvents)||``),this.hasProjected&&!dd(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=If(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in Nd){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=Nd[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?Zf(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(fp),this.root.sharedNodes.clear()}}}function sp(e){e.updateLayout()}function cp(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;i===`size`?Ff(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=pf(r);r.min=n[e].min,r.max=r.min+i}):kp(i,t.layoutBox,n)&&Ff(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=pf(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=zu();gf(o,n,t.layoutBox);let s=zu();a?gf(s,e.applyTransform(r,!0),t.measuredBox):gf(s,n,t.layoutBox);let c=!Of(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=Vu();bf(o,t.layoutBox,i.layoutBox);let s=Vu();bf(s,n,a.layoutBox),Mf(o,s)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function lp(e){ro.value&&ep.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function up(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function dp(e){e.clearSnapshot()}function fp(e){e.clearMeasurements()}function pp(e){e.isLayoutDirty=!1}function mp(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function hp(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function gp(e){e.resolveTargetDelta()}function _p(e){e.calcProjection()}function vp(e){e.resetSkewAndRotation()}function yp(e){e.removeLeadSnapshot()}function bp(e,t,n){e.translate=R(t.translate,0,n),e.scale=R(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function xp(e,t,n,r){e.min=R(t.min,n.min,r),e.max=R(t.max,n.max,r)}function Sp(e,t,n,r){xp(e.x,t.x,n.x,r),xp(e.y,t.y,n.y,r)}function Cp(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var wp={duration:.45,ease:[.4,0,.1,1]},Tp=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Ep=Tp(`applewebkit/`)&&!Tp(`chrome/`)?Math.round:Ea;function Dp(e){e.min=Ep(e.min),e.max=Ep(e.max)}function Op(e){Dp(e.x),Dp(e.y)}function kp(e,t,n){return e===`position`||e===`preserve-aspect`&&!mf(Nf(t),Nf(n),.2)}function Ap(e){return e!==e.root&&e.scroll?.wasRoot}var jp=op({attachResizeListener:(e,t)=>qf(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Mp={current:void 0},Np=op({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Mp.current){let e=new jp({});e.mount(window),e.setOptions({layoutScroll:!0}),Mp.current=e}return Mp.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),Pp=(0,C.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function Fp(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Ip(...e){return t=>{let n=!1,r=e.map(e=>{let r=Fp(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Fp(e[t],null)}}}}function Lp(...e){return C.useCallback(Ip(...e),e)}var Q=pa(),Rp=class extends C.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=Jl(e)&&e.offsetWidth||0,r=Jl(e)&&e.offsetHeight||0,i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft,i.right=n-i.width-i.left,i.bottom=r-i.height-i.top}return null}componentDidUpdate(){}render(){return this.props.children}};function zp({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,C.useId)(),s=(0,C.useRef)(null),c=(0,C.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:l}=(0,C.useContext)(Pp),u=Lp(s,e.props?.ref??e?.ref);return(0,C.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m}=c.current;if(t||a===!1||!s.current||!e||!u)return;let h=n===`left`?`left: ${f}`:`right: ${p}`,g=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let _=document.createElement(`style`);l&&(_.nonce=l);let v=i??document.head;return v.appendChild(_),_.sheet&&_.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${h}px !important;
            ${g}px !important;
          }
        `),()=>{v.contains(_)&&v.removeChild(_)}},[t]),(0,Q.jsx)(Rp,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:C.cloneElement(e,{ref:u})})}var Bp=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=M(Vp),d=(0,C.useId)(),f=!0,p=(0,C.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,C.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),C.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,Q.jsx)(zp,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,Q.jsx)(_a.Provider,{value:p,children:e})};function Vp(){return new Map}function Hp(e=!0){let t=(0,C.useContext)(_a);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,C.useId)();(0,C.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,C.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var Up=e=>e.key||``;function Wp(e){let t=[];return C.Children.forEach(e,e=>{(0,C.isValidElement)(e)&&t.push(e)}),t}var Gp=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=Hp(o),f=(0,C.useMemo)(()=>Wp(e),[e]),p=o&&!u?[]:f.map(Up),m=(0,C.useRef)(!0),h=(0,C.useRef)(f),g=M(()=>new Map),_=(0,C.useRef)(new Set),[v,y]=(0,C.useState)(f),[b,x]=(0,C.useState)(f);ga(()=>{m.current=!1,h.current=f;for(let e=0;e<b.length;e++){let t=Up(b[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[b,p.length,p.join(`-`)]);let S=[];if(f!==v){let e=[...f];for(let t=0;t<b.length;t++){let n=b[t],r=Up(n);p.includes(r)||(e.splice(t,0,n),S.push(n))}return a===`wait`&&S.length&&(e=S),x(Wp(e)),y(f),null}let{forceRender:ee}=(0,C.useContext)(ma);return(0,Q.jsx)(Q.Fragment,{children:b.map(e=>{let v=Up(e),y=o&&!u?!1:f===b||p.includes(v);return(0,Q.jsx)(Bp,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(_.current.add(v),g.has(v))g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(ee?.(),x(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},Kp=(0,C.createContext)({strict:!1}),qp={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},Jp=!1;function Yp(){if(Jp)return;let e={};for(let t in qp)e[t]={isEnabled:e=>qp[t].some(t=>!!e[t])};td(e),Jp=!0}function Xp(){return Yp(),nd()}function Zp(e){let t=Xp();for(let n in e)t[n]={...t[n],...e[n]};td(t)}var Qp=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function $p(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||Qp.has(e)}var em=c({default:()=>tm}),tm,nm=o((()=>{throw tm={},Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`)})),rm=e=>!$p(e);function im(e){typeof e==`function`&&(rm=t=>t.startsWith(`on`)?!$p(t):e(t))}try{im((nm(),d(em)).default)}catch{}function am(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||(rm(i)||n===!0&&$p(i)||!t&&!$p(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var om=(0,C.createContext)({});function sm(e,t){if(Y(e)){let{initial:t,animate:n}=e;return{initial:t===!1||Wu(t)?t:void 0,animate:Wu(n)?n:void 0}}return e.inherit===!1?{}:t}function cm(e){let{initial:t,animate:n}=sm(e,(0,C.useContext)(om));return(0,C.useMemo)(()=>({initial:t,animate:n}),[lm(t),lm(n)])}function lm(e){return Array.isArray(e)?e.join(` `):e}var um=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function dm(e,t,n){for(let r in t)!H(t[r])&&!Pd(r,n)&&(e[r]=t[r])}function fm({transformTemplate:e},t){return(0,C.useMemo)(()=>{let n=um();return Od(n,t,e),Object.assign({},n.vars,n.style)},[t])}function pm(e,t){let n=e.style||{},r={};return dm(r,n,e),Object.assign(r,fm(e,t)),r}function mm(e,t){let n={},r=pm(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var hm=()=>({...um(),attrs:{}});function gm(e,t,n,r){let i=(0,C.useMemo)(()=>{let n=hm();return Vd(n,t,Ud(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};dm(t,e.style,e),i.style={...t,...i.style}}return i}var _m=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function vm(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(_m.indexOf(e)>-1||/[A-Z]/u.test(e))}function ym(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??vm(e)?gm:mm)(t,r,i,e),c=am(t,typeof e==`string`,a),l=e===C.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,C.useMemo)(()=>H(u)?u.get():u,[u]);return(0,C.createElement)(e,{...l,children:d})}function bm({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:xm(n,r,i,e),renderState:t()}}function xm(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=Zf(a[e]);let{initial:o,animate:s}=e,c=Y(e),l=qu(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!Uu(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=dl(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Sm=e=>(t,n)=>{let r=(0,C.useContext)(om),i=(0,C.useContext)(_a),a=()=>bm(e,t,r,i);return n?a():M(a)},Cm=Sm({scrapeMotionValuesFromProps:Z,createRenderState:um}),wm=Sm({scrapeMotionValuesFromProps:Gd,createRenderState:hm}),Tm=Symbol.for(`motionComponentSymbol`);function Em(e,t,n){let r=(0,C.useRef)(n);(0,C.useInsertionEffect)(()=>{r.current=n});let i=(0,C.useRef)(null);return(0,C.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}var Dm=(0,C.createContext)({});function Om(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function km(e,t,n,r,i,a){let{visualElement:o}=(0,C.useContext)(om),s=(0,C.useContext)(Kp),c=(0,C.useContext)(_a),l=(0,C.useContext)(Pp),u=l.reducedMotion,d=l.skipAnimations,f=(0,C.useRef)(null),p=(0,C.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,C.useContext)(Dm);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&Am(f.current,n,i,h);let g=(0,C.useRef)(!1);(0,C.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[Tl],v=(0,C.useRef)(!!_&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return ga(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,C.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function Am(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:jm(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Om(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:u,layoutScroll:c,layoutRoot:l})}function jm(e){if(e)return e.options.allowProjection===!1?jm(e.parent):e.projection}function Mm(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&Zp(r);let a=n?n===`svg`:vm(e),o=a?wm:Cm;function s(n,s){let c,l={...(0,C.useContext)(Pp),...n,layoutId:Nm(n)},{isStatic:u}=l,d=cm(n),f=o(n,u);if(!u&&ha){Pm(l,r);let t=Fm(l);c=t.MeasureLayout,d.visualElement=km(e,f,l,i,t.ProjectionNode,a)}return(0,Q.jsxs)(om.Provider,{value:d,children:[c&&d.visualElement?(0,Q.jsx)(c,{visualElement:d.visualElement,...l}):null,ym(e,n,Em(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,C.forwardRef)(s);return c[Tm]=e,c}function Nm({layoutId:e}){let t=(0,C.useContext)(ma).id;return t&&e!==void 0?t+`-`+e:e}function Pm(e,t){(0,C.useContext)(Kp).strict}function Fm(e){let{drag:t,layout:n}=Xp();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Im(e,t){if(typeof Proxy>`u`)return Mm;let n=new Map,r=(n,r)=>Mm(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Mm(a,void 0,e,t)),n.get(a))})}var Lm=(e,t)=>t.isSVG??vm(e)?new Kd(t):new Id(t,{allowProjection:e!==C.Fragment}),Rm=class extends ad{constructor(e){super(e),e.animationState||=$d(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();Uu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},zm=0,Bm={animation:{Feature:Rm},exit:{Feature:class extends ad{constructor(){super(...arguments),this.id=zm++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Vm(e){return{point:{x:e.pageX,y:e.pageY}}}var Hm=e=>t=>iu(t)&&e(t,Vm(t));function Um(e,t,n,r){return qf(e,t,Hm(n),r)}var Wm=({current:e})=>e?e.ownerDocument.defaultView:null,Gm=(e,t)=>Math.abs(e-t);function Km(e,t){let n=Gm(e.x,t.x),r=Gm(e.y,t.y);return Math.sqrt(n**2+r**2)}var qm=new Set([`auto`,`scroll`]),Jm=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let e=Zm(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=Km(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=co;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Ym(t,this.transformPagePoint),N.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=Zm(e.type===`pointercancel`?this.lastMoveEventInfo:Ym(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!iu(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=Ym(Vm(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=co;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,Zm(s,this.history)),this.removeListeners=Oa(Um(this.contextWindow,`pointermove`,this.handlePointerMove),Um(this.contextWindow,`pointerup`,this.handlePointerUp),Um(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(qm.has(e.overflowX)||qm.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),N.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),so(this.updatePoint)}};function Ym(e,t){return t?{point:t(e.point)}:e}function Xm(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Zm({point:e},t){return{point:e,delta:Xm(e,$m(t)),offset:Xm(e,Qm(t)),velocity:eh(t,.1)}}function Qm(e){return e[0]}function $m(e){return e[e.length-1]}function eh(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=$m(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>ja(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>ja(t)*2&&(r=e[1]);let a=Ma(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function th(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?R(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?R(n,e,r.max):Math.min(e,n)),e}function nh(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function rh(e,{top:t,left:n,bottom:r,right:i}){return{x:nh(e.x,n,i),y:nh(e.y,t,r)}}function ih(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function ah(e,t){return{x:ih(e.x,t.x),y:ih(e.y,t.y)}}function oh(e,t){let n=.5,r=pf(e),i=pf(t);return i>r?n=ka(t.min,t.max-r,e.min):r>i&&(n=ka(e.min,e.max-i,t.min)),ba(0,1,n)}function sh(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var ch=.35;function lh(e=ch){return e===!1?e=0:e===!0&&(e=ch),{x:uh(e,`left`,`right`),y:uh(e,`top`,`bottom`)}}function uh(e,t,n){return{min:dh(e,t),max:dh(e,n)}}function dh(e,t){return typeof e==`number`?e:e[t]||0}var fh=new WeakMap,ph=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Vu(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(Vm(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=$l(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ff(e=>{let t=this.getAxisMotionValue(e).get()||0;if(Po.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=pf(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&N.update(()=>i(e,t),!1,!0),Cl(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=_h(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&N.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new Jm(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:Wm(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&N.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!gh(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=th(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Om(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=rh(n.layoutBox,e):this.constraints=!1,this.elastic=lh(t),r!==this.constraints&&!Om(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&Ff(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=sh(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Om(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=wd(n,r.root,this.visualElement.getTransformPagePoint()),a=ah(r.layout.layoutBox,i);if(t){let e=t(sd(a));this.hasMutatedConstraints=!!e,e&&(a=od(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=Ff(o=>{if(!gh(o,t,this.currentDirection))return;let c=s&&s[o]||{};a&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return Cl(this.visualElement,e),n.start(ll(e,n,0,t,this.visualElement,!1))}stopAnimation(){Ff(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Ff(t=>{let{drag:n}=this.getProps();if(!gh(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-R(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Om(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};Ff(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=oh({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),Ff(t=>{if(!gh(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(R(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;fh.set(this.visualElement,this);let e=this.visualElement.current,t=Um(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&cu(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();Om(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=hh(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),N.read(r);let o=qf(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Ff(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=ch,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function mh(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function hh(e,t,n){let r=Au(e,mh(n)),i=Au(t,mh(n));return()=>{r(),i()}}function gh(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function _h(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var vh=class extends ad{constructor(e){super(e),this.removeGroupControls=Ea,this.removeListeners=Ea,this.controls=new ph(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ea}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},yh=e=>(t,n)=>{e&&N.update(()=>e(t,n),!1,!0)},bh=class extends ad{constructor(){super(...arguments),this.removePointerDownListener=Ea}onPointerDown(e){this.session=new Jm(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Wm(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:yh(e),onStart:yh(t),onMove:yh(n),onEnd:(e,t)=>{delete this.session,r&&N.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Um(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},xh=!1,Sh=class extends C.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),xh&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),$f.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),xh=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||N.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Yl.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;xh=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Ch(e){let[t,n]=Hp(),r=(0,C.useContext)(ma);return(0,Q.jsx)(Sh,{...e,layoutGroup:r,switchLayoutGroup:(0,C.useContext)(Dm),isPresent:t,safeToRemove:n})}var wh={pan:{Feature:bh},drag:{Feature:vh,ProjectionNode:Np,MeasureLayout:Ch}};function Th(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&N.postRender(()=>i(t,Vm(t)))}var Eh=class extends ad{mount(){let{current:e}=this.node;e&&(this.unmount=nu(e,(e,t)=>(Th(this.node,t,`Start`),e=>Th(this.node,e,`End`))))}unmount(){}},Dh=class extends ad{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=Oa(qf(this.node.current,`focus`,()=>this.onFocus()),qf(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Oh(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&N.postRender(()=>i(t,Vm(t)))}var kh=class extends ad{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=hu(e,(e,t)=>(Oh(this.node,t,`Start`),(e,{success:t})=>Oh(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},Ah=new WeakMap,jh=new WeakMap,Mh=e=>{let t=Ah.get(e.target);t&&t(e)},Nh=e=>{e.forEach(Mh)};function Ph({root:e,...t}){let n=e||document;jh.has(n)||jh.set(n,{});let r=jh.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Nh,{root:e,...t})),r[i]}function Fh(e,t,n){let r=Ph(t);return Ah.set(e,n),r.observe(e),()=>{Ah.delete(e),r.unobserve(e)}}var Ih={some:0,all:1},Lh=class extends ad{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Ih[r]};return Fh(this.node.current,a,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Rh(e,t))&&this.startObserver()}unmount(){}};function Rh({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var zh={inView:{Feature:Lh},tap:{Feature:kh},focus:{Feature:Dh},hover:{Feature:Eh}},Bh={layout:{ProjectionNode:Np,MeasureLayout:Ch}},$=Im({...Bm,...zh,...wh,...Bh},Lm);function Vh(e,t,n){(0,C.useInsertionEffect)(()=>e.on(t,n),[e,t,n])}function Hh(e){let t=M(()=>_l(e)),{isStatic:n}=(0,C.useContext)(Pp);if(n){let[,n]=(0,C.useState)(e);(0,C.useEffect)(()=>t.on(`change`,n),[])}return t}function Uh(e,t){let n=Hh(t()),r=()=>n.set(t());return r(),ga(()=>{let t=()=>N.preRender(r,!1,!0),n=e.map(e=>e.on(`change`,t));return()=>{n.forEach(e=>e()),so(r)}}),n}function Wh(e){hl.current=[],e();let t=Uh(hl.current,e);return hl.current=void 0,t}function Gh(e,t,n,r){if(typeof e==`function`)return Wh(e);if(n!==void 0&&!Array.isArray(n)&&typeof t!=`function`)return qh(e,t,n,r);let i=typeof t==`function`?t:Mu(t,n,r),a=Array.isArray(e)?Kh(e,i):Kh([e],([e])=>i(e)),o=Array.isArray(e)?void 0:e.accelerate;return o&&!o.isTransformed&&typeof t!=`function`&&Array.isArray(n)&&r?.clamp!==!1&&(a.accelerate={...o,times:t,keyframes:n,isTransformed:!0,...r?.ease?{ease:r.ease}:{}}),a}function Kh(e,t){let n=M(()=>[]);return Uh(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}function qh(e,t,n,r){let i=M(()=>Object.keys(n)),a=M(()=>({}));for(let o of i)a[o]=Gh(e,t,n[o],r);return a}function Jh(e,t={}){let{isStatic:n}=(0,C.useContext)(Pp),r=()=>H(e)?e.get():e;if(n)return Gh(r);let i=Hh(r());return(0,C.useInsertionEffect)(()=>Nu(i,e,t),[i,JSON.stringify(t)]),i}function Yh(e,t={}){return Jh(e,{type:`spring`,...t})}function Xh(e){let t=(0,C.useRef)(0),{isStatic:n}=(0,C.useContext)(Pp);(0,C.useEffect)(()=>{if(n)return;let r=({timestamp:n,delta:r})=>{t.current||=n,e(n-t.current,r)};return N.update(r,!0),()=>so(r)},[e])}function Zh(e){let t=Hh(e.getVelocity()),n=()=>{let r=e.getVelocity();t.set(r),r&&N.update(n)};return Vh(e,`change`,()=>{N.update(n,!1,!0)}),t}var Qh={some:0,all:1};function $h(e,t,{root:n,margin:r,amount:i=`some`}={}){let a=J(e),o=new WeakMap,s=new IntersectionObserver(e=>{e.forEach(e=>{let n=o.get(e.target);if(e.isIntersecting!==!!n)if(e.isIntersecting){let n=t(e.target,e);typeof n==`function`?o.set(e.target,n):s.unobserve(e.target)}else typeof n==`function`&&(n(e),o.delete(e.target))})},{root:n,rootMargin:r,threshold:typeof i==`number`?i:Qh[i]});return a.forEach(e=>s.observe(e)),()=>s.disconnect()}function eg(e,{root:t,margin:n,amount:r,once:i=!1,initial:a=!1}={}){let[o,s]=(0,C.useState)(a);return(0,C.useEffect)(()=>{if(!e.current||i&&o)return;let a=()=>(s(!0),i?void 0:()=>s(!1)),c={root:t&&t.current||void 0,margin:n,amount:r};return $h(e.current,a,c)},[t,e,n,i,r]),o}function tg({onScrollRequest:e,refs:t,isMenuOpen:n,setIsMenuOpen:r}){let[i,a]=(0,C.useState)(`HOME`),[o,s]=(0,C.useState)(!1);(0,C.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){let t=e.target.getAttribute(`id`);t&&a(t.toUpperCase())}})},{root:null,rootMargin:`-40% 0px -40% 0px`,threshold:0}),n=[t.homeRef,t.aboutRef,t.workRef,t.contactRef];n.forEach(t=>{t.current&&e.observe(t.current)});let r=()=>s(window.scrollY>50);return window.addEventListener(`scroll`,r),()=>{window.removeEventListener(`scroll`,r),n.forEach(t=>{t.current&&e.unobserve(t.current)})}},[t]);let c=[{label:`HOME`,ref:t.homeRef},{label:`ABOUT`,ref:t.aboutRef},{label:`WORK`,ref:t.workRef},{label:`CONTACT`,ref:t.contactRef}];return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');

        /* ═══════════════════════════════════════════
           DESKTOP HEADER
           Glass bar floats over every section.
           Resting: warm-tinted near-black glass
           Scrolled: deep #0a0800 amber-black solid
                     — matches BookingContact/Footer
                       end-of-site warmth
        ═══════════════════════════════════════════ */
        .cp-hd-fixed {
          position: fixed;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: auto;
          z-index: 10000;
          padding-top: 20px;
          transition: padding-top 0.5s cubic-bezier(0.19,1,0.22,1);
        }
        .cp-hd-fixed.scrolled { padding-top: 8px; }

        /* resting — warm amber tint glass, not cold blue */
        .cp-hd-bar {
          background: rgba(8, 5, 0, 0.38);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(253,224,71,0.06);
          box-shadow:
            0 8px 32px rgba(0,0,0,0.45),
            0 1px 0 rgba(253,224,71,0.04) inset;
          display: flex;
          transition: background 0.5s, border-color 0.5s, box-shadow 0.5s;
        }

        /* scrolled — deep amber-black solid, matches site finale */
        .cp-hd-fixed.scrolled .cp-hd-bar {
          background: rgba(10, 8, 0, 0.96);
          border-color: rgba(253,224,71,0.16);
          box-shadow:
            0 4px 30px rgba(0,0,0,0.6),
            0 0 20px rgba(253,224,71,0.04);
        }

        /* ── NAV ITEM ──────────────────────────── */
        .cp-hd-item {
          position: relative;
          padding: 14px 30px;
          cursor: pointer;
          overflow: hidden;
          display: flex; align-items: center;
          transition: background 0.3s;
        }

        /* hover sweep — warm amber tint */
        .cp-hd-fill {
          position: absolute; inset: 0;
          background: rgba(253,224,71,0.055);
          transform: scaleX(0); transform-origin: left; z-index: 0;
          transition: transform 0.35s cubic-bezier(0.77,0,0.18,1);
          pointer-events: none;
        }
        .cp-hd-item:hover .cp-hd-fill { transform: scaleX(1); }

        .cp-hd-label {
          position: relative; z-index: 5;
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 4px;
          color: rgba(255,255,255,0.80);
          text-transform: uppercase;
          transition: color 0.3s, letter-spacing 0.3s;
          white-space: nowrap;
        }
        .cp-hd-item:hover .cp-hd-label {
          color: #fde047;
          letter-spacing: 5px;
        }
        .cp-hd-item.active .cp-hd-label { color: #fde047; }

        /* active underline — gold */
        .cp-hd-active-bar {
          position: absolute;
          bottom: 0; left: 15%;
          width: 70%; height: 1px;
          background: #fde047;
          z-index: 10;
        }

        /* separator between items */
        .cp-hd-sep {
          width: 1px;
          background: rgba(253,224,71,0.06);
          align-self: stretch;
          flex-shrink: 0;
        }

        /* ═══════════════════════════════════════════
           MOBILE OVERLAY
           Deep amber-black — #080500 — not pure black.
           Matches the warm dark end of the site.
        ═══════════════════════════════════════════ */
        .cp-hd-overlay {
          position: fixed; inset: 0;
          background: rgba(8, 5, 0, 0.98);
          z-index: 1000;
          display: flex; align-items: center; justify-content: center;
          backdrop-filter: blur(20px);
        }

        /* kanji watermark — warm amber tint */
        .cp-hd-overlay::before {
          content: '映';
          position: absolute;
          left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          font-size: 40rem; font-family: serif;
          color: rgba(253,180,30,0.025);
          pointer-events: none; user-select: none;
          line-height: 1;
        }

        /* top rule — gold gradient */
        .cp-hd-overlay::after {
          content: '';
          position: absolute;
          top: 0; left: 8%; right: 8%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(253,224,71,0.22), transparent);
          pointer-events: none;
        }

        /* ambient warm glow — centre of overlay */
        .cp-hd-overlay-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(253,180,30,0.04) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }

        .cp-hd-mobile-nav {
          display: flex; flex-direction: column;
          align-items: center; gap: 0;
          position: relative; z-index: 5;
          width: 100%; padding: 0 8%;
        }

        .cp-hd-mobile-item {
          width: 100%; max-width: 480px;
          display: flex; align-items: center;
          justify-content: space-between;
          padding: 22px 0;
          /* separator — warm amber instead of cold white */
          border-bottom: 1px solid rgba(253,224,71,0.06);
          cursor: pointer;
          position: relative; overflow: hidden;
        }

        .cp-hd-mobile-num {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 3px;
          color: rgba(253,200,71,0.65);
        }

        .cp-hd-mobile-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.8rem, 8vw, 5rem);
          font-weight: 400;
          color: rgba(255,255,255,0.82);
          letter-spacing: 3px; line-height: 1;
          transition: color 0.3s, letter-spacing 0.3s;
          position: relative; z-index: 2;
        }
        .cp-hd-mobile-item:hover .cp-hd-mobile-label,
        .cp-hd-mobile-item.active .cp-hd-mobile-label {
          color: #fde047;
          letter-spacing: 4px;
        }

        .cp-hd-mobile-arrow {
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem; font-weight: 500;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.40);
          transition: color 0.3s, transform 0.3s;
        }
        .cp-hd-mobile-item:hover .cp-hd-mobile-arrow,
        .cp-hd-mobile-item.active .cp-hd-mobile-arrow {
          color: rgba(50,197,244,0.55);
          transform: translateX(6px);
        }

        /* hover fill — warm amber sweep */
        .cp-hd-mobile-fill {
          position: absolute; inset: 0;
          background: rgba(253,224,71,0.028);
          transform: scaleX(0); transform-origin: left; z-index: 1;
          transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
          pointer-events: none;
        }
        .cp-hd-mobile-item:hover .cp-hd-mobile-fill { transform: scaleX(1); }

        /* active left bar — gold */
        .cp-hd-mobile-active-bar {
          position: absolute; left: 0; top: 0; bottom: 0;
          width: 2px; background: #fde047; z-index: 5;
        }

        /* bottom tag */
        .cp-hd-mobile-bottom {
          margin-top: 32px;
          display: flex; align-items: center; gap: 12px;
          max-width: 480px; width: 100%;
        }
        .cp-hd-mobile-bottom-line {
          flex: 1; height: 1px;
          background: rgba(253,224,71,0.07);
        }
        .cp-hd-mobile-bottom-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 4px;
          color: rgba(253,200,71,0.50);
          text-transform: uppercase;
        }

        /* ─── RESPONSIVE ────────────────────────── */
        @media (max-width: 1024px) {
          .cp-hd-fixed { display: none; }
        }
        @media (max-width: 768px) {
          html, body { overflow-x: hidden; width: 100%; }
        }
      `}),(0,Q.jsx)(`div`,{className:`cp-hd-fixed ${o?`scrolled`:``}`,children:(0,Q.jsx)(`header`,{className:`cp-hd-bar`,children:c.map((t,n)=>(0,Q.jsxs)(C.Fragment,{children:[n>0&&(0,Q.jsx)(`div`,{className:`cp-hd-sep`}),(0,Q.jsxs)($.div,{className:`cp-hd-item ${i===t.label?`active`:``}`,onClick:()=>{e(t.ref),a(t.label)},whileHover:`hover`,initial:`rest`,children:[(0,Q.jsx)(`div`,{className:`cp-hd-fill`}),(0,Q.jsx)(`span`,{className:`cp-hd-label`,children:t.label}),i===t.label&&(0,Q.jsx)($.div,{layoutId:`cp-active-line`,className:`cp-hd-active-bar`,transition:{type:`spring`,stiffness:320,damping:32}})]})]},t.label))})}),(0,Q.jsx)(Gp,{children:n&&(0,Q.jsxs)($.div,{className:`cp-hd-overlay`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[(0,Q.jsx)(`div`,{className:`cp-hd-overlay-glow`}),(0,Q.jsxs)(`div`,{className:`cp-hd-mobile-nav`,children:[c.map((t,n)=>(0,Q.jsxs)($.div,{className:`cp-hd-mobile-item ${i===t.label?`active`:``}`,initial:{opacity:0,y:28},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{delay:n*.08,type:`spring`,stiffness:100},onClick:()=>{e(t.ref),r(!1)},children:[(0,Q.jsx)(`div`,{className:`cp-hd-mobile-fill`}),i===t.label&&(0,Q.jsx)(`div`,{className:`cp-hd-mobile-active-bar`}),(0,Q.jsx)(`span`,{className:`cp-hd-mobile-num`,children:String(n+1).padStart(2,`0`)}),(0,Q.jsx)(`span`,{className:`cp-hd-mobile-label`,children:t.label}),(0,Q.jsx)(`span`,{className:`cp-hd-mobile-arrow`,children:`→`})]},t.label)),(0,Q.jsxs)(`div`,{className:`cp-hd-mobile-bottom`,children:[(0,Q.jsx)(`div`,{className:`cp-hd-mobile-bottom-line`}),(0,Q.jsx)(`span`,{className:`cp-hd-mobile-bottom-text`,children:`CINEMAPAYYAN INC`}),(0,Q.jsx)(`div`,{className:`cp-hd-mobile-bottom-line`})]})]})]})})]})}function ng(e,t=1600,n=!1){let[r,i]=(0,C.useState)(0);return(0,C.useEffect)(()=>{if(!n)return;let r=null,a=n=>{r||=n;let o=Math.min((n-r)/t,1);i(Math.floor(o*e)),o<1&&requestAnimationFrame(a)};requestAnimationFrame(a)},[n,e,t]),r}var rg=[{title:`PROMOTIONS`,isScroll:!0,key:`workRef`,path:`#work`},{title:`PRODUCTIONS`,isScroll:!0,key:`promotionsRef`,path:`#promotions`},{title:`MUNAI`,isScroll:!1,key:``,path:`/munai`}],ig=[`CINEMA`,`PRODUCTION`,`STORYTELLING`,`DIRECTION`,`PROMOTIONS`,`HOST`,`FILM CRITIC`,`SHORTS`,`ORIGINALS`];function ag({onScrollRequest:e}){let[t,n]=(0,C.useState)(`visible`),[r,i]=(0,C.useState)(!1),[a,o]=(0,C.useState)(!1),s=(0,C.useRef)(null),c=(0,C.useRef)(0),l=Hh(0),u=Hh(0),d=Yh(l,{stiffness:80,damping:20}),f=Yh(u,{stiffness:80,damping:20}),p=ng(10,1500,a),m=ng(271,1800,a);(0,C.useEffect)(()=>{let e=setTimeout(()=>n(`exit`),2400),t=setTimeout(()=>{n(`gone`),i(!0),o(!0)},3100);return()=>{clearTimeout(e),clearTimeout(t)}},[]),(0,C.useEffect)(()=>{let e=s.current;if(!e)return;let t=e.getContext(`2d`),n=()=>{e.width=window.innerWidth,e.height=window.innerHeight};n(),window.addEventListener(`resize`,n);let r=Array.from({length:60},()=>({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,vy:.25+Math.random()*.55,vx:(Math.random()-.5)*.15,op:.06+Math.random()*.2,r:Math.random()>.65?1.4:.7,c:Math.random()>.5?`#fde047`:`#32c5f4`})),i=0,a=()=>{t.clearRect(0,0,e.width,e.height),i+=.008,t.strokeStyle=`rgba(253,224,71,${.022+Math.sin(i)*.008})`,t.lineWidth=.5;let n=Math.max(e.width,1);for(let r=0;r<n;r+=80)t.beginPath(),t.moveTo(r,0),t.lineTo(r,e.height),t.stroke();for(let n=0;n<e.height;n+=80)t.beginPath(),t.moveTo(0,n),t.lineTo(e.width,n),t.stroke();r.forEach(n=>{t.beginPath(),t.arc(n.x,n.y,n.r,0,Math.PI*2),t.fillStyle=n.c,t.globalAlpha=n.op,t.fill(),n.x+=n.vx,n.y+=n.vy,n.y>e.height+4&&(n.y=-4,n.x=Math.random()*e.width),(n.x<-4||n.x>e.width+4)&&(n.x=Math.random()*e.width)}),t.globalAlpha=1,c.current=requestAnimationFrame(a)};return a(),()=>{cancelAnimationFrame(c.current),window.removeEventListener(`resize`,n)}},[]);let h=(0,C.useCallback)(e=>{let t=window.innerWidth/2,n=window.innerHeight/2;l.set((e.clientX-t)*.018),u.set((e.clientY-n)*.018)},[l,u]);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;0,800;1,700;1,800&family=Bebas+Neue&family=Inter:wght@300;400;700;900&display=swap');

        .bebas-font { font-family: 'Bebas Neue', sans-serif; }
        .inter-font  { font-family: 'Inter', sans-serif; }

        *, *::before, *::after { box-sizing: border-box; }

        .h3-root {
          position: relative;
          width: 100%;
          height: 100svh;
          min-height: 560px;
          background: #000;
          display: grid;
          grid-template-rows: auto 1fr auto auto;
          align-items: stretch;
          overflow: hidden;
          padding-top: var(--navbar-height, 64px);
        }

        .h3-root::after {
          content: '';
          position: absolute; inset: 0;
          background-image: repeating-linear-gradient(
            0deg, transparent, transparent 3px,
            rgba(0,0,0,0.055) 3px, rgba(0,0,0,0.055) 4px
          );
          pointer-events: none; z-index: 5;
        }

        .h3-vig {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 35%, transparent 20%, rgba(0,0,0,0.85) 80%);
          pointer-events: none; z-index: 2;
        }

        .h3-canvas {
          position: absolute; inset: 0;
          pointer-events: none; z-index: 1;
        }

        .h3-corner {
          position: absolute; width: 22px; height: 22px; z-index: 8; pointer-events: none;
        }
        .h3-tl { top: calc(var(--navbar-height, 64px) + 10px); left: 16px; border-top: 1px solid rgba(253,224,71,0.4); border-left: 1px solid rgba(253,224,71,0.4); }
        .h3-tr { top: calc(var(--navbar-height, 64px) + 10px); right: 16px; border-top: 1px solid rgba(253,224,71,0.4); border-right: 1px solid rgba(253,224,71,0.4); }
        .h3-bl { bottom: 14px; left: 16px; border-bottom: 1px solid rgba(50,197,244,0.3); border-left: 1px solid rgba(50,197,244,0.3); }
        .h3-br { bottom: 14px; right: 16px; border-bottom: 1px solid rgba(50,197,244,0.3); border-right: 1px solid rgba(50,197,244,0.3); }

        .h3-rec {
          position: absolute; top: calc(var(--navbar-height, 64px) + 14px); right: 48px;
          display: flex; align-items: center; gap: 5px;
          z-index: 9; pointer-events: none;
        }
        .h3-rec-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #ff3333;
          box-shadow: 0 0 8px rgba(255,51,51,0.8);
          animation: h3Rec 1s step-end infinite;
        }
        @keyframes h3Rec { 0%,100%{opacity:1} 50%{opacity:0} }
        .h3-rec-txt {
          font-family: 'Inter', sans-serif;
          font-size: 0.52rem; letter-spacing: 2px; font-weight: 700;
          color: rgba(255,60,60,0.8);
        }

        /* ════ GATE ════ */
        .h3-gate {
          position: fixed; inset: 0; z-index: 200;
          background: #000;
          display: flex; align-items: center; justify-content: center;
          flex-direction: column; gap: 0;
          padding: 24px;
        }
        .h3-gate::before {
          content: '';
          position: absolute;
          top: -40%; left: -20%; width: 60%; height: 200%;
          background: rgba(253,224,71,0.025);
          transform: rotate(-12deg);
          pointer-events: none;
        }

        .h3-gate-pre {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.6rem, 2.5vw, 0.78rem);
          font-weight: 300;
          letter-spacing: 10px; color: rgba(253,224,71,0.65);
          text-transform: uppercase; margin: 0 0 16px;
          text-align: center;
        }

        .h3-gate-word {
          display: block;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.5rem, 16vw, 11rem);
          font-weight: 400;
          line-height: 0.9; letter-spacing: 4px;
          text-align: center;
        }
        .h3-gate-w1 { color: #fff; }
        .h3-gate-w2 { color: #fde047; }

        .h3-gate-bar {
          width: 0; height: 2px;
          background: linear-gradient(90deg, #fde047, #32c5f4);
          margin: 20px auto;
          animation: h3BarGrow 0.8s ease forwards 0.5s;
        }
        @keyframes h3BarGrow { to { width: min(220px, 60vw); } }

        .h3-gate-sub {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.55rem, 2vw, 0.7rem);
          font-weight: 300;
          letter-spacing: 7px; color: rgba(255,255,255,0.3);
          text-transform: uppercase; text-align: center;
        }

        /* ════ MAIN ════ */
        .h3-main {
          position: relative; z-index: 10;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: clamp(20px,4vh,40px) clamp(16px,5vw,48px);
          gap: clamp(10px,2vh,20px);
          overflow: hidden;
        }

        .h3-pre {
          display: flex; align-items: center; gap: 12px;
        }
        .h3-pre-line {
          width: clamp(24px,5vw,44px); height: 1px;
          background: rgba(253,224,71,0.5);
        }
        .h3-pre-txt {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.52rem, 1.8vw, 0.66rem);
          font-weight: 400;
          letter-spacing: clamp(4px,1vw,7px);
          color: rgba(253,224,71,0.8);
          text-transform: uppercase; white-space: nowrap;
        }

        .h3-brand {
          display: flex; align-items: baseline;
          justify-content: center; gap: clamp(8px,2vw,16px);
          flex-wrap: wrap; text-align: center;
        }
        .h3-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(38px, 10.5vw, 120px);
          font-weight: 400;
          color: #fde047; line-height: 0.9;
          letter-spacing: clamp(4px, 1vw, 10px);
          text-shadow:
            0 0 50px rgba(253,224,71,0.28),
            0 0 120px rgba(253,224,71,0.1);
        }
        .h3-inc {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(14px, 2.8vw, 30px);
          color: #32c5f4; letter-spacing: 8px;
          text-shadow: 0 0 16px rgba(50,197,244,0.7);
          align-self: flex-end; padding-bottom: 0.06em;
        }

        .h3-rule {
          width: clamp(100px,35%,260px); height: 1px;
          background: linear-gradient(90deg, transparent, #fde047 40%, #32c5f4 70%, transparent);
          opacity: 0.55;
        }

        .h3-tagline {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.82rem, 2vw, 1.05rem);
          font-weight: 300;
          color: rgba(255,255,255,0.5);
          text-align: center; line-height: 1.75;
          max-width: 520px;
          margin: 0;
        }
        .h3-tagline b {
          color: rgba(255,255,255,0.88);
          font-weight: 700;
          border-bottom: 1px solid rgba(253,224,71,0.4);
          padding-bottom: 1px;
        }

        .h3-spine {
          width: 1px;
          background: linear-gradient(to bottom, rgba(253,224,71,0.6), rgba(50,197,244,0.3));
        }

        /* ════ NAV BRANCHES ════ */
        .h3-branches {
          display: flex; justify-content: center;
          align-items: flex-start;
          gap: 0; width: 100%; max-width: 720px;
          flex-wrap: wrap; row-gap: 12px;
        }

        .h3-hbridge {
          display: flex; width: 100%;
          justify-content: space-between; align-items: flex-start;
          position: relative;
        }
        .h3-hbridge::before {
          content: '';
          position: absolute; top: 0; left: 16.5%; right: 16.5%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(253,224,71,0.3), transparent);
        }

        .h3-node {
          display: flex; flex-direction: column;
          align-items: center; flex: 1;
          transition: opacity 0.4s, filter 0.4s;
          min-width: 120px;
        }
        .h3-hbridge:hover .h3-node:not(:hover) {
          opacity: 0.18; filter: blur(1.5px);
        }

        .h3-stem {
          width: 1px; height: 30px;
          background: rgba(253,224,71,0.35);
          transition: background 0.4s, box-shadow 0.35s;
        }
        .h3-node:hover .h3-stem {
          background: #32c5f4;
          box-shadow: 0 0 12px rgba(50,197,244,0.6);
        }

        /* ════ BOX — pulse hint ════ */
        @keyframes h3Pulse {
          0%, 100% {
            box-shadow: 0 0 0px rgba(253,224,71,0);
            border-color: rgba(255,255,255,0.1);
          }
          50% {
            box-shadow: 0 0 20px rgba(253,224,71,0.25), 0 0 40px rgba(253,224,71,0.08);
            border-color: rgba(253,224,71,0.4);
          }
        }

        .h3-box {
          position: relative; overflow: hidden;
          padding: clamp(10px,1.8vw,14px) clamp(16px,3.5vw,32px);
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(6,6,6,0.82);
          cursor: pointer;
          transition: border-color 0.35s, transform 0.35s, box-shadow 0.35s;
          animation: h3Pulse 2.8s ease-in-out infinite;
        }

        /* stagger so all three don't pulse in sync */
        .h3-node:nth-child(1) .h3-box { animation-delay: 0s;   }
        .h3-node:nth-child(2) .h3-box { animation-delay: 0.95s; }
        .h3-node:nth-child(3) .h3-box { animation-delay: 1.9s;  }

        /* stop pulsing on hover — hover state takes over */
        .h3-node:hover .h3-box { animation: none; }

        .h3-box::before {
          content: ''; position: absolute; inset: 0;
          background: rgba(50,197,244,0.08);
          transform: scaleX(0); transform-origin: left; z-index: 0;
          transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
        }
        .h3-node:hover .h3-box::before { transform: scaleX(1); }
        .h3-node:hover .h3-box {
          border-color: rgba(50,197,244,0.35);
          transform: translateY(5px);
          box-shadow: 0 8px 24px rgba(50,197,244,0.07);
        }
        .h3-box::after {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 10px; height: 10px;
          border-top: 1px solid rgba(253,224,71,0.5);
          border-left: 1px solid rgba(253,224,71,0.5);
          z-index: 5;
        }

        /* ════ TAP HINT — bobbing arrow below each box ════ */
        @keyframes h3TapBob {
          0%, 100% { opacity: 0.28; transform: translateY(0px); }
          50%       { opacity: 0.75; transform: translateY(4px); }
        }

        .h3-tap {
          font-family: 'Inter', sans-serif;
          font-size: 0.44rem;
          letter-spacing: 3px;
          color: rgba(253,224,71,0.5);
          text-transform: uppercase;
          margin-top: 6px;
          user-select: none;
          pointer-events: none;
          animation: h3TapBob 1.8s ease-in-out infinite;
        }
        .h3-node:nth-child(1) .h3-tap { animation-delay: 0s;    }
        .h3-node:nth-child(2) .h3-tap { animation-delay: 0.6s;  }
        .h3-node:nth-child(3) .h3-tap { animation-delay: 1.2s;  }

        /* hide tap hint while hovered */
        .h3-node:hover .h3-tap { opacity: 0; transition: opacity 0.2s; }

        .h3-link {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          letter-spacing: clamp(4px, 0.8vw, 7px);
          color: rgba(255,255,255,0.7);
          text-decoration: none; text-transform: uppercase;
          display: block; position: relative; z-index: 1;
          text-align: center; cursor: pointer;
          transition: color 0.3s;
        }
        .h3-node:hover .h3-link {
          color: #fff;
          text-shadow: 0 0 10px rgba(50,197,244,0.5);
        }

        /* ════ STATS ════ */
        .h3-stats {
          display: flex;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          width: 100%; max-width: 560px;
        }
        .h3-stat {
          flex: 1; padding: clamp(10px,2vh,14px) 0;
          display: flex; flex-direction: column;
          align-items: center; gap: 4px;
        }
        .h3-stat + .h3-stat { border-left: 1px solid rgba(255,255,255,0.07); }
        .h3-stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.8rem, 4.5vw, 2.8rem);
          font-weight: 400; color: #32c5f4; line-height: 1;
          letter-spacing: 2px;
        }
        .h3-stat-sup { font-size: 0.55em; vertical-align: super; color: #fde047; }
        .h3-stat-lbl {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem,1vw,0.52rem);
          font-weight: 400;
          letter-spacing: 3px; color: rgba(255,255,255,0.4);
          text-transform: uppercase; text-align: center; line-height: 1.5;
        }

        /* ── Twitter stat link ── */
        .h3-stat-link {
          display: flex; flex-direction: column;
          align-items: center; gap: 4px;
          text-decoration: none;
          cursor: pointer;
          transition: opacity 0.3s;
          width: 100%;
        }
        .h3-stat-link:hover { opacity: 0.75; }
        .h3-stat-link:hover .h3-stat-num {
          text-shadow: 0 0 14px rgba(50,197,244,0.7);
        }
        .h3-stat-link .h3-stat-lbl {
          color: rgba(50,197,244,0.55);
          transition: color 0.3s;
        }
        .h3-stat-link:hover .h3-stat-lbl {
          color: rgba(50,197,244,0.9);
        }

        /* ════ FOOTER ════ */
        .h3-footer {
          position: relative; z-index: 10;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 clamp(16px,5vw,48px) clamp(8px,1.5vh,14px);
          gap: 12px;
        }

        .h3-byline { flex: 1; }
        .h3-byline-lbl {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem,1.4vw,0.56rem);
          font-weight: 700;
          letter-spacing: 5px; color: rgba(255,255,255,0.95);
          text-transform: uppercase; display: block; margin-bottom: 4px;
          text-shadow: 0 0 12px rgba(253,224,71,0.4);
        }
        .h3-byline-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.2rem, 3vw, 2.1rem);
          font-weight: 400;
          color: rgba(255,255,255,0.7); letter-spacing: 4px; margin: 0;
          line-height: 1;
        }

        .h3-scroll {
          display: flex; flex-direction: column;
          align-items: center; gap: 0;
          flex-shrink: 0;
        }
        .h3-scroll-lbl {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem,1.3vw,0.54rem);
          font-weight: 300;
          letter-spacing: 5px; color: rgba(255,255,255,0.28);
          text-transform: uppercase; margin-bottom: 8px;
        }
        .h3-mouse {
          width: 20px; height: 30px;
          border: 1px solid rgba(255,255,255,0.18); border-radius: 10px;
          display: flex; justify-content: center;
        }
        .h3-wheel {
          width: 2px; height: 6px; margin-top: 5px;
          background: #32c5f4; border-radius: 2px;
        }
        .h3-scroll-line {
          width: 1px; height: 22px; margin-top: 7px;
          background: linear-gradient(to bottom, #32c5f4, transparent);
          animation: h3SL 2s ease-in-out infinite;
        }
        @keyframes h3SL { 0%,100%{opacity:.28} 50%{opacity:1} }

        .h3-seq {
          flex: 1; text-align: right;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem,1.4vw,0.56rem);
          font-weight: 300;
          letter-spacing: 3px; color: rgba(255,255,255,0.2);
          text-transform: uppercase;
          line-height: 1.6;
        }
        .h3-seq span { display: block; }
        .h3-seq strong { color: rgba(253,224,71,0.5); font-weight: 700; }

        /* ════ TICKER — bottom strip ════ */
        .h3-ticker {
          position: relative; z-index: 10;
          width: 100%;
          background: rgba(0,0,0,0.6);
          border-top: 1px solid rgba(253,224,71,0.15);
          overflow: hidden;
          height: 30px;
          display: flex; align-items: center;
        }
        .h3-ticker-track {
          display: flex; white-space: nowrap;
          animation: h3Tick 28s linear infinite;
        }
        @keyframes h3Tick { to { transform: translateX(-50%); } }
        .h3-ticker-item {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(0.72rem, 1.5vw, 0.85rem);
          letter-spacing: 5px; color: rgba(253,224,71,0.45);
          text-transform: uppercase; padding: 0 22px; flex-shrink: 0;
        }
        .h3-ticker-sep { color: rgba(50,197,244,0.4); margin: 0 4px; }

        /* ════ RESPONSIVE ════ */
        @media (max-width: 640px) {
          .h3-node   { min-width: 80px; }
          .h3-box    { padding: 8px 12px; }
          .h3-link   { font-size: 0.82rem; letter-spacing: 2px; }
          .h3-stem   { height: 20px; }
          .h3-tap    { font-size: 0.38rem; letter-spacing: 2px; }

          .h3-footer { flex-direction: column; align-items: center; text-align: center; gap: 8px; }
          .h3-byline { text-align: center; }
          .h3-seq    { text-align: center; }
          .h3-rec    { display: none; }
        }

        @media (max-width: 380px) {
          .h3-name   { font-size: 34px; }
          .h3-box    { padding: 10px 14px; }
          .h3-stats  { max-width: 100%; }
          .h3-main   { gap: 8px; }
        }

        @media (max-height: 520px) and (orientation: landscape) {
          .h3-root    { height: auto; min-height: 100svh; }
          .h3-spine   { display: none; }
          .h3-stats   { display: none; }
          .h3-tagline { display: none; }
          .h3-main    { justify-content: flex-start; padding-top: 12px; }
        }
      `}),(0,Q.jsx)(Gp,{children:t!==`gone`&&(0,Q.jsxs)($.div,{className:`h3-gate`,animate:t===`exit`?{opacity:0,y:-30,filter:`blur(8px)`}:{opacity:1,y:0,filter:`blur(0px)`},transition:{duration:.65,ease:[.77,0,.18,1]},children:[(0,Q.jsx)($.p,{className:`h3-gate-pre`,initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.1},children:`WELCOME TO`}),(0,Q.jsx)(`div`,{style:{overflow:`hidden`},children:(0,Q.jsx)($.span,{className:`h3-gate-word h3-gate-w1`,initial:{y:`100%`},animate:{y:0},transition:{delay:.18,duration:.7,ease:[.16,1,.3,1]},children:`CINEMA`})}),(0,Q.jsx)(`div`,{style:{overflow:`hidden`},children:(0,Q.jsx)($.span,{className:`h3-gate-word h3-gate-w2`,initial:{y:`100%`},animate:{y:0},transition:{delay:.3,duration:.7,ease:[.16,1,.3,1]},children:`PAYYAN`})}),(0,Q.jsx)(`div`,{className:`h3-gate-bar`}),(0,Q.jsx)($.p,{className:`h3-gate-sub`,initial:{opacity:0},animate:{opacity:1},transition:{delay:.7},children:`PRODUCTIONS · INC · EST. 2023`})]})}),(0,Q.jsxs)($.div,{className:`h3-root`,onMouseMove:h,style:{x:d,y:f},children:[(0,Q.jsx)(`canvas`,{className:`h3-canvas`,ref:s}),(0,Q.jsx)(`div`,{className:`h3-vig`}),(0,Q.jsx)(`div`,{className:`h3-corner h3-tl`}),(0,Q.jsx)(`div`,{className:`h3-corner h3-tr`}),(0,Q.jsx)(`div`,{className:`h3-corner h3-bl`}),(0,Q.jsx)(`div`,{className:`h3-corner h3-br`}),(0,Q.jsxs)(`div`,{className:`h3-rec`,children:[(0,Q.jsx)(`div`,{className:`h3-rec-dot`}),(0,Q.jsx)(`span`,{className:`h3-rec-txt`,children:`REC`})]}),(0,Q.jsxs)(`div`,{className:`h3-main`,children:[(0,Q.jsxs)($.div,{className:`h3-pre`,initial:{opacity:0,y:14},animate:{opacity:r?1:0,y:r?0:14},transition:{duration:.7},children:[(0,Q.jsx)(`div`,{className:`h3-pre-line`}),(0,Q.jsx)(`span`,{className:`h3-pre-txt`,children:`EST. 2023 · MADURAI`}),(0,Q.jsx)(`div`,{className:`h3-pre-line`})]}),(0,Q.jsxs)($.div,{className:`h3-brand`,initial:{opacity:0,y:20},animate:{opacity:r?1:0,y:r?0:20},transition:{duration:.8,delay:.05},children:[(0,Q.jsx)(`h1`,{className:`h3-name`,children:`CINEMAPAYYAN`}),(0,Q.jsx)($.span,{className:`h3-inc`,animate:{opacity:[.35,1,.35]},transition:{duration:3,repeat:1/0,ease:`easeInOut`},children:`INC`})]}),(0,Q.jsx)($.div,{className:`h3-rule`,initial:{scaleX:0},animate:{scaleX:r?1:0},transition:{duration:.9,delay:.15},style:{transformOrigin:`center`}}),(0,Q.jsxs)($.p,{className:`h3-tagline`,initial:{opacity:0},animate:{opacity:r?1:0},transition:{delay:.25,duration:.9},children:[(0,Q.jsx)(`b`,{children:`Storytelling`}),` through a cinematic lens —`,(0,Q.jsx)(`br`,{}),`where every frame is a declaration.`]}),(0,Q.jsx)($.div,{className:`h3-spine`,initial:{height:0},animate:{height:r?36:0},transition:{delay:.35,duration:.6}}),(0,Q.jsx)($.div,{initial:{opacity:0},animate:{opacity:r?1:0},transition:{delay:.4,duration:.6},style:{width:`100%`,display:`flex`,justifyContent:`center`},children:(0,Q.jsx)(`div`,{className:`h3-branches`,children:(0,Q.jsx)(`div`,{className:`h3-hbridge`,children:rg.map((t,n)=>(0,Q.jsxs)($.div,{className:`h3-node`,initial:{opacity:0,y:14},animate:{opacity:r?1:0,y:r?0:14},transition:{delay:.5+n*.1,duration:.5},children:[(0,Q.jsx)(`div`,{className:`h3-stem`}),(0,Q.jsx)(`div`,{className:`h3-box`,children:t.isScroll?(0,Q.jsx)(`div`,{className:`h3-link`,onClick:()=>e?.(t.key),children:t.title}):(0,Q.jsx)(On,{to:t.path,className:`h3-link`,children:t.title})}),(0,Q.jsx)(`span`,{className:`h3-tap`,children:`▼ tap`})]},n))})})}),(0,Q.jsxs)($.div,{className:`h3-stats`,initial:{opacity:0,y:14},animate:{opacity:r?1:0,y:r?0:14},transition:{delay:.65,duration:.7},children:[(0,Q.jsxs)(`div`,{className:`h3-stat`,children:[(0,Q.jsxs)(`span`,{className:`h3-stat-num`,children:[p,(0,Q.jsx)(`span`,{className:`h3-stat-sup`,children:`+`})]}),(0,Q.jsxs)(`span`,{className:`h3-stat-lbl`,children:[`YEARS OF`,(0,Q.jsx)(`br`,{}),`EVOLUTION`]})]}),(0,Q.jsx)(`div`,{className:`h3-stat`,children:(0,Q.jsxs)(`a`,{href:`https://x.com/cinemapayyan`,target:`_blank`,rel:`noopener noreferrer`,className:`h3-stat-link`,children:[(0,Q.jsxs)(`span`,{className:`h3-stat-num`,children:[m,(0,Q.jsx)(`span`,{className:`h3-stat-sup`,children:`.1K`})]}),(0,Q.jsxs)(`span`,{className:`h3-stat-lbl`,children:[`X / TWITTER`,(0,Q.jsx)(`br`,{}),`FOLLOWERS ↗`]})]})}),(0,Q.jsxs)(`div`,{className:`h3-stat`,children:[(0,Q.jsx)(`span`,{className:`h3-stat-num`,children:`∞`}),(0,Q.jsxs)(`span`,{className:`h3-stat-lbl`,children:[`CINEMATIC`,(0,Q.jsx)(`br`,{}),`VISION`]})]})]})]}),(0,Q.jsxs)($.div,{className:`h3-footer`,initial:{opacity:0},animate:{opacity:r?1:0},transition:{delay:.8,duration:.8},children:[(0,Q.jsxs)(`div`,{className:`h3-byline`,children:[(0,Q.jsx)(`span`,{className:`h3-byline-lbl`,children:`CINEMA ENTREPRENEUR`}),(0,Q.jsx)(`h2`,{className:`h3-byline-name`,children:`ABISHEK RAAJA`})]}),(0,Q.jsxs)(`div`,{className:`h3-scroll`,children:[(0,Q.jsx)(`p`,{className:`h3-scroll-lbl`,children:`EXPLORE`}),(0,Q.jsx)(`div`,{className:`h3-mouse`,children:(0,Q.jsx)($.div,{className:`h3-wheel`,animate:{y:[0,8,0]},transition:{duration:1.5,repeat:1/0,ease:`easeInOut`}})}),(0,Q.jsx)(`div`,{className:`h3-scroll-line`})]}),(0,Q.jsxs)(`div`,{className:`h3-seq`,children:[(0,Q.jsx)(`span`,{children:(0,Q.jsx)(`strong`,{children:`SEQ 01`})}),(0,Q.jsx)(`span`,{children:`HERO · WELCOME`})]})]}),(0,Q.jsx)($.div,{className:`h3-ticker`,initial:{opacity:0},animate:{opacity:r?1:0},transition:{delay:1,duration:.8},children:(0,Q.jsx)(`div`,{className:`h3-ticker-track`,children:[0,1].map(e=>ig.map((t,n)=>(0,Q.jsxs)(`span`,{className:`h3-ticker-item`,children:[t,(0,Q.jsx)(`span`,{className:`h3-ticker-sep`,children:`•`})]},`${e}-${n}`)))})})]})]})}var og=()=>{let e=`cp-font-link`;if(document.getElementById(e))return;let t=document.createElement(`link`);t.id=e,t.rel=`stylesheet`,t.href=`https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap`,document.head.appendChild(t)},sg=()=>{let[e,t]=(0,C.useState)(!1),[n,r]=(0,C.useState)(!1),[i,a]=(0,C.useState)(0),o=Hh(0),s=Hh(0),c=Yh(o,{stiffness:120,damping:18}),l=Yh(s,{stiffness:120,damping:18}),u=(0,C.useRef)(null);(0,C.useEffect)(()=>{og()},[]),(0,C.useEffect)(()=>{let e=()=>{t(window.scrollY>60),r(!0);let e=setTimeout(()=>r(!1),400);return()=>clearTimeout(e)};return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,C.useEffect)(()=>{let e=setInterval(()=>a(e=>(e+1)%24),42);return()=>clearInterval(e)},[]),(0,C.useEffect)(()=>{let e=e=>{let t=u.current;if(!t)return;let n=t.getBoundingClientRect(),r=n.left+n.width/2,i=n.top+n.height/2,a=e.clientX-r,c=e.clientY-i;Math.sqrt(a*a+c*c)<160?(o.set(a*.18),s.set(c*.18)):(o.set(0),s.set(0))};return window.addEventListener(`mousemove`,e),()=>window.removeEventListener(`mousemove`,e)},[o,s]);let d=e=>String(e).padStart(2,`0`),f=Array.from({length:12});return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`style`,{children:`
        /* ── Font base reset ── */
        .cp-logo-wrap,
        .cp-logo-wrap * {
          font-family: 'Inter', sans-serif;
        }

        .cp-logo-wrap {
          position: fixed;
          top: 14px; left: 14px;
          z-index: 2001;
          cursor: pointer;
        }

        /* outer ring */
        .cp-logo-ring {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          animation: cpLogoSpin 14s linear infinite;
          pointer-events: none;
        }
        .cp-logo-wrap:hover .cp-logo-ring {
          animation-play-state: paused;
        }
        @keyframes cpLogoSpin {
          to { transform: rotate(360deg); }
        }
        .cp-logo-ring svg { width: 100%; height: 100%; }

        /* scan line */
        .cp-logo-scan {
          position: absolute;
          inset: 0; border-radius: 50%;
          background: linear-gradient(
            135deg,
            transparent 40%,
            rgba(50,197,244,0.18) 50%,
            transparent 60%
          );
          opacity: 0;
          transition: opacity 0.15s;
          pointer-events: none;
        }
        .cp-logo-scan.active { opacity: 1; }

        /* image */
        .cp-logo-img {
          display: block;
          height: 64px; width: 64px;
          object-fit: contain;
          border-radius: 50%;
          border: 1px solid rgba(253,224,71,0.22);
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(8px);
          transition: border-color 0.35s, box-shadow 0.35s;
          position: relative; z-index: 2;
        }
        .cp-logo-wrap:hover .cp-logo-img {
          border-color: rgba(50,197,244,0.5);
          box-shadow:
            0 0 0 2px rgba(50,197,244,0.12),
            0 0 22px rgba(50,197,244,0.25);
        }
        .cp-logo-img.scrolled {
          height: 48px; width: 48px;
          border-color: rgba(50,197,244,0.3);
        }

        /* timecode — Inter */
        .cp-logo-tc {
          position: absolute;
          bottom: -18px; left: 50%;
          transform: translateX(-50%);
          font-family: 'Inter', sans-serif;
          font-size: 0.28rem;
          font-weight: 400;
          letter-spacing: 2px;
          color: rgba(50,197,244,0.45);
          white-space: nowrap;
          pointer-events: none;
          z-index: 3;
          transition: opacity 0.4s;
        }

        /* CP badge — Bebas Neue */
        .cp-logo-badge {
          position: absolute;
          top: -3px; right: -8px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 1.5px;
          color: #000;
          background: #fde047;
          padding: 1px 5px;
          z-index: 5;
          pointer-events: none;
          white-space: nowrap;
        }

        /* REC — Inter */
        .cp-logo-rec {
          position: absolute;
          bottom: -3px; left: -3px;
          display: flex; align-items: center; gap: 3px;
          z-index: 5; pointer-events: none;
        }
        .cp-logo-rec-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #ff3333;
          box-shadow: 0 0 5px rgba(255,51,51,0.7);
          animation: cpRecBlink 1s step-end infinite;
        }
        .cp-logo-rec-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.24rem;
          font-weight: 500;
          letter-spacing: 1.5px;
          color: rgba(255,51,51,0.7);
        }
        @keyframes cpRecBlink {
          0%,100% { opacity: 1; } 50% { opacity: 0; }
        }

        /* responsive */
        @media (max-width: 768px) {
          .cp-logo-img { height: 52px; width: 52px; }
          .cp-logo-img.scrolled { height: 40px; width: 40px; }
          .cp-logo-tc { display: none; }
        }
        @media (max-width: 480px) {
          .cp-logo-img { height: 44px; width: 44px; }
          .cp-logo-img.scrolled { height: 34px; width: 34px; }
          .cp-logo-badge { display: none; }
        }
      `}),(0,Q.jsxs)($.div,{ref:u,className:`cp-logo-wrap`,style:{x:c,y:l},whileTap:{scale:.92},onClick:()=>window.scrollTo({top:0,behavior:`smooth`}),title:`Back to top`,children:[(0,Q.jsx)(`div`,{className:`cp-logo-ring`,children:(0,Q.jsxs)(`svg`,{viewBox:`0 0 84 84`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,Q.jsx)(`circle`,{cx:`42`,cy:`42`,r:`40`,stroke:`rgba(253,224,71,0.18)`,strokeWidth:`0.8`,strokeDasharray:`3 4`}),(0,Q.jsx)(`circle`,{cx:`42`,cy:`42`,r:`40`,stroke:`rgba(50,197,244,0.25)`,strokeWidth:`1`,strokeDasharray:`60 192`,strokeDashoffset:`20`}),f.map((e,t)=>{let n=(t/f.length*360-90)*(Math.PI/180),r=t%3==0?33:35;return(0,Q.jsx)(`line`,{x1:42+38*Math.cos(n),y1:42+38*Math.sin(n),x2:42+r*Math.cos(n),y2:42+r*Math.sin(n),stroke:t%3==0?`rgba(253,224,71,0.5)`:`rgba(255,255,255,0.12)`,strokeWidth:t%3==0?`1.2`:`0.7`},t)})]})}),(0,Q.jsx)(`div`,{className:`cp-logo-scan ${n?`active`:``}`}),(0,Q.jsx)(`img`,{src:A.logo,alt:`CinemaPayyan`,className:`cp-logo-img ${e?`scrolled`:``}`}),(0,Q.jsx)(`div`,{className:`cp-logo-badge`,children:`CP`}),(0,Q.jsxs)(`div`,{className:`cp-logo-rec`,children:[(0,Q.jsx)(`div`,{className:`cp-logo-rec-dot`}),(0,Q.jsx)(`span`,{className:`cp-logo-rec-text`,children:`REC`})]}),(0,Q.jsx)(`div`,{className:`cp-logo-tc`,children:`00:00:${d(Math.floor(i/24)%60)}:${d(i)}`})]})]})};const cg=()=>{let e=(0,C.useRef)(null),t=(0,C.useRef)(null),n=(0,C.useRef)(null),r=(0,C.useRef)(null),i=(0,C.useRef)(null),a={homeRef:e,aboutRef:t,workRef:n,contactRef:r,promotionsRef:i};return{scrollToSection:e=>{let t;typeof e==`string`?t=a[e]:e&&e.current&&(t=e),t&&t.current?window.scrollTo({top:t.current.offsetTop,behavior:`smooth`}):console.error(`Scroll target invalid:`,e)},refs:{homeRef:e,aboutRef:t,workRef:n,contactRef:r,promotionsRef:i}}};var lg=(0,C.forwardRef)((e,t)=>{let n=[A.bigboss,A.stone,A.levelup,A.startda,A.logo,A.madras];return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;700;900&display=swap');

        .cp-ab-section {
          width: 100%;
          min-height: 100vh;
          background: #000;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 110px 8%;
        }

        .cp-ab-section::before {
          content: '';
          position: absolute;
          top: 0; left: 8%; right: 8%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent);
          pointer-events: none; z-index: 0;
        }

        .cp-ab-section::after {
          content: '人';
          position: absolute;
          right: 3%; bottom: -40px;
          font-size: 28rem;
          color: rgba(255,255,255,0.012);
          font-family: serif; line-height: 1;
          pointer-events: none; user-select: none; z-index: 0;
        }

        .cp-ab-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0; opacity: 0.15;
        }

        /* ── LOGO TRAIN ── */
        .cp-ab-train-wrap {
          position: absolute;
          top: 15%; left: 0;
          width: 100%; height: 200px;
          opacity: 0.18;
          z-index: 1;
          pointer-events: none;
          display: flex; align-items: center;
          overflow: hidden;
          filter: grayscale(100%) brightness(2.2);
        }

        .cp-ab-train-track {
          display: flex;
          width: max-content;
          animation: cpAbTrain 38s linear infinite;
          will-change: transform;
        }

        @keyframes cpAbTrain {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        .cp-ab-train-logo {
          height: 100px;
          margin-right: 80px;
          object-fit: contain;
        }

        /* ── MAIN LAYOUT ── */
        .cp-ab-layout {
          position: relative; z-index: 5;
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          align-items: center;
          gap: 90px;
          width: 100%;
        }

        /* ── VISUAL SIDE ── */
        .cp-ab-visual { position: relative; }

        .cp-ab-visual::before {
          content: '';
          position: absolute;
          top: -12px; left: -12px;
          width: 36px; height: 36px;
          border-top: 1px solid rgba(253,224,71,0.5);
          border-left: 1px solid rgba(253,224,71,0.5);
          pointer-events: none; z-index: 10;
        }

        .cp-ab-visual::after {
          content: '';
          position: absolute;
          bottom: -12px; right: -12px;
          width: 36px; height: 36px;
          border-bottom: 1px solid rgba(50,197,244,0.45);
          border-right: 1px solid rgba(50,197,244,0.45);
          pointer-events: none; z-index: 10;
        }

        .cp-ab-img {
          width: 100%;
          max-width: 480px;
          height: auto;
          display: block;
          box-shadow: 0 20px 60px rgba(0,0,0,0.9);
          transition: transform 0.6s ease;
        }
        .cp-ab-visual:hover .cp-ab-img { transform: scale(1.015); }

        .cp-ab-badge {
          position: absolute;
          top: 20px; left: -18px;
          display: flex; align-items: center; gap: 9px;
          font-family: 'Inter', sans-serif;
          font-size: 0.52rem;
          font-weight: 400;
          letter-spacing: 4px;
          color: rgba(255,255,255,0.8);
          background: rgba(0,0,0,0.72);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 8px 16px;
          z-index: 10;
          text-transform: uppercase;
          white-space: nowrap;
          transition: border-color 0.3s, color 0.3s;
          will-change: transform;
        }
        .cp-ab-visual:hover .cp-ab-badge {
          border-color: #fde047; color: #fde047;
        }

        .cp-ab-dot {
          width: 7px; height: 7px;
          background: #ff3333;
          border-radius: 50%;
          box-shadow: 0 0 8px #ff3333;
          flex-shrink: 0;
          animation: cpAbPulse 1.5s infinite;
        }
        @keyframes cpAbPulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.35; transform: scale(1.3); }
        }

        /* ── TEXT SIDE ── */
        .cp-ab-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.8rem, 9vw, 8rem);
          font-weight: 400;
          color: #fff;
          line-height: 0.92; letter-spacing: 4px;
          margin: 0 0 10px;
        }
        .cp-ab-title-yellow { color: #fde047; }

        .cp-ab-rule {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, rgba(253,224,71,0.25), rgba(50,197,244,0.2), transparent);
          margin-bottom: 26px;
        }

        .cp-ab-lead {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.9rem, 1.4vw, 1.05rem);
          font-weight: 400;
          color: rgba(255,255,255,0.9);
          line-height: 1.75; margin: 0 0 14px;
        }
        .cp-ab-lead-cyan {
          color: #32c5f4; font-weight: 700;
          text-shadow: 0 0 18px rgba(50,197,244,0.3);
        }

        .cp-ab-philosophy {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.82rem, 1.2vw, 0.95rem);
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          line-height: 1.9; max-width: 520px;
          margin: 0;
        }
        .cp-ab-philosophy-hl {
          color: #fff;
          font-weight: 700;
          border-bottom: 1px solid rgba(253,224,71,0.4);
        }

        .cp-ab-social-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          text-decoration: none;
          transition: border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s;
          flex: 1;
          min-width: 140px;
          position: relative;
          overflow: hidden;
        }

        .cp-ab-social-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: var(--s-glow, transparent);
          opacity: 0;
          transition: opacity 0.35s;
          z-index: 0;
        }
        .cp-ab-social-btn:hover::before { opacity: 0.07; }

        .cp-ab-social-btn:hover {
          border-color: var(--s-color, #fff);
          transform: translateY(-3px);
          box-shadow: 0 8px 28px var(--s-glow, rgba(255,255,255,0.1));
        }

        .cp-ab-social-icon {
          width: 22px;
          height: 22px;
          flex-shrink: 0;
          color: var(--s-color, #fff);
          position: relative; z-index: 1;
          transition: color 0.3s, filter 0.3s;
        }
        .cp-ab-social-btn:hover .cp-ab-social-icon {
          filter: drop-shadow(0 0 6px var(--s-glow, rgba(255,255,255,0.5)));
        }

        .cp-ab-social-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
          position: relative; z-index: 1;
          min-width: 0;
        }

        .cp-ab-social-platform {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.88rem;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.55);
          text-transform: uppercase;
          transition: color 0.3s;
          white-space: nowrap;
        }
        .cp-ab-social-btn:hover .cp-ab-social-platform {
          color: var(--s-color, #fff);
        }

        .cp-ab-social-handle {
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem;
          font-weight: 400;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.35);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: color 0.3s;
        }
        .cp-ab-social-btn:hover .cp-ab-social-handle {
          color: rgba(255,255,255,0.75);
        }

        .cp-ab-social-btn::after {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 8px; height: 8px;
          border-top: 1px solid var(--s-color, rgba(255,255,255,0.2));
          border-left: 1px solid var(--s-color, rgba(255,255,255,0.2));
          opacity: 0.4;
          transition: opacity 0.3s;
        }
        .cp-ab-social-btn:hover::after { opacity: 1; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .cp-ab-layout {
            grid-template-columns: 1fr;
            text-align: center; gap: 55px;
          }
          .cp-ab-img      { max-width: 360px; margin: 0 auto; display: block; }
          .cp-ab-philosophy { margin: 0 auto; }
          .cp-ab-badge,
          .cp-ab-visual::before,
          .cp-ab-visual::after { display: none; }
        }

        @media (max-width: 768px) {
          .cp-ab-section  { padding: 70px 5% 80px; }
          .cp-ab-train-logo { height: 65px; margin-right: 40px; }
          .cp-ab-social-btn { min-width: 42%; padding: 12px 14px; gap: 10px; }
          .cp-ab-social-icon { width: 18px; height: 18px; }
        }

        @media (max-width: 480px) {
          .cp-ab-section  { padding: 60px 4% 70px; }
          .cp-ab-title    { font-size: clamp(3rem, 16vw, 4.5rem); }
          .cp-ab-social-btn { min-width: calc(50% - 4px); flex: none; }
        }

        @media (max-width: 360px) {
          .cp-ab-social-btn { min-width: 100%; flex: none; }
        }
      `}),(0,Q.jsxs)(`section`,{ref:t,className:`cp-ab-section`,children:[(0,Q.jsx)(`div`,{className:`cp-ab-grain`}),(0,Q.jsx)(`div`,{className:`cp-ab-train-wrap`,children:(0,Q.jsx)(`div`,{className:`cp-ab-train-track`,children:[...n,...n,...n].map((e,t)=>(0,Q.jsx)(`img`,{src:e,alt:`Brand`,className:`cp-ab-train-logo`},t))})}),(0,Q.jsxs)(`div`,{className:`cp-ab-layout`,children:[(0,Q.jsxs)($.div,{className:`cp-ab-visual`,initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[(0,Q.jsx)(`img`,{src:A.abishakeRaja,alt:`Abishek Raaja`,className:`cp-ab-img`}),(0,Q.jsxs)(`div`,{className:`cp-ab-badge`,children:[(0,Q.jsx)(`span`,{className:`cp-ab-dot`}),(0,Q.jsx)(`span`,{children:`STILL SEARCHING`})]})]}),(0,Q.jsxs)($.div,{className:`cp-ab-text`,initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},transition:{duration:.8,delay:.2},viewport:{once:!0},children:[(0,Q.jsxs)(`h2`,{className:`cp-ab-title`,children:[`Abishek`,(0,Q.jsx)(`br`,{}),(0,Q.jsx)(`span`,{className:`cp-ab-title-yellow`,children:`Raaja`})]}),(0,Q.jsx)(`div`,{className:`cp-ab-rule`}),(0,Q.jsxs)(`p`,{className:`cp-ab-lead`,children:[`Founder of`,` `,(0,Q.jsx)(`span`,{className:`cp-ab-lead-cyan`,children:`CINEMAPAYYAN PRODUCTIONS`}),`.`]}),(0,Q.jsxs)(`p`,{className:`cp-ab-philosophy`,children:[`Success isn't a destination; it's a constant state of motion. Even now, we are`,` `,(0,Q.jsx)(`span`,{className:`cp-ab-philosophy-hl`,children:`searching for the unseen`}),`. To us, every sunrise is a blank script and every day is a new opportunity to redefine what cinema can be.`]}),(0,Q.jsx)($.div,{className:`cp-ab-socials`,initial:{opacity:0,y:14},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.45},viewport:{once:!0}})]})]})]})]})}),ug=[{id:1,img:A.mahaveeran,title:`MAAVEERAN`},{id:2,img:A.chitha,title:`CHITHA`},{id:3,img:A.coustdy,title:`CUSTODY`},{id:4,img:A.ptsir,title:`PT SIR`},{id:5,img:A.Eraivan,title:`ERAIVAN`},{id:6,img:A.madrasMatniee,title:`MADRAS MATINEE`},{id:7,img:A.dear,title:`DEAR`},{id:8,img:A.Angammal,title:`ANGAMMAL`},{id:9,img:A.Kumki2,title:`KUMKI 2`},{id:10,img:A.Gevi,title:`GEVI`},{id:11,img:A.RetroImg,title:`RETRO`},{id:12,img:A.KadalReset,title:`KADAL RESET REPEAT`},{id:13,img:A.SnakeAndLader,title:`SNAKE & LADDER`},{id:14,img:A.Adipurshan,title:`ADIPURUSHAN`},{id:15,img:A.Ragut,title:`RAGU THATHA`},{id:16,img:A.Adiya,title:`ADIYA`}],dg=[...ug,...ug],fg=()=>{let e=Hh(0),t=Hh(0);(0,C.useEffect)(()=>{let e=()=>t.set(window.scrollY);return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[t]);let n=Gh(Yh(Zh(t),{damping:50,stiffness:400}),[0,1e3],[0,2],{clamp:!1});Xh((t,r)=>{let i=r/16*-.005;i+=n.get()*i;let a=e.get()+i;a<=-50?a=0:a>0&&(a=-50),e.set(a)});let r=Gh(e,e=>`${e}%`);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap');

        :root {
          --font-display : 'Bebas Neue', sans-serif;
          --font-body    : 'Inter', sans-serif;
          --cyan         : #32c5f4;
          --yellow       : #fde047;
          --white        : #ffffff;
          --black        : #000000;
          --work-bg      : #111009;
        }

        /* ─── SECTION ─────────────────────────────── */
        .cp-work-section {
          background: var(--work-bg);
          padding: 100px 0 110px;
          overflow: hidden;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        /* Warm yellow glow — top right corner */
        .cp-work-section::after {
          content: '';
          position: absolute;
          top: -80px;
          right: -80px;
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, rgba(253,224,71,0.06) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
        }

        /* Cyan glow — bottom left */
        .cp-work-section::before {
          content: '';
          position: absolute;
          bottom: -60px;
          left: -60px;
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(50,197,244,0.05) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
        }

        /* Subtle warm grain texture overlay */
        .cp-work-noise {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          background-size: 160px 160px;
          opacity: 0.35;
          pointer-events: none;
          z-index: 0;
        }

        /* top border rule */
        .cp-work-top-rule {
          position: absolute;
          top: 0; left: 8%; right: 8%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(253,224,71,0.10) 50%, transparent);
          pointer-events: none;
          z-index: 1;
        }

        /* ─── HEADER ──────────────────────────────── */
        .cp-work-header {
          padding: 0 clamp(20px, 8%, 80px);
          margin-bottom: 50px;
          position: relative;
          z-index: 2;
        }

        /* pre-label — Inter */
        .cp-work-pre {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .cp-work-pre-line {
          width: 32px; height: 1px;
          background: var(--yellow);
          opacity: 0.5;
          flex-shrink: 0;
        }
        .cp-work-pre-text {
          font-family: var(--font-body);
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 5px;
          color: rgba(253,224,71,0.85);
          text-transform: uppercase;
        }

        /* main title — Bebas Neue */
        .cp-work-title {
          font-family: var(--font-display);
          font-size: clamp(3.5rem, 11vw, 9rem);
          font-weight: 400;
          font-style: normal;
          color: var(--white);
          line-height: 0.92;
          letter-spacing: 2px;
          margin: 0 0 16px;
          /* warm text shadow to reinforce non-black bg */
          text-shadow: 0 0 80px rgba(253,224,71,0.08);
        }
        .cp-work-title-stroke {
          font-family: var(--font-display);
          font-weight: 400;
          font-style: normal;
          -webkit-text-stroke: 1.5px var(--cyan);
          color: transparent;
          letter-spacing: 2px;
        }

        /* gradient rule */
        .cp-work-rule {
          width: 280px;
          height: 1px;
          background: linear-gradient(90deg, rgba(253,224,71,0.3), rgba(50,197,244,0.2), transparent);
          margin-bottom: 16px;
        }

        /* partner tag — Inter */
        .cp-work-tag {
          font-family: var(--font-body);
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 5px;
          color: rgba(253,224,71,0.75);
          text-transform: uppercase;
          margin: 0;
        }

        /* ─── MARQUEE ─────────────────────────────── */
        .cp-marquee-wrapper {
          display: flex;
          width: 100%;
          cursor: grab;
          mask-image: linear-gradient(to right, transparent, black 4%, black 96%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 4%, black 96%, transparent);
          overflow: hidden;
          position: relative;
          z-index: 2;
        }
        .cp-marquee-wrapper:active { cursor: grabbing; }

        .cp-marquee-track {
          display: flex;
          gap: 20px;
          will-change: transform;
          padding: 10px 0 18px;
        }

        /* ─── FILM CARD ───────────────────────────── */
        .cp-film-card {
          flex: 0 0 400px;
          height: 570px;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .cp-film-card:hover {
          transform: translateY(-12px);
          z-index: 5;
        }

        .cp-img-box {
          width: 100%;
          height: 100%;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.06);
          background: #0d0b07;
          position: relative;
        }
        .cp-film-card:hover .cp-img-box {
          border-color: rgba(50,197,244,0.22);
          box-shadow: 0 14px 44px rgba(0,0,0,0.75), 0 0 20px rgba(253,224,71,0.04);
        }

        .cp-img-box::before {
          content: '';
          position: absolute;
          top: 8px; left: 8px;
          width: 10px; height: 10px;
          border-top: 1px solid rgba(253,224,71,0.4);
          border-left: 1px solid rgba(253,224,71,0.4);
          z-index: 4;
          pointer-events: none;
        }
        .cp-img-box::after {
          content: '';
          position: absolute;
          bottom: 8px; right: 8px;
          width: 10px; height: 10px;
          border-bottom: 1px solid rgba(253,224,71,0.4);
          border-right: 1px solid rgba(253,224,71,0.4);
          z-index: 4;
          pointer-events: none;
        }

        .cp-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 1.1s cubic-bezier(0.16,1,0.3,1);
          pointer-events: none;
          user-select: none;
        }
        .cp-film-card:hover .cp-img-box img {
          transform: scale(1.06);
        }

        /* overlay */
        .cp-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(17,16,9,0.92) 0%,
            rgba(17,16,9,0.18) 45%,
            transparent 65%
          );
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 26px;
          z-index: 2;
        }
        .cp-card-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(50,197,244,0.05);
          opacity: 0;
          transition: opacity 0.4s;
          z-index: -1;
        }
        .cp-film-card:hover .cp-card-overlay::before { opacity: 1; }

        /* promo label — Inter */
        .cp-card-label {
          font-family: var(--font-body);
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(50,197,244,0.95);
          margin-bottom: 6px;
          display: block;
        }

        /* film title — Bebas Neue */
        .cp-card-title {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          font-weight: 400;
          font-style: normal;
          color: var(--white);
          margin: 0;
          letter-spacing: 1.5px;
          line-height: 1;
          transition: color 0.35s;
        }
        .cp-film-card:hover .cp-card-title { color: var(--yellow); }

        /* ─── HINT BAR ────────────────────────────── */
        .cp-work-hint {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 46px;
          gap: 12px;
          position: relative;
          z-index: 2;
        }

        .cp-hint-line {
          width: 80px; height: 1px;
          background: rgba(255,255,255,0.07);
          position: relative;
          overflow: hidden;
        }

        .cp-hint-fill {
          position: absolute;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, var(--cyan), var(--yellow));
        }

        /* hint text — Inter */
        .cp-hint-text {
          font-family: var(--font-body);
          font-size: 0.6rem;
          font-weight: 400;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }

        /* ─── RESPONSIVE ──────────────────────────── */
        @media (max-width: 1024px) {
          .cp-film-card { flex: 0 0 320px; height: 460px; }
        }
        @media (max-width: 600px) {
          .cp-work-section { padding: 70px 0 80px; }
          .cp-film-card { flex: 0 0 240px; height: 350px; }
          .cp-work-title { font-size: 3.5rem; }
          .cp-card-overlay { padding: 18px; }
          .cp-card-title { font-size: 1.6rem; }
        }
      `}),(0,Q.jsxs)(`section`,{className:`cp-work-section`,children:[(0,Q.jsx)(`div`,{className:`cp-work-top-rule`}),(0,Q.jsx)(`div`,{className:`cp-work-noise`}),(0,Q.jsxs)(`div`,{className:`cp-work-header`,children:[(0,Q.jsxs)(`div`,{className:`cp-work-pre`,children:[(0,Q.jsx)(`div`,{className:`cp-work-pre-line`}),(0,Q.jsx)(`span`,{className:`cp-work-pre-text`,children:`CINEMAPAYYAN INC`})]}),(0,Q.jsxs)(`h1`,{className:`cp-work-title`,children:[`FINISHED`,` `,(0,Q.jsx)(`span`,{className:`cp-work-title-stroke`,children:`PROJECTS`})]}),(0,Q.jsx)(`div`,{className:`cp-work-rule`}),(0,Q.jsx)(`p`,{className:`cp-work-tag`,children:`PROMOTIONAL PARTNER`})]}),(0,Q.jsx)(`div`,{className:`cp-marquee-wrapper`,children:(0,Q.jsx)($.div,{className:`cp-marquee-track`,style:{x:r},drag:`x`,dragConstraints:{left:0,right:0},onDrag:(t,n)=>{e.set(e.get()+n.delta.x*.01)},children:dg.map((e,t)=>(0,Q.jsx)(`div`,{className:`cp-film-card`,children:(0,Q.jsxs)(`div`,{className:`cp-img-box`,children:[(0,Q.jsx)(`img`,{src:e.img,alt:e.title,draggable:!1}),(0,Q.jsxs)(`div`,{className:`cp-card-overlay`,children:[(0,Q.jsx)(`span`,{className:`cp-card-label`,children:`PROMOTIONAL PARTNER`}),(0,Q.jsx)(`h2`,{className:`cp-card-title`,children:e.title})]})]})},t))})}),(0,Q.jsxs)(`div`,{className:`cp-work-hint`,children:[(0,Q.jsx)(`div`,{className:`cp-hint-line`,children:(0,Q.jsx)($.div,{className:`cp-hint-fill`,animate:{x:[`-100%`,`100%`]},transition:{repeat:1/0,duration:6,ease:`linear`}})}),(0,Q.jsx)(`span`,{className:`cp-hint-text`,children:`CINEMATIC VIEW\xA0•\xA0DRAG TO SHIFT`})]})]})]})},pg=[{id:1,img:A.Stone},{id:2,img:A.startda},{id:3,img:A.levelup},{id:4,img:A.Tseries},{id:5,img:A.PotentialStudio},{id:6,img:A.NutmegProduction},{id:7,img:A.EtakiLogo},{id:8,img:A.Srinivass},{id:9,img:A.MaliMovieMAkers},{id:10,img:A.Arupthangles},{id:11,img:A.PenStudio},{id:12,img:A.madras}],mg=[...pg,...pg,...pg,...pg],hg=()=>{let e=Hh(0),t=Yh(e,{damping:50,stiffness:300});Xh((t,n)=>{let r=n/16*.015,i=e.get()+r;i>=0&&(i=-25),e.set(i)});let n=Gh(t,e=>`${e}%`),r=Gh(t,e=>`${e*15}px`);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');

        /* ─── BG: Cold Steel Ink #080d12 ─────────────
           Previous section (Work) = #111009 warm charcoal
           This section cools down  → blue-grey steel ink
           Transition feels: warm amber → cold steel
        ──────────────────────────────────────────── */
        .cp-prod-section {
          background: #080d12;
          padding: 110px 0 120px;
          width: 100%;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Top fade — blends from warm Work bg into cold steel */
        .cp-prod-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 120px;
          background: linear-gradient(to bottom, rgba(17,16,9,0.45), transparent);
          pointer-events: none;
          z-index: 1;
        }

        /* Kanji watermark — kept, tinted steel-blue */
        .cp-prod-section::after {
          content: 'AR';
          position: absolute;
          right: 4%; bottom: -40px;
          font-size: 22rem;
          color: rgba(50,197,244,0.018);
          font-family: serif;
          line-height: 1;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }

        /* Cold blue ambient glow — center */
        .cp-prod-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 80%; height: 60%;
          background: radial-gradient(
            ellipse at center,
            rgba(50,197,244,0.055) 0%,
            rgba(8,13,18,0) 70%
          );
          filter: blur(60px);
          z-index: 1;
          pointer-events: none;
        }

        /* Subtle top-right yellow warmth — echo from previous section */
        .cp-prod-warm-echo {
          position: absolute;
          top: 0; right: 0;
          width: 300px; height: 300px;
          background: radial-gradient(circle at top right, rgba(253,224,71,0.04) 0%, transparent 65%);
          pointer-events: none;
          z-index: 1;
        }

        /* Top separator line */
        .cp-prod-top-rule {
          position: absolute;
          top: 0; left: 8%; right: 8%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(50,197,244,0.12) 50%, transparent);
          pointer-events: none;
          z-index: 2;
        }

        /* ─── HEADER ──────────────────────────────── */
        .cp-prod-header {
          position: relative;
          z-index: 10;
          text-align: center;
          margin-bottom: 65px;
        }

        .cp-prod-pre {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .cp-prod-pre-line {
          width: 32px; height: 1px;
          background: #fde047;
          opacity: 0.5;
        }
        .cp-prod-pre-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 5px;
          color: rgba(253,224,71,0.85);
          text-transform: uppercase;
        }

        /* Bebas Neue — main title */
        .cp-prod-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 9vw, 6.5rem);
          font-weight: 400;
          color: #fff;
          margin: 0 0 18px;
          line-height: 0.95;
          letter-spacing: 3px;
          /* cool blue text shadow on steel bg */
          text-shadow: 0 0 80px rgba(50,197,244,0.10);
        }
        .cp-prod-title-yellow {
          color: #fde047;
        }

        .cp-prod-rule {
          width: 130px; height: 1px;
          background: linear-gradient(90deg, #32c5f4, #fde047);
          margin: 0 auto;
          opacity: 0.7;
        }

        /* ─── FILM STRIP ──────────────────────────── */
        .cp-film-strip {
          position: relative;
          width: 100%;
          height: 210px;
          /* strip bg tinted to match section */
          background: rgba(50,197,244,0.025);
          border-top: 1px solid rgba(50,197,244,0.14);
          border-bottom: 1px solid rgba(253,224,71,0.10);
          display: flex;
          align-items: center;
          z-index: 5;
          overflow: hidden;
        }

        .cp-sprockets {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            radial-gradient(circle, rgba(50,197,244,0.45) 42%, transparent 45%),
            radial-gradient(circle, rgba(50,197,244,0.45) 42%, transparent 45%);
          background-size: 70px 22px;
          background-position: 0 10%, 0 90%;
          background-repeat: repeat-x;
        }

        .cp-film-strip::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            0deg, transparent, transparent 3px,
            rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px
          );
          pointer-events: none;
          z-index: 1;
        }

        .cp-logo-track {
          display: flex;
          align-items: center;
          width: max-content;
          gap: 100px;
          cursor: grab;
          touch-action: none;
          z-index: 10;
          padding: 0 40px;
        }
        .cp-logo-track:active { cursor: grabbing; }

        .cp-logo-cell {
          flex: 0 0 160px;
          height: 110px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          transition: transform 0.35s cubic-bezier(0.23,1,0.32,1);
        }
        .cp-logo-cell:hover { transform: scale(1.1); }

        .cp-logo-cell::before,
        .cp-logo-cell::after {
          content: '';
          position: absolute;
          width: 8px; height: 8px;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .cp-logo-cell::before {
          top: 0; left: 0;
          border-top: 1px solid rgba(50,197,244,0.5);
          border-left: 1px solid rgba(50,197,244,0.5);
        }
        .cp-logo-cell::after {
          bottom: 0; right: 0;
          border-bottom: 1px solid rgba(50,197,244,0.5);
          border-right: 1px solid rgba(50,197,244,0.5);
        }
        .cp-logo-cell:hover::before,
        .cp-logo-cell:hover::after { opacity: 1; }

        .cp-logo-cell img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 8px 18px rgba(0,0,0,0.9));
          pointer-events: none;
          user-select: none;
          transition: filter 0.35s;
        }
        .cp-logo-cell:hover img {
          filter: drop-shadow(0 0 14px rgba(50,197,244,0.22))
                  drop-shadow(0 8px 18px rgba(0,0,0,0.9));
        }

        /* Vignette matches steel-ink bg */
        .cp-vignette {
          position: absolute;
          top: 0; bottom: 0;
          width: 22%;
          z-index: 20;
          pointer-events: none;
        }
        .cp-vignette--left  {
          left: 0;
          background: linear-gradient(to right, #080d12, transparent);
        }
        .cp-vignette--right {
          right: 0;
          background: linear-gradient(to left, #080d12, transparent);
        }

        /* ─── HINT ────────────────────────────────── */
        .cp-prod-hint {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 44px;
          gap: 12px;
          position: relative;
          z-index: 10;
        }
        .cp-prod-hint-line {
          width: 80px; height: 1px;
          background: rgba(255,255,255,0.07);
          position: relative; overflow: hidden;
        }
        .cp-prod-hint-fill {
          position: absolute;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, #32c5f4, #fde047);
        }
        .cp-prod-hint-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }

        /* ─── RESPONSIVE ──────────────────────────── */
        @media (max-width: 768px) {
          .cp-logo-cell { flex: 0 0 120px; height: 80px; }
          .cp-logo-track { gap: 65px; }
          .cp-film-strip { height: 170px; }
          .cp-sprockets  { background-size: 50px 17px; }
        }
        @media (max-width: 480px) {
          .cp-prod-section { padding: 70px 0 80px; }
          .cp-logo-cell { flex: 0 0 95px; height: 65px; }
          .cp-logo-track { gap: 44px; }
          .cp-film-strip { height: 140px; }
        }
      `}),(0,Q.jsxs)(`section`,{className:`cp-prod-section`,children:[(0,Q.jsx)(`div`,{className:`cp-prod-top-rule`}),(0,Q.jsx)(`div`,{className:`cp-prod-glow`}),(0,Q.jsx)(`div`,{className:`cp-prod-warm-echo`}),(0,Q.jsxs)(`div`,{className:`cp-prod-header`,children:[(0,Q.jsxs)(`div`,{className:`cp-prod-pre`,children:[(0,Q.jsx)(`div`,{className:`cp-prod-pre-line`}),(0,Q.jsx)(`span`,{className:`cp-prod-pre-text`,children:`OFFICIAL COLLABORATIONS`}),(0,Q.jsx)(`div`,{className:`cp-prod-pre-line`})]}),(0,Q.jsxs)(`h2`,{className:`cp-prod-title`,children:[`TIE-UP`,` `,(0,Q.jsx)(`span`,{className:`cp-prod-title-yellow`,children:`PARTNERS`})]}),(0,Q.jsx)(`div`,{className:`cp-prod-rule`})]}),(0,Q.jsxs)(`div`,{className:`cp-film-strip`,children:[(0,Q.jsx)($.div,{className:`cp-sprockets`,style:{backgroundPositionX:r}}),(0,Q.jsx)($.div,{className:`cp-logo-track`,style:{x:n},drag:`x`,dragConstraints:{left:0,right:0},onDrag:(t,n)=>{e.set(e.get()+n.delta.x*.02)},children:mg.map((e,t)=>(0,Q.jsx)(`div`,{className:`cp-logo-cell`,children:(0,Q.jsx)(`img`,{src:e.img,alt:`Production Partner`,draggable:!1})},t))}),(0,Q.jsx)(`div`,{className:`cp-vignette cp-vignette--left`}),(0,Q.jsx)(`div`,{className:`cp-vignette cp-vignette--right`})]}),(0,Q.jsxs)(`div`,{className:`cp-prod-hint`,children:[(0,Q.jsx)(`div`,{className:`cp-prod-hint-line`,children:(0,Q.jsx)($.div,{className:`cp-prod-hint-fill`,animate:{x:[`-100%`,`100%`]},transition:{repeat:1/0,duration:6,ease:`linear`}})}),(0,Q.jsx)(`span`,{className:`cp-prod-hint-text`,children:`DRAG TO EXPLORE`})]})]})]})},gg=({children:e,delay:t=0,className:n=``})=>{let r=(0,C.useRef)(null),i=eg(r,{once:!1,margin:`-10% 0px -10% 0px`});return(0,Q.jsx)($.div,{ref:r,className:n,initial:{opacity:0,y:32},animate:i?{opacity:1,y:0}:{opacity:0,y:32},transition:{duration:.55,delay:t,ease:[.16,1,.3,1]},children:e})},_g=({items:e,label:t})=>{let n=(0,C.useRef)(null),r=(0,C.useRef)(0),i=(0,C.useRef)(0),a=(0,C.useRef)(0),o=(0,C.useRef)(!1),s=(0,C.useRef)(0),c=(0,C.useRef)(0),l=(0,C.useRef)(0),u=(0,C.useRef)(0),d=(0,C.useRef)(!1),f=e[0]?.aspect===`9/16`?122:192,p=e.length*f,m=[...e,...e,...e],h=()=>{n.current&&(n.current.style.transform=`translateX(-${r.current}px)`)};(0,C.useEffect)(()=>{r.current=p,h();let e=()=>{o.current||(Math.abs(i.current)>.05?(i.current*=.92,r.current+=i.current):(i.current=0,r.current+=.5),r.current>=p*2&&(r.current-=p),r.current<p&&(r.current+=p),h()),a.current=requestAnimationFrame(e)};return a.current=requestAnimationFrame(e),()=>cancelAnimationFrame(a.current)},[e,p]);let g=e=>{o.current=!0,d.current=!1,s.current=e.clientX,c.current=r.current,l.current=e.clientX,u.current=Date.now(),i.current=0,e.currentTarget.setPointerCapture(e.pointerId),e.preventDefault()},_=e=>{if(!o.current)return;let t=e.clientX-s.current;Math.abs(t)>4&&(d.current=!0);let n=Date.now(),a=Math.max(1,n-u.current);i.current=(l.current-e.clientX)/a*16,l.current=e.clientX,u.current=n,r.current=c.current-t,r.current>=p*2&&(r.current-=p),r.current<p&&(r.current+=p),h()},v=()=>{o.current=!1},y=e=>{d.current&&e.preventDefault()};return(0,Q.jsxs)(`div`,{className:`cp-mob-carousel-wrap`,children:[(0,Q.jsxs)(`div`,{className:`cp-mob-carousel-label-row`,children:[(0,Q.jsx)(`div`,{className:`cp-mob-carousel-label-line`}),(0,Q.jsx)(`span`,{className:`cp-mob-carousel-label-text`,children:t}),(0,Q.jsx)(`div`,{className:`cp-mob-carousel-label-line`})]}),(0,Q.jsxs)(`div`,{className:`cp-mob-carousel-window`,onPointerDown:g,onPointerMove:_,onPointerUp:v,onPointerLeave:v,style:{cursor:o.current?`grabbing`:`grab`,touchAction:`pan-y`},children:[(0,Q.jsx)(`div`,{className:`cp-mob-carousel-track`,ref:n,children:m.map((e,t)=>(0,Q.jsxs)(`a`,{href:e.link,target:`_blank`,rel:`noreferrer`,draggable:!1,onClick:y,className:`cp-mob-card ${e.aspect===`9/16`?`cp-mob-card--portrait`:`cp-mob-card--landscape`}`,children:[(0,Q.jsx)(`video`,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:`cp-mob-card-vid`,children:(0,Q.jsx)(`source`,{src:j.vjPreviews[e.id],type:`video/mp4`})}),(0,Q.jsx)(`div`,{className:`cp-mob-card-grad`}),e.tag&&(0,Q.jsx)(`span`,{className:`cp-mob-card-tag`,children:e.tag}),(0,Q.jsx)(`p`,{className:`cp-mob-card-title`,children:e.title})]},`${e.id}-${t}`))}),(0,Q.jsx)(`div`,{className:`cp-mob-fade cp-mob-fade--left`}),(0,Q.jsx)(`div`,{className:`cp-mob-fade cp-mob-fade--right`})]})]})},vg=()=>{let[e,t]=(0,C.useState)(0),[n,r]=(0,C.useState)(0),i=n=>{r(e),t(n)},a=e>n?1:-1,o=[{id:23,tag:`YT`,title:`CUSTODY Game | CSK Vs SRH`,link:`https://youtu.be/aHxx-NtpAwQ?si=hoArL4w8_2clt2O7`,aspect:`16/9`},{id:24,tag:`YT`,title:`Venkat Prabhu ARRESTED - CUSTODY Promo`,link:`https://youtu.be/2M-A_3U-Zmc?si=FPJ7TfFoZvRtPoZH`,aspect:`16/9`},{id:25,tag:`YT`,title:`Naga Chaitanya tests Venkat Prabhu`,link:`https://youtu.be/XbvzHgeK3VI?si=HeroAaf4kXPLaDLF`,aspect:`16/9`}],s=[{id:34,tag:`VP`,title:`A Venkat Prabhu Forge`,link:`https://www.instagram.com/reel/DB_VDkiPnQN/?igsh=MnRzeGhlanBnbm51`,aspect:`9/16`},{id:35,tag:`KRR`,title:`KRR Countdown 1`,link:`https://www.instagram.com/reel/DVu87daiQWN/?igsh=cGFpYjFlb3E0ZGpk`,aspect:`9/16`},{id:36,tag:`KRR`,title:`KRR Countdown 2`,link:`https://www.instagram.com/reel/DVnrPw1iUSU/?igsh=ZWUzd2hkYzh5bDE1`,aspect:`9/16`}],c=[{id:26,tag:`PERSU`,title:`Persu Short`,link:`https://www.instagram.com/cinemapayyan.inc/`,aspect:`9/16`},{id:31,tag:`RAGU`,title:`RaguThatha Countdown`,link:`https://www.instagram.com/reel/C-hRTVyIwLj/`,aspect:`9/16`},{id:37,tag:`DEAR`,title:`Dear`,link:`https://www.instagram.com/reel/C5aVNAay_nG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==`,aspect:`9/16`},{id:39,tag:`KKR`,title:`KKRCD`,link:`https://www.instagram.com/cinemapayyan.inc/`,aspect:`9/16`}];return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');

        /* ══ ROOT ══ */
        .cp-sp-section {
          background:#060a0f; color:#fff;
          padding:100px 0 0; overflow:hidden; position:relative;
        }
        .cp-sp-top-fade {
          position:absolute; top:0; left:0; right:0; height:130px;
          background:linear-gradient(to bottom,rgba(14,10,4,0.45),transparent);
          pointer-events:none; z-index:1;
        }
        .cp-sp-glow-tl {
          position:absolute; top:-60px; left:-60px; width:480px; height:480px;
          background:radial-gradient(circle,rgba(50,197,244,0.06) 0%,transparent 65%);
          pointer-events:none; z-index:0;
        }
        .cp-sp-glow-br {
          position:absolute; bottom:-60px; right:-60px; width:420px; height:420px;
          background:radial-gradient(circle,rgba(253,224,71,0.04) 0%,transparent 65%);
          pointer-events:none; z-index:0;
        }
        .cp-sp-scanlines {
          position:absolute; inset:0;
          background-image:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(50,197,244,0.012) 2px,rgba(50,197,244,0.012) 4px);
          pointer-events:none; z-index:0; opacity:0.5;
        }
        .cp-sp-section::after {
          content:'CP'; position:absolute; right:3%; bottom:-20px;
          font-size:22rem; color:rgba(50,197,244,0.018); font-family:serif; line-height:1;
          pointer-events:none; user-select:none; z-index:0;
        }
        .cp-sp-section::before {
          content:''; position:absolute; top:0; left:8%; right:8%; height:1px;
          background:linear-gradient(90deg,transparent,rgba(50,197,244,0.12) 50%,transparent);
          pointer-events:none;
        }
        .cp-sp-section a { text-decoration:none !important; color:inherit; }

        /* ══ NEW FEATURED VIDEO — VPNEW ══ */
        .cp-featured-wrap {
          max-width:1180px; margin:0 auto 56px;
          padding:0 clamp(20px,5%,40px);
          position:relative; z-index:5;
        }
        .cp-featured-label-row {
          display:flex; align-items:center; gap:14px; margin-bottom:16px;
        }
        .cp-featured-label-line { width:28px; height:1px; background:#fde047; opacity:0.5; flex-shrink:0; }
        .cp-featured-label-text {
          font-family:'Inter',sans-serif; font-size:clamp(0.48rem,1.3vw,0.62rem);
          font-weight:600; letter-spacing:6px; color:rgba(253,224,71,0.85); text-transform:uppercase;
        }
        .cp-featured-card {
          display:block; position:relative; width:100%;
          aspect-ratio:16/9; overflow:hidden;
          border:1px solid rgba(253,224,71,0.12);
          background:#030710;
          transition:border-color 0.4s, box-shadow 0.4s;
        }
        .cp-featured-card:hover {
          border-color:rgba(253,224,71,0.30);
          box-shadow:0 20px 60px rgba(0,0,0,0.8), 0 0 30px rgba(253,224,71,0.07);
        }
        .cp-featured-card video {
          width:100%; height:100%; object-fit:cover; display:block;
          transition:transform 0.55s cubic-bezier(0.16,1,0.3,1);
        }
        .cp-featured-card:hover video { transform:scale(1.03); }
        .cp-featured-grad {
          position:absolute; inset:0;
          background:linear-gradient(to bottom,transparent 35%,rgba(6,10,15,0.65) 100%);
          z-index:2; pointer-events:none;
        }
        .cp-featured-tag {
          position:absolute; top:0; left:0;
          font-family:'Inter',sans-serif; font-size:clamp(0.48rem,1.2vw,0.62rem);
          font-weight:700; letter-spacing:4px; color:#000;
          background:#fde047; padding:8px 18px; z-index:6; text-transform:uppercase;
          display:flex; align-items:center; gap:8px;
        }
        .cp-featured-tag-dot {
          width:7px; height:7px; border-radius:50%; background:#000;
          animation:cpDot 1.2s step-end infinite;
        }
        @keyframes cpDot { 0%,100%{opacity:1} 50%{opacity:0.25} }
        .cp-featured-overlay {
          position:absolute; inset:0;
          background:rgba(6,10,15,0.72);
          display:flex; align-items:center; justify-content:center;
          opacity:0; z-index:10; backdrop-filter:blur(4px); transition:opacity 0.3s;
        }
        .cp-featured-card:hover .cp-featured-overlay { opacity:1; }
        .cp-featured-overlay-label {
          font-family:'Inter',sans-serif; font-size:clamp(0.5rem,1.2vw,0.65rem);
          font-weight:600; letter-spacing:5px; color:#000; background:#fde047;
          padding:10px 24px; text-transform:uppercase;
          transform:translateY(8px); transition:transform 0.3s;
        }
        .cp-featured-card:hover .cp-featured-overlay-label { transform:translateY(0); }
        .cp-featured-corner {
          position:absolute; z-index:5; width:16px; height:16px; pointer-events:none;
        }
        .cp-featured-corner::before, .cp-featured-corner::after {
          content:''; position:absolute; background:rgba(253,224,71,0.5);
        }
        .cp-featured-tl { top:10px; left:10px; }
        .cp-featured-tl::before { width:100%; height:1px; top:0; left:0; }
        .cp-featured-tl::after  { width:1px; height:100%; top:0; left:0; }
        .cp-featured-br { bottom:10px; right:10px; }
        .cp-featured-br::before { width:100%; height:1px; bottom:0; right:0; }
        .cp-featured-br::after  { width:1px; height:100%; bottom:0; right:0; }
        .cp-featured-scan {
          position:absolute; bottom:0; left:0; right:0; height:2px;
          background:linear-gradient(90deg,#fde047,#32c5f4); transform-origin:left; z-index:6;
          transform:scaleX(0); transition:transform 0.45s cubic-bezier(0.77,0,0.18,1);
        }
        .cp-featured-card:hover .cp-featured-scan { transform:scaleX(1); }

        /* ══ TAB BAR — now 3 tabs ══ */
        .cp-tab-bar {
          display:flex; justify-content:center; gap:0;
          position:relative; z-index:20;
          margin-bottom:60px; padding:0 clamp(20px,5%,40px);
        }
        .cp-tab-btn {
          position:relative; overflow:hidden; padding:18px 36px;
          border:1px solid rgba(50,197,244,0.12); background:transparent;
          font-family:'Bebas Neue',sans-serif;
          font-size:clamp(0.9rem,1.8vw,1.3rem); letter-spacing:3px;
          color:rgba(255,255,255,0.30); cursor:pointer; transition:color 0.35s;
          flex:1; max-width:340px; text-align:center;
        }
        .cp-tab-btn + .cp-tab-btn { border-left:none; }
        .cp-tab-btn::before {
          content:''; position:absolute; inset:0;
          background:rgba(50,197,244,0.05);
          transform:scaleY(0); transform-origin:bottom;
          transition:transform 0.4s cubic-bezier(0.77,0,0.18,1); z-index:0;
        }
        .cp-tab-btn.active::before { transform:scaleY(1); }
        .cp-tab-btn.active { color:#fff; border-color:rgba(50,197,244,0.35); }
        .cp-tab-btn-inner  { position:relative; z-index:1; }
        .cp-tab-btn-sub {
          display:block; font-family:'Inter',sans-serif;
          font-size:0.5rem; font-weight:600; letter-spacing:4px;
          color:rgba(50,197,244,0.7); margin-bottom:4px; text-transform:uppercase;
        }
        .cp-tab-indicator {
          position:absolute; bottom:0; left:0; right:0; height:2px;
          background:linear-gradient(90deg,#32c5f4,#fde047);
          transform:scaleX(0); transform-origin:left;
          transition:transform 0.45s cubic-bezier(0.77,0,0.18,1);
        }
        .cp-tab-btn.active .cp-tab-indicator { transform:scaleX(1); }

        /* ══ SLIDES ══ */
        .cp-slides-viewport { position:relative; overflow:hidden; min-height:600px; }
        .cp-slide-panel { width:100%; padding-bottom:120px; }

        /* ══ LABEL ROWS ══ */
        .cp-sp-dual-label-row {
          display:flex; align-items:center; gap:0;
          max-width:1180px; margin:0 auto 24px;
          padding:0 clamp(20px,5%,40px); position:relative; z-index:5;
        }
        .cp-sp-label-line { width:28px; height:1px; background:#32c5f4; opacity:0.4; flex-shrink:0; }
        .cp-sp-label-text {
          font-family:'Inter',sans-serif; font-size:0.65rem; font-weight:600;
          letter-spacing:5px; color:rgba(50,197,244,0.8); text-transform:uppercase; white-space:nowrap;
        }
        .cp-sp-label-sep  { width:1px; height:14px; background:rgba(50,197,244,0.25); margin:0 18px; flex-shrink:0; }
        .cp-sp-label-text--dim { color:rgba(50,197,244,0.50); }
        .cp-sp-label-spacer { flex:1; }

        /* ══ YT GRID ══ */
        .cp-sp-yt-grid {
          display:grid; grid-template-columns:repeat(3,1fr); gap:20px;
          max-width:1180px; margin:0 auto 0;
          padding:0 clamp(20px,5%,40px); position:relative; z-index:5;
        }
        .cp-sp-yt-grid--bottom { margin-top:20px; margin-bottom:70px; }
        .cp-sp-yt-grid--top    { margin-bottom:0; }
        .cp-sp-yt-card {
          display:flex; flex-direction:column; background:#04080d;
          border:1px solid rgba(50,197,244,0.07); overflow:hidden;
          transition:border-color 0.4s,box-shadow 0.4s;
        }
        .cp-sp-yt-card:hover {
          border-color:rgba(50,197,244,0.22);
          box-shadow:0 14px 44px rgba(0,0,0,0.7),0 0 20px rgba(50,197,244,0.05);
        }
        .cp-sp-thumb {
          position:relative; width:100%; aspect-ratio:16/9;
          background:#030710; overflow:hidden;
        }
        .cp-sp-thumb::before {
          content:''; position:absolute; top:8px; left:8px; width:10px; height:10px;
          border-top:1px solid rgba(253,224,71,0.4); border-left:1px solid rgba(253,224,71,0.4);
          z-index:4; pointer-events:none;
        }
        .cp-sp-thumb::after {
          content:''; position:absolute; bottom:8px; right:8px; width:10px; height:10px;
          border-bottom:1px solid rgba(253,224,71,0.4); border-right:1px solid rgba(253,224,71,0.4);
          z-index:4; pointer-events:none;
        }
        .cp-sp-vid {
          width:100%; height:100%; object-fit:cover; display:block;
          transition:transform 0.55s cubic-bezier(0.16,1,0.3,1);
        }
        .cp-sp-yt-card:hover .cp-sp-vid { transform:scale(1.04); }
        .cp-sp-thumb-grad {
          position:absolute; inset:0;
          background:linear-gradient(to bottom,transparent 40%,rgba(6,10,15,0.55) 100%);
          z-index:2; pointer-events:none;
        }
        .cp-sp-yt-tag {
          position:absolute; top:10px; right:10px;
          font-family:'Bebas Neue',sans-serif; font-size:0.8rem; letter-spacing:3px;
          color:#000; background:#fde047; padding:3px 8px; z-index:5;
        }
        .cp-sp-hover-overlay {
          position:absolute; inset:0; background:rgba(6,10,15,0.75);
          display:flex; align-items:center; justify-content:center;
          opacity:0; z-index:10; backdrop-filter:blur(4px); transition:opacity 0.3s;
        }
        .cp-sp-yt-card:hover .cp-sp-hover-overlay,
        .cp-sp-reel-card:hover .cp-sp-hover-overlay,
        .cp-sp-large-card:hover .cp-sp-hover-overlay { opacity:1; }
        .cp-sp-hover-label {
          font-family:'Inter',sans-serif; font-size:0.6rem; font-weight:600;
          letter-spacing:4px; color:#000; background:#fde047;
          padding:8px 18px; text-transform:uppercase;
          transform:translateY(6px); transition:transform 0.3s;
        }
        .cp-sp-yt-card:hover .cp-sp-hover-label,
        .cp-sp-reel-card:hover .cp-sp-hover-label,
        .cp-sp-large-card:hover .cp-sp-hover-label { transform:translateY(0); }
        .cp-sp-yt-info { padding:16px 18px 20px; border-top:1px solid rgba(50,197,244,0.06); }
        .cp-sp-yt-title {
          font-family:'Inter',sans-serif; font-size:clamp(0.8rem,1.3vw,0.95rem); font-weight:500;
          color:rgba(255,255,255,0.82); margin:0; line-height:1.5;
          border-left:2px solid rgba(50,197,244,0.35); padding-left:10px; transition:color 0.3s;
        }
        .cp-sp-yt-card:hover .cp-sp-yt-title { color:#fff; }
        .cp-sp-scan {
          position:absolute; bottom:0; left:0; right:0; height:2px;
          background:linear-gradient(90deg,#32c5f4,#fde047); transform-origin:left; z-index:6;
        }

        /* thin divider */
        .cp-grid-divider { max-width:1180px; margin:0 auto; padding:0 clamp(20px,5%,40px); position:relative; z-index:5; }
        .cp-grid-divider-line { height:1px; background:linear-gradient(90deg,transparent,rgba(50,197,244,0.10) 50%,transparent); margin:18px 0; }

        /* ══ DUAL VIDEO ROW ══ */
        .cp-sp-dual-video-row {
          display:grid; grid-template-columns:1fr 1fr; gap:0;
          border:1px solid rgba(50,197,244,0.10);
          overflow:hidden; background:rgba(50,197,244,0.02);
        }
        .cp-sp-dual-vid-card {
          display:block; position:relative;
          aspect-ratio:16/9; overflow:hidden; background:#030710;
          transition:box-shadow 0.4s;
          border-right:1px solid rgba(50,197,244,0.10);
        }
        .cp-sp-dual-vid-card:hover { box-shadow:inset 0 0 0 1px rgba(253,224,71,0.25); }
        .cp-sp-dual-vid-card video { width:100%; height:100%; object-fit:cover; display:block; transition:transform 0.5s; }
        .cp-sp-dual-vid-card:hover video { transform:scale(1.03); }
        .cp-sp-dual-vid-tag {
          position:absolute; top:0; left:0;
          font-family:'Inter',sans-serif; font-size:0.6rem; font-weight:700;
          letter-spacing:3px; padding:7px 14px; z-index:15; text-transform:uppercase;
          display:flex; align-items:center; gap:7px; color:#000;
        }
        .cp-sp-dual-vid-tag--yellow { background:#fde047; }
        .cp-sp-dual-dot { width:7px; height:7px; border-radius:50%; background:#000; animation:cpDot 1.2s step-end infinite; }
        .cp-sp-dual-right { display:flex; flex-direction:column; }
        .cp-sp-dual-right .cp-sp-large-card { flex:1; min-height:0; aspect-ratio:16/9; }
        .cp-sp-dual-info {
          padding:20px 24px 24px;
          background:rgba(6,10,15,0.98);
          border-top:1px solid rgba(50,197,244,0.08);
          flex-shrink:0;
        }

        /* ══ COMPACT COUNTDOWN HEADER ══ */
        .cp-cd-compact-header {
          display:flex; align-items:center; gap:24px;
          padding:22px 0 28px; margin-bottom:28px;
          border-bottom:1px solid rgba(50,197,244,0.10);
          position:relative;
        }
        .cp-cd-compact-logo { height:44px; flex-shrink:0; filter:drop-shadow(0 0 10px rgba(50,197,244,0.45)); }
        .cp-cd-compact-text { flex:1; min-width:0; }
        .cp-cd-compact-over {
          font-family:'Inter',sans-serif; font-size:0.56rem; font-weight:600;
          letter-spacing:5px; color:rgba(50,197,244,0.75); text-transform:uppercase;
          display:block; margin-bottom:4px;
        }
        .cp-cd-compact-title {
          font-family:'Bebas Neue',sans-serif; font-size:clamp(1.8rem,3.5vw,2.8rem);
          font-weight:400; color:#fde047; margin:0; letter-spacing:3px; line-height:1;
        }
        .cp-cd-compact-desc {
          font-family:'Inter',sans-serif; font-size:clamp(0.78rem,1.1vw,0.88rem);
          font-weight:300; color:rgba(255,255,255,0.40); margin:6px 0 0; line-height:1.5;
        }
        .cp-cd-compact-desc strong { color:#fde047; font-weight:600; }
        .cp-cd-compact-rule {
          width:1px; height:60px; flex-shrink:0;
          background:linear-gradient(to bottom,rgba(50,197,244,0.4),transparent);
        }

        /* ══ SPECIAL PROMO wrapper ══ */
        .cp-sp-special {
          max-width:1180px; margin:0 auto 50px;
          padding:0 clamp(20px,5%,40px); position:relative; z-index:5;
        }
        .cp-sp-special-inner {
          display:flex; align-items:stretch; gap:0;
          border:1px solid rgba(50,197,244,0.10); overflow:hidden;
          background:rgba(50,197,244,0.02);
        }
        .cp-sp-special-video { flex:1.4; position:relative; }
        .cp-sp-large-card {
          display:block; position:relative; height:100%;
          background:#030710; overflow:hidden;
          transition:border-color 0.4s,box-shadow 0.4s;
        }
        .cp-sp-large-card:hover { box-shadow:inset 0 0 0 1px rgba(50,197,244,0.25); }
        .cp-sp-large-card video { width:100%; height:100%; min-height:220px; display:block; object-fit:cover; transition:transform 0.5s; }
        .cp-sp-large-card:hover video { transform:scale(1.03); }
        .cp-sp-prime-badge {
          position:absolute; top:0; left:0;
          font-family:'Inter',sans-serif; font-size:0.6rem; font-weight:700;
          letter-spacing:3px; color:#fff; background:#00A8E1;
          padding:7px 14px; z-index:15; text-transform:uppercase;
          display:flex; align-items:center; gap:7px;
        }
        .cp-sp-prime-badge::before { content:''; width:7px; height:7px; border-radius:50%; background:#fff; opacity:0.85; flex-shrink:0; }
        .cp-sp-large-scan {
          position:absolute; bottom:0; left:0; right:0; height:2px;
          background:linear-gradient(90deg,#32c5f4,#fde047); transform-origin:left; z-index:6;
        }
        .cp-sp-special-text {
          flex:0.8; padding:36px 32px;
          display:flex; flex-direction:column; justify-content:center;
          border-left:1px solid rgba(50,197,244,0.08);
        }
        .cp-sp-special-pre  { display:flex; align-items:center; gap:12px; margin-bottom:12px; }
        .cp-sp-special-pre-line { width:24px; height:1px; background:#32c5f4; opacity:0.5; }
        .cp-sp-special-pre-txt {
          font-family:'Inter',sans-serif; font-size:0.6rem; font-weight:600;
          letter-spacing:5px; color:rgba(50,197,244,0.85); text-transform:uppercase;
        }
        .cp-sp-special-title {
          font-family:'Bebas Neue',sans-serif; font-size:clamp(1.8rem,3.5vw,3.2rem);
          font-weight:400; color:#32c5f4; margin:0 0 12px; letter-spacing:3px; line-height:1.05;
        }
        .cp-sp-special-rule {
          width:100%; height:1px;
          background:linear-gradient(90deg,rgba(50,197,244,0.30),rgba(253,224,71,0.20),transparent);
          margin-bottom:18px;
        }
        .cp-sp-special-body {
          font-family:'Inter',sans-serif; font-size:clamp(0.78rem,1.1vw,0.88rem);
          font-weight:300; line-height:1.85; color:rgba(255,255,255,0.40); margin-bottom:24px;
        }
        .cp-sp-cta {
          position:relative; overflow:hidden;
          display:inline-flex; align-items:center; gap:10px;
          padding:12px 24px; border:1px solid #fde047; color:#fde047; align-self:flex-start;
          font-family:'Inter',sans-serif; font-size:0.62rem; font-weight:600;
          letter-spacing:4px; text-transform:uppercase; transition:color 0.4s;
        }
        .cp-sp-cta::before {
          content:''; position:absolute; inset:0; background:#fde047;
          transform:scaleX(0); transform-origin:left; z-index:0;
          transition:transform 0.4s cubic-bezier(0.77,0,0.18,1);
        }
        .cp-sp-cta:hover::before { transform:scaleX(1); }
        .cp-sp-cta:hover { color:#000; }
        .cp-sp-cta span  { position:relative; z-index:1; }

        /* ══ EVENTS TAB ══ */
        .cp-events-wrap {
          max-width:1180px; margin:0 auto 70px;
          padding:0 clamp(20px,5%,40px); position:relative; z-index:5;
        }
        .cp-events-header {
          text-align:center; margin-bottom:40px;
        }
        .cp-events-pre { display:inline-flex; align-items:center; gap:12px; margin-bottom:12px; }
        .cp-events-pre-line { width:32px; height:1px; background:#fde047; opacity:0.5; }
        .cp-events-pre-text {
          font-family:'Inter',sans-serif; font-size:clamp(0.5rem,1.3vw,0.62rem);
          font-weight:600; letter-spacing:6px; color:rgba(253,224,71,0.85); text-transform:uppercase;
        }
        .cp-events-title {
          font-family:'Bebas Neue',sans-serif;
          font-size:clamp(2.6rem,6vw,5rem);
          font-weight:400; color:#fff; letter-spacing:4px; margin:0 0 12px;
        }
        .cp-events-title span { color:#fde047; }
        .cp-events-rule {
          width:80px; height:1px;
          background:linear-gradient(90deg,#fde047,#32c5f4);
          margin:0 auto; opacity:0.7;
        }
        .cp-events-grid {
          display:grid; grid-template-columns:repeat(3,1fr); gap:20px;
        }
        .cp-sp-reel-card {
          aspect-ratio:9/16; overflow:hidden;
          border:1px solid rgba(50,197,244,0.08); position:relative;
          transition:border-color 0.35s,box-shadow 0.35s,transform 0.45s;
        }
        .cp-sp-reel-card:hover {
          border-color:rgba(50,197,244,0.28);
          box-shadow:0 10px 35px rgba(0,0,0,0.7),0 0 20px rgba(50,197,244,0.06);
          transform:translateY(-8px);
        }
        .cp-sp-reel-tl,.cp-sp-reel-br { position:absolute; z-index:4; width:10px; height:10px; pointer-events:none; }
        .cp-sp-reel-tl::before,.cp-sp-reel-tl::after,
        .cp-sp-reel-br::before,.cp-sp-reel-br::after { content:''; position:absolute; background:rgba(50,197,244,0.4); }
        .cp-sp-reel-tl::before{width:100%;height:1px;top:0;left:0;}
        .cp-sp-reel-tl::after{width:1px;height:100%;top:0;left:0;}
        .cp-sp-reel-tl{top:7px;left:7px;}
        .cp-sp-reel-br::before{width:100%;height:1px;bottom:0;right:0;}
        .cp-sp-reel-br::after{width:1px;height:100%;bottom:0;right:0;}
        .cp-sp-reel-br{bottom:7px;right:7px;}
        .cp-sp-reel-grad {
          position:absolute; inset:0;
          background:linear-gradient(to bottom,transparent 55%,rgba(6,10,15,0.75) 100%);
          z-index:2; pointer-events:none;
        }
        .cp-reel-caption {
          position:absolute; bottom:0; left:0; right:0; padding:12px 16px; z-index:5;
          font-family:'Inter',sans-serif; font-size:0.75rem; font-weight:500;
          color:rgba(255,255,255,0.85); border-left:2px solid #fde047;
          margin:0 10px 12px; background:rgba(6,10,15,0.50); backdrop-filter:blur(4px);
        }

        /* ══ COUNTDOWN TAB ══ */
        .cp-countdown-hero {
          max-width:1180px; margin:0 auto 70px;
          padding:0 clamp(20px,5%,40px); position:relative; z-index:5;
        }
        .cp-cd-brand-panel {
          display:flex; flex-direction:column; align-items:center; text-align:center;
          padding:60px 40px 50px; background:rgba(50,197,244,0.02);
          border:1px solid rgba(50,197,244,0.08); border-top:2px solid rgba(50,197,244,0.30);
          margin-bottom:50px; position:relative; overflow:hidden;
        }
        .cp-cd-brand-panel::before {
          content:'AR'; position:absolute; right:-20px; bottom:-40px;
          font-size:18rem; color:rgba(50,197,244,0.025); font-family:serif; line-height:1;
          pointer-events:none; user-select:none;
        }
        .cp-cd-brand-logo { height:65px; margin-bottom:24px; filter:drop-shadow(0 0 14px rgba(50,197,244,0.50)); }
        .cp-cd-pre { display:flex; align-items:center; gap:12px; margin-bottom:12px; }
        .cp-cd-pre-line { width:32px; height:1px; background:#32c5f4; opacity:0.5; }
        .cp-cd-pre-text {
          font-family:'Inter',sans-serif; font-size:0.65rem; font-weight:600;
          letter-spacing:5px; color:rgba(50,197,244,0.85); text-transform:uppercase;
        }
        .cp-cd-title {
          font-family:'Bebas Neue',sans-serif; font-size:clamp(2.8rem,6vw,5.5rem);
          font-weight:400; color:#fde047; margin:0 0 16px; letter-spacing:4px; line-height:1;
        }
        .cp-cd-rule {
          width:100%; height:1px;
          background:linear-gradient(90deg,transparent,rgba(50,197,244,0.3),rgba(253,224,71,0.2),transparent);
          margin-bottom:20px;
        }
        .cp-cd-desc {
          font-family:'Inter',sans-serif; font-size:clamp(0.9rem,1.4vw,1.05rem);
          font-weight:300; color:rgba(255,255,255,0.50); line-height:1.8; max-width:520px;
        }
        .cp-cd-desc strong {
          display:block; margin-top:16px; color:#fde047; font-weight:600;
          font-size:0.9em; letter-spacing:5px; text-transform:uppercase;
          animation:cpPulse 2s infinite ease-in-out;
        }
        @keyframes cpPulse { 0%,100%{opacity:0.8;transform:scale(1);} 50%{opacity:1;transform:scale(1.03);} }
        .cp-cd-reels-grid {
          display:grid; grid-template-columns:repeat(4,1fr); gap:20px;
        }

        /* ══ MOBILE CAROUSEL ══ */
        .cp-mob-carousel-wrap { margin-bottom:30px; }
        .cp-mob-carousel-label-row { display:flex; align-items:center; justify-content:center; gap:12px; margin-bottom:14px; padding:0 20px; }
        .cp-mob-carousel-label-line { flex:1; max-width:44px; height:1px; background:#32c5f4; opacity:0.4; }
        .cp-mob-carousel-label-text { font-family:'Inter',sans-serif; font-size:0.6rem; font-weight:600; letter-spacing:4px; color:rgba(50,197,244,0.85); text-transform:uppercase; white-space:nowrap; }
        .cp-mob-carousel-window { position:relative; overflow:hidden; width:100%; }
        .cp-mob-carousel-track  { display:flex; gap:12px; will-change:transform; padding:0 10px; }
        .cp-mob-card--landscape { flex:0 0 180px; aspect-ratio:16/9; overflow:hidden; border:1px solid rgba(50,197,244,0.10); position:relative; }
        .cp-mob-card--portrait  { flex:0 0 110px; aspect-ratio:9/16; overflow:hidden; border:1px solid rgba(50,197,244,0.10); position:relative; }
        .cp-mob-card-vid { width:100%; height:100%; object-fit:cover; display:block; }
        .cp-mob-card-grad { position:absolute; inset:0; background:linear-gradient(to bottom,transparent 50%,rgba(6,10,15,0.75) 100%); pointer-events:none; z-index:2; }
        .cp-mob-card-tag { position:absolute; top:5px; right:5px; font-family:'Bebas Neue',sans-serif; font-size:0.6rem; letter-spacing:2px; color:#000; background:#fde047; padding:2px 5px; z-index:5; }
        .cp-mob-card-title { position:absolute; bottom:0; left:0; right:0; margin:0 5px 6px; padding:5px 7px; font-family:'Inter',sans-serif; font-size:0.58rem; font-weight:500; color:rgba(255,255,255,0.85); border-left:2px solid #fde047; background:rgba(6,10,15,0.55); backdrop-filter:blur(4px); line-height:1.3; z-index:5; overflow:hidden; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; }
        .cp-mob-fade { position:absolute; top:0; bottom:0; width:32px; pointer-events:none; z-index:10; }
        .cp-mob-fade--left  { left:0;  background:linear-gradient(to right,#060a0f,transparent); }
        .cp-mob-fade--right { right:0; background:linear-gradient(to left,#060a0f,transparent);  }

        /* mobile brand panel */
        .cp-cd-mob-brand { text-align:center; padding:32px 20px 24px; margin:0 16px 28px; background:rgba(50,197,244,0.02); border:1px solid rgba(50,197,244,0.08); border-top:2px solid rgba(50,197,244,0.30); }
        .cp-cd-mob-logo { height:46px; margin-bottom:14px; filter:drop-shadow(0 0 10px rgba(50,197,244,0.45)); }
        .cp-cd-mob-pre { display:flex; align-items:center; justify-content:center; gap:10px; margin-bottom:8px; }
        .cp-cd-mob-pre-line { width:22px; height:1px; background:#32c5f4; opacity:0.5; }
        .cp-cd-mob-pre-text { font-family:'Inter',sans-serif; font-size:0.56rem; font-weight:600; letter-spacing:4px; color:rgba(50,197,244,0.85); text-transform:uppercase; }
        .cp-cd-mob-title { font-family:'Bebas Neue',sans-serif; font-size:2.2rem; font-weight:400; color:#fde047; margin:0 0 10px; letter-spacing:2px; line-height:1; }
        .cp-cd-mob-rule { width:100%; height:1px; background:linear-gradient(90deg,transparent,rgba(50,197,244,0.3),rgba(253,224,71,0.2),transparent); margin-bottom:12px; }
        .cp-cd-mob-desc { font-family:'Inter',sans-serif; font-size:0.8rem; font-weight:300; color:rgba(255,255,255,0.45); line-height:1.7; }
        .cp-cd-mob-desc strong { display:block; margin-top:10px; color:#fde047; font-weight:600; font-size:0.72rem; letter-spacing:4px; text-transform:uppercase; animation:cpPulse 2s infinite ease-in-out; }

        /* mobile special promo */
        .cp-sp-special-mob { display:block; margin:0 16px 28px; border:1px solid rgba(50,197,244,0.10); background:rgba(50,197,244,0.02); overflow:hidden; position:relative; }
        .cp-sp-special-mob video { width:100%; aspect-ratio:16/9; display:block; object-fit:cover; }
        .cp-sp-special-mob-info  { padding:16px 16px 20px; border-top:1px solid rgba(50,197,244,0.08); }
        .cp-sp-special-mob-pre { display:flex; align-items:center; gap:8px; margin-bottom:8px; }
        .cp-sp-special-mob-pre-line { width:18px; height:1px; background:#32c5f4; opacity:0.5; }
        .cp-sp-special-mob-pre-txt { font-family:'Inter',sans-serif; font-size:0.55rem; font-weight:600; letter-spacing:3px; color:rgba(50,197,244,0.85); text-transform:uppercase; }
        .cp-sp-special-mob-title { font-family:'Bebas Neue',sans-serif; font-size:1.7rem; color:#32c5f4; letter-spacing:2px; margin:0 0 10px; line-height:1.1; }
        .cp-sp-special-mob-body { font-family:'Inter',sans-serif; font-size:0.78rem; font-weight:300; color:rgba(255,255,255,0.40); line-height:1.7; margin-bottom:14px; }
        .cp-sp-cta-mob { display:inline-flex; align-items:center; padding:9px 18px; border:1px solid #fde047; color:#fde047; font-family:'Inter',sans-serif; font-size:0.58rem; font-weight:600; letter-spacing:3px; text-transform:uppercase; }

        /* mobile featured video */
        .cp-featured-mob {
          display:block; margin:0 16px 28px;
          border:1px solid rgba(253,224,71,0.12); background:#030710; overflow:hidden; position:relative;
        }
        .cp-featured-mob video { width:100%; aspect-ratio:16/9; display:block; object-fit:cover; }
        .cp-featured-mob-tag {
          position:absolute; top:0; left:0;
          font-family:'Inter',sans-serif; font-size:0.55rem; font-weight:700;
          letter-spacing:3px; color:#000; background:#fde047;
          padding:6px 12px; z-index:6; text-transform:uppercase;
          display:flex; align-items:center; gap:6px;
        }
        .cp-featured-mob-tag-dot { width:6px; height:6px; border-radius:50%; background:#000; animation:cpDot 1.2s step-end infinite; }

        /* mobile events */
        .cp-events-mob-header { text-align:center; padding:0 16px 24px; }
        .cp-events-mob-title { font-family:'Bebas Neue',sans-serif; font-size:2rem; font-weight:400; color:#fff; letter-spacing:3px; margin:0 0 6px; }
        .cp-events-mob-title span { color:#fde047; }
        .cp-events-mob-rule { width:60px; height:1px; background:linear-gradient(90deg,#fde047,#32c5f4); margin:0 auto; opacity:0.7; }

        /* ══ VISIBILITY HELPERS ══ */
        .cp-desktop-only { display:block; }
        .cp-mobile-only  { display:none;  }

        /* ══ RESPONSIVE ══ */
        @media (max-width:768px) {
          .cp-tab-bar     { padding:0 8px; margin-bottom:32px; }
          .cp-tab-btn     { padding:10px 6px; letter-spacing:0px; font-size:0.75rem; }
          .cp-tab-btn-sub { font-size:0.38rem; letter-spacing:2px; margin-bottom:2px; }
          .cp-desktop-only { display:none  !important; }
          .cp-mobile-only  { display:block !important; }
          .cp-slide-panel  { padding-bottom:60px; }
        }
        @media (min-width:769px) and (max-width:1024px) {
          .cp-sp-yt-grid       { grid-template-columns:repeat(2,1fr); }
          .cp-cd-reels-grid    { grid-template-columns:repeat(2,1fr); }
          .cp-events-grid      { grid-template-columns:repeat(2,1fr); }
          .cp-sp-dual-video-row { grid-template-columns:1fr; }
          .cp-sp-dual-vid-card  { border-right:none; border-bottom:1px solid rgba(50,197,244,0.10); aspect-ratio:16/9; }
        }
      `}),(0,Q.jsxs)(`section`,{className:`cp-sp-section`,children:[(0,Q.jsx)(`div`,{className:`cp-sp-top-fade`}),(0,Q.jsx)(`div`,{className:`cp-sp-glow-tl`}),(0,Q.jsx)(`div`,{className:`cp-sp-glow-br`}),(0,Q.jsx)(`div`,{className:`cp-sp-scanlines`}),(0,Q.jsx)(`div`,{className:`cp-tab-bar`,children:[{key:`shorts`,label:`SHORTS PROMOTION`,sublabel:`CINEMAPAYYAN DIGITAL`},{key:`events`,label:`EVENTS`,sublabel:`LIVE & SPECIAL`},{key:`countdown`,label:`COUNTDOWN SPECIALTY`,sublabel:`SIGNATURE FORMAT`}].map((t,n)=>(0,Q.jsxs)(`button`,{className:`cp-tab-btn${e===n?` active`:``}`,onClick:()=>i(n),children:[(0,Q.jsxs)(`span`,{className:`cp-tab-btn-inner`,children:[(0,Q.jsx)(`span`,{className:`cp-tab-btn-sub`,children:t.sublabel}),t.label]}),(0,Q.jsx)(`span`,{className:`cp-tab-indicator`})]},t.key))}),(0,Q.jsx)(`div`,{className:`cp-slides-viewport`,children:(0,Q.jsxs)(Gp,{mode:`wait`,custom:a,children:[e===0&&(0,Q.jsxs)($.div,{className:`cp-slide-panel`,custom:a,initial:{opacity:0,x:a*-60},animate:{opacity:1,x:0},exit:{opacity:0,x:a*60},transition:{duration:.38,ease:[.16,1,.3,1]},children:[(0,Q.jsxs)(`div`,{className:`cp-desktop-only`,children:[(0,Q.jsx)(gg,{children:(0,Q.jsx)(`div`,{className:`cp-sp-special`,children:(0,Q.jsxs)(`div`,{className:`cp-sp-dual-video-row`,children:[(0,Q.jsxs)(`a`,{href:`https://youtu.be/aHxx-NtpAwQ?si=hoArL4w8_2clt2O7`,target:`_blank`,rel:`noreferrer`,className:`cp-sp-dual-vid-card`,children:[(0,Q.jsx)(`video`,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:(0,Q.jsx)(`source`,{src:j.vjPreviews[38],type:`video/mp4`})}),(0,Q.jsxs)(`div`,{className:`cp-sp-dual-vid-tag cp-sp-dual-vid-tag--yellow`,children:[(0,Q.jsx)(`span`,{className:`cp-sp-dual-dot`}),`REVIEW`]}),(0,Q.jsx)(`div`,{className:`cp-sp-hover-overlay`,children:(0,Q.jsx)(`span`,{className:`cp-sp-hover-label`,children:`WATCH NOW`})}),(0,Q.jsx)(`div`,{className:`cp-sp-large-scan`})]}),(0,Q.jsxs)(`a`,{href:`https://youtu.be/tclNknwYTS0?si=6PeS3GpsiD7bqPJS`,target:`_blank`,rel:`noreferrer`,className:`cp-sp-dual-vid-card`,style:{borderRight:`none`},children:[(0,Q.jsx)(`video`,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:(0,Q.jsx)(`source`,{src:j.vjPreviews[32],type:`video/mp4`})}),(0,Q.jsxs)(`div`,{className:`cp-sp-dual-vid-tag`,style:{background:`#00A8E1`,color:`#fff`},children:[(0,Q.jsx)(`span`,{className:`cp-sp-dual-dot`,style:{background:`#fff`}}),`AMAZON PRIME`]}),(0,Q.jsx)(`div`,{className:`cp-sp-hover-overlay`,children:(0,Q.jsx)(`span`,{className:`cp-sp-hover-label`,children:`WATCH FULL PROMO`})}),(0,Q.jsx)(`div`,{className:`cp-sp-large-scan`})]})]})})}),(0,Q.jsx)(gg,{delay:.05,children:(0,Q.jsxs)(`div`,{className:`cp-sp-dual-label-row`,children:[(0,Q.jsx)(`div`,{className:`cp-sp-label-line`}),(0,Q.jsx)(`span`,{className:`cp-sp-label-text`,children:`YOUTUBE FEATURES`}),(0,Q.jsx)(`div`,{className:`cp-sp-label-spacer`})]})}),(0,Q.jsx)(gg,{delay:.08,children:(0,Q.jsx)(`div`,{className:`cp-sp-yt-grid cp-sp-yt-grid--top`,style:{marginBottom:`70px`},children:o.map(e=>(0,Q.jsxs)(`a`,{href:e.link,target:`_blank`,rel:`noreferrer`,className:`cp-sp-yt-card`,children:[(0,Q.jsxs)(`div`,{className:`cp-sp-thumb`,children:[(0,Q.jsx)(`video`,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:`cp-sp-vid`,children:(0,Q.jsx)(`source`,{src:j.vjPreviews[e.id],type:`video/mp4`})}),(0,Q.jsx)(`div`,{className:`cp-sp-thumb-grad`}),(0,Q.jsx)(`div`,{className:`cp-sp-yt-tag`,children:`YT`}),(0,Q.jsx)(`div`,{className:`cp-sp-hover-overlay`,children:(0,Q.jsx)(`span`,{className:`cp-sp-hover-label`,children:`WATCH NOW`})}),(0,Q.jsx)($.div,{className:`cp-sp-scan`,initial:{scaleX:0},whileHover:{scaleX:1},transition:{duration:.4}})]}),(0,Q.jsx)(`div`,{className:`cp-sp-yt-info`,children:(0,Q.jsx)(`p`,{className:`cp-sp-yt-title`,children:e.title})})]},e.id))})})]}),(0,Q.jsxs)(`div`,{className:`cp-mobile-only`,children:[(0,Q.jsxs)(`a`,{href:`https://youtu.be/aHxx-NtpAwQ?si=hoArL4w8_2clt2O7`,target:`_blank`,rel:`noreferrer`,className:`cp-sp-special-mob`,style:{marginBottom:`12px`},children:[(0,Q.jsx)(`video`,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:(0,Q.jsx)(`source`,{src:j.vjPreviews[38],type:`video/mp4`})}),(0,Q.jsxs)(`div`,{className:`cp-sp-special-mob-info`,children:[(0,Q.jsxs)(`div`,{className:`cp-sp-special-mob-pre`,children:[(0,Q.jsx)(`div`,{className:`cp-sp-special-mob-pre-line`}),(0,Q.jsx)(`span`,{className:`cp-sp-special-mob-pre-txt`,children:`REVIEW · FEATURED`})]}),(0,Q.jsx)(`p`,{className:`cp-sp-special-mob-title`,style:{color:`#fde047`},children:`LATEST RELEASE`})]})]}),(0,Q.jsxs)(`a`,{href:`https://youtu.be/tclNknwYTS0?si=6PeS3GpsiD7bqPJS`,target:`_blank`,rel:`noreferrer`,className:`cp-sp-special-mob`,children:[(0,Q.jsx)(`video`,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:(0,Q.jsx)(`source`,{src:j.vjPreviews[32],type:`video/mp4`})}),(0,Q.jsxs)(`div`,{className:`cp-sp-special-mob-info`,children:[(0,Q.jsxs)(`div`,{className:`cp-sp-special-mob-pre`,children:[(0,Q.jsx)(`div`,{className:`cp-sp-special-mob-pre-line`}),(0,Q.jsx)(`span`,{className:`cp-sp-special-mob-pre-txt`,style:{color:`#00A8E1`},children:`AMAZON PRIME ASSOCIATION`})]}),(0,Q.jsx)(`p`,{className:`cp-sp-special-mob-title`,children:`CINEMAPAYYAN SPECIAL PROMOTION`}),(0,Q.jsx)(`p`,{className:`cp-sp-special-mob-body`,children:`High-octane anticipation through rhythmic editing and cinematic precision.`}),(0,Q.jsx)(`span`,{className:`cp-sp-cta-mob`,children:`WATCH FULL PROMO`})]})]}),(0,Q.jsx)(_g,{items:o,label:`YOUTUBE FEATURES`})]})]},`shorts`),e===1&&(0,Q.jsxs)($.div,{className:`cp-slide-panel`,custom:a,initial:{opacity:0,x:a*-60},animate:{opacity:1,x:0},exit:{opacity:0,x:a*60},transition:{duration:.38,ease:[.16,1,.3,1]},children:[(0,Q.jsx)(`div`,{className:`cp-desktop-only`,children:(0,Q.jsx)(gg,{children:(0,Q.jsxs)(`div`,{className:`cp-events-wrap`,children:[(0,Q.jsxs)(`div`,{className:`cp-events-header`,children:[(0,Q.jsxs)(`div`,{className:`cp-events-pre`,children:[(0,Q.jsx)(`div`,{className:`cp-events-pre-line`}),(0,Q.jsx)(`span`,{className:`cp-events-pre-text`,children:`LIVE · ON GROUND · SPECIAL`}),(0,Q.jsx)(`div`,{className:`cp-events-pre-line`})]}),(0,Q.jsxs)(`h2`,{className:`cp-events-title`,children:[`EVENTS `,(0,Q.jsx)(`span`,{children:`& ACTIVATIONS`})]}),(0,Q.jsx)(`div`,{className:`cp-events-rule`})]}),(0,Q.jsx)(`div`,{className:`cp-events-grid`,children:s.map(e=>(0,Q.jsxs)(`a`,{href:e.link,target:`_blank`,rel:`noreferrer`,className:`cp-sp-reel-card`,children:[(0,Q.jsx)(`video`,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,style:{width:`100%`,height:`100%`,objectFit:`cover`,display:`block`},children:(0,Q.jsx)(`source`,{src:j.vjPreviews[e.id],type:`video/mp4`})}),(0,Q.jsx)(`div`,{className:`cp-sp-reel-grad`}),(0,Q.jsx)(`div`,{className:`cp-sp-reel-tl`}),(0,Q.jsx)(`div`,{className:`cp-sp-reel-br`}),(0,Q.jsx)(`div`,{className:`cp-sp-yt-tag`,children:e.tag}),(0,Q.jsx)(`div`,{className:`cp-sp-hover-overlay`,children:(0,Q.jsx)(`span`,{className:`cp-sp-hover-label`,children:`WATCH`})}),(0,Q.jsx)(`p`,{className:`cp-reel-caption`,children:e.title})]},e.id))})]})})}),(0,Q.jsxs)(`div`,{className:`cp-mobile-only`,children:[(0,Q.jsxs)(`div`,{className:`cp-events-mob-header`,children:[(0,Q.jsxs)(`h2`,{className:`cp-events-mob-title`,children:[`EVENTS `,(0,Q.jsx)(`span`,{children:`& ACTIVATIONS`})]}),(0,Q.jsx)(`div`,{className:`cp-events-mob-rule`})]}),(0,Q.jsx)(_g,{items:s,label:`EVENTS`})]})]},`events`),e===2&&(0,Q.jsxs)($.div,{className:`cp-slide-panel`,custom:a,initial:{opacity:0,x:a*60},animate:{opacity:1,x:0},exit:{opacity:0,x:a*-60},transition:{duration:.38,ease:[.16,1,.3,1]},children:[(0,Q.jsx)(`div`,{className:`cp-desktop-only`,children:(0,Q.jsxs)(`div`,{className:`cp-countdown-hero`,children:[(0,Q.jsx)(gg,{children:(0,Q.jsxs)(`div`,{className:`cp-cd-compact-header`,children:[(0,Q.jsx)(`img`,{src:A.logo,alt:`CinemaPayyan`,className:`cp-cd-compact-logo`}),(0,Q.jsxs)(`div`,{className:`cp-cd-compact-text`,children:[(0,Q.jsx)(`span`,{className:`cp-cd-compact-over`,children:`SIGNATURE FORMAT`}),(0,Q.jsx)(`h2`,{className:`cp-cd-compact-title`,children:`COUNTDOWN SPECIALTY`}),(0,Q.jsxs)(`p`,{className:`cp-cd-compact-desc`,children:[`High-energy rhythmic edits — `,(0,Q.jsx)(`strong`,{children:`Namma Specialty.`})]})]}),(0,Q.jsx)(`div`,{className:`cp-cd-compact-rule`})]})}),(0,Q.jsx)(gg,{delay:.1,children:(0,Q.jsx)(`div`,{className:`cp-cd-reels-grid`,children:c.map(e=>(0,Q.jsxs)(`a`,{href:e.link,target:`_blank`,rel:`noreferrer`,className:`cp-sp-reel-card`,children:[(0,Q.jsx)(`video`,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,style:{width:`100%`,height:`100%`,objectFit:`cover`,display:`block`},children:(0,Q.jsx)(`source`,{src:j.vjPreviews[e.id],type:`video/mp4`})}),(0,Q.jsx)(`div`,{className:`cp-sp-reel-grad`}),(0,Q.jsx)(`div`,{className:`cp-sp-reel-tl`}),(0,Q.jsx)(`div`,{className:`cp-sp-reel-br`}),(0,Q.jsx)(`div`,{className:`cp-sp-yt-tag`,children:e.tag}),(0,Q.jsx)(`div`,{className:`cp-sp-hover-overlay`,children:(0,Q.jsx)(`span`,{className:`cp-sp-hover-label`,children:`WATCH`})}),(0,Q.jsx)(`p`,{className:`cp-reel-caption`,children:e.title})]},e.id))})})]})}),(0,Q.jsxs)(`div`,{className:`cp-mobile-only`,children:[(0,Q.jsxs)(`div`,{className:`cp-cd-mob-brand`,children:[(0,Q.jsx)(`img`,{src:A.logo,alt:`CinemaPayyan`,className:`cp-cd-mob-logo`}),(0,Q.jsxs)(`div`,{className:`cp-cd-mob-pre`,children:[(0,Q.jsx)(`div`,{className:`cp-cd-mob-pre-line`}),(0,Q.jsx)(`span`,{className:`cp-cd-mob-pre-text`,children:`SIGNATURE FORMAT`}),(0,Q.jsx)(`div`,{className:`cp-cd-mob-pre-line`})]}),(0,Q.jsx)(`h2`,{className:`cp-cd-mob-title`,children:`COUNTDOWN SPECIALTY`}),(0,Q.jsx)(`div`,{className:`cp-cd-mob-rule`}),(0,Q.jsxs)(`p`,{className:`cp-cd-mob-desc`,children:[`High-energy rhythmic edits designed to build maximum anticipation.`,(0,Q.jsx)(`strong`,{children:`Namma Specialty.`})]})]}),(0,Q.jsx)(_g,{items:c,label:`COUNTDOWN VIDEOS`})]})]},`countdown`)]})})]})]})},yg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},bg=C.createContext&&C.createContext(yg),xg=[`attr`,`size`,`title`];function Sg(e,t){if(e==null)return{};var n=Cg(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Cg(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function wg(){return wg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wg.apply(this,arguments)}function Tg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Eg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Tg(Object(n),!0).forEach(function(t){Dg(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tg(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Dg(e,t,n){return t=Og(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Og(e){var t=kg(e,`string`);return typeof t==`symbol`?t:t+``}function kg(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Ag(e){return e&&e.map((e,t)=>C.createElement(e.tag,Eg({key:t},e.attr),Ag(e.child)))}function jg(e){return t=>C.createElement(Mg,wg({attr:Eg({},e.attr)},t),Ag(e.child))}function Mg(e){var t=t=>{var{attr:n,size:r,title:i}=e,a=Sg(e,xg),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),C.createElement(`svg`,wg({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:Eg(Eg({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&C.createElement(`title`,null,i),e.children)};return bg===void 0?t(yg):C.createElement(bg.Consumer,null,e=>t(e))}function Ng(e){return jg({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`},child:[]}]})(e)}function Pg(e){return jg({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z`},child:[]}]})(e)}function Fg(e){return jg({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z`},child:[]}]})(e)}function Ig(e){return jg({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z`},child:[]}]})(e)}function Lg(e){return jg({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z`},child:[]}]})(e)}var Rg=()=>{let[e,t]=(0,C.useState)(!1),[n,r]=(0,C.useState)(!1),i=(0,C.useRef)(null),a=` • CINEMA PAYYAN • NOW BOOKING • `.repeat(20),o=`eb4aabc2-f58b-4521-a027-7295fa2c22e0`;return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');

        /* ═══════════════════════════════════════════
           BG: Deep Cinematic Amber-Black — #0c0800
           Flow: graphite-violet #0a0a0e → amber-black #0c0800
           Feels like: theatre house lights dimming to gold
           just before the curtain rises.
           The yellow ticket EXPLODES on this warm base.
        ═══════════════════════════════════════════ */
        .cp-bk-section {
          background: #0c0800;
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 80px 0;
        }

        /* Top fade — violet graphite dissolves into amber-black */
        .cp-bk-top-fade {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 140px;
          background: linear-gradient(to bottom, rgba(10,10,14,0.55), transparent);
          pointer-events: none; z-index: 1;
        }

        /* Grand amber radial glow — center stage */
        .cp-bk-section::before {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 900px; height: 700px;
          background: radial-gradient(
            ellipse at center,
            rgba(253,224,71,0.07) 0%,
            rgba(200,120,10,0.04) 40%,
            transparent 70%
          );
          pointer-events: none; z-index: 0;
        }

        /* Kanji watermark — warm amber tint, finale theme */
        .cp-bk-section::after {
          content: '映';
          position: absolute;
          right: 3%; bottom: -20px;
          font-size: 22rem;
          color: rgba(253,180,30,0.025);
          font-family: serif; line-height: 1;
          pointer-events: none; user-select: none; z-index: 0;
        }

        /* Corner amber glow accents */
        .cp-bk-corner-tl {
          position: absolute;
          top: -80px; left: -80px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(253,224,71,0.05) 0%, transparent 60%);
          pointer-events: none; z-index: 0;
        }
        .cp-bk-corner-br {
          position: absolute;
          bottom: -80px; right: -80px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(253,224,71,0.04) 0%, transparent 60%);
          pointer-events: none; z-index: 0;
        }

        /* ═══════════════════════════════════════════
           MARQUEE BANDS — amber bg on amber-black = 🔥
        ═══════════════════════════════════════════ */
        .cp-bk-band {
          position: absolute;
          width: 150%;
          background: #fde047;
          padding: 10px 0;
          z-index: 1;
          overflow: hidden;
          /* subtle amber glow on band */
          box-shadow: 0 0 30px rgba(253,224,71,0.25);
        }
        .cp-bk-band--top    { top: 5%;    transform: rotate(-2deg); }
        .cp-bk-band--bottom { bottom: 5%; transform: rotate(1deg);  }

        .cp-bk-band-text {
          white-space: nowrap;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 0.7rem;
          letter-spacing: 5px;
          color: #000;
          text-transform: uppercase;
        }

        /* ═══════════════════════════════════════════
           TICKET AREA
        ═══════════════════════════════════════════ */
        .cp-bk-ticket-area {
          z-index: 10;
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 0 clamp(16px, 5%, 40px);
        }

        /* ── THE TICKET ── */
        .cp-bk-ticket {
          background: #fde047;
          color: #000;
          width: 88vw;
          max-width: 960px;
          min-height: 480px;
          display: flex;
          box-shadow:
            0 40px 100px rgba(0,0,0,0.8),
            0 0 60px rgba(253,224,71,0.12),
            0 0 0 1px rgba(255,255,255,0.04);
          position: relative;
        }

        .cp-bk-ticket::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 20px; height: 20px;
          border-top: 2px solid rgba(0,0,0,0.25);
          border-left: 2px solid rgba(0,0,0,0.25);
          pointer-events: none; z-index: 5;
        }
        .cp-bk-ticket::after {
          content: '';
          position: absolute; bottom: 0; right: 0;
          width: 20px; height: 20px;
          border-bottom: 2px solid rgba(0,0,0,0.25);
          border-right: 2px solid rgba(0,0,0,0.25);
          pointer-events: none; z-index: 5;
        }

        .cp-bk-form { display: flex; width: 100%; }

        /* ── INFO SIDE ── */
        .cp-bk-info {
          flex: 2;
          padding: clamp(24px, 4vw, 44px);
        }

        .cp-bk-ticket-header {
          border-bottom: 1px solid rgba(0,0,0,0.2);
          margin-bottom: 28px;
          padding-bottom: 14px;
        }

        .cp-bk-ticket-pre {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 8px;
        }
        .cp-bk-ticket-pre-line {
          width: 24px; height: 1px;
          background: rgba(0,0,0,0.35);
        }
        .cp-bk-ticket-pre-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 4px;
          color: rgba(0,0,0,0.7); text-transform: uppercase;
        }

        .cp-bk-ticket-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.5rem, 6vw, 4.2rem);
          font-weight: 400; color: #000;
          margin: 0 0 4px;
          letter-spacing: 3px; line-height: 1;
        }
        .cp-bk-ticket-sub {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 4px;
          color: rgba(0,0,0,0.65); text-transform: uppercase; margin: 0;
        }

        /* inputs */
        .cp-bk-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .cp-bk-field { display: flex; flex-direction: column; gap: 5px; }
        .cp-bk-field--full { grid-column: span 2; }

        .cp-bk-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 4px;
          color: rgba(0,0,0,0.7); text-transform: uppercase;
        }

        .cp-bk-input,
        .cp-bk-textarea {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(0,0,0,0.2);
          padding: 7px 0;
          font-family: 'Inter', sans-serif;
          font-weight: 500; font-size: 0.95rem; color: #000;
          transition: border-color 0.25s;
          box-sizing: border-box;
        }
        .cp-bk-input::placeholder,
        .cp-bk-textarea::placeholder {
          color: rgba(0,0,0,0.3);
          font-style: italic; font-weight: 300;
        }
        .cp-bk-input:focus,
        .cp-bk-textarea:focus {
          outline: none;
          border-bottom-color: rgba(0,0,0,0.55);
        }
        .cp-bk-textarea { resize: none; }

        /* ── DIVIDER ── */
        .cp-bk-divider {
          width: 2px; position: relative;
          border-left: 2px dashed rgba(0,0,0,0.2);
          margin: 28px 0;
        }
        .cp-bk-punch {
          width: 40px; height: 40px;
          background: #0c0800;
          border-radius: 50%;
          position: absolute; left: -21px;
        }
        .cp-bk-punch--top    { top: -50px; }
        .cp-bk-punch--bottom { bottom: -50px; }

        /* ── STUB ── */
        .cp-bk-stub {
          flex: 0.8;
          padding: clamp(20px, 3.5vw, 40px);
          display: flex; flex-direction: column;
          justify-content: space-between;
          background: rgba(0,0,0,0.07);
          position: relative;
        }

        .cp-bk-stub-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 4px;
          color: rgba(0,0,0,0.7); text-transform: uppercase; margin: 0 0 12px;
        }

        .cp-bk-icons {
          display: flex; gap: 14px; margin-bottom: 16px;
        }
        .cp-bk-icons a {
          color: #000; font-size: 1.3rem;
          transition: opacity 0.2s; text-decoration: none;
        }
        .cp-bk-icons a:hover { opacity: 0.5; }

        .cp-bk-notion {
          display: flex; align-items: center;
          justify-content: center; gap: 8px;
          padding: 9px 14px;
          border: 1px solid rgba(0,0,0,0.3);
          background: transparent;
          color: #000; text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 3px; text-transform: uppercase;
          position: relative; overflow: hidden;
          transition: color 0.35s; margin-bottom: 0;
        }
        .cp-bk-notion::before {
          content: ''; position: absolute; inset: 0;
          background: #000;
          transform: scaleX(0); transform-origin: left; z-index: 0;
          transition: transform 0.35s cubic-bezier(0.77,0,0.18,1);
        }
        .cp-bk-notion:hover::before { transform: scaleX(1); }
        .cp-bk-notion:hover { color: #fde047; }
        .cp-bk-notion span,
        .cp-bk-notion svg { position: relative; z-index: 1; }

        .cp-bk-confirm {
          position: relative; overflow: hidden;
          width: 100%; padding: 15px;
          border: 1px solid #000;
          background: #000; color: #fde047;
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem; font-weight: 700;
          letter-spacing: 4px; text-transform: uppercase;
          cursor: pointer; transition: color 0.35s;
        }
        .cp-bk-confirm::before {
          content: ''; position: absolute; inset: 0;
          background: #fde047;
          transform: scaleX(0); transform-origin: left; z-index: 0;
          transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
        }
        .cp-bk-confirm:hover:not(:disabled)::before { transform: scaleX(1); }
        .cp-bk-confirm:hover:not(:disabled) { color: #000; }
        .cp-bk-confirm:disabled { opacity: 0.4; cursor: not-allowed; }
        .cp-bk-confirm span { position: relative; z-index: 1; }

        /* ── SUCCESS SCREEN ── */
        .cp-bk-success {
          background: #fde047;
          width: 88vw; max-width: 960px;
          min-height: 480px;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center;
          padding: clamp(40px, 8vw, 100px);
          position: relative;
          box-shadow:
            0 40px 100px rgba(0,0,0,0.8),
            0 0 60px rgba(253,224,71,0.15);
        }
        .cp-bk-success::before {
          content: '';
          position: absolute; top:0; left:0;
          width: 20px; height: 20px;
          border-top: 2px solid rgba(0,0,0,0.25);
          border-left: 2px solid rgba(0,0,0,0.25);
        }
        .cp-bk-success::after {
          content: '';
          position: absolute; bottom:0; right:0;
          width: 20px; height: 20px;
          border-bottom: 2px solid rgba(0,0,0,0.25);
          border-right: 2px solid rgba(0,0,0,0.25);
        }

        .cp-bk-success-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(4rem, 12vw, 8rem);
          font-weight: 400; color: #000;
          margin: 0 0 10px;
          letter-spacing: 5px; line-height: 1;
        }

        .cp-bk-success-sub {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 5px;
          color: rgba(0,0,0,0.65); text-transform: uppercase; margin: 0 0 28px;
        }

        .cp-bk-success-rule {
          width: 80px; height: 1px;
          background: rgba(0,0,0,0.2);
          margin: 0 auto 28px;
        }

        .cp-bk-back {
          position: relative; overflow: hidden;
          padding: 12px 32px;
          border: 1px solid #000;
          background: #000; color: #fde047;
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem; font-weight: 700;
          letter-spacing: 4px; text-transform: uppercase;
          cursor: pointer; transition: color 0.35s;
        }
        .cp-bk-back::before {
          content: ''; position: absolute; inset: 0;
          background: rgba(255,255,255,0.15);
          transform: scaleX(0); transform-origin: left; z-index: 0;
          transition: transform 0.35s cubic-bezier(0.77,0,0.18,1);
        }
        .cp-bk-back:hover::before { transform: scaleX(1); }
        .cp-bk-back span { position: relative; z-index: 1; }

        /* ═══════════════════════════════════════════
           RESPONSIVE
        ═══════════════════════════════════════════ */
        @media (max-width: 768px) {
          .cp-bk-ticket { flex-direction: column; height: auto; width: 91vw; }
          .cp-bk-form   { flex-direction: column; }
          .cp-bk-info   { padding: 26px 18px; }
          .cp-bk-grid   { grid-template-columns: 1fr; }
          .cp-bk-field--full { grid-column: span 1; }
          .cp-bk-divider {
            width: 100%; height: 2px;
            border-left: none;
            border-top: 2px dashed rgba(0,0,0,0.18);
            margin: 0;
          }
          .cp-bk-punch {
            left: 50%; top: auto; bottom: auto;
            margin-left: -20px;
          }
          .cp-bk-punch--top    { top: -21px; }
          .cp-bk-punch--bottom { bottom: -21px; }
          .cp-bk-stub {
            padding: 24px 18px;
            flex-direction: row; flex-wrap: wrap;
            align-items: center; gap: 16px;
          }
          .cp-bk-confirm { width: 48%; }
        }

        @media (max-width: 480px) {
          .cp-bk-section  { padding: 70px 0; }
          .cp-bk-stub     { flex-direction: column; align-items: flex-start; }
          .cp-bk-confirm  { width: 100%; }
          .cp-bk-band-text { font-size: 0.6rem; }
        }
      `}),(0,Q.jsxs)(`section`,{className:`cp-bk-section`,children:[(0,Q.jsx)(`div`,{className:`cp-bk-top-fade`}),(0,Q.jsx)(`div`,{className:`cp-bk-corner-tl`}),(0,Q.jsx)(`div`,{className:`cp-bk-corner-br`}),(0,Q.jsx)(`div`,{className:`cp-bk-band cp-bk-band--top`,children:(0,Q.jsx)($.div,{className:`cp-bk-band-text`,animate:{x:[0,-1e3]},transition:{repeat:1/0,duration:20,ease:`linear`},children:a})}),(0,Q.jsx)(`div`,{className:`cp-bk-ticket-area`,children:(0,Q.jsx)(Gp,{mode:`wait`,children:e?(0,Q.jsxs)($.div,{className:`cp-bk-success`,initial:{scale:.85,opacity:0},animate:{scale:1,opacity:1},transition:{type:`spring`,damping:18},children:[(0,Q.jsx)(`h1`,{className:`cp-bk-success-title`,children:`BOOKED!`}),(0,Q.jsx)(`p`,{className:`cp-bk-success-sub`,children:`We will reach out soon`}),(0,Q.jsx)(`div`,{className:`cp-bk-success-rule`}),(0,Q.jsx)(`button`,{className:`cp-bk-back`,onClick:()=>t(!1),children:(0,Q.jsx)(`span`,{children:`BACK`})})]},`success`):(0,Q.jsx)($.div,{className:`cp-bk-ticket`,initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:-1e3,rotate:-10,opacity:0},transition:{type:`spring`,damping:20},children:(0,Q.jsxs)(`form`,{ref:i,className:`cp-bk-form`,onSubmit:async e=>{if(e.preventDefault(),!i.current)return;r(!0);let n=new FormData(i.current);try{let e=await(await fetch(`https://api.web3forms.com/submit`,{method:`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:JSON.stringify({access_key:o,subject:`New Booking — Cinema Payyan Productions`,from_name:`Cinema Payyan Booking`,name:n.get(`name`),email:n.get(`email`),phone:n.get(`phone`),message:n.get(`message`)})})).json();e.success?t(!0):alert(`Booking failed: ${e.message||`Please try again.`}`)}catch(e){console.error(e),alert(`Network error. Please try again.`)}finally{r(!1)}},children:[(0,Q.jsx)(`input`,{type:`hidden`,name:`access_key`,value:o}),(0,Q.jsx)(`input`,{type:`hidden`,name:`subject`,value:`New Booking — Cinema Payyan Productions`}),(0,Q.jsx)(`input`,{type:`hidden`,name:`from_name`,value:`Cinema Payyan Booking`}),(0,Q.jsxs)(`div`,{className:`cp-bk-info`,children:[(0,Q.jsxs)(`div`,{className:`cp-bk-ticket-header`,children:[(0,Q.jsxs)(`div`,{className:`cp-bk-ticket-pre`,children:[(0,Q.jsx)(`div`,{className:`cp-bk-ticket-pre-line`}),(0,Q.jsx)(`span`,{className:`cp-bk-ticket-pre-text`,children:`CINEMA PAYYAN PRODUCTIONS`})]}),(0,Q.jsx)(`h2`,{className:`cp-bk-ticket-title`,children:`ADMIT ONE`}),(0,Q.jsx)(`p`,{className:`cp-bk-ticket-sub`,children:`OFFICIAL BOOKING TICKET`})]}),(0,Q.jsxs)(`div`,{className:`cp-bk-grid`,children:[(0,Q.jsxs)(`div`,{className:`cp-bk-field`,children:[(0,Q.jsx)(`label`,{className:`cp-bk-label`,children:`NAME`}),(0,Q.jsx)(`input`,{name:`name`,type:`text`,placeholder:`Your Name`,className:`cp-bk-input`,required:!0})]}),(0,Q.jsxs)(`div`,{className:`cp-bk-field`,children:[(0,Q.jsx)(`label`,{className:`cp-bk-label`,children:`EMAIL`}),(0,Q.jsx)(`input`,{name:`email`,type:`email`,placeholder:`Email Address`,className:`cp-bk-input`,required:!0})]}),(0,Q.jsxs)(`div`,{className:`cp-bk-field cp-bk-field--full`,children:[(0,Q.jsx)(`label`,{className:`cp-bk-label`,children:`CONTACT NUMBER`}),(0,Q.jsx)(`input`,{name:`phone`,type:`tel`,placeholder:`+91`,className:`cp-bk-input`})]}),(0,Q.jsxs)(`div`,{className:`cp-bk-field cp-bk-field--full`,children:[(0,Q.jsx)(`label`,{className:`cp-bk-label`,children:`ABOUT THE PROJECT`}),(0,Q.jsx)(`textarea`,{name:`message`,placeholder:`Tell us your story...`,rows:2,className:`cp-bk-textarea`,required:!0})]})]})]}),(0,Q.jsxs)(`div`,{className:`cp-bk-divider`,children:[(0,Q.jsx)(`div`,{className:`cp-bk-punch cp-bk-punch--top`}),(0,Q.jsx)(`div`,{className:`cp-bk-punch cp-bk-punch--bottom`})]}),(0,Q.jsxs)(`div`,{className:`cp-bk-stub`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`cp-bk-stub-label`,children:`FOLLOW US`}),(0,Q.jsxs)(`div`,{className:`cp-bk-icons`,children:[(0,Q.jsx)(`a`,{href:`https://www.instagram.com/cinemapayyan.inc/`,target:`_blank`,rel:`noreferrer`,children:(0,Q.jsx)(Ng,{})}),(0,Q.jsx)(`a`,{href:`https://x.com/cinemapayyan`,target:`_blank`,rel:`noreferrer`,children:(0,Q.jsx)(Pg,{})}),(0,Q.jsx)(`a`,{href:`https://www.youtube.com/@OpenPannaa`,target:`_blank`,rel:`noreferrer`,children:(0,Q.jsx)(Fg,{})})]}),(0,Q.jsxs)(`a`,{href:`https://woolen-sodalite-e73.notion.site/16909085b6758040a618e11e9b9dabef`,target:`_blank`,rel:`noreferrer`,className:`cp-bk-notion`,children:[(0,Q.jsx)(`span`,{children:`MUNAI PORTAL`}),(0,Q.jsx)(Lg,{size:7})]})]}),(0,Q.jsx)(`button`,{type:`submit`,className:`cp-bk-confirm`,disabled:n,children:(0,Q.jsx)(`span`,{children:n?`SENDING...`:`CONFIRM BOOKING`})})]})]})},`ticket`)})}),(0,Q.jsx)(`div`,{className:`cp-bk-band cp-bk-band--bottom`,children:(0,Q.jsx)($.div,{className:`cp-bk-band-text`,animate:{x:[-1e3,0]},transition:{repeat:1/0,duration:25,ease:`linear`},children:a})})]})]})},zg=()=>{let e=()=>window.scrollTo({top:0,behavior:`smooth`});return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');

        /* ═══════════════════════════════════════════
           BG: Deep Ember Dark — #060401
           Flow: amber-black #0c0800 → ember dark #060401
           Feels like: the theatre going completely dark
           after the show — not black, but dying embers.
           The warmest dark possible without being black.
        ═══════════════════════════════════════════ */
        .cp-ft-footer {
          background: #060401;
          color: #fff;
          padding: 90px 10% 48px;
          position: relative;
          overflow: hidden;
        }

        /* Top fade — amber booking section fades into ember dark */
        .cp-ft-top-fade {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 120px;
          background: linear-gradient(to bottom, rgba(12,8,0,0.6), transparent);
          pointer-events: none; z-index: 1;
        }

        /* Faint ember center glow — dying warmth */
        .cp-ft-ember {
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 300px;
          background: radial-gradient(
            ellipse at center top,
            rgba(253,180,30,0.04) 0%,
            transparent 65%
          );
          pointer-events: none; z-index: 0;
        }

        /* Top separator — warm gold-to-cyan, echoes the whole site journey */
        .cp-ft-footer::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg,
            transparent,
            rgba(50,197,244,0.35) 30%,
            rgba(253,224,71,0.35) 70%,
            transparent
          );
          z-index: 2;
        }

        /* Closing kanji — '終' means "The End" — ember tinted */
        .cp-ft-footer::after {
          content: 'AR';
          position: absolute;
          right: 4%; bottom: -30px;
          font-size: 22rem;
          color: rgba(253,150,20,0.022);
          font-family: serif; line-height: 1;
          pointer-events: none; user-select: none; z-index: 0;
        }

        /* ─── GRID ─────────────────────────────── */
        .cp-ft-grid {
          display: grid;
          grid-template-columns: 1.5fr 2fr 1fr;
          gap: 55px;
          margin-bottom: 70px;
          position: relative; z-index: 2;
        }

        /* ─── BRAND ────────────────────────────── */
        .cp-ft-brand-pre {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 12px;
        }
        .cp-ft-brand-pre-line {
          width: 24px; height: 1px;
          background: #fde047; opacity: 0.5;
        }
        .cp-ft-brand-pre-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 4px;
          color: rgba(253,224,71,0.85); text-transform: uppercase;
        }

        /* Bebas — logo title */
        .cp-ft-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 400; color: #fde047;
          letter-spacing: 3px; line-height: 1;
          margin: 0 0 12px;
          /* dying ember glow on the logo */
          text-shadow: 0 0 40px rgba(253,180,30,0.20);
        }

        .cp-ft-brand-rule {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, rgba(253,224,71,0.18), rgba(50,197,244,0.12), transparent);
          margin-bottom: 14px;
        }

        .cp-ft-tagline {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem; font-weight: 500;
          letter-spacing: 4px;
          color: rgba(255,255,255,0.55);
          text-transform: uppercase;
          max-width: 240px; line-height: 1.8; margin: 0;
        }

        .cp-ft-socials {
          display: flex; gap: 14px; margin-top: 22px;
        }
        .cp-ft-socials a {
          width: 34px; height: 34px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.30);
          font-size: 0.9rem; text-decoration: none;
          transition: border-color 0.3s, color 0.3s;
          position: relative; overflow: hidden;
        }
        .cp-ft-socials a::before {
          content: ''; position: absolute; inset: 0;
          background: #fde047;
          transform: scaleX(0); transform-origin: left; z-index: 0;
          transition: transform 0.35s cubic-bezier(0.77,0,0.18,1);
        }
        .cp-ft-socials a:hover::before { transform: scaleX(1); }
        .cp-ft-socials a:hover { color: #000; border-color: #fde047; }
        .cp-ft-socials a svg { position: relative; z-index: 1; }

        /* ─── LINKS ─────────────────────────────── */
        .cp-ft-links {
          display: flex; justify-content: space-around;
        }

        .cp-ft-col h4 {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 5px;
          color: rgba(253,224,71,0.80); text-transform: uppercase;
          margin: 0 0 20px;
        }

        .cp-ft-col a {
          display: block; text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem; font-weight: 400;
          color: rgba(255,255,255,0.55);
          margin-bottom: 10px;
          transition: color 0.3s, padding-left 0.3s;
          position: relative;
        }
        .cp-ft-col a::before {
          content: '';
          position: absolute; left: -12px;
          top: 50%; transform: translateY(-50%);
          width: 6px; height: 1px;
          background: #fde047; opacity: 0;
          transition: opacity 0.3s;
        }
        .cp-ft-col a:hover { color: rgba(255,255,255,0.88); padding-left: 10px; }
        .cp-ft-col a:hover::before { opacity: 1; }

        /* ─── CONTACT ───────────────────────────── */
        .cp-ft-contact h4 {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 5px;
          color: rgba(253,224,71,0.80); text-transform: uppercase;
          margin: 0 0 20px;
        }

        .cp-ft-contact p {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem; font-weight: 300;
          color: rgba(255,255,255,0.55);
          margin: 0 0 10px; line-height: 1.7;
        }

        /* ─── BOTTOM BAR ────────────────────────── */
        .cp-ft-bottom {
          display: flex; justify-content: space-between;
          align-items: center;
          padding-top: 36px;
          border-top: 1px solid rgba(255,255,255,0.04);
          position: relative; z-index: 2;
        }

        .cp-ft-legal {
          display: flex; gap: 20px; flex-wrap: wrap;
        }
        .cp-ft-legal span {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem; font-weight: 400;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.30); text-transform: uppercase;
        }

        /* Scroll-to-top button */
        .cp-ft-scroll-btn {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; gap: 10px;
          padding: 10px 22px;
          border: 1px solid rgba(253,224,71,0.18);
          background: transparent;
          color: rgba(255,255,255,0.55);
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 4px; text-transform: uppercase;
          cursor: pointer;
          transition: color 0.4s, border-color 0.4s;
        }
        .cp-ft-scroll-btn::before {
          content: ''; position: absolute; inset: 0;
          background: #fde047;
          transform: scaleX(0); transform-origin: left; z-index: 0;
          transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
        }
        .cp-ft-scroll-btn:hover::before { transform: scaleX(1); }
        .cp-ft-scroll-btn:hover { color: #000; border-color: #fde047; }
        .cp-ft-scroll-btn span,
        .cp-ft-scroll-btn svg { position: relative; z-index: 1; }

        /* ─── RESPONSIVE ────────────────────────── */
        @media (max-width: 1024px) {
          .cp-ft-grid { grid-template-columns: 1fr 1fr; gap: 38px; }
        }
        @media (max-width: 768px) {
          .cp-ft-grid {
            grid-template-columns: 1fr;
            gap: 32px; text-align: center;
          }
          .cp-ft-brand-pre { justify-content: center; }
          .cp-ft-tagline   { margin: 0 auto; }
          .cp-ft-socials   { justify-content: center; }
          .cp-ft-links     { flex-direction: column; gap: 28px; align-items: center; }
          .cp-ft-bottom    { flex-direction: column; gap: 18px; text-align: center; }
          .cp-ft-legal     { justify-content: center; gap: 10px; }
          .cp-ft-col a::before { display: none; }
          .cp-ft-col a:hover { padding-left: 0; }
        }
        @media (max-width: 480px) {
          .cp-ft-footer { padding: 65px 5% 32px; }
        }
      `}),(0,Q.jsxs)(`footer`,{className:`cp-ft-footer`,children:[(0,Q.jsx)(`div`,{className:`cp-ft-top-fade`}),(0,Q.jsx)(`div`,{className:`cp-ft-ember`}),(0,Q.jsxs)(`div`,{className:`cp-ft-grid`,children:[(0,Q.jsxs)(`div`,{className:`cp-ft-brand`,children:[(0,Q.jsxs)(`div`,{className:`cp-ft-brand-pre`,children:[(0,Q.jsx)(`div`,{className:`cp-ft-brand-pre-line`}),(0,Q.jsx)(`span`,{className:`cp-ft-brand-pre-text`,children:`EST. 2023`})]}),(0,Q.jsx)(`h2`,{className:`cp-ft-logo`,children:`CINEMA PAYYAN`}),(0,Q.jsx)(`div`,{className:`cp-ft-brand-rule`}),(0,Q.jsx)(`p`,{className:`cp-ft-tagline`,children:`STORYTELLING THROUGH A CINEMATIC LENS.`}),(0,Q.jsxs)(`div`,{className:`cp-ft-socials`,children:[(0,Q.jsx)(`a`,{href:`https://www.instagram.com/cinemapayyan.inc/`,target:`_blank`,rel:`noreferrer`,"aria-label":`Instagram`,children:(0,Q.jsx)(Ng,{})}),(0,Q.jsx)(`a`,{href:`https://x.com/cinemapayyan`,target:`_blank`,rel:`noreferrer`,"aria-label":`Twitter`,children:(0,Q.jsx)(Pg,{})}),(0,Q.jsx)(`a`,{href:`https://www.youtube.com/@OpenPannaa`,target:`_blank`,rel:`noreferrer`,"aria-label":`YouTube`,children:(0,Q.jsx)(Fg,{})})]})]}),(0,Q.jsxs)(`div`,{className:`cp-ft-links`,children:[(0,Q.jsxs)(`div`,{className:`cp-ft-col`,children:[(0,Q.jsx)(`h4`,{children:`PRODUCTION`}),(0,Q.jsx)(`a`,{href:`#work`,children:`Projects`}),(0,Q.jsx)(`a`,{href:`#about`,children:`The Studio`}),(0,Q.jsx)(`a`,{href:`https://woolen-sodalite-e73.notion.site/16909085b6758040a618e11e9b9dabef`,target:`_blank`,rel:`noreferrer`,children:`Munai Portal`})]}),(0,Q.jsxs)(`div`,{className:`cp-ft-col`,children:[(0,Q.jsx)(`h4`,{children:`SOCIALS`}),(0,Q.jsx)(`a`,{href:`https://www.instagram.com/cinemapayyan.inc/`,target:`_blank`,rel:`noreferrer`,children:`Instagram`}),(0,Q.jsx)(`a`,{href:`https://x.com/cinemapayyan`,target:`_blank`,rel:`noreferrer`,children:`X (Twitter)`}),(0,Q.jsx)(`a`,{href:`https://www.youtube.com/@OpenPannaa`,target:`_blank`,rel:`noreferrer`,children:`YouTube`})]})]}),(0,Q.jsxs)(`div`,{className:`cp-ft-contact`,children:[(0,Q.jsx)(`h4`,{children:`INQUIRIES`}),(0,Q.jsxs)(`p`,{children:[`cinemapayyanproductions`,(0,Q.jsx)(`br`,{}),`@gmail.com`]}),(0,Q.jsx)(`p`,{children:`Chennai, India`})]})]}),(0,Q.jsxs)(`div`,{className:`cp-ft-bottom`,children:[(0,Q.jsxs)(`div`,{className:`cp-ft-legal`,children:[(0,Q.jsx)(`span`,{children:`© 2026 Cinema Payyan Productions.`}),(0,Q.jsx)(`span`,{children:`All Rights Reserved.`})]}),(0,Q.jsxs)($.button,{className:`cp-ft-scroll-btn`,onClick:e,whileTap:{scale:.95},children:[(0,Q.jsx)(`span`,{children:`BACK TO TOP`}),(0,Q.jsx)(Ig,{size:10})]})]})]})]})},Bg=[{img:A.Munai1,title:`THE ARCHITECTS`,desc:`A CINEMAPAYYAN PRODUCT`},{img:A.Munai2,title:`NARRATIVE DEPTH`,desc:`A CINEMAPAYYAN PRODUCT`},{img:A.Munai3,title:`THE SCRIPT LAB`,desc:`A CINEMAPAYYAN PRODUCT`},{img:A.Munai4,title:`ARC CRAFTING`,desc:`A CINEMAPAYYAN PRODUCT`},{img:A.Munai5,title:`VISIONARY FLOW`,desc:`A CINEMAPAYYAN PRODUCT`},{img:A.Munai6,title:`DIALOGUE DESIGN`,desc:`A CINEMAPAYYAN PRODUCT`},{img:A.Munai7,title:`STORY PULSE`,desc:`A CINEMAPAYYAN PRODUCT`},{img:A.Munai8,title:`MUNAI CORE`,desc:`A CINEMAPAYYAN PRODUCT`},{img:A.Munai9,title:`FINAL EDITION`,desc:`A CINEMAPAYYAN PRODUCT`}],Vg=()=>{let[e,t]=(0,C.useState)(!1);return(0,C.useEffect)(()=>{let e=()=>t(window.scrollY>200);return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]),(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');

        /* ═══════════════════════════════════════════
           COLORS EXTRACTED FROM Munai1.jpg
           ─────────────────────────────────────────
           bg main  : #1c2e22  chalkboard green
           bg alt   : #172619  darker green rows
           bg deep  : #111d16  deepest — wrapper
           gold     : #c9922a  amber headings in img
           gold lt  : #e8b84b  lighter gold labels
           chalk    : #e8e4d8  aged white chalk text
           chalk50  : rgba(232,228,216,0.55)
           NO image backgrounds anywhere.
        ═══════════════════════════════════════════ */

        .cp-mn-wrapper {
          width: 100%;
          background: #111d16;
          color: #e8e4d8;
        }

        /* ── HEADER ─────────────────────────────── */
        .cp-mn-header {
          text-align: center;
          padding: 110px 20px 90px;
          background: #1c2e22;
          position: relative;
          overflow: hidden;
        }

        /* warm gold center glow */
        .cp-mn-header::before {
          content: '';
          position: absolute;
          top: 0; left: 8%; right: 8%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,146,42,0.30), transparent);
          z-index: 1;
        }
        .cp-mn-header::after {
          content: '';
          position: absolute;
          bottom: 28px; left: 8%; right: 8%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,146,42,0.30), transparent);
          z-index: 1;
        }

        .cp-mn-header-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 700px; height: 500px;
          background: radial-gradient(ellipse, rgba(201,146,42,0.07) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }

        /* kanji watermark — gold tint */
        .cp-mn-kanji {
          position: absolute;
          left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          font-size: 38rem;
          color: rgba(201,146,42,0.04);
          font-family: serif; line-height: 1;
          pointer-events: none; user-select: none; z-index: 0;
        }

        .cp-mn-header-pre {
          display: inline-flex; align-items: center; gap: 12px;
          margin-bottom: 18px; position: relative; z-index: 2;
        }
        .cp-mn-header-pre-line {
          width: 32px; height: 1px;
          background: #c9922a; opacity: 0.6;
        }
        .cp-mn-header-pre-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 5px;
          color: #e8b84b;
          text-transform: uppercase;
        }

        .cp-mn-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(72px, 14vw, 170px);
          font-weight: 400;
          color: #e8b84b;
          letter-spacing: 8px; line-height: 0.9;
          text-shadow: 0 0 80px rgba(201,146,42,0.22);
          position: relative; z-index: 2;
          margin: 0 0 14px;
        }

        .cp-mn-meta {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem; font-weight: 500;
          letter-spacing: 6px;
          color: rgba(232,228,216,0.55);
          text-transform: uppercase;
          position: relative; z-index: 2;
        }

        .cp-mn-header-rule {
          width: 120px; height: 1px;
          background: linear-gradient(90deg, transparent, #c9922a, #e8b84b, transparent);
          margin: 18px auto 0; opacity: 0.55;
          position: relative; z-index: 2;
        }

        /* ── SECTIONS ───────────────────────────── */
        .cp-mn-section {
          display: flex;
          align-items: center; justify-content: center;
          min-height: 90vh;
          padding: 80px 9%;
          gap: 90px;
          position: relative; overflow: hidden;
        }

        /* even rows — main chalk green */
        .cp-mn-section.row         { background: #1c2e22; flex-direction: row; }
        /* odd rows  — darker chalk green */
        .cp-mn-section.row-reverse { background: #172619; flex-direction: row-reverse; }

        /* top separator */
        .cp-mn-section::before {
          content: '';
          position: absolute;
          top: 0; left: 6%; right: 6%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,146,42,0.14) 50%, transparent);
          pointer-events: none; z-index: 1;
        }

        /* section number watermark */
        .cp-mn-section-num {
          position: absolute;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18rem; font-weight: 400;
          color: rgba(201,146,42,0.05);
          line-height: 1; pointer-events: none; user-select: none;
          z-index: 0; letter-spacing: 5px;
        }
        .cp-mn-section.row         .cp-mn-section-num { right: 5%; bottom: -40px; }
        .cp-mn-section.row-reverse .cp-mn-section-num { left: 5%;  bottom: -40px; }

        /* ── TEXT ───────────────────────────────── */
        .cp-mn-text {
          flex: 1; max-width: 460px;
          position: relative; z-index: 2;
        }

        .cp-mn-text-pre {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 16px;
        }
        .cp-mn-text-pre-line {
          width: 28px; height: 1px;
          background: #c9922a; opacity: 0.5;
        }
        .cp-mn-text-pre-txt {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 5px;
          color: #e8b84b; text-transform: uppercase;
        }

        /* title — aged chalk white */
        .cp-mn-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 6vw, 6rem);
          font-weight: 400;
          color: #e8e4d8;
          line-height: 0.92; letter-spacing: 3px; margin: 0 0 14px;
          text-shadow: 0 1px 0 rgba(0,0,0,0.35);
        }

        .cp-mn-rule {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, rgba(201,146,42,0.45), rgba(232,228,216,0.08), transparent);
          margin-bottom: 22px;
        }

        .cp-mn-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem; font-weight: 500;
          letter-spacing: 5px;
          color: rgba(232,228,216,0.55);
          text-transform: uppercase; line-height: 2;
        }

        /* CTA */
        .cp-mn-section-cta {
          display: inline-flex; align-items: center; gap: 10px;
          margin-top: 28px; position: relative; overflow: hidden;
          padding: 11px 24px;
          border: 1px solid rgba(201,146,42,0.40);
          color: #e8b84b;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 4px; text-transform: uppercase;
          transition: color 0.4s;
        }
        .cp-mn-section-cta::before {
          content: ''; position: absolute; inset: 0;
          background: #c9922a;
          transform: scaleX(0); transform-origin: left; z-index: 0;
          transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
        }
        .cp-mn-section-cta:hover::before { transform: scaleX(1); }
        .cp-mn-section-cta:hover { color: #000; }
        .cp-mn-section-cta span { position: relative; z-index: 1; }

        /* ── IMAGE ──────────────────────────────── */
        .cp-mn-img-block {
          flex: 1.6;
          display: flex; justify-content: center;
          position: relative; z-index: 2;
        }

        .cp-mn-img-frame { position: relative; display: inline-block; }

        .cp-mn-img-frame::before {
          content: '';
          position: absolute; top: -8px; left: -8px;
          width: 24px; height: 24px;
          border-top: 1px solid rgba(201,146,42,0.55);
          border-left: 1px solid rgba(201,146,42,0.55);
          z-index: 5; pointer-events: none;
        }
        .cp-mn-img-frame::after {
          content: '';
          position: absolute; bottom: -8px; right: -8px;
          width: 24px; height: 24px;
          border-bottom: 1px solid rgba(50,197,244,0.30);
          border-right: 1px solid rgba(50,197,244,0.30);
          z-index: 5; pointer-events: none;
        }

        .cp-mn-img-tag {
          position: absolute; top: 10px; right: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 0.58rem; font-weight: 600;
          letter-spacing: 3px;
          color: #000; background: #c9922a;
          padding: 3px 8px; z-index: 6;
          text-transform: uppercase; pointer-events: none;
        }

        .cp-mn-img {
          max-width: 100%; max-height: 78vh;
          width: auto; height: auto;
          object-fit: contain; display: block;
          box-shadow:
            0 40px 100px rgba(0,0,0,0.65),
            0 0 30px rgba(201,146,42,0.06);
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .cp-mn-img-frame:hover .cp-mn-img { transform: scale(1.015); }

        .cp-mn-img-scan {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #c9922a, #e8b84b);
          transform: scaleX(0); transform-origin: left; z-index: 6;
          transition: transform 0.5s cubic-bezier(0.77,0,0.18,1);
          pointer-events: none;
        }
        .cp-mn-img-frame:hover .cp-mn-img-scan { transform: scaleX(1); }

        /* ── FIXED CTA ──────────────────────────── */
        .cp-mn-cta {
          position: fixed;
          bottom: 38px; right: 38px;
          z-index: 1000; overflow: hidden;
          display: flex; align-items: center;
          padding: 16px 32px;
          border: 1px solid #c9922a;
          background: #c9922a;
          color: #000; text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem; font-weight: 700;
          letter-spacing: 4px; text-transform: uppercase;
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.5s cubic-bezier(0.22,1,0.36,1),
                      transform 0.5s cubic-bezier(0.22,1,0.36,1);
          box-shadow: 0 8px 30px rgba(201,146,42,0.25);
        }
        .cp-mn-cta.show { opacity: 1; transform: translateY(0); }
        .cp-mn-cta::before {
          content: ''; position: absolute; inset: 0;
          background: #e8e4d8;
          transform: scaleX(0); transform-origin: left; z-index: 0;
          transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
        }
        .cp-mn-cta:hover::before { transform: scaleX(1); }
        .cp-mn-cta:hover { color: #000; }
        .cp-mn-cta span { position: relative; z-index: 1; }

        /* ── RESPONSIVE ─────────────────────────── */
        @media (max-width: 1100px) {
          .cp-mn-section {
            flex-direction: column !important;
            text-align: center; gap: 48px;
          }
          .cp-mn-text-pre  { justify-content: center; }
          .cp-mn-rule { width: 60%; margin: 0 auto 22px; }
          .cp-mn-img { max-height: 50vh; }
          .cp-mn-section-num { display: none; }
          .cp-mn-section-cta { margin: 24px auto 0; }
        }
        @media (max-width: 768px) {
          .cp-mn-cta { bottom: 16px; right: 16px; padding: 10px 16px; font-size: 0.6rem; }
        }
        @media (max-width: 480px) {
          .cp-mn-logo { font-size: 72px; }
          .cp-mn-cta  { bottom: 12px; right: 12px; padding: 9px 12px; }
        }
      `}),(0,Q.jsxs)(`div`,{className:`cp-mn-wrapper`,children:[(0,Q.jsx)(`a`,{href:`https://woolen-sodalite-e73.notion.site/16909085b6758040a618e11e9b9dabef`,target:`_blank`,rel:`noreferrer`,className:`cp-mn-cta ${e?`show`:``}`,children:(0,Q.jsx)(`span`,{children:`MUNAI — FOCUS GROUP SUBMISSION`})}),(0,Q.jsxs)(`header`,{className:`cp-mn-header`,children:[(0,Q.jsx)(`div`,{className:`cp-mn-header-glow`}),(0,Q.jsx)(`div`,{className:`cp-mn-kanji`,children:`文`}),(0,Q.jsxs)(`div`,{className:`cp-mn-header-pre`,children:[(0,Q.jsx)(`div`,{className:`cp-mn-header-pre-line`}),(0,Q.jsx)(`span`,{className:`cp-mn-header-pre-text`,children:`THE WRITERS' ROOM`}),(0,Q.jsx)(`div`,{className:`cp-mn-header-pre-line`})]}),(0,Q.jsx)($.h1,{className:`cp-mn-logo`,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.9,ease:[.16,1,.3,1]},children:`MUNAI`}),(0,Q.jsxs)(`p`,{className:`cp-mn-meta`,children:[`BY CINEMAPAYYAN INC PRODUCT  `,(0,Q.jsx)(`br`,{}),` • THE WRITERS' ROOM`]}),(0,Q.jsx)(`div`,{className:`cp-mn-header-rule`})]}),(0,Q.jsx)(`main`,{children:Bg.map((e,t)=>(0,Q.jsxs)(`section`,{className:`cp-mn-section ${t%2==0?`row`:`row-reverse`}`,children:[(0,Q.jsx)(`span`,{className:`cp-mn-section-num`,children:String(t+1).padStart(2,`0`)}),(0,Q.jsxs)($.div,{className:`cp-mn-text`,initial:{opacity:0,x:t%2==0?-30:30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.7,ease:[.16,1,.3,1]},children:[(0,Q.jsxs)(`div`,{className:`cp-mn-text-pre`,children:[(0,Q.jsx)(`div`,{className:`cp-mn-text-pre-line`}),(0,Q.jsxs)(`span`,{className:`cp-mn-text-pre-txt`,children:[String(t+1).padStart(2,`0`),` — CINEMAPAYYAN`]})]}),(0,Q.jsx)(`h2`,{className:`cp-mn-title`,children:e.title}),(0,Q.jsx)(`div`,{className:`cp-mn-rule`}),(0,Q.jsx)(`p`,{className:`cp-mn-desc`,children:e.desc}),(0,Q.jsx)(`a`,{href:`https://woolen-sodalite-e73.notion.site/16909085b6758040a618e11e9b9dabef`,target:`_blank`,rel:`noreferrer`,className:`cp-mn-section-cta`,children:(0,Q.jsx)(`span`,{children:`EXPLORE MUNAI`})})]}),(0,Q.jsx)($.div,{className:`cp-mn-img-block`,initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.7,delay:.1,ease:[.16,1,.3,1]},children:(0,Q.jsxs)(`div`,{className:`cp-mn-img-frame`,children:[(0,Q.jsxs)(`div`,{className:`cp-mn-img-tag`,children:[String(t+1).padStart(2,`0`),` / `,String(Bg.length).padStart(2,`0`)]}),(0,Q.jsx)(`img`,{src:e.img,alt:e.title,className:`cp-mn-img`}),(0,Q.jsx)(`div`,{className:`cp-mn-img-scan`})]})})]},t))})]})]})},Hg=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),Ug=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),Wg=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),Gg=e=>{let t=Wg(e);return t.charAt(0).toUpperCase()+t.slice(1)},Kg={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},qg=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},Jg=(0,C.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,C.createElement)(`svg`,{ref:c,...Kg,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Hg(`lucide`,i),...!a&&!qg(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,C.createElement)(e,t)),...Array.isArray(a)?a:[a]])),Yg=(e,t)=>{let n=(0,C.forwardRef)(({className:n,...r},i)=>(0,C.createElement)(Jg,{ref:i,iconNode:t,className:Hg(`lucide-${Ug(Gg(e))}`,`lucide-${e}`,n),...r}));return n.displayName=Gg(e),n},Xg=Yg(`arrow-up-right`,[[`path`,{d:`M7 7h10v10`,key:`1tivn9`}],[`path`,{d:`M7 17 17 7`,key:`1vkiza`}]]),Zg=Yg(`clapperboard`,[[`path`,{d:`m12.296 3.464 3.02 3.956`,key:`qash78`}],[`path`,{d:`M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z`,key:`1h7j8b`}],[`path`,{d:`M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`4lm6w1`}],[`path`,{d:`m6.18 5.276 3.1 3.899`,key:`zjj9t3`}]]),Qg=Yg(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),$g=Yg(`facebook`,[[`path`,{d:`M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z`,key:`1jg4f8`}]]),e_=Yg(`instagram`,[[`rect`,{width:`20`,height:`20`,x:`2`,y:`2`,rx:`5`,ry:`5`,key:`2e1cvw`}],[`path`,{d:`M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`,key:`9exkf1`}],[`line`,{x1:`17.5`,x2:`17.51`,y1:`6.5`,y2:`6.5`,key:`r4j83e`}]]),t_=Yg(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),n_=Yg(`mic-vocal`,[[`path`,{d:`m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12`,key:`80a601`}],[`path`,{d:`M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5`,key:`j0ngtp`}],[`circle`,{cx:`16`,cy:`7`,r:`5`,key:`d08jfb`}]]),r_=Yg(`play`,[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]),i_=Yg(`rocket`,[[`path`,{d:`M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5`,key:`qeys4`}],[`path`,{d:`M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09`,key:`u4xsad`}],[`path`,{d:`M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z`,key:`676m9`}],[`path`,{d:`M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05`,key:`92ym6u`}]]),a_=Yg(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),o_=Yg(`star`,[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]),s_=Yg(`trophy`,[[`path`,{d:`M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978`,key:`1n3hpd`}],[`path`,{d:`M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978`,key:`rfe1zi`}],[`path`,{d:`M18 9h1.5a1 1 0 0 0 0-5H18`,key:`7xy6bh`}],[`path`,{d:`M4 22h16`,key:`57wxv0`}],[`path`,{d:`M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z`,key:`1mhfuq`}],[`path`,{d:`M6 9H4.5a1 1 0 0 1 0-5H6`,key:`tex48p`}]]),c_=Yg(`twitter`,[[`path`,{d:`M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z`,key:`pff0z6`}]]),l_=Yg(`youtube`,[[`path`,{d:`M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17`,key:`1q2vi4`}],[`path`,{d:`m10 15 5-3-5-3z`,key:`1jp15x`}]]),u_=[{id:1,index:`01`,title:`Chiyaan Vikram`,subtitle:`Veera Dheera Sooran`,tag:`TRIBUTE`,link:`https://youtu.be/OpIYkWJ_rws?si=T0gC2JCt6jA4vter`,video:j.vjPreviews[13],host:`@abishek_raaja`,feature:`Vel Tech Lavaza 2K25`,body:`@the_real_chiyaan operates on an unprecedented level of craft, often drawing comparisons to global icons like Christian Bale. His dedication to character transformation is significantly underrated, and he deserves the highest pedestal for his consistent efforts in elevating Tamil cinema to international standards.`},{id:2,index:`02`,title:`Santhosh Narayanan`,subtitle:`Neeye Oli`,tag:`CONCERT`,link:`https://www.instagram.com/reel/C01jVyrCb9F/?utm_source=ig_web_copy_link`,video:j.vjPreviews[14],host:`@abishek_raaja`,feature:`Nehru Outdoor Stadium`,body:`A significant milestone in my hosting career was the opportunity to name and present this grand concert. It was a privilege to contribute to the creative vision of @musicsanthosh, brought to life through a seamless collaboration with @directedbykenroyson and their dedicated production team.`}];function d_({project:e,index:t}){let[n,r]=(0,C.useState)(!1),i=(0,C.useRef)(null);return(0,C.useEffect)(()=>{let e=i.current;e&&(n?(e.muted=!0,e.play().catch(()=>{})):e.pause())},[n]),(0,Q.jsxs)($.div,{className:`hst-card`,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{delay:t*.15,duration:.7,ease:[.16,1,.3,1]},onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,Q.jsxs)(`div`,{className:`hst-media`,children:[(0,Q.jsx)(`video`,{ref:i,src:e.video,className:`hst-video`,muted:!0,loop:!0,playsInline:!0}),(0,Q.jsx)(`div`,{className:`hst-media-gradient`}),(0,Q.jsx)(`div`,{className:`hst-c hst-c--tl`}),(0,Q.jsx)(`div`,{className:`hst-c hst-c--tr`}),(0,Q.jsx)(`div`,{className:`hst-c hst-c--bl`}),(0,Q.jsx)(`div`,{className:`hst-c hst-c--br`}),(0,Q.jsx)(`div`,{className:`hst-tag`,children:e.tag}),(0,Q.jsx)(`div`,{className:`hst-index`,children:e.index}),(0,Q.jsx)($.a,{href:e.link,target:`_blank`,rel:`noreferrer`,className:`hst-play`,animate:{opacity:n?1:0,scale:n?1:.75},transition:{duration:.25},onClick:e=>e.stopPropagation(),children:(0,Q.jsx)(Qg,{size:18})}),(0,Q.jsx)($.div,{className:`hst-scan`,animate:{scaleX:n?1:0},transition:{duration:.45,ease:[.16,1,.3,1]}})]}),(0,Q.jsxs)(`div`,{className:`hst-body`,children:[(0,Q.jsxs)(`div`,{className:`hst-titles`,children:[(0,Q.jsx)(`span`,{className:`hst-subtitle`,children:e.subtitle}),(0,Q.jsx)(`h4`,{className:`hst-title`,children:e.title}),(0,Q.jsx)($.div,{className:`hst-title-rule`,animate:{scaleX:n?1:.3,opacity:n?1:.35},transition:{duration:.4}})]}),(0,Q.jsx)(`p`,{className:`hst-desc`,children:e.body}),(0,Q.jsxs)(`div`,{className:`hst-credits`,children:[(0,Q.jsxs)(`div`,{className:`hst-credit-item`,children:[(0,Q.jsx)(`span`,{className:`hst-credit-label`,children:`HOSTED BY`}),(0,Q.jsx)(`span`,{className:`hst-credit-value`,children:e.host})]}),(0,Q.jsx)(`div`,{className:`hst-credit-div`}),(0,Q.jsxs)(`div`,{className:`hst-credit-item`,children:[(0,Q.jsx)(`span`,{className:`hst-credit-label`,children:`VENUE`}),(0,Q.jsx)(`span`,{className:`hst-credit-value`,children:e.feature})]})]}),(0,Q.jsxs)(`a`,{href:e.link,target:`_blank`,rel:`noreferrer`,className:`hst-cta`,children:[(0,Q.jsx)(`div`,{className:`hst-cta-bg`}),(0,Q.jsx)(`span`,{children:`WATCH NOW`}),(0,Q.jsx)(Qg,{size:12,style:{position:`relative`,zIndex:1}})]})]})]})}var f_=()=>{let e=(0,C.useRef)(null),t=eg(e,{once:!0,amount:.5}),[n,r]=(0,C.useState)(!1);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;700;900&display=swap');

        /* ══════════════════════════════════════════
           SECTION — DEEP FOREST GREEN
           Stage lights · Green room · Live energy
        ══════════════════════════════════════════ */
        .hst-section {
          background: #060f09;
          background: radial-gradient(ellipse at top center, #0d2014 0%, #060f09 55%, #040b06 100%);
          padding: 90px 0 110px;
          overflow: hidden;
          position: relative;
        }
        .hst-section::before {
          content: '';
          position: absolute; top: 0; left: 8%; right: 8%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(50,197,244,0.1) 50%, transparent);
        }
        .hst-section::after {
          content: 'AR';
          position: absolute; right: 2%; bottom: -60px;
          font-size: 28rem; font-family: serif; line-height: 1;
          color: rgba(50,197,244,0.04);
          pointer-events: none; user-select: none; z-index: 0;
        }

        .hst-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 clamp(20px,6%,60px);
          position: relative; z-index: 2;
        }

        /* ══════════════════════════════════════════
           HEADER
        ══════════════════════════════════════════ */
        .hst-header {
          display: flex; align-items: center; gap: 20px;
          padding: 0 clamp(20px,6%,60px);
          margin-bottom: 52px;
          max-width: 1200px; margin-left: auto; margin-right: auto;
        }
        .hst-header-rule {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(253,224,71,0.35));
          transform-origin: left;
        }
        .hst-header-rule--r {
          background: linear-gradient(90deg, rgba(50,197,244,0.3), transparent);
          transform-origin: right;
        }
        .hst-header-content {
          display: flex; align-items: center; gap: 14px; flex-shrink: 0;
        }
        .hst-header-icon {
          width: 36px; height: 36px;
          border: 1px solid rgba(253,224,71,0.3);
          display: flex; align-items: center; justify-content: center;
          color: #fde047; flex-shrink: 0;
        }

        /* Inter — overline */
        .hst-overline {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.48rem, 1.5vw, 0.6rem);
          font-weight: 400;
          letter-spacing: 6px;
          color: rgba(255,255,255,0.55);
          text-transform: uppercase;
          display: block; margin-bottom: 5px;
        }

        /* Bebas Neue — section heading */
        .hst-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.8rem, 4.5vw, 3.2rem);
          font-weight: 400; letter-spacing: 3px;
          color: #fff; line-height: 1; margin: 0;
        }
        .hst-heading-yellow { color: #fde047; }

        /* Bebas Neue — count number */
        .hst-count {
          display: flex; flex-direction: column;
          align-items: center; margin-left: 14px; flex-shrink: 0;
        }
        .hst-count-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 400; color: rgba(253,224,71,0.28);
          line-height: 1; letter-spacing: 2px;
        }
        /* Inter — count label */
        .hst-count-lbl {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem, 1vw, 0.54rem);
          font-weight: 400;
          letter-spacing: 4px;
          color: rgba(255,255,255,0.45); text-transform: uppercase;
        }

        /* ══════════════════════════════════════════
           HERO BANNER
        ══════════════════════════════════════════ */
        .hst-hero {
          position: relative; overflow: hidden;
          width: 100%; margin-bottom: 48px;
          border: 1px solid rgba(50,197,244,0.1);
          cursor: pointer;
          transition: border-color 0.4s;
        }
        .hst-hero:hover { border-color: rgba(253,224,71,0.2); }
        .hst-hero-img {
          width: 100%; aspect-ratio: 21/8;
          object-fit: cover; display: block;
          transition: transform 0.7s ease;
        }
        .hst-hero:hover .hst-hero-img { transform: scale(1.04); }
        .hst-hero-vig {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 30%, rgba(6,15,9,0.82) 100%);
          pointer-events: none; z-index: 2;
        }
        .hst-hero-c {
          position: absolute; width: 16px; height: 16px; z-index: 4; pointer-events: none;
        }
        .hst-hero-tl { top:10px; left:10px; border-top:1px solid rgba(253,224,71,0.5); border-left:1px solid rgba(253,224,71,0.5); }
        .hst-hero-tr { top:10px; right:10px; border-top:1px solid rgba(253,224,71,0.5); border-right:1px solid rgba(253,224,71,0.5); }
        .hst-hero-bl { bottom:44px; left:10px; border-bottom:1px solid rgba(50,197,244,0.4); border-left:1px solid rgba(50,197,244,0.4); }
        .hst-hero-br { bottom:44px; right:10px; border-bottom:1px solid rgba(50,197,244,0.4); border-right:1px solid rgba(50,197,244,0.4); }

        .hst-hero-bar {
          position: absolute; bottom: 0; left: 0; right: 0; z-index: 5;
          display: flex; align-items: center; justify-content: space-between;
          padding: 12px 18px;
          background: rgba(4,11,6,0.92);
          border-top: 1px solid rgba(50,197,244,0.1);
          gap: 14px;
        }
        .hst-hero-bar-left { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
        .hst-hero-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #ff3333; flex-shrink: 0;
          box-shadow: 0 0 8px rgba(255,51,51,0.8);
        }
        /* Inter — FEATURED EVENT label */
        .hst-hero-live {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem, 1.2vw, 0.56rem);
          font-weight: 400; letter-spacing: 4px;
          color: rgba(255,255,255,0.75); text-transform: uppercase;
        }
        /* Bebas Neue — hero bar centre title */
        .hst-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1rem, 2.8vw, 1.8rem);
          font-weight: 400; letter-spacing: 4px;
          color: #fff; flex: 1; text-align: center;
        }
        /* Inter — right tag badge */
        .hst-hero-tag {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem, 1vw, 0.54rem);
          font-weight: 700; letter-spacing: 3px;
          color: #000; background: #fde047;
          padding: 5px 12px; text-transform: uppercase; flex-shrink: 0;
        }
        .hst-hero-scan {
          position: absolute; bottom: 42px; left: 0; right: 0; z-index: 6;
          height: 2px;
          background: linear-gradient(90deg, #fde047, #32c5f4);
          transform-origin: left;
        }

        /* ══════════════════════════════════════════
           CARD GRID
        ══════════════════════════════════════════ */
        .hst-grid {
          display: flex; flex-direction: column; gap: 32px;
        }

        /* ── CARD — dark green bg ── */
        .hst-card {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          border: 1px solid rgba(50,197,244,0.08);
          background: #0a1a0d;
          overflow: hidden;
          transition: border-color 0.35s, box-shadow 0.4s;
          position: relative;
        }
        .hst-card:hover {
          border-color: rgba(253,224,71,0.2);
          box-shadow: 0 16px 50px rgba(0,0,0,0.65);
        }

        /* ── MEDIA SIDE ── */
        .hst-media {
          position: relative;
          width: 100%; aspect-ratio: 16/9;
          overflow: hidden; background: #060f09;
        }
        .hst-video {
          position: absolute; inset: 0;
          width: 100%; height: 100%; object-fit: cover; display: block;
        }
        .hst-media-gradient {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%);
          z-index: 2; pointer-events: none;
        }
        .hst-c { position: absolute; width: 14px; height: 14px; pointer-events: none; z-index: 5; }
        .hst-c--tl { top:8px; left:8px; border-top:1px solid rgba(253,224,71,0.5); border-left:1px solid rgba(253,224,71,0.5); }
        .hst-c--tr { top:8px; right:8px; border-top:1px solid rgba(253,224,71,0.5); border-right:1px solid rgba(253,224,71,0.5); }
        .hst-c--bl { bottom:8px; left:8px; border-bottom:1px solid rgba(50,197,244,0.4); border-left:1px solid rgba(50,197,244,0.4); }
        .hst-c--br { bottom:8px; right:8px; border-bottom:1px solid rgba(50,197,244,0.4); border-right:1px solid rgba(50,197,244,0.4); }

        /* Inter — card tag badge */
        .hst-tag {
          position: absolute; top: 10px; left: 10px; z-index: 6;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.42rem, 1vw, 0.52rem);
          font-weight: 700; letter-spacing: 3px;
          color: #000; background: #fde047;
          padding: 3px 10px; text-transform: uppercase;
        }

        /* Bebas Neue — ghost index number */
        .hst-index {
          position: absolute; bottom: 10px; left: 14px; z-index: 4;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          font-weight: 400; letter-spacing: 4px;
          color: rgba(50,197,244,0.1); line-height: 1;
          user-select: none; pointer-events: none;
        }

        .hst-play {
          position: absolute; bottom: 12px; right: 12px; z-index: 7;
          width: 38px; height: 38px; border-radius: 50%;
          background: #fde047;
          display: flex; align-items: center; justify-content: center;
          text-decoration: none; color: #000;
          transition: transform 0.2s;
        }
        .hst-play:hover { transform: scale(1.1); }

        .hst-scan {
          position: absolute; bottom: 0; left: 0; right: 0; z-index: 8;
          height: 2px;
          background: linear-gradient(90deg, #32c5f4, #fde047);
          transform-origin: left;
        }

        /* ── BODY SIDE ── */
        .hst-body {
          padding: clamp(20px,3vw,32px);
          display: flex; flex-direction: column; gap: 16px;
          border-left: 1px solid rgba(50,197,244,0.07);
        }

        .hst-titles { display: flex; flex-direction: column; gap: 6px; }

        /* Inter — subtitle label */
        .hst-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.48rem, 1.2vw, 0.6rem);
          font-weight: 400; letter-spacing: 6px;
          color: rgba(253,224,71,0.7);
          text-transform: uppercase; display: block;
        }

        /* Bebas Neue — card main title */
        .hst-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.4rem, 3vw, 2.2rem);
          font-weight: 400; letter-spacing: 3px;
          color: #fff; margin: 0; line-height: 1.05;
        }
        .hst-title-rule {
          height: 1px; width: 100%;
          background: linear-gradient(90deg, rgba(253,224,71,0.4), rgba(50,197,244,0.25), transparent);
          transform-origin: left;
        }

        /* Inter — description body text */
        .hst-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.82rem, 1.2vw, 0.95rem);
          font-weight: 300;
          color: rgba(255,255,255,0.58);
          line-height: 1.85; margin: 0;
          flex: 1;
        }

        /* credits strip — green tinted */
        .hst-credits {
          display: flex; align-items: stretch;
          border: 1px solid rgba(50,197,244,0.1);
          background: rgba(50,197,244,0.03);
          padding: 14px 18px; gap: 0;
        }
        .hst-credit-item {
          display: flex; flex-direction: column; gap: 4px; flex: 1;
        }
        .hst-credit-div {
          width: 1px; background: rgba(50,197,244,0.1); margin: 0 16px;
        }
        /* Inter — credit label */
        .hst-credit-label {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.42rem, 1vw, 0.52rem);
          font-weight: 400; letter-spacing: 4px;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
        }
        /* Bebas Neue — credit value */
        .hst-credit-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          font-weight: 400; letter-spacing: 2px;
          color: #fff; line-height: 1.2;
        }

        /* Inter — CTA button */
        .hst-cta {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; gap: 10px;
          padding: 12px 24px;
          border: 1px solid #fde047;
          color: #fde047; text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem, 1.2vw, 0.56rem);
          font-weight: 700; letter-spacing: 4px; text-transform: uppercase;
          transition: color 0.4s;
          align-self: flex-start;
        }
        .hst-cta-bg {
          position: absolute; inset: 0;
          background: #fde047;
          transform-origin: left; transform: scaleX(0); z-index: 0;
          transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
        }
        .hst-cta:hover .hst-cta-bg { transform: scaleX(1); }
        .hst-cta:hover { color: #000; }
        .hst-cta span { position: relative; z-index: 1; }

        /* ══════════════════════════════════════════
           RESPONSIVE
        ══════════════════════════════════════════ */
        @media (max-width: 900px) {
          .hst-card { grid-template-columns: 1fr; }
          .hst-media { aspect-ratio: 16/9; }
          .hst-body  { border-left: none; border-top: 1px solid rgba(50,197,244,0.07); }
        }
        @media (max-width: 700px) {
          .hst-header {
            flex-direction: column; align-items: stretch;
            gap: 12px; padding: 0 clamp(16px,5%,40px);
            margin-bottom: 40px;
          }
          .hst-header-rule { display: none; }
          .hst-header-content {
            flex-direction: row; align-items: center;
            justify-content: space-between; gap: 0; width: 100%;
          }
          .hst-count { margin-left: auto; align-items: flex-end; }
          .hst-count-lbl { text-align: right; }
        }
        @media (max-width: 640px) {
          .hst-section   { padding: 70px 0 80px; }
          .hst-inner     { padding: 0 16px; }
          .hst-hero-img  { aspect-ratio: 16/7; }
          .hst-hero-tag  { display: none; }
          .hst-hero-bar  { padding: 10px 12px; }
          .hst-credits   { flex-wrap: wrap; gap: 12px; padding: 12px 14px; }
          .hst-credit-div { display: none; }
          .hst-credit-item { min-width: 120px; }
          .hst-body      { padding: 16px; gap: 12px; }
        }
        @media (max-width: 400px) {
          .hst-grid { gap: 20px; }
        }
      `}),(0,Q.jsxs)(`section`,{className:`hst-section`,children:[(0,Q.jsxs)(`div`,{className:`hst-header`,ref:e,children:[(0,Q.jsx)($.div,{className:`hst-header-rule`,initial:{scaleX:0},animate:{scaleX:t?1:0},transition:{duration:.8,ease:[.76,0,.24,1]}}),(0,Q.jsxs)($.div,{className:`hst-header-content`,initial:{opacity:0,y:20},animate:{opacity:t?1:0,y:t?0:20},transition:{delay:.3,duration:.6},children:[(0,Q.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:14},children:[(0,Q.jsx)(`div`,{className:`hst-header-icon`,children:(0,Q.jsx)(n_,{size:18})}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`hst-overline`,children:`LIVE EVENTS · CONCERTS`}),(0,Q.jsxs)(`h2`,{className:`hst-heading`,children:[`THE `,(0,Q.jsx)(`span`,{className:`hst-heading-yellow`,children:`HOST`})]})]})]}),(0,Q.jsxs)(`div`,{className:`hst-count`,children:[(0,Q.jsx)(`span`,{className:`hst-count-num`,children:`04`}),(0,Q.jsx)(`span`,{className:`hst-count-lbl`,children:`EVENTS`})]})]}),(0,Q.jsx)($.div,{className:`hst-header-rule hst-header-rule--r`,initial:{scaleX:0},animate:{scaleX:t?1:0},transition:{delay:.15,duration:.8,ease:[.76,0,.24,1]}})]}),(0,Q.jsxs)(`div`,{className:`hst-inner`,children:[(0,Q.jsxs)($.div,{className:`hst-hero`,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.9,ease:[.16,1,.3,1]},onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,Q.jsx)($.img,{src:A.NeeyaoliHost,alt:`Neeye Oli 2024`,className:`hst-hero-img`,animate:{scale:n?1.04:1},transition:{duration:.7,ease:[.16,1,.3,1]}}),(0,Q.jsx)(`div`,{className:`hst-hero-vig`}),(0,Q.jsx)(`div`,{className:`hst-hero-c hst-hero-tl`}),(0,Q.jsx)(`div`,{className:`hst-hero-c hst-hero-tr`}),(0,Q.jsx)(`div`,{className:`hst-hero-c hst-hero-bl`}),(0,Q.jsx)(`div`,{className:`hst-hero-c hst-hero-br`}),(0,Q.jsxs)(`div`,{className:`hst-hero-bar`,children:[(0,Q.jsxs)(`div`,{className:`hst-hero-bar-left`,children:[(0,Q.jsx)($.div,{className:`hst-hero-dot`,animate:{opacity:[1,.15,1]},transition:{duration:1.5,repeat:1/0}}),(0,Q.jsx)(`span`,{className:`hst-hero-live`,children:`FEATURED EVENT`})]}),(0,Q.jsx)(`span`,{className:`hst-hero-title`,children:`NEEYE OLI 2024`}),(0,Q.jsx)(`span`,{className:`hst-hero-tag`,children:`LIVE HOST`})]}),(0,Q.jsx)($.div,{className:`hst-hero-scan`,animate:{scaleX:n?1:0},transition:{duration:.5,ease:[.16,1,.3,1]}})]}),(0,Q.jsx)(`div`,{className:`hst-grid`,children:u_.map((e,t)=>(0,Q.jsx)(d_,{project:e,index:t},e.id))})]})]})]})},p_=[`@abhinavsnayak`,`@thenieswar_dop`,`@naan__pradeep`,`@navaa_rajkumar`,`@valentino_suren`,`@kvdurai`,`@tuneyjohn`,`@donechannel1`,`@decoffl`],m_=()=>{let e=(0,C.useRef)(null),t=(0,C.useRef)(null),n=eg(e,{once:!0,amount:.5}),r=eg(t,{once:!0,amount:.15}),[i,a]=(0,C.useState)(!1);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;700;900&display=swap');

        /* ══════════════════════════════════════════
           SECTION — DEEP STEEL BLUE-GREY
           Film lab · Editing suite · Cinematic craft
        ══════════════════════════════════════════ */
        .dir-section {
          background: #080c12;
          background: radial-gradient(ellipse at top center, #111e2e 0%, #080c12 55%, #050810 100%);
          padding: 90px 0 110px;
          overflow: hidden;
          position: relative;
        }
        .dir-section::before {
          content: '';
          position: absolute; top: 0; left: 8%; right: 8%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(50,197,244,0.12) 50%, transparent);
        }
        .dir-section::after {
          content: 'AR';
          position: absolute; right: 2%; bottom: -60px;
          font-size: 28rem; font-family: serif; line-height: 1;
          color: rgba(50,197,244,0.04);
          pointer-events: none; user-select: none; z-index: 0;
        }

        .dir-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 clamp(20px,6%,60px);
          position: relative; z-index: 2;
        }

        /* ══════════════════════════════════════════
           HEADER
        ══════════════════════════════════════════ */
        .dir-header {
          display: flex; align-items: center; gap: 20px;
          padding: 0 clamp(20px,6%,60px);
          margin-bottom: 52px;
          max-width: 1200px; margin-left: auto; margin-right: auto;
        }
        .dir-header-rule {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(253,224,71,0.35));
          transform-origin: left;
        }
        .dir-header-rule--r {
          background: linear-gradient(90deg, rgba(50,197,244,0.3), transparent);
          transform-origin: right;
        }
        .dir-header-content {
          display: flex; align-items: center; gap: 14px; flex-shrink: 0;
        }
        .dir-header-icon {
          width: 36px; height: 36px;
          border: 1px solid rgba(253,224,71,0.3);
          display: flex; align-items: center; justify-content: center;
          color: #fde047; flex-shrink: 0;
        }

        /* Inter — overline */
        .dir-overline {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.48rem, 1.5vw, 0.6rem);
          font-weight: 400; letter-spacing: 6px;
          color: rgba(255,255,255,0.55);
          text-transform: uppercase;
          display: block; margin-bottom: 5px;
        }

        /* Bebas Neue — section heading */
        .dir-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.8rem, 4.5vw, 3.2rem);
          font-weight: 400; letter-spacing: 3px;
          color: #fff; line-height: 1; margin: 0;
        }
        .dir-heading-yellow { color: #fde047; }

        /* ══════════════════════════════════════════
           FEATURE CARD — steel blue tint
        ══════════════════════════════════════════ */
        .dir-card {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 60px;
          align-items: center;
          border: 1px solid rgba(50,197,244,0.1);
          background: #0d1520;
          padding: clamp(24px,4vw,48px);
          position: relative;
          overflow: hidden;
        }
        .dir-card::before {
          content: 'CP';
          position: absolute; top: 0; left: 0;
          width: 20px; height: 20px;
          border-top: 1px solid rgba(253,224,71,0.4);
          border-left: 1px solid rgba(253,224,71,0.4);
          pointer-events: none; z-index: 5;
        }
        .dir-card::after {
          content: '';
          position: absolute; bottom: 0; right: 0;
          width: 20px; height: 20px;
          border-bottom: 1px solid rgba(50,197,244,0.3);
          border-right: 1px solid rgba(50,197,244,0.3);
          pointer-events: none; z-index: 5;
        }

        /* ── IMAGE SIDE ── */
        .dir-img-side {
          position: relative;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
        }
        .dir-corner { position: absolute; width: 20px; height: 20px; pointer-events: none; z-index: 5; }
        .dir-corner--tl { top:-8px; left:-8px; border-top:1px solid rgba(253,224,71,0.5); border-left:1px solid rgba(253,224,71,0.5); }
        .dir-corner--tr { top:-8px; right:-8px; border-top:1px solid rgba(253,224,71,0.5); border-right:1px solid rgba(253,224,71,0.5); }
        .dir-corner--bl { bottom:-8px; left:-8px; border-bottom:1px solid rgba(50,197,244,0.4); border-left:1px solid rgba(50,197,244,0.4); }
        .dir-corner--br { bottom:-8px; right:-8px; border-bottom:1px solid rgba(50,197,244,0.4); border-right:1px solid rgba(50,197,244,0.4); }

        .dir-img {
          width: 100%; height: auto; display: block;
          max-height: 520px; object-fit: cover;
          filter: drop-shadow(0 20px 50px rgba(0,0,0,0.85));
          transition: transform 0.8s ease;
        }
        .dir-img-vignette {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(8,12,18,0.6) 100%);
          pointer-events: none; z-index: 2;
        }

        /* film strip */
        .dir-filmstrip {
          position: absolute; top: 0; left: 0; bottom: 0;
          width: 18px; z-index: 4;
          background: rgba(5,8,16,0.85);
          display: flex; flex-direction: column;
          align-items: center; justify-content: space-around;
          padding: 8px 0;
          border-right: 1px solid rgba(50,197,244,0.08);
        }
        .dir-filmstrip-hole {
          width: 8px; height: 8px; border-radius: 1px;
          background: rgba(50,197,244,0.2); flex-shrink: 0;
        }

        /* Inter — format badge */
        .dir-format-badge {
          position: absolute; bottom: 10px; left: 26px; z-index: 6;
          display: flex; align-items: center; gap: 6px;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem, 1vw, 0.54rem);
          font-weight: 400; letter-spacing: 3px;
          color: rgba(255,255,255,0.7);
          background: rgba(5,8,16,0.88); backdrop-filter: blur(8px);
          border: 1px solid rgba(50,197,244,0.15);
          padding: 5px 12px; text-transform: uppercase;
        }
        .dir-format-sep { color: #fde047; }

        /* scan line */
        .dir-img-scan {
          position: absolute; bottom: 0; left: 0; right: 0; z-index: 7;
          height: 2px;
          background: linear-gradient(90deg, #fde047, #32c5f4);
          transform-origin: left;
        }

        /* ── CONTENT SIDE ── */
        .dir-content { display: flex; flex-direction: column; gap: 20px; }

        /* Inter — pre-label */
        .dir-pre { display: flex; align-items: center; gap: 12px; }
        .dir-pre-line { width: 28px; height: 1px; background: #fde047; opacity: 0.5; transform-origin: left; }
        .dir-pre-text {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.48rem, 1.2vw, 0.6rem);
          font-weight: 400; letter-spacing: 6px;
          color: rgba(253,224,71,0.7); text-transform: uppercase;
        }

        /* Bebas Neue — animated title chars */
        .dir-title-block {
          display: flex; align-items: baseline;
          flex-wrap: nowrap; line-height: 0.88; gap: 0;
          white-space: nowrap; overflow: visible;
        }
        .dir-title-char {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 7rem);
          font-weight: 400; letter-spacing: 4px;
          color: #fff; line-height: 0.9;
          display: inline-block;
        }
        .dir-title-char--yellow { color: #fde047; }
        .dir-title-space { display: inline-block; width: 0.25em; }

        /* Inter — genre tag */
        .dir-genre {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.48rem, 1.2vw, 0.6rem);
          font-weight: 400; letter-spacing: 4px;
          color: rgba(50,197,244,0.8);
          text-transform: uppercase; margin: 0;
        }

        .dir-rule {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, rgba(253,224,71,0.3), rgba(50,197,244,0.2), transparent);
          transform-origin: left;
        }

        /* Inter — description */
        .dir-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.82rem, 1.2vw, 0.95rem);
          font-weight: 300;
          color: rgba(255,255,255,0.58);
          line-height: 1.85; margin: 0;
        }
        .dir-mention { color: #32c5f4; font-weight: 700; text-shadow: 0 0 12px rgba(50,197,244,0.2); }

        /* crew — steel tinted */
        .dir-crew { display: flex; flex-direction: column; gap: 10px; }
        .dir-crew-label {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem, 1vw, 0.54rem);
          font-weight: 400; letter-spacing: 5px;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase; display: block;
        }
        .dir-crew-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .dir-crew-tag {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.42rem, 1vw, 0.52rem);
          font-weight: 300; letter-spacing: 2px;
          color: rgba(255,255,255,0.6);
          background: rgba(50,197,244,0.04);
          border: 1px solid rgba(50,197,244,0.12);
          padding: 5px 10px; text-transform: lowercase;
          transition: border-color 0.3s, color 0.3s; cursor: default;
        }
        .dir-crew-tag:hover { border-color: rgba(253,224,71,0.35); color: rgba(253,224,71,0.85); }

        /* Inter — CTA button */
        .dir-cta {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 28px;
          border: 1px solid #fde047;
          color: #fde047; text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem, 1.2vw, 0.56rem);
          font-weight: 700; letter-spacing: 4px; text-transform: uppercase;
          transition: color 0.4s;
        }
        .dir-cta-bg {
          position: absolute; inset: 0; background: #fde047;
          transform-origin: left; transform: scaleX(0); z-index: 0;
          transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
        }
        .dir-cta:hover .dir-cta-bg { transform: scaleX(1); }
        .dir-cta:hover { color: #000; }
        .dir-cta-label, .dir-cta-icon { position: relative; z-index: 1; }

        /* ══════════════════════════════════════════
           RESPONSIVE
        ══════════════════════════════════════════ */
        @media (max-width: 960px) {
          .dir-card { grid-template-columns: 1fr; gap: 48px; text-align: center; }
          .dir-pre  { justify-content: center; }
          .dir-title-block { justify-content: center; }
          .dir-crew-tags { justify-content: center; }
          .dir-cta  { margin: 0 auto; }
          .dir-img  { max-width: 380px; margin: 0 auto; }
        }
        @media (max-width: 700px) {
          .dir-header {
            flex-direction: column; align-items: stretch;
            gap: 12px; padding: 0 clamp(16px,5%,40px);
            margin-bottom: 40px;
          }
          .dir-header-rule { display: none; }
          .dir-header-content {
            flex-direction: row; align-items: center;
            justify-content: flex-start; gap: 14px; width: 100%;
          }
        }
        @media (max-width: 640px) {
          .dir-section  { padding: 70px 0 80px; }
          .dir-inner    { padding: 0 16px; }
          .dir-card     { padding: 20px 16px 32px; gap: 32px; }
          .dir-filmstrip { display: none; }
          .dir-title-char { font-size: clamp(2.2rem, 11vw, 3.2rem); }
          .dir-crew-tag   { font-size: 0.5rem; padding: 4px 8px; }
          .dir-format-badge { font-size: 0.5rem; left: 10px; }
        }
        @media (max-width: 400px) {
          .dir-title-char { font-size: 2rem; }
          .dir-crew-tag   { font-size: 0.46rem; }
        }
      `}),(0,Q.jsxs)(`section`,{className:`dir-section`,children:[(0,Q.jsxs)(`div`,{className:`dir-header`,ref:e,children:[(0,Q.jsx)($.div,{className:`dir-header-rule`,initial:{scaleX:0},animate:{scaleX:n?1:0},transition:{duration:.8,ease:[.76,0,.24,1]}}),(0,Q.jsxs)($.div,{className:`dir-header-content`,initial:{opacity:0,y:20},animate:{opacity:n?1:0,y:n?0:20},transition:{delay:.3,duration:.6},children:[(0,Q.jsx)(`div`,{className:`dir-header-icon`,children:(0,Q.jsx)(Zg,{size:18})}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`dir-overline`,children:`DIRECTORIAL DEBUT`}),(0,Q.jsxs)(`h2`,{className:`dir-heading`,children:[`THE `,(0,Q.jsx)(`span`,{className:`dir-heading-yellow`,children:`DIRECTOR`})]})]})]}),(0,Q.jsx)($.div,{className:`dir-header-rule dir-header-rule--r`,initial:{scaleX:0},animate:{scaleX:n?1:0},transition:{delay:.15,duration:.8,ease:[.76,0,.24,1]}})]}),(0,Q.jsx)(`div`,{className:`dir-inner`,children:(0,Q.jsxs)($.div,{className:`dir-card`,ref:t,initial:{opacity:0,y:50},animate:{opacity:r?1:0,y:r?0:50},transition:{duration:.9,ease:[.16,1,.3,1]},children:[(0,Q.jsxs)(`div`,{className:`dir-img-side`,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[(0,Q.jsx)($.img,{src:A.JaamJaam||A.openpanna,alt:`Jaam Jaam`,className:`dir-img`,animate:{scale:i?1.05:1},transition:{duration:.8,ease:[.16,1,.3,1]}}),(0,Q.jsx)(`div`,{className:`dir-img-vignette`}),[`tl`,`tr`,`bl`,`br`].map(e=>(0,Q.jsx)(`div`,{className:`dir-corner dir-corner--${e}`},e)),(0,Q.jsx)(`div`,{className:`dir-filmstrip`,children:Array.from({length:12}).map((e,t)=>(0,Q.jsx)(`div`,{className:`dir-filmstrip-hole`},t))}),(0,Q.jsxs)(`div`,{className:`dir-format-badge`,children:[(0,Q.jsx)(`span`,{children:`ROM`}),(0,Q.jsx)(`span`,{className:`dir-format-sep`,children:`·`}),(0,Q.jsx)(`span`,{children:`காமம்`})]}),(0,Q.jsx)($.div,{className:`dir-img-scan`,animate:{scaleX:i?1:0},transition:{duration:.5,ease:[.16,1,.3,1]}})]}),(0,Q.jsxs)(`div`,{className:`dir-content`,children:[(0,Q.jsxs)(`div`,{className:`dir-pre`,children:[(0,Q.jsx)($.div,{className:`dir-pre-line`,initial:{scaleX:0},animate:{scaleX:r?1:0},transition:{delay:.5,duration:.6}}),(0,Q.jsx)(`span`,{className:`dir-pre-text`,children:`DIRECTORIAL DEBUT`})]}),(0,Q.jsxs)(`div`,{className:`dir-title-block`,children:[`JAAM`.split(``).map((e,t)=>(0,Q.jsx)($.span,{className:`dir-title-char`,initial:{opacity:0,y:30},animate:{opacity:r?1:0,y:r?0:30},transition:{delay:.6+t*.06,duration:.5,ease:[.16,1,.3,1]},children:e},`a${t}`)),(0,Q.jsx)($.span,{className:`dir-title-space`,initial:{opacity:0},animate:{opacity:r?1:0},transition:{delay:.85},children:` `}),`JAAM`.split(``).map((e,t)=>(0,Q.jsx)($.span,{className:`dir-title-char dir-title-char--yellow`,initial:{opacity:0,y:30},animate:{opacity:r?1:0,y:r?0:30},transition:{delay:.9+t*.06,duration:.5,ease:[.16,1,.3,1]},children:e},`b${t}`))]}),(0,Q.jsx)($.p,{className:`dir-genre`,initial:{opacity:0},animate:{opacity:r?1:0},transition:{delay:1.15,duration:.5},children:`A rom · காமம் Flick`}),(0,Q.jsx)($.div,{className:`dir-rule`,initial:{scaleX:0},animate:{scaleX:r?1:0},transition:{delay:1.2,duration:.7}}),(0,Q.jsxs)($.p,{className:`dir-desc`,initial:{opacity:0,y:10},animate:{opacity:r?1:0,y:r?0:10},transition:{delay:1.25,duration:.6},children:[`My directorial debut with the esteemed`,` `,(0,Q.jsx)(`span`,{className:`dir-mention`,children:`@axess_filmfactory`}),`. Working alongside a stellar team to bring this vision to life. Grateful for the support of`,` `,(0,Q.jsx)(`span`,{className:`dir-mention`,children:`@dillibabugovindaraj`}),` and the entire crew.`]}),(0,Q.jsxs)($.div,{className:`dir-crew`,initial:{opacity:0},animate:{opacity:r?1:0},transition:{delay:1.35,duration:.6},children:[(0,Q.jsx)(`span`,{className:`dir-crew-label`,children:`CREW`}),(0,Q.jsx)(`div`,{className:`dir-crew-tags`,children:p_.map((e,t)=>(0,Q.jsx)($.span,{className:`dir-crew-tag`,initial:{opacity:0,scale:.85},animate:{opacity:r?1:0,scale:r?1:.85},transition:{delay:1.4+t*.04,duration:.35},children:e},e))})]}),(0,Q.jsx)($.div,{initial:{opacity:0,y:12},animate:{opacity:r?1:0,y:r?0:12},transition:{delay:1.6,duration:.5},children:(0,Q.jsxs)(`a`,{href:`https://www.instagram.com/p/C3XNjxgIdgo/?utm_source=ig_web_copy_link`,target:`_blank`,rel:`noopener noreferrer`,className:`dir-cta`,children:[(0,Q.jsx)(`div`,{className:`dir-cta-bg`}),(0,Q.jsx)(`span`,{className:`dir-cta-label`,children:`VIEW PROJECT`}),(0,Q.jsx)(e_,{size:15,className:`dir-cta-icon`})]})})]})]})})]})]})},h_=()=>{let e=(0,C.useRef)(null),t=eg(e,{once:!0,amount:.5});return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;700;900&display=swap');

        .cpcp-section {
          background: #0e0814;
          background: radial-gradient(ellipse at top center, #1a0d28 0%, #0e0814 55%, #090610 100%);
          padding: 90px 0 110px;
          overflow: hidden;
          position: relative;
        }
        .cpcp-section::before {
          content: '';
          position: absolute; top: 0; left: 8%; right: 8%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(253,224,71,0.1) 50%, transparent);
        }

        .cpcp-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 clamp(20px,6%,60px);
        }

        /* ── HEADER ── */
        .cpcp-header {
          display: flex; align-items: center; gap: 20px;
          padding: 0 clamp(20px,6%,60px);
          margin-bottom: 60px;
          max-width: 1200px; margin-left: auto; margin-right: auto;
        }
        .cpcp-header-rule {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(253,224,71,0.35));
          transform-origin: left;
        }
        .cpcp-header-rule--r {
          background: linear-gradient(90deg, rgba(50,197,244,0.3), transparent);
          transform-origin: right;
        }
        .cpcp-header-content {
          display: flex; align-items: center; gap: 14px; flex-shrink: 0;
        }
        .cpcp-header-icon {
          width: 36px; height: 36px;
          border: 1px solid rgba(253,224,71,0.3);
          display: flex; align-items: center; justify-content: center;
          color: #fde047; flex-shrink: 0;
        }
        .cpcp-overline {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.48rem, 1.5vw, 0.6rem);
          font-weight: 400; letter-spacing: 6px;
          color: rgba(255,255,255,0.55); text-transform: uppercase;
          display: block; margin-bottom: 5px;
        }
        .cpcp-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.8rem, 4.5vw, 3.2rem);
          font-weight: 400; letter-spacing: 3px;
          color: #fff; line-height: 1; margin: 0;
        }
        .cpcp-heading-yellow { color: #fde047; }

        /* ═══════════════════════════════════════
           TOP LOGO BLOCK — centered
        ═══════════════════════════════════════ */
        .cpcp-logo-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 64px;
        }

        .cpcp-logo-corners {
          position: relative;
          display: inline-block;
        }
        .cpcp-logo-corner { position: absolute; width: 20px; height: 20px; pointer-events: none; }
        .cpcp-logo-corner--tl { top:-10px; left:-10px; border-top:1px solid rgba(253,224,71,0.5); border-left:1px solid rgba(253,224,71,0.5); }
        .cpcp-logo-corner--tr { top:-10px; right:-10px; border-top:1px solid rgba(253,224,71,0.5); border-right:1px solid rgba(253,224,71,0.5); }
        .cpcp-logo-corner--bl { bottom:-10px; left:-10px; border-bottom:1px solid rgba(50,197,244,0.4); border-left:1px solid rgba(50,197,244,0.4); }
        .cpcp-logo-corner--br { bottom:-10px; right:-10px; border-bottom:1px solid rgba(50,197,244,0.4); border-right:1px solid rgba(50,197,244,0.4); }

        .cpcp-logo-img {
          width: clamp(160px, 26vw, 280px);
          height: auto; display: block;
          filter: drop-shadow(0 0 40px rgba(253,224,71,0.15)) drop-shadow(0 20px 50px rgba(0,0,0,0.85));
          transition: filter 0.5s ease, transform 0.5s ease;
        }
        .cpcp-logo-corners:hover .cpcp-logo-img {
          filter: drop-shadow(0 0 55px rgba(253,224,71,0.28)) drop-shadow(0 20px 50px rgba(0,0,0,0.85));
          transform: scale(1.03);
        }

        .cpcp-logo-insta {
          margin-top: 22px;
          display: inline-flex; align-items: center; gap: 9px;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem, 1.2vw, 0.56rem);
          font-weight: 700; letter-spacing: 4px;
          text-transform: uppercase; text-decoration: none;
          white-space: nowrap;
          color: rgba(255,255,255,0.85);
          background: rgba(14,8,20,0.85);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(253,224,71,0.35);
          padding: 10px 24px;
          position: relative; overflow: hidden;
          transition: color 0.3s;
        }
        .cpcp-logo-insta::before {
          content: '';
          position: absolute; inset: 0;
          background: #fde047;
          transform: scaleX(0); transform-origin: left; z-index: 0;
          transition: transform 0.38s cubic-bezier(0.77,0,0.18,1);
        }
        .cpcp-logo-insta:hover::before { transform: scaleX(1); }
        .cpcp-logo-insta:hover { color: #000; }
        .cpcp-logo-insta svg,
        .cpcp-logo-insta span { position: relative; z-index: 1; }

        .cpcp-logo-meta { margin-top: 28px; text-align: center; }

        .cpcp-pre {
          display: flex; align-items: center; justify-content: center;
          gap: 12px; margin-bottom: 10px;
        }
        .cpcp-pre-line { width: 28px; height: 1px; background: #fde047; opacity: 0.5; }
        .cpcp-pre-text {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.48rem, 1.2vw, 0.6rem);
          font-weight: 400; letter-spacing: 6px;
          color: rgba(253,224,71,0.8); text-transform: uppercase;
        }

        .cpcp-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.2rem, 5vw, 4rem);
          font-weight: 400; letter-spacing: 4px;
          color: #fff; line-height: 0.95; margin: 0 0 14px;
        }
        .cpcp-title-yellow { color: #fde047; }

        .cpcp-tagline-pills {
          display: flex; flex-wrap: wrap; gap: 8px;
          justify-content: center; margin: 0 0 16px;
        }
        .cpcp-pill {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem, 1.1vw, 0.56rem);
          font-weight: 700; letter-spacing: 3px; text-transform: uppercase;
          padding: 5px 14px; border: 1px solid; white-space: nowrap;
        }
        .cpcp-pill--1 { color: #32c5f4; border-color: rgba(50,197,244,0.35); background: rgba(50,197,244,0.06); }
        .cpcp-pill--2 { color: #fde047; border-color: rgba(253,224,71,0.35); background: rgba(253,224,71,0.06); }
        .cpcp-pill--3 { color: rgba(255,255,255,0.7); border-color: rgba(255,255,255,0.15); background: rgba(255,255,255,0.04); }

        .cpcp-rule {
          width: clamp(160px, 40%, 380px); margin: 0 auto 16px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(253,224,71,0.3), rgba(50,197,244,0.2), transparent);
        }
        .cpcp-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.82rem, 1.2vw, 0.95rem);
          font-weight: 300;
          color: rgba(255,255,255,0.65); line-height: 1.85;
          max-width: 560px; margin: 0 auto;
        }
        .cpcp-highlight { color: #fff; font-weight: 700; border-bottom: 1px solid rgba(253,224,71,0.4); }

        /* ═══════════════════════════════════════
           TWO CARDS SIDE BY SIDE
        ═══════════════════════════════════════ */
        .cpcp-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 50px;
        }

        .cpcp-lcu-card {
          position: relative;
          border: 1px solid rgba(253,224,71,0.25);
          background: rgba(253,224,71,0.03);
          padding: 0; overflow: hidden;
          transition: border-color 0.35s, box-shadow 0.35s;
          text-decoration: none;
          display: flex; flex-direction: column;
        }
        .cpcp-lcu-card:hover {
          border-color: rgba(253,224,71,0.55);
          box-shadow: 0 8px 32px rgba(253,224,71,0.08);
        }
        .cpcp-lcu-card::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 3px; height: 100%;
          background: linear-gradient(to bottom, #fde047, #32c5f4);
          z-index: 6;
        }
        .cpcp-lcu-card--cyan { border-color: rgba(50,197,244,0.25); background: rgba(50,197,244,0.02); }
        .cpcp-lcu-card--cyan:hover { border-color: rgba(50,197,244,0.5); box-shadow: 0 8px 32px rgba(50,197,244,0.07); }
        .cpcp-lcu-card--cyan::before { background: linear-gradient(to bottom, #32c5f4, #fde047); }

        /* ── image area ── */
        .cpcp-lcu-img-wrap {
          position: relative; width: 100%;
          background: #0a0614; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }

        /* Madras — contain, full poster visible, centered */
        .cpcp-lcu-img-wrap--contain {
          padding: 20px 12%;
          min-height: 220px;
        }
        .cpcp-lcu-img-wrap--contain .cpcp-lcu-img {
          width: auto; max-width: 100%; max-height: 340px; height: auto;
          object-fit: contain; position: static;
        }

        /* LCU — cover landscape */
        .cpcp-lcu-img-wrap--cover {
          aspect-ratio: 16/9;
        }
        .cpcp-lcu-img-wrap--cover .cpcp-lcu-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%; object-fit: cover;
        }

        .cpcp-lcu-img {
          display: block;
          transition: transform 0.65s ease, filter 0.45s ease;
          filter: brightness(0.88) saturate(0.9);
        }
        .cpcp-lcu-card:hover .cpcp-lcu-img {
          transform: scale(1.04);
          filter: brightness(1) saturate(1.05);
        }
        .cpcp-lcu-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(14,8,20,0.65) 100%);
          pointer-events: none; z-index: 2;
        }
        .cpcp-lcu-img-tl, .cpcp-lcu-img-br {
          position: absolute; width: 14px; height: 14px;
          pointer-events: none; z-index: 4;
        }
        .cpcp-lcu-img-tl { top:10px; left:14px; border-top:1px solid rgba(253,224,71,0.6); border-left:1px solid rgba(253,224,71,0.6); }
        .cpcp-lcu-img-br { bottom:10px; right:10px; border-bottom:1px solid rgba(50,197,244,0.5); border-right:1px solid rgba(50,197,244,0.5); }
        .cpcp-lcu-play {
          position: absolute; bottom: 12px; right: 12px;
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(253,224,71,0.92);
          display: flex; align-items: center; justify-content: center;
          z-index: 4; opacity: 0; transform: scale(0.8);
          transition: opacity 0.3s, transform 0.3s;
        }
        .cpcp-lcu-card:hover .cpcp-lcu-play { opacity: 1; transform: scale(1); }

        /* card body */
        .cpcp-lcu-body {
          padding: 16px 20px 18px 20px;
          position: relative; flex: 1;
        }
        .cpcp-lcu-body::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(253,224,71,0.04), transparent 60%);
          opacity: 0; transition: opacity 0.35s; pointer-events: none;
        }
        .cpcp-lcu-card:hover .cpcp-lcu-body::after { opacity: 1; }

        .cpcp-lcu-header { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
        .cpcp-lcu-badge {
          display: flex; align-items: center; gap: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 0.42rem; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #000;
          background: #fde047; padding: 3px 8px; white-space: nowrap;
        }
        .cpcp-lcu-badge--cyan { background: #32c5f4; }
        .cpcp-lcu-view-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.9rem; letter-spacing: 3px;
          color: rgba(255,255,255,0.5); text-transform: uppercase;
          margin-left: auto; display: flex; align-items: center; gap: 6px;
        }
        .cpcp-lcu-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.05rem, 1.9vw, 1.4rem);
          letter-spacing: 3px; color: #fff; line-height: 1.1; margin: 0 0 8px;
        }
        .cpcp-lcu-title span { color: #fde047; }
        .cpcp-lcu-title-cyan { color: #32c5f4 !important; }
        .cpcp-lcu-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.67rem, 1vw, 0.76rem);
          font-weight: 300; letter-spacing: 0.3px;
          color: rgba(255,255,255,0.6); line-height: 1.75; margin: 0;
        }
        .cpcp-lcu-desc em { color: #32c5f4; font-style: normal; font-weight: 700; }
        .cpcp-lcu-footer {
          display: flex; align-items: center; gap: 8px;
          margin-top: 12px; padding-top: 10px;
          border-top: 1px solid rgba(253,224,71,0.1);
          flex-wrap: wrap;
        }
        .cpcp-lcu-collab {
          font-family: 'Inter', sans-serif;
          font-size: 0.44rem; font-weight: 400; letter-spacing: 1.5px;
          color: rgba(255,255,255,0.4); text-transform: uppercase;
          flex: 1; min-width: 0;
        }
        .cpcp-lcu-collab strong { color: rgba(253,224,71,0.7); font-weight: 700; }
        .cpcp-lcu-cta {
          display: flex; align-items: center; gap: 5px;
          font-family: 'Inter', sans-serif;
          font-size: 0.44rem; font-weight: 700; letter-spacing: 2px;
          color: #fde047; text-transform: uppercase; flex-shrink: 0;
          transition: gap 0.3s;
        }
        .cpcp-lcu-card:hover .cpcp-lcu-cta { gap: 8px; }
        .cpcp-lcu-cta--cyan { color: #32c5f4; }
        .cpcp-lcu-mention {
          color: #32c5f4; font-weight: 700; text-decoration: none;
          border-bottom: 1px solid rgba(50,197,244,0.3);
          transition: color 0.2s, border-color 0.2s;
        }
        .cpcp-lcu-mention:hover { color: #fff; border-color: #fff; }
        .cpcp-lcu-collab-link { color: inherit; text-decoration: none; transition: color 0.2s; }
        .cpcp-lcu-collab-link:hover strong { color: #fff; }

        /* bottom CTA */
        .cpcp-cta-wrap { display: flex; justify-content: center; margin-top: 44px; }
        .cpcp-cta {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 28px; border: 1px solid #fde047;
          color: #fde047; text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem, 1.2vw, 0.56rem);
          font-weight: 700; letter-spacing: 4px; text-transform: uppercase;
          transition: color 0.4s;
        }
        .cpcp-cta-bg {
          position: absolute; inset: 0; background: #fde047;
          transform-origin: left; transform: scaleX(0); z-index: 0;
          transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
        }
        .cpcp-cta:hover .cpcp-cta-bg { transform: scaleX(1); }
        .cpcp-cta:hover { color: #000; }
        .cpcp-cta-label, .cpcp-cta svg { position: relative; z-index: 1; }

        /* ════════════════════════════════════════
           RESPONSIVE
        ════════════════════════════════════════ */
        @media (max-width: 860px) {
          .cpcp-cards-grid {
            grid-template-columns: 1fr;
            max-width: 520px; margin-left: auto; margin-right: auto;
          }
        }
        @media (max-width: 700px) {
          .cpcp-header {
            flex-direction: column; align-items: flex-start;
            gap: 10px; padding: 0 clamp(16px,5%,40px); margin-bottom: 40px;
          }
          .cpcp-header-rule { display: none; }
          .cpcp-header-content { flex-direction: column; align-items: flex-start; gap: 10px; }
          .cpcp-header-icon { width: 30px; height: 30px; }
          .cpcp-lcu-view-label { display: none; }
        }
        @media (max-width: 600px) {
          .cpcp-section { padding: 60px 0 70px; }
          .cpcp-inner   { padding: 0 16px; }
          .cpcp-lcu-img-wrap--contain { padding: 14px 8%; min-height: 180px; }
          .cpcp-lcu-img-wrap--contain .cpcp-lcu-img { max-height: 260px; }
        }
      `}),(0,Q.jsxs)(`section`,{className:`cpcp-section`,children:[(0,Q.jsxs)(`div`,{className:`cpcp-header`,ref:e,children:[(0,Q.jsx)($.div,{className:`cpcp-header-rule`,initial:{scaleX:0},animate:{scaleX:t?1:0},transition:{duration:.8,ease:[.76,0,.24,1]}}),(0,Q.jsxs)($.div,{className:`cpcp-header-content`,initial:{opacity:0,y:20},animate:{opacity:t?1:0,y:t?0:20},transition:{delay:.3,duration:.6},children:[(0,Q.jsx)(`div`,{className:`cpcp-header-icon`,children:(0,Q.jsx)(Zg,{size:18})}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`cpcp-overline`,children:`EVERY BET · A BLOCKBUSTER`}),(0,Q.jsxs)(`h2`,{className:`cpcp-heading`,children:[`CREATIVE `,(0,Q.jsx)(`span`,{className:`cpcp-heading-yellow`,children:`PRODUCER`})]})]})]}),(0,Q.jsx)($.div,{className:`cpcp-header-rule cpcp-header-rule--r`,initial:{scaleX:0},animate:{scaleX:t?1:0},transition:{delay:.15,duration:.8,ease:[.76,0,.24,1]}})]}),(0,Q.jsxs)(`div`,{className:`cpcp-inner`,children:[(0,Q.jsxs)($.div,{className:`cpcp-logo-block`,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.8,ease:[.16,1,.3,1]},children:[(0,Q.jsxs)(`div`,{className:`cpcp-logo-corners`,children:[(0,Q.jsx)(`div`,{className:`cpcp-logo-corner cpcp-logo-corner--tl`}),(0,Q.jsx)(`div`,{className:`cpcp-logo-corner cpcp-logo-corner--tr`}),(0,Q.jsx)(`div`,{className:`cpcp-logo-corner cpcp-logo-corner--bl`}),(0,Q.jsx)(`div`,{className:`cpcp-logo-corner cpcp-logo-corner--br`}),(0,Q.jsx)(`img`,{src:A.logo,alt:`CinemaPayyan`,className:`cpcp-logo-img`})]}),(0,Q.jsxs)(`a`,{href:`https://www.instagram.com/cinemapayyan.inc/`,target:`_blank`,rel:`noreferrer`,className:`cpcp-logo-insta`,children:[(0,Q.jsx)(e_,{size:13}),(0,Q.jsx)(`span`,{children:`FOLLOW ON INSTAGRAM`})]}),(0,Q.jsxs)(`div`,{className:`cpcp-logo-meta`,children:[(0,Q.jsxs)(`div`,{className:`cpcp-pre`,children:[(0,Q.jsx)(`div`,{className:`cpcp-pre-line`}),(0,Q.jsx)(`span`,{className:`cpcp-pre-text`,children:`DIGITAL ARCHITECT`}),(0,Q.jsx)(`div`,{className:`cpcp-pre-line`})]}),(0,Q.jsxs)(`h3`,{className:`cpcp-title`,children:[`TURNING FRAMES\xA0`,(0,Q.jsx)(`span`,{className:`cpcp-title-yellow`,children:`INTO FAME`})]}),(0,Q.jsxs)(`div`,{className:`cpcp-tagline-pills`,children:[(0,Q.jsx)(`span`,{className:`cpcp-pill cpcp-pill--1`,children:`Industry Tracker`}),(0,Q.jsx)(`span`,{className:`cpcp-pill cpcp-pill--2`,children:`Content Curation`}),(0,Q.jsx)(`span`,{className:`cpcp-pill cpcp-pill--3`,children:`Content Selling`})]}),(0,Q.jsx)(`div`,{className:`cpcp-rule`}),(0,Q.jsxs)(`p`,{className:`cpcp-desc`,children:[`I specialise in engineering the digital heartbeat of modern cinema — executing high-stakes reveal campaigns that transform raw cinematic footage into`,` `,(0,Q.jsx)(`span`,{className:`cpcp-highlight`,children:`unavoidable content`}),`.`]})]})]}),(0,Q.jsxs)(`div`,{className:`cpcp-cards-grid`,children:[(0,Q.jsxs)($.div,{className:`cpcp-lcu-card cpcp-lcu-card--cyan`,initial:{opacity:0,x:-24},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.65,delay:.1},children:[(0,Q.jsxs)(`div`,{className:`cpcp-lcu-img-wrap cpcp-lcu-img-wrap--contain`,children:[(0,Q.jsx)(`img`,{src:A.madrasMatniee,alt:`Madras Matinee`,className:`cpcp-lcu-img`}),(0,Q.jsx)(`div`,{className:`cpcp-lcu-img-overlay`}),(0,Q.jsx)(`div`,{className:`cpcp-lcu-img-tl`}),(0,Q.jsx)(`div`,{className:`cpcp-lcu-img-br`}),(0,Q.jsx)(`a`,{href:`https://www.instagram.com/madrasmotionpictures/`,target:`_blank`,rel:`noreferrer`,className:`cpcp-lcu-play`,children:(0,Q.jsx)(Qg,{size:13,color:`#000`})})]}),(0,Q.jsxs)(`div`,{className:`cpcp-lcu-body`,children:[(0,Q.jsxs)(`div`,{className:`cpcp-lcu-header`,children:[(0,Q.jsxs)(`div`,{className:`cpcp-lcu-badge cpcp-lcu-badge--cyan`,children:[(0,Q.jsx)(o_,{size:9,fill:`black`}),`FIRST AS CREATIVE PRODUCER`]}),(0,Q.jsxs)(`span`,{className:`cpcp-lcu-view-label`,children:[(0,Q.jsx)(e_,{size:11}),`VIEW`]})]}),(0,Q.jsxs)(`h4`,{className:`cpcp-lcu-title`,children:[`Madras `,(0,Q.jsx)(`span`,{className:`cpcp-lcu-title-cyan`,children:`Matinee`})]}),(0,Q.jsxs)(`p`,{className:`cpcp-lcu-desc`,children:[(0,Q.jsx)(`a`,{href:`https://www.instagram.com/DreamWarriorPictures/`,target:`_blank`,rel:`noreferrer`,className:`cpcp-lcu-mention`,children:`@dreamwarriorpictures`}),` `,`presents `,(0,Q.jsx)(`em`,{children:`#MadrasMatinee`}),` — a`,` `,(0,Q.jsx)(`a`,{href:`https://www.instagram.com/madrasmotionpictures/`,target:`_blank`,rel:`noreferrer`,className:`cpcp-lcu-mention`,children:`@madrasmotionpictures`}),` `,`production 💥 A very special film from `,(0,Q.jsx)(`em`,{children:`@keyanmk`}),` and team. My `,(0,Q.jsx)(`em`,{children:`first`}),` as a creative producer ❤️`]}),(0,Q.jsxs)(`div`,{className:`cpcp-lcu-footer`,children:[(0,Q.jsxs)(`span`,{className:`cpcp-lcu-collab`,children:[(0,Q.jsx)(`a`,{href:`https://www.instagram.com/DreamWarriorPictures/`,target:`_blank`,rel:`noreferrer`,className:`cpcp-lcu-collab-link`,children:(0,Q.jsx)(`strong`,{children:`@dreamwarriorpictures`})}),` × `,(0,Q.jsx)(`a`,{href:`https://www.instagram.com/madrasmotionpictures/`,target:`_blank`,rel:`noreferrer`,className:`cpcp-lcu-collab-link`,children:(0,Q.jsx)(`strong`,{children:`@madrasmotionpictures`})})]}),(0,Q.jsx)(`span`,{className:`cpcp-lcu-cta cpcp-lcu-cta--cyan`,children:(0,Q.jsxs)(`a`,{href:`https://www.instagram.com/madrasmotionpictures/`,target:`_blank`,rel:`noreferrer`,style:{color:`inherit`,textDecoration:`none`,display:`flex`,alignItems:`center`,gap:5},children:[`INSTAGRAM `,(0,Q.jsx)(Qg,{size:10})]})})]})]})]}),(0,Q.jsxs)($.div,{className:`cpcp-lcu-card`,initial:{opacity:0,x:24},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.65,delay:.2},children:[(0,Q.jsxs)(`div`,{className:`cpcp-lcu-img-wrap cpcp-lcu-img-wrap--cover`,children:[(0,Q.jsx)(`img`,{src:A.LCU,alt:`Origins of LCU`,className:`cpcp-lcu-img`}),(0,Q.jsx)(`div`,{className:`cpcp-lcu-img-overlay`}),(0,Q.jsx)(`div`,{className:`cpcp-lcu-img-tl`}),(0,Q.jsx)(`div`,{className:`cpcp-lcu-img-br`}),(0,Q.jsx)(`a`,{href:`https://www.instagram.com/p/DBjBOAWSI0X/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==`,target:`_blank`,rel:`noreferrer`,className:`cpcp-lcu-play`,children:(0,Q.jsx)(Qg,{size:13,color:`#000`})})]}),(0,Q.jsxs)(`div`,{className:`cpcp-lcu-body`,children:[(0,Q.jsxs)(`div`,{className:`cpcp-lcu-header`,children:[(0,Q.jsxs)(`div`,{className:`cpcp-lcu-badge`,children:[(0,Q.jsx)(o_,{size:9,fill:`black`}),`MOST HAILED`]}),(0,Q.jsxs)(`span`,{className:`cpcp-lcu-view-label`,children:[(0,Q.jsx)(e_,{size:11}),`VIEW POST`]})]}),(0,Q.jsxs)(`h4`,{className:`cpcp-lcu-title`,children:[`10 Minute Prelude to the `,(0,Q.jsx)(`span`,{children:`Origins of LCU`})]}),(0,Q.jsxs)(`p`,{className:`cpcp-lcu-desc`,children:[`A teaching exercise that led to a`,` `,(0,Q.jsx)(`em`,{children:`'10 minute Prelude to the Origins of LCU'`}),`.`,` `,(0,Q.jsx)(`em`,{children:`#ChapterZeroFL`}),` unlock 💥 — where filmmaking education collided with cinematic universe building in one explosive session.`]}),(0,Q.jsxs)(`div`,{className:`cpcp-lcu-footer`,children:[(0,Q.jsxs)(`span`,{className:`cpcp-lcu-collab`,children:[(0,Q.jsx)(`a`,{href:`https://www.instagram.com/gsquadoffl/`,target:`_blank`,rel:`noreferrer`,className:`cpcp-lcu-collab-link`,children:(0,Q.jsx)(`strong`,{children:`@gsquadoffl`})}),` × `,(0,Q.jsx)(`strong`,{children:`@cinemapayyan.inc`}),` × `,(0,Q.jsx)(`a`,{href:`https://www.instagram.com/levelup_filmmaking/`,target:`_blank`,rel:`noreferrer`,className:`cpcp-lcu-collab-link`,children:(0,Q.jsx)(`strong`,{children:`@levelup_filmmaking`})})]}),(0,Q.jsx)(`span`,{className:`cpcp-lcu-cta`,children:(0,Q.jsxs)(`a`,{href:`https://www.instagram.com/p/DBjBOAWSI0X/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==`,target:`_blank`,rel:`noreferrer`,style:{color:`inherit`,textDecoration:`none`,display:`flex`,alignItems:`center`,gap:5},children:[`INSTAGRAM `,(0,Q.jsx)(Qg,{size:10})]})})]})]})]})]}),(0,Q.jsx)(`div`,{className:`cpcp-cta-wrap`,children:(0,Q.jsxs)($.a,{href:`https://www.instagram.com/cinemapayyan.inc/`,target:`_blank`,rel:`noreferrer`,className:`cpcp-cta`,whileHover:`hover`,children:[(0,Q.jsx)($.span,{className:`cpcp-cta-bg`,variants:{hover:{scaleX:1}},initial:{scaleX:0},transition:{duration:.4}}),(0,Q.jsx)(`span`,{className:`cpcp-cta-label`,children:`VISIT INSTAGRAM`}),(0,Q.jsx)(Qg,{size:13})]})})]})]})]})},g_=()=>{let e=[A.Thalivar,A.Vijay,A.Danush,A.Str,A.Nani,A.Prabas,A.Lokash,A.Vp,A.Keerthi,A.AnirutRavi,A.Tyagaraja],t=(0,C.useRef)(null),n=(0,C.useRef)(!1),r=(0,C.useRef)(0),i=(0,C.useRef)(0),a=(0,C.useRef)(0),o=(0,C.useRef)(1),s=(0,C.useRef)(!1),[c,l]=(0,C.useState)(0),u=(0,C.useCallback)(()=>{let n=t.current;if(!n)return;let r=n.scrollWidth/3,i=((n.scrollLeft-r/3)%r+r)%r;l(Math.round(i/316)%e.length)},[e.length]),d=(0,C.useCallback)(()=>{let e=t.current;if(e){if(!s.current){e.scrollLeft+=o.current;let t=e.scrollWidth/3;e.scrollLeft>=t*2&&(e.scrollLeft-=t),e.scrollLeft<=0&&(e.scrollLeft+=t)}u(),a.current=requestAnimationFrame(d)}},[u]);(0,C.useEffect)(()=>{let e=t.current;return e&&(e.scrollLeft=e.scrollWidth/3),a.current=requestAnimationFrame(d),()=>cancelAnimationFrame(a.current)},[d]);let f=e=>{n.current=!0,s.current=!0,r.current=e.pageX-(t.current?.offsetLeft??0),i.current=t.current?.scrollLeft??0,t.current&&(t.current.style.cursor=`grabbing`)},p=e=>{if(!n.current)return;e.preventDefault();let a=t.current;if(!a)return;let o=e.pageX-a.offsetLeft;a.scrollLeft=i.current-(o-r.current)*1.5,u()},m=()=>{n.current=!1,s.current=!1,t.current&&(t.current.style.cursor=`grab`)},h=e=>{s.current=!0,r.current=e.touches[0].pageX-(t.current?.offsetLeft??0),i.current=t.current?.scrollLeft??0},g=e=>{let n=t.current;n&&(n.scrollLeft=i.current-(e.touches[0].pageX-n.offsetLeft-r.current)*1.5,u())},_=()=>{s.current=!1},v=[...e,...e,...e];return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;700;900&display=swap');

        :root {
          --cyan: #32c5f4;
          --yellow: #fde047;
          --black: #000000;
          --white: #ffffff;
          --acc-bg: #050d1a;
        }

        .gold-text { color: var(--yellow) !important; }
        .cyan-text { color: var(--cyan) !important; }
        .gold-bg   { background: var(--yellow) !important; }
        .cyan-bg   { background: var(--cyan) !important; }

        .acc-universe-v4 {
          background: var(--acc-bg);
          overflow: hidden;
          position: relative;
        }
        .acc-universe-v4::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 0% 0%,    rgba(50,197,244,0.07) 0%, transparent 55%),
            radial-gradient(ellipse at 100% 100%, rgba(253,224,71,0.05) 0%, transparent 55%);
          pointer-events: none; z-index: 0;
        }

        /* ── HERO ── */
        .acc-hero-parallax {
          position: relative; min-height: 320px;
          background-size: cover; background-position: center top;
          background-attachment: fixed;
          display: flex; flex-direction: column; justify-content: flex-end;
        }
        .acc-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(5,13,26,0.25) 0%,
            rgba(5,13,26,0.58) 50%,
            rgba(5,13,26,0.97) 100%
          );
          pointer-events: none;
        }
        .acc-hero-content {
          position: relative; z-index: 2;
          padding: clamp(24px,6%,60px) clamp(20px,6%,60px) 0;
          max-width: 1200px; margin: 0 auto; width: 100%; box-sizing: border-box;
        }
        .acc-pre-title {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.48rem,1.5vw,0.62rem);
          font-weight: 400; letter-spacing: 6px;
          color: rgba(253,224,71,0.85); text-transform: uppercase; margin-bottom: 12px;
        }
        .acc-main-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.5rem,11vw,8rem);
          font-weight: 400; color: var(--white);
          line-height: 0.9; letter-spacing: 4px; margin: 0;
        }
        .acc-main-title-accent { color: var(--yellow); display: block; }

        /* ── CREDO TRAIN ── */
        .acc-credo-train {
          position: relative; z-index: 2; overflow: hidden;
          margin-top: 40px;
          border-top: 1px solid rgba(50,197,244,0.12);
          border-bottom: 1px solid rgba(50,197,244,0.12);
          padding: 10px 0;
          background: rgba(5,13,26,0.6);
        }
        .acc-train-track {
          display: flex; width: max-content;
          animation: acc-train-scroll 18s linear infinite; will-change: transform;
        }
        @keyframes acc-train-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .acc-track-item { display: flex; white-space: nowrap; }
        .acc-track-item span {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.48rem,1.5vw,0.62rem);
          font-weight: 400; letter-spacing: 5px;
          color: rgba(253,224,71,0.75); text-transform: uppercase; padding: 0 4px;
        }

        /* ── WRAPPER ── */
        .acc-wrapper {
          max-width: 1200px; margin: 0 auto;
          padding: 0 clamp(20px,6%,60px) 100px;
          box-sizing: border-box; position: relative; z-index: 1;
        }

        /* ── MISSION HUB ── */
        .acc-mission-hub {
          display: grid; grid-template-columns: 1fr 1.4fr;
          gap: 36px; align-items: stretch; margin-bottom: 70px;
        }
        .acc-visual-side {
          display: flex; justify-content: center;
          align-items: stretch; padding-bottom: 30px; align-self: stretch;
        }
        .acc-portrait-container {
          position: relative; display: flex; flex-direction: column;
          width: 100%; height: 100%; padding-bottom: 28px;
        }
        .acc-img-glow {
          position: absolute; inset: -20px;
          background: radial-gradient(circle at center, rgba(50,197,244,0.10) 0%, transparent 65%);
          pointer-events: none;
        }
        .acc-portrait-img {
          display: block; width: 100%; height: 100%; max-width: 100%;
          object-fit: cover; position: relative; z-index: 1;
          box-shadow: 0 24px 60px rgba(0,0,0,0.95), 0 0 40px rgba(50,197,244,0.08);
        }

        /* ── STATUS TAG — now a clickable email link ── */
        .acc-status-tag {
          position: absolute; bottom: 0; left: 50%;
          transform: translateX(-50%);
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem,1.2vw,0.56rem);
          font-weight: 700; letter-spacing: 4px;
          color: var(--black); background: var(--cyan);
          padding: 7px 16px; white-space: nowrap; z-index: 4;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.3s, color 0.3s;
          cursor: pointer;
          overflow: hidden;
          position: absolute;
        }
        .acc-status-tag::before {
          content: '';
          position: absolute; inset: 0;
          background: var(--yellow);
          transform: scaleX(0); transform-origin: left; z-index: 0;
          transition: transform 0.35s cubic-bezier(0.77,0,0.18,1);
        }
        .acc-status-tag:hover::before { transform: scaleX(1); }
        .acc-status-tag > * { position: relative; z-index: 1; }
        .acc-status-tag:hover { color: var(--black); }

        .acc-text-side { display: flex; flex-direction: column; gap: 22px; }

        .acc-pill-label {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem,1.2vw,0.58rem);
          font-weight: 400; letter-spacing: 4px;
          color: rgba(255,255,255,0.7); text-transform: uppercase;
          border: 1px solid rgba(253,224,71,0.25); padding: 7px 14px; width: fit-content;
        }
        .acc-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.2rem,5vw,4rem);
          font-weight: 400; color: var(--white);
          line-height: 0.95; letter-spacing: 3px; margin: 0;
        }
        .acc-heading-accent { color: var(--cyan); }
        .acc-heading-rule {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, rgba(253,224,71,0.35), rgba(50,197,244,0.2), transparent);
        }
        .acc-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.82rem,1.2vw,0.95rem);
          font-weight: 300; color: rgba(255,255,255,0.60); line-height: 1.9; margin: 0;
        }
        .acc-body strong {
          color: var(--white); font-weight: 700;
          border-bottom: 1px solid rgba(253,224,71,0.4);
        }

        .acc-feature-stack { display: flex; flex-direction: column; gap: 14px; }
        .acc-feature-card {
          display: flex; align-items: flex-start; gap: 16px;
          padding: 18px 20px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.025);
          transition: border-color 0.3s, background 0.3s;
        }
        .acc-feature-card:hover {
          border-color: rgba(253,224,71,0.2);
          background: rgba(253,224,71,0.03);
        }
        .highlight-card {
          border-color: rgba(50,197,244,0.2);
          background: rgba(50,197,244,0.04);
        }
        .highlight-card:hover {
          border-color: rgba(50,197,244,0.4);
          background: rgba(50,197,244,0.07);
        }
        .acc-feature-icon {
          width: 42px; height: 42px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .acc-feature-text { display: flex; flex-direction: column; gap: 5px; }
        .acc-feature-text h4 {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.52rem,1.2vw,0.64rem);
          font-weight: 700; letter-spacing: 3px; text-transform: uppercase;
          color: rgba(255,255,255,0.9); margin: 0;
        }
        .acc-feature-text p {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.78rem,1.1vw,0.88rem);
          font-weight: 300; color: rgba(255,255,255,0.60); margin: 0; line-height: 1.65;
        }


        .acc-cta {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 28px; border: 1px solid var(--yellow);
          color: var(--yellow); text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem,1.2vw,0.56rem);
          font-weight: 700; letter-spacing: 4px; text-transform: uppercase;
          transition: color 0.4s; width: fit-content;
        }
        .acc-cta::before {
          content: ''; position: absolute; inset: 0; background: var(--yellow);
          transform-origin: left; transform: scaleX(0); z-index: 0;
          transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
        }
        .acc-cta:hover::before { transform: scaleX(1); }
        .acc-cta:hover { color: var(--black); }
        .acc-cta span, .acc-cta svg { position: relative; z-index: 1; }

        /* ── LEGACY REEL ── */
        .acc-legacy-reel { display: flex; flex-direction: column; gap: 28px; }
        .acc-reel-title {
          display: flex; flex-direction: column;
          align-items: center; gap: 10px; text-align: center;
        }
        .acc-reel-pre { display: flex; align-items: center; gap: 16px; }
        .acc-reel-pre-line {
          width: 40px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(253,224,71,0.5));
        }
        .acc-reel-pre-line:last-child {
          background: linear-gradient(90deg, rgba(253,224,71,0.5), transparent);
        }
        .acc-reel-pre-text {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem,1.2vw,0.58rem);
          font-weight: 400; letter-spacing: 6px;
          color: rgba(253,224,71,0.85); text-transform: uppercase;
        }
        .acc-reel-title h4 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2rem,4.5vw,3.2rem);
          font-weight: 400; letter-spacing: 4px; color: var(--white); margin: 0;
        }

        /* ── SLIDER ── */
        .acc-slider-wrap { position: relative; display: flex; align-items: center; }
        .acc-slider-track {
          display: flex; gap: 16px; overflow-x: hidden;
          scroll-behavior: auto; cursor: grab; user-select: none;
          padding: 10px 0 20px; width: 100%;
          mask-image: linear-gradient(90deg, transparent, black 60px, black calc(100% - 60px), transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 60px, black calc(100% - 60px), transparent);
        }
        .acc-slide-card { flex-shrink: 0; width: 300px; }
        .acc-card-inner {
          position: relative; width: 100%; aspect-ratio: 3/4;
          overflow: hidden;
          border: 1px solid rgba(50,197,244,0.08);
          background: #020810;
          transition: border-color 0.35s, transform 0.4s;
        }
        .acc-card-inner:hover {
          border-color: rgba(253,224,71,0.28);
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.7), 0 0 20px rgba(50,197,244,0.06);
        }
        .acc-card-inner img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          pointer-events: none; transition: transform 0.5s ease;
        }
        .acc-card-inner:hover img { transform: scale(1.06); }
        .acc-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 55%, rgba(5,13,26,0.55) 100%);
          pointer-events: none;
        }
        .acc-card-corner-tl, .acc-card-corner-br {
          position: absolute; width: 12px; height: 12px;
          pointer-events: none; z-index: 4;
        }
        .acc-card-corner-tl {
          top: 8px; left: 8px;
          border-top: 1px solid rgba(253,224,71,0.5);
          border-left: 1px solid rgba(253,224,71,0.5);
        }
        .acc-card-corner-br {
          bottom: 8px; right: 8px;
          border-bottom: 1px solid rgba(50,197,244,0.4);
          border-right: 1px solid rgba(50,197,244,0.4);
        }
        .acc-legacy-badge {
          position: absolute; bottom: 10px; left: 65px;
          display: flex; align-items: center; gap: 6px;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.42rem,1vw,0.52rem);
          font-weight: 400; letter-spacing: 3px;
          color: rgba(255,255,255,0.9);
          background: rgba(5,13,26,0.88);
          border: 1px solid rgba(50,197,244,0.15);
          padding: 5px 10px; text-transform: uppercase; z-index: 5;
        }

        /* ── PROGRESS BAR ── */
        .acc-progress-bar-wrap {
          display: flex; align-items: center; gap: 14px; padding: 0 4px;
        }
        .acc-progress-label {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem,1vw,0.54rem);
          font-weight: 400; letter-spacing: 3px;
          color: rgba(255,255,255,0.35); text-transform: uppercase;
          white-space: nowrap; flex-shrink: 0;
        }
        .acc-progress-label span { color: var(--yellow); font-weight: 700; }
        .acc-progress-track {
          flex: 1; height: 2px;
          background: rgba(255,255,255,0.07);
          position: relative; overflow: visible;
        }
        .acc-progress-fill {
          position: absolute; top: 0; left: 0; height: 100%;
          background: linear-gradient(90deg, var(--cyan), var(--yellow));
          border-radius: 1px;
          transition: width 0.35s cubic-bezier(0.77,0,0.18,1);
          box-shadow: 0 0 8px rgba(253,224,71,0.4);
        }
        .acc-progress-fill::after {
          content: ''; position: absolute; right: -4px; top: 50%;
          transform: translateY(-50%);
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--yellow);
          box-shadow: 0 0 10px var(--yellow), 0 0 20px rgba(253,224,71,0.5);
        }
        .acc-progress-ticks {
          position: absolute; top: 6px; left: 0; width: 100%;
          display: flex; justify-content: space-between;
        }
        .acc-progress-tick {
          width: 1px; height: 4px;
          background: rgba(255,255,255,0.10); flex-shrink: 0;
        }
        .acc-drag-hint {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem,1.2vw,0.56rem);
          font-weight: 400; letter-spacing: 5px;
          color: rgba(255,255,255,0.35); text-transform: uppercase;
          text-align: center; margin: 0;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .acc-mission-hub {
            grid-template-columns: 1fr; gap: 40px;
            margin-bottom: 70px; text-align: center;
          }
          .acc-visual-side   { justify-content: center; padding-bottom: 30px; }
          .acc-pill-label    { margin: 0 auto; }
          .acc-heading-rule  { max-width: 360px; margin: 0 auto; }
          .acc-cta           { margin: 0 auto; }
          .acc-portrait-img  { max-width: 280px; }
          .acc-feature-stack { text-align: left; }
        }
        @media (max-width: 700px) {
          .acc-hero-parallax  { min-height: 220px; background-attachment: scroll; }
          .acc-hero-content   { padding: 20px 16px 0; }
          .acc-credo-train    { margin-top: 50%; }
          .acc-wrapper        { padding: 70px 16px 80px; }
          .acc-mission-hub    { gap: 32px; margin-bottom: 56px; }
          .acc-slide-card     { width: 220px; }
          .acc-feature-card   { padding: 14px 16px; }
          .acc-progress-label { display: none; }
        }
        @media (max-width: 480px) {
          .acc-slide-card    { width: 180px; }
          .acc-main-title    { letter-spacing: 2px; }
          .acc-wrapper       { padding: 10px 14px 70px; }
          .acc-portrait-img  { max-width: 240px; }
          .acc-status-tag    { font-size: 0.5rem; letter-spacing: 2px; padding: 6px 12px; }
        }
      `}),(0,Q.jsxs)(`section`,{className:`acc-universe-v4`,children:[(0,Q.jsxs)(`div`,{className:`acc-hero-parallax`,style:{backgroundImage:`url(${A.Bannerrr2})`},children:[(0,Q.jsx)(`div`,{className:`acc-hero-overlay`}),(0,Q.jsxs)(`div`,{className:`acc-hero-content`,children:[(0,Q.jsx)(`span`,{className:`acc-pre-title`,children:`ESTABLISHED INDUSTRY LINKS`}),(0,Q.jsxs)(`h2`,{className:`acc-main-title`,children:[`THE`,` `,(0,Q.jsx)(`span`,{className:`gold-text acc-main-title-accent`,children:`ACCELERATOR`})]})]}),(0,Q.jsx)(`div`,{className:`acc-credo-train`,children:(0,Q.jsx)(`div`,{className:`acc-train-track`,children:[...[,,]].map((e,t)=>(0,Q.jsxs)(`div`,{className:`acc-track-item`,children:[(0,Q.jsx)(`span`,{children:`WE REDEFINE EVERY DAY \xA0•\xA0`}),(0,Q.jsx)(`span`,{children:`WE REDEFINE EVERY DAY \xA0•\xA0`}),(0,Q.jsx)(`span`,{children:`WE REDEFINE EVERY DAY \xA0•\xA0`}),(0,Q.jsx)(`span`,{children:`WE REDEFINE EVERY DAY \xA0•\xA0`})]},t))})})]}),(0,Q.jsxs)(`div`,{className:`acc-wrapper`,children:[(0,Q.jsxs)(`div`,{className:`acc-mission-hub`,children:[(0,Q.jsx)(`div`,{className:`acc-visual-side`,children:(0,Q.jsxs)(`div`,{className:`acc-portrait-container`,children:[(0,Q.jsx)(`div`,{className:`acc-img-glow`}),(0,Q.jsx)(`img`,{src:A.AbishakeWhite,alt:`Abishek Raaja`,className:`acc-portrait-img`}),(0,Q.jsxs)(`a`,{href:`https://mail.google.com/mail/?view=cm&to=cinemapayyanproductions@gmail.com`,target:`_blank`,rel:`noopener noreferrer`,className:`acc-status-tag`,title:`Connect via Email`,children:[(0,Q.jsx)(t_,{size:12}),(0,Q.jsx)(`span`,{children:`CONNECT WITH US`})]})]})}),(0,Q.jsxs)(`div`,{className:`acc-text-side`,children:[(0,Q.jsxs)(`div`,{className:`acc-pill-label`,children:[(0,Q.jsx)(a_,{size:13,className:`gold-text`}),(0,Q.jsx)(`span`,{children:`CINEMAPAYYAN INC\xA0•\xA0SINCE 2014`})]}),(0,Q.jsxs)(`h3`,{className:`acc-heading`,children:[`REDEFINING THE `,(0,Q.jsx)(`br`,{}),(0,Q.jsx)(`span`,{className:`cyan-text acc-heading-accent`,children:`PROMOTION`}),` `,`ENGINE`]}),(0,Q.jsx)(`div`,{className:`acc-heading-rule`}),(0,Q.jsxs)(`p`,{className:`acc-body`,children:[`We don't just promote; we `,(0,Q.jsx)(`strong`,{children:`accelerate`}),`. We turn films into cultural movements using 10+ years of trust and experimental digital IPs.`]}),(0,Q.jsxs)(`div`,{className:`acc-feature-stack`,children:[(0,Q.jsxs)(`div`,{className:`acc-feature-card highlight-card`,children:[(0,Q.jsx)(`div`,{className:`acc-feature-icon cyan-bg`,children:(0,Q.jsx)(Zg,{size:20,color:`#000`})}),(0,Q.jsxs)(`div`,{className:`acc-feature-text`,children:[(0,Q.jsx)(`h4`,{className:`cyan-text`,children:`End-to-End Movie Marketing`}),(0,Q.jsx)(`p`,{children:`From pre-production buzz to post-release dominance.`})]})]}),(0,Q.jsxs)(`div`,{className:`acc-feature-card`,children:[(0,Q.jsx)(`div`,{className:`acc-feature-icon gold-bg`,children:(0,Q.jsx)(i_,{size:20,color:`#000`})}),(0,Q.jsxs)(`div`,{className:`acc-feature-text`,children:[(0,Q.jsx)(`h4`,{children:`Film Acceleration`}),(0,Q.jsxs)(`p`,{children:[`Finding the `,(0,Q.jsx)(`strong`,{children:`right story`}),` for the`,` `,(0,Q.jsx)(`strong`,{children:`right producer`}),` — connecting visionary filmmakers with decision-makers who greenlight and fund.`]})]})]})]}),(0,Q.jsxs)(`a`,{href:`https://www.instagram.com/cinemapayyan.inc/`,target:`_blank`,rel:`noopener noreferrer`,className:`acc-cta`,children:[(0,Q.jsx)(`span`,{children:`EXPLORE OUR TECH`}),(0,Q.jsx)(Xg,{size:16})]})]})]}),(0,Q.jsxs)(`div`,{className:`acc-legacy-reel`,children:[(0,Q.jsxs)(`div`,{className:`acc-reel-title`,children:[(0,Q.jsxs)(`div`,{className:`acc-reel-pre`,children:[(0,Q.jsx)(`div`,{className:`acc-reel-pre-line`}),(0,Q.jsx)(`span`,{className:`acc-reel-pre-text`,children:`ESTABLISHED CONNECTIONS`}),(0,Q.jsx)(`div`,{className:`acc-reel-pre-line`})]}),(0,Q.jsxs)(`h4`,{children:[`INDUSTRY `,(0,Q.jsx)(`span`,{className:`gold-text`,children:`LEGACY`})]})]}),(0,Q.jsx)(`div`,{className:`acc-slider-wrap`,children:(0,Q.jsx)(`div`,{className:`acc-slider-track`,ref:t,onMouseDown:f,onMouseMove:p,onMouseUp:m,onMouseLeave:m,onTouchStart:h,onTouchMove:g,onTouchEnd:_,children:v.map((e,t)=>(0,Q.jsx)(`div`,{className:`acc-slide-card`,children:(0,Q.jsxs)(`div`,{className:`acc-card-inner`,children:[(0,Q.jsx)(`img`,{src:e,alt:`Legacy Star`,draggable:!1,loading:`lazy`}),(0,Q.jsx)(`div`,{className:`acc-card-overlay`}),(0,Q.jsx)(`div`,{className:`acc-card-corner-tl`}),(0,Q.jsx)(`div`,{className:`acc-card-corner-br`}),(0,Q.jsxs)(`div`,{className:`acc-legacy-badge`,children:[(0,Q.jsx)(s_,{size:13,className:`gold-text`}),(0,Q.jsx)(`span`,{children:`LEGACY STAR`})]})]})},t))})}),(0,Q.jsxs)(`div`,{className:`acc-progress-bar-wrap`,children:[(0,Q.jsxs)(`span`,{className:`acc-progress-label`,children:[(0,Q.jsx)(`span`,{children:String(c+1).padStart(2,`0`)}),`\xA0/\xA0`,String(e.length).padStart(2,`0`)]}),(0,Q.jsxs)(`div`,{className:`acc-progress-track`,children:[(0,Q.jsx)(`div`,{className:`acc-progress-fill`,style:{width:`${(c+1)/e.length*100}%`}}),(0,Q.jsx)(`div`,{className:`acc-progress-ticks`,children:e.map((e,t)=>(0,Q.jsx)(`div`,{className:`acc-progress-tick`},t))})]})]}),(0,Q.jsx)(`p`,{className:`acc-drag-hint`,children:`DRAG TO EXPLORE`})]})]})]})]})},__=e=>String(e).padStart(2,`0`),v_=`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;400;500&display=swap');

/* ── keyframes ── */
@keyframes cpdPerf      { to { transform: translateX(-1480px); } }
@keyframes cpdBeam      { 0%{left:-320px;opacity:0} 12%{opacity:1} 88%{opacity:1} 100%{left:110%;opacity:0} }
@keyframes cpdDotOn     { 0%,100%{opacity:1;box-shadow:0 0 8px rgba(50,197,244,0.9)} 50%{opacity:0.1;box-shadow:none} }
@keyframes cpdRec       { 0%,44%{opacity:1} 50%,94%{opacity:0} }
@keyframes cpdSpin      { to{transform:rotate(360deg)} }
@keyframes cpdFlicker   { 0%,100%{opacity:1} 91%{opacity:.9} 92%{opacity:.25} 93.5%{opacity:1} 96%{opacity:.65} 97%{opacity:1} }
@keyframes cpdPulseGlow { 0%,100%{box-shadow:0 0 4px rgba(253,224,71,.25),0 0 10px rgba(253,224,71,.08)} 50%{box-shadow:0 0 10px rgba(253,224,71,.6),0 0 26px rgba(253,224,71,.2)} }
@keyframes cpdCorePulse { 0%,100%{opacity:.55;transform:scale(1)} 50%{opacity:1;transform:scale(1.06)} }
@keyframes cpdVuL       { 0%,100%{width:38%} 30%{width:72%} 60%{width:55%} 80%{width:82%} }
@keyframes cpdVuR       { 0%,100%{width:42%} 25%{width:68%} 55%{width:88%} 75%{width:50%} }
@keyframes cpdVuM       { 0%,100%{width:30%} 40%{width:60%} 70%{width:78%} }
@keyframes cpdHatch     { from{background-position:0 0} to{background-position:40px 0} }
@keyframes cpdBulb      { 0%,100%{opacity:.15;transform:scale(.82)} 50%{opacity:1;transform:scale(1)} }
@keyframes cpdBulbInv   { 0%,100%{opacity:1;transform:scale(1)}   50%{opacity:.15;transform:scale(.82)} }

/* ── root ── */
.cpd-root {
  width:100%; background:#000; overflow:hidden;
  opacity:0; transform:translateY(10px);
  transition:opacity .6s cubic-bezier(.22,1,.36,1),transform .6s cubic-bezier(.22,1,.36,1);
}
.cpd-root.in { opacity:1; transform:translateY(0); }

/* ── perforations ── */
.cpd-perfs {
  width:100%; overflow:hidden; position:relative;
  border-top:1px solid rgba(255,255,255,.035);
  border-bottom:1px solid rgba(255,255,255,.035);
  box-shadow:inset 0 2px 8px rgba(0,0,0,.75),inset 0 -2px 8px rgba(0,0,0,.75);
  height:22px;
}
@media(max-width:480px){ .cpd-perfs{ height:16px; } }

.cpd-perfs--y { background:linear-gradient(180deg,#0d0d0a,#111108 50%,#0d0d0a); }
.cpd-perfs--c { background:linear-gradient(180deg,#05080d,#070f18 50%,#05080d); }

.cpd-perfs-track {
  display:flex; align-items:center; height:100%;
  will-change:transform;
  animation:cpdPerf 8s linear infinite;
  animation-delay:-4s;
}
.cpd-perf-hole {
  display:inline-flex; flex-shrink:0;
  width:14px; height:10px; border-radius:2px; margin:0 11.5px;
  position:relative;
  background:linear-gradient(180deg,rgba(0,0,0,.55) 0%,var(--ph-col,#fde047) 28%,var(--ph-col,#fde047) 72%,rgba(0,0,0,.45) 100%);
  opacity:var(--ph-op,.88);
  box-shadow:0 0 6px var(--ph-col,#fde047),0 0 18px color-mix(in srgb,var(--ph-col,#fde047) 28%,transparent),inset 0 1px 0 rgba(255,255,255,.32),inset 0 -1px 0 rgba(0,0,0,.55);
}
.cpd-perf-hole::after {
  content:''; position:absolute; top:1px; left:2px; right:2px; height:3px;
  border-radius:1px; background:rgba(255,255,255,.2);
}
@media(max-width:480px){
  .cpd-perf-hole{ width:9px; height:7px; margin:0 8px; }
}
@media(max-width:360px){
  .cpd-perf-hole{ width:7px; height:5px; margin:0 6px; }
}

/* ── label base ── */
.cpd-lbl {
  font-family:'DM Mono',monospace; font-weight:400;
  text-transform:uppercase;
  font-size:clamp(.48rem,2.2vw,.64rem);
  letter-spacing:clamp(1.5px,1.2vw,9px);
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
  flex-shrink:1; min-width:0;
}

/* ══════════════════════════════════
   1. FILMSTRIP
══════════════════════════════════ */
.cpd-fs {
  background:linear-gradient(180deg,#0f0f0d,#0a0a09 50%,#0f0f0d);
  border-top:1px solid rgba(253,224,71,.22);
  border-bottom:1px solid rgba(253,224,71,.22);
  box-shadow:inset 0 1px 0 rgba(253,224,71,.06),inset 0 -1px 0 rgba(253,224,71,.06);
}
.cpd-fs-body {
  display:flex; align-items:center;
  padding:10px clamp(6px,3%,36px); min-height:48px; position:relative;
}
.cpd-fs-body::before {
  content:''; position:absolute; inset:0; pointer-events:none;
  background:radial-gradient(ellipse 60% 100% at 50% 50%,rgba(253,224,71,.04),transparent 70%);
}
/* frame boxes — shrink on mobile but never hide */
.cpd-fs-box {
  flex-shrink:0; position:relative;
  width:clamp(18px,5.5vw,42px); height:clamp(14px,3.8vw,30px);
  border:1px solid rgba(253,224,71,.28);
  background:linear-gradient(135deg,rgba(253,224,71,.04),transparent 60%);
  box-shadow:inset 0 0 8px rgba(0,0,0,.8),0 0 4px rgba(253,224,71,.08);
  transition:all .3s;
}
.cpd-fs-box::before { content:''; position:absolute; inset:3px; border:1px solid rgba(253,224,71,.12); }
.cpd-fs-box::after  { content:''; position:absolute; top:2px; left:2px; right:2px; height:1px; background:rgba(255,255,255,.06); }
.cpd-fs-notch { position:absolute; bottom:0; right:0; width:5px; height:5px; border-top:1px solid rgba(253,224,71,.3); border-left:1px solid rgba(253,224,71,.3); }
/* hide frame boxes only on the smallest screens (360px) since they add nothing at that size */
@media(max-width:360px){ .cpd-fs-box{ display:none; } }

.cpd-fs-mid {
  flex:1; display:flex; align-items:center;
  gap:clamp(4px,1.5vw,14px); padding:0 clamp(4px,1.5vw,14px); min-width:0;
}
.cpd-fs-rule { flex:1; height:1px; min-width:4px; position:relative; }
.cpd-fs-rule--l { background:linear-gradient(90deg,transparent,rgba(253,224,71,.12) 20%,rgba(253,224,71,.55) 80%,rgba(253,224,71,.7)); }
.cpd-fs-rule--r { background:linear-gradient(90deg,rgba(253,224,71,.7),rgba(253,224,71,.55) 20%,rgba(253,224,71,.12) 80%,transparent); }
.cpd-fs-rule::after { content:''; position:absolute; top:-3px; width:1px; height:7px; background:rgba(253,224,71,.45); }
.cpd-fs-rule--l::after { right:0; }
.cpd-fs-rule--r::after { left:0; }
.cpd-fs-lbl {
  color:#fde047;
  text-shadow:0 0 12px rgba(253,224,71,.6),0 0 28px rgba(253,224,71,.22);
  animation:cpdFlicker 9s ease-in-out infinite;
  position:relative; z-index:1;
}
/* vu bars — always visible, shrink gracefully */
.cpd-fs-vu {
  position:absolute; bottom:3px; left:50%; transform:translateX(-50%);
  display:flex; gap:2px; align-items:flex-end;
  height:3px; width:clamp(28px,8vw,72px);
}
.cpd-fs-vu-bar { flex:1; height:100%; border-radius:1px; position:relative; overflow:hidden; background:rgba(253,224,71,.06); }
.cpd-fs-vu-bar::after { content:''; position:absolute; top:0; left:0; height:100%; border-radius:1px; background:linear-gradient(90deg,rgba(253,224,71,.2),rgba(253,224,71,.6)); }
.cpd-fs-vu-bar:nth-child(1)::after { animation:cpdVuL 2.1s ease-in-out infinite; }
.cpd-fs-vu-bar:nth-child(2)::after { animation:cpdVuR 1.8s ease-in-out infinite .3s; }

/* ══════════════════════════════════
   2. SCANLINE
══════════════════════════════════ */
.cpd-scan {
  background:linear-gradient(180deg,#060a0f,#070c13 50%,#060a0f);
  border-top:1px solid rgba(50,197,244,.22);
  border-bottom:1px solid rgba(50,197,244,.22);
  box-shadow:inset 0 1px 0 rgba(50,197,244,.07),inset 0 -1px 0 rgba(50,197,244,.07);
  position:relative;
}
.cpd-scan::after {
  content:''; position:absolute; top:0; bottom:0; width:340px;
  background:linear-gradient(90deg,transparent,rgba(50,197,244,.06) 30%,rgba(50,197,244,.14) 50%,rgba(50,197,244,.06) 70%,transparent);
  animation:cpdBeam 4.4s cubic-bezier(.4,0,.6,1) infinite .8s;
  pointer-events:none;
}
.cpd-scan-body {
  display:flex; align-items:center;
  padding:8px clamp(6px,4vw,44px);
  gap:clamp(5px,1.8vw,18px);
  min-height:52px; position:relative; z-index:1;
}
/* lens — scales down fluidly, never hidden */
.cpd-scan-lens {
  flex-shrink:0; position:relative;
  width:clamp(24px,5.5vw,42px); height:clamp(24px,5.5vw,42px);
  display:flex; align-items:center; justify-content:center;
}
.cpd-scan-lens-outer {
  position:absolute; inset:0; border-radius:50%;
  border:1px solid rgba(50,197,244,.25);
  box-shadow:inset 0 0 10px rgba(50,197,244,.08),0 0 8px rgba(50,197,244,.12);
}
.cpd-scan-lens::before,.cpd-scan-lens::after {
  content:''; position:absolute; background:rgba(50,197,244,.18); z-index:1;
}
.cpd-scan-lens::before { top:50%; left:15%; right:15%; height:1px; margin-top:-.5px; }
.cpd-scan-lens::after  { left:50%; top:15%; bottom:15%; width:1px; margin-left:-.5px; }
.cpd-scan-ring { position:absolute; inset:4px; border:1px dashed rgba(50,197,244,.2); border-radius:50%; }
.cpd-scan-spoke {
  position:absolute; top:50%; left:50%;
  width:1px; height:16px;
  background:linear-gradient(to top,rgba(50,197,244,.55),transparent);
  transform-origin:bottom center; margin-left:-.5px; margin-top:-16px;
}
.cpd-scan-core {
  width:clamp(8px,2vw,13px); height:clamp(8px,2vw,13px); border-radius:50%; z-index:2;
  background:radial-gradient(circle at 35% 35%,rgba(180,240,255,.9),rgba(50,197,244,.6) 50%,rgba(20,100,140,.4));
  border:1px solid rgba(50,197,244,.6);
  box-shadow:0 0 8px rgba(50,197,244,.8),0 0 20px rgba(50,197,244,.3),inset 0 1px 0 rgba(255,255,255,.4);
  animation:cpdCorePulse 2s ease-in-out infinite;
}
/* vdivider — hide only below 360px */
.cpd-scan-vdiv {
  width:1px; height:28px; flex-shrink:0;
  background:linear-gradient(180deg,transparent,rgba(50,197,244,.3),transparent);
}
@media(max-width:360px){ .cpd-scan-vdiv{ display:none; } }

.cpd-scan-info { flex:1; min-width:0; display:flex; flex-direction:column; gap:3px; overflow:hidden; }
.cpd-scan-seq {
  font-family:'DM Mono',monospace; font-size:clamp(.36rem,1vw,.48rem);
  font-weight:300; letter-spacing:clamp(1px,.8vw,5px);
  color:rgba(50,197,244,.55); text-transform:uppercase;
}
.cpd-scan-lbl { color:rgba(255,255,255,.92); text-shadow:0 0 18px rgba(50,197,244,.35); }

/* db bars — scale down, keep animating */
.cpd-scan-db {
  display:flex; flex-direction:column; gap:2px; flex-shrink:0;
  width:clamp(14px,3.5vw,34px);
}
.cpd-scan-db-bar { height:3px; border-radius:1px; background:rgba(50,197,244,.1); position:relative; overflow:hidden; }
.cpd-scan-db-bar::after { content:''; position:absolute; top:0; left:0; height:100%; border-radius:1px; background:linear-gradient(90deg,rgba(50,197,244,.35),rgba(50,197,244,.9)); }
.cpd-scan-db-bar:nth-child(1)::after { animation:cpdVuL 1.9s ease-in-out infinite; }
.cpd-scan-db-bar:nth-child(2)::after { animation:cpdVuR 2.3s ease-in-out infinite .4s; }
.cpd-scan-db-bar:nth-child(3)::after { animation:cpdVuM 1.7s ease-in-out infinite .9s; }

/* signal dots — always visible, shrink on mobile */
.cpd-scan-sig { display:flex; gap:clamp(3px,1vw,5px); align-items:center; flex-shrink:0; }
.cpd-scan-dot {
  width:clamp(5px,1.5vw,7px); height:clamp(5px,1.5vw,7px); border-radius:50%;
  border:1px solid rgba(255,255,255,.1); background:rgba(255,255,255,.06);
}
.cpd-scan-dot--on { background:#32c5f4; border-color:rgba(50,197,244,.8); animation:cpdDotOn 1.1s step-end infinite; }

/* ══════════════════════════════════
   3. REEL
══════════════════════════════════ */
.cpd-reel {
  background:linear-gradient(180deg,#0a0a08,#070705 50%,#0a0a08);
  border-top:1px solid rgba(253,224,71,.18);
  border-bottom:1px solid rgba(253,224,71,.18);
  box-shadow:inset 0 1px 0 rgba(253,224,71,.05),inset 0 -1px 0 rgba(253,224,71,.05);
}
.cpd-reel-body {
  display:flex; align-items:center;
  padding:10px clamp(6px,4vw,44px);
  gap:clamp(6px,2vw,24px); min-height:54px;
}
/* rules — shrink gracefully */
.cpd-reel-rule { flex:1; min-width:4px; display:flex; flex-direction:column; gap:4px; }
.cpd-reel-rl { height:1px; }
.cpd-reel-rule--l .cpd-reel-rl:nth-child(1){ background:linear-gradient(90deg,transparent,rgba(253,224,71,.55)); }
.cpd-reel-rule--l .cpd-reel-rl:nth-child(2){ background:linear-gradient(90deg,transparent,rgba(253,224,71,.16)); height:.5px; }
.cpd-reel-rule--r .cpd-reel-rl:nth-child(1){ background:linear-gradient(90deg,rgba(50,197,244,.4),transparent); }
.cpd-reel-rule--r .cpd-reel-rl:nth-child(2){ background:linear-gradient(90deg,rgba(50,197,244,.14),transparent); height:.5px; }
@media(max-width:360px){
  .cpd-reel-rule{ min-width:2px; flex:0 0 2px; }
  .cpd-reel-rl:nth-child(2){ display:none; }
}

/* hub — always spinning, scales down */
.cpd-reel-hub {
  flex-shrink:0; position:relative;
  width:clamp(28px,7vw,54px); height:clamp(28px,7vw,54px);
  display:flex; align-items:center; justify-content:center;
}
.cpd-reel-outer-ring {
  position:absolute; inset:0; border-radius:50%;
  border:1px solid rgba(253,224,71,.18);
  box-shadow:inset 0 0 12px rgba(0,0,0,.9),0 0 6px rgba(253,224,71,.1);
  background:radial-gradient(circle at 35% 25%,rgba(253,224,71,.05),transparent 60%);
}
.cpd-reel-spokes { position:absolute; inset:0; border-radius:50%; }
.cpd-reel-spoke {
  position:absolute; top:50%; left:50%;
  width:1.5px; height:calc(50% - 8px);
  transform-origin:0 100%;
  background:linear-gradient(to top,rgba(253,224,71,.65),rgba(253,224,71,.1));
  margin-left:-.75px;
}
.cpd-reel-sprocket {
  position:absolute; top:50%; left:50%;
  width:clamp(3px,1vw,5px); height:clamp(3px,1vw,5px); border-radius:50%;
  margin:-2.5px;
  background:#050500; border:1px solid rgba(253,224,71,.35);
}
.cpd-reel-core {
  width:clamp(10px,2.5vw,18px); height:clamp(10px,2.5vw,18px); border-radius:50%; z-index:3;
  background:radial-gradient(circle at 35% 30%,rgba(80,60,0,.9),#1a1400 70%);
  border:1.5px solid rgba(253,224,71,.65);
  box-shadow:0 0 8px rgba(253,224,71,.3),0 0 20px rgba(253,224,71,.1),inset 0 1px 0 rgba(255,220,50,.3);
  animation:cpdPulseGlow 3s ease-in-out infinite;
}
.cpd-reel-lbl { color:rgba(255,255,255,.88); text-shadow:0 0 14px rgba(253,224,71,.2); flex-shrink:1; min-width:0; overflow:hidden; text-overflow:ellipsis; }

/* ══════════════════════════════════
   4. TIMECODE
══════════════════════════════════ */
.cpd-tc {
  background:linear-gradient(180deg,#0c0c0a,#090908 50%,#0c0c0a);
  border-top:1px solid rgba(253,224,71,.22);
  border-bottom:1px solid rgba(253,224,71,.22);
}
.cpd-tc-body { display:flex; align-items:stretch; min-height:52px; }
/* clapper — shrinks, never hides */
.cpd-tc-clap {
  flex-shrink:0; width:clamp(28px,8vw,66px);
  background:#0d0d0b; border-right:1px solid rgba(255,255,255,.06);
  display:flex; flex-direction:column; overflow:hidden;
  box-shadow:inset -4px 0 12px rgba(0,0,0,.6);
}
.cpd-tc-stripes { display:flex; height:clamp(10px,2.5vw,20px); overflow:hidden; }
.cpd-tc-stripe { flex:1; }
.cpd-tc-stripe--y { background:linear-gradient(180deg,#ffe566,#d4b800); box-shadow:inset 0 -1px 0 rgba(0,0,0,.3); }
.cpd-tc-stripe--k { background:linear-gradient(180deg,#1a1a18,#0d0d0b); }
.cpd-tc-clap-base { flex:1; display:flex; align-items:center; justify-content:center; background:linear-gradient(180deg,#111,#0a0a0a); padding:3px 2px; }
.cpd-tc-scn { font-family:'Bebas Neue',sans-serif; font-size:clamp(.44rem,1.8vw,.8rem); letter-spacing:2px; color:rgba(255,255,255,.38); text-shadow:0 1px 0 rgba(0,0,0,.8); }
/* hide clapper only at 320px */
@media(max-width:340px){ .cpd-tc-clap{ display:none; } }

.cpd-tc-content {
  flex:1; display:flex; align-items:center;
  padding:0 clamp(6px,3%,32px); gap:clamp(4px,1.5vw,18px); min-width:0; overflow:hidden;
}
.cpd-tc-left { display:flex; align-items:center; gap:clamp(3px,1vw,10px); flex-shrink:1; min-width:0; overflow:hidden; }
.cpd-tc-seq {
  font-family:'DM Mono',monospace; font-size:clamp(.34rem,1vw,.52rem);
  font-weight:300; letter-spacing:clamp(1px,.6vw,4px);
  color:rgba(253,224,71,.62); white-space:nowrap; flex-shrink:0;
}
/* hide SCENE XX label on small but keep label and REC */
@media(max-width:420px){ .cpd-tc-seq{ display:none; } }
.cpd-tc-slash { color:rgba(255,255,255,.14); font-size:1rem; flex-shrink:0; line-height:1; }
@media(max-width:420px){ .cpd-tc-slash{ display:none; } }
.cpd-tc-lbl { color:rgba(255,255,255,.92); text-shadow:0 0 16px rgba(253,224,71,.18); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.cpd-tc-rule { flex:1; height:1px; min-width:6px; background:linear-gradient(90deg,rgba(253,224,71,.22),rgba(50,197,244,.15),transparent); }
/* REC stays always — it's an animation */
.cpd-tc-right { flex-shrink:0; display:flex; flex-direction:column; gap:3px; align-items:flex-end; }
.cpd-tc-rec {
  font-family:'DM Mono',monospace; font-size:clamp(.42rem,1.3vw,.58rem);
  font-weight:500; letter-spacing:2px; color:#ff3737;
  text-shadow:0 0 8px rgba(255,55,55,.7);
  animation:cpdRec 1.1s step-end infinite; white-space:nowrap;
}
.cpd-tc-fps {
  font-family:'DM Mono',monospace; font-size:clamp(.3rem,.9vw,.44rem);
  font-weight:300; letter-spacing:2px; color:rgba(255,255,255,.18); white-space:nowrap;
}
@media(max-width:360px){ .cpd-tc-fps{ display:none; } }

/* ══════════════════════════════════
   5. SLASH
══════════════════════════════════ */
.cpd-slash-wrap { background:#000; }
.cpd-slash-edge {
  height:7px;
  background:repeating-linear-gradient(90deg,rgba(253,224,71,.12) 0,rgba(253,224,71,.12) 8px,transparent 8px,transparent 16px);
  border-bottom:1px solid rgba(253,224,71,.1);
  animation:cpdHatch 3s linear infinite;
}
.cpd-slash-edge--bot { border-top:1px solid rgba(253,224,71,.1); border-bottom:none; animation-direction:reverse; }
.cpd-slash-main {
  background:linear-gradient(180deg,#0d0d0b,#080806 50%,#0d0d0b);
  border-top:1px solid rgba(253,224,71,.26);
  border-bottom:1px solid rgba(253,224,71,.26);
  box-shadow:inset 0 2px 8px rgba(0,0,0,.7),inset 0 -2px 8px rgba(0,0,0,.7);
}
.cpd-slash-body {
  display:flex; align-items:center;
  padding:9px clamp(6px,4vw,44px);
  gap:clamp(6px,1.8vw,20px); min-height:50px;
}
.cpd-slash-num {
  font-family:'Bebas Neue',sans-serif;
  font-size:clamp(1.3rem,5vw,2.8rem);
  color:rgba(253,224,71,.78); line-height:1; flex-shrink:0; letter-spacing:3px;
  text-shadow:0 0 20px rgba(253,224,71,.4),0 2px 0 rgba(0,0,0,.8); position:relative;
}
.cpd-slash-num::after { content:''; position:absolute; bottom:-2px; left:0; right:0; height:2px; background:linear-gradient(90deg,rgba(253,224,71,.5),transparent); border-radius:1px; }
.cpd-slash-rule { height:1px; flex:1; min-width:4px; }
.cpd-slash-rule--y { background:linear-gradient(90deg,rgba(253,224,71,.6),rgba(253,224,71,.05)); box-shadow:0 0 4px rgba(253,224,71,.1); }
.cpd-slash-rule--c { background:linear-gradient(90deg,rgba(50,197,244,.05),rgba(50,197,244,.5)); }
/* hide second rule on tiny screens */
@media(max-width:380px){ .cpd-slash-rule--c{ display:none; } }
.cpd-slash-lbl { color:rgba(255,255,255,.92); text-shadow:0 0 20px rgba(253,224,71,.14); flex-shrink:1; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.cpd-slash-aspect {
  font-family:'DM Mono',monospace; font-size:clamp(.4rem,1.2vw,.6rem);
  letter-spacing:2px; color:rgba(50,197,244,.35); flex-shrink:0;
  border:1px solid rgba(50,197,244,.15); padding:2px 4px; border-radius:2px; white-space:nowrap;
}
/* aspect ratio hides at 400px — it's purely decorative */
@media(max-width:400px){ .cpd-slash-aspect{ display:none; } }

/* ══════════════════════════════════
   6. MARQUEE
══════════════════════════════════ */
.cpd-mq {
  background:linear-gradient(180deg,#0a0a08,#070705 50%,#0a0a08);
  border-top:1px solid rgba(253,224,71,.28);
  border-bottom:1px solid rgba(253,224,71,.28);
  overflow:hidden;
}
.cpd-mq-bulbs {
  display:flex; justify-content:space-around; align-items:center; padding:5px 0;
  background:linear-gradient(180deg,#111108,#0d0d0b);
  border-bottom:1px solid rgba(0,0,0,.4);
  box-shadow:inset 0 -2px 6px rgba(0,0,0,.5);
}
.cpd-mq-bulbs--bot { border-top:1px solid rgba(0,0,0,.4); border-bottom:none; box-shadow:inset 0 2px 6px rgba(0,0,0,.5); }
/* bulbs scale down but NEVER hide — they're the animation */
.cpd-mq-bulb {
  width:clamp(3px,1.2vw,6px); height:clamp(3px,1.2vw,6px); border-radius:50%;
  background:radial-gradient(circle at 35% 30%,#fff8c0,#fde047 50%,#b8930a);
  border:1px solid rgba(253,224,71,.35);
  flex-shrink:0;
}
.cpd-mq-row { overflow:hidden; white-space:nowrap; }
.cpd-mq-row span { display:inline-block; }
.cpd-mq-row--fwd { padding:8px 0; background:linear-gradient(180deg,#080806,#060604); border-bottom:1px solid rgba(255,255,255,.03); }
.cpd-mq-row--fwd span {
  font-family:'DM Mono',monospace; font-size:clamp(.42rem,1.5vw,.56rem);
  font-weight:400; letter-spacing:clamp(2px,1.4vw,8px);
  color:rgba(253,224,71,.72); text-transform:uppercase;
  text-shadow:0 0 10px rgba(253,224,71,.3);
}
.cpd-mq-row--rev { padding:7px 0; background:linear-gradient(180deg,#060604,#040402); }
.cpd-mq-row--rev span {
  font-family:'DM Mono',monospace; font-size:clamp(.42rem,1.5vw,.56rem);
  font-weight:300; letter-spacing:clamp(2px,1.4vw,8px);
  color:rgba(50,197,244,.75); text-transform:uppercase;
  text-shadow:0 0 10px rgba(50,197,244,.3);
}
`,y_=({color:e=`#fde047`,opacity:t=.88,variant:n=`y`})=>(0,Q.jsx)(`div`,{className:`cpd-perfs cpd-perfs--${n}`,style:{"--ph-col":e,"--ph-op":String(t)},children:(0,Q.jsx)(`div`,{className:`cpd-perfs-track`,children:[0,1,2,3].flatMap(e=>Array.from({length:40},(t,n)=>(0,Q.jsx)(`span`,{className:`cpd-perf-hole`},`${e}-${n}`)))})}),b_=({label:e})=>(0,Q.jsxs)(`div`,{className:`cpd-fs`,children:[(0,Q.jsx)(y_,{}),(0,Q.jsxs)(`div`,{className:`cpd-fs-body`,children:[(0,Q.jsx)(`div`,{className:`cpd-fs-box`,children:(0,Q.jsx)(`div`,{className:`cpd-fs-notch`})}),(0,Q.jsxs)(`div`,{className:`cpd-fs-mid`,children:[(0,Q.jsx)(`div`,{className:`cpd-fs-rule cpd-fs-rule--l`}),(0,Q.jsx)(`span`,{className:`cpd-lbl cpd-fs-lbl`,children:e}),(0,Q.jsx)(`div`,{className:`cpd-fs-rule cpd-fs-rule--r`})]}),(0,Q.jsx)(`div`,{className:`cpd-fs-box`,children:(0,Q.jsx)(`div`,{className:`cpd-fs-notch`})}),(0,Q.jsxs)(`div`,{className:`cpd-fs-vu`,children:[(0,Q.jsx)(`div`,{className:`cpd-fs-vu-bar`}),(0,Q.jsx)(`div`,{className:`cpd-fs-vu-bar`})]})]}),(0,Q.jsx)(y_,{})]}),x_=({label:e,index:t})=>(0,Q.jsxs)(`div`,{className:`cpd-scan`,children:[(0,Q.jsx)(y_,{color:`#32c5f4`,opacity:.65,variant:`c`}),(0,Q.jsxs)(`div`,{className:`cpd-scan-body`,children:[(0,Q.jsxs)(`div`,{className:`cpd-scan-lens`,children:[(0,Q.jsx)(`div`,{className:`cpd-scan-lens-outer`}),(0,Q.jsx)($.div,{className:`cpd-scan-ring`,style:{position:`absolute`,inset:4,borderRadius:`50%`},animate:{rotate:360},transition:{duration:14,repeat:1/0,ease:`linear`},children:Array.from({length:8},(e,t)=>(0,Q.jsx)(`span`,{className:`cpd-scan-spoke`,style:{transform:`rotate(${t*45}deg)`}},t))}),(0,Q.jsx)(`div`,{className:`cpd-scan-core`})]}),(0,Q.jsx)(`div`,{className:`cpd-scan-vdiv`}),(0,Q.jsxs)(`div`,{className:`cpd-scan-info`,children:[(0,Q.jsxs)(`span`,{className:`cpd-scan-seq`,children:[`FRAME `,__(t)]}),(0,Q.jsx)(`span`,{className:`cpd-lbl cpd-scan-lbl`,children:e})]}),(0,Q.jsxs)(`div`,{className:`cpd-scan-db`,children:[(0,Q.jsx)(`div`,{className:`cpd-scan-db-bar`}),(0,Q.jsx)(`div`,{className:`cpd-scan-db-bar`}),(0,Q.jsx)(`div`,{className:`cpd-scan-db-bar`})]}),(0,Q.jsxs)(`div`,{className:`cpd-scan-sig`,children:[(0,Q.jsx)(`div`,{className:`cpd-scan-dot`}),(0,Q.jsx)(`div`,{className:`cpd-scan-dot`}),(0,Q.jsx)(`div`,{className:`cpd-scan-dot cpd-scan-dot--on`})]})]}),(0,Q.jsx)(y_,{color:`#32c5f4`,opacity:.65,variant:`c`})]}),S_=({label:e})=>(0,Q.jsxs)(`div`,{className:`cpd-reel`,children:[(0,Q.jsx)(y_,{opacity:.62}),(0,Q.jsxs)(`div`,{className:`cpd-reel-body`,children:[(0,Q.jsxs)(`div`,{className:`cpd-reel-rule cpd-reel-rule--l`,children:[(0,Q.jsx)(`div`,{className:`cpd-reel-rl`}),(0,Q.jsx)(`div`,{className:`cpd-reel-rl`})]}),(0,Q.jsxs)(`div`,{className:`cpd-reel-hub`,children:[(0,Q.jsx)(`div`,{className:`cpd-reel-outer-ring`}),(0,Q.jsxs)($.div,{className:`cpd-reel-spokes`,animate:{rotate:360},transition:{duration:7,repeat:1/0,ease:`linear`},children:[Array.from({length:6},(e,t)=>(0,Q.jsx)(`div`,{className:`cpd-reel-spoke`,style:{transform:`rotate(${t*60}deg)`}},t)),Array.from({length:6},(e,t)=>(0,Q.jsx)(`div`,{className:`cpd-reel-sprocket`,style:{transform:`rotate(${t*60+30}deg) translateY(-21px)`}},`sp${t}`))]}),(0,Q.jsx)(`div`,{className:`cpd-reel-core`})]}),(0,Q.jsx)(`span`,{className:`cpd-lbl cpd-reel-lbl`,children:e}),(0,Q.jsxs)(`div`,{className:`cpd-reel-rule cpd-reel-rule--r`,children:[(0,Q.jsx)(`div`,{className:`cpd-reel-rl`}),(0,Q.jsx)(`div`,{className:`cpd-reel-rl`})]})]}),(0,Q.jsx)(y_,{opacity:.62})]}),C_=({label:e,index:t})=>(0,Q.jsxs)(`div`,{className:`cpd-tc`,children:[(0,Q.jsx)(y_,{opacity:.68}),(0,Q.jsxs)(`div`,{className:`cpd-tc-body`,children:[(0,Q.jsxs)(`div`,{className:`cpd-tc-clap`,children:[(0,Q.jsx)(`div`,{className:`cpd-tc-stripes`,children:Array.from({length:8},(e,t)=>(0,Q.jsx)(`div`,{className:`cpd-tc-stripe ${t%2==0?`cpd-tc-stripe--y`:`cpd-tc-stripe--k`}`},t))}),(0,Q.jsx)(`div`,{className:`cpd-tc-clap-base`,children:(0,Q.jsxs)(`span`,{className:`cpd-tc-scn`,children:[`SC `,__(t)]})})]}),(0,Q.jsxs)(`div`,{className:`cpd-tc-content`,children:[(0,Q.jsxs)(`div`,{className:`cpd-tc-left`,children:[(0,Q.jsxs)(`span`,{className:`cpd-tc-seq`,children:[`SCENE `,__(t)]}),(0,Q.jsx)(`span`,{className:`cpd-tc-slash`,children:`／`}),(0,Q.jsx)(`span`,{className:`cpd-lbl cpd-tc-lbl`,children:e})]}),(0,Q.jsx)(`div`,{className:`cpd-tc-rule`}),(0,Q.jsxs)(`div`,{className:`cpd-tc-right`,children:[(0,Q.jsx)(`span`,{className:`cpd-tc-rec`,children:`● REC`}),(0,Q.jsx)(`span`,{className:`cpd-tc-fps`,children:`24 FPS`})]})]})]}),(0,Q.jsx)(y_,{opacity:.68})]}),w_=({label:e,index:t})=>(0,Q.jsxs)(`div`,{className:`cpd-slash-wrap`,children:[(0,Q.jsx)(`div`,{className:`cpd-slash-edge`}),(0,Q.jsxs)(`div`,{className:`cpd-slash-main`,children:[(0,Q.jsx)(y_,{opacity:.55}),(0,Q.jsxs)(`div`,{className:`cpd-slash-body`,children:[(0,Q.jsx)(`div`,{className:`cpd-slash-num`,children:__(t)}),(0,Q.jsx)(`div`,{className:`cpd-slash-rule cpd-slash-rule--y`}),(0,Q.jsx)(`span`,{className:`cpd-lbl cpd-slash-lbl`,children:e}),(0,Q.jsx)(`div`,{className:`cpd-slash-rule cpd-slash-rule--c`}),(0,Q.jsx)(`div`,{className:`cpd-slash-aspect`,children:`2.39:1`})]}),(0,Q.jsx)(y_,{opacity:.55})]}),(0,Q.jsx)(`div`,{className:`cpd-slash-edge cpd-slash-edge--bot`})]}),T_=({label:e})=>{let t=`${e} ★ `.repeat(18);return(0,Q.jsxs)(`div`,{className:`cpd-mq`,children:[(0,Q.jsx)(`div`,{className:`cpd-mq-bulbs`,children:Array.from({length:34},(e,t)=>(0,Q.jsx)($.div,{className:`cpd-mq-bulb`,animate:{opacity:[.15,1,.15],scale:[.82,1,.82]},transition:{duration:1.6,repeat:1/0,delay:t*.09%1.6,ease:`easeInOut`}},t))}),(0,Q.jsx)(`div`,{className:`cpd-mq-row cpd-mq-row--fwd`,children:(0,Q.jsxs)($.span,{animate:{x:[`0%`,`-50%`]},transition:{duration:30,repeat:1/0,ease:`linear`},children:[t,t]})}),(0,Q.jsx)(`div`,{className:`cpd-mq-row cpd-mq-row--rev`,children:(0,Q.jsxs)($.span,{animate:{x:[`-50%`,`0%`]},transition:{duration:34,repeat:1/0,ease:`linear`},children:[t,t]})}),(0,Q.jsx)(`div`,{className:`cpd-mq-bulbs cpd-mq-bulbs--bot`,children:Array.from({length:34},(e,t)=>(0,Q.jsx)($.div,{className:`cpd-mq-bulb`,animate:{opacity:[1,.15,1],scale:[1,.82,1]},transition:{duration:1.6,repeat:1/0,delay:t*.09%1.6,ease:`easeInOut`}},t))})]})},E_=({variant:e=`filmstrip`,label:t=`SECTION`,index:n=1})=>{let r=(0,C.useRef)(null),i=eg(r,{once:!0,margin:`-60px`});return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`style`,{children:v_}),(0,Q.jsxs)(`div`,{ref:r,className:`cpd-root${i?` in`:``}`,children:[e===`filmstrip`&&(0,Q.jsx)(b_,{label:t}),e===`scanline`&&(0,Q.jsx)(x_,{label:t,index:n}),e===`reel`&&(0,Q.jsx)(S_,{label:t}),e===`timecode`&&(0,Q.jsx)(C_,{label:t,index:n}),e===`slash`&&(0,Q.jsx)(w_,{label:t,index:n}),e===`marquee`&&(0,Q.jsx)(T_,{label:t})]})]})},D_=[{id:`home`,label:`HOME`,sub:`WELCOME`,ref:`homeRef`,route:null},{id:`about`,label:`ABOUT`,sub:`IDENTITY`,ref:`aboutRef`,route:null},{id:`channels`,label:`CINEMA CHANNELS`,sub:`VJ · FILM · RJ`,ref:null,route:null},{id:`host`,label:`HOST`,sub:`ON STAGE`,ref:null,route:null},{id:`director`,label:`DIRECTOR`,sub:`BEHIND LENS`,ref:null,route:null},{id:`producer`,label:`CREATIVE PRODUCER`,sub:`BACKING THE RIGHT`,ref:`promotionsRef`,route:null},{id:`accelerator`,label:`ACCELERATOR`,sub:`INDUSTRY LINKS`,ref:null,route:null},{id:`inkblood`,label:`INKBLOOD`,sub:`BTS COMIC`,ref:null,route:null},{id:`shorts`,label:`SHORTS`,sub:`PROMOTIONS`,ref:null,route:null},{id:`work`,label:`FINISHED PROJECTS`,sub:`PORTFOLIO`,ref:`workRef`,route:null},{id:`partners`,label:`TIE-UP PARTNERS`,sub:`COLLABORATIONS`,ref:null,route:null},{id:`contact`,label:`CONTACT`,sub:`BOOK A SESSION`,ref:`contactRef`,route:null},{id:`munai`,label:`MUNAI`,sub:`ORIGINALS`,ref:null,route:`/munai`}];function O_({refs:e}){let t=dt(),n=ct().pathname.includes(`/munai`),[r,i]=(0,C.useState)(0),[a,o]=(0,C.useState)(!1),[s,c]=(0,C.useState)(!1),[l,u]=(0,C.useState)(!1),d=(0,C.useRef)(null),f=(0,C.useRef)(0);(0,C.useEffect)(()=>{if(n){c(!0);return}let e=()=>c(window.scrollY>80);return window.addEventListener(`scroll`,e,{passive:!0}),e(),()=>window.removeEventListener(`scroll`,e)},[n]),(0,C.useEffect)(()=>{if(n)return;let t=()=>{cancelAnimationFrame(f.current),f.current=requestAnimationFrame(()=>{let t=window.innerHeight*.4,n=0,r=1/0;D_.forEach((i,a)=>{let o=(i.ref?e[i.ref]?.current:null)||document.getElementById(i.id);if(!o)return;let s=o.getBoundingClientRect(),c=Math.abs(s.top+s.height/2-t);c<r&&(r=c,n=a)}),i(n)})};return window.addEventListener(`scroll`,t,{passive:!0}),t(),()=>window.removeEventListener(`scroll`,t)},[e,n]);let p=(0,C.useCallback)(()=>{t(`/`),u(!1),o(!1)},[t]),m=(0,C.useCallback)(r=>{if(r.route){t(r.route),u(!1),o(!1);return}if(n){t(`/`),setTimeout(()=>{let t=(r.ref?e[r.ref]?.current:null)||document.getElementById(r.id);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})},400),u(!1),o(!1);return}let i=(r.ref?e[r.ref]?.current:null)||document.getElementById(r.id);i&&i.scrollIntoView({behavior:`smooth`,block:`start`}),u(!1),o(!1)},[e,t,n]),h=()=>{d.current&&clearTimeout(d.current),o(!0)},g=()=>{d.current=setTimeout(()=>o(!1),400)},_=n?D_.find(e=>e.id===`munai`):D_[r];return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;700&display=swap');

        /* ════════════════════════════════
           DESKTOP VERTICAL STRIP
        ════════════════════════════════ */
        .cnav-wrap {
          position: fixed;
          right: 0; top: 50%;
          transform: translateY(-50%);
          z-index: 9500;
          display: flex;
          flex-direction: row;
          align-items: center;
          pointer-events: none;
          transition: opacity 0.4s, transform 0.4s;
        }
        .cnav-wrap.cnav-hidden {
          opacity: 0;
          pointer-events: none;
          transform: translateY(-50%) translateX(20px);
        }
        .cnav-wrap.cnav-visible {
          opacity: 1;
          pointer-events: all;
          transform: translateY(-50%) translateX(0);
        }

        /* active section floating label */
        .cnav-active-badge {
          pointer-events: none;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 2px;
          margin-right: 12px;
          opacity: 0;
          transform: translateX(6px);
          transition: opacity 0.3s, transform 0.3s;
        }
        .cnav-wrap.cnav-expanded .cnav-active-badge {
          opacity: 1;
          transform: translateX(0);
        }
        .cnav-badge-sub {
          font-family: 'Inter', sans-serif;
          font-size: 0.38rem; letter-spacing: 4px;
          color: rgba(50,197,244,0.6); text-transform: uppercase;
          white-space: nowrap;
        }
        .cnav-badge-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: 4px;
          color: rgba(255,255,255,0.5);
          line-height: 1; white-space: nowrap;
        }

        /* the strip */
        .cnav-strip {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          background: rgba(5,8,14,0.85);
          border: 1px solid rgba(50,197,244,0.10);
          border-right: none;
          padding: 10px 0;
          backdrop-filter: blur(12px);
          position: relative;
        }
        .cnav-strip::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 2px; height: 100%;
          background: linear-gradient(to bottom,
            transparent,
            rgba(50,197,244,0.35) 30%,
            rgba(253,224,71,0.35) 70%,
            transparent);
        }

        /* expand toggle */
        .cnav-toggle {
          pointer-events: all;
          position: absolute; left: -20px; top: 50%;
          transform: translateY(-50%);
          width: 20px; height: 40px;
          background: rgba(5,8,14,0.9);
          border: 1px solid rgba(50,197,244,0.15);
          border-right: none;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: rgba(255,255,255,0.4);
          transition: color 0.25s, background 0.25s;
        }
        .cnav-toggle:hover { background: rgba(50,197,244,0.08); color: #32c5f4; }

        /* each row */
        .cnav-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
          gap: 0;
          width: 100%;
          cursor: pointer;
          padding: 5px 10px 5px 0;
          transition: background 0.2s;
          position: relative;
        }
        .cnav-item:hover { background: rgba(50,197,244,0.04); }

        /* label — slides in when expanded */
        .cnav-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.44rem;
          letter-spacing: 3.5px;
          font-weight: 400;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          white-space: nowrap;
          max-width: 0;
          overflow: hidden;
          opacity: 0;
          margin-right: 0;
          transition: max-width 0.35s cubic-bezier(0.77,0,0.18,1),
                      opacity 0.28s ease,
                      color 0.2s,
                      margin-right 0.3s;
        }
        .cnav-wrap.cnav-expanded .cnav-label {
          max-width: 140px;
          opacity: 1;
          margin-right: 8px;
        }
        .cnav-item:hover .cnav-label,
        .cnav-item.cnav-active .cnav-label {
          color: rgba(255,255,255,0.85);
        }
        .cnav-item.cnav-active .cnav-label {
          color: #fde047;
        }

        /* dot */
        .cnav-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          flex-shrink: 0;
          transition: background 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .cnav-item:hover .cnav-dot {
          background: #32c5f4;
          transform: scale(1.4);
        }
        .cnav-item.cnav-active .cnav-dot {
          background: #fde047;
          box-shadow: 0 0 8px rgba(253,224,71,0.8);
          transform: scale(1.7);
        }

        /* section number ghost */
        .cnav-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.5rem;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.12);
          margin-right: 4px;
          min-width: 14px;
          text-align: right;
          flex-shrink: 0;
          max-width: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-width 0.35s cubic-bezier(0.77,0,0.18,1), opacity 0.28s;
        }
        .cnav-wrap.cnav-expanded .cnav-num {
          max-width: 20px;
          opacity: 1;
        }
        .cnav-item.cnav-active .cnav-num { color: rgba(253,224,71,0.3); }

        /* ════════════════════════════════
           MOBILE FAB + DRAWER
        ════════════════════════════════ */
        .cnav-fab {
          display: none;
          position: fixed;
          top: 0; right: 0;
          z-index: 9600;
          width: auto; height: auto;
          background: rgba(5,8,14,0.92);
          border: none;
          border-bottom: 1px solid rgba(253,224,71,0.25);
          border-left: 1px solid rgba(253,224,71,0.25);
          border-radius: 0 0 0 10px;
          align-items: center; justify-content: center;
          gap: 7px;
          padding: 7px 14px 8px;
          cursor: pointer;
          color: #fde047;
          pointer-events: all;
          transition: background 0.25s, border-color 0.25s;
        }
        .cnav-fab:active {
          background: rgba(10,20,32,0.98);
          border-color: rgba(253,224,71,0.5);
        }
        .cnav-fab-txt {
          font-family: 'Inter', sans-serif;
          font-size: 0.42rem; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: rgba(50,197,244,0.85);
          white-space: nowrap; max-width: 90px;
          overflow: hidden; text-overflow: ellipsis;
        }

        .cnav-drawer {
          display: none;
          position: fixed; inset: 0;
          z-index: 9550;
          background: rgba(0,0,0,0.92);
          backdrop-filter: blur(16px);
          flex-direction: column;
          padding: 56px 24px 40px;
          overflow-y: auto;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s;
        }
        .cnav-drawer.cnav-drawer-open {
          opacity: 1;
          pointer-events: all;
        }

        .cnav-drawer-close {
          position: absolute; top: 16px; right: 16px;
          width: 38px; height: 38px;
          border: 1px solid rgba(255,255,255,0.12);
          background: transparent;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: rgba(255,255,255,0.55);
        }

        .cnav-drawer-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: 6px;
          color: rgba(255,255,255,0.8);
          margin-bottom: 28px;
        }
        .cnav-drawer-title span { color: #fde047; }

        .cnav-drawer-list { display: flex; flex-direction: column; gap: 0; }

        .cnav-drawer-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 13px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          cursor: pointer;
          transition: padding-left 0.22s;
        }
        .cnav-drawer-item:hover { padding-left: 6px; }
        .cnav-drawer-item:last-child { border-bottom: none; }

        .cnav-drawer-item.cnav-drawer-active .cnav-drawer-dot { background: #fde047; box-shadow: 0 0 8px rgba(253,224,71,0.6); }
        .cnav-drawer-item.cnav-drawer-active .cnav-drawer-name { color: #fde047; }
        .cnav-drawer-item.cnav-drawer-route .cnav-drawer-name {
          color: rgba(253,224,71,0.7);
        }
        .cnav-drawer-item.cnav-drawer-route .cnav-drawer-dot {
          background: rgba(253,224,71,0.4);
        }
        .cnav-drawer-item.cnav-drawer-route:hover .cnav-drawer-name {
          color: #fde047;
        }

        .cnav-drawer-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: rgba(255,255,255,0.18); flex-shrink: 0;
          transition: background 0.2s;
        }
        .cnav-drawer-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.85rem; letter-spacing: 2px;
          color: rgba(255,255,255,0.1);
          min-width: 24px; flex-shrink: 0;
        }
        .cnav-drawer-item.cnav-drawer-active .cnav-drawer-num { color: rgba(253,224,71,0.25); }
        .cnav-drawer-text { flex: 1; }
        .cnav-drawer-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.2rem; letter-spacing: 3px;
          color: rgba(255,255,255,0.7);
          line-height: 1; display: block;
          transition: color 0.2s;
        }
        .cnav-drawer-sub {
          font-family: 'Inter', sans-serif;
          font-size: 0.38rem; letter-spacing: 4px;
          color: rgba(255,255,255,0.28);
          text-transform: uppercase;
          display: block; margin-top: 2px;
        }

        /* ════════════════════════════════
           RESPONSIVE
        ════════════════════════════════ */
        @media (max-width: 768px) {
          .cnav-wrap { display: none; }
          .cnav-fab  { display: flex; }
          .cnav-drawer { display: flex; }
        }
        @media (min-width: 769px) {
          .cnav-fab    { display: none !important; }
          .cnav-drawer { display: none !important; }
        }
      `}),(0,Q.jsxs)(`div`,{className:`cnav-wrap ${s?`cnav-visible`:`cnav-hidden`} ${a?`cnav-expanded`:``}`,onMouseEnter:h,onMouseLeave:g,children:[(0,Q.jsxs)(`div`,{className:`cnav-active-badge`,children:[n&&(0,Q.jsx)(`span`,{className:`cnav-badge-sub`,style:{color:`rgba(253,224,71,0.7)`},children:`← BACK TO MAIN SITE`}),(0,Q.jsx)(`span`,{className:`cnav-badge-sub`,children:_?.sub}),(0,Q.jsx)(`span`,{className:`cnav-badge-label`,children:_?.label})]}),(0,Q.jsx)(`div`,{className:`cnav-toggle`,onClick:()=>o(e=>!e),children:(0,Q.jsx)(`svg`,{viewBox:`0 0 12 12`,width:`9`,height:`9`,fill:`none`,children:(0,Q.jsx)(`path`,{d:a?`M8 2L4 6l4 4`:`M4 2l4 4-4 4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,Q.jsxs)(`div`,{className:`cnav-strip`,children:[n&&(0,Q.jsxs)(`div`,{className:`cnav-item cnav-home-pin`,onClick:p,title:`Back to Home`,style:{borderBottom:`1px solid rgba(253,224,71,0.15)`,marginBottom:`4px`,paddingBottom:`8px`},children:[(0,Q.jsx)(`span`,{className:`cnav-label`,style:{color:`rgba(253,224,71,0.8)`,maxWidth:`140px`,opacity:1,marginRight:`8px`},children:`← HOME`}),(0,Q.jsx)(`span`,{className:`cnav-dot`,style:{background:`#fde047`,boxShadow:`0 0 8px rgba(253,224,71,0.8)`}})]}),D_.map((e,t)=>(0,Q.jsxs)(`div`,{className:`cnav-item${!n&&r===t?` cnav-active`:``}${n&&e.id===`munai`?` cnav-active`:``}`,onClick:()=>m(e),title:e.label,children:[(0,Q.jsx)(`span`,{className:`cnav-num`,children:String(t+1).padStart(2,`0`)}),(0,Q.jsxs)(`span`,{className:`cnav-label`,children:[e.label,e.route?` ↗`:``]}),(0,Q.jsx)(`span`,{className:`cnav-dot`,style:e.route?{background:`rgba(253,224,71,0.35)`}:void 0})]},e.id))]})]}),(0,Q.jsxs)(`button`,{className:`cnav-fab`,onClick:()=>u(!0),"aria-label":`Open navigation`,children:[(0,Q.jsx)(`svg`,{viewBox:`0 0 20 20`,fill:`none`,width:`16`,height:`16`,children:(0,Q.jsx)(`path`,{d:`M3 5h14M3 10h14M3 15h14`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`})}),(0,Q.jsx)(`span`,{className:`cnav-fab-txt`,children:n?`← HOME`:_?.label})]}),(0,Q.jsxs)(`div`,{className:`cnav-drawer${l?` cnav-drawer-open`:``}`,style:{display:`flex`},children:[(0,Q.jsx)(`button`,{className:`cnav-drawer-close`,onClick:()=>u(!1),children:(0,Q.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,width:`13`,height:`13`,children:(0,Q.jsx)(`path`,{d:`M2 2l12 12M14 2L2 14`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})})}),(0,Q.jsx)(`h2`,{className:`cnav-drawer-title`,children:n?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`span`,{children:`MUNAI`}),` · NAVIGATE`]}):(0,Q.jsxs)(Q.Fragment,{children:[`NAVIGATE `,(0,Q.jsx)(`span`,{children:`·`})]})}),n&&(0,Q.jsxs)(`div`,{className:`cnav-drawer-item`,onClick:p,style:{marginBottom:`16px`,paddingBottom:`16px`,borderBottom:`1px solid rgba(253,224,71,0.15)`,background:`rgba(253,224,71,0.03)`,padding:`14px 12px`,borderRadius:`2px`},children:[(0,Q.jsx)(`span`,{className:`cnav-drawer-dot`,style:{background:`#fde047`,boxShadow:`0 0 7px rgba(253,224,71,0.6)`}}),(0,Q.jsx)(`span`,{className:`cnav-drawer-num`,style:{color:`rgba(253,224,71,0.35)`},children:`←`}),(0,Q.jsxs)(`div`,{className:`cnav-drawer-text`,children:[(0,Q.jsx)(`span`,{className:`cnav-drawer-name`,style:{color:`#fde047`},children:`BACK TO HOME`}),(0,Q.jsx)(`span`,{className:`cnav-drawer-sub`,children:`MAIN SITE`})]})]}),(0,Q.jsx)(`div`,{className:`cnav-drawer-list`,children:D_.map((e,t)=>(0,Q.jsxs)(`div`,{className:`cnav-drawer-item${!n&&r===t?` cnav-drawer-active`:``}${n&&e.id===`munai`?` cnav-drawer-active`:``}${e.route?` cnav-drawer-route`:``}`,onClick:()=>m(e),children:[(0,Q.jsx)(`span`,{className:`cnav-drawer-dot`}),(0,Q.jsx)(`span`,{className:`cnav-drawer-num`,children:String(t+1).padStart(2,`0`)}),(0,Q.jsxs)(`div`,{className:`cnav-drawer-text`,children:[(0,Q.jsxs)(`span`,{className:`cnav-drawer-name`,children:[e.label,e.route&&(0,Q.jsx)(`span`,{style:{fontSize:`0.5rem`,letterSpacing:`2px`,color:`rgba(253,224,71,0.5)`,marginLeft:`8px`,verticalAlign:`middle`},children:`↗`})]}),(0,Q.jsx)(`span`,{className:`cnav-drawer-sub`,children:e.sub})]})]},e.id))})]})]})}var k_=`https://www.instagram.com/reel/DJTP1Aiz1ps/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==`,A_=()=>{let e=[A.ComicPag0,A.ComicPag1,A.ComicPag2,A.ComicPag3,A.ComicPag4,A.ComicPag5,A.ComicPag6,A.ComicPag7],[t,n]=(0,C.useState)(0),[r,i]=(0,C.useState)(!1),a=(0,C.useRef)(null),o=r=>{let i=t+r;i>=0&&i<e.length&&n(i)};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');

        /* ═══════════════════════════════════════
           COMIC SECTION
        ═══════════════════════════════════════ */
        .ibs-comic-section {
          background: #0e0a04;
          color: #fff;
          padding: 100px 0 110px;
          overflow-x: hidden;
          position: relative;
        }
        .ibs-comic-ambient {
          position: absolute; top: 30%; left: 50%;
          transform: translate(-50%, -50%);
          width: 70%; height: 50%;
          background: radial-gradient(ellipse at center,
            rgba(253,224,71,0.04) 0%,
            rgba(180,100,20,0.03) 40%,
            transparent 70%);
          filter: blur(80px);
          pointer-events: none; z-index: 1;
        }
        .ibs-comic-cool-accent {
          position: absolute; bottom: 0; right: 0;
          width: 380px; height: 380px;
          background: radial-gradient(circle at bottom right, rgba(50,197,244,0.045) 0%, transparent 65%);
          pointer-events: none; z-index: 1;
        }
        .ibs-comic-section::before {
          content: ''; position: absolute;
          top: 0; left: 8%; right: 8%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(253,224,71,0.10) 50%, transparent);
          pointer-events: none;
        }

        /* ── Inner wrapper ── */
        .ibs-comic-inner {
          max-width: 1180px; margin: 0 auto;
          padding: 0 clamp(16px, 5%, 50px);
          position: relative; z-index: 5;
        }

        /* ── Comic Header ── */
        .ibs-comic-header {
          text-align: center; margin-bottom: 56px;
        }
        .ibs-comic-pre {
          display: inline-flex; align-items: center; gap: 12px; margin-bottom: 16px;
        }
        .ibs-comic-pre-line { width: 32px; height: 1px; background: #fde047; opacity: 0.5; }
        .ibs-comic-pre-text {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.5rem, 1.4vw, 0.65rem);
          font-weight: 600; letter-spacing: 5px;
          color: rgba(253,224,71,0.85); text-transform: uppercase;
        }
        .ibs-comic-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 9vw, 6.5rem);
          font-weight: 400; color: #fff;
          line-height: 0.95; letter-spacing: 3px; margin: 0 0 18px;
        }
        .ibs-comic-title-cyan   { color: #32c5f4; }
        .ibs-comic-title-yellow { color: #fde047; }
        .ibs-comic-rule {
          width: 80px; height: 1px;
          background: linear-gradient(90deg, #32c5f4, #fde047);
          margin: 0 auto; opacity: 0.7;
        }

        /* ── BTS Image ── */
        .ibs-bts-wrap {
          margin: 0 0 72px;
        }
        .ibs-bts-container {
          position: relative;
          border: 1px solid rgba(253,224,71,0.08);
          background: #0a0702; overflow: hidden;
          transition: border-color 0.5s, box-shadow 0.5s;
        }
        .ibs-bts-container:hover {
          border-color: rgba(253,224,71,0.18);
          box-shadow: 0 30px 80px rgba(0,0,0,0.7), 0 0 40px rgba(253,200,80,0.06);
        }
        .ibs-bts-badge {
          position: absolute; top: 18px; left: 18px;
          display: flex; align-items: center; gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem, 1.2vw, 0.6rem);
          font-weight: 600; letter-spacing: 3px;
          color: rgba(255,255,255,0.85);
          background: rgba(14,10,4,0.82);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 7px 14px; z-index: 10; text-transform: uppercase;
          transition: border-color 0.3s, color 0.3s;
        }
        .ibs-bts-container:hover .ibs-bts-badge { border-color: #fde047; color: #fde047; }
        .ibs-bts-badge-dot {
          width: 6px; height: 6px; background: #32c5f4;
          border-radius: 50%; flex-shrink: 0;
        }
        .ibs-bts-img-wrap {
          width: 100%; aspect-ratio: 21/7;
          overflow: hidden; position: relative;
        }
        @media (max-width: 600px) {
          .ibs-bts-img-wrap { aspect-ratio: 16/9; }
        }
        .ibs-bts-img {
          width: 100%; height: 100%; object-fit: cover;
          object-position: center 20%;
          filter: contrast(1.06) brightness(0.85) sepia(0.08);
          transition: transform 0.6s ease; display: block;
        }
        .ibs-bts-container:hover .ibs-bts-img { transform: scale(1.03); }
        .ibs-bts-vignette {
          position: absolute; inset: 0;
          background: radial-gradient(circle, transparent 30%, rgba(14,10,4,0.72) 100%);
          pointer-events: none;
        }
        .ibs-bts-corner {
          position: absolute; z-index: 11;
          width: 22px; height: 22px; pointer-events: none;
        }
        .ibs-bts-corner::before,
        .ibs-bts-corner::after {
          content: ''; position: absolute; background: rgba(253,224,71,0.45);
        }
        .ibs-bts-corner-tl { top: 0; left: 0; }
        .ibs-bts-corner-tl::before { width: 100%; height: 1px; top: 0; left: 0; }
        .ibs-bts-corner-tl::after  { width: 1px; height: 100%; top: 0; left: 0; }
        .ibs-bts-corner-br { bottom: 0; right: 0; }
        .ibs-bts-corner-br::before { width: 100%; height: 1px; bottom: 0; right: 0; }
        .ibs-bts-corner-br::after  { width: 1px; height: 100%; bottom: 0; right: 0; }

        /* ── Comic Grid ── */
        .ibs-comic-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: clamp(28px, 5vw, 65px);
          align-items: center;
        }

        .ibs-book-wrap { max-width: 340px; margin: 0 auto; width: 100%; }
        .ibs-comic-sheet {
          aspect-ratio: 3/4.2;
          border: 1px solid rgba(253,224,71,0.10);
          position: relative; background: transparent;
          box-shadow: 0 20px 60px rgba(0,0,0,0.75), 0 0 30px rgba(253,200,80,0.05);
          overflow: hidden;
        }
        .ibs-comic-sheet-img {
          width: 100%; height: 100%; object-fit: contain; display: block;
        }
        .ibs-issue-tag {
          position: absolute; top: 12px; left: 12px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.85rem; letter-spacing: 3px;
          color: #000; background: #fde047;
          padding: 4px 10px; z-index: 4;
        }
        .ibs-nav-bar {
          display: flex; justify-content: space-between; align-items: center;
          margin-top: 20px; padding: 13px 18px;
          background: rgba(253,224,71,0.025);
          border: 1px solid rgba(253,224,71,0.08);
        }
        .ibs-nav-btn {
          position: relative; overflow: hidden;
          padding: 8px 20px;
          border: 1px solid #32c5f4; color: #32c5f4;
          background: transparent;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.5rem, 1.2vw, 0.6rem);
          font-weight: 600; letter-spacing: 3px; text-transform: uppercase;
          cursor: pointer; transition: color 0.35s;
        }
        .ibs-nav-btn::before {
          content: ''; position: absolute; inset: 0;
          background: #32c5f4;
          transform: scaleX(0); transform-origin: left; z-index: 0;
          transition: transform 0.35s cubic-bezier(0.77,0,0.18,1);
        }
        .ibs-nav-btn:hover:not(:disabled)::before { transform: scaleX(1); }
        .ibs-nav-btn:hover:not(:disabled) { color: #000; }
        .ibs-nav-btn span { position: relative; z-index: 1; }
        .ibs-nav-btn:disabled { opacity: 0.22; cursor: not-allowed; }
        .ibs-dots-row { display: flex; gap: 6px; align-items: center; }
        .ibs-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: rgba(255,255,255,0.12);
          transition: background 0.3s, width 0.3s, border-radius 0.3s;
        }
        .ibs-dot.active { background: #fde047; width: 18px; border-radius: 3px; }

        /* ── Vision Card ── */
        .ibs-vision-card {
          padding: clamp(24px, 4vw, 42px);
          background: rgba(253,224,71,0.02);
          border: 1px solid rgba(253,224,71,0.08);
          border-left: 2px solid rgba(253,224,71,0.30);
          position: relative; overflow: hidden;
          transition: border-color 0.4s, box-shadow 0.4s;
        }
        .ibs-vision-card:hover {
          border-color: rgba(253,224,71,0.20);
          box-shadow: 0 20px 60px rgba(0,0,0,0.55), 0 0 30px rgba(253,200,80,0.05);
        }
        .ibs-vision-pre { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
        .ibs-vision-pre-line { width: 28px; height: 1px; background: #fde047; opacity: 0.5; }
        .ibs-vision-pre-text {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.5rem, 1.2vw, 0.6rem);
          font-weight: 600; letter-spacing: 5px;
          color: rgba(253,224,71,0.85); text-transform: uppercase;
        }
        .ibs-vision-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 4.5vw, 4.2rem);
          font-weight: 400; color: #fde047;
          margin: 0 0 14px; letter-spacing: 3px; line-height: 1;
        }
        .ibs-vision-rule {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, rgba(253,224,71,0.25), rgba(50,197,244,0.2), transparent);
          margin-bottom: 24px;
        }
        .ibs-vision-lead {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.85rem, 1.3vw, 1rem);
          font-weight: 400; color: rgba(255,255,255,0.85);
          line-height: 1.75; margin-bottom: 18px;
        }
        .ibs-vision-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.78rem, 1.1vw, 0.875rem);
          font-weight: 300; color: rgba(255,255,255,0.40);
          line-height: 1.85; margin-bottom: 28px;
        }
        .ibs-vision-body strong { color: rgba(253,224,71,0.8); font-weight: 600; }

        /* ── CTA with hover video ── */
        .ibs-vision-cta-wrap {
          position: relative; display: block; width: 100%;
        }
        .ibs-vision-cta {
          position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          width: 100%; padding: 15px;
          border: 1px solid #fde047; color: #fde047;
          text-decoration: none; text-align: center;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.5rem, 1.2vw, 0.65rem);
          font-weight: 600; letter-spacing: 4px; text-transform: uppercase;
          transition: color 0.4s; cursor: pointer;
          z-index: 1;
        }
        .ibs-vision-cta::before {
          content: ''; position: absolute; inset: 0;
          background: #fde047;
          transform: scaleX(0); transform-origin: left; z-index: 0;
          transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
        }
        .ibs-vision-cta:hover::before { transform: scaleX(1); }
        .ibs-vision-cta:hover { color: #000; }
        .ibs-vision-cta span { position: relative; z-index: 1; }

        /* hover video preview — floats above the button */
        .ibs-cta-video-preview {
          position: absolute;
          bottom: calc(100% + 10px);
          left: 50%; transform: translateX(-50%);
          width: clamp(160px, 30vw, 220px);
          aspect-ratio: 9/16;
          background: #000;
          border: 1px solid rgba(253,224,71,0.3);
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0,0,0,0.85);
          opacity: 0; pointer-events: none;
          transition: opacity 0.3s ease, transform 0.3s ease;
          transform: translateX(-50%) translateY(8px);
          z-index: 20;
        }
        .ibs-cta-video-preview.visible {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
        .ibs-cta-video-preview video {
          width: 100%; height: 100%; object-fit: cover; display: block;
        }
        .ibs-cta-video-preview-tag {
          position: absolute; bottom: 0; left: 0; right: 0;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.75rem; letter-spacing: 3px;
          color: #000; background: #fde047;
          padding: 4px 0; text-align: center; text-transform: uppercase;
        }

        /* ══════════════════════════════════════
           SHADOW PROMOTION SECTION
        ══════════════════════════════════════ */
        .ibs-sh-section {
          background: #0a0a0e;
          padding: 90px clamp(16px, 5%, 60px) 110px;
          overflow: hidden; position: relative;
        }
        .ibs-sh-glow-tr {
          position: absolute; top: -80px; right: -80px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(140,80,255,0.06) 0%, transparent 60%);
          pointer-events: none; z-index: 0;
        }
        .ibs-sh-glow-bl {
          position: absolute; bottom: -60px; left: -60px;
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(50,197,244,0.05) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }
        .ibs-sh-section::before {
          content: ''; position: absolute;
          top: 0; left: 8%; right: 8%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(140,80,255,0.12) 50%, transparent);
          pointer-events: none;
        }
        .ibs-sh-inner {
          max-width: 1180px; margin: 0 auto;
          display: flex; align-items: center; gap: clamp(28px, 5vw, 65px);
          position: relative; z-index: 5;
        }
        .ibs-sh-left { flex: 1; min-width: 0; }
        .ibs-sh-pre { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .ibs-sh-pre-line { width: 32px; height: 1px; background: #fde047; opacity: 0.5; }
        .ibs-sh-pre-text {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.5rem, 1.4vw, 0.65rem);
          font-weight: 600; letter-spacing: 5px;
          color: rgba(253,224,71,0.85); text-transform: uppercase;
        }
        .ibs-sh-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.6rem, 6.5vw, 5.5rem);
          font-weight: 400; color: #fff;
          line-height: 0.95; letter-spacing: 3px; margin: 0 0 10px;
        }
        .ibs-sh-title-cyan { color: #32c5f4; }
        .ibs-sh-rule {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, rgba(253,224,71,0.25), rgba(140,80,255,0.20), rgba(50,197,244,0.15), transparent);
          margin-bottom: 28px;
        }
        .ibs-sh-story {
          background: rgba(140,80,255,0.025);
          border: 1px solid rgba(140,80,255,0.10);
          border-left: 1px solid rgba(50,197,244,0.22);
          padding: clamp(18px, 3vw, 28px);
          position: relative; overflow: hidden;
          transition: border-color 0.4s, box-shadow 0.4s;
        }
        .ibs-sh-story:hover {
          border-color: rgba(140,80,255,0.18);
          box-shadow: 0 12px 40px rgba(0,0,0,0.6), 0 0 20px rgba(140,80,255,0.05);
        }
        .ibs-sh-story::before {
          content: ''; position: absolute; top: 0; left: 0;
          width: 14px; height: 14px;
          border-top: 1px solid rgba(253,224,71,0.4);
          border-left: 1px solid rgba(253,224,71,0.4);
          pointer-events: none;
        }
        .ibs-sh-story::after {
          content: ''; position: absolute; bottom: 0; right: 0;
          width: 14px; height: 14px;
          border-bottom: 1px solid rgba(253,224,71,0.4);
          border-right: 1px solid rgba(253,224,71,0.4);
          pointer-events: none;
        }
        .ibs-sh-quote {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.88rem, 1.4vw, 1.1rem);
          font-style: italic; font-weight: 500;
          color: #fde047; line-height: 1.6; margin: 0 0 20px;
        }
        .ibs-sh-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.78rem, 1.2vw, 0.9rem);
          font-weight: 300; color: rgba(255,255,255,0.42);
          line-height: 1.85; margin: 0 0 14px;
        }
        .ibs-sh-body strong { color: rgba(255,255,255,0.85); font-weight: 600; }
        .ibs-sh-body em     { color: rgba(50,197,244,0.75); font-style: italic; }
        .ibs-sh-cta {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; gap: 10px;
          margin-top: 24px; padding: 13px 28px;
          border: 1px solid #fde047; color: #fde047;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.5rem, 1.2vw, 0.65rem);
          font-weight: 600; letter-spacing: 4px; text-transform: uppercase;
          transition: color 0.4s;
        }
        .ibs-sh-cta::before {
          content: ''; position: absolute; inset: 0;
          background: #fde047;
          transform: scaleX(0); transform-origin: left; z-index: 0;
          transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
        }
        .ibs-sh-cta:hover::before { transform: scaleX(1); }
        .ibs-sh-cta:hover { color: #000; }
        .ibs-sh-cta span { position: relative; z-index: 1; }

        /* ── Video card ── */
        .ibs-sh-right { flex: 1.2; min-width: 0; }
        .ibs-sh-video-card {
          display: block; width: 100%; aspect-ratio: 16/9;
          overflow: hidden; position: relative;
          border: 1px solid rgba(140,80,255,0.10);
          background: #07070b;
          transition: border-color 0.4s, box-shadow 0.4s;
          text-decoration: none;
        }
        .ibs-sh-video-card:hover {
          border-color: rgba(50,197,244,0.22);
          box-shadow: 0 14px 50px rgba(0,0,0,0.75), 0 0 30px rgba(140,80,255,0.07);
        }
        .ibs-sh-video-card::before {
          content: ''; position: absolute; top: 8px; left: 8px;
          width: 12px; height: 12px;
          border-top: 1px solid rgba(253,224,71,0.4);
          border-left: 1px solid rgba(253,224,71,0.4);
          z-index: 5; pointer-events: none;
        }
        .ibs-sh-video-card::after {
          content: ''; position: absolute; bottom: 8px; right: 8px;
          width: 12px; height: 12px;
          border-bottom: 1px solid rgba(253,224,71,0.4);
          border-right: 1px solid rgba(253,224,71,0.4);
          z-index: 5; pointer-events: none;
        }
        .ibs-sh-vid {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.55s cubic-bezier(0.16,1,0.3,1);
        }
        .ibs-sh-video-card:hover .ibs-sh-vid { transform: scale(1.04); }
        .ibs-sh-vid-grad {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(10,10,14,0.55) 100%);
          z-index: 2; pointer-events: none;
        }
        .ibs-sh-vid-tag {
          position: absolute; top: 10px; right: 10px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.8rem; letter-spacing: 3px;
          color: #000; background: #32c5f4;
          padding: 3px 8px; z-index: 6; text-transform: uppercase;
        }
        .ibs-sh-vid-overlay {
          position: absolute; inset: 0;
          background: rgba(10,10,14,0.75);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; z-index: 10; backdrop-filter: blur(4px);
          transition: opacity 0.3s;
        }
        .ibs-sh-video-card:hover .ibs-sh-vid-overlay { opacity: 1; }
        .ibs-sh-vid-label {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.5rem, 1.2vw, 0.6rem);
          font-weight: 600; letter-spacing: 4px;
          color: #000; background: #fde047;
          padding: 8px 20px; text-transform: uppercase;
          transform: translateY(6px); transition: transform 0.3s;
        }
        .ibs-sh-video-card:hover .ibs-sh-vid-label { transform: translateY(0); }
        .ibs-sh-scan {
          position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #32c5f4, #fde047);
          transform: scaleX(0); transform-origin: left; z-index: 6;
          transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
        }
        .ibs-sh-video-card:hover .ibs-sh-scan { transform: scaleX(1); }

        /* ══════════════════════════════════════
           RESPONSIVE
        ══════════════════════════════════════ */
        @media (max-width: 900px) {
          .ibs-comic-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .ibs-book-wrap { max-width: 320px; }
          .ibs-sh-inner  { flex-direction: column; gap: 40px; }
          .ibs-sh-pre    { justify-content: center; }
          .ibs-sh-left   { text-align: center; }
          .ibs-sh-rule   { margin: 0 auto 28px; width: 60%; }
          .ibs-sh-cta    { margin: 24px auto 0; }
          .ibs-sh-right  { width: 100%; }
          .ibs-sh-story  { text-align: left; }
        }
        @media (max-width: 600px) {
          .ibs-comic-section { padding: 70px 0 80px; }
          .ibs-sh-section    { padding: 70px clamp(16px,5%,28px) 80px; }
          .ibs-book-wrap     { max-width: 280px; }
          .ibs-vision-card   { padding: 20px 16px; }
          .ibs-sh-story      { padding: 18px 14px; }
          .ibs-cta-video-preview { width: 140px; bottom: calc(100% + 6px); }
        }
      `}),(0,Q.jsxs)(`section`,{className:`ibs-comic-section`,children:[(0,Q.jsx)(`div`,{className:`ibs-comic-ambient`}),(0,Q.jsx)(`div`,{className:`ibs-comic-cool-accent`}),(0,Q.jsxs)(`div`,{className:`ibs-comic-inner`,children:[(0,Q.jsxs)(`header`,{className:`ibs-comic-header`,children:[(0,Q.jsxs)(`div`,{className:`ibs-comic-pre`,children:[(0,Q.jsx)(`div`,{className:`ibs-comic-pre-line`}),(0,Q.jsx)(`span`,{className:`ibs-comic-pre-text`,children:`CINEMAPAYYAN ORIGINALS`}),(0,Q.jsx)(`div`,{className:`ibs-comic-pre-line`})]}),(0,Q.jsxs)($.h1,{className:`ibs-comic-title`,initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[`RETRO `,(0,Q.jsx)(`span`,{className:`ibs-comic-title-cyan`,children:`BTS`}),` `,(0,Q.jsx)(`span`,{className:`ibs-comic-title-yellow`,children:`COMIC`})]}),(0,Q.jsx)(`div`,{className:`ibs-comic-rule`})]}),(0,Q.jsx)(`div`,{className:`ibs-bts-wrap`,children:(0,Q.jsxs)(`div`,{className:`ibs-bts-container`,children:[(0,Q.jsxs)(`div`,{className:`ibs-bts-badge`,children:[(0,Q.jsx)(`div`,{className:`ibs-bts-badge-dot`}),(0,Q.jsx)(`span`,{children:`BEHIND THE SCENES`})]}),(0,Q.jsxs)(`div`,{className:`ibs-bts-img-wrap`,children:[(0,Q.jsx)(`img`,{src:A.ComicCOverimg,alt:`BTS`,className:`ibs-bts-img`}),(0,Q.jsx)(`div`,{className:`ibs-bts-vignette`})]}),(0,Q.jsx)(`div`,{className:`ibs-bts-corner ibs-bts-corner-tl`}),(0,Q.jsx)(`div`,{className:`ibs-bts-corner ibs-bts-corner-br`})]})}),(0,Q.jsxs)(`div`,{className:`ibs-comic-grid`,children:[(0,Q.jsxs)(`div`,{className:`ibs-book-wrap`,children:[(0,Q.jsx)(Gp,{mode:`wait`,children:(0,Q.jsxs)($.div,{className:`ibs-comic-sheet`,initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},exit:{opacity:0,scale:1.02},transition:{duration:.25},children:[(0,Q.jsx)(`img`,{src:e[t],alt:`Comic Page`,className:`ibs-comic-sheet-img`}),(0,Q.jsxs)(`div`,{className:`ibs-issue-tag`,children:[`ISSUE.`,t+1]})]},t)}),(0,Q.jsxs)(`div`,{className:`ibs-nav-bar`,children:[(0,Q.jsx)(`button`,{className:`ibs-nav-btn`,onClick:()=>o(-1),disabled:t===0,children:(0,Q.jsx)(`span`,{children:`PREV`})}),(0,Q.jsx)(`div`,{className:`ibs-dots-row`,children:e.map((e,n)=>(0,Q.jsx)(`span`,{className:`ibs-dot${n===t?` active`:``}`},n))}),(0,Q.jsx)(`button`,{className:`ibs-nav-btn`,onClick:()=>o(1),disabled:t===e.length-1,children:(0,Q.jsx)(`span`,{children:`NEXT`})})]})]}),(0,Q.jsxs)(`aside`,{className:`ibs-vision-card`,children:[(0,Q.jsxs)(`div`,{className:`ibs-vision-pre`,children:[(0,Q.jsx)(`div`,{className:`ibs-vision-pre-line`}),(0,Q.jsx)(`span`,{className:`ibs-vision-pre-text`,children:`CREATIVE VISION`})]}),(0,Q.jsx)(`h2`,{className:`ibs-vision-title`,children:`THE VISION`}),(0,Q.jsx)(`div`,{className:`ibs-vision-rule`}),(0,Q.jsx)(`p`,{className:`ibs-vision-lead`,children:`Where the raw grit of cinema meets the electric pulse of ink — a tribute to the golden era of visual storytelling, reimagined panel by panel.`}),(0,Q.jsxs)(`p`,{className:`ibs-vision-body`,children:[`Conceived and crafted by the creative force of`,` `,(0,Q.jsx)(`strong`,{children:`Abishake Raja`}),`, every frame is a statement — bold lines, deeper meaning. The `,(0,Q.jsx)(`strong`,{children:`Cinema Payyan`}),` `,`collective doesn't just make films; they leave marks. This is not a behind-the-scenes — it's a front-row seat to obsession.`]}),(0,Q.jsxs)(`div`,{className:`ibs-vision-cta-wrap`,onMouseEnter:()=>{i(!0),a.current&&(a.current.currentTime=0,a.current.play().catch(()=>{}))},onMouseLeave:()=>{i(!1),a.current&&a.current.pause()},children:[(0,Q.jsxs)(`div`,{className:`ibs-cta-video-preview${r?` visible`:``}`,children:[(0,Q.jsx)(`video`,{ref:a,src:j.vjPreviews[22],muted:!0,loop:!0,playsInline:!0,preload:`none`}),(0,Q.jsx)(`div`,{className:`ibs-cta-video-preview-tag`,children:`PREVIEW`})]}),(0,Q.jsx)(`a`,{href:k_,target:`_blank`,rel:`noreferrer`,className:`ibs-vision-cta`,children:(0,Q.jsx)(`span`,{children:`VIEW FULL ARCHIVE`})})]})]})]})]})]}),(0,Q.jsxs)(`section`,{className:`ibs-sh-section`,children:[(0,Q.jsx)(`div`,{className:`ibs-sh-glow-tr`}),(0,Q.jsx)(`div`,{className:`ibs-sh-glow-bl`}),(0,Q.jsxs)(`div`,{className:`ibs-sh-inner`,children:[(0,Q.jsxs)(`div`,{className:`ibs-sh-left`,children:[(0,Q.jsxs)(`div`,{className:`ibs-sh-pre`,children:[(0,Q.jsx)(`div`,{className:`ibs-sh-pre-line`}),(0,Q.jsx)(`span`,{className:`ibs-sh-pre-text`,children:`CINEMAPAYYAN ORIGINALS`})]}),(0,Q.jsxs)($.h2,{className:`ibs-sh-title`,initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6,ease:[.16,1,.3,1]},children:[`SHADOW `,(0,Q.jsx)(`span`,{className:`ibs-sh-title-cyan`,children:`PROMOTION`})]}),(0,Q.jsx)(`div`,{className:`ibs-sh-rule`}),(0,Q.jsxs)(`div`,{className:`ibs-sh-story`,children:[(0,Q.jsx)(`p`,{className:`ibs-sh-quote`,children:`"When light bends, legends are born — and Sathyam felt every shadow."`}),(0,Q.jsxs)(`p`,{className:`ibs-sh-body`,children:[(0,Q.jsx)(`strong`,{style:{display:`block`,fontSize:`1.1rem`,marginBottom:`8px`,color:`#fff`},children:`We don't just promote stories; we live the impact.`}),`For `,(0,Q.jsx)(`strong`,{children:`Sivakarthikeyan's`}),` `,(0,Q.jsx)(`em`,{children:`Maaveeran`}),`, we transformed`,` `,(0,Q.jsx)(`strong`,{children:`Sathyam Cinemas`}),` into a visceral battlefield of shadow and light. By blurring the lines between the screen and the streets, we ensured this warrior's journey wasn't just seen — it was `,(0,Q.jsx)(`strong`,{children:`felt.`})]}),(0,Q.jsxs)(`p`,{className:`ibs-sh-body`,children:[`Directed by `,(0,Q.jsx)(`strong`,{children:`Madonne Ashwin`}),` · Celebrating `,(0,Q.jsx)(`em`,{children:`#VeerameJeyam`}),` · Ideation & execution by `,(0,Q.jsx)(`strong`,{children:`CinemaPayyan Inc`}),` — where every frame has a heartbeat.`]}),(0,Q.jsx)(`a`,{href:`https://www.instagram.com/reel/CuoYbZqghwl/`,target:`_blank`,rel:`noreferrer`,className:`ibs-sh-cta`,children:(0,Q.jsx)(`span`,{children:`WATCH FULL VIDEO 🔥`})})]})]}),(0,Q.jsx)(`div`,{className:`ibs-sh-right`,children:(0,Q.jsxs)(`a`,{href:`https://www.instagram.com/reel/CuoYbZqghwl/`,target:`_blank`,rel:`noreferrer`,className:`ibs-sh-video-card`,children:[(0,Q.jsx)(`video`,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:`ibs-sh-vid`,children:(0,Q.jsx)(`source`,{src:j.vjPreviews[33],type:`video/mp4`})}),(0,Q.jsx)(`div`,{className:`ibs-sh-vid-grad`}),(0,Q.jsx)(`div`,{className:`ibs-sh-vid-tag`,children:`REEL`}),(0,Q.jsx)(`div`,{className:`ibs-sh-vid-overlay`,children:(0,Q.jsx)(`span`,{className:`ibs-sh-vid-label`,children:`WATCH NOW`})}),(0,Q.jsx)(`div`,{className:`ibs-sh-scan`})]})})]})]})]})},j_=[{id:1,title:`Anirudh Ravichander`,role:`Composer · Producer`,link:`https://youtu.be/dESRRC-uVME`,preview:j.vjPreviews[0],thumb:A.ScreenshotAR},{id:2,title:`Venkat Prabhu`,role:`Director · Actor`,link:`https://youtu.be/lAH_99cCcos`,preview:j.vjPreviews[1],thumb:A.ScreenshotVP},{id:3,title:`Silambarasan TR`,role:`Actor`,link:`https://youtu.be/GKHk7d_bQh0`,preview:j.vjPreviews[2],thumb:A.ScreenshotSTR},{id:4,title:`Vijay Sethupathi`,role:`Actor · Producer`,link:`https://youtu.be/77oGSFHYzSY`,preview:j.vjPreviews[3],thumb:A.ScreenshotVJS},{id:5,title:`Arjun DAS`,role:`Actor`,link:`https://youtu.be/fEpt5b794ys`,preview:j.vjPreviews[4],thumb:A.ScreenshotAD},{id:6,title:`T. Kumararaja`,role:`Director · Writer`,link:`https://youtu.be/BBnY5tE7-Wo`,preview:j.vjPreviews[5],thumb:A.ScreenshotTK},{id:7,title:`Kamal Haasan`,role:`Actor · Director · Legend`,link:`https://www.youtube.com/watch?v=JzsDo_hf5cg`,preview:j.vjPreviews[6],thumb:A.ScreenshotKH},{id:8,title:`Dulquer Salmaan`,role:`Actor · Producer`,link:`https://youtu.be/sSmudmwhMgc`,preview:j.vjPreviews[7],thumb:A.ScreenshotDQ},{id:9,title:`GVM`,role:`Director · Visionary`,link:`https://youtu.be/hKbP91H0_Do`,preview:j.vjPreviews[8],thumb:A.ScreenshotGVM},{id:10,title:`Ashok Selvan`,role:`Actor`,link:`https://youtu.be/uXQOlL7EjzA`,preview:j.vjPreviews[9],thumb:A.ScreenshotAS}],M_=[{id:1,title:`Retro`,tag:`REVIEW`,link:`https://youtu.be/mp8e0SBS4d4`,video:j.vjPreviews[10]},{id:2,title:`Dragon`,tag:`CRITIQUE`,link:`https://youtu.be/3z4uen7WeD8`,video:j.vjPreviews[11]},{id:3,title:`Vidaamuyarchi`,tag:`ANALYSIS`,link:`https://youtu.be/vKdN87DhL9Y`,video:j.vjPreviews[12]}],N_=[{icon:l_,href:`https://youtube.com/@OpenPannaa`,label:`YouTube`},{icon:e_,href:`https://instagram.com/openpannaa`,label:`Instagram`},{icon:$g,href:`https://facebook.com/OpenPannaa`,label:`Facebook`},{icon:c_,href:`https://x.com/OpenPannaa`,label:`Twitter`}];function P_({size:e=20}){return(0,Q.jsxs)(`svg`,{viewBox:`0 0 22 22`,fill:`none`,width:e,height:e,children:[(0,Q.jsx)(`rect`,{x:`2`,y:`7`,width:`18`,height:`13`,rx:`1.5`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,Q.jsx)(`path`,{d:`M9.5 10.5l5 3-5 3v-6z`,fill:`currentColor`}),(0,Q.jsx)(`path`,{d:`M2 7h18`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,Q.jsx)(`path`,{d:`M5.5 7l2.5-4M10 7l2.5-4M14.5 7l2.5-4`,stroke:`currentColor`,strokeWidth:`1.2`,strokeLinecap:`round`})]})}function F_({size:e=20}){return(0,Q.jsxs)(`svg`,{viewBox:`0 0 22 22`,fill:`none`,width:e,height:e,children:[(0,Q.jsx)(`rect`,{x:`1.5`,y:`4.5`,width:`19`,height:`13`,rx:`3.5`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,Q.jsx)(`path`,{d:`M9 8l6 3.5-6 3.5V8z`,fill:`currentColor`})]})}function I_({size:e=20}){return(0,Q.jsxs)(`svg`,{viewBox:`0 0 22 22`,fill:`none`,width:e,height:e,children:[(0,Q.jsx)(`rect`,{x:`7.5`,y:`2`,width:`7`,height:`10`,rx:`3.5`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,Q.jsx)(`path`,{d:`M4 10a7 7 0 0014 0`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`}),(0,Q.jsx)(`path`,{d:`M11 17v3`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`}),(0,Q.jsx)(`path`,{d:`M7.5 20h7`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`}),(0,Q.jsx)(`path`,{d:`M2 7.5a10 10 0 000 7M20 7.5a10 10 0 010 7`,stroke:`currentColor`,strokeWidth:`1.1`,strokeLinecap:`round`,opacity:`0.55`})]})}var L_=[{id:`vj`,label:`VJ`,sub:`CURATED CONVERSATIONS`,accent:`#fde047`,borderColor:`rgba(253,224,71,0.35)`},{id:`openpannaa`,label:`OPEN PANNAA`,sub:`FILM CRITIC · YOUTUBE`,accent:`#ff4444`,borderColor:`rgba(255,68,68,0.35)`},{id:`rj`,label:`RJ`,sub:`BROADCAST ARCHIVES`,accent:`#32c5f4`,borderColor:`rgba(50,197,244,0.35)`}];function R_({video:e,isActive:t,onActivate:n}){let[r,i]=(0,C.useState)(!1),a=(0,C.useRef)(null);(0,C.useEffect)(()=>{let e=a.current;e&&(r||t?(e.muted=!0,e.play().catch(()=>{})):(e.pause(),e.currentTime=0))},[r,t]);let o=r||t;return(0,Q.jsxs)(`div`,{className:`cc-vj-card${t?` cc-vj-card--active`:``}`,onMouseEnter:()=>{i(!0),n()},onMouseLeave:()=>i(!1),onClick:n,children:[(0,Q.jsxs)(`div`,{className:`cc-vj-media`,children:[(0,Q.jsx)(`img`,{src:e.thumb,alt:e.title,className:`cc-vj-thumb${o?` cc-vj-thumb--hide`:``}`}),(0,Q.jsx)(`video`,{ref:a,src:e.preview,className:`cc-vj-vid${o?` cc-vj-vid--show`:``}`,muted:!0,loop:!0,playsInline:!0,preload:`none`}),(0,Q.jsx)(`div`,{className:`cc-vj-overlay`}),(0,Q.jsx)(`span`,{className:`cc-vj-ghost`,children:String(e.id).padStart(2,`0`)}),(0,Q.jsx)(`a`,{href:e.link,target:`_blank`,rel:`noreferrer`,className:`cc-vj-play${o?` cc-vj-play--show`:``}`,onClick:e=>e.stopPropagation(),children:(0,Q.jsx)(r_,{fill:`black`,size:14})}),(0,Q.jsx)(`div`,{className:`cc-vj-bar${t?` cc-vj-bar--on`:``}`})]}),(0,Q.jsxs)(`div`,{className:`cc-vj-info`,children:[(0,Q.jsxs)(`div`,{className:`cc-vj-info-top`,children:[(0,Q.jsxs)(`span`,{className:`cc-vj-sess`,children:[`SESSION `,String(e.id).padStart(2,`0`)]}),(0,Q.jsx)(Qg,{size:11,className:`cc-vj-ext`})]}),(0,Q.jsx)(`h4`,{className:`cc-vj-name`,children:e.title}),(0,Q.jsx)(`span`,{className:`cc-vj-role`,children:e.role})]})]})}function z_({item:e,index:t}){let[n,r]=(0,C.useState)(!1),i=(0,C.useRef)(null);return(0,C.useEffect)(()=>{let e=i.current;e&&(n?(e.muted=!0,e.play().catch(()=>{})):(e.pause(),e.currentTime=0))},[n]),(0,Q.jsxs)($.a,{href:e.link,target:`_blank`,rel:`noreferrer`,className:`cc-op-card`,initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{delay:t*.1,duration:.55,ease:[.16,1,.3,1]},onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,Q.jsxs)(`div`,{className:`cc-op-media`,children:[(0,Q.jsx)(`video`,{ref:i,src:e.video,className:`cc-op-vid`,muted:!0,loop:!0,playsInline:!0}),(0,Q.jsx)(`div`,{className:`cc-op-grad`}),(0,Q.jsx)(`span`,{className:`cc-op-tag`,children:e.tag}),(0,Q.jsx)($.div,{className:`cc-op-play`,animate:{opacity:n?1:.7,scale:n?1.1:1},transition:{duration:.2},children:(0,Q.jsx)(r_,{fill:`black`,size:16})}),(0,Q.jsx)($.div,{className:`cc-op-scan`,animate:{scaleX:n?1:0},transition:{duration:.4,ease:[.16,1,.3,1]}}),(0,Q.jsx)(`div`,{className:`cc-op-tl`}),(0,Q.jsx)(`div`,{className:`cc-op-br`})]}),(0,Q.jsxs)(`div`,{className:`cc-op-info`,children:[(0,Q.jsxs)(`div`,{className:`cc-op-left`,children:[(0,Q.jsx)(`span`,{className:`cc-op-num`,children:String(e.id).padStart(2,`0`)}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`cc-op-lbl`,children:e.tag}),(0,Q.jsx)(`h4`,{className:`cc-op-title`,children:e.title})]})]}),(0,Q.jsx)($.div,{className:`cc-op-ext`,animate:{opacity:n?1:.3,x:n?0:-4},children:(0,Q.jsx)(Qg,{size:13})})]})]})}var B_=()=>{let[e,t]=(0,C.useState)(`vj`),[n,r]=(0,C.useState)(0),[i,a]=(0,C.useState)(!1),o=(0,C.useRef)(null),s=(0,C.useRef)(null),c=eg(s,{once:!0,amount:.3}),l=j_.length,u=l*356,d=[...j_,...j_,...j_];return(0,C.useEffect)(()=>{if(e!==`vj`)return;let t=o.current;if(!t)return;t.scrollLeft=u;let n,a=()=>{if(!i&&t){t.scrollLeft+=.7,t.scrollLeft>=u*2&&(t.scrollLeft-=u),t.scrollLeft<u&&(t.scrollLeft+=u);let e=(t.scrollLeft-u)%u;r(Math.round(e/356)%l)}n=requestAnimationFrame(a)};return n=requestAnimationFrame(a),()=>cancelAnimationFrame(n)},[e,i,u,356,l]),L_.find(t=>t.id===e),(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;700;900&display=swap');

        /* ═══════════════════════════════════
           SECTION SHELL
        ═══════════════════════════════════ */
        .cc-section {
          background: #080c16;
          padding: 80px 0 100px;
          overflow: hidden;
          position: relative;
        }
        .cc-section::before {
          content: '';
          position: absolute; top: 0; left: 6%; right: 6%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(253,224,71,0.18) 50%, transparent);
        }

        .cc-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 clamp(16px, 5%, 56px);
        }

        /* ═══════════════════════════════════
           HEADER
        ═══════════════════════════════════ */
        .cc-header {
          display: flex; align-items: center; gap: 20px;
          margin-bottom: 52px;
        }
        .cc-header-rule {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(253,224,71,0.35));
          transform-origin: left;
        }
        .cc-header-rule--r {
          background: linear-gradient(90deg, rgba(50,197,244,0.3), transparent);
          transform-origin: right;
        }
        .cc-header-mid {
          display: flex; flex-direction: column; align-items: center;
          gap: 4px; flex-shrink: 0;
        }
        .cc-overline {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem, 1.4vw, 0.56rem);
          font-weight: 400; letter-spacing: 7px;
          color: rgba(255,255,255,0.35); text-transform: uppercase;
        }
        .cc-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.8rem, 5vw, 3.4rem);
          font-weight: 400; color: #fff;
          line-height: 1; margin: 0; letter-spacing: 4px;
          text-align: center;
        }
        .cc-heading span { color: #fde047; }

        /* ═══════════════════════════════════
           3-BOX TAB SELECTOR
        ═══════════════════════════════════ */
        .cc-tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          margin-bottom: 48px;
          border: 1px solid rgba(255,255,255,0.07);
        }

        .cc-tab {
          position: relative; overflow: hidden;
          display: flex; flex-direction: column;
          align-items: flex-start;
          padding: clamp(18px,3vw,28px) clamp(16px,3vw,28px);
          cursor: pointer;
          background: rgba(8,12,22,0.9);
          border-right: 1px solid rgba(255,255,255,0.06);
          transition: background 0.35s;
          gap: 10px;
        }
        .cc-tab:last-child { border-right: none; }

        /* shimmer fill on active */
        .cc-tab::before {
          content: '';
          position: absolute; inset: 0;
          background: rgba(255,255,255,0.025);
          transform: scaleY(0); transform-origin: bottom;
          transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
          z-index: 0;
        }
        .cc-tab--active::before { transform: scaleY(1); }

        /* top accent bar */
        .cc-tab::after {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 2px;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.45s cubic-bezier(0.77,0,0.18,1);
        }
        .cc-tab--vj::after        { background: #fde047; }
        .cc-tab--openpannaa::after { background: #ff4444; }
        .cc-tab--rj::after         { background: #32c5f4; }
        .cc-tab--active::after    { transform: scaleX(1); }

        .cc-tab-icon {
          position: relative; z-index: 1;
          width: 38px; height: 38px;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: border-color 0.3s, color 0.3s;
        }
        .cc-tab--vj        .cc-tab-icon { color: rgba(253,224,71,0.4); }
        .cc-tab--openpannaa .cc-tab-icon { color: rgba(255,68,68,0.4); }
        .cc-tab--rj         .cc-tab-icon { color: rgba(50,197,244,0.4); }
        .cc-tab--active.cc-tab--vj        .cc-tab-icon { color: #fde047; border-color: rgba(253,224,71,0.4); }
        .cc-tab--active.cc-tab--openpannaa .cc-tab-icon { color: #ff4444; border-color: rgba(255,68,68,0.4); }
        .cc-tab--active.cc-tab--rj         .cc-tab-icon { color: #32c5f4; border-color: rgba(50,197,244,0.4); }

        .cc-tab-text { position: relative; z-index: 1; }
        .cc-tab-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.4rem, 3.5vw, 2.4rem);
          letter-spacing: 4px; line-height: 1;
          color: rgba(255,255,255,0.35);
          display: block;
          transition: color 0.3s;
        }
        .cc-tab--active .cc-tab-label { color: #fff; }

        .cc-tab-sub {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.38rem, 1.1vw, 0.5rem);
          letter-spacing: 4px; font-weight: 400;
          color: rgba(255,255,255,0.22); text-transform: uppercase;
          display: block; margin-top: 4px;
          transition: color 0.3s;
        }
        .cc-tab--active.cc-tab--vj        .cc-tab-sub { color: rgba(253,224,71,0.6); }
        .cc-tab--active.cc-tab--openpannaa .cc-tab-sub { color: rgba(255,68,68,0.6); }
        .cc-tab--active.cc-tab--rj         .cc-tab-sub { color: rgba(50,197,244,0.6); }

        /* corner bracket on active */
        .cc-tab-corner {
          position: absolute; bottom: 10px; right: 10px;
          width: 10px; height: 10px;
          border-bottom: 1px solid; border-right: 1px solid;
          opacity: 0;
          transition: opacity 0.3s;
          z-index: 1;
        }
        .cc-tab--active.cc-tab--vj        .cc-tab-corner { border-color: rgba(253,224,71,0.4); opacity: 1; }
        .cc-tab--active.cc-tab--openpannaa .cc-tab-corner { border-color: rgba(255,68,68,0.4);  opacity: 1; }
        .cc-tab--active.cc-tab--rj         .cc-tab-corner { border-color: rgba(50,197,244,0.4); opacity: 1; }

        /* seq number ghost */
        .cc-tab-seq {
          position: absolute; bottom: 8px; left: clamp(14px,3vw,26px);
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          color: rgba(255,255,255,0.04);
          line-height: 1; user-select: none; z-index: 0;
        }

        /* ═══════════════════════════════════
           CONTENT PANEL
        ═══════════════════════════════════ */
        .cc-panel {
          position: relative; min-height: 420px;
        }

        /* ═══════════════════════════════════
           VJ PANEL
        ═══════════════════════════════════ */
        .cc-vj-track-wrap { position: relative; margin: 0 -clamp(16px,5%,56px); }
        .cc-vj-track-wrap::before, .cc-vj-track-wrap::after {
          content: '';
          position: absolute; top: 0; bottom: 0; width: 60px;
          z-index: 5; pointer-events: none;
        }
        .cc-vj-track-wrap::before { left: 0;  background: linear-gradient(to right, #080c16, transparent); }
        .cc-vj-track-wrap::after  { right: 0; background: linear-gradient(to left,  #080c16, transparent); }

        .cc-vj-track {
          display: flex; gap: 16px;
          overflow-x: scroll; scrollbar-width: none;
          padding: 16px clamp(16px,5%,56px) 20px;
        }
        .cc-vj-track::-webkit-scrollbar { display: none; }

        .cc-vj-card {
          flex: 0 0 clamp(200px, 30vw, 340px);
          background: #0d1220;
          border: 1px solid rgba(50,197,244,0.07);
          cursor: pointer;
          transition: border-color 0.3s, transform 0.35s, box-shadow 0.35s;
        }
        .cc-vj-card:hover,
        .cc-vj-card--active {
          border-color: rgba(253,224,71,0.22);
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.6);
        }
        .cc-vj-media { position: relative; width: 100%; aspect-ratio: 16/9; overflow: hidden; background: #060a10; }
        .cc-vj-thumb,
        .cc-vj-vid   { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .cc-vj-thumb { transition: opacity 0.4s; }
        .cc-vj-thumb--hide { opacity: 0; }
        .cc-vj-vid   { opacity: 0; transition: opacity 0.4s; }
        .cc-vj-vid--show { opacity: 1; }
        .cc-vj-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.85) 100%);
          z-index: 2; pointer-events: none;
        }
        .cc-vj-ghost {
          position: absolute; top: 6px; left: 8px; z-index: 3;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          color: rgba(253,224,71,0.12); line-height: 1; user-select: none;
        }
        .cc-vj-play {
          position: absolute; bottom: 10px; right: 10px; z-index: 5;
          width: 34px; height: 34px; border-radius: 50%;
          background: #fde047;
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          opacity: 0; transform: scale(0.7);
          transition: opacity 0.25s, transform 0.25s;
        }
        .cc-vj-play--show { opacity: 1; transform: scale(1); }
        .cc-vj-bar {
          position: absolute; bottom: 0; left: 0; right: 0; z-index: 6;
          height: 2px;
          background: linear-gradient(90deg, #fde047, #32c5f4);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.45s;
        }
        .cc-vj-bar--on { transform: scaleX(1); }
        .cc-vj-info { padding: 10px 12px 12px; background: #080c14; }
        .cc-vj-info-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; }
        .cc-vj-sess {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.38rem, 1vw, 0.5rem);
          font-weight: 400; letter-spacing: 4px;
          color: rgba(253,224,71,0.7); text-transform: uppercase;
        }
        .cc-vj-ext { color: rgba(255,255,255,0.22); transition: color 0.25s; }
        .cc-vj-card:hover .cc-vj-ext { color: #32c5f4; }
        .cc-vj-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(0.9rem, 2vw, 1.2rem);
          letter-spacing: 2px; color: #fff;
          margin: 0 0 3px; line-height: 1.1;
        }
        .cc-vj-role {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.38rem, 0.9vw, 0.48rem);
          font-weight: 300; letter-spacing: 2px;
          color: rgba(255,255,255,0.4); text-transform: uppercase; display: block;
        }
        .cc-vj-card:hover .cc-vj-role { color: rgba(50,197,244,0.7); }

        /* VJ ticker */
        .cc-vj-ticker {
          display: flex; align-items: center; gap: 0;
          margin-top: 20px;
        }
        .cc-vj-tbar {
          flex: 1; height: 2px; background: rgba(255,255,255,0.05);
          position: relative; overflow: hidden;
        }
        .cc-vj-tbar-fill {
          position: absolute; top: 0; left: 0; height: 100%;
          background: linear-gradient(90deg, #fde047, #32c5f4);
          transition: width 0.5s cubic-bezier(0.77,0,0.18,1);
        }
        .cc-vj-tbar--r .cc-vj-tbar-fill {
          background: linear-gradient(90deg, #32c5f4, transparent);
        }
        .cc-vj-tpanel {
          flex-shrink: 0; display: flex; align-items: center; gap: 10px;
          padding: 0 clamp(10px,2vw,20px);
          border-left: 1px solid rgba(255,255,255,0.07);
          border-right: 1px solid rgba(255,255,255,0.07);
        }
        .cc-vj-tidx {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          color: rgba(253,224,71,0.85); line-height: 1; min-width: 28px; text-align: right;
        }
        .cc-vj-tdiv { width: 1px; height: 26px; background: rgba(255,255,255,0.08); }
        .cc-vj-tinfo { display: flex; flex-direction: column; gap: 3px; }
        .cc-vj-tname {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(0.85rem, 2vw, 1rem);
          letter-spacing: 2px; color: #fff; line-height: 1;
        }
        .cc-vj-trole {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.36rem, 0.9vw, 0.48rem);
          font-weight: 300; letter-spacing: 3px;
          color: rgba(50,197,244,0.75); text-transform: uppercase;
        }
        .cc-vj-ttotal {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.38rem, 0.9vw, 0.5rem);
          letter-spacing: 3px; color: rgba(255,255,255,0.18);
          text-transform: uppercase; padding-left: 10px; align-self: center;
        }
        .cc-vj-hint {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.38rem, 1vw, 0.5rem);
          font-weight: 300; letter-spacing: 4px;
          color: rgba(255,255,255,0.18); text-transform: uppercase;
          text-align: center; margin-top: 12px; transition: color 0.3s;
        }
        .cc-vj-hint--paused { color: rgba(253,224,71,0.5); }

        /* ═══════════════════════════════════
           OPEN PANNAA PANEL
        ═══════════════════════════════════ */
        .cc-op-hero {
          position: relative; overflow: hidden;
          width: 100%; margin-bottom: 28px;
          border: 1px solid rgba(255,68,68,0.08);
          cursor: default;
        }
        .cc-op-hero-img {
          width: 100%; aspect-ratio: 21/7;
          object-fit: cover; display: block;
        }
        .cc-op-hero-vig {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 25%, rgba(13,6,9,0.9) 100%);
          pointer-events: none; z-index: 2;
        }
        .cc-op-hero-bar {
          position: absolute; bottom: 0; left: 0; right: 0; z-index: 5;
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 16px;
          background: rgba(13,6,9,0.9);
          border-top: 1px solid rgba(255,68,68,0.1);
          gap: 12px;
        }
        .cc-op-hero-live {
          display: flex; align-items: center; gap: 6px; flex-shrink: 0;
        }
        .cc-op-hero-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #ff3333; box-shadow: 0 0 8px rgba(255,51,51,0.8);
          animation: ccDot 1.5s step-end infinite;
        }
        @keyframes ccDot { 0%,100%{opacity:1} 50%{opacity:0.15} }
        .cc-op-hero-lbl {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.4rem, 1vw, 0.52rem);
          font-weight: 400; letter-spacing: 4px;
          color: rgba(255,255,255,0.7); text-transform: uppercase;
        }
        .cc-op-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(0.9rem, 2.5vw, 1.6rem);
          letter-spacing: 4px; color: #fff; flex: 1; text-align: center;
        }
        .cc-op-hero-badge {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.38rem, 0.9vw, 0.5rem);
          font-weight: 700; letter-spacing: 3px;
          color: #000; background: #fde047;
          padding: 4px 10px; text-transform: uppercase; flex-shrink: 0;
        }

        .cc-op-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px; margin-bottom: 36px;
        }
        .cc-op-card {
          background: #1e0a0d;
          border: 1px solid rgba(253,224,71,0.06);
          overflow: hidden; text-decoration: none; display: block;
          transition: border-color 0.3s, transform 0.35s, box-shadow 0.3s;
        }
        .cc-op-card:hover {
          border-color: rgba(253,224,71,0.18);
          transform: translateY(-5px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.55);
        }
        .cc-op-media {
          position: relative; width: 100%; aspect-ratio: 16/9;
          background: #160508; overflow: hidden;
        }
        .cc-op-vid {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
        }
        .cc-op-grad {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%);
          pointer-events: none; z-index: 2;
        }
        .cc-op-tag {
          position: absolute; top: 8px; left: 8px; z-index: 5;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.36rem, 0.9vw, 0.48rem);
          font-weight: 700; letter-spacing: 3px;
          color: #000; background: #fde047; padding: 3px 8px; text-transform: uppercase;
        }
        .cc-op-play {
          position: absolute; bottom: 8px; right: 8px; z-index: 5;
          width: 32px; height: 32px; border-radius: 50%;
          background: #fde047;
          display: flex; align-items: center; justify-content: center;
        }
        .cc-op-scan {
          position: absolute; bottom: 0; left: 0; right: 0; z-index: 6;
          height: 2px; background: linear-gradient(90deg, #ff4444, #fde047);
          transform-origin: left;
        }
        .cc-op-tl {
          position: absolute; top: 0; left: 0; z-index: 4;
          width: 10px; height: 10px;
          border-top: 1px solid rgba(253,224,71,0.4);
          border-left: 1px solid rgba(253,224,71,0.4);
        }
        .cc-op-br {
          position: absolute; bottom: 0; right: 0; z-index: 4;
          width: 10px; height: 10px;
          border-bottom: 1px solid rgba(50,197,244,0.35);
          border-right: 1px solid rgba(50,197,244,0.35);
        }
        .cc-op-info {
          padding: 12px 14px;
          display: flex; align-items: center; justify-content: space-between;
          background: #160508;
          border-top: 1px solid rgba(253,224,71,0.05);
        }
        .cc-op-left { display: flex; align-items: center; gap: 10px; }
        .cc-op-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.4rem, 2.5vw, 1.8rem);
          color: rgba(253,224,71,0.18); line-height: 1; flex-shrink: 0;
        }
        .cc-op-lbl {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.36rem, 0.9vw, 0.48rem);
          font-weight: 400; letter-spacing: 4px;
          color: rgba(253,224,71,0.6); text-transform: uppercase;
          display: block; margin-bottom: 2px;
        }
        .cc-op-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(0.9rem, 1.8vw, 1.1rem);
          letter-spacing: 2px; color: #fff; margin: 0; line-height: 1.1;
        }
        .cc-op-ext { color: rgba(255,255,255,0.3); transition: color 0.25s; }
        .cc-op-card:hover .cc-op-ext { color: #32c5f4; }

        /* Open Pannaa footer */
        .cc-op-footer {
          display: flex; align-items: center; flex-wrap: wrap;
          gap: 20px; padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .cc-op-logo-wrap {
          position: relative; flex-shrink: 0;
          width: 60px; height: 60px;
          display: flex; align-items: center; justify-content: center;
        }
        .cc-op-logo {
          width: 48px; height: 48px; object-fit: contain; border-radius: 50%;
          position: relative; z-index: 2;
        }
        .cc-op-logo-ring {
          position: absolute; inset: 0; border-radius: 50%;
          border: 1px dashed rgba(253,224,71,0.25);
        }
        .cc-op-meta { flex: 1; min-width: 120px; }
        .cc-op-meta-over {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.38rem, 0.9vw, 0.5rem);
          font-weight: 400; letter-spacing: 5px;
          color: rgba(255,255,255,0.4); text-transform: uppercase; display: block; margin-bottom: 4px;
        }
        .cc-op-meta-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.3rem, 3vw, 2rem);
          letter-spacing: 3px; color: #fff; margin: 0; line-height: 1;
        }
        .cc-op-socials { display: flex; gap: 8px; flex-wrap: wrap; flex-shrink: 0; }
        .cc-op-social {
          position: relative; overflow: hidden;
          width: 38px; height: 38px;
          border: 1px solid rgba(253,224,71,0.25);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.55); text-decoration: none;
          transition: color 0.3s;
        }
        .cc-op-social::before {
          content: ''; position: absolute; inset: 0;
          background: #fde047; transform: scaleX(0); transform-origin: left; z-index: 0;
          transition: transform 0.32s cubic-bezier(0.77,0,0.18,1);
        }
        .cc-op-social:hover::before { transform: scaleX(1); }
        .cc-op-social:hover { color: #000; }
        .cc-op-social svg { position: relative; z-index: 1; }
        .cc-op-cta {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; gap: 8px;
          margin-top: 20px; padding: 12px 22px;
          border: 1px solid #fde047; color: #fde047;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.4rem, 1vw, 0.52rem);
          font-weight: 700; letter-spacing: 4px; text-transform: uppercase;
          transition: color 0.3s;
        }
        .cc-op-cta-bg {
          position: absolute; inset: 0; background: #fde047;
          transform: scaleX(0); transform-origin: left; z-index: 0;
          transition: transform 0.35s cubic-bezier(0.77,0,0.18,1);
        }
        .cc-op-cta:hover .cc-op-cta-bg { transform: scaleX(1); }
        .cc-op-cta:hover { color: #000; }
        .cc-op-cta span, .cc-op-cta svg { position: relative; z-index: 1; }

        /* ═══════════════════════════════════
           RJ PANEL
        ═══════════════════════════════════ */
        .cc-rj-stage {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 40px; align-items: center;
        }
        .cc-rj-card {
          position: relative; overflow: hidden;
          display: block; text-decoration: none;
          border: 1px solid rgba(255,255,255,0.07);
          transition: border-color 0.3s;
        }
        .cc-rj-card:hover { border-color: rgba(50,197,244,0.22); }
        .cc-rj-img {
          width: 100%; aspect-ratio: 16/9;
          object-fit: cover; display: block;
          filter: grayscale(0.3);
          transition: transform 0.55s, filter 0.45s;
        }
        .cc-rj-card:hover .cc-rj-img { transform: scale(1.05); filter: grayscale(0); }
        .cc-rj-strip {
          position: absolute; bottom: 0; left: 0; right: 0;
          display: flex; align-items: center; gap: 10px;
          padding: 10px 14px;
          background: rgba(8,13,21,0.93);
          border-top: 1px solid rgba(50,197,244,0.07);
          z-index: 4;
        }
        .cc-rj-strip-l { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
        .cc-rj-on-air {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.38rem, 1vw, 0.5rem);
          font-weight: 400; letter-spacing: 3px;
          color: rgba(255,255,255,0.5); text-transform: uppercase;
        }
        .cc-rj-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #ff3333; box-shadow: 0 0 7px rgba(255,51,51,0.8);
          animation: ccDot 1s step-end infinite;
        }
        .cc-rj-strip-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(0.7rem, 1.8vw, 0.95rem);
          letter-spacing: 3px; color: rgba(255,255,255,0.8); flex: 1;
        }
        .cc-rj-hover {
          position: absolute; inset: 0; z-index: 5;
          background: rgba(0,0,0,0.78);
          display: flex; align-items: center; justify-content: center;
          flex-direction: column; gap: 10px;
          opacity: 0; transition: opacity 0.3s;
        }
        .cc-rj-card:hover .cc-rj-hover { opacity: 1; }
        .cc-rj-play-btn {
          width: 48px; height: 48px; border-radius: 50%;
          background: #fde047;
          display: flex; align-items: center; justify-content: center;
        }
        .cc-rj-hover-cta {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(0.8rem, 2vw, 0.95rem);
          letter-spacing: 5px; color: #fff;
        }
        .cc-rj-hover-sub {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.38rem, 0.9vw, 0.5rem);
          font-weight: 300; letter-spacing: 3px;
          color: rgba(255,255,255,0.4); text-transform: uppercase;
        }
        .cc-rj-wave {
          display: flex; align-items: center; gap: 3px;
          position: absolute; bottom: 44px; left: 14px; z-index: 3;
          pointer-events: none;
        }
        .cc-rj-wave-bar {
          width: 3px; border-radius: 2px;
          background: rgba(50,197,244,0.45);
          animation: ccWave 1.1s ease-in-out infinite;
        }
        @keyframes ccWave { 0%,100%{height:4px} 50%{height:18px} }

        .cc-rj-meta {
          display: flex; flex-direction: column;
          border: 1px solid rgba(50,197,244,0.07);
          background: #0d1220; align-self: stretch;
        }
        .cc-rj-meta-item {
          flex: 1; display: flex; flex-direction: column;
          align-items: flex-start; gap: 5px;
          padding: 20px 22px;
          border-bottom: 1px solid rgba(50,197,244,0.06);
        }
        .cc-rj-meta-item:last-child { border-bottom: none; }
        .cc-rj-meta-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          color: #32c5f4; line-height: 1; letter-spacing: 2px;
        }
        .cc-rj-meta-plus { font-size: 0.55em; vertical-align: super; color: #fde047; }
        .cc-rj-meta-lbl {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.38rem, 0.9vw, 0.5rem);
          font-weight: 400; letter-spacing: 4px;
          color: rgba(255,255,255,0.4); text-transform: uppercase;
        }

        /* ═══════════════════════════════════
           RESPONSIVE
        ═══════════════════════════════════ */
        @media (max-width: 860px) {
          .cc-op-grid    { grid-template-columns: repeat(2, 1fr); }
          .cc-rj-stage   { grid-template-columns: 1fr; gap: 24px; }
          .cc-rj-meta    { flex-direction: row; }
          .cc-rj-meta-item { border-bottom: none; border-right: 1px solid rgba(50,197,244,0.06); }
          .cc-rj-meta-item:last-child { border-right: none; }
        }
        @media (max-width: 640px) {
          .cc-section { padding: 56px 0 72px; }
          .cc-tabs { grid-template-columns: 1fr; }
          .cc-tab  { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); flex-direction: row; align-items: center; gap: 14px; padding: 14px 16px; }
          .cc-tab:last-child { border-bottom: none; }
          .cc-tab::after { top: auto; bottom: 0; left: 0; right: auto; width: 100%; height: 2px; }
          .cc-tab-seq { display: none; }
          .cc-tab-sub { display: none; }
          .cc-op-grid { grid-template-columns: 1fr; }
          .cc-rj-meta { flex-direction: column; }
          .cc-rj-meta-item { border-right: none; border-bottom: 1px solid rgba(50,197,244,0.06); }
          .cc-rj-meta-item:last-child { border-bottom: none; }
          .cc-vj-ttotal { display: none; }
          .cc-header-rule { display: none; }
        }
        @media (max-width: 400px) {
          .cc-op-grid { gap: 12px; }
        }
      `}),(0,Q.jsx)(`section`,{className:`cc-section`,children:(0,Q.jsxs)(`div`,{className:`cc-inner`,children:[(0,Q.jsxs)(`div`,{className:`cc-header`,ref:s,children:[(0,Q.jsx)($.div,{className:`cc-header-rule`,initial:{scaleX:0},animate:{scaleX:c?1:0},transition:{duration:.8,ease:[.76,0,.24,1]}}),(0,Q.jsxs)($.div,{className:`cc-header-mid`,initial:{opacity:0,y:16},animate:{opacity:c?1:0,y:c?0:16},transition:{delay:.25,duration:.6},children:[(0,Q.jsx)(`span`,{className:`cc-overline`,children:`CINEMAPAYYAN INC`}),(0,Q.jsxs)(`h2`,{className:`cc-heading`,children:[`CINEMA `,(0,Q.jsx)(`span`,{children:`CHANNELS`})]})]}),(0,Q.jsx)($.div,{className:`cc-header-rule cc-header-rule--r`,initial:{scaleX:0},animate:{scaleX:c?1:0},transition:{delay:.12,duration:.8,ease:[.76,0,.24,1]}})]}),(0,Q.jsx)($.div,{className:`cc-tabs`,initial:{opacity:0,y:24},animate:{opacity:c?1:0,y:c?0:24},transition:{delay:.4,duration:.6},children:L_.map((n,r)=>(0,Q.jsxs)(`div`,{className:`cc-tab cc-tab--${n.id}${e===n.id?` cc-tab--active`:``}`,onClick:()=>t(n.id),children:[(0,Q.jsx)(`span`,{className:`cc-tab-seq`,children:String(r+1).padStart(2,`0`)}),(0,Q.jsxs)(`div`,{className:`cc-tab-icon`,children:[n.id===`vj`&&(0,Q.jsx)(P_,{size:18}),n.id===`openpannaa`&&(0,Q.jsx)(F_,{size:18}),n.id===`rj`&&(0,Q.jsx)(I_,{size:18})]}),(0,Q.jsxs)(`div`,{className:`cc-tab-text`,children:[(0,Q.jsx)(`span`,{className:`cc-tab-label`,children:n.label}),(0,Q.jsx)(`span`,{className:`cc-tab-sub`,children:n.sub})]}),(0,Q.jsx)(`div`,{className:`cc-tab-corner`})]},n.id))}),(0,Q.jsx)(`div`,{className:`cc-panel`,children:(0,Q.jsxs)(Gp,{mode:`wait`,children:[e===`vj`&&(0,Q.jsxs)($.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-16},transition:{duration:.45,ease:[.16,1,.3,1]},children:[(0,Q.jsx)(`div`,{className:`cc-vj-track-wrap`,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:(0,Q.jsx)(`div`,{className:`cc-vj-track`,ref:o,children:d.map((e,t)=>{let i=t%l;return(0,Q.jsx)(R_,{video:e,index:i,isActive:i===n,onActivate:()=>r(i)},`${t}-${e.id}`)})})}),(0,Q.jsxs)(`div`,{className:`cc-vj-ticker`,children:[(0,Q.jsx)(`div`,{className:`cc-vj-tbar`,children:(0,Q.jsx)(`div`,{className:`cc-vj-tbar-fill`,style:{width:`${(n+1)/l*100}%`}})}),(0,Q.jsxs)(`div`,{className:`cc-vj-tpanel`,children:[(0,Q.jsx)(`span`,{className:`cc-vj-tidx`,children:String(n+1).padStart(2,`0`)}),(0,Q.jsx)(`div`,{className:`cc-vj-tdiv`}),(0,Q.jsxs)(`div`,{className:`cc-vj-tinfo`,children:[(0,Q.jsx)(`span`,{className:`cc-vj-tname`,children:j_[n].title}),(0,Q.jsx)(`span`,{className:`cc-vj-trole`,children:j_[n].role})]}),(0,Q.jsxs)(`span`,{className:`cc-vj-ttotal`,children:[`/ `,String(l).padStart(2,`0`)]})]}),(0,Q.jsx)(`div`,{className:`cc-vj-tbar cc-vj-tbar--r`,children:(0,Q.jsx)(`div`,{className:`cc-vj-tbar-fill`,style:{width:`${(l-n-1)/l*100}%`}})})]}),(0,Q.jsx)(`p`,{className:`cc-vj-hint${i?` cc-vj-hint--paused`:``}`,children:i?`● PAUSED — HOVER TO PREVIEW`:`● AUTO SCROLLING — HOVER TO PAUSE`})]},`vj`),e===`openpannaa`&&(0,Q.jsxs)($.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-16},transition:{duration:.45,ease:[.16,1,.3,1]},children:[(0,Q.jsxs)(`div`,{className:`cc-op-hero`,children:[(0,Q.jsx)(`img`,{src:A.openpanna,alt:`Open Pannaa`,className:`cc-op-hero-img`}),(0,Q.jsx)(`div`,{className:`cc-op-hero-vig`}),(0,Q.jsxs)(`div`,{className:`cc-op-hero-bar`,children:[(0,Q.jsxs)(`div`,{className:`cc-op-hero-live`,children:[(0,Q.jsx)($.div,{className:`cc-op-hero-dot`,animate:{opacity:[1,.15,1]},transition:{duration:1.5,repeat:1/0}}),(0,Q.jsx)(`span`,{className:`cc-op-hero-lbl`,children:`CHANNEL`})]}),(0,Q.jsx)(`span`,{className:`cc-op-hero-title`,children:`OPEN PANNAA`}),(0,Q.jsx)(`span`,{className:`cc-op-hero-badge`,children:`FILM CRITICISM`})]})]}),(0,Q.jsx)(`div`,{className:`cc-op-grid`,children:M_.map((e,t)=>(0,Q.jsx)(z_,{item:e,index:t},e.id))}),(0,Q.jsxs)(`div`,{className:`cc-op-footer`,children:[(0,Q.jsxs)(`div`,{className:`cc-op-logo-wrap`,children:[(0,Q.jsx)(`img`,{src:A.OpenPannaimg,alt:`Open Pannaa`,className:`cc-op-logo`}),(0,Q.jsx)($.div,{className:`cc-op-logo-ring`,animate:{rotate:360},transition:{duration:12,repeat:1/0,ease:`linear`}})]}),(0,Q.jsxs)(`div`,{className:`cc-op-meta`,children:[(0,Q.jsx)(`span`,{className:`cc-op-meta-over`,children:`FILM CRITICISM · REVIEWS · ANALYSIS`}),(0,Q.jsx)(`h3`,{className:`cc-op-meta-name`,children:`OPEN PANNAA`})]}),(0,Q.jsx)(`div`,{className:`cc-op-socials`,children:N_.map(({icon:e,href:t,label:n})=>(0,Q.jsx)(`a`,{href:t,target:`_blank`,rel:`noreferrer`,className:`cc-op-social`,"aria-label":n,children:(0,Q.jsx)(e,{size:16})},n))})]}),(0,Q.jsxs)(`a`,{href:`https://youtube.com/@OpenPannaa`,target:`_blank`,rel:`noreferrer`,className:`cc-op-cta`,children:[(0,Q.jsx)(`div`,{className:`cc-op-cta-bg`}),(0,Q.jsx)(`span`,{children:`WATCH ALL REVIEWS`}),(0,Q.jsx)(Qg,{size:12})]})]},`openpannaa`),e===`rj`&&(0,Q.jsx)($.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-16},transition:{duration:.45,ease:[.16,1,.3,1]},children:(0,Q.jsxs)(`div`,{className:`cc-rj-stage`,children:[(0,Q.jsxs)(`a`,{href:`https://soundcloud.com/rj-abishek`,target:`_blank`,rel:`noreferrer`,className:`cc-rj-card`,children:[(0,Q.jsx)(`img`,{src:A.AbishakeAudio,alt:`RJ Archive`,className:`cc-rj-img`}),(0,Q.jsxs)(`div`,{className:`cc-rj-strip`,children:[(0,Q.jsxs)(`div`,{className:`cc-rj-strip-l`,children:[(0,Q.jsx)(`span`,{className:`cc-rj-on-air`,children:`ON AIR`}),(0,Q.jsx)(`div`,{className:`cc-rj-dot`})]}),(0,Q.jsx)(`span`,{className:`cc-rj-strip-title`,children:`RJ ABISHEK · ARCHIVES`}),(0,Q.jsx)(Qg,{size:12,style:{color:`rgba(255,255,255,0.28)`,flexShrink:0}})]}),(0,Q.jsxs)(`div`,{className:`cc-rj-hover`,children:[(0,Q.jsx)(`div`,{className:`cc-rj-play-btn`,children:(0,Q.jsx)(r_,{fill:`black`,size:18})}),(0,Q.jsx)(`span`,{className:`cc-rj-hover-cta`,children:`LISTEN TO ALL EPISODES`}),(0,Q.jsx)(`span`,{className:`cc-rj-hover-sub`,children:`SOUNDCLOUD ARCHIVES`})]}),(0,Q.jsx)(`div`,{className:`cc-rj-wave`,children:Array.from({length:22}).map((e,t)=>(0,Q.jsx)(`div`,{className:`cc-rj-wave-bar`,style:{animationDelay:`${t*.07}s`,height:`${4+Math.random()*14}px`}},t))})]}),(0,Q.jsxs)(`div`,{className:`cc-rj-meta`,children:[(0,Q.jsxs)(`div`,{className:`cc-rj-meta-item`,children:[(0,Q.jsxs)(`span`,{className:`cc-rj-meta-num`,children:[`100`,(0,Q.jsx)(`span`,{className:`cc-rj-meta-plus`,children:`+`})]}),(0,Q.jsx)(`span`,{className:`cc-rj-meta-lbl`,children:`EPISODES`})]}),(0,Q.jsxs)(`div`,{className:`cc-rj-meta-item`,children:[(0,Q.jsx)(`span`,{className:`cc-rj-meta-num`,children:`FM`}),(0,Q.jsx)(`span`,{className:`cc-rj-meta-lbl`,children:`BROADCAST`})]}),(0,Q.jsxs)(`div`,{className:`cc-rj-meta-item`,children:[(0,Q.jsx)(`span`,{className:`cc-rj-meta-num`,children:`∞`}),(0,Q.jsx)(`span`,{className:`cc-rj-meta-lbl`,children:`ON DEMAND`})]})]})]})},`rj`)]})})]})})]})};function V_(){let[e,t]=(0,C.useState)(0),[n,r]=(0,C.useState)(!1),{scrollToSection:i,refs:a}=cg();(0,C.useEffect)(()=>{let e=!1,r=()=>{!n&&!e&&(e=!0,requestAnimationFrame(()=>{t(window.pageYOffset),e=!1}))};return window.addEventListener(`scroll`,r,{passive:!0}),()=>window.removeEventListener(`scroll`,r)},[n]),(0,C.useEffect)(()=>{document.body.style.overflow=n?`hidden`:`auto`},[n]);let o=e=>{r(!1),i(e)};return(0,Q.jsxs)(Tn,{basename:`/cinema-payyan-inc`,children:[(0,Q.jsx)(`style`,{children:`
        .cinenaPaitanBanner {
          background-attachment: scroll !important;
          will-change: transform;
        }

        .fci-heading-block {
          background: #000;
          padding: 72px clamp(20px, 6%, 60px) 64px;
          display: flex; flex-direction: column;
          align-items: center; text-align: center;
          position: relative;
        }
        .fci-heading-block::before {
          content: '';
          position: absolute; top: 0; left: 8%; right: 8%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(253,224,71,0.12) 50%, transparent);
        }
        .fci-name-display {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.8rem, 7.5vw, 7rem);
          font-weight: 400; letter-spacing: clamp(4px, 1vw, 10px);
          color: #fff; line-height: 0.92; margin: 0 0 16px;
        }
        .fci-roles-row {
          display: flex; align-items: center;
          flex-wrap: wrap; justify-content: center;
        }
        .fci-role {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(0.9rem, 2.2vw, 1.5rem);
          letter-spacing: clamp(3px, 0.6vw, 6px);
          color: rgba(255,255,255,0.4); text-transform: uppercase; white-space: nowrap;
        }
        .fci-role-dot {
          color: #fde047; margin: 0 clamp(8px, 1.2vw, 16px);
          opacity: 0.55; font-size: 1.1rem;
        }
        .fci-sub-item {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.48rem, 1.2vw, 0.6rem);
          font-weight: 400; letter-spacing: 4px;
          color: rgba(255,255,255,0.25); text-transform: uppercase; white-space: nowrap;
        }
        .fci-sub-sep {
          color: rgba(50,197,244,0.4);
          margin: 0 clamp(6px, 1vw, 14px); font-size: 0.5rem;
        }
        .fci-heading-rule {
          width: clamp(80px, 20%, 180px); height: 1px;
          background: linear-gradient(90deg, transparent, rgba(253,224,71,0.35), rgba(50,197,244,0.2), transparent);
          margin-top: 22px;
        }

        .banner-purchase-wrap { position: relative; }
        .banner-purchase-link {
          position: absolute; bottom: 24px; left: 50%;
          transform: translateX(-50%); z-index: 20;
          display: inline-flex; align-items: center; gap: 10px;
          text-decoration: none;
          background: rgba(0,0,0,0.72); backdrop-filter: blur(14px);
          border: 1px solid rgba(253,224,71,0.45);
          padding: 10px 22px;
          color: rgba(255,255,255,0.88);
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.48rem, 1.3vw, 0.58rem);
          font-weight: 700; letter-spacing: 4px; text-transform: uppercase;
          white-space: nowrap; overflow: hidden;
          transition: color 0.3s, border-color 0.3s;
          animation: bpl-pulse 2.8s ease-in-out infinite;
        }
        @keyframes bpl-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(253,224,71,0); border-color: rgba(253,224,71,0.45); }
          50%      { box-shadow: 0 0 18px 4px rgba(253,224,71,0.18); border-color: rgba(253,224,71,0.75); }
        }
        .banner-purchase-link::before {
          content: ''; position: absolute; inset: 0;
          background: #fde047;
          transform: scaleX(0); transform-origin: left; z-index: 0;
          transition: transform 0.38s cubic-bezier(0.77,0,0.18,1);
        }
        .banner-purchase-link:hover::before { transform: scaleX(1); }
        .banner-purchase-link:hover { color: #000; border-color: #fde047; }
        .banner-purchase-link > * { position: relative; z-index: 1; }
        .banner-purchase-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #fde047; box-shadow: 0 0 8px rgba(253,224,71,0.9);
          flex-shrink: 0; animation: bpd 1.4s step-end infinite;
        }
        @keyframes bpd { 0%,100%{opacity:1} 50%{opacity:0.2} }
        .banner-purchase-icon {
          width: 14px; height: 14px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }

        @media (max-width: 600px) {
          .fci-heading-block { padding: 52px 16px 48px; }
          .banner-purchase-link {
            bottom: 14px; padding: 8px 16px;
            font-size: 0.5rem; letter-spacing: 2.5px;
          }
        }
      `}),(0,Q.jsx)(O_,{refs:a}),(0,Q.jsxs)(Rt,{children:[(0,Q.jsx)(It,{path:`/`,element:(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(`div`,{className:`App`,id:`home`,ref:a.homeRef,children:[(0,Q.jsx)(tg,{onScrollRequest:o,refs:a,isMenuOpen:n,setIsMenuOpen:r}),(0,Q.jsx)(sg,{}),(0,Q.jsx)(ag,{onScrollRequest:o})]}),(0,Q.jsxs)(`div`,{className:`container1 banner-purchase-wrap`,children:[(0,Q.jsx)(`div`,{className:`cinenaPaitanBanner`,style:{backgroundImage:`url(${A.banner})`,"--scroll-offset":`${e}px`},children:(0,Q.jsx)(`div`,{className:`banner-overlay`})}),(0,Q.jsxs)(`a`,{href:`https://coveritup.com/collections/hoodies-sweatshirts`,target:`_blank`,rel:`noreferrer`,className:`banner-purchase-link`,children:[(0,Q.jsx)(`span`,{className:`banner-purchase-dot`}),(0,Q.jsx)(`span`,{className:`banner-purchase-icon`,children:(0,Q.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`14`,height:`14`,children:[(0,Q.jsx)(`path`,{d:`M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z`}),(0,Q.jsx)(`line`,{x1:`3`,y1:`6`,x2:`21`,y2:`6`}),(0,Q.jsx)(`path`,{d:`M16 10a4 4 0 01-8 0`})]})}),(0,Q.jsx)(`span`,{children:`SHOP THE LOOK — COVER IT UP`})]})]}),(0,Q.jsx)(E_,{variant:`timecode`,label:`CUT TO — ABOUT`,index:1}),(0,Q.jsx)(`section`,{id:`about`,ref:a.aboutRef,children:(0,Q.jsx)(lg,{})}),(0,Q.jsx)(E_,{variant:`filmstrip`,label:`CINEMA CHANNELS`}),(0,Q.jsx)(`section`,{id:`channels`,children:(0,Q.jsx)(B_,{})}),(0,Q.jsx)(E_,{variant:`scanline`,label:`HOST`}),(0,Q.jsx)(`section`,{id:`host`,children:(0,Q.jsx)(f_,{})}),(0,Q.jsx)(E_,{variant:`scanline`,label:`DIRECTOR`,index:5}),(0,Q.jsx)(`section`,{id:`director`,children:(0,Q.jsx)(m_,{})}),(0,Q.jsx)(E_,{variant:`marquee`,label:`CINEMAPAYYAN • CREATIVE PRODUCER`}),(0,Q.jsx)(`section`,{id:`producer`,ref:a.promotionsRef,children:(0,Q.jsx)(h_,{})}),(0,Q.jsx)(E_,{variant:`timecode`,label:`THE ACCELERATOR`,index:7}),(0,Q.jsx)(`section`,{id:`accelerator`,children:(0,Q.jsx)(g_,{})}),(0,Q.jsx)(E_,{variant:`reel`,label:`INKBLOOD & SHADOWS`}),(0,Q.jsx)(`section`,{id:`inkblood`,children:(0,Q.jsx)(A_,{})}),(0,Q.jsx)(E_,{variant:`scanline`,label:`SHORTS PROMOTION`,index:11}),(0,Q.jsx)(`section`,{id:`shorts`,children:(0,Q.jsx)(vg,{})}),(0,Q.jsx)(E_,{variant:`filmstrip`,label:`FINISHED PROJECTS`}),(0,Q.jsx)(`section`,{id:`work`,ref:a.workRef,children:(0,Q.jsx)(fg,{})}),(0,Q.jsx)(E_,{variant:`slash`,label:`TIE-UP PARTNERS`,index:9}),(0,Q.jsx)(`section`,{id:`partners`,children:(0,Q.jsx)(hg,{})}),(0,Q.jsx)(E_,{variant:`timecode`,label:`BOOK A SESSION`,index:13}),(0,Q.jsx)(`section`,{id:`contact`,ref:a.contactRef,children:(0,Q.jsx)(Rg,{})}),(0,Q.jsx)(E_,{variant:`slash`,label:`FIN`,index:14}),(0,Q.jsx)(zg,{})]})}),(0,Q.jsx)(It,{path:`/munai`,element:(0,Q.jsx)(Vg,{})})]})]})}Kn.createRoot(document.getElementById(`root`)).render((0,Q.jsx)(C.StrictMode,{children:(0,Q.jsx)(V_,{})}));