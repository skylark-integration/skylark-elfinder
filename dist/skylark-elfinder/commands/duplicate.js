/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(e){return e.prototype.commands.duplicate=function(){"use strict";var e=this.fm;this.getstate=function(t){var r=this.files(t),i=r.length;return i&&e.cwd().write&&$.grep(r,function(t){return!(!t.read||t.phash!==e.cwd().hash||e.isRoot(t))}).length==i?0:-1},this.exec=function(e){var t=this.fm,r=this.files(e),i=r.length,n=$.Deferred().fail(function(e){e&&t.error(e)});return i?($.each(r,function(e,r){if(!r.read||!t.file(r.phash).write)return!n.reject(["errCopy",r.name,"errPerm"])}),"rejected"==n.state()?n:t.request({data:{cmd:"duplicate",targets:this.hashes(e)},notify:{type:"copy",cnt:i},navigate:{toast:{inbuffer:{msg:t.i18n(["complete",t.i18n("cmdduplicate")])}}}})):n.reject()}},e});
//# sourceMappingURL=../sourcemaps/commands/duplicate.js.map
