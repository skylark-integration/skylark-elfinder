/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(e){return e.prototype.commands.selectinvert=function(){"use strict";this.updateOnSelect=!1,this.getstate=function(){return 0},this.exec=function(){return $(document).trigger($.Event("keydown",{keyCode:73,ctrlKey:!0,shiftKey:!0,altKey:!1,metaKey:!1})),$.Deferred().resolve()}},e});
//# sourceMappingURL=../sourcemaps/commands/selectinvert.js.map
