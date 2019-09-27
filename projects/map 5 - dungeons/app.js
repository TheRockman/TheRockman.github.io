var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $timeout) {

  $scope.enterFrom = 's';
  $scope.facing = 'n';
  $scope.death = false;
  $scope.originalPlayer = {tile: 'player', solid: false};
  $scope.showMSG = false;
  $scope.saveState;
  $scope.msg = '';
  $scope.rooms = [
    {
      name: 'room1',
      map: [
        {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'door', door: 'n', solid: false}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: 'enemy1', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'door', door: 'e', solid: false},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true},
      ],
      northExit: {target: 'room2', active: false, from: 's'},
      eastExit: {target: 'room4', active: false, from: 'w'},
    },
    {
      name: 'room2',
      map: [
        {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'sign', msg: 'Im a sign, signs have text on them... most of the time.', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
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
        {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: 'pillar', msg:'A strange pillar with carved runes along the base. Wonder what its for', solid: true}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'door', door: 'w', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'door', door: 's', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true},
      ],
      westExit: {target: 'room2', active: false, from: 'e'},
      southExit: {target: 'room4', active: false, from: 'n'}
    },
    {
      name: 'room4',
      map: [
        {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'door', door: 'n', solid: false}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: 'hole', solid: true}, {tile: 'hole', solid: true}, {tile: 'hole', solid: true}, {tile: '', solid: false}, {tile: 'hole', solid: true}, {tile: 'hole', solid: true}, {tile: 'hole', solid: true}, {tile: 'wall', solid: true},
        {tile: 'door', door: 'w', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true},
      ],
      westExit: {target: 'room1', active: false, from: 'e'},
      northExit: {target: 'room3', active: false, from: 's'}
    }
  ];
  
  //Enemy
  $scope.AI = function(dir){
    var timing = 700;
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
    }, timing);
  }
  
  $scope.save = function(){
    $scope.saveState = angular.copy($scope.currentRoom);
  }
  $scope.load = function(){
    $scope.death = false;
    $scope.showMSG = false;
    $scope.currentRoom = angular.copy($scope.saveState);
  }
  
  $scope.init = function(){
    $scope.currentRoom = angular.copy($scope.rooms[0]);
    // $scope.AI('e');
    $scope.currentRoom.map[67] = $scope.originalPlayer;
    $scope.save();
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
      
      var timing = 0;
        if (e.key === "ArrowRight") {
          $scope.cleanupDupePlayers();
          if($scope.showMSG || $scope.death){return;}
          $timeout( function(){
            if($scope.currentRoom.map[playerTile.index+1].door && $scope.currentRoom.eastExit){
              $scope.roomChange($scope.currentRoom.eastExit);
            }
            else if(!$scope.currentRoom.map[playerTile.index+1].solid){
              $scope.facing = 'e';
              $scope.currentRoom.map[playerTile.index] = originalRoom.map[playerTile.index];
              $scope.currentRoom.map[playerTile.index+1] = $scope.originalPlayer;
            }
            if(originalRoom.map[playerTile.index+1].tile === 'hole'){
              $scope.facing = 'e';
              $scope.death = true;
            }
          }, timing );
        }
        if (e.key === "ArrowLeft") {
          if($scope.showMSG || $scope.death){return;}
          $scope.cleanupDupePlayers();
          $timeout( function(){
            if($scope.currentRoom.map[playerTile.index-1].door && $scope.currentRoom.westExit){
              $scope.roomChange($scope.currentRoom.westExit);
            }
            else if(!$scope.currentRoom.map[playerTile.index-1].solid){
              $scope.facing = 'w';
              $scope.currentRoom.map[playerTile.index] = originalRoom.map[playerTile.index];
              $scope.currentRoom.map[playerTile.index-1] = $scope.originalPlayer;
            }
            if(originalRoom.map[playerTile.index-1].tile === 'hole'){
              $scope.facing = 'w';
              $scope.death = true;
            }
          }, timing );
        }
        if (e.key === "ArrowUp") {
          if($scope.showMSG || $scope.death){return;}
          $scope.cleanupDupePlayers();
          $timeout( function(){
            if($scope.currentRoom.map[playerTile.index-9].door && $scope.currentRoom.northExit){
              $scope.roomChange($scope.currentRoom.northExit);
            }
            else if(!$scope.currentRoom.map[playerTile.index-9].solid){
              $scope.facing = 'n';
              $scope.currentRoom.map[playerTile.index] = originalRoom.map[playerTile.index];
              $scope.currentRoom.map[playerTile.index-9] = $scope.originalPlayer;
            }
            if(originalRoom.map[playerTile.index-9].tile === 'hole'){
              $scope.facing = 'n';
              $scope.death = true;
            }
          }, timing );
        }
        if (e.key === "ArrowDown") {
          if($scope.showMSG || $scope.death){return;}
          $scope.cleanupDupePlayers();
          $timeout( function(){
            if($scope.currentRoom.map[playerTile.index+9].door && $scope.currentRoom.southExit){
              $scope.roomChange($scope.currentRoom.southExit);
            }
            else if(!$scope.currentRoom.map[playerTile.index+9].solid){
              $scope.facing = 's';
              $scope.currentRoom.map[playerTile.index] = originalRoom.map[playerTile.index];
              $scope.currentRoom.map[playerTile.index+9] = $scope.originalPlayer;
            }
            if(originalRoom.map[playerTile.index+9].tile === 'hole'){
              $scope.facing = 's';
              $scope.death = true;
            }
          }, timing );
        }
      
        if (e.key === "Enter") {
          var mod = 0;
          switch ($scope.facing) {
            case 'n':
            mod = playerTile.index-9;
            break;
          case 'e':
            mod = playerTile.index+1;
            break;
          case 's':
            mod = playerTile.index+9;
            break;
          case 'w':
            mod = playerTile.index-1;
            break;
          default:
          console.log('Sorry');
        }
        
        if($scope.currentRoom.map[mod].msg && $scope.showMSG === false){
             $scope.msg = $scope.currentRoom.map[mod].msg;
             $scope.showMSG = true;
        } else if ( $scope.currentRoom.map[mod].msg && $scope.showMSG === true){
             $scope.msg = '';
             $scope.showMSG = false;
        }
        $scope.$digest();
      }
  });


});
