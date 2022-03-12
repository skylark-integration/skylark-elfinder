/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(e){return e.prototype.commands.opennew=function(){"use strict";var e=this.fm;this.shortcuts=[{pattern:("function"==typeof e.options.getFileCallback?"shift+":"")+"ctrl+enter"}],this.getstate=function(e){var t=this.files(e);return 1===t.length&&"directory"===t[0].mime&&t[0].read?0:-1},this.exec=function(e){var t,n,r,i,s=$.Deferred(),o=this.files(e),c=o.length,a=this.options;return 1===c&&(t=o[0])&&"directory"===t.mime?(n=window.location,r=a.url?a.url:n.pathname,a.useOriginQuery&&(r.match(/\?/)?n.search&&(r+="&"+n.search.substr(1)):r+=n.search),r+="#elf_"+t.hash,i=window.open(r,"_blank"),setTimeout(function(){i.focus()},1e3),s.resolve()):s.reject()}},e});
//# sourceMappingURL=../sourcemaps/commands/opennew.js.map
