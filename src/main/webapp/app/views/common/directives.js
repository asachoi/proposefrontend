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
                templateUrl: 'app/views/common/customersection.html'
            };
        })
        .directive("productSection", function () {
            return {
                restrict: "AE",
                scope: {
                    data: '='
                },
                //template: "product: <h1>{{data}}</h1>",
                templateUrl: 'app/views/common/productsection.html'
            };
        });

})();
