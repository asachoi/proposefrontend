mainApp.controller('formbaseplanController',
    ['$scope', '$rootScope', '$filter', '$state', 'productServices', '$controller',
        function ($scope, $rootScope, $filter, $state, productServices, $controller) {
            var vm = $scope;

            $controller('baseController', { $scope: $scope });


            $scope.$watch('productForm.$valid', function (form) {
                $rootScope.settingObj.validPlan = form;
                //alert('change value' + form);

            });
            //

            vm.getProductGroups = function () {
                return productServices.getProductGroups();
            }

            vm.planChange = function () {
                //console.debug(vm.baseObj.riders);
                vm.baseObj.riders = null;
            }
            vm.getProductGroup = function (productgroupid) {
                return productServices.getProductGroup(productgroupid);
            }

            vm.getPlans = function (productgroupid) {
                if (productgroupid == null) return;
 
                return productServices.getPlans(productgroupid).map(function (p) {
                    return {
                        value: p.planname,
                        key: p.planid
                    }
                }
                );
            }

            vm.getPlan = function (planid) {
                return productServices.getPlan(planid);
            }
            vm.customForm = function (planid) {
                //vm.getProduct();
                if (planid == null) return;
                //console.debug(planid);
                //console.debug(productServices.getProduct(planid));
                return productServices.getProduct(planid).customform;

            }
            vm.planSearch = function (text, productgroupid) {
                var sel = vm.getPlans(productgroupid);

                var list = $filter('filter')(sel, { value: text });
                //console.log(sel);
                return list;

            }
        }]
);