(function () {
  'use strict';

  angular.module('eProposeApp', [
    'ngMaterial',
    'ui.router',
    'pascalprecht.translate',
    'material.components.expansionPanels',
     'jsonFormatter',
     'md.data.table'
  ]);

  angular.module('eProposeApp').config(function ($mdIconProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('default');
    $mdIconProvider.fontSet('md', 'material-icons');
  });

  angular.module('eProposeApp').config(function (JSONFormatterConfigProvider) {

    // Enable the hover preview feature
    JSONFormatterConfigProvider.hoverPreviewEnabled = true;
  });
})();

