(function () {
    'use strict';

    angular
        .module('eProposeApp')
        .directive("customerSection", function () {
            return {
                restrict: "AE",
                scope: {
                    data: '='
                },
                //template: "<h1>{{customer}}</h1>",
                templateUrl: 'app/views/customer/cards/customersection.html'
            };
        })
        .directive("productSection", function () {
            return {
                restrict: "AE",
                scope: {
                    data: '='
                },
                //template: "product: <h1>{{data}}</h1>",
                templateUrl: 'app/views/customer/cards/productsection.html'
            };
        })
        .directive("policyHolderInput", function () {
            return {
                restrict: "AE",
                scope: {
                    data: '=',
                    title: '='
                },
                //template: "Customer: <h1>{{data}}</h1> {{title}}",
                templateUrl: 'app/views/customer/cards/policyHolderInput.html'
            };
        })
        .directive("insuredInput", function () {
            return {
                restrict: "AE",
                scope: {
                    data: '=',
                    title: '='
                },
                //template: "Customer: <h1>{{data}}</h1> {{title}}",
                templateUrl: 'app/views/customer/cards/insuredInput.html'
            };
        });
})();
