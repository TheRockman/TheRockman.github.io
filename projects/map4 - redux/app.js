var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $timeout, $document, $window) {
  $scope.origin = 197;
  $scope.charIndex = $scope.origin;
  $scope.sound = window.localStorage.getItem('sound');
  $scope.wipeout = false;
  var audio = new Audio('pew1.mp3');
  $scope.topScore = window.localStorage.getItem('score');
  $scope.lastScore = window.localStorage.getItem('lastscore');
  $scope.score = 0;
  $scope.speed = 30;
  $scope.walls = 100;
  $scope.jumping = false;
  $scope.grid = [];
  for (let i = -1, len = 200; ++i < len;) {
    $scope.grid.push({
      id: i
    });
  };
  
  $scope.checkCrash = function(){
    if($scope.grid[$scope.charIndex].solid && !$scope.jumping){
      $scope.wipeout = true;
      $scope.speed = 10000;
      $scope.topScore = window.localStorage.getItem('score');
      if(!$scope.topScore || $scope.topScore < $scope.score){
        $scope.topScore = $scope.score;
        window.localStorage.setItem('score', $scope.score);
      }
      window.localStorage.setItem('lastscore', $scope.score);
      $timeout( function(){
        $window.location.reload();
      }, 100);
    }
  };
  
  $scope.toggleSound = function(){
    $scope.sound = !$scope.sound;
    window.localStorage.setItem('sound', $scope.sound);
  }
  
  //forward
  $scope.forward = function(){
    $scope.checkCrash();
    $timeout( function(){
      for (let i = -1, len = 5; ++i < len;) {
        $scope.grid.unshift(
          {
            id: new Date(),
            solid: Math.floor(Math.random() * $scope.walls) + 1 === $scope.walls
          }
        );
        
        if($scope.sound){
          if($scope.grid[0].solid || $scope.grid[1].solid || $scope.grid[2].solid || $scope.grid[3].solid || $scope.grid[4].solid){
            $timeout( function(){
              audio.play();
            }, 2000);
          }
        }

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
      if($scope.charIndex > $scope.origin - 2){
        $scope.charIndex--;
        $scope.checkCrash();
      }
    } else if(e.keyCode === 68 || e.keyCode === 39){
      //right
      console.log('right');
      if($scope.charIndex < $scope.origin + 2){
        $scope.charIndex++;
        $scope.checkCrash();
      }
    } else if(e.keyCode === 75){
      // $scope.speed = 300;
      if($scope.jumping === false){
        $scope.jumping = true;
        $timeout( function(){
          $scope.jumping = false;
        }, $scope.speed*10);
      }
    }
  });
});
