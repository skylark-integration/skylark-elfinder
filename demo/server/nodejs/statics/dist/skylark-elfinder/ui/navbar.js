/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["skylark-jquery"],function(e){e.fn.elfindernavbar=function(t,i){"use strict";return this.not(".elfinder-navbar").each(function(){var n,a,o,r,d,s,h,c=e(this).hide().addClass("ui-state-default elfinder-navbar"),l=c.css("overflow","hidden").parent().children(".elfinder-workzone").append(c),u="ltr"==t.direction,g=function(){var e=t.getUI("cwd"),i=t.getUI("workzone"),n=i.data("rectangle"),a=e.offset();i.data("rectangle",Object.assign(n,{cwdEdge:"ltr"===t.direction?a.left:a.left+e.width()}))},f=function(){c.css("overflow","hidden"),n=Math.round(c.outerHeight()-c.height()),a=Math.round(h.outerWidth()-h.innerWidth()),c.css("overflow","auto")};t.one("init",function(){h=t.getUI("navdock");var e=function(){f(),t.bind("wzresize",function(){var e=0;h.width(c.outerWidth()-a),h.children().length>1&&(e=h.outerHeight(!0)),c.height(l.height()-e-n)}).trigger("wzresize")};t.cssloaded?e():t.one("cssloaded",e)}).one("opendone",function(){o&&o.trigger("resize"),c.css("overflow","auto")}).bind("themechange",f),t.UA.Touch&&(void 0===(d=t.storage("autoHide")||{}).navbar&&(d.navbar=i.autoHideUA&&i.autoHideUA.length>0&&e.grep(i.autoHideUA,function(e){return!!t.UA[e]}).length,t.storage("autoHide",d)),d.navbar&&t.one("init",function(){c.children().length&&t.uiAutoHide.push(function(){c.stop(!0,!0).trigger("navhide",{duration:"slow",init:!0})})}),t.bind("load",function(){c.children().length&&"none"!==(r=e('<div class="elfinder-navbar-swipe-handle"/>').hide().appendTo(l)).css("pointer-events")&&(r.remove(),r=null)}),c.on("navshow navhide",function(e,i){var n="navshow"===e.type?"show":"hide",a=i&&i.duration?i.duration:"fast",o=i&&i.handleW?i.handleW:Math.max(50,t.getUI().width()/10);c.stop(!0,!0)[n]({duration:a,step:function(){t.trigger("wzresize")},complete:function(){r&&("show"===n?r.stop(!0,!0).hide():(r.width(o||""),t.resources.blink(r,"slowonce"))),t.trigger("navbar"+n),i.init&&t.trigger("uiautohide"),g()}}),d.navbar="show"!==n,t.storage("autoHide",Object.assign(t.storage("autoHide"),{navbar:d.navbar}))}).on("touchstart",function(i){e(this)["scroll"+("ltr"===t.direction?"Right":"Left")]()>5&&(i.originalEvent._preventSwipeX=!0)})),t.UA.Mobile||(o=c.resizable({handles:u?"e":"w",minWidth:i.minWidth||150,maxWidth:i.maxWidth||500,resize:function(){t.trigger("wzresize")},stop:function(e,i){t.storage("navbarWidth",i.size.width),g()}}).on("resize scroll",function(i){var n=e(this),a=n.data("posinit");i.preventDefault(),i.stopPropagation(),u||"resize"!==i.type||c.css("left",0),a&&cancelAnimationFrame(a),n.data("posinit",requestAnimationFrame(function(){var e=t.UA.Opera&&c.scrollLeft()?20:2;o.css("top",0).css({top:parseInt(c.scrollTop())+"px",left:u?"auto":-1*parseInt(c.scrollRight()-e),right:u?-1*parseInt(c.scrollLeft()-e):"auto"}),"resize"===i.type&&t.getUI("cwd").trigger("resize")}))}).children(".ui-resizable-handle").addClass("ui-front")),(s=t.storage("navbarWidth"))?c.width(s):t.UA.Mobile&&t.one(t.cssloaded?"init":"cssloaded",function(){var i=function(){s=c.parent().width()/2,c.data("defWidth")>s?c.width(s):c.width(c.data("defWidth")),c.data("width",c.width()),t.trigger("wzresize")};c.data("defWidth",c.width()),e(window).on("resize."+t.namespace,i),i()})}),this}});
//# sourceMappingURL=../sourcemaps/ui/navbar.js.map
