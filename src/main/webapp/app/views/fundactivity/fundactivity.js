


(function () {
    'use strict';
    angular.module('eProposeApp').controller('formfundactivityController',

        function ($scope, $rootScope, $state, $controller) {
            $controller('baseController', { $scope: $scope });
            var vm = $scope;
            $scope.Funds = [];

            

            vm.current = $state.current;
            vm.baseObj = $rootScope.stateObj;
            vm.settingObj = $rootScope.settingObj;

            vm.addFund = function () {
                 //console.debug("xxx");
                 $scope.Funds.push(JSON.parse(JSON.stringify($scope.editFund)));
                 $scope.editFund = null;
            }
        }
    );
})();