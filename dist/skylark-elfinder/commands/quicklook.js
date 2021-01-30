/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(e){return(e.prototype.commands.quicklook=function(){"use strict";var e,i,t,n,o,a,s,r,d,c,l=this,u=l.fm,h=0,p=Element.update?"quicklookupdate":"update",g="elfinder-quicklook-navbar-icon",f="elfinder-quicklook-fullscreen",m="elfinder-quicklook-info-wrapper",v=function(e){$(document).trigger($.Event("keydown",{keyCode:e,ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1}))},w=function(e){var i,t=u.getUI().offset(),n=(i=e.find(".elfinder-cwd-file-wrapper")).length?i:e,o=n.offset()||{top:0,left:0};return{opacity:0,width:n.width(),height:n.height()-30,top:o.top-t.top,left:o.left-t.left}},k={},b=function(e,i){var t=i||e.substr(0,e.indexOf("/")),n=k[t]?k[t]:k[t]=document.createElement(t),o=!1;try{o=n.canPlayType&&n.canPlayType(e)}catch(e){}return!(!o||""===o||"no"==o)},y=-1!=window.navigator.platform.indexOf("Win"),I=!1,z=!1,x=!1,C=null,q=$.ui.keyCode.LEFT,U=$.ui.keyCode.RIGHT,R="mousemove touchstart "+("onwheel"in document?"wheel":"onmousewheel"in document?"mousewheel":"DOMMouseScroll"),A=$('<span class="elfinder-dialog-title elfinder-quicklook-title"/>'),E=$("<div/>"),D=$('<div class="elfinder-quicklook-info"/>'),P=$('<div class="ui-front elfinder-quicklook-cover"/>'),T=$('<div class="'+g+" "+g+'-fullscreen"/>').on("click touchstart",function(e){if(!x){var i=l.window,t=i.hasClass(f),o=$(window),a=function(){l.preview.trigger("changesize")};e.stopPropagation(),e.preventDefault(),t?(_="",H(),i.toggleClass(f).css(i.data("position")),o.trigger(l.resize).off(l.resize,a),M.off("mouseenter mouseleave"),P.off(R)):(i.toggleClass(f).data("position",{left:i.css("left"),top:i.css("top"),width:i.width(),height:i.height(),display:"block"}).removeAttr("style"),$(window).on(l.resize,a).trigger(l.resize),P.on(R,function(e){z||("mousemove"!==e.type&&"touchstart"!==e.type||(H(),C=setTimeout(function(){(u.UA.Mobile||M.parent().find(".elfinder-quicklook-navbar:hover").length<1)&&M.fadeOut("slow",function(){P.show()})},3e3)),P.is(":visible")&&(S(),P.data("tm",setTimeout(function(){P.show()},3e3))))}).show().trigger("mousemove"),M.on("mouseenter mouseleave",function(e){z||("mouseenter"===e.type?H():P.trigger("mousemove"))})),u.zIndex&&i.css("z-index",u.zIndex+1),u.UA.Mobile?M.attr("style",_):M.attr("style",_).draggable(t?"destroy":{start:function(){z=!0,x=!0,P.show(),H()},stop:function(){z=!1,_=l.navbar.attr("style"),requestAnimationFrame(function(){x=!1})}}),$(this).toggleClass(g+"-fullscreen-off");var s=i;n.is(".ui-resizable")&&(s=s.add(n)),s.resizable(t?"enable":"disable").removeClass("ui-state-disabled"),i.trigger("viewchange")}}),F=function(){l.update(void 0,function(){var e,i=l.fm,t=i.selectedFiles(),n=t.length;l.docked();return n||(n=1,t=[i.cwd()]),1===n?t[0]:(e=0,$.each(t,function(i,t){var n=parseInt(t.ts);e>=0?n>e&&(e=n):e="unknown"}),{hash:t[0].hash+"/"+ +new Date,name:i.i18n("items")+": "+n,mime:"group",size:K,ts:e,files:$.map(t,function(e){return e.hash}),getSize:!0})}())},H=function(){l.window.hasClass(f)&&(C&&clearTimeout(C),C=null,M.stop(!0,!0).css("display","block"),S())},S=function(){P.data("tm")&&clearTimeout(P.data("tm")),P.removeData("tm"),P.hide()},N=$('<div class="'+g+" "+g+'-prev"/>').on("click touchstart",function(e){return!x&&v(q),!1}),O=$('<div class="'+g+" "+g+'-next"/>').on("click touchstart",function(e){return!x&&v(U),!1}),M=$('<div class="elfinder-quicklook-navbar"/>').append(N).append(T).append(O).append('<div class="elfinder-quicklook-navbar-separator"/>').append($('<div class="'+g+" "+g+'-close"/>').on("click touchstart",function(e){return!x&&l.window.trigger("close"),!1})),j=$('<span class="ui-front ui-icon elfinder-icon-close ui-icon-closethick"/>').on("mousedown",function(e){e.stopPropagation(),l.window.trigger("close")}),L=$('<span class="ui-front ui-icon elfinder-icon-minimize ui-icon-minusthick"/>').on("mousedown",function(e){e.stopPropagation(),l.docked()?l.window.trigger("navdockout"):l.window.trigger("navdockin")}),K='<span class="elfinder-spinner-text">'+u.i18n("calc")+'</span><span class="elfinder-spinner"/>',_="",B=!0;this.flags={},this.cover=P,this.evUpdate=p,(this.navbar=M)._show=H,this.resize="resize."+u.namespace,this.info=$("<div/>").addClass(m).append(E).append(D),this.autoPlay=function(){return!!l.opened()&&!!l.options[l.docked()?"dockAutoplay":"autoplay"]},this.preview=$('<div class="elfinder-quicklook-preview ui-helper-clearfix"/>').on("change",function(){H(),M.attr("style",_),l.docked()&&M.hide(),l.preview.attr("style","").removeClass("elfinder-overflow-auto"),l.info.attr("style","").hide(),l.cover.removeClass("elfinder-quicklook-coverbg"),E.removeAttr("class").attr("style",""),D.html("")}).on(p,function(e){l.preview;var i,t,n,a=e.file,s='<div class="elfinder-quicklook-info-data">{value}</div>',d=[];a&&!Object.keys(a).length&&(a=u.cwd()),a&&r&&"pending"===r.state()&&r._hash!==a.hash&&r.reject(),a&&(e.forceUpdate||l.window.data("hash")!==a.hash)?(n=l.window.css("overflow","hidden"),t=u.escape(a.i18||a.name),!a.read&&e.stopImmediatePropagation(),l.window.data("hash",a.hash),l.preview.off("changesize").trigger("change").children().remove(),A.html(t),N.css("visibility",""),O.css("visibility",""),a.hash===u.cwdId2Hash(o.find("[id]:not(.elfinder-cwd-parent):first").attr("id"))&&N.css("visibility","hidden"),a.hash===u.cwdId2Hash(o.find("[id]:last").attr("id"))&&O.css("visibility","hidden"),"directory"===a.mime?d=[a.hash]:"group"===a.mime&&a.getSize&&(d=a.files),D.html(s.replace(/\{value\}/,t)+s.replace(/\{value\}/,u.mime2kind(a))+s.replace(/\{value\}/,d.length?K:u.formatSize(a.size))+s.replace(/\{value\}/,u.i18n("modify")+": "+u.formatDate(a))),d.length&&((r=u.getSize(d).done(function(e){D.find("span.elfinder-spinner").parent().html(e.formated)}).fail(function(){D.find("span.elfinder-spinner").parent().html(u.i18n("unknown"))}).always(function(){r=null}))._hash=a.hash),E.addClass("elfinder-cwd-icon ui-corner-all "+u.mime2class(a.mime)),a.icon&&E.css(u.getIconStyle(a,!0)),l.info.attr("class",m),a.csscls&&l.info.addClass(a.csscls),a.read&&(i=u.tmb(a))&&$("<img/>").hide().appendTo(l.preview).on("load",function(){E.addClass(i.className).css("background-image","url('"+i.url+"')"),$(this).remove()}).attr("src",i.url),l.info.delay(100).fadeIn(10),l.window.hasClass(f)&&P.trigger("mousemove"),n.css("overflow","")):e.stopImmediatePropagation()}),this.window=$('<div class="ui-front ui-helper-reset ui-widget elfinder-quicklook touch-punch" style="position:absolute"/>').hide().addClass(u.UA.Touch?"elfinder-touch":"").on("click",function(e){var i=this;e.stopPropagation(),2===h&&requestAnimationFrame(function(){2===h&&u.toFront(i)})}).append($('<div class="ui-dialog-titlebar ui-widget-header ui-corner-top ui-helper-clearfix elfinder-quicklook-titlebar"/>').append($('<span class="ui-widget-header ui-dialog-titlebar-close ui-corner-all elfinder-titlebar-button elfinder-quicklook-titlebar-icon'+(y?" elfinder-titlebar-button-right":"")+'"/>').append(j,L),A),this.preview,l.info.hide(),P.hide(),M).draggable({handle:"div.elfinder-quicklook-titlebar"}).on("open",function(t,n){var o=l.window,s=l.value,r=u.getUI("cwd"),c=function(e){h=e,l.update(1,l.value),l.change(),o.trigger("resize."+u.namespace)};B||0!==h?4===h&&(u.getUI("navdock").data("addNode")(d),c(3),l.preview.trigger("changesize"),u.storage("previewDocked","1"),0===u.getUI("navdock").width()&&o.trigger("navdockout")):(s&&s.hash!==a&&(r=u.cwdHash2Elm(s.hash.split("/",2)[0])),_="",M.attr("style",""),h=1,r.trigger("scrolltoview"),S(),o.css(n||w(r)).show().animate(function(){var t=l.options.contain||u.options.dialogContained,n=t?u.getUI():$(window),o=u.getUI().offset(),a=Math.min(e,n.width()-10),s=Math.min(i,n.height()-80);return{opacity:1,width:a,height:s,top:parseInt((n.height()-s-60)/2+(t?0:n.scrollTop()-o.top)),left:parseInt((n.width()-a)/2+(t?0:n.scrollLeft()-o.left))}}(),550,function(){c(2),H()}),u.toFront(o))}).on("close",function(e,i){var t,n=l.window,a=l.preview.trigger("change"),s=(l.value,(n.data("hash")||"").split("/",2)[0]),c=function(e,t){h=e,t&&u.toHide(n),a.children().remove(),l.update(0,l.value),n.data("hash",""),i&&i.resolve()};l.opened()&&(r&&"pending"===r.state()&&r.reject(),l.docked()?(d=u.getUI("navdock").data("removeNode")(l.window.attr("id"),"detach"),c(4),u.storage("previewDocked","2")):(h=1,n.hasClass(f)&&T.click(),s&&(t=o.find("#"+s)).length?n.animate(w(t),500,function(){a.off("changesize"),c(0,!0)}):c(0,!0)))}).on("navdockin",function(e,i){var n=l.window,o=u.getUI("navdock"),a=s||o.width(),r=i||{};B&&(r.init=!0),h=3,t=n.attr("style"),n.toggleClass("ui-front").removeClass("ui-widget").draggable("disable").resizable("disable").removeAttr("style").css({width:"100%",height:a,boxSizing:"border-box",paddingBottom:0,zIndex:"unset"}),M.hide(),L.toggleClass("ui-icon-plusthick ui-icon-minusthick elfinder-icon-full elfinder-icon-minimize"),u.toHide(n,!0),o.data("addNode")(n,r),l.preview.trigger("changesize"),u.storage("previewDocked","1")}).on("navdockout",function(e){var i=l.window,n=u.getUI("navdock"),o=($.Deferred(),w(l.preview));s=i.outerHeight(),n.data("removeNode")(i.attr("id"),u.getUI()),i.toggleClass("ui-front").addClass("ui-widget").draggable("enable").resizable("enable").attr("style",t),L.toggleClass("ui-icon-plusthick ui-icon-minusthick elfinder-icon-full elfinder-icon-minimize"),h=0,i.trigger("open",o),u.storage("previewDocked","0")}).on("resize."+u.namespace,function(){l.preview.trigger("changesize")}),this.alwaysEnabled=!0,this.value=null,this.handlers={select:function(e,i){c&&cancelAnimationFrame(c),e.data&&e.data.selected&&e.data.selected.length?l.opened()&&F():c=requestAnimationFrame(function(){l.opened()&&F()})},error:function(){l.window.is(":visible")&&l.window.trigger("close")},"searchshow searchhide":function(){this.opened()&&this.window.trigger("close")},navbarshow:function(){requestAnimationFrame(function(){l.docked()&&l.preview.trigger("changesize")})},destroy:function(){l.window.remove()}},this.shortcuts=[{pattern:"space"}],this.support={audio:{ogg:b("audio/ogg;"),webm:b("audio/webm;"),mp3:b("audio/mpeg;"),wav:b("audio/wav;"),m4a:b("audio/mp4;")||b("audio/x-m4a;")||b("audio/aac;"),flac:b("audio/flac;"),amr:b("audio/amr;")},video:{ogg:b("video/ogg;"),webm:b("video/webm;"),mp4:b("video/mp4;"),mkv:b("video/x-matroska;")||b("video/webm;"),"3gp":b("video/3gpp;")||b("video/mp4;"),m3u8:b("application/x-mpegURL","video")||b("application/vnd.apple.mpegURL","video"),mpd:b("application/dash+xml","video")}},k={},this.closed=function(){return 0==h||4==h},this.opened=function(){return 2==h||3==h},this.docked=function(){return 3==h},this.addIntegration=function(e){requestAnimationFrame(function(){u.trigger("helpIntegration",Object.assign({cmd:"quicklook"},e))})},this.init=function(){var t,r=this.options,d=this.window,c=this.preview;e=r.width>0?parseInt(r.width):450,i=r.height>0?parseInt(r.height):300,"auto"!==r.dockHeight&&((s=parseInt(r.dockHeight))||(s=void 0)),u.one("load",function(){!(I=u.getUI("navdock").data("dockEnabled"))&&L.hide(),n=u.getUI(),o=u.getUI("cwd"),u.zIndex&&d.css("z-index",u.zIndex+1),d.appendTo(n),$(document).on("keydown."+u.namespace,function(e){e.keyCode==$.ui.keyCode.ESCAPE&&l.opened()&&!l.docked()&&d.hasClass("elfinder-frontmost")&&d.trigger("close")}),d.resizable({handles:"se",minWidth:350,minHeight:120,resize:function(){c.trigger("changesize")}}),l.change(function(){l.opened()&&l.value&&(l.value.tmb&&1==l.value.tmb&&(l.value=Object.assign({},u.file(l.value.hash))),c.trigger($.Event(p,{file:l.value})))}),c.on(p,function(e){var i,n,o;if(i=e.file){if(n=i.hash,o=u.searchStatus.mixed&&u.searchStatus.state>1,"directory"!==i.mime)if(parseInt(i.size)||i.mime.match(r.mimeRegexNotEmptyCheck)){if(l.dispInlineRegex=t,o||u.optionsByHashes[n])try{l.dispInlineRegex=new RegExp(u.option("dispInlineRegex",n),"i")}catch(e){try{l.dispInlineRegex=new RegExp(u.isRoot(i)?u.options.dispInlineRegex:u.option("dispInlineRegex",i.phash),"i")}catch(e){l.dispInlineRegex=/^$/}}}else e.stopImmediatePropagation();else l.dispInlineRegex=/^$/;l.info.show()}else e.stopImmediatePropagation()}),$.each(u.commands.quicklook.plugins||[],function(e,i){"function"==typeof i&&new i(l)})}).one("open",function(){var e,i=Number(u.storage("previewDocked")||r.docked);I&&i>=1&&(e=l.window,l.exec(),e.trigger("navdockin",{init:!0}),2===i?e.trigger("close"):(l.update(void 0,u.cwd()),l.change())),B=!1}).bind("open",function(){a=u.cwd().hash,l.value=u.cwd();try{t=new RegExp(u.option("dispInlineRegex"),"i")}catch(e){t=/^$/}}).bind("change",function(e){e.data&&e.data.changed&&l.opened()&&$.each(e.data.changed,function(){if(l.window.data("hash")===this.hash)return l.window.data("hash",null),l.preview.trigger(p),!1})}).bind("navdockresizestart navdockresizestop",function(e){P["navdockresizestart"===e.type?"show":"hide"]()})},this.getstate=function(){return l.opened()?1:0},this.exec=function(){return l.closed()&&F(),l.enabled()&&l.window.trigger(l.opened()?"close":"open"),$.Deferred().resolve()},this.hideinfo=function(){this.info.stop(!0,!0).hide()}}).prototype={forceLoad:!0},e});
//# sourceMappingURL=../sourcemaps/commands/quicklook.js.map
