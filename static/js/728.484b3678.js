(self["webpackChunkvue_cms"]=self["webpackChunkvue_cms"]||[]).push([[728],{3011:function(){
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
const t=document.createElement("link");t.rel="stylesheet",t.href="https://fonts.googleapis.com/icon?family=Material+Icons",document.head.appendChild(t)},4275:function(t,e,i){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(t,e){return t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let s=0;function n(){}n.prototype.__mixinApplications,n.prototype.__mixinSet;const o=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=s++;function n(s){let n=s.__mixinSet;if(n&&n[i])return s;let o=e,r=o.get(s);if(!r){r=t(s),o.set(s,r);let e=Object.create(r.__mixinSet||n||null);e[i]=!0,r.__mixinSet=e}return r}return n};function r(){0}const a=[];function l(t){a.push(t)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let h=0,d=0,c=[],u=0,p=!1,f=document.createTextNode("");function g(){p=!1;const t=c.length;for(let i=0;i<t;i++){let t=c[i];if(t)try{t()}catch(e){setTimeout((()=>{throw e}))}}c.splice(0,t),d+=t}new window.MutationObserver(g).observe(f,{characterData:!0});const m={after(t){return{run(e){return window.setTimeout(e,t)},cancel(t){window.clearTimeout(t)}}},run(t,e){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}},_={run(t){return p||(p=!0,f.textContent=u++),c.push(t),h++},cancel(t){const e=t-d;if(e>=0){if(!c[e])throw new Error("invalid async handle: "+t);c[e]=null}}},v=window["ShadyDOM"]&&window["ShadyDOM"]["noPatch"]&&window["ShadyDOM"]["wrap"]?window["ShadyDOM"]["wrap"]:window["ShadyDOM"]?t=>ShadyDOM["patch"](t):t=>t,b=_,y=o((t=>{class e extends t{static createProperties(t){const e=this.prototype;for(let i in t)i in e||e._createPropertyAccessor(i)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[t];return e||(e=this.constructor.attributeNameForProperty(t),this.__dataAttributes[e]=t),e}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this.__data[t]},set:e?function(){}:function(e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,i){let s=this.__data[t],n=this._shouldPropertyChange(t,e,s);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=s),this.__data[t]=e,this.__dataPending[t]=e),n}_isPropertyPending(t){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(t))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,b.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const t=this.__data,e=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(t,e,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,i)),this.__dataCounter--}_shouldPropertiesChange(t,e,i){return Boolean(e)}_propertiesChanged(t,e,i){}_shouldPropertyChange(t,e,i){return i!==e&&(i===i||e===e)}attributeChangedCallback(t,e,i,s){e!==i&&this._attributeToProperty(t,i),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,i,s)}_attributeToProperty(t,e,i){if(!this.__serializing){const s=this.__dataAttributes,n=s&&s[t]||t;this[n]=this._deserializeValue(e,i||this.constructor.typeForProperty(n))}}_propertyToAttribute(t,e,i){this.__serializing=!0,i=arguments.length<3?this[t]:i,this._valueToNodeAttribute(this,i,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,i){const s=this._serializeValue(e);"class"!==i&&"name"!==i&&"slot"!==i||(t=v(t)),void 0===s?t.removeAttribute(i):t.setAttribute(i,""===s&&window.trustedTypes?window.trustedTypes.emptyScript:s)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}return e}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function w(t){const e={};for(let i in t){const s=t[i];e[i]="function"===typeof s?{type:s}:s}return e}const k=o((t=>{const e=y(t);function i(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof n?e:null}function s(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const i=t.properties;i&&(e=w(i))}t.__ownProperties=e}return t.__ownProperties}class n extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){l(this.prototype);const t=this._properties;this.__observedAttributes=t?Object.keys(t).map((t=>this.prototype._addPropertyToAttributeMap(t))):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=i(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=s(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=i(this);this.__properties=Object.assign({},t&&t._properties,s(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){r(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n}));
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
const x=new Map;class C{constructor(t,e,i,s=D){this.strings=t,this.values=e,this.type=i,this.partCallback=s}getHTML(){const t=this.strings.length-1;let e="",i=!0;for(let s=0;s<t;s++){const t=this.strings[s];e+=t;const n=T(t);i=n>-1?n<t.length:i,e+=i?E:S}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const S=`{{lit-${String(Math.random()).slice(2)}}}`,E=`\x3c!--${S}--\x3e`,P=new RegExp(`${S}|${E}`),N=/[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;function T(t){const e=t.lastIndexOf(">"),i=t.indexOf("<",e+1);return i>-1?t.length:e}class O{constructor(t,e,i,s,n){this.type=t,this.index=e,this.name=i,this.rawName=s,this.strings=n}}const R=t=>-1!==t.index;class L{constructor(t,e){this.parts=[],this.element=e;const i=this.element.content,s=document.createTreeWalker(i,133,null,!1);let n=-1,o=0;const r=[];let a,l;while(s.nextNode()){n++,a=l;const e=l=s.currentNode;if(1===e.nodeType){if(!e.hasAttributes())continue;const i=e.attributes;let s=0;for(let t=0;t<i.length;t++)i[t].value.indexOf(S)>=0&&s++;while(s-- >0){const s=t.strings[o],r=N.exec(s)[1],a=i.getNamedItem(r),l=a.value.split(P);this.parts.push(new O("attribute",n,a.name,r,l)),e.removeAttribute(a.name),o+=l.length-1}}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(S)<0)continue;const i=e.parentNode,s=t.split(P),a=s.length-1;o+=a;for(let o=0;o<a;o++)i.insertBefore(""===s[o]?document.createComment(""):document.createTextNode(s[o]),e),this.parts.push(new O("node",n++));i.insertBefore(""===s[a]?document.createComment(""):document.createTextNode(s[a]),e),r.push(e)}else if(8===e.nodeType&&e.nodeValue===S){const t=e.parentNode,i=e.previousSibling;null===i||i!==a||i.nodeType!==Node.TEXT_NODE?t.insertBefore(document.createComment(""),e):n--,this.parts.push(new O("node",n++)),r.push(e),null===e.nextSibling?t.insertBefore(document.createComment(""),e):n--,l=a,o++}}for(const h of r)h.parentNode.removeChild(h)}}const A=(t,e)=>M(e)?(e=e(t),I):null===e?void 0:e,M=t=>"function"===typeof t&&!0===t.__litDirective,I={},B=t=>null===t||!("object"===typeof t||"function"===typeof t);class ${constructor(t,e,i,s){this.instance=t,this.element=e,this.name=i,this.strings=s,this.size=s.length-1,this._previousValues=[]}_interpolate(t,e){const i=this.strings,s=i.length-1;let n="";for(let o=0;o<s;o++){n+=i[o];const s=A(this,t[e+o]);if(s&&s!==I&&(Array.isArray(s)||"string"!==typeof s&&s[Symbol.iterator]))for(const t of s)n+=t;else n+=s}return n+i[s]}_equalToPreviousValues(t,e){for(let i=e;i<e+this.size;i++)if(this._previousValues[i]!==t[i]||!B(t[i]))return!1;return!0}setValue(t,e){if(this._equalToPreviousValues(t,e))return;const i=this.strings;let s;2===i.length&&""===i[0]&&""===i[1]?(s=A(this,t[e]),Array.isArray(s)&&(s=s.join(""))):s=this._interpolate(t,e),s!==I&&this.element.setAttribute(this.name,s),this._previousValues=t}}class z{constructor(t,e,i){this.instance=t,this.startNode=e,this.endNode=i,this._previousValue=void 0}setValue(t){if(t=A(this,t),t!==I)if(B(t)){if(t===this._previousValue)return;this._setText(t)}else t instanceof C?this._setTemplateResult(t):Array.isArray(t)||t[Symbol.iterator]?this._setIterable(t):t instanceof Node?this._setNode(t):void 0!==t.then?this._setPromise(t):this._setText(t)}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_setNode(t){this._previousValue!==t&&(this.clear(),this._insert(t),this._previousValue=t)}_setText(t){const e=this.startNode.nextSibling;t=void 0===t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._setNode(document.createTextNode(t)),this._previousValue=t}_setTemplateResult(t){const e=this.instance._getTemplate(t);let i;this._previousValue&&this._previousValue.template===e?i=this._previousValue:(i=new H(e,this.instance._partCallback,this.instance._getTemplate),this._setNode(i._clone()),this._previousValue=i),i.update(t.values)}_setIterable(t){Array.isArray(this._previousValue)||(this.clear(),this._previousValue=[]);const e=this._previousValue;let i=0;for(const s of t){let t=e[i];if(void 0===t){let s=this.startNode;if(i>0){const t=e[i-1];s=t.endNode=document.createTextNode(""),this._insert(s)}t=new z(this.instance,s,this.endNode),e.push(t)}t.setValue(s),i++}if(0===i)this.clear(),this._previousValue=void 0;else if(i<e.length){const t=e[i-1];e.length=i,this.clear(t.endNode.previousSibling),t.endNode=this.endNode}}_setPromise(t){this._previousValue=t,t.then((e=>{this._previousValue===t&&this.setValue(e)}))}clear(t=this.startNode){V(this.startNode.parentNode,t.nextSibling,this.endNode)}}const D=(t,e,i)=>{if("attribute"===e.type)return new $(t,i,e.name,e.strings);if("node"===e.type)return new z(t,i,i.nextSibling);throw new Error(`Unknown part type ${e.type}`)};class H{constructor(t,e,i){this._parts=[],this.template=t,this._partCallback=e,this._getTemplate=i}update(t){let e=0;for(const i of this._parts)i?void 0===i.size?(i.setValue(t[e]),e++):(i.setValue(t,e),e+=i.size):e++}_clone(){const t=this.template.element.content.cloneNode(!0),e=this.template.parts;if(e.length>0){const i=document.createTreeWalker(t,133,null,!1);let s=-1;for(let t=0;t<e.length;t++){const n=e[t],o=R(n);if(o)while(s<n.index)s++,i.nextNode();this._parts.push(o?this._partCallback(this,n,i.currentNode):void 0)}}return t}}const V=(t,e,i=null)=>{let s=e;while(s!==i){const e=s.nextSibling;t.removeChild(s),s=e}},j=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;function F(t,e){const{element:{content:i},parts:s}=t,n=document.createTreeWalker(i,j,null,!1);let o=0,r=s[0],a=-1,l=0;const h=[];let d=null;while(n.nextNode()){a++;const t=n.currentNode;t.previousSibling===d&&(d=null),e.has(t)&&(h.push(t),null===d&&(d=t)),null!==d&&l++;while(void 0!==r&&r.index===a)r.index=null!==d?-1:r.index-l,r=s[++o]}h.forEach((t=>t.parentNode.removeChild(t)))}const q=t=>{let e=1;const i=document.createTreeWalker(t,j,null,!1);while(i.nextNode())e++;return e},X=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(R(e))return i}return-1};function W(t,e,i=null){const{element:{content:s},parts:n}=t;if(null===i||void 0===i)return void s.appendChild(e);const o=document.createTreeWalker(s,j,null,!1);let r=X(n),a=0,l=-1;while(o.nextNode()){l++;const t=o.currentNode;t===i&&(i.parentNode.insertBefore(e,i),a=q(e));while(-1!==r&&n[r].index===l){if(a>0){while(-1!==r)n[r].index+=a,r=X(n,r);return}r=X(n,r)}}}
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
const Y=(t,e)=>`${t}--${e}`,J=t=>e=>{const i=Y(e.type,t);let s=x.get(i);void 0===s&&(s=new Map,x.set(i,s));let n=s.get(e.strings);if(void 0===n){const i=e.getTemplateElement();"object"===typeof window.ShadyCSS&&window.ShadyCSS.prepareTemplateDom(i,t),n=new L(e,i),s.set(e.strings,n)}return n},G=["html","svg"];function U(t){G.forEach((e=>{const i=x.get(Y(e,t));void 0!==i&&i.forEach((t=>{const{element:{content:e}}=t,i=e.querySelectorAll("style");F(t,new Set(Array.from(i)))}))}))}const K=new Set,Q=(t,e,i)=>{if(!K.has(i)){K.add(i);const s=document.createElement("template");if(Array.from(t.querySelectorAll("style")).forEach((t=>{s.content.appendChild(t)})),window.ShadyCSS.prepareTemplateStyles(s,i),U(i),window.ShadyCSS.nativeShadow){const i=s.content.querySelector("style");null!==i&&(t.insertBefore(i,t.firstChild),W(e,i.cloneNode(!0),e.element.content.firstChild))}}};function Z(t,e,i){const s=J(i),n=s(t);let o=e.__templateInstance;if(void 0!==o&&o.template===n&&o._partCallback===t.partCallback)return void o.update(t.values);o=new H(n,t.partCallback,s),e.__templateInstance=o;const r=o._clone();o.update(t.values);const a=e instanceof ShadowRoot?e.host:void 0;void 0!==a&&"object"===typeof window.ShadyCSS&&(Q(r,n,i),window.ShadyCSS.styleElement(a)),V(e,e.firstChild),e.appendChild(r)}
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
const tt=(t,...e)=>new C(t,e,"html",et),et=(t,e,i)=>{if("attribute"===e.type){if("on-"===e.rawName.substr(0,3)){const s=e.rawName.slice(3);return new nt(t,i,s)}const s=e.name.substr(e.name.length-1);if("$"===s){const s=e.name.slice(0,-1);return new $(t,i,s,e.strings)}if("?"===s){const s=e.name.slice(0,-1);return new it(t,i,s,e.strings)}return new st(t,i,e.rawName,e.strings)}return D(t,e,i)};class it extends ${setValue(t,e){const i=this.strings;if(2!==i.length||""!==i[0]||""!==i[1])throw new Error("boolean attributes can only contain a single expression");{const i=A(this,t[e]);if(i===I)return;i?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}}class st extends ${setValue(t,e){const i=this.strings;let s;this._equalToPreviousValues(t,e)||(s=2===i.length&&""===i[0]&&""===i[1]?A(this,t[e]):this._interpolate(t,e),s!==I&&(this.element[this.name]=s),this._previousValues=t)}}class nt{constructor(t,e,i){this.instance=t,this.element=e,this.eventName=i}setValue(t){const e=A(this,t);e!==this._listener&&(null==e?this.element.removeEventListener(this.eventName,this):null==this._listener&&this.element.addEventListener(this.eventName,this),this._listener=e)}handleEvent(t){"function"===typeof this._listener?this._listener.call(this.element,t):"function"===typeof this._listener.handleEvent&&this._listener.handleEvent(t)}}class ot extends(k(HTMLElement)){constructor(){super(...arguments),this.__renderComplete=null,this.__resolveRenderComplete=null,this.__isInvalid=!1,this.__isChanging=!1}ready(){this._root=this._createRoot(),super.ready(),this._firstRendered()}connectedCallback(){window.ShadyCSS&&this._root&&window.ShadyCSS.styleElement(this),super.connectedCallback()}_firstRendered(){}_createRoot(){return this.attachShadow({mode:"open"})}_shouldPropertiesChange(t,e,i){const s=this._shouldRender(t,e,i);return!s&&this.__resolveRenderComplete&&this.__resolveRenderComplete(!1),s}_shouldRender(t,e,i){return!0}_propertiesChanged(t,e,i){super._propertiesChanged(t,e,i);const s=this._render(t);s&&void 0!==this._root&&this._applyRender(s,this._root),this._didRender(t,e,i),this.__resolveRenderComplete&&this.__resolveRenderComplete(!0)}_flushProperties(){this.__isChanging=!0,this.__isInvalid=!1,super._flushProperties(),this.__isChanging=!1}_shouldPropertyChange(t,e,i){const s=super._shouldPropertyChange(t,e,i);return s&&this.__isChanging&&console.trace(`Setting properties in response to other properties changing considered harmful. Setting '${t}' from '${this._getProperty(t)}' to '${e}'.`),s}_render(t){throw new Error("_render() not implemented")}_applyRender(t,e){Z(t,e,this.localName)}_didRender(t,e,i){}requestRender(){this._invalidateProperties()}_invalidateProperties(){this.__isInvalid=!0,super._invalidateProperties()}get renderComplete(){return this.__renderComplete||(this.__renderComplete=new Promise((t=>{this.__resolveRenderComplete=e=>{this.__resolveRenderComplete=this.__renderComplete=null,t(e)}})),!this.__isInvalid&&this.__resolveRenderComplete&&Promise.resolve().then((()=>this.__resolveRenderComplete(!1)))),this.__renderComplete}}const rt=2,at=1,lt=.85,ht=0,dt=9;class ct{_svgNode(t,e){const i=document.createElementNS("http://www.w3.org/2000/svg",t);if(e)for(const s in e)e.hasOwnProperty(s)&&i.setAttributeNS(null,s,e[s]);return i}line(t,e,i,s,n){const o=this._line(e,i,s,n),r=this._svgNode("path",{d:o.value});return t.appendChild(r),r}rectangle(t,e,i,s,n){e+=2,i+=2,s-=4,n-=4;let o=this._line(e,i,e+s,i);o=this._line(e+s,i,e+s,i+n,o),o=this._line(e+s,i+n,e,i+n,o),o=this._line(e,i+n,e,i,o);const r=this._svgNode("path",{d:o.value});return t.appendChild(r),r}polygon(t,e){let i=null;const s=e.length;if(s>2)for(let o=0;o<2;o++){let t=!0;for(let n=1;n<s;n++)i=this._continuousLine(e[n-1][0],e[n-1][1],e[n][0],e[n][1],t,n>0,i),t=!1;i=this._continuousLine(e[s-1][0],e[s-1][1],e[0][0],e[0][1],t,o>0,i)}else i=2==s?this._line(e[0][0],e[0][1],e[1][0],e[1][1]):new ut;const n=this._svgNode("path",{d:i.value});return t.appendChild(n),n}ellipse(t,e,i,s,n){s=Math.max(s>10?s-4:s-1,1),n=Math.max(n>10?n-4:n-1,1);const o=2*Math.PI/dt;let r=Math.abs(s/2),a=Math.abs(n/2);r+=this._getOffset(.05*-r,.05*r),a+=this._getOffset(.05*-a,.05*a);let l=this._ellipse(o,e,i,r,a,1,o*this._getOffset(.1,this._getOffset(.4,1)));l=this._ellipse(o,e,i,r,a,1.5,0,l);const h=this._svgNode("path",{d:l.value});return t.appendChild(h),h}_ellipse(t,e,i,s,n,o,r,a){const l=this._getOffset(-.5,.5)-Math.PI/2,h=[];h.push([this._getOffset(-o,o)+e+.9*s*Math.cos(l-t),this._getOffset(-o,o)+i+.9*n*Math.sin(l-t)]);for(let d=l;d<2*Math.PI+l-.01;d+=t)h.push([this._getOffset(-o,o)+e+s*Math.cos(d),this._getOffset(-o,o)+i+n*Math.sin(d)]);return h.push([this._getOffset(-o,o)+e+s*Math.cos(l+2*Math.PI+.5*r),this._getOffset(-o,o)+i+n*Math.sin(l+2*Math.PI+.5*r)]),h.push([this._getOffset(-o,o)+e+.98*s*Math.cos(l+r),this._getOffset(-o,o)+i+.98*n*Math.sin(l+r)]),h.push([this._getOffset(-o,o)+e+.9*s*Math.cos(l+.5*r),this._getOffset(-o,o)+i+.9*n*Math.sin(l+.5*r)]),this._curve(h,a)}_getOffset(t,e){return at*(Math.random()*(e-t)+t)}_line(t,e,i,s,n){const o=Math.pow(t-i,2)+Math.pow(e-s,2);let r=rt||0;r*r*100>o&&(r=Math.sqrt(o)/10);const a=r/2,l=.2+.2*Math.random();let h=lt*rt*(s-e)/200,d=lt*rt*(t-i)/200;h=this._getOffset(-h,h),d=this._getOffset(-d,d);let c=n||new ut;return c.moveTo(t+this._getOffset(-r,r),e+this._getOffset(-r,r)),c.bcurveTo(h+t+(i-t)*l+this._getOffset(-r,r),d+e+(s-e)*l+this._getOffset(-r,r),h+t+2*(i-t)*l+this._getOffset(-r,r),d+e+2*(s-e)*l+this._getOffset(-r,r),i+this._getOffset(-r,r),s+this._getOffset(-r,r)),c.moveTo(t+this._getOffset(-a,a),e+this._getOffset(-a,a)),c.bcurveTo(h+t+(i-t)*l+this._getOffset(-a,a),d+e+(s-e)*l+this._getOffset(-a,a),h+t+2*(i-t)*l+this._getOffset(-a,a),d+e+2*(s-e)*l+this._getOffset(-a,a),i+this._getOffset(-a,a),s+this._getOffset(-a,a)),c}_continuousLine(t,e,i,s,n,o,r){r=r||new ut;const a=Math.pow(t-i,2)+Math.pow(e-s,2);let l=rt||0;l*l*100>a&&(l=Math.sqrt(a)/10);const h=l/2,d=.2+.2*Math.random();let c=lt*rt*(s-e)/200,u=lt*rt*i/200;return c=this._getOffset(-c,c),u=this._getOffset(-u,u),n&&r.moveTo(t+this._getOffset(-l,l),e+this._getOffset(-l,l)),o?r.bcurveTo(c+t+(i-t)*d+this._getOffset(-h,h),u+e+(s-e)*d+this._getOffset(-h,h),c+t+2*(i-t)*d+this._getOffset(-h,h),u+e+2*(s-e)*d+this._getOffset(-h,h),i+this._getOffset(-h,h),s+this._getOffset(-h,h)):r.bcurveTo(c+t+(i-t)*d+this._getOffset(-l,l),u+e+(s-e)*d+this._getOffset(-l,l),c+t+2*(i-t)*d+this._getOffset(-l,l),u+e+2*(s-e)*d+this._getOffset(-l,l),i+this._getOffset(-l,l),s+this._getOffset(-l,l)),r}_curve(t,e){const i=t.length;let s=e||new ut;if(i>3){const e=[],n=1-ht;s.moveTo(t[1][0],t[1][1]);for(let o=1;o+2<i;o++){const i=t[o];e[0]=[i[0],i[1]],e[1]=[i[0]+(n*t[o+1][0]-n*t[o-1][0])/6,i[1]+(n*t[o+1][1]-n*t[o-1][1])/6],e[2]=[t[o+1][0]+(n*t[o][0]-n*t[o+2][0])/6,t[o+1][1]+(n*t[o][1]-n*t[o+2][1])/6],e[3]=[t[o+1][0],t[o+1][1]],s.bcurveTo(e[1][0],e[1][1],e[2][0],e[2][1],e[3][0],e[3][1])}}else 3===i?(s.moveTo(t[0][0],t[0][1]),s.bcurveTo(t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1])):2==i&&(s=this._line(t[0][0],t[0][1],t[1][0],t[1][1],s));return s}}class ut{constructor(){this.p=""}get value(){return this.p.trim()}moveTo(t,e){this.p+="M "+t+" "+e+" "}bcurveTo(t,e,i,s,n,o){this.p+="C "+t+" "+e+", "+i+" "+s+", "+n+" "+o+" "}}const pt=new ct;class ft extends ot{static get properties(){return{elevation:Number,disabled:Boolean}}constructor(){super(),this.elevation=1,this.disabled=!1}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render({text:t,elevation:e,disabled:i}){return this._onDisableChange(),tt`
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
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_clearNode(t){while(t.hasChildNodes())t.removeChild(t.lastChild)}connectedCallback(){super.connectedCallback(),setTimeout((()=>this._didRender()))}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e=this.getBoundingClientRect(),i=Math.min(Math.max(1,this.elevation),5),s=e.width+2*(i-1),n=e.height+2*(i-1);t.setAttribute("width",s),t.setAttribute("height",n),pt.rectangle(t,0,0,e.width,e.height);for(var o=1;o<i;o++)pt.line(t,2*o,e.height+2*o,e.width+2*o,e.height+2*o).style.opacity=(75-10*o)/100,pt.line(t,e.width+2*o,e.height+2*o,e.width+2*o,2*o).style.opacity=(75-10*o)/100,pt.line(t,2*o,e.height+2*o,e.width+2*o,e.height+2*o).style.opacity=(75-10*o)/100,pt.line(t,e.width+2*o,e.height+2*o,e.width+2*o,2*o).style.opacity=(75-10*o)/100;this.classList.remove("pending")}}customElements.define("wired-button",ft);class gt extends ot{static get properties(){return{elevation:Number}}constructor(){super(),this.elevation=1}_createRoot(){const t=this.attachShadow({mode:"open"});return this.classList.add("pending"),t}_render(){return tt`
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
    `}_clearNode(t){while(t.hasChildNodes())t.removeChild(t.lastChild)}connectedCallback(){super.connectedCallback(),setTimeout((()=>this._didRender()))}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);var e=this.getBoundingClientRect(),i=Math.min(Math.max(1,this.elevation),5),s=e.width+2*(i-1),n=e.height+2*(i-1);t.setAttribute("width",s),t.setAttribute("height",n),pt.rectangle(t,0,0,e.width,e.height);for(var o=1;o<i;o++)pt.line(t,2*o,e.height+2*o,e.width+2*o,e.height+2*o).style.opacity=(85-10*o)/100,pt.line(t,e.width+2*o,e.height+2*o,e.width+2*o,2*o).style.opacity=(85-10*o)/100,pt.line(t,2*o,e.height+2*o,e.width+2*o,e.height+2*o).style.opacity=(85-10*o)/100,pt.line(t,e.width+2*o,e.height+2*o,e.width+2*o,2*o).style.opacity=(85-10*o)/100;this.classList.remove("pending")}}customElements.define("wired-card",gt);class mt extends ot{static get properties(){return{checked:Boolean,text:String,disabled:Boolean}}constructor(){super(),this.disabled=!1,this.checked=!1}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render({text:t,iconsize:e}){return this._onDisableChange(),tt`
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
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_toggleCheck(){this.checked=!this.checked;const t=new CustomEvent("change",{bubbles:!0,composed:!0,checked:this.checked,detail:{checked:this.checked}});this.dispatchEvent(t)}_clearNode(t){while(t.hasChildNodes())t.removeChild(t.lastChild)}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e={width:24,height:24};t.setAttribute("width",e.width),t.setAttribute("height",e.height),pt.rectangle(t,0,0,e.width,e.height);const i=[];i.push(pt.line(t,.3*e.width,.4*e.height,.5*e.width,.7*e.height)),i.push(pt.line(t,.5*e.width,.7*e.height,e.width+5,-5)),i.forEach((t=>{t.style.strokeWidth=2.5})),this.checked?i.forEach((t=>{t.style.display=""})):i.forEach((t=>{t.style.display="none"})),this.classList.remove("pending")}}customElements.define("wired-checkbox",mt);class _t extends ot{static get properties(){return{text:String,value:String}}_render({text:t}){return tt`
    <style>
      :host {
        display: block;
        padding: 8px;
        font-family: inherit;
      }
    </style>
    <span>${t}</span>
    `}connectedCallback(){super.connectedCallback(),this._itemClickHandler=t=>{this._onClick(t)},this.addEventListener("click",this._itemClickHandler)}disconnectedCallback(){super.disconnectedCallback(),this._itemClickHandler&&(this.removeEventListener("click",this._itemClickHandler),this._itemClickHandler=null)}_onClick(t){const e=new CustomEvent("item-click",{bubbles:!0,composed:!0,detail:{text:this.text,value:this.value}});this.dispatchEvent(e)}}customElements.define("wired-item",_t);class vt extends ot{static get properties(){return{value:Object,selected:String,disabled:Boolean}}constructor(){super(),this.disabled=!1,this._cardShowing=!1}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render({value:t}){return this._onDisableChange(),tt`
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
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_clearNode(t){while(t.hasChildNodes())t.removeChild(t.lastChild)}_firstRendered(){this._refreshSelection()}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e=this.shadowRoot.getElementById("container").getBoundingClientRect();t.setAttribute("width",e.width),t.setAttribute("height",e.height);const i=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=i.height+"px",pt.rectangle(t,0,0,i.width,i.height);const s=i.width-4;pt.rectangle(t,s,0,34,i.height);const n=Math.max(0,Math.abs((i.height-24)/2)),o=pt.polygon(t,[[s+8,5+n],[s+26,5+n],[s+17,n+Math.min(i.height,18)]]);o.style.fill="currentColor",o.style.pointerEvents=this.disabled?"none":"auto",o.style.cursor="pointer",this.classList.remove("pending")}_refreshSelection(){const t=this.shadowRoot.getElementById("slot"),e=t.assignedNodes();if(e){let t=null;for(let i=0;i<e.length;i++)if("WIRED-ITEM"===e[i].tagName){const s=e[i].value||"";if(this.selected&&s===this.selected){t=e[i];break}}this.value=t?{value:t.value,text:t.text}:null}}_onCombo(t){t.stopPropagation(),this._setCardShowing(!this._cardShowing)}_setCardShowing(t){this._cardShowing=t;const e=this.shadowRoot.getElementById("card");e.style.display=t?"":"none",t&&setTimeout((()=>{e._requestRender()}),10)}_onItemClick(t){t.stopPropagation(),this._setCardShowing(!1),this.selected=t.detail.value,this._refreshSelection();const e=new CustomEvent("selected",{bubbles:!0,composed:!0,checked:this.checked,detail:{selected:this.selected}});this.dispatchEvent(e)}}customElements.define("wired-combo",vt);
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
const bt=tt`<style>:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}
</style>`;i(3011);
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
class yt extends ot{_renderStyle(){return bt}_render(){return tt`${this._renderStyle()}<slot></slot>`}}customElements.define("mwc-icon",yt);class wt extends ot{static get properties(){return{disabled:Boolean}}constructor(){super(),this.disabled=!1}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render(){return this._onDisableChange(),tt`
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
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_clearNode(t){while(t.hasChildNodes())t.removeChild(t.lastChild)}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e=this.getBoundingClientRect(),i=Math.min(e.width,e.height);t.setAttribute("width",i),t.setAttribute("height",i),pt.ellipse(t,i/2,i/2,i,i),this.classList.remove("pending")}connectedCallback(){super.connectedCallback(),setTimeout((()=>this._didRender()))}}customElements.define("wired-icon-button",wt);class kt extends ot{static get properties(){return{placeholder:String,disabled:Boolean,type:String,required:Boolean,autocomplete:String,autofocus:Boolean,minlength:Number,maxlength:Number,min:String,max:String,step:String,readonly:Boolean,size:Number,autocapitalize:String,autocorrect:String}}constructor(){super(),this.disabled=!1}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render({type:t,placeholder:e,disabled:i,required:s,autocomplete:n,autofocus:o,minlength:r,maxlength:a,min:l,max:h,step:d,readonly:c,size:u,autocapitalize:p,autocorrect:f}){return this._onDisableChange(),tt`
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
      autofocus?="${o}" minlength$="${r}" maxlength$="${a}" min$="${l}" max$="${h}" step$="${d}"
      readonly?="${c}" size$="${u}" autocapitalize$="${p}" autocorrect$="${f}" on-change="${t=>this._onChange(t)}">
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    `}get input(){return this.shadowRoot.getElementById("txt")}get value(){const t=this.input;return t&&t.value||""}set value(t){const e=this.input;e&&(e.value=t)}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_onChange(t){t.stopPropagation();const e=new CustomEvent(t.type,{bubbles:!0,composed:!0,cancelable:t.cancelable,detail:{sourceEvent:t}});this.dispatchEvent(e)}_clearNode(t){while(t.hasChildNodes())t.removeChild(t.lastChild)}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e=this.getBoundingClientRect();t.setAttribute("width",e.width),t.setAttribute("height",e.height),pt.rectangle(t,0,0,e.width,e.height),this.classList.remove("pending")}}customElements.define("wired-input",kt);class xt extends ot{static get properties(){return{value:Object,selected:String,horizontal:Boolean}}constructor(){super(),this.horizontal=!1}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render({horizontal:t}){return t?this.classList.add("horizontal"):this.classList.remove("horizontal"),this._onDisableChange(),tt`
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
      </div>`}connectedCallback(){super.connectedCallback(),this._itemClickHandler=t=>{this._onItemClick(t)},this.addEventListener("item-click",this._itemClickHandler)}disconnectedCallback(){super.disconnectedCallback(),this._itemClickHandler&&(this.removeEventListener("item-click",this._itemClickHandler),this._itemClickHandler=null)}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_clearNode(t){while(t.hasChildNodes())t.removeChild(t.lastChild)}_firstRendered(){this._refreshSelection()}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e=this.getBoundingClientRect();t.setAttribute("width",e.width),t.setAttribute("height",e.height),pt.rectangle(t,0,0,e.width,e.height),this.classList.remove("pending")}_refreshSelection(){this.lastSelectedItem&&this.lastSelectedItem.classList.remove("selected-item");const t=this.shadowRoot.getElementById("slot").assignedNodes();if(t){let e=null;for(let i=0;i<t.length;i++)if("WIRED-ITEM"===t[i].tagName){const s=t[i].value||"";if(this.selected&&s===this.selected){e=t[i];break}}this.lastSelectedItem=e,e?(this.lastSelectedItem.classList.add("selected-item"),this.value={value:e.value,text:e.text}):this.value=null}}_onItemClick(t){t.stopPropagation(),this.selected=t.detail.value,this._refreshSelection();const e=new CustomEvent("selected",{bubbles:!0,composed:!0,checked:this.checked,detail:{selected:this.selected}});this.dispatchEvent(e)}}customElements.define("wired-listbox",xt);class Ct extends ot{static get properties(){return{value:Number,min:Number,max:Number,percentage:Boolean}}constructor(){super(),this.percentage=!1,this.max=100,this.min=0,this.value=0}_createRoot(){const t=this.attachShadow({mode:"open"});return this.classList.add("pending"),t}_render(){return tt`
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
    `}_getProgressLabel(){if(this.percentage){if(this.max==this.min)return"%";var t=Math.floor((this.value-this.min)/(this.max-this.min)*100);return t+"%"}return""+this.value}_clearNode(t){while(t.hasChildNodes())t.removeChild(t.lastChild)}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);var e=this.getBoundingClientRect();t.setAttribute("width",e.width),t.setAttribute("height",e.height),pt.rectangle(t,0,0,e.width,e.height);let i=0;if(this.max>this.min){i=(this.value-this.min)/(this.max-this.min);const s=e.width*Math.max(0,Math.min(i,100)),n=pt.polygon(t,[[0,0],[s,0],[s,e.height],[0,e.height]]);n.classList.add("progbox")}this.classList.remove("pending")}}customElements.define("wired-progress",Ct);class St extends ot{static get properties(){return{checked:Boolean,name:String,text:String,iconsize:Number,disabled:Boolean}}constructor(){super(),this.disabled=!1,this.checked=!1,this.iconsize=24}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render({text:t,iconsize:e}){return this._onDisableChange(),tt`
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
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_toggleCheck(){this.checked=!this.checked;const t=new CustomEvent("change",{bubbles:!0,composed:!0,checked:this.checked,detail:{checked:this.checked}});this.dispatchEvent(t)}_clearNode(t){while(t.hasChildNodes())t.removeChild(t.lastChild)}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t),this._dot=null;const e={width:this.iconsize||24,height:this.iconsize||24};t.setAttribute("width",e.width),t.setAttribute("height",e.height),pt.ellipse(t,e.width/2,e.height/2,e.width,e.height);const i=Math.max(.6*e.width,5),s=Math.max(.6*e.height,5);this._dot=pt.ellipse(t,e.width/2,e.height/2,i,s),this._dot.classList.add("filledPath"),this._dot.style.display=this.checked?"":"none",this.classList.remove("pending")}}customElements.define("wired-radio",St);class Et extends ot{static get properties(){return{selected:String}}_render({selected:t}){return tt`
    <style>
      :host {
        display: inline-block;
      }
    
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    </style>
    <slot id="slot" on-slotchange="${()=>this.slotChange()}"></slot>
    `}constructor(){super(),this._checkListener=this._handleChecked.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this._checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("checked",this._checkListener)}_handleChecked(t){const e=t.detail.checked,i=t.target.name;this.selected=e&&i||"";const s=new CustomEvent("selected",{bubbles:!0,composed:!0,checked:this.checked,detail:{selected:this.selected}});this.dispatchEvent(s)}slotChange(){this._requestRender()}_didRender(){const t=this.shadowRoot.getElementById("slot"),e=t.assignedNodes();if(e&&e.length)for(let i=0;i<e.length;i++)if("WIRED-RADIO"===e[i].tagName){const t=e[i].name||"";this.selected&&t===this.selected?e[i].checked=!0:e[i].checked=!1}}}customElements.define("wired-radio-group",Et);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Pt{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run((()=>{this._timer=null,Nt.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),Nt.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,i){return t instanceof Pt?t._cancelAsync():t=new Pt,t.setConfig(e,i),t}}let Nt=new Set;function Tt(t){return t.substring(0,t.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ot=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,Ot&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})();window.Polymer&&window.Polymer.rootPath||Tt(document.baseURI||window.location.href);window.Polymer&&window.Polymer.sanitizeDOMValue;let Rt=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;window.Polymer&&window.Polymer.strictTemplatePolicy;window.Polymer&&window.Polymer.allowTemplateFromDomModule;window.Polymer&&window.Polymer.legacyOptimizations;window.Polymer&&window.Polymer.legacyWarnings;window.Polymer&&window.Polymer.syncInitialRender;window.Polymer&&window.Polymer.legacyUndefined;window.Polymer&&window.Polymer.orderedComputed;let Lt=!0;window.Polymer&&window.Polymer.removeNestedTemplates;window.Polymer&&window.Polymer.fastDomIf;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let At="string"===typeof document.head.style.touchAction,Mt="__polymerGestures",It="__polymerGesturesHandled",Bt="__polymerGesturesTouchAction",$t=25,zt=5,Dt=2,Ht=2500,Vt=["mousedown","mousemove","mouseup","click"],jt=[0,1,4,2],Ft=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function qt(t){return Vt.indexOf(t)>-1}let Xt=!1;function Wt(t){if(!qt(t)&&"touchend"!==t)return At&&Xt&&Rt?{passive:!0}:void 0}(function(){try{let t=Object.defineProperty({},"passive",{get(){Xt=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}})();let Yt=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Jt=[],Gt={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Ut={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Kt(t){return Gt[t.localName]||!1}function Qt(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];try{let i=t.getRootNode();if(t.id){let s=i.querySelectorAll(`label[for = '${t.id}']`);for(let t=0;t<s.length;t++)e.push(s[t])}}catch(i){}}return e}let Zt=function(t){let e=t.sourceCapabilities;if((!e||e.firesTouchEvents)&&(t[It]={skip:!0},"click"===t.type)){let e=!1,i=le(t);for(let t=0;t<i.length;t++){if(i[t].nodeType===Node.ELEMENT_NODE)if("label"===i[t].localName)Jt.push(i[t]);else if(Kt(i[t])){let s=Qt(i[t]);for(let t=0;t<s.length;t++)e=e||Jt.indexOf(s[t])>-1}if(i[t]===ne.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function te(t){let e=Yt?["click"]:Vt;for(let i,s=0;s<e.length;s++)i=e[s],t?(Jt.length=0,document.addEventListener(i,Zt,!0)):document.removeEventListener(i,Zt,!0)}function ee(t){if(!Lt)return;ne.mouse.mouseIgnoreJob||te(!0);let e=function(){te(),ne.mouse.target=null,ne.mouse.mouseIgnoreJob=null};ne.mouse.target=le(t)[0],ne.mouse.mouseIgnoreJob=Pt.debounce(ne.mouse.mouseIgnoreJob,m.after(Ht),e)}function ie(t){let e=t.type;if(!qt(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!Ft&&(e=jt[t.which]||0),Boolean(1&e)}{let e=void 0===t.button?0:t.button;return 0===e}}function se(t){if("click"===t.type){if(0===t.detail)return!0;let e=ue(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let i=e.getBoundingClientRect(),s=t.pageX,n=t.pageY;return!(s>=i.left&&s<=i.right&&n>=i.top&&n<=i.bottom)}return!1}let ne={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function oe(t){let e="auto",i=le(t);for(let s,n=0;n<i.length;n++)if(s=i[n],s[Bt]){e=s[Bt];break}return e}function re(t,e,i){t.movefn=e,t.upfn=i,document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}function ae(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}Lt&&document.addEventListener("touchend",ee,!!Xt&&{passive:!0});const le=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],he={},de=[];function ce(t,e){let i=document.elementFromPoint(t,e),s=i;while(s&&s.shadowRoot&&!window.ShadyDOM){let n=s;if(s=s.shadowRoot.elementFromPoint(t,e),n===s)break;s&&(i=s)}return i}function ue(t){const e=le(t);return e.length>0?e[0]:t.target}function pe(t){let e,i=t.type,s=t.currentTarget,n=s[Mt];if(!n)return;let o=n[i];if(o){if(!t[It]&&(t[It]={},"touch"===i.slice(0,5))){let e=t.changedTouches[0];if("touchstart"===i&&1===t.touches.length&&(ne.touch.id=e.identifier),ne.touch.id!==e.identifier)return;At||"touchstart"!==i&&"touchmove"!==i||fe(t)}if(e=t[It],!e.skip){for(let i,s=0;s<de.length;s++)i=de[s],o[i.name]&&!e[i.name]&&i.flow&&i.flow.start.indexOf(t.type)>-1&&i.reset&&i.reset();for(let s,n=0;n<de.length;n++)s=de[n],o[s.name]&&!e[s.name]&&(e[s.name]=!0,s[i](t))}}}function fe(t){let e=t.changedTouches[0],i=t.type;if("touchstart"===i)ne.touch.x=e.clientX,ne.touch.y=e.clientY,ne.touch.scrollDecided=!1;else if("touchmove"===i){if(ne.touch.scrollDecided)return;ne.touch.scrollDecided=!0;let i=oe(t),s=!1,n=Math.abs(ne.touch.x-e.clientX),o=Math.abs(ne.touch.y-e.clientY);t.cancelable&&("none"===i?s=!0:"pan-x"===i?s=o>n:"pan-y"===i&&(s=n>o)),s?t.preventDefault():we("track")}}function ge(t,e,i){return!!he[e]&&(me(t,e,i),!0)}function me(t,e,i){let s=he[e],n=s.deps,o=s.name,r=t[Mt];r||(t[Mt]=r={});for(let a,l,h=0;h<n.length;h++)a=n[h],Yt&&qt(a)&&"click"!==a||(l=r[a],l||(r[a]=l={_count:0}),0===l._count&&t.addEventListener(a,pe,Wt(a)),l[o]=(l[o]||0)+1,l._count=(l._count||0)+1);t.addEventListener(e,i),s.touchAction&&be(t,s.touchAction)}function _e(t){de.push(t);for(let e=0;e<t.emits.length;e++)he[t.emits[e]]=t}function ve(t){for(let e,i=0;i<de.length;i++){e=de[i];for(let i,s=0;s<e.emits.length;s++)if(i=e.emits[s],i===t)return e}return null}function be(t,e){At&&t instanceof HTMLElement&&_.run((()=>{t.style.touchAction=e})),t[Bt]=e}function ye(t,e,i){let s=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=i,v(t).dispatchEvent(s),s.defaultPrevented){let t=i.preventer||i.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function we(t){let e=ve(t);e.info&&(e.info.prevent=!0)}function ke(t,e,i,s){e&&ye(e,t,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:s,prevent:function(t){return we(t)}})}function xe(t,e,i){if(t.prevent)return!1;if(t.started)return!0;let s=Math.abs(t.x-e),n=Math.abs(t.y-i);return s>=zt||n>=zt}function Ce(t,e,i){if(!e)return;let s,n=t.moves[t.moves.length-2],o=t.moves[t.moves.length-1],r=o.x-t.x,a=o.y-t.y,l=0;n&&(s=o.x-n.x,l=o.y-n.y),ye(e,"track",{state:t.state,x:i.clientX,y:i.clientY,dx:r,dy:a,ddx:s,ddy:l,sourceEvent:i,hover:function(){return ce(i.clientX,i.clientY)}})}function Se(t,e,i){let s=Math.abs(e.clientX-t.x),n=Math.abs(e.clientY-t.y),o=ue(i||e);!o||Ut[o.localName]&&o.hasAttribute("disabled")||(isNaN(s)||isNaN(n)||s<=$t&&n<=$t||se(e))&&(t.prevent||ye(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i}))}_e({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){ae(this.info)},mousedown:function(t){if(!ie(t))return;let e=ue(t),i=this,s=function(t){ie(t)||(ke("up",e,t),ae(i.info))},n=function(t){ie(t)&&ke("up",e,t),ae(i.info)};re(this.info,s,n),ke("down",e,t)},touchstart:function(t){ke("down",ue(t),t.changedTouches[0],t)},touchend:function(t){ke("up",ue(t),t.changedTouches[0],t)}}),_e({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>Dt&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,ae(this.info)},mousedown:function(t){if(!ie(t))return;let e=ue(t),i=this,s=function(t){let s=t.clientX,n=t.clientY;xe(i.info,s,n)&&(i.info.state=i.info.started?"mouseup"===t.type?"end":"track":"start","start"===i.info.state&&we("tap"),i.info.addMove({x:s,y:n}),ie(t)||(i.info.state="end",ae(i.info)),e&&Ce(i.info,e,t),i.info.started=!0)},n=function(t){i.info.started&&s(t),ae(i.info)};re(this.info,s,n),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=ue(t),i=t.changedTouches[0],s=i.clientX,n=i.clientY;xe(this.info,s,n)&&("start"===this.info.state&&we("tap"),this.info.addMove({x:s,y:n}),Ce(this.info,e,i),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=ue(t),i=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),Ce(this.info,e,i))}}),_e({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){ie(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){ie(t)&&Se(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){Se(this.info,t.changedTouches[0],t)}});class Ee extends ot{static get properties(){return{value:Number,min:Number,max:Number,knobradius:Number,disabled:Boolean}}constructor(){super(),this.disabled=!1,this.value=0,this.min=0,this.max=100,this.knobradius=10}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render(){return this._onDisableChange(),tt`
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
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_clearNode(t){while(t.hasChildNodes())t.removeChild(t.lastChild)}connectedCallback(){super.connectedCallback(),setTimeout((()=>this._firstRendered()),100)}_firstRendered(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e=this.getBoundingClientRect();t.setAttribute("width",e.width),t.setAttribute("height",e.height);let i=this.knobradius||10;this._barWidth=e.width-2*i,this._bar=pt.line(t,i,e.height/2,e.width-i,e.height/2),this._bar.classList.add("bar"),this._knobGroup=pt._svgNode("g"),t.appendChild(this._knobGroup),this._knob=pt.ellipse(this._knobGroup,i,e.height/2,2*i,2*i),this._knob.classList.add("knob"),this._onValueChange(),this.classList.remove("pending"),ge(this._knob,"down",(t=>{this.disabled||this._knobdown(t)})),ge(this._knob,"up",(t=>{this.disabled||this._resetKnob(t)})),ge(this._knob,"track",(t=>{this.disabled||this._onTrack(t)}))}_onValueChange(){if(!this._knob)return;let t=0;this.max>this.min&&(t=Math.min(1,Math.max((this.value-this.min)/(this.max-this.min),0))),this._pct=t,t?this._knob.classList.add("hasValue"):this._knob.classList.remove("hasValue");let e=t*this._barWidth;this._knobGroup.style.transform="translateX("+Math.round(e)+"px)"}_knobdown(t){this._knobExpand(!0),t.preventDefault(),this.focus()}_resetKnob(t){this._knobExpand(!1)}_knobExpand(t){this._knob&&(t?this._knob.classList.add("expanded"):this._knob.classList.remove("expanded"))}_onTrack(t){switch(t.stopPropagation(),t.detail.state){case"start":this._trackStart(t);break;case"track":this._trackX(t);break;case"end":this._trackEnd();break}}_trackStart(t){this._intermediateValue=this.value,this._startx=this._pct*this._barWidth,this._knobstartx=this._startx,this._minx=-this._startx,this._maxx=this._barWidth-this._startx,this._dragging=!0}_trackX(t){this._dragging||this._trackStart(t);var e=t.detail.dx||0,i=Math.max(Math.min(this._startx+e,this._barWidth),0);this._knobGroup.style.transform="translateX("+Math.round(i)+"px)";var s=i/this._barWidth;this._intermediateValue=this.min+s*(this.max-this.min)}_trackEnd(){this._dragging=!1,this._resetKnob(),this.value=this._intermediateValue,this._pct=(this.value-this.min)/(this.max-this.min);const t=new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:this._intermediateValue}});this.dispatchEvent(t)}}customElements.define("wired-slider",Ee);class Pe extends ot{static get properties(){return{rows:Number,maxrows:Number,autocomplete:String,autofocus:Boolean,inputmode:String,placeholder:String,readonly:Boolean,required:Boolean,minlength:Number,maxlength:Number,disabled:Boolean}}constructor(){super(),this.disabled=!1,this.rows=1,this.maxrows=0}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render({rows:t,maxrows:e,autocomplete:i,autofocus:s,inputmode:n,placeholder:o,readonly:r,required:a,minlength:l,maxlength:h,disabled:d}){return this._onDisableChange(),tt`
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
        readonly?="${r}" required?="${a}" disabled?="${d}" rows$="${t}" minlength$="${l}" maxlength$="${h}"
        on-input="${()=>this._onInput()}"></textarea>
    </div>
    <div class="fit overlay">
      <svg id="svg"></svg>
    </div>
    `}connectedCallback(){super.connectedCallback(),this.value=this.value||""}get textarea(){return this.shadowRoot.getElementById("textarea")}get mirror(){return this.shadowRoot.getElementById("mirror")}get value(){const t=this.textarea;return t&&t.value||""}set value(t){const e=this.textarea;e&&(e.value!==t&&(e.value=t||0===t?t:""),this.mirror.innerHTML=this._valueForMirror(),this._requestRender())}_constrain(t){var e;t=t||[""],e=this.maxRows>0&&t.length>this.maxRows?t.slice(0,this.maxRows):t.slice(0);while(this.rows>0&&e.length<this.rows)e.push("");return e.join("<br/>")+"&#160;"}_valueForMirror(){var t=this.textarea;if(t)return this.tokens=t&&t.value?t.value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split("\n"):[""],this._constrain(this.tokens)}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_updateCached(){this.mirror.innerHTML=this._constrain(this.tokens)}_onInput(t){this.value=this.textarea.value}_clearNode(t){while(t.hasChildNodes())t.removeChild(t.lastChild)}_needsLayout(){var t=this.getBoundingClientRect();t.height!=this._prevHeight&&this._requestRender()}_didRender(){const t=this.getBoundingClientRect(),e=this.shadowRoot.getElementById("svg");this._prevHeight!==t.height&&(this._clearNode(e),e.setAttribute("width",t.width),e.setAttribute("height",t.height),pt.rectangle(e,2,2,t.width-2,t.height-2),this._prevHeight=t.height),this.classList.remove("pending"),this._updateCached()}}customElements.define("wired-textarea",Pe);class Ne extends ot{static get properties(){return{checked:Boolean,disabled:Boolean}}constructor(){super(),this.disabled=!1,this.checked=!1}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render(){return this._onDisableChange(),tt`
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
    `}_clearNode(t){while(t.hasChildNodes())t.removeChild(t.lastChild)}_toggleCheck(){this.checked=!this.checked;const t=new CustomEvent("change",{bubbles:!0,composed:!0,checked:this.checked,detail:{checked:this.checked}});this.dispatchEvent(t)}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e={width:2.5*(this.height||32),height:this.height||32};t.setAttribute("width",e.width),t.setAttribute("height",e.height),pt.rectangle(t,0,0,e.width,e.height),this.knob=pt.ellipse(t,e.height/2,e.height/2,e.height,e.height),this.knobOffset=e.width-e.height,this.knob.style.transition="all 0.3s ease",this.knob.style.transform=this.checked?"translateX("+this.knobOffset+"px)":"";const i=this.knob.classList;this.checked?(i.remove("unchecked"),i.add("checked")):(i.remove("checked"),i.add("unchecked")),this.classList.remove("pending")}}customElements.define("wired-toggle",Ne);class Te extends ot{static get properties(){return{for:String,position:String,text:String,offset:Number}}constructor(){super(),this._dirty=!1,this._showing=!1,this._target=null,this.offset=14,this.position="bottom"}_render({text:t},e){return e&&(e.position||e.text)&&(this._dirty=!0),(!this._target||e&&e.for)&&this._refreshTarget(),tt`
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
    `}get target(){if(this._target)return this._target;var t,e=this.parentNode,i=(this.getRootNode?this.getRootNode():null)||this.getOwnerDocument();return t=this.for?i.querySelector("#"+this.for):e.nodeType==Node.DOCUMENT_FRAGMENT_NODE?i.host:e,t}_detachListeners(){this._showHandler&&this._hideHandler&&(this._target&&(this._target.removeEventListener("mouseenter",this._showHandler),this._target.removeEventListener("focus",this._showHandler),this._target.removeEventListener("mouseleave",this._hideHandler),this._target.removeEventListener("blur",this._hideHandler),this._target.removeEventListener("click",this._hideHandler)),this.removeEventListener("mouseenter",this._hideHandler))}_attachListeners(){this._showHandler=()=>{this.show()},this._hideHandler=()=>{this.hide()},this._target&&(this._target.addEventListener("mouseenter",this._showHandler),this._target.addEventListener("focus",this._showHandler),this._target.addEventListener("mouseleave",this._hideHandler),this._target.addEventListener("blur",this._hideHandler),this._target.addEventListener("click",this._hideHandler)),this.addEventListener("mouseenter",this._hideHandler)}_refreshTarget(){this._detachListeners(),this._target=null,this._target=this.target,this._attachListeners(),this._dirty=!0}_clearNode(t){while(t.hasChildNodes())t.removeChild(t.lastChild)}_layout(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);var e=this.getBoundingClientRect(),i=e.width,s=e.height;switch(this.position){case"left":case"right":i+=this.offset;break;default:s+=this.offset;break}t.setAttribute("width",i),t.setAttribute("height",s);var n=[];switch(this.position){case"top":n=[[2,2],[i-2,2],[i-2,s-this.offset],[i/2+8,s-this.offset],[i/2,s-this.offset+8],[i/2-8,s-this.offset],[0,s-this.offset]];break;case"left":n=[[2,2],[i-this.offset,2],[i-this.offset,s/2-8],[i-this.offset+8,s/2],[i-this.offset,s/2+8],[i-this.offset,s],[2,s-2]];break;case"right":n=[[this.offset,2],[i-2,2],[i-2,s-2],[this.offset,s-2],[this.offset,s/2+8],[this.offset-8,s/2],[this.offset,s/2-8]],t.style.transform="translateX("+-this.offset+"px)";break;default:n=[[2,this.offset],[0,s-2],[i-2,s-2],[i-2,this.offset],[i/2+8,this.offset],[i/2,this.offset-8],[i/2-8,this.offset]],t.style.transform="translateY("+-this.offset+"px)";break}pt.polygon(t,n),this._dirty=!1}_firstRendered(){this._layout()}_didRender(){this._dirty&&this._layout()}show(){this._showing||(this._showing=!0,this.shadowRoot.getElementById("container").style.display="",this.updatePosition(),setTimeout((()=>{this._layout()}),1))}hide(){this._showing&&(this._showing=!1,this.shadowRoot.getElementById("container").style.display="none")}updatePosition(){if(this._target&&this.offsetParent){var t,e,i=this.offset,s=this.offsetParent.getBoundingClientRect(),n=this._target.getBoundingClientRect(),o=this.getBoundingClientRect(),r=(n.width-o.width)/2,a=(n.height-o.height)/2,l=n.left-s.left,h=n.top-s.top;switch(this.position){case"top":t=l+r,e=h-o.height-i;break;case"bottom":t=l+r,e=h+n.height+i;break;case"left":t=l-o.width-i,e=h+a;break;case"right":t=l+n.width+i,e=h+a;break}this.style.left=t+"px",this.style.top=e+"px"}}}customElements.define("wired-tooltip",Te)},7576:function(t){
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(e,i){t.exports=i()})(0,(function(){return function(){var t={686:function(t,e,i){"use strict";i.d(e,{default:function(){return L}});var s=i(279),n=i.n(s),o=i(370),r=i.n(o),a=i(817),l=i.n(a);function h(t){try{return document.execCommand(t)}catch(e){return!1}}var d=function(t){var e=l()(t);return h("cut"),e},c=d;function u(t){var e="rtl"===document.documentElement.getAttribute("dir"),i=document.createElement("textarea");i.style.fontSize="12pt",i.style.border="0",i.style.padding="0",i.style.margin="0",i.style.position="absolute",i.style[e?"right":"left"]="-9999px";var s=window.pageYOffset||document.documentElement.scrollTop;return i.style.top="".concat(s,"px"),i.setAttribute("readonly",""),i.value=t,i}var p=function(t,e){var i=u(t);e.container.appendChild(i);var s=l()(i);return h("copy"),i.remove(),s},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},i="";return"string"===typeof t?i=p(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null===t||void 0===t?void 0:t.type)?i=p(t.value,e):(i=l()(t),h("copy")),i},g=f;function m(t){return m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}var _=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,i=void 0===e?"copy":e,s=t.container,n=t.target,o=t.text;if("copy"!==i&&"cut"!==i)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==n){if(!n||"object"!==m(n)||1!==n.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===i&&n.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===i&&(n.hasAttribute("readonly")||n.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return o?g(o,{container:s}):n?"cut"===i?c(n):g(n,{container:s}):void 0},v=_;function b(t){return b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function k(t,e,i){return e&&w(t.prototype,e),i&&w(t,i),t}function x(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&C(t,e)}function C(t,e){return C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},C(t,e)}function S(t){var e=N();return function(){var i,s=T(t);if(e){var n=T(this).constructor;i=Reflect.construct(s,arguments,n)}else i=s.apply(this,arguments);return E(this,i)}}function E(t,e){return!e||"object"!==b(e)&&"function"!==typeof e?P(t):e}function P(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function N(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}function O(t,e){var i="data-clipboard-".concat(t);if(e.hasAttribute(i))return e.getAttribute(i)}var R=function(t){x(i,t);var e=S(i);function i(t,s){var n;return y(this,i),n=e.call(this),n.resolveOptions(s),n.listenClick(t),n}return k(i,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===b(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=r()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,i=this.action(e)||"copy",s=v({action:i,container:this.container,target:this.target(e),text:this.text(e)});this.emit(s?"success":"error",{action:i,text:s,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return O("action",t)}},{key:"defaultTarget",value:function(t){var e=O("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return O("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return g(t,e)}},{key:"cut",value:function(t){return c(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,i=!!document.queryCommandSupported;return e.forEach((function(t){i=i&&!!document.queryCommandSupported(t)})),i}}]),i}(n()),L=R},828:function(t){var e=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var i=Element.prototype;i.matches=i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector}function s(t,i){while(t&&t.nodeType!==e){if("function"===typeof t.matches&&t.matches(i))return t;t=t.parentNode}}t.exports=s},438:function(t,e,i){var s=i(828);function n(t,e,i,s,n){var o=r.apply(this,arguments);return t.addEventListener(i,o,n),{destroy:function(){t.removeEventListener(i,o,n)}}}function o(t,e,i,s,o){return"function"===typeof t.addEventListener?n.apply(null,arguments):"function"===typeof i?n.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return n(t,e,i,s,o)})))}function r(t,e,i,n){return function(i){i.delegateTarget=s(i.target,e),i.delegateTarget&&n.call(t,i)}}t.exports=o},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var i=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===i||"[object HTMLCollection]"===i)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},370:function(t,e,i){var s=i(879),n=i(438);function o(t,e,i){if(!t&&!e&&!i)throw new Error("Missing required arguments");if(!s.string(e))throw new TypeError("Second argument must be a String");if(!s.fn(i))throw new TypeError("Third argument must be a Function");if(s.node(t))return r(t,e,i);if(s.nodeList(t))return a(t,e,i);if(s.string(t))return l(t,e,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function r(t,e,i){return t.addEventListener(e,i),{destroy:function(){t.removeEventListener(e,i)}}}function a(t,e,i){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,i)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,i)}))}}}function l(t,e,i){return n(document.body,t,e,i)}t.exports=o},817:function(t){function e(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var i=t.hasAttribute("readonly");i||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),i||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var s=window.getSelection(),n=document.createRange();n.selectNodeContents(t),s.removeAllRanges(),s.addRange(n),e=s.toString()}return e}t.exports=e},279:function(t){function e(){}e.prototype={on:function(t,e,i){var s=this.e||(this.e={});return(s[t]||(s[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var s=this;function n(){s.off(t,n),e.apply(i,arguments)}return n._=e,this.on(t,n,i)},emit:function(t){var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),s=0,n=i.length;for(s;s<n;s++)i[s].fn.apply(i[s].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),s=i[t],n=[];if(s&&e)for(var o=0,r=s.length;o<r;o++)s[o].fn!==e&&s[o].fn._!==e&&n.push(s[o]);return n.length?i[t]=n:delete i[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={exports:{}};return t[s](n,n.exports,i),n.exports}return function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),i(686)}().default}))}}]);