(function () {
  'use strict';

  angular.module('eProposeApp', [
    'ngMaterial',
    'ui.router',
    'pascalprecht.translate',
    'material.components.expansionPanels'
  ]);

  angular.module('eProposeApp').config(function ($mdIconProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('default');
    $mdIconProvider.fontSet('md', 'material-icons');
  });
})();

