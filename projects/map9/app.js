var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope) {

  $scope.cubes = [];
  $scope.objects = [
    {
      x: 2,
      y: 3,
      speed: 2,
      moves: [],
      stats: {}
    },
    {
      x: 1,
      y: 0,
      speed: 1,
      moves: [],
      stats: {}
    }
  ];

  $scope.phase = 'move';

  // $scope.turnOrder = [];
  // for (var i = 0; i < $scope.objects.length; i++) {
  //   $scope.turnOrder.push($scope.objects[i])
  // }
  // $scope.turnOrder.sort((a,b) => a.last_nom - b.last_nom);

  $scope.activeObject = $scope.objects[0];
  $scope.activeMove = {};

  $scope.moveSet = {
    rush: {
      matrix: [
        '0','0','0','0','0',
        '0','0','0','0','1',
        'X','1','1','1','1',
        '0','0','0','0','1',
        '0','0','0','0','0',
      ]
    }
  }

  $scope.determineActionable = function(tile, index) {
    //TODO: map matrix relative to active player
    let offset = ($scope.activeObject.y * 5 ) - $scope.activeObject.x ;

    if ( $scope.activeMove?.matrix) {
      for (var i = 0; i < $scope.cubes.length; i++) {
        if (
          i === (index + offset ) &&
          $scope.activeMove.matrix[i] === "1" ) {
          console.log($scope.activeMove.matrix[i]);
          return true;
        }
      }

    }
  }

  //movement
  $scope.determineWalkable = function(tile, index) {
    if($scope.phase === 'act'){
      return $scope.determineActionable(tile, index);
    }
    if($scope.phase !== 'move'){
      return false;
    }
    if (
      (tile.coordinates.x === $scope.activeObject.y) ||
      (tile.coordinates.y === $scope.activeObject.x)
    ) {
      if(
        (tile.coordinates.x > $scope.activeObject.y + $scope.activeObject.speed) ||
        (tile.coordinates.y > $scope.activeObject.x + $scope.activeObject.speed) ||
        (tile.coordinates.x < $scope.activeObject.y - $scope.activeObject.speed) ||
        (tile.coordinates.y < $scope.activeObject.x - $scope.activeObject.speed)
       ){
        return false;
      } else {
        return true;
      }
    } else if(
      (tile.coordinates.x === $scope.activeObject.x) &&
      (tile.coordinates.y === $scope.activeObject.y)
    ){
      return false;
    }
  }
  $scope.objectDisplay = function(obj){
    return {transform:'translateX('+ (obj.x * 200) +'px) translateY('+ (obj.y * 200) +'px)'};
  }

  $scope.moveTo = function(tile) {
    if ($scope.determineWalkable(tile)) {
      $scope.activeObject.y = tile.coordinates.x;
      $scope.activeObject.x = tile.coordinates.y;
      $scope.phase = 'act';
    }
  }

  //act
  $scope.readyAction = function(action) {
    $scope.activeMove = $scope.moveSet[action];
  }

  //Grid
  var xStart = 0;
  var yStart = 0; // Start coodinatate on y-axis
  var xEnd = 4; // End point on x-axis
  var yEnd = 4; // End point on y-axis
  var gridSize = 1; // Size of the grid increments

  for (let xLine = yStart; xLine <= yEnd; xLine += gridSize) {
    for (let yLine = xStart; yLine <= xEnd; yLine += gridSize) {
      var newFeature = {
        id: $scope.cubes.length,
        displayState: 'default',
        state: 'default',
        coordinates:{
          x: xLine,
          y: yLine
        }
      }
      $scope.cubes.push(newFeature);
    }
  }
});
//['ngTouch', 'angular-carousel']
