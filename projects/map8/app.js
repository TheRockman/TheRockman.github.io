var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope, $timeout) {

  $scope.cubes = [];
  $scope.currentPlayer = 'player1';

  $scope.player1 = {
    items: [
      {
        id: 0,
        itemName: 'fireball'
      }
    ],
    isInsideBuilding: false,
    placedATrap: false,
    hasASword: false,
    life: 5
  };

  $scope.allItems = ['fireball', 'sword', 'teleport', 'medkit', 'trap'];

  for (var i = 0; i < 100; i++) {
    $scope.cubes.push(
      {
        id: 0,
        displayState: 'default',
        state: 'default',
        door: false,
        edge: false,
        attack: false
      }
    );
  }

  function getId() {
    for (var i = 0; i < $scope.cubes.length; i++) {
      $scope.cubes[i].id = i;
      if ($scope.cubes[i].id === 44) {
        $scope.cubes[i].state = 'player1';
      }
      if (
        $scope.cubes[i].id < 10 ||
        $scope.cubes[i].id > 89 ||
        $scope.cubes[i].id === 10 ||
        $scope.cubes[i].id === 20 ||
        $scope.cubes[i].id === 30 ||
        $scope.cubes[i].id === 40 ||
        $scope.cubes[i].id === 50 ||
        $scope.cubes[i].id === 60 ||
        $scope.cubes[i].id === 70 ||
        $scope.cubes[i].id === 80 ||
        $scope.cubes[i].id === 19 ||
        $scope.cubes[i].id === 29 ||
        $scope.cubes[i].id === 39 ||
        $scope.cubes[i].id === 49 ||
        $scope.cubes[i].id === 59 ||
        $scope.cubes[i].id === 69 ||
        $scope.cubes[i].id === 79 ||
        $scope.cubes[i].id === 89) {
          $scope.cubes[i].edge = true;
      }
    }
  }
  $scope.cubes[11].displayState = 'interior';
  $scope.cubes[11].door = true;
  $scope.cubes[12].displayState = 'interior';
  $scope.cubes[13].displayState = 'interior';
  $scope.cubes[14].displayState = 'interior';
  $scope.cubes[22].displayState = 'interior';

  $scope.cubes[57].displayState = 'interior';
  $scope.cubes[57].door = true;
  $scope.cubes[56].displayState = 'interior';
  $scope.cubes[58].displayState = 'interior';
  $scope.cubes[66].displayState = 'interior';
  $scope.cubes[67].displayState = 'interior';
  $scope.cubes[68].displayState = 'interior';
  getId();

  $scope.getNumber = function(num) {
    return new Array(num);
  }

  //Game
  $scope.turn = function(playerName, target) {
    console.log($scope.currentPlayer);

    var player;
    if (target.state === 'player1' || target.state === 'player2' || target.edge) {
      return;
    }

    //buildings
    if(target.door){
      $scope.player1.isInsideBuilding = !$scope.player1.isInsideBuilding;
      console.log($scope.player1.isInsideBuilding);
    } else {
      if(target.displayState === 'interior' && !$scope.player1.isInsideBuilding){
        return;
      } else if(target.displayState !== 'interior' && $scope.player1.isInsideBuilding){
        return;
      }
    }


    var pl = null;
    if ($scope.currentPlayer == 'player1') {
      pl = $scope.player1;
    } else {
      pl = $scope.player1;
    }

    for (var i = 0; i < $scope.cubes.length; i++) {
      if ($scope.cubes[i].state === $scope.currentPlayer) {
        player = $scope.cubes[i];
      }
    }

    if (target.id === player.id+10 || target.id === player.id-10 || target.id === player.id+1 || target.id === player.id-1) {
      // if (target.state === 'item') {
      //   var rand = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
      //   $scope[playerName].items.push(
      //     {
      //       id:$scope[playerName].items.length+1,
      //       itemName: $scope.allItems[rand]
      //     }
      //   );
      // }

      target.state = player.state;
      player.state = 'default';

      // var itemRand = Math.floor(Math.random() * (99 - 0 + 1)) + 0;
      // if ($scope.cubes[itemRand].state === 'default' && !$scope.cubes[itemRand].edge) {
      //   $scope.cubes[itemRand].state = 'item';
      // }

      $scope.currentPlayer = 'player1';
    }
  };

  $scope.useItem = function (itemName) {
    var pl = null;
    if ($scope.currentPlayer == 'player1') {
      pl = $scope.player1;
      en = $scope.player2;
    } else {
      pl = $scope.player2;
      en = $scope.player1;
    }

    // ['fireball', 'sword', 'teleport', 'medkit', 'trap'];
    switch(itemName) {
    case 'fireball':
        shootFire();
        siftItems(pl.items, 'fireball');
        break;
    case 'sword':
        pl.hasASword = true;
        siftItems(pl.items, 'sword');
        break;
    case 'teleport':
        travelByTeleport();
        siftItems(pl.items, 'teleport');
        break;
    case 'medkit':
        pl.life = pl.life + 1;
        siftItems(pl.items, 'medkit');
        break;
    case 'trap':
        pl.placedATrap = true;
        siftItems(pl.items, 'trap');
        break;
    }
  }

  function shootFire() {
    if ($scope.currentPlayer == 'player1') {
      var pl = 'player1';
      var en = 'player2';
    } else {
      var pl = 'player2';
      var en = 'player1';
    }
    var player = null;
    var enemy = null;
    for (var i = 0; i < $scope.cubes.length; i++) {
      if ($scope.cubes[i].state === pl) {
        player = $scope.cubes[i];
      }
      if ($scope.cubes[i].state === en) {
        enemy = $scope.cubes[i];
      }
    }

    for (var i = 0; i < 4; i++) {
      var n = player.id + i;
      var e = player.id - i;
      var s = player.id + (10 * i);
      var w = player.id - (10 * i);
      if (n < $scope.cubes.length && n > 0) {
        player.attack = false;
        $scope.cubes[n].attack = true;
        if ($scope.cubes[n].state === en) {
          $scope[en].life = $scope[en].life -1;
        }
      }
      if (e < $scope.cubes.length && e > 0) {
        player.attack = false;
        $scope.cubes[e].attack = true;
        if ($scope.cubes[e].state === en) {
          $scope[en].life = $scope[en].life -1;
        }
      }
      if (s < $scope.cubes.length  && s > 0) {
        player.attack = false;
        $scope.cubes[s].attack = true;
        if ($scope.cubes[s].state === en) {
          $scope[en].life = $scope[en].life -1;
        }
      }
      if (w < $scope.cubes.length && w > 0) {
        player.attack = false;
        $scope.cubes[w].attack = true;
        if ($scope.cubes[w].state === en) {
          $scope[en].life = $scope[en].life -1;
        }
      }
    }

    $timeout(function(){
      for (var i = 0; i < $scope.cubes.length; i++) {
        $scope.cubes[i].attack = false;
      }

      console.log('p1:', $scope.player1.life, 'p2', $scope.player2.life);

      checkDeath();
    }, 1050 );
  }

  function travelByTeleport() {
    if ($scope.currentPlayer == 'player1') {
      var pl = 'player1';
      var en = 'player2';
    } else {
      var pl = 'player2';
      var en = 'player1';
    }

    var player = null;
    var enemy = null;

    for (var i = 0; i < $scope.cubes.length; i++) {
      if ($scope.cubes[i].state === pl) {
        player = $scope.cubes[i];
      }
      if ($scope.cubes[i].state === en) {
        enemy = $scope.cubes[i];
      }
    }

    var target = enemy.id;
    if (!$scope.cubes[enemy.id+1].edge) {
      target = enemy.id+1;
    } else if (!$scope.cubes[enemy.id+10].edge) {
      target = enemy.id+10;
    } else if (!$scope.cubes[enemy.id-1].edge) {
      target = enemy.id-1;
    } else {
      target = enemy.id-10;
    }

    if ($scope.cubes[target].state = 'default') {
      $scope.cubes[target].state = pl;
    } else if($scope.cubes[target].state = 'item'){
      $scope.cubes[taret].state = pl;
      var rand = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
      $scope[pl].items.push(
        {
          id:$scope[pl].items.length+1,
          itemName: $scope.allItems[rand]
        }
      );
    } else if ($scope.cubes[target].state = 'trap') {
      console.log('trap triggered');
      triggerTap($scope.cubes[target].state);
      $scope.cubes[target].state = pl;
    }
    player.state = 'default';
  }

  $scope.attack = function() {
    var player = null;
    for (var i = 0; i < $scope.cubes.length; i++) {
      if ($scope.cubes[i].state === $scope.currentPlayer) {
        player = $scope.cubes[i];
      }
    }
    if ($scope.currentPlayer == 'player1') {
      var pl = 'player1';
      var en = 'player2';
    } else {
      var pl = 'player2';
      var en = 'player1';
    }

    var n = player.id+1;
    var e = player.id+10;
    var s = player.id-1;
    var w = player.id-10;
    $scope.cubes[n].attack = true;
    $scope.cubes[e].attack = true;
    $scope.cubes[s].attack = true;
    $scope.cubes[w].attack = true;

    if ($scope.cubes[n].state === en || $scope.cubes[e].state === en || $scope.cubes[s].state === en || $scope.cubes[w].state === en) {
      if ($scope[pl].hasASword) {
        $scope[pl].hasASword = false;
        $scope[en].life = $scope[en].life - 2;
      } else {
        $scope[en].life = $scope[en].life - 1;
      }
    }

    $timeout( function(){
      $scope.cubes[n].attack = false;
      $scope.cubes[e].attack = false;
      $scope.cubes[s].attack = false;
      $scope.cubes[w].attack = false;

      console.log('p1:', $scope.player1.life, 'p2', $scope.player2.life);

      checkDeath();
      if ($scope.currentPlayer === 'player1') {
        $scope.currentPlayer = 'player2';
      } else{
        $scope.currentPlayer = 'player1';
      }
    }, 100 );
  }

  function triggerTap(target) {
    target.attack = true;
    $timeout(function(){
      target.attack = false;
    }, 1050 );
    $scope[$scope.currentPlayer].life = $scope[$scope.currentPlayer].life - 1;
    checkDeath();
  }

  function checkDeath() {
    if ($scope.player1.life < 1) {
      alert('game over - player 1 wins');
      location.reload();
    } else if ($scope.player2.life < 1) {
      alert('game over - player 2 wins');
      location.reload();
    }
  }

  function siftItems(arr, target) {
    for (var i = arr.length - 1; i >= 0; --i) {
        if (arr[i].itemName == target) {
            arr.splice(i,1);
            break;
        }
    }
  }

});
