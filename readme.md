# ePropose - frontend

This application consist the poc of ePropose frontend. 

## Development

Before you can build this project, you must install and configure the following dependencies on your machine:
1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools (like
[Bower][] and [BrowserSync][]). You will only need to run this command when dependencies change in package.json.

    npm install

We use [Gulp][] as our build system. Install the Gulp command-line tool globally with:

    npm install -g gulp-cli

Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

    gulp

Bower is used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in `bower.json`. You can also run `bower update` and `bower install` to manage dependencies.
Add the `-h` flag on any command to see how you can use it. For example, `bower update -h`.

For further instructions on how to develop with JHipster, have a look at [Using JHipster in development][].

## Building for production

To optimize the ePropose application for production, run:


## Testing


### Client tests


## Using Docker to simplify development (optional)


## Continuous Integration (optional)

To set up a CI environment, consult the [Setting up Continuous Integration][] page.

[JHipster Homepage and latest documentation]: https://jhipster.github.io
[JHipster 3.9.1 archive]: https://jhipster.github.io/documentation-archive/v3.9.1

[Using JHipster in development]: https://jhipster.github.io/documentation-archive/v3.9.1/development/
[Using Docker and Docker-Compose]: https://jhipster.github.io/documentation-archive/v3.9.1/docker-compose
[Using JHipster in production]: https://jhipster.github.io/documentation-archive/v3.9.1/production/
[Running tests page]: https://jhipster.github.io/documentation-archive/v3.9.1/running-tests/
[Setting up Continuous Integration]: https://jhipster.github.io/documentation-archive/v3.9.1/setting-up-ci/


[Node.js]: https://nodejs.org/
[Bower]: http://bower.io/
[Gulp]: http://gulpjs.com/
[BrowserSync]: http://www.browsersync.io/
[Karma]: http://karma-runner.github.io/
[Jasmine]: http://jasmine.github.io/2.0/introduction.html
[Protractor]: https://angular.github.io/protractor/


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
-- **Models** �V schema definitions
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
