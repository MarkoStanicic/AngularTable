"use strict";

myApp.service('carService', function ($http) {

    this.getItems = function () {
        return $http.get('services/car_purchases.json');
    };

});