angular.module('eProposeApp').controller('formriderController',
    function ($scope, $rootScope, $filter, $state, productServices, $controller) {
        var vm = this;

        $controller('baseController', { $scope: $scope });
 
        vm.getRiderList = getRiderList;
        vm.getRiderSchema = getRiderSchema;
        vm.getPlanSchema = getPlanSchema;

        function getRiderList(planid) {
            if (planid == null) return;
            var rs = productServices.getPlan(planid).riders;
            return rs;
        }

        function getRiderSchema(ridercode) {
            return productServices.getRiderSchema(ridercode);
        }


        function getPlanSchema(planid) {
            if (planid == null) return;
            return productServices.getPlan(planid);
        }


    }
);