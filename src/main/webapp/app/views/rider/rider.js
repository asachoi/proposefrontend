angular.module('eProposeApp').controller('formriderController',
    function ($scope, $rootScope, $filter, $state, productServices, $controller) {
        var vm = this;

        $controller('baseController', { $scope: $scope });

        $scope.selectedRiders = $rootScope.productSchema.selectedRiders;

        if ($rootScope.productSchema.selectedRiders == null) {
            $rootScope.productSchema.selectedRiders = [];
        }

        vm.getRiderObject = function (ridercode) {
            return $filter('filter')($scope.baseObj.riders, { ridercode: ridercode })[0];
        }
 

        vm.getRiderList = function (planid) {
            if (planid == null) return;
            var rs = productServices.getPlan(planid).riders;
            return rs;
        }

        vm.getRiderSchema = function (ridercode) {
            return productServices.getRiderSchema(ridercode);
        }

        vm.getPlanSchema = function (planid) {
            if (planid == null) return;
            return productServices.getPlan(planid);
        }

        vm.toggle = function (item, list) {
            if (list == null || item == null) return;

            var idx = list.indexOf(item);
            if (idx > -1) { // remove
                list.splice(idx, 1);
                item.selected = false;
            }
            else {  //add
                list.push(item);
                item.selected = true;
            }
        };

        vm.exists = function (item, list) {
            if (list == null || item == null) return;

            return $filter('filter')(list, { ridercode: item.ridercode }).length > 0;
        };
    }
);