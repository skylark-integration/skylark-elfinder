/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["skylark-jquery"],function(e){e.fn.elfinderworkzone=function(t){"use strict";var i="elfinder-workzone";return this.not("."+i).each(function(){var n,o=e(this).addClass(i),h=Math.round(o.height()),r=o.parent(),s=function(){n=o.outerHeight(!0)-o.height()},a=function(s){var a=r.height()-n,u=r.attr("style"),c=Math.round(o.height());s&&(s.preventDefault(),s.stopPropagation()),r.css("overflow","hidden").children(":visible:not(."+i+")").each(function(){var t=e(this);"absolute"!=t.css("position")&&"fixed"!=t.css("position")&&(a-=t.outerHeight(!0))}),r.attr("style",u||""),a=Math.max(0,Math.round(a)),h===a&&c===a||(h=Math.round(o.height()),o.height(a),t.trigger("wzresize"))};s(),r.on("resize."+t.namespace,a),t.one("cssloaded",function(){n=o.outerHeight(!0)-o.height(),a()}).bind("uiresize",a).bind("themechange",s)}),this}});
//# sourceMappingURL=../sourcemaps/ui/workzone.js.map
