
process.env.NODE_ENV = 'development';
var log = require('../index');
var _log = require('../index');
var _log = new log();
console.log(_log == log);

describe('log', function() {
	describe('log\'s color ', function() {
		it('should be white', function() {
			log('log message!');
		});
	});
	describe('log.debug\'s color', function() {
		it('should be cyan', function() {
			log.debug('debug message!');
		});
	});
	describe('log.info\'s color', function() {
		it('should be green', function() {
			log.info('info message!');
		});
	});
	describe('log.warn\'s color', function() {
		it('should be yellow', function() {
			log.warn('warning message!');
		});
	});
	describe('log.error\'s color', function() {
		it('should be red', function() {
			log.err('error message!');
		});
	});

});