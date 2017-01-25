Technologies stacks 
�E	Gulp
�E	Bower
�E	Bowersync
�E	RequireJS
�E	AngularJS 1
�E	Ionic 1 / Cordova
�E	JQuery 2
Folder Structure 
App                                 Source folder of frontend app
�u�w�w Gulpfile.js                           Gulp tasks definition
�u�w�w src                                      source files
�u�w�w bower.json                         Bower packages information
�u�w�w bower_components           Bower dependencies (e.g. vendor libraries like angular, bootstrap)
�u�w�w common                             
�x          �u�w�w config-common.js                  Common configuration for both AC and FP
�u�w�w dist                                  Assets produced by build process that are ready for deployment
�u�w�w package.json                          NPM packages information

Src
-	Vendors
��	Fonts (font files)
��	Libs   (referenced libraries js)
o	RequireJS
o	AngularJS
o	JQuery
-	Scripts
o	App.init.js  //bootstrap JS
o	App.routes.js  //ui.route definition
o	Config    //configuration file
o	Locales  //translation file
o	Models �V schema definitions
�X	
o	Services
�X	CommonServices.js
�X	ProductServices.js
�X	CustomerServices.js
�X	CalculationServices.js
�X	IntegrationServices.js
o	Shared
�X	Base.js  //base controller
�X	Filter.js  // common filters
�X	Main.js  // 
�X	Static.js // frontend javascript helper
o	Views
�X	[page]
�E	[page].js //controller class
�E	[locale]
o	[page].html //view html file
-	Styles //scss or css files
-	Images  //static image files
-	Index.html  //entry point
