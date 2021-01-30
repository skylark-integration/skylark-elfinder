define([
	"../elFinder"
],function(elFinder){

	elFinder.prototype.commands.copy = function() {
		"use strict";
		this.shortcuts = [{
			pattern     : 'ctrl+c ctrl+insert'
		}];
		
		this.getstate = function(select) {
			var sel = this.files(select),
				cnt = sel.length;

			return cnt && $.grep(sel, function(f) { return f.read ? true : false; }).length == cnt ? 0 : -1;
		};
		
		this.exec = function(hashes) {
			var fm   = this.fm,
				dfrd = $.Deferred()
					.fail(function(error) {
						fm.error(error);
					});

			$.each(this.files(hashes), function(i, file) {
				if (! file.read) {
					return !dfrd.reject(['errCopy', file.name, 'errPerm']);
				}
			});
			
			return dfrd.state() == 'rejected' ? dfrd : dfrd.resolve(fm.clipboard(this.hashes(hashes)));
		};

	};

	return elFinder;

});