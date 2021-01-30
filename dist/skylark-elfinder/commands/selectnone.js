/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(e){return e.prototype.commands.selectnone=function(){"use strict";var e=this.fm,t=-1;e.bind("select",function(e){t=e.data&&e.data.unselectall?-1:0}),this.state=-1,this.updateOnSelect=!1,this.getstate=function(){return t},this.exec=function(){return e.getUI("cwd").trigger("unselectall"),$.Deferred().resolve()}},e});
//# sourceMappingURL=../sourcemaps/commands/selectnone.js.map
