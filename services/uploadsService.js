"use strict";

myApp.service('uploadsService', function ($http) {

    this.getItems = function () {
        return $http.get('services/uploads.json');
    };

    /*$http.get('components/car-purchases/car_purchases.json').success(function(item) {
     $scope.items = item;
     });*/
});