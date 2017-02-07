(function () {
    'use strict';

      
    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    function PEHelper() {
        return {
            getProducts: function () {

            },
            getProductDetail: function (productID) {

            },
            getRiders: function (productID) {

            },
            getRiderDetail: function (riderID) {

            },
            getPremium: function (submission) {

            }
        }
    }
})();

