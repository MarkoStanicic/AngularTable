"use strict";

myApp.service('usersService', function ($http) {

    this.getItems = function () {
        return $http.get('services/users.json');
    };

    /*$http.get('components/car-purchases/car_purchases.json').success(function(item) {
     $scope.items = item;
     });*/
});