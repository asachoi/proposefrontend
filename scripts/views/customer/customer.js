(function () {
    'use strict';
    angular.module('eProposeApp').controller('form.customer.controller',
        function ($scope, $rootScope, $state, $controller) {
            $controller('baseController', { $scope: $scope });
            var vm = $scope;

            vm.current = $state.current;
            vm.baseObj = $rootScope.stateObj;
            vm.settingObj = $rootScope.settingObj;


            vm.updateSamePerson = function () {
                $rootScope.settings.customerFormComplete = vm.userForm.$valid;
            }

            vm.saveCustomer = function () {
                if ($rootScope.customerList == null) {
                    $rootScope.customerList = [];
                }
                $rootScope.customerList.push(vm.baseObj.customers);

                //console.debug($rootScope.customerList);

            }
        }
    );
})();