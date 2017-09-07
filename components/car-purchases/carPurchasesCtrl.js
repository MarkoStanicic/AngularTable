"use strict";

angular.module('myApp')
        .controller('carPurchasesCtrl', function($scope, carService) {

    carService.getItems().then(function(response) {
        $scope.items = response.data;
    });

    $scope.addRow = function(){
        $scope.items.push({ 'id':$scope.id, 'car': $scope.car, 'payment_method':$scope.payment_method, 'currency': $scope.currency, 'city': $scope.city });
        $scope.id='';
        $scope.car='';
        $scope.payment_method='';
        $scope.currency='';
        $scope.city='';
    };
    $scope.removeRow = function(id){
        var index = -1;
        var comArr = eval( $scope.items );
        for( var i = 0; i < comArr.length; i++ ) {
            if( comArr[i].id === id ) {
                index = i;
                break;
            }
        }
        if( index === -1 ) {
            alert( "Something gone wrong" );
        }
        $scope.items.splice( index, 1 );
    };

    $scope.rowLimit = 25; // set limit to table rows

    // function for loading 20 more rows on scroll (connected with "whenScrolled" directive)
    $scope.loadMore = function () {
        $scope.rowLimit += 20;
    };

    $scope.reverseSort = false; // filter for ordering data by sort

    // Check/Uncheck all checkboxes
    $scope.checkAll = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.items, function (item) {
            item.Selected = $scope.selectedAll;

        });
    };

});