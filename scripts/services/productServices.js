mainApp.service('productServices', function ($http, $rootScope, $filter, $q) {

    var vm = this;

    vm.getProductGroups = function () {
        return $rootScope.settingObj.productgroups;
    }

    vm.getProductGroup = function (productgroupid) {        
        return $filter('filter')($rootScope.settingObj.productgroups, { productgroupname: productgroupid })[0];
    }


    vm.getProduct = function (planid) {
        if (planid == null) return;        
        return $filter('filter')($rootScope.settingObj.products, { productcode: vm.getPlan(planid).productcode })[0];
    }


    vm.getPlans = function (productgroupid) {
        if (productgroupid == null) return;

        //console.debug($rootScope.settingObj);
        return $filter('filter')($rootScope.settingObj.plans, { productgroupname: productgroupid });
    }

    vm.getPlan = function (planid) {
        if (planid == null) return;
        var plans = $filter('filter')($rootScope.settingObj.plans, { planid: planid });
        if (plans == null) return;
        return plans[0];
    }

    vm.getRiderSetting = function (ridercode) {
        if (ridercode == null) return;
        var riders = $filter('filter')($rootScope.settingObj.riders, { ridercode: ridercode });
        if(riders == null) return;
        return riders[0];
    }


    vm.loadProducts = function () {        
        return $http.get("customizations/data/product.json?cb=" + cachebuster);
    };

    vm.loadRiders = function () {
        return $http.get("customizations/data/rider.json?cb=" + cachebuster);
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
                    role: "insured"
                },
                policyholder:
                { 
                    role: "policyholder"
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