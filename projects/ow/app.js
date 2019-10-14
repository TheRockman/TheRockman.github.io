var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $timeout) {
  $scope.players = 2;
  $scope.ping0 = true;
  $scope.view = '';
  
  $timeout( function(){
    $scope.ping1 = true;
  }, 1000 );
     
  $timeout( function(){
    $scope.ping2 = true;
  }, 4000 );
  
  $timeout( function(){
    $scope.players = 0;
  }, 8000 );
  
  $timeout( function(){
    $scope.ping0 = false;
    $scope.ping1 = false;
    $scope.ping2 = false;
  }, 10000 );
  
  $scope.view = function(input){
    $scope.view = input;
  }

});
