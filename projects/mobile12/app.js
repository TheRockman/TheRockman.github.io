var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope) {
  $scope.view = 1;
  $scope.setView = function(input){
    $scope.view = input;
  }
});

// Extra modules
// var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
//
// });
