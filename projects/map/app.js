var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope) {

  $scope.tiles = [];
  $scope.moves = 10;
  
  (function init() {
    for (var i = 0; i < 400; i++) {
      $scope.tiles.push(
        {
          tall: preBuild(i),
          id: i
        }
      )
    }
  })();
  
  function preBuild(i) {
    if (i == 8 || i == 9 || i == 10|| i == 11 ) {
      return true;
    } else{
      return false
    }
  }
  
  $scope.evolve = function (item) {
    if ($scope.moves < 1) {
      alert('no more moves');
      return;
    }
    if (item.tall) {
        $scope.moves =   $scope.moves + 1;
        item.tall = false;
    } else {
      $scope.moves = $scope.moves - 1;
      item.tall = true;
    }
  }

});
