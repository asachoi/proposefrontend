(function () {
    'use strict';

    angular
        .module('eProposeApp')
 
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
                            {{f.name}}<br>
                            <input type="number" min=0 max=100 ng-model="baseObj.product.funds[f.code].value" ng-init="baseObj.product.funds[f.code].value = getFundSetting(currentPlan.planid, f.code).default">
                            <div ng-if="getFundSetting(currentPlan.planid, f.code).startperiodyear != null">
                            start year period: <input type="number" ng-model="baseObj.product.funds[f.code].startperiodyear" ng-init="baseObj.product.funds[f.code].startperiodyear = getFundSetting(currentPlan.planid, f.code).startperiodyear">
                            </div>
                        </div>
                    </div>                
                `
            }
        }
        )
}
)();

