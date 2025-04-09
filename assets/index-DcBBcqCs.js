(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const Jc=()=>{};var uo={};/**
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
 */const Pa=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Zc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],l=n[e++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Va={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,h=i+2<n.length,f=h?n[i+2]:0,_=o>>2,w=(o&3)<<4|l>>4;let C=(l&15)<<2|f>>6,S=f&63;h||(S=64,a||(C=64)),r.push(e[_],e[w],e[C],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Pa(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Zc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const w=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||l==null||f==null||w==null)throw new tl;const C=o<<2|l>>4;if(r.push(C),f!==64){const S=l<<4&240|f>>2;if(r.push(S),w!==64){const k=f<<6&192|w;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class tl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const el=function(n){const t=Pa(n);return Va.encodeByteArray(t,!0)},Wn=function(n){return el(n).replace(/\./g,"")},nl=function(n){try{return Va.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function rl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sl=()=>rl().__FIREBASE_DEFAULTS__,il=()=>{if(typeof process>"u"||typeof uo>"u")return;const n=uo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ol=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&nl(n[1]);return t&&JSON.parse(t)},Vs=()=>{try{return Jc()||sl()||il()||ol()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},al=n=>{var t,e;return(e=(t=Vs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},ul=n=>{const t=al(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Da=()=>{var n;return(n=Vs())===null||n===void 0?void 0:n.config};/**
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
 */class cl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function ll(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Wn(JSON.stringify(e)),Wn(JSON.stringify(a)),""].join(".")}/**
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
 */function hl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dl(){var n;const t=(n=Vs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function pl(){return!dl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ka(){try{return typeof indexedDB=="object"}catch{return!1}}function Na(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function gl(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const ml="FirebaseError";class te extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=ml,Object.setPrototypeOf(this,te.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ar.prototype.create)}}class ar{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?_l(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new te(i,l,r)}}function _l(n,t){return n.replace(yl,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const yl=/\{\$([^}]+)}/g;function Xn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if(co(o)&&co(a)){if(!Xn(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function co(n){return n!==null&&typeof n=="object"}/**
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
 */const El=1e3,Tl=2,vl=4*60*60*1e3,Il=.5;function lo(n,t=El,e=Tl){const r=t*Math.pow(e,n),i=Math.round(Il*r*(Math.random()-.5)*2);return Math.min(vl,r+i)}/**
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
 */function Ds(n){return n&&n._delegate?n._delegate:n}class Mt{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ie="[DEFAULT]";/**
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
 */class wl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new cl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Rl(t))try{this.getOrInitializeService({instanceIdentifier:ie})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=ie){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ie){return this.instances.has(t)}getOptions(t=ie){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Al(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ie){return this.component?this.component.multipleInstances?t:ie:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Al(n){return n===ie?void 0:n}function Rl(n){return n.instantiationMode==="EAGER"}/**
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
 */class Cl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new wl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const Sl={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},bl=B.INFO,Pl={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Vl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Pl[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ks{constructor(t){this.name=t,this._logLevel=bl,this._logHandler=Vl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Sl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const Dl=(n,t)=>t.some(e=>n instanceof e);let ho,fo;function kl(){return ho||(ho=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nl(){return fo||(fo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Oa=new WeakMap,ss=new WeakMap,Ma=new WeakMap,Kr=new WeakMap,Ns=new WeakMap;function Ol(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(zt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Oa.set(e,n)}).catch(()=>{}),Ns.set(t,n),t}function Ml(n){if(ss.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ss.set(n,t)}let is={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ss.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ma.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return zt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function xl(n){is=n(is)}function Ll(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Gr(this),t,...e);return Ma.set(r,t.sort?t.sort():[t]),zt(r)}:Nl().includes(n)?function(...t){return n.apply(Gr(this),t),zt(Oa.get(this))}:function(...t){return zt(n.apply(Gr(this),t))}}function Fl(n){return typeof n=="function"?Ll(n):(n instanceof IDBTransaction&&Ml(n),Dl(n,kl())?new Proxy(n,is):n)}function zt(n){if(n instanceof IDBRequest)return Ol(n);if(Kr.has(n))return Kr.get(n);const t=Fl(n);return t!==n&&(Kr.set(n,t),Ns.set(t,n)),t}const Gr=n=>Ns.get(n);function xa(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,t),l=zt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(zt(a.result),h.oldVersion,h.newVersion,zt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Ul=["get","getKey","getAll","getAllKeys","count"],Bl=["put","add","delete","clear"],Qr=new Map;function po(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Qr.get(t))return Qr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Bl.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ul.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,i?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[e](...l),i&&h.done]))[0]};return Qr.set(t,o),o}xl(n=>({...n,get:(t,e,r)=>po(t,e)||n.get(t,e,r),has:(t,e)=>!!po(t,e)||n.has(t,e)}));/**
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
 */class $l{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ql(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function ql(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const os="@firebase/app",go="0.11.4";/**
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
 */const xt=new ks("@firebase/app"),jl="@firebase/app-compat",zl="@firebase/analytics-compat",Hl="@firebase/analytics",Kl="@firebase/app-check-compat",Gl="@firebase/app-check",Ql="@firebase/auth",Wl="@firebase/auth-compat",Xl="@firebase/database",Yl="@firebase/data-connect",Jl="@firebase/database-compat",Zl="@firebase/functions",th="@firebase/functions-compat",eh="@firebase/installations",nh="@firebase/installations-compat",rh="@firebase/messaging",sh="@firebase/messaging-compat",ih="@firebase/performance",oh="@firebase/performance-compat",ah="@firebase/remote-config",uh="@firebase/remote-config-compat",ch="@firebase/storage",lh="@firebase/storage-compat",hh="@firebase/firestore",dh="@firebase/vertexai",fh="@firebase/firestore-compat",ph="firebase",gh="11.6.0";/**
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
 */const as="[DEFAULT]",mh={[os]:"fire-core",[jl]:"fire-core-compat",[Hl]:"fire-analytics",[zl]:"fire-analytics-compat",[Gl]:"fire-app-check",[Kl]:"fire-app-check-compat",[Ql]:"fire-auth",[Wl]:"fire-auth-compat",[Xl]:"fire-rtdb",[Yl]:"fire-data-connect",[Jl]:"fire-rtdb-compat",[Zl]:"fire-fn",[th]:"fire-fn-compat",[eh]:"fire-iid",[nh]:"fire-iid-compat",[rh]:"fire-fcm",[sh]:"fire-fcm-compat",[ih]:"fire-perf",[oh]:"fire-perf-compat",[ah]:"fire-rc",[uh]:"fire-rc-compat",[ch]:"fire-gcs",[lh]:"fire-gcs-compat",[hh]:"fire-fst",[fh]:"fire-fst-compat",[dh]:"fire-vertex","fire-js":"fire-js",[ph]:"fire-js-all"};/**
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
 */const Yn=new Map,_h=new Map,us=new Map;function mo(n,t){try{n.container.addComponent(t)}catch(e){xt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Gt(n){const t=n.name;if(us.has(t))return xt.debug(`There were multiple attempts to register component ${t}.`),!1;us.set(t,n);for(const e of Yn.values())mo(e,n);for(const e of _h.values())mo(e,n);return!0}function Os(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function yh(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Eh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new ar("app","Firebase",Eh);/**
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
 */class Th{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
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
 */const vh=gh;function La(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:as,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ht.create("bad-app-name",{appName:String(i)});if(e||(e=Da()),!e)throw Ht.create("no-options");const o=Yn.get(i);if(o){if(Xn(e,o.options)&&Xn(r,o.config))return o;throw Ht.create("duplicate-app",{appName:i})}const a=new Cl(i);for(const h of us.values())a.addComponent(h);const l=new Th(e,r,a);return Yn.set(i,l),l}function Ih(n=as){const t=Yn.get(n);if(!t&&n===as&&Da())return La();if(!t)throw Ht.create("no-app",{appName:n});return t}function St(n,t,e){var r;let i=(r=mh[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xt.warn(l.join(" "));return}Gt(new Mt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const wh="firebase-heartbeat-database",Ah=1,ln="firebase-heartbeat-store";let Wr=null;function Fa(){return Wr||(Wr=xa(wh,Ah,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ln)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ht.create("idb-open",{originalErrorMessage:n.message})})),Wr}async function Rh(n){try{const e=(await Fa()).transaction(ln),r=await e.objectStore(ln).get(Ua(n));return await e.done,r}catch(t){if(t instanceof te)xt.warn(t.message);else{const e=Ht.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});xt.warn(e.message)}}}async function _o(n,t){try{const r=(await Fa()).transaction(ln,"readwrite");await r.objectStore(ln).put(t,Ua(n)),await r.done}catch(e){if(e instanceof te)xt.warn(e.message);else{const r=Ht.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});xt.warn(r.message)}}}function Ua(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ch=1024,Sh=30;class bh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Vh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=yo();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Sh){const a=Dh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=yo(),{heartbeatsToSend:r,unsentEntries:i}=Ph(this._heartbeatsCache.heartbeats),o=Wn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return xt.warn(e),""}}}function yo(){return new Date().toISOString().substring(0,10)}function Ph(n,t=Ch){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Eo(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Eo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Vh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ka()?Na().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Rh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return _o(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return _o(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Eo(n){return Wn(JSON.stringify({version:2,heartbeats:n})).length}function Dh(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function kh(n){Gt(new Mt("platform-logger",t=>new $l(t),"PRIVATE")),Gt(new Mt("heartbeat",t=>new bh(t),"PRIVATE")),St(os,go,n),St(os,go,"esm2017"),St("fire-js","")}kh("");var Nh="firebase",Oh="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St(Nh,Oh,"app");const Ba="@firebase/installations",Ms="0.6.13";/**
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
 */const $a=1e4,qa=`w:${Ms}`,ja="FIS_v2",Mh="https://firebaseinstallations.googleapis.com/v1",xh=60*60*1e3,Lh="installations",Fh="Installations";/**
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
 */const Uh={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ce=new ar(Lh,Fh,Uh);function za(n){return n instanceof te&&n.code.includes("request-failed")}/**
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
 */function Ha({projectId:n}){return`${Mh}/projects/${n}/installations`}function Ka(n){return{token:n.token,requestStatus:2,expiresIn:$h(n.expiresIn),creationTime:Date.now()}}async function Ga(n,t){const r=(await t.json()).error;return ce.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Qa({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Bh(n,{refreshToken:t}){const e=Qa(n);return e.append("Authorization",qh(t)),e}async function Wa(n){const t=await n();return t.status>=500&&t.status<600?n():t}function $h(n){return Number(n.replace("s","000"))}function qh(n){return`${ja} ${n}`}/**
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
 */async function jh({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=Ha(n),i=Qa(n),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={fid:e,authVersion:ja,appId:n.appId,sdkVersion:qa},l={method:"POST",headers:i,body:JSON.stringify(a)},h=await Wa(()=>fetch(r,l));if(h.ok){const f=await h.json();return{fid:f.fid||e,registrationStatus:2,refreshToken:f.refreshToken,authToken:Ka(f.authToken)}}else throw await Ga("Create Installation",h)}/**
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
 */function Xa(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function zh(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Hh=/^[cdef][\w-]{21}$/,cs="";function Kh(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=Gh(n);return Hh.test(e)?e:cs}catch{return cs}}function Gh(n){return zh(n).substr(0,22)}/**
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
 */function ur(n){return`${n.appName}!${n.appId}`}/**
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
 */const Ya=new Map;function Ja(n,t){const e=ur(n);Za(e,t),Qh(e,t)}function Za(n,t){const e=Ya.get(n);if(e)for(const r of e)r(t)}function Qh(n,t){const e=Wh();e&&e.postMessage({key:n,fid:t}),Xh()}let oe=null;function Wh(){return!oe&&"BroadcastChannel"in self&&(oe=new BroadcastChannel("[Firebase] FID Change"),oe.onmessage=n=>{Za(n.data.key,n.data.fid)}),oe}function Xh(){Ya.size===0&&oe&&(oe.close(),oe=null)}/**
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
 */const Yh="firebase-installations-database",Jh=1,le="firebase-installations-store";let Xr=null;function xs(){return Xr||(Xr=xa(Yh,Jh,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(le)}}})),Xr}async function Jn(n,t){const e=ur(n),i=(await xs()).transaction(le,"readwrite"),o=i.objectStore(le),a=await o.get(e);return await o.put(t,e),await i.done,(!a||a.fid!==t.fid)&&Ja(n,t.fid),t}async function tu(n){const t=ur(n),r=(await xs()).transaction(le,"readwrite");await r.objectStore(le).delete(t),await r.done}async function cr(n,t){const e=ur(n),i=(await xs()).transaction(le,"readwrite"),o=i.objectStore(le),a=await o.get(e),l=t(a);return l===void 0?await o.delete(e):await o.put(l,e),await i.done,l&&(!a||a.fid!==l.fid)&&Ja(n,l.fid),l}/**
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
 */async function Ls(n){let t;const e=await cr(n.appConfig,r=>{const i=Zh(r),o=td(n,i);return t=o.registrationPromise,o.installationEntry});return e.fid===cs?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function Zh(n){const t=n||{fid:Kh(),registrationStatus:0};return eu(t)}function td(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ce.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ed(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:nd(n)}:{installationEntry:t}}async function ed(n,t){try{const e=await jh(n,t);return Jn(n.appConfig,e)}catch(e){throw za(e)&&e.customData.serverCode===409?await tu(n.appConfig):await Jn(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function nd(n){let t=await To(n.appConfig);for(;t.registrationStatus===1;)await Xa(100),t=await To(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await Ls(n);return r||e}return t}function To(n){return cr(n,t=>{if(!t)throw ce.create("installation-not-found");return eu(t)})}function eu(n){return rd(n)?{fid:n.fid,registrationStatus:0}:n}function rd(n){return n.registrationStatus===1&&n.registrationTime+$a<Date.now()}/**
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
 */async function sd({appConfig:n,heartbeatServiceProvider:t},e){const r=id(n,e),i=Bh(n,e),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={installation:{sdkVersion:qa,appId:n.appId}},l={method:"POST",headers:i,body:JSON.stringify(a)},h=await Wa(()=>fetch(r,l));if(h.ok){const f=await h.json();return Ka(f)}else throw await Ga("Generate Auth Token",h)}function id(n,{fid:t}){return`${Ha(n)}/${t}/authTokens:generate`}/**
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
 */async function Fs(n,t=!1){let e;const r=await cr(n.appConfig,o=>{if(!nu(o))throw ce.create("not-registered");const a=o.authToken;if(!t&&ud(a))return o;if(a.requestStatus===1)return e=od(n,t),o;{if(!navigator.onLine)throw ce.create("app-offline");const l=ld(o);return e=ad(n,l),l}});return e?await e:r.authToken}async function od(n,t){let e=await vo(n.appConfig);for(;e.authToken.requestStatus===1;)await Xa(100),e=await vo(n.appConfig);const r=e.authToken;return r.requestStatus===0?Fs(n,t):r}function vo(n){return cr(n,t=>{if(!nu(t))throw ce.create("not-registered");const e=t.authToken;return hd(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ad(n,t){try{const e=await sd(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await Jn(n.appConfig,r),e}catch(e){if(za(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await tu(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Jn(n.appConfig,r)}throw e}}function nu(n){return n!==void 0&&n.registrationStatus===2}function ud(n){return n.requestStatus===2&&!cd(n)}function cd(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+xh}function ld(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function hd(n){return n.requestStatus===1&&n.requestTime+$a<Date.now()}/**
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
 */async function dd(n){const t=n,{installationEntry:e,registrationPromise:r}=await Ls(t);return r?r.catch(console.error):Fs(t).catch(console.error),e.fid}/**
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
 */async function fd(n,t=!1){const e=n;return await pd(e),(await Fs(e,t)).token}async function pd(n){const{registrationPromise:t}=await Ls(n);t&&await t}/**
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
 */function gd(n){if(!n||!n.options)throw Yr("App Configuration");if(!n.name)throw Yr("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw Yr(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Yr(n){return ce.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="installations",md="installations-internal",_d=n=>{const t=n.getProvider("app").getImmediate(),e=gd(t),r=Os(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},yd=n=>{const t=n.getProvider("app").getImmediate(),e=Os(t,ru).getImmediate();return{getId:()=>dd(e),getToken:i=>fd(e,i)}};function Ed(){Gt(new Mt(ru,_d,"PUBLIC")),Gt(new Mt(md,yd,"PRIVATE"))}Ed();St(Ba,Ms);St(Ba,Ms,"esm2017");/**
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
 */const Io="analytics",Td="firebase_id",vd="origin",Id=60*1e3,wd="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Us="https://www.googletagmanager.com/gtag/js";/**
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
 */const Tt=new ks("@firebase/analytics");/**
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
 */const Ad={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},wt=new ar("analytics","Analytics",Ad);/**
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
 */function Rd(n){if(!n.startsWith(Us)){const t=wt.create("invalid-gtag-resource",{gtagURL:n});return Tt.warn(t.message),""}return n}function su(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function Cd(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function Sd(n,t){const e=Cd("firebase-js-sdk-policy",{createScriptURL:Rd}),r=document.createElement("script"),i=`${Us}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function bd(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function Pd(n,t,e,r,i,o){const a=r[i];try{if(a)await t[a];else{const h=(await su(e)).find(f=>f.measurementId===i);h&&await t[h.appId]}}catch(l){Tt.error(l)}n("config",i,o)}async function Vd(n,t,e,r,i){try{let o=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const l=await su(e);for(const h of a){const f=l.find(w=>w.measurementId===h),_=f&&t[f.appId];if(_)o.push(_);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,i||{})}catch(o){Tt.error(o)}}function Dd(n,t,e,r){async function i(o,...a){try{if(o==="event"){const[l,h]=a;await Vd(n,t,e,l,h)}else if(o==="config"){const[l,h]=a;await Pd(n,t,e,r,l,h)}else if(o==="consent"){const[l,h]=a;n("consent",l,h)}else if(o==="get"){const[l,h,f]=a;n("get",l,h,f)}else if(o==="set"){const[l]=a;n("set",l)}else n(o,...a)}catch(l){Tt.error(l)}}return i}function kd(n,t,e,r,i){let o=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Dd(o,n,t,e),{gtagCore:o,wrappedGtag:window[i]}}function Nd(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Us)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=30,Md=1e3;class xd{constructor(t={},e=Md){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const iu=new xd;function Ld(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Fd(n){var t;const{appId:e,apiKey:r}=n,i={method:"GET",headers:Ld(r)},o=wd.replace("{app-id}",e),a=await fetch(o,i);if(a.status!==200&&a.status!==304){let l="";try{const h=await a.json();!((t=h.error)===null||t===void 0)&&t.message&&(l=h.error.message)}catch{}throw wt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function Ud(n,t=iu,e){const{appId:r,apiKey:i,measurementId:o}=n.options;if(!r)throw wt.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw wt.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new qd;return setTimeout(async()=>{l.abort()},Id),ou({appId:r,apiKey:i,measurementId:o},a,l,t)}async function ou(n,{throttleEndTimeMillis:t,backoffCount:e},r,i=iu){var o;const{appId:a,measurementId:l}=n;try{await Bd(r,t)}catch(h){if(l)return Tt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw h}try{const h=await Fd(n);return i.deleteThrottleMetadata(a),h}catch(h){const f=h;if(!$d(f)){if(i.deleteThrottleMetadata(a),l)return Tt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:a,measurementId:l};throw h}const _=Number((o=f==null?void 0:f.customData)===null||o===void 0?void 0:o.httpStatus)===503?lo(e,i.intervalMillis,Od):lo(e,i.intervalMillis),w={throttleEndTimeMillis:Date.now()+_,backoffCount:e+1};return i.setThrottleMetadata(a,w),Tt.debug(`Calling attemptFetch again in ${_} millis`),ou(n,w,r,i)}}function Bd(n,t){return new Promise((e,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(e,i);n.addEventListener(()=>{clearTimeout(o),r(wt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function $d(n){if(!(n instanceof te)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class qd{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function jd(n,t,e,r,i){if(i&&i.global){n("event",e,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});n("event",e,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zd(){if(ka())try{await Na()}catch(n){return Tt.warn(wt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Tt.warn(wt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Hd(n,t,e,r,i,o,a){var l;const h=Ud(n);h.then(S=>{e[S.measurementId]=S.appId,n.options.measurementId&&S.measurementId!==n.options.measurementId&&Tt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>Tt.error(S)),t.push(h);const f=zd().then(S=>{if(S)return r.getId()}),[_,w]=await Promise.all([h,f]);Nd(o)||Sd(o,_.measurementId),i("js",new Date);const C=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return C[vd]="firebase",C.update=!0,w!=null&&(C[Td]=w),i("config",_.measurementId,C),_.measurementId}/**
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
 */class Kd{constructor(t){this.app=t}_delete(){return delete rn[this.app.options.appId],Promise.resolve()}}let rn={},wo=[];const Ao={};let Jr="dataLayer",Gd="gtag",Ro,au,Co=!1;function Qd(){const n=[];if(fl()&&n.push("This is a browser extension environment."),gl()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),e=wt.create("invalid-analytics-context",{errorInfo:t});Tt.warn(e.message)}}function Wd(n,t,e){Qd();const r=n.options.appId;if(!r)throw wt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Tt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw wt.create("no-api-key");if(rn[r]!=null)throw wt.create("already-exists",{id:r});if(!Co){bd(Jr);const{wrappedGtag:o,gtagCore:a}=kd(rn,wo,Ao,Jr,Gd);au=o,Ro=a,Co=!0}return rn[r]=Hd(n,wo,Ao,t,Ro,Jr,e),new Kd(n)}function Xd(n,t,e,r){n=Ds(n),jd(au,rn[n.app.options.appId],t,e,r).catch(i=>Tt.error(i))}const So="@firebase/analytics",bo="0.10.12";function Yd(){Gt(new Mt(Io,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Wd(r,i,e)},"PUBLIC")),Gt(new Mt("analytics-internal",n,"PRIVATE")),St(So,bo),St(So,bo,"esm2017");function n(t){try{const e=t.getProvider(Io).getImmediate();return{logEvent:(r,i,o)=>Xd(e,r,i,o)}}catch(e){throw wt.create("interop-component-reg-failed",{reason:e})}}}Yd();var Po=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kt,uu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function m(){}m.prototype=p.prototype,T.D=p.prototype,T.prototype=new m,T.prototype.constructor=T,T.C=function(y,E,I){for(var g=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)g[kt-2]=arguments[kt];return p.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,p,m){m||(m=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(E=0;16>E;++E)y[E]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=T.g[0],m=T.g[1],E=T.g[2];var I=T.g[3],g=p+(I^m&(E^I))+y[0]+3614090360&4294967295;p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[1]+3905402710&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[2]+606105819&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[3]+3250441966&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(I^m&(E^I))+y[4]+4118548399&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[5]+1200080426&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[6]+2821735955&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[7]+4249261313&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(I^m&(E^I))+y[8]+1770035416&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[9]+2336552879&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[10]+4294925233&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[11]+2304563134&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(I^m&(E^I))+y[12]+1804603682&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[13]+4254626195&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[14]+2792965006&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[15]+1236535329&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(E^I&(m^E))+y[1]+4129170786&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[6]+3225465664&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[11]+643717713&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[0]+3921069994&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(m^E))+y[5]+3593408605&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[10]+38016083&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[15]+3634488961&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[4]+3889429448&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(m^E))+y[9]+568446438&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[14]+3275163606&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[3]+4107603335&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[8]+1163531501&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(m^E))+y[13]+2850285829&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[2]+4243563512&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[7]+1735328473&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[12]+2368359562&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(m^E^I)+y[5]+4294588738&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[8]+2272392833&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[11]+1839030562&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[14]+4259657740&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^I)+y[1]+2763975236&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[4]+1272893353&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[7]+4139469664&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[10]+3200236656&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^I)+y[13]+681279174&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[0]+3936430074&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[3]+3572445317&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[6]+76029189&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^I)+y[9]+3654602809&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[12]+3873151461&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[15]+530742520&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[2]+3299628645&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(E^(m|~I))+y[0]+4096336452&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[7]+1126891415&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[14]+2878612391&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[5]+4237533241&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~I))+y[12]+1700485571&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[3]+2399980690&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[10]+4293915773&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[1]+2240044497&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~I))+y[8]+1873313359&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[15]+4264355552&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[6]+2734768916&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[13]+1309151649&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~I))+y[4]+4149444226&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[11]+3174756917&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[2]+718787259&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+I&4294967295}r.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var m=p-this.blockSize,y=this.B,E=this.h,I=0;I<p;){if(E==0)for(;I<=m;)i(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<p;)if(y[E++]=T.charCodeAt(I++),E==this.blockSize){i(this,y),E=0;break}}else for(;I<p;)if(y[E++]=T[I++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var m=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=m&255,m/=256;for(this.u(T),T=Array(16),p=m=0;4>p;++p)for(var y=0;32>y;y+=8)T[m++]=this.g[p]>>>y&255;return T};function o(T,p){var m=l;return Object.prototype.hasOwnProperty.call(m,T)?m[T]:m[T]=p(T)}function a(T,p){this.h=p;for(var m=[],y=!0,E=T.length-1;0<=E;E--){var I=T[E]|0;y&&I==p||(m[E]=I,y=!1)}this.g=m}var l={};function h(T){return-128<=T&&128>T?o(T,function(p){return new a([p|0],0>p?-1:0)}):new a([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return w;if(0>T)return D(f(-T));for(var p=[],m=1,y=0;T>=m;y++)p[y]=T/m|0,m*=4294967296;return new a(p,0)}function _(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return D(_(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(p,8)),y=w,E=0;E<T.length;E+=8){var I=Math.min(8,T.length-E),g=parseInt(T.substring(E,E+I),p);8>I?(I=f(Math.pow(p,I)),y=y.j(I).add(f(g))):(y=y.j(m),y=y.add(f(g)))}return y}var w=h(0),C=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(M(this))return-D(this).m();for(var T=0,p=1,m=0;m<this.g.length;m++){var y=this.i(m);T+=(0<=y?y:4294967296+y)*p,p*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(M(this))return"-"+D(this).toString(T);for(var p=f(Math.pow(T,6)),m=this,y="";;){var E=rt(m,p).g;m=K(m,E.j(p));var I=((0<m.g.length?m.g[0]:m.h)>>>0).toString(T);if(m=E,k(m))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function M(T){return T.h==-1}n.l=function(T){return T=K(this,T),M(T)?-1:k(T)?0:1};function D(T){for(var p=T.g.length,m=[],y=0;y<p;y++)m[y]=~T.g[y];return new a(m,~T.h).add(C)}n.abs=function(){return M(this)?D(this):this},n.add=function(T){for(var p=Math.max(this.g.length,T.g.length),m=[],y=0,E=0;E<=p;E++){var I=y+(this.i(E)&65535)+(T.i(E)&65535),g=(I>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=g>>>16,I&=65535,g&=65535,m[E]=g<<16|I}return new a(m,m[m.length-1]&-2147483648?-1:0)};function K(T,p){return T.add(D(p))}n.j=function(T){if(k(this)||k(T))return w;if(M(this))return M(T)?D(this).j(D(T)):D(D(this).j(T));if(M(T))return D(this.j(D(T)));if(0>this.l(S)&&0>T.l(S))return f(this.m()*T.m());for(var p=this.g.length+T.g.length,m=[],y=0;y<2*p;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var I=this.i(y)>>>16,g=this.i(y)&65535,kt=T.i(E)>>>16,xe=T.i(E)&65535;m[2*y+2*E]+=g*xe,Q(m,2*y+2*E),m[2*y+2*E+1]+=I*xe,Q(m,2*y+2*E+1),m[2*y+2*E+1]+=g*kt,Q(m,2*y+2*E+1),m[2*y+2*E+2]+=I*kt,Q(m,2*y+2*E+2)}for(y=0;y<p;y++)m[y]=m[2*y+1]<<16|m[2*y];for(y=p;y<2*p;y++)m[y]=0;return new a(m,0)};function Q(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function G(T,p){this.g=T,this.h=p}function rt(T,p){if(k(p))throw Error("division by zero");if(k(T))return new G(w,w);if(M(T))return p=rt(D(T),p),new G(D(p.g),D(p.h));if(M(p))return p=rt(T,D(p)),new G(D(p.g),p.h);if(30<T.g.length){if(M(T)||M(p))throw Error("slowDivide_ only works with positive integers.");for(var m=C,y=p;0>=y.l(T);)m=Dt(m),y=Dt(y);var E=it(m,1),I=it(y,1);for(y=it(y,2),m=it(m,2);!k(y);){var g=I.add(y);0>=g.l(T)&&(E=E.add(m),I=g),y=it(y,1),m=it(m,1)}return p=K(T,E.j(p)),new G(E,p)}for(E=w;0<=T.l(p);){for(m=Math.max(1,Math.floor(T.m()/p.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(m),g=I.j(p);M(g)||0<g.l(T);)m-=y,I=f(m),g=I.j(p);k(I)&&(I=C),E=E.add(I),T=K(T,g)}return new G(E,T)}n.A=function(T){return rt(this,T).h},n.and=function(T){for(var p=Math.max(this.g.length,T.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)&T.i(y);return new a(m,this.h&T.h)},n.or=function(T){for(var p=Math.max(this.g.length,T.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)|T.i(y);return new a(m,this.h|T.h)},n.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)^T.i(y);return new a(m,this.h^T.h)};function Dt(T){for(var p=T.g.length+1,m=[],y=0;y<p;y++)m[y]=T.i(y)<<1|T.i(y-1)>>>31;return new a(m,T.h)}function it(T,p){var m=p>>5;p%=32;for(var y=T.g.length-m,E=[],I=0;I<y;I++)E[I]=0<p?T.i(I+m)>>>p|T.i(I+m+1)<<32-p:T.i(I+m);return new a(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,uu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=_,Kt=a}).apply(typeof Po<"u"?Po:typeof self<"u"?self:typeof window<"u"?window:{});var Fn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cu,Ze,lu,jn,ls,hu,du,fu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,u,c){return s==Array.prototype||s==Object.prototype||(s[u]=c.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fn=="object"&&Fn];for(var u=0;u<s.length;++u){var c=s[u];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function i(s,u){if(u)t:{var c=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var v=s[d];if(!(v in c))break t;c=c[v]}s=s[s.length-1],d=c[s],u=u(d),u!=d&&u!=null&&t(c,s,{configurable:!0,writable:!0,value:u})}}function o(s,u){s instanceof String&&(s+="");var c=0,d=!1,v={next:function(){if(!d&&c<s.length){var A=c++;return{value:u(A,s[A]),done:!1}}return d=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}i("Array.prototype.values",function(s){return s||function(){return o(this,function(u,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(s){var u=typeof s;return u=u!="object"?u:s?Array.isArray(s)?"array":u:"null",u=="array"||u=="object"&&typeof s.length=="number"}function f(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function _(s,u,c){return s.call.apply(s.bind,arguments)}function w(s,u,c){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,d),s.apply(u,v)}}return function(){return s.apply(u,arguments)}}function C(s,u,c){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:w,C.apply(null,arguments)}function S(s,u){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function k(s,u){function c(){}c.prototype=u.prototype,s.aa=u.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(d,v,A){for(var b=Array(arguments.length-2),z=2;z<arguments.length;z++)b[z-2]=arguments[z];return u.prototype[v].apply(d,b)}}function M(s){const u=s.length;if(0<u){const c=Array(u);for(let d=0;d<u;d++)c[d]=s[d];return c}return[]}function D(s,u){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const v=s.length||0,A=d.length||0;s.length=v+A;for(let b=0;b<A;b++)s[v+b]=d[b]}else s.push(d)}}class K{constructor(u,c){this.i=u,this.j=c,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function Q(s){return/^[\s\xa0]*$/.test(s)}function G(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function rt(s){return rt[" "](s),s}rt[" "]=function(){};var Dt=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function it(s,u,c){for(const d in s)u.call(c,s[d],d,s)}function T(s,u){for(const c in s)u.call(void 0,s[c],c,s)}function p(s){const u={};for(const c in s)u[c]=s[c];return u}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,u){let c,d;for(let v=1;v<arguments.length;v++){d=arguments[v];for(c in d)s[c]=d[c];for(let A=0;A<m.length;A++)c=m[A],Object.prototype.hasOwnProperty.call(d,c)&&(s[c]=d[c])}}function E(s){var u=1;s=s.split(":");const c=[];for(;0<u&&s.length;)c.push(s.shift()),u--;return s.length&&c.push(s.join(":")),c}function I(s){l.setTimeout(()=>{throw s},0)}function g(){var s=Ir;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class kt{constructor(){this.h=this.g=null}add(u,c){const d=xe.get();d.set(u,c),this.h?this.h.next=d:this.g=d,this.h=d}}var xe=new K(()=>new _c,s=>s.reset());class _c{constructor(){this.next=this.g=this.h=null}set(u,c){this.h=u,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Le,Fe=!1,Ir=new kt,ui=()=>{const s=l.Promise.resolve(void 0);Le=()=>{s.then(yc)}};var yc=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(c){I(c)}var u=xe;u.j(s),100>u.h&&(u.h++,s.next=u.g,u.g=s)}Fe=!1};function Ft(){this.s=this.s,this.C=this.C}Ft.prototype.s=!1,Ft.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ft.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ct(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var Ec=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};l.addEventListener("test",c,u),l.removeEventListener("test",c,u)}catch{}return s}();function Ue(s,u){if(ct.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget){if(Dt){t:{try{rt(u.nodeName);var v=!0;break t}catch{}v=!1}v||(u=null)}}else c=="mouseover"?u=s.fromElement:c=="mouseout"&&(u=s.toElement);this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Tc[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ue.aa.h.call(this)}}k(Ue,ct);var Tc={2:"touch",3:"pen",4:"mouse"};Ue.prototype.h=function(){Ue.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var En="closure_listenable_"+(1e6*Math.random()|0),vc=0;function Ic(s,u,c,d,v){this.listener=s,this.proxy=null,this.src=u,this.type=c,this.capture=!!d,this.ha=v,this.key=++vc,this.da=this.fa=!1}function Tn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function vn(s){this.src=s,this.g={},this.h=0}vn.prototype.add=function(s,u,c,d,v){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var b=Ar(s,u,d,v);return-1<b?(u=s[b],c||(u.fa=!1)):(u=new Ic(u,this.src,A,!!d,v),u.fa=c,s.push(u)),u};function wr(s,u){var c=u.type;if(c in s.g){var d=s.g[c],v=Array.prototype.indexOf.call(d,u,void 0),A;(A=0<=v)&&Array.prototype.splice.call(d,v,1),A&&(Tn(u),s.g[c].length==0&&(delete s.g[c],s.h--))}}function Ar(s,u,c,d){for(var v=0;v<s.length;++v){var A=s[v];if(!A.da&&A.listener==u&&A.capture==!!c&&A.ha==d)return v}return-1}var Rr="closure_lm_"+(1e6*Math.random()|0),Cr={};function ci(s,u,c,d,v){if(Array.isArray(u)){for(var A=0;A<u.length;A++)ci(s,u[A],c,d,v);return null}return c=di(c),s&&s[En]?s.K(u,c,f(d)?!!d.capture:!1,v):wc(s,u,c,!1,d,v)}function wc(s,u,c,d,v,A){if(!u)throw Error("Invalid event type");var b=f(v)?!!v.capture:!!v,z=br(s);if(z||(s[Rr]=z=new vn(s)),c=z.add(u,c,d,b,A),c.proxy)return c;if(d=Ac(),c.proxy=d,d.src=s,d.listener=c,s.addEventListener)Ec||(v=b),v===void 0&&(v=!1),s.addEventListener(u.toString(),d,v);else if(s.attachEvent)s.attachEvent(hi(u.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Ac(){function s(c){return u.call(s.src,s.listener,c)}const u=Rc;return s}function li(s,u,c,d,v){if(Array.isArray(u))for(var A=0;A<u.length;A++)li(s,u[A],c,d,v);else d=f(d)?!!d.capture:!!d,c=di(c),s&&s[En]?(s=s.i,u=String(u).toString(),u in s.g&&(A=s.g[u],c=Ar(A,c,d,v),-1<c&&(Tn(A[c]),Array.prototype.splice.call(A,c,1),A.length==0&&(delete s.g[u],s.h--)))):s&&(s=br(s))&&(u=s.g[u.toString()],s=-1,u&&(s=Ar(u,c,d,v)),(c=-1<s?u[s]:null)&&Sr(c))}function Sr(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[En])wr(u.i,s);else{var c=s.type,d=s.proxy;u.removeEventListener?u.removeEventListener(c,d,s.capture):u.detachEvent?u.detachEvent(hi(c),d):u.addListener&&u.removeListener&&u.removeListener(d),(c=br(u))?(wr(c,s),c.h==0&&(c.src=null,u[Rr]=null)):Tn(s)}}}function hi(s){return s in Cr?Cr[s]:Cr[s]="on"+s}function Rc(s,u){if(s.da)s=!0;else{u=new Ue(u,this);var c=s.listener,d=s.ha||s.src;s.fa&&Sr(s),s=c.call(d,u)}return s}function br(s){return s=s[Rr],s instanceof vn?s:null}var Pr="__closure_events_fn_"+(1e9*Math.random()>>>0);function di(s){return typeof s=="function"?s:(s[Pr]||(s[Pr]=function(u){return s.handleEvent(u)}),s[Pr])}function lt(){Ft.call(this),this.i=new vn(this),this.M=this,this.F=null}k(lt,Ft),lt.prototype[En]=!0,lt.prototype.removeEventListener=function(s,u,c,d){li(this,s,u,c,d)};function mt(s,u){var c,d=s.F;if(d)for(c=[];d;d=d.F)c.push(d);if(s=s.M,d=u.type||u,typeof u=="string")u=new ct(u,s);else if(u instanceof ct)u.target=u.target||s;else{var v=u;u=new ct(d,s),y(u,v)}if(v=!0,c)for(var A=c.length-1;0<=A;A--){var b=u.g=c[A];v=In(b,d,!0,u)&&v}if(b=u.g=s,v=In(b,d,!0,u)&&v,v=In(b,d,!1,u)&&v,c)for(A=0;A<c.length;A++)b=u.g=c[A],v=In(b,d,!1,u)&&v}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var s=this.i,u;for(u in s.g){for(var c=s.g[u],d=0;d<c.length;d++)Tn(c[d]);delete s.g[u],s.h--}}this.F=null},lt.prototype.K=function(s,u,c,d){return this.i.add(String(s),u,!1,c,d)},lt.prototype.L=function(s,u,c,d){return this.i.add(String(s),u,!0,c,d)};function In(s,u,c,d){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();for(var v=!0,A=0;A<u.length;++A){var b=u[A];if(b&&!b.da&&b.capture==c){var z=b.listener,ot=b.ha||b.src;b.fa&&wr(s.i,b),v=z.call(ot,d)!==!1&&v}}return v&&!d.defaultPrevented}function fi(s,u,c){if(typeof s=="function")c&&(s=C(s,c));else if(s&&typeof s.handleEvent=="function")s=C(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(s,u||0)}function pi(s){s.g=fi(()=>{s.g=null,s.i&&(s.i=!1,pi(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class Cc extends Ft{constructor(u,c){super(),this.m=u,this.l=c,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:pi(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Be(s){Ft.call(this),this.h=s,this.g={}}k(Be,Ft);var gi=[];function mi(s){it(s.g,function(u,c){this.g.hasOwnProperty(c)&&Sr(u)},s),s.g={}}Be.prototype.N=function(){Be.aa.N.call(this),mi(this)},Be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vr=l.JSON.stringify,Sc=l.JSON.parse,bc=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function Dr(){}Dr.prototype.h=null;function _i(s){return s.h||(s.h=s.i())}function yi(){}var $e={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function kr(){ct.call(this,"d")}k(kr,ct);function Nr(){ct.call(this,"c")}k(Nr,ct);var ee={},Ei=null;function wn(){return Ei=Ei||new lt}ee.La="serverreachability";function Ti(s){ct.call(this,ee.La,s)}k(Ti,ct);function qe(s){const u=wn();mt(u,new Ti(u))}ee.STAT_EVENT="statevent";function vi(s,u){ct.call(this,ee.STAT_EVENT,s),this.stat=u}k(vi,ct);function _t(s){const u=wn();mt(u,new vi(u,s))}ee.Ma="timingevent";function Ii(s,u){ct.call(this,ee.Ma,s),this.size=u}k(Ii,ct);function je(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},u)}function ze(){this.g=!0}ze.prototype.xa=function(){this.g=!1};function Pc(s,u,c,d,v,A){s.info(function(){if(s.g)if(A)for(var b="",z=A.split("&"),ot=0;ot<z.length;ot++){var j=z[ot].split("=");if(1<j.length){var ht=j[0];j=j[1];var dt=ht.split("_");b=2<=dt.length&&dt[1]=="type"?b+(ht+"="+j+"&"):b+(ht+"=redacted&")}}else b=null;else b=A;return"XMLHTTP REQ ("+d+") [attempt "+v+"]: "+u+`
`+c+`
`+b})}function Vc(s,u,c,d,v,A,b){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+v+"]: "+u+`
`+c+`
`+A+" "+b})}function pe(s,u,c,d){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+kc(s,c)+(d?" "+d:"")})}function Dc(s,u){s.info(function(){return"TIMEOUT: "+u})}ze.prototype.info=function(){};function kc(s,u){if(!s.g)return u;if(!u)return null;try{var c=JSON.parse(u);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var d=c[s];if(!(2>d.length)){var v=d[1];if(Array.isArray(v)&&!(1>v.length)){var A=v[0];if(A!="noop"&&A!="stop"&&A!="close")for(var b=1;b<v.length;b++)v[b]=""}}}}return Vr(c)}catch{return u}}var An={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Or;function Rn(){}k(Rn,Dr),Rn.prototype.g=function(){return new XMLHttpRequest},Rn.prototype.i=function(){return{}},Or=new Rn;function Ut(s,u,c,d){this.j=s,this.i=u,this.l=c,this.R=d||1,this.U=new Be(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ai}function Ai(){this.i=null,this.g="",this.h=!1}var Ri={},Mr={};function xr(s,u,c){s.L=1,s.v=Pn(Nt(u)),s.m=c,s.P=!0,Ci(s,null)}function Ci(s,u){s.F=Date.now(),Cn(s),s.A=Nt(s.v);var c=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),Bi(c.i,"t",d),s.C=0,c=s.j.J,s.h=new Ai,s.g=so(s.j,c?u:null,!s.m),0<s.O&&(s.M=new Cc(C(s.Y,s,s.g),s.O)),u=s.U,c=s.g,d=s.ca;var v="readystatechange";Array.isArray(v)||(v&&(gi[0]=v.toString()),v=gi);for(var A=0;A<v.length;A++){var b=ci(c,v[A],d||u.handleEvent,!1,u.h||u);if(!b)break;u.g[b.key]=b}u=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,u)):(s.u="GET",s.g.ea(s.A,s.u,null,u)),qe(),Pc(s.i,s.u,s.A,s.l,s.R,s.m)}Ut.prototype.ca=function(s){s=s.target;const u=this.M;u&&Ot(s)==3?u.j():this.Y(s)},Ut.prototype.Y=function(s){try{if(s==this.g)t:{const dt=Ot(this.g);var u=this.g.Ba();const _e=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||Gi(this.g)))){this.J||dt!=4||u==7||(u==8||0>=_e?qe(3):qe(2)),Lr(this);var c=this.g.Z();this.X=c;e:if(Si(this)){var d=Gi(this.g);s="";var v=d.length,A=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ne(this),He(this);var b="";break e}this.h.i=new l.TextDecoder}for(u=0;u<v;u++)this.h.h=!0,s+=this.h.i.decode(d[u],{stream:!(A&&u==v-1)});d.length=0,this.h.g+=s,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=c==200,Vc(this.i,this.u,this.A,this.l,this.R,dt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var z,ot=this.g;if((z=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(z)){var j=z;break e}}j=null}if(c=j)pe(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fr(this,c);else{this.o=!1,this.s=3,_t(12),ne(this),He(this);break t}}if(this.P){c=!0;let At;for(;!this.J&&this.C<b.length;)if(At=Nc(this,b),At==Mr){dt==4&&(this.s=4,_t(14),c=!1),pe(this.i,this.l,null,"[Incomplete Response]");break}else if(At==Ri){this.s=4,_t(15),pe(this.i,this.l,b,"[Invalid Chunk]"),c=!1;break}else pe(this.i,this.l,At,null),Fr(this,At);if(Si(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||b.length!=0||this.h.h||(this.s=1,_t(16),c=!1),this.o=this.o&&c,!c)pe(this.i,this.l,b,"[Invalid Chunked Response]"),ne(this),He(this);else if(0<b.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),zr(ht),ht.M=!0,_t(11))}}else pe(this.i,this.l,b,null),Fr(this,b);dt==4&&ne(this),this.o&&!this.J&&(dt==4?to(this.j,this):(this.o=!1,Cn(this)))}else Xc(this.g),c==400&&0<b.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),ne(this),He(this)}}}catch{}finally{}};function Si(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Nc(s,u){var c=s.C,d=u.indexOf(`
`,c);return d==-1?Mr:(c=Number(u.substring(c,d)),isNaN(c)?Ri:(d+=1,d+c>u.length?Mr:(u=u.slice(d,d+c),s.C=d+c,u)))}Ut.prototype.cancel=function(){this.J=!0,ne(this)};function Cn(s){s.S=Date.now()+s.I,bi(s,s.I)}function bi(s,u){if(s.B!=null)throw Error("WatchDog timer not null");s.B=je(C(s.ba,s),u)}function Lr(s){s.B&&(l.clearTimeout(s.B),s.B=null)}Ut.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Dc(this.i,this.A),this.L!=2&&(qe(),_t(17)),ne(this),this.s=2,He(this)):bi(this,this.S-s)};function He(s){s.j.G==0||s.J||to(s.j,s)}function ne(s){Lr(s);var u=s.M;u&&typeof u.ma=="function"&&u.ma(),s.M=null,mi(s.U),s.g&&(u=s.g,s.g=null,u.abort(),u.ma())}function Fr(s,u){try{var c=s.j;if(c.G!=0&&(c.g==s||Ur(c.h,s))){if(!s.K&&Ur(c.h,s)&&c.G==3){try{var d=c.Da.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var v=d;if(v[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)Mn(c),Nn(c);else break t;jr(c),_t(18)}}else c.za=v[1],0<c.za-c.T&&37500>v[2]&&c.F&&c.v==0&&!c.C&&(c.C=je(C(c.Za,c),6e3));if(1>=Di(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else se(c,11)}else if((s.K||c.g==s)&&Mn(c),!Q(u))for(v=c.Da.g.parse(u),u=0;u<v.length;u++){let j=v[u];if(c.T=j[0],j=j[1],c.G==2)if(j[0]=="c"){c.K=j[1],c.ia=j[2];const ht=j[3];ht!=null&&(c.la=ht,c.j.info("VER="+c.la));const dt=j[4];dt!=null&&(c.Aa=dt,c.j.info("SVER="+c.Aa));const _e=j[5];_e!=null&&typeof _e=="number"&&0<_e&&(d=1.5*_e,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const At=s.g;if(At){const Ln=At.g?At.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ln){var A=d.h;A.g||Ln.indexOf("spdy")==-1&&Ln.indexOf("quic")==-1&&Ln.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Br(A,A.h),A.h=null))}if(d.D){const Hr=At.g?At.g.getResponseHeader("X-HTTP-Session-Id"):null;Hr&&(d.ya=Hr,H(d.I,d.D,Hr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var b=s;if(d.qa=ro(d,d.J?d.ia:null,d.W),b.K){ki(d.h,b);var z=b,ot=d.L;ot&&(z.I=ot),z.B&&(Lr(z),Cn(z)),d.g=b}else Ji(d);0<c.i.length&&On(c)}else j[0]!="stop"&&j[0]!="close"||se(c,7);else c.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?se(c,7):qr(c):j[0]!="noop"&&c.l&&c.l.ta(j),c.v=0)}}qe(4)}catch{}}var Oc=class{constructor(s,u){this.g=s,this.map=u}};function Pi(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Di(s){return s.h?1:s.g?s.g.size:0}function Ur(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function Br(s,u){s.g?s.g.add(u):s.h=u}function ki(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}Pi.prototype.cancel=function(){if(this.i=Ni(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Ni(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const c of s.g.values())u=u.concat(c.D);return u}return M(s.i)}function Mc(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var u=[],c=s.length,d=0;d<c;d++)u.push(s[d]);return u}u=[],c=0;for(d in s)u[c++]=s[d];return u}function xc(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var u=[];s=s.length;for(var c=0;c<s;c++)u.push(c);return u}u=[],c=0;for(const d in s)u[c++]=d;return u}}}function Oi(s,u){if(s.forEach&&typeof s.forEach=="function")s.forEach(u,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,u,void 0);else for(var c=xc(s),d=Mc(s),v=d.length,A=0;A<v;A++)u.call(void 0,d[A],c&&c[A],s)}var Mi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Lc(s,u){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var d=s[c].indexOf("="),v=null;if(0<=d){var A=s[c].substring(0,d);v=s[c].substring(d+1)}else A=s[c];u(A,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function re(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof re){this.h=s.h,Sn(this,s.j),this.o=s.o,this.g=s.g,bn(this,s.s),this.l=s.l;var u=s.i,c=new Qe;c.i=u.i,u.g&&(c.g=new Map(u.g),c.h=u.h),xi(this,c),this.m=s.m}else s&&(u=String(s).match(Mi))?(this.h=!1,Sn(this,u[1]||"",!0),this.o=Ke(u[2]||""),this.g=Ke(u[3]||"",!0),bn(this,u[4]),this.l=Ke(u[5]||"",!0),xi(this,u[6]||"",!0),this.m=Ke(u[7]||"")):(this.h=!1,this.i=new Qe(null,this.h))}re.prototype.toString=function(){var s=[],u=this.j;u&&s.push(Ge(u,Li,!0),":");var c=this.g;return(c||u=="file")&&(s.push("//"),(u=this.o)&&s.push(Ge(u,Li,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(Ge(c,c.charAt(0)=="/"?Bc:Uc,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",Ge(c,qc)),s.join("")};function Nt(s){return new re(s)}function Sn(s,u,c){s.j=c?Ke(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function bn(s,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);s.s=u}else s.s=null}function xi(s,u,c){u instanceof Qe?(s.i=u,jc(s.i,s.h)):(c||(u=Ge(u,$c)),s.i=new Qe(u,s.h))}function H(s,u,c){s.i.set(u,c)}function Pn(s){return H(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Ke(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Ge(s,u,c){return typeof s=="string"?(s=encodeURI(s).replace(u,Fc),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Fc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Li=/[#\/\?@]/g,Uc=/[#\?:]/g,Bc=/[#\?]/g,$c=/[#\?@]/g,qc=/#/g;function Qe(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function Bt(s){s.g||(s.g=new Map,s.h=0,s.i&&Lc(s.i,function(u,c){s.add(decodeURIComponent(u.replace(/\+/g," ")),c)}))}n=Qe.prototype,n.add=function(s,u){Bt(this),this.i=null,s=ge(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(u),this.h+=1,this};function Fi(s,u){Bt(s),u=ge(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function Ui(s,u){return Bt(s),u=ge(s,u),s.g.has(u)}n.forEach=function(s,u){Bt(this),this.g.forEach(function(c,d){c.forEach(function(v){s.call(u,v,d,this)},this)},this)},n.na=function(){Bt(this);const s=Array.from(this.g.values()),u=Array.from(this.g.keys()),c=[];for(let d=0;d<u.length;d++){const v=s[d];for(let A=0;A<v.length;A++)c.push(u[d])}return c},n.V=function(s){Bt(this);let u=[];if(typeof s=="string")Ui(this,s)&&(u=u.concat(this.g.get(ge(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)u=u.concat(s[c])}return u},n.set=function(s,u){return Bt(this),this.i=null,s=ge(this,s),Ui(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},n.get=function(s,u){return s?(s=this.V(s),0<s.length?String(s[0]):u):u};function Bi(s,u,c){Fi(s,u),0<c.length&&(s.i=null,s.g.set(ge(s,u),M(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(var c=0;c<u.length;c++){var d=u[c];const A=encodeURIComponent(String(d)),b=this.V(d);for(d=0;d<b.length;d++){var v=A;b[d]!==""&&(v+="="+encodeURIComponent(String(b[d]))),s.push(v)}}return this.i=s.join("&")};function ge(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function jc(s,u){u&&!s.j&&(Bt(s),s.i=null,s.g.forEach(function(c,d){var v=d.toLowerCase();d!=v&&(Fi(this,d),Bi(this,v,c))},s)),s.j=u}function zc(s,u){const c=new ze;if(l.Image){const d=new Image;d.onload=S($t,c,"TestLoadImage: loaded",!0,u,d),d.onerror=S($t,c,"TestLoadImage: error",!1,u,d),d.onabort=S($t,c,"TestLoadImage: abort",!1,u,d),d.ontimeout=S($t,c,"TestLoadImage: timeout",!1,u,d),l.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else u(!1)}function Hc(s,u){const c=new ze,d=new AbortController,v=setTimeout(()=>{d.abort(),$t(c,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:d.signal}).then(A=>{clearTimeout(v),A.ok?$t(c,"TestPingServer: ok",!0,u):$t(c,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(v),$t(c,"TestPingServer: error",!1,u)})}function $t(s,u,c,d,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),d(c)}catch{}}function Kc(){this.g=new bc}function Gc(s,u,c){const d=c||"";try{Oi(s,function(v,A){let b=v;f(v)&&(b=Vr(v)),u.push(d+A+"="+encodeURIComponent(b))})}catch(v){throw u.push(d+"type="+encodeURIComponent("_badmap")),v}}function Vn(s){this.l=s.Ub||null,this.j=s.eb||!1}k(Vn,Dr),Vn.prototype.g=function(){return new Dn(this.l,this.j)},Vn.prototype.i=function(s){return function(){return s}}({});function Dn(s,u){lt.call(this),this.D=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Dn,lt),n=Dn.prototype,n.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=u,this.readyState=1,Xe(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(u.body=s),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,We(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Xe(this)),this.g&&(this.readyState=3,Xe(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$i(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function $i(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?We(this):Xe(this),this.readyState==3&&$i(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,We(this))},n.Qa=function(s){this.g&&(this.response=s,We(this))},n.ga=function(){this.g&&We(this)};function We(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Xe(s)}n.setRequestHeader=function(s,u){this.u.append(s,u)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var c=u.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=u.next();return s.join(`\r
`)};function Xe(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Dn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function qi(s){let u="";return it(s,function(c,d){u+=d,u+=":",u+=c,u+=`\r
`}),u}function $r(s,u,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=qi(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):H(s,u,c))}function X(s){lt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(X,lt);var Qc=/^https?$/i,Wc=["POST","PUT"];n=X.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,u,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Or.g(),this.v=this.o?_i(this.o):_i(Or),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(A){ji(this,A);return}if(s=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var v in d)c.set(v,d[v]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const A of d.keys())c.set(A,d.get(A));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(A=>A.toLowerCase()=="content-type"),v=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Wc,u,void 0))||d||v||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,b]of c)this.g.setRequestHeader(A,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ki(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){ji(this,A)}};function ji(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.m=5,zi(s),kn(s)}function zi(s){s.A||(s.A=!0,mt(s,"complete"),mt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,mt(this,"complete"),mt(this,"abort"),kn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),kn(this,!0)),X.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Hi(this):this.bb())},n.bb=function(){Hi(this)};function Hi(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Ot(s)!=4||s.Z()!=2)){if(s.u&&Ot(s)==4)fi(s.Ea,0,s);else if(mt(s,"readystatechange"),Ot(s)==4){s.h=!1;try{const b=s.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var c;if(!(c=u)){var d;if(d=b===0){var v=String(s.D).match(Mi)[1]||null;!v&&l.self&&l.self.location&&(v=l.self.location.protocol.slice(0,-1)),d=!Qc.test(v?v.toLowerCase():"")}c=d}if(c)mt(s,"complete"),mt(s,"success");else{s.m=6;try{var A=2<Ot(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",zi(s)}}finally{kn(s)}}}}function kn(s,u){if(s.g){Ki(s);const c=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,u||mt(s,"ready");try{c.onreadystatechange=d}catch{}}}function Ki(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Ot(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),Sc(u)}};function Gi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Xc(s){const u={};s=(s.g&&2<=Ot(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(Q(s[d]))continue;var c=E(s[d]);const v=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const A=u[v]||[];u[v]=A,A.push(c)}T(u,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ye(s,u,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||u}function Qi(s){this.Aa=0,this.i=[],this.j=new ze,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ye("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ye("baseRetryDelayMs",5e3,s),this.cb=Ye("retryDelaySeedMs",1e4,s),this.Wa=Ye("forwardChannelMaxRetries",2,s),this.wa=Ye("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Pi(s&&s.concurrentRequestLimit),this.Da=new Kc,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Qi.prototype,n.la=8,n.G=1,n.connect=function(s,u,c,d){_t(0),this.W=s,this.H=u||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=ro(this,null,this.W),On(this)};function qr(s){if(Wi(s),s.G==3){var u=s.U++,c=Nt(s.I);if(H(c,"SID",s.K),H(c,"RID",u),H(c,"TYPE","terminate"),Je(s,c),u=new Ut(s,s.j,u),u.L=2,u.v=Pn(Nt(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!c&&l.Image&&(new Image().src=u.v,c=!0),c||(u.g=so(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Cn(u)}no(s)}function Nn(s){s.g&&(zr(s),s.g.cancel(),s.g=null)}function Wi(s){Nn(s),s.u&&(l.clearTimeout(s.u),s.u=null),Mn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function On(s){if(!Vi(s.h)&&!s.s){s.s=!0;var u=s.Ga;Le||ui(),Fe||(Le(),Fe=!0),Ir.add(u,s),s.B=0}}function Yc(s,u){return Di(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=u.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=je(C(s.Ga,s,u),eo(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const v=new Ut(this,this.j,s);let A=this.o;if(this.S&&(A?(A=p(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(v.H=A,A=null),this.P)t:{for(var u=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(u+=d,4096<u){u=c;break t}if(u===4096||c===this.i.length-1){u=c+1;break t}}u=1e3}else u=1e3;u=Yi(this,v,u),c=Nt(this.I),H(c,"RID",s),H(c,"CVER",22),this.D&&H(c,"X-HTTP-Session-Id",this.D),Je(this,c),A&&(this.O?u="headers="+encodeURIComponent(String(qi(A)))+"&"+u:this.m&&$r(c,this.m,A)),Br(this.h,v),this.Ua&&H(c,"TYPE","init"),this.P?(H(c,"$req",u),H(c,"SID","null"),v.T=!0,xr(v,c,null)):xr(v,c,u),this.G=2}}else this.G==3&&(s?Xi(this,s):this.i.length==0||Vi(this.h)||Xi(this))};function Xi(s,u){var c;u?c=u.l:c=s.U++;const d=Nt(s.I);H(d,"SID",s.K),H(d,"RID",c),H(d,"AID",s.T),Je(s,d),s.m&&s.o&&$r(d,s.m,s.o),c=new Ut(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),u&&(s.i=u.D.concat(s.i)),u=Yi(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Br(s.h,c),xr(c,d,u)}function Je(s,u){s.H&&it(s.H,function(c,d){H(u,d,c)}),s.l&&Oi({},function(c,d){H(u,d,c)})}function Yi(s,u,c){c=Math.min(s.i.length,c);var d=s.l?C(s.l.Na,s.l,s):null;t:{var v=s.i;let A=-1;for(;;){const b=["count="+c];A==-1?0<c?(A=v[0].g,b.push("ofs="+A)):A=0:b.push("ofs="+A);let z=!0;for(let ot=0;ot<c;ot++){let j=v[ot].g;const ht=v[ot].map;if(j-=A,0>j)A=Math.max(0,v[ot].g-100),z=!1;else try{Gc(ht,b,"req"+j+"_")}catch{d&&d(ht)}}if(z){d=b.join("&");break t}}}return s=s.i.splice(0,c),u.D=s,d}function Ji(s){if(!s.g&&!s.u){s.Y=1;var u=s.Fa;Le||ui(),Fe||(Le(),Fe=!0),Ir.add(u,s),s.v=0}}function jr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=je(C(s.Fa,s),eo(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Zi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=je(C(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),Nn(this),Zi(this))};function zr(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function Zi(s){s.g=new Ut(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var u=Nt(s.qa);H(u,"RID","rpc"),H(u,"SID",s.K),H(u,"AID",s.T),H(u,"CI",s.F?"0":"1"),!s.F&&s.ja&&H(u,"TO",s.ja),H(u,"TYPE","xmlhttp"),Je(s,u),s.m&&s.o&&$r(u,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=Pn(Nt(u)),c.m=null,c.P=!0,Ci(c,s)}n.Za=function(){this.C!=null&&(this.C=null,Nn(this),jr(this),_t(19))};function Mn(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function to(s,u){var c=null;if(s.g==u){Mn(s),zr(s),s.g=null;var d=2}else if(Ur(s.h,u))c=u.D,ki(s.h,u),d=1;else return;if(s.G!=0){if(u.o)if(d==1){c=u.m?u.m.length:0,u=Date.now()-u.F;var v=s.B;d=wn(),mt(d,new Ii(d,c)),On(s)}else Ji(s);else if(v=u.s,v==3||v==0&&0<u.X||!(d==1&&Yc(s,u)||d==2&&jr(s)))switch(c&&0<c.length&&(u=s.h,u.i=u.i.concat(c)),v){case 1:se(s,5);break;case 4:se(s,10);break;case 3:se(s,6);break;default:se(s,2)}}}function eo(s,u){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*u}function se(s,u){if(s.j.info("Error code "+u),u==2){var c=C(s.fb,s),d=s.Xa;const v=!d;d=new re(d||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Sn(d,"https"),Pn(d),v?zc(d.toString(),c):Hc(d.toString(),c)}else _t(2);s.G=0,s.l&&s.l.sa(u),no(s),Wi(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function no(s){if(s.G=0,s.ka=[],s.l){const u=Ni(s.h);(u.length!=0||s.i.length!=0)&&(D(s.ka,u),D(s.ka,s.i),s.h.i.length=0,M(s.i),s.i.length=0),s.l.ra()}}function ro(s,u,c){var d=c instanceof re?Nt(c):new re(c);if(d.g!="")u&&(d.g=u+"."+d.g),bn(d,d.s);else{var v=l.location;d=v.protocol,u=u?u+"."+v.hostname:v.hostname,v=+v.port;var A=new re(null);d&&Sn(A,d),u&&(A.g=u),v&&bn(A,v),c&&(A.l=c),d=A}return c=s.D,u=s.ya,c&&u&&H(d,c,u),H(d,"VER",s.la),Je(s,d),d}function so(s,u,c){if(u&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Ca&&!s.pa?new X(new Vn({eb:c})):new X(s.pa),u.Ha(s.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function io(){}n=io.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function xn(){}xn.prototype.g=function(s,u){return new It(s,u)};function It(s,u){lt.call(this),this.g=new Qi(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(s?s["X-WebChannel-Client-Profile"]=u.va:s={"X-WebChannel-Client-Profile":u.va}),this.g.S=s,(s=u&&u.Sb)&&!Q(s)&&(this.g.m=s),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!Q(u)&&(this.g.D=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new me(this)}k(It,lt),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){qr(this.g)},It.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=Vr(s),s=c);u.i.push(new Oc(u.Ya++,s)),u.G==3&&On(u)},It.prototype.N=function(){this.g.l=null,delete this.j,qr(this.g),delete this.g,It.aa.N.call(this)};function oo(s){kr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){t:{for(const c in u){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}k(oo,kr);function ao(){Nr.call(this),this.status=1}k(ao,Nr);function me(s){this.g=s}k(me,io),me.prototype.ua=function(){mt(this.g,"a")},me.prototype.ta=function(s){mt(this.g,new oo(s))},me.prototype.sa=function(s){mt(this.g,new ao)},me.prototype.ra=function(){mt(this.g,"b")},xn.prototype.createWebChannel=xn.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,fu=function(){return new xn},du=function(){return wn()},hu=ee,ls={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},An.NO_ERROR=0,An.TIMEOUT=8,An.HTTP_ERROR=6,jn=An,wi.COMPLETE="complete",lu=wi,yi.EventType=$e,$e.OPEN="a",$e.CLOSE="b",$e.ERROR="c",$e.MESSAGE="d",lt.prototype.listen=lt.prototype.K,Ze=yi,X.prototype.listenOnce=X.prototype.L,X.prototype.getLastError=X.prototype.Ka,X.prototype.getLastErrorCode=X.prototype.Ba,X.prototype.getStatus=X.prototype.Z,X.prototype.getResponseJson=X.prototype.Oa,X.prototype.getResponseText=X.prototype.oa,X.prototype.send=X.prototype.ea,X.prototype.setWithCredentials=X.prototype.Ha,cu=X}).apply(typeof Fn<"u"?Fn:typeof self<"u"?self:typeof window<"u"?window:{});const Vo="@firebase/firestore",Do="4.7.10";/**
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
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
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
 */let Ne="11.5.0";/**
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
 */const he=new ks("@firebase/firestore");function ye(){return he.logLevel}function V(n,...t){if(he.logLevel<=B.DEBUG){const e=t.map(Bs);he.debug(`Firestore (${Ne}): ${n}`,...e)}}function Lt(n,...t){if(he.logLevel<=B.ERROR){const e=t.map(Bs);he.error(`Firestore (${Ne}): ${n}`,...e)}}function Ce(n,...t){if(he.logLevel<=B.WARN){const e=t.map(Bs);he.warn(`Firestore (${Ne}): ${n}`,...e)}}function Bs(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function L(n="Unexpected state"){const t=`FIRESTORE (${Ne}) INTERNAL ASSERTION FAILED: `+n;throw Lt(t),new Error(t)}function W(n,t){n||L()}function $(n,t){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends te{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ie{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class pu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Jd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(pt.UNAUTHENTICATED))}shutdown(){}}class Zd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class tf{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){W(this.o===void 0);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Ie;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ie,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},l=h=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ie)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string"),new pu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return W(t===null||typeof t=="string"),new pt(t)}}class ef{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class nf{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new ef(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ko{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rf{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,yh(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){W(this.o===void 0);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new ko(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(W(typeof e.token=="string"),this.R=e.token,new ko(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */function gu(){return new TextEncoder}/**
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
 */class of{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=sf(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function F(n,t){return n<t?-1:n>t?1:0}function hs(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),i=t.codePointAt(e);if(r!==i){if(r<128&&i<128)return F(r,i);{const o=gu(),a=af(o.encode(No(n,e)),o.encode(No(t,e)));return a!==0?a:F(r,i)}}e+=r>65535?2:1}return F(n.length,t.length)}function No(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function af(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return F(n[e],t[e]);return F(n.length,t.length)}function Se(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */const Oo=-62135596800,Mo=1e6;class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(t){return vt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Mo);return new vt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Oo)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Mo}_compareTo(t){return this.seconds===t.seconds?F(this.nanoseconds,t.nanoseconds):F(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Oo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class x{static fromTimestamp(t){return new x(t)}static min(){return new x(new vt(0,0))}static max(){return new x(new vt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const xo="__name__";class Rt{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(),r===void 0?r=t.length-e:r>t.length-e&&L(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Rt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Rt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Rt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return F(t.length,e.length)}static compareSegments(t,e){const r=Rt.isNumericId(t),i=Rt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Rt.extractNumericId(t).compare(Rt.extractNumericId(e)):hs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Kt.fromString(t.substring(4,t.length-2))}}class Y extends Rt{construct(t,e,r){return new Y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const uf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Rt{construct(t,e,r){return new yt(t,e,r)}static isValidIdentifier(t){return uf.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xo}static keyField(){return new yt([xo])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new yt(e)}static emptyPath(){return new yt([])}}/**
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
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Y.fromString(t))}static fromName(t){return new O(Y.fromString(t).popFirst(5))}static empty(){return new O(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Y(t.slice()))}}/**
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
 */const hn=-1;function cf(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=x.fromTimestamp(r===1e9?new vt(e+1,0):new vt(e,r));return new Qt(i,O.empty(),t)}function lf(n){return new Qt(n.readTime,n.key,hn)}class Qt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Qt(x.min(),O.empty(),hn)}static max(){return new Qt(x.max(),O.empty(),hn)}}function hf(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:F(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ff{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function lr(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==df)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,r)=>{e(t)})}static reject(t){return new R((e,r)=>{r(t)})}static waitFor(t){return new R((e,r)=>{let i=0,o=0,a=!1;t.forEach(l=>{++i,l.next(()=>{++o,a&&o===i&&e()},h=>r(h))}),a=!0,o===i&&e()})}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next(i=>i?R.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new R((r,i)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(_=>{a[f]=_,++l,l===o&&r(a)},_=>i(_))}})}static doWhile(t,e){return new R((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function pf(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Oe(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class hr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}hr.ae=-1;/**
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
 */const gf=-1;function dr(n){return n==null}function ds(n){return n===0&&1/n==-1/0}/**
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
 */const mu="";function mf(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Lo(t)),t=_f(n.get(e),t);return Lo(t)}function _f(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case mu:e+="";break;default:e+=o}}return e}function Lo(n){return n+mu+""}/**
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
 */function Fo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function gn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function yf(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Z{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new Z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Un(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Un(this.root,t,this.comparator,!1)}getReverseIterator(){return new Un(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Un(this.root,t,this.comparator,!0)}}class Un{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new at(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,r,i,o){return this}insert(t,e,r){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Uo(this.data.getIterator())}getIteratorFrom(t){return new Uo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof nt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new nt(this.comparator);return e.data=t,e}}class Uo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.fields=t,t.sort(yt.comparator)}static empty(){return new qt([])}unionWith(t){let e=new nt(yt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new qt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Se(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class _u extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new _u("Invalid base64 string: "+o):o}}(t);return new ut(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new ut(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return F(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const Ef=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wt(n){if(W(!!n),typeof n=="string"){let t=0;const e=Ef.exec(n);if(W(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:J(n.seconds),nanos:J(n.nanos)}}function J(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xt(n){return typeof n=="string"?ut.fromBase64String(n):ut.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu="server_timestamp",Eu="__type__",Tu="__previous_value__",vu="__local_write_time__";function $s(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Eu])===null||e===void 0?void 0:e.stringValue)===yu}function fr(n){const t=n.mapValue.fields[Tu];return $s(t)?fr(t):t}function dn(n){const t=Wt(n.mapValue.fields[vu].timestampValue);return new vt(t.seconds,t.nanos)}/**
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
 */class Tf{constructor(t,e,r,i,o,a,l,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f}}const Zn="(default)";class fn{constructor(t,e){this.projectId=t,this.database=e||Zn}static empty(){return new fn("","")}get isDefaultDatabase(){return this.database===Zn}isEqual(t){return t instanceof fn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="__type__",If="__max__",Bn={mapValue:{}},wf="__vector__",fs="value";function Yt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?$s(n)?4:Rf(n)?9007199254740991:Af(n)?10:11:L()}function Pt(n,t){if(n===t)return!0;const e=Yt(n);if(e!==Yt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return dn(n).isEqual(dn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Wt(i.timestampValue),l=Wt(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return Xt(i.bytesValue).isEqual(Xt(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return J(i.geoPointValue.latitude)===J(o.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return J(i.integerValue)===J(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=J(i.doubleValue),l=J(o.doubleValue);return a===l?ds(a)===ds(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return Se(n.arrayValue.values||[],t.arrayValue.values||[],Pt);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Fo(a)!==Fo(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Pt(a[h],l[h])))return!1;return!0}(n,t);default:return L()}}function pn(n,t){return(n.values||[]).find(e=>Pt(e,t))!==void 0}function be(n,t){if(n===t)return 0;const e=Yt(n),r=Yt(t);if(e!==r)return F(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return F(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=J(o.integerValue||o.doubleValue),h=J(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,t);case 3:return Bo(n.timestampValue,t.timestampValue);case 4:return Bo(dn(n),dn(t));case 5:return hs(n.stringValue,t.stringValue);case 6:return function(o,a){const l=Xt(o),h=Xt(a);return l.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let f=0;f<l.length&&f<h.length;f++){const _=F(l[f],h[f]);if(_!==0)return _}return F(l.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=F(J(o.latitude),J(a.latitude));return l!==0?l:F(J(o.longitude),J(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return $o(n.arrayValue,t.arrayValue);case 10:return function(o,a){var l,h,f,_;const w=o.fields||{},C=a.fields||{},S=(l=w[fs])===null||l===void 0?void 0:l.arrayValue,k=(h=C[fs])===null||h===void 0?void 0:h.arrayValue,M=F(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((_=k==null?void 0:k.values)===null||_===void 0?void 0:_.length)||0);return M!==0?M:$o(S,k)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Bn.mapValue&&a===Bn.mapValue)return 0;if(o===Bn.mapValue)return 1;if(a===Bn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),f=a.fields||{},_=Object.keys(f);h.sort(),_.sort();for(let w=0;w<h.length&&w<_.length;++w){const C=hs(h[w],_[w]);if(C!==0)return C;const S=be(l[h[w]],f[_[w]]);if(S!==0)return S}return F(h.length,_.length)}(n.mapValue,t.mapValue);default:throw L()}}function Bo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return F(n,t);const e=Wt(n),r=Wt(t),i=F(e.seconds,r.seconds);return i!==0?i:F(e.nanos,r.nanos)}function $o(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=be(e[i],r[i]);if(o)return o}return F(e.length,r.length)}function Pe(n){return ps(n)}function ps(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Wt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Xt(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=ps(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ps(e.fields[a])}`;return i+"}"}(n.mapValue):L()}function zn(n){switch(Yt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=fr(n);return t?16+zn(t):16;case 5:return 2*n.stringValue.length;case 6:return Xt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+zn(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return gn(r.fields,(o,a)=>{i+=o.length+zn(a)}),i}(n.mapValue);default:throw L()}}function gs(n){return!!n&&"integerValue"in n}function qs(n){return!!n&&"arrayValue"in n}function qo(n){return!!n&&"nullValue"in n}function jo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Zr(n){return!!n&&"mapValue"in n}function Af(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[vf])===null||e===void 0?void 0:e.stringValue)===wf}function sn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return gn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=sn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=sn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Rf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===If}/**
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
 */class Ct{constructor(t){this.value=t}static empty(){return new Ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Zr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=sn(e)}setAll(t){let e=yt.emptyPath(),r={},i=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=l.popLast()}a?r[l.lastSegment()]=sn(a):i.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Zr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Pt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Zr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){gn(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new Ct(sn(this.value))}}/**
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
 */class gt{constructor(t,e,r,i,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new gt(t,0,x.min(),x.min(),x.min(),Ct.empty(),0)}static newFoundDocument(t,e,r,i){return new gt(t,1,e,x.min(),r,i,0)}static newNoDocument(t,e){return new gt(t,2,e,x.min(),x.min(),Ct.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,x.min(),x.min(),Ct.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class tr{constructor(t,e){this.position=t,this.inclusive=e}}function zo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),e.key):r=be(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ho(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Pt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class er{constructor(t,e="asc"){this.field=t,this.dir=e}}function Cf(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Iu{}class et extends Iu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new bf(t,e,r):e==="array-contains"?new Df(t,r):e==="in"?new kf(t,r):e==="not-in"?new Nf(t,r):e==="array-contains-any"?new Of(t,r):new et(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Pf(t,r):new Vf(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(be(e,this.value)):e!==null&&Yt(this.value)===Yt(e)&&this.matchesComparison(be(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vt extends Iu{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Vt(t,e)}matches(t){return wu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function wu(n){return n.op==="and"}function Au(n){return Sf(n)&&wu(n)}function Sf(n){for(const t of n.filters)if(t instanceof Vt)return!1;return!0}function ms(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+Pe(n.value);if(Au(n))return n.filters.map(t=>ms(t)).join(",");{const t=n.filters.map(e=>ms(e)).join(",");return`${n.op}(${t})`}}function Ru(n,t){return n instanceof et?function(r,i){return i instanceof et&&r.op===i.op&&r.field.isEqual(i.field)&&Pt(r.value,i.value)}(n,t):n instanceof Vt?function(r,i){return i instanceof Vt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,l)=>o&&Ru(a,i.filters[l]),!0):!1}(n,t):void L()}function Cu(n){return n instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${Pe(e.value)}`}(n):n instanceof Vt?function(e){return e.op.toString()+" {"+e.getFilters().map(Cu).join(" ,")+"}"}(n):"Filter"}class bf extends et{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Pf extends et{constructor(t,e){super(t,"in",e),this.keys=Su("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Vf extends et{constructor(t,e){super(t,"not-in",e),this.keys=Su("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Su(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class Df extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return qs(e)&&pn(e.arrayValue,this.value)}}class kf extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&pn(this.value.arrayValue,e)}}class Nf extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(pn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!pn(this.value.arrayValue,e)}}class Of extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!qs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>pn(this.value.arrayValue,r))}}/**
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
 */class Mf{constructor(t,e=null,r=[],i=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.le=null}}function Ko(n,t=null,e=[],r=[],i=null,o=null,a=null){return new Mf(n,t,e,r,i,o,a)}function js(n){const t=$(n);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ms(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),dr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Pe(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Pe(r)).join(",")),t.le=e}return t.le}function zs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Cf(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Ru(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ho(n.startAt,t.startAt)&&Ho(n.endAt,t.endAt)}function _s(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class pr{constructor(t,e=null,r=[],i=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function xf(n,t,e,r,i,o,a,l){return new pr(n,t,e,r,i,o,a,l)}function Hs(n){return new pr(n)}function Go(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Lf(n){return n.collectionGroup!==null}function on(n){const t=$(n);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new nt(yt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new er(o,r))}),e.has(yt.keyField().canonicalString())||t.he.push(new er(yt.keyField(),r))}return t.he}function bt(n){const t=$(n);return t.Pe||(t.Pe=Ff(t,on(n))),t.Pe}function Ff(n,t){if(n.limitType==="F")return Ko(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new er(i.field,o)});const e=n.endAt?new tr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new tr(n.startAt.position,n.startAt.inclusive):null;return Ko(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ys(n,t,e){return new pr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function gr(n,t){return zs(bt(n),bt(t))&&n.limitType===t.limitType}function bu(n){return`${js(bt(n))}|lt:${n.limitType}`}function Ee(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Cu(i)).join(", ")}]`),dr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Pe(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Pe(i)).join(",")),`Target(${r})`}(bt(n))}; limitType=${n.limitType})`}function mr(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of on(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,l,h){const f=zo(a,l,h);return a.inclusive?f<=0:f<0}(r.startAt,on(r),i)||r.endAt&&!function(a,l,h){const f=zo(a,l,h);return a.inclusive?f>=0:f>0}(r.endAt,on(r),i))}(n,t)}function Uf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Pu(n){return(t,e)=>{let r=!1;for(const i of on(n)){const o=Bf(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Bf(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,a,l){const h=a.data.field(o),f=l.data.field(o);return h!==null&&f!==null?be(h,f):L()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L()}}/**
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
 */class de{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){gn(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return yf(this.inner)}size(){return this.innerSize}}/**
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
 */const $f=new Z(O.comparator);function Jt(){return $f}const Vu=new Z(O.comparator);function tn(...n){let t=Vu;for(const e of n)t=t.insert(e.key,e);return t}function qf(n){let t=Vu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ae(){return an()}function Du(){return an()}function an(){return new de(n=>n.toString(),(n,t)=>n.isEqual(t))}const jf=new nt(O.comparator);function q(...n){let t=jf;for(const e of n)t=t.add(e);return t}const zf=new nt(F);function Hf(){return zf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ds(t)?"-0":t}}function Gf(n){return{integerValue:""+n}}/**
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
 */class _r{constructor(){this._=void 0}}function Qf(n,t,e){return n instanceof Es?function(i,o){const a={fields:{[Eu]:{stringValue:yu},[vu]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&$s(o)&&(o=fr(o)),o&&(a.fields[Tu]=o),{mapValue:a}}(e,t):n instanceof nr?ku(n,t):n instanceof rr?Nu(n,t):function(i,o){const a=Xf(i,o),l=Qo(a)+Qo(i.Ie);return gs(a)&&gs(i.Ie)?Gf(l):Kf(i.serializer,l)}(n,t)}function Wf(n,t,e){return n instanceof nr?ku(n,t):n instanceof rr?Nu(n,t):e}function Xf(n,t){return n instanceof Ts?function(r){return gs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Es extends _r{}class nr extends _r{constructor(t){super(),this.elements=t}}function ku(n,t){const e=Ou(t);for(const r of n.elements)e.some(i=>Pt(i,r))||e.push(r);return{arrayValue:{values:e}}}class rr extends _r{constructor(t){super(),this.elements=t}}function Nu(n,t){let e=Ou(t);for(const r of n.elements)e=e.filter(i=>!Pt(i,r));return{arrayValue:{values:e}}}class Ts extends _r{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Qo(n){return J(n.integerValue||n.doubleValue)}function Ou(n){return qs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Yf(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof nr&&i instanceof nr||r instanceof rr&&i instanceof rr?Se(r.elements,i.elements,Pt):r instanceof Ts&&i instanceof Ts?Pt(r.Ie,i.Ie):r instanceof Es&&i instanceof Es}(n.transform,t.transform)}class ue{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ue}static exists(t){return new ue(void 0,t)}static updateTime(t){return new ue(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Hn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Ks{}function Mu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Zf(n.key,ue.none()):new Gs(n.key,n.data,ue.none());{const e=n.data,r=Ct.empty();let i=new nt(yt.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new yr(n.key,r,new qt(i.toArray()),ue.none())}}function Jf(n,t,e){n instanceof Gs?function(i,o,a){const l=i.value.clone(),h=Xo(i.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof yr?function(i,o,a){if(!Hn(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Xo(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(xu(i)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function un(n,t,e,r){return n instanceof Gs?function(o,a,l,h){if(!Hn(o.precondition,a))return l;const f=o.value.clone(),_=Yo(o.fieldTransforms,h,a);return f.setAll(_),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof yr?function(o,a,l,h){if(!Hn(o.precondition,a))return l;const f=Yo(o.fieldTransforms,h,a),_=a.data;return _.setAll(xu(o)),_.setAll(f),a.convertToFoundDocument(a.version,_).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,r):function(o,a,l){return Hn(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function Wo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Se(r,i,(o,a)=>Yf(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Gs extends Ks{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class yr extends Ks{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function xu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Xo(n,t,e){const r=new Map;W(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,l=t.data.field(o.field);r.set(o.field,Wf(a,l,e[i]))}return r}function Yo(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,Qf(o,a,t))}return r}class Zf extends Ks{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class tp{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Jf(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=un(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=un(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Du();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(i.key)?null:l;const h=Mu(a,l);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(x.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&Se(this.mutations,t.mutations,(e,r)=>Wo(e,r))&&Se(this.baseMutations,t.baseMutations,(e,r)=>Wo(e,r))}}/**
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
 */class ep{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class np{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var tt,U;function Lu(n){if(n===void 0)return Lt("GRPC error has no .code"),P.UNKNOWN;switch(n){case tt.OK:return P.OK;case tt.CANCELLED:return P.CANCELLED;case tt.UNKNOWN:return P.UNKNOWN;case tt.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case tt.INTERNAL:return P.INTERNAL;case tt.UNAVAILABLE:return P.UNAVAILABLE;case tt.UNAUTHENTICATED:return P.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case tt.NOT_FOUND:return P.NOT_FOUND;case tt.ALREADY_EXISTS:return P.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return P.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case tt.ABORTED:return P.ABORTED;case tt.OUT_OF_RANGE:return P.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return P.UNIMPLEMENTED;case tt.DATA_LOSS:return P.DATA_LOSS;default:return L()}}(U=tt||(tt={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const rp=new Kt([4294967295,4294967295],0);function Jo(n){const t=gu().encode(n),e=new uu;return e.update(t),new Uint8Array(e.digest())}function Zo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Kt([e,r],0),new Kt([i,o],0)]}class Qs{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new en(`Invalid padding: ${e}`);if(r<0)throw new en(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new en(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new en(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=Kt.fromNumber(this.Ee)}Ae(t,e,r){let i=t.add(e.multiply(Kt.fromNumber(r)));return i.compare(rp)===1&&(i=new Kt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=Jo(t),[r,i]=Zo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(r,i,o);if(!this.Re(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Qs(o,i,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ee===0)return;const e=Jo(t),[r,i]=Zo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(r,i,o);this.Ve(a)}}Ve(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class en extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Er{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,mn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Er(x.min(),i,new Z(F),Jt(),q())}}class mn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new mn(r,e,q(),q(),q())}}/**
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
 */class Kn{constructor(t,e,r,i){this.me=t,this.removedTargetIds=e,this.key=r,this.fe=i}}class Fu{constructor(t,e){this.targetId=t,this.ge=e}}class Uu{constructor(t,e,r=ut.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class ta{constructor(){this.pe=0,this.ye=ea(),this.we=ut.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=q(),e=q(),r=q();return this.ye.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:L()}}),new mn(this.we,this.Se,t,e,r)}Me(){this.be=!1,this.ye=ea()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,W(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class sp{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Jt(),this.$e=$n(),this.Ue=$n(),this.Ke=new Z(F)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const r=this.He(e);switch(t.state){case 0:this.Je(e)&&r.Ce(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(e);break;case 3:this.Je(e)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),r.Ce(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((r,i)=>{this.Je(i)&&e(i)})}Ze(t){const e=t.targetId,r=t.ge.count,i=this.Xe(e);if(i){const o=i.target;if(_s(o))if(r===0){const a=new O(o.path);this.ze(e,a,gt.newNoDocument(a,x.min()))}else W(r===1);else{const a=this.et(e);if(a!==r){const l=this.tt(t),h=l?this.nt(l,t,a):1;if(h!==0){this.Ye(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,f)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,l;try{a=Xt(r).toUint8Array()}catch(h){if(h instanceof _u)return Ce("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Qs(a,i,o)}catch(h){return Ce(h instanceof en?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.Ee===0?null:l}nt(t,e,r){return e.ge.count===r-this.st(t,e.targetId)?0:2}st(t,e){const r=this.ke.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const a=this.ke.it(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.ze(e,o,null),i++)}),i}ot(t){const e=new Map;this.qe.forEach((o,a)=>{const l=this.Xe(a);if(l){if(o.current&&_s(l.target)){const h=new O(l.target.path);this._t(h).has(a)||this.ut(a,h)||this.ze(a,h,gt.newNoDocument(h,t))}o.ve&&(e.set(a,o.Fe()),o.Me())}});let r=q();this.Ue.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const f=this.Xe(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.Qe.forEach((o,a)=>a.setReadTime(t));const i=new Er(t,e,this.Ke,this.Qe,r);return this.Qe=Jt(),this.$e=$n(),this.Ue=$n(),this.Ke=new Z(F),i}Ge(t,e){if(!this.Je(t))return;const r=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,r),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}ze(t,e,r){if(!this.Je(t))return;const i=this.He(t);this.ut(t,e)?i.xe(e,1):i.Oe(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),this.Ue=this.Ue.insert(e,this.ct(e).add(t)),r&&(this.Qe=this.Qe.insert(e,r))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new ta,this.qe.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new nt(F),this.Ue=this.Ue.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new nt(F),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||V("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new ta),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function $n(){return new Z(O.comparator)}function ea(){return new Z(O.comparator)}const ip={asc:"ASCENDING",desc:"DESCENDING"},op={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ap={and:"AND",or:"OR"};class up{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function vs(n,t){return n.useProto3Json||dr(t)?t:{value:t}}function cp(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function lp(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function we(n){return W(!!n),x.fromTimestamp(function(e){const r=Wt(e);return new vt(r.seconds,r.nanos)}(n))}function hp(n,t){return Is(n,t).canonicalString()}function Is(n,t){const e=function(i){return new Y(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Bu(n){const t=Y.fromString(n);return W(Hu(t)),t}function ts(n,t){const e=Bu(t);if(e.get(1)!==n.databaseId.projectId)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(qu(e))}function $u(n,t){return hp(n.databaseId,t)}function dp(n){const t=Bu(n);return t.length===4?Y.emptyPath():qu(t)}function na(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function qu(n){return W(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function fp(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?(W(_===void 0||typeof _=="string"),ut.fromBase64String(_||"")):(W(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),ut.fromUint8Array(_||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(f){const _=f.code===void 0?P.UNKNOWN:Lu(f.code);return new N(_,f.message||"")}(a);e=new Uu(r,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ts(n,r.document.name),o=we(r.document.updateTime),a=r.document.createTime?we(r.document.createTime):x.min(),l=new Ct({mapValue:{fields:r.document.fields}}),h=gt.newFoundDocument(i,o,a,l),f=r.targetIds||[],_=r.removedTargetIds||[];e=new Kn(f,_,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ts(n,r.document),o=r.readTime?we(r.readTime):x.min(),a=gt.newNoDocument(i,o),l=r.removedTargetIds||[];e=new Kn([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ts(n,r.document),o=r.removedTargetIds||[];e=new Kn([],o,i,null)}else{if(!("filter"in t))return L();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new np(i,o),l=r.targetId;e=new Fu(l,a)}}return e}function pp(n,t){return{documents:[$u(n,t.path)]}}function gp(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=$u(n,i);const o=function(f){if(f.length!==0)return zu(Vt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(_=>function(C){return{field:Te(C.field),direction:yp(C.dir)}}(_))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=vs(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ht:e,parent:i}}function mp(n){let t=dp(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){W(r===1);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(w){const C=ju(w);return C instanceof Vt&&Au(C)?C.getFilters():[C]}(e.where));let a=[];e.orderBy&&(a=function(w){return w.map(C=>function(k){return new er(ve(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(C))}(e.orderBy));let l=null;e.limit&&(l=function(w){let C;return C=typeof w=="object"?w.value:w,dr(C)?null:C}(e.limit));let h=null;e.startAt&&(h=function(w){const C=!!w.before,S=w.values||[];return new tr(S,C)}(e.startAt));let f=null;return e.endAt&&(f=function(w){const C=!w.before,S=w.values||[];return new tr(S,C)}(e.endAt)),xf(t,i,a,o,l,"F",h,f)}function _p(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ju(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ve(e.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ve(e.unaryFilter.field);return et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ve(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ve(e.unaryFilter.field);return et.create(a,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(n):n.fieldFilter!==void 0?function(e){return et.create(ve(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Vt.create(e.compositeFilter.filters.map(r=>ju(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(n):L()}function yp(n){return ip[n]}function Ep(n){return op[n]}function Tp(n){return ap[n]}function Te(n){return{fieldPath:n.canonicalString()}}function ve(n){return yt.fromServerFormat(n.fieldPath)}function zu(n){return n instanceof et?function(e){if(e.op==="=="){if(jo(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NAN"}};if(qo(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(jo(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NOT_NAN"}};if(qo(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Te(e.field),op:Ep(e.op),value:e.value}}}(n):n instanceof Vt?function(e){const r=e.getFilters().map(i=>zu(i));return r.length===1?r[0]:{compositeFilter:{op:Tp(e.op),filters:r}}}(n):L()}function Hu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class jt{constructor(t,e,r,i,o=x.min(),a=x.min(),l=ut.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new jt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class vp{constructor(t){this.Tt=t}}function Ip(n){const t=mp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ys(t,t.limit,"L"):t}/**
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
 */class wp{constructor(){this.Tn=new Ap}addToCollectionParentIndex(t,e){return this.Tn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Qt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Qt.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Ap{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new nt(Y.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new nt(Y.comparator)).toArray()}}/**
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
 */const ra={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ku=41943040;class Et{static withCacheSize(t){return new Et(t,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(Ku,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
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
 */class Ve{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new Ve(0)}static Kn(){return new Ve(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="LruGarbageCollector",Rp=1048576;function ia([n,t],[e,r]){const i=F(n,e);return i===0?F(t,r):i}class Cp{constructor(t){this.Hn=t,this.buffer=new nt(ia),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ia(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Sp{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){V(sa,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Oe(e)?V(sa,"Ignoring IndexedDB error during garbage collection: ",e):await lr(e)}await this.er(3e5)})}}class bp{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return R.resolve(hr.ae);const r=new Cp(e);return this.tr.forEachTarget(t,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(t,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.tr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(ra)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ra):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let r,i,o,a,l,h,f;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),i=this.params.maximumSequenceNumbersToCollect):i=w,a=Date.now(),this.nthSequenceNumber(t,i))).next(w=>(r=w,l=Date.now(),this.removeTargets(t,r,e))).next(w=>(o=w,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(w=>(f=Date.now(),ye()<=B.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-_}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${w} documents in `+(f-h)+`ms
Total Duration: ${f-_}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:w})))}}function Pp(n,t){return new bp(n,t)}/**
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
 */class Vp{constructor(){this.changes=new de(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Dp{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class kp{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&un(r.mutation,i,qt.empty(),vt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,q()).next(()=>r))}getLocalViewOfDocuments(t,e,r=q()){const i=ae();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let a=tn();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ae();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,q()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,i){let o=Jt();const a=an(),l=function(){return an()}();return e.forEach((h,f)=>{const _=r.get(f.key);i.has(f.key)&&(_===void 0||_.mutation instanceof yr)?o=o.insert(f.key,f):_!==void 0?(a.set(f.key,_.mutation.getFieldMask()),un(_.mutation,f,_.mutation.getFieldMask(),vt.now())):a.set(f.key,qt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,_)=>a.set(f,_)),e.forEach((f,_)=>{var w;return l.set(f,new Dp(_,(w=a.get(f))!==null&&w!==void 0?w:null))}),l))}recalculateAndSaveOverlays(t,e){const r=an();let i=new Z((a,l)=>a-l),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let _=r.get(h)||qt.empty();_=l.applyToLocalView(f,_),r.set(h,_);const w=(i.get(l.batchId)||q()).add(h);i=i.insert(l.batchId,w)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,_=h.value,w=Du();_.forEach(C=>{if(!o.has(C)){const S=Mu(e.get(C),r.get(C));S!==null&&w.set(C,S),o=o.add(C)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,w))}return R.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Lf(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):R.resolve(ae());let l=hn,h=o;return a.next(f=>R.forEach(f,(_,w)=>(l<w.largestBatchId&&(l=w.largestBatchId),o.get(_)?R.resolve():this.remoteDocumentCache.getEntry(t,_).next(C=>{h=h.insert(_,C)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,q())).next(_=>({batchId:l,changes:qf(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let i=tn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=tn();return this.indexManager.getCollectionParents(t,o).next(l=>R.forEach(l,h=>{const f=function(w,C){return new pr(C,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next(_=>{_.forEach((w,C)=>{a=a.insert(w,C)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(a=>{o.forEach((h,f)=>{const _=f.getKey();a.get(_)===null&&(a=a.insert(_,gt.newInvalidDocument(_)))});let l=tn();return a.forEach((h,f)=>{const _=o.get(h);_!==void 0&&un(_.mutation,f,qt.empty(),vt.now()),mr(e,f)&&(l=l.insert(h,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return R.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:we(i.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(i){return{name:i.name,query:Ip(i.bundledQuery),readTime:we(i.readTime)}}(e)),R.resolve()}}/**
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
 */class Op{constructor(){this.overlays=new Z(O.comparator),this.Rr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ae();return R.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.Et(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const i=ae(),o=e.length+1,a=new O(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return R.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new Z((f,_)=>f-_);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let _=o.get(f.largestBatchId);_===null&&(_=ae(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const l=ae(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,_)=>l.set(f,_)),!(l.size()>=i)););return R.resolve(l)}Et(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ep(e,r));let o=this.Rr.get(e);o===void 0&&(o=q(),this.Rr.set(e,o)),this.Rr.set(e,o.add(r.key))}}/**
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
 */class Mp{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
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
 */class Ws{constructor(){this.Vr=new nt(st.mr),this.gr=new nt(st.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const r=new st(t,e);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.wr(new st(t,e))}Sr(t,e){t.forEach(r=>this.removeReference(r,e))}br(t){const e=new O(new Y([])),r=new st(e,t),i=new st(e,t+1),o=[];return this.gr.forEachInRange([r,i],a=>{this.wr(a),o.push(a.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new O(new Y([])),r=new st(e,t),i=new st(e,t+1);let o=q();return this.gr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new st(t,0),r=this.Vr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class st{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return O.comparator(t.key,e.key)||F(t.Cr,e.Cr)}static pr(t,e){return F(t.Cr,e.Cr)||O.comparator(t.key,e.key)}}/**
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
 */class xp{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new nt(st.mr)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new tp(o,e,r,i);this.mutationQueue.push(a);for(const l of i)this.Mr=this.Mr.add(new st(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return R.resolve(a)}lookupMutationBatch(t,e){return R.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Nr(r),o=i<0?0:i;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?gf:this.Fr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new st(e,0),i=new st(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,i],a=>{const l=this.Or(a.Cr);o.push(l)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new nt(F);return e.forEach(i=>{const o=new st(i,0),a=new st(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,a],l=>{r=r.add(l.Cr)})}),R.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new st(new O(o),0);let l=new nt(F);return this.Mr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(l=l.add(h.Cr)),!0)},a),R.resolve(this.Br(l))}Br(t){const e=[];return t.forEach(r=>{const i=this.Or(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){W(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return R.forEach(e.mutations,i=>{const o=new st(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,e){const r=new st(e,0),i=this.Mr.firstAfterOrEqual(r);return R.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Lp{constructor(t){this.kr=t,this.docs=function(){return new Z(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.kr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(e))}getEntries(t,e){let r=Jt();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():gt.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Jt();const a=e.path,l=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:_}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||hf(lf(_),r)<=0||(i.has(_.key)||mr(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,r,i){L()}qr(t,e){return R.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Fp(this)}getSize(t){return R.resolve(this.size)}}class Fp extends Vp{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.Ir.addEntry(t,i)):this.Ir.removeEntry(r)}),R.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
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
 */class Up{constructor(t){this.persistence=t,this.Qr=new de(e=>js(e),zs),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Ws,this.targetCount=0,this.Kr=Ve.Un()}forEachTarget(t,e){return this.Qr.forEach((r,i)=>e(i)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.$r&&(this.$r=e),R.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new Ve(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.zn(e),R.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Qr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),R.waitFor(o).next(()=>i)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.Qr.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this.Ur.yr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this.Ur.Sr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Ur.vr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this.Ur.containsKey(e))}}/**
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
 */class Gu{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new hr(0),this.zr=!1,this.zr=!0,this.jr=new Mp,this.referenceDelegate=t(this),this.Hr=new Up(this),this.indexManager=new wp,this.remoteDocumentCache=function(i){return new Lp(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new vp(e),this.Yr=new Np(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Op,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Wr[t.toKey()];return r||(r=new xp(e,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,r){V("MemoryPersistence","Starting transaction:",t);const i=new Bp(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(o=>this.referenceDelegate.Xr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}ei(t,e){return R.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,e)))}}class Bp extends ff{constructor(t){super(),this.currentSequenceNumber=t}}class Xs{constructor(t){this.persistence=t,this.ti=new Ws,this.ni=null}static ri(t){return new Xs(t)}get ii(){if(this.ni)return this.ni;throw L()}addReference(t,e,r){return this.ti.addReference(r,e),this.ii.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.ti.removeReference(r,e),this.ii.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),R.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.ii,r=>{const i=O.fromPath(r);return this.si(t,i).next(o=>{o||e.removeEntry(i,x.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(r=>{r?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return R.or([()=>R.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class sr{constructor(t,e){this.persistence=t,this.oi=new de(r=>mf(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Pp(this,e)}static ri(t,e){return new sr(t,e)}Zr(){}Xr(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}sr(t){let e=0;return this.rr(t,r=>{e++}).next(()=>e)}rr(t,e){return R.forEach(this.oi,(r,i)=>this.ar(t,r,i).next(o=>o?R.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.qr(t,a=>this.ar(t,a,e).next(l=>{l||(r++,o.removeEntry(a,x.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),R.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=zn(t.data.value)),e}ar(t,e,r){return R.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.oi.get(e);return R.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Ys{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Hi=r,this.Ji=i}static Yi(t,e){let r=q(),i=q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ys(t,e.fromCache,r,i)}}/**
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
 */class $p{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class qp{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return pl()?8:pf(hl())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.rs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ss(t,e,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new $p;return this._s(t,e,a).next(l=>{if(o.result=l,this.Xi)return this.us(t,e,a,l.size)})}).next(()=>o.result)}us(t,e,r,i){return r.documentReadCount<this.es?(ye()<=B.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Ee(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),R.resolve()):(ye()<=B.DEBUG&&V("QueryEngine","Query:",Ee(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(ye()<=B.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Ee(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,bt(e))):R.resolve())}rs(t,e){if(Go(e))return R.resolve(null);let r=bt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=ys(e,null,"F"),r=bt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=q(...o);return this.ns.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.cs(e,l);return this.ls(e,f,a,h.readTime)?this.rs(t,ys(e,null,"F")):this.hs(t,f,e,h)}))})))}ss(t,e,r,i){return Go(e)||i.isEqual(x.min())?R.resolve(null):this.ns.getDocuments(t,r).next(o=>{const a=this.cs(e,o);return this.ls(e,a,r,i)?R.resolve(null):(ye()<=B.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ee(e)),this.hs(t,a,e,cf(i,hn)).next(l=>l))})}cs(t,e){let r=new nt(Pu(t));return e.forEach((i,o)=>{mr(t,o)&&(r=r.add(o))}),r}ls(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}_s(t,e,r){return ye()<=B.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Ee(e)),this.ns.getDocumentsMatchingQuery(t,e,Qt.min(),r)}hs(t,e,r,i){return this.ns.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="LocalStore",jp=3e8;class zp{constructor(t,e,r,i){this.persistence=t,this.Ps=e,this.serializer=i,this.Ts=new Z(F),this.Is=new de(o=>js(o),zs),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new kp(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function Hp(n,t,e,r){return new zp(n,t,e,r)}async function Qu(n,t){const e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.As(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=q();for(const f of i){a.push(f.batchId);for(const _ of f.mutations)h=h.add(_.key)}for(const f of o){l.push(f.batchId);for(const _ of f.mutations)h=h.add(_.key)}return e.localDocuments.getDocuments(r,h).next(f=>({Rs:f,removedBatchIds:a,addedBatchIds:l}))})})}function Wu(n){const t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function Kp(n,t){const e=$(n),r=t.snapshotVersion;let i=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.ds.newChangeBuffer({trackRemovals:!0});i=e.Ts;const l=[];t.targetChanges.forEach((_,w)=>{const C=i.get(w);if(!C)return;l.push(e.Hr.removeMatchingKeys(o,_.removedDocuments,w).next(()=>e.Hr.addMatchingKeys(o,_.addedDocuments,w)));let S=C.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?S=S.withResumeToken(ut.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):_.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(_.resumeToken,r)),i=i.insert(w,S),function(M,D,K){return M.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=jp?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(C,S,_)&&l.push(e.Hr.updateTargetData(o,S))});let h=Jt(),f=q();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),l.push(Gp(o,a,t.documentUpdates).next(_=>{h=_.Vs,f=_.fs})),!r.isEqual(x.min())){const _=e.Hr.getLastRemoteSnapshotVersion(o).next(w=>e.Hr.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(_)}return R.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.Ts=i,o))}function Gp(n,t,e){let r=q(),i=q();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Jt();return e.forEach((l,h)=>{const f=o.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(l)),h.isNoDocument()&&h.version.isEqual(x.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):V(Js,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)}),{Vs:a,fs:i}})}function Qp(n,t){const e=$(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Hr.getTargetData(r,t).next(o=>o?(i=o,R.resolve(i)):e.Hr.allocateTargetId(r).next(a=>(i=new jt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(r.targetId,r),e.Is.set(t,r.targetId)),r})}async function ws(n,t,e){const r=$(n),i=r.Ts.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Oe(a))throw a;V(Js,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ts=r.Ts.remove(t),r.Is.delete(i.target)}function oa(n,t,e){const r=$(n);let i=x.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,_){const w=$(h),C=w.Is.get(_);return C!==void 0?R.resolve(w.Ts.get(C)):w.Hr.getTargetData(f,_)}(r,a,bt(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,t,e?i:x.min(),e?o:q())).next(l=>(Wp(r,Uf(t),l),{documents:l,gs:o})))}function Wp(n,t,e){let r=n.Es.get(t)||x.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Es.set(t,r)}class aa{constructor(){this.activeTargetIds=Hf()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Xp{constructor(){this.ho=new aa,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,r){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new aa,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Yp{To(t){}shutdown(){}}/**
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
 */const ua="ConnectivityMonitor";class ca{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){V(ua,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){V(ua,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let qn=null;function As(){return qn===null?qn=function(){return 268435456+Math.round(2147483648*Math.random())}():qn++,"0x"+qn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="RestConnection",Jp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Zp{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===Zn?`project_id=${r}`:`project_id=${r}&database_id=${i}`}So(t,e,r,i,o){const a=As(),l=this.bo(t,e.toUriEncodedString());V(es,`Sending RPC '${t}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(h,i,o),this.vo(t,l,h,r).then(f=>(V(es,`Received RPC '${t}' ${a}: `,f),f),f=>{throw Ce(es,`RPC '${t}' ${a} failed with error: `,f,"url: ",l,"request:",r),f})}Co(t,e,r,i,o,a){return this.So(t,e,r,i,o)}Do(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ne}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}bo(t,e){const r=Jp[t];return`${this.po}/v1/${e}:${r}`}terminate(){}}/**
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
 */class tg{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
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
 */const ft="WebChannelConnection";class eg extends Zp{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,r,i){const o=As();return new Promise((a,l)=>{const h=new cu;h.setWithCredentials(!0),h.listenOnce(lu.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case jn.NO_ERROR:const _=h.getResponseJson();V(ft,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),a(_);break;case jn.TIMEOUT:V(ft,`RPC '${t}' ${o} timed out`),l(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case jn.HTTP_ERROR:const w=h.getStatus();if(V(ft,`RPC '${t}' ${o} failed with status:`,w,"response text:",h.getResponseText()),w>0){let C=h.getResponseJson();Array.isArray(C)&&(C=C[0]);const S=C==null?void 0:C.error;if(S&&S.status&&S.message){const k=function(D){const K=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(K)>=0?K:P.UNKNOWN}(S.status);l(new N(k,S.message))}else l(new N(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new N(P.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{V(ft,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);V(ft,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",f,r,15)})}Wo(t,e,r){const i=As(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=fu(),l=du(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Do(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const _=o.join("");V(ft,`Creating RPC '${t}' stream ${i}: ${_}`,h);const w=a.createWebChannel(_,h);let C=!1,S=!1;const k=new tg({Fo:D=>{S?V(ft,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(C||(V(ft,`Opening RPC '${t}' stream ${i} transport.`),w.open(),C=!0),V(ft,`RPC '${t}' stream ${i} sending:`,D),w.send(D))},Mo:()=>w.close()}),M=(D,K,Q)=>{D.listen(K,G=>{try{Q(G)}catch(rt){setTimeout(()=>{throw rt},0)}})};return M(w,Ze.EventType.OPEN,()=>{S||(V(ft,`RPC '${t}' stream ${i} transport opened.`),k.Qo())}),M(w,Ze.EventType.CLOSE,()=>{S||(S=!0,V(ft,`RPC '${t}' stream ${i} transport closed`),k.Uo())}),M(w,Ze.EventType.ERROR,D=>{S||(S=!0,Ce(ft,`RPC '${t}' stream ${i} transport errored:`,D),k.Uo(new N(P.UNAVAILABLE,"The operation could not be completed")))}),M(w,Ze.EventType.MESSAGE,D=>{var K;if(!S){const Q=D.data[0];W(!!Q);const G=Q,rt=(G==null?void 0:G.error)||((K=G[0])===null||K===void 0?void 0:K.error);if(rt){V(ft,`RPC '${t}' stream ${i} received error:`,rt);const Dt=rt.status;let it=function(m){const y=tt[m];if(y!==void 0)return Lu(y)}(Dt),T=rt.message;it===void 0&&(it=P.INTERNAL,T="Unknown error status: "+Dt+" with message "+rt.message),S=!0,k.Uo(new N(it,T)),w.close()}else V(ft,`RPC '${t}' stream ${i} received:`,Q),k.Ko(Q)}}),M(l,hu.STAT_EVENT,D=>{D.stat===ls.PROXY?V(ft,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===ls.NOPROXY&&V(ft,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.$o()},0),k}}function ns(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(n){return new up(n,!0)}/**
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
 */class Yu{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=r,this.zo=i,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,e-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const la="PersistentStream";class ng{constructor(t,e,r,i,o,a,l,h){this.Ti=t,this.n_=r,this.r_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Yu(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Lt(e.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===e&&this.V_(r,i)},r=>{t(()=>{const i=new N(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(t,e){const r=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return V(la,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(V(la,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rg extends ng{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=fp(this.serializer,t),r=function(o){if(!("targetChange"in o))return x.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?x.min():a.readTime?we(a.readTime):x.min()}(t);return this.listener.p_(e,r)}y_(t){const e={};e.database=na(this.serializer),e.addTarget=function(o,a){let l;const h=a.target;if(l=_s(h)?{documents:pp(o,h)}:{query:gp(o,h).ht},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=lp(o,a.resumeToken);const f=vs(o,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(x.min())>0){l.readTime=cp(o,a.snapshotVersion.toTimestamp());const f=vs(o,a.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const r=_p(this.serializer,t);r&&(e.labels=r),this.I_(e)}w_(t){const e={};e.database=na(this.serializer),e.removeTarget=t,this.I_(e)}}/**
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
 */class sg{}class ig extends sg{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.So(t,Is(e,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())})}Co(t,e,r,i,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(t,Is(e,r),i,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(P.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class og{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Lt(e),this.N_=!1):V("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const De="RemoteStore";class ag{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(a=>{r.enqueueAndForget(async()=>{yn(this)&&(V(De,"Restarting streams for network reachability change."),await async function(h){const f=$(h);f.W_.add(4),await _n(f),f.j_.set("Unknown"),f.W_.delete(4),await Tr(f)}(this))})}),this.j_=new og(r,i)}}async function Tr(n){if(yn(n))for(const t of n.G_)await t(!0)}async function _n(n){for(const t of n.G_)await t(!1)}function Ju(n,t){const e=$(n);e.K_.has(t.targetId)||(e.K_.set(t.targetId,t),ni(e)?ei(e):Me(e).c_()&&ti(e,t))}function Zs(n,t){const e=$(n),r=Me(e);e.K_.delete(t),r.c_()&&Zu(e,t),e.K_.size===0&&(r.c_()?r.P_():yn(e)&&e.j_.set("Unknown"))}function ti(n,t){if(n.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(x.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Me(n).y_(t)}function Zu(n,t){n.H_.Ne(t),Me(n).w_(t)}function ei(n){n.H_=new sp({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>n.K_.get(t)||null,it:()=>n.datastore.serializer.databaseId}),Me(n).start(),n.j_.B_()}function ni(n){return yn(n)&&!Me(n).u_()&&n.K_.size>0}function yn(n){return $(n).W_.size===0}function tc(n){n.H_=void 0}async function ug(n){n.j_.set("Online")}async function cg(n){n.K_.forEach((t,e)=>{ti(n,t)})}async function lg(n,t){tc(n),ni(n)?(n.j_.q_(t),ei(n)):n.j_.set("Unknown")}async function hg(n,t,e){if(n.j_.set("Online"),t instanceof Uu&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const l of o.targetIds)i.K_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.K_.delete(l),i.H_.removeTarget(l))}(n,t)}catch(r){V(De,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ha(n,r)}else if(t instanceof Kn?n.H_.We(t):t instanceof Fu?n.H_.Ze(t):n.H_.je(t),!e.isEqual(x.min()))try{const r=await Wu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.H_.ot(a);return l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const _=o.K_.get(f);_&&o.K_.set(f,_.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,f)=>{const _=o.K_.get(h);if(!_)return;o.K_.set(h,_.withResumeToken(ut.EMPTY_BYTE_STRING,_.snapshotVersion)),Zu(o,h);const w=new jt(_.target,h,f,_.sequenceNumber);ti(o,w)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){V(De,"Failed to raise snapshot:",r),await ha(n,r)}}async function ha(n,t,e){if(!Oe(t))throw t;n.W_.add(1),await _n(n),n.j_.set("Offline"),e||(e=()=>Wu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V(De,"Retrying IndexedDB access"),await e(),n.W_.delete(1),await Tr(n)})}async function da(n,t){const e=$(n);e.asyncQueue.verifyOperationInProgress(),V(De,"RemoteStore received new credentials");const r=yn(e);e.W_.add(3),await _n(e),r&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await Tr(e)}async function dg(n,t){const e=$(n);t?(e.W_.delete(2),await Tr(e)):t||(e.W_.add(2),await _n(e),e.j_.set("Unknown"))}function Me(n){return n.J_||(n.J_=function(e,r,i){const o=$(e);return o.M_(),new rg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{xo:ug.bind(null,n),No:cg.bind(null,n),Lo:lg.bind(null,n),p_:hg.bind(null,n)}),n.G_.push(async t=>{t?(n.J_.h_(),ni(n)?ei(n):n.j_.set("Unknown")):(await n.J_.stop(),tc(n))})),n.J_}/**
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
 */class ri{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Ie,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,l=new ri(t,e,a,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ec(n,t){if(Lt("AsyncQueue",`${t}: ${n}`),Oe(n))return new N(P.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Ae{static emptySet(t){return new Ae(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=tn(),this.sortedSet=new Z(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ae)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ae;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class fa{constructor(){this.Z_=new Z(O.comparator)}track(t){const e=t.doc.key,r=this.Z_.get(e);r?t.type!==0&&r.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&r.type!==1?this.Z_=this.Z_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Z_=this.Z_.remove(e):t.type===1&&r.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):L():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,r)=>{t.push(r)}),t}}class ke{constructor(t,e,r,i,o,a,l,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new ke(t,e,Ae.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&gr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class fg{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class pg{constructor(){this.queries=pa(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,r){const i=$(e),o=i.queries;i.queries=pa(),o.forEach((a,l)=>{for(const h of l.ta)h.onError(r)})})(this,new N(P.ABORTED,"Firestore shutting down"))}}function pa(){return new de(n=>bu(n),gr)}async function gg(n,t){const e=$(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.na()&&t.ra()&&(r=2):(o=new fg,r=t.ra()?0:1);try{switch(r){case 0:o.ea=await e.onListen(i,!0);break;case 1:o.ea=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const l=ec(a,`Initialization of query '${Ee(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.ta.push(t),t.sa(e.onlineState),o.ea&&t.oa(o.ea)&&si(e)}async function mg(n,t){const e=$(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.ta.indexOf(t);a>=0&&(o.ta.splice(a,1),o.ta.length===0?i=t.ra()?0:1:!o.na()&&t.ra()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function _g(n,t){const e=$(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const l of a.ta)l.oa(i)&&(r=!0);a.ea=i}}r&&si(e)}function yg(n,t,e){const r=$(n),i=r.queries.get(t);if(i)for(const o of i.ta)o.onError(e);r.queries.delete(t)}function si(n){n.ia.forEach(t=>{t.next()})}var Rs,ga;(ga=Rs||(Rs={}))._a="default",ga.Cache="cache";class Eg{constructor(t,e,r){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new ke(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const r=e!=="Offline";return(!this.options.Ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=ke.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==Rs.Cache}}/**
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
 */class nc{constructor(t){this.key=t}}class rc{constructor(t){this.key=t}}class Tg{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=q(),this.mutatedKeys=q(),this.ya=Pu(t),this.wa=new Ae(this.ya)}get Sa(){return this.fa}ba(t,e){const r=e?e.Da:new fa,i=e?e.wa:this.wa;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,l=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((_,w)=>{const C=i.get(_),S=mr(this.query,w)?w:null,k=!!C&&this.mutatedKeys.has(C.key),M=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;C&&S?C.data.isEqual(S.data)?k!==M&&(r.track({type:3,doc:S}),D=!0):this.va(C,S)||(r.track({type:2,doc:S}),D=!0,(h&&this.ya(S,h)>0||f&&this.ya(S,f)<0)&&(l=!0)):!C&&S?(r.track({type:0,doc:S}),D=!0):C&&!S&&(r.track({type:1,doc:C}),D=!0,(h||f)&&(l=!0)),D&&(S?(a=a.add(S),o=M?o.add(_):o.delete(_)):(a=a.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const _=this.query.limitType==="F"?a.last():a.first();a=a.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{wa:a,Da:r,ls:l,mutatedKeys:o}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const a=t.Da.X_();a.sort((_,w)=>function(S,k){const M=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return M(S)-M(k)}(_.type,w.type)||this.ya(_.doc,w.doc)),this.Ca(r),i=i!=null&&i;const l=e&&!i?this.Fa():[],h=this.pa.size===0&&this.current&&!i?1:0,f=h!==this.ga;return this.ga=h,a.length!==0||f?{snapshot:new ke(this.query,t.wa,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new fa,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=q(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const e=[];return t.forEach(r=>{this.pa.has(r)||e.push(new rc(r))}),this.pa.forEach(r=>{t.has(r)||e.push(new nc(r))}),e}Oa(t){this.fa=t.gs,this.pa=q();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return ke.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ii="SyncEngine";class vg{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Ig{constructor(t){this.key=t,this.Ba=!1}}class wg{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new de(l=>bu(l),gr),this.qa=new Map,this.Qa=new Set,this.$a=new Z(O.comparator),this.Ua=new Map,this.Ka=new Ws,this.Wa={},this.Ga=new Map,this.za=Ve.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Ag(n,t,e=!0){const r=uc(n);let i;const o=r.ka.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Na()):i=await sc(r,t,e,!0),i}async function Rg(n,t){const e=uc(n);await sc(e,t,!0,!1)}async function sc(n,t,e,r){const i=await Qp(n.localStore,bt(t)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await Cg(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&Ju(n.remoteStore,i),l}async function Cg(n,t,e,r,i){n.Ha=(w,C,S)=>async function(M,D,K,Q){let G=D.view.ba(K);G.ls&&(G=await oa(M.localStore,D.query,!1).then(({documents:T})=>D.view.ba(T,G)));const rt=Q&&Q.targetChanges.get(D.targetId),Dt=Q&&Q.targetMismatches.get(D.targetId)!=null,it=D.view.applyChanges(G,M.isPrimaryClient,rt,Dt);return _a(M,D.targetId,it.Ma),it.snapshot}(n,w,C,S);const o=await oa(n.localStore,t,!0),a=new Tg(t,o.gs),l=a.ba(o.documents),h=mn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=a.applyChanges(l,n.isPrimaryClient,h);_a(n,e,f.Ma);const _=new vg(t,e,a);return n.ka.set(t,_),n.qa.has(e)?n.qa.get(e).push(t):n.qa.set(e,[t]),f.snapshot}async function Sg(n,t,e){const r=$(n),i=r.ka.get(t),o=r.qa.get(i.targetId);if(o.length>1)return r.qa.set(i.targetId,o.filter(a=>!gr(a,t))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ws(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Zs(r.remoteStore,i.targetId),Cs(r,i.targetId)}).catch(lr)):(Cs(r,i.targetId),await ws(r.localStore,i.targetId,!0))}async function bg(n,t){const e=$(n),r=e.ka.get(t),i=e.qa.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Zs(e.remoteStore,r.targetId))}async function ic(n,t){const e=$(n);try{const r=await Kp(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Ua.get(o);a&&(W(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Ba=!0:i.modifiedDocuments.size>0?W(a.Ba):i.removedDocuments.size>0&&(W(a.Ba),a.Ba=!1))}),await ac(e,r,t)}catch(r){await lr(r)}}function ma(n,t,e){const r=$(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ka.forEach((o,a)=>{const l=a.view.sa(t);l.snapshot&&i.push(l.snapshot)}),function(a,l){const h=$(a);h.onlineState=l;let f=!1;h.queries.forEach((_,w)=>{for(const C of w.ta)C.sa(l)&&(f=!0)}),f&&si(h)}(r.eventManager,t),i.length&&r.La.p_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Pg(n,t,e){const r=$(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Ua.get(t),o=i&&i.key;if(o){let a=new Z(O.comparator);a=a.insert(o,gt.newNoDocument(o,x.min()));const l=q().add(o),h=new Er(x.min(),new Map,new Z(F),a,l);await ic(r,h),r.$a=r.$a.remove(o),r.Ua.delete(t),oi(r)}else await ws(r.localStore,t,!1).then(()=>Cs(r,t,e)).catch(lr)}function Cs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.qa.get(t))n.ka.delete(r),e&&n.La.Ja(r,e);n.qa.delete(t),n.isPrimaryClient&&n.Ka.br(t).forEach(r=>{n.Ka.containsKey(r)||oc(n,r)})}function oc(n,t){n.Qa.delete(t.path.canonicalString());const e=n.$a.get(t);e!==null&&(Zs(n.remoteStore,e),n.$a=n.$a.remove(t),n.Ua.delete(e),oi(n))}function _a(n,t,e){for(const r of e)r instanceof nc?(n.Ka.addReference(r.key,t),Vg(n,r)):r instanceof rc?(V(ii,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,t),n.Ka.containsKey(r.key)||oc(n,r.key)):L()}function Vg(n,t){const e=t.key,r=e.path.canonicalString();n.$a.get(e)||n.Qa.has(r)||(V(ii,"New document in limbo: "+e),n.Qa.add(r),oi(n))}function oi(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const t=n.Qa.values().next().value;n.Qa.delete(t);const e=new O(Y.fromString(t)),r=n.za.next();n.Ua.set(r,new Ig(e)),n.$a=n.$a.insert(e,r),Ju(n.remoteStore,new jt(bt(Hs(e.path)),r,"TargetPurposeLimboResolution",hr.ae))}}async function ac(n,t,e){const r=$(n),i=[],o=[],a=[];r.ka.isEmpty()||(r.ka.forEach((l,h)=>{a.push(r.Ha(h,t,e).then(f=>{var _;if((f||e)&&r.isPrimaryClient){const w=f?!f.fromCache:(_=e==null?void 0:e.targetChanges.get(h.targetId))===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(h.targetId,w?"current":"not-current")}if(f){i.push(f);const w=Ys.Yi(h.targetId,f);o.push(w)}}))}),await Promise.all(a),r.La.p_(i),await async function(h,f){const _=$(h);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(f,C=>R.forEach(C.Hi,S=>_.persistence.referenceDelegate.addReference(w,C.targetId,S)).next(()=>R.forEach(C.Ji,S=>_.persistence.referenceDelegate.removeReference(w,C.targetId,S)))))}catch(w){if(!Oe(w))throw w;V(Js,"Failed to update sequence numbers: "+w)}for(const w of f){const C=w.targetId;if(!w.fromCache){const S=_.Ts.get(C),k=S.snapshotVersion,M=S.withLastLimboFreeSnapshotVersion(k);_.Ts=_.Ts.insert(C,M)}}}(r.localStore,o))}async function Dg(n,t){const e=$(n);if(!e.currentUser.isEqual(t)){V(ii,"User change. New user:",t.toKey());const r=await Qu(e.localStore,t);e.currentUser=t,function(o,a){o.Ga.forEach(l=>{l.forEach(h=>{h.reject(new N(P.CANCELLED,a))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ac(e,r.Rs)}}function kg(n,t){const e=$(n),r=e.Ua.get(t);if(r&&r.Ba)return q().add(r.key);{let i=q();const o=e.qa.get(t);if(!o)return i;for(const a of o){const l=e.ka.get(a);i=i.unionWith(l.view.Sa)}return i}}function uc(n){const t=$(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=ic.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=kg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Pg.bind(null,t),t.La.p_=_g.bind(null,t.eventManager),t.La.Ja=yg.bind(null,t.eventManager),t}class ir{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Xu(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return Hp(this.persistence,new qp,t.initialUser,this.serializer)}Xa(t){return new Gu(Xs.ri,this.serializer)}Za(t){return new Xp}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ir.provider={build:()=>new ir};class Ng extends ir{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){W(this.persistence.referenceDelegate instanceof sr);const r=this.persistence.referenceDelegate.garbageCollector;return new Sp(r,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Gu(r=>sr.ri(r,e),this.serializer)}}class Ss{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ma(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Dg.bind(null,this.syncEngine),await dg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new pg}()}createDatastore(t){const e=Xu(t.databaseInfo.databaseId),r=function(o){return new eg(o)}(t.databaseInfo);return function(o,a,l,h){return new ig(o,a,l,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,a,l){return new ag(r,i,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>ma(this.syncEngine,e,0),function(){return ca.D()?new ca:new Yp}())}createSyncEngine(t,e){return function(i,o,a,l,h,f,_){const w=new wg(i,o,a,l,h,f);return _&&(w.ja=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=$(i);V(De,"RemoteStore shutting down."),o.W_.add(5),await _n(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ss.provider={build:()=>new Ss};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Og{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Lt("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const Zt="FirestoreClient";class Mg{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=of.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{V(Zt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(V(Zt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ie;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ec(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function rs(n,t){n.asyncQueue.verifyOperationInProgress(),V(Zt,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Qu(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ya(n,t){n.asyncQueue.verifyOperationInProgress();const e=await xg(n);V(Zt,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>da(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>da(t.remoteStore,i)),n._onlineComponents=t}async function xg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Zt,"Using user provided OfflineComponentProvider");try{await rs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Ce("Error using user provided cache. Falling back to memory cache: "+e),await rs(n,new ir)}}else V(Zt,"Using default OfflineComponentProvider"),await rs(n,new Ng(void 0));return n._offlineComponents}async function Lg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Zt,"Using user provided OnlineComponentProvider"),await ya(n,n._uninitializedComponentsProvider._online)):(V(Zt,"Using default OnlineComponentProvider"),await ya(n,new Ss))),n._onlineComponents}async function Ea(n){const t=await Lg(n),e=t.eventManager;return e.onListen=Ag.bind(null,t.syncEngine),e.onUnlisten=Sg.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Rg.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=bg.bind(null,t.syncEngine),e}/**
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
 */function cc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new Map;function Fg(n,t,e,r){if(t===!0&&r===!0)throw new N(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function va(n){if(O.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ug(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L()}function Gn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ug(n);throw new N(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="firestore.googleapis.com",Ia=!0;class wa{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lc,this.ssl=Ia}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Ia;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Ku;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Rp)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Fg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ai{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wa({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wa(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Jd;switch(r.type){case"firstParty":return new nf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Ta.get(e);r&&(V("ComponentProvider","Removing Datastore"),Ta.delete(e),r.terminate())}(this),Promise.resolve()}}function Bg(n,t,e,r={}){var i;const o=(n=Gn(n,ai))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),l=`${t}:${e}`;o.host!==lc&&o.host!==l&&Ce("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:l,ssl:!1,emulatorOptions:r});if(!Xn(h,a)&&(n._setSettings(h),r.mockUserToken)){let f,_;if(typeof r.mockUserToken=="string")f=r.mockUserToken,_=pt.MOCK_USER;else{f=ll(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new pt(w)}n._authCredentials=new Zd(new pu(f,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new vr(this.firestore,t,this._query)}}class fe{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Re(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new fe(this.firestore,t,this._key)}}class Re extends vr{constructor(t,e,r){super(t,e,Hs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new fe(this.firestore,null,new O(t))}withConverter(t){return new Re(this.firestore,t,this._path)}}function $g(n,t,...e){if(n=Ds(n),n instanceof ai){const r=Y.fromString(t,...e);return va(r),new Re(n,null,r)}{if(!(n instanceof fe||n instanceof Re))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return va(r),new Re(n.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="AsyncQueue";class Ra{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Yu(this,"async_queue_retry"),this.Su=()=>{const r=ns();r&&V(Aa,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=t;const e=ns();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=ns();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new Ie;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Oe(t))throw t;V(Aa,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Lt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.bu=e,e}enqueueAfterDelay(t,e,r){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const i=ri.createAndSchedule(this,t,e,r,o=>this.Fu(o));return this.fu.push(i),i}Du(){this.gu&&L()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}function Ca(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}class bs extends ai{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Ra,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ra(t),this._firestoreClient=void 0,await t}}}function qg(n,t){const e=typeof n=="object"?n:Ih(),r=typeof n=="string"?n:Zn,i=Os(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=ul("firestore");o&&Bg(i,...o)}return i}function jg(n){if(n._terminated)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||zg(n),n._firestoreClient}function zg(n){var t,e,r;const i=n._freezeSettings(),o=function(l,h,f,_){return new Tf(l,h,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,cc(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Mg(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t){this._byteString=t}static fromBase64String(t){try{return new or(ut.fromBase64String(t))}catch(e){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new or(ut.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Hg{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return F(this._lat,t._lat)||F(this._long,t._long)}}/**
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
 */class Kg{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}}const Gg=new RegExp("[~\\*/\\[\\]]");function Qg(n,t,e){if(t.search(Gg)>=0)throw Sa(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new hc(...t.split("."))._internalPath}catch{throw Sa(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Sa(n,t,e,r,i){let o=`Function ${t}() called with invalid data`;o+=". ";let a="";return new N(P.INVALID_ARGUMENT,o+n+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Wg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(fc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Wg extends dc{data(){return super.data()}}function fc(n,t){return typeof t=="string"?Qg(n,t):t instanceof hc?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yg{convertValue(t,e="none"){switch(Yt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Xt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return gn(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e[fs].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>J(a.doubleValue));return new Kg(o)}convertGeoPoint(t){return new Hg(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=fr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(dn(t));default:return null}}convertTimestamp(t){const e=Wt(t);return new vt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Y.fromString(t);W(Hu(r));const i=new fn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return i.isEqual(e)||Lt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class pc extends dc{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Qn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(fc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Qn extends pc{data(t={}){return super.data(t)}}class Jg{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new nn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Qn(this._firestore,this._userDataWriter,r.key,r,new nn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const h=new Qn(i._firestore,i._userDataWriter,l.doc.key,l.doc,new nn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new Qn(i._firestore,i._userDataWriter,l.doc.key,l.doc,new nn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,_=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),_=a.indexOf(l.doc.key)),{type:Zg(l.type),doc:h,oldIndex:f,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Zg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class gc extends Yg{constructor(t){super(),this.firestore=t}convertBytes(t){return new or(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new fe(this.firestore,null,e)}}function tm(n,...t){var e,r,i;n=Ds(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Ca(t[a])||(o=t[a],a++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Ca(t[a])){const w=t[a];t[a]=(e=w.next)===null||e===void 0?void 0:e.bind(w),t[a+1]=(r=w.error)===null||r===void 0?void 0:r.bind(w),t[a+2]=(i=w.complete)===null||i===void 0?void 0:i.bind(w)}let h,f,_;if(n instanceof fe)f=Gn(n.firestore,bs),_=Hs(n._key.path),h={next:w=>{t[a]&&t[a](em(f,n,w))},error:t[a+1],complete:t[a+2]};else{const w=Gn(n,vr);f=Gn(w.firestore,bs),_=w._query;const C=new gc(f);h={next:S=>{t[a]&&t[a](new Jg(f,C,w,S))},error:t[a+1],complete:t[a+2]},Xg(n._query)}return function(C,S,k,M){const D=new Og(M),K=new Eg(S,D,k);return C.asyncQueue.enqueueAndForget(async()=>gg(await Ea(C),K)),()=>{D.su(),C.asyncQueue.enqueueAndForget(async()=>mg(await Ea(C),K))}}(jg(f),_,l,h)}function em(n,t,e){const r=e.docs.get(t._key),i=new gc(n);return new pc(n,i,t._key,r,new nn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Ne=i})(vh),Gt(new Mt("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new bs(new tf(r.getProvider("auth-internal")),new rf(a,r.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fn(f.options.projectId,_)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),St(Vo,Do,t),St(Vo,Do,"esm2017")})();const nm={apiKey:"AIzaSyBLgMlecmSzmpOkUh2OelEkITyWo2iHlaI",authDomain:"grow-nest-shop.firebaseapp.com",databaseURL:"https://grow-nest-shop-default-rtdb.firebaseio.com",projectId:"grow-nest-shop",storageBucket:"grow-nest-shop.firebasestorage.app",messagingSenderId:"277394138239",appId:"1:277394138239:web:4435c394d7db7509858b4a",measurementId:"G-KGY1JP1SGN"},rm=La(nm),sm=qg(rm);function im(n){tm($g(sm,"products"),t=>{const e={};t.forEach(r=>{e[r.id]=r.data()}),n(e)})}const Ps=document.querySelector("#products-list"),om=document.querySelector(".counter");im(n=>{n&&(Ps.innerHTML="",Object.entries(n).forEach(([t,e])=>{e.id=t;const r=am(e);Ps.appendChild(r),setTimeout(()=>{const i=r.querySelector(".cart-button");cn.hasItem(e.id)&&mc(i,!0)},0)}))});function am(n){const t=document.createElement("div");return t.classList.add("product"),t.innerHTML=`
    <div>
      <img src="public/images/${n.image}" alt="${n.name}" width="180"/>
    </div>
    <div>
      <h3>${n.name}</h3>
      <p>${n.description}</p>
      <strong>${n.price} zł</strong>
      <p><em>${n.category}</em></p>
      <div>      
        <button class="button cart-button" 
          data-id="${n.id}" 
          data-name="${n.name}" 
          data-price="${n.price}">
          Dodaj do koszyka
        </button>
      </div>
    </div>
  `,t}function um(){const n=new Map,t=()=>{om.textContent=n.size},e=()=>{localStorage.setItem("items",JSON.stringify(Array.from(n.entries())))};return{add:(l,h,f,_=1)=>{n.set(l,{id:l,name:h,price:f,quantity:_}),t(),e()},remove:l=>{n.delete(l),t(),e()},setItems:l=>{n.clear();for(const[h,f]of l)n.set(h,f);t(),e()},hasItem:l=>n.has(l)}}const cn=um(),ba=JSON.parse(localStorage.getItem("items"));ba&&cn.setItems(ba);const mc=(n,t)=>{n.classList.toggle("in-cart",t),n.innerHTML=t?"Usuń z koszyka":"Dodaj do koszyka"},cm=n=>{const t=n.target.closest(".cart-button");if(!t)return;const{id:e,name:r,price:i}=t.dataset,o=+i,a=cn.hasItem(e);a?cn.remove(e):cn.add(e,r,o),mc(t,!a)};Ps.addEventListener("click",cm);
