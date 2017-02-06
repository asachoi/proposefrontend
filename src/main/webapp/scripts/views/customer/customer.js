(function () {
    'use strict';
    angular.module('eProposeApp').controller('form.customer.controller',
        
        function ($scope, $rootScope, $state, $controller) {
            $controller('baseController', { $scope: $scope });
            var vm = $scope;

            vm.current = $state.current;
            vm.baseObj = $rootScope.stateObj;
            vm.settingObj = $rootScope.settingObj;

            vm.saveCustomer = saveCustomer;
            vm.updateSamePerson = updateSamePerson;
            
            function updateSamePerson() {
                $rootScope.settings.customerFormComplete = vm.userForm.$valid;
            }            
            
            function saveCustomer() {
                if ($rootScope.customerList == null) {
                    $rootScope.customerList = [];
                }
                $rootScope.customerList.push(vm.baseObj.customers);

            }
        }
    );
})();