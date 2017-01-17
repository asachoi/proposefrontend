mainApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/list');

    $stateProvider
        .state('list', {
            url: '/list',
            cache: false,
            templateUrl: 'scripts/views/list.html?cb=' + cachebuster
            ,
            controller: function ($scope, $rootScope) {
                var vm = $scope;
                vm.customerList = $rootScope.customerList;
            }
        })
        .state('form', {
            url: '/form',
            cache: false,
            templateUrl: 'scripts/views/form.html?cb=' + cachebuster,
            controller: function ($scope, $rootScope, $state) {
                var vm = $scope;
                //vm.state = $state;
                vm.baseObj = $rootScope.stateObj;
                vm.settingObj = $rootScope.settingObj;
                vm.title = 'title.form';
                vm.customFormTabs = $rootScope.customFormTabs;
            }
        })
        .state('form.customer', {
            url: '/customers',
            cache: false,
            templateUrl: 'scripts/views/form/customer.html?cb=' + cachebuster,
            controller: 'form.customer.controller'
        })
        .state('form.baseplan', {
            url: '/baseplan',
            cache: false,
            templateUrl: 'scripts/views/form/baseplan.html?cb=' + cachebuster,
            controller: 'formbaseplanController'
        })
        .state('form.rider', {
            url: '/rider',
            cache: false,
            templateUrl: 'scripts/views/form/rider.html?cb=' + cachebuster,
            controller: 'formriderController'
        })
        .state('form.summary', {
            url: '/summary',
            cache: false,
            templateUrl: 'scripts/views/form/summary.html?cb=' + cachebuster,
            controller: 'form.summary.controller'
        })
        ;


});