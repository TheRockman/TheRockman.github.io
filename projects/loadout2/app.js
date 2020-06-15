var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope, $window) {
  
  $scope.windowWidth = $window.innerWidth;
  angular.element($window).bind('resize', function(){
      $scope.windowWidth = $window.innerWidth;
      $scope.$apply();
  });
  
});

// Extra modules
// var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
//
// });
