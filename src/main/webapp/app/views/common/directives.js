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
            var toJson = function(json) {
                return angular.toJson(json);
            };
            return {
                restrict: "AE",
                scope: {
                    data: '='
                },
                template: '{{data}}              <div ng-if="DEBUG_INFO_ENABLED">                  {{data}}              </div>'
                ,
                controller: function($scope, DEBUG_INFO_ENABLED) {
                    $scope.DEBUG_INFO_ENABLED = DEBUG_INFO_ENABLED;
                }            
            }
        })
        .directive("buttonoption", function() {
            return {
                restrict: "E",
                scope: {
                    data: '=',
                    options: '='
                },
                template: `
                
                <div class="myToggle myToggle--clearFix myToggle--large">
                 
                    <div class="radio" ng-repeat='o in options'>{{o}}
                        <input  type="radio" value="{{o}}" ng-model="data">
                        <label  >{{o}}</label>
                    </div>
                </div>                
                `
            }

        })
        ;

        

})();
