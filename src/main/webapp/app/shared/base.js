(function () {
    'use strict';


    angular.module('eProposeApp').controller('baseController',
        ['$scope', '$rootScope', '$state',
            function ($scope, $rootScope, $state) {
                var vm = $scope;

                vm.baseObj = $rootScope.stateObj;
                vm.productSchema = $rootScope.productSchema;
                vm.title = 'title.form';
                vm.customFormTabs = $rootScope.customFormTabs;
                //vm.currentTab = 'Testing';   
            }]
    );

})();
