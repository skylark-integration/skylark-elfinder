/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(e){return e.prototype.commands.fullscreen=function(){"use strict";var e=this,t=this.fm,n=function(t,n){t.preventDefault(),t.stopPropagation(),n&&n.fullscreen&&e.update(void 0,"on"===n.fullscreen)};this.alwaysEnabled=!0,this.updateOnSelect=!1,this.syncTitleOnChange=!0,this.value=!1,this.options={ui:"fullscreenbutton"},this.getstate=function(){return 0},this.exec=function(){var n=t.getUI().get(0),i=n===t.toggleFullscreen(n);return e.title=t.i18n(i?"reinstate":"cmdfullscreen"),e.update(void 0,i),$.Deferred().resolve()},t.bind("init",function(){t.getUI().off("resize."+t.namespace,n).on("resize."+t.namespace,n)})},e});
//# sourceMappingURL=../sourcemaps/commands/fullscreen.js.map
