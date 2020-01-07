var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
  
  $scope.grid = [];
  $scope.player1Pos;
  $scope.player2Pos;
  $scope.player3Pos;
  
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
          y: y
        })
        
      }
    }
  }
  generateTiles();
  
  $scope.moveToTile = function(tile){
    
    if($scope.current === 'player1'){
      $scope.player1Pos = {
        'transform': 'translate(' + tile.x*16 + 'px, ' + tile.y*16 + 'px) translateZ(4px) scale(1) rotateZ(-45deg) rotateX(16deg)',
        'z-index': tile.y+1
      }
    } else if($scope.current === 'player2') {
      $scope.player2Pos = {
        'transform': 'translate(' + tile.x*16 + 'px, ' + tile.y*16 + 'px) translateZ(4px) scale(1) rotateZ(-45deg) rotateX(16deg)',
        'z-index': tile.y+1
      }
    } else {
      $scope.player3Pos = {
        'transform': 'translate(' + tile.x*16 + 'px, ' + tile.y*16 + 'px) translateZ(4px) scale(1) rotateZ(-45deg) rotateX(16deg)',
        'z-index': tile.y+1
      }
    }

  }
});
