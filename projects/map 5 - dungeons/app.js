var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $window, $timeout) {

  $scope.enterFrom = 's';
  $scope.facing = 'n';
  $scope.death = false;
  $scope.originalPlayer = {tile: 'player', solid: false};
  $scope.pretpareToBattle = false;
  $scope.persist;
  $scope.saveState;

  $scope.showMSG = false;
  $scope.msgIndex = 0;
  $scope.msgChunks;
  $scope.msg = '';

  $scope.rooms = [
    {
      name: 'room1',
      map: [
        {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'door', door: 'n', solid: false}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: 'shrub', solid: true}, {tile: 'shrub', solid: true}, {tile: 'shrub', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: 'shrub', solid: true}, {tile: 'enemy1', solid: false}, {tile: 'shrub', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'door', door: 'e', solid: false},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: 'shrub', solid: true}, {tile: '', solid: false}, {tile: 'shrub', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: 'shrub', solid: true}, {tile: 'shrub', solid: true}, {tile: 'shrub', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
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
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'sign', msg: 'Its a sign, signs have text on them*This one says "Hello".', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
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
        {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'door', door: 'n', solid: false}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true},
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
      southExit: {target: 'room4', active: false, from: 'n'},
      northExit: {target: 'room5', active: false, from: 's'}
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
    },
    {
      name: 'room5',
      map: [
        {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: false}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: 'pillar', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'pillar', solid: true}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'enemy1', msg:'Hello there!*As you can see im a bird*KA-KAAAW!!*Have you seen my friend Kevin?', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: 'pillar', solid: true}, {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: 'wall', solid: true}, {tile: 'pillar', solid: true}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: '', solid: false}, {tile: 'wall', solid: true},
        {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'door', door: 's', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true}, {tile: 'wall', solid: true},
      ],
      southExit: {target: 'room3', active: false, from: 'n'}
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

  $scope.battleTrigger= function(){
    console.log('here we go...');
    $scope.pretpareToBattle = true;
    $timeout( function(){
      localStorage.setItem('saveState', JSON.stringify($scope.currentRoom) );
      document.location.replace('battle.html');
    }, 1000 );
  }

  $scope.init = function(){
    var prevState = localStorage.getItem('saveState');
    if(!prevState){
      $scope.currentRoom = angular.copy($scope.rooms[0]);
      // $scope.AI('e');
      $scope.currentRoom.map[42] = $scope.originalPlayer;
      $scope.save();
    } else {
      //from battle
      $scope.death = false;
      $scope.showMSG = false;
      $scope.currentRoom = JSON.parse(prevState);
    }
  }
  $scope.init();


  $scope.roomChange = function(exit){
    for (i = 0; i < $scope.rooms.length; i++) {

      if($scope.rooms[i].name === exit.target){
        $scope.currentRoom = angular.copy($scope.rooms[i]);
        $scope.AI();

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
            $scope.facing = 'e';
            if($scope.currentRoom.map[playerTile.index+1].door && $scope.currentRoom.eastExit){
              $scope.roomChange($scope.currentRoom.eastExit);
            }
            else if(!$scope.currentRoom.map[playerTile.index+1].solid){
              $scope.currentRoom.map[playerTile.index] = originalRoom.map[playerTile.index];
              $scope.persist = originalRoom.map[playerTile.index+1].persist;
              $scope.currentRoom.map[playerTile.index+1] = $scope.originalPlayer;
            }
            if(originalRoom.map[playerTile.index+1].tile === 'hole'){
              $scope.death = true;
            }
          }, timing );
        }
        if (e.key === "ArrowLeft") {
          if($scope.showMSG || $scope.death){return;}
          $scope.cleanupDupePlayers();
          $timeout( function(){
            $scope.facing = 'w';
            if($scope.currentRoom.map[playerTile.index-1].door && $scope.currentRoom.westExit){
              $scope.roomChange($scope.currentRoom.westExit);
            }
            else if(!$scope.currentRoom.map[playerTile.index-1].solid){
              $scope.currentRoom.map[playerTile.index] = originalRoom.map[playerTile.index];
              $scope.persist = originalRoom.map[playerTile.index-1].persist;
              $scope.currentRoom.map[playerTile.index-1] = $scope.originalPlayer;
            }
            if(originalRoom.map[playerTile.index-1].tile === 'hole'){
              $scope.death = true;
            }
          }, timing );
        }
        if (e.key === "ArrowUp") {
          if($scope.showMSG || $scope.death){return;}
          $scope.cleanupDupePlayers();
          $timeout( function(){
            $scope.facing = 'n';
            if($scope.currentRoom.map[playerTile.index-9].door && $scope.currentRoom.northExit){
              $scope.roomChange($scope.currentRoom.northExit);
            }
            else if(!$scope.currentRoom.map[playerTile.index-9].solid){
              $scope.currentRoom.map[playerTile.index] = originalRoom.map[playerTile.index];
              $scope.persist = originalRoom.map[playerTile.index-9].persist;
              $scope.currentRoom.map[playerTile.index-9] = $scope.originalPlayer;
            }
            if(originalRoom.map[playerTile.index-9].tile === 'hole'){
              $scope.death = true;
            }
          }, timing );
        }
        if (e.key === "ArrowDown") {
          if($scope.showMSG || $scope.death){return;}
          $scope.cleanupDupePlayers();
          $timeout( function(){
            $scope.facing = 's';
            if($scope.currentRoom.map[playerTile.index+9].door && $scope.currentRoom.southExit){
              $scope.roomChange($scope.currentRoom.southExit);
            }
            else if(!$scope.currentRoom.map[playerTile.index+9].solid){
              $scope.currentRoom.map[playerTile.index] = originalRoom.map[playerTile.index];
              $scope.persist = originalRoom.map[playerTile.index+9].persist;
              $scope.currentRoom.map[playerTile.index+9] = $scope.originalPlayer;
            }
            if(originalRoom.map[playerTile.index+9].tile === 'hole'){
              $scope.death = true;
            }
          }, timing );
        }

        if (e.key === '0') {
          $scope.battleTrigger();
          $scope.$digest();
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

        if($scope.currentRoom.map[mod].msg){
          $scope.msgChunks = $scope.currentRoom.map[mod].msg.split("*");
          $scope.msg = $scope.msgChunks[$scope.msgIndex];
          $scope.msgIndex++;
          console.log($scope.msg, $scope.msgIndex);
          $scope.showMSG = true;
        }
        if ( $scope.currentRoom.map[mod].msg && $scope.msgIndex === $scope.msgChunks.length+1){
          $scope.showMSG = false;
          $scope.msg = '';
          $scope.msgChunks = [];
          $scope.msgIndex = 0;
        }
        $scope.$digest();
      }
  });


});
