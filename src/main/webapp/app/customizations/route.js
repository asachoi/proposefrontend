
angular.module('eProposeApp')
.config(
    function ($stateProvider) {
        $stateProvider
        .state('form.debug', {
            url: '/debug',
            cache: false,
            templateUrl: 'app/customizations/views/tabs/debug.html'
            ,
            controller: function ($scope, $rootScope) {
                //$scope.title = 'title_list';
            }
        });
    }
);

