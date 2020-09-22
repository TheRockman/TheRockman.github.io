var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope) {
  $scope.items = [{
    time: '123'
  }];
  $scope.add = function(){
    $scope.items.push({time:new Date()})
  }
});

// Extra modules
// var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
//
// });
