mainApp
    .directive("customerSection", function () {
        return {
            restrict: "AE",
            scope: {
                data: '='
            },
            //template: "<h1>{{customer}}</h1>",
            templateUrl: 'scripts/views/customer/en/cards/customersection.html?cb=' + cachebuster
        };
    })
    .directive("productSection", function () {
        return {
            restrict: "AE",
            scope: {
                data: '='
            },
            //template: "product: <h1>{{data}}</h1>",
            templateUrl: 'scripts/views/customer/en/cards/productsection.html?cb=' + cachebuster
        };
    })
    .directive("policyHolderInput", function () {
        return {
            restrict: "AE",
            scope: {
                data: '=',
                title: '='
            },
            //template: "Customer: <h1>{{data}}</h1> {{title}}",
            templateUrl: 'scripts/views/customer/en/cards/policyHolderInput.html?cb=' + cachebuster
        };
    })
    .directive("insuredInput", function () {
        return {
            restrict: "AE",
            scope: {
                data: '=',
                title: '='
            },
            //template: "Customer: <h1>{{data}}</h1> {{title}}",
            templateUrl: 'scripts/views/customer/en/cards/insuredInput.html?cb=' + cachebuster
        };
    });
