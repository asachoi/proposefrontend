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
                templateUrl: 'app/views/common/customersection.html',
                controller: function($scope, DEBUG_INFO_ENABLED) {
                    $scope.DEBUG_INFO_ENABLED = DEBUG_INFO_ENABLED;
                } 

            };
        })
        .directive("productSection", function () {
            return {
                restrict: "AE",
                scope: {
                    data: '='
                },
                //template: "product: <h1>{{data}}</h1>",
                templateUrl: 'app/views/common/productsection.html',
                controller: function($scope, DEBUG_INFO_ENABLED) {
                    $scope.DEBUG_INFO_ENABLED = DEBUG_INFO_ENABLED;
                }                 
            };
        })
        .directive("debug", function() {
            return {
                restrict: "AE",
                template: `
                <div ng-if="DEBUG_INFO_ENABLED">
                    {{data}}
                </div>
                `           
            }
        });

        

})();
