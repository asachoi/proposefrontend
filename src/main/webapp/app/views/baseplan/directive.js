(function () {
    'use strict';

    angular
        .module('eProposeApp')

        .directive("faceamount",
        function () {
            return {
                restrict: "E",
                template: '                          <md-input-container class="md-block" flex=40>                                <label>{{"faceamount"|translate}}</label>                                <input ng-model="baseObj.product.faceamount" type="number" min="{{currentPlan.minifaceamount}}"max="{{currentPlan.maxfaceamount}}" aria-label="" required>                                </md-input>                            </md-input-container>                    '
            }

        }
        )
        .directive("fundallocation",
        function () {
            return {
                restrict: "E",
                templateUrl: 'app/views/baseplan/controls/fundstemplate.html'

            }
        }
        )
}
)();
