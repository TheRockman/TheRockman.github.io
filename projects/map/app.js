var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope) {

  $scope.tiles = [];
  
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
    if (item.tall || item.monster) {
      return;
    } else {
      for (var i = 0; i < $scope.tiles.length; i++) {
        $scope.tiles[i].player = null;
      }
      item.player = true;
    }
    moveEnemy();
  }
  
  function moveEnemy() {
    $scope.enemyTile = null;
    for (var i = 0; i < $scope.tiles.length; i++) {
      if ($scope.tiles[i].monster) {
        $scope.enemyTile = $scope.tiles[i];
      }
    }
    
    if ($scope.enemyTile) {
      var d = Math.random();
      if (d < 0.2) {
        if ($scope.enemyTile.id + 20 < 400 && $scope.tiles[$scope.enemyTile.id + 20].tall !== true) {
          $scope.tiles[$scope.enemyTile.id + 20].monster = true;  
        } else {
          moveEnemy();
        }
      } else if (d < 0.5) {
        if ($scope.enemyTile.id - 20 > 0  && $scope.tiles[$scope.enemyTile.id - 20].tall !== true) {
          $scope.tiles[$scope.enemyTile.id - 20].monster = true;  
        } else {
          moveEnemy();
        }
      } else if (d < 0.7) {
        if ($scope.enemyTile.id + 1 > 0 && $scope.enemyTile.id + 1 < 400  && $scope.tiles[$scope.enemyTile.id + 1].tall !== true) {
          $scope.tiles[$scope.enemyTile.id + 1].monster = true;  
        } else {
          moveEnemy();
        }
      } else {
        if ($scope.enemyTile.id - 1 > 0 && $scope.enemyTile.id - 1 < 400 && $scope.tiles[$scope.enemyTile.id - 1].tall !== true) {
          $scope.tiles[$scope.enemyTile.id - 1].monster = true;  
        } else {
          moveEnemy();
        }
      }
      $scope.enemyTile.monster = false;
    } else {
      $scope.tiles[210].monster = true;
    }

  }

});
