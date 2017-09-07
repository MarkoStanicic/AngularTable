var myApp = angular.module('myApp', ['ngRoute']);

'use strict';

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/user-list', {
        templateUrl: 'components/user-list/user-list.html',
        controller: 'userListCtrl'
    }).
    when('/car-purchases', {
        templateUrl: 'components/car-purchases/car-purchases.html',
        controller: 'carPurchasesCtrl'
    }).
    when('/file-uploads', {
        templateUrl: 'components/file-uploads/file-uploads.html',
        controller: 'fileUploadsCtrl'
    }).
    otherwise({
        redirectTo: '/user-list'
    });
}]);
