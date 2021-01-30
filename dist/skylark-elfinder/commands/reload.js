/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(t){return(t.prototype.commands.reload=function(){"use strict";var t=this,n=!1;this.alwaysEnabled=!0,this.updateOnSelect=!0,this.shortcuts=[{pattern:"ctrl+shift+r f5"}],this.getstate=function(){return 0},this.init=function(){this.fm.bind("search searchend",function(){n="search"==this.type})},this.fm.bind("contextmenu",function(){var n=t.fm;n.options.sync>=1e3&&(t.extra={icon:"accept",node:$("<span/>").attr({title:n.i18n("autoSync")}).on("click touchstart",function(t){"touchstart"===t.type&&t.originalEvent.touches.length>1||(t.stopPropagation(),t.preventDefault(),$(this).parent().toggleClass("ui-state-disabled",n.options.syncStart).parent().removeClass("ui-state-hover"),n.options.syncStart=!n.options.syncStart,n.autoSync(n.options.syncStart?null:"stop"))}).on("ready",function(){$(this).parent().toggleClass("ui-state-disabled",!n.options.syncStart).css("pointer-events","auto")})})}),this.exec=function(){var t=this.fm;if(!n){var e=t.sync(),i=setTimeout(function(){t.notify({type:"reload",cnt:1,hideCnt:!0}),e.always(function(){t.notify({type:"reload",cnt:-1})})},t.notifyDelay);return e.always(function(){clearTimeout(i),t.trigger("reload")})}$("div.elfinder-toolbar > div."+t.res("class","searchbtn")+" > span.ui-icon-search").click()}}).prototype={forceLoad:!0},t});
//# sourceMappingURL=../sourcemaps/commands/reload.js.map
