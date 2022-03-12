/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["skylark-jquery"],function(e){!function(){if(e.ui&&e.ui.ddmanager){var t=e.ui.ddmanager.prepareOffsets;e.ui.ddmanager.prepareOffsets=function(o,n){var i=function(e){if(e.is(":hidden"))return!0;var t=e[0].getBoundingClientRect();return!document.elementFromPoint(t.left,t.top)&&!document.elementFromPoint(t.left+t.width,t.top+t.height)};if("mousedown"===n.type||o.options.elfRefresh){var s,r,a=e.ui.ddmanager.droppables[o.options.scope]||[],c=a.length;for(s=0;s<c;s++)(r=a[s]).options.autoDisable&&(!r.options.disabled||r.options.autoDisable>1)&&(r.options.disabled=i(r.element),r.options.autoDisable=r.options.disabled?2:1)}return t(o,n)}}}(),function(e,t){"use strict";e.ajaxTransport("+binary",function(e,t,o){var n;if(window.FormData&&(e.dataType&&"binary"==e.dataType||e.data&&(window.ArrayBuffer&&e.data instanceof ArrayBuffer||window.Blob&&e.data instanceof Blob)))return{send:function(t,o){var i,s=e.responseType||"blob",r=e.xhr();if(r.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)r[i]=e.xhrFields[i];for(i in e.mimeType&&r.overrideMimeType&&r.overrideMimeType(e.mimeType),e.crossDomain||t["X-Requested-With"]||(t["X-Requested-With"]="XMLHttpRequest"),t)r.setRequestHeader(i,t[i]);n=function(t){return function(){if(n)if(n=r.onload=r.onerror=r.onabort=r.ontimeout=null,"abort"===t)r.abort();else if("error"===t)o(r.status,r.statusText);else{var i={};i[e.dataType]=r.response,o(r.status,r.statusText,i,r.getAllResponseHeaders())}}},r.onload=n(),r.onabort=r.onerror=r.ontimeout=n("error"),n=n("abort");try{r.responseType=s,r.send(e.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}})}(e),function(e){if(e.support.touch="ontouchend"in document,e.support.touch){var t,o,n,i=e.ui.mouse.prototype,s=i._mouseInit,r=i._mouseDestroy;i._touchStart=function(e){!t&&this._mouseCapture(e.originalEvent.changedTouches[0])&&(o=e.originalEvent.changedTouches[0].screenX.toFixed(0),n=e.originalEvent.changedTouches[0].screenY.toFixed(0),t=!0,this._touchMoved=!1,a(e,"mouseover"),a(e,"mousemove"),a(e,"mousedown"))},i._touchMove=function(e){if(t){var i=e.originalEvent.changedTouches[0].screenX.toFixed(0),s=e.originalEvent.changedTouches[0].screenY.toFixed(0);Math.abs(o-i)<=4&&Math.abs(n-s)<=4||(this._touchMoved=!0,a(e,"mousemove"))}},i._touchEnd=function(e){t&&(a(e,"mouseup"),a(e,"mouseout"),this._touchMoved||a(e,"click"),t=!1,this._touchMoved=!1)},i._mouseInit=function(){this.element.hasClass("touch-punch")&&this.element.on({touchstart:e.proxy(this,"_touchStart"),touchmove:e.proxy(this,"_touchMove"),touchend:e.proxy(this,"_touchEnd")}),s.call(this)},i._mouseDestroy=function(){this.element.hasClass("touch-punch")&&this.element.off({touchstart:e.proxy(this,"_touchStart"),touchmove:e.proxy(this,"_touchMove"),touchend:e.proxy(this,"_touchEnd")}),r.call(this)}}function a(t,o){if(!(t.originalEvent.touches.length>1)){e(t.currentTarget).hasClass("touch-punch-keep-default")||t.preventDefault();var n=t.originalEvent.changedTouches[0],i=document.createEvent("MouseEvents");i.initMouseEvent(o,!0,!0,window,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(i)}}}(e),e.fn.elfinder=function(t,o){return"instance"===t?this.getElFinder():this.each(function(){var n,i="string"==typeof t?t:"",s="function"==typeof o?o:void 0,r=this.elfinder;if(r)switch(i){case"close":case"hide":r.hide();break;case"open":case"show":r.show();break;case"destroy":r.destroy();break;case"reload":case"restart":r&&(n=e.extend(!0,r.options,e.isPlainObject(o)?o:{}),s=r.bootCallback,r.reloadCallback&&e.isFunction(r.reloadCallback)?r.reloadCallback(n,s):(r.destroy(),new elFinder(this,n,s)))}else e.isPlainObject(t)&&new elFinder(this,t,s)})},e.fn.getElFinder=function(){var e;return this.each(function(){if(this.elfinder)return e=this.elfinder,!1}),e},e.fn.elfUiWidgetInstance=function(e){try{return this[e]("instance")}catch(o){var t=this.data("ui-"+e);return t&&"object"==typeof t&&t.widgetFullName==="ui-"+e?t:null}},e.fn.scrollRight||e.fn.extend({scrollRight:function(e){var t=this.get(0);return void 0===e?Math.max(0,t.scrollWidth-(t.scrollLeft+t.clientWidth)):this.scrollLeft(t.scrollWidth-t.clientWidth-e)}}),e.fn.scrollBottom||e.fn.extend({scrollBottom:function(e){var t=this.get(0);return void 0===e?Math.max(0,t.scrollHeight-(t.scrollTop+t.clientHeight)):this.scrollTop(t.scrollHeight-t.clientHeight-e)}})});
//# sourceMappingURL=sourcemaps/jquery.elfinder.js.map