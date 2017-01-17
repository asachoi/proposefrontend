angular.module('mainApp')
.config(function (tmhDynamicLocaleProvider, $translateProvider, defaultLanguage) {
    tmhDynamicLocaleProvider.localeLocationPattern('scripts/locales/angular-locale_{{locale}}.js');
    $translateProvider.useStaticFilesLoader({
      'prefix': 'i18n/',
      'suffix': '.json'
    });
    $translateProvider.fallbackLanguage('en-US');
    $translateProvider.preferredLanguage(defaultLanguage);
    $translateProvider.useSanitizeValueStrategy('sanitize');
  });