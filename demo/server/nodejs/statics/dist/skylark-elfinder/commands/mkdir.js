/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(t){return t.prototype.commands.mkdir=function(){"use strict";var t,e=this.fm,i=this;this.value="",this.disableOnSearch=!0,this.updateOnSelect=!1,this.syncTitleOnChange=!0,this.mime="directory",this.prefix="untitled folder",this.exec=function(n,r){var a;return n&&n.length&&r&&r._currentType&&"navbar"===r._currentType?(this.origin=r._currentType,this.data={target:n[0]}):(a=e.cwd().hash===n[0],this.origin=t&&!a?t:"cwd",delete this.data),n||this.options.intoNewFolderToolbtn||e.getUI("cwd").trigger("unselectall"),this.move=this.value===e.i18n("cmdmkdirin"),$.proxy(e.res("mixin","make"),i)()},this.shortcuts=[{pattern:"ctrl+shift+n"}],this.init=function(){this.options.intoNewFolderToolbtn&&(this.syncTitleOnChange=!0)},e.bind("select contextmenucreate closecontextmenu",function(n){var r=(n.data?n.data.selected||n.data.targets:null)||e.selected();i.className="mkdir",t=n.data&&r.length&&(n.data.origin||n.data.type)||"",i.options.intoNewFolderToolbtn||""!==t||(t="cwd"),r.length&&"navbar"!==t&&"cwd"!==t&&e.cwd().hash!==r[0]?(i.title=e.i18n("cmdmkdirin"),i.className+=" elfinder-button-icon-mkdirin"):i.title=e.i18n("cmdmkdir"),"closecontextmenu"!==n.type?i.update(void 0,i.title):requestAnimationFrame(function(){i.update(void 0,i.title)})}),this.getstate=function(i){var n=e.cwd(),r="navbar"===t||i&&i[0]!==n.hash?this.files(i||e.selected()):[],a=r.length;return"navbar"===t?a&&r[0].write&&r[0].read?0:-1:!n.write||a&&$.grep(r,function(t){return!(!t.read||t.locked)}).length!=a?-1:0}},t});
//# sourceMappingURL=../sourcemaps/commands/mkdir.js.map
