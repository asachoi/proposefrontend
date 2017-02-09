(function () {
    'use strict';

    angular
        .module('eProposeApp')
        .directive("policyHolderInput", function () {
            return {
                restrict: "AE",
                scope: {
                    data: '=',
                    title: '='
                },
                //template: "Customer: <h1>{{data}}</h1> {{title}}",
                templateUrl: 'app/views/common/cards/policyHolderInput.html'
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
