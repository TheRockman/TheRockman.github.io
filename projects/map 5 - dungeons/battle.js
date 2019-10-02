var app = angular.module("myApp", []); app.controller("battleCtrl", function($scope, $timeout) {

  $scope.feed;
  $scope.menuIndex = 0;
  $scope.myTurn = true;
  $scope.timing = 3000;
  $scope.player = {
    name: 'GUY MONTAG',
    HP: 100,
    AC: 16,
    moves: [
      {
        name: 'boop',
        ACmod: 2,
        dmgMod: 20
      },
      {
        name: 'dunk',
        ACmod: 1,
        dmgMod: 5
      },
      {
        name: 'lick',
        ACmod: 0,
        dmgMod: 10
      },
      {
        name: 'patch',
        ACmod: 0,
        dmgMod: -25
      }
    ]
  };
  $scope.enemy = {
    name: 'WINSTON SMITH',
    HP: 100,
    AC: 12,
    moves: [
      {
        name: 'crunch',
        ACmod: 1,
        dmgMod: 30
      },
      {
        name: 'snap',
        ACmod: 0,
        dmgMod: 5
      },
      {
        name: 'crash',
        ACmod: 0,
        dmgMod: 5
      },
      {
        name: 'mash',
        ACmod: 0,
        dmgMod: 5
      }
    ]
  };

  $scope.endBattleTrigger = function(){
    console.log('its over...');
    $timeout( function(){
      document.location.replace('index.html');
    }, 1000 );
  }

  $scope.log = function(msg){
    $scope.feed = msg;
    $timeout( function(){$scope.feed = null;}, $scope.timing );
  }
  $scope.log($scope.enemy.name +' appeared!');

  $scope.dice = function(sides){
    return Math.floor(Math.random() * sides) + 1;
  }

  $scope.ai = function(){
    if ($scope.player.HP < 1 || $scope.enemy.HP < 1) {
      $scope.endBattleTrigger();
    }
    var index = Math.floor(Math.random() * 3) + 1;
    var move = $scope.enemy.moves[index];
    if ($scope.dice(20) + move.ACmod > $scope.player.AC) {
      $timeout( function(){
        //HIT
        $scope.player.HP = $scope.player.HP - ($scope.dice(20) + move.dmgMod);
        $scope.log($scope.enemy.name + ' ' + move.name +'ed ' + $scope.player.name + '!');
        $scope.enemy.charge = true;
        $scope.player.dmg = true;
        $timeout( function(){
          $scope.myTurn = true;
          $scope.enemy.charge = false;
          $scope.player.dmg = false;
        }, $scope.timing );
      }, $scope.timing );
    } else{
      //MISS
      if ($scope.player.HP < 1 || $scope.enemy.HP < 1) {
        $scope.endBattleTrigger();
      }
      $scope.log($scope.enemy.name +' missed.');
      $timeout( function(){
        $scope.myTurn = true;
        $scope.enemy.charge = false;
        $scope.player.dmg = false;
      }, $scope.timing);
    }
  }

  window.addEventListener('keyup', function(e){
    if(e.key === 'ArrowUp'){
      $scope.menuIndex--;
      if($scope.menuIndex < 0){
        $scope.menuIndex = $scope.player.moves.length -1;
      }
    }
    else if(e.key === 'ArrowDown'){
      $scope.menuIndex++;
      if($scope.menuIndex > $scope.player.moves.length -1){
        $scope.menuIndex = 0;
      }
    }
    else if(e.key === '9'){
      $scope.endBattleTrigger();
    }
    else if(e.key === 'Enter'){
      if($scope.myTurn){
        var move = $scope.player.moves[$scope.menuIndex];
        if ($scope.dice(20) + move.ACmod > $scope.enemy.AC ) {
          //HIT
          $scope.myTurn = false;
          if (move.dmgMod > 0) {
            //DMG MOVE
            $scope.log($scope.player.name + ' ' +  move.name + 'ed '+ $scope.enemy.name +'!');
            $scope.enemy.HP = $scope.enemy.HP - ($scope.dice(20) + move.dmgMod);
          } else{
            //HEAL
            $scope.log($scope.player.name + ' regained some energy!');
            $scope.player.HP = $scope.player.HP - ($scope.dice(20) + move.dmgMod);
          }
          $scope.menuIndex = 0;
          $scope.player.charge = true;
          $scope.enemy.dmg = true;
          $timeout( function(){
            $scope.player.charge = false;
            $scope.enemy.dmg = false;
            $scope.ai();
          }, $scope.timing );
        } else {
          //MISS
          $scope.myTurn = false;
          $scope.log($scope.player.name + ' missed.');
          $scope.menuIndex = 0;
          $timeout( function(){
            $scope.player.charge = false;
            $scope.enemy.dmg = false;
            $scope.ai();
          }, $scope.timing );
        }
      }
    }

    $scope.$digest();
  });
});
