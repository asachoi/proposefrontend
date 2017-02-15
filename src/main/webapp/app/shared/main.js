(function () {
    'use strict';
angular
    .module('eProposeApp')
    .controller('mainController',
    ['$scope', '$rootScope', '$translate', '$http', 'productServices',
        function ($scope, $rootScope, $translate, $http, productServices) {

            var vm = $scope;

            $rootScope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                    vm.currentstate = toState.name;
                });
            $rootScope.stateObj = productServices.loadInitState();
            vm.stateObj = $rootScope.stateObj;
            
            productServices.loadProducts().then(
                function (payload) {
                    $rootScope.productSchema = payload.data;
                    

                    productServices.loadPlans().then(
                        function(payload) {
                            $rootScope.productSchema.plans = payload.data;
                            vm.productSchema = $rootScope.productSchema;
                        }
                    )

                    productServices.loadRiders().then(
                        function (payload) {
                            $rootScope.productSchema.riders = payload.data;
                            vm.productSchema = $rootScope.productSchema;
                        }
                    );
                }
            );

            




        }]);

})();