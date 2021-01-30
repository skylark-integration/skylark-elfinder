/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder","../commands/quicklook"],function(n){"use strict";try{n.prototype.commands.quicklook.plugins||(n.prototype.commands.quicklook.plugins=[]),n.prototype.commands.quicklook.plugins.push(function(n){var o=n.fm,e=n.preview;e.on("update",function(i){n.window;var r,a,l=i.file;0===l.mime.indexOf("application/vnd.google-apps.")&&("1"==l.url&&(e.hide(),$('<div class="elfinder-quicklook-info-data"><button class="elfinder-info-button">'+o.i18n("getLink")+"</button></div>").appendTo(n.info.find(".elfinder-quicklook-info")).on("click",function(){$(this).html('<span class="elfinder-spinner">'),o.request({data:{cmd:"url",target:l.hash},preventDefault:!0}).always(function(){e.show(),$(this).html("")}).done(function(i){var r=o.file(l.hash);n.value.url=r.url=i.url||"",n.value.url&&e.trigger($.Event("update",{file:n.value}))})})),""!==l.url&&"1"!=l.url&&(i.stopImmediatePropagation(),a=$('<div class="elfinder-quicklook-info-data"><span class="elfinder-spinner-text">'+o.i18n("nowLoading")+'</span><span class="elfinder-spinner"/></div>').appendTo(n.info.find(".elfinder-quicklook-info")),r=$('<iframe class="elfinder-quicklook-preview-iframe"/>').css("background-color","transparent").on("load",function(){n.hideinfo(),a.remove(),r.css("background-color","#fff")}).on("error",function(){a.remove(),r.remove()}).appendTo(e).attr("src",o.url(l.hash)),e.one("change",function(){a.remove(),r.off("load").remove()})))})})}catch(n){}return n});
//# sourceMappingURL=../sourcemaps/extras/quicklook.googledocs.js.map
