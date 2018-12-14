var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope, $timeout) {
  $scope.signedIn = false;
  $scope.loading = false;
  
  $scope.login = function () {
    $scope.loading = true;
    $timeout( function(){
        $scope.signedIn = true;
        $scope.loading = false;
    }, 1200 );
  }
  
});
