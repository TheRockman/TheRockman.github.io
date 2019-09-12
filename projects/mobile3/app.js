var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
  $scope.slide = 0;
  $scope.toggleActive = function(){
    $scope.active = !$scope.active;
    console.log('123');
  }
});
