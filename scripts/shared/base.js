(function () {
    'use strict';


    angular.module('eProposeApp').controller('baseController',
        ['$scope', '$rootScope', '$state',
            function ($scope, $rootScope, $state) {
                var vm = $scope;

                vm.baseObj = $rootScope.stateObj;
                vm.settingObj = $rootScope.settingObj;
                vm.title = 'title.form';
                vm.customFormTabs = $rootScope.customFormTabs;
                //vm.currentTab = 'Testing';   
            }]
    );

})();
/*
var sampleRequest = {
    "channel": "AGENCY",
    "location": "Philippines",
    "paymentMode": "Annual",
    "policyYearDate": null,
    "basePlan": {
        "productPK": {
            "productId": "RE100",
            "valueDate": "20161104"
        },
        "currencyCode": "PHP",
        "faceAmount": 1000000,
        "insured": {
            "age": 18,
            "sex": "M",
            "smokingStatus": "NS"
        },
        "extraRating": {
            "temporaryFlat": {
                "duration": 5,
                "rate": 10.000
            },
            "permanentFlat": {
                "rate": 11.000
            },
            "percentage": {
                "rate": 1.1000
            }
        }
    },
    "riders": null,
    "funds": null,
    "topFunds": null,
    "fundActivities": null,
    "columns": null,
};
*/