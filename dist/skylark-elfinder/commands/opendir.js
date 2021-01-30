/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(e){return e.prototype.commands.opendir=function(){"use strict";this.alwaysEnabled=!0,this.getstate=function(){return 1!==this.fm.selected().length?-1:this.fm.getUI("workzone").hasClass("elfinder-search-result")?0:-1},this.exec=function(e){var t,n=this.fm,s=$.Deferred(),r=this.files(e);return r.length&&r[0].phash?(t=r[0].phash,n.trigger("searchend",{noupdate:!0}),n.request({data:{cmd:"open",target:t},notify:{type:"open",cnt:1,hideCnt:!0},syncOnFail:!1}),s):s.reject()}},e});
//# sourceMappingURL=../sourcemaps/commands/opendir.js.map
