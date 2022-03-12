/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(e){return e.prototype.commands.rename=function(){"use strict";this.alwaysEnabled=!0,this.syncTitleOnChange=!0;var e=this,t=e.fm,n=function(e,n,i,a){var r,s=n?[i.hash].concat(n):[i.hash],l=s.length,o={};if(t.lockfiles({files:s}),t.isRoot(i)&&!i.netkey){if((r=t.storage("rootNames"))||(r={}),""===a){if(!r[i.hash])return e&&e.reject(),void t.unlockfiles({files:s}).trigger("selectfiles",{files:s});i.name=i._name,i.i18=i._i18,delete r[i.hash],delete i._name,delete i._i18}else void 0===i._name&&(i._name=i.name,i._i18=i.i18),i.name=r[i.hash]=a,delete i.i18;return t.storage("rootNames",r),o={changed:[i]},t.updateCache(o),t.change(o),e&&e.resolve(o),void t.unlockfiles({files:s}).trigger("selectfiles",{files:s})}o={cmd:"rename",name:a,target:i.hash},l>1&&(o.targets=n,a.match(/\*/)&&(o.q=a)),t.request({data:o,notify:{type:"rename",cnt:l},navigate:{}}).fail(function(n){var i=t.parseError(n);e&&e.reject(),i&&Array.isArray(i)&&"errRename"===i[0]||t.sync()}).done(function(n){var r;n.added&&n.added.length&&1===l&&(n.undo={cmd:"rename",callback:function(){return t.request({data:{cmd:"rename",target:n.added[0].hash,name:i.name},notify:{type:"undo",cnt:1}})}},n.redo={cmd:"rename",callback:function(){return t.request({data:{cmd:"rename",target:i.hash,name:a},notify:{type:"rename",cnt:1}})}}),e&&e.resolve(n),(r=t.cwd().hash)&&r!==i.hash||t.exec("open",$.map(n.added,function(e){return"directory"===e.mime?e.hash:null})[0])}).always(function(){t.unlockfiles({files:s}).trigger("selectfiles",{files:s})})},i=function(e,n){var i,a,r,s=n||t.selected(),l=t.splitFileExtention(e),o=t.file(s[0]),c=t.file(s[1]);return i=l[1]?"."+l[1]:"",l[1]&&"*"===l[0]?(a='"'+t.splitFileExtention(o.name)[0]+i+'", ',a+='"'+t.splitFileExtention(c.name)[0]+i+'"'):l[0].length>1&&("*"===l[0].substr(-1)?(a='"'+(r=l[0].substr(0,l[0].length-1))+o.name+'", ',a+='"'+r+c.name+'"'):"*"===l[0].substr(0,1)&&(r=l[0].substr(1),a='"'+t.splitFileExtention(o.name)[0]+r+i+'", ',a+='"'+t.splitFileExtention(c.name)[0]+r+i+'"')),a||(a='"'+l[0]+"1"+i+'", "'+l[0]+"2"+i+'"'),s.length>2&&(a+=" ..."),a},a=function(){var a,r=t.selected(),s='<input name="type" type="radio" class="elfinder-tabstop">',l=function(e,n){return $('<label class="elfinder-rename-batch-checks">'+t.i18n(n)+"</label>").prepend(e)},o=$('<input type="text" class="ui-corner-all elfinder-tabstop">'),c=$(s),d=$(s),h=$(s),f=$(s),u=$("<div/>").append(l(c,"plusNumber"),l(d,"asPrefix"),l(h,"asSuffix"),l(f,"changeExtention")),m=$('<div class="elfinder-rename-batch-preview"/>'),p=$('<div class="elfinder-rename-batch"/>').append($('<div class="elfinder-rename-batch-name"/>').append(o),$('<div class="elfinder-rename-batch-type"/>').append(u),m),g={title:t.i18n("batchRename"),modal:!0,destroyOnClose:!0,width:Math.min(380,t.getUI().width()-20),buttons:{},open:function(){o.on("input",b).trigger("focus")}},v=function(){var e=o.val(),n=t.splitFileExtention(t.file(r[0]).name)[1];return(""!==e||c.is(":checked"))&&(d.is(":checked")?e+="*":h.is(":checked")?e="*"+e+"."+n:f.is(":checked")?e="*."+e:n&&(e+="."+n)),e},b=function(){var e=v();""!==e?m.html(t.i18n(["renameMultiple",r.length,i(e)])):m.empty()},y=u.find("input:radio").on("change",b);g.buttons[t.i18n("btnApply")]=function(){var e,i,s=v();""!==s&&(a.elfinderdialog("close"),i=r,e=t.file(i.shift()),n(void 0,i,e,s))},g.buttons[t.i18n("btnCancel")]=function(){a.elfinderdialog("close")},$.fn.checkboxradio?y.checkboxradio({create:function(e,t){this===c.get(0)&&c.prop("checked",!0).change()}}):u.buttonset({create:function(e,t){c.prop("checked",!0).change()}}),a=e.fmDialog(p,g)};this.noChangeDirOnRemovedCwd=!0,this.shortcuts=[{pattern:"f2"+("mac"==t.OS?" enter":"")},{pattern:"shift+f2",description:"batchRename",callback:function(){t.selected().length>1&&a()}}],this.getstate=function(n){var i,r,s,l,o,c,d=this.files(n),h=d.length;return h?(h>1&&d[0].phash&&(i=d[0].phash,r=t.splitFileExtention(d[0].name)[1].toLowerCase(),s=d[0].mime),1===h&&(c=t.isRoot(d[0])),o=1===h&&(t.cookieEnabled&&c||!d[0].locked)||t.api>2.103&&h===$.grep(d,function(e){return!(l||e.locked||e.phash!==i||t.isRoot(e)||s!==e.mime&&r!==t.splitFileExtention(e.name)[1].toLowerCase())||(l&&(l=!0),!1)}).length?0:-1,!c&&0===o&&t.option("disabledFlip",d[0].hash).rename&&(o=-1),-1!==o&&h>1?e.extra={icon:"preference",node:$("<span/>").attr({title:t.i18n("batchRename")}).on("click touchstart",function(e){"touchstart"===e.type&&e.originalEvent.touches.length>1||(e.stopPropagation(),e.preventDefault(),t.getUI().trigger("click"),a())})}:delete e.extra,o):-1},this.exec=function(e,a){t.getUI("cwd");var r,s=e||!!t.selected().length&&t.selected()||[t.cwd().hash],l=s.length,o=t.file(s.shift()),c=a||{},d=t.cwd().hash==o.hash,h="files"!==("navbar"===c._currentType||"files"===c._currentType?c._currentType:d?"navbar":"files"),f=t[h?"navHash2Elm":"cwdHash2Elm"](o.hash),u=!h&&"list"!=t.storage("view"),m=function(){requestAnimationFrame(function(){b&&b.trigger("blur")})},p=function(){w.is(":hidden")||w.elfinderoverlay("hide").off("click close",E),x.removeClass("ui-front").css("position","").off("unselect."+t.namespace,m),u?k&&k.css("max-height",""):h||x.css("width","").parent("td").css("overflow","")},g=$.Deferred().fail(function(e){var n=b.parent(),i=t.escape(o.i18||o.name);b.off(),u&&(i=i.replace(/([_.])/g,"&#8203;$1")),requestAnimationFrame(function(){h?b.replaceWith(i):n.length?(b.remove(),n.html(i)):f.find(".elfinder-cwd-filename").html(i)}),e&&t.error(e)}).always(function(){p(),t.unbind("resize",C),t.enable()}),v=function(e){var a=$.trim(b.val()),r=(t.splitFileExtention(a),!0),c=function(){b.off(),p(),h?b.replaceWith(t.escape(a)):k.html(t.escape(a)),n(g,s,o,a)};if(w.is(":hidden")||x.css("z-index",""),""===a){if(!t.isRoot(o))return E();h?b.replaceWith(t.escape(o.name)):k.html(t.escape(o.name))}if(!F&&x.length){if(b.off("blur"),1===l&&a===o.name)return g.reject();if(t.options.validName&&t.options.validName.test)try{r=t.options.validName.test(a)}catch(e){r=!1}if("."===a||".."===a||!r)return F=!0,t.error("directory"===o.mime?"errInvDirname":"errInvName",{modal:!0,close:function(){setTimeout(y,120)}}),!1;if(1===l&&t.fileByName(a,o.phash))return F=!0,t.error(["errExists",a],{modal:!0,close:function(){setTimeout(y,120)}}),!1;1===l?c():(t.confirm({title:"cmdrename",text:["renameMultiple",l,i(a,[o.hash].concat(s))],accept:{label:"btnYes",callback:c},cancel:{label:"btnCancel",callback:function(){setTimeout(function(){F=!0,y()},120)}}}),setTimeout(function(){t.trigger("unselectfiles",{files:t.selected()}).trigger("selectfiles",{files:[o.hash].concat(s)})},120))}},b=$(u?"<textarea/>":'<input type="text"/>').on("keyup text",function(){u?(this.style.height="1px",this.style.height=this.scrollHeight+"px"):r&&(this.style.width=r+"px",this.scrollWidth>r&&(this.style.width=this.scrollWidth+10+"px"))}).on("keydown",function(e){e.stopImmediatePropagation(),e.keyCode==$.ui.keyCode.ESCAPE?g.reject():e.keyCode==$.ui.keyCode.ENTER&&(e.preventDefault(),b.trigger("blur"))}).on("mousedown click dblclick",function(e){e.stopPropagation(),"dblclick"===e.type&&e.preventDefault()}).on("blur",v).on("dragenter dragleave dragover drop",function(e){e.stopPropagation()}),y=function(){var e=t.splitFileExtention(b.val())[0];F||!t.UA.Mobile||t.UA.iOS||(w.on("click close",E).elfinderoverlay("show"),x.css("z-index",w.css("z-index")+1)),!t.enabled()&&t.enable(),F&&(F=!1,b.on("blur",v)),b.trigger("focus").trigger("select"),b[0].setSelectionRange&&b[0].setSelectionRange(0,e.length)},k=h?f.contents().filter(function(){return 3==this.nodeType&&$(this).parent().attr("id")===t.navHash2Id(o.hash)}):f.find(".elfinder-cwd-filename"),x=k.parent(),w=t.getUI("overlay"),E=function(e){w.is(":hidden")||x.css("z-index",""),F||(g.reject(),e&&(e.stopPropagation(),e.preventDefault()))},C=function(){f.trigger("scrolltoview",{blink:!1})},F=!1;return x.addClass("ui-front").css("position","relative").on("unselect."+t.namespace,m),t.bind("resize",C),h?k.replaceWith(b.val(o.name)):(u?k.css("max-height","none"):h||(r=x.width(),x.width(r-15).parent("td").css("overflow","visible")),k.empty().append(b.val(o.name))),l>1&&t.api<=2.103?g.reject():o&&k.length?o.locked&&!t.isRoot(o)?g.reject(["errLocked",o.name]):(t.one("select",function(){b.parent().length&&o&&-1===$.inArray(o.hash,t.selected())&&b.trigger("blur")}),b.trigger("keyup"),y(),g):g.reject("errCmdParams",this.title)},t.bind("select contextmenucreate closecontextmenu",function(n){var i,a=(n.data?n.data.selected||n.data.targets:null)||t.selected();a&&1===a.length&&(i=t.file(a[0]))&&t.isRoot(i)?e.title=t.i18n("kindAlias")+" ("+t.i18n("preference")+")":e.title=t.i18n("cmdrename"),"closecontextmenu"!==n.type?e.update(void 0,e.title):requestAnimationFrame(function(){e.update(void 0,e.title)})}).remove(function(e){var n;e.data&&e.data.removed&&(n=t.storage("rootNames"))&&($.each(e.data.removed,function(e,t){n[t]&&delete n[t]}),t.storage("rootNames",n))})},e});
//# sourceMappingURL=../sourcemaps/commands/rename.js.map