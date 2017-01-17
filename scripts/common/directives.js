mainApp
    .directive("customerSection", function () {
        return {
            restrict: "AE",
            scope: {
                data: '='
            },
            //template: "<h1>{{customer}}</h1>",
            templateUrl: 'scripts/components/customersection.html?cb=' + cachebuster
        };
    })
    .directive("productSection", function () {
        return {
            restrict: "AE",
            scope: {
                data: '='
            },
            //template: "product: <h1>{{data}}</h1>",
            templateUrl: 'scripts/components/productsection.html?cb=' + cachebuster
        };
    })
    .directive("customerInput", function () {
        return {
            restrict: "AE",
            scope: {
                data: '=',
                title: '='
            },
            //template: "Customer: <h1>{{data}}</h1> {{title}}",
            templateUrl: 'scripts/components/customerinput.html?cb=' + cachebuster
        };
    })
    .directive("tree", function ($compile) {
        return {
            restrict: "E",
            transclude: true,
            scope: { root: '=', name: '@' },
            template:
            '<ul>' +
            '<li ng-repeat="(key, value) in root">' +
            '<p>{{key}}</p>' +
            '{{ JSON.parse(value)}}' + 
            '<tree root="value" ng-if="value.length > 0"></tree>' + 
            '<div ng-if="!(value.length > 0)">{{value}}</div>' +
            '</li>' +
            '</ul>',
            compile: function (tElement, tAttr, transclude) {
                var contents = tElement.contents().remove();
                var compiledContents;
                return function (scope, iElement, iAttr) {
                    if (!compiledContents) {
                        compiledContents = $compile(contents, transclude);
                    }
                    compiledContents(scope, function (clone, scope) {
                        iElement.append(clone);
                    });
                };
            }
        };
    });

