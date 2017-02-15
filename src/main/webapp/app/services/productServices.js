(function () {
    'use strict';

    angular
        .module('eProposeApp')
        .service('productServices',
        function (
            $http,
            $rootScope,
            $filter,
            $q) {

            var vm = this;

            vm.getProductGroups = function () {
                return $rootScope.productSchema.productgroups;
            }

            vm.getProductGroup = function (productgroupid) {
                //need to update with new JSON structure
                return $filter('filter')($rootScope.productSchema.productgroups, { productgroupname: productgroupid })[0];
            }


            vm.getProduct = function (planid) {
                if (planid == null) return;
                return $filter('filter')($rootScope.productSchema.products, { productcode: vm.getPlan(planid).productcode })[0];
            }


            vm.getPlans = function (productgroupid) {
                //need to update with new JSON structure
                if (productgroupid == null) return;

                //console.debug($rootScope.productSchema);
                return $filter('filter')($rootScope.productSchema.plans, { productgroupname: productgroupid });
            }

            vm.getPlan = function (planid) {
                if (planid == null) return;
                var plans = $filter('filter')($rootScope.productSchema.plans, { planid: planid });
                if (plans == null) return;
                return plans[0];
            }

            vm.getRiderSchema = function (ridercode) {
                if (ridercode == null) return;
                var riders = $filter('filter')($rootScope.productSchema.riders, { ridercode: ridercode });
                if (riders == null) return;
                return riders[0];
            }

            vm.getFunds = function(planid) {
                var plan = getPlan(planid);
                if(plan == null) return;

                return plan.funds; 
            }


            vm.loadProducts = function () {
                return $http.get("app/customizations/data/product.json");
            };

            vm.loadPlans = function () {
                return $http.get("app/customizations/data/plan.json");
            };
            

            vm.loadRiders = function () {
                return $http.get("app/customizations/data/rider.json");
            };


            vm.loadInitState = function () {
                var data = {
                    settings: {
                        isSamePerson: true
                    },
                    customers:
                    {
                        insured:
                        {
                            role: "insured",
                            smokingstatus: 'NA'
                        },
                        policyholder:
                        {
                            role: "policyholder",
                            smokingstatus: 'NA'
                        }
                    },
                    product: {
                    }
                    ,
                    riders: [
                    ],
                    riderChoices: [
                    ]
                };
                return data;
            };
        });
})();