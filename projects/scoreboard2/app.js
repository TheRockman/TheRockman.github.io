var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
  $scope.challange = function(){
    $scope.duel = true;
    $scope.search = null;
  }
});
