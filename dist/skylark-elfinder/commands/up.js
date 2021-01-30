/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(t){return(t.prototype.commands.up=function(){"use strict";this.alwaysEnabled=!0,this.updateOnSelect=!1,this.shortcuts=[{pattern:"ctrl+up"}],this.getstate=function(){return this.fm.cwd().phash?0:-1},this.exec=function(){var t=this.fm,e=t.cwd().hash;return this.fm.cwd().phash?this.fm.exec("open",this.fm.cwd().phash).done(function(){t.one("opendone",function(){t.selectfiles({files:[e]})})}):$.Deferred().reject()}}).prototype={forceLoad:!0},t});
//# sourceMappingURL=../sourcemaps/commands/up.js.map
