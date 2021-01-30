/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(e){return e.prototype.commands.copy=function(){"use strict";this.shortcuts=[{pattern:"ctrl+c ctrl+insert"}],this.getstate=function(e){var t=this.files(e),r=t.length;return r&&$.grep(t,function(e){return!!e.read}).length==r?0:-1},this.exec=function(e){var t=this.fm,r=$.Deferred().fail(function(e){t.error(e)});return $.each(this.files(e),function(e,t){if(!t.read)return!r.reject(["errCopy",t.name,"errPerm"])}),"rejected"==r.state()?r:r.resolve(t.clipboard(this.hashes(e)))}},e});
//# sourceMappingURL=../sourcemaps/commands/copy.js.map
