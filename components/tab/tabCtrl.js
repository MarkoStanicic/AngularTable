myApp.controller('TabsCtrl', ['$scope', '$location', function($scope) {
    $scope.tabs = [
        { link : '#/user-list', label : 'User List' },
        { link : '#/car-purchases', label : 'Car Purchases' },
        { link : '#/file-uploads', label : 'File Uploads' }
    ];

    $scope.selectedTab = $scope.tabs[0];
    $scope.setSelectedTab = function(tab) {
        $scope.selectedTab = tab;
    };

    $scope.tabClass = function(tab) {
        if ($scope.selectedTab === tab) {
            return "active";
        } else {
            return "";
        }
    };
}]);