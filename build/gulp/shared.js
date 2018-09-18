var c = require('./config');
var exec = require('child_process').exec;

module.exports = {
	haxe: function(hxml, cb) {
		var cmd = 'HXCWD="' + process.cwd() + '" haxe ' + hxml;
		if (c.isDev) {
			cmd += ' -debug';
		} else {
			cmd += ' --no-traces';
		}
		return exec(cmd, function (err, stdout, stderr) {
			if (stdout) {
				console.log(stdout);
			}
			if (stderr) {
				console.log(stderr);
			}
			cb(err);
		});
	}
};