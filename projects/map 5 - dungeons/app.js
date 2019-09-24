var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $timeout) {

  $scope.enterFrom = 's';
  $scope.facing = 'n';
  $scope.originalPlayer = {tile: 'player', solid: false};
  $scope.rooms = [
    {
      name: 'room1',
      map: [
        {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'door', door: 'n', solid: false}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'enemy1', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'door', door: 'w', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'door', door: 'e', solid: false},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'door', door: 's', solid: false}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true},
      ],
      northExit: {target: 'room2', active: false, from: 's'},
      eastExit: {target: 'room2', active: false, from: 'w'},
      southExit: {target: 'room2', active: false, from: 'n'},
      westExit: {target: 'room2', active: false, from: 'e'}
    },
    {
      name: 'room2',
      map: [
        {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'door', door: 'e', solid: false},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'door', door: 's', solid: false}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true},
      ],
      eastExit: {target: 'room3', active: false, from: 'w'},
      southExit: {target: 'room1', active: false, from: 'n'}
    },
    {
      name: 'room3',
      map: [
        {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: 'hole', solid: false}, {tile: 'hole', solid: false}, {tile: 'hole', solid: false}, {tile: '', solid: false}, {tile: 'hole', solid: false}, {tile: 'hole', solid: false}, {tile: 'hole', solid: false}, {tile: 'wall', solid: true},
        {tile: 'door', door: 'w', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true},
      ],
      westExit: {target: 'room2', active: false, from: 'e'}
    }
  ];
  
  //Enemy
  $scope.AI = function(dir){
    $timeout( function(){
      for (i = 0; i < $scope.currentRoom.map.length; i++) {
        if($scope.currentRoom.map[i].tile === 'enemy1'){
          if(dir === 'e'){
            if($scope.currentRoom.map[i+1].solid){
              $scope.currentRoom.map[i] = {tile: '', solid: false};
              $scope.currentRoom.map[i-1] = {tile: 'enemy1', solid: false}
              $scope.AI('w');
              return;
            } else{
              $scope.currentRoom.map[i] = {tile: '', solid: false};
              $scope.currentRoom.map[i+1] = {tile: 'enemy1', solid: false}
              $scope.AI('e');
              return;
            }
          }
          else if(dir === 'w'){
            if($scope.currentRoom.map[i-1].solid){
              $scope.currentRoom.map[i] = {tile: '', solid: false};
              $scope.currentRoom.map[i+1] = {tile: 'enemy1', solid: false}
              $scope.AI('e');
              return;
            } else{
              $scope.currentRoom.map[i] = {tile: '', solid: false};
              $scope.currentRoom.map[i-1] = {tile: 'enemy1', solid: false}
              $scope.AI('w');
              return;
            }
          }
        }
      }
    },700);
  }
  
  $scope.init = function(){
    $scope.currentRoom = angular.copy($scope.rooms[0]);
    $scope.AI('e');
    for (i = 0; i < $scope.currentRoom.map.length; i++) {
      if( $scope.currentRoom.map[i].tile === 'door' && $scope.enterFrom === $scope.currentRoom.map[i].door){
        $scope.currentRoom.map[i] = $scope.originalPlayer;
      }
    }
  }
  $scope.init();
  

  $scope.roomChange = function(exit){
    for (i = 0; i < $scope.rooms.length; i++) {
      
      if($scope.rooms[i].name === exit.target){
        $scope.currentRoom = angular.copy($scope.rooms[i]);
        $scope.AI('e');
        
        for (j = 0; j < $scope.currentRoom.map.length; j++) {
          if($scope.currentRoom.map[j].door === exit.from){
            $scope.currentRoom.map[j] = $scope.originalPlayer;
          }
        }
        
      }
    }
  }
  
  $scope.cleanupDupePlayers = function(){
    var index;
    for (i = 0; i < $scope.currentRoom.map.length; i++) {
      if($scope.currentRoom.map[i].tile === 'player'){
        index = i;
        $scope.currentRoom.map[i] = {tile: '', solid: false};
        console.log('found');
      }
    }
    console.log(index);
    $scope.currentRoom.map[index] = $scope.originalPlayer;
  };

  window.addEventListener('keyup', function(e){
      var playerTile = {
        index: 0,
        tile: ''
      };
      var originalRoom = '';
      var nrOfPlayerSprites = 0;
      
      for (i = 0; i < $scope.currentRoom.map.length; i++) {
        if($scope.currentRoom.map[i].tile === 'player'){
          playerTile.tile = $scope.currentRoom.map[i].tile;
          playerTile.index = i;
          nrOfPlayerSprites++;
        }
      }
      
      for (j = 0; j < $scope.rooms.length; j++) {
        if($scope.rooms[j].name === $scope.currentRoom.name){
          originalRoom = $scope.rooms[j];
        }
      }
      
      var timing = 100;
        if (e.key === "ArrowRight") {
          $scope.cleanupDupePlayers();
          $scope.facing = 'e';
          $timeout( function(){
            if($scope.currentRoom.map[playerTile.index+1].door && $scope.currentRoom.eastExit){
              $scope.roomChange($scope.currentRoom.eastExit);
            }
            else if(!$scope.currentRoom.map[playerTile.index+1].solid){
              $scope.currentRoom.map[playerTile.index] = originalRoom.map[playerTile.index];
              $scope.currentRoom.map[playerTile.index+1] = $scope.originalPlayer;
            }
          }, timing );
        }
        if (e.key === "ArrowLeft") {
          $scope.cleanupDupePlayers();
          $scope.facing = 'w';
          $timeout( function(){
            if($scope.currentRoom.map[playerTile.index-1].door && $scope.currentRoom.westExit){
              $scope.roomChange($scope.currentRoom.westExit);
            }
            else if(!$scope.currentRoom.map[playerTile.index-1].solid){
              $scope.currentRoom.map[playerTile.index] = originalRoom.map[playerTile.index];
              $scope.currentRoom.map[playerTile.index-1] = $scope.originalPlayer;
            }
          }, timing );
        }
        if (e.key === "ArrowUp") {
          $scope.cleanupDupePlayers();
          $scope.facing = 'n';
          $timeout( function(){
            if($scope.currentRoom.map[playerTile.index-9].door && $scope.currentRoom.northExit){
              $scope.roomChange($scope.currentRoom.northExit);
            }
            else if(!$scope.currentRoom.map[playerTile.index-9].solid){
              $scope.currentRoom.map[playerTile.index] = originalRoom.map[playerTile.index];
              $scope.currentRoom.map[playerTile.index-9] = $scope.originalPlayer;
            }
          }, timing );
        }
        if (e.key === "ArrowDown") {
          $scope.cleanupDupePlayers();
          $scope.facing = 's';
          $timeout( function(){
            if($scope.currentRoom.map[playerTile.index+9].door && $scope.currentRoom.southExit){
              $scope.roomChange($scope.currentRoom.southExit);
            }
            else if(!$scope.currentRoom.map[playerTile.index+9].solid){
              $scope.currentRoom.map[playerTile.index] = originalRoom.map[playerTile.index];
              $scope.currentRoom.map[playerTile.index+9] = $scope.originalPlayer;
            }
          }, timing );
        }
      
      //poi
      if (e.key === "Enter") {
        $scope.$digest();
      }
  });


});
