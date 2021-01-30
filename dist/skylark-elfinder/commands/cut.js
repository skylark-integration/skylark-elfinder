/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(e){return e.prototype.commands.cut=function(){"use strict";var e=this.fm;this.shortcuts=[{pattern:"ctrl+x shift+insert"}],this.getstate=function(t){var r=this.files(t),n=r.length;return n&&$.grep(r,function(t){return!(!t.read||t.locked||e.isRoot(t))}).length==n?0:-1},this.exec=function(t){var r=$.Deferred().fail(function(t){e.error(t)});return $.each(this.files(t),function(t,n){return!n.read||n.locked||e.isRoot(n)?!r.reject(["errCopy",n.name,"errPerm"]):n.locked?!r.reject(["errLocked",n.name]):void 0}),"rejected"==r.state()?r:r.resolve(e.clipboard(this.hashes(t),!0))}},e});
//# sourceMappingURL=../sourcemaps/commands/cut.js.map
