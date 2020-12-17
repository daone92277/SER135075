!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=88)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.__extends=function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},e.__rest=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n},e.__decorate=function(t,e,n,i){var o,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(a=(s<3?o(a):s>3?o(e,n,a):o(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a},e.__param=function(t,e){return function(n,r){e(n,r,t)}},e.__metadata=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},e.__awaiter=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n((function(e){e(t.value)})).then(s,a)}u((r=r.apply(t,e||[])).next())}))},e.__generator=function(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},e.__exportStar=function(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])},e.__values=s,e.__read=a,e.__spread=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(a(arguments[e]));return t},e.__spreadArrays=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r},e.__await=u,e.__asyncGenerator=function(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=n.apply(t,e||[]),o=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(t){i[t]&&(r[t]=function(e){return new Promise((function(n,r){o.push([t,e,n,r])>1||a(t,e)}))})}function a(t,e){try{(n=i[t](e)).value instanceof u?Promise.resolve(n.value.v).then(c,l):d(o[0][2],n)}catch(t){d(o[0][3],t)}var n}function c(t){a("next",t)}function l(t){a("throw",t)}function d(t,e){t(e),o.shift(),o.length&&a(o[0][0],o[0][1])}},e.__asyncDelegator=function(t){var e,n;return e={},r("next"),r("throw",(function(t){throw t})),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,i){e[r]=t[r]?function(e){return(n=!n)?{value:u(t[r](e)),done:"return"===r}:i?i(e):e}:i}},e.__asyncValues=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=s(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,i){(function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)})(r,i,(e=t[n](e)).done,e.value)}))}}},e.__makeTemplateObject=function(t,e){Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e;return t},e.__importStar=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},e.__importDefault=function(t){return t&&t.__esModule?t:{default:t}};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};var o=function(){return e.__assign=o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},o.apply(this,arguments)};function s(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function a(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}function u(t){return this instanceof u?(this.v=t,this):new u(t)}e.__assign=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var r=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();e.MDCFoundation=r,e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCComponent=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),i=n(1);var o=function(){function t(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];this.root_=t,this.initialize.apply(this,r.__spread(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new i.MDCFoundation({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)},t.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)},t.prototype.emit=function(t,e,n){var r;void 0===n&&(n=!1),"function"==typeof CustomEvent?r=new CustomEvent(t,{bubbles:n,detail:e}):(r=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(r)},t}();e.MDCComponent=o,e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCRipple=void 0;var r=c(n(0)),i=n(2),o=n(6),s=n(4),a=n(5),u=c(n(15));function c(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.disabled=!1,e}return r.__extends(e,t),e.attachTo=function(t,n){void 0===n&&(n={isUnbounded:void 0});var r=new e(t);return void 0!==n.isUnbounded&&(r.unbounded=n.isUnbounded),r},e.createAdapter=function(t){return{addClass:function(e){return t.root_.classList.add(e)},browserSupportsCssVars:function(){return u.supportsCssVariables(window)},computeBoundingRect:function(){return t.root_.getBoundingClientRect()},containsEventTarget:function(e){return t.root_.contains(e)},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,(0,o.applyPassive)())},deregisterInteractionHandler:function(e,n){return t.root_.removeEventListener(e,n,(0,o.applyPassive)())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return(0,s.matches)(t.root_,":active")},isSurfaceDisabled:function(){return Boolean(t.disabled)},isUnbounded:function(){return Boolean(t.unbounded)},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,(0,o.applyPassive)())},registerInteractionHandler:function(e,n){return t.root_.addEventListener(e,n,(0,o.applyPassive)())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(e){return t.root_.classList.remove(e)},updateCssVariable:function(e,n){return t.root_.style.setProperty(e,n)}}},Object.defineProperty(e.prototype,"unbounded",{get:function(){return Boolean(this.unbounded_)},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()},enumerable:!0,configurable:!0}),e.prototype.activate=function(){this.foundation_.activate()},e.prototype.deactivate=function(){this.foundation_.deactivate()},e.prototype.layout=function(){this.foundation_.layout()},e.prototype.getDefaultFoundation=function(){return new a.MDCRippleFoundation(e.createAdapter(this))},e.prototype.initialSyncWithDOM=function(){var t=this.root_;this.unbounded="mdcRippleIsUnbounded"in t.dataset},e.prototype.setUnbounded_=function(){this.foundation_.setUnbounded(Boolean(this.unbounded_))},e}(i.MDCComponent);e.MDCRipple=l},function(t,e,n){"use strict";function r(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.closest=
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function(t,e){if(t.closest)return t.closest(e);var n=t;for(;n;){if(r(n,e))return n;n=n.parentElement}return null},e.matches=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCRippleFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),i=n(1),o=n(32),s=n(15);var a=["touchstart","pointerdown","mousedown","keydown"],u=["touchend","pointerup","mouseup","contextmenu"],c=[],l=function(t){function e(n){var i=t.call(this,r.__assign({},e.defaultAdapter,n))||this;return i.activationAnimationHasEnded_=!1,i.activationTimer_=0,i.fgDeactivationRemovalTimer_=0,i.fgScale_="0",i.frame_={width:0,height:0},i.initialSize_=0,i.layoutFrame_=0,i.maxRadius_=0,i.unboundedCoords_={left:0,top:0},i.activationState_=i.defaultActivationState_(),i.activationTimerCallback_=function(){i.activationAnimationHasEnded_=!0,i.runDeactivationUXLogicIfReady_()},i.activateHandler_=function(t){return i.activate_(t)},i.deactivateHandler_=function(){return i.deactivate_()},i.focusHandler_=function(){return i.handleFocus()},i.blurHandler_=function(){return i.handleBlur()},i.resizeHandler_=function(){return i.layout()},i}return r.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return o.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple_();if(this.registerRootHandlers_(n),n){var r=e.cssClasses,i=r.ROOT,o=r.UNBOUNDED;requestAnimationFrame((function(){t.adapter_.addClass(i),t.adapter_.isUnbounded()&&(t.adapter_.addClass(o),t.layoutInternal_())}))}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,r=n.ROOT,i=n.UNBOUNDED;requestAnimationFrame((function(){t.adapter_.removeClass(r),t.adapter_.removeClass(i),t.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){t.layoutInternal_(),t.layoutFrame_=0}))},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter_.addClass(n):this.adapter_.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var e=this;t&&(a.forEach((function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)})),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):u.forEach((function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)}))},e.prototype.deregisterRootHandlers_=function(){var t=this;a.forEach((function(e){t.adapter_.deregisterInteractionHandler(e,t.activateHandler_)})),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),u.forEach((function(e){t.adapter_.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)}))},e.prototype.removeCssVars_=function(){var t=this,n=e.strings;Object.keys(n).forEach((function(e){0===e.indexOf("VAR_")&&t.adapter_.updateCssVariable(n[e],null)}))},e.prototype.activate_=function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var r=this.previousActivationEvent_;if(!(r&&void 0!==t&&r.type!==t.type))n.isActivated=!0,n.isProgrammatic=void 0===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&c.length>0&&c.some((function(t){return e.adapter_.containsEventTarget(t)}))?this.resetActivationState_():(void 0!==t&&(c.push(t.target),this.registerDeactivationHandlers_(t)),n.wasElementMadeActive=this.checkElementMadeActive_(t),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){c=[],n.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive_(t),n.wasElementMadeActive&&e.animateActivation_()),n.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())})))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()},e.prototype.animateActivation_=function(){var t=this,n=e.strings,r=n.VAR_FG_TRANSLATE_START,i=n.VAR_FG_TRANSLATE_END,o=e.cssClasses,s=o.FG_DEACTIVATION,a=o.FG_ACTIVATION,u=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",l="";if(!this.adapter_.isUnbounded()){var d=this.getFgTranslationCoordinates_(),f=d.startPoint,_=d.endPoint;c=f.x+"px, "+f.y+"px",l=_.x+"px, "+_.y+"px"}this.adapter_.updateCssVariable(r,c),this.adapter_.updateCssVariable(i,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(s),this.adapter_.computeBoundingRect(),this.adapter_.addClass(a),this.activationTimer_=setTimeout((function(){return t.activationTimerCallback_()}),u)},e.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,n=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?(0,s.getNormalizedEventCoords)(n,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,r=this.activationState_,i=r.hasDeactivationUXRun,s=r.isActivated;(i||!s)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(n),this.fgDeactivationRemovalTimer_=setTimeout((function(){t.adapter_.removeClass(n)}),o.numbers.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return t.previousActivationEvent_=void 0}),e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var n=r.__assign({},e);e.isProgrammatic?(requestAnimationFrame((function(){return t.animateDeactivation_(n)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(n),t.resetActivationState_()})))}},e.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,n=t.wasElementMadeActive;(e||n)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var n=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?n:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING;var r=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter_.isUnbounded()&&r%2!=0?this.initialSize_=r-1:this.initialSize_=r,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,n=t.VAR_FG_SIZE,r=t.VAR_LEFT,i=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(n,this.initialSize_+"px"),this.adapter_.updateCssVariable(o,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(r,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(i,this.unboundedCoords_.top+"px"))},e}(i.MDCFoundation);e.MDCRippleFoundation=l,e.default=l},function(t,e,n){"use strict";
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var r;Object.defineProperty(e,"__esModule",{value:!0}),e.applyPassive=function(t,e){void 0===t&&(t=window);void 0===e&&(e=!1);if(void 0===r||e){var n=!1;try{t.document.addEventListener("test",(function(){}),{get passive(){return n=!0}})}catch(t){}r=n}return!!r&&{passive:!0}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},e.numbers={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},e.strings={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var r,i,o={CLOSED_EVENT:"MDCMenuSurface:closed",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")};!function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"}(r||(e.CornerBit=r={})),function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"}(i||(e.Corner=i={})),e.cssClasses={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},e.strings=o,e.numbers={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67},e.CornerBit=r,e.Corner=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var r=e.Direction=void 0;!function(t){t[t.RIGHT=0]="RIGHT",t[t.LEFT=1]="LEFT"}(r||(e.Direction=r={}));var i=e.EventSource=void 0;!function(t){t[t.PRIMARY=0]="PRIMARY",t[t.TRAILING=1]="TRAILING",t[t.NONE=2]="NONE"}(i||(e.EventSource=i={}));var o=e.strings={ARIA_CHECKED:"aria-checked",ARROW_DOWN_KEY:"ArrowDown",ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",ARROW_UP_KEY:"ArrowUp",BACKSPACE_KEY:"Backspace",CHECKMARK_SELECTOR:".mdc-chip__checkmark",DELETE_KEY:"Delete",END_KEY:"End",ENTER_KEY:"Enter",ENTRY_ANIMATION_NAME:"mdc-chip-entry",HOME_KEY:"Home",INTERACTION_EVENT:"MDCChip:interaction",LEADING_ICON_SELECTOR:".mdc-chip__icon--leading",NAVIGATION_EVENT:"MDCChip:navigation",PRIMARY_ACTION_SELECTOR:".mdc-chip__primary-action",REMOVAL_EVENT:"MDCChip:removal",SELECTION_EVENT:"MDCChip:selection",SPACEBAR_KEY:" ",TAB_INDEX:"tabindex",TRAILING_ACTION_SELECTOR:".mdc-chip__trailing-action",TRAILING_ICON_INTERACTION_EVENT:"MDCChip:trailingIconInteraction",TRAILING_ICON_SELECTOR:".mdc-chip__icon--trailing"},s=(e.cssClasses={CHECKMARK:"mdc-chip__checkmark",CHIP_EXIT:"mdc-chip--exit",DELETABLE:"mdc-chip--deletable",HIDDEN_LEADING_ICON:"mdc-chip__icon--leading-hidden",LEADING_ICON:"mdc-chip__icon--leading",PRIMARY_ACTION:"mdc-chip__primary-action",SELECTED:"mdc-chip--selected",TEXT:"mdc-chip__text",TRAILING_ACTION:"mdc-chip__trailing-action",TRAILING_ICON:"mdc-chip__icon--trailing"},e.navigationKeys=new Set);s.add(o.ARROW_LEFT_KEY),s.add(o.ARROW_RIGHT_KEY),s.add(o.ARROW_DOWN_KEY),s.add(o.ARROW_UP_KEY),s.add(o.END_KEY),s.add(o.HOME_KEY);var a=e.jumpChipKeys=new Set;a.add(o.ARROW_UP_KEY),a.add(o.ARROW_DOWN_KEY),a.add(o.HOME_KEY),a.add(o.END_KEY)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var r={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",ROOT:"mdc-list"},i={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+r.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+r.LIST_ITEM_CLASS+" a\n  ",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+r.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+r.LIST_ITEM_CLASS+" a,\n    ."+r.LIST_ITEM_CLASS+' input[type="radio"]:not(:disabled),\n    .'+r.LIST_ITEM_CLASS+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]'};e.strings=i,e.cssClasses=r,e.numbers={UNSET_INDEX:-1}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCListFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(10);var s=["input","button","textarea","select"];
/**
                                                                          * @license
                                                                          * Copyright 2018 Google Inc.
                                                                          *
                                                                          * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                          * of this software and associated documentation files (the "Software"), to deal
                                                                          * in the Software without restriction, including without limitation the rights
                                                                          * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                          * copies of the Software, and to permit persons to whom the Software is
                                                                          * furnished to do so, subject to the following conditions:
                                                                          *
                                                                          * The above copyright notice and this permission notice shall be included in
                                                                          * all copies or substantial portions of the Software.
                                                                          *
                                                                          * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                          * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                          * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                          * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                          * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                          * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                          * THE SOFTWARE.
                                                                          */var a=function(t){function e(n){var i=t.call(this,r.__assign({},e.defaultAdapter,n))||this;return i.wrapFocus_=!1,i.isVertical_=!0,i.isSingleSelectionList_=!1,i.selectedIndex_=o.numbers.UNSET_INDEX,i.focusedItemIndex_=o.numbers.UNSET_INDEX,i.useActivatedClass_=!1,i.ariaCurrentAttrValue_=null,i.isCheckboxList_=!1,i.isRadioList_=!1,i}return r.__extends(e,t),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return o.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){}}},enumerable:!0,configurable:!0}),e.prototype.layout=function(){0!==this.adapter_.getListItemCount()&&(this.adapter_.hasCheckboxAtIndex(0)?this.isCheckboxList_=!0:this.adapter_.hasRadioAtIndex(0)&&(this.isRadioList_=!0))},e.prototype.setWrapFocus=function(t){this.wrapFocus_=t},e.prototype.setVerticalOrientation=function(t){this.isVertical_=t},e.prototype.setSingleSelection=function(t){this.isSingleSelectionList_=t},e.prototype.setUseActivatedClass=function(t){this.useActivatedClass_=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex_},e.prototype.setSelectedIndex=function(t){this.isIndexValid_(t)&&(this.isCheckboxList_?this.setCheckboxAtIndex_(t):this.isRadioList_?this.setRadioAtIndex_(t):this.setSingleSelectionAtIndex_(t))},e.prototype.handleFocusIn=function(t,e){e>=0&&this.adapter_.setTabIndexForListItemChildren(e,"0")},e.prototype.handleFocusOut=function(t,e){var n=this;e>=0&&this.adapter_.setTabIndexForListItemChildren(e,"-1"),setTimeout((function(){n.adapter_.isFocusInsideList()||n.setTabindexToFirstSelectedItem_()}),0)},e.prototype.handleKeydown=function(t,e,n){var r="ArrowLeft"===t.key||37===t.keyCode,i="ArrowUp"===t.key||38===t.keyCode,o="ArrowRight"===t.key||39===t.keyCode,s="ArrowDown"===t.key||40===t.keyCode,a="Home"===t.key||36===t.keyCode,u="End"===t.key||35===t.keyCode,c="Enter"===t.key||13===t.keyCode,l="Space"===t.key||32===t.keyCode;if(this.adapter_.isRootFocused())i||u?(t.preventDefault(),this.focusLastElement()):(s||a)&&(t.preventDefault(),this.focusFirstElement());else{var d=this.adapter_.getFocusedElementIndex();if(!(-1===d&&(d=n)<0)){var f;if(this.isVertical_&&s||!this.isVertical_&&o)this.preventDefaultEvent_(t),f=this.focusNextElement(d);else if(this.isVertical_&&i||!this.isVertical_&&r)this.preventDefaultEvent_(t),f=this.focusPrevElement(d);else if(a)this.preventDefaultEvent_(t),f=this.focusFirstElement();else if(u)this.preventDefaultEvent_(t),f=this.focusLastElement();else if((c||l)&&e){var _=t.target;if(_&&"A"===_.tagName&&c)return;this.preventDefaultEvent_(t),this.isSelectableList_()&&this.setSelectedIndexOnAction_(d),this.adapter_.notifyAction(d)}this.focusedItemIndex_=d,void 0!==f&&(this.setTabindexAtIndex_(f),this.focusedItemIndex_=f)}}},e.prototype.handleClick=function(t,e){t!==o.numbers.UNSET_INDEX&&(this.isSelectableList_()&&this.setSelectedIndexOnAction_(t,e),this.adapter_.notifyAction(t),this.setTabindexAtIndex_(t),this.focusedItemIndex_=t)},e.prototype.focusNextElement=function(t){var e=t+1;if(e>=this.adapter_.getListItemCount()){if(!this.wrapFocus_)return t;e=0}return this.adapter_.focusItemAtIndex(e),e},e.prototype.focusPrevElement=function(t){var e=t-1;if(e<0){if(!this.wrapFocus_)return t;e=this.adapter_.getListItemCount()-1}return this.adapter_.focusItemAtIndex(e),e},e.prototype.focusFirstElement=function(){return this.adapter_.focusItemAtIndex(0),0},e.prototype.focusLastElement=function(){var t=this.adapter_.getListItemCount()-1;return this.adapter_.focusItemAtIndex(t),t},e.prototype.setEnabled=function(t,e){this.isIndexValid_(t)&&(e?(this.adapter_.removeClassForElementIndex(t,o.cssClasses.LIST_ITEM_DISABLED_CLASS),this.adapter_.setAttributeForElementIndex(t,o.strings.ARIA_DISABLED,"false")):(this.adapter_.addClassForElementIndex(t,o.cssClasses.LIST_ITEM_DISABLED_CLASS),this.adapter_.setAttributeForElementIndex(t,o.strings.ARIA_DISABLED,"true")))},e.prototype.preventDefaultEvent_=function(t){var e=(""+t.target.tagName).toLowerCase();-1===s.indexOf(e)&&t.preventDefault()},e.prototype.setSingleSelectionAtIndex_=function(t){if(this.selectedIndex_!==t){var e=o.cssClasses.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass_&&(e=o.cssClasses.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex_!==o.numbers.UNSET_INDEX&&this.adapter_.removeClassForElementIndex(this.selectedIndex_,e),this.adapter_.addClassForElementIndex(t,e),this.setAriaForSingleSelectionAtIndex_(t),this.selectedIndex_=t}},e.prototype.setAriaForSingleSelectionAtIndex_=function(t){this.selectedIndex_===o.numbers.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter_.getAttributeForElementIndex(t,o.strings.ARIA_CURRENT));var e=null!==this.ariaCurrentAttrValue_,n=e?o.strings.ARIA_CURRENT:o.strings.ARIA_SELECTED;this.selectedIndex_!==o.numbers.UNSET_INDEX&&this.adapter_.setAttributeForElementIndex(this.selectedIndex_,n,"false");var r=e?this.ariaCurrentAttrValue_:"true";this.adapter_.setAttributeForElementIndex(t,n,r)},e.prototype.setRadioAtIndex_=function(t){this.adapter_.setCheckedCheckboxOrRadioAtIndex(t,!0),this.selectedIndex_!==o.numbers.UNSET_INDEX&&this.adapter_.setAttributeForElementIndex(this.selectedIndex_,o.strings.ARIA_CHECKED,"false"),this.adapter_.setAttributeForElementIndex(t,o.strings.ARIA_CHECKED,"true"),this.selectedIndex_=t},e.prototype.setCheckboxAtIndex_=function(t){for(var e=0;e<this.adapter_.getListItemCount();e++){var n=!1;t.indexOf(e)>=0&&(n=!0),this.adapter_.setCheckedCheckboxOrRadioAtIndex(e,n),this.adapter_.setAttributeForElementIndex(e,o.strings.ARIA_CHECKED,n?"true":"false")}this.selectedIndex_=t},e.prototype.setTabindexAtIndex_=function(t){this.focusedItemIndex_===o.numbers.UNSET_INDEX&&0!==t?this.adapter_.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex_>=0&&this.focusedItemIndex_!==t&&this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_,"tabindex","-1"),this.adapter_.setAttributeForElementIndex(t,"tabindex","0")},e.prototype.isSelectableList_=function(){return this.isSingleSelectionList_||this.isCheckboxList_||this.isRadioList_},e.prototype.setTabindexToFirstSelectedItem_=function(){var t=0;this.isSelectableList_()&&("number"==typeof this.selectedIndex_&&this.selectedIndex_!==o.numbers.UNSET_INDEX?t=this.selectedIndex_:this.selectedIndex_ instanceof Array&&this.selectedIndex_.length>0&&(t=this.selectedIndex_.reduce((function(t,e){return Math.min(t,e)})))),this.setTabindexAtIndex_(t)},e.prototype.isIndexValid_=function(t){var e=this;if(t instanceof Array){if(!this.isCheckboxList_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return 0===t.length||t.some((function(t){return e.isIndexInRange_(t)}))}if("number"==typeof t){if(this.isCheckboxList_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange_(t)}return!1},e.prototype.isIndexInRange_=function(t){var e=this.adapter_.getListItemCount();return t>=0&&t<e},e.prototype.setSelectedIndexOnAction_=function(t,e){void 0===e&&(e=!0),this.adapter_.listItemAtIndexHasClass(t,o.cssClasses.LIST_ITEM_DISABLED_CLASS)||(this.isCheckboxList_?this.toggleCheckboxAtIndex_(t,e):this.setSelectedIndex(t))},e.prototype.toggleCheckboxAtIndex_=function(t,e){var n=this.adapter_.isCheckboxCheckedAtIndex(t);e&&(n=!n,this.adapter_.setCheckedCheckboxOrRadioAtIndex(t,n)),this.adapter_.setAttributeForElementIndex(t,o.strings.ARIA_CHECKED,n?"true":"false");var r=this.selectedIndex_===o.numbers.UNSET_INDEX?[]:this.selectedIndex_.slice();n?r.push(t):r=r.filter((function(e){return e!==t})),this.selectedIndex_=r},e}(i.MDCFoundation);e.MDCListFoundation=a,e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var r;!function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"}(r||(e.DefaultFocusState=r={})),e.cssClasses={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},e.strings={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list",SELECTED_EVENT:"MDCMenu:selected"},e.numbers={FOCUS_ROOT_INDEX:-1},e.DefaultFocusState=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},e.strings={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},e.numbers={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getCorrectPropertyName=function(t,e){if(o(t)&&e in r){var n=t.document.createElement("div"),i=r[e],s=i.standard,a=i.prefixed;return s in n.style?s:a}return e},e.getCorrectEventName=function(t,e){if(o(t)&&e in i){var n=t.document.createElement("div"),r=i[e],s=r.standard,a=r.prefixed;return r.cssProperty in n.style?s:a}return e};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var r={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},i={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function o(t){return Boolean(t.document)&&"function"==typeof t.document.createElement}},function(t,e,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.supportsCssVariables=function(t,e){void 0===e&&(e=!1);var n=t.CSS,i=r;if("boolean"==typeof r&&!e)return r;if(!n||"function"!=typeof n.supports)return!1;var o=n.supports("--css-vars","yes"),s=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");i=!(!o&&!s)&&!function(t){var e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.head.appendChild(n);var r=t.getComputedStyle(n),i=null!==r&&"solid"===r.borderTopStyle;n.parentNode&&n.parentNode.removeChild(n);return i}(t);e||(r=i);return i},e.getNormalizedEventCoords=function(t,e,n){if(!t)return{x:0,y:0};var r,i,o=e.x,s=e.y,a=o+n.left,u=s+n.top;if("touchstart"===t.type){var c=t;r=c.changedTouches[0].pageX-a,i=c.changedTouches[0].pageY-u}else{var l=t;r=l.pageX-a,i=l.pageY-u}return{x:r,y:i}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCChipFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(9);var s={bottom:0,height:0,left:0,right:0,top:0,width:0},a=function(t){function e(n){var i=t.call(this,r.__assign({},e.defaultAdapter,n))||this;return i.shouldRemoveOnTrailingIconClick_=!0,i}return r.__extends(e,t),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},addClassToLeadingIcon:function(){},eventTargetHasClass:function(){return!1},focusPrimaryAction:function(){},focusTrailingAction:function(){},getCheckmarkBoundingClientRect:function(){return s},getComputedStyleValue:function(){return""},getRootBoundingClientRect:function(){return s},hasClass:function(){return!1},hasLeadingIcon:function(){return!1},hasTrailingAction:function(){return!1},isRTL:function(){return!1},notifyInteraction:function(){},notifyNavigation:function(){},notifyRemoval:function(){},notifySelection:function(){},notifyTrailingIconInteraction:function(){},removeClass:function(){},removeClassFromLeadingIcon:function(){},setPrimaryActionAttr:function(){},setStyleProperty:function(){},setTrailingActionAttr:function(){}}},enumerable:!0,configurable:!0}),e.prototype.isSelected=function(){return this.adapter_.hasClass(o.cssClasses.SELECTED)},e.prototype.setSelected=function(t){this.setSelected_(t),this.notifySelection_(t)},e.prototype.setSelectedFromChipSet=function(t,e){this.setSelected_(t),e&&this.notifyIgnoredSelection_(t)},e.prototype.getShouldRemoveOnTrailingIconClick=function(){return this.shouldRemoveOnTrailingIconClick_},e.prototype.setShouldRemoveOnTrailingIconClick=function(t){this.shouldRemoveOnTrailingIconClick_=t},e.prototype.getDimensions=function(){var t=this,e=function(){return t.adapter_.getRootBoundingClientRect()};if(!this.adapter_.hasLeadingIcon()){var n=t.adapter_.getCheckmarkBoundingClientRect();if(n){var r=e();return{bottom:r.bottom,height:r.height,left:r.left,right:r.right,top:r.top,width:r.width+n.height}}}return e()},e.prototype.beginExit=function(){this.adapter_.addClass(o.cssClasses.CHIP_EXIT)},e.prototype.handleInteraction=function(t){this.shouldHandleInteraction_(t)&&(this.adapter_.notifyInteraction(),this.focusPrimaryAction_())},e.prototype.handleTransitionEnd=function(t){var e=this,n=this.adapter_.eventTargetHasClass(t.target,o.cssClasses.CHIP_EXIT),r="width"===t.propertyName,i="opacity"===t.propertyName;if(n&&i){var s=this.adapter_.getComputedStyleValue("width");requestAnimationFrame((function(){e.adapter_.setStyleProperty("width",s),e.adapter_.setStyleProperty("padding","0"),e.adapter_.setStyleProperty("margin","0"),requestAnimationFrame((function(){e.adapter_.setStyleProperty("width","0")}))}))}else if(n&&r&&(this.removeFocus_(),this.adapter_.notifyRemoval()),i){var a=this.adapter_.eventTargetHasClass(t.target,o.cssClasses.LEADING_ICON)&&this.adapter_.hasClass(o.cssClasses.SELECTED),u=this.adapter_.eventTargetHasClass(t.target,o.cssClasses.CHECKMARK)&&!this.adapter_.hasClass(o.cssClasses.SELECTED);return a?this.adapter_.addClassToLeadingIcon(o.cssClasses.HIDDEN_LEADING_ICON):u?this.adapter_.removeClassFromLeadingIcon(o.cssClasses.HIDDEN_LEADING_ICON):void 0}},e.prototype.handleTrailingIconInteraction=function(t){this.shouldHandleInteraction_(t)&&(this.adapter_.notifyTrailingIconInteraction(),this.removeChip_(t))},e.prototype.handleKeydown=function(t){if(this.shouldRemoveChip_(t))return this.removeChip_(t);var e=t.key;o.navigationKeys.has(e)&&(t.preventDefault(),this.focusNextAction_(t))},e.prototype.removeFocus=function(){this.adapter_.setPrimaryActionAttr(o.strings.TAB_INDEX,"-1"),this.adapter_.setTrailingActionAttr(o.strings.TAB_INDEX,"-1")},e.prototype.focusPrimaryAction=function(){this.focusPrimaryAction_()},e.prototype.focusTrailingAction=function(){if(!this.adapter_.hasTrailingAction())return this.focusPrimaryAction_();this.focusTrailingAction_()},e.prototype.focusNextAction_=function(t){var e=t.key,n=this.adapter_.hasTrailingAction(),r=this.getDirection_(e),i=this.getEvtSource_(t);if(!o.jumpChipKeys.has(e)&&n)return i===o.EventSource.PRIMARY&&r===o.Direction.RIGHT?this.focusTrailingAction_():i===o.EventSource.TRAILING&&r===o.Direction.LEFT?this.focusPrimaryAction_():void this.adapter_.notifyNavigation(e,o.EventSource.NONE);this.adapter_.notifyNavigation(e,i)},e.prototype.getEvtSource_=function(t){return this.adapter_.eventTargetHasClass(t.target,o.cssClasses.PRIMARY_ACTION)?o.EventSource.PRIMARY:this.adapter_.eventTargetHasClass(t.target,o.cssClasses.TRAILING_ACTION)?o.EventSource.TRAILING:o.EventSource.NONE},e.prototype.getDirection_=function(t){var e=this.adapter_.isRTL();return t===o.strings.ARROW_LEFT_KEY&&!e||t===o.strings.ARROW_RIGHT_KEY&&e?o.Direction.LEFT:o.Direction.RIGHT},e.prototype.focusPrimaryAction_=function(){this.adapter_.setPrimaryActionAttr(o.strings.TAB_INDEX,"0"),this.adapter_.focusPrimaryAction(),this.adapter_.setTrailingActionAttr(o.strings.TAB_INDEX,"-1")},e.prototype.focusTrailingAction_=function(){this.adapter_.setTrailingActionAttr(o.strings.TAB_INDEX,"0"),this.adapter_.focusTrailingAction(),this.adapter_.setPrimaryActionAttr(o.strings.TAB_INDEX,"-1")},e.prototype.removeFocus_=function(){this.adapter_.setTrailingActionAttr(o.strings.TAB_INDEX,"-1"),this.adapter_.setPrimaryActionAttr(o.strings.TAB_INDEX,"-1")},e.prototype.removeChip_=function(t){t.stopPropagation(),this.shouldRemoveOnTrailingIconClick_&&this.beginExit()},e.prototype.shouldHandleInteraction_=function(t){if("click"===t.type)return!0;var e=t;return e.key===o.strings.ENTER_KEY||e.key===o.strings.SPACEBAR_KEY},e.prototype.shouldRemoveChip_=function(t){return this.adapter_.hasClass(o.cssClasses.DELETABLE)&&(t.key===o.strings.BACKSPACE_KEY||t.key===o.strings.DELETE_KEY)},e.prototype.setSelected_=function(t){t?(this.adapter_.addClass(o.cssClasses.SELECTED),this.adapter_.setPrimaryActionAttr(o.strings.ARIA_CHECKED,"true")):(this.adapter_.removeClass(o.cssClasses.SELECTED),this.adapter_.setPrimaryActionAttr(o.strings.ARIA_CHECKED,"false"))},e.prototype.notifySelection_=function(t){this.adapter_.notifySelection(t,!1)},e.prototype.notifyIgnoredSelection_=function(t){this.adapter_.notifySelection(t,!0)},e}(i.MDCFoundation);
/**
    * @license
    * Copyright 2016 Google Inc.
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to deal
    * in the Software without restriction, including without limitation the rights
    * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    * copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    * THE SOFTWARE.
    */e.MDCChipFoundation=a,e.default=a},function(t,e,n){"use strict";var r,i,o=n(99),s=n(100),a=(i=[],{activateTrap:function(t){if(i.length>0){var e=i[i.length-1];e!==t&&e.pause()}var n=i.indexOf(t);-1===n?i.push(t):(i.splice(n,1),i.push(t))},deactivateTrap:function(t){var e=i.indexOf(t);-1!==e&&i.splice(e,1),i.length>0&&i[i.length-1].unpause()}});function u(t){return setTimeout(t,0)}t.exports=function(t,e){var n=document,i="string"==typeof t?n.querySelector(t):t,c=s({returnFocusOnDeactivate:!0,escapeDeactivates:!0},e),l={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},d={activate:function(t){if(l.active)return;v(),l.active=!0,l.paused=!1,l.nodeFocusedBeforeActivation=n.activeElement;var e=t&&t.onActivate?t.onActivate:c.onActivate;e&&e();return _(),d},deactivate:f,pause:function(){if(l.paused||!l.active)return;l.paused=!0,p()},unpause:function(){if(!l.paused||!l.active)return;l.paused=!1,v(),_()}};return d;function f(t){if(l.active){clearTimeout(r),p(),l.active=!1,l.paused=!1,a.deactivateTrap(d);var e=t&&void 0!==t.onDeactivate?t.onDeactivate:c.onDeactivate;return e&&e(),(t&&void 0!==t.returnFocus?t.returnFocus:c.returnFocusOnDeactivate)&&u((function(){var t;b((t=l.nodeFocusedBeforeActivation,h("setReturnFocus")||t))})),d}}function _(){if(l.active)return a.activateTrap(d),r=u((function(){b(C())})),n.addEventListener("focusin",m,!0),n.addEventListener("mousedown",y,{capture:!0,passive:!1}),n.addEventListener("touchstart",y,{capture:!0,passive:!1}),n.addEventListener("click",E,{capture:!0,passive:!1}),n.addEventListener("keydown",g,{capture:!0,passive:!1}),d}function p(){if(l.active)return n.removeEventListener("focusin",m,!0),n.removeEventListener("mousedown",y,!0),n.removeEventListener("touchstart",y,!0),n.removeEventListener("click",E,!0),n.removeEventListener("keydown",g,!0),d}function h(t){var e=c[t],r=e;if(!e)return null;if("string"==typeof e&&!(r=n.querySelector(e)))throw new Error("`"+t+"` refers to no known node");if("function"==typeof e&&!(r=e()))throw new Error("`"+t+"` did not return a node");return r}function C(){var t;if(!(t=null!==h("initialFocus")?h("initialFocus"):i.contains(n.activeElement)?n.activeElement:l.firstTabbableNode||h("fallbackFocus")))throw new Error("Your focus-trap needs to have at least one focusable element");return t}function y(t){i.contains(t.target)||(c.clickOutsideDeactivates?f({returnFocus:!o.isFocusable(t.target)}):c.allowOutsideClick&&c.allowOutsideClick(t)||t.preventDefault())}function m(t){i.contains(t.target)||t.target instanceof Document||(t.stopImmediatePropagation(),b(l.mostRecentlyFocusedNode||C()))}function g(t){if(!1!==c.escapeDeactivates&&function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t))return t.preventDefault(),void f();(function(t){return"Tab"===t.key||9===t.keyCode})(t)&&function(t){if(v(),t.shiftKey&&t.target===l.firstTabbableNode)return t.preventDefault(),void b(l.lastTabbableNode);if(!t.shiftKey&&t.target===l.lastTabbableNode)t.preventDefault(),b(l.firstTabbableNode)}(t)}function E(t){c.clickOutsideDeactivates||i.contains(t.target)||c.allowOutsideClick&&c.allowOutsideClick(t)||(t.preventDefault(),t.stopImmediatePropagation())}function v(){var t=o(i);l.firstTabbableNode=t[0]||C(),l.lastTabbableNode=t[t.length-1]||C()}function b(t){t!==n.activeElement&&(t&&t.focus?(t.focus(),l.mostRecentlyFocusedNode=t,function(t){return t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select}(t)&&t.select()):b(C()))}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCList=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(2),o=n(4),s=n(10),a=n(11);var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),Object.defineProperty(e.prototype,"vertical",{set:function(t){this.foundation_.setVerticalOrientation(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"listElements",{get:function(){return[].slice.call(this.root_.querySelectorAll("."+s.cssClasses.LIST_ITEM_CLASS))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"wrapFocus",{set:function(t){this.foundation_.setWrapFocus(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"singleSelection",{set:function(t){this.foundation_.setSingleSelection(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectedIndex",{get:function(){return this.foundation_.getSelectedIndex()},set:function(t){this.foundation_.setSelectedIndex(t)},enumerable:!0,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){this.handleClick_=this.handleClickEvent_.bind(this),this.handleKeydown_=this.handleKeydownEvent_.bind(this),this.focusInEventListener_=this.handleFocusInEvent_.bind(this),this.focusOutEventListener_=this.handleFocusOutEvent_.bind(this),this.listen("keydown",this.handleKeydown_),this.listen("click",this.handleClick_),this.listen("focusin",this.focusInEventListener_),this.listen("focusout",this.focusOutEventListener_),this.layout(),this.initializeListType()},e.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown_),this.unlisten("click",this.handleClick_),this.unlisten("focusin",this.focusInEventListener_),this.unlisten("focusout",this.focusOutEventListener_)},e.prototype.layout=function(){var t=this.root_.getAttribute(s.strings.ARIA_ORIENTATION);this.vertical=t!==s.strings.ARIA_ORIENTATION_HORIZONTAL,[].slice.call(this.root_.querySelectorAll(".mdc-list-item:not([tabindex])")).forEach((function(t){t.setAttribute("tabindex","-1")})),[].slice.call(this.root_.querySelectorAll(s.strings.FOCUSABLE_CHILD_ELEMENTS)).forEach((function(t){return t.setAttribute("tabindex","-1")})),this.foundation_.layout()},e.prototype.initializeListType=function(){var t=this,e=this.root_.querySelectorAll(s.strings.ARIA_ROLE_CHECKBOX_SELECTOR),n=this.root_.querySelector("\n      ."+s.cssClasses.LIST_ITEM_ACTIVATED_CLASS+",\n      ."+s.cssClasses.LIST_ITEM_SELECTED_CLASS+"\n    "),r=this.root_.querySelector(s.strings.ARIA_CHECKED_RADIO_SELECTOR);if(e.length){var i=this.root_.querySelectorAll(s.strings.ARIA_CHECKED_CHECKBOX_SELECTOR);this.selectedIndex=[].map.call(i,(function(e){return t.listElements.indexOf(e)}))}else n?(n.classList.contains(s.cssClasses.LIST_ITEM_ACTIVATED_CLASS)&&this.foundation_.setUseActivatedClass(!0),this.singleSelection=!0,this.selectedIndex=this.listElements.indexOf(n)):r&&(this.selectedIndex=this.listElements.indexOf(r))},e.prototype.setEnabled=function(t,e){this.foundation_.setEnabled(t,e)},e.prototype.getDefaultFoundation=function(){var t=this,e={addClassForElementIndex:function(e,n){var r=t.listElements[e];r&&r.classList.add(n)},focusItemAtIndex:function(e){var n=t.listElements[e];n&&n.focus()},getAttributeForElementIndex:function(e,n){return t.listElements[e].getAttribute(n)},getFocusedElementIndex:function(){return t.listElements.indexOf(document.activeElement)},getListItemCount:function(){return t.listElements.length},hasCheckboxAtIndex:function(e){return!!t.listElements[e].querySelector(s.strings.CHECKBOX_SELECTOR)},hasRadioAtIndex:function(e){return!!t.listElements[e].querySelector(s.strings.RADIO_SELECTOR)},isCheckboxCheckedAtIndex:function(e){return t.listElements[e].querySelector(s.strings.CHECKBOX_SELECTOR).checked},isFocusInsideList:function(){return t.root_.contains(document.activeElement)},isRootFocused:function(){return document.activeElement===t.root_},listItemAtIndexHasClass:function(e,n){return t.listElements[e].classList.contains(n)},notifyAction:function(e){t.emit(s.strings.ACTION_EVENT,{index:e},!0)},removeClassForElementIndex:function(e,n){var r=t.listElements[e];r&&r.classList.remove(n)},setAttributeForElementIndex:function(e,n,r){var i=t.listElements[e];i&&i.setAttribute(n,r)},setCheckedCheckboxOrRadioAtIndex:function(e,n){var r=t.listElements[e].querySelector(s.strings.CHECKBOX_RADIO_SELECTOR);r.checked=n;var i=document.createEvent("Event");i.initEvent("change",!0,!0),r.dispatchEvent(i)},setTabIndexForListItemChildren:function(e,n){var r=t.listElements[e];[].slice.call(r.querySelectorAll(s.strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX)).forEach((function(t){return t.setAttribute("tabindex",n)}))}};return new a.MDCListFoundation(e)},e.prototype.getListItemIndex_=function(t){var e=t.target,n=(0,o.closest)(e,"."+s.cssClasses.LIST_ITEM_CLASS+", ."+s.cssClasses.ROOT);return n&&(0,o.matches)(n,"."+s.cssClasses.LIST_ITEM_CLASS)?this.listElements.indexOf(n):-1},e.prototype.handleFocusInEvent_=function(t){var e=this.getListItemIndex_(t);this.foundation_.handleFocusIn(t,e)},e.prototype.handleFocusOutEvent_=function(t){var e=this.getListItemIndex_(t);this.foundation_.handleFocusOut(t,e)},e.prototype.handleKeydownEvent_=function(t){var e=this.getListItemIndex_(t),n=t.target;this.foundation_.handleKeydown(t,n.classList.contains(s.cssClasses.LIST_ITEM_CLASS),e)},e.prototype.handleClickEvent_=function(t){var e=this.getListItemIndex_(t),n=t.target,r=!(0,o.matches)(n,s.strings.CHECKBOX_RADIO_SELECTOR);this.foundation_.handleClick(e,r)},e}(i.MDCComponent);
/**
                             * @license
                             * Copyright 2018 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCList=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCDismissibleDrawerFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(41);var s=function(t){function e(n){var i=t.call(this,r.__assign({},e.defaultAdapter,n))||this;return i.animationFrame_=0,i.animationTimer_=0,i}return r.__extends(e,t),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.animationFrame_&&cancelAnimationFrame(this.animationFrame_),this.animationTimer_&&clearTimeout(this.animationTimer_)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter_.addClass(o.cssClasses.OPEN),this.adapter_.addClass(o.cssClasses.ANIMATE),this.runNextAnimationFrame_((function(){t.adapter_.addClass(o.cssClasses.OPENING)})),this.adapter_.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter_.addClass(o.cssClasses.CLOSING)},e.prototype.isOpen=function(){return this.adapter_.hasClass(o.cssClasses.OPEN)},e.prototype.isOpening=function(){return this.adapter_.hasClass(o.cssClasses.OPENING)||this.adapter_.hasClass(o.cssClasses.ANIMATE)},e.prototype.isClosing=function(){return this.adapter_.hasClass(o.cssClasses.CLOSING)},e.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},e.prototype.handleTransitionEnd=function(t){var e=o.cssClasses.OPENING,n=o.cssClasses.CLOSING,r=o.cssClasses.OPEN,i=o.cssClasses.ANIMATE,s=o.cssClasses.ROOT;this.isElement_(t.target)&&this.adapter_.elementHasClass(t.target,s)&&(this.isClosing()?(this.adapter_.removeClass(r),this.closed_(),this.adapter_.restoreFocus(),this.adapter_.notifyClose()):(this.adapter_.focusActiveNavigationItem(),this.opened_(),this.adapter_.notifyOpen()),this.adapter_.removeClass(i),this.adapter_.removeClass(e),this.adapter_.removeClass(n))},e.prototype.opened_=function(){},e.prototype.closed_=function(){},e.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)}))},e.prototype.isElement_=function(t){return Boolean(t.classList)},e}(i.MDCFoundation);
/**
                               * @license
                               * Copyright 2018 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCDismissibleDrawerFoundation=s,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCMenuSurfaceFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(8);var s=function(t){function e(n){var i=t.call(this,r.__assign({},e.defaultAdapter,n))||this;return i.isOpen_=!1,i.isQuickOpen_=!1,i.isHoistedElement_=!1,i.isFixedPosition_=!1,i.openAnimationEndTimerId_=0,i.closeAnimationEndTimerId_=0,i.animationRequestId_=0,i.anchorCorner_=o.Corner.TOP_START,i.anchorMargin_={top:0,right:0,bottom:0,left:0},i.position_={x:0,y:0},i}return r.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return o.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return o.Corner},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=e.cssClasses,n=t.ROOT,r=t.OPEN;if(!this.adapter_.hasClass(n))throw new Error(n+" class required in root element.");this.adapter_.hasClass(r)&&(this.isOpen_=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId_),clearTimeout(this.closeAnimationEndTimerId_),cancelAnimationFrame(this.animationRequestId_)},e.prototype.setAnchorCorner=function(t){this.anchorCorner_=t},e.prototype.setAnchorMargin=function(t){this.anchorMargin_.top=t.top||0,this.anchorMargin_.right=t.right||0,this.anchorMargin_.bottom=t.bottom||0,this.anchorMargin_.left=t.left||0},e.prototype.setIsHoisted=function(t){this.isHoistedElement_=t},e.prototype.setFixedPosition=function(t){this.isFixedPosition_=t},e.prototype.setAbsolutePosition=function(t,e){this.position_.x=this.isFinite_(t)?t:0,this.position_.y=this.isFinite_(e)?e:0},e.prototype.setQuickOpen=function(t){this.isQuickOpen_=t},e.prototype.isOpen=function(){return this.isOpen_},e.prototype.open=function(){var t=this;this.adapter_.saveFocus(),this.isQuickOpen_||this.adapter_.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId_=requestAnimationFrame((function(){t.adapter_.addClass(e.cssClasses.OPEN),t.dimensions_=t.adapter_.getInnerDimensions(),t.autoPosition_(),t.isQuickOpen_?t.adapter_.notifyOpen():t.openAnimationEndTimerId_=setTimeout((function(){t.openAnimationEndTimerId_=0,t.adapter_.removeClass(e.cssClasses.ANIMATING_OPEN),t.adapter_.notifyOpen()}),o.numbers.TRANSITION_OPEN_DURATION)})),this.isOpen_=!0},e.prototype.close=function(t){var n=this;void 0===t&&(t=!1),this.isQuickOpen_||this.adapter_.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame((function(){n.adapter_.removeClass(e.cssClasses.OPEN),n.isQuickOpen_?n.adapter_.notifyClose():n.closeAnimationEndTimerId_=setTimeout((function(){n.closeAnimationEndTimerId_=0,n.adapter_.removeClass(e.cssClasses.ANIMATING_CLOSED),n.adapter_.notifyClose()}),o.numbers.TRANSITION_CLOSE_DURATION)})),this.isOpen_=!1,t||this.maybeRestoreFocus_()},e.prototype.handleBodyClick=function(t){var e=t.target;this.adapter_.isElementInContainer(e)||this.close()},e.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},e.prototype.autoPosition_=function(){var t;this.measurements_=this.getAutoLayoutMeasurements_();var e=this.getOriginCorner_(),n=this.getMenuSurfaceMaxHeight_(e),r=this.hasBit_(e,o.CornerBit.BOTTOM)?"bottom":"top",i=this.hasBit_(e,o.CornerBit.RIGHT)?"right":"left",s=this.getHorizontalOriginOffset_(e),a=this.getVerticalOriginOffset_(e),u=this.measurements_,c=u.anchorSize,l=u.surfaceSize,d=((t={})[i]=s,t[r]=a,t);c.width/l.width>o.numbers.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(i="center"),(this.isHoistedElement_||this.isFixedPosition_)&&this.adjustPositionForHoistedElement_(d),this.adapter_.setTransformOrigin(i+" "+r),this.adapter_.setPosition(d),this.adapter_.setMaxHeight(n?n+"px":"")},e.prototype.getAutoLayoutMeasurements_=function(){var t=this.adapter_.getAnchorDimensions(),e=this.adapter_.getBodyDimensions(),n=this.adapter_.getWindowDimensions(),r=this.adapter_.getWindowScroll();return t||(t={top:this.position_.y,right:this.position_.x,bottom:this.position_.y,left:this.position_.x,width:0,height:0}),{anchorSize:t,bodySize:e,surfaceSize:this.dimensions_,viewportDistance:{top:t.top,right:n.width-t.right,bottom:n.height-t.bottom,left:t.left},viewportSize:n,windowScroll:r}},e.prototype.getOriginCorner_=function(){var t=o.Corner.TOP_LEFT,e=this.measurements_,n=e.viewportDistance,r=e.anchorSize,i=e.surfaceSize,s=this.hasBit_(this.anchorCorner_,o.CornerBit.BOTTOM),a=s?n.top+r.height+this.anchorMargin_.bottom:n.top+this.anchorMargin_.top,u=s?n.bottom-this.anchorMargin_.bottom:n.bottom+r.height-this.anchorMargin_.top,c=i.height-a,l=i.height-u;l>0&&c<l&&(t=this.setBit_(t,o.CornerBit.BOTTOM));var d=this.adapter_.isRtl(),f=this.hasBit_(this.anchorCorner_,o.CornerBit.FLIP_RTL),_=this.hasBit_(this.anchorCorner_,o.CornerBit.RIGHT),p=_&&!d||!_&&f&&d,h=p?n.left+r.width+this.anchorMargin_.right:n.left+this.anchorMargin_.left,C=p?n.right-this.anchorMargin_.right:n.right+r.width-this.anchorMargin_.left,y=i.width-h,m=i.width-C;return(y<0&&p&&d||_&&!p&&y<0||m>0&&y<m)&&(t=this.setBit_(t,o.CornerBit.RIGHT)),t},e.prototype.getMenuSurfaceMaxHeight_=function(t){var n=this.measurements_.viewportDistance,r=0,i=this.hasBit_(t,o.CornerBit.BOTTOM),s=this.hasBit_(this.anchorCorner_,o.CornerBit.BOTTOM),a=e.numbers.MARGIN_TO_EDGE;return i?(r=n.top+this.anchorMargin_.top-a,s||(r+=this.measurements_.anchorSize.height)):(r=n.bottom-this.anchorMargin_.bottom+this.measurements_.anchorSize.height-a,s&&(r-=this.measurements_.anchorSize.height)),r},e.prototype.getHorizontalOriginOffset_=function(t){var e=this.measurements_.anchorSize,n=this.hasBit_(t,o.CornerBit.RIGHT),r=this.hasBit_(this.anchorCorner_,o.CornerBit.RIGHT);if(n){var i=r?e.width-this.anchorMargin_.left:this.anchorMargin_.right;return this.isHoistedElement_||this.isFixedPosition_?i-(this.measurements_.viewportSize.width-this.measurements_.bodySize.width):i}return r?e.width-this.anchorMargin_.right:this.anchorMargin_.left},e.prototype.getVerticalOriginOffset_=function(t){var e=this.measurements_.anchorSize,n=this.hasBit_(t,o.CornerBit.BOTTOM),r=this.hasBit_(this.anchorCorner_,o.CornerBit.BOTTOM);return n?r?e.height-this.anchorMargin_.top:-this.anchorMargin_.bottom:r?e.height+this.anchorMargin_.bottom:this.anchorMargin_.top},e.prototype.adjustPositionForHoistedElement_=function(t){var e,n,i=this.measurements_,o=i.windowScroll,s=i.viewportDistance,a=Object.keys(t);try{for(var u=r.__values(a),c=u.next();!c.done;c=u.next()){var l=c.value,d=t[l]||0;d+=s[l],this.isFixedPosition_||("top"===l?d+=o.y:"bottom"===l?d-=o.y:"left"===l?d+=o.x:d-=o.x),t[l]=d}}catch(t){e={error:t}}finally{try{c&&!c.done&&(n=u.return)&&n.call(u)}finally{if(e)throw e.error}}},e.prototype.maybeRestoreFocus_=function(){var t=this.adapter_.isFocused(),e=document.activeElement&&this.adapter_.isElementInContainer(document.activeElement);(t||e)&&this.adapter_.restoreFocus()},e.prototype.hasBit_=function(t,e){return Boolean(t&e)},e.prototype.setBit_=function(t,e){return t|e},e.prototype.isFinite_=function(t){return"number"==typeof t&&isFinite(t)},e}(i.MDCFoundation);
/**
                               * @license
                               * Copyright 2018 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCMenuSurfaceFoundation=s,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var r={ACTIVATED:"mdc-select--activated",DISABLED:"mdc-select--disabled",FOCUSED:"mdc-select--focused",INVALID:"mdc-select--invalid",OUTLINED:"mdc-select--outlined",REQUIRED:"mdc-select--required",ROOT:"mdc-select",SELECTED_ITEM_CLASS:"mdc-list-item--selected",WITH_LEADING_ICON:"mdc-select--with-leading-icon"},i={ARIA_CONTROLS:"aria-controls",ARIA_SELECTED_ATTR:"aria-selected",CHANGE_EVENT:"MDCSelect:change",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-select__icon",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",MENU_SELECTOR:".mdc-select__menu",OUTLINE_SELECTOR:".mdc-notched-outline",SELECTED_ITEM_SELECTOR:"."+r.SELECTED_ITEM_CLASS,SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",SELECT_ANCHOR_SELECTOR:".mdc-select__anchor",VALUE_ATTR:"data-value"};e.cssClasses=r,e.strings=i,e.numbers={LABEL_SCALE:.75,UNSET_INDEX:-1}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={ACTIVE:"mdc-slider--active",DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",FOCUS:"mdc-slider--focus",HAS_TRACK_MARKER:"mdc-slider--display-markers",IN_TRANSIT:"mdc-slider--in-transit",IS_DISCRETE:"mdc-slider--discrete"},e.strings={ARIA_DISABLED:"aria-disabled",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",CHANGE_EVENT:"MDCSlider:change",INPUT_EVENT:"MDCSlider:input",PIN_VALUE_MARKER_SELECTOR:".mdc-slider__pin-value-marker",STEP_DATA_ATTR:"data-step",THUMB_CONTAINER_SELECTOR:".mdc-slider__thumb-container",TRACK_MARKER_CONTAINER_SELECTOR:".mdc-slider__track-marker-container",TRACK_SELECTOR:".mdc-slider__track"},e.numbers={PAGE_FACTOR:4}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var r=function(t){this.adapter_=t};e.MDCTabScrollerRTL=r,e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTabIndicatorFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(141);var s=function(t){function e(n){return t.call(this,r.__assign({},e.defaultAdapter,n))||this}return r.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!0,configurable:!0}),e.prototype.computeContentClientRect=function(){return this.adapter_.computeContentClientRect()},e}(i.MDCFoundation);
/**
                               * @license
                               * Copyright 2018 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCTabIndicatorFoundation=s,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTextFieldCharacterCounterFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(76);var s=function(t){function e(n){return t.call(this,r.__assign({},e.defaultAdapter,n))||this}return r.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{setContent:function(){}}},enumerable:!0,configurable:!0}),e.prototype.setCounterValue=function(t,e){t=Math.min(t,e),this.adapter_.setContent(t+" / "+e)},e}(i.MDCFoundation);
/**
                               * @license
                               * Copyright 2019 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCTextFieldCharacterCounterFoundation=s,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={DENSE:"mdc-text-field--dense",DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",FULLWIDTH:"mdc-text-field--fullwidth",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon"},e.strings={ARIA_CONTROLS:"aria-controls",ICON_SELECTOR:".mdc-text-field__icon",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline"},e.numbers={DENSE_LABEL_SCALE:.923,LABEL_SCALE:.75},e.VALIDATION_ATTR_WHITELIST=["pattern","min","max","required","step","minlength","maxlength"],e.ALWAYS_FLOAT_TYPES=["color","date","datetime-local","month","range","time","week"]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTextFieldHelperTextFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(79);var s=function(t){function e(n){return t.call(this,r.__assign({},e.defaultAdapter,n))||this}return r.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!0,configurable:!0}),e.prototype.setContent=function(t){this.adapter_.setContent(t)},e.prototype.setPersistent=function(t){t?this.adapter_.addClass(o.cssClasses.HELPER_TEXT_PERSISTENT):this.adapter_.removeClass(o.cssClasses.HELPER_TEXT_PERSISTENT)},e.prototype.setValidation=function(t){t?this.adapter_.addClass(o.cssClasses.HELPER_TEXT_VALIDATION_MSG):this.adapter_.removeClass(o.cssClasses.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter_.removeAttr(o.strings.ARIA_HIDDEN)},e.prototype.setValidity=function(t){var e=this.adapter_.hasClass(o.cssClasses.HELPER_TEXT_PERSISTENT),n=this.adapter_.hasClass(o.cssClasses.HELPER_TEXT_VALIDATION_MSG)&&!t;n?this.adapter_.setAttr(o.strings.ROLE,"alert"):this.adapter_.removeAttr(o.strings.ROLE),e||n||this.hide_()},e.prototype.hide_=function(){this.adapter_.setAttr(o.strings.ARIA_HIDDEN,"true")},e}(i.MDCFoundation);
/**
                               * @license
                               * Copyright 2017 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCTextFieldHelperTextFoundation=s,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTopAppBarFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(7),o=n(29);var s=0,a=function(t){function e(e){var n=t.call(this,e)||this;return n.wasDocked_=!0,n.isDockedShowing_=!0,n.currentAppBarOffsetTop_=0,n.isCurrentlyBeingResized_=!1,n.resizeThrottleId_=s,n.resizeDebounceId_=s,n.lastScrollPosition_=n.adapter_.getViewportScrollY(),n.topAppBarHeight_=n.adapter_.getTopAppBarHeight(),n}return r.__extends(e,t),e.prototype.destroy=function(){t.prototype.destroy.call(this),this.adapter_.setStyle("top","")},e.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter_.getViewportScrollY(),0),e=t-this.lastScrollPosition_;this.lastScrollPosition_=t,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=e,this.currentAppBarOffsetTop_>0?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())},e.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout((function(){t.resizeThrottleId_=s,t.throttledResizeHandler_()}),i.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout((function(){t.handleTargetScroll(),t.isCurrentlyBeingResized_=!1,t.resizeDebounceId_=s}),i.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate_=function(){var t=-this.topAppBarHeight_,e=this.currentAppBarOffsetTop_<0,n=this.currentAppBarOffsetTop_>t,r=e&&n;if(r)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0,!0;if(this.isDockedShowing_!==n)return this.isDockedShowing_=n,!0}return r},e.prototype.moveTopAppBar_=function(){if(this.checkForUpdate_()){var t=this.currentAppBarOffsetTop_;Math.abs(t)>=this.topAppBarHeight_&&(t=-i.numbers.MAX_TOP_APP_BAR_HEIGHT),this.adapter_.setStyle("top",t+"px")}},e.prototype.throttledResizeHandler_=function(){var t=this.adapter_.getTopAppBarHeight();this.topAppBarHeight_!==t&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-t,this.topAppBarHeight_=t),this.handleTargetScroll()},e}(o.MDCTopAppBarBaseFoundation);
/**
                        * @license
                        * Copyright 2018 Google Inc.
                        *
                        * Permission is hereby granted, free of charge, to any person obtaining a copy
                        * of this software and associated documentation files (the "Software"), to deal
                        * in the Software without restriction, including without limitation the rights
                        * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                        * copies of the Software, and to permit persons to whom the Software is
                        * furnished to do so, subject to the following conditions:
                        *
                        * The above copyright notice and this permission notice shall be included in
                        * all copies or substantial portions of the Software.
                        *
                        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                        * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                        * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                        * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                        * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                        * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                        * THE SOFTWARE.
                        */e.MDCTopAppBarFoundation=a,e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTopAppBarBaseFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(7);var s=function(t){function e(n){return t.call(this,r.__assign({},e.defaultAdapter,n))||this}return r.__extends(e,t),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return o.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!0,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter_.notifyNavigationIconClicked()},e}(i.MDCFoundation);
/**
                               * @license
                               * Copyright 2018 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCTopAppBarBaseFoundation=s,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var r=e.cssClasses={CELL:"mdc-data-table__cell",CELL_NUMERIC:"mdc-data-table__cell--numeric",CONTENT:"mdc-data-table__content",HEADER_ROW:"mdc-data-table__header-row",HEADER_ROW_CHECKBOX:"mdc-data-table__header-row-checkbox",ROOT:"mdc-data-table",ROW:"mdc-data-table__row",ROW_CHECKBOX:"mdc-data-table__row-checkbox",ROW_SELECTED:"mdc-data-table__row--selected"};e.strings={ARIA_SELECTED:"aria-selected",DATA_ROW_ID_ATTR:"data-row-id",HEADER_ROW_CHECKBOX_SELECTOR:"."+r.HEADER_ROW_CHECKBOX,ROW_CHECKBOX_SELECTOR:"."+r.ROW_CHECKBOX,ROW_SELECTED_SELECTOR:"."+r.ROW_SELECTED,ROW_SELECTOR:"."+r.ROW},e.events={ROW_SELECTION_CHANGED:"MDCDataTable:rowSelectionChanged",SELECTED_ALL:"MDCDataTable:selectedAll",UNSELECTED_ALL:"MDCDataTable:unselectedAll"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCCheckbox=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),i=n(14),o=n(2),s=n(6),a=n(4),u=n(3),c=n(5),l=n(33);var d=["checked","indeterminate"],f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ripple_=e.createRipple_(),e}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"ripple",{get:function(){return this.ripple_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"checked",{get:function(){return this.nativeControl_.checked},set:function(t){this.nativeControl_.checked=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"indeterminate",{get:function(){return this.nativeControl_.indeterminate},set:function(t){this.nativeControl_.indeterminate=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.nativeControl_.disabled},set:function(t){this.foundation_.setDisabled(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.nativeControl_.value},set:function(t){this.nativeControl_.value=t},enumerable:!0,configurable:!0}),e.prototype.initialSyncWithDOM=function(){var t=this;this.handleChange_=function(){return t.foundation_.handleChange()},this.handleAnimationEnd_=function(){return t.foundation_.handleAnimationEnd()},this.nativeControl_.addEventListener("change",this.handleChange_),this.listen((0,i.getCorrectEventName)(window,"animationend"),this.handleAnimationEnd_),this.installPropertyChangeHooks_()},e.prototype.destroy=function(){this.ripple_.destroy(),this.nativeControl_.removeEventListener("change",this.handleChange_),this.unlisten((0,i.getCorrectEventName)(window,"animationend"),this.handleAnimationEnd_),this.uninstallPropertyChangeHooks_(),t.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root_.classList.add(e)},forceLayout:function(){return t.root_.offsetWidth},hasNativeControl:function(){return!!t.nativeControl_},isAttachedToDOM:function(){return Boolean(t.root_.parentNode)},isChecked:function(){return t.checked},isIndeterminate:function(){return t.indeterminate},removeClass:function(e){return t.root_.classList.remove(e)},removeNativeControlAttr:function(e){return t.nativeControl_.removeAttribute(e)},setNativeControlAttr:function(e,n){return t.nativeControl_.setAttribute(e,n)},setNativeControlDisabled:function(e){return t.nativeControl_.disabled=e}};return new l.MDCCheckboxFoundation(e)},e.prototype.createRipple_=function(){var t=this,e=r.__assign({},u.MDCRipple.createAdapter(this),{deregisterInteractionHandler:function(e,n){return t.nativeControl_.removeEventListener(e,n,(0,s.applyPassive)())},isSurfaceActive:function(){return(0,a.matches)(t.nativeControl_,":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(e,n){return t.nativeControl_.addEventListener(e,n,(0,s.applyPassive)())}});return new u.MDCRipple(this.root_,new c.MDCRippleFoundation(e))},e.prototype.installPropertyChangeHooks_=function(){var t=this,e=this.nativeControl_,n=Object.getPrototypeOf(e);d.forEach((function(r){var i=Object.getOwnPropertyDescriptor(n,r);if(_(i)){var o=i.get,s={configurable:i.configurable,enumerable:i.enumerable,get:o,set:function(n){i.set.call(e,n),t.foundation_.handleChange()}};Object.defineProperty(e,r,s)}}))},e.prototype.uninstallPropertyChangeHooks_=function(){var t=this.nativeControl_,e=Object.getPrototypeOf(t);d.forEach((function(n){var r=Object.getOwnPropertyDescriptor(e,n);_(r)&&Object.defineProperty(t,n,r)}))},Object.defineProperty(e.prototype,"nativeControl_",{get:function(){var t=l.MDCCheckboxFoundation.strings.NATIVE_CONTROL_SELECTOR,e=this.root_.querySelector(t);if(!e)throw new Error("Checkbox component requires a "+t+" element");return e},enumerable:!0,configurable:!0}),e}(o.MDCComponent);function _(t){return!!t&&"function"==typeof t.set}e.MDCCheckbox=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
e.cssClasses={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},e.strings={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},e.numbers={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCCheckboxFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(34);var s=function(t){function e(n){var i=t.call(this,r.__assign({},e.defaultAdapter,n))||this;return i.currentCheckState_=o.strings.TRANSITION_STATE_INIT,i.currentAnimationClass_="",i.animEndLatchTimer_=0,i.enableAnimationEndHandler_=!1,i}return r.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return o.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.currentCheckState_=this.determineCheckState_(),this.updateAriaChecked_(),this.adapter_.addClass(o.cssClasses.UPGRADED)},e.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer_)},e.prototype.setDisabled=function(t){this.adapter_.setNativeControlDisabled(t),t?this.adapter_.addClass(o.cssClasses.DISABLED):this.adapter_.removeClass(o.cssClasses.DISABLED)},e.prototype.handleAnimationEnd=function(){var t=this;this.enableAnimationEndHandler_&&(clearTimeout(this.animEndLatchTimer_),this.animEndLatchTimer_=setTimeout((function(){t.adapter_.removeClass(t.currentAnimationClass_),t.enableAnimationEndHandler_=!1}),o.numbers.ANIM_END_LATCH_MS))},e.prototype.handleChange=function(){this.transitionCheckState_()},e.prototype.transitionCheckState_=function(){if(this.adapter_.hasNativeControl()){var t=this.currentCheckState_,e=this.determineCheckState_();if(t!==e){this.updateAriaChecked_();var n=o.strings.TRANSITION_STATE_UNCHECKED,r=o.cssClasses.SELECTED;e===n?this.adapter_.removeClass(r):this.adapter_.addClass(r),this.currentAnimationClass_.length>0&&(clearTimeout(this.animEndLatchTimer_),this.adapter_.forceLayout(),this.adapter_.removeClass(this.currentAnimationClass_)),this.currentAnimationClass_=this.getTransitionAnimationClass_(t,e),this.currentCheckState_=e,this.adapter_.isAttachedToDOM()&&this.currentAnimationClass_.length>0&&(this.adapter_.addClass(this.currentAnimationClass_),this.enableAnimationEndHandler_=!0)}}},e.prototype.determineCheckState_=function(){var t=o.strings.TRANSITION_STATE_INDETERMINATE,e=o.strings.TRANSITION_STATE_CHECKED,n=o.strings.TRANSITION_STATE_UNCHECKED;return this.adapter_.isIndeterminate()?t:this.adapter_.isChecked()?e:n},e.prototype.getTransitionAnimationClass_=function(t,n){var r=o.strings.TRANSITION_STATE_INIT,i=o.strings.TRANSITION_STATE_CHECKED,s=o.strings.TRANSITION_STATE_UNCHECKED,a=e.cssClasses,u=a.ANIM_UNCHECKED_CHECKED,c=a.ANIM_UNCHECKED_INDETERMINATE,l=a.ANIM_CHECKED_UNCHECKED,d=a.ANIM_CHECKED_INDETERMINATE,f=a.ANIM_INDETERMINATE_CHECKED,_=a.ANIM_INDETERMINATE_UNCHECKED;switch(t){case r:return n===s?"":n===i?f:_;case s:return n===i?u:c;case i:return n===s?l:d;default:return n===i?f:_}},e.prototype.updateAriaChecked_=function(){this.adapter_.isIndeterminate()?this.adapter_.setNativeControlAttr(o.strings.ARIA_CHECKED_ATTR,o.strings.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter_.removeNativeControlAttr(o.strings.ARIA_CHECKED_ATTR)},e}(i.MDCFoundation);
/**
                               * @license
                               * Copyright 2016 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCCheckboxFoundation=s,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
e.cssClasses={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",BACKGROUND:"mdc-checkbox__background",CHECKED:"mdc-checkbox--checked",CHECKMARK:"mdc-checkbox__checkmark",CHECKMARK_PATH:"mdc-checkbox__checkmark-path",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",MIXEDMARK:"mdc-checkbox__mixedmark",NATIVE_CONTROL:"mdc-checkbox__native-control",ROOT:"mdc-checkbox",SELECTED:"mdc-checkbox--selected",UPGRADED:"mdc-checkbox--upgraded"},e.strings={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},e.numbers={ANIM_END_LATCH_MS:250}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCChip=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),i=n(2),o=n(3),s=n(5),a=n(9),u=n(16);var c=["click","keydown"],l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),Object.defineProperty(e.prototype,"selected",{get:function(){return this.foundation_.isSelected()},set:function(t){this.foundation_.setSelected(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldRemoveOnTrailingIconClick",{get:function(){return this.foundation_.getShouldRemoveOnTrailingIconClick()},set:function(t){this.foundation_.setShouldRemoveOnTrailingIconClick(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ripple",{get:function(){return this.ripple_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this.root_.id},enumerable:!0,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){var e=this;void 0===t&&(t=function(t,e){return new o.MDCRipple(t,e)}),this.leadingIcon_=this.root_.querySelector(a.strings.LEADING_ICON_SELECTOR),this.trailingIcon_=this.root_.querySelector(a.strings.TRAILING_ICON_SELECTOR),this.checkmark_=this.root_.querySelector(a.strings.CHECKMARK_SELECTOR),this.primaryAction_=this.root_.querySelector(a.strings.PRIMARY_ACTION_SELECTOR),this.trailingAction_=this.root_.querySelector(a.strings.TRAILING_ACTION_SELECTOR);var n=r.__assign({},o.MDCRipple.createAdapter(this),{computeBoundingRect:function(){return e.foundation_.getDimensions()}});this.ripple_=t(this.root_,new s.MDCRippleFoundation(n))},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleInteraction_=function(e){return t.foundation_.handleInteraction(e)},this.handleTransitionEnd_=function(e){return t.foundation_.handleTransitionEnd(e)},this.handleTrailingIconInteraction_=function(e){return t.foundation_.handleTrailingIconInteraction(e)},this.handleKeydown_=function(e){return t.foundation_.handleKeydown(e)},c.forEach((function(e){t.listen(e,t.handleInteraction_)})),this.listen("transitionend",this.handleTransitionEnd_),this.listen("keydown",this.handleKeydown_),this.trailingIcon_&&c.forEach((function(e){t.trailingIcon_.addEventListener(e,t.handleTrailingIconInteraction_)}))},e.prototype.destroy=function(){var e=this;this.ripple_.destroy(),c.forEach((function(t){e.unlisten(t,e.handleInteraction_)})),this.unlisten("transitionend",this.handleTransitionEnd_),this.unlisten("keydown",this.handleKeydown_),this.trailingIcon_&&c.forEach((function(t){e.trailingIcon_.removeEventListener(t,e.handleTrailingIconInteraction_)})),t.prototype.destroy.call(this)},e.prototype.beginExit=function(){this.foundation_.beginExit()},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root_.classList.add(e)},addClassToLeadingIcon:function(e){t.leadingIcon_&&t.leadingIcon_.classList.add(e)},eventTargetHasClass:function(t,e){return!!t&&t.classList.contains(e)},focusPrimaryAction:function(){t.primaryAction_&&t.primaryAction_.focus()},focusTrailingAction:function(){t.trailingAction_&&t.trailingAction_.focus()},getCheckmarkBoundingClientRect:function(){return t.checkmark_?t.checkmark_.getBoundingClientRect():null},getComputedStyleValue:function(e){return window.getComputedStyle(t.root_).getPropertyValue(e)},getRootBoundingClientRect:function(){return t.root_.getBoundingClientRect()},hasClass:function(e){return t.root_.classList.contains(e)},hasLeadingIcon:function(){return!!t.leadingIcon_},hasTrailingAction:function(){return!!t.trailingAction_},isRTL:function(){return"rtl"===window.getComputedStyle(t.root_).getPropertyValue("direction")},notifyInteraction:function(){return t.emit(a.strings.INTERACTION_EVENT,{chipId:t.id},!0)},notifyNavigation:function(e,n){return t.emit(a.strings.NAVIGATION_EVENT,{chipId:t.id,key:e,source:n},!0)},notifyRemoval:function(){t.emit(a.strings.REMOVAL_EVENT,{chipId:t.id,root:t.root_},!0)},notifySelection:function(e,n){return t.emit(a.strings.SELECTION_EVENT,{chipId:t.id,selected:e,shouldIgnore:n},!0)},notifyTrailingIconInteraction:function(){return t.emit(a.strings.TRAILING_ICON_INTERACTION_EVENT,{chipId:t.id},!0)},removeClass:function(e){return t.root_.classList.remove(e)},removeClassFromLeadingIcon:function(e){t.leadingIcon_&&t.leadingIcon_.classList.remove(e)},setPrimaryActionAttr:function(e,n){t.primaryAction_&&t.primaryAction_.setAttribute(e,n)},setStyleProperty:function(e,n){return t.root_.style.setProperty(e,n)},setTrailingActionAttr:function(e,n){t.trailingAction_&&t.trailingAction_.setAttribute(e,n)}};return new u.MDCChipFoundation(e)},e.prototype.setSelectedFromChipSet=function(t,e){this.foundation_.setSelectedFromChipSet(t,e)},e.prototype.focusPrimaryAction=function(){this.foundation_.focusPrimaryAction()},e.prototype.focusTrailingAction=function(){this.foundation_.focusTrailingAction()},e.prototype.removeFocus=function(){this.foundation_.removeFocus()},e.prototype.remove=function(){var t=this.root_.parentNode;null!==t&&t.removeChild(this.root_)},e}(i.MDCComponent);e.MDCChip=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCChipSetFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),i=n(1),o=n(9),s=n(37);var a=function(t){function e(n){var i=t.call(this,r.__assign({},e.defaultAdapter,n))||this;return i.selectedChipIds_=[],i}return r.__extends(e,t),Object.defineProperty(e,"strings",{get:function(){return s.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return s.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{focusChipPrimaryActionAtIndex:function(){},focusChipTrailingActionAtIndex:function(){},getChipListCount:function(){return-1},getIndexOfChipById:function(){return-1},hasClass:function(){return!1},isRTL:function(){return!1},removeChipAtIndex:function(){},removeFocusFromChipAtIndex:function(){},selectChipAtIndex:function(){}}},enumerable:!0,configurable:!0}),e.prototype.getSelectedChipIds=function(){return this.selectedChipIds_.slice()},e.prototype.select=function(t){this.select_(t,!1)},e.prototype.handleChipInteraction=function(t){var e=this.adapter_.getIndexOfChipById(t);this.removeFocusFromChipsExcept_(e),(this.adapter_.hasClass(s.cssClasses.CHOICE)||this.adapter_.hasClass(s.cssClasses.FILTER))&&this.toggleSelect_(t)},e.prototype.handleChipSelection=function(t,e,n){if(!n){var r=this.selectedChipIds_.indexOf(t)>=0;e&&!r?this.select(t):!e&&r&&this.deselect_(t)}},e.prototype.handleChipRemoval=function(t){var e=this.adapter_.getIndexOfChipById(t);this.deselectAndNotifyClients_(t),this.adapter_.removeChipAtIndex(e);var n=this.adapter_.getChipListCount()-1,r=Math.min(e,n);this.removeFocusFromChipsExcept_(r),this.adapter_.focusChipTrailingActionAtIndex(r)},e.prototype.handleChipNavigation=function(t,e,n){var r=this.adapter_.getChipListCount()-1,i=this.adapter_.getIndexOfChipById(t);if(-1!==i&&o.navigationKeys.has(e)){var s=this.adapter_.isRTL(),a=e===o.strings.ARROW_RIGHT_KEY&&!s||e===o.strings.ARROW_LEFT_KEY&&s||e===o.strings.ARROW_DOWN_KEY,u=e===o.strings.HOME_KEY,c=e===o.strings.END_KEY;a?i++:u?i=0:c?i=r:i--,i<0||i>r||(this.removeFocusFromChipsExcept_(i),this.focusChipAction_(i,e,n))}},e.prototype.focusChipAction_=function(t,e,n){var r=o.jumpChipKeys.has(e);if(r&&n===o.EventSource.PRIMARY)return this.adapter_.focusChipPrimaryActionAtIndex(t);if(r&&n===o.EventSource.TRAILING)return this.adapter_.focusChipTrailingActionAtIndex(t);var i=this.getDirection_(e);return i===o.Direction.LEFT?this.adapter_.focusChipTrailingActionAtIndex(t):i===o.Direction.RIGHT?this.adapter_.focusChipPrimaryActionAtIndex(t):void 0},e.prototype.getDirection_=function(t){var e=this.adapter_.isRTL();return t===o.strings.ARROW_LEFT_KEY&&!e||t===o.strings.ARROW_RIGHT_KEY&&e?o.Direction.LEFT:o.Direction.RIGHT},e.prototype.deselect_=function(t,e){void 0===e&&(e=!1);var n=this.selectedChipIds_.indexOf(t);if(n>=0){this.selectedChipIds_.splice(n,1);var r=this.adapter_.getIndexOfChipById(t);this.adapter_.selectChipAtIndex(r,!1,e)}},e.prototype.deselectAndNotifyClients_=function(t){this.deselect_(t,!0)},e.prototype.toggleSelect_=function(t){this.selectedChipIds_.indexOf(t)>=0?this.deselectAndNotifyClients_(t):this.selectAndNotifyClients_(t)},e.prototype.removeFocusFromChipsExcept_=function(t){for(var e=this.adapter_.getChipListCount(),n=0;n<e;n++)n!==t&&this.adapter_.removeFocusFromChipAtIndex(n)},e.prototype.selectAndNotifyClients_=function(t){this.select_(t,!0)},e.prototype.select_=function(t,e){if(!(this.selectedChipIds_.indexOf(t)>=0)){if(this.adapter_.hasClass(s.cssClasses.CHOICE)&&this.selectedChipIds_.length>0){var n=this.selectedChipIds_[0],r=this.adapter_.getIndexOfChipById(n);this.selectedChipIds_=[],this.adapter_.selectChipAtIndex(r,!1,e)}this.selectedChipIds_.push(t);var i=this.adapter_.getIndexOfChipById(t);this.adapter_.selectChipAtIndex(i,!0,e)}},e}(i.MDCFoundation);e.MDCChipSetFoundation=a,e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
e.strings={CHIP_SELECTOR:".mdc-chip"},e.cssClasses={CHOICE:"mdc-chip-set--choice",FILTER:"mdc-chip-set--filter"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCDialogFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(39);var s=function(t){function e(n){var i=t.call(this,r.__assign({},e.defaultAdapter,n))||this;return i.isOpen_=!1,i.animationFrame_=0,i.animationTimer_=0,i.layoutFrame_=0,i.escapeKeyAction_=o.strings.CLOSE_ACTION,i.scrimClickAction_=o.strings.CLOSE_ACTION,i.autoStackButtons_=!0,i.areButtonsStacked_=!1,i}return r.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return o.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.hasClass(o.cssClasses.STACKED)&&this.setAutoStackButtons(!1)},e.prototype.destroy=function(){this.isOpen_&&this.close(o.strings.DESTROY_ACTION),this.animationTimer_&&(clearTimeout(this.animationTimer_),this.handleAnimationTimerEnd_()),this.layoutFrame_&&(cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=0)},e.prototype.open=function(){var t=this;this.isOpen_=!0,this.adapter_.notifyOpening(),this.adapter_.addClass(o.cssClasses.OPENING),this.runNextAnimationFrame_((function(){t.adapter_.addClass(o.cssClasses.OPEN),t.adapter_.addBodyClass(o.cssClasses.SCROLL_LOCK),t.layout(),t.animationTimer_=setTimeout((function(){t.handleAnimationTimerEnd_(),t.adapter_.trapFocus(t.adapter_.getInitialFocusEl()),t.adapter_.notifyOpened()}),o.numbers.DIALOG_ANIMATION_OPEN_TIME_MS)}))},e.prototype.close=function(t){var e=this;void 0===t&&(t=""),this.isOpen_&&(this.isOpen_=!1,this.adapter_.notifyClosing(t),this.adapter_.addClass(o.cssClasses.CLOSING),this.adapter_.removeClass(o.cssClasses.OPEN),this.adapter_.removeBodyClass(o.cssClasses.SCROLL_LOCK),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout((function(){e.adapter_.releaseFocus(),e.handleAnimationTimerEnd_(),e.adapter_.notifyClosed(t)}),o.numbers.DIALOG_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.isOpen_},e.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction_},e.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction_=t},e.prototype.getScrimClickAction=function(){return this.scrimClickAction_},e.prototype.setScrimClickAction=function(t){this.scrimClickAction_=t},e.prototype.getAutoStackButtons=function(){return this.autoStackButtons_},e.prototype.setAutoStackButtons=function(t){this.autoStackButtons_=t},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){t.layoutInternal_(),t.layoutFrame_=0}))},e.prototype.handleClick=function(t){if(this.adapter_.eventTargetMatches(t.target,o.strings.SCRIM_SELECTOR)&&""!==this.scrimClickAction_)this.close(this.scrimClickAction_);else{var e=this.adapter_.getActionFromEvent(t);e&&this.close(e)}},e.prototype.handleKeydown=function(t){var e="Enter"===t.key||13===t.keyCode;if(e&&!this.adapter_.getActionFromEvent(t)){var n=!this.adapter_.eventTargetMatches(t.target,o.strings.SUPPRESS_DEFAULT_PRESS_SELECTOR);e&&n&&this.adapter_.clickDefaultButton()}},e.prototype.handleDocumentKeydown=function(t){("Escape"===t.key||27===t.keyCode)&&""!==this.escapeKeyAction_&&this.close(this.escapeKeyAction_)},e.prototype.layoutInternal_=function(){this.autoStackButtons_&&this.detectStackedButtons_(),this.detectScrollableContent_()},e.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter_.removeClass(o.cssClasses.OPENING),this.adapter_.removeClass(o.cssClasses.CLOSING)},e.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)}))},e.prototype.detectStackedButtons_=function(){this.adapter_.removeClass(o.cssClasses.STACKED);var t=this.adapter_.areButtonsStacked();t&&this.adapter_.addClass(o.cssClasses.STACKED),t!==this.areButtonsStacked_&&(this.adapter_.reverseButtons(),this.areButtonsStacked_=t)},e.prototype.detectScrollableContent_=function(){this.adapter_.removeClass(o.cssClasses.SCROLLABLE),this.adapter_.isContentScrollable()&&this.adapter_.addClass(o.cssClasses.SCROLLABLE)},e}(i.MDCFoundation);
/**
                               * @license
                               * Copyright 2017 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCDialogFoundation=s,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
e.cssClasses={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked"},e.strings={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},e.numbers={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createFocusTrapInstance=function(t,e,n){void 0===e&&(e=o.default);return e(t,{clickOutsideDeactivates:!0,escapeDeactivates:!1,initialFocus:n})}
/**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */,e.isScrollable=function(t){return!!t&&t.scrollHeight>t.offsetHeight},e.areTopsMisaligned=function(t){var e=new Set;return[].forEach.call(t,(function(t){return e.add(t.offsetTop)})),e.size>1};var r,i=n(17),o=(r=i)&&r.__esModule?r:{default:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},e.strings={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCModalDrawerFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0));var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened_=function(){this.adapter_.trapFocus()},e.prototype.closed_=function(){this.adapter_.releaseFocus()},e}(n(19).MDCDismissibleDrawerFoundation);e.MDCModalDrawerFoundation=i,e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createFocusTrapInstance=function(t,e){void 0===e&&(e=o.default);return e(t,{clickOutsideDeactivates:!0,escapeDeactivates:!1,initialFocus:void 0,returnFocusOnDeactivate:!1})}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */;var r,i=n(17),o=(r=i)&&r.__esModule?r:{default:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCFormFieldFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(45);var s=function(t){function e(n){var i=t.call(this,r.__assign({},e.defaultAdapter,n))||this;return i.clickHandler_=function(){return i.handleClick_()},i}return r.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.registerInteractionHandler("click",this.clickHandler_)},e.prototype.destroy=function(){this.adapter_.deregisterInteractionHandler("click",this.clickHandler_)},e.prototype.handleClick_=function(){var t=this;this.adapter_.activateInputRipple(),requestAnimationFrame((function(){return t.adapter_.deactivateInputRipple()}))},e}(i.MDCFoundation);
/**
                               * @license
                               * Copyright 2017 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCFormFieldFoundation=s,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
e.cssClasses={ROOT:"mdc-form-field"},e.strings={LABEL_SELECTOR:".mdc-form-field > label"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCIconButtonToggleFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(47);var s=function(t){function e(n){return t.call(this,r.__assign({},e.defaultAdapter,n))||this}return r.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},setAttr:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.setAttr(o.strings.ARIA_PRESSED,""+this.isOn())},e.prototype.handleClick=function(){this.toggle(),this.adapter_.notifyChange({isOn:this.isOn()})},e.prototype.isOn=function(){return this.adapter_.hasClass(o.cssClasses.ICON_BUTTON_ON)},e.prototype.toggle=function(t){void 0===t&&(t=!this.isOn()),t?this.adapter_.addClass(o.cssClasses.ICON_BUTTON_ON):this.adapter_.removeClass(o.cssClasses.ICON_BUTTON_ON),this.adapter_.setAttr(o.strings.ARIA_PRESSED,""+t)},e}(i.MDCFoundation);
/**
                               * @license
                               * Copyright 2018 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCIconButtonToggleFoundation=s,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
e.cssClasses={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},e.strings={ARIA_PRESSED:"aria-pressed",CHANGE_EVENT:"MDCIconButtonToggle:change"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCLinearProgressFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),i=n(14),o=n(1),s=n(49);var a=function(t){function e(n){return t.call(this,r.__assign({},e.defaultAdapter,n))||this}return r.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return s.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return s.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},getBuffer:function(){return null},getPrimaryBar:function(){return null},hasClass:function(){return!1},removeClass:function(){},setStyle:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.isDeterminate_=!this.adapter_.hasClass(s.cssClasses.INDETERMINATE_CLASS),this.isReversed_=this.adapter_.hasClass(s.cssClasses.REVERSED_CLASS),this.progress_=0,this.buffer_=1},e.prototype.setDeterminate=function(t){this.isDeterminate_=t,this.isDeterminate_?(this.adapter_.removeClass(s.cssClasses.INDETERMINATE_CLASS),this.setScale_(this.adapter_.getPrimaryBar(),this.progress_),this.setScale_(this.adapter_.getBuffer(),this.buffer_)):(this.isReversed_&&(this.adapter_.removeClass(s.cssClasses.REVERSED_CLASS),this.adapter_.forceLayout(),this.adapter_.addClass(s.cssClasses.REVERSED_CLASS)),this.adapter_.addClass(s.cssClasses.INDETERMINATE_CLASS),this.setScale_(this.adapter_.getPrimaryBar(),1),this.setScale_(this.adapter_.getBuffer(),1))},e.prototype.setProgress=function(t){this.progress_=t,this.isDeterminate_&&this.setScale_(this.adapter_.getPrimaryBar(),t)},e.prototype.setBuffer=function(t){this.buffer_=t,this.isDeterminate_&&this.setScale_(this.adapter_.getBuffer(),t)},e.prototype.setReverse=function(t){this.isReversed_=t,this.isDeterminate_||(this.adapter_.removeClass(s.cssClasses.INDETERMINATE_CLASS),this.adapter_.forceLayout(),this.adapter_.addClass(s.cssClasses.INDETERMINATE_CLASS)),this.isReversed_?this.adapter_.addClass(s.cssClasses.REVERSED_CLASS):this.adapter_.removeClass(s.cssClasses.REVERSED_CLASS)},e.prototype.open=function(){this.adapter_.removeClass(s.cssClasses.CLOSED_CLASS)},e.prototype.close=function(){this.adapter_.addClass(s.cssClasses.CLOSED_CLASS)},e.prototype.setScale_=function(t,e){if(t){var n="scaleX("+e+")";this.adapter_.setStyle(t,(0,i.getCorrectPropertyName)(window,"transform"),n)}},e}(o.MDCFoundation);e.MDCLinearProgressFoundation=a,e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
e.cssClasses={CLOSED_CLASS:"mdc-linear-progress--closed",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed"},e.strings={BUFFER_SELECTOR:".mdc-linear-progress__buffer",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCMenu=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(2),o=n(4),s=n(18),a=n(11),u=n(111),c=n(20),l=n(12),d=n(51);var f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,e){void 0===t&&(t=function(t){return new u.MDCMenuSurface(t)}),void 0===e&&(e=function(t){return new s.MDCList(t)}),this.menuSurfaceFactory_=t,this.listFactory_=e},e.prototype.initialSyncWithDOM=function(){var t=this;this.menuSurface_=this.menuSurfaceFactory_(this.root_);var e=this.root_.querySelector(l.strings.LIST_SELECTOR);e?(this.list_=this.listFactory_(e),this.list_.wrapFocus=!0):this.list_=null,this.handleKeydown_=function(e){return t.foundation_.handleKeydown(e)},this.handleItemAction_=function(e){return t.foundation_.handleItemAction(t.items[e.detail.index])},this.handleMenuSurfaceOpened_=function(){return t.foundation_.handleMenuSurfaceOpened()},this.menuSurface_.listen(c.MDCMenuSurfaceFoundation.strings.OPENED_EVENT,this.handleMenuSurfaceOpened_),this.listen("keydown",this.handleKeydown_),this.listen(a.MDCListFoundation.strings.ACTION_EVENT,this.handleItemAction_)},e.prototype.destroy=function(){this.list_&&this.list_.destroy(),this.menuSurface_.destroy(),this.menuSurface_.unlisten(c.MDCMenuSurfaceFoundation.strings.OPENED_EVENT,this.handleMenuSurfaceOpened_),this.unlisten("keydown",this.handleKeydown_),this.unlisten(a.MDCListFoundation.strings.ACTION_EVENT,this.handleItemAction_),t.prototype.destroy.call(this)},Object.defineProperty(e.prototype,"open",{get:function(){return this.menuSurface_.isOpen()},set:function(t){t?this.menuSurface_.open():this.menuSurface_.close()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"wrapFocus",{get:function(){return!!this.list_&&this.list_.wrapFocus},set:function(t){this.list_&&(this.list_.wrapFocus=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"items",{get:function(){return this.list_?this.list_.listElements:[]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"quickOpen",{set:function(t){this.menuSurface_.quickOpen=t},enumerable:!0,configurable:!0}),e.prototype.setDefaultFocusState=function(t){this.foundation_.setDefaultFocusState(t)},e.prototype.setAnchorCorner=function(t){this.menuSurface_.setAnchorCorner(t)},e.prototype.setAnchorMargin=function(t){this.menuSurface_.setAnchorMargin(t)},e.prototype.setSelectedIndex=function(t){this.foundation_.setSelectedIndex(t)},e.prototype.setEnabled=function(t,e){this.foundation_.setEnabled(t,e)},e.prototype.getOptionByIndex=function(t){return t<this.items.length?this.items[t]:null},e.prototype.setFixedPosition=function(t){this.menuSurface_.setFixedPosition(t)},e.prototype.setIsHoisted=function(t){this.menuSurface_.setIsHoisted(t)},e.prototype.setAbsolutePosition=function(t,e){this.menuSurface_.setAbsolutePosition(t,e)},e.prototype.setAnchorElement=function(t){this.menuSurface_.anchorElement=t},e.prototype.getDefaultFoundation=function(){var t=this,e={addClassToElementAtIndex:function(e,n){t.items[e].classList.add(n)},removeClassFromElementAtIndex:function(e,n){t.items[e].classList.remove(n)},addAttributeToElementAtIndex:function(e,n,r){t.items[e].setAttribute(n,r)},removeAttributeFromElementAtIndex:function(e,n){t.items[e].removeAttribute(n)},elementContainsClass:function(t,e){return t.classList.contains(e)},closeSurface:function(e){return t.menuSurface_.close(e)},getElementIndex:function(e){return t.items.indexOf(e)},notifySelected:function(e){return t.emit(l.strings.SELECTED_EVENT,{index:e.index,item:t.items[e.index]})},getMenuItemCount:function(){return t.items.length},focusItemAtIndex:function(e){return t.items[e].focus()},focusListRoot:function(){return t.root_.querySelector(l.strings.LIST_SELECTOR).focus()},isSelectableItemAtIndex:function(e){return!!(0,o.closest)(t.items[e],"."+l.cssClasses.MENU_SELECTION_GROUP)},getSelectedSiblingOfItemAtIndex:function(e){var n=(0,o.closest)(t.items[e],"."+l.cssClasses.MENU_SELECTION_GROUP).querySelector("."+l.cssClasses.MENU_SELECTED_LIST_ITEM);return n?t.items.indexOf(n):-1}};return new d.MDCMenuFoundation(e)},e}(i.MDCComponent);
/**
                             * @license
                             * Copyright 2018 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCMenu=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCMenuFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(10),s=n(20),a=n(12);var u=function(t){function e(n){var i=t.call(this,r.__assign({},e.defaultAdapter,n))||this;return i.closeAnimationEndTimerId_=0,i.defaultFocusState_=a.DefaultFocusState.LIST_ROOT,i}return r.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return a.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return a.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return a.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId_&&clearTimeout(this.closeAnimationEndTimerId_),this.adapter_.closeSurface()},e.prototype.handleKeydown=function(t){var e=t.key,n=t.keyCode;("Tab"===e||9===n)&&this.adapter_.closeSurface(!0)},e.prototype.handleItemAction=function(t){var e=this,n=this.adapter_.getElementIndex(t);n<0||(this.adapter_.notifySelected({index:n}),this.adapter_.closeSurface(),this.closeAnimationEndTimerId_=setTimeout((function(){var n=e.adapter_.getElementIndex(t);e.adapter_.isSelectableItemAtIndex(n)&&e.setSelectedIndex(n)}),s.MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION))},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState_){case a.DefaultFocusState.FIRST_ITEM:this.adapter_.focusItemAtIndex(0);break;case a.DefaultFocusState.LAST_ITEM:this.adapter_.focusItemAtIndex(this.adapter_.getMenuItemCount()-1);break;case a.DefaultFocusState.NONE:break;default:this.adapter_.focusListRoot()}},e.prototype.setDefaultFocusState=function(t){this.defaultFocusState_=t},e.prototype.setSelectedIndex=function(t){if(this.validatedIndex_(t),!this.adapter_.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var e=this.adapter_.getSelectedSiblingOfItemAtIndex(t);e>=0&&(this.adapter_.removeAttributeFromElementAtIndex(e,a.strings.ARIA_CHECKED_ATTR),this.adapter_.removeClassFromElementAtIndex(e,a.cssClasses.MENU_SELECTED_LIST_ITEM)),this.adapter_.addClassToElementAtIndex(t,a.cssClasses.MENU_SELECTED_LIST_ITEM),this.adapter_.addAttributeToElementAtIndex(t,a.strings.ARIA_CHECKED_ATTR,"true")},e.prototype.setEnabled=function(t,e){this.validatedIndex_(t),e?(this.adapter_.removeClassFromElementAtIndex(t,o.cssClasses.LIST_ITEM_DISABLED_CLASS),this.adapter_.addAttributeToElementAtIndex(t,a.strings.ARIA_DISABLED_ATTR,"false")):(this.adapter_.addClassToElementAtIndex(t,o.cssClasses.LIST_ITEM_DISABLED_CLASS),this.adapter_.addAttributeToElementAtIndex(t,a.strings.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex_=function(t){var e=this.adapter_.getMenuItemCount();if(!(t>=0&&t<e))throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(i.MDCFoundation);
/**
                               * @license
                               * Copyright 2018 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCMenuFoundation=u,e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCRadioFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(53);var s=function(t){function e(n){return t.call(this,r.__assign({},e.defaultAdapter,n))||this}return r.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!0,configurable:!0}),e.prototype.setDisabled=function(t){var n=e.cssClasses.DISABLED;this.adapter_.setNativeControlDisabled(t),t?this.adapter_.addClass(n):this.adapter_.removeClass(n)},e}(i.MDCFoundation);
/**
                               * @license
                               * Copyright 2016 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCRadioFoundation=s,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.strings={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},e.cssClasses={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCFloatingLabel=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(2),o=n(55);var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.shake=function(t){this.foundation_.shake(t)},e.prototype.float=function(t){this.foundation_.float(t)},e.prototype.getWidth=function(){return this.foundation_.getWidth()},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},getWidth:function(){return t.root_.scrollWidth},registerInteractionHandler:function(e,n){return t.listen(e,n)},deregisterInteractionHandler:function(e,n){return t.unlisten(e,n)}};return new o.MDCFloatingLabelFoundation(e)},e}(i.MDCComponent);
/**
                             * @license
                             * Copyright 2016 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCFloatingLabel=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCFloatingLabelFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(118);var s=function(t){function e(n){var i=t.call(this,r.__assign({},e.defaultAdapter,n))||this;return i.shakeAnimationEndHandler_=function(){return i.handleShakeAnimationEnd_()},i}return r.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.registerInteractionHandler("animationend",this.shakeAnimationEndHandler_)},e.prototype.destroy=function(){this.adapter_.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler_)},e.prototype.getWidth=function(){return this.adapter_.getWidth()},e.prototype.shake=function(t){var n=e.cssClasses.LABEL_SHAKE;t?this.adapter_.addClass(n):this.adapter_.removeClass(n)},e.prototype.float=function(t){var n=e.cssClasses,r=n.LABEL_FLOAT_ABOVE,i=n.LABEL_SHAKE;t?this.adapter_.addClass(r):(this.adapter_.removeClass(r),this.adapter_.removeClass(i))},e.prototype.handleShakeAnimationEnd_=function(){var t=e.cssClasses.LABEL_SHAKE;this.adapter_.removeClass(t)},e}(i.MDCFoundation);
/**
                               * @license
                               * Copyright 2016 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCFloatingLabelFoundation=s,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCLineRipple=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(2),o=n(119);var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.activate=function(){this.foundation_.activate()},e.prototype.deactivate=function(){this.foundation_.deactivate()},e.prototype.setRippleCenter=function(t){this.foundation_.setRippleCenter(t)},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},hasClass:function(e){return t.root_.classList.contains(e)},setStyle:function(e,n){return t.root_.style.setProperty(e,n)},registerEventHandler:function(e,n){return t.listen(e,n)},deregisterEventHandler:function(e,n){return t.unlisten(e,n)}};return new o.MDCLineRippleFoundation(e)},e}(i.MDCComponent);
/**
                             * @license
                             * Copyright 2018 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCLineRipple=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCNotchedOutline=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(2),o=n(55),s=n(58),a=n(121);var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){this.notchElement_=this.root_.querySelector(s.strings.NOTCH_ELEMENT_SELECTOR);var t=this.root_.querySelector("."+o.MDCFloatingLabelFoundation.cssClasses.ROOT);t?(t.style.transitionDuration="0s",this.root_.classList.add(s.cssClasses.OUTLINE_UPGRADED),requestAnimationFrame((function(){t.style.transitionDuration=""}))):this.root_.classList.add(s.cssClasses.NO_LABEL)},e.prototype.notch=function(t){this.foundation_.notch(t)},e.prototype.closeNotch=function(){this.foundation_.closeNotch()},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},setNotchWidthProperty:function(e){return t.notchElement_.style.setProperty("width",e+"px")},removeNotchWidthProperty:function(){return t.notchElement_.style.removeProperty("width")}};return new a.MDCNotchedOutlineFoundation(e)},e}(i.MDCComponent);
/**
                             * @license
                             * Copyright 2017 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCNotchedOutline=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"},e.numbers={NOTCH_ELEMENT_PADDING:8},e.strings={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCSelectFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),i=n(1),o=n(8),s=n(21);var a=function(t){function e(n,i){void 0===i&&(i={});var o=t.call(this,r.__assign({},e.defaultAdapter,n))||this;return o.selectedIndex_=s.numbers.UNSET_INDEX,o.disabled_=!1,o.isMenuOpen_=!1,o.leadingIcon_=i.leadingIcon,o.helperText_=i.helperText,o.menuItemValues_=o.adapter_.getMenuItemValues(),o}return r.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return s.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return s.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return s.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},getSelectedMenuItem:function(){return null},hasLabel:function(){return!1},floatLabel:function(){},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},setRippleCenter:function(){},notifyChange:function(){},setSelectedText:function(){},isSelectedTextFocused:function(){return!1},getSelectedTextAttr:function(){return""},setSelectedTextAttr:function(){},openMenu:function(){},closeMenu:function(){},getAnchorElement:function(){return null},setMenuAnchorElement:function(){},setMenuAnchorCorner:function(){},setMenuWrapFocus:function(){},setAttributeAtIndex:function(){},removeAttributeAtIndex:function(){},focusMenuItemAtIndex:function(){},getMenuItemCount:function(){return 0},getMenuItemValues:function(){return[]},getMenuItemTextAtIndex:function(){return""},getMenuItemAttr:function(){return""},addClassAtIndex:function(){},removeClassAtIndex:function(){}}},enumerable:!0,configurable:!0}),e.prototype.getSelectedIndex=function(){return this.selectedIndex_},e.prototype.setSelectedIndex=function(t,e){if(void 0===e&&(e=!1),!(t>=this.adapter_.getMenuItemCount())){var n=this.selectedIndex_;this.selectedIndex_=t,this.selectedIndex_===s.numbers.UNSET_INDEX?this.adapter_.setSelectedText(""):this.adapter_.setSelectedText(this.adapter_.getMenuItemTextAtIndex(this.selectedIndex_).trim()),n!==s.numbers.UNSET_INDEX&&(this.adapter_.removeClassAtIndex(n,s.cssClasses.SELECTED_ITEM_CLASS),this.adapter_.removeAttributeAtIndex(n,s.strings.ARIA_SELECTED_ATTR)),this.selectedIndex_!==s.numbers.UNSET_INDEX&&(this.adapter_.addClassAtIndex(this.selectedIndex_,s.cssClasses.SELECTED_ITEM_CLASS),this.adapter_.setAttributeAtIndex(this.selectedIndex_,s.strings.ARIA_SELECTED_ATTR,"true")),this.layout(),e&&this.adapter_.closeMenu(),this.handleChange()}},e.prototype.setValue=function(t){var e=this.menuItemValues_.indexOf(t);this.setSelectedIndex(e),this.handleChange()},e.prototype.getValue=function(){var t=this.adapter_.getSelectedMenuItem();return t&&this.adapter_.getMenuItemAttr(t,s.strings.VALUE_ATTR)||""},e.prototype.getDisabled=function(){return this.disabled_},e.prototype.setDisabled=function(t){this.disabled_=t,this.disabled_?(this.adapter_.addClass(s.cssClasses.DISABLED),this.adapter_.closeMenu()):this.adapter_.removeClass(s.cssClasses.DISABLED),this.leadingIcon_&&this.leadingIcon_.setDisabled(this.disabled_),this.adapter_.setSelectedTextAttr("tabindex",this.disabled_?"-1":"0"),this.adapter_.setSelectedTextAttr("aria-disabled",this.disabled_.toString())},e.prototype.setHelperTextContent=function(t){this.helperText_&&this.helperText_.setContent(t)},e.prototype.layout=function(){if(this.adapter_.hasLabel()){var t=this.getValue().length>0;this.notchOutline(t)}},e.prototype.handleMenuOpened=function(){if(0!==this.adapter_.getMenuItemValues().length){this.adapter_.addClass(s.cssClasses.ACTIVATED);var t=this.selectedIndex_>=0?this.selectedIndex_:0;this.adapter_.focusMenuItemAtIndex(t)}},e.prototype.handleMenuClosed=function(){this.adapter_.removeClass(s.cssClasses.ACTIVATED),this.isMenuOpen_=!1,this.adapter_.setSelectedTextAttr("aria-expanded","false"),this.adapter_.isSelectedTextFocused()||this.blur_()},e.prototype.handleChange=function(){this.updateLabel_(),this.adapter_.notifyChange(this.getValue()),this.adapter_.hasClass(s.cssClasses.REQUIRED)&&(this.setValid(this.isValid()),this.helperText_&&this.helperText_.setValidity(this.isValid()))},e.prototype.handleMenuItemAction=function(t){this.setSelectedIndex(t,!0)},e.prototype.handleFocus=function(){this.adapter_.addClass(s.cssClasses.FOCUSED),this.adapter_.hasLabel()&&(this.adapter_.floatLabel(!0),this.notchOutline(!0)),this.adapter_.activateBottomLine(),this.helperText_&&this.helperText_.showToScreenReader()},e.prototype.handleBlur=function(){this.isMenuOpen_||this.blur_()},e.prototype.handleClick=function(t){this.isMenuOpen_||(this.adapter_.setRippleCenter(t),this.adapter_.openMenu(),this.isMenuOpen_=!0,this.adapter_.setSelectedTextAttr("aria-expanded","true"))},e.prototype.handleKeydown=function(t){if(!this.isMenuOpen_){var e="Enter"===t.key||13===t.keyCode,n="Space"===t.key||32===t.keyCode,r="ArrowUp"===t.key||38===t.keyCode,i="ArrowDown"===t.key||40===t.keyCode;this.adapter_.hasClass(s.cssClasses.FOCUSED)&&(e||n||r||i)&&(this.adapter_.openMenu(),this.isMenuOpen_=!0,this.adapter_.setSelectedTextAttr("aria-expanded","true"),t.preventDefault())}},e.prototype.notchOutline=function(t){if(this.adapter_.hasOutline()){var e=this.adapter_.hasClass(s.cssClasses.FOCUSED);if(t){var n=s.numbers.LABEL_SCALE,r=this.adapter_.getLabelWidth()*n;this.adapter_.notchOutline(r)}else e||this.adapter_.closeOutline()}},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon_&&this.leadingIcon_.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon_&&this.leadingIcon_.setContent(t)},e.prototype.setValid=function(t){this.adapter_.setSelectedTextAttr("aria-invalid",(!t).toString()),t?this.adapter_.removeClass(s.cssClasses.INVALID):this.adapter_.addClass(s.cssClasses.INVALID)},e.prototype.isValid=function(){return!(this.adapter_.hasClass(s.cssClasses.REQUIRED)&&!this.adapter_.hasClass(s.cssClasses.DISABLED))||this.selectedIndex_!==s.numbers.UNSET_INDEX&&(0!==this.selectedIndex_||Boolean(this.getValue()))},e.prototype.setRequired=function(t){t?this.adapter_.addClass(s.cssClasses.REQUIRED):this.adapter_.removeClass(s.cssClasses.REQUIRED),this.adapter_.setSelectedTextAttr("aria-required",t.toString())},e.prototype.getRequired=function(){return"true"===this.adapter_.getSelectedTextAttr("aria-required")},e.prototype.init=function(){var t=this.adapter_.getAnchorElement();t&&(this.adapter_.setMenuAnchorElement(t),this.adapter_.setMenuAnchorCorner(o.Corner.BOTTOM_START)),this.adapter_.setMenuWrapFocus(!1);var e=this.getValue();e&&this.setValue(e),this.updateLabel_()},e.prototype.updateLabel_=function(){var t=this.getValue().length>0;this.adapter_.hasLabel()&&(this.notchOutline(t),this.adapter_.hasClass(s.cssClasses.FOCUSED)||this.adapter_.floatLabel(t))},e.prototype.blur_=function(){this.adapter_.removeClass(s.cssClasses.FOCUSED),this.updateLabel_(),this.adapter_.deactivateBottomLine(),this.adapter_.hasClass(s.cssClasses.REQUIRED)&&(this.setValid(this.isValid()),this.helperText_&&this.helperText_.setValidity(this.isValid()))},e}(i.MDCFoundation);e.MDCSelectFoundation=a,e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCSelectHelperText=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(2),o=n(61);var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundation",{get:function(){return this.foundation_},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},hasClass:function(e){return t.root_.classList.contains(e)},setAttr:function(e,n){return t.root_.setAttribute(e,n)},removeAttr:function(e){return t.root_.removeAttribute(e)},setContent:function(e){t.root_.textContent=e}};return new o.MDCSelectHelperTextFoundation(e)},e}(i.MDCComponent);
/**
                             * @license
                             * Copyright 2018 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCSelectHelperText=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCSelectHelperTextFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(62);var s=function(t){function e(n){return t.call(this,r.__assign({},e.defaultAdapter,n))||this}return r.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!0,configurable:!0}),e.prototype.setContent=function(t){this.adapter_.setContent(t)},e.prototype.setPersistent=function(t){t?this.adapter_.addClass(o.cssClasses.HELPER_TEXT_PERSISTENT):this.adapter_.removeClass(o.cssClasses.HELPER_TEXT_PERSISTENT)},e.prototype.setValidation=function(t){t?this.adapter_.addClass(o.cssClasses.HELPER_TEXT_VALIDATION_MSG):this.adapter_.removeClass(o.cssClasses.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter_.removeAttr(o.strings.ARIA_HIDDEN)},e.prototype.setValidity=function(t){var e=this.adapter_.hasClass(o.cssClasses.HELPER_TEXT_PERSISTENT),n=this.adapter_.hasClass(o.cssClasses.HELPER_TEXT_VALIDATION_MSG)&&!t;n?this.adapter_.setAttr(o.strings.ROLE,"alert"):this.adapter_.removeAttr(o.strings.ROLE),e||n||this.hide_()},e.prototype.hide_=function(){this.adapter_.setAttr(o.strings.ARIA_HIDDEN,"true")},e}(i.MDCFoundation);
/**
                               * @license
                               * Copyright 2018 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCSelectHelperTextFoundation=s,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.strings={ARIA_HIDDEN:"aria-hidden",ROLE:"role"},e.cssClasses={HELPER_TEXT_PERSISTENT:"mdc-select-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-select-helper-text--validation-msg"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCSelectIcon=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(2),o=n(64);var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundation",{get:function(){return this.foundation_},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,e={getAttr:function(e){return t.root_.getAttribute(e)},setAttr:function(e,n){return t.root_.setAttribute(e,n)},removeAttr:function(e){return t.root_.removeAttribute(e)},setContent:function(e){t.root_.textContent=e},registerInteractionHandler:function(e,n){return t.listen(e,n)},deregisterInteractionHandler:function(e,n){return t.unlisten(e,n)},notifyIconAction:function(){return t.emit(o.MDCSelectIconFoundation.strings.ICON_EVENT,{},!0)}};return new o.MDCSelectIconFoundation(e)},e}(i.MDCComponent);
/**
                             * @license
                             * Copyright 2018 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCSelectIcon=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCSelectIconFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(65);var s=["click","keydown"],a=function(t){function e(n){var i=t.call(this,r.__assign({},e.defaultAdapter,n))||this;return i.savedTabIndex_=null,i.interactionHandler_=function(t){return i.handleInteraction(t)},i}return r.__extends(e,t),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this;this.savedTabIndex_=this.adapter_.getAttr("tabindex"),s.forEach((function(e){t.adapter_.registerInteractionHandler(e,t.interactionHandler_)}))},e.prototype.destroy=function(){var t=this;s.forEach((function(e){t.adapter_.deregisterInteractionHandler(e,t.interactionHandler_)}))},e.prototype.setDisabled=function(t){this.savedTabIndex_&&(t?(this.adapter_.setAttr("tabindex","-1"),this.adapter_.removeAttr("role")):(this.adapter_.setAttr("tabindex",this.savedTabIndex_),this.adapter_.setAttr("role",o.strings.ICON_ROLE)))},e.prototype.setAriaLabel=function(t){this.adapter_.setAttr("aria-label",t)},e.prototype.setContent=function(t){this.adapter_.setContent(t)},e.prototype.handleInteraction=function(t){var e="Enter"===t.key||13===t.keyCode;("click"===t.type||e)&&this.adapter_.notifyIconAction()},e}(i.MDCFoundation);
/**
                                                * @license
                                                * Copyright 2018 Google Inc.
                                                *
                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                * of this software and associated documentation files (the "Software"), to deal
                                                * in the Software without restriction, including without limitation the rights
                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                * copies of the Software, and to permit persons to whom the Software is
                                                * furnished to do so, subject to the following conditions:
                                                *
                                                * The above copyright notice and this permission notice shall be included in
                                                * all copies or substantial portions of the Software.
                                                *
                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                * THE SOFTWARE.
                                                */e.MDCSelectIconFoundation=a,e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.strings={ICON_EVENT:"MDCSelect:icon",ICON_ROLE:"button"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCSliderFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),i=n(14),o=n(1),s=n(22);var a=["mousedown","pointerdown","touchstart"],u=["mouseup","pointerup","touchend"],c={mousedown:"mousemove",pointerdown:"pointermove",touchstart:"touchmove"},l="ArrowDown",d="ArrowLeft",f="ArrowRight",_="ArrowUp",p="End",h="Home",C="PageDown",y="PageUp",m=function(t){function e(n){var i=t.call(this,r.__assign({},e.defaultAdapter,n))||this;return i.savedTabIndex_=NaN,i.active_=!1,i.inTransit_=!1,i.isDiscrete_=!1,i.hasTrackMarker_=!1,i.handlingThumbTargetEvt_=!1,i.min_=0,i.max_=100,i.step_=0,i.value_=0,i.disabled_=!1,i.preventFocusState_=!1,i.thumbContainerPointerHandler_=function(){return i.handlingThumbTargetEvt_=!0},i.interactionStartHandler_=function(t){return i.handleDown_(t)},i.keydownHandler_=function(t){return i.handleKeydown_(t)},i.focusHandler_=function(){return i.handleFocus_()},i.blurHandler_=function(){return i.handleBlur_()},i.resizeHandler_=function(){return i.layout()},i}return r.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return s.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return s.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return s.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},getAttribute:function(){return null},setAttribute:function(){},removeAttribute:function(){},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabIndex:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerThumbContainerInteractionHandler:function(){},deregisterThumbContainerInteractionHandler:function(){},registerBodyInteractionHandler:function(){},deregisterBodyInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},notifyInput:function(){},notifyChange:function(){},setThumbContainerStyleProperty:function(){},setTrackStyleProperty:function(){},setMarkerValue:function(){},setTrackMarkers:function(){},isRTL:function(){return!1}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this;this.isDiscrete_=this.adapter_.hasClass(s.cssClasses.IS_DISCRETE),this.hasTrackMarker_=this.adapter_.hasClass(s.cssClasses.HAS_TRACK_MARKER),a.forEach((function(e){t.adapter_.registerInteractionHandler(e,t.interactionStartHandler_),t.adapter_.registerThumbContainerInteractionHandler(e,t.thumbContainerPointerHandler_)})),this.adapter_.registerInteractionHandler("keydown",this.keydownHandler_),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_),this.adapter_.registerResizeHandler(this.resizeHandler_),this.layout(),this.isDiscrete_&&0===this.getStep()&&(this.step_=1)},e.prototype.destroy=function(){var t=this;a.forEach((function(e){t.adapter_.deregisterInteractionHandler(e,t.interactionStartHandler_),t.adapter_.deregisterThumbContainerInteractionHandler(e,t.thumbContainerPointerHandler_)})),this.adapter_.deregisterInteractionHandler("keydown",this.keydownHandler_),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.setupTrackMarker=function(){this.isDiscrete_&&this.hasTrackMarker_&&0!==this.getStep()&&this.adapter_.setTrackMarkers(this.getStep(),this.getMax(),this.getMin())},e.prototype.layout=function(){this.rect_=this.adapter_.computeBoundingRect(),this.updateUIForCurrentValue_()},e.prototype.getValue=function(){return this.value_},e.prototype.setValue=function(t){this.setValue_(t,!1)},e.prototype.getMax=function(){return this.max_},e.prototype.setMax=function(t){if(t<this.min_)throw new Error("Cannot set max to be less than the slider's minimum value");this.max_=t,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(s.strings.ARIA_VALUEMAX,String(this.max_)),this.setupTrackMarker()},e.prototype.getMin=function(){return this.min_},e.prototype.setMin=function(t){if(t>this.max_)throw new Error("Cannot set min to be greater than the slider's maximum value");this.min_=t,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(s.strings.ARIA_VALUEMIN,String(this.min_)),this.setupTrackMarker()},e.prototype.getStep=function(){return this.step_},e.prototype.setStep=function(t){if(t<0)throw new Error("Step cannot be set to a negative number");this.isDiscrete_&&("number"!=typeof t||t<1)&&(t=1),this.step_=t,this.setValue_(this.value_,!1,!0),this.setupTrackMarker()},e.prototype.isDisabled=function(){return this.disabled_},e.prototype.setDisabled=function(t){this.disabled_=t,this.toggleClass_(s.cssClasses.DISABLED,this.disabled_),this.disabled_?(this.savedTabIndex_=this.adapter_.getTabIndex(),this.adapter_.setAttribute(s.strings.ARIA_DISABLED,"true"),this.adapter_.removeAttribute("tabindex")):(this.adapter_.removeAttribute(s.strings.ARIA_DISABLED),isNaN(this.savedTabIndex_)||this.adapter_.setAttribute("tabindex",String(this.savedTabIndex_)))},e.prototype.handleDown_=function(t){var e=this;if(!this.disabled_){this.preventFocusState_=!0,this.setInTransit_(!this.handlingThumbTargetEvt_),this.handlingThumbTargetEvt_=!1,this.setActive_(!0);var n=function(t){e.handleMove_(t)},r=c[t.type],i=function t(){e.handleUp_(),e.adapter_.deregisterBodyInteractionHandler(r,n),u.forEach((function(n){return e.adapter_.deregisterBodyInteractionHandler(n,t)}))};this.adapter_.registerBodyInteractionHandler(r,n),u.forEach((function(t){return e.adapter_.registerBodyInteractionHandler(t,i)})),this.setValueFromEvt_(t)}},e.prototype.handleMove_=function(t){t.preventDefault(),this.setValueFromEvt_(t)},e.prototype.handleUp_=function(){this.setActive_(!1),this.adapter_.notifyChange()},e.prototype.getPageX_=function(t){return t.targetTouches&&t.targetTouches.length>0?t.targetTouches[0].pageX:t.pageX},e.prototype.setValueFromEvt_=function(t){var e=this.getPageX_(t),n=this.computeValueFromPageX_(e);this.setValue_(n,!0)},e.prototype.computeValueFromPageX_=function(t){var e=this.max_,n=this.min_,r=(t-this.rect_.left)/this.rect_.width;return this.adapter_.isRTL()&&(r=1-r),n+r*(e-n)},e.prototype.handleKeydown_=function(t){var e=this.getKeyId_(t),n=this.getValueForKeyId_(e);isNaN(n)||(t.preventDefault(),this.adapter_.addClass(s.cssClasses.FOCUS),this.setValue_(n,!0),this.adapter_.notifyChange())},e.prototype.getKeyId_=function(t){return t.key===d||37===t.keyCode?d:t.key===f||39===t.keyCode?f:t.key===_||38===t.keyCode?_:t.key===l||40===t.keyCode?l:t.key===h||36===t.keyCode?h:t.key===p||35===t.keyCode?p:t.key===y||33===t.keyCode?y:t.key===C||34===t.keyCode?C:""},e.prototype.getValueForKeyId_=function(t){var e=this.max_,n=this.min_,r=this.step_||(e-n)/100;switch(this.adapter_.isRTL()&&(t===d||t===f)&&(r=-r),t){case d:case l:return this.value_-r;case f:case _:return this.value_+r;case h:return this.min_;case p:return this.max_;case y:return this.value_+r*s.numbers.PAGE_FACTOR;case C:return this.value_-r*s.numbers.PAGE_FACTOR;default:return NaN}},e.prototype.handleFocus_=function(){this.preventFocusState_||this.adapter_.addClass(s.cssClasses.FOCUS)},e.prototype.handleBlur_=function(){this.preventFocusState_=!1,this.adapter_.removeClass(s.cssClasses.FOCUS)},e.prototype.setValue_=function(t,e,n){if(void 0===n&&(n=!1),t!==this.value_||n){var r=this.min_,i=this.max_,o=t===r||t===i;this.step_&&!o&&(t=this.quantize_(t)),t<r?t=r:t>i&&(t=i),this.value_=t,this.adapter_.setAttribute(s.strings.ARIA_VALUENOW,String(this.value_)),this.updateUIForCurrentValue_(),e&&(this.adapter_.notifyInput(),this.isDiscrete_&&this.adapter_.setMarkerValue(t))}},e.prototype.quantize_=function(t){return Math.round(t/this.step_)*this.step_},e.prototype.updateUIForCurrentValue_=function(){var t=this,e=this.max_,n=this.min_,r=(this.value_-n)/(e-n),o=r*this.rect_.width;this.adapter_.isRTL()&&(o=this.rect_.width-o);var s=(0,i.getCorrectPropertyName)(window,"transform"),a=(0,i.getCorrectEventName)(window,"transitionend");if(this.inTransit_){this.adapter_.registerThumbContainerInteractionHandler(a,(function e(){t.setInTransit_(!1),t.adapter_.deregisterThumbContainerInteractionHandler(a,e)}))}requestAnimationFrame((function(){t.adapter_.setThumbContainerStyleProperty(s,"translateX("+o+"px) translateX(-50%)"),t.adapter_.setTrackStyleProperty(s,"scaleX("+r+")")}))},e.prototype.setActive_=function(t){this.active_=t,this.toggleClass_(s.cssClasses.ACTIVE,this.active_)},e.prototype.setInTransit_=function(t){this.inTransit_=t,this.toggleClass_(s.cssClasses.IN_TRANSIT,this.inTransit_)},e.prototype.toggleClass_=function(t,e){e?this.adapter_.addClass(t):this.adapter_.removeClass(t)},e}(o.MDCFoundation);e.MDCSliderFoundation=m,e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCSnackbarFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(13);var s=o.cssClasses.OPENING,a=o.cssClasses.OPEN,u=o.cssClasses.CLOSING,c=o.strings.REASON_ACTION,l=o.strings.REASON_DISMISS,d=function(t){function e(n){var i=t.call(this,r.__assign({},e.defaultAdapter,n))||this;return i.isOpen_=!1,i.animationFrame_=0,i.animationTimer_=0,i.autoDismissTimer_=0,i.autoDismissTimeoutMs_=o.numbers.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,i.closeOnEscape_=!0,i}return r.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return o.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer_(),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=0,this.adapter_.removeClass(s),this.adapter_.removeClass(a),this.adapter_.removeClass(u)},e.prototype.open=function(){var t=this;this.clearAutoDismissTimer_(),this.isOpen_=!0,this.adapter_.notifyOpening(),this.adapter_.removeClass(u),this.adapter_.addClass(s),this.adapter_.announce(),this.runNextAnimationFrame_((function(){t.adapter_.addClass(a),t.animationTimer_=setTimeout((function(){var e=t.getTimeoutMs();t.handleAnimationTimerEnd_(),t.adapter_.notifyOpened(),e!==o.numbers.INDETERMINATE&&(t.autoDismissTimer_=setTimeout((function(){t.close(l)}),e))}),o.numbers.SNACKBAR_ANIMATION_OPEN_TIME_MS)}))},e.prototype.close=function(t){var e=this;void 0===t&&(t=""),this.isOpen_&&(cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,this.clearAutoDismissTimer_(),this.isOpen_=!1,this.adapter_.notifyClosing(t),this.adapter_.addClass(o.cssClasses.CLOSING),this.adapter_.removeClass(o.cssClasses.OPEN),this.adapter_.removeClass(o.cssClasses.OPENING),clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout((function(){e.handleAnimationTimerEnd_(),e.adapter_.notifyClosed(t)}),o.numbers.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.isOpen_},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs_},e.prototype.setTimeoutMs=function(t){var e=o.numbers.MIN_AUTO_DISMISS_TIMEOUT_MS,n=o.numbers.MAX_AUTO_DISMISS_TIMEOUT_MS,r=o.numbers.INDETERMINATE;if(!(t===o.numbers.INDETERMINATE||t<=n&&t>=e))throw new Error("\n        timeoutMs must be an integer in the range "+e+"â€“"+n+"\n        (or "+r+" to disable), but got '"+t+"'");this.autoDismissTimeoutMs_=t},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape_},e.prototype.setCloseOnEscape=function(t){this.closeOnEscape_=t},e.prototype.handleKeyDown=function(t){("Escape"===t.key||27===t.keyCode)&&this.getCloseOnEscape()&&this.close(l)},e.prototype.handleActionButtonClick=function(t){this.close(c)},e.prototype.handleActionIconClick=function(t){this.close(l)},e.prototype.clearAutoDismissTimer_=function(){clearTimeout(this.autoDismissTimer_),this.autoDismissTimer_=0},e.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter_.removeClass(o.cssClasses.OPENING),this.adapter_.removeClass(o.cssClasses.CLOSING)},e.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)}))},e}(i.MDCFoundation);
/**
                                              * @license
                                              * Copyright 2018 Google Inc.
                                              *
                                              * Permission is hereby granted, free of charge, to any person obtaining a copy
                                              * of this software and associated documentation files (the "Software"), to deal
                                              * in the Software without restriction, including without limitation the rights
                                              * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                              * copies of the Software, and to permit persons to whom the Software is
                                              * furnished to do so, subject to the following conditions:
                                              *
                                              * The above copyright notice and this permission notice shall be included in
                                              * all copies or substantial portions of the Software.
                                              *
                                              * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                              * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                              * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                              * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                              * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                              * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                              * THE SOFTWARE.
                                              */e.MDCSnackbarFoundation=d,e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.announce=void 0;var r=n(13),i=r.numbers.ARIA_LIVE_DELAY_MS,o=r.strings.ARIA_LIVE_LABEL_TEXT_ATTR;e.announce=function(t,e){void 0===e&&(e=t);var n=t.getAttribute("aria-live"),r=e.textContent.trim();r&&n&&(t.setAttribute("aria-live","off"),e.textContent="",e.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',e.setAttribute(o,r),setTimeout((function(){t.setAttribute("aria-live",n),e.removeAttribute(o),e.textContent=r}),i))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCSwitchFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(70);var s=function(t){function e(n){return t.call(this,r.__assign({},e.defaultAdapter,n))||this}return r.__extends(e,t),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlChecked:function(){},setNativeControlDisabled:function(){}}},enumerable:!0,configurable:!0}),e.prototype.setChecked=function(t){this.adapter_.setNativeControlChecked(t),this.updateCheckedStyling_(t)},e.prototype.setDisabled=function(t){this.adapter_.setNativeControlDisabled(t),t?this.adapter_.addClass(o.cssClasses.DISABLED):this.adapter_.removeClass(o.cssClasses.DISABLED)},e.prototype.handleChange=function(t){var e=t.target;this.updateCheckedStyling_(e.checked)},e.prototype.updateCheckedStyling_=function(t){t?this.adapter_.addClass(o.cssClasses.CHECKED):this.adapter_.removeClass(o.cssClasses.CHECKED)},e}(i.MDCFoundation);
/**
                               * @license
                               * Copyright 2018 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCSwitchFoundation=s,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"},e.strings={NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},e.strings={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTabFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(143);var s=function(t){function e(n){var i=t.call(this,r.__assign({},e.defaultAdapter,n))||this;return i.focusOnActivate_=!0,i}return r.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!0,configurable:!0}),e.prototype.handleClick=function(){this.adapter_.notifyInteracted()},e.prototype.isActive=function(){return this.adapter_.hasClass(o.cssClasses.ACTIVE)},e.prototype.setFocusOnActivate=function(t){this.focusOnActivate_=t},e.prototype.activate=function(t){this.adapter_.addClass(o.cssClasses.ACTIVE),this.adapter_.setAttr(o.strings.ARIA_SELECTED,"true"),this.adapter_.setAttr(o.strings.TABINDEX,"0"),this.adapter_.activateIndicator(t),this.focusOnActivate_&&this.adapter_.focus()},e.prototype.deactivate=function(){this.isActive()&&(this.adapter_.removeClass(o.cssClasses.ACTIVE),this.adapter_.setAttr(o.strings.ARIA_SELECTED,"false"),this.adapter_.setAttr(o.strings.TABINDEX,"-1"),this.adapter_.deactivateIndicator())},e.prototype.computeDimensions=function(){var t=this.adapter_.getOffsetWidth(),e=this.adapter_.getOffsetLeft(),n=this.adapter_.getContentOffsetWidth(),r=this.adapter_.getContentOffsetLeft();return{contentLeft:e+r,contentRight:e+r+n,rootLeft:e,rootRight:e+t}},e}(i.MDCFoundation);
/**
                               * @license
                               * Copyright 2018 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCTabFoundation=s,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTabBarFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(74);var s=new Set;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */s.add(o.strings.ARROW_LEFT_KEY),s.add(o.strings.ARROW_RIGHT_KEY),s.add(o.strings.END_KEY),s.add(o.strings.HOME_KEY),s.add(o.strings.ENTER_KEY),s.add(o.strings.SPACE_KEY);var a=new Map;a.set(o.numbers.ARROW_LEFT_KEYCODE,o.strings.ARROW_LEFT_KEY),a.set(o.numbers.ARROW_RIGHT_KEYCODE,o.strings.ARROW_RIGHT_KEY),a.set(o.numbers.END_KEYCODE,o.strings.END_KEY),a.set(o.numbers.HOME_KEYCODE,o.strings.HOME_KEY),a.set(o.numbers.ENTER_KEYCODE,o.strings.ENTER_KEY),a.set(o.numbers.SPACE_KEYCODE,o.strings.SPACE_KEY);var u=function(t){function e(n){var i=t.call(this,r.__assign({},e.defaultAdapter,n))||this;return i.useAutomaticActivation_=!1,i}return r.__extends(e,t),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return o.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!0,configurable:!0}),e.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation_=t},e.prototype.activateTab=function(t){var e,n=this.adapter_.getPreviousActiveTabIndex();this.indexIsInRange_(t)&&t!==n&&(-1!==n&&(this.adapter_.deactivateTabAtIndex(n),e=this.adapter_.getTabIndicatorClientRectAtIndex(n)),this.adapter_.activateTabAtIndex(t,e),this.scrollIntoView(t),this.adapter_.notifyTabActivated(t))},e.prototype.handleKeyDown=function(t){var e=this.getKeyFromEvent_(t);if(void 0!==e)if(this.isActivationKey_(e)||t.preventDefault(),this.useAutomaticActivation_){if(this.isActivationKey_(e))return;var n=this.determineTargetFromKey_(this.adapter_.getPreviousActiveTabIndex(),e);this.adapter_.setActiveTab(n),this.scrollIntoView(n)}else{var r=this.adapter_.getFocusedTabIndex();if(this.isActivationKey_(e))this.adapter_.setActiveTab(r);else{n=this.determineTargetFromKey_(r,e);this.adapter_.focusTabAtIndex(n),this.scrollIntoView(n)}}},e.prototype.handleTabInteraction=function(t){this.adapter_.setActiveTab(this.adapter_.getIndexOfTabById(t.detail.tabId))},e.prototype.scrollIntoView=function(t){if(this.indexIsInRange_(t))return 0===t?this.adapter_.scrollTo(0):t===this.adapter_.getTabListLength()-1?this.adapter_.scrollTo(this.adapter_.getScrollContentWidth()):this.isRTL_()?this.scrollIntoViewRTL_(t):void this.scrollIntoView_(t)},e.prototype.determineTargetFromKey_=function(t,e){var n=this.isRTL_(),r=this.adapter_.getTabListLength()-1,i=e===o.strings.END_KEY,s=e===o.strings.ARROW_LEFT_KEY&&!n||e===o.strings.ARROW_RIGHT_KEY&&n,a=e===o.strings.ARROW_RIGHT_KEY&&!n||e===o.strings.ARROW_LEFT_KEY&&n,u=t;return i?u=r:s?u-=1:a?u+=1:u=0,u<0?u=r:u>r&&(u=0),u},e.prototype.calculateScrollIncrement_=function(t,e,n,r){var i=this.adapter_.getTabDimensionsAtIndex(e),s=i.contentLeft-n-r,a=i.contentRight-n-o.numbers.EXTRA_SCROLL_AMOUNT,u=s+o.numbers.EXTRA_SCROLL_AMOUNT;return e<t?Math.min(a,0):Math.max(u,0)},e.prototype.calculateScrollIncrementRTL_=function(t,e,n,r,i){var s=this.adapter_.getTabDimensionsAtIndex(e),a=i-s.contentLeft-n,u=i-s.contentRight-n-r+o.numbers.EXTRA_SCROLL_AMOUNT,c=a-o.numbers.EXTRA_SCROLL_AMOUNT;return e>t?Math.max(u,0):Math.min(c,0)},e.prototype.findAdjacentTabIndexClosestToEdge_=function(t,e,n,r){var i=e.rootLeft-n,o=e.rootRight-n-r,s=i+o;return i<0||s<0?t-1:o>0||s>0?t+1:-1},e.prototype.findAdjacentTabIndexClosestToEdgeRTL_=function(t,e,n,r,i){var o=i-e.rootLeft-r-n,s=i-e.rootRight-n,a=o+s;return o>0||a>0?t+1:s<0||a<0?t-1:-1},e.prototype.getKeyFromEvent_=function(t){return s.has(t.key)?t.key:a.get(t.keyCode)},e.prototype.isActivationKey_=function(t){return t===o.strings.SPACE_KEY||t===o.strings.ENTER_KEY},e.prototype.indexIsInRange_=function(t){return t>=0&&t<this.adapter_.getTabListLength()},e.prototype.isRTL_=function(){return this.adapter_.isRTL()},e.prototype.scrollIntoView_=function(t){var e=this.adapter_.getScrollPosition(),n=this.adapter_.getOffsetWidth(),r=this.adapter_.getTabDimensionsAtIndex(t),i=this.findAdjacentTabIndexClosestToEdge_(t,r,e,n);if(this.indexIsInRange_(i)){var o=this.calculateScrollIncrement_(t,i,e,n);this.adapter_.incrementScroll(o)}},e.prototype.scrollIntoViewRTL_=function(t){var e=this.adapter_.getScrollPosition(),n=this.adapter_.getOffsetWidth(),r=this.adapter_.getTabDimensionsAtIndex(t),i=this.adapter_.getScrollContentWidth(),o=this.findAdjacentTabIndexClosestToEdgeRTL_(t,r,e,n,i);if(this.indexIsInRange_(o)){var s=this.calculateScrollIncrementRTL_(t,o,e,n,i);this.adapter_.incrementScroll(s)}},e}(i.MDCFoundation);e.MDCTabBarFoundation=u,e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.numbers={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32},e.strings={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTextFieldCharacterCounter=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(2),o=n(25);var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundation",{get:function(){return this.foundation_},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,e={setContent:function(e){t.root_.textContent=e}};return new o.MDCTextFieldCharacterCounterFoundation(e)},e}(i.MDCComponent);
/**
                             * @license
                             * Copyright 2019 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCTextFieldCharacterCounter=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var r={ROOT:"mdc-text-field-character-counter"},i={ROOT_SELECTOR:"."+r.ROOT};e.strings=i,e.cssClasses=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTextFieldFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(26);var s=["mousedown","touchstart"],a=["click","keydown"],u=function(t){function e(n,i){void 0===i&&(i={});var o=t.call(this,r.__assign({},e.defaultAdapter,n))||this;return o.isFocused_=!1,o.receivedUserInput_=!1,o.isValid_=!0,o.useNativeValidation_=!0,o.helperText_=i.helperText,o.characterCounter_=i.characterCounter,o.leadingIcon_=i.leadingIcon,o.trailingIcon_=i.trailingIcon,o.inputFocusHandler_=function(){return o.activateFocus()},o.inputBlurHandler_=function(){return o.deactivateFocus()},o.inputInputHandler_=function(){return o.handleInput()},o.setPointerXOffset_=function(t){return o.setTransformOrigin(t)},o.textFieldInteractionHandler_=function(){return o.handleTextFieldInteraction()},o.validationAttributeChangeHandler_=function(t){return o.handleValidationAttributeChange(t)},o}return r.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return o.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat_",{get:function(){var t=this.getNativeInput_().type;return o.ALWAYS_FLOAT_TYPES.indexOf(t)>=0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat_||this.isFocused_||!!this.getValue()||this.isBadInput_()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused_&&!this.isValid()&&!!this.getValue()},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver((function(){}))},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this;this.adapter_.isFocused()?this.inputFocusHandler_():this.adapter_.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter_.floatLabel(!0)),this.adapter_.registerInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter_.registerInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter_.registerInputInteractionHandler("input",this.inputInputHandler_),s.forEach((function(e){t.adapter_.registerInputInteractionHandler(e,t.setPointerXOffset_)})),a.forEach((function(e){t.adapter_.registerTextFieldInteractionHandler(e,t.textFieldInteractionHandler_)})),this.validationObserver_=this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_),this.setCharacterCounter_(this.getValue().length)},e.prototype.destroy=function(){var t=this;this.adapter_.deregisterInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter_.deregisterInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter_.deregisterInputInteractionHandler("input",this.inputInputHandler_),s.forEach((function(e){t.adapter_.deregisterInputInteractionHandler(e,t.setPointerXOffset_)})),a.forEach((function(e){t.adapter_.deregisterTextFieldInteractionHandler(e,t.textFieldInteractionHandler_)})),this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_)},e.prototype.handleTextFieldInteraction=function(){var t=this.adapter_.getNativeInput();t&&t.disabled||(this.receivedUserInput_=!0)},e.prototype.handleValidationAttributeChange=function(t){var e=this;t.some((function(t){return o.VALIDATION_ATTR_WHITELIST.indexOf(t)>-1&&(e.styleValidity_(!0),!0)})),t.indexOf("maxlength")>-1&&this.setCharacterCounter_(this.getValue().length)},e.prototype.notchOutline=function(t){if(this.adapter_.hasOutline())if(t){var e=this.adapter_.hasClass(o.cssClasses.DENSE)?o.numbers.DENSE_LABEL_SCALE:o.numbers.LABEL_SCALE,n=this.adapter_.getLabelWidth()*e;this.adapter_.notchOutline(n)}else this.adapter_.closeOutline()},e.prototype.activateFocus=function(){this.isFocused_=!0,this.styleFocused_(this.isFocused_),this.adapter_.activateLineRipple(),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake)),this.helperText_&&this.helperText_.showToScreenReader()},e.prototype.setTransformOrigin=function(t){var e=t.touches,n=e?e[0]:t,r=n.target.getBoundingClientRect(),i=n.clientX-r.left;this.adapter_.setLineRippleTransformOrigin(i)},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setCharacterCounter_(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput_||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused_=!1,this.adapter_.deactivateLineRipple();var t=this.isValid();this.styleValidity_(t),this.styleFocused_(this.isFocused_),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput_=!1)},e.prototype.getValue=function(){return this.getNativeInput_().value},e.prototype.setValue=function(t){this.getValue()!==t&&(this.getNativeInput_().value=t),this.setCharacterCounter_(t.length);var e=this.isValid();this.styleValidity_(e),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation_?this.isNativeInputValid_():this.isValid_},e.prototype.setValid=function(t){this.isValid_=t,this.styleValidity_(t);var e=!t&&!this.isFocused_&&!!this.getValue();this.adapter_.hasLabel()&&this.adapter_.shakeLabel(e)},e.prototype.setUseNativeValidation=function(t){this.useNativeValidation_=t},e.prototype.isDisabled=function(){return this.getNativeInput_().disabled},e.prototype.setDisabled=function(t){this.getNativeInput_().disabled=t,this.styleDisabled_(t)},e.prototype.setHelperTextContent=function(t){this.helperText_&&this.helperText_.setContent(t)},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon_&&this.leadingIcon_.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon_&&this.leadingIcon_.setContent(t)},e.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon_&&this.trailingIcon_.setAriaLabel(t)},e.prototype.setTrailingIconContent=function(t){this.trailingIcon_&&this.trailingIcon_.setContent(t)},e.prototype.setCharacterCounter_=function(t){if(this.characterCounter_){var e=this.getNativeInput_().maxLength;if(-1===e)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter_.setCounterValue(t,e)}},e.prototype.isBadInput_=function(){return this.getNativeInput_().validity.badInput||!1},e.prototype.isNativeInputValid_=function(){return this.getNativeInput_().validity.valid},e.prototype.styleValidity_=function(t){var n=e.cssClasses.INVALID;t?this.adapter_.removeClass(n):this.adapter_.addClass(n),this.helperText_&&this.helperText_.setValidity(t)},e.prototype.styleFocused_=function(t){var n=e.cssClasses.FOCUSED;t?this.adapter_.addClass(n):this.adapter_.removeClass(n)},e.prototype.styleDisabled_=function(t){var n=e.cssClasses,r=n.DISABLED,i=n.INVALID;t?(this.adapter_.addClass(r),this.adapter_.removeClass(i)):this.adapter_.removeClass(r),this.leadingIcon_&&this.leadingIcon_.setDisabled(t),this.trailingIcon_&&this.trailingIcon_.setDisabled(t)},e.prototype.getNativeInput_=function(){return(this.adapter_?this.adapter_.getNativeInput():null)||{disabled:!1,maxLength:-1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(i.MDCFoundation);
/**
                                                       * @license
                                                       * Copyright 2016 Google Inc.
                                                       *
                                                       * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                       * of this software and associated documentation files (the "Software"), to deal
                                                       * in the Software without restriction, including without limitation the rights
                                                       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                       * copies of the Software, and to permit persons to whom the Software is
                                                       * furnished to do so, subject to the following conditions:
                                                       *
                                                       * The above copyright notice and this permission notice shall be included in
                                                       * all copies or substantial portions of the Software.
                                                       *
                                                       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                       * THE SOFTWARE.
                                                       */e.MDCTextFieldFoundation=u,e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTextFieldHelperText=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(2),o=n(27);var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundation",{get:function(){return this.foundation_},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},hasClass:function(e){return t.root_.classList.contains(e)},setAttr:function(e,n){return t.root_.setAttribute(e,n)},removeAttr:function(e){return t.root_.removeAttribute(e)},setContent:function(e){t.root_.textContent=e}};return new o.MDCTextFieldHelperTextFoundation(e)},e}(i.MDCComponent);
/**
                             * @license
                             * Copyright 2017 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCTextFieldHelperText=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var r={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},i={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+r.ROOT};e.strings=i,e.cssClasses=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTextFieldIcon=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(2),o=n(81);var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundation",{get:function(){return this.foundation_},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,e={getAttr:function(e){return t.root_.getAttribute(e)},setAttr:function(e,n){return t.root_.setAttribute(e,n)},removeAttr:function(e){return t.root_.removeAttribute(e)},setContent:function(e){t.root_.textContent=e},registerInteractionHandler:function(e,n){return t.listen(e,n)},deregisterInteractionHandler:function(e,n){return t.unlisten(e,n)},notifyIconAction:function(){return t.emit(o.MDCTextFieldIconFoundation.strings.ICON_EVENT,{},!0)}};return new o.MDCTextFieldIconFoundation(e)},e}(i.MDCComponent);
/**
                             * @license
                             * Copyright 2017 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCTextFieldIcon=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTextFieldIconFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(82);var s=["click","keydown"],a=function(t){function e(n){var i=t.call(this,r.__assign({},e.defaultAdapter,n))||this;return i.savedTabIndex_=null,i.interactionHandler_=function(t){return i.handleInteraction(t)},i}return r.__extends(e,t),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this;this.savedTabIndex_=this.adapter_.getAttr("tabindex"),s.forEach((function(e){t.adapter_.registerInteractionHandler(e,t.interactionHandler_)}))},e.prototype.destroy=function(){var t=this;s.forEach((function(e){t.adapter_.deregisterInteractionHandler(e,t.interactionHandler_)}))},e.prototype.setDisabled=function(t){this.savedTabIndex_&&(t?(this.adapter_.setAttr("tabindex","-1"),this.adapter_.removeAttr("role")):(this.adapter_.setAttr("tabindex",this.savedTabIndex_),this.adapter_.setAttr("role",o.strings.ICON_ROLE)))},e.prototype.setAriaLabel=function(t){this.adapter_.setAttr("aria-label",t)},e.prototype.setContent=function(t){this.adapter_.setContent(t)},e.prototype.handleInteraction=function(t){var e="Enter"===t.key||13===t.keyCode;("click"===t.type||e)&&this.adapter_.notifyIconAction()},e}(i.MDCFoundation);
/**
                                                * @license
                                                * Copyright 2017 Google Inc.
                                                *
                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                * of this software and associated documentation files (the "Software"), to deal
                                                * in the Software without restriction, including without limitation the rights
                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                * copies of the Software, and to permit persons to whom the Software is
                                                * furnished to do so, subject to the following conditions:
                                                *
                                                * The above copyright notice and this permission notice shall be included in
                                                * all copies or substantial portions of the Software.
                                                *
                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                * THE SOFTWARE.
                                                */e.MDCTextFieldIconFoundation=a,e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.strings={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"},e.cssClasses={ROOT:"mdc-text-field__icon"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(78);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(27);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(79);Object.defineProperty(e,"helperTextCssClasses",{enumerable:!0,get:function(){return o.cssClasses}}),Object.defineProperty(e,"helperTextStrings",{enumerable:!0,get:function(){return o.strings}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCFixedTopAppBarFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(7);var o=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.wasScrolled_=!1,e}return r.__extends(e,t),e.prototype.handleTargetScroll=function(){this.adapter_.getViewportScrollY()<=0?this.wasScrolled_&&(this.adapter_.removeClass(i.cssClasses.FIXED_SCROLLED_CLASS),this.wasScrolled_=!1):this.wasScrolled_||(this.adapter_.addClass(i.cssClasses.FIXED_SCROLLED_CLASS),this.wasScrolled_=!0)},e}(n(28).MDCTopAppBarFoundation);
/**
                                        * @license
                                        * Copyright 2018 Google Inc.
                                        *
                                        * Permission is hereby granted, free of charge, to any person obtaining a copy
                                        * of this software and associated documentation files (the "Software"), to deal
                                        * in the Software without restriction, including without limitation the rights
                                        * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                        * copies of the Software, and to permit persons to whom the Software is
                                        * furnished to do so, subject to the following conditions:
                                        *
                                        * The above copyright notice and this permission notice shall be included in
                                        * all copies or substantial portions of the Software.
                                        *
                                        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                        * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                        * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                        * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                        * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                        * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                        * THE SOFTWARE.
                                        */e.MDCFixedTopAppBarFoundation=o,e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCShortTopAppBarFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(7);var o=function(t){function e(e){var n=t.call(this,e)||this;return n.isCollapsed_=!1,n.isAlwaysCollapsed_=!1,n}return r.__extends(e,t),Object.defineProperty(e.prototype,"isCollapsed",{get:function(){return this.isCollapsed_},enumerable:!0,configurable:!0}),e.prototype.init=function(){t.prototype.init.call(this),this.adapter_.getTotalActionItems()>0&&this.adapter_.addClass(i.cssClasses.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter_.hasClass(i.cssClasses.SHORT_COLLAPSED_CLASS))},e.prototype.setAlwaysCollapsed=function(t){this.isAlwaysCollapsed_=!!t,this.isAlwaysCollapsed_?this.collapse_():this.maybeCollapseBar_()},e.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed_},e.prototype.handleTargetScroll=function(){this.maybeCollapseBar_()},e.prototype.maybeCollapseBar_=function(){this.isAlwaysCollapsed_||(this.adapter_.getViewportScrollY()<=0?this.isCollapsed_&&this.uncollapse_():this.isCollapsed_||this.collapse_())},e.prototype.uncollapse_=function(){this.adapter_.removeClass(i.cssClasses.SHORT_COLLAPSED_CLASS),this.isCollapsed_=!1},e.prototype.collapse_=function(){this.adapter_.addClass(i.cssClasses.SHORT_COLLAPSED_CLASS),this.isCollapsed_=!0},e}(n(29).MDCTopAppBarBaseFoundation);
/**
                                            * @license
                                            * Copyright 2018 Google Inc.
                                            *
                                            * Permission is hereby granted, free of charge, to any person obtaining a copy
                                            * of this software and associated documentation files (the "Software"), to deal
                                            * in the Software without restriction, including without limitation the rights
                                            * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                            * copies of the Software, and to permit persons to whom the Software is
                                            * furnished to do so, subject to the following conditions:
                                            *
                                            * The above copyright notice and this permission notice shall be included in
                                            * all copies or substantial portions of the Software.
                                            *
                                            * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                            * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                            * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                            * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                            * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                            * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                            * THE SOFTWARE.
                                            */e.MDCShortTopAppBarFoundation=o,e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCDataTableFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(30);var s=function(t){function e(n){return t.call(this,r.__assign({},e.defaultAdapter,n))||this}return r.__extends(e,t),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassAtRowIndex:function(){},getRowCount:function(){return 0},getRowElements:function(){return[]},getRowIdAtIndex:function(){return""},getRowIndexByChildElement:function(){return 0},getSelectedRowCount:function(){return 0},isCheckboxAtRowIndexChecked:function(){return!1},isHeaderRowCheckboxChecked:function(){return!1},isRowsSelectable:function(){return!1},notifyRowSelectionChanged:function(){},notifySelectedAll:function(){},notifyUnselectedAll:function(){},registerHeaderRowCheckbox:function(){},registerRowCheckboxes:function(){},removeClassAtRowIndex:function(){},setAttributeAtRowIndex:function(){},setHeaderRowCheckboxChecked:function(){},setHeaderRowCheckboxIndeterminate:function(){},setRowCheckboxCheckedAtIndex:function(){}}},enumerable:!0,configurable:!0}),e.prototype.layout=function(){this.adapter_.isRowsSelectable()&&(this.adapter_.registerHeaderRowCheckbox(),this.adapter_.registerRowCheckboxes(),this.setHeaderRowCheckboxState_())},e.prototype.layoutAsync=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(t){switch(t.label){case 0:return this.adapter_.isRowsSelectable()?[4,this.adapter_.registerHeaderRowCheckbox()]:[3,3];case 1:return t.sent(),[4,this.adapter_.registerRowCheckboxes()];case 2:t.sent(),this.setHeaderRowCheckboxState_(),t.label=3;case 3:return[2]}}))}))},e.prototype.getRows=function(){return this.adapter_.getRowElements()},e.prototype.setSelectedRowIds=function(t){for(var e=0;e<this.adapter_.getRowCount();e++){var n=this.adapter_.getRowIdAtIndex(e),r=!1;n&&t.indexOf(n)>=0&&(r=!0),this.adapter_.setRowCheckboxCheckedAtIndex(e,r),this.selectRowAtIndex_(e,r)}this.setHeaderRowCheckboxState_()},e.prototype.getSelectedRowIds=function(){for(var t=[],e=0;e<this.adapter_.getRowCount();e++)this.adapter_.isCheckboxAtRowIndexChecked(e)&&t.push(this.adapter_.getRowIdAtIndex(e));return t},e.prototype.handleHeaderRowCheckboxChange=function(){for(var t=this.adapter_.isHeaderRowCheckboxChecked(),e=0;e<this.adapter_.getRowCount();e++)this.adapter_.setRowCheckboxCheckedAtIndex(e,t),this.selectRowAtIndex_(e,t);t?this.adapter_.notifySelectedAll():this.adapter_.notifyUnselectedAll()},e.prototype.handleRowCheckboxChange=function(t){var e=this.adapter_.getRowIndexByChildElement(t.target);if(-1!==e){var n=this.adapter_.isCheckboxAtRowIndexChecked(e);this.selectRowAtIndex_(e,n),this.setHeaderRowCheckboxState_();var r=this.adapter_.getRowIdAtIndex(e);this.adapter_.notifyRowSelectionChanged({rowId:r,rowIndex:e,selected:n})}},e.prototype.setHeaderRowCheckboxState_=function(){this.adapter_.getSelectedRowCount()===this.adapter_.getRowCount()?(this.adapter_.setHeaderRowCheckboxChecked(!0),this.adapter_.setHeaderRowCheckboxIndeterminate(!1)):0===this.adapter_.getSelectedRowCount()?(this.adapter_.setHeaderRowCheckboxIndeterminate(!1),this.adapter_.setHeaderRowCheckboxChecked(!1)):(this.adapter_.setHeaderRowCheckboxIndeterminate(!0),this.adapter_.setHeaderRowCheckboxChecked(!1))},e.prototype.selectRowAtIndex_=function(t,e){e?(this.adapter_.addClassAtRowIndex(t,o.cssClasses.ROW_SELECTED),this.adapter_.setAttributeAtRowIndex(t,o.strings.ARIA_SELECTED,"true")):(this.adapter_.removeClassAtRowIndex(t,o.cssClasses.ROW_SELECTED),this.adapter_.setAttributeAtRowIndex(t,o.strings.ARIA_SELECTED,"false"))},e}(i.MDCFoundation);
/**
                               * @license
                               * Copyright 2019 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCDataTableFoundation=s},,function(t,e,n){n(89),t.exports=n(90)},function(t,e,n){t.exports=n.p+"bundle.css"},function(t,e,n){"use strict";var r=n(91),i=document.querySelector(".material-content");if(null!=i){[].map.call(i.querySelectorAll(".mdc-surface-ripple"),(function(t){return new r.MDCRipple(t)})),[].map.call(i.querySelectorAll(".mdc-button"),(function(t){return new r.MDCRipple(t)})),[].map.call(i.querySelectorAll(".mdc-tabs-selector"),(function(t){return new r.MDCTabBar(t)})),[].map.call(i.querySelectorAll(".mdc-select"),(function(t){return new r.MDCSelect(t)})),[].map.call(i.querySelectorAll(".mdc-text-field"),(function(t){return new r.MDCTextField(t)})),[].map.call(i.querySelectorAll(".mdc-radio"),(function(t){return new r.MDCRadio(t)})),[].map.call(i.querySelectorAll(".mdc-form-field"),(function(t){return new r.MDCFormField(t)})),[].map.call(i.querySelectorAll(".mdc-checkbox"),(function(t){return new r.MDCCheckbox(t)})),[].map.call(i.querySelectorAll(".mdc-list"),(function(t){var e=new r.MDCList(t);e.listElements.map((function(t){new r.MDCRipple(t)})),e.singleSelection=!0}));var o=i.querySelector(".mdc-slider");if(null!=o)new r.MDCSlider(o).value=50;var s=r.MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));if(null!=s){var a=r.MDCTopAppBar.attachTo(document.getElementById("app-bar"));a.setScrollTarget(document.getElementById("main-content")),a.listen("MDCTopAppBar:nav",(function(){s.open=!s.open}))}var u=Array.from(i.querySelectorAll(".mdc-switch"));null!=u&&u.forEach((function(t){return new r.MDCSwitch(t)}))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(92);Object.defineProperty(e,"MDCCheckbox",{enumerable:!0,get:function(){return r.MDCCheckbox}});var i=n(93);Object.defineProperty(e,"MDCChipSet",{enumerable:!0,get:function(){return i.MDCChipSet}});var o=n(97);Object.defineProperty(e,"MDCDialog",{enumerable:!0,get:function(){return o.MDCDialog}});var s=n(101);Object.defineProperty(e,"MDCDrawer",{enumerable:!0,get:function(){return s.MDCDrawer}});var a=n(103);Object.defineProperty(e,"MDCFormField",{enumerable:!0,get:function(){return a.MDCFormField}});var u=n(105);Object.defineProperty(e,"MDCIconButtonToggle",{enumerable:!0,get:function(){return u.MDCIconButtonToggle}});var c=n(107);Object.defineProperty(e,"MDCLinearProgress",{enumerable:!0,get:function(){return c.MDCLinearProgress}});var l=n(109);Object.defineProperty(e,"MDCList",{enumerable:!0,get:function(){return l.MDCList}});var d=n(110);Object.defineProperty(e,"MDCMenu",{enumerable:!0,get:function(){return d.MDCMenu}});var f=n(113);Object.defineProperty(e,"MDCRadio",{enumerable:!0,get:function(){return f.MDCRadio}});var _=n(115);Object.defineProperty(e,"MDCRipple",{enumerable:!0,get:function(){return _.MDCRipple}});var p=n(116);Object.defineProperty(e,"MDCSelect",{enumerable:!0,get:function(){return p.MDCSelect}});var h=n(124);Object.defineProperty(e,"MDCSlider",{enumerable:!0,get:function(){return h.MDCSlider}});var C=n(126);Object.defineProperty(e,"MDCSnackbar",{enumerable:!0,get:function(){return C.MDCSnackbar}});var y=n(128);Object.defineProperty(e,"MDCSwitch",{enumerable:!0,get:function(){return y.MDCSwitch}});var m=n(130);Object.defineProperty(e,"MDCTabBar",{enumerable:!0,get:function(){return m.MDCTabBar}});var g=n(144);Object.defineProperty(e,"MDCTextField",{enumerable:!0,get:function(){return g.MDCTextField}});var E=n(83);Object.defineProperty(e,"MDCTextFieldHelperText",{enumerable:!0,get:function(){return E.MDCTextFieldHelperText}});var v=n(148);Object.defineProperty(e,"MDCTopAppBar",{enumerable:!0,get:function(){return v.MDCTopAppBar}});var b=n(150);Object.defineProperty(e,"MDCDataTable",{enumerable:!0,get:function(){return b.MDCDataTable}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(31);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(34);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(33);Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(94);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(95);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(35);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(16);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(9);Object.defineProperty(e,"chipCssClasses",{enumerable:!0,get:function(){return o.cssClasses}}),Object.defineProperty(e,"chipStrings",{enumerable:!0,get:function(){return o.strings}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(96);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(36);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(37);Object.defineProperty(e,"chipSetCssClasses",{enumerable:!0,get:function(){return o.cssClasses}}),Object.defineProperty(e,"chipSetStrings",{enumerable:!0,get:function(){return o.strings}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCChipSet=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(2),o=n(35),s=n(16),a=n(36);var u=s.MDCChipFoundation.strings,c=u.INTERACTION_EVENT,l=u.SELECTION_EVENT,d=u.REMOVAL_EVENT,f=u.NAVIGATION_EVENT,_=a.MDCChipSetFoundation.strings.CHIP_SELECTOR,p=0,h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"chips",{get:function(){return this.chips_.slice()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectedChipIds",{get:function(){return this.foundation_.getSelectedChipIds()},enumerable:!0,configurable:!0}),e.prototype.initialize=function(t){void 0===t&&(t=function(t){return new o.MDCChip(t)}),this.chipFactory_=t,this.chips_=this.instantiateChips_(this.chipFactory_)},e.prototype.initialSyncWithDOM=function(){var t=this;this.chips_.forEach((function(e){e.id&&e.selected&&t.foundation_.select(e.id)})),this.handleChipInteraction_=function(e){return t.foundation_.handleChipInteraction(e.detail.chipId)},this.handleChipSelection_=function(e){t.foundation_.handleChipSelection(e.detail.chipId,e.detail.selected,e.detail.shouldIgnore)},this.handleChipRemoval_=function(e){return t.foundation_.handleChipRemoval(e.detail.chipId)},this.handleChipNavigation_=function(e){return t.foundation_.handleChipNavigation(e.detail.chipId,e.detail.key,e.detail.source)},this.listen(c,this.handleChipInteraction_),this.listen(l,this.handleChipSelection_),this.listen(d,this.handleChipRemoval_),this.listen(f,this.handleChipNavigation_)},e.prototype.destroy=function(){this.chips_.forEach((function(t){t.destroy()})),this.unlisten(c,this.handleChipInteraction_),this.unlisten(l,this.handleChipSelection_),this.unlisten(d,this.handleChipRemoval_),this.unlisten(f,this.handleChipNavigation_),t.prototype.destroy.call(this)},e.prototype.addChip=function(t){t.id=t.id||"mdc-chip-"+ ++p,this.chips_.push(this.chipFactory_(t))},e.prototype.getDefaultFoundation=function(){var t=this,e={focusChipPrimaryActionAtIndex:function(e){t.chips_[e].focusPrimaryAction()},focusChipTrailingActionAtIndex:function(e){t.chips_[e].focusTrailingAction()},getChipListCount:function(){return t.chips_.length},getIndexOfChipById:function(e){return t.findChipIndex_(e)},hasClass:function(e){return t.root_.classList.contains(e)},isRTL:function(){return"rtl"===window.getComputedStyle(t.root_).getPropertyValue("direction")},removeChipAtIndex:function(e){e>=0&&e<t.chips_.length&&(t.chips_[e].destroy(),t.chips_[e].remove(),t.chips_.splice(e,1))},removeFocusFromChipAtIndex:function(e){t.chips_[e].removeFocus()},selectChipAtIndex:function(e,n,r){e>=0&&e<t.chips_.length&&t.chips_[e].setSelectedFromChipSet(n,r)}};return new a.MDCChipSetFoundation(e)},e.prototype.instantiateChips_=function(t){return[].slice.call(this.root_.querySelectorAll(_)).map((function(e){return e.id=e.id||"mdc-chip-"+ ++p,t(e)}))},e.prototype.findChipIndex_=function(t){for(var e=0;e<this.chips_.length;e++)if(this.chips_[e].id===t)return e;return-1},e}(i.MDCComponent);
/**
                                             * @license
                                             * Copyright 2016 Google Inc.
                                             *
                                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                                             * of this software and associated documentation files (the "Software"), to deal
                                             * in the Software without restriction, including without limitation the rights
                                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                             * copies of the Software, and to permit persons to whom the Software is
                                             * furnished to do so, subject to the following conditions:
                                             *
                                             * The above copyright notice and this permission notice shall be included in
                                             * all copies or substantial portions of the Software.
                                             *
                                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                             * THE SOFTWARE.
                                             */e.MDCChipSet=h},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.util=void 0;var r=n(98);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(39);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(38);Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})}));var s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(40));e.util=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCDialog=void 0;var r=c(n(0)),i=n(2),o=n(4),s=n(3),a=n(38),u=c(n(40));function c(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=a.MDCDialogFoundation.strings,d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.foundation_.isOpen()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"escapeKeyAction",{get:function(){return this.foundation_.getEscapeKeyAction()},set:function(t){this.foundation_.setEscapeKeyAction(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scrimClickAction",{get:function(){return this.foundation_.getScrimClickAction()},set:function(t){this.foundation_.setScrimClickAction(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"autoStackButtons",{get:function(){return this.foundation_.getAutoStackButtons()},set:function(t){this.foundation_.setAutoStackButtons(t)},enumerable:!0,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){var e,n,i=this.root_.querySelector(l.CONTAINER_SELECTOR);if(!i)throw new Error("Dialog component requires a "+l.CONTAINER_SELECTOR+" container element");this.container_=i,this.content_=this.root_.querySelector(l.CONTENT_SELECTOR),this.buttons_=[].slice.call(this.root_.querySelectorAll(l.BUTTON_SELECTOR)),this.defaultButton_=this.root_.querySelector("["+l.BUTTON_DEFAULT_ATTRIBUTE+"]"),this.focusTrapFactory_=t,this.buttonRipples_=[];try{for(var o=r.__values(this.buttons_),a=o.next();!a.done;a=o.next()){var u=a.value;this.buttonRipples_.push(new s.MDCRipple(u))}}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}},e.prototype.initialSyncWithDOM=function(){var t=this;this.focusTrap_=u.createFocusTrapInstance(this.container_,this.focusTrapFactory_,this.getInitialFocusEl_()||void 0),this.handleClick_=this.foundation_.handleClick.bind(this.foundation_),this.handleKeydown_=this.foundation_.handleKeydown.bind(this.foundation_),this.handleDocumentKeydown_=this.foundation_.handleDocumentKeydown.bind(this.foundation_),this.handleLayout_=this.layout.bind(this);var e=["resize","orientationchange"];this.handleOpening_=function(){e.forEach((function(e){return window.addEventListener(e,t.handleLayout_)})),document.addEventListener("keydown",t.handleDocumentKeydown_)},this.handleClosing_=function(){e.forEach((function(e){return window.removeEventListener(e,t.handleLayout_)})),document.removeEventListener("keydown",t.handleDocumentKeydown_)},this.listen("click",this.handleClick_),this.listen("keydown",this.handleKeydown_),this.listen(l.OPENING_EVENT,this.handleOpening_),this.listen(l.CLOSING_EVENT,this.handleClosing_)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick_),this.unlisten("keydown",this.handleKeydown_),this.unlisten(l.OPENING_EVENT,this.handleOpening_),this.unlisten(l.CLOSING_EVENT,this.handleClosing_),this.handleClosing_(),this.buttonRipples_.forEach((function(t){return t.destroy()})),t.prototype.destroy.call(this)},e.prototype.layout=function(){this.foundation_.layout()},e.prototype.open=function(){this.foundation_.open()},e.prototype.close=function(t){void 0===t&&(t=""),this.foundation_.close(t)},e.prototype.getDefaultFoundation=function(){var t=this,e={addBodyClass:function(t){return document.body.classList.add(t)},addClass:function(e){return t.root_.classList.add(e)},areButtonsStacked:function(){return u.areTopsMisaligned(t.buttons_)},clickDefaultButton:function(){return t.defaultButton_&&t.defaultButton_.click()},eventTargetMatches:function(t,e){return!!t&&(0,o.matches)(t,e)},getActionFromEvent:function(t){if(!t.target)return"";var e=(0,o.closest)(t.target,"["+l.ACTION_ATTRIBUTE+"]");return e&&e.getAttribute(l.ACTION_ATTRIBUTE)},getInitialFocusEl:function(){return t.getInitialFocusEl_()},hasClass:function(e){return t.root_.classList.contains(e)},isContentScrollable:function(){return u.isScrollable(t.content_)},notifyClosed:function(e){return t.emit(l.CLOSED_EVENT,e?{action:e}:{})},notifyClosing:function(e){return t.emit(l.CLOSING_EVENT,e?{action:e}:{})},notifyOpened:function(){return t.emit(l.OPENED_EVENT,{})},notifyOpening:function(){return t.emit(l.OPENING_EVENT,{})},releaseFocus:function(){return t.focusTrap_.deactivate()},removeBodyClass:function(t){return document.body.classList.remove(t)},removeClass:function(e){return t.root_.classList.remove(e)},reverseButtons:function(){t.buttons_.reverse(),t.buttons_.forEach((function(t){t.parentElement.appendChild(t)}))},trapFocus:function(){return t.focusTrap_.activate()}};return new a.MDCDialogFoundation(e)},e.prototype.getInitialFocusEl_=function(){return document.querySelector("["+l.INITIAL_FOCUS_ATTRIBUTE+"]")},e}(i.MDCComponent);e.MDCDialog=d},function(t,e,n){"use strict";var r=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],i=r.join(","),o="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function s(t,e){e=e||{};var n,r,s,u=[],c=[],f=t.querySelectorAll(i);for(e.includeContainer&&o.call(t,i)&&(f=Array.prototype.slice.apply(f)).unshift(t),n=0;n<f.length;n++)a(r=f[n])&&(0===(s=l(r))?u.push(r):c.push({documentOrder:n,tabIndex:s,node:r}));return c.sort(d).map((function(t){return t.node})).concat(u)}function a(t){return!(!u(t)||function(t){return function(t){return f(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e=function(t){for(var e=0;e<t.length;e++)if(t[e].checked)return t[e]}(t.ownerDocument.querySelectorAll('input[type="radio"][name="'+t.name+'"]'));return!e||e===t}(t)}(t)||l(t)<0)}function u(t){return!(t.disabled||function(t){return f(t)&&"hidden"===t.type}(t)||function(t){return null===t.offsetParent||"hidden"===getComputedStyle(t).visibility}(t))}s.isTabbable=function(t){if(!t)throw new Error("No node provided");return!1!==o.call(t,i)&&a(t)},s.isFocusable=function(t){if(!t)throw new Error("No node provided");return!1!==o.call(t,c)&&u(t)};var c=r.concat("iframe").join(",");function l(t){var e=parseInt(t.getAttribute("tabindex"),10);return isNaN(e)?function(t){return"true"===t.contentEditable}(t)?0:t.tabIndex:e}function d(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex}function f(t){return"INPUT"===t.tagName}t.exports=s},function(t,e,n){"use strict";t.exports=function(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];for(var i in n)r.call(n,i)&&(t[i]=n[i])}return t};var r=Object.prototype.hasOwnProperty},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.util=void 0;var r=n(102);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(41);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(19);Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})}));var s=n(42);Object.keys(s).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return s[t]}})}));var a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(43));e.util=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCDrawer=void 0;var r,i=_(n(0)),o=n(2),s=n(18),a=n(11),u=n(17),c=(r=u)&&r.__esModule?r:{default:r},l=n(19),d=n(42),f=_(n(43));function _(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var p=l.MDCDismissibleDrawerFoundation.cssClasses,h=l.MDCDismissibleDrawerFoundation.strings,C=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"open",{get:function(){return this.foundation_.isOpen()},set:function(t){t?this.foundation_.open():this.foundation_.close()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"list",{get:function(){return this.list_},enumerable:!0,configurable:!0}),e.prototype.initialize=function(t,e){void 0===t&&(t=c.default),void 0===e&&(e=function(t){return new s.MDCList(t)});var n=this.root_.querySelector("."+a.MDCListFoundation.cssClasses.ROOT);n&&(this.list_=e(n),this.list_.wrapFocus=!0),this.focusTrapFactory_=t},e.prototype.initialSyncWithDOM=function(){var t=this,e=p.MODAL,n=h.SCRIM_SELECTOR;this.scrim_=this.root_.parentNode.querySelector(n),this.scrim_&&this.root_.classList.contains(e)&&(this.handleScrimClick_=function(){return t.foundation_.handleScrimClick()},this.scrim_.addEventListener("click",this.handleScrimClick_),this.focusTrap_=f.createFocusTrapInstance(this.root_,this.focusTrapFactory_)),this.handleKeydown_=function(e){return t.foundation_.handleKeydown(e)},this.handleTransitionEnd_=function(e){return t.foundation_.handleTransitionEnd(e)},this.listen("keydown",this.handleKeydown_),this.listen("transitionend",this.handleTransitionEnd_)},e.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown_),this.unlisten("transitionend",this.handleTransitionEnd_),this.list_&&this.list_.destroy();var t=p.MODAL;this.scrim_&&this.handleScrimClick_&&this.root_.classList.contains(t)&&(this.scrim_.removeEventListener("click",this.handleScrimClick_),this.open=!1)},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},hasClass:function(e){return t.root_.classList.contains(e)},elementHasClass:function(t,e){return t.classList.contains(e)},saveFocus:function(){return t.previousFocus_=document.activeElement},restoreFocus:function(){var e=t.previousFocus_;e&&e.focus&&t.root_.contains(document.activeElement)&&e.focus()},focusActiveNavigationItem:function(){var e=t.root_.querySelector("."+a.MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS);e&&e.focus()},notifyClose:function(){return t.emit(h.CLOSE_EVENT,{},!0)},notifyOpen:function(){return t.emit(h.OPEN_EVENT,{},!0)},trapFocus:function(){return t.focusTrap_.activate()},releaseFocus:function(){return t.focusTrap_.deactivate()}},n=p.DISMISSIBLE,r=p.MODAL;if(this.root_.classList.contains(n))return new l.MDCDismissibleDrawerFoundation(e);if(this.root_.classList.contains(r))return new d.MDCModalDrawerFoundation(e);throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are "+n+" and "+r+".")},e}(o.MDCComponent);e.MDCDrawer=C},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(104);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(45);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(44);Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCFormField=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(2),o=n(44);var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"input",{get:function(){return this.input_},set:function(t){this.input_=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"label_",{get:function(){var t=o.MDCFormFieldFoundation.strings.LABEL_SELECTOR;return this.root_.querySelector(t)},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,e={activateInputRipple:function(){t.input_&&t.input_.ripple&&t.input_.ripple.activate()},deactivateInputRipple:function(){t.input_&&t.input_.ripple&&t.input_.ripple.deactivate()},deregisterInteractionHandler:function(e,n){t.label_&&t.label_.removeEventListener(e,n)},registerInteractionHandler:function(e,n){t.label_&&t.label_.addEventListener(e,n)}};return new o.MDCFormFieldFoundation(e)},e}(i.MDCComponent);
/**
                             * @license
                             * Copyright 2017 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCFormField=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(106);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(47);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(46);Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCIconButtonToggle=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),i=n(2),o=n(3),s=n(46);var a=s.MDCIconButtonToggleFoundation.strings,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ripple_=e.createRipple_(),e}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick_=function(){return t.foundation_.handleClick()},this.listen("click",this.handleClick_)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick_),this.ripple_.destroy(),t.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root_.classList.add(e)},hasClass:function(e){return t.root_.classList.contains(e)},notifyChange:function(e){return t.emit(a.CHANGE_EVENT,e)},removeClass:function(e){return t.root_.classList.remove(e)},setAttr:function(e,n){return t.root_.setAttribute(e,n)}};return new s.MDCIconButtonToggleFoundation(e)},Object.defineProperty(e.prototype,"ripple",{get:function(){return this.ripple_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"on",{get:function(){return this.foundation_.isOn()},set:function(t){this.foundation_.toggle(t)},enumerable:!0,configurable:!0}),e.prototype.createRipple_=function(){var t=new o.MDCRipple(this.root_);return t.unbounded=!0,t},e}(i.MDCComponent);e.MDCIconButtonToggle=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(108);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(49);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(48);Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCLinearProgress=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(2),o=n(48);var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"determinate",{set:function(t){this.foundation_.setDeterminate(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"progress",{set:function(t){this.foundation_.setProgress(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"buffer",{set:function(t){this.foundation_.setBuffer(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"reverse",{set:function(t){this.foundation_.setReverse(t)},enumerable:!0,configurable:!0}),e.prototype.open=function(){this.foundation_.open()},e.prototype.close=function(){this.foundation_.close()},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root_.classList.add(e)},forceLayout:function(){return t.root_.offsetWidth},getBuffer:function(){return t.root_.querySelector(o.MDCLinearProgressFoundation.strings.BUFFER_SELECTOR)},getPrimaryBar:function(){return t.root_.querySelector(o.MDCLinearProgressFoundation.strings.PRIMARY_BAR_SELECTOR)},hasClass:function(e){return t.root_.classList.contains(e)},removeClass:function(e){return t.root_.classList.remove(e)},setStyle:function(t,e,n){return t.style.setProperty(e,n)}};return new o.MDCLinearProgressFoundation(e)},e}(i.MDCComponent);
/**
                             * @license
                             * Copyright 2017 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCLinearProgress=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(18);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(10);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(11);Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(8);Object.defineProperty(e,"Corner",{enumerable:!0,get:function(){return r.Corner}});var i=n(50);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(12);Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})}));var s=n(51);Object.keys(s).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return s[t]}})}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCMenuSurface=void 0;var r=u(n(0)),i=n(2),o=n(8),s=n(20),a=u(n(112));function u(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){var t=this,e=this.root_.parentElement;this.anchorElement=e&&e.classList.contains(o.cssClasses.ANCHOR)?e:null,this.root_.classList.contains(o.cssClasses.FIXED)&&this.setFixedPosition(!0),this.handleKeydown_=function(e){return t.foundation_.handleKeydown(e)},this.handleBodyClick_=function(e){return t.foundation_.handleBodyClick(e)},this.registerBodyClickListener_=function(){return document.body.addEventListener("click",t.handleBodyClick_)},this.deregisterBodyClickListener_=function(){return document.body.removeEventListener("click",t.handleBodyClick_)},this.listen("keydown",this.handleKeydown_),this.listen(o.strings.OPENED_EVENT,this.registerBodyClickListener_),this.listen(o.strings.CLOSED_EVENT,this.deregisterBodyClickListener_)},e.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown_),this.unlisten(o.strings.OPENED_EVENT,this.registerBodyClickListener_),this.unlisten(o.strings.CLOSED_EVENT,this.deregisterBodyClickListener_),t.prototype.destroy.call(this)},e.prototype.isOpen=function(){return this.foundation_.isOpen()},e.prototype.open=function(){this.foundation_.open()},e.prototype.close=function(t){void 0===t&&(t=!1),this.foundation_.close(t)},Object.defineProperty(e.prototype,"quickOpen",{set:function(t){this.foundation_.setQuickOpen(t)},enumerable:!0,configurable:!0}),e.prototype.setIsHoisted=function(t){this.foundation_.setIsHoisted(t)},e.prototype.setMenuSurfaceAnchorElement=function(t){this.anchorElement=t},e.prototype.setFixedPosition=function(t){t?this.root_.classList.add(o.cssClasses.FIXED):this.root_.classList.remove(o.cssClasses.FIXED),this.foundation_.setFixedPosition(t)},e.prototype.setAbsolutePosition=function(t,e){this.foundation_.setAbsolutePosition(t,e),this.setIsHoisted(!0)},e.prototype.setAnchorCorner=function(t){this.foundation_.setAnchorCorner(t)},e.prototype.setAnchorMargin=function(t){this.foundation_.setAnchorMargin(t)},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},hasClass:function(e){return t.root_.classList.contains(e)},hasAnchor:function(){return!!t.anchorElement},notifyClose:function(){return t.emit(s.MDCMenuSurfaceFoundation.strings.CLOSED_EVENT,{})},notifyOpen:function(){return t.emit(s.MDCMenuSurfaceFoundation.strings.OPENED_EVENT,{})},isElementInContainer:function(e){return t.root_.contains(e)},isRtl:function(){return"rtl"===getComputedStyle(t.root_).getPropertyValue("direction")},setTransformOrigin:function(e){var n=a.getTransformPropertyName(window)+"-origin";t.root_.style.setProperty(n,e)},isFocused:function(){return document.activeElement===t.root_},saveFocus:function(){t.previousFocus_=document.activeElement},restoreFocus:function(){t.root_.contains(document.activeElement)&&t.previousFocus_&&t.previousFocus_.focus&&t.previousFocus_.focus()},getInnerDimensions:function(){return{width:t.root_.offsetWidth,height:t.root_.offsetHeight}},getAnchorDimensions:function(){return t.anchorElement?t.anchorElement.getBoundingClientRect():null},getWindowDimensions:function(){return{width:window.innerWidth,height:window.innerHeight}},getBodyDimensions:function(){return{width:document.body.clientWidth,height:document.body.clientHeight}},getWindowScroll:function(){return{x:window.pageXOffset,y:window.pageYOffset}},setPosition:function(e){t.root_.style.left="left"in e?e.left+"px":"",t.root_.style.right="right"in e?e.right+"px":"",t.root_.style.top="top"in e?e.top+"px":"",t.root_.style.bottom="bottom"in e?e.bottom+"px":""},setMaxHeight:function(e){t.root_.style.maxHeight=e}};return new s.MDCMenuSurfaceFoundation(e)},e}(i.MDCComponent);
/**
                             * @license
                             * Copyright 2018 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCMenuSurface=c},function(t,e,n){"use strict";
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var r;Object.defineProperty(e,"__esModule",{value:!0}),e.getTransformPropertyName=function(t,e){if(void 0===e&&(e=!1),void 0===r||e){var n=t.document.createElement("div");r="transform"in n.style?"transform":"webkitTransform"}return r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(114);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(53);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(52);Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCRadio=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),i=n(2),o=n(6),s=n(3),a=n(5),u=n(52);var c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ripple_=e.createRipple_(),e}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"checked",{get:function(){return this.nativeControl_.checked},set:function(t){this.nativeControl_.checked=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.nativeControl_.disabled},set:function(t){this.foundation_.setDisabled(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.nativeControl_.value},set:function(t){this.nativeControl_.value=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ripple",{get:function(){return this.ripple_},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.ripple_.destroy(),t.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},setNativeControlDisabled:function(e){return t.nativeControl_.disabled=e}};return new u.MDCRadioFoundation(e)},e.prototype.createRipple_=function(){var t=this,e=r.__assign({},s.MDCRipple.createAdapter(this),{registerInteractionHandler:function(e,n){return t.nativeControl_.addEventListener(e,n,(0,o.applyPassive)())},deregisterInteractionHandler:function(e,n){return t.nativeControl_.removeEventListener(e,n,(0,o.applyPassive)())},isSurfaceActive:function(){return!1},isUnbounded:function(){return!0}});return new s.MDCRipple(this.root_,new a.MDCRippleFoundation(e))},Object.defineProperty(e.prototype,"nativeControl_",{get:function(){var t=u.MDCRadioFoundation.strings.NATIVE_CONTROL_SELECTOR,e=this.root_.querySelector(t);if(!e)throw new Error("Radio component requires a "+t+" element");return e},enumerable:!0,configurable:!0}),e}(i.MDCComponent);e.MDCRadio=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.util=void 0;var r=n(3);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(32);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(5);Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})}));var s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(15));e.util=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(117);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(21);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(59);Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})}));var s=n(122);Object.keys(s).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return s[t]}})}));var a=n(123);Object.keys(a).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return a[t]}})}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCSelect=void 0;var r=y(n(0)),i=n(2),o=n(54),s=n(56),a=y(n(8)),u=n(50),c=y(n(12)),l=n(57),d=n(3),f=n(5),_=n(21),p=n(59),h=n(60),C=n(63);function y(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,e,n,r,i,a){if(void 0===t&&(t=function(t){return new o.MDCFloatingLabel(t)}),void 0===e&&(e=function(t){return new s.MDCLineRipple(t)}),void 0===n&&(n=function(t){return new l.MDCNotchedOutline(t)}),void 0===r&&(r=function(t){return new u.MDCMenu(t)}),void 0===i&&(i=function(t){return new C.MDCSelectIcon(t)}),void 0===a&&(a=function(t){return new h.MDCSelectHelperText(t)}),this.selectAnchor_=this.root_.querySelector(_.strings.SELECT_ANCHOR_SELECTOR),this.selectedText_=this.root_.querySelector(_.strings.SELECTED_TEXT_SELECTOR),!this.selectedText_)throw new Error("MDCSelect: Missing required element: The following selector must be present: '"+_.strings.SELECTED_TEXT_SELECTOR+"'");if(this.selectedText_.hasAttribute(_.strings.ARIA_CONTROLS)){var c=document.getElementById(this.selectedText_.getAttribute(_.strings.ARIA_CONTROLS));c&&(this.helperText_=a(c))}this.menuSetup_(r);var d=this.root_.querySelector(_.strings.LABEL_SELECTOR);this.label_=d?t(d):null;var f=this.root_.querySelector(_.strings.LINE_RIPPLE_SELECTOR);this.lineRipple_=f?e(f):null;var p=this.root_.querySelector(_.strings.OUTLINE_SELECTOR);this.outline_=p?n(p):null;var y=this.root_.querySelector(_.strings.LEADING_ICON_SELECTOR);y&&(this.leadingIcon_=i(y)),this.root_.classList.contains(_.cssClasses.OUTLINED)||(this.ripple_=this.createRipple_())},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleChange_=function(){return t.foundation_.handleChange()},this.handleFocus_=function(){return t.foundation_.handleFocus()},this.handleBlur_=function(){return t.foundation_.handleBlur()},this.handleClick_=function(e){t.selectedText_.focus(),t.foundation_.handleClick(t.getNormalizedXCoordinate_(e))},this.handleKeydown_=function(e){return t.foundation_.handleKeydown(e)},this.handleMenuItemAction_=function(e){return t.foundation_.handleMenuItemAction(e.detail.index)},this.handleMenuOpened_=function(){return t.foundation_.handleMenuOpened()},this.handleMenuClosed_=function(){return t.foundation_.handleMenuClosed()},this.selectedText_.addEventListener("focus",this.handleFocus_),this.selectedText_.addEventListener("blur",this.handleBlur_),this.selectedText_.addEventListener("click",this.handleClick_),this.selectedText_.addEventListener("keydown",this.handleKeydown_),this.menu_.listen(a.strings.CLOSED_EVENT,this.handleMenuClosed_),this.menu_.listen(a.strings.OPENED_EVENT,this.handleMenuOpened_),this.menu_.listen(c.strings.SELECTED_EVENT,this.handleMenuItemAction_),this.foundation_.init(),this.disabled=this.root_.classList.contains(_.cssClasses.DISABLED)},e.prototype.destroy=function(){this.selectedText_.removeEventListener("change",this.handleChange_),this.selectedText_.removeEventListener("focus",this.handleFocus_),this.selectedText_.removeEventListener("blur",this.handleBlur_),this.selectedText_.removeEventListener("keydown",this.handleKeydown_),this.selectedText_.removeEventListener("click",this.handleClick_),this.menu_.unlisten(a.strings.CLOSED_EVENT,this.handleMenuClosed_),this.menu_.unlisten(a.strings.OPENED_EVENT,this.handleMenuOpened_),this.menu_.unlisten(c.strings.SELECTED_EVENT,this.handleMenuItemAction_),this.menu_.destroy(),this.ripple_&&this.ripple_.destroy(),this.outline_&&this.outline_.destroy(),this.leadingIcon_&&this.leadingIcon_.destroy(),this.helperText_&&this.helperText_.destroy(),t.prototype.destroy.call(this)},Object.defineProperty(e.prototype,"value",{get:function(){return this.foundation_.getValue()},set:function(t){this.foundation_.setValue(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectedIndex",{get:function(){return this.foundation_.getSelectedIndex()},set:function(t){this.foundation_.setSelectedIndex(t,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.foundation_.getDisabled()},set:function(t){this.foundation_.setDisabled(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconAriaLabel",{set:function(t){this.foundation_.setLeadingIconAriaLabel(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconContent",{set:function(t){this.foundation_.setLeadingIconContent(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"helperTextContent",{set:function(t){this.foundation_.setHelperTextContent(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){return this.foundation_.isValid()},set:function(t){this.foundation_.setValid(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"required",{get:function(){return this.foundation_.getRequired()},set:function(t){this.foundation_.setRequired(t)},enumerable:!0,configurable:!0}),e.prototype.layout=function(){this.foundation_.layout()},e.prototype.getDefaultFoundation=function(){var t=r.__assign({},this.getSelectAdapterMethods_(),this.getCommonAdapterMethods_(),this.getOutlineAdapterMethods_(),this.getLabelAdapterMethods_());return new p.MDCSelectFoundation(t,this.getFoundationMap_())},e.prototype.menuSetup_=function(t){this.menuElement_=this.root_.querySelector(_.strings.MENU_SELECTOR),this.menu_=t(this.menuElement_)},e.prototype.createRipple_=function(){var t=this,e=r.__assign({},d.MDCRipple.createAdapter({root_:this.selectAnchor_}),{registerInteractionHandler:function(e,n){return t.selectedText_.addEventListener(e,n)},deregisterInteractionHandler:function(e,n){return t.selectedText_.removeEventListener(e,n)}});return new d.MDCRipple(this.selectAnchor_,new f.MDCRippleFoundation(e))},e.prototype.getSelectAdapterMethods_=function(){var t=this;return{getSelectedMenuItem:function(){return t.menuElement_.querySelector(_.strings.SELECTED_ITEM_SELECTOR)},getMenuItemAttr:function(t,e){return t.getAttribute(e)},setSelectedText:function(e){return t.selectedText_.textContent=e},isSelectedTextFocused:function(){return document.activeElement===t.selectedText_},getSelectedTextAttr:function(e){return t.selectedText_.getAttribute(e)},setSelectedTextAttr:function(e,n){return t.selectedText_.setAttribute(e,n)},openMenu:function(){return t.menu_.open=!0},closeMenu:function(){return t.menu_.open=!1},getAnchorElement:function(){return t.root_.querySelector(_.strings.SELECT_ANCHOR_SELECTOR)},setMenuAnchorElement:function(e){return t.menu_.setAnchorElement(e)},setMenuAnchorCorner:function(e){return t.menu_.setAnchorCorner(e)},setMenuWrapFocus:function(e){return t.menu_.wrapFocus=e},setAttributeAtIndex:function(e,n,r){return t.menu_.items[e].setAttribute(n,r)},removeAttributeAtIndex:function(e,n){return t.menu_.items[e].removeAttribute(n)},focusMenuItemAtIndex:function(e){return t.menu_.items[e].focus()},getMenuItemCount:function(){return t.menu_.items.length},getMenuItemValues:function(){return t.menu_.items.map((function(t){return t.getAttribute(_.strings.VALUE_ATTR)||""}))},getMenuItemTextAtIndex:function(e){return t.menu_.items[e].textContent},addClassAtIndex:function(e,n){return t.menu_.items[e].classList.add(n)},removeClassAtIndex:function(e,n){return t.menu_.items[e].classList.remove(n)}}},e.prototype.getCommonAdapterMethods_=function(){var t=this;return{addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},hasClass:function(e){return t.root_.classList.contains(e)},setRippleCenter:function(e){return t.lineRipple_&&t.lineRipple_.setRippleCenter(e)},activateBottomLine:function(){return t.lineRipple_&&t.lineRipple_.activate()},deactivateBottomLine:function(){return t.lineRipple_&&t.lineRipple_.deactivate()},notifyChange:function(e){var n=t.selectedIndex;t.emit(_.strings.CHANGE_EVENT,{value:e,index:n},!0)}}},e.prototype.getOutlineAdapterMethods_=function(){var t=this;return{hasOutline:function(){return Boolean(t.outline_)},notchOutline:function(e){return t.outline_&&t.outline_.notch(e)},closeOutline:function(){return t.outline_&&t.outline_.closeNotch()}}},e.prototype.getLabelAdapterMethods_=function(){var t=this;return{hasLabel:function(){return!!t.label_},floatLabel:function(e){return t.label_&&t.label_.float(e)},getLabelWidth:function(){return t.label_?t.label_.getWidth():0}}},e.prototype.getNormalizedXCoordinate_=function(t){var e=t.target.getBoundingClientRect();return(this.isTouchEvent_(t)?t.touches[0].clientX:t.clientX)-e.left},e.prototype.isTouchEvent_=function(t){return Boolean(t.touches)},e.prototype.getFoundationMap_=function(){return{helperText:this.helperText_?this.helperText_.foundation:void 0,leadingIcon:this.leadingIcon_?this.leadingIcon_.foundation:void 0}},e}(i.MDCComponent);e.MDCSelect=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
e.cssClasses={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCLineRippleFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(120);var s=function(t){function e(n){var i=t.call(this,r.__assign({},e.defaultAdapter,n))||this;return i.transitionEndHandler_=function(t){return i.handleTransitionEnd(t)},i}return r.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.registerEventHandler("transitionend",this.transitionEndHandler_)},e.prototype.destroy=function(){this.adapter_.deregisterEventHandler("transitionend",this.transitionEndHandler_)},e.prototype.activate=function(){this.adapter_.removeClass(o.cssClasses.LINE_RIPPLE_DEACTIVATING),this.adapter_.addClass(o.cssClasses.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(t){this.adapter_.setStyle("transform-origin",t+"px center")},e.prototype.deactivate=function(){this.adapter_.addClass(o.cssClasses.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(t){var e=this.adapter_.hasClass(o.cssClasses.LINE_RIPPLE_DEACTIVATING);"opacity"===t.propertyName&&e&&(this.adapter_.removeClass(o.cssClasses.LINE_RIPPLE_ACTIVE),this.adapter_.removeClass(o.cssClasses.LINE_RIPPLE_DEACTIVATING))},e}(i.MDCFoundation);
/**
                               * @license
                               * Copyright 2018 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCLineRippleFoundation=s,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCNotchedOutlineFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),o=n(58);var s=function(t){function e(n){return t.call(this,r.__assign({},e.defaultAdapter,n))||this}return r.__extends(e,t),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return o.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!0,configurable:!0}),e.prototype.notch=function(t){var n=e.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=o.numbers.NOTCH_ELEMENT_PADDING),this.adapter_.setNotchWidthProperty(t),this.adapter_.addClass(n)},e.prototype.closeNotch=function(){var t=e.cssClasses.OUTLINE_NOTCHED;this.adapter_.removeClass(t),this.adapter_.removeNotchWidthProperty()},e}(i.MDCFoundation);
/**
                               * @license
                               * Copyright 2017 Google Inc.
                               *
                               * Permission is hereby granted, free of charge, to any person obtaining a copy
                               * of this software and associated documentation files (the "Software"), to deal
                               * in the Software without restriction, including without limitation the rights
                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                               * copies of the Software, and to permit persons to whom the Software is
                               * furnished to do so, subject to the following conditions:
                               *
                               * The above copyright notice and this permission notice shall be included in
                               * all copies or substantial portions of the Software.
                               *
                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                               * THE SOFTWARE.
                               */e.MDCNotchedOutlineFoundation=s,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(60);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(61);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(62);Object.defineProperty(e,"helperTextCssClasses",{enumerable:!0,get:function(){return o.cssClasses}}),Object.defineProperty(e,"helperTextStrings",{enumerable:!0,get:function(){return o.strings}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(63);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(64);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(65);Object.defineProperty(e,"iconStrings",{enumerable:!0,get:function(){return o.strings}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(125);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(22);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(66);Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCSlider=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(2),o=n(6),s=n(22),a=n(66);var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"value",{get:function(){return this.foundation_.getValue()},set:function(t){this.foundation_.setValue(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"min",{get:function(){return this.foundation_.getMin()},set:function(t){this.foundation_.setMin(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"max",{get:function(){return this.foundation_.getMax()},set:function(t){this.foundation_.setMax(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"step",{get:function(){return this.foundation_.getStep()},set:function(t){this.foundation_.setStep(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.foundation_.isDisabled()},set:function(t){this.foundation_.setDisabled(t)},enumerable:!0,configurable:!0}),e.prototype.initialize=function(){this.thumbContainer_=this.root_.querySelector(s.strings.THUMB_CONTAINER_SELECTOR),this.track_=this.root_.querySelector(s.strings.TRACK_SELECTOR),this.pinValueMarker_=this.root_.querySelector(s.strings.PIN_VALUE_MARKER_SELECTOR),this.trackMarkerContainer_=this.root_.querySelector(s.strings.TRACK_MARKER_CONTAINER_SELECTOR)},e.prototype.getDefaultFoundation=function(){var t=this,e={hasClass:function(e){return t.root_.classList.contains(e)},addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},getAttribute:function(e){return t.root_.getAttribute(e)},setAttribute:function(e,n){return t.root_.setAttribute(e,n)},removeAttribute:function(e){return t.root_.removeAttribute(e)},computeBoundingRect:function(){return t.root_.getBoundingClientRect()},getTabIndex:function(){return t.root_.tabIndex},registerInteractionHandler:function(e,n){return t.listen(e,n,(0,o.applyPassive)())},deregisterInteractionHandler:function(e,n){return t.unlisten(e,n,(0,o.applyPassive)())},registerThumbContainerInteractionHandler:function(e,n){t.thumbContainer_.addEventListener(e,n,(0,o.applyPassive)())},deregisterThumbContainerInteractionHandler:function(e,n){t.thumbContainer_.removeEventListener(e,n,(0,o.applyPassive)())},registerBodyInteractionHandler:function(t,e){return document.body.addEventListener(t,e)},deregisterBodyInteractionHandler:function(t,e){return document.body.removeEventListener(t,e)},registerResizeHandler:function(t){return window.addEventListener("resize",t)},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},notifyInput:function(){return t.emit(s.strings.INPUT_EVENT,t)},notifyChange:function(){return t.emit(s.strings.CHANGE_EVENT,t)},setThumbContainerStyleProperty:function(e,n){t.thumbContainer_.style.setProperty(e,n)},setTrackStyleProperty:function(e,n){return t.track_.style.setProperty(e,n)},setMarkerValue:function(e){return t.pinValueMarker_.innerText=e.toLocaleString()},setTrackMarkers:function(e,n,r){var i=e.toLocaleString(),o="linear-gradient(to right, currentColor 2px, transparent 0) "+("0 center / calc((100% - 2px) / "+("(("+n.toLocaleString()+" - "+r.toLocaleString()+") / "+i+")")+") 100% repeat-x");t.trackMarkerContainer_.style.setProperty("background",o)},isRTL:function(){return"rtl"===getComputedStyle(t.root_).direction}};return new a.MDCSliderFoundation(e)},e.prototype.initialSyncWithDOM=function(){var t=this.parseFloat_(this.root_.getAttribute(s.strings.ARIA_VALUENOW),this.value),e=this.parseFloat_(this.root_.getAttribute(s.strings.ARIA_VALUEMIN),this.min),n=this.parseFloat_(this.root_.getAttribute(s.strings.ARIA_VALUEMAX),this.max);e>=this.max?(this.max=n,this.min=e):(this.min=e,this.max=n),this.step=this.parseFloat_(this.root_.getAttribute(s.strings.STEP_DATA_ATTR),this.step),this.value=t,this.disabled=this.root_.hasAttribute(s.strings.ARIA_DISABLED)&&"false"!==this.root_.getAttribute(s.strings.ARIA_DISABLED),this.foundation_.setupTrackMarker()},e.prototype.layout=function(){this.foundation_.layout()},e.prototype.stepUp=function(t){void 0===t&&(t=this.step||1),this.value+=t},e.prototype.stepDown=function(t){void 0===t&&(t=this.step||1),this.value-=t},e.prototype.parseFloat_=function(t,e){var n=parseFloat(t);return"number"==typeof n&&isFinite(n)?n:e},e}(i.MDCComponent);
/**
                             * @license
                             * Copyright 2017 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCSlider=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.util=void 0;var r=n(127);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(13);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(67);Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})}));var s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(68));e.util=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCSnackbar=void 0;var r=c(n(0)),i=n(2),o=n(4),s=n(13),a=n(67),u=c(n(68));function c(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=s.strings.SURFACE_SELECTOR,d=s.strings.LABEL_SELECTOR,f=s.strings.ACTION_SELECTOR,_=s.strings.DISMISS_SELECTOR,p=s.strings.OPENING_EVENT,h=s.strings.OPENED_EVENT,C=s.strings.CLOSING_EVENT,y=s.strings.CLOSED_EVENT,m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){void 0===t&&(t=function(){return u.announce}),this.announce_=t()},e.prototype.initialSyncWithDOM=function(){var t=this;this.surfaceEl_=this.root_.querySelector(l),this.labelEl_=this.root_.querySelector(d),this.actionEl_=this.root_.querySelector(f),this.handleKeyDown_=function(e){return t.foundation_.handleKeyDown(e)},this.handleSurfaceClick_=function(e){var n=e.target;t.isActionButton_(n)?t.foundation_.handleActionButtonClick(e):t.isActionIcon_(n)&&t.foundation_.handleActionIconClick(e)},this.registerKeyDownHandler_(this.handleKeyDown_),this.registerSurfaceClickHandler_(this.handleSurfaceClick_)},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.deregisterKeyDownHandler_(this.handleKeyDown_),this.deregisterSurfaceClickHandler_(this.handleSurfaceClick_)},e.prototype.open=function(){this.foundation_.open()},e.prototype.close=function(t){void 0===t&&(t=""),this.foundation_.close(t)},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root_.classList.add(e)},announce:function(){return t.announce_(t.labelEl_)},notifyClosed:function(e){return t.emit(y,e?{reason:e}:{})},notifyClosing:function(e){return t.emit(C,e?{reason:e}:{})},notifyOpened:function(){return t.emit(h,{})},notifyOpening:function(){return t.emit(p,{})},removeClass:function(e){return t.root_.classList.remove(e)}};return new a.MDCSnackbarFoundation(e)},Object.defineProperty(e.prototype,"timeoutMs",{get:function(){return this.foundation_.getTimeoutMs()},set:function(t){this.foundation_.setTimeoutMs(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"closeOnEscape",{get:function(){return this.foundation_.getCloseOnEscape()},set:function(t){this.foundation_.setCloseOnEscape(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.foundation_.isOpen()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"labelText",{get:function(){return this.labelEl_.textContent},set:function(t){this.labelEl_.textContent=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"actionButtonText",{get:function(){return this.actionEl_.textContent},set:function(t){this.actionEl_.textContent=t},enumerable:!0,configurable:!0}),e.prototype.registerKeyDownHandler_=function(t){this.listen("keydown",t)},e.prototype.deregisterKeyDownHandler_=function(t){this.unlisten("keydown",t)},e.prototype.registerSurfaceClickHandler_=function(t){this.surfaceEl_.addEventListener("click",t)},e.prototype.deregisterSurfaceClickHandler_=function(t){this.surfaceEl_.removeEventListener("click",t)},e.prototype.isActionButton_=function(t){return Boolean((0,o.closest)(t,f))},e.prototype.isActionIcon_=function(t){return Boolean((0,o.closest)(t,_))},e}(i.MDCComponent);e.MDCSnackbar=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(129);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(70);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(69);Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCSwitch=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(2),o=n(6),s=n(4),a=n(3),u=n(5),c=n(69);var l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ripple_=e.createRipple_(),e}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.ripple_.destroy(),this.nativeControl_.removeEventListener("change",this.changeHandler_)},e.prototype.initialSyncWithDOM=function(){var t=this;this.changeHandler_=function(){for(var e,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return(e=t.foundation_).handleChange.apply(e,r.__spread(n))},this.nativeControl_.addEventListener("change",this.changeHandler_),this.checked=this.checked},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},setNativeControlChecked:function(e){return t.nativeControl_.checked=e},setNativeControlDisabled:function(e){return t.nativeControl_.disabled=e}};return new c.MDCSwitchFoundation(e)},Object.defineProperty(e.prototype,"ripple",{get:function(){return this.ripple_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"checked",{get:function(){return this.nativeControl_.checked},set:function(t){this.foundation_.setChecked(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.nativeControl_.disabled},set:function(t){this.foundation_.setDisabled(t)},enumerable:!0,configurable:!0}),e.prototype.createRipple_=function(){var t=this,e=c.MDCSwitchFoundation.strings.RIPPLE_SURFACE_SELECTOR,n=this.root_.querySelector(e),i=r.__assign({},a.MDCRipple.createAdapter(this),{addClass:function(t){return n.classList.add(t)},computeBoundingRect:function(){return n.getBoundingClientRect()},deregisterInteractionHandler:function(e,n){t.nativeControl_.removeEventListener(e,n,(0,o.applyPassive)())},isSurfaceActive:function(){return(0,s.matches)(t.nativeControl_,":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(e,n){t.nativeControl_.addEventListener(e,n,(0,o.applyPassive)())},removeClass:function(t){return n.classList.remove(t)},updateCssVariable:function(t,e){n.style.setProperty(t,e)}});return new a.MDCRipple(this.root_,new u.MDCRippleFoundation(i))},Object.defineProperty(e.prototype,"nativeControl_",{get:function(){var t=c.MDCSwitchFoundation.strings.NATIVE_CONTROL_SELECTOR;return this.root_.querySelector(t)},enumerable:!0,configurable:!0}),e}(i.MDCComponent);
/**
                             * @license
                             * Copyright 2018 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCSwitch=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(131);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(74);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(73);Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTabBar=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),i=n(2),o=n(132),s=n(138),a=n(72),u=n(73);var c=u.MDCTabBarFoundation.strings,l=0,d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"focusOnActivate",{set:function(t){this.tabList_.forEach((function(e){return e.focusOnActivate=t}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"useAutomaticActivation",{set:function(t){this.foundation_.setUseAutomaticActivation(t)},enumerable:!0,configurable:!0}),e.prototype.initialize=function(t,e){void 0===t&&(t=function(t){return new s.MDCTab(t)}),void 0===e&&(e=function(t){return new o.MDCTabScroller(t)}),this.tabList_=this.instantiateTabs_(t),this.tabScroller_=this.instantiateTabScroller_(e)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleTabInteraction_=function(e){return t.foundation_.handleTabInteraction(e)},this.handleKeyDown_=function(e){return t.foundation_.handleKeyDown(e)},this.listen(a.MDCTabFoundation.strings.INTERACTED_EVENT,this.handleTabInteraction_),this.listen("keydown",this.handleKeyDown_);for(var e=0;e<this.tabList_.length;e++)if(this.tabList_[e].active){this.scrollIntoView(e);break}},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.unlisten(a.MDCTabFoundation.strings.INTERACTED_EVENT,this.handleTabInteraction_),this.unlisten("keydown",this.handleKeyDown_),this.tabList_.forEach((function(t){return t.destroy()})),this.tabScroller_&&this.tabScroller_.destroy()},e.prototype.getDefaultFoundation=function(){var t=this,e={scrollTo:function(e){return t.tabScroller_.scrollTo(e)},incrementScroll:function(e){return t.tabScroller_.incrementScroll(e)},getScrollPosition:function(){return t.tabScroller_.getScrollPosition()},getScrollContentWidth:function(){return t.tabScroller_.getScrollContentWidth()},getOffsetWidth:function(){return t.root_.offsetWidth},isRTL:function(){return"rtl"===window.getComputedStyle(t.root_).getPropertyValue("direction")},setActiveTab:function(e){return t.foundation_.activateTab(e)},activateTabAtIndex:function(e,n){return t.tabList_[e].activate(n)},deactivateTabAtIndex:function(e){return t.tabList_[e].deactivate()},focusTabAtIndex:function(e){return t.tabList_[e].focus()},getTabIndicatorClientRectAtIndex:function(e){return t.tabList_[e].computeIndicatorClientRect()},getTabDimensionsAtIndex:function(e){return t.tabList_[e].computeDimensions()},getPreviousActiveTabIndex:function(){for(var e=0;e<t.tabList_.length;e++)if(t.tabList_[e].active)return e;return-1},getFocusedTabIndex:function(){var e=t.getTabElements_(),n=document.activeElement;return e.indexOf(n)},getIndexOfTabById:function(e){for(var n=0;n<t.tabList_.length;n++)if(t.tabList_[n].id===e)return n;return-1},getTabListLength:function(){return t.tabList_.length},notifyTabActivated:function(e){return t.emit(c.TAB_ACTIVATED_EVENT,{index:e},!0)}};return new u.MDCTabBarFoundation(e)},e.prototype.activateTab=function(t){this.foundation_.activateTab(t)},e.prototype.scrollIntoView=function(t){this.foundation_.scrollIntoView(t)},e.prototype.getTabElements_=function(){return[].slice.call(this.root_.querySelectorAll(c.TAB_SELECTOR))},e.prototype.instantiateTabs_=function(t){return this.getTabElements_().map((function(e){return e.id=e.id||"mdc-tab-"+ ++l,t(e)}))},e.prototype.instantiateTabScroller_=function(t){var e=this.root_.querySelector(c.TAB_SCROLLER_SELECTOR);return e?t(e):null},e}(i.MDCComponent);e.MDCTabBar=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTabScroller=void 0;var r=c(n(0)),i=n(2),o=n(6),s=n(4),a=n(133),u=c(n(137));function c(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.area_=this.root_.querySelector(a.MDCTabScrollerFoundation.strings.AREA_SELECTOR),this.content_=this.root_.querySelector(a.MDCTabScrollerFoundation.strings.CONTENT_SELECTOR)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleInteraction_=function(){return t.foundation_.handleInteraction()},this.handleTransitionEnd_=function(e){return t.foundation_.handleTransitionEnd(e)},this.area_.addEventListener("wheel",this.handleInteraction_,(0,o.applyPassive)()),this.area_.addEventListener("touchstart",this.handleInteraction_,(0,o.applyPassive)()),this.area_.addEventListener("pointerdown",this.handleInteraction_,(0,o.applyPassive)()),this.area_.addEventListener("mousedown",this.handleInteraction_,(0,o.applyPassive)()),this.area_.addEventListener("keydown",this.handleInteraction_,(0,o.applyPassive)()),this.content_.addEventListener("transitionend",this.handleTransitionEnd_)},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.area_.removeEventListener("wheel",this.handleInteraction_,(0,o.applyPassive)()),this.area_.removeEventListener("touchstart",this.handleInteraction_,(0,o.applyPassive)()),this.area_.removeEventListener("pointerdown",this.handleInteraction_,(0,o.applyPassive)()),this.area_.removeEventListener("mousedown",this.handleInteraction_,(0,o.applyPassive)()),this.area_.removeEventListener("keydown",this.handleInteraction_,(0,o.applyPassive)()),this.content_.removeEventListener("transitionend",this.handleTransitionEnd_)},e.prototype.getDefaultFoundation=function(){var t=this,e={eventTargetMatchesSelector:function(t,e){return(0,s.matches)(t,e)},addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},addScrollAreaClass:function(e){return t.area_.classList.add(e)},setScrollAreaStyleProperty:function(e,n){return t.area_.style.setProperty(e,n)},setScrollContentStyleProperty:function(e,n){return t.content_.style.setProperty(e,n)},getScrollContentStyleValue:function(e){return window.getComputedStyle(t.content_).getPropertyValue(e)},setScrollAreaScrollLeft:function(e){return t.area_.scrollLeft=e},getScrollAreaScrollLeft:function(){return t.area_.scrollLeft},getScrollContentOffsetWidth:function(){return t.content_.offsetWidth},getScrollAreaOffsetWidth:function(){return t.area_.offsetWidth},computeScrollAreaClientRect:function(){return t.area_.getBoundingClientRect()},computeScrollContentClientRect:function(){return t.content_.getBoundingClientRect()},computeHorizontalScrollbarHeight:function(){return u.computeHorizontalScrollbarHeight(document)}};return new a.MDCTabScrollerFoundation(e)},e.prototype.getScrollPosition=function(){return this.foundation_.getScrollPosition()},e.prototype.getScrollContentWidth=function(){return this.content_.offsetWidth},e.prototype.incrementScroll=function(t){this.foundation_.incrementScroll(t)},e.prototype.scrollTo=function(t){this.foundation_.scrollTo(t)},e}(i.MDCComponent);e.MDCTabScroller=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTabScrollerFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),i=n(1),o=n(71),s=n(134),a=n(135),u=n(136);var c=function(t){function e(n){var i=t.call(this,r.__assign({},e.defaultAdapter,n))||this;return i.isAnimating_=!1,i}return r.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this.adapter_.computeHorizontalScrollbarHeight();this.adapter_.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter_.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL_())return this.computeCurrentScrollPositionRTL_();var t=this.calculateCurrentTranslateX_();return this.adapter_.getScrollAreaScrollLeft()-t},e.prototype.handleInteraction=function(){this.isAnimating_&&this.stopScrollAnimation_()},e.prototype.handleTransitionEnd=function(t){var n=t.target;this.isAnimating_&&this.adapter_.eventTargetMatchesSelector(n,e.strings.CONTENT_SELECTOR)&&(this.isAnimating_=!1,this.adapter_.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(t){0!==t&&this.animate_(this.getIncrementScrollOperation_(t))},e.prototype.incrementScrollImmediate=function(t){if(0!==t){var e=this.getIncrementScrollOperation_(t);0!==e.scrollDelta&&(this.stopScrollAnimation_(),this.adapter_.setScrollAreaScrollLeft(e.finalScrollPosition))}},e.prototype.scrollTo=function(t){if(this.isRTL_())return this.scrollToRTL_(t);this.scrollTo_(t)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance_||(this.rtlScrollerInstance_=this.rtlScrollerFactory_()),this.rtlScrollerInstance_},e.prototype.calculateCurrentTranslateX_=function(){var t=this.adapter_.getScrollContentStyleValue("transform");if("none"===t)return 0;var e=/\((.+?)\)/.exec(t);if(!e)return 0;var n=e[1],i=r.__read(n.split(","),6),o=(i[0],i[1],i[2],i[3],i[4]);i[5];return parseFloat(o)},e.prototype.clampScrollValue_=function(t){var e=this.calculateScrollEdges_();return Math.min(Math.max(e.left,t),e.right)},e.prototype.computeCurrentScrollPositionRTL_=function(){var t=this.calculateCurrentTranslateX_();return this.getRTLScroller().getScrollPositionRTL(t)},e.prototype.calculateScrollEdges_=function(){return{left:0,right:this.adapter_.getScrollContentOffsetWidth()-this.adapter_.getScrollAreaOffsetWidth()}},e.prototype.scrollTo_=function(t){var e=this.getScrollPosition(),n=this.clampScrollValue_(t),r=n-e;this.animate_({finalScrollPosition:n,scrollDelta:r})},e.prototype.scrollToRTL_=function(t){var e=this.getRTLScroller().scrollToRTL(t);this.animate_(e)},e.prototype.getIncrementScrollOperation_=function(t){if(this.isRTL_())return this.getRTLScroller().incrementScrollRTL(t);var e=this.getScrollPosition(),n=t+e,r=this.clampScrollValue_(n);return{finalScrollPosition:r,scrollDelta:r-e}},e.prototype.animate_=function(t){var n=this;0!==t.scrollDelta&&(this.stopScrollAnimation_(),this.adapter_.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter_.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter_.computeScrollAreaClientRect(),requestAnimationFrame((function(){n.adapter_.addClass(e.cssClasses.ANIMATING),n.adapter_.setScrollContentStyleProperty("transform","none")})),this.isAnimating_=!0)},e.prototype.stopScrollAnimation_=function(){this.isAnimating_=!1;var t=this.getAnimatingScrollPosition_();this.adapter_.removeClass(e.cssClasses.ANIMATING),this.adapter_.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter_.setScrollAreaScrollLeft(t)},e.prototype.getAnimatingScrollPosition_=function(){var t=this.calculateCurrentTranslateX_(),e=this.adapter_.getScrollAreaScrollLeft();return this.isRTL_()?this.getRTLScroller().getAnimatingScrollPosition(e,t):e-t},e.prototype.rtlScrollerFactory_=function(){var t=this.adapter_.getScrollAreaScrollLeft();this.adapter_.setScrollAreaScrollLeft(t-1);var e=this.adapter_.getScrollAreaScrollLeft();if(e<0)return this.adapter_.setScrollAreaScrollLeft(t),new a.MDCTabScrollerRTLNegative(this.adapter_);var n=this.adapter_.computeScrollAreaClientRect(),r=this.adapter_.computeScrollContentClientRect(),i=Math.round(r.right-n.right);return this.adapter_.setScrollAreaScrollLeft(t),i===e?new u.MDCTabScrollerRTLReverse(this.adapter_):new s.MDCTabScrollerRTLDefault(this.adapter_)},e.prototype.isRTL_=function(){return"rtl"===this.adapter_.getScrollContentStyleValue("direction")},e}(i.MDCFoundation);e.MDCTabScrollerFoundation=c,e.default=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTabScrollerRTLDefault=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0));var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.getScrollPositionRTL=function(){var t=this.adapter_.getScrollAreaScrollLeft(),e=this.calculateScrollEdges_().right;return Math.round(e-t)},e.prototype.scrollToRTL=function(t){var e=this.calculateScrollEdges_(),n=this.adapter_.getScrollAreaScrollLeft(),r=this.clampScrollValue_(e.right-t);return{finalScrollPosition:r,scrollDelta:r-n}},e.prototype.incrementScrollRTL=function(t){var e=this.adapter_.getScrollAreaScrollLeft(),n=this.clampScrollValue_(e-t);return{finalScrollPosition:n,scrollDelta:n-e}},e.prototype.getAnimatingScrollPosition=function(t){return t},e.prototype.calculateScrollEdges_=function(){return{left:0,right:this.adapter_.getScrollContentOffsetWidth()-this.adapter_.getScrollAreaOffsetWidth()}},e.prototype.clampScrollValue_=function(t){var e=this.calculateScrollEdges_();return Math.min(Math.max(e.left,t),e.right)},e}(n(23).MDCTabScrollerRTL);e.MDCTabScrollerRTLDefault=i,e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTabScrollerRTLNegative=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0));var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.getScrollPositionRTL=function(t){var e=this.adapter_.getScrollAreaScrollLeft();return Math.round(t-e)},e.prototype.scrollToRTL=function(t){var e=this.adapter_.getScrollAreaScrollLeft(),n=this.clampScrollValue_(-t);return{finalScrollPosition:n,scrollDelta:n-e}},e.prototype.incrementScrollRTL=function(t){var e=this.adapter_.getScrollAreaScrollLeft(),n=this.clampScrollValue_(e-t);return{finalScrollPosition:n,scrollDelta:n-e}},e.prototype.getAnimatingScrollPosition=function(t,e){return t-e},e.prototype.calculateScrollEdges_=function(){var t=this.adapter_.getScrollContentOffsetWidth();return{left:this.adapter_.getScrollAreaOffsetWidth()-t,right:0}},e.prototype.clampScrollValue_=function(t){var e=this.calculateScrollEdges_();return Math.max(Math.min(e.right,t),e.left)},e}(n(23).MDCTabScrollerRTL);e.MDCTabScrollerRTLNegative=i,e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTabScrollerRTLReverse=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0));var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.getScrollPositionRTL=function(t){var e=this.adapter_.getScrollAreaScrollLeft();return Math.round(e-t)},e.prototype.scrollToRTL=function(t){var e=this.adapter_.getScrollAreaScrollLeft(),n=this.clampScrollValue_(t);return{finalScrollPosition:n,scrollDelta:e-n}},e.prototype.incrementScrollRTL=function(t){var e=this.adapter_.getScrollAreaScrollLeft(),n=this.clampScrollValue_(e+t);return{finalScrollPosition:n,scrollDelta:e-n}},e.prototype.getAnimatingScrollPosition=function(t,e){return t+e},e.prototype.calculateScrollEdges_=function(){return{left:this.adapter_.getScrollContentOffsetWidth()-this.adapter_.getScrollAreaOffsetWidth(),right:0}},e.prototype.clampScrollValue_=function(t){var e=this.calculateScrollEdges_();return Math.min(Math.max(e.right,t),e.left)},e}(n(23).MDCTabScrollerRTL);e.MDCTabScrollerRTLReverse=i,e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.computeHorizontalScrollbarHeight=
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function(t,e){void 0===e&&(e=!0);if(e&&void 0!==r)return r;var n=t.createElement("div");n.classList.add(i.cssClasses.SCROLL_TEST),t.body.appendChild(n);var o=n.offsetHeight-n.clientHeight;t.body.removeChild(n),e&&(r=o);return o};var r,i=n(71)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTab=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),i=n(2),o=n(3),s=n(5),a=n(139),u=n(72);var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,e){void 0===t&&(t=function(t,e){return new o.MDCRipple(t,e)}),void 0===e&&(e=function(t){return new a.MDCTabIndicator(t)}),this.id=this.root_.id;var n=this.root_.querySelector(u.MDCTabFoundation.strings.RIPPLE_SELECTOR),i=r.__assign({},o.MDCRipple.createAdapter(this),{addClass:function(t){return n.classList.add(t)},removeClass:function(t){return n.classList.remove(t)},updateCssVariable:function(t,e){return n.style.setProperty(t,e)}}),c=new s.MDCRippleFoundation(i);this.ripple_=t(this.root_,c);var l=this.root_.querySelector(u.MDCTabFoundation.strings.TAB_INDICATOR_SELECTOR);this.tabIndicator_=e(l),this.content_=this.root_.querySelector(u.MDCTabFoundation.strings.CONTENT_SELECTOR)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick_=function(){return t.foundation_.handleClick()},this.listen("click",this.handleClick_)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick_),this.ripple_.destroy(),t.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,e={setAttr:function(e,n){return t.root_.setAttribute(e,n)},addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},hasClass:function(e){return t.root_.classList.contains(e)},activateIndicator:function(e){return t.tabIndicator_.activate(e)},deactivateIndicator:function(){return t.tabIndicator_.deactivate()},notifyInteracted:function(){return t.emit(u.MDCTabFoundation.strings.INTERACTED_EVENT,{tabId:t.id},!0)},getOffsetLeft:function(){return t.root_.offsetLeft},getOffsetWidth:function(){return t.root_.offsetWidth},getContentOffsetLeft:function(){return t.content_.offsetLeft},getContentOffsetWidth:function(){return t.content_.offsetWidth},focus:function(){return t.root_.focus()}};return new u.MDCTabFoundation(e)},Object.defineProperty(e.prototype,"active",{get:function(){return this.foundation_.isActive()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"focusOnActivate",{set:function(t){this.foundation_.setFocusOnActivate(t)},enumerable:!0,configurable:!0}),e.prototype.activate=function(t){this.foundation_.activate(t)},e.prototype.deactivate=function(){this.foundation_.deactivate()},e.prototype.computeIndicatorClientRect=function(){return this.tabIndicator_.computeContentClientRect()},e.prototype.computeDimensions=function(){return this.foundation_.computeDimensions()},e.prototype.focus=function(){this.root_.focus()},e}(i.MDCComponent);e.MDCTab=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTabIndicator=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(2),o=n(140),s=n(24),a=n(142);var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.content_=this.root_.querySelector(s.MDCTabIndicatorFoundation.strings.CONTENT_SELECTOR)},e.prototype.computeContentClientRect=function(){return this.foundation_.computeContentClientRect()},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},computeContentClientRect:function(){return t.content_.getBoundingClientRect()},setContentStyleProperty:function(e,n){return t.content_.style.setProperty(e,n)}};return this.root_.classList.contains(s.MDCTabIndicatorFoundation.cssClasses.FADE)?new o.MDCFadingTabIndicatorFoundation(e):new a.MDCSlidingTabIndicatorFoundation(e)},e.prototype.activate=function(t){this.foundation_.activate(t)},e.prototype.deactivate=function(){this.foundation_.deactivate()},e}(i.MDCComponent);
/**
                             * @license
                             * Copyright 2018 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCTabIndicator=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCFadingTabIndicatorFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),i=n(24);var o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.activate=function(){this.adapter_.addClass(i.MDCTabIndicatorFoundation.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter_.removeClass(i.MDCTabIndicatorFoundation.cssClasses.ACTIVE)},e}(i.MDCTabIndicatorFoundation);e.MDCFadingTabIndicatorFoundation=o,e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},e.strings={CONTENT_SELECTOR:".mdc-tab-indicator__content"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCSlidingTabIndicatorFoundation=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),i=n(24);var o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.activate=function(t){if(t){var e=this.computeContentClientRect(),n=t.width/e.width,r=t.left-e.left;this.adapter_.addClass(i.MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION),this.adapter_.setContentStyleProperty("transform","translateX("+r+"px) scaleX("+n+")"),this.computeContentClientRect(),this.adapter_.removeClass(i.MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION),this.adapter_.addClass(i.MDCTabIndicatorFoundation.cssClasses.ACTIVE),this.adapter_.setContentStyleProperty("transform","")}else this.adapter_.addClass(i.MDCTabIndicatorFoundation.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter_.removeClass(i.MDCTabIndicatorFoundation.cssClasses.ACTIVE)},e}(i.MDCTabIndicatorFoundation);e.MDCSlidingTabIndicatorFoundation=o,e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={ACTIVE:"mdc-tab--active"},e.strings={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(145);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(26);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(77);Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})}));var s=n(146);Object.keys(s).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return s[t]}})}));var a=n(83);Object.keys(a).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return a[t]}})}));var u=n(147);Object.keys(u).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return u[t]}})}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTextField=void 0;var r=g(n(0)),i=n(2),o=n(6),s=g(n(4)),a=n(54),u=n(56),c=n(57),l=n(3),d=n(5),f=n(75),_=n(25),p=n(26),h=n(77),C=n(78),y=n(27),m=n(80);function g(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var E=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,e,n,r,i,o,s){void 0===t&&(t=function(t,e){return new l.MDCRipple(t,e)}),void 0===e&&(e=function(t){return new u.MDCLineRipple(t)}),void 0===n&&(n=function(t){return new C.MDCTextFieldHelperText(t)}),void 0===r&&(r=function(t){return new f.MDCTextFieldCharacterCounter(t)}),void 0===i&&(i=function(t){return new m.MDCTextFieldIcon(t)}),void 0===o&&(o=function(t){return new a.MDCFloatingLabel(t)}),void 0===s&&(s=function(t){return new c.MDCNotchedOutline(t)}),this.input_=this.root_.querySelector(p.strings.INPUT_SELECTOR);var d=this.root_.querySelector(p.strings.LABEL_SELECTOR);this.label_=d?o(d):null;var h=this.root_.querySelector(p.strings.LINE_RIPPLE_SELECTOR);this.lineRipple_=h?e(h):null;var g=this.root_.querySelector(p.strings.OUTLINE_SELECTOR);this.outline_=g?s(g):null;var E=y.MDCTextFieldHelperTextFoundation.strings,v=this.root_.nextElementSibling,b=v&&v.classList.contains(p.cssClasses.HELPER_LINE),T=b&&v&&v.querySelector(E.ROOT_SELECTOR);this.helperText_=T?n(T):null;var A=_.MDCTextFieldCharacterCounterFoundation.strings,I=this.root_.querySelector(A.ROOT_SELECTOR);!I&&b&&v&&(I=v.querySelector(A.ROOT_SELECTOR)),this.characterCounter_=I?r(I):null,this.leadingIcon_=null,this.trailingIcon_=null;var O=this.root_.querySelectorAll(p.strings.ICON_SELECTOR);O.length>0&&(O.length>1?(this.leadingIcon_=i(O[0]),this.trailingIcon_=i(O[1])):this.root_.classList.contains(p.cssClasses.WITH_LEADING_ICON)?this.leadingIcon_=i(O[0]):this.trailingIcon_=i(O[0])),this.ripple=this.createRipple_(t)},e.prototype.destroy=function(){this.ripple&&this.ripple.destroy(),this.lineRipple_&&this.lineRipple_.destroy(),this.helperText_&&this.helperText_.destroy(),this.characterCounter_&&this.characterCounter_.destroy(),this.leadingIcon_&&this.leadingIcon_.destroy(),this.trailingIcon_&&this.trailingIcon_.destroy(),this.label_&&this.label_.destroy(),this.outline_&&this.outline_.destroy(),t.prototype.destroy.call(this)},e.prototype.initialSyncWithDOM=function(){this.disabled=this.input_.disabled},Object.defineProperty(e.prototype,"value",{get:function(){return this.foundation_.getValue()},set:function(t){this.foundation_.setValue(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.foundation_.isDisabled()},set:function(t){this.foundation_.setDisabled(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){return this.foundation_.isValid()},set:function(t){this.foundation_.setValid(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"required",{get:function(){return this.input_.required},set:function(t){this.input_.required=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"pattern",{get:function(){return this.input_.pattern},set:function(t){this.input_.pattern=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"minLength",{get:function(){return this.input_.minLength},set:function(t){this.input_.minLength=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxLength",{get:function(){return this.input_.maxLength},set:function(t){t<0?this.input_.removeAttribute("maxLength"):this.input_.maxLength=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"min",{get:function(){return this.input_.min},set:function(t){this.input_.min=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"max",{get:function(){return this.input_.max},set:function(t){this.input_.max=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"step",{get:function(){return this.input_.step},set:function(t){this.input_.step=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"helperTextContent",{set:function(t){this.foundation_.setHelperTextContent(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconAriaLabel",{set:function(t){this.foundation_.setLeadingIconAriaLabel(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconContent",{set:function(t){this.foundation_.setLeadingIconContent(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"trailingIconAriaLabel",{set:function(t){this.foundation_.setTrailingIconAriaLabel(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"trailingIconContent",{set:function(t){this.foundation_.setTrailingIconContent(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"useNativeValidation",{set:function(t){this.foundation_.setUseNativeValidation(t)},enumerable:!0,configurable:!0}),e.prototype.focus=function(){this.input_.focus()},e.prototype.layout=function(){var t=this.foundation_.shouldFloat;this.foundation_.notchOutline(t)},e.prototype.getDefaultFoundation=function(){var t=r.__assign({},this.getRootAdapterMethods_(),this.getInputAdapterMethods_(),this.getLabelAdapterMethods_(),this.getLineRippleAdapterMethods_(),this.getOutlineAdapterMethods_());return new h.MDCTextFieldFoundation(t,this.getFoundationMap_())},e.prototype.getRootAdapterMethods_=function(){var t=this;return{addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},hasClass:function(e){return t.root_.classList.contains(e)},registerTextFieldInteractionHandler:function(e,n){return t.listen(e,n)},deregisterTextFieldInteractionHandler:function(e,n){return t.unlisten(e,n)},registerValidationAttributeChangeHandler:function(e){var n=new MutationObserver((function(t){return e(function(t){return t.map((function(t){return t.attributeName})).filter((function(t){return t}))}(t))}));return n.observe(t.input_,{attributes:!0}),n},deregisterValidationAttributeChangeHandler:function(t){return t.disconnect()}}},e.prototype.getInputAdapterMethods_=function(){var t=this;return{getNativeInput:function(){return t.input_},isFocused:function(){return document.activeElement===t.input_},registerInputInteractionHandler:function(e,n){return t.input_.addEventListener(e,n,(0,o.applyPassive)())},deregisterInputInteractionHandler:function(e,n){return t.input_.removeEventListener(e,n,(0,o.applyPassive)())}}},e.prototype.getLabelAdapterMethods_=function(){var t=this;return{floatLabel:function(e){return t.label_&&t.label_.float(e)},getLabelWidth:function(){return t.label_?t.label_.getWidth():0},hasLabel:function(){return Boolean(t.label_)},shakeLabel:function(e){return t.label_&&t.label_.shake(e)}}},e.prototype.getLineRippleAdapterMethods_=function(){var t=this;return{activateLineRipple:function(){t.lineRipple_&&t.lineRipple_.activate()},deactivateLineRipple:function(){t.lineRipple_&&t.lineRipple_.deactivate()},setLineRippleTransformOrigin:function(e){t.lineRipple_&&t.lineRipple_.setRippleCenter(e)}}},e.prototype.getOutlineAdapterMethods_=function(){var t=this;return{closeOutline:function(){return t.outline_&&t.outline_.closeNotch()},hasOutline:function(){return Boolean(t.outline_)},notchOutline:function(e){return t.outline_&&t.outline_.notch(e)}}},e.prototype.getFoundationMap_=function(){return{characterCounter:this.characterCounter_?this.characterCounter_.foundation:void 0,helperText:this.helperText_?this.helperText_.foundation:void 0,leadingIcon:this.leadingIcon_?this.leadingIcon_.foundation:void 0,trailingIcon:this.trailingIcon_?this.trailingIcon_.foundation:void 0}},e.prototype.createRipple_=function(t){var e=this,n=this.root_.classList.contains(p.cssClasses.TEXTAREA),i=this.root_.classList.contains(p.cssClasses.OUTLINED);if(n||i)return null;var a=r.__assign({},l.MDCRipple.createAdapter(this),{isSurfaceActive:function(){return s.matches(e.input_,":active")},registerInteractionHandler:function(t,n){return e.input_.addEventListener(t,n,(0,o.applyPassive)())},deregisterInteractionHandler:function(t,n){return e.input_.removeEventListener(t,n,(0,o.applyPassive)())}});return t(this.root_,new d.MDCRippleFoundation(a))},e}(i.MDCComponent);e.MDCTextField=E},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(75);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(25);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(76);Object.defineProperty(e,"characterCountCssClasses",{enumerable:!0,get:function(){return o.cssClasses}}),Object.defineProperty(e,"characterCountStrings",{enumerable:!0,get:function(){return o.strings}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(80);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(81);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(82);Object.defineProperty(e,"iconCssClasses",{enumerable:!0,get:function(){return o.cssClasses}}),Object.defineProperty(e,"iconStrings",{enumerable:!0,get:function(){return o.strings}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(149);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(7);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(29);Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})}));var s=n(84);Object.keys(s).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return s[t]}})}));var a=n(85);Object.keys(a).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return a[t]}})}));var u=n(28);Object.keys(u).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return u[t]}})}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCTopAppBar=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(2),o=n(3),s=n(7),a=n(84),u=n(85),c=n(28);var l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){void 0===t&&(t=function(t){return o.MDCRipple.attachTo(t)}),this.navIcon_=this.root_.querySelector(s.strings.NAVIGATION_ICON_SELECTOR);var e=[].slice.call(this.root_.querySelectorAll(s.strings.ACTION_ITEM_SELECTOR));this.navIcon_&&e.push(this.navIcon_),this.iconRipples_=e.map((function(e){var n=t(e);return n.unbounded=!0,n})),this.scrollTarget_=window},e.prototype.initialSyncWithDOM=function(){this.handleNavigationClick_=this.foundation_.handleNavigationClick.bind(this.foundation_),this.handleWindowResize_=this.foundation_.handleWindowResize.bind(this.foundation_),this.handleTargetScroll_=this.foundation_.handleTargetScroll.bind(this.foundation_),this.scrollTarget_.addEventListener("scroll",this.handleTargetScroll_),this.navIcon_&&this.navIcon_.addEventListener("click",this.handleNavigationClick_);var t=this.root_.classList.contains(s.cssClasses.FIXED_CLASS);this.root_.classList.contains(s.cssClasses.SHORT_CLASS)||t||window.addEventListener("resize",this.handleWindowResize_)},e.prototype.destroy=function(){this.iconRipples_.forEach((function(t){return t.destroy()})),this.scrollTarget_.removeEventListener("scroll",this.handleTargetScroll_),this.navIcon_&&this.navIcon_.removeEventListener("click",this.handleNavigationClick_);var e=this.root_.classList.contains(s.cssClasses.FIXED_CLASS);this.root_.classList.contains(s.cssClasses.SHORT_CLASS)||e||window.removeEventListener("resize",this.handleWindowResize_),t.prototype.destroy.call(this)},e.prototype.setScrollTarget=function(t){this.scrollTarget_.removeEventListener("scroll",this.handleTargetScroll_),this.scrollTarget_=t,this.handleTargetScroll_=this.foundation_.handleTargetScroll.bind(this.foundation_),this.scrollTarget_.addEventListener("scroll",this.handleTargetScroll_)},e.prototype.getDefaultFoundation=function(){var t=this,e={hasClass:function(e){return t.root_.classList.contains(e)},addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},setStyle:function(e,n){return t.root_.style.setProperty(e,n)},getTopAppBarHeight:function(){return t.root_.clientHeight},notifyNavigationIconClicked:function(){return t.emit(s.strings.NAVIGATION_EVENT,{})},getViewportScrollY:function(){var e=t.scrollTarget_,n=t.scrollTarget_;return void 0!==e.pageYOffset?e.pageYOffset:n.scrollTop},getTotalActionItems:function(){return t.root_.querySelectorAll(s.strings.ACTION_ITEM_SELECTOR).length}};return this.root_.classList.contains(s.cssClasses.SHORT_CLASS)?new u.MDCShortTopAppBarFoundation(e):this.root_.classList.contains(s.cssClasses.FIXED_CLASS)?new a.MDCFixedTopAppBarFoundation(e):new c.MDCTopAppBarFoundation(e)},e}(i.MDCComponent);
/**
                             * @license
                             * Copyright 2018 Google Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in
                             * all copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                             * THE SOFTWARE.
                             */e.MDCTopAppBar=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(151);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var i=n(86);Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var o=n(30);Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDCDataTable=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(n(0)),i=n(2),o=n(31),s=n(4),a=n(30),u=n(86);var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){void 0===t&&(t=function(t){return new o.MDCCheckbox(t)}),this.checkboxFactory_=t},e.prototype.initialSyncWithDOM=function(){var t=this;this.headerRow_=this.root_.querySelector("."+a.cssClasses.HEADER_ROW),this.handleHeaderRowCheckboxChange_=function(){return t.foundation_.handleHeaderRowCheckboxChange()},this.headerRow_.addEventListener("change",this.handleHeaderRowCheckboxChange_),this.content_=this.root_.querySelector("."+a.cssClasses.CONTENT),this.handleRowCheckboxChange_=function(e){return t.foundation_.handleRowCheckboxChange(e)},this.content_.addEventListener("change",this.handleRowCheckboxChange_),this.layout()},e.prototype.layout=function(){this.foundation_.layout()},e.prototype.getRows=function(){return this.foundation_.getRows()},e.prototype.getSelectedRowIds=function(){return this.foundation_.getSelectedRowIds()},e.prototype.setSelectedRowIds=function(t){this.foundation_.setSelectedRowIds(t)},e.prototype.destroy=function(){this.headerRow_.removeEventListener("change",this.handleHeaderRowCheckboxChange_),this.content_.removeEventListener("change",this.handleRowCheckboxChange_),this.headerRowCheckbox_.destroy(),this.rowCheckboxList_.forEach((function(t){return t.destroy()}))},e.prototype.getDefaultFoundation=function(){var t=this,e={addClassAtRowIndex:function(e,n){return t.getRows()[e].classList.add(n)},getRowCount:function(){return t.getRows().length},getRowElements:function(){return[].slice.call(t.root_.querySelectorAll(a.strings.ROW_SELECTOR))},getRowIdAtIndex:function(e){return t.getRows()[e].getAttribute(a.strings.DATA_ROW_ID_ATTR)},getRowIndexByChildElement:function(e){return t.getRows().indexOf((0,s.closest)(e,a.strings.ROW_SELECTOR))},getSelectedRowCount:function(){return t.root_.querySelectorAll(a.strings.ROW_SELECTED_SELECTOR).length},isCheckboxAtRowIndexChecked:function(e){return t.rowCheckboxList_[e].checked},isHeaderRowCheckboxChecked:function(){return t.headerRowCheckbox_.checked},isRowsSelectable:function(){return!!t.root_.querySelector(a.strings.ROW_CHECKBOX_SELECTOR)},notifyRowSelectionChanged:function(e){t.emit(a.events.ROW_SELECTION_CHANGED,{row:t.getRowByIndex_(e.rowIndex),rowId:t.getRowIdByIndex_(e.rowIndex),rowIndex:e.rowIndex,selected:e.selected},!0)},notifySelectedAll:function(){return t.emit(a.events.SELECTED_ALL,{},!0)},notifyUnselectedAll:function(){return t.emit(a.events.UNSELECTED_ALL,{},!0)},registerHeaderRowCheckbox:function(){t.headerRowCheckbox_&&t.headerRowCheckbox_.destroy();var e=t.root_.querySelector(a.strings.HEADER_ROW_CHECKBOX_SELECTOR);t.headerRowCheckbox_=t.checkboxFactory_(e)},registerRowCheckboxes:function(){t.rowCheckboxList_&&t.rowCheckboxList_.forEach((function(t){return t.destroy()})),t.rowCheckboxList_=[],t.getRows().forEach((function(e){var n=t.checkboxFactory_(e.querySelector(a.strings.ROW_CHECKBOX_SELECTOR));t.rowCheckboxList_.push(n)}))},removeClassAtRowIndex:function(e,n){t.getRows()[e].classList.remove(n)},setAttributeAtRowIndex:function(e,n,r){t.getRows()[e].setAttribute(n,r)},setHeaderRowCheckboxChecked:function(e){t.headerRowCheckbox_.checked=e},setHeaderRowCheckboxIndeterminate:function(e){t.headerRowCheckbox_.indeterminate=e},setRowCheckboxCheckedAtIndex:function(e,n){t.rowCheckboxList_[e].checked=n}};return new u.MDCDataTableFoundation(e)},e.prototype.getRowByIndex_=function(t){return this.getRows()[t]},e.prototype.getRowIdByIndex_=function(t){return this.getRowByIndex_(t).getAttribute(a.strings.DATA_ROW_ID_ATTR)},e}(i.MDCComponent);e.MDCDataTable=c}]);