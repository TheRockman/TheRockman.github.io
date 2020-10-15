var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
  $scope.floater = false;
  $scope.route = 0;
  $scope.setRoute = function(input){
    $scope.route = input;
    window.scrollTo({ top: 0 });
  }
  $scope.toggleFloater = function(){
    $scope.floater = !$scope.floater;
  }

});

// Extra modules
// var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
//
// });
