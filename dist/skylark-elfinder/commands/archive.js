/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(e){return e.prototype.commands.archive=function(){"use strict";var e,r=this,t=r.fm,i=[];this.variants=[],this.disableOnSearch=!1,this.nextAction={},t.bind("open reload",function(){r.variants=[],$.each(i=t.option("archivers").create||[],function(e,i){r.variants.push([i,t.mime2kind(i)])}),r.change()}),this.getstate=function(r){var n,a=this.files(r),s=a.length,c=s&&!t.isRoot(a[0])&&(t.file(a[0].phash)||{}).write&&!$.grep(a,function(e){return!e.read}).length;return c&&t.searchStatus.state>1&&(n=t.cwd().volumeid,c=s===$.grep(a,function(e){return!(!e.read||0!==e.hash.indexOf(n))}).length),c&&!this._disabled&&i.length&&(s||e&&"pending"==e.state())?0:-1},this.exec=function(n,a){var s,c=this.files(n),h=c.length,o=a||i[0],f=t.file(c[0].phash)||null,l=["errArchive","errPerm","errCreatingTempDir","errFtpDownloadFile","errFtpUploadFile","errFtpMkdir","errArchiveExec","errExtractExec","errRm"];if(e=$.Deferred().fail(function(e){e&&t.error(e)}),!h||!i.length||-1===$.inArray(o,i))return e.reject();if(!f.write)return e.reject(l);for(s=0;s<h;s++)if(!c[s].read)return e.reject(l);return r.mime=o,r.prefix=(h>1?"Archive":c[0].name)+(t.option("archivers").createext?"."+t.option("archivers").createext[o]:""),r.data={targets:r.hashes(n),type:o},t.cwd().hash!==f.hash?t.exec("open",f.hash).done(function(){t.one("cwdrender",function(){t.selectfiles({files:n}),e=$.proxy(t.res("mixin","make"),r)()})}):(t.selectfiles({files:n}),e=$.proxy(t.res("mixin","make"),r)()),e}},e});
//# sourceMappingURL=../sourcemaps/commands/archive.js.map
