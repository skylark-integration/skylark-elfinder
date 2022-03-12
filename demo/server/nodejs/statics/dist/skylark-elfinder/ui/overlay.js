/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["skylark-jquery"],function(t){t.fn.elfinderoverlay=function(n){"use strict";var e,i,o,a,d=this.parent().elfinder("instance");return this.filter(":not(.elfinder-overlay)").each(function(){n=Object.assign({},n),t(this).addClass("ui-front ui-widget-overlay elfinder-overlay").hide().on("mousedown",function(t){t.preventDefault(),t.stopPropagation()}).data({cnt:0,show:"function"==typeof n.show?n.show:function(){},hide:"function"==typeof n.hide?n.hide:function(){}})}),"show"==n&&(i=(e=this.eq(0)).data("cnt")+1,o=e.data("show"),d.toFront(e),e.data("cnt",i),e.is(":hidden")&&(e.show(),o())),"hide"==n&&(i=(e=this.eq(0)).data("cnt")-1,a=e.data("hide"),e.data("cnt",i),i<=0&&(e.hide(),a())),this}});
//# sourceMappingURL=../sourcemaps/ui/overlay.js.map
