/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["skylark-jquery"],function(e){e.fn.elfinderplaces=function(t,n){"use strict";return this.each(function(){var a={},r="class",o=t.res(r,"navdir"),i=t.res(r,"navcollapse"),s=t.res(r,"navexpand"),l=t.res(r,"hover"),c=t.res(r,"treeroot"),d=t.res(r,"adroppable"),u=t.res("tpl","placedir"),p=t.res("tpl","perms"),h=e(t.res("tpl","navspinner")),f=n.suffix?n.suffix:"",g="places"+f,v=null,m=function(e){return e.substr(6)},y=function(e){return"place-"+e},b=function(t){return e(document.getElementById(y(t)))},C=function(){var n=[],r={};(n=e.map(B.children().find("[id]"),function(e){return m(e.id)})).length?e.each(n.reverse(),function(e,t){r[t]=a[t]}):r=null,t.storage(g,r)},x=function(){var r,o;g="places"+(n.suffix?n.suffix:""),a={},"string"==typeof(r=t.storage(g))?(r=e.grep(r.split(","),function(e){return!!e}),e.each(r,function(e,t){var n=t.split("#");a[n[0]]=n[1]?n[1]:n[0]})):e.isPlainObject(r)&&(a=r),t.trigger("placesload",{dirs:a,storageKey:g},!0),(o=Object.keys(a)).length&&(j.prepend(h),t.request({data:{cmd:"info",targets:o},preventDefault:!0}).done(function(n){var r={};n.files&&n.files.length&&t.cache(n.files),e.each(n.files,function(e,t){var n=t.hash;r[n]=t}),e.each(a,function(e,t){k(r[e]||Object.assign({notfound:!0},t))}),t.storage("placesState")>0&&j.trigger("click")}).always(function(){h.remove()}))},w=function(n,a){return e(u.replace(/\{id\}/,y(n?n.hash:a)).replace(/\{name\}/,t.escape(n?n.i18||n.name:a)).replace(/\{cssclass\}/,n?t.perms2class(n)+(n.notfound?" elfinder-na":"")+(n.csscls?" "+n.csscls:""):"").replace(/\{permissions\}/,!n||n.read&&n.write&&!n.notfound?"":p).replace(/\{title\}/,n?' title="'+t.escape(t.path(n.hash,!0)||n.i18||n.name)+'"':"").replace(/\{symlink\}/,"").replace(/\{style\}/,n&&n.icon?t.getIconStyle(n):""))},k=function(e){var n,r;return"directory"===e.mime&&(r=e.hash,t.files().hasOwnProperty(r)||t.trigger("tree",{tree:[e]}),n=w(e,r),a[r]=e,B.prepend(n),j.addClass(i),I.toggle(B.children().length>1),!0)},P=function(e){var t,n,r=null;return a[e]&&(delete a[e],(t=b(e)).length&&(r=t.text(),t.parent().remove(),n=B.children().length,I.toggle(n>1),n||(j.removeClass(i),U.removeClass(s),B.slideToggle(!1)))),r},T=function(e,t){var n=e.hash,r=b(t||n),o=w(e,n);return r.length>0&&(r.parent().replaceWith(o),a[n]=e,!0)},I=e('<span class="elfinder-button-icon elfinder-button-icon-sort elfinder-places-root-icon" title="'+t.i18n("cmdsort")+'"/>').hide().on("click",function(n){n.stopPropagation(),B.empty(),e.each(a,function(n,a){var r=t.file(n)||a,i=w(r,n),s=null;if(r||i.hide(),B.children().length&&(e.each(B.children(),function(){var t=e(this);if((r.i18||r.name).localeCompare(t.children("."+o).text())<0)return s=!i.insertBefore(t)}),null!==s))return!0;!b(n).length&&B.append(i)}),C()}),O=w({hash:"root-"+t.namespace,name:t.i18n(n.name,"places"),read:!0,write:!0}),j=O.children("."+o).addClass(c).on("click",function(e){e.stopPropagation(),j.hasClass(i)&&(U.toggleClass(s),B.slideToggle(),t.storage("placesState",U.hasClass(s)?1:0))}).append(I),B=O.children("."+t.res(r,"navsubtree")),U=e(this).addClass(t.res(r,"tree")+" elfinder-places ui-corner-all").hide().append(O).appendTo(t.getUI("navbar")).on("mouseenter mouseleave","."+o,function(t){e(this).toggleClass("ui-state-hover","mouseenter"==t.type)}).on("click","."+o,function(n){var a=e(this);a.data("longtap")?n.stopPropagation():!a.hasClass("elfinder-na")&&t.exec("open",a.attr("id").substr(6))}).on("contextmenu","."+o+":not(."+c+")",function(n){var a=e(this),r=a.attr("id").substr(6);n.preventDefault(),t.trigger("contextmenu",{raw:[{label:t.i18n("moveUp"),icon:"up",remain:!0,callback:function(){!function(e){var n=b(e),a=n.parent(),r=a.prev("div"),o="ui-state-hover",i=t.getUI("contextmenu");v&&clearTimeout(v),r.length&&(i.find(":first").data("placesHash",e),n.addClass(o),a.insertBefore(r),r=a.prev("div"),v=setTimeout(function(){n.removeClass(o),i.find(":first").data("placesHash")===e&&i.hide().empty()},1500)),r.length||(n.removeClass(o),i.hide().empty())}(r),C()}},"|",{label:t.i18n("rmFromPlaces"),icon:"rm",callback:function(){P(r),C()}}],x:n.pageX,y:n.pageY}),a.addClass("ui-state-hover"),t.getUI("contextmenu").children().on("mouseenter",function(){a.addClass("ui-state-hover")}),t.bind("closecontextmenu",function(){a.removeClass("ui-state-hover")})}).droppable({tolerance:"pointer",accept:".elfinder-cwd-file-wrapper,.elfinder-tree-dir,.elfinder-cwd-file",hoverClass:t.res("class","adroppable"),classes:{"ui-droppable-hover":t.res("class","adroppable")},over:function(n,r){var o=r.helper,i=e.grep(o.data("files"),function(e){return"directory"===t.file(e).mime&&!a[e]});n.stopPropagation(),o.data("dropover",o.data("dropover")+1),t.insideWorkzone(n.pageX,n.pageY)&&(i.length>0?(o.addClass("elfinder-drag-helper-plus"),t.trigger("unlockfiles",{files:o.data("files"),helper:o})):e(this).removeClass(d))},out:function(t,n){var a=n.helper;t.stopPropagation(),a.removeClass("elfinder-drag-helper-move elfinder-drag-helper-plus").data("dropover",Math.max(a.data("dropover")-1,0)),e(this).removeData("dropover").removeClass(d)},drop:function(n,r){var o=r.helper,i=!0;e.each(o.data("files"),function(e,n){var r=t.file(n);r&&"directory"==r.mime&&!a[r.hash]?k(r):i=!1}),C(),i&&o.hide()}}).on("touchstart","."+o+":not(."+c+")",function(n){if(!(n.originalEvent.touches.length>1))var a=e(this).attr("id").substr(6),r=e(this).addClass(l).data("longtap",null).data("tmlongtap",setTimeout(function(){r.data("longtap",!0),t.trigger("contextmenu",{raw:[{label:t.i18n("rmFromPlaces"),icon:"rm",callback:function(){P(a),C()}}],x:n.originalEvent.touches[0].pageX,y:n.originalEvent.touches[0].pageY})},500))}).on("touchmove touchend","."+o+":not(."+c+")",function(t){clearTimeout(e(this).data("tmlongtap")),"touchmove"==t.type&&e(this).removeClass(l)});e.fn.sortable&&B.addClass("touch-punch").sortable({appendTo:t.getUI(),revert:!1,helper:function(n){var a=e(n.target).parent();return a.children().removeClass("ui-state-hover"),e('<div class="ui-widget elfinder-place-drag elfinder-'+t.direction+'"/>').append(e('<div class="elfinder-navbar"/>').show().append(a.clone()))},stop:function(t,n){var a=e(n.item[0]),r=U.offset().top,o=U.offset().left,i=U.width(),s=U.height(),l=t.pageX,c=t.pageY;l>o&&l<o+i&&c>r&&c<c+s||(P(m(a.children(":first").attr("id"))),C())},update:function(e,t){C()}}),e(this).on("regist",function(t,n){var r=!1;e.each(n,function(e,t){t&&"directory"==t.mime&&!a[t.hash]&&k(t)&&(r=!0)}),r&&C()}),t.one("load",function(){t.oldAPI||(U.show().parent().show(),x(),t.change(function(t){var n=!1;e.each(t.data.changed,function(e,t){a[t.hash]&&("directory"!==t.mime?P(t.hash)&&(n=!0):T(t)&&(n=!0))}),n&&C()}).bind("rename",function(t){var n=!1;t.data.removed&&e.each(t.data.removed,function(e,a){t.data.added[e]&&T(t.data.added[e],a)&&(n=!0)}),n&&C()}).bind("rm paste",function(t){var n=[],a=!1;t.data.removed&&e.each(t.data.removed,function(e,t){var a=P(t);a&&n.push(a)}),n.length&&(a=!0),t.data.added&&n.length&&e.each(t.data.added,function(t,a){1!==e.inArray(a.name,n)&&"directory"==a.mime&&k(a)}),a&&C()}).bind("sync netmount",function(){var r,o=this,l=n.suffix?n.suffix:"";if("sync"===o.type&&f!==l)return f=l,B.empty(),j.removeClass(i),U.removeClass(s),B.slideToggle(!1),void x();(r=Object.keys(a)).length&&(j.prepend(h),t.request({data:{cmd:"info",targets:r},preventDefault:!0}).done(function(n){var r={},i=!1,s=t.cwd().hash;e.each(n.files||[],function(e,n){var a=n.hash;r[a]=n,t.files().hasOwnProperty(n.hash)||t.updateCache({tree:[n]})}),e.each(a,function(e,t){Boolean(t.notfound)===Boolean(r[e])?t.phash===s&&"netmount"!==o.type||r[e]&&"directory"!==r[e].mime?P(e)&&(i=!0):T(r[e]||Object.assign({notfound:!0},t))&&(i=!0):r[e]&&r[e].phash!=s&&T(r[e])}),i&&C()}).always(function(){h.remove()}))}))})})}});
//# sourceMappingURL=../sourcemaps/ui/places.js.map
