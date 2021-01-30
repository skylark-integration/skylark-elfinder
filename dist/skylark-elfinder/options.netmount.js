/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["./elFinder","./options"],function(t){return t.prototype._options.commandsOptions.netmount={ftp:{name:"FTP",inputs:{host:$('<input type="text"/>'),port:$('<input type="number" placeholder="21" class="elfinder-input-optional"/>'),path:$('<input type="text" value="/"/>'),user:$('<input type="text"/>'),pass:$('<input type="password" autocomplete="new-password"/>'),FTPS:$('<input type="checkbox" value="1" title="File Transfer Protocol over SSL/TLS"/>'),encoding:$('<input type="text" placeholder="Optional" class="elfinder-input-optional"/>'),locale:$('<input type="text" placeholder="Optional" class="elfinder-input-optional"/>')}},dropbox2:t.prototype.makeNetmountOptionOauth("dropbox2","Dropbox","Dropbox",{noOffline:!0,root:"/",pathI18n:"path",integrate:{title:"Dropbox.com",link:"https://www.dropbox.com"}}),googledrive:t.prototype.makeNetmountOptionOauth("googledrive","Google Drive","Google",{integrate:{title:"Google Drive",link:"https://www.google.com/drive/"}}),onedrive:t.prototype.makeNetmountOptionOauth("onedrive","One Drive","OneDrive",{integrate:{title:"Microsoft OneDrive",link:"https://onedrive.live.com"}}),box:t.prototype.makeNetmountOptionOauth("box","Box","Box",{noOffline:!0,integrate:{title:"Box.com",link:"https://www.box.com"}})},t});
//# sourceMappingURL=sourcemaps/options.netmount.js.map
