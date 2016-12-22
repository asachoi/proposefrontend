mainApp.config(function ($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/list');

    $stateProvider
        .state('list', {
            url: '/list',
            cache: false,
            templateUrl: 'views/list.html?cb=' + cachebuster
            ,
            controller: function ($scope, $rootScope) {
                var vm = $scope;

            }
        })
        .state('form', {
            url: '/form',
            cache: false,
            templateUrl: 'views/form.html?cb=' + cachebuster,
            controller: function ($scope, $rootScope, $state) {
                var vm = $scope;


                //vm.state = $state;

                vm.baseObj = $rootScope.stateObj;
                vm.settingObj = $rootScope.settingObj;
                vm.title = 'title.form';
                vm.customFormTabs = $rootScope.customFormTabs;

                vm.setDisable = function (section) {

                    return true;
                }
            }
        })
        .state('form.customer', {
            url: '/customers',
            cache: false,
            templateUrl: 'views/form/customer.html?cb=' + cachebuster,
            controller: function ($scope, $rootScope, $state) {
                var vm = $scope;

                vm.current = $state.current;
                vm.baseObj = $rootScope.stateObj;
                vm.settingObj = $rootScope.settingObj;

                vm.updateSamePerson = function () {
                    $rootScope.settings.customerFormComplete = vm.userForm.$valid;
                }
            }
        })
        .state('form.baseplan', {
            url: '/baseplan',
            cache: false,
            templateUrl: 'views/form/baseplan.html?cb=' + cachebuster,
            controller: ['$scope', '$rootScope', '$filter', '$state', 'productServices',
                function ($scope, $rootScope, $filter, $state, productServices) {
                    var vm = $scope;

                    vm.current = $state.current;
                    vm.baseObj = $rootScope.stateObj;
                    vm.settingObj = $rootScope.settingObj;

                    vm.getProductGroups = function () {
                        return productServices.getProductGroups();
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

                    vm.customForm = function(planid) {
                        //vm.getProduct();
                        if(planid==null) return;
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
        })
        .state('form.rider', {
            url: '/rider',
            cache: false,
            templateUrl: 'views/form/rider.html?cb=' + cachebuster,
            controller: function ($scope, $rootScope, $filter, $state, productServices) {
                var vm = $scope;


                vm.current = $state.current;
                vm.baseObj = $rootScope.stateObj;
                vm.settingObj = $rootScope.settingObj;
                vm.selectedRiders = [];

                vm.getRiderObject = function (ridercode) {
                    return $filter('filter')(vm.baseObj.riders, { ridercode: ridercode })[0];
                }

                vm.setRiderList = function () {
                    if ($rootScope.selectedPlan == null) return;
                    var rs = $rootScope.selectedPlan.riders;
                    var riders = [];

                    rs.forEach(
                        function (item, index) {
                            //console.debug(item);
                            riders.push(
                                {
                                    ridercode: item,
                                    selected: false
                                }
                            )
                        }
                    );
                    return riders;

                }

                vm.getRiderList = function () {
                    if ($rootScope.selectedPlan == null) return;
                    var rs = $rootScope.selectedPlan.riders;
                    return rs;
                }

                vm.getRiderSetting = function (ridercode) {
                    return productServices.getRiderSetting(ridercode);
                }

                vm.toggle = function (item, list) {

                    var idx = list.indexOf(item);
                    if (idx > -1) { // remove
                        list.splice(idx, 1);
                        vm.getRiderObject(item).selected = false;
                    }
                    else {  //add
                        list.push(item);
                        vm.getRiderObject(item).selected = true;
                    }
                };

                vm.exists = function (item, list) {
                    if (list == null) return;

                    return list.indexOf(item) > -1;
                };

                vm.getPlan = function (productid, planid) {
                    return "XXX";
                    //console.debug(planid);
                    //return productServices.getPlan(productid, planid);
                }


            }
        })
        .state('form.summary', {
            url: '/summary',
            cache: false,
            templateUrl: 'views/form/summary.html?cb=' + cachebuster,
            controller: function ($scope, $rootScope, $filter, $state) {
                var vm = $scope;

                vm.current = $state.current;
                vm.baseObj = $rootScope.stateObj;
                vm.settingObj = $rootScope.settingObj;
            }
        })
        ;


});