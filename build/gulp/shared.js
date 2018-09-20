const c = require('./config');
const exec = require('child_process').exec;

module.exports = {
	haxe: function(hxml, cb) {
		let cmd = 'HXCWD="' + process.cwd() + '" haxe ' + hxml;
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