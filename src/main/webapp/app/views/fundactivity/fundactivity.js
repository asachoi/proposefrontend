(function () {
    'use strict';
    angular.module('eProposeApp').controller('formfundactivityController',
        ['$scope', '$rootScope', '$filter', '$state', 'productServices', '$controller',
            function ($scope, $rootScope, $filter, $state, productServices, $controller) {
                $controller('baseController', { $scope: $scope });
                var vm = this;

                vm.current = $state.current;
                vm.baseObj = $rootScope.stateObj;

                this.FundActs = [];

                if (vm.baseObj.product.fundacts != null)
                    this.FundActs = vm.baseObj.product.fundacts;


                vm.productSchema = $rootScope.productSchema;

                vm.addFund = function () {
                    console.debug(vm.baseObj);

                    this.FundActs.push(JSON.parse(JSON.stringify(this.editFund)));
                    this.editFund = null;
                    vm.baseObj.product.fundacts = this.FundActs;
                }

                vm.delFund = function(i) {   
                    console.debug(i);                 
                    this.FundActs.splice(i,1);
                    //vm.baseObj.product.fundacts = this.FundActs;
                }
            }
        ]
    );
})();