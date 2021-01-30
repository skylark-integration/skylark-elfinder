/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(e){return e.prototype.commands.undo=function(){"use strict";var e=this,t=this.fm,n=function(n){n?(e.title=t.i18n("cmdundo")+" "+t.i18n("cmd"+n.cmd),e.state=0):(e.title=t.i18n("cmdundo"),e.state=-1),e.change()},o=[];this.alwaysEnabled=!0,this.updateOnSelect=!1,this.shortcuts=[{pattern:"ctrl+z"}],this.syncTitleOnChange=!0,this.getstate=function(){return o.length?0:-1},this.setUndo=function(e,d){var i={};e&&$.isPlainObject(e)&&e.cmd&&e.callback&&(Object.assign(i,e),d?(delete d.undo,i.redo=d):t.getCommand("redo").setRedo(null),o.push(i),n(i))},this.exec=function(){var e,d,i=t.getCommand("redo"),c=$.Deferred(),s={};return o.length?((e=o.pop()).redo?(Object.assign(s,e.redo),delete e.redo):s=null,c.done(function(){s&&i.setRedo(s,e)}),n(o.length?o[o.length-1]:void 0),(d=e.callback())&&d.done?d.done(function(){c.resolve()}).fail(function(){c.reject()}):c.resolve(),o.length?this.update(0,o[o.length-1].name):this.update(-1,"")):c.reject(),c},t.bind("exec",function(t){var n=t.data||{};n.opts&&n.opts._userAction&&n.dfrd&&n.dfrd.done&&n.dfrd.done(function(t){t&&t.undo&&t.redo&&(t.undo.redo=t.redo,e.setUndo(t.undo))})})},e.prototype.commands.redo=function(){"use strict";var e=this,t=this.fm,n=function(n){n&&n.callback?(e.title=t.i18n("cmdredo")+" "+t.i18n("cmd"+n.cmd),e.state=0):(e.title=t.i18n("cmdredo"),e.state=-1),e.change()},o=[];this.alwaysEnabled=!0,this.updateOnSelect=!1,this.shortcuts=[{pattern:"shift+ctrl+z ctrl+y"}],this.syncTitleOnChange=!0,this.getstate=function(){return o.length?0:-1},this.setRedo=function(e,t){null===e?(o=[],n()):e&&e.cmd&&e.callback&&(t&&(e.undo=t),o.push(e),n(e))},this.exec=function(){var e,d,i=t.getCommand("undo"),c=$.Deferred(),s={},r={};return o.length?((e=o.pop()).undo&&(Object.assign(s,e.undo),Object.assign(r,e),delete r.undo,c.done(function(){i.setUndo(s,r)})),n(o.length?o[o.length-1]:void 0),(d=e.callback())&&d.done?d.done(function(){c.resolve()}).fail(function(){c.reject()}):c.resolve(),c):c.reject()}},e});
//# sourceMappingURL=../sourcemaps/commands/undo.js.map