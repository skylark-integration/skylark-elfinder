/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["skylark-jquery"],function(e){e.fn.dialogelfinder=function(i,n){var o,t,d="elfinderDestroyOnClose";if(e.isPlainObject(i))this.not(".elfinder").each(function(){i.handlers=i.handlers||{};var o,t=e(this),r=(e(document),e('<div class="ui-widget-header dialogelfinder-drag ui-corner-top">'+(i.title||"Files")+"</div>")),s=(e('<a href="#" class="dialogelfinder-drag-close ui-corner-all"><span class="ui-icon ui-icon-closethick"> </span></a>').appendTo(r).on("click",function(e){e.preventDefault(),t.dialogelfinder("close")}),i.handlers.init);i.handlers.init=function(e,i){t.prepend(r),s&&s(e,i)},(o=t.addClass("elfinder dialogelfinder touch-punch").css("position","absolute").hide().appendTo("body").draggable({handle:".dialogelfinder-drag",containment:"window",stop:function(){t.trigger("resize"),o.trigger("resize")}}).elfinder(i,n).elfinder("instance")).reloadCallback=function(e,i){o.destroy(),e.handlers.init=s,t.dialogelfinder(e,i).dialogelfinder("open")},t.width(parseInt(t.width())||840).data(d,!!i.destroyOnClose).find(".elfinder-toolbar").removeClass("ui-corner-top"),i.position&&t.data("elfinderPosition",i.position),!1!==i.autoOpen&&e(this).dialogelfinder("open")});else if("open"===i)t=(o=e(this)).data("elfinderPosition")||{top:parseInt(e(document).scrollTop()+(e(window).height()<o.height()?2:(e(window).height()-o.height())/2)),left:parseInt(e(document).scrollLeft()+(e(window).width()<o.width()?2:(e(window).width()-o.width())/2))},o.is(":hidden")&&(o.addClass("ui-front").css(t).show().trigger("resize"),setTimeout(function(){o.trigger("resize").trigger("mousedown")},200));else if("close"===i)(o=e(this).removeClass("ui-front")).is(":visible")&&(o.data(d)?o.elfinder("destroy").remove():o.elfinder("close"));else if("instance"===i)return e(this).getElFinder();return this}});
//# sourceMappingURL=sourcemaps/jquery.dialogelfinder.js.map
