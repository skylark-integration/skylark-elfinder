/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(e){return e.prototype.commands.mkfile=function(){"use strict";var e=this;this.disableOnSearch=!0,this.updateOnSelect=!1,this.mime="text/plain",this.prefix="untitled file.txt",this.variants=[],this.getTypeName=function(t,i){var n,a=e.fm;return n=(n=a.messages["kind"+a.kinds[t]])?a.i18n(["extentiontype",i.toUpperCase(),n]):a.i18n(["extentionfile",i.toUpperCase()])},this.fm.bind("open reload canMakeEmptyFile",function(){var t=e.fm,i=t.getCommand("edit").getMkfileHides();e.variants=[],t.mimesCanMakeEmpty&&$.each(t.mimesCanMakeEmpty,function(n,a){a&&!i[n]&&t.uploadMimeCheck(n)&&e.variants.push([n,e.getTypeName(n,a)])}),e.change()}),this.getstate=function(){return this.fm.cwd().write?0:-1},this.exec=function(t,i){var n,a,r=e.fm;if(n=r.mimesCanMakeEmpty[i]){if(r.uploadMimeCheck(i))return this.mime=i,this.prefix=r.i18n(["untitled file",n]),$.proxy(r.res("mixin","make"),e)();a=["errMkfile",e.getTypeName(i,n)]}return $.Deferred().reject(a)}},e});
//# sourceMappingURL=../sourcemaps/commands/mkfile.js.map
