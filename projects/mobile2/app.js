var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope) {

  $scope.slides = [
    {
      url:'1'
    },
    {
      url:'2'
    },
    {
      url:'3'
    }
  ]
  
  $scope.active = $scope.slides[0];
  $scope.index = 0;
  
  $scope.prev = function () {
    if ($scope.index - 1 >= 0) {
      $scope.index = $scope.index - 1;  
      $scope.active = $scope.slides[$scope.index];
    }
  }
  
  $scope.next = function () {
    if ($scope.index + 1 < $scope.slides.length) {
      $scope.index = $scope.index + 1;  
      $scope.active = $scope.slides[$scope.index];
    }
  }

});
