(function () {
    'use strict';

    angular
        .module('eProposeApp')
        .directive("baseplanfields",
        function ($compile) {
            var template = `
                   Schema: <h1>{{planschama.maxfaceamount}}</h1>
                   <faceamount></faceamount>
                `;

            var linker = function (scope, element, attrs) {
                //scope.rootDirectory = 'images/';
                //element.html(getTemplate(scope.content.content_type)).show();
                template = scope.content;

                console.debug(scope.planschama);

            }

            return {
                restrict: "AE",
                scope: {
                    planschama: '='
                },
                //template: template,
                link: linker

            };
        }
        )
        .directive("faceamount",
        function () {
            return {
                restrict: "E",
                template: `
                            <md-input-container class="md-block" flex=40>
                                <label>{{'faceamount'|translate}}</label>
                                <input ng-model="baseObj.product.faceamount" type="number" min="{{currentPlan.minifaceamount}}" max="{{currentPlan.maxfaceamount}}" aria-label="" required>
                                </md-input>
                            </md-input-container>
                    `
            }

        }
        )
        .directive("fundallocation",
        function () {
            return {
                restrict: "E",
                template: `
                    <div layout="row" flex=100>
                        <div ng-repeat="f in currentPlan.funds" flex=25>
                            {{f.name}}:
                            <input min=0 max=100 ng-model="baseObj.product.funds[f.code].value" ng-init="baseObj.product.funds[f.code].value = getFundSetting(currentPlan.planid, f.code).default">
                            <div ng-if="getFundSetting(currentPlan.planid, f.code).startperiodyear != null">
                            start year period: <input ng-model="baseObj.product.funds[f.code].startperiodyear" ng-init="baseObj.product.funds[f.code].startperiodyear = getFundSetting(currentPlan.planid, f.code).startperiodyear">
                            </div>
                        </div>
                    </div>                
                `

            }
        }
        )
}
)();

