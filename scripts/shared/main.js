mainApp.controller('mainController',
    ['$scope', '$rootScope', '$translate', '$http', 'productServices', 'commonServices',
        function ($scope, $rootScope, $translate, $http, productServices, commonServices) {

            var vm = $scope;

            vm.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                    vm.currentstate = toState.name;
                });



            $rootScope.stateObj = productServices.loadInitState();
            vm.stateObj = $rootScope.stateObj;

            commonServices.getCustomConfig().then(
                function (payload) {
                    $rootScope.customFormTabs = payload.data.tabs;
                    
                }
            );


            productServices.loadProducts().then(
                function (payload) {
                    $rootScope.settingObj = payload.data;

                    vm.settingObj = $rootScope.settingObj;
//console.info(vm.settingObj);
                    productServices.loadRiders().then(
                        function (payload) {
                            $rootScope.settingObj.riders = payload.data;
                            vm.settingObj = $rootScope.settingObj;
                        }
                    );
                }
            );





        }]);

