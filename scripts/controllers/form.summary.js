mainApp.controller('form.summary.controller',
    function ($scope, $rootScope, $filter, $state, $controller) {
        $controller('baseController', { $scope: $scope });
        var vm = $scope;

        vm.current = $state.current;
        vm.baseObj = $rootScope.stateObj;
        vm.settingObj = $rootScope.settingObj;


        vm.baseObj.baseplan = {};
        vm.baseObj.baseplan.premium = {
            'annual': 1000000,
            'semiannual': 600000,
            'quarterly': 400000,
            'monthly': 180000
        };

    }
);