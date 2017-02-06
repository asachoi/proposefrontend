(function () {
  'use strict';

  angular.module('eProposeApp', [
    'ngMaterial',
    'ui.router',
    'pascalprecht.translate',

  ]);

  angular.module('eProposeApp').config(function ($mdIconProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('orange');

    $mdIconProvider.fontSet('md', 'material-icons');
  });
})();

