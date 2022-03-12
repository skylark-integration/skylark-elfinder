/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(t){return(t.prototype.commands.home=function(){"use strict";this.title="Home",this.alwaysEnabled=!0,this.updateOnSelect=!1,this.shortcuts=[{pattern:"ctrl+home ctrl+shift+up",description:"Home"}],this.getstate=function(){var t=this.fm.root(),e=this.fm.cwd().hash;return t&&e&&t!=e?0:-1},this.exec=function(){return this.fm.exec("open",this.fm.root())}}).prototype={forceLoad:!0},t});
//# sourceMappingURL=../sourcemaps/commands/home.js.map
