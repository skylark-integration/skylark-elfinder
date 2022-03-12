/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["skylark-jquery"],function(n){n.fn.elfinderfullscreenbutton=function(e){"use strict";return this.each(function(){var t,i=n(this).elfinderbutton(e).children(".elfinder-button-icon");e.change(function(){t&&cancelAnimationFrame(t),t=requestAnimationFrame(function(){var n=e.value;i.addClass("elfinder-button-icon-fullscreen").toggleClass("elfinder-button-icon-unfullscreen",n),e.className=n?"unfullscreen":""})})})}});
//# sourceMappingURL=../sourcemaps/ui/fullscreenbutton.js.map
