var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
  $scope.pos = {
    x: 20,
    y: 20
  };
  
  $scope.read = function(e){
    $scope.pos.x = e.offsetX;
    $scope.pos.y = e.offsetY;
    $scope.xStyle={'top': 20 + 'px', 'left': $scope.pos.x/10 + 'px'};
    $scope.yStyle={'top': $scope.pos.y/10 + 'px', 'left': 20 + 'px'};
    $scope.zStyle={'top': $scope.pos.y/10 + 'px', 'left': $scope.pos.x/10 + 'px'};
  
    $scope.sway1={'transform': 'translateX(' +  ($scope.pos.x/10 - 25) + 'px) translateY(' +  ($scope.pos.y/10 - 25) + 'px)'};
    $scope.sway2={'transform': 'translateX(' +  ($scope.pos.x/10 - 25) + 'px) translateY(' +  ($scope.pos.y/10 - 25) + 'px)'};
    
    $scope.IYsway2={'transform': 'translateX(' +  ($scope.pos.x/10 - 25) + 'px) translateY(' +  ($scope.pos.y/6 - 25) + 'px)'};
    $scope.IXsway2={'transform': 'translateX(' +  ($scope.pos.x/6 - 25) + 'px) translateY(' +  ($scope.pos.y/10 - 25) + 'px)'};
    
        $scope.IXsway3={'transform': 'translateX(' +  ($scope.pos.x/10 - 25) + 'px) translateY(' +  ($scope.pos.y/10 - 25) + 'px)'};
  }

});
