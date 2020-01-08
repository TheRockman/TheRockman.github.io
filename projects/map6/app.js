var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $timeout) {
  
  $scope.grid = [];
  $scope.playerPos = {'transform': 'translate(0px, 0px) translateZ(4px) scale(1) rotateZ(-45deg) rotateX(16deg)'};
  $scope.playerCord = {x:0, y:0};
  $scope.prevDir;
  
  generateTiles = function(){
    var gridSize = 12;
    var tileSize = 16;
    
    $scope.gridStyle = {
      "width" : gridSize*tileSize+tileSize+"px",
      "height" : gridSize*tileSize+tileSize+"px"
    }

    var x,y;
    for (y = 0; y <= gridSize; y++) {
      for (x = 0; x <= gridSize; x++) {
        
        $scope.grid.push({
          x: x,
          y: y,
          status: null,
        })
        
      }
    }
  }
  generateTiles();
  
  $scope.grid[100].status = 'blocked';
  $scope.grid[88].status = 'blocked';
  
  $scope.moveToTile = function(target){
    explore(target);
  };
  
  $scope.exploreFailedSoTry;
  
  var explore = function(target, failed){
    var west = {x: $scope.playerCord.x-1, y: $scope.playerCord.y};
    var north = {x: $scope.playerCord.x, y: $scope.playerCord.y-1};
    var east = {x: $scope.playerCord.x+1, y: $scope.playerCord.y};
    var south = {x: $scope.playerCord.x, y: $scope.playerCord.y+1};
    
    if ($scope.exploreFailedSoTry) {
      $scope.exploreFailedSoTry = null;
      
        if(target.y < $scope.playerCord.y){
          if(checkLocation(west)){
            $scope.walk(west);
            $scope.dir = 'south';
          } 
        } else if(target.y > $scope.playerCord.y){
          if(checkLocation(east)){
            $scope.walk(east);
            $scope.dir = 'north';
          }
        } else if(target.x < $scope.playerCord.x){
          if(checkLocation(north)){
            $scope.walk(north);
            $scope.dir = 'east';
          }
        } else if(target.x > $scope.playerCord.x){
          if(checkLocation(south)){
            $scope.walk(south);
            $scope.dir = 'west';
          }
        }
        if(target.x != $scope.playerCord.x || target.y != $scope.playerCord.y){
          $timeout( function(){
            explore(target)
          }, 500 );
        }
        return;
    }
    
      if(target.x < $scope.playerCord.x){
        if(checkLocation(west)){
          $scope.walk(west);
          $scope.dir = 'west';
        } else{
          $scope.exploreFailedSoTry = east;
        }
      } else if(target.x > $scope.playerCord.x){
        if(checkLocation(east)){
          $scope.walk(east);
          $scope.dir = 'east';
        } else {
          $scope.exploreFailedSoTry = west;
        }
      } else if(target.y > $scope.playerCord.y){
        if(checkLocation(south)){
          $scope.walk(south);
          $scope.dir = 'south';
        } else{
          $scope.exploreFailedSoTry = north;
        }
      } else if(target.y < $scope.playerCord.y){
        if(checkLocation(north)){
          $scope.walk(north);
          $scope.dir = 'north';
        } else{
          $scope.exploreFailedSoTry = south;
        }
      }
      
      if(target.x != $scope.playerCord.x || target.y != $scope.playerCord.y){
        $timeout( function(){
          explore(target)
        }, 500 );
      }
    
    
  }
  
  var checkLocation = function(location){
    var targetTile;
    
    for (i = 0; i < $scope.grid.length; i++) {
      if(location.x === $scope.grid[i].x && location.y === $scope.grid[i].y){
        var targetTile = $scope.grid[i];
      }
    }
    
    if(targetTile.status === 'blocked'){
      return false;
    }
    if(targetTile.x < 0 && targetTile.x > gridSize){
      return false;
    }
    if(targetTile.y < 0 && targetTile.y > gridSize){
      return false;
    }
    return true;
  }
  
  $scope.walk = function(dir){
    console.log('dir',dir);
    $scope.playerPos = {
      'transform': 'translate(' + dir.x*16 + 'px, ' + dir.y*16 + 'px) translateZ(4px) scale(1) rotateZ(-45deg) rotateX(16deg)'
    }
    $scope.playerCord = {x:dir.x, y:dir.y};
  }
  
});
