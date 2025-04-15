webpackJsonp([10],{"H2h+":function(t,e){
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const i=document.createElement("link");i.rel="stylesheet",i.href="https://fonts.googleapis.com/icon?family=Material+Icons",document.head.appendChild(i)},H5fL:function(t,e){},TQvf:function(t,e,i){
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
var s;s=function(){return function(){var t={686:function(t,e,i){"use strict";i.d(e,{default:function(){return w}});var s=i(279),n=i.n(s),o=i(370),r=i.n(o),a=i(817),l=i.n(a);function c(t){try{return document.execCommand(t)}catch(t){return!1}}var d=function(t){var e=l()(t);return c("cut"),e};var h=function(t,e){var i=function(t){var e="rtl"===document.documentElement.getAttribute("dir"),i=document.createElement("textarea");i.style.fontSize="12pt",i.style.border="0",i.style.padding="0",i.style.margin="0",i.style.position="absolute",i.style[e?"right":"left"]="-9999px";var s=window.pageYOffset||document.documentElement.scrollTop;return i.style.top="".concat(s,"px"),i.setAttribute("readonly",""),i.value=t,i}(t);e.container.appendChild(i);var s=l()(i);return c("copy"),i.remove(),s},u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},i="";return"string"==typeof t?i=h(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null===t||void 0===t?void 0:t.type)?i=h(t.value,e):(i=l()(t),c("copy")),i};function p(t){"@babel/helpers - typeof";return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,i=void 0===e?"copy":e,s=t.container,n=t.target,o=t.text;if("copy"!==i&&"cut"!==i)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==n){if(!n||"object"!==p(n)||1!==n.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===i&&n.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===i&&(n.hasAttribute("readonly")||n.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return o?u(o,{container:s}):n?"cut"===i?d(n):u(n,{container:s}):void 0};function g(t){"@babel/helpers - typeof";return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function _(t,e){return(_=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var i,s=b(t);if(e){var n=b(this).constructor;i=Reflect.construct(s,arguments,n)}else i=s.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,i)}}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){var i="data-clipboard-".concat(t);if(e.hasAttribute(i))return e.getAttribute(i)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}(a,n());var e,i,s,o=v(a);function a(t,e){var i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(i=o.call(this)).resolveOptions(e),i.listenClick(t),i}return e=a,s=[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return u(t,e)}},{key:"cut",value:function(t){return d(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,i=!!document.queryCommandSupported;return e.forEach(function(t){i=i&&!!document.queryCommandSupported(t)}),i}}],(i=[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===g(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=r()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,i=this.action(e)||"copy",s=f({action:i,container:this.container,target:this.target(e),text:this.text(e)});this.emit(s?"success":"error",{action:i,text:s,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return y("action",t)}},{key:"defaultTarget",value:function(t){var e=y("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return y("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&m(e.prototype,i),s&&m(e,s),a}()},828:function(t){var e=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var i=Element.prototype;i.matches=i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector}t.exports=function(t,i){for(;t&&t.nodeType!==e;){if("function"==typeof t.matches&&t.matches(i))return t;t=t.parentNode}}},438:function(t,e,i){var s=i(828);function n(t,e,i,n,o){var r=function(t,e,i,n){return function(i){i.delegateTarget=s(i.target,e),i.delegateTarget&&n.call(t,i)}}.apply(this,arguments);return t.addEventListener(i,r,o),{destroy:function(){t.removeEventListener(i,r,o)}}}t.exports=function(t,e,i,s,o){return"function"==typeof t.addEventListener?n.apply(null,arguments):"function"==typeof i?n.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return n(t,e,i,s,o)}))}},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var i=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===i||"[object HTMLCollection]"===i)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,i){var s=i(879),n=i(438);t.exports=function(t,e,i){if(!t&&!e&&!i)throw new Error("Missing required arguments");if(!s.string(e))throw new TypeError("Second argument must be a String");if(!s.fn(i))throw new TypeError("Third argument must be a Function");if(s.node(t))return function(t,e,i){return t.addEventListener(e,i),{destroy:function(){t.removeEventListener(e,i)}}}(t,e,i);if(s.nodeList(t))return function(t,e,i){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,i)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,i)})}}}(t,e,i);if(s.string(t))return function(t,e,i){return n(document.body,t,e,i)}(t,e,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(t){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var i=t.hasAttribute("readonly");i||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),i||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var s=window.getSelection(),n=document.createRange();n.selectNodeContents(t),s.removeAllRanges(),s.addRange(n),e=s.toString()}return e}},279:function(t){function e(){}e.prototype={on:function(t,e,i){var s=this.e||(this.e={});return(s[t]||(s[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var s=this;function n(){s.off(t,n),e.apply(i,arguments)}return n._=e,this.on(t,n,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),s=0,n=i.length;s<n;s++)i[s].fn.apply(i[s].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),s=i[t],n=[];if(s&&e)for(var o=0,r=s.length;o<r;o++)s[o].fn!==e&&s[o].fn._!==e&&n.push(s[o]);return n.length?i[t]=n:delete i[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={exports:{}};return t[s](n,n.exports,i),n.exports}return i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i(686)}().default},t.exports=s()},"Va4+":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("/5sW"),n=i("TQvf"),o=i.n(n);function r(t,e){var i=new o.a(e.target,{text:function(){return t}});i.on("success",function(){s.default.prototype.$notify({title:"success",message:"copy成功",type:"success"}),i.off("error"),i.off("success"),i.destroy()}),i.on("error",function(){s.default.prototype.$notify.error({title:"error",message:"copy失败"}),i.off("error"),i.off("success"),i.destroy()}),i.onClick(e)}var a=i("TQvf");if(!a)throw new Error("you should npm install `clipboard` --save at first");var l={bind:function(t,e){if("success"===e.arg)t._v_clipboard_success=e.value;else if("error"===e.arg)t._v_clipboard_error=e.value;else{var i=new a(t,{text:function(){return e.value},action:function(){return"cut"===e.arg?"cut":"copy"}});i.on("success",function(e){var i=t._v_clipboard_success;i&&i(e)}),i.on("error",function(e){var i=t._v_clipboard_error;i&&i(e)}),t._v_clipboard=i}},update:function(t,e){"success"===e.arg?t._v_clipboard_success=e.value:"error"===e.arg?t._v_clipboard_error=e.value:(t._v_clipboard.text=function(){return e.value},t._v_clipboard_action=function(){return"cut"===e.arg?"cut":"copy"})},unbind:function(t,e){"success"===e.arg?delete t._v_clipboard_success:"error"===e.arg?delete t._v_clipboard_error:(t._v_clipboard.destroy(),delete t._v_clipboard)}},c=function(t){t.directive("Clipboard",l)};window.Vue&&(window.clipboard=l,Vue.use(c)),l.install=c;var d=l;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let h=0;function u(){}u.prototype.__mixinApplications,u.prototype.__mixinSet;const p=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=h++;return function(s){let n=s.__mixinSet;if(n&&n[i])return s;let o=e,r=o.get(s);if(!r){r=t(s),o.set(s,r);let e=Object.create(r.__mixinSet||n||null);e[i]=!0,r.__mixinSet=e}return r}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const f=[];
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let g=0,m=0,_=[],v=0,b=!1,y=document.createTextNode("");new window.MutationObserver(function(){b=!1;const t=_.length;for(let e=0;e<t;e++){let t=_[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}_.splice(0,t),m+=t}).observe(y,{characterData:!0});const w={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},k={run:t=>(b||(b=!0,y.textContent=v++),_.push(t),g++),cancel(t){const e=t-m;if(e>=0){if(!_[e])throw new Error("invalid async handle: "+t);_[e]=null}}},x=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t,C=k,S=p(t=>{return class extends t{static createProperties(t){const e=this.prototype;for(let i in t)i in e||e._createPropertyAccessor(i)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[t];return e||(e=this.constructor.attributeNameForProperty(t),this.__dataAttributes[e]=t),e}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this.__data[t]},set:e?function(){}:function(e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,i){let s=this.__data[t],n=this._shouldPropertyChange(t,e,s);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||t in this.__dataOld||(this.__dataOld[t]=s),this.__data[t]=e,this.__dataPending[t]=e),n}_isPropertyPending(t){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(t))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,C.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const t=this.__data,e=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(t,e,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,i)),this.__dataCounter--}_shouldPropertiesChange(t,e,i){return Boolean(e)}_propertiesChanged(t,e,i){}_shouldPropertyChange(t,e,i){return i!==e&&(i==i||e==e)}attributeChangedCallback(t,e,i,s){e!==i&&this._attributeToProperty(t,i),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,i,s)}_attributeToProperty(t,e,i){if(!this.__serializing){const s=this.__dataAttributes,n=s&&s[t]||t;this[n]=this._deserializeValue(e,i||this.constructor.typeForProperty(n))}}_propertyToAttribute(t,e,i){this.__serializing=!0,i=arguments.length<3?this[t]:i,this._valueToNodeAttribute(this,i,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,i){const s=this._serializeValue(e);"class"!==i&&"name"!==i&&"slot"!==i||(t=x(t)),void 0===s?t.removeAttribute(i):t.setAttribute(i,""===s&&window.trustedTypes?window.trustedTypes.emptyScript:s)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}});const E=p(t=>{const e=S(t);function i(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof n?e:null}function s(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const i=t.properties;i&&(e=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(t){const e={};for(let i in t){const s=t[i];e[i]="function"==typeof s?{type:s}:s}return e}(i))}t.__ownProperties=e}return t.__ownProperties}class n extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){t=this.prototype,f.push(t);const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(t=>this.prototype._addPropertyToAttributeMap(t)):[]}var t;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=i(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=s(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=i(this);this.__properties=Object.assign({},t&&t._properties,s(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){0,this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const N=new Map;class P{constructor(t,e,i,s=F){this.strings=t,this.values=e,this.type=i,this.partCallback=s}getHTML(){const t=this.strings.length-1;let e="",i=!0;for(let s=0;s<t;s++){const t=this.strings[s];e+=t;const n=A(t);e+=(i=n>-1?n<t.length:i)?O:T}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const T=`{{lit-${String(Math.random()).slice(2)}}}`,O=`\x3c!--${T}--\x3e`,R=new RegExp(`${T}|${O}`),L=/[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;function A(t){const e=t.lastIndexOf(">");return t.indexOf("<",e+1)>-1?t.length:e}class M{constructor(t,e,i,s,n){this.type=t,this.index=e,this.name=i,this.rawName=s,this.strings=n}}const I=t=>-1!==t.index;class ${constructor(t,e){this.parts=[],this.element=e;const i=this.element.content,s=document.createTreeWalker(i,133,null,!1);let n=-1,o=0;const r=[];let a,l;for(;s.nextNode();){n++,a=l;const e=l=s.currentNode;if(1===e.nodeType){if(!e.hasAttributes())continue;const i=e.attributes;let s=0;for(let t=0;t<i.length;t++)i[t].value.indexOf(T)>=0&&s++;for(;s-- >0;){const s=t.strings[o],r=L.exec(s)[1],a=i.getNamedItem(r),l=a.value.split(R);this.parts.push(new M("attribute",n,a.name,r,l)),e.removeAttribute(a.name),o+=l.length-1}}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(T)<0)continue;const i=e.parentNode,s=t.split(R),a=s.length-1;o+=a;for(let t=0;t<a;t++)i.insertBefore(""===s[t]?document.createComment(""):document.createTextNode(s[t]),e),this.parts.push(new M("node",n++));i.insertBefore(""===s[a]?document.createComment(""):document.createTextNode(s[a]),e),r.push(e)}else if(8===e.nodeType&&e.nodeValue===T){const t=e.parentNode,i=e.previousSibling;null===i||i!==a||i.nodeType!==Node.TEXT_NODE?t.insertBefore(document.createComment(""),e):n--,this.parts.push(new M("node",n++)),r.push(e),null===e.nextSibling?t.insertBefore(document.createComment(""),e):n--,l=a,o++}}for(const t of r)t.parentNode.removeChild(t)}}const D=(t,e)=>B(e)?(e=e(t),z):null===e?void 0:e,B=t=>"function"==typeof t&&!0===t.__litDirective,z={},H=t=>null===t||!("object"==typeof t||"function"==typeof t);class V{constructor(t,e,i,s){this.instance=t,this.element=e,this.name=i,this.strings=s,this.size=s.length-1,this._previousValues=[]}_interpolate(t,e){const i=this.strings,s=i.length-1;let n="";for(let o=0;o<s;o++){n+=i[o];const s=D(this,t[e+o]);if(s&&s!==z&&(Array.isArray(s)||"string"!=typeof s&&s[Symbol.iterator]))for(const t of s)n+=t;else n+=s}return n+i[s]}_equalToPreviousValues(t,e){for(let i=e;i<e+this.size;i++)if(this._previousValues[i]!==t[i]||!H(t[i]))return!1;return!0}setValue(t,e){if(this._equalToPreviousValues(t,e))return;const i=this.strings;let s;2===i.length&&""===i[0]&&""===i[1]?(s=D(this,t[e]),Array.isArray(s)&&(s=s.join(""))):s=this._interpolate(t,e),s!==z&&this.element.setAttribute(this.name,s),this._previousValues=t}}class j{constructor(t,e,i){this.instance=t,this.startNode=e,this.endNode=i,this._previousValue=void 0}setValue(t){if((t=D(this,t))!==z)if(H(t)){if(t===this._previousValue)return;this._setText(t)}else t instanceof P?this._setTemplateResult(t):Array.isArray(t)||t[Symbol.iterator]?this._setIterable(t):t instanceof Node?this._setNode(t):void 0!==t.then?this._setPromise(t):this._setText(t)}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_setNode(t){this._previousValue!==t&&(this.clear(),this._insert(t),this._previousValue=t)}_setText(t){const e=this.startNode.nextSibling;t=void 0===t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._setNode(document.createTextNode(t)),this._previousValue=t}_setTemplateResult(t){const e=this.instance._getTemplate(t);let i;this._previousValue&&this._previousValue.template===e?i=this._previousValue:(i=new q(e,this.instance._partCallback,this.instance._getTemplate),this._setNode(i._clone()),this._previousValue=i),i.update(t.values)}_setIterable(t){Array.isArray(this._previousValue)||(this.clear(),this._previousValue=[]);const e=this._previousValue;let i=0;for(const s of t){let t=e[i];if(void 0===t){let s=this.startNode;if(i>0){s=e[i-1].endNode=document.createTextNode(""),this._insert(s)}t=new j(this.instance,s,this.endNode),e.push(t)}t.setValue(s),i++}if(0===i)this.clear(),this._previousValue=void 0;else if(i<e.length){const t=e[i-1];e.length=i,this.clear(t.endNode.previousSibling),t.endNode=this.endNode}}_setPromise(t){this._previousValue=t,t.then(e=>{this._previousValue===t&&this.setValue(e)})}clear(t=this.startNode){X(this.startNode.parentNode,t.nextSibling,this.endNode)}}const F=(t,e,i)=>{if("attribute"===e.type)return new V(t,i,e.name,e.strings);if("node"===e.type)return new j(t,i,i.nextSibling);throw new Error(`Unknown part type ${e.type}`)};class q{constructor(t,e,i){this._parts=[],this.template=t,this._partCallback=e,this._getTemplate=i}update(t){let e=0;for(const i of this._parts)i?void 0===i.size?(i.setValue(t[e]),e++):(i.setValue(t,e),e+=i.size):e++}_clone(){const t=this.template.element.content.cloneNode(!0),e=this.template.parts;if(e.length>0){const i=document.createTreeWalker(t,133,null,!1);let s=-1;for(let t=0;t<e.length;t++){const n=e[t],o=I(n);if(o)for(;s<n.index;)s++,i.nextNode();this._parts.push(o?this._partCallback(this,n,i.currentNode):void 0)}}return t}}const X=(t,e,i=null)=>{let s=e;for(;s!==i;){const e=s.nextSibling;t.removeChild(s),s=e}},W=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;const Y=t=>{let e=1;const i=document.createTreeWalker(t,W,null,!1);for(;i.nextNode();)e++;return e},J=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(I(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const G=(t,e)=>`${t}--${e}`,U=t=>e=>{const i=G(e.type,t);let s=N.get(i);void 0===s&&(s=new Map,N.set(i,s));let n=s.get(e.strings);if(void 0===n){const i=e.getTemplateElement();"object"==typeof window.ShadyCSS&&window.ShadyCSS.prepareTemplateDom(i,t),n=new $(e,i),s.set(e.strings,n)}return n},K=["html","svg"];function Q(t){K.forEach(e=>{const i=N.get(G(e,t));void 0!==i&&i.forEach(t=>{const{element:{content:e}}=t,i=e.querySelectorAll("style");!function(t,e){const{element:{content:i},parts:s}=t,n=document.createTreeWalker(i,W,null,!1);let o=0,r=s[0],a=-1,l=0;const c=[];let d=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==r&&r.index===a;)r.index=null!==d?-1:r.index-l,r=s[++o]}c.forEach(t=>t.parentNode.removeChild(t))}(t,new Set(Array.from(i)))})})}const Z=new Set,tt=(t,e,i)=>{if(!Z.has(i)){Z.add(i);const s=document.createElement("template");if(Array.from(t.querySelectorAll("style")).forEach(t=>{s.content.appendChild(t)}),window.ShadyCSS.prepareTemplateStyles(s,i),Q(i),window.ShadyCSS.nativeShadow){const i=s.content.querySelector("style");null!==i&&(t.insertBefore(i,t.firstChild),function(t,e,i=null){const{element:{content:s},parts:n}=t;if(null===i||void 0===i)return void s.appendChild(e);const o=document.createTreeWalker(s,W,null,!1);let r=J(n),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===i&&(i.parentNode.insertBefore(e,i),a=Y(e));-1!==r&&n[r].index===l;){if(a>0){for(;-1!==r;)n[r].index+=a,r=J(n,r);return}r=J(n,r)}}(e,i.cloneNode(!0),e.element.content.firstChild))}}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const et=(t,...e)=>new P(t,e,"html",it),it=(t,e,i)=>{if("attribute"===e.type){if("on-"===e.rawName.substr(0,3)){return new class{constructor(t,e,i){this.instance=t,this.element=e,this.eventName=i}setValue(t){const e=D(this,t);e!==this._listener&&(null==e?this.element.removeEventListener(this.eventName,this):null==this._listener&&this.element.addEventListener(this.eventName,this),this._listener=e)}handleEvent(t){"function"==typeof this._listener?this._listener.call(this.element,t):"function"==typeof this._listener.handleEvent&&this._listener.handleEvent(t)}}(t,i,e.rawName.slice(3))}const s=e.name.substr(e.name.length-1);if("$"===s){const s=e.name.slice(0,-1);return new V(t,i,s,e.strings)}if("?"===s){return new class extends V{setValue(t,e){const i=this.strings;if(2!==i.length||""!==i[0]||""!==i[1])throw new Error("boolean attributes can only contain a single expression");{const i=D(this,t[e]);if(i===z)return;i?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}}(t,i,e.name.slice(0,-1),e.strings)}return new class extends V{setValue(t,e){const i=this.strings;let s;this._equalToPreviousValues(t,e)||((s=2===i.length&&""===i[0]&&""===i[1]?D(this,t[e]):this._interpolate(t,e))!==z&&(this.element[this.name]=s),this._previousValues=t)}}(t,i,e.rawName,e.strings)}return F(t,e,i)};class st extends(E(HTMLElement)){constructor(){super(...arguments),this.__renderComplete=null,this.__resolveRenderComplete=null,this.__isInvalid=!1,this.__isChanging=!1}ready(){this._root=this._createRoot(),super.ready(),this._firstRendered()}connectedCallback(){window.ShadyCSS&&this._root&&window.ShadyCSS.styleElement(this),super.connectedCallback()}_firstRendered(){}_createRoot(){return this.attachShadow({mode:"open"})}_shouldPropertiesChange(t,e,i){const s=this._shouldRender(t,e,i);return!s&&this.__resolveRenderComplete&&this.__resolveRenderComplete(!1),s}_shouldRender(t,e,i){return!0}_propertiesChanged(t,e,i){super._propertiesChanged(t,e,i);const s=this._render(t);s&&void 0!==this._root&&this._applyRender(s,this._root),this._didRender(t,e,i),this.__resolveRenderComplete&&this.__resolveRenderComplete(!0)}_flushProperties(){this.__isChanging=!0,this.__isInvalid=!1,super._flushProperties(),this.__isChanging=!1}_shouldPropertyChange(t,e,i){const s=super._shouldPropertyChange(t,e,i);return s&&this.__isChanging&&console.trace("Setting properties in response to other properties changing "+`considered harmful. Setting '${t}' from `+`'${this._getProperty(t)}' to '${e}'.`),s}_render(t){throw new Error("_render() not implemented")}_applyRender(t,e){!function(t,e,i){const s=U(i),n=s(t);let o=e.__templateInstance;if(void 0!==o&&o.template===n&&o._partCallback===t.partCallback)return void o.update(t.values);o=new q(n,t.partCallback,s),e.__templateInstance=o;const r=o._clone();o.update(t.values);const a=e instanceof ShadowRoot?e.host:void 0;void 0!==a&&"object"==typeof window.ShadyCSS&&(tt(r,n,i),window.ShadyCSS.styleElement(a)),X(e,e.firstChild),e.appendChild(r)}(t,e,this.localName)}_didRender(t,e,i){}requestRender(){this._invalidateProperties()}_invalidateProperties(){this.__isInvalid=!0,super._invalidateProperties()}get renderComplete(){return this.__renderComplete||(this.__renderComplete=new Promise(t=>{this.__resolveRenderComplete=(e=>{this.__resolveRenderComplete=this.__renderComplete=null,t(e)})}),!this.__isInvalid&&this.__resolveRenderComplete&&Promise.resolve().then(()=>this.__resolveRenderComplete(!1))),this.__renderComplete}}const nt=2,ot=1,rt=.85,at=0,lt=9;class ct{constructor(){this.p=""}get value(){return this.p.trim()}moveTo(t,e){this.p+="M "+t+" "+e+" "}bcurveTo(t,e,i,s,n,o){this.p+="C "+t+" "+e+", "+i+" "+s+", "+n+" "+o+" "}}const dt=new class{_svgNode(t,e){const i=document.createElementNS("http://www.w3.org/2000/svg",t);if(e)for(const t in e)e.hasOwnProperty(t)&&i.setAttributeNS(null,t,e[t]);return i}line(t,e,i,s,n){const o=this._line(e,i,s,n),r=this._svgNode("path",{d:o.value});return t.appendChild(r),r}rectangle(t,e,i,s,n){e+=2,i+=2,s-=4,n-=4;let o=this._line(e,i,e+s,i);o=this._line(e+s,i,e+s,i+n,o),o=this._line(e+s,i+n,e,i+n,o),o=this._line(e,i+n,e,i,o);const r=this._svgNode("path",{d:o.value});return t.appendChild(r),r}polygon(t,e){let i=null;const s=e.length;if(s>2)for(let t=0;t<2;t++){let n=!0;for(let t=1;t<s;t++)i=this._continuousLine(e[t-1][0],e[t-1][1],e[t][0],e[t][1],n,t>0,i),n=!1;i=this._continuousLine(e[s-1][0],e[s-1][1],e[0][0],e[0][1],n,t>0,i)}else i=2==s?this._line(e[0][0],e[0][1],e[1][0],e[1][1]):new ct;const n=this._svgNode("path",{d:i.value});return t.appendChild(n),n}ellipse(t,e,i,s,n){s=Math.max(s>10?s-4:s-1,1),n=Math.max(n>10?n-4:n-1,1);const o=2*Math.PI/lt;let r=Math.abs(s/2),a=Math.abs(n/2);r+=this._getOffset(.05*-r,.05*r),a+=this._getOffset(.05*-a,.05*a);let l=this._ellipse(o,e,i,r,a,1,o*this._getOffset(.1,this._getOffset(.4,1)));l=this._ellipse(o,e,i,r,a,1.5,0,l);const c=this._svgNode("path",{d:l.value});return t.appendChild(c),c}_ellipse(t,e,i,s,n,o,r,a){const l=this._getOffset(-.5,.5)-Math.PI/2,c=[];c.push([this._getOffset(-o,o)+e+.9*s*Math.cos(l-t),this._getOffset(-o,o)+i+.9*n*Math.sin(l-t)]);for(let r=l;r<2*Math.PI+l-.01;r+=t)c.push([this._getOffset(-o,o)+e+s*Math.cos(r),this._getOffset(-o,o)+i+n*Math.sin(r)]);return c.push([this._getOffset(-o,o)+e+s*Math.cos(l+2*Math.PI+.5*r),this._getOffset(-o,o)+i+n*Math.sin(l+2*Math.PI+.5*r)]),c.push([this._getOffset(-o,o)+e+.98*s*Math.cos(l+r),this._getOffset(-o,o)+i+.98*n*Math.sin(l+r)]),c.push([this._getOffset(-o,o)+e+.9*s*Math.cos(l+.5*r),this._getOffset(-o,o)+i+.9*n*Math.sin(l+.5*r)]),this._curve(c,a)}_getOffset(t,e){return ot*(Math.random()*(e-t)+t)}_line(t,e,i,s,n){const o=Math.pow(t-i,2)+Math.pow(e-s,2);let r=nt||0;r*r*100>o&&(r=Math.sqrt(o)/10);const a=r/2,l=.2+.2*Math.random();let c=rt*nt*(s-e)/200,d=rt*nt*(t-i)/200;c=this._getOffset(-c,c),d=this._getOffset(-d,d);let h=n||new ct;return h.moveTo(t+this._getOffset(-r,r),e+this._getOffset(-r,r)),h.bcurveTo(c+t+(i-t)*l+this._getOffset(-r,r),d+e+(s-e)*l+this._getOffset(-r,r),c+t+2*(i-t)*l+this._getOffset(-r,r),d+e+2*(s-e)*l+this._getOffset(-r,r),i+this._getOffset(-r,r),s+this._getOffset(-r,r)),h.moveTo(t+this._getOffset(-a,a),e+this._getOffset(-a,a)),h.bcurveTo(c+t+(i-t)*l+this._getOffset(-a,a),d+e+(s-e)*l+this._getOffset(-a,a),c+t+2*(i-t)*l+this._getOffset(-a,a),d+e+2*(s-e)*l+this._getOffset(-a,a),i+this._getOffset(-a,a),s+this._getOffset(-a,a)),h}_continuousLine(t,e,i,s,n,o,r){r=r||new ct;const a=Math.pow(t-i,2)+Math.pow(e-s,2);let l=nt||0;l*l*100>a&&(l=Math.sqrt(a)/10);const c=l/2,d=.2+.2*Math.random();let h=rt*nt*(s-e)/200,u=rt*nt*i/200;return h=this._getOffset(-h,h),u=this._getOffset(-u,u),n&&r.moveTo(t+this._getOffset(-l,l),e+this._getOffset(-l,l)),o?r.bcurveTo(h+t+(i-t)*d+this._getOffset(-c,c),u+e+(s-e)*d+this._getOffset(-c,c),h+t+2*(i-t)*d+this._getOffset(-c,c),u+e+2*(s-e)*d+this._getOffset(-c,c),i+this._getOffset(-c,c),s+this._getOffset(-c,c)):r.bcurveTo(h+t+(i-t)*d+this._getOffset(-l,l),u+e+(s-e)*d+this._getOffset(-l,l),h+t+2*(i-t)*d+this._getOffset(-l,l),u+e+2*(s-e)*d+this._getOffset(-l,l),i+this._getOffset(-l,l),s+this._getOffset(-l,l)),r}_curve(t,e){const i=t.length;let s=e||new ct;if(i>3){const e=[],n=1-at;s.moveTo(t[1][0],t[1][1]);for(let o=1;o+2<i;o++){const i=t[o];e[0]=[i[0],i[1]],e[1]=[i[0]+(n*t[o+1][0]-n*t[o-1][0])/6,i[1]+(n*t[o+1][1]-n*t[o-1][1])/6],e[2]=[t[o+1][0]+(n*t[o][0]-n*t[o+2][0])/6,t[o+1][1]+(n*t[o][1]-n*t[o+2][1])/6],e[3]=[t[o+1][0],t[o+1][1]],s.bcurveTo(e[1][0],e[1][1],e[2][0],e[2][1],e[3][0],e[3][1])}}else 3===i?(s.moveTo(t[0][0],t[0][1]),s.bcurveTo(t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1])):2==i&&(s=this._line(t[0][0],t[0][1],t[1][0],t[1][1],s));return s}};customElements.define("wired-button",class extends st{static get properties(){return{elevation:Number,disabled:Boolean}}constructor(){super(),this.elevation=1,this.disabled=!1}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render({text:t,elevation:e,disabled:i}){return this._onDisableChange(),et`
    <style>
      :host {
        display: inline-block;
        font-family: inherit;
        cursor: pointer;
        padding: 8px 10px;
        position: relative;
        text-align: center;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        display: inline-flex;
        outline: none;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(:active) path {
        transform: scale(0.97) translate(1.5%, 1.5%);
      }
    
      :host(.disabled) {
        opacity: 0.6 !important;
        background: rgba(0, 0, 0, 0.07);
        cursor: default;
        pointer-events: none;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
        transition: transform 0.05s ease;
      }
    </style>
    <slot></slot>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}connectedCallback(){super.connectedCallback(),setTimeout(()=>this._didRender())}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e=this.getBoundingClientRect(),i=Math.min(Math.max(1,this.elevation),5),s=e.width+2*(i-1),n=e.height+2*(i-1);t.setAttribute("width",s),t.setAttribute("height",n),dt.rectangle(t,0,0,e.width,e.height);for(var o=1;o<i;o++)dt.line(t,2*o,e.height+2*o,e.width+2*o,e.height+2*o).style.opacity=(75-10*o)/100,dt.line(t,e.width+2*o,e.height+2*o,e.width+2*o,2*o).style.opacity=(75-10*o)/100,dt.line(t,2*o,e.height+2*o,e.width+2*o,e.height+2*o).style.opacity=(75-10*o)/100,dt.line(t,e.width+2*o,e.height+2*o,e.width+2*o,2*o).style.opacity=(75-10*o)/100;this.classList.remove("pending")}});customElements.define("wired-card",class extends st{static get properties(){return{elevation:Number}}constructor(){super(),this.elevation=1}_createRoot(){const t=this.attachShadow({mode:"open"});return this.classList.add("pending"),t}_render(){return et`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 5px;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    </style>
    <div>
      <slot on-slotchange="${()=>this._requestRender()}"></slot>
    </div>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    `}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}connectedCallback(){super.connectedCallback(),setTimeout(()=>this._didRender())}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);var e=this.getBoundingClientRect(),i=Math.min(Math.max(1,this.elevation),5),s=e.width+2*(i-1),n=e.height+2*(i-1);t.setAttribute("width",s),t.setAttribute("height",n),dt.rectangle(t,0,0,e.width,e.height);for(var o=1;o<i;o++)dt.line(t,2*o,e.height+2*o,e.width+2*o,e.height+2*o).style.opacity=(85-10*o)/100,dt.line(t,e.width+2*o,e.height+2*o,e.width+2*o,2*o).style.opacity=(85-10*o)/100,dt.line(t,2*o,e.height+2*o,e.width+2*o,e.height+2*o).style.opacity=(85-10*o)/100,dt.line(t,e.width+2*o,e.height+2*o,e.width+2*o,2*o).style.opacity=(85-10*o)/100;this.classList.remove("pending")}});customElements.define("wired-checkbox",class extends st{static get properties(){return{checked:Boolean,text:String,disabled:Boolean}}constructor(){super(),this.disabled=!1,this.checked=!1}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render({text:t,iconsize:e}){return this._onDisableChange(),et`
    <style>
      :host {
        display: block;
        font-family: inherit;
        outline: none;
      }
    
      :host(.disabled) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
    
      :host(.disabled) svg {
        background: rgba(0, 0, 0, 0.07);
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      #container {
        display: inline-block;
        white-space: nowrap;
      }
    
      .inline {
        display: inline-block;
        vertical-align: middle;
      }
    
      #checkPanel {
        cursor: pointer;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: var(--wired-checkbox-icon-color, currentColor);
        stroke-width: 0.7;
      }
    </style>
    <div id="container" on-click="${()=>this._toggleCheck()}">
      <div id="checkPanel" class="inline">
        <svg id="svg" width="0" height="0"></svg>
      </div>
      <div class="inline">${t}</div>
    </div>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_toggleCheck(){this.checked=!this.checked;const t=new CustomEvent("change",{bubbles:!0,composed:!0,checked:this.checked,detail:{checked:this.checked}});this.dispatchEvent(t)}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e=24,i=24;t.setAttribute("width",e),t.setAttribute("height",i),dt.rectangle(t,0,0,e,i);const s=[];s.push(dt.line(t,.3*e,.4*i,.5*e,.7*i)),s.push(dt.line(t,.5*e,.7*i,e+5,-5)),s.forEach(t=>{t.style.strokeWidth=2.5}),this.checked?s.forEach(t=>{t.style.display=""}):s.forEach(t=>{t.style.display="none"}),this.classList.remove("pending")}});customElements.define("wired-item",class extends st{static get properties(){return{text:String,value:String}}_render({text:t}){return et`
    <style>
      :host {
        display: block;
        padding: 8px;
        font-family: inherit;
      }
    </style>
    <span>${t}</span>
    `}connectedCallback(){super.connectedCallback(),this._itemClickHandler=(t=>{this._onClick(t)}),this.addEventListener("click",this._itemClickHandler)}disconnectedCallback(){super.disconnectedCallback(),this._itemClickHandler&&(this.removeEventListener("click",this._itemClickHandler),this._itemClickHandler=null)}_onClick(t){const e=new CustomEvent("item-click",{bubbles:!0,composed:!0,detail:{text:this.text,value:this.value}});this.dispatchEvent(e)}});customElements.define("wired-combo",class extends st{static get properties(){return{value:Object,selected:String,disabled:Boolean}}constructor(){super(),this.disabled=!1,this._cardShowing=!1}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render({value:t}){return this._onDisableChange(),et`
    <style>
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        outline: none;
      }
    
      :host(.disabled) {
        opacity: 0.5 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.02);
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      #container {
        white-space: nowrap;
        position: relative;
      }
    
      .inline {
        display: inline-block;
        vertical-align: top
      }
    
      #textPanel {
        min-width: 90px;
        min-height: 18px;
        padding: 8px;
      }
    
      #dropPanel {
        width: 34px;
        cursor: pointer;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      #card {
        position: absolute;
        background: var(--wired-combo-popup-bg, white);
        z-index: 1;
        box-shadow: 1px 5px 15px -6px rgba(0, 0, 0, 0.8);
      }
    
      ::slotted(wired-item) {
        cursor: pointer;
        white-space: nowrap;
      }
    
      ::slotted(wired-item:hover) {
        background: var(--wired-combo-item-hover-bg, rgba(0, 0, 0, 0.1));
      }
    </style>
    <div id="container" on-click="${t=>this._onCombo(t)}">
      <div id="textPanel" class="inline">
        <span>${t&&t.text}</span>
      </div>
      <div id="dropPanel" class="inline"></div>
      <div class="overlay">
        <svg id="svg"></svg>
      </div>
    </div>
    <wired-card id="card" on-item-click="${t=>this._onItemClick(t)}" style="display: none;">
      <slot id="slot"></slot>
    </wired-card>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}_firstRendered(){this._refreshSelection()}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e=this.shadowRoot.getElementById("container").getBoundingClientRect();t.setAttribute("width",e.width),t.setAttribute("height",e.height);const i=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=i.height+"px",dt.rectangle(t,0,0,i.width,i.height);const s=i.width-4;dt.rectangle(t,s,0,34,i.height);const n=Math.max(0,Math.abs((i.height-24)/2)),o=dt.polygon(t,[[s+8,5+n],[s+26,5+n],[s+17,n+Math.min(i.height,18)]]);o.style.fill="currentColor",o.style.pointerEvents=this.disabled?"none":"auto",o.style.cursor="pointer",this.classList.remove("pending")}_refreshSelection(){const t=this.shadowRoot.getElementById("slot").assignedNodes();if(t){let e=null;for(let i=0;i<t.length;i++)if("WIRED-ITEM"===t[i].tagName){const s=t[i].value||"";if(this.selected&&s===this.selected){e=t[i];break}}this.value=e?{value:e.value,text:e.text}:null}}_onCombo(t){t.stopPropagation(),this._setCardShowing(!this._cardShowing)}_setCardShowing(t){this._cardShowing=t;const e=this.shadowRoot.getElementById("card");e.style.display=t?"":"none",t&&setTimeout(()=>{e._requestRender()},10)}_onItemClick(t){t.stopPropagation(),this._setCardShowing(!1),this.selected=t.detail.value,this._refreshSelection();const e=new CustomEvent("selected",{bubbles:!0,composed:!0,checked:this.checked,detail:{selected:this.selected}});this.dispatchEvent(e)}});
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const ht=et`<style>:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}
</style>`;i("H2h+");customElements.define("mwc-icon",
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class extends st{_renderStyle(){return ht}_render(){return et`${this._renderStyle()}<slot></slot>`}});customElements.define("wired-icon-button",class extends st{static get properties(){return{disabled:Boolean}}constructor(){super(),this.disabled=!1}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render(){return this._onDisableChange(),et`
    <style>
      :host {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        position: relative;
        vertical-align: middle;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
        box-sizing: border-box !important;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(.disabled) {
        opacity: 0.45 !important;
        cursor: default;
        background: rgba(0, 0, 0, 0.07);
        border-radius: 50%;
        pointer-events: none;
      }
    
      :host(:active) path {
        transform: scale(0.96) translate(2%, 2%);
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: var(--wired-icon-bg-color, transparent);
        transition: transform 0.05s ease;
      }
    
      mwc-icon {
        position: relative;
        font-size: var(--wired-icon-size, 24px);
      }
    </style>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    <mwc-icon>
      <slot></slot>
    </mwc-icon>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e=this.getBoundingClientRect(),i=Math.min(e.width,e.height);t.setAttribute("width",i),t.setAttribute("height",i),dt.ellipse(t,i/2,i/2,i,i),this.classList.remove("pending")}connectedCallback(){super.connectedCallback(),setTimeout(()=>this._didRender())}});customElements.define("wired-input",class extends st{static get properties(){return{placeholder:String,disabled:Boolean,type:String,required:Boolean,autocomplete:String,autofocus:Boolean,minlength:Number,maxlength:Number,min:String,max:String,step:String,readonly:Boolean,size:Number,autocapitalize:String,autocorrect:String}}constructor(){super(),this.disabled=!1}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render({type:t,placeholder:e,disabled:i,required:s,autocomplete:n,autofocus:o,minlength:r,maxlength:a,min:l,max:c,step:d,readonly:h,size:u,autocapitalize:p,autocorrect:f}){return this._onDisableChange(),et`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 5px;
        font-family: sans-serif;
        width: 150px;
        outline: none;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(.disabled) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
    
      :host(.disabled) svg {
        background: rgba(0, 0, 0, 0.07);
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      input {
        display: block;
        width: 100%;
        box-sizing: border-box;
        outline: none;
        border: none;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        color: inherit;
      }
    </style>
    <input id="txt" type$="${t}" placeholder$="${e}" disabled?="${i}" required?="${s}" autocomplete$="${n}"
      autofocus?="${o}" minlength$="${r}" maxlength$="${a}" min$="${l}" max$="${c}" step$="${d}"
      readonly?="${h}" size$="${u}" autocapitalize$="${p}" autocorrect$="${f}" on-change="${t=>this._onChange(t)}">
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    `}get input(){return this.shadowRoot.getElementById("txt")}get value(){const t=this.input;return t&&t.value||""}set value(t){const e=this.input;e&&(e.value=t)}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_onChange(t){t.stopPropagation();const e=new CustomEvent(t.type,{bubbles:!0,composed:!0,cancelable:t.cancelable,detail:{sourceEvent:t}});this.dispatchEvent(e)}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e=this.getBoundingClientRect();t.setAttribute("width",e.width),t.setAttribute("height",e.height),dt.rectangle(t,0,0,e.width,e.height),this.classList.remove("pending")}});customElements.define("wired-listbox",class extends st{static get properties(){return{value:Object,selected:String,horizontal:Boolean}}constructor(){super(),this.horizontal=!1}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render({horizontal:t}){return t?this.classList.add("horizontal"):this.classList.remove("horizontal"),this._onDisableChange(),et`
      <style>
        :host {
          display: inline-block;
          font-family: inherit;
          position: relative;
          padding: 5px;
          outline: none;
        }
      
        :host(.pending) {
          opacity: 0;
        }
      
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
      
        svg {
          display: block;
        }
      
        path {
          stroke: currentColor;
          stroke-width: 0.7;
          fill: transparent;
        }
      
        ::slotted(.selected-item) {
          background: var(--wired-combo-item-selected-bg, rgba(0, 0, 200, 0.1));
        }
      
        ::slotted(wired-item) {
          cursor: pointer;
          white-space: nowrap;
          display: block;
        }
      
        :host(.horizontal) ::slotted(wired-item) {
          display: inline-block;
        }
      
        ::slotted(wired-item:hover) {
          background: var(--wired-combo-item-hover-bg, rgba(0, 0, 0, 0.1));
        }
      </style>
      <slot id="slot"></slot>
      <div class="overlay">
        <svg id="svg"></svg>
      </div>`}connectedCallback(){super.connectedCallback(),this._itemClickHandler=(t=>{this._onItemClick(t)}),this.addEventListener("item-click",this._itemClickHandler)}disconnectedCallback(){super.disconnectedCallback(),this._itemClickHandler&&(this.removeEventListener("item-click",this._itemClickHandler),this._itemClickHandler=null)}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}_firstRendered(){this._refreshSelection()}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e=this.getBoundingClientRect();t.setAttribute("width",e.width),t.setAttribute("height",e.height),dt.rectangle(t,0,0,e.width,e.height),this.classList.remove("pending")}_refreshSelection(){this.lastSelectedItem&&this.lastSelectedItem.classList.remove("selected-item");const t=this.shadowRoot.getElementById("slot").assignedNodes();if(t){let e=null;for(let i=0;i<t.length;i++)if("WIRED-ITEM"===t[i].tagName){const s=t[i].value||"";if(this.selected&&s===this.selected){e=t[i];break}}this.lastSelectedItem=e,e?(this.lastSelectedItem.classList.add("selected-item"),this.value={value:e.value,text:e.text}):this.value=null}}_onItemClick(t){t.stopPropagation(),this.selected=t.detail.value,this._refreshSelection();const e=new CustomEvent("selected",{bubbles:!0,composed:!0,checked:this.checked,detail:{selected:this.selected}});this.dispatchEvent(e)}});customElements.define("wired-progress",class extends st{static get properties(){return{value:Number,min:Number,max:Number,percentage:Boolean}}constructor(){super(),this.percentage=!1,this.max=100,this.min=0,this.value=0}_createRoot(){const t=this.attachShadow({mode:"open"});return this.classList.add("pending"),t}_render(){return et`
    <style>
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        height: 42px;
        font-family: sans-serif;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      .labelContainer {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    
      .progressLabel {
        color: var(--wired-progress-label-color, #000);
        font-size: var(--wired-progress-font-size, 18px);
      }
    
      .progbox {
        fill: var(--wired-progress-color, rgba(0, 0, 200, 0.1));
        stroke-opacity: 0.6;
        stroke-width: 0.4;
      }
    </style>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this._getProgressLabel()}</div>
    </div>
    `}_getProgressLabel(){return this.percentage?this.max==this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);var e=this.getBoundingClientRect();t.setAttribute("width",e.width),t.setAttribute("height",e.height),dt.rectangle(t,0,0,e.width,e.height);let i=0;if(this.max>this.min){i=(this.value-this.min)/(this.max-this.min);const s=e.width*Math.max(0,Math.min(i,100));dt.polygon(t,[[0,0],[s,0],[s,e.height],[0,e.height]]).classList.add("progbox")}this.classList.remove("pending")}});customElements.define("wired-radio",class extends st{static get properties(){return{checked:Boolean,name:String,text:String,iconsize:Number,disabled:Boolean}}constructor(){super(),this.disabled=!1,this.checked=!1,this.iconsize=24}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render({text:t,iconsize:e}){return this._onDisableChange(),et`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 5px;
        font-family: inherit;
        width: 150px;
        outline: none;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(.disabled) {
        opacity: 0.45 !important;
        cursor: default;
        pointer-events: none;
      }
    
      #container {
        display: inline-block;
        white-space: nowrap;
      }
    
      .inline {
        display: inline-block;
        vertical-align: middle;
      }
    
      #checkPanel {
        cursor: pointer;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: var(--wired-radio-icon-color, currentColor);
        stroke-width: 0.7;
        fill: transparent;
      }
    
      .filledPath {
        fill: var(--wired-radio-icon-color, currentColor);
      }
    </style>
    <div id="container" on-click="${()=>this._toggleCheck()}">
      <div id="checkPanel" class="inline">
        <svg id="svg" width="0" height="0"></svg>
      </div>
      <div class="inline">${t}</div>
    </div>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_toggleCheck(){this.checked=!this.checked;const t=new CustomEvent("change",{bubbles:!0,composed:!0,checked:this.checked,detail:{checked:this.checked}});this.dispatchEvent(t)}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t),this._dot=null;const e={width:this.iconsize||24,height:this.iconsize||24};t.setAttribute("width",e.width),t.setAttribute("height",e.height),dt.ellipse(t,e.width/2,e.height/2,e.width,e.height);const i=Math.max(.6*e.width,5),s=Math.max(.6*e.height,5);this._dot=dt.ellipse(t,e.width/2,e.height/2,i,s),this._dot.classList.add("filledPath"),this._dot.style.display=this.checked?"":"none",this.classList.remove("pending")}});customElements.define("wired-radio-group",class extends st{static get properties(){return{selected:String}}_render({selected:t}){return et`
    <style>
      :host {
        display: inline-block;
      }
    
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    </style>
    <slot id="slot" on-slotchange="${()=>this.slotChange()}"></slot>
    `}constructor(){super(),this._checkListener=this._handleChecked.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this._checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("checked",this._checkListener)}_handleChecked(t){const e=t.detail.checked,i=t.target.name;this.selected=e&&i||"";const s=new CustomEvent("selected",{bubbles:!0,composed:!0,checked:this.checked,detail:{selected:this.selected}});this.dispatchEvent(s)}slotChange(){this._requestRender()}_didRender(){const t=this.shadowRoot.getElementById("slot").assignedNodes();if(t&&t.length)for(let e=0;e<t.length;e++)if("WIRED-RADIO"===t[e].tagName){const i=t[e].name||"";this.selected&&i===this.selected?t[e].checked=!0:t[e].checked=!1}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class ut{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,pt.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),pt.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,i){return t instanceof ut?t._cancelAsync():t=new ut,t.setConfig(e,i),t}}let pt=new Set;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const ft=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,ft&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]}catch(t){return!1}})();window.Polymer&&window.Polymer.rootPath||(gt=document.baseURI||window.location.href).substring(0,gt.lastIndexOf("/")+1);var gt;window.Polymer&&window.Polymer.sanitizeDOMValue;let mt=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;window.Polymer&&window.Polymer.strictTemplatePolicy;window.Polymer&&window.Polymer.allowTemplateFromDomModule;window.Polymer&&window.Polymer.legacyOptimizations;window.Polymer&&window.Polymer.legacyWarnings;window.Polymer&&window.Polymer.syncInitialRender;window.Polymer&&window.Polymer.legacyUndefined;window.Polymer&&window.Polymer.orderedComputed;let _t=!0;window.Polymer&&window.Polymer.removeNestedTemplates;window.Polymer&&window.Polymer.fastDomIf;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let vt="string"==typeof document.head.style.touchAction,bt="__polymerGestures",yt="__polymerGesturesHandled",wt="__polymerGesturesTouchAction",kt=25,xt=5,Ct=2500,St=["mousedown","mousemove","mouseup","click"],Et=[0,1,4,2],Nt=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function Pt(t){return St.indexOf(t)>-1}let Tt=!1;function Ot(t){if(!Pt(t)&&"touchend"!==t)return vt&&Tt&&mt?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){Tt=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let Rt=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Lt=[],At={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Mt={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function It(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];try{let i=t.getRootNode();if(t.id){let s=i.querySelectorAll(`label[for = '${t.id}']`);for(let t=0;t<s.length;t++)e.push(s[t])}}catch(t){}}return e}let $t=function(t){let e=t.sourceCapabilities;var i;if((!e||e.firesTouchEvents)&&(t[yt]={skip:!0},"click"===t.type)){let e=!1,s=jt(t);for(let t=0;t<s.length;t++){if(s[t].nodeType===Node.ELEMENT_NODE)if("label"===s[t].localName)Lt.push(s[t]);else if(i=s[t],At[i.localName]){let i=It(s[t]);for(let t=0;t<i.length;t++)e=e||Lt.indexOf(i[t])>-1}if(s[t]===zt.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function Dt(t){let e=Rt?["click"]:St;for(let i,s=0;s<e.length;s++)i=e[s],t?(Lt.length=0,document.addEventListener(i,$t,!0)):document.removeEventListener(i,$t,!0)}function Bt(t){let e=t.type;if(!Pt(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!Nt&&(e=Et[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let zt={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Ht(t,e,i){t.movefn=e,t.upfn=i,document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}function Vt(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}_t&&document.addEventListener("touchend",function(t){if(!_t)return;zt.mouse.mouseIgnoreJob||Dt(!0),zt.mouse.target=jt(t)[0],zt.mouse.mouseIgnoreJob=ut.debounce(zt.mouse.mouseIgnoreJob,w.after(Ct),function(){Dt(),zt.mouse.target=null,zt.mouse.mouseIgnoreJob=null})},!!Tt&&{passive:!0});const jt=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],Ft={},qt=[];function Xt(t){const e=jt(t);return e.length>0?e[0]:t.target}function Wt(t){let e,i=t.type,s=t.currentTarget[bt];if(!s)return;let n=s[i];if(n){if(!t[yt]&&(t[yt]={},"touch"===i.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===i&&1===t.touches.length&&(zt.touch.id=e.identifier),zt.touch.id!==e.identifier)return;vt||"touchstart"!==i&&"touchmove"!==i||function(t){let e=t.changedTouches[0],i=t.type;if("touchstart"===i)zt.touch.x=e.clientX,zt.touch.y=e.clientY,zt.touch.scrollDecided=!1;else if("touchmove"===i){if(zt.touch.scrollDecided)return;zt.touch.scrollDecided=!0;let i=function(t){let e="auto",i=jt(t);for(let t,s=0;s<i.length;s++)if((t=i[s])[wt]){e=t[wt];break}return e}(t),s=!1,n=Math.abs(zt.touch.x-e.clientX),o=Math.abs(zt.touch.y-e.clientY);t.cancelable&&("none"===i?s=!0:"pan-x"===i?s=o>n:"pan-y"===i&&(s=n>o)),s?t.preventDefault():Ut("track")}}(t)}if(!(e=t[yt]).skip){for(let i,s=0;s<qt.length;s++)n[(i=qt[s]).name]&&!e[i.name]&&i.flow&&i.flow.start.indexOf(t.type)>-1&&i.reset&&i.reset();for(let s,o=0;o<qt.length;o++)n[(s=qt[o]).name]&&!e[s.name]&&(e[s.name]=!0,s[i](t))}}}function Yt(t,e,i){return!!Ft[e]&&(function(t,e,i){let s=Ft[e],n=s.deps,o=s.name,r=t[bt];r||(t[bt]=r={});for(let e,i,s=0;s<n.length;s++)e=n[s],Rt&&Pt(e)&&"click"!==e||((i=r[e])||(r[e]=i={_count:0}),0===i._count&&t.addEventListener(e,Wt,Ot(e)),i[o]=(i[o]||0)+1,i._count=(i._count||0)+1);t.addEventListener(e,i),s.touchAction&&function(t,e){vt&&t instanceof HTMLElement&&k.run(()=>{t.style.touchAction=e});t[wt]=e}(t,s.touchAction)}(t,e,i),!0)}function Jt(t){qt.push(t);for(let e=0;e<t.emits.length;e++)Ft[t.emits[e]]=t}function Gt(t,e,i){let s=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=i,x(t).dispatchEvent(s),s.defaultPrevented){let t=i.preventer||i.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function Ut(t){let e=function(t){for(let e,i=0;i<qt.length;i++){e=qt[i];for(let i,s=0;s<e.emits.length;s++)if((i=e.emits[s])===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function Kt(t,e,i,s){e&&Gt(e,t,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:s,prevent:function(t){return Ut(t)}})}function Qt(t,e,i){if(t.prevent)return!1;if(t.started)return!0;let s=Math.abs(t.x-e),n=Math.abs(t.y-i);return s>=xt||n>=xt}function Zt(t,e,i){if(!e)return;let s,n=t.moves[t.moves.length-2],o=t.moves[t.moves.length-1],r=o.x-t.x,a=o.y-t.y,l=0;n&&(s=o.x-n.x,l=o.y-n.y),Gt(e,"track",{state:t.state,x:i.clientX,y:i.clientY,dx:r,dy:a,ddx:s,ddy:l,sourceEvent:i,hover:function(){return function(t,e){let i=document.elementFromPoint(t,e),s=i;for(;s&&s.shadowRoot&&!window.ShadyDOM&&s!==(s=s.shadowRoot.elementFromPoint(t,e));)s&&(i=s);return i}(i.clientX,i.clientY)}})}function te(t,e,i){let s=Math.abs(e.clientX-t.x),n=Math.abs(e.clientY-t.y),o=Xt(i||e);!o||Mt[o.localName]&&o.hasAttribute("disabled")||(isNaN(s)||isNaN(n)||s<=kt&&n<=kt||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=Xt(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let i=e.getBoundingClientRect(),s=t.pageX,n=t.pageY;return!(s>=i.left&&s<=i.right&&n>=i.top&&n<=i.bottom)}return!1}(e))&&(t.prevent||Gt(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i}))}Jt({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Vt(this.info)},mousedown:function(t){if(!Bt(t))return;let e=Xt(t),i=this;Ht(this.info,function(t){Bt(t)||(Kt("up",e,t),Vt(i.info))},function(t){Bt(t)&&Kt("up",e,t),Vt(i.info)}),Kt("down",e,t)},touchstart:function(t){Kt("down",Xt(t),t.changedTouches[0],t)},touchend:function(t){Kt("up",Xt(t),t.changedTouches[0],t)}}),Jt({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Vt(this.info)},mousedown:function(t){if(!Bt(t))return;let e=Xt(t),i=this,s=function(t){let s=t.clientX,n=t.clientY;Qt(i.info,s,n)&&(i.info.state=i.info.started?"mouseup"===t.type?"end":"track":"start","start"===i.info.state&&Ut("tap"),i.info.addMove({x:s,y:n}),Bt(t)||(i.info.state="end",Vt(i.info)),e&&Zt(i.info,e,t),i.info.started=!0)};Ht(this.info,s,function(t){i.info.started&&s(t),Vt(i.info)}),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=Xt(t),i=t.changedTouches[0],s=i.clientX,n=i.clientY;Qt(this.info,s,n)&&("start"===this.info.state&&Ut("tap"),this.info.addMove({x:s,y:n}),Zt(this.info,e,i),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=Xt(t),i=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),Zt(this.info,e,i))}}),Jt({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){Bt(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){Bt(t)&&te(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){te(this.info,t.changedTouches[0],t)}});customElements.define("wired-slider",class extends st{static get properties(){return{value:Number,min:Number,max:Number,knobradius:Number,disabled:Boolean}}constructor(){super(),this.disabled=!1,this.value=0,this.min=0,this.max=100,this.knobradius=10}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render(){return this._onDisableChange(),et`
    <style>
      :host {
        display: inline-block;
        position: relative;
        width: 300px;
        height: 40px;
        outline: none;
        box-sizing: border-box;
      }
    
      :host(.disabled) {
        opacity: 0.45 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.07);
        border-radius: 5px;
      }
    
      :host(.disabled) .knob {
        pointer-events: none !important;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke-width: 0.7;
        fill: transparent;
      }
    
      .knob {
        pointer-events: auto;
        fill: var(--wired-slider-knob-zero-color, gray);
        stroke: var(--wired-slider-knob-zero-color, gray);
        transition: transform 0.15s ease;
        cursor: pointer;
      }
    
      .hasValue {
        fill: var(--wired-slider-knob-color, rgb(51, 103, 214));
        stroke: var(--wired-slider-knob-color, rgb(51, 103, 214));
      }
    
      .bar {
        stroke: var(--wired-slider-bar-color, rgb(0, 0, 0));
      }
    
      :host(.pending) {
        opacity: 0;
      }
    </style>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}connectedCallback(){super.connectedCallback(),setTimeout(()=>this._firstRendered(),100)}_firstRendered(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e=this.getBoundingClientRect();t.setAttribute("width",e.width),t.setAttribute("height",e.height);let i=this.knobradius||10;this._barWidth=e.width-2*i,this._bar=dt.line(t,i,e.height/2,e.width-i,e.height/2),this._bar.classList.add("bar"),this._knobGroup=dt._svgNode("g"),t.appendChild(this._knobGroup),this._knob=dt.ellipse(this._knobGroup,i,e.height/2,2*i,2*i),this._knob.classList.add("knob"),this._onValueChange(),this.classList.remove("pending"),Yt(this._knob,"down",t=>{this.disabled||this._knobdown(t)}),Yt(this._knob,"up",t=>{this.disabled||this._resetKnob(t)}),Yt(this._knob,"track",t=>{this.disabled||this._onTrack(t)})}_onValueChange(){if(!this._knob)return;let t=0;this.max>this.min&&(t=Math.min(1,Math.max((this.value-this.min)/(this.max-this.min),0))),this._pct=t,t?this._knob.classList.add("hasValue"):this._knob.classList.remove("hasValue");let e=t*this._barWidth;this._knobGroup.style.transform="translateX("+Math.round(e)+"px)"}_knobdown(t){this._knobExpand(!0),t.preventDefault(),this.focus()}_resetKnob(t){this._knobExpand(!1)}_knobExpand(t){this._knob&&(t?this._knob.classList.add("expanded"):this._knob.classList.remove("expanded"))}_onTrack(t){switch(t.stopPropagation(),t.detail.state){case"start":this._trackStart(t);break;case"track":this._trackX(t);break;case"end":this._trackEnd()}}_trackStart(t){this._intermediateValue=this.value,this._startx=this._pct*this._barWidth,this._knobstartx=this._startx,this._minx=-this._startx,this._maxx=this._barWidth-this._startx,this._dragging=!0}_trackX(t){this._dragging||this._trackStart(t);var e=t.detail.dx||0,i=Math.max(Math.min(this._startx+e,this._barWidth),0);this._knobGroup.style.transform="translateX("+Math.round(i)+"px)";var s=i/this._barWidth;this._intermediateValue=this.min+s*(this.max-this.min)}_trackEnd(){this._dragging=!1,this._resetKnob(),this.value=this._intermediateValue,this._pct=(this.value-this.min)/(this.max-this.min);const t=new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:this._intermediateValue}});this.dispatchEvent(t)}});customElements.define("wired-textarea",class extends st{static get properties(){return{rows:Number,maxrows:Number,autocomplete:String,autofocus:Boolean,inputmode:String,placeholder:String,readonly:Boolean,required:Boolean,minlength:Number,maxlength:Number,disabled:Boolean}}constructor(){super(),this.disabled=!1,this.rows=1,this.maxrows=0}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render({rows:t,maxrows:e,autocomplete:i,autofocus:s,inputmode:n,placeholder:o,readonly:r,required:a,minlength:l,maxlength:c,disabled:d}){return this._onDisableChange(),et`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 5px;
        font-family: sans-serif;
        width: 400px;
        -moz-appearance: textarea;
        -webkit-appearance: textarea;
        outline: none;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(.disabled) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
    
      :host(.disabled) svg {
        background: rgba(0, 0, 0, 0.07);
      }
    
      .fit {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    
      .overlay {
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      .mirror-text {
        visibility: hidden;
        word-wrap: break-word;
      }
    
      textarea {
        position: relative;
        outline: none;
        border: none;
        resize: none;
        background: inherit;
        color: inherit;
        width: 100%;
        height: 100%;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        text-align: inherit;
        padding: 5px;
        box-sizing: border-box;
      }
    </style>
    <div id="mirror" class="mirror-text">&#160;</div>
    <div class="fit">
      <textarea id="textarea" autocomplete$="${i}" autofocus?="${s}" inputmode$="${n}" placeholder$="${o}"
        readonly?="${r}" required?="${a}" disabled?="${d}" rows$="${t}" minlength$="${l}" maxlength$="${c}"
        on-input="${()=>this._onInput()}"></textarea>
    </div>
    <div class="fit overlay">
      <svg id="svg"></svg>
    </div>
    `}connectedCallback(){super.connectedCallback(),this.value=this.value||""}get textarea(){return this.shadowRoot.getElementById("textarea")}get mirror(){return this.shadowRoot.getElementById("mirror")}get value(){const t=this.textarea;return t&&t.value||""}set value(t){const e=this.textarea;e&&(e.value!==t&&(e.value=t||0===t?t:""),this.mirror.innerHTML=this._valueForMirror(),this._requestRender())}_constrain(t){var e;for(t=t||[""],e=this.maxRows>0&&t.length>this.maxRows?t.slice(0,this.maxRows):t.slice(0);this.rows>0&&e.length<this.rows;)e.push("");return e.join("<br/>")+"&#160;"}_valueForMirror(){var t=this.textarea;if(t)return this.tokens=t&&t.value?t.value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split("\n"):[""],this._constrain(this.tokens)}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_updateCached(){this.mirror.innerHTML=this._constrain(this.tokens)}_onInput(t){this.value=this.textarea.value}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}_needsLayout(){this.getBoundingClientRect().height!=this._prevHeight&&this._requestRender()}_didRender(){const t=this.getBoundingClientRect(),e=this.shadowRoot.getElementById("svg");this._prevHeight!==t.height&&(this._clearNode(e),e.setAttribute("width",t.width),e.setAttribute("height",t.height),dt.rectangle(e,2,2,t.width-2,t.height-2),this._prevHeight=t.height),this.classList.remove("pending"),this._updateCached()}});customElements.define("wired-toggle",class extends st{static get properties(){return{checked:Boolean,disabled:Boolean}}constructor(){super(),this.disabled=!1,this.checked=!1}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render(){return this._onDisableChange(),et`
    <style>
      :host {
        display: inline-block;
        cursor: pointer;
        position: relative;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(.disabled) {
        opacity: 0.4 !important;
        cursor: default;
        pointer-events: none;
      }
    
      :host(.disabled) svg {
        background: rgba(0, 0, 0, 0.07);
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      .unchecked {
        fill: var(--wired-toggle-off-color, gray);
      }
    
      .checked {
        fill: var(--wired-toggle-on-color, rgb(63, 81, 181));
      }
    </style>
    <div on-click="${()=>this._toggleCheck()}">
      <svg id="svg"></svg>
    </div>
    `}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}_toggleCheck(){this.checked=!this.checked;const t=new CustomEvent("change",{bubbles:!0,composed:!0,checked:this.checked,detail:{checked:this.checked}});this.dispatchEvent(t)}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e={width:2.5*(this.height||32),height:this.height||32};t.setAttribute("width",e.width),t.setAttribute("height",e.height),dt.rectangle(t,0,0,e.width,e.height),this.knob=dt.ellipse(t,e.height/2,e.height/2,e.height,e.height),this.knobOffset=e.width-e.height,this.knob.style.transition="all 0.3s ease",this.knob.style.transform=this.checked?"translateX("+this.knobOffset+"px)":"";const i=this.knob.classList;this.checked?(i.remove("unchecked"),i.add("checked")):(i.remove("checked"),i.add("unchecked")),this.classList.remove("pending")}});customElements.define("wired-tooltip",class extends st{static get properties(){return{for:String,position:String,text:String,offset:Number}}constructor(){super(),this._dirty=!1,this._showing=!1,this._target=null,this.offset=14,this.position="bottom"}_render({text:t},e){return e&&(e.position||e.text)&&(this._dirty=!0),(!this._target||e&&e.for)&&this._refreshTarget(),et`
    <style>
      :host {
        display: block;
        position: absolute;
        outline: none;
        z-index: 1002;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        cursor: default;
        font-family: inherit;
        font-size: 9pt;
        line-height: 1;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke-width: 0.7;
        stroke: var(--wired-tooltip-border-color, currentColor);
        fill: var(--wired-tooltip-background, rgba(255, 255, 255, 0.9));
      }
    
      #container {
        position: relative;
        padding: 8px;
      }
    </style>
    <div id="container" style="display: none;">
      <div class="overlay">
        <svg id="svg"></svg>
      </div>
      <span style="position: relative;">${t}</span>
    </div>
    `}get target(){if(this._target)return this._target;var t=this.parentNode,e=(this.getRootNode?this.getRootNode():null)||this.getOwnerDocument();return this.for?e.querySelector("#"+this.for):t.nodeType==Node.DOCUMENT_FRAGMENT_NODE?e.host:t}_detachListeners(){this._showHandler&&this._hideHandler&&(this._target&&(this._target.removeEventListener("mouseenter",this._showHandler),this._target.removeEventListener("focus",this._showHandler),this._target.removeEventListener("mouseleave",this._hideHandler),this._target.removeEventListener("blur",this._hideHandler),this._target.removeEventListener("click",this._hideHandler)),this.removeEventListener("mouseenter",this._hideHandler))}_attachListeners(){this._showHandler=(()=>{this.show()}),this._hideHandler=(()=>{this.hide()}),this._target&&(this._target.addEventListener("mouseenter",this._showHandler),this._target.addEventListener("focus",this._showHandler),this._target.addEventListener("mouseleave",this._hideHandler),this._target.addEventListener("blur",this._hideHandler),this._target.addEventListener("click",this._hideHandler)),this.addEventListener("mouseenter",this._hideHandler)}_refreshTarget(){this._detachListeners(),this._target=null,this._target=this.target,this._attachListeners(),this._dirty=!0}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}_layout(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);var e=this.getBoundingClientRect(),i=e.width,s=e.height;switch(this.position){case"left":case"right":i+=this.offset;break;default:s+=this.offset}t.setAttribute("width",i),t.setAttribute("height",s);var n=[];switch(this.position){case"top":n=[[2,2],[i-2,2],[i-2,s-this.offset],[i/2+8,s-this.offset],[i/2,s-this.offset+8],[i/2-8,s-this.offset],[0,s-this.offset]];break;case"left":n=[[2,2],[i-this.offset,2],[i-this.offset,s/2-8],[i-this.offset+8,s/2],[i-this.offset,s/2+8],[i-this.offset,s],[2,s-2]];break;case"right":n=[[this.offset,2],[i-2,2],[i-2,s-2],[this.offset,s-2],[this.offset,s/2+8],[this.offset-8,s/2],[this.offset,s/2-8]],t.style.transform="translateX("+-this.offset+"px)";break;default:n=[[2,this.offset],[0,s-2],[i-2,s-2],[i-2,this.offset],[i/2+8,this.offset],[i/2,this.offset-8],[i/2-8,this.offset]],t.style.transform="translateY("+-this.offset+"px)"}dt.polygon(t,n),this._dirty=!1}_firstRendered(){this._layout()}_didRender(){this._dirty&&this._layout()}show(){this._showing||(this._showing=!0,this.shadowRoot.getElementById("container").style.display="",this.updatePosition(),setTimeout(()=>{this._layout()},1))}hide(){this._showing&&(this._showing=!1,this.shadowRoot.getElementById("container").style.display="none")}updatePosition(){if(this._target&&this.offsetParent){var t,e,i=this.offset,s=this.offsetParent.getBoundingClientRect(),n=this._target.getBoundingClientRect(),o=this.getBoundingClientRect(),r=(n.width-o.width)/2,a=(n.height-o.height)/2,l=n.left-s.left,c=n.top-s.top;switch(this.position){case"top":t=l+r,e=c-o.height-i;break;case"bottom":t=l+r,e=c+n.height+i;break;case"left":t=l-o.width-i,e=c+a;break;case"right":t=l+n.width+i,e=c+a}this.style.left=t+"px",this.style.top=e+"px"}}});var ee={directives:{clipboard:d},data:function(){return{activeName:"js",inputData:"https://github.com/Neveryu/vue-cms"}},methods:{handleCopy1:function(){this.$refs.input1.$refs.input.select(),document.execCommand("Copy"),this.$notify({title:"success",message:"copy成功",type:"success"})},handleCopy2:function(t,e){r(t,e)},clipboardSuccess:function(){this.$notify({title:"success",message:"copy成功",type:"success"})}}},ie={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"原生js方式",name:"js"}},[i("el-input",{ref:"input1",staticStyle:{width:"400px"},attrs:{placeholder:"Please input"},model:{value:t.inputData,callback:function(e){t.inputData=e},expression:"inputData"}}),t._v(" "),i("wired-button",{attrs:{elevation:"3"},on:{click:t.handleCopy1}},[t._v("copy")]),t._v(" "),i("p",{staticClass:"title"},[t._v("粘贴一下：")]),t._v(" "),i("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",rows:10}})],1),t._v(" "),i("el-tab-pane",{attrs:{label:"用clipboard插件",name:"directly"},on:{click:function(e){return t.console.log("s")}}},[i("el-input",{ref:"input2",staticStyle:{width:"400px"},attrs:{placeholder:"Please input"},model:{value:t.inputData,callback:function(e){t.inputData=e},expression:"inputData"}}),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleCopy2(t.inputData,e)}}},[t._v("copy")]),t._v(" "),i("p",{staticClass:"title"},[t._v("粘贴一下：")]),t._v(" "),i("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",rows:10}})],1),t._v(" "),i("el-tab-pane",{attrs:{label:"通过指令的方式调用clipboard",name:"v-directive"}},[i("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"please input"},model:{value:t.inputData,callback:function(e){t.inputData=e},expression:"inputData"}}),t._v(" "),i("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.inputData,expression:"inputData",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{type:"primary"}},[t._v("copy")]),t._v(" "),i("p",{staticClass:"title"},[t._v("粘贴一下：")]),t._v(" "),i("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",rows:10}})],1)],1)],1)},staticRenderFns:[]};var se=i("VU/8")(ee,ie,!1,function(t){i("H5fL")},"data-v-ca0160b6",null);e.default=se.exports}});
//# sourceMappingURL=10.ec05258dbb1eb967aed2.js.map