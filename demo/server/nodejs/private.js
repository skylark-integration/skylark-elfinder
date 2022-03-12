var lz = require('lzutf8'),	//Remove after decoupling
	path = require('path'), //Remove
	mime = require('mime-types'),
	promise = require('promise'),
	_ = require('underscore'),
	Jimp = require('jimp'),
	fs = require('fs'),
	nfs = require("skynode-nfs");

var private = module.exports;

//private
private.compress = function(files, dest) {
	var sources = files.map(function(file){
		return private.decode(file).absolutePath;
	});

	console.log("nfs.archive:" + dest);
	console.dir(sources);
	return nfs.archive(sources,dest,{
		store: true // Sets the compression method to STORE.		
	});
	/*
	return new promise(function(resolve, reject) {
		var output = fs.createWriteStream(dest);
		var archive = archiver('zip', {
			store: true // Sets the compression method to STORE.
		});
		// listen for all archive data to be written
		output.on('close', function() {
			resolve(true);
		});
		archive.on('error', function(err) {
			console.log(err);
			reject(err);
		});
		archive.pipe(output);
		_.each(files, function(file) {
			var target = private.decode(file);
			//check if target is file or dir
			if (fs.lstatSync(target.absolutePath)
				.isDirectory()) {
				var name = path.basename(target.absolutePath);
				archive.directory(path.normalize(target.absolutePath + path.sep), name);
			} else {
				archive.file(target.absolutePath, {
					name: target.name
				});
			}
		});
		archive.finalize();
	})
	*/
}
private.decode = function(dir) {
	var root, code, name, volume;
	if (!dir || dir.length < 4) throw Error('Invalid Path');
	if (dir[0] != 'v' || dir[2] != '_') throw Error('Invalid Path');
	volume = parseInt(dir[1]);

	var relative = dir.substr(3, dir.length - 3)
		.replace(/-/g, '+')
		.replace(/_/g, '/')
		.replace(/\./g, '=');

	relative = lz.decompress(relative + '==', {
		inputEncoding: "Base64"
	});
	name = path.basename(relative);
	root = config.volumes[volume];
	return {
		volume: volume,
		dir: root,
		path: relative,
		name: name,
		absolutePath: path.join(root, relative)
	}
}

//Used by private.info, api.opne, api.tmb, api.zipdl
private.encode = function(dir) {
	var info = private.parse(dir);
	relative = lz.compress(info.path, {
			outputEncoding: "Base64"
		})
		.replace(/=+$/g, '')
		.replace(/\+/g, '-')
		.replace(/\//g, '_')
		.replace(/=/g, '.');
	return 'v' + info.volume + '_' + relative;
}

var config;

private.filepath = function(volume, filename) {
	if (volume < 0 || volume > 2) return null;
	return path.join(config.volumes[volume], path.normalize(filename));
}

private.info = function(p) {
	return new promise(function(resolve, reject) {
		console.log("private.info.p:" + p);
		var info = private.parse(p);
		console.log("private.info:parse:" + JSON.stringify(p));
		if (info.volume < 0) return reject('Volume not found');

		nfs.stat(p, function(err, stat) {
			console.log("private.info.fs.stat:" + err);
			if (err) return reject(err);
			var r = {
				name: path.basename(p),
				size: stat.size,
				hash: private.encode(p),
				mime: stat.isDirectory() ? 'directory' : mime.lookup(p),
				ts: Math.floor(stat.mtime.getTime() / 1000),
				volumeid: 'v' + info.volume + '_'
			}
			if (r.mime === false) {
				r.mime = 'application/binary';
			}
			if (r.mime.indexOf('image/') == 0) {
				var filename = private.encode(p);
				var tmbPath = path.join(config.tmbroot, filename + ".png");
				if (nfs.existsSync(tmbPath)) {
					r.tmb = filename + '.png';
				} else {
					r.tmb = "1";
				}
			}

			if (!info.isRoot) {
                var parent = path.dirname(p);
                // if (parent == root) parent = parent + path.sep;
				r.phash = private.encode(parent);
			} else {
				r.options = {
					disabled: config.disabled,
					archivers: {
						create: ['application/zip'],
						createext: {
							'application/zip': 'zip'
						}
					},
					url: config.roots[info.volume].URL
				}
				if (config.volumeicons[info.volume]) {
					r.options.csscls = config.volumeicons[info.volume];
				}
			}
			var acl = config.acl(p);
			r.read = acl.read;
			r.write = acl.write;
			r.locked = acl.locked;
			//check if this folder has child.
			r.isdir = (r.mime == 'directory');

			if (r.isdir) {
				var items = nfs.readdirSync(p);
				for (var i = 0; i < items.length; i++) {
					if (nfs.lstatSync(path.join(p, items[i]))
						.isDirectory()) {
						r.dirs = 1;
						break;
					}
				}
			}
			console.log("private.info.fs.stat2:" + JSON.stringify(r));
			resolve(r);
		})
	})
}

private.init = function(_config) {
	config = _config;
	var tasks = [];
	_.each(config.volumes, function(volume) {
		tasks.push(private.info(volume));
	})

	return promise.all(tasks)
		.then(function(results) {
			_.each(results, function(result) {
				result.phash = '';
			})
			return promise.resolve(results);
		})
}

//Used by private.encode & private.info
private.parse = function(p) {
	var v = private.volume(p);
	var root = config.volumes[v] || "";
	var relative = p.substr(root.length, p.length - root.length);
	if (!relative.indexOf(path.sep) == 0) relative = path.sep + relative;
	return {
		volume: v,
		dir: root,
		path: relative,
		isRoot: relative == path.sep
	}
}

/**
 * dir: absolute path
 */
private.readdir = function(dir) {
	return new promise(function(resolve, reject) {
		var current;
		nfs.readdir(dir).then(function(items){
			var files = [];
			_.each(items, function(item) {
				var info = nfs.lstatSync(path.join(dir, item));
				files.push({
					name: item,
					isdir: info.isDirectory()
				});
			})
			resolve(files);
		},reject);
	})
}

private.suffix = function(name, suff) {
	var ext = path.extname(name);
	var fil = path.basename(name, ext);
	return fil + suff + ext;
}

private.tmbfile = function(filename) {
	return path.join(config.tmbroot, filename);
}

//Used by private.parse & config.acl
private.volume = function(p) {
	for (var i = 0; i < config.volumes.length; i++) {
		if (i > 9) return -1;
		if (p.indexOf(config.volumes[i]) == 0) {
			return i;
		}
	}
	return -1;
}
