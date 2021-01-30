define([
	"skylark-jqueryui",
	//<!-- elfinder core -->
	"./elFinder",
	"./version",
	"./jquery.elfinder",
	"./mimetypes",
	"./options",
	"./options.netmount",
	"./history",
	"./command",
	"./resources",

	//<!-- elfinder dialog -->
	"./jquery.dialogelfinder",

	//<!-- elfinder default lang -->
	"./i18n/elfinder.en",

	//<!-- elfinder ui -->
	"./ui/button",
	"./ui/contextmenu",
	"./ui/cwd",
	"./ui/dialog",
	"./ui/fullscreenbutton",
	"./ui/navbar",
	"./ui/navdock",
	"./ui/overlay",
	"./ui/panel",
	"./ui/path",
	"./ui/places",
	"./ui/searchbutton",
	"./ui/sortbutton",
	"./ui/stat",
	"./ui/toast",
	"./ui/toolbar",
	"./ui/tree",
	"./ui/uploadButton",
	"./ui/viewbutton",
	"./ui/workzone",

	//<!-- elfinder commands -->
	"./commands/archive",
	"./commands/back",
	"./commands/chmod",
	"./commands/colwidth",
	"./commands/copy",
	"./commands/cut",
	"./commands/download",
	"./commands/duplicate",
	"./commands/edit",
	"./commands/empty",
	"./commands/extract",
	"./commands/forward",
	"./commands/fullscreen",
	"./commands/getfile",
	"./commands/help",
	"./commands/hidden",
	"./commands/hide",
	"./commands/home",
	"./commands/info",
	"./commands/mkdir",
	"./commands/mkfile",
	"./commands/netmount",
	"./commands/open",
	"./commands/opendir",
	"./commands/opennew",
	"./commands/paste",
	"./commands/places",
	"./commands/preference",
	"./commands/quicklook",
	"./commands/quicklook.plugins",
	"./commands/reload",
	"./commands/rename",
	"./commands/resize",
	"./commands/restore",
	"./commands/rm",
	"./commands/search",
	"./commands/selectall",
	"./commands/selectinvert",
	"./commands/selectnone",
	"./commands/sort",
	"./commands/undo",
	"./commands/up",
	"./commands/upload",
	"./commands/view",

	//<!-- elfinder 1.x connector API support (OPTIONAL) -->
	"./proxy/elFinderSupportVer1",

	//<!-- Extra contents editors (OPTIONAL) -->
	"./extras/editors.default",

	//<!-- GoogleDocs Quicklook plugin for GoogleDrive Volume (OPTIONAL) -->
	"./extras/quicklook.googledocs"


],function($,elFinder){
	return elFinder;
});