/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(e){return e.prototype.commands.chmod=function(){"use strict";this.updateOnSelect=!1;var e=this.fm,t={0:"owner",1:"group",2:"other"},r={read:e.i18n("read"),write:e.i18n("write"),execute:e.i18n("execute"),perm:e.i18n("perm"),kind:e.i18n("kind"),files:e.i18n("files")},i=function(e){return!isNaN(parseInt(e,8)&&parseInt(e,8)<=511)||e.match(/^([r-][w-][x-]){3}$/i)};this.tpl={main:'<div class="ui-helper-clearfix elfinder-info-title"><span class="elfinder-cwd-icon {class} ui-corner-all"/>{title}</div>{dataTable}',itemTitle:'<strong>{name}</strong><span id="elfinder-info-kind">{kind}</span>',groupTitle:"<strong>{items}: {num}</strong>",dataTable:'<table id="{id}-table-perm"><tr><td>{0}</td><td>{1}</td><td>{2}</td></tr></table><div class="">'+r.perm+': <input class="elfinder-tabstop elfinder-focus" id="{id}-perm" type="text" size="4" maxlength="3" value="{value}"></div>',fieldset:'<fieldset id="{id}-fieldset-{level}"><legend>{f_title}{name}</legend><input type="checkbox" value="4" class="elfinder-tabstop" id="{id}-read-{level}-perm"{checked-r}> <label for="{id}-read-{level}-perm">'+r.read+'</label><br><input type="checkbox" value="6" class="elfinder-tabstop" id="{id}-write-{level}-perm"{checked-w}> <label for="{id}-write-{level}-perm">'+r.write+'</label><br><input type="checkbox" value="5" class="elfinder-tabstop" id="{id}-execute-{level}-perm"{checked-x}> <label for="{id}-execute-{level}-perm">'+r.execute+"</label><br>"},this.shortcuts=[{}],this.getstate=function(e){var t=this.fm;return 0==(e=e||t.selected()).length&&(e=[t.cwd().hash]),this.checkstate(this.files(e))?0:-1},this.checkstate=function(e){var t=e.length;if(!t)return!1;var r=$.grep(e,function(e){return!(!(e.isowner&&e.perm&&i(e.perm))||1!=t&&"directory"==e.mime)}).length;return t==r},this.exec=function(e){var n=this.hashes(e),c=this.files(n);c.length||(n=[this.fm.cwd().hash],c=this.files(n));var l,a,s=this.fm,d=$.Deferred().always(function(){s.enable()}),o=this.tpl,p=c.length,h=c[0],u=s.namespace+"-perm-"+h.hash,f=o.main,m=' checked="checked"',g=function(){var e,t=$.trim($("#"+u+"-perm").val());if(!i(t))return!1;w.elfinderdialog("close"),e={cmd:"chmod",targets:n,mode:t},s.request({data:e,notify:{type:"chmod",cnt:p}}).fail(function(e){d.reject(e)}).done(function(t){t.changed&&t.changed.length&&(t.undo={cmd:"chmod",callback:function(){var e=[];return $.each(x,function(t,r){e.push(s.request({data:{cmd:"chmod",targets:r,mode:t},notify:{type:"undo",cnt:r.length}}))}),$.when.apply(null,e)}},t.redo={cmd:"chmod",callback:function(){return s.request({data:e,notify:{type:"redo",cnt:n.length}})}}),d.resolve(t)})},v=function(){for(var e,r="",i=0;i<3;i++)e=0,$("#"+u+"-read-"+t[i]+"-perm").is(":checked")&&(e|=4),$("#"+u+"-write-"+t[i]+"-perm").is(":checked")&&(e|=2),$("#"+u+"-execute-"+t[i]+"-perm").is(":checked")&&(e|=1),r+=e.toString(8);$("#"+u+"-perm").val(r)},k=function(e){if(isNaN(parseInt(e,8))){for(var t=e.split(""),r=[],i=0,n=t.length;i<n;i++)0===i||3===i||6===i?t[i].match(/[r]/i)?r.push(1):t[i].match(/[-]/)&&r.push(0):1===i||4===i||7===i?t[i].match(/[w]/i)?r.push(1):t[i].match(/[-]/)&&r.push(0):t[i].match(/[x]/i)?r.push(1):t[i].match(/[-]/)&&r.push(0);r.splice(3,0,","),r.splice(7,0,",");for(var c=r.join("").split(","),l=[],a=0,s=c.length;a<s;a++){var d=parseInt(c[a],2).toString(8);l.push(d)}e=l.join("")}else e=parseInt(e,8).toString(8);return e},b={title:this.title,width:"auto",buttons:function(){var e={};return e[s.i18n("btnApply")]=g,e[s.i18n("btnCancel")]=function(){w.elfinderdialog("close")},e}(),close:function(){$(this).elfinderdialog("destroy")}},w=s.getUI().find("#"+u),x={},y="";return w.length?(w.elfinderdialog("toTop"),$.Deferred().resolve()):(f=f.replace("{class}",p>1?"elfinder-cwd-icon-group":s.mime2class(h.mime)),p>1?l=o.groupTitle.replace("{items}",s.i18n("items")).replace("{num}",p):(l=o.itemTitle.replace("{name}",h.name).replace("{kind}",s.mime2kind(h)),y=s.tmb(h)),a=function(e,i){for(var n,c,l,a="",d=o.dataTable,p=0;p<3;p++)a+=(n=parseInt(e.slice(p,p+1),8)).toString(8),c=o.fieldset.replace("{f_title}",s.i18n(t[p])).replace("{name}",(l=i[t[p]],l?":"+l:"")).replace(/\{level\}/g,t[p]),d=d.replace("{"+p+"}",c).replace("{checked-r}",4==(4&n)?m:"").replace("{checked-w}",2==(2&n)?m:"").replace("{checked-x}",1==(1&n)?m:"");return d=d.replace("{value}",a).replace("{valueCaption}",r.perm)}(function(e){for(var t,r,i,n="777",c="",l=e.length,a=0;a<l;a++){t=k(e[a].perm),x[t]||(x[t]=[]),x[t].push(e[a].hash),c="";for(var s=0;s<3;s++)r=parseInt(t.slice(s,s+1),8),i=parseInt(n.slice(s,s+1),8),4!=(4&r)&&4==(4&i)&&(i-=4),2!=(2&r)&&2==(2&i)&&(i-=2),1!=(1&r)&&1==(1&i)&&(i-=1),c+=i.toString(8);n=c}return n}(c),1==c.length?c[0]:{}),f=f.replace("{title}",l).replace("{dataTable}",a).replace(/{id}/g,u),(w=this.fmDialog(f,b)).attr("id",u),y&&$("<img/>").on("load",function(){w.find(".elfinder-cwd-icon").addClass(y.className).css("background-image","url('"+y.url+"')")}).attr("src",y.url),$("#"+u+"-table-perm :checkbox").on("click",function(){v()}),$("#"+u+"-perm").on("keydown",function(e){if(e.keyCode==$.ui.keyCode.ENTER)return e.stopPropagation(),void g()}).on("focus",function(e){$(this).trigger("select")}).on("keyup",function(e){3==$(this).val().length&&($(this).trigger("select"),function(e){for(var r,i=0;i<3;i++)r=parseInt(e.slice(i,i+1),8),$("#"+u+"-read-"+t[i]+"-perm").prop("checked",!1),$("#"+u+"-write-"+t[i]+"-perm").prop("checked",!1),$("#"+u+"-execute-"+t[i]+"-perm").prop("checked",!1),4==(4&r)&&$("#"+u+"-read-"+t[i]+"-perm").prop("checked",!0),2==(2&r)&&$("#"+u+"-write-"+t[i]+"-perm").prop("checked",!0),1==(1&r)&&$("#"+u+"-execute-"+t[i]+"-perm").prop("checked",!0);v()}($(this).val()))}),d)}},e});
//# sourceMappingURL=../sourcemaps/commands/chmod.js.map