/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(t){return t.prototype.commands.colwidth=function(){"use strict";this.alwaysEnabled=!0,this.updateOnSelect=!1,this.getstate=function(){return"fixed"===this.fm.getUI("cwd").find("table").css("table-layout")?0:-1},this.exec=function(){return this.fm.getUI("cwd").trigger("colwidth"),$.Deferred().resolve()}},t});
//# sourceMappingURL=../sourcemaps/commands/colwidth.js.map
