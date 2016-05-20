# A simple module, use color to distinguish the log categories

## install
    npm install solog

## usage
	var log = require('log');

    log('message');
    log.debug('looking:',obj);
    log.info('information...');
    log.warn('warning, don\'t do this again!');
	log.err('oops!',err);