(function () {
    'use strict';

    angular.module("eProposeApp").controller("SPULCtrl",        
            function () {
               var vm = this;
               //baseObj.product.funds
               vm.changeFund = function(code, i) {
                   $scope.$parent.baseObj.product.funds[i].code = code;
               }
            }
        );    
})();