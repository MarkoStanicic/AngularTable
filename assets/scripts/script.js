'use strict';

var myApp = angular.module('myApp', ['ngRoute', 'angularMoment', 'moment']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/car-purchases', {
        templateUrl: 'components/car-purchases/car-purchases.html',
        controller: 'carPurchasesCtrl'
    }).
    when('/user-list', {
        templateUrl: 'components/user-list/user-list.html',
        controller: 'userListCtrl'
    }).
    when('/file-uploads', {
        templateUrl: 'components/file-uploads/file-uploads.html',
        controller: 'fileUploadsCtrl'
    }).
    otherwise({
        redirectTo: '/car-purchases'
    });
}]);