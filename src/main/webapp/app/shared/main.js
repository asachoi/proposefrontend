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
                    $rootScope.settingObj = payload.data;

                    vm.settingObj = $rootScope.settingObj;

                    productServices.loadRiders().then(
                        function (payload) {
                            $rootScope.settingObj.riders = payload.data;
                            vm.settingObj = $rootScope.settingObj;
                        }
                    );
                }
            );





        }]);

})();