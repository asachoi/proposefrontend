mainApp.controller('form.summary.controller',
    function ($scope, $rootScope, $filter, $state, $controller) {
        $controller('baseController', { $scope: $scope });
        var vm = $scope;

        vm.current = $state.current;
        vm.baseObj = $rootScope.stateObj;
        vm.settingObj = $rootScope.settingObj;


        vm.baseObj.baseplan = {};
        vm.baseObj.baseplan.premium = {
            'annual': 1000000,
            'semiannual': 600000,
            'quarterly': 400000,
            'monthly': 180000
        };

        vm.createRequest = function () {
            var req = {
                "channel": "AGENCY",
                "location": "Philippines",
                "paymentMode": "Annual",
                "policyYearDate": null,
                "basePlan": {
                    "productPK": {
                        "productId": vm.baseObj.product.plan.key,
                        "valueDate": "20161104"
                    },
                    "currencyCode": vm.baseObj.product.plan.currency,
                    "faceAmount": vm.baseObj.product.plan.faceamount,
                    "insured": {
                        "age": $filter('Age')(vm.baseObj.customers.insured.dob),
                        "sex": vm.baseObj.customers.insured.gender,
                        "smokingStatus": vm.baseObj.customers.insured.smoking
                    },
                    "extraRating": null
                },
                "riders": null,
                "funds": null,
                "topFunds": null,
                "fundActivities": null,
                "columns": null,
            };
            
            alert(JSON.stringify(req));

        }


    }
);