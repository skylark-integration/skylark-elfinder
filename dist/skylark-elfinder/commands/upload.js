/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(e){return e.prototype.commands.upload=function(){"use strict";var e=this.fm.res("class","hover");this.disableOnSearch=!0,this.updateOnSelect=!1,this.shortcuts=[{pattern:"ctrl+u"}],this.getstate=function(e){var t,i=this.fm,n=e||[i.cwd().hash];return this._disabled||1!=n.length||(t=i.file(n[0])),t&&"directory"==t.mime&&t.write?0:-1},this.exec=function(t){var i,n,o,a,r,s,l,d,c=this.fm,u=c.cwd().hash,f=(l=t&&t instanceof Array?t:null,(!t||t instanceof Array)&&(l||1!==(s=c.selected()).length||"directory"!==c.file(s[0]).mime?l&&1===l.length&&"directory"===c.file(l[0]).mime||(l=[u]):l=s),l),p=f?f[0]:t&&t.target?t.target:null,g=p?c.file(p):c.cwd(),h=function(e){c.upload(e).fail(function(e){y.reject(e)}).done(function(e){var t;c.getUI("cwd");if(y.resolve(e),e&&e.added&&e.added[0]&&!c.ui.notify.children(".elfinder-notify-upload").length){var i=c.findCwdNodes(e.added);i.length?i.trigger("scrolltoview"):(g.hash!==u?t=$("<div/>").append($('<button type="button" class="ui-button ui-widget ui-state-default ui-corner-all elfinder-tabstop"><span class="ui-button-text">'+c.i18n("cmdopendir")+"</span></button>").on("mouseenter mouseleave",function(e){$(this).toggleClass("ui-state-hover","mouseenter"==e.type)}).on("click",function(){c.exec("open",p).done(function(){c.one("opendone",function(){c.trigger("selectfiles",{files:$.map(e.added,function(e){return e.hash})})})})})):c.trigger("selectfiles",{files:$.map(e.added,function(e){return e.hash})}),c.toast({msg:c.i18n(["complete",c.i18n("cmdupload")]),extNode:t}))}}).progress(function(){y.notifyWith(this,Array.from(arguments))})},m=function(e){i.elfinderdialog("close"),f&&(e.target=f[0]),h(e)},v=function(){var e=g.hash,t=$.map(c.files(e),function(e){return"directory"===e.mime&&e.write?e:null});return t.length?$('<div class="elfinder-upload-dirselect elfinder-tabstop" title="'+c.i18n("folders")+'"/>').on("click",function(e){e.stopPropagation(),e.preventDefault(),t=c.sortFiles(t);var n=$(this),o=(c.cwd(),i.closest("div.ui-dialog")),a=function(e,t){return{label:c.escape(e.i18||e.name),icon:t,remain:!1,callback:function(){var t=o.children(".ui-dialog-titlebar:first").find("span.elfinder-upload-target");f=[e.hash],t.html(" - "+c.escape(e.i18||e.name)),n.trigger("focus")},options:{className:f&&f.length&&e.hash===f[0]?"ui-state-active":"",iconClass:e.csscls||"",iconImg:e.icon||""}}},r=[a(g,"opendir"),"|"];$.each(t,function(e,t){r.push(a(t,"dir"))}),n.trigger("blur"),c.trigger("contextmenu",{raw:r,x:e.pageX||$(this).offset().left,y:e.pageY||$(this).offset().top,prevNode:o,fitHeight:!0})}).append('<span class="elfinder-button-icon elfinder-button-icon-dir" />'):$()},b=function(t,i){var n=$('<input type="file" '+t+"/>").on("click",function(){c.UA.IE&&setTimeout(function(){o.css("display","none").css("position","relative"),requestAnimationFrame(function(){o.css("display","").css("position","")})},100)}).on("change",function(){m({input:n.get(0),type:"files"})}).on("dragover",function(e){e.originalEvent.dataTransfer.dropEffect="copy"}),o=$("<form/>").append(n).on("click",function(e){e.stopPropagation()});return $('<div class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only elfinder-tabstop elfinder-focus"><span class="ui-button-text">'+c.i18n(i)+"</span></div>").append(o).on("click",function(e){e.stopPropagation(),e.preventDefault(),n.trigger("click")}).on("mouseenter mouseleave",function(t){$(this).toggleClass(e,"mouseenter"===t.type)})},y=$.Deferred();return n=function(e){e.stopPropagation(),e.preventDefault();var t,i=!1,n="",o=null,a="",r=null,s=e._target||null,l=e.dataTransfer||null,d=l.items&&l.items.length&&l.items[0].kind?l.items[0].kind:"";if(l){try{if((o=l.getData("elfinderfrom"))&&(a=window.location.href+c.cwd().hash,!s&&o===a||s===a))return void y.reject()}catch(e){}if("file"===d&&(l.items[0].getAsEntry||l.items[0].webkitGetAsEntry))i=l,n="data";else if("string"!==d&&l.files&&l.files.length&&-1===$.inArray("Text",l.types))i=l.files,n="files";else{try{(r=l.getData("text/html"))&&r.match(/<(?:img|a)/i)&&(i=[r],n="html")}catch(e){}i||((r=l.getData("text"))?(i=[r],n="text"):l&&l.files&&(d="file"))}}i?h({files:i,type:n,target:s,dropEvt:e}):(t=["errUploadNoFiles"],"file"===d&&t.push("errFolderUpload"),c.error(t),y.reject())},!f&&t?(t.input||t.files?(t.type="files",h(t)):t.dropEvt&&n(t.dropEvt),y):(o=function(e){var t,i=e.originalEvent||e,n=[],o=[];if(i.clipboardData){if(i.clipboardData.items&&i.clipboardData.items.length){o=i.clipboardData.items;for(var a=0;a<o.length;a++)"file"==i.clipboardData.items[a].kind&&(t=i.clipboardData.items[a].getAsFile(),n.push(t))}else i.clipboardData.files&&i.clipboardData.files.length&&(n=i.clipboardData.files);if(n.length)return void m({files:n,type:"files",clipdata:!0})}var r=i.target||i.srcElement;requestAnimationFrame(function(){var e,t="text";r.innerHTML&&($(r).find("img").each(function(e,t){t.src.match(/^webkit-fake-url:\/\//)&&$(t).remove()}),$(r).find("a,img").length&&(t="html"),e=r.innerHTML,r.innerHTML="",m({files:[e],type:t}))})},i=$('<div class="elfinder-upload-dialog-wrapper"/>').append(b("multiple","selectForUpload")),c.UA.Mobile||void 0===(d=document.createElement("input")).webkitdirectory&&void 0===d.directory||i.append(b("multiple webkitdirectory directory","selectFolder")),g.dirs&&(g.hash===u||c.navHash2Elm(g.hash).hasClass("elfinder-subtree-loaded")?v().appendTo(i):(a=$('<div class="elfinder-upload-dirselect" title="'+c.i18n("nowLoading")+'"/>').append('<span class="elfinder-button-icon elfinder-button-icon-spinner" />').appendTo(i),c.request({cmd:"tree",target:g.hash}).done(function(){c.one("treedone",function(){a.replaceWith(v()),r.elfinderdialog("tabstopsInit")})}).fail(function(){a.remove()}))),c.dragUpload?$('<div class="ui-corner-all elfinder-upload-dropbox elfinder-tabstop" contenteditable="true" data-ph="'+c.i18n("dropPasteFiles")+'"></div>').on("paste",function(e){o(e)}).on("mousedown click",function(){$(this).trigger("focus")}).on("focus",function(){this.innerHTML=""}).on("mouseover",function(){$(this).addClass(e)}).on("mouseout",function(){$(this).removeClass(e)}).on("dragenter",function(t){t.stopPropagation(),t.preventDefault(),$(this).addClass(e)}).on("dragleave",function(t){t.stopPropagation(),t.preventDefault(),$(this).removeClass(e)}).on("dragover",function(t){t.stopPropagation(),t.preventDefault(),t.originalEvent.dataTransfer.dropEffect="copy",$(this).addClass(e)}).on("drop",function(e){i.elfinderdialog("close"),f&&(e.originalEvent._target=f[0]),n(e.originalEvent)}).prependTo(i).after('<div class="elfinder-upload-dialog-or">'+c.i18n("or")+"</div>")[0]:$('<div class="ui-corner-all elfinder-upload-dropbox" contenteditable="true">'+c.i18n("dropFilesBrowser")+"</div>").on("paste drop",function(e){o(e)}).on("mousedown click",function(){$(this).trigger("focus")}).on("focus",function(){this.innerHTML=""}).on("dragenter mouseover",function(){$(this).addClass(e)}).on("dragleave mouseout",function(){$(this).removeClass(e)}).prependTo(i).after('<div class="elfinder-upload-dialog-or">'+c.i18n("or")+"</div>")[0],r=this.fmDialog(i,{title:this.title+'<span class="elfinder-upload-target">'+(g?" - "+c.escape(g.i18||g.name):"")+"</span>",modal:!0,resizable:!1,destroyOnClose:!0,propagationEvents:["mousemove","mouseup","click"],close:function(){var e=c.getUI("contextmenu");e.is(":visible")&&e.click()}}),y)}},e});
//# sourceMappingURL=../sourcemaps/commands/upload.js.map
