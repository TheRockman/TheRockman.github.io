var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope) {
  $scope.deg = 1;
  
  $scope.next = function(){
    if($scope.deg + 1 < 5){
      $scope.deg = $scope.deg + 1;
    } else{
      $scope.deg = 1;
    }
  }
  
  $scope.prev = function(){
    if($scope.deg - 1 > 0){
      $scope.deg = $scope.deg - 1;
    } else{
      $scope.deg = 4;
    }
  }
  
});

// Extra modules
// var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
//
// });
