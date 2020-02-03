var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
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
    }
  }
  generateTiles();
  
  $scope.setTile = function(tile){
    $scope.currentTile = tile;
  }
});
