/*jslint node:true */
'use strict';

var util = require('util'),
	chalk = require('chalk');

var color = {};
var isDev =  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined;

var log = function() {
	_log('log', arguments);
};

var alias = 'log info debug warn err'.split(' ');
var colors = 'inverse black.bgGreen black.bgCyan black.bgYellow black.bgRed'.split(' ');


var _makeLogFun = function(_a) {
		return function() {
			_log(_a, arguments);
		};
	};

for (var i = 0; i < alias.length; i++) {
	var a = alias[i];
	color[a] = eval('chalk.' + colors[i]);
	log[a] = _makeLogFun(a);
}

// alias err
log.error = log.err;

function _log(type, args) {
	// only show debug in Develop Environment
	if(type === 'debug' && !isDev){
		return;
	}
	args = [].slice.call(args);
	args.unshift('[' + type.toUpperCase() + ']');

	// give it color
	args[0] = color[type](args[0]);

	util.log.apply(util, args);

	// add a blank line
	console.log('');
}

module.exports = log;