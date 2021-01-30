/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(e){return e.prototype.commands.places=function(){"use strict";var e=this,t=this.fm,n=null;this.getstate=function(t){var r,i=this.hashes(t),s=i.length;return n&&s&&s==(r=i,$.grep(e.files(r),function(e){return"directory"==e.mime})).length?0:-1},this.exec=function(e){var t=this.files(e);return n.trigger("regist",[t]),$.Deferred().resolve()},t.one("load",function(){n=t.ui.places})},e});
//# sourceMappingURL=../sourcemaps/commands/places.js.map
