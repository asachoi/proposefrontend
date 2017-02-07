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
                    templateUrl: 'app/views/en/list.html'
                    ,
                    controller: function ($scope, $rootScope) {
                        var vm = $scope;
                        vm.customerList = $rootScope.customerList;
                    }
                })
                .state('form', {
                    url: '/form',
                    cache: false,
                    templateUrl: 'app/views/en/form.html',
                    controller: 'formController'
                })
                .state('form.customer', {
                    url: '/customers',
                    cache: false,
                    templateUrl: 'app/views/customer/en/customer.html',
                    controller: 'form.customer.controller'
                })
                .state('form.baseplan', {
                    url: '/baseplan',
                    cache: false,
                    templateUrl: 'app/views/baseplan/en/baseplan.html',
                    controller: 'formbaseplanController'
                })
                .state('form.rider', {
                    url: '/rider',
                    cache: false,
                    templateUrl: 'app/views/rider/en/rider.html',
                    controller: 'formriderController'
                })
                .state('form.summary', {
                    url: '/summary',
                    cache: false,
                    templateUrl: 'app/views/summary/en/summary.html',
                    controller: 'form.summary.controller'
                })
                ;


        })
})();