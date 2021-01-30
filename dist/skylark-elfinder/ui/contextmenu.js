/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["skylark-jquery"],function(e){e.fn.elfindercontextmenu=function(t){"use strict";return this.each(function(){e(this);var n,a,o,i,s,r,d,l="elfinder-contextmenu-item",c="elfinder-contextsubmenu-item",u="elfinder-contextmenu-extra-icon",f=t.res("class","hover"),m={distance:8,start:function(){p.data("drag",!0).data("touching")&&p.find("."+f).removeClass(f)},stop:function(){p.data("draged",!0).removeData("drag")}},p=e(this).addClass("touch-punch ui-helper-reset ui-front ui-widget ui-state-default ui-corner-all elfinder-contextmenu elfinder-contextmenu-"+t.direction).hide().on("touchstart",function(e){p.data("touching",!0).children().removeClass(f)}).on("touchend",function(e){p.removeData("touching")}).on("mouseenter mouseleave","."+l,function(t){e(this).toggleClass(f,!("mouseenter"!==t.type&&(p.data("draged")||!p.data("submenuKeep")))),p.data("draged")&&p.data("submenuKeep")&&p.find(".elfinder-contextmenu-sub:visible").parent().addClass(f)}).on("mouseenter mouseleave","."+u,function(t){e(this).parent().toggleClass(f,"mouseleave"===t.type)}).on("mouseenter mouseleave","."+l+",."+c,function(t){var n,a=function(t,n){e.each(n?s:o,function(e,a){if(t[0]===a)return(n?s:o)._cur=e,n?r=t:i=t,!1})};if(t.originalEvent){var d=e(this),l=function(){i&&!i.children("div.elfinder-contextmenu-sub:visible").length&&i.removeClass(f)};"mouseenter"===t.type?d.hasClass(c)?(r&&r.removeClass(f),i&&(s=i.find("div."+c)),a(d,!0)):(l(),a(d)):d.hasClass(c)?(r=null,s=null):(l(),n=i,setTimeout(function(){n===i&&(i=null)},250))}}).on("contextmenu",function(){return!1}).on("mouseup",function(){setTimeout(function(){p.removeData("draged")},100)}).draggable(m),g="ltr"===t.direction,h=g?"left":"right",v=Object.assign({},t.options.contextmenu),b='<div class="'+l+'{className}"><span class="elfinder-button-icon {icon} elfinder-contextmenu-icon"{style}/><span>{label}</span></div>',x=function(n,a,o,i){var s,r,d="",l="",c="";return i&&(i.className&&(d=" "+i.className),i.iconClass&&(c=i.iconClass,a=""),i.iconImg&&(r=(s=i.iconImg.split(/ +/))[1]&&s[2]?t.escape(s[1]+"px "+s[2]+"px"):"",l=" style=\"background:url('"+t.escape(s[0])+"') "+(r||"0 0")+" no-repeat;"+(r?"":"posbackground-size:contain;")+'"')),e(b.replace("{icon}",a?"elfinder-button-icon-"+a:c||"").replace("{label}",n).replace("{style}",l).replace("{className}",d)).on("click",function(e){e.stopPropagation(),e.preventDefault(),o()})},y=function(n){var a=n.keyCode,d=e.ui.keyCode.ESCAPE,l=e.ui.keyCode.ENTER,u=e.ui.keyCode.LEFT,m=e.ui.keyCode.RIGHT,p=e.ui.keyCode.UP,g=e.ui.keyCode.DOWN,h="ltr"===t.direction?m:u,v=h===m?u:m;-1!==e.inArray(a,[d,l,u,m,p,g])&&(n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation(),a==d||a===v?i&&s&&r?(r.trigger("mouseleave").trigger("submenuclose"),i.addClass(f),s=null,r=null):a==d&&w():a==p||a==g?s?(r&&r.trigger("mouseleave"),a==g&&(!r||s.length<=++s._cur)?s._cur=0:a==p&&(!r||--s._cur<0)&&(s._cur=s.length-1),r=s.eq(s._cur).trigger("mouseenter")):(s=null,i&&i.trigger("mouseleave"),a==g&&(!i||o.length<=++o._cur)?o._cur=0:a==p&&(!i||--o._cur<0)&&(o._cur=o.length-1),i=o.eq(o._cur).addClass(f)):!i||a!=l&&a!==h||(i.hasClass("elfinder-contextmenu-group")?r?a==l&&r.click():(i.trigger("mouseenter"),(s=i.find("div."+c))._cur=0,r=s.first().addClass(f)):a==l&&i.click()))},C=function(o,l,c){var u,f,m=p.outerWidth(),g=p.outerHeight(),v=n.attr("style"),b=n.offset(),x=n.width(),_=n.height(),k=t.UA.Mobile?40:2,T=t.UA.Mobile?20:2;o-=b?b.left:0,l-=b?b.top:0,c=Object.assign(c||{},{top:Math.max(0,l+T+g<_?l+T:l-(l+g-_)),left:Math.max(0,o<m+k||o+k+m<x?o+k:o-k-m),opacity:"1"});d=!0,t.autoSync("stop"),n.width(x),p.stop().removeAttr("style").css(c),t.toFront(p),p.show(),n.attr("style",v),c[h]=parseInt(p.width()),p.find(".elfinder-contextmenu-sub").css(c),t.UA.iOS&&e("div.elfinder div.overflow-scrolling-touch").css("-webkit-overflow-scrolling","auto"),i=null,s=null,r=null,e(document).on("keydown."+t.namespace,y),(u=e._data(document).events)&&u.keydown&&u.keydown.unshift(u.keydown.pop()),t.UA.Mobile&&(f="touchstart.contextmenuAutoToggle",p.data("hideTm")&&clearTimeout(p.data("hideTm")),p.is(":visible")&&p.on("touchstart",function(e){e.originalEvent.touches.length>1||(p.stop(),t.toFront(p),p.data("hideTm")&&clearTimeout(p.data("hideTm")))}).data("hideTm",setTimeout(function(){p.is(":visible")&&(a.find(".elfinder-cwd-file").off(f),a.find(".elfinder-cwd-file.ui-selected").one(f,function(t){if(!(t.originalEvent.touches.length>1)){var n=e(t.target);if(p.first().length&&!n.is("input:checkbox")&&!n.hasClass("elfinder-cwd-select"))return t.stopPropagation(),C(t.originalEvent.touches[0].pageX,t.originalEvent.touches[0].pageY),a.data("longtap",!0),void n.one("touchend",function(){setTimeout(function(){a.removeData("longtap")},80)});a.find(".elfinder-cwd-file").off(f)}}).one("unselect."+t.namespace,function(){a.find(".elfinder-cwd-file").off(f)}),p.fadeOut({duration:300,fail:function(){p.css("opacity","1").show()},done:function(){t.toHide(p)}}))},4500))),requestAnimationFrame(function(){t.getUI().one("click."+t.namespace,w)})},w=function(){if(t.getUI().off("click."+t.namespace,w),e(document).off("keydown."+t.namespace,y),_=k=null,p.is(":visible")||p.children().length){t.toHide(p.removeAttr("style").empty().removeData("submenuKeep"));try{p.draggable("instance")||p.draggable(m)}catch(e){p.hasClass("ui-draggable")||p.draggable(m)}p.data("prevNode")&&(p.data("prevNode").after(p),p.removeData("prevNode")),t.trigger("closecontextmenu"),t.UA.iOS&&e("div.elfinder div.overflow-scrolling-touch").css("-webkit-overflow-scrolling","touch")}d&&t.searchStatus.state<1&&!t.searchStatus.ininc&&t.autoSync(),d=!1},_=null,k=null;t.one("load",function(){n=t.getUI(),a=t.getUI("cwd"),t.bind("contextmenu",function(i){var s,r,d,m,h,b,y,T,N,A,D=i.data,U={};D.type&&"files"!==D.type&&a.trigger("unselectall"),w(),D.type&&D.targets?(t.trigger("contextmenucreate",D),d=D.type,m=D.targets,y=!1,T=!1,N=[],A="cwd"===d,_=d,k=m,(b=t.option("uiCmdMap",A?void 0:m[0]))||(b={}),A||(N=t.getDisabledCmds(m)),(h=t.selected().length)>1&&p.append('<div class="ui-corner-top ui-widget-header elfinder-contextmenu-header"><span>'+t.i18n("selectedItems",""+h)+"</span></div>"),o=e(),e.each(v[d]||[],function(a,i){var s,r,h,v,C,_;if("|"!==i){if(b[i]?(r=b[i],h=!0):r=i,!(s=t.getCommand(r))||A||t.searchStatus.state&&s.disableOnSearch||(s.__disabled=s._disabled,s._disabled=!(s.alwaysEnabled||t._commands[r]&&!(-1!==e.inArray(i,N)||h&&N[r])),e.each(s.linkedCmds,function(e,n){var a;(a=t.getCommand(n))&&(a.__disabled=a._disabled,a._disabled=!(a.alwaysEnabled||t._commands[n]&&!N[n]))})),s&&!s._disabled&&-1!=s.getstate(m)){if(s.variants){if(!s.variants.length)return;v=x(s.title,s.className?s.className:s.name,function(){},s.contextmenuOpts),C=e('<div class="ui-front ui-corner-all elfinder-contextmenu-sub"/>').hide().css("max-height",t.getUI().height()-30).appendTo(v.append('<span class="elfinder-contextmenu-arrow"/>')),_=function(e){if(e){var a=n.attr("style");n.width(n.width()),C.css({top:"-1000px",left:"auto",right:"auto"});var o,i,s=v.offset(),r=s.left,d=s.top,l=v.outerWidth(),c=C.outerWidth(!0),u=C.outerHeight(!0),f=n.offset(),m=f.left+n.width(),h=f.top+n.height(),b=g,x=l;g?(i=r+l+c-m)>10&&(r>c-5?(x-=5,b=!1):t.UA.Mobile||(x=l-i)):(i=c-r)>0&&(r+l+c-15<m?(x-=5,b=!0):t.UA.Mobile||(x=l-i)),o=(i=d+5+u-h)>0&&d<h?5-i:i>0?30-u:5,p.find(".elfinder-contextmenu-sub:visible").hide(),C.css({top:o,left:b?x:"auto",right:b?"auto":x,overflowY:"auto"}).show(),n.attr("style",a)}else C.hide()},v.addClass("elfinder-contextmenu-group").on("mouseleave",".elfinder-contextmenu-sub",function(e){p.data("draged")||p.removeData("submenuKeep")}).on("submenuclose",".elfinder-contextmenu-sub",function(e){_(!1)}).on("click","."+c,function(n){var a,o;n.stopPropagation(),p.data("draged")||(o=e(this),s.keepContextmenu?(o.removeClass(f),v.addClass(f)):p.hide(),void 0===(a=o.data("exec"))&&(a={}),"object"==typeof a&&(a._userAction=!0,a._currentType=d,a._currentNode=o),!s.keepContextmenu&&w(),t.exec(s.name,m,a))}).on("touchend",function(e){p.data("drag")||(_(!0),p.data("submenuKeep",!0))}).on("mouseenter mouseleave",function(t){p.data("touching")||(v.data("timer")&&(clearTimeout(v.data("timer")),v.removeData("timer")),e(t.target).closest(".elfinder-contextmenu-sub",p).length||("mouseleave"===t.type?p.data("submenuKeep")||v.data("timer",setTimeout(function(){v.removeData("timer"),_(!1)},250)):v.data("timer",setTimeout(function(){v.removeData("timer"),_(!0)},o.find("div.elfinder-contextmenu-sub:visible").length?250:0))))}),e.each(s.variants,function(t,n){var a,o,i,s,r="|"===n?'<div class="elfinder-contextmenu-separator"/>':e('<div class="'+l+" "+c+'"><span>'+n[1]+"</span></div>").data("exec",n[0]);void 0!==n[2]&&(a=e("<span/>").addClass("elfinder-button-icon elfinder-contextmenu-icon"),/\//.test(n[2])?a.css((o=n[2],i=o.split(/ +/),s=i[1]&&i[2]?i[1]+"px "+i[2]+"px":"",{backgroundImage:'url("'+i[0]+'")',backgroundRepeat:"no-repeat",backgroundPosition:s||"",backgroundSize:s?"":"contain"})):a.addClass("elfinder-button-icon-"+n[2]),r.prepend(a).addClass(c+"-icon")),C.append(r)})}else v=x(s.title,s.className?s.className:s.name,function(){p.data("draged")||(!s.keepContextmenu&&w(),t.exec(s.name,m,{_userAction:!0,_currentType:d,_currentNode:v}))},s.contextmenuOpts),s.extra&&s.extra.node?(e('<span class="elfinder-button-icon elfinder-button-icon-'+(s.extra.icon||"")+" "+u+'"/>').append(s.extra.node).appendTo(v),e(s.extra.node).trigger("ready",{targets:m})):v.remove("."+u);s.extendsCmd&&v.children("span.elfinder-button-icon").addClass("elfinder-button-icon-"+s.extendsCmd),T&&p.append('<div class="elfinder-contextmenu-separator"/>'),p.append(v),y=!0,T=!1}s&&void 0!==s.__disabled&&(s._disabled=s.__disabled,delete s.__disabled,e.each(s.linkedCmds,function(e,n){var a;(a=t.getCommand(n))&&(a._disabled=a.__disabled,delete a.__disabled)}))}else y&&(T=!0)}),o=p.children("div."+l),t.trigger("contextmenucreatedone",D)):D.raw&&(r=D.raw,_="raw",e.each(r,function(e,t){var n;"|"===t?p.append('<div class="elfinder-contextmenu-separator"/>'):t.label&&"function"==typeof t.callback&&(n=x(t.label,t.icon,function(){p.data("draged")||(!t.remain&&w(),t.callback())},t.options||null),p.append(n))}),o=p.children("div."+l)),p.children().length&&((s=D.prevNode||null)&&(p.data("prevNode",p.prev()),s.after(p)),D.fitHeight&&(U={maxHeight:Math.min(t.getUI().height(),e(window).height()),overflowY:"auto"},p.draggable("destroy").removeClass("ui-draggable")),C(D.x,D.y,U),D.opened&&"function"==typeof D.opened&&D.opened.call(p))}).one("destroy",function(){p.remove()}).bind("disable",w).bind("select",function(e){"files"===_&&(!e.data||e.data.selected.toString()!==k.toString())&&w()})}).shortcut({pattern:"mac"===t.OS?"ctrl+m":"contextmenu shift+f10",description:"contextmenu",callback:function(n){n.stopPropagation(),n.preventDefault(),e(document).one("contextmenu."+t.namespace,function(e){e.preventDefault(),e.stopPropagation()});var a,o,i,s,r=t.selected();r.length?(a="files",o=r,s=t.cwdHash2Elm(r[0])):(a="cwd",o=[t.cwd().hash],i=t.getUI("workzone").offset()),s&&s.length||(s=t.getUI("workzone")),(i=s.offset()).top+=s.height()/2,i.left+=s.width()/2,t.trigger("contextmenu",{type:a,targets:o,x:i.left,y:i.top})}})})}});
//# sourceMappingURL=../sourcemaps/ui/contextmenu.js.map
