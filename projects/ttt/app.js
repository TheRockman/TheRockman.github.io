var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope) {
    
    $scope.player = 'X';
    $scope.msg = 'X goes first';
    
    $scope.grid = [];
    for (let i = -1, len = 100; ++i < len;) {
      $scope.grid.push({
        id: i,
        state: null
      })
      
      if(
        i <11 ||
        i > 88 ||
        i % 10 === 0 ||
        i % 10 === 9
      ){
        $scope.grid[i].block = true;
      }
    };
    
    $scope.winChceck = function(){
      for (let i = -1, len = $scope.grid.length; ++i < len;) {
        let ct = $scope.grid[i];
        let line = 10;
        let g = $scope.grid;
        
        // vert down
        if(
          ct.state &&
          g[ct.id + (line*1)].state === ct.state &&
          g[ct.id + (line*2)].state === ct.state &&
          g[ct.id + (line*3)].state === ct.state
        ){
          return true;
        }
        // vert up
        if(
          ct.state &&
          g[ct.id - (line*1)].state === ct.state &&
          g[ct.id - (line*2)].state === ct.state &&
          g[ct.id - (line*3)].state === ct.state
        ){
          return true;
        }
        // hor right
        if(
          ct.state &&
          g[ct.id +1].state === ct.state &&
          g[ct.id +2].state === ct.state &&
          g[ct.id +3].state === ct.state
        ){
          return true;
        }
        // hor left
        if(
          ct.state &&
          g[ct.id -1].state === ct.state &&
          g[ct.id -2].state === ct.state &&
          g[ct.id -3].state === ct.state
        ){
          return true;
        }
        // dia top right
        if(
          ct.state &&
          g[ct.id + 9].state === ct.state &&
          g[ct.id + 18].state === ct.state &&
          g[ct.id + 27].state === ct.state
        ){
          return true;
        }
        // dia top left
        if(
          ct.state &&
          g[ct.id - 9].state === ct.state &&
          g[ct.id - 18].state === ct.state &&
          g[ct.id - 27].state === ct.state
        ){
          return true;
        }
        // dia bot right
        if(
          ct.state &&
          g[ct.id - 11].state === ct.state &&
          g[ct.id - 22].state === ct.state &&
          g[ct.id - 33].state === ct.state
        ){
          return true;
        }
        // dia bot left
        if(
          ct.state &&
          g[ct.id + 11].state === ct.state &&
          g[ct.id + 22].state === ct.state &&
          g[ct.id + 33].state === ct.state
        ){
          return true;
        }
      };
      return false;
    }
    
    $scope.setState = function(tile){
      if(!tile.block){
        if(tile.state === null){
          tile.state = $scope.player;
        }
        if($scope.winChceck()){
          $scope.gameEnd = true;
          $scope.msg = $scope.player + ' wins!';
        }
        
        if(!$scope.gameEnd){
          if($scope.player === 'X'){
            $scope.player = 'O';
            $scope.msg = 'O´s turn';
          } else{
            $scope.player = 'X';
            $scope.msg = 'X´s turn';
          }
        }
      }
    }
  
});
