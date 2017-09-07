"use strict";


angular.module('myApp')
        .controller('userListCtrl', function($scope, usersService) {

    usersService.getItems().then(function(response) {
        $scope.items = response.data;
    });

    // function for adding row to the table
    $scope.addRow = function(){
        $scope.items.push({ 'id':$scope.id, 'first_name': $scope.first_name, 'last_name':$scope.last_name, 'email': $scope.email });
        $scope.id='';
        $scope.first_name='';
        $scope.last_name='';
        $scope.email='';
    };

    // function to remowe the row from the table
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



            // function to edit the row
    $scope.edited = -1;
    $scope.editeditems = {
        "id": 0,
        "first_name": '',
        "last_name": '',
        "email": '',
    };

    $scope.edit = function (index) {
        $scope.edited = index;
    };

    $scope.finishEdit = function (index) {
        $scope.items[index] = $scope.editeditems;
        $scope.edited = -1;
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