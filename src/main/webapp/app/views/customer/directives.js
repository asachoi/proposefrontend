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
                 
                templateUrl: 'app/views/customer/cards/insuredInput.html'
            };
        });
})();
