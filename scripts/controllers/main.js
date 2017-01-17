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
                    //console.debug(payload.data.tabs);
                    $rootScope.customFormTabs = payload.data.tabs;
                }
            );

            //console.debug('x');
            productServices.loadProducts().then(
                function (payload) {
                    $rootScope.settingObj = payload.data;
                    console.debug(payload);
                    vm.settingObj = $rootScope.settingObj;

                    productServices.loadRiders().then(
                        function (payload) {
                            $rootScope.settingObj.riders = payload.data;
                            console.debug(payload);

                            vm.settingObj = $rootScope.settingObj;
                        }
                    );                //console.debug('x');
                                  
                }
            );

            
     

        }]);

