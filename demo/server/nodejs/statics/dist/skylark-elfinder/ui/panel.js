/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["skylark-jquery"],function(e){e.fn.elfinderpanel=function(t){"use strict";return this.each(function(){var n=e(this).addClass("elfinder-panel ui-state-default ui-corner-all"),i="margin-"+("ltr"==t.direction?"left":"right");t.one("load",function(e){var r=t.getUI("navbar");n.css(i,parseInt(r.outerWidth(!0))),r.on("resize",function(e){e.preventDefault(),e.stopPropagation(),n.is(":visible")&&n.css(i,parseInt(r.outerWidth(!0)))})})})}});
//# sourceMappingURL=../sourcemaps/ui/panel.js.map
