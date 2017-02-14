(function () {
    'use strict';
    angular.module('eProposeApp').controller('form.customer.controller',
        ['$scope', '$rootScope', '$filter', '$state', 'productServices', '$controller',
            function ($scope, $rootScope, $filter, $state, productServices, $controller) {
                $controller('baseController', { $scope: $scope });
                var vm = this;

                vm.current = $state.current;
                vm.baseObj = $rootScope.stateObj;
                vm.productSchema = $rootScope.productSchema;

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
            }]
    );
})();