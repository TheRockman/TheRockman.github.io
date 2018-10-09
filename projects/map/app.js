var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope, $timeout) {

  $scope.tiles = [];
  $scope.playerTile = null;
  $scope.life = {
    player: 10,
    monster: 3
  };
  $scope.spawn = false;
  $scope.range = 1;

  (function init() {
    for (var i = 0; i < 400; i++) {
      if (i == 205) {
        $scope.tiles.push(
          {
            tall: false,
            id: i,
            player: true,
            monster: null
          }
        )
      } else if (i == 210) {
        $scope.tiles.push(
          {
            tall: false,
            id: i,
            player: null,
            monster: true
          }
        )
      } else {
        $scope.tiles.push(
          {
            tall: preBuild(),
            id: i,
            player: null,
            monster: null
          }
        )
      }
    }
  })();

  function preBuild() {
    var random = Math.floor(Math.random() * 10) + 1;
    if (random == 5) {
      return true;
    } else{
      return false
    }
  }

  $scope.playerMove = function (item) {
    for (var i = 0; i < $scope.tiles.length; i++) {
      if ($scope.tiles[i].player) {
        $scope.playerTile = $scope.tiles[i];
      }
    }

    if (!item) {
      return;
    }

    if (item.tall) {
      return;
    } else if(item.id == $scope.playerTile.id + 1 * $scope.range|| item.id == $scope.playerTile.id - 1 * $scope.range || item.id == $scope.playerTile.id + 20 * $scope.range || item.id == $scope.playerTile.id - 20 * $scope.range){
      if (item.monster) {
        combat(item);
      }

      for (var i = 0; i < $scope.tiles.length; i++) {
        $scope.tiles[i].player = null;
      }
      item.player = true;
      moveEnemy();
    }
  }
  $scope.playerMove();

  function combat(item) {
    $scope.fight = true;
    $timeout( function(){
      $scope.fight = false;
      $scope.life.player--;
      $scope.life.monster--;
    }, 2000 );
    if ($scope.life.monster < 1) {
      $scope.life.monster = 3;
      for (var i = 0; i < $scope.tiles.length; i++) {
        $scope.tiles[i].monster = null;
      }
    }
  }

  function spawn() {
    var random = Math.floor(Math.random() * 399) + 1;
    if (!$scope.tiles[random].tall && !$scope.tiles[random].player) {
      $scope.life.monster = 3;
      $scope.tiles[random].monster = true;
      $scope.spawn = false;
    } else{
      spawn();
    }
  }

  function moveEnemy() {
    if ($scope.spawn) {
       for (var i = 0; i < $scope.tiles.length; i++) {
         $scope.tiles[i].monster = null;
       }
       spawn();
    }

    $scope.enemyTile = null;
    for (var i = 0; i < $scope.tiles.length; i++) {
      if ($scope.tiles[i].monster) {
        $scope.enemyTile = $scope.tiles[i];
      }
      if ($scope.tiles[i].player) {
        if (
          $scope.tiles[i].id == $scope.playerTile.id + 1 * $scope.range ||
          $scope.tiles[i].id == $scope.playerTile.id - 1 * $scope.range || 
          $scope.tiles[i].id == $scope.playerTile.id + 20 * $scope.range || 
          $scope.tiles[i].id == $scope.playerTile.id - 20 * $scope.range
         ) {
          $scope.tiles[i].move = true;
        }else {
          $scope.tiles[i].move = false;
        }
      }
    }

    if ($scope.enemyTile) {
      var d = Math.random();
      if (d < 0.2) {
        if ($scope.enemyTile.id + 20 < 400 && $scope.tiles[$scope.enemyTile.id + 20].tall !== true && $scope.tiles[$scope.enemyTile.id + 20].player !== true) {
          $scope.tiles[$scope.enemyTile.id + 20].monster = true;
        } else {
          moveEnemy();
        }
      } else if (d < 0.5) {
        if ($scope.enemyTile.id - 20 > 0  && $scope.tiles[$scope.enemyTile.id - 20].tall !== true && $scope.tiles[$scope.enemyTile.id - 20].player !== true) {
          $scope.tiles[$scope.enemyTile.id - 20].monster = true;
        } else {
          moveEnemy();
        }
      } else if (d < 0.7) {
        if ($scope.enemyTile.id + 1 > 0 && $scope.enemyTile.id + 1 < 400  && $scope.tiles[$scope.enemyTile.id + 1].tall !== true  && $scope.tiles[$scope.enemyTile.id + 1].player !== true) {
          $scope.tiles[$scope.enemyTile.id + 1].monster = true;
        } else {
          moveEnemy();
        }
      } else {
        if ($scope.enemyTile.id - 1 > 0 && $scope.enemyTile.id - 1 < 400 && $scope.tiles[$scope.enemyTile.id - 1].tall !== true  && $scope.tiles[$scope.enemyTile.id - 1].player !== true) {
          $scope.tiles[$scope.enemyTile.id - 1].monster = true;
        } else {
          moveEnemy();
        }
      }
      $scope.enemyTile.monster = false;
    } else {
      $scope.tiles[211].monster = true;
    }
    for (var i = 0; i < $scope.tiles.length; i++) {
      if ($scope.tiles[i].player) {
        $scope.playerTile = $scope.tiles[i];
      }
    }
  }

});
