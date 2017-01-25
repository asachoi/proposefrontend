# Technologies stacks 
-	Gulp
-	Bower
-	Bowersync
-	RequireJS
-	AngularJS 1
-	Ionic 1 / Cordova
-	JQuery 2


# Folder Structure 

**App**                                 *Source folder of frontend app*
- **gulpfile.js**                           *Gulp tasks definition*
- **src**                                 *source files*
- **bower.json**                         *Bower packages information*
- **bower_components**           *Bower dependencies (e.g. vendor libraries like angular, bootstrap)*
- **common**                             
-- **config-common.js**                  Common configuration for both AC and FP
- **dist**                                  Assets produced by build process that are ready for deployment
- **package.json**                          NPM packages information

**Src**
- **Vendors**
- **fonts** (font files)
- **libs**   (referenced libraries js)
-- **RequireJS**
-- **AngularJS**
-- **JQuery**
- **Scripts**
-- **App.init.js**  //bootstrap JS
-- **App.routes.js**  //ui.route definition
-- **Config**   //configuration file
-- **Locales**  //translation file
-- **Models** ¡V schema definitions
- **Services**
-- **CommonServices.js**
-- **ProductServices.js**
-- **CustomerServices.js**
-- **CalculationServices.js**
-- **IntegrationServices.js**
- **Shared**
-- **Base.js**  //base controller
-- **Filter.js**  // common filters
-- **Main.js**  // 
-- **Static.js**// frontend javascript helper
- **Views**
-- **[page]**
--- **[page].js** //controller class
--- **[locale]**
---- **[page].html** //view html file
**Styles** //scss or css files
**Images** //static image files
**Index.html**  //entry point
