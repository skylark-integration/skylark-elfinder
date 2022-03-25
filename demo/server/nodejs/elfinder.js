var express = require('express');
var router = express.Router();
var cors = require('cors');
var util = require('util');
const bodyParser = require('body-parser');

var connector = require('./commands'),
	utils = require("./utils");
	path = require('path'),
	promise = require('promise'),
	multer = require('multer'),
	fs = require('fs-extra'),
	_ = require('underscore'),
	private  =require("./private");

config = {
	router: '/connector',
	disabled: ['chmod', 'mkfile', 'zipdl', 'edit', 'put', 'size'],
	volumeicons: ['elfinder-navbar-root-local', 'elfinder-navbar-root-local']
	//roots
	//volumes
	//tmbs
}
config.acl = function(path) {
	var volume = private.volume(path);
	return config.roots[volume].permissions || {
		read: 1,
		write: 1,
		locked: 0
	};

}

function init(options ){
	Object.assign(config, options);
	private.init(config);
};

module.exports = function( roots ){

	var volumes = roots.map( (r)=>r.path );
	var media = path.resolve( volumes[0] );

	init({
		roots: roots,
		tmbroot: path.join(media, '.tmb'),
		volumes: volumes
	})


	var whitelist = ['null', 'localhost','http://localhost:8080','http://localhost:3000']
	var corsOptions = {
	  origin: function (origin, callback) {
	    console.log("cors client:" + origin);
	    if (!origin || whitelist.indexOf(origin) !== -1) {
	      callback(null, true)
	    } else {
	      callback(new Error('Not allowed by CORS'))
	    }
	  },
	  credentials : true
	}
 

	router.all('*', cors(corsOptions));

	router.use(bodyParser.urlencoded({ extended: true }));

	router.get('/', function (req, res, next) {
		var cmd = req.query.cmd;
		if (cmd && connector[cmd]) {
			req.query.config = config;
			connector[cmd]( req.query, res).then(function (result) {
				res.json(result);
			}).catch(function (e) {
				res.json({ error: e.message });
			})
		}
		else{
			res.json({ error: cmd + " is not implemented by volume driver"});
		}
	});

	/*
	router.post('/', function (req, res, next) {
		var cmd = req.query.cmd;
		if (cmd && connector[cmd]) {
			connector[cmd]( req.query, res).then(function (result) {
				res.json(result);
			}).catch(function (e) {
				res.json({ error: e.message });
			})
		}
		else{
			res.json({ error: cmd + " is not implemented by volume driver"});
		}
	});
	*/
	
	var upload = multer({ dest: 'media/.tmp/' });

	router.post('/', upload.array('upload[]', 10), function (req, res, next) {
		//console.log("req:\n");
		//console.log(util.inspect(req));
		var cmd =  req.body && req.body.cmd || req.query && req.query.cmd;
		console.log("cmd:" + cmd);
		if (cmd && connector[cmd]) {
			req.body.config = config;
			connector[cmd](req.body, res, req.files).then(function (result) {
				res.json(result);
			}).catch(function (e) {
				res.json({ error: e.message });
			})
		}
		else{
			res.json({ error: cmd + " is not implemented by volume driver"});
		}
	})
	

	router.get('/tmb/:filename', function (req, res, next) {
		res.sendFile(connector.tmbfile(req.params.filename));
	})

	//TODO: Remove this code after removing its dependency in LFS
	router.get('/file/:volume/*', function (req, res, next) {
		var file = connector.filepath(req.params.volume, req.params['0']);
		if (file)
			res.sendFile(file);
		else {
			res.status(404);
			res.send();
		}
	})

	return router;

}

module.exports.utils = utils;
