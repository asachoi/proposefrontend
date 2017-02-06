(function () {
    'use strict';

    angular
        .module('eProposeApp')
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/list');

            $stateProvider
                .state('list', {
                    url: '/list',
                    cache: false,
                    templateUrl: 'scripts/views/en/list.html?cb=' + cachebuster
                    ,
                    controller: function ($scope, $rootScope) {
                        var vm = $scope;
                        vm.customerList = $rootScope.customerList;
                    }
                })
                .state('form', {
                    url: '/form',
                    cache: false,
                    templateUrl: 'scripts/views/en/form.html?cb=' + cachebuster,
                    controller: 'formController'
                })
                .state('form.customer', {
                    url: '/customers',
                    cache: false,
                    templateUrl: 'scripts/views/customer/en/customer.html?cb=' + cachebuster,
                    controller: 'form.customer.controller'
                })
                .state('form.baseplan', {
                    url: '/baseplan',
                    cache: false,
                    templateUrl: 'scripts/views/baseplan/en/baseplan.html?cb=' + cachebuster,
                    controller: 'formbaseplanController'
                })
                .state('form.rider', {
                    url: '/rider',
                    cache: false,
                    templateUrl: 'scripts/views/rider/en/rider.html?cb=' + cachebuster,
                    controller: 'formriderController'
                })
                .state('form.summary', {
                    url: '/summary',
                    cache: false,
                    templateUrl: 'scripts/views/summary/en/summary.html?cb=' + cachebuster,
                    controller: 'form.summary.controller'
                })
                ;


        })
})();