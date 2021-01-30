/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["../elFinder"],function(e){return e.prototype.i18.en={translator:"Troex Nevelin &lt;troex@fury.scancode.ru&gt;, Naoki Sawada &lt;hypweb+elfinder@gmail.com&gt;",language:"English",direction:"ltr",dateFormat:"M d, Y h:i A",fancyDateFormat:"$1 h:i A",nonameDateFormat:"ymd-His",messages:{error:"Error",errUnknown:"Unknown error.",errUnknownCmd:"Unknown command.",errJqui:"Invalid jQuery UI configuration. Selectable, draggable and droppable components must be included.",errNode:"elFinder requires DOM Element to be created.",errURL:"Invalid elFinder configuration! URL option is not set.",errAccess:"Access denied.",errConnect:"Unable to connect to backend.",errAbort:"Connection aborted.",errTimeout:"Connection timeout.",errNotFound:"Backend not found.",errResponse:"Invalid backend response.",errConf:"Invalid backend configuration.",errJSON:"PHP JSON module not installed.",errNoVolumes:"Readable volumes not available.",errCmdParams:'Invalid parameters for command "$1".',errDataNotJSON:"Data is not JSON.",errDataEmpty:"Data is empty.",errCmdReq:"Backend request requires command name.",errOpen:'Unable to open "$1".',errNotFolder:"Object is not a folder.",errNotFile:"Object is not a file.",errRead:'Unable to read "$1".',errWrite:'Unable to write into "$1".',errPerm:"Permission denied.",errLocked:'"$1" is locked and can not be renamed, moved or removed.',errExists:'Item named "$1" already exists.',errInvName:"Invalid file name.",errInvDirname:"Invalid folder name.",errFolderNotFound:"Folder not found.",errFileNotFound:"File not found.",errTrgFolderNotFound:'Target folder "$1" not found.',errPopup:"Browser prevented opening popup window. To open file enable it in browser options.",errMkdir:'Unable to create folder "$1".',errMkfile:'Unable to create file "$1".',errRename:'Unable to rename "$1".',errCopyFrom:'Copying files from volume "$1" not allowed.',errCopyTo:'Copying files to volume "$1" not allowed.',errMkOutLink:"Unable to create a link to outside the volume root.",errUpload:"Upload error.",errUploadFile:'Unable to upload "$1".',errUploadNoFiles:"No files found for upload.",errUploadTotalSize:"Data exceeds the maximum allowed size.",errUploadFileSize:"File exceeds maximum allowed size.",errUploadMime:"File type not allowed.",errUploadTransfer:'"$1" transfer error.',errUploadTemp:"Unable to make temporary file for upload.",errNotReplace:'Object "$1" already exists at this location and can not be replaced by object with another type.',errReplace:'Unable to replace "$1".',errSave:'Unable to save "$1".',errCopy:'Unable to copy "$1".',errMove:'Unable to move "$1".',errCopyInItself:'Unable to copy "$1" into itself.',errRm:'Unable to remove "$1".',errTrash:"Unable into trash.",errRmSrc:"Unable remove source file(s).",errExtract:'Unable to extract files from "$1".',errArchive:"Unable to create archive.",errArcType:"Unsupported archive type.",errNoArchive:"File is not archive or has unsupported archive type.",errCmdNoSupport:"Backend does not support this command.",errReplByChild:'The folder "$1" can\'t be replaced by an item it contains.',errArcSymlinks:"For security reason denied to unpack archives contains symlinks or files with not allowed names.",errArcMaxSize:"Archive files exceeds maximum allowed size.",errResize:'Unable to resize "$1".',errResizeDegree:"Invalid rotate degree.",errResizeRotate:"Unable to rotate image.",errResizeSize:"Invalid image size.",errResizeNoChange:"Image size not changed.",errUsupportType:"Unsupported file type.",errNotUTF8Content:'File "$1" is not in UTF-8 and cannot be edited.',errNetMount:'Unable to mount "$1".',errNetMountNoDriver:"Unsupported protocol.",errNetMountFailed:"Mount failed.",errNetMountHostReq:"Host required.",errSessionExpires:"Your session has expired due to inactivity.",errCreatingTempDir:'Unable to create temporary directory: "$1"',errFtpDownloadFile:'Unable to download file from FTP: "$1"',errFtpUploadFile:'Unable to upload file to FTP: "$1"',errFtpMkdir:'Unable to create remote directory on FTP: "$1"',errArchiveExec:'Error while archiving files: "$1"',errExtractExec:'Error while extracting files: "$1"',errNetUnMount:"Unable to unmount.",errConvUTF8:"Not convertible to UTF-8",errFolderUpload:"Try the modern browser, If you'd like to upload the folder.",errSearchTimeout:'Timed out while searching "$1". Search result is partial.',errReauthRequire:"Re-authorization is required.",errMaxTargets:"Max number of selectable items is $1.",errRestore:"Unable to restore from the trash. Can't identify the restore destination.",errEditorNotFound:"Editor not found to this file type.",errServerError:"Error occurred on the server side.",errEmpty:'Unable to empty folder "$1".',moreErrors:"There are $1 more errors.",cmdarchive:"Create archive",cmdback:"Back",cmdcopy:"Copy",cmdcut:"Cut",cmddownload:"Download",cmdduplicate:"Duplicate",cmdedit:"Edit file",cmdextract:"Extract files from archive",cmdforward:"Forward",cmdgetfile:"Select files",cmdhelp:"About this software",cmdhome:"Root",cmdinfo:"Get info",cmdmkdir:"New folder",cmdmkdirin:"Into New Folder",cmdmkfile:"New file",cmdopen:"Open",cmdpaste:"Paste",cmdquicklook:"Preview",cmdreload:"Reload",cmdrename:"Rename",cmdrm:"Delete",cmdtrash:"Into trash",cmdrestore:"Restore",cmdsearch:"Find files",cmdup:"Go to parent folder",cmdupload:"Upload files",cmdview:"View",cmdresize:"Resize & Rotate",cmdsort:"Sort",cmdnetmount:"Mount network volume",cmdnetunmount:"Unmount",cmdplaces:"To Places",cmdchmod:"Change mode",cmdopendir:"Open a folder",cmdcolwidth:"Reset column width",cmdfullscreen:"Full Screen",cmdmove:"Move",cmdempty:"Empty the folder",cmdundo:"Undo",cmdredo:"Redo",cmdpreference:"Preferences",cmdselectall:"Select all",cmdselectnone:"Select none",cmdselectinvert:"Invert selection",cmdopennew:"Open in new window",cmdhide:"Hide (Preference)",btnClose:"Close",btnSave:"Save",btnRm:"Remove",btnApply:"Apply",btnCancel:"Cancel",btnNo:"No",btnYes:"Yes",btnMount:"Mount",btnApprove:"Goto $1 & approve",btnUnmount:"Unmount",btnConv:"Convert",btnCwd:"Here",btnVolume:"Volume",btnAll:"All",btnMime:"MIME Type",btnFileName:"Filename",btnSaveClose:"Save & Close",btnBackup:"Backup",btnRename:"Rename",btnRenameAll:"Rename(All)",btnPrevious:"Prev ($1/$2)",btnNext:"Next ($1/$2)",btnSaveAs:"Save As",ntfopen:"Open folder",ntffile:"Open file",ntfreload:"Reload folder content",ntfmkdir:"Creating folder",ntfmkfile:"Creating files",ntfrm:"Delete items",ntfcopy:"Copy items",ntfmove:"Move items",ntfprepare:"Checking existing items",ntfrename:"Rename files",ntfupload:"Uploading files",ntfdownload:"Downloading files",ntfsave:"Save files",ntfarchive:"Creating archive",ntfextract:"Extracting files from archive",ntfsearch:"Searching files",ntfresize:"Resizing images",ntfsmth:"Doing something",ntfloadimg:"Loading image",ntfnetmount:"Mounting network volume",ntfnetunmount:"Unmounting network volume",ntfdim:"Acquiring image dimension",ntfreaddir:"Reading folder infomation",ntfurl:"Getting URL of link",ntfchmod:"Changing file mode",ntfpreupload:"Verifying upload file name",ntfzipdl:"Creating a file for download",ntfparents:"Getting path infomation",ntfchunkmerge:"Processing the uploaded file",ntftrash:"Doing throw in the trash",ntfrestore:"Doing restore from the trash",ntfchkdir:"Checking destination folder",ntfundo:"Undoing previous operation",ntfredo:"Redoing previous undone",ntfchkcontent:"Checking contents",volume_Trash:"Trash",dateUnknown:"unknown",Today:"Today",Yesterday:"Yesterday",msJan:"Jan",msFeb:"Feb",msMar:"Mar",msApr:"Apr",msMay:"May",msJun:"Jun",msJul:"Jul",msAug:"Aug",msSep:"Sep",msOct:"Oct",msNov:"Nov",msDec:"Dec",January:"January",February:"February",March:"March",April:"April",May:"May",June:"June",July:"July",August:"August",September:"September",October:"October",November:"November",December:"December",Sunday:"Sunday",Monday:"Monday",Tuesday:"Tuesday",Wednesday:"Wednesday",Thursday:"Thursday",Friday:"Friday",Saturday:"Saturday",Sun:"Sun",Mon:"Mon",Tue:"Tue",Wed:"Wed",Thu:"Thu",Fri:"Fri",Sat:"Sat",sortname:"by name",sortkind:"by kind",sortsize:"by size",sortdate:"by date",sortFoldersFirst:"Folders first",sortperm:"by permission",sortmode:"by mode",sortowner:"by owner",sortgroup:"by group",sortAlsoTreeview:"Also Treeview","untitled file.txt":"NewFile.txt","untitled folder":"NewFolder",Archive:"NewArchive","untitled file":"NewFile.$1",extentionfile:"$1: File",extentiontype:"$1: $2",confirmReq:"Confirmation required",confirmRm:"Are you sure you want to permanently remove items?<br/>This cannot be undone!",confirmRepl:"Replace old file with new one? (If it contains folders, it will be merged. To backup and replace, select Backup.)",confirmRest:"Replace existing item with the item in trash?",confirmConvUTF8:"Not in UTF-8<br/>Convert to UTF-8?<br/>Contents become UTF-8 by saving after conversion.",confirmNonUTF8:"Character encoding of this file couldn't be detected. It need to temporarily convert to UTF-8 for editting.<br/>Please select character encoding of this file.",confirmNotSave:"It has been modified.<br/>Losing work if you do not save changes.",confirmTrash:"Are you sure you want to move items to trash bin?",confirmMove:'Are you sure you want to move items to "$1"?',apllyAll:"Apply to all",name:"Name",size:"Size",perms:"Permissions",modify:"Modified",kind:"Kind",read:"read",write:"write",noaccess:"no access",and:"and",unknown:"unknown",selectall:"Select all items",selectfiles:"Select item(s)",selectffile:"Select first item",selectlfile:"Select last item",viewlist:"List view",viewicons:"Icons view",viewSmall:"Small icons",viewMedium:"Medium icons",viewLarge:"Large icons",viewExtraLarge:"Extra large icons",places:"Places",calc:"Calculate",path:"Path",aliasfor:"Alias for",locked:"Locked",dim:"Dimensions",files:"Files",folders:"Folders",items:"Items",yes:"yes",no:"no",link:"Link",searcresult:"Search results",selected:"selected items",about:"About",shortcuts:"Shortcuts",help:"Help",webfm:"Web file manager",ver:"Version",protocolver:"protocol version",homepage:"Project home",docs:"Documentation",github:"Fork us on GitHub",twitter:"Follow us on Twitter",facebook:"Join us on Facebook",team:"Team",chiefdev:"chief developer",developer:"developer",contributor:"contributor",maintainer:"maintainer",translator:"translator",icons:"Icons",dontforget:"and don't forget to take your towel",shortcutsof:"Shortcuts disabled",dropFiles:"Drop files here",or:"or",selectForUpload:"Select files",moveFiles:"Move items",copyFiles:"Copy items",restoreFiles:"Restore items",rmFromPlaces:"Remove from places",aspectRatio:"Aspect ratio",scale:"Scale",width:"Width",height:"Height",resize:"Resize",crop:"Crop",rotate:"Rotate","rotate-cw":"Rotate 90 degrees CW","rotate-ccw":"Rotate 90 degrees CCW",degree:"°",netMountDialogTitle:"Mount network volume",protocol:"Protocol",host:"Host",port:"Port",user:"User",pass:"Password",confirmUnmount:"Are you sure to unmount $1?",dropFilesBrowser:"Drop or Paste files from browser",dropPasteFiles:"Drop files, Paste URLs or images(clipboard) here",encoding:"Encoding",locale:"Locale",searchTarget:"Target: $1",searchMime:"Search by input MIME Type",owner:"Owner",group:"Group",other:"Other",execute:"Execute",perm:"Permission",mode:"Mode",emptyFolder:"Folder is empty",emptyFolderDrop:"Folder is empty\\A Drop to add items",emptyFolderLTap:"Folder is empty\\A Long tap to add items",quality:"Quality",autoSync:"Auto sync",moveUp:"Move up",getLink:"Get URL link",selectedItems:"Selected items ($1)",folderId:"Folder ID",offlineAccess:"Allow offline access",reAuth:"To re-authenticate",nowLoading:"Now loading...",openMulti:"Open multiple files",openMultiConfirm:"You are trying to open the $1 files. Are you sure you want to open in browser?",emptySearch:"Search results is empty in search target.",editingFile:"It is editing a file.",hasSelected:"You have selected $1 items.",hasClipboard:"You have $1 items in the clipboard.",incSearchOnly:"Incremental search is only from the current view.",reinstate:"Reinstate",complete:"$1 complete",contextmenu:"Context menu",pageTurning:"Page turning",volumeRoots:"Volume roots",reset:"Reset",bgcolor:"Background color",colorPicker:"Color picker","8pxgrid":"8px Grid",enabled:"Enabled",disabled:"Disabled",emptyIncSearch:"Search results is empty in current view.\\A Press [Enter] to expand search target.",emptyLetSearch:"First letter search results is empty in current view.",textLabel:"Text label",minsLeft:"$1 mins left",openAsEncoding:"Reopen with selected encoding",saveAsEncoding:"Save with the selected encoding",selectFolder:"Select folder",firstLetterSearch:"First letter search",presets:"Presets",tooManyToTrash:"It's too many items so it can't into trash.",TextArea:"TextArea",folderToEmpty:'Empty the folder "$1".',filderIsEmpty:'There are no items in a folder "$1".',preference:"Preference",language:"Language",clearBrowserData:"Initialize the settings saved in this browser",toolbarPref:"Toolbar settings",charsLeft:"... $1 chars left.",linesLeft:"... $1 lines left.",sum:"Sum",roughFileSize:"Rough file size",autoFocusDialog:"Focus on the element of dialog with mouseover",select:"Select",selectAction:"Action when select file",useStoredEditor:"Open with the editor used last time",selectinvert:"Invert selection",renameMultiple:"Are you sure you want to rename $1 selected items like $2?<br/>This cannot be undone!",batchRename:"Batch rename",plusNumber:"+ Number",asPrefix:"Add prefix",asSuffix:"Add suffix",changeExtention:"Change extention",columnPref:"Columns settings (List view)",reflectOnImmediate:"All changes will reflect immediately to the archive.",reflectOnUnmount:"Any changes will not reflect until un-mount this volume.",unmountChildren:"The following volume(s) mounted on this volume also unmounted. Are you sure to unmount it?",selectionInfo:"Selection Info",hashChecker:"Algorithms to show the file hash",infoItems:"Info Items (Selection Info Panel)",pressAgainToExit:"Press again to exit.",toolbar:"Toolbar",workspace:"Work Space",dialog:"Dialog",all:"All",iconSize:"Icon Size (Icons view)",editorMaximized:"Open the maximized editor window",editorConvNoApi:"Because conversion by API is not currently available, please convert on the website.",editorConvNeedUpload:"After conversion, you must be upload with the item URL or a downloaded file to save the converted file.",convertOn:"Convert on the site of $1",integrations:"Integrations",integrationWith:"This elFinder has the following external services integrated. Please check the terms of use, privacy policy, etc. before using it.",showHidden:"Show hidden items",hideHidden:"Hide hidden items",toggleHidden:"Show/Hide hidden items",makefileTypes:'File types to enable with "New file"',typeOfTextfile:"Type of the Text file",add:"Add",theme:"Theme",default:"Default",description:"Description",website:"Website",author:"Author",email:"Email",license:"License",exportToSave:"This item can't be saved. To avoid losing the edits you need to export to your PC.",dblclickToSelect:"Double click on the file to select it.",useFullscreen:"Use fullscreen mode",kindUnknown:"Unknown",kindRoot:"Volume Root",kindFolder:"Folder",kindSelects:"Selections",kindAlias:"Alias",kindAliasBroken:"Broken alias",kindApp:"Application",kindPostscript:"Postscript document",kindMsOffice:"Microsoft Office document",kindMsWord:"Microsoft Word document",kindMsExcel:"Microsoft Excel document",kindMsPP:"Microsoft Powerpoint presentation",kindOO:"Open Office document",kindAppFlash:"Flash application",kindPDF:"Portable Document Format (PDF)",kindTorrent:"Bittorrent file",kind7z:"7z archive",kindTAR:"TAR archive",kindGZIP:"GZIP archive",kindBZIP:"BZIP archive",kindXZ:"XZ archive",kindZIP:"ZIP archive",kindRAR:"RAR archive",kindJAR:"Java JAR file",kindTTF:"True Type font",kindOTF:"Open Type font",kindRPM:"RPM package",kindText:"Text document",kindTextPlain:"Plain text",kindPHP:"PHP source",kindCSS:"Cascading style sheet",kindHTML:"HTML document",kindJS:"Javascript source",kindRTF:"Rich Text Format",kindC:"C source",kindCHeader:"C header source",kindCPP:"C++ source",kindCPPHeader:"C++ header source",kindShell:"Unix shell script",kindPython:"Python source",kindJava:"Java source",kindRuby:"Ruby source",kindPerl:"Perl script",kindSQL:"SQL source",kindXML:"XML document",kindAWK:"AWK source",kindCSV:"Comma separated values",kindDOCBOOK:"Docbook XML document",kindMarkdown:"Markdown text",kindImage:"Image",kindBMP:"BMP image",kindJPEG:"JPEG image",kindGIF:"GIF Image",kindPNG:"PNG Image",kindTIFF:"TIFF image",kindTGA:"TGA image",kindPSD:"Adobe Photoshop image",kindXBITMAP:"X bitmap image",kindPXM:"Pixelmator image",kindAudio:"Audio media",kindAudioMPEG:"MPEG audio",kindAudioMPEG4:"MPEG-4 audio",kindAudioMIDI:"MIDI audio",kindAudioOGG:"Ogg Vorbis audio",kindAudioWAV:"WAV audio",AudioPlaylist:"MP3 playlist",kindVideo:"Video media",kindVideoDV:"DV movie",kindVideoMPEG:"MPEG movie",kindVideoMPEG4:"MPEG-4 movie",kindVideoAVI:"AVI movie",kindVideoMOV:"Quick Time movie",kindVideoWM:"Windows Media movie",kindVideoFlash:"Flash movie",kindVideoMKV:"Matroska movie",kindVideoOGG:"Ogg movie"}},e});
//# sourceMappingURL=../sourcemaps/i18n/elfinder.en.js.map
