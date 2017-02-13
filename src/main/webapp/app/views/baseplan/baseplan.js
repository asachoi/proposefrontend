(function () {
    'use strict';
 

    angular.module('eProposeApp').controller('formbaseplanController',
        ['$scope', '$rootScope', '$filter', '$state', 'productServices', '$controller',
            function ($scope, $rootScope, $filter, $state, productServices, $controller) {
                var vm = $scope;

                $controller('baseController', { $scope: $scope });

                $scope.$watch('productForm.$valid', function (form) {
                    $rootScope.settingObj.validPlan = form;
                });

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
 
                    if (planid == null) return;
 
                    return productServices.getProduct(planid).customform;

                }
                vm.getPlanSchema = function (planid) {
                    if (planid == null) return;
                    return productServices.getPlan(planid); 
                }
                vm.planSearch = function (text, productgroupid) {
                    var sel = vm.getPlans(productgroupid);
                    var list = $filter('filter')(sel, { value: text }); 
                    return list;
                }
            }]
    );
})();