var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $window) {
  $scope.tiles = [];
  var row = -1;
  var col = 0;
  
  $scope.units = [
    {
      name: 'Gus',
      x: 2,
      y: 2,
      stats: {
        type: 'fighter',
        active: true
      }
    },
    {
      name: 'Ellie',
      x: 2,
      y: 8,
      stats: {
        type: 'fighter'
      }
    },
    {
      name: 'Devi',
      x: 8,
      y: 8,
      stats: {
        type: 'rouge'
      }
    }
  ];
  
  $scope.camera = function (x,y) {
    $scope.Style = {'transform':'perspective(105em) translateY(-'+y*50+'px) translateX(-'+x*10+'px) rotateX(40deg)'}
  }
  
  $scope.setCameraToUnit = function (unit) {
    for (var i = 0; i < $scope.units.length; i++) {
      if ($scope.units[i].name === unit.name) {
        $scope.camera(unit.x, unit.y)
      }
    }
  }
  
  for (var i = 0; i < 100; i++) {
    row = row +1;
    if (row > 9) {
      row = 0;
    }
    if (row === 0) {
      col = col +1;
    }
    if (col > 20) {
      col = 0;
    }
    
    $scope.tiles.push({id: i, x: row, y:col})
  }
  
  for (var i = 0; i < $scope.units.length; i++) {
      for (var j = 0; j < $scope.tiles.length; j++) {
        if ($scope.tiles[j].x === $scope.units[i].x && $scope.tiles[j].y === $scope.units[i].y) {
          $scope.tiles[j].unit = $scope.units[i].stats;
        }
      }
  }
  
});
