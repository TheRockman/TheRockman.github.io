var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $timeout, $document, $window) {
  $scope.charIndex = 147;
  $scope.wipeout = false;
  $scope.speed = 50;
  $scope.grid = [];
  for (let i = -1, len = 200; ++i < len;) {
    $scope.grid.push({
      id: i
    });
  };
  
  $scope.checkCrash = function(){
    if($scope.grid[$scope.charIndex].solid){
        console.log('crash');
          $scope.speed = 10000;
        $timeout( function(){
          $window.location.reload();
        }, 1000);
    }
  };
  
  //forward
  $scope.forward = function(){
    $scope.checkCrash();
    $timeout( function(){
      for (let i = -1, len = 5; ++i < len;) {
        $scope.grid.unshift(
          {
            id: new Date(),
            solid: Math.floor(Math.random() * 50) + 1 === 50
          }
        );
        $scope.grid.pop();
      };
      
      $scope.forward();
    }, $scope.speed );
  }
  $scope.forward();
  
  
  $document.bind('keydown', function (e) {
    if(e.keyCode === 65 || e.keyCode === 37){
      //left
      console.log('left');
      if($scope.charIndex > 145){
        $scope.charIndex--;
        $scope.checkCrash();
      }
    } else if(e.keyCode === 68 || e.keyCode === 39){
      //right
      console.log('right');
      if($scope.charIndex < 149){
        $scope.charIndex++;
        $scope.checkCrash();
      }
    }
  });
});
