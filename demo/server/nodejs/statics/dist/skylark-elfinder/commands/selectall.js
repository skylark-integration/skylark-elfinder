/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(e){return e.prototype.commands.selectall=function(){"use strict";var e=0;this.fm.bind("select",function(t){e=t.data&&t.data.selectall?-1:0}),this.state=0,this.updateOnSelect=!1,this.getstate=function(){return e},this.exec=function(){return $(document).trigger($.Event("keydown",{keyCode:65,ctrlKey:!0,shiftKey:!1,altKey:!1,metaKey:!1})),$.Deferred().resolve()}},e});
//# sourceMappingURL=../sourcemaps/commands/selectall.js.map
