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

            var linker = function(scope, element, attrs) {
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
            function() {
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
        );
}
)();

