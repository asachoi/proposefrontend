angular.module('mainApp')
	.run(function (logging) {
		logging.init('main');
		logging.setLogLevel(log4javascript.Level.ALL);
		logging.setLogAppender(new log4javascript.BrowserConsoleAppender());
	});