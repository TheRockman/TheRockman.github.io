var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope) {

  $scope.tiles = [];
  
  (function init() {
    for (var i = 0; i < 400; i++) {
      if (i !== 205) {
        $scope.tiles.push(
          {
            tall: preBuild(),
            id: i,
            player: null
          }
        )  
      } else {
        $scope.tiles.push(
          {
            tall: false,
            id: i,
            player: true
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
  
  $scope.evolve = function (item) {
    if (item.tall) {
      return;
    } else {
      for (var i = 0; i < $scope.tiles.length; i++) {
        $scope.tiles[i].player = null;
      }
      item.player = true;
    }
  }

});
