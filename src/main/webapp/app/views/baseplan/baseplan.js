(function () {
    'use strict';

    angular.module('eProposeApp').controller('formbaseplanController',
        ['$scope', '$rootScope', '$filter', '$state', 'productServices', '$controller',
            function ($scope, $rootScope, $filter, $state, productServices, $controller) {
                var vm = this;

                $controller('baseController', { $scope: $scope });


                vm.getProductGroups = function () {
                    return productServices.getProductGroups();
                }

                vm.planChange = function () {
                    //console.debug(vm.baseObj.riders);
                    $scope.baseObj.riders = null;
                    //$rootScope.baseObj.riders = [];
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

                vm.getFundSetting = function (planid, fundcode) {

                    if (planid == null) return 0;
                    var fund = $filter('filter')(vm.getPlanSchema(planid).funds, { code: fundcode });
                    //console.debug(;
                    return fund[0];


                }
 

            }]
    );
})();