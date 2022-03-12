/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["./elFinder"],function(e){return e.prototype.resources={class:{hover:"ui-state-hover",active:"ui-state-active",disabled:"ui-state-disabled",draggable:"ui-draggable",droppable:"ui-droppable",adroppable:"elfinder-droppable-active",cwdfile:"elfinder-cwd-file",cwd:"elfinder-cwd",tree:"elfinder-tree",treeroot:"elfinder-navbar-root",navdir:"elfinder-navbar-dir",navdirwrap:"elfinder-navbar-dir-wrapper",navarrow:"elfinder-navbar-arrow",navsubtree:"elfinder-navbar-subtree",navcollapse:"elfinder-navbar-collapsed",navexpand:"elfinder-navbar-expanded",treedir:"elfinder-tree-dir",placedir:"elfinder-place-dir",searchbtn:"elfinder-button-search",editing:"elfinder-to-editing",preventback:"elfinder-prevent-back",tabstab:"ui-state-default ui-tabs-tab ui-corner-top ui-tab",tabsactive:"ui-tabs-active ui-state-active"},tpl:{perms:'<span class="elfinder-perms"/>',lock:'<span class="elfinder-lock"/>',symlink:'<span class="elfinder-symlink"/>',navicon:'<span class="elfinder-nav-icon"/>',navspinner:'<span class="elfinder-spinner elfinder-navbar-spinner"/>',navdir:'<div class="elfinder-navbar-wrapper{root}"><span id="{id}" class="ui-corner-all elfinder-navbar-dir {cssclass}"{title}><span class="elfinder-navbar-arrow"/><span class="elfinder-navbar-icon" {style}/>{symlink}{permissions}{name}</span><div class="elfinder-navbar-subtree" style="display:none"/></div>',placedir:'<div class="elfinder-navbar-wrapper"><span id="{id}" class="ui-corner-all elfinder-navbar-dir {cssclass}"{title}><span class="elfinder-navbar-arrow"/><span class="elfinder-navbar-icon" {style}/>{symlink}{permissions}{name}</span><div class="elfinder-navbar-subtree" style="display:none"/></div>'},mimes:{text:["application/dash+xml","application/docbook+xml","application/javascript","application/json","application/plt","application/sat","application/sql","application/step","application/vnd.hp-hpgl","application/x-awk","application/x-config","application/x-csh","application/x-empty","application/x-mpegurl","application/x-perl","application/x-php","application/x-web-config","application/xhtml+xml","application/xml","audio/x-mp3-playlist","image/cgm","image/svg+xml","image/vnd.dxf","model/iges"]},mixin:{make:function(){"use strict";var e,i,a,n,t,r,s,l,o,c,d=this,p=this.fm,m=this.name,f=this.requestCmd||m,u=p.getUI("workzone"),v=this.origin&&"navbar"===this.origin?"tree":"cwd",g="tree"===v,h=g?"navHash2Elm":"cwdHash2Elm",b=!g&&"list"!=p.storage("view"),y=p.selected(),x=this.move||!1,w=u.hasClass("elfinder-cwd-wrapper-empty"),k=function(){requestAnimationFrame(function(){F&&F.trigger("blur")})},C=function(){N.is(":hidden")||N.elfinderoverlay("hide").off("click close",z),i&&(a.removeClass("ui-front").css("position","").off("unselect."+p.namespace,k),b?i&&i.css("max-height",""):g||a.css("width","").parent("td").css("overflow",""))},j=$.Deferred().fail(function(e){r&&t.attr("class",r),w&&u.addClass("elfinder-cwd-wrapper-empty"),y&&(x&&p.trigger("unlockfiles",{files:y}),p.clipboard([]),p.trigger("selectfiles",{files:y})),e&&p.error(e)}).always(function(){C(),q(),p.enable().unbind("open",P).trigger("resMixinMake")}),E="tmp_"+parseInt(1e5*Math.random()),M=this.data&&this.data.target?this.data.target:g?p.file(y[0]).hash:p.cwd().hash,A=new Date,I={hash:E,phash:M,name:p.uniqueName(this.prefix,M),mime:this.mime,read:!0,write:!0,date:"Today "+A.getHours()+":"+A.getMinutes(),move:x},T=(p.getUI(v).trigger("create."+p.namespace,I),this.data||{}),O=p[h](E),N=p.getUI("overlay"),q=function(){O&&O.length&&(F.off(),O.hide(),p.unselectfiles({files:[E]}).unbind("resize",D),requestAnimationFrame(function(){g?O.closest(".elfinder-navbar-wrapper").remove():O.remove()}))},z=function(e){N.is(":hidden")||a.css("z-index",""),H||(q(),j.reject(),e&&(e.stopPropagation(),e.preventDefault()))},F=$(b?"<textarea/>":'<input type="text"/>').on("keyup text",function(){b?(this.style.height="1px",this.style.height=this.scrollHeight+"px"):e&&(this.style.width=e+"px",this.scrollWidth>e&&(this.style.width=this.scrollWidth+10+"px"))}).on("keydown",function(e){e.stopImmediatePropagation(),e.keyCode==$.ui.keyCode.ESCAPE?j.reject():e.keyCode==$.ui.keyCode.ENTER&&(e.preventDefault(),F.trigger("blur"))}).on("mousedown click dblclick",function(e){e.stopPropagation(),"dblclick"===e.type&&e.preventDefault()}).on("blur",function(){var e,i=$.trim(F.val()),t=F.parent(),r=!0;if(N.is(":hidden")||a.css("z-index",""),""===i)return z();if(!H&&t.length){if(p.options.validName&&p.options.validName.test)try{r=p.options.validName.test(i)}catch(e){r=!1}if(!i||"."===i||".."===i||!r)return H=!0,p.error("directory"===I.mime?"errInvDirname":"errInvName",{modal:!0,close:function(){setTimeout(U,120)}}),!1;if(p.fileByName(i,M))return H=!0,p.error(["errExists",i],{modal:!0,close:function(){setTimeout(U,120)}}),!1;e=y&&x?p.exec("cut",y):null,$.when(e).done(function(){var e={},a={};C(),F.hide().before($("<span>").text(i)),p.lockfiles({files:[E]}),p.request({data:Object.assign({cmd:f,name:i,target:M},T||{}),notify:{type:f,cnt:1},preventFail:!0,syncOnFail:!0,navigate:{toast:e}}).fail(function(e){p.unlockfiles({files:[E]}),H=!0,F.show().prev().remove(),p.error(e,{modal:!0,close:function(){Array.isArray(e)&&-1!==$.inArray("errUploadMime",e)?j.notify("errUploadMime").reject():setTimeout(U,120)}})}).done(function(i){if(i&&i.added&&i.added[0]){var t,r=i.added[0],s=r.hash,l=(p[h](s),{directory:{cmd:"open",msg:"cmdopendir"},text:{cmd:"edit",msg:"cmdedit"},default:{cmd:"open",msg:"cmdopen"}});y&&x&&p.one(f+"done",function(){p.exec("paste",s)}),x||(p.mimeIsText(r.mime)&&!p.mimesCanMakeEmpty[r.mime]&&p.mimeTypes[r.mime]&&(p.trigger("canMakeEmptyFile",{mimes:[r.mime],unshift:!0}),(t={})[r.mime]=p.mimeTypes[r.mime],p.storage("mkfileTextMimes",Object.assign(t,p.storage("mkfileTextMimes")||{}))),Object.assign(a,n||l[r.mime]||l[r.mime.split("/")[0]]||l[p.mimesCanMakeEmpty[r.mime]||-1!==$.inArray(r.mime,p.resources.mimes.text)?"text":"none"]||l.default),Object.assign(e,a.cmd?{incwd:{msg:p.i18n(["complete",p.i18n("cmd"+m)]),action:a},inbuffer:{msg:p.i18n(["complete",p.i18n("cmd"+m)]),action:a}}:{inbuffer:{msg:p.i18n(["complete",p.i18n("cmd"+m)])}}))}j.resolve(i)})}).fail(function(){j.reject()})}}).on("dragenter dragleave dragover drop",function(e){e.stopPropagation()}),U=function(){var e=p.splitFileExtention(F.val())[0];H||!p.UA.Mobile||p.UA.iOS||(N.on("click close",z).elfinderoverlay("show"),a.css("z-index",N.css("z-index")+1)),H=!1,!p.enabled()&&p.enable(),F.trigger("focus").trigger("select"),F[0].setSelectionRange&&F[0].setSelectionRange(0,e.length)},D=function(){O.trigger("scrolltoview",{blink:!1})},P=function(){j&&"pending"===j.state()&&j.reject()},H=!1;return p.isCommandEnabled(f,M)&&O.length?($.isPlainObject(d.nextAction)&&(n=Object.assign({},d.nextAction)),g?(t=p[h](M),s=p.res("class","navcollapse"),l=p.res("class","navexpand"),o=p.res("class","navarrow"),c=p.res("class","navsubtree"),O.closest("."+c).show(),t.hasClass(s)||(r=t.attr("class"),t.addClass(s+" "+l+" elfinder-subtree-loaded")),t.is("."+s+":not(."+l+")")&&t.children("."+o).trigger("click").data("dfrd").done(function(){F.val()===I.name&&F.val(p.uniqueName(d.prefix,M)).trigger("select").trigger("focus")}),i=O.contents().filter(function(){return 3==this.nodeType&&$(this).parent().attr("id")===p.navHash2Id(I.hash)}),a=i.parent(),i.replaceWith(F.val(I.name))):(w&&u.removeClass("elfinder-cwd-wrapper-empty"),i=O.find(".elfinder-cwd-filename"),a=i.parent(),b?i.css("max-height","none"):(e=a.width(),a.width(e-15).parent("td").css("overflow","visible")),i.empty().append(F.val(I.name))),a.addClass("ui-front").css("position","relative").on("unselect."+p.namespace,k),p.bind("resize",D).one("open",P),F.trigger("keyup"),U(),j):j.reject()}},blink:function(e,i){"use strict";var a,n={slowonce:function(){e.hide().delay(250).fadeIn(750).delay(500).fadeOut(3500)},lookme:function(){e.show().fadeOut(500).fadeIn(750)}};a=n[i=i||"slowonce"]||n.lookme,e.stop(!0,!0),a()}},e});
//# sourceMappingURL=sourcemaps/resources.js.map