var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope) {

  $scope.x = 550;
  $scope.y = 0;

  $scope.ctrlMode = false;

  $scope.captureCoordinate = function($event){
    if($scope.ctrlMode){
      $scope.x = $event.x;
      $scope.y = $event.y;
    }
  }

});
