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
                    templateUrl: 'app/views/list.html'
                    ,
                    controller: function ($scope, $rootScope) {
                        var vm = $scope;
                        vm.customerList = $rootScope.customerList;
                    }
                })
                .state('form', {
                    url: '/form',
                    cache: false,
                    templateUrl: 'app/views/form.html',
                    controller: 'formController'
                })
                .state('form.customer', {
                    url: '/customers',
                    cache: false,
                    templateUrl: 'app/views/customer/customer.html',
                    controller: 'form.customer.controller as customerCtrl'
                })
                .state('form.baseplan', {
                    url: '/baseplan',
                    cache: false,
                    templateUrl: 'app/views/baseplan/baseplan.html',
                    controller: 'formbaseplanController as baseplanCtrl'
                })
                .state('form.rider', {
                    url: '/rider',
                    cache: false,
                    templateUrl: 'app/views/rider/rider.html',
                    controller: 'formriderController as riderCtrl'
                })
                .state('form.fundactivity', {
                    url: '/fundactivity',
                    cache: false,
                    templateUrl: 'app/views/fundactivity/fundactivity.html',
                    controller: 'formfundactivityController as ctrl'
                })                
                .state('form.summary', {
                    url: '/summary',
                    cache: false,
                    templateUrl: 'app/views/summary/summary.html',
                    controller: 'form.summary.controller as summaryCtrl'
                })
                ;


        })
})();