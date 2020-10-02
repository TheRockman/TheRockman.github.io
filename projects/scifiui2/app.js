var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope) {

  $scope.captureCoordinate = function($event){
     $scope.x = $event.x;
     $scope.y = $event.y;
  }

});
