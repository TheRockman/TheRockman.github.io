var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $timeout) {
  $scope.grid = [];
  
  generateTiles = function(){
    var gridSize = 11;

    var x,y;
    for (y = 0; y <= gridSize; y++) {
      for (x = 0; x <= gridSize; x++) {
        $scope.grid.push({
          x: x,
          y: y
        })
      }
    }
    for (i = 0; i < $scope.grid.length; i++) {
      //top row
      if($scope.grid[i].x === 1 && $scope.grid[i].y === 0){
        $scope.grid[i].name = 'boardwalk';
        $scope.grid[i].color = '#ef1d26';
      }
      if($scope.grid[i].x === 3 && $scope.grid[i].y === 0){
        $scope.grid[i].name = 'boardwalk';
        $scope.grid[i].color = '#ef1d26';
      }
      if($scope.grid[i].x === 4 && $scope.grid[i].y === 0){
        $scope.grid[i].name = 'boardwalk';
        $scope.grid[i].color = '#ef1d26';
      }
      if($scope.grid[i].x === 6 && $scope.grid[i].y === 0){
        $scope.grid[i].name = 'boardwalk';
        $scope.grid[i].color = '#fef200';
      }
      if($scope.grid[i].x === 7 && $scope.grid[i].y === 0){
        $scope.grid[i].name = 'boardwalk';
        $scope.grid[i].color = '#fef200';
      }
      if($scope.grid[i].x === 9 && $scope.grid[i].y === 0){
        $scope.grid[i].name = 'boardwalk';
        $scope.grid[i].color = '#fef200';
      }
      
      //left col
      if($scope.grid[i].x === 0 && $scope.grid[i].y === 1){
        $scope.grid[i].name = 'boardwalk';
        $scope.grid[i].color = '#f9931d';
      }
      if($scope.grid[i].x === 0 && $scope.grid[i].y === 2){
        $scope.grid[i].name = 'boardwalk';
        $scope.grid[i].color = '#f9931d';
      }
      if($scope.grid[i].x === 0 && $scope.grid[i].y === 4){
        $scope.grid[i].name = 'boardwalk';
        $scope.grid[i].color = '#f9931d';
      }
      if($scope.grid[i].x === 0 && $scope.grid[i].y === 6){
        $scope.grid[i].name = 'boardwalk';
        $scope.grid[i].color = '#dc3c94';
      }
      if($scope.grid[i].x === 0 && $scope.grid[i].y === 7){
        $scope.grid[i].name = 'boardwalk';
        $scope.grid[i].color = '#dc3c94';
      }
      if($scope.grid[i].x === 0 && $scope.grid[i].y === 9){
        $scope.grid[i].name = 'boardwalk';
        $scope.grid[i].color = '#dc3c94';
      }
      
      //bottom row
      if($scope.grid[i].x === 1 && $scope.grid[i].y === 11){
        $scope.grid[i].name = 'boardwalk';
        $scope.grid[i].color = '#aae2f9';
      }
      if($scope.grid[i].x === 2 && $scope.grid[i].y === 11){
        $scope.grid[i].name = 'boardwalk';
        $scope.grid[i].color = '#aae2f9';
      }
      if($scope.grid[i].x === 4 && $scope.grid[i].y === 11){
        $scope.grid[i].name = 'boardwalk';
        $scope.grid[i].color = '#aae2f9';
      }
      if($scope.grid[i].x === 7 && $scope.grid[i].y === 11){
        $scope.grid[i].name = 'boardwalk';
        $scope.grid[i].color = '#935433';
      }
      if($scope.grid[i].x === 9 && $scope.grid[i].y === 11){
        $scope.grid[i].name = 'boardwalk';
        $scope.grid[i].color = '#935433';
      }
      
      //right col
      if($scope.grid[i].x === 11 && $scope.grid[i].y === 1){
        $scope.grid[i].name = 'boardwalk';
        $scope.grid[i].color = '#1db159';
      }
      if($scope.grid[i].x === 11 && $scope.grid[i].y === 2){
        $scope.grid[i].name = 'boardwalk';
        $scope.grid[i].color = '#1db159';
      }
      if($scope.grid[i].x === 11 && $scope.grid[i].y === 4){
        $scope.grid[i].name = 'boardwalk';
        $scope.grid[i].color = '#1db159';
      }
      if($scope.grid[i].x === 11 && $scope.grid[i].y === 7){
        $scope.grid[i].name = 'boardwalk';
        $scope.grid[i].color = '#0173bd';
      }
      if($scope.grid[i].x === 11 && $scope.grid[i].y === 9){
        $scope.grid[i].name = 'boardwalk';
        $scope.grid[i].color = '#0173bd';
      }
      
      if($scope.grid[i].x === 11 && $scope.grid[i].y == 11){
        $scope.grid[i].hasPlayerOne = true;
        $scope.grid[i].hasPlayerTwo = true;
      }
    }
  }
  generateTiles();
  
  $scope.findPlayer = function(){
    var players = {
      one: {},
      two: {}
    }
    
    for (i = 0; i < $scope.grid.length; i++) {
      if($scope.grid[i].hasPlayerOne){
        players.one = $scope.grid[i];
        players.one.index = i;
      }
      if($scope.grid[i].hasPlayerTwo){
        players.two = $scope.grid[i];
        players.two.index = i;
      }
    }
    return players;
  }
  
  $scope.rollAndGo = function(){
    var diceRoll = Math.floor( Math.random() * 6 ) +1;
    var index;
    
    console.log('rolled ', diceRoll);
    
    for (j = 0; j < diceRoll; j++) {
      var players = $scope.findPlayer();
      
      if(players.one.y === 11 && players.one.x > 0){
        //bottom row
        console.log('moving bottom');
        players.one.hasPlayerOne = undefined;
        $scope.grid[players.one.index - 1].hasPlayerOne = true;
        
      } else if (players.one.x === 0 && players.one.y === 11){
        //left corner
        console.log('left corner');
        players.one.hasPlayerOne = undefined;
        $scope.grid[players.one.index - 11].hasPlayerOne = true;
        
      } else if(players.one.x === 0 && players.one.y < 11){
        //left corner
        console.log('moving up left');
        players.one.hasPlayerOne = undefined;
        $scope.grid[players.one.index - 11].hasPlayerOne = true;
      }
      
    }
  }

});
