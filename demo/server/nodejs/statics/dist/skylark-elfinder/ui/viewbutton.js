/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["skylark-jquery"],function(t){t.fn.elfinderviewbutton=function(e){"use strict";return this.each(function(){var i,n=t(this).elfinderbutton(e),l=n.children(".elfinder-button-icon"),r=n.children(".elfinder-button-text");e.change(function(){i&&cancelAnimationFrame(i),i=requestAnimationFrame(function(){var t="icons"==e.value;l.toggleClass("elfinder-button-icon-view-list",t),e.className=t?"view-list":"",e.title=e.fm.i18n(t?"viewlist":"viewicons"),n.attr("title",e.title),r.html(e.title)})})})}});
//# sourceMappingURL=../sourcemaps/ui/viewbutton.js.map
