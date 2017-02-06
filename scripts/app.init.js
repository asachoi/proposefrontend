
 
var mainApp = angular.module('mainApp', [
  'ngMaterial',
  
  'ui.router',
  'pascalprecht.translate',
  //'ionic',
  //'ngCordova',
  //'ngResource',
  //'tmh.dynamicLocale',  
  //'slickCarousel',
  //'LocalStorageModule'
]);

mainApp.config(function ($mdIconProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('orange');

    $mdIconProvider.fontSet('md', 'material-icons');
});


/*
mainApp
	.run(function (logging) {
		logging.init('main');
		logging.setLogLevel(log4javascript.Level.ALL);
		logging.setLogAppender(new log4javascript.BrowserConsoleAppender());
	});
*/

mainApp
  //define constants
  .constant('availableLanguages', ['en-US', 'ja-JP', 'en-PH'])
  .constant('defaultLanguage', 'en-PH');
/*
  .run(function ($ionicPlatform, tmhDynamicLocale, $translate, $cordovaGlobalization, $rootScope, $state, availableLanguages, defaultLanguage, localStorageService) {
    function applyLanguage(language) {
      tmhDynamicLocale.set(language.toLowerCase());
    }

    function getSuitableLanguage(language) {
      for (var index = 0; index < availableLanguages.length; index++) {
        if (availableLanguages[index].toLowerCase() === language.toLocaleLowerCase()) {
          return availableLanguages[index];
        }
      }
      return defaultLanguage;
    }

    function setLanguage() {
      if (typeof navigator.globalization !== 'undefined') {
        $cordovaGlobalization.getPreferredLanguage().then(function (result) {
          var language = getSuitableLanguage(result.value);
          applyLanguage(language);
          $translate.use(language);
          localStorageService.set("localeCode", language.substring(0, 2));
          localStorageService.set("language", language);
        });
      } else {
        applyLanguage(defaultLanguage);
        localStorageService.set("localeCode", defaultLanguage.substring(0, 2));
        localStorageService.set("language", defaultLanguage);
      }
    }

    $ionicPlatform.ready(function () {

      setLanguage();

      if (window.cordova && window.cordova.plugins.Keyboard) {
        //Hide the keyboard accessory bar with the next, previous and done buttons.
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
        //Ionic by default uses the Ionic scroll, which simulates the Momentum Scrolling 
        //as seen on the iOS devices, by adding the overflow-scroll=true attribute, 
        //you are basically forcing this particular ion-content to use the native scrolling
        //Note : Prevent the native UIScrollView from moving when an input is focused
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });

    // add possible global event handlers here

  })
  .config(['slickCarouselConfig', function (slickCarouselConfig) {
    slickCarouselConfig.dots = true;
    slickCarouselConfig.autoplay = false;
  }])
  .config(function ($ionicConfigProvider) {
    // Remove back button text completely
    $ionicConfigProvider.backButton.previousTitleText(false).text('');
    $ionicConfigProvider.views.swipeBackEnabled(false);
  })

  .config(function ($compileProvider) {
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel|blob):|data:image\//);
  })

  //check connection on every request
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('reqInterceptor');
    //$httpProvider.interceptors.push('reqErrorInterceptor');
  })
  .config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);
});




*/