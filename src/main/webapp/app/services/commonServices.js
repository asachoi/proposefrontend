(function () {
    'use strict';

    angular
        .module('eProposeApp')
        .service('commonServices',
        function ($http, $rootScope, $filter, $q) {
            this.getCustomConfig = function () {
                return $http.get('app/customizations/config.txt');
            }
        });
})();