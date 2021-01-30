/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(t){return(t.prototype.commands.forward=function(){"use strict";this.alwaysEnabled=!0,this.updateOnSelect=!0,this.shortcuts=[{pattern:"ctrl+right"}],this.getstate=function(){return this.fm.history.canForward()?0:-1},this.exec=function(){return this.fm.history.forward()}}).prototype={forceLoad:!0},t});
//# sourceMappingURL=../sourcemaps/commands/forward.js.map
