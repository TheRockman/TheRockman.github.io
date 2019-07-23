var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $timeout, $document, $window) {
  $scope.charIndex = 147;
  $scope.wipeout = false;
  $scope.topScore = window.localStorage.getItem('score');
  $scope.score = 0;
  $scope.speed = 60;
  $scope.grid = [];
  for (let i = -1, len = 200; ++i < len;) {
    $scope.grid.push({
      id: i
    });
  };
  
  $scope.checkCrash = function(){
    if($scope.grid[$scope.charIndex].solid){
          $scope.wipeout = true;
          $scope.speed = 10000;
          $scope.topScore = window.localStorage.getItem('score');
          if(!$scope.topScore || $scope.topScore < $scope.score){
            $scope.topScore = $scope.score;
            window.localStorage.setItem('score', $scope.score);
          }
        $timeout( function(){
          $window.location.reload();
        }, 1000);
    }
  };
  
  $scope.fever = function(){
    $timeout( function(){
      $scope.feverTime = true;
      $scope.speed = 30;
    }, 120000);
  }
  $scope.fever();
  
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
        var popped = $scope.grid.pop();
        if(popped.solid){
          $scope.score = $scope.score + 900;
        }
      };
      
      $scope.forward();
    }, $scope.speed );
  }
  $scope.forward();
  
  
  $document.bind('keydown', function (e) {
    if($scope.wipeout){
      return;
    } else if(e.keyCode === 65 || e.keyCode === 37){
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
    } else if(e.keyCode === 75){
      $scope.speed = 120;
    }
  });
});
