var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
  $scope.index;
  
  $scope.theme = function(deg){
    document.documentElement.style.setProperty('--filter', 'hue-rotate(' + deg + 'deg)');
  }

});
