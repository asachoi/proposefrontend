


(function () {
    'use strict';
    angular.module('eProposeApp').controller('formfundactivityController',
        ['$scope', '$rootScope', '$filter', '$state', 'productServices', '$controller',
            function ($scope, $rootScope, $filter, $state, productServices, $controller) {
                $controller('baseController', { $scope: $scope });
                var vm = this;
                this.Funds = [];

                vm.current = $state.current;
                vm.baseObj = $rootScope.stateObj;
                vm.productSchema = $rootScope.productSchema;

                vm.addFund = function () {
                    console.debug(vm.baseObj);
                    this.Funds.push(JSON.parse(JSON.stringify(this.editFund)));
                    this.editFund = null;
                }
            }
        ]
    );
})();