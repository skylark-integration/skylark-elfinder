/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["skylark-jquery"],function(n){n.fn.elfinderuploadbutton=function(e){"use strict";return this.each(function(){var i,t=e.fm,o=n(this).elfinderbutton(e).off("click"),a=n("<form/>").appendTo(o),c=n('<input type="file" multiple="true" title="'+e.fm.i18n("selectForUpload")+'"/>').on("change",function(){var e=n(this);e.val()&&(t.exec("upload",{input:e.remove()[0]},void 0,t.cwd().hash),c.clone(!0).appendTo(a))}).on("dragover",function(n){n.originalEvent.dataTransfer.dropEffect="copy"});a.append(c.clone(!0)),e.change(function(){i&&cancelAnimationFrame(i),i=requestAnimationFrame(function(){var n=e.disabled();a.is("visible")?!n&&a.hide():n&&a.show()})}).change()})}});
//# sourceMappingURL=../sourcemaps/ui/uploadButton.js.map
