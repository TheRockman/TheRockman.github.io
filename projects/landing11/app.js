var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope) {
  $scope.viewState = 1;
  $scope.view = function(set){
    $scope.viewState = set;
    $scope.toggle = false;
  }
});
//['ngTouch', 'angular-carousel']
