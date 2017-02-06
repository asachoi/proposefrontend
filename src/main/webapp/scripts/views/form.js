(function () {
    'use strict';

    angular.module('eProposeApp').controller('formController',
        ['$scope', '$rootScope', '$state', '$controller',
            function ($scope, $rootScope, $state, $controller) {
                var vm = $scope;
                $controller('baseController', { $scope: $scope });
            }]
    );
})();