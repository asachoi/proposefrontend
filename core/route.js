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


                    $scope.$watch('productForm.$valid', function(form) {
                         $rootScope.settingObj.validPlan = form;                     
                        //alert('change value' + form);
                    
                    });
                    //

                    vm.getProductGroups = function () {
                        return productServices.getProductGroups();
                    }

                    vm.planChange = function() {
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
                vm.selectedRiders = $rootScope.settingObj.selectedRiders;

                if($rootScope.settingObj.selectedRiders==null) {
                    $rootScope.settingObj.selectedRiders = [];
                }

                vm.getRiderObject = function (ridercode) {
                    return $filter('filter')(vm.baseObj.riders, { ridercode: ridercode })[0];
                }

                vm.setRiderList = function (planid) {
                    if (planid == null) return;    
                    if (vm.baseObj.riders != null) return vm.baseObj.riders;
                    var rs = productServices.getPlan(planid).riders;
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

                vm.getRiderList = function (planid) {
                    if (planid == null) return;    
                    var rs = productServices.getPlan(planid).riders;
                    return rs;
                }

                vm.getRiderSetting = function (ridercode) {
                    return productServices.getRiderSetting(ridercode);
                }

                vm.toggle = function (item, list) {
                    //console.debug(item);
                    var idx = list.indexOf(item);
                    if (idx > -1) { // remove
                        list.splice(idx, 1);
                        item.selected  = false;
                    }
                    else {  //add
                        list.push(item);
                        item.selected = true;
                    }
                };

                vm.exists = function (item, list) {
                    if (list == null) return;
                    return $filter('filter')(list, { ridercode: item.ridercode }).length > 0;
                
                    
                };
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
                vm.baseObj.baseplan = {};
                vm.baseObj.baseplan.premium = {
                    'annual':1000000,
                    'semiannual': 600000,
                    'quarterly': 400000,
                    'monthly':180000
                };
                
            }
        })
        ;


});