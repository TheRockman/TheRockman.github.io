var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope, $timeout) {

  $scope.cubes = [];

  $scope.player1 = {
    isInsideBuilding: false,
    placedATrap: false,
    hasASword: false,
    life: 5
  };

  var xStart = 10;
  var yStart = 10; // Start coodinatate on y-axis
  var xEnd = 100; // End point on x-axis
  var yEnd = 100; // End point on y-axis
  var gridSize = 10; // Size of the grid increments

  for (let xLine = yStart; xLine <= yEnd; xLine += gridSize) {
    for (let yLine = xStart; yLine <= xEnd; yLine += gridSize) {
      var newFeature = {
        id: 0,
        displayState: 'default',
        state: 'default',
        door: false,
        edge: false,
        attack: false,
        coordinates:{
          x: xLine/10,
          y: yLine/10
        }
      }
      $scope.cubes.push(newFeature);
    }
  }


  function init() {
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
  init();

  const getPlayerLocation = function(playerID){
    for (var i = 0; i < $scope.cubes.length; i++) {
      if($scope.cubes[i].state === playerID){
        return $scope.cubes[i];
      }
    }
  }

  const makeMove = function(target){
    let player = getPlayerLocation('player1');
    if ((!target.edge) && (target.id === player.id+10 || target.id === player.id-10 || target.id === player.id+1 || target.id === player.id-1)) {
      target.state = player.state;
      player.state = 'default';
    }
  }

  $scope.targetTile = function(target) {
    let player;
    let playersCurrentLocation = getPlayerLocation('player1');

    if($scope.player1.isInsideBuilding && playersCurrentLocation.door && target.displayState !== 'interior'){
      $scope.player1.isInsideBuilding = false;
    } else if(!$scope.player1.isInsideBuilding && playersCurrentLocation.door && target.displayState === 'interior'){
      $scope.player1.isInsideBuilding = false;
    } else if(!$scope.player1.isInsideBuilding && target.door){
      $scope.player1.isInsideBuilding = true;
      makeMove(target);
    } else if($scope.player1.isInsideBuilding && target.door){
      $scope.player1.isInsideBuilding = false;
      makeMove(target);
    }

    if((target.displayState === 'interior' && $scope.player1.isInsideBuilding) || (target.displayState !== 'interior' && !$scope.player1.isInsideBuilding) ){
      makeMove(target);
    } else {
      return;
    }
    makeMove(target);
  };

});
