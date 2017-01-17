mainApp.controller('baseController',
    ['$scope', '$rootScope', '$state',
        function ($scope, $rootScope, $state) {
            var vm = $scope;

            vm.baseObj = $rootScope.stateObj;
            vm.settingObj = $rootScope.settingObj;
            vm.title = 'title.form';
            vm.customFormTabs = $rootScope.customFormTabs;   
        }]
);